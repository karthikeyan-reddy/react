import { Link } from 'react-router-dom' 

let Navbar = ()=>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <Link to={'/contacts'} className='navbar-brand'>view
                <i className="fa fa-mobile-phone" aria-hidden='true'></i>
                <span className="text-warning">Contacts</span>
                </Link>
                <Link to={'/contacts/add'} className='btn btn-success text-light'>Add New<i className="fa fa-plus text-warning" aria-hidden='true'></i>
                <span className="text-warning">Contact</span>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;