export const getMarketplace = async () => {
  const url = "https://itx-frontend-test.onrender.com/api/product";
  const resp = await fetch(url);
  return await resp.json();
};
