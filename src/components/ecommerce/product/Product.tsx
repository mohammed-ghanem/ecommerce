import { useState, useEffect } from "react";
import { TProduct } from "@customTypes/sharedProducts";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import Like from '@assets/svg/like.svg?react'
import LikeFill from '@assets/svg/like-fill.svg?react'
import { actLikeToggle } from "@store/whisList/WishlistSlice";
import { Button, Spinner } from "react-bootstrap";
import styles from './style.module.css'

const { product, productImg, wishlistBtn } = styles;

const Product = ({ id, title, img, price, isLiked }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);

  };

  const likeToggleHandler = () => {
    setIsLoading(true)
    dispatch(actLikeToggle(id))
      .unwrap()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }



  return (
    <div className={product}>
      <div className={wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? (
          <Spinner animation="border" size="sm" variant="primary" />
        ) : isLiked ? (
          <LikeFill />
        ) : (
          <Like />
        )}

      </div>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <Button
        onClick={addToCartHandler}
        disabled={isBtnDisabled}
        variant="info"
        style={{ color: "white" }}>
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>

    </div>
  )
}

export default Product