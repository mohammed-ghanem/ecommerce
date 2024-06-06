import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react"
import Category from "@components/ecommerce/category/Category"
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories, categoriesCleanUp } from "@store/categories/CategoriesSlice";

import Loading from "@components/feedback/Loading";



const Categories = () => {
  const dispatch = useAppDispatch()
  const { loading, error, record } = useAppSelector((state) => state.categories)

  useEffect(() => {
    dispatch(actGetCategories())
    return () => {
      dispatch(categoriesCleanUp())
    }
  }, [dispatch])

  const categoriesList = record.length > 0 ? record.map((el) => (
    <Col key={el.id} xl={3} lg={4} md={6} sm={6} xs={12}>
      <Category {...el} />
    </Col>
  )) : <div> there is no categories </div>

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <Row>
          {categoriesList}
        </Row>
      </Loading>
    </Container>
  )
}

export default Categories