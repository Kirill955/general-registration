import { rootReducer } from './reduxStore';

type RootReducerType = typeof rootReducer;
type AppStateType = ReturnType<RootReducerType>;

export default AppStateType;
