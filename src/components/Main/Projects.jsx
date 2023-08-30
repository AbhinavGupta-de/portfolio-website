import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Skills
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
				<Link to="/projects">
					<div>View All </div>
				</Link>
			</div>
		</div>
	);
};

export default Projects;
