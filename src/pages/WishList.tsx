import GridList from "@components/common/GridList/GridList"
import Product from "@components/ecommerce/product/Product"
import Loading from "@components/feedback/Loading"
import { TProduct } from "@customTypes/sharedProducts"
import useWishlist from "@hooks/useWishlist"



const WishList = () => {

    const { loading, error, records } = useWishlist()


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