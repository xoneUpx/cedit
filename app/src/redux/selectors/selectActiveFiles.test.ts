import {RootState} from '../store/store'
import selectActiveFiles from './selectActiveFiles'

describe('test selector of active files', ()=>{
  test('test if selector returns active files', () => {
    const userFiles = [
      {id: '1', name: 'lol', relativePath: '/lol/lol', extension: '.js', code: 'console.log(lol)'},
      {id: '2', name: 'lol2', relativePath: '/lol/lol', extension: '.js', code: 'console.log(lol2)'},
    ];
    const activeFiles = ['1'];
    const state = {files: { userFiles, activeFiles}} as RootState;
    const expectedFiles = [
      {id: '1', name: 'lol', relativePath: '/lol/lol', extension: '.js', code: 'console.log(lol)'},];
    expect(selectActiveFiles(state)).toEqual(expectedFiles)

  })
})
