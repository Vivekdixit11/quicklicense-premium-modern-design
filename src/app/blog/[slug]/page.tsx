import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from "@/lib/blogData";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  User,
  Tag,
  ArrowRight,
} from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 2);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#feda6a]/30 to-[#feda6a]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#d4d4dc]/30 to-[#d4d4dc]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-[#feda6a] hover:text-[#d4d4dc] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <Badge className="mb-4 bg-[#feda6a]/20 text-[#feda6a] border-[#feda6a]/30">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-16 relative z-20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div 
                className="lg:col-span-3 prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Share */}
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share Article
                      </h3>
                      <div className="flex flex-col gap-2">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=https://www.quicklicense.in/blog/${slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=https://www.quicklicense.in/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                        >
                          Twitter
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.quicklicense.in/blog/${slug}&title=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="border-2 bg-gradient-to-br from-terracotta/10 to-terracotta/5">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">Need Expert Help?</h3>
                      <p className="text-sm text-gray-600 mb-4">Get professional assistance for your business registration needs.</p>
                      <a href="tel:+919891614601">
                        <Button className="w-full bg-terracotta hover:bg-terracotta-dark text-white">
                          Call Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="group overflow-hidden border-2 hover:border-terracotta transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2" variant="outline">{relatedPost.category}</Badge>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-terracotta transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn p-0">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
