import {render, screen} from '@testing-library/react'
import {GifGridItem} from '../../components/GifGridItem'

describe('Test in GifGridItem', () => { 

	test('should show the component correctly', () => {  

		const img = {
			id: 'sBikoeGRyOrK0',
			title: 'guitar shredding GIF',
			url: 'https://media0.giphy.com/media/sBikoeGRyOrK0/giphy.gif?cid=6c30809bl2bahk3vu4bhua3ulsjhiov792cbfylsl6eaukrx&rid=giphy.gif&ct=g'
		}

		expect(render(<GifGridItem key={img.id} {...img}/>)).toMatchSnapshot();
	});
});