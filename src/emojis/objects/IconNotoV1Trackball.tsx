import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="none" stroke="#2f2f2f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M17.67 3v2.46c0 8.82 7.15 15.97 15.97 15.97h14.74c8.82 0 15.97 7.15 15.97 15.97v12.42"/><Path fill="#fcc21b" d="M42.72 128h42.03c7.73 0 14-6.27 14-14V69.98H28.72V114c0 7.73 6.27 14 14 14"/><Circle cx="63.74" cy="69.98" r="35.02" fill="#fcc21b"/><G fill="none" stroke="#fff" strokeMiterlimit="10"><Path strokeWidth="3" d="M63.74 46.69c12.86 0 23.29 10.43 23.29 23.29s-10.42 23.3-23.29 23.3s-23.29-10.43-23.29-23.3s10.43-23.29 23.29-23.29z"/><Circle cx="63.74" cy="69.98" r="23.29" strokeWidth="4"/></G><Circle cx="63.74" cy="69.98" r="21.34" fill="#2f2f2f"/><Circle cx="63.74" cy="69.98" r="16.55" fill="#40c0e7"/><Path fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M53.44 72.28s-.69-4.46 3.03-8.52m3.83-3.85l.92-.5"/><Path fill="#ed6c30" d="m57.41 41.35l-1.18-5.45c-8.71 1.9-16.2 7.05-21.16 14.11l4.54 3.24a29.42 29.42 0 0 1 17.8-11.9m13.84-5.45l-1.18 5.45c7.33 1.61 13.64 5.95 17.8 11.9l4.54-3.24C87.46 42.95 79.96 37.8 71.25 35.9"/></Svg>
);
