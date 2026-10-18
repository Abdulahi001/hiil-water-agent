import Logo from '../assets/logo.png'
export default function Navbar()  {

    return (
        <div className='navbar'>
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className='app-name'>|Cruds|</h1>
        </div>
    )
}