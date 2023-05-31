import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Third Imperfect Wasp</title>
        <meta property="og:title" content="Third Imperfect Wasp" />
      </Helmet>
      <img
        src="/4k-gaming-wallpaper-images-8-200h.jpg"
        alt="image"
        className="home-image"
      />
    </div>
  )
}

export default Home
