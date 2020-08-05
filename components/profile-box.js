import React from "react";
import Photo from "./photo";
import cn from "classnames";

import styles from "./profile-box.module.css";
import Button from "./button";
import { ArrowBottom } from "./icons";
import TextBody from "./text-body";

function ProfileBox({
  flat = false,
  name = "Gizem Ulubayam",
  slug = "gizulubym",
}) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  );
}

export default ProfileBox;
