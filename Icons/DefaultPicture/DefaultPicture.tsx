import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { type ViewStyle } from 'react-native/types'

interface Props {
  style: StyleProp<ViewStyle>
}

const DefaultPicture: React.FC<Props> = ({ style }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1000 1000"
    style={style}
  >
    <Path d="M670.1 442.8 567.6 637.7 329.9 197.8 139 817.4h738.9L670.1 442.8zm109.6-198.5c16.3 0 29.6-16.1 29.6-36s-13.2-36-29.6-36c-16.3 0-29.6 16.1-29.6 36s13.2 36 29.6 36z" />
    <Path d="M962.8 42.7v914.7H37.2V42.7h925.6M990 10H10v980h980V10z" />
  </Svg>
)

export default DefaultPicture
