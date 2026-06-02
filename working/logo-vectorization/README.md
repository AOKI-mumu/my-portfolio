# LIN DESIGN logo vectorization

This folder keeps the SVG vectorization work isolated from the website files.

## Files

- `lin-design-clean-editable.svg`  
  Cleaner editable version. Each letter is grouped semantically, with separate accent and bevel layers.

- `lin-design-traced-style.svg`  
  Higher-detail traced-style version. It keeps more of the slanted cuts, bevel planes, and split strokes visible in the reference.

- `preview.html`  
  Quick side-by-side browser preview.

## Suggested next step

The current SVGs are hand-reconstructed from the provided screenshot. For a stricter match, place the original PNG/JPG source in this folder and run a real raster-to-vector trace pass, then manually split the resulting paths into the same semantic groups:

1. white wordmark
2. green accent
3. optional bevel/shading
4. optional background/reference

