import React, {useRef, DOMAttributes, AriaAttributes} from 'react'
import {makeStyles, Button } from '@material-ui/core'
import {Common} from '../../theme/colors'
import {useAppDispatch} from '../../redux/store/hooks'
import readFiles from '../../redux/thunks/files/readFiles'

const OpenWorkspace = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = () => {inputRef.current?.click()}
  const onFileUpload = async () => {
    try {
      const files = inputRef.current?.files as FileList
      await dispatch(readFiles(files))
      console.log(files)
    }
    catch (err){ console.log(err)}
      }
  return (
    <div>
    <Button className={classes.button} onClick={onClick}>
    workspace
    </Button>
    <input type="file" className={classes.input} directory="" webkitdirectory="" ref={inputRef} onChange={onFileUpload} />
    </div>
  )
}
const useStyles = makeStyles(() =>({
  button: {
    color: Common.white,
  },
  input: {
    display: 'none',
  },
}));
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
};
export default OpenWorkspace;
