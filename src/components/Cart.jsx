import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";


const Cart = () => {
    const dispactch = useDispatch();

    const products = useSelector(state => state.cart);
    const removeFromCart = (id) =>{
        // dispach a remoe action
        dispactch(remove(id));
    }

    const cards = products.map(product => (
        <div className="col-12" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <Card key={product.id} className="h-100" >
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', paddingTop: '10px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => removeFromCart(product.id)} variant="danger">Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Cart