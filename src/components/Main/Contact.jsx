import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
	return (
		<div>
			<div className="flex gap-6 items-center justify-start text-[32px]">
				<h1>
					<spam className="text-[#27ae60]">#</spam>
					Contact
				</h1>
				<hr className="w-1/5 border-[1.5px] border-solid border-[#27ae60] mt-[8px]"></hr>
			</div>
			<div className="flex md:flex-row xsm:flex-col gap-5 mt-5 p-5 justify-between">
				<div className="md:w-2/5">
					<div className="text-[#bbbdc0] text-[16px]">
						{`I'm interested in internships and job opportunities and would love to hear about them.`}
						<br></br>
					</div>

					<div className="text-[#bbbdc0] mt-5">
						{`However, if you have other
				requests or questions, don't hesitate to contact me!`}
					</div>
				</div>

				<div className="flex flex-col items-center gap-3 border-2 border-solid md:w-1/5 xsm:p-5">
					<div>Message me here</div>
					<div className="flex gap-3">
						<MailOutlineIcon />
						<a href="mailto:abhinav.gupta@outlook.de">E-Mail</a>
					</div>
					<div className="flex gap-3 items-center justify-center">
						<i className="fa-brands fa-discord"></i>
						abhi_
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
