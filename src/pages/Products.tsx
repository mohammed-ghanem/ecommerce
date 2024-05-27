import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/ProductsSlice";
import { Container, Row, Col } from "react-bootstrap";
import Product from "@components/ecommerce/product/Product"

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.Products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    // clean product after leaving the page 
    return () => {
      dispatch(productsCleanUp());
    }
  }, [dispatch, params]);


  const productsList =
    records.length > 0
      ? records.map((record) => (
        <Col
          xs={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <Product {...record} />
        </Col>
      ))
      : "there are no products";


  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  )
}

export default Products