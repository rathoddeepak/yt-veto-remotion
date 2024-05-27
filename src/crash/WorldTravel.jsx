import {
	interpolate,
	useCurrentFrame,
	Sequence,
	staticFile,
	Audio
} from "remotion";
import { Gif } from "@remotion/gif";
import PointLineDraw from "../components/PointLineDraw";
import CallOutCard from "../components/CallOutCard";
import Natuna from "./Natuna";
import FadeOut from "../components/FadeOut";
import { worldPath1, worldPath2 } from "../utils/worldPaths";
import { clamp, ease } from "../utils";
const planeImage = staticFile("plane.png");
const blast = staticFile("blast.gif");
const WorldTravel = () => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 30, 110, 120], [1, 6, 6, 4], {
		...clamp,
		...ease,
	});
	const tx = interpolate(frame, [0, 30, 110, 120], [0, 350, 350, 500], {
		...clamp,
		...ease,
	});
	const ty = interpolate(frame, [0, 30, 110, 120], [0, 120, 120, 150], {
		...clamp,
		...ease,
	});
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2000 1280"
				fill="none"
				style={{
					transform: `scale(${scale}) translate(-${tx}px, -${ty}px)`,
				}}
			>
				<path
					fill="#242424"
					fillOpacity={1}
					id="outline"
					d={worldPath1}
					fillRule="evenodd"
					stroke="none"
					strokeWidth="0"
				/>
				<path
					id="boundaries"
					fill="none"
					stroke="rgb(0, 0, 0)"
					strokeWidth="2px"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeDasharray="none"
					strokeOpacity="1"
					strokeMiterlimit="4"
					d={worldPath2}
				/>
			</svg>
			<FadeOut from={80}>
				<PointLineDraw
					exitImage
					color="#A8FF66"
					imgFile={planeImage}
					from={[800, 350]}
					to={[1080, 520]}
					factor={600}
					animateFrom={30}
					duration={21}
					fromLabel="Delhi"
					toLabel="Kolkata"
				/>
			</FadeOut>

			<FadeOut from={200}>
				<PointLineDraw
					exitImage
					color="#A8FF66"
					imgFile={planeImage}
					from={[430, 420]}
					to={[870, 420]}
					factor={700}
					animateFrom={120}
					duration={30}
					fromLabel="Kolkata"
					toLabel="Hong Kong"
				/>
			</FadeOut>
			<FadeOut from={290}>
				<PointLineDraw
					exitImage
					color="#A8FF66"
					imgFile={planeImage}
					from={[870, 420]}
					to={[800, 800]}
					factor={700}
					animateFrom={160}
					duration={60}
					fromLabel="Hong Kong"
				/>

				{frame > 235 ? (
					<Gif
						src={blast}
						playbackRate={1}
						style={{
							width: 200,
							height: 200,
							left: 700,
							top: 700,
							position: "absolute",
						}}
					/>
				) : null}
			</FadeOut>
			<Sequence layout="none" from={290}>
				<div style={style.main}>
					<CallOutCard
						width={500}
						height={400}
						startX={780}
						startY={800}
						endX={900}
						endY={100}
						backDropColor="#00000021"
					>
						<Natuna />
					</CallOutCard>
				</div>
			</Sequence>
			<Audio startFrom={77} src={staticFile("6.m4a")} />
		</>
	);
};

const style = {
	main: {
		position: "absolute",
		height: "101%",
		width: "100%",
		top: -10
	},
};

export default WorldTravel;