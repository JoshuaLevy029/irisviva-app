import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="12" cy="12" r="2"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524"/></G></Svg>
);
