import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { convertToWebP, formatBytes } from '../../../utils/imageProcessor'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h3`
  margin: 0 0 24px 0;
  color: #1f2937;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '📷';
    font-size: 24px;
  }
`

const UploadSection = styled.div`
  margin-bottom: 32px;
`

const SectionSubtitle = styled.h4`
  margin: 0 0 16px 0;
  color: #374151;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '${props => props.icon}';
    font-size: 18px;
  }
`

const UploadArea = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  background: ${props => props.isDragOver ? '#f0f9ff' : '#fafafa'};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #667eea;
    background: #f0f9ff;
  }

  ${props => props.isDragOver && `
    border-color: #667eea;
    background: #f0f9ff;
  `}
`

const UploadIcon = styled.div`
  font-size: 48px;
  color: #9ca3af;
  margin-bottom: 16px;
`

const UploadText = styled.div`
  color: #6b7280;
  margin-bottom: 8px;

  h5 {
    margin: 0 0 4px 0;
    color: #374151;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
`

const PreviewCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.type === 'photo' ? '#10b981' : '#f59e0b'};
`

const PreviewImage = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 6px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '${props => props.type === 'photo' ? '📷' : '📄'}';
    font-size: 32px;
    color: #9ca3af;
  }

  ${props => props.hasImage && `
    &::before {
      display: none;
    }
  `}
`

const PreviewInfo = styled.div`
  h6 {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #374151;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #6b7280;
    line-height: 1.3;
  }
`

const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
  }
`

const SaveButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`

const Requirements = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  border-left: 4px solid #667eea;

  h5 {
    margin: 0 0 8px 0;
    color: #374151;
    font-size: 14px;
  }

  ul {
    margin: 0;
    padding-left: 16px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.4;
  }
`

const PhotosDocsTab = () => {
  const [photo, setPhoto] = useState(null)
  const [documents, setDocuments] = useState([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    if (file.size > 3 * 1024 * 1024) { // 3MB
      toast.error('La imagen debe ser menor a 3MB')
      return
    }
    if (!file.type.startsWith('image/')) {
      toast.error('Solo se permiten archivos de imagen')
      return
    }

    setProcessing(true)
    try {
      const result = await convertToWebP(file, {
        maxWidth: 400,
        maxHeight: 400,
        quality: 0.8,
        outputName: `photo_${Date.now()}`
      })

      setPhoto({
        file: result.file,
        preview: result.previewUrl,
        name: `${result.file.name}`,
        size: formatBytes(result.webpSize),
        originalSize: formatBytes(result.originalSize),
        savedPercent: result.savedPercent
      })

      if (result.savedPercent > 0) {
        toast.success(
          `Foto optimizada: ${formatBytes(result.originalSize)} → ${formatBytes(result.webpSize)} (${result.savedPercent}% menos)`,
          { autoClose: 3000 }
        )
      }
    } catch (error) {
      console.error('Error al procesar la imagen:', error)
      toast.error('Error al procesar la imagen. Intenta con otro archivo.')
    } finally {
      setProcessing(false)
      event.target.value = ''
    }
  }

  const handleDocumentUpload = (event) => {
    const files = Array.from(event.target.files)
    if (files.length === 0) return

    const validFiles = files.filter(file => {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
      return allowedTypes.includes(file.type) && file.size <= 3 * 1024 * 1024
    })

    if (validFiles.length !== files.length) {
      toast.warning('Algunos archivos fueron rechazados (tipo no válido o tamaño > 3MB)')
    }

    if (validFiles.length === 0) {
      toast.error('No se encontraron archivos válidos para subir')
      return
    }

    try {
      const newDocuments = validFiles.map(file => ({
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        type: file.type
      }))

      setDocuments(prev => [...prev, ...newDocuments])
      toast.success(`${validFiles.length} documento(s) agregado(s) correctamente`)
    } catch (error) {
      console.error('Error al procesar documentos:', error)
      toast.error('Error al procesar los documentos')
    }
  }

  const removePhoto = () => {
    setPhoto(null)
  }

  const removeDocument = (index) => {
    setDocuments(prev => prev.filter((_, i) => i !== index))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    const docFiles = files.filter(file => {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
      return allowedTypes.includes(file.type)
    })

    if (imageFiles.length > 0 && !photo) {
      handlePhotoUpload({ target: { files: [imageFiles[0]] } })
    }

    if (docFiles.length > 0) {
      handleDocumentUpload({ target: { files: docFiles } })
    }
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      console.log('Foto:', photo)
      console.log('Documentos:', documents)
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Archivos guardados exitosamente')
    } catch (error) {
      toast.error('Error al guardar los archivos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <FormContainer>
        <SectionTitle>Fotos y Documentos</SectionTitle>

        <UploadSection>
          <SectionSubtitle icon="📸">Foto de Perfil</SectionSubtitle>
          <UploadArea
            isDragOver={isDragOver}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <UploadIcon>📷</UploadIcon>
            <UploadText>
              <h5>Subir Foto de Perfil</h5>
              <p>Arrastra y suelta una imagen aquí, o haz clic para seleccionar</p>
            </UploadText>
            <FileInput
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </UploadArea>
        </UploadSection>

        <UploadSection>
          <SectionSubtitle icon="📄">Documentos</SectionSubtitle>
          <UploadArea
            isDragOver={isDragOver}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <UploadIcon>📄</UploadIcon>
            <UploadText>
              <h5>Subir Documentos</h5>
              <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar (PDF, DOC, TXT)</p>
            </UploadText>
            <FileInput
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              multiple
              onChange={handleDocumentUpload}
            />
          </UploadArea>
        </UploadSection>

        <Requirements>
          <h5>Requisitos de Archivos</h5>
          <ul>
            <li>Máximo 3MB por archivo</li>
            <li>Imágenes: JPG, PNG, GIF, WEBP (se convierten automáticamente)</li>
            <li>Documentos: PDF, DOC, DOCX, TXT</li>
            <li>Hasta 5 documentos por usuario</li>
          </ul>
        </Requirements>

        <PreviewGrid>
          {photo && (
            <PreviewCard type="photo">
              <PreviewImage hasImage={true} type="photo">
                <img src={photo.preview} alt="Foto de perfil" />
                <RemoveButton onClick={removePhoto}>×</RemoveButton>
              </PreviewImage>
              <PreviewInfo>
                <h6>Foto de Perfil</h6>
                <p>{photo.name}<br/>{photo.size}</p>
              </PreviewInfo>
            </PreviewCard>
          )}

          {documents.map((doc, index) => (
            <PreviewCard key={index} type="document">
              <PreviewImage type="document">
                <RemoveButton onClick={() => removeDocument(index)}>×</RemoveButton>
              </PreviewImage>
              <PreviewInfo>
                <h6>{doc.name}</h6>
                <p>{doc.size}<br/>{doc.type}</p>
              </PreviewInfo>
            </PreviewCard>
          ))}
        </PreviewGrid>

        {(photo || documents.length > 0) && (
          <SaveButton onClick={handleSave} disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar Archivos'}
          </SaveButton>
        )}
      </FormContainer>
    </Container>
  )
}

export default PhotosDocsTab