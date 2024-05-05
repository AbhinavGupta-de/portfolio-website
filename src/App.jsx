import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<div className="md:w-4/5 md:mx-auto">
			<BrowserRouter>
				<Header />
				<div className="mt-8 p-5">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="works" element={<Works />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
