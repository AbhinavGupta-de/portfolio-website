const SkillsAbout = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Skills
				</h1>
			</div>

			<div className="flex">
				<div className="flex flex-col gap-5 md:w-3/5 text-[#bbbdc0] text-[16px] my-10 p-5">
					<p>
						{`I possess a diverse set of skills that enable me to create innovative and
					user-friendly web applications. Here's a glimpse of my expertise:`}
					</p>
					<ul className="flex flex-col gap-5">
						<li>
							<strong className="text-white">Advanced Web Development:</strong>{' '}
							Proficient in crafting dynamic and responsive web experiences using HTML,
							CSS, and JavaScript.
						</li>
						<li>
							<strong className="text-white">Frontend Frameworks:</strong> Skilled in
							utilizing modern frontend libraries and frameworks such as React for
							building interactive and efficient UIs.
						</li>
						<li>
							<strong className="text-white">UI Frameworks:</strong> Experienced in
							enhancing productivity and design aesthetics by incorporating frameworks
							like Tailwind CSS, Bootstrap, Material UI, and Semantic UI.
						</li>
						<li>
							<strong className="text-white">Programming Languages:</strong> Skilled in
							programming languages including Java, Python, and C++.
						</li>
						<li>
							<strong className="text-white">Version Control:</strong> Proficient in
							using Git for efficient code management and collaboration.
						</li>
					</ul>

					<p>
						{`I'm continuously expanding my skill set and am currently focusing on
					mastering backend development using Node.js, Express.js, and MongoDB to
					create high-performance applications.`}
					</p>
					<p>
						{`I also have some prior experinece in working with Spring Boot, Django, MySQL, MongoDB, and Firebase.`}
					</p>
				</div>
				<div className="md:w-2/5 hidden md:flex p-2 gap-[1.5rem] flex-wrap justify-center">
					<div className="flex flex-col items-center justify-center p-2 gap-10">
						<i className="fa-brands fa-html5 text-[3rem]"></i>
						<i className="fa-brands fa-css3-alt text-[3rem]"></i>
						<i className="fa-brands fa-js text-[3rem]"></i>
						<i className="fa-brands fa-java text-[3rem]"></i>
						<i className="fa-brands fa-react text-[3rem]"></i>
						<i className="fa-brands fa-python text-[3rem]"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsAbout;
