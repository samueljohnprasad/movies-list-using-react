// {
//     type:'ADD_MOVIES'
//     movies:[]
// }
// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITE='ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES'

export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addFavourite(movie){
    return {
        type:ADD_FAVOURITE,
        movie:movie
    }
}

export function removeFavourite(movie){
    return {
        type:REMOVE_FROM_FAVOURITES,
        movie:movie
    }
}

export function setShowFavourite(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val: val
    }
}