
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Create a simple CV content
    const cvContent = `
AHMED MUSTAFA
Frontend Developer

Email: a4895988@gmail.com
Phone: 03327066437
Status: Available for Work

EDUCATION
Bachelor of Computer Science
NAMAL University (2020-2026)

SKILLS
Frontend Development: React, JavaScript, TypeScript, HTML (80%), CSS
Programming: C (70%), Assembly (60%), Node.js (20%)
Data Analysis & Visualization
Cloud Computing (Azure)
Databases: SQL, GUI
Tools: MS Office, Cisco Packet Tracer

ACADEMIC HIGHLIGHTS
• Completed key projects involving software development, networking, and cybersecurity
• Developed an end-to-end working compiler for a simple calculator language
• Delivered milestone-based reporting for analysis projects such as Data Visualization and Cloud Simulations
• Contributed to team-based academic projects and showcased leadership in guiding project direction
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Ahmed_Mustafa_CV.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              Frontend Developer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Ahmed Mustafa
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Passionate Frontend Developer specializing in creating beautiful, responsive web applications 
              with expertise in data analysis, visualization, and cloud computing technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="group hover:scale-105 transition-transform bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get In Touch
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadCV}
              className="group hover:scale-105 transition-transform border-purple-300 text-purple-600 hover:bg-purple-50"
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform text-purple-600 hover:bg-purple-100">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform text-blue-600 hover:bg-blue-100">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform text-cyan-600 hover:bg-cyan-100">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-cyan-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <img
                src="/lovable-uploads/47e37c26-75d8-46ff-a8cd-dfcfa9ea4f8b.png"
                alt="Ahmed Mustafa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
