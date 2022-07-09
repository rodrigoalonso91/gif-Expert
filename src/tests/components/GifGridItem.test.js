import {render, screen} from '@testing-library/react'
import {GifGridItem} from '../../components/GifGridItem'

describe('Test in GifGridItem', () => { 

	const img = {
		id: 'sBikoeGRyOrK0',
		title: 'guitar shredding GIF',
		url: 'https://media0.giphy.com/media/sBikoeGRyOrK0/giphy.gif?cid=6c30809bl2bahk3vu4bhua3ulsjhiov792cbfylsl6eaukrx&rid=giphy.gif&ct=g'
	}

	test('should show the component correctly', () => {

		expect(render(<GifGridItem key={img.id} {...img}/>)).toMatchSnapshot();
		
	});

	test('should the title be in the p tag', () => { 

		render(<GifGridItem key={img.id} {...img}/>);

		const pTag = screen.getByTestId('p1');

		expect( pTag.textContent.trim() ).toBe(img.title)

	});

	test('should the img tag to have the src and alt values', () => { 

		render(<GifGridItem key={img.id} {...img}/>);

		const imgTag = screen.getByAltText(`${img.title}`);
		const srcValue = imgTag.getAttribute('src');
		const altValue = imgTag.getAttribute('alt');
		
		expect( srcValue ).toBe(img.url);
		expect( altValue ).toBe(img.title);

	});
});