import {
	Certification,
	Education,
	Experience,
	MainContent,
	Programs,
	Skills,
} from '../components';

const About = () => {
	return (
		<div className="flex flex-col mt-10">
			<div className="mb-10">
				<div className="text-[32px]">
					<spam className="text-[#27ae60]">/</spam>about-me
				</div>
				<div className="mt-2">Who am I?</div>
			</div>
			<MainContent />
			<Skills />
			<Education />
			<Experience />
			<Certification />
			<Programs />
		</div>
	);
};

export default About;
