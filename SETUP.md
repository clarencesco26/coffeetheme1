# 🚀 Quick Setup Guide

This is a step-by-step guide to get your Coffee Shop Landing Page up and running!

## ⚡ Super Quick Start (If Files Already Exist)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser!

---

## 📋 Complete Setup (From Scratch)

### Step 1: Prerequisites
Make sure you have these installed:
- **Node.js** (v18+): https://nodejs.org/
- **npm** (comes with Node.js)
- **VS Code** (recommended): https://code.visualstudio.com/

Verify installation:
```bash
node --version  # Should show v18 or higher
npm --version   # Should show 9 or higher
```

### Step 2: Create Project
```bash
# Navigate to your projects folder
cd C:\CODE\PROJECTS

# Create a new folder
mkdir my-coffee-shop
cd my-coffee-shop

# Create Vite project with React + TypeScript
npm create vite@latest . -- --template react-ts
```

### Step 3: Install Dependencies
```bash
# Install base dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
```

### Step 4: Configure Tailwind CSS
Create `tailwind.config.js` and `postcss.config.js` (see project files for content)

Update `src/index.css` with Tailwind directives (see project file for content)

### Step 5: Create Folder Structure
```bash
# Create folders
mkdir src\components src\sections src\hooks src\utils src\types src\constants
```

### Step 6: Start Development
```bash
npm run dev
```

---

## 🎨 What You Get

✅ **Vite** - Lightning-fast build tool
✅ **React 18** - Modern React with hooks
✅ **TypeScript** - Type safety and better DX
✅ **Tailwind CSS** - Utility-first CSS framework
✅ **Custom Components** - Reusable Button, Card, Container
✅ **Landing Page Sections** - Hero, About, Menu, Contact, Footer
✅ **Mobile-First Design** - Responsive on all devices
✅ **Custom Coffee Theme** - Beautiful coffee color palette
✅ **Best Practices** - Clean code structure for scalability

---

## 🛠️ Development Workflow

### Making Changes
1. Edit files in `src/`
2. Save the file
3. Changes appear instantly in browser (Hot Module Replacement)

### Adding New Components
```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="p-4 bg-coffee-100 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

// Don't forget to export from index.ts
// src/components/index.ts
export { MyComponent } from './MyComponent';
```

### Adding New Sections
Create in `src/sections/` and import in `App.tsx`

---

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Production files will be in `dist/` folder.

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for TypeScript errors
npx tsc --noEmit
```

### Tailwind Not Working
1. Check `tailwind.config.js` has correct content paths
2. Verify `index.css` has Tailwind directives
3. Restart dev server

---

## 🎯 Next Steps

1. **Customize Colors**: Edit `tailwind.config.js` coffee colors
2. **Add Images**: Place in `src/assets/` and import
3. **Create More Sections**: Add Gallery, Testimonials, etc.
4. **Add Navigation**: Install React Router for multi-page
5. **Connect API**: Add data fetching for dynamic content

---

## 💡 Helpful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Dependencies
npm install <package>    # Add new package
npm update               # Update all packages
npm outdated             # Check outdated packages

# Utilities
npm run lint             # Run ESLint (if configured)
npm run format           # Run Prettier (if configured)
```

---

## 📚 Learn More

- **Full Documentation**: See [README.md](README.md)
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/docs/

---

**Need help? Open an issue or check the documentation!**

Happy coding! ☕✨
