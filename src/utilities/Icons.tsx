import { IconType } from "react-icons"
import * as TbIcons from "react-icons/tb"

interface IconDictionary {
  [key: string]: IconType
}

const Icons: IconDictionary = {
  cost: TbIcons.TbChartBar,
  longTerm: TbIcons.TbTelescope,
  understanding: TbIcons.TbBrain,
  tradeoffs: TbIcons.TbScale,
  expand: TbIcons.TbSquareRoundedPlusFilled,
  collapse: TbIcons.TbSquareRoundedMinusFilled
}

export default Icons