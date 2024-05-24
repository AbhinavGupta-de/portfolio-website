import ProjectCard from '../Main/ProjectCard';

const SmallProjects = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>small projects
			</div>

			<div className="flex gap-5 flex-col mt-10 p-5 md:flex-row">
				<ProjectCard
					imgSrc=""
					skills="React"
					title="Portfolio | Personal Portfolio"
					description="This is my personal portfolio website. It is built using React and Tailwind CSS. It	includes features like listing projects, listing skills, and listing experiences."
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
					description="This project is a simple todo app built using Go and Gin. Just made for learning purposes. It includes features like adding todos, deleting todos, and updating todos."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/todo-app-go"
				/>
			</div>
			<div className="flex gap-5 flex-col mt-10 p-5 md:flex-row">
				<ProjectCard
					imgSrc=""
					skills="Java Object Oriented Programming"
					title="Tic Tac Toe | A simple tic tac toe game"
					description="This project is a simple tic tac toe game built using Java. Just made for learning purposes. It features 2 players for now, one is the user and the other is the computer."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/TicTacToe/tree/master"
				/>
				<ProjectCard
					imgSrc=""
					skills="react ChromeExtension JavaScript Java SpringBoot Selenium"
					title="Fanfiction Downloader | A chrome extension"
					description="This project is a chrome extension that downloads fanfictions from fanfiction.net and archieve of our own(AO3). It supports single chapter download, specific chapter download, full story download, and full series download."
					hostLink=""
					githubLink=""
					inProgress={true}
				/>
				<ProjectCard
					imgSrc=""
					skills="Python Linear Algebra"
					title="Image Compression | Image Compression using PCA and SVD"
					description="This project is an image compression tool built using Python. It compresses images using Principal Component Analysis(PCA) and Singular Value Decomposition(SVD)."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/ImageCompressor"
				/>
			</div>
			<div className="flex gap-5 flex-col mt-10 p-5 md:flex-row">
				<ProjectCard
					imgSrc=""
					skills="Javascript React Node	Express MongoDB"
					title="Memories | A simple social media app"
					description="This project is a simple social media app built using MERN stack. It includes features like adding posts, deleting posts, updating posts, and liking posts. It also includes features like user authentication(through OAuth) and image uploading."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/memories"
				/>
				<ProjectCard
					imgSrc=""
					skills="Python Linear Classification"
					title="Linear classification"
					description="This project is a linear classification model built using Python. It classifies the data into two classes using a linear classifier. It uses the perceptron algorithm for training the model."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/Learning_ML"
				/>
				<ProjectCard
					imgSrc=""
					skills="Java FileHandling ObjectOrientedProgramming"
					title="Image Editor | A simple image editor"
					description="This project is a simple image editor built using Java. It includes features like changing the brightness of the image, changing the contrast of the image, and changing the saturation of the image, rotating the image, flipping the image and adding blur to the image."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/ImageEditor"
				/>
			</div>
		</div>
	);
};

export default SmallProjects;
