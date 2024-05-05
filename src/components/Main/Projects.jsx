import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import MyTube from '../../assets/images/MyTubeLogo.png';
import GymGenius from '../../assets/images/GymGeniusLogo.png';
import Seating from '../../assets/images/SSTSeatingPlan.png';

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

			<div className="flex gap-5 xsm:flex-col mt-10 p-5">
				<ProjectCard
					imgSrc={MyTube}
					skills="HTML CSS Tailwind Material UI React"
					title="YouTube Clone | MyTube"
					description="Made the clone of youtube"
					hostLink="https://mytube-abhi.netlify.app/"
					githubLink=""
				/>
				<ProjectCard
					imgSrc={GymGenius}
					skills="Javascript React ContextAPI Tailwind CSS"
					title="GymGenius | An Exercising App"
					description="An exercising app made to browse exercises"
					hostLink="https://gymgenius-abhi.netlify.app/"
					githubLink=""
				/>
				<ProjectCard
					imgSrc={Seating}
					skills="HTML CSS Tailwind React Javascript"
					title="Seating Plan	| SST	OSS"
					description="Made a seating plan for my college and solved realtime problem of manually updating it."
					hostLink="https://seating.vercel.app/"
					githubLink="https://github.com/SST-OSS/seating"
				/>
			</div>
		</div>
	);
};

export default Projects;
