# Isuru Edirisinghe's Portfolio

A developer portfolio built with Next.js, TypeScript, and Tailwind CSS, showcasing backend engineering and DevOps expertise.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Development](#development)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)

## Overview

This portfolio site is designed to win interviews for new-grad/junior Software Engineer and DevOps/Cloud roles. It follows the principles outlined in CLAUDE.md:

- Fast loading (Lighthouse ≥ 95)
- Accessible (WCAG AA)
- CI/CD deployed
- Observable
- Content-driven from `/docs` and `/content` directories

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: Lucide React (planned)
- **Deployment**: Vercel (or Cloudflare Pages)
- **CI/CD**: GitHub Actions
- **Content**: JSON data files in `/content` directory

## Project Structure

```
my-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── sections/        # Home page sections
│   │   ├── projects/        # Project detail pages ([slug])
│   │   ├── resume/          # Resume download page
│   │   ├── not-found.tsx    # 404 page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable components (to be extracted)
│   ├── lib/                 # Utility functions
│   └── styles/              # CSS/Tailwind configuration
├── content/                 # Structured data (JSON)
│   ├── projects.json
│   ├── experience.json
│   ├── skills.json
│   ├── education.json
│   ├── contact.json
│   └── writing.json
├── docs/                    # Source of truth (CVs, assets)
│   ├── CV_SE.md
│   ├── CV_DevOps.md
│   ├── CV_General.md
│   ├── linkedin.md
│   └── assets/
├── public/                  # Static assets
│   ├── sitemap.xml
│   ├── robots.txt
│   └── (favicon, OG images to be added)
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Content Management

All content comes from the `/docs` and `/content` directories as specified in CLAUDE.md.

### Source Files (`/docs`)
- `CV_SE.md` - Software Engineering resume content
- `CV_DevOps.md` - DevOps/Cloud resume content
- `CV_General.md` - General resume content
- `linkedin.md` - LinkedIn profile (reference only - unverified metrics omitted)
- `/docs/assets/` - Screenshots and diagrams for projects

### Structured Data (`/content`)
JSON files that power the site:
- `projects.json` - All projects with metadata, tech stack, decisions
- `experience.json` - Professional experience with achievements
- `skills.json` - Skills grouped by category with project usage
- `education.json` - Education, certifications, competitions, volunteering
- `contact.json` - Contact information and availability
- `writing.json` - Blog/writing content (placeholder)

### Updating Content
1. **Edit source CVs**: Modify files in `/docs/` to update resume information
2. **Update structured data**: Modify JSON files in `/content/` to reflect changes
3. **Add assets**: Place screenshots/diagrams in `/docs/assets/` and reference in project data
4. **Follow content rules**: Never invent or improve facts; use only verified information

## Development

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm dev

# Open [http://localhost:3000](http://localhost:3000) to view the site
```

### Available Scripts
- `npm dev` - Start development server
- `npm build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## CI/CD Pipeline

The site uses GitHub Actions for continuous integration and deployment:

### Pipeline Stages
1. **Linting** - ESLint code quality check
2. **Type Checking** - TypeScript compiler validation
3. **Building** - Next.js production build
4. **Testing** - (Planned) Jest/React Testing Library tests
5. **Deployment** - Vercel or Cloudflare Pages

### GitHub Actions Workflow
See `.github/workflows/deploy.yml` (to be created) for:
- Pull request validation
- Main branch deployment
- Environment preview deployments
- Dependency security scanning

### Quality Gates
- Lighthouse CI: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- No TypeScript errors
- No ESLint errors
- All links valid (link checker)

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Base URL for absolute links
- (Optional) Analytics: Plausible/Umami keys if enabled

## Architecture Decisions

### Why Next.js App Router?
- Server Components for efficient data fetching
- Simplified routing with file-based conventions
- Built-in optimization for images, fonts, scripts
- Stability and React 18 concurrency features

### Why Tailwind CSS?
- Utility-first approach speeds up development
- Excellent responsiveness and dark mode support
- Purges unused CSS for minimal payload
- Consistent design system enforcement

### Why Framer Motion?
- Production-ready animation library
- Excellent React 18 compatibility
- Built-in layout sharing and exit animations
- Respects `prefers-reduced-motion` media query

### Content Separation
- Separates content from presentation
- Enables easy localization in future
- Facilitates A/B testing of copy
- Allows non-developers to update content via JSON

## Accessibility Features

- Semantic HTML structure (header, nav, main, section, footer)
- Keyboard navigable with visible focus indicators
- Skip-to-content link
- Proper labeling for form elements
- Sufficient color contrast (WCAG AA minimum)
- Responsive design (360px to 1920px)
- Alt text for all meaningful images
- ARIA labels for interactive elements
- Language attribute on HTML element
- Viewport meta tag for mobile optimization

## Performance Optimizations

- Next.js automatic code splitting
- Optimized image handling (next/image planned)
- CSS purging via Tailwind
- Font loading optimization (`font-display: swap`)
- Third-party script minimization
- Efficient data fetching (JSON import at build time)
- Minimal client-side JavaScript
- Static export capability

## Testing Strategy

### Unit Testing
- Jest with React Testing Library
- Test individual components in isolation
- Mock data fetching and external dependencies

### Integration Testing
- Test section composition and data flow
- Verify navigation and routing
- Test form submissions and interactions

### End-to-End Testing
- (Planned) Cypress or Playwright
- Test critical user journeys
- Validate SEO and accessibility
- Performance benchmarking

## Future Enhancements

1. **Blog Integration**: Full Medium API integration or custom MDX blog
2. **Dark Mode Toggle**: Manual override with persistence
3. **Animation Controls**: Granular motion preference settings
4. **Internationalization**: i18n support for Sinhala/Tamil versions
5. **Analytics**: Privacy-friendly analytics (Plausible/Umami)
6. **Contact Form**: Backend-free form submission (Formspree/Web3Forms)
7. **Search**: Client-side search across projects and content
8. **Accessibility Testing**: Automated axe-core integration
9. **Performance Budgets**: Enforce Lighthouse scores in CI
10. **Preview Deployments**: Vercel preview branches for PRs

## License

This portfolio is open source and available under the [MIT License](LICENSE).

---

*Built with Next.js, deployed via GitHub Actions*   
*Last updated: $(date)*
