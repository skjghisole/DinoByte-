import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Navbar from '../components/Navbar'
import TeamImage from "../assets/imgs/DynoByte.jpg"

export default () => {
	const initialWindow = window.innerWidth >= 768 ? window.pageYOffset / 3 : 0
	const [windowScrollTop] = useState(initialWindow)
	const [transform, setTransform] = useState(
		`translate3d(0, ${windowScrollTop}px, 0)`
	)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		if (window.innerWidth >= 768) {
			setTransform(`translate3d(0, ${window.pageYOffset / 3}px, 0)`)
			window.addEventListener("scroll", resetTransform)
		}

		return () => {
			document.body.classList.remove("products-page")
			if (window.innerWidth >= 768) {
				window.removeEventListener("scroll", resetTransform)
			}
		}
	}, [])

	const resetTransform = () => {
		setTransform(`translate3d(0, ${window.pageYOffset / 3}px, 0)`)
	}

	return (
		<div>
			<Navbar />
			<Hero transform={transform} image={TeamImage}>
				<div
					css={css`
						background-color: blue;
						height: 100vh;
					`}
				></div>
				<div
					css={css`
						background-color: red;
						height: 100vh;
					`}
				></div>
				<div
					css={css`
						background-color: white;
						height: 100vh;
					`}
				></div>
				<div
					css={css`
						background-color: pink;
						height: 100vh;
					`}
				></div>
			</Hero>
		</div>
	)
}
