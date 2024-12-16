import {FC} from 'react'
import '@mdxeditor/editor/style.css'
import {MDXEditor, headingsPlugin} from '@mdxeditor/editor'

const Md: FC = function () {
  return (
    <>
      <MDXEditor markdown={'# Hello World'} plugins={[headingsPlugin()]} />
    </>
  )
}

export default Md
