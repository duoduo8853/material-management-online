import{d as Et,s as At,f as Ct,g as _t,o as f,c as y,a as o,x as et,h as m,i as T,z as It,m as Lt,A as Ft,B as qt,T as Tt,F as at,r as x,w as zt,t as c,j as Bt,n as Vt,p as Nt,q as $t}from"./index-Bxtp0D7T.js";import{W as Mt}from"./WorkbookImportPanel-D9zhyaS1.js";import{d as Rt,u as Wt}from"./useInventoryWorkbookSource-jDg2NbPP.js";import{_ as Pt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./businessDataStore-KowC_G3t.js";const jt={class:"page-container expiry-dashboard-page"},Ht={class:"dashboard-frame-shell"},Ot={key:0,class:"frame-loading"},Qt=["src"],Ut={class:"detail-dialog-header"},Kt={class:"detail-dialog-summary"},Xt={class:"detail-dialog-table-wrap"},Gt={class:"detail-dialog-table"},Yt={class:"code-cell"},Jt={class:"material-cell"},Zt={class:"code-cell"},te={class:"number-cell"},ee={class:"number-cell"},ae={class:"number-cell"},re={key:0},rt="chart-detail-dialog-title",$=1.1,ne=`
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
`,oe=Et({__name:"index",setup(ie){const v=x(!0),C=x(),M=x(900),w=x("risk"),d=x(null),R=x(),S=x(0),D=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"补货预警"},{id:"trafficLight",label:"红黄灯"}],W=Nt(()=>D.findIndex(t=>t.id===w.value));let h,b,E,z,B="";const V=[],{sourceUrl:P,sourceMeta:_,importing:nt,importError:ot,initialize:it,importFile:st,reset:lt,dispose:ct}=Wt(),dt={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function j(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function H(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function pt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function k(){var t;return(t=C.value)==null?void 0:t.contentWindow}function O(t){return t<=0?t:Math.max(Math.round(t*$),Math.ceil(t+1))}function Q(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${O(Number(a))}px`)}function U(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const n=e.style;n.fontSize&&(n.fontSize=Q(n.fontSize))}const a=e.cssRules;a&&U(a)})}function ut(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String($)&&(Array.from(t.styleSheets).forEach(a=>{try{U(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=Q(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String($))}function I(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return O(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const r=[];return a.set(t,r),t.forEach(i=>r.push(I(i,"",a))),r}const n={};return a.set(t,n),Object.entries(t).forEach(([r,i])=>{n[r]=I(i,r,a)}),n}function K(t){var n;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(r,...i)=>{e(I(r),...i)},t.__systemFontScaleApplied=!0;const a=(n=t.getOption)==null?void 0:n.call(t);a&&e(I(a))}function X(t){var a;const e=(a=k())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const n=e.init.bind(e);e.init=(...r)=>{const i=n(...r);return K(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(n=>{const r=e.getInstanceByDom(n);r&&K(r)})}}function G(){const t=k();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function mt(t,e,a){const n=[...a].sort((r,i)=>r.remDays===null?1:i.remDays===null?-1:r.remDays-i.remDays);d.value={title:t,description:e,rows:n,totalQuantity:n.reduce((r,i)=>r+(i.endQty||0),0),totalAmount:n.reduce((r,i)=>r+(i.endAmt||0),0)},$t(()=>{var r;return(r=R.value)==null?void 0:r.focus()})}function N(){d.value=null}function L(t,e,a,n){var u,g,q;const r=t.getElementById(e),i=r&&((g=(u=k())==null?void 0:u.echarts)==null?void 0:g.getInstanceByDom(r));if(!r||!i)return;r.classList.add("drillable-chart");const s=(q=r.closest(".card"))==null?void 0:q.querySelector(".card-title");if(s&&!s.querySelector(".drill-hint")){const p=t.createElement("span");p.className="drill-hint",p.textContent="点击图形查看明细",s.appendChild(p)}const l=p=>{const A=n(p,G());mt(a,A.description,A.rows)};i.on("click",l),V.push(()=>i.off("click",l))}function ht(t){V.splice(0).forEach(e=>e()),L(t,"chart-expiry","效期区间批次明细",(e,a)=>{const n=dt[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(n)}}),L(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(n=>n.category===e.name&&n.consume===0)})),L(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const n=k();let r="";try{const s=n==null?void 0:n.eval("computeCategory(getView())");r=((i=s==null?void 0:s[e.dataIndex])==null?void 0:i.category)??""}catch{r=e.name.split(" ")[0]}return{description:`品类：${r} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(s=>s.category===r&&s.remDays!==null&&s.remDays<=90)}}),L(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(n=>n.supplier===e.name&&n.remDays!==null&&n.remDays<=90)}))}const bt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"]},ft=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function F(){E&&(window.clearTimeout(z),z=window.setTimeout(()=>{E&&(M.value=Math.max(900,Math.ceil(E.scrollHeight)+2))},40))}function gt(t){var a;const e=(a=k())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(n=>{var r,i;n.offsetParent!==null&&((i=(r=e.getInstanceByDom(n))==null?void 0:r.resize)==null||i.call(r))})}function yt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const n=t.createElement("nav");n.className="system-batch-pagination",n.setAttribute("aria-label","批次与效期预警页面");const r=t.createElement("div");r.className="system-batch-tab-list",r.setAttribute("role","tablist"),D.forEach((g,q)=>{const p=t.createElement("button"),A=t.createElement("span");p.id=`embedded-batch-tab-${g.id}`,p.type="button",p.dataset.dashboardView=g.id,p.setAttribute("role","tab"),p.setAttribute("aria-controls",e.id),A.textContent=String(q+1).padStart(2,"0"),p.append(A,t.createTextNode(g.label)),p.addEventListener("click",()=>J(g.id)),r.appendChild(p)});const i=t.createElement("div");i.className="system-batch-page-controls";const s=t.createElement("span");s.dataset.pageStatus="true";const l=t.createElement("button");l.type="button",l.dataset.pageDirection="previous",l.setAttribute("aria-label","上一页"),l.textContent="←",l.addEventListener("click",()=>Z(-1));const u=t.createElement("button");return u.type="button",u.dataset.pageDirection="next",u.setAttribute("aria-label","下一页"),u.textContent="→",u.addEventListener("click",()=>Z(1)),i.append(s,l,u),n.append(r,i),n}function xt(t,e){const a=e.querySelector(":scope > .kpi-row"),n=e.querySelector(":scope > .header"),r=e.querySelector(":scope > .upload-hint"),i=yt(t,e);let s=null;a&&(e.insertBefore(a,e.firstElementChild),s=a),[n,r,i].forEach(l=>{l&&(s?s.after(l):e.insertBefore(l,e.firstElementChild),s=l)})}function wt(t){const e=W.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const s=i.dataset.dashboardView===w.value;i.classList.toggle("active",s),i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(D.length).padStart(2,"0")}`);const n=t.querySelector('[data-page-direction="previous"]'),r=t.querySelector('[data-page-direction="next"]');n&&(n.disabled=e===0),r&&(r.disabled=e===D.length-1)}function Y(t){t.querySelectorAll(ft).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),bt[w.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=w.value,wt(t),requestAnimationFrame(()=>{gt(t),F()})}function J(t){var a;if(w.value===t)return;w.value=t;const e=(a=C.value)==null?void 0:a.contentDocument;e&&Y(e)}function Z(t){const e=W.value+t,a=D[e];a&&J(a.id)}function kt(){var n,r,i,s;v.value=!1,S.value=G().length;const t=(n=C.value)==null?void 0:n.contentDocument;if(!t)return;if(!t.getElementById("system-minimal-theme")){const l=t.createElement("style");l.id="system-minimal-theme",l.textContent=ne,t.head.appendChild(l)}ut(t),X(t),(i=(r=k())==null?void 0:r.renderAll)==null||i.call(r),X(t),ht(t);const e=t.querySelector(".dashboard > section.card:not(.rules-row)");(s=e==null?void 0:e.lastElementChild)==null||s.classList.add("batch-detail-scroll");const a=t.querySelector(".dashboard");a&&(E=a,xt(t,a),Y(t),h==null||h.disconnect(),b==null||b.disconnect(),h=new ResizeObserver(F),b=new MutationObserver(F),h.observe(a),b.observe(a,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(F))}function vt(){v.value=!1,S.value=0}async function St(t){try{await st(t),v.value=!0,S.value=0,d.value=null}catch{}}async function Dt(){try{await lt(),v.value=!0,S.value=0,d.value=null}catch{}}function tt(t){t.key==="Escape"&&d.value&&N()}return At(d,t=>{t?(B=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=B}),Ct(()=>{it(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",tt)}),_t(()=>{ct(),V.splice(0).forEach(t=>t()),h==null||h.disconnect(),b==null||b.disconnect(),E=void 0,window.clearTimeout(z),window.removeEventListener("keydown",tt),document.body.style.overflow=B,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(f(),y(at,null,[o("div",jt,[et(Mt,{title:"批次与效期数据",description:"导入库存 Excel 后，效期区间、呆滞库存和补货建议将按新批次数据重算","file-name":m(_).fileName,"updated-at":m(_).updatedAt,"row-count":S.value||m(_).rowCount,busy:m(nt),custom:m(_).isCustom,error:m(ot),"action-label":"导入库存 Excel","show-template":"",onFile:St,onReset:Dt,onTemplate:m(Rt)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"]),o("div",Ht,[v.value?(f(),y("div",Ot,"正在载入批次与效期预警看板...")):T("",!0),m(P)?(f(),y("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:C,class:"expiry-dashboard-frame",src:m(P),title:"原物料库存批次与效期预警看板",scrolling:"no",style:It({height:`${M.value}px`}),onLoad:kt,onError:vt},null,44,Qt)):T("",!0)])]),(f(),Lt(Tt,{to:"body"},[et(qt,{name:"detail-dialog"},{default:Ft(()=>[d.value?(f(),y("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:zt(N,["self"])},[o("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":rt},[o("header",Ut,[o("div",null,[e[0]||(e[0]=o("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),o("h2",{id:rt},c(d.value.title),1),o("p",null,c(d.value.description),1)]),o("button",{ref_key:"dialogCloseButton",ref:R,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:N}," × ",512)]),o("div",Kt,[o("div",null,[e[1]||(e[1]=o("span",null,"命中记录",-1)),o("strong",null,c(d.value.rows.length),1),e[2]||(e[2]=o("small",null,"条",-1))]),o("div",null,[e[3]||(e[3]=o("span",null,"库存数量",-1)),o("strong",null,c(j(d.value.totalQuantity)),1),e[4]||(e[4]=o("small",null,"KG",-1))]),o("div",null,[e[5]||(e[5]=o("span",null,"库存金额",-1)),o("strong",null,c(H(d.value.totalAmount)),1),e[6]||(e[6]=o("small",null,"元",-1))])]),o("div",Xt,[o("table",Gt,[e[8]||(e[8]=o("thead",null,[o("tr",null,[o("th",null,"物料编码"),o("th",null,"物料描述"),o("th",null,"批次"),o("th",null,"品类"),o("th",null,"供应商"),o("th",{class:"number-cell"},"库存数量"),o("th",{class:"number-cell"},"库存金额"),o("th",null,"生产日期"),o("th",null,"到期日期"),o("th",{class:"number-cell"},"剩余天数"),o("th",null,"建议动作")])],-1)),o("tbody",null,[(f(!0),y(at,null,Bt(d.value.rows,(a,n)=>(f(),y("tr",{key:`${a.mat}-${a.batch}-${n}`},[o("td",Yt,c(a.mat||"—"),1),o("td",Jt,c(a.sku||"—"),1),o("td",Zt,c(a.batch||"—"),1),o("td",null,c(a.category||"未知"),1),o("td",null,c(a.supplier||"未知"),1),o("td",te,c(j(a.endQty)),1),o("td",ee,c(H(a.endAmt)),1),o("td",null,c(a.prodDate||"—"),1),o("td",null,c(a.expDate||"—"),1),o("td",ae,[o("span",{class:Vt(["days-value",pt(a.remDays)])},c(a.remDays??"—"),3)]),o("td",null,c(a.action||"—"),1)]))),128)),d.value.rows.length===0?(f(),y("tr",re,[...e[7]||(e[7]=[o("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):T("",!0)])])])])],32)):T("",!0)]),_:1})]))],64))}}),ue=Pt(oe,[["__scopeId","data-v-6f86fc38"]]);export{ue as default};
