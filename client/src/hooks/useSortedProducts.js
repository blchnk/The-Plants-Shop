import {useMemo} from "react";

export function useSortedProducts(products, sortParams) {
    return useMemo(() => {
        if (sortParams) {
            if (sortParams.type === 'ascending') {
                return [...products].sort((a, b) => a.price - b.price)
            }
            if (sortParams.type === 'descending') {
                return [...products].sort((a, b) => b.price - a.price)
            }
        }
        return products;
    }, [sortParams, products]);
}
