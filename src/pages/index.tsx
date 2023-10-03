import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="w-1/2 h-16 m-auto text-xl">
        <ul className="flex">
          <li>STSD</li>
          <li className="ml-auto">Projects</li>
          <li className="ml-5">About</li>
        </ul>
      </div>
      <div className="bg-gray-200">
        <div className="w-1/2 m-auto py-12 space-y-8">
          <p className="text-center text-4xl">
            Methodology
          </p>
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
        </div>
      </div>
      <div>
        <div className="w-1/2 m-auto py-12 space-y-8">
          <p className="text-center text-4xl">
            What Clients Think
          </p>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="p-1 w-full rounded-xl bg-gradient-to-r from-transparent to-gray-300">
              <div className="w-full h-full rounded-lg bg-white"></div>
            </div>
            <div className="p-1 w-full rounded-xl col-span-2 bg-gray-300">
              <div className="w-full h-full rounded-lg p-6 space-y-4 bg-white">
                <p className="text-center">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Et pharetra pharetra massa massa ultricies."
                </p>
                <p className="italic text-lg text-center text-gray-400">
                  John Smith - Company Inc.
                </p>
              </div>
            </div>
            <div className="p-1 w-full rounded-xl bg-gradient-to-l from-transparent to-gray-300">
              <div className="w-full h-full rounded-lg bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="w-1/2 m-auto py-12 space-y-8">
          <p className="text-center text-4xl">
            Let's Chat
          </p>
          <p className="text-center text-gray-400">
            Need help with a project? Send me the detes!
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
        </div>
      </div>
      <footer>
        <div className="p-4 grid grid-cols-3">
          <div></div>
          <p className="text-center text-sm italic">
            &copy; 2023 Side Trail Software Development
          </p>
          <ul className="ml-auto space-x-2 flex">
            <li>
              <Link to="https://linkedin.com">
                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="https://github.com">
                {/* <!-- Github --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
