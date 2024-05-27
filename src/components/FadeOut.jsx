import { useCurrentFrame, interpolate } from "remotion";

const FadeOut = ({ style, children, from = 0 }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(
		frame,
		[from, from + 30],
		[1, 0],
	);
	return (
		<div style={{ ...style, opacity }}>
			{children}
		</div>
	);
};

export default FadeOut;