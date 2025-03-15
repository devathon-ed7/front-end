import * as React from "react"

// Definimos breakpoints estándar
export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024
export const DESKTOP_BREAKPOINT = 1280

/**
 * Hook para detectar si el dispositivo es móvil
 * @returns {boolean} true si el ancho de la ventana es menor que MOBILE_BREAKPOINT
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

/**
 * Hook para detectar si el dispositivo es tablet
 * @returns {boolean} true si el ancho de la ventana está entre MOBILE_BREAKPOINT y TABLET_BREAKPOINT
 */
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    }
    
    window.addEventListener("resize", handleResize)
    handleResize() 
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return !!isTablet
}

/**
 * Hook para obtener el tipo de dispositivo actual
 * @returns {'mobile' | 'tablet' | 'desktop'}
 */
export function useDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const [deviceType, setDeviceType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType('mobile')
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }
    
    window.addEventListener("resize", handleResize)
    handleResize() 
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return deviceType
}