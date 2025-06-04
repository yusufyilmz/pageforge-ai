import { UniversalPage } from '@pageforge/components/universal-page/UniversalPage'
import { pageConfigurations } from '@pageforge/lib/services/new-page/pageConfigurations'

export default function Blog() {
  return <UniversalPage config={pageConfigurations.about()} />
}
