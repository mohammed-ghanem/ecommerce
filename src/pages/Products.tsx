import Product from "@components/ecommerce/product/Product"
import Loading from "@components/feedback/Loading";
import GridList from "@components/common/GridList/GridList";
import { TProduct } from "@customTypes/sharedProducts";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const { loading, error, productsFullInfo, params } = useProducts()
  return (
    <>
      <Loading loading={loading} error={error}>
        <h1>{params.prefix}</h1>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};
export default Products