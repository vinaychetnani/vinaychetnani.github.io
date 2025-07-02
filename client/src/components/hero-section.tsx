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
        <div className="mb-8">
          <img 
            src={profileImage} 
            alt="Vinay Chetnani professional headshot" 
            className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white/20 object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-accent">Vinay</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          Senior Machine Learning Engineer
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          7+ years building scalable ML solutions at <strong>Meta London</strong>. 
          Specializing in NLP, Ads Ranking, and Generative AI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg h-auto"
          >
            View My Work
          </Button>
          <Button 
            onClick={downloadResume}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg h-auto"
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
            className="text-white hover:text-accent text-2xl transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://github.com/vinaychetnani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-accent text-2xl transition-colors"
          >
            <Github size={32} />
          </a>
          <a 
            href="mailto:vinaywiki@gmail.com"
            className="text-white hover:text-accent text-2xl transition-colors"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
