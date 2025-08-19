import React, { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from "react-icons/io";


function Search(props){

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        props.onHandleSearch(searchTerm);
    }, [searchTerm])

    return (
        <div className="search">
            <InputGroup>
                <Form.Control type="text" placeholder="Search here.." name="searchTerm" onChange={handleSearch} value={searchTerm} />
                <InputGroup.Text>
                    <IoMdSearch />
                </InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default Search;