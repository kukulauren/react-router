import React, { useEffect, useState } from "react";

const useFetch = (fetFun,arg) => {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    ( async () => {
      try {
        const data = await fetFun(arg);
        setData((pre)=>{
          return {
            loading: false,
            error: null,
            data: data,
          };
        });
      } catch (error) {
        setData((pre)=>{
          return {
            loading: false,
            error: error.message,
            data: null,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
