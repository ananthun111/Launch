import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const featuredArticle = {
    title: "The Complete Guide to AI-Powered Business Transformation in 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing traditional industries and learn practical steps to implement AI solutions in your business operations.",
    category: "AI Adoption",
    readTime: "12 min read",
    date: "Dec 15, 2024",
    author: "Alex Rodriguez",
    featured: true,
  }

  const articles = [
    {
      title: "5 SaaS Trends That Will Dominate 2025",
      excerpt:
        "From AI integration to micro-SaaS solutions, explore the key trends shaping the software-as-a-service landscape.",
      category: "SaaS Trends",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      author: "Sarah Chen",
    },
    {
      title: "From Startup to Scale: Building Resilient Digital Infrastructure",
      excerpt:
        "Learn how to architect scalable systems that grow with your business and handle increasing user demands.",
      category: "Startup Growth",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      author: "Michael Johnson",
    },
    {
      title: "Digital Transformation ROI: Measuring Success in Traditional Industries",
      excerpt:
        "Practical frameworks for calculating and demonstrating the return on investment of digital transformation initiatives.",
      category: "Digital Transformation",
      readTime: "15 min read",
      date: "Dec 8, 2024",
      author: "Emily Davis",
    },
    {
      title: "The Future of Work: How AI is Reshaping Business Operations",
      excerpt:
        "Explore how artificial intelligence is changing the way we work and what it means for business leaders.",
      category: "AI Adoption",
      readTime: "7 min read",
      date: "Dec 5, 2024",
      author: "Alex Rodriguez",
    },
    {
      title: "Cloud Migration Strategies for Small and Medium Businesses",
      excerpt: "A comprehensive guide to moving your business operations to the cloud safely and cost-effectively.",
      category: "Digital Transformation",
      readTime: "12 min read",
      date: "Dec 3, 2024",
      author: "Sarah Chen",
    },
    {
      title: "Building Customer-Centric SaaS Products: Lessons from the Field",
      excerpt:
        "Key insights on developing software solutions that truly solve customer problems and drive business growth.",
      category: "SaaS Trends",
      readTime: "9 min read",
      date: "Dec 1, 2024",
      author: "Michael Johnson",
    },
  ]

  const categories = ["All", "AI Adoption", "SaaS Trends", "Digital Transformation", "Startup Growth"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <BookOpen className="mr-2 h-4 w-4" />
              Insights & Knowledge
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Stay Ahead with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Industry Insights
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert perspectives on AI adoption, SaaS trends, startup growth, and digital transformation strategies
              from our team of industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest deep-dive into industry trends and insights</p>
          </div>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{featuredArticle.category}</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
              <CardTitle className="text-2xl leading-tight">{featuredArticle.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{featuredArticle.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/blog/ai-business-transformation-2024">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Explore our collection of insights and industry analysis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Subscribe to our newsletter and get the latest articles, trends, and insights delivered directly to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
