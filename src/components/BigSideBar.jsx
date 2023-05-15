import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSideBar = () => {
  const { isSideBarOpen } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
