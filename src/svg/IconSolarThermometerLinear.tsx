import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5"><Path strokeLinejoin="round" d="m17.096 10l1.3 1.3m-4.5 1.9l1.3 1.3m-4.51 1.909l1.301 1.3M5.58 20.558l.383-.384a2.01 2.01 0 0 1 1.647-.578l.799.09a3.02 3.02 0 0 0 2.47-.867l8.942-8.943a4.028 4.028 0 1 0-5.696-5.696L5.18 13.122a3.02 3.02 0 0 0-.866 2.47l.089.8a2.01 2.01 0 0 1-.578 1.646l-.384.383a1.51 1.51 0 0 0 2.137 2.137"/><Path d="m9 15l6.5-6.5"/></G></Svg>
);
