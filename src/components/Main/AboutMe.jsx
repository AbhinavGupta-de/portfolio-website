import Pic from '../../assets/images/secondPic.png';
import { Link } from 'react-router-dom';

const AboutMe = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					About Me
				</h1>
				<hr className="w-1/5 md:w-2/5 border-[1.5px] border-solid border-[#27ae60] md:mt-[8px]"></hr>
			</div>
			<div className="md:flex justify-between">
				<div className="flex gap-3 flex-col md:w-3/5 my-10 p-5 text-[#bbbdc0] text-[16px] w-full">
					<div>{`Hello, I'm Abhinav Gupta!`}</div>
					<div>{`I'm currently a undergraduate Computer Science student in Bangalore, India.
				 I can create full stack applications with beautiful UI and database connectivity.`}</div>
					<div>{`I am familiar with a lot of technologies but I love to work in Java as a backend developer. However I also tolerate Javascript and Python.`}</div>

					<Link to="/about">
						<div className="flex justify-start items-center gap-2 border border-solid border-[#27ae60] p-[0.30rem] w-fit mt-8">
							Read More <i className="fa-sharp fa-solid fa-arrow-right"></i>
						</div>
					</Link>
				</div>
				<div className="hidden w-2/5 h-2/5 md:flex justify-end">
					{/* Removed the image for now */}
					<img src={Pic} alt="" className="w-2/4" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
