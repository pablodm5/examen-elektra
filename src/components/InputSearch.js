import React, { useState } from 'react';
import swal from 'sweetalert';

export const InputSearch = () => {
    const [characters, setCharacters ] = useState([]);
    const [name, setName ] = useState([]);


    const modifyName = e => {
        setName(e.target.value);
    }

    const getCharacter = () => {
        if (name == "") {
            return swal("Introduce un nombre!");
        }
        fetch("https://rickandmortyapi.com/api/character/?name="+name)
        .then(response => response.json())
        .then(
                finalResponse => {
                    setCharacters(finalResponse.results)
                    console.log(finalResponse)
                },
                error => {
                    console.log(error)
                    return swal({
                        title: "Error!",
                        text: `No se pudieron obtener los personajes, Error: ${error.message }`,
                        icon: "error",
                      });
                }
        )
    }
  return (
    <div>
        <div className="box">
            <div className="container-4">
                <input type="search"
                        id="search" 
                        placeholder="Busqueda..." 
                        onChange={modifyName} 
                        value={name}
                        autoComplete="off"/>
                <button className="icon" onClick={getCharacter}><i className="fa fa-search"></i></button>
            </div>
        </div>
    </div>
  )
}
