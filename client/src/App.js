//NOTE - Styles
import './App.css';

//NOTE - libs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//NOTE - pages
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { CreateRecipe } from './pages/CreateRecipe';
import { SavedRecipe } from './pages/SavedRecipe';

//NOTE - components
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipe/:id" element={<SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
