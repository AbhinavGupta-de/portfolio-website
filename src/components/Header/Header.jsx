import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="flex sticky top-0 w-full justify-between items-center text-[20px] bg-[#282C33] h-10">
			<div className="p-5">
				<Link to="/" className="flex" onClick={closeMenu}>
					Abhinav Gupta
				</Link>
			</div>
			<div className="hidden md:block p-5">
				<nav className="flex items-center gap-4">
					<Link to="/">
						<span className="text-[#27ae60]">#</span>
						Home
					</Link>
					<Link to="/works">
						<span className="text-[#27ae60]">#</span>
						Works
					</Link>
					<Link to="/about">
						<span className="text-[#27ae60]">#</span>
						About
					</Link>
					<Link to="/contact">
						<spani className="text-[#27ae60]">#</spani>
						Contact
					</Link>
				</nav>
			</div>
			<div className="md:hidden p-5">
				<button onClick={toggleMenu}>
					{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>
			{isMenuOpen ? (
				<div className="z-10 h-full bg-[#282c33] w-full p-5 mb-5 overflow-hidden fixed top-[2rem]">
					<nav className="flex flex-col justify-center items-start gap-4">
						<Link to="/" onClick={closeMenu}>
							<span className="text-[#27ae60]">#</span>
							Home
						</Link>
						<Link to="/works" onClick={closeMenu}>
							<span className="text-[#27ae60]">#</span>
							Works
						</Link>
						<Link to="/about" onClick={closeMenu}>
							<span className="text-[#27ae60]">#</span>
							About
						</Link>
						<Link to="/contact" onClick={closeMenu}>
							<spani className="text-[#27ae60]">#</spani>
							Contact
						</Link>
					</nav>
					<div className="flex justify-center items-center gap-4 mt-5 w-3/4 ">
						<a href="https://github.com/AbhinavGupta-de">
							<GitHubIcon fontSize="large" />
						</a>
						<a href="https://www.linkedin.com/in/abhinav-gupta-a6422026b">
							<LinkedInIcon fontSize="large" />
						</a>
					</div>
				</div>
			) : (
				<></>
			)}
		</header>
	);
};

export default Header;
