import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import ProductShowcase from '@/components/sections/product-showcase';
import Testimonials from '@/components/sections/testimonials';
import CallToAction from '@/components/sections/call-to-action';
import BlogPreview from '@/components/sections/blog-preview';
import InstagramFeed from '@/components/sections/instagram-feed';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <BlogPreview />
      <InstagramFeed />
      <CallToAction />
    </div>
  );
}