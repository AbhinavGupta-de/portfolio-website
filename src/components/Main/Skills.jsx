const Skills = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Skills
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
			</div>

			<div className="flex">
				<div className="flex flex-col gap-5 text-[#bbbdc0] text-[16px] my-10 p-5">
					<p>
						{`I possess a diverse set of skills that I have acquired over time while working on numerous projects and assignments in different domains.`}
					</p>
					<ul className="flex flex-col gap-5">
						<li>
							<spam className="font-bold">Languages: </spam> Java, Python, Javascript,
							Typescript
						</li>
						<li>
							<span className="font-bold">Frameworks & Libraries: </span>Java Spring,
							Spring Boot, React, Node.js, Express.js, Django, FastAPI, Tailwind CSS
						</li>
						<li>
							<span className="font-bold">Databases: </span>MySQL, MongoDB, PostgreSQL
						</li>
						<li>
							<span className="font-bold">Tools & Technologies: </span>Git, Docker,
							Postman, VS Code, IntelliJ IDEA, Eclipse, Jupyter Notebook, GitHub,
							BitBucket, Jira, Linux, BashScripting
						</li>
						<li>
							<span className="font-bold"> Fundamentals: </span>Data Structures,
							Algorithms, OOP, Networking, Operating Systems, Database Design
						</li>
					</ul>

					<p>
						{`I'm continuously expanding my skill set and am currently focusing on
					database design, networking and operating systems.`}
					</p>
				</div>
				{/* <div className="md:w-2/5 hidden md:flex p-2 gap-[1.5rem] flex-wrap justify-center">
					<div className="flex flex-col items-center justify-center p-2 gap-10">
						<i className="fa-brands fa-html5 text-[3rem]"></i>
						<i className="fa-brands fa-css3-alt text-[3rem]"></i>
						<i className="fa-brands fa-js text-[3rem]"></i>
						<i className="fa-brands fa-java text-[3rem]"></i>
						<i className="fa-brands fa-react text-[3rem]"></i>
						<i className="fa-brands fa-python text-[3rem]"></i>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Skills;
