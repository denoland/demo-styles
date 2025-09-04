---
layout: layout.vto
templateEngine: [vto, md]
---


<section>
  <h2 id="usage">Usage</h2>
  <p>
    A minified CSS file is available to use directly in your sites by linking to <a href="/styles.css">this stylesheet</a> URL. To ease the performance hit of sourcing the fonts from another domain via this CSS, we should preload those too
  </p>

```
<link rel="preload" href="https://demo-styles.deno.deno.net/fonts/Moranga-Regular.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="https://demo-styles.deno.deno.net/fonts/Moranga-Medium.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="https://demo-styles.deno.deno.net/fonts/Recursive_Variable.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="https://demo-styles.deno.deno.net/styles.css">
```

Review the [reference](/reference) page to review how this stylesheet formats standard HTML elements and also for some additional utility classes which it makes available.

 <h2 id="syntax-highlight">Syntax highlighting</h2>
<p>
Provided by <a href="https://highlightjs.org/">highlight.js</a>, this can be used either during the build (ideally), or client-side for simplicity in demos and examples. A custom palatte is included in <a href="/styles.css">the CSS</a> provided from this site.
</p>
<p>
Add the following the the <head> of your HTML for a client-side drop-in:
</p>

```html
<!-- syntax highlighting  -->
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
```

</section>

