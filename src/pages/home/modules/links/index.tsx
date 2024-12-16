import './style.css'
import {FC} from 'react'

const Links: FC = function () {
  return (
    <>
      <section className="links">
        {/* <!--    <h2>links</h2>--> */}
        <div className="link-div">
          <a
            className="link"
            href="https://www.linkedin.com/in/kevindybeck/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </div>
        <div className="link-div">
          <a
            className="link"
            href="https://www.github.com/ruckel"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </div>
        <div className="link-div">
          <a className="link" href="../resume" target="_blank">
            resumé
          </a>
        </div>
        <div className="link-div">
          <a className="link" href="mailto:kevindybeck@yahoo.com">
            kevindybeck@yahoo.com
          </a>
        </div>
      </section>
    </>
  )
}

export default Links
