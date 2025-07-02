import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Meta",
      role: "Senior Machine Learning Engineer - Core Ads Growth",
      period: "April 2024 - Present",
      duration: "1+ years",
      location: "London Area, United Kingdom",
      logo: "M",
      logoColor: "bg-secondary",
      achievements: [
        "Optimized billion-user-scale Ads ranking models with novel features capturing User/Advertiser purchase-value affinity",
        "Built scalable feature engineering tools, reducing iteration cycles by 30% and enhancing team productivity",
        "Drove feature engineering initiatives across Retrieval, Pre-Ranking, and Ranking stages for precise ad targeting"
      ]
    },
    {
      company: "VMock",
      role: "Senior Machine Learning Engineer",
      period: "July 2018 - March 2024",
      duration: "5 years 9 months",
      location: "Gurugram, Haryana, India",
      logo: "V",
      logoColor: "bg-primary",
      achievements: [
        "Led cross-functional teams to develop advanced ML models for competency identification and ranking",
        "Designed scalable ML delivery system using Docker/Kubernetes on AWS Cloud infrastructure",
        "Built skills recommendation engine achieving 92% recall and 87% nDCG@10 performance"
      ]
    }
  ];

  return (
    <section className="py-20 warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="text-secondary font-semibold">{experience.period}</div>
                  <div className="text-muted-foreground text-sm">{experience.duration}</div>
                </div>
                <div className="md:w-3/4">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${experience.logoColor} rounded-lg flex items-center justify-center text-white text-xl font-bold mr-4`}>
                          {experience.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{experience.role}</h3>
                          <p className="text-muted-foreground">{experience.company} - {experience.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className={`${experience.logoColor === 'bg-secondary' ? 'text-secondary' : 'text-primary'} mr-3 mt-1 flex-shrink-0`} size={16} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
