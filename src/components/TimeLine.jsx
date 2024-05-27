import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import SlideOut from "./SlideOut";
import { maxWidth } from "../utils/constants";
import { ease, clamp } from "../utils/";
import { colors } from "../themes/";

const yearWidth = 360;
const TimeLine = ({ startFrom = 2002, endAt = 2010, hideAt = 0 }) => {
	const frame = useCurrentFrame();
	const years = React.useMemo(() => {
		const out = [];
		for (let i = startFrom - 2; i <= endAt + 5; i++) {
			out.push(i);
		}
		return out;
	}, [startFrom, endAt]);
	const startYearFont = interpolate(frame, [0, 15], [90, 22], {
		...ease,
		...clamp,
	});
	const startYearHeight = interpolate(frame, [0, 15], [120, 60], {
		...ease,
		...clamp,
	});
	const moveX = (maxWidth / 2.668) - (((endAt - startFrom ) + 2) * yearWidth);
	const translateX = interpolate(frame, [15, 35], [0, moveX], {
		...ease,
		...clamp,
	});
	const endYearFont = interpolate(frame, [35, 60], [22, 90], {
		...ease,
		...clamp,
	});
	const endYearHeight = interpolate(frame, [35, 60], [60, 120], {
		...ease,
		...clamp,
	});
	const renderYear = (year) => {
		const isStartYear = startFrom === year;
		const isEndYear = endAt === year;
		return (
			<div style={style.yearBox}>
				<div style={style.yearTextCover}>
					<div style={{ ...style.yearLine, height: 30 }} />
				</div>
				<div style={style.yearTextCover}>
					<div style={{ ...style.yearLine, height: 40 }} />
				</div>
				<div style={style.yearTextCover}>
					<div style={{ ...style.yearLine, height: 50 }} />
				</div>
				{isStartYear ? (
					<div style={style.yearTextCover}>
						<div
							style={{
								...style.yearText,
								fontSize: startYearFont,
							}}
						>
							{year}
						</div>
						<div
							style={{
								...style.yearLine,
								height: startYearHeight,
							}}
						/>
					</div>
				) : isEndYear ? (
					<div style={style.yearTextCover}>
						<div
							style={{
								...style.yearText,
								fontSize: endYearFont,
							}}
						>
							{year}
						</div>
						<div
							style={{
								...style.yearLine,
								height: endYearHeight,
							}}
						/>
					</div>
				) : (
					<div style={style.yearTextCover}>
						<div style={style.yearText}>{year}</div>
						<div style={{ ...style.yearLine, height: 60 }} />
					</div>
				)}
			</div>
		);
	};
	return (
		<SlideOut			
			style={{
				...style.main,
				transform: `translate(${translateX}px, 0)`,
			}}
			from={hideAt}
		>
			{years.map(renderYear)}
		</SlideOut>
	);
};

const style = {
	main: {
		minWidth: maxWidth,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 10,
		borderStyle: "solid",
		borderColor: colors.white,
		position: "absolute",
		bottom: 0,
		display: "flex",
	},
	yearBox: {
		width: yearWidth,
		display: "flex",
		alignItems: "flex-end",
	},
	yearLine: {
		width: 7,
		backgroundColor: colors.white,
	},
	yearTextCover: {
		width: 70,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	yearText: {
		fontSize: 22,
		fontFamily: "sans-serif",
		color: colors.white,
		fontWeight: "bold",
	},
};

export default TimeLine;