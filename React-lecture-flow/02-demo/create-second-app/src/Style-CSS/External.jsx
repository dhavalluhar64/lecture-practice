// (1) CSS Module

//--> Localized class names to avoid global conflicts.

//--> Styles are scoped to individual components

//---> Helps in creating components-specifics styles.

//--> Automatically generates unique class names.

//--> Promotes moduler and maintainable CSS.

//--> Can use alongside global CSS whene needed

import React from "react";
import styles from "./External.module.css";

const External = () => {
  return (
    <>
      <p className={styles["paragraphp"]}>This is the External css</p>
    </>
  );
};

export default External;
