import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
    <Path
      fill='#000'
      d='M.833 5h18.334a.833.833 0 0 0 0-1.667H.833A.833.833 0 0 0 .833 5ZM.833 9.167H12.5a.833.833 0 0 0 0-1.667H.833a.833.833 0 0 0 0 1.667ZM12.5 15.833H.833a.833.833 0 1 0 0 1.667H12.5a.833.833 0 0 0 0-1.667ZM19.167 11.667H.833a.833.833 0 1 0 0 1.666h18.334a.833.833 0 0 0 0-1.666Z'
    />
  </Svg>
);
export default SvgComponent;
