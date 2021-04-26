import React from "react";
//import {data} from '../data'
import {addMovieToList ,handleMovieSearch} from '../actions'

class Navbar extends React.Component {
  
     constructor(props){
       super(props);
       this.state={
        
         searchText:''
       }
     }
    
     handleAddToMovies=(movie)=>{
       this.props.dispatch(addMovieToList(movie))
       this.setState({
         showSearchResults:false
       })
     }

     handleSearch=()=>{
       const {searchText}=this.state;
       this.props.dispatch(handleMovieSearch(searchText ))
     };

     handleChange=(e)=>{
       this.setState({
         searchText: e.target.value
       })
     }

    
    render(){
         const {showSearchResults,result}=this.props.search;

  return (
    <div className="nav">
      <div className='search-container'>
          <input onChange={this.handleChange}/>
          <button id='search-btn' onClick={this.handleSearch}>Search</button>
          
          {showSearchResults && 
          <div clasName='search-results'>
            <div className='search-result'>
             <img src={result.Poster} alt='search-pic'/>
            <div className='movie-info'>
              <span>{result.Title}</span>
              <button onClick={()=> this.handleAddToMovies(result)}>
                Add to Movies
              </button>

            </div>
               </div>
            </div>
            }

      </div>
        
    </div>
  );
 } 
}

export default Navbar;
   