import { staticFile, useCurrentFrame, interpolate, Img } from "remotion";
import { clamp, ease } from "../utils";

const kaoImg = staticFile("RNKAO.jpeg");
const RNKao = () => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [0, 30], [10, 1], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		...clamp,
		...ease,
	});
	const scale = interpolate(frame, [0, 30], [1.3, 1], {
		...clamp,
		...ease,
	});
	return (
		<div
			style={{
				...style.card,
				transform: `scale(${scale})`,
				filter: `blur(${blur}px)`,
				opacity,
			}}
		>
			<div style={style.avatar}>
				<Img style={style.img} src={kaoImg} />
			</div>
			<div style={style.title}>R. N. Kao</div>
			<div style={style.subTitle}>He later created RAW</div>
		</div>
	);
};

const style = {
	card: {
		height: 550,
		width: 500,
		backgroundImage: "linear-gradient(138deg, #161616 0%, #000000 100%)",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "#45C871",
		borderRadius: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: {
		height: 320,
		width: 320,
		overflow: "hidden",
		borderRadius: 160,
	},
	title: {
		fontSize: 40,
		fontWeight: "600",
		marginTop: 30,
		marginBottom: 10,
		fontFamily: "sans-serif",
		color: "#ffffff",
	},
	subTitle: {
		fontSize: 30,
		fontWeight: "500",
		fontFamily: "sans-serif",
		color: "#c7c7c7",
	},
	img: {
		width: "100%",
		height: "100%",
	},
};

export default RNKao;