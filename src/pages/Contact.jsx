import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
	return (
		<div className="h-screen">
			<div className="mb-10">
				<div className="text-[32px]">
					<spam className="text-[#27ae60]">/</spam>about-me
				</div>
				<div className="mt-2">{`Let's Connect`}</div>
			</div>
			<div className="flex justify-between text-[16px]">
				<div className="md:w-2/5">
					{`I'm interested in internship opportunities and would love to hear about
				 them. However, if you have other requestes or questions, don't hesitate 
					to contact me!`}
				</div>
				<div className="md:w-2/5 flex flex-col justify-between items-center">
					{`You can reach me at: `}
					<div>
						<a href="mailto:abhinav.gupta@outlook.de">
							<spam className="flex gap-1">
								<MailOutlineIcon />
								mail
							</spam>
						</a>
					</div>
					<div>
						<FontAwesomeIcon icon="fa-brands fa-discord" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
