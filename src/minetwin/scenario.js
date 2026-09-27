// All values and thresholds are invented for this demonstration.
// Reference images provide spatial inspiration only; no operational data was copied.
export const STATES = {
  pending: {label:"Pendiente",color:"#a5b2b9"},
  normal: { label: "En rango", color: "#5fae85" },
  warning: { label: "Atención", color: "#e0a34d" },
  critical: { label: "Fuera de rango", color: "#da7767" },
};
export const STAGES = [
  {
    id: "drill",
    number: "01",
    name: "Perforación",
    asset: "PER-01",
    zone: "Banco norte · Cota 3,840",
    x: 300,
    y: 275,
    summary: "Avance de perforación alineado con el plan sintético del turno.",
    context:
      "Prepara los taladros del siguiente bloque. Los metros de avance y la productividad se leen sobre ventanas distintas.",
    next: "Voladura",
    action:
      "Confirmar el avance del bloque y registrar las condiciones del frente.",
    metrics: [
      {
        name: "Metros perforados",
        unit: "m",
        actual: 860,
        target: 900,
        direction: "up",
        window: "Acumulado · 6 h",
        warn: 0.9,
        critical: 0.8,
        series: [120, 255, 402, 550, 710, 860],
      },
      {
        name: "Productividad",
        unit: "m/h",
        actual: 31.5,
        target: 30,
        direction: "up",
        window: "Última hora",
        warn: 0.95,
        critical: 0.85,
      },
      {
        name: "Disponibilidad",
        unit: "%",
        actual: 92,
        target: 90,
        direction: "up",
        window: "Últimas 24 h",
        warn: 0.95,
        critical: 0.85,
      },
    ],
  },
  {
    id: "blast",
    number: "02",
    name: "Voladura",
    asset: "VOL-02",
    zone: "Bloque B-12 · Liberado",
    x: 620,
    y: 215,
    summary: "Fragmentación por encima del objetivo del escenario.",
    context:
      "Etapa por eventos. Los indicadores corresponden al último bloque liberado, no a una lectura continua. No se representa una detonación activa.",
    next: "Carguío",
    action:
      "Revisar el reporte de fragmentación y contrastarlo con las condiciones observadas durante el carguío.",
    metrics: [
      {
        name: "Mineral liberado",
        unit: "t",
        actual: 64500,
        target: 68000,
        direction: "up",
        window: "Último bloque",
        warn: 0.9,
        critical: 0.8,
      },
      {
        name: "Fragmentación P80",
        unit: "mm",
        actual: 245,
        target: 220,
        direction: "down",
        window: "Último bloque · estimado",
        warn: 1.05,
        critical: 1.2,
        series: [210, 215, 219, 231, 237, 245],
      },
      {
        name: "Sobretamaño",
        unit: "%",
        actual: 7.2,
        target: 5,
        direction: "down",
        window: "Último bloque · estimado",
        warn: 1.1,
        critical: 1.6,
      },
    ],
  },
  {
    id: "load",
    number: "03",
    name: "Carguío",
    asset: "PAL-03",
    zone: "Frente este · Acarreo a planta",
    x: 520,
    y: 535,
    summary: "Tiempo de carguío por encima de la meta sintética.",
    context:
      "El carguío abastece el acarreo hacia chancado. La animación muestra la conexión logística; no representa posiciones GPS ni tiempos reales.",
    next: "Chancado",
    action:
      "Revisar tiempos de espera, disponibilidad de camiones y condiciones del material en el frente.",
    metrics: [
      {
        name: "Mineral cargado",
        unit: "t",
        actual: 18400,
        target: 20000,
        direction: "up",
        window: "Acumulado · 6 h",
        warn: 0.95,
        critical: 0.8,
      },
      {
        name: "Tiempo de carguío",
        unit: "min/camión",
        actual: 5.8,
        target: 5,
        direction: "down",
        window: "Promedio · última hora",
        warn: 1.05,
        critical: 1.25,
        series: [4.9, 5.1, 5.3, 5.4, 5.7, 5.8],
      },
      {
        name: "Disponibilidad pala",
        unit: "%",
        actual: 91,
        target: 90,
        direction: "up",
        window: "Últimas 24 h",
        warn: 0.95,
        critical: 0.85,
      },
    ],
  },
  {
    id: "crush",
    number: "04",
    name: "Chancado",
    asset: "CH-01",
    zone: "Planta · Chancado primario",
    x: 1040,
    y: 365,
    summary: "Tasa de tratamiento por debajo de la meta del escenario.",
    context:
      "El acopio intermedio desacopla la mina de la planta. Las desviaciones de etapas distintas no prueban causalidad ni un balance de masa.",
    next: "Molienda",
    action:
      "Contrastar alimentación, colas de descarga y disponibilidad del circuito con la referencia del turno.",
    metrics: [
      {
        name: "Tratamiento",
        unit: "t/h",
        actual: 2320,
        target: 2500,
        direction: "up",
        window: "Media · últimos 15 min",
        warn: 0.95,
        critical: 0.85,
        series: [2510, 2470, 2440, 2400, 2350, 2320],
      },
      {
        name: "Disponibilidad",
        unit: "%",
        actual: 94,
        target: 92,
        direction: "up",
        window: "Últimas 24 h",
        warn: 0.95,
        critical: 0.85,
      },
      {
        name: "Producto P80",
        unit: "mm",
        actual: 140,
        target: 150,
        direction: "down",
        window: "Último muestreo simulado",
        warn: 1.05,
        critical: 1.2,
      },
    ],
  },
  {
    id: "grind",
    number: "05",
    name: "Molienda",
    asset: "SAG-01",
    zone: "Planta · Circuito SAG",
    x: 1290,
    y: 590,
    summary: "Tratamiento y consumo específico fuera de la meta demo.",
    context:
      "Las señales coinciden con desviaciones en etapas anteriores. Se requiere revisión operacional para establecer si existe una relación causal.",
    next: "Procesamiento posterior",
    action:
      "Revisar alimentación, dureza y granulometría del mineral; contrastar carga y condición del circuito con Operaciones.",
    metrics: [
      {
        name: "Tratamiento",
        unit: "t/h",
        actual: 2140,
        target: 2336,
        direction: "up",
        window: "Media · últimos 15 min",
        warn: 0.97,
        critical: 0.92,
        series: [2336, 2310, 2275, 2218, 2170, 2140],
      },
      {
        name: "Energía específica SAG",
        unit: "kWh/t",
        actual: 8.6,
        target: 8,
        direction: "down",
        window: "Media · últimos 15 min",
        warn: 1.05,
        critical: 1.15,
      },
      {
        name: "Disponibilidad",
        unit: "%",
        actual: 91,
        target: 92,
        direction: "up",
        window: "Últimas 24 h",
        warn: 0.95,
        critical: 0.85,
      },
    ],
  },
];
export const metricState = (m) => m.pending ? "pending" :
  m.direction === "up"
    ? m.actual / m.target < m.critical
      ? "critical"
      : m.actual / m.target < m.warn
        ? "warning"
        : "normal"
    : m.actual / m.target > m.critical
      ? "critical"
      : m.actual / m.target > m.warn
        ? "warning"
        : "normal";
