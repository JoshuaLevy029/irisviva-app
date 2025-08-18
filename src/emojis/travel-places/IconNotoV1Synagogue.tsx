import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#f2c07c" d="M4 76.38h120V128H4z"/><Path fill="#f2c07c" d="M4 80.67h120v4H4z"/><Path fill="#855c52" d="M0 76.17h128v5H0z"/><Path fill="#b79178" d="M118.69 63.75H9.31L0 76.38h128z"/><Path fill="#ffdcae" d="M101.55 128h-75.1V42.41L64 13.66l37.55 28.75z"/><Path fill="#ffe0b2" d="M101.55 49.92L64 21.17L26.45 49.92v-6.88L64 14.29l37.55 28.75z"/><Path fill="#855c52" d="M21.8 47.66L64 15.35l42.2 32.31v-8.43L64 6.92L21.8 39.23z"/><Path fill="#b79178" d="M78.23 103.46V128H49.77v-24.54c0-7.85 4.02-15.47 14.24-15.47s14.22 7.62 14.22 15.47"/><Path fill="#855c52" d="M55 102.4h18V128H55z"/><Path fill="#2b8bc1" d="M43.59 108.52v12.07h-11v-12.07c0-3.03 1.55-6.76 5.5-6.76s5.5 3.73 5.5 6.76"/><Path fill="#196ca2" d="M36.08 113.92v6.68h-3.49v-12.07c0-3.03 1.55-6.76 5.5-6.76s5.5 3.72 5.5 6.76zm-16.19-4.73v9.05h-8.25v-9.05c0-2.28 1.16-5.07 4.13-5.07s4.12 2.79 4.12 5.07"/><Path fill="#0277bd" d="M116.39 109.19v9.05h-8.25v-9.05c0-2.28 1.16-5.07 4.13-5.07s4.12 2.79 4.12 5.07"/><Path fill="#2b8bc1" d="M95.38 108.52v12.07h-11v-12.07c0-3.03 1.55-6.76 5.5-6.76s5.5 3.73 5.5 6.76"/><Path fill="#196ca2" d="M87.86 113.92v6.68h-3.49v-12.07c0-3.03 1.55-6.76 5.5-6.76s5.5 3.72 5.5 6.76z"/><Circle cx="64" cy="55.62" r="24" fill="#196ca2"/><Path fill="#196ca2" d="M64 35.16c12.67 0 23.03 9.81 23.93 22.25c.04-.58.07-1.16.07-1.75c0-13.25-10.75-24-24-24s-24 10.75-24 24c0 .59.03 1.17.07 1.75c.9-12.44 11.26-22.25 23.93-22.25"/><G fill="#fff"><Path d="M64 35.66L45.95 67.09h36.1zm0 6.14l13 22.63H51z"/><Path d="m64 77.66l18.05-31.43h-36.1zm0-6.14L51 48.89h26z"/></G></Svg>
);
