# ☕ Coffee Shop Landing Page

A modern, clean, and production-ready coffee shop landing page built with **Vite + React + TypeScript + Tailwind CSS**.

Perfect for beginners learning React while following industry best practices!

---

## 🚀 Quick Start (Step-by-Step Setup)

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

### Setup Commands (From Empty Folder)

```bash
# 1. Create a new Vite project with React + TypeScript
npm create vite@latest . -- --template react-ts

# 2. Install dependencies
npm install

# 3. Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# 4. Initialize Tailwind CSS (creates config files)
npx tailwindcss init -p

# 5. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173/`

---

## 📁 Folder Structure Explained

```
src/
├── components/          # ♻️ Reusable UI components
│   ├── Button.tsx      # Custom button with variants (primary, secondary, outline)
│   ├── Card.tsx        # Reusable card component with hover effects
│   ├── Container.tsx   # Responsive container wrapper with max-width
│   └── index.ts        # Exports all components for easy imports
│
├── sections/           # 📄 Page sections (larger components)
│   ├── Hero.tsx        # Landing hero section with CTA
│   ├── About.tsx       # About us / features section
│   ├── MenuPreview.tsx # Menu items display
│   ├── Contact.tsx     # Contact information and map
│   ├── Footer.tsx      # Site footer with links
│   └── index.ts        # Exports all sections
│
├── hooks/              # 🎣 Custom React hooks
│   └── index.ts        # Example: useScrollPosition, useLocalStorage
│
├── utils/              # 🛠️ Helper functions
│   └── index.ts        # Utilities like formatCurrency, debounce, etc.
│
├── types/              # 📝 TypeScript type definitions
│   └── index.ts        # Interfaces for MenuItem, User, Order, etc.
│
├── constants/          # 🔒 App-wide constants
│   └── index.ts        # API URLs, routes, breakpoints, etc.
│
├── assets/             # 🖼️ Static assets (images, icons, fonts)
│
├── App.tsx             # 🏠 Main app component
├── main.tsx            # 🚪 App entry point
└── index.css           # 🎨 Global styles (Tailwind imports)
```

### 🧩 What Each Folder Does:

- **`components/`**: Small, reusable pieces (buttons, cards, inputs). Can be used anywhere in the app.
- **`sections/`**: Larger, page-specific components (Hero, About, Menu). Composed of multiple smaller components.
- **`hooks/`**: Custom React hooks for shared logic (scroll position, window size, localStorage).
- **`utils/`**: Pure JavaScript/TypeScript helper functions (formatting, validation, calculations).
- **`types/`**: TypeScript interfaces and types for better code safety.
- **`constants/`**: Fixed values used across the app (API URLs, configuration).
- **`assets/`**: Images, logos, icons, and other static files.

---

## 🎨 Tailwind CSS Configuration

### Custom Coffee Color Palette
The project includes a custom "coffee" color palette in `tailwind.config.js`:

```javascript
colors: {
  coffee: {
    50: '#f8f6f4',   // Lightest (backgrounds)
    100: '#e8e2dc',
    200: '#d4c4b5',
    300: '#bfa68d',
    400: '#a98765',
    500: '#8b6f47',  // Base coffee color
    600: '#6f5839',
    700: '#53422b',
    800: '#3a2e1e',
    900: '#221a11',  // Darkest (text, headers)
  }
}
```

**Usage:**
```tsx
<div className="bg-coffee-600 text-white">...</div>
```

### Mobile-First Responsive Breakpoints

Tailwind uses mobile-first breakpoints. Design for mobile first, then add larger screens:

| Breakpoint | Screen Width | Prefix | Example |
|------------|--------------|--------|---------|
| Mobile | < 640px | (none) | `text-sm` |
| Small | ≥ 640px | `sm:` | `sm:text-base` |
| Medium | ≥ 768px | `md:` | `md:text-lg` |
| Large | ≥ 1024px | `lg:` | `lg:text-xl` |
| Extra Large | ≥ 1280px | `xl:` | `xl:text-2xl` |
| 2X Large | ≥ 1536px | `2xl:` | `2xl:text-3xl` |

**Example:**
```tsx
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  {/* Mobile: 3xl, Tablet: 5xl, Desktop: 6xl */}
  Responsive Heading
</h1>
```

### Custom Button Styles

Pre-defined button classes in `index.css`:

```tsx
// Primary button
<button className="btn-primary">Click Me</button>

// Secondary button
<button className="btn-secondary">Learn More</button>

// Or use the Button component:
<Button variant="primary" size="lg">Get Started</Button>
```

### Custom Animations

Defined in `tailwind.config.js`:

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-float` - Floating animation (infinite)

**Usage:**
```tsx
<div className="animate-fade-in">Content appears smoothly</div>
```

---

## 🏗️ Best Practices Followed

### ✅ Component Organization

1. **Small, Focused Components**: Each component does one thing well
2. **Prop Interfaces**: TypeScript interfaces for all props
3. **Default Props**: Sensible defaults for optional props
4. **Export Pattern**: Centralized exports via `index.ts` files

### ✅ TypeScript Best Practices

```tsx
// ❌ Bad: No types
export const Button = ({ children, onClick }) => { ... }

