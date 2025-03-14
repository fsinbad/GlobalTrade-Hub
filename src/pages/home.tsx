import React from 'react';
import { HeroSection } from '../components/home/hero-section';
import { DiscountBanner } from '../components/home/discount-banner';
import { FeaturedCategories } from '../components/home/featured-categories';
import { TrendingProducts } from '../components/home/trending-products';
import { TrendingCategories } from '../components/home/trending-categories';
import { LiveStreams } from '../components/home/live-streams';
import { SupplierShowcase } from '../components/home/supplier-showcase';
import { TradeServices } from '../components/home/trade-services';

export function HomePage() {
  return (
    <div>
      <DiscountBanner />
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <TrendingCategories />
      <LiveStreams />
      <SupplierShowcase />
      <TradeServices />
    </div>
  );
}