import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [titolo, setTitolo] = useState('')
  const [quando, setQuando] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!titolo) {
      alert('Per favore, aggiungi il Titolo della Scadenza!')
      return
    }

    onAdd({ titolo, quando, reminder })

    setTitolo('')
    setQuando('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Titolo Scadenza</label>
        <input
          type='text'
          placeholder='Scadenza'
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Data & Ora</label>
        <input
          type='date'
          placeholder='Data'
          value={quando}
          onChange={(e) => setQuando(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check hide'>
        <label>Completato</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='AGGIUNGI' className='btn btn-block btn-green' />
    </form>
  )
}

export default AddTask
