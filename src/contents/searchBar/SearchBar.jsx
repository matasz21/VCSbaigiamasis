import React, {useState} from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [worldEnterd, setWordEntered] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData ([])
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} value={worldEnterd} onChange={handleFilter} />
            <div className="searchIcon"> 
            {filteredData.length === 0 ? <SearchIcon/> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.map((value, key) => {
                return (<Link className="dataItem" to="/products" onClick={clearInput}>
                    <p>{value.title}</p>
                </Link>);
            })}
        </div>
        )}
    </div>
)};

export default SearchBar;