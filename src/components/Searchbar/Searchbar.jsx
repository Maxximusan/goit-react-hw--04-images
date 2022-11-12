import PropTypes from "prop-types";
import { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSearchAlt2 } from "react-icons/bi";
 
import css from 'components/Searchbar/Searchbar.module.css'

export class Searchbar extends Component {

state = {
    searchQuery: '',
    // page: 1,
    }
    
handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    };
    
 handleSubmit = event => {
     event.preventDefault();

     if (this.state.searchQuery.trim() === '') {
         toast.info('Enter something.');
        //  alert('WHAT A FUCK? Enter Something')
         return;
     }

     this.setState({ searchQuery: '' });
     this.props.onSubmit(this.state.searchQuery)
    };


render() {
    return (
    <>
<header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchForm__button}>
           <span className={css.SearchForm__button_label}><BiSearchAlt2 size={30} /></span>
    </button>

    <input
      className={css.SearchForm__input}
      type="text"
                value={this.state.searchQuery}
                onChange={this.handleNameChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
            
            />
            
        </form>
            </header>
            
    </>
    )
    }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};