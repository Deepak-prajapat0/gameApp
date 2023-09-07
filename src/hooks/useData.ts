// import { AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../service/api-client";



// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);

//     let timer =0;
//     const debounce=(fn:any,delay:number)=>{
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(fn,delay)
//     }

//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true);
//        debounce(()=>{
//            apiClient
//                .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
//                .then((res) => {
//                    setData(res.data.results);
//                    setLoading(false);
//                })
//                .catch((err) => {
//                    if (err instanceof CanceledError) return;
//                    setError(err.message)
//                    setLoading(false);
//                });
//        },500)

//         return () => controller.abort();
//     }, deps ? [...deps] : []);

//     return { data, error, isLoading };
// };

// export default useData;