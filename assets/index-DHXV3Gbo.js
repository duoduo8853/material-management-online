import{d as Et,r as v,g as R,f as Ct,h as _t,o as f,c as w,a as s,j as T,t as c,k as C,B as At,y as Lt,i as Ft,C as Tt,D as It,T as qt,F as lt,J as zt,z as j,w as Mt,m as Bt,p as Nt,u as Vt}from"./index-BRiYIDNu.js";import{u as $t,e as Rt}from"./useInventoryWorkbookSource-580Qg9_S.js";import{_ as jt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";import"./businessDataStore-Bz5EoNTU.js";const Ht={class:"page-container expiry-dashboard-page"},Pt={key:0,class:"inventory-source-alert",role:"alert"},Ot={class:"dashboard-frame-shell"},Qt={key:0,class:"frame-loading"},Ut=["src","title"],Kt={class:"detail-dialog-header"},Xt={class:"detail-dialog-summary"},Gt={class:"detail-dialog-table-wrap"},Jt={class:"detail-dialog-table"},Yt={class:"code-cell"},Zt={class:"material-cell"},Wt={class:"code-cell"},te={class:"number-cell"},ee={class:"number-cell"},ae={class:"number-cell"},re={key:0},ct="chart-detail-dialog-title",H=1.1,ne=`
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
  .dashboard > .kpi-row-risk,
  .dashboard > .charts-row,
  .dashboard > .rank-row,
  .dashboard > .replenishment-row,
  .dashboard > .card,
  .dashboard > .system-batch-pagination,
  .dashboard > .footer-note,
  .dashboard > #tab04-panel,
  .dashboard > #tab05-panel {
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

  .kpi-row-risk,
  .charts-row,
  .rank-row {
    display: grid !important;
    gap: 10px !important;
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

    .kpi-row-risk,
    .charts-row,
    .rank-row {
      gap: 12px !important;
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
`,oe=Et({__name:"index",setup(se){const _=v(!0),A=v(),P=v(900),h=v("risk"),u=v(null),I=v(0),q=zt();Vt();function z(t){return t==="material"?"material":"raw"}const M=v(z(q.params.type)),O=j(()=>M.value==="raw"?"原料":"物料"),B=v([]),k=j(()=>[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"},{id:"monthly",label:"月度效期分析"},{id:"noConsume",label:"无耗用明细"}]),Q=j(()=>k.value.findIndex(t=>t.id===h.value));let y,g,S,N,V="";const $=[],{sourceUrl:U,importError:K,initialize:dt,setMaterialType:pt,dispose:ut}=$t({initialMaterialType:z(q.params.type)}),mt={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function X(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function G(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function ht(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function b(){var t;return(t=A.value)==null?void 0:t.contentWindow}function J(t){return t<=0?t:Math.max(Math.round(t*H),Math.ceil(t+1))}function Y(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${J(Number(a))}px`)}function Z(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=Y(r.fontSize))}const a=e.cssRules;a&&Z(a)})}function bt(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(H)&&(Array.from(t.styleSheets).forEach(a=>{try{Z(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=Y(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(H))}function L(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return J(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const n=[];return a.set(t,n),t.forEach(o=>n.push(L(o,"",a))),n}const r={};return a.set(t,r),Object.entries(t).forEach(([n,o])=>{r[n]=L(o,n,a)}),r}function W(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(n,...o)=>{e(L(n),...o)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(L(a))}function tt(t){var a;const e=(a=b())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...n)=>{const o=r(...n);return W(o),o},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const n=e.getInstanceByDom(r);n&&W(n)})}}function et(){const t=b();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function ft(t,e,a){const r=[...a].sort((n,o)=>n.remDays===null?1:o.remDays===null?-1:n.remDays-o.remDays);u.value={title:t,description:e,rows:r,totalQuantity:r.reduce((n,o)=>n+(o.endQty||0),0),totalAmount:r.reduce((n,o)=>n+(o.endAmt||0),0)}}function at(){u.value=null}function D(t,e,a,r){var p,m,x;const n=t.getElementById(e),o=n&&((m=(p=b())==null?void 0:p.echarts)==null?void 0:m.getInstanceByDom(n));if(!n||!o)return;n.classList.add("drillable-chart");const i=(x=n.closest(".card"))==null?void 0:x.querySelector(".card-title");if(i&&!i.querySelector(".drill-hint")){const d=t.createElement("span");d.className="drill-hint",d.textContent="点击图形查看明细",i.appendChild(d)}const l=d=>{const E=r(d,et());ft(a,E.description,E.rows)};o.on("click",l),$.push(()=>o.off("click",l))}function rt(t){$.splice(0).forEach(e=>e()),D(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=mt[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),D(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),D(t,"chart-category","品类风险批次明细",(e,a)=>{var o;const r=b();let n="";try{const i=r==null?void 0:r.eval("computeCategory(getView())");n=((o=i==null?void 0:i[e.dataIndex])==null?void 0:o.category)??""}catch{n=e.name.split(" ")[0]}return{description:`品类：${n} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(i=>i.category===n&&i.remDays!==null&&i.remDays<=90)}}),D(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)})),D(t,"chart-monthly","月度效期明细",e=>{var p;const a=b(),r=e.name,n=e.seriesName??"",i={过期:"expired","≤30天":"le30","30-90天":"le90",">90天":"gt90"}[n]??"";let l=[];try{const m=(p=a==null?void 0:a.computeMonthlyExpiry)==null?void 0:p.call(a);m&&m.monthly[r]&&i&&(l=(m.monthly[r][i]??[]).map(x=>{var d;return{...x,action:((d=a==null?void 0:a.getRecordFlavor)==null?void 0:d.call(a,x.mat,x.sku))??"—"}}))}catch{}return{description:`${r} · ${n}（按月末时点判定）`,rows:l}})}const yt={risk:[".dashboard > .kpi-row-risk",".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > .replenishment-row",".dashboard > .rules-row"],monthly:[".dashboard > #tab04-panel"],noConsume:[".dashboard > #tab05-panel"]},gt=[".dashboard > .kpi-row-overview",".dashboard > .kpi-row-risk",".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > .replenishment-row",".dashboard > .rules-row",".dashboard > #tab04-panel",".dashboard > #tab05-panel"].join(", ");function F(){S&&(window.clearTimeout(N),N=window.setTimeout(()=>{S&&(P.value=Math.max(1200,Math.ceil(S.scrollHeight)+2))},40))}function xt(t){var a;const e=(a=b())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var n,o;r.offsetParent!==null&&((o=(n=e.getInstanceByDom(r))==null?void 0:n.resize)==null||o.call(n))})}function vt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const n=t.createElement("div");n.className="system-batch-tab-list",n.setAttribute("role","tablist"),k.value.forEach((m,x)=>{const d=t.createElement("button"),E=t.createElement("span");d.id=`embedded-batch-tab-${m.id}`,d.type="button",d.dataset.dashboardView=m.id,d.setAttribute("role","tab"),d.setAttribute("aria-controls",e.id),E.textContent=String(x+1).padStart(2,"0"),d.append(E,t.createTextNode(m.label)),d.addEventListener("click",()=>ot(m.id)),n.appendChild(d)});const o=t.createElement("div");o.className="system-batch-page-controls";const i=t.createElement("span");i.dataset.pageStatus="true";const l=t.createElement("button");l.type="button",l.dataset.pageDirection="previous",l.setAttribute("aria-label","上一页"),l.textContent="←",l.addEventListener("click",()=>st(-1));const p=t.createElement("button");return p.type="button",p.dataset.pageDirection="next",p.setAttribute("aria-label","下一页"),p.textContent="→",p.addEventListener("click",()=>st(1)),o.append(i,l,p),r.append(n,o),r}function wt(t,e){const a=e.querySelector(":scope > .kpi-row-risk"),r=e.querySelector(":scope > .header"),n=e.querySelector(":scope > .upload-hint"),o=vt(t,e);let i=null;a&&(e.insertBefore(a,e.firstElementChild),i=a),[r,n,o].forEach(l=>{l&&(i?i.after(l):e.insertBefore(l,e.firstElementChild),i=l)})}function kt(t){const e=Q.value;t.querySelectorAll("[data-dashboard-view]").forEach(o=>{const i=o.dataset.dashboardView===h.value;o.classList.toggle("active",i),o.setAttribute("aria-selected",String(i)),o.tabIndex=i?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(k.value.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),n=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),n&&(n.disabled=e===k.value.length-1)}function nt(t){t.querySelectorAll(gt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),yt[h.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=h.value,kt(t),requestAnimationFrame(()=>{var e,a,r,n;if(xt(t),h.value==="monthly"){const o=b();(e=o==null?void 0:o.populateMonthlyCatFilter)==null||e.call(o),(a=o==null?void 0:o.renderMonthlyExpiry)==null||a.call(o),rt(t)}h.value==="noConsume"&&((n=(r=b())==null?void 0:r.renderNoConsume)==null||n.call(r)),F()})}function ot(t){var a;if(h.value===t)return;h.value=t;const e=(a=A.value)==null?void 0:a.contentDocument;e&&nt(e)}function st(t){const e=Q.value+t,a=k.value[e];a&&ot(a.id)}function St(){var n,o,i,l;_.value=!1;const t=et();I.value=t.length,B.value=t,Rt(B.value);const e=(n=A.value)==null?void 0:n.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const p=e.createElement("style");p.id="system-minimal-theme",p.textContent=ne,e.head.appendChild(p)}bt(e),tt(e),(i=(o=b())==null?void 0:o.renderAll)==null||i.call(o),tt(e),rt(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(l=a==null?void 0:a.lastElementChild)==null||l.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&(S=r,wt(e,r),nt(e),y==null||y.disconnect(),g==null||g.disconnect(),y=new ResizeObserver(F),g=new MutationObserver(F),y.observe(r),g.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(F))}function Dt(){_.value=!1,I.value=0,B.value=[]}function it(t){t.key==="Escape"&&u.value&&at()}return R(u,t=>{t?(V=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=V}),R(()=>q.params.type,t=>{const e=z(t);M.value!==e&&(M.value=e,_.value=!0,I.value=0,u.value=null,pt(e))}),R(k,t=>{t.some(e=>e.id===h.value)||(h.value="risk")}),Ct(()=>{dt(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",it)}),_t(()=>{ut(),$.splice(0).forEach(t=>t()),y==null||y.disconnect(),g==null||g.disconnect(),S=void 0,window.clearTimeout(N),window.removeEventListener("keydown",it),document.body.style.overflow=V,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(f(),w(lt,null,[s("div",Ht,[T(K)?(f(),w("div",Pt," ⚠️ "+c(T(K)),1)):C("",!0),s("div",Ot,[_.value?(f(),w("div",Qt,"正在载入"+c(O.value)+"批次与效期预警看板...",1)):C("",!0),T(U)?(f(),w("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:A,class:"expiry-dashboard-frame",src:T(U),title:`${O.value}批次与效期预警看板`,scrolling:"no",style:At({height:`${P.value}px`}),onLoad:St,onError:Dt},null,44,Ut)):C("",!0)])]),(f(),Lt(qt,{to:"body"},[Ft(It,{name:"detail-dialog"},{default:Tt(()=>[u.value?(f(),w("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:Mt(at,["self"])},[s("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":ct},[s("header",Kt,[s("div",null,[e[0]||(e[0]=s("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),s("h2",{id:ct},c(u.value.title),1),s("p",null,c(u.value.description),1)])]),s("div",Xt,[s("div",null,[e[1]||(e[1]=s("span",null,"命中记录",-1)),s("strong",null,c(u.value.rows.length),1),e[2]||(e[2]=s("small",null,"条",-1))]),s("div",null,[e[3]||(e[3]=s("span",null,"库存数量",-1)),s("strong",null,c(X(u.value.totalQuantity)),1),e[4]||(e[4]=s("small",null,"KG",-1))]),s("div",null,[e[5]||(e[5]=s("span",null,"库存金额",-1)),s("strong",null,c(G(u.value.totalAmount)),1),e[6]||(e[6]=s("small",null,"元",-1))])]),s("div",Gt,[s("table",Jt,[e[8]||(e[8]=s("thead",null,[s("tr",null,[s("th",null,"物料编码"),s("th",null,"物料描述"),s("th",null,"批次"),s("th",null,"品类"),s("th",null,"供应商"),s("th",{class:"number-cell"},"库存数量"),s("th",{class:"number-cell"},"库存金额"),s("th",null,"生产日期"),s("th",null,"到期日期"),s("th",{class:"number-cell"},"剩余天数"),s("th",null,"可耗用口味")])],-1)),s("tbody",null,[(f(!0),w(lt,null,Bt(u.value.rows,(a,r)=>(f(),w("tr",{key:`${a.mat}-${a.batch}-${r}`},[s("td",Yt,c(a.mat||"—"),1),s("td",Zt,c(a.sku||"—"),1),s("td",Wt,c(a.batch||"—"),1),s("td",null,c(a.category||"未知"),1),s("td",null,c(a.supplier||"未知"),1),s("td",te,c(X(a.endQty)),1),s("td",ee,c(G(a.endAmt)),1),s("td",null,c(a.prodDate||"—"),1),s("td",null,c(a.expDate||"—"),1),s("td",ae,[s("span",{class:Nt(["days-value",ht(a.remDays)])},c(a.remDays??"—"),3)]),s("td",null,c(a.action||"—"),1)]))),128)),u.value.rows.length===0?(f(),w("tr",re,[...e[7]||(e[7]=[s("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):C("",!0)])])])])],32)):C("",!0)]),_:1})]))],64))}}),ue=jt(oe,[["__scopeId","data-v-ed1d85fb"]]);export{ue as default};
