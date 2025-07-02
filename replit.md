# Portfolio Website for Vinay Chetnani

## Overview

This is a professional portfolio website for Vinay Chetnani, a Senior Machine Learning Engineer at Meta London. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing ML engineering expertise and professional experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **File Serving**: Static file serving for production builds
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database interactions
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **In-Memory Storage**: Fallback MemStorage implementation for development

## Key Components

### Frontend Components
1. **Portfolio Sections**:
   - Hero section with professional introduction
   - About section showcasing skills and expertise
   - Projects section highlighting ML achievements
   - Experience section with detailed work history
   - Contact form for professional inquiries

2. **UI Components**: Comprehensive shadcn/ui component library including:
   - Form elements (Input, Textarea, Button)
   - Layout components (Card, Dialog, Sheet)
   - Navigation components (Menubar, Tabs)
   - Feedback components (Toast, Alert)

3. **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend Components
1. **API Endpoints**:
   - `/api/contact` - Contact form submission handler
   - `/api/download-resume` - Resume download endpoint

2. **Middleware**:
   - JSON parsing and URL encoding
   - Request logging with performance metrics
   - Error handling middleware

3. **Development Tools**:
   - Vite integration for HMR in development
   - Request/response logging for debugging

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express.js routes handle business logic
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: JSON responses with appropriate HTTP status codes
5. **State Management**: Client-side state updates via Query Client
6. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Core Framework Dependencies
- **React**: Frontend framework with hooks and context
- **Express**: Backend web application framework
- **Drizzle**: Type-safe ORM for PostgreSQL
- **TanStack Query**: Server state management
- **Tailwind CSS**: Utility-first CSS framework

### UI and Design Dependencies
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Class Variance Authority**: CSS-in-JS utility for component variants
- **Date-fns**: Date manipulation utilities

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production

### Database and Infrastructure
- **Neon**: Serverless PostgreSQL provider
- **Connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from Express in production

### Environment Configuration
- Development: `NODE_ENV=development` with Vite dev server
- Production: `NODE_ENV=production` with static file serving
- Database: `DATABASE_URL` environment variable for PostgreSQL connection

### Hosting Considerations
- **Frontend**: Static assets can be served via CDN
- **Backend**: Node.js server with Express
- **Database**: Serverless PostgreSQL via Neon
- **Development**: Replit-optimized with hot reloading

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Database schema synchronization

## Changelog
```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.