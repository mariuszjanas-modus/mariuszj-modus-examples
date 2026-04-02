---
description: "Process new screenshots in shared/resources/screenshots - convert to PNG, resize to 480/720/1080px, and cleanup originals"
name: "Screenshot Resizer"
agent: "agent"
---

# Screenshot Processing Task

Process all new images in the `shared/resources/screenshots` directory and prepare them for the web gallery.

## Requirements

1. **Find all images** in `shared/resources/screenshots/` directory (not in subdirectories)
   - Look for common formats: `.webp`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.tiff`
   - Skip files that are already in the size-specific subdirectories (480, 720, 1080)

2. **Use the image-conversion skill** to process each image:
   - Load the skill first: [image-conversion SKILL.md](../skills/image-conversion/SKILL.md)
   - Use the [conversion script](../skills/image-conversion/convert_image.py)
   - Check that Pillow is installed before starting

3. **Convert and resize** each image to three sizes:
   - **480px width**: Save to `shared/resources/screenshots/480/`
   - **720px width**: Save to `shared/resources/screenshots/720/`
   - **1080px width**: Save to `shared/resources/screenshots/1080/`
   - Maintain aspect ratio for all conversions
   - Output format: PNG with consistent sequential naming: `screenshot-01.png`, `screenshot-02.png`, etc.
   - Use zero-padded two-digit numbers for proper sorting
   - Start numbering from the next available number (check existing files first)

4. **Delete original images** after successful conversion:
   - Only delete source files that were successfully converted to all three sizes
   - Verify all output files exist before deletion
   - Keep the directory structure intact

## Output

Provide a summary of:
- Number of images processed
- Images converted (with original format and sizes)
- Any errors encountered
- Confirmation that originals were deleted

## Example Workflow

```bash
# For a new image (e.g., game-screenshot.jpg), determine the next number (e.g., 04):
# 1. Convert to 480px width
python3 .github/skills/image-conversion/convert_image.py -i shared/resources/screenshots/game-screenshot.jpg -o shared/resources/screenshots/480/screenshot-04.png --width 480

# 2. Convert to 720px width
python3 .github/skills/image-conversion/convert_image.py -i shared/resources/screenshots/game-screenshot.jpg -o shared/resources/screenshots/720/screenshot-04.png --width 720

# 3. Convert to 1080px width
python3 .github/skills/image-conversion/convert_image.py -i shared/resources/screenshots/game-screenshot.jpg -o shared/resources/screenshots/1080/screenshot-04.png --width 1080

# 4. Delete original after verifying all outputs exist
rm shared/resources/screenshots/game-screenshot.jpg
```

## Notes

- Create the size directories (480, 720, 1080) if they don't exist
- Handle multiple images in a batch efficiently
- Provide clear error messages if conversion fails
