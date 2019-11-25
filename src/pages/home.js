
import React from "react"
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography'

import Layout from "../components/Layout"

export default ({ data }) => (
	<Layout>
		<h1>Koalas can Sleep all day</h1>
		<div>
			<img
				src={
					"http://1.bp.blogspot.com/-j4F5lXwqlTo/Uc5VY8LQ1YI/AAAAAAAADyc/nTB0r0DND-U/s1600/Koala-Animal-Pictures.jpg"
				}
				alt="Random Koala on a tree"
			/>
		</div>
		<div>
			<h1
				css={css`
					display: inline-block;
					border-bottom: 1px solid;
				`}
			>Amazing how Koalas look the same</h1>
			<h4>
				{data.allMarkdownRemark.totalCount} Posts	
			</h4>
			{data.allMarkdownRemark.edges.map(({ node }) => <div key={node.id}>
				<h3 css={css`
					margin-bottom: ${rhythm(1/4)}
				`}>
					{node.frontmatter.title}{" "}
					<span  css={css`color:#bbb`}>
						- {node.frontmatter.date}
					</span>
				</h3>	
				<p>{node.excerpt}</p>
			</div>)}
		</div>
	</Layout>
)


export const query = graphql`
	query {
		allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC}){
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM YYYY")
					}
					excerpt
				}
			}
		}
	}
`