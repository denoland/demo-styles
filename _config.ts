import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";


const site = lume({
  src: "./src",
  dest: "./_site",
});


site.use(sass(/* Options */));
site.add("styles.scss");

// Pass through the static assets
site.add("static", ".");


export default site;
