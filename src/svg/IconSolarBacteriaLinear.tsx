import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"/><Path d="M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"/><Path strokeLinecap="round" d="m4.5 11.5l.414-1m9.551-3.329s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.172 6.464 6.172 6.464M19 13.136s-1.162.473-1.483 1.673s.448 2.19.448 2.19m-4.545.773L15 19m-.5-5v-2M12 5h-2m2.5 4.5l-1-1"/></G></Svg>
);
