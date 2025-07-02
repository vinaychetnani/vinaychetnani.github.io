import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/70">
            © 2024 Vinay Chetnani. Designed with passion for innovation in machine learning.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://www.linkedin.com/in/vinay-chetnani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/vinaychetnani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:vinaywiki@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
