import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import MyTube from '../../assets/images/myTubeLogo.png';

const Projects = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Projects
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
				<Link to="/projects">
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
					hostLink="d"
					githubLink="d"
				/>
				<ProjectCard
					imgSrc={MyTube}
					skills="HTML CSS Tailwind Material UI React"
					title="YouTube Clone | MyTube"
					description="Made the clone of youtube"
					hostLink=""
					githubLink=""
				/>
				<ProjectCard
					imgSrc={MyTube}
					skills="HTML CSS Tailwind Material UI React"
					title="YouTube Clone | MyTube"
					description="Made the clone of youtube"
					hostLink=""
					githubLink=""
				/>
			</div>
		</div>
	);
};

export default Projects;
