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
