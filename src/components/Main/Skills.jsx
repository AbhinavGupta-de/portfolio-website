// const Skills = () => {
// 	return (
// 		<div>
// 			<div className="flex gap-6 items-center justify-start text-[32px]">
// 				<h1>
// 					<spam className="text-[#27ae60]">#</spam>
// 					Skills
// 				</h1>
// 				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
// 			</div>

// 			<div className="flex">
// 				<div className="flex flex-col gap-5 text-[#bbbdc0] text-[16px] my-10 p-5">
// 					<p>
// 						{`I possess a diverse set of skills that I have acquired over time while working on numerous projects and assignments in different domains.`}
// 					</p>
// 					<ul className="flex flex-col gap-5">
// 						<li>
// 							<spam className="font-bold">Languages: </spam> Java, Python, Javascript,
// 							Typescript
// 						</li>
// 						<li>
// 							<span className="font-bold">Frameworks & Libraries: </span>Java Spring,
// 							Spring Boot, React, Node.js, Express.js, Django, FastAPI, Tailwind CSS
// 						</li>
// 						<li>
// 							<span className="font-bold">Databases: </span>MySQL, MongoDB, PostgreSQL
// 						</li>
// 						<li>
// 							<span className="font-bold">Tools & Technologies: </span>Git, Docker,
// 							Postman, VS Code, IntelliJ IDEA, Eclipse, Jupyter Notebook, GitHub,
// 							BitBucket, Jira, Linux, BashScripting
// 						</li>
// 						<li>
// 							<span className="font-bold"> Fundamentals: </span>Data Structures,
// 							Algorithms, OOP, Networking, Operating Systems, Database Design
// 						</li>
// 					</ul>

// 					<p>
// 						{`I'm continuously expanding my skill set and am currently focusing on
// 					database design, networking and operating systems.`}
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Skills;

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion.js';
import { styles } from '../styles.js';
import { Tilt } from 'react-tilt';

import SectionWrapper from '../hoc/SectionWrapper.jsx';

import html from '../../assets/tech/html.png';
import css from '../../assets/tech/css.png';
import javascript from '../../assets/tech/javascript.png';
import typescript from '../../assets/tech/typescript.png';
import reactjs from '../../assets/tech/reactjs.png';
import redux from '../../assets/tech/redux.png';
import tailwind from '../../assets/tech/tailwind.png';
import nodejs from '../../assets/tech/nodejs.png';
import mongodb from '../../assets/tech/mongodb.png';
import threejs from '../../assets/tech/threejs.svg';
import git from '../../assets/tech/git.png';
import figma from '../../assets/tech/figma.png';
import docker from '../../assets/tech/docker.png';

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Skills</p>
				<h2 className={styles.sectionHeadText}>Technologies</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className={'mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]'}
			>
				Following are the Tech stacks I have experience working with. I may not be
				an expert in these but, I can learn and I have also built some projects
				showcasing my familiarity with these technologies
			</motion.p>

			<div className={'mt-20 flex flex-wrap gap-5 max-w-3xl'}>
				{technologies.map((tech, index) => (
					<TechCard key={tech.name} index={index} {...tech} />
				))}
			</div>
		</>
	);
};

const TechCard = ({ index, name, icon }) => (
	<Tilt>
		<motion.div
			variants={fadeIn('top', 'spring', index * 0.5, 0.75)}
			className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-[1px] rounded-full shadow-card"
			title={name}
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className={
					'h-16 w-16 bg-tertiary rounded-full items-center flex flex-col justify-evenly '
				}
			>
				<img src={icon} className={'w-12 h-12 object-contain'} alt={name} />
			</div>
		</motion.div>
	</Tilt>
);
const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

export default SectionWrapper(Tech, 'tech');
