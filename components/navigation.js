import React from "react";
import { useRouter } from "next/router";
import { MENU } from "../constants";
import styles from "./navigation.module.css";
import MenuButton from "./menu-button";
import TitleBold from "./title-bold";
function Navigation({ flat = false }) {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title;
        const selected = router.pathname === menu.path;
        return (
          <MenuButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TitleBold> {menu.title} </TitleBold>}
          </MenuButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
