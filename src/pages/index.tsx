import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import BannerCard from "../components/BannerCard"
import { Navigator } from "../components/Navigator"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout hero={{
      image: <StaticImage src="../images/hero.png" alt="" layout="fullWidth"/>,
      content: 
        <div className="h-full flex flex-col">
          <p className="m-auto text-white text-center text-5xl uppercase font-extrabold leading-relaxed">
            Building, and Rebuilding,
            <br/>
            Software Systems
          </p>
          <div className="w-1/2 mx-auto mb-16 text-center">
            <button className="w-36 transition ease-in-out p-3 bg-white hover:bg-lion hover:font-extrabold rounded-xl">
              Let's Chat
            </button>
          </div>
        </div>,
    }}>
      <BannerCard title="Side Trailing" className="bg-gray-200">
        <p>
          A process of discovery and exploration aimed at developing a deep understanding of your systems, technical challenges, and business problems.
          In order to establish this understanding, close collaboration with you is integral to the process. It is not to embarked upon alone.
        </p>
        <p>
          Any development project I undertake can be loosely broken down into the following parts: Discover, Explore, and Build.
        </p>
        <div className="bg-gray-100 p-2 space-y-4 rounded-xl">
          <p className="text-center text-3xl">
            Process
          </p>
          <div className="flex flex-row space-x-4">
            <div>
              <StaticImage src="https://placehold.co/128/png?text=Discover" alt="" height={128} width={128} layout="fixed" className="rounded-xl"/>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                First, let's discover what your business needs/technical challenges are all about.
              </p>
              <p className="text-gray-400">
                What are you trying to achieve? What existing software solutions do you have? What are the non-negotiable vs. the nice-to-haves requirements?
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div>
              <StaticImage src="https://placehold.co/256/png?text=Explore" alt="" height={128} layout="fixed" className="rounded-xl"/>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                Second, let's explore these business needs/technical challenges to establish a shared and deep understanding.
              </p>
              <p className="text-gray-400">
                What are the various systems and processes? How do they interact? What are the first principles? Close collaboration is key.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div>
              <StaticImage src="https://placehold.co/256/png?text=Build" alt="" height={128} layout="fixed" className="rounded-xl"/>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                Third, let's build the solution.
              </p>
              <p className="text-gray-400">
                Discovery and exploration remain ongoing. There will always be more questions to ask and answer throughout the process, always more side trails to explore.
              </p>
            </div>
          </div>
        </div>
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
