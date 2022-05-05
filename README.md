# Via Ferrata

### @todo add rest of docs

### Notes

iOS doesn't support multi-page PDF embeds inside an `iframe`; to fix this, extract the pages as images and use the `Pdf` component:

```shell
gs -sDEVICE=jpeg -dTextAlphaBits=4 -r144 -o out/%d.jpg in.pdf
```
