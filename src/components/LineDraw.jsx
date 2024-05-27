import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { evolvePath } from "@remotion/paths";
import { ease, clamp } from "../utils";

const AnimatedPath = ({ pd, color, from = 0, strokeWidth = 4 }) => {
	const frame = useCurrentFrame();
	const pathProgress = interpolate(frame, [from, from + 30], [0, 1], {
		...ease,
		...clamp
	});
	const evolution = evolvePath(pathProgress, pd);

	return (
		<svg style={style.line}>
			<path
				d={pd}
				strokeDasharray={evolution.strokeDasharray}
				strokeDashoffset={evolution.strokeDashoffset}
				stroke={color}
				fill="transparent"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
};

const LineDraw = ({ color, from = [], to = [], animateFrom = 0, strokeWidth }) => {
	const [pathD, setPathD] = React.useState(null);

	const updatePath = () => {
		const fromX = from[0];
		const fromY = from[1];
		const toX = to[0];
		const toY = to[1];

		const controlX1 = fromX + (toX - fromX) / 2;
		const controlY1 = fromY;
		const controlX2 = fromX + (toX - fromX) / 2;
		const controlY2 = toY;

		const d = `M ${fromX},${fromY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${toX},${toY}`;
		setPathD(d);
	};

	React.useEffect(() => {
		updatePath();
	}, []);

	return pathD ? <AnimatedPath strokeWidth={strokeWidth} from={animateFrom} color={color} pd={pathD} /> : null;
};

const style = {
	line: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
	},
}

export default LineDraw;