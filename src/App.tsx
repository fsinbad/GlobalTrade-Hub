import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/layout/header';
import { HomePage } from './pages/home';
import { CategoryPage } from './pages/category';
import { ProductPage } from './pages/product';
import { DashboardPage } from './pages/dashboard';
import { DealsPage } from './pages/deals';
import { SellPage } from './pages/sell';
import { Footer } from './components/layout/footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/dashboard/*" element={<DashboardPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/sell" element={<SellPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;