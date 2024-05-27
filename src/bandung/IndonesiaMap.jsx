import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import IndonesiaMapReveal from "../components/IndonesiaMapReveal";
import { clamp, ease } from "../utils";

const IndonesiaMap = ({ from = 0 }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(
		frame,
		[from, from + 30],
		[1.6, 1.4],
		{
			...clamp,
			...ease,
		},
	);
	const opacity = interpolate(
		frame,
		[from, from + 20],
		[0, 1],
	);
	return (
		<div style={style.main}>
			<div style={{ transform: `scale(${scale})`, opacity }}>
				<Sequence from={from} layout="none">
					<IndonesiaMapReveal />
				</Sequence>
			</div>
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

export default IndonesiaMap;