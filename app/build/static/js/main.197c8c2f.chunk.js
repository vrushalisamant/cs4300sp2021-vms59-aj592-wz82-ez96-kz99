(this["webpackJsonpquolesome-ness"]=this["webpackJsonpquolesome-ness"]||[]).push([[0],{18:function(e,t,c){},32:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(27),l=c.n(n),r=(c(32),c(7)),i=(c(18),c(23)),o=c(14),j=c(11),b=c(8),h=c(6),d=c(1);function u(e){for(var t=Object(a.useState)(!1),c=Object(r.a)(t,2),s=c[0],n=c[1],l=s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"like-button",onClick:function(){return n(!1)},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})}),Object(d.jsx)("p",{style:{"font-size":"12px"},children:e.likes+1})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"like-button",onClick:function(){return n(!0)},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-heart",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})}),Object(d.jsx)("p",{style:{"font-size":"12px"},children:e.likes})]}),u=[],x=e.categories.split(", "),O=0;O<x.length;O++)u.push(Object(d.jsx)(o.a,{className:"mr-1",variant:"info",children:x[O]},O));return Object(d.jsx)(i.a,{className:"quote-card m-4",children:Object(d.jsx)(i.a.Body,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(h.a,{xs:10,children:[Object(d.jsxs)("blockquote",{className:"blockquote m-2",children:[Object(d.jsxs)("p",{children:['"'," ",e.quote," ",'"']}),Object(d.jsx)("footer",{className:"blockquote-footer",children:e.author})]}),u]}),Object(d.jsxs)(h.a,{xs:1,children:[" ",l," "]})]})})})})}c(24);var x=function(e){for(var t=[],c=0;c<e.searchInfo.tags.length;c++)t.push(Object(d.jsx)(o.a,{className:"mr-1",variant:"info",children:e.searchInfo.tags[c]},c));return Object(d.jsx)(j.a,{style:{width:"80%"},children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{xs:4,children:Object(d.jsx)("h3",{children:"Your Search:"})}),Object(d.jsxs)(h.a,{xs:6,children:[Object(d.jsx)(b.a,{children:Object(d.jsx)(h.a,{children:e.searchInfo.text})}),Object(d.jsx)(b.a,{className:"mt-4",children:Object(d.jsx)(h.a,{children:Object(d.jsx)("h3",{children:t})})})]}),Object(d.jsx)(h.a,{xs:2,children:Object(d.jsxs)("p",{style:{fontSize:"3vw"},children:[e.searchInfo.emoji," "]})})]})})},O=c(15);var m=function(e){for(var t=e.searchResult,c=[],a=0;a<t.length;a++)c.push(Object(d.jsx)(u,{quote:t[a].quote,author:t[a].author,categories:t[a].tags,likes:t[a].likes},a));return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b.a,{className:"mt-4 mb-2",children:Object(d.jsx)(x,{searchInfo:e.searchInfo})}),Object(d.jsx)(b.a,{children:Object(d.jsx)(O.a,{variant:"outline-info",className:"button",onClick:function(){return e.handleBack()},children:"Back to Search"})}),Object(d.jsx)(b.a,{className:"m-5",children:Object(d.jsxs)(h.a,{children:[c," "]})})]})},f=c(10),g=c(21);var v=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"text",children:"Choose some relevant tags for your quote:"}),Object(d.jsx)(g.a,{options:[{label:"Life",value:"life"},{label:"Love",value:"love"},{label:"Inspirational",value:"inspirational"},{label:"Philosophy",value:"philosophy"},{label:"Humor",value:"humor"},{label:"God",value:"god"},{label:"Truth",value:"truth"},{label:"Wisdom",value:"wisdom"},{label:"Death",value:"death"}],value:e.selected,onChange:e.setSelected,labelledBy:"Select"})]})};var p=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),s=c[0],n=c[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),o=i[0],u=i[1];return Object(d.jsx)(j.a,{className:"input",children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)(b.a,{className:"tags",children:Object(d.jsx)(h.a,{children:Object(d.jsx)(v,{selected:s,setSelected:n})})}),Object(d.jsx)(b.a,{className:"feeling-moodbar",children:Object(d.jsxs)(b.a,{className:"feeling-moodbar",children:[Object(d.jsx)(h.a,{className:"feeling",children:Object(d.jsxs)(f.a.Group,{controlId:"feelingDescription",children:[Object(d.jsx)(f.a.Label,{className:"text",children:"How are you feeling today?"}),Object(d.jsx)(f.a.Control,{as:"textarea",rows:3,name:"feelingInput",value:o,onChange:function(e){var t=e.target.value;u(t)}}),Object(d.jsx)(f.a.Text,{className:"text-muted",children:"Are you feeling lonely? Troubled by anything? Tell us about it :)"})]})}),Object(d.jsxs)(h.a,{className:"moodbar",children:[Object(d.jsxs)(f.a.Group,{controlId:"moodRange",children:[Object(d.jsx)(f.a.Label,{className:"text",children:"Indicate your emotional state:"}),Object(d.jsx)(f.a.Control,{type:"range",className:"emoji-range",name:"moodInput"})]}),Object(d.jsx)("p",{className:"emoji",children:"\ud83d\ude0c \ud83d\ude42 \ud83d\ude10 \ud83d\ude41 \ud83d\ude22 \ud83d\ude30 \ud83d\ude2d"})]})]})}),Object(d.jsx)(b.a,{children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(O.a,{variant:"info",className:"button",name:"submit",onClick:function(t){return e.handleSubmit({text:o,tags:s.map((function(e){return e.value})),emoji:"\ud83d\ude22"})},children:"Find Your Quotes"})," "]})})]})})},N=c.p+"static/media/background.b2f0be58.jpg",k=c.p+"static/media/logo.66cf5940.png";var y=function(){return Object(d.jsx)("img",{src:k,alt:"Logo"})};var w=function(){var e=c(38),t=Object(a.useState)(!1),s=Object(r.a)(t,2),n=s[0],l=s[1],i=Object(a.useState)([{}]),o=Object(r.a)(i,2),j=o[0],b=o[1],h=Object(a.useState)([{}]),u=Object(r.a)(h,2),x=u[0],O=u[1];return Object(d.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(N,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"QUOLESOME-NESS"}),Object(d.jsx)(y,{}),Object(d.jsx)("p",{children:"Feeling down? Let's find you some wholesome quotes!"})]}),n?Object(d.jsx)(m,{searchInfo:j,searchResult:x,handleBack:function(){return l(!1)}}):Object(d.jsx)(p,{handleSubmit:function(t){b(t);var c=e.stringify({text:t.text});console.log(c),fetch("/search/text?".concat(c)).then((function(e){return e.json()})).then((function(e){O(e),l(!0)}))}}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("p",{children:["Created by: Amber Zheng, Anya Ji, Eunice Zhang, Kai Zou, Vrushali Samant"," "]})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[52,1,2]]]);
//# sourceMappingURL=main.197c8c2f.chunk.js.map