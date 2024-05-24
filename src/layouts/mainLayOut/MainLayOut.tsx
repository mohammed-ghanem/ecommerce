import { Container } from "react-bootstrap";
import styles from './style.module.css'
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import { Outlet } from "react-router-dom";


const { container, wrapper } = styles


const MainLayOut = () => {

  return (
    <Container className={container}>
      <Header/>
      <div className={wrapper}>
        <Outlet/>
      </div>
      <Footer/>
    </Container>
  )
}

export default MainLayOut