import type { ReactNode } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BrainCircuit, ChartColumnIncreasingIcon, ScaleIcon, TelescopeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ValuesProps {
  className?: string
}

export default function Values({ className }: ValuesProps) {
  return (
    <Card className={cn("bg-muted h-fit", className)}>
      <CardHeader>
        <CardTitle className="text-center">Values</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          type="single"
          collapsible
        >
          <ValueItem
            value="value-1"
            icon={<ChartColumnIncreasingIcon />}
            title="Optimize results within cost and deadlines"
            description="I believe that delivering value, i.e. the proper solution to your technical challenges, should be optimized over cost and deadlines."
            explanation="Costs and deadlines are still important, but they should be used to determine what's possible to achieve, in order to maximize the value within those constraints."
          />
          <ValueItem
            value="value-2"
            icon={<TelescopeIcon />}
            title="Building for the long-term over the short-term"
            description="I believe building solutions that hold up over time, and are easy to maintain and operate, are ideal over quicker, shorter-term solutions."
            explanation="Short-term solutions may still be the right option in certain circumstances, but they should always be built with thought towards the future. Long-term solutions reduce overhead costs from maintenance or rework."
          />
          <ValueItem
            value="value-3"
            icon={<BrainCircuit />}
            title="Deep understanding leads to better solutions"
            description="I believe that in order to solve problems well a strong understanding of that problem has to be established."
            explanation="Asking questions. A lot of questions. This is a form of exploration, uncovering the problem in the same way an archaeologist would uncover a fossil. Close, on-going collaboration and iterative development is key to establishing both a deeper and shared understanding."
          />
          <ValueItem
            value="value-4"
            icon={<ScaleIcon />}
            title="Consider incentives and tradeoffs, not just solutions"
            description="I believe that most problems won't have perfect solutions, but come with tradeoffs and incentives that need to be considered."
            explanation="Most problems can be solved in multiple ways, but what defines a high-quality solution is one that accounts for, and addresses, the tradeoffs and incentives."
          />
        </Accordion>
      </CardContent>
    </Card>
  )
}

function ValueItem({
  value,
  icon,
  title,
  description,
  explanation,
}: {
  value: string,
  icon?: ReactNode
  title: string,
  description: string,
  explanation: string,
}) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="w-full">
        <div className="flex items-center gap-4">
          {icon
            ? <div className="p-2 rounded-xl w-fit bg-muted-foreground text-muted">
                {icon}
              </div>
            : null
          }
          <div className="lg:text-base">
            {title}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="prose prose-sm lg:prose-base w-full">
        <p>
          {description}
        </p>
        <h4>What this means</h4>
        <p>
          {explanation}
        </p>
      </AccordionContent>
    </AccordionItem>
  )
}
