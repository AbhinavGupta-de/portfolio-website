import {
	BackendProjects,
	DataScience,
	FrontendProjects,
	FullStackProjects,
	ReactNativeProject,
	SmallProjects,
} from '../components';

const Works = () => {
	return (
		<div className="flex flex-col mt-10">
			<div className="mb-10">
				<div className="text-[32px]">
					<spam className="text-[#27ae60]">/</spam>projects
				</div>
				<div className="mt-2">
					This contains the list of some the projects I have done across various
					domains. It includes frontend projects, backend projects, fullstack
					projects, react native projects, data science projects, and small projects.
				</div>
			</div>

			<FrontendProjects />
			<BackendProjects />
			<FullStackProjects />
			<ReactNativeProject />
			<DataScience />
			<SmallProjects />
		</div>
	);
};

export default Works;
