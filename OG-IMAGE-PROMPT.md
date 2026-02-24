# OG Image Prompt — ketanshukla.com

## Specifications

- **Dimensions:** 1200 × 630 pixels (standard OG image)
- **Format:** PNG (recommended) or JPG
- **Save as:** `og-image.png`
- **Place in:** `E:\author-portfolio\public\images\og-image.png`

## After Generation

Update `src/app/layout.tsx` Open Graph and Twitter image references:
- Change `url: "/images/ketan-shukla.jpeg"` → `url: "/images/og-image.png"`
- Change `width: 400, height: 400` → `width: 1200, height: 630`
- Change Twitter images to `"/images/og-image.png"`
- Change Twitter card to `"summary_large_image"`

---

## ChatGPT / DALL-E Prompt

```
Create a photorealistic 1200×630 pixel Open Graph image for an author portfolio website.

LAYOUT — LEFT THIRD:
A professional, warm portrait-style composition of a middle-aged South Asian man — friendly smile, salt-and-pepper beard, wearing glasses and a navy blazer over a light blue open-collar shirt. He is photographed from mid-chest up, at a slight three-quarter angle, with warm soft studio lighting. The background behind him is a rich, dark gradient (near-black to deep charcoal).

LAYOUT — RIGHT TWO-THIRDS:
An elegant showcase of book covers arranged in a sweeping arc or staggered display. The books represent three distinct series:

1. TOP ROW — Epic fantasy covers with golden-orange and turquoise tones, featuring a female Aztec warrior with armor, glowing sun-blade, feathered headdress elements, and ancient stone temples in the background. Rich cinematic lighting with dramatic fire and cosmic elements.

2. MIDDLE ROW — Non-fiction covers with warm amber and golden tones, featuring a young woman looking upward with wonder, surrounded by glowing golden neural pathways, spiraling light particles, and imagery of mastery — a piano, a swimmer, calligraphy, an artist's palette.

3. BOTTOM ROW — Non-fiction covers with deep teal and dark turquoise tones, featuring a woman with flowing hair surrounded by shattering masks, crystalline particles, and a visual journey from dark confinement on the left to open golden landscape on the right.

TEXT OVERLAY — positioned at the bottom center in an elegant serif font (like EB Garamond):
Line 1 (large, cream/gold): "Ketan Shukla"
Line 2 (smaller, gold with slight transparency): "22 Books · 3 Series · Fiction & Non-Fiction"

OVERALL STYLE:
Photorealistic, cinematic, premium book marketing aesthetic. The color palette is predominantly black, gold, turquoise, and warm amber. The composition should feel like a high-end author brand page — sophisticated, literary, and visually rich. Subtle gold decorative dividers or ornamental lines separating the text from the imagery. The entire image should have a cohesive dark, luxurious feel consistent with premium book cover design.
```

---

## Alternative Simpler Prompt (if the above is too complex)

```
Create a 1200×630 pixel photorealistic author banner image. Dark black background. On the left, a warm portrait of a friendly middle-aged South Asian man with glasses, salt-and-pepper beard, navy blazer. On the right, a fanned display of beautifully designed book covers in three color families: turquoise-gold fantasy, warm amber self-improvement, and teal philosophy. At the bottom center, elegant gold serif text reads "Ketan Shukla" with a subtitle "22 Books · 3 Series · Fiction & Non-Fiction". Premium, cinematic, literary aesthetic with gold accents throughout.
```
