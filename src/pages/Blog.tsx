import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, ArrowRight, Pen, Clock, Tag } from "lucide-react";

const categories = [
  "All",
  "Legal Articles",
  "Judgment Breakdowns",
  "Current Affairs",
  "Exam Preparation",
];

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Right to Privacy: A Comprehensive Analysis of Puttaswamy Judgment",
    excerpt: "An in-depth examination of the landmark Supreme Court verdict that established privacy as a fundamental right under the Indian Constitution.",
    category: "Judgment Breakdowns",
    date: "December 20, 2024",
    readTime: "12 min read",
  },
  {
    id: 2,
    title: "CLAT 2025: Complete Preparation Strategy and Important Topics",
    excerpt: "Master your CLAT preparation with our comprehensive guide covering legal reasoning, logical reasoning, English, and current affairs sections.",
    category: "Exam Preparation",
    date: "December 18, 2024",
    readTime: "15 min read",
  },
  {
    id: 3,
    title: "Supreme Court's Recent Ruling on Arbitrary Arrests Under PMLA",
    excerpt: "Analysis of the recent Supreme Court judgment that clarified the safeguards against arbitrary arrests under the Prevention of Money Laundering Act.",
    category: "Current Affairs",
    date: "December 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Environmental Law in India: From Stockholm to Paris Agreement",
    excerpt: "Tracing the evolution of environmental jurisprudence in India and its alignment with international environmental treaties and conventions.",
    category: "Legal Articles",
    date: "December 12, 2024",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Kesavananda Bharati: The Doctrine of Basic Structure Explained",
    excerpt: "A detailed breakdown of the most significant constitutional law case that established limitations on Parliament's amending power.",
    category: "Judgment Breakdowns",
    date: "December 10, 2024",
    readTime: "14 min read",
  },
  {
    id: 6,
    title: "Weekly Legal Current Affairs: December 9-15, 2024",
    excerpt: "Stay updated with the latest legal developments including Supreme Court verdicts, legislative changes, and important legal news from across India.",
    category: "Current Affairs",
    date: "December 15, 2024",
    readTime: "6 min read",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="text-accent text-sm font-medium">Legal Prudent Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Legal Knowledge <span className="gradient-text">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Explore comprehensive legal articles, judgment breakdowns, daily current affairs, 
              and exam preparation resources curated by legal experts.
            </p>
          </AnimatedSection>

          {/* Search and Write CTA */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-muted/30 border-border/50 focus:border-accent/50 rounded-xl"
                />
              </div>
              <Button variant="hero" className="whitespace-nowrap">
                <Pen className="h-4 w-4" />
                Write for Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-border/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-container pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.05}>
              <GlassCard hover className="h-full flex flex-col">
                <div className="mb-4">
                  <span className="category-tag">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all duration-300"
                  >
                    Read
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button variant="glass" className="mt-4" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                Clear Filters
              </Button>
            </div>
          </AnimatedSection>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="section-container">
        <AnimatedSection>
          <GlassCard glow className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated with Legal Insights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and receive weekly legal updates, judgment summaries, and exam tips directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-muted/30 border-border/50 focus:border-accent/50 rounded-xl"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </GlassCard>
        </AnimatedSection>
      </section>
    </>
  );
};

export default Blog;
