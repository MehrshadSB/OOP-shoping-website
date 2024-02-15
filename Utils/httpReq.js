export { fetchData };

const fetchData = async (URL) => {
  const res = await fetch(URL);
  const json = await res.json();
  return json;
};
