import{d as ee,y as ae,f as ne,g as re,o as h,c as f,a as n,F as $,j as X,n as U,t as s,z as xt,h as D,i as B,B as oe,p as ie,C as se,D as le,T as ce,r as k,q as R,w as de,x as ue}from"./index-0ACv8Xwg.js";import{W as pe}from"./WorkbookImportPanel-DJqkNf16.js";import{u as me,d as he}from"./useInventoryWorkbookSource-BCxtuT8l.js";import{g as be,r as fe,n as kt,s as ge,a as ye,u as ve}from"./businessDataStore-CrP9RR4_.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";function N(u){return String(u??"").replace(/\s+/g," ").trim()}const we={blendingCode:["调配液料号","调配液编码","调配液代码"],blendingName:["调配液","调配液名称","调配液描述"],materialCode:["物料","物料编码","物料号","料号"],materialName:["物料描述","物料名称"],flavor:["口味","风味","产品口味","品味"]};function G(u){return N(u).toLocaleLowerCase("zh-CN").replace(/[（）()【】[\]·:：/\\_\-\s]/g,"")}function ke(u){const m=u.map(G),p={};return Object.entries(we).forEach(([S,y])=>{const c=y.map(G),d=m.findIndex(g=>c.includes(g));d>=0&&(p[S]=d)}),p}function Se(u){const m=ye(u,{type:"array",cellDates:!0}),p=[];return m.SheetNames.forEach(S=>{const y=m.Sheets[S];if(!y)return;const c=ve.sheet_to_json(y,{header:1,defval:"",raw:!0});let d=null;for(let g=0;g<Math.min(c.length,20);g++){const v=ke(c[g]);if(v.materialCode!==void 0&&v.flavor!==void 0){d=v;break}}if(d)for(let g=0;g<c.length;g++){const v=c[g];if(d.materialCode===void 0)continue;const F=N(v[d.materialCode]);!F||G(F)===G("物料")||p.push({blendingCode:d.blendingCode!==void 0?N(v[d.blendingCode]):"",blendingName:d.blendingName!==void 0?N(v[d.blendingName]):"",materialCode:F,materialName:d.materialName!==void 0?N(v[d.materialName]):"",flavor:d.flavor!==void 0?N(v[d.flavor]):""})}}),p}function De(u){const m=new Map;return u.forEach(p=>{if(!p.materialCode)return;const S=m.get(p.materialCode)||[],y={flavor:p.flavor,blendingName:p.blendingName};S.some(d=>d.flavor===y.flavor&&d.blendingName===y.blendingName)||S.push(y),m.set(p.materialCode,S)}),m}async function _e(u){if(!/\.xlsx?$/i.test(u.name))throw new Error("请选择 XLS 或 XLSX 格式的 BOM 文件");const m=Se(await u.arrayBuffer());if(!m.length)throw new Error('BOM 文件中没有找到有效记录，请检查是否包含"物料"和"口味"列');const p={kind:"bom",fileName:u.name,updatedAt:new Date().toISOString(),records:m};return await ge(p),kt("bom"),p}function Ee(){return be("bom")}async function Ce(){await fe("bom"),kt("bom")}function Ae(u){return u?{fileName:u.fileName,updatedAt:u.updatedAt,rowCount:u.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const Be={class:"page-container expiry-dashboard-page"},Ie={class:"material-type-tabs","aria-label":"批次效期预警分类"},Le=["aria-pressed","onClick"],Ne={class:"tab-symbol"},Fe={class:"tab-copy"},Me={class:"bom-panel"},Te={class:"bom-panel-info"},ze={key:0},qe={key:1},$e={key:2,class:"bom-error"},Re={class:"bom-panel-actions"},Ve=["disabled"],Oe={class:"dashboard-frame-shell"},We={key:0,class:"frame-loading"},He=["src","title"],Pe={key:0,class:"flavor-warning-panel"},je={class:"flavor-warning-heading"},Qe={class:"flavor-warning-meta"},Xe={class:"flavor-warning-table-wrap"},Ue={class:"flavor-warning-table"},Ge={class:"flavor-material-cell"},Ke={class:"number-cell"},Ye={class:"number-cell"},Je={class:"flavor-cell"},Ze={class:"detail-dialog-header"},ta={class:"detail-dialog-summary"},ea={class:"detail-dialog-table-wrap"},aa={class:"detail-dialog-table"},na={class:"code-cell"},ra={class:"material-cell"},oa={class:"code-cell"},ia={class:"number-cell"},sa={class:"number-cell"},la={class:"number-cell"},ca={key:0},wt="chart-detail-dialog-title",at=1.1,da=`
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
`,ua=ee({__name:"index",setup(u){const m=k(!0),p=k(),S=k(900),y=k("risk"),c=k(null),d=k(),g=k(0),v=k("raw"),F=[{id:"raw",label:"原料管理",symbol:"原",meta:"RAW MATERIALS"},{id:"material",label:"物料管理",symbol:"物",meta:"PACKAGING & AUX"}],M=R(()=>v.value==="raw"?"原料":"物料"),C=k(null),I=R(()=>Ae(C.value)),V=k(!1),O=k(""),nt=k(null),rt=R(()=>{var t;return De(((t=C.value)==null?void 0:t.records)||[])}),K=k([]);function St(t){return rt.value.get(t)||[]}async function Dt(){try{C.value=await Ee()}catch{C.value=null}}async function _t(t){V.value=!0,O.value="";try{C.value=await _e(t)}catch(a){O.value=a instanceof Error?a.message:"BOM 文件导入失败"}finally{V.value=!1}}async function Et(){try{await Ce(),C.value=null}catch{}}function Ct(){var t;(t=nt.value)==null||t.click()}async function At(t){var r;const a=t.target,e=(r=a.files)==null?void 0:r[0];e&&(await _t(e),a.value="")}async function Bt(t){v.value!==t&&(v.value=t,m.value=!0,g.value=0,c.value=null,await $t(t))}function ot(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function It(t){const a=ot(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[a]||"—"}function Lt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function Nt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const Y=R(()=>{if(!C.value||!rt.value.size)return[];const t=new Set,a=[];for(const e of K.value){if(e.remDays===null||e.remDays>90)continue;const r=St(e.mat);if(r.length===0)continue;const o=`${e.mat}-${e.batch}`;t.has(o)||(t.add(o),a.push({mat:e.mat,sku:e.sku,batch:e.batch,category:e.category,expDate:e.expDate,remDays:e.remDays,endQty:e.endQty,endAmt:e.endAmt,flavors:r,state:ot(e.remDays)}))}return a.sort((e,r)=>{const o=e.remDays??9999,i=r.remDays??9999;return o-i||r.endAmt-e.endAmt})}),T=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"补货预警"},{id:"trafficLight",label:"红黄灯"}],it=R(()=>T.findIndex(t=>t.id===y.value));let _,E,z,J,Z="";const tt=[],{sourceUrl:st,sourceMeta:W,importing:Ft,importError:Mt,initialize:Tt,importFile:zt,reset:qt,setMaterialType:$t,dispose:Rt}=me({initialMaterialType:"raw"}),Vt={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function lt(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function ct(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function Ot(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function L(){var t;return(t=p.value)==null?void 0:t.contentWindow}function dt(t){return t<=0?t:Math.max(Math.round(t*at),Math.ceil(t+1))}function ut(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(a,e)=>`${dt(Number(e))}px`)}function pt(t){Array.from(t).forEach(a=>{if(a.type===CSSRule.STYLE_RULE){const r=a.style;r.fontSize&&(r.fontSize=ut(r.fontSize))}const e=a.cssRules;e&&pt(e)})}function Wt(t){const a=t.documentElement;a.dataset.systemFontScaleApplied!==String(at)&&(Array.from(t.styleSheets).forEach(e=>{try{pt(e.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(e=>{e.style.fontSize&&(e.style.fontSize=ut(e.style.fontSize))}),a.dataset.systemFontScaleApplied=String(at))}function H(t,a="",e=new WeakMap){if(typeof t=="number"&&a==="fontSize")return dt(t);if(!t||typeof t!="object")return t;if(e.has(t))return e.get(t);if(Array.isArray(t)){const o=[];return e.set(t,o),t.forEach(i=>o.push(H(i,"",e))),o}const r={};return e.set(t,r),Object.entries(t).forEach(([o,i])=>{r[o]=H(i,o,e)}),r}function mt(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const a=t.setOption.bind(t);t.setOption=(o,...i)=>{a(H(o),...i)},t.__systemFontScaleApplied=!0;const e=(r=t.getOption)==null?void 0:r.call(t);e&&a(H(e))}function ht(t){var e;const a=(e=L())==null?void 0:e.echarts;if(a){if(!a.__systemFontScaleApplied&&a.init){const r=a.init.bind(a);a.init=(...o)=>{const i=r(...o);return mt(i),i},a.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const o=a.getInstanceByDom(r);o&&mt(o)})}}function bt(){const t=L();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function Ht(t,a,e){const r=[...e].sort((o,i)=>o.remDays===null?1:i.remDays===null?-1:o.remDays-i.remDays);c.value={title:t,description:a,rows:r,totalQuantity:r.reduce((o,i)=>o+(i.endQty||0),0),totalAmount:r.reduce((o,i)=>o+(i.endAmt||0),0)},ue(()=>{var o;return(o=d.value)==null?void 0:o.focus()})}function et(){c.value=null}function P(t,a,e,r){var w,A,Q;const o=t.getElementById(a),i=o&&((A=(w=L())==null?void 0:w.echarts)==null?void 0:A.getInstanceByDom(o));if(!o||!i)return;o.classList.add("drillable-chart");const l=(Q=o.closest(".card"))==null?void 0:Q.querySelector(".card-title");if(l&&!l.querySelector(".drill-hint")){const x=t.createElement("span");x.className="drill-hint",x.textContent="点击图形查看明细",l.appendChild(x)}const b=x=>{const q=r(x,bt());Ht(e,q.description,q.rows)};i.on("click",b),tt.push(()=>i.off("click",b))}function Pt(t){tt.splice(0).forEach(a=>a()),P(t,"chart-expiry","效期区间批次明细",(a,e)=>{const r=Vt[a.name]??(()=>!1);return{description:`效期区间：${a.name} · 数据继承当前页面筛选条件`,rows:e.filter(r)}}),P(t,"chart-warehouse","零耗用物料明细",(a,e)=>({description:`品类：${a.name} · 实际耗用量为 0`,rows:e.filter(r=>r.category===a.name&&r.consume===0)})),P(t,"chart-category","品类风险批次明细",(a,e)=>{var i;const r=L();let o="";try{const l=r==null?void 0:r.eval("computeCategory(getView())");o=((i=l==null?void 0:l[a.dataIndex])==null?void 0:i.category)??""}catch{o=a.name.split(" ")[0]}return{description:`品类：${o} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:e.filter(l=>l.category===o&&l.remDays!==null&&l.remDays<=90)}}),P(t,"chart-supplier","供应商风险批次明细",(a,e)=>({description:`供应商：${a.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:e.filter(r=>r.supplier===a.name&&r.remDays!==null&&r.remDays<=90)}))}const jt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"]},Qt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function j(){z&&(window.clearTimeout(J),J=window.setTimeout(()=>{z&&(S.value=Math.max(900,Math.ceil(z.scrollHeight)+2))},40))}function Xt(t){var e;const a=(e=L())==null?void 0:e.echarts;a&&t.querySelectorAll(".chart-box").forEach(r=>{var o,i;r.offsetParent!==null&&((i=(o=a.getInstanceByDom(r))==null?void 0:o.resize)==null||i.call(o))})}function Ut(t,a){const e=t.querySelector(".system-batch-pagination");if(e)return e;a.id||(a.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const o=t.createElement("div");o.className="system-batch-tab-list",o.setAttribute("role","tablist"),T.forEach((A,Q)=>{const x=t.createElement("button"),q=t.createElement("span");x.id=`embedded-batch-tab-${A.id}`,x.type="button",x.dataset.dashboardView=A.id,x.setAttribute("role","tab"),x.setAttribute("aria-controls",a.id),q.textContent=String(Q+1).padStart(2,"0"),x.append(q,t.createTextNode(A.label)),x.addEventListener("click",()=>gt(A.id)),o.appendChild(x)});const i=t.createElement("div");i.className="system-batch-page-controls";const l=t.createElement("span");l.dataset.pageStatus="true";const b=t.createElement("button");b.type="button",b.dataset.pageDirection="previous",b.setAttribute("aria-label","上一页"),b.textContent="←",b.addEventListener("click",()=>yt(-1));const w=t.createElement("button");return w.type="button",w.dataset.pageDirection="next",w.setAttribute("aria-label","下一页"),w.textContent="→",w.addEventListener("click",()=>yt(1)),i.append(l,b,w),r.append(o,i),r}function Gt(t,a){const e=a.querySelector(":scope > .kpi-row"),r=a.querySelector(":scope > .header"),o=a.querySelector(":scope > .upload-hint"),i=Ut(t,a);let l=null;e&&(a.insertBefore(e,a.firstElementChild),l=e),[r,o,i].forEach(b=>{b&&(l?l.after(b):a.insertBefore(b,a.firstElementChild),l=b)})}function Kt(t){const a=it.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const l=i.dataset.dashboardView===y.value;i.classList.toggle("active",l),i.setAttribute("aria-selected",String(l)),i.tabIndex=l?0:-1});const e=t.querySelector("[data-page-status]");e&&(e.textContent=`${String(a+1).padStart(2,"0")} / ${String(T.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),o=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=a===0),o&&(o.disabled=a===T.length-1)}function ft(t){t.querySelectorAll(Qt).forEach(a=>{a.classList.add("system-pagination-hidden"),a.setAttribute("aria-hidden","true")}),jt[y.value].forEach(a=>{t.querySelectorAll(a).forEach(e=>{e.classList.remove("system-pagination-hidden"),e.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=y.value,Kt(t),requestAnimationFrame(()=>{Xt(t),j()})}function gt(t){var e;if(y.value===t)return;y.value=t;const a=(e=p.value)==null?void 0:e.contentDocument;a&&ft(a)}function yt(t){const a=it.value+t,e=T[a];e&&gt(e.id)}function Yt(){var o,i,l,b;m.value=!1;const t=bt();g.value=t.length,K.value=t;const a=(o=p.value)==null?void 0:o.contentDocument;if(!a)return;if(!a.getElementById("system-minimal-theme")){const w=a.createElement("style");w.id="system-minimal-theme",w.textContent=da,a.head.appendChild(w)}Wt(a),ht(a),(l=(i=L())==null?void 0:i.renderAll)==null||l.call(i),ht(a),Pt(a);const e=a.querySelector(".dashboard > section.card:not(.rules-row)");(b=e==null?void 0:e.lastElementChild)==null||b.classList.add("batch-detail-scroll");const r=a.querySelector(".dashboard");r&&(z=r,Gt(a,r),ft(a),_==null||_.disconnect(),E==null||E.disconnect(),_=new ResizeObserver(j),E=new MutationObserver(j),_.observe(r),E.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(j))}function Jt(){m.value=!1,g.value=0,K.value=[]}async function Zt(t){try{await zt(t),m.value=!0,g.value=0,c.value=null}catch{}}async function te(){try{await qt(),m.value=!0,g.value=0,c.value=null}catch{}}function vt(t){t.key==="Escape"&&c.value&&et()}return ae(c,t=>{t?(Z=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=Z}),ne(()=>{Tt(),Dt(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",vt)}),re(()=>{Rt(),tt.splice(0).forEach(t=>t()),_==null||_.disconnect(),E==null||E.disconnect(),z=void 0,window.clearTimeout(J),window.removeEventListener("keydown",vt),document.body.style.overflow=Z,document.documentElement.classList.remove("batch-bento-active")}),(t,a)=>(h(),f($,null,[n("div",Be,[n("nav",Ie,[(h(),f($,null,X(F,e=>n("button",{key:e.id,type:"button",class:U(["material-type-tab",{active:v.value===e.id}]),"aria-pressed":v.value===e.id,onClick:r=>Bt(e.id)},[n("span",Ne,s(e.symbol),1),n("span",Fe,[n("strong",null,s(e.label),1),n("small",null,s(e.meta),1)])],10,Le)),64))]),xt(pe,{title:"批次与效期数据",description:"导入库存 Excel 后，效期区间、呆滞库存和补货建议将按新批次数据重算","file-name":D(W).fileName,"updated-at":D(W).updatedAt,"row-count":g.value||D(W).rowCount,busy:D(Ft),custom:D(W).isCustom,error:D(Mt),"action-label":"导入库存 Excel","show-template":"",onFile:Zt,onReset:te,onTemplate:D(he)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"]),n("input",{ref_key:"bomFileInput",ref:nt,type:"file",accept:".xlsx,.xls",class:"hidden-bom-input",onChange:At},null,544),n("section",Me,[n("div",Te,[a[0]||(a[0]=n("span",{class:"panel-kicker"},"BOM DATA",-1)),a[1]||(a[1]=n("strong",null,"配方耗用关联",-1)),I.value.isCustom?(h(),f("p",ze,s(I.value.fileName)+" · "+s(I.value.rowCount)+" 条 · "+s(I.value.updatedAt.slice(0,10)),1)):(h(),f("p",qe,"上传 BOM 文件后，临期"+s(M.value)+"可显示可耗用口味，提前预警减少报废",1)),O.value?(h(),f("p",$e,s(O.value),1)):B("",!0)]),n("div",Re,[n("button",{type:"button",class:"btn btn-primary",disabled:V.value,onClick:Ct},s(V.value?"上传中...":"上传 BOM Excel"),9,Ve),I.value.isCustom?(h(),f("button",{key:0,type:"button",class:"btn btn-secondary",onClick:Et}," 清除 BOM ")):B("",!0)])]),n("div",Oe,[m.value?(h(),f("div",We,"正在载入"+s(M.value)+"批次与效期预警看板...",1)):B("",!0),D(st)?(h(),f("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:p,class:"expiry-dashboard-frame",src:D(st),title:`${M.value}批次与效期预警看板`,scrolling:"no",style:oe({height:`${S.value}px`}),onLoad:Yt,onError:Jt},null,44,He)):B("",!0)]),I.value.isCustom&&Y.value.length?(h(),f("section",Pe,[n("div",je,[n("div",null,[a[2]||(a[2]=n("span",{class:"panel-kicker"},"FLAVOR EXPIRY ALERT",-1)),n("h2",null,"临期"+s(M.value)+"耗用预警",1)]),n("span",Qe,s(Y.value.length)+" 条临期"+s(M.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)]),n("div",Xe,[n("table",Ue,[a[3]||(a[3]=n("thead",null,[n("tr",null,[n("th",null,"物料"),n("th",null,"批次"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"到期日期"),n("th",null,"剩余天数"),n("th",null,"效期状态"),n("th",null,"可耗用口味")])],-1)),n("tbody",null,[(h(!0),f($,null,X(Y.value,(e,r)=>(h(),f("tr",{key:`${e.mat}-${e.batch}-${r}`},[n("td",Ge,[n("strong",null,s(e.sku||"未标注物料"),1),n("span",null,s(e.mat),1)]),n("td",null,s(e.batch||"—"),1),n("td",Ke,s(Lt(e.endQty)),1),n("td",Ye,s(Nt(e.endAmt))+" 万元",1),n("td",null,[n("strong",null,s(e.expDate||"未标注"),1)]),n("td",null,[n("span",{class:U(["rem-days-badge",e.state])},s(e.remDays!==null?`${e.remDays} 天`:"—"),3)]),n("td",null,[n("span",{class:U(["expiry-status-badge",e.state])},s(It(e.remDays)),3)]),n("td",Je,[(h(!0),f($,null,X(e.flavors,o=>(h(),f("span",{key:o.flavor,class:"flavor-tag"},s(o.flavor),1))),128))])]))),128))])])])])):B("",!0)]),(h(),ie(ce,{to:"body"},[xt(le,{name:"detail-dialog"},{default:se(()=>[c.value?(h(),f("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:de(et,["self"])},[n("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":wt},[n("header",Ze,[n("div",null,[a[4]||(a[4]=n("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),n("h2",{id:wt},s(c.value.title),1),n("p",null,s(c.value.description),1)]),n("button",{ref_key:"dialogCloseButton",ref:d,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:et}," × ",512)]),n("div",ta,[n("div",null,[a[5]||(a[5]=n("span",null,"命中记录",-1)),n("strong",null,s(c.value.rows.length),1),a[6]||(a[6]=n("small",null,"条",-1))]),n("div",null,[a[7]||(a[7]=n("span",null,"库存数量",-1)),n("strong",null,s(lt(c.value.totalQuantity)),1),a[8]||(a[8]=n("small",null,"KG",-1))]),n("div",null,[a[9]||(a[9]=n("span",null,"库存金额",-1)),n("strong",null,s(ct(c.value.totalAmount)),1),a[10]||(a[10]=n("small",null,"元",-1))])]),n("div",ea,[n("table",aa,[a[12]||(a[12]=n("thead",null,[n("tr",null,[n("th",null,"物料编码"),n("th",null,"物料描述"),n("th",null,"批次"),n("th",null,"品类"),n("th",null,"供应商"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"生产日期"),n("th",null,"到期日期"),n("th",{class:"number-cell"},"剩余天数"),n("th",null,"建议动作")])],-1)),n("tbody",null,[(h(!0),f($,null,X(c.value.rows,(e,r)=>(h(),f("tr",{key:`${e.mat}-${e.batch}-${r}`},[n("td",na,s(e.mat||"—"),1),n("td",ra,s(e.sku||"—"),1),n("td",oa,s(e.batch||"—"),1),n("td",null,s(e.category||"未知"),1),n("td",null,s(e.supplier||"未知"),1),n("td",ia,s(lt(e.endQty)),1),n("td",sa,s(ct(e.endAmt)),1),n("td",null,s(e.prodDate||"—"),1),n("td",null,s(e.expDate||"—"),1),n("td",la,[n("span",{class:U(["days-value",Ot(e.remDays)])},s(e.remDays??"—"),3)]),n("td",null,s(e.action||"—"),1)]))),128)),c.value.rows.length===0?(h(),f("tr",ca,[...a[11]||(a[11]=[n("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):B("",!0)])])])])],32)):B("",!0)]),_:1})]))],64))}}),ga=xe(ua,[["__scopeId","data-v-464c9957"]]);export{ga as default};
