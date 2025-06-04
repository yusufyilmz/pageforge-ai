'use client'

import React from 'react'
import { Column, Heading, Text } from '@pageforge/once-ui/components'
import {
  ContentBlock,
  MapSectionContent
} from '@pageforge/types/page/pageTypes'

interface MapSectionProps {
  block: Extract<ContentBlock, { type: 'map' }>
  index: number
}

export const MapSection = ({ block, index }: MapSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title = 'Location',
    description,
    address,
    coordinates,
    zoom = 15,
    markers = [],
    height = 400,
    showControls = true
  } = content

  // Create Google Maps embed URL
  const createMapEmbedUrl = () => {
    let baseUrl = 'https://www.google.com/maps/embed/v1/place?key='

    // Note: In production, you would need to add your Google Maps API key
    // For demo purposes, we'll create a basic embed URL
    if (coordinates) {
      baseUrl += `&q=${coordinates.lat},${coordinates.lng}&zoom=${zoom}`
    } else if (address) {
      baseUrl += `&q=${encodeURIComponent(address)}&zoom=${zoom}`
    }

    return baseUrl
  }

  // Fallback to OpenStreetMap embed for demo (doesn't require API key)
  const createOpenStreetMapUrl = () => {
    if (coordinates) {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.01},${coordinates.lat - 0.01},${coordinates.lng + 0.01},${coordinates.lat + 0.01}&layer=mapnik&marker=${coordinates.lat},${coordinates.lng}`
    }
    return null
  }

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="l"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Header */}
      <Column horizontal="center" align="center" gap="m">
        {title && (
          <Heading as="h2" variant="display-strong-l">
            {title}
          </Heading>
        )}
        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        {address && (
          <Text variant="body-default-m" onBackground="neutral-strong">
            {address}
          </Text>
        )}
      </Column>

      {/* Map Container */}
      <Column fillWidth radius="l" style={{ overflow: 'hidden' }}>
        {coordinates ? (
          <iframe
            src={createOpenStreetMapUrl() || ''}
            width="100%"
            height={height}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${address || 'location'}`}
          />
        ) : (
          // Fallback when no coordinates are provided
          <Column
            fillWidth
            padding="xl"
            background="neutral-alpha-weak"
            align="center"
            vertical="center"
            style={{ height: height }}
          >
            <Text variant="body-default-l" onBackground="neutral-weak">
              Map unavailable
            </Text>
            {address && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                Address: {address}
              </Text>
            )}
          </Column>
        )}
      </Column>

      {/* Additional Location Info */}
      {markers.length > 0 && (
        <Column fillWidth gap="m">
          <Heading as="h3" variant="heading-strong-m">
            Nearby Locations
          </Heading>
          <Column gap="s">
            {markers.map((marker, markerIndex) => (
              <Column key={markerIndex} gap="xs">
                {marker.title && (
                  <Text variant="body-strong-m">{marker.title}</Text>
                )}
                {marker.description && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {marker.description}
                  </Text>
                )}
              </Column>
            ))}
          </Column>
        </Column>
      )}
    </Column>
  )
}
