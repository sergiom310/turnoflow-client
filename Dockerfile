FROM node:24-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

# 🔥 APAGAR EL FILTRO DE SEGURIDAD GLOBAL DE PNPM PARA DEJAR COMPILAR ESBUILD
ENV PNPM_IGNORE_SCRIPTS=false

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build


FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]