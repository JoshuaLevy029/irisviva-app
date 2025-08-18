import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M16.02 8.077c-2.018.194-4.163.8-5.653 2.29s-2.096 3.635-2.29 5.653m7.943-7.943a19 19 0 0 1 3.228-.016a2.895 2.895 0 0 1 2.69 2.691c.072.932.098 2.059-.015 3.228M16.02 8.077l5.903 5.903m0 0c-.194 2.018-.8 4.163-2.29 5.654s-3.635 2.095-5.653 2.29m0 0a19 19 0 0 1-3.228.015a2.895 2.895 0 0 1-2.69-2.691a19 19 0 0 1 .015-3.228m5.903 5.903L8.077 16.02"/><Path d="M14.996 8.252a6.5 6.5 0 0 0-.868-3.001a6.49 6.49 0 0 0-4.85-3.204a6.499 6.499 0 1 0-1.12 12.943"/><Path d="M9.215 2s-.138 2.356 1.357 5.19c.457.869.956 1.569 1.428 2.123M3 5.928s1.933 1.047 3.428 3.881C7.923 12.644 7.785 15 7.785 15"/><Path strokeLinecap="round" d="m12.5 17.5l5-5m-2 0l2 2m-5 1l2 2M14 14l2 2"/></G></Svg>
);
