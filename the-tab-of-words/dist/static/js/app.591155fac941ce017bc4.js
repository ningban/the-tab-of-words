webpackJsonp([1],{"0xDb":function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a=function(t){return t[Math.floor(Math.random()*t.length)]}},"4x6I":function(t,e,s){"use strict";var a=s("xipm");e.a={data:function(){return{levels:["全","一","二","三","四","五"],store:a.a.store}},computed:{liked:function(){return a.a.checkLiked(this.store.card)}},methods:{like:function(){a.a.checkLiked(this.store.card)?a.a.unlike(this.store.card):a.a.like(this.store.card)},changeLevel:a.a.changeLevel,toggleBook:a.a.toggleBook,toggleRomaji:a.a.toggleRomaji}}},BYvO:function(t,e){},"F4/v":function(t,e,s){"use strict";function a(t){s("Lumi")}var o=s("Fex2"),n=s("HWaV"),i=s("VU/8"),r=a,c=i(o.a,n.a,r,null,null);e.a=c.exports},Fex2:function(t,e,s){"use strict";var a=s("xipm");e.a={data:function(){return{store:a.a.store}},computed:{likedCards:function(){var t=this.store,e=t.likes;return t.db.filter(function(t){return e.includes(t.uuid)})},searchUrl:function(){return"http://jisho.org/search/"+this.store.card.word}},methods:{unlike:function(t){a.a.unlike(t)}}}},HWaV:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookWrapper"},[s("main",{staticClass:"book"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.likedCards.length?s("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.likedCards,function(e,a){return s("li",{key:e.uuid,staticClass:"item"},[s("div",{staticClass:"inner"},[s("h3",{staticClass:"word"},[s("a",{attrs:{href:t.searchUrl,target:"_blank"}},[t._v(t._s(e.word))])]),t._v(" "),s("span",{staticClass:"level"},[t._v("N"+t._s(e.level))]),t._v(" "),s("p",{staticClass:"hiragana"},[t._v(t._s(e.hiragana))]),t._v(" "),s("p",{staticClass:"meaning"},[t._v(t._s(e.meaning))]),t._v(" "),s("button",{staticClass:"btn-del",on:{click:function(s){t.unlike(e)}}},[t._v("×")])])])})):s("div",{staticClass:"empty"},[t._v("空")])],1),t._v(" "),s("a",{staticClass:"source",attrs:{target:"_blank",href:"http://www.tanos.co.uk/jlpt/"}},[t._v("@datasource")])],1)])},o=[],n={render:a,staticRenderFns:o};e.a=n},Lumi:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("BYvO")}var o=s("xJD8"),n=s("MjK6"),i=s("VU/8"),r=a,c=i(o.a,n.a,r,null,null);e.a=c.exports},MjK6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{loaded:t.store.loaded},attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s(t.store.showBook?"Book":"Card")],1),t._v(" "),s("Toolbar")],1)},o=[],n={render:a,staticRenderFns:o};e.a=n},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o=s("M93x");a.a.config.productionTip=!1,console.log("%c こんにちは。Source code can be found in https://github.com/keiww/the-tab-of-words","color: #5980a7"),new a.a({el:"#app",template:"<App/>",components:{App:o.a}})},NU23:function(t,e,s){"use strict";var a=s("xipm");e.a={data:function(){return{store:a.a.store}},computed:{card:function(){return this.store.card},searchUrl:function(){return"http://jisho.org/search/"+this.store.card.word}}}},PL11:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"meta"},[s("p",{staticClass:"romaji",class:{transparent:t.store.showRomaji}},[t._v(t._s(t.card.romaji||" "))]),t._v(" "),s("p",{staticClass:"hiragana"},[t._v(t._s(t.card.hiragana||" "))])]),t._v(" "),s("h1",{staticClass:"word"},[s("a",{attrs:{href:t.searchUrl,target:"_blank"}},[t._v(t._s(t.card.word))])]),t._v(" "),s("p",{staticClass:"meaning"},[t._v(t._s(t.card.meaning))]),t._v(" "),s("span",{staticClass:"level"},[t._v("N"+t._s(t.card.level))])])},o=[],n={render:a,staticRenderFns:o};e.a=n},djO7:function(t,e,s){"use strict";function a(t){s("sa3u")}var o=s("4x6I"),n=s("wUT1"),i=s("VU/8"),r=a,c=i(o.a,n.a,r,null,null);e.a=c.exports},gyMJ:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a=function(){return fetch("./static/data/db.json").then(function(t){return t.json()})}},nzDN:function(t,e){},rhdv:function(t,e,s){"use strict";function a(t){s("nzDN")}var o=s("NU23"),n=s("PL11"),i=s("VU/8"),r=a,c=i(o.a,n.a,r,null,null);e.a=c.exports},sa3u:function(t,e){},wUT1:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"toolbar",class:{hideBtns:t.store.showBook}},[s("button",{staticClass:"btn",attrs:{disabled:t.store.showBook},on:{click:t.changeLevel}},[t._v("\n    "+t._s(t.levels[t.store.level])+"\n  ")]),t._v(" "),s("button",{staticClass:"btn",class:{liked:t.liked},attrs:{disabled:t.store.showBook},on:{click:t.like}},[t._v("\n    愛\n  ")]),t._v(" "),s("button",{staticClass:"btn",class:{show:t.store.showBook},on:{click:t.toggleBook}},[t._v("\n    帳\n  ")]),t._v(" "),s("div",{staticClass:"bottom"},[s("button",{staticClass:"btn btn-r",class:{muted:t.store.showRomaji},attrs:{disabled:t.store.showBook},on:{click:t.toggleRomaji}},[t._v("\n      R\n    ")])])])},o=[],n={render:a,staticRenderFns:o};e.a=n},xJD8:function(t,e,s){"use strict";var a=s("xipm"),o=s("rhdv"),n=s("F4/v"),i=s("djO7");e.a={data:function(){return{store:a.a.store}},components:{Card:o.a,Book:n.a,Toolbar:i.a},created:function(){a.a.init(),this.onKeydown()},methods:{onKeydown:function(){var t=this;window.addEventListener("keydown",function(e){[32,13].includes(e.keyCode)&&e.preventDefault(),32!==e.keyCode&&13!==e.keyCode||!t.store.loaded||a.a.generateCard(),27===e.keyCode&&t.store.showBook&&a.a.hideBook()})}}}},xS6p:function(t,e,s){"use strict";var a=s("mvHQ"),o=s.n(a),n=s("Dd8w"),i=s.n(n),r={init:function(){var t=JSON.parse(window.localStorage.getItem("THE_TAB_OF_WORDS")),e={loaded:!1,showBook:!1,db:[],card:{},level:0,likes:[],showRomaji:!1};return t?e=i()({},e,{level:t.level,likes:t.likes,showRomaji:t.showRomaji}):this.update(e),i()({},e)},update:function(t){var e={level:t.level,likes:t.likes,showRomaji:t.showRomaji};window.localStorage.setItem("THE_TAB_OF_WORDS",o()(e))}};e.a=r},xipm:function(t,e,s){"use strict";var a=s("7+uW"),o=s("xS6p"),n=s("gyMJ"),i=s("0xDb"),r=new a.a({data:{store:o.a.init()},computed:{filteredDB:function(){var t=this.store,e=t.level,s=t.db;return 0===e?s:s.filter(function(t){return t.level===e})}},methods:{init:function(){var t=this;s.i(n.a)().then(function(e){t.store.db=e,t.store.loaded=!0,t.generateCard()})},generateCard:function(){this.store.card=s.i(i.a)(this.filteredDB)},changeLevel:function(){var t=this.store.level;this.store.level=t+1>5?0:t+1,this.generateCard(),o.a.update(this.store)},checkLiked:function(t){return this.store.likes.includes(t.uuid)},like:function(t){this.checkLiked(t)||(this.store.likes.push(t.uuid),o.a.update(this.store))},unlike:function(t){var e=this.store.likes.indexOf(t.uuid);e>=0&&(this.store.likes.splice(e,1),o.a.update(this.store))},toggleBook:function(){this.store.showBook=!this.store.showBook,o.a.update(this.store)},hideBook:function(){this.store.showBook&&(this.store.showBook=!1,o.a.update(this.store))},toggleRomaji:function(){this.store.showRomaji=!this.store.showRomaji,o.a.update(this.store)}}});e.a=r}},["NHnr"]);