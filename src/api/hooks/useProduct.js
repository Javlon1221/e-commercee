import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useProduct = () => {
    const getProduct = (params) => useQuery({
        queryKey: ["product", params],
        queryFn: ()=> api.get("/products", {params})
    })

    const searchProduct = (searchTerm) => {
        return useQuery({
        queryKey: ["search", searchTerm],
        queryFn: () => api.get("/products/search", { params: { q: searchTerm } }).then(res => res.data),
        enabled: !!searchTerm,
        });
    };

    

    

    return {getProduct, searchProduct}
}