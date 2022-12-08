import { useEffect, useState } from "react";
export interface ProductsType {
  key: string;
  sku: string;
  wix_title: string;
  amazon_title: string;
  image: string;
}
function useProducts() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getProducts = () => {
    setIsLoading(true);
    fetch("http://192.168.4.67/connector/product/getRefineProducts", {
      headers: {
        appCode: "eyJ3aXgiOiJ3aXhfYndwIn0=",
        appTag: "wix_bwp",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMxNWYxMGM5OTE4MDYwODVmMGU4Y2M5Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4NTU4NTAyLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNWNiZWE2NTc3ZTE3NDAyZjBkNDBkMiJ9.LAdch5ZrP2fPqD4XzEuAS2z2_bqI1lEib0q5ymjGbVHlYEXrU2K9E2eFJ1YMunB5YFEAY_dp1EM69gZGeZ9KMFHjLuj72fG-7GuxqaFa4vUR14ApIlNnDuBo_xFtPpqL6s_Q0Xc4ZB5bYzf79FwWNJytKilmiAxMV4uwR4jECfcbgfN5lwrIMw8bX-14liDD0vy0pMSv1cbmUmlZNjRYmqS_4M1bbqau68pqEGtaL4VLPzoDeWlaO4r212HT9eX_GPhKiNi-p3MnNh2kiVPPAed931FHw0V5SblV5PLjZzEdq0qVDByB9yHUOIl6IpJbiKPFfH5EYzmLz7DcIDMTOA`,
        "Ced-Source-Id": "257",
        "Ced-Source-Name": "wix",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.data.rows);
        const newData = data?.data?.rows?.map((row: any) => {
          return {
            key: row?.source_product_id,
            sku: row?.items[0]?.sku,
            wix_title: row?.items[0]?.title,
            amazon_title: row?.items[0]?.title,
            image: row?.items[0]?.main_image,
          };
        });

        setProducts(newData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoading };
}

export default useProducts;
