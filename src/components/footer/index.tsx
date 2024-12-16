import './style.css'
import gh from '../../assets/images/github-mark-white.svg'
import li from '../../assets/images/linkedin.svg'
import cv from '../../assets/images/cv.svg'
import email from '../../assets/images/email.svg'
import {FC, useEffect, useState} from 'react'
import useScrollValue from '../../hooks/useScrollValue'
import {DEV, PROD} from '../../env'

type FooterProps = {
  // scrollVal: number | undefined
}
type HiddenElements = {
  emailIcon: boolean
  emailAddress: boolean
  emailCopyNotice: boolean
}

// eslint-disable-next-line
const Footer: FC<FooterProps> = function (props: FooterProps) {
  const emailAddress: string = 'kevin.dybeck@yahoo.com'
  const githubUrl: string = 'https://github.com/ruckel'
  const linkedInUrl: string = 'https://linkedin.com/in/kevindybeck/'

  // const cvUrl: string = '@assets/K Dybeck, resumé.pdf'
  const cvUrl: string = new URL('@assets/K Dybeck, resumé.pdf', import.meta.url)
    .href

  // const {scrollY} = useScrollValue(window)
  const [emailIconHidden, setEmailIconHidden] = useState<boolean>(false)
  const [emailAddressHidden, setEmailAddressHidden] = useState<boolean>(true)
  const [emailCopyNoticeHidden, setEmailCopyNoticeHidden] =
    useState<boolean>(true)
  const [hiddenElements, setHiddenElements] = useState<HiddenElements>({
    emailIcon: false,
    emailAddress: true,
    emailCopyNotice: true,
  })
  const [opacity, setOpacity] = useState<number>(0)

  const [scrollY, setScrollY] = useState<number>(window.scrollY)

  useEffect(() => {
    console.debug('adding event listener')
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    if (DEV) document.title = 'kevindybeck.com' + ' (' + scrollY + ')'
  }, [scrollY])

  function showEmailCopyNotice(timeout: number) {
    setEmailCopyNoticeHidden(false)
    setOpacity(1)
    setTimeout(() => {
      setEmailCopyNoticeHidden(true)
      setOpacity(0)
    }, timeout)
  }

  function handleClick(e: Event) {
    const {target}: {target: EventTarget | null} = e
    if (!target) return
    const {id}: {id: string} = target

    // console.debug('switching')
    switch (id) {
      case 'mail':
        console.debug('case mail')
        navigator.clipboard.writeText(emailAddress)
        console.log('Copied', emailAddress, 'to clipboard')
        setHiddenElements({
          ...hiddenElements,
          emailIcon: !hiddenElements.emailIcon,
          emailAddress: !hiddenElements.emailAddress,
        })
        showEmailCopyNotice(2000)
        break
      case 'gh':
        console.debug('case gh')
        break
      case 'linkedin':
        console.debug('case linkin')
        break
      case 'cv':
        console.debug('case cv')
        break
      default:
        console.debug('case def')
        break
    }
  }

  return (
    <>
      <section className="footer" style={scrollY > 10 ? {} : {display: 'none'}}>
        <section className="left-side">
          {/* <section>kevindybeck@yahoo.com </section> */}
          {/* <section>{window.scrollY}</section> */}
        </section>

        <p
          id="email-copy-notice"
          className={
            emailCopyNoticeHidden ? 'copy-notice hide' : 'copy-notice show'
          }
        >
          Copied to clipboard!
        </p>

        <section className="right-side">
          <a
            id="address"
            href={'mailto:' + emailAddress}
            hidden={hiddenElements.emailAddress}
          >
            <p>{emailAddress}</p>
          </a>
          <img
            id="mail"
            src={email}
            alt="email address"
            style={{fill: 'white'}}
            onClick={handleClick}
            hidden={hiddenElements.emailIcon}
          />
          <a href={githubUrl}>
            <div>
              <img id="gh" src={gh} alt="github link" />
            </div>
          </a>
          <a href={linkedInUrl}>
            <div>
              <img id="linkedin" src={li} alt="linkedin link" />
            </div>
          </a>
          <a href={cvUrl}>
            <div>
              <img id="cv" src={cv} alt="resumé link" />
            </div>
          </a>
        </section>
      </section>
    </>
  )
}

export default Footer
