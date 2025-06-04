/**
 * Integration Guide: AI-Powered Custom Sections in UniversalPage
 *
 * This guide shows how the CustomSection component integrates with your existing
 * UniversalPage system to automatically generate sections when unknown types are requested.
 */

// How it works:

// 1. User requests a section type that doesn't exist in predefined sections
const customSectionRequest = {
  type: 'pricing-calculator', // ← This type doesn't exist in your predefined sections
  content: {
    title: 'Interactive Pricing Calculator',
    description: 'Choose the perfect plan for your needs',
    plans: [
      { name: 'Starter', price: 9 },
      { name: 'Professional', price: 29 }
    ]
  }
}

// 2. UniversalSections component checks for the section type
// Since 'pricing-calculator' doesn't exist, it falls back to CustomSection

// 3. CustomSection analyzes the request and generates code
const generatedUserRequest = `Create a pricing calculator section with title "Interactive Pricing Calculator" and description "Choose the perfect plan for your needs" with 2 plans in modern style`

// 4. AI analyzes the request and generates React component code
const generatedCode = `
import { Grid, Card, Text, Flex, Button } from '@pageforge/once-ui/components'

export default function PricingCalculatorSection() {
  const plans = [
    { name: "Starter", price: 9, features: ["Basic Features", "Email Support"] },
    { name: "Professional", price: 29, features: ["Advanced Features", "Priority Support", "Analytics"] }
  ]

  return (
    <Grid columns="2" gap="l" className="pricing-calculator">
      {plans.map((plan, index) => (
        <Card key={index}>
          <Flex direction="column" gap="m" padding="l">
            <Text variant="heading-strong-m">{plan.name}</Text>
            <Text variant="display-strong-s">$${plan.price}/month</Text>
            <Flex direction="column" gap="s">
              {plan.features.map((feature, idx) => (
                <Text key={idx} variant="body-default-s">{feature}</Text>
              ))}
            </Flex>
            <Button variant="primary" size="m">Get Started</Button>
          </Flex>
        </Card>
      ))}
    </Grid>
  )
}
`

// Key Benefits:

// ✅ Seamless Integration: Works with existing UniversalPage system
// ✅ Automatic Fallback: No manual intervention needed for unknown section types
// ✅ Content Aware: Uses block.content data to inform AI generation
// ✅ Type Flexible: Handles any custom section type name
// ✅ Once UI Compatible: Generated code uses your design system

// Usage Examples:

// In your page config, you can now use any section type:
const examplePageConfig = {
  content: {
    main: [
      {
        blocks: [
          // This exists - renders normally
          { type: 'hero', content: { title: 'Welcome' } },

          // These don't exist - AI generates them automatically
          { type: 'pricing-calculator', content: { plans: [...] } },
          { type: 'product-showcase', content: { products: [...] } },
          { type: 'learning-dashboard', content: { courses: [...] } },
          { type: 'real-estate-listings', content: { properties: [...] } },
          { type: 'booking-calendar', content: { availability: [...] } },
          { type: 'data-visualization', content: { metrics: [...] } }
        ]
      }
    ]
  }
}

// The system will:
// 1. Try to render using predefined sections first
// 2. If section type doesn't exist, automatically use CustomSection
// 3. CustomSection analyzes the request and generates appropriate code
// 4. Displays the generated section with loading and error states

// Development Workflow:

// 1. Developer adds new section type to page config
// 2. AI automatically generates section on first render
// 3. Developer can review generated code and decide to:
//    - Keep as dynamic AI-generated section
//    - Copy code and create proper predefined section
//    - Refine the request for better AI generation

export {}
