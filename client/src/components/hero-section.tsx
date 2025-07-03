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
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8 relative">
          <div className="w-48 h-48 rounded-full mx-auto p-1 bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-sm shadow-2xl border-2 border-white/20">
            <img 
              src={profileImage} 
              alt="Vinay Chetnani professional headshot" 
              className="w-full h-full rounded-full object-cover shadow-inner"
            />
          </div>
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
          Hi, I'm <span className="text-accent drop-shadow-lg">Vinay</span>
        </h1>
        <h2 className="decorative-text text-2xl md:text-3xl font-light mb-8 opacity-90 drop-shadow-md">
          Senior Machine Learning Engineer
        </h2>
        <div className="space-y-4 mb-10 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed font-light opacity-95 drop-shadow-md">
            <span className="font-semibold">7+ years</span> building scalable ML solutions at <strong>Meta London</strong>
          </p>
          <p className="text-lg md:text-xl opacity-80 font-light drop-shadow-sm">
            Specializing in NLP, Ads Ranking, and Generative AI
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium text-lg h-auto transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </Button>
          <Button 
            onClick={downloadResume}
            variant="outline"
            className="border-2 border-white/70 text-white bg-white/10 hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-medium text-lg h-auto backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a 
            href="https://www.linkedin.com/in/vinay-chetnani/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/vinaychetnani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:vinaywiki@gmail.com"
            className="flex items-center justify-center w-12 h-12 bg-white/15 hover:bg-white/25 rounded-xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
