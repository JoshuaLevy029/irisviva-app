import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#006ca2" d="M121.03 0H7.02C3.24 0 .14 3.09.14 6.88v114.01c0 3.79 3.1 6.88 6.88 6.88h114.01c3.78 0 6.88-3.09 6.88-6.88V6.88c0-3.79-3.1-6.88-6.88-6.88"/><Path fill="#fff" d="M48.22 71.54H35.94a3.44 3.44 0 0 1-3.44-3.44c0-17.34 14.06-31.39 31.39-31.39h47.45v19.16H63.89c-6.76 0-12.24 5.48-12.24 12.24c.01 1.89-1.53 3.43-3.43 3.43m5.44 50.17H28.34c-1.24 0-2.3-.91-2.47-2.14l-6.23-43.41c-.2-1.37.75-2.63 2.12-2.83c1.38-.2 2.63.75 2.83 2.12l5.92 41.26h20.98l5.92-41.26a2.49 2.49 0 0 1 2.83-2.12c1.37.2 2.32 1.46 2.12 2.83l-6.23 43.41a2.5 2.5 0 0 1-2.47 2.14"/><Path fill="#fff" d="M86.69 63.18h-9.8c-6.6 0-12-5.4-12-12v-9.8c0-6.6 5.4-12 12-12h9.8c6.6 0 12 5.4 12 12v9.8c0 6.6-5.4 12-12 12"/><Path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="11" d="M62.02 14.5h39.53m-19.76 0v31.78"/><Path fill="#fff" d="M49.81 90.05c-2.97 0-4.62-1.12-5.82-1.93c-.98-.67-1.57-1.07-3-1.07s-2.02.4-3 1.07c-1.2.82-2.84 1.93-5.81 1.93s-4.62-1.12-5.81-1.93c-.98-.67-1.57-1.07-3-1.07a2.5 2.5 0 0 1 0-5c2.97 0 4.62 1.12 5.81 1.93c.98.67 1.57 1.07 3 1.07s2.02-.4 3-1.07c1.2-.82 2.84-1.93 5.81-1.93s4.62 1.12 5.82 1.93c.98.67 1.57 1.07 3 1.07c1.44 0 2.03-.4 3-1.07c1.2-.82 2.84-1.93 5.82-1.93a2.5 2.5 0 0 1 0 5c-1.44 0-2.03.4-3 1.07c-1.2.82-2.84 1.93-5.82 1.93"/><Path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="6" d="M113.61 33.98v24.6"/></Svg>
);
