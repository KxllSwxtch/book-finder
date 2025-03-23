const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className='fixed bottom-0 w-full bg-blue-700 text-white p-6'>
			<h4 className='text-center'>Copyright@killswxtchdev {currentYear}</h4>
		</div>
	)
}

export default Footer
