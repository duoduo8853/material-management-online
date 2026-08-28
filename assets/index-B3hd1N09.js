import{d as Vt,r as v,g as X,f as Pt,h as Rt,o as d,c as p,a as r,t as s,j as S,i as bt,B as Ot,F as T,k as G,m as J,x as Wt,z as Ht,C as Qt,D as jt,T as Ut,J as Kt,y as A,w as Xt,n as Gt,u as Jt}from"./index-C0ISsc_b.js";import{u as Yt,e as Zt}from"./useInventoryWorkbookSource-CUjOdaWw.js";import{g as te,s as ee,n as ae}from"./businessDataStore-BwGRYbGU.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";function ne(b){return String(b??"").replace(/\s+/g," ").trim()}function oe(b){let m=ne(b);return m?(m=m.replace(/^(PET瓶|HDPE瓶|PP瓶|PET|HDPE|TP|PP|PC|PE|瓶)/i,""),m=m.replace(/[（(].*$/,""),m=m.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),m.trim()):""}function ie(b){const m=new Map;return b.forEach(y=>{if(!y.materialCode)return;const B=y.flavor||oe(y.blendingName);if(!B)return;const f=m.get(y.materialCode)||[],h={flavor:B,blendingName:y.blendingName};f.some(D=>D.flavor===h.flavor&&D.blendingName===h.blendingName)||f.push(h),m.set(y.materialCode,f)}),m}async function se(b){await ee(b),ae("bom")}function le(){return te("bom")}function ce(b){return b?{fileName:b.fileName,updatedAt:b.updatedAt,rowCount:b.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const de={class:"page-container expiry-dashboard-page"},ue={class:"dashboard-frame-shell"},pe={key:0,class:"frame-loading"},me=["src","title"],he={key:0,class:"flavor-warning-panel"},be={key:0,class:"flavor-warning-empty"},fe={class:"flavor-warning-heading"},ge={key:0,class:"flavor-warning-meta"},ye={key:0,class:"flavor-warning-empty"},ve={key:1,class:"flavor-warning-table-wrap"},xe={class:"flavor-warning-table"},we={class:"flavor-material-cell"},ke={class:"number-cell"},Se={class:"number-cell"},De={class:"flavor-cell"},Ee={key:0,class:"flavor-empty"},_e=["title"],Ce={class:"detail-dialog-header"},Ae={class:"detail-dialog-summary"},Be={class:"detail-dialog-table-wrap"},Ne={class:"detail-dialog-table"},Fe={class:"code-cell"},Le={class:"material-cell"},Te={class:"code-cell"},Me={class:"number-cell"},ze={class:"number-cell"},Ie={class:"number-cell"},$e={key:0},ft="chart-detail-dialog-title",Y=1.1,qe=`
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
  .dashboard > .kpi-row-overview,
  .dashboard > .kpi-row-risk,
  .dashboard > .charts-row,
  .dashboard > .rank-row,
  .dashboard > .replenishment-row,
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

  .kpi-row-overview,
  .kpi-row-risk,
  .charts-row,
  .rank-row {
    display: grid !important;
    gap: 10px !important;
  }

  .kpi-row-overview {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }

  .kpi-row-risk {
    grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
  }

  .kpi-card {
    min-width: 0;
    min-height: 110px;
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

  .kpi-card.kpi-critical {
    border-left: 4px solid #c0392b !important;
    background: rgba(208, 59, 59, 0.06) !important;
  }

  .kpi-card.kpi-amber {
    border-left: 4px solid #e65100 !important;
    background: rgba(245, 158, 11, 0.06) !important;
  }

  .kpi-card.kpi-yellow {
    border-left: 4px solid #f9a825 !important;
    background: rgba(249, 168, 37, 0.06) !important;
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
    overflow-y: auto;
    overflow-x: hidden;
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

  @media (max-width: 1200px) {
    .kpi-row-risk {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
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

    .kpi-row-overview,
    .kpi-row-risk,
    .charts-row,
    .rank-row {
      gap: 12px !important;
    }

    .kpi-row-overview {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    .kpi-row-risk {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
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
`,Ve=Vt({__name:"index",setup(b){const m=v(!0),y=v(),B=v(900),f=v("risk"),h=v(null),R=v(),D=v(0),O=Kt();Jt();function W(t){return t==="material"?"material":"raw"}const M=v(W(O.params.type)),N=A(()=>M.value==="raw"?"原料":"物料"),E=v(null),gt=A(()=>ce(E.value)),H=A(()=>{var t;return ie(((t=E.value)==null?void 0:t.records)||[])}),z=v([]);function yt(t){const e=String(t||"").trim().replace(/\s+/g," ");return H.value.get(e)||H.value.get(t)||[]}async function vt(){try{E.value=await le()}catch{E.value=null}}function Z(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function xt(t){const e=Z(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function wt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function kt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const I=A(()=>{if(!E.value||!H.value.size)return[];const t=new Set,e=[];for(const a of z.value){if(a.remDays===null||a.remDays>90)continue;const n=yt(a.mat);if(n.length===0)continue;const o=`${a.mat}-${a.batch}`;t.has(o)||(t.add(o),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:n,state:Z(a.remDays)}))}return e.sort((a,n)=>{const o=a.remDays??9999,i=n.remDays??9999;return o-i||n.endAmt-a.endAmt})}),_=A(()=>{const t=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"}];return M.value==="raw"&&t.push({id:"flavorWarning",label:"临期物料耗用预警"}),t}),tt=A(()=>_.value.findIndex(t=>t.id===f.value));let x,w,F,Q,j="";const U=[],{sourceUrl:et,initialize:St,setMaterialType:Dt,dispose:Et}=Yt({initialMaterialType:W(O.params.type)}),_t={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function at(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function rt(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function Ct(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function C(){var t;return(t=y.value)==null?void 0:t.contentWindow}function nt(t){return t<=0?t:Math.max(Math.round(t*Y),Math.ceil(t+1))}function ot(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${nt(Number(a))}px`)}function it(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const n=e.style;n.fontSize&&(n.fontSize=ot(n.fontSize))}const a=e.cssRules;a&&it(a)})}function At(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(Y)&&(Array.from(t.styleSheets).forEach(a=>{try{it(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=ot(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(Y))}function $(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return nt(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const o=[];return a.set(t,o),t.forEach(i=>o.push($(i,"",a))),o}const n={};return a.set(t,n),Object.entries(t).forEach(([o,i])=>{n[o]=$(i,o,a)}),n}function st(t){var n;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(o,...i)=>{e($(o),...i)},t.__systemFontScaleApplied=!0;const a=(n=t.getOption)==null?void 0:n.call(t);a&&e($(a))}function lt(t){var a;const e=(a=C())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const n=e.init.bind(e);e.init=(...o)=>{const i=n(...o);return st(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(n=>{const o=e.getInstanceByDom(n);o&&st(o)})}}function ct(){const t=C();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function Bt(t,e,a){const n=[...a].sort((o,i)=>o.remDays===null?1:i.remDays===null?-1:o.remDays-i.remDays);h.value={title:t,description:e,rows:n,totalQuantity:n.reduce((o,i)=>o+(i.endQty||0),0),totalAmount:n.reduce((o,i)=>o+(i.endAmt||0),0)},Gt(()=>{var o;return(o=R.value)==null?void 0:o.focus()})}function K(){h.value=null}function q(t,e,a,n){var u,k,P;const o=t.getElementById(e),i=o&&((k=(u=C())==null?void 0:u.echarts)==null?void 0:k.getInstanceByDom(o));if(!o||!i)return;o.classList.add("drillable-chart");const l=(P=o.closest(".card"))==null?void 0:P.querySelector(".card-title");if(l&&!l.querySelector(".drill-hint")){const g=t.createElement("span");g.className="drill-hint",g.textContent="点击图形查看明细",l.appendChild(g)}const c=g=>{const L=n(g,ct());Bt(a,L.description,L.rows)};i.on("click",c),U.push(()=>i.off("click",c))}function Nt(t){U.splice(0).forEach(e=>e()),q(t,"chart-expiry","效期区间批次明细",(e,a)=>{const n=_t[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(n)}}),q(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(n=>n.category===e.name&&n.consume===0)})),q(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const n=C();let o="";try{const l=n==null?void 0:n.eval("computeCategory(getView())");o=((i=l==null?void 0:l[e.dataIndex])==null?void 0:i.category)??""}catch{o=e.name.split(" ")[0]}return{description:`品类：${o} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(l=>l.category===o&&l.remDays!==null&&l.remDays<=90)}}),q(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(n=>n.supplier===e.name&&n.remDays!==null&&n.remDays<=90)}))}const Ft={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > .replenishment-row",".dashboard > .rules-row"],flavorWarning:[]},Lt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > .replenishment-row",".dashboard > .rules-row"].join(", ");function V(){F&&(window.clearTimeout(Q),Q=window.setTimeout(()=>{if(!F)return;const t=f.value==="flavorWarning"?60:1200;B.value=Math.max(t,Math.ceil(F.scrollHeight)+2)},40))}function Tt(t){var a;const e=(a=C())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(n=>{var o,i;n.offsetParent!==null&&((i=(o=e.getInstanceByDom(n))==null?void 0:o.resize)==null||i.call(o))})}function Mt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const n=t.createElement("nav");n.className="system-batch-pagination",n.setAttribute("aria-label","批次与效期预警页面");const o=t.createElement("div");o.className="system-batch-tab-list",o.setAttribute("role","tablist"),_.value.forEach((k,P)=>{const g=t.createElement("button"),L=t.createElement("span");g.id=`embedded-batch-tab-${k.id}`,g.type="button",g.dataset.dashboardView=k.id,g.setAttribute("role","tab"),g.setAttribute("aria-controls",e.id),L.textContent=String(P+1).padStart(2,"0"),g.append(L,t.createTextNode(k.label)),g.addEventListener("click",()=>ut(k.id)),o.appendChild(g)});const i=t.createElement("div");i.className="system-batch-page-controls";const l=t.createElement("span");l.dataset.pageStatus="true";const c=t.createElement("button");c.type="button",c.dataset.pageDirection="previous",c.setAttribute("aria-label","上一页"),c.textContent="←",c.addEventListener("click",()=>pt(-1));const u=t.createElement("button");return u.type="button",u.dataset.pageDirection="next",u.setAttribute("aria-label","下一页"),u.textContent="→",u.addEventListener("click",()=>pt(1)),i.append(l,c,u),n.append(o,i),n}function zt(t,e){const a=e.querySelector(":scope > .kpi-row-overview"),n=e.querySelector(":scope > .kpi-row-risk"),o=e.querySelector(":scope > .header"),i=e.querySelector(":scope > .upload-hint"),l=Mt(t,e);let c=null;a&&(e.insertBefore(a,e.firstElementChild),c=a),n&&(c?c.after(n):e.insertBefore(n,e.firstElementChild),c=n),[o,i,l].forEach(u=>{u&&(c?c.after(u):e.insertBefore(u,e.firstElementChild),c=u)})}function It(t){const e=tt.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const l=i.dataset.dashboardView===f.value;i.classList.toggle("active",l),i.setAttribute("aria-selected",String(l)),i.tabIndex=l?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(_.value.length).padStart(2,"0")}`);const n=t.querySelector('[data-page-direction="previous"]'),o=t.querySelector('[data-page-direction="next"]');n&&(n.disabled=e===0),o&&(o.disabled=e===_.value.length-1)}function dt(t){t.querySelectorAll(Lt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),Ft[f.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=f.value,It(t),requestAnimationFrame(()=>{Tt(t),V()})}function ut(t){var a;if(f.value===t)return;f.value=t;const e=(a=y.value)==null?void 0:a.contentDocument;e&&dt(e)}function pt(t){const e=tt.value+t,a=_.value[e];a&&ut(a.id)}function $t(){var o,i,l,c;m.value=!1;const t=ct();D.value=t.length,z.value=t,Zt(z.value);const e=(o=y.value)==null?void 0:o.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const u=e.createElement("style");u.id="system-minimal-theme",u.textContent=qe,e.head.appendChild(u)}At(e),lt(e),(l=(i=C())==null?void 0:i.renderAll)==null||l.call(i),lt(e),Nt(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(c=a==null?void 0:a.lastElementChild)==null||c.classList.add("batch-detail-scroll");const n=e.querySelector(".dashboard");n&&(F=n,zt(e,n),dt(e),x==null||x.disconnect(),w==null||w.disconnect(),x=new ResizeObserver(V),w=new MutationObserver(V),x.observe(n),w.observe(n,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(V))}function qt(){m.value=!1,D.value=0,z.value=[]}function mt(t){t.key==="Escape"&&h.value&&K()}X(h,t=>{t?(j=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=j}),X(()=>O.params.type,t=>{const e=W(t);M.value!==e&&(M.value=e,m.value=!0,D.value=0,h.value=null,Dt(e))}),X(_,t=>{t.some(e=>e.id===f.value)||(f.value="risk")});function ht(t){const e=t.data;if(!e||e.type!=="bom-uploaded")return;const a=(e.records||[]).flatMap(o=>o.flavors.map(i=>({blendingCode:"",blendingName:i.blendingName||"",materialCode:o.mat,materialName:"",flavor:i.flavor}))),n={kind:"bom",fileName:e.file||"BOM",updatedAt:new Date().toISOString(),records:a};E.value=n,se(n)}return Pt(()=>{St(),vt(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",mt),window.addEventListener("message",ht)}),Rt(()=>{Et(),U.splice(0).forEach(t=>t()),x==null||x.disconnect(),w==null||w.disconnect(),F=void 0,window.clearTimeout(Q),window.removeEventListener("keydown",mt),window.removeEventListener("message",ht),document.body.style.overflow=j,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(d(),p(T,null,[r("div",de,[r("div",ue,[m.value?(d(),p("div",pe,"正在载入"+s(N.value)+"批次与效期预警看板...",1)):S("",!0),bt(et)?(d(),p("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:y,class:"expiry-dashboard-frame",src:bt(et),title:`${N.value}批次与效期预警看板`,scrolling:"no",style:Ot({height:`${B.value}px`}),onLoad:$t,onError:qt},null,44,me)):S("",!0)]),f.value==="flavorWarning"?(d(),p("section",he,[gt.value.isCustom?(d(),p(T,{key:1},[r("div",fe,[r("div",null,[r("h2",null,"临期"+s(N.value)+"耗用预警",1)]),I.value.length?(d(),p("span",ge,s(I.value.length)+" 条临期"+s(N.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)):S("",!0)]),I.value.length?(d(),p("div",ve,[r("table",xe,[e[1]||(e[1]=r("thead",null,[r("tr",null,[r("th",null,"物料"),r("th",null,"批次"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"到期日期"),r("th",null,"剩余天数"),r("th",null,"效期状态"),r("th",null,"可耗用口味")])],-1)),r("tbody",null,[(d(!0),p(T,null,G(I.value,(a,n)=>(d(),p("tr",{key:`${a.mat}-${a.batch}-${n}`},[r("td",we,[r("strong",null,s(a.sku||"未标注物料"),1),r("span",null,s(a.mat),1)]),r("td",null,s(a.batch||"—"),1),r("td",ke,s(wt(a.endQty)),1),r("td",Se,s(kt(a.endAmt))+" 万元",1),r("td",null,[r("strong",null,s(a.expDate||"未标注"),1)]),r("td",null,[r("span",{class:J(["rem-days-badge",a.state])},s(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),r("td",null,[r("span",{class:J(["expiry-status-badge",a.state])},s(xt(a.remDays)),3)]),r("td",De,[a.flavors.length?S("",!0):(d(),p("span",Ee,"—")),(d(!0),p(T,null,G(a.flavors,o=>(d(),p("span",{key:o.flavor,class:"flavor-tag",title:o.blendingName?`调配液：${o.blendingName}`:""},s(o.flavor),9,_e))),128))])]))),128))])])])):(d(),p("div",ye,[r("p",null,"暂无临期"+s(N.value)+"可在 BOM 配方中耗用",1)]))],64)):(d(),p("div",be,[...e[0]||(e[0]=[r("p",null,"请先上传 BOM 文件，系统将自动匹配临期原料的可耗用口味",-1)])]))])):S("",!0)]),(d(),Wt(Ut,{to:"body"},[Ht(jt,{name:"detail-dialog"},{default:Qt(()=>[h.value?(d(),p("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:Xt(K,["self"])},[r("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":ft},[r("header",Ce,[r("div",null,[e[2]||(e[2]=r("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),r("h2",{id:ft},s(h.value.title),1),r("p",null,s(h.value.description),1)]),r("button",{ref_key:"dialogCloseButton",ref:R,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:K}," × ",512)]),r("div",Ae,[r("div",null,[e[3]||(e[3]=r("span",null,"命中记录",-1)),r("strong",null,s(h.value.rows.length),1),e[4]||(e[4]=r("small",null,"条",-1))]),r("div",null,[e[5]||(e[5]=r("span",null,"库存数量",-1)),r("strong",null,s(at(h.value.totalQuantity)),1),e[6]||(e[6]=r("small",null,"KG",-1))]),r("div",null,[e[7]||(e[7]=r("span",null,"库存金额",-1)),r("strong",null,s(rt(h.value.totalAmount)),1),e[8]||(e[8]=r("small",null,"元",-1))])]),r("div",Be,[r("table",Ne,[e[10]||(e[10]=r("thead",null,[r("tr",null,[r("th",null,"物料编码"),r("th",null,"物料描述"),r("th",null,"批次"),r("th",null,"品类"),r("th",null,"供应商"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"生产日期"),r("th",null,"到期日期"),r("th",{class:"number-cell"},"剩余天数"),r("th",null,"建议动作")])],-1)),r("tbody",null,[(d(!0),p(T,null,G(h.value.rows,(a,n)=>(d(),p("tr",{key:`${a.mat}-${a.batch}-${n}`},[r("td",Fe,s(a.mat||"—"),1),r("td",Le,s(a.sku||"—"),1),r("td",Te,s(a.batch||"—"),1),r("td",null,s(a.category||"未知"),1),r("td",null,s(a.supplier||"未知"),1),r("td",Me,s(at(a.endQty)),1),r("td",ze,s(rt(a.endAmt)),1),r("td",null,s(a.prodDate||"—"),1),r("td",null,s(a.expDate||"—"),1),r("td",Ie,[r("span",{class:J(["days-value",Ct(a.remDays)])},s(a.remDays??"—"),3)]),r("td",null,s(a.action||"—"),1)]))),128)),h.value.rows.length===0?(d(),p("tr",$e,[...e[9]||(e[9]=[r("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):S("",!0)])])])])],32)):S("",!0)]),_:1})]))],64))}}),Qe=re(Ve,[["__scopeId","data-v-5fdce747"]]);export{Qe as default};
