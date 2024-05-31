import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetProductsByItems } from "@store/cart/cartSlice"
import CartSubtotalPrice from "@components/ecommerce/cartSubtotalPrice/CartSubtotalPrice"
import CartItemList from "@components/ecommerce/CartItemList/CartItemList"
const Cart = () => {

    const dispatch = useAppDispatch()
    const { items, productsFullInfo } = useAppSelector((state) => state.cart)
    useEffect(() => {
        dispatch(actGetProductsByItems());
    }, [dispatch]);

    const products = productsFullInfo.map((el) => ({ ...el, quantity: items[el.id] }))


    return (
        <div>

            <CartItemList products={products} />
            <CartSubtotalPrice />
        </div>
    )
}

export default Cart