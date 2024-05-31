import { TProduct } from "@customTypes/sharedProducts";
import CartItems from "@components/ecommerce/cartItem/CartItems"


type CartItemListProps = {
    products: TProduct[];
    changeQuantityHandler: (id: number, quantity: number) => void;
    removeItemHandler: (id: number) => void;

};

const CartItemList = ({ products, changeQuantityHandler, removeItemHandler }: CartItemListProps) => {
    const renderList = products.map((el) => (
        <CartItems
            key={el.id}
            {...el}
            changeQuantityHandler={changeQuantityHandler}
            removeItemHandler={removeItemHandler}
    />
    ));

    return <div>{renderList}</div>;
};

export default CartItemList;