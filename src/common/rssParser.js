export default (data) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'application/xml');

  const parserError = doc.querySelector('parsererror');
  if (parserError) {
    return 'parserError';
  }

  const title = doc.querySelector('title').textContent;
  const description = doc.querySelector('description').textContent;
  const items = doc.getElementsByTagName('item');
  const itemsArr = Array.from(items).map((item) => ({
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    link: item.querySelector('link').textContent,
  }));

  return {
    title,
    description,
    items: itemsArr,
  };
};
