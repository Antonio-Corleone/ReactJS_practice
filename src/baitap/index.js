import React from 'react';
import Header from './header'
import Carousel from './carousel'
import ListCard from './list-card'
import Footer from './footer'
export default function Baitap () {
  return (
    <div className="bg-dark">
      <Header />
      <Carousel />
      <ListCard />
      <Footer />
    </div>
  )
}