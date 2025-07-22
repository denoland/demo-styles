import Server from "lume/core/server.ts";

const corsMiddleware = async (request: Request, next: Lume.RequestHandler) => {
  const response = await next(request);
  const referer = req.headers.get("referer");
  if (referer) {
    const host = new URL(referer).hostname;
    console.log(host);
  }
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export const server = new Server({ root: "./_site" });

server.use(corsMiddleware);
server.start();

console.log("Listening on http://localhost:8000");