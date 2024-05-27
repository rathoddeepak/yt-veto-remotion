import React from "react";
import { useCurrentFrame, interpolate, interpolateColors } from "remotion";
import { clamp, ease } from "../utils";
import { evolvePath } from "@remotion/paths";

const growthPath =
	"M1056.84555,627.993617 C1155.25403,591.537466 1244.67413,577.72387 1325.10583,586.55283 C1405.53753,595.38179 1484.11744,575.298161 1560.84555,526.301943 C1560.84555,532.523767 1560.84555,538.509915 1560.84555,544.260389 C1560.84555,580.751413 1560.84555,604.975703 1560.84555,615.387145 C1560.84555,618.079413 1559.94831,621.678483 1555.59928,624.706005 C1554.03906,625.792127 1550.4184,626.887997 1544.73728,627.993617 L1056.84555,627.993617 Z";
const color = "#FF6341";

const GrowthIcon = () => {
	return (
		<svg
			width="78px"
			height="72px"
			viewBox="0 0 78 72"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<g
				id="Video"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<g
					id="IndiaFree"
					transform="translate(-958.000000, -685.000000)"
					stroke={color}
					stroke-width="4"
				>
					<g id="Group" transform="translate(960.000000, 687.000000)">
						<path
							d="M33.3333333,41.6666667 L40.6666667,41.6666667 C44.7167548,41.6666667 48,38.3834215 48,34.3333333 C48,30.2832452 44.7167548,27 40.6666667,27 L29.6666667,27 C27.4666667,27 25.6333333,27.7333333 24.5333333,29.2 L4,49"
							id="Path"
						/>
						<path
							d="M19,64 L24.8561581,58.8086793 C25.9541878,57.3254448 27.7842372,56.5838276 29.9802965,56.5838276 L44.6206919,56.5838276 C48.6468006,56.5838276 52.3068994,55.1005931 54.8689686,52.1341241 L71.7054233,35.8185448 C74.6465847,33.0026555 74.7776793,28.3043836 71.9982312,25.3246608 C69.2187831,22.344938 64.5813129,22.2121246 61.6401515,25.0280139 L46.2677364,39.4895501"
							id="Path"
						/>
						<line x1="0" y1="46" x2="22" y2="68" id="Path" />
						<path
							d="M64.3958265,21.1219126 C66.9804221,18.5462951 69.9342457,15.2347869 69.9342457,11.187388 C70.4655574,6.55839073 67.73293,2.17291817 63.333886,0.594763488 C58.9348419,-0.983391197 54.0242313,0.660073799 51.4728483,4.56437165 C48.7671455,0.973437711 44.027638,-0.43903154 39.7878268,1.08199847 C35.5480155,2.60302849 32.7994811,6.70182873 33.011451,11.187388 C33.011451,15.6027323 35.9652746,18.5462951 38.5498702,21.489858 L51.4728483,34 L64.3958265,21.1219126 Z"
							id="Path"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};

const EconomicGrowth = ({ x, y, from = 0 }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [from, from + 60], [0, 1], {
		...clamp,
		...ease,
	});
	const width = interpolate(frame, [from, from + 30], [200, 500], {
		...clamp,
		...ease,
	});
	const progress = interpolate(frame, [from + 20, from + 90], [0, 1], {
		...clamp,
		...ease,
	});
	const fillColor = interpolateColors(
		frame,
		[from + 30, from + 60],
		["#00000000", color],
	);
	const pathEvolve = evolvePath(progress, growthPath);
	return (
		<div style={{ ...style.main, left: x, top: y, width, opacity }}>
			<div style={style.iconBox}>
				<GrowthIcon />
			</div>
			<div style={style.content}>
				<div style={style.title}>Culture Growth</div>

				<svg
					width="400px"
					height="104px"
					viewBox="0 0 400 104"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					style={{ marginLeft: 4, marginTop: 40 }}
				>
					<g
						id="Video"
						stroke="none"
						stroke-width="1"
						fill="none"
						fill-rule="evenodd"
						fill-opacity="0.237407124"
						stroke-linecap="square"
					>
						<g
							id="IndiaFree"
							transform="translate(-1056.000000, -525.000000)"
							fill={fillColor}
							stroke={color}
						>
							<path
								d={growthPath}
								strokeDasharray={pathEvolve.strokeDasharray}
								strokeDashoffset={pathEvolve.strokeDashoffset}
							/>
						</g>
					</g>
				</svg>
			</div>
		</div>
	);
};

const style = {
	main: {
		position: "absolute",
		overflow: "hidden",
		height: 130,
		borderRadius: 20,
		borderStyle: "solid",
		display: "flex",
		borderWidth: 2,
		borderColor: color,
		backgroundImage: "linear-gradient(113deg, #202020 0%, #000000 95%)",
	},
	iconBox: {
		minWidth: 120,
		height: 130,
		borderRightWidth: 2,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		borderLeftWidth: 0,
		borderStyle: "solid",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderColor: color,
	},
	content: {
		flex: 1,
		display: "flex",
		position: "relative",
		flexDirection: "column",
	},
	title: {
		fontFamily: "sans-serif",
		fontSize: 29,
		position: "absolute",
		color,
		width: 300,
		marginLeft: 20,
		marginTop: 30,
		fontWeight: "600",
	},
};

export default EconomicGrowth;