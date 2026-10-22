import Logo from '../assets/logo.png'
export default function Navbar({page, setPage})  {
    function handleClick() {
        if (page === "form") {
            setPage("info")
        } else {
            setPage("form")
        }
    }
    return (
        <div className='navbar'>
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className='app-name'>|Fresh Water|</h1>
            <button className='toggle-btn' onClick={() => handleClick()}>
                {page === "form" ? "View Info" : "Edit Form"}
            </button>
        </div>
    )
}