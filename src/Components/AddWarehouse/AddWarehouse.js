import './AddWarehouse.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';
import { eMailValidator, phoneValidator } from '../Helper/Helper';

const AddWarehouse = () => {
  const dataHandler = (e) => {
    e.preventDefault();

    // evaluation of inputs
    if (
      !e.target[0].value === '' ||
      e.target[1].value === '' ||
      e.target[2].value === '' ||
      e.target[3].value === '' ||
      e.target[4].value === '' ||
      e.target[5].value === '' ||
      e.target[6].value === '' ||
      e.target[7].value === ''
    ) {
      const form = document.querySelector('.form').classList.add('.form-error');
      // console.log(form);
      alert('All forms must be filled up');
    }
    // Phone validation
    phoneValidator(e.target[6].value);

    // E-mail validator

    eMailValidator(e.target[7].value);

    if (!phoneValidator && !eMailValidator) {
      alert('Please enter proper phone or email format');
    }

    const warehouse = {
      name: e.target[0].value,
      address: e.target[1].value,
      city: e.target[2].value,
      country: e.target[3].value,
      contact: {
        name: e.target[4].value,
        position: e.target[5].value,
        phone: e.target[6].value,
        email: e.target[7].value,
      },
    };

    // post call for a new warehouse (Used an endpoint created on a backend)
    const warehousePostCall = axios.post('http://localhost:8080/warehouse', warehouse);
    warehousePostCall
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='component-wrapper__heading'>
        <Link to='/warehouse'>
          <img src={arrowIcon} />
        </Link>
        <h1 className='header'>Add a New Warehouse</h1>
      </div>
      <form className='warehouse-details' onSubmit={dataHandler}>
        <div className='warehouse-details__container'>
          <div className='warehouse-details__warehouse-form'>
            <h2 className='warehouse-details__heading'>Warehouse details</h2>
            <label htmlFor='name-form'>Warehouse name</label>
            <input
              type='text'
              className='form'
              id='name-form'
              name='warehouse-name'
              placeholder='Warehouse name'
            />
            <label htmlFor='street-form'>Street Address</label>
            <input
              type='text'
              className='form'
              id='street-form'
              name='Street-address'
              placeholder='Street Address'
            />
            <label htmlFor='city'>City</label>
            <input type='text' className='form' id='city-form' name='City' placeholder='City' />
            <label htmlFor='country-form'>Country</label>
            <input
              type='text'
              className='form'
              id='country-form'
              name='Country'
              placeholder='Country'
            />
          </div>

          <div className='warehouse-details__contact-form'>
            <h2 className='warehouse-details__contact-heading'>Contact details</h2>
            <label htmlFor='contact-name-form'>Contact name</label>
            <input
              type='text'
              className='form'
              id='contact-name-form'
              name='contact-name'
              placeholder='Contact name'
            />
            <label htmlFor='position-form'>Position</label>
            <input
              type='text'
              className='form'
              id='position-form'
              name='Street-address'
              placeholder='Position'
            />
            <label htmlFor='phone-number-form'>Phone number</label>
            <input
              type='tel'
              // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              className='form'
              id='phone-number-form'
              name='City'
              placeholder='Phone number'
            />
            <label htmlFor='email-form'>Email</label>
            <input type='text' className='form' id='email-form' name='City' placeholder='Email' />
          </div>
        </div>
        <div className='button-section'>
          <Link to='/warehouse'>Cancel</Link>
          <input type='submit' id='submit-button' value='+ Add warehouse' />
        </div>
      </form>
    </>
  );
};
export default AddWarehouse;
