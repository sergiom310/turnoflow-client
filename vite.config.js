import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  server: {
    /**
     * Escucha en 0.0.0.0 para que turnoflow.local (y subdominios)
     * resueltos en /etc/hosts lleguen al servidor Vite.
     */
    host: true,
    port: 5173,

    /**
     * Hosts permitidos explícitamente (Vite 4.x+ bloquea hosts desconocidos por seguridad).
     * Agrega aquí cada subdominio de tenant que uses en dev.
     */
    allowedHosts: [
      'turnoflow.local',
      '.turnoflow.local',   // wildcard: cualquier subdominio *.turnoflow.local
    ],

    /**
     * Proxy de desarrollo — redirige /api al backend Express.
     *
     * Ventajas:
     *  - El navegador solo habla con turnoflow.local:5173 (mismo origen)
     *  - Las cookies httpOnly se setean en turnoflow.local / cliente1.turnoflow.local
     *  - No hay problemas de CORS ni de sameSite en desarrollo
     *  - El subdominio se inyecta automáticamente como X-Tenant-Subdomain
     *
     * En producción este proxy no existe: el frontend es un build estático
     * y las llamadas van directo al backend con CORS configurado.
     */
    proxy: {
      '/uploads': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            // Extraer el subdominio del host original del navegador
            // Ej: "cliente1.turnoflow.local:5173" → partes: ["cliente1", "turnoflow", "local"]
            const hostname = (req.headers.host ?? '').split(':')[0]
            const parts    = hostname.split('.')

            if (parts.length >= 3) {
              // Inyectar header que lee el tenant middleware del backend
              proxyReq.setHeader('X-Tenant-Subdomain', parts[0])
            }

            // Preservar el host original para logs
            proxyReq.setHeader('X-Forwarded-Host', req.headers.host ?? '')
          })
        },
      },
    },
  },
})
