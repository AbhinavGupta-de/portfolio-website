import MyTube from '../../assets/images/MyTubeLogo.png';
import GymGenius from '../../assets/images/GymGeniusLogo.png';
import Seating from '../../assets/images/SSTSeatingPlan.png';
import ProjectCard from '../Main/ProjectCard';
import dailyPulse from '../../assets/images/dailyPulse.png';
import TaskForge from '../../assets/images/taskForge.png';
import Gold from '../../assets/images/Gold.png';

const CompleteProjects = () => {
	return (
		<div>
			<div className="text-[32px] mb-5">
				<spam className="text-[#27ae60]">#</spam>complete-apps
			</div>

			<div className="flex gap-5 flex-col lg:flex-row mt-10 p-5">
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

			<div className="flex gap-5 flex-col lg:flex-row p-5">
				<ProjectCard
					imgSrc={dailyPulse}
					skills="HTML CSS ContextAPI Axios React"
					title="Daily Pulse | A News App"
					description="A web app to read news in breif and get updated with the world."
					hostLink="https://dailypulse.netlify.app/"
					githubLink="https://github.com/AbhinavGupta-de/DailyPulse"
				/>
				<ProjectCard
					imgSrc={TaskForge}
					skills="Javascript React ContextAPI ReactHooks CSS"
					title="Task Forge | Todo App"
					description="A simple web app to make Todo list and manage your tasks."
					hostLink="https://taskforge.netlify.app/"
					githubLink="https://github.com/AbhinavGupta-de/todo-app"
				/>
				<ProjectCard
					imgSrc={Gold}
					skills="React Axios SpringBoot Java MongoDB"
					title="Gold | A movie reviewing app"
					description="It's a website where we can review movies and give them ratings. THE BACKEND WAS NEVER DEPLOYED THAT'S WHY	IT'S NOT WORKING."
					hostLink="https://gold-movie-api.netlify.app/"
					githubLink="https://github.com/AbhinavGupta-de/movie-gold-v1"
				/>
			</div>
		</div>
	);
};

export default CompleteProjects;
