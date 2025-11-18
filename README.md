# Next.js Patrix Portfolio Website

This is a Next.js version of the Patrix portfolio website, converted from a static HTML/CSS/JavaScript site to a modern Next.js application with TypeScript and Sass.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Sass/SCSS** for styling
- **Bootstrap 5** for responsive design
- **FontAwesome** icons
- **GLightbox** for video/lightbox functionality
- Fully responsive design
- Modern React components

## Project Structure

```
next_patrix/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/             # React components
│   ├── Navbar.tsx
│   ├── IntroSection.tsx
│   ├── CompaniesSection.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── PortfolioSection.tsx
│   ├── GetStartedSection.tsx
│   └── Footer.tsx
├── styles/                 # Sass/SCSS files
│   ├── globals.scss        # Main stylesheet
│   ├── _custom.scss        # Bootstrap customization
│   ├── components/         # Component styles
│   └── sections/           # Section styles
├── public/
│   └── images/             # All images and assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd next_patrix
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Sass/SCSS** - CSS preprocessor
- **Bootstrap 5** - CSS framework
- **FontAwesome** - Icon library
- **GLightbox** - Lightbox library

## Customization

### Colors

Edit `styles/_custom.scss` to change the theme colors:
- `$purple-dark` - Primary color
- `$purple-light` - Light purple
- `$pink` - Secondary color
- `$footer` - Footer background

### Content

Edit the component files in `components/` to update content:
- Text content
- Images
- Links
- Form fields

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or build and deploy manually:

```bash
npm run build
npm start
```

## License

This project is based on the Patrix template. Please refer to the original license in the Patrix folder.