// ✅ Good: Full type safety
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick,
  variant = 'primary' 
}) => { ... }
```

### ✅ Tailwind CSS Best Practices

1. **Use Tailwind utilities first**: Before writing custom CSS
2. **Extract common patterns**: Create reusable components
3. **Responsive design**: Always include mobile, tablet, and desktop sizes
4. **Consistent spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, etc.)

### ✅ Clean Code Principles

- **DRY (Don't Repeat Yourself)**: Reusable components and utilities
- **Single Responsibility**: Each component has one job
- **Descriptive Names**: Clear, meaningful variable/function names
- **Consistent Formatting**: Prettier + ESLint (recommended to add)

---

## 🚀 Preparing for Future Features

### 📋 Menu Page
```bash
# Add React Router for navigation
npm install react-router-dom

# Create new pages
src/pages/MenuPage.tsx
src/pages/AboutPage.tsx
```

### 🛒 Online Ordering
```bash
# Add state management
npm install zustand  # or Redux Toolkit

# Create order management
src/store/cartStore.ts
src/components/Cart.tsx
src/components/CheckoutForm.tsx
```

### 🎬 Animations
```bash
# Add animation libraries
npm install framer-motion  # React animations
# or
npm install @formkit/auto-animate  # Simpler option
```

**Example with Framer Motion:**
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Content
</motion.div>
```

### 📡 CMS / API Integration
```bash
# Add API client
npm install axios  # or use fetch API

# Add React Query for data fetching
npm install @tanstack/react-query
```

**Example API structure:**
```
src/services/
├── api.ts           # API client configuration
├── menuService.ts   # Menu-related API calls
├── orderService.ts  # Order-related API calls
└── types.ts         # API response types
```

**Example API call:**
```typescript
// src/services/menuService.ts
import axios from 'axios';
import { MenuItem } from '../types';

export const getMenuItems = async (): Promise<MenuItem[]> => {
  const response = await axios.get('/api/menu');
  return response.data;
};
```

### 🎯 Forms & Validation
```bash
# Add form library
npm install react-hook-form zod @hookform/resolvers
```

### 🖼️ Image Optimization
```bash
# For production images
npm install sharp  # Image processing
```

---

## 📦 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking (TypeScript)
npm run type-check  # (add this script to package.json)
```

---

## 🎯 Next Steps to Learn

### Beginner Level
1. ✅ Understand component structure
2. ✅ Learn props and TypeScript interfaces
3. ✅ Master Tailwind utility classes
4. 📚 Add more sections (Testimonials, Gallery)
5. 📚 Customize colors and fonts

### Intermediate Level
1. 🎣 Create custom hooks
2. 🔄 Add React Router for navigation
3. 📝 Implement forms with validation
4. 💾 Add state management (Context API or Zustand)
5. 🎨 Add advanced animations

### Advanced Level
1. 🚀 Connect to a backend API
2. 🔐 Add authentication
3. 💳 Implement payment processing
4. 🧪 Write unit tests (Vitest + React Testing Library)
5. 📊 Add analytics and monitoring

---

## 🎨 Design Principles Used

### Clean & Modern
- **White space**: Generous padding and margins for breathing room
- **Typography**: Clear hierarchy with custom fonts (Playfair Display + Inter)
- **Color scheme**: Warm coffee tones for brand consistency

### Mobile-First
- Designed for mobile screens first
- Progressive enhancement for tablets and desktops
- Touch-friendly button sizes (minimum 44×44px)

### Accessibility
- Semantic HTML tags (`<section>`, `<header>`, `<nav>`)
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast

---

## 🛠️ Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",      // Tailwind IntelliSense
    "dbaeumer.vscode-eslint",          // ESLint
    "esbenp.prettier-vscode",          // Prettier
    "dsznajder.es7-react-js-snippets", // React snippets
  ]
}
```

---

## 📚 Learning Resources

### React + TypeScript
- [React Official Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Vite
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🤝 Contributing

Feel free to customize this project for your needs! Ideas for improvement:
- Add a dark mode toggle
- Implement a working menu filter
- Add image gallery with lightbox
- Create a blog section
- Add Google Maps integration
- Implement a reservation system

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💡 Tips for Beginners

1. **Start Small**: Don't try to add all features at once
2. **Read Error Messages**: They usually tell you exactly what's wrong
3. **Use TypeScript**: It catches bugs before runtime
4. **Commit Often**: Save your progress with Git
5. **Ask Questions**: Use Stack Overflow, Discord, or GitHub Discussions
6. **Build Projects**: The best way to learn is by doing!

---

**Happy Coding! ☕✨**

Need help? Check the [Vite docs](https://vitejs.dev/), [React docs](https://react.dev/), or [Tailwind docs](https://tailwindcss.com/).
