import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import {ModalItem} from './ModalItem';

export const ListItems = () => {
    
    let [pageNumber, updatePageNumber] = useState(1);
    const [characters, setCharacters ] = useState([]);
    const [name, setName ] = useState([]);
    
    const imgStyle = {width: "50%"}  
    const URL = "https://rickandmortyapi.com/api/character/"
    
    let api = `${URL}?page=${pageNumber}`;

    const modifyName = e => {
        setName(e.target.value);
    }

    const getCharacter = () => {
        if (name == "") {
            return swal("Introduce un nombre!");
        }
        fetch(`${URL}?name=${name}`)
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

    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setCharacters(data.results);
      })();
    }, [api]);
   return (
    <div>
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
        <div className="row">
            {
                characters ?
                characters.map(character => {
                    return (
                            <div className="column" key={character.id+1}>
                                <div className="card" key={character.id+2}>
                                    <div className="content" key={character.id+2}>
                                        <img src={character.image} style={imgStyle}/>
                                        <div key={character.id}>
                                            {character.name} {character.type}
                                        </div>
                                        <br/>
                                        <ModalItem itemApi={character}/>
                                    </div>
                                </div>
                            </div>)
                })
                :
                <p className="p-question">El personaje {name} no existe, por favor intenta con otro</p>
            }
        </div>
    </div>
  )
}
