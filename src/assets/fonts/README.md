# Floward Custom Fonts

This directory contains the custom font files for the Floward design system.

## Font Families

### Founders Grotesk (Sans-serif)
- `FoundersGrotesk-Light.otf` - Font weight: 300
- `FoundersGrotesk-Regular.otf` - Font weight: 400
- `FoundersGrotesk-Medium.otf` - Font weight: 500
- `FoundersGrotesk-Semibold.otf` - Font weight: 600

### Montas (Serif)
- `Montas-Light.woff` - Font weight: 300
- `Montas-Regular.woff` - Font weight: 400
- `Montas-Medium.woff` - Font weight: 500
- `Montas-Semibold.woff` - Font weight: 600

## Upload Instructions

1. Upload the font files listed above to this directory
2. Ensure the file names match exactly as listed
3. The fonts.css file is already configured to use these local paths

## Usage

The fonts are automatically loaded via `/src/styles/fonts.css` and are available throughout the application using:
- `font-family: 'Founders Grotesk', sans-serif;`
- `font-family: 'Montas', serif;`