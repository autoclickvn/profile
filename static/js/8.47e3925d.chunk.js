(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[8],{29:function(e,t,c){"use strict";function i(e){var t,c,s="";if("string"===typeof e||"number"===typeof e)s+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(c=i(e[t]))&&(s&&(s+=" "),s+=c);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.a=function(){for(var e,t,c=0,s="";c<arguments.length;)(e=arguments[c++])&&(t=i(e))&&(s&&(s+=" "),s+=t);return s}},59:function(e,t,c){"use strict";c.r(t);var i,s=c(6),o=c(29),a=c(1),r=[{img:"/assets/project/img-project-1.png",title:"Cvfree",description:"Free online curriculum vitae",tech:"react typescript tailwind recoil node express mongodb",github:"https://github.com/autoclickvn/cvfree",imgDemo:"/assets/project/img-demo-cvfree.webp",linkDemo:"http://cvfree.top"},{img:"/assets/project/img-project-3.png",title:"Cvfree App",description:"Free online curriculum vitae on mobile app",tech:"react react-native typescript redux formik",github:"https://github.com/autoclickvn/cvfree-mobile-app",imgDemo:"/assets/project/img-demo-cvfree-mobile.webp",linkDemo:"https://youtu.be/Tmjgf6rKoCc"},{img:"/assets/project/img-project-3.png",title:"CMS Base",description:"A basic CMS framework",tech:"react tailwind typescript redux formik",github:"https://github.com/autoclickvn/cms-base",imgDemo:"/assets/project/img-demo-cms-base.webp",linkDemo:"https://base-cms.herokuapp.com"},{img:"/assets/project/img-project-4.png",title:"Galaxy Utility",description:"A repository of utility functions",tech:"typescript npm",github:"https://github.com/autoclickvn/galaxy-utility",imgDemo:"/assets/project/img-demo-galaxy-utility.webp",linkDemo:"https://www.npmjs.com/package/galaxy-utility"},{img:"/assets/project/img-project-1.png",title:"Weather",description:"See Vietnam weather with weather web app",tech:"react css",github:"https://github.com/autoclickvn/weather-app",imgDemo:"/assets/project/img-demo-weather.webp",linkDemo:"https://vn-weather.herokuapp.com"},{img:"/assets/project/img-project-3.png",title:"Cards Game",description:"Tien Len Mien Bac",tech:"react bootstrap antdesign ",github:"https://github.com/autoclickvn/cards-game",imgDemo:"/assets/project/img-demo-cards-game.webp",linkDemo:"https://tienlenmienbac.herokuapp.com"}],l=c(27),n=c(28).a.div(i||(i=Object(l.a)(["\n  @media (min-width: 1024px) {\n    & {\n      background-image: url(","/assets/project/img-bg-project.webp);\n    }\n  }\n\n  @media (max-width: 1023px) {\n    .content {\n      background-image: url(","/assets/project/img-bg-project.webp);\n    }\n  }\n"])),"",""),m=c(0),p=function(e){var t=e.isShow,c=Object(a.useState)(0),i=Object(s.a)(c,2),l=i[0],p=i[1];return Object(m.jsx)(n,{className:Object(o.a)({"fixed z-20 overflow-y-auto h-screen lg:overflow-hidden bg-no-repeat bg-cover top-0 left-0 opacity-90 duration-500":!0,"w-2/3 lg:w-1/3":t,"w-0":!t}),children:t&&Object(m.jsxs)("div",{className:"content h-auto pb-10 lg:pb-0 overflow-y-auto bg-no-repeat bg-cover",children:[Object(m.jsx)("div",{className:"pb-5 px-20 mt-60",children:Object(m.jsx)("div",{className:"grid grid-cols-2 gap-x-20 gap-y-7",children:r.map((function(e,t){return Object(m.jsxs)("div",{onClick:function(){return p(t+1)},className:"col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125",children:[Object(m.jsx)("img",{src:"".concat("").concat(e.img),className:Object(o.a)({"block h-28":!0,"w-36":1===t||2===t||5===t,"w-32":0===t||3===t||4===t}),alt:e.title}),Object(m.jsx)("label",{className:Object(o.a)({"block font-bold whitespace-nowrap uppercase":!0,"text-green-500":1===t||2===t||5===t,"text-yellow-500":0===t||3===t||4===t}),children:e.title})]},e.title)}))})}),0!==l&&Object(m.jsx)("div",{className:"fixed top-0 lg:top-20 left-0 bottom-0 lg:bottom-auto right-0 m-auto lg:left-auto lg:right-20 z-50 px-20 py-10",children:Object(m.jsxs)("div",{className:"bg-gradient-to-r from-yellow-300 to-green-400 p-4 h-full rounded-xl flex items-center justify-center relative",children:[Object(m.jsx)("button",{className:"absolute -top-4 -right-4 outline-none",onClick:function(){return p(0)},children:Object(m.jsx)("img",{src:"".concat("","/assets/img-close-modal.png"),className:"w-12",alt:"close"})}),Object(m.jsxs)("div",{className:"bg-white py-10 px-20 rounded-md h-full overflow-y-auto",style:{width:700},children:[Object(m.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[Object(m.jsx)("label",{className:"uppercase font-bold text-2xl",children:r[l-1].title}),Object(m.jsx)("span",{className:"block mt-2 italic font-medium text-gray-400",children:r[l-1].description})]}),Object(m.jsx)("div",{className:"flex justify-center mt-7",children:Object(m.jsx)("img",{src:r[l-1].imgDemo,className:"h-60 w-auto border-2 rounded-md shadow",alt:r[l-1].title})}),Object(m.jsx)("div",{className:"flex items-center justify-start mt-5",children:Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("span",{className:"block font-semibold mr-3 whitespace-nowrap",children:"Tech used:"}),r[l-1].tech.split(" ").map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{title:e,src:"".concat("","/assets/logo/img-logo-").concat(e,".png"),className:"w-10 mx-5",alt:e})})}))]})}),Object(m.jsxs)("div",{className:"mt-5 flex justify-start",children:[Object(m.jsx)("span",{className:"block font-semibold mr-3 whitespace-nowrap",children:"Demo:"}),Object(m.jsx)("a",{href:r[l-1].linkDemo,target:"_blank",className:"block text-blue-500 hover:text-blue-600 font-medium",rel:"noopener noreferrer",children:r[l-1].linkDemo})]}),Object(m.jsxs)("div",{className:"mt-5 flex justify-start",children:[Object(m.jsx)("span",{className:"block font-semibold mr-3 whitespace-nowrap",children:"Github:"}),Object(m.jsx)("a",{href:r[l-1].github,target:"_blank",className:"block text-blue-500 hover:text-blue-600 font-medium",rel:"noopener noreferrer",children:r[l-1].github})]})]})]})})]})})};t.default=p}}]);
//# sourceMappingURL=8.47e3925d.chunk.js.map