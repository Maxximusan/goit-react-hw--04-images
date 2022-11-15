import PropTypes from "prop-types";
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSearchAlt2 } from "react-icons/bi";
 
import css from 'components/Searchbar/Searchbar.module.css'

export const Searchbar = ({onSubmit}) => {

    const [searchQuery, setSearchQuery] = useState('')

    
const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase() );
    };
    
 const handleSubmit = event => {
     event.preventDefault();

     if (searchQuery.trim() === '') {
         toast.info('Enter something.');
                 return;
     }

     setSearchQuery('');
     onSubmit(searchQuery)
    };



    return (
    <>
<header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.SearchForm__button}>
           <span className={css.SearchForm__button_label}><BiSearchAlt2 size={30} /></span>
    </button>

    <input
      className={css.SearchForm__input}
      type="text"
                value={searchQuery}
                onChange={handleNameChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
            
            />
            
        </form>
            </header>
            
    </>
    )
    
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};