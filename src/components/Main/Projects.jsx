import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import MyTube from '../../assets/images/MyTubeLogo.webp';
import Commenz from '../../assets/images/commenz.webp';
import Bhashini from '../../assets/images/bhashini.webp';

const Projects = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Projects
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
				<Link to="/works">
					<div className="text-[16px] flex gap-2 justify-center items-center">
						View All <i className="fa-sharp fa-solid fa-arrow-right"></i>{' '}
					</div>
				</Link>
			</div>

			<div className="flex gap-5 flex-col mt-10 p-5 md:flex-row">
				<ProjectCard
					imgSrc={MyTube}
					skills="HTML CSS Tailwind Material UI React"
					title="YouTube Clone | MyTube"
					description="This is the clone of YouTube. On this website you can browse any YouTube video that you like along with any channel. This website provides an amazing theme and UI experience!"
					hostLink="https://mytube-abhi.netlify.app/"
					githubLink=""
				/>
				<ProjectCard
					imgSrc={Commenz}
					skills="Java SpringBoot React Spring AI Selenium"
					title="Commenz | Feedback Synthesis Tool"
					description="This project is a web app that summarizes reviews using NLP. It scrapes and extracts key points, ratings, and reviews, presenting them in a user-friendly interface. It helps users save time and make informed decisions online."
					hostLink="https://commenz.netlify.app/"
					githubLink="https://github.com/abhinavgupta-de/commenz-java"
				/>
				<ProjectCard
					imgSrc={Bhashini}
					skills="Javascript Typescript Node Prisma React"
					title="Bhashini | Language Translation Tool"
					description="Facilitating seamless translation into regional languages for Indian users through a comprehensive suite of tools including a Chrome Extension, Node Webpack, JavaScript Utility, and an Internship Portal for collaboration and contribution."
					hostLink=""
					githubLink="https://github.com/SST-Open-Source-Club/bhashini-web-translator"
				/>
			</div>
		</div>
	);
};

export default Projects;
