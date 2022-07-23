import React, {useState, useEffect} from 'react'
import axios from "axios";
import SearchHeader from '../../Components/SearchHeader/SearchHeader';
import WarehouseRow from '../../Components/WarehouseRow/WarehouseRow'
import TableHeader from '../../Components/TableHeader/TableHeader'
import './WarehouseList.scss'

const WarehouseList = () =>{

    const [data, setData] = useState([])

    useEffect(()=>{
        requestWarehouseList();
    }, [])

    const requestWarehouseList = () => {
        axios.get('http://localhost:8080/warehouse')
        .then(result =>{
            setData(result.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return(
        <div className='warehouseList__wrapper-container'>
            <SearchHeader title={'Warehouses'} buttonText={'+ Add New Warehouse'}/>
            <TableHeader
             className={'warehouseList'}
             firstHeader={'WAREHOUSE'} 
             secondHeader={'ADDRESS'} 
             thirdHeader={'CONTACT NAME'} 
             fourthHeader={'CONTACT INFORMATION'} 
             fifthHeader={null}
             sixthHeader={'ACTIONS'}/>
            {data.map((singleWarehouse) => {
                return <WarehouseRow
                key={singleWarehouse.id}
                id={singleWarehouse.id}
                warehouseName={singleWarehouse.name}
                address={singleWarehouse.address}
                city={singleWarehouse.city}
                country={singleWarehouse.country}
                contact={singleWarehouse.contact.name}
                phone={singleWarehouse.contact.phone}
                email={singleWarehouse.contact.email}
                onDataChange={requestWarehouseList}/>
            })} 
        </div>
    )
}

export default WarehouseList;