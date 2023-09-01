import Pic from '../../assets/images/abhinav.png';
import { Link } from 'react-router-dom';

const AboutMe = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					About Me
				</h1>
				<hr className="xsm:w-1/5 md:w-2/5 border-[1.5px] border-solid border-[#27ae60] md:mt-[8px]"></hr>
			</div>
			<div className="md:flex justify-between">
				<div className="flex gap-3 flex-col md:w-3/5 my-10 p-5 text-[#bbbdc0] text-[16px] xsm:w-full">
					<div>{`Hello, I'm Abhinav Gupta!`}</div>
					<div>{`I'm currently a undergraduate Computer Science student in Bangalore, India.
				I can develop responsive websites from scratch and raise them into modren user-friendly web expereinces.`}</div>
					<div>{`I am currently leanring MERN Stack. Diving deep in the world of web dev with the latest technologies 
				including Typescript, Tailwind CSS, React, Next JS, Express JS, Mongo DB and much more.`}</div>

					<Link to="/about">
						<div className="flex justify-start items-center gap-2 border border-solid border-[#27ae60] p-[0.30rem] w-fit mt-8">
							Read More <i className="fa-sharp fa-solid fa-arrow-right"></i>
						</div>
					</Link>
				</div>
				<div className="hidden w-2/5 h-2/5 md:flex justify-end">
					{/* Removed the image for now */}
					<img src={''} alt="" className="w-2/4" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
