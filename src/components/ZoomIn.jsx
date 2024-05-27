import { useCurrentFrame, interpolate } from "remotion";
import { clamp, ease } from "../utils";

const ZoomIn = ({ style, children, from = 0, out = 90 }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(
		frame,
		[from, from + 30, from + out, from + out + 30],
		[1.3, 1, 1, 1.3],
		{
			...clamp,
			...ease,
		},
	);
	const opacity = interpolate(
		frame,
		[from, from + 20, from + out, from + out + 30],
		[0, 1, 1, 0],
	);
	return (
		<div style={{ ...style, transform: `scale(${scale})`, opacity }}>
			{children}
		</div>
	);
};

export default ZoomIn;