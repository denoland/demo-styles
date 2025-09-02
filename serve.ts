import Server from "lume/core/server.ts";

const corsMiddleware = async (request: Request, next: Lume.RequestHandler) => {
  const response = await next(request);
  
  // Log the referrer to see who is hotlinking to this resource
  const referer = request.headers.get("referer");
  if (referer) {
    const host = new URL(referer).hostname;
    console.log(host);
  }

  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}


// add cache control headers based on the path
const cacheMiddleware = async (request: Request, next: Lume.RequestHandler) => {
  const response = await next(request);
  const path = new URL(request.url).pathname;
  if (path.includes("/fonts/")) {
    response.headers.set("Cache-Control", "public, max-age=604800");
  } else {
    response.headers.set("Cache-Control", "public, max-age=86400");
  }
  return response;
}



export const server = new Server({ root: "./_site" });

server.use(corsMiddleware);
server.use(cacheMiddleware);
server.start();
