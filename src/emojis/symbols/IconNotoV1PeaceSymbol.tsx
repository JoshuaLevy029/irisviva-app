import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="none" stroke="#f79229" strokeMiterlimit="10" strokeWidth="11"><Circle cx="64" cy="64" r="58"/><Path strokeLinecap="round" strokeLinejoin="round" d="M64 6v116m0-58l41.01 41.01m-82.02 0L64 64"/></G></Svg>
);
