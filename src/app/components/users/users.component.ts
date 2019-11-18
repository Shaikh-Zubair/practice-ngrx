import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { user } from 'src/app/state';
import { Store, select } from '@ngrx/store';
import { getUsers } from 'src/app/reducers/actions';
import { State } from '../../reducers'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<user[]>;

  constructor(private userService: UsersService, private store: Store<State>) { }

  ngOnInit() {
    this.initUsers();
    this.getUsers();
  }

  initUsers() {
    this.users$ = this.store.pipe(
      select('users')
    );
  }

  getUsers() {
    this.store.dispatch(getUsers({ payload: 10 }))
  }

}
