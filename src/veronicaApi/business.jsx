//import React, { useState, useEffect, useRef } from "react";
//import { useParams } from "react-router-dom";


export const BusinessSRI = async (props) => {
  
/*
    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data)); "1103680169001",
*/
  const dataBussines = {
    "rucPropietario": "1150214375001",
	"razonSocial": "Danny START LOJA",
	"tipoIdentificacion": "RUC",
	"logo": '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'
  }

  /*const response = await fetch('http://localhost:8080/veronica/operaciones/empresa',
    {
        method: "POST",
        body: JSON.stringify(dataBussines),
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer fc937bc9-0fea-4779-b6d3-6d5a25ed4f41'  'Access-Control-Allow-Origin': 'http://localhost:8080',
        },
        
    }
  );
  const data = await response.json(); 
            'Content-Type': "application/json", credentials: 'include',
  console.log(data);*/ 

  /*

  method: "POST",
        body: dataBussines,
        mode: 'no-cors',
        headers: {
            'Authorization': 'Bearer c3de4a9a-2800-429f-95d8-4bd6431e9fab'
        },
        */

    await fetch('http://localhost:8080/veronica/operaciones/empresa',
    {
        
        method: "POST",
        body: dataBussines,
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Authorization': 'Bearer c3de4a9a-2800-429f-95d8-4bd6431e9fab'
        },
        
    }
  ).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));

}
