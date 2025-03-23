import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Loader from './Loader'

const BookSearch = () => {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)
	const [books, setBooks] = useState([])
	const [bookName, setBookName] = useState('')

	// Показываем анимацию загрузки
	useEffect(() => {
		const loaderTimer = setTimeout(() => setLoading(false), 1000)
		return () => clearTimeout(loaderTimer)
	}, [])

	const searchBooks = async () => {
		setLoading(true)

		const url = `https://openlibrary.org/search.json?q=${bookName}`
		const response = await axios.get(url)

		if (response.status === 200) {
			setBooks(response.data?.docs)
			setLoading(false)
		} else {
			setError('Ошибка получения книг')
			setLoading(false)
		}
	}

	const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		searchBooks()
		setBookName('')
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setBookName(e.target.value)

	if (loading) return <Loader />
	if (error) return <p>Error...{error}</p>

	return (
		<div>
			<form>
				<label htmlFor=''>
					<input
						required
						value={bookName}
						name='bookName'
						onChange={handleChange}
						type='text'
						placeholder='Enter book name'
						className='w-full bg-blue-700 p-3 rounded-sm shadow-md active:border-0 text-white'
					/>
				</label>
				<button
					onClick={handleSubmit}
					className='mt-10 bg-blue-400 p-3 w-full rounded-md text-white hover:bg-blue-500 transition-colors duration-300 cursor-pointer hover:shadow-md'
				>
					Search
				</button>
			</form>
		</div>
	)
}

export default BookSearch
