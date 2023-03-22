import { FilterAction, OPEN_FILTER, CLOSE_FILTER} from "./actions"

interface FilterState {
  isOpen: boolean
}

const defaultState: FilterState = {
  isOpen:false
}

export const filterReducer = (state:FilterState = defaultState, action: FilterAction):FilterState => {
  switch(action.type){
    case OPEN_FILTER:
      return{
        ...state,
        isOpen: true
      }
    case CLOSE_FILTER:
      return{
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}