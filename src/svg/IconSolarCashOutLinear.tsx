import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M18.667 11C20.55 10.721 22 9.046 22 7.02C22 4.8 20.259 3 18.111 3H5.89C3.74 3 2 4.8 2 7.02C2 9.046 3.449 10.721 5.333 11"/><Path strokeLinecap="round" strokeLinejoin="round" d="M12 6v7m0 0l2-2.333M12 13l-2-2.333"/><Path d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"/><Path strokeLinecap="round" strokeLinejoin="round" d="M5 17h14"/></G></Svg>
);
