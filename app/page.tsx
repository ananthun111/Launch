import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Bot, Code, Gauge, Quote, Rocket, Sparkles, Star, TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Transforming Businesses Since 2024
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Transforming Businesses into{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smart, AI-Powered
              </span>{" "}
              Enterprises
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              We empower traditional businesses with SaaS, AI, and modern technologies to scale and thrive in the
              digital era. Transform your operations, automate workflows, and unlock unprecedented growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact#contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Highlight */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital transformation through cutting-edge products and tailored services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-primary" />
                  <CardTitle>Our Products</CardTitle>
                </div>
                <CardDescription>Ready-to-deploy SaaS solutions for immediate impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Authentication & User Management Systems</li>
                  <li>• Custom Business Applications</li>
                  <li>• AI-Powered Analytics Platforms</li>
                  <li>• Industry-Specific CRM Solutions</li>
                </ul>
                {/* <Button variant="outline" className="mt-4 bg-transparent" asChild>
                  <Link href="/products">Explore Products</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-secondary" />
                  <CardTitle>Our Services</CardTitle>
                </div>
                <CardDescription>End-to-end digital transformation consulting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business Digital Transformation</li>
                  <li>• Custom SaaS Development</li>
                  <li>• AI Integration & Automation</li>
                  <li>• Cloud Migration & DevOps</li>
                </ul>
                <Button variant="outline" className="mt-4 bg-transparent" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Dcodeux?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver measurable results through proven methodologies and cutting-edge technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">AI Automation</h3>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks and decision-making processes with intelligent AI solutions
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Gauge className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Enhanced Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Streamline operations and reduce costs by up to 40% with optimized workflows
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Infinite Scalability</h3>
              <p className="text-sm text-muted-foreground">
                Cloud-native solutions that grow with your business, from startup to enterprise
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Rocket className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Digital Transformation</h3>
              <p className="text-sm text-muted-foreground">
                Complete modernization of legacy systems with future-ready technology stacks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses transform and achieve remarkable growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Dcodeux transformed our traditional manufacturing business with AI-powered inventory management. We
                  reduced waste by 35% and increased efficiency dramatically."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">CEO, Mitchell Manufacturing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  "The custom SaaS solution Dcodeux built for our restaurant chain revolutionized our operations. Order
                  processing is now 3x faster and customer satisfaction has soared."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-semibold">RJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Robert Johnson</p>
                    <p className="text-sm text-muted-foreground">Owner, Johnson's Bistro Chain</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Moving from spreadsheets to Dcodeux's AI-powered analytics platform gave us insights we never had
                  before. Revenue increased 50% in just 6 months."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">LC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lisa Chen</p>
                    <p className="text-sm text-muted-foreground">Director, Chen Logistics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Strong CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions.
            Start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact#contact">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact#contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
