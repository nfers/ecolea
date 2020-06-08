import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './styles.css';
import { FiUpload } from 'react-icons/fi'

const Dropzone = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFile(fileUrl);

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })

  return (
    <div className="dropzone"{...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {
        selectedFile
          ? <img src={selectedFile} alt="point" />
          : (
            <p>
              <FiUpload />
       Imagem do Estabelecimento
            </p>
          )
      }

    </div>
  )
}

export default Dropzone;