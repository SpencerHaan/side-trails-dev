import "./src/styles/global.css"

import * as React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>