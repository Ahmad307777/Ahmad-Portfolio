
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "GUI based application using Tkinter and MySQL for hospital workflows with comprehensive patient management features.",
      technologies: ["Python", "Tkinter", "MySQL", "GUI"],
      category: "Desktop Application"
    },
    {
      title: "Agricultural Yield Prediction",
      description: "Predictive model using interpolation and curve fitting techniques in Python for accurate crop yield forecasting.",
      technologies: ["Python", "Data Analysis", "Machine Learning", "Interpolation"],
      category: "Data Science"
    },
    {
      title: "Car Repair Maintenance App",
      description: "Mobile app tracking car health, services, and usage logs with intuitive user interface and data management.",
      technologies: ["Mobile Development", "Database", "UI/UX"],
      category: "Mobile App"
    },
    {
      title: "Simple Calculator Compiler",
      description: "Complete GitHub implementation of a calculator compiler including lexical, syntax, and semantic analysis.",
      technologies: ["Compiler Design", "GitHub", "Parsing"],
      category: "System Programming"
    },
    {
      title: "Car Rental System Website",
      description: "Full-stack website for car rental service with OOP concepts using C++ for backend operations.",
      technologies: ["C++", "OOP", "Web Development", "Database"],
      category: "Web Application"
    },
    {
      title: "College Network Simulation",
      description: "Cisco Packet Tracer simulation of a hybrid network for a college environment with comprehensive networking.",
      technologies: ["Cisco Packet Tracer", "Networking", "Simulation"],
      category: "Network Design"
    },
    {
      title: "Portfolio Website",
      description: "Personal website showcasing skills, projects, and professional experiences with modern design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web Development"
    },
    {
      title: "Netflix Clone Websites",
      description: "Built multiple Netflix-inspired websites using HTML, CSS, and JavaScript with responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      category: "Frontend"
    },
    {
      title: "Flappy Bird Mobile Game",
      description: "Android mobile game built using HTML, CSS, JavaScript with engaging gameplay mechanics.",
      technologies: ["HTML", "CSS", "JavaScript", "Mobile Game"],
      category: "Game Development"
    },
    {
      title: "Brazilian E-commerce Analysis",
      description: "Data analysis project using Python libraries for Brazilian e-commerce data insights and visualization.",
      technologies: ["Python", "Data Analysis", "Visualization", "E-commerce"],
      category: "Data Analysis"
    },
    {
      title: "OS Scheduling Animation",
      description: "Operating system scheduling animation built for OS project demonstrating various scheduling algorithms.",
      technologies: ["Animation", "Operating Systems", "Algorithms"],
      category: "Educational"
    },
    {
      title: "Counting Sort Algorithm Animation",
      description: "Educational visualization of counting sort algorithm for algorithm study and demonstration.",
      technologies: ["Algorithm Visualization", "Educational", "Animation"],
      category: "Educational"
    },
    {
      title: "Podcast Creation using Azure",
      description: "Project involving podcast generation and hosting using Azure cloud services and automation.",
      technologies: ["Azure", "Cloud Computing", "Automation"],
      category: "Cloud Computing"
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Mobile App", "Cloud Computing", "Educational"];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-green-300 text-green-600">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating skills in web development, data analysis, 
            mobile applications, and cloud computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-gradient-to-r from-green-100 to-blue-100 text-green-700">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors text-gray-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-blue-200 text-blue-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="ghost" className="text-sm px-2 py-1 text-green-600 hover:bg-green-50">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="ghost" className="text-sm px-2 py-1 text-blue-600 hover:bg-blue-50">
                    <Github className="h-3.5 w-3.5 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
