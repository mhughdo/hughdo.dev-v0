import {useLayoutEffect} from 'react'

export const useScrollFreeze = isToggledOn => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow
    if (isToggledOn) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = original
    }
  }, [isToggledOn])
}