export const stageState = (stage) => stage.metrics.every(m=>m.pending) ? "pending" :
  stage.metrics.some((m) => metricState(m) === "critical")
    ? "critical"
    : stage.metrics.some((m) => metricState(m) === "warning")
      ? "warning"
      : "normal";
export const format = (value) =>
  value.toLocaleString("es-PE", { maximumFractionDigits: 1 });

// Deterministic teaching model. Minutes 0..360 correspond to 06:00..12:00.
export const clock = t => `${String(6 + Math.floor(t / 60)).padStart(2,'0')}:${String(t % 60).padStart(2,'0')}`;
export const EVENTS = [
 {t:0, stage:'drill', text:'B-13 en perforación; B-11 ya disponible en acopio.'},
 {t:30, stage:'blast', text:'B-12 liberado: P80 sintético de 245 mm (referencia 220).'},
 {t:60, stage:'load', text:'Comienza el carguío de B-12; transporte conceptual de 30 min.'},
 {t:90, stage:'crush', text:'B-12 llega a chancado; tratamiento comienza a disminuir.'},
 {t:120, stage:'load', text:'PAL-03 detenida; capacidad de carguío disminuye 450 t/h.'},
 {t:180, stage:'grind', text:'B-12 alcanza alimentación SAG tras permanencia simplificada en acopio.'},
 {t:240, stage:'load', text:'PAL-03 vuelve a operar por evento programado del escenario.'},
];
const ramp=(t,a,b)=>Math.max(0,Math.min(1,(t-a)/(b-a)));
export function rates(t) {
 return { input:2500-(t>=120&&t<240?450:0), crush:2500-180*ramp(t,90,150), grind:2336-196*ramp(t,180,240) };
}
export function snapshot(t) {
 const q=rates(t); let inventory=1800, deficit=0;
 for(let m=0;m<t;m++){const a=rates(m);inventory+=(Math.min(a.input,a.crush)-a.grind)/60;deficit+=(2336-a.grind)/60;}
 const stages=STAGES.map(s=>({...s,metrics:s.metrics.map(m=>({...m}))}));
 for(const s of stages){
  s.metrics.forEach(m=>{if(m.name.startsWith('Disponibilidad')){m.name='Disponibilidad de equipos';m.actual=equipment(s.id,t).reduce((sum,e)=>sum+e.availability,0)/equipment(s.id,t).length;m.window='Turno transcurrido · equipos';}});
  if(s.id==='drill'){s.metrics[0].actual=Math.round(t/360*860);s.metrics[0].target=Math.max(1,Math.round(t/360*900));s.metrics[0].window='Acumulado desde 06:00';}
  if(s.id==='blast'){s.metrics.forEach(m=>{m.pending=t<30; m.window=t<30?'Bloque en preparación · sin resultado':'Último bloque liberado';});s.metrics[0].actual=t<30?0:64500;s.metrics[1].actual=t<30?215:245;s.metrics[2].actual=t<30?4:7.2;}
  if(s.id==='load'){s.metrics[0]={...s.metrics[0],name:'Capacidad de carguío',actual:q.input,target:2500,unit:'t/h',window:'Capacidad instantánea simplificada'};s.metrics[1].actual=t>=120&&t<240?5.8:4.9;}
  if(s.id==='crush')s.metrics[0].actual=Math.round(Math.min(q.input,q.crush));
  if(s.id==='grind'){s.metrics[0].actual=Math.round(q.grind);s.metrics[1].actual=+(8+0.6*ramp(t,180,240)).toFixed(2);}
  s.metrics.forEach(m=>{delete m.series;if(s.id==='crush'||s.id==='grind')if(m.window.includes('15'))m.window='Corte instantáneo del modelo';});
 }
 return {stages,inventory,deficit,...q};
}
export function equipment(stage,t){
 const names={drill:['PER-01','PER-02'],blast:['UCE-01','UCE-02'],load:['PAL-01','PAL-02','PAL-03','CAR-01'],crush:['CH-01','ALI-01','FAJ-01'],grind:['SAG-01','BM-01','P-01']};
 return names[stage].map((id,i)=>{const failed=id==='PAL-03'&&t>=120&&t<240;const waiting=(stage==='blast'||id==='CAR-01');const maintenance=id==='PER-02';const down=id==='PAL-03'?Math.max(0,Math.min(t,240)-120):maintenance?t:0;const available=Math.max(0,t-down);return {id,state:failed?'Detenido por falla':maintenance?'Mantenimiento programado':waiting?'Disponible en espera':'Operando',availability:t?100*available/t:maintenance?0:100,utilization:waiting||maintenance?0:90,down,reason:failed?'Evento hidráulico simulado':maintenance?'Servicio planificado del turno':waiting?'Sin asignación en este corte':'Producción en curso',capacity:id==='PAL-03'?450:null};});
}
export function compare(t,hours,recovery){const s=snapshot(t),gap=2336-s.grind;return {base:s.grind*hours,alternative:s.grind*hours+gap*recovery/100*Math.max(0,hours-.5),gain:gap*recovery/100*Math.max(0,hours-.5)};}

export function alertMetric(stage) {
 return stage.metrics.find(m=>metricState(m)==='critical') || stage.metrics.find(m=>metricState(m)==='warning') || stage.metrics[0];
}
export function lotState(t) {return t<30?'En preparación':t<60?'Liberado · pendiente de carguío':t<90?'En carguío y transporte':t<180?'En chancado y acopio':'Alimentando molienda';}
export function fleetSummary(id,t) {
 const f=equipment(id,t), count=state=>f.filter(e=>e.state===state).length;
 return `${count('Operando')} operando · ${count('Disponible en espera')} en espera · ${count('Detenido por falla')} en falla · ${count('Mantenimiento programado')} en mantenimiento`;
}
