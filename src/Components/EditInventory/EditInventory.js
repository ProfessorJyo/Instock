import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./EditInventory.scss";
import axios from 'axios';

const EditInventory = () => {

    const params = useParams();
    const [inStock, setInStock] = useState(true);
    const [itemDetails, setItemDetails] = useState({});

    useEffect (() => {
        axios.get(`http://localhost:8080/inventory/${params.id}`).then(res => {
            setItemDetails(res.data[0]);
            if(itemDetails?.status === "In Stock" && itemDetails?.quantity > 0) {
                setInStock(true);
            }
            else {
                setInStock(false);
            }
        }).catch(err => {
            console.log(err);
        });

    }, [itemDetails, params]);

    const handlePublish = async (e) => {
        e.preventDefault();
        
        e.target[1].classList.remove('error-state');
        e.target[2].classList.remove('error-state');

        let emptyValue = false;
        if (e.target[1].value === '') { 
            e.target[1].classList.add('error-state');
            emptyValue = true;
        }
        if (e.target[2].value === '') {
            e.target[2].classList.add('error-state');
            emptyValue = true;
        }

        if (emptyValue) {
            alert('Please fill in the form fields.')
            return false;
        }
        
        
        if (window.confirm('Are you sure you want to update?')) {
            
            await axios.put(`http://localhost:8080/inventory/${params.id}`, itemDetails).then(res => console.log(res)).catch(err => console.log(err));
        };
    }


    
    return (
        <section className='inv-edit__wrapper'>
            <div className='inv-edit__header-wrapper'>
                <div className='inv-edit__header'>
                    <Link to = {`/inventory/${params.id}`}>
                        <div className='inv-edit__back'></div>
                    </Link>
                    <h2 className='inv-edit__item'>Edit Inventory Item</h2>
                </div>
            </div>
            <form className='inv-edit'>
                <div className='inv-edit__left'>
                    <h2 className='inv-edit__title'>Item Details</h2>
                    <h3 className='inv-edit__subtitle'>ITEM DESCRIPTION:</h3>
                    <input className='inv-details__description' ></input>
                    <h3 className='inv-details__subtitle'>CATEGORY:</h3>
                    <select className='inv-details__category'>
                        <option value="Accessories">Accessories</option>                        
                        <option value="Apparel">Apparel</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Gear">Gear</option>
                        <option value="Health">Health</option>
                    </select>
                </div>
                <div className='inv-details__right'>
                <h2 className='inv-edit__title'>Item Availability</h2>
                    <div className='inv-details__right-top'>
                        <div className='inv-details__status-wrapper'>
                            <h3 className='inv-details__subtitle'>STATUS:</h3>
                            <div className='inv-details__status-tag'>
                                {inStock ? (
                                <p className='inv-details__status instock'>IN STOCK</p>
                                ) : (
                                <p className='inv-details__status oos'>OUT OF STOCK</p>
                                )}
                            </div>
                        </div>
                        <div className='inv-details__quantity-wrapper'>
                            <h3 className='inv-details__subtitle'>QUANTITY:</h3>
                            <p className='inv-details__quantity'>{itemDetails?.quantity}</p>
                        </div>
                    </div>
                    <div className='inv-details__right-bottom'>
                        <h3 className='inv-details__subtitle'>WAREHOUSE:</h3>
                        <p className='inv-details__warehouse'>{itemDetails?.warehouseName}</p>                
                    </div>
                </div>
            </form>
        </section>
    );
}

export default EditInventory;