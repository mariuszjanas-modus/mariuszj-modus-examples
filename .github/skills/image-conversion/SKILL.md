---
name: image-conversion
description: "Convert images to PNG format and resize them. Use when: converting image formats, resizing images, batch processing images, preparing images for web use."
---

# Image Conversion Skill

This skill provides image conversion and resizing capabilities using Python and Pillow.

## Features

- Convert any image format to PNG
- Resize images while maintaining aspect ratio
- Batch process multiple images
- Option to specify exact dimensions or scale percentage

## Usage

The skill includes a Python script `convert_image.py` that can be used to:

1. **Convert to PNG**: Converts any supported image format to PNG
2. **Resize images**: Resize by width, height, or percentage
3. **Batch processing**: Process multiple images at once

## Script Parameters

```bash
python convert_image.py --input <input_file> --output <output_file> [options]
```

### Options:
- `--input` or `-i`: Input image file path (required)
- `--output` or `-o`: Output PNG file path (required)
- `--width` or `-w`: Target width in pixels
- `--height` or `-h`: Target height in pixels
- `--scale` or `-s`: Scale percentage (e.g., 50 for 50%)
- `--quality`: PNG compression quality (0-9, default: 6)

### Examples:

```bash
# Convert JPEG to PNG
python convert_image.py -i photo.jpg -o photo.png

# Convert and resize to 800px width (maintains aspect ratio)
python convert_image.py -i photo.jpg -o photo.png --width 800

# Convert and scale to 50%
python convert_image.py -i photo.jpg -o photo.png --scale 50

# Convert and resize to exact dimensions
python convert_image.py -i photo.jpg -o photo.png --width 1920 --height 1080
```

## Dependencies

Install required dependencies:
```bash
pip install Pillow
```

## Supported Formats

Input: JPEG, PNG, BMP, GIF, TIFF, WebP, and more
Output: PNG
