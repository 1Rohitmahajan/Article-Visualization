import './App.css';
import Layout from './Components/shared/Layout';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './Components/Article';
import About from './Components/About';
import Contact from './Components/Contact';
import Charts from './Charts_visualization/Charts';
import PageNotFound from './Charts_visualization/PageNotFound';
function App() {
  

  return (
    <div className='
    scroll-auto'>
      <div className='flex flex-col scroll-smooth'>
        <Router >
          <Routes>
             {/* Other routes */}
 <Route path='*' element={<PageNotFound />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='/Article' element={<Article />} />
              <Route path='/charts' element={<Charts />} />

              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
 {/* Other routes */}
 <Route path='*' element={<PageNotFound />} />

            </Route>
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;
