import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#40c0e7" d="M110.07 62.9c0 25.44-20.63 46.07-46.08 46.07c-25.44 0-46.06-20.63-46.06-46.07s20.63-46.06 46.06-46.06c25.46 0 46.08 20.63 46.08 46.06"/><G fill="#fff"><Path d="m62.99 62.9l51.88-5.15v14.6z"/><Path d="M86.84 21.48L63.99 62.9l46.08-13.8l-7.73-19.08z"/></G><Path fill="#fff" d="m63.04 63.19l48.36-19.48l1.63 26.56z"/><Path fill="#fff" d="m64.99 62.74l-45.36 25.7l-5.12-26.12z"/><Path fill="#fff" d="M43.82 105.69L63.99 62.9L18.88 79.61l8.93 18.55z"/><Path fill="#fff" d="M65.1 61.75L19.09 86.26l8.11 12.15z"/><Path fill="#40c0e7" d="M64.96 63.79L18.25 86.93l-5.16-13.67z"/><Path fill="#fff" d="m63.4 62.46l-29.96 42.66l-11.06-9.53z"/><Path fill="#fff" d="m60.33 64.59l48.55-19l-6.65-13.02z"/><Path fill="#40c0e7" d="m60.71 62.58l49.08-17.57l3.54 14.18z"/><Path fill="#fff" d="m62.1 64.09l34.71-38.91l9.88 10.75z"/><Circle cx="63.99" cy="62.9" r="11.71" fill="#fff"/><Path fill="#40c0e7" d="M63.99 51.19c6.47 0 11.71 5.25 11.71 11.71c0 6.47-5.24 11.71-11.71 11.71S52.28 69.37 52.28 62.9c0-6.46 5.24-11.71 11.71-11.71m0-3.67c-9.09 0-16.48 7.39-16.48 16.48c0 9.08 7.39 16.48 16.48 16.48S80.47 73.09 80.47 64s-7.39-16.48-16.48-16.48"/><Circle cx="63.99" cy="62.9" r="5.5" fill="#40c0e7"/><Path fill="#40c0e7" d="M63.99 16.84c25.45 0 46.08 20.63 46.08 46.06c0 25.44-20.63 46.07-46.08 46.07c-25.44 0-46.06-20.63-46.06-46.07c0-25.43 20.63-46.06 46.06-46.06m0-6.06c-29.34 0-53.22 23.87-53.22 53.22s23.88 53.22 53.22 53.22c29.36 0 53.24-23.88 53.24-53.22c0-29.35-23.88-53.22-53.24-53.22"/></Svg>
);
