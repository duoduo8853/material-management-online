import{d as ut,q as pt,f as mt,g as ht,o as p,c as h,a as r,F as T,h as J,n as X,t as l,j as bt,i as L,x as ft,l as gt,y as yt,z as kt,A as xt,T as wt,r as g,m as vt,w as Dt,p as _t}from"./index-DlvxJ2wP.js";import{_ as St}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ct={class:"page-container expiry-dashboard-page"},Et={class:"batch-pagination","aria-label":"批次与效期预警页面"},At={class:"batch-tab-list",role:"tablist"},Ft=["id","aria-selected","onClick"],Tt={class:"batch-page-controls"},Lt=["disabled"],Vt=["disabled"],It={class:"dashboard-frame-shell"},zt={key:0,class:"frame-loading"},$t={class:"detail-dialog-header"},qt={class:"detail-dialog-summary"},Bt={class:"detail-dialog-table-wrap"},Nt={class:"detail-dialog-table"},Mt={class:"code-cell"},Rt={class:"material-cell"},jt={class:"code-cell"},Ht={class:"number-cell"},Ot={class:"number-cell"},Qt={class:"number-cell"},Pt={key:0},Z="chart-detail-dialog-title",V=1.1,Ut=`
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
  .dashboard > .card,
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
  }
`,Wt=ut({__name:"index",setup(Kt){const tt="./raw-material-expiry-dashboard.html",I=g(!0),x=g(),z=g(900),m=g("risk"),d=g(null),$=g(),w=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"补货预警"}],v=vt(()=>w.findIndex(t=>t.id===m.value));let c,u,y,C,E="";const A=[],et={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function q(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function B(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function at(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function b(){var t;return(t=x.value)==null?void 0:t.contentWindow}function N(t){return t<=0?t:Math.max(Math.round(t*V),Math.ceil(t+1))}function M(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${N(Number(a))}px`)}function R(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const i=e.style;i.fontSize&&(i.fontSize=M(i.fontSize))}const a=e.cssRules;a&&R(a)})}function rt(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(V)&&(Array.from(t.styleSheets).forEach(a=>{try{R(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=M(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(V))}function D(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return N(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const n=[];return a.set(t,n),t.forEach(o=>n.push(D(o,"",a))),n}const i={};return a.set(t,i),Object.entries(t).forEach(([n,o])=>{i[n]=D(o,n,a)}),i}function j(t){var i;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(n,...o)=>{e(D(n),...o)},t.__systemFontScaleApplied=!0;const a=(i=t.getOption)==null?void 0:i.call(t);a&&e(D(a))}function H(t){var a;const e=(a=b())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const i=e.init.bind(e);e.init=(...n)=>{const o=i(...n);return j(o),o},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(i=>{const n=e.getInstanceByDom(i);n&&j(n)})}}function nt(){const t=b();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function it(t,e,a){const i=[...a].sort((n,o)=>n.remDays===null?1:o.remDays===null?-1:n.remDays-o.remDays);d.value={title:t,description:e,rows:i,totalQuantity:i.reduce((n,o)=>n+(o.endQty||0),0),totalAmount:i.reduce((n,o)=>n+(o.endAmt||0),0)},_t(()=>{var n;return(n=$.value)==null?void 0:n.focus()})}function F(){d.value=null}function _(t,e,a,i){var W,K,G;const n=t.getElementById(e),o=n&&((K=(W=b())==null?void 0:W.echarts)==null?void 0:K.getInstanceByDom(n));if(!n||!o)return;n.classList.add("drillable-chart");const s=(G=n.closest(".card"))==null?void 0:G.querySelector(".card-title");if(s&&!s.querySelector(".drill-hint")){const k=t.createElement("span");k.className="drill-hint",k.textContent="点击图形查看明细",s.appendChild(k)}const f=k=>{const Y=i(k,nt());it(a,Y.description,Y.rows)};o.on("click",f),A.push(()=>o.off("click",f))}function ot(t){A.splice(0).forEach(e=>e()),_(t,"chart-expiry","效期区间批次明细",(e,a)=>{const i=et[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(i)}}),_(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(i=>i.category===e.name&&i.consume===0)})),_(t,"chart-category","品类风险批次明细",(e,a)=>{var o;const i=b();let n="";try{const s=i==null?void 0:i.eval("computeCategory(getView())");n=((o=s==null?void 0:s[e.dataIndex])==null?void 0:o.category)??""}catch{n=e.name.split(" ")[0]}return{description:`品类：${n} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(s=>s.category===n&&s.remDays!==null&&s.remDays<=90)}}),_(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(i=>i.supplier===e.name&&i.remDays!==null&&i.remDays<=90)}))}const lt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"]},st=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"].join(", ");function S(){y&&(window.clearTimeout(C),C=window.setTimeout(()=>{y&&(z.value=Math.max(900,Math.ceil(y.scrollHeight)+2))},40))}function dt(t){var a;const e=(a=b())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(i=>{var n,o;i.offsetParent!==null&&((o=(n=e.getInstanceByDom(i))==null?void 0:n.resize)==null||o.call(n))})}function O(t){t.querySelectorAll(st).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),lt[m.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=m.value,requestAnimationFrame(()=>{dt(t),S()})}function Q(t){var a;if(m.value===t)return;m.value=t;const e=(a=x.value)==null?void 0:a.contentDocument;e&&O(e)}function P(t){const e=v.value+t,a=w[e];a&&Q(a.id)}function ct(){var i,n,o,s;I.value=!1;const t=(i=x.value)==null?void 0:i.contentDocument;if(!t)return;if(!t.getElementById("system-minimal-theme")){const f=t.createElement("style");f.id="system-minimal-theme",f.textContent=Ut,t.head.appendChild(f)}rt(t),H(t),(o=(n=b())==null?void 0:n.renderAll)==null||o.call(n),H(t),ot(t);const e=t.querySelector(".dashboard > section.card:not(.rules-row)");(s=e==null?void 0:e.lastElementChild)==null||s.classList.add("batch-detail-scroll");const a=t.querySelector(".dashboard");a&&(y=a,O(t),c==null||c.disconnect(),u==null||u.disconnect(),c=new ResizeObserver(S),u=new MutationObserver(S),c.observe(a),u.observe(a,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(S))}function U(t){t.key==="Escape"&&d.value&&F()}return pt(d,t=>{t?(E=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=E}),mt(()=>{document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",U)}),ht(()=>{A.splice(0).forEach(t=>t()),c==null||c.disconnect(),u==null||u.disconnect(),y=void 0,window.clearTimeout(C),window.removeEventListener("keydown",U),document.body.style.overflow=E,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(p(),h(T,null,[r("div",Ct,[r("nav",Et,[r("div",At,[(p(),h(T,null,J(w,(a,i)=>r("button",{id:`batch-tab-${a.id}`,key:a.id,type:"button",role:"tab","aria-controls":"expiry-dashboard-frame","aria-selected":m.value===a.id,class:X({active:m.value===a.id}),onClick:n=>Q(a.id)},[r("span",null,l(String(i+1).padStart(2,"0")),1),bt(" "+l(a.label),1)],10,Ft)),64))]),r("div",Tt,[r("span",null,l(String(v.value+1).padStart(2,"0"))+" / 03",1),r("button",{type:"button","aria-label":"上一页",disabled:v.value===0,onClick:e[0]||(e[0]=a=>P(-1))},"←",8,Lt),r("button",{type:"button","aria-label":"下一页",disabled:v.value===w.length-1,onClick:e[1]||(e[1]=a=>P(1))},"→",8,Vt)])]),r("div",It,[I.value?(p(),h("div",zt,"正在载入批次与效期预警看板...")):L("",!0),r("iframe",{id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:x,class:"expiry-dashboard-frame",src:tt,title:"原物料库存批次与效期预警看板",scrolling:"no",style:ft({height:`${z.value}px`}),onLoad:ct},null,36)])]),(p(),gt(wt,{to:"body"},[yt(xt,{name:"detail-dialog"},{default:kt(()=>[d.value?(p(),h("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:Dt(F,["self"])},[r("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":Z},[r("header",$t,[r("div",null,[e[2]||(e[2]=r("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),r("h2",{id:Z},l(d.value.title),1),r("p",null,l(d.value.description),1)]),r("button",{ref_key:"dialogCloseButton",ref:$,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:F}," × ",512)]),r("div",qt,[r("div",null,[e[3]||(e[3]=r("span",null,"命中记录",-1)),r("strong",null,l(d.value.rows.length),1),e[4]||(e[4]=r("small",null,"条",-1))]),r("div",null,[e[5]||(e[5]=r("span",null,"库存数量",-1)),r("strong",null,l(q(d.value.totalQuantity)),1),e[6]||(e[6]=r("small",null,"KG",-1))]),r("div",null,[e[7]||(e[7]=r("span",null,"库存金额",-1)),r("strong",null,l(B(d.value.totalAmount)),1),e[8]||(e[8]=r("small",null,"元",-1))])]),r("div",Bt,[r("table",Nt,[e[10]||(e[10]=r("thead",null,[r("tr",null,[r("th",null,"物料编码"),r("th",null,"物料描述"),r("th",null,"批次"),r("th",null,"品类"),r("th",null,"供应商"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"生产日期"),r("th",null,"到期日期"),r("th",{class:"number-cell"},"剩余天数"),r("th",null,"建议动作")])],-1)),r("tbody",null,[(p(!0),h(T,null,J(d.value.rows,(a,i)=>(p(),h("tr",{key:`${a.mat}-${a.batch}-${i}`},[r("td",Mt,l(a.mat||"—"),1),r("td",Rt,l(a.sku||"—"),1),r("td",jt,l(a.batch||"—"),1),r("td",null,l(a.category||"未知"),1),r("td",null,l(a.supplier||"未知"),1),r("td",Ht,l(q(a.endQty)),1),r("td",Ot,l(B(a.endAmt)),1),r("td",null,l(a.prodDate||"—"),1),r("td",null,l(a.expDate||"—"),1),r("td",Qt,[r("span",{class:X(["days-value",at(a.remDays)])},l(a.remDays??"—"),3)]),r("td",null,l(a.action||"—"),1)]))),128)),d.value.rows.length===0?(p(),h("tr",Pt,[...e[9]||(e[9]=[r("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):L("",!0)])])])])],32)):L("",!0)]),_:1})]))],64))}}),Jt=St(Wt,[["__scopeId","data-v-e2a7c642"]]);export{Jt as default};
