import { render, screen } from '@testing-library/react'
import { GifExpertApp } from "../GifExpertApp"

describe('Testing <GifExpertApp />', () => { 

	test('should to contain the app title', () => { 

		render( <GifExpertApp /> );

		const title = screen.getByRole('heading');

		expect( title.textContent ).toEqual('GifExpertApp')
	});
});