import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" strokeLinejoin="round" d="M19.141 2.078a9.97 9.97 0 0 1 2.859 7a9.97 9.97 0 0 1-2.922 7.064M5 16.22a9.97 9.97 0 0 1-3-7.142A9.97 9.97 0 0 1 4.936 2m11.349 3.122C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044C6.69 12.057 6 10.634 6 9.06c0-1.555.673-2.963 1.762-3.982"/><Circle cx="12" cy="9.078" r="2"/><Path strokeLinecap="round" strokeLinejoin="round" d="M12.5 11L16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5"/></G></Svg>
);
