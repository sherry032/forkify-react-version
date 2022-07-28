import SearchForm from "../search-form/search-form.component"
import Navigation from "../navigation/navigation.component"


const Header = ()=>{
  return(
    <header className="header">
        <img src="/logo.png" alt="Logo" className="header__logo" />
        <SearchForm />
        <Navigation />
    </header>
  )
}

export default Header