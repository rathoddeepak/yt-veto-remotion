import React from "react";
import { interpolateColors, useCurrentFrame } from "remotion";
import ZoomIn from "../components/ZoomIn";

const WW2 = ({ from = 0 }) => {
	const frame = useCurrentFrame();
	const textColor = interpolateColors(frame, [from, from + 30], ["#FF2E2E", "#BFFF57"]);
	const shadowColor = interpolateColors(
		frame,
		[from, from + 30],
		["#CA0000", "#90DA18"],
	);
	return (
		<div style={style.main}>
			<ZoomIn from={from} out={40}>
				<div
					style={{
						...style.text,
						color: textColor,
						textShadow: `0 2px 21px ${shadowColor}`,
					}}
				>
					WORLD WAR ll
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
		fontSize: 200,
	},
};

export default WW2;