import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import USAMapReveal from "../components/USAMapReveal";
import { clamp, ease } from "../utils";

const USAMap = ({ from = 0 }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [from, from + 30], [0.7, 0.5], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [from, from + 20], [0, 1]);
	return (
		<Sequence from={from} layout="none">
			<USAMapReveal style={{ marginLeft: -250, transform: `scale(${scale})`, opacity }} />
		</Sequence>
	);
};

export default USAMap;