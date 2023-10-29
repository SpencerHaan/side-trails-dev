import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import BannerCard from "../components/BannerCard"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <BannerCard title="Methodology" className="bg-gray-200">
        <p>
          I believe that it's better to optimize delivering what my clients need over what it's going to cost and how much time it will take.
          That is, while the latter is an important consideration, the former is considerably more important.
        </p>
        <p>
          Why would you spend money on a solution that doesn't meet your needs?
        </p>
        <button className="w-36 transition ease-in-out p-3 bg-gray-400 hover:bg-gray-500 rounded-xl">
          Find Out More
        </button>
      </BannerCard>
      <BannerCard title="What Clients Think">
        <div className="p-1 w-full rounded-xl col-span-2 bg-gray-300">
          <div className="w-full h-full rounded-lg p-6 space-y-4 bg-white">
            <StaticImage src="https://placehold.co/128.png" alt="" height={128} layout="fixed" className="m-auto rounded-xl"/>
            <p className="text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Et pharetra pharetra massa massa ultricies."
            </p>
            <p className="italic text-lg text-center text-gray-400">
              John Smith - Company Inc.
            </p>
          </div>
        </div>
      </BannerCard>
      <BannerCard title="Let's Chat" className="bg-gray-200">
        <p className="pb-4 text-center text-gray-400">
          Need help with a project? Send me some details.
        </p>
        <div>
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" name="contactName" className="p-2 rounded-md flex-1"/>
            <input type="text" placeholder="Company" name="contactCompany" className="p-2 rounded-md flex-1"/>
            <input type="text" placeholder="Email" name="contactEmail" className="p-2 rounded-md flex-1"/>
            <select className="p-2 rounded-md flex-1 bg-white text-gray-400">
              <option disabled selected hidden>Budget</option>
              <option>$25,000-$50,000</option>
              <option>$50,000-$100,000</option>
              <option>$100,000+</option>
            </select>
            <textarea placeholder="What's your project about?" rows={10} className="p-2 rounded-md flex-1 col-span-2"/>
          </form>
          <button className="w-36 transition ease-in-out p-3 bg-gray-400 hover:bg-gray-500 rounded-xl">
            Submit
          </button>
        </div>
      </BannerCard>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Side Trails Software Development</title>
