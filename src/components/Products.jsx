import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
    const dispatch = useDispatch();

    const [products, getProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(resut => getProducts(resut))
    }, [])



    const addToCart = (product) => {
        //dispatch add action
        dispatch(add(product))


    }


    const cards = products.map(product => (
        <div className="col-3" style={{ marginBottom: '10px', textAlign: 'center' }}>
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
                    <Button onClick={() => addToCart(product)} variant="primary">Add To Cart</Button>
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

export default Products;