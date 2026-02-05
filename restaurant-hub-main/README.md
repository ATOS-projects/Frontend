# Restro Hub

A modern frontend application built with React, Vite, and Tailwind CSS.

## Features

- **Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)
- **Routing**: [React Router](https://reactrouter.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the repository

```bash
git clone <repository-url>
cd restaurant-hub-main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or the port shown in your terminal).

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally preview the production build.
- `npm test`: Runs tests using Vitest.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`VITE_CLERK_PUBLISHABLE_KEY`

1. Create a file named `.env` in the root directory.
2. Add your Clerk Publishable Key:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

## Project Structure

- `src/`: Source code including components, pages, and styles.
- `public/`: Static assets.
- `vite.config.ts`: Vite configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.

