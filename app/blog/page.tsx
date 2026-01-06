import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog",
}

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2024",
    excerpt:
      "Discover the latest web design trends that will shape the digital landscape in 2024 and beyond.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "How to Improve Your Website's Conversion Rate",
    excerpt:
      "Learn proven strategies to optimize your website and turn more visitors into customers.",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "The Complete Guide to Digital Marketing in 2024",
    excerpt:
      "Everything you need to know about digital marketing strategies that drive real results.",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Mobile App Design Best Practices",
    excerpt:
      "Key principles and best practices for designing mobile apps that users love.",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and updates on web design, digital marketing, and
            technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

