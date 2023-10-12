import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m John, a software engineer based in Denver, Colorado who 
              specializes in frontend development using the React framework. 
              A former transportation planner for the State of Colorado's electrification, 
              climate change, and innovative mobility programs, my career has been driven by a 
              commitment to tackling the urgent challenges facing our communities and the environment. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Having graduated from the Turing School of Software and Design,
              I currently work as a freelance web developer and as a consultant on electrification and sustainability.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love writing (I'm currently working on a fantasy novel for a rapidly-aging niece), baking, growing things, looking at birds, and just about anything that gets me outdoors.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you need a website designed and built for your small business - or if you're looking for a driven, relentlessly curious, and people-oriented junior developer to join your team - please don't hesitate to reach out. I'd love to hear from you.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
