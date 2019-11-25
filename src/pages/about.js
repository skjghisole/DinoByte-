import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => (
	<Layout>
		<h1>{data.site.siteMetadata.subtitle}</h1>
		<p>
			FUN FACT: did you know koalas are spelled with a K and never a C? Now you
			know!
		</p>
	</Layout>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				subtitle
			}
		}
	}
`
