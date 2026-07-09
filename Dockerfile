FROM node:24-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

# 🔥 Forzamos la instalación permitiendo específicamente los scripts que necesita vite/esbuild
RUN pnpm install --frozen-lockfile --allow-build=esbuild

COPY . .

RUN pnpm run build


FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]