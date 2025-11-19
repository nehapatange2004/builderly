import { GoogleGenAI } from "@google/genai";

export async function GET() {
    return Response.json({ message: "The ai route is working..!" });
}

export async function POST(req: Request) {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });


        const body = await req.json();
        const prompt = body.prompt;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
        console.log(response.text);
        return Response.json({ prompt, response: response.text });



    } catch (error) {
        return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

}