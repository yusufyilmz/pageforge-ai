"use client";

import React, { useState, useEffect, useRef, type ReactNode } from "react";

import "./CodeHighlight.css";
import "./LineNumber.css";
import styles from "./CodeBlock.module.scss";

import {
  Button,
  Flex,
  IconButton,
  Row,
  Scroller,
  StyleOverlay,
} from "@pageforge/once-ui/components";
import Prism from "prismjs";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import type { SpacingToken } from "@pageforge/once-ui/types";
import classNames from "classnames";

type CodeInstance = {
  code: string | { content: string; error: string | null };
  language: string;
  label: string;
};

interface CodeBlockProps extends React.ComponentProps<typeof Flex> {
  highlight?: string;
  codeHeight?: number;
  fillHeight?: boolean;
  previewPadding?: SpacingToken;
  codes?: CodeInstance[];
  preview?: ReactNode;
  copyButton?: boolean;
  styleButton?: boolean;
  reloadButton?: boolean;
  fullscreenButton?: boolean;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onInstanceChange?: (index: number) => void;
  lineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  highlight,
  codeHeight,
  fillHeight,
  previewPadding = "l",
  codes = [],
  preview,
  copyButton = true,
  styleButton = false,
  reloadButton = false,
  fullscreenButton = false,
  lineNumbers = false,
  compact = false,
  className,
  style,
  onInstanceChange,
  ...rest
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [selectedInstance, setSelectedInstance] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { code, language, label } = codes[selectedInstance] || {
    code: "",
    language: "",
    label: "Select code",
  };

  useEffect(() => {
    if (codeRef.current && codes.length > 0) {
      Prism.highlightAll();
    }
  }, [code, codes.length]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";

      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsFullscreen(false);
        }
      };

      document.addEventListener("keydown", handleEscKey);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscKey);
      };
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const [copyIcon, setCopyIcon] = useState<string>("clipboard");
  const handleCopy = () => {
    if (codes.length > 0 && code) {
      navigator.clipboard
        .writeText(typeof code === "string" ? code : code.content)
        .then(() => {
          setCopyIcon("check");

          setTimeout(() => {
            setCopyIcon("clipboard");
          }, 5000);
        })
        .catch((err) => {
          console.error("Failed to copy code: ", err);
        });
    }
  };

  const [refreshKey, setRefreshKey] = useState(0);
  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleContent = (selectedLabel: string) => {
    const index = codes.findIndex((instance) => instance.label === selectedLabel);
    if (index !== -1) {
      setSelectedInstance(index);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <Flex
      position={isFullscreen ? "fixed" : "relative"}
      zIndex={0}
      background="surface"
      radius="l"
      overflow="hidden"
      border="neutral-medium"
      direction="column"
      vertical="center"
      fillWidth
      minHeight={3}
      className={classNames(className, {
        [styles.fullscreen]: isFullscreen,
      })}
      style={style}
      {...rest}
    >
      {(codes.length > 1 || (copyButton && !compact)) && (
        <Flex
          borderBottom="neutral-medium"
          zIndex={2}
          position="static"
          fillWidth
          horizontal="space-between"
          gap="16"
        >
          {codes.length > 1 ? (
            <Scroller paddingX="4">
              {codes.map((instance, index) => (
                <Row paddingY="4" paddingRight="2" key={index}>
                  <Button
                    className="mr-2"
                    weight="default"
                    size="s"
                    variant={selectedInstance === index ? "secondary" : "tertiary"}
                    label={instance.label}
                    onClick={() => {
                      setSelectedInstance(index);
                      onInstanceChange?.(index);
                      handleContent(instance.label);
                    }}
                  />
                </Row>
              ))}
            </Scroller>
          ) : (
            <Row
              paddingY="12"
              paddingX="16"
              textVariant="label-default-s"
              onBackground="neutral-strong"
            >
              {codes[0].label}
            </Row>
          )}
          {!compact && (
            <Flex padding="4" gap="2" position="static">
              {reloadButton && (
                <IconButton
                  size="m"
                  tooltip="Reload"
                  tooltipPosition="left"
                  variant="tertiary"
                  onClick={handleRefresh}
                  icon="refresh"
                />
              )}
              {fullscreenButton && (
                <IconButton
                  size="m"
                  tooltip={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                  tooltipPosition="left"
                  variant="tertiary"
                  icon={isFullscreen ? "minimize" : "maximize"}
                  onClick={toggleFullscreen}
                />
              )}
              {styleButton && (
                <StyleOverlay
                  iconButtonProps={{
                    size: "m",
                    variant: "tertiary",
                  }}
                >
                  <IconButton icon="sparkle" />
                </StyleOverlay>
              )}
              {copyButton && (
                <IconButton
                  size="m"
                  tooltip="Copy"
                  tooltipPosition="left"
                  variant="tertiary"
                  onClick={handleCopy}
                  icon={copyIcon}
                />
              )}
            </Flex>
          )}
        </Flex>
      )}
      {preview && (
        <Flex
          key={refreshKey}
          padding={previewPadding}
          fillHeight
          horizontal="center"
          overflowY="auto"
        >
          {Array.isArray(preview)
            ? preview.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)
            : preview}
        </Flex>
      )}
      {codes.length > 0 && code && (
        <Flex
          borderTop={!compact && preview ? "neutral-medium" : undefined}
          fillWidth
          fillHeight={fillHeight}
        >
          <Flex overflowX="auto" fillWidth>
            <pre
              style={{ maxHeight: `${codeHeight}rem` }}
              data-line={highlight}
              ref={preRef}
              className={classNames(
                lineNumbers ? styles.lineNumberPadding : styles.padding,
                styles.pre,
                `language-${language}`,
                {
                  "line-numbers": lineNumbers,
                },
              )}
              tabIndex={-1}
            >
              <code ref={codeRef} className={classNames(styles.code, `language-${language}`)}>
                {typeof code === "string" ? code : code.content}
              </code>
            </pre>
          </Flex>
          {compact && copyButton && (
            <Flex paddingX="8" paddingY="4" className={styles.compactCopy} zIndex={1}>
              <IconButton
                tooltip="Copy"
                tooltipPosition="left"
                aria-label="Copy code"
                onClick={handleCopy}
                icon={copyIcon}
                size="m"
                variant="tertiary"
              />
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

CodeBlock.displayName = "CodeBlock";
export { CodeBlock };
