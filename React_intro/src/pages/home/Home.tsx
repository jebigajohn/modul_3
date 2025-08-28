import React from "react"
import Liste from "../../components/liste/Liste"
import Header from "../../components/header/Header"

export default function Home() {
  // selbstgeschrieben Komponenten wie hier z.B. Liste, werden groß geschrieben, um sie von eingebauten HTML Elementen zu unterscheiden
  return (
    <>
      <Header />
      <main>
        <h2>Ich bin in der Home Seite</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt sequi ea alias molestiae, non
          voluptas rem, eligendi a sed quidem recusandae at nemo culpa libero? Quibusdam placeat repudiandae
          consequatur?
        </p>
        <Liste />
      </main>
    </>
  )
}
