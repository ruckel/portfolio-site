import {useState} from 'react'

type ScrollVal = {
  scrollX: number
  scrollY: number
}

function useScrollValue(window: Window) {
  const [val, setVal] = useState<ScrollVal>({scrollX: 0, scrollY: 0})
  const [init, setInit] = useState<boolean>(false)

  function initEventListener() {
    setInit(true)
    console.debug('firing event listener')

    window.addEventListener('scroll', () => {
      const {scrollX, scrollY} = window
      // console.debug('eventlistener:', window.scrollY)
      setVal({scrollX: window.scrollX, scrollY: window.scrollY})
    })
  }

  if (!init) initEventListener()

  return val
}

export default useScrollValue
