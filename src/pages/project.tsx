import { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Card from "../components/Card"
import { StaticImage } from "gatsby-plugin-image"
import Testimonial from "../components/Testimonial"

interface TagProperties {
  text: string
}

const Tag = ({text}: TagProperties) => {
  return (
    <div className="w-28 p-2 bg-lion text-zinc-50 text-center rounded-full">
      {text}
    </div>
  )
}

const ProjectPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section.List>
        <Section.Item
          title="Project Title"
          subtitle='Company Inc.'
        >
          <div className="flex gap-4 justify-center">
            <Tag text="Tag 1"/>
            <Tag text="Tag 2"/>
            <Tag text="Tag 3"/>
          </div>
          <Card>
            <p className="text-center text-2xl 3xl:text-3xl">
              TL;DR
            </p>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg 3xl:text-xl text-zinc-500">Problem</p>
              <p className="text-xl 3xl:text-2xl">
                Diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum
              </p>
              <p className="text-lg 3xl:text-xl text-zinc-500">Solution</p>
              <p className="text-xl 3xl:text-2xl">
                Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut
              </p>
              <p className="text-lg 3xl:text-xl text-zinc-500">Result</p>
              <p className="text-xl 3xl:text-2xl">
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh
              </p>
            </div>
          </Card>
        </Section.Item>
        <Section.Item title="Deeper Dive">
          <div className="flex flex-col gap-4">
            <p className="text-xl 3xl:text-2xl text-zinc-500">
              Company Inc.
            </p>
            <div className="flex flex-row gap-4 text-base 3xl:text-lg">
              <div>
                <StaticImage src="https://placehold.co/128/png" alt="" width={128} height={128} layout="fixed" className="bg-white rounded-xl"/>
              </div>
              <div>
                Donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis
              </div>
            </div>
            <p className="text-xl 3xl:text-2xl text-zinc-500">
              Story
            </p>
            <div className="space-y-4 text-base 3xl:text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in mollis. Tristique magna sit amet purus gravida quis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sit amet justo donec enim diam. Amet venenatis urna cursus eget. Quis hendrerit dolor magna eget est. Faucibus a pellentesque sit amet porttitor eget. Elementum eu facilisis sed odio morbi quis commodo. Interdum velit laoreet id donec ultrices tincidunt arcu. Ipsum nunc aliquet bibendum enim facilisis. Odio facilisis mauris sit amet massa. Egestas sed tempus urna et pharetra pharetra massa. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Nulla malesuada pellentesque elit eget gravida cum sociis.
              </p>
              <p>
                Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Non nisi est sit amet. Arcu felis bibendum ut tristique et. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Vivamus at augue eget arcu dictum varius duis. Sem fringilla ut morbi tincidunt augue. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
              </p>
              <p>
                Iaculis eu non diam phasellus vestibulum lorem sed risus. Pharetra et ultrices neque ornare aenean euismod. Quam nulla porttitor massa id neque aliquam vestibulum. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Semper feugiat nibh sed pulvinar. Libero nunc consequat interdum varius sit amet mattis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Facilisis mauris sit amet massa vitae tortor. Nisi scelerisque eu ultrices vitae auctor.
              </p>
            </div>
          </div>
        </Section.Item>
        <Section.Item title="Testimonial">
          <Testimonial contact="John Smith" role="Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Et pharetra pharetra massa massa ultricies.
          </Testimonial>
        </Section.Item>
      </Section.List>
    </Layout>
  )
}

export default ProjectPage