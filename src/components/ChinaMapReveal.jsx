import { useCurrentFrame, interpolate, interpolateColors } from "remotion";
import { chinaPath } from "./mapData";
import { clamp, ease } from "../utils";
import { evolvePath } from "@remotion/paths";

const ChinaMapReveal = ({ from = 0, style }) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [from, from + 30], [0, 1], {
		...clamp,
		...ease,
	});
	const scale = interpolate(frame, [from + 30, from + 60], [0.3, 1], {
		...clamp,
	});
	const strokeColor = interpolateColors(
		frame,
		[from + 30, from + 60],
		["#fff", "#000"],
	);
	const redColor1 = interpolateColors(
		frame,
		[from + 30, from + 60],
		["#000", "#FF1717"],
	);
	const redColor2 = interpolateColors(
		frame,
		[from + 30, from + 60],
		["#000", "#7D0000"],
	);
	const yellowColor1 = interpolateColors(
		frame,
		[from + 30, from + 60],
		["#000", "#F9FF2E"],
	);
	const yellowColor2 = interpolateColors(
		frame,
		[from + 30, from + 60],
		["#000", "#FFFF00"],
	);
	const pathEvolve = evolvePath(progress, chinaPath);

	return (
		<svg
			style={style}
			width="645px"
			height="542px"
			viewBox="0 0 645 542"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<linearGradient
					x1="50.0154972%"
					y1="38.0625661%"
					x2="52.3737246%"
					y2="75.5168681%"
					id="linearGradient-wo3y6f82ug-1"
				>
					<stop stop-color={redColor1} offset="0%" />
					<stop stop-color={redColor2} offset="100%" />
				</linearGradient>
				<linearGradient
					x1="50%"
					y1="0%"
					x2="50%"
					y2="100%"
					id="linearGradient-wo3y6f82ug-4"
				>
					<stop stop-color={yellowColor1} offset="0%" />
					<stop stop-color={yellowColor2} offset="99.2542614%" />
				</linearGradient>
			</defs>
			<path
				strokeWidth={5}
				stroke={strokeColor}
				fill="url(#linearGradient-wo3y6f82ug-1)"
				strokeDasharray={pathEvolve.strokeDasharray}
				strokeDashoffset={pathEvolve.strokeDashoffset}
				d={chinaPath}
				id="path-wo3y6f82ug-2"
			/>
			<g
				transform={`translate(77.000000, 168.368945) scale(${scale})`}
				id="s"
			>
				<polygon
					fill="url(#linearGradient-wo3y6f82ug-4)"
					points="52.5 25.6310545 84.946754 126.631055 0 64.2096212 105 64.2096212 20.053246 126.631055"
				/>
				<polygon
					fill="url(#linearGradient-wo3y6f82ug-4)"
					transform="translate(151.500000, 25.631055) rotate(-39.000000) translate(-151.500000, -25.631055) "
					points="151.5 7.63105454 162.933618 43.6310545 133 21.3818308 170 21.3818308 140.066382 43.6310545"
				/>
				<polygon
					fill="url(#linearGradient-wo3y6f82ug-4)"
					transform="translate(173.500000, 72.631055) rotate(-5.000000) translate(-173.500000, -72.631055) "
					points="173.5 54.6310545 184.933618 90.6310545 155 68.3818308 192 68.3818308 162.066382 90.6310545"
				/>
				<polygon
					fill="url(#linearGradient-wo3y6f82ug-4)"
					points="158.5 105.631055 169.933618 141.631055 140 119.381831 177 119.381831 147.066382 141.631055"
				/>
				<polygon
					fill="url(#linearGradient-wo3y6f82ug-4)"
					transform="translate(125.500000, 160.631055) rotate(13.000000) translate(-125.500000, -160.631055) "
					points="125.5 142.631055 136.933618 178.631055 107 156.381831 144 156.381831 114.066382 178.631055"
				/>
			</g>
		</svg>
	);
};

export default ChinaMapReveal;