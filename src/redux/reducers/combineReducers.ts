import { combineReducers } from 'redux';

import { banksSlice } from './../features';

export default combineReducers({ banks: banksSlice });
