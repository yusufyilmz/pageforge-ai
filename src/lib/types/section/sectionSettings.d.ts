export type SectionSettings = {
  showTitle?: boolean
  showDescription?: boolean
  titlePosition?:
    | 'top-center'
    | 'top-left'
    | 'sticky-top'
    | 'sticky-left'
    | 'sticky-right'
  titleSize?: 'small' | 'medium' | 'large' | 'xl'
  titleWeight?: 'normal' | 'bold' | 'extrabold'
  titleAlign?: 'center' | 'left' | 'right'
  titleAnimation?: 'none' | 'fade-in' | 'slide-up' | 'zoom-in'
  entranceAnimation?: 'none' | 'fade-in' | 'slide-up' | 'zoom-in'
  layoutMode?: 'one-column' | 'two-column' | 'grid' | 'masonry'
  backgroundColor?: string
  backgroundImage?: string
  backgroundGradient?: string
  hoverEffect?: 'none' | 'scale' | 'brightness' | 'tilt'
  tiltDirection?: 'x' | 'y' | 'both'
  tiltStrength?: number
  paddingTop?: 'none' | 'small' | 'medium' | 'large'
  paddingBottom?: 'none' | 'small' | 'medium' | 'large'
  gapBetweenItems?: 'small' | 'medium' | 'large'
  showOnDesktop?: boolean
  showOnTablet?: boolean
  showOnMobile?: boolean
  columns?: 2 | 3 | 4
  useCard?: boolean
  center?: boolean
}
//# sourceMappingURL=sectionSettings.d.ts.map
