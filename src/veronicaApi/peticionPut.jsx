

/* Metodo GET
export const PeticionPut = async (props) => {

    await fetch('/author',
        {
            method: "GET",
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080',
            }

        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
 */ 

export const PeticionPut = async (props) => {
    

    
    let formData = new FormData();
    formData.append('anio', 2016);
    formData.append('mes', 2);
    await fetch('/predict',
        {
            method: "POST",
            mode: 'cors',
            headers: {

                'Access-Control-Allow-Origin': 'http://localhost:8080/',
               
            },
            body:formData

        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}




