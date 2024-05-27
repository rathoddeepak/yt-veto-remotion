import React from "react";
import {
	AbsoluteFill,
	Sequence,
	Img,
	delayRender,
	cancelRender,
	staticFile,
	continueRender,
	interpolate,
	interpolateColors,
	useCurrentFrame,
} from "remotion";
import { ease, clamp } from "../utils/";
import { maxWidth, maxHeight } from "../utils/constants";
import Globe from "react-globe.gl";

const bgImage = staticFile("background.jpg");

const USSR_LNG = 95.7129;
const USSR_LAT = 37.0902;

const USA_LNG = -80.506836;
const USA_LAT = 32.182205;

const CH_LAT = 30.8617;
const CH_LNG = 95.1954;
const getCountry = (frame) => {
	if (frame > 60 && frame < 120) {
		return ["USA"];
	}
	if (frame > 130 && frame < 260) {
		return ["RUS"];
	}
	if (frame > 270) {
		return ["IND", "CHN"];
	}
	return "";
};
const Inspire = () => {
	const [countries, setCountries] = React.useState({ features: [] });
	const [featureHandle] = React.useState(() => delayRender());
	const [handle] = React.useState(() => delayRender());
	const globeEl = React.useRef(undefined);
	const frame = useCurrentFrame();

	const zoom = interpolate(frame, [0, 60, 220, 351, 360, 400], [40, 2.5, 2.5, 1.3, 1.3, 40], {
		...ease,
		...clamp,
	});

	const opacity = interpolate(frame, [0, 30, 370, 400], [0, 1, 1, 0], {
		...ease,
		...clamp,
	});

	const rotateLang = interpolate(
		frame,
		[60, 90, 120, 140, 220, 260],
		[0, USA_LNG, USA_LNG, USSR_LNG, USSR_LNG, CH_LNG],
		{
			...ease,
			...clamp,
		},
	);

	const altitude = interpolate(
		frame,
		[60, 90, 120, 140, 230, 260, 400],
		[0.01, 0.01, 0.25, 0.01, 0.25, 0.01, 0.25],
		{
			...ease,
			...clamp,
		},
	);

	

	const rotateLat = interpolate(
		frame,
		[60, 90, 120, 140, 220, 260],
		[0, USA_LAT, USA_LAT, USSR_LAT, USSR_LAT, CH_LAT],
		{
			...ease,
			...clamp,
		},
	);

	const capColor = interpolateColors(
		frame,
		[60, 90, 120, 150, 230, 260],
		["#00000000", "#E4181C", "#00000000", "#0A3161", "#0A3161", "#00000000"],
		{
			...ease,
			...clamp,
		},
	);

	const sideColor = interpolateColors(
		frame,
		[60, 90, 120, 150, 230, 260],
		["#00000000", "#008F4Cb4", "#00000000", "#008F4Cb4", "#008F4Cb4", "#00000000"],
		{
			...ease,
			...clamp,
		},
	);

	const currentCountry = getCountry(frame);

	React.useEffect(() => {
		if (globeEl.current) {
			const currentGlobe = globeEl.current;
			currentGlobe.pointOfView({
				lat: rotateLat,
				lng: rotateLang,
				altitude: zoom,
			});
		}
	}, [globeEl, rotateLat, rotateLang, zoom]);

	React.useEffect(() => {
		// Load data
		fetch(staticFile("ne_110m_admin_0_countries.geojson"))
			.then((res) => {
				continueRender(featureHandle);
				return res.json();
			})
			.then(setCountries)
			.catch((err) => {
				cancelRender(err);
			});
	}, []);

	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />
			<Sequence>
				<AbsoluteFill>
					<div style={{ ...style.main, opacity }}>
						<Globe
							ref={globeEl}
							showAtmosphere
							showGlobe
							height={maxHeight}
							width={maxWidth}
							rendererConfig={{
								alpha: false,
								antialias: false,
							}}
							atmosphereColor="white"
							backgroundColor="#00000000"
							globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
							bumpImageUrl="https://unpkg.com/three-globe@2.18.0/example/img/earth-topology.png"
							polygonsData={countries.features.filter((d) =>
								currentCountry.includes(d.properties.ADM0_A3),
							)}
							polygonAltitude={altitude}
							polygonCapColor={(d) => {
								if (d.properties.ADM0_A3 === "IND") {
									return "#FF7E00";
								} 
								if (d.properties.ADM0_A3 === "CHN") {
									return "#FFFF00";
								}
								return capColor;
							}}
							polygonSideColor={() => {
								return sideColor;
							}}
							polygonsTransitionDuration={1}
							animateIn={false}
							onGlobeReady={() => {
								if (globeEl) {
									continueRender(handle);
								}
							}}
						/>
					</div>
				</AbsoluteFill>
			</Sequence>			
		</>
	);
};

const style = {
	main: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	bgImage: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	bgView: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "#000000b4",
	},
};

export default Inspire;