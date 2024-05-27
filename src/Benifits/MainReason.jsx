import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";
import PointLineDraw from "../components/PointLineDraw";
import USAMap from "./USAMap";
import { ease, clamp } from "../utils";
const bombImg = staticFile("bomb.png");
const detonatorImg = staticFile("detonator.png");
const MainReason = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 40], [0, 1], {
		...clamp,
		...ease
	});
	const scale = interpolate(frame, [30, 60], [1.2, 1], {
		...clamp,
		...ease
	});
	return (
		<div style={style.row}>
			<USAMap  />			
			<div style={{ ...style.box, opacity, transform: `scale(${scale})` }}>
				<Img src={bombImg} style={style.img} />
			</div>
			<div style={{ opacity }}>
			<PointLineDraw
					exitImage
					color="#fff"
					imgFile={detonatorImg}
					from={[590, 550]}
					to={[1270, 600]}
					factor={900}
					animateFrom={40}
					duration={50}
					imgWidth={200}
					imgHeight={200}
				/>
			</div>
		</div>
	)
};


const style = {
	row: {
		flexDirection: "row",
		display: "flex",
		width: 1700,
		justifyContent: "space-between",		
		alignItems: 'center'
	},
	box: {
		width: 350,
		height: 350,
		borderWidth: 5,
		borderColor: "#900F0F",
		borderStyle: "solid",
		backgroundImage: "linear-gradient(133deg, #1A1A1A 0%, #000000 100%)",
		borderRadius: 20,
		display: "flex",
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		height: 160,
		width: 270
	},
}

export default MainReason;