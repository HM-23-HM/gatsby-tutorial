import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://www.wwf.org.uk/sites/default/files/styles/social_share_image/public/2018-10/Large_WW1113482.jpg?itok=Bluh496C"
      />
    </Layout>
  )
}

export default IndexPage