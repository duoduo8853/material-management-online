import{d as Dt,r as x,g as $,f as Et,h as At,o as v,c as w,a as o,t as p,k as F,j as it,B as Ct,y as _t,i as Lt,C as Ft,D as Tt,T as qt,F as st,J as zt,z as R,w as It,m as Bt,p as Mt,u as Vt}from"./index-C40snuvJ.js";import{u as Nt,e as $t}from"./useInventoryWorkbookSource-8JTKvonF.js";import{_ as Rt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";import"./businessDataStore-Bz5EoNTU.js";const jt={class:"page-container expiry-dashboard-page"},Ht={class:"dashboard-frame-shell"},Ot={key:0,class:"frame-loading"},Pt=["src","title"],Qt={class:"detail-dialog-header"},Ut={class:"detail-dialog-summary"},Kt={class:"detail-dialog-table-wrap"},Xt={class:"detail-dialog-table"},Gt={class:"code-cell"},Jt={class:"material-cell"},Yt={class:"code-cell"},Zt={class:"number-cell"},Wt={class:"number-cell"},te={class:"number-cell"},ee={key:0},lt="chart-detail-dialog-title",j=1.1,ae=`
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
  .dashboard > .footer-note,
  .dashboard > #tab04-panel {
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

  .charts-row,
  .rank-row {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }

  .kpi-card {
    min-width: 0;
    min-height: 110px;
  }

  .charts-row > .card:nth-child(1) {
    grid-column: span 6;
  }

  .charts-row > .card:nth-child(2) {
    grid-column: span 6;
  }

  .charts-row > .card:nth-child(3) {
    grid-column: 1 / -1;
  }

  .rank-row > .card:nth-child(1) {
    grid-column: span 6;
  }

  .rank-row > .card:nth-child(2) {
    grid-column: span 6;
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
`,re=Dt({__name:"index",setup(ne){const A=x(!0),C=x(),H=x(900),h=x("risk"),u=x(null),T=x(0),q=zt();Vt();function z(t){return t==="material"?"material":"raw"}const I=x(z(q.params.type)),O=R(()=>I.value==="raw"?"原料":"物料"),B=x([]),k=R(()=>[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"},{id:"monthly",label:"月度效期分析"}]),P=R(()=>k.value.findIndex(t=>t.id===h.value));let b,f,S,M,V="";const N=[],{sourceUrl:Q,initialize:ct,setMaterialType:dt,dispose:pt}=Nt({initialMaterialType:z(q.params.type)}),ut={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function U(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function K(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function mt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function g(){var t;return(t=C.value)==null?void 0:t.contentWindow}function X(t){return t<=0?t:Math.max(Math.round(t*j),Math.ceil(t+1))}function G(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${X(Number(a))}px`)}function J(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=G(r.fontSize))}const a=e.cssRules;a&&J(a)})}function ht(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(j)&&(Array.from(t.styleSheets).forEach(a=>{try{J(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=G(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(j))}function _(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return X(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const n=[];return a.set(t,n),t.forEach(i=>n.push(_(i,"",a))),n}const r={};return a.set(t,r),Object.entries(t).forEach(([n,i])=>{r[n]=_(i,n,a)}),r}function Y(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(n,...i)=>{e(_(n),...i)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(_(a))}function Z(t){var a;const e=(a=g())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...n)=>{const i=r(...n);return Y(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const n=e.getInstanceByDom(r);n&&Y(n)})}}function W(){const t=g();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function bt(t,e,a){const r=[...a].sort((n,i)=>n.remDays===null?1:i.remDays===null?-1:n.remDays-i.remDays);u.value={title:t,description:e,rows:r,totalQuantity:r.reduce((n,i)=>n+(i.endQty||0),0),totalAmount:r.reduce((n,i)=>n+(i.endAmt||0),0)}}function tt(){u.value=null}function D(t,e,a,r){var c,m,y;const n=t.getElementById(e),i=n&&((m=(c=g())==null?void 0:c.echarts)==null?void 0:m.getInstanceByDom(n));if(!n||!i)return;n.classList.add("drillable-chart");const s=(y=n.closest(".card"))==null?void 0:y.querySelector(".card-title");if(s&&!s.querySelector(".drill-hint")){const d=t.createElement("span");d.className="drill-hint",d.textContent="点击图形查看明细",s.appendChild(d)}const l=d=>{const E=r(d,W());bt(a,E.description,E.rows)};i.on("click",l),N.push(()=>i.off("click",l))}function et(t){N.splice(0).forEach(e=>e()),D(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=ut[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),D(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),D(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const r=g();let n="";try{const s=r==null?void 0:r.eval("computeCategory(getView())");n=((i=s==null?void 0:s[e.dataIndex])==null?void 0:i.category)??""}catch{n=e.name.split(" ")[0]}return{description:`品类：${n} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(s=>s.category===n&&s.remDays!==null&&s.remDays<=90)}}),D(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)})),D(t,"chart-monthly","月度效期明细",e=>{var c;const a=g(),r=e.name,n=e.seriesName??"",s={过期:"expired","≤30天":"le30","30-90天":"le90",">90天":"gt90"}[n]??"";let l=[];try{const m=(c=a==null?void 0:a.computeMonthlyExpiry)==null?void 0:c.call(a);m&&m.monthly[r]&&s&&(l=(m.monthly[r][s]??[]).map(y=>{var d;return{...y,action:((d=a==null?void 0:a.getRecordFlavor)==null?void 0:d.call(a,y.mat,y.sku))??"—"}}))}catch{}return{description:`${r} · ${n}（按月末时点判定）`,rows:l}})}const ft={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > .replenishment-row",".dashboard > .rules-row"],monthly:[".dashboard > #tab04-panel"]},gt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > .replenishment-row",".dashboard > .rules-row",".dashboard > #tab04-panel"].join(", ");function L(){S&&(window.clearTimeout(M),M=window.setTimeout(()=>{S&&(H.value=Math.max(1200,Math.ceil(S.scrollHeight)+2))},40))}function yt(t){var a;const e=(a=g())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var n,i;r.offsetParent!==null&&((i=(n=e.getInstanceByDom(r))==null?void 0:n.resize)==null||i.call(n))})}function xt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const n=t.createElement("div");n.className="system-batch-tab-list",n.setAttribute("role","tablist"),k.value.forEach((m,y)=>{const d=t.createElement("button"),E=t.createElement("span");d.id=`embedded-batch-tab-${m.id}`,d.type="button",d.dataset.dashboardView=m.id,d.setAttribute("role","tab"),d.setAttribute("aria-controls",e.id),E.textContent=String(y+1).padStart(2,"0"),d.append(E,t.createTextNode(m.label)),d.addEventListener("click",()=>rt(m.id)),n.appendChild(d)});const i=t.createElement("div");i.className="system-batch-page-controls";const s=t.createElement("span");s.dataset.pageStatus="true";const l=t.createElement("button");l.type="button",l.dataset.pageDirection="previous",l.setAttribute("aria-label","上一页"),l.textContent="←",l.addEventListener("click",()=>nt(-1));const c=t.createElement("button");return c.type="button",c.dataset.pageDirection="next",c.setAttribute("aria-label","下一页"),c.textContent="→",c.addEventListener("click",()=>nt(1)),i.append(s,l,c),r.append(n,i),r}function vt(t,e){const a=e.querySelector(":scope > .kpi-row-overview"),r=e.querySelector(":scope > .kpi-row-risk"),n=e.querySelector(":scope > .header"),i=e.querySelector(":scope > .upload-hint"),s=xt(t,e);let l=null;a&&(e.insertBefore(a,e.firstElementChild),l=a),r&&(l?l.after(r):e.insertBefore(r,e.firstElementChild),l=r),[n,i,s].forEach(c=>{c&&(l?l.after(c):e.insertBefore(c,e.firstElementChild),l=c)})}function wt(t){const e=P.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const s=i.dataset.dashboardView===h.value;i.classList.toggle("active",s),i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(k.value.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),n=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),n&&(n.disabled=e===k.value.length-1)}function at(t){t.querySelectorAll(gt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),ft[h.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=h.value,wt(t),requestAnimationFrame(()=>{var e,a;if(yt(t),h.value==="monthly"){const r=g();(e=r==null?void 0:r.populateMonthlyCatFilter)==null||e.call(r),(a=r==null?void 0:r.renderMonthlyExpiry)==null||a.call(r),et(t)}L()})}function rt(t){var a;if(h.value===t)return;h.value=t;const e=(a=C.value)==null?void 0:a.contentDocument;e&&at(e)}function nt(t){const e=P.value+t,a=k.value[e];a&&rt(a.id)}function kt(){var n,i,s,l;A.value=!1;const t=W();T.value=t.length,B.value=t,$t(B.value);const e=(n=C.value)==null?void 0:n.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const c=e.createElement("style");c.id="system-minimal-theme",c.textContent=ae,e.head.appendChild(c)}ht(e),Z(e),(s=(i=g())==null?void 0:i.renderAll)==null||s.call(i),Z(e),et(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(l=a==null?void 0:a.lastElementChild)==null||l.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&(S=r,vt(e,r),at(e),b==null||b.disconnect(),f==null||f.disconnect(),b=new ResizeObserver(L),f=new MutationObserver(L),b.observe(r),f.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(L))}function St(){A.value=!1,T.value=0,B.value=[]}function ot(t){t.key==="Escape"&&u.value&&tt()}return $(u,t=>{t?(V=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=V}),$(()=>q.params.type,t=>{const e=z(t);I.value!==e&&(I.value=e,A.value=!0,T.value=0,u.value=null,dt(e))}),$(k,t=>{t.some(e=>e.id===h.value)||(h.value="risk")}),Et(()=>{ct(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",ot)}),At(()=>{pt(),N.splice(0).forEach(t=>t()),b==null||b.disconnect(),f==null||f.disconnect(),S=void 0,window.clearTimeout(M),window.removeEventListener("keydown",ot),document.body.style.overflow=V,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(v(),w(st,null,[o("div",jt,[o("div",Ht,[A.value?(v(),w("div",Ot,"正在载入"+p(O.value)+"批次与效期预警看板...",1)):F("",!0),it(Q)?(v(),w("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:C,class:"expiry-dashboard-frame",src:it(Q),title:`${O.value}批次与效期预警看板`,scrolling:"no",style:Ct({height:`${H.value}px`}),onLoad:kt,onError:St},null,44,Pt)):F("",!0)])]),(v(),_t(qt,{to:"body"},[Lt(Tt,{name:"detail-dialog"},{default:Ft(()=>[u.value?(v(),w("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:It(tt,["self"])},[o("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":lt},[o("header",Qt,[o("div",null,[e[0]||(e[0]=o("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),o("h2",{id:lt},p(u.value.title),1),o("p",null,p(u.value.description),1)])]),o("div",Ut,[o("div",null,[e[1]||(e[1]=o("span",null,"命中记录",-1)),o("strong",null,p(u.value.rows.length),1),e[2]||(e[2]=o("small",null,"条",-1))]),o("div",null,[e[3]||(e[3]=o("span",null,"库存数量",-1)),o("strong",null,p(U(u.value.totalQuantity)),1),e[4]||(e[4]=o("small",null,"KG",-1))]),o("div",null,[e[5]||(e[5]=o("span",null,"库存金额",-1)),o("strong",null,p(K(u.value.totalAmount)),1),e[6]||(e[6]=o("small",null,"元",-1))])]),o("div",Kt,[o("table",Xt,[e[8]||(e[8]=o("thead",null,[o("tr",null,[o("th",null,"物料编码"),o("th",null,"物料描述"),o("th",null,"批次"),o("th",null,"品类"),o("th",null,"供应商"),o("th",{class:"number-cell"},"库存数量"),o("th",{class:"number-cell"},"库存金额"),o("th",null,"生产日期"),o("th",null,"到期日期"),o("th",{class:"number-cell"},"剩余天数"),o("th",null,"可耗用口味")])],-1)),o("tbody",null,[(v(!0),w(st,null,Bt(u.value.rows,(a,r)=>(v(),w("tr",{key:`${a.mat}-${a.batch}-${r}`},[o("td",Gt,p(a.mat||"—"),1),o("td",Jt,p(a.sku||"—"),1),o("td",Yt,p(a.batch||"—"),1),o("td",null,p(a.category||"未知"),1),o("td",null,p(a.supplier||"未知"),1),o("td",Zt,p(U(a.endQty)),1),o("td",Wt,p(K(a.endAmt)),1),o("td",null,p(a.prodDate||"—"),1),o("td",null,p(a.expDate||"—"),1),o("td",te,[o("span",{class:Mt(["days-value",mt(a.remDays)])},p(a.remDays??"—"),3)]),o("td",null,p(a.action||"—"),1)]))),128)),u.value.rows.length===0?(v(),w("tr",ee,[...e[7]||(e[7]=[o("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):F("",!0)])])])])],32)):F("",!0)]),_:1})]))],64))}}),de=Rt(re,[["__scopeId","data-v-37c963e0"]]);export{de as default};
