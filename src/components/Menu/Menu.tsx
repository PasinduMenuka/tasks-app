import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Utilities/BtnAddTask";
import Directories from "./Directories/Directories";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";

const classLinkActive =
  "text-[#184ECA]";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <header className="h-full flex flex-col">
         {/* <h1 className="font-roboto font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
          To-do list
        </h1>  */}
        <div className="flex justify-center items-center mt-3">
          <img src="/Logo.png" className="w-1/2"/>
        </div>
        <BtnAddTask className="my-8 mx-4 pl-2" />
        <NavLinks classActive={classLinkActive} />
        {/* <Directories classActive={classLinkActive} /> */}
      </header>
    </LayoutMenus>
  );
};

export default Menu;
