import { Link } from 'react-router-dom';

const ProjectCard = ({
	imgSrc,
	skills,
	title,
	description,
	hostLink,
	githubLink,
}) => {
	return (
		<div className="flex border-2 border-solid border-[#787c8a] flex-col mb-10">
			<div className="flex border-b-2 border-solid border-[#787c8a]">
				<Link to={hostLink}>
					<img src={imgSrc} alt="Project image" />
				</Link>
			</div>
			<div>
				<div className="border-b-2 border-solid border-[#787c8a] p-1 text-[16px] text-[#bbbdc0]">
					{skills}
				</div>
				<div className="text-[24px] m-2">{title}</div>
				<div className="text-[16px] m-2 text-[#bbbdc0]">{description}</div>
				<div className="flex flex-wrap m-2">
					{hostLink === '' ? null : (
						<div className="border border-solid border-[#27ae60] p-[0.3rem] w-fit m-2">
							<a href={hostLink}>Live</a>
						</div>
					)}

					{githubLink === '' ? null : (
						<div className="border border-solid border-[#787c8a] p-[0.3rem] w-fit m-2">
							<a href={githubLink}>Github</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
