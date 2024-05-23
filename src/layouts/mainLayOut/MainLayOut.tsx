import { Container } from "react-bootstrap";
import styles from './style.module.css'
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";


const { container, wrapper } = styles


const MainLayOut = () => {

  return (
    <Container className={container}>
      <Header/>
      <div className={wrapper}></div>
      <Footer/>
    </Container>
  )
}

export default MainLayOut