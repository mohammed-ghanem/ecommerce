import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@store/hooks"
import { actGetWishlist, wishlistproductsFullInfoCleanUp } from "@store/whisList/WishlistSlice"
import GridList from "@components/common/GridList/GridList"
import Product from "@components/ecommerce/product/Product"
import Loading from "@components/feedback/Loading"
import { TProduct } from "@customTypes/sharedProducts"



const WishList = () => {

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

    return (
        <Loading loading={loading} error={error}>
            <GridList<TProduct>
                records={records}
                renderItem={(record) => <Product {...record} />}
            />
        </Loading>
    )
}

export default WishList