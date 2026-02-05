import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY.includes("PLEASE_REPLACE")) {
    const errorMessage = "Missing Clerk Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file.";
    document.body.innerHTML = `<div style="display:flex;height:100vh;align-items:center;justify-content:center;color:red;font-family:sans-serif;text-align:center;padding:20px;">
    <div>
        <h1>Configuration Error</h1>
        <p>${errorMessage}</p>
        <p>Edit the file <code>.env</code> in your project folder.</p>
    </div>
  </div>`;
    throw new Error(errorMessage);
}

createRoot(document.getElementById("root")!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
    </ClerkProvider>
);
