import { TProduct } from "@customTypes/sharedProducts";
import CartItems from "@components/ecommerce/cartItem/CartItems"


type CartItemListProps = {
    products: TProduct[];

};

const CartItemList = ({ products }: CartItemListProps) => {
    const renderList = products.map((el) => (
        <CartItems
            key={el.id}
            {...el}

        />
    ));

    return <div>{renderList}</div>;
};

export default CartItemList;