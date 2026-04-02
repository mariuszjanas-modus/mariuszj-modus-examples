---
description: "Use when: creating or modifying React components in the frontend, building gallery UI, working with screenshot display components, adding image grids or cards"
applyTo: "frontend/src/components/**"
---

# React Component Guidelines

## Component Structure

- Always use **functional components** — never class components
- Export the component as the default export at the bottom of the file
- Define props interfaces above the component using PascalCase names

## Documentation

Every component and every exported function must have a JSDoc comment with `@param` for each prop and `@returns` describing the rendered output:

```tsx
/**
 * Displays a single screenshot thumbnail with a hover overlay for size selection
 * @param screenshot - The filename of the screenshot (e.g. "screenshot-08.png")
 * @param index - Zero-based position in the gallery grid, used for alt text
 * @returns An article element containing the thumbnail and size-selection overlay
 */
function ScreenshotCard({ screenshot, index }: ScreenshotCardProps) {
```

## Gallery-Specific Rules

- Use the `ImageSize` type (`480 | 720 | 1080`) when working with screenshot width variants — never use plain numbers or strings
- Build image URLs using the pattern `/api/screenshots/files/${size}/${filename}`
- Derive size options from the `imageSizes` array constant — never hardcode `[480, 720, 1080]` inline in JSX

## Semantic HTML

Use semantic elements for gallery content:
- `<article>` for individual image cards
- `<figure>` + `<figcaption>` when pairing an image with a caption
- Avoid bare `<div>` wrappers where a more meaningful element fits

## CSS

- Add styles in a `.css` file with the same name as the component (e.g. `Gallery.css` for `Gallery.tsx`)
- Use class names prefixed with the component name (e.g. `.gallery-item`, `.gallery-overlay`)

## Accessibility

- Every `<img>` must have a descriptive `alt` attribute — not empty, not just "image"
- All `target="_blank"` anchors must include `rel="noreferrer"`
- Add `loading="lazy"` to gallery images that are not above the fold
