import React from 'react'
import {getByText, render, screen} from '@testing-library/react'
import {GifGrid} from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing on <GifGrid />', () => { 

	const category = 'dogs';
	const limit = 10;

	const gifs = [{
		id: 'ABC',
		title: 'Titulo Gifs',
		url: 'https://localhost/cualquier/cosa.jpg'
	},
	{
		id: '123',
		title: 'Titulo Gifs',
		url: 'https://localhost/cualquier/cosa.jpg'
	}];

	test('should show <GifGrid /> correctly', () => { 

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		expect(render(<GifGrid category={category} limit={limit} />)).toMatchSnapshot()
	});

	test('should to show loading message', () => { 

		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});

		render(<GifGrid category={category} limit={limit} />)

		expect(screen.getByText('Loading...')).toBeTruthy();
	})

	test('should to hide loading message', () => { 

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		render(<GifGrid category={category} limit={limit} />)

		expect(screen.queryByText('Loading...')).toBeNull()
	});

	test('should to render all gifts', () => { 

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		render(<GifGrid category={category} limit={limit} />)

		expect(screen.queryByText('Loading...')).toBeNull()
		expect(screen.getAllByRole('img').length).toBe(gifs.length)
	});

	test('should to show the category', () => {

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		render(<GifGrid category={category} limit={limit} />)
		expect(screen.getByText(category)).toBeTruthy();
	})
})