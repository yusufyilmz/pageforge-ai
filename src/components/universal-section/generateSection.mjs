#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SectionConfig type definition (as JSDoc comment)
/**
 * @typedef {Object} SectionConfig
 * @property {string} name
 * @property {string} type
 * @property {Array<{name: string, type: string, required?: boolean, description?: string}>} fields
 */

class SectionGenerator {
  constructor() {
    this.sectionsDir = path.join(__dirname, '../sections/universal')
    this.typesDir = path.join(__dirname, '../../lib/types/page')
  }

  // Generate section component
  generateSectionComponent(config) {
    const componentName = `${config.name}Section`
    const contentTypeName = `${config.name}SectionContent`

    return `'use client'

import React from 'react'
import {
  Flex,
  Heading,
  Text,
  Column
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  ${contentTypeName}
} from '@pageforge/types/page/pageTypes'

interface ${componentName}Props {
  block: Extract<ContentBlock, { type: '${config.type}' }>
  index: number
}

export const ${componentName} = ({ block, index }: ${componentName}Props) => {
  const content = block.content

  if (block.display === false) return null

  // Default content structure
  const {
${config.fields.map(field => {
  const defaultValue = field.type === 'string' ? `'Default ${field.name}'` :
                      field.type === 'boolean' ? 'false' :
                      field.type === 'array' ? '[]' :
                      field.type === 'number' ? '0' : '{}'
  return `    ${field.name} = ${defaultValue}`
}).join(',\n')}
  } = content || {}

  return (
    <Flex
      fillWidth
      direction="column"
      alignItems="center"
      padding="xl"
      gap="l"
    >
      <Column maxWidth="m" fillWidth>
        <Flex direction="column" gap="m">
          <Heading variant="display-strong-s">
            {${config.fields.find(f => f.name === 'title')?.name || 'title'}}
          </Heading>
          {${config.fields.find(f => f.name === 'description')?.name || 'description'} && (
            <Text variant="body-default-l">
              {${config.fields.find(f => f.name === 'description')?.name || 'description'}}
            </Text>
          )}
          {/* Add your custom section content here */}
        </Flex>
      </Column>
    </Flex>
  )
}
`
  }

  // Generate TypeScript type definition
  generateTypeDefinition(config) {
    const contentTypeName = `${config.name}SectionContent`

    return `
export interface ${contentTypeName} {
${config.fields.map(field => {
  const optional = field.required ? '' : '?'
  let type = field.type
  if (field.type === 'array') type = 'Array<any>' // Can be made more specific
  return `  ${field.name}${optional}: ${type}${field.description ? ` // ${field.description}` : ''}`
}).join('\n')}
}
`
  }

  // Update the main types file
  updateTypesFile(config) {
    const typesFilePath = path.join(this.typesDir, 'pageTypes.ts')
    const typeDefinition = this.generateTypeDefinition(config)

    if (fs.existsSync(typesFilePath)) {
      const content = fs.readFileSync(typesFilePath, 'utf-8')
      const updatedContent = content + typeDefinition
      fs.writeFileSync(typesFilePath, updatedContent)
      console.log(`✓ Added type definition to pageTypes.ts`)
    }
  }

  // Update the universal sections index file
  updateIndexFile(config) {
    const indexPath = path.join(this.sectionsDir, 'index.ts')
    const componentName = `${config.name}Section`
    const exportLine = `export { ${componentName} } from './${componentName}'`

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8')
      const updatedContent = content + '\n' + exportLine
      fs.writeFileSync(indexPath, updatedContent)
      console.log(`✓ Added export to index.ts`)
    }
  }

  // Update AutoSectionRegistry with new section type
  updateAutoRegistry(config) {
    const registryPath = path.join(__dirname, 'AutoSectionRegistry.ts')

    if (fs.existsSync(registryPath)) {
      let content = fs.readFileSync(registryPath, 'utf-8')

      // Add the new section type to the sectionTypes array
      const sectionTypesMatch = content.match(/(this\.sectionTypes = \[[\s\S]*?\])/m)
      if (sectionTypesMatch) {
        const currentArray = sectionTypesMatch[1]
        const newArray = currentArray.replace(/\]/, `, '${config.type}']`)
        content = content.replace(currentArray, newArray)

        fs.writeFileSync(registryPath, content)
        console.log(`✓ Added section type to AutoSectionRegistry`)
      }
    }
  }

  // Main generation method
  async generateSection(config) {
    const componentName = `${config.name}Section`
    const componentPath = path.join(this.sectionsDir, `${componentName}.tsx`)

    // Generate component file
    const componentCode = this.generateSectionComponent(config)
    fs.writeFileSync(componentPath, componentCode)
    console.log(`✓ Created ${componentName}.tsx`)

    // Update type definitions
    this.updateTypesFile(config)

    // Update index file
    this.updateIndexFile(config)

    // Update auto registry
    this.updateAutoRegistry(config)

    console.log(`\n🎉 Section '${config.name}' generated successfully!`)
    console.log(`\nTo use your new section:`)
    console.log(`1. Add content blocks with type: '${config.type}'`)
    console.log(`2. The section will be automatically loaded by AutoUniversalSections`)
    console.log(`3. Customize the component at: ${componentPath}`)
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log(`
Section Generator CLI

Usage:
  npm run generate-section -- --name <SectionName> --type <section-type>

Example:
  npm run generate-section -- --name ProductShowcase --type product-showcase

Options:
  --name     Component name (PascalCase, e.g., ProductShowcase)
  --type     Section type (kebab-case, e.g., product-showcase)
  --fields   Comma-separated field definitions (optional)

Field format: name:type:required:description
Example: --fields "title:string:true:Section title,items:array:false:List of items"
`)
    process.exit(1)
  }

  let name = ''
  let type = ''
  let fieldsStr = ''

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name' && args[i + 1]) {
      name = args[i + 1]
      i++
    } else if (args[i] === '--type' && args[i + 1]) {
      type = args[i + 1]
      i++
    } else if (args[i] === '--fields' && args[i + 1]) {
      fieldsStr = args[i + 1]
      i++
    }
  }

  if (!name || !type) {
    console.error('Error: Both --name and --type are required')
    process.exit(1)
  }

  // Parse fields
  let fields = [
    { name: 'title', type: 'string', required: true, description: 'Section title' },
    { name: 'description', type: 'string', required: false, description: 'Section description' }
  ]

  if (fieldsStr) {
    const customFields = fieldsStr.split(',').map(fieldStr => {
      const parts = fieldStr.split(':')
      return {
        name: parts[0],
        type: parts[1] || 'string',
        required: parts[2] === 'true',
        description: parts[3] || ''
      }
    })
    fields = [...fields, ...customFields]
  }

  const generator = new SectionGenerator()
  const config = { name, type, fields }

  await generator.generateSection(config)
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error)
}

export { SectionGenerator }
