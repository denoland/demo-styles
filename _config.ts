import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  src: "./src",
  dest: "./_site",
});

site.addEventListener("beforeBuild", () => {
  if (Deno.env.get("DENO_DEPLOY")) {
    console.log("Production mode");
    Deno.writeTextFileSync("./src/_includes/sass/root.scss", "$baseurl: 'https://demo-styles.deno.deno.net/';");
  } else {
    console.log("Development mode");
    Deno.writeTextFileSync("./src/_includes/sass/root.scss", "$baseurl: '/';");
  }
});

// Sass
site.use(sass(/* Options */));
site.add("styles.scss");

// Pass through the static assets
site.add("static", ".");


export default site;
