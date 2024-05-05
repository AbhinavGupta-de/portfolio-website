import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className="bg-[#282C33] text-white h-full">
			<App />
		</div>
	</React.StrictMode>
);
