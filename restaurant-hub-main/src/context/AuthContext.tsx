import { createContext, useContext, ReactNode } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

// Keep the same User interface to avoid breaking other components
export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // We don't need to manage state here anymore, Clerk handles it.
  // This provider is kept to wrap children if we needed global state,
  // but mostly we keep it for backward compatibility if we wanted to
  // inject something else.
  return <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const { user: clerkUser, isSignedIn } = useUser();
  const { signOut, openSignIn, openSignUp } = useClerk();

  // Map Clerk user to our app's User interface
  const user: User | null = clerkUser
    ? {
      _id: clerkUser.id,
      name: clerkUser.fullName || clerkUser.firstName || "User",
      email: clerkUser.primaryEmailAddress?.emailAddress || "",
      // Simple admin check: You can configure this in Clerk Dashboard > Users > Metadata
      // or just hardcode your admin email here.
      role: (clerkUser.publicMetadata?.role as "admin" | "user") ||
        (clerkUser.primaryEmailAddress?.emailAddress?.trim().toLowerCase() === "adminresto@gmail.com" ? "admin" : "user"),
      createdAt: clerkUser.createdAt?.toString() || new Date().toISOString(),
    }
    : null;

  const isAdmin = user?.role === "admin";

  if (user) {
    console.log("[AuthDebug] User:", user.email, "Role:", user.role, "IsAdmin:", isAdmin);
    console.log("[AuthDebug] Clerk Email:", clerkUser?.primaryEmailAddress?.emailAddress);
  }

  // Compatibility functions
  const login = async () => {
    openSignIn();
    return true;
  };

  const register = async () => {
    openSignUp();
    return true;
  };

  const logout = () => {
    signOut();
  };

  return {
    user,
    isAuthenticated: !!isSignedIn,
    isAdmin,
    login,
    register,
    logout,
  };
}