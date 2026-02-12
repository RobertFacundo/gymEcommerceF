import HeaderLogo from "./logo/HeaderLogo";
import HeaderCenterActions from "./centerActions/HeaderCenterActions";
import HeaderSystemActions from "./systemActions/HeaderSystemActions";

const MainHeader = () => {
    return (
        <div className="flex items-center px-6 shadow-md p-2 dark:bg-zinc-900 bg-white/80">
            <HeaderLogo />
            <div className="flex-1 flex justify-center">
                <HeaderCenterActions />
            </div>
            <HeaderSystemActions />
        </div>
    )
};

export default MainHeader;