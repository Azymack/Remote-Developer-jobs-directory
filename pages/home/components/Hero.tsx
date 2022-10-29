import { FiGithub } from "react-icons/fi";

import styles from "./Hero.module.scss";

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>Remote</h1>
      <h1 className={styles.title}>Developer</h1>
      <h1 className={styles.title}>Jobs directory.</h1>
    </div>
    <div className={styles.rightContainer}>
      <a
        href="https://github.com/ugglr/Remote-Junior-Developer-jobs-directory"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub className={styles.ghIcon} />
      </a>
    </div>
  </div>
);

export default Hero;