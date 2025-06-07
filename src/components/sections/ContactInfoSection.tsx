"use client";

import { Button, Column, Flex, Heading, Icon, Text } from "@pageforge/once-ui/components";
import type { ContactInfoSectionContent, ContentBlock } from "@pageforge/types/page/pageTypes";

interface ContactInfoSectionProps {
  block: Extract<ContentBlock, { type: "contact-info" }>;
  index: number;
}

export const ContactInfoSection = ({ block, index }: ContactInfoSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title = "Contact Information", subtitle, contacts, layout = "vertical" } = content;

  const renderContact = (
    contact: ContactInfoSectionContent["contacts"][0],
    contactIndex: number
  ) => (
    <Flex key={contactIndex} gap="m" vertical="center">
      <Icon name={contact.icon || contact.type} size="l" onBackground="accent-weak" />
      <Column gap="xs">
        <Text variant="label-strong-s">{contact.label}</Text>
        {contact.link ? (
          <Button href={contact.link} variant="tertiary" size="s">
            {contact.value}
          </Button>
        ) : (
          <Text variant="body-default-m">{contact.value}</Text>
        )}
      </Column>
    </Flex>
  );

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="m"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Header */}
      <Column horizontal="center" align="center" gap="m">
        <Heading as="h2" variant="display-strong-l">
          {title}
        </Heading>
        {subtitle && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {subtitle}
          </Text>
        )}
      </Column>

      {/* Contact Items */}
      {layout === "grid" ? (
        <Flex
          fillWidth
          wrap
          gap="l"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {contacts.map((contact, contactIndex) => renderContact(contact, contactIndex))}
        </Flex>
      ) : (
        <Column fillWidth gap="l">
          {contacts.map((contact, contactIndex) => renderContact(contact, contactIndex))}
        </Column>
      )}
    </Column>
  );
};
