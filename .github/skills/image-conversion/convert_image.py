#!/usr/bin/env python3
"""
Image conversion script that converts images to PNG and resizes them.
"""

import argparse
import sys
from pathlib import Path
from typing import Optional, Tuple

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow is not installed. Install it with: pip install Pillow")
    sys.exit(1)


def calculateNewDimensions(
    originalWidth: int,
    originalHeight: int,
    targetWidth: Optional[int] = None,
    targetHeight: Optional[int] = None,
    scale: Optional[float] = None
) -> Tuple[int, int]:
    """
    Calculate new dimensions for image resizing while maintaining aspect ratio.
    
    @param originalWidth - Original image width in pixels
    @param originalHeight - Original image height in pixels
    @param targetWidth - Desired width (optional)
    @param targetHeight - Desired height (optional)
    @param scale - Scale percentage as decimal (e.g., 0.5 for 50%)
    @returns Tuple of (new_width, new_height)
    """
    if scale:
        return (int(originalWidth * scale), int(originalHeight * scale))
    
    if targetWidth and targetHeight:
        return (targetWidth, targetHeight)
    
    aspectRatio = originalWidth / originalHeight
    
    if targetWidth:
        newWidth = targetWidth
        newHeight = int(newWidth / aspectRatio)
        return (newWidth, newHeight)
    
    if targetHeight:
        newHeight = targetHeight
        newWidth = int(newHeight * aspectRatio)
        return (newWidth, newHeight)
    
    return (originalWidth, originalHeight)


def convertImage(
    inputPath: str,
    outputPath: str,
    width: Optional[int] = None,
    height: Optional[int] = None,
    scale: Optional[float] = None,
    quality: int = 6
) -> bool:
    """
    Convert an image to PNG format and optionally resize it.
    
    @param inputPath - Path to the input image file
    @param outputPath - Path to save the output PNG file
    @param width - Target width in pixels (optional)
    @param height - Target height in pixels (optional)
    @param scale - Scale factor as decimal (optional)
    @param quality - PNG compression level (0-9)
    @returns True if successful, False otherwise
    """
    try:
        # Open the image
        with Image.open(inputPath) as img:
            # Convert to RGB if necessary (for transparency handling)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Keep alpha channel for PNG
                if img.mode == 'P':
                    img = img.convert('RGBA')
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            originalWidth, originalHeight = img.size
            print(f"Original dimensions: {originalWidth}x{originalHeight}")
            
            # Calculate new dimensions if resizing
            if width or height or scale:
                newWidth, newHeight = calculateNewDimensions(
                    originalWidth, originalHeight, width, height, scale
                )
                print(f"Resizing to: {newWidth}x{newHeight}")
                img = img.resize((newWidth, newHeight), Image.Resampling.LANCZOS)
            
            # Save as PNG
            img.save(outputPath, 'PNG', compress_level=quality)
            print(f"✓ Successfully converted to: {outputPath}")
            return True
            
    except FileNotFoundError:
        print(f"Error: Input file not found: {inputPath}")
        return False
    except Exception as e:
        print(f"Error converting image: {str(e)}")
        return False


def main():
    """
    Main function to parse arguments and execute image conversion.
    """
    parser = argparse.ArgumentParser(
        description='Convert images to PNG format with optional resizing'
    )
    
    parser.add_argument(
        '-i', '--input',
        required=True,
        help='Input image file path'
    )
    
    parser.add_argument(
        '-o', '--output',
        required=True,
        help='Output PNG file path'
    )
    
    parser.add_argument(
        '-w', '--width',
        type=int,
        help='Target width in pixels'
    )
    
    parser.add_argument(
        '--height',
        type=int,
        help='Target height in pixels'
    )
    
    parser.add_argument(
        '-s', '--scale',
        type=float,
        help='Scale percentage (e.g., 50 for 50%%)'
    )
    
    parser.add_argument(
        '--quality',
        type=int,
        default=6,
        choices=range(0, 10),
        help='PNG compression level (0-9, default: 6)'
    )
    
    args = parser.parse_args()
    
    # Convert scale percentage to decimal
    scaleDecimal = args.scale / 100 if args.scale else None
    
    # Ensure output has .png extension
    outputPath = args.output
    if not outputPath.lower().endswith('.png'):
        outputPath += '.png'
    
    # Convert the image
    success = convertImage(
        inputPath=args.input,
        outputPath=outputPath,
        width=args.width,
        height=args.height,
        scale=scaleDecimal,
        quality=args.quality
    )
    
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()
