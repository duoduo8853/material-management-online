import{d as ne,r as k,y as et,f as re,g as oe,o as p,c as m,a as n,z as kt,h as E,t as s,i as S,B as ie,F as P,j as at,k as nt,q as se,C as le,D as ce,T as de,J as ue,x as $,w as pe,n as me,u as he}from"./index-D1IAqqlf.js";import{W as fe}from"./WorkbookImportPanel-jWQlmsg2.js";import{u as be,d as ge,e as ye}from"./useInventoryWorkbookSource-qaEDOlhh.js";import{g as ve,r as xe,n as Dt,s as we,a as ke,u as Se}from"./businessDataStore-CrP9RR4_.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";function F(u){return String(u??"").replace(/\s+/g," ").trim()}function _t(u){let l=F(u);return l?(l=l.replace(/^(PET|HDPE|PP|PC|PE|PET瓶|HDPE瓶|PP瓶|瓶)/i,""),l=l.replace(/[（(].*$/,""),l=l.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),l.trim()):""}const _e={blendingCode:["调配液料号","调配液编码","调配液代码"],blendingName:["调配液","调配液名称","调配液描述"],materialCode:["物料","物料编码","物料号","料号"],materialName:["物料描述","物料名称"],flavor:["口味","风味","产品口味","品味"]};function G(u){return F(u).toLocaleLowerCase("zh-CN").replace(/[（）()【】[\]·:：/\\_\-\s]/g,"")}function Ee(u){const l=u.map(G),h={};return Object.entries(_e).forEach(([D,f])=>{const c=f.map(G),b=l.findIndex(g=>c.includes(g));b>=0&&(h[D]=b)}),h}function Ce(u){const l=ke(u,{type:"array",cellDates:!0}),h=[];return l.SheetNames.forEach(D=>{const f=l.Sheets[D];if(!f)return;const c=Se.sheet_to_json(f,{header:1,defval:"",raw:!1});let b=null;for(let g=0;g<Math.min(c.length,20);g++){const v=Ee(c[g]);if(v.materialCode!==void 0&&(v.flavor!==void 0||v.blendingName!==void 0)){b=v;break}}if(b)for(let g=0;g<c.length;g++){const v=c[g];if(b.materialCode===void 0)continue;const B=F(v[b.materialCode]);if(!B||G(B)===G("物料"))continue;const N=b.blendingName!==void 0?F(v[b.blendingName]):"",_=(b.flavor!==void 0?F(v[b.flavor]):"")||_t(N);h.push({blendingCode:b.blendingCode!==void 0?F(v[b.blendingCode]):"",blendingName:N,materialCode:B,materialName:b.materialName!==void 0?F(v[b.materialName]):"",flavor:_})}}),h}function Ae(u){const l=new Map;return u.forEach(h=>{if(!h.materialCode)return;const D=h.flavor||_t(h.blendingName);if(!D)return;const f=l.get(h.materialCode)||[],c={flavor:D,blendingName:h.blendingName};f.some(g=>g.flavor===c.flavor&&g.blendingName===c.blendingName)||f.push(c),l.set(h.materialCode,f)}),l}async function Be(u){if(!/\.xlsx?$/i.test(u.name))throw new Error("请选择 XLS 或 XLSX 格式的 BOM 文件");const l=Ce(await u.arrayBuffer());if(!l.length)throw new Error('BOM 文件中没有找到有效记录，请检查是否包含"物料"列以及"口味"或"调配液"列');const h={kind:"bom",fileName:u.name,updatedAt:new Date().toISOString(),records:l};return await we(h),Dt("bom"),h}function Ne(){return ve("bom")}async function Ie(){await xe("bom"),Dt("bom")}function Fe(u){return u?{fileName:u.fileName,updatedAt:u.updatedAt,rowCount:u.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const Le={class:"page-container expiry-dashboard-page"},Me={class:"data-source-row"},Te={class:"bom-panel"},ze={class:"bom-panel-info"},$e={key:0},qe={key:1,class:"bom-error"},Ve={class:"bom-panel-actions"},Pe=["disabled"],Oe={class:"dashboard-frame-shell"},Re={key:0,class:"frame-loading"},We=["src","title"],He={key:0,class:"flavor-warning-panel"},je={key:0,class:"flavor-warning-empty"},Qe={class:"flavor-warning-heading"},Ue={key:0,class:"flavor-warning-meta"},Xe={key:0,class:"flavor-warning-empty"},Ke={key:1,class:"flavor-warning-table-wrap"},Ge={class:"flavor-warning-table"},Je={class:"flavor-material-cell"},Ye={class:"number-cell"},Ze={class:"number-cell"},ta={class:"flavor-cell"},ea={key:0,class:"flavor-empty"},aa=["title"],na={class:"detail-dialog-header"},ra={class:"detail-dialog-summary"},oa={class:"detail-dialog-table-wrap"},ia={class:"detail-dialog-table"},sa={class:"code-cell"},la={class:"material-cell"},ca={class:"code-cell"},da={class:"number-cell"},ua={class:"number-cell"},pa={class:"number-cell"},ma={key:0},St="chart-detail-dialog-title",rt=1.1,ha=`
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
`,fa=ne({__name:"index",setup(u){const l=k(!0),h=k(),D=k(900),f=k("risk"),c=k(null),b=k(),g=k(0),v=ue();he();function B(t){return t==="material"?"material":"raw"}const N=k(B(v.params.type)),L=$(()=>N.value==="raw"?"原料":"物料"),_=k(null),M=$(()=>Fe(_.value)),O=k(!1),R=k(""),ot=k(null),it=$(()=>{var t;return Ae(((t=_.value)==null?void 0:t.records)||[])}),W=k([]);function Et(t){return it.value.get(t)||[]}async function Ct(){try{_.value=await Ne()}catch{_.value=null}}async function At(t){O.value=!0,R.value="";try{_.value=await Be(t)}catch(e){R.value=e instanceof Error?e.message:"BOM 文件导入失败"}finally{O.value=!1}}async function Bt(){try{await Ie(),_.value=null}catch{}}function Nt(){var t;(t=ot.value)==null||t.click()}async function It(t){var r;const e=t.target,a=(r=e.files)==null?void 0:r[0];a&&(await At(a),e.value="")}function st(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function Ft(t){const e=st(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function Lt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function Mt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const H=$(()=>{if(!_.value||!it.value.size)return[];const t=new Set,e=[];for(const a of W.value){if(a.remDays===null||a.remDays>90)continue;const r=Et(a.mat);if(r.length===0)continue;const o=`${a.mat}-${a.batch}`;t.has(o)||(t.add(o),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:r,state:st(a.remDays)}))}return e.sort((a,r)=>{const o=a.remDays??9999,i=r.remDays??9999;return o-i||r.endAmt-a.endAmt})}),T=$(()=>{const t=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"报废预警"},{id:"trafficLight",label:"红黄灯"}];return N.value==="raw"&&t.push({id:"flavorWarning",label:"临期物料耗用预警"}),t}),lt=$(()=>T.value.findIndex(t=>t.id===f.value));let C,A,q,J,Y="";const Z=[],{sourceUrl:ct,sourceMeta:j,importing:Tt,importError:zt,initialize:$t,importFile:qt,reset:Vt,setMaterialType:Pt,dispose:Ot}=be({initialMaterialType:B(v.params.type)}),Rt={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function dt(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function ut(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function Wt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function z(){var t;return(t=h.value)==null?void 0:t.contentWindow}function pt(t){return t<=0?t:Math.max(Math.round(t*rt),Math.ceil(t+1))}function mt(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${pt(Number(a))}px`)}function ht(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=mt(r.fontSize))}const a=e.cssRules;a&&ht(a)})}function Ht(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(rt)&&(Array.from(t.styleSheets).forEach(a=>{try{ht(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=mt(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(rt))}function Q(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return pt(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const o=[];return a.set(t,o),t.forEach(i=>o.push(Q(i,"",a))),o}const r={};return a.set(t,r),Object.entries(t).forEach(([o,i])=>{r[o]=Q(i,o,a)}),r}function ft(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(o,...i)=>{e(Q(o),...i)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(Q(a))}function bt(t){var a;const e=(a=z())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...o)=>{const i=r(...o);return ft(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const o=e.getInstanceByDom(r);o&&ft(o)})}}function gt(){const t=z();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function jt(t,e,a){const r=[...a].sort((o,i)=>o.remDays===null?1:i.remDays===null?-1:o.remDays-i.remDays);c.value={title:t,description:e,rows:r,totalQuantity:r.reduce((o,i)=>o+(i.endQty||0),0),totalAmount:r.reduce((o,i)=>o+(i.endAmt||0),0)},me(()=>{var o;return(o=b.value)==null?void 0:o.focus()})}function tt(){c.value=null}function U(t,e,a,r){var w,I,K;const o=t.getElementById(e),i=o&&((I=(w=z())==null?void 0:w.echarts)==null?void 0:I.getInstanceByDom(o));if(!o||!i)return;o.classList.add("drillable-chart");const d=(K=o.closest(".card"))==null?void 0:K.querySelector(".card-title");if(d&&!d.querySelector(".drill-hint")){const x=t.createElement("span");x.className="drill-hint",x.textContent="点击图形查看明细",d.appendChild(x)}const y=x=>{const V=r(x,gt());jt(a,V.description,V.rows)};i.on("click",y),Z.push(()=>i.off("click",y))}function Qt(t){Z.splice(0).forEach(e=>e()),U(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=Rt[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),U(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),U(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const r=z();let o="";try{const d=r==null?void 0:r.eval("computeCategory(getView())");o=((i=d==null?void 0:d[e.dataIndex])==null?void 0:i.category)??""}catch{o=e.name.split(" ")[0]}return{description:`品类：${o} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(d=>d.category===o&&d.remDays!==null&&d.remDays<=90)}}),U(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)}))}const Ut={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"],flavorWarning:[]},Xt=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function X(){q&&(window.clearTimeout(J),J=window.setTimeout(()=>{if(!q)return;const t=f.value==="flavorWarning"?60:900;D.value=Math.max(t,Math.ceil(q.scrollHeight)+2)},40))}function Kt(t){var a;const e=(a=z())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var o,i;r.offsetParent!==null&&((i=(o=e.getInstanceByDom(r))==null?void 0:o.resize)==null||i.call(o))})}function Gt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const o=t.createElement("div");o.className="system-batch-tab-list",o.setAttribute("role","tablist"),T.value.forEach((I,K)=>{const x=t.createElement("button"),V=t.createElement("span");x.id=`embedded-batch-tab-${I.id}`,x.type="button",x.dataset.dashboardView=I.id,x.setAttribute("role","tab"),x.setAttribute("aria-controls",e.id),V.textContent=String(K+1).padStart(2,"0"),x.append(V,t.createTextNode(I.label)),x.addEventListener("click",()=>vt(I.id)),o.appendChild(x)});const i=t.createElement("div");i.className="system-batch-page-controls";const d=t.createElement("span");d.dataset.pageStatus="true";const y=t.createElement("button");y.type="button",y.dataset.pageDirection="previous",y.setAttribute("aria-label","上一页"),y.textContent="←",y.addEventListener("click",()=>xt(-1));const w=t.createElement("button");return w.type="button",w.dataset.pageDirection="next",w.setAttribute("aria-label","下一页"),w.textContent="→",w.addEventListener("click",()=>xt(1)),i.append(d,y,w),r.append(o,i),r}function Jt(t,e){const a=e.querySelector(":scope > .kpi-row"),r=e.querySelector(":scope > .header"),o=e.querySelector(":scope > .upload-hint"),i=Gt(t,e);let d=null;a&&(e.insertBefore(a,e.firstElementChild),d=a),[r,o,i].forEach(y=>{y&&(d?d.after(y):e.insertBefore(y,e.firstElementChild),d=y)})}function Yt(t){const e=lt.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const d=i.dataset.dashboardView===f.value;i.classList.toggle("active",d),i.setAttribute("aria-selected",String(d)),i.tabIndex=d?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(T.value.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),o=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),o&&(o.disabled=e===T.value.length-1)}function yt(t){t.querySelectorAll(Xt).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),Ut[f.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=f.value,Yt(t),requestAnimationFrame(()=>{Kt(t),X()})}function vt(t){var a;if(f.value===t)return;f.value=t;const e=(a=h.value)==null?void 0:a.contentDocument;e&&yt(e)}function xt(t){const e=lt.value+t,a=T.value[e];a&&vt(a.id)}function Zt(){var o,i,d,y;l.value=!1;const t=gt();g.value=t.length,W.value=t,ye(W.value);const e=(o=h.value)==null?void 0:o.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const w=e.createElement("style");w.id="system-minimal-theme",w.textContent=ha,e.head.appendChild(w)}Ht(e),bt(e),(d=(i=z())==null?void 0:i.renderAll)==null||d.call(i),bt(e),Qt(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(y=a==null?void 0:a.lastElementChild)==null||y.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&(q=r,Jt(e,r),yt(e),C==null||C.disconnect(),A==null||A.disconnect(),C=new ResizeObserver(X),A=new MutationObserver(X),C.observe(r),A.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(X))}function te(){l.value=!1,g.value=0,W.value=[]}async function ee(t){try{await qt(t),l.value=!0,g.value=0,c.value=null}catch{}}async function ae(){try{await Vt(),l.value=!0,g.value=0,c.value=null}catch{}}function wt(t){t.key==="Escape"&&c.value&&tt()}return et(c,t=>{t?(Y=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=Y}),et(()=>v.params.type,t=>{const e=B(t);N.value!==e&&(N.value=e,l.value=!0,g.value=0,c.value=null,Pt(e))}),et(T,t=>{t.some(e=>e.id===f.value)||(f.value="risk")}),re(()=>{$t(),Ct(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",wt)}),oe(()=>{Ot(),Z.splice(0).forEach(t=>t()),C==null||C.disconnect(),A==null||A.disconnect(),q=void 0,window.clearTimeout(J),window.removeEventListener("keydown",wt),document.body.style.overflow=Y,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(p(),m(P,null,[n("div",Le,[n("input",{ref_key:"bomFileInput",ref:ot,type:"file",accept:".xlsx,.xls",class:"hidden-bom-input",onChange:It},null,544),n("div",Me,[kt(fe,{title:"批次与效期数据",description:"","file-name":E(j).fileName,"updated-at":E(j).updatedAt,"row-count":g.value||E(j).rowCount,busy:E(Tt),custom:E(j).isCustom,error:E(zt),"action-label":"导入库存 Excel","show-template":"",onFile:ee,onReset:ae,onTemplate:E(ge)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"]),n("section",Te,[n("div",ze,[e[0]||(e[0]=n("strong",null,"配方耗用关联",-1)),M.value.isCustom?(p(),m("p",$e,s(M.value.fileName)+" · "+s(M.value.rowCount)+" 条 · "+s(M.value.updatedAt.slice(0,10)),1)):S("",!0),R.value?(p(),m("p",qe,s(R.value),1)):S("",!0)]),n("div",Ve,[n("button",{type:"button",class:"btn btn-primary",disabled:O.value,onClick:Nt},s(O.value?"上传中...":"上传 BOM Excel"),9,Pe),M.value.isCustom?(p(),m("button",{key:0,type:"button",class:"btn btn-secondary",onClick:Bt}," 清除 BOM ")):S("",!0)])])]),n("div",Oe,[l.value?(p(),m("div",Re,"正在载入"+s(L.value)+"批次与效期预警看板...",1)):S("",!0),E(ct)?(p(),m("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:h,class:"expiry-dashboard-frame",src:E(ct),title:`${L.value}批次与效期预警看板`,scrolling:"no",style:ie({height:`${D.value}px`}),onLoad:Zt,onError:te},null,44,We)):S("",!0)]),f.value==="flavorWarning"?(p(),m("section",He,[M.value.isCustom?(p(),m(P,{key:1},[n("div",Qe,[n("div",null,[n("h2",null,"临期"+s(L.value)+"耗用预警",1)]),H.value.length?(p(),m("span",Ue,s(H.value.length)+" 条临期"+s(L.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)):S("",!0)]),H.value.length?(p(),m("div",Ke,[n("table",Ge,[e[2]||(e[2]=n("thead",null,[n("tr",null,[n("th",null,"物料"),n("th",null,"批次"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"到期日期"),n("th",null,"剩余天数"),n("th",null,"效期状态"),n("th",null,"可耗用口味")])],-1)),n("tbody",null,[(p(!0),m(P,null,at(H.value,(a,r)=>(p(),m("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",Je,[n("strong",null,s(a.sku||"未标注物料"),1),n("span",null,s(a.mat),1)]),n("td",null,s(a.batch||"—"),1),n("td",Ye,s(Lt(a.endQty)),1),n("td",Ze,s(Mt(a.endAmt))+" 万元",1),n("td",null,[n("strong",null,s(a.expDate||"未标注"),1)]),n("td",null,[n("span",{class:nt(["rem-days-badge",a.state])},s(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),n("td",null,[n("span",{class:nt(["expiry-status-badge",a.state])},s(Ft(a.remDays)),3)]),n("td",ta,[a.flavors.length?S("",!0):(p(),m("span",ea,"—")),(p(!0),m(P,null,at(a.flavors,o=>(p(),m("span",{key:o.flavor,class:"flavor-tag",title:o.blendingName?`调配液：${o.blendingName}`:""},s(o.flavor),9,aa))),128))])]))),128))])])])):(p(),m("div",Xe,[n("p",null,"暂无临期"+s(L.value)+"可在 BOM 配方中耗用",1)]))],64)):(p(),m("div",je,[...e[1]||(e[1]=[n("p",null,"请先上传 BOM 文件，系统将自动匹配临期原料的可耗用口味",-1)])]))])):S("",!0)]),(p(),se(de,{to:"body"},[kt(ce,{name:"detail-dialog"},{default:le(()=>[c.value?(p(),m("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:pe(tt,["self"])},[n("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":St},[n("header",na,[n("div",null,[e[3]||(e[3]=n("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),n("h2",{id:St},s(c.value.title),1),n("p",null,s(c.value.description),1)]),n("button",{ref_key:"dialogCloseButton",ref:b,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:tt}," × ",512)]),n("div",ra,[n("div",null,[e[4]||(e[4]=n("span",null,"命中记录",-1)),n("strong",null,s(c.value.rows.length),1),e[5]||(e[5]=n("small",null,"条",-1))]),n("div",null,[e[6]||(e[6]=n("span",null,"库存数量",-1)),n("strong",null,s(dt(c.value.totalQuantity)),1),e[7]||(e[7]=n("small",null,"KG",-1))]),n("div",null,[e[8]||(e[8]=n("span",null,"库存金额",-1)),n("strong",null,s(ut(c.value.totalAmount)),1),e[9]||(e[9]=n("small",null,"元",-1))])]),n("div",oa,[n("table",ia,[e[11]||(e[11]=n("thead",null,[n("tr",null,[n("th",null,"物料编码"),n("th",null,"物料描述"),n("th",null,"批次"),n("th",null,"品类"),n("th",null,"供应商"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"生产日期"),n("th",null,"到期日期"),n("th",{class:"number-cell"},"剩余天数"),n("th",null,"建议动作")])],-1)),n("tbody",null,[(p(!0),m(P,null,at(c.value.rows,(a,r)=>(p(),m("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",sa,s(a.mat||"—"),1),n("td",la,s(a.sku||"—"),1),n("td",ca,s(a.batch||"—"),1),n("td",null,s(a.category||"未知"),1),n("td",null,s(a.supplier||"未知"),1),n("td",da,s(dt(a.endQty)),1),n("td",ua,s(ut(a.endAmt)),1),n("td",null,s(a.prodDate||"—"),1),n("td",null,s(a.expDate||"—"),1),n("td",pa,[n("span",{class:nt(["days-value",Wt(a.remDays)])},s(a.remDays??"—"),3)]),n("td",null,s(a.action||"—"),1)]))),128)),c.value.rows.length===0?(p(),m("tr",ma,[...e[10]||(e[10]=[n("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):S("",!0)])])])])],32)):S("",!0)]),_:1})]))],64))}}),wa=De(fa,[["__scopeId","data-v-1f04327e"]]);export{wa as default};
