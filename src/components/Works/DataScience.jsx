import ProjectCard from '../Main/ProjectCard';

const DataScience = () => {
	return (
		<div className="mt-10">
			<div className="text-[32px]">
				<spam className="text-[#27ae60]">#</spam>data science projects
			</div>

			<div className="flex gap-5 xsm:flex-col mt-10 p-5">
				<ProjectCard
					imgSrc=""
					skills="Python Pandas Numpy Matplotlib Seaborn"
					title="Aerofit | Data Analysis"
					description="I analyzed customer data for AeroFit's treadmill products, creating customer profiles and constructing two-way contingency tables to understand the relationship between customer characteristics and treadmill preferences. I provided insights to optimize marketing strategies."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/AerofitCaseStudy"
				/>
				<ProjectCard
					imgSrc=""
					skills="Python Datacleaning DataVisualization DataAnalysis"
					title="Datawars | Data Analysis"
					description="While learning data analysis, I worked on some datasets to practice my skills. This project includes data cleaning, data visualization, and data analysis."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/pandasPractice"
				/>
				<ProjectCard
					imgSrc=""
					skills="Python Datacleaning DataVisualization DataAnalysis HypothesisTesting"
					title="Yulu | Data Analysis"
					description="This project is a data analysis project on Yulu, a bike-sharing company in India. The project includes data cleaning, data visualization, data analysis, and hypothesis testing."
					hostLink=""
					githubLink="https://github.com/AbhinavGupta-de/Yulu-CaseStudy"
				/>
			</div>
		</div>
	);
};

export default DataScience;
