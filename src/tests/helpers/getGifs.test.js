import { getGifs } from "../../helpers/getGifs";

describe('getGifs tests', () => {

	test('should return n elements', async () => {

		const limit = 10;
		const category = 'guitars';

		const gifs = await getGifs( category, limit );
		
		expect( gifs.length ).toBe( limit );
		expect( gifs[0] ).toEqual( {
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String)
		} );
	});

	test('should return an empty array when category is undefined', async () => { 

		const category = '';

		const gifs = await getGifs( category );

		expect( gifs.length ).toBe( 0 );
	});

	test('should return default limit when limit is undefined', async () => { 

		const category = 'cats'
		const defaultLimit = 5

		const gifs = await getGifs( category );

		expect( gifs.length ).toBe( defaultLimit );
	});
});