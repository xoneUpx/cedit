import darkModeReducer,  {initialState, toggleDarkMode} from './reducer'
describe('test reducer darkmode', ()=> {
  test('should change display mode', ()=> {
    expect(darkModeReducer(initialState, toggleDarkMode )).toEqual(!initialState)
  })

})
