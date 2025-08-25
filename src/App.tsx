import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"

// # Wie starten wir eine React APP
// 1. npm create vite@latest
// 2. Project-Name definieren
// 3. React auswählen
// 4. TS auswählen
// 5. npm i oder npm install

// # Ordner Struktur
// node_modules = // ? Dort befinden sich alle Pakete bzw. Packages die für React benötigt werden(wir können auch Pakete hinzufügen durch npm i "name" des Pakets)
// public = // ? Dort werden die Bilder, Fonts oder ähnliches hochgeladen oder abgelegt. Hier kann man ganz einfach über den Pfad auf die Bilder zugreifen
// src = // ? hier schreiben wir fast alle Funktionen und Stylings für unsere App - zusätzlich erstellen wir zwei Ordner (Components & Pages)
// src/assets // ? Hier kann man auch Bilder ablegen, muss sie aber dann über "import" importieren um diese zu benutzen
// app.css // ? hier kommen nur die Styles rein, die app.tsx betreffen
// index.css // ? hier kommt das Globale Styling rein, z.B. <p> <h1> etc ..
// ⬆️ Alles was man importiert, wird oberhalb des Codes geschrieben

function App() {
  // app.tsx // ? das ist wie ein Verwaltungszentrum der App
  // hier definieren wir unsere App Komponenten
  // wir können unsere React Komponenten in beliebiger FunctionSyntax schreiben
  // z.B. wäre es auch korrekt => const app = () => {return...} in Ordnung

  // Hier kommen die Funktionen in Zukunft rein
  // Die Hooks werden hier auch geschrieben

  function sayHello() {
    console.log("Hallo Welt")
  }
  return (
    // ⤵️ Das ist ein sogenanntes React Fragment, React benötigt dieses Syntax, sonst meckert es
    // Im HTML Dom wir das aber nicht angezeigt, wir können diesem Syntax keine Class vergeben
    // <></>
    <>
      <h2>Ich bin eine Überschrift</h2>
      <Home />
      <Footer />
    </>
  )
}

export default App
