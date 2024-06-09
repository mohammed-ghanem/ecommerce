import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@store/hooks"
import { actGetWishlist, wishlistproductsFullInfoCleanUp } from "@store/whisList/WishlistSlice"

const useWishlist = () => {
    const dispatch = useAppDispatch();
    const { loading, error, productsFullInfo } = useAppSelector(
        (state) => state.Wishlist
    );
    const cartItems = useAppSelector((state) => state.cart.items);
    useEffect(() => {
        dispatch(actGetWishlist());
        return () => {
            dispatch(wishlistproductsFullInfoCleanUp());
        };
    }, [dispatch]);

    const records = productsFullInfo.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLiked: true,
    }));

    return { loading, error, records }
}

export default useWishlist