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
			<div className="flex md:flex-row xsm:flex-col gap-5 mt-5 p-5">
				<div className="md:w-3/5">
					<div className="text-[#6f7580] text-[15px]">
						{`I'm interested in internship or remote job opportunities(including
				freelancing) and would love to hear from you!`}
						<br></br>
					</div>

					<div className="text-[#6f7580] xsm:mt-5">
						{`However, if you have other
				requests or questions, don't hesitate to contact me!`}
					</div>
				</div>

				<div className="flex flex-col items-center w-full gap-3">
					<div>Message me here</div>
					<div className="flex gap-3">
						<MailOutlineIcon />
						<a href="mailto:abhinav.gupta@outlook.de">abhinav</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
