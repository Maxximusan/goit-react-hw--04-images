import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { apiFetchGallery } from 'Api/ApiPixabay'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Button } from 'components/Button/Button'
import { Loader } from 'components/Loader/Loader'
import css from 'components/App.module.css'
import { ErrorReject } from 'components/ErrorRjected'



export const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
  
  
  useEffect(() => {
    

    if (searchQuery === '') {
      return;
    }

    

     apiFetchGallery(searchQuery, page)
      .then(
        (result) => {
             
          setImages(prevState => [...prevState, ...result.data.hits]);
          setTotalHits(result.data.totalHits);
          setIsLoading(false);
          
          if (result.data.totalHits === 0) {
            throw new Error ('Nothing found for your request, please, try again something else')
          }
                     
        })
      .catch(error => toast.error(error.message)) 
        
    
    // .catch(error => setError(error.message))
    
    // if (error.length > 0) {
    //   toast.error(error)
    // };

  }, [page, searchQuery]);
  
  


  const onSubmit = searchQuery => {
   
    setSearchQuery(searchQuery);
    setPage(1);
    setIsLoading(true);
    setError('');
    setImages([]);
    console.log(searchQuery);
  };
    
    
 

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
    };
    
  
      
    return (
      <div className={css.App}>
         
        <Searchbar onSubmit={onSubmit} />
        <ErrorReject errorMessage={error} />
        <ImageGallery images={images} />
        
        { isLoading && <Loader />}
        {images.length !== totalHits && !isLoading && (
          <Button loadMore={onLoadMore} />)}
        
    </div>
      );
      
  
};

