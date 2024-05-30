import { Form, Button } from "react-bootstrap";
import styles from "./style.module.css";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
    styles;

const CartItems = () => {

    return (
        <div className={cartItem}>
            <div className={product}>
                <div className={productImg}>
                    <img src="" alt="test" />
                </div>
                <div className={productInfo}>
                    <h2>title</h2>
                    <h3>500 EGP</h3>
                    <Button
                        variant="secondary"
                        style={{ color: "white", width: "100px" }}
                        className="mt-auto"

                    >
                        Remove
                    </Button>
                </div>
            </div>

            <div className={cartItemSelection}>
                <span className="d-block mb-1">Quantity</span>
                <Form.Select>
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>

                </Form.Select>
            </div>
        </div>
    );
}




export default CartItems