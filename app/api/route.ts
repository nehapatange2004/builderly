export async function GET() {
  return Response.json({ message: "Neha's backend is working" });
}

export async function POST(req: Request) {
  const body = await req.json();
  const query = body.query;
  return Response.json({ body, query });
}
