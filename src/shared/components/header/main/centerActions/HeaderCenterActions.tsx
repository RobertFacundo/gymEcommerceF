import { Link } from "react-router-dom";
import { UserRound, ShoppingCart } from "lucide-react";
import { useAppSelector } from "../../../../redux/hooks";

const HeaderCenterActions = () => {
  const cartCount = useAppSelector(state => state.cart.count);

  console.log(cartCount,'log del header')
  return (
    <div className="relative flex items-center gap-4 text-zinc-600 dark:text-zinc-600  ml-8">
      <Link to="/profile" className="hover:text-zinc-900 dark:hover:text-white cursor-pointer">
        <UserRound size={40} />
      </Link>
      <Link to={'/cart'} className="hover:text-zinc-900 dark:hover:text-white cursor-pointer">
        <ShoppingCart size={40} />
      </Link>

      {cartCount > 0 && (
        <span className="
            absolute -top-2 -right-2
            bg-green-500 text-white text-l
            w-6 h-6 flex items-center justify-center
            rounded-full font-bold
          ">
          {cartCount}
        </span>
      )}
    </div>
  )
};

export default HeaderCenterActions;