# PageForge - Next.js + Supabase + Once UI Starter

![PageForge](public/images/og/home.jpg)

## Tech Stack

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Supabase** - Backend-as-a-Service with authentication
- **Once UI** - Beautiful design system and components
- **Tailwind CSS** - Utility-first CSS framework

## Features

- 🔐 **Authentication**: Complete auth flow with Supabase (email/password + OAuth)
- 🎨 **Design System**: Once UI components for consistent, beautiful UI
- 🤖 **AI Section Generator**: Advanced AI-powered section generation system
- 📱 **Responsive**: Mobile-first responsive design
- 🚀 **Performance**: Optimized for speed with Next.js 15
- 🛡️ **Type Safe**: Full TypeScript support
- 🔧 **Developer Experience**: Hot reload, ESLint, and more

## AI-Powered Section Generation 🤖

PageForge includes an advanced AI-powered section generation system that can create complex,
interactive sections from natural language descriptions. This system goes far beyond basic templates
to generate sophisticated, industry-specific components.

### 🎯 What You Can Generate

**Basic Sections:**

- Team showcases with member profiles
- Image galleries with lightbox functionality
- Contact forms with validation
- Testimonials and reviews
- FAQ accordions

**Advanced Sections:**

- Interactive pricing calculators with sliders
- Product configurators with 3D previews
- Learning paths with progress tracking
- Data visualization dashboards
- Timeline components with animations
- Multi-step forms with conditional logic

**Industry-Specific:**

- E-commerce product catalogs
- Real estate property listings
- Portfolio showcases for creatives
- Course management interfaces
- Event booking systems
- Financial calculators

### 🚀 How It Works

1. **Natural Language Input**: Describe what you want in plain English
2. **Smart Analysis**: Advanced pattern recognition identifies requirements
3. **Code Generation**: Creates responsive, accessible React components
4. **Once UI Integration**: Uses your existing design system
5. **Production Ready**: Generates clean, maintainable TypeScript code

### 💡 Example Requests

```bash
# Simple sections
"Create a team section with member photos and bios"
"Build a contact form with name, email, and message fields"

# Complex interactive sections
"Create an interactive pricing calculator with plan comparison"
"Build a 3D product configurator with color and size options"
"Design a learning dashboard with progress bars and achievements"

# Industry-specific sections
"Create a real estate listing with property details and virtual tour"
"Build an investment portfolio tracker with charts and analytics"
"Design a recipe collection with ingredients and instructions"
```

### 🔧 Technical Features

- **Smart Pattern Recognition**: Detects 20+ common UI patterns
- **Advanced Layouts**: Grid, flex, masonry, timeline, carousel, and custom layouts
- **Interactive Elements**: Forms, charts, modals, accordions, tabs, and more
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Type Safety**: Full TypeScript support with proper interfaces
- **Accessibility**: WCAG compliant components with ARIA attributes

### 📚 Documentation

For detailed usage instructions and advanced examples, see:

- [Custom Sections Guide](src/components/universal-section/CUSTOM_SECTIONS_GUIDE.md)
- [AI Section Factory Documentation](src/components/universal-section/README.md)

Try the interactive demo by visiting `/demo` (coming soon) or check out the example implementations
in the components directory.

## Quick Start

1. **Clone and install dependencies:**

```bash
npm install
```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── auth/           # Authentication pages
│   ├── login/          # Login page
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   └── universal-section/  # AI-powered section generation
│       ├── AISectionFactory.ts      # Core AI generation logic
│       ├── AutoSectionRegistry.ts   # Section registration system
│       ├── CustomSectionDemo.tsx    # Interactive demo component
│       └── CUSTOM_SECTIONS_GUIDE.md # Comprehensive documentation
├── lib/               # Utility functions and configurations
│   └── supabase/      # Supabase client configuration
└── once-ui/           # Once UI design system
```

## Authentication

The starter includes a complete authentication system:

- **Login/Signup**: Email and password authentication
- **OAuth**: Google sign-in (configurable)
- **Protected Routes**: Middleware for route protection
- **Session Management**: Automatic session handling

## Deployment

Deploy to Vercel with a single click:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fpageforge)

Don't forget to add your environment variables in Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Once UI Documentation](https://docs.once-ui.com/once-ui/quick-start)

## Creators

Connect with us!

**Lorant One**: [Site](https://lorant.one) / [Threads](https://www.threads.net/@lorant.one) /
[LinkedIn](https://www.linkedin.com/in/lorant-one/)

**Zsofia Komaromi**: [Site](https://zsofia.pro) / [Threads](https://www.threads.net/@zsofia_kom) /
[LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

## Become a Oncer

![Design Engineers Club](https://docs.once-ui.com/images/quasar-coding.jpg)

Join the [Design Engineers Club](https://discord.com/invite/5EyAQ4eNdS) on Discord to connect with
us and share your projects.

Found a bug? Report it
[here](https://github.com/once-ui-system/nextjs-starter/issues/new?labels=bug&template=bug_report.md).
Got a feature request? Submit it
[here](https://github.com/once-ui-system/nextjs-starter/issues/new?labels=feature%20request&template=feature_request.md).

## Sponsors

Once UI is an indie project. [Sponsor us](https://github.com/sponsors/once-ui-system) and get
featured on our site!

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
