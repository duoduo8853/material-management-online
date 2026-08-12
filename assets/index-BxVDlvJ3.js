import{d as St,s as _t,f as Et,g as Ct,o as c,c as h,a as r,x as at,h as u,F as B,j as rt,n as nt,t as l,k as At,i as F,z as It,m as Ft,A as Tt,B as Lt,T as zt,r as f,p as Vt,w as Bt,q as qt}from"./index-CFBOcln8.js";import{W as $t}from"./WorkbookImportPanel-kHfGUaUV.js";import{d as Nt,u as Mt}from"./useInventoryWorkbookSource-DwBT4JbQ.js";import{_ as Rt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./businessDataStore-KowC_G3t.js";const Wt={class:"page-container expiry-dashboard-page"},jt={class:"batch-pagination","aria-label":"批次与效期预警页面"},Ht={class:"batch-tab-list",role:"tablist"},Ot=["id","aria-selected","onClick"],Pt={class:"batch-page-controls"},Qt=["disabled"],Ut=["disabled"],Kt={class:"dashboard-frame-shell"},Gt={key:0,class:"frame-loading"},Yt=["src"],Jt={class:"detail-dialog-header"},Xt={class:"detail-dialog-summary"},Zt={class:"detail-dialog-table-wrap"},te={class:"detail-dialog-table"},ee={class:"code-cell"},ae={class:"material-cell"},re={class:"code-cell"},ne={class:"number-cell"},oe={class:"number-cell"},ie={class:"number-cell"},le={key:0},ot="chart-detail-dialog-title",q=1.1,se=`
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
`,de=St({__name:"index",setup(ce){const k=f(!0),D=f(),$=f(900),b=f("risk"),s=f(null),N=f(),w=f(0),S=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"补货预警"}],_=Vt(()=>S.findIndex(t=>t.id===b.value));let p,m,x,T,L="";const z=[],{sourceUrl:M,sourceMeta:E,importing:it,importError:lt,initialize:st,importFile:dt,reset:ct,dispose:ut}=Mt(),pt={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function R(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function W(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function mt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function y(){var t;return(t=D.value)==null?void 0:t.contentWindow}function j(t){return t<=0?t:Math.max(Math.round(t*q),Math.ceil(t+1))}function H(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${j(Number(a))}px`)}function O(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const o=e.style;o.fontSize&&(o.fontSize=H(o.fontSize))}const a=e.cssRules;a&&O(a)})}function ht(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(q)&&(Array.from(t.styleSheets).forEach(a=>{try{O(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=H(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(q))}function C(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return j(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const n=[];return a.set(t,n),t.forEach(i=>n.push(C(i,"",a))),n}const o={};return a.set(t,o),Object.entries(t).forEach(([n,i])=>{o[n]=C(i,n,a)}),o}function P(t){var o;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(n,...i)=>{e(C(n),...i)},t.__systemFontScaleApplied=!0;const a=(o=t.getOption)==null?void 0:o.call(t);a&&e(C(a))}function Q(t){var a;const e=(a=y())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const o=e.init.bind(e);e.init=(...n)=>{const i=o(...n);return P(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(o=>{const n=e.getInstanceByDom(o);n&&P(n)})}}function U(){const t=y();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function bt(t,e,a){const o=[...a].sort((n,i)=>n.remDays===null?1:i.remDays===null?-1:n.remDays-i.remDays);s.value={title:t,description:e,rows:o,totalQuantity:o.reduce((n,i)=>n+(i.endQty||0),0),totalAmount:o.reduce((n,i)=>n+(i.endAmt||0),0)},qt(()=>{var n;return(n=N.value)==null?void 0:n.focus()})}function V(){s.value=null}function A(t,e,a,o){var X,Z,tt;const n=t.getElementById(e),i=n&&((Z=(X=y())==null?void 0:X.echarts)==null?void 0:Z.getInstanceByDom(n));if(!n||!i)return;n.classList.add("drillable-chart");const d=(tt=n.closest(".card"))==null?void 0:tt.querySelector(".card-title");if(d&&!d.querySelector(".drill-hint")){const v=t.createElement("span");v.className="drill-hint",v.textContent="点击图形查看明细",d.appendChild(v)}const g=v=>{const et=o(v,U());bt(a,et.description,et.rows)};i.on("click",g),z.push(()=>i.off("click",g))}function ft(t){z.splice(0).forEach(e=>e()),A(t,"chart-expiry","效期区间批次明细",(e,a)=>{const o=pt[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(o)}}),A(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(o=>o.category===e.name&&o.consume===0)})),A(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const o=y();let n="";try{const d=o==null?void 0:o.eval("computeCategory(getView())");n=((i=d==null?void 0:d[e.dataIndex])==null?void 0:i.category)??""}catch{n=e.name.split(" ")[0]}return{description:`品类：${n} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(d=>d.category===n&&d.remDays!==null&&d.remDays<=90)}}),A(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(o=>o.supplier===e.name&&o.remDays!==null&&o.remDays<=90)}))}const yt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"]},gt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"].join(", ");function I(){x&&(window.clearTimeout(T),T=window.setTimeout(()=>{x&&($.value=Math.max(900,Math.ceil(x.scrollHeight)+2))},40))}function kt(t){var a;const e=(a=y())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(o=>{var n,i;o.offsetParent!==null&&((i=(n=e.getInstanceByDom(o))==null?void 0:n.resize)==null||i.call(n))})}function K(t){t.querySelectorAll(gt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),yt[b.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=b.value,requestAnimationFrame(()=>{kt(t),I()})}function G(t){var a;if(b.value===t)return;b.value=t;const e=(a=D.value)==null?void 0:a.contentDocument;e&&K(e)}function Y(t){const e=_.value+t,a=S[e];a&&G(a.id)}function wt(){var o,n,i,d;k.value=!1,w.value=U().length;const t=(o=D.value)==null?void 0:o.contentDocument;if(!t)return;if(!t.getElementById("system-minimal-theme")){const g=t.createElement("style");g.id="system-minimal-theme",g.textContent=se,t.head.appendChild(g)}ht(t),Q(t),(i=(n=y())==null?void 0:n.renderAll)==null||i.call(n),Q(t),ft(t);const e=t.querySelector(".dashboard > section.card:not(.rules-row)");(d=e==null?void 0:e.lastElementChild)==null||d.classList.add("batch-detail-scroll");const a=t.querySelector(".dashboard");a&&(x=a,K(t),p==null||p.disconnect(),m==null||m.disconnect(),p=new ResizeObserver(I),m=new MutationObserver(I),p.observe(a),m.observe(a,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(I))}function xt(){k.value=!1,w.value=0}async function vt(t){try{await dt(t),k.value=!0,w.value=0,s.value=null}catch{}}async function Dt(){try{await ct(),k.value=!0,w.value=0,s.value=null}catch{}}function J(t){t.key==="Escape"&&s.value&&V()}return _t(s,t=>{t?(L=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=L}),Et(()=>{st(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",J)}),Ct(()=>{ut(),z.splice(0).forEach(t=>t()),p==null||p.disconnect(),m==null||m.disconnect(),x=void 0,window.clearTimeout(T),window.removeEventListener("keydown",J),document.body.style.overflow=L,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(c(),h(B,null,[r("div",Wt,[at($t,{title:"批次与效期数据",description:"导入库存 Excel 后，效期区间、呆滞库存和补货建议将按新批次数据重算","file-name":u(E).fileName,"updated-at":u(E).updatedAt,"row-count":w.value||u(E).rowCount,busy:u(it),custom:u(E).isCustom,error:u(lt),"action-label":"导入库存 Excel","show-template":"",onFile:vt,onReset:Dt,onTemplate:u(Nt)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"]),r("nav",jt,[r("div",Ht,[(c(),h(B,null,rt(S,(a,o)=>r("button",{id:`batch-tab-${a.id}`,key:a.id,type:"button",role:"tab","aria-controls":"expiry-dashboard-frame","aria-selected":b.value===a.id,class:nt({active:b.value===a.id}),onClick:n=>G(a.id)},[r("span",null,l(String(o+1).padStart(2,"0")),1),At(" "+l(a.label),1)],10,Ot)),64))]),r("div",Pt,[r("span",null,l(String(_.value+1).padStart(2,"0"))+" / 03",1),r("button",{type:"button","aria-label":"上一页",disabled:_.value===0,onClick:e[0]||(e[0]=a=>Y(-1))},"←",8,Qt),r("button",{type:"button","aria-label":"下一页",disabled:_.value===S.length-1,onClick:e[1]||(e[1]=a=>Y(1))},"→",8,Ut)])]),r("div",Kt,[k.value?(c(),h("div",Gt,"正在载入批次与效期预警看板...")):F("",!0),u(M)?(c(),h("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:D,class:"expiry-dashboard-frame",src:u(M),title:"原物料库存批次与效期预警看板",scrolling:"no",style:It({height:`${$.value}px`}),onLoad:wt,onError:xt},null,44,Yt)):F("",!0)])]),(c(),Ft(zt,{to:"body"},[at(Lt,{name:"detail-dialog"},{default:Tt(()=>[s.value?(c(),h("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:Bt(V,["self"])},[r("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":ot},[r("header",Jt,[r("div",null,[e[2]||(e[2]=r("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),r("h2",{id:ot},l(s.value.title),1),r("p",null,l(s.value.description),1)]),r("button",{ref_key:"dialogCloseButton",ref:N,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:V}," × ",512)]),r("div",Xt,[r("div",null,[e[3]||(e[3]=r("span",null,"命中记录",-1)),r("strong",null,l(s.value.rows.length),1),e[4]||(e[4]=r("small",null,"条",-1))]),r("div",null,[e[5]||(e[5]=r("span",null,"库存数量",-1)),r("strong",null,l(R(s.value.totalQuantity)),1),e[6]||(e[6]=r("small",null,"KG",-1))]),r("div",null,[e[7]||(e[7]=r("span",null,"库存金额",-1)),r("strong",null,l(W(s.value.totalAmount)),1),e[8]||(e[8]=r("small",null,"元",-1))])]),r("div",Zt,[r("table",te,[e[10]||(e[10]=r("thead",null,[r("tr",null,[r("th",null,"物料编码"),r("th",null,"物料描述"),r("th",null,"批次"),r("th",null,"品类"),r("th",null,"供应商"),r("th",{class:"number-cell"},"库存数量"),r("th",{class:"number-cell"},"库存金额"),r("th",null,"生产日期"),r("th",null,"到期日期"),r("th",{class:"number-cell"},"剩余天数"),r("th",null,"建议动作")])],-1)),r("tbody",null,[(c(!0),h(B,null,rt(s.value.rows,(a,o)=>(c(),h("tr",{key:`${a.mat}-${a.batch}-${o}`},[r("td",ee,l(a.mat||"—"),1),r("td",ae,l(a.sku||"—"),1),r("td",re,l(a.batch||"—"),1),r("td",null,l(a.category||"未知"),1),r("td",null,l(a.supplier||"未知"),1),r("td",ne,l(R(a.endQty)),1),r("td",oe,l(W(a.endAmt)),1),r("td",null,l(a.prodDate||"—"),1),r("td",null,l(a.expDate||"—"),1),r("td",ie,[r("span",{class:nt(["days-value",mt(a.remDays)])},l(a.remDays??"—"),3)]),r("td",null,l(a.action||"—"),1)]))),128)),s.value.rows.length===0?(c(),h("tr",le,[...e[9]||(e[9]=[r("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):F("",!0)])])])])],32)):F("",!0)]),_:1})]))],64))}}),fe=Rt(de,[["__scopeId","data-v-aa0d21b4"]]);export{fe as default};
