"use client";

import { Column, Flex, Heading } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface VideoSectionProps {
  block: ContentBlock;
  index: number;
}

export const VideoSection = ({ block, index }: VideoSectionProps) => {
  const content = block.content as any;

  return (
    <Column key={index} fillWidth gap="l" marginBottom="40">
      {content.title && (
        <Heading as="h2" variant="display-strong-s" marginBottom="m" className="text-center">
          {content.title}
        </Heading>
      )}
      <Flex
        fillWidth
        horizontal="center"
        style={{
          aspectRatio: content.aspectRatio || "16/9",
          maxWidth: content.maxWidth || "800px",
          margin: "0 auto",
        }}
      >
        {content.embedUrl ? (
          <iframe
            src={content.embedUrl}
            title={content.title || "Video"}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "var(--radius-m)",
            }}
          />
        ) : content.videoUrl ? (
          <video
            src={content.videoUrl}
            autoPlay={content.autoPlay}
            loop={content.loop}
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-m)",
              objectFit: "cover",
            }}
            controls={content.controls !== false}
            poster={content.poster}
          />
        ) : null}
      </Flex>
    </Column>
  );
};
