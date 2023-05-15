import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../features/user/UserSlice";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { isSideBarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => dispatch(toggleSideBar());
  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSideBarHandler}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={toggleSideBarHandler} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
