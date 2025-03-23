import { Footer, Header, BookSearch } from './components'

const App = () => {
	return (
		<>
			<Header />
			<main className='container m-auto pt-10'>
				<BookSearch />
			</main>
			<Footer />
		</>
	)
}

export default App
