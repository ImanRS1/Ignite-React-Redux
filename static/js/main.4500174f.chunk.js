(this["webpackJsonpignite-react-redux"]=this["webpackJsonpignite-react-redux"]||[]).push([[0],{529:function(n,e,t){"use strict";t.r(e);var a,i,r,c,d,o,s,m,h,l,b,p,w,g,x,u,v,f=t(0),j=t.n(f),O=t(87),A=t.n(O),y=t(10),k=t(9),E=t(530),I=(t(211),"https://api.rawg.io/api/"),z=(new Date).getFullYear(),N=function(){var n=(new Date).getMonth()+1;return n<10?"0".concat(n):n}(),S=function(){var n=(new Date).getDate();return n<10?"0".concat(n):n}(),C="".concat(z,"-").concat(N,"-").concat(S),R="".concat(z-1,"-").concat(N,"-").concat(S),D="".concat(z+1,"-").concat(N,"-").concat(S),T="".concat(z-10,"-").concat(N,"-").concat(S),G="games?dates=".concat(R,",").concat(C,"&ordering=-rating&page_size=12&key=71ef119d7ead41e0926b6a8bc17b76a2"),L="games?dates=".concat(C,",").concat(D,"&ordering=-added&page_size=12&key=71ef119d7ead41e0926b6a8bc17b76a2"),U="games?dates=".concat(T,",").concat(C,"&page_size=12&metacritic=90,100&key=71ef119d7ead41e0926b6a8bc17b76a2"),B=function(n){return"".concat(I,"games/").concat(n,"?&key=71ef119d7ead41e0926b6a8bc17b76a2")},_=function(n){return"".concat(I,"games/").concat(n,"/screenshots?&key=71ef119d7ead41e0926b6a8bc17b76a2")},H=function(n){return"".concat(I,"games?search=").concat(n,"&page_size=12&key=71ef119d7ead41e0926b6a8bc17b76a2")},M={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},P={hidden:{x:300,opacity:0},show:{x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}},X={hidden:{opacity:0,color:"#000"},show:{color:"#fff",opacity:1,transition:{delay:1,type:"spring",bounce:.5,duration:.1,repeat:6,repeatType:"reverse"}}},F={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},Z=t(39),V=t(11),J=t.p+"static/media/logo.9b6b8655.svg",W=function(n,e){return n?n.match(/media\/screenshots/)?n.replace("media/screenshots","media/resize/".concat(e,"/-/screenshots")):n.replace("/media/games/","/media/resize/".concat(e,"/-/games/")):J},Y=t.p+"static/media/playstation.18cc4b9c.svg",Q=t.p+"static/media/steam.d7b8819f.svg",K=t.p+"static/media/xbox.3e7db735.svg",q=t.p+"static/media/nintendo.f579be04.svg",$=t.p+"static/media/apple.5757c37e.svg",nn=t.p+"static/media/gamepad.c9269ef5.svg",en=t(3),tn=Object(k.b)(E.a.div)(a||(a=Object(y.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #333;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]))),an=Object(k.b)(E.a.div)(i||(i=Object(y.a)(["\n  margin-top: 1rem;\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  color: black;\n  position: absolute;\n  left: 10%;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n  }\n\n  .top-container {\n    height: 70vh;\n    width: 80vw;\n    margin: -2rem -5rem;\n    position: relative;\n\n    @media screen and (max-width: 1100px) {\n      margin: -2rem -1rem;\n    }\n\n    @media screen and (max-width: 650px) {\n      margin: -2rem -1rem;\n      width: 100%;\n    }\n\n    @media screen and (max-width: 524px) {\n      margin: -2rem -1rem;\n    }\n  }\n\n  @media screen and (max-width: 1100px) {\n    padding: 2rem 1rem;\n  }\n\n  @media screen and (max-width: 900px) {\n    padding: 2rem 1rem;\n  }\n\n  @media screen and (max-width: 524px) {\n    width: 90%;\n    left: 5%;\n  }\n"]))),rn=Object(k.b)(E.a.div)(r||(r=Object(y.a)(["\n  width: 80vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem 0.5rem 2rem;\n  position: absolute;\n  z-index: 1;\n  h3 {\n    padding: 0.2rem 0;\n\n    @media screen and (max-width: 650px) {\n      width: 80%;\n    }\n\n    @media screen and (max-width: 400px) {\n      width: 70%;\n    }\n  }\n  h3,\n  p {\n    color: white;\n  }\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n\n  .publisher {\n    font-size: 0.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.25rem;\n  }\n\n  .genres-container {\n    margin-top: 0.5rem;\n    display: flex;\n    flex-direction: row;\n  }\n  .genres {\n    font-size: 1rem;\n    font-weight: lighter;\n    border: 1px solid white;\n    padding: 0 0.5rem;\n    margin-right: 0.2rem;\n    color: white;\n\n    @media screen and (max-width: 650px) {\n      font-size: 0.7rem;\n      padding: 0 0.2rem;\n    }\n  }\n\n  .info-url {\n    margin-top: 0.2rem;\n    p {\n      font-size: 0.7rem;\n    }\n  }\n\n  .rating-container {\n    display: flex;\n\n    .rating-separate {\n      margin-left: 0.5rem;\n\n      @media screen and (max-width: 650px) {\n        font-size: 0.8rem;\n      }\n    }\n  }\n\n  @media screen and (max-width: 880px) {\n    padding: 1rem 0.5rem 0.5rem 0.5rem;\n  }\n\n  @media screen and (max-width: 524px) {\n    width: 90vw;\n  }\n\n  @media screen and (max-width: 400px) {\n    flex-direction: column;\n  }\n"]))),cn=Object(k.b)(E.a.div)(c||(c=Object(y.a)(["\n  text-align: end;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 50%;\n\n  .meta-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    .meta-header {\n      margin-top: 1rem;\n      @media screen and (max-width: 1100px) {\n        font-size: 1rem;\n      }\n\n      @media screen and (max-width: 1100px) {\n        display: none;\n      }\n    }\n  }\n\n  h3 {\n    font-weight: lighter;\n  }\n\n  @media screen and (max-width: 650px) {\n    width: auto;\n    h3 {\n      padding-bottom: 0;\n    }\n  }\n\n  @media screen and (max-width: 400px) {\n    width: 100%;\n    align-items: flex-start;\n    h3 {\n      padding-bottom: 0;\n    }\n  }\n"]))),dn=Object(k.b)(E.a.div)(d||(d=Object(y.a)(["\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  img {\n    margin: 0.5rem;\n    width: 3rem;\n    height: 3rem;\n    background-color: white;\n    border-radius: 0.5rem;\n    padding: 0.2rem;\n  }\n\n  @media screen and (max-width: 1100px) {\n    img {\n      width: 2rem;\n      height: 2rem;\n    }\n  }\n\n  @media screen and (max-width: 850px) {\n  }\n\n  @media screen and (max-width: 650px) {\n    display: none;\n    /* img {\n      width: 1.5rem;\n      height: 1.5rem;\n    } */\n  }\n\n  @media screen and (max-width: 400px) {\n    justify-content: flex-start;\n  }\n"]))),on=Object(k.b)(E.a.div)(o||(o=Object(y.a)(["\n  border: 3px solid gold;\n  font-size: 2rem;\n  border-radius: 1rem;\n  width: 5rem;\n  height: 4rem;\n  color: white;\n  background-color: #333;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 1100px) {\n    font-size: 1.5rem;\n    width: 4rem;\n    height: 3rem;\n    border: 2px solid gold;\n  }\n\n  @media screen and (max-width: 650px) {\n    font-size: 1.5rem;\n    width: 3rem;\n    height: 3rem;\n    border: 2px solid gold;\n    border-radius: 1rem;\n    margin-right: 0.5rem;\n    font-size: 1.3rem;\n  }\n\n  @media screen and (max-width: 524px) {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n  }\n"]))),sn=Object(k.b)(E.a.div)(s||(s=Object(y.a)(["\n  position: absolute;\n  top: 0;\n  z-index: 0;\n  img {\n    width: 80vw;\n    overflow: hidden;\n    height: 70vh;\n  }\n\n  @media screen and (max-width: 880px) {\n    img {\n      height: 70vh;\n      object-fit: cover;\n    }\n  }\n\n  @media screen and (max-width: 524px) {\n    img {\n      width: 90vw;\n    }\n  }\n"]))),mn=Object(k.b)(E.a.div)(m||(m=Object(y.a)(["\n  width: 100%;\n  left: 0;\n  position: absolute;\n  top: 50%;\n  z-index: 99;\n  display: flex;\n  justify-content: center;\n\n  .clip {\n    height: 42vh;\n    width: 50%;\n    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);\n\n    .video-container {\n      z-index: 999;\n      video {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n      height: 100%;\n      width: 100%;\n    }\n\n    @media screen and (max-width: 1100px) {\n      width: 70%;\n      height: 37vh;\n    }\n\n    @media screen and (max-width: 724px) {\n      width: 90%;\n      height: 37vh;\n    }\n\n    @media screen and (max-width: 440px) {\n      width: 90%;\n      height: 27vh;\n    }\n  }\n\n  @media screen and (max-width: 724px) {\n    width: 96%;\n  }\n\n  @media screen and (max-width: 440px) {\n      top: 65%;\n    }\n"]))),hn=Object(k.b)(E.a.div)(h||(h=Object(y.a)(["\n  margin: 7rem 0rem 5rem 0rem;\n\n  @media screen and (max-width: 1100px) {\n    margin-top: 4rem;\n  }\n\n  @media screen and (max-width: 650px) {\n    margin: 4rem 1rem;\n  }\n"]))),ln=function(n){var e,t=n.pathId,a=Object(V.e)(),i=function(n){switch(n){case"PlayStation 4":case"PlayStation 5":return Y;case"Xbox Series S/X":case"Xbox S":case"Xbox One":return K;case"PC":return Q;case"Nintendo Switch":return q;case"iOS":return $;default:return nn}},r=Object(Z.c)((function(n){return n.detail})),c=r.screen,d=r.game,o=r.movie,s=r.isLoading;return Object(en.jsx)(en.Fragment,{children:!s&&Object(en.jsx)(tn,{className:"shadow",onClick:function(n){n.target.classList.contains("shadow")&&a.push("/Ignite-React-Redux/")},children:Object(en.jsxs)(an,{LayoutId:t,children:[Object(en.jsxs)("div",{className:"top-container",children:[Object(en.jsxs)(rn,{children:[Object(en.jsxs)("div",{className:"rating",children:[Object(en.jsx)(E.a.h3,{children:d.name}),d.publishers.map((function(n){return Object(en.jsx)("p",{className:"publisher",children:n.name})})),Object(en.jsxs)("p",{className:"rating-container",children:[" ",function(){for(var n=[],e=Math.floor(d.rating),t=1;t<=5;t++)t<=e?n.push(Object(en.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):n.push(Object(en.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return n}(),Object(en.jsxs)("div",{className:"rating-separate",children:[d.rating,"/ 5"]})]}),Object(en.jsx)("div",{className:"genres-container",children:d.genres.map((function(n){return Object(en.jsx)("p",{className:"genres",children:n.name})}))}),Object(en.jsxs)("div",{className:"info-url",children:[Object(en.jsx)("a",{href:d.metacritic_url,target:"_blank",children:Object(en.jsx)("p",{children:d.metacritic_url})}),Object(en.jsx)("a",{href:d.website,target:"_blank",children:Object(en.jsx)("p",{children:d.website})})]})]}),Object(en.jsxs)(cn,{children:[Object(en.jsx)(dn,{children:d.platforms.map((function(n){return Object(en.jsx)("img",{src:i(n.platform.name),alt:n.platform.name,title:n.platform.name},n.platform.id)}))}),Object(en.jsxs)("div",{className:"meta-container",children:[Object(en.jsx)("h3",{className:"meta-header",children:"Metacritic:"}),Object(en.jsx)(on,{children:(e=d.metacritic,"number"!=typeof e?"N/A":e)})]})]})]}),Object(en.jsxs)(sn,{children:[Object(en.jsx)(E.a.img,{layoutId:"image ".concat(t),src:W(d.background_image,1280),alt:d.background_image}),0!==o.data.count&&Object(en.jsx)(mn,{variants:M,initial:"hidden",animate:"show",children:Object(en.jsx)("div",{className:"clip",children:Object(en.jsx)("div",{className:"video-container",children:Object(en.jsx)("video",{muted:!0,controls:!0,autoPlay:!0,loop:!0,children:Object(en.jsx)("source",{src:o.data.results[0].data.max})})})})})]})]}),Object(en.jsx)(hn,{children:Object(en.jsx)("p",{children:d.description_raw})}),Object(en.jsx)("div",{className:"gallery",children:c.results.map((function(n){return Object(en.jsx)("img",{src:W(n.image,1280),alt:n.image},n.id)}))})]})})})},bn=t(59),pn=t.n(bn),wn=t(92),gn=t(49),xn=t.n(gn),un=t(109),vn=t(53),fn=Object(k.b)(E.a.div)(l||(l=Object(y.a)(["\n  height: 40vh;\n  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);\n  color: #fefefe;\n  border-radius: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .video-container {\n    z-index: 999;\n    video {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    height: 100%;\n    width: 100%;\n  }\n"]))),jn=Object(k.b)(E.a.div)(b||(b=Object(y.a)(["\n  position: absolute;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  h3 {\n    padding: 0;\n    color: #fefefe;\n  }\n  p {\n    color: #fefefe;\n  }\n  .info-container {\n    width: 75%;\n  }\n\n  @media screen and (max-width: 524px) {\n    padding: 0.5rem 1rem;\n    h3,\n    p {\n      font-size: 1rem;\n    }\n  }\n"]))),On=Object(k.b)(E.a.div)(p||(p=Object(y.a)(["\n  border: 5px solid gold;\n  font-size: 2.5rem;\n  border-bottom-left-radius: 1rem;\n  width: 6rem;\n  height: 5rem;\n  color: white;\n  background-color: #333;\n  position: absolute;\n  font-weight: bold;\n  right: -5px;\n  top: -5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 524px) {\n    width: 5rem;\n    height: 4rem;\n    font-size: 1.5rem;\n  }\n"]))),An=function(n){var e=n.name,t=n.released,a=n.image,i=n.id,r=n.metacriticScore,c=n.video,d=i.toString();"/Ignite-React-Redux/"===Object(V.e)().location.pathname?document.body.style.overflow="auto":document.body.style.overflow="hidden";var o,s=Object(Z.b)(),m=Object(f.useState)(!1),h=Object(un.a)(m,2),l=h[0],b=h[1];return Object(en.jsx)(fn,{variants:F,initial:"hidden",animate:"show",LayoutId:d,onClick:function(){s(function(n){return function(){var e=Object(wn.a)(pn.a.mark((function e(t){var a,i,r;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_DETAIL"}),e.next=3,xn.a.get((c=n,"".concat(I,"games/").concat(c,"/movies?&key=71ef119d7ead41e0926b6a8bc17b76a2")));case 3:return a=e.sent,e.next=6,xn.a.get(B(n));case 6:return i=e.sent,e.next=9,xn.a.get(_(n));case 9:r=e.sent,t({type:"GET_DETAIL",payload:{game:i.data,screen:r.data,movie:a}});case 11:case"end":return e.stop()}var c}),e)})));return function(n){return e.apply(this,arguments)}}()}(i))},onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},children:Object(en.jsxs)(vn.b,{to:"/game/".concat(i),children:[Object(en.jsx)(jn,{children:Object(en.jsxs)("div",{className:"info-container",children:[Object(en.jsx)("h3",{children:e}),Object(en.jsx)("p",{children:t})]})}),Object(en.jsx)(On,{children:(o=r,"number"!=typeof o?"N/A":o)}),null!==c&&l&&Object(en.jsx)("div",{className:"video-container",children:Object(en.jsx)("video",{muted:!0,autoPlay:!0,loop:!0,children:Object(en.jsx)("source",{src:c.clip})})}),Object(en.jsx)(E.a.img,{layoutId:"image ".concat(d),src:W(a,640),alt:e})]})})},yn=t(531),kn=t(532),En=Object(k.b)(E.a.div)(w||(w=Object(y.a)(["\n  min-height: 80vh;\n  margin-bottom: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n\n  @media screen and (max-width: 441px) {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-row-gap: 2rem;\n    min-height: 100vh;\n  }\n"]))),In=Object(k.b)(E.a.div)(g||(g=Object(y.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 2rem 0rem 1.5rem 0rem;\n    text-align: center;\n    color: white;\n    text-shadow: 0.1vw 0vw 0.25vw #a00909, 0.2vw 0vw 0.25vw #ffd8d8;\n  }\n\n  @media screen and (max-width: 628px) {\n    h2 {\n      padding: 2rem 0rem;\n      font-size: 2rem;\n    }\n  }\n\n  @media screen and (max-width: 580px) {\n    padding: 0rem 1rem;\n  }\n\n  @media screen and (max-width: 330px) {\n    h2 {\n      font-size: 1.5rem;\n    }\n  }\n"]))),zn=function(){var n=Object(V.f)().pathname.split("/")[2],e=Object(Z.b)();Object(f.useEffect)((function(){e(function(){var n=Object(wn.a)(pn.a.mark((function n(e){var t,a,i;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xn.a.get("".concat(I).concat(G));case 2:return t=n.sent,n.next=5,xn.a.get("".concat(I).concat(U));case 5:return a=n.sent,n.next=8,xn.a.get("".concat(I).concat(L));case 8:i=n.sent,e({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:i.data.results,newGames:a.data.results}});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[e]);var t=Object(Z.c)((function(n){return n.games})),a=t.popular,i=t.newGames,r=t.upcoming,c=t.searched;return Object(en.jsx)(In,{variants:M,initial:"hidden",animate:"show",children:Object(en.jsxs)(yn.a,{type:"crossfade",children:[Object(en.jsx)(kn.a,{children:n&&Object(en.jsx)(ln,{pathId:n})}),c.length?Object(en.jsxs)("div",{className:"searched",children:[Object(en.jsx)("h2",{children:"Searched Games"}),Object(en.jsx)(En,{children:c.map((function(n){return Object(en.jsx)(An,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic,video:n.clip},n.id)}))})]}):"",Object(en.jsx)("h2",{children:"Top Rated Games"}),Object(en.jsx)(En,{children:i.map((function(n){return Object(en.jsx)(An,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic,video:n.clip},n.id)}))}),Object(en.jsx)("h2",{children:"Upcoming Games"}),Object(en.jsx)(En,{children:r.map((function(n){return Object(en.jsx)(An,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic,video:n.clip},n.id)}))}),Object(en.jsx)("h2",{children:"Popular Games"}),Object(en.jsx)(En,{children:a.map((function(n){return Object(en.jsx)(An,{name:n.name,released:n.released,id:n.id,image:n.background_image,metacriticScore:n.metacritic,video:n.clip},n.id)}))})]})})},Nn=t.p+"static/media/arcade.955f1419.jpg",Sn=Object(k.b)(E.a.nav)(x||(x=Object(y.a)(["\n  overflow: hidden;\n  padding: 2rem 5rem 5rem 5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  .nav-backgroundImage{\n    position: absolute;\n    z-index: -2;\n    opacity: 0.5;\n    top: 0;\n    left: 0;\n    height: 60vh;\n    width: 100%;\n    img{\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      \n    }\n  }\n\n  .nav-backgroundImage:after{\n  content:'';\n  position:absolute;\n  left:0; top:0;\n  width:100%; height:100%;\n  display:inline-block;\n  background: linear-gradient(rgba(224, 59, 59, 0.3), #202020);\n  }\n\n  input {\n    width: 30rem;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n    outline: none;\n    border-bottom-left-radius: 1rem;\n    border-top-left-radius: 1rem;\n\n    &::placeholder {\n      font-weight: lighter;\n      font-size: 1.2rem;\n    }\n\n    @media screen and (max-width: 1350px) {\n      width: 20rem;\n    }\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.59rem 2rem;\n    cursor: pointer;\n    background-color: rgba(196, 28, 22, 0.6);\n    color: white;\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    &:hover {\n      background-color: #d83232;\n      color: white;\n    }\n    &:focus {\n      outline: none;\n    }\n  }\n\n  .search-container {\n    padding-top: 2.5rem;\n    h5 {      \n      font-size: 1rem;\n      padding: 1rem 0rem;\n      color: white;\n      text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,\n        0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,\n        0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757, 0.2vw 0vw 0.1vw #f25757,\n        0.4vw 0vw 0.1vw #f25757, 0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757,\n        0.4vw 0vw 2vw #f25757, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,\n        0.4vw 0vw 1vw #e50b0b, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,\n        0.4vw 0vw 5vw #e50b0b, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 10vw #e50b0b,\n        0.4vw 0vw 5vw #e50b0b;\n\n      @media screen and (max-width: 1240px) {\n        font-size: 1rem;\n      }\n    }\n  }\n\n  @media screen and (max-width: 1240px) {\n    flex-direction: column;\n    padding: 2rem 5rem;\n  }\n\n  @media screen and (max-width: 628px) {\n    .search {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n\n      button {\n        margin-top: 1rem;\n        border-top-left-radius: 1rem;\n        border-bottom-left-radius: 1rem;\n      }\n\n      input {\n        width: 130%;\n        border-bottom-right-radius: 1rem;\n        border-top-right-radius: 1rem;\n        text-align: center;\n      }\n    }\n  }\n\n  @media screen and (max-width: 525px) {\n    padding: 2rem 1rem;\n\n    .search {\n      input {\n        width: 100%;\n      }\n      h5 {\n        font-size: 0.7rem;\n      }\n\n      button {\n    font-size: 1rem;\n    border: none;\n    padding: 0.59rem 2rem;\n    }\n  }\n\n  @media screen and (max-width: 378px) {\n    padding: 2rem 0rem;\n    .search-container {\n      padding-top: 1rem;\n    }\n    .search {\n      input {\n        font-size: 0.9rem;\n        width: 135%;\n        font-weight: normal;\n\n        &::placeholder {\n          font-weight: lighter;\n          font-size: 0.7rem;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 325px) {\n    .search {\n      input {\n        font-size: 0.9rem;\n        width: 100%;\n        font-weight: normal;\n      }\n    }\n  }\n"]))),Cn=Object(k.b)(E.a.div)(u||(u=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  color: #c41c16;\n  cursor: pointer;\n  position: relative;\n  img {\n    height: 2rem;\n    width: 2rem;\n    border-radius: 1rem;\n  }\n  h2 {\n    font-size: 10rem;\n    color: white;\n    text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,\n      0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,\n      0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757, 0.2vw 0vw 0.1vw #f25757,\n      0.4vw 0vw 0.1vw #f25757, 0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757,\n      0.4vw 0vw 2vw #f25757, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,\n      0.4vw 0vw 1vw #e50b0b, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,\n      0.4vw 0vw 5vw #e50b0b, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 10vw #e50b0b,\n      0.4vw 0vw 5vw #e50b0b;\n  }\n  h1 {\n    color: #a5a5a5;\n    text-shadow: 0.1vw 0vw 0.25vw #f30000, 0.2vw 0vw 0.25vw #ffd8d8;\n  }\n  .image-container {\n    position: absolute;\n    left: 16.5rem;\n    top: 4.2rem;\n  }\n\n  .backImage-container {\n    position: absolute;\n    z-index: -1;\n    left: 5rem;\n    top: 0;\n    img {\n      height: 20rem;\n      width: 20rem;\n      background-color: transparent;\n    }\n  }\n\n  @media screen and (max-width: 1240px) {\n    align-items: center;\n\n    .backImage-container {\n      top: -25px;\n    }\n  }\n\n  @media screen and (max-width: 525px) {\n    h2 {\n      font-size: 7rem;\n    }\n    h1 {\n      font-size: 1rem;\n    }\n\n    .backImage-container {\n      left: 16%;\n      img {\n        height: 15rem;\n        width: 15rem;\n      }\n    }\n\n    .image-container {\n      position: absolute;\n      left: 11.88rem;\n      top: 3.2rem;\n      img {\n        height: 1.3rem;\n        width: 1.3rem;\n      }\n    }\n  }\n\n  @media screen and (max-width: 378px) {\n    h2 {\n      font-size: 4rem;\n    }\n    h1 {\n      font-size: 0.8rem;\n    }\n    .backImage-container {\n      top: -9%;\n      left: 12%;\n      img {\n        height: 10rem;\n        width: 10rem;\n      }\n    }\n\n    .image-container {\n      position: absolute;\n      left: 7.1rem;\n      top: 2.1rem;\n      img {\n        width: 1rem;\n        height: 1rem;\n      }\n    }\n  }\n"]))),Rn=function(){var n=Object(Z.b)(),e=Object(f.useState)(""),t=Object(un.a)(e,2),a=t[0],i=t[1];return Object(en.jsxs)(Sn,{variants:M,initial:"hidden",animate:"show",children:[Object(en.jsx)("div",{className:"nav-backgroundImage",children:Object(en.jsx)("img",{src:Nn})}),Object(en.jsxs)(Cn,{onClick:function(){n({type:"CLEAR_SEARCHED"})},children:[Object(en.jsx)("div",{className:"image-container",children:Object(en.jsx)("img",{src:J,alt:"logo"})}),Object(en.jsx)("div",{className:"backImage-container",children:Object(en.jsx)("img",{src:J,alt:"logo"})}),Object(en.jsx)("h2",{children:"Ignite"}),Object(en.jsx)("h1",{children:"GAMERS SEARCH ENGINE"})]}),Object(en.jsx)(E.a.div,{className:"search-container",variants:P,initial:"hidden",animate:"show",children:Object(en.jsxs)("form",{className:"search",children:[Object(en.jsx)("input",{value:a,onChange:function(n){i(n.target.value)},type:"text",placeholder:"Type a game title..."}),Object(en.jsx)("button",{onClick:function(e){var t;e.preventDefault(),n((t=a,function(){var n=Object(wn.a)(pn.a.mark((function n(e){var a;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,xn.a.get(H(t));case 2:a=n.sent,e({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),i("")},type:"submit",children:"Search"}),Object(en.jsx)(E.a.h5,{variants:X,initial:"hidden",animate:"show",children:"POWERED BY RAWG.IO"})]})})]})},Dn=Object(k.a)(v||(v=Object(y.a)(['\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;        \n    }\n    html{\n        &::-webkit-scrollbar{\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb{\n            background-color: #c41c16;\n        }\n        &::-webkit-scrollbar-track {\n            background: white;\n        }\n    }\n    body{\n        font-family: "Monserrat", sans-serif;\n        width: 100%;\n        background-color: #202020;\n        overflow-y: auto;\n    }\n    h2{\n        font-size: 3rem;\n        font-family: "Abril Fatface", cursive;\n        font-weight: lighter;\n        color: #c41c16;\n\n    }\n    h3{\n        font-size: 1.3rem;\n        color: #333;\n        padding: 1.5rem 0rem;\n    }\n    p{\n        font-size: 1.2rem;\n        line-height: 200%;\n        color: #696969;\n    }\n    a{\n        text-decoration: none;\n        color: #333;\n    }\n    img{\n        display: block;\n    }\n    input{\n        font-weight: bold;\n        font-family: "Montserrat", sans-serif;\n    }\n\n\n'])));var Tn=function(){return Object(en.jsxs)("div",{className:"App",children:[Object(en.jsx)(Dn,{}),Object(en.jsx)(Rn,{}),Object(en.jsx)(V.a,{path:["/game/:id","/"],children:Object(en.jsx)(zn,{})})]})},Gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,533)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))},Ln=t(55),Un=(t(527),t(26)),Bn={popular:[],newGames:[],upcoming:[],searched:[]},_n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(Un.a)(Object(Un.a)({},n),{},{popular:e.payload.popular,upcoming:e.payload.upcoming,newGames:e.payload.newGames});case"FETCH_SEARCHED":return Object(Un.a)(Object(Un.a)({},n),{},{searched:e.payload.searched});case"CLEAR_SEARCHED":return Object(Un.a)(Object(Un.a)({},n),{},{searched:[]});default:return Object(Un.a)({},n)}},Hn={game:{platforms:[]},screen:{results:[]},movie:{clips:[]},isLoading:!0},Mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(Un.a)(Object(Un.a)({},n),{},{game:e.payload.game,screen:e.payload.screen,movie:e.payload.movie,isLoading:!1});case"LOADING_DETAIL":return Object(Un.a)(Object(Un.a)({},n),{},{isLoading:!0});default:return Object(Un.a)({},n)}},Pn=Object(Ln.c)({games:_n,detail:Mn}),Xn=t(206),Fn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ln.d,Zn=Object(Ln.e)(Pn,Fn(Object(Ln.a)(Xn.a)));A.a.render(Object(en.jsx)(j.a.StrictMode,{children:Object(en.jsx)(Z.a,{store:Zn,children:Object(en.jsx)(vn.a,{children:Object(en.jsx)(Tn,{})})})}),document.getElementById("root")),Gn()}},[[529,1,2]]]);
//# sourceMappingURL=main.4500174f.chunk.js.map