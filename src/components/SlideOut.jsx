import { useCurrentFrame, interpolate } from "remotion";
import { clamp, ease } from "../utils";

const SlideOut = ({ style, children, from = 0 }) => {
	const frame = useCurrentFrame();
	const translateY = from ? interpolate(
		frame,
		[from, from + 30],
		[0, -290],
		{
			...clamp,
			...ease,
		},
	) : 0;
	return (
		<div style={{ ...style, bottom: translateY }}>
			{children}
		</div>
	);
};

export default SlideOut;