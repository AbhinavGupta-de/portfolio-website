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
				<div className="mt-2">List of my projects</div>
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
