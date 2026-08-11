import { fetchProducts } from "../mock/mockApi";

export async function getProducts(apiMode) {
  try {
    const response = await fetchProducts(apiMode);

    return response;
  } catch (error) {
    throw error;
  }
}
