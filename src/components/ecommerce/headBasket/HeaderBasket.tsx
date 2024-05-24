import Logo from "@assets/svg/cart.svg?react";
import styles from "./style.module.css"

const { basketContainer, basketQuantity } = styles




const HeaderBasket = () => {
    return (
        <div className={basketContainer}>
            <Logo title="basketicon"/>
            <div className={basketQuantity}>0</div>
        </div>
    )
}

export default HeaderBasket