import React from "react";
import Button from "./button";
import styles from "./menu-button.module.css";
import cn from "classnames";
function MenuButton({ href, notify, children, selected, className, ...props }) {
  return (
    <Button
      type="button"
      className={cn(
        styles.menuButton,
        selected && styles.navButtonSelected,
        className
      )}
      href={href}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default MenuButton;
