---
description: "Check screenshot gallery status - report image counts per size folder, detect missing files across the 480/720/1080 folders, and show the next available screenshot number"
name: "Gallery Status"
agent: "agent"
---

# Gallery Status Check

Report the current state of the screenshot gallery by inspecting the size-specific directories under `shared/resources/screenshots/`. Do not modify any files — this is a read-only audit.

## Tasks

1. **Count images** in each size folder by listing the `.png` files in:
   - `shared/resources/screenshots/480/`
   - `shared/resources/screenshots/720/`
   - `shared/resources/screenshots/1080/`

2. **Detect missing files**: Compare filenames across all three folders.
   - Report any filename that appears in one or two folders but not all three
   - Example: if `screenshot-05.png` is in `480/` and `720/` but missing from `1080/`, flag it

3. **Determine the next number**: Find the highest existing screenshot number across all folders and report the next zero-padded two-digit number to use.
   - Example: if the highest existing file is `screenshot-09.png`, the next is `10`

4. **Check for unprocessed source images**: List any non-PNG image files (`.jpg`, `.jpeg`, `.webp`, `.gif`, `.bmp`, `.tiff`) sitting directly in `shared/resources/screenshots/` (not in subdirectories). These are waiting to be processed by the Screenshot Resizer.

## Output Format

Produce a clear report in this exact format:

```
Gallery Status
--------------
480px:   N images  (screenshot-XX.png … screenshot-YY.png)
720px:   N images  (screenshot-XX.png … screenshot-YY.png)
1080px:  N images  (screenshot-XX.png … screenshot-YY.png)

Missing files:     none  ← or list filenames
Unprocessed:       none  ← or list source files at root
Next number:       NN
```

## Notes

- If a size directory does not exist, report it as missing rather than throwing an error
- Keep the report concise — bullet details only when there is something to flag
