import { Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/generation-1bb3bbb7-e4db-406b-abcc-733346d08097_1751497638165.png";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Vinay_Chetnani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center text-white relative overflow-hidden">
      {/* Dreamy background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-accent/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-accent/30 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8 relative">
          <div className="magic-border w-52 h-52 rounded-full mx-auto p-2">
            <img 
              src={profileImage} 
              alt="Vinay Chetnani professional headshot" 
              className="w-full h-full rounded-full object-cover pulse-glow"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-secondary rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="text-shimmer">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-accent bg-white/15 px-4 py-2 rounded-2xl inline-block transform hover:scale-105 transition-transform duration-300">Vinay</span>
          </h1>
        </div>
        <h2 className="decorative-text text-2xl md:text-3xl font-medium mb-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full px-8 py-3 inline-block border border-white/20 hover:border-white/40 transition-all duration-300">
          ✨ Senior Machine Learning Engineer ✨
        </h2>
        <div className="space-y-4 mb-8 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed font-medium">
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent font-bold">7+ years</span> building scalable ML solutions at <strong className="text-accent">Meta London</strong>
          </p>
          <p className="text-lg md:text-xl opacity-90 font-light">
            Specializing in <span className="text-accent font-semibold">NLP</span>, <span className="text-secondary font-semibold">Ads Ranking</span>, and <span className="text-white font-semibold">Generative AI</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-semibold text-lg h-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🚀</span>
            View My Work
          </Button>
          <Button 
            onClick={downloadResume}
            variant="outline"
            className="border-2 border-white/80 text-white bg-white/15 hover:bg-white hover:text-primary px-10 py-5 rounded-2xl font-semibold text-lg h-auto backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-16">
          <a 
            href="https://www.linkedin.com/in/vinay-chetnani/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com/vinaychetnani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <Github size={28} />
          </a>
          <a 
            href="mailto:vinaywiki@gmail.com"
            className="group flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <Mail size={28} />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm font-light mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
