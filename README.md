# v0 Website Clone

A modern website built with Next.js and deployed on Vercel.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Run development server
npm run dev

# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start

# or
yarn build
yarn start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Project dependencies
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment configuration
└── .eslintrc.json       # ESLint configuration
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com).

### Deploy from GitHub

1. Push your changes to the `main` branch
2. Vercel will automatically build and deploy to production
3. Monitor deployment status in the [Vercel Dashboard](https://vercel.com/dashboard)

### Preview Deployments

Every pull request automatically generates a preview deployment URL for testing.

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

For production, set environment variables in Vercel project settings.

## Technologies Used

- **Next.js 14** - React framework with built-in optimization
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Production deployment platform

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT
