import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M12 18.977c3.866 0 7-3.124 7-6.977s-3.134-6.977-7-6.977S5 8.147 5 12s3.134 6.977 7 6.977M12 8.44c.387 0 .7.312.7.698v2.565l1.652 1.583a.696.696 0 0 1 .02.987a.7.7 0 0 1-.99.019l-1.867-1.79A.7.7 0 0 1 11.3 12V9.138c0-.386.313-.698.7-.698" clipRule="evenodd"/><Path fill={color} d="M9.858 2.074C10.414 2 11.113 2 11.951 2h.098c.838 0 1.537 0 2.093.074c.585.079 1.115.252 1.54.675s.598.951.677 1.535q.035.272.052.59A8.4 8.4 0 0 0 12 3.628a8.4 8.4 0 0 0-4.41 1.246q.015-.318.051-.59c.079-.584.252-1.111.677-1.535s.955-.596 1.54-.675m5.824 19.176c.425-.423.598-.95.677-1.534q.035-.272.052-.59A8.4 8.4 0 0 1 12 20.373a8.4 8.4 0 0 1-4.41-1.245q.015.317.051.589c.079.584.252 1.111.677 1.535s.955.596 1.54.675c.556.074 1.255.074 2.093.074h.098c.838 0 1.537 0 2.093-.074c.585-.079 1.115-.252 1.54-.675"/></Svg>
);
