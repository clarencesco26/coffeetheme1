# 📘 Component Usage Guide

Quick reference for using the components in this project!

---

## 🔘 Button Component

### Import
```tsx
import { Button } from '../components';
```

### Basic Usage
```tsx
<Button>Click Me</Button>
```

### Variants
```tsx
// Primary (default) - Coffee brown with white text
<Button variant="primary">Primary Button</Button>

// Secondary - White with coffee brown border
<Button variant="secondary">Secondary Button</Button>

// Outline - Transparent with white border (for dark backgrounds)
<Button variant="outline">Outline Button</Button>
```

### Sizes
```tsx
<Button size="sm">Small</Button>     // Compact button
<Button size="md">Medium</Button>    // Default size
<Button size="lg">Large</Button>     // Big button
```

### With Click Handler
```tsx
<Button 
  onClick={() => alert('Hello!')}
  variant="primary"
  size="lg"
>
  Click Me
</Button>
```

### Full Example
```tsx
<div className="flex gap-4">
  <Button 
    variant="primary" 
    size="lg"
    onClick={() => console.log('Order now!')}
  >
    Order Now
  </Button>
  
  <Button 
    variant="secondary" 
    size="lg"
    onClick={() => console.log('Learn more')}
  >
    Learn More
  </Button>
</div>
```

---

## 🎴 Card Component

### Import
```tsx
import { Card } from '../components';
```

### Basic Usage
```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### With Hover Effect
```tsx
<Card hover>
  <h3>Hover over me!</h3>
  <p>This card will lift and show shadow on hover</p>
</Card>
```

### Custom Styling
```tsx
<Card className="bg-coffee-100 border-2 border-coffee-600">
  <h3>Custom Styled Card</h3>
</Card>
```

### Full Example - Product Card
```tsx
<Card hover className="max-w-sm">
  <img 
    src="/coffee.jpg" 
    alt="Coffee" 
    className="rounded-lg mb-4"
  />
  <h3 className="text-2xl font-bold text-coffee-800 mb-2">
    Espresso
  </h3>
  <p className="text-gray-600 mb-4">
    Rich and bold Italian espresso
  </p>
  <div className="flex justify-between items-center">
    <span className="text-xl font-bold text-coffee-600">$3.50</span>
    <Button size="sm">Add to Cart</Button>
  </div>
</Card>
```

---

## 📦 Container Component

### Import
```tsx
import { Container } from '../components';
```

### Basic Usage
```tsx
<Container>
  <h1>This content is centered with proper padding</h1>
</Container>
```

### Sizes
```tsx
// Small - max-width: 48rem (768px)
<Container size="sm">
  Narrow content
</Container>

// Medium - max-width: 64rem (1024px)
<Container size="md">
  Medium content
</Container>

// Large (default) - max-width: 80rem (1280px)
<Container size="lg">
  Wide content
</Container>

// Full - No max-width constraint
<Container size="full">
  Edge-to-edge content
</Container>
```

### Custom Styling
```tsx
<Container className="bg-gray-100 py-20">
  <h1>Section Content</h1>
</Container>
```

### Full Example - Section
```tsx
<section className="py-20 bg-white">
  <Container size="lg">
    <h2 className="text-4xl font-bold text-center mb-8">
      Our Menu
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </div>
  </Container>
</section>
```

---

## 🎨 Using Custom Tailwind Classes

### Coffee Colors
```tsx
// Backgrounds
<div className="bg-coffee-50">Lightest coffee</div>
<div className="bg-coffee-600">Primary coffee</div>
<div className="bg-coffee-900">Darkest coffee</div>

// Text
<p className="text-coffee-600">Coffee colored text</p>
<h1 className="text-coffee-800">Dark coffee text</h1>

// Borders
<div className="border-2 border-coffee-600">Coffee border</div>
```

### Custom Button Classes
```tsx
// Using utility classes
<button className="btn-primary">Primary Style</button>
<button className="btn-secondary">Secondary Style</button>
```

### Custom Animations
```tsx
// Fade in
<div className="animate-[fade-in_0.6s_ease-in-out]">
  Fades in smoothly
</div>

// Slide up
<div className="animate-[slide-up_0.6s_ease-out]">
  Slides up from bottom
</div>

