# Deno Examples styles

Simple, Deno-branded styles for use in demos and examples.


## Usage


  A minified CSS file is available to use directly in your sites by linking to [this stylesheet](https://demo-styles.deno.deno.net/styles.css) URL. To ease the performance hit of sourcing the fonts from another domain via this CSS, we should preload those too.

  Add the following to the head of your HTML.

```
<link rel="preload" href="https://demo-styles.deno.deno.net/fonts/Moranga-Regular.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="https://demo-styles.deno.deno.net/fonts/Moranga-Medium.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="https://demo-styles.deno.deno.net/fonts/Recursive_Variable.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="https://demo-styles.deno.deno.net/styles.css">
```

## Get your own copy to explore

You can clone these resources into a repo of your own, and use it to set up a new application hosted on Deno Deploy in a few clicks.

[![Deploy on Deno](https://deno.com/button)](https://app.deno.com/new?clone=https://github.com/denoland/demo-styles)

