import search from '../assets/search.svg'


export default function Header(){
    return(
        <header className="header">
              <div className="header_search">
                    <img src={search} alt="Search"/>
                    <input type="text" name="search" placeholder="Search" />
              </div>
              <div className='header_auth'>
                    <button>Sign in</button>
                    <button>Sign up</button>
              </div>
        </header>
    )
}