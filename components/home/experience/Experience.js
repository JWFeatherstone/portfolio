import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Turing School of Software and Design",
    position: "Frontend Software Engineer",
    time: "2023",
    location: "Denver, CO",
    description:
      "Built over 10+ frontend and fullstack projects alongside multidisciplinary teams of developers using a test-driven development framework.",
    tech: [
      "JavaScript",
      "React",
      "Redux",
      "Cypress",
      "Mocha/Chai",
      "GraphQL",
      "Node"
    ],
  },
  {
    title: "Colorado Department of Transportation",
    position: "Project Manager, Innovative Mobility",
    time: "2019 - 2023",
    location: "Denver, CO",
    description:
      "Managed, created, and implemented projects and programs spanning everything from the $30m COVID-relief Revitalizing Main Streets program to the rapid acceleration of Colorado's electric vehicle infrastructure investment.",
    tech: ["ArcGIS", "INRIX", "Adobe Illustrator", "Adobe InDesign", "Jira"],
  },
  {
    title: "Freelance",
    position: "Planning Consultant",
    time: "2018 - 2019",
    location: "Denver, CO",
    description:
      "Developed an affordable housing plan for Lake County, CO, planned and facilitated public outreach processes, and provided geospatial analysis services to a range of local governments.",
    tech: [
      "ArcGIS"
    ],
  },
];
