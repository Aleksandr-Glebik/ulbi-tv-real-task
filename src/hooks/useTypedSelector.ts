import { RootState } from '../store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector