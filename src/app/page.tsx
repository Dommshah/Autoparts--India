import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FlashDeals from "@/components/home/FlashDeals";
import Marquee from "@/components/home/Marquee";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import RecentlyViewed from "@/components/home/RecentlyViewed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <FeaturedProducts />
      <FlashDeals />
      <PromoBanner />
      <Testimonials />
      <RecentlyViewed />
    </>
  );
}
