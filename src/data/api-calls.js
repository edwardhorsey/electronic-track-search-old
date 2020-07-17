export const urlDiscogs = (search, key) => `https://api.discogs.com/database/search?q=${search}&token=${key}`;
export const urlYoutube = (search, key) => `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&type=video&q=${search}`;
export const urlMixesDB = (search, key) => `https://www.googleapis.com/customsearch/v1?key=${key}&cx=011544546440637270403%3Argrlx5occ_0&q=${search}`;

export const getRequests = (array, keysArray) => {
  return array.map((el, index) => {
    return {
      title: el,
      url: `https://www.googleapis.com/customsearch/v1?key=${keysArray[index]}&cx=011544546440637270403%3Aqlxjbhczn6i&q=${el}`
    }
  });
}

const uniqByProp_map = prop => arr =>
  Array.from(
    arr.reduce(
        (acc, item) => (
          (item && item[prop] && acc.set(item[prop], item),
          acc)
        ), // using map (preserves ordering)
        new Map()
      ).values()
  );

export const uniqueByUrl = uniqByProp_map('url');