const Education = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Education
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
			</div>

			<div className="flex">
				<div className="flex flex-col gap-5 text-[#bbbdc0] text-[16px] my-10 p-5">
					<div className="gap-2 p-5 border-2 border-[#] flex flex-col">
						<p>
							{`I am currently pursuing a Bachelor's degree in Computer Science from
						BITS Pilani. I am a first year student and my expected graduation year is 2026. `}
						</p>
						<ul className="flex flex-col gap-5">
							<li>
								<spam className="font-bold">Degree: </spam> Bachelor of Science
							</li>
							<li>
								<span className="font-bold">Major: </span> Computer Science
							</li>
							<li>
								<span className="font-bold">Institution: </span> BITS Pilani
							</li>
							<li>
								<span className="font-bold">Year of Graduation: </span> 2026
							</li>
							<li>
								<span className="font-bold">CGPA: </span> 9.0/10.0
							</li>
						</ul>
					</div>

					<div className="gap-2 p-5 border-2 flex flex-col">
						<p>
							{`I am also doing a Masters degree in Computer Science from Scaler School of Technology in association with WOLF University. `}
						</p>

						<ul className="flex flex-col gap-5">
							<li>
								<span className="font-bold">Degree: </span> Bachelors & Masters of
								Science
							</li>
							<li>
								<span className="font-bold">Major: </span> Computer Science
							</li>
							<li>
								<span className="font-bold">Institution: </span> Scaler School of
								Technology
							</li>
							<li>
								<span className="font-bold">Year of Graduation: </span> 2027
							</li>
							<li>
								<span className="font-bold">CGPA: </span> 9.5/10.0
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
