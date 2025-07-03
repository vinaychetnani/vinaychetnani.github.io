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
        
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="drop-shadow-lg">Hi, I'm </span><span className="text-accent bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Vinay</span>
        </h1>
        <h2 className="decorative-text text-2xl md:text-3xl font-light mb-8 bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-white/30">
          Senior Machine Learning Engineer
        </h2>
        <div className="space-y-4 mb-10 max-w-3xl mx-auto">
          <div className="backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 bg-[transparent]">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-white">
              <span className="font-semibold text-accent">7+ years</span> building scalable ML solutions at <strong className="text-white">Meta London</strong>
            </p>
          </div>
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/15">
            <p className="text-lg md:text-xl font-light text-white/95">
              Specializing in NLP, Ads Ranking, and Generative AI
            </p>
          </div>
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
            className="flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/vinaychetnani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:vinaywiki@gmail.com"
            className="flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl backdrop-blur-sm text-white hover:text-accent transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
