export async function POST(request: Request) {
  const { initData } = await request.json();
  console.log("SETTING:", initData);

  if (!initData) {
    return new Response("initData is required", { status: 400 });
  }

  const headers = new Headers();
  headers.set(
    "Set-Cookie",
    `initData=${JSON.stringify(initData)}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
  );

  return new Response(JSON.stringify({ message: "Init data saved" }), {
    status: 200,
    headers,
  });
}
