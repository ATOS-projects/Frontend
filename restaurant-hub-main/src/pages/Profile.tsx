import { UserProfile } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="section-padding flex items-center justify-center p-8">
      <UserProfile />
    </div>
  );
};

export default Profile;