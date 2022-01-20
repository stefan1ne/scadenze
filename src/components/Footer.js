import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Link to='/infos'>Info & Istruzioni</Link>
      <p>Copyright &copy; 2021 <a href="https://www.stefanocoggiola.com" target="_blank" rel="noreferrer">Stefano Coggiola</a></p>
    </footer>
  )
}

export default Footer
