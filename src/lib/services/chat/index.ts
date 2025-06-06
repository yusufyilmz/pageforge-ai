import OpenAI from 'openai'

import { ChatRole, type ChatMessage } from '@pageforge/types/chat'

import { GPT_PROMPT_CHAT } from './constants'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? ''

export class ChatService {
  openai: OpenAI

  constructor(private readonly model: string = 'gpt-3.5-turbo') {
    this.model = model
    this.openai = new OpenAI({ apiKey: OPENAI_API_KEY })
  }

  async sendMessage(
    message: string,
    messages: ChatMessage[] = []
  ): Promise<string> {
    try {
      const response = await this.openai.chat.completions.create({
        model: this.model,
        messages: [
          { role: ChatRole.System, content: GPT_PROMPT_CHAT },
          ...messages,
          { role: ChatRole.User, content: message }
        ],
        max_tokens: 150,
        temperature: 0.7
      })

      const reply = response.choices[0]?.message?.content ?? ''

      if (!reply) {
        throw new Error('GPT response is empty')
      }

      // If it looks like JSON, parse and return it
      if (reply.includes('{') && reply.includes('pages')) {
        const match =
          reply.match(/```json\s*([\s\S]*?)```/) || reply.match(/{[\s\S]+}/)
        if (match) {
          try {
            const json = JSON.parse(match[1] || match[0])

            return json
          } catch {
            return reply
          }
        }
      }

      return reply
    } catch (error) {
      console.error('Error generating response from OpenAI:', error)
      throw error
    }
  }
}
