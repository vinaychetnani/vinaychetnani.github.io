import { ExternalLink, TrendingUp, Target, Rocket, Database, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Billion-Scale Ads Ranking Optimization",
      company: "Meta",
      description: "Designed and implemented novel features capturing User/Advertiser purchase-value affinity for billion-user-scale ads ranking models. Improved RMSE by 0.5% and boosted advertiser ROAS through enhanced targeting precision.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      achievements: [
        { icon: TrendingUp, text: "0.5% RMSE improvement on billion-user scale" },
        { icon: Target, text: "2% boost in model calibration accuracy" },
        { icon: Rocket, text: "30% reduction in iteration cycles" }
      ],
      technologies: ["Feature Engineering", "Ads Ranking", "ROAS Optimization", "Billion-Scale ML"],
      color: "accent"
    },
    {
      title: "Skills Recommendation Engine",
      company: "VMock",
      description: "Built a sophisticated recommendation system using Sentence-BERT, Matrix Factorization, and Graph Neural Networks to suggest relevant skills from 40K+ options. Achieved 92% recall and 87% nDCG@10.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      achievements: [
        { icon: Target, text: "92% recall in top-300 skills retrieval" },
        { icon: Star, text: "87% nDCG@10 ranking performance" },
        { icon: Database, text: "40K+ skills knowledge base" }
      ],
      technologies: ["Sentence-BERT", "Graph Neural Networks", "Matrix Factorization", "LGBMRanker"],
      color: "secondary"
    }
  ];

  const additionalProjects = [
    {
      title: "Resume Bullet Generation with LLMs",
      description: "Fine-tuned Microsoft's Phi-2 (2.7B) using LoRA adapters with Mixed Precision and DeepSpeed optimization for generating resume bullets.",
      technologies: ["Phi-2", "LoRA", "DeepSpeed"],
      color: "accent"
    },
    {
      title: "Multi-Label Skills Detection",
      description: "Developed Deep Siamese BERT with Contrastive Loss for multi-label classification of 40K+ skills, achieving 80% recall rate.",
      technologies: ["BERT", "Siamese Networks", "Multi-label"],
      color: "primary"
    },
    {
      title: "Open Source Contributions",
      description: "Q-Learning for Bridge Bidding, Particle Swarm Optimization, and various deep learning projects on GitHub.",
      technologies: ["Q-Learning", "PSO", "Deep Learning"],
      color: "secondary",
      link: "https://github.com/vinaychetnani"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background dreamy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <img 
                  src={project.image}
                  alt={`${project.title} visualization`}
                  className="w-full h-48 object-cover"
                />
                
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <Badge variant={project.color === 'accent' ? 'destructive' : 'secondary'}>
                      {project.company}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center">
                        <achievement.icon className="text-secondary mr-3" size={16} />
                        <span className="text-sm">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Projects Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className={`text-3xl mb-4 ${
                    project.color === 'accent' ? 'text-accent' : 
                    project.color === 'secondary' ? 'text-secondary' : 'text-primary'
                  }`}>
                    {project.color === 'accent' && <Brain size={48} />}
                    {project.color === 'primary' && <Target size={48} />}
                    {project.color === 'secondary' && <ExternalLink size={48} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link ? (
                    <Button asChild className="w-full" variant="secondary">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full" size="sm">
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Brain({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 3C7.01 3 5 5.01 5 7.5C5 9.99 7.01 12 9.5 12H14.5C16.99 12 19 9.99 19 7.5C19 5.01 16.99 3 14.5 3H9.5Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M9.5 12C7.01 12 5 14.01 5 16.5C5 18.99 7.01 21 9.5 21H14.5C16.99 21 19 18.99 19 16.5C19 14.01 16.99 12 14.5 12H9.5Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
