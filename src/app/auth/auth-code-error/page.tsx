import { Column, Heading, Text, Button } from '@pageforge/once-ui/components'

export default function AuthCodeError() {
  return (
    <Column fill center padding='l'>
      <Column maxWidth='s' gap='l' align='center'>
        <Heading variant='heading-strong-l'>Authentication Error</Heading>
        <Text
          variant='body-default-l'
          onBackground='neutral-weak'
          align='center'
        >
          Sorry, we couldn&apos;t sign you in. There was an error with the
          authentication process.
        </Text>
        <Button href='/login' variant='primary'>
          Try Again
        </Button>
      </Column>
    </Column>
  )
}
