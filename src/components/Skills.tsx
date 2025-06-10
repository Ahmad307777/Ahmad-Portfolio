
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Globe, BarChart3, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "HTML", level: 80 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 88 },
        { name: "C", level: 70 },
        { name: "Assembly", level: 60 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "React", level: 85 },
        { name: "CSS3", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "Node.js", level: 20 },
        { name: "Flask", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: [
        { name: "SQL", level: 85 },
        { name: "GUI Design", level: 80 },
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      icon: BarChart3,
      title: "Data & Visualization",
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "Tkinter", level: 70 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Other Tools",
      skills: [
        { name: "Azure", level: 65 },
        { name: "MS Office", level: 90 },
        { name: "Cisco Packet Tracer", level: 75 },
        { name: "ScPy", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-300 text-blue-600">Skills & Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Proficiency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-800">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2" 
                      style={{
                        background: 'linear-gradient(to right, #e0e7ff, #f3e8ff)',
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
