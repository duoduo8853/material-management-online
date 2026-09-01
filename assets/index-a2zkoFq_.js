import{d as Et,r as m,g as R,f as Ct,h as _t,o as g,c as x,a as o,t as d,k as T,j as it,B as At,y as Lt,i as Tt,C as qt,D as Bt,T as Ft,F as st,J as zt,z as j,w as It,m as Vt,p as Mt,n as Nt,u as $t}from"./index-BWQYnkv-.js";import{u as Rt,e as jt}from"./useInventoryWorkbookSource-B-jJh3mH.js";import{_ as Ht}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xlsx-CuKvrqns.js";import"./businessDataStore-Bz5EoNTU.js";const Ot={class:"page-container expiry-dashboard-page"},Pt={class:"dashboard-frame-shell"},Qt={key:0,class:"frame-loading"},Ut=["src","title"],Wt={class:"detail-dialog-header"},Kt={class:"detail-dialog-summary"},Xt={class:"detail-dialog-table-wrap"},Gt={class:"detail-dialog-table"},Jt={class:"code-cell"},Yt={class:"material-cell"},Zt={class:"code-cell"},te={class:"number-cell"},ee={class:"number-cell"},ae={class:"number-cell"},re={key:0},lt="chart-detail-dialog-title",H=1.1,ne=`
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
`,oe=Et({__name:"index",setup(ie){const D=m(!0),E=m(),O=m(900),b=m("risk"),u=m(null),P=m(),q=m(0),B=zt();$t();function F(t){return t==="material"?"material":"raw"}const z=m(F(B.params.type)),Q=j(()=>z.value==="raw"?"原料":"物料"),I=m([]),v=j(()=>[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"}]),U=j(()=>v.value.findIndex(t=>t.id===b.value));let h,f,k,V,M="";const N=[],{sourceUrl:W,initialize:ct,setMaterialType:dt,dispose:pt}=Rt({initialMaterialType:F(B.params.type)}),ut={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function K(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function X(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function mt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function w(){var t;return(t=E.value)==null?void 0:t.contentWindow}function G(t){return t<=0?t:Math.max(Math.round(t*H),Math.ceil(t+1))}function J(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${G(Number(a))}px`)}function Y(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=J(r.fontSize))}const a=e.cssRules;a&&Y(a)})}function bt(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(H)&&(Array.from(t.styleSheets).forEach(a=>{try{Y(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=J(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(H))}function C(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return G(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const n=[];return a.set(t,n),t.forEach(i=>n.push(C(i,"",a))),n}const r={};return a.set(t,r),Object.entries(t).forEach(([n,i])=>{r[n]=C(i,n,a)}),r}function Z(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(n,...i)=>{e(C(n),...i)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(C(a))}function tt(t){var a;const e=(a=w())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...n)=>{const i=r(...n);return Z(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const n=e.getInstanceByDom(r);n&&Z(n)})}}function et(){const t=w();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function ht(t,e,a){const r=[...a].sort((n,i)=>n.remDays===null?1:i.remDays===null?-1:n.remDays-i.remDays);u.value={title:t,description:e,rows:r,totalQuantity:r.reduce((n,i)=>n+(i.endQty||0),0),totalAmount:r.reduce((n,i)=>n+(i.endAmt||0),0)},Nt(()=>{var n;return(n=P.value)==null?void 0:n.focus()})}function $(){u.value=null}function _(t,e,a,r){var c,y,L;const n=t.getElementById(e),i=n&&((y=(c=w())==null?void 0:c.echarts)==null?void 0:y.getInstanceByDom(n));if(!n||!i)return;n.classList.add("drillable-chart");const s=(L=n.closest(".card"))==null?void 0:L.querySelector(".card-title");if(s&&!s.querySelector(".drill-hint")){const p=t.createElement("span");p.className="drill-hint",p.textContent="点击图形查看明细",s.appendChild(p)}const l=p=>{const S=r(p,et());ht(a,S.description,S.rows)};i.on("click",l),N.push(()=>i.off("click",l))}function ft(t){N.splice(0).forEach(e=>e()),_(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=ut[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),_(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),_(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const r=w();let n="";try{const s=r==null?void 0:r.eval("computeCategory(getView())");n=((i=s==null?void 0:s[e.dataIndex])==null?void 0:i.category)??""}catch{n=e.name.split(" ")[0]}return{description:`品类：${n} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(s=>s.category===n&&s.remDays!==null&&s.remDays<=90)}}),_(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)}))}const gt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > .replenishment-row",".dashboard > .rules-row"]},yt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > .replenishment-row",".dashboard > .rules-row"].join(", ");function A(){k&&(window.clearTimeout(V),V=window.setTimeout(()=>{k&&(O.value=Math.max(1200,Math.ceil(k.scrollHeight)+2))},40))}function xt(t){var a;const e=(a=w())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var n,i;r.offsetParent!==null&&((i=(n=e.getInstanceByDom(r))==null?void 0:n.resize)==null||i.call(n))})}function vt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const n=t.createElement("div");n.className="system-batch-tab-list",n.setAttribute("role","tablist"),v.value.forEach((y,L)=>{const p=t.createElement("button"),S=t.createElement("span");p.id=`embedded-batch-tab-${y.id}`,p.type="button",p.dataset.dashboardView=y.id,p.setAttribute("role","tab"),p.setAttribute("aria-controls",e.id),S.textContent=String(L+1).padStart(2,"0"),p.append(S,t.createTextNode(y.label)),p.addEventListener("click",()=>rt(y.id)),n.appendChild(p)});const i=t.createElement("div");i.className="system-batch-page-controls";const s=t.createElement("span");s.dataset.pageStatus="true";const l=t.createElement("button");l.type="button",l.dataset.pageDirection="previous",l.setAttribute("aria-label","上一页"),l.textContent="←",l.addEventListener("click",()=>nt(-1));const c=t.createElement("button");return c.type="button",c.dataset.pageDirection="next",c.setAttribute("aria-label","下一页"),c.textContent="→",c.addEventListener("click",()=>nt(1)),i.append(s,l,c),r.append(n,i),r}function wt(t,e){const a=e.querySelector(":scope > .kpi-row-overview"),r=e.querySelector(":scope > .kpi-row-risk"),n=e.querySelector(":scope > .header"),i=e.querySelector(":scope > .upload-hint"),s=vt(t,e);let l=null;a&&(e.insertBefore(a,e.firstElementChild),l=a),r&&(l?l.after(r):e.insertBefore(r,e.firstElementChild),l=r),[n,i,s].forEach(c=>{c&&(l?l.after(c):e.insertBefore(c,e.firstElementChild),l=c)})}function kt(t){const e=U.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const s=i.dataset.dashboardView===b.value;i.classList.toggle("active",s),i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(v.value.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),n=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),n&&(n.disabled=e===v.value.length-1)}function at(t){t.querySelectorAll(yt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),gt[b.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=b.value,kt(t),requestAnimationFrame(()=>{xt(t),A()})}function rt(t){var a;if(b.value===t)return;b.value=t;const e=(a=E.value)==null?void 0:a.contentDocument;e&&at(e)}function nt(t){const e=U.value+t,a=v.value[e];a&&rt(a.id)}function St(){var n,i,s,l;D.value=!1;const t=et();q.value=t.length,I.value=t,jt(I.value);const e=(n=E.value)==null?void 0:n.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const c=e.createElement("style");c.id="system-minimal-theme",c.textContent=ne,e.head.appendChild(c)}bt(e),tt(e),(s=(i=w())==null?void 0:i.renderAll)==null||s.call(i),tt(e),ft(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(l=a==null?void 0:a.lastElementChild)==null||l.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&(k=r,wt(e,r),at(e),h==null||h.disconnect(),f==null||f.disconnect(),h=new ResizeObserver(A),f=new MutationObserver(A),h.observe(r),f.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(A))}function Dt(){D.value=!1,q.value=0,I.value=[]}function ot(t){t.key==="Escape"&&u.value&&$()}return R(u,t=>{t?(M=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=M}),R(()=>B.params.type,t=>{const e=F(t);z.value!==e&&(z.value=e,D.value=!0,q.value=0,u.value=null,dt(e))}),R(v,t=>{t.some(e=>e.id===b.value)||(b.value="risk")}),Ct(()=>{ct(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",ot)}),_t(()=>{pt(),N.splice(0).forEach(t=>t()),h==null||h.disconnect(),f==null||f.disconnect(),k=void 0,window.clearTimeout(V),window.removeEventListener("keydown",ot),document.body.style.overflow=M,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(g(),x(st,null,[o("div",Ot,[o("div",Pt,[D.value?(g(),x("div",Qt,"正在载入"+d(Q.value)+"批次与效期预警看板...",1)):T("",!0),it(W)?(g(),x("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:E,class:"expiry-dashboard-frame",src:it(W),title:`${Q.value}批次与效期预警看板`,scrolling:"no",style:At({height:`${O.value}px`}),onLoad:St,onError:Dt},null,44,Ut)):T("",!0)])]),(g(),Lt(Ft,{to:"body"},[Tt(Bt,{name:"detail-dialog"},{default:qt(()=>[u.value?(g(),x("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:It($,["self"])},[o("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":lt},[o("header",Wt,[o("div",null,[e[0]||(e[0]=o("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),o("h2",{id:lt},d(u.value.title),1),o("p",null,d(u.value.description),1)]),o("button",{ref_key:"dialogCloseButton",ref:P,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:$}," × ",512)]),o("div",Kt,[o("div",null,[e[1]||(e[1]=o("span",null,"命中记录",-1)),o("strong",null,d(u.value.rows.length),1),e[2]||(e[2]=o("small",null,"条",-1))]),o("div",null,[e[3]||(e[3]=o("span",null,"库存数量",-1)),o("strong",null,d(K(u.value.totalQuantity)),1),e[4]||(e[4]=o("small",null,"KG",-1))]),o("div",null,[e[5]||(e[5]=o("span",null,"库存金额",-1)),o("strong",null,d(X(u.value.totalAmount)),1),e[6]||(e[6]=o("small",null,"元",-1))])]),o("div",Xt,[o("table",Gt,[e[8]||(e[8]=o("thead",null,[o("tr",null,[o("th",null,"物料编码"),o("th",null,"物料描述"),o("th",null,"批次"),o("th",null,"品类"),o("th",null,"供应商"),o("th",{class:"number-cell"},"库存数量"),o("th",{class:"number-cell"},"库存金额"),o("th",null,"生产日期"),o("th",null,"到期日期"),o("th",{class:"number-cell"},"剩余天数"),o("th",null,"建议动作")])],-1)),o("tbody",null,[(g(!0),x(st,null,Vt(u.value.rows,(a,r)=>(g(),x("tr",{key:`${a.mat}-${a.batch}-${r}`},[o("td",Jt,d(a.mat||"—"),1),o("td",Yt,d(a.sku||"—"),1),o("td",Zt,d(a.batch||"—"),1),o("td",null,d(a.category||"未知"),1),o("td",null,d(a.supplier||"未知"),1),o("td",te,d(K(a.endQty)),1),o("td",ee,d(X(a.endAmt)),1),o("td",null,d(a.prodDate||"—"),1),o("td",null,d(a.expDate||"—"),1),o("td",ae,[o("span",{class:Mt(["days-value",mt(a.remDays)])},d(a.remDays??"—"),3)]),o("td",null,d(a.action||"—"),1)]))),128)),u.value.rows.length===0?(g(),x("tr",re,[...e[7]||(e[7]=[o("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):T("",!0)])])])])],32)):T("",!0)]),_:1})]))],64))}}),ue=Ht(oe,[["__scopeId","data-v-56a43e1d"]]);export{ue as default};
