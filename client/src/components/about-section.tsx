import { Brain, MessageSquare, TrendingUp, Cloud, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const skills = [
    "Python", "PyTorch", "TensorFlow", "Transformers", "HuggingFace", "Docker",
    "Kubernetes", "AWS", "Scikit-Learn", "BERT", "LLMs", "MLOps"
  ];

  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep Learning, Classical ML, Feature Engineering, Model Optimization",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "NLP & Generative AI",
      description: "Transformers, LLMs, BERT, Text Generation, Fine-tuning",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Ads & Recommendations",
      description: "Ranking Systems, Recommendation Engines, Billion-scale Optimization",
      color: "text-accent"
    },
    {
      icon: Cloud,
      title: "MLOps & Infrastructure",
      description: "Docker, Kubernetes, AWS, SageMaker, Production Deployment",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="decorative-text text-4xl md:text-5xl font-bold text-center mb-16 text-primary">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern machine learning workspace with multiple monitors showing data visualizations" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a <strong className="text-primary">Senior Machine Learning Engineer</strong> with 7+ years of experience designing and deploying scalable ML solutions for production at <strong className="text-secondary">Meta London</strong>.
              </p>
              
              <p className="text-lg leading-relaxed">
                My expertise spans the full machine learning lifecycle—from ideation and feature engineering to modeling, evaluation, and seamless deployment. I specialize in <strong className="text-accent">NLP, Generative AI, recommender systems, and ads ranking</strong>.
              </p>
              
              <p className="text-lg leading-relaxed">
                At Meta, I've optimized billion-user-scale ads ranking models, boosting advertiser ROAS through innovative feature engineering. Previously at VMock, I led cross-functional teams to build advanced ML models for competency identification and resume optimization.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center">
                  <GraduationCap className="text-primary mr-2" size={20} />
                  <span className="font-semibold">IIT Delhi '18</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-2" size={20} />
                  <span className="font-semibold">London, UK</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className={`${category.color} text-3xl mb-4`}>
                    <category.icon size={48} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="decorative-text text-2xl font-semibold text-center mb-8 text-primary">Technical Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => {
                const colors = [
                  'bg-primary', 
                  'bg-secondary', 
                  'bg-accent',
                  'bg-slate-600',
                  'bg-blue-600'
                ];
                const colorClass = colors[index % colors.length];
                return (
                  <span 
                    key={skill}
                    className={`${colorClass} text-white px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-200 hover:scale-105 shadow-md`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
