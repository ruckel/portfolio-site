import './style.css'
import {FC} from 'react'

const ErrorFallback: FC = function (
  {
    /*error,*/
    /*resetErrorBoundary*/
  },
) {
  return (
    <>
      <section className="intro">
        <div className="intro-container">
          <div className="name">Kevin Dybeck</div>
          <div>system developer, back ender, nerd</div>
          <p>404</p>
        </div>
      </section>
    </>
  )
}

export default ErrorFallback
