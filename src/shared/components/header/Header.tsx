import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

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