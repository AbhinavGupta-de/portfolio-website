import {
	AboutMe,
	Banner,
	ComputersCanvas,
	Contact,
	Projects,
	Quote,
	Skills,
} from '../components';

const Home = () => {
	return (
		<div>
			<div className="h-fit mb-10">
				<Banner />
				<div className="h-[600px] flex justify-center items-center my-[-100px] flex-col mb-[60px]">
					<ComputersCanvas />
					<Quote />
				</div>
			</div>
			<div className="h-fit mb-10">
				<Projects />
				<Skills />
			</div>
			{/* TODO Fix the Height here!! */}
			<div className="h-fit mb-10">
				<AboutMe />
				<Contact />
			</div>
		</div>
	);
};

export default Home;
