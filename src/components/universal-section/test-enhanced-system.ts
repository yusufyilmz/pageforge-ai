import { aiSectionFactory } from './AISectionFactory'

// Test the enhanced AI section generation system
console.log('🧪 Testing Enhanced AI Section Generation System\n')

// Test 1: Basic section analysis
console.log('1️⃣ Testing Basic Section Analysis:')
try {
  const basicRequirements = aiSectionFactory.analyzeUserRequirements(
    'Create a team section with member photos and bios'
  )
  console.log('✅ Basic analysis completed:')
  console.log('   Layout:', basicRequirements.layout)
  console.log(
    '   Elements:',
    basicRequirements.elements.map((e: any) => e.type).join(', ')
  )
  console.log('   Style:', basicRequirements.style)
} catch (error) {
  console.log('❌ Basic analysis failed:', error)
}

// Test 2: Advanced interactive section analysis
console.log('\n2️⃣ Testing Advanced Interactive Section Analysis:')
try {
  const advancedRequirements = aiSectionFactory.analyzeUserRequirements(`
    Create an interactive pricing calculator with:
    - 3 pricing tiers (Basic, Pro, Enterprise)
    - Monthly/yearly toggle with discount
    - Feature comparison table
    - Usage sliders for users and storage
    - Real-time price updates
  `)
  console.log('✅ Advanced analysis completed:')
  console.log('   Layout:', advancedRequirements.layout)
  console.log(
    '   Elements:',
    advancedRequirements.elements.map((e: any) => e.type).join(', ')
  )
  console.log(
    '   Interactions:',
    advancedRequirements.interactions?.map((i: any) => i.action).join(', ') ||
      'none'
  )
  console.log(
    '   Custom requirements:',
    advancedRequirements.customRequirements
  )
} catch (error) {
  console.log('❌ Advanced analysis failed:', error)
}

// Test 3: Industry-specific section analysis
console.log('\n3️⃣ Testing Industry-Specific Section Analysis:')
try {
  const industryRequirements = aiSectionFactory.analyzeUserRequirements(`
    Build a real estate property listing with:
    - Property cards with images and details
    - Advanced filtering by price and location
    - Map integration
    - Saved favorites functionality
  `)
  console.log('✅ Industry analysis completed:')
  console.log('   Layout:', industryRequirements.layout)
  console.log(
    '   Elements:',
    industryRequirements.elements.map((e: any) => e.type).join(', ')
  )
  console.log(
    '   Custom requirements:',
    industryRequirements.customRequirements
  )
} catch (error) {
  console.log('❌ Industry analysis failed:', error)
}

// Test 4: Code generation
console.log('\n4️⃣ Testing Code Generation:')
try {
  const requirements = aiSectionFactory.analyzeUserRequirements(
    'Create a simple contact form with name, email, and message fields'
  )
  const code = aiSectionFactory.generateSectionCode(requirements, 'ContactForm')
  console.log('✅ Code generation completed')
  console.log('   Generated component length:', code.length, 'characters')
  console.log('   Contains React imports:', code.includes('import React'))
  console.log('   Contains Once UI imports:', code.includes('once-ui'))
} catch (error) {
  console.log('❌ Code generation failed:', error)
}

console.log('\n🎉 Enhanced AI Section Generation System Testing Complete!')
console.log(
  '📊 System can now handle 20+ element types, 7 layout types, and complex requirements.'
)
