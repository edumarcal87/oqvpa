import Nav from './components/Nav'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Premios from './components/Premios'
import Projetos from './components/Projetos'
import Galeria from './components/Galeria'
import Videos from './components/Videos'
import Quiz from './components/Quiz'
import Livro from './components/Livro'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Sobre />
      <div className="divider" />
      <Premios />
      <div className="divider" />
      <Projetos />
      <div className="divider" />
      <Galeria />
      <div className="divider" />
      <Videos />
      <div className="divider" />
      <Quiz />
      <div className="divider" />
      <Livro />
      <Footer />
    </>
  )
}

export default App
