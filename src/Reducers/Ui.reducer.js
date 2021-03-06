import { SET_LOADER } from '../Actions/Ui.actions';

const initState = {
  loading: false
};

export const uiReducer = (ui = initState, action) => {
  switch (true) {

    case action.type.includes(SET_LOADER):
      return {...ui, loading: action.payload};

    default:
      return ui;
  }
};