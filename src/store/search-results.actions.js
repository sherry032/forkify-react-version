import {searchResultsActions} from "./search-results.slice"
import { AJAX } from '../helper/helpers'
import { API_URL, KEY } from '../helper/config'


export const loadSearchResults = (query)=>{
    return async (dispatch)=>{
       try{
    //    dispatch(searchResultsActions.setQuery(query))
       const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
       const results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...(rec.key && { key: rec.key }),
            };
            });
        dispatch(searchResultsActions.setQuery(query))
        dispatch(searchResultsActions.setSearchResults(results))
    }catch(err){
        console.log(err)
    }

    }
}

