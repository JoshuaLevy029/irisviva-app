import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.5-4.75a.75.75 0 0 1 .555.245l2.5 2.75a.75.75 0 0 1-1.11 1.01L15.25 9.94V16a.75.75 0 0 1-1.5 0V9.94l-1.195 1.315a.75.75 0 0 1-1.11-1.01l2.5-2.75a.75.75 0 0 1 .555-.245m-5 0a.75.75 0 0 1 .75.75v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 1.11-1.01L8.75 14.06V8a.75.75 0 0 1 .75-.75" clipRule="evenodd"/></Svg>
);
