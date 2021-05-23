import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ( ) => {

  const [cantidad, setCantidad] = useState( 0 );
  const [error, setError] = useState( false );

  const submitHandle = ( e ) => {
    e.preventDefault( );

    // Validar
    if( cantidad <= 0 || isNaN( cantidad ) ){
      setError( true );
      return;
    }

    // Que pasa si se valida
    setError( false );
  }

  const definirPresupuesto = ( e ) => {
    setCantidad( parseInt( e.target.value ) );
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      { error && <Error mensaje='El presupuesto es incorrecto' /> }

      <form
        onSubmit={ submitHandle }
      >
        <input 
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={ definirPresupuesto }
        />

        <input 
          type='submit'
          className='button-primary u-full-width'
          value='Definir su presupuesto'
        />
      </form> 
    </>
  )
}

export default Pregunta;
