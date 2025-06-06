'use client'

import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'
import { developerTemplate } from '@pageforge/lib/services/page-builder'

const DeveloperPreview = () => {
  // Generate the developer template configuration
  const pageConfig = developerTemplate()

  return <UniversalPage config={pageConfig} />
}

export default DeveloperPreview
