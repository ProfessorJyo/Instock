import sortArrow from '../../Assets/Icons/sort-24px.svg'

import './TableHeader.scss'

const TableHeader = () =>{  
    return(
        <>
            <div className='tableHeader'>
                <div className='tableHeader__container tableHeader__container--primary'>
                    <p className='tableHeader__title'>WAREHOUSE</p>
                    <img className='tableHeader__icon' src={sortArrow} alt="Sorting Arrows Button"/>
                </div>
                <div className='tableHeader__container tableHeader__container--secondary'>
                    <p className='tableHeader__title'>ADDRESS</p>
                    <img className='tableHeader__icon' src={sortArrow} alt="Sorting Arrows Button"/>
                </div>
                <div className='tableHeader__container tableHeader__container--tertiary'>
                    <p className='tableHeader__title'>CONTACT NAME</p>
                    <img className='tableHeader__icon' src={sortArrow} alt="Sorting Arrows Button"/>
                </div>
                <div className='tableHeader__container tableHeader__container--quaternary'>
                    <p className='tableHeader__title'>CONTACT INFORMATION</p>
                    <img className='tableHeader__icon' src={sortArrow} alt="Sorting Arrows Button"/>
                </div>
                <div className='tableHeader__container tableHeader__container--quinary'>
                    <p className='tableHeader__title'>ACTIONS</p>
                </div>
            </div>
        </>
    )
}

export default TableHeader;