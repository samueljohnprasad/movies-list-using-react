
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES} from '../actions'

const initialMoviesState={
      list:[],
      favourite:[],
      showFavourites:false
}
export  function movies(state=initialMoviesState,action){

      // if(action.type===ADD_MOVIES){
      //    return {
      //      ...state,
      //      list:action.movies

      //    }
      // }

      // return state;

      switch(action.type){
            case ADD_MOVIES:
                  return {
                        ...state,
                        list: action.movies
                  }
            case ADD_FAVOURITE:
                  return {
                        ...state,
                        favourite: [action.movie, ...state.favourite]
                  }
            case REMOVE_FROM_FAVOURITES :
                       const filteredArray= state.favourite.filter(
                             movie=> movie.Title!==action.movie.Title)
                        return {
                              ...state,
                              favourite:filteredArray
                        }
            
            case SET_SHOW_FAVOURITES:
                   return {
                         ...state,
                         showFavourites:action.val
                   }
            default:
                  return state;
      }

}


