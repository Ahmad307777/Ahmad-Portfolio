
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "NAMAL University",
      period: "2020 - 2026",
      description: "Comprehensive study in computer science fundamentals, software engineering, data structures, algorithms, and modern programming paradigms.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Web Development",
        "Computer Networks",
        "Data Analysis and Visualization"
      ]
    }
  ];

  const achievements = [
    {
      title: "Software Development Projects",
      description: "Completed key projects involving software development, networking, and cybersecurity",
      icon: BookOpen
    },
    {
      title: "Compiler Development",
      description: "Developed an end-to-end working compiler for a simple calculator language",
      icon: Award
    },
    {
      title: "Data & Cloud Projects",
      description: "Delivered milestone-based reporting for analysis projects such as Data Visualization and Cloud Simulations",
      icon: Award
    },
    {
      title: "Team Leadership",
      description: "Contributed to team-based academic projects and showcased leadership in guiding project direction",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-pink-300 text-pink-600">Education</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Academic Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational journey that provided the theoretical foundation for my practical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Education Card */}
          <div className="lg:col-span-2">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-fit border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors mb-2 text-gray-800">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-gray-600 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Key Coursework:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Academic Highlights</h3>
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-gray-800">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
