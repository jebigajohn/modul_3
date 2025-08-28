import React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Workout with me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reiciendis in praesentium
            dolor nostrum iste, enim quae tempora voluptatum.
          </p>
          <a href="#" className="btn-basic">
            Join Club now
          </a>

          <div>
            <p>As Featured in </p>
            <img src="/fitness_assets/logo.png" alt="" />
          </div>
          <img src="/fitness_assets/hero.png" alt="" />
        </div>
      </section>
    </>
  )
}
