import { createAction } from '@ngrx/store';

export const INCREMENT = '[Counter Component] Incement';
export const DECREMENT = '[Counter Component] Decrement';
export const RESET = '[Counter Component] Reset';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);