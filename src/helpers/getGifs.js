export const getGifs = async (category) => {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=5&api_key=wUYcXQkzCJcCnSC27AJ22ilP6UpicLxr`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    console.error(error);
  }
};
