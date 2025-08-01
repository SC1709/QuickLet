import React from 'react'
import Hero from './../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrival from '../components/Products/NewArrival';
import BestSeller from '../components/Categories/BestSeller';
import WomenWear from '../components/Categories/WomenWear';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeaturesSection from '../components/Products/FeaturesSection';

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrival />
        <BestSeller />
        <WomenWear />
        <FeaturedCollection />
        <FeaturesSection />
    </div>
  )
}

export default Home