# Streaming Platform

A modern, responsive streaming platform built with Next.js 15, featuring movie discovery, authentication, and a beautiful user interface powered by shadcn/ui components.

## 🚀 Features

- **Movie Discovery**: Browse popular, top-rated, and upcoming movies
- **Hero Carousel**: Interactive carousel showcasing featured movies with autoplay
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Authentication**: Login and registration pages with form validation
- **Real-time Data**: Integration with The Movie Database (TMDB) API
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **Error Handling**: Robust error boundaries and loading states
- **Performance**: Optimized with Next.js 15 features including Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.13
- **UI Components**: shadcn/ui with Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel with autoplay
- **Icons**: Lucide React
- **API**: The Movie Database (TMDB) API
- **Package Manager**: pnpm

## 📁 Project Structure

```
streaming-platform/
├── app/
│   ├── (public)/
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── register/
│   │   ├── discover/
│   │   │   ├── _components/
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── trending-movies-section.tsx
│   │   │   │   ├── recommended-section.tsx
│   │   │   │   ├── trending-stories-section.tsx
│   │   │   │   ├── hot-news-section.tsx
│   │   │   │   └── latest-trailer-banner.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── common/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── index.tsx
│   │   ├── loading-skeleton.tsx
│   │   ├── error-boundary.tsx
│   │   └── svg/
│   └── ui/ (shadcn/ui components)
├── lib/
│   ├── api/
│   │   ├── tmdb.ts
│   │   ├── types.ts
│   │   └── config.ts
│   └── utils.ts
├── hooks/
└── public/assets/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd streaming-platform
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_API_BASE_URL=https://api.themoviedb.org
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components built on top of Radix UI primitives:

- **Cards**: For movie displays and content sections
- **Carousel**: For hero section and movie carousels
- **Forms**: For authentication with validation
- **Buttons**: Custom styled action buttons
- **Navigation**: Responsive sidebar and header
- **Loading States**: Skeleton loaders for better UX

## 🎬 API Integration

The platform integrates with The Movie Database (TMDB) API to fetch:

- Popular movies
- Top-rated movies
- Upcoming movies
- Movie details and genres
- High-quality movie posters and backdrops

### API Features

- **Caching**: Intelligent caching with Next.js revalidation
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Type Safety**: Full TypeScript definitions for all API responses
- **Image Optimization**: Automatic image URL generation with multiple sizes

## 📱 Responsive Design

The platform is fully responsive with:

- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly navigation
- Optimized images for different devices
- Responsive typography and spacing

## 🔐 Authentication

- Login page with form validation
- Registration page (placeholder)
- Social login options (Google, Apple, Facebook)
- Form validation using Zod schemas
- Remember me functionality

## 🎯 Key Features Implementation

### Hero Section
- Auto-playing carousel with movie backdrops
- Movie information cards with genres and ratings
- Watch and Trailer action buttons
- Responsive design for all screen sizes

### Movie Discovery
- Multiple movie categories (Popular, Top Rated, Upcoming)
- Genre-based filtering
- Infinite scroll capabilities
- Loading states and error handling

### Performance Optimizations
- Next.js 15 with Turbopack for faster builds
- Image optimization with Next.js Image component
- Lazy loading and code splitting
- Efficient caching strategies

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [TMDB API Documentation](https://developers.themoviedb.org/)
- [Tailwind CSS](https://tailwindcss.com/)
