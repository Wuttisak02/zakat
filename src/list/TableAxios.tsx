import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
}

const TableAxios: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const endpoint = "https://fakestoreapi.com/products";

  const getData = async () => {
    try {
      const response = await axios.get<Product[]>(endpoint);
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "title",
      label: "TITLE",
    },
    {
      name: "price",
      label: "PRICE",
    },
  ];

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MUIDataTable
          title={"Show data with Axios"}
          data={products}
          columns={columns}
        />
      )}
    </>
  );
};

export default TableAxios;
