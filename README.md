# IEEE-CSITSS
Demo website of IEEE CSITSS


IEEE-CSITSS Demo Website

This repository contains a demo website for the IEEE Conference on Computational Systems and Information Technology for Sustainable Solutions (CSITSS). The website showcases the conference's purpose, important dates, and other relevant information.


Implemented:
Scroll-based effects
Interactive buttons & hover effects
Responsive navigation bar
Light/Dark mode
Glassmorphism & minimalist design
Performance optimizations

Features:

1.Scroll-Based Effects for Dynamic Content Reveal 
The Navbar component listens for scroll events and applies a "glass-card" effect when scrolling (navbar.tsx [47]).

2.Interactive Buttons or Hover Effects 
Navigation links have hover effects with an animated underline (navbar.tsx [47]).
The Theme Toggle Button dynamically updates the theme with visual feedback (theme-toggle-button.tsx [50]).

3.Light/Dark Mode Toggle 
Implemented with FloatingThemeToggle.tsx and ThemeToggleButton.tsx ([46], [50]).
Users can switch themes dynamically.

4.A Creative Navigation Bar Redesign 
The Navbar component has a dynamic scroll effect, mobile responsiveness, and hover animations (navbar.tsx [47])

5.Improve Responsiveness and Accessibility 
The useIsMobile.tsx hook detects mobile screens (use-mobile.tsx [51]).
The navbar.tsx includes a mobile-friendly navigation system.

6.Maintain a Consistent UI with Modern Design Trends 
The site uses Glassmorphism in the navbar on scroll (navbar.tsx [47]).
The design follows a Minimalist yet engaging layout with clean UI elements.

7.Performance Optimizations for Smooth Rendering 
The useEffect hooks in theme toggles prevent unnecessary re-renders (theme-toggle.tsx [49]).
next-themes ensures light/dark mode does not cause hydration mismatches (theme-provider.tsx [48]).


Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-rendered applications
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high-quality web interfaces
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible, and extensible forms with easy-to-use validation

Getting Started : 
Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

Installation
1. Clone the repository:

   bash
   git clone https://github.com/spk-22/IEEE-CSITSS.git
   cd IEEE-CSITSS
   
2. Install dependencies:

   Using npm:

   bash
   ```npm install```
   

   Or using Yarn:

   bash
  ``` yarn install```
   
Running the Development Server :

After installing the dependencies, start the development server:

Using npm:

bash
```npm run dev```


Or using Yarn:

bash
```yarn dev```
