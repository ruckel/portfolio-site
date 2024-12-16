import {headingsPlugin, MDXEditor, MDXEditorMethods} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import './style.css'
import {FC, useEffect, useRef, useState} from 'react'

const Nackademin: FC = function () {
  const [md, setMd] = useState<string>('no md')
  const ref = useRef<MDXEditorMethods>(null)

  useEffect(() => {
    if (md !== 'no md') ref.current?.setMarkdown(md)
  }, [md])

  useEffect(() => {
    // import('https://moln.kevindybeck.com/s/mdtest/download/241216.md').then(
    import('@assets/nackademin.md?raw').then(res => {
      setMd(res.default)
      ref.current?.setMarkdown(md)
    })
  }, [])

  return (
    <>
      <section className="about-me">
        <div className="wrapper-about">
          <div className="markdown">
            <MDXEditor
              ref={ref}
              // onChange={console.log}
              markdown={md}
              plugins={[headingsPlugin()]}
              contentEditableClassName="md-prose"
              readOnly
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Nackademin
