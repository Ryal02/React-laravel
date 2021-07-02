import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import AppContainer from './AppContainer';
import api from './api';
import Header from './Header';
import Sidebar from './Sidebar';

const Add = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addProduct({
                title, quantity, price,
            })
            history.push('/Home');
        } catch {
            alert('Product Registration Failed');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
                <Header />
                <Sidebar />
                
                <div class="content-wrapper">
               
                    <div class="content-header">
                    
                        <div class="container-fluid">
                            <AppContainer
                                title="ADD PRODUCT">
                               

                                <form>
                                    <div className="form-group">
                                        <label>Product Name</label>
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
                                        
                                        <button type="button" className="btn btn-success float-right" onClick={onAddSubmit} disabled={loading}>
                                        <i class="fas fa-save"> </i> {loading ? 'LOADING...' : 'Save'}
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


export default Add;