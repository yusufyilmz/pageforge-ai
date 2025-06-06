#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SectionConfig {
  name: string;
  type: string;
  fields: Array<{
    name: string;
    type: "string" | "number" | "boolean" | "array" | "object";
    required?: boolean;
    description?: string;
  }>;
}

class SectionGenerator {
  private sectionsDir: string;
  private typesDir: string;

  constructor() {
    this.sectionsDir = path.join(__dirname, "../sections/universal");
    this.typesDir = path.join(__dirname, "../../lib/types/page");
  }

  // Generate section component
  generateSectionComponent(config: SectionConfig): string {
    const componentName = `${config.name}Section`;
    const contentTypeName = `${config.name}SectionContent`;

    return `'use client'


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
${config.fields
  .map((field) => {
    const defaultValue =
      field.type === "string"
        ? `'Default ${field.name}'`
        : field.type === "boolean"
          ? "false"
          : field.type === "array"
            ? "[]"
            : field.type === "number"
              ? "0"
              : "{}";
    return `    ${field.name} = ${defaultValue}`;
  })
  .join(",\n")}
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
            {${config.fields.find((f) => f.name === "title")?.name || "title"}}
          </Heading>
          {${config.fields.find((f) => f.name === "description")?.name || "description"} && (
            <Text variant="body-default-l">
              {${config.fields.find((f) => f.name === "description")?.name || "description"}}
            </Text>
          )}
          {/* Add your custom section content here */}
        </Flex>
      </Column>
    </Flex>
  )
}
`;
  }

  // Generate TypeScript type definition
  generateTypeDefinition(config: SectionConfig): string {
    const contentTypeName = `${config.name}SectionContent`;

    return `
export interface ${contentTypeName} {
${config.fields
  .map((field) => {
    const optional = field.required ? "" : "?";
    let typeString: string = field.type;
    if (field.type === "array") {
      typeString = "Array<any>";
    } // Can be made more specific
    return `  ${field.name}${optional}: ${typeString}${field.description ? ` // ${field.description}` : ""}`;
  })
  .join("\n")}
}
`;
  }

  // Update the main types file
  updateTypesFile(config: SectionConfig): void {
    const typesFilePath = path.join(this.typesDir, "pageTypes.ts");
    const typeDefinition = this.generateTypeDefinition(config);

    if (fs.existsSync(typesFilePath)) {
      const content = fs.readFileSync(typesFilePath, "utf-8");
      const updatedContent = content + typeDefinition;
      fs.writeFileSync(typesFilePath, updatedContent);
      console.log("✓ Added type definition to pageTypes.ts");
    }
  }

  // Update the universal sections index file
  updateIndexFile(config: SectionConfig): void {
    const indexPath = path.join(this.sectionsDir, "index.ts");
    const componentName = `${config.name}Section`;
    const exportLine = `export { ${componentName} } from './${componentName}'`;

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, "utf-8");
      const updatedContent = `${content}\n${exportLine}`;
      fs.writeFileSync(indexPath, updatedContent);
      console.log("✓ Added export to index.ts");
    }
  }

  // Update AutoSectionRegistry with new section type
  updateAutoRegistry(config: SectionConfig): void {
    const registryPath = path.join(__dirname, "AutoSectionRegistry.ts");

    if (fs.existsSync(registryPath)) {
      let content = fs.readFileSync(registryPath, "utf-8");

      // Add the new section type to the sectionTypes array
      const sectionTypesMatch = content.match(/(this\.sectionTypes = \[[\s\S]*?\])/m);
      if (sectionTypesMatch) {
        const currentArray = sectionTypesMatch[1];
        const newArray = currentArray.replace(/\]/, `, '${config.type}']`);
        content = content.replace(currentArray, newArray);

        fs.writeFileSync(registryPath, content);
        console.log("✓ Added section type to AutoSectionRegistry");
      }
    }
  }

  // Main generation method
  async generateSection(config: SectionConfig): Promise<void> {
    const componentName = `${config.name}Section`;
    const componentPath = path.join(this.sectionsDir, `${componentName}.tsx`);

    // Generate component file
    const componentCode = this.generateSectionComponent(config);
    fs.writeFileSync(componentPath, componentCode);
    console.log(`✓ Created ${componentName}.tsx`);

    // Update type definitions
    this.updateTypesFile(config);

    // Update index file
    this.updateIndexFile(config);

    // Update auto registry
    this.updateAutoRegistry(config);

    console.log(`\n🎉 Section '${config.name}' generated successfully!`);
    console.log("\nTo use your new section:");
    console.log(`1. Add content blocks with type: '${config.type}'`);
    console.log("2. The section will be automatically loaded by AutoUniversalSections");
    console.log(`3. Customize the component at: ${componentPath}`);
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
Section Generator CLI

Usage:
  npm run generate-section -- --name <SectionName> --type <section-type>

Example:
  npm run generate-section -- --name ProductShowcase --type product-showcase

Options:
  --name    The name of the section (PascalCase, without 'Section' suffix)
  --type    The type identifier for the section (kebab-case)
  --fields  JSON string with field definitions (optional)

Interactive mode:
  npm run generate-section
`);
    return;
  }

  const generator = new SectionGenerator();

  // Parse arguments
  const nameIndex = args.indexOf("--name");
  const typeIndex = args.indexOf("--type");
  const fieldsIndex = args.indexOf("--fields");

  if (nameIndex === -1 || typeIndex === -1) {
    console.error("❌ Both --name and --type are required");
    return;
  }

  const name = args[nameIndex + 1];
  const type = args[typeIndex + 1];

  let fields = [
    { name: "title", type: "string" as const, required: false },
    { name: "description", type: "string" as const, required: false },
  ];

  if (fieldsIndex !== -1) {
    try {
      fields = JSON.parse(args[fieldsIndex + 1]);
    } catch (error) {
      console.error("❌ Invalid JSON for fields");
      return;
    }
  }

  const config: SectionConfig = { name, type, fields };

  await generator.generateSection(config);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { SectionGenerator };
