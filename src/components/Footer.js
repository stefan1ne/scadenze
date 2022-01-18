import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 <a href="https://www.coggiola.net" target="_blank" rel="noreferrer">Stefano Coggiola</a></p>
      <Link to='/infos'>Info & Istruzioni</Link>
    </footer>
  )
}

export default Footer
