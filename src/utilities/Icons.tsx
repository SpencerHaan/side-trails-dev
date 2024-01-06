import { IconType } from "react-icons"
import * as TbIcons from "react-icons/tb"

interface IconDictionary {
  [key: string]: IconType
}

const Icons: IconDictionary = {
  number1: TbIcons.TbNumber1,
  number2: TbIcons.TbNumber2,
  number3: TbIcons.TbNumber3,
  number4: TbIcons.TbNumber4,
  number5: TbIcons.TbNumber5,
  cost: TbIcons.TbChartBar,
  longTerm: TbIcons.TbTelescope,
  understanding: TbIcons.TbBrain,
  tradeoffs: TbIcons.TbScale,
  expand: TbIcons.TbSquareRoundedPlusFilled,
  collapse: TbIcons.TbSquareRoundedMinusFilled,
  leftArrow: TbIcons.TbSquareRoundedChevronLeftFilled,
  rightArrow: TbIcons.TbSquareRoundedChevronRightFilled,
}

export default Icons