export enum ChatRole {
  Assistant = "assistant",
  User = "user",
  System = "system",
}

export type ChatMessage = {
  role: ChatRole;
  content: string;
  title?: string;
  error?: string;
  timestamp?: number;
};

export * from "./questions";
