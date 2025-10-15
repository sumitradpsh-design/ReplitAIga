import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
// This is using OpenAI's API, which points to OpenAI's API servers and requires your own API key.
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY environment variable is not set. Please configure your OpenAI API key.");
    }
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openai;
}

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function chatWithAI(
  userMessage: string,
  conversationHistory: Message[] = []
): Promise<string> {
  try {
    const client = getOpenAIClient();
    
    const messages: Message[] = [
      {
        role: "system",
        content: `You are a helpful AI assistant for BharatRoots, a marketplace connecting Indian artisans and farmers with art enthusiasts. 
        You help users learn about:
        - Traditional Indian crafts and textiles
        - Organic farming and produce
        - Artisan stories and cultural heritage
        - Product recommendations
        - Community features and how to connect with other art enthusiasts
        
        Be friendly, knowledgeable, and passionate about Indian craftsmanship and culture. Keep responses concise but informative.`,
      },
      ...conversationHistory,
      {
        role: "user",
        content: userMessage,
      },
    ];

    const response = await client.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages: messages as any,
      max_completion_tokens: 500,
    });

    return response.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to get AI response. Please make sure your OpenAI API key is configured.");
  }
}
