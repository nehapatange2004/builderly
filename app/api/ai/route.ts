import { GoogleGenAI } from "@google/genai";

export async function GET() {
    return Response.json({ message: "The ai route is working fine!" });
}

export async function POST(req: Request) {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
        const body = await req.json();
        const prompt = body.prompt;
        if (!prompt) {
            return Response.json({ error: "No valid prompt received" }, { status: 400 });

        }
        return Response.json({ prompt, response: {user: "bot", content:"The integration is fine with ai" }});

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: `You are an expert MERN stack developer. 
                You develop modern, responsive, working, error and bug free MERN stacks apps. 
                You need to analyze the user prompt and based on it write MERN stack application code for it. 
                make sure the code is written readable, simple, easy to understand and compoenents 
                Please produce code in json tree structure which will represent the file tree structure. 
                Don't downlaod the dependencies instead have the package.json file so that the dependancies are ready to install,
                make sure the code will run on the simple commands like cd frontend, npm install, npm run dev, cd backend, npm install, npm run dev.
                Also put some dummy .env variables if required by the application.
                IMPORTANT: Do not complicate/ make complex systems unless explicitly prompted to do so.
                Perform only the required amount of coding without over complicating the implementation.
                procduce the response in the form:
                {
                    content: <your message to the user to wait/ check the code>,
                    code: <the json tree strcture of the code>
                }

                `
                ,
            }
        });
        console.log(response.text);
        return Response.json({ prompt, response: response.text });
    } catch (error) {
        return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

}