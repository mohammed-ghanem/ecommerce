import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/ProductsSlice";

const useProducts = () => {

    const params = useParams();
    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector((state) => state.products);
    const wishListItemsId = useAppSelector((state) => state.Wishlist.itemsId)
    useEffect(() => {
        dispatch(actGetProductsByCatPrefix(params.prefix as string));
        return () => {
            dispatch(productsCleanUp());
        };
    }, [dispatch, params]);

    const productsFullInfo = records.map((el) => ({
        ...el,
        isLiked: wishListItemsId.includes(el.id),
    }));
    return { loading, params, error, productsFullInfo }
}
export default useProducts