import { useSelector } from 'react-redux'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Navigation/Header'
import './_App.scss'

function App() {
  const theme = useSelector(state => state.darkThemeEnabled)

  return (
    <div className={theme ? "dark" : ""}>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
