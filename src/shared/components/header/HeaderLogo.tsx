import { Link } from "react-router-dom";

const HeaderLogo = () => (
  <Link to="/" className="flex items-center">
    <img
      src="/capacitacion.png"
      alt="MyGymShop logo"
      className="h-16 w-auto"
    />
  </Link>
);

export default HeaderLogo;