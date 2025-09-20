import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Check, ChefHat, Dumbbell, Lock, Sparkles, Star, Users, Zap } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: Lock,
      title: "SecureAuth Pro",
      category: "Authentication Service",
      description: "Enterprise-grade authentication and user management system with advanced security features.",
      features: [
        "Multi-factor authentication (MFA)",
        "Single sign-on (SSO) integration",
        "Role-based access control",
        "OAuth 2.0 and OpenID Connect",
        "Advanced security analytics",
        "Compliance reporting (SOC 2, GDPR)",
      ],
      pricing: {
        free: "Up to 1,000 users",
        pro: "$49/month - Unlimited users",
      },
      color: "primary",
      popular: true,
    },
    {
      icon: ChefHat,
      title: "FlavorHub",
      category: "Recipe Management App",
      description: "AI-powered recipe discovery and meal planning platform for food enthusiasts and professionals.",
      features: [
        "AI recipe recommendations",
        "Nutritional analysis and tracking",
        "Meal planning and shopping lists",
        "Inventory management",
        "Social recipe sharing",
        "Professional chef tools",
      ],
      pricing: {
        free: "Basic recipe features",
        pro: "$19/month - Premium features",
      },
      color: "secondary",
      popular: false,
    },
    {
      icon: Dumbbell,
      title: "FitnessPro CRM",
      category: "Gym Management System",
      description: "Complete gym and fitness center management solution with member tracking and business analytics.",
      features: [
        "Member management and billing",
        "Class scheduling and booking",
        "Equipment maintenance tracking",
        "Performance analytics dashboard",
        "Mobile app for members",
        "Payment processing integration",
      ],
      pricing: {
        free: "Up to 50 members",
        pro: "$99/month - Unlimited members",
      },
      color: "primary",
      popular: false,
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      category: "Tailored SaaS Products",
      description: "Bespoke software solutions designed specifically for your industry and business requirements.",
      features: [
        "Industry-specific functionality",
        "Custom integrations and APIs",
        "Scalable cloud architecture",
        "Advanced analytics and reporting",
        "24/7 support and maintenance",
        "White-label options available",
      ],
      pricing: {
        free: "Free consultation",
        pro: "Starting at $299/month",
      },
      color: "secondary",
      popular: false,
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
              <Zap className="mr-2 h-4 w-4" />
              Ready-to-Deploy SaaS Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Powerful{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SaaS Products
              </span>{" "}
              for Modern Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our suite of production-ready SaaS products designed to streamline operations, enhance
              productivity, and drive growth across various industries.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact#contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact#contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Product Suite</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each product is built with scalability, security, and user experience in mind
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <Card
                  key={index}
                  className={`border-2 transition-all duration-300 hover:shadow-lg relative ${
                    product.popular ? "border-primary/50 shadow-md" : "hover:border-primary/30"
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-6">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="mr-1 h-3 w-3" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            product.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                          }`}
                        >
                          <IconComponent
                            className={`h-6 w-6 ${product.color === "primary" ? "text-primary" : "text-secondary"}`}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{product.title}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-4">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <Check
                              className={`w-4 h-4 mr-3 ${
                                product.color === "primary" ? "text-primary" : "text-secondary"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-foreground mb-3">Pricing:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Free Tier:</span>
                          <span className="text-sm font-medium">{product.pricing.free}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Pro Plan:</span>
                          <span className="text-sm font-medium text-primary">{product.pricing.pro}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1" asChild>
                        <Link href="/contact#contact">Get Started</Link>
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href="/contact#contact">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Products?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with enterprise-grade standards and designed for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for performance with sub-second response times and 99.9% uptime guarantee.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Lock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level security with encryption, compliance certifications, and regular security audits.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated support team available around the clock with comprehensive documentation and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Start with a free trial of any product or schedule a personalized demo to see how our solutions can
            streamline your business processes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact#contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
