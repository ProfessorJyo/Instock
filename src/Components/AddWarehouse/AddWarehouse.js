import { Link } from "react-router-dom";

const AddWarehouse = () => {
  return (
    <>
      <h1>Add a New Warehouse</h1>
      <div className='form-wrapper'>
        <div className='warehouse-details'>
          <h2 className='warehouse-details__heading'>Warehouse details</h2>
          <form className='warehouse-details__form'>
            <label htmlFor='name-form'>Warehouse name</label>
            <input type='text' id='name-form' name='warehouse-name' />
            <label htmlFor='form-address'>Warehouse name</label>
            <input type='text' id='street-form' name='Street-address' />
            <label htmlFor='city'>Warehouse name</label>
            <input type='text' id='city-form' name='City' />
            <label htmlFor='country-form'>Warehouse name</label>
            <input type='text' id='country-form' name='City' />
          </form>
        </div>
        <div className='contact-details'>
          <h2 className='contact-details__heading'>Warehouse details</h2>
          <form className='contact-details__form'>
            <label htmlFor='contact-name-form'>Warehouse name</label>
            <input type='text' id='contact-name-form' name='warehouse-name' />
            <label htmlFor='position-form'>Warehouse name</label>
            <input type='text' id='position-form' name='Street-address' />
            <label htmlFor='phone-number-form'>Warehouse name</label>
            <input type='text' id='phone-number-form' name='City' />
            <label htmlFor='email-form'>Warehouse name</label>
            <input type='text' id='email-form' name='City' />
          </form>
          <div className='button-section'>
            <input type='submit' />
            <Link to='/warehouses'>Cancel</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWarehouse;
