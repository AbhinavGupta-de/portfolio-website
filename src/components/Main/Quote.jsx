const Quote = () => {
	return (
		<div className="my-10 flex flex-col items-center">
			<h1 className="text-[24px] font-bold justify-center items-center  border border-solid border-[#787c8a] p-3 w-fit">
				{`Talk is cheap. Show me the code.`}
			</h1>

			<h1 className="text-[24px] font-bold text-right justify-end items-end  text-[#a4a7ac]">
				- Linus Torvalds
			</h1>
		</div>
	);
};

export default Quote;
