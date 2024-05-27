import {
	useCurrentFrame,
	interpolate,
	interpolateColors,
	Img,
	staticFile,
} from "remotion";
import { evolvePath } from "@remotion/paths";
import { ease, clamp } from "../utils";
import { worldPath1, worldPath2 } from "../utils/worldPaths";
import LineDraw from "../components/LineDraw";

const ciaImg = staticFile("cia.png");
const kgbImg = staticFile("kgb.png");

const WorldBlame = () => {
	const frame = useCurrentFrame();
	const pathProgress = interpolate(frame, [0, 30], [0, 0.1], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		...clamp,
	});
	const scale = interpolate(frame, [0, 15], [1.2, 0.9], {
		...clamp,
		...ease,
	});
	const fillOpacity = interpolate(frame, [10, 30], [0, 1], {
		...clamp,
	});
	const strokeColor = interpolateColors(
		frame,
		[10, 30],
		["#fff", "#c7c7c7"],
		{
			...clamp,
		},
	);
	const ev2 = evolvePath(pathProgress, worldPath2);
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2000 1280"
				fill="none"
				style={{ transform: `scale(${scale})`, opacity }}
			>
				<path
					fill="#242424"
					fillOpacity={fillOpacity}
					id="outline"
					d={worldPath1}
					stroke="rgb(0, 0, 0)"
					strokeWidth={2}
				/>
				<path
					stroke={strokeColor}
					strokeWidth={4}
					d={worldPath2}
					strokeDasharray={ev2.strokeDasharray}
					strokeDashoffset={ev2.strokeDashoffset}
				/>
			</svg>
			<LineDraw
				color="#FF0000"
				from={[550, 550]}
				to={[1250, 650]}
				animateFrom={60}
				strokeWidth={8}
			/>
			<LineDraw
				color="#FF0000"
				from={[1300, 350]}
				to={[1250, 650]}
				animateFrom={60}
				strokeWidth={8}
			/>
			<LineDraw
				color="#FF0000"
				from={[800, 200]}
				to={[1250, 650]}
				animateFrom={60}
				strokeWidth={8}
			/>
			<LineDraw
				color="#FF0000"
				from={[1450, 850]}
				to={[1250, 650]}
				animateFrom={60}
				strokeWidth={8}
			/>
			<Agencies />
			<Terrorist />
		</>
	);
};

const Agencies = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [120, 160], [0, 1], {
		...clamp,
	});
	const scale = interpolate(frame, [120, 160], [1.2, 0.9], {
		...clamp,
		...ease,
	});

	return (
		<>
			<div
				style={{
					...style.agency,
					opacity,
					left: 500,
					top: 500,
					transform: `scale(${scale})`,
				}}
			>
				<Img src={ciaImg} style={style.img} />
			</div>
			<div
				style={{
					...style.agency,
					opacity,
					transform: `scale(${scale})`,
					left: 1250,
					top: 300,
				}}
			>
				<Img src={kgbImg} style={style.img} />
			</div>
		</>
	);
};

const Terrorist = () => {};

const style = {
	agency: {
		height: 120,
		width: 120,
		backgroundColor: "#c7c7c7",
		borderRadius: 100,
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "#ffffff",
		overflow: "hidden",
		position: "absolute",
		boxShadow: "0 0 19px 0 #617EFF",
	},
	img: {
		width: "100%",
		height: "100%",
	},
};

export default WorldBlame;