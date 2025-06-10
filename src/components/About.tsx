
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart3, Cloud, Monitor } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Transforming data into meaningful insights"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Leveraging cloud technologies for scalable solutions"
    },
    {
      icon: Monitor,
      title: "Web Technologies",
      description: "Modern web development with latest frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-300 text-purple-600">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Crafting Digital Experiences with Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a dedicated Frontend Developer, I bring creativity and technical expertise to build 
            beautiful, functional web applications. My passion lies in data visualization, 
            cloud technologies, and creating user experiences that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
