import aerialTerrain from "../assets/minetwin-terrain-v5.png";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Minus, Plus, Maximize, Hand, Map as MapIcon } from "lucide-react";
import { STAGES, STATES, stageState, alertMetric, format } from "./scenario";

function Truck({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="23" rx="48" ry="11" fill="#1c2924" opacity=".18" />
      <path d="M-41 -5 L10 -5 L27 9 L-24 9 Z" fill="#dfb961" />
      <path d="M-41 -5 L-24 9 L-24 24 L-41 9 Z" fill="#9a7539" />
      <path d="M-24 9 L27 9 L27 23 L-24 24 Z" fill="#c99b46" />
      <path
        d="M13 -12 L31 -12 L45 4 L45 23 L27 23 L27 9 L13 -3 Z"
        fill="#e5ba55"
      />
      <path d="M29 -8 L40 5 L28 5 L21 -8 Z" fill="#4a6668" />
      {[-17, 30].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="24" rx="9" ry="11" fill="#334441" />
          <ellipse cx={x} cy="24" rx="4" ry="6" fill="#7b8673" />
        </g>
      ))}
    </g>
  );
}
function Drill() {
  return (
    <g>
      <path d="M-45 27 L-7 45 L42 30 L3 11 Z" fill="#354945" />
      <path d="M-45 18 L-7 36 L42 21 L3 3 Z" fill="#536057" />
      <path d="M-32 -5 L-7 -17 L29 1 L29 21 L-7 35 L-32 22 Z" fill="#c79a4a" />
      <path d="M-7 -17 L14 -25 L38 -12 L29 1 Z" fill="#e5bf6c" />
      <path d="M7 -17 L18 -21 L31 -13 L21 -8 Z" fill="#446164" />
      <path
        d="M-25 9 L-22 -94 L-5 -100 L-8 17 Z"
        fill="#617970"
        stroke="#243e3a"
        strokeWidth="3"
      />
      <path
        d="M-19 -85 L-9 -69 L-20 -51 L-9 -33 L-20 -14 L-9 3"
        fill="none"
        stroke="#dbbf76"
        strokeWidth="3"
      />
      <path d="M-18 -96 L-18 36" stroke="#263c38" strokeWidth="3" />
      <path
        className="m2-drill-motion"
        d="M-18 33 L-18 45"
        stroke="#d9b168"
        strokeWidth="4"
      />
    </g>
  );
}
function Loader() {
  return (
    <g>
      <path
        d="M-59 24 L-26 43 L25 25 L-8 6 Z"
        fill="#394a43"
        stroke="#738273"
        strokeWidth="2"
      />
      <path d="M-50 9 L-20 26 L22 12 L-8 -5 Z" fill="#c49a49" />
      <path d="M-50 9 L-20 26 L-20 40 L-50 23 Z" fill="#947238" />
      <path d="M-21 -19 L3 -26 L17 -11 L17 10 L-20 25 Z" fill="#ddb256" />
      <path d="M-15 -15 L0 -19 L9 -10 L9 2 L-15 10 Z" fill="#537474" />
      <path
        d="M9 -14 L44 -66 L76 -44 L88 -2"
        stroke="#e7c16d"
        strokeWidth="12"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M9 -14 L44 -66 L76 -44"
        stroke="#967638"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M76 -2 L103 -7 L111 14 L83 17 Z"
        fill="#a78948"
        stroke="#675839"
        strokeWidth="2"
      />
      <circle cx="44" cy="-66" r="6" fill="#6c633e" />
    </g>
  );
}
function Crusher() {
  return (
    <g>
      <path d="M-72 40 L-16 69 L69 34 L14 9 Z" fill="#a7b3a2" />
      <path
        d="M-49 -50 L8 -73 L54 -49 L-2 -26 Z"
        fill="#6d8680"
        stroke="#36524d"
      />
      <path d="M-49 -50 L-2 -26 L-2 32 L-49 8 Z" fill="#627d75" />
      <path d="M-2 -26 L54 -49 L54 8 L-2 32 Z" fill="#425e57" />
      <path
        d="M-53 -58 L8 -86 L62 -57 L-1 -29 Z"
        fill="#b7bca3"
        stroke="#5a6e5c"
        strokeWidth="3"
      />
      <path d="M-34 -57 L7 -75 L41 -57 L-1 -40 Z" fill="#364c43" />
      <path
        d="M-38 15 L-38 40 M-3 31 L-3 60 M43 16 L43 40"
        stroke="#3c5650"
        strokeWidth="6"
      />
      <path
        d="M-42 13 L-5 34 L47 13"
        stroke="#d3b35f"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M-50 -29 L-14 -11 M-50 -16 L-14 2"
        stroke="#a4b59f"
        strokeWidth="2"
      />
    </g>
  );
}
function Mill() {
  return (
    <g>
      <path d="M-88 43 L-29 72 L93 20 L31 -8 Z" fill="#9dab9b" />
      <path d="M-61 -43 L37 -77 L73 -24 L-25 15 Z" fill="#748d81" />
      <path d="M-61 -43 L-25 15 L-25 40 L-61 -18 Z" fill="#5b746c" />
      <ellipse
        cx="37"
        cy="-30"
        rx="34"
        ry="47"
        transform="rotate(-18 37 -30)"
        fill="#4c7065"
        stroke="#b1c5ad"
        strokeWidth="3"
      />
      <ellipse
        cx="-61"
        cy="3"
        rx="34"
        ry="47"
        transform="rotate(-18 -61 3)"
        fill="#799a88"
        stroke="#c8d4b9"
        strokeWidth="3"
      />
      <path
        d="M-63 -44 L35 -77 M-89 -16 L10 -53 M-32 35 L65 1"
        stroke="#c0c8a7"
        strokeWidth="4"
      />
      <ellipse
        cx="-61"
        cy="3"
        rx="13"
        ry="19"
        transform="rotate(-18 -61 3)"
        fill="#385e53"
      />
      <path
        d="M-77 43 L-77 61 M-32 45 L-32 76 M71 4 L71 31"
        stroke="#506b5e"
        strokeWidth="8"
      />
      <path d="M66 -25 L95 -13 L95 8 L65 -4 Z" fill="#be9b4f" />
    </g>
  );
}
function Building({ x, y, w = 110, h = 45 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M0 0 L${w} -38 L${w + 62} -8 L62 30 Z`} fill="#a3b6a5" />
      <path d={`M0 0 L62 30 L62 ${30 + h} L0 ${h} Z`} fill="#778f7e" />
      <path
        d={`M62 30 L${w + 62} -8 L${w + 62} ${h - 8} L62 ${30 + h} Z`}
        fill="#597869"
      />
      <path
        d={`M12 7 L51 25 M12 20 L51 38 M12 33 L51 51`}
        stroke="#b2c5b1"
        strokeWidth="3"
      />
    </g>
  );
}

const MineMap = forwardRef(function MineMap(
  { selected, onSelect, animate, stages = STAGES, minute = 0 },
  ref,
) {
  const svgRef = useRef(null),
    surfaceRef = useRef(null),
    drag = useRef(null);
  const [view, setView] = useState({ x: 0, y: 0, z: 1 });
  const [dragging, setDragging] = useState(false),
    [hover, setHover] = useState(null);
  const [showRoutes, setShowRoutes] = useState(true);
  const [terrain, setTerrain] = useState(true);
  const aerialPoints={drill:[465,308],blast:[581,343],load:[536,555],crush:[1064,433],grind:[1450,620]};
  const positioned=stages.map(s=>terrain?{...s,x:aerialPoints[s.id][0],y:aerialPoints[s.id][1]}:s);
  const bound = (v) => terrain ? ({...v,
    x: Math.max(1600-1600*v.z,Math.min(0,v.x)),
    y: Math.max(900-900*v.z,Math.min(0,v.y))
  }) : ({...v,x:Math.max(-1600*v.z+300,Math.min(1300,v.x)),y:Math.max(-900*v.z+180,Math.min(720,v.y))});
  function point(e) {
    const p = svgRef.current.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;
    return p.matrixTransform(svgRef.current.getScreenCTM().inverse());
  }
  function zoomAt(factor, p = { x: 800, y: 450 }) {
    setView((v) => {
      const z = Math.max(terrain ? 1 : 0.65, Math.min(2.6, v.z * factor)),
        ratio = z / v.z;
      return bound({
        z,
        x: p.x - (p.x - v.x) * ratio,
        y: p.y - (p.y - v.y) * ratio,
      });
    });
  }
  function reset() {
    setView({ x: 0, y: 0, z: 1 });
  }
  function focus(id) {
    const s = positioned.find((s) => s.id === id);
    setView(bound({ z: 1.6, x: 800 - s.x * 1.6, y: 450 - s.y * 1.6 }));
  }
  useImperativeHandle(ref, () => ({ reset, focus }), [terrain]);
  useEffect(() => {
    const el = surfaceRef.current;
    const wheel = (e) => {
      e.preventDefault();
      zoomAt(Math.exp(-e.deltaY * 0.0016), point(e));
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, [terrain]);
  useEffect(() => { setView({x:0,y:0,z:1}); }, [terrain]);
  useEffect(() => {
    svgRef.current?.pauseAnimations();
  }, [animate]);
  useEffect(() => { svgRef.current?.setCurrentTime(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : minute * 22 / 30); }, [minute]);
  function down(e) {
    if (e.button !== 0) return;
    const p = point(e);
    drag.current = {
      x: p.x,
      y: p.y,
      origin: view,
      moved: false,
      id: e.target.closest("[data-stage]")?.dataset.stage,
    };
    svgRef.current.setPointerCapture(e.pointerId);
  }
  function move(e) {
    if (!drag.current) return;
    const p = point(e),
      dx = p.x - drag.current.x,
      dy = p.y - drag.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) {
      drag.current.moved = true;
      setDragging(true);
      setView(
        bound({
          ...drag.current.origin,
          x: drag.current.origin.x + dx,
          y: drag.current.origin.y + dy,
        }),
      );
    }
  }
  function up() {
    if (drag.current && !drag.current.moved && drag.current.id)
      onSelect(drag.current.id);
    drag.current = null;
    setDragging(false);
  }
  return (
    <div
      className={`m2-map ${terrain ? "m4-terrain" : ""} ${dragging ? "is-dragging" : ""} ${animate ? "" : "is-paused"}`}
      ref={surfaceRef}
    >
      <div className="m2-map-caption">
        <span className="m2-map-caption-dot" /> MINA DEMO / VISTA TERRITORIAL{" "}
        <small>{terrain ? "Imagen generada · Equipos ilustrativos · Sin georreferencia" : "Esquema ilustrativo · Sin georreferencia"}</small>
      </div>
      <div className="m4-view-switch" aria-label="Representación del mapa"><button aria-pressed={terrain} onClick={()=>setTerrain(true)}>Terreno</button><button aria-pressed={!terrain} onClick={()=>setTerrain(false)}>Esquema</button></div>
      <svg
        ref={svgRef}
        viewBox="0 0 1600 900"
        preserveAspectRatio={terrain ? "xMidYMid slice" : "xMidYMid meet"}
        className="m2-world"
        tabIndex="0"
        aria-label="Mapa navegable de cinco etapas. Arrastra para mover, usa la rueda o los botones para acercar. Selecciona una etapa para ver sus indicadores."
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={() => {
          drag.current = null;
          setDragging(false);
        }}
        onKeyDown={(e) => {
          if (
            [
              "+",
              "=",
              "-",
              "ArrowLeft",
              "ArrowRight",
              "ArrowUp",
              "ArrowDown",
              "Home",
            ].includes(e.key)
          ) {
            e.preventDefault();
            if (e.key === "Home") reset();
            else if (e.key === "+" || e.key === "=") zoomAt(1.2);
            else if (e.key === "-") zoomAt(1 / 1.2);
            else
              setView((v) =>
                bound({
                  ...v,
                  x:
                    v.x +
                    (e.key === "ArrowRight"
                      ? -65
                      : e.key === "ArrowLeft"
                        ? 65
                        : 0),
                  y:
                    v.y +
                    (e.key === "ArrowDown"
                      ? -65
                      : e.key === "ArrowUp"
                        ? 65
                        : 0),
                }),
              );
          }
        }}
      >
        <defs>
          <filter id="m4-earth"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="3" seed="18" result="noise"/><feColorMatrix in="noise" type="saturate" values="0"/><feBlend in="SourceGraphic" mode="soft-light"/><feComposite in2="SourceGraphic" operator="in"/></filter>
          <linearGradient id="m4-ridge" x1="0" y1="0" x2=".7" y2="1"><stop stopColor="#d5c5a4"/><stop offset=".45" stopColor="#9b9179"/><stop offset="1" stopColor="#565f52"/></linearGradient>
          <linearGradient id="m4-pit" x2=".3" y2="1"><stop stopColor="#a99d80"/><stop offset="1" stopColor="#645f50"/></linearGradient>
          <clipPath id="m4-boundary"><path d="M80 253 L785 51 L1515 326 L1450 643 L727 798 L110 516 Z"/></clipPath>

          <pattern
            id="m2-dots"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#839685" opacity=".17" />
          </pattern>
          <linearGradient id="m2-land" x2=".8" y2="1">
            <stop stopColor={terrain ? "#b7ad92" : "#d6ddc8"} />
            <stop offset="1" stopColor={terrain ? "#848975" : "#b6c6ad"} />
          </linearGradient>
          <linearGradient id="m2-pit" x2="0" y2="1">
            <stop stopColor="#c9c7ad" />
            <stop offset="1" stopColor="#999b7d" />
          </linearGradient>
          <filter id="m2-shadow">
            <feGaussianBlur stdDeviation="13" />
          </filter>
          <pattern
            id="m2-hatch"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <path d="M0 0V12" stroke="#d19b4c" strokeWidth="3" opacity=".3" />
          </pattern>
        </defs>
        <rect width="1600" height="900" fill={terrain ? "#d1d1bf" : "#e9ede2"} />
        <rect width="1600" height="900" fill={terrain ? "#172b22" : "url(#m2-dots)"} opacity={terrain ? .25 : 1} filter={undefined} />
        <g transform={`translate(${view.x} ${view.y}) scale(${view.z})`}>
          {terrain ? <g>
            <image href={aerialTerrain} x="0" y="0" width="1600" height="900" preserveAspectRatio="none"/>
            {showRoutes && <g className="m2-process-routes" fill="none" stroke="#f1ca7e" strokeWidth="3" strokeDasharray="6 10" opacity=".9"><path d="M465 308L581 343"/><path d="M536 555 Q679 578 759 496 Q814 435 888 411 Q959 380 1024 351L1064 433"/><path d="M1064 433L1332 522L1450 620"/></g>}
          </g> : <g>
          <path
            d="M80 310 L785 88 L1515 380 L1450 696 L727 851 L110 569 Z"
            fill="#1d362b"
            opacity=".16"
            filter="url(#m2-shadow)"
            transform="translate(0 27)"
          />
          <path
            d="M80 280 L785 78 L1515 353 L1450 670 L727 825 L110 543 Z"
            fill="#879d83"
          />
          <path
            d="M80 253 L785 51 L1515 326 L1450 643 L727 798 L110 516 Z"
            fill="url(#m2-land)"
            stroke="#afbea4"
            strokeWidth="2"
          />
          {terrain && <g clipPath="url(#m4-boundary)" pointerEvents="none">
            <path d="M80 253 L785 51 L1515 326 L1450 643 L727 798 L110 516 Z" fill="#a99f83" filter="url(#m4-earth)" opacity=".65"/>
            <g filter="url(#m4-earth)">
            <path d="M605 113 L694 58 755 67 797 31 850 90 919 74 989 144 1100 158 1190 246 1036 258 917 211 824 229 729 173 Z" fill="url(#m4-ridge)"/>
            <path d="M694 58 L733 106 712 136 783 171 824 229 773 120 797 31 760 111Z" fill="#d1c4a8" opacity=".65"/>
            <path d="M850 90 L864 151 917 211 901 134 919 74 946 157 1036 258 980 172Z" fill="#575d4e" opacity=".38"/>
            <path d="M102 453 Q222 492 323 592 T657 701 L760 800 535 755 327 672 132 555Z" fill="url(#m4-ridge)"/>
            <path d="M1143 661 Q1229 590 1305 628 L1449 542 1487 661 1387 733 1172 781 1001 769Z" fill="url(#m4-ridge)"/>
            </g>
            {Array.from({length:34},(_,i)=><path key={i} d={`M${650+i*14} ${102+i*2} q${35+i%5*10} 22 ${52+i%7*9} 57 t110 44`} fill="none" stroke={i%2?'#e0d0ad':'#4a5447'} strokeWidth={i%3+1} opacity=".14"/>)}
            {Array.from({length:120},(_,i)=>{const x=170+(i*137%1200),y=600+(i*53%128);return <path key={i} d={`M${x} ${y} l${4+i%8} -${3+i%5} 8 5 -9 4Z`} fill={i%3?'#777965':'#c3b798'} opacity=".5"/>})}
          </g>}
          <g fill="none" stroke="#81977d" strokeWidth="2" opacity=".22">
            <path d="M111 270 Q274 137 486 174 T928 143 T1432 356" />
            <path d="M100 316 Q290 186 492 208 T967 168 T1470 387" />
            <path d="M132 447 Q330 677 718 712 T1382 590" />
            <path d="M185 516 Q402 707 716 742 T1334 650" />
          </g>
          <g filter={terrain ? "url(#m4-earth)" : undefined}>
            <path
              d="M145 280 Q106 160 360 119 Q650 61 780 231 Q834 372 605 468 Q281 535 145 280"
              fill={terrain ? "#b6a184" : "#a7ac90"}
              stroke={terrain ? "#d8c5a0" : "#e1dfc5"}
              strokeWidth="9"
            />
            <path
              d="M183 286 Q157 194 372 155 Q609 111 726 241 Q781 358 589 434 Q320 494 183 286"
              fill={terrain ? "#918874" : "#b7b99d"}
              stroke={terrain ? "#d0bc98" : "#d9d8be"}
              strokeWidth="8"
            />
            <path
              d="M228 294 Q202 224 386 191 Q593 154 680 254 Q726 348 565 405 Q352 454 228 294"
              fill={terrain ? "#b3a183" : "#939d83"}
              stroke={terrain ? "#c9b38e" : "#d4d4b8"}
              strokeWidth="7"
            />
            <path
              d="M271 305 Q253 248 401 224 Q561 195 629 269 Q669 334 539 378 Q377 417 271 305"
              fill={terrain ? "url(#m4-pit)" : "url(#m2-pit)"}
              stroke={terrain ? "#c4b18b" : "#caccad"}
              strokeWidth="6"
            />
            <path
              d="M142 270 Q152 404 285 457 Q407 498 516 446 L668 354"
              fill="none"
              stroke="#dce0c6"
              strokeWidth="21"
            />
            <path
              d="M142 270 Q152 404 285 457 Q407 498 516 446 L668 354"
              fill="none"
              stroke="#a2ad8e"
              strokeWidth="2"
              strokeDasharray="8 9"
            />
          </g>
          <g fill={terrain ? "#a69b80" : "#b2b79a"} stroke={terrain ? "#c6b99b" : "#d3d6bc"} strokeWidth="2" filter={terrain ? "url(#m4-earth)" : undefined}>
            <path d={terrain ? "M100 215 L124 178 148 166 170 124 197 113 225 138 270 151 294 131 317 137 336 119 365 129 404 159 313 198 203 198Z" : "M100 215 L184 89 L270 151 L336 97 L404 139 L313 198 L203 198 Z"} />
            <path d={terrain ? "M170 124 L197 113 209 158 203 198 225 138 270 151Z" : "M184 89 L203 198 L270 151"} fill="#98a58a" />
            <path d={terrain ? "M278 160 L317 137 336 119 346 142 358 146Z" : "M278 160 L336 97 L358 146"} fill="#97a58b" />
          </g>
          <path
            d="M427 511 Q598 578 739 482 L894 377 Q991 321 1073 404 L1158 494 Q1203 548 1301 576"
            fill="none"
            stroke="#a0b18f"
            strokeWidth="55"
          />
          <path
            d="M427 511 Q598 578 739 482 L894 377 Q991 321 1073 404 L1158 494 Q1203 548 1301 576"
            fill="none"
            stroke="#dce0c6"
            strokeWidth="41"
          />
          <path
            d="M427 511 Q598 578 739 482 L894 377 Q991 321 1073 404 L1158 494 Q1203 548 1301 576"
            fill="none"
            stroke="#96a686"
            strokeWidth="2"
            strokeDasharray="9 12"
          />
          <g transform="translate(847 555)">
            <path d="M-68 30 L-8 -53 L64 20 L1 54 Z" fill="#aaad8e" />
            <path d="M-8 -53 L1 54 L64 20" fill="#8a987c" />
            <path d="M-8 -53 L-19 24 L-68 30" fill="#c1bd9b" />
            <text y="82" textAnchor="middle" className="m2-terrain-label">
              ACOPIO INTERMEDIO
            </text>
          </g>
          {terrain && <g pointerEvents="none"><path d="M1114 325 L1347 254 1481 357 1393 490 1140 421Z" fill="#b0b0a0" stroke="#7e8776" strokeWidth="3"/><path d="M1144 332L1339 275M1160 347L1354 290M1176 362L1370 305" stroke="#d9d7c4" strokeWidth="2" opacity=".65"/>
          {[0,1,2].map(i=><g key={i} transform={`translate(${1165+i*37} ${290+i*17})`}><path d="M0 0v33q13 13 26 0V0" fill="#748a7b"/><ellipse cx="13" rx="13" ry="6" fill="#b3c1ad"/></g>)}</g>}
          <Building x={1220} y={319} w={110} />
          <Building x={1367} y={418} w={48} h={28} />
          <path
            d="M1090 413 L1218 537 L1234 530 L1105 405 Z"
            fill="#5f7b69"
            stroke="#345548"
            strokeWidth="2"
          />
          <path
            d="M1096 413 L1225 533"
            stroke="#cbb677"
            strokeWidth="5"
            strokeDasharray="9 5"
          />
          <path
            d="M1130 450 V483 M1190 505 V538"
            stroke="#466b58"
            strokeWidth="5"
          />
          <g fill="#85a080" opacity=".6">
            {[
              [890, 175],
              [914, 187],
              [1405, 576],
              [1387, 582],
              [808, 672],
              [788, 682],
              [831, 684],
              [1050, 695],
              [1090, 711],
            ].map(([x, y], i) => (
              <path key={i} d={`M${x} ${y - 18} l-11 24 h22 Z`} />
            ))}
          </g>
          {showRoutes && (
            <g
              className="m2-process-routes"
              fill="none"
              strokeWidth="3"
              strokeDasharray="5 10"
              strokeLinecap="round"
            >
              <path d="M337 281 Q427 158 582 215" stroke="#658a6a" />
              <path d="M631 256 Q726 350 565 500" stroke="#b28c46" />
              <path d="M560 544 Q667 552 800 447 L973 369" stroke="#ac8847" />
              <path d="M1072 414 L1250 570" stroke="#ac8847" />
            </g>
          )}
          <g className="m2-haul-truck" visibility={minute >= 60 ? "visible" : "hidden"}>
            <Truck scale={0.58} />
            <animateMotion
              dur="22s"
              repeatCount="indefinite"
              path="M585 529 Q650 548 784 457 L921 374"
            />
          </g>
          <Truck x={449} y={584} scale={0.7} />
          <text
            x="739"
            y="410"
            className="m2-terrain-label"
            transform="rotate(-32 739 410)"
          >
            ACARREO → CHANCADO
          </text>
          <g className="m2-region-label">
            <text x="255" y="93">
              TAJO ABIERTO
            </text>
            <text x="1154" y="237">
              PLANTA CONCENTRADORA
            </text>
          </g>
          </g>}
          {[...positioned].sort((a,b)=>Number(a.id===selected)-Number(b.id===selected)).map((s) => {
            const state = STATES[stageState(s)];
            const offsets={drill:[-110,-74],blast:[104,70],load:[0,68],crush:[0,-76],grind:[-82,66]};
            const [lx,ly]=offsets[s.id];
            return (
              <g
                key={s.id}
                transform={`translate(${s.x} ${s.y})`}
                data-stage={s.id}
                role="button"
                tabIndex="0"
                aria-label={`${s.name}: ${state.label}`}
                className={`m2-stage ${selected === s.id ? "selected" : ""}`}
                onPointerEnter={() => setHover(s.id)}
                onPointerLeave={() => setHover(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelect(s.id);
                  }
                }}
              >
                <title>
                  {s.name} · {state.label} · {alertMetric(s).name}: {format(alertMetric(s).actual)} {alertMetric(s).unit} · Seleccionar para ver KPIs
                </title>
                <g transform={terrain ? `scale(${1/view.z})` : undefined}>
                <ellipse
                  cy={terrain ? "0" : "34"}
                  rx={terrain ? "30" : "99"}
                  ry={terrain ? "30" : "45"}
                  fill={selected === s.id ? "#f2d494" : "#435b44"}
                  opacity={selected === s.id ? ".55" : ".1"}
                  stroke={selected === s.id ? "#9b7537" : "none"}
                  strokeWidth="2"
                />
                <rect
                  x="-108"
                  y="-113"
                  width="230"
                  height="232"
                  fill="transparent"
                />
                {terrain ? (<g><circle r="17" fill="#142e25" stroke={state.color} strokeWidth="4"/><text textAnchor="middle" y="5" fill="#fff3d3" fontSize="14" fontWeight="700">{s.number}</text></g>) : s.id === "drill" ? (
                  <Drill />
                ) : s.id === "load" ? (
                  <Loader />
                ) : s.id === "crush" ? (
                  <Crusher />
                ) : s.id === "grind" ? (
                  <Mill />
                ) : (
                  <g>
                    <path
                      d="M-77 -23 L-7 -59 L86 -11 L17 30 Z"
                      fill="url(#m2-hatch)"
                      stroke="#b2904f"
                      strokeWidth="2"
                      strokeDasharray="6 5"
                    />
                    {Array.from({ length: 16 }, (_, i) => {
                      const col = i % 4,
                        row = Math.floor(i / 4);
                      return (
                        <circle
                          key={i}
                          cx={-41 + col * 22 + row * 12}
                          cy={-19 + col * 9 - row * 10}
                          r="3.6"
                          fill="#716c42"
                        />
                      );
                    })}
                    <path
                      d="M-73 -20 V-47 M78 -10 V-37"
                      stroke="#b08343"
                      strokeWidth="3"
                    />
                    <path
                      d="M-73 -47 l20 7 -20 7 M78 -37 l20 7 -20 7"
                      fill="#d0a255"
                    />
                    <text
                      x="6"
                      y="51"
                      textAnchor="middle"
                      className="m2-block-label"
                    >
                      {minute < 30 ? "BLOQUE EN PREPARACIÓN / B-12" : "BLOQUE LIBERADO / B-12"}
                    </text>
                  </g>
                )}
                {terrain && <path d={`M0 0L${lx} ${ly}`} stroke="#f0dcab" strokeWidth="2" pointerEvents="none"/>}
                <g transform={terrain ? `translate(${lx} ${ly})` : "translate(0 94)"}>
                  <rect
                    x="-112"
                    y="-17"
                    width="224"
                    height="55"
                    rx="7"
                    fill={selected === s.id ? "#172b26" : "#f7f8ef"}
                    stroke={selected === s.id ? "#172b26" : "#b9c5ae"}
                    strokeWidth="1.5"
                  />
                  <circle cx="-72" cy="-1" r="4" fill={state.color} />
                  <text
                    x="-60"
                    y="3"
                    className="m2-node-title"
                    fill={selected === s.id ? "#f1f3e9" : "#263e33"}
                  >
                    {s.number} / {s.name}
                  </text>
                  <text
                    x="-60"
                    y="20"
                    className="m2-node-sub"
                    fill={selected === s.id ? "#b7c4b5" : "#6a7e68"}
                  >
                    {format(alertMetric(s).actual)} {alertMetric(s).unit} · {alertMetric(s).name.startsWith("Disponibilidad")?"Disponibilidad":state.label}
                  </text>
                </g>
                </g>
              </g>
            );
          })}
          <path
            d="M1420 619 L1484 646"
            fill="none"
            stroke="#668772"
            strokeWidth="3"
            strokeDasharray="4 8"
          />
          <text x="1383" y="713" className="m2-terrain-label">
            A PROCESAMIENTO →
          </text>
        </g>
      </svg>
      <div className="m2-compass" aria-hidden="true">
        <span>N</span>
        <i />S
      </div>
      <div className="m2-map-controls">
        <button onClick={() => zoomAt(1.2)} aria-label="Acercar mapa">
          <Plus size={18} />
        </button>
        <span>{Math.round(view.z * 100)}%</span>
        <button onClick={() => zoomAt(1 / 1.2)} aria-label="Alejar mapa">
          <Minus size={18} />
        </button>
        <hr />
        <button
          onClick={reset}
          aria-label="Ver mapa completo"
          title="Ver mapa completo"
        >
          <Maximize size={17} />
        </button>
      </div>
      <div className="m2-map-instructions">
        <Hand size={14} />
        <span>Arrastra para explorar · Rueda para acercar</span>
      </div>
      <button
        className={`m2-route-toggle ${showRoutes ? "on" : ""}`}
        onClick={() => setShowRoutes((v) => !v)}
        aria-pressed={showRoutes}
      >
        <MapIcon size={14} /> Flujo de valor
      </button>
      {hover && (
        <div className="m2-map-tooltip" role="status">
          {STAGES.find((s) => s.id === hover).zone}
        </div>
      )}
    </div>
  );
});
export default MineMap;