// Float
<div className="animate-[float_3s_ease-in-out_infinite]">
  Floats up and down
</div>
```

### Font Families
```tsx
// Sans-serif (Inter) - Default for body
<p className="font-[family-name:var(--font-family-sans)]">
  Body text
</p>

// Display (Playfair Display) - Default for headings
<h1 className="font-[family-name:var(--font-family-display)]">
  Heading text
</h1>
```

---

## 🎯 Common Patterns

### Hero Section Pattern
```tsx
<section className="min-h-screen bg-gradient-to-br from-coffee-800 to-coffee-600 text-white">
  <Container className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-6">Welcome</h1>
      <p className="text-xl mb-8">Your subtitle here</p>
      <div className="flex gap-4 justify-center">
        <Button variant="outline" size="lg">Learn More</Button>
        <Button variant="secondary" size="lg">Get Started</Button>
      </div>
    </div>
  </Container>
</section>
```

### Feature Grid Pattern
```tsx
<section className="py-20 bg-gray-50">
  <Container>
    <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card hover className="text-center">
        <div className="text-5xl mb-4">☕</div>
        <h3 className="text-xl font-bold mb-2">Feature 1</h3>
        <p>Description here</p>
      </Card>
      {/* Repeat for more cards */}
    </div>
  </Container>
</section>
```

### Two Column Layout Pattern
```tsx
<section className="py-20">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left column */}
      <div>
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your content here...
        </p>
        <Button variant="primary">Learn More</Button>
      </div>
      
      {/* Right column */}
      <div>
        <img 
          src="/image.jpg" 
          alt="About" 
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </Container>
</section>
```

---

## 📱 Responsive Design Patterns

### Mobile-First Approach
```tsx
// Mobile: Stack vertically
// Tablet+: Side by side
<div className="flex flex-col md:flex-row gap-4">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</div>
```

### Responsive Text Sizes
```tsx
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  Scales with screen size
</h1>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### Show/Hide on Breakpoints
```tsx
<div className="hidden md:block">
  Only visible on tablet and larger
</div>

<div className="md:hidden">
  Only visible on mobile
</div>
```

---

## 🔧 TypeScript Tips

### Component Props Interface
```tsx
interface MyComponentProps {
  title: string;              // Required
  subtitle?: string;          // Optional
  count: number;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  subtitle = 'Default subtitle',  // Default value
  count,
  isActive,
  onClick,
  children
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </div>
  );
};
```

### Using Type Definitions
```tsx
import { MenuItem } from '../types';

const menuItem: MenuItem = {
  id: '1',
  name: 'Espresso',
  description: 'Rich and bold',
  price: 3.50,
  category: 'coffee',
  available: true
};
```

---

## 🎨 Styling Best Practices

### DO ✅
```tsx
// Use Tailwind utilities
<div className="p-4 bg-white rounded-lg shadow-md">

// Compose utilities for complex styles
<button className="px-6 py-3 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors">

// Use custom components for repeated patterns
<Button variant="primary">Click Me</Button>
```

### DON'T ❌
```tsx
// Don't use inline styles (unless absolutely necessary)
<div style={{ padding: '16px', backgroundColor: 'white' }}>

// Don't create single-use custom CSS classes
.my-specific-button { ... }

// Don't repeat the same class combinations
<div className="px-6 py-3 bg-coffee-600 text-white rounded-lg">
<div className="px-6 py-3 bg-coffee-600 text-white rounded-lg">
// Instead, create a component!
```

---

## 💡 Quick Tips

1. **Always import from index files**:
   ```tsx
   // ✅ Good
   import { Button, Card } from '../components';
   
   // ❌ Avoid
   import { Button } from '../components/Button';
   import { Card } from '../components/Card';
   ```

2. **Use semantic HTML**:
   ```tsx
   <section>    // Not <div>
   <article>    // Not <div>
   <nav>        // Not <div>
   ```

3. **Prefer composition**:
   ```tsx
   <Card>
     <CardHeader>Title</CardHeader>
     <CardBody>Content</CardBody>
   </Card>
   ```

4. **Use TypeScript**:
   ```tsx
   // Define types for all props!
   interface Props { ... }
   ```

---

Need more examples? Check the existing components in `src/sections/` for real-world usage!

**Happy Coding! ☕✨**
