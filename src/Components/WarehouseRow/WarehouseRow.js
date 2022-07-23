import './WarehouseRow.scss'
import ChevronIcon from '../../Assets/Icons/chevron_right-24px.svg'
import BinIcon from '../../Assets/Icons/delete_outline-24px.svg'
import PencilIcon from '../../Assets/Icons/edit-24px.svg'
import { Link } from 'react-router-dom'

const WarehouseRow = (props) => {  
    
    return(
        <>
            <div className='warehouseRow'>
                <div className='warehouseRow__container warehouseRow__container--primary'>
                    <div className='warehouseRow__header-container'>
                        <p className='warehouseRow__header'>WAREHOUSE</p>
                    </div>
                    <div className='warehouseRow__subContainer'>
                        <Link className='warehouseRow__link' to={`warehouse/${props.id}`}>
                            <p className='warehouseRow__text warehouseRow__text--primary'>{props.warehouseName}</p>
                            <img className='warehouseRow__icon' src={ChevronIcon} alt="Chevron right arrow icon" />
                        </Link>
                    </div>
                </div>
                <div className='warehouseRow__container warehouseRow__container--secondary'>
                    <div className='warehouseRow__header-container'>
                        <p className='warehouseRow__header'>ADDRESS</p>
                    </div>
                    <div>
                        <p className='warehouseRow__text'>{props.address}, {props.city}, {props.country}</p>
                    </div>
                </div>
                <div className='warehouseRow__container warehouseRow__container--tertiary'>
                    <div className='warehouseRow__header-container'>
                        <p className='warehouseRow__header'>CONTACT NAME</p>
                    </div>
                    <div>
                        <p className='warehouseRow__text'>{props.contact}</p>
                    </div>
                </div>
                <div className='warehouseRow__container warehouseRow__container--quaternary'>
                    <div className='warehouseRow__header-container'>
                        <p className='warehouseRow__header'>CONTACT INFORMATION</p>
                    </div>
                    <div>
                        <p className='warehouseRow__text'>{props.phone}</p>
                        <p className='warehouseRow__text'>{props.email}</p>
                    </div>
                </div>
                <div className='warehouseRow__container warehouseRow__container--quinary'>
                    <img className='warehouseRow__image' src={BinIcon} alt="Garbage Bin Icon Button" />
                    <img className='warehouseRow__image' src={PencilIcon} alt="Pencil Icon Button" />
                </div>
            </div>
        </>
    )
}

export default WarehouseRow;