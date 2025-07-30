import React from 'react'
import Hero from './../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrival from '../components/Products/NewArrival';
import BestSeller from '../components/Details/BestSeller';

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrival />
        <BestSeller />
    </div>
  )
}

export default Home