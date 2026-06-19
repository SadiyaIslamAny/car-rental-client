import AvailableCarsSection from "@/components/AvailableCarsSection";
import Banner from "@/components/Banner";
import CarCategoryPage from "@/components/CarCategory";

import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Banner />
      <AvailableCarsSection />
      <WhyChooseUs />
      <CarCategoryPage />

    </div>
  );
}
