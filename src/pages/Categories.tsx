import { Container, Row } from "react-bootstrap";
import Loading from "@components/feedback/Loading";
import useCategories from "@hooks/useCategories";
import { Col } from "react-bootstrap";
import Category from "@components/ecommerce/category/Category"

const Categories = () => {

  const { loading, error, record } = useCategories()

  const categoriesList = record.length > 0 ?
    record.map((el) => (
      <Col key={el.id} xl={3} lg={4} md={6} sm={6} xs={12}>
        <Category {...el} />
      </Col>
    )) : <div>there is no gategories</div>

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