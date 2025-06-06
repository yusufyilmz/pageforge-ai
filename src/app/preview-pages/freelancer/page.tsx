'use client'

import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'

import { GenericLayout } from '../../../components/layout/Layout'
import { freelancerTemplate } from '../../../lib/services/page-builder'

const FreelancerPreview = () => {
  // Generate the freelancer template configuration
  const pageConfig = freelancerTemplate()

  return (
    <GenericLayout theme='natural'>
      <UniversalPage config={pageConfig} />
    </GenericLayout>
  )
}

export default FreelancerPreview
