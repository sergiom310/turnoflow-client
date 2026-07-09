FROM node:24-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

# Esta variable de entorno bypasea el mecanismo de seguridad completamente
ENV PNPM_IGNORE_SCRIPTS=true
RUN pnpm install --frozen-lockfile --ignore-scripts

# esbuild necesita su postinstall, lo corremos manualmente
RUN node node_modules/esbuild/install.js || true

COPY . .
RUN pnpm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]