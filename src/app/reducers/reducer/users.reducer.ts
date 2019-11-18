import { createReducer, on } from '@ngrx/store';
import { Iuser } from 'src/app/state';
import { getUSersSuccess } from '../actions';

export const userState: Iuser[] = [
    {
        userId: 0,
        id: 0,
        title: 'no title',
        completed: false,
    }
]

const _userReducer = createReducer(
    userState,
    on(getUSersSuccess, (state, { payload }) => {
        return [...payload.users.slice(0, payload.slc)];
    }),
);

export function userReducer(state: Iuser[] | undefined, action: any) {
    return _userReducer(state, action);
}