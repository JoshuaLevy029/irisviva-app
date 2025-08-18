import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="m9.212 10.174l2.015-1.605c1.303-1.037 1.954-1.556 2.364-1.3s.196 1.05-.229 2.636l-.04.15c-.153.572-.23.858-.095 1.086l.007.012c.14.226.438.306 1.033.465c1.072.287 1.608.43 1.702.804l.004.019c.082.376-.34.712-1.186 1.386l-2.015 1.604c-1.302 1.038-1.953 1.556-2.363 1.3s-.197-1.05.228-2.636l.04-.15c.154-.571.23-.857.096-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465c-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.375.34-.712 1.185-1.385Z"/><Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"/></G></Svg>
);
