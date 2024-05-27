import { staticFile, useCurrentFrame, interpolate } from "remotion";
import PointLineDraw from "../components/PointLineDraw";
import { clamp, ease } from "../utils";
const indiaImage = staticFile("india.png");
const chinaImage = staticFile("china.png");

const GrowTogether = () => {
	const frame = useCurrentFrame();
	const width = interpolate(frame, [0, 30], [0, 900], {
		...clamp,
		...ease,
	});
	return (
		<div style={{ ...style.main, width }}>
			<PointLineDraw
				color="#A8FF66"
				imgFile={chinaImage}
				from={[600, 890]}
				to={[1100, 300]}
				factor={700}
				animateFrom={30}
			/>

			<PointLineDraw
				color="#A8FF66"
				imgFile={indiaImage}
				from={[800, 890]}
				to={[1400, 300]}
				factor={800}
				animateFrom={30}
			/>
		</div>
	);
};

const style = {
	main: {
		borderColor: "#fff",
		borderStyle: "solid",
		borderLeftWidth: 4,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 4,
		height: 700,
		overflow: "hidden",
	},
};

export default GrowTogether;