import PropTypes from 'prop-types';
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category, limit = 10}) => {

	const {data: images, loading} = useFetchGifs(category, limit)
 
    return (
		<>
			<h3 className="animate__animated animate__fadeIn">{category}</h3>	
			{loading && <p className="animate__animated animate__flash">Loading...</p>}
			<ol className='container'>
				{
					images.map( img  => (
						<GifGridItem
							key={img.id}
							{...img}
						/>
					))
				}
			</ol>
		</>
    )
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}