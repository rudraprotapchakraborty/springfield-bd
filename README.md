# Springfield Real Estate

A modern, feature-rich real estate platform showcasing residential properties and construction projects in Dhaka, Bangladesh. Built with Next.js and designed to provide an exceptional user experience for property seekers and stakeholders.

## 🏢 Project Overview

Springfield is a real estate company specializing in residential properties and apartment complexes across prime locations in Dhaka. This platform serves as the digital face of the company, displaying:

- **Ongoing Projects** - Currently under construction
- **Completed Projects** - Finished residential developments
- **Upcoming Projects** - Future developments in planning phase
- **Project Details** - Comprehensive information with galleries and floor plans
- **Employee Directory** - Team member information
- **Career Opportunities** - Job listings and recruitment information
- **Notice Board** - Important announcements and updates
- **Valuable Customers** - Recognition of key clients

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React-based full-stack framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth, production-ready animations
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent icon library
- **Theme Support**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Runtime**: Node.js with modern ES features

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd springfield-bd
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

### Project Structure

```
app/
├── components/          # Reusable React components
├── data/               # Static data (projects, etc.)
├── [routes]/           # Page routes (career, contact, projects, etc.)
├── layout.tsx          # Root layout and providers
├── page.tsx            # Home page
└── globals.css         # Global styles

public/                 # Static assets (images, etc.)
```

### Key Components

- **PageLoader** - Loading state indicator
- **BackgroundFx** - Visual effects and animations
- **CustomCursor** - Enhanced cursor experience
- **ProjectCard** - Reusable project display component
- **InterestModal** - User interest/inquiry modal
- **FloatingActions** - Floating action buttons for quick access

## 🎨 Features

- ✨ Smooth animations and transitions with Framer Motion
- 🌙 Dark mode support for better user experience
- 📱 Fully responsive design for all devices
- ♿ Semantic HTML for accessibility
- ⚡ Optimized performance with Next.js
- 🎯 Interactive UI elements and modals
- 📊 Project filtering and categorization
- 🔍 Detailed project pages with galleries

## 📝 Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.mjs`** - Tailwind CSS customization (via PostCSS)
- **`eslint.config.mjs`** - ESLint rules and configuration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel dashboard
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with a single click

For detailed instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

### Other Deployment Options

- **Docker** - Containerize and deploy anywhere
- **Traditional Server** - Use `npm run build` and `npm start`
- **Static Export** - Configure for static site generation if needed

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is private and proprietary to Springfield Real Estate.

## 📞 Support & Contact

For questions, issues, or feature requests, please reach out through:
- Website contact page
- Email inquiry
- Notice board announcements
