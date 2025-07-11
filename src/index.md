---
layout: layout.vto
templateEngine: [vto, md]
---


<section>
  <h2 id="usage">Usage</h2>
  <p>
    A minified CSS file is available to use directly in your sites by linking to <a href="https://example-styles.netlify.app/styles.css">this stylesheet</a> URL. To ease the performance hit of sourcing the fonts from another domain via this CSS, we should preload those too
  </p>

```
<link rel="preload" href="https://example-styles.netlify.app/fonts/PacaembuVar-latin.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="https://example-styles.netlify.app/fonts/MulishVar-latin.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="https://example-styles.netlify.app/styles.css">
```

Review the [reference](/reference) page to review how this stylesheet formats standard HTML elements and also for some additional utility classes which it makes available.

</section>
