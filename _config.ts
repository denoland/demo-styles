import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";


async function cors(request: Request, next: Lume.RequestHandler) {
  const response = await next(request);
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}


const site = lume({
  src: "./src",
  dest: "./_site",
  server: {
    middlewares: [cors]
  }
});


site.use(sass(/* Options */));
site.add("styles.scss");

// Pass through the static assets
site.add("static", ".");





export default site;
