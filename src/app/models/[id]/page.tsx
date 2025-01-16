'use client'

import Container from '@/components/Container'
import LiDARViewer from '@/components/models/GLBModelView'

const modelUrl = 'https://pub-3ddc700c19d2426a84368fafe6fcb76b.r2.dev/yokoari.glb'

const Model = () => {
  return (
    <Container>
      <div style={{ height: '75vh', width: '100vw' }}>
        <LiDARViewer modelUrl={modelUrl} />
      </div>
    </Container>
  )
}

export default Model
