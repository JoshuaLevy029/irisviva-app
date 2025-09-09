import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M14.5 2.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.56l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72h-4.19a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><Path fill={color} d="M11.25 2.75c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10q-.001-.9-.154-1.755A2.25 2.25 0 0 1 19 8.75v-.568l-4.159 4.159a2.25 2.25 0 1 1-3.182-3.182L15.818 5h-.568a2.25 2.25 0 0 1-2.245-2.096q-.856-.153-1.755-.154"/></Svg>
);
