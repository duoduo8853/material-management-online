import{d as ne,r as k,y as wt,f as re,g as oe,o as f,c as g,a as n,z as kt,h as E,t as s,i as _,B as ie,F as X,j as et,n as at,p as se,C as le,D as ce,T as de,J as ue,q as R,w as pe,x as me,u as he}from"./index-BCsvzPJO.js";import{W as be}from"./WorkbookImportPanel-Dypp-gLc.js";import{u as fe,d as ge}from"./useInventoryWorkbookSource-CdKtyPFT.js";import{g as ye,r as ve,n as Dt,s as xe,a as we,u as ke}from"./businessDataStore-CrP9RR4_.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";function I(u){return String(u??"").replace(/\s+/g," ").trim()}function Et(u){let l=I(u);return l?(l=l.replace(/^(PET|HDPE|PP|PC|PE|PET瓶|HDPE瓶|PP瓶|瓶)/i,""),l=l.replace(/[（(].*$/,""),l=l.replace(/(调配液|浓缩液|原浆|糖浆|调配|浓缩|液)$/i,""),l.trim()):""}const De={blendingCode:["调配液料号","调配液编码","调配液代码"],blendingName:["调配液","调配液名称","调配液描述"],materialCode:["物料","物料编码","物料号","料号"],materialName:["物料描述","物料名称"],flavor:["口味","风味","产品口味","品味"]};function U(u){return I(u).toLocaleLowerCase("zh-CN").replace(/[（）()【】[\]·:：/\\_\-\s]/g,"")}function Ee(u){const l=u.map(U),p={};return Object.entries(De).forEach(([S,y])=>{const c=y.map(U),m=l.findIndex(h=>c.includes(h));m>=0&&(p[S]=m)}),p}function _e(u){const l=we(u,{type:"array",cellDates:!0}),p=[];return l.SheetNames.forEach(S=>{const y=l.Sheets[S];if(!y)return;const c=ke.sheet_to_json(y,{header:1,defval:"",raw:!0});let m=null;for(let h=0;h<Math.min(c.length,20);h++){const v=Ee(c[h]);if(v.materialCode!==void 0&&(v.flavor!==void 0||v.blendingName!==void 0)){m=v;break}}if(m)for(let h=0;h<c.length;h++){const v=c[h];if(m.materialCode===void 0)continue;const B=I(v[m.materialCode]);if(!B||U(B)===U("物料"))continue;const F=m.blendingName!==void 0?I(v[m.blendingName]):"",D=(m.flavor!==void 0?I(v[m.flavor]):"")||Et(F);p.push({blendingCode:m.blendingCode!==void 0?I(v[m.blendingCode]):"",blendingName:F,materialCode:B,materialName:m.materialName!==void 0?I(v[m.materialName]):"",flavor:D})}}),p}function Ce(u){const l=new Map;return u.forEach(p=>{if(!p.materialCode)return;const S=p.flavor||Et(p.blendingName);if(!S)return;const y=l.get(p.materialCode)||[],c={flavor:S,blendingName:p.blendingName};y.some(h=>h.flavor===c.flavor&&h.blendingName===c.blendingName)||y.push(c),l.set(p.materialCode,y)}),l}async function Ae(u){if(!/\.xlsx?$/i.test(u.name))throw new Error("请选择 XLS 或 XLSX 格式的 BOM 文件");const l=_e(await u.arrayBuffer());if(!l.length)throw new Error('BOM 文件中没有找到有效记录，请检查是否包含"物料"列以及"口味"或"调配液"列');const p={kind:"bom",fileName:u.name,updatedAt:new Date().toISOString(),records:l};return await xe(p),Dt("bom"),p}function Be(){return ye("bom")}async function Ne(){await ve("bom"),Dt("bom")}function Ie(u){return u?{fileName:u.fileName,updatedAt:u.updatedAt,rowCount:u.records.length,isCustom:!0}:{fileName:"",updatedAt:"",rowCount:0,isCustom:!1}}const Fe={class:"page-container expiry-dashboard-page"},Le={class:"data-source-row"},Me={class:"bom-panel"},Te={class:"bom-panel-info"},ze={key:0},$e={key:1,class:"bom-error"},qe={class:"bom-panel-actions"},Re=["disabled"],Ve={class:"dashboard-frame-shell"},Pe={key:0,class:"frame-loading"},Oe=["src","title"],We={key:0,class:"flavor-warning-panel"},He={class:"flavor-warning-heading"},je={class:"flavor-warning-meta"},Qe={class:"flavor-warning-table-wrap"},Xe={class:"flavor-warning-table"},Ue={class:"flavor-material-cell"},Ke={class:"number-cell"},Ye={class:"number-cell"},Ge={class:"flavor-cell"},Je={key:0,class:"flavor-empty"},Ze=["title"],ta={class:"detail-dialog-header"},ea={class:"detail-dialog-summary"},aa={class:"detail-dialog-table-wrap"},na={class:"detail-dialog-table"},ra={class:"code-cell"},oa={class:"material-cell"},ia={class:"code-cell"},sa={class:"number-cell"},la={class:"number-cell"},ca={class:"number-cell"},da={key:0},St="chart-detail-dialog-title",nt=1.1,ua=`
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
`,pa=ne({__name:"index",setup(u){const l=k(!0),p=k(),S=k(900),y=k("risk"),c=k(null),m=k(),h=k(0),v=ue();he();function B(t){return t==="material"?"material":"raw"}const F=k(B(v.params.type)),T=R(()=>F.value==="raw"?"原料":"物料"),D=k(null),L=R(()=>Ie(D.value)),V=k(!1),P=k(""),rt=k(null),ot=R(()=>{var t;return Ce(((t=D.value)==null?void 0:t.records)||[])}),K=k([]);function _t(t){return ot.value.get(t)||[]}async function Ct(){try{D.value=await Be()}catch{D.value=null}}async function At(t){V.value=!0,P.value="";try{D.value=await Ae(t)}catch(e){P.value=e instanceof Error?e.message:"BOM 文件导入失败"}finally{V.value=!1}}async function Bt(){try{await Ne(),D.value=null}catch{}}function Nt(){var t;(t=rt.value)==null||t.click()}async function It(t){var r;const e=t.target,a=(r=e.files)==null?void 0:r[0];a&&(await At(a),e.value="")}function it(t){return t===null?"missing":t<0?"expired":t<=30?"red":t<=90?"yellow":"green"}function Ft(t){const e=it(t);return{expired:"已过期",red:"红灯",yellow:"黄灯",green:"绿灯",missing:"效期待补充"}[e]||"—"}function Lt(t){return(t||0).toLocaleString("zh-CN",{maximumFractionDigits:0})}function Mt(t){return((t||0)/1e4).toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2})}const Y=R(()=>{if(!D.value||!ot.value.size)return[];const t=new Set,e=[];for(const a of K.value){if(a.remDays===null||a.remDays>90)continue;const r=_t(a.mat);if(r.length===0)continue;const o=`${a.mat}-${a.batch}`;t.has(o)||(t.add(o),e.push({mat:a.mat,sku:a.sku,batch:a.batch,category:a.category,expDate:a.expDate,remDays:a.remDays,endQty:a.endQty,endAmt:a.endAmt,flavors:r,state:it(a.remDays)}))}return e.sort((a,r)=>{const o=a.remDays??9999,i=r.remDays??9999;return o-i||r.endAmt-a.endAmt})}),z=[{id:"risk",label:"库存风险"},{id:"stagnant",label:"库存积压"},{id:"replenishment",label:"补货预警"},{id:"trafficLight",label:"红黄灯"}],st=R(()=>z.findIndex(t=>t.id===y.value));let C,A,$,G,J="";const Z=[],{sourceUrl:lt,sourceMeta:O,importing:Tt,importError:zt,initialize:$t,importFile:qt,reset:Rt,setMaterialType:Vt,dispose:Pt}=fe({initialMaterialType:B(v.params.type)}),Ot={已过期:t=>t.remDays!==null&&t.remDays<0,"0-30天":t=>t.remDays!==null&&t.remDays>=0&&t.remDays<=30,"31-90天":t=>t.remDays!==null&&t.remDays>=31&&t.remDays<=90,"91-180天":t=>t.remDays!==null&&t.remDays>=91&&t.remDays<=180,"181-365天":t=>t.remDays!==null&&t.remDays>=181&&t.remDays<=365,"1年以上":t=>t.remDays!==null&&t.remDays>365};function ct(t){return new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}).format(t||0)}function dt(t){return new Intl.NumberFormat("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t||0)}function Wt(t){return t===null?"is-neutral":t<0?"is-expired":t<=30?"is-critical":t<=90?"is-warning":"is-normal"}function M(){var t;return(t=p.value)==null?void 0:t.contentWindow}function ut(t){return t<=0?t:Math.max(Math.round(t*nt),Math.ceil(t+1))}function pt(t){return t.replace(/(\d+(?:\.\d+)?)px/g,(e,a)=>`${ut(Number(a))}px`)}function mt(t){Array.from(t).forEach(e=>{if(e.type===CSSRule.STYLE_RULE){const r=e.style;r.fontSize&&(r.fontSize=pt(r.fontSize))}const a=e.cssRules;a&&mt(a)})}function Ht(t){const e=t.documentElement;e.dataset.systemFontScaleApplied!==String(nt)&&(Array.from(t.styleSheets).forEach(a=>{try{mt(a.cssRules)}catch{}}),t.querySelectorAll("[style]").forEach(a=>{a.style.fontSize&&(a.style.fontSize=pt(a.style.fontSize))}),e.dataset.systemFontScaleApplied=String(nt))}function W(t,e="",a=new WeakMap){if(typeof t=="number"&&e==="fontSize")return ut(t);if(!t||typeof t!="object")return t;if(a.has(t))return a.get(t);if(Array.isArray(t)){const o=[];return a.set(t,o),t.forEach(i=>o.push(W(i,"",a))),o}const r={};return a.set(t,r),Object.entries(t).forEach(([o,i])=>{r[o]=W(i,o,a)}),r}function ht(t){var r;if(t.__systemFontScaleApplied||!t.setOption)return;const e=t.setOption.bind(t);t.setOption=(o,...i)=>{e(W(o),...i)},t.__systemFontScaleApplied=!0;const a=(r=t.getOption)==null?void 0:r.call(t);a&&e(W(a))}function bt(t){var a;const e=(a=M())==null?void 0:a.echarts;if(e){if(!e.__systemFontScaleApplied&&e.init){const r=e.init.bind(e);e.init=(...o)=>{const i=r(...o);return ht(i),i},e.__systemFontScaleApplied=!0}t.querySelectorAll(".chart-box").forEach(r=>{const o=e.getInstanceByDom(r);o&&ht(o)})}}function ft(){const t=M();if(!t)return[];try{return t.eval("getView()")}catch{return[]}}function jt(t,e,a){const r=[...a].sort((o,i)=>o.remDays===null?1:i.remDays===null?-1:o.remDays-i.remDays);c.value={title:t,description:e,rows:r,totalQuantity:r.reduce((o,i)=>o+(i.endQty||0),0),totalAmount:r.reduce((o,i)=>o+(i.endAmt||0),0)},me(()=>{var o;return(o=m.value)==null?void 0:o.focus()})}function tt(){c.value=null}function H(t,e,a,r){var w,N,Q;const o=t.getElementById(e),i=o&&((N=(w=M())==null?void 0:w.echarts)==null?void 0:N.getInstanceByDom(o));if(!o||!i)return;o.classList.add("drillable-chart");const d=(Q=o.closest(".card"))==null?void 0:Q.querySelector(".card-title");if(d&&!d.querySelector(".drill-hint")){const x=t.createElement("span");x.className="drill-hint",x.textContent="点击图形查看明细",d.appendChild(x)}const b=x=>{const q=r(x,ft());jt(a,q.description,q.rows)};i.on("click",b),Z.push(()=>i.off("click",b))}function Qt(t){Z.splice(0).forEach(e=>e()),H(t,"chart-expiry","效期区间批次明细",(e,a)=>{const r=Ot[e.name]??(()=>!1);return{description:`效期区间：${e.name} · 数据继承当前页面筛选条件`,rows:a.filter(r)}}),H(t,"chart-warehouse","零耗用物料明细",(e,a)=>({description:`品类：${e.name} · 实际耗用量为 0`,rows:a.filter(r=>r.category===e.name&&r.consume===0)})),H(t,"chart-category","品类风险批次明细",(e,a)=>{var i;const r=M();let o="";try{const d=r==null?void 0:r.eval("computeCategory(getView())");o=((i=d==null?void 0:d[e.dataIndex])==null?void 0:i.category)??""}catch{o=e.name.split(" ")[0]}return{description:`品类：${o} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(d=>d.category===o&&d.remDays!==null&&d.remDays<=90)}}),H(t,"chart-supplier","供应商风险批次明细",(e,a)=>({description:`供应商：${e.name} · 临期及过期批次（剩余天数 ≤ 90 天）`,rows:a.filter(r=>r.supplier===e.name&&r.remDays!==null&&r.remDays<=90)}))}const Xt={risk:[".dashboard > .charts-row"],stagnant:[".dashboard > .rank-row"],replenishment:[".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row"],trafficLight:[".dashboard > .traffic-light-row"]},Ut=[".dashboard > .charts-row",".dashboard > .rank-row",".dashboard > section.card:not(.rules-row)",".dashboard > .rules-row",".dashboard > .traffic-light-row"].join(", ");function j(){$&&(window.clearTimeout(G),G=window.setTimeout(()=>{$&&(S.value=Math.max(900,Math.ceil($.scrollHeight)+2))},40))}function Kt(t){var a;const e=(a=M())==null?void 0:a.echarts;e&&t.querySelectorAll(".chart-box").forEach(r=>{var o,i;r.offsetParent!==null&&((i=(o=e.getInstanceByDom(r))==null?void 0:o.resize)==null||i.call(o))})}function Yt(t,e){const a=t.querySelector(".system-batch-pagination");if(a)return a;e.id||(e.id="embedded-expiry-dashboard");const r=t.createElement("nav");r.className="system-batch-pagination",r.setAttribute("aria-label","批次与效期预警页面");const o=t.createElement("div");o.className="system-batch-tab-list",o.setAttribute("role","tablist"),z.forEach((N,Q)=>{const x=t.createElement("button"),q=t.createElement("span");x.id=`embedded-batch-tab-${N.id}`,x.type="button",x.dataset.dashboardView=N.id,x.setAttribute("role","tab"),x.setAttribute("aria-controls",e.id),q.textContent=String(Q+1).padStart(2,"0"),x.append(q,t.createTextNode(N.label)),x.addEventListener("click",()=>yt(N.id)),o.appendChild(x)});const i=t.createElement("div");i.className="system-batch-page-controls";const d=t.createElement("span");d.dataset.pageStatus="true";const b=t.createElement("button");b.type="button",b.dataset.pageDirection="previous",b.setAttribute("aria-label","上一页"),b.textContent="←",b.addEventListener("click",()=>vt(-1));const w=t.createElement("button");return w.type="button",w.dataset.pageDirection="next",w.setAttribute("aria-label","下一页"),w.textContent="→",w.addEventListener("click",()=>vt(1)),i.append(d,b,w),r.append(o,i),r}function Gt(t,e){const a=e.querySelector(":scope > .kpi-row"),r=e.querySelector(":scope > .header"),o=e.querySelector(":scope > .upload-hint"),i=Yt(t,e);let d=null;a&&(e.insertBefore(a,e.firstElementChild),d=a),[r,o,i].forEach(b=>{b&&(d?d.after(b):e.insertBefore(b,e.firstElementChild),d=b)})}function Jt(t){const e=st.value;t.querySelectorAll("[data-dashboard-view]").forEach(i=>{const d=i.dataset.dashboardView===y.value;i.classList.toggle("active",d),i.setAttribute("aria-selected",String(d)),i.tabIndex=d?0:-1});const a=t.querySelector("[data-page-status]");a&&(a.textContent=`${String(e+1).padStart(2,"0")} / ${String(z.length).padStart(2,"0")}`);const r=t.querySelector('[data-page-direction="previous"]'),o=t.querySelector('[data-page-direction="next"]');r&&(r.disabled=e===0),o&&(o.disabled=e===z.length-1)}function gt(t){t.querySelectorAll(Ut).forEach(e=>{e.classList.add("system-pagination-hidden"),e.setAttribute("aria-hidden","true")}),Xt[y.value].forEach(e=>{t.querySelectorAll(e).forEach(a=>{a.classList.remove("system-pagination-hidden"),a.setAttribute("aria-hidden","false")})}),t.documentElement.dataset.systemDashboardView=y.value,Jt(t),requestAnimationFrame(()=>{Kt(t),j()})}function yt(t){var a;if(y.value===t)return;y.value=t;const e=(a=p.value)==null?void 0:a.contentDocument;e&&gt(e)}function vt(t){const e=st.value+t,a=z[e];a&&yt(a.id)}function Zt(){var o,i,d,b;l.value=!1;const t=ft();h.value=t.length,K.value=t;const e=(o=p.value)==null?void 0:o.contentDocument;if(!e)return;if(!e.getElementById("system-minimal-theme")){const w=e.createElement("style");w.id="system-minimal-theme",w.textContent=ua,e.head.appendChild(w)}Ht(e),bt(e),(d=(i=M())==null?void 0:i.renderAll)==null||d.call(i),bt(e),Qt(e);const a=e.querySelector(".dashboard > section.card:not(.rules-row)");(b=a==null?void 0:a.lastElementChild)==null||b.classList.add("batch-detail-scroll");const r=e.querySelector(".dashboard");r&&($=r,Gt(e,r),gt(e),C==null||C.disconnect(),A==null||A.disconnect(),C=new ResizeObserver(j),A=new MutationObserver(j),C.observe(r),A.observe(r,{childList:!0,subtree:!0,characterData:!0}),requestAnimationFrame(j))}function te(){l.value=!1,h.value=0,K.value=[]}async function ee(t){try{await qt(t),l.value=!0,h.value=0,c.value=null}catch{}}async function ae(){try{await Rt(),l.value=!0,h.value=0,c.value=null}catch{}}function xt(t){t.key==="Escape"&&c.value&&tt()}return wt(c,t=>{t?(J=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=J}),wt(()=>v.params.type,t=>{const e=B(t);F.value!==e&&(F.value=e,l.value=!0,h.value=0,c.value=null,Vt(e))}),re(()=>{$t(),Ct(),document.documentElement.classList.add("batch-bento-active"),window.addEventListener("keydown",xt)}),oe(()=>{Pt(),Z.splice(0).forEach(t=>t()),C==null||C.disconnect(),A==null||A.disconnect(),$=void 0,window.clearTimeout(G),window.removeEventListener("keydown",xt),document.body.style.overflow=J,document.documentElement.classList.remove("batch-bento-active")}),(t,e)=>(f(),g(X,null,[n("div",Fe,[n("input",{ref_key:"bomFileInput",ref:rt,type:"file",accept:".xlsx,.xls",class:"hidden-bom-input",onChange:It},null,544),n("div",Le,[kt(be,{title:"批次与效期数据",description:"","file-name":E(O).fileName,"updated-at":E(O).updatedAt,"row-count":h.value||E(O).rowCount,busy:E(Tt),custom:E(O).isCustom,error:E(zt),"action-label":"导入库存 Excel","show-template":"",onFile:ee,onReset:ae,onTemplate:E(ge)},null,8,["file-name","updated-at","row-count","busy","custom","error","onTemplate"]),n("section",Me,[n("div",Te,[e[0]||(e[0]=n("strong",null,"配方耗用关联",-1)),L.value.isCustom?(f(),g("p",ze,s(L.value.fileName)+" · "+s(L.value.rowCount)+" 条 · "+s(L.value.updatedAt.slice(0,10)),1)):_("",!0),P.value?(f(),g("p",$e,s(P.value),1)):_("",!0)]),n("div",qe,[n("button",{type:"button",class:"btn btn-primary",disabled:V.value,onClick:Nt},s(V.value?"上传中...":"上传 BOM Excel"),9,Re),L.value.isCustom?(f(),g("button",{key:0,type:"button",class:"btn btn-secondary",onClick:Bt}," 清除 BOM ")):_("",!0)])])]),n("div",Ve,[l.value?(f(),g("div",Pe,"正在载入"+s(T.value)+"批次与效期预警看板...",1)):_("",!0),E(lt)?(f(),g("iframe",{key:1,id:"expiry-dashboard-frame",ref_key:"dashboardFrame",ref:p,class:"expiry-dashboard-frame",src:E(lt),title:`${T.value}批次与效期预警看板`,scrolling:"no",style:ie({height:`${S.value}px`}),onLoad:Zt,onError:te},null,44,Oe)):_("",!0)]),L.value.isCustom&&Y.value.length?(f(),g("section",We,[n("div",He,[n("div",null,[e[1]||(e[1]=n("span",{class:"panel-kicker"},"FLAVOR EXPIRY ALERT",-1)),n("h2",null,"临期"+s(T.value)+"耗用预警",1)]),n("span",je,s(Y.value.length)+" 条临期"+s(T.value)+"可在 BOM 配方中耗用 · 按剩余天数升序 ",1)]),n("div",Qe,[n("table",Xe,[e[2]||(e[2]=n("thead",null,[n("tr",null,[n("th",null,"物料"),n("th",null,"批次"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"到期日期"),n("th",null,"剩余天数"),n("th",null,"效期状态"),n("th",null,"可耗用口味")])],-1)),n("tbody",null,[(f(!0),g(X,null,et(Y.value,(a,r)=>(f(),g("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",Ue,[n("strong",null,s(a.sku||"未标注物料"),1),n("span",null,s(a.mat),1)]),n("td",null,s(a.batch||"—"),1),n("td",Ke,s(Lt(a.endQty)),1),n("td",Ye,s(Mt(a.endAmt))+" 万元",1),n("td",null,[n("strong",null,s(a.expDate||"未标注"),1)]),n("td",null,[n("span",{class:at(["rem-days-badge",a.state])},s(a.remDays!==null?`${a.remDays} 天`:"—"),3)]),n("td",null,[n("span",{class:at(["expiry-status-badge",a.state])},s(Ft(a.remDays)),3)]),n("td",Ge,[a.flavors.length?_("",!0):(f(),g("span",Je,"—")),(f(!0),g(X,null,et(a.flavors,o=>(f(),g("span",{key:o.flavor,class:"flavor-tag",title:o.blendingName?`调配液：${o.blendingName}`:""},s(o.flavor),9,Ze))),128))])]))),128))])])])])):_("",!0)]),(f(),se(de,{to:"body"},[kt(ce,{name:"detail-dialog"},{default:le(()=>[c.value?(f(),g("div",{key:0,class:"detail-dialog-backdrop",role:"presentation",onMousedown:pe(tt,["self"])},[n("section",{class:"detail-dialog",role:"dialog","aria-modal":"true","aria-labelledby":St},[n("header",ta,[n("div",null,[e[3]||(e[3]=n("p",{class:"detail-dialog-eyebrow"},"CHART DETAIL · 图表下钻",-1)),n("h2",{id:St},s(c.value.title),1),n("p",null,s(c.value.description),1)]),n("button",{ref_key:"dialogCloseButton",ref:m,type:"button",class:"detail-dialog-close","aria-label":"关闭明细弹窗",onClick:tt}," × ",512)]),n("div",ea,[n("div",null,[e[4]||(e[4]=n("span",null,"命中记录",-1)),n("strong",null,s(c.value.rows.length),1),e[5]||(e[5]=n("small",null,"条",-1))]),n("div",null,[e[6]||(e[6]=n("span",null,"库存数量",-1)),n("strong",null,s(ct(c.value.totalQuantity)),1),e[7]||(e[7]=n("small",null,"KG",-1))]),n("div",null,[e[8]||(e[8]=n("span",null,"库存金额",-1)),n("strong",null,s(dt(c.value.totalAmount)),1),e[9]||(e[9]=n("small",null,"元",-1))])]),n("div",aa,[n("table",na,[e[11]||(e[11]=n("thead",null,[n("tr",null,[n("th",null,"物料编码"),n("th",null,"物料描述"),n("th",null,"批次"),n("th",null,"品类"),n("th",null,"供应商"),n("th",{class:"number-cell"},"库存数量"),n("th",{class:"number-cell"},"库存金额"),n("th",null,"生产日期"),n("th",null,"到期日期"),n("th",{class:"number-cell"},"剩余天数"),n("th",null,"建议动作")])],-1)),n("tbody",null,[(f(!0),g(X,null,et(c.value.rows,(a,r)=>(f(),g("tr",{key:`${a.mat}-${a.batch}-${r}`},[n("td",ra,s(a.mat||"—"),1),n("td",oa,s(a.sku||"—"),1),n("td",ia,s(a.batch||"—"),1),n("td",null,s(a.category||"未知"),1),n("td",null,s(a.supplier||"未知"),1),n("td",sa,s(ct(a.endQty)),1),n("td",la,s(dt(a.endAmt)),1),n("td",null,s(a.prodDate||"—"),1),n("td",null,s(a.expDate||"—"),1),n("td",ca,[n("span",{class:at(["days-value",Wt(a.remDays)])},s(a.remDays??"—"),3)]),n("td",null,s(a.action||"—"),1)]))),128)),c.value.rows.length===0?(f(),g("tr",da,[...e[10]||(e[10]=[n("td",{colspan:"11",class:"detail-empty"},"当前条件下没有可显示的批次明细",-1)])])):_("",!0)])])])])],32)):_("",!0)]),_:1})]))],64))}}),ya=Se(pa,[["__scopeId","data-v-256492f0"]]);export{ya as default};
