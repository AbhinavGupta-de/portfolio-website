import ProjectCard from '../Main/ProjectCard';

const ReactNativeProject = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>react native project
			</div>

			<div className="flex gap-5 xsm:flex-col mt-10 p-5">
				<ProjectCard
					imgSrc=""
					skills="React Native"
					title="Podcastr | Podcast App"
					description="This project is a podcast app built using React Native. It includes features like playing podcasts, listing podcasts, and searching for podcasts. It also includes features like uploading podcasts and user authentication."
					hostLink=""
					githubLink=""
					inProgress={true}
				/>
			</div>
		</div>
	);
};

export default ReactNativeProject;
