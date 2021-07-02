import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';;
import api from './api';
import { Button } from "reactstrap";
import { post } from 'jquery';
import Header2 from './Header2';



const Home = () => {


    const [products, setProducts] = useState(null);

    const fetchProduct = () => {
        api.getAllProducts().then(res => {
            const result = res.data;
            setProducts(result.data)
        });
    }

    useEffect(() => {
       fetchProduct();
    }, []);


    const renderProducts = () => {
        if(!products ) {
            return (
                <tr>
                    <td colSpan="4">Loading products...</td>
                </tr>
            );
        }
        if(products.length === 0) {
            return (
                <tr>
                    <td colSpan="4">There is no product found!</td>
                </tr>
            );
        }

        return products.map((product) => (
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
               
            </tr>
        ))
    }

    return (

        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <Header2 />
           
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <AppContainer
                                title="Available Product">
                                <div className="table-responsive">
                                    <table className="table table-striped mt-4">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderProducts()}
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </AppContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    );

};


export default Home;