import React from "react";
import cn from "classnames";
import styles from "./photo.module.css";

function Photo({
  src = "https://yt3.ggpht.com/a-/AOh14GgZ86AHSWoMOSV99mmESSc4lW6YCkQUkkZp7cjpJQ=s88-c-k-c0xffffffff-no-rj-mo",
  alt,
  size = 47,
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={cn([styles.img])} src={src} alt={alt} />
    </div>
  );
}

export default Photo;
