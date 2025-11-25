# Whole Foods - Price Reset Prototype

An interactive, immersive homepage prototype showcasing Whole Foods' new pricing strategy using Next.js, React Three Fiber, Framer Motion, and Tailwind CSS.

## Features

✨ **3D Hero Section** - Floating produce models with parallax effects
🔄 **Interactive Price Flip Cards** - Click to reveal before/after pricing
📜 **Scroll-Based Value Journey** - Smooth animations as you explore
🎨 **Modern Design** - Green gradient theme with smooth transitions

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React Three Fiber** - Declarative 3D with Three.js
- **Framer Motion** - Smooth animations and interactions
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety

## Getting Started

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the prototype.

## Project Structure

```
├── app/
│   ├── page.tsx          # Main homepage
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # 3D hero section
│   ├── FloatingProduce.tsx   # 3D produce models
│   ├── PriceFlipSection.tsx  # Grid of flip cards
│   ├── PriceFlipCard.tsx     # Individual flip card
│   └── ValueJourney.tsx      # Scroll journey section
```

## Customization Tips

- **Add more products**: Edit `products` array in `PriceFlipSection.tsx`
- **Change colors**: Update Tailwind classes (green-600, etc.)
- **Adjust 3D items**: Modify `FloatingProduce.tsx` positions and colors
- **Animation timing**: Tweak `transition` props in Framer Motion components

## Performance Notes

- 3D canvas is optimized with `OrbitControls` zoom/pan disabled
- Animations use `whileInView` for performance
- Lazy loading ready for production

Good luck with your rapid prototyping competition! 🚀
