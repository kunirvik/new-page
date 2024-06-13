var Qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function oa(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var kd={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(u,h){if(!i[u]){if(!n[u]){var f=typeof oa=="function"&&oa;if(!h&&f)return f(u,!0);if(a)return a(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var p=i[u]={exports:{}};n[u][0].call(p.exports,function(v){return o(n[u][1][v]||v)},p,p.exports,t,n,i,r)}return i[u].exports}for(var a=typeof oa=="function"&&oa,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var r=function(c){var u=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=c.trim(),u===!0?h.children:h.firstChild},o=function(c,u){var h=c.children;return h.length===1&&h[0].tagName===u},a=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};i.visible=a,i.create=function(c,u){var h=function(p,v){var g=r(`
		<div class="basicLightbox `.concat(v.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),m=g.querySelector(".basicLightbox__placeholder");p.forEach(function(y){return m.appendChild(y)});var l=o(m,"IMG"),_=o(m,"VIDEO"),x=o(m,"IFRAME");return l===!0&&g.classList.add("basicLightbox--img"),_===!0&&g.classList.add("basicLightbox--video"),x===!0&&g.classList.add("basicLightbox--iframe"),g}(c=function(p){var v=typeof p=="string",g=p instanceof HTMLElement==1;if(v===!1&&g===!1)throw new Error("Content must be a DOM element/node or string");return v===!0?Array.from(r(p,!0)):p.tagName==="TEMPLATE"?[p.content.cloneNode(!0)]:Array.from(p.children)}(c),u=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((p=Object.assign({},p)).closable==null&&(p.closable=!0),p.className==null&&(p.className=""),p.onShow==null&&(p.onShow=function(){}),p.onClose==null&&(p.onClose=function(){}),typeof p.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof p.className!="string")throw new Error("Property `className` must be a string");if(typeof p.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof p.onClose!="function")throw new Error("Property `onClose` must be a function");return p}(u)),f=function(p){return u.onClose(d)!==!1&&function(v,g){return v.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(v)===!1||v.parentElement.removeChild(v),g()},410),!0}(h,function(){if(typeof p=="function")return p(d)})};u.closable===!0&&h.addEventListener("click",function(p){p.target===h&&f()});var d={element:function(){return h},visible:function(){return a(h)},show:function(p){return u.onShow(d)!==!1&&function(v,g){return document.body.appendChild(v),setTimeout(function(){requestAnimationFrame(function(){return v.classList.add("basicLightbox--visible"),g()})},10),!0}(h,function(){if(typeof p=="function")return p(d)})},close:f};return d}},{}]},{},[1])(1)})})(kd);var wE=kd.exports;function Ii(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function zd(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ks={duration:.5,overwrite:!1,delay:0},Mu,on,bt,jn=1e8,yt=1/jn,kc=Math.PI*2,tg=kc/4,ng=0,Hd=Math.sqrt,ig=Math.cos,rg=Math.sin,jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},Tu=function(e){return typeof e>"u"},xi=function(e){return typeof e=="object"},En=function(e){return e!==!1},Eu=function(){return typeof window<"u"},aa=function(e){return Lt(e)||jt(e)},Vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,zc=/(?:-?\.?\d|\.)+/gi,Gd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wd=/[+-]=-?[.\d]+/,Xd=/[^,'"\[\]\s]+/gi,sg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,ai,Hc,bu,Hn={},sl={},Yd,qd=function(e){return(sl=jr(e,Hn))&&Rn},Au=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Go=function(e,t){return!t&&console.warn(e)},jd=function(e,t){return e&&(Hn[e]=t)&&sl&&(sl[e]=t)||Hn},Wo=function(){return 0},og={suppressEvents:!0,isStart:!0,kill:!1},ja={suppressEvents:!0,kill:!1},ag={suppressEvents:!0},wu={},lr=[],Vc={},Kd,Nn={},kl={},lh=30,Ka=[],Cu="",Ru=function(e){var t=e[0],n,i;if(xi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ka.length;i--&&!Ka[i].targetTest(t););n=Ka[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xp(e[i],n)))||e.splice(i,1);return e},Hr=function(e){return e._gsap||Ru(Kn(e))[0]._gsap},$d=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():Tu(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},lg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ol=function(){var e=lr.length,t=lr.slice(0),n,i;for(Vc={},lr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zd=function(e,t,n,i){lr.length&&!on&&ol(),e.render(t,n,i||on&&t<0&&(e._initted||e._startAt)),lr.length&&!on&&ol()},Jd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xd).length<2?t:jt(e)?e.trim():e},Qd=function(e){return e},Zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},ch=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Co=function(e){var t=e.parent||Rt,n=e.keyframes?cg(an(e.keyframes)):Zn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ug=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ep=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},bl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gc=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(ja):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fg=function s(e){return!e||e._ts&&s(e.parent)},uh=function(e){return e._repeat?zs(e._tTime,e=e.duration()+e._rDelay)*e:0},zs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Al=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},wl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Al(e),n._dirty||Vr(n,e)),e},tp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ll(e.rawTime(),t),(!t._dur||ta(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},ui=function(e,t,n,i){return t.parent&&dr(t),t._start=Yt((zi(n)?n:n||e!==Rt?Wn(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ep(e,t,"_first","_last",e._sort?"_start":0),Wc(t)||(e._recent=t),i||tp(e,t),e._ts<0&&wl(e,e._tTime),e},np=function(e,t){return(Hn.ScrollTrigger||Au("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},ip=function(e,t,n,i,r){if(Lu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kd!==On.frame)return lr.push(e),e._lazy=[r,i],1},dg=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Wc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},pg=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&dg(e)&&!(!e._initted&&Wc(e))||(e._ts<0||e._dp._ts<0)&&!Wc(e))?0:1,a=e._rDelay,c=0,u,h,f;if(a&&e._repeat&&(c=ta(0,e._tDur,t),h=zs(c,a),e._yoyo&&h&1&&(o=1-o),h!==zs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||on||i||e._zTime===yt||!t&&e._zTime){if(!e._initted&&ip(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Gc(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&dr(e,1),!n&&!on&&(Bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&wl(e,e._tTime=e._tDur*a),e.parent&&Al(e),n||Vr(e.parent,e),e},hh=function(e){return e instanceof _n?Vr(e):Hs(e,e._dur)},gg={_start:0,endTime:Wo,totalDuration:Wo},Wn=function s(e,t,n){var i=e.labels,r=e._recent||gg,o=e.duration()>=jn?r.endTime(!1):e._dur,a,c,u;return jt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&n&&(c=c/100*(an(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Ro=function(e,t,n){var i=zi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=En(c.vars.inherit)&&c.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Ft(t[0],o,t[r+1])},vr=function(e,t){return e||e===0?t(e):t},ta=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!jt(e)||!(t=sg.exec(e))?"":t[1]},_g=function(e,t,n){return vr(n,function(i){return ta(e,t,i)})},Xc=[].slice,rp=function(e,t){return e&&xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xi(e[0]))&&!e.nodeType&&e!==ai},vg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return jt(i)&&!t||rp(i,1)?(r=n).push.apply(r,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):jt(e)&&!n&&(Hc||!Vs())?Xc.call((t||bu).querySelectorAll(e),0):an(e)?vg(e,n):rp(e)?Xc.call(e,0):e?[e]:[]},Yc=function(e){return e=Kn(e)[0]||Go("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?Go("Invalid scope")||bu.createElement("div"):e)}},sp=function(e){return e.sort(function(){return .5-Math.random()})},op=function(e){if(Lt(e))return e;var t=xi(e)?e:{each:e},n=Gr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,u=t.axis,h=i,f=i;return jt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],f=i[1]),function(d,p,v){var g=(v||t).length,m=o[g],l,_,x,y,w,E,T,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,jn])[1],!M){for(T=-jn;T<(T=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],l=c?Math.min(M,g)*h-.5:i%M,_=M===jn?0:c?g*f/M-.5:i/M|0,T=0,C=jn,E=0;E<g;E++)x=E%M-l,y=_-(E/M|0),m[E]=w=u?Math.abs(u==="y"?y:x):Hd(x*x+y*y),w>T&&(T=w),w<C&&(C=w);i==="random"&&sp(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=sn(t.amount||t.each)||0,n=n&&g<0?gp(n):n}return g=(m[d]-m.min)/m.max||0,Yt(m.b+(n?n(g):g)*m.v)+m.u}},qc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:sn(n))}},ap=function(e,t){var n=an(e),i,r;return!n&&xi(e)&&(i=n=e.radius||jn,e.values?(e=Kn(e.values),(r=!zi(e[0]))&&(i*=i)):e=qc(e.increment)),vr(t,n?Lt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),u=jn,h=0,f=e.length,d,p;f--;)r?(d=e[f].x-a,p=e[f].y-c,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,h=f);return h=!i||u<=i?e[h]:o,r||h===o||zi(o)?h:h+sn(o)}:qc(e))},lp=function(e,t,n,i){return vr(an(e)?!t:n===!0?!!(n=0):!i,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},yg=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},Sg=function(e,t,n){return up(e,t,0,1,n)},cp=function(e,t,n){return vr(n,function(i){return e[~~t(i)]})},Mg=function s(e,t,n){var i=t-e;return an(e)?cp(e,s(0,e.length),t):vr(n,function(r){return(i+(r-e)%i)%i+e})},Tg=function s(e,t,n){var i=t-e,r=i*2;return an(e)?cp(e,s(0,e.length-1),t):vr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Xo=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Xd:zc),n+=e.substr(t,i-t)+lp(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},up=function(e,t,n,i,r){var o=t-e,a=i-n;return vr(r,function(c){return n+((c-e)/o*a||0)})},Eg=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=jt(e),a={},c,u,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(h=[],f=e.length,d=f-2,u=1;u<f;u++)h.push(s(e[u-1],e[u]));f--,r=function(v){v*=f;var g=Math.min(d,~~v);return h[g](v-g)},n=t}else i||(e=jr(an(e)?[]:{},e));if(!h){for(c in t)Pu.call(a,e,c,"get",t[c]);r=function(v){return Nu(v,a)||(o?e.p:e)}}}return vr(n,r)},fh=function(e,t,n){var i=e.labels,r=jn,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Bn=function(e,t,n){var i=e.vars,r=i[t],o=bt,a=e._ctx,c,u,h;if(r)return c=i[t+"Params"],u=i.callbackScope||e,n&&lr.length&&ol(),a&&(bt=a),h=c?r.apply(u,c):r.call(u),bt=o,h},xo=function(e){return dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Bn(e,"onInterrupt"),e},As,hp=[],fp=function(e){if(e)if(e=!e.name&&e.default||e,Eu()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Wo,render:Nu,add:Pu,kill:zg,modifier:kg,rawVars:0},o={targetTest:0,get:0,getSetter:Du,aliases:{},register:0};if(Vs(),e!==i){if(Nn[t])return;Zn(i,Zn(al(e,r),o)),jr(i.prototype,jr(r,al(e,o))),Nn[i.prop=t]=i,e.targetTest&&(Ka.push(i),wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jd(t,i),e.register&&e.register(Rn,i,An)}else hp.push(e)},gt=255,yo={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},zl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},dp=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&gt,e&gt]:0:yo.black,r,o,a,c,u,h,f,d,p,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yo[e])i=yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(zc),!t)c=+i[0]%360/360,u=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(u+1):h+u-h*u,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=zl(c+1/3,r,o),i[1]=zl(c,r,o),i[2]=zl(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Gd),n&&i.length<4&&(i[3]=1),i}else i=e.match(zc)||yo.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/gt,o=i[1]/gt,a=i[2]/gt,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?c=u=0:(p=f-d,u=h>.5?p/(2-f-d):p/(f+d),c=f===r?(o-a)/p+(o<a?6:0):f===o?(a-r)/p+2:(r-o)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},pp=function(e){var t=[],n=[],i=-1;return e.split(cr).forEach(function(r){var o=r.match(bs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dh=function(e,t,n){var i="",r=(e+i).match(cr),o=t?"hsla(":"rgba(",a=0,c,u,h,f;if(!r)return e;if(r=r.map(function(d){return(d=dp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=pp(e),c=n.c,c.join(i)!==h.c.join(i)))for(u=e.replace(cr,"1").split(bs),f=u.length-1;a<f;a++)i+=u[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!u)for(u=e.split(cr),f=u.length-1;a<f;a++)i+=u[a]+r[a];return i+u[f]},cr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),bg=/hsl[a]?\(/,mp=function(e){var t=e.join(" "),n;if(cr.lastIndex=0,cr.test(t))return n=bg.test(t),e[1]=dh(e[1],n),e[0]=dh(e[0],n,pp(e[1])),!0},Yo,On=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,u,h,f,d,p,v=function g(m){var l=s()-i,_=m===!0,x,y,w,E;if((l>e||l<0)&&(n+=l-t),i+=l,w=i-n,x=w-o,(x>0||_)&&(E=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=x+(x>=r?4:r-x),y=1),_||(c=u(g)),y)for(p=0;p<a.length;p++)a[p](w,d,E,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Yd&&(!Hc&&Eu()&&(ai=Hc=window,bu=ai.document||{},Hn.gsap=Rn,(ai.gsapVersions||(ai.gsapVersions=[])).push(Rn.version),qd(sl||ai.GreenSockGlobals||!ai.gsap&&ai||{}),hp.forEach(fp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),u=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Yo=1,v(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Yo=0,u=Wo},lagSmoothing:function(m,l){e=m||1/0,t=Math.min(l||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,l,_){var x=l?function(y,w,E,T){m(y,w,E,T),f.remove(x)}:m;return f.remove(m),a[_?"unshift":"push"](x),Vs(),x},remove:function(m,l){~(l=a.indexOf(m))&&a.splice(l,1)&&p>=l&&p--},_listeners:a},f}(),Vs=function(){return!Yo&&On.wake()},st={},Ag=/^[\d.\-M][\d.\-,\s]/,wg=/["']/g,Cg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,u;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,u=c.substr(0,a),t[i]=isNaN(u)?u.replace(wg,"").trim():+u,i=c.substr(a+1).trim();return t},Rg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Pg=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Cg(t[1])]:Rg(e).split(",").map(Jd)):st._CE&&Ag.test(e)?st._CE("",e):n},gp=function(e){return function(t){return 1-e(1-t)}},_p=function s(e,t){for(var n=e._first,i;n;)n instanceof _n?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Gr=function(e,t){return e&&(Lt(e)?e:st[e]||Pg(e))||t},ts=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){st[a]=Hn[a]=r,st[o=a.toLowerCase()]=n;for(var c in r)st[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=st[a+"."+c]=r[c]}),r},vp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/kc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*rg((h-o)*r)+1},c=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:vp(a);return r=kc/r,c.config=function(u,h){return s(e,u,h)},c},Vl=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:vp(n);return i.config=function(r){return s(e,r)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ts(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;ts("Elastic",Hl("in"),Hl("out"),Hl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ts("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ts("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ts("Circ",function(s){return-(Hd(1-s*s)-1)});ts("Sine",function(s){return s===1?1:-ig(s*tg)+1});ts("Back",Vl("in"),Vl("out"),Vl());st.SteppedEase=st.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-yt;return function(a){return((i*ta(0,o,a)|0)+r)*n}}};ks.ease=st["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Cu+=s+","+s+"Params,"});var xp=function(e,t){this.id=ng++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$d,this.set=t?t.getSetter:Du},qo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),Yo||On.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(wl(this,n),!r._dp||r.parent||tp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===yt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(ta(-Math.abs(this._delay),this._tDur,r),i!==!1),Al(this),hg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ag);var i=on;return on=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Wn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-yt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Lt(n)?n:Qd,a=function(){var u=i.then;i.then=null,Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),r(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){xo(this)},s}();Zn(qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var _n=function(s){zd(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=En(n.sortChildren),Rt&&ui(n.parent||Rt,Ii(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&np(Ii(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ro(0,arguments,this),this},t.from=function(i,r,o){return Ro(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ro(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Co(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ft(i,r,Wn(this,o),1),this},t.call=function(i,r,o){return ui(this,Ft.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,u,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new Ft(i,o,Wn(this,c)),this},t.staggerFrom=function(i,r,o,a,c,u,h){return o.runBackwards=1,Co(o).immediateRender=En(o.immediateRender),this.staggerTo(i,r,o,a,c,u,h)},t.staggerFromTo=function(i,r,o,a,c,u,h,f){return a.startAt=o,Co(a).immediateRender=En(a.immediateRender),this.staggerTo(i,r,a,c,u,h,f)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=i<=0?0:Yt(i),f=this._zTime<0!=i<0&&(this._initted||!u),d,p,v,g,m,l,_,x,y,w,E,T;if(this!==Rt&&h>c&&i>=0&&(h=c),h!==this._tTime||o||f){if(a!==this._time&&u&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,x=this._ts,l=!x,f&&(u||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Yt(h%m),h===c?(g=this._repeat,d=u):(g=~~(h/m),g&&g===h/m&&(d=u,g--),d>u&&(d=u)),w=zs(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),E&&g&1&&(d=u-d,T=1),g!==w&&!this._lock){var C=E&&w&1,M=C===(E&&g&1);if(g<w&&(C=!C),a=C?0:h%u?u:h,this._lock=1,this.render(a||(T?0:Yt(g*m)),r,!u)._lock=0,this._tTime=h,!r&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||l!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,M&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!l)return this;_p(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=mg(this,Yt(a),Yt(d)),_&&(h-=d-(d=_._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(Bn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(v=p._next,(p._act||d>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,o),d!==this._time||!this._ts&&!l){_=0,v&&(h+=this._zTime=-yt);break}}p=v}else{p=this._last;for(var S=i<0?i:d;p;){if(v=p._prev,(p._act||S<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,o||on&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!l){_=0,v&&(h+=this._zTime=S?-yt:yt);break}}p=v}}if(_&&!r&&(this.pause(),_.render(d>=a?0:-yt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Al(this),this.render(i,r,o);this._onUpdate&&!r&&Bn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(h===c&&this._ts>0||!h&&this._ts<0)&&dr(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Bn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(zi(r)||(r=Wn(this,r,i)),!(i instanceof qo)){if(an(i))return i.forEach(function(a){return o.add(a,r)}),this;if(jt(i))return this.addLabel(i,r);if(Lt(i))i=Ft.delayedCall(0,i);else return this}return this!==i?ui(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var c=[],u=this._first;u;)u._start>=a&&(u instanceof Ft?r&&c.push(u):(o&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,r,o)))),u=u._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(bl(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Wn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Ft.delayedCall(0,r||Wo,o);return a.data="isPause",this._hasPause=1,ui(this,a,Wn(this,i))},t.removePause=function(i){var r=this._first;for(i=Wn(this,i);r;)r._start===i&&r.data==="isPause"&&dr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)tr!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Kn(i),c=this._first,u=zi(r),h;c;)c instanceof Ft?lg(c._targets,a)&&(u?(!tr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Wn(o,i),c=r,u=c.startAt,h=c.onStart,f=c.onStartParams,d=c.immediateRender,p,v=Ft.to(o,Zn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||yt,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==m&&Hs(v,m,0,1).render(v._time,!0,!0),p=1}h&&h.apply(v,f||[])}},r));return d?v.render(0):v},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Zn({startAt:{time:Wn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),fh(this,Wn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),fh(this,Wn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(u in c)c[u]>=o&&(c[u]+=i);return Vr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=jn,u,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=u;Hs(o,o===Rt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Zd(Rt,ll(i,Rt)),Kd=On.frame),On.frame>=lh){lh+=zn.autoSleep||120;var r=Rt._first;if((!r||!r._ts)&&zn.autoSleep&&On._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||On.sleep()}}},e}(qo);Zn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lg=function(e,t,n,i,r,o,a){var c=new An(this._pt,e,t,0,1,bp,null,r),u=0,h=0,f,d,p,v,g,m,l,_;for(c.b=n,c.e=i,n+="",i+="",(l=~i.indexOf("random("))&&(i=Xo(i)),o&&(_=[n,i],o(_,e,t),n=_[0],i=_[1]),d=n.match(Bl)||[];f=Bl.exec(i);)v=f[0],g=i.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),v!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:v.charAt(1)==="="?Rs(m,v)-m:parseFloat(v)-m,m:p&&p<4?Math.round:0},u=Bl.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=a,(Wd.test(i)||l)&&(c.e=0),this._pt=c,c},Pu=function(e,t,n,i,r,o,a,c,u,h){Lt(i)&&(i=i(r||0,e,o));var f=e[t],d=n!=="get"?n:Lt(f)?u?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Lt(f)?u?Ug:Tp:Iu,v;if(jt(i)&&(~i.indexOf("random(")&&(i=Xo(i)),i.charAt(1)==="="&&(v=Rs(d,i)+(sn(d)||0),(v||v===0)&&(i=v))),!h||d!==i||jc)return!isNaN(d*i)&&i!==""?(v=new An(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?Bg:Ep,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Au(t,i),Lg.call(this,e,t,d,i,p,c||zn.stringFilter,u))},Ig=function(e,t,n,i,r){if(Lt(e)&&(e=Po(e,r,t,n,i)),!xi(e)||e.style&&e.nodeType||an(e)||Vd(e))return jt(e)?Po(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Po(e[a],r,t,n,i);return o},yp=function(e,t,n,i,r,o){var a,c,u,h;if(Nn[e]&&(a=new Nn[e]).init(r,a.rawVars?t[e]:Ig(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new An(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==As))for(u=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)u[a._props[h]]=c;return a},tr,jc,Lu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,u=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,p=i.autoRevert,v=e._dur,g=e._startAt,m=e._targets,l=e.parent,_=l&&l.data==="nested"?l.vars.targets:m,x=e._overwrite==="auto"&&!Mu,y=e.timeline,w,E,T,C,M,S,I,D,L,z,X,j,K;if(y&&(!d||!r)&&(r="none"),e._ease=Gr(r,ks.ease),e._yEase=f?gp(Gr(f===!0?r:f,ks.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(D=m[0]?Hr(m[0]).harness:0,j=D&&i[D.prop],w=al(i,wu),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!p?g.render(-1,!0):g.revert(h&&v?ja:og),g._lazy=0),o){if(dr(e._startAt=Ft.set(m,Zn({data:"isStart",overwrite:!1,parent:l,immediateRender:!0,lazy:!g&&En(c),startAt:null,delay:0,onUpdate:u&&function(){return Bn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!p)&&e._startAt.revert(ja),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&v&&!g){if(t&&(a=!1),T=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&En(c),immediateRender:a,stagger:0,parent:l},w),j&&(T[D.prop]=j),dr(e._startAt=Ft.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(ja):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,c=v&&En(c)||c&&!v,E=0;E<m.length;E++){if(M=m[E],I=M._gsap||Ru(m)[E]._gsap,e._ptLookup[E]=z={},Vc[I.id]&&lr.length&&ol(),X=_===m?E:_.indexOf(M),D&&(L=new D).init(M,j||w,e,X,_)!==!1&&(e._pt=C=new An(e._pt,M,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(F){z[F]=C}),L.priority&&(S=1)),!D||j)for(T in w)Nn[T]&&(L=yp(T,w,e,X,M,_))?L.priority&&(S=1):z[T]=C=Pu.call(e,M,T,"get",w[T],X,_,0,i.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),x&&e._pt&&(tr=e,Rt.killTweensOf(M,z,e.globalTime(t)),K=!e.parent,tr=0),e._pt&&c&&(Vc[I.id]=1)}S&&Ap(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!K,d&&t<=0&&y.render(jn,!0,!0)},Dg=function(e,t,n,i,r,o,a,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return jc=1,e.vars[t]="+=0",Lu(e,a),jc=0,c?Go(t+" not eligible for reset"):1;u.push(h)}for(p=u.length;p--;)f=u[p],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=It(n)+sn(f.e)),f.b&&(f.b=h.s+sn(f.b))},Ng=function(e,t){var n=e[0]?Hr(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=jr({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Og=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(an(t))a=n[e]||(n[e]=[]),t.forEach(function(c,u){return a.push({t:u/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Po=function(e,t,n,i,r){return Lt(e)?e.call(t,n,i,r):jt(e)&&~e.indexOf("random(")?Xo(e):e},Sp=Cu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mp={};bn(Sp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Mp[s]=1});var Ft=function(s){zd(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Co(i))||this;var c=a.vars,u=c.duration,h=c.delay,f=c.immediateRender,d=c.stagger,p=c.overwrite,v=c.keyframes,g=c.defaults,m=c.scrollTrigger,l=c.yoyoEase,_=i.parent||Rt,x=(an(n)||Vd(n)?zi(n[0]):"length"in i)?[n]:Kn(n),y,w,E,T,C,M,S,I;if(a._targets=x.length?Ru(x):Go("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||d||aa(u)||aa(h)){if(i=a.vars,y=a.timeline=new _n({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:x}),y.kill(),y.parent=y._dp=Ii(a),y._start=0,d||aa(u)||aa(h)){if(T=x.length,S=d&&op(d),xi(d))for(C in d)~Sp.indexOf(C)&&(I||(I={}),I[C]=d[C]);for(w=0;w<T;w++)E=al(i,Mp),E.stagger=0,l&&(E.yoyoEase=l),I&&jr(E,I),M=x[w],E.duration=+Po(u,Ii(a),w,M,x),E.delay=(+Po(h,Ii(a),w,M,x)||0)-a._delay,!d&&T===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(M,E,S?S(w,M,x):0),y._ease=st.none;y.duration()?u=h=0:a.timeline=0}else if(v){Co(Zn(y.vars.defaults,{ease:"none"})),y._ease=Gr(v.ease||i.ease||"none");var D=0,L,z,X;if(an(v))v.forEach(function(j){return y.to(x,j,">")}),y.duration();else{E={};for(C in v)C==="ease"||C==="easeEach"||Og(C,v[C],E,v.easeEach);for(C in E)for(L=E[C].sort(function(j,K){return j.t-K.t}),D=0,w=0;w<L.length;w++)z=L[w],X={ease:z.e,duration:(z.t-(w?L[w-1].t:0))/100*u},X[C]=z.v,y.to(x,X,D),D+=X.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Mu&&(tr=Ii(a),Rt.killTweensOf(x),tr=0),ui(_,Ii(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!u&&!v&&a._start===Yt(_._time)&&En(f)&&fg(Ii(a))&&_.data!=="nested")&&(a._tTime=-yt,a.render(Math.max(0,-h)||0)),m&&np(Ii(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,u=this._dur,h=i<0,f=i>c-yt&&!h?c:i<yt?0:i,d,p,v,g,m,l,_,x,y;if(!u)pg(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=Yt(f%g),f===c?(v=this._repeat,d=u):(v=~~(f/g),v&&v===Yt(f/g)&&(d=u,v--),d>u&&(d=u)),l=this._yoyo&&v&1,l&&(y=this._yEase,d=u-d),m=zs(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&(x&&this._yEase&&_p(x,l),this.vars.repeatRefresh&&!l&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Yt(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(ip(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(u!==this._dur)return this.render(i,r,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(d/u),this._from&&(this.ratio=_=1-_),d&&!a&&!r&&!v&&(Bn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Gc(this,i,r,o),Bn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!r&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Gc(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&dr(this,1),!r&&!(h&&!a)&&(f||a||l)&&(Bn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){Yo||On.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Lu(this,u),h=this._ease(u/this._dur),Dg(this,i,r,o,a,h,u,c)?this.resetTo(i,r,o,a,1):(wl(this,0),this.parent||ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,tr&&tr.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Kn(i):a,u=this._ptLookup,h=this._pt,f,d,p,v,g,m,l;if((!r||r==="all")&&ug(a,c))return r==="all"&&(this._pt=0),xo(this);for(f=this._op=this._op||[],r!=="all"&&(jt(r)&&(g={},bn(r,function(_){return g[_]=1}),r=g),r=Ng(a,r)),l=a.length;l--;)if(~c.indexOf(a[l])){d=u[l],r==="all"?(f[l]=r,v=d,p={}):(p=f[l]=f[l]||{},v=r);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&bl(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&xo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ro(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ro(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Rt.killTweensOf(i,r,o)},e}(qo);Zn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(s){Ft[s]=function(){var e=new _n,t=Xc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Iu=function(e,t,n){return e[t]=n},Tp=function(e,t,n){return e[t](n)},Ug=function(e,t,n,i){return e[t](i.fp,n)},Fg=function(e,t,n){return e.setAttribute(t,n)},Du=function(e,t){return Lt(e[t])?Tp:Tu(e[t])&&e.setAttribute?Fg:Iu},Ep=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Bg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kg=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},zg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Hg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ap=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},An=function(){function s(t,n,i,r,o,a,c,u,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ep,this.d=c||this,this.set=u||Iu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Hg,this.m=n,this.mt=r,this.tween=i},s}();bn(Cu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return wu[s]=1});Hn.TweenMax=Hn.TweenLite=Ft;Hn.TimelineLite=Hn.TimelineMax=_n;Rt=new _n({sortChildren:!1,defaults:ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=mp;var Wr=[],$a={},Vg=[],ph=0,Gg=0,Gl=function(e){return($a[e]||Vg).map(function(t){return t()})},Kc=function(){var e=Date.now(),t=[];e-ph>2&&(Gl("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,u;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,u=1);u&&(n.revert(),c&&t.push(n))}),Gl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ph=e,Gl("matchMedia"))},wp=function(){function s(t,n){this.selector=n&&Yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Gg++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Lt(n)&&(r=i,i=n,n=Lt);var o=this,a=function(){var u=bt,h=o.selector,f;return u&&u!==o&&u.data.push(o),r&&(o.selector=Yc(r)),bt=o,f=i.apply(o,arguments),Lt(f)&&o._r.push(f),bt=u,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Lt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,u;c--;)u=r.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)u=r.data[c],u instanceof _n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ft)&&u.revert&&u.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Wr.length;o--;)Wr[o].id===this.id&&Wr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),Wg=function(){function s(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){xi(n)||(n={matches:n});var o=new wp(0,r||this.scope),a=o.conditions={},c,u,h;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?h=1:(c=ai.matchMedia(n[u]),c&&(Wr.indexOf(o)<0&&Wr.push(o),(a[u]=c.matches)&&(h=1),c.addListener?c.addListener(Kc):c.addEventListener("change",Kc)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return fp(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=Kn(e)[0]);var r=Hr(e||{}).get,o=n?Qd:Jd;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||r)(e,t,n,i)):function(a,c,u){return o((Nn[a]&&Nn[a].get||r)(e,a,c,u))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(h){return Rn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}e=e[0]||{};var o=Nn[t],a=Hr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(h){var f=new o;As._pt=0,f.init(e,n?h+n:h,As,0,[e]),f.render(1,f),As._pt&&Nu(1,As)}:a.set(e,c);return o?u:function(h){return u(e,c,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Rn.to(e,jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,u,h){return r.resetTo(t,c,u,h)};return o.tween=r,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,ks.ease)),ch(ks,e||{})},config:function(e){return ch(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Hn[a]&&Go(t+" effect requires "+a+" plugin.")}),kl[t]=function(a,c,u){return n(Kn(a),Zn(c||{},r),u)},o&&(_n.prototype[t]=function(a,c,u){return this.add(kl[t](a,xi(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){st[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):st},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,r;for(n.smoothChildTiming=En(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=r;return ui(Rt,n,0),n},context:function(e,t){return e?new wp(e,t):bt},matchMedia:function(e){return new Wg(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Kc()},addEventListener:function(e,t){var n=$a[e]||($a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$a[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Mg,wrapYoyo:Tg,distribute:op,random:lp,snap:ap,normalize:Sg,getUnit:sn,clamp:_g,splitColor:dp,toArray:Kn,selector:Yc,mapRange:up,pipe:xg,unitize:yg,interpolate:Eg,shuffle:sp},install:qd,effects:kl,ticker:On,updateRoot:_n.updateRoot,plugins:Nn,globalTimeline:Rt,core:{PropTween:An,globals:jd,Tween:Ft,Timeline:_n,Animation:qo,getCache:Hr,_removeLinkedListItem:bl,reverting:function(){return on},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return Mu=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return cl[s]=Ft[s]});On.add(_n.updateRoot);As=cl.to({},{duration:0});var Xg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Yg=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Xg(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Wl=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,u;if(jt(r)&&(c={},bn(r,function(h){return c[h]=1}),r=c),t){c={};for(u in r)c[u]=t(r[u]);r=c}Yg(a,r)}}}},Rn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Wl("roundProps",qc),Wl("modifiers"),Wl("snap",ap))||cl;Ft.version=_n.version=Rn.version="3.12.5";Yd=1;Eu()&&Vs();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mh,nr,Ps,Ou,Fr,gh,Uu,qg=function(){return typeof window<"u"},Hi={},Pr=180/Math.PI,Ls=Math.PI/180,ns=Math.atan2,_h=1e8,Fu=/([A-Z])/g,jg=/(left|right|width|margin|padding|x)/i,Kg=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$c=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$g=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Qg=function(e,t,n){return e.style[t]=n},e_=function(e,t,n){return e.style.setProperty(t,n)},t_=function(e,t,n){return e._gsap[t]=n},n_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},i_=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},r_=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Pt="transform",wn=Pt+"Origin",s_=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Hi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Di(i,a)}):this.tfm[e]=o.x?o[e]:Di(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return di.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Pt}(r||t)&&this.props.push(e,t,r[e])},Pp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},o_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Fu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Uu(),(!r||!r.isStart)&&!n[Pt]&&(Pp(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lp=function(e,t){var n={target:e,props:[],revert:o_,save:s_};return e._gsap||Rn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ip,Zc=function(e,t){var n=nr.createElementNS?nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return n&&n.style?n:nr.createElement(e)},gi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Fu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Gs(t)||t,1)||""},vh="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var i=t||Fr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vh[o]+e in r););return o<0?null:(o===3?"ms":o>=0?vh[o]:"")+e},Jc=function(){qg()&&window.document&&(mh=window,nr=mh.document,Ps=nr.documentElement,Fr=Zc("div")||{style:{}},Zc("div"),Pt=Gs(Pt),wn=Pt+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ip=!!Gs("perspective"),Uu=Rn.core.reverting,Ou=1)},Xl=function s(e){var t=Zc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ps.removeChild(t),this.style.cssText=r,o},xh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dp=function(e){var t;try{t=e.getBBox()}catch{t=Xl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Xl||(t=Xl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+xh(e,["x","cx","x1"])||0,y:+xh(e,["y","cy","y1"])||0,width:0,height:0}:t},Np=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dp(e))},Kr=function(e,t){if(t){var n=e.style,i;t in Hi&&t!==wn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Fu,"-$1").toLowerCase())):n.removeAttribute(t)}},ir=function(e,t,n,i,r,o){var a=new An(e._pt,t,n,0,1,o?Rp:Cp);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},yh={deg:1,rad:1,turn:1},a_={grid:1,flex:1},pr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Fr.style,c=jg.test(t),u=e.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(c?"Width":"Height"),f=100,d=i==="px",p=i==="%",v,g,m,l;if(i===o||!r||yh[i]||yh[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),l=e.getCTM&&Np(e),(p||o==="%")&&(Hi[t]||~t.indexOf("adius")))return v=l?e.getBBox()[c?"width":"height"]:e[h],It(p?r/v*f:r/100*v);if(a[c?"width":"height"]=f+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,l&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===nr||!g.appendChild)&&(g=nr.body),m=g._gsap,m&&p&&m.width&&c&&m.time===On.time&&!m.uncache)return It(r/m.width*f);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=f+i,v=e[h],_?e.style[t]=_:Kr(e,t)}else(p||o==="%")&&!a_[gi(g,"display")]&&(a.position=gi(e,"position")),g===e&&(a.position="static"),g.appendChild(Fr),v=Fr[h],g.removeChild(Fr),a.position="absolute";return c&&p&&(m=Hr(g),m.time=On.time,m.width=g[h]),It(d?v*r/f:v&&r?f/v*r:0)},Di=function(e,t,n,i){var r;return Ou||Jc(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(r=Ko(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:hl(gi(e,wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ul[t]&&ul[t](e,t,n)||gi(e,t)||$d(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?pr(e,t,r,n)+n:r},l_=function(e,t,n,i){if(!n||n==="none"){var r=Gs(t,e,1),o=r&&gi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=gi(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,bp),c=0,u=0,h,f,d,p,v,g,m,l,_,x,y,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=gi(e,t)||i,g?e.style[t]=g:Kr(e,t)),h=[n,i],mp(h),n=h[0],i=h[1],d=n.match(bs)||[],w=i.match(bs)||[],w.length){for(;f=bs.exec(i);)m=f[0],_=i.substring(c,f.index),v?v=(v+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(v=1),m!==(g=d[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Rs(p,m)+y),l=parseFloat(m),x=m.substr((l+"").length),c=bs.lastIndex-x.length,x||(x=x||zn.units[t]||y,c===i.length&&(i+=x,a.e+=x)),y!==x&&(p=pr(e,t,g,x)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:l-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Rp:Cp;return Wd.test(i)&&(a.e=0),this._pt=a,a},Sh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},c_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sh[n]||n,t[1]=Sh[i]||i,t.join(" ")},u_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,u;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],Hi[a]&&(c=1,a=a==="transformOrigin"?wn:Pt),Kr(n,a);c&&(Kr(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),Ko(n,1),o.uncache=1,Pp(i)))}},ul={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,u_);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},jo=[1,0,0,1,0,0],Op={},Up=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mh=function(e){var t=gi(e,Pt);return Up(t)?jo:t.substr(7).match(Gd).map(It)},Bu=function(e,t){var n=e._gsap||Hr(e),i=e.style,r=Mh(e),o,a,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?jo:r):(r===jo&&!e.offsetParent&&e!==Ps&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Ps.appendChild(e)),r=Mh(e),c?i.display=c:Kr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ps.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Qc=function(e,t,n,i,r,o){var a=e._gsap,c=r||Bu(e,!0),u=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=c[0],v=c[1],g=c[2],m=c[3],l=c[4],_=c[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,E,T,C,M;n?c!==jo&&(T=p*m-v*g)&&(C=y*(m/T)+w*(-g/T)+(g*_-m*l)/T,M=y*(-v/T)+w*(p/T)-(p*_-v*l)/T,y=C,w=M):(E=Dp(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),w=E.y+(~(x[1]||x[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&a.smooth?(l=y-u,_=w-h,a.xOffset=f+(l*p+_*g)-l,a.yOffset=d+(l*v+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(ir(o,a,"xOrigin",u,y),ir(o,a,"yOrigin",h,w),ir(o,a,"xOffset",f,a.xOffset),ir(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Ko=function(e,t){var n=e._gsap||new xp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),u=gi(e,wn)||"0",h,f,d,p,v,g,m,l,_,x,y,w,E,T,C,M,S,I,D,L,z,X,j,K,F,J,R,ae,Le,$e,Y,ee;return h=f=d=g=m=l=_=x=y=0,p=v=1,n.svg=!!(e.getCTM&&Np(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Pt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Pt]!=="none"?c[Pt]:"")),i.scale=i.rotate=i.translate="none"),T=Bu(e,n.svg),n.svg&&(n.uncache?(F=e.getBBox(),u=n.xOrigin-F.x+"px "+(n.yOrigin-F.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Qc(e,K||u,!!K||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,E=n.yOrigin||0,T!==jo&&(I=T[0],D=T[1],L=T[2],z=T[3],h=X=T[4],f=j=T[5],T.length===6?(p=Math.sqrt(I*I+D*D),v=Math.sqrt(z*z+L*L),g=I||D?ns(D,I)*Pr:0,_=L||z?ns(L,z)*Pr+g:0,_&&(v*=Math.abs(Math.cos(_*Ls))),n.svg&&(h-=w-(w*I+E*L),f-=E-(w*D+E*z))):(ee=T[6],$e=T[7],R=T[8],ae=T[9],Le=T[10],Y=T[11],h=T[12],f=T[13],d=T[14],C=ns(ee,Le),m=C*Pr,C&&(M=Math.cos(-C),S=Math.sin(-C),K=X*M+R*S,F=j*M+ae*S,J=ee*M+Le*S,R=X*-S+R*M,ae=j*-S+ae*M,Le=ee*-S+Le*M,Y=$e*-S+Y*M,X=K,j=F,ee=J),C=ns(-L,Le),l=C*Pr,C&&(M=Math.cos(-C),S=Math.sin(-C),K=I*M-R*S,F=D*M-ae*S,J=L*M-Le*S,Y=z*S+Y*M,I=K,D=F,L=J),C=ns(D,I),g=C*Pr,C&&(M=Math.cos(C),S=Math.sin(C),K=I*M+D*S,F=X*M+j*S,D=D*M-I*S,j=j*M-X*S,I=K,X=F),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,l=180-l),p=It(Math.sqrt(I*I+D*D+L*L)),v=It(Math.sqrt(j*j+ee*ee)),C=ns(X,j),_=Math.abs(C)>2e-4?C*Pr:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Up(gi(e,Pt)),K&&e.setAttribute("transform",K))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=It(p),n.scaleY=It(v),n.rotation=It(g)+a,n.rotationX=It(m)+a,n.rotationY=It(l)+a,n.skewX=_+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=hl(u)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?f_:Ip?Fp:h_,n.uncache=0,n},hl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yl=function(e,t,n){var i=sn(t);return It(parseFloat(t)+parseFloat(pr(e,"x",n+"px",i)))+i},h_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fp(e,t)},Sr="0deg",oo="0px",Mr=") ",Fp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,u=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,p=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,l=n.force3D,_=n.target,x=n.zOrigin,y="",w=l==="auto"&&e&&e!==1||l===!0;if(x&&(f!==Sr||h!==Sr)){var E=parseFloat(h)*Ls,T=Math.sin(E),C=Math.cos(E),M;E=parseFloat(f)*Ls,M=Math.cos(E),o=Yl(_,o,T*M*-x),a=Yl(_,a,-Math.sin(E)*-x),c=Yl(_,c,C*M*-x+x)}m!==oo&&(y+="perspective("+m+Mr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||o!==oo||a!==oo||c!==oo)&&(y+=c!==oo||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Mr),u!==Sr&&(y+="rotate("+u+Mr),h!==Sr&&(y+="rotateY("+h+Mr),f!==Sr&&(y+="rotateX("+f+Mr),(d!==Sr||p!==Sr)&&(y+="skew("+d+", "+p+Mr),(v!==1||g!==1)&&(y+="scale("+v+", "+g+Mr),_.style[Pt]=y||"translate(0, 0)"},f_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,u=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,p=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,l=n.yOffset,_=n.forceCSS,x=parseFloat(o),y=parseFloat(a),w,E,T,C,M;c=parseFloat(c),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,c+=h),c||u?(c*=Ls,u*=Ls,w=Math.cos(c)*f,E=Math.sin(c)*f,T=Math.sin(c-u)*-d,C=Math.cos(c-u)*d,u&&(h*=Ls,M=Math.tan(u-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,E*=M)),w=It(w),E=It(E),T=It(T),C=It(C)):(w=f,C=d,E=T=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=pr(p,"x",o,"px"),y=pr(p,"y",a,"px")),(v||g||m||l)&&(x=It(x+v-(v*w+g*T)+m),y=It(y+g-(v*E+g*C)+l)),(i||r)&&(M=p.getBBox(),x=It(x+i/100*M.width),y=It(y+r/100*M.height)),M="matrix("+w+","+E+","+T+","+C+","+x+","+y+")",p.setAttribute("transform",M),_&&(p.style[Pt]=M)},d_=function(e,t,n,i,r){var o=360,a=jt(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Pr:1),u=c-i,h=i+u+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*_h)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*_h)%o-~~(u/o)*o)),e._pt=d=new An(e._pt,t,n,i,u,$g),d.e=h,d.u="deg",e._props.push(n),d},Th=function(e,t){for(var n in t)e[n]=t[n];return e},p_=function(e,t,n){var i=Th({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,u,h,f,d,p,v;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=Ko(n,1),Kr(n,Pt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Pt],o[Pt]=t,a=Ko(n,1),o[Pt]=u);for(c in Hi)u=i[c],h=a[c],u!==h&&r.indexOf(c)<0&&(p=sn(u),v=sn(h),f=p!==v?pr(n,c,u,v):parseFloat(u),d=parseFloat(h),e._pt=new An(e._pt,a,c,f,d-f,$c),e._pt.u=v||0,e._props.push(c));Th(a,i)};bn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ul[e>1?"border"+s:s]=function(a,c,u,h,f){var d,p;if(arguments.length<4)return d=o.map(function(v){return Di(a,v,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(v,g){return p[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,p,f)}});var Bp={name:"css",register:Jc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,u,h,f,d,p,v,g,m,l,_,x,y,w,E,T,C;Ou||Jc(),this.styles=this.styles||Lp(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Nn[g]&&yp(g,t,n,i,e,r)))){if(p=typeof h,v=ul[g],p==="function"&&(h=h.call(n,i,e,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Xo(h)),v)v(this,e,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",cr.lastIndex=0,cr.test(u)||(m=sn(u),l=sn(h)),l?m!==l&&(u=pr(e,g,u,l)+l):m&&(h+=m),this.add(a,"setProperty",u,h,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(p!=="undefined"){if(c&&g in c?(u=typeof c[g]=="function"?c[g].call(n,i,e,r):c[g],jt(u)&&~u.indexOf("random(")&&(u=Xo(u)),sn(u+"")||u==="auto"||(u+=zn.units[g]||sn(Di(e,g))||""),(u+"").charAt(1)==="="&&(u=Di(e,g))):u=Di(e,g),d=parseFloat(u),_=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),_&&(h=h.substr(2)),f=parseFloat(h),g in di&&(g==="autoAlpha"&&(d===1&&Di(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),ir(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Hi,x){if(this.styles.save(g),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ko(e,t.parseTransform),E=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new An(this._pt,a,Pt,0,1,w.renderTransform,w,0,-1),y.dep=1),g==="scale")this._pt=new An(this._pt,w,"scaleY",w.scaleY,(_?Rs(w.scaleY,_+f):f)-w.scaleY||0,$c),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(wn,0,a[wn]),h=c_(h),w.svg?Qc(e,h,0,E,0,this):(l=parseFloat(h.split(" ")[2])||0,l!==w.zOrigin&&ir(this,w,"zOrigin",w.zOrigin,l),ir(this,a,g,hl(u),hl(h)));continue}else if(g==="svgOrigin"){Qc(e,h,1,E,0,this);continue}else if(g in Op){d_(this,w,g,d,_?Rs(d,_+h):h);continue}else if(g==="smoothOrigin"){ir(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){p_(this,h,e);continue}}else g in a||(g=Gs(g)||g);if(x||(f||f===0)&&(d||d===0)&&!Kg.test(h)&&g in a)m=(u+"").substr((d+"").length),f||(f=0),l=sn(h)||(g in zn.units?zn.units[g]:m),m!==l&&(d=pr(e,g,u,l)),this._pt=new An(this._pt,x?w:a,g,d,(_?Rs(d,_+f):f)-d,!x&&(l==="px"||g==="zIndex")&&t.autoRound!==!1?Jg:$c),this._pt.u=l||0,m!==l&&l!=="%"&&(this._pt.b=u,this._pt.r=Zg);else if(g in a)l_.call(this,e,g,u,_?_+h:h);else if(g in e)this.add(e,g,u||e[g],_?_+h:h,i,r);else if(g!=="parseTransform"){Au(g,h);continue}x||(g in a?C.push(g,0,a[g]):C.push(g,1,u||e[g])),o.push(g)}}T&&Ap(this)},render:function(e,t){if(t.tween._time||!Uu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:di,getSetter:function(e,t,n){var i=di[t];return i&&i.indexOf(",")<0&&(t=i),t in Hi&&t!==wn&&(e._gsap.x||Di(e,"x"))?n&&gh===n?t==="scale"?n_:t_:(gh=n||{})&&(t==="scale"?i_:r_):e.style&&!Tu(e.style[t])?Qg:~t.indexOf("-")?e_:Du(e,t)},core:{_removeProperty:Kr,_getMatrix:Bu}};Rn.utils.checkPrefix=Gs;Rn.core.getStyleSaver=Lp;(function(s,e,t,n){var i=bn(s+","+e+","+t,function(r){Hi[r]=1});bn(e,function(r){zn.units[r]="deg",Op[r]=1}),di[i[13]]=s+","+e,bn(n,function(r){var o=r.split(":");di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){zn.units[s]="px"});Rn.registerPlugin(Bp);var m_=Rn.registerPlugin(Bp)||Rn;m_.core.Tween;function Eh(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function g_(s,e,t){return e&&Eh(s.prototype,e),t&&Eh(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kt,Za,Un,rr,sr,Is,kp,Lr,Lo,zp,Oi,ti,Hp,Vp=function(){return Kt||typeof window<"u"&&(Kt=window.gsap)&&Kt.registerPlugin&&Kt},Gp=1,ws=[],Qe=[],_i=[],Io=Date.now,eu=function(e,t){return t},__=function(){var e=Lo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,_i),Qe=n,_i=i,eu=function(o,a){return t[o](a)}},ur=function(e,t){return~_i.indexOf(e)&&_i[_i.indexOf(e)+1][t]},Do=function(e){return!!~zp.indexOf(e)},hn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},la="scrollLeft",ca="scrollTop",tu=function(){return Oi&&Oi.isPressed||Qe.cache++},fl=function(e,t){var n=function i(r){if(r||r===0){Gp&&(Un.history.scrollRestoration="manual");var o=Oi&&Oi.isPressed;r=i.v=Math.round(r)||(Oi&&Oi.iOS?1:0),e(r),i.cacheID=Qe.cache,o&&eu("ss",r)}else(t||Qe.cache!==i.cacheID||eu("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:la,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(s){return arguments.length?Un.scrollTo(s,kt.sc()):Un.pageXOffset||rr[la]||sr[la]||Is[la]||0})},kt={s:ca,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:fl(function(s){return arguments.length?Un.scrollTo(vn.sc(),s):Un.pageYOffset||rr[ca]||sr[ca]||Is[ca]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Kt.utils.toArray)(e)[0]||(typeof e=="string"&&Kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mr=function(e,t){var n=t.s,i=t.sc;Do(e)&&(e=rr.scrollingElement||sr);var r=Qe.indexOf(e),o=i===kt.sc?1:2;!~r&&(r=Qe.push(e)-1),Qe[r+o]||hn(e,"scroll",tu);var a=Qe[r+o],c=a||(Qe[r+o]=fl(ur(e,n),!0)||(Do(e)?i:fl(function(u){return arguments.length?e[n]=u:e[n]})));return c.target=e,a||(c.smooth=Kt.getProperty(e,"scrollBehavior")==="smooth"),c},nu=function(e,t,n){var i=e,r=e,o=Io(),a=o,c=t||50,u=Math.max(500,c*3),h=function(v,g){var m=Io();g||m-o>c?(r=i,i=v,a=o,o=m):n?i+=v:i=r+(v-r)/(m-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(v){var g=a,m=r,l=Io();return(v||v===0)&&v!==i&&h(v),o===a||l-a>u?0:(i+(n?m:-m))/((n?l:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},ao=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},bh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wp=function(){Lo=Kt.core.globals().ScrollTrigger,Lo&&Lo.core&&__()},Xp=function(e){return Kt=e||Vp(),!Za&&Kt&&typeof document<"u"&&document.body&&(Un=window,rr=document,sr=rr.documentElement,Is=rr.body,zp=[Un,rr,sr,Is],Kt.utils.clamp,Hp=Kt.core.context||function(){},Lr="onpointerenter"in Is?"pointer":"mouse",kp=Dt.isTouch=Un.matchMedia&&Un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=Dt.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gp=0},500),Wp(),Za=1),Za};vn.op=kt;Qe.cache=0;var Dt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Za||Xp(Kt)||console.warn("Please gsap.registerPlugin(Observer)"),Lo||Wp();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,u=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,p=n.ignore,v=n.wheelSpeed,g=n.event,m=n.onDragStart,l=n.onDragEnd,_=n.onDrag,x=n.onPress,y=n.onRelease,w=n.onRight,E=n.onLeft,T=n.onUp,C=n.onDown,M=n.onChangeX,S=n.onChangeY,I=n.onChange,D=n.onToggleX,L=n.onToggleY,z=n.onHover,X=n.onHoverEnd,j=n.onMove,K=n.ignoreCheck,F=n.isNormalizer,J=n.onGestureStart,R=n.onGestureEnd,ae=n.onWheel,Le=n.onEnable,$e=n.onDisable,Y=n.onClick,ee=n.scrollSpeed,fe=n.capture,ne=n.allowClicks,Ie=n.lockAxis,Re=n.onLockAxis;this.target=a=Mn(a)||sr,this.vars=n,p&&(p=Kt.utils.toArray(p)),i=i||1e-9,r=r||0,v=v||1,ee=ee||1,o=o||"wheel,touch,pointer",u=u!==!1,c||(c=parseFloat(Un.getComputedStyle(Is).lineHeight)||22);var B,We,Me,Te,_e,Ne,Pe,k=this,nt=0,P=0,b=n.passive||!h,W=mr(a,vn),Z=mr(a,kt),Q=W(),te=Z(),me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ti[0]==="pointerdown",le=Do(a),ie=a.ownerDocument||rr,De=[0,0,0],re=[0,0,0],Se=0,Ke=function(){return Se=Io()},ge=function(xe,at){return(k.event=xe)&&p&&~p.indexOf(xe.target)||at&&me&&xe.pointerType!=="touch"||K&&K(xe,at)},ve=function(){k._vx.reset(),k._vy.reset(),We.pause(),f&&f(k)},Oe=function(){var xe=k.deltaX=bh(De),at=k.deltaY=bh(re),ue=Math.abs(xe)>=i,ze=Math.abs(at)>=i;I&&(ue||ze)&&I(k,xe,at,De,re),ue&&(w&&k.deltaX>0&&w(k),E&&k.deltaX<0&&E(k),M&&M(k),D&&k.deltaX<0!=nt<0&&D(k),nt=k.deltaX,De[0]=De[1]=De[2]=0),ze&&(C&&k.deltaY>0&&C(k),T&&k.deltaY<0&&T(k),S&&S(k),L&&k.deltaY<0!=P<0&&L(k),P=k.deltaY,re[0]=re[1]=re[2]=0),(Te||Me)&&(j&&j(k),Me&&(_(k),Me=!1),Te=!1),Ne&&!(Ne=!1)&&Re&&Re(k),_e&&(ae(k),_e=!1),B=0},Ge=function(xe,at,ue){De[ue]+=xe,re[ue]+=at,k._vx.update(xe),k._vy.update(at),u?B||(B=requestAnimationFrame(Oe)):Oe()},mt=function(xe,at){Ie&&!Pe&&(k.axis=Pe=Math.abs(xe)>Math.abs(at)?"x":"y",Ne=!0),Pe!=="y"&&(De[2]+=xe,k._vx.update(xe,!0)),Pe!=="x"&&(re[2]+=at,k._vy.update(at,!0)),u?B||(B=requestAnimationFrame(Oe)):Oe()},Ue=function(xe){if(!ge(xe,1)){xe=ao(xe,h);var at=xe.clientX,ue=xe.clientY,ze=at-k.x,Ae=ue-k.y,ke=k.isDragging;k.x=at,k.y=ue,(ke||Math.abs(k.startX-at)>=r||Math.abs(k.startY-ue)>=r)&&(_&&(Me=!0),ke||(k.isDragging=!0),mt(ze,Ae),ke||m&&m(k))}},N=k.onPress=function(Ce){ge(Ce,1)||Ce&&Ce.button||(k.axis=Pe=null,We.pause(),k.isPressed=!0,Ce=ao(Ce),nt=P=0,k.startX=k.x=Ce.clientX,k.startY=k.y=Ce.clientY,k._vx.reset(),k._vy.reset(),hn(F?a:ie,ti[1],Ue,b,!0),k.deltaX=k.deltaY=0,x&&x(k))},q=k.onRelease=function(Ce){if(!ge(Ce,1)){cn(F?a:ie,ti[1],Ue,!0);var xe=!isNaN(k.y-k.startY),at=k.isDragging,ue=at&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),ze=ao(Ce);!ue&&xe&&(k._vx.reset(),k._vy.reset(),h&&ne&&Kt.delayedCall(.08,function(){if(Io()-Se>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ie.createEvent){var Ae=ie.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,Un,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Ae)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&at&&!F&&We.restart(!0),l&&at&&l(k),y&&y(k,ue)}},$=function(xe){return xe.touches&&xe.touches.length>1&&(k.isGesturing=!0)&&J(xe,k.isDragging)},oe=function(){return(k.isGesturing=!1)||R(k)},ce=function(xe){if(!ge(xe)){var at=W(),ue=Z();Ge((at-Q)*ee,(ue-te)*ee,1),Q=at,te=ue,f&&We.restart(!0)}},He=function(xe){if(!ge(xe)){xe=ao(xe,h),ae&&(_e=!0);var at=(xe.deltaMode===1?c:xe.deltaMode===2?Un.innerHeight:1)*v;Ge(xe.deltaX*at,xe.deltaY*at,0),f&&!F&&We.restart(!0)}},lt=function(xe){if(!ge(xe)){var at=xe.clientX,ue=xe.clientY,ze=at-k.x,Ae=ue-k.y;k.x=at,k.y=ue,Te=!0,f&&We.restart(!0),(ze||Ae)&&mt(ze,Ae)}},ft=function(xe){k.event=xe,z(k)},vt=function(xe){k.event=xe,X(k)},it=function(xe){return ge(xe)||ao(xe,h)&&Y(k)};We=k._dc=Kt.delayedCall(d||.25,ve).pause(),k.deltaX=k.deltaY=0,k._vx=nu(0,50,!0),k._vy=nu(0,50,!0),k.scrollX=W,k.scrollY=Z,k.isDragging=k.isGesturing=k.isPressed=!1,Hp(this),k.enable=function(Ce){return k.isEnabled||(hn(le?ie:a,"scroll",tu),o.indexOf("scroll")>=0&&hn(le?ie:a,"scroll",ce,b,fe),o.indexOf("wheel")>=0&&hn(a,"wheel",He,b,fe),(o.indexOf("touch")>=0&&kp||o.indexOf("pointer")>=0)&&(hn(a,ti[0],N,b,fe),hn(ie,ti[2],q),hn(ie,ti[3],q),ne&&hn(a,"click",Ke,!0,!0),Y&&hn(a,"click",it),J&&hn(ie,"gesturestart",$),R&&hn(ie,"gestureend",oe),z&&hn(a,Lr+"enter",ft),X&&hn(a,Lr+"leave",vt),j&&hn(a,Lr+"move",lt)),k.isEnabled=!0,Ce&&Ce.type&&N(Ce),Le&&Le(k)),k},k.disable=function(){k.isEnabled&&(ws.filter(function(Ce){return Ce!==k&&Do(Ce.target)}).length||cn(le?ie:a,"scroll",tu),k.isPressed&&(k._vx.reset(),k._vy.reset(),cn(F?a:ie,ti[1],Ue,!0)),cn(le?ie:a,"scroll",ce,fe),cn(a,"wheel",He,fe),cn(a,ti[0],N,fe),cn(ie,ti[2],q),cn(ie,ti[3],q),cn(a,"click",Ke,!0),cn(a,"click",it),cn(ie,"gesturestart",$),cn(ie,"gestureend",oe),cn(a,Lr+"enter",ft),cn(a,Lr+"leave",vt),cn(a,Lr+"move",lt),k.isEnabled=k.isPressed=k.isDragging=!1,$e&&$e(k))},k.kill=k.revert=function(){k.disable();var Ce=ws.indexOf(k);Ce>=0&&ws.splice(Ce,1),Oi===k&&(Oi=0)},ws.push(k),F&&Do(a)&&(Oi=k),k.enable(g)},g_(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Dt.version="3.12.5";Dt.create=function(s){return new Dt(s)};Dt.register=Xp;Dt.getAll=function(){return ws.slice()};Dt.getById=function(s){return ws.filter(function(e){return e.vars.id===s})[0]};Vp()&&Kt.registerPlugin(Dt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ye,Ts,rt,Ct,ni,Mt,Yp,dl,$o,No,So,ua,tn,Cl,iu,pn,Ah,wh,Es,qp,ql,jp,dn,ru,Kp,$p,Ji,su,ku,Ds,zu,pl,ou,jl,ha=1,nn=Date.now,Kl=nn(),$n=0,Mo=0,Ch=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Rh=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},v_=function s(){return Mo&&requestAnimationFrame(s)},Ph=function(){return Cl=1},Lh=function(){return Cl=0},li=function(e){return e},To=function(e){return Math.round(e*1e5)/1e5||0},Zp=function(){return typeof window<"u"},Jp=function(){return ye||Zp()&&(ye=window.gsap)&&ye.registerPlugin&&ye},$r=function(e){return!!~Yp.indexOf(e)},Qp=function(e){return(e==="Height"?zu:rt["inner"+e])||ni["client"+e]||Mt["client"+e]},em=function(e){return ur(e,"getBoundingClientRect")||($r(e)?function(){return nl.width=rt.innerWidth,nl.height=zu,nl}:function(){return Ni(e)})},x_=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Qp(r):e["client"+r])||0}},y_=function(e,t){return!t||~_i.indexOf(e)?em(e):function(){return nl}},pi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ur(e,n))?o()-em(e)()[r]:$r(e)?(ni[n]||Mt[n])-Qp(i):e[n]-e["offset"+i])},fa=function(e,t){for(var n=0;n<Es.length;n+=3)(!t||~t.indexOf(Es[n+1]))&&e(Es[n],Es[n+1],Es[n+2])},Dn=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},Eo=function(e){return typeof e=="number"},Ir=function(e){return typeof e=="object"},lo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},$l=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},is=Math.abs,tm="left",nm="top",Hu="right",Vu="bottom",Xr="width",Yr="height",Oo="Right",Uo="Left",Fo="Top",Bo="Bottom",Ut="padding",Yn="margin",Ws="Width",Gu="Height",Bt="px",qn=function(e){return rt.getComputedStyle(e)},S_=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ih=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ni=function(e,t){var n=t&&qn(e)[iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ml=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},im=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},M_=function(e){return function(t){return ye.utils.snap(im(e),t)}},Wu=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},T_=function(e){return function(t,n){return Wu(im(e))(t,n.direction)}},da=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Xt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Wt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},pa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Dh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ma={toggleActions:"play",anticipatePin:0},gl={top:0,left:0,center:.5,bottom:1,right:1},Ja=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in gl?gl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ga=function(e,t,n,i,r,o,a,c){var u=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,p=r.fontWeight,v=Ct.createElement("div"),g=$r(n)||ur(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,l=g?Mt:n,_=e.indexOf("start")!==-1,x=_?u:h,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(y+=(i===kt?Hu:Vu)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=_,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=y,v.innerText=t||t===0?e+"-"+t:e,l.children[0]?l.insertBefore(v,l.children[0]):l.appendChild(v),v._offset=v["offset"+i.op.d2],Qa(v,0,i,_),v},Qa=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Ws]=1,r["border"+a+Ws]=0,r[n.p]=t+"px",ye.set(e,r)},Je=[],au={},Zo,Nh=function(){return nn()-$n>34&&(Zo||(Zo=requestAnimationFrame(Bi)))},rs=function(){(!dn||!dn.isPressed||dn.startX>Mt.clientWidth)&&(Qe.cache++,dn?Zo||(Zo=requestAnimationFrame(Bi)):Bi(),$n||Jr("scrollStart"),$n=nn())},Zl=function(){$p=rt.innerWidth,Kp=rt.innerHeight},bo=function(){Qe.cache++,!tn&&!jp&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!ru||$p!==rt.innerWidth||Math.abs(rt.innerHeight-Kp)>rt.innerHeight*.25)&&dl.restart(!0)},Zr={},E_=[],rm=function s(){return Wt(ot,"scrollEnd",s)||Br(!0)},Jr=function(e){return Zr[e]&&Zr[e].map(function(t){return t()})||E_},In=[],sm=function(e){for(var t=0;t<In.length;t+=5)(!e||In[t+4]&&In[t+4].query===e)&&(In[t].style.cssText=In[t+1],In[t].getBBox&&In[t].setAttribute("transform",In[t+2]||""),In[t+3].uncache=1)},Xu=function(e,t){var n;for(pn=0;pn<Je.length;pn++)n=Je[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));pl=!0,t&&sm(t),t||Jr("revert")},om=function(e,t){Qe.cache++,(t||!mn)&&Qe.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(rt.history.scrollRestoration=ku=e)},mn,qr=0,Oh,b_=function(){if(Oh!==qr){var e=Oh=qr;requestAnimationFrame(function(){return e===qr&&Br(!0)})}},am=function(){Mt.appendChild(Ds),zu=!dn&&Ds.offsetHeight||rt.innerHeight,Mt.removeChild(Ds)},Uh=function(e){return $o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Br=function(e,t){if($n&&!e&&!pl){Xt(ot,"scrollEnd",rm);return}am(),mn=ot.isRefreshing=!0,Qe.forEach(function(i){return xn(i)&&++i.cacheID&&(i.rec=i())});var n=Jr("refreshInit");qp&&ot.sort(),t||Xu(),Qe.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Je.slice(0).forEach(function(i){return i.refresh()}),pl=!1,Je.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),ou=1,Uh(!0),Je.forEach(function(i){var r=pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Uh(!1),ou=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),om(ku,1),dl.pause(),qr++,mn=2,Bi(2),Je.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=ot.isRefreshing=!1,Jr("refresh")},lu=0,el=1,ko,Bi=function(e){if(e===2||!mn&&!pl){ot.isUpdating=!0,ko&&ko.update(0);var t=Je.length,n=nn(),i=n-Kl>=50,r=t&&Je[0].scroll();if(el=lu>r?-1:1,mn||(lu=r),i&&($n&&!Cl&&n-$n>200&&($n=0,Jr("scrollEnd")),So=Kl,Kl=n),el<0){for(pn=t;pn-- >0;)Je[pn]&&Je[pn].update(0,i);el=1}else for(pn=0;pn<t;pn++)Je[pn]&&Je[pn].update(0,i);ot.isUpdating=!1}Zo=0},cu=[tm,nm,Vu,Hu,Yn+Bo,Yn+Oo,Yn+Fo,Yn+Uo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tl=cu.concat([Xr,Yr,"boxSizing","max"+Ws,"max"+Gu,"position",Yn,Ut,Ut+Fo,Ut+Oo,Ut+Bo,Ut+Uo]),A_=function(e,t,n){Ns(n);var i=e._gsap;if(i.spacerIsNative)Ns(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Jl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=cu.length,o=t.style,a=e.style,c;r--;)c=cu[r],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vu]=a[Hu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Xr]=ml(e,vn)+Bt,o[Yr]=ml(e,kt)+Bt,o[Ut]=a[Yn]=a[nm]=a[tm]="0",Ns(i),a[Xr]=a["max"+Ws]=n[Xr],a[Yr]=a["max"+Gu]=n[Yr],a[Ut]=n[Ut],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},w_=/([A-Z])/g,Ns=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(w_,"-$1").toLowerCase())}},_a=function(e){for(var t=tl.length,n=e.style,i=[],r=0;r<t;r++)i.push(tl[r],n[tl[r]]);return i.t=e,i},C_=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},nl={left:0,top:0},Fh=function(e,t,n,i,r,o,a,c,u,h,f,d,p,v){xn(e)&&(e=e(c)),Dn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ja("0"+e.substr(3),n):0));var g=p?p.time():0,m,l,_;if(p&&p.seek(0),isNaN(e)||(e=+e),Eo(e))p&&(e=ye.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&Qa(a,n,i,!0);else{xn(t)&&(t=t(c));var x=(e||"0").split(" "),y,w,E,T;_=Mn(t,c)||Mt,y=Ni(_)||{},(!y||!y.left&&!y.top)&&qn(_).display==="none"&&(T=_.style.display,_.style.display="block",y=Ni(_),T?_.style.display=T:_.style.removeProperty("display")),w=Ja(x[0],y[i.d]),E=Ja(x[1]||"0",n),e=y[i.p]-u[i.p]-h+w+r-E,a&&Qa(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(v&&(c[v]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;m="scroll"+i.d2,Qa(o,C,i,M&&C>20||!M&&(f?Math.max(Mt[m],ni[m]):o.parentNode[m])<=C+1),f&&(u=Ni(a),f&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+Bt))}return p&&_&&(m=Ni(_),p.seek(d),l=Ni(_),p._caScrollDist=m[i.p]-l[i.p],e=e/p._caScrollDist*d),p&&p.seek(g),p?e:Math.round(e)},R_=/(webkit|moz|length|cssText|inset)/i,Bh=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Mt){e._stOrig=r.cssText,a=qn(e);for(o in a)!+o&&!R_.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},lm=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},va=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},kh=function(e,t){var n=mr(e,t),i="_scroll"+t.p2,r=function o(a,c,u,h,f){var d=o.tween,p=c.onComplete,v={};u=u||n();var g=lm(n,u,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-u,d&&d.kill(),c[i]=a,c.inherit=!1,c.modifiers=v,v[i]=function(){return g(u+h*d.ratio+f*d.ratio*d.ratio)},c.onUpdate=function(){Qe.cache++,o.tween&&Bi()},c.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=ye.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Xt(e,"wheel",n.wheelHandler),ot.isTouch&&Xt(e,"touchmove",n.wheelHandler),r},ot=function(){function s(t,n){Ts||s.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),su(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Mo){this.update=this.refresh=this.kill=li;return}n=Ih(Dn(n)||Eo(n)||n.nodeType?{trigger:n}:n,ma);var r=n,o=r.onUpdate,a=r.toggleClass,c=r.id,u=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,p=r.pin,v=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,l=r.onScrubComplete,_=r.onSnapComplete,x=r.once,y=r.snap,w=r.pinReparent,E=r.pinSpacer,T=r.containerAnimation,C=r.fastScrollEnd,M=r.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:kt,I=!f&&f!==0,D=Mn(n.scroller||rt),L=ye.core.getCache(D),z=$r(D),X=("pinType"in n?n.pinType:ur(D,"pinType")||z&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=I&&n.toggleActions.split(" "),F="markers"in n?n.markers:ma.markers,J=z?0:parseFloat(qn(D)["border"+S.p2+Ws])||0,R=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Le=x_(D,z,S),$e=y_(D,z),Y=0,ee=0,fe=0,ne=mr(D,S),Ie,Re,B,We,Me,Te,_e,Ne,Pe,k,nt,P,b,W,Z,Q,te,me,le,ie,De,re,Se,Ke,ge,ve,Oe,Ge,mt,Ue,N,q,$,oe,ce,He,lt,ft,vt;if(R._startClamp=R._endClamp=!1,R._dir=S,m*=45,R.scroller=D,R.scroll=T?T.time.bind(T):ne,We=ne(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(qp=1,n.refreshPriority===-9999&&(ko=R)),L.tweenScroll=L.tweenScroll||{top:kh(D,kt),left:kh(D,vn)},R.tweenTo=Ie=L.tweenScroll[S.p],R.scrubDuration=function(ue){$=Eo(ue)&&ue,$?q?q.duration(ue):q=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return l&&l(R)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Ue=0,c||(c=i.vars.id)),y&&((!Ir(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Mt.style&&ye.set(z?[Mt,ni]:D,{scrollBehavior:"auto"}),Qe.forEach(function(ue){return xn(ue)&&ue.target===(z?Ct.scrollingElement||ni:D)&&(ue.smooth=!1)}),B=xn(y.snapTo)?y.snapTo:y.snapTo==="labels"?M_(i):y.snapTo==="labelsDirectional"?T_(i):y.directional!==!1?function(ue,ze){return Wu(y.snapTo)(ue,nn()-ee<500?0:ze.direction)}:ye.utils.snap(y.snapTo),oe=y.duration||{min:.1,max:2},oe=Ir(oe)?No(oe.min,oe.max):No(oe,oe),ce=ye.delayedCall(y.delay||$/2||.1,function(){var ue=ne(),ze=nn()-ee<500,Ae=Ie.tween;if((ze||Math.abs(R.getVelocity())<10)&&!Ae&&!Cl&&Y!==ue){var ke=(ue-Te)/W,wt=i&&!I?i.totalProgress():ke,Ze=ze?0:(wt-N)/(nn()-So)*1e3||0,Tt=ye.utils.clamp(-ke,1-ke,is(Ze/2)*Ze/.185),Vt=ke+(y.inertia===!1?0:Tt),Et,xt,A=y,O=A.onStart,H=A.onInterrupt,V=A.onComplete;if(Et=B(Vt,R),Eo(Et)||(Et=Vt),xt=Math.round(Te+Et*W),ue<=_e&&ue>=Te&&xt!==ue){if(Ae&&!Ae._initted&&Ae.data<=is(xt-ue))return;y.inertia===!1&&(Tt=Et-ke),Ie(xt,{duration:oe(is(Math.max(is(Vt-wt),is(Et-wt))*.185/Ze/.05||0)),ease:y.ease||"power3",data:is(xt-ue),onInterrupt:function(){return ce.restart(!0)&&H&&H(R)},onComplete:function(){R.update(),Y=ne(),i&&(q?q.resetTo("totalProgress",Et,i._tTime/i._tDur):i.progress(Et)),Ue=N=i&&!I?i.totalProgress():R.progress,_&&_(R),V&&V(R)}},ue,Tt*W,xt-ue-Tt*W),O&&O(R,Ie.tween)}}else R.isActive&&Y!==ue&&ce.restart(!0)}).pause()),c&&(au[c]=R),d=R.trigger=Mn(d||p!==!0&&p),vt=d&&d._gsap&&d._gsap.stRevert,vt&&(vt=vt(R)),p=p===!0?d:Mn(p),Dn(a)&&(a={targets:d,className:a}),p&&(v===!1||v===Yn||(v=!v&&p.parentNode&&p.parentNode.style&&qn(p.parentNode).display==="flex"?!1:Ut),R.pin=p,Re=ye.core.getCache(p),Re.spacer?Z=Re.pinState:(E&&(E=Mn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Re.spacerIsNative=!!E,E&&(Re.spacerState=_a(E))),Re.spacer=me=E||Ct.createElement("div"),me.classList.add("pin-spacer"),c&&me.classList.add("pin-spacer-"+c),Re.pinState=Z=_a(p)),n.force3D!==!1&&ye.set(p,{force3D:!0}),R.spacer=me=Re.spacer,mt=qn(p),Ke=mt[v+S.os2],ie=ye.getProperty(p),De=ye.quickSetter(p,S.a,Bt),Jl(p,me,mt),te=_a(p)),F){P=Ir(F)?Ih(F,Dh):Dh,k=ga("scroller-start",c,D,S,P,0),nt=ga("scroller-end",c,D,S,P,0,k),le=k["offset"+S.op.d2];var it=Mn(ur(D,"content")||D);Ne=this.markerStart=ga("start",c,it,S,P,le,0,T),Pe=this.markerEnd=ga("end",c,it,S,P,le,0,T),T&&(ft=ye.quickSetter([Ne,Pe],S.a,Bt)),!X&&!(_i.length&&ur(D,"fixedMarkers")===!0)&&(S_(z?Mt:D),ye.set([k,nt],{force3D:!0}),ve=ye.quickSetter(k,S.a,Bt),Ge=ye.quickSetter(nt,S.a,Bt))}if(T){var Ce=T.vars.onUpdate,xe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){R.update(0,0,1),Ce&&Ce.apply(T,xe||[])})}if(R.previous=function(){return Je[Je.indexOf(R)-1]},R.next=function(){return Je[Je.indexOf(R)+1]},R.revert=function(ue,ze){if(!ze)return R.kill(!0);var Ae=ue!==!1||!R.enabled,ke=tn;Ae!==R.isReverted&&(Ae&&(He=Math.max(ne(),R.scroll.rec||0),fe=R.progress,lt=i&&i.progress()),Ne&&[Ne,Pe,k,nt].forEach(function(wt){return wt.style.display=Ae?"none":"block"}),Ae&&(tn=R,R.update(Ae)),p&&(!w||!R.isActive)&&(Ae?A_(p,me,Z):Jl(p,me,qn(p),ge)),Ae||R.update(Ae),tn=ke,R.isReverted=Ae)},R.refresh=function(ue,ze,Ae,ke){if(!((tn||!R.enabled)&&!ze)){if(p&&ue&&$n){Xt(s,"scrollEnd",rm);return}!mn&&ae&&ae(R),tn=R,Ie.tween&&!Ae&&(Ie.tween.kill(),Ie.tween=0),q&&q.pause(),g&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var wt=Le(),Ze=$e(),Tt=T?T.duration():pi(D,S),Vt=W<=.01,Et=0,xt=ke||0,A=Ir(Ae)?Ae.end:n.end,O=n.endTrigger||d,H=Ir(Ae)?Ae.start:n.start||(n.start===0||!d?0:p?"0 0":"0 100%"),V=R.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,R),G=d&&Math.max(0,Je.indexOf(R))||0,se=G,he,pe,we,Be,be,Ee,ct,Nt,Zt,ln,Xe,Fe,oi;for(F&&Ir(Ae)&&(Fe=ye.getProperty(k,S.p),oi=ye.getProperty(nt,S.p));se--;)Ee=Je[se],Ee.end||Ee.refresh(0,1)||(tn=R),ct=Ee.pin,ct&&(ct===d||ct===p||ct===V)&&!Ee.isReverted&&(ln||(ln=[]),ln.unshift(Ee),Ee.revert(!0,!0)),Ee!==Je[se]&&(G--,se--);for(xn(H)&&(H=H(R)),H=Ch(H,"start",R),Te=Fh(H,d,wt,S,ne(),Ne,k,R,Ze,J,X,Tt,T,R._startClamp&&"_startClamp")||(p?-.001:0),xn(A)&&(A=A(R)),Dn(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(Dn(H)?H.split(" ")[0]:"")+A:(Et=Ja(A.substr(2),wt),A=Dn(H)?H:(T?ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Te):Te)+Et,O=d)),A=Ch(A,"end",R),_e=Math.max(Te,Fh(A||(O?"100% 0":Tt),O,wt,S,ne()+Et,Pe,nt,R,Ze,J,X,Tt,T,R._endClamp&&"_endClamp"))||-.001,Et=0,se=G;se--;)Ee=Je[se],ct=Ee.pin,ct&&Ee.start-Ee._pinPush<=Te&&!T&&Ee.end>0&&(he=Ee.end-(R._startClamp?Math.max(0,Ee.start):Ee.start),(ct===d&&Ee.start-Ee._pinPush<Te||ct===V)&&isNaN(H)&&(Et+=he*(1-Ee.progress)),ct===p&&(xt+=he));if(Te+=Et,_e+=Et,R._startClamp&&(R._startClamp+=Et),R._endClamp&&!mn&&(R._endClamp=_e||-.001,_e=Math.min(_e,pi(D,S))),W=_e-Te||(Te-=.01)&&.001,Vt&&(fe=ye.utils.clamp(0,1,ye.utils.normalize(Te,_e,He))),R._pinPush=xt,Ne&&Et&&(he={},he[S.a]="+="+Et,V&&(he[S.p]="-="+ne()),ye.set([Ne,Pe],he)),p&&!(ou&&R.end>=pi(D,S)))he=qn(p),Be=S===kt,we=ne(),re=parseFloat(ie(S.a))+xt,!Tt&&_e>1&&(Xe=(z?Ct.scrollingElement||ni:D).style,Xe={style:Xe,value:Xe["overflow"+S.a.toUpperCase()]},z&&qn(Mt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Xe.style["overflow"+S.a.toUpperCase()]="scroll")),Jl(p,me,he),te=_a(p),pe=Ni(p,!0),Nt=X&&mr(D,Be?vn:kt)(),v?(ge=[v+S.os2,W+xt+Bt],ge.t=me,se=v===Ut?ml(p,S)+W+xt:0,se&&(ge.push(S.d,se+Bt),me.style.flexBasis!=="auto"&&(me.style.flexBasis=se+Bt)),Ns(ge),V&&Je.forEach(function(ut){ut.pin===V&&ut.vars.pinSpacing!==!1&&(ut._subPinOffset=!0)}),X&&ne(He)):(se=ml(p,S),se&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=se+Bt)),X&&(be={top:pe.top+(Be?we-Te:Nt)+Bt,left:pe.left+(Be?Nt:we-Te)+Bt,boxSizing:"border-box",position:"fixed"},be[Xr]=be["max"+Ws]=Math.ceil(pe.width)+Bt,be[Yr]=be["max"+Gu]=Math.ceil(pe.height)+Bt,be[Yn]=be[Yn+Fo]=be[Yn+Oo]=be[Yn+Bo]=be[Yn+Uo]="0",be[Ut]=he[Ut],be[Ut+Fo]=he[Ut+Fo],be[Ut+Oo]=he[Ut+Oo],be[Ut+Bo]=he[Ut+Bo],be[Ut+Uo]=he[Ut+Uo],Q=C_(Z,be,w),mn&&ne(0)),i?(Zt=i._initted,ql(1),i.render(i.duration(),!0,!0),Se=ie(S.a)-re+W+xt,Oe=Math.abs(W-Se)>1,X&&Oe&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Zt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ql(0)):Se=W,Xe&&(Xe.value?Xe.style["overflow"+S.a.toUpperCase()]=Xe.value:Xe.style.removeProperty("overflow-"+S.a));else if(d&&ne()&&!T)for(pe=d.parentNode;pe&&pe!==Mt;)pe._pinOffset&&(Te-=pe._pinOffset,_e-=pe._pinOffset),pe=pe.parentNode;ln&&ln.forEach(function(ut){return ut.revert(!1,!0)}),R.start=Te,R.end=_e,We=Me=mn?He:ne(),!T&&!mn&&(We<He&&ne(He),R.scroll.rec=0),R.revert(!1,!0),ee=nn(),ce&&(Y=-1,ce.restart(!0)),tn=0,i&&I&&(i._initted||lt)&&i.progress()!==lt&&i.progress(lt||0,!0).render(i.time(),!0,!0),(Vt||fe!==R.progress||T||g)&&(i&&!I&&i.totalProgress(T&&Te<-.001&&!fe?ye.utils.normalize(Te,_e,0):fe,!0),R.progress=Vt||(We-Te)/W===fe?0:fe),p&&v&&(me._pinOffset=Math.round(R.progress*Se)),q&&q.invalidate(),isNaN(Fe)||(Fe-=ye.getProperty(k,S.p),oi-=ye.getProperty(nt,S.p),va(k,S,Fe),va(Ne,S,Fe-(ke||0)),va(nt,S,oi),va(Pe,S,oi-(ke||0))),Vt&&!mn&&R.update(),h&&!mn&&!b&&(b=!0,h(R),b=!1)}},R.getVelocity=function(){return(ne()-Me)/(nn()-So)*1e3||0},R.endAnimation=function(){lo(R.callbackAnimation),i&&(q?q.progress(1):i.paused()?I||lo(i,R.direction<0,1):lo(i,i.reversed()))},R.labelToScroll=function(ue){return i&&i.labels&&(Te||R.refresh()||Te)+i.labels[ue]/i.duration()*W||0},R.getTrailing=function(ue){var ze=Je.indexOf(R),Ae=R.direction>0?Je.slice(0,ze).reverse():Je.slice(ze+1);return(Dn(ue)?Ae.filter(function(ke){return ke.vars.preventOverlaps===ue}):Ae).filter(function(ke){return R.direction>0?ke.end<=Te:ke.start>=_e})},R.update=function(ue,ze,Ae){if(!(T&&!Ae&&!ue)){var ke=mn===!0?He:R.scroll(),wt=ue?0:(ke-Te)/W,Ze=wt<0?0:wt>1?1:wt||0,Tt=R.progress,Vt,Et,xt,A,O,H,V,G;if(ze&&(Me=We,We=T?ne():ke,y&&(N=Ue,Ue=i&&!I?i.totalProgress():Ze)),m&&p&&!tn&&!ha&&$n&&(!Ze&&Te<ke+(ke-Me)/(nn()-So)*m?Ze=1e-4:Ze===1&&_e>ke+(ke-Me)/(nn()-So)*m&&(Ze=.9999)),Ze!==Tt&&R.enabled){if(Vt=R.isActive=!!Ze&&Ze<1,Et=!!Tt&&Tt<1,H=Vt!==Et,O=H||!!Ze!=!!Tt,R.direction=Ze>Tt?1:-1,R.progress=Ze,O&&!tn&&(xt=Ze&&!Tt?0:Ze===1?1:Tt===1?2:3,I&&(A=!H&&K[xt+1]!=="none"&&K[xt+1]||K[xt],G=i&&(A==="complete"||A==="reset"||A in i))),M&&(H||G)&&(G||f||!i)&&(xn(M)?M(R):R.getTrailing(M).forEach(function(we){return we.endAnimation()})),I||(q&&!tn&&!ha?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Ze,i._tTime/i._tDur):(q.vars.totalProgress=Ze,q.invalidate().restart())):i&&i.totalProgress(Ze,!!(tn&&(ee||ue)))),p){if(ue&&v&&(me.style[v+S.os2]=Ke),!X)De(To(re+Se*Ze));else if(O){if(V=!ue&&Ze>Tt&&_e+1>ke&&ke+1>=pi(D,S),w)if(!ue&&(Vt||V)){var se=Ni(p,!0),he=ke-Te;Bh(p,Mt,se.top+(S===kt?he:0)+Bt,se.left+(S===kt?0:he)+Bt)}else Bh(p,me);Ns(Vt||V?Q:te),Oe&&Ze<1&&Vt||De(re+(Ze===1&&!V?Se:0))}}y&&!Ie.tween&&!tn&&!ha&&ce.restart(!0),a&&(H||x&&Ze&&(Ze<1||!jl))&&$o(a.targets).forEach(function(we){return we.classList[Vt||x?"add":"remove"](a.className)}),o&&!I&&!ue&&o(R),O&&!tn?(I&&(G&&(A==="complete"?i.pause().totalProgress(1):A==="reset"?i.restart(!0).pause():A==="restart"?i.restart(!0):i[A]()),o&&o(R)),(H||!jl)&&(u&&H&&$l(R,u),j[xt]&&$l(R,j[xt]),x&&(Ze===1?R.kill(!1,1):j[xt]=0),H||(xt=Ze===1?1:3,j[xt]&&$l(R,j[xt]))),C&&!Vt&&Math.abs(R.getVelocity())>(Eo(C)?C:2500)&&(lo(R.callbackAnimation),q?q.progress(1):lo(i,A==="reverse"?1:!Ze,1))):I&&o&&!tn&&o(R)}if(Ge){var pe=T?ke/T.duration()*(T._caScrollDist||0):ke;ve(pe+(k._isFlipped?1:0)),Ge(pe)}ft&&ft(-ke/T.duration()*(T._caScrollDist||0))}},R.enable=function(ue,ze){R.enabled||(R.enabled=!0,Xt(D,"resize",bo),z||Xt(D,"scroll",rs),ae&&Xt(s,"refreshInit",ae),ue!==!1&&(R.progress=fe=0,We=Me=Y=ne()),ze!==!1&&R.refresh())},R.getTween=function(ue){return ue&&Ie?Ie.tween:q},R.setPositions=function(ue,ze,Ae,ke){if(T){var wt=T.scrollTrigger,Ze=T.duration(),Tt=wt.end-wt.start;ue=wt.start+Tt*ue/Ze,ze=wt.start+Tt*ze/Ze}R.refresh(!1,!1,{start:Rh(ue,Ae&&!!R._startClamp),end:Rh(ze,Ae&&!!R._endClamp)},ke),R.update()},R.adjustPinSpacing=function(ue){if(ge&&ue){var ze=ge.indexOf(S.d)+1;ge[ze]=parseFloat(ge[ze])+ue+Bt,ge[1]=parseFloat(ge[1])+ue+Bt,Ns(ge)}},R.disable=function(ue,ze){if(R.enabled&&(ue!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,ze||q&&q.pause(),He=0,Re&&(Re.uncache=1),ae&&Wt(s,"refreshInit",ae),ce&&(ce.pause(),Ie.tween&&Ie.tween.kill()&&(Ie.tween=0)),!z)){for(var Ae=Je.length;Ae--;)if(Je[Ae].scroller===D&&Je[Ae]!==R)return;Wt(D,"resize",bo),z||Wt(D,"scroll",rs)}},R.kill=function(ue,ze){R.disable(ue,ze),q&&!ze&&q.kill(),c&&delete au[c];var Ae=Je.indexOf(R);Ae>=0&&Je.splice(Ae,1),Ae===pn&&el>0&&pn--,Ae=0,Je.forEach(function(ke){return ke.scroller===R.scroller&&(Ae=1)}),Ae||mn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),ze||i.kill()),Ne&&[Ne,Pe,k,nt].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),ko===R&&(ko=0),p&&(Re&&(Re.uncache=1),Ae=0,Je.forEach(function(ke){return ke.pin===p&&Ae++}),Ae||(Re.spacer=0)),n.onKill&&n.onKill(R)},Je.push(R),R.enable(!1,!1),vt&&vt(R),i&&i.add&&!W){var at=R.update;R.update=function(){R.update=at,Te||_e||R.refresh()},ye.delayedCall(.01,R.update),W=.01,Te=_e=0}else R.refresh();p&&b_()},s.register=function(n){return Ts||(ye=n||Jp(),Zp()&&window.document&&s.enable(),Ts=Mo),Ts},s.defaults=function(n){if(n)for(var i in n)ma[i]=n[i];return ma},s.disable=function(n,i){Mo=0,Je.forEach(function(o){return o[i?"kill":"disable"](n)}),Wt(rt,"wheel",rs),Wt(Ct,"scroll",rs),clearInterval(ua),Wt(Ct,"touchcancel",li),Wt(Mt,"touchstart",li),da(Wt,Ct,"pointerdown,touchstart,mousedown",Ph),da(Wt,Ct,"pointerup,touchend,mouseup",Lh),dl.kill(),fa(Wt);for(var r=0;r<Qe.length;r+=3)pa(Wt,Qe[r],Qe[r+1]),pa(Wt,Qe[r],Qe[r+2])},s.enable=function(){if(rt=window,Ct=document,ni=Ct.documentElement,Mt=Ct.body,ye&&($o=ye.utils.toArray,No=ye.utils.clamp,su=ye.core.context||li,ql=ye.core.suppressOverwrites||li,ku=rt.history.scrollRestoration||"auto",lu=rt.pageYOffset,ye.core.globals("ScrollTrigger",s),Mt)){Mo=1,Ds=document.createElement("div"),Ds.style.height="100vh",Ds.style.position="absolute",am(),v_(),Dt.register(ye),s.isTouch=Dt.isTouch,Ji=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ru=Dt.isTouch===1,Xt(rt,"wheel",rs),Yp=[rt,Ct,ni,Mt],ye.matchMedia?(s.matchMedia=function(c){var u=ye.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ye.addEventListener("matchMediaInit",function(){return Xu()}),ye.addEventListener("matchMediaRevert",function(){return sm()}),ye.addEventListener("matchMedia",function(){Br(0,1),Jr("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return Zl(),Zl})):console.warn("Requires GSAP 3.11.0 or later"),Zl(),Xt(Ct,"scroll",rs);var n=Mt.style,i=n.borderTopStyle,r=ye.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ni(Mt),kt.m=Math.round(o.top+kt.sc())||0,vn.m=Math.round(o.left+vn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ua=setInterval(Nh,250),ye.delayedCall(.5,function(){return ha=0}),Xt(Ct,"touchcancel",li),Xt(Mt,"touchstart",li),da(Xt,Ct,"pointerdown,touchstart,mousedown",Ph),da(Xt,Ct,"pointerup,touchend,mouseup",Lh),iu=ye.utils.checkPrefix("transform"),tl.push(iu),Ts=nn(),dl=ye.delayedCall(.2,Br).pause(),Es=[Ct,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;Ct.hidden?(Ah=c,wh=u):(Ah!==c||wh!==u)&&bo()},Ct,"DOMContentLoaded",Br,rt,"load",Br,rt,"resize",bo],fa(Xt),Je.forEach(function(c){return c.enable(0,1)}),a=0;a<Qe.length;a+=3)pa(Wt,Qe[a],Qe[a+1]),pa(Wt,Qe[a],Qe[a+2])}},s.config=function(n){"limitCallbacks"in n&&(jl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ua)||(ua=i)&&setInterval(Nh,i),"ignoreMobileResize"in n&&(ru=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(fa(Wt)||fa(Xt,n.autoRefreshEvents||"none"),jp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Mn(n),o=Qe.indexOf(r),a=$r(r);~o&&Qe.splice(o,a?6:2),i&&(a?_i.unshift(rt,i,Mt,i,ni,i):_i.unshift(r,i))},s.clearMatchMedia=function(n){Je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Dn(n)?Mn(n):n).getBoundingClientRect(),a=o[r?Xr:Yr]*i||0;return r?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},s.positionInViewport=function(n,i,r){Dn(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[r?Xr:Yr],c=i==null?a/2:i in gl?gl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+c)/rt.innerWidth:(o.top+c)/rt.innerHeight},s.killAll=function(n){if(Je.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Zr.killAll||[];Zr={},i.forEach(function(r){return r()})}},s}();ot.version="3.12.5";ot.saveStyles=function(s){return s?$o(s).forEach(function(e){if(e&&e.style){var t=In.indexOf(e);t>=0&&In.splice(t,5),In.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),su())}}):In};ot.revert=function(s,e){return Xu(!s,e)};ot.create=function(s,e){return new ot(s,e)};ot.refresh=function(s){return s?bo():(Ts||ot.register())&&Br(!0)};ot.update=function(s){return++Qe.cache&&Bi(s===!0?2:0)};ot.clearScrollMemory=om;ot.maxScroll=function(s,e){return pi(s,e?vn:kt)};ot.getScrollFunc=function(s,e){return mr(Mn(s),e?vn:kt)};ot.getById=function(s){return au[s]};ot.getAll=function(){return Je.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!$n};ot.snapDirectional=Wu;ot.addEventListener=function(s,e){var t=Zr[s]||(Zr[s]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(s,e){var t=Zr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ot.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(u,h){var f=[],d=[],p=ye.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(v){f.length||p.restart(!0),f.push(v.trigger),d.push(v),r<=f.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&xn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return xn(r)&&(r=r(),Xt(ot,"refresh",function(){return r=e.batchMax()})),$o(s).forEach(function(c){var u={};for(a in n)u[a]=n[a];u.trigger=c,t.push(ot.create(u))}),t};var zh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ql=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===ni&&s(Mt,t)},xa={auto:1,scroll:1},P_=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||ye.core.getCache(r),a=nn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Mt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(xa[(c=qn(r)).overflowY]||xa[c.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!$r(r)&&(xa[(c=qn(r)).overflowY]||xa[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},cm=function(e,t,n,i){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&P_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Xt(Ct,Dt.eventTypes[0],Vh,!1,!0)},onDisable:function(){return Wt(Ct,Dt.eventTypes[0],Vh,!0)}})},L_=/(input|label|select|textarea)/i,Hh,Vh=function(e){var t=L_.test(e.target.tagName);(t||Hh)&&(e._gsapAllow=!0,Hh=t)},I_=function(e){Ir(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,c,u=Mn(e.target)||ni,h=ye.core.globals().ScrollSmoother,f=h&&h.get(),d=Ji&&(e.content&&Mn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=mr(u,kt),v=mr(u,vn),g=1,m=(Dt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,l=0,_=xn(i)?function(){return i(a)}:function(){return i||2.8},x,y,w=cm(u,e.type,!0,r),E=function(){return y=!1},T=li,C=li,M=function(){c=pi(u,kt),C=No(Ji?1:0,c),n&&(T=No(0,pi(u,vn))),x=qr},S=function(){d._gsap.y=To(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(E);var F=To(a.deltaY/2),J=C(p.v-F);if(d&&J!==p.v+p.offset){p.offset=J-p.v;var R=To((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",p.cacheID=Qe.cache,Bi()}return!0}p.offset&&S(),y=!0},D,L,z,X,j=function(){M(),D.isActive()&&D.vars.scrollY>c&&(p()>c?D.progress(1)&&p(c):D.resetTo("scrollY",c))};return d&&ye.set(d,{y:"+=0"}),e.ignoreCheck=function(K){return Ji&&K.type==="touchmove"&&I()||g>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){y=!1;var K=g;g=To((rt.visualViewport&&rt.visualViewport.scale||1)/m),D.pause(),K!==g&&Ql(u,g>1.01?!0:n?!1:"x"),L=v(),z=p(),M(),x=qr},e.onRelease=e.onGestureStart=function(K,F){if(p.offset&&S(),!F)X.restart(!0);else{Qe.cache++;var J=_(),R,ae;n&&(R=v(),ae=R+J*.05*-K.velocityX/.227,J*=zh(v,R,ae,pi(u,vn)),D.vars.scrollX=T(ae)),R=p(),ae=R+J*.05*-K.velocityY/.227,J*=zh(p,R,ae,pi(u,kt)),D.vars.scrollY=C(ae),D.invalidate().duration(J).play(.01),(Ji&&D.vars.scrollY>=c||R>=c-1)&&ye.to({},{onUpdate:j,duration:J})}o&&o(K)},e.onWheel=function(){D._ts&&D.pause(),nn()-l>1e3&&(x=0,l=nn())},e.onChange=function(K,F,J,R,ae){if(qr!==x&&M(),F&&n&&v(T(R[2]===F?L+(K.startX-K.x):v()+F-R[1])),J){p.offset&&S();var Le=ae[2]===J,$e=Le?z+K.startY-K.y:p()+J-ae[1],Y=C($e);Le&&$e!==Y&&(z+=Y-$e),p(Y)}(J||F)&&Bi()},e.onEnable=function(){Ql(u,n?!1:"x"),ot.addEventListener("refresh",j),Xt(rt,"resize",j),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=v.smooth=!1),w.enable()},e.onDisable=function(){Ql(u,!0),Wt(rt,"resize",j),ot.removeEventListener("refresh",j),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Dt(e),a.iOS=Ji,Ji&&!p()&&p(1),Ji&&ye.ticker.add(li),X=a._dc,D=ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lm(p,p(),function(){return D.pause()})},onUpdate:Bi,onComplete:X.vars.onComplete}),a};ot.sort=function(s){return Je.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ot.observe=function(s){return new Dt(s)};ot.normalizeScroll=function(s){if(typeof s>"u")return dn;if(s===!0&&dn)return dn.enable();if(s===!1){dn&&dn.kill(),dn=s;return}var e=s instanceof Dt?s:I_(s);return dn&&dn.target===e.target&&dn.kill(),$r(e.target)&&(dn=e),e};ot.core={_getVelocityProp:nu,_inputObserver:cm,_scrollers:Qe,_proxies:_i,bridge:{ss:function(){$n||Jr("scrollStart"),$n=nn()},ref:function(){return tn}}};Jp()&&ye.registerPlugin(ot);var um={};/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.3
*/(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;function e(g){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},e(g)}function t(g,m){var l=typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(!l){if(Array.isArray(g)||(l=r(g))||m&&g&&typeof g.length=="number"){l&&(g=l);var _=0,x=function(){};return{s:x,n:function(){return _>=g.length?{done:!0}:{done:!1,value:g[_++]}},e:function(C){throw C},f:x}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=!0,w=!1,E;return{s:function(){l=l.call(g)},n:function(){var C=l.next();return y=C.done,C},e:function(C){w=!0,E=C},f:function(){try{!y&&l.return!=null&&l.return()}finally{if(w)throw E}}}}function n(g){return a(g)||o(g)||r(g)||i()}function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(g,m){if(g){if(typeof g=="string")return c(g,m);var l=Object.prototype.toString.call(g).slice(8,-1);if(l==="Object"&&g.constructor&&(l=g.constructor.name),l==="Map"||l==="Set")return Array.from(g);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(g,m)}}function o(g){if(typeof Symbol<"u"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function a(g){if(Array.isArray(g))return c(g)}function c(g,m){(m==null||m>g.length)&&(m=g.length);for(var l=0,_=new Array(m);l<m;l++)_[l]=g[l];return _}function u(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}function h(g,m){for(var l=0;l<m.length;l++){var _=m[l];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(g,_.key,_)}}function f(g,m,l){return m&&h(g.prototype,m),l&&h(g,l),Object.defineProperty(g,"prototype",{writable:!1}),g}function d(g,m,l){return m in g?Object.defineProperty(g,m,{value:l,enumerable:!0,configurable:!0,writable:!0}):g[m]=l,g}var p=function(){function g(m,l){var _=this;if(u(this,g),d(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",captionHTML:!0,close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp|avif",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),d(this,"transitionPrefix",void 0),d(this,"isPassiveEventsSupported",void 0),d(this,"transitionCapable",!1),d(this,"isTouchDevice","ontouchstart"in window),d(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),d(this,"initialLocationHash",void 0),d(this,"pushStateSupport","pushState"in history),d(this,"isOpen",!1),d(this,"isAnimating",!1),d(this,"isClosing",!1),d(this,"isFadeIn",!1),d(this,"urlChangedOnce",!1),d(this,"hashReseted",!1),d(this,"historyHasChanges",!1),d(this,"historyUpdateTimeout",null),d(this,"currentImage",void 0),d(this,"eventNamespace","simplelightbox"),d(this,"domNodes",{}),d(this,"loadedImages",[]),d(this,"initialImageIndex",0),d(this,"currentImageIndex",0),d(this,"initialSelector",null),d(this,"globalScrollbarWidth",0),d(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,l),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),typeof m=="string"?(this.initialSelector=m,this.elements=Array.from(document.querySelectorAll(m))):this.elements=typeof m.length<"u"&&m.length>0?Array.from(m):[m],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=this.transitionPrefix!==!1,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var x=[];this.elements=Array.from(this.elements).filter(function(y){var w=y.getAttribute(_.options.sourceAttr);return x.indexOf(w)===-1?(x.push(w),!0):!1})}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,function(y){if(_.isValidLink(y.currentTarget)){if(y.preventDefault(),_.isAnimating)return!1;_.initialImageIndex=_.elements.indexOf(y.currentTarget),_.openImage(y.currentTarget)}}),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],function(y){_.isOpen&&y.target===y.currentTarget&&_.close()}),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,function(y){y.target.parentElement.classList.contains("sl-image")&&y.preventDefault()}),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle(function(y){if(_.controlCoordinates.swipeDiff=0,_.isAnimating&&y.key==="Escape"){_.currentImage.setAttribute("src",""),_.isAnimating=!1,_.close();return}_.isOpen&&(y.preventDefault(),y.key==="Escape"&&_.close(),!_.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(y.key)>-1&&_.loadImage(y.key==="ArrowRight"?1:-1))},this.options.throttleInterval)),this.addEvents()}return f(g,[{key:"checkPassiveEventsSupport",value:function(){var l=!1;try{var _=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("testPassive",null,_),window.removeEventListener("testPassive",null,_)}catch{}return l}},{key:"getCaptionElement",value:function(l){if(this.options.captionSelector.startsWith("+")){var _=this.options.captionSelector.replace(/^\+/,"").trimStart(),x=l.nextElementSibling;return x&&x.matches(_)?x:!1}else if(this.options.captionSelector.startsWith(">")){var y=this.options.captionSelector.replace(/^>/,"").trimStart();return l.querySelector(y)}else return l.querySelector(this.options.captionSelector)}},{key:"generateQuerySelector",value:function(l){var _=l.tagName,x=l.id,y=l.className,w=l.parentNode;if(_==="HTML")return"HTML";var E=_;if(E+=x!==""?"#".concat(x):"",y)for(var T=y.trim().split(/\s/),C=0;C<T.length;C++)E+=".".concat(T[C]);for(var M=1,S=l;S.previousElementSibling;S=S.previousElementSibling)M+=1;return E+=":nth-child(".concat(M,")"),"".concat(this.generateQuerySelector(w)," > ").concat(E)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var l,_=this.options.captionClass.split(/[\s,]+/);(l=this.domNodes.caption.classList).add.apply(l,n(_))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(l,_){var x;return function(){x||(l.apply(this,arguments),x=!0,setTimeout(function(){return x=!1},_))}}},{key:"isValidLink",value:function(l){return!this.options.fileExt||l.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(l.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var l=(document.body||document.documentElement).style;return"transition"in l?"":"WebkitTransition"in l?"-webkit-":"MozTransition"in l?"-moz-":"OTransition"in l?"-o":!1}},{key:"getScrollbarWidth",value:function(){var l=0,_=document.createElement("div");return _.classList.add("sl-scrollbar-measure"),document.body.appendChild(_),l=_.offsetWidth-_.clientWidth,document.body.removeChild(_),l}},{key:"toggleScrollbar",value:function(l){var _=0,x=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if(l==="hide"){var y=window.innerWidth;if(!y){var w=document.documentElement.getBoundingClientRect();y=w.right-Math.abs(w.left)}if(document.body.clientWidth<y||this.isAppleDevice){var E=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);_=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=E,(_>0||_==0&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=E+_+"px",x.forEach(function(T){var C=T.style.paddingRight,M=window.getComputedStyle(T)["padding-right"];T.dataset.originalPaddingRight=C,T.style.paddingRight="".concat(parseFloat(M)+_,"px")}))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",x.forEach(function(T){var C=T.dataset.originalPaddingRight;typeof C<"u"&&(T.style.paddingRight=C)});return _}},{key:"close",value:function(){var l=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var _=this.relatedElements[this.currentImageIndex];_.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,function(){l.options.disableScroll&&l.toggleScrollbar("show"),l.options.htmlClass&&l.options.htmlClass!==""&&document.querySelector("html").classList.remove(l.options.htmlClass),document.body.removeChild(l.domNodes.wrapper),l.options.overlay&&document.body.removeChild(l.domNodes.overlay),l.domNodes.additionalHtml=null,l.domNodes.download=null,_.dispatchEvent(new Event("closed.simplelightbox")),l.isClosing=!1}),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1;for(var x in this.controlCoordinates)this.controlCoordinates[x]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var l=this,_=this.currentImageIndex,x=this.relatedElements.length,y=_+1<0?x-1:_+1>=x-1?0:_+1,w=_-1<0?x-1:_-1>=x-1?0:_-1,E=new Image,T=new Image;E.addEventListener("load",function(C){var M=C.target.getAttribute("src");l.loadedImages.indexOf(M)===-1&&l.loadedImages.push(M),l.relatedElements[_].dispatchEvent(new Event("nextImageLoaded."+l.eventNamespace))}),E.setAttribute("src",this.relatedElements[y].getAttribute(this.options.sourceAttr)),T.addEventListener("load",function(C){var M=C.target.getAttribute("src");l.loadedImages.indexOf(M)===-1&&l.loadedImages.push(M),l.relatedElements[_].dispatchEvent(new Event("prevImageLoaded."+l.eventNamespace))}),T.setAttribute("src",this.relatedElements[w].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(l){var _=this,x=l;this.options.rtl&&(l=-l),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((l===1?"next":"prev")+"."+this.eventNamespace));var y=this.currentImageIndex+l;if(this.isAnimating||(y<0||y>=this.relatedElements.length)&&this.options.loop===!1)return!1;this.currentImageIndex=y<0?this.relatedElements.length-1:y>this.relatedElements.length-1?0:y,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*x-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,function(){_.isAnimating=!0,_.isClosing?_.isAnimating=!1:setTimeout(function(){var w=_.relatedElements[_.currentImageIndex];_.currentImage&&(_.currentImage.setAttribute("src",w.getAttribute(_.options.sourceAttr)),_.loadedImages.indexOf(w.getAttribute(_.options.sourceAttr))===-1&&_.show(_.domNodes.spinner),_.domNodes.image.contains(_.domNodes.caption)&&_.domNodes.image.removeChild(_.domNodes.caption),_.adjustImage(x),_.options.preloading&&_.preload())},100)})}},{key:"adjustImage",value:function(l){var _=this;if(!this.currentImage)return!1;var x=new Image,y=window.innerWidth*this.options.widthRatio,w=window.innerHeight*this.options.heightRatio;x.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),x.addEventListener("error",function(E){_.relatedElements[_.currentImageIndex].dispatchEvent(new Event("error."+_.eventNamespace)),_.isAnimating=!1,_.isOpen=!0,_.domNodes.spinner.style.display="none";var T=l===1||l===-1;if(_.initialImageIndex===_.currentImageIndex&&T)return _.close();_.options.alertError&&alert(_.options.alertErrorMessage),_.loadImage(T?l:1)}),x.addEventListener("load",function(E){typeof l<"u"&&(_.relatedElements[_.currentImageIndex].dispatchEvent(new Event("changed."+_.eventNamespace)),_.relatedElements[_.currentImageIndex].dispatchEvent(new Event((l===1?"nextDone":"prevDone")+"."+_.eventNamespace))),_.options.history&&_.updateURL(),_.loadedImages.indexOf(_.currentImage.getAttribute("src"))===-1&&_.loadedImages.push(_.currentImage.getAttribute("src"));var T=E.target.width,C=E.target.height;if(_.options.scaleImageToRatio||T>y||C>w){var M=T/C>y/w?T/y:C/w;T/=M,C/=M}_.domNodes.image.style.top=(window.innerHeight-C)/2+"px",_.domNodes.image.style.left=(window.innerWidth-T-_.globalScrollbarWidth)/2+"px",_.domNodes.image.style.width=T+"px",_.domNodes.image.style.height=C+"px",_.domNodes.spinner.style.display="none",_.options.focus&&_.forceFocus(),_.fadeIn(_.currentImage,_.options.fadeSpeed,function(){_.options.focus&&_.domNodes.wrapper.focus()}),_.isOpen=!0;var S,I;typeof _.options.captionSelector=="string"?S=_.options.captionSelector==="self"?_.relatedElements[_.currentImageIndex]:_.getCaptionElement(_.relatedElements[_.currentImageIndex]):typeof _.options.captionSelector=="function"&&(S=_.options.captionSelector(_.relatedElements[_.currentImageIndex])),_.options.captions&&S&&(_.options.captionType==="data"?I=S.dataset[_.options.captionsData]:_.options.captionType==="text"?I=S.innerHTML:I=S.getAttribute(_.options.captionsData)),_.options.loop?_.relatedElements.length===1?_.hide(_.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):_.show(_.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(_.currentImageIndex===0&&_.hide(_.domNodes.navigation.querySelector(".sl-prev")),_.currentImageIndex>=_.relatedElements.length-1&&_.hide(_.domNodes.navigation.querySelector(".sl-next")),_.currentImageIndex>0&&_.show(_.domNodes.navigation.querySelector(".sl-prev")),_.currentImageIndex<_.relatedElements.length-1&&_.show(_.domNodes.navigation.querySelector(".sl-next"))),l===1||l===-1?(_.options.animationSlide&&(_.slide(0,100*l+"px"),setTimeout(function(){_.slide(_.options.animationSpeed/1e3,"0px")},50)),_.fadeIn(_.domNodes.image,_.options.fadeSpeed,function(){_.isAnimating=!1,_.setCaption(I,T)})):(_.isAnimating=!1,_.setCaption(I,T)),_.options.additionalHtml&&!_.domNodes.additionalHtml&&(_.domNodes.additionalHtml=document.createElement("div"),_.domNodes.additionalHtml.classList.add("sl-additional-html"),_.domNodes.additionalHtml.innerHTML=_.options.additionalHtml,_.domNodes.image.appendChild(_.domNodes.additionalHtml)),_.options.download&&_.domNodes.downloadLink.setAttribute("href",_.currentImage.getAttribute("src"))})}},{key:"zoomPanElement",value:function(l,_,x){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+l+","+_+") scale("+x+")"}},{key:"minMax",value:function(l,_,x){return l<_?_:l>x?x:l}},{key:"setZoomData",value:function(l,_,x){this.currentImage.dataset.scale=l,this.currentImage.dataset.translateX=_,this.currentImage.dataset.translateY=x}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var l=this;if(this.addEventListener(window,"resize."+this.eventNamespace,function(x){l.isOpen&&l.adjustImage()}),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout(function(){l.addEventListener(window,"hashchange."+l.eventNamespace,function(x){l.isOpen&&l.hashchangeHandler()})},40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,function(x){if(!x.currentTarget.tagName.match(/button/i))return!0;x.preventDefault(),l.controlCoordinates.swipeDiff=0,l.loadImage(x.currentTarget.classList.contains("sl-next")?1:-1)}),this.options.scrollZoom){var _=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],function(x){if(l.controlCoordinates.mousedown||l.isAnimating||l.isClosing||!l.isOpen)return!0;l.controlCoordinates.containerHeight==0&&(l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY));var y=x.delta||x.wheelDelta;y===void 0&&(y=x.detail),y=Math.max(-1,Math.min(1,y)),_+=y*l.options.scrollZoomFactor*_,_=Math.max(1,Math.min(l.options.maxZoom,_)),l.controlCoordinates.targetScale=_;var w=document.documentElement.scrollTop||document.body.scrollTop;l.controlCoordinates.pinchOffsetX=x.pageX,l.controlCoordinates.pinchOffsetY=x.pageY-w||0,l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.scaleDifference=l.controlCoordinates.targetScale-l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.initialOffsetX-(l.controlCoordinates.pinchOffsetX-l.controlCoordinates.containerOffsetX-l.controlCoordinates.containerWidth/2-l.controlCoordinates.initialOffsetX)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.initialOffsetY-(l.controlCoordinates.pinchOffsetY-l.controlCoordinates.containerOffsetY-l.controlCoordinates.containerHeight/2-l.controlCoordinates.initialOffsetY)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale),l.controlCoordinates.targetScale>1?(l.controlCoordinates.zoomed=!0,(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed)):(l.controlCoordinates.initialScale===1&&(l.controlCoordinates.zoomed=!1,l.domNodes.caption.style.display==="none"&&l.fadeIn(l.domNodes.caption,l.options.fadeSpeed)),l.controlCoordinates.initialPinchDistance=null,l.controlCoordinates.capture=!1),l.controlCoordinates.initialPinchDistance=l.controlCoordinates.targetPinchDistance,l.controlCoordinates.initialScale=l.controlCoordinates.targetScale,l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY,l.setZoomData(l.controlCoordinates.targetScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale)})}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],function(x){if(x.target.tagName==="A"&&x.type==="touchstart")return!0;if(x.type==="mousedown")x.preventDefault(),l.controlCoordinates.initialPointerOffsetX=x.clientX,l.controlCoordinates.initialPointerOffsetY=x.clientY,l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY),l.controlCoordinates.capture=!0;else{if(l.controlCoordinates.touchCount=x.touches.length,l.controlCoordinates.initialPointerOffsetX=x.touches[0].clientX,l.controlCoordinates.initialPointerOffsetY=x.touches[0].clientY,l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.controlCoordinates.touchCount===1){if(!l.controlCoordinates.doubleTapped)l.controlCoordinates.doubleTapped=!0,setTimeout(function(){l.controlCoordinates.doubleTapped=!1},300);else return l.currentImage.classList.add("sl-transition"),l.controlCoordinates.zoomed?(l.controlCoordinates.initialScale=1,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),l.controlCoordinates.zoomed=!1):(l.controlCoordinates.initialScale=l.options.doubleTapZoom,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed),l.controlCoordinates.zoomed=!0),setTimeout(function(){l.currentImage&&l.currentImage.classList.remove("sl-transition")},200),!1;l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY)}else l.controlCoordinates.touchCount===2&&(l.controlCoordinates.initialPointerOffsetX2=x.touches[1].clientX,l.controlCoordinates.initialPointerOffsetY2=x.touches[1].clientY,l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY),l.controlCoordinates.pinchOffsetX=(l.controlCoordinates.initialPointerOffsetX+l.controlCoordinates.initialPointerOffsetX2)/2,l.controlCoordinates.pinchOffsetY=(l.controlCoordinates.initialPointerOffsetY+l.controlCoordinates.initialPointerOffsetY2)/2,l.controlCoordinates.initialPinchDistance=Math.sqrt((l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialPointerOffsetX2)*(l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialPointerOffsetX2)+(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialPointerOffsetY2)*(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialPointerOffsetY2)));l.controlCoordinates.capture=!0}return l.controlCoordinates.mousedown?!0:(l.transitionCapable&&(l.controlCoordinates.imageLeft=parseInt(l.domNodes.image.style.left,10)),l.controlCoordinates.mousedown=!0,l.controlCoordinates.swipeDiff=0,l.controlCoordinates.swipeYDiff=0,l.controlCoordinates.swipeStart=x.pageX||x.touches[0].pageX,l.controlCoordinates.swipeYStart=x.pageY||x.touches[0].pageY,!1)}),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],function(x){if(!l.controlCoordinates.mousedown)return!0;if(x.type==="touchmove"){if(l.controlCoordinates.capture===!1)return!1;l.controlCoordinates.pointerOffsetX=x.touches[0].clientX,l.controlCoordinates.pointerOffsetY=x.touches[0].clientY,l.controlCoordinates.touchCount=x.touches.length,l.controlCoordinates.touchmoveCount++,l.controlCoordinates.touchCount>1?(l.controlCoordinates.pointerOffsetX2=x.touches[1].clientX,l.controlCoordinates.pointerOffsetY2=x.touches[1].clientY,l.controlCoordinates.targetPinchDistance=Math.sqrt((l.controlCoordinates.pointerOffsetX-l.controlCoordinates.pointerOffsetX2)*(l.controlCoordinates.pointerOffsetX-l.controlCoordinates.pointerOffsetX2)+(l.controlCoordinates.pointerOffsetY-l.controlCoordinates.pointerOffsetY2)*(l.controlCoordinates.pointerOffsetY-l.controlCoordinates.pointerOffsetY2)),l.controlCoordinates.initialPinchDistance===null&&(l.controlCoordinates.initialPinchDistance=l.controlCoordinates.targetPinchDistance),Math.abs(l.controlCoordinates.initialPinchDistance-l.controlCoordinates.targetPinchDistance)>=1&&(l.controlCoordinates.targetScale=l.minMax(l.controlCoordinates.targetPinchDistance/l.controlCoordinates.initialPinchDistance*l.controlCoordinates.initialScale,1,l.options.maxZoom),l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.scaleDifference=l.controlCoordinates.targetScale-l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.initialOffsetX-(l.controlCoordinates.pinchOffsetX-l.controlCoordinates.containerOffsetX-l.controlCoordinates.containerWidth/2-l.controlCoordinates.initialOffsetX)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.initialOffsetY-(l.controlCoordinates.pinchOffsetY-l.controlCoordinates.containerOffsetY-l.controlCoordinates.containerHeight/2-l.controlCoordinates.initialOffsetY)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale),l.controlCoordinates.targetScale>1&&(l.controlCoordinates.zoomed=!0,(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed)),l.controlCoordinates.initialPinchDistance=l.controlCoordinates.targetPinchDistance,l.controlCoordinates.initialScale=l.controlCoordinates.targetScale,l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY)):(l.controlCoordinates.targetScale=l.controlCoordinates.initialScale,l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.pointerOffsetX-(l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialOffsetX),l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.pointerOffsetY-(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialOffsetY),l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),Math.abs(l.controlCoordinates.targetOffsetX)===Math.abs(l.controlCoordinates.limitOffsetX)&&(l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialPointerOffsetX=l.controlCoordinates.pointerOffsetX),Math.abs(l.controlCoordinates.targetOffsetY)===Math.abs(l.controlCoordinates.limitOffsetY)&&(l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY,l.controlCoordinates.initialPointerOffsetY=l.controlCoordinates.pointerOffsetY),l.setZoomData(l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale))}if(x.type==="mousemove"&&l.controlCoordinates.mousedown){if(x.type=="touchmove")return!0;if(x.preventDefault(),l.controlCoordinates.capture===!1)return!1;l.controlCoordinates.pointerOffsetX=x.clientX,l.controlCoordinates.pointerOffsetY=x.clientY,l.controlCoordinates.targetScale=l.controlCoordinates.initialScale,l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.pointerOffsetX-(l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialOffsetX),l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.pointerOffsetY-(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialOffsetY),l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),Math.abs(l.controlCoordinates.targetOffsetX)===Math.abs(l.controlCoordinates.limitOffsetX)&&(l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialPointerOffsetX=l.controlCoordinates.pointerOffsetX),Math.abs(l.controlCoordinates.targetOffsetY)===Math.abs(l.controlCoordinates.limitOffsetY)&&(l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY,l.controlCoordinates.initialPointerOffsetY=l.controlCoordinates.pointerOffsetY),l.setZoomData(l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale)}l.controlCoordinates.zoomed||(l.controlCoordinates.swipeEnd=x.pageX||x.touches[0].pageX,l.controlCoordinates.swipeYEnd=x.pageY||x.touches[0].pageY,l.controlCoordinates.swipeDiff=l.controlCoordinates.swipeStart-l.controlCoordinates.swipeEnd,l.controlCoordinates.swipeYDiff=l.controlCoordinates.swipeYStart-l.controlCoordinates.swipeYEnd,l.options.animationSlide&&l.slide(0,-l.controlCoordinates.swipeDiff+"px"))}),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],function(x){if(l.isTouchDevice&&x.type==="touchend"&&(l.controlCoordinates.touchCount=x.touches.length,l.controlCoordinates.touchCount===0?(l.currentImage&&l.setZoomData(l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.controlCoordinates.initialScale===1&&(l.controlCoordinates.zoomed=!1,l.domNodes.caption.style.display==="none"&&l.fadeIn(l.domNodes.caption,l.options.fadeSpeed)),l.controlCoordinates.initialPinchDistance=null,l.controlCoordinates.capture=!1):l.controlCoordinates.touchCount===1?(l.controlCoordinates.initialPointerOffsetX=x.touches[0].clientX,l.controlCoordinates.initialPointerOffsetY=x.touches[0].clientY):l.controlCoordinates.touchCount>1&&(l.controlCoordinates.initialPinchDistance=null)),l.controlCoordinates.mousedown){l.controlCoordinates.mousedown=!1;var y=!0;l.options.loop||(l.currentImageIndex===0&&l.controlCoordinates.swipeDiff<0&&(y=!1),l.currentImageIndex>=l.relatedElements.length-1&&l.controlCoordinates.swipeDiff>0&&(y=!1)),Math.abs(l.controlCoordinates.swipeDiff)>l.options.swipeTolerance&&y?l.loadImage(l.controlCoordinates.swipeDiff>0?1:-1):l.options.animationSlide&&l.slide(l.options.animationSpeed/1e3,"0px"),l.options.swipeClose&&Math.abs(l.controlCoordinates.swipeYDiff)>50&&Math.abs(l.controlCoordinates.swipeDiff)<l.options.swipeTolerance&&l.close()}}),this.addEventListener(this.domNodes.image,["dblclick"],function(x){if(!l.isTouchDevice)return l.controlCoordinates.initialPointerOffsetX=x.clientX,l.controlCoordinates.initialPointerOffsetY=x.clientY,l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.currentImage.classList.add("sl-transition"),l.controlCoordinates.zoomed?(l.controlCoordinates.initialScale=1,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),l.controlCoordinates.zoomed=!1,l.domNodes.caption.style.display==="none"&&l.fadeIn(l.domNodes.caption,l.options.fadeSpeed)):(l.controlCoordinates.initialScale=l.options.doubleTapZoom,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed),l.controlCoordinates.zoomed=!0),setTimeout(function(){l.currentImage&&(l.currentImage.classList.remove("sl-transition"),l.currentImage.style[l.transitionPrefix+"transform-origin"]=null)},200),l.controlCoordinates.capture=!0,!1})}},{key:"getDimensions",value:function(l){var _=window.getComputedStyle(l),x=l.offsetHeight,y=l.offsetWidth,w=parseFloat(_.borderTopWidth),E=parseFloat(_.borderBottomWidth),T=parseFloat(_.paddingTop),C=parseFloat(_.paddingBottom),M=parseFloat(_.borderLeftWidth),S=parseFloat(_.borderRightWidth),I=parseFloat(_.paddingLeft),D=parseFloat(_.paddingRight);return{height:x-E-w-T-C,width:y-M-S-I-D}}},{key:"updateHash",value:function(){var l="pid="+(this.currentImageIndex+1),_=window.location.href.split("#")[0]+"#"+l;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,_):this.historyHasChanges?window.location.replace(_):window.location.hash=l,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(l,_,x){var y=this;if(this.options.captions&&l&&l!==""&&typeof l<"u"){var w,E=!((w=x??this.options.captionHTML)!==null&&w!==void 0)||w?"innerHTML":"innerText";this.hide(this.domNodes.caption),this.domNodes.caption.style.width=_+"px",this.domNodes.caption[E]=l,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout(function(){y.fadeIn(y.domNodes.caption,y.options.fadeSpeed)},this.options.captionDelay)}}},{key:"slide",value:function(l,_){if(!this.transitionCapable)return this.domNodes.image.style.left=_;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+_+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+l+"s linear"}},{key:"getRelated",value:function(l){var _;return l&&l!==!1&&l!=="nofollow"?_=Array.from(this.elements).filter(function(x){return x.getAttribute("rel")===l}):_=this.elements,_}},{key:"openImage",value:function(l){var _=this;l.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&this.options.htmlClass!==""&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(l.rel),this.options.showCounter&&(this.relatedElements.length==1&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(l);var x=l.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",x),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.loadedImages.indexOf(x)===-1&&this.loadedImages.push(x),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout(function(){l.dispatchEvent(new Event("shown."+_.eventNamespace))},this.options.animationSpeed)}},{key:"forceFocus",value:function(){var l=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,function(_){document!==_.target&&l.domNodes.wrapper!==_.target&&!l.domNodes.wrapper.contains(_.target)&&l.domNodes.wrapper.focus()})}},{key:"addEventListener",value:function(l,_,x,y){l=this.wrap(l),_=this.wrap(_);var w=t(l),E;try{for(w.s();!(E=w.n()).done;){var T=E.value;T.namespaces||(T.namespaces={});var C=t(_),M;try{for(C.s();!(M=C.n()).done;){var S=M.value,I=y||!1,D=["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(S.split(".")[0])>=0;D&&this.isPassiveEventsSupported&&(e(I)==="object"?I.passive=!0:I={passive:!0}),T.namespaces[S]=x,T.addEventListener(S.split(".")[0],x,I)}}catch(L){C.e(L)}finally{C.f()}}}catch(L){w.e(L)}finally{w.f()}}},{key:"removeEventListener",value:function(l,_){l=this.wrap(l),_=this.wrap(_);var x=t(l),y;try{for(x.s();!(y=x.n()).done;){var w=y.value,E=t(_),T;try{for(E.s();!(T=E.n()).done;){var C=T.value;w.namespaces&&w.namespaces[C]&&(w.removeEventListener(C.split(".")[0],w.namespaces[C]),delete w.namespaces[C])}}catch(M){E.e(M)}finally{E.f()}}}catch(M){x.e(M)}finally{x.f()}}},{key:"fadeOut",value:function(l,_,x){var y=this;l=this.wrap(l);var w=t(l),E;try{for(w.s();!(E=w.n()).done;){var T=E.value;T.style.opacity=parseFloat(T)||window.getComputedStyle(T).getPropertyValue("opacity")}}catch(S){w.e(S)}finally{w.f()}this.isFadeIn=!1;var C=16.66666/(_||this.options.fadeSpeed),M=function S(){var I=parseFloat(l[0].style.opacity);if((I-=C)<0){var D=t(l),L;try{for(D.s();!(L=D.n()).done;){var z=L.value;z.style.display="none",z.style.opacity=1}}catch(F){D.e(F)}finally{D.f()}x&&x.call(y,l)}else{var X=t(l),j;try{for(X.s();!(j=X.n()).done;){var K=j.value;K.style.opacity=I}}catch(F){X.e(F)}finally{X.f()}requestAnimationFrame(S)}};M()}},{key:"fadeIn",value:function(l,_,x,y){var w=this;l=this.wrap(l);var E=t(l),T;try{for(E.s();!(T=E.n()).done;){var C=T.value;C&&(C.style.opacity=0,C.style.display=y||"block")}}catch(D){E.e(D)}finally{E.f()}this.isFadeIn=!0;var M=parseFloat(l[0].dataset.opacityTarget||1),S=16.66666*M/(_||this.options.fadeSpeed),I=function D(){var L=parseFloat(l[0].style.opacity);if((L+=S)>M){var K=t(l),F;try{for(K.s();!(F=K.n()).done;){var J=F.value;J&&(J.style.opacity=M)}}catch(R){K.e(R)}finally{K.f()}x&&x.call(w,l)}else{var z=t(l),X;try{for(z.s();!(X=z.n()).done;){var j=X.value;j&&(j.style.opacity=L)}}catch(R){z.e(R)}finally{z.f()}if(!w.isFadeIn)return;requestAnimationFrame(D)}};I()}},{key:"hide",value:function(l){l=this.wrap(l);var _=t(l),x;try{for(_.s();!(x=_.n()).done;){var y=x.value;y.style.display!="none"&&(y.dataset.initialDisplay=y.style.display),y.style.display="none"}}catch(w){_.e(w)}finally{_.f()}}},{key:"show",value:function(l,_){l=this.wrap(l);var x=t(l),y;try{for(x.s();!(y=x.n()).done;){var w=y.value;w.style.display=w.dataset.initialDisplay||_||"block"}}catch(E){x.e(E)}finally{x.f()}}},{key:"wrap",value:function(l){return typeof l[Symbol.iterator]=="function"&&typeof l!="string"?l:[l]}},{key:"on",value:function(l,_){l=this.wrap(l);var x=t(this.elements),y;try{for(x.s();!(y=x.n()).done;){var w=y.value;w.fullyNamespacedEvents||(w.fullyNamespacedEvents={});var E=t(l),T;try{for(E.s();!(T=E.n()).done;){var C=T.value;w.fullyNamespacedEvents[C]=_,w.addEventListener(C,_)}}catch(M){E.e(M)}finally{E.f()}}}catch(M){x.e(M)}finally{x.f()}return this}},{key:"off",value:function(l){l=this.wrap(l);var _=t(this.elements),x;try{for(_.s();!(x=_.n()).done;){var y=x.value,w=t(l),E;try{for(w.s();!(E=w.n()).done;){var T=E.value;typeof y.fullyNamespacedEvents<"u"&&T in y.fullyNamespacedEvents&&y.removeEventListener(T,y.fullyNamespacedEvents[T])}}catch(C){w.e(C)}finally{w.f()}}}catch(C){_.e(C)}finally{_.f()}return this}},{key:"open",value:function(l){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;l=l||this.elements[0],typeof jQuery<"u"&&l instanceof jQuery&&(l=l.get(0)),_>0&&(l=this.elements[_]),this.initialImageIndex=this.elements.indexOf(l),this.initialImageIndex>-1&&this.openImage(l)}},{key:"openPosition",value:function(l){var _=this.elements[l];this.open(_,l)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var l=this.options,_=this.initialSelector;return this.destroy(),this.constructor(_,l),this}}]),g}(),v=p;s.default=v,Qm.SimpleLightbox=p})(um);const CE=eg(um);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yu="164",D_=0,Gh=1,N_=2,hm=1,O_=2,Li=3,Vi=0,Cn=1,hi=2,hr=0,Os=1,Wh=2,Xh=3,Yh=4,U_=5,Or=100,F_=101,B_=102,k_=103,z_=104,H_=200,V_=201,G_=202,W_=203,uu=204,hu=205,X_=206,Y_=207,q_=208,j_=209,K_=210,$_=211,Z_=212,J_=213,Q_=214,e0=0,t0=1,n0=2,_l=3,i0=4,r0=5,s0=6,o0=7,fm=0,a0=1,l0=2,fr=0,c0=1,u0=2,h0=3,f0=4,d0=5,p0=6,m0=7,qh="attached",g0="detached",dm=300,Xs=301,Ys=302,fu=303,du=304,Rl=306,qs=1e3,or=1001,vl=1002,yn=1003,pm=1004,Ao=1005,Fn=1006,il=1007,Ui=1008,gr=1009,_0=1010,v0=1011,mm=1012,gm=1013,js=1014,mi=1015,Pl=1016,_m=1017,vm=1018,na=1020,x0=35902,y0=1021,S0=1022,ri=1023,M0=1024,T0=1025,Us=1026,Jo=1027,xm=1028,ym=1029,E0=1030,Sm=1031,Mm=1033,ec=33776,tc=33777,nc=33778,ic=33779,jh=35840,Kh=35841,$h=35842,Zh=35843,Jh=36196,Qh=37492,ef=37496,tf=37808,nf=37809,rf=37810,sf=37811,of=37812,af=37813,lf=37814,cf=37815,uf=37816,hf=37817,ff=37818,df=37819,pf=37820,mf=37821,rc=36492,gf=36494,_f=36495,b0=36283,vf=36284,xf=36285,yf=36286,Qo=2300,Ks=2301,sc=2302,Sf=2400,Mf=2401,Tf=2402,A0=2500,w0=0,Tm=1,pu=2,C0=3200,R0=3201,Em=0,P0=1,er="",gn="srgb",$t="srgb-linear",qu="display-p3",Ll="display-p3-linear",xl="linear",St="srgb",yl="rec709",Sl="p3",ss=7680,Ef=519,L0=512,I0=513,D0=514,bm=515,N0=516,O0=517,U0=518,F0=519,mu=35044,bf="300 es",Fi=2e3,Ml=2001;class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const zo=Math.PI/180,$s=180/Math.PI;function si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function rn(s,e,t){return Math.max(e,Math.min(t,s))}function ju(s,e){return(s%e+e)%e}function B0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function k0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ho(s,e,t){return(1-t)*s+t*e}function z0(s,e,t,n){return Ho(s,e,1-Math.exp(-t*n))}function H0(s,e=1){return e-Math.abs(ju(s,e*2)-e)}function V0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function G0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function W0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function X0(s,e){return s+Math.random()*(e-s)}function Y0(s){return s*(.5-Math.random())}function q0(s){s!==void 0&&(Af=s);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j0(s){return s*zo}function K0(s){return s*$s}function $0(s){return(s&s-1)===0&&s!==0}function Z0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function J0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Q0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),u=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*f,c*d,a*u);break;case"YZY":s.set(c*d,a*h,c*f,a*u);break;case"ZXZ":s.set(c*f,c*d,a*h,a*u);break;case"XZX":s.set(a*h,c*v,c*p,a*u);break;case"YXY":s.set(c*p,a*h,c*v,a*u);break;case"ZYZ":s.set(c*v,c*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ev={DEG2RAD:zo,RAD2DEG:$s,generateUUID:si,clamp:rn,euclideanModulo:ju,mapLinear:B0,inverseLerp:k0,lerp:Ho,damp:z0,pingpong:H0,smoothstep:V0,smootherstep:G0,randInt:W0,randFloat:X0,randFloatSpread:Y0,seededRandom:q0,degToRad:j0,radToDeg:K0,isPowerOfTwo:$0,ceilPowerOfTwo:Z0,floorPowerOfTwo:J0,setQuaternionFromProperEuler:Q0,normalize:dt,denormalize:ii};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,o,a,c,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,u)}set(e,t,n,i,r,o,a,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],v=n[8],g=i[0],m=i[3],l=i[6],_=i[1],x=i[4],y=i[7],w=i[2],E=i[5],T=i[8];return r[0]=o*g+a*_+c*w,r[3]=o*m+a*x+c*E,r[6]=o*l+a*y+c*T,r[1]=u*g+h*_+f*w,r[4]=u*m+h*x+f*E,r[7]=u*l+h*y+f*T,r[2]=d*g+p*_+v*w,r[5]=d*m+p*x+v*E,r[8]=d*l+p*y+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+i*r*u-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],f=h*o-a*u,d=a*c-h*r,p=u*r-o*c,v=t*f+n*d+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(i*u-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*c-u*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-i*u,i*c,-i*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oc=new je;function Am(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tv(){const s=ea("canvas");return s.style.display="block",s}const wf={};function wm(s){s in wf||(wf[s]=!0,console.warn(s))}const Cf=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rf=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ya={[$t]:{transfer:xl,primaries:yl,toReference:s=>s,fromReference:s=>s},[gn]:{transfer:St,primaries:yl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ll]:{transfer:xl,primaries:Sl,toReference:s=>s.applyMatrix3(Rf),fromReference:s=>s.applyMatrix3(Cf)},[qu]:{transfer:St,primaries:Sl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Rf),fromReference:s=>s.applyMatrix3(Cf).convertLinearToSRGB()}},nv=new Set([$t,Ll]),ht={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!nv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ya[e].toReference,i=ya[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ya[s].primaries},getTransfer:function(s){return s===er?xl:ya[s].transfer}};function Fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ac(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class iv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=ea("canvas")),os.width=e.width,os.height=e.height;const n=os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fs(t[n]/255)*255):t[n]=Fs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rv=0;class Cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(lc(i[o].image)):r.push(lc(i[o]))}else r=lc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sv=0;class qt extends eo{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=or,i=or,r=Fn,o=Ui,a=ri,c=gr,u=qt.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=si(),this.name="",this.source=new Cm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=dm;qt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],v=c[9],g=c[2],m=c[6],l=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,w=(l+1)/2,E=(h+d)/4,T=(f+g)/4,C=(v+m)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=T/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=C/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(f-g)/_,this.z=(d-h)/_,this.w=Math.acos((u+p+l-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ov extends eo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends ov{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rm extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class av extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],u=n[i+1],h=n[i+2],f=n[i+3];const d=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||c!==d||u!==p||h!==v){let m=1-a;const l=c*d+u*p+h*v+f*g,_=l>=0?1:-1,x=1-l*l;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,l*_);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}const y=a*_;if(c=c*m+d*y,u=u*m+p*y,h=h*m+v*y,f=f*m+g*y,m===1-a){const w=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=w,u*=w,h*=w,f*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+h*f+c*p-u*d,e[t+1]=c*v+h*d+u*f-a*p,e[t+2]=u*v+h*p+a*d-c*f,e[t+3]=h*v-a*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(i/2),f=a(r/2),d=c(n/2),p=c(i/2),v=c(r/2);switch(o){case"XYZ":this._x=d*h*f+u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f+d*p*v;break;case"YZX":this._x=d*h*f+u*p*v,this._y=u*p*f+d*h*v,this._z=u*h*v-d*p*f,this._w=u*h*f-d*p*v;break;case"XZY":this._x=d*h*f-u*p*v,this._y=u*p*f-d*h*v,this._z=u*h*v+d*p*f,this._w=u*h*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*c,this._y=i*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-i*a,this._w=o*h-n*a-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+c*u+o*f-a*h,this.y=n+c*h+a*u-r*f,this.z=i+c*f+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cc.copy(this).projectOnVector(e),this.sub(cc)}reflect(e){return this.sub(cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cc=new U,Pf=new xr;class Gi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ma.subVectors(this.max,co),as.subVectors(e.a,co),ls.subVectors(e.b,co),cs.subVectors(e.c,co),Xi.subVectors(ls,as),Yi.subVectors(cs,ls),Tr.subVectors(as,cs);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Tr.z,Tr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Tr.z,0,-Tr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Tr.y,Tr.x,0];return!uc(t,as,ls,cs,Ma)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,as,ls,cs,Ma))?!1:(Ta.crossVectors(Xi,Yi),t=[Ta.x,Ta.y,Ta.z],uc(t,as,ls,cs,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new U,new U,new U,new U,new U,new U,new U,new U],Jn=new U,Sa=new Gi,as=new U,ls=new U,cs=new U,Xi=new U,Yi=new U,Tr=new U,co=new U,Ma=new U,Ta=new U,Er=new U;function uc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Er.fromArray(s,r);const a=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),c=e.dot(Er),u=t.dot(Er),h=n.dot(Er);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const lv=new Gi,uo=new U,hc=new U;class Si{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(hc)),this.expandByPoint(uo.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new U,fc=new U,Ea=new U,qi=new U,dc=new U,ba=new U,pc=new U;class ia{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fc.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(fc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ea),a=qi.dot(this.direction),c=-qi.dot(Ea),u=qi.lengthSq(),h=Math.abs(1-o*o);let f,d,p,v;if(h>0)if(f=o*c-a,d=o*a-c,v=r*h,f>=0)if(d>=-v)if(d<=v){const g=1/h;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+u}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+u;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+u;else d<=-v?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u):d<=v?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(fc).addScaledVector(Ea,d),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,r){dc.subVectors(t,e),ba.subVectors(n,e),pc.crossVectors(dc,ba);let o=this.direction.dot(pc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const c=a*this.direction.dot(ba.crossVectors(qi,ba));if(c<0)return null;const u=a*this.direction.dot(dc.cross(qi));if(u<0||c+u>o)return null;const h=-a*qi.dot(pc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,r,o,a,c,u,h,f,d,p,v,g,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,u,h,f,d,p,v,g,m)}set(e,t,n,i,r,o,a,c,u,h,f,d,p,v,g,m){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=i,l[1]=r,l[5]=o,l[9]=a,l[13]=c,l[2]=u,l[6]=h,l[10]=f,l[14]=d,l[3]=p,l[7]=v,l[11]=g,l[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*f,v=a*h,g=a*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+v*u,t[5]=d-g*u,t[9]=-a*c,t[2]=g-d*u,t[6]=v+p*u,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*f,v=u*h,g=u*f;t[0]=d+g*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-v,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*f,v=u*h,g=u*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*f,v=a*h,g=a*f;t[0]=c*h,t[4]=v*u-p,t[8]=d*u+g,t[1]=c*f,t[5]=g*u+d,t[9]=p*u-v,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*u,v=a*c,g=a*u;t[0]=c*h,t[4]=g-d*f,t[8]=v*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*c,p=o*u,v=a*c,g=a*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+g,t[5]=o*h,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,uv)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ji.crossVectors(n,Pn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ji.crossVectors(n,Pn)),ji.normalize(),Aa.crossVectors(Pn,ji),i[0]=ji.x,i[4]=Aa.x,i[8]=Pn.x,i[1]=ji.y,i[5]=Aa.y,i[9]=Pn.y,i[2]=ji.z,i[6]=Aa.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],l=n[14],_=n[3],x=n[7],y=n[11],w=n[15],E=i[0],T=i[4],C=i[8],M=i[12],S=i[1],I=i[5],D=i[9],L=i[13],z=i[2],X=i[6],j=i[10],K=i[14],F=i[3],J=i[7],R=i[11],ae=i[15];return r[0]=o*E+a*S+c*z+u*F,r[4]=o*T+a*I+c*X+u*J,r[8]=o*C+a*D+c*j+u*R,r[12]=o*M+a*L+c*K+u*ae,r[1]=h*E+f*S+d*z+p*F,r[5]=h*T+f*I+d*X+p*J,r[9]=h*C+f*D+d*j+p*R,r[13]=h*M+f*L+d*K+p*ae,r[2]=v*E+g*S+m*z+l*F,r[6]=v*T+g*I+m*X+l*J,r[10]=v*C+g*D+m*j+l*R,r[14]=v*M+g*L+m*K+l*ae,r[3]=_*E+x*S+y*z+w*F,r[7]=_*T+x*I+y*X+w*J,r[11]=_*C+x*D+y*j+w*R,r[15]=_*M+x*L+y*K+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],l=e[15];return v*(+r*c*f-i*u*f-r*a*d+n*u*d+i*a*p-n*c*p)+g*(+t*c*p-t*u*d+r*o*d-i*o*p+i*u*h-r*c*h)+m*(+t*u*f-t*a*p-r*o*f+n*o*p+r*a*h-n*u*h)+l*(-i*a*h-t*c*f+t*a*d+i*o*f-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],l=e[15],_=f*m*u-g*d*u+g*c*p-a*m*p-f*c*l+a*d*l,x=v*d*u-h*m*u-v*c*p+o*m*p+h*c*l-o*d*l,y=h*g*u-v*f*u+v*a*p-o*g*p-h*a*l+o*f*l,w=v*f*c-h*g*c-v*a*d+o*g*d+h*a*m-o*f*m,E=t*_+n*x+i*y+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(g*d*r-f*m*r-g*i*p+n*m*p+f*i*l-n*d*l)*T,e[2]=(a*m*r-g*c*r+g*i*u-n*m*u-a*i*l+n*c*l)*T,e[3]=(f*c*r-a*d*r-f*i*u+n*d*u+a*i*p-n*c*p)*T,e[4]=x*T,e[5]=(h*m*r-v*d*r+v*i*p-t*m*p-h*i*l+t*d*l)*T,e[6]=(v*c*r-o*m*r-v*i*u+t*m*u+o*i*l-t*c*l)*T,e[7]=(o*d*r-h*c*r+h*i*u-t*d*u-o*i*p+t*c*p)*T,e[8]=y*T,e[9]=(v*f*r-h*g*r-v*n*p+t*g*p+h*n*l-t*f*l)*T,e[10]=(o*g*r-v*a*r+v*n*u-t*g*u-o*n*l+t*a*l)*T,e[11]=(h*a*r-o*f*r-h*n*u+t*f*u+o*n*p-t*a*p)*T,e[12]=w*T,e[13]=(h*g*i-v*f*i+v*n*d-t*g*d-h*n*m+t*f*m)*T,e[14]=(v*a*i-o*g*i-v*n*c+t*g*c+o*n*m-t*a*m)*T,e[15]=(o*f*i-h*a*i+h*n*c-t*f*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*c,u*c+i*a,0,u*a+i*c,h*a+n,h*c-i*o,0,u*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,f=a+a,d=r*u,p=r*h,v=r*f,g=o*h,m=o*f,l=a*f,_=c*u,x=c*h,y=c*f,w=n.x,E=n.y,T=n.z;return i[0]=(1-(g+l))*w,i[1]=(p+y)*w,i[2]=(v-x)*w,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(d+l))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(v+x)*T,i[9]=(m-_)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const u=1/r,h=1/o,f=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Fi){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,v;if(a===Fi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ml)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fi){const c=this.elements,u=1/(t-e),h=1/(n-i),f=1/(o-r),d=(t+e)*u,p=(n+i)*h;let v,g;if(a===Fi)v=(o+r)*f,g=-2*f;else if(a===Ml)v=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new U,Qn=new Ye,cv=new U(0,0,0),uv=new U(1,1,1),ji=new U,Aa=new U,Pn=new U,Lf=new Ye,If=new xr;class yi{constructor(e=0,t=0,n=0,i=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],u=i[5],h=i[9],f=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hv=0;const Df=new U,hs=new xr,wi=new Ye,wa=new U,ho=new U,fv=new U,dv=new xr,Nf=new U(1,0,0),Of=new U(0,1,0),Uf=new U(0,0,1),Ff={type:"added"},pv={type:"removed"},fs={type:"childadded",child:null},mc={type:"childremoved",child:null};class At extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new U,t=new yi,n=new xr,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Of,e)}rotateZ(e){return this.rotateOnAxis(Uf,e)}translateOnAxis(e,t){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Of,e)}translateZ(e){return this.translateOnAxis(Uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ho,wa,this.up):wi.lookAt(wa,ho,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(wi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pv),mc.child=e,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new U,Ci=new U,gc=new U,Ri=new U,ds=new U,ps=new U,Bf=new U,_c=new U,vc=new U,xc=new U;class fi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ei.subVectors(i,t),Ci.subVectors(n,t),gc.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(Ci),c=ei.dot(gc),u=Ci.dot(Ci),h=Ci.dot(gc),f=o*u-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(u*c-a*h)*d,v=(o*h-a*c)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Ci.subVectors(e,t),ei.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ds.subVectors(i,n),ps.subVectors(r,n),_c.subVectors(e,n);const c=ds.dot(_c),u=ps.dot(_c);if(c<=0&&u<=0)return t.copy(n);vc.subVectors(e,i);const h=ds.dot(vc),f=ps.dot(vc);if(h>=0&&f<=h)return t.copy(i);const d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ds,o);xc.subVectors(e,r);const p=ds.dot(xc),v=ps.dot(xc);if(v>=0&&p<=v)return t.copy(r);const g=p*u-c*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(ps,a);const m=h*v-p*f;if(m<=0&&f-h>=0&&p-v>=0)return Bf.subVectors(r,i),a=(f-h)/(f-h+(p-v)),t.copy(i).addScaledVector(Bf,a);const l=1/(m+g+d);return o=g*l,a=d*l,t.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=ju(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yc(o,r,e+1/3),this.g=yc(o,r,e),this.b=yc(o,r,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=ac(e.r),this.g=ac(e.g),this.b=ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return ht.fromWorkingColorSpace(en.copy(this),e),Math.round(rn(en.r*255,0,255))*65536+Math.round(rn(en.g*255,0,255))*256+Math.round(rn(en.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(en.copy(this),t);const n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=gn){ht.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,i=en.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Ca);const n=Ho(Ki.h,Ca.h,t),i=Ho(Ki.s,Ca.s,t),r=Ho(Ki.l,Ca.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ve;Ve.NAMES=Pm;let mv=0;class vi extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Os,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uu&&(n.blendSrc=this.blendSrc),this.blendDst!==hu&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_l&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new U,Ra=new tt;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mu&&(e.usage=this.usage),e}}class Lm extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Im extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ki extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gv=0;const Gn=new Ye,Sc=new At,ms=new U,Ln=new Gi,fo=new Gi,Gt=new U;class Mi extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?Im:Lm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Ln.min,fo.min),Ln.expandByPoint(Gt),Gt.addVectors(Ln.max,fo.max),Ln.expandByPoint(Gt)):(Ln.expandByPoint(fo.min),Ln.expandByPoint(fo.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Gt.fromBufferAttribute(a,u),c&&(ms.fromBufferAttribute(e,u),Gt.add(ms)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new U,c[C]=new U;const u=new U,h=new U,f=new U,d=new tt,p=new tt,v=new tt,g=new U,m=new U;function l(C,M,S){u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,S),h.sub(u),f.sub(u),p.sub(d),v.sub(d);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(I),a[C].add(g),a[M].add(g),a[S].add(g),c[C].add(m),c[M].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,M=_.length;C<M;++C){const S=_[C],I=S.start,D=S.count;for(let L=I,z=I+D;L<z;L+=3)l(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new U,y=new U,w=new U,E=new U;function T(C){w.fromBufferAttribute(i,C),E.copy(w);const M=a[C];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(E,M);const I=y.dot(c[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,I)}for(let C=0,M=_.length;C<M;++C){const S=_[C],I=S.start,D=S.count;for(let L=I,z=I+D;L<z;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,u=new U,h=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(h),c.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let l=0;l<h;l++)d[v++]=u[p++]}return new Sn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],u=e(c,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new Ye,br=new ia,Pa=new Si,zf=new U,gs=new U,_s=new U,vs=new U,Mc=new U,La=new U,Ia=new tt,Da=new tt,Na=new tt,Hf=new U,Vf=new U,Gf=new U,Oa=new U,Ua=new U;class kn extends At{constructor(e=new Mi,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){La.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],f=r[c];h!==0&&(Mc.fromBufferAttribute(f,e),o?La.addScaledVector(Mc,h):La.addScaledVector(Mc.sub(t),h))}t.add(La)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(Pa.containsPoint(br.origin)===!1&&(br.intersectSphere(Pa,zf)===null||br.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(kf.copy(r).invert(),br.copy(e.ray).applyMatrix4(kf),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],l=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=x;y<w;y+=3){const E=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);i=Fa(this,l,e,n,u,h,f,E,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,l=g;m<l;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Fa(this,o,e,n,u,h,f,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],l=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=x;y<w;y+=3){const E=y,T=y+1,C=y+2;i=Fa(this,l,e,n,u,h,f,E,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,l=g;m<l;m+=3){const _=m,x=m+1,y=m+2;i=Fa(this,o,e,n,u,h,f,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _v(s,e,t,n,i,r,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Vi,a),c===null)return null;Ua.copy(a),Ua.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(Ua);return u<t.near||u>t.far?null:{distance:u,point:Ua.clone(),object:s}}function Fa(s,e,t,n,i,r,o,a,c,u){s.getVertexPosition(a,gs),s.getVertexPosition(c,_s),s.getVertexPosition(u,vs);const h=_v(s,e,t,n,gs,_s,vs,Oa);if(h){i&&(Ia.fromBufferAttribute(i,a),Da.fromBufferAttribute(i,c),Na.fromBufferAttribute(i,u),h.uv=fi.getInterpolation(Oa,gs,_s,vs,Ia,Da,Na,new tt)),r&&(Ia.fromBufferAttribute(r,a),Da.fromBufferAttribute(r,c),Na.fromBufferAttribute(r,u),h.uv1=fi.getInterpolation(Oa,gs,_s,vs,Ia,Da,Na,new tt)),o&&(Hf.fromBufferAttribute(o,a),Vf.fromBufferAttribute(o,c),Gf.fromBufferAttribute(o,u),h.normal=fi.getInterpolation(Oa,gs,_s,vs,Hf,Vf,Gf,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new U,materialIndex:0};fi.getNormal(gs,_s,vs,f.normal),h.face=f}return h}class ra extends Mi{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ki(u,3)),this.setAttribute("normal",new ki(h,3)),this.setAttribute("uv",new ki(f,2));function v(g,m,l,_,x,y,w,E,T,C,M){const S=y/T,I=w/C,D=y/2,L=w/2,z=E/2,X=T+1,j=C+1;let K=0,F=0;const J=new U;for(let R=0;R<j;R++){const ae=R*I-L;for(let Le=0;Le<X;Le++){const $e=Le*S-D;J[g]=$e*_,J[m]=ae*x,J[l]=z,u.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[l]=E>0?1:-1,h.push(J.x,J.y,J.z),f.push(Le/T),f.push(1-R/C),K+=1}}for(let R=0;R<C;R++)for(let ae=0;ae<T;ae++){const Le=d+ae+X*R,$e=d+ae+X*(R+1),Y=d+(ae+1)+X*(R+1),ee=d+(ae+1)+X*R;c.push(Le,$e,ee),c.push($e,Y,ee),F+=6}a.addGroup(p,F,M),p+=F,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function fn(s){const e={};for(let t=0;t<s.length;t++){const n=Zs(s[t]);for(const i in n)e[i]=n[i]}return e}function vv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const xv={clone:Zs,merge:fn};var yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nm extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new U,Wf=new tt,Xf=new tt;class Tn extends Nm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/u,i*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class Mv extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(xs,ys,e,t);i.layers=this.layers,this.add(i);const r=new Tn(xs,ys,e,t);r.layers=this.layers,this.add(r);const o=new Tn(xs,ys,e,t);o.layers=this.layers,this.add(o);const a=new Tn(xs,ys,e,t);a.layers=this.layers,this.add(a);const c=new Tn(xs,ys,e,t);c.layers=this.layers,this.add(c);const u=new Tn(xs,ys,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const u of t)this.remove(u);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Om extends qt{constructor(e,t,n,i,r,o,a,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,i,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tv extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Om(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ra(5,5,5),r=new _r({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:hr});r.uniforms.tEquirect.value=t;const o=new kn(i,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Fn),new Mv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Tc=new U,Ev=new U,bv=new je;class Dr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Tc.subVectors(n,t).cross(Ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bv.getNormalMatrix(e),i=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Si,Ba=new U;class $u{constructor(e=new Dr,t=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],u=i[4],h=i[5],f=i[6],d=i[7],p=i[8],v=i[9],g=i[10],m=i[11],l=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,d-u,m-p,y-l).normalize(),n[1].setComponents(c+r,d+u,m+p,y+l).normalize(),n[2].setComponents(c+o,d+h,m+v,y+_).normalize(),n[3].setComponents(c-o,d-h,m-v,y-_).normalize(),n[4].setComponents(c-a,d-f,m-g,y-x).normalize(),t===Fi)n[5].setComponents(c+a,d+f,m+g,y+x).normalize();else if(t===Ml)n[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ba.x=i.normal.x>0?e.max.x:e.min.x,Ba.y=i.normal.y>0?e.max.y:e.min.y,Ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Um(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Av(s){const e=new WeakMap;function t(a,c){const u=a.array,h=a.usage,f=u.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,u){const h=c.array,f=c._updateRange,d=c.updateRanges;if(s.bindBuffer(u,a),f.count===-1&&d.length===0&&s.bufferSubData(u,0,h),d.length!==0){for(let p=0,v=d.length;p<v;p++){const g=d[p];s.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}f.count!==-1&&(s.bufferSubData(u,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:i,remove:r,update:o}}class Il extends Mi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),u=a+1,h=c+1,f=e/a,d=t/c,p=[],v=[],g=[],m=[];for(let l=0;l<h;l++){const _=l*d-o;for(let x=0;x<u;x++){const y=x*f-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-l/c)}}for(let l=0;l<c;l++)for(let _=0;_<a;_++){const x=_+u*l,y=_+u*(l+1),w=_+1+u*(l+1),E=_+1+u*l;p.push(x,y,E),p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new ki(v,3)),this.setAttribute("normal",new ki(g,3)),this.setAttribute("uv",new ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.widthSegments,e.heightSegments)}}var wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:wv,alphahash_pars_fragment:Cv,alphamap_fragment:Rv,alphamap_pars_fragment:Pv,alphatest_fragment:Lv,alphatest_pars_fragment:Iv,aomap_fragment:Dv,aomap_pars_fragment:Nv,batching_pars_vertex:Ov,batching_vertex:Uv,begin_vertex:Fv,beginnormal_vertex:Bv,bsdfs:kv,iridescence_fragment:zv,bumpmap_pars_fragment:Hv,clipping_planes_fragment:Vv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:Xv,color_fragment:Yv,color_pars_fragment:qv,color_pars_vertex:jv,color_vertex:Kv,common:$v,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Jv,displacementmap_pars_vertex:Qv,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:rx,envmap_fragment:sx,envmap_common_pars_fragment:ox,envmap_pars_fragment:ax,envmap_pars_vertex:lx,envmap_physical_pars_fragment:xx,envmap_vertex:cx,fog_vertex:ux,fog_pars_vertex:hx,fog_fragment:fx,fog_pars_fragment:dx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:_x,lights_pars_begin:vx,lights_toon_fragment:yx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ex,lights_physical_pars_fragment:bx,lights_fragment_begin:Ax,lights_fragment_maps:wx,lights_fragment_end:Cx,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Ix,map_fragment:Dx,map_pars_fragment:Nx,map_particle_fragment:Ox,map_particle_pars_fragment:Ux,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Bx,morphinstance_vertex:kx,morphcolor_vertex:zx,morphnormal_vertex:Hx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:Yx,normal_pars_vertex:qx,normal_vertex:jx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Qx,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:ry,dithering_pars_fragment:sy,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:uy,shadowmask_pars_fragment:hy,skinbase_vertex:fy,skinning_pars_vertex:dy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:_y,tonemapping_fragment:vy,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:Sy,uv_pars_fragment:My,uv_pars_vertex:Ty,uv_vertex:Ey,worldpos_vertex:by,background_vert:Ay,background_frag:wy,backgroundCube_vert:Cy,backgroundCube_frag:Ry,cube_vert:Py,cube_frag:Ly,depth_vert:Iy,depth_frag:Dy,distanceRGBA_vert:Ny,distanceRGBA_frag:Oy,equirect_vert:Uy,equirect_frag:Fy,linedashed_vert:By,linedashed_frag:ky,meshbasic_vert:zy,meshbasic_frag:Hy,meshlambert_vert:Vy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:Yy,meshnormal_frag:qy,meshphong_vert:jy,meshphong_frag:Ky,meshphysical_vert:$y,meshphysical_frag:Zy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:eS,points_frag:tS,shadow_vert:nS,shadow_frag:iS,sprite_vert:rS,sprite_frag:sS},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:fn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:fn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:fn([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:fn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:fn([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:fn([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:fn([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:fn([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ci.physical={uniforms:fn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ka={r:0,b:0,g:0},wr=new yi,oS=new Ye;function aS(s,e,t,n,i,r,o){const a=new Ve(0);let c=r===!0?0:1,u,h,f=null,d=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?l(a,c):y&&y.isColor&&(l(y,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Rl)?(h===void 0&&(h=new kn(new ra(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Zs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wr.copy(x.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oS.makeRotationFromEuler(wr)),h.material.toneMapped=ht.getTransfer(y.colorSpace)!==St,(f!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new kn(new Il(2,2),new _r({name:"BackgroundMaterial",uniforms:Zs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ht.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function l(_,x){_.getRGB(ka,Dm(s)),n.buffers.color.setClear(ka.r,ka.g,ka.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),c=x,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,l(a,c)},render:g,addToRenderList:m}}function lS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,I,D,L,z){let X=!1;const j=f(L,D,I);r!==j&&(r=j,u(r.object)),X=p(S,L,D,z),X&&v(S,L,D,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,I,D,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function u(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function f(S,I,D){const L=D.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let X=z[I.id];X===void 0&&(X={},z[I.id]=X);let j=X[L];return j===void 0&&(j=d(c()),X[L]=j),j}function d(S){const I=[],D=[],L=[];for(let z=0;z<t;z++)I[z]=0,D[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,I,D,L){const z=r.attributes,X=I.attributes;let j=0;const K=D.getAttributes();for(const F in K)if(K[F].location>=0){const R=z[F];let ae=X[F];if(ae===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),R===void 0||R.attribute!==ae||ae&&R.data!==ae.data)return!0;j++}return r.attributesNum!==j||r.index!==L}function v(S,I,D,L){const z={},X=I.attributes;let j=0;const K=D.getAttributes();for(const F in K)if(K[F].location>=0){let R=X[F];R===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(R=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(R=S.instanceColor));const ae={};ae.attribute=R,R&&R.data&&(ae.data=R.data),z[F]=ae,j++}r.attributes=z,r.attributesNum=j,r.index=L}function g(){const S=r.newAttributes;for(let I=0,D=S.length;I<D;I++)S[I]=0}function m(S){l(S,0)}function l(S,I){const D=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;D[S]=1,L[S]===0&&(s.enableVertexAttribArray(S),L[S]=1),z[S]!==I&&(s.vertexAttribDivisor(S,I),z[S]=I)}function _(){const S=r.newAttributes,I=r.enabledAttributes;for(let D=0,L=I.length;D<L;D++)I[D]!==S[D]&&(s.disableVertexAttribArray(D),I[D]=0)}function x(S,I,D,L,z,X,j){j===!0?s.vertexAttribIPointer(S,I,D,z,X):s.vertexAttribPointer(S,I,D,L,z,X)}function y(S,I,D,L){g();const z=L.attributes,X=D.getAttributes(),j=I.defaultAttributeValues;for(const K in X){const F=X[K];if(F.location>=0){let J=z[K];if(J===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const R=J.normalized,ae=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const $e=Le.buffer,Y=Le.type,ee=Le.bytesPerElement,fe=Y===s.INT||Y===s.UNSIGNED_INT||J.gpuType===gm;if(J.isInterleavedBufferAttribute){const ne=J.data,Ie=ne.stride,Re=J.offset;if(ne.isInstancedInterleavedBuffer){for(let B=0;B<F.locationSize;B++)l(F.location+B,ne.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let B=0;B<F.locationSize;B++)m(F.location+B);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let B=0;B<F.locationSize;B++)x(F.location+B,ae/F.locationSize,Y,R,Ie*ee,(Re+ae/F.locationSize*B)*ee,fe)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)l(F.location+ne,J.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<F.locationSize;ne++)m(F.location+ne);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let ne=0;ne<F.locationSize;ne++)x(F.location+ne,ae/F.locationSize,Y,R,ae*ee,ae/F.locationSize*ne*ee,fe)}}else if(j!==void 0){const R=j[K];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(F.location,R);break;case 3:s.vertexAttrib3fv(F.location,R);break;case 4:s.vertexAttrib4fv(F.location,R);break;default:s.vertexAttrib1fv(F.location,R)}}}}_()}function w(){C();for(const S in n){const I=n[S];for(const D in I){const L=I[D];for(const z in L)h(L[z].object),delete L[z];delete I[D]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const D in I){const L=I[D];for(const z in L)h(L[z].object),delete L[z];delete I[D]}delete n[S.id]}function T(S){for(const I in n){const D=n[I];if(D[S.id]===void 0)continue;const L=D[S.id];for(const z in L)h(L[z].object),delete L[z];delete D[S.id]}}function C(){M(),o=!0,r!==i&&(r=i,u(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function cS(s,e,t){let n;function i(u){n=u}function r(u,h){s.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,f){f!==0&&(s.drawArraysInstanced(n,u,h,f),t.update(h,n,f))}function a(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(u[p],h[p]);else{d.multiDrawArraysWEBGL(n,u,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=h[v];t.update(p,n,1)}}function c(u,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];for(let g=0;g<d.length;g++)t.update(v,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==ri&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===Pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gr&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==mi&&!T)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:l,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function hS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dr,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||i;return i=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,l=s.get(f);if(!i||v===null||v.length===0||r&&!m)r?h(null):u();else{const _=r?0:n,x=_*4;let y=l.clippingState||null;c.value=y,y=h(v,d,x,p);for(let w=0;w!==x;++w)y[w]=t[w];l.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const l=p+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<l)&&(m=new Float32Array(l));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function fS(s){let e=new WeakMap;function t(o,a){return a===fu?o.mapping=Xs:a===du&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fu||a===du)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Tv(c.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zu extends Nm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,Yf=[.125,.215,.35,.446,.526,.582],Ur=20,Ec=new Zu,qf=new Ve;let bc=null,Ac=0,wc=0,Cc=!1;const Nr=(1+Math.sqrt(5))/2,Ss=1/Nr,jf=[new U(-Nr,Ss,0),new U(Nr,Ss,0),new U(-Ss,0,Nr),new U(Ss,0,Nr),new U(0,Nr,-Ss),new U(0,Nr,Ss),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Ac,wc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Pl,format:ri,colorSpace:$t,depthBuffer:!1},i=$f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dS(r)),this._blurMaterial=pS(r,e,t)}return i}_compileMaterial(e){const t=new kn(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,i){const a=new Tn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(qf),h.toneMapping=fr,h.autoClear=!1;const p=new kr({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),v=new kn(new ra,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(qf),g=!0);for(let l=0;l<6;l++){const _=l%3;_===0?(a.up.set(0,c[l],0),a.lookAt(u[l],0,0)):_===1?(a.up.set(0,0,c[l]),a.lookAt(0,u[l],0)):(a.up.set(0,c[l],0),a.lookAt(0,0,u[l]));const x=this._cubeSize;za(i,_*x,l>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xs||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jf[(i-r-1)%jf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new kn(this._lodPlanes[i],u),d=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Ur;m>Ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const l=[];let _=0;for(let T=0;T<Ur;++T){const C=T/g,M=Math.exp(-C*C/2);l.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<l.length;T++)l[T]=l[T]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=l,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-Cs?i-x+Cs:0),E=4*(this._cubeSize-y);za(t,w,E,3*y,2*y),c.setRenderTarget(t),c.render(f,Ec)}}function dS(s){const e=[],t=[],n=[];let i=s;const r=s-Cs+1+Yf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Cs?c=Yf[o-s+Cs-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,g=3,m=2,l=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(l*v*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,C=E>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(M,g*v*E),x.set(d,m*v*E);const S=[E,E,E,E,E,E];y.set(S,l*v*E)}const w=new Mi;w.setAttribute("position",new Sn(_,g)),w.setAttribute("uv",new Sn(x,m)),w.setAttribute("faceIndex",new Sn(y,l)),e.push(w),i>Cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $f(s,e,t){const n=new Qr(s,e,t);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function pS(s,e,t){const n=new Float32Array(Ur),i=new U(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Zf(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Jf(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ju(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===fu||c===du,h=c===Xs||c===Ys;if(u||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Kf(s)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Kf(s)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _S(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,l=g.length;m<l;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],s.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,l=g.length;m<l;m++)e.update(g[m],s.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const w=_[x+0],E=_[x+1],T=_[x+2];d.push(w,E,E,T,T,w)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const w=x+0,E=x+1,T=x+2;d.push(w,E,E,T,T,w)}}else return;const m=new(Am(d)?Im:Lm)(d,1);m.version=g;const l=r.get(f);l&&e.remove(l),r.set(f,m)}function h(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function vS(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function u(d,p,v){v!==0&&(s.drawElementsInstanced(n,p,r,d*o,v),t.update(p,n,v))}function h(d,p,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/o,p[m]);else{g.multiDrawElementsWEBGL(n,p,0,r,d,0,v);let m=0;for(let l=0;l<v;l++)m+=p[l];t.update(m,n,1)}}function f(d,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let l=0;l<d.length;l++)u(d[l]/o,p[l],g[l]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,v);let l=0;for(let _=0;_<v;_++)l+=p[_];for(let _=0;_<g.length;_++)t.update(l,n,g[_])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function xS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yS(s,e,t){const n=new WeakMap,i=new _t;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*w*4*f),T=new Rm(E,y,w,f);T.type=mi,T.needsUpdate=!0;const C=x*4;for(let S=0;S<f;S++){const I=m[S],D=l[S],L=_[S],z=y*w*4*S;for(let X=0;X<I.count;X++){const j=X*C;p===!0&&(i.fromBufferAttribute(I,X),E[z+j+0]=i.x,E[z+j+1]=i.y,E[z+j+2]=i.z,E[z+j+3]=0),v===!0&&(i.fromBufferAttribute(D,X),E[z+j+4]=i.x,E[z+j+5]=i.y,E[z+j+6]=i.z,E[z+j+7]=0),g===!0&&(i.fromBufferAttribute(L,X),E[z+j+8]=i.x,E[z+j+9]=i.y,E[z+j+10]=i.z,E[z+j+11]=L.itemSize===4?i.w:1)}}d={count:f,texture:T,size:new tt(y,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<u.length;g++)p+=u[g];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function SS(s,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,f=e.get(c,h);if(i.get(f)!==u&&(e.update(f),i.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return f}function o(){i=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class Fm extends qt{constructor(e,t,n,i,r,o,a,c,u,h){if(h=h!==void 0?h:Us,h!==Us&&h!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=js),n===void 0&&h===Jo&&(n=na),super(null,i,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bm=new qt,km=new Fm(1,1);km.compareFunction=bm;const zm=new Rm,Hm=new av,Vm=new Om,Qf=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function to(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Qf[i];if(r===void 0&&(r=new Float32Array(i),Qf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dl(s,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function MS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function TS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function ES(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function bS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function AS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;id.set(n),s.uniformMatrix2fv(this.addr,!1,id),Ht(t,n)}}function wS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;nd.set(n),s.uniformMatrix3fv(this.addr,!1,nd),Ht(t,n)}}function CS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;td.set(n),s.uniformMatrix4fv(this.addr,!1,td),Ht(t,n)}}function RS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function PS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function LS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function IS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function DS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function NS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function OS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function US(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function FS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?km:Bm;t.setTexture2D(e||r,i)}function BS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hm,i)}function kS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vm,i)}function zS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zm,i)}function HS(s){switch(s){case 5126:return MS;case 35664:return TS;case 35665:return ES;case 35666:return bS;case 35674:return AS;case 35675:return wS;case 35676:return CS;case 5124:case 35670:return RS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return NS;case 36295:return OS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return zS}}function VS(s,e){s.uniform1fv(this.addr,e)}function GS(s,e){const t=to(e,this.size,2);s.uniform2fv(this.addr,t)}function WS(s,e){const t=to(e,this.size,3);s.uniform3fv(this.addr,t)}function XS(s,e){const t=to(e,this.size,4);s.uniform4fv(this.addr,t)}function YS(s,e){const t=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qS(s,e){const t=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jS(s,e){const t=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function KS(s,e){s.uniform1iv(this.addr,e)}function $S(s,e){s.uniform2iv(this.addr,e)}function ZS(s,e){s.uniform3iv(this.addr,e)}function JS(s,e){s.uniform4iv(this.addr,e)}function QS(s,e){s.uniform1uiv(this.addr,e)}function eM(s,e){s.uniform2uiv(this.addr,e)}function tM(s,e){s.uniform3uiv(this.addr,e)}function nM(s,e){s.uniform4uiv(this.addr,e)}function iM(s,e,t){const n=this.cache,i=e.length,r=Dl(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bm,r[o])}function rM(s,e,t){const n=this.cache,i=e.length,r=Dl(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hm,r[o])}function sM(s,e,t){const n=this.cache,i=e.length,r=Dl(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vm,r[o])}function oM(s,e,t){const n=this.cache,i=e.length,r=Dl(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zm,r[o])}function aM(s){switch(s){case 5126:return VS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return YS;case 35675:return qS;case 35676:return jS;case 5124:case 35670:return KS;case 35667:case 35671:return $S;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return oM}}class lM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HS(t.type)}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function rd(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,t){const n=s.name,i=n.length;for(Rc.lastIndex=0;;){const r=Rc.exec(n),o=Rc.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===i){rd(t,u===void 0?new lM(a,s,e):new cM(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new uM(a),rd(t,f)),t=f}}}class rl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);hM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const fM=37297;let dM=0;function pM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mM(s){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(s);let n;switch(e===t?n="":e===Sl&&t===yl?n="LinearDisplayP3ToLinearSRGB":e===yl&&t===Sl&&(n="LinearSRGBToLinearDisplayP3"),s){case $t:case Ll:return[n,"LinearTransferOETF"];case gn:case qu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function od(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+pM(s.getShaderSource(e),o)}else return i}function gM(s,e){const t=mM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _M(s,e){let t;switch(e){case c0:t="Linear";break;case u0:t="Reinhard";break;case h0:t="OptimizedCineon";break;case f0:t="ACESFilmic";break;case p0:t="AgX";break;case m0:t="Neutral";break;case d0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function xM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wo(s){return s!==""}function ad(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(s){return s.replace(SM,TM)}const MM=new Map;function TM(s,e){let t=qe[e];if(t===void 0){const n=MM.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gu(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(s){return s.replace(EM,bM)}function bM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ud(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fm:e="ENVMAP_BLENDING_MULTIPLY";break;case a0:e="ENVMAP_BLENDING_MIX";break;case l0:e="ENVMAP_BLENDING_ADD";break}return e}function PM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=AM(t),u=wM(t),h=CM(t),f=RM(t),d=PM(t),p=vM(t),v=xM(r),g=i.createProgram();let m,l,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wo).join(`
`),m.length>0&&(m+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wo).join(`
`),l.length>0&&(l+=`
`)):(m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),l=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?qe.tonemapping_pars_fragment:"",t.toneMapping!==fr?_M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,gM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=gu(o),o=ad(o,t),o=ld(o,t),a=gu(a),a=ad(a,t),a=ld(a,t),o=cd(o),a=cd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,l=["#define varying in",t.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const x=_+m+o,y=_+l+a,w=sd(i,i.VERTEX_SHADER,x),E=sd(i,i.FRAGMENT_SHADER,y);i.attachShader(g,w),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(I){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(E).trim();let X=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,E);else{const K=od(i,w,"vertex"),F=od(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+K+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||z==="")&&(j=!1);j&&(I.diagnostics={runnable:X,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:l}})}i.deleteShader(w),i.deleteShader(E),C=new rl(i,g),M=yM(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,fM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let IM=0;class DM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NM(e),t.set(e,n)),n}}class NM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function OM(s,e,t,n,i,r,o){const a=new Ku,c=new DM,u=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,D,L){const z=D.fog,X=L.geometry,j=M.isMeshStandardMaterial?D.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),F=K&&K.mapping===Rl?K.image.height:null,J=v[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const R=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=R!==void 0?R.length:0;let Le=0;X.morphAttributes.position!==void 0&&(Le=1),X.morphAttributes.normal!==void 0&&(Le=2),X.morphAttributes.color!==void 0&&(Le=3);let $e,Y,ee,fe;if(J){const it=ci[J];$e=it.vertexShader,Y=it.fragmentShader}else $e=M.vertexShader,Y=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),fe=c.getFragmentShaderID(M);const ne=s.getRenderTarget(),Ie=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,B=!!M.map,We=!!M.matcap,Me=!!K,Te=!!M.aoMap,_e=!!M.lightMap,Ne=!!M.bumpMap,Pe=!!M.normalMap,k=!!M.displacementMap,nt=!!M.emissiveMap,P=!!M.metalnessMap,b=!!M.roughnessMap,W=M.anisotropy>0,Z=M.clearcoat>0,Q=M.dispersion>0,te=M.iridescence>0,me=M.sheen>0,le=M.transmission>0,ie=W&&!!M.anisotropyMap,De=Z&&!!M.clearcoatMap,re=Z&&!!M.clearcoatNormalMap,Se=Z&&!!M.clearcoatRoughnessMap,Ke=te&&!!M.iridescenceMap,ge=te&&!!M.iridescenceThicknessMap,ve=me&&!!M.sheenColorMap,Oe=me&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,mt=!!M.specularColorMap,Ue=!!M.specularIntensityMap,N=le&&!!M.transmissionMap,q=le&&!!M.thicknessMap,$=!!M.gradientMap,oe=!!M.alphaMap,ce=M.alphaTest>0,He=!!M.alphaHash,lt=!!M.extensions;let ft=fr;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ft=s.toneMapping);const vt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:Y,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Re,instancing:Ie,instancingColor:Ie&&L.instanceColor!==null,instancingMorph:Ie&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$t,alphaToCoverage:!!M.alphaToCoverage,map:B,matcap:We,envMap:Me,envMapMode:Me&&K.mapping,envMapCubeUVHeight:F,aoMap:Te,lightMap:_e,bumpMap:Ne,normalMap:Pe,displacementMap:d&&k,emissiveMap:nt,normalMapObjectSpace:Pe&&M.normalMapType===P0,normalMapTangentSpace:Pe&&M.normalMapType===Em,metalnessMap:P,roughnessMap:b,anisotropy:W,anisotropyMap:ie,clearcoat:Z,clearcoatMap:De,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:Q,iridescence:te,iridescenceMap:Ke,iridescenceThicknessMap:ge,sheen:me,sheenColorMap:ve,sheenRoughnessMap:Oe,specularMap:Ge,specularColorMap:mt,specularIntensityMap:Ue,transmission:le,transmissionMap:N,thicknessMap:q,gradientMap:$,opaque:M.transparent===!1&&M.blending===Os&&M.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:He,combine:M.combine,mapUv:B&&g(M.map.channel),aoMapUv:Te&&g(M.aoMap.channel),lightMapUv:_e&&g(M.lightMap.channel),bumpMapUv:Ne&&g(M.bumpMap.channel),normalMapUv:Pe&&g(M.normalMap.channel),displacementMapUv:k&&g(M.displacementMap.channel),emissiveMapUv:nt&&g(M.emissiveMap.channel),metalnessMapUv:P&&g(M.metalnessMap.channel),roughnessMapUv:b&&g(M.roughnessMap.channel),anisotropyMapUv:ie&&g(M.anisotropyMap.channel),clearcoatMapUv:De&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(M.sheenRoughnessMap.channel),specularMapUv:Ge&&g(M.specularMap.channel),specularColorMapUv:mt&&g(M.specularColorMap.channel),specularIntensityMapUv:Ue&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:q&&g(M.thicknessMap.channel),alphaMapUv:oe&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pe||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(B||oe),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,useLegacyLights:s._useLegacyLights,decodeVideoTexture:B&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=u.has(1),vt.vertexUv2s=u.has(2),vt.vertexUv3s=u.has(3),u.clear(),vt}function l(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function y(M){const S=v[M.type];let I;if(S){const D=ci[S];I=xv.clone(D.uniforms)}else I=M.uniforms;return I}function w(M,S){let I;for(let D=0,L=h.length;D<L;D++){const z=h[D];if(z.cacheKey===S){I=z,++I.usedTimes;break}}return I===void 0&&(I=new LM(s,S,M,r),h.push(I)),I}function E(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:l,getUniforms:y,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function UM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function FM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,p,v,g,m){let l=s[e];return l===void 0?(l={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},s[e]=l):(l.id=f.id,l.object=f,l.geometry=d,l.material=p,l.groupOrder=v,l.renderOrder=f.renderOrder,l.z=g,l.group=m),e++,l}function a(f,d,p,v,g,m){const l=o(f,d,p,v,g,m);p.transmission>0?n.push(l):p.transparent===!0?i.push(l):t.push(l)}function c(f,d,p,v,g,m){const l=o(f,d,p,v,g,m);p.transmission>0?n.unshift(l):p.transparent===!0?i.unshift(l):t.unshift(l)}function u(f,d){t.length>1&&t.sort(f||FM),n.length>1&&n.sort(d||hd),i.length>1&&i.sort(d||hd)}function h(){for(let f=e,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:u}}function BM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new fd,s.set(n,[o])):i>=r.length?(o=new fd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HM=0;function VM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GM(s){const e=new kM,t=zM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const i=new U,r=new Ye,o=new Ye;function a(u,h){let f=0,d=0,p=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,g=0,m=0,l=0,_=0,x=0,y=0,w=0,E=0,T=0,C=0;u.sort(VM);const M=h===!0?Math.PI:1;for(let I=0,D=u.length;I<D;I++){const L=u[I],z=L.color,X=L.intensity,j=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=z.r*X*M,d+=z.g*X*M,p+=z.b*X*M;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],X);C++}else if(L.isDirectionalLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const J=L.shadow,R=t.get(L);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,n.directionalShadow[v]=R,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=L.shadow.matrix,x++}n.directional[v]=F,v++}else if(L.isSpotLight){const F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(z).multiplyScalar(X*M),F.distance=j,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[m]=F;const J=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,J.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[m]=J.matrix,L.castShadow){const R=t.get(L);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,n.spotShadow[m]=R,n.spotShadowMap[m]=K,w++}m++}else if(L.isRectAreaLight){const F=e.get(L);F.color.copy(z).multiplyScalar(X),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[l]=F,l++}else if(L.isPointLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*M),F.distance=L.distance,F.decay=L.decay,L.castShadow){const J=L.shadow,R=t.get(L);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,R.shadowCameraNear=J.camera.near,R.shadowCameraFar=J.camera.far,n.pointShadow[g]=R,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=F,g++}else if(L.isHemisphereLight){const F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(X*M),F.groundColor.copy(L.groundColor).multiplyScalar(X*M),n.hemi[_]=F,_++}}l>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=p;const S=n.hash;(S.directionalLength!==v||S.pointLength!==g||S.spotLength!==m||S.rectAreaLength!==l||S.hemiLength!==_||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==w||S.numSpotMaps!==E||S.numLightProbes!==C)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=l,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,S.directionalLength=v,S.pointLength=g,S.spotLength=m,S.rectAreaLength=l,S.hemiLength=_,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=w,S.numSpotMaps=E,S.numLightProbes=C,n.version=HM++)}function c(u,h){let f=0,d=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let l=0,_=u.length;l<_;l++){const x=u[l];if(x.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function dd(s){const e=new GM(s),t=[],n=[];function i(h){u.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function WM(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new dd(s),e.set(i,[a])):r>=o.length?(a=new dd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class XM extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KM(s,e,t){let n=new $u;const i=new tt,r=new tt,o=new _t,a=new XM({depthPacking:R0}),c=new YM,u={},h=t.maxTextureSize,f={[Vi]:Cn,[Cn]:Vi,[hi]:hi},d=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:qM,fragmentShader:jM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Mi;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hm;let l=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(hr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=l!==Li&&this.type===Li,z=l===Li&&this.type!==Li;for(let X=0,j=E.length;X<j;X++){const K=E[X],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const J=F.getFrameExtents();if(i.multiply(J),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,F.mapSize.y=r.y)),F.map===null||L===!0||z===!0){const ae=this.type!==Li?{minFilter:yn,magFilter:yn}:{};F.map!==null&&F.map.dispose(),F.map=new Qr(i.x,i.y,ae),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const R=F.getViewportCount();for(let ae=0;ae<R;ae++){const Le=F.getViewport(ae);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),D.viewport(o),F.updateMatrices(K,ae),n=F.getFrustum(),y(T,C,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===Li&&_(F,C),F.needsUpdate=!1}l=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,I)};function _(E,T){const C=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qr(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,C,p,g,null)}function x(E,T,C,M){let S=null;const I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=S.uuid,L=T.uuid;let z=u[D];z===void 0&&(z={},u[D]=z);let X=z[L];X===void 0&&(X=S.clone(),z[L]=X,T.addEventListener("dispose",w)),S=X}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Li?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=s.properties.get(S);D.light=C}return S}function y(E,T,C,M,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const L=e.update(E),z=E.material;if(Array.isArray(z)){const X=L.groups;for(let j=0,K=X.length;j<K;j++){const F=X[j],J=z[F.materialIndex];if(J&&J.visible){const R=x(E,J,M,S);E.onBeforeShadow(s,E,T,C,L,R,F),s.renderBufferDirect(C,null,L,R,E,F),E.onAfterShadow(s,E,T,C,L,R,F)}}}else if(z.visible){const X=x(E,z,M,S);E.onBeforeShadow(s,E,T,C,L,X,null),s.renderBufferDirect(C,null,L,X,E,null),E.onAfterShadow(s,E,T,C,L,X,null)}}const D=E.children;for(let L=0,z=D.length;L<z;L++)y(D[L],T,C,M,S)}function w(E){E.target.removeEventListener("dispose",w);for(const C in u){const M=u[C],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function $M(s){function e(){let N=!1;const q=new _t;let $=null;const oe=new _t(0,0,0,0);return{setMask:function(ce){$!==ce&&!N&&(s.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){N=ce},setClear:function(ce,He,lt,ft,vt){vt===!0&&(ce*=ft,He*=ft,lt*=ft),q.set(ce,He,lt,ft),oe.equals(q)===!1&&(s.clearColor(ce,He,lt,ft),oe.copy(q))},reset:function(){N=!1,$=null,oe.set(-1,0,0,0)}}}function t(){let N=!1,q=null,$=null,oe=null;return{setTest:function(ce){ce?fe(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(ce){q!==ce&&!N&&(s.depthMask(ce),q=ce)},setFunc:function(ce){if($!==ce){switch(ce){case e0:s.depthFunc(s.NEVER);break;case t0:s.depthFunc(s.ALWAYS);break;case n0:s.depthFunc(s.LESS);break;case _l:s.depthFunc(s.LEQUAL);break;case i0:s.depthFunc(s.EQUAL);break;case r0:s.depthFunc(s.GEQUAL);break;case s0:s.depthFunc(s.GREATER);break;case o0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ce}},setLocked:function(ce){N=ce},setClear:function(ce){oe!==ce&&(s.clearDepth(ce),oe=ce)},reset:function(){N=!1,q=null,$=null,oe=null}}}function n(){let N=!1,q=null,$=null,oe=null,ce=null,He=null,lt=null,ft=null,vt=null;return{setTest:function(it){N||(it?fe(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(it){q!==it&&!N&&(s.stencilMask(it),q=it)},setFunc:function(it,Ce,xe){($!==it||oe!==Ce||ce!==xe)&&(s.stencilFunc(it,Ce,xe),$=it,oe=Ce,ce=xe)},setOp:function(it,Ce,xe){(He!==it||lt!==Ce||ft!==xe)&&(s.stencilOp(it,Ce,xe),He=it,lt=Ce,ft=xe)},setLocked:function(it){N=it},setClear:function(it){vt!==it&&(s.clearStencil(it),vt=it)},reset:function(){N=!1,q=null,$=null,oe=null,ce=null,He=null,lt=null,ft=null,vt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,l=null,_=null,x=null,y=null,w=null,E=new Ve(0,0,0),T=0,C=!1,M=null,S=null,I=null,D=null,L=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=j>=2);let F=null,J={};const R=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Le=new _t().fromArray(R),$e=new _t().fromArray(ae);function Y(N,q,$,oe){const ce=new Uint8Array(4),He=s.createTexture();s.bindTexture(N,He),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<$;lt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(q,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(q+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return He}const ee={};ee[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(s.DEPTH_TEST),r.setFunc(_l),Ne(!1),Pe(Gh),fe(s.CULL_FACE),Te(hr);function fe(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function ne(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Ie(N,q){return h[N]!==q?(s.bindFramebuffer(N,q),h[N]=q,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=q),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=q),!0):!1}function Re(N,q){let $=d,oe=!1;if(N){$=f.get(q),$===void 0&&($=[],f.set(q,$));const ce=N.textures;if($.length!==ce.length||$[0]!==s.COLOR_ATTACHMENT0){for(let He=0,lt=ce.length;He<lt;He++)$[He]=s.COLOR_ATTACHMENT0+He;$.length=ce.length,oe=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,oe=!0);oe&&s.drawBuffers($)}function B(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const We={[Or]:s.FUNC_ADD,[F_]:s.FUNC_SUBTRACT,[B_]:s.FUNC_REVERSE_SUBTRACT};We[k_]=s.MIN,We[z_]=s.MAX;const Me={[H_]:s.ZERO,[V_]:s.ONE,[G_]:s.SRC_COLOR,[uu]:s.SRC_ALPHA,[K_]:s.SRC_ALPHA_SATURATE,[q_]:s.DST_COLOR,[X_]:s.DST_ALPHA,[W_]:s.ONE_MINUS_SRC_COLOR,[hu]:s.ONE_MINUS_SRC_ALPHA,[j_]:s.ONE_MINUS_DST_COLOR,[Y_]:s.ONE_MINUS_DST_ALPHA,[$_]:s.CONSTANT_COLOR,[Z_]:s.ONE_MINUS_CONSTANT_COLOR,[J_]:s.CONSTANT_ALPHA,[Q_]:s.ONE_MINUS_CONSTANT_ALPHA};function Te(N,q,$,oe,ce,He,lt,ft,vt,it){if(N===hr){v===!0&&(ne(s.BLEND),v=!1);return}if(v===!1&&(fe(s.BLEND),v=!0),N!==U_){if(N!==g||it!==C){if((m!==Or||x!==Or)&&(s.blendEquation(s.FUNC_ADD),m=Or,x=Or),it)switch(N){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wh:s.blendFunc(s.ONE,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}l=null,_=null,y=null,w=null,E.set(0,0,0),T=0,g=N,C=it}return}ce=ce||q,He=He||$,lt=lt||oe,(q!==m||ce!==x)&&(s.blendEquationSeparate(We[q],We[ce]),m=q,x=ce),($!==l||oe!==_||He!==y||lt!==w)&&(s.blendFuncSeparate(Me[$],Me[oe],Me[He],Me[lt]),l=$,_=oe,y=He,w=lt),(ft.equals(E)===!1||vt!==T)&&(s.blendColor(ft.r,ft.g,ft.b,vt),E.copy(ft),T=vt),g=N,C=!1}function _e(N,q){N.side===hi?ne(s.CULL_FACE):fe(s.CULL_FACE);let $=N.side===Cn;q&&($=!$),Ne($),N.blending===Os&&N.transparent===!1?Te(hr):Te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),i.setMask(N.colorWrite);const oe=N.stencilWrite;o.setTest(oe),oe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function Pe(N){N!==D_?(fe(s.CULL_FACE),N!==S&&(N===Gh?s.cullFace(s.BACK):N===N_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),S=N}function k(N){N!==I&&(X&&s.lineWidth(N),I=N)}function nt(N,q,$){N?(fe(s.POLYGON_OFFSET_FILL),(D!==q||L!==$)&&(s.polygonOffset(q,$),D=q,L=$)):ne(s.POLYGON_OFFSET_FILL)}function P(N){N?fe(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function b(N){N===void 0&&(N=s.TEXTURE0+z-1),F!==N&&(s.activeTexture(N),F=N)}function W(N,q,$){$===void 0&&(F===null?$=s.TEXTURE0+z-1:$=F);let oe=J[$];oe===void 0&&(oe={type:void 0,texture:void 0},J[$]=oe),(oe.type!==N||oe.texture!==q)&&(F!==$&&(s.activeTexture($),F=$),s.bindTexture(N,q||ee[N]),oe.type=N,oe.texture=q)}function Z(){const N=J[F];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){Le.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function Oe(N){$e.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),$e.copy(N))}function Ge(N,q){let $=c.get(q);$===void 0&&($=new WeakMap,c.set(q,$));let oe=$.get(N);oe===void 0&&(oe=s.getUniformBlockIndex(q,N.name),$.set(N,oe))}function mt(N,q){const oe=c.get(q).get(N);a.get(q)!==oe&&(s.uniformBlockBinding(q,oe,N.__bindingPointIndex),a.set(q,oe))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},F=null,J={},h={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,l=null,_=null,x=null,y=null,w=null,E=new Ve(0,0,0),T=0,C=!1,M=null,S=null,I=null,D=null,L=null,Le.set(0,0,s.canvas.width,s.canvas.height),$e.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:fe,disable:ne,bindFramebuffer:Ie,drawBuffers:Re,useProgram:B,setBlending:Te,setMaterial:_e,setFlipSided:Ne,setCullFace:Pe,setLineWidth:k,setPolygonOffset:nt,setScissorTest:P,activeTexture:b,bindTexture:W,unbindTexture:Z,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:Ke,texImage3D:ge,updateUBOMapping:Ge,uniformBlockBinding:mt,texStorage2D:re,texStorage3D:Se,texSubImage2D:me,texSubImage3D:le,compressedTexSubImage2D:ie,compressedTexSubImage3D:De,scissor:ve,viewport:Oe,reset:Ue}}function ZM(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,b){return p?new OffscreenCanvas(P,b):ea("canvas")}function g(P,b,W){let Z=1;const Q=nt(P);if((Q.width>W||Q.height>W)&&(Z=W/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(Z*Q.width),me=Math.floor(Z*Q.height);f===void 0&&(f=v(te,me));const le=b?v(te,me):f;return le.width=te,le.height=me,le.getContext("2d").drawImage(P,0,0,te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+me+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==yn&&P.minFilter!==Fn}function l(P){s.generateMipmap(P)}function _(P,b,W,Z,Q=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=b;if(b===s.RED&&(W===s.FLOAT&&(te=s.R32F),W===s.HALF_FLOAT&&(te=s.R16F),W===s.UNSIGNED_BYTE&&(te=s.R8)),b===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.R8UI),W===s.UNSIGNED_SHORT&&(te=s.R16UI),W===s.UNSIGNED_INT&&(te=s.R32UI),W===s.BYTE&&(te=s.R8I),W===s.SHORT&&(te=s.R16I),W===s.INT&&(te=s.R32I)),b===s.RG&&(W===s.FLOAT&&(te=s.RG32F),W===s.HALF_FLOAT&&(te=s.RG16F),W===s.UNSIGNED_BYTE&&(te=s.RG8)),b===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RG8UI),W===s.UNSIGNED_SHORT&&(te=s.RG16UI),W===s.UNSIGNED_INT&&(te=s.RG32UI),W===s.BYTE&&(te=s.RG8I),W===s.SHORT&&(te=s.RG16I),W===s.INT&&(te=s.RG32I)),b===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),b===s.RGBA){const me=Q?xl:ht.getTransfer(Z);W===s.FLOAT&&(te=s.RGBA32F),W===s.HALF_FLOAT&&(te=s.RGBA16F),W===s.UNSIGNED_BYTE&&(te=me===St?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function y(P){const b=P.target;b.removeEventListener("dispose",y),E(b),b.isVideoTexture&&h.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),C(b)}function E(P){const b=n.get(P);if(b.__webglInit===void 0)return;const W=P.source,Z=d.get(W);if(Z){const Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(P),Object.keys(Z).length===0&&d.delete(W)}n.remove(P)}function T(P){const b=n.get(P);s.deleteTexture(b.__webglTexture);const W=P.source,Z=d.get(W);delete Z[b.__cacheKey],o.memory.textures--}function C(P){const b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let Q=0;Q<b.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=P.textures;for(let Z=0,Q=W.length;Z<Q;Z++){const te=n.get(W[Z]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(W[Z])}n.remove(P)}let M=0;function S(){M=0}function I(){const P=M;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),M+=1,P}function D(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function L(P,b){const W=n.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,P,b);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+b)}function z(P,b){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Le(W,P,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+b)}function X(P,b){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Le(W,P,b);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+b)}function j(P,b){const W=n.get(P);if(P.version>0&&W.__version!==P.version){$e(W,P,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+b)}const K={[qs]:s.REPEAT,[or]:s.CLAMP_TO_EDGE,[vl]:s.MIRRORED_REPEAT},F={[yn]:s.NEAREST,[pm]:s.NEAREST_MIPMAP_NEAREST,[Ao]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[il]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},J={[L0]:s.NEVER,[F0]:s.ALWAYS,[I0]:s.LESS,[bm]:s.LEQUAL,[D0]:s.EQUAL,[U0]:s.GEQUAL,[N0]:s.GREATER,[O0]:s.NOTEQUAL};function R(P,b){if(b.type===mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===il||b.magFilter===Ao||b.magFilter===Ui||b.minFilter===Fn||b.minFilter===il||b.minFilter===Ao||b.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,K[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,K[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,K[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,F[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,F[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yn||b.minFilter!==Ao&&b.minFilter!==Ui||b.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",y));const Z=b.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const te=D(b);if(te!==P.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[te].usedTimes++;const me=Q[P.__cacheKey];me!==void 0&&(Q[P.__cacheKey].usedTimes--,me.usedTimes===0&&T(b)),P.__cacheKey=te,P.__webglTexture=Q[te].texture}return W}function Le(P,b,W){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=ae(P,b),te=b.source;t.bindTexture(Z,P.__webglTexture,s.TEXTURE0+W);const me=n.get(te);if(te.version!==me.__version||Q===!0){t.activeTexture(s.TEXTURE0+W);const le=ht.getPrimaries(ht.workingColorSpace),ie=b.colorSpace===er?null:ht.getPrimaries(b.colorSpace),De=b.colorSpace===er||le===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=g(b.image,!1,i.maxTextureSize);re=k(b,re);const Se=r.convert(b.format,b.colorSpace),Ke=r.convert(b.type);let ge=_(b.internalFormat,Se,Ke,b.colorSpace,b.isVideoTexture);R(Z,b);let ve;const Oe=b.mipmaps,Ge=b.isVideoTexture!==!0,mt=me.__version===void 0||Q===!0,Ue=te.dataReady,N=x(b,re);if(b.isDepthTexture)ge=s.DEPTH_COMPONENT16,b.type===mi?ge=s.DEPTH_COMPONENT32F:b.type===js?ge=s.DEPTH_COMPONENT24:b.type===na&&(ge=s.DEPTH24_STENCIL8),mt&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,ge,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,ge,re.width,re.height,0,Se,Ke,null));else if(b.isDataTexture)if(Oe.length>0){Ge&&mt&&t.texStorage2D(s.TEXTURE_2D,N,ge,Oe[0].width,Oe[0].height);for(let q=0,$=Oe.length;q<$;q++)ve=Oe[q],Ge?Ue&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ve.width,ve.height,Se,Ke,ve.data):t.texImage2D(s.TEXTURE_2D,q,ge,ve.width,ve.height,0,Se,Ke,ve.data);b.generateMipmaps=!1}else Ge?(mt&&t.texStorage2D(s.TEXTURE_2D,N,ge,re.width,re.height),Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Se,Ke,re.data)):t.texImage2D(s.TEXTURE_2D,0,ge,re.width,re.height,0,Se,Ke,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,N,ge,Oe[0].width,Oe[0].height,re.depth);for(let q=0,$=Oe.length;q<$;q++)ve=Oe[q],b.format!==ri?Se!==null?Ge?Ue&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,Se,ve.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ge,ve.width,ve.height,re.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,re.depth,Se,Ke,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ge,ve.width,ve.height,re.depth,0,Se,Ke,ve.data)}else{Ge&&mt&&t.texStorage2D(s.TEXTURE_2D,N,ge,Oe[0].width,Oe[0].height);for(let q=0,$=Oe.length;q<$;q++)ve=Oe[q],b.format!==ri?Se!==null?Ge?Ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Ue&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ve.width,ve.height,Se,Ke,ve.data):t.texImage2D(s.TEXTURE_2D,q,ge,ve.width,ve.height,0,Se,Ke,ve.data)}else if(b.isDataArrayTexture)Ge?(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,N,ge,re.width,re.height,re.depth),Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Ke,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,re.width,re.height,re.depth,0,Se,Ke,re.data);else if(b.isData3DTexture)Ge?(mt&&t.texStorage3D(s.TEXTURE_3D,N,ge,re.width,re.height,re.depth),Ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Ke,re.data)):t.texImage3D(s.TEXTURE_3D,0,ge,re.width,re.height,re.depth,0,Se,Ke,re.data);else if(b.isFramebufferTexture){if(mt)if(Ge)t.texStorage2D(s.TEXTURE_2D,N,ge,re.width,re.height);else{let q=re.width,$=re.height;for(let oe=0;oe<N;oe++)t.texImage2D(s.TEXTURE_2D,oe,ge,q,$,0,Se,Ke,null),q>>=1,$>>=1}}else if(Oe.length>0){if(Ge&&mt){const q=nt(Oe[0]);t.texStorage2D(s.TEXTURE_2D,N,ge,q.width,q.height)}for(let q=0,$=Oe.length;q<$;q++)ve=Oe[q],Ge?Ue&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Se,Ke,ve):t.texImage2D(s.TEXTURE_2D,q,ge,Se,Ke,ve);b.generateMipmaps=!1}else if(Ge){if(mt){const q=nt(re);t.texStorage2D(s.TEXTURE_2D,N,ge,q.width,q.height)}Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Ke,re)}else t.texImage2D(s.TEXTURE_2D,0,ge,Se,Ke,re);m(b)&&l(Z),me.__version=te.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function $e(P,b,W){if(b.image.length!==6)return;const Z=ae(P,b),Q=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+W);const te=n.get(Q);if(Q.version!==te.__version||Z===!0){t.activeTexture(s.TEXTURE0+W);const me=ht.getPrimaries(ht.workingColorSpace),le=b.colorSpace===er?null:ht.getPrimaries(b.colorSpace),ie=b.colorSpace===er||me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let $=0;$<6;$++)!De&&!re?Se[$]=g(b.image[$],!0,i.maxCubemapSize):Se[$]=re?b.image[$].image:b.image[$],Se[$]=k(b,Se[$]);const Ke=Se[0],ge=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),Oe=_(b.internalFormat,ge,ve,b.colorSpace),Ge=b.isVideoTexture!==!0,mt=te.__version===void 0||Z===!0,Ue=Q.dataReady;let N=x(b,Ke);R(s.TEXTURE_CUBE_MAP,b);let q;if(De){Ge&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,N,Oe,Ke.width,Ke.height);for(let $=0;$<6;$++){q=Se[$].mipmaps;for(let oe=0;oe<q.length;oe++){const ce=q[oe];b.format!==ri?ge!==null?Ge?Ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,ce.width,ce.height,ge,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Oe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,ce.width,ce.height,ge,ve,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Oe,ce.width,ce.height,0,ge,ve,ce.data)}}}else{if(q=b.mipmaps,Ge&&mt){q.length>0&&N++;const $=nt(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,N,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(re){Ge?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se[$].width,Se[$].height,ge,ve,Se[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Se[$].width,Se[$].height,0,ge,ve,Se[$].data);for(let oe=0;oe<q.length;oe++){const He=q[oe].image[$].image;Ge?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,He.width,He.height,ge,ve,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Oe,He.width,He.height,0,ge,ve,He.data)}}else{Ge?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge,ve,Se[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ge,ve,Se[$]);for(let oe=0;oe<q.length;oe++){const ce=q[oe];Ge?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,ge,ve,ce.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Oe,ge,ve,ce.image[$])}}}m(b)&&l(s.TEXTURE_CUBE_MAP),te.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Y(P,b,W,Z,Q,te){const me=r.convert(W.format,W.colorSpace),le=r.convert(W.type),ie=_(W.internalFormat,me,le,W.colorSpace);if(!n.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>te),Se=Math.max(1,b.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ie,re,Se,b.depth,0,me,le,null):t.texImage2D(Q,te,ie,re,Se,0,me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ne(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,n.get(W).__webglTexture,0,_e(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,n.get(W).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,b,W){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let Z=s.DEPTH_COMPONENT24;if(W||Ne(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===mi?Z=s.DEPTH_COMPONENT32F:Q.type===js&&(Z=s.DEPTH_COMPONENT24));const te=_e(b);Ne(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,Z,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Z,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const Z=_e(b);W&&Ne(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,b.width,b.height):Ne(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const Z=b.textures;for(let Q=0;Q<Z.length;Q++){const te=Z[Q],me=r.convert(te.format,te.colorSpace),le=r.convert(te.type),ie=_(te.internalFormat,me,le,te.colorSpace),De=_e(b);W&&Ne(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ie,b.width,b.height):Ne(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ie,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);const Z=n.get(b.depthTexture).__webglTexture,Q=_e(b);if(b.depthTexture.format===Us)Ne(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Jo)Ne(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ne(P){const b=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");fe(b.__webglFramebuffer,P)}else if(W){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=s.createRenderbuffer(),ee(b.__webglDepthbuffer[Z],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),ee(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(P,b,W){const Z=n.get(P);b!==void 0&&Y(Z.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ne(P)}function Re(P){const b=P.texture,W=n.get(P),Z=n.get(b);P.addEventListener("dispose",w);const Q=P.textures,te=P.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let ie=0;ie<b.mipmaps.length;ie++)W.__webglFramebuffer[le][ie]=s.createFramebuffer()}else W.__webglFramebuffer[le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)W.__webglFramebuffer[le]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(me)for(let le=0,ie=Q.length;le<ie;le++){const De=n.get(Q[le]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Ne(P)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const ie=Q[le];W.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const De=r.convert(ie.format,ie.colorSpace),re=r.convert(ie.type),Se=_(ie.internalFormat,De,re,ie.colorSpace,P.isXRRenderTarget===!0),Ke=_e(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Se,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,W.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),R(s.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Y(W.__webglFramebuffer[le][ie],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,ie);else Y(W.__webglFramebuffer[le],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&l(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let le=0,ie=Q.length;le<ie;le++){const De=Q[le],re=n.get(De);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),R(s.TEXTURE_2D,De),Y(W.__webglFramebuffer,P,De,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),m(De)&&l(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),R(le,b),b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Y(W.__webglFramebuffer[ie],P,b,s.COLOR_ATTACHMENT0,le,ie);else Y(W.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,le,0);m(b)&&l(le),t.unbindTexture()}P.depthBuffer&&ne(P)}function B(P){const b=P.textures;for(let W=0,Z=b.length;W<Z;W++){const Q=b[W];if(m(Q)){const te=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(Q).__webglTexture;t.bindTexture(te,me),l(te),t.unbindTexture()}}}const We=[],Me=[];function Te(P){if(P.samples>0){if(Ne(P)===!1){const b=P.textures,W=P.width,Z=P.height;let Q=s.COLOR_BUFFER_BIT;const te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(P),le=b.length>1;if(le)for(let ie=0;ie<b.length;ie++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ie=0;ie<b.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);const De=n.get(b[ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,De,0)}s.blitFramebuffer(0,0,W,Z,0,0,W,Z,Q,s.NEAREST),c===!0&&(We.length=0,Me.length=0,We.push(s.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(We.push(te),Me.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let ie=0;ie<b.length;ie++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,me.__webglColorRenderbuffer[ie]);const De=n.get(b[ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function _e(P){return Math.min(i.maxSamples,P.samples)}function Ne(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pe(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function k(P,b){const W=P.colorSpace,Z=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==$t&&W!==er&&(ht.getTransfer(W)===St?(Z!==ri||Q!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Ie,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ne}function JM(s,e){function t(n,i=er){let r;const o=ht.getTransfer(i);if(n===gr)return s.UNSIGNED_BYTE;if(n===_m)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vm)return s.UNSIGNED_SHORT_5_5_5_1;if(n===x0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_0)return s.BYTE;if(n===v0)return s.SHORT;if(n===mm)return s.UNSIGNED_SHORT;if(n===gm)return s.INT;if(n===js)return s.UNSIGNED_INT;if(n===mi)return s.FLOAT;if(n===Pl)return s.HALF_FLOAT;if(n===y0)return s.ALPHA;if(n===S0)return s.RGB;if(n===ri)return s.RGBA;if(n===M0)return s.LUMINANCE;if(n===T0)return s.LUMINANCE_ALPHA;if(n===Us)return s.DEPTH_COMPONENT;if(n===Jo)return s.DEPTH_STENCIL;if(n===xm)return s.RED;if(n===ym)return s.RED_INTEGER;if(n===E0)return s.RG;if(n===Sm)return s.RG_INTEGER;if(n===Mm)return s.RGBA_INTEGER;if(n===ec||n===tc||n===nc||n===ic)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ec)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jh||n===Kh||n===$h||n===Zh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jh||n===Qh||n===ef)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jh||n===Qh)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ef)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tf||n===nf||n===rf||n===sf||n===of||n===af||n===lf||n===cf||n===uf||n===hf||n===ff||n===df||n===pf||n===mf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===of)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===af)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ff)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===df)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===gf||n===_f)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_f)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===b0||n===vf||n===xf||n===yf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===na?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class QM extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eT={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),l=this._getHandJoint(u,g);m!==null&&(l.matrix.fromArray(m.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=m.radius),l.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new _r({vertexShader:tT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new Il(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class rT extends eo{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,v=null;const g=new iT,m=t.getContextAttributes();let l=null,_=null;const x=[],y=[],w=new tt;let E=null;const T=new Tn;T.layers.enable(1),T.viewport=new _t;const C=new Tn;C.layers.enable(2),C.viewport=new _t;const M=[T,C],S=new QM;S.layers.enable(1),S.layers.enable(2);let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=x[Y];return ee===void 0&&(ee=new Pc,x[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=x[Y];return ee===void 0&&(ee=new Pc,x[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=x[Y];return ee===void 0&&(ee=new Pc,x[Y]=ee),ee.getHandSpace()};function L(Y){const ee=y.indexOf(Y.inputSource);if(ee===-1)return;const fe=x[ee];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,u||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const ee=y[Y];ee!==null&&(y[Y]=null,x[Y].disconnect(ee))}I=null,D=null,g.reset(),e.setRenderTarget(l),p=null,d=null,f=null,i=null,_=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(l=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Qr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,fe=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Jo:Us,fe=m.stencil?na:js);const Ie={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Qr(d.textureWidth,d.textureHeight,{format:ri,type:gr,depthTexture:new Fm(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(Y){for(let ee=0;ee<Y.removed.length;ee++){const fe=Y.removed[ee],ne=y.indexOf(fe);ne>=0&&(y[ne]=null,x[ne].disconnect(fe))}for(let ee=0;ee<Y.added.length;ee++){const fe=Y.added[ee];let ne=y.indexOf(fe);if(ne===-1){for(let Re=0;Re<x.length;Re++)if(Re>=y.length){y.push(fe),ne=Re;break}else if(y[Re]===null){y[Re]=fe,ne=Re;break}if(ne===-1)break}const Ie=x[ne];Ie&&Ie.connect(fe)}}const j=new U,K=new U;function F(Y,ee,fe){j.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const ne=j.distanceTo(K),Ie=ee.projectionMatrix.elements,Re=fe.projectionMatrix.elements,B=Ie[14]/(Ie[10]-1),We=Ie[14]/(Ie[10]+1),Me=(Ie[9]+1)/Ie[5],Te=(Ie[9]-1)/Ie[5],_e=(Ie[8]-1)/Ie[0],Ne=(Re[8]+1)/Re[0],Pe=B*_e,k=B*Ne,nt=ne/(-_e+Ne),P=nt*-_e;ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(P),Y.translateZ(nt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=B+nt,W=We+nt,Z=Pe-P,Q=k+(ne-P),te=Me*We/W*b,me=Te*We/W*b;Y.projectionMatrix.makePerspective(Z,Q,te,me,b,W),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),S.near=C.near=T.near=Y.near,S.far=C.far=T.far=Y.far,(I!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,D=S.far,T.near=I,T.far=D,C.near=I,C.far=D,T.updateProjectionMatrix(),C.updateProjectionMatrix(),Y.updateProjectionMatrix());const ee=Y.parent,fe=S.cameras;J(S,ee);for(let ne=0;ne<fe.length;ne++)J(fe[ne],ee);fe.length===2?F(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),R(Y,S,ee)};function R(Y,ee,fe){fe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null};let ae=null;function Le(Y,ee){if(h=ee.getViewerPose(u||o),v=ee,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ne=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ne=!0);for(let Re=0;Re<fe.length;Re++){const B=fe[Re];let We=null;if(p!==null)We=p.getViewport(B);else{const Te=f.getViewSubImage(d,B);We=Te.viewport,Re===0&&(e.setRenderTargetTextures(_,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(_))}let Me=M[Re];Me===void 0&&(Me=new Tn,Me.layers.enable(Re),Me.viewport=new _t,M[Re]=Me),Me.matrix.fromArray(B.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(B.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(We.x,We.y,We.width,We.height),Re===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ne===!0&&S.cameras.push(Me)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Re=f.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,i.renderState)}}for(let fe=0;fe<x.length;fe++){const ne=y[fe],Ie=x[fe];ne!==null&&Ie!==void 0&&Ie.update(ne,ee,u||o)}g.render(e,S),ae&&ae(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const $e=new Um;$e.setAnimationLoop(Le),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}}const Cr=new yi,sT=new Ye;function oT(s,e){function t(m,l){m.matrixAutoUpdate===!0&&m.updateMatrix(),l.value.copy(m.matrix)}function n(m,l){l.color.getRGB(m.fogColor.value,Dm(s)),l.isFog?(m.fogNear.value=l.near,m.fogFar.value=l.far):l.isFogExp2&&(m.fogDensity.value=l.density)}function i(m,l,_,x,y){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(m,l):l.isMeshToonMaterial?(r(m,l),f(m,l)):l.isMeshPhongMaterial?(r(m,l),h(m,l)):l.isMeshStandardMaterial?(r(m,l),d(m,l),l.isMeshPhysicalMaterial&&p(m,l,y)):l.isMeshMatcapMaterial?(r(m,l),v(m,l)):l.isMeshDepthMaterial?r(m,l):l.isMeshDistanceMaterial?(r(m,l),g(m,l)):l.isMeshNormalMaterial?r(m,l):l.isLineBasicMaterial?(o(m,l),l.isLineDashedMaterial&&a(m,l)):l.isPointsMaterial?c(m,l,_,x):l.isSpriteMaterial?u(m,l):l.isShadowMaterial?(m.color.value.copy(l.color),m.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(m,l){m.opacity.value=l.opacity,l.color&&m.diffuse.value.copy(l.color),l.emissive&&m.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(m.map.value=l.map,t(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.bumpMap&&(m.bumpMap.value=l.bumpMap,t(l.bumpMap,m.bumpMapTransform),m.bumpScale.value=l.bumpScale,l.side===Cn&&(m.bumpScale.value*=-1)),l.normalMap&&(m.normalMap.value=l.normalMap,t(l.normalMap,m.normalMapTransform),m.normalScale.value.copy(l.normalScale),l.side===Cn&&m.normalScale.value.negate()),l.displacementMap&&(m.displacementMap.value=l.displacementMap,t(l.displacementMap,m.displacementMapTransform),m.displacementScale.value=l.displacementScale,m.displacementBias.value=l.displacementBias),l.emissiveMap&&(m.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,m.emissiveMapTransform)),l.specularMap&&(m.specularMap.value=l.specularMap,t(l.specularMap,m.specularMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest);const _=e.get(l),x=_.envMap,y=_.envMapRotation;if(x&&(m.envMap.value=x,Cr.copy(y),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(Cr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=l.reflectivity,m.ior.value=l.ior,m.refractionRatio.value=l.refractionRatio),l.lightMap){m.lightMap.value=l.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=l.lightMapIntensity*w,t(l.lightMap,m.lightMapTransform)}l.aoMap&&(m.aoMap.value=l.aoMap,m.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,m.aoMapTransform))}function o(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,l.map&&(m.map.value=l.map,t(l.map,m.mapTransform))}function a(m,l){m.dashSize.value=l.dashSize,m.totalSize.value=l.dashSize+l.gapSize,m.scale.value=l.scale}function c(m,l,_,x){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.size.value=l.size*_,m.scale.value=x*.5,l.map&&(m.map.value=l.map,t(l.map,m.uvTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function u(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.rotation.value=l.rotation,l.map&&(m.map.value=l.map,t(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function h(m,l){m.specular.value.copy(l.specular),m.shininess.value=Math.max(l.shininess,1e-4)}function f(m,l){l.gradientMap&&(m.gradientMap.value=l.gradientMap)}function d(m,l){m.metalness.value=l.metalness,l.metalnessMap&&(m.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,m.metalnessMapTransform)),m.roughness.value=l.roughness,l.roughnessMap&&(m.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,m.roughnessMapTransform)),l.envMap&&(m.envMapIntensity.value=l.envMapIntensity)}function p(m,l,_){m.ior.value=l.ior,l.sheen>0&&(m.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),m.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(m.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,m.sheenColorMapTransform)),l.sheenRoughnessMap&&(m.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,m.sheenRoughnessMapTransform))),l.clearcoat>0&&(m.clearcoat.value=l.clearcoat,m.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(m.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,m.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(m.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Cn&&m.clearcoatNormalScale.value.negate())),l.dispersion>0&&(m.dispersion.value=l.dispersion),l.iridescence>0&&(m.iridescence.value=l.iridescence,m.iridescenceIOR.value=l.iridescenceIOR,m.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(m.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,m.iridescenceMapTransform)),l.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),l.transmission>0&&(m.transmission.value=l.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),l.transmissionMap&&(m.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,m.transmissionMapTransform)),m.thickness.value=l.thickness,l.thicknessMap&&(m.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=l.attenuationDistance,m.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(m.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(m.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=l.specularIntensity,m.specularColor.value.copy(l.specularColor),l.specularColorMap&&(m.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,m.specularColorMapTransform)),l.specularIntensityMap&&(m.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,l){l.matcap&&(m.matcap.value=l.matcap)}function g(m,l){const _=e.get(l).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aT(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function u(_,x){let y=i[_.id];y===void 0&&(v(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(_,w);const E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){const x=f();_.__bindingPointIndex=x;const y=s.createBuffer(),w=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,T=y.length;E<T;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,S=C.length;M<S;M++){const I=C[M];if(p(I,E,M,w)===!0){const D=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let X=0;X<L.length;X++){const j=L[X],K=g(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,D+z,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,x,y,w){const E=_.value,T=x+"_"+y;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:w[T]=E.clone(),!0;{const C=w[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(_){const x=_.uniforms;let y=0;const w=16;for(let T=0,C=x.length;T<C;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,I=M.length;S<I;S++){const D=M[S],L=Array.isArray(D.value)?D.value:[D.value];for(let z=0,X=L.length;z<X;z++){const j=L[z],K=g(j),F=y%w;F!==0&&w-F<K.boundary&&(y+=w-F),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=K.storage}}}const E=y%w;return E>0&&(y+=w-E),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function l(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:u,dispose:l}}class RE{constructor(e={}){const{canvas:t=tv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const l=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const x=this;let y=!1,w=0,E=0,T=null,C=-1,M=null;const S=new _t,I=new _t;let D=null;const L=new Ve(0);let z=0,X=t.width,j=t.height,K=1,F=null,J=null;const R=new _t(0,0,X,j),ae=new _t(0,0,X,j);let Le=!1;const $e=new $u;let Y=!1,ee=!1;const fe=new Ye,ne=new U,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return T===null?K:1}let B=n;function We(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yu}`),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",$,!1),B===null){const O="webgl2";if(B=We(O,A),B===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Te,_e,Ne,Pe,k,nt,P,b,W,Z,Q,te,me,le,ie,De,re,Se,Ke,ge,ve,Oe,Ge;function mt(){Me=new gS(B),Me.init(),ve=new JM(B,Me),Te=new uS(B,Me,e,ve),_e=new $M(B),Ne=new xS(B),Pe=new UM,k=new ZM(B,Me,_e,Pe,Te,ve,Ne),nt=new fS(x),P=new mS(x),b=new Av(B),Oe=new lS(B,b),W=new _S(B,b,Ne,Oe),Z=new SS(B,W,b,Ne),Se=new yS(B,Te,k),ie=new hS(Pe),Q=new OM(x,nt,P,Me,Te,Oe,ie),te=new oT(x,Pe),me=new BM,le=new WM(Me),re=new aS(x,nt,P,_e,Z,d,c),De=new KM(x,Z,Te),Ge=new aT(B,Ne,Te,_e),Ke=new cS(B,Me,Ne),ge=new vS(B,Me,Ne),Ne.programs=Q.programs,x.capabilities=Te,x.extensions=Me,x.properties=Pe,x.renderLists=me,x.shadowMap=De,x.state=_e,x.info=Ne}mt();const Ue=new rT(x,B);this.xr=Ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(X,j,!1))},this.getSize=function(A){return A.set(X,j)},this.setSize=function(A,O,H=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,j=O,t.width=Math.floor(A*K),t.height=Math.floor(O*K),H===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*K,j*K).floor()},this.setDrawingBufferSize=function(A,O,H){X=A,j=O,K=H,t.width=Math.floor(A*H),t.height=Math.floor(O*H),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,O,H,V){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,O,H,V),_e.viewport(S.copy(R).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,O,H,V){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,O,H,V),_e.scissor(I.copy(ae).multiplyScalar(K).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){_e.setScissorTest(Le=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,O=!0,H=!0){let V=0;if(A){let G=!1;if(T!==null){const se=T.texture.format;G=se===Mm||se===Sm||se===ym}if(G){const se=T.texture.type,he=se===gr||se===js||se===mm||se===na||se===_m||se===vm,pe=re.getClearColor(),we=re.getClearAlpha(),Be=pe.r,be=pe.g,Ee=pe.b;he?(p[0]=Be,p[1]=be,p[2]=Ee,p[3]=we,B.clearBufferuiv(B.COLOR,0,p)):(v[0]=Be,v[1]=be,v[2]=Ee,v[3]=we,B.clearBufferiv(B.COLOR,0,v))}else V|=B.COLOR_BUFFER_BIT}O&&(V|=B.DEPTH_BUFFER_BIT),H&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",$,!1),me.dispose(),le.dispose(),Pe.dispose(),nt.dispose(),P.dispose(),Z.dispose(),Oe.dispose(),Ge.dispose(),Q.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",it),Ue.removeEventListener("sessionend",Ce),xe.stop()};function N(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Ne.autoReset,O=De.enabled,H=De.autoUpdate,V=De.needsUpdate,G=De.type;mt(),Ne.autoReset=A,De.enabled=O,De.autoUpdate=H,De.needsUpdate=V,De.type=G}function $(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){const O=A.target;O.removeEventListener("dispose",oe),ce(O)}function ce(A){He(A),Pe.remove(A)}function He(A){const O=Pe.get(A).programs;O!==void 0&&(O.forEach(function(H){Q.releaseProgram(H)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,H,V,G,se){O===null&&(O=Ie);const he=G.isMesh&&G.matrixWorld.determinant()<0,pe=Vt(A,O,H,V,G);_e.setMaterial(V,he);let we=H.index,Be=1;if(V.wireframe===!0){if(we=W.getWireframeAttribute(H),we===void 0)return;Be=2}const be=H.drawRange,Ee=H.attributes.position;let ct=be.start*Be,Nt=(be.start+be.count)*Be;se!==null&&(ct=Math.max(ct,se.start*Be),Nt=Math.min(Nt,(se.start+se.count)*Be)),we!==null?(ct=Math.max(ct,0),Nt=Math.min(Nt,we.count)):Ee!=null&&(ct=Math.max(ct,0),Nt=Math.min(Nt,Ee.count));const Zt=Nt-ct;if(Zt<0||Zt===1/0)return;Oe.setup(G,V,pe,H,we);let ln,Xe=Ke;if(we!==null&&(ln=b.get(we),Xe=ge,Xe.setIndex(ln)),G.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*Re()),Xe.setMode(B.LINES)):Xe.setMode(B.TRIANGLES);else if(G.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),_e.setLineWidth(Fe*Re()),G.isLineSegments?Xe.setMode(B.LINES):G.isLineLoop?Xe.setMode(B.LINE_LOOP):Xe.setMode(B.LINE_STRIP)}else G.isPoints?Xe.setMode(B.POINTS):G.isSprite&&Xe.setMode(B.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?Xe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):Xe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Xe.renderInstances(ct,Zt,G.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,oi=Math.min(H.instanceCount,Fe);Xe.renderInstances(ct,Zt,oi)}else Xe.render(ct,Zt)};function lt(A,O,H){A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=Cn,A.needsUpdate=!0,wt(A,O,H),A.side=Vi,A.needsUpdate=!0,wt(A,O,H),A.side=hi):wt(A,O,H)}this.compile=function(A,O,H=null){H===null&&(H=A),m=le.get(H),m.init(O),_.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==H&&A.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);const V=new Set;return A.traverse(function(G){const se=G.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const pe=se[he];lt(pe,H,G),V.add(pe)}else lt(se,H,G),V.add(se)}),_.pop(),m=null,V},this.compileAsync=function(A,O,H=null){const V=this.compile(A,O,H);return new Promise(G=>{function se(){if(V.forEach(function(he){Pe.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){G(A);return}setTimeout(se,10)}Me.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ft=null;function vt(A){ft&&ft(A)}function it(){xe.stop()}function Ce(){xe.start()}const xe=new Um;xe.setAnimationLoop(vt),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(A){ft=A,Ue.setAnimationLoop(A),A===null?xe.stop():xe.start()},Ue.addEventListener("sessionstart",it),Ue.addEventListener("sessionend",Ce),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(O),O=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,T),m=le.get(A,_.length),m.init(O),_.push(m),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$e.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,Y=ie.init(this.clippingPlanes,ee),g=me.get(A,l.length),g.init(),l.push(g),at(A,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(F,J);const H=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1;H&&re.addToRenderList(g,A),this.info.render.frame++,Y===!0&&ie.beginShadows();const V=m.state.shadowsArray;De.render(V,A,O),Y===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,se=g.transmissive;if(m.setupLights(x._useLegacyLights),O.isArrayCamera){const he=O.cameras;if(se.length>0)for(let pe=0,we=he.length;pe<we;pe++){const Be=he[pe];ze(G,se,A,Be)}H&&re.render(A);for(let pe=0,we=he.length;pe<we;pe++){const Be=he[pe];ue(g,A,Be,Be.viewport)}}else se.length>0&&ze(G,se,A,O),H&&re.render(A),ue(g,A,O);T!==null&&(k.updateMultisampleRenderTarget(T),k.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,O),Oe.resetDefaultState(),C=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],Y===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,l.pop(),l.length>0?g=l[l.length-1]:g=null};function at(A,O,H,V){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){V&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const he=Z.update(A),pe=A.material;pe.visible&&g.push(A,he,pe,H,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const he=Z.update(A),pe=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ne.copy(he.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(pe)){const we=he.groups;for(let Be=0,be=we.length;Be<be;Be++){const Ee=we[Be],ct=pe[Ee.materialIndex];ct&&ct.visible&&g.push(A,he,ct,H,ne.z,Ee)}}else pe.visible&&g.push(A,he,pe,H,ne.z,null)}}const se=A.children;for(let he=0,pe=se.length;he<pe;he++)at(se[he],O,H,V)}function ue(A,O,H,V){const G=A.opaque,se=A.transmissive,he=A.transparent;m.setupLightsView(H),Y===!0&&ie.setGlobalState(x.clippingPlanes,H),V&&_e.viewport(S.copy(V)),G.length>0&&Ae(G,O,H),se.length>0&&Ae(se,O,H),he.length>0&&Ae(he,O,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ze(A,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Qr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Pl:gr,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const se=m.state.transmissionRenderTarget[V.id],he=V.viewport||S;se.setSize(he.z,he.w);const pe=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(L),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=fr;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),Y===!0&&ie.setGlobalState(x.clippingPlanes,V),Ae(A,H,V),k.updateMultisampleRenderTarget(se),k.updateRenderTargetMipmap(se),Me.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ee=0,ct=O.length;Ee<ct;Ee++){const Nt=O[Ee],Zt=Nt.object,ln=Nt.geometry,Xe=Nt.material,Fe=Nt.group;if(Xe.side===hi&&Zt.layers.test(V.layers)){const oi=Xe.side;Xe.side=Cn,Xe.needsUpdate=!0,ke(Zt,H,V,ln,Xe,Fe),Xe.side=oi,Xe.needsUpdate=!0,be=!0}}be===!0&&(k.updateMultisampleRenderTarget(se),k.updateRenderTargetMipmap(se))}x.setRenderTarget(pe),x.setClearColor(L,z),Be!==void 0&&(V.viewport=Be),x.toneMapping=we}function Ae(A,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,se=A.length;G<se;G++){const he=A[G],pe=he.object,we=he.geometry,Be=V===null?he.material:V,be=he.group;pe.layers.test(H.layers)&&ke(pe,O,H,we,Be,be)}}function ke(A,O,H,V,G,se){A.onBeforeRender(x,O,H,V,G,se),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(x,O,H,V,A,se),G.transparent===!0&&G.side===hi&&G.forceSinglePass===!1?(G.side=Cn,G.needsUpdate=!0,x.renderBufferDirect(H,O,V,G,A,se),G.side=Vi,G.needsUpdate=!0,x.renderBufferDirect(H,O,V,G,A,se),G.side=hi):x.renderBufferDirect(H,O,V,G,A,se),A.onAfterRender(x,O,H,V,G,se)}function wt(A,O,H){O.isScene!==!0&&(O=Ie);const V=Pe.get(A),G=m.state.lights,se=m.state.shadowsArray,he=G.state.version,pe=Q.getParameters(A,G.state,se,O,H),we=Q.getProgramCacheKey(pe);let Be=V.programs;V.environment=A.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(A.isMeshStandardMaterial?P:nt).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",oe),Be=new Map,V.programs=Be);let be=Be.get(we);if(be!==void 0){if(V.currentProgram===be&&V.lightsStateVersion===he)return Tt(A,pe),be}else pe.uniforms=Q.getUniforms(A),A.onBuild(H,pe,x),A.onBeforeCompile(pe,x),be=Q.acquireProgram(pe,we),Be.set(we,be),V.uniforms=pe.uniforms;const Ee=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Tt(A,pe),V.needsLights=xt(A),V.lightsStateVersion=he,V.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMap.value=G.state.directionalShadowMap,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotShadowMap.value=G.state.spotShadowMap,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMap.value=G.state.pointShadowMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=be,V.uniformsList=null,be}function Ze(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=rl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Tt(A,O){const H=Pe.get(A);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Vt(A,O,H,V,G){O.isScene!==!0&&(O=Ie),k.resetTextureUnits();const se=O.fog,he=V.isMeshStandardMaterial?O.environment:null,pe=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$t,we=(V.isMeshStandardMaterial?P:nt).get(V.envMap||he),Be=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,be=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!H.morphAttributes.position,ct=!!H.morphAttributes.normal,Nt=!!H.morphAttributes.color;let Zt=fr;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Zt=x.toneMapping);const ln=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xe=ln!==void 0?ln.length:0,Fe=Pe.get(V),oi=m.state.lights;if(Y===!0&&(ee===!0||A!==M)){const Vn=A===M&&V.id===C;ie.setState(V,A,Vn)}let ut=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==oi.state.version||Fe.outputColorSpace!==pe||G.isBatchedMesh&&Fe.batching===!1||!G.isBatchedMesh&&Fe.batching===!0||G.isInstancedMesh&&Fe.instancing===!1||!G.isInstancedMesh&&Fe.instancing===!0||G.isSkinnedMesh&&Fe.skinning===!1||!G.isSkinnedMesh&&Fe.skinning===!0||G.isInstancedMesh&&Fe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Fe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Fe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Fe.instancingMorph===!1&&G.morphTexture!==null||Fe.envMap!==we||V.fog===!0&&Fe.fog!==se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==be||Fe.morphTargets!==Ee||Fe.morphNormals!==ct||Fe.morphColors!==Nt||Fe.toneMapping!==Zt||Fe.morphTargetsCount!==Xe)&&(ut=!0):(ut=!0,Fe.__version=V.version);let yr=Fe.currentProgram;ut===!0&&(yr=wt(V,O,G));let oh=!1,so=!1,Ol=!1;const Jt=yr.getUniforms(),Wi=Fe.uniforms;if(_e.useProgram(yr.program)&&(oh=!0,so=!0,Ol=!0),V.id!==C&&(C=V.id,so=!0),oh||M!==A){Jt.setValue(B,"projectionMatrix",A.projectionMatrix),Jt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Vn=Jt.map.cameraPosition;Vn!==void 0&&Vn.setValue(B,ne.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&Jt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Jt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,so=!0,Ol=!0)}if(G.isSkinnedMesh){Jt.setOptional(B,G,"bindMatrix"),Jt.setOptional(B,G,"bindMatrixInverse");const Vn=G.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Jt.setValue(B,"boneTexture",Vn.boneTexture,k))}G.isBatchedMesh&&(Jt.setOptional(B,G,"batchingTexture"),Jt.setValue(B,"batchingTexture",G._matricesTexture,k));const Ul=H.morphAttributes;if((Ul.position!==void 0||Ul.normal!==void 0||Ul.color!==void 0)&&Se.update(G,H,yr),(so||Fe.receiveShadow!==G.receiveShadow)&&(Fe.receiveShadow=G.receiveShadow,Jt.setValue(B,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Wi.envMap.value=we,Wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Wi.envMapIntensity.value=O.environmentIntensity),so&&(Jt.setValue(B,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Et(Wi,Ol),se&&V.fog===!0&&te.refreshFogUniforms(Wi,se),te.refreshMaterialUniforms(Wi,V,K,j,m.state.transmissionRenderTarget[A.id]),rl.upload(B,Ze(Fe),Wi,k)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rl.upload(B,Ze(Fe),Wi,k),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Jt.setValue(B,"center",G.center),Jt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Jt.setValue(B,"normalMatrix",G.normalMatrix),Jt.setValue(B,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Vn=V.uniformsGroups;for(let Fl=0,Jm=Vn.length;Fl<Jm;Fl++){const ah=Vn[Fl];Ge.update(ah,yr),Ge.bind(ah,yr)}}return yr}function Et(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function xt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,O,H){Pe.get(A.texture).__webglTexture=O,Pe.get(A.depthTexture).__webglTexture=H;const V=Pe.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const H=Pe.get(A);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,H=0){T=A,w=O,E=H;let V=!0,G=null,se=!1,he=!1;if(A){const we=Pe.get(A);we.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),V=!1):we.__webglFramebuffer===void 0?k.setupRenderTarget(A):we.__hasExternalTextures&&k.rebindTextures(A,Pe.get(A.texture).__webglTexture,Pe.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);const be=Pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(be[O])?G=be[O][H]:G=be[O],se=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?G=Pe.get(A).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[H]:G=be,S.copy(A.viewport),I.copy(A.scissor),D=A.scissorTest}else S.copy(R).multiplyScalar(K).floor(),I.copy(ae).multiplyScalar(K).floor(),D=Le;if(_e.bindFramebuffer(B.FRAMEBUFFER,G)&&V&&_e.drawBuffers(A,G),_e.viewport(S),_e.scissor(I),_e.setScissorTest(D),se){const we=Pe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,H)}else if(he){const we=Pe.get(A.texture),Be=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,H||0,Be)}C=-1},this.readRenderTargetPixels=function(A,O,H,V,G,se,he){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){_e.bindFramebuffer(B.FRAMEBUFFER,pe);try{const we=A.texture,Be=we.format,be=we.type;if(!Te.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-V&&H>=0&&H<=A.height-G&&B.readPixels(O,H,V,G,ve.convert(Be),ve.convert(be),se)}finally{const we=T!==null?Pe.get(T).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(A,O,H=0){const V=Math.pow(2,-H),G=Math.floor(O.image.width*V),se=Math.floor(O.image.height*V);k.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,A.x,A.y,G,se),_e.unbindTexture()},this.copyTextureToTexture=function(A,O,H,V=0){const G=O.image.width,se=O.image.height,he=ve.convert(H.format),pe=ve.convert(H.type);k.setTexture2D(H,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,A.x,A.y,G,se,he,pe,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,he,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,V,A.x,A.y,he,pe,O.image),V===0&&H.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,O,H,V,G=0){const se=A.max.x-A.min.x,he=A.max.y-A.min.y,pe=A.max.z-A.min.z,we=ve.convert(V.format),Be=ve.convert(V.type);let be;if(V.isData3DTexture)k.setTexture3D(V,0),be=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)k.setTexture2DArray(V,0),be=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Ee=B.getParameter(B.UNPACK_ROW_LENGTH),ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nt=B.getParameter(B.UNPACK_SKIP_PIXELS),Zt=B.getParameter(B.UNPACK_SKIP_ROWS),ln=B.getParameter(B.UNPACK_SKIP_IMAGES),Xe=H.isCompressedTexture?H.mipmaps[G]:H.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),H.isDataTexture||H.isData3DTexture?B.texSubImage3D(be,G,O.x,O.y,O.z,se,he,pe,we,Be,Xe.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(be,G,O.x,O.y,O.z,se,he,pe,we,Xe.data):B.texSubImage3D(be,G,O.x,O.y,O.z,se,he,pe,we,Be,Xe),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ln),G===0&&V.generateMipmaps&&B.generateMipmap(be),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,_e.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qu?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Ll?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PE extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new U;class Qu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pd=new U,md=new _t,gd=new _t,cT=new U,_d=new Ye,Ha=new U,Lc=new Si,vd=new Ye,Ic=new ia;class uT extends kn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(i),e.ray.intersectsSphere(Lc)!==!1&&(vd.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(vd),!(this.boundingBox!==null&&Ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===g0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;md.fromBufferAttribute(i.attributes.skinIndex,e),gd.fromBufferAttribute(i.attributes.skinWeight,e),pd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=gd.getComponent(r);if(o!==0){const a=md.getComponent(r);_d.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cT.copy(pd).applyMatrix4(_d),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gm extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wm extends qt{constructor(e=null,t=1,n=1,i,r,o,a,c,u=yn,h=yn,f,d){super(null,o,a,c,u,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new Ye,hT=new Ye;class eh{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:hT;xd.multiplyMatrices(a,t[r]),xd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new eh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wm(t,e,e,ri,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gm),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class _u extends Sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new Ye,yd=new Ye,Va=[],Sd=new Gi,fT=new Ye,po=new kn,mo=new Si;class dT extends kn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _u(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Sd.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Sd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),mo.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ms),yd.multiplyMatrices(n,Ms),po.matrixWorld=yd,po.raycast(e,Va);for(let o=0,a=Va.length;o<a;o++){const c=Va[o];c.instanceId=r,c.object=this,t.push(c)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _u(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wm(new Float32Array(i*this.count),i,this.count,xm,mi));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xm extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new U,El=new U,Md=new Ye,go=new ia,Ga=new Si,Dc=new U,Td=new U;class th extends At{constructor(e=new Mi,t=new Xm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Tl.fromBufferAttribute(t,i-1),El.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tl.distanceTo(El);e.setAttribute("lineDistance",new ki(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Md.copy(i).invert(),go.copy(e.ray).applyMatrix4(Md);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=u){const l=h.getX(g),_=h.getX(g+1),x=Wa(this,e,go,c,l,_);x&&t.push(x)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),l=Wa(this,e,go,c,g,m);l&&t.push(l)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=u){const l=Wa(this,e,go,c,g,g+1);l&&t.push(l)}if(this.isLineLoop){const g=Wa(this,e,go,c,v-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Tl.fromBufferAttribute(o,i),El.fromBufferAttribute(o,r),t.distanceSqToSegment(Tl,El,Dc,Td)>n)return;Dc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Dc);if(!(c<e.near||c>e.far))return{distance:c,point:Td.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Ed=new U,bd=new U;class pT extends th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ed.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ed.distanceTo(bd);e.setAttribute("lineDistance",new ki(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mT extends th{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ym extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ad=new Ye,vu=new ia,Xa=new Si,Ya=new U;class gT extends At{constructor(e=new Mi,t=new Ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(i),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;Ad.copy(i).invert(),vu.copy(e.ray).applyMatrix4(Ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,g=p;v<g;v++){const m=u.getX(v);Ya.fromBufferAttribute(f,m),wd(Ya,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,g=p;v<g;v++)Ya.fromBufferAttribute(f,v),wd(Ya,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wd(s,e,t,n,i,r,o){const a=vu.distanceSqToPoint(s);if(a<t){const c=new U;vu.closestPointToPoint(s,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class nh extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Em,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends nh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function _T(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vT(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function qm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class sa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xT extends sa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sf,endingEnd:Sf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mf:r=e,a=2*t-n;break;case Tf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mf:o=e,c=2*n-t;break;case Tf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,l=-d*m+2*d*g-d*v,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,x=(-1-p)*m+(1.5+p)*g+.5*v,y=p*m-p*g;for(let w=0;w!==a;++w)r[w]=l*o[h+w]+_*o[u+w]+x*o[c+w]+y*o[f+w];return r}}class yT extends sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*f+o[c+d]*h;return r}}class ST extends sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ST(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&_T(i))for(let a=0,c=i.length;a!==c;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)c=!0;else{const f=a*n,d=f-n,p=f+n;for(let v=0;v!==n;++v){const g=t[f+v];if(g!==t[d+v]||g!==t[p+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Ks;class no extends Ei{}no.prototype.ValueTypeName="bool";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=Qo;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class jm extends Ei{}jm.prototype.ValueTypeName="color";class Js extends Ei{}Js.prototype.ValueTypeName="number";class MT extends sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)xr.slerpFlat(r,0,o,u-a,o,u,c);return r}}class es extends Ei{InterpolantFactoryMethodLinear(e){return new MT(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Ks;es.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends Ei{}io.prototype.ValueTypeName="string";io.prototype.ValueBufferType=Array;io.prototype.DefaultInterpolation=Qo;io.prototype.InterpolantFactoryMethodLinear=void 0;io.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Ei{}Qs.prototype.ValueTypeName="vector";class TT{constructor(e="",t=-1,n=[],i=A0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bT(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=vT(c);c=Cd(c,1,h),u=Cd(u,1,h),!i&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const f=h[1];let d=i[f];d||(i[f]=d=[]),d.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,p,v,g){if(p.length!==0){const m=[],l=[];qm(p,m,l,v),m.length!==0&&g.push(new f(d,m,l))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)p[d[v].morphTargets[g]]=-1;for(const g in p){const m=[],l=[];for(let _=0;_!==d[v].morphTargets.length;++_){const x=d[v];m.push(x.time),l.push(x.morphTarget===g?1:0)}i.push(new Js(".morphTargetInfluence["+g+"]",m,l))}c=p.length*o}else{const p=".bones["+t[f].name+"]";n(Qs,p+".position",d,"pos",i),n(es,p+".quaternion",d,"rot",i),n(Qs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ET(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return Qs;case"color":return jm;case"quaternion":return es;case"bool":case"boolean":return no;case"string":return io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ET(s.type);if(s.times===void 0){const t=[],n=[];qm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class AT{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],v=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const wT=new AT;class ro{constructor(e){this.manager=e!==void 0?e:wT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class CT extends Error{constructor(e,t){super(e),this.response=t}}class Km extends ro{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ar.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:i});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Pi[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let g=0;const m=new ReadableStream({start(l){_();function _(){f.read().then(({done:x,value:y})=>{if(x)l.close();else{g+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let E=0,T=h.length;E<T;E++){const C=h[E];C.onProgress&&C.onProgress(w)}l.enqueue(y),_()}})}}});return new Response(m)}else throw new CT(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{ar.add(e,u);const h=Pi[e];delete Pi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=Pi[e];if(h===void 0)throw this.manager.itemError(e),u;delete Pi[e];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RT extends ro{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ar.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ea("img");function c(){h(),ar.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(f){h(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class PT extends ro{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new RT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Nl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class LE extends Nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nc=new Ye,Rd=new U,Pd=new U;class ih{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LT extends ih{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=$s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class IT extends Nl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new LT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ld=new Ye,_o=new U,Oc=new U;class DT extends ih{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),n.position.copy(_o),Oc.copy(n.position),Oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oc),n.updateMatrixWorld(),i.makeTranslation(-_o.x,-_o.y,-_o.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class NT extends Nl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new DT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OT extends ih{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UT extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new OT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class FT extends ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ar.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return ar.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),ar.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ar.add(e,c),r.manager.itemStart(e)}}const rh="\\[\\]\\.:\\/",BT=new RegExp("["+rh+"]","g"),sh="[^"+rh+"]",kT="[^"+rh.replace("\\.","")+"]",zT=/((?:WC+[\/:])*)/.source.replace("WC",sh),HT=/(WCOD+)?/.source.replace("WCOD",kT),VT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),GT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),WT=new RegExp("^"+zT+HT+VT+GT+"$"),XT=["material","materials","bones","map"];class YT{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(BT,"")}static parseTrackName(e){const t=WT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);XT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=YT;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Id=new Ye;class IE{constructor(e,t,n=0,i=1/0){this.ray=new ia(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Id),this}intersectObject(e,t=!0,n=[]){return xu(e,this,n,t),n.sort(Dd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)xu(e[i],this,n,t);return n.sort(Dd),n}}function Dd(s,e){return s.distance-e.distance}function xu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)xu(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yu);function Nd(s,e){if(e===w0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===pu||e===Tm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===pu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class DE extends ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ZT(t)}),this.register(function(t){return new JT(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new $T(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new QT(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new hE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Vo.extractUrlBase(e);o=Vo.resolveURL(u,this.path)}else o=Vo.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Km(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$m){try{o[et.KHR_BINARY_GLTF]=new fE(e)}catch(f){i&&i(f);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new bE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case et.KHR_MATERIALS_UNLIT:o[f]=new KT;break;case et.KHR_DRACO_MESH_COMPRESSION:o[f]=new dE(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[f]=new pE;break;case et.KHR_MESH_QUANTIZATION:o[f]=new mE;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function qT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jT{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new Ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],$t);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new UT(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new NT(h),u.distance=f;break;case"spot":u=new IT(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Qi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class KT{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gn))}return Promise.all(i)}}class $T{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ZT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(a,a)}return Promise.all(r)}}class JT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class QT{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class eE{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class tE{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class nE{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}}class iE{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class rE{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gn)),Promise.all(r)}}class sE{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class oE{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class aE{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lE{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cE{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uE{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,u=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(p),h,f,d,i.mode,i.filter),p})})}else return null}}class hE{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Xn.TRIANGLES&&u.mode!==Xn.TRIANGLE_STRIP&&u.mode!==Xn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),f=h.isGroup?h.children:[h],d=u[0].count,p=[];for(const v of f){const g=new Ye,m=new U,l=new xr,_=new U(1,1,1),x=new dT(v.geometry,v.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&l.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,g.compose(m,l,_));for(const y in c)if(y==="_COLOR_0"){const w=c[y];x.instanceColor=new _u(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&v.geometry.setAttribute(y,c[y]);At.prototype.copy.call(x,v),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const $m="glTF",vo=12,Od={JSON:1313821514,BIN:5130562};class fE{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vo,r=new DataView(e,vo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Od.JSON){const u=new Uint8Array(e,vo+o,a);this.content=n.decode(u)}else if(c===Od.BIN){const u=vo+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const f=yu[h]||h.toLowerCase();a[f]=o[h]}for(const h in e.attributes){const f=yu[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Bs[d.componentType];u[f]=p.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(p){for(const v in p.attributes){const g=p.attributes[v],m=c[v];m!==void 0&&(g.normalized=m)}f(p)},a,u,$t,d)})})}}class pE{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mE{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Zm extends sa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=i-t,f=(n-t)/h,d=f*f,p=d*f,v=e*u,g=v-u,m=-2*p+3*d,l=p-d,_=1-m,x=l-d+f;for(let y=0;y!==a;y++){const w=o[g+y+a],E=o[g+y+c]*h,T=o[v+y+a],C=o[v+y]*h;r[y]=_*w+x*E+m*T+l*C}return r}}const gE=new xr;class _E extends Zm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gE.fromArray(r).normalize().toArray(r),r}}const Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ud={9728:yn,9729:Fn,9984:pm,9985:il,9986:Ao,9987:Ui},Fd={33071:or,33648:vl,10497:qs},Uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vE={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Qo},Fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new nh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),s.DefaultMaterial}function Rr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yE(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const f=e[u];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let u=0,h=e.length;u<h;u++){const f=e[u];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(d)}if(i){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function SE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ME(s){let e;const t=s.extensions&&s.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bc(t.attributes):e=s.indices+":"+Bc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bc(s.targets[n]);return e}function Bc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const EE=new Ye;class bE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new PT(this.options.manager):this.textureLoader=new FT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Km(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Rr(r,a,i),Qi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Vo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Uc[i.type],a=Bs[i.componentType],c=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Sn(u,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Uc[i.type],u=Bs[i.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(p&&p!==f){const l=Math.floor(d/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+l+":"+i.count;let x=t.cache.get(_);x||(g=new u(a,l*p,i.count*p/h),x=new lT(g,p/h),t.cache.add(_,x)),m=new Qu(x,c,d%p/h,v)}else a===null?g=new u(i.count*c):g=new u(a,d,i.count*c),m=new Sn(g,c,v);if(i.sparse!==void 0){const l=Uc.SCALAR,_=Bs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new _(o[1],x,i.sparse.count*l),E=new u(o[2],y,i.sparse.count*c);a!==null&&(m=new Sn(m.array.slice(),m.itemSize,m.normalized));for(let T=0,C=w.length;T<C;T++){const M=w[T];if(m.setX(M,E[T*c]),c>=2&&m.setY(M,E[T*c+1]),c>=3&&m.setZ(M,E[T*c+2]),c>=4&&m.setW(M,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ud[d.magFilter]||Fn,h.minFilter=Ud[d.minFilter]||Ui,h.wrapS=Fd[d.wrapS]||qs,h.wrapT=Fd[d.wrapT]||qs,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const m=new qt(g);m.needsUpdate=!0,d(m)}),t.load(Vo.resolveURL(f,r.path),v,void 0,p)})}).then(function(f){return u===!0&&a.revokeObjectURL(c),f.userData.mimeType=o.mimeType||TE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ym,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Xm,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return nh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},u=[];if(c[et.KHR_MATERIALS_UNLIT]){const f=i[et.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],$t),a.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",f.baseColorTexture,gn)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hi);const h=r.alphaMode||Fc.OPAQUE;if(h===Fc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kr&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==kr&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kr){const f=r.emissiveFactor;a.emissive=new Ve().setRGB(f[0],f[1],f[2],$t)}return r.emissiveTexture!==void 0&&o!==kr&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gn)),Promise.all(u).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Qi(f,r),t.associations.set(f,{materials:e}),r.extensions&&Rr(i,f,r),f})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const u=e[a],h=ME(u),f=i[h];if(f)o.push(f.promise);else{let d;u.extensions&&u.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Bd(new Mi,u,t),i[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?xE(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[p];let l;const _=u[p];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)l=r.isSkinnedMesh===!0?new uT(g,_):new kn(g,_),l.isSkinnedMesh===!0&&l.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?l.geometry=Nd(l.geometry,Tm):m.mode===Xn.TRIANGLE_FAN&&(l.geometry=Nd(l.geometry,pu));else if(m.mode===Xn.LINES)l=new pT(g,_);else if(m.mode===Xn.LINE_STRIP)l=new th(g,_);else if(m.mode===Xn.LINE_LOOP)l=new mT(g,_);else if(m.mode===Xn.POINTS)l=new gT(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(l.geometry.morphAttributes).length>0&&SE(l,r),l.name=t.createUniqueName(r.name||"mesh_"+e),Qi(l,r),m.extensions&&Rr(i,l,m),t.assignFinalMaterial(l),f.push(l)}for(let p=0,v=f.length;p<v;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&Rr(i,f[0],r),f[0];const d=new zr;r.extensions&&Rr(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,v=f.length;p<v;p++)d.add(f[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(ev.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const f=o[u];if(f){a.push(f);const d=new Ye;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new eh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],u=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){const p=i.channels[f],v=i.samplers[p.sampler],g=p.target,m=g.node,l=i.parameters!==void 0?i.parameters[v.input]:v.input,_=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",l)),c.push(this.getDependency("accessor",_)),u.push(v),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){const d=f[0],p=f[1],v=f[2],g=f[3],m=f[4],l=[];for(let _=0,x=d.length;_<x;_++){const y=d[_],w=p[_],E=v[_],T=g[_],C=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,w,E,T,C);if(M)for(let S=0;S<M.length;S++)l.push(M[S])}return new TT(r,void 0,l)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=i.weights.length;c<u;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],f=u[1],d=u[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,EE)});for(let p=0,v=f.length;p<v;p++)h.add(f[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Gm:u.length>1?h=new zr:u.length===1?h=u[0]:h=new At,h!==u[0])for(let f=0,d=u.length;f<d;f++)h.add(u[f]);if(r.name&&(h.userData.name=r.name,h.name=o),Qi(h,r),r.extensions&&Rr(n,h,r),r.matrix!==void 0){const f=new Ye;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new zr;n.name&&(r.name=i.createUniqueName(n.name)),Qi(r,n),n.extensions&&Rr(t,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,f=c.length;h<f;h++)r.add(c[h]);const u=h=>{const f=new Map;for(const[d,p]of i.associations)(d instanceof vi||d instanceof qt)&&f.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&f.set(d,p)}),f};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Zi[r.path]===Zi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(Zi[r.path]){case Zi.weights:u=Js;break;case Zi.rotation:u=es;break;case Zi.position:case Zi.scale:u=Qs;break;default:switch(n.itemSize){case 1:u=Js;break;case 2:case 3:default:u=Qs;break}break}const h=i.interpolation!==void 0?vE[i.interpolation]:Ks,f=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const v=new u(c[d]+"."+Zi[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Su(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof es?_E:Zm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AE(s,e,t){const n=e.attributes,i=new Gi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(u[0],u[1],u[2])),a.normalized){const h=Su(Bs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let u=0,h=r.length;u<h;u++){const f=r[u];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){const g=Su(Bs[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Si;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=yu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Qi(s,e),AE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yE(s,e.targets,t):s})}export{Gi as B,UT as D,DE as G,LE as H,Ti as M,Tn as P,IE as R,CE as S,U as V,RE as W,ot as a,wE as b,PE as c,zr as d,ev as e,m_ as g};
//# sourceMappingURL=vendor-d0c5ec0a.js.map
