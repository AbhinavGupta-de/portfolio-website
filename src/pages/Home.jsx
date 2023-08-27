import {
	AboutMe,
	Banner,
	Contact,
	Projects,
	Quote,
	Skills,
} from '../components';

const Home = () => {
	return (
		<div className="">
			<div className="h-screen">
				<Banner />
				<Quote />
			</div>
			<div className="h-screen">
				<Projects />
				<Skills />
			</div>
			<div className="h-screen">
				<AboutMe />
				<Contact />
			</div>
		</div>
	);
};

export default Home;
