import { IconType } from "react-icons"
import {
  TbBrain,
  TbChartBar,
  TbScale,
  TbTelescope,
} from "react-icons/tb"

interface IconDictionary {
  [key: string]: IconType
}

const Icons: IconDictionary = {
  cost: TbChartBar,
  longTerm: TbTelescope,
  understanding: TbBrain,
  tradeoffs: TbScale,
}

export default Icons