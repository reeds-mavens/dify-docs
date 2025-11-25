# Dromos - Personal Risk Management Website

A clean, professional single-page website for independent risk management consultancy.

## Overview

Simple one-page design showcasing risk management expertise and services. Built with Next.js, React, TypeScript and Tailwind CSS.

## Page Sections

1. **Hero** - Photo, name, tagline and CTA
2. **About** - Professional introduction
3. **What I Do** - 4 core services
4. **Experience & Expertise** - Industries, specializations, frameworks
5. **Contact** - Email and LinkedIn links

## Features

- ✨ Single page with smooth scroll navigation
- 📱 Fully responsive with mobile hamburger menu
- 🎨 Professional blue color scheme
- ⚡ Fast static site generation
- 🎯 Clean, focused design

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Customization

### 1. Update Personal Info

Edit these placeholders in the components:
- `components/Hero.tsx` - Name and photo
- `components/About.tsx` - Professional background
- `components/Experience.tsx` - Industries, expertise, frameworks
- `components/Contact.tsx` - LinkedIn URL

### 2. Add Professional Photo

Replace the placeholder circle in `Hero.tsx` with:
```tsx
<Image src="/your-photo.jpg" alt="Your Name" className="rounded-full" />
```

### 3. Update Services

Modify services in `components/Services.tsx` to match your offerings.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
