import { useEffect, useState } from 'react';
import "./InventoryItemDetails.scss";
import editLogo from '../../Assets/Icons/edit-24px-white.svg';

const InventoryItemDetails = () => {
    const props = { 
        warehouseName: "Manhattan",
        itemName: "Gym Bag",
        description: "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
        category: "Gear",
        status: "Out of Stock",
        quantity: 1
    }

    const { itemName, warehouseName, description, category, quantity, status } = props;
    const [inStock, setInStock] = useState(true);
    
    useEffect (() => {
        if (status === "In Stock" && quantity > 0) {
            setInStock(true);
        }
        else {
            setInStock(false);
        }
    }, [props]);
    
    return (
        <section className='inv-details__wrapper'>
            <div className='inv-details__header-wrapper'>
                <div className='inv-details__header-left'>
                    <div className='inv-details__back'></div>
                    <h2 className='inv-details__item'>{itemName}</h2>
                </div>
                <div className='inv-details__header-right'>
                    <div className='inv-details__edit'>
                        <img src={editLogo} />
                        <p>Edit</p>
                    </div>
                    <div className='inv-details__edit-mobile'></div>
                </div>
            </div>
            <div className='inv-details'>
                <div className='inv-details__left'>
                    <h3 className='inv-details__subtitle'>ITEM DESCRIPTION:</h3>
                    <p className='inv-details__description'>{description}</p>
                    <h3 className='inv-details__subtitle'>CATEGORY:</h3>
                    <p className='inv-details__category'>{category}</p>
                </div>
                <div className='inv-details__right'>
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
                            <p className='inv-details__quantity'>{quantity}</p>
                        </div>
                    </div>
                    <div className='inv-details__right-bottom'>
                        <h3 className='inv-details__subtitle'>WAREHOUSE:</h3>
                        <p className='inv-details__warehouse'>{warehouseName}</p>                
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InventoryItemDetails;