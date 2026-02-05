import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="section-padding min-h-[80vh] flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-[400px] flex justify-end">
        <Link to="/admin/login">
          <Button variant="outline" className="gap-2">
            Admin Login
          </Button>
        </Link>
      </div>
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;