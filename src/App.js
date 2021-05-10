import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './_App.scss'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
