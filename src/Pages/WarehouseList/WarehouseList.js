import React, {useState, useEffect} from 'react'
import axios from "axios";
import SearchHeader from '../../Components/SearchHeader/SearchHeader';
import WarehouseRow from '../../Components/WarehouseRow/WarehouseRow'
import TableHeader from '../../Components/TableHeader/TableHeader'

const WarehouseList = () =>{

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/warehouse')
        .then(result =>{
            setData(result.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])
    return(
        <>
            <SearchHeader title={'Warehouses'} buttonText={'+ Add New Warehouse'}/>
            <TableHeader/>
            {data.map((singleWarehouse) => {
                return <WarehouseRow 
                warehouseName={singleWarehouse.name}
                address={singleWarehouse.address}
                city={singleWarehouse.city}
                country={singleWarehouse.country}
                contact={singleWarehouse.contact.name}
                phone={singleWarehouse.contact.phone}
                email={singleWarehouse.contact.email}/>
            })} 
        </>
    )
}

export default WarehouseList;