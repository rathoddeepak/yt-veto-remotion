import { interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { clamp, ease } from "../utils";

const chinaAvatar = staticFile("china.png");
const indiaAvatar = staticFile("india.png");

const FromMessage = ({ text, from = 0 }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [from, from + 120], [0, 1], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [from, from + 120], [0, 1], {
		...clamp,
		...ease,
	});
	const blur = interpolate(frame, [from + 10, from + 120], [10, 0], {
		...clamp,
		...ease,
	});
	return (
		<div style={style.chat}>			
			<div
				style={{
					...style.fromBox,
					filter: `blur(${blur}px)`,
					transform: `scale(${scale})`,
				}}
			>
				<div style={{ ...style.text, color: "#FF4848" }}>{text}</div>
			</div>
			<Img
				style={{
					...style.avatar,
					top: -50,
					left: -50,
					opacity,
				}}
				src={chinaAvatar}
			/>
		</div>
	);
};

const ToMessage = ({ text, from }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [from, from + 90], [0, 1], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [from, from + 90], [0, 1], {
		...clamp,
		...ease,
	});
	const blur = interpolate(frame, [from + 10, from + 90], [10, 0], {
		...clamp,
		...ease,
	});
	return (
		<div style={{...style.chat, marginLeft: 900 }}>
			<div
				style={{
					...style.toBox,
					filter: `blur(${blur}px)`,
					transform: `scale(${scale})`,
				}}
			>
				<div style={{ ...style.text, color: "#1ECC27" }}>{text}</div>
			</div>
			<Img
				style={{
					...style.avatar,
					top: -50,
					right: -50,
					opacity,
				}}
				src={indiaAvatar}
			/>
		</div>
	);
};

const Favor = () => {
	return (
		<>
			<FromMessage text="We belive you have not done this." />
			<FromMessage
				from={320}
				text="But we can do one favor, Indian officer will lead this international case"
			/>
			<ToMessage from={490} text="We accept this" />
		</>
	);
};

const style = {
	chat: {
		position: "relative",
		marginLeft: -600,
	},
	fromBox: {
		borderTopLeftRadius: 0,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderStyle: "solid",
		borderWidth: 4,
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 30,
		paddingBottom: 30,
		backgroundColor: "#1D0000",
		borderColor: "#5C0707",
		maxWidth: 600,
		marginBottom: 90,
		transformOrigin: "top left",
	},
	toBox: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderStyle: "solid",
		borderWidth: 4,
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 30,
		paddingBottom: 30,
		backgroundColor: "rgba(7,103,12,0.26)",
		borderColor: "#07670C",
		maxWidth: 600,
		marginBottom: 90,
		transformOrigin: "top right",
	},
	text: {
		fontFamily: "sans-serif",
		fontWeight: "600",
		fontSize: 31,
	},
	avatar: {
		position: "absolute",
		width: 100,
		height: 100,
	}
};

export default Favor;