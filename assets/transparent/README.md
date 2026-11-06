# Transparent website assets

Created with the built-in imagegen tool using the existing images as edit targets.
The original source assets remain in the parent assets directory. PNG cutouts are
retained here; optimized WebP copies are used by the website.

- about: homepage About illustration
- experience: About page Experience illustration
- brands-1 and brands-2: scrolling client-logo strips
- dreamdays, rasooi, yt: standalone client logos

Assets already containing genuine transparency were retained. Decorative texture
panels, portfolio screenshots, and campaign artwork keep their original design.

## Prompt set

Illustration prompts: Background extraction only. Remove the pale gray or white
outside background to real alpha transparency. Preserve the subject, objects,
colors, foreground white details, composition, and existing artist signature.
For the About illustration retain the complete circular scene. For the Experience
illustration remove negative spaces between objects, retaining white clothing
and other white foreground details.

Logo prompts: Remove only the white canvas background to real alpha transparency.
Preserve original lettering, tiny text, symbols, colors, spacing, artwork and
composition. Keep colored badges, black rectangles, florals and white details
inside logo shapes. For strips retain every logo in its original horizontal row.

Rasooi refinement prompt: Keep the crisp green capital R and chef-hat strokes.
Remove the white canvas and negative spaces inside the R. No smears, noise,
texture, glow, ghost edges, shadows, or extra shapes around the original symbol.
