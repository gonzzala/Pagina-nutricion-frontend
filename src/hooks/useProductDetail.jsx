import { useEffect, useState } from "react";
import { getProductDetail } from "../api/api";

const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductDetail(productId);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return product;
};

export default useProductDetail;
