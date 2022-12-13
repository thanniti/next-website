import styles from "./index.module.scss";

export default function TestFigure({}) {
    return (
        <figure className="styles.figure">
        <div className={styles.frame}>
        <img  className={styles.image}
              src="/images/topics/topology.jpg"
              alt="imageCaption"
              loading="lazy"
        />
        </div>
        </figure>
    );
  }