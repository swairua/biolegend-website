# Biolegend Scientific Ltd - Laboratory Equipment & Life Sciences Solutions

Website for Biolegend Scientific Ltd, a leading supplier of laboratory equipment, scientific instruments, chemicals, and supplies in Kenya.

**Website**: https://biolegendscientific.co.ke

## About

Biolegend Scientific Ltd is an authorized distributor of world-leading laboratory equipment and scientific solutions. We serve education, healthcare, pharmaceutical, food and beverage, research, and environmental industries across Kenya.

## Features

- Comprehensive product catalog (laboratory equipment, water testing, life sciences, chemicals & reagents)
- Industry-specific solutions
- Partner and distributor information
- Service area coverage across Kenya
- Contact and support services

## Tech Stack

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Recharts** - Data visualization

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```sh
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode (for debugging)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn-ui components
│   ├── Header.tsx      # Site header with navigation
│   ├── HeroSection.tsx # Hero banner
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Contact.tsx     # Contact page
│   ├── Industries/     # Industry-specific pages
│   ├── Services/       # Service-specific pages
│   └── ...
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── data/               # Data files (suppliers, products, etc.)
└── main.tsx            # Application entry point
```

## Deployment

This project can be deployed to various platforms:

- **Netlify** - Connect your repository and deploy automatically
- **Vercel** - Zero-config deployment for Next.js-style projects
- **Traditional hosting** - Build and serve the static files

For production builds:
```sh
npm run build
```

The `dist/` folder will contain the optimized production build.

## SEO & Open Graph

The site includes:
- Comprehensive SEO meta tags
- Open Graph tags for social media sharing
- JSON-LD structured data
- Sitemap and robots.txt
- Optimized favicon and brand imagery

## Support

For questions or issues, please contact:
- **Email**: biolegend@biolegendscientific.co.ke
- **Phone**: +254741207690
- **Address**: Alpha Center, Eastern Bypass, Membley, Nairobi, Kenya

## License

This project is proprietary to Biolegend Scientific Ltd.
