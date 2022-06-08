import {legacy_createStore} from 'redux'
import { reducer } from './reducer'

let initState={
    count:0,
    query:""
}

export const store =legacy_createStore (reducer,initState)