import{j as T}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g=({label:o,size:h="normal",allCaps:C=!1,color:b="text-primary",fontColor:v="#00000"})=>T.jsx("span",{className:`${h} ${b}`,style:{color:v},children:C?o.toUpperCase():o});g.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"The text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"The size of the text",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether to capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"The color of the Label",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"The font color of the text",defaultValue:{value:"'#00000'",computed:!1}}}};const S={title:"MyLabel",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"inline-radio"}},fontColor:{control:{type:"color"}}}},e={args:{label:"Hello, World!"}},a={args:{label:"Hello, World!",allCaps:!0}},r={args:{label:"Hello, World!",color:"text-secondary"}},l={args:{label:"Hello, World!",fontColor:"#ff0000"}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Hello, World!'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Hello, World!',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Hello, World!',
    color: 'text-secondary'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,y,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Hello, World!',
    fontColor: '#ff0000'
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,S as default};
