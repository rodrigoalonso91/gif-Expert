import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory';

describe('Tests in component <AddCategory />', () => { 

	const setCategory = () => {};
	
	test('should show the component correctly', () => { 
		
		expect( render(<AddCategory setCategory={setCategory} />) ).toMatchSnapshot();
	});
	
	test('should value be equals to input change', () => { 

		render(<AddCategory setCategory={setCategory} />)

		const input = screen.getByPlaceholderText( 'Buscar' )
		fireEvent.change( input, { target: { value: 'Hola' } } )
	
		expect( input.getAttribute( 'value' ) ).toBe( 'Hola' )
	})
});