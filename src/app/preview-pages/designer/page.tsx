'use client'

import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'
import { designerTemplate } from '@pageforge/lib/services/page-builder'

const DesignerPreview = () => {
  const pageConfig = designerTemplate()

  return <UniversalPage config={pageConfig} />
}

export default DesignerPreview
