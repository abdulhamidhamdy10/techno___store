import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { CartProvider, useCart } from "react-use-cart";
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';

function Cart() {
    const {
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal,
    } = useCart();

    if (isEmpty) return <h1 className='text-center mb-5'>Your cart is empty</h1>;

    return (
        <>
            <h1 className="text-center">Cart ({totalUniqueItems})
                <button className="btn btn-danger " onClick={() => emptyCart()}> Delete </button>
            </h1>

            <Container className='tablecart'>
                <Row className='rowone'>
                    <Col md="12" xs="12" className='colone col-sm-12'>
                        <table className="table  text-center " >
                            <thead >
                                {/* <th><h2>Photo</h2></th> */}
                                {/* <th><h2>SHOW</h2></th> */}
                                <th><h2>Name</h2></th>
                                <th><h2>Price</h2></th>
                                <th><h2>Operation</h2></th>
                                <th><h2>Quantity</h2></th>
                            </thead>
                            <hr ></hr>
                            <tbody>
                                {items.map((vice) => (
                                    <tr key={vice.id}>
                                        {/* <td>{vice.img_url}</td> */}
                                        {/* <td>
                                            <img src={vice.image_url}  />
                                        </td> */}
                                        <td><h1> {vice.name} </h1></td>
                                        <td><h1>{vice.price * vice.quantity} $</h1></td>

                                        <td>
                                            <button
                                                onClick={() => updateItemQuantity(vice.id, vice.quantity - 1)}
                                                >
                                                -
                                            </button>
                                            <button
                                                onClick={() => updateItemQuantity(vice.id, vice.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button onClick={() => removeItem(vice.id)}>&times;</button>
                                        </td>
                                        <td><h1>{vice.quantity}</h1></td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </Col>
                    <Col md="6" className='coltwo text-center'>
                        <h2>Totalitems = {totalItems}</h2>
                    </Col>
                    <Col md="6" className='colthree text-center'>
                        <h2>Totalprice = $ {cartTotal} </h2>
                    </Col>
                </Row>
            </Container>


        </>
    );
}
function Alltablepage() {
    return (
        <CartProvider>
            <Navbar />
            <div className='pt-5 mt-5'></div>
            <div className='pt-3 mt-3'></div>
            <Cart />
            <Footer />

        </CartProvider>
    )
}
export default Alltablepage;