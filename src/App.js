import './App.css';
import Navbar from './components/navbar';

import About from './components/about';
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeWrapper from './components/homeWrap';


function App() {
  return (
    
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
              <Route path="/" exact component={HomeWrapper} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </div>
      </Router>
    
  );
}

export default App;
