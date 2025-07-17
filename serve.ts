import Server from "lume/core/server.ts";

const corsMiddleware = async (request: Request, next: Lume.RequestHandler) => {
  const response = await next(request);
  console.log("allowing cors for", request.url);
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export const server = new Server({ root: "./_site" });

server.use(corsMiddleware);
server.start();

console.log("Listening on http://localhost:8000");