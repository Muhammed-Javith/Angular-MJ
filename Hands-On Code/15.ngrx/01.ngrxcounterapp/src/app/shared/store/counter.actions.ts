import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
export const increment = createAction("increment");
export const decrement = createAction("decrement");    
export const reset = createAction("reset");    
export const customincrement = createAction("customincrement", props<{value:number, action: string}>());
