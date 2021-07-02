import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';;
import api from './api';
import { Button } from "reactstrap";
import { post } from 'jquery';
import Header from './Header';
import Sidebar from './Sidebar';


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
                <td><center><Link className="btn btn-warning" to={`/edit/${product.id}`}> <i className="fas fa-edit"></i></Link>
                    <button type="button" className="btn btn-danger" 
                    onClick={() => {
                        api.deleteProduct(product.id).then(fetchProduct)
                        .catch(err => {
                            alert('Failed to delete Prouct ID: ' + product.id);
                        });
                    }}
                        > <i className="fas fa-trash"></i></button>
                </center></td>
            </tr>
        ))
    }

    return (

        <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <AppContainer
                                title="Add Product">
                                
                                <div className="table-responsive">
                                    <table className="table table-striped mt-4">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th><center>Action</center></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderProducts()}
                                        </tbody>
                                    </table>
                                    <Link to="/add" className="btn btn-primary"> <i className="fas fa-plus"></i> Add Product</Link>
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

