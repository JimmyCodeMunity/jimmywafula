import { motion } from "framer-motion";
import { Section, SectionHeader } from "./ui/section";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { Link } from "react-router-dom";

interface ExperienceItem {
  _id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  companywebsite: string;
  technologies: Array<{
    _id: string;
    name: string;
    percentage?: number;
    category?: { _id: string; name: string };
  }>;
  __v?: number;
}

export function Experience() {
  const { portfolio } = usePortfolio();
  return (
    <Section
      id="experience"
      className="bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey through different roles and companies"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12 overflow-hidden">
            {/* sort from latest to oldest */}
            {portfolio?.experiences
              ?.sort(
                (a, b) =>
                  new Date(b.startDate).getTime() -
                  new Date(a.startDate).getTime()
              )
              ?.map((experience: ExperienceItem, index: number) => (
                <motion.div
                  key={experience._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full transform md:-translate-x-1/2 mt-4 sm:mt-6 z-10 shadow-lg">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pl-12 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full"
                    >
                      {/* Header */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-3 sm:gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 break-words">
                              {experience.role}
                            </h3>
                            <div className="flex group items-center gap-2 text-sm sm:text-base text-muted-foreground mb-2">
                              <Building className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 group-hover:text-green-600" />
                              <Link
                                to={experience.companywebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium cursor-pointer group-hover:text-green-600 break-words"
                              >
                                {experience.company}
                              </Link>
                            </div>
                          </div>
                          <Badge variant="secondary" className="shrink-0 text-xs sm:text-sm w-full sm:w-auto justify-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {experience.startDate} -{" "}
                            {experience.endDate || "Current"}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                          <span className="break-words">{experience.location}</span>
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-foreground">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {experience.achievements.map(
                            (achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.2 + achIndex * 0.1,
                                }}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 shrink-0" />
                                <span className="break-words">{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-foreground">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {experience.technologies.map((tech) => (
                            <motion.div
                              key={tech._id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.2,
                              }}
                            >
                              <Badge variant="outline" className="text-xs">
                                {tech.name}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
