export async function POST(request: Request) {
  const { initDataRaw, initData } = await request.json();

  if (!initData) {
    return new Response("initData is required", { status: 400 });
  }

  const headers = new Headers();
  headers.set(
    "Set-Cookie",
    `initData=${JSON.stringify(initData)}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
  );

  headers.set(
    "Set-Cookie",
    `initDataRaw=${initDataRaw}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
  );

  return new Response(JSON.stringify({ message: initData }), {
    status: 200,
    headers,
  });
}
