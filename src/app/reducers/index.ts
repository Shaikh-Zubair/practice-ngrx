import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, userReducer } from './reducer';
import { Iuser } from '../state';

export interface State {
  count: number;
  users: Iuser[];
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
  users: userReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
