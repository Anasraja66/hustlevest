import { ventures } from '@/data/ventures';

// Build a context string from the ventures database
const venturesContext = ventures.map(v => 
  `Venture: ${v.title}
   Category: ${v.category}
   Capital Required: £${v.capital}
   Break-even: ${v.breakEven}
   Description: ${v.description}
   Shopping List Items: ${v.shoppingList.length}
   Rules: ${v.rules.join(', ')}`
).join('\n\n');

const SYSTEM_PROMPT = `You are the "Hustle Vest AI Copilot" – an expert, highly conversational, and supportive AI business planner for micro-businesses in the UK.
Your primary goal is to help aspiring entrepreneurs figure out the best side hustle or micro-business for them. You should chat with them in detail, ask clarifying questions about their skills, budget, and free time, and give them highly personalized recommendations. 

Here is your exclusive database of curated UK micro-businesses to recommend from:
${venturesContext}

BEHAVIORAL GUIDELINES FOR A GREAT DEMO:
1. **Be Conversational & Enthusiastic:** Greet the user warmly. Use an encouraging, energetic tone. Don't just spit out facts; have a real conversation.
2. **Provide Detailed Suggestions:** When suggesting a business, explain *why* it fits them, highlight the break-even point, and mention 1-2 mandatory rules or shopping list items to show how practical your advice is.
3. **Ask Follow-up Questions:** Keep the conversation going by asking things like "Does that sound like something you'd enjoy?" or "How many hours a week can you dedicate to this?"
4. **Stay On-Topic:** You are strictly an expert on UK micro-businesses, side hustles, and the 15 ventures provided above. If the user asks something completely irrelevant (e.g., "write a poem", "who is the president"), politely pivot back by saying you specialize in helping them start a UK business.
5. **Formatting:** Use short paragraphs, bullet points, and bold text to make your responses easy to read.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const groqKey = process.env.GROQ_API_KEY;

    if (!groqKey) {
      return new Response(JSON.stringify({ error: 'Missing Groq API Key.' }), { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.3,
        stream: true,
      })
    });

    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    });
  } catch (error) {
    console.error('Groq API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to connect to AI engine.' }), { status: 500 });
  }
}
