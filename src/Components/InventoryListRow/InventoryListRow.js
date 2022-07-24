import './InventoryListRow.scss'
import ChevronIcon from '../../Assets/Icons/chevron_right-24px.svg'
import BinIcon from '../../Assets/Icons/delete_outline-24px.svg'
import PencilIcon from '../../Assets/Icons/edit-24px.svg'
import { Link } from 'react-router-dom'
import React, {useEffect, useRef} from 'react'


const InventoryListRow = (props) => {  

    const statusTextElement = useRef([])

    useEffect(()=>{
        if (props.status === 'In Stock'){
            statusTextElement.current.classList.add('inventoryListRow__status--active')
        } else{
            statusTextElement.current.classList.add('inventoryListRow__status--inactive')
        }
    })

    return(
        <>
            <div className='inventoryListRow'>
                <div className='inventoryListRow__container inventoryListRow__container--primary'>
                    <div className='inventoryListRow__header-container'>
                        <p className='inventoryListRow__header'>INVENTORY ITEM</p>
                    </div>
                    <div className='inventoryListRow__subContainer'>
                        <Link className='inventoryListRow__link' to={`/inventory/${props.itemID}`}>
                            <p className='inventoryListRow__text inventoryListRow__text--primary'>{props.item}</p>
                            <img className='inventoryListRow__icon' src={ChevronIcon} alt="Chevron right arrow icon" />
                        </Link>
                    </div>
                </div>
                <div className='inventoryListRow__container inventoryListRow__container--secondary'>
                    <div className='inventoryListRow__header-container'>
                        <p className='inventoryListRow__header'>CATEGORY</p>
                    </div>
                    <div>
                        <p className='inventoryListRow__text'>{props.category}</p>
                    </div>
                </div>
                <div className='inventoryListRow__container inventoryListRow__container--tertiary'>
                    <div className='inventoryListRow__header-container'>
                        <p className='inventoryListRow__header'>STATUS</p>
                    </div>
                    <div>
                        <p className='inventoryListRow__text inventoryListRow__status'ref={statusTextElement}>{props.status}</p>
                    </div>
                </div>
                <div className='inventoryListRow__container inventoryListRow__container--quaternary'>
                    <div className='inventoryListRow__header-container'>
                        <p className='inventoryListRow__header'>QTY</p>
                    </div>
                    <div>
                        <p className='inventoryListRow__text'>{props.quantity}</p>
                    </div>
                </div>
                <div className='inventoryListRow__container inventoryListRow__container--quinary'>
                    <div className='inventoryListRow__header-container'>
                        <p className='inventoryListRow__header'>WAREHOUSE</p>
                    </div>
                    <div>
                        <p className='inventoryListRow__text'>{props.warehouseName}</p>
                    </div>
                </div>
                <div className='inventoryListRow__container inventoryListRow__container--senary'>
                    <img className='inventoryListRow__image' src={BinIcon} alt="Garbage Bin Icon Button" />
                    <Link className='inventoryListRow__link-edit' to={`/inventory/edit/${props.itemID}`}>    
                        <img className='inventoryListRow__image' src={PencilIcon} alt="Pencil Icon Button" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default InventoryListRow;