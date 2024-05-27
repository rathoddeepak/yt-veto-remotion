import { Img, staticFile, interpolate, useCurrentFrame } from "remotion";
import { clamp, ease } from "../utils";
const zhuImg = staticFile("zhu.png");
const AlreadyKnew = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 40], [0, 1], {
		...clamp,
		...ease,
	});
	const scale = interpolate(frame, [0, 40], [0.4, 1], {
		...clamp,
		...ease,
	});
	const blur = interpolate(frame, [0, 90], [10, 1], {
		...clamp,
		...ease,
	});
	return (
		<>
			<div
				style={{
					...style.avatar,
					transform: `scale(${scale})`,
					opacity,
					filter: `blur(${blur}px)`,
				}}
			>
				<Img src={zhuImg} style={style.img} />
			</div>
			<div style={style.row}>
				<Card
					from={90}
					title="They already knew about the bomb."
				/>
				<Card
					from={300}
					title="They didn’t even cared about their own people"
				/>
			</div>
		</>
	);
};

const Card = ({ title, subTitle, from }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [from, from + 10], [0, 1], {
		...ease,
		...clamp,
	});
	const scale = interpolate(frame, [from, from + 30], [1.3, 1], {
		...ease,
		...clamp,
	});
	return (
		<div
			style={{
				...style.card,
				transform: `scale(${scale})`,
				opacity,
			}}
		>
			<div style={style.cardTitle}>{title}</div>
			{subTitle ? <div style={style.cardSubTitle}>{subTitle}</div> : null}
		</div>
	);
};

const style = {
	avatar: {
		height: 320,
		width: 300,
		borderRadius: 150,
		overflow: "hidden",
	},
	img: {
		height: "100%",
		width: "100%",
	},
	card: {
		height: 250,
		width: 400,
		backgroundImage: "linear-gradient(121deg, #161616 2%, #000000 100%)",
		borderStyle: "solid",
		borderWidth: 4,
		borderColor: "#CC1414",
		borderRadius: 10,
		fontFamily: "sans-serif",
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	cardTitle: {
		color: "#ffffff",
		fontSize: 31,
		fontWeight: "600",
	},
	cardSubTitle: {
		color: "#F0F0F0",
		fontWeight: "500",
		fontSize: 25,
		marginTop: 5,
	},
	row: {
		display: "flex",
		flexDirection: "row",
		marginTop: 140,
		height: 300,
		width: 900,
		justifyContent: "space-between",
		position: "relative"
	},
};

export default AlreadyKnew;