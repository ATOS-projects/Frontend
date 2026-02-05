import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminRegister = () => {
    return (
        <div className="section-padding min-h-[80vh] flex flex-col items-center justify-center gap-8">
            <div className="w-full max-w-[400px] flex justify-end">
                <Link to="/register">
                    <Button variant="ghost" className="gap-2">
                        User Registration
                    </Button>
                </Link>
            </div>
            <div className="text-center mb-4">
                <h1 className="font-display text-2xl font-semibold mb-2">Admin Registration</h1>
                <p className="text-muted-foreground">Create a new admin account</p>
            </div>
            <SignUp afterSignUpUrl="/admin/dashboard" />
        </div>
    );
};

export default AdminRegister;
