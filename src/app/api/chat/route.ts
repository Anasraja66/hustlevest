import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { ventures } from '@/data/ventures';

// Configure the Groq provider with the API key
const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

// Build a context string from the ventures database
const venturesContext = ventures.map(v => 
  `Venture: ${v.title}
   Category: ${v.category}
   Capital Required: £${v.capital}
   Break-even: ${v.breakEven}
   Description: ${v.description}
   Shopping List Total: £${v.shoppingListTotal}
   Mandatory Rules: ${v.rules.filter(r => r.type === 'Mandatory').map(r => r.text).join(', ')}`
).join('\n\n');

const SYSTEM_PROMPT = `You are the "Hustle Vest AI Copilot". You are an expert AI business planner for micro-businesses in the UK.
Your job is to answer the user's questions strictly based on the following database of 15 UK micro-businesses:

${venturesContext}

IMPORTANT RULES (RAG-LIKE BEHAVIOR):
1. ONLY answer questions related to micro-businesses, side hustles, UK regulations, and the 15 ventures provided above.
2. If the user asks something completely irrelevant (e.g., "how to bake a cake", "write a poem", "who is the president"), politely refuse and say "I can only answer questions related to UK micro-businesses and side hustles."
3. Keep your answers concise, practical, and highly relevant.
4. If a user asks for a recommendation based on their budget (e.g. £100, £300, or £500), recommend ventures from the context that match that capital.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: groq('llama-3.1-8b-instant'),
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.3, // Low temperature for more factual/focused responses
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Groq API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to connect to AI engine.' }), { status: 500 });
  }
}
