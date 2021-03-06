import '../App.css';
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import React from 'react';
import {data} from '../data';
import {addMovies, setShowFavourite} from '../actions/index'

class  App extends React.Component {

  componentDidMount(){
    //make api call
    //dispatch action

    const {store} =this.props

    store.subscribe(()=>{
      console.log('updated')
      this.forceUpdate()
    })

    //  store.dispatch({
    //   type:'ADD_MOVIES',
    //  movies: data,
    //  })
    store.dispatch(addMovies(data))

     console.log('STATE',this.props.store.getState())
 
  }

  isMovieFavourite=(movie)=>{
    //const {favourite} =this.props.store.getState();
    const {movies} =this.props.store.getState();
    const index = movies.favourite.indexOf(movie);

    if(index!==-1){
      console.log("found movie")
      return true;
    }
    return false;
  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourite(val));
  }

  render(){
    const {movies,search}=this.props.store.getState();   // {movies:{},search:{}}
    const{list,favourite,showFavourites}=movies; 
   // const{list,favourite,showFavourites}=this.props.store.getState();   // {movies:{},search:{}}   //it contains list[] and fav{}
   // const movies = this.props.store.getState()  {}
   // console.log('movies',this.props.store.getState())
   console.log('render',this.props.store.getState())
   const diplayMovies=showFavourites? favourite:list
      return (
          <div className="App">
          <Navbar dispatch={this.props.store.dispatch} search={search}></Navbar>
          <div className='main'>
            <div className='tabs'>
              <div className={`tab ${showFavourites?'': 'active-tabs' }`} onClick={()=> this.onChangeTab(false)}> Movies</div>  
              <div className={`tab ${showFavourites?'active-tabs':'' }`} onClick={()=> this.onChangeTab(true)}> Favourites</div>
            </div>
      
            <div className='list'>
                {diplayMovies.map((movie,index)=>  (
                <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}/>
                ))} 
              
                </div>
               
               {diplayMovies.length===0 ? <div className="no-movies">No movies to display!</div>:null}

              
          </div>
              
          </div>
        );
  }
} 

export default App;
