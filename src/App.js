import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Navigation/Header'
import { saveState } from './LocalStorage'
import './_App.scss'

function App() {
  const theme = useSelector(state => state.darkThemeEnabled)

  //save theme to localStorage when it changes
  useEffect(() => {
    saveState(theme);
  }, [theme]);

  return (
    <div className={theme ? "dark" : ""}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
