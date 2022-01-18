import { Link } from 'react-router-dom'

const Infos = () => {
  return (
    <div>
      <h3>Informazioni & Istruzioni</h3>
      <p>Gestisci le tue scadenze con questa semplice Web App in React.</p>
      <div className='alert alert-primary'>
        <h4 className='mt-2 mb-2'>ISTRUZIONI</h4>
        <p className='mb-2'>Doppio click su una voce per contrassegnarla come effettuata</p>
        </div>
      <h4>Versione 1.2.1</h4>
      <Link to='/' className='btn btn-dark btn-block'>Indietro</Link>
    </div>
  )
}

export default Infos
