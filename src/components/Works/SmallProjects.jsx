import ProjectCard from '../Main/ProjectCard';

const SmallProjects = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>small projects
			</div>

			<div className="flex gap-5 xsm:flex-col mt-10 p-5">
				<ProjectCard
					imgSrc=""
					skills="React"
					title="Portfolio | Personal Portfolio"
					description="This is my personal portfolio website. It is built using React and Tailwind CSS."
					hostLink="https://abhinavgpt.netlify.app/"
					githubLink=""
				/>
				<ProjectCard
					imgSrc=""
					skills="Python WebScraping"
					title="Price it | A simple price comparison tool"
					description="This project is a simple price comparison tool built using Python and BeautifulSoup. It scrapes data from different websites and compares the prices."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/PriceIt"
				/>
				<ProjectCard
					imgSrc=""
					skills="Go GoGin"
					title="Todo App | A simple todo app"
					description="This project is a simple todo app built using Go and Gin. Just made for learning purposes."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/todo-app-go"
				/>
			</div>
		</div>
	);
};

export default SmallProjects;
