import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import TaiwanMapReveal from "../components/TaiwanMapReveal";
import { clamp, ease } from "../utils";

const TaiwanMap = ({ from = 0 }) => {
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
					<TaiwanMapReveal style={{ marginLeft: 70 }} />
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
	}
};

export default TaiwanMap;