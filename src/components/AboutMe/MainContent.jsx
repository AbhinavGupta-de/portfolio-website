const MainContent = () => {
	return (
		<div className="flex flex-col lg:flex-row mt-10 justify-center items-center p-5 text-[#bbbdc0]">
			<div className="md:w-3/5 xsm:w-4/5 flex flex-col gap-5 mb-10">
				<div>
					{`I am Abhinav Gupta, a dedicated web developer based in 
					Bengaluru, India, with a strong focus on front-end development.
					 Currently an undergraduate student, I bring a combination of formal 
						education and practical experience to the field.`}
				</div>
				<div>{`	My expertise lies in crafting polished and responsive
				 web applications, with a particular emphasis on creating 
					seamless user interfaces. Proficient in Reactl Tailwind CSS, Material UI and Bootstrap, 
					I have a track record of delivering user-centric and 
					visually engaging web solutions from the ground up.`}</div>
				<div>{`My academic journey has led me to Scaler School of 
				Technology, where I am majoring in Computer Science. 
				This educational foundation has deepened my understanding of 
				software development principles and has allowed me to apply 
				these concepts in real-world scenarios.`}</div>
				<div>
					{`While I excel in front-end development, I am committed to expanding my skill
					 set into full-stack development. Currently, I am immersing myself in the MERN 
						stack (MongoDB, Express.js, React, Node.js) to create comprehensive, end-to-end 
						solutions that encompass both front-end and back-end components.`}
				</div>
				<div>
					{`Apart from web	development, I am also exploring other aspects of the tech industry. 
					I am activetly taking part in competitive programming contests on Codechef and Codeforces.
					 I am also learning about Machine Learning and Data Science.`}
				</div>
			</div>
			<div className="w-2/5">
				<img src="" alt="" />
			</div>
		</div>
	);
};

export default MainContent;
