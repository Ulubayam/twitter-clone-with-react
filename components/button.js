import React from "react";

import Link from "next/link";
import styles from "./button.module.css";
import cn from "classnames";
function LinkButton({ href, full = false, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <Comp
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;
