import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" strokeLinejoin="round" d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2s2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"/><Path d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4m3 3c-4.418 0-8 3.356-8 7.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495C18 10.355 14.418 7 10 7Z"/><Path strokeLinecap="round" d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.996.338 4.564-2.156 7.538-1.662c1.048.174 2.025.474 2.602.794"/><Path d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6"/><Path d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482s-1.717-2.026-1.165-2.982s1.97-1.173 3.165-.482Z"/></G></Svg>
);
