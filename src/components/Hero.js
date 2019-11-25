import React from "react"
import { css } from "@emotion/core"

export default props => {
	return (
		<div>
			<div
				css={css`
					position: relative;
					padding: 0;
					min-height: 100vh;
					max-height: 999px;
					overflow: hidden;
				`}
			>
				<div
					css={css`
						background-color: whitesmoke;
						background-image: url(${props.image});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
						height: 100%;
						transform: ${props.transform};
						opacity: 1;
						position: absolute;
						width: 100%;
						top: 0;
						left: 0;
						z-index: -1;
					`}
				/>
			</div>
			<div
				css={css`
					position: relative;
					width: 100%;
				`}
			>
				<div
					css={css`
						min-height: 100vh;
					`}
				>
					{props.children}
				</div>
			</div>
		</div>
	)
}
