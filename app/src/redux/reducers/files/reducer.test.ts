import {PayloadAction} from '@reduxjs/toolkit'
import fileReducer, {initialState, addActiveFile, setFiles} from './reducer'

describe('test file reducer', ()=>{
  test('should return initial state if non provided', ()=>{
    expect(fileReducer(undefined, {} as PayloadAction)).toEqual(initialState)
  });
  test('should set files', ()=>{
    const userFiles=[
      {id: 1, name: 'lol', relativePath: '/lol/lol', code: `console.log(lol)`, extension: '.js'}
    ];
    const expectedFiles = {
      ...initialState, userFiles: userFiles };
    expect(fileReducer(initialState, setFiles(userFiles))).toEqual(expectedFiles);
  });
  test('should add new file id if active file action is dispatched', ()=>{
      const fileid = '1';
      const expectedId = {
        ...initialState, activeFiles: [fileid]
      };
      expect(fileReducer(initialState, addActiveFile(fileid))).toEqual(expectedId)
  });
})
