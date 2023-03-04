export const getProductById = async (id) => {
  const url = `https://itx-frontend-test.onrender.com/api/product/${id}`;
  const resp = await fetch(url);
  return await resp.json();
};
