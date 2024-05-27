import React from "react";
import { interpolateColors, useCurrentFrame } from "remotion";
import ZoomIn from "../components/ZoomIn";

const IntroTitle = ({ text, from = 0, duration = 0, fontSize = 200 }) => {
	const frame = useCurrentFrame();
	const textColor = interpolateColors(frame, [from, from + duration + 30], ["#a1a1a1", "#ffffff"]);
	const shadowColor = interpolateColors(
		frame,
		[from, from + duration + 30],
		["#a1a1a1", "#ffffff"],
	);
	return (
		<div style={style.main}>
			<ZoomIn from={from} out={40 + duration}>
				<div
					style={{
						...style.text,
						color: textColor,						
						textShadow: `0 2px 21px ${shadowColor}`,
						fontSize
					}}
				>
					{text}
				</div>
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
	text: {
		fontFamily: "Inter-Regular_ExtraBold",
	},
};

export default IntroTitle;