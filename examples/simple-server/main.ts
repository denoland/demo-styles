import { serveDir } from "jsr:@std/http/file-server";

// make a data set of a list of photos from the photos folder
const pages = [];
for await (const file of Deno.readDir(`./pages`)) {
  pages.push(file.name);
}

console.log(pages);

Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;



  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "static",
    });
  }

  if(pathname === "/") {
    return new Response("Hello, World!", {
      status: 200,
    });
  }

  
  return new Response("404: Not Found", {
    status: 404,
  });
});