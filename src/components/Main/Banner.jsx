import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Abhinav from '../../assets/images/abhinav.png';

const Banner = () => {
	return (
		<div className="flex lg:flex-row flex-col  lg:justify-between h-2/5">
			<div className="md:mt-[200px]">
				<Typography sx={{ fontSize: '32px' }}>
					Abhinav Gupta -{' '}
					<spam className="text-[#27ae60]">Full Stack Developer</spam>
				</Typography>
				<Typography sx={{ color: '#ABB2BF', marginTop: '10px' }}>
					Versatile Full Stack Engineer: Bridging Frontend and Backend Excellence
				</Typography>
				<Typography sx={{ color: '#ABB2BF', marginTop: '10px' }}>
					Currently advancing my skill in Java Backend Development
				</Typography>
				<div className="flex">
					<a
						href="https://flowcv.com/resume/qtgor8jl3s"
						className="font-semibold text-inherit border-[#27ae60] border-[1px] rounded-3xl items-start overflow-hidden  border-solid mt-5 hidden md:block p-3"
					>
						<spam className="p-3">Download Resume</spam>
						<spam className="bg-[#27ae60] item-center justify-center rounded-3xl p-1 font-light">
							<DownloadIcon />
						</spam>
					</a>
				</div>
			</div>
			<div className="lg:w-2/5 flex flex-col xsm:h-fit xsm:justify-center xsm:items-center">
				{/* Removed the image for now.  */}
				<img src={Abhinav} alt="banner" className="xl:w-3/5 lgd:w-full lg:w-full" />
			</div>
		</div>
	);
};

export default Banner;
