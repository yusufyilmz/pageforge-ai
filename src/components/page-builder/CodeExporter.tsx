"use client";

import type React from "react";
import { useState } from "react";

import { Button, Flex, Heading, Input, Text } from "@pageforge/once-ui/components";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface AIWebsiteGeneratorProps {
  selectedTemplate: string | null;
  personData: any;
  projects: any[];
  customConfig?: any;
  generatedConfig: any;
  onWebsiteGenerated?: (websiteData: any) => void;
}

export const AIWebsiteGenerator: React.FC<AIWebsiteGeneratorProps> = ({
  selectedTemplate,
  personData,
  projects,
  generatedConfig,
  onWebsiteGenerated,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: `🎉 Great! I'll help you create your ${selectedTemplate} website.

Let me ask you a few questions to make it perfect:

1. What's the main goal of your website? (showcase work, get clients, build personal brand, etc.)
2. Who is your target audience?
3. What makes you unique in your field?
4. Any specific features you'd like to include?

Just answer naturally - I'll understand! 😊`,
      timestamp: Date.now(),
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [websiteGenerated, setWebsiteGenerated] = useState(false);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) {
      return;
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: currentMessage,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsGenerating(true);

    // Simulate AI processing (replace with actual ChatGPT API call)
    setTimeout(() => {
      const aiResponse = generateAIResponse(currentMessage, messages, {
        template: selectedTemplate,
        personData,
        projects,
      });

      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponse.content,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, responseMessage]);
      setIsGenerating(false);

      // Check if we have enough info to generate website
      if (aiResponse.readyToGenerate) {
        generateWebsite();
      }
    }, 1500);

    setCurrentMessage("");
  };

  const generateWebsite = async () => {
    setIsGenerating(true);

    // Simulate website generation
    setTimeout(() => {
      const websiteData = {
        config: generatedConfig,
        customizations: extractCustomizationsFromChat(messages),
        domain: `${personData.name?.toLowerCase()}-${selectedTemplate}.pageforge.app`,
        ready: true,
      };

      setWebsiteGenerated(true);
      setIsGenerating(false);

      const finalMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content: `🚀 **Your website is ready!**

✅ **Live URL**: ${websiteData.domain}
✅ **Optimized for**: ${selectedTemplate} professionals
✅ **Includes**: All sections you mentioned
✅ **Mobile responsive**: Works on all devices

Your website is now live and ready to share! 🎉

Would you like me to:
- Add more sections?
- Customize the design?
- Set up analytics?
- Help with SEO?`,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, finalMessage]);

      if (onWebsiteGenerated) {
        onWebsiteGenerated(websiteData);
      }
    }, 3000);
  };

  const quickQuestions = [
    "I want to showcase my portfolio and get freelance clients",
    "I need a professional presence for job applications",
    "I want to build my personal brand in tech",
    "I need a landing page for my consulting services",
  ];

  return (
    <Flex direction="column" gap="l">
      <Flex direction="column" gap="m" style={{ textAlign: "center" }}>
        <Heading variant="display-strong-m">
          {websiteGenerated ? "🎉 Your Website is Live!" : "🤖 AI Website Generator"}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {websiteGenerated
            ? "Your professional website has been created and deployed!"
            : "I'll ask you questions to understand exactly what you need"}
        </Text>
      </Flex>

      {/* Chat Interface */}
      <Flex
        direction="column"
        gap="m"
        padding="l"
        radius="m"
        background="neutral-weak"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {messages.map((message) => (
          <Flex
            key={message.id}
            direction="column"
            gap="xs"
            padding="m"
            radius="s"
            onBackground={message.role === "user" ? "brand-weak" : "neutral-weak"}
            style={{
              alignSelf: message.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
            }}
          >
            <Text variant="label-default-xs" onBackground="neutral-medium">
              {message.role === "user" ? "You" : "AI Assistant"}
            </Text>
            <Text variant="body-default-s" style={{ whiteSpace: "pre-line" }}>
              {message.content}
            </Text>
          </Flex>
        ))}

        {isGenerating && (
          <Flex
            direction="column"
            gap="xs"
            padding="m"
            radius="s"
            background="surface"
            style={{ alignSelf: "flex-start", maxWidth: "85%" }}
          >
            <Text variant="label-default-xs" onBackground="neutral-medium">
              AI Assistant
            </Text>
            <Text variant="body-default-s">🤔 Thinking... Let me analyze your requirements</Text>
          </Flex>
        )}
      </Flex>

      {/* Input Area */}
      {!websiteGenerated && (
        <Flex direction="column" gap="m">
          <Flex gap="s">
            <Input
              id=""
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Tell me about your goals, audience, or what you need..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button
              variant="primary"
              onClick={handleSendMessage}
              disabled={!currentMessage.trim() || isGenerating}
            >
              {isGenerating ? "⏳" : "Send"}
            </Button>
          </Flex>

          {/* Quick Answers */}
          <Flex direction="column" gap="s">
            <Text variant="label-default-s" onBackground="neutral-medium">
              💡 Quick answers:
            </Text>
            <Flex direction="column" gap="xs">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="tertiary"
                  size="s"
                  onClick={() => setCurrentMessage(question)}
                  style={{ justifyContent: "flex-start", textAlign: "left" }}
                >
                  "{question}"
                </Button>
              ))}
            </Flex>
          </Flex>
        </Flex>
      )}

      {/* Website Generated - Next Steps */}
      {websiteGenerated && (
        <Flex direction="column" gap="m" padding="l" radius="m" background="brand-weak">
          <Heading variant="heading-strong-m">🚀 What's Next?</Heading>
          <Flex direction="column" gap="s">
            <Button variant="primary" size="m">
              🌐 Visit Your Website
            </Button>
            <Button variant="secondary" size="m">
              📱 Share on Social Media
            </Button>
            <Button variant="tertiary" size="m">
              ⚙️ Customize Further
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

// AI Response Generator (replace with actual ChatGPT API)
function generateAIResponse(userMessage: string, chatHistory: ChatMessage[], context: any) {
  const messageCount = chatHistory.filter((m) => m.role === "user").length;

  // Simple logic - replace with ChatGPT API call
  if (messageCount === 1) {
    return {
      content: `Perfect! I understand you want to ${userMessage.toLowerCase()}.

Now, tell me:
- Who are your ideal clients/visitors?
- What's your biggest strength or specialty?
- Any specific colors or style preferences?

This helps me customize everything perfectly for you! 🎨`,
      readyToGenerate: false,
    };
  }

  if (messageCount >= 2) {
    return {
      content: `Excellent! I have everything I need.

Based on our conversation, I'm creating:
✅ ${context.template} optimized for your goals
✅ Sections highlighting your strengths
✅ Content tailored to your audience
✅ Professional design matching your style

Generating your website now... ⚡`,
      readyToGenerate: true,
    };
  }

  return {
    content: "Tell me more about what you're looking for!",
    readyToGenerate: false,
  };
}

// Extract customizations from chat
function extractCustomizationsFromChat(messages: ChatMessage[]) {
  console.log(messages);
  // Analyze chat messages to extract preferences
  // This would use ChatGPT to understand user preferences
  return {
    style: "professional",
    audience: "extracted from chat",
    goals: "extracted from chat",
    features: ["extracted", "from", "chat"],
  };
}
