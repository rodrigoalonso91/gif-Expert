import { renderHook } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Testing on useFetchGifs', () => { 
	
	test('should return initial state', () => {

		const { result } = renderHook( () => useFetchGifs( 'Game of thrones', 5 ) )
		
		console.log(result)

	})
})