import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
	return (
		<div className="p-5">
			<div className="flex md:flex-row flex-col border-t-2 border-solid justify-between gap-2">
				{/* About Me */}
				<div className="flex flex-col gap-1 mt-10">
					<div className="flex md:flex-row flex-col justify-between">
						<div>Abhinav Gupta</div>
						<div className="text-[#9fa5b2]">abhinav.gupta@outlook.de</div>
					</div>
					<div>
						AI & Blockchain Enthusiast | Web Developer | Aspiring Software Engineer
					</div>
				</div>

				{/* Media Links */}
				<div className="flex flex-col mt-5 md:mt-10 justify-center items-center">
					<div>Media</div>
					<div className="flex md:justify-between gap-2">
						<a href="https://www.linkedin.com/in/abhinavgpt">
							<LinkedInIcon />
						</a>
						<a href="https://github.com/AbhinavGupta-de">
							<GitHubIcon />
						</a>
					</div>
				</div>
			</div>

			{/* Last line */}
			<div className="mt-5 flex items-center justify-center text-[#9fa5b2]">
				<p>
					<CopyrightIcon />
					{` `}
					Made by Abhinav
				</p>
			</div>
		</div>
	);
};

export default Footer;
