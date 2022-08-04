import * as React from 'react';

import AccessorySection from '../../components/layout/Home/Accessory/Accessory.js';
import BannerSection from '../../components/layout/Home/Banner/Banner.js';
import BrandSection from '../../components/layout/Home/Brand/Brand.js';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import HeroSection from '../../components/layout/Home/Hero/Hero.js';
import LaptopSection from '../../components/layout/Home/Laptop/Laptop.js';
import PhoneSection from '../../components/layout/Home/Phone/Phone.js';
import TabletSection from '../../components/layout/Home/Tablet/Tablet.js';
import Theme from '../../components/layout/Themes/Themes';

function Home() {
  return (
    <Theme>
      <div>
        <Header />
        <main style={{ paddingTop: '64px' }}>
          <div className="container">
            <div>
              <HeroSection />
              <BannerSection />
              <PhoneSection />
              <LaptopSection />
              <TabletSection />
              <AccessorySection />
              <BrandSection />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Theme>
  );
}

export default Home;
