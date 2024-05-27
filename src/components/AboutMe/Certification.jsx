const Certification = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Certifications
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
			</div>

			<div className="flex">
				<div className="flex flex-col gap-5 text-[#bbbdc0] text-[16px] my-10 p-5">
					<div className="flex flex-col md:flex-row gap-2 w-full items-center justify-center">
						<div className="gap-2 p-5 border-2 border-[#] flex flex-col md:w-1/2 w-full">
							<ul className="flex flex-col gap-5">
								<li>
									<spam className="font-bold">Certification: </spam>Java Spring Framework
									6 with Spring Boot 3 Java Spring Framework 6 with Spring Boot 3
								</li>
								<li>
									<span className="font-bold">By: </span>Navin Reddy (Telusko)
								</li>
								<li>
									<span className="font-bold">Year of Completion: </span> May 2024
								</li>
							</ul>
						</div>

						<div className="gap-2 p-5 border-2 flex flex-col md:w-1/2 w-full">
							<ul className="flex flex-col gap-5">
								<li>
									<span className="font-bold">Certification: </span> Full Stack
									Development Course | MERN Stack
								</li>
								<li>
									<span className="font-bold">By: </span> Oak Academy
								</li>
								<li>
									<span className="font-bold">Year of Completion: </span> October 2023
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-2 w-full justify-center items-center">
						<div className="gap-2 p-5 border-2 flex flex-col md:w-1/2 w-full">
							<ul className="flex flex-col gap-5">
								<li>
									<span className="font-bold">Certification: </span> Front End
									Development Libraries
								</li>
								<li>
									<span className="font-bold">By: </span> Freecodecamp
								</li>
								<li>
									<span className="font-bold">Year of Completion: </span> November 2023
								</li>
							</ul>
						</div>

						<div className="gap-2 p-5 border-2 flex flex-col w-full md:w-1/2">
							<ul className="flex flex-col gap-5">
								<li>
									<span className="font-bold">Certification: </span> Data Structures and
									Algorithms
								</li>
								<li>
									<span className="font-bold">By: </span> HackerRank
								</li>
								<li>
									<span className="font-bold">Year of Completion: </span> December 2023
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certification;
