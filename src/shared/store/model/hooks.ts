import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { AppState, AppDispatch } from 'shared/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
