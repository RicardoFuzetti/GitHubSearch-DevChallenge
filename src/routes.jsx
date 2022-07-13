import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Search from './pages/search';

export default function RoutesApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/search/:user" element={<Search />} />
			</Routes>
		</BrowserRouter>

	)
};