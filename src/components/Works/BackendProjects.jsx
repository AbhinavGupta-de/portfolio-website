import ProjectCard from '../Main/ProjectCard';

const BackendProjects = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>backend projects
			</div>
			<div className="flex gap-5 xsm:flex-col mt-10 p-5">
				<ProjectCard
					imgSrc=""
					skills="Java Spring SpringBoot Hibernate JPA PostgreSQL Docker"
					title="FakeStore | E-commerce microservice"
					description="This project is a microservice for an e-commerce website. It includes user authentication, product management, order management, and payment processing. It is built using Java, Spring Boot, Hibernate, and PostgreSQL."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/FakeStoreSpring"
					inProgress={true}
				/>
				<ProjectCard
					imgSrc=""
					skills="Java Spring SpringBoot Hibernate JPA PostgreSQL Docker"
					title="BookIt | Movie Booking microservice"
					description="This project is a microservice for a movie booking website. It includes movie management, booking management, and payment processing. It is built using Java, Spring Boot, Hibernate, and PostgreSQL."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/bookit"
				/>
				<ProjectCard
					imgSrc=""
					skills="Java Spring SpringBoot Hibernate JPA PostgreSQL Docker SpringSecurity JWT"
					title="JobPortal | Job Portal microservice"
					description="This project is a microservice for a job portal website. It includes user authentication, job management, and application management. It is built using Java, Spring Boot, Hibernate, and PostgreSQL."
					hostLink=""
					githubLink=""
					inProgress={true}
				/>
			</div>
		</div>
	);
};

export default BackendProjects;
