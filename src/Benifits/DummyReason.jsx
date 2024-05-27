import { interpolate, useCurrentFrame } from "remotion";
import { ease, clamp } from "../utils";

const DummyReason = () => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 30], [1.2, 1], {
		...ease,
		...clamp,
	});
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		...ease,
		...clamp,
	});
	return (
		<div style={{ ...style.main, transform: `scale(${scale})`, opacity }}>
			<div style={{ ...style.text,  }}>
				USA is the most important reason china wants veto power
			</div>
		</div>
	);
};

const style = {
	main: {
		height: 100,
		width: 1200,
		backgroundColor: "rgba(0,0,0,0.48)",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "#36F141",
		borderRadius: 9,
		paddingLeft: 20,
		display: "flex",
		flexDirection: "column",
		marginBottom: 40	
	},
	text: {
		fontSize: 40,
		marginTop: 25,
		color: "#36F141",
		fontFamily: "sans-serif",
		fontWeight: "bold",
		filter: `blur(10px)`
	},
};

export default DummyReason;