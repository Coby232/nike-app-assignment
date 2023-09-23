import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#202727"
      d="M13.5 9a1.5 1.5 0 0 0-.442-1.05L9.84 4.725A.75.75 0 1 0 8.783 5.79l2.467 2.46h-7.5a.75.75 0 0 0 0 1.5h7.5l-2.467 2.467a.75.75 0 1 0 1.057 1.066l3.218-3.226A1.5 1.5 0 0 0 13.5 9Z"
    />
  </Svg>
)
export default SvgComponent
