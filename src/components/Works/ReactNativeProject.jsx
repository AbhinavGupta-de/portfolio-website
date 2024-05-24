import ProjectCard from '../Main/ProjectCard';

const ReactNativeProject = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>react native project
			</div>

			<div className="flex gap-5 flex-col mt-10 p-5 md:flex-row">
				<ProjectCard
					imgSrc=""
					skills="React Native"
					title="Podcastr | Podcast App"
					description="This project is a podcast app built using React Native. It includes features like playing podcasts, listing podcasts, and searching for podcasts. It also includes features like uploading podcasts and user authentication."
					hostLink=""
					githubLink=""
					inProgress={true}
				/>
				<ProjectCard
					imgSrc=""
					skills="React Native Expo"
					title="Telegram Clone | Messaging App"
					description="This project is a messaging app built using React Native Expo. It includes features like sending messages, receiving messages, and user authentication. It also includes features like sending images and videos."
					hostLink=""
					githubLink=""
					inProgress={true}
				/>
				<ProjectCard
					imgSrc=""
					skills="React Native Expo"
					title="NFT Marketplace | NFT Marketplace App"
					description="This project is an NFT marketplace app built using React Native Expo. It includes features like listing NFTs, buying NFTs, and selling NFTs. It also includes features like user authentication and payment processing."
					hostLink=""
					githubLink=""
					inProgress={true}
				/>
			</div>
		</div>
	);
};

export default ReactNativeProject;
