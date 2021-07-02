import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom'
import AppContainer from './AppContainer';
import api from './api';
import Header from './Header';
import Sidebar from './Sidebar';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateProduct({
                title, quantity, price,
            }, id)
            history.push('/home');
        } catch {
            alert('Failed to EDIT Product');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        api.getOneProduct(id).then(res => {
            const result = res.data;
            const product = result.data;
            setTitle(product.title);
            setQuantity(product.quantity);
            setPrice(product.price);

        })
    }, []);

    return (

        <div class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
                <Header />
                <Sidebar />
                
                <div class="content-wrapper">
            
                    <div class="content-header">
                    
                        <div class="container-fluid">
                            <AppContainer
                                title="Edit PRODUCT">


                                <form>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input className="form-control" type="text" 
                                        value={title} onChange={e => setTitle(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input className="form-control" type="text" 
                                        value={quantity} onChange={e => setQuantity(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input className="form-control" type="text" 
                                        value={price} onChange={e => setPrice(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        
                                        <button type="button" className="btn btn-success float-right" onClick={onEditSubmit} disabled={loading}>
                                            <i class="fas fa-edit"> </i>{loading ? 'LOADING...' : 'Update'}
                                        </button>
                                        <Link to="/Home" class="btn btn-secondary float-left"> <i class="fas fa-arrow-left">Back</i></Link>
                                    </div>
                                
                                </form>
                            </AppContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Edit;