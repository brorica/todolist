// import TodoApp from './components/todo/TodoApp';
// import ApiApp from './components/api/ApiApp';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/"> 홈 </Link>
                </li>
                <li>
                    <Link to="/about"> about </Link>
                </li>
                <li>
                    <Link to="/profiles"> 프로필 목록 </Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/*" element={<Profiles />} />
                <Route path="/history" element={<HistorySample />} />
            </Routes>
        </div>
    );
}

export default App;
