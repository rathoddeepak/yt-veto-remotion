import {
	interpolate,
	Sequence,
	useCurrentFrame,
	Img,
	staticFile,
} from "remotion";
import CallOutCard from "../components/CallOutCard";
import { ease, clamp } from "../utils";

const planeImg = staticFile("kashmirPrincess.jpg");
const Info = () => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [0, 30], [10, 0], {
		...ease,
		...clamp,
	});
	const scale = interpolate(frame, [0, 30], [0, 1], {
		...ease,
		...clamp,
	});
	return (
		<>
			<div
				style={{
					...style.main,
					filter: `blur(${blur}px)`,
					transform: `scale(${scale})`,
				}}
			>
				<Img style={style.img} src={planeImg} />
			</div>

			<div style={style.row}>
				<Card
					from={30}
					title="15 people died"
					subTitle="only 3 crem member survived"
				/>
				<Card from={60} title="Some of them were Chinese." />
				<ZhuCard from={90} />
			</div>
			<Sequence from={240}>
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
				>
					<CallOutCard
						rightPointer
						width={400}
						height={200}
						startX={1430}
						startY={645}
						endX={900}
						endY={250}
					>
						<div style={style.content}>
							Changed his plan at last minute, saying he has
							appendix problem
						</div>
					</CallOutCard>
				</div>
			</Sequence>
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

const ZhuCard = ({ from }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [from, from + 10], [0, 1], {
		...ease,
		...clamp,
	});
	const scale = interpolate(frame, [from, from + 30], [1.3, 1], {
		...ease,
		...clamp,
	});
	const blur = interpolate(
		frame,
		[from, from + 90, from + 120],
		[10, 10, 0],
		{
			...ease,
			...clamp,
		},
	);
	return (
		<>
			<div style={style.dummy} />
			<div
				style={{
					...style.card,
					borderColor: "#45C871",
					transform: `scale(${scale})`,
					filter: `blur(${blur}px)`,
					opacity,
					position: "absolute",
					right: 0,
				}}
			>
				<div style={style.cardTitle}>Zhu Enlai</div>
				<div style={style.cardSubTitle}>
					changed his travel plans, at last minute
				</div>
			</div>
		</>
	);
};

const style = {
	main: {
		height: 350,
		width: 500,
		borderRadius: 10,
		borderStyle: "solid",
		borderColor: "#FFC960",
		borderWidth: 4,
		transformOrigin: "top center",
	},
	content: {
		justifyContent: "center",
		alignItems: 'center',
		textAlign: 'center',
		display: "flex",
		flexDirection: 'column',
		fontSize: 22,
		color: "white",
		fontFamily: "sans-serif",
		fontWeight: "bold",
		width: "100%",
		height: "100%"
	},
	img: {
		width: "100%",
		height: "100%",
	},
	row: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		marginTop: 140,
		height: 300,
		width: "90%",
		position: "relative",
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
	dummy: {
		height: 250,
		width: 400,
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
	text: {
		color: "#ffffff",
		fontSize: 22,
		fontWeight: "600",
	},
};

export default Info;