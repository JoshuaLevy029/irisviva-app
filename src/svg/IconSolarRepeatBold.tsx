import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75" clipRule="evenodd"/></Svg>
);
