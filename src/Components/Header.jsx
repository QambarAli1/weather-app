import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [CityValue , setCityValue] = useState('')
    const inputRef = useRef(null);
    function handleClick() {
        setCityValue(inputRef.current.value)
        console.log(CityValue);
    }
    return (
        <div className='header-sec'>
            <div className='container'>
                <div className='header-main'>
                    <div className='header-heading'>
                        <h2>Weather Application</h2>
                    </div>
                    <div className='header-searchbox'>
                        <input type='search'  ref={inputRef} />
                        <button onClick={handleClick}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
