import{d as qt,r as v,g as K,f as Vt,h as Pt,o as c,c as d,a as r,t as s,j as D,i as ht,B as Rt,F as T,k as X,m as G,x as Wt,z as Ht,C as Ot,D as Qt,T as jt,J as Ut,y as C,w as Kt,n as Xt,u as Gt}from"./index-0CYka73g.js";import{u as Jt,e as Yt}from"./useInventoryWorkbookSource-Dz3ZuJb6.js";import{g as Zt}from"./businessDataStore-BwGRYbGU.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";function ee(g){return String(g??"").replace(/\s+/g," ").trim()}function ae(g){let u=ee(g);return u?(u=u.replace(/^(PET瓶|HDPE瓶|PP瓶|PET|HDPE|TP|PP|PC|PE|瓶)/i,""),u=u.replace(/[（(].*$/,""),u=u.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),u.trim()):""}function re(g){const u=new Map;return g.forEach(y=>{if(!y.materialCode)return;const A=y.flavor||ae(y.blendingName);if(!A)return;const h=u.get(y.materialCode)||[],p={flavor:A,blendingName:y.blendingName};h.some(S=>S.flavor===p.flavor&&S.blendingName===p.blendingName)||h.push(p),u.set(y.materialCode,h)}),u}function ne(){return Zt("bom")}function ie(g){return g?{fileName:g.fileName,updatedAt:g.updatedAt,rowCount:g.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const oe={class:"page-container expiry-dashboard-page"},se={class:"dashboard-frame-shell"},le={key:0,class:"frame-loading"},ce=["src","title"],de={key:0,class:"flavor-warning-panel"},ue={key:0,class:"flavor-warning-empty"},pe={class:"flavor-warning-heading"},me={key:0,class:"flavor-warning-meta"},he={key:0,class:"flavor-warning-empty"},be={key:1,class:"flavor-warning-table-wrap"},fe={class:"flavor-warning-table"},ge={class:"flavor-material-cell"},ye={class:"number-cell"},ve={class:"number-cell"},xe={class:"flavor-cell"},ke={key:0,class:"flavor-empty"},we=["title"],De={class:"detail-dialog-header"},Se={class:"detail-dialog-summary"},Ee={class:"detail-dialog-table-wrap"},_e={class:"detail-dialog-table"},Ce={class:"code-cell"},Ae={class:"material-cell"},Fe={class:"code-cell"},Be={class:"number-cell"},Le={class:"number-cell"},Ne={class:"number-cell"},Te={key:0},bt="chart-detail-dialog-title",J=1.1,ze=`
  :root {
    --surface-page: transparent;
    --surface-card: rgba(255, 255, 255, 0.80);
    --surface-1: rgba(246, 249, 249, 0.78);
    --text-primary: #15252d;
    --text-secondary: #62727b;
    --text-muted: #91a0a7;
    --gridline: rgba(35, 66, 78, 0.10);
    --border: rgba(255, 255, 255, 0.90);
    --shadow: 0 9px 28px rgba(32, 62, 72, 0.055);
    --status-critical: #c45f4e;
    --status-serious: #d18760;
    --status-warning: #d09a43;
    --status-good: #2a7f78;
    --cat-blue: #3d7893;
    --cat-aqua: #2a7f78;
    --cat-yellow: #d09a43;
    --cat-green: #6b9f98;
    --cat-violet: #81728f;
    --cat-red: #c45f4e;
    --cat-magenta: #a7788c;
    --cat-orange: #c87846;
    --cat-gray: #9aa8ad;
    --radius: 16px;
    --radius-sm: 10px;
  }

  body,
  .dashboard {
    background: transparent !important;
  }

  html,
  body {
    min-height: 0 !important;
    overflow: hidden !important;
  }

  .dashboard {
    width: 100% !important;
    max-width: none !important;
    padding: 0 !important;
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 16px;
    align-items: start;
  }

  .dashboard > .header,
  .dashboard > .upload-hint,
  .dashboard > .kpi-row,
  .dashboard > .charts-row,
  .dashboard > .rank-row,
  .dashboard > .traffic-light-row,
  .dashboard > .card,
  .dashboard > .system-batch-pagination,
  .dashboard > .footer-note {
    grid-column: 1 / -1;
    margin: 0 !important;
  }

  .dashboard > .system-pagination-hidden {
    display: none !important;
  }

  .header {
    padding-bottom: 4px;
  }

  .filters {
    align-items: flex-end !important;
  }

  .upload-hint {
    padding: 13px 15px;
    border: 1px solid rgba(255, 255, 255, 0.88);
    border-left: 3px solid #2a7f78;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.64);
    box-shadow: 0 7px 22px rgba(32, 62, 72, 0.04);
    line-height: 1.7;
  }

  .system-batch-pagination {
    display: flex;
    min-width: 0;
    min-height: 54px;
    align-items: stretch;
    justify-content: space-between;
    gap: 18px;
    padding: 0 10px 0 14px;
    overflow: hidden;
    border: 1px solid rgba(35, 66, 78, 0.10);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 0 6px 20px rgba(32, 62, 72, 0.045);
    backdrop-filter: blur(14px);
  }

  .system-batch-tab-list {
    display: flex;
    min-width: 0;
    align-items: stretch;
    gap: 26px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .system-batch-tab-list::-webkit-scrollbar {
    display: none;
  }

  .system-batch-tab-list button {
    position: relative;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 8px;
    padding: 0 2px;
    border: 0;
    background: transparent;
    color: #62727b;
    font: inherit;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }

  .system-batch-tab-list button span {
    color: #9aa8ad;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.08em;
  }

  .system-batch-tab-list button::after {
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 3px;
    background: #2a7f78;
    content: "";
    opacity: 0;
    transform: scaleX(0.45);
    transition: opacity 160ms ease, transform 160ms ease;
  }

  .system-batch-tab-list button:hover {
    color: #15252d;
  }

  .system-batch-tab-list button.active {
    color: #164f4a;
  }

  .system-batch-tab-list button.active span {
    color: #2a7f78;
  }

  .system-batch-tab-list button.active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  .system-batch-tab-list button:focus-visible,
  .system-batch-page-controls button:focus-visible {
    outline: 2px solid rgba(42, 127, 120, 0.48);
    outline-offset: 2px;
  }

  .system-batch-page-controls {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 6px;
  }

  .system-batch-page-controls > span {
    margin-right: 4px;
    color: #91a0a7;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.08em;
  }

  .system-batch-page-controls button {
    width: 31px;
    height: 31px;
    padding: 0;
    border: 1px solid rgba(35, 66, 78, 0.12);
    border-radius: 7px;
    background: rgba(246, 249, 249, 0.82);
    color: #164f4a;
    font: 500 18px/1 Arial, sans-serif;
    cursor: pointer;
  }

  .system-batch-page-controls button:disabled {
    color: #c3cccf;
    cursor: not-allowed;
  }

  .system-batch-page-controls button:not(:disabled):hover {
    border-color: #2a7f78;
    color: #2a7f78;
  }

  .kpi-row,
  .charts-row,
  .rank-row {
    display: grid !important;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    gap: 16px !important;
  }

  .kpi-row > .kpi-card {
    min-height: 132px;
  }

  .kpi-row > .kpi-card:nth-child(1),
  .kpi-row > .kpi-card:nth-child(2) {
    grid-column: span 3;
  }

  .kpi-row > .kpi-card:nth-child(3),
  .kpi-row > .kpi-card:nth-child(4),
  .kpi-row > .kpi-card:nth-child(5) {
    grid-column: span 2;
  }

  .kpi-row > .kpi-card:nth-child(6),
  .kpi-row > .kpi-card:nth-child(7) {
    grid-column: span 3;
  }

  .kpi-row > .kpi-card:nth-child(8) {
    grid-column: span 6;
    border-color: transparent !important;
    background: linear-gradient(145deg, #164f4a, #26736c) !important;
    box-shadow: 0 15px 34px rgba(22, 79, 74, 0.16) !important;
  }

  .kpi-row > .kpi-card:nth-child(8) .kpi-header,
  .kpi-row > .kpi-card:nth-child(8) .kpi-value,
  .kpi-row > .kpi-card:nth-child(8) .kpi-unit,
  .kpi-row > .kpi-card:nth-child(8) .kpi-delta,
  .kpi-row > .kpi-card:nth-child(8) .delta-na {
    color: #fff !important;
  }

  .charts-row > .card:nth-child(1) {
    grid-column: span 7;
  }

  .charts-row > .card:nth-child(2) {
    grid-column: span 5;
  }

  .charts-row > .card:nth-child(3) {
    grid-column: 1 / -1;
  }

  .rank-row > .card:nth-child(1) {
    grid-column: span 7;
  }

  .rank-row > .card:nth-child(2) {
    grid-column: span 5;
  }

  .rank-row > .card:nth-child(3) {
    grid-column: 1 / -1;
  }

  .card,
  .kpi-card {
    min-width: 0;
    border-color: rgba(255, 255, 255, 0.90) !important;
    background: rgba(255, 255, 255, 0.78) !important;
    box-shadow:
      0 9px 28px rgba(32, 62, 72, 0.055),
      inset 0 0 0 1px rgba(35, 66, 78, 0.045) !important;
    backdrop-filter: blur(14px) saturate(118%);
  }

  .traffic-card {
    padding: 0 !important;
  }

  .chart-box {
    height: 320px !important;
  }

  .drillable-chart {
    cursor: pointer;
  }

  .drill-hint {
    margin-left: auto;
    padding-left: 12px;
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
  }

  .batch-detail-scroll {
    max-height: 520px;
    overflow: auto;
    overscroll-behavior: contain;
  }

  .batch-detail-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .batch-detail-scroll::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(69, 101, 111, 0.24);
  }

  .brand-icon,
  .btn-primary {
    border-color: #164f4a !important;
    border-radius: 10px !important;
    background: linear-gradient(135deg, #164f4a, #26736c) !important;
    box-shadow: 0 8px 18px rgba(22, 79, 74, 0.14) !important;
  }

  .btn,
  input,
  select {
    border-color: rgba(35, 66, 78, 0.12) !important;
    border-radius: 10px !important;
    background: rgba(255, 255, 255, 0.76) !important;
    box-shadow: none !important;
  }

  @media (max-width: 1100px) {
    .kpi-row > .kpi-card {
      grid-column: span 4 !important;
    }

    .kpi-row > .kpi-card:nth-child(7),
    .kpi-row > .kpi-card:nth-child(8) {
      grid-column: span 6 !important;
    }

    .charts-row > .card,
    .rank-row > .card {
      grid-column: 1 / -1 !important;
    }
  }

  @media (max-width: 680px) {
    .dashboard {
      gap: 12px;
    }

    .kpi-row,
    .charts-row,
    .rank-row {
      gap: 12px !important;
    }

    .kpi-row > .kpi-card {
      grid-column: span 6 !important;
    }

    .kpi-row > .kpi-card:nth-child(8) {
      grid-column: 1 / -1 !important;
    }

    .card,
    .kpi-card {
      padding: 14px !important;
    }

    .chart-box {
      height: 280px !important;
    }

    .system-batch-pagination {
      gap: 10px;
      padding-left: 12px;
    }

    .system-batch-tab-list {
      gap: 18px;
    }

    .system-batch-tab-list button {
      font-size: 13px;
    }

    .system-batch-page-controls > span {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .system-batch-tab-list button::after {
      transition: none;
    }
  }
`,Me=qt({__name:"index",setup(g){const u=v(!0),y=v(),A=v(900),h=v("risk"),p=v(null),R=v(),S=v(0),W=Ut();Gt();function H(t){return t==="material"?"material":"raw"}const z=v(H(W.params.type)),F=C(()=>z.value==="raw"?"原料":"物料"),B=v(null),ft=C(()=>ie(B.value)),Y=C(()=>{var t;return re(((t=B.value)==null?void 0:t.records)||[])}),M=v([]);function gt(t){return Y.value.get(t)||[]}async function yt(){try{B.value=await ne()}catch{B.value=null}}function Z(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function vt(t){const e=Z(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function xt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function kt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const $=C(()=>{if(!B.value||!Y.value.size)return[];const t=new Set,e=[];for(const a of M.value){if(a.remDays===null||a.remDays>90)continue;const n=gt(a.mat);if(n.length===0)continue;const i=`${a.mat}-${a.batch}`;t.has(i)||(t.add(i),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:n,state:Z(a.remDays)}))}return e.sort((a,n)=>{const i=a.remDays??9999,o=n.remDays??9999;return i-o||n.endAmt-a.endAmt})}),E=C(()=>{const t=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"}];return z.value==="raw"&&t.push({id:"flavorWarning",label:"临期物料耗用预警"}),t}),tt=C(()=>E.value.findIndex(t=>t.id===h.value));let x,k,L,O,Q="";const j=[],{sourceUrl:et,initialize:wt,setMaterialType:Dt,dispose:St}=Jt({initialMaterialType:H(W.params.type)}),Et={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function at(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function rt(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function _t(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function _(){var t;return(t=y.value)==null?void 0:t.contentWindow}function nt(t){return t<=0?t:Math.max(Math.round(t*J),Math.ceil(t+1))}function it(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${nt(Number(a))}px`)}function ot(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const n=e.style;n.fontSize&&(n.fontSize=it(n.fontSize))}const a=e.cssRules;a&&ot(a)})}function Ct(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(J)&&(Array.from(t.styleSheets).forEach(a=>{try{ot(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=it(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(J))}function I(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return nt(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const i=[];return a.set(t,i),t.forEach(o=>i.push(I(o,"",a))),i}const n={};return a.set(t,n),Object.entries(t).forEach(([i,o])=>{n[i]=I(o,i,a)}),n}function st(t){var n;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(i,...o)=>{e(I(i),...o)},t.__systemFontScaleApplied=!0;const a=(n=t.getOption)==null?void 0:n.call(t);a&&e(I(a))}function lt(t){var a;const e=(a=_())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const n=e.init.bind(e);e.init=(...i)=>{const o=n(...i);return st(o),o},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(n=>{const i=e.getInstanceByDom(n);i&&st(i)})}}function ct(){const t=_();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function At(t,e,a){const n=[...a].sort((i,o)=>i.remDays===null?1:o.remDays===null?-1:i.remDays-o.remDays);p.value={title:t,description:e,rows:n,totalQuantity:n.reduce((i,o)=>i+(o.endQty||0),0),totalAmount:n.reduce((i,o)=>i+(o.endAmt||0),0)},Xt(()=>{var i;return(i=R.value)==null?void 0:i.focus()})}function U(){p.value=null}function q(t,e,a,n){var f,w,P;const i=t.getElementById(e),o=i&&((w=(f=_())==null?void 0:f.echarts)==null?void 0:w.getInstanceByDom(i));if(!i||!o)return;i.classList.add("drillable-chart");const l=(P=i.closest(".card"))==null?void 0:P.querySelector(".card-title");if(l&&!l.querySelector(".drill-hint")){const b=t.createElement("span");b.className="drill-hint",b.textContent="点击图形查看明细",l.appendChild(b)}const m=b=>{const N=n(b,ct());At(a,N.description,N.rows)};o.on("click",m),j.push(()=>o.off("click",m))}function Ft(t){j.splice(0).forEach(e=>e()),q(t,"chart-expiry","效期区间批次明细",(e,a)=>{const n=Et[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(n)}}),q(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(n=>n.category===e.name&&n.consume===0)})),q(t,"chart-category","品类风险批次明细",(e,a)=>{var o;const n=_();let i="";try{const l=n==null?void 0:n.eval("computeCategory(getView())");i=((o=l==null?void 0:l[e.dataIndex])==null?void 0:o.category)??""}catch{i=e.name.split(" ")[0]}return{description:`品类：${i} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(l=>l.category===i&&l.remDays!==null&&l.remDays<=90)}}),q(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(n=>n.supplier===e.name&&n.remDays!==null&&n.remDays<=90)}))}const Bt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"],flavorWarning:[]},Lt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function V(){L&&(window.clearTimeout(O),O=window.setTimeout(()=>{if(!L)return;const t=h.value==="flavorWarning"?60:900;A.value=Math.max(t,Math.ceil(L.scrollHeight)+2)},40))}function Nt(t){var a;const e=(a=_())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(n=>{var i,o;n.offsetParent!==null&&((o=(i=e.getInstanceByDom(n))==null?void 0:i.resize)==null||o.call(i))})}function Tt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const n=t.createElement("nav");n.className="system-batch-pagination",n.setAttribute("aria-label","批次与效期预警页面");const i=t.createElement("div");i.className="system-batch-tab-list",i.setAttribute("role","tablist"),E.value.forEach((w,P)=>{const b=t.createElement("button"),N=t.createElement("span");b.id=`embedded-batch-tab-${w.id}`,b.type="button",b.dataset.dashboardView=w.id,b.setAttribute("role","tab"),b.setAttribute("aria-controls",e.id),N.textContent=String(P+1).padStart(2,"0"),b.append(N,t.createTextNode(w.label)),b.addEventListener("click",()=>ut(w.id)),i.appendChild(b)});const o=t.createElement("div");o.className="system-batch-page-controls";const l=t.createElement("span");l.dataset.pageStatus="true";const m=t.createElement("button");m.type="button",m.dataset.pageDirection="previous",m.setAttribute("aria-label","上一页"),m.textContent="←",m.addEventListener("click",()=>pt(-1));const f=t.createElement("button");return f.type="button",f.dataset.pageDirection="next",f.setAttribute("aria-label","下一页"),f.textContent="→",f.addEventListener("click",()=>pt(1)),o.append(l,m,f),n.append(i,o),n}function zt(t,e){const a=e.querySelector(":scope > .kpi-row"),n=e.querySelector(":scope > .header"),i=e.querySelector(":scope > .upload-hint"),o=Tt(t,e);let l=null;a&&(e.insertBefore(a,e.firstElementChild),l=a),[n,i,o].forEach(m=>{m&&(l?l.after(m):e.insertBefore(m,e.firstElementChild),l=m)})}function Mt(t){const e=tt.value;t.querySelectorAll("[data-dashboard-view]").forEach(o=>{const l=o.dataset.dashboardView===h.value;o.classList.toggle("active",l),o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(E.value.length).padStart(2,"0")}`);const n=t.querySelector('[data-page-direction="previous"]'),i=t.querySelector('[data-page-direction="next"]');n&&(n.disabled=e===0),i&&(i.disabled=e===E.value.length-1)}function dt(t){t.querySelectorAll(Lt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),Bt[h.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=h.value,Mt(t),requestAnimationFrame(()=>{Nt(t),V()})}function ut(t){var a;if(h.value===t)return;h.value=t;const e=(a=y.value)==null?void 0:a.contentDocument;e&&dt(e)}function pt(t){const e=tt.value+t,a=E.value[e];a&&ut(a.id)}function $t(){var i,o,l,m;u.value=!1;const t=ct();S.value=t.length,M.value=t,Yt(M.value);const e=(i=y.value)==null?void 0:i.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const f=e.createElement("style");f.id="system-minimal-theme",f.textContent=ze,e.head.appendChild(f)}Ct(e),lt(e),(l=(o=_())==null?void 0:o.renderAll)==null||l.call(o),lt(e),Ft(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(m=a==null?void 0:a.lastElementChild)==null||m.classList.add("batch-detail-scroll");const n=e.querySelector(".dashboard");n&&(L=n,zt(e,n),dt(e),x==null||x.disconnect(),k==null||k.disconnect(),x=new ResizeObserver(V),k=new MutationObserver(V),x.observe(n),k.observe(n,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(V))}function It(){u.value=!1,S.value=0,M.value=[]}function mt(t){t.key==="Escape"&&p.value&&U()}return K(p,t=>{t?(Q=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=Q}),K(()=>W.params.type,t=>{const e=H(t);z.value!==e&&(z.value=e,u.value=!0,S.value=0,p.value=null,Dt(e))}),K(E,t=>{t.some(e=>e.id===h.value)||(h.value="risk")}),Vt(()=>{wt(),yt(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",mt)}),Pt(()=>{St(),j.splice(0).forEach(t=>t()),x==null||x.disconnect(),k==null||k.disconnect(),L=void 0,window.clearTimeout(O),window.removeEventListener("keydown",mt),document.body.style.overflow=Q,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(c(),d(T,null,[r("div",oe,[r("div",se,[u.value?(c(),d("div",le,"正在载入"+s(F.value)+"批次与效期预警看板...",1)):D("",!0),ht(et)?(c(),d("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:y,class:"expiry-dashboard-frame",src:ht(et),title:`${F.value}批次与效期预警看板`,scrolling:"no",style:Rt({height:`${A.value}px`}),onLoad:$t,onError:It},null,44,ce)):D("",!0)]),h.value==="flavorWarning"?(c(),d("section",de,[ft.value.isCustom?(c(),d(T,{key:1},[r("div",pe,[r("div",null,[r("h2",null,"临期"+s(F.value)+"耗用预警",1)]),$.value.length?(c(),d("span",me,s($.value.length)+" 条临期"+s(F.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)):D("",!0)]),$.value.length?(c(),d("div",be,[r("table",fe,[e[1]||(e[1]=r("thead",null,[r("tr",null,[r("th",null,"物料"),r("th",null,"批次"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"到期日期"),r("th",null,"剩余天数"),r("th",null,"效期状态"),r("th",null,"可耗用口味")])],-1)),r("tbody",null,[(c(!0),d(T,null,X($.value,(a,n)=>(c(),d("tr",{key:`${a.mat}-${a.batch}-${n}`},[r("td",ge,[r("strong",null,s(a.sku||"未标注物料"),1),r("span",null,s(a.mat),1)]),r("td",null,s(a.batch||"—"),1),r("td",ye,s(xt(a.endQty)),1),r("td",ve,s(kt(a.endAmt))+" 万元",1),r("td",null,[r("strong",null,s(a.expDate||"未标注"),1)]),r("td",null,[r("span",{class:G(["rem-days-badge",a.state])},s(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),r("td",null,[r("span",{class:G(["expiry-status-badge",a.state])},s(vt(a.remDays)),3)]),r("td",xe,[a.flavors.length?D("",!0):(c(),d("span",ke,"—")),(c(!0),d(T,null,X(a.flavors,i=>(c(),d("span",{key:i.flavor,class:"flavor-tag",title:i.blendingName?`调配液：${i.blendingName}`:""},s(i.flavor),9,we))),128))])]))),128))])])])):(c(),d("div",he,[r("p",null,"暂无临期"+s(F.value)+"可在 BOM 配方中耗用",1)]))],64)):(c(),d("div",ue,[...e[0]||(e[0]=[r("p",null,"请先上传 BOM 文件，系统将自动匹配临期原料的可耗用口味",-1)])]))])):D("",!0)]),(c(),Wt(jt,{to:"body"},[Ht(Qt,{name:"detail-dialog"},{default:Ot(()=>[p.value?(c(),d("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:Kt(U,["self"])},[r("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":bt},[r("header",De,[r("div",null,[e[2]||(e[2]=r("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),r("h2",{id:bt},s(p.value.title),1),r("p",null,s(p.value.description),1)]),r("button",{ref_key:"dialogCloseButton",ref:R,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:U}," × ",512)]),r("div",Se,[r("div",null,[e[3]||(e[3]=r("span",null,"命中记录",-1)),r("strong",null,s(p.value.rows.length),1),e[4]||(e[4]=r("small",null,"条",-1))]),r("div",null,[e[5]||(e[5]=r("span",null,"库存数量",-1)),r("strong",null,s(at(p.value.totalQuantity)),1),e[6]||(e[6]=r("small",null,"KG",-1))]),r("div",null,[e[7]||(e[7]=r("span",null,"库存金额",-1)),r("strong",null,s(rt(p.value.totalAmount)),1),e[8]||(e[8]=r("small",null,"元",-1))])]),r("div",Ee,[r("table",_e,[e[10]||(e[10]=r("thead",null,[r("tr",null,[r("th",null,"物料编码"),r("th",null,"物料描述"),r("th",null,"批次"),r("th",null,"品类"),r("th",null,"供应商"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"生产日期"),r("th",null,"到期日期"),r("th",{class:"number-cell"},"剩余天数"),r("th",null,"建议动作")])],-1)),r("tbody",null,[(c(!0),d(T,null,X(p.value.rows,(a,n)=>(c(),d("tr",{key:`${a.mat}-${a.batch}-${n}`},[r("td",Ce,s(a.mat||"—"),1),r("td",Ae,s(a.sku||"—"),1),r("td",Fe,s(a.batch||"—"),1),r("td",null,s(a.category||"未知"),1),r("td",null,s(a.supplier||"未知"),1),r("td",Be,s(at(a.endQty)),1),r("td",Le,s(rt(a.endAmt)),1),r("td",null,s(a.prodDate||"—"),1),r("td",null,s(a.expDate||"—"),1),r("td",Ne,[r("span",{class:G(["days-value",_t(a.remDays)])},s(a.remDays??"—"),3)]),r("td",null,s(a.action||"—"),1)]))),128)),p.value.rows.length===0?(c(),d("tr",Te,[...e[9]||(e[9]=[r("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):D("",!0)])])])])],32)):D("",!0)]),_:1})]))],64))}}),Re=te(Me,[["__scopeId","data-v-ac6517fe"]]);export{Re as default};
