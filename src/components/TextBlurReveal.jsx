import { useCurrentFrame, interpolate } from "remotion";
import { clamp, ease } from "../utils";

const TextBlurReveal = ({ style, text, duration = 0, from = 0, color = "#ffffff" }) => {
	const frame = useCurrentFrame();
	const x = interpolate(frame, [from, from + (duration) + 70], [5, 210], {
		...clamp,
		...ease,
	});
	const blur = interpolate(frame, [from, from + (duration) + 70], [10, 0], {
		...clamp,
		...ease,
	});
	return (
		<div
			style={{
				...style,
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div style={{ width: "fit-content" }}>
				<div style={{ ...mStyle.text, color }}>{text}</div>
				<div
					style={{
						height: 60,
						width: "104%",
						marginLeft: -10,
						marginTop: -60,
						backdropFilter: `blur(${blur}px)`,
						backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 ${x}%)`,
					}}
				/>
			</div>
		</div>
	);
};

const mStyle = {
	text: {
		fontSize: 50,
		fontWeight: "bold",
		fontFamily: "sans-serif",
	},
};

export default TextBlurReveal;