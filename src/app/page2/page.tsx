import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx
} from '@pageforge/once-ui/components'

export default function Home() {
  return (
    <Column fill center padding="l">
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Logo icon={false} href="https://once-ui.com" size="xs" />
          <Line vert background="neutral-alpha-strong" />
          <Text marginX="4">
            <LetterFx trigger="instant">
              PageForge + Supabase + Once UI
            </LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="24">
          Full-Stack Next.js Starter
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
          Next.js 15 + Supabase + Once UI + TypeScript + Tailwind CSS
        </Text>
        <Column gap="m" align="center">
          <Button
            href="/login"
            variant="primary"
            data-border="rounded"
            weight="default"
            prefixIcon="user"
            arrowIcon
          >
            Get Started
          </Button>
          <Button
            href="https://docs.once-ui.com/once-ui/quick-start"
            variant="secondary"
            data-border="rounded"
            weight="default"
            prefixIcon="copy"
            arrowIcon
          >
            Explore Once UI
          </Button>
        </Column>
      </Column>
    </Column>
  )
}
