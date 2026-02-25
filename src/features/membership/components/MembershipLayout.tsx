import { Outlet } from "react-router-dom";

const MembershipLayout = () => {
  return (
    <div className="membership-layout">
      <h1>Membresía</h1>
      <Outlet /> {/* aquí se renderiza MembershipHome, Success, Cancel */}
    </div>
  );
};

export default MembershipLayout;