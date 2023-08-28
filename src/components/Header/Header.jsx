import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../../assets/images/Logo.png';

// TODO - Make the header responsive
// TODO - Add a dropdown kind of button to make it responsive

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="flex fixed top-0 w-4/5 justify-between items-center text-[22px] bg-[#282C33] h-10 ">
			<div>
				<Link to="/" className="flex gap-3">
					<img src={Logo} alt="logo" className="h-8" />
					Abhinav
				</Link>
			</div>
			<div className="hidden md:block">
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
			<div className="md:hidden">
				<button onClick={toggleMenu}>
					{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>
			{isMenuOpen ? (
				<div className="fixed top-10 z-10 h-full bg-[#282c33] w-full p-5 mb-5">
					<nav className="flex flex-col justify-center items-start gap-4">
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
					<div className="flex justify-center items-center gap-4 mt-5">
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
