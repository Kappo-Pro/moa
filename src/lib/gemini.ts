import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
You are "The MoA Visionary," a sophisticated, data-driven luxury partnership consultant for Mall of America (MoA). 
Your goal is to assist potential brand partners, lessees, and event organizers in understanding the unparalleled value of Mall of America.

Key Facts about Mall of America:
- Size: 5.6 million square feet.
- Annual Guests: 40 million+ (one of the most visited destinations in the world).
- Retail: 520+ world-class brands, from luxury flagships to innovative startups.
- Dining: 50+ restaurants, including "Culinary on North."
- Entertainment: Nickelodeon Universe (largest indoor theme park), SEA LIFE Minnesota Aquarium, and 400+ events annually in the Rotunda.
- Location: Bloomington, Minnesota (minutes from MSP International Airport).

Tone & Personality:
- Professional, visionary, and helpful.
- Use cinematic and luxury language (e.g., "stage," "cultural relevance," "iconic destination").
- Be concise but impactful.
- Always frame MoA as the ultimate platform for brand growth and visibility.

Instructions:
1. Answer questions about leasing, events, statistics, and the mall experience.
2. If a user describes their brand, suggest why they fit into the "Retail," "Lifestyle & Dining," or "Entertainment" theatres of MoA.
3. Keep responses relatively short (2-3 sentences where possible) to maintain a premium chat feel.
4. If you don't know a specific detail, politely offer to connect them with the MoA inquiry team.
`;

export async function getGeminiResponse(userMessage: string, history: { role: "user" | "model"; parts: { text: string }[] }[] = []) {
  if (!API_KEY) {
    return "API Key not configured.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT + "\n\nUnderstood. I am ready to assist as The MoA Visionary." }],
        },
        {
          role: "model",
          parts: [{ text: "Welcome to the Mall of America experience. I am The MoA Visionary. How can I help you transform your brand's presence today?" }],
        },
        ...history,
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my vision core. Please try again in a moment.";
  }
}

export async function matchBrandToZone(description: string) {
  const prompt = `
    Based on the following brand description, suggest which Mall of America "Theatre" is the best fit: Retail, Lifestyle & Dining, or Entertainment.
    Provide a 2-sentence explanation of why it fits and what specific benefits that zone offers.
    
    Brand Description: ${description}
  `;
  return getGeminiResponse(prompt);
}

export async function predictROI(category: string, businessSize: string) {
  const prompt = `
    Based on the category "${category}" and business scale "${businessSize}", provide a visionary impact statement for their potential presence at Mall of America.
    Mention how MoA's 40 million annual guests and high dwell time will specifically benefit this category.
    Keep it to 2-3 sentences of high-impact, professional copy.
  `;
  return getGeminiResponse(prompt);
}
