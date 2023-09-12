import React from 'react';

export default function Component() {
  // Si estas funciones están definidas en otro lugar, asegúrate de importarlas.
  const validarFormulario = (event) => {
    event.preventDefault();
  
    const identificacion = document.getElementById('identificacion').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const habitacion = document.getElementById('habitacion').value;
    const rh = document.getElementById('rh').value;
    const fecha_ingreso = document.getElementById('fecha_ingreso').value;
    const fecha_salida = document.getElementById('fecha_salida').value;
  
    if (!identificacion) {
      alert('El campo Identificación es obligatorio.');
      return;
    }
    
    if (!nombres) {
      alert('El campo Nombres es obligatorio.');
      return;
    }
    if (!apellidos) {
      alert('El campo apellidos es obligatorio.');
      return;
    }
    if (!telefono) {
      alert('El campo telefono es obligatorio.');
      return;
    }
    if (!habitacion) {
      alert('El campo apellidos es obligatorio.');
      return;
    }
    if (!rh) {
      alert('El campo Nombres es obligatorio.');
      return;
    }
    if (!fecha_ingreso) {
      alert('El campo apellidos es obligatorio.');
      return;
    }
    if (!fecha_salida) {
      alert('El campo telefono es obligatorio.');
      return;
    }


    
  };
  
  const moverAtras = () => {
    // Tu código aquí
  };

  const moverAdelante = () => {
    // Tu código aquí
  };

  const cancelar = () => {
    // Tu código aquí
  };
  const styles = {
    centeredContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    },
    formularioCentrado: {
      width: '80%', // O el ancho que desees
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra sutil
      borderRadius: '8px', // Bordes redondeados
      height: '150vh', // Esto asume que quieres centrarlo verticalmente en toda la pantalla

    },
    fullwidthInput: {
      width: '80%', // Esto hará que los campos tengan el ancho completo del contenedor
      padding: '10px',
      margin: '10px 0',
      boxSizing: 'border-box', // Esto asegura que el padding y el borde no aumenten el tamaño total
    }
  };



  return (
    <div style={styles.centeredContainer}>
      <div style={styles.formularioCentrado}>
        <div className="formulario-centrado">
          <form action="tu_url_de_procesamiento.php" onSubmit={validarFormulario}>
            <div>
              <label htmlFor="identificacion">Identificación:</label>
              <input type="text" id="identificacion"style={styles.fullwidthInput} name="identificacion" />
            </div>
            <div>
              <label htmlFor="nombres">Nombres:</label>
              <input type="text" id="nombres" name="nombres"style={styles.fullwidthInput} />
            </div>

            <div>        <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" id="apellidos" name="apellidos"style={styles.fullwidthInput} />
            </div>

            <div>        <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"style={styles.fullwidthInput} />
            </div>

            <div>        <label htmlFor="habitacion">Habitación:</label>
              <input type="text" id="habitacion" name="habitacion" style={styles.fullwidthInput}/>
            </div>

            <div>      
                <label htmlFor="rh">Tipo de Sangre:</label>
              <select id="rh" name="rh"style={styles.fullwidthInput}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>

              </select>
            </div>


            <div className="container">
              <div>
                <label htmlFor="fecha_ingreso">Fecha de Ingreso:</label>
                <input type="date" id="fecha_ingreso" name="fecha_ingreso"style={styles.fullwidthInput} />
              </div>

              <div>
                <label htmlFor="fecha_salida">Fecha de Salida:</label>
                <input type="date" id="fecha_salida" name="fecha_salida"style={styles.fullwidthInput} />
              </div>
            </div>

            <div className="button-container">
              <button type="button" onClick={moverAtras}>←</button>
              <button type="button" onClick={moverAdelante}>→</button>
            </div>

            <div className="button-row">
              <input type="submit" value="Registrar" />
              <button type="button" onClick={cancelar}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
