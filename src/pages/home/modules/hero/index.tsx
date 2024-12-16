import './style.css'
import {FC} from 'react'

const Hero: FC = function () {
  return (
    <>
      <section className="intro">
        <div className="intro-container">
          {/* <div>i am</div> */}
          <div className="name">Kevin Dybeck</div>
          <div>system developer, back ender, nerd</div>
        </div>
      </section>
    </>
  )
}

export default Hero
