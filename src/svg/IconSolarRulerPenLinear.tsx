import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M16 22c-1.886 0-2.828 0-3.414-.586S12 19.886 12 18V6c0-1.886 0-2.828.586-3.414S14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z"/><Path strokeLinecap="round" d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"/><Path d="M2 5.8v-.95C2 3.276 3.343 2 5 2s3 1.276 3 2.85v.95m-6 0s1.125.95 3 .95s3-.95 3-.95m-6 0v9.734c0 .591 0 .887.038 1.177q.067.516.25 1.005c.102.275.241.54.52 1.069l1.18 2.242M8 5.8v9.734c0 .591 0 .887-.038 1.177q-.066.516-.25 1.005c-.102.275-.241.54-.52 1.069l-1.18 2.242m0 0l-.288.548A.81.81 0 0 1 5 22a.81.81 0 0 1-.724-.425l-.288-.548m2.024 0H3.988"/></G></Svg>
);
