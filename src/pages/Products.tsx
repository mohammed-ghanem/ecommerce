import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/ProductsSlice";
import Product from "@components/ecommerce/product/Product"
import Loading from "@components/feedback/Loading";
import GridList from "@components/common/GridList/GridList";
import { TProduct } from "@customTypes/sharedProducts";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const wishListItemsId = useAppSelector((state) => state.Wishlist.itemsId)


  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsFullInfo = records.map((el) => ({
    ...el,
    isLiked: wishListItemsId.includes(el.id),
  }));

  return (
    <>
      <Loading loading={loading} error={error}>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};


export default Products