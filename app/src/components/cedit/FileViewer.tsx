import React from 'react'
import {makeStyles} from '@material-ui/core'
import {TreeItem} from '@material-ui/lab'
import {useAppSelector} from '../../redux/store/hooks'
import selectFileViewerData from '../../redux/selectors/selectFileViewerData'
import FileViewerStructure from '../../types/FileViewerStructure'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import FolderIcon from '@material-ui/icons/Folder'

const FileViewer = () => {
  const classes = useStyles()
  const fileViewerData = useAppSelector(selectFileViewerData)
  const renderTree = (nodes: FileViewerStructure) =>{
    const { id: NodeId, name: nodeName, extension} = nodes
    return (
      <TreeItem className={classes.treeItem} key={NodeId} label={nodeName} id={NodeId}>{Array.isArray(nodes.children) ? nodes.children.map(node =>renderTree(node)) : null}</TreeItem>
    )
  }
  if (Object.keys(fileViewerData).length) {
    return (
      <div className={classes.emptyMessage}>no files</div>
  )}
  return (
    <TreeView className={classes.root} defaultCollapseIcon={<FolderOpenIcon />} defaultExpandIcon={<FolderIcon />}>{renderTree(fileViewerData)}</TreeView>
  )
}
const useStyles = makeStyles( theme => {
  root: {
    padding: '0px 10px 10px',
    height: '100%',
    width: '100%',
  },
  treeItem: {
    padding: '2px',
    color: theme.font,
  },
  emptyMessage: {
    color. theme.font,
  }

})

export default FileViewer
