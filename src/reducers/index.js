import {combineReducers} from 'redux'
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
       console.log("movies reducer")
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

const initialSearchState={
      result:{}
}
export function search(state=initialSearchState,action ){
      console.log("search reducer")
       return state;
}

const initialRootState={
      movies: initialMoviesState,
      search: initialSearchState
}
// export function rootReducer(state=initialRootState,action ){
//       return {
//             movies: movies(state.movies,action),
//             search:search(state.search,action)
//       }
// }

export default combineReducers({

          movies:movies,  // property : reducers
          search:search
 
})
