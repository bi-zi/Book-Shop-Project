import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import ActionCreators from "../store2/actions"

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
