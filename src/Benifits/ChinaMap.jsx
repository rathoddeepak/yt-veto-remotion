import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import ChinaMapReveal from "../components/ChinaMapReveal";
import { clamp, ease } from "../utils";

const USAMap = ({ from = 0 }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [from, from + 30], [0.7, 0.8], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [from, from + 20], [0, 1]);
	return (
		<Sequence from={from} layout="none">
			<ChinaMapReveal style={{ marginLeft: -100, transform: `scale(${scale})`, opacity }} />
		</Sequence>
	);
};

export default USAMap;