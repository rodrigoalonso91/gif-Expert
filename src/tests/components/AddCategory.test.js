import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory';

describe('Tests in component <AddCategory />', () => { 

	const setCategory = jest.fn();
	
	test('should show the component correctly', () => { 
		expect( render(<AddCategory setCategory={setCategory} />) ).toMatchSnapshot();
	});
	
	test('should value be equals to input change', () => { 

		render(<AddCategory setCategory={setCategory} />)
		const input = screen.getByRole( 'textbox' )
		
		fireEvent.change( input, { target: { value: 'Hola' } } )
	
		expect( input.getAttribute( 'value' ) ).toBe( 'Hola' )
	});

	test('should keep information without changes', () => { 

		render(<AddCategory setCategory={setCategory} />)
		const input = screen.getByRole( 'textbox' )

		fireEvent.submit(input);

		expect( setCategory ).not.toHaveBeenCalled();
	});

	test('should to call setCategory and clean the textbox', () => { 

		render(<AddCategory setCategory={setCategory} />)

		const input = screen.getByRole( 'textbox' )
		fireEvent.change( input, { target: { value: 'Hola' } } )
		fireEvent.submit(input);

		expect( setCategory ).toBeCalled();
		expect( setCategory ).toBeCalledTimes(1);
		expect( setCategory ).toBeCalledWith( expect.any(Function) );
		expect( input.getAttribute( 'value' ) ).toBe('');
	});
});