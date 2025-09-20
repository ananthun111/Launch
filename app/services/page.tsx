import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Bot, Cloud, Code, Database, Globe, Rocket, Users } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Business Digital Transformation",
      description: "Complete modernization of your business processes, systems, and culture for the digital age.",
      features: [
        "Legacy system modernization",
        "Process automation and optimization",
        "Digital strategy development",
        "Change management consulting",
        "ROI measurement and tracking",
      ],
      color: "primary",
    },
    {
      icon: Code,
      title: "SaaS Product Development",
      description: "Custom software-as-a-service solutions built to scale with your business needs.",
      features: [
        "Full-stack web applications",
        "Mobile-responsive design",
        "Multi-tenant architecture",
        "API development and integration",
        "Subscription management systems",
      ],
      color: "secondary",
    },
    {
      icon: Bot,
      title: "AI-Powered Solutions",
      description: "Intelligent automation and AI integration to enhance decision-making and efficiency.",
      features: [
        "Chatbots and virtual assistants",
        "Predictive analytics platforms",
        "Machine learning models",
        "Natural language processing",
        "Computer vision applications",
      ],
      color: "primary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and streamlined development operations.",
      features: [
        "Cloud migration strategies",
        "Container orchestration",
        "CI/CD pipeline setup",
        "Infrastructure as code",
        "Monitoring and alerting systems",
      ],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Microservices & API Development",
      description: "Modern, scalable architecture with robust API ecosystems for seamless integrations.",
      features: [
        "Microservices architecture design",
        "RESTful and GraphQL APIs",
        "Service mesh implementation",
        "API gateway configuration",
        "Third-party integrations",
      ],
      color: "primary",
    },
    {
      icon: Users,
      title: "Consulting & Training",
      description: "Expert guidance and team training to ensure successful technology adoption.",
      features: [
        "Technology assessment and planning",
        "Team training and workshops",
        "Best practices implementation",
        "Ongoing support and maintenance",
        "Performance optimization",
      ],
      color: "secondary",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Rocket className="mr-2 h-4 w-4" />
              Comprehensive Digital Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Expert Services
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              From digital transformation to AI integration, we provide end-to-end services that modernize your
              operations and accelerate growth in the digital economy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact#contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to transform traditional businesses into modern, AI-powered enterprises
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                        }`}
                      >
                        <IconComponent
                          className={`h-6 w-6 ${service.color === "primary" ? "text-primary" : "text-secondary"}`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div
                              className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                service.color === "primary" ? "bg-primary" : "bg-secondary"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="mt-6 w-full bg-transparent" asChild>
                      <Link href="/contact#contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful digital transformation and project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-foreground">Discovery & Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We analyze your current systems, processes, and goals to create a comprehensive transformation roadmap.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-semibold text-foreground">Strategy & Planning</h3>
              <p className="text-sm text-muted-foreground">
                Develop a detailed implementation strategy with clear milestones, timelines, and success metrics.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-foreground">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Execute the transformation plan with agile methodologies, ensuring minimal disruption to operations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">4</span>
              </div>
              <h3 className="font-semibold text-foreground">Optimization & Support</h3>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring, optimization, and ongoing support to ensure long-term success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Let's discuss how our services can help modernize your business and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
