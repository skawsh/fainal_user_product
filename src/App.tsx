import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OfferSlideshow } from './components/offers/OfferSlideshow';
import { ServicesSection } from './components/ServicesSection';
import { ShopsSection } from './components/shops/ShopsSection';
import { ShopProfile } from './components/shops/ShopProfile';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { PaymentPage } from './pages/checkout/PaymentPage';
import { CoreLaundryServices } from './pages/services/CoreLaundryServices';
import { WashAndFoldDetails } from './pages/services/WashAndFoldDetails';
import { SearchProvider } from './contexts/SearchContext';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <ThemeProvider>
          <SearchProvider>
            <div className="dark:bg-gray-900 transition-colors duration-200">
              <Routes>
                <Route path="/" element={
                  <Layout>
                    <OfferSlideshow />
                    <ServicesSection />
                    <ShopsSection />
                  </Layout>
                } />
                <Route path="/shop/:shopId" element={<ShopProfile />} />
                <Route path="/services/core-laundry" element={<CoreLaundryServices />} />
                <Route path="/services/wash-fold" element={<WashAndFoldDetails />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </div>
          </SearchProvider>
        </ThemeProvider>
      </UserProvider>
    </Router>
  );
}