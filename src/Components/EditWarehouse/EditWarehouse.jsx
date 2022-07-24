import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./EditWarehouse.scss";
import axios from 'axios';
import errorIcon from '../../Assets/Icons/error-24px.svg'

const EditWarehouse = () => {
    // const history = useHistory();
    const params = useParams();

    const [itemDetails, setItemDetails] = useState({
        name: "",
        address: "",
        city: "",
        country: "",
        contact: {
            name: "",
            position: "",
            phone: "",
            email: "",
        }
    });
    
    /* 
    const [descError, setDescError] = useState(false);
    const [quantityError, setQuantityError] = useState(false); */

    useEffect (() => {
        axios.get(`http://localhost:8080/warehouse/${params.id}`).then(res => {
            const updatedItemDetails = {};
            
            for (const key in itemDetails) {
                if (key in res.data) {
                    updatedItemDetails[key] = res.data[key];
                }
            }

            setItemDetails(updatedItemDetails);
        }).catch(err => {
            console.log(err);
        });

    }, [params]);

    const handleFormChange = e => {
        setItemDetails({...itemDetails, [e.target.name]: e.target.value});
    }
    
    const handleCancel = () => {
    }

    const handleSave = e => {
    }

    /* const handleSave = e => {
        e.preventDefault();
        console.log(e);
        
        e.target[0].classList.remove('error-state');
        e.target[1].classList.remove('error-state');
        e.target[5].classList.remove('error-state');

        let emptyValue = false;
        if (e.target[0].value === '') { 
            e.target[0].classList.add('error-state');
            setNameError(true);
            emptyValue = true;
        } else {
            setNameError(false);
        }
        if (e.target[1].value === '') {
            e.target[1].classList.add('error-state');
            setDescError(true);
            emptyValue = true;
        } else {
            setDescError(false);
        }
        if (e.target[5].value <= '0' && itemDetails.status === 'In Stock') {
            e.target[5].classList.add('error-state');
            setQuantityError(true);
            emptyValue = true;
        } else {
            setQuantityError(false);
        }

        if (emptyValue) {
            return false;
        }
        
        console.log(itemDetails);
        if (window.confirm('Are you sure you want to update this Inventory Item?')) {
            
            axios.put(`http://localhost:8080/inventory/${params.id}`, itemDetails).then(res => console.log(res)).catch(err => console.log(err));
            history.push(`/inventory/${params.id}`);
        };
    } */

    /* const handleCancel = () => {
        if(window.confirm('Are yo sure you want to cancel and go back to the previous page?')) {
            history.push(`/inventory/${params.id}`);
        }
    } */

    return (
        <section className='warehouse-edit__wrapper'>
            <div className='warehouse-edit__header-wrapper'>
                    <Link to = {`/warehouse/${params.id}`}>
                        <div className='warehouse-edit__back'></div>
                    </Link>
                    <h1 className='warehouse-edit__item'>Edit Warehouse</h1>
            </div>
            <form onSubmit={handleSave}>
                <div className='warehouse-edit'>
                    <div className='warehouse-edit__left'>
                        
                        <h2 className='warehouse-edit__title'>Warehouse Details</h2>

                        <h3 className='warehouse-edit__subtitle' >Warehouse Name</h3>
                        <input className='warehouse-edit__input' name='name' value={itemDetails.name} onChange={handleFormChange}></input>
                        
                        <h3 className='warehouse-edit__subtitle' >Street Address</h3>
                        <input className='warehouse-edit__input' name='address' value={itemDetails.address} onChange={handleFormChange}></input>
                        
                        <h3 className='warehouse-edit__subtitle' >City</h3>
                        <input className='warehouse-edit__input' name='city' value={itemDetails.city} onChange={handleFormChange}></input>
                        
                        <h3 className='warehouse-edit__subtitle' >Country</h3>
                        <input className='warehouse-edit__input warehouse-edit__input--last-row' name='country' value={itemDetails.country} onChange={handleFormChange}></input>

                    </div>
                    <div className='warehouse-edit__right'>
                        <h2 className='warehouse-edit__title'>Contact Details</h2>

                        <h3 className='warehouse-edit__subtitle' >Contact Name</h3>
                        <input className='warehouse-edit__input' name='contact.name' value={itemDetails.contact.name} onChange={handleFormChange}></input>

                        <h3 className='warehouse-edit__subtitle' >Position</h3>
                        <input className='warehouse-edit__input' name='contact.position' value={itemDetails.contact.position} onChange={handleFormChange}></input>

                        <h3 className='warehouse-edit__subtitle' >Phone Number</h3>
                        <input className='warehouse-edit__input' name='contact.phone' value={itemDetails.contact.phone} onChange={handleFormChange}></input>

                        <h3 className='warehouse-edit__subtitle' >Email</h3>
                        <input className='warehouse-edit__input' name='contact.email' value={itemDetails.contact.email} onChange={handleFormChange}></input>

                    </div>
                </div>
                <div className='warehouse-edit__button-wrapper'>
                    <button type='button' className='warehouse-edit__button warehouse-edit__button-cancel' onClick={handleCancel} >Cancel</button>
                    <button type="submit" className='warehouse-edit__button warehouse-edit__button-save' >Save</button>
                </div>
            </form>
        </section>
    );
}

export default EditWarehouse;