import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/home';
import About from './Pages/about'
import Singlepage from './Pages/singlepage'
import Footer from './Components/footer/footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className='container'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/singleShow/:id' component={Singlepage}/>
        </Switch>
        </div> 
        <Footer />       
      </div>
    </Router>
  );
}

export default App;
