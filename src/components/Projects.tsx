import { motion } from "framer-motion";
import { Section, SectionHeader } from "./ui/section";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { urlFor } from "../lib/sanityClient";

export function Projects() {
  const { portfolio } = usePortfolio();
  // Provide empty array as fallback if portfolio or projects is undefined
  const featuredProjects = portfolio?.projects?.filter((p) => p.featured) || [];
  const otherProjects = portfolio?.projects || [];

  return (
    <Section
      id="projects"
      className="bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my best work and technical expertise"
        />

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects?.slice(0, 2)?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.languages.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects?.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="glass overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      // src={project.image}
                      src={urlFor(project.image).url()}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.languages.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag.name}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag.name}
                        </Badge>
                      ))}
                      {project.languages.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.languages.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                        asChild
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
