import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
	console.log(data)
	return (
		<Layout>
			<div>My files</div>
			<table>
				<thead>
					<tr>
						<th>Relative Path</th>
						<th>Pretty Size</th>
						<th>Extension</th>
						<th>Birth Time</th>
					</tr>
				</thead>
				<tbody>
					{data.allFile.edges.map(
						(
							{ node: { birthTime, prettySize, relativePath, extension } },
							index
						) => (
							<tr key={`${index}-${relativePath}`}>
								<th>{relativePath}</th>
								<th>{prettySize}</th>
								<th>{extension}</th>
								<th>{birthTime}</th>
							</tr>
						)
					)}
				</tbody>
			</table>
		</Layout>
	)
}

export const query = graphql`
	query {
		allFile {
			edges {
				node {
					relativePath
					prettySize
					extension
					birthTime(fromNow: true)
				}
			}
		}
	}
`
