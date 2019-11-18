import { createAction, props } from '@ngrx/store';
import { user } from 'src/app/state';


export const GET_USERS = '[Users Component] getting_users'
export const GET_USERS_SUCCESS = '[Users Component] getting_users_success'
export const GET_USERS_FAILURE = '[Users Component] getting_users_failure'

export const getUsers = createAction(GET_USERS, props<{ payload: number }>());
export const getUSersSuccess = createAction(GET_USERS_SUCCESS, props<{ payload: { users: user[], slc: number } }>());
export const getUsersFailure = createAction(GET_USERS_FAILURE, props<{ payload: user[] }>());