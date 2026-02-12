import TopBar from "./top/TopBar";
import MainHeader from "./main/MainHeader";
import SubHeader from "./subheader/SubHeader";

const Header = () => {
    return (
        <header className="w-full">
            <TopBar />
            <MainHeader />
            <SubHeader />
        </header>
    )
};

export default Header;