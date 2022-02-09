
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import swal from 'sweetalert';
function App() {

  const eventSubmit = (event) => {
    PeticionPut().then();
    event.preventDefault();
  }
  
  const PeticionPut = async (props) => {
    let anio = document.getElementById('anio').value
    let mes = document.getElementById('mes').value
    console.log("añooo" + anio + "mes" + mes)
    let formData = new FormData();
    formData.append('anio', anio);
    formData.append('mes', mes);
    await fetch('/predict',
      {
        method: "POST",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'https://apiia.herokuapp.com/predict',
          'Accept': 'application/json'
        },
        body: formData
      }).then( response => response.text()).then( res => {mostrarAlerta(res)});
  }

  const mostrarAlerta = (a) => {

    swal({
      title: "Accidentes de transito",
      text: " Existira un total de:  " + a,
      icon: "success",
      button: "Aceptar"

    })
  }

  return (
    /* 
        <div className="App">
          <h2>Predicción de incidentes de Tránsito</h2>
          <form onSubmit={eventSubmit}>
            <label>
              Año:
              <input type="text" name="anio" />
            </label>
            <label>
              Mes:
              <input type="text" name="mes" />
            </label>
    
            <Button variant="danger" type='submit' >Predecir</Button>
          </form>
    
    */

    <div className="App">
      <Form onSubmit={eventSubmit} >
        <h2>Predicción de incidentes de Tránsito con Machine Learning ECU911.</h2>
        <Form.Group className="mb-3" >
          <Form.Label>Año</Form.Label>
          <Form.Control type="number" id="anio" required />
          <Form.Text className="">
            Ingresar un año para realizar la Predicción
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Ingrese un mes</Form.Label>
          <Form.Control type="number" id="mes" required />
          <Form.Text className="">
            Ingresar un mes entre el 1 y el 12
          </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit">Predecir</Button>
      </Form>
    </div>

  );
}

export default App;
