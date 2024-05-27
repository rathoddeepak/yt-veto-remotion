import React from "react";
import { useCurrentFrame, interpolate, interpolateColors } from "remotion";
import { clamp, ease } from "../utils";
import { evolvePath } from "@remotion/paths";

const growthPath =
	"M1056.84555,627.993617 C1155.25403,591.537466 1244.67413,577.72387 1325.10583,586.55283 C1405.53753,595.38179 1484.11744,575.298161 1560.84555,526.301943 C1560.84555,532.523767 1560.84555,538.509915 1560.84555,544.260389 C1560.84555,580.751413 1560.84555,604.975703 1560.84555,615.387145 C1560.84555,618.079413 1559.94831,621.678483 1555.59928,624.706005 C1554.03906,625.792127 1550.4184,626.887997 1544.73728,627.993617 L1056.84555,627.993617 Z";
const iconPath =
	"M0,-2 C1.1045695,-2 2,-1.1045695 2,0 L2,57 L59,57 C60.0543618,57 60.9181651,57.8158778 60.9945143,58.8507377 L61,59 C61,60.1045695 60.1045695,61 59,61 L0,61 C-1.1045695,61 -2,60.1045695 -2,59 L-2,0 C-2,-1.1045695 -1.1045695,-2 0,-2 Z M19.5,5 C20.6045695,5 21.5,5.8954305 21.5,7 L21.5,18 L24,18 C26.209139,18 28,19.790861 28,22 L28,37 C28,39.209139 26.209139,41 24,41 L21.5,41 L21.5,46 C21.5,47.1045695 20.6045695,48 19.5,48 C18.3954305,48 17.5,47.1045695 17.5,46 L17.5,41 L15,41 C12.790861,41 11,39.209139 11,37 L11,22 C11,19.790861 12.790861,18 15,18 L17.5,18 L17.5,7 C17.5,5.8954305 18.3954305,5 19.5,5 Z M45.5,-2 C46.6045695,-2 47.5,-1.1045695 47.5,0 L47.5,5 L50,5 C52.209139,5 54,6.790861 54,9 L54,31 C54,33.209139 52.209139,35 50,35 L47.5,35 L47.5,43 C47.5,44.1045695 46.6045695,45 45.5,45 C44.3954305,45 43.5,44.1045695 43.5,43 L43.5,35 L41,35 C38.790861,35 37,33.209139 37,31 L37,9 C37,6.790861 38.790861,5 41,5 L43.5,5 L43.5,0 C43.5,-1.1045695 44.3954305,-2 45.5,-2 Z M24,22 L15,22 L15,37 L24,37 L24,22 Z M50,9 L41,9 L41,31 L50,31 L50,9 Z";
const color = "#4EC9FF";

const GrowthIcon = () => {
	return (
		<svg
			width="63px"
			height="63px"
			viewBox="0 0 63 63"
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
			>
				<g
					id="IndiaFree"
					transform="translate(-963.000000, -536.000000)"
					fill={color}
					fill-rule="nonzero"
				>
					<g id="Group" transform="translate(965.000000, 538.000000)">
						<path d={iconPath} id="Combined-Shape" />
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
				<div style={style.title}>Economic Growth</div>

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
		flexDirection: "column",
	},
	title: {
		fontFamily: "sans-serif",
		fontSize: 29,
		width: 300,
		position: "absolute",
		color,
		marginLeft: 20,
		marginTop: 30,
		fontWeight: "600",
	},
};

export default EconomicGrowth;