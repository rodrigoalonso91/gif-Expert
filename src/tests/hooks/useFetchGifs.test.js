import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Testing on useFetchGifs', () => { 
	
	test('should return initial state', () => {

		const { result } = renderHook( () => useFetchGifs( 'Game of thrones', 5 ) );

		const { data, loading } = result.current;

		expect( data.length ).toBe(0);
		expect( loading ).toBeTruthy();
	});

	test('should return an array of images and loading in false', async () => { 

		const { result } = renderHook( () => useFetchGifs( 'Game of thrones', 5 ) );

		await waitFor( () => expect( result.current.data.length ).toBeGreaterThan(0), {timeout:2000} );
		
		const { data, loading } = result.current;

		expect( data.length ).toBeGreaterThan(0);
		expect( loading ).toBeFalsy();
	})
})