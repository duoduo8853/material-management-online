import{d as It,r as v,g as K,f as Vt,h as Pt,o as d,c as p,a as n,t as i,j as D,i as ht,B as Rt,F as T,k as X,m as G,x as Wt,z as Ht,C as Ot,D as Qt,T as jt,J as Ut,y as C,w as Kt,n as Xt,u as Gt}from"./index-Dhzlmwo_.js";import{u as Jt,e as Yt}from"./useInventoryWorkbookSource-CGc0xw8M.js";import{g as Zt}from"./businessDataStore-BwGRYbGU.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";function ee(g){return String(g??"").replace(/\s+/g," ").trim()}function ae(g){let m=ee(g);return m?(m=m.replace(/^(PET瓶|HDPE瓶|PP瓶|PET|HDPE|TP|PP|PC|PE|瓶)/i,""),m=m.replace(/[（(].*$/,""),m=m.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),m.trim()):""}function ne(g){const m=new Map;return g.forEach(y=>{if(!y.materialCode)return;const A=y.flavor||ae(y.blendingName);if(!A)return;const b=m.get(y.materialCode)||[],h={flavor:A,blendingName:y.blendingName};b.some(S=>S.flavor===h.flavor&&S.blendingName===h.blendingName)||b.push(h),m.set(y.materialCode,b)}),m}function re(){return Zt("bom")}function se(g){return g?{fileName:g.fileName,updatedAt:g.updatedAt,rowCount:g.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const oe={class:"page-container expiry-dashboard-page"},ie={class:"dashboard-frame-shell"},le={key:0,class:"frame-loading"},ce=["src","title"],de={key:0,class:"flavor-warning-panel"},ue={key:0,class:"flavor-warning-empty"},pe={class:"flavor-warning-heading"},me={key:0,class:"flavor-warning-meta"},he={key:0,class:"flavor-warning-empty"},be={key:1,class:"flavor-warning-table-wrap"},fe={class:"flavor-warning-table"},ge={class:"flavor-material-cell"},ye={class:"number-cell"},ve={class:"number-cell"},xe={class:"flavor-cell"},we={key:0,class:"flavor-empty"},ke=["title"],De={class:"detail-dialog-header"},Se={class:"detail-dialog-summary"},Ee={class:"detail-dialog-table-wrap"},_e={class:"detail-dialog-table"},Ce={class:"code-cell"},Ae={class:"material-cell"},Be={class:"code-cell"},Fe={class:"number-cell"},Le={class:"number-cell"},Ne={class:"number-cell"},Te={key:0},bt="chart-detail-dialog-title",J=1.1,ze=`
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
`,Me=It({__name:"index",setup(g){const m=v(!0),y=v(),A=v(900),b=v("risk"),h=v(null),R=v(),S=v(0),W=Ut();Gt();function H(t){return t==="material"?"material":"raw"}const z=v(H(W.params.type)),B=C(()=>z.value==="raw"?"原料":"物料"),F=v(null),ft=C(()=>se(F.value)),Y=C(()=>{var t;return ne(((t=F.value)==null?void 0:t.records)||[])}),M=v([]);function gt(t){return Y.value.get(t)||[]}async function yt(){try{F.value=await re()}catch{F.value=null}}function Z(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function vt(t){const e=Z(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function xt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function wt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const $=C(()=>{if(!F.value||!Y.value.size)return[];const t=new Set,e=[];for(const a of M.value){if(a.remDays===null||a.remDays>90)continue;const r=gt(a.mat);if(r.length===0)continue;const s=`${a.mat}-${a.batch}`;t.has(s)||(t.add(s),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:r,state:Z(a.remDays)}))}return e.sort((a,r)=>{const s=a.remDays??9999,o=r.remDays??9999;return s-o||r.endAmt-a.endAmt})}),E=C(()=>{const t=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"}];return z.value==="raw"&&t.push({id:"flavorWarning",label:"临期物料耗用预警"}),t}),tt=C(()=>E.value.findIndex(t=>t.id===b.value));let x,w,L,O,Q="";const j=[],{sourceUrl:et,initialize:kt,setMaterialType:Dt,dispose:St}=Jt({initialMaterialType:H(W.params.type)}),Et={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function at(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function nt(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function _t(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function _(){var t;return(t=y.value)==null?void 0:t.contentWindow}function rt(t){return t<=0?t:Math.max(Math.round(t*J),Math.ceil(t+1))}function st(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${rt(Number(a))}px`)}function ot(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=st(r.fontSize))}const a=e.cssRules;a&&ot(a)})}function Ct(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(J)&&(Array.from(t.styleSheets).forEach(a=>{try{ot(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=st(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(J))}function q(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return rt(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const s=[];return a.set(t,s),t.forEach(o=>s.push(q(o,"",a))),s}const r={};return a.set(t,r),Object.entries(t).forEach(([s,o])=>{r[s]=q(o,s,a)}),r}function it(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(s,...o)=>{e(q(s),...o)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(q(a))}function lt(t){var a;const e=(a=_())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...s)=>{const o=r(...s);return it(o),o},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const s=e.getInstanceByDom(r);s&&it(s)})}}function ct(){const t=_();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function At(t,e,a){const r=[...a].sort((s,o)=>s.remDays===null?1:o.remDays===null?-1:s.remDays-o.remDays);h.value={title:t,description:e,rows:r,totalQuantity:r.reduce((s,o)=>s+(o.endQty||0),0),totalAmount:r.reduce((s,o)=>s+(o.endAmt||0),0)},Xt(()=>{var s;return(s=R.value)==null?void 0:s.focus()})}function U(){h.value=null}function I(t,e,a,r){var u,k,P;const s=t.getElementById(e),o=s&&((k=(u=_())==null?void 0:u.echarts)==null?void 0:k.getInstanceByDom(s));if(!s||!o)return;s.classList.add("drillable-chart");const l=(P=s.closest(".card"))==null?void 0:P.querySelector(".card-title");if(l&&!l.querySelector(".drill-hint")){const f=t.createElement("span");f.className="drill-hint",f.textContent="点击图形查看明细",l.appendChild(f)}const c=f=>{const N=r(f,ct());At(a,N.description,N.rows)};o.on("click",c),j.push(()=>o.off("click",c))}function Bt(t){j.splice(0).forEach(e=>e()),I(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=Et[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),I(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),I(t,"chart-category","品类风险批次明细",(e,a)=>{var o;const r=_();let s="";try{const l=r==null?void 0:r.eval("computeCategory(getView())");s=((o=l==null?void 0:l[e.dataIndex])==null?void 0:o.category)??""}catch{s=e.name.split(" ")[0]}return{description:`品类：${s} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(l=>l.category===s&&l.remDays!==null&&l.remDays<=90)}}),I(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)}))}const Ft={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],flavorWarning:[]},Lt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"].join(", ");function V(){L&&(window.clearTimeout(O),O=window.setTimeout(()=>{if(!L)return;const t=b.value==="flavorWarning"?60:1200;A.value=Math.max(t,Math.ceil(L.scrollHeight)+2)},40))}function Nt(t){var a;const e=(a=_())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var s,o;r.offsetParent!==null&&((o=(s=e.getInstanceByDom(r))==null?void 0:s.resize)==null||o.call(s))})}function Tt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const s=t.createElement("div");s.className="system-batch-tab-list",s.setAttribute("role","tablist"),E.value.forEach((k,P)=>{const f=t.createElement("button"),N=t.createElement("span");f.id=`embedded-batch-tab-${k.id}`,f.type="button",f.dataset.dashboardView=k.id,f.setAttribute("role","tab"),f.setAttribute("aria-controls",e.id),N.textContent=String(P+1).padStart(2,"0"),f.append(N,t.createTextNode(k.label)),f.addEventListener("click",()=>ut(k.id)),s.appendChild(f)});const o=t.createElement("div");o.className="system-batch-page-controls";const l=t.createElement("span");l.dataset.pageStatus="true";const c=t.createElement("button");c.type="button",c.dataset.pageDirection="previous",c.setAttribute("aria-label","上一页"),c.textContent="←",c.addEventListener("click",()=>pt(-1));const u=t.createElement("button");return u.type="button",u.dataset.pageDirection="next",u.setAttribute("aria-label","下一页"),u.textContent="→",u.addEventListener("click",()=>pt(1)),o.append(l,c,u),r.append(s,o),r}function zt(t,e){const a=e.querySelector(":scope > .kpi-row-overview"),r=e.querySelector(":scope > .kpi-row-risk"),s=e.querySelector(":scope > .header"),o=e.querySelector(":scope > .upload-hint"),l=Tt(t,e);let c=null;a&&(e.insertBefore(a,e.firstElementChild),c=a),r&&(c?c.after(r):e.insertBefore(r,e.firstElementChild),c=r),[s,o,l].forEach(u=>{u&&(c?c.after(u):e.insertBefore(u,e.firstElementChild),c=u)})}function Mt(t){const e=tt.value;t.querySelectorAll("[data-dashboard-view]").forEach(o=>{const l=o.dataset.dashboardView===b.value;o.classList.toggle("active",l),o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(E.value.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),s=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),s&&(s.disabled=e===E.value.length-1)}function dt(t){t.querySelectorAll(Lt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),Ft[b.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=b.value,Mt(t),requestAnimationFrame(()=>{Nt(t),V()})}function ut(t){var a;if(b.value===t)return;b.value=t;const e=(a=y.value)==null?void 0:a.contentDocument;e&&dt(e)}function pt(t){const e=tt.value+t,a=E.value[e];a&&ut(a.id)}function $t(){var s,o,l,c;m.value=!1;const t=ct();S.value=t.length,M.value=t,Yt(M.value);const e=(s=y.value)==null?void 0:s.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const u=e.createElement("style");u.id="system-minimal-theme",u.textContent=ze,e.head.appendChild(u)}Ct(e),lt(e),(l=(o=_())==null?void 0:o.renderAll)==null||l.call(o),lt(e),Bt(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(c=a==null?void 0:a.lastElementChild)==null||c.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&(L=r,zt(e,r),dt(e),x==null||x.disconnect(),w==null||w.disconnect(),x=new ResizeObserver(V),w=new MutationObserver(V),x.observe(r),w.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(V))}function qt(){m.value=!1,S.value=0,M.value=[]}function mt(t){t.key==="Escape"&&h.value&&U()}return K(h,t=>{t?(Q=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=Q}),K(()=>W.params.type,t=>{const e=H(t);z.value!==e&&(z.value=e,m.value=!0,S.value=0,h.value=null,Dt(e))}),K(E,t=>{t.some(e=>e.id===b.value)||(b.value="risk")}),Vt(()=>{kt(),yt(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",mt)}),Pt(()=>{St(),j.splice(0).forEach(t=>t()),x==null||x.disconnect(),w==null||w.disconnect(),L=void 0,window.clearTimeout(O),window.removeEventListener("keydown",mt),document.body.style.overflow=Q,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(d(),p(T,null,[n("div",oe,[n("div",ie,[m.value?(d(),p("div",le,"正在载入"+i(B.value)+"批次与效期预警看板...",1)):D("",!0),ht(et)?(d(),p("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:y,class:"expiry-dashboard-frame",src:ht(et),title:`${B.value}批次与效期预警看板`,scrolling:"no",style:Rt({height:`${A.value}px`}),onLoad:$t,onError:qt},null,44,ce)):D("",!0)]),b.value==="flavorWarning"?(d(),p("section",de,[ft.value.isCustom?(d(),p(T,{key:1},[n("div",pe,[n("div",null,[n("h2",null,"临期"+i(B.value)+"耗用预警",1)]),$.value.length?(d(),p("span",me,i($.value.length)+" 条临期"+i(B.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)):D("",!0)]),$.value.length?(d(),p("div",be,[n("table",fe,[e[1]||(e[1]=n("thead",null,[n("tr",null,[n("th",null,"物料"),n("th",null,"批次"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"到期日期"),n("th",null,"剩余天数"),n("th",null,"效期状态"),n("th",null,"可耗用口味")])],-1)),n("tbody",null,[(d(!0),p(T,null,X($.value,(a,r)=>(d(),p("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",ge,[n("strong",null,i(a.sku||"未标注物料"),1),n("span",null,i(a.mat),1)]),n("td",null,i(a.batch||"—"),1),n("td",ye,i(xt(a.endQty)),1),n("td",ve,i(wt(a.endAmt))+" 万元",1),n("td",null,[n("strong",null,i(a.expDate||"未标注"),1)]),n("td",null,[n("span",{class:G(["rem-days-badge",a.state])},i(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),n("td",null,[n("span",{class:G(["expiry-status-badge",a.state])},i(vt(a.remDays)),3)]),n("td",xe,[a.flavors.length?D("",!0):(d(),p("span",we,"—")),(d(!0),p(T,null,X(a.flavors,s=>(d(),p("span",{key:s.flavor,class:"flavor-tag",title:s.blendingName?`调配液：${s.blendingName}`:""},i(s.flavor),9,ke))),128))])]))),128))])])])):(d(),p("div",he,[n("p",null,"暂无临期"+i(B.value)+"可在 BOM 配方中耗用",1)]))],64)):(d(),p("div",ue,[...e[0]||(e[0]=[n("p",null,"请先上传 BOM 文件，系统将自动匹配临期原料的可耗用口味",-1)])]))])):D("",!0)]),(d(),Wt(jt,{to:"body"},[Ht(Qt,{name:"detail-dialog"},{default:Ot(()=>[h.value?(d(),p("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:Kt(U,["self"])},[n("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":bt},[n("header",De,[n("div",null,[e[2]||(e[2]=n("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),n("h2",{id:bt},i(h.value.title),1),n("p",null,i(h.value.description),1)]),n("button",{ref_key:"dialogCloseButton",ref:R,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:U}," × ",512)]),n("div",Se,[n("div",null,[e[3]||(e[3]=n("span",null,"命中记录",-1)),n("strong",null,i(h.value.rows.length),1),e[4]||(e[4]=n("small",null,"条",-1))]),n("div",null,[e[5]||(e[5]=n("span",null,"库存数量",-1)),n("strong",null,i(at(h.value.totalQuantity)),1),e[6]||(e[6]=n("small",null,"KG",-1))]),n("div",null,[e[7]||(e[7]=n("span",null,"库存金额",-1)),n("strong",null,i(nt(h.value.totalAmount)),1),e[8]||(e[8]=n("small",null,"元",-1))])]),n("div",Ee,[n("table",_e,[e[10]||(e[10]=n("thead",null,[n("tr",null,[n("th",null,"物料编码"),n("th",null,"物料描述"),n("th",null,"批次"),n("th",null,"品类"),n("th",null,"供应商"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"生产日期"),n("th",null,"到期日期"),n("th",{class:"number-cell"},"剩余天数"),n("th",null,"建议动作")])],-1)),n("tbody",null,[(d(!0),p(T,null,X(h.value.rows,(a,r)=>(d(),p("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",Ce,i(a.mat||"—"),1),n("td",Ae,i(a.sku||"—"),1),n("td",Be,i(a.batch||"—"),1),n("td",null,i(a.category||"未知"),1),n("td",null,i(a.supplier||"未知"),1),n("td",Fe,i(at(a.endQty)),1),n("td",Le,i(nt(a.endAmt)),1),n("td",null,i(a.prodDate||"—"),1),n("td",null,i(a.expDate||"—"),1),n("td",Ne,[n("span",{class:G(["days-value",_t(a.remDays)])},i(a.remDays??"—"),3)]),n("td",null,i(a.action||"—"),1)]))),128)),h.value.rows.length===0?(d(),p("tr",Te,[...e[9]||(e[9]=[n("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):D("",!0)])])])])],32)):D("",!0)]),_:1})]))],64))}}),Re=te(Me,[["__scopeId","data-v-ab2da157"]]);export{Re as default};
