import { SignIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";

const AdminLogin = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !isAdmin) {
      toast.error("You do not have admin privileges.");
    }
  }, [isAuthenticated, isAdmin]);

  if (isAuthenticated && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted p-4">
      <div className="mb-8 text-center">
        <h1 className="font-display text-2xl font-semibold mb-2">Restro Hub Admin</h1>
        <p className="text-muted-foreground">Please sign in to continue</p>
      </div>
      <SignIn afterSignInUrl="/admin/dashboard" />
      <div className="mt-4 text-center">
        <a href="/login" className="text-sm text-muted-foreground hover:text-primary">
          Result to User Login
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;