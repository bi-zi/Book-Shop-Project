import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store2/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
