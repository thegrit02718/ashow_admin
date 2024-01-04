import { State } from "../reducer/aptBasicInfoReducer";
import { Action } from "./Reducer";

export interface ComponentProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}
