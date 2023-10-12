import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Experienced in</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Django</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Redux/Recoil</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">GitHub</span>
            <span className="chip">Cypress</span>
            <span className="chip">Firebase</span>
            <span className="chip">Adobe Illustrator</span>
            <span className="chip">ArcGIS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Currently learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Go</span>
            <span className="chip">MongoDB</span>
            <span className="chip">C# / .NET</span>
            <span className="chip">Kotlin</span>
            <span className="chip">Android Studio</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
