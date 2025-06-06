"use client";

import { Column, Flex, Text } from "@pageforge/once-ui/components";

import styles from "./section.module.scss";

interface TableOfContentsProps {
  items: {
    title: string;
    display: boolean;
    items?: string[];
  }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const scrollTo = (title: string, offset: number) => {
    // Generate section ID from title to match the UniversalPage implementation
    const sectionId = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // if (!about.tableOfContent?.display) return null;

  console.log({ items });
  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      hide="m"
    >
      {items
        .filter((item) => item.display)
        .map((section, sectionIndex) => (
          <Column key={sectionIndex} gap="12">
            <Flex
              cursor="interactive"
              className={styles.hover}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.title, 80)}
            >
              <Flex height="1" minWidth="16" background="neutral-strong" />
              <Text>{section.title}</Text>
            </Flex>
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
