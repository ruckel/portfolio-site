import {headingsPlugin, MDXEditor, MDXEditorMethods} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import './style.css'
import {FC, useEffect, useRef, useState} from 'react'
const Summary: FC = function () {
  const [md, setMd] = useState<string>('no md')
  const ref = useRef<MDXEditorMethods>(null)

  useEffect(() => {
    if (md !== 'no md') ref.current?.setMarkdown(md)
  }, [md])

  useEffect(() => {
    // import('https://moln.kevindybeck.com/s/mdtest/download/241216.md').then(
    import('@assets/about.md?raw').then(res => {
      setMd(res.default)
      ref.current?.setMarkdown(md)
    })
  }, [])

  return (
    <>
      <section className="about-me">
        <div className="wrapper-about">
          <div className="markdown">
            {/* <button onClick={() => ref.current?.setMarkdown('new markdown')}> */}
            {/* Set new markdown */}
            {/* </button> */}
            {/* <button */}
            {/* onClick={() => */}
            {/* ref.current?.insertMarkdown('new markdown to insert') */}
            {/* } */}
            {/* > */}
            {/* Insert new markdown */}
            {/* </button> */}
            {/* <button onClick={() => console.log(ref.current?.getMarkdown())}> */}
            {/* Get markdown */}
            {/* </button> */}
            {/* <MDXEditor markdown={'# Hello World'} plugins={[headingsPlugin()]} /> */}

            {/* prettier-ignore */}
            {/* <MDXEditor ref={ref} onChange={console.log} markdown={md} plugins={[headingsPlugin()]} contentEditableClassName="md-prose" /> */}
          </div>

          <div className="ten-vh-divider" />
          {/* <!--            <h2 className="about-title">who am i?</h2>--> */}

          <p>
            It took me a few years to decide what I wanted to be when I grow up.
            After spending my high school going from computer science to music
            production and live audio followed by a few internships in the field
            I realized that music was too much of a passion for me to compete in
            the market. Now I am back to computers, or studying how to
            manipulate them. I have always been somewhat of a nerd.
          </p>
          <div className="three-vh-divider" />
          <h3 className="bigger-title">a few points that makes me, me:</h3>

          <h3>I am a huge music nerd</h3>
          <div className="point-text ">
            Every year I keep racking up 100 000+ minutes on my Spotify wrapped
            and I own more music instruments than I am willing to openly admit.
          </div>

          <h3>International mindset</h3>
          <div className="point-text">
            Expats in Sweden connect well with me. I connect well with expats.
            More than once I have become their &quot;in between&quot; when they
            experience nordic behaviour and culture.
          </div>

          <h3>My dream: Travel by living - with a base in Stockholm</h3>
          <div className="point-text">
            I want to see as much of the world as possible. But not as a
            tourist. As a local. Being able to spend 3+ months in a place while
            working seems like the perfect way to achieve this.
          </div>

          <h3>Open source aficionado</h3>
          <div className="point-text">
            Openly auditable services and products are important to create trust
            and transparency.
          </div>

          <h3>Design minded</h3>
          <div className="point-text">
            Good design makes a service or product intuitive. Intuition is a
            powerful tool.
          </div>

          <h3>Privacy concious</h3>
          <div className="point-text">
            Swedes usually looks at me as if I am about to put on a tin foil hat
            whenever I mention privacy. But I am not, I just try to adapt to a
            somewhat privacy conscious lifestyle.
          </div>

          <div className="ten-vh-divider" />
        </div>
      </section>
    </>
  )
}

export default Summary
