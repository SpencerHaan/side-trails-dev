import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import Section from "../components/Section"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Section.List>
      <Section.Item title="Why Side Trails?">
        <div className="text-base 3xl:text-lg space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique. Senectus et netus et malesuada fames ac turpis egestas. Id faucibus nisl tincidunt eget nullam non nisi est sit. Auctor urna nunc id cursus metus aliquam eleifend mi. Nunc id cursus metus aliquam eleifend mi in. Amet justo donec enim diam. Convallis aenean et tortor at. Ac odio tempor orci dapibus. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Sit amet mattis vulputate enim nulla aliquet porttitor. Morbi tristique senectus et netus et malesuada fames ac turpis. Ut tristique et egestas quis ipsum suspendisse ultrices. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. In fermentum et sollicitudin ac orci phasellus egestas. Diam donec adipiscing tristique risus nec. Velit scelerisque in dictum non consectetur.
          </p>
          <p>
            Penatibus et magnis dis parturient. Lectus proin nibh nisl condimentum. At imperdiet dui accumsan sit amet nulla facilisi. Morbi non arcu risus quis varius quam quisque id diam. Gravida rutrum quisque non tellus orci ac auctor. Pharetra convallis posuere morbi leo urna molestie at elementum. Malesuada fames ac turpis egestas sed tempus urna et. Integer enim neque volutpat ac tincidunt. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Aliquam faucibus purus in massa. Vel orci porta non pulvinar neque. Dictum at tempor commodo ullamcorper a lacus. Molestie a iaculis at erat pellentesque adipiscing. Euismod quis viverra nibh cras pulvinar mattis. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Eget nullam non nisi est sit. Non curabitur gravida arcu ac. Libero nunc consequat interdum varius sit amet mattis.
          </p>
          <p>
            Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Molestie at elementum eu facilisis sed odio morbi quis. Sodales ut eu sem integer. Quisque non tellus orci ac auctor augue mauris augue. Tellus pellentesque eu tincidunt tortor. Sed blandit libero volutpat sed cras. Morbi tristique senectus et netus et malesuada fames. Metus aliquam eleifend mi in nulla posuere. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.
          </p>
        </div>
      </Section.Item>
      <Section.Item title="Why me?">
      </Section.Item>
    </Section.List>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Side Trails Software Development</title>
