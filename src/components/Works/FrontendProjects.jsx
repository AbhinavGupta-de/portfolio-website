import MyTube from '../../assets/images/MyTubeLogo.webp';
import GymGenius from '../../assets/images/GymGeniusLogo.webp';
import Seating from '../../assets/images/SSTSeatingPlan.webp';
import ProjectCard from '../Main/ProjectCard';
import dailyPulse from '../../assets/images/dailyPulse.webp';
import TaskForge from '../../assets/images/taskForge.webp';
import Visualizer from '../../assets/images/Visualizer.webp';

const FrontendProjects = () => {
	return (
		<div>
			<div className="text-[32px] mb-5">
				<spam className="text-[#27ae60]">#</spam>frontend projects
			</div>

			<div className="flex gap-5 flex-col mt-10 p-5 md:flex-row">
				<ProjectCard
					imgSrc={MyTube}
					skills="HTML CSS Tailwind Material UI React"
					title="YouTube Clone | MyTube"
					description="his is the clone of YouTube. On this website you can browse any YouTube video that you like along with any channel. This website provides an amazing theme and UI experience!"
					hostLink="https://mytube-abhi.netlify.app/"
					githubLink=""
				/>
				<ProjectCard
					imgSrc={GymGenius}
					skills="Javascript React ContextAPI Tailwind CSS"
					title="GymGenius | An Exercising App"
					description="Created Gym Genius, a fitness guide platform with 1300+ exercises via an integrated API database, advanced search filters, and tutorial videos."
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
					imgSrc={Visualizer}
					skills="HTML CSS JavaScript p5.js"
					title="Linear Classifier | Basic ML Model Visualization"
					description="Create a Linear Classification Visualizer to help easily visualize how linear classification works."
					hostLink="https://abhinavgupta-de.github.io/p5js-linear-classification/"
					githubLink="https://github.com/AbhinavGupta-de/p5js-linear-regression"
				/>
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
			</div>
		</div>
	);
};

export default FrontendProjects;
