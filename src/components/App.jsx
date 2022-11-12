import React from 'react';
import { toast } from 'react-toastify';
import { apiFetchGallery } from 'Api/ApiPixabay'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Button } from 'components/Button/Button'
import { Loader } from 'components/Loader/Loader'
import css from 'components/App.module.css'
import { ErrorReject } from 'components/ErrorRjected'



export class App extends React.Component {
  state = {
   
    searchQuery: '',
    page: 1,
    images: [],
    totalHits: 0,
    error: '',
    isLoading: false,
    
  }
  
  
  componentDidUpdate(prevProps, prevState) { 
    const prevImages = prevState.searchQuery;
    const nextImages = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    

    if (prevImages !== nextImages || prevPage !== nextPage) {
      
      this.fetchGallery(nextImages, nextPage);
    }

    
     if (this.state.error.length > 0 ) {
        toast.error(this.state.error)
        }
    
  }
  
  fetchGallery(nextImages, nextPage) {
    apiFetchGallery(nextImages, nextPage)
      .then(
        (result) => {
             
          this.setState(prevState => {
            return {
              isLoading: false,
              images: [...prevState.images, ...result.data.hits],
              totalHits: result.data.totalHits,
              
            };

          });
          if (result.data.totalHits === 0) {
            throw new Error ('Nothing found for your request, please, try again something else')
          }
                     
        })
    .catch(error => this.setState({error: error.message}) )

  }


  onSubmit = searchQuery => {
   
    this.setState({ searchQuery, page: 1, isLoading: true, error:'', images: []});
    console.log(searchQuery);
    
 };

  onLoadMore = () => {
     this.setState(prevState => ({
       page: prevState.page + 1,
       isLoading: true
    }));
  }

  
  
  render() {
    const { images, error, totalHits, isLoading,} = this.state
  
      
    return (
      <div className={css.App}>
         
        <Searchbar onSubmit={this.onSubmit} />
        <ErrorReject errorMessage={error} />
        <ImageGallery images={images} />
        
        { isLoading && <Loader />}
        {images.length !== totalHits && !isLoading && (
          <Button loadMore={this.onLoadMore} />)}
        
    </div>
      );
      }
  
};

