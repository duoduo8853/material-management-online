import{d as oe,r as k,y as St,f as ie,g as se,o as h,c as f,a as n,F as P,j as G,n as K,t as s,z as Dt,h as D,i as I,B as le,p as ce,C as de,D as ue,T as pe,J as me,q as V,u as he,w as be,x as fe}from"./index-dTKc6OwU.js";import{W as ge}from"./WorkbookImportPanel-ClVZ62In.js";import{u as ye,d as ve}from"./useInventoryWorkbookSource-EKzrM9i5.js";import{g as xe,r as we,n as _t,s as ke,a as Se,u as De}from"./businessDataStore-CrP9RR4_.js";import{_ as Ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";function N(u){return String(u??"").replace(/\s+/g," ").trim()}function _e(u){let l=N(u);return l?(l=l.replace(/^(PET|HDPE|PP|PC|PE|PET瓶|HDPE瓶|PP瓶|瓶)/i,""),l=l.replace(/[（(].*$/,""),l=l.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),l.trim()):""}const Ce={blendingCode:["调配液料号","调配液编码","调配液代码"],blendingName:["调配液","调配液名称","调配液描述"],materialCode:["物料","物料编码","物料号","料号"],materialName:["物料描述","物料名称"],flavor:["口味","风味","产品口味","品味"]};function Y(u){return N(u).toLocaleLowerCase("zh-CN").replace(/[（）()【】[\]·:：/\\_\-\s]/g,"")}function Ae(u){const l=u.map(Y),m={};return Object.entries(Ce).forEach(([S,y])=>{const d=y.map(Y),p=l.findIndex(g=>d.includes(g));p>=0&&(m[S]=p)}),m}function Be(u){const l=Se(u,{type:"array",cellDates:!0}),m=[];return l.SheetNames.forEach(S=>{const y=l.Sheets[S];if(!y)return;const d=De.sheet_to_json(y,{header:1,defval:"",raw:!0});let p=null;for(let g=0;g<Math.min(d.length,20);g++){const v=Ae(d[g]);if(v.materialCode!==void 0&&(v.flavor!==void 0||v.blendingName!==void 0)){p=v;break}}if(p)for(let g=0;g<d.length;g++){const v=d[g];if(p.materialCode===void 0)continue;const M=N(v[p.materialCode]);if(!M||Y(M)===Y("物料"))continue;const F=p.blendingName!==void 0?N(v[p.blendingName]):"",J=(p.flavor!==void 0?N(v[p.flavor]):"")||_e(F);m.push({blendingCode:p.blendingCode!==void 0?N(v[p.blendingCode]):"",blendingName:F,materialCode:M,materialName:p.materialName!==void 0?N(v[p.materialName]):"",flavor:J})}}),m}function Ie(u){const l=new Map;return u.forEach(m=>{if(!m.materialCode)return;const S=l.get(m.materialCode)||[],y={flavor:m.flavor,blendingName:m.blendingName};S.some(p=>p.flavor===y.flavor&&p.blendingName===y.blendingName)||S.push(y),l.set(m.materialCode,S)}),l}async function Ne(u){if(!/\.xlsx?$/i.test(u.name))throw new Error("请选择 XLS 或 XLSX 格式的 BOM 文件");const l=Be(await u.arrayBuffer());if(!l.length)throw new Error('BOM 文件中没有找到有效记录，请检查是否包含"物料"列以及"口味"或"调配液"列');const m={kind:"bom",fileName:u.name,updatedAt:new Date().toISOString(),records:l};return await ke(m),_t("bom"),m}function Fe(){return xe("bom")}async function Le(){await we("bom"),_t("bom")}function Te(u){return u?{fileName:u.fileName,updatedAt:u.updatedAt,rowCount:u.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const Me={class:"page-container expiry-dashboard-page"},ze={class:"material-type-tabs","aria-label":"批次效期预警分类"},$e=["aria-pressed","onClick"],qe={class:"tab-symbol"},Re={class:"tab-copy"},Pe={class:"bom-panel"},Ve={class:"bom-panel-info"},Oe={key:0},We={key:1},He={key:2,class:"bom-error"},je={class:"bom-panel-actions"},Qe=["disabled"],Xe={class:"dashboard-frame-shell"},Ue={key:0,class:"frame-loading"},Ge=["src","title"],Ke={key:0,class:"flavor-warning-panel"},Ye={class:"flavor-warning-heading"},Je={class:"flavor-warning-meta"},Ze={class:"flavor-warning-table-wrap"},ta={class:"flavor-warning-table"},ea={class:"flavor-material-cell"},aa={class:"number-cell"},na={class:"number-cell"},ra={class:"flavor-cell"},oa={class:"detail-dialog-header"},ia={class:"detail-dialog-summary"},sa={class:"detail-dialog-table-wrap"},la={class:"detail-dialog-table"},ca={class:"code-cell"},da={class:"material-cell"},ua={class:"code-cell"},pa={class:"number-cell"},ma={class:"number-cell"},ha={class:"number-cell"},ba={key:0},Et="chart-detail-dialog-title",ot=1.1,fa=`
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
`,ga=oe({__name:"index",setup(u){const l=k(!0),m=k(),S=k(900),y=k("risk"),d=k(null),p=k(),g=k(0),v=me(),M=he();function F(t){return t==="material"?"material":"raw"}const C=k(F(v.params.type)),J=[{id:"raw",label:"原料管理",symbol:"原",meta:"RAW MATERIALS"},{id:"material",label:"物料管理",symbol:"物",meta:"PACKAGING & AUX"}],z=V(()=>C.value==="raw"?"原料":"物料"),A=k(null),L=V(()=>Te(A.value)),O=k(!1),W=k(""),it=k(null),st=V(()=>{var t;return Ie(((t=A.value)==null?void 0:t.records)||[])}),Z=k([]);function Ct(t){return st.value.get(t)||[]}async function At(){try{A.value=await Fe()}catch{A.value=null}}async function Bt(t){O.value=!0,W.value="";try{A.value=await Ne(t)}catch(e){W.value=e instanceof Error?e.message:"BOM 文件导入失败"}finally{O.value=!1}}async function It(){try{await Le(),A.value=null}catch{}}function Nt(){var t;(t=it.value)==null||t.click()}async function Ft(t){var r;const e=t.target,a=(r=e.files)==null?void 0:r[0];a&&(await Bt(a),e.value="")}async function Lt(t){C.value!==t&&await M.push(`/batch/${t}`)}function lt(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function Tt(t){const e=lt(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function Mt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function zt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const tt=V(()=>{if(!A.value||!st.value.size)return[];const t=new Set,e=[];for(const a of Z.value){if(a.remDays===null||a.remDays>90)continue;const r=Ct(a.mat);if(r.length===0)continue;const o=`${a.mat}-${a.batch}`;t.has(o)||(t.add(o),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:r,state:lt(a.remDays)}))}return e.sort((a,r)=>{const o=a.remDays??9999,i=r.remDays??9999;return o-i||r.endAmt-a.endAmt})}),$=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"补货预警"},{id:"trafficLight",label:"红黄灯"}],ct=V(()=>$.findIndex(t=>t.id===y.value));let E,_,q,et,at="";const nt=[],{sourceUrl:dt,sourceMeta:H,importing:$t,importError:qt,initialize:Rt,importFile:Pt,reset:Vt,setMaterialType:Ot,dispose:Wt}=ye({initialMaterialType:F(v.params.type)}),Ht={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function ut(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function pt(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function jt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function T(){var t;return(t=m.value)==null?void 0:t.contentWindow}function mt(t){return t<=0?t:Math.max(Math.round(t*ot),Math.ceil(t+1))}function ht(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${mt(Number(a))}px`)}function bt(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=ht(r.fontSize))}const a=e.cssRules;a&&bt(a)})}function Qt(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(ot)&&(Array.from(t.styleSheets).forEach(a=>{try{bt(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=ht(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(ot))}function j(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return mt(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const o=[];return a.set(t,o),t.forEach(i=>o.push(j(i,"",a))),o}const r={};return a.set(t,r),Object.entries(t).forEach(([o,i])=>{r[o]=j(i,o,a)}),r}function ft(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(o,...i)=>{e(j(o),...i)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(j(a))}function gt(t){var a;const e=(a=T())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...o)=>{const i=r(...o);return ft(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const o=e.getInstanceByDom(r);o&&ft(o)})}}function yt(){const t=T();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function Xt(t,e,a){const r=[...a].sort((o,i)=>o.remDays===null?1:i.remDays===null?-1:o.remDays-i.remDays);d.value={title:t,description:e,rows:r,totalQuantity:r.reduce((o,i)=>o+(i.endQty||0),0),totalAmount:r.reduce((o,i)=>o+(i.endAmt||0),0)},fe(()=>{var o;return(o=p.value)==null?void 0:o.focus()})}function rt(){d.value=null}function Q(t,e,a,r){var w,B,U;const o=t.getElementById(e),i=o&&((B=(w=T())==null?void 0:w.echarts)==null?void 0:B.getInstanceByDom(o));if(!o||!i)return;o.classList.add("drillable-chart");const c=(U=o.closest(".card"))==null?void 0:U.querySelector(".card-title");if(c&&!c.querySelector(".drill-hint")){const x=t.createElement("span");x.className="drill-hint",x.textContent="点击图形查看明细",c.appendChild(x)}const b=x=>{const R=r(x,yt());Xt(a,R.description,R.rows)};i.on("click",b),nt.push(()=>i.off("click",b))}function Ut(t){nt.splice(0).forEach(e=>e()),Q(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=Ht[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),Q(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),Q(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const r=T();let o="";try{const c=r==null?void 0:r.eval("computeCategory(getView())");o=((i=c==null?void 0:c[e.dataIndex])==null?void 0:i.category)??""}catch{o=e.name.split(" ")[0]}return{description:`品类：${o} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(c=>c.category===o&&c.remDays!==null&&c.remDays<=90)}}),Q(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)}))}const Gt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"]},Kt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function X(){q&&(window.clearTimeout(et),et=window.setTimeout(()=>{q&&(S.value=Math.max(900,Math.ceil(q.scrollHeight)+2))},40))}function Yt(t){var a;const e=(a=T())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var o,i;r.offsetParent!==null&&((i=(o=e.getInstanceByDom(r))==null?void 0:o.resize)==null||i.call(o))})}function Jt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const o=t.createElement("div");o.className="system-batch-tab-list",o.setAttribute("role","tablist"),$.forEach((B,U)=>{const x=t.createElement("button"),R=t.createElement("span");x.id=`embedded-batch-tab-${B.id}`,x.type="button",x.dataset.dashboardView=B.id,x.setAttribute("role","tab"),x.setAttribute("aria-controls",e.id),R.textContent=String(U+1).padStart(2,"0"),x.append(R,t.createTextNode(B.label)),x.addEventListener("click",()=>xt(B.id)),o.appendChild(x)});const i=t.createElement("div");i.className="system-batch-page-controls";const c=t.createElement("span");c.dataset.pageStatus="true";const b=t.createElement("button");b.type="button",b.dataset.pageDirection="previous",b.setAttribute("aria-label","上一页"),b.textContent="←",b.addEventListener("click",()=>wt(-1));const w=t.createElement("button");return w.type="button",w.dataset.pageDirection="next",w.setAttribute("aria-label","下一页"),w.textContent="→",w.addEventListener("click",()=>wt(1)),i.append(c,b,w),r.append(o,i),r}function Zt(t,e){const a=e.querySelector(":scope > .kpi-row"),r=e.querySelector(":scope > .header"),o=e.querySelector(":scope > .upload-hint"),i=Jt(t,e);let c=null;a&&(e.insertBefore(a,e.firstElementChild),c=a),[r,o,i].forEach(b=>{b&&(c?c.after(b):e.insertBefore(b,e.firstElementChild),c=b)})}function te(t){const e=ct.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const c=i.dataset.dashboardView===y.value;i.classList.toggle("active",c),i.setAttribute("aria-selected",String(c)),i.tabIndex=c?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String($.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),o=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),o&&(o.disabled=e===$.length-1)}function vt(t){t.querySelectorAll(Kt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),Gt[y.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=y.value,te(t),requestAnimationFrame(()=>{Yt(t),X()})}function xt(t){var a;if(y.value===t)return;y.value=t;const e=(a=m.value)==null?void 0:a.contentDocument;e&&vt(e)}function wt(t){const e=ct.value+t,a=$[e];a&&xt(a.id)}function ee(){var o,i,c,b;l.value=!1;const t=yt();g.value=t.length,Z.value=t;const e=(o=m.value)==null?void 0:o.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const w=e.createElement("style");w.id="system-minimal-theme",w.textContent=fa,e.head.appendChild(w)}Qt(e),gt(e),(c=(i=T())==null?void 0:i.renderAll)==null||c.call(i),gt(e),Ut(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(b=a==null?void 0:a.lastElementChild)==null||b.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&(q=r,Zt(e,r),vt(e),E==null||E.disconnect(),_==null||_.disconnect(),E=new ResizeObserver(X),_=new MutationObserver(X),E.observe(r),_.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(X))}function ae(){l.value=!1,g.value=0,Z.value=[]}async function ne(t){try{await Pt(t),l.value=!0,g.value=0,d.value=null}catch{}}async function re(){try{await Vt(),l.value=!0,g.value=0,d.value=null}catch{}}function kt(t){t.key==="Escape"&&d.value&&rt()}return St(d,t=>{t?(at=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=at}),St(()=>v.params.type,t=>{const e=F(t);C.value!==e&&(C.value=e,l.value=!0,g.value=0,d.value=null,Ot(e))}),ie(()=>{Rt(),At(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",kt)}),se(()=>{Wt(),nt.splice(0).forEach(t=>t()),E==null||E.disconnect(),_==null||_.disconnect(),q=void 0,window.clearTimeout(et),window.removeEventListener("keydown",kt),document.body.style.overflow=at,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(h(),f(P,null,[n("div",Me,[n("nav",ze,[(h(),f(P,null,G(J,a=>n("button",{key:a.id,type:"button",class:K(["material-type-tab",{active:C.value===a.id}]),"aria-pressed":C.value===a.id,onClick:r=>Lt(a.id)},[n("span",qe,s(a.symbol),1),n("span",Re,[n("strong",null,s(a.label),1),n("small",null,s(a.meta),1)])],10,$e)),64))]),Dt(ge,{title:"批次与效期数据",description:"导入库存 Excel 后，效期区间、呆滞库存和补货建议将按新批次数据重算","file-name":D(H).fileName,"updated-at":D(H).updatedAt,"row-count":g.value||D(H).rowCount,busy:D($t),custom:D(H).isCustom,error:D(qt),"action-label":"导入库存 Excel","show-template":"",onFile:ne,onReset:re,onTemplate:D(ve)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"]),n("input",{ref_key:"bomFileInput",ref:it,type:"file",accept:".xlsx,.xls",class:"hidden-bom-input",onChange:Ft},null,544),n("section",Pe,[n("div",Ve,[e[0]||(e[0]=n("span",{class:"panel-kicker"},"BOM DATA",-1)),e[1]||(e[1]=n("strong",null,"配方耗用关联",-1)),L.value.isCustom?(h(),f("p",Oe,s(L.value.fileName)+" · "+s(L.value.rowCount)+" 条 · "+s(L.value.updatedAt.slice(0,10)),1)):(h(),f("p",We,"上传 BOM 文件后，临期"+s(z.value)+"可显示可耗用口味，提前预警减少报废",1)),W.value?(h(),f("p",He,s(W.value),1)):I("",!0)]),n("div",je,[n("button",{type:"button",class:"btn btn-primary",disabled:O.value,onClick:Nt},s(O.value?"上传中...":"上传 BOM Excel"),9,Qe),L.value.isCustom?(h(),f("button",{key:0,type:"button",class:"btn btn-secondary",onClick:It}," 清除 BOM ")):I("",!0)])]),n("div",Xe,[l.value?(h(),f("div",Ue,"正在载入"+s(z.value)+"批次与效期预警看板...",1)):I("",!0),D(dt)?(h(),f("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:m,class:"expiry-dashboard-frame",src:D(dt),title:`${z.value}批次与效期预警看板`,scrolling:"no",style:le({height:`${S.value}px`}),onLoad:ee,onError:ae},null,44,Ge)):I("",!0)]),L.value.isCustom&&tt.value.length?(h(),f("section",Ke,[n("div",Ye,[n("div",null,[e[2]||(e[2]=n("span",{class:"panel-kicker"},"FLAVOR EXPIRY ALERT",-1)),n("h2",null,"临期"+s(z.value)+"耗用预警",1)]),n("span",Je,s(tt.value.length)+" 条临期"+s(z.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)]),n("div",Ze,[n("table",ta,[e[3]||(e[3]=n("thead",null,[n("tr",null,[n("th",null,"物料"),n("th",null,"批次"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"到期日期"),n("th",null,"剩余天数"),n("th",null,"效期状态"),n("th",null,"可耗用口味")])],-1)),n("tbody",null,[(h(!0),f(P,null,G(tt.value,(a,r)=>(h(),f("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",ea,[n("strong",null,s(a.sku||"未标注物料"),1),n("span",null,s(a.mat),1)]),n("td",null,s(a.batch||"—"),1),n("td",aa,s(Mt(a.endQty)),1),n("td",na,s(zt(a.endAmt))+" 万元",1),n("td",null,[n("strong",null,s(a.expDate||"未标注"),1)]),n("td",null,[n("span",{class:K(["rem-days-badge",a.state])},s(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),n("td",null,[n("span",{class:K(["expiry-status-badge",a.state])},s(Tt(a.remDays)),3)]),n("td",ra,[(h(!0),f(P,null,G(a.flavors,o=>(h(),f("span",{key:o.flavor,class:"flavor-tag"},s(o.flavor),1))),128))])]))),128))])])])])):I("",!0)]),(h(),ce(pe,{to:"body"},[Dt(ue,{name:"detail-dialog"},{default:de(()=>[d.value?(h(),f("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:be(rt,["self"])},[n("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":Et},[n("header",oa,[n("div",null,[e[4]||(e[4]=n("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),n("h2",{id:Et},s(d.value.title),1),n("p",null,s(d.value.description),1)]),n("button",{ref_key:"dialogCloseButton",ref:p,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:rt}," × ",512)]),n("div",ia,[n("div",null,[e[5]||(e[5]=n("span",null,"命中记录",-1)),n("strong",null,s(d.value.rows.length),1),e[6]||(e[6]=n("small",null,"条",-1))]),n("div",null,[e[7]||(e[7]=n("span",null,"库存数量",-1)),n("strong",null,s(ut(d.value.totalQuantity)),1),e[8]||(e[8]=n("small",null,"KG",-1))]),n("div",null,[e[9]||(e[9]=n("span",null,"库存金额",-1)),n("strong",null,s(pt(d.value.totalAmount)),1),e[10]||(e[10]=n("small",null,"元",-1))])]),n("div",sa,[n("table",la,[e[12]||(e[12]=n("thead",null,[n("tr",null,[n("th",null,"物料编码"),n("th",null,"物料描述"),n("th",null,"批次"),n("th",null,"品类"),n("th",null,"供应商"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"生产日期"),n("th",null,"到期日期"),n("th",{class:"number-cell"},"剩余天数"),n("th",null,"建议动作")])],-1)),n("tbody",null,[(h(!0),f(P,null,G(d.value.rows,(a,r)=>(h(),f("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",ca,s(a.mat||"—"),1),n("td",da,s(a.sku||"—"),1),n("td",ua,s(a.batch||"—"),1),n("td",null,s(a.category||"未知"),1),n("td",null,s(a.supplier||"未知"),1),n("td",pa,s(ut(a.endQty)),1),n("td",ma,s(pt(a.endAmt)),1),n("td",null,s(a.prodDate||"—"),1),n("td",null,s(a.expDate||"—"),1),n("td",ha,[n("span",{class:K(["days-value",jt(a.remDays)])},s(a.remDays??"—"),3)]),n("td",null,s(a.action||"—"),1)]))),128)),d.value.rows.length===0?(h(),f("tr",ba,[...e[11]||(e[11]=[n("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):I("",!0)])])])])],32)):I("",!0)]),_:1})]))],64))}}),Sa=Ee(ga,[["__scopeId","data-v-6ba3a08a"]]);export{Sa as default};
