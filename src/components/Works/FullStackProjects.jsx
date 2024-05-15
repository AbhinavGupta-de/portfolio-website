import Gold from '../../assets/images/Gold.png';
import ProjectCard from '../Main/ProjectCard';
import Commenz from '../../assets/images/commenz.png';

const FullStackProjects = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>fullstack projects
			</div>

			<div className="flex gap-5 xsm:flex-col mt-10 p-5">
				<ProjectCard
					imgSrc={Commenz}
					skills="Java SpringBoot React Spring AI Selenium"
					title="Commenz | Feedback Synthesis Tool"
					description="
					This project is a web app that summarizes reviews using NLP. It scrapes and extracts key points, ratings, and reviews, presenting them in a user-friendly interface. It helps users save time and make informed decisions online."
					hostLink="https://commenz.netlify.app/"
					githubLink="https://github.com/abhinavgupta-de/commenz-java"
					inProgress={true}
				/>
				<ProjectCard
					imgSrc={Gold}
					skills="React Axios SpringBoot Java MongoDB"
					title="Gold | A movie reviewing app"
					description="It's a website where we can review movies and give them ratings. THE BACKEND WAS NEVER DEPLOYED THAT'S WHY	IT'S NOT WORKING."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/movie-gold-v1"
				/>
				<ProjectCard
					imgSrc=""
					skills="React Node Express MongoDB"
					title="BookStore | A app to add and view books"
					description="
					This is a simple book store application that allows users to add books, edit books, delete books to the store and also allows users to view the books in the store. This application is built using MERN stack."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/book-store-backend"
				/>
			</div>
		</div>
	);
};

export default FullStackProjects;
