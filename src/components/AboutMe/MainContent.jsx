import Abhinav from '../../assets/images/test.png';

const MainContent = () => {
	return (
		<div className="flex flex-col lg:flex-row	justify-center items-center text-[#bbbdc0]">
			<div className="md:w-3/5 xsm:w-full flex flex-col gap-5 mb-10">
				<div>
					{`I am Abhinav Gupta, a dedicated software engineering student from Bengaluru, India, with a strong focus on full-stack web development. As an undergraduate at Scaler School of Technology, I bring a blend of formal education and hands-on experience to the field. My passion lies in crafting polished and responsive web applications, seamlessly integrating front-end and back-end components using technologies like Java, JavaScript, React, Node.js, and various databases.`}
				</div>
				<div>{`Despite being early in my career, I have already gained proficiency in a range of skills, including Java, JavaScript frameworks, HTML, CSS, Git, and database management systems. I am always eager to learn new technologies and explore diverse areas of the tech industry, such as Data Analysis, Machine Learning, and Artificial Intelligence. Currently, I am learning Java Backend Development and contributing to related projects.`}</div>
				<div>{`In addition to my technical skills, I have actively participated in competitive programming competitions, hackathons, and open-source projects, honing my problem-solving abilities and collaborative skills. I am the President of the Open Source Club at my college and contribute to non-profit organizations like The Scientific Teen and initiatives like Girl Script Summer of Code and Social Summer of Code.`}</div>
				<div>{`I am open to new opportunities and challenges. I am actively seeking internships and job opportunities in the field of software development and am also open to freelance work. `}</div>
			</div>
			<div className="md:w-2/5 xsm:w-full">
				<img src={Abhinav} alt="" />
			</div>
		</div>
	);
};

export default MainContent;
