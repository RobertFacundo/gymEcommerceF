import { Link } from "react-router-dom";
import { UserRound, ShoppingCart } from "lucide-react";

const HeaderCenterActions = () => (
  <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-600  ml-8">
    <Link to="/profile" className="hover:text-zinc-900 dark:hover:text-white cursor-pointer">
      <UserRound size={40}/>
    </Link>
    <button className="hover:text-zinc-900 dark:hover:text-white cursor-pointer">
      <ShoppingCart size={40}/>
    </button>
  </div>
);

export default HeaderCenterActions;