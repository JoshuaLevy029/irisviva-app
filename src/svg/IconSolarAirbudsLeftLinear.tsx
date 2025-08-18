import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color}><Path strokeWidth="1.5" d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.59 5.59 0 0 1 7.56 2h.105A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3a1 1 0 0 0-1 1v6.667m-5 0h5"/><Path strokeLinecap="round" strokeWidth="1.676" d="M8 5v3"/><Circle cx="5.5" cy="5.5" r="5.5" strokeWidth="1.5" transform="matrix(-1 0 0 1 21 11)"/><Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 14v5h3"/><Path strokeLinecap="round" strokeWidth="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9"/></G></Svg>
);
