export async function GET() {
  return new Response("Hola Mundo - System ok", {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
