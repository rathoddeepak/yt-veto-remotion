import React from "react";
import { interpolate, Img, staticFile, useCurrentFrame } from "remotion";
import ZoomIn from "../components/ZoomIn";
const nehruImg = staticFile("blunder.avif");
const Nehru = ({ from = 0 }) => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [from, from + 90], [10, 0]);
	return (
		<div style={style.main}>
			<ZoomIn from={from} out={100}>
				<Img
					src={nehruImg}
					style={{ ...style.img, filter: `blur(${blur}px)` }}
				/>
			</ZoomIn>
		</div>
	);
};

const style = {
	main: {
		display: "flex",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		width: 1400,
		height: 800,
	},
};

export default Nehru;