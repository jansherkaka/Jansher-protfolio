import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "MekkoDigital",
    date: "2024 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Shopify Theme Developer",
    company: "MekkoDigital",
    date: "2024 - Present",
    responsibilities: [
      "Developed custom Shopify themes from scratch.",
      "Customized Shopify stores using Liquid and JSON",
      "Worked on performance optimization ",
      "Integrated Shopify apps .",
    ],
  },
  {
    job: "Shopify Hydrogen Developer",
    company: "MekkoDigital",
    date: "2024 - Present",
    responsibilities: [
      "Built headless Shopify storefronts using Hydrogen and React.",
      "Implemented GraphQL Storefront API to fetch real-time Shopify data",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
