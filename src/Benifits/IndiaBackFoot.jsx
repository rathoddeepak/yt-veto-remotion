import { interpolate, staticFile, useCurrentFrame, Img } from "remotion";
import { ease, clamp } from "../utils";

const indiaImage = staticFile("india.png");
const chinaImage = staticFile("china.png");

const IndiaBackFoot = ({ from }) => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [from, from + 40, from + 70], [10, 10, 0], {
		...ease,
		...clamp,
	});
	const height = interpolate(frame, [from, from + 70, from + 100, from + 230, from + 260], [100, 100, 600, 600, 100], {
		...ease,
		...clamp,
	});
	const scale = interpolate(frame, [0, 30], [1.2, 1], {
		...ease,
		...clamp,
	});
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		...ease,
		...clamp,
	});
	return (
		<div style={{ ...style.main, transform: `scale(${scale})`, opacity, height }}>
			<div style={{ ...style.text, filter: `blur(${blur}px)` }}>
				India will be blamed for this incident
			</div>
			<BackFoot from={250} />
		</div>
	);
};

const BackFoot = ({ from }) => {
	const frame = useCurrentFrame();
	const width = interpolate(frame, [from, from + 30], [0, 600], {
		...clamp,
		...ease,
	});
	const height = interpolate(frame, [from, from + 30], [0, 400], {
		...clamp,
		...ease,
	});
	const barHeight = interpolate(frame, [from + 130, from + 160], [350, 200], {
		...clamp,
		...ease,
	});
	return (
		<div style={{ ...style.cover, height, width }}>
			<div style={style.row}>
				<div style={{...style.bar, height: barHeight }}>
					<Img style={style.img} src={indiaImage} />
				</div>

				<div style={style.bar}>
					<Img style={style.img} src={chinaImage} />
				</div>
			</div>

		</div>
	);
};


const style = {
	main: {
		width: 1200,
		backgroundColor: "rgba(0,0,0,0.48)",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "#36F141",
		borderRadius: 9,
		paddingLeft: 20,
		display: "flex",
		flexDirection: "column",
		marginBottom: 40,
		overflow: "hidden"
	},
	text: {
		fontSize: 40,
		marginTop: 25,
		color: "#36F141",
		fontFamily: "sans-serif",
		fontWeight: "bold",
	},
	cover: {
		borderColor: "#fff",
		borderStyle: "solid",
		borderLeftWidth: 4,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 4,
		overflow: "hidden",
		marginLeft: 350,
		marginTop: 50,
	},
	bar: {
		height: 350,
		width: 70,
		borderTopLeftRadius: 100,
		borderTopRightRadius: 100,
		backgroundColor: "#828FFF"
	},
	img:{
		width: 70,
		height: 70
	},
	row: {
		height: 400,
		width: 400,
		justifyContent: "space-around",
		display: 'flex',
		flexDirection: "row",
		alignItems: 'flex-end'
	}
};

export default IndiaBackFoot;