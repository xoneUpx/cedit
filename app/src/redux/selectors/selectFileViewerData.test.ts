import {RootState} from '../store/store'
import selectFileViewerData from './selectFileViewerData'

describe('test for tree view', ()=>{
  test('should convert for userfile to treeview', () =>{

    const userFiles = [
      {id: '1', name: 'lol.js', relativePath: 'lols/lol.js', extension: 'js', code: 'console.log(lol)'},
      {id: '2', name: 'lol2.js', relativePath: 'lols/sub/lol2.js', extension: 'js', code: 'console.log(lol2)'},
    ];
    const state: RootState = {
      files: {
        userFiles,
      }
    }
    const expectedState = {
      id: expect.any(String),
      name: 'lols',
      children: [{
        id: '1',
        name: 'lol.js',
        extension: 'js',
      },
      {
        id: expect.any(String),
        name: 'sub',
        children: [{
          id: '2',
          name: 'lol2.js',
          extension: 'js',
        },]
      },
    ],
    }
    expect(selectFileViewerData(state)).toEqual(expectedState)
  })
})
