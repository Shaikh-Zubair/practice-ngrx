import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../reducers/actions/user.actions';
import { UsersService } from '../services/users.service';
import { user } from '../state';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private usersService: UsersService) { }

  effectUsers$ = createEffect(() => this.actions$.pipe(
    ofType(GET_USERS),
    mergeMap(({ payload }) => this.usersService.getUsers()
      .pipe(
        map(users => ({ type: GET_USERS_SUCCESS, payload: { users, slc: payload } })),
        catchError(() => of({ type: GET_USERS_FAILURE, payload: { users: [user] } }))
      ))
  )
  );
}
