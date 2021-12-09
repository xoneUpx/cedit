import darkModeReducer,  {initialState, toggleDarkMode} from './reducer'
import { PayloadAction} from '@reduxjs/toolkit'

describe('test reducer darkmode', ()=> {
  test('should change display mode', ()=> {
    expect(darkModeReducer(initialState, toggleDarkMode )).toEqual(!initialState)
  });
  test('should enable darkmode if disabled', () =>{
      expect(darkModeReducer(false, toggleDarkMode)).toEqual(true)
  });
  test('should disable darkmode if enabled', ()=>{
    expect(darkModeReducer(true, toggleDarkMode)).toEqual(false)
  });

})
