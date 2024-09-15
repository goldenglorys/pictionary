interface Message {
  role: string;
  content: string | null;
  image?: string;
}

interface Keys {
  groqApiKey: string;
}

export type { Message, Keys };
