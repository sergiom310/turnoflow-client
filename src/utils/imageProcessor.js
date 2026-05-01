/**
 * Image Processor - Utilidad reutilizable para procesar imágenes
 * Convierte imágenes a WebP con redimensionamiento optimizado
 * Uso: import { convertToWebP } from '../../utils/imageProcessor'
 */

const DEFAULT_MAX_WIDTH = 512
const DEFAULT_MAX_HEIGHT = 512
const DEFAULT_QUALITY = 0.8

/**
 * Convierte un archivo de imagen a WebP con redimensionamiento
 * @param {File} file - Archivo de imagen original
 * @param {Object} options - Opciones de configuración
 * @param {number} options.maxWidth - Ancho máximo (default: 512)
 * @param {number} options.maxHeight - Alto máximo (default: 512)
 * @param {number} options.quality - Calidad WebP 0-1 (default: 0.8)
 * @param {string} options.outputName - Nombre del archivo de salida (default: mismo nombre sin extensión)
 * @returns {Promise<{file: File, originalSize: number, webpSize: number, savedPercent: number}>}
 */
export const convertToWebP = async (file, options = {}) => {
  const {
    maxWidth = DEFAULT_MAX_WIDTH,
    maxHeight = DEFAULT_MAX_HEIGHT,
    quality = DEFAULT_QUALITY,
    outputName
  } = options

  if (!file || !file.type.startsWith('image/')) {
    throw new Error('El archivo no es una imagen válida')
  }

  const originalSize = file.size
  const name = outputName || file.name.replace(/\.[^.]+$/, '')

  // Cargar imagen en un elemento Image
  const img = await loadImage(file)

  // Calcular nuevas dimensiones manteniendo proporción
  const { width, height } = calculateDimensions(img.width, img.height, maxWidth, maxHeight)

  // Dibujar en Canvas y exportar a WebP
  const webpBlob = await drawAndExport(img, width, height, quality)

  // Crear File a partir del Blob
  const webpFile = new File([webpBlob], `${name}.webp`, {
    type: 'image/webp',
    lastModified: Date.now()
  })

  const savedPercent = originalSize > 0
    ? Math.round((1 - webpFile.size / originalSize) * 100)
    : 0

  const result = {
    file: webpFile,
    originalSize,
    webpSize: webpFile.size,
    savedPercent,
    originalWidth: img.width,
    originalHeight: img.height,
    webpWidth: width,
    webpHeight: height
  }

  // Intentar crear URL de preview (data URL desde el blob)
  try {
    result.previewUrl = URL.createObjectURL(webpBlob)
  } catch {
    // Fallback: no generar preview
  }

  return result
}

/**
 * Carga un archivo como imagen HTML
 * @param {File} file
 * @returns {Promise<HTMLImageElement>}
 */
const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Error al cargar la imagen'))
    }

    img.src = url
  })
}

/**
 * Calcula dimensiones manteniendo la proporción
 */
const calculateDimensions = (originalWidth, originalHeight, maxWidth, maxHeight) => {
  let width = originalWidth
  let height = originalHeight

  if (width > maxWidth) {
    height = Math.round((height * maxWidth) / width)
    width = maxWidth
  }

  if (height > maxHeight) {
    width = Math.round((width * maxHeight) / height)
    height = maxHeight
  }

  return { width, height }
}

/**
 * Dibuja la imagen en un Canvas y exporta a WebP
 */
const drawAndExport = (img, width, height, quality) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      reject(new Error('No se pudo crear el contexto del canvas'))
      return
    }

    // Fondo blanco para imágenes con transparencia
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, width, height)
    ctx.drawImage(img, 0, 0, width, height)

    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob)
        } else {
          reject(new Error('Error al convertir la imagen a WebP'))
        }
      },
      'image/webp',
      quality
    )
  })
}

/**
 * Formatea bytes a un tamaño legible
 * @param {number} bytes
 * @returns {string}
 */
export const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

export default convertToWebP
