
import Loading from "@components/feedback/Loading";
import CartItemList from "@components/ecommerce/CartItemList/CartItemList";
import CartSubtotalPrice from "@components/ecommerce/cartSubtotalPrice/CartSubtotalPrice";
import useCart from "@hooks/useCart";



const Cart = () => {
  const { loading, error, products, removeItemHandler, changeQuantityHandler } = useCart()
  return (
    <>
      <Loading loading={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Your Cart is empty"
        )}
      </Loading>
    </>
  );
};

export default Cart;