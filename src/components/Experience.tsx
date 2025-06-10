
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "June 2023 - August 2023",
      description: "Developed web applications using modern frameworks and contributed to database optimization projects.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Local",
      period: "January 2023 - May 2023",
      description: "Created responsive web interfaces and collaborated with design teams to implement user-friendly solutions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      title: "Computer Science Student",
      company: "University Projects",
      location: "Academic",
      period: "2020 - Present",
      description: "Engaged in various academic projects including software development, data structures, and algorithm design.",
      technologies: ["Python", "Java", "C++", "SQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional growth and the valuable experiences that shaped my career.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
