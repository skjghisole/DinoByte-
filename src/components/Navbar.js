import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [navbarColor, setNavbarColor] = useState("transparent")
	const [toggled, setToggled] = useState(false)
	const changeNavbarColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			setNavbarColor("rgb(239, 155, 97)")
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			setNavbarColor("transparent")
		}
	}

	const removeOnScrollListener = () =>
		window.removeEventListener("scroll", changeNavbarColor())

	const removeOnClickListener = () =>
		window.removeEventListener("click", () => {})

	useEffect(() => {
		document.body.classList.add("app-navbar")
		window.addEventListener("scroll", changeNavbarColor)

		return () => {
			document.body.classList.remove("app-navbar")
			removeOnScrollListener()
			removeOnClickListener()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div
			css={css`
				background: ${navbarColor} !important;
				position: sticky;
				height: 10vh;
				width: 100%;
				top: 0;
				position: fixed;
				top: 0;
				right: 0;
				left: 0;
				z-index: 1030;
				transition: 0.3s ease-in-out;
			`}
		>
			<div
				css={css`
					max-width: 700px;
					margin: 0 auto;
					padding: ${rhythm(2)};
					padding-top: ${rhythm(1.5)};
				`}
			>
				<Link to={"/"}>
					<h3
						css={css`
							margin-bottom: ${rhythm(2)};
							display: inline-block;
							font-style: normal;
							color: ${navbarColor === 'transparent' ? 'rgb(239, 155, 97)' : 'rgb(40, 35, 32)'};
							transition: 0.3s ease-in-out;
						`}
					>
						{data.site.siteMetadata.title}
					</h3>
				</Link>
				<Link
					to={"/about/"}
					css={css`
						float: right;
						margin-left: 0.5em;
					`}
				>
					About
				</Link>
				<Link
					to={"/myFiles/"}
					css={css`
						float: right;
					`}
				>
					My Files
				</Link>
			</div>
		</div>
	)
}
