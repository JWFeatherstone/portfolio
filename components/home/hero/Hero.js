import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hi, I&apos;m John.
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            <span>Front-End Software Engineer</span> and Project Manager.
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            If you&apos;re looking for a developer who can take your project from concept to completion, I&apos;d love to hear from you.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
    </section>
  );
};
