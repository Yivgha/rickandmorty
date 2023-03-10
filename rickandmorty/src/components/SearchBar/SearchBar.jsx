import React, { useState } from 'react'
import "./SearchBar.scss"
import { AiOutlineSearch } from "react-icons/ai"

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const characters = [{ "name": "Rick", "specie": "Human" },
    { "name": "Morty", "specie": "Human" }];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        characters.filter((character) => {
            return character.name.match(searchInput);
        });
    }


    return (
        <div className="Search">
            <AiOutlineSearch className="SearchIcon" />
            <input className="Input" type="text" placeholder="Filter by name..." onChange={handleChange}
                value={searchInput} />
            {/* <table>
            <tr>
                <th>Name</th>
                
                </tr>
                <tr>
                    <th>Specie</th>
                </tr>
            {characters.map((character, id) => {
                return(<tr>
                    <td>{character.name}</td>
                    <td>{character.specie}</td>
                </tr>)
            })}
        </table> */}
        </div>
    );
}

export default SearchBar;