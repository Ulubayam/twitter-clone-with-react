import React from "react";
import MenuButton from "./menu-button";
import TitleBold from "./title-bold";
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
} from "./icons";
import styles from "./navigation.module.css";

const MENU = [
  {
    key: "twitter",
    icon: <Twitter />,
  },
  {
    key: "home",
    icon: <Home />,
    title: "Home",
    notify: 0,
  },
  {
    key: "explore",
    icon: <Explore />,
    title: "Explore",
    notify: 0,
  },
  {
    key: "notification",
    icon: <Notification />,
    title: "Notification",
    notify: 17,
  },
  {
    key: "notification",
    icon: <Notification />,
    title: "Notification",
    notify: 0,
  },
  {
    key: "messages",
    icon: <Messages />,
    title: "Messages",
    notify: 0,
  },
  {
    key: "bookmark",
    icon: <Bookmark />,
    title: "Bookmark",
    notify: 0,
  },
  {
    key: "lists",
    icon: <Lists />,
    title: "Lists",
    notify: 0,
  },
  {
    key: "profile",
    icon: <Profile />,
    title: "Profile",
    notify: 0,
  },
  {
    key: "more",
    icon: <More />,
    title: "More",
    notify: 0,
  },
];

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title;
        return (
          <MenuButton
            key={menu.key}
            notify={menu.notify}
            selected={selectedKey === menu.key}
          >
            {menu.icon}
            {showTitle && <TitleBold> {menu.title} </TitleBold>}
          </MenuButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
