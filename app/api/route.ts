export async function GET() {
  return Response.json({ message: "Neha's backend is working" });
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ received: body });
}
