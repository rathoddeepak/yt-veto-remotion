import { useCurrentFrame, interpolate, interpolateColors } from "remotion";
import { clamp, ease } from "../utils";
import { evolvePath } from "@remotion/paths";
import { usaPath1, usaPath2, usaPath3 } from "./mapData";

const USAMapReveal = ({ from = 0, style }) => {
    const frame = useCurrentFrame();
    const progress = interpolate(frame, [from, 60], [0.001, 0.01 ], {
        ...clamp,
        ...ease,
    });
    const strokeColor = interpolateColors(
        frame,
        [from + 60, from + 90],
        ["#fff", "#000"],
    );

    const whiteColor = interpolateColors(frame, [from + 30, from + 60], ["#000", "#fff"]);


    const redColor1 = interpolateColors(frame, [from + 30, from + 60], ["#000", "#DB1C45"]);
    const redColor2 = interpolateColors(frame, [from + 30, from + 60], ["#000", "#870012"]);

    const blueColor1 = interpolateColors(frame, [from + 30, from + 60], ["#000", "#6B69A7"]);
    const blueColor2 = interpolateColors(frame, [from + 30, from + 60], ["#000", "#39386E"]);

    const pathEvolve1 = evolvePath(progress, usaPath1);
    const pathEvolve2 = evolvePath(progress, usaPath2);
    const pathEvolve3 = evolvePath(progress, usaPath3);

    return (
        <svg
            style={style}
            width="1100px"
            height="680px"
            viewBox="0 0 1100 680"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="linearGradient-3fm1ctz6to-1"
                >
                    <stop stop-color={blueColor1} offset="0%" />
                    <stop stop-color={blueColor2} offset="100%" />
                </linearGradient>
                <linearGradient
                    x1="-2.64420775e-12%"
                    y1="257.027839%"
                    x2="50%"
                    y2="69.7692538%"
                    id="linearGradient-3fm1ctz6to-2"
                >
                    <stop stop-color={redColor1} offset="0%" />
                    <stop stop-color={redColor2} offset="100%" />
                </linearGradient>
            </defs>
            <g
                id="Video"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <g
                    id="usa-flag-in-country-map-flat-by-Vexels"
                    transform="translate(0.000000, 0.916500)"
                    fill-rule="nonzero"
                >
                    <path
                        strokeDasharray={pathEvolve1.strokeDasharray}
                        strokeDashoffset={pathEvolve1.strokeDashoffset}
                        d={usaPath1}
                        fill="url(#linearGradient-3fm1ctz6to-1)"
                        strokeWidth={2}
                        stroke={strokeColor}
                    />
                    <g
                        id="Group"
                        transform="translate(71.870828, 20.405544)"
                        fill="url(#linearGradient-3fm1ctz6to-2)"
                    >
                        <path
                            strokeDasharray={pathEvolve2.strokeDasharray}
                            strokeDashoffset={pathEvolve2.strokeDashoffset}
                            d={usaPath2}
                            strokeWidth={2}
                            stroke={strokeColor}
                        />
                    </g>
                    <g
                        id="Group"
                        transform="translate(33.144828, 53.237000)"
                        fill={whiteColor}
                    >
                        <path
                            strokeDasharray={pathEvolve3.strokeDasharray}
                            strokeDashoffset={pathEvolve3.strokeDashoffset}
                            d={usaPath3}
                            strokeWidth={2}
                            stroke={strokeColor}
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default USAMapReveal;