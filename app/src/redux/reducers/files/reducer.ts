import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import UserFile from '../../../types/UserFile'

export interface FileState {
  userFiles: UserFile[];
  activeFiles: string[];
  editorActiveFile: string | null;
}
export const initialState: FileState = {
  userFiles:[],
  activeFiles: [],
  editorActiveFile: null,

}
const fileSlice = createSlice(
{
  name: 'fileSlice',
  initialState: initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<UserFile[]>)=>{
      state.userFiles = action.payload
      state.activeFiles=[]
    },
    addActiveFile: (state, action: PayloadAction<string>) => {
      state.activeFiles.push(action.payload)
    },
    removeActiveFile: (state, action: PayloadAction<string>) =>{
      state.activeFiles = state.activeFiles.filter(fileId => fileId!==action.payload)
    },
    updateFileCode: (state, action: PayloadAction<{fileId: string; newCode: string}>) => {
      const {fileId, newCode} = action.payload
      const userfile = state.userFiles.find(file => file.id===fileId)
      if (userfile) {
        userfile.code=newCode
      }
    },
    setEditorActivefile: (state, action: PayloadAction<string|null>) =>{
      state.editorActiveFile = action.payload
    }
  }
}

)
const fileReducer =fileSlice.reducer
export const {setFiles, addActiveFile, setEditorActivefile, removeActiveFile, updateFileCode} = fileSlice.actions
export default fileReducer
