
export const getGifs = async(category, limit) => {

	const url = `https://api.giphy.com/v1/gifs/search?limit=${limit}&q=${encodeURI(category)}&api_key=uer6B7suWkFRo6QkKbnIy6taNySfwt5s`

	const response = await fetch(url);
	const {data} = await response.json();

	const gifs = data.map( img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	});
	return gifs;
};