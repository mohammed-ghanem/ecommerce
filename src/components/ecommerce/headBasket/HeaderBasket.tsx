import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selector";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./style.module.css"

const { basketContainer, basketQuantity } = styles




const HeaderBasket = () => {

    const cartItems = useAppSelector(getCartTotalQuantitySelector)

 
    return (
        <div className={basketContainer}>
            <Logo title="basketicon" />
            <div className={basketQuantity}>{cartItems}</div>
        </div>
    )
}

export default HeaderBasket