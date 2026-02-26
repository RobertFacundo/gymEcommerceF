import { Outlet } from "react-router-dom";

const MembershipLayout = () => {
  return (
    <div className="membership-layout">
      <Outlet /> {/* aquí se renderiza MembershipHome, Success, Cancel */}
    </div>
  );
};

export default MembershipLayout;