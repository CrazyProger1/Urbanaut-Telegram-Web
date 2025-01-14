export async function POST(request: Request) {
  return new Response(JSON.stringify({ message: "Ok" }), {
    status: 200,
  });
}
