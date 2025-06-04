'use client'

import React, { useState } from 'react'
import { aiSectionFactory } from '../../components/universal-section/AISectionFactory'

export default function AIDemoPage() {
  const [userInput, setUserInput] = useState('')
  const [generatedSection, setGeneratedSection] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const examples = [
    'Create an interactive pricing calculator with 3 tiers, monthly/yearly toggle, and feature comparison',
    'Build a real estate property listing with filtering, map integration, and favorites',
    'Design a learning dashboard with progress tracking and achievement badges',
    'Create a product configurator with 3D preview and real-time pricing',
    'Build an event booking system with calendar and ticket selection'
  ]

  const handleGenerateSection = async () => {
    if (!userInput.trim()) return

    setIsGenerating(true)
    try {
      const requirements = aiSectionFactory.analyzeUserRequirements(userInput)
      const code = aiSectionFactory.generateSectionCode(
        requirements,
        'Generated'
      )

      setGeneratedSection({
        requirements,
        code,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      console.error('Error generating section:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div
          style={{
            display: 'inline-block',
            background: '#f0f9ff',
            color: '#0369a1',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '1rem'
          }}
        >
          AI-Powered Section Generator
        </div>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            margin: '0 0 1rem 0',
            color: '#1e293b'
          }}
        >
          Enhanced AI Section Generation Demo
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}
        >
          Describe any type of section in natural language, and watch as our
          enhanced system generates complete, interactive React components with
          TypeScript support.
        </p>
      </div>

      {/* Examples */}
      <div style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#1e293b'
          }}
        >
          🎯 Try These Advanced Examples
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}
        >
          {examples.map((example, index) => (
            <div
              key={index}
              style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: 'white'
              }}
              onClick={() => setUserInput(example)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>
                {example}
              </p>
              <p
                style={{
                  margin: '8px 0 0 0',
                  fontSize: '12px',
                  color: '#3b82f6',
                  fontWeight: '500'
                }}
              >
                Click to use this example →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: '#1e293b'
          }}
        >
          ✨ Create Your Custom Section
        </h2>
        <p style={{ color: '#64748b', marginBottom: '1rem' }}>
          Describe any type of section you need. Be as specific as possible
          about functionality, layout, and interactions.
        </p>

        <textarea
          placeholder="Describe your custom section... For example: 'Create an interactive product comparison tool with filtering, sorting, side-by-side comparison view, and shopping cart integration'"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'inherit',
            resize: 'vertical',
            marginBottom: '1rem'
          }}
        />

        <button
          onClick={handleGenerateSection}
          disabled={!userInput.trim() || isGenerating}
          style={{
            background:
              userInput.trim() && !isGenerating ? '#3b82f6' : '#9ca3af',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor:
              userInput.trim() && !isGenerating ? 'pointer' : 'not-allowed',
            transition: 'background 0.2s ease'
          }}
        >
          {isGenerating ? 'Generating Section...' : 'Generate AI Section'}
        </button>
      </div>

      {/* Results */}
      {generatedSection && (
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                background: '#f0f9ff',
                color: '#0369a1',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              Generated Section
            </div>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e293b'
              }}
            >
              Analysis & Generated Code
            </h2>
          </div>

          {/* Analysis Results */}
          <div
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#1e293b'
              }}
            >
              🧠 AI Analysis Results
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: '#374151'
                  }}
                >
                  Layout Detected
                </div>
                <div
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    display: 'inline-block'
                  }}
                >
                  {generatedSection.requirements.layout}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: '#374151'
                  }}
                >
                  Style Inferred
                </div>
                <div
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    display: 'inline-block'
                  }}
                >
                  {generatedSection.requirements.style}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: '#374151'
                  }}
                >
                  Elements Found
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  {generatedSection.requirements.elements.length} components
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#374151'
                }}
              >
                Detected Elements
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {generatedSection.requirements.elements.map(
                  (element: any, index: number) => (
                    <span
                      key={index}
                      style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      {element.type}
                    </span>
                  )
                )}
              </div>
            </div>

            {generatedSection.requirements.interactions &&
              generatedSection.requirements.interactions.length > 0 && (
                <div style={{ marginBottom: '1rem' }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: '#374151'
                    }}
                  >
                    Interactions Detected
                  </div>
                  <div
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}
                  >
                    {generatedSection.requirements.interactions.map(
                      (interaction: any, index: number) => (
                        <span
                          key={index}
                          style={{
                            background: '#fef3c7',
                            color: '#92400e',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }}
                        >
                          {interaction.trigger} → {interaction.action}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

            {generatedSection.requirements.customRequirements && (
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#374151'
                  }}
                >
                  Custom Requirements
                </div>
                <div
                  style={{
                    background: '#f8fafc',
                    padding: '12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    color: '#1e293b',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  {generatedSection.requirements.customRequirements}
                </div>
              </div>
            )}
          </div>

          {/* Generated Code */}
          <div
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '1.5rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  margin: 0,
                  color: '#1e293b'
                }}
              >
                💻 Generated React Component
              </h3>
              <span style={{ fontSize: '12px', color: '#64748b' }}>
                {generatedSection.code.length.toLocaleString()} characters
              </span>
            </div>

            <div
              style={{
                background: '#1e293b',
                color: '#e2e8f0',
                padding: '16px',
                borderRadius: '8px',
                overflow: 'auto',
                maxHeight: '400px',
                fontFamily: 'monaco, consolas, monospace',
                fontSize: '12px',
                lineHeight: '1.5'
              }}
            >
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                {generatedSection.code}
              </pre>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(generatedSection.code)
                }
                style={{
                  background: '#f8fafc',
                  color: '#475569',
                  border: '1px solid #d1d5db',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Copy Code
              </button>
              <button
                onClick={() => {
                  const blob = new Blob([generatedSection.code], {
                    type: 'text/typescript'
                  })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = 'GeneratedSection.tsx'
                  a.click()
                  URL.revokeObjectURL(url)
                }}
                style={{
                  background: 'transparent',
                  color: '#64748b',
                  border: '1px solid #d1d5db',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Download File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* System Info */}
      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '8px',
          padding: '1.5rem'
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#1e293b'
          }}
        >
          🎯 Enhanced System Capabilities
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '4px',
                color: '#374151'
              }}
            >
              Element Types (20+)
            </div>
            <div
              style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}
            >
              Cards, Charts, Forms, Timelines, Carousels, Accordions, Tabs,
              Maps, Counters, Progress Bars, Custom Components
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '4px',
                color: '#374151'
              }}
            >
              Layout Options (7+)
            </div>
            <div
              style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}
            >
              Grid, Two-Column, Three-Column, Hero, Sidebar, Tabs, Accordion,
              Timeline, Carousel, Custom Layouts
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '4px',
                color: '#374151'
              }}
            >
              Smart Features
            </div>
            <div
              style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}
            >
              Style Intelligence, Interaction Detection, Industry-Specific
              Patterns, TypeScript Generation
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151'
            }}
          >
            Advanced Capabilities
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {[
              'Interaction Detection',
              'Custom Requirements',
              'Industry-Specific Patterns',
              'TypeScript Generation',
              'Once UI Integration',
              'Responsive Design',
              'Accessibility Support'
            ].map((feature, index) => (
              <span
                key={index}
                style={{
                  background: '#dbeafe',
                  color: '#1e40af',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
