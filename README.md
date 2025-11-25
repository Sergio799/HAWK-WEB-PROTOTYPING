# 🥬 Whole Foods - Price Reset Prototype

A modern, interactive web application showcasing Whole Foods' new pricing strategy with engaging animations and a clean, minimalist design.

![Next.js](https://img.shields.io/badge/Next.js-16.0.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055?style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)

## 🌐 Live Demo

**[View Live Demo →](https://your-deployment-url.vercel.app)**

> 🚀 Deployed on Vercel with automatic CI/CD from GitHub

---

## 📋 Project Overview

**Whole Foods - Price Reset** reimagines the grocery shopping experience with a focus on transparency, value, and user engagement. This prototype demonstrates how premium quality and affordable pricing can coexist through thoughtful design and modern web technologies.

### The Challenge
Communicate Whole Foods' new pricing strategy while maintaining their reputation for quality through an engaging digital experience that builds trust and drives conversion.

### The Solution
A fully responsive, performance-optimized web application featuring interactive price discovery, visual storytelling, and seamless shopping experiences.

---

## ✨ Key Features

### 🏠 Core Pages
- **Home Page** - Dynamic hero with rotating food emojis, stats, and value propositions
- **Products** - Comprehensive catalog with category filtering (500+ products)
- **Bundles** - Curated value bundles with asymmetric grid layout
- **Stores** - Interactive 3D store locator with 6 locations
- **Standards** - Quality standards and commitments
- **Login/Signup** - Clean authentication pages

### 🎯 Interactive Components

#### 🧭 Navigation
- Sticky header with scroll-based color transitions
- Shopping cart dropdown with empty state
- Responsive navigation links
- Login/Signup CTAs

#### 💳 Price Flip Cards
- **Interactive flip animation** to reveal savings
- Front: Old price (crossed out) with CTA
- Back: New price + "Add to Cart" button
- Minimal design (176px × 224px)
- 4 featured products

#### 🎨 Value Journey (Bento Grid)
- Modern asymmetric layout
- Large hero card (2×2 grid)
- Three compact category cards
- High-quality food photography
- Smooth hover effects

#### 📦 Value Bundles
- Featured hero bundle card
- Horizontal compact cards
- Click-to-shop functionality
- Gradient overlays & shine effects

#### 🎭 Other Sections
- **Hero** - Animated rotating food items (20s loop)
- **Stats** - Key metrics and achievements
- **Trust Story** - Brand narrative with elegant typography
- **Trust Section** - Customer testimonials
- **Footer** - Comprehensive site links

---

## 🎨 Design System

### Colors
```css
Primary Green:  #16a34a (green-600)
White:          #ffffff
Black:          #000000
Gray Shades:    #f3f4f6, #e5e7eb, #9ca3af
Red (Discount): #dc2626
```

### Typography
- **Bebas Neue** - Display font for headings
- **Playfair Display** - Serif font for elegant sections
- **System Fonts** - Body text

### Animations
- Framer Motion for smooth transitions
- GPU-accelerated transforms
- Optimized scroll animations
- Hover effects & micro-interactions

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16.0.4** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Unsplash** | High-quality product images |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Sergio799/HAWK-WEB-PROTOTYPING.git
cd HAWK-WEB-PROTOTYPING/whole-foods-prototype

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🏗️ Project Structure

```
whole-foods-prototype/
├── app/
│   ├── bundles/page.tsx          # Value bundles page
│   ├── login/page.tsx             # Login page
│   ├── products/page.tsx          # Products catalog
│   ├── signup/page.tsx            # Sign up page
│   ├── standards/page.tsx         # Quality standards
│   ├── stores/page.tsx            # Store locator
│   ├── globals.css                # Global styles + optimizations
│   ├── layout.tsx                 # Root layout with fonts
│   └── page.tsx                   # Home page
│
├── components/
│   ├── AnimatedBackground.tsx     # Background animations
│   ├── Footer.tsx                 # Site footer
│   ├── Hero.tsx                   # Hero section
│   ├── Navigation.tsx             # Navigation bar + cart
│   ├── PerformanceOptimizer.tsx   # Performance utilities
│   ├── PriceFlipCard.tsx          # Flip card component
│   ├── PriceFlipSection.tsx       # Price comparison section
│   ├── StatsSection.tsx           # Statistics display
│   ├── StoreLocator3D.tsx         # 3D store map
│   ├── TrustSection.tsx           # Trust indicators
│   ├── TrustStory.tsx             # Brand story
│   ├── ValueBundles.tsx           # Bundles section
│   └── ValueJourney.tsx           # Value journey section
│
├── public/                        # Static assets
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

---

## ⚡ Performance Optimizations

- ✅ **Lazy Loading** - Dynamic imports for below-the-fold components
- ✅ **Image Optimization** - Automatic WebP/AVIF conversion
- ✅ **GPU Acceleration** - Hardware-accelerated animations
- ✅ **Code Splitting** - Optimized bundle sizes
- ✅ **Passive Event Listeners** - Improved scroll performance
- ✅ **Request Animation Frame** - Smooth scroll handling
- ✅ **CSS Optimization** - Experimental CSS optimization enabled

---

## 🎯 Key Features Breakdown

### Price Flip Cards
- Compact 176px × 224px cards
- Click to flip and reveal savings
- Add to Cart functionality
- Optimized images with lazy loading
- White background with black borders

### Shopping Cart
- Dropdown preview on cart icon click
- Empty state with call-to-action
- Badge showing item count (0)
- Smooth slide-down animation

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

---

## 🔧 Configuration

### Next.js Config
```typescript
- React Strict Mode: enabled
- Image Optimization: Unsplash domains
- Console Removal: production only
- Package Optimization: framer-motion
- Experimental: optimizeCss
```

### Tailwind Config
```typescript
- Custom Fonts: Bebas Neue, Playfair Display
- Extended Colors: Brand green palette
- Custom Animations: Fade-in, slide effects
- Responsive Utilities: Mobile-first
```

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 🚦 Getting Started

1. **Clone** the repository
2. **Install** dependencies: `npm install`
3. **Run** development server: `npm run dev`
4. **Open** [http://localhost:3000](http://localhost:3000)
5. **Explore** the interactive features!

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sergio799/HAWK-WEB-PROTOTYPING)

**Manual Deployment:**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Set **Root Directory** to `whole-foods-prototype`
5. Click **Deploy**

**Automatic Deployments:**
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments
- Zero configuration needed - Vercel auto-detects Next.js

---

## 📝 Future Enhancements

- [ ] Shopping cart state management (Context API/Zustand)
- [ ] Product search with filters
- [ ] User authentication backend
- [ ] Order processing system
- [ ] Payment integration (Stripe)
- [ ] User account dashboard
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Analytics integration

---

## 🤝 Contributing

This is a prototype project. For production use, consider:

- Adding state management (Redux, Zustand)
- Implementing backend API (Node.js, Express)
- Database integration (PostgreSQL, MongoDB)
- Authentication service (Auth0, Firebase)
- Analytics (Google Analytics, Mixpanel)
- Error boundaries and logging
- Testing suite (Jest, Cypress, Playwright)
- CI/CD pipeline (GitHub Actions)

---

## 📄 License

This is a prototype project for demonstration purposes.

---

## 🙏 Credits

- **Images**: [Unsplash](https://unsplash.com)
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Bebas Neue, Playfair Display)
- **Framework**: [Next.js](https://nextjs.org)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 👨‍💻 Author

**Sergio799**
- GitHub: [@Sergio799](https://github.com/Sergio799)
- Repository: [HAWK-WEB-PROTOTYPING](https://github.com/Sergio799/HAWK-WEB-PROTOTYPING)

---

## 📸 Screenshots

> Add screenshots of your application here

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
