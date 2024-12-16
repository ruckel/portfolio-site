// import icon from '@assets/images/favicon.svg'
// import css from './index.module.css';
// import cla from 'classnames';
import './index.css'
import {FC} from 'react'
// import {DEV, MODE, PROD} from '../../env'
import Resume from './modules/resume'
import Summary from './modules/summary'
// import Links from './modules/links'
import Hero from './modules/hero'
import Footer from '../../components/footer'
// import useScrollValue from '../../hooks/useScrollValue'

// type ScrollVal = {
// x: number
// y: number
// init: boolean
// }

const Home: FC = function () {
  return (
    <>
      <div className="content-wrapper">
        <Hero />
        {/* <Links /> */}
        <Summary />
        <Resume />
        <Footer /*scrollVal={scrollVal}*/ />
      </div>
    </>
  )
}

export default Home
