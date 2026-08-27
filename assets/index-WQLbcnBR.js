import{d as jt,r as v,g as G,f as Ut,h as Kt,o as u,c as p,a as r,z as ft,i as w,t as s,j as E,B as Xt,F as N,k as J,m as Y,x as Gt,C as Jt,D as Yt,T as Zt,J as te,y as A,w as ee,n as ae,u as re}from"./index-CZnqs8Ea.js";import{W as ne}from"./WorkbookImportPanel-UO4X4tBU.js";import{u as oe,d as ie,e as se}from"./useInventoryWorkbookSource-DMvQOISG.js";import{g as le}from"./businessDataStore-BwGRYbGU.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";function de(g){return String(g??"").replace(/\s+/g," ").trim()}function ue(g){let c=de(g);return c?(c=c.replace(/^(PET瓶|HDPE瓶|PP瓶|PET|HDPE|TP|PP|PC|PE|瓶)/i,""),c=c.replace(/[（(].*$/,""),c=c.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),c.trim()):""}function pe(g){const c=new Map;return g.forEach(y=>{if(!y.materialCode)return;const F=y.flavor||ue(y.blendingName);if(!F)return;const h=c.get(y.materialCode)||[],d={flavor:F,blendingName:y.blendingName};h.some(x=>x.flavor===d.flavor&&x.blendingName===d.blendingName)||h.push(d),c.set(y.materialCode,h)}),c}function me(){return le("bom")}function he(g){return g?{fileName:g.fileName,updatedAt:g.updatedAt,rowCount:g.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const be={class:"page-container expiry-dashboard-page"},fe={class:"data-source-row"},ge={class:"dashboard-frame-shell"},ye={key:0,class:"frame-loading"},ve=["src","title"],xe={key:0,class:"flavor-warning-panel"},we={key:0,class:"flavor-warning-empty"},ke={class:"flavor-warning-heading"},De={key:0,class:"flavor-warning-meta"},Se={key:0,class:"flavor-warning-empty"},Ee={key:1,class:"flavor-warning-table-wrap"},_e={class:"flavor-warning-table"},Ce={class:"flavor-material-cell"},Ae={class:"number-cell"},Fe={class:"number-cell"},Ie={class:"flavor-cell"},Te={key:0,class:"flavor-empty"},Le=["title"],Be={class:"detail-dialog-header"},Ne={class:"detail-dialog-summary"},Me={class:"detail-dialog-table-wrap"},ze={class:"detail-dialog-table"},$e={class:"code-cell"},qe={class:"material-cell"},Pe={class:"code-cell"},Ve={class:"number-cell"},Re={class:"number-cell"},We={class:"number-cell"},He={key:0},gt="chart-detail-dialog-title",Z=1.1,Oe=`
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
`,Qe=jt({__name:"index",setup(g){const c=v(!0),y=v(),F=v(900),h=v("risk"),d=v(null),H=v(),x=v(0),O=te();re();function Q(t){return t==="material"?"material":"raw"}const M=v(Q(O.params.type)),I=A(()=>M.value==="raw"?"原料":"物料"),T=v(null),yt=A(()=>he(T.value)),tt=A(()=>{var t;return pe(((t=T.value)==null?void 0:t.records)||[])}),z=v([]);function vt(t){return tt.value.get(t)||[]}async function xt(){try{T.value=await me()}catch{T.value=null}}function et(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function wt(t){const e=et(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function kt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function Dt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const $=A(()=>{if(!T.value||!tt.value.size)return[];const t=new Set,e=[];for(const a of z.value){if(a.remDays===null||a.remDays>90)continue;const n=vt(a.mat);if(n.length===0)continue;const o=`${a.mat}-${a.batch}`;t.has(o)||(t.add(o),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:n,state:et(a.remDays)}))}return e.sort((a,n)=>{const o=a.remDays??9999,i=n.remDays??9999;return o-i||n.endAmt-a.endAmt})}),_=A(()=>{const t=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"},{id:"trafficLight",label:"红黄灯"}];return M.value==="raw"&&t.push({id:"flavorWarning",label:"临期物料耗用预警"}),t}),at=A(()=>_.value.findIndex(t=>t.id===h.value));let k,D,L,j,U="";const K=[],{sourceUrl:rt,sourceMeta:q,importing:St,importError:Et,initialize:_t,importFile:Ct,reset:At,setMaterialType:Ft,dispose:It}=oe({initialMaterialType:Q(O.params.type)}),Tt={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function nt(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function ot(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function Lt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function C(){var t;return(t=y.value)==null?void 0:t.contentWindow}function it(t){return t<=0?t:Math.max(Math.round(t*Z),Math.ceil(t+1))}function st(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${it(Number(a))}px`)}function lt(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const n=e.style;n.fontSize&&(n.fontSize=st(n.fontSize))}const a=e.cssRules;a&&lt(a)})}function Bt(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(Z)&&(Array.from(t.styleSheets).forEach(a=>{try{lt(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=st(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(Z))}function P(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return it(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const o=[];return a.set(t,o),t.forEach(i=>o.push(P(i,"",a))),o}const n={};return a.set(t,n),Object.entries(t).forEach(([o,i])=>{n[o]=P(i,o,a)}),n}function ct(t){var n;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(o,...i)=>{e(P(o),...i)},t.__systemFontScaleApplied=!0;const a=(n=t.getOption)==null?void 0:n.call(t);a&&e(P(a))}function dt(t){var a;const e=(a=C())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const n=e.init.bind(e);e.init=(...o)=>{const i=n(...o);return ct(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(n=>{const o=e.getInstanceByDom(n);o&&ct(o)})}}function ut(){const t=C();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function Nt(t,e,a){const n=[...a].sort((o,i)=>o.remDays===null?1:i.remDays===null?-1:o.remDays-i.remDays);d.value={title:t,description:e,rows:n,totalQuantity:n.reduce((o,i)=>o+(i.endQty||0),0),totalAmount:n.reduce((o,i)=>o+(i.endAmt||0),0)},ae(()=>{var o;return(o=H.value)==null?void 0:o.focus()})}function X(){d.value=null}function V(t,e,a,n){var f,S,W;const o=t.getElementById(e),i=o&&((S=(f=C())==null?void 0:f.echarts)==null?void 0:S.getInstanceByDom(o));if(!o||!i)return;o.classList.add("drillable-chart");const l=(W=o.closest(".card"))==null?void 0:W.querySelector(".card-title");if(l&&!l.querySelector(".drill-hint")){const b=t.createElement("span");b.className="drill-hint",b.textContent="点击图形查看明细",l.appendChild(b)}const m=b=>{const B=n(b,ut());Nt(a,B.description,B.rows)};i.on("click",m),K.push(()=>i.off("click",m))}function Mt(t){K.splice(0).forEach(e=>e()),V(t,"chart-expiry","效期区间批次明细",(e,a)=>{const n=Tt[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(n)}}),V(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(n=>n.category===e.name&&n.consume===0)})),V(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const n=C();let o="";try{const l=n==null?void 0:n.eval("computeCategory(getView())");o=((i=l==null?void 0:l[e.dataIndex])==null?void 0:i.category)??""}catch{o=e.name.split(" ")[0]}return{description:`品类：${o} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(l=>l.category===o&&l.remDays!==null&&l.remDays<=90)}}),V(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(n=>n.supplier===e.name&&n.remDays!==null&&n.remDays<=90)}))}const zt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"],flavorWarning:[]},$t=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function R(){L&&(window.clearTimeout(j),j=window.setTimeout(()=>{if(!L)return;const t=h.value==="flavorWarning"?60:900;F.value=Math.max(t,Math.ceil(L.scrollHeight)+2)},40))}function qt(t){var a;const e=(a=C())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(n=>{var o,i;n.offsetParent!==null&&((i=(o=e.getInstanceByDom(n))==null?void 0:o.resize)==null||i.call(o))})}function Pt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const n=t.createElement("nav");n.className="system-batch-pagination",n.setAttribute("aria-label","批次与效期预警页面");const o=t.createElement("div");o.className="system-batch-tab-list",o.setAttribute("role","tablist"),_.value.forEach((S,W)=>{const b=t.createElement("button"),B=t.createElement("span");b.id=`embedded-batch-tab-${S.id}`,b.type="button",b.dataset.dashboardView=S.id,b.setAttribute("role","tab"),b.setAttribute("aria-controls",e.id),B.textContent=String(W+1).padStart(2,"0"),b.append(B,t.createTextNode(S.label)),b.addEventListener("click",()=>mt(S.id)),o.appendChild(b)});const i=t.createElement("div");i.className="system-batch-page-controls";const l=t.createElement("span");l.dataset.pageStatus="true";const m=t.createElement("button");m.type="button",m.dataset.pageDirection="previous",m.setAttribute("aria-label","上一页"),m.textContent="←",m.addEventListener("click",()=>ht(-1));const f=t.createElement("button");return f.type="button",f.dataset.pageDirection="next",f.setAttribute("aria-label","下一页"),f.textContent="→",f.addEventListener("click",()=>ht(1)),i.append(l,m,f),n.append(o,i),n}function Vt(t,e){const a=e.querySelector(":scope > .kpi-row"),n=e.querySelector(":scope > .header"),o=e.querySelector(":scope > .upload-hint"),i=Pt(t,e);let l=null;a&&(e.insertBefore(a,e.firstElementChild),l=a),[n,o,i].forEach(m=>{m&&(l?l.after(m):e.insertBefore(m,e.firstElementChild),l=m)})}function Rt(t){const e=at.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const l=i.dataset.dashboardView===h.value;i.classList.toggle("active",l),i.setAttribute("aria-selected",String(l)),i.tabIndex=l?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(_.value.length).padStart(2,"0")}`);const n=t.querySelector('[data-page-direction="previous"]'),o=t.querySelector('[data-page-direction="next"]');n&&(n.disabled=e===0),o&&(o.disabled=e===_.value.length-1)}function pt(t){t.querySelectorAll($t).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),zt[h.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=h.value,Rt(t),requestAnimationFrame(()=>{qt(t),R()})}function mt(t){var a;if(h.value===t)return;h.value=t;const e=(a=y.value)==null?void 0:a.contentDocument;e&&pt(e)}function ht(t){const e=at.value+t,a=_.value[e];a&&mt(a.id)}function Wt(){var o,i,l,m;c.value=!1;const t=ut();x.value=t.length,z.value=t,se(z.value);const e=(o=y.value)==null?void 0:o.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const f=e.createElement("style");f.id="system-minimal-theme",f.textContent=Oe,e.head.appendChild(f)}Bt(e),dt(e),(l=(i=C())==null?void 0:i.renderAll)==null||l.call(i),dt(e),Mt(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(m=a==null?void 0:a.lastElementChild)==null||m.classList.add("batch-detail-scroll");const n=e.querySelector(".dashboard");n&&(L=n,Vt(e,n),pt(e),k==null||k.disconnect(),D==null||D.disconnect(),k=new ResizeObserver(R),D=new MutationObserver(R),k.observe(n),D.observe(n,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(R))}function Ht(){c.value=!1,x.value=0,z.value=[]}async function Ot(t){try{await Ct(t),c.value=!0,x.value=0,d.value=null}catch{}}async function Qt(){try{await At(),c.value=!0,x.value=0,d.value=null}catch{}}function bt(t){t.key==="Escape"&&d.value&&X()}return G(d,t=>{t?(U=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=U}),G(()=>O.params.type,t=>{const e=Q(t);M.value!==e&&(M.value=e,c.value=!0,x.value=0,d.value=null,Ft(e))}),G(_,t=>{t.some(e=>e.id===h.value)||(h.value="risk")}),Ut(()=>{_t(),xt(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",bt)}),Kt(()=>{It(),K.splice(0).forEach(t=>t()),k==null||k.disconnect(),D==null||D.disconnect(),L=void 0,window.clearTimeout(j),window.removeEventListener("keydown",bt),document.body.style.overflow=U,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(u(),p(N,null,[r("div",be,[r("div",fe,[ft(ne,{title:"批次与效期数据",description:"","file-name":w(q).fileName,"updated-at":w(q).updatedAt,"row-count":x.value||w(q).rowCount,busy:w(St),custom:w(q).isCustom,error:w(Et),"action-label":"导入库存 Excel","show-template":"",onFile:Ot,onReset:Qt,onTemplate:w(ie)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"])]),r("div",ge,[c.value?(u(),p("div",ye,"正在载入"+s(I.value)+"批次与效期预警看板...",1)):E("",!0),w(rt)?(u(),p("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:y,class:"expiry-dashboard-frame",src:w(rt),title:`${I.value}批次与效期预警看板`,scrolling:"no",style:Xt({height:`${F.value}px`}),onLoad:Wt,onError:Ht},null,44,ve)):E("",!0)]),h.value==="flavorWarning"?(u(),p("section",xe,[yt.value.isCustom?(u(),p(N,{key:1},[r("div",ke,[r("div",null,[r("h2",null,"临期"+s(I.value)+"耗用预警",1)]),$.value.length?(u(),p("span",De,s($.value.length)+" 条临期"+s(I.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)):E("",!0)]),$.value.length?(u(),p("div",Ee,[r("table",_e,[e[1]||(e[1]=r("thead",null,[r("tr",null,[r("th",null,"物料"),r("th",null,"批次"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"到期日期"),r("th",null,"剩余天数"),r("th",null,"效期状态"),r("th",null,"可耗用口味")])],-1)),r("tbody",null,[(u(!0),p(N,null,J($.value,(a,n)=>(u(),p("tr",{key:`${a.mat}-${a.batch}-${n}`},[r("td",Ce,[r("strong",null,s(a.sku||"未标注物料"),1),r("span",null,s(a.mat),1)]),r("td",null,s(a.batch||"—"),1),r("td",Ae,s(kt(a.endQty)),1),r("td",Fe,s(Dt(a.endAmt))+" 万元",1),r("td",null,[r("strong",null,s(a.expDate||"未标注"),1)]),r("td",null,[r("span",{class:Y(["rem-days-badge",a.state])},s(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),r("td",null,[r("span",{class:Y(["expiry-status-badge",a.state])},s(wt(a.remDays)),3)]),r("td",Ie,[a.flavors.length?E("",!0):(u(),p("span",Te,"—")),(u(!0),p(N,null,J(a.flavors,o=>(u(),p("span",{key:o.flavor,class:"flavor-tag",title:o.blendingName?`调配液：${o.blendingName}`:""},s(o.flavor),9,Le))),128))])]))),128))])])])):(u(),p("div",Se,[r("p",null,"暂无临期"+s(I.value)+"可在 BOM 配方中耗用",1)]))],64)):(u(),p("div",we,[...e[0]||(e[0]=[r("p",null,"请先上传 BOM 文件，系统将自动匹配临期原料的可耗用口味",-1)])]))])):E("",!0)]),(u(),Gt(Zt,{to:"body"},[ft(Yt,{name:"detail-dialog"},{default:Jt(()=>[d.value?(u(),p("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:ee(X,["self"])},[r("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":gt},[r("header",Be,[r("div",null,[e[2]||(e[2]=r("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),r("h2",{id:gt},s(d.value.title),1),r("p",null,s(d.value.description),1)]),r("button",{ref_key:"dialogCloseButton",ref:H,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:X}," × ",512)]),r("div",Ne,[r("div",null,[e[3]||(e[3]=r("span",null,"命中记录",-1)),r("strong",null,s(d.value.rows.length),1),e[4]||(e[4]=r("small",null,"条",-1))]),r("div",null,[e[5]||(e[5]=r("span",null,"库存数量",-1)),r("strong",null,s(nt(d.value.totalQuantity)),1),e[6]||(e[6]=r("small",null,"KG",-1))]),r("div",null,[e[7]||(e[7]=r("span",null,"库存金额",-1)),r("strong",null,s(ot(d.value.totalAmount)),1),e[8]||(e[8]=r("small",null,"元",-1))])]),r("div",Me,[r("table",ze,[e[10]||(e[10]=r("thead",null,[r("tr",null,[r("th",null,"物料编码"),r("th",null,"物料描述"),r("th",null,"批次"),r("th",null,"品类"),r("th",null,"供应商"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"生产日期"),r("th",null,"到期日期"),r("th",{class:"number-cell"},"剩余天数"),r("th",null,"建议动作")])],-1)),r("tbody",null,[(u(!0),p(N,null,J(d.value.rows,(a,n)=>(u(),p("tr",{key:`${a.mat}-${a.batch}-${n}`},[r("td",$e,s(a.mat||"—"),1),r("td",qe,s(a.sku||"—"),1),r("td",Pe,s(a.batch||"—"),1),r("td",null,s(a.category||"未知"),1),r("td",null,s(a.supplier||"未知"),1),r("td",Ve,s(nt(a.endQty)),1),r("td",Re,s(ot(a.endAmt)),1),r("td",null,s(a.prodDate||"—"),1),r("td",null,s(a.expDate||"—"),1),r("td",We,[r("span",{class:Y(["days-value",Lt(a.remDays)])},s(a.remDays??"—"),3)]),r("td",null,s(a.action||"—"),1)]))),128)),d.value.rows.length===0?(u(),p("tr",He,[...e[9]||(e[9]=[r("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):E("",!0)])])])])],32)):E("",!0)]),_:1})]))],64))}}),Ye=ce(Qe,[["__scopeId","data-v-c7cb4d4e"]]);export{Ye as default};
