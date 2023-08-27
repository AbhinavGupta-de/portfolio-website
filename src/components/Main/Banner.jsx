import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Banner = () => {
	return (
		<div className="flex md:flex-row xsm:flex-col md:h-[50%] md:mt-[190px] md:justify-between">
			<div>
				<Typography sx={{ fontSize: '32px' }}>
					Abhinav Gupta - Frontend Developer
				</Typography>
				<Typography sx={{ color: '#ABB2BF', marginTop: '10px' }}>
					Crafting Engaging User Exerpience using React, Tailwind and more.
				</Typography>
				<div className="flex">
					<a
						href="https://flowcv.com/resume/qtgor8jl3s"
						className="font-semibold text-inherit border-[#27ae60] border-[1px] rounded-3xl items-start overflow-hidden  border-solid mt-5 hidden md:block"
					>
						<spam className="p-3">Download Resume</spam>
						<spam className="bg-[#27ae60] item-center justify-center rounded-3xl p-1">
							<DownloadIcon />
						</spam>
					</a>
				</div>
			</div>
			<div>
				<img src="" alt="banner" />
				<div>Currently learning MERN</div>
			</div>
		</div>
	);
};

export default Banner;
