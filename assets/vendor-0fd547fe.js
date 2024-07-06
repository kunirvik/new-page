function Di(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function qf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vs={duration:.5,overwrite:!1,delay:0},Au,on,bt,jn=1e8,yt=1/jn,Gc=Math.PI*2,lg=Gc/4,cg=0,jf=Math.sqrt,ug=Math.cos,hg=Math.sin,jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Hi=function(e){return typeof e=="number"},wu=function(e){return typeof e>"u"},xi=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},Cu=function(){return typeof window<"u"},la=function(e){return Lt(e)||jt(e)},Kf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Wc=/(?:-?\.?\d|\.)+/gi,$f=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zf=/[+-]=-?[.\d]+/,Jf=/[^,'"\[\]\s]+/gi,dg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,ai,Xc,Ru,Hn={},ll={},Qf,ep=function(e){return(ll=jr(e,Hn))&&Rn},Pu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yo=function(e,t){return!t&&console.warn(e)},tp=function(e,t){return e&&(Hn[e]=t)&&ll&&(ll[e]=t)||Hn},qo=function(){return 0},fg={suppressEvents:!0,isStart:!0,kill:!1},Za={suppressEvents:!0,kill:!1},pg={suppressEvents:!0},Lu={},ur=[],Yc={},np,Nn={},Vl={},dh=30,Ja=[],Iu="",Du=function(e){var t=e[0],n,i;if(xi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(t););n=Ja[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ap(e[i],n)))||e.splice(i,1);return e},Hr=function(e){return e._gsap||Du(Kn(e))[0]._gsap},ip=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():wu(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},Is=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},mg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},cl=function(){var e=ur.length,t=ur.slice(0),n,i;for(Yc={},ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rp=function(e,t,n,i){ur.length&&!on&&cl(),e.render(t,n,i||on&&t<0&&(e._initted||e._startAt)),ur.length&&!on&&cl()},sp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jf).length<2?t:jt(e)?e.trim():e},op=function(e){return e},Zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},fh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ul=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Lo=function(e){var t=e.parent||Rt,n=e.keyframes?gg(an(e.keyframes)):Zn;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_g=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ap=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(Za):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},xg=function s(e){return!e||e._ts&&s(e.parent)},ph=function(e){return e._repeat?Gs(e._tTime,e=e.duration()+e._rDelay)*e:0},Gs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},hl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rl=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},Pl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rl(e),n._dirty||Vr(n,e)),e},lp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=hl(e.rawTime(),t),(!t._dur||ra(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},ui=function(e,t,n,i){return t.parent&&mr(t),t._start=Yt((Hi(n)?n:n||e!==Rt?Wn(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ap(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),i||lp(e,t),e._ts<0&&Pl(e,e._tTime),e},cp=function(e,t){return(Hn.ScrollTrigger||Pu("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},up=function(e,t,n,i,r){if(Ou(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&np!==On.frame)return ur.push(e),e._lazy=[r,i],1},yg=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Sg=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&yg(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,a=e._rDelay,c=0,u,h,d;if(a&&e._repeat&&(c=ra(0,e._tDur,t),h=Gs(c,a),e._yoyo&&h&1&&(o=1-o),h!==Gs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||on||i||e._zTime===yt||!t&&e._zTime){if(!e._initted&&up(e,t,i,n,c))return;for(d=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&qc(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&mr(e,1),!n&&!on&&(Bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Mg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ws=function(e,t,n,i){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Pl(e,e._tTime=e._tDur*a),e.parent&&Rl(e),n||Vr(e.parent,e),e},mh=function(e){return e instanceof _n?Vr(e):Ws(e,e._dur)},Eg={_start:0,endTime:qo,totalDuration:qo},Wn=function s(e,t,n){var i=e.labels,r=e._recent||Eg,o=e.duration()>=jn?r.endTime(!1):e._dur,a,c,u;return jt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&n&&(c=c/100*(an(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Io=function(e,t,n){var i=Hi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Tn(c.vars.inherit)&&c.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Ft(t[0],o,t[r+1])},yr=function(e,t){return e||e===0?t(e):t},ra=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!jt(e)||!(t=dg.exec(e))?"":t[1]},Tg=function(e,t,n){return yr(n,function(i){return ra(e,t,i)})},Kc=[].slice,hp=function(e,t){return e&&xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xi(e[0]))&&!e.nodeType&&e!==ai},bg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return jt(i)&&!t||hp(i,1)?(r=n).push.apply(r,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):jt(e)&&!n&&(Xc||!Xs())?Kc.call((t||Ru).querySelectorAll(e),0):an(e)?bg(e,n):hp(e)?Kc.call(e,0):e?[e]:[]},$c=function(e){return e=Kn(e)[0]||Yo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?Yo("Invalid scope")||Ru.createElement("div"):e)}},dp=function(e){return e.sort(function(){return .5-Math.random()})},fp=function(e){if(Lt(e))return e;var t=xi(e)?e:{each:e},n=Gr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,u=t.axis,h=i,d=i;return jt(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],d=i[1]),function(f,p,v){var g=(v||t).length,m=o[g],l,_,x,y,w,b,E,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,jn])[1],!M){for(E=-jn;E<(E=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],l=c?Math.min(M,g)*h-.5:i%M,_=M===jn?0:c?g*d/M-.5:i/M|0,E=0,R=jn,b=0;b<g;b++)x=b%M-l,y=_-(b/M|0),m[b]=w=u?Math.abs(u==="y"?y:x):jf(x*x+y*y),w>E&&(E=w),w<R&&(R=w);i==="random"&&dp(m),m.max=E-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=sn(t.amount||t.each)||0,n=n&&g<0?Ep(n):n}return g=(m[f]-m.min)/m.max||0,Yt(m.b+(n?n(g):g)*m.v)+m.u}},Zc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Hi(n)?0:sn(n))}},pp=function(e,t){var n=an(e),i,r;return!n&&xi(e)&&(i=n=e.radius||jn,e.values?(e=Kn(e.values),(r=!Hi(e[0]))&&(i*=i)):e=Zc(e.increment)),yr(t,n?Lt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),u=jn,h=0,d=e.length,f,p;d--;)r?(f=e[d].x-a,p=e[d].y-c,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,h=d);return h=!i||u<=i?e[h]:o,r||h===o||Hi(o)?h:h+sn(o)}:Zc(e))},mp=function(e,t,n,i){return yr(an(e)?!t:n===!0?!!(n=0):!i,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ag=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},wg=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},Cg=function(e,t,n){return _p(e,t,0,1,n)},gp=function(e,t,n){return yr(n,function(i){return e[~~t(i)]})},Rg=function s(e,t,n){var i=t-e;return an(e)?gp(e,s(0,e.length),t):yr(n,function(r){return(i+(r-e)%i)%i+e})},Pg=function s(e,t,n){var i=t-e,r=i*2;return an(e)?gp(e,s(0,e.length-1),t):yr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},jo=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Jf:Wc),n+=e.substr(t,i-t)+mp(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},_p=function(e,t,n,i,r){var o=t-e,a=i-n;return yr(r,function(c){return n+((c-e)/o*a||0)})},Lg=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=jt(e),a={},c,u,h,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(h=[],d=e.length,f=d-2,u=1;u<d;u++)h.push(s(e[u-1],e[u]));d--,r=function(v){v*=d;var g=Math.min(f,~~v);return h[g](v-g)},n=t}else i||(e=jr(an(e)?[]:{},e));if(!h){for(c in t)Nu.call(a,e,c,"get",t[c]);r=function(v){return Bu(v,a)||(o?e.p:e)}}}return yr(n,r)},gh=function(e,t,n){var i=e.labels,r=jn,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Bn=function(e,t,n){var i=e.vars,r=i[t],o=bt,a=e._ctx,c,u,h;if(r)return c=i[t+"Params"],u=i.callbackScope||e,n&&ur.length&&cl(),a&&(bt=a),h=c?r.apply(u,c):r.call(u),bt=o,h},Mo=function(e){return mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Bn(e,"onInterrupt"),e},Rs,vp=[],xp=function(e){if(e)if(e=!e.name&&e.default||e,Cu()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:qo,render:Bu,add:Nu,kill:qg,modifier:Yg,rawVars:0},o={targetTest:0,get:0,getSetter:Fu,aliases:{},register:0};if(Xs(),e!==i){if(Nn[t])return;Zn(i,Zn(ul(e,r),o)),jr(i.prototype,jr(r,ul(e,o))),Nn[i.prop=t]=i,e.targetTest&&(Ja.push(i),Lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tp(t,i),e.register&&e.register(Rn,i,An)}else vp.push(e)},_t=255,Eo={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Gl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},yp=function(e,t,n){var i=e?Hi(e)?[e>>16,e>>8&_t,e&_t]:0:Eo.black,r,o,a,c,u,h,d,f,p,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Eo[e])i=Eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(Wc),!t)c=+i[0]%360/360,u=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(u+1):h+u-h*u,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Gl(c+1/3,r,o),i[1]=Gl(c,r,o),i[2]=Gl(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match($f),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wc)||Eo.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/_t,o=i[1]/_t,a=i[2]/_t,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?c=u=0:(p=d-f,u=h>.5?p/(2-d-f):p/(d+f),c=d===r?(o-a)/p+(o<a?6:0):d===o?(a-r)/p+2:(r-o)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Sp=function(e){var t=[],n=[],i=-1;return e.split(hr).forEach(function(r){var o=r.match(Cs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},_h=function(e,t,n){var i="",r=(e+i).match(hr),o=t?"hsla(":"rgba(",a=0,c,u,h,d;if(!r)return e;if(r=r.map(function(f){return(f=yp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Sp(e),c=n.c,c.join(i)!==h.c.join(i)))for(u=e.replace(hr,"1").split(Cs),d=u.length-1;a<d;a++)i+=u[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!u)for(u=e.split(hr),d=u.length-1;a<d;a++)i+=u[a]+r[a];return i+u[d]},hr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Eo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Ig=/hsl[a]?\(/,Mp=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=Ig.test(t),e[1]=_h(e[1],n),e[0]=_h(e[0],n,Sp(e[1])),!0},Ko,On=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,u,h,d,f,p,v=function g(m){var l=s()-i,_=m===!0,x,y,w,b;if((l>e||l<0)&&(n+=l-t),i+=l,w=i-n,x=w-o,(x>0||_)&&(b=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,o+=x+(x>=r?4:r-x),y=1),_||(c=u(g)),y)for(p=0;p<a.length;p++)a[p](w,f,b,m)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Qf&&(!Xc&&Cu()&&(ai=Xc=window,Ru=ai.document||{},Hn.gsap=Rn,(ai.gsapVersions||(ai.gsapVersions=[])).push(Rn.version),ep(ll||ai.GreenSockGlobals||!ai.gsap&&ai||{}),vp.forEach(xp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),u=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ko=1,v(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Ko=0,u=qo},lagSmoothing:function(m,l){e=m||1/0,t=Math.min(l||33,e)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,l,_){var x=l?function(y,w,b,E){m(y,w,b,E),d.remove(x)}:m;return d.remove(m),a[_?"unshift":"push"](x),Xs(),x},remove:function(m,l){~(l=a.indexOf(m))&&a.splice(l,1)&&p>=l&&p--},_listeners:a},d}(),Xs=function(){return!Ko&&On.wake()},lt={},Dg=/^[\d.\-M][\d.\-,\s]/,Ng=/["']/g,Og=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,u;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,u=c.substr(0,a),t[i]=isNaN(u)?u.replace(Ng,"").trim():+u,i=c.substr(a+1).trim();return t},Ug=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Fg=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Og(t[1])]:Ug(e).split(",").map(sp)):lt._CE&&Dg.test(e)?lt._CE("",e):n},Ep=function(e){return function(t){return 1-e(1-t)}},Tp=function s(e,t){for(var n=e._first,i;n;)n instanceof _n?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Gr=function(e,t){return e&&(Lt(e)?e:lt[e]||Fg(e))||t},ts=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){lt[a]=Hn[a]=r,lt[o=a.toLowerCase()]=n;for(var c in r)lt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=lt[a+"."+c]=r[c]}),r},bp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Gc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*hg((h-o)*r)+1},c=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:bp(a);return r=Gc/r,c.config=function(u,h){return s(e,u,h)},c},Xl=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:bp(n);return i.config=function(r){return s(e,r)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ts(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ts("Elastic",Wl("in"),Wl("out"),Wl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ts("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ts("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ts("Circ",function(s){return-(jf(1-s*s)-1)});ts("Sine",function(s){return s===1?1:-ug(s*lg)+1});ts("Back",Xl("in"),Xl("out"),Xl());lt.SteppedEase=lt.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-yt;return function(a){return((i*ra(0,o,a)|0)+r)*n}}};Vs.ease=lt["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Iu+=s+","+s+"Params,"});var Ap=function(e,t){this.id=cg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ip,this.set=t?t.getSetter:Fu},$o=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ws(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),Ko||On.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Pl(this,n),!r._dp||r.parent||lp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===yt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ph(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ph(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Gs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this._tDur,r),i!==!1),Rl(this),vg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=pg);var i=on;return on=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Wn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-yt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Lt(n)?n:op,a=function(){var u=i.then;i.then=null,Lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),r(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Mo(this)},s}();Zn($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var _n=function(s){qf(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Tn(n.sortChildren),Rt&&ui(n.parent||Rt,Di(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cp(Di(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Io(0,arguments,this),this},t.from=function(i,r,o){return Io(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Io(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Lo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ft(i,r,Wn(this,o),1),this},t.call=function(i,r,o){return ui(this,Ft.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,u,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new Ft(i,o,Wn(this,c)),this},t.staggerFrom=function(i,r,o,a,c,u,h){return o.runBackwards=1,Lo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,r,o,a,c,u,h)},t.staggerFromTo=function(i,r,o,a,c,u,h,d){return a.startAt=o,Lo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,r,a,c,u,h,d)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=i<=0?0:Yt(i),d=this._zTime<0!=i<0&&(this._initted||!u),f,p,v,g,m,l,_,x,y,w,b,E;if(this!==Rt&&h>c&&i>=0&&(h=c),h!==this._tTime||o||d){if(a!==this._time&&u&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,x=this._ts,l=!x,d&&(u||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Yt(h%m),h===c?(g=this._repeat,f=u):(g=~~(h/m),g&&g===h/m&&(f=u,g--),f>u&&(f=u)),w=Gs(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),b&&g&1&&(f=u-f,E=1),g!==w&&!this._lock){var R=b&&w&1,M=R===(b&&g&1);if(g<w&&(R=!R),a=R?0:h%u?u:h,this._lock=1,this.render(a||(E?0:Yt(g*m)),r,!u)._lock=0,this._tTime=h,!r&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||l!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!l)return this;Tp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Mg(this,Yt(a),Yt(f)),_&&(h-=f-(f=_._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(Bn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(v=p._next,(p._act||f>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,o),f!==this._time||!this._ts&&!l){_=0,v&&(h+=this._zTime=-yt);break}}p=v}else{p=this._last;for(var S=i<0?i:f;p;){if(v=p._prev,(p._act||S<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,o||on&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!l){_=0,v&&(h+=this._zTime=S?-yt:yt);break}}p=v}}if(_&&!r&&(this.pause(),_.render(f>=a?0:-yt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Rl(this),this.render(i,r,o);this._onUpdate&&!r&&Bn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(h===c&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Bn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Hi(r)||(r=Wn(this,r,i)),!(i instanceof $o)){if(an(i))return i.forEach(function(a){return o.add(a,r)}),this;if(jt(i))return this.addLabel(i,r);if(Lt(i))i=Ft.delayedCall(0,i);else return this}return this!==i?ui(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var c=[],u=this._first;u;)u._start>=a&&(u instanceof Ft?r&&c.push(u):(o&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,r,o)))),u=u._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(Cl(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Wn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Ft.delayedCall(0,r||qo,o);return a.data="isPause",this._hasPause=1,ui(this,a,Wn(this,i))},t.removePause=function(i){var r=this._first;for(i=Wn(this,i);r;)r._start===i&&r.data==="isPause"&&mr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)ir!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Kn(i),c=this._first,u=Hi(r),h;c;)c instanceof Ft?mg(c._targets,a)&&(u?(!ir||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Wn(o,i),c=r,u=c.startAt,h=c.onStart,d=c.onStartParams,f=c.immediateRender,p,v=Ft.to(o,Zn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||yt,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==m&&Ws(v,m,0,1).render(v._time,!0,!0),p=1}h&&h.apply(v,d||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Zn({startAt:{time:Wn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gh(this,Wn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gh(this,Wn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(u in c)c[u]>=o&&(c[u]+=i);return Vr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=jn,u,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=u;Ws(o,o===Rt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(rp(Rt,hl(i,Rt)),np=On.frame),On.frame>=dh){dh+=zn.autoSleep||120;var r=Rt._first;if((!r||!r._ts)&&zn.autoSleep&&On._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||On.sleep()}}},e}($o);Zn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bg=function(e,t,n,i,r,o,a){var c=new An(this._pt,e,t,0,1,Ip,null,r),u=0,h=0,d,f,p,v,g,m,l,_;for(c.b=n,c.e=i,n+="",i+="",(l=~i.indexOf("random("))&&(i=jo(i)),o&&(_=[n,i],o(_,e,t),n=_[0],i=_[1]),f=n.match(Hl)||[];d=Hl.exec(i);)v=d[0],g=i.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),v!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:v.charAt(1)==="="?Is(m,v)-m:parseFloat(v)-m,m:p&&p<4?Math.round:0},u=Hl.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=a,(Zf.test(i)||l)&&(c.e=0),this._pt=c,c},Nu=function(e,t,n,i,r,o,a,c,u,h){Lt(i)&&(i=i(r||0,e,o));var d=e[t],f=n!=="get"?n:Lt(d)?u?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Lt(d)?u?Gg:Pp:Uu,v;if(jt(i)&&(~i.indexOf("random(")&&(i=jo(i)),i.charAt(1)==="="&&(v=Is(f,i)+(sn(f)||0),(v||v===0)&&(i=v))),!h||f!==i||Jc)return!isNaN(f*i)&&i!==""?(v=new An(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Xg:Lp,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&Pu(t,i),Bg.call(this,e,t,f,i,p,c||zn.stringFilter,u))},kg=function(e,t,n,i,r){if(Lt(e)&&(e=Do(e,r,t,n,i)),!xi(e)||e.style&&e.nodeType||an(e)||Kf(e))return jt(e)?Do(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Do(e[a],r,t,n,i);return o},wp=function(e,t,n,i,r,o){var a,c,u,h;if(Nn[e]&&(a=new Nn[e]).init(r,a.rawVars?t[e]:kg(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new An(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Rs))for(u=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)u[a._props[h]]=c;return a},ir,Jc,Ou=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,u=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,v=e._dur,g=e._startAt,m=e._targets,l=e.parent,_=l&&l.data==="nested"?l.vars.targets:m,x=e._overwrite==="auto"&&!Au,y=e.timeline,w,b,E,R,M,S,N,O,I,z,q,K,$;if(y&&(!f||!r)&&(r="none"),e._ease=Gr(r,Vs.ease),e._yEase=d?Ep(Gr(d===!0?r:d,Vs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(O=m[0]?Hr(m[0]).harness:0,K=O&&i[O.prop],w=ul(i,Lu),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!p?g.render(-1,!0):g.revert(h&&v?Za:fg),g._lazy=0),o){if(mr(e._startAt=Ft.set(m,Zn({data:"isStart",overwrite:!1,parent:l,immediateRender:!0,lazy:!g&&Tn(c),startAt:null,delay:0,onUpdate:u&&function(){return Bn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!p)&&e._startAt.revert(Za),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&v&&!g){if(t&&(a=!1),E=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Tn(c),immediateRender:a,stagger:0,parent:l},w),K&&(E[O.prop]=K),mr(e._startAt=Ft.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(Za):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,c=v&&Tn(c)||c&&!v,b=0;b<m.length;b++){if(M=m[b],N=M._gsap||Du(m)[b]._gsap,e._ptLookup[b]=z={},Yc[N.id]&&ur.length&&cl(),q=_===m?b:_.indexOf(M),O&&(I=new O).init(M,K||w,e,q,_)!==!1&&(e._pt=R=new An(e._pt,M,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(B){z[B]=R}),I.priority&&(S=1)),!O||K)for(E in w)Nn[E]&&(I=wp(E,w,e,q,M,_))?I.priority&&(S=1):z[E]=R=Nu.call(e,M,E,"get",w[E],q,_,0,i.stringFilter);e._op&&e._op[b]&&e.kill(M,e._op[b]),x&&e._pt&&(ir=e,Rt.killTweensOf(M,z,e.globalTime(t)),$=!e.parent,ir=0),e._pt&&c&&(Yc[N.id]=1)}S&&Dp(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&y.render(jn,!0,!0)},zg=function(e,t,n,i,r,o,a,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(h=f[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Jc=1,e.vars[t]="+=0",Ou(e,a),Jc=0,c?Yo(t+" not eligible for reset"):1;u.push(h)}for(p=u.length;p--;)d=u[p],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=It(n)+sn(d.e)),d.b&&(d.b=h.s+sn(d.b))},Hg=function(e,t){var n=e[0]?Hr(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=jr({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Vg=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(an(t))a=n[e]||(n[e]=[]),t.forEach(function(c,u){return a.push({t:u/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Do=function(e,t,n,i,r){return Lt(e)?e.call(t,n,i,r):jt(e)&&~e.indexOf("random(")?jo(e):e},Cp=Iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rp={};bn(Cp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Rp[s]=1});var Ft=function(s){qf(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Lo(i))||this;var c=a.vars,u=c.duration,h=c.delay,d=c.immediateRender,f=c.stagger,p=c.overwrite,v=c.keyframes,g=c.defaults,m=c.scrollTrigger,l=c.yoyoEase,_=i.parent||Rt,x=(an(n)||Kf(n)?Hi(n[0]):"length"in i)?[n]:Kn(n),y,w,b,E,R,M,S,N;if(a._targets=x.length?Du(x):Yo("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||f||la(u)||la(h)){if(i=a.vars,y=a.timeline=new _n({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:x}),y.kill(),y.parent=y._dp=Di(a),y._start=0,f||la(u)||la(h)){if(E=x.length,S=f&&fp(f),xi(f))for(R in f)~Cp.indexOf(R)&&(N||(N={}),N[R]=f[R]);for(w=0;w<E;w++)b=ul(i,Rp),b.stagger=0,l&&(b.yoyoEase=l),N&&jr(b,N),M=x[w],b.duration=+Do(u,Di(a),w,M,x),b.delay=(+Do(h,Di(a),w,M,x)||0)-a._delay,!f&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),y.to(M,b,S?S(w,M,x):0),y._ease=lt.none;y.duration()?u=h=0:a.timeline=0}else if(v){Lo(Zn(y.vars.defaults,{ease:"none"})),y._ease=Gr(v.ease||i.ease||"none");var O=0,I,z,q;if(an(v))v.forEach(function(K){return y.to(x,K,">")}),y.duration();else{b={};for(R in v)R==="ease"||R==="easeEach"||Vg(R,v[R],b,v.easeEach);for(R in b)for(I=b[R].sort(function(K,$){return K.t-$.t}),O=0,w=0;w<I.length;w++)z=I[w],q={ease:z.e,duration:(z.t-(w?I[w-1].t:0))/100*u},q[R]=z.v,y.to(x,q,O),O+=q.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Au&&(ir=Di(a),Rt.killTweensOf(x),ir=0),ui(_,Di(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!u&&!v&&a._start===Yt(_._time)&&Tn(d)&&xg(Di(a))&&_.data!=="nested")&&(a._tTime=-yt,a.render(Math.max(0,-h)||0)),m&&cp(Di(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,u=this._dur,h=i<0,d=i>c-yt&&!h?c:i<yt?0:i,f,p,v,g,m,l,_,x,y;if(!u)Sg(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(f=Yt(d%g),d===c?(v=this._repeat,f=u):(v=~~(d/g),v&&v===Yt(d/g)&&(f=u,v--),f>u&&(f=u)),l=this._yoyo&&v&1,l&&(y=this._yEase,f=u-f),m=Gs(this._tTime,g),f===a&&!o&&this._initted&&v===m)return this._tTime=d,this;v!==m&&(x&&this._yEase&&Tp(x,l),this.vars.repeatRefresh&&!l&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Yt(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(up(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(u!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(f/u),this._from&&(this.ratio=_=1-_),f&&!a&&!r&&!v&&(Bn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&qc(this,i,r,o),Bn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!r&&this.parent&&Bn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&qc(this,i,!0,!0),(i||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&mr(this,1),!r&&!(h&&!a)&&(d||a||l)&&(Bn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){Ko||On.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ou(this,u),h=this._ease(u/this._dur),zg(this,i,r,o,a,h,u,c)?this.resetTo(i,r,o,a,1):(Pl(this,0),this.parent||ap(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Mo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ir&&ir.vars.overwrite!==!0)._first||Mo(this),this.parent&&o!==this.timeline.totalDuration()&&Ws(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Kn(i):a,u=this._ptLookup,h=this._pt,d,f,p,v,g,m,l;if((!r||r==="all")&&_g(a,c))return r==="all"&&(this._pt=0),Mo(this);for(d=this._op=this._op||[],r!=="all"&&(jt(r)&&(g={},bn(r,function(_){return g[_]=1}),r=g),r=Hg(a,r)),l=a.length;l--;)if(~c.indexOf(a[l])){f=u[l],r==="all"?(d[l]=r,v=f,p={}):(p=d[l]=d[l]||{},v=r);for(g in v)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Cl(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Mo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Io(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Io(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Rt.killTweensOf(i,r,o)},e}($o);Zn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(s){Ft[s]=function(){var e=new _n,t=Kc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Uu=function(e,t,n){return e[t]=n},Pp=function(e,t,n){return e[t](n)},Gg=function(e,t,n,i){return e[t](i.fp,n)},Wg=function(e,t,n){return e.setAttribute(t,n)},Fu=function(e,t){return Lt(e[t])?Pp:wu(e[t])&&e.setAttribute?Wg:Uu},Lp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ip=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Bu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Yg=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},qg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},jg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Dp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},An=function(){function s(t,n,i,r,o,a,c,u,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Lp,this.d=c||this,this.set=u||Uu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=jg,this.m=n,this.mt=r,this.tween=i},s}();bn(Iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Lu[s]=1});Hn.TweenMax=Hn.TweenLite=Ft;Hn.TimelineLite=Hn.TimelineMax=_n;Rt=new _n({sortChildren:!1,defaults:Vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Mp;var Wr=[],Qa={},Kg=[],vh=0,$g=0,Yl=function(e){return(Qa[e]||Kg).map(function(t){return t()})},Qc=function(){var e=Date.now(),t=[];e-vh>2&&(Yl("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,u;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,u=1);u&&(n.revert(),c&&t.push(n))}),Yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vh=e,Yl("matchMedia"))},Np=function(){function s(t,n){this.selector=n&&$c(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$g++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Lt(n)&&(r=i,i=n,n=Lt);var o=this,a=function(){var u=bt,h=o.selector,d;return u&&u!==o&&u.data.push(o),r&&(o.selector=$c(r)),bt=o,d=i.apply(o,arguments),Lt(d)&&o._r.push(d),bt=u,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Lt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,u;c--;)u=r.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)u=r.data[c],u instanceof _n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ft)&&u.revert&&u.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Wr.length;o--;)Wr[o].id===this.id&&Wr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),Zg=function(){function s(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){xi(n)||(n={matches:n});var o=new Np(0,r||this.scope),a=o.conditions={},c,u,h;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?h=1:(c=ai.matchMedia(n[u]),c&&(Wr.indexOf(o)<0&&Wr.push(o),(a[u]=c.matches)&&(h=1),c.addListener?c.addListener(Qc):c.addEventListener("change",Qc)));return h&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),dl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return xp(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=Kn(e)[0]);var r=Hr(e||{}).get,o=n?op:sp;return n==="native"&&(n=""),e&&(t?o((Nn[t]&&Nn[t].get||r)(e,t,n,i)):function(a,c,u){return o((Nn[a]&&Nn[a].get||r)(e,a,c,u))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(h){return Rn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}e=e[0]||{};var o=Nn[t],a=Hr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(h){var d=new o;Rs._pt=0,d.init(e,n?h+n:h,Rs,0,[e]),d.render(1,d),Rs._pt&&Bu(1,Rs)}:a.set(e,c);return o?u:function(h){return u(e,c,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Rn.to(e,jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,u,h){return r.resetTo(t,c,u,h)};return o.tween=r,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,Vs.ease)),fh(Vs,e||{})},config:function(e){return fh(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Hn[a]&&Yo(t+" effect requires "+a+" plugin.")}),Vl[t]=function(a,c,u){return n(Kn(a),Zn(c||{},r),u)},o&&(_n.prototype[t]=function(a,c,u){return this.add(Vl[t](a,xi(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){lt[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):lt},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,r;for(n.smoothChildTiming=Tn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=r;return ui(Rt,n,0),n},context:function(e,t){return e?new Np(e,t):bt},matchMedia:function(e){return new Zg(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qc()},addEventListener:function(e,t){var n=Qa[e]||(Qa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Rg,wrapYoyo:Pg,distribute:fp,random:mp,snap:pp,normalize:Cg,getUnit:sn,clamp:Tg,splitColor:yp,toArray:Kn,selector:$c,mapRange:_p,pipe:Ag,unitize:wg,interpolate:Lg,shuffle:dp},install:ep,effects:Vl,ticker:On,updateRoot:_n.updateRoot,plugins:Nn,globalTimeline:Rt,core:{PropTween:An,globals:tp,Tween:Ft,Timeline:_n,Animation:$o,getCache:Hr,_removeLinkedListItem:Cl,reverting:function(){return on},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return Au=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return dl[s]=Ft[s]});On.add(_n.updateRoot);Rs=dl.to({},{duration:0});var Jg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Qg=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Jg(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},ql=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,u;if(jt(r)&&(c={},bn(r,function(h){return c[h]=1}),r=c),t){c={};for(u in r)c[u]=t(r[u]);r=c}Qg(a,r)}}}},Rn=dl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ql("roundProps",Zc),ql("modifiers"),ql("snap",pp))||dl;Ft.version=_n.version=Rn.version="3.12.5";Qf=1;Cu()&&Xs();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xh,rr,Ds,ku,Fr,yh,zu,e_=function(){return typeof window<"u"},Vi={},Lr=180/Math.PI,Ns=Math.PI/180,is=Math.atan2,Sh=1e8,Hu=/([A-Z])/g,t_=/(left|right|width|margin|padding|x)/i,n_=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Op=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Up=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o_=function(e,t,n){return e.style[t]=n},a_=function(e,t,n){return e.style.setProperty(t,n)},l_=function(e,t,n){return e._gsap[t]=n},c_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},u_=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},h_=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Pt="transform",wn=Pt+"Origin",d_=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Vi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ni(i,a)}):this.tfm[e]=o.x?o[e]:Ni(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return fi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Pt}(r||t)&&this.props.push(e,t,r[e])},Fp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},f_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Hu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=zu(),(!r||!r.isStart)&&!n[Pt]&&(Fp(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bp=function(e,t){var n={target:e,props:[],revert:f_,save:d_};return e._gsap||Rn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},kp,tu=function(e,t){var n=rr.createElementNS?rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rr.createElement(e);return n&&n.style?n:rr.createElement(e)},gi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ys(t)||t,1)||""},Mh="O,Moz,ms,Ms,Webkit".split(","),Ys=function(e,t,n){var i=t||Fr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Mh[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Mh[o]:"")+e},nu=function(){e_()&&window.document&&(xh=window,rr=xh.document,Ds=rr.documentElement,Fr=tu("div")||{style:{}},tu("div"),Pt=Ys(Pt),wn=Pt+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kp=!!Ys("perspective"),zu=Rn.core.reverting,ku=1)},jl=function s(e){var t=tu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Ds.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ds.removeChild(t),this.style.cssText=r,o},Eh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zp=function(e){var t;try{t=e.getBBox()}catch{t=jl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===jl||(t=jl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Eh(e,["x","cx","x1"])||0,y:+Eh(e,["y","cy","y1"])||0,width:0,height:0}:t},Hp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zp(e))},Kr=function(e,t){if(t){var n=e.style,i;t in Vi&&t!==wn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Hu,"-$1").toLowerCase())):n.removeAttribute(t)}},sr=function(e,t,n,i,r,o){var a=new An(e._pt,t,n,0,1,o?Up:Op);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Th={deg:1,rad:1,turn:1},p_={grid:1,flex:1},gr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Fr.style,c=t_.test(t),u=e.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(c?"Width":"Height"),d=100,f=i==="px",p=i==="%",v,g,m,l;if(i===o||!r||Th[i]||Th[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),l=e.getCTM&&Hp(e),(p||o==="%")&&(Vi[t]||~t.indexOf("adius")))return v=l?e.getBBox()[c?"width":"height"]:e[h],It(p?r/v*d:r/100*v);if(a[c?"width":"height"]=d+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,l&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===rr||!g.appendChild)&&(g=rr.body),m=g._gsap,m&&p&&m.width&&c&&m.time===On.time&&!m.uncache)return It(r/m.width*d);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=d+i,v=e[h],_?e.style[t]=_:Kr(e,t)}else(p||o==="%")&&!p_[gi(g,"display")]&&(a.position=gi(e,"position")),g===e&&(a.position="static"),g.appendChild(Fr),v=Fr[h],g.removeChild(Fr),a.position="absolute";return c&&p&&(m=Hr(g),m.time=On.time,m.width=g[h]),It(f?v*r/d:v&&r?d/v*r:0)},Ni=function(e,t,n,i){var r;return ku||nu(),t in fi&&t!=="transform"&&(t=fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(r=Jo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:pl(gi(e,wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=fl[t]&&fl[t](e,t,n)||gi(e,t)||ip(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?gr(e,t,r,n)+n:r},m_=function(e,t,n,i){if(!n||n==="none"){var r=Ys(t,e,1),o=r&&gi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=gi(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,Ip),c=0,u=0,h,d,f,p,v,g,m,l,_,x,y,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=gi(e,t)||i,g?e.style[t]=g:Kr(e,t)),h=[n,i],Mp(h),n=h[0],i=h[1],f=n.match(Cs)||[],w=i.match(Cs)||[],w.length){for(;d=Cs.exec(i);)m=d[0],_=i.substring(c,d.index),v?v=(v+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(v=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Is(p,m)+y),l=parseFloat(m),x=m.substr((l+"").length),c=Cs.lastIndex-x.length,x||(x=x||zn.units[t]||y,c===i.length&&(i+=x,a.e+=x)),y!==x&&(p=gr(e,t,g,x)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:l-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Up:Op;return Zf.test(i)&&(a.e=0),this._pt=a,a},bh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},g_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=bh[n]||n,t[1]=bh[i]||i,t.join(" ")},__=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,u;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],Vi[a]&&(c=1,a=a==="transformOrigin"?wn:Pt),Kr(n,a);c&&(Kr(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),Jo(n,1),o.uncache=1,Fp(i)))}},fl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,__);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Zo=[1,0,0,1,0,0],Vp={},Gp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ah=function(e){var t=gi(e,Pt);return Gp(t)?Zo:t.substr(7).match($f).map(It)},Vu=function(e,t){var n=e._gsap||Hr(e),i=e.style,r=Ah(e),o,a,c,u;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Zo:r):(r===Zo&&!e.offsetParent&&e!==Ds&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Ds.appendChild(e)),r=Ah(e),c?i.display=c:Kr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ds.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},iu=function(e,t,n,i,r,o){var a=e._gsap,c=r||Vu(e,!0),u=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=c[0],v=c[1],g=c[2],m=c[3],l=c[4],_=c[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,b,E,R,M;n?c!==Zo&&(E=p*m-v*g)&&(R=y*(m/E)+w*(-g/E)+(g*_-m*l)/E,M=y*(-v/E)+w*(p/E)-(p*_-v*l)/E,y=R,w=M):(b=zp(e),y=b.x+(~x[0].indexOf("%")?y/100*b.width:y),w=b.y+(~(x[1]||x[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&a.smooth?(l=y-u,_=w-h,a.xOffset=d+(l*p+_*g)-l,a.yOffset=f+(l*v+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(sr(o,a,"xOrigin",u,y),sr(o,a,"yOrigin",h,w),sr(o,a,"xOffset",d,a.xOffset),sr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Jo=function(e,t){var n=e._gsap||new Ap(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),u=gi(e,wn)||"0",h,d,f,p,v,g,m,l,_,x,y,w,b,E,R,M,S,N,O,I,z,q,K,$,B,J,P,ce,Ie,je,j,ne;return h=d=f=g=m=l=_=x=y=0,p=v=1,n.svg=!!(e.getCTM&&Hp(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Pt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Pt]!=="none"?c[Pt]:"")),i.scale=i.rotate=i.translate="none"),E=Vu(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),u=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),iu(e,$||u,!!$||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,b=n.yOrigin||0,E!==Zo&&(N=E[0],O=E[1],I=E[2],z=E[3],h=q=E[4],d=K=E[5],E.length===6?(p=Math.sqrt(N*N+O*O),v=Math.sqrt(z*z+I*I),g=N||O?is(O,N)*Lr:0,_=I||z?is(I,z)*Lr+g:0,_&&(v*=Math.abs(Math.cos(_*Ns))),n.svg&&(h-=w-(w*N+b*I),d-=b-(w*O+b*z))):(ne=E[6],je=E[7],P=E[8],ce=E[9],Ie=E[10],j=E[11],h=E[12],d=E[13],f=E[14],R=is(ne,Ie),m=R*Lr,R&&(M=Math.cos(-R),S=Math.sin(-R),$=q*M+P*S,B=K*M+ce*S,J=ne*M+Ie*S,P=q*-S+P*M,ce=K*-S+ce*M,Ie=ne*-S+Ie*M,j=je*-S+j*M,q=$,K=B,ne=J),R=is(-I,Ie),l=R*Lr,R&&(M=Math.cos(-R),S=Math.sin(-R),$=N*M-P*S,B=O*M-ce*S,J=I*M-Ie*S,j=z*S+j*M,N=$,O=B,I=J),R=is(O,N),g=R*Lr,R&&(M=Math.cos(R),S=Math.sin(R),$=N*M+O*S,B=q*M+K*S,O=O*M-N*S,K=K*M-q*S,N=$,q=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,l=180-l),p=It(Math.sqrt(N*N+O*O+I*I)),v=It(Math.sqrt(K*K+ne*ne)),R=is(q,K),_=Math.abs(R)>2e-4?R*Lr:0,y=j?1/(j<0?-j:j):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gp(gi(e,Pt)),$&&e.setAttribute("transform",$))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=It(p),n.scaleY=It(v),n.rotation=It(g)+a,n.rotationX=It(m)+a,n.rotationY=It(l)+a,n.skewX=_+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=pl(u)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?x_:kp?Wp:v_,n.uncache=0,n},pl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kl=function(e,t,n){var i=sn(t);return It(parseFloat(t)+parseFloat(gr(e,"x",n+"px",i)))+i},v_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wp(e,t)},Mr="0deg",co="0px",Er=") ",Wp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,u=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,p=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,l=n.force3D,_=n.target,x=n.zOrigin,y="",w=l==="auto"&&e&&e!==1||l===!0;if(x&&(d!==Mr||h!==Mr)){var b=parseFloat(h)*Ns,E=Math.sin(b),R=Math.cos(b),M;b=parseFloat(d)*Ns,M=Math.cos(b),o=Kl(_,o,E*M*-x),a=Kl(_,a,-Math.sin(b)*-x),c=Kl(_,c,R*M*-x+x)}m!==co&&(y+="perspective("+m+Er),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||o!==co||a!==co||c!==co)&&(y+=c!==co||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Er),u!==Mr&&(y+="rotate("+u+Er),h!==Mr&&(y+="rotateY("+h+Er),d!==Mr&&(y+="rotateX("+d+Er),(f!==Mr||p!==Mr)&&(y+="skew("+f+", "+p+Er),(v!==1||g!==1)&&(y+="scale("+v+", "+g+Er),_.style[Pt]=y||"translate(0, 0)"},x_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,u=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,p=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,l=n.yOffset,_=n.forceCSS,x=parseFloat(o),y=parseFloat(a),w,b,E,R,M;c=parseFloat(c),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,c+=h),c||u?(c*=Ns,u*=Ns,w=Math.cos(c)*d,b=Math.sin(c)*d,E=Math.sin(c-u)*-f,R=Math.cos(c-u)*f,u&&(h*=Ns,M=Math.tan(u-h),M=Math.sqrt(1+M*M),E*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,b*=M)),w=It(w),b=It(b),E=It(E),R=It(R)):(w=d,R=f,b=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=gr(p,"x",o,"px"),y=gr(p,"y",a,"px")),(v||g||m||l)&&(x=It(x+v-(v*w+g*E)+m),y=It(y+g-(v*b+g*R)+l)),(i||r)&&(M=p.getBBox(),x=It(x+i/100*M.width),y=It(y+r/100*M.height)),M="matrix("+w+","+b+","+E+","+R+","+x+","+y+")",p.setAttribute("transform",M),_&&(p.style[Pt]=M)},y_=function(e,t,n,i,r){var o=360,a=jt(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Lr:1),u=c-i,h=i+u+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Sh)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Sh)%o-~~(u/o)*o)),e._pt=f=new An(e._pt,t,n,i,u,i_),f.e=h,f.u="deg",e._props.push(n),f},wh=function(e,t){for(var n in t)e[n]=t[n];return e},S_=function(e,t,n){var i=wh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,u,h,d,f,p,v;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=Jo(n,1),Kr(n,Pt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Pt],o[Pt]=t,a=Jo(n,1),o[Pt]=u);for(c in Vi)u=i[c],h=a[c],u!==h&&r.indexOf(c)<0&&(p=sn(u),v=sn(h),d=p!==v?gr(n,c,u,v):parseFloat(u),f=parseFloat(h),e._pt=new An(e._pt,a,c,d,f-d,eu),e._pt.u=v||0,e._props.push(c));wh(a,i)};bn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});fl[e>1?"border"+s:s]=function(a,c,u,h,d){var f,p;if(arguments.length<4)return f=o.map(function(v){return Ni(a,v,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},o.forEach(function(v,g){return p[v]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,p,d)}});var Xp={name:"css",register:nu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,u,h,d,f,p,v,g,m,l,_,x,y,w,b,E,R;ku||nu(),this.styles=this.styles||Bp(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Nn[g]&&wp(g,t,n,i,e,r)))){if(p=typeof h,v=fl[g],p==="function"&&(h=h.call(n,i,e,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=jo(h)),v)v(this,e,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",hr.lastIndex=0,hr.test(u)||(m=sn(u),l=sn(h)),l?m!==l&&(u=gr(e,g,u,l)+l):m&&(h+=m),this.add(a,"setProperty",u,h,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(c&&g in c?(u=typeof c[g]=="function"?c[g].call(n,i,e,r):c[g],jt(u)&&~u.indexOf("random(")&&(u=jo(u)),sn(u+"")||u==="auto"||(u+=zn.units[g]||sn(Ni(e,g))||""),(u+"").charAt(1)==="="&&(u=Ni(e,g))):u=Ni(e,g),f=parseFloat(u),_=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),_&&(h=h.substr(2)),d=parseFloat(h),g in fi&&(g==="autoAlpha"&&(f===1&&Ni(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),sr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Vi,x){if(this.styles.save(g),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Jo(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new An(this._pt,a,Pt,0,1,w.renderTransform,w,0,-1),y.dep=1),g==="scale")this._pt=new An(this._pt,w,"scaleY",w.scaleY,(_?Is(w.scaleY,_+d):d)-w.scaleY||0,eu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(wn,0,a[wn]),h=g_(h),w.svg?iu(e,h,0,b,0,this):(l=parseFloat(h.split(" ")[2])||0,l!==w.zOrigin&&sr(this,w,"zOrigin",w.zOrigin,l),sr(this,a,g,pl(u),pl(h)));continue}else if(g==="svgOrigin"){iu(e,h,1,b,0,this);continue}else if(g in Vp){y_(this,w,g,f,_?Is(f,_+h):h);continue}else if(g==="smoothOrigin"){sr(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){S_(this,h,e);continue}}else g in a||(g=Ys(g)||g);if(x||(d||d===0)&&(f||f===0)&&!n_.test(h)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),l=sn(h)||(g in zn.units?zn.units[g]:m),m!==l&&(f=gr(e,g,u,l)),this._pt=new An(this._pt,x?w:a,g,f,(_?Is(f,_+d):d)-f,!x&&(l==="px"||g==="zIndex")&&t.autoRound!==!1?s_:eu),this._pt.u=l||0,m!==l&&l!=="%"&&(this._pt.b=u,this._pt.r=r_);else if(g in a)m_.call(this,e,g,u,_?_+h:h);else if(g in e)this.add(e,g,u||e[g],_?_+h:h,i,r);else if(g!=="parseTransform"){Pu(g,h);continue}x||(g in a?R.push(g,0,a[g]):R.push(g,1,u||e[g])),o.push(g)}}E&&Dp(this)},render:function(e,t){if(t.tween._time||!zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ni,aliases:fi,getSetter:function(e,t,n){var i=fi[t];return i&&i.indexOf(",")<0&&(t=i),t in Vi&&t!==wn&&(e._gsap.x||Ni(e,"x"))?n&&yh===n?t==="scale"?c_:l_:(yh=n||{})&&(t==="scale"?u_:h_):e.style&&!wu(e.style[t])?o_:~t.indexOf("-")?a_:Fu(e,t)},core:{_removeProperty:Kr,_getMatrix:Vu}};Rn.utils.checkPrefix=Ys;Rn.core.getStyleSaver=Bp;(function(s,e,t,n){var i=bn(s+","+e+","+t,function(r){Vi[r]=1});bn(e,function(r){zn.units[r]="deg",Vp[r]=1}),fi[i[13]]=s+","+e,bn(n,function(r){var o=r.split(":");fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){zn.units[s]="px"});Rn.registerPlugin(Xp);var M_=Rn.registerPlugin(Xp)||Rn;M_.core.Tween;function Ch(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function E_(s,e,t){return e&&Ch(s.prototype,e),t&&Ch(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t,el,Un,or,ar,Os,Yp,Ir,No,qp,Ui,ti,jp,Kp=function(){return $t||typeof window<"u"&&($t=window.gsap)&&$t.registerPlugin&&$t},$p=1,Ps=[],rt=[],_i=[],Oo=Date.now,ru=function(e,t){return t},T_=function(){var e=No.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,_i),rt=n,_i=i,ru=function(o,a){return t[o](a)}},dr=function(e,t){return~_i.indexOf(e)&&_i[_i.indexOf(e)+1][t]},Uo=function(e){return!!~qp.indexOf(e)},hn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ca="scrollLeft",ua="scrollTop",su=function(){return Ui&&Ui.isPressed||rt.cache++},ml=function(e,t){var n=function i(r){if(r||r===0){$p&&(Un.history.scrollRestoration="manual");var o=Ui&&Ui.isPressed;r=i.v=Math.round(r)||(Ui&&Ui.iOS?1:0),e(r),i.cacheID=rt.cache,o&&ru("ss",r)}else(t||rt.cache!==i.cacheID||ru("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:ca,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ml(function(s){return arguments.length?Un.scrollTo(s,kt.sc()):Un.pageXOffset||or[ca]||ar[ca]||Os[ca]||0})},kt={s:ua,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:ml(function(s){return arguments.length?Un.scrollTo(vn.sc(),s):Un.pageYOffset||or[ua]||ar[ua]||Os[ua]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||$t.utils.toArray)(e)[0]||(typeof e=="string"&&$t.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_r=function(e,t){var n=t.s,i=t.sc;Uo(e)&&(e=or.scrollingElement||ar);var r=rt.indexOf(e),o=i===kt.sc?1:2;!~r&&(r=rt.push(e)-1),rt[r+o]||hn(e,"scroll",su);var a=rt[r+o],c=a||(rt[r+o]=ml(dr(e,n),!0)||(Uo(e)?i:ml(function(u){return arguments.length?e[n]=u:e[n]})));return c.target=e,a||(c.smooth=$t.getProperty(e,"scrollBehavior")==="smooth"),c},ou=function(e,t,n){var i=e,r=e,o=Oo(),a=o,c=t||50,u=Math.max(500,c*3),h=function(v,g){var m=Oo();g||m-o>c?(r=i,i=v,a=o,o=m):n?i+=v:i=r+(v-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(v){var g=a,m=r,l=Oo();return(v||v===0)&&v!==i&&h(v),o===a||l-a>u?0:(i+(n?m:-m))/((n?l:o)-g)*1e3};return{update:h,reset:d,getVelocity:f}},uo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Zp=function(){No=$t.core.globals().ScrollTrigger,No&&No.core&&T_()},Jp=function(e){return $t=e||Kp(),!el&&$t&&typeof document<"u"&&document.body&&(Un=window,or=document,ar=or.documentElement,Os=or.body,qp=[Un,or,ar,Os],$t.utils.clamp,jp=$t.core.context||function(){},Ir="onpointerenter"in Os?"pointer":"mouse",Yp=Dt.isTouch=Un.matchMedia&&Un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=Dt.eventTypes=("ontouchstart"in ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return $p=0},500),Zp(),el=1),el};vn.op=kt;rt.cache=0;var Dt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){el||Jp($t)||console.warn("Please gsap.registerPlugin(Observer)"),No||Zp();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,u=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,p=n.ignore,v=n.wheelSpeed,g=n.event,m=n.onDragStart,l=n.onDragEnd,_=n.onDrag,x=n.onPress,y=n.onRelease,w=n.onRight,b=n.onLeft,E=n.onUp,R=n.onDown,M=n.onChangeX,S=n.onChangeY,N=n.onChange,O=n.onToggleX,I=n.onToggleY,z=n.onHover,q=n.onHoverEnd,K=n.onMove,$=n.ignoreCheck,B=n.isNormalizer,J=n.onGestureStart,P=n.onGestureEnd,ce=n.onWheel,Ie=n.onEnable,je=n.onDisable,j=n.onClick,ne=n.scrollSpeed,he=n.capture,ie=n.allowClicks,De=n.lockAxis,Re=n.onLockAxis;this.target=a=Mn(a)||ar,this.vars=n,p&&(p=$t.utils.toArray(p)),i=i||1e-9,r=r||0,v=v||1,ne=ne||1,o=o||"wheel,touch,pointer",u=u!==!1,c||(c=parseFloat(Un.getComputedStyle(Os).lineHeight)||22);var k,Xe,Ee,Te,_e,Oe,Pe,H=this,et=0,L=0,A=n.passive||!h,X=_r(a,vn),Z=_r(a,kt),ee=X(),te=Z(),ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ti[0]==="pointerdown",ue=Uo(a),re=a.ownerDocument||or,Le=[0,0,0],se=[0,0,0],Se=0,qe=function(){return Se=Oo()},ve=function(fe,Ze){return(H.event=fe)&&p&&~p.indexOf(fe.target)||Ze&&ge&&fe.pointerType!=="touch"||$&&$(fe,Ze)},xe=function(){H._vx.reset(),H._vy.reset(),Xe.pause(),d&&d(H)},Fe=function(){var fe=H.deltaX=Rh(Le),Ze=H.deltaY=Rh(se),le=Math.abs(fe)>=i,Ue=Math.abs(Ze)>=i;N&&(le||Ue)&&N(H,fe,Ze,Le,se),le&&(w&&H.deltaX>0&&w(H),b&&H.deltaX<0&&b(H),M&&M(H),O&&H.deltaX<0!=et<0&&O(H),et=H.deltaX,Le[0]=Le[1]=Le[2]=0),Ue&&(R&&H.deltaY>0&&R(H),E&&H.deltaY<0&&E(H),S&&S(H),I&&H.deltaY<0!=L<0&&I(H),L=H.deltaY,se[0]=se[1]=se[2]=0),(Te||Ee)&&(K&&K(H),Ee&&(_(H),Ee=!1),Te=!1),Oe&&!(Oe=!1)&&Re&&Re(H),_e&&(ce(H),_e=!1),k=0},We=function(fe,Ze,le){Le[le]+=fe,se[le]+=Ze,H._vx.update(fe),H._vy.update(Ze),u?k||(k=requestAnimationFrame(Fe)):Fe()},ot=function(fe,Ze){De&&!Pe&&(H.axis=Pe=Math.abs(fe)>Math.abs(Ze)?"x":"y",Oe=!0),Pe!=="y"&&(Le[2]+=fe,H._vx.update(fe,!0)),Pe!=="x"&&(se[2]+=Ze,H._vy.update(Ze,!0)),u?k||(k=requestAnimationFrame(Fe)):Fe()},Be=function(fe){if(!ve(fe,1)){fe=uo(fe,h);var Ze=fe.clientX,le=fe.clientY,Ue=Ze-H.x,be=le-H.y,ke=H.isDragging;H.x=Ze,H.y=le,(ke||Math.abs(H.startX-Ze)>=r||Math.abs(H.startY-le)>=r)&&(_&&(Ee=!0),ke||(H.isDragging=!0),ot(Ue,be),ke||m&&m(H))}},T=H.onPress=function(Me){ve(Me,1)||Me&&Me.button||(H.axis=Pe=null,Xe.pause(),H.isPressed=!0,Me=uo(Me),et=L=0,H.startX=H.x=Me.clientX,H.startY=H.y=Me.clientY,H._vx.reset(),H._vy.reset(),hn(B?a:re,ti[1],Be,A,!0),H.deltaX=H.deltaY=0,x&&x(H))},D=H.onRelease=function(Me){if(!ve(Me,1)){cn(B?a:re,ti[1],Be,!0);var fe=!isNaN(H.y-H.startY),Ze=H.isDragging,le=Ze&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ue=uo(Me);!le&&fe&&(H._vx.reset(),H._vy.reset(),h&&ie&&$t.delayedCall(.08,function(){if(Oo()-Se>300&&!Me.defaultPrevented){if(Me.target.click)Me.target.click();else if(re.createEvent){var be=re.createEvent("MouseEvents");be.initMouseEvent("click",!0,!0,Un,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),Me.target.dispatchEvent(be)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&Ze&&!B&&Xe.restart(!0),l&&Ze&&l(H),y&&y(H,le)}},W=function(fe){return fe.touches&&fe.touches.length>1&&(H.isGesturing=!0)&&J(fe,H.isDragging)},Q=function(){return(H.isGesturing=!1)||P(H)},oe=function(fe){if(!ve(fe)){var Ze=X(),le=Z();We((Ze-ee)*ne,(le-te)*ne,1),ee=Ze,te=le,d&&Xe.restart(!0)}},Ne=function(fe){if(!ve(fe)){fe=uo(fe,h),ce&&(_e=!0);var Ze=(fe.deltaMode===1?c:fe.deltaMode===2?Un.innerHeight:1)*v;We(fe.deltaX*Ze,fe.deltaY*Ze,0),d&&!B&&Xe.restart(!0)}},Ge=function(fe){if(!ve(fe)){var Ze=fe.clientX,le=fe.clientY,Ue=Ze-H.x,be=le-H.y;H.x=Ze,H.y=le,Te=!0,d&&Xe.restart(!0),(Ue||be)&&ot(Ue,be)}},ht=function(fe){H.event=fe,z(H)},gt=function(fe){H.event=fe,q(H)},tt=function(fe){return ve(fe)||uo(fe,h)&&j(H)};Xe=H._dc=$t.delayedCall(f||.25,xe).pause(),H.deltaX=H.deltaY=0,H._vx=ou(0,50,!0),H._vy=ou(0,50,!0),H.scrollX=X,H.scrollY=Z,H.isDragging=H.isGesturing=H.isPressed=!1,jp(this),H.enable=function(Me){return H.isEnabled||(hn(ue?re:a,"scroll",su),o.indexOf("scroll")>=0&&hn(ue?re:a,"scroll",oe,A,he),o.indexOf("wheel")>=0&&hn(a,"wheel",Ne,A,he),(o.indexOf("touch")>=0&&Yp||o.indexOf("pointer")>=0)&&(hn(a,ti[0],T,A,he),hn(re,ti[2],D),hn(re,ti[3],D),ie&&hn(a,"click",qe,!0,!0),j&&hn(a,"click",tt),J&&hn(re,"gesturestart",W),P&&hn(re,"gestureend",Q),z&&hn(a,Ir+"enter",ht),q&&hn(a,Ir+"leave",gt),K&&hn(a,Ir+"move",Ge)),H.isEnabled=!0,Me&&Me.type&&T(Me),Ie&&Ie(H)),H},H.disable=function(){H.isEnabled&&(Ps.filter(function(Me){return Me!==H&&Uo(Me.target)}).length||cn(ue?re:a,"scroll",su),H.isPressed&&(H._vx.reset(),H._vy.reset(),cn(B?a:re,ti[1],Be,!0)),cn(ue?re:a,"scroll",oe,he),cn(a,"wheel",Ne,he),cn(a,ti[0],T,he),cn(re,ti[2],D),cn(re,ti[3],D),cn(a,"click",qe,!0),cn(a,"click",tt),cn(re,"gesturestart",W),cn(re,"gestureend",Q),cn(a,Ir+"enter",ht),cn(a,Ir+"leave",gt),cn(a,Ir+"move",Ge),H.isEnabled=H.isPressed=H.isDragging=!1,je&&je(H))},H.kill=H.revert=function(){H.disable();var Me=Ps.indexOf(H);Me>=0&&Ps.splice(Me,1),Ui===H&&(Ui=0)},Ps.push(H),B&&Uo(a)&&(Ui=H),H.enable(g)},E_(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Dt.version="3.12.5";Dt.create=function(s){return new Dt(s)};Dt.register=Jp;Dt.getAll=function(){return Ps.slice()};Dt.getById=function(s){return Ps.filter(function(e){return e.vars.id===s})[0]};Kp()&&$t.registerPlugin(Dt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ye,As,at,Ct,ni,Mt,Qp,gl,Qo,Fo,To,ha,nn,Ll,au,pn,Ph,Lh,ws,em,$l,tm,fn,lu,nm,im,Qi,cu,Gu,Us,Wu,_l,uu,Zl,da=1,rn=Date.now,Jl=rn(),$n=0,bo=0,Ih=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Dh=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},b_=function s(){return bo&&requestAnimationFrame(s)},Nh=function(){return Ll=1},Oh=function(){return Ll=0},li=function(e){return e},Ao=function(e){return Math.round(e*1e5)/1e5||0},rm=function(){return typeof window<"u"},sm=function(){return ye||rm()&&(ye=window.gsap)&&ye.registerPlugin&&ye},$r=function(e){return!!~Qp.indexOf(e)},om=function(e){return(e==="Height"?Wu:at["inner"+e])||ni["client"+e]||Mt["client"+e]},am=function(e){return dr(e,"getBoundingClientRect")||($r(e)?function(){return sl.width=at.innerWidth,sl.height=Wu,sl}:function(){return Oi(e)})},A_=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=dr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?om(r):e["client"+r])||0}},w_=function(e,t){return!t||~_i.indexOf(e)?am(e):function(){return sl}},pi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=dr(e,n))?o()-am(e)()[r]:$r(e)?(ni[n]||Mt[n])-om(i):e[n]-e["offset"+i])},fa=function(e,t){for(var n=0;n<ws.length;n+=3)(!t||~t.indexOf(ws[n+1]))&&e(ws[n],ws[n+1],ws[n+2])},Dn=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},wo=function(e){return typeof e=="number"},Dr=function(e){return typeof e=="object"},ho=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ql=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},rs=Math.abs,lm="left",cm="top",Xu="right",Yu="bottom",Xr="width",Yr="height",Bo="Right",ko="Left",zo="Top",Ho="Bottom",Ut="padding",Yn="margin",qs="Width",qu="Height",Bt="px",qn=function(e){return at.getComputedStyle(e)},C_=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Uh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oi=function(e,t){var n=t&&qn(e)[au]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},vl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},um=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},R_=function(e){return function(t){return ye.utils.snap(um(e),t)}},ju=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},P_=function(e){return function(t,n){return ju(um(e))(t,n.direction)}},pa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Xt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Wt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ma=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Fh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ga={toggleActions:"play",anticipatePin:0},xl={top:0,left:0,center:.5,bottom:1,right:1},tl=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in xl?xl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_a=function(e,t,n,i,r,o,a,c){var u=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,p=r.fontWeight,v=Ct.createElement("div"),g=$r(n)||dr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,l=g?Mt:n,_=e.indexOf("start")!==-1,x=_?u:h,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(y+=(i===kt?Xu:Yu)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=_,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=y,v.innerText=t||t===0?e+"-"+t:e,l.children[0]?l.insertBefore(v,l.children[0]):l.appendChild(v),v._offset=v["offset"+i.op.d2],nl(v,0,i,_),v},nl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+qs]=1,r["border"+a+qs]=0,r[n.p]=t+"px",ye.set(e,r)},it=[],hu={},ea,Bh=function(){return rn()-$n>34&&(ea||(ea=requestAnimationFrame(ki)))},ss=function(){(!fn||!fn.isPressed||fn.startX>Mt.clientWidth)&&(rt.cache++,fn?ea||(ea=requestAnimationFrame(ki)):ki(),$n||Jr("scrollStart"),$n=rn())},ec=function(){im=at.innerWidth,nm=at.innerHeight},Co=function(){rt.cache++,!nn&&!tm&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!lu||im!==at.innerWidth||Math.abs(at.innerHeight-nm)>at.innerHeight*.25)&&gl.restart(!0)},Zr={},L_=[],hm=function s(){return Wt(ct,"scrollEnd",s)||Br(!0)},Jr=function(e){return Zr[e]&&Zr[e].map(function(t){return t()})||L_},In=[],dm=function(e){for(var t=0;t<In.length;t+=5)(!e||In[t+4]&&In[t+4].query===e)&&(In[t].style.cssText=In[t+1],In[t].getBBox&&In[t].setAttribute("transform",In[t+2]||""),In[t+3].uncache=1)},Ku=function(e,t){var n;for(pn=0;pn<it.length;pn++)n=it[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));_l=!0,t&&dm(t),t||Jr("revert")},fm=function(e,t){rt.cache++,(t||!mn)&&rt.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(at.history.scrollRestoration=Gu=e)},mn,qr=0,kh,I_=function(){if(kh!==qr){var e=kh=qr;requestAnimationFrame(function(){return e===qr&&Br(!0)})}},pm=function(){Mt.appendChild(Us),Wu=!fn&&Us.offsetHeight||at.innerHeight,Mt.removeChild(Us)},zh=function(e){return Qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Br=function(e,t){if($n&&!e&&!_l){Xt(ct,"scrollEnd",hm);return}pm(),mn=ct.isRefreshing=!0,rt.forEach(function(i){return xn(i)&&++i.cacheID&&(i.rec=i())});var n=Jr("refreshInit");em&&ct.sort(),t||Ku(),rt.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),_l=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),uu=1,zh(!0),it.forEach(function(i){var r=pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),zh(!1),uu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),fm(Gu,1),gl.pause(),qr++,mn=2,ki(2),it.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=ct.isRefreshing=!1,Jr("refresh")},du=0,il=1,Vo,ki=function(e){if(e===2||!mn&&!_l){ct.isUpdating=!0,Vo&&Vo.update(0);var t=it.length,n=rn(),i=n-Jl>=50,r=t&&it[0].scroll();if(il=du>r?-1:1,mn||(du=r),i&&($n&&!Ll&&n-$n>200&&($n=0,Jr("scrollEnd")),To=Jl,Jl=n),il<0){for(pn=t;pn-- >0;)it[pn]&&it[pn].update(0,i);il=1}else for(pn=0;pn<t;pn++)it[pn]&&it[pn].update(0,i);ct.isUpdating=!1}ea=0},fu=[lm,cm,Yu,Xu,Yn+Ho,Yn+Bo,Yn+zo,Yn+ko,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rl=fu.concat([Xr,Yr,"boxSizing","max"+qs,"max"+qu,"position",Yn,Ut,Ut+zo,Ut+Bo,Ut+Ho,Ut+ko]),D_=function(e,t,n){Fs(n);var i=e._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},tc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=fu.length,o=t.style,a=e.style,c;r--;)c=fu[r],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Yu]=a[Xu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Xr]=vl(e,vn)+Bt,o[Yr]=vl(e,kt)+Bt,o[Ut]=a[Yn]=a[cm]=a[lm]="0",Fs(i),a[Xr]=a["max"+qs]=n[Xr],a[Yr]=a["max"+qu]=n[Yr],a[Ut]=n[Ut],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},N_=/([A-Z])/g,Fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(N_,"-$1").toLowerCase())}},va=function(e){for(var t=rl.length,n=e.style,i=[],r=0;r<t;r++)i.push(rl[r],n[rl[r]]);return i.t=e,i},O_=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},sl={left:0,top:0},Hh=function(e,t,n,i,r,o,a,c,u,h,d,f,p,v){xn(e)&&(e=e(c)),Dn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?tl("0"+e.substr(3),n):0));var g=p?p.time():0,m,l,_;if(p&&p.seek(0),isNaN(e)||(e=+e),wo(e))p&&(e=ye.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&nl(a,n,i,!0);else{xn(t)&&(t=t(c));var x=(e||"0").split(" "),y,w,b,E;_=Mn(t,c)||Mt,y=Oi(_)||{},(!y||!y.left&&!y.top)&&qn(_).display==="none"&&(E=_.style.display,_.style.display="block",y=Oi(_),E?_.style.display=E:_.style.removeProperty("display")),w=tl(x[0],y[i.d]),b=tl(x[1]||"0",n),e=y[i.p]-u[i.p]-h+w+r-b,a&&nl(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(v&&(c[v]=e||-.001,e<0&&(e=0)),o){var R=e+n,M=o._isStart;m="scroll"+i.d2,nl(o,R,i,M&&R>20||!M&&(d?Math.max(Mt[m],ni[m]):o.parentNode[m])<=R+1),d&&(u=Oi(a),d&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+Bt))}return p&&_&&(m=Oi(_),p.seek(f),l=Oi(_),p._caScrollDist=m[i.p]-l[i.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},U_=/(webkit|moz|length|cssText|inset)/i,Vh=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Mt){e._stOrig=r.cssText,a=qn(e);for(o in a)!+o&&!U_.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},mm=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},xa=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},Gh=function(e,t){var n=_r(e,t),i="_scroll"+t.p2,r=function o(a,c,u,h,d){var f=o.tween,p=c.onComplete,v={};u=u||n();var g=mm(n,u,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-u,f&&f.kill(),c[i]=a,c.inherit=!1,c.modifiers=v,v[i]=function(){return g(u+h*f.ratio+d*f.ratio*f.ratio)},c.onUpdate=function(){rt.cache++,o.tween&&ki()},c.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=ye.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Xt(e,"wheel",n.wheelHandler),ct.isTouch&&Xt(e,"touchmove",n.wheelHandler),r},ct=function(){function s(t,n){As||s.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),cu(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bo){this.update=this.refresh=this.kill=li;return}n=Uh(Dn(n)||wo(n)||n.nodeType?{trigger:n}:n,ga);var r=n,o=r.onUpdate,a=r.toggleClass,c=r.id,u=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,p=r.pin,v=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,l=r.onScrubComplete,_=r.onSnapComplete,x=r.once,y=r.snap,w=r.pinReparent,b=r.pinSpacer,E=r.containerAnimation,R=r.fastScrollEnd,M=r.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:kt,N=!d&&d!==0,O=Mn(n.scroller||at),I=ye.core.getCache(O),z=$r(O),q=("pinType"in n?n.pinType:dr(O,"pinType")||z&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=N&&n.toggleActions.split(" "),B="markers"in n?n.markers:ga.markers,J=z?0:parseFloat(qn(O)["border"+S.p2+qs])||0,P=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Ie=A_(O,z,S),je=w_(O,z),j=0,ne=0,he=0,ie=_r(O,S),De,Re,k,Xe,Ee,Te,_e,Oe,Pe,H,et,L,A,X,Z,ee,te,ge,ue,re,Le,se,Se,qe,ve,xe,Fe,We,ot,Be,T,D,W,Q,oe,Ne,Ge,ht,gt;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=O,P.scroll=E?E.time.bind(E):ie,Xe=ie(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(em=1,n.refreshPriority===-9999&&(Vo=P)),I.tweenScroll=I.tweenScroll||{top:Gh(O,kt),left:Gh(O,vn)},P.tweenTo=De=I.tweenScroll[S.p],P.scrubDuration=function(le){W=wo(le)&&le,W?D?D.duration(le):D=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:W,paused:!0,onComplete:function(){return l&&l(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),Be=0,c||(c=i.vars.id)),y&&((!Dr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Mt.style&&ye.set(z?[Mt,ni]:O,{scrollBehavior:"auto"}),rt.forEach(function(le){return xn(le)&&le.target===(z?Ct.scrollingElement||ni:O)&&(le.smooth=!1)}),k=xn(y.snapTo)?y.snapTo:y.snapTo==="labels"?R_(i):y.snapTo==="labelsDirectional"?P_(i):y.directional!==!1?function(le,Ue){return ju(y.snapTo)(le,rn()-ne<500?0:Ue.direction)}:ye.utils.snap(y.snapTo),Q=y.duration||{min:.1,max:2},Q=Dr(Q)?Fo(Q.min,Q.max):Fo(Q,Q),oe=ye.delayedCall(y.delay||W/2||.1,function(){var le=ie(),Ue=rn()-ne<500,be=De.tween;if((Ue||Math.abs(P.getVelocity())<10)&&!be&&!Ll&&j!==le){var ke=(le-Te)/X,wt=i&&!N?i.totalProgress():ke,nt=Ue?0:(wt-T)/(rn()-To)*1e3||0,Et=ye.utils.clamp(-ke,1-ke,rs(nt/2)*nt/.185),Vt=ke+(y.inertia===!1?0:Et),Tt,xt,C=y,F=C.onStart,V=C.onInterrupt,G=C.onComplete;if(Tt=k(Vt,P),wo(Tt)||(Tt=Vt),xt=Math.round(Te+Tt*X),le<=_e&&le>=Te&&xt!==le){if(be&&!be._initted&&be.data<=rs(xt-le))return;y.inertia===!1&&(Et=Tt-ke),De(xt,{duration:Q(rs(Math.max(rs(Vt-wt),rs(Tt-wt))*.185/nt/.05||0)),ease:y.ease||"power3",data:rs(xt-le),onInterrupt:function(){return oe.restart(!0)&&V&&V(P)},onComplete:function(){P.update(),j=ie(),i&&(D?D.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),Be=T=i&&!N?i.totalProgress():P.progress,_&&_(P),G&&G(P)}},le,Et*X,xt-le-Et*X),F&&F(P,De.tween)}}else P.isActive&&j!==le&&oe.restart(!0)}).pause()),c&&(hu[c]=P),f=P.trigger=Mn(f||p!==!0&&p),gt=f&&f._gsap&&f._gsap.stRevert,gt&&(gt=gt(P)),p=p===!0?f:Mn(p),Dn(a)&&(a={targets:f,className:a}),p&&(v===!1||v===Yn||(v=!v&&p.parentNode&&p.parentNode.style&&qn(p.parentNode).display==="flex"?!1:Ut),P.pin=p,Re=ye.core.getCache(p),Re.spacer?Z=Re.pinState:(b&&(b=Mn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Re.spacerIsNative=!!b,b&&(Re.spacerState=va(b))),Re.spacer=ge=b||Ct.createElement("div"),ge.classList.add("pin-spacer"),c&&ge.classList.add("pin-spacer-"+c),Re.pinState=Z=va(p)),n.force3D!==!1&&ye.set(p,{force3D:!0}),P.spacer=ge=Re.spacer,ot=qn(p),qe=ot[v+S.os2],re=ye.getProperty(p),Le=ye.quickSetter(p,S.a,Bt),tc(p,ge,ot),te=va(p)),B){L=Dr(B)?Uh(B,Fh):Fh,H=_a("scroller-start",c,O,S,L,0),et=_a("scroller-end",c,O,S,L,0,H),ue=H["offset"+S.op.d2];var tt=Mn(dr(O,"content")||O);Oe=this.markerStart=_a("start",c,tt,S,L,ue,0,E),Pe=this.markerEnd=_a("end",c,tt,S,L,ue,0,E),E&&(ht=ye.quickSetter([Oe,Pe],S.a,Bt)),!q&&!(_i.length&&dr(O,"fixedMarkers")===!0)&&(C_(z?Mt:O),ye.set([H,et],{force3D:!0}),xe=ye.quickSetter(H,S.a,Bt),We=ye.quickSetter(et,S.a,Bt))}if(E){var Me=E.vars.onUpdate,fe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),Me&&Me.apply(E,fe||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(le,Ue){if(!Ue)return P.kill(!0);var be=le!==!1||!P.enabled,ke=nn;be!==P.isReverted&&(be&&(Ne=Math.max(ie(),P.scroll.rec||0),he=P.progress,Ge=i&&i.progress()),Oe&&[Oe,Pe,H,et].forEach(function(wt){return wt.style.display=be?"none":"block"}),be&&(nn=P,P.update(be)),p&&(!w||!P.isActive)&&(be?D_(p,ge,Z):tc(p,ge,qn(p),ve)),be||P.update(be),nn=ke,P.isReverted=be)},P.refresh=function(le,Ue,be,ke){if(!((nn||!P.enabled)&&!Ue)){if(p&&le&&$n){Xt(s,"scrollEnd",hm);return}!mn&&ce&&ce(P),nn=P,De.tween&&!be&&(De.tween.kill(),De.tween=0),D&&D.pause(),g&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var wt=Ie(),nt=je(),Et=E?E.duration():pi(O,S),Vt=X<=.01,Tt=0,xt=ke||0,C=Dr(be)?be.end:n.end,F=n.endTrigger||f,V=Dr(be)?be.start:n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),G=P.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,P),Y=f&&Math.max(0,it.indexOf(P))||0,ae=Y,de,me,Ce,Ve,we,Ae,ut,Nt,Jt,ln,Ke,ze,oi;for(B&&Dr(be)&&(ze=ye.getProperty(H,S.p),oi=ye.getProperty(et,S.p));ae--;)Ae=it[ae],Ae.end||Ae.refresh(0,1)||(nn=P),ut=Ae.pin,ut&&(ut===f||ut===p||ut===G)&&!Ae.isReverted&&(ln||(ln=[]),ln.unshift(Ae),Ae.revert(!0,!0)),Ae!==it[ae]&&(Y--,ae--);for(xn(V)&&(V=V(P)),V=Ih(V,"start",P),Te=Hh(V,f,wt,S,ie(),Oe,H,P,nt,J,q,Et,E,P._startClamp&&"_startClamp")||(p?-.001:0),xn(C)&&(C=C(P)),Dn(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(Dn(V)?V.split(" ")[0]:"")+C:(Tt=tl(C.substr(2),wt),C=Dn(V)?V:(E?ye.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Te):Te)+Tt,F=f)),C=Ih(C,"end",P),_e=Math.max(Te,Hh(C||(F?"100% 0":Et),F,wt,S,ie()+Tt,Pe,et,P,nt,J,q,Et,E,P._endClamp&&"_endClamp"))||-.001,Tt=0,ae=Y;ae--;)Ae=it[ae],ut=Ae.pin,ut&&Ae.start-Ae._pinPush<=Te&&!E&&Ae.end>0&&(de=Ae.end-(P._startClamp?Math.max(0,Ae.start):Ae.start),(ut===f&&Ae.start-Ae._pinPush<Te||ut===G)&&isNaN(V)&&(Tt+=de*(1-Ae.progress)),ut===p&&(xt+=de));if(Te+=Tt,_e+=Tt,P._startClamp&&(P._startClamp+=Tt),P._endClamp&&!mn&&(P._endClamp=_e||-.001,_e=Math.min(_e,pi(O,S))),X=_e-Te||(Te-=.01)&&.001,Vt&&(he=ye.utils.clamp(0,1,ye.utils.normalize(Te,_e,Ne))),P._pinPush=xt,Oe&&Tt&&(de={},de[S.a]="+="+Tt,G&&(de[S.p]="-="+ie()),ye.set([Oe,Pe],de)),p&&!(uu&&P.end>=pi(O,S)))de=qn(p),Ve=S===kt,Ce=ie(),se=parseFloat(re(S.a))+xt,!Et&&_e>1&&(Ke=(z?Ct.scrollingElement||ni:O).style,Ke={style:Ke,value:Ke["overflow"+S.a.toUpperCase()]},z&&qn(Mt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ke.style["overflow"+S.a.toUpperCase()]="scroll")),tc(p,ge,de),te=va(p),me=Oi(p,!0),Nt=q&&_r(O,Ve?vn:kt)(),v?(ve=[v+S.os2,X+xt+Bt],ve.t=ge,ae=v===Ut?vl(p,S)+X+xt:0,ae&&(ve.push(S.d,ae+Bt),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=ae+Bt)),Fs(ve),G&&it.forEach(function(dt){dt.pin===G&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),q&&ie(Ne)):(ae=vl(p,S),ae&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=ae+Bt)),q&&(we={top:me.top+(Ve?Ce-Te:Nt)+Bt,left:me.left+(Ve?Nt:Ce-Te)+Bt,boxSizing:"border-box",position:"fixed"},we[Xr]=we["max"+qs]=Math.ceil(me.width)+Bt,we[Yr]=we["max"+qu]=Math.ceil(me.height)+Bt,we[Yn]=we[Yn+zo]=we[Yn+Bo]=we[Yn+Ho]=we[Yn+ko]="0",we[Ut]=de[Ut],we[Ut+zo]=de[Ut+zo],we[Ut+Bo]=de[Ut+Bo],we[Ut+Ho]=de[Ut+Ho],we[Ut+ko]=de[Ut+ko],ee=O_(Z,we,w),mn&&ie(0)),i?(Jt=i._initted,$l(1),i.render(i.duration(),!0,!0),Se=re(S.a)-se+X+xt,Fe=Math.abs(X-Se)>1,q&&Fe&&ee.splice(ee.length-2,2),i.render(0,!0,!0),Jt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),$l(0)):Se=X,Ke&&(Ke.value?Ke.style["overflow"+S.a.toUpperCase()]=Ke.value:Ke.style.removeProperty("overflow-"+S.a));else if(f&&ie()&&!E)for(me=f.parentNode;me&&me!==Mt;)me._pinOffset&&(Te-=me._pinOffset,_e-=me._pinOffset),me=me.parentNode;ln&&ln.forEach(function(dt){return dt.revert(!1,!0)}),P.start=Te,P.end=_e,Xe=Ee=mn?Ne:ie(),!E&&!mn&&(Xe<Ne&&ie(Ne),P.scroll.rec=0),P.revert(!1,!0),ne=rn(),oe&&(j=-1,oe.restart(!0)),nn=0,i&&N&&(i._initted||Ge)&&i.progress()!==Ge&&i.progress(Ge||0,!0).render(i.time(),!0,!0),(Vt||he!==P.progress||E||g)&&(i&&!N&&i.totalProgress(E&&Te<-.001&&!he?ye.utils.normalize(Te,_e,0):he,!0),P.progress=Vt||(Xe-Te)/X===he?0:he),p&&v&&(ge._pinOffset=Math.round(P.progress*Se)),D&&D.invalidate(),isNaN(ze)||(ze-=ye.getProperty(H,S.p),oi-=ye.getProperty(et,S.p),xa(H,S,ze),xa(Oe,S,ze-(ke||0)),xa(et,S,oi),xa(Pe,S,oi-(ke||0))),Vt&&!mn&&P.update(),h&&!mn&&!A&&(A=!0,h(P),A=!1)}},P.getVelocity=function(){return(ie()-Ee)/(rn()-To)*1e3||0},P.endAnimation=function(){ho(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?N||ho(i,P.direction<0,1):ho(i,i.reversed()))},P.labelToScroll=function(le){return i&&i.labels&&(Te||P.refresh()||Te)+i.labels[le]/i.duration()*X||0},P.getTrailing=function(le){var Ue=it.indexOf(P),be=P.direction>0?it.slice(0,Ue).reverse():it.slice(Ue+1);return(Dn(le)?be.filter(function(ke){return ke.vars.preventOverlaps===le}):be).filter(function(ke){return P.direction>0?ke.end<=Te:ke.start>=_e})},P.update=function(le,Ue,be){if(!(E&&!be&&!le)){var ke=mn===!0?Ne:P.scroll(),wt=le?0:(ke-Te)/X,nt=wt<0?0:wt>1?1:wt||0,Et=P.progress,Vt,Tt,xt,C,F,V,G,Y;if(Ue&&(Ee=Xe,Xe=E?ie():ke,y&&(T=Be,Be=i&&!N?i.totalProgress():nt)),m&&p&&!nn&&!da&&$n&&(!nt&&Te<ke+(ke-Ee)/(rn()-To)*m?nt=1e-4:nt===1&&_e>ke+(ke-Ee)/(rn()-To)*m&&(nt=.9999)),nt!==Et&&P.enabled){if(Vt=P.isActive=!!nt&&nt<1,Tt=!!Et&&Et<1,V=Vt!==Tt,F=V||!!nt!=!!Et,P.direction=nt>Et?1:-1,P.progress=nt,F&&!nn&&(xt=nt&&!Et?0:nt===1?1:Et===1?2:3,N&&(C=!V&&$[xt+1]!=="none"&&$[xt+1]||$[xt],Y=i&&(C==="complete"||C==="reset"||C in i))),M&&(V||Y)&&(Y||d||!i)&&(xn(M)?M(P):P.getTrailing(M).forEach(function(Ce){return Ce.endAnimation()})),N||(D&&!nn&&!da?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",nt,i._tTime/i._tDur):(D.vars.totalProgress=nt,D.invalidate().restart())):i&&i.totalProgress(nt,!!(nn&&(ne||le)))),p){if(le&&v&&(ge.style[v+S.os2]=qe),!q)Le(Ao(se+Se*nt));else if(F){if(G=!le&&nt>Et&&_e+1>ke&&ke+1>=pi(O,S),w)if(!le&&(Vt||G)){var ae=Oi(p,!0),de=ke-Te;Vh(p,Mt,ae.top+(S===kt?de:0)+Bt,ae.left+(S===kt?0:de)+Bt)}else Vh(p,ge);Fs(Vt||G?ee:te),Fe&&nt<1&&Vt||Le(se+(nt===1&&!G?Se:0))}}y&&!De.tween&&!nn&&!da&&oe.restart(!0),a&&(V||x&&nt&&(nt<1||!Zl))&&Qo(a.targets).forEach(function(Ce){return Ce.classList[Vt||x?"add":"remove"](a.className)}),o&&!N&&!le&&o(P),F&&!nn?(N&&(Y&&(C==="complete"?i.pause().totalProgress(1):C==="reset"?i.restart(!0).pause():C==="restart"?i.restart(!0):i[C]()),o&&o(P)),(V||!Zl)&&(u&&V&&Ql(P,u),K[xt]&&Ql(P,K[xt]),x&&(nt===1?P.kill(!1,1):K[xt]=0),V||(xt=nt===1?1:3,K[xt]&&Ql(P,K[xt]))),R&&!Vt&&Math.abs(P.getVelocity())>(wo(R)?R:2500)&&(ho(P.callbackAnimation),D?D.progress(1):ho(i,C==="reverse"?1:!nt,1))):N&&o&&!nn&&o(P)}if(We){var me=E?ke/E.duration()*(E._caScrollDist||0):ke;xe(me+(H._isFlipped?1:0)),We(me)}ht&&ht(-ke/E.duration()*(E._caScrollDist||0))}},P.enable=function(le,Ue){P.enabled||(P.enabled=!0,Xt(O,"resize",Co),z||Xt(O,"scroll",ss),ce&&Xt(s,"refreshInit",ce),le!==!1&&(P.progress=he=0,Xe=Ee=j=ie()),Ue!==!1&&P.refresh())},P.getTween=function(le){return le&&De?De.tween:D},P.setPositions=function(le,Ue,be,ke){if(E){var wt=E.scrollTrigger,nt=E.duration(),Et=wt.end-wt.start;le=wt.start+Et*le/nt,Ue=wt.start+Et*Ue/nt}P.refresh(!1,!1,{start:Dh(le,be&&!!P._startClamp),end:Dh(Ue,be&&!!P._endClamp)},ke),P.update()},P.adjustPinSpacing=function(le){if(ve&&le){var Ue=ve.indexOf(S.d)+1;ve[Ue]=parseFloat(ve[Ue])+le+Bt,ve[1]=parseFloat(ve[1])+le+Bt,Fs(ve)}},P.disable=function(le,Ue){if(P.enabled&&(le!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ue||D&&D.pause(),Ne=0,Re&&(Re.uncache=1),ce&&Wt(s,"refreshInit",ce),oe&&(oe.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!z)){for(var be=it.length;be--;)if(it[be].scroller===O&&it[be]!==P)return;Wt(O,"resize",Co),z||Wt(O,"scroll",ss)}},P.kill=function(le,Ue){P.disable(le,Ue),D&&!Ue&&D.kill(),c&&delete hu[c];var be=it.indexOf(P);be>=0&&it.splice(be,1),be===pn&&il>0&&pn--,be=0,it.forEach(function(ke){return ke.scroller===P.scroller&&(be=1)}),be||mn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Ue||i.kill()),Oe&&[Oe,Pe,H,et].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Vo===P&&(Vo=0),p&&(Re&&(Re.uncache=1),be=0,it.forEach(function(ke){return ke.pin===p&&be++}),be||(Re.spacer=0)),n.onKill&&n.onKill(P)},it.push(P),P.enable(!1,!1),gt&&gt(P),i&&i.add&&!X){var Ze=P.update;P.update=function(){P.update=Ze,Te||_e||P.refresh()},ye.delayedCall(.01,P.update),X=.01,Te=_e=0}else P.refresh();p&&I_()},s.register=function(n){return As||(ye=n||sm(),rm()&&window.document&&s.enable(),As=bo),As},s.defaults=function(n){if(n)for(var i in n)ga[i]=n[i];return ga},s.disable=function(n,i){bo=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),Wt(at,"wheel",ss),Wt(Ct,"scroll",ss),clearInterval(ha),Wt(Ct,"touchcancel",li),Wt(Mt,"touchstart",li),pa(Wt,Ct,"pointerdown,touchstart,mousedown",Nh),pa(Wt,Ct,"pointerup,touchend,mouseup",Oh),gl.kill(),fa(Wt);for(var r=0;r<rt.length;r+=3)ma(Wt,rt[r],rt[r+1]),ma(Wt,rt[r],rt[r+2])},s.enable=function(){if(at=window,Ct=document,ni=Ct.documentElement,Mt=Ct.body,ye&&(Qo=ye.utils.toArray,Fo=ye.utils.clamp,cu=ye.core.context||li,$l=ye.core.suppressOverwrites||li,Gu=at.history.scrollRestoration||"auto",du=at.pageYOffset,ye.core.globals("ScrollTrigger",s),Mt)){bo=1,Us=document.createElement("div"),Us.style.height="100vh",Us.style.position="absolute",pm(),b_(),Dt.register(ye),s.isTouch=Dt.isTouch,Qi=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lu=Dt.isTouch===1,Xt(at,"wheel",ss),Qp=[at,Ct,ni,Mt],ye.matchMedia?(s.matchMedia=function(c){var u=ye.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ye.addEventListener("matchMediaInit",function(){return Ku()}),ye.addEventListener("matchMediaRevert",function(){return dm()}),ye.addEventListener("matchMedia",function(){Br(0,1),Jr("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return ec(),ec})):console.warn("Requires GSAP 3.11.0 or later"),ec(),Xt(Ct,"scroll",ss);var n=Mt.style,i=n.borderTopStyle,r=ye.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Oi(Mt),kt.m=Math.round(o.top+kt.sc())||0,vn.m=Math.round(o.left+vn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ha=setInterval(Bh,250),ye.delayedCall(.5,function(){return da=0}),Xt(Ct,"touchcancel",li),Xt(Mt,"touchstart",li),pa(Xt,Ct,"pointerdown,touchstart,mousedown",Nh),pa(Xt,Ct,"pointerup,touchend,mouseup",Oh),au=ye.utils.checkPrefix("transform"),rl.push(au),As=rn(),gl=ye.delayedCall(.2,Br).pause(),ws=[Ct,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;Ct.hidden?(Ph=c,Lh=u):(Ph!==c||Lh!==u)&&Co()},Ct,"DOMContentLoaded",Br,at,"load",Br,at,"resize",Co],fa(Xt),it.forEach(function(c){return c.enable(0,1)}),a=0;a<rt.length;a+=3)ma(Wt,rt[a],rt[a+1]),ma(Wt,rt[a],rt[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Zl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ha)||(ha=i)&&setInterval(Bh,i),"ignoreMobileResize"in n&&(lu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(fa(Wt)||fa(Xt,n.autoRefreshEvents||"none"),tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Mn(n),o=rt.indexOf(r),a=$r(r);~o&&rt.splice(o,a?6:2),i&&(a?_i.unshift(at,i,Mt,i,ni,i):_i.unshift(r,i))},s.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Dn(n)?Mn(n):n).getBoundingClientRect(),a=o[r?Xr:Yr]*i||0;return r?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},s.positionInViewport=function(n,i,r){Dn(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[r?Xr:Yr],c=i==null?a/2:i in xl?xl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+c)/at.innerWidth:(o.top+c)/at.innerHeight},s.killAll=function(n){if(it.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Zr.killAll||[];Zr={},i.forEach(function(r){return r()})}},s}();ct.version="3.12.5";ct.saveStyles=function(s){return s?Qo(s).forEach(function(e){if(e&&e.style){var t=In.indexOf(e);t>=0&&In.splice(t,5),In.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),cu())}}):In};ct.revert=function(s,e){return Ku(!s,e)};ct.create=function(s,e){return new ct(s,e)};ct.refresh=function(s){return s?Co():(As||ct.register())&&Br(!0)};ct.update=function(s){return++rt.cache&&ki(s===!0?2:0)};ct.clearScrollMemory=fm;ct.maxScroll=function(s,e){return pi(s,e?vn:kt)};ct.getScrollFunc=function(s,e){return _r(Mn(s),e?vn:kt)};ct.getById=function(s){return hu[s]};ct.getAll=function(){return it.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!$n};ct.snapDirectional=ju;ct.addEventListener=function(s,e){var t=Zr[s]||(Zr[s]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(s,e){var t=Zr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(u,h){var d=[],f=[],p=ye.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(v){d.length||p.restart(!0),d.push(v.trigger),f.push(v),r<=d.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&xn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return xn(r)&&(r=r(),Xt(ct,"refresh",function(){return r=e.batchMax()})),Qo(s).forEach(function(c){var u={};for(a in n)u[a]=n[a];u.trigger=c,t.push(ct.create(u))}),t};var Wh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nc=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===ni&&s(Mt,t)},ya={auto:1,scroll:1},F_=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||ye.core.getCache(r),a=rn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Mt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ya[(c=qn(r)).overflowY]||ya[c.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!$r(r)&&(ya[(c=qn(r)).overflowY]||ya[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},gm=function(e,t,n,i){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&F_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Xt(Ct,Dt.eventTypes[0],Yh,!1,!0)},onDisable:function(){return Wt(Ct,Dt.eventTypes[0],Yh,!0)}})},B_=/(input|label|select|textarea)/i,Xh,Yh=function(e){var t=B_.test(e.target.tagName);(t||Xh)&&(e._gsapAllow=!0,Xh=t)},k_=function(e){Dr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,c,u=Mn(e.target)||ni,h=ye.core.globals().ScrollSmoother,d=h&&h.get(),f=Qi&&(e.content&&Mn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=_r(u,kt),v=_r(u,vn),g=1,m=(Dt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,l=0,_=xn(i)?function(){return i(a)}:function(){return i||2.8},x,y,w=gm(u,e.type,!0,r),b=function(){return y=!1},E=li,R=li,M=function(){c=pi(u,kt),R=Fo(Qi?1:0,c),n&&(E=Fo(0,pi(u,vn))),x=qr},S=function(){f._gsap.y=Ao(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},N=function(){if(y){requestAnimationFrame(b);var B=Ao(a.deltaY/2),J=R(p.v-B);if(f&&J!==p.v+p.offset){p.offset=J-p.v;var P=Ao((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=rt.cache,ki()}return!0}p.offset&&S(),y=!0},O,I,z,q,K=function(){M(),O.isActive()&&O.vars.scrollY>c&&(p()>c?O.progress(1)&&p(c):O.resetTo("scrollY",c))};return f&&ye.set(f,{y:"+=0"}),e.ignoreCheck=function($){return Qi&&$.type==="touchmove"&&N()||g>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){y=!1;var $=g;g=Ao((at.visualViewport&&at.visualViewport.scale||1)/m),O.pause(),$!==g&&nc(u,g>1.01?!0:n?!1:"x"),I=v(),z=p(),M(),x=qr},e.onRelease=e.onGestureStart=function($,B){if(p.offset&&S(),!B)q.restart(!0);else{rt.cache++;var J=_(),P,ce;n&&(P=v(),ce=P+J*.05*-$.velocityX/.227,J*=Wh(v,P,ce,pi(u,vn)),O.vars.scrollX=E(ce)),P=p(),ce=P+J*.05*-$.velocityY/.227,J*=Wh(p,P,ce,pi(u,kt)),O.vars.scrollY=R(ce),O.invalidate().duration(J).play(.01),(Qi&&O.vars.scrollY>=c||P>=c-1)&&ye.to({},{onUpdate:K,duration:J})}o&&o($)},e.onWheel=function(){O._ts&&O.pause(),rn()-l>1e3&&(x=0,l=rn())},e.onChange=function($,B,J,P,ce){if(qr!==x&&M(),B&&n&&v(E(P[2]===B?I+($.startX-$.x):v()+B-P[1])),J){p.offset&&S();var Ie=ce[2]===J,je=Ie?z+$.startY-$.y:p()+J-ce[1],j=R(je);Ie&&je!==j&&(z+=j-je),p(j)}(J||B)&&ki()},e.onEnable=function(){nc(u,n?!1:"x"),ct.addEventListener("refresh",K),Xt(at,"resize",K),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=v.smooth=!1),w.enable()},e.onDisable=function(){nc(u,!0),Wt(at,"resize",K),ct.removeEventListener("refresh",K),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Dt(e),a.iOS=Qi,Qi&&!p()&&p(1),Qi&&ye.ticker.add(li),q=a._dc,O=ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mm(p,p(),function(){return O.pause()})},onUpdate:ki,onComplete:q.vars.onComplete}),a};ct.sort=function(s){return it.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ct.observe=function(s){return new Dt(s)};ct.normalizeScroll=function(s){if(typeof s>"u")return fn;if(s===!0&&fn)return fn.enable();if(s===!1){fn&&fn.kill(),fn=s;return}var e=s instanceof Dt?s:k_(s);return fn&&fn.target===e.target&&fn.kill(),$r(e.target)&&(fn=e),e};ct.core={_getVelocityProp:ou,_inputObserver:gm,_scrollers:rt,_proxies:_i,bridge:{ss:function(){$n||Jr("scrollStart"),$n=rn()},ref:function(){return nn}}};sm()&&ye.registerPlugin(ct);var z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _m={};/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.3
*/(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;function e(g){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},e(g)}function t(g,m){var l=typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(!l){if(Array.isArray(g)||(l=r(g))||m&&g&&typeof g.length=="number"){l&&(g=l);var _=0,x=function(){};return{s:x,n:function(){return _>=g.length?{done:!0}:{done:!1,value:g[_++]}},e:function(R){throw R},f:x}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=!0,w=!1,b;return{s:function(){l=l.call(g)},n:function(){var R=l.next();return y=R.done,R},e:function(R){w=!0,b=R},f:function(){try{!y&&l.return!=null&&l.return()}finally{if(w)throw b}}}}function n(g){return a(g)||o(g)||r(g)||i()}function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(g,m){if(g){if(typeof g=="string")return c(g,m);var l=Object.prototype.toString.call(g).slice(8,-1);if(l==="Object"&&g.constructor&&(l=g.constructor.name),l==="Map"||l==="Set")return Array.from(g);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(g,m)}}function o(g){if(typeof Symbol<"u"&&g[Symbol.iterator]!=null||g["@@iterator"]!=null)return Array.from(g)}function a(g){if(Array.isArray(g))return c(g)}function c(g,m){(m==null||m>g.length)&&(m=g.length);for(var l=0,_=new Array(m);l<m;l++)_[l]=g[l];return _}function u(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}function h(g,m){for(var l=0;l<m.length;l++){var _=m[l];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(g,_.key,_)}}function d(g,m,l){return m&&h(g.prototype,m),l&&h(g,l),Object.defineProperty(g,"prototype",{writable:!1}),g}function f(g,m,l){return m in g?Object.defineProperty(g,m,{value:l,enumerable:!0,configurable:!0,writable:!0}):g[m]=l,g}var p=function(){function g(m,l){var _=this;if(u(this,g),f(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",captionHTML:!0,close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp|avif",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5,download:!1}),f(this,"transitionPrefix",void 0),f(this,"isPassiveEventsSupported",void 0),f(this,"transitionCapable",!1),f(this,"isTouchDevice","ontouchstart"in window),f(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),f(this,"initialLocationHash",void 0),f(this,"pushStateSupport","pushState"in history),f(this,"isOpen",!1),f(this,"isAnimating",!1),f(this,"isClosing",!1),f(this,"isFadeIn",!1),f(this,"urlChangedOnce",!1),f(this,"hashReseted",!1),f(this,"historyHasChanges",!1),f(this,"historyUpdateTimeout",null),f(this,"currentImage",void 0),f(this,"eventNamespace","simplelightbox"),f(this,"domNodes",{}),f(this,"loadedImages",[]),f(this,"initialImageIndex",0),f(this,"currentImageIndex",0),f(this,"initialSelector",null),f(this,"globalScrollbarWidth",0),f(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,l),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),typeof m=="string"?(this.initialSelector=m,this.elements=Array.from(document.querySelectorAll(m))):this.elements=typeof m.length<"u"&&m.length>0?Array.from(m):[m],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=this.transitionPrefix!==!1,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var x=[];this.elements=Array.from(this.elements).filter(function(y){var w=y.getAttribute(_.options.sourceAttr);return x.indexOf(w)===-1?(x.push(w),!0):!1})}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,function(y){if(_.isValidLink(y.currentTarget)){if(y.preventDefault(),_.isAnimating)return!1;_.initialImageIndex=_.elements.indexOf(y.currentTarget),_.openImage(y.currentTarget)}}),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],function(y){_.isOpen&&y.target===y.currentTarget&&_.close()}),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,function(y){y.target.parentElement.classList.contains("sl-image")&&y.preventDefault()}),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle(function(y){if(_.controlCoordinates.swipeDiff=0,_.isAnimating&&y.key==="Escape"){_.currentImage.setAttribute("src",""),_.isAnimating=!1,_.close();return}_.isOpen&&(y.preventDefault(),y.key==="Escape"&&_.close(),!_.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(y.key)>-1&&_.loadImage(y.key==="ArrowRight"?1:-1))},this.options.throttleInterval)),this.addEvents()}return d(g,[{key:"checkPassiveEventsSupport",value:function(){var l=!1;try{var _=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("testPassive",null,_),window.removeEventListener("testPassive",null,_)}catch{}return l}},{key:"getCaptionElement",value:function(l){if(this.options.captionSelector.startsWith("+")){var _=this.options.captionSelector.replace(/^\+/,"").trimStart(),x=l.nextElementSibling;return x&&x.matches(_)?x:!1}else if(this.options.captionSelector.startsWith(">")){var y=this.options.captionSelector.replace(/^>/,"").trimStart();return l.querySelector(y)}else return l.querySelector(this.options.captionSelector)}},{key:"generateQuerySelector",value:function(l){var _=l.tagName,x=l.id,y=l.className,w=l.parentNode;if(_==="HTML")return"HTML";var b=_;if(b+=x!==""?"#".concat(x):"",y)for(var E=y.trim().split(/\s/),R=0;R<E.length;R++)b+=".".concat(E[R]);for(var M=1,S=l;S.previousElementSibling;S=S.previousElementSibling)M+=1;return b+=":nth-child(".concat(M,")"),"".concat(this.generateQuerySelector(w)," > ").concat(b)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.download=document.createElement("div"),this.domNodes.download.classList.add("sl-download"),this.domNodes.downloadLink=document.createElement("a"),this.domNodes.downloadLink.setAttribute("download",""),this.domNodes.downloadLink.textContent=this.options.download,this.domNodes.download.appendChild(this.domNodes.downloadLink),this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var l,_=this.options.captionClass.split(/[\s,]+/);(l=this.domNodes.caption.classList).add.apply(l,n(_))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(l,_){var x;return function(){x||(l.apply(this,arguments),x=!0,setTimeout(function(){return x=!1},_))}}},{key:"isValidLink",value:function(l){return!this.options.fileExt||l.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")($|\\?.*$)","i").test(l.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var l=(document.body||document.documentElement).style;return"transition"in l?"":"WebkitTransition"in l?"-webkit-":"MozTransition"in l?"-moz-":"OTransition"in l?"-o":!1}},{key:"getScrollbarWidth",value:function(){var l=0,_=document.createElement("div");return _.classList.add("sl-scrollbar-measure"),document.body.appendChild(_),l=_.offsetWidth-_.clientWidth,document.body.removeChild(_),l}},{key:"toggleScrollbar",value:function(l){var _=0,x=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if(l==="hide"){var y=window.innerWidth;if(!y){var w=document.documentElement.getBoundingClientRect();y=w.right-Math.abs(w.left)}if(document.body.clientWidth<y||this.isAppleDevice){var b=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);_=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=b,(_>0||_==0&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=b+_+"px",x.forEach(function(E){var R=E.style.paddingRight,M=window.getComputedStyle(E)["padding-right"];E.dataset.originalPaddingRight=R,E.style.paddingRight="".concat(parseFloat(M)+_,"px")}))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",x.forEach(function(E){var R=E.dataset.originalPaddingRight;typeof R<"u"&&(E.style.paddingRight=R)});return _}},{key:"close",value:function(){var l=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var _=this.relatedElements[this.currentImageIndex];_.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,function(){l.options.disableScroll&&l.toggleScrollbar("show"),l.options.htmlClass&&l.options.htmlClass!==""&&document.querySelector("html").classList.remove(l.options.htmlClass),document.body.removeChild(l.domNodes.wrapper),l.options.overlay&&document.body.removeChild(l.domNodes.overlay),l.domNodes.additionalHtml=null,l.domNodes.download=null,_.dispatchEvent(new Event("closed.simplelightbox")),l.isClosing=!1}),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1;for(var x in this.controlCoordinates)this.controlCoordinates[x]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var l=this,_=this.currentImageIndex,x=this.relatedElements.length,y=_+1<0?x-1:_+1>=x-1?0:_+1,w=_-1<0?x-1:_-1>=x-1?0:_-1,b=new Image,E=new Image;b.addEventListener("load",function(R){var M=R.target.getAttribute("src");l.loadedImages.indexOf(M)===-1&&l.loadedImages.push(M),l.relatedElements[_].dispatchEvent(new Event("nextImageLoaded."+l.eventNamespace))}),b.setAttribute("src",this.relatedElements[y].getAttribute(this.options.sourceAttr)),E.addEventListener("load",function(R){var M=R.target.getAttribute("src");l.loadedImages.indexOf(M)===-1&&l.loadedImages.push(M),l.relatedElements[_].dispatchEvent(new Event("prevImageLoaded."+l.eventNamespace))}),E.setAttribute("src",this.relatedElements[w].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(l){var _=this,x=l;this.options.rtl&&(l=-l),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((l===1?"next":"prev")+"."+this.eventNamespace));var y=this.currentImageIndex+l;if(this.isAnimating||(y<0||y>=this.relatedElements.length)&&this.options.loop===!1)return!1;this.currentImageIndex=y<0?this.relatedElements.length-1:y>this.relatedElements.length-1?0:y,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*x-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,function(){_.isAnimating=!0,_.isClosing?_.isAnimating=!1:setTimeout(function(){var w=_.relatedElements[_.currentImageIndex];_.currentImage&&(_.currentImage.setAttribute("src",w.getAttribute(_.options.sourceAttr)),_.loadedImages.indexOf(w.getAttribute(_.options.sourceAttr))===-1&&_.show(_.domNodes.spinner),_.domNodes.image.contains(_.domNodes.caption)&&_.domNodes.image.removeChild(_.domNodes.caption),_.adjustImage(x),_.options.preloading&&_.preload())},100)})}},{key:"adjustImage",value:function(l){var _=this;if(!this.currentImage)return!1;var x=new Image,y=window.innerWidth*this.options.widthRatio,w=window.innerHeight*this.options.heightRatio;x.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),x.addEventListener("error",function(b){_.relatedElements[_.currentImageIndex].dispatchEvent(new Event("error."+_.eventNamespace)),_.isAnimating=!1,_.isOpen=!0,_.domNodes.spinner.style.display="none";var E=l===1||l===-1;if(_.initialImageIndex===_.currentImageIndex&&E)return _.close();_.options.alertError&&alert(_.options.alertErrorMessage),_.loadImage(E?l:1)}),x.addEventListener("load",function(b){typeof l<"u"&&(_.relatedElements[_.currentImageIndex].dispatchEvent(new Event("changed."+_.eventNamespace)),_.relatedElements[_.currentImageIndex].dispatchEvent(new Event((l===1?"nextDone":"prevDone")+"."+_.eventNamespace))),_.options.history&&_.updateURL(),_.loadedImages.indexOf(_.currentImage.getAttribute("src"))===-1&&_.loadedImages.push(_.currentImage.getAttribute("src"));var E=b.target.width,R=b.target.height;if(_.options.scaleImageToRatio||E>y||R>w){var M=E/R>y/w?E/y:R/w;E/=M,R/=M}_.domNodes.image.style.top=(window.innerHeight-R)/2+"px",_.domNodes.image.style.left=(window.innerWidth-E-_.globalScrollbarWidth)/2+"px",_.domNodes.image.style.width=E+"px",_.domNodes.image.style.height=R+"px",_.domNodes.spinner.style.display="none",_.options.focus&&_.forceFocus(),_.fadeIn(_.currentImage,_.options.fadeSpeed,function(){_.options.focus&&_.domNodes.wrapper.focus()}),_.isOpen=!0;var S,N;typeof _.options.captionSelector=="string"?S=_.options.captionSelector==="self"?_.relatedElements[_.currentImageIndex]:_.getCaptionElement(_.relatedElements[_.currentImageIndex]):typeof _.options.captionSelector=="function"&&(S=_.options.captionSelector(_.relatedElements[_.currentImageIndex])),_.options.captions&&S&&(_.options.captionType==="data"?N=S.dataset[_.options.captionsData]:_.options.captionType==="text"?N=S.innerHTML:N=S.getAttribute(_.options.captionsData)),_.options.loop?_.relatedElements.length===1?_.hide(_.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):_.show(_.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(_.currentImageIndex===0&&_.hide(_.domNodes.navigation.querySelector(".sl-prev")),_.currentImageIndex>=_.relatedElements.length-1&&_.hide(_.domNodes.navigation.querySelector(".sl-next")),_.currentImageIndex>0&&_.show(_.domNodes.navigation.querySelector(".sl-prev")),_.currentImageIndex<_.relatedElements.length-1&&_.show(_.domNodes.navigation.querySelector(".sl-next"))),l===1||l===-1?(_.options.animationSlide&&(_.slide(0,100*l+"px"),setTimeout(function(){_.slide(_.options.animationSpeed/1e3,"0px")},50)),_.fadeIn(_.domNodes.image,_.options.fadeSpeed,function(){_.isAnimating=!1,_.setCaption(N,E)})):(_.isAnimating=!1,_.setCaption(N,E)),_.options.additionalHtml&&!_.domNodes.additionalHtml&&(_.domNodes.additionalHtml=document.createElement("div"),_.domNodes.additionalHtml.classList.add("sl-additional-html"),_.domNodes.additionalHtml.innerHTML=_.options.additionalHtml,_.domNodes.image.appendChild(_.domNodes.additionalHtml)),_.options.download&&_.domNodes.downloadLink.setAttribute("href",_.currentImage.getAttribute("src"))})}},{key:"zoomPanElement",value:function(l,_,x){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+l+","+_+") scale("+x+")"}},{key:"minMax",value:function(l,_,x){return l<_?_:l>x?x:l}},{key:"setZoomData",value:function(l,_,x){this.currentImage.dataset.scale=l,this.currentImage.dataset.translateX=_,this.currentImage.dataset.translateY=x}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var l=this;if(this.addEventListener(window,"resize."+this.eventNamespace,function(x){l.isOpen&&l.adjustImage()}),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout(function(){l.addEventListener(window,"hashchange."+l.eventNamespace,function(x){l.isOpen&&l.hashchangeHandler()})},40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,function(x){if(!x.currentTarget.tagName.match(/button/i))return!0;x.preventDefault(),l.controlCoordinates.swipeDiff=0,l.loadImage(x.currentTarget.classList.contains("sl-next")?1:-1)}),this.options.scrollZoom){var _=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],function(x){if(l.controlCoordinates.mousedown||l.isAnimating||l.isClosing||!l.isOpen)return!0;l.controlCoordinates.containerHeight==0&&(l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY));var y=x.delta||x.wheelDelta;y===void 0&&(y=x.detail),y=Math.max(-1,Math.min(1,y)),_+=y*l.options.scrollZoomFactor*_,_=Math.max(1,Math.min(l.options.maxZoom,_)),l.controlCoordinates.targetScale=_;var w=document.documentElement.scrollTop||document.body.scrollTop;l.controlCoordinates.pinchOffsetX=x.pageX,l.controlCoordinates.pinchOffsetY=x.pageY-w||0,l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.scaleDifference=l.controlCoordinates.targetScale-l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.initialOffsetX-(l.controlCoordinates.pinchOffsetX-l.controlCoordinates.containerOffsetX-l.controlCoordinates.containerWidth/2-l.controlCoordinates.initialOffsetX)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.initialOffsetY-(l.controlCoordinates.pinchOffsetY-l.controlCoordinates.containerOffsetY-l.controlCoordinates.containerHeight/2-l.controlCoordinates.initialOffsetY)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale),l.controlCoordinates.targetScale>1?(l.controlCoordinates.zoomed=!0,(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed)):(l.controlCoordinates.initialScale===1&&(l.controlCoordinates.zoomed=!1,l.domNodes.caption.style.display==="none"&&l.fadeIn(l.domNodes.caption,l.options.fadeSpeed)),l.controlCoordinates.initialPinchDistance=null,l.controlCoordinates.capture=!1),l.controlCoordinates.initialPinchDistance=l.controlCoordinates.targetPinchDistance,l.controlCoordinates.initialScale=l.controlCoordinates.targetScale,l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY,l.setZoomData(l.controlCoordinates.targetScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale)})}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],function(x){if(x.target.tagName==="A"&&x.type==="touchstart")return!0;if(x.type==="mousedown")x.preventDefault(),l.controlCoordinates.initialPointerOffsetX=x.clientX,l.controlCoordinates.initialPointerOffsetY=x.clientY,l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY),l.controlCoordinates.capture=!0;else{if(l.controlCoordinates.touchCount=x.touches.length,l.controlCoordinates.initialPointerOffsetX=x.touches[0].clientX,l.controlCoordinates.initialPointerOffsetY=x.touches[0].clientY,l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.controlCoordinates.touchCount===1){if(!l.controlCoordinates.doubleTapped)l.controlCoordinates.doubleTapped=!0,setTimeout(function(){l.controlCoordinates.doubleTapped=!1},300);else return l.currentImage.classList.add("sl-transition"),l.controlCoordinates.zoomed?(l.controlCoordinates.initialScale=1,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),l.controlCoordinates.zoomed=!1):(l.controlCoordinates.initialScale=l.options.doubleTapZoom,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed),l.controlCoordinates.zoomed=!0),setTimeout(function(){l.currentImage&&l.currentImage.classList.remove("sl-transition")},200),!1;l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY)}else l.controlCoordinates.touchCount===2&&(l.controlCoordinates.initialPointerOffsetX2=x.touches[1].clientX,l.controlCoordinates.initialPointerOffsetY2=x.touches[1].clientY,l.controlCoordinates.initialOffsetX=parseFloat(l.currentImage.dataset.translateX),l.controlCoordinates.initialOffsetY=parseFloat(l.currentImage.dataset.translateY),l.controlCoordinates.pinchOffsetX=(l.controlCoordinates.initialPointerOffsetX+l.controlCoordinates.initialPointerOffsetX2)/2,l.controlCoordinates.pinchOffsetY=(l.controlCoordinates.initialPointerOffsetY+l.controlCoordinates.initialPointerOffsetY2)/2,l.controlCoordinates.initialPinchDistance=Math.sqrt((l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialPointerOffsetX2)*(l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialPointerOffsetX2)+(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialPointerOffsetY2)*(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialPointerOffsetY2)));l.controlCoordinates.capture=!0}return l.controlCoordinates.mousedown?!0:(l.transitionCapable&&(l.controlCoordinates.imageLeft=parseInt(l.domNodes.image.style.left,10)),l.controlCoordinates.mousedown=!0,l.controlCoordinates.swipeDiff=0,l.controlCoordinates.swipeYDiff=0,l.controlCoordinates.swipeStart=x.pageX||x.touches[0].pageX,l.controlCoordinates.swipeYStart=x.pageY||x.touches[0].pageY,!1)}),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],function(x){if(!l.controlCoordinates.mousedown)return!0;if(x.type==="touchmove"){if(l.controlCoordinates.capture===!1)return!1;l.controlCoordinates.pointerOffsetX=x.touches[0].clientX,l.controlCoordinates.pointerOffsetY=x.touches[0].clientY,l.controlCoordinates.touchCount=x.touches.length,l.controlCoordinates.touchmoveCount++,l.controlCoordinates.touchCount>1?(l.controlCoordinates.pointerOffsetX2=x.touches[1].clientX,l.controlCoordinates.pointerOffsetY2=x.touches[1].clientY,l.controlCoordinates.targetPinchDistance=Math.sqrt((l.controlCoordinates.pointerOffsetX-l.controlCoordinates.pointerOffsetX2)*(l.controlCoordinates.pointerOffsetX-l.controlCoordinates.pointerOffsetX2)+(l.controlCoordinates.pointerOffsetY-l.controlCoordinates.pointerOffsetY2)*(l.controlCoordinates.pointerOffsetY-l.controlCoordinates.pointerOffsetY2)),l.controlCoordinates.initialPinchDistance===null&&(l.controlCoordinates.initialPinchDistance=l.controlCoordinates.targetPinchDistance),Math.abs(l.controlCoordinates.initialPinchDistance-l.controlCoordinates.targetPinchDistance)>=1&&(l.controlCoordinates.targetScale=l.minMax(l.controlCoordinates.targetPinchDistance/l.controlCoordinates.initialPinchDistance*l.controlCoordinates.initialScale,1,l.options.maxZoom),l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.scaleDifference=l.controlCoordinates.targetScale-l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.initialOffsetX-(l.controlCoordinates.pinchOffsetX-l.controlCoordinates.containerOffsetX-l.controlCoordinates.containerWidth/2-l.controlCoordinates.initialOffsetX)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.initialOffsetY-(l.controlCoordinates.pinchOffsetY-l.controlCoordinates.containerOffsetY-l.controlCoordinates.containerHeight/2-l.controlCoordinates.initialOffsetY)/(l.controlCoordinates.targetScale-l.controlCoordinates.scaleDifference)*l.controlCoordinates.scaleDifference,l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale),l.controlCoordinates.targetScale>1&&(l.controlCoordinates.zoomed=!0,(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed)),l.controlCoordinates.initialPinchDistance=l.controlCoordinates.targetPinchDistance,l.controlCoordinates.initialScale=l.controlCoordinates.targetScale,l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY)):(l.controlCoordinates.targetScale=l.controlCoordinates.initialScale,l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.pointerOffsetX-(l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialOffsetX),l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.pointerOffsetY-(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialOffsetY),l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),Math.abs(l.controlCoordinates.targetOffsetX)===Math.abs(l.controlCoordinates.limitOffsetX)&&(l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialPointerOffsetX=l.controlCoordinates.pointerOffsetX),Math.abs(l.controlCoordinates.targetOffsetY)===Math.abs(l.controlCoordinates.limitOffsetY)&&(l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY,l.controlCoordinates.initialPointerOffsetY=l.controlCoordinates.pointerOffsetY),l.setZoomData(l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale))}if(x.type==="mousemove"&&l.controlCoordinates.mousedown){if(x.type=="touchmove")return!0;if(x.preventDefault(),l.controlCoordinates.capture===!1)return!1;l.controlCoordinates.pointerOffsetX=x.clientX,l.controlCoordinates.pointerOffsetY=x.clientY,l.controlCoordinates.targetScale=l.controlCoordinates.initialScale,l.controlCoordinates.limitOffsetX=(l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale-l.controlCoordinates.containerWidth)/2,l.controlCoordinates.limitOffsetY=(l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale-l.controlCoordinates.containerHeight)/2,l.controlCoordinates.targetOffsetX=l.controlCoordinates.imgWidth*l.controlCoordinates.targetScale<=l.controlCoordinates.containerWidth?0:l.minMax(l.controlCoordinates.pointerOffsetX-(l.controlCoordinates.initialPointerOffsetX-l.controlCoordinates.initialOffsetX),l.controlCoordinates.limitOffsetX*-1,l.controlCoordinates.limitOffsetX),l.controlCoordinates.targetOffsetY=l.controlCoordinates.imgHeight*l.controlCoordinates.targetScale<=l.controlCoordinates.containerHeight?0:l.minMax(l.controlCoordinates.pointerOffsetY-(l.controlCoordinates.initialPointerOffsetY-l.controlCoordinates.initialOffsetY),l.controlCoordinates.limitOffsetY*-1,l.controlCoordinates.limitOffsetY),Math.abs(l.controlCoordinates.targetOffsetX)===Math.abs(l.controlCoordinates.limitOffsetX)&&(l.controlCoordinates.initialOffsetX=l.controlCoordinates.targetOffsetX,l.controlCoordinates.initialPointerOffsetX=l.controlCoordinates.pointerOffsetX),Math.abs(l.controlCoordinates.targetOffsetY)===Math.abs(l.controlCoordinates.limitOffsetY)&&(l.controlCoordinates.initialOffsetY=l.controlCoordinates.targetOffsetY,l.controlCoordinates.initialPointerOffsetY=l.controlCoordinates.pointerOffsetY),l.setZoomData(l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.zoomPanElement(l.controlCoordinates.targetOffsetX+"px",l.controlCoordinates.targetOffsetY+"px",l.controlCoordinates.targetScale)}l.controlCoordinates.zoomed||(l.controlCoordinates.swipeEnd=x.pageX||x.touches[0].pageX,l.controlCoordinates.swipeYEnd=x.pageY||x.touches[0].pageY,l.controlCoordinates.swipeDiff=l.controlCoordinates.swipeStart-l.controlCoordinates.swipeEnd,l.controlCoordinates.swipeYDiff=l.controlCoordinates.swipeYStart-l.controlCoordinates.swipeYEnd,l.options.animationSlide&&l.slide(0,-l.controlCoordinates.swipeDiff+"px"))}),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],function(x){if(l.isTouchDevice&&x.type==="touchend"&&(l.controlCoordinates.touchCount=x.touches.length,l.controlCoordinates.touchCount===0?(l.currentImage&&l.setZoomData(l.controlCoordinates.initialScale,l.controlCoordinates.targetOffsetX,l.controlCoordinates.targetOffsetY),l.controlCoordinates.initialScale===1&&(l.controlCoordinates.zoomed=!1,l.domNodes.caption.style.display==="none"&&l.fadeIn(l.domNodes.caption,l.options.fadeSpeed)),l.controlCoordinates.initialPinchDistance=null,l.controlCoordinates.capture=!1):l.controlCoordinates.touchCount===1?(l.controlCoordinates.initialPointerOffsetX=x.touches[0].clientX,l.controlCoordinates.initialPointerOffsetY=x.touches[0].clientY):l.controlCoordinates.touchCount>1&&(l.controlCoordinates.initialPinchDistance=null)),l.controlCoordinates.mousedown){l.controlCoordinates.mousedown=!1;var y=!0;l.options.loop||(l.currentImageIndex===0&&l.controlCoordinates.swipeDiff<0&&(y=!1),l.currentImageIndex>=l.relatedElements.length-1&&l.controlCoordinates.swipeDiff>0&&(y=!1)),Math.abs(l.controlCoordinates.swipeDiff)>l.options.swipeTolerance&&y?l.loadImage(l.controlCoordinates.swipeDiff>0?1:-1):l.options.animationSlide&&l.slide(l.options.animationSpeed/1e3,"0px"),l.options.swipeClose&&Math.abs(l.controlCoordinates.swipeYDiff)>50&&Math.abs(l.controlCoordinates.swipeDiff)<l.options.swipeTolerance&&l.close()}}),this.addEventListener(this.domNodes.image,["dblclick"],function(x){if(!l.isTouchDevice)return l.controlCoordinates.initialPointerOffsetX=x.clientX,l.controlCoordinates.initialPointerOffsetY=x.clientY,l.controlCoordinates.containerHeight=l.getDimensions(l.domNodes.image).height,l.controlCoordinates.containerWidth=l.getDimensions(l.domNodes.image).width,l.controlCoordinates.imgHeight=l.getDimensions(l.currentImage).height,l.controlCoordinates.imgWidth=l.getDimensions(l.currentImage).width,l.controlCoordinates.containerOffsetX=l.domNodes.image.offsetLeft,l.controlCoordinates.containerOffsetY=l.domNodes.image.offsetTop,l.currentImage.classList.add("sl-transition"),l.controlCoordinates.zoomed?(l.controlCoordinates.initialScale=1,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),l.controlCoordinates.zoomed=!1,l.domNodes.caption.style.display==="none"&&l.fadeIn(l.domNodes.caption,l.options.fadeSpeed)):(l.controlCoordinates.initialScale=l.options.doubleTapZoom,l.setZoomData(l.controlCoordinates.initialScale,0,0),l.zoomPanElement("0px","0px",l.controlCoordinates.initialScale),(!l.domNodes.caption.style.opacity||l.domNodes.caption.style.opacity>0)&&l.domNodes.caption.style.display!=="none"&&l.fadeOut(l.domNodes.caption,l.options.fadeSpeed),l.controlCoordinates.zoomed=!0),setTimeout(function(){l.currentImage&&(l.currentImage.classList.remove("sl-transition"),l.currentImage.style[l.transitionPrefix+"transform-origin"]=null)},200),l.controlCoordinates.capture=!0,!1})}},{key:"getDimensions",value:function(l){var _=window.getComputedStyle(l),x=l.offsetHeight,y=l.offsetWidth,w=parseFloat(_.borderTopWidth),b=parseFloat(_.borderBottomWidth),E=parseFloat(_.paddingTop),R=parseFloat(_.paddingBottom),M=parseFloat(_.borderLeftWidth),S=parseFloat(_.borderRightWidth),N=parseFloat(_.paddingLeft),O=parseFloat(_.paddingRight);return{height:x-b-w-E-R,width:y-M-S-N-O}}},{key:"updateHash",value:function(){var l="pid="+(this.currentImageIndex+1),_=window.location.href.split("#")[0]+"#"+l;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,_):this.historyHasChanges?window.location.replace(_):window.location.hash=l,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(l,_,x){var y=this;if(this.options.captions&&l&&l!==""&&typeof l<"u"){var w,b=!((w=x??this.options.captionHTML)!==null&&w!==void 0)||w?"innerHTML":"innerText";this.hide(this.domNodes.caption),this.domNodes.caption.style.width=_+"px",this.domNodes.caption[b]=l,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout(function(){y.fadeIn(y.domNodes.caption,y.options.fadeSpeed)},this.options.captionDelay)}}},{key:"slide",value:function(l,_){if(!this.transitionCapable)return this.domNodes.image.style.left=_;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+_+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+l+"s linear"}},{key:"getRelated",value:function(l){var _;return l&&l!==!1&&l!=="nofollow"?_=Array.from(this.elements).filter(function(x){return x.getAttribute("rel")===l}):_=this.elements,_}},{key:"openImage",value:function(l){var _=this;l.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&this.options.htmlClass!==""&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(l.rel),this.options.showCounter&&(this.relatedElements.length==1&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.options.download&&this.domNodes.download&&this.domNodes.wrapper.appendChild(this.domNodes.download),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(l);var x=l.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",x),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.loadedImages.indexOf(x)===-1&&this.loadedImages.push(x),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton,this.domNodes.download],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout(function(){l.dispatchEvent(new Event("shown."+_.eventNamespace))},this.options.animationSpeed)}},{key:"forceFocus",value:function(){var l=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,function(_){document!==_.target&&l.domNodes.wrapper!==_.target&&!l.domNodes.wrapper.contains(_.target)&&l.domNodes.wrapper.focus()})}},{key:"addEventListener",value:function(l,_,x,y){l=this.wrap(l),_=this.wrap(_);var w=t(l),b;try{for(w.s();!(b=w.n()).done;){var E=b.value;E.namespaces||(E.namespaces={});var R=t(_),M;try{for(R.s();!(M=R.n()).done;){var S=M.value,N=y||!1,O=["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(S.split(".")[0])>=0;O&&this.isPassiveEventsSupported&&(e(N)==="object"?N.passive=!0:N={passive:!0}),E.namespaces[S]=x,E.addEventListener(S.split(".")[0],x,N)}}catch(I){R.e(I)}finally{R.f()}}}catch(I){w.e(I)}finally{w.f()}}},{key:"removeEventListener",value:function(l,_){l=this.wrap(l),_=this.wrap(_);var x=t(l),y;try{for(x.s();!(y=x.n()).done;){var w=y.value,b=t(_),E;try{for(b.s();!(E=b.n()).done;){var R=E.value;w.namespaces&&w.namespaces[R]&&(w.removeEventListener(R.split(".")[0],w.namespaces[R]),delete w.namespaces[R])}}catch(M){b.e(M)}finally{b.f()}}}catch(M){x.e(M)}finally{x.f()}}},{key:"fadeOut",value:function(l,_,x){var y=this;l=this.wrap(l);var w=t(l),b;try{for(w.s();!(b=w.n()).done;){var E=b.value;E.style.opacity=parseFloat(E)||window.getComputedStyle(E).getPropertyValue("opacity")}}catch(S){w.e(S)}finally{w.f()}this.isFadeIn=!1;var R=16.66666/(_||this.options.fadeSpeed),M=function S(){var N=parseFloat(l[0].style.opacity);if((N-=R)<0){var O=t(l),I;try{for(O.s();!(I=O.n()).done;){var z=I.value;z.style.display="none",z.style.opacity=1}}catch(B){O.e(B)}finally{O.f()}x&&x.call(y,l)}else{var q=t(l),K;try{for(q.s();!(K=q.n()).done;){var $=K.value;$.style.opacity=N}}catch(B){q.e(B)}finally{q.f()}requestAnimationFrame(S)}};M()}},{key:"fadeIn",value:function(l,_,x,y){var w=this;l=this.wrap(l);var b=t(l),E;try{for(b.s();!(E=b.n()).done;){var R=E.value;R&&(R.style.opacity=0,R.style.display=y||"block")}}catch(O){b.e(O)}finally{b.f()}this.isFadeIn=!0;var M=parseFloat(l[0].dataset.opacityTarget||1),S=16.66666*M/(_||this.options.fadeSpeed),N=function O(){var I=parseFloat(l[0].style.opacity);if((I+=S)>M){var $=t(l),B;try{for($.s();!(B=$.n()).done;){var J=B.value;J&&(J.style.opacity=M)}}catch(P){$.e(P)}finally{$.f()}x&&x.call(w,l)}else{var z=t(l),q;try{for(z.s();!(q=z.n()).done;){var K=q.value;K&&(K.style.opacity=I)}}catch(P){z.e(P)}finally{z.f()}if(!w.isFadeIn)return;requestAnimationFrame(O)}};N()}},{key:"hide",value:function(l){l=this.wrap(l);var _=t(l),x;try{for(_.s();!(x=_.n()).done;){var y=x.value;y.style.display!="none"&&(y.dataset.initialDisplay=y.style.display),y.style.display="none"}}catch(w){_.e(w)}finally{_.f()}}},{key:"show",value:function(l,_){l=this.wrap(l);var x=t(l),y;try{for(x.s();!(y=x.n()).done;){var w=y.value;w.style.display=w.dataset.initialDisplay||_||"block"}}catch(b){x.e(b)}finally{x.f()}}},{key:"wrap",value:function(l){return typeof l[Symbol.iterator]=="function"&&typeof l!="string"?l:[l]}},{key:"on",value:function(l,_){l=this.wrap(l);var x=t(this.elements),y;try{for(x.s();!(y=x.n()).done;){var w=y.value;w.fullyNamespacedEvents||(w.fullyNamespacedEvents={});var b=t(l),E;try{for(b.s();!(E=b.n()).done;){var R=E.value;w.fullyNamespacedEvents[R]=_,w.addEventListener(R,_)}}catch(M){b.e(M)}finally{b.f()}}}catch(M){x.e(M)}finally{x.f()}return this}},{key:"off",value:function(l){l=this.wrap(l);var _=t(this.elements),x;try{for(_.s();!(x=_.n()).done;){var y=x.value,w=t(l),b;try{for(w.s();!(b=w.n()).done;){var E=b.value;typeof y.fullyNamespacedEvents<"u"&&E in y.fullyNamespacedEvents&&y.removeEventListener(E,y.fullyNamespacedEvents[E])}}catch(R){w.e(R)}finally{w.f()}}}catch(R){_.e(R)}finally{_.f()}return this}},{key:"open",value:function(l){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;l=l||this.elements[0],typeof jQuery<"u"&&l instanceof jQuery&&(l=l.get(0)),_>0&&(l=this.elements[_]),this.initialImageIndex=this.elements.indexOf(l),this.initialImageIndex>-1&&this.openImage(l)}},{key:"openPosition",value:function(l){var _=this.elements[l];this.open(_,l)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var l=this.options,_=this.initialSelector;return this.destroy(),this.constructor(_,l),this}}]),g}(),v=p;s.default=v,z_.SimpleLightbox=p})(_m);const UT=H_(_m);function Sa(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var vm={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(u,h){if(!i[u]){if(!n[u]){var d=typeof Sa=="function"&&Sa;if(!h&&d)return d(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var p=i[u]={exports:{}};n[u][0].call(p.exports,function(v){return o(n[u][1][v]||v)},p,p.exports,t,n,i,r)}return i[u].exports}for(var a=typeof Sa=="function"&&Sa,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var r=function(c){var u=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=c.trim(),u===!0?h.children:h.firstChild},o=function(c,u){var h=c.children;return h.length===1&&h[0].tagName===u},a=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};i.visible=a,i.create=function(c,u){var h=function(p,v){var g=r(`
		<div class="basicLightbox `.concat(v.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),m=g.querySelector(".basicLightbox__placeholder");p.forEach(function(y){return m.appendChild(y)});var l=o(m,"IMG"),_=o(m,"VIDEO"),x=o(m,"IFRAME");return l===!0&&g.classList.add("basicLightbox--img"),_===!0&&g.classList.add("basicLightbox--video"),x===!0&&g.classList.add("basicLightbox--iframe"),g}(c=function(p){var v=typeof p=="string",g=p instanceof HTMLElement==1;if(v===!1&&g===!1)throw new Error("Content must be a DOM element/node or string");return v===!0?Array.from(r(p,!0)):p.tagName==="TEMPLATE"?[p.content.cloneNode(!0)]:Array.from(p.children)}(c),u=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((p=Object.assign({},p)).closable==null&&(p.closable=!0),p.className==null&&(p.className=""),p.onShow==null&&(p.onShow=function(){}),p.onClose==null&&(p.onClose=function(){}),typeof p.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof p.className!="string")throw new Error("Property `className` must be a string");if(typeof p.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof p.onClose!="function")throw new Error("Property `onClose` must be a function");return p}(u)),d=function(p){return u.onClose(f)!==!1&&function(v,g){return v.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(v)===!1||v.parentElement.removeChild(v),g()},410),!0}(h,function(){if(typeof p=="function")return p(f)})};u.closable===!0&&h.addEventListener("click",function(p){p.target===h&&d()});var f={element:function(){return h},visible:function(){return a(h)},show:function(p){return u.onShow(f)!==!1&&function(v,g){return document.body.appendChild(v),setTimeout(function(){requestAnimationFrame(function(){return v.classList.add("basicLightbox--visible"),g()})},10),!0}(h,function(){if(typeof p=="function")return p(f)})},close:d};return f}},{}]},{},[1])(1)})})(vm);var FT=vm.exports;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $u="164",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V_=0,qh=1,G_=2,xm=1,W_=2,Ii=3,Gi=0,Cn=1,hi=2,fr=0,Bs=1,jh=2,Kh=3,$h=4,X_=5,Or=100,Y_=101,q_=102,j_=103,K_=104,$_=200,Z_=201,J_=202,Q_=203,pu=204,mu=205,e0=206,t0=207,n0=208,i0=209,r0=210,s0=211,o0=212,a0=213,l0=214,c0=0,u0=1,h0=2,yl=3,d0=4,f0=5,p0=6,m0=7,ym=0,g0=1,_0=2,pr=0,v0=1,x0=2,y0=3,S0=4,M0=5,E0=6,T0=7,Zh="attached",b0="detached",Sm=300,js=301,Ks=302,gu=303,_u=304,Il=306,$s=1e3,lr=1001,Sl=1002,yn=1003,Mm=1004,Ro=1005,Fn=1006,ol=1007,Fi=1008,vr=1009,A0=1010,w0=1011,Em=1012,Tm=1013,Zs=1014,mi=1015,Dl=1016,bm=1017,Am=1018,sa=1020,C0=35902,R0=1021,P0=1022,ri=1023,L0=1024,I0=1025,ks=1026,ta=1027,wm=1028,Cm=1029,D0=1030,Rm=1031,Pm=1033,ic=33776,rc=33777,sc=33778,oc=33779,Jh=35840,Qh=35841,ed=35842,td=35843,nd=36196,id=37492,rd=37496,sd=37808,od=37809,ad=37810,ld=37811,cd=37812,ud=37813,hd=37814,dd=37815,fd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,ac=36492,xd=36494,yd=36495,N0=36283,Sd=36284,Md=36285,Ed=36286,na=2300,Js=2301,lc=2302,Td=2400,bd=2401,Ad=2402,O0=2500,U0=0,Lm=1,vu=2,F0=3200,B0=3201,Im=0,k0=1,nr="",gn="srgb",Zt="srgb-linear",Zu="display-p3",Nl="display-p3-linear",Ml="linear",St="srgb",El="rec709",Tl="p3",ls=7680,wd=519,z0=512,H0=513,V0=514,Dm=515,G0=516,W0=517,X0=518,Y0=519,xu=35044,Cd="300 es",Bi=2e3,bl=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const Go=Math.PI/180,Qs=180/Math.PI;function si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function Ju(s,e){return(s%e+e)%e}function q0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function j0(s,e,t){return s!==e?(t-s)/(e-s):0}function Wo(s,e,t){return(1-t)*s+t*e}function K0(s,e,t,n){return Wo(s,e,1-Math.exp(-t*n))}function $0(s,e=1){return e-Math.abs(Ju(s,e*2)-e)}function Z0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function J0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Q0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ev(s,e){return s+Math.random()*(e-s)}function tv(s){return s*(.5-Math.random())}function nv(s){s!==void 0&&(Rd=s);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iv(s){return s*Go}function rv(s){return s*Qs}function sv(s){return(s&s-1)===0&&s!==0}function ov(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function av(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*f,a*u);break;case"YZY":s.set(c*f,a*h,c*d,a*u);break;case"ZXZ":s.set(c*d,c*f,a*h,a*u);break;case"XZX":s.set(a*h,c*v,c*p,a*u);break;case"YXY":s.set(c*p,a*h,c*v,a*u);break;case"ZYZ":s.set(c*v,c*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Nm={DEG2RAD:Go,RAD2DEG:Qs,generateUUID:si,clamp:Kt,euclideanModulo:Ju,mapLinear:q0,inverseLerp:j0,lerp:Wo,damp:K0,pingpong:$0,smoothstep:Z0,smootherstep:J0,randInt:Q0,randFloat:ev,randFloatSpread:tv,seededRandom:nv,degToRad:iv,radToDeg:rv,isPowerOfTwo:sv,ceilPowerOfTwo:ov,floorPowerOfTwo:av,setQuaternionFromProperEuler:lv,normalize:pt,denormalize:ii};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,r,o,a,c,u){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,u)}set(e,t,n,i,r,o,a,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],d=n[7],f=n[2],p=n[5],v=n[8],g=i[0],m=i[3],l=i[6],_=i[1],x=i[4],y=i[7],w=i[2],b=i[5],E=i[8];return r[0]=o*g+a*_+c*w,r[3]=o*m+a*x+c*b,r[6]=o*l+a*y+c*E,r[1]=u*g+h*_+d*w,r[4]=u*m+h*x+d*b,r[7]=u*l+h*y+d*E,r[2]=f*g+p*_+v*w,r[5]=f*m+p*x+v*b,r[8]=f*l+p*y+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*c+i*r*u-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*c-h*r,p=u*r-o*c,v=t*d+n*f+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(i*u-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*c-u*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-i*u,i*c,-i*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cc.makeScale(e,t)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Qe;function Om(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cv(){const s=ia("canvas");return s.style.display="block",s}const Pd={};function Um(s){s in Pd||(Pd[s]=!0,console.warn(s))}const Ld=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Id=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[Zt]:{transfer:Ml,primaries:El,toReference:s=>s,fromReference:s=>s},[gn]:{transfer:St,primaries:El,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Nl]:{transfer:Ml,primaries:Tl,toReference:s=>s.applyMatrix3(Id),fromReference:s=>s.applyMatrix3(Ld)},[Zu]:{transfer:St,primaries:Tl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Id),fromReference:s=>s.applyMatrix3(Ld).convertLinearToSRGB()}},uv=new Set([Zt,Nl]),ft={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!uv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ma[e].toReference,i=Ma[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ma[s].primaries},getTransfer:function(s){return s===nr?Ml:Ma[s].transfer}};function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class hv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=ia("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dv=0;class Fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hc(i[o].image)):r.push(hc(i[o]))}else r=hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fv=0;class qt extends ns{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=lr,i=lr,r=Fn,o=Fi,a=ri,c=vr,u=qt.DEFAULT_ANISOTROPY,h=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=si(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Sm;qt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],h=c[4],d=c[8],f=c[1],p=c[5],v=c[9],g=c[2],m=c[6],l=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,w=(l+1)/2,b=(h+f)/4,E=(d+g)/4,R=(v+m)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=E/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=R/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-g)/_,this.z=(f-h)/_,this.w=Math.acos((u+p+l-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pv extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends pv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bm extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mv extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(d!==g||c!==f||u!==p||h!==v){let m=1-a;const l=c*f+u*p+h*v+d*g,_=l>=0?1:-1,x=1-l*l;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,l*_);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const y=a*_;if(c=c*m+f*y,u=u*m+p*y,h=h*m+v*y,d=d*m+g*y,m===1-a){const w=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=w,u*=w,h*=w,d*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+h*d+c*p-u*f,e[t+1]=c*v+h*f+u*d-a*p,e[t+2]=u*v+h*p+a*f-c*d,e[t+3]=h*v-a*d-c*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(i/2),d=a(r/2),f=c(n/2),p=c(i/2),v=c(r/2);switch(o){case"XYZ":this._x=f*h*d+u*p*v,this._y=u*p*d-f*h*v,this._z=u*h*v+f*p*d,this._w=u*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+u*p*v,this._y=u*p*d-f*h*v,this._z=u*h*v-f*p*d,this._w=u*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-u*p*v,this._y=u*p*d+f*h*v,this._z=u*h*v+f*p*d,this._w=u*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-u*p*v,this._y=u*p*d+f*h*v,this._z=u*h*v-f*p*d,this._w=u*h*d+f*p*v;break;case"YZX":this._x=f*h*d+u*p*v,this._y=u*p*d+f*h*v,this._z=u*h*v-f*p*d,this._w=u*h*d-f*p*v;break;case"XZY":this._x=f*h*d-u*p*v,this._y=u*p*d-f*h*v,this._z=u*h*v+f*p*d,this._w=u*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+i*u-r*c,this._y=i*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-i*a,this._w=o*h-n*a-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*u+o*d-a*h,this.y=n+c*h+a*u-r*d,this.z=i+c*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new U,Dd=new yi;class Wi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Ta.subVectors(this.max,fo),us.subVectors(e.a,fo),hs.subVectors(e.b,fo),ds.subVectors(e.c,fo),Yi.subVectors(hs,us),qi.subVectors(ds,hs),Tr.subVectors(us,ds);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Tr.z,Tr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Tr.z,0,-Tr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Tr.y,Tr.x,0];return!fc(t,us,hs,ds,Ta)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,us,hs,ds,Ta))?!1:(ba.crossVectors(Yi,qi),t=[ba.x,ba.y,ba.z],fc(t,us,hs,ds,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new U,new U,new U,new U,new U,new U,new U,new U],Jn=new U,Ea=new Wi,us=new U,hs=new U,ds=new U,Yi=new U,qi=new U,Tr=new U,fo=new U,Ta=new U,ba=new U,br=new U;function fc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){br.fromArray(s,r);const a=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),c=e.dot(br),u=t.dot(br),h=n.dot(br);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const gv=new Wi,po=new U,pc=new U;class Mi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const t=po.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(po,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(pc)),this.expandByPoint(po.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new U,mc=new U,Aa=new U,ji=new U,gc=new U,wa=new U,_c=new U;class io{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(mc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Aa),a=ji.dot(this.direction),c=-ji.dot(Aa),u=ji.lengthSq(),h=Math.abs(1-o*o);let d,f,p,v;if(h>0)if(d=o*c-a,f=o*a-c,v=r*h,d>=0)if(f>=-v)if(f<=v){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+u}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+u;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+u;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+u):f<=v?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(mc).addScaledVector(Aa,f),p}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){gc.subVectors(t,e),wa.subVectors(n,e),_c.crossVectors(gc,wa);let o=this.direction.dot(_c),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const c=a*this.direction.dot(wa.crossVectors(ji,wa));if(c<0)return null;const u=a*this.direction.dot(gc.cross(ji));if(u<0||c+u>o)return null;const h=-a*ji.dot(_c);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,r,o,a,c,u,h,d,f,p,v,g,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,u,h,d,f,p,v,g,m)}set(e,t,n,i,r,o,a,c,u,h,d,f,p,v,g,m){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=i,l[1]=r,l[5]=o,l[9]=a,l[13]=c,l[2]=u,l[6]=h,l[10]=d,l[14]=f,l[3]=p,l[7]=v,l[11]=g,l[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,v=a*h,g=a*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=p+v*u,t[5]=f-g*u,t[9]=-a*c,t[2]=g-f*u,t[6]=v+p*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,v=u*h,g=u*d;t[0]=f+g*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-v,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,v=u*h,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*d,v=a*h,g=a*d;t[0]=c*h,t[4]=v*u-p,t[8]=f*u+g,t[1]=c*d,t[5]=g*u+f,t[9]=p*u-v,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*u,v=a*c,g=a*u;t[0]=c*h,t[4]=g-f*d,t[8]=v*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*c,p=o*u,v=a*c,g=a*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=f*d+g,t[5]=o*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,vv)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ki.crossVectors(n,Pn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ki.crossVectors(n,Pn)),Ki.normalize(),Ca.crossVectors(Pn,Ki),i[0]=Ki.x,i[4]=Ca.x,i[8]=Pn.x,i[1]=Ki.y,i[5]=Ca.y,i[9]=Pn.y,i[2]=Ki.z,i[6]=Ca.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],d=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],l=n[14],_=n[3],x=n[7],y=n[11],w=n[15],b=i[0],E=i[4],R=i[8],M=i[12],S=i[1],N=i[5],O=i[9],I=i[13],z=i[2],q=i[6],K=i[10],$=i[14],B=i[3],J=i[7],P=i[11],ce=i[15];return r[0]=o*b+a*S+c*z+u*B,r[4]=o*E+a*N+c*q+u*J,r[8]=o*R+a*O+c*K+u*P,r[12]=o*M+a*I+c*$+u*ce,r[1]=h*b+d*S+f*z+p*B,r[5]=h*E+d*N+f*q+p*J,r[9]=h*R+d*O+f*K+p*P,r[13]=h*M+d*I+f*$+p*ce,r[2]=v*b+g*S+m*z+l*B,r[6]=v*E+g*N+m*q+l*J,r[10]=v*R+g*O+m*K+l*P,r[14]=v*M+g*I+m*$+l*ce,r[3]=_*b+x*S+y*z+w*B,r[7]=_*E+x*N+y*q+w*J,r[11]=_*R+x*O+y*K+w*P,r[15]=_*M+x*I+y*$+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],l=e[15];return v*(+r*c*d-i*u*d-r*a*f+n*u*f+i*a*p-n*c*p)+g*(+t*c*p-t*u*f+r*o*f-i*o*p+i*u*h-r*c*h)+m*(+t*u*d-t*a*p-r*o*d+n*o*p+r*a*h-n*u*h)+l*(-i*a*h-t*c*d+t*a*f+i*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],l=e[15],_=d*m*u-g*f*u+g*c*p-a*m*p-d*c*l+a*f*l,x=v*f*u-h*m*u-v*c*p+o*m*p+h*c*l-o*f*l,y=h*g*u-v*d*u+v*a*p-o*g*p-h*a*l+o*d*l,w=v*d*c-h*g*c-v*a*f+o*g*f+h*a*m-o*d*m,b=t*_+n*x+i*y+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=_*E,e[1]=(g*f*r-d*m*r-g*i*p+n*m*p+d*i*l-n*f*l)*E,e[2]=(a*m*r-g*c*r+g*i*u-n*m*u-a*i*l+n*c*l)*E,e[3]=(d*c*r-a*f*r-d*i*u+n*f*u+a*i*p-n*c*p)*E,e[4]=x*E,e[5]=(h*m*r-v*f*r+v*i*p-t*m*p-h*i*l+t*f*l)*E,e[6]=(v*c*r-o*m*r-v*i*u+t*m*u+o*i*l-t*c*l)*E,e[7]=(o*f*r-h*c*r+h*i*u-t*f*u-o*i*p+t*c*p)*E,e[8]=y*E,e[9]=(v*d*r-h*g*r-v*n*p+t*g*p+h*n*l-t*d*l)*E,e[10]=(o*g*r-v*a*r+v*n*u-t*g*u-o*n*l+t*a*l)*E,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*p-t*a*p)*E,e[12]=w*E,e[13]=(h*g*i-v*d*i+v*n*f-t*g*f-h*n*m+t*d*m)*E,e[14]=(v*a*i-o*g*i-v*n*c+t*g*c+o*n*m-t*a*m)*E,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-i*c,u*c+i*a,0,u*a+i*c,h*a+n,h*c-i*o,0,u*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,h=o+o,d=a+a,f=r*u,p=r*h,v=r*d,g=o*h,m=o*d,l=a*d,_=c*u,x=c*h,y=c*d,w=n.x,b=n.y,E=n.z;return i[0]=(1-(g+l))*w,i[1]=(p+y)*w,i[2]=(v-x)*w,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(f+l))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(v+x)*E,i[9]=(m-_)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const u=1/r,h=1/o,d=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bi){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,v;if(a===Bi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===bl)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bi){const c=this.elements,u=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*u,p=(n+i)*h;let v,g;if(a===Bi)v=(o+r)*d,g=-2*d;else if(a===bl)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new U,Qn=new $e,_v=new U(0,0,0),vv=new U(1,1,1),Ki=new U,Ca=new U,Pn=new U,Nd=new $e,Od=new yi;class Si{constructor(e=0,t=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],u=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Od.setFromEuler(this),this.setFromQuaternion(Od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const Ud=new U,ps=new yi,Ci=new $e,Ra=new U,mo=new U,yv=new U,Sv=new yi,Fd=new U(1,0,0),Bd=new U(0,1,0),kd=new U(0,0,1),zd={type:"added"},Mv={type:"removed"},ms={type:"childadded",child:null},vc={type:"childremoved",child:null};class At extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new U,t=new Si,n=new yi,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Qe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(mo,Ra,this.up):Ci.lookAt(Ra,mo,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Ci),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mv),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new U,Ri=new U,xc=new U,Pi=new U,gs=new U,_s=new U,Hd=new U,yc=new U,Sc=new U,Mc=new U;class di{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ei.subVectors(i,t),Ri.subVectors(n,t),xc.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(Ri),c=ei.dot(xc),u=Ri.dot(Ri),h=Ri.dot(xc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(u*c-a*h)*f,v=(o*h-a*c)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Ri.subVectors(e,t),ei.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ei.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;gs.subVectors(i,n),_s.subVectors(r,n),yc.subVectors(e,n);const c=gs.dot(yc),u=_s.dot(yc);if(c<=0&&u<=0)return t.copy(n);Sc.subVectors(e,i);const h=gs.dot(Sc),d=_s.dot(Sc);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gs,o);Mc.subVectors(e,r);const p=gs.dot(Mc),v=_s.dot(Mc);if(v>=0&&p<=v)return t.copy(r);const g=p*u-c*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(_s,a);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Hd.subVectors(r,i),a=(d-h)/(d-h+(p-v)),t.copy(i).addScaledVector(Hd,a);const l=1/(m+g+f);return o=g*l,a=f*l,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Ec(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Ju(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ec(o,r,e+1/3),this.g=Ec(o,r,e),this.b=Ec(o,r,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return ft.fromWorkingColorSpace(tn.copy(this),e),Math.round(Kt(tn.r*255,0,255))*65536+Math.round(Kt(tn.g*255,0,255))*256+Math.round(Kt(tn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=gn){ft.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Pa);const n=Wo($i.h,Pa.h,t),i=Wo($i.s,Pa.s,t),r=Wo($i.l,Pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ye;Ye.NAMES=km;let Ev=0;class vi extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Bs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pu&&(n.blendSrc=this.blendSrc),this.blendDst!==mu&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new U,La=new He;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Um("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xu&&(e.usage=this.usage),e}}class zm extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hm extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zi extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tv=0;const Gn=new $e,Tc=new At,vs=new U,Ln=new Wi,go=new Wi,Gt=new U;class Ei extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Om(e)?Hm:zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Ln.min,go.min),Ln.expandByPoint(Gt),Gt.addVectors(Ln.max,go.max),Ln.expandByPoint(Gt)):(Ln.expandByPoint(go.min),Ln.expandByPoint(go.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Gt.fromBufferAttribute(a,u),c&&(vs.fromBufferAttribute(e,u),Gt.add(vs)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new U,c[R]=new U;const u=new U,h=new U,d=new U,f=new He,p=new He,v=new He,g=new U,m=new U;function l(R,M,S){u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,S),h.sub(u),d.sub(u),p.sub(f),v.sub(f);const N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(N),a[R].add(g),a[M].add(g),a[S].add(g),c[R].add(m),c[M].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,M=_.length;R<M;++R){const S=_[R],N=S.start,O=S.count;for(let I=N,z=N+O;I<z;I+=3)l(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new U,y=new U,w=new U,b=new U;function E(R){w.fromBufferAttribute(i,R),b.copy(w);const M=a[R];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(b,M);const N=y.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,N)}for(let R=0,M=_.length;R<M;++R){const S=_[R],N=S.start,O=S.count;for(let I=N,z=N+O;I<z;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,u=new U,h=new U,d=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(h),c.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let l=0;l<h;l++)f[v++]=u[p++]}return new Sn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],u=e(c,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vd=new $e,Ar=new io,Ia=new Mi,Gd=new U,xs=new U,ys=new U,Ss=new U,bc=new U,Da=new U,Na=new He,Oa=new He,Ua=new He,Wd=new U,Xd=new U,Yd=new U,Fa=new U,Ba=new U;class kn extends At{constructor(e=new Ei,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Da.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],d=r[c];h!==0&&(bc.fromBufferAttribute(d,e),o?Da.addScaledVector(bc,h):Da.addScaledVector(bc.sub(t),h))}t.add(Da)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Ar.copy(e.ray).recast(e.near),!(Ia.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ia,Gd)===null||Ar.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),Ar.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],l=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=x;y<w;y+=3){const b=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);i=ka(this,l,e,n,u,h,d,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,l=g;m<l;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=ka(this,o,e,n,u,h,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],l=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=x;y<w;y+=3){const b=y,E=y+1,R=y+2;i=ka(this,l,e,n,u,h,d,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,l=g;m<l;m+=3){const _=m,x=m+1,y=m+2;i=ka(this,o,e,n,u,h,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bv(s,e,t,n,i,r,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Gi,a),c===null)return null;Ba.copy(a),Ba.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(Ba);return u<t.near||u>t.far?null:{distance:u,point:Ba.clone(),object:s}}function ka(s,e,t,n,i,r,o,a,c,u){s.getVertexPosition(a,xs),s.getVertexPosition(c,ys),s.getVertexPosition(u,Ss);const h=bv(s,e,t,n,xs,ys,Ss,Fa);if(h){i&&(Na.fromBufferAttribute(i,a),Oa.fromBufferAttribute(i,c),Ua.fromBufferAttribute(i,u),h.uv=di.getInterpolation(Fa,xs,ys,Ss,Na,Oa,Ua,new He)),r&&(Na.fromBufferAttribute(r,a),Oa.fromBufferAttribute(r,c),Ua.fromBufferAttribute(r,u),h.uv1=di.getInterpolation(Fa,xs,ys,Ss,Na,Oa,Ua,new He)),o&&(Wd.fromBufferAttribute(o,a),Xd.fromBufferAttribute(o,c),Yd.fromBufferAttribute(o,u),h.normal=di.getInterpolation(Fa,xs,ys,Ss,Wd,Xd,Yd,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new U,materialIndex:0};di.getNormal(xs,ys,Ss,d.normal),h.face=d}return h}class oa extends Ei{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new zi(u,3)),this.setAttribute("normal",new zi(h,3)),this.setAttribute("uv",new zi(d,2));function v(g,m,l,_,x,y,w,b,E,R,M){const S=y/E,N=w/R,O=y/2,I=w/2,z=b/2,q=E+1,K=R+1;let $=0,B=0;const J=new U;for(let P=0;P<K;P++){const ce=P*N-I;for(let Ie=0;Ie<q;Ie++){const je=Ie*S-O;J[g]=je*_,J[m]=ce*x,J[l]=z,u.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[l]=b>0?1:-1,h.push(J.x,J.y,J.z),d.push(Ie/E),d.push(1-P/R),$+=1}}for(let P=0;P<R;P++)for(let ce=0;ce<E;ce++){const Ie=f+ce+q*P,je=f+ce+q*(P+1),j=f+(ce+1)+q*(P+1),ne=f+(ce+1)+q*P;c.push(Ie,je,ne),c.push(je,j,ne),B+=6}a.addGroup(p,B,M),p+=B,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(s){const e={};for(let t=0;t<s.length;t++){const n=eo(s[t]);for(const i in n)e[i]=n[i]}return e}function Av(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const wv={clone:eo,merge:dn};var Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gm extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new U,qd=new He,jd=new He;class En extends Gm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,qd,jd),t.subVectors(jd,qd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/u,i*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Es=1;class Pv extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(Ms,Es,e,t);i.layers=this.layers,this.add(i);const r=new En(Ms,Es,e,t);r.layers=this.layers,this.add(r);const o=new En(Ms,Es,e,t);o.layers=this.layers,this.add(o);const a=new En(Ms,Es,e,t);a.layers=this.layers,this.add(a);const c=new En(Ms,Es,e,t);c.layers=this.layers,this.add(c);const u=new En(Ms,Es,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const u of t)this.remove(u);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Wm extends qt{constructor(e,t,n,i,r,o,a,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,n,i,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lv extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oa(5,5,5),r=new xr({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:fr});r.uniforms.tEquirect.value=t;const o=new kn(i,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Fn),new Pv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ac=new U,Iv=new U,Dv=new Qe;class er{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ac.subVectors(n,t).cross(Iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dv.getNormalMatrix(e),i=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Mi,za=new U;class eh{constructor(e=new er,t=new er,n=new er,i=new er,r=new er,o=new er){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],u=i[4],h=i[5],d=i[6],f=i[7],p=i[8],v=i[9],g=i[10],m=i[11],l=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,f-u,m-p,y-l).normalize(),n[1].setComponents(c+r,f+u,m+p,y+l).normalize(),n[2].setComponents(c+o,f+h,m+v,y+_).normalize(),n[3].setComponents(c-o,f-h,m-v,y-_).normalize(),n[4].setComponents(c-a,f-d,m-g,y-x).normalize(),t===Bi)n[5].setComponents(c+a,f+d,m+g,y+x).normalize();else if(t===bl)n[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(za.x=i.normal.x>0?e.max.x:e.min.x,za.y=i.normal.y>0?e.max.y:e.min.y,za.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Nv(s){const e=new WeakMap;function t(a,c){const u=a.array,h=a.usage,d=u.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,u){const h=c.array,d=c._updateRange,f=c.updateRanges;if(s.bindBuffer(u,a),d.count===-1&&f.length===0&&s.bufferSubData(u,0,h),f.length!==0){for(let p=0,v=f.length;p<v;p++){const g=f[p];s.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:i,remove:r,update:o}}class Ol extends Ei{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),u=a+1,h=c+1,d=e/a,f=t/c,p=[],v=[],g=[],m=[];for(let l=0;l<h;l++){const _=l*f-o;for(let x=0;x<u;x++){const y=x*d-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-l/c)}}for(let l=0;l<c;l++)for(let _=0;_<a;_++){const x=_+u*l,y=_+u*(l+1),w=_+1+u*(l+1),b=_+1+u*l;p.push(x,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new zi(v,3)),this.setAttribute("normal",new zi(g,3)),this.setAttribute("uv",new zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
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
#endif`,Fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hv=`#ifdef USE_AOMAP
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
#endif`,Vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gv=`#ifdef USE_BATCHING
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
#endif`,Wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Kv=`#ifdef USE_BUMPMAP
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ox=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`
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
}`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
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
#endif`,Dx=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
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
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iy=`#ifdef USE_NORMALMAP
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
#endif`,ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,my=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xy=`float getShadowMask() {
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
}`,yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,My=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cy=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oy=`uniform sampler2D t2D;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`#include <common>
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
}`,Hy=`#if DEPTH_PACKING == 3200
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
}`,Vy=`#define DISTANCE
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
}`,Gy=`#define DISTANCE
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`uniform float scale;
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
}`,qy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Ky=`uniform vec3 diffuse;
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
}`,$y=`#define LAMBERT
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
}`,Zy=`#define LAMBERT
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
}`,Jy=`#define MATCAP
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
}`,Qy=`#define MATCAP
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
}`,eS=`#define NORMAL
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
}`,tS=`#define NORMAL
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
}`,nS=`#define PHONG
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
}`,iS=`#define PHONG
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
}`,rS=`#define STANDARD
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
}`,sS=`#define STANDARD
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
}`,oS=`#define TOON
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
}`,aS=`#define TOON
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
}`,lS=`uniform float size;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,hS=`uniform vec3 color;
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
}`,dS=`uniform float rotation;
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
}`,fS=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Ov,alphahash_pars_fragment:Uv,alphamap_fragment:Fv,alphamap_pars_fragment:Bv,alphatest_fragment:kv,alphatest_pars_fragment:zv,aomap_fragment:Hv,aomap_pars_fragment:Vv,batching_pars_vertex:Gv,batching_vertex:Wv,begin_vertex:Xv,beginnormal_vertex:Yv,bsdfs:qv,iridescence_fragment:jv,bumpmap_pars_fragment:Kv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:Qv,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ox,displacementmap_pars_vertex:ax,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:ux,colorspace_fragment:hx,colorspace_pars_fragment:dx,envmap_fragment:fx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:wx,envmap_vertex:_x,fog_vertex:vx,fog_pars_vertex:xx,fog_fragment:yx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:Ex,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:bx,lights_pars_begin:Ax,lights_toon_fragment:Cx,lights_toon_pars_fragment:Rx,lights_phong_fragment:Px,lights_phong_pars_fragment:Lx,lights_physical_fragment:Ix,lights_physical_pars_fragment:Dx,lights_fragment_begin:Nx,lights_fragment_maps:Ox,lights_fragment_end:Ux,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:zx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:qx,morphcolor_vertex:jx,morphnormal_vertex:Kx,morphtarget_pars_vertex:$x,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:ey,normal_pars_vertex:ty,normal_vertex:ny,normalmap_pars_fragment:iy,clearcoat_normal_fragment_begin:ry,clearcoat_normal_fragment_maps:sy,clearcoat_pars_fragment:oy,iridescence_pars_fragment:ay,opaque_fragment:ly,packing:cy,premultiplied_alpha_fragment:uy,project_vertex:hy,dithering_fragment:dy,dithering_pars_fragment:fy,roughnessmap_fragment:py,roughnessmap_pars_fragment:my,shadowmap_pars_fragment:gy,shadowmap_pars_vertex:_y,shadowmap_vertex:vy,shadowmask_pars_fragment:xy,skinbase_vertex:yy,skinning_pars_vertex:Sy,skinning_vertex:My,skinnormal_vertex:Ey,specularmap_fragment:Ty,specularmap_pars_fragment:by,tonemapping_fragment:Ay,tonemapping_pars_fragment:wy,transmission_fragment:Cy,transmission_pars_fragment:Ry,uv_pars_fragment:Py,uv_pars_vertex:Ly,uv_vertex:Iy,worldpos_vertex:Dy,background_vert:Ny,background_frag:Oy,backgroundCube_vert:Uy,backgroundCube_frag:Fy,cube_vert:By,cube_frag:ky,depth_vert:zy,depth_frag:Hy,distanceRGBA_vert:Vy,distanceRGBA_frag:Gy,equirect_vert:Wy,equirect_frag:Xy,linedashed_vert:Yy,linedashed_frag:qy,meshbasic_vert:jy,meshbasic_frag:Ky,meshlambert_vert:$y,meshlambert_frag:Zy,meshmatcap_vert:Jy,meshmatcap_frag:Qy,meshnormal_vert:eS,meshnormal_frag:tS,meshphong_vert:nS,meshphong_frag:iS,meshphysical_vert:rS,meshphysical_frag:sS,meshtoon_vert:oS,meshtoon_frag:aS,points_vert:lS,points_frag:cS,shadow_vert:uS,shadow_frag:hS,sprite_vert:dS,sprite_frag:fS},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ci={basic:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:dn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:dn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:dn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:dn([pe.points,pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:dn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:dn([pe.common,pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:dn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:dn([pe.sprite,pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:dn([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:dn([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ha={r:0,b:0,g:0},Cr=new Si,pS=new $e;function mS(s,e,t,n,i,r,o){const a=new Ye(0);let c=r===!0?0:1,u,h,d=null,f=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?l(a,c):y&&y.isColor&&(l(y,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Il)?(h===void 0&&(h=new kn(new oa(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:eo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cr.copy(x.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pS.makeRotationFromEuler(Cr)),h.material.toneMapped=ft.getTransfer(y.colorSpace)!==St,(d!==y||f!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new kn(new Ol(2,2),new xr({name:"BackgroundMaterial",uniforms:eo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ft.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function l(_,x){_.getRGB(Ha,Vm(s)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),c=x,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,l(a,c)},render:g,addToRenderList:m}}function gS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,N,O,I,z){let q=!1;const K=d(I,O,N);r!==K&&(r=K,u(r.object)),q=p(S,I,O,z),q&&v(S,I,O,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,N,O,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function u(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,N,O){const I=O.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let q=z[N.id];q===void 0&&(q={},z[N.id]=q);let K=q[I];return K===void 0&&(K=f(c()),q[I]=K),K}function f(S){const N=[],O=[],I=[];for(let z=0;z<t;z++)N[z]=0,O[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:I,object:S,attributes:{},index:null}}function p(S,N,O,I){const z=r.attributes,q=N.attributes;let K=0;const $=O.getAttributes();for(const B in $)if($[B].location>=0){const P=z[B];let ce=q[B];if(ce===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),P===void 0||P.attribute!==ce||ce&&P.data!==ce.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function v(S,N,O,I){const z={},q=N.attributes;let K=0;const $=O.getAttributes();for(const B in $)if($[B].location>=0){let P=q[B];P===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const ce={};ce.attribute=P,P&&P.data&&(ce.data=P.data),z[B]=ce,K++}r.attributes=z,r.attributesNum=K,r.index=I}function g(){const S=r.newAttributes;for(let N=0,O=S.length;N<O;N++)S[N]=0}function m(S){l(S,0)}function l(S,N){const O=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;O[S]=1,I[S]===0&&(s.enableVertexAttribArray(S),I[S]=1),z[S]!==N&&(s.vertexAttribDivisor(S,N),z[S]=N)}function _(){const S=r.newAttributes,N=r.enabledAttributes;for(let O=0,I=N.length;O<I;O++)N[O]!==S[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function x(S,N,O,I,z,q,K){K===!0?s.vertexAttribIPointer(S,N,O,z,q):s.vertexAttribPointer(S,N,O,I,z,q)}function y(S,N,O,I){g();const z=I.attributes,q=O.getAttributes(),K=N.defaultAttributeValues;for(const $ in q){const B=q[$];if(B.location>=0){let J=z[$];if(J===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const P=J.normalized,ce=J.itemSize,Ie=e.get(J);if(Ie===void 0)continue;const je=Ie.buffer,j=Ie.type,ne=Ie.bytesPerElement,he=j===s.INT||j===s.UNSIGNED_INT||J.gpuType===Tm;if(J.isInterleavedBufferAttribute){const ie=J.data,De=ie.stride,Re=J.offset;if(ie.isInstancedInterleavedBuffer){for(let k=0;k<B.locationSize;k++)l(B.location+k,ie.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let k=0;k<B.locationSize;k++)m(B.location+k);s.bindBuffer(s.ARRAY_BUFFER,je);for(let k=0;k<B.locationSize;k++)x(B.location+k,ce/B.locationSize,j,P,De*ne,(Re+ce/B.locationSize*k)*ne,he)}else{if(J.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)l(B.location+ie,J.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie);s.bindBuffer(s.ARRAY_BUFFER,je);for(let ie=0;ie<B.locationSize;ie++)x(B.location+ie,ce/B.locationSize,j,P,ce*ne,ce/B.locationSize*ie*ne,he)}}else if(K!==void 0){const P=K[$];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(B.location,P);break;case 3:s.vertexAttrib3fv(B.location,P);break;case 4:s.vertexAttrib4fv(B.location,P);break;default:s.vertexAttrib1fv(B.location,P)}}}}_()}function w(){R();for(const S in n){const N=n[S];for(const O in N){const I=N[O];for(const z in I)h(I[z].object),delete I[z];delete N[O]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const O in N){const I=N[O];for(const z in I)h(I[z].object),delete I[z];delete N[O]}delete n[S.id]}function E(S){for(const N in n){const O=n[N];if(O[S.id]===void 0)continue;const I=O[S.id];for(const z in I)h(I[z].object),delete I[z];delete O[S.id]}}function R(){M(),o=!0,r!==i&&(r=i,u(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function _S(s,e,t){let n;function i(u){n=u}function r(u,h){s.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,d){d!==0&&(s.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}function a(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(u[p],h[p]);else{f.multiDrawArraysWEBGL(n,u,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];t.update(p,n,1)}}function c(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];for(let g=0;g<f.length;g++)t.update(v,n,f[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==ri&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const E=b===Dl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==vr&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==mi&&!E)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:l,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function xS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new er,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,l=s.get(d);if(!i||v===null||v.length===0||r&&!m)r?h(null):u();else{const _=r?0:n,x=_*4;let y=l.clippingState||null;c.value=y,y=h(v,f,x,p);for(let w=0;w!==x;++w)y[w]=t[w];l.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const l=p+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<l)&&(m=new Float32Array(l));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function yS(s){let e=new WeakMap;function t(o,a){return a===gu?o.mapping=js:a===_u&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gu||a===_u)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Lv(c.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class th extends Gm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ls=4,Kd=[.125,.215,.35,.446,.526,.582],Ur=20,wc=new th,$d=new Ye;let Cc=null,Rc=0,Pc=0,Lc=!1;const Nr=(1+Math.sqrt(5))/2,Ts=1/Nr,Zd=[new U(-Nr,Ts,0),new U(Nr,Ts,0),new U(-Ts,0,Nr),new U(Ts,0,Nr),new U(0,Nr,-Ts),new U(0,Nr,Ts),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Pc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Dl,format:ri,colorSpace:Zt,depthBuffer:!1},i=Qd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SS(r)),this._blurMaterial=MS(r,e,t)}return i}_compileMaterial(e){const t=new kn(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,i){const a=new En(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($d),h.toneMapping=pr,h.autoClear=!1;const p=new kr({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),v=new kn(new oa,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy($d),g=!0);for(let l=0;l<6;l++){const _=l%3;_===0?(a.up.set(0,c[l],0),a.lookAt(u[l],0,0)):_===1?(a.up.set(0,0,c[l]),a.lookAt(0,u[l],0)):(a.up.set(0,c[l],0),a.lookAt(0,0,u[l]));const x=this._cubeSize;Va(i,_*x,l>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===js||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Va(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zd[(i-r-1)%Zd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new kn(this._lodPlanes[i],u),f=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):Ur;m>Ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const l=[];let _=0;for(let E=0;E<Ur;++E){const R=E/g,M=Math.exp(-R*R/2);l.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<l.length;E++)l[E]=l[E]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=l,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-Ls?i-x+Ls:0),b=4*(this._cubeSize-y);Va(t,w,b,3*y,2*y),c.setRenderTarget(t),c.render(d,wc)}}function SS(s){const e=[],t=[],n=[];let i=s;const r=s-Ls+1+Kd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ls?c=Kd[o-s+Ls-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,g=3,m=2,l=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(l*v*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,R=b>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(M,g*v*b),x.set(f,m*v*b);const S=[b,b,b,b,b,b];y.set(S,l*v*b)}const w=new Ei;w.setAttribute("position",new Sn(_,g)),w.setAttribute("uv",new Sn(x,m)),w.setAttribute("faceIndex",new Sn(y,l)),e.push(w),i>Ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qd(s,e,t){const n=new Qr(s,e,t);return n.texture.mapping=Il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function MS(s,e,t){const n=new Float32Array(Ur),i=new U(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nh(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function ef(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function tf(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function ES(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===gu||c===_u,h=c===js||c===Ks;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Jd(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Jd(s)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function TS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bS(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,l=g.length;m<l;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const g=p[v];for(let m=0,l=g.length;m<l;m++)e.update(g[m],s.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const w=_[x+0],b=_[x+1],E=_[x+2];f.push(w,b,b,E,E,w)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const w=x+0,b=x+1,E=x+2;f.push(w,b,b,E,E,w)}}else return;const m=new(Om(f)?Hm:zm)(f,1);m.version=g;const l=r.get(d);l&&e.remove(l),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function AS(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}function u(f,p,v){v!==0&&(s.drawElementsInstanced(n,p,r,f*o,v),t.update(p,n,v))}function h(f,p,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(f[m]/o,p[m]);else{g.multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let l=0;l<v;l++)m+=p[l];t.update(m,n,1)}}function d(f,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let l=0;l<f.length;l++)u(f[l]/o,p[l],g[l]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,v);let l=0;for(let _=0;_<v;_++)l+=p[_];for(let _=0;_<g.length;_++)t.update(l,n,g[_])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function wS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function CS(s,e,t){const n=new WeakMap,i=new vt;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*w*4*d),E=new Bm(b,y,w,d);E.type=mi,E.needsUpdate=!0;const R=x*4;for(let S=0;S<d;S++){const N=m[S],O=l[S],I=_[S],z=y*w*4*S;for(let q=0;q<N.count;q++){const K=q*R;p===!0&&(i.fromBufferAttribute(N,q),b[z+K+0]=i.x,b[z+K+1]=i.y,b[z+K+2]=i.z,b[z+K+3]=0),v===!0&&(i.fromBufferAttribute(O,q),b[z+K+4]=i.x,b[z+K+5]=i.y,b[z+K+6]=i.z,b[z+K+7]=0),g===!0&&(i.fromBufferAttribute(I,q),b[z+K+8]=i.x,b[z+K+9]=i.y,b[z+K+10]=i.z,b[z+K+11]=I.itemSize===4?i.w:1)}}f={count:d,texture:E,size:new He(y,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<u.length;g++)p+=u[g];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function RS(s,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return d}function o(){i=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class Ym extends qt{constructor(e,t,n,i,r,o,a,c,u,h){if(h=h!==void 0?h:ks,h!==ks&&h!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=Zs),n===void 0&&h===ta&&(n=sa),super(null,i,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qm=new qt,jm=new Ym(1,1);jm.compareFunction=Dm;const Km=new Bm,$m=new mv,Zm=new Wm,nf=[],rf=[],sf=new Float32Array(16),of=new Float32Array(9),af=new Float32Array(4);function ro(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nf[i];if(r===void 0&&(r=new Float32Array(i),nf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ul(s,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function PS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function LS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function IS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function DS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function NS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;af.set(n),s.uniformMatrix2fv(this.addr,!1,af),Ht(t,n)}}function OS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;of.set(n),s.uniformMatrix3fv(this.addr,!1,of),Ht(t,n)}}function US(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;sf.set(n),s.uniformMatrix4fv(this.addr,!1,sf),Ht(t,n)}}function FS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function BS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function kS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function zS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function HS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function VS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function GS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function WS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function XS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?jm:qm;t.setTexture2D(e||r,i)}function YS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$m,i)}function qS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zm,i)}function jS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Km,i)}function KS(s){switch(s){case 5126:return PS;case 35664:return LS;case 35665:return IS;case 35666:return DS;case 35674:return NS;case 35675:return OS;case 35676:return US;case 5124:case 35670:return FS;case 35667:case 35671:return BS;case 35668:case 35672:return kS;case 35669:case 35673:return zS;case 5125:return HS;case 36294:return VS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return jS}}function $S(s,e){s.uniform1fv(this.addr,e)}function ZS(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function JS(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function QS(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function eM(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tM(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nM(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function iM(s,e){s.uniform1iv(this.addr,e)}function rM(s,e){s.uniform2iv(this.addr,e)}function sM(s,e){s.uniform3iv(this.addr,e)}function oM(s,e){s.uniform4iv(this.addr,e)}function aM(s,e){s.uniform1uiv(this.addr,e)}function lM(s,e){s.uniform2uiv(this.addr,e)}function cM(s,e){s.uniform3uiv(this.addr,e)}function uM(s,e){s.uniform4uiv(this.addr,e)}function hM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qm,r[o])}function dM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$m,r[o])}function fM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zm,r[o])}function pM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Km,r[o])}function mM(s){switch(s){case 5126:return $S;case 35664:return ZS;case 35665:return JS;case 35666:return QS;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KS(t.type)}}class _M{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mM(t.type)}}class vM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function lf(s,e){s.seq.push(e),s.map[e.id]=e}function xM(s,e,t){const n=s.name,i=n.length;for(Ic.lastIndex=0;;){const r=Ic.exec(n),o=Ic.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===i){lf(t,u===void 0?new gM(a,s,e):new _M(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new vM(a),lf(t,d)),t=d}}}class al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);xM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const yM=37297;let SM=0;function MM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function EM(s){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(s);let n;switch(e===t?n="":e===Tl&&t===El?n="LinearDisplayP3ToLinearSRGB":e===El&&t===Tl&&(n="LinearSRGBToLinearDisplayP3"),s){case Zt:case Nl:return[n,"LinearTransferOETF"];case gn:case Zu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function uf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+MM(s.getShaderSource(e),o)}else return i}function TM(s,e){const t=EM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bM(s,e){let t;switch(e){case v0:t="Linear";break;case x0:t="Reinhard";break;case y0:t="OptimizedCineon";break;case S0:t="ACESFilmic";break;case E0:t="AgX";break;case T0:t="Neutral";break;case M0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function AM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function wM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Po(s){return s!==""}function hf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(s){return s.replace(RM,LM)}const PM=new Map;function LM(s,e){let t=Je[e];if(t===void 0){const n=PM.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yu(t)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(s){return s.replace(IM,DM)}function DM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function NM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ks:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function FM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ym:e="ENVMAP_BLENDING_MULTIPLY";break;case g0:e="ENVMAP_BLENDING_MIX";break;case _0:e="ENVMAP_BLENDING_ADD";break}return e}function BM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=NM(t),u=OM(t),h=UM(t),d=FM(t),f=BM(t),p=AM(t),v=wM(r),g=i.createProgram();let m,l,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Po).join(`
`),m.length>0&&(m+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Po).join(`
`),l.length>0&&(l+=`
`)):(m=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),l=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?Je.tonemapping_pars_fragment:"",t.toneMapping!==pr?bM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=yu(o),o=hf(o,t),o=df(o,t),a=yu(a),a=hf(a,t),a=df(a,t),o=ff(o),a=ff(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,l=["#define varying in",t.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const x=_+m+o,y=_+l+a,w=cf(i,i.VERTEX_SHADER,x),b=cf(i,i.FRAGMENT_SHADER,y);i.attachShader(g,w),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(N){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(b).trim();let q=!0,K=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,b);else{const $=uf(i,w,"vertex"),B=uf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+$+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||z==="")&&(K=!1);K&&(N.diagnostics={runnable:q,programLog:O,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:l}})}i.deleteShader(w),i.deleteShader(b),R=new al(i,g),M=CM(i,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,yM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=b,this}let zM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new VM(e),t.set(e,n)),n}}class VM{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}}function GM(s,e,t,n,i,r,o){const a=new Qu,c=new HM,u=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,N,O,I){const z=O.fog,q=I.geometry,K=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),B=$&&$.mapping===Il?$.image.height:null,J=v[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=P!==void 0?P.length:0;let Ie=0;q.morphAttributes.position!==void 0&&(Ie=1),q.morphAttributes.normal!==void 0&&(Ie=2),q.morphAttributes.color!==void 0&&(Ie=3);let je,j,ne,he;if(J){const tt=ci[J];je=tt.vertexShader,j=tt.fragmentShader}else je=M.vertexShader,j=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),he=c.getFragmentShaderID(M);const ie=s.getRenderTarget(),De=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,k=!!M.map,Xe=!!M.matcap,Ee=!!$,Te=!!M.aoMap,_e=!!M.lightMap,Oe=!!M.bumpMap,Pe=!!M.normalMap,H=!!M.displacementMap,et=!!M.emissiveMap,L=!!M.metalnessMap,A=!!M.roughnessMap,X=M.anisotropy>0,Z=M.clearcoat>0,ee=M.dispersion>0,te=M.iridescence>0,ge=M.sheen>0,ue=M.transmission>0,re=X&&!!M.anisotropyMap,Le=Z&&!!M.clearcoatMap,se=Z&&!!M.clearcoatNormalMap,Se=Z&&!!M.clearcoatRoughnessMap,qe=te&&!!M.iridescenceMap,ve=te&&!!M.iridescenceThicknessMap,xe=ge&&!!M.sheenColorMap,Fe=ge&&!!M.sheenRoughnessMap,We=!!M.specularMap,ot=!!M.specularColorMap,Be=!!M.specularIntensityMap,T=ue&&!!M.transmissionMap,D=ue&&!!M.thicknessMap,W=!!M.gradientMap,Q=!!M.alphaMap,oe=M.alphaTest>0,Ne=!!M.alphaHash,Ge=!!M.extensions;let ht=pr;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=s.toneMapping);const gt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:je,fragmentShader:j,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Re,instancing:De,instancingColor:De&&I.instanceColor!==null,instancingMorph:De&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zt,alphaToCoverage:!!M.alphaToCoverage,map:k,matcap:Xe,envMap:Ee,envMapMode:Ee&&$.mapping,envMapCubeUVHeight:B,aoMap:Te,lightMap:_e,bumpMap:Oe,normalMap:Pe,displacementMap:f&&H,emissiveMap:et,normalMapObjectSpace:Pe&&M.normalMapType===k0,normalMapTangentSpace:Pe&&M.normalMapType===Im,metalnessMap:L,roughnessMap:A,anisotropy:X,anisotropyMap:re,clearcoat:Z,clearcoatMap:Le,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,dispersion:ee,iridescence:te,iridescenceMap:qe,iridescenceThicknessMap:ve,sheen:ge,sheenColorMap:xe,sheenRoughnessMap:Fe,specularMap:We,specularColorMap:ot,specularIntensityMap:Be,transmission:ue,transmissionMap:T,thicknessMap:D,gradientMap:W,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:oe,alphaHash:Ne,combine:M.combine,mapUv:k&&g(M.map.channel),aoMapUv:Te&&g(M.aoMap.channel),lightMapUv:_e&&g(M.lightMap.channel),bumpMapUv:Oe&&g(M.bumpMap.channel),normalMapUv:Pe&&g(M.normalMap.channel),displacementMapUv:H&&g(M.displacementMap.channel),emissiveMapUv:et&&g(M.emissiveMap.channel),metalnessMapUv:L&&g(M.metalnessMap.channel),roughnessMapUv:A&&g(M.roughnessMap.channel),anisotropyMapUv:re&&g(M.anisotropyMap.channel),clearcoatMapUv:Le&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(M.sheenRoughnessMap.channel),specularMapUv:We&&g(M.specularMap.channel),specularColorMapUv:ot&&g(M.specularColorMap.channel),specularIntensityMapUv:Be&&g(M.specularIntensityMap.channel),transmissionMapUv:T&&g(M.transmissionMap.channel),thicknessMapUv:D&&g(M.thicknessMap.channel),alphaMapUv:Q&&g(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Pe||X),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(k||Q),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,useLegacyLights:s._useLegacyLights,decodeVideoTexture:k&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=u.has(1),gt.vertexUv2s=u.has(2),gt.vertexUv3s=u.has(3),u.clear(),gt}function l(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function y(M){const S=v[M.type];let N;if(S){const O=ci[S];N=wv.clone(O.uniforms)}else N=M.uniforms;return N}function w(M,S){let N;for(let O=0,I=h.length;O<I;O++){const z=h[O];if(z.cacheKey===S){N=z,++N.usedTimes;break}}return N===void 0&&(N=new kM(s,S,M,r),h.push(N)),N}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:l,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:R}}function WM(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function XM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,p,v,g,m){let l=s[e];return l===void 0?(l={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},s[e]=l):(l.id=d.id,l.object=d,l.geometry=f,l.material=p,l.groupOrder=v,l.renderOrder=d.renderOrder,l.z=g,l.group=m),e++,l}function a(d,f,p,v,g,m){const l=o(d,f,p,v,g,m);p.transmission>0?n.push(l):p.transparent===!0?i.push(l):t.push(l)}function c(d,f,p,v,g,m){const l=o(d,f,p,v,g,m);p.transmission>0?n.unshift(l):p.transparent===!0?i.unshift(l):t.unshift(l)}function u(d,f){t.length>1&&t.sort(d||XM),n.length>1&&n.sort(f||mf),i.length>1&&i.sort(f||mf)}function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:u}}function YM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new gf,s.set(n,[o])):i>=r.length?(o=new gf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function qM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function jM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let KM=0;function $M(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ZM(s){const e=new qM,t=jM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const i=new U,r=new $e,o=new $e;function a(u,h){let d=0,f=0,p=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let v=0,g=0,m=0,l=0,_=0,x=0,y=0,w=0,b=0,E=0,R=0;u.sort($M);const M=h===!0?Math.PI:1;for(let N=0,O=u.length;N<O;N++){const I=u[N],z=I.color,q=I.intensity,K=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=z.r*q*M,f+=z.g*q*M,p+=z.b*q*M;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],q);R++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const J=I.shadow,P=t.get(I);P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,n.directionalShadow[v]=P,n.directionalShadowMap[v]=$,n.directionalShadowMatrix[v]=I.shadow.matrix,x++}n.directional[v]=B,v++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(z).multiplyScalar(q*M),B.distance=K,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[m]=B;const J=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[m]=J.matrix,I.castShadow){const P=t.get(I);P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,n.spotShadow[m]=P,n.spotShadowMap[m]=$,w++}m++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(z).multiplyScalar(q),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[l]=B,l++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*M),B.distance=I.distance,B.decay=I.decay,I.castShadow){const J=I.shadow,P=t.get(I);P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,P.shadowCameraNear=J.camera.near,P.shadowCameraFar=J.camera.far,n.pointShadow[g]=P,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=B,g++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(q*M),B.groundColor.copy(I.groundColor).multiplyScalar(q*M),n.hemi[_]=B,_++}}l>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const S=n.hash;(S.directionalLength!==v||S.pointLength!==g||S.spotLength!==m||S.rectAreaLength!==l||S.hemiLength!==_||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==w||S.numSpotMaps!==b||S.numLightProbes!==R)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=l,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,S.directionalLength=v,S.pointLength=g,S.spotLength=m,S.rectAreaLength=l,S.hemiLength=_,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=w,S.numSpotMaps=b,S.numLightProbes=R,n.version=KM++)}function c(u,h){let d=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let l=0,_=u.length;l<_;l++){const x=u[l];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function _f(s){const e=new ZM(s),t=[],n=[];function i(h){u.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function JM(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new _f(s),e.set(i,[a])):r>=o.length?(a=new _f(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class QM extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eE extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nE=`uniform sampler2D shadow_pass;
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
}`;function iE(s,e,t){let n=new eh;const i=new He,r=new He,o=new vt,a=new QM({depthPacking:B0}),c=new eE,u={},h=t.maxTextureSize,d={[Gi]:Cn,[Cn]:Gi,[hi]:hi},f=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:tE,fragmentShader:nE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ei;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xm;let l=this.type;this.render=function(b,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),O=s.state;O.setBlending(fr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=l!==Ii&&this.type===Ii,z=l===Ii&&this.type!==Ii;for(let q=0,K=b.length;q<K;q++){const $=b[q],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const J=B.getFrameExtents();if(i.multiply(J),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||I===!0||z===!0){const ce=this.type!==Ii?{minFilter:yn,magFilter:yn}:{};B.map!==null&&B.map.dispose(),B.map=new Qr(i.x,i.y,ce),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const P=B.getViewportCount();for(let ce=0;ce<P;ce++){const Ie=B.getViewport(ce);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(o),B.updateMatrices($,ce),n=B.getFrustum(),y(E,R,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Ii&&_(B,R),B.needsUpdate=!1}l=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,N)};function _(b,E){const R=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qr(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,R,f,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,R,p,g,null)}function x(b,E,R,M){let S=null;const N=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)S=N;else if(S=R.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=S.uuid,I=E.uuid;let z=u[O];z===void 0&&(z={},u[O]=z);let q=z[I];q===void 0&&(q=S.clone(),z[I]=q,E.addEventListener("dispose",w)),S=q}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Ii?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=s.properties.get(S);O.light=R}return S}function y(b,E,R,M,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Ii)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const I=e.update(b),z=b.material;if(Array.isArray(z)){const q=I.groups;for(let K=0,$=q.length;K<$;K++){const B=q[K],J=z[B.materialIndex];if(J&&J.visible){const P=x(b,J,M,S);b.onBeforeShadow(s,b,E,R,I,P,B),s.renderBufferDirect(R,null,I,P,b,B),b.onAfterShadow(s,b,E,R,I,P,B)}}}else if(z.visible){const q=x(b,z,M,S);b.onBeforeShadow(s,b,E,R,I,q,null),s.renderBufferDirect(R,null,I,q,b,null),b.onAfterShadow(s,b,E,R,I,q,null)}}const O=b.children;for(let I=0,z=O.length;I<z;I++)y(O[I],E,R,M,S)}function w(b){b.target.removeEventListener("dispose",w);for(const R in u){const M=u[R],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function rE(s){function e(){let T=!1;const D=new vt;let W=null;const Q=new vt(0,0,0,0);return{setMask:function(oe){W!==oe&&!T&&(s.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){T=oe},setClear:function(oe,Ne,Ge,ht,gt){gt===!0&&(oe*=ht,Ne*=ht,Ge*=ht),D.set(oe,Ne,Ge,ht),Q.equals(D)===!1&&(s.clearColor(oe,Ne,Ge,ht),Q.copy(D))},reset:function(){T=!1,W=null,Q.set(-1,0,0,0)}}}function t(){let T=!1,D=null,W=null,Q=null;return{setTest:function(oe){oe?he(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(oe){D!==oe&&!T&&(s.depthMask(oe),D=oe)},setFunc:function(oe){if(W!==oe){switch(oe){case c0:s.depthFunc(s.NEVER);break;case u0:s.depthFunc(s.ALWAYS);break;case h0:s.depthFunc(s.LESS);break;case yl:s.depthFunc(s.LEQUAL);break;case d0:s.depthFunc(s.EQUAL);break;case f0:s.depthFunc(s.GEQUAL);break;case p0:s.depthFunc(s.GREATER);break;case m0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}W=oe}},setLocked:function(oe){T=oe},setClear:function(oe){Q!==oe&&(s.clearDepth(oe),Q=oe)},reset:function(){T=!1,D=null,W=null,Q=null}}}function n(){let T=!1,D=null,W=null,Q=null,oe=null,Ne=null,Ge=null,ht=null,gt=null;return{setTest:function(tt){T||(tt?he(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(tt){D!==tt&&!T&&(s.stencilMask(tt),D=tt)},setFunc:function(tt,Me,fe){(W!==tt||Q!==Me||oe!==fe)&&(s.stencilFunc(tt,Me,fe),W=tt,Q=Me,oe=fe)},setOp:function(tt,Me,fe){(Ne!==tt||Ge!==Me||ht!==fe)&&(s.stencilOp(tt,Me,fe),Ne=tt,Ge=Me,ht=fe)},setLocked:function(tt){T=tt},setClear:function(tt){gt!==tt&&(s.clearStencil(tt),gt=tt)},reset:function(){T=!1,D=null,W=null,Q=null,oe=null,Ne=null,Ge=null,ht=null,gt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,l=null,_=null,x=null,y=null,w=null,b=new Ye(0,0,0),E=0,R=!1,M=null,S=null,N=null,O=null,I=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),q=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=K>=2);let B=null,J={};const P=s.getParameter(s.SCISSOR_BOX),ce=s.getParameter(s.VIEWPORT),Ie=new vt().fromArray(P),je=new vt().fromArray(ce);function j(T,D,W,Q){const oe=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(T,Ne),s.texParameteri(T,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(T,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<W;Ge++)T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY?s.texImage3D(D,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(D+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return Ne}const ne={};ne[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),he(s.DEPTH_TEST),r.setFunc(yl),Oe(!1),Pe(qh),he(s.CULL_FACE),Te(fr);function he(T){u[T]!==!0&&(s.enable(T),u[T]=!0)}function ie(T){u[T]!==!1&&(s.disable(T),u[T]=!1)}function De(T,D){return h[T]!==D?(s.bindFramebuffer(T,D),h[T]=D,T===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=D),T===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=D),!0):!1}function Re(T,D){let W=f,Q=!1;if(T){W=d.get(D),W===void 0&&(W=[],d.set(D,W));const oe=T.textures;if(W.length!==oe.length||W[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,Ge=oe.length;Ne<Ge;Ne++)W[Ne]=s.COLOR_ATTACHMENT0+Ne;W.length=oe.length,Q=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Q=!0);Q&&s.drawBuffers(W)}function k(T){return p!==T?(s.useProgram(T),p=T,!0):!1}const Xe={[Or]:s.FUNC_ADD,[Y_]:s.FUNC_SUBTRACT,[q_]:s.FUNC_REVERSE_SUBTRACT};Xe[j_]=s.MIN,Xe[K_]=s.MAX;const Ee={[$_]:s.ZERO,[Z_]:s.ONE,[J_]:s.SRC_COLOR,[pu]:s.SRC_ALPHA,[r0]:s.SRC_ALPHA_SATURATE,[n0]:s.DST_COLOR,[e0]:s.DST_ALPHA,[Q_]:s.ONE_MINUS_SRC_COLOR,[mu]:s.ONE_MINUS_SRC_ALPHA,[i0]:s.ONE_MINUS_DST_COLOR,[t0]:s.ONE_MINUS_DST_ALPHA,[s0]:s.CONSTANT_COLOR,[o0]:s.ONE_MINUS_CONSTANT_COLOR,[a0]:s.CONSTANT_ALPHA,[l0]:s.ONE_MINUS_CONSTANT_ALPHA};function Te(T,D,W,Q,oe,Ne,Ge,ht,gt,tt){if(T===fr){v===!0&&(ie(s.BLEND),v=!1);return}if(v===!1&&(he(s.BLEND),v=!0),T!==X_){if(T!==g||tt!==R){if((m!==Or||x!==Or)&&(s.blendEquation(s.FUNC_ADD),m=Or,x=Or),tt)switch(T){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.ONE,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}l=null,_=null,y=null,w=null,b.set(0,0,0),E=0,g=T,R=tt}return}oe=oe||D,Ne=Ne||W,Ge=Ge||Q,(D!==m||oe!==x)&&(s.blendEquationSeparate(Xe[D],Xe[oe]),m=D,x=oe),(W!==l||Q!==_||Ne!==y||Ge!==w)&&(s.blendFuncSeparate(Ee[W],Ee[Q],Ee[Ne],Ee[Ge]),l=W,_=Q,y=Ne,w=Ge),(ht.equals(b)===!1||gt!==E)&&(s.blendColor(ht.r,ht.g,ht.b,gt),b.copy(ht),E=gt),g=T,R=!1}function _e(T,D){T.side===hi?ie(s.CULL_FACE):he(s.CULL_FACE);let W=T.side===Cn;D&&(W=!W),Oe(W),T.blending===Bs&&T.transparent===!1?Te(fr):Te(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),r.setFunc(T.depthFunc),r.setTest(T.depthTest),r.setMask(T.depthWrite),i.setMask(T.colorWrite);const Q=T.stencilWrite;o.setTest(Q),Q&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),et(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(T){M!==T&&(T?s.frontFace(s.CW):s.frontFace(s.CCW),M=T)}function Pe(T){T!==V_?(he(s.CULL_FACE),T!==S&&(T===qh?s.cullFace(s.BACK):T===G_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),S=T}function H(T){T!==N&&(q&&s.lineWidth(T),N=T)}function et(T,D,W){T?(he(s.POLYGON_OFFSET_FILL),(O!==D||I!==W)&&(s.polygonOffset(D,W),O=D,I=W)):ie(s.POLYGON_OFFSET_FILL)}function L(T){T?he(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function A(T){T===void 0&&(T=s.TEXTURE0+z-1),B!==T&&(s.activeTexture(T),B=T)}function X(T,D,W){W===void 0&&(B===null?W=s.TEXTURE0+z-1:W=B);let Q=J[W];Q===void 0&&(Q={type:void 0,texture:void 0},J[W]=Q),(Q.type!==T||Q.texture!==D)&&(B!==W&&(s.activeTexture(W),B=W),s.bindTexture(T,D||ne[T]),Q.type=T,Q.texture=D)}function Z(){const T=J[B];T!==void 0&&T.type!==void 0&&(s.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function qe(){try{s.texImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xe(T){Ie.equals(T)===!1&&(s.scissor(T.x,T.y,T.z,T.w),Ie.copy(T))}function Fe(T){je.equals(T)===!1&&(s.viewport(T.x,T.y,T.z,T.w),je.copy(T))}function We(T,D){let W=c.get(D);W===void 0&&(W=new WeakMap,c.set(D,W));let Q=W.get(T);Q===void 0&&(Q=s.getUniformBlockIndex(D,T.name),W.set(T,Q))}function ot(T,D){const Q=c.get(D).get(T);a.get(D)!==Q&&(s.uniformBlockBinding(D,Q,T.__bindingPointIndex),a.set(D,Q))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},B=null,J={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,l=null,_=null,x=null,y=null,w=null,b=new Ye(0,0,0),E=0,R=!1,M=null,S=null,N=null,O=null,I=null,Ie.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:he,disable:ie,bindFramebuffer:De,drawBuffers:Re,useProgram:k,setBlending:Te,setMaterial:_e,setFlipSided:Oe,setCullFace:Pe,setLineWidth:H,setPolygonOffset:et,setScissorTest:L,activeTexture:A,bindTexture:X,unbindTexture:Z,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:qe,texImage3D:ve,updateUBOMapping:We,uniformBlockBinding:ot,texStorage2D:se,texStorage3D:Se,texSubImage2D:ge,texSubImage3D:ue,compressedTexSubImage2D:re,compressedTexSubImage3D:Le,scissor:xe,viewport:Fe,reset:Be}}function sE(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,A){return p?new OffscreenCanvas(L,A):ia("canvas")}function g(L,A,X){let Z=1;const ee=et(L);if((ee.width>X||ee.height>X)&&(Z=X/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(Z*ee.width),ge=Math.floor(Z*ee.height);d===void 0&&(d=v(te,ge));const ue=A?v(te,ge):d;return ue.width=te,ue.height=ge,ue.getContext("2d").drawImage(L,0,0,te,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+ge+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==yn&&L.minFilter!==Fn}function l(L){s.generateMipmap(L)}function _(L,A,X,Z,ee=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=A;if(A===s.RED&&(X===s.FLOAT&&(te=s.R32F),X===s.HALF_FLOAT&&(te=s.R16F),X===s.UNSIGNED_BYTE&&(te=s.R8)),A===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.R8UI),X===s.UNSIGNED_SHORT&&(te=s.R16UI),X===s.UNSIGNED_INT&&(te=s.R32UI),X===s.BYTE&&(te=s.R8I),X===s.SHORT&&(te=s.R16I),X===s.INT&&(te=s.R32I)),A===s.RG&&(X===s.FLOAT&&(te=s.RG32F),X===s.HALF_FLOAT&&(te=s.RG16F),X===s.UNSIGNED_BYTE&&(te=s.RG8)),A===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.RG8UI),X===s.UNSIGNED_SHORT&&(te=s.RG16UI),X===s.UNSIGNED_INT&&(te=s.RG32UI),X===s.BYTE&&(te=s.RG8I),X===s.SHORT&&(te=s.RG16I),X===s.INT&&(te=s.RG32I)),A===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),A===s.RGBA){const ge=ee?Ml:ft.getTransfer(Z);X===s.FLOAT&&(te=s.RGBA32F),X===s.HALF_FLOAT&&(te=s.RGBA16F),X===s.UNSIGNED_BYTE&&(te=ge===St?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==yn&&L.minFilter!==Fn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function y(L){const A=L.target;A.removeEventListener("dispose",y),b(A),A.isVideoTexture&&h.delete(A)}function w(L){const A=L.target;A.removeEventListener("dispose",w),R(A)}function b(L){const A=n.get(L);if(A.__webglInit===void 0)return;const X=L.source,Z=f.get(X);if(Z){const ee=Z[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(L),Object.keys(Z).length===0&&f.delete(X)}n.remove(L)}function E(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const X=L.source,Z=f.get(X);delete Z[A.__cacheKey],o.memory.textures--}function R(L){const A=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(A.__webglFramebuffer[Z]))for(let ee=0;ee<A.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(A.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(A.__webglFramebuffer[Z]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Z])}else{if(Array.isArray(A.__webglFramebuffer))for(let Z=0;Z<A.__webglFramebuffer.length;Z++)s.deleteFramebuffer(A.__webglFramebuffer[Z]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Z=0;Z<A.__webglColorRenderbuffer.length;Z++)A.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Z]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const X=L.textures;for(let Z=0,ee=X.length;Z<ee;Z++){const te=n.get(X[Z]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(X[Z])}n.remove(L)}let M=0;function S(){M=0}function N(){const L=M;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),M+=1,L}function O(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function I(L,A){const X=n.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(X,L,A);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+A)}function z(L,A){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Ie(X,L,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+A)}function q(L,A){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Ie(X,L,A);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+A)}function K(L,A){const X=n.get(L);if(L.version>0&&X.__version!==L.version){je(X,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+A)}const $={[$s]:s.REPEAT,[lr]:s.CLAMP_TO_EDGE,[Sl]:s.MIRRORED_REPEAT},B={[yn]:s.NEAREST,[Mm]:s.NEAREST_MIPMAP_NEAREST,[Ro]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[ol]:s.LINEAR_MIPMAP_NEAREST,[Fi]:s.LINEAR_MIPMAP_LINEAR},J={[z0]:s.NEVER,[Y0]:s.ALWAYS,[H0]:s.LESS,[Dm]:s.LEQUAL,[V0]:s.EQUAL,[X0]:s.GEQUAL,[G0]:s.GREATER,[W0]:s.NOTEQUAL};function P(L,A){if(A.type===mi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Fn||A.magFilter===ol||A.magFilter===Ro||A.magFilter===Fi||A.minFilter===Fn||A.minFilter===ol||A.minFilter===Ro||A.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,$[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,$[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,$[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,B[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,B[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yn||A.minFilter!==Ro&&A.minFilter!==Fi||A.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ce(L,A){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",y));const Z=A.source;let ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));const te=O(A);if(te!==L.__cacheKey){ee[te]===void 0&&(ee[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[te].usedTimes++;const ge=ee[L.__cacheKey];ge!==void 0&&(ee[L.__cacheKey].usedTimes--,ge.usedTimes===0&&E(A)),L.__cacheKey=te,L.__webglTexture=ee[te].texture}return X}function Ie(L,A,X){let Z=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=s.TEXTURE_3D);const ee=ce(L,A),te=A.source;t.bindTexture(Z,L.__webglTexture,s.TEXTURE0+X);const ge=n.get(te);if(te.version!==ge.__version||ee===!0){t.activeTexture(s.TEXTURE0+X);const ue=ft.getPrimaries(ft.workingColorSpace),re=A.colorSpace===nr?null:ft.getPrimaries(A.colorSpace),Le=A.colorSpace===nr||ue===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let se=g(A.image,!1,i.maxTextureSize);se=H(A,se);const Se=r.convert(A.format,A.colorSpace),qe=r.convert(A.type);let ve=_(A.internalFormat,Se,qe,A.colorSpace,A.isVideoTexture);P(Z,A);let xe;const Fe=A.mipmaps,We=A.isVideoTexture!==!0,ot=ge.__version===void 0||ee===!0,Be=te.dataReady,T=x(A,se);if(A.isDepthTexture)ve=s.DEPTH_COMPONENT16,A.type===mi?ve=s.DEPTH_COMPONENT32F:A.type===Zs?ve=s.DEPTH_COMPONENT24:A.type===sa&&(ve=s.DEPTH24_STENCIL8),ot&&(We?t.texStorage2D(s.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,ve,se.width,se.height,0,Se,qe,null));else if(A.isDataTexture)if(Fe.length>0){We&&ot&&t.texStorage2D(s.TEXTURE_2D,T,ve,Fe[0].width,Fe[0].height);for(let D=0,W=Fe.length;D<W;D++)xe=Fe[D],We?Be&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,xe.width,xe.height,Se,qe,xe.data):t.texImage2D(s.TEXTURE_2D,D,ve,xe.width,xe.height,0,Se,qe,xe.data);A.generateMipmaps=!1}else We?(ot&&t.texStorage2D(s.TEXTURE_2D,T,ve,se.width,se.height),Be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Se,qe,se.data)):t.texImage2D(s.TEXTURE_2D,0,ve,se.width,se.height,0,Se,qe,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){We&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,T,ve,Fe[0].width,Fe[0].height,se.depth);for(let D=0,W=Fe.length;D<W;D++)xe=Fe[D],A.format!==ri?Se!==null?We?Be&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,xe.width,xe.height,se.depth,Se,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,ve,xe.width,xe.height,se.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,xe.width,xe.height,se.depth,Se,qe,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,D,ve,xe.width,xe.height,se.depth,0,Se,qe,xe.data)}else{We&&ot&&t.texStorage2D(s.TEXTURE_2D,T,ve,Fe[0].width,Fe[0].height);for(let D=0,W=Fe.length;D<W;D++)xe=Fe[D],A.format!==ri?Se!==null?We?Be&&t.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,D,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Be&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,xe.width,xe.height,Se,qe,xe.data):t.texImage2D(s.TEXTURE_2D,D,ve,xe.width,xe.height,0,Se,qe,xe.data)}else if(A.isDataArrayTexture)We?(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,T,ve,se.width,se.height,se.depth),Be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,qe,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,Se,qe,se.data);else if(A.isData3DTexture)We?(ot&&t.texStorage3D(s.TEXTURE_3D,T,ve,se.width,se.height,se.depth),Be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,qe,se.data)):t.texImage3D(s.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,Se,qe,se.data);else if(A.isFramebufferTexture){if(ot)if(We)t.texStorage2D(s.TEXTURE_2D,T,ve,se.width,se.height);else{let D=se.width,W=se.height;for(let Q=0;Q<T;Q++)t.texImage2D(s.TEXTURE_2D,Q,ve,D,W,0,Se,qe,null),D>>=1,W>>=1}}else if(Fe.length>0){if(We&&ot){const D=et(Fe[0]);t.texStorage2D(s.TEXTURE_2D,T,ve,D.width,D.height)}for(let D=0,W=Fe.length;D<W;D++)xe=Fe[D],We?Be&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,Se,qe,xe):t.texImage2D(s.TEXTURE_2D,D,ve,Se,qe,xe);A.generateMipmaps=!1}else if(We){if(ot){const D=et(se);t.texStorage2D(s.TEXTURE_2D,T,ve,D.width,D.height)}Be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,qe,se)}else t.texImage2D(s.TEXTURE_2D,0,ve,Se,qe,se);m(A)&&l(Z),ge.__version=te.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function je(L,A,X){if(A.image.length!==6)return;const Z=ce(L,A),ee=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);const te=n.get(ee);if(ee.version!==te.__version||Z===!0){t.activeTexture(s.TEXTURE0+X);const ge=ft.getPrimaries(ft.workingColorSpace),ue=A.colorSpace===nr?null:ft.getPrimaries(A.colorSpace),re=A.colorSpace===nr||ge===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Le=A.isCompressedTexture||A.image[0].isCompressedTexture,se=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let W=0;W<6;W++)!Le&&!se?Se[W]=g(A.image[W],!0,i.maxCubemapSize):Se[W]=se?A.image[W].image:A.image[W],Se[W]=H(A,Se[W]);const qe=Se[0],ve=r.convert(A.format,A.colorSpace),xe=r.convert(A.type),Fe=_(A.internalFormat,ve,xe,A.colorSpace),We=A.isVideoTexture!==!0,ot=te.__version===void 0||Z===!0,Be=ee.dataReady;let T=x(A,qe);P(s.TEXTURE_CUBE_MAP,A);let D;if(Le){We&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,T,Fe,qe.width,qe.height);for(let W=0;W<6;W++){D=Se[W].mipmaps;for(let Q=0;Q<D.length;Q++){const oe=D[Q];A.format!==ri?ve!==null?We?Be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q,0,0,oe.width,oe.height,ve,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q,Fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q,0,0,oe.width,oe.height,ve,xe,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q,Fe,oe.width,oe.height,0,ve,xe,oe.data)}}}else{if(D=A.mipmaps,We&&ot){D.length>0&&T++;const W=et(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,T,Fe,W.width,W.height)}for(let W=0;W<6;W++)if(se){We?Be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Se[W].width,Se[W].height,ve,xe,Se[W].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Fe,Se[W].width,Se[W].height,0,ve,xe,Se[W].data);for(let Q=0;Q<D.length;Q++){const Ne=D[Q].image[W].image;We?Be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q+1,0,0,Ne.width,Ne.height,ve,xe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q+1,Fe,Ne.width,Ne.height,0,ve,xe,Ne.data)}}else{We?Be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ve,xe,Se[W]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Fe,ve,xe,Se[W]);for(let Q=0;Q<D.length;Q++){const oe=D[Q];We?Be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q+1,0,0,ve,xe,oe.image[W]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q+1,Fe,ve,xe,oe.image[W])}}}m(A)&&l(s.TEXTURE_CUBE_MAP),te.__version=ee.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function j(L,A,X,Z,ee,te){const ge=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),re=_(X.internalFormat,ge,ue,X.colorSpace);if(!n.get(A).__hasExternalTextures){const se=Math.max(1,A.width>>te),Se=Math.max(1,A.height>>te);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,re,se,Se,A.depth,0,ge,ue,null):t.texImage2D(ee,te,re,se,Se,0,ge,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Oe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,n.get(X).__webglTexture,0,_e(A)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,n.get(X).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(L,A,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let Z=s.DEPTH_COMPONENT24;if(X||Oe(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===mi?Z=s.DEPTH_COMPONENT32F:ee.type===Zs&&(Z=s.DEPTH_COMPONENT24));const te=_e(A);Oe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,Z,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Z,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const Z=_e(A);X&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const Z=A.textures;for(let ee=0;ee<Z.length;ee++){const te=Z[ee],ge=r.convert(te.format,te.colorSpace),ue=r.convert(te.type),re=_(te.internalFormat,ge,ue,te.colorSpace),Le=_e(A);X&&Oe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,re,A.width,A.height):Oe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,re,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,re,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);const Z=n.get(A.depthTexture).__webglTexture,ee=_e(A);if(A.depthTexture.format===ks)Oe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(A.depthTexture.format===ta)Oe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ie(L){const A=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");he(A.__webglFramebuffer,L)}else if(X){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]=s.createRenderbuffer(),ne(A.__webglDepthbuffer[Z],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ne(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(L,A,X){const Z=n.get(L);A!==void 0&&j(Z.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ie(L)}function Re(L){const A=L.texture,X=n.get(L),Z=n.get(A);L.addEventListener("dispose",w);const ee=L.textures,te=L.isWebGLCubeRenderTarget===!0,ge=ee.length>1;if(ge||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=A.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let re=0;re<A.mipmaps.length;re++)X.__webglFramebuffer[ue][re]=s.createFramebuffer()}else X.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)X.__webglFramebuffer[ue]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(ge)for(let ue=0,re=ee.length;ue<re;ue++){const Le=n.get(ee[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Oe(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const re=ee[ue];X.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);const Le=r.convert(re.format,re.colorSpace),se=r.convert(re.type),Se=_(re.internalFormat,Le,se,re.colorSpace,L.isXRRenderTarget===!0),qe=_e(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Se,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),P(s.TEXTURE_CUBE_MAP,A);for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)j(X.__webglFramebuffer[ue][re],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,re);else j(X.__webglFramebuffer[ue],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(A)&&l(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ue=0,re=ee.length;ue<re;ue++){const Le=ee[ue],se=n.get(Le);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),P(s.TEXTURE_2D,Le),j(X.__webglFramebuffer,L,Le,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(Le)&&l(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),P(ue,A),A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)j(X.__webglFramebuffer[re],L,A,s.COLOR_ATTACHMENT0,ue,re);else j(X.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,ue,0);m(A)&&l(ue),t.unbindTexture()}L.depthBuffer&&ie(L)}function k(L){const A=L.textures;for(let X=0,Z=A.length;X<Z;X++){const ee=A[X];if(m(ee)){const te=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(ee).__webglTexture;t.bindTexture(te,ge),l(te),t.unbindTexture()}}}const Xe=[],Ee=[];function Te(L){if(L.samples>0){if(Oe(L)===!1){const A=L.textures,X=L.width,Z=L.height;let ee=s.COLOR_BUFFER_BIT;const te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(L),ue=A.length>1;if(ue)for(let re=0;re<A.length;re++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let re=0;re<A.length;re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[re]);const Le=n.get(A[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,X,Z,0,0,X,Z,ee,s.NEAREST),c===!0&&(Xe.length=0,Ee.length=0,Xe.push(s.COLOR_ATTACHMENT0+re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Xe.push(te),Ee.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let re=0;re<A.length;re++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,ge.__webglColorRenderbuffer[re]);const Le=n.get(A[re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _e(L){return Math.min(i.maxSamples,L.samples)}function Oe(L){const A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(L){const A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function H(L,A){const X=L.colorSpace,Z=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Zt&&X!==nr&&(ft.getTransfer(X)===St?(Z!==ri||ee!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=De,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Oe}function oE(s,e){function t(n,i=nr){let r;const o=ft.getTransfer(i);if(n===vr)return s.UNSIGNED_BYTE;if(n===bm)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Am)return s.UNSIGNED_SHORT_5_5_5_1;if(n===C0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===A0)return s.BYTE;if(n===w0)return s.SHORT;if(n===Em)return s.UNSIGNED_SHORT;if(n===Tm)return s.INT;if(n===Zs)return s.UNSIGNED_INT;if(n===mi)return s.FLOAT;if(n===Dl)return s.HALF_FLOAT;if(n===R0)return s.ALPHA;if(n===P0)return s.RGB;if(n===ri)return s.RGBA;if(n===L0)return s.LUMINANCE;if(n===I0)return s.LUMINANCE_ALPHA;if(n===ks)return s.DEPTH_COMPONENT;if(n===ta)return s.DEPTH_STENCIL;if(n===wm)return s.RED;if(n===Cm)return s.RED_INTEGER;if(n===D0)return s.RG;if(n===Rm)return s.RG_INTEGER;if(n===Pm)return s.RGBA_INTEGER;if(n===ic||n===rc||n===sc||n===oc)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ic)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jh||n===Qh||n===ed||n===td)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ed)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===td)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nd||n===id||n===rd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nd||n===id)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sd||n===od||n===ad||n===ld||n===cd||n===ud||n===hd||n===dd||n===fd||n===pd||n===md||n===gd||n===_d||n===vd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===od)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ad)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ld)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ud)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===md)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_d)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vd)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===xd||n===yd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===N0||n===Sd||n===Md||n===Ed)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Md)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ed)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class aE extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),l=this._getHandJoint(u,g);m!==null&&(l.matrix.fromArray(m.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=m.radius),l.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uE=`
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

}`;class hE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new xr({vertexShader:cE,fragmentShader:uE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new Ol(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class dE extends ns{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,d=null,f=null,p=null,v=null;const g=new hE,m=t.getContextAttributes();let l=null,_=null;const x=[],y=[],w=new He;let b=null;const E=new En;E.layers.enable(1),E.viewport=new vt;const R=new En;R.layers.enable(2),R.viewport=new vt;const M=[E,R],S=new aE;S.layers.enable(1),S.layers.enable(2);let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=x[j];return ne===void 0&&(ne=new Dc,x[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=x[j];return ne===void 0&&(ne=new Dc,x[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=x[j];return ne===void 0&&(ne=new Dc,x[j]=ne),ne.getHandSpace()};function I(j){const ne=y.indexOf(j.inputSource);if(ne===-1)return;const he=x[ne];he!==void 0&&(he.update(j.inputSource,j.frame,u||o),he.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let j=0;j<x.length;j++){const ne=y[j];ne!==null&&(y[j]=null,x[j].disconnect(ne))}N=null,O=null,g.reset(),e.setRenderTarget(l),p=null,f=null,d=null,i=null,_=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(l=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Qr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,he=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?ta:ks,he=m.stencil?sa:Zs);const De={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Qr(f.textureWidth,f.textureHeight,{format:ri,type:vr,depthTexture:new Ym(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(j){for(let ne=0;ne<j.removed.length;ne++){const he=j.removed[ne],ie=y.indexOf(he);ie>=0&&(y[ie]=null,x[ie].disconnect(he))}for(let ne=0;ne<j.added.length;ne++){const he=j.added[ne];let ie=y.indexOf(he);if(ie===-1){for(let Re=0;Re<x.length;Re++)if(Re>=y.length){y.push(he),ie=Re;break}else if(y[Re]===null){y[Re]=he,ie=Re;break}if(ie===-1)break}const De=x[ie];De&&De.connect(he)}}const K=new U,$=new U;function B(j,ne,he){K.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const ie=K.distanceTo($),De=ne.projectionMatrix.elements,Re=he.projectionMatrix.elements,k=De[14]/(De[10]-1),Xe=De[14]/(De[10]+1),Ee=(De[9]+1)/De[5],Te=(De[9]-1)/De[5],_e=(De[8]-1)/De[0],Oe=(Re[8]+1)/Re[0],Pe=k*_e,H=k*Oe,et=ie/(-_e+Oe),L=et*-_e;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(L),j.translateZ(et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=k+et,X=Xe+et,Z=Pe-L,ee=H+(ie-L),te=Ee*Xe/X*A,ge=Te*Xe/X*A;j.projectionMatrix.makePerspective(Z,ee,te,ge,A,X),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function J(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;g.texture!==null&&(j.near=g.depthNear,j.far=g.depthFar),S.near=R.near=E.near=j.near,S.far=R.far=E.far=j.far,(N!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,O=S.far,E.near=N,E.far=O,R.near=N,R.far=O,E.updateProjectionMatrix(),R.updateProjectionMatrix(),j.updateProjectionMatrix());const ne=j.parent,he=S.cameras;J(S,ne);for(let ie=0;ie<he.length;ie++)J(he[ie],ne);he.length===2?B(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),P(j,S,ne)};function P(j,ne,he){he===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Qs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null};let ce=null;function Ie(j,ne){if(h=ne.getViewerPose(u||o),v=ne,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ie=!1;he.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let Re=0;Re<he.length;Re++){const k=he[Re];let Xe=null;if(p!==null)Xe=p.getViewport(k);else{const Te=d.getViewSubImage(f,k);Xe=Te.viewport,Re===0&&(e.setRenderTargetTextures(_,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(_))}let Ee=M[Re];Ee===void 0&&(Ee=new En,Ee.layers.enable(Re),Ee.viewport=new vt,M[Re]=Ee),Ee.matrix.fromArray(k.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(k.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Re===0&&(S.matrix.copy(Ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(Ee)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){const Re=d.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,i.renderState)}}for(let he=0;he<x.length;he++){const ie=y[he],De=x[he];ie!==null&&De!==void 0&&De.update(ie,ne,u||o)}g.render(e,S),ce&&ce(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const je=new Xm;je.setAnimationLoop(Ie),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}}const Rr=new Si,fE=new $e;function pE(s,e){function t(m,l){m.matrixAutoUpdate===!0&&m.updateMatrix(),l.value.copy(m.matrix)}function n(m,l){l.color.getRGB(m.fogColor.value,Vm(s)),l.isFog?(m.fogNear.value=l.near,m.fogFar.value=l.far):l.isFogExp2&&(m.fogDensity.value=l.density)}function i(m,l,_,x,y){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(m,l):l.isMeshToonMaterial?(r(m,l),d(m,l)):l.isMeshPhongMaterial?(r(m,l),h(m,l)):l.isMeshStandardMaterial?(r(m,l),f(m,l),l.isMeshPhysicalMaterial&&p(m,l,y)):l.isMeshMatcapMaterial?(r(m,l),v(m,l)):l.isMeshDepthMaterial?r(m,l):l.isMeshDistanceMaterial?(r(m,l),g(m,l)):l.isMeshNormalMaterial?r(m,l):l.isLineBasicMaterial?(o(m,l),l.isLineDashedMaterial&&a(m,l)):l.isPointsMaterial?c(m,l,_,x):l.isSpriteMaterial?u(m,l):l.isShadowMaterial?(m.color.value.copy(l.color),m.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(m,l){m.opacity.value=l.opacity,l.color&&m.diffuse.value.copy(l.color),l.emissive&&m.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(m.map.value=l.map,t(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.bumpMap&&(m.bumpMap.value=l.bumpMap,t(l.bumpMap,m.bumpMapTransform),m.bumpScale.value=l.bumpScale,l.side===Cn&&(m.bumpScale.value*=-1)),l.normalMap&&(m.normalMap.value=l.normalMap,t(l.normalMap,m.normalMapTransform),m.normalScale.value.copy(l.normalScale),l.side===Cn&&m.normalScale.value.negate()),l.displacementMap&&(m.displacementMap.value=l.displacementMap,t(l.displacementMap,m.displacementMapTransform),m.displacementScale.value=l.displacementScale,m.displacementBias.value=l.displacementBias),l.emissiveMap&&(m.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,m.emissiveMapTransform)),l.specularMap&&(m.specularMap.value=l.specularMap,t(l.specularMap,m.specularMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest);const _=e.get(l),x=_.envMap,y=_.envMapRotation;if(x&&(m.envMap.value=x,Rr.copy(y),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(fE.makeRotationFromEuler(Rr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=l.reflectivity,m.ior.value=l.ior,m.refractionRatio.value=l.refractionRatio),l.lightMap){m.lightMap.value=l.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=l.lightMapIntensity*w,t(l.lightMap,m.lightMapTransform)}l.aoMap&&(m.aoMap.value=l.aoMap,m.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,m.aoMapTransform))}function o(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,l.map&&(m.map.value=l.map,t(l.map,m.mapTransform))}function a(m,l){m.dashSize.value=l.dashSize,m.totalSize.value=l.dashSize+l.gapSize,m.scale.value=l.scale}function c(m,l,_,x){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.size.value=l.size*_,m.scale.value=x*.5,l.map&&(m.map.value=l.map,t(l.map,m.uvTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function u(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.rotation.value=l.rotation,l.map&&(m.map.value=l.map,t(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function h(m,l){m.specular.value.copy(l.specular),m.shininess.value=Math.max(l.shininess,1e-4)}function d(m,l){l.gradientMap&&(m.gradientMap.value=l.gradientMap)}function f(m,l){m.metalness.value=l.metalness,l.metalnessMap&&(m.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,m.metalnessMapTransform)),m.roughness.value=l.roughness,l.roughnessMap&&(m.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,m.roughnessMapTransform)),l.envMap&&(m.envMapIntensity.value=l.envMapIntensity)}function p(m,l,_){m.ior.value=l.ior,l.sheen>0&&(m.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),m.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(m.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,m.sheenColorMapTransform)),l.sheenRoughnessMap&&(m.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,m.sheenRoughnessMapTransform))),l.clearcoat>0&&(m.clearcoat.value=l.clearcoat,m.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(m.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,m.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(m.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Cn&&m.clearcoatNormalScale.value.negate())),l.dispersion>0&&(m.dispersion.value=l.dispersion),l.iridescence>0&&(m.iridescence.value=l.iridescence,m.iridescenceIOR.value=l.iridescenceIOR,m.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(m.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,m.iridescenceMapTransform)),l.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),l.transmission>0&&(m.transmission.value=l.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),l.transmissionMap&&(m.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,m.transmissionMapTransform)),m.thickness.value=l.thickness,l.thicknessMap&&(m.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=l.attenuationDistance,m.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(m.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(m.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=l.specularIntensity,m.specularColor.value.copy(l.specularColor),l.specularColorMap&&(m.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,m.specularColorMapTransform)),l.specularIntensityMap&&(m.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,l){l.matcap&&(m.matcap.value=l.matcap)}function g(m,l){const _=e.get(l).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function u(_,x){let y=i[_.id];y===void 0&&(v(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(_,w);const b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){const x=d();_.__bindingPointIndex=x;const y=s.createBuffer(),w=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=i[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,E=y.length;b<E;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,S=R.length;M<S;M++){const N=R[M];if(p(N,b,M,w)===!0){const O=N.__offset,I=Array.isArray(N.value)?N.value:[N.value];let z=0;for(let q=0;q<I.length;q++){const K=I[q],$=g(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,O+z,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,x,y,w){const b=_.value,E=x+"_"+y;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:w[E]=b.clone(),!0;{const R=w[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return w[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function v(_){const x=_.uniforms;let y=0;const w=16;for(let E=0,R=x.length;E<R;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,N=M.length;S<N;S++){const O=M[S],I=Array.isArray(O.value)?O.value:[O.value];for(let z=0,q=I.length;z<q;z++){const K=I[z],$=g(K),B=y%w;B!==0&&w-B<$.boundary&&(y+=w-B),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}const b=y%w;return b>0&&(y+=w-b),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function l(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:u,dispose:l}}class BT{constructor(e={}){const{canvas:t=cv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const l=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this._useLegacyLights=!1,this.toneMapping=pr,this.toneMappingExposure=1;const x=this;let y=!1,w=0,b=0,E=null,R=-1,M=null;const S=new vt,N=new vt;let O=null;const I=new Ye(0);let z=0,q=t.width,K=t.height,$=1,B=null,J=null;const P=new vt(0,0,q,K),ce=new vt(0,0,q,K);let Ie=!1;const je=new eh;let j=!1,ne=!1;const he=new $e,ie=new U,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return E===null?$:1}let k=n;function Xe(C,F){return t.getContext(C,F)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$u}`),t.addEventListener("webglcontextlost",T,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",W,!1),k===null){const F="webgl2";if(k=Xe(F,C),k===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,Te,_e,Oe,Pe,H,et,L,A,X,Z,ee,te,ge,ue,re,Le,se,Se,qe,ve,xe,Fe,We;function ot(){Ee=new TS(k),Ee.init(),xe=new oE(k,Ee),Te=new vS(k,Ee,e,xe),_e=new rE(k),Oe=new wS(k),Pe=new WM,H=new sE(k,Ee,_e,Pe,Te,xe,Oe),et=new yS(x),L=new ES(x),A=new Nv(k),Fe=new gS(k,A),X=new bS(k,A,Oe,Fe),Z=new RS(k,X,A,Oe),Se=new CS(k,Te,H),re=new xS(Pe),ee=new GM(x,et,L,Ee,Te,Fe,re),te=new pE(x,Pe),ge=new YM,ue=new JM(Ee),se=new mS(x,et,L,_e,Z,f,c),Le=new iE(x,Z,Te),We=new mE(k,Oe,Te,_e),qe=new _S(k,Ee,Oe),ve=new AS(k,Ee,Oe),Oe.programs=ee.programs,x.capabilities=Te,x.extensions=Ee,x.properties=Pe,x.renderLists=ge,x.shadowMap=Le,x.state=_e,x.info=Oe}ot();const Be=new dE(x,k);this.xr=Be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(q,K,!1))},this.getSize=function(C){return C.set(q,K)},this.setSize=function(C,F,V=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,K=F,t.width=Math.floor(C*$),t.height=Math.floor(F*$),V===!0&&(t.style.width=C+"px",t.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(q*$,K*$).floor()},this.setDrawingBufferSize=function(C,F,V){q=C,K=F,$=V,t.width=Math.floor(C*V),t.height=Math.floor(F*V),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,F,V,G){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,F,V,G),_e.viewport(S.copy(P).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,F,V,G){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,F,V,G),_e.scissor(N.copy(ce).multiplyScalar($).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){_e.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(C=!0,F=!0,V=!0){let G=0;if(C){let Y=!1;if(E!==null){const ae=E.texture.format;Y=ae===Pm||ae===Rm||ae===Cm}if(Y){const ae=E.texture.type,de=ae===vr||ae===Zs||ae===Em||ae===sa||ae===bm||ae===Am,me=se.getClearColor(),Ce=se.getClearAlpha(),Ve=me.r,we=me.g,Ae=me.b;de?(p[0]=Ve,p[1]=we,p[2]=Ae,p[3]=Ce,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=Ve,v[1]=we,v[2]=Ae,v[3]=Ce,k.clearBufferiv(k.COLOR,0,v))}else G|=k.COLOR_BUFFER_BIT}F&&(G|=k.DEPTH_BUFFER_BIT),V&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",T,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",W,!1),ge.dispose(),ue.dispose(),Pe.dispose(),et.dispose(),L.dispose(),Z.dispose(),Fe.dispose(),We.dispose(),ee.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",tt),Be.removeEventListener("sessionend",Me),fe.stop()};function T(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Oe.autoReset,F=Le.enabled,V=Le.autoUpdate,G=Le.needsUpdate,Y=Le.type;ot(),Oe.autoReset=C,Le.enabled=F,Le.autoUpdate=V,Le.needsUpdate=G,Le.type=Y}function W(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Q(C){const F=C.target;F.removeEventListener("dispose",Q),oe(F)}function oe(C){Ne(C),Pe.remove(C)}function Ne(C){const F=Pe.get(C).programs;F!==void 0&&(F.forEach(function(V){ee.releaseProgram(V)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,V,G,Y,ae){F===null&&(F=De);const de=Y.isMesh&&Y.matrixWorld.determinant()<0,me=Vt(C,F,V,G,Y);_e.setMaterial(G,de);let Ce=V.index,Ve=1;if(G.wireframe===!0){if(Ce=X.getWireframeAttribute(V),Ce===void 0)return;Ve=2}const we=V.drawRange,Ae=V.attributes.position;let ut=we.start*Ve,Nt=(we.start+we.count)*Ve;ae!==null&&(ut=Math.max(ut,ae.start*Ve),Nt=Math.min(Nt,(ae.start+ae.count)*Ve)),Ce!==null?(ut=Math.max(ut,0),Nt=Math.min(Nt,Ce.count)):Ae!=null&&(ut=Math.max(ut,0),Nt=Math.min(Nt,Ae.count));const Jt=Nt-ut;if(Jt<0||Jt===1/0)return;Fe.setup(Y,G,me,V,Ce);let ln,Ke=qe;if(Ce!==null&&(ln=A.get(Ce),Ke=ve,Ke.setIndex(ln)),Y.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Re()),Ke.setMode(k.LINES)):Ke.setMode(k.TRIANGLES);else if(Y.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*Re()),Y.isLineSegments?Ke.setMode(k.LINES):Y.isLineLoop?Ke.setMode(k.LINE_LOOP):Ke.setMode(k.LINE_STRIP)}else Y.isPoints?Ke.setMode(k.POINTS):Y.isSprite&&Ke.setMode(k.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?Ke.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):Ke.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ke.renderInstances(ut,Jt,Y.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,oi=Math.min(V.instanceCount,ze);Ke.renderInstances(ut,Jt,oi)}else Ke.render(ut,Jt)};function Ge(C,F,V){C.transparent===!0&&C.side===hi&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,wt(C,F,V),C.side=Gi,C.needsUpdate=!0,wt(C,F,V),C.side=hi):wt(C,F,V)}this.compile=function(C,F,V=null){V===null&&(V=C),m=ue.get(V),m.init(F),_.push(m),V.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==V&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);const G=new Set;return C.traverse(function(Y){const ae=Y.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const me=ae[de];Ge(me,V,Y),G.add(me)}else Ge(ae,V,Y),G.add(ae)}),_.pop(),m=null,G},this.compileAsync=function(C,F,V=null){const G=this.compile(C,F,V);return new Promise(Y=>{function ae(){if(G.forEach(function(de){Pe.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){Y(C);return}setTimeout(ae,10)}Ee.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ht=null;function gt(C){ht&&ht(C)}function tt(){fe.stop()}function Me(){fe.start()}const fe=new Xm;fe.setAnimationLoop(gt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(C){ht=C,Be.setAnimationLoop(C),C===null?fe.stop():fe.start()},Be.addEventListener("sessionstart",tt),Be.addEventListener("sessionend",Me),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(F),F=Be.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,F,E),m=ue.get(C,_.length),m.init(F),_.push(m),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(he),ne=this.localClippingEnabled,j=re.init(this.clippingPlanes,ne),g=ge.get(C,l.length),g.init(),l.push(g),Ze(C,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(B,J);const V=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1;V&&se.addToRenderList(g,C),this.info.render.frame++,j===!0&&re.beginShadows();const G=m.state.shadowsArray;Le.render(G,C,F),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,ae=g.transmissive;if(m.setupLights(x._useLegacyLights),F.isArrayCamera){const de=F.cameras;if(ae.length>0)for(let me=0,Ce=de.length;me<Ce;me++){const Ve=de[me];Ue(Y,ae,C,Ve)}V&&se.render(C);for(let me=0,Ce=de.length;me<Ce;me++){const Ve=de[me];le(g,C,Ve,Ve.viewport)}}else ae.length>0&&Ue(Y,ae,C,F),V&&se.render(C),le(g,C,F);E!==null&&(H.updateMultisampleRenderTarget(E),H.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,F),Fe.resetDefaultState(),R=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],j===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,l.pop(),l.length>0?g=l[l.length-1]:g=null};function Ze(C,F,V,G){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||je.intersectsSprite(C)){G&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const de=Z.update(C),me=C.material;me.visible&&g.push(C,de,me,V,ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||je.intersectsObject(C))){const de=Z.update(C),me=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ie.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ie.copy(de.boundingSphere.center)),ie.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(me)){const Ce=de.groups;for(let Ve=0,we=Ce.length;Ve<we;Ve++){const Ae=Ce[Ve],ut=me[Ae.materialIndex];ut&&ut.visible&&g.push(C,de,ut,V,ie.z,Ae)}}else me.visible&&g.push(C,de,me,V,ie.z,null)}}const ae=C.children;for(let de=0,me=ae.length;de<me;de++)Ze(ae[de],F,V,G)}function le(C,F,V,G){const Y=C.opaque,ae=C.transmissive,de=C.transparent;m.setupLightsView(V),j===!0&&re.setGlobalState(x.clippingPlanes,V),G&&_e.viewport(S.copy(G)),Y.length>0&&be(Y,F,V),ae.length>0&&be(ae,F,V),de.length>0&&be(de,F,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ue(C,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Qr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Dl:vr,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ae=m.state.transmissionRenderTarget[G.id],de=G.viewport||S;ae.setSize(de.z,de.w);const me=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(I),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const Ce=x.toneMapping;x.toneMapping=pr;const Ve=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),j===!0&&re.setGlobalState(x.clippingPlanes,G),be(C,V,G),H.updateMultisampleRenderTarget(ae),H.updateRenderTargetMipmap(ae),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ae=0,ut=F.length;Ae<ut;Ae++){const Nt=F[Ae],Jt=Nt.object,ln=Nt.geometry,Ke=Nt.material,ze=Nt.group;if(Ke.side===hi&&Jt.layers.test(G.layers)){const oi=Ke.side;Ke.side=Cn,Ke.needsUpdate=!0,ke(Jt,V,G,ln,Ke,ze),Ke.side=oi,Ke.needsUpdate=!0,we=!0}}we===!0&&(H.updateMultisampleRenderTarget(ae),H.updateRenderTargetMipmap(ae))}x.setRenderTarget(me),x.setClearColor(I,z),Ve!==void 0&&(G.viewport=Ve),x.toneMapping=Ce}function be(C,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,ae=C.length;Y<ae;Y++){const de=C[Y],me=de.object,Ce=de.geometry,Ve=G===null?de.material:G,we=de.group;me.layers.test(V.layers)&&ke(me,F,V,Ce,Ve,we)}}function ke(C,F,V,G,Y,ae){C.onBeforeRender(x,F,V,G,Y,ae),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(x,F,V,G,C,ae),Y.transparent===!0&&Y.side===hi&&Y.forceSinglePass===!1?(Y.side=Cn,Y.needsUpdate=!0,x.renderBufferDirect(V,F,G,Y,C,ae),Y.side=Gi,Y.needsUpdate=!0,x.renderBufferDirect(V,F,G,Y,C,ae),Y.side=hi):x.renderBufferDirect(V,F,G,Y,C,ae),C.onAfterRender(x,F,V,G,Y,ae)}function wt(C,F,V){F.isScene!==!0&&(F=De);const G=Pe.get(C),Y=m.state.lights,ae=m.state.shadowsArray,de=Y.state.version,me=ee.getParameters(C,Y.state,ae,F,V),Ce=ee.getProgramCacheKey(me);let Ve=G.programs;G.environment=C.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(C.isMeshStandardMaterial?L:et).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",Q),Ve=new Map,G.programs=Ve);let we=Ve.get(Ce);if(we!==void 0){if(G.currentProgram===we&&G.lightsStateVersion===de)return Et(C,me),we}else me.uniforms=ee.getUniforms(C),C.onBuild(V,me,x),C.onBeforeCompile(me,x),we=ee.acquireProgram(me,Ce),Ve.set(Ce,we),G.uniforms=me.uniforms;const Ae=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Et(C,me),G.needsLights=xt(C),G.lightsStateVersion=de,G.needsLights&&(Ae.ambientLightColor.value=Y.state.ambient,Ae.lightProbe.value=Y.state.probe,Ae.directionalLights.value=Y.state.directional,Ae.directionalLightShadows.value=Y.state.directionalShadow,Ae.spotLights.value=Y.state.spot,Ae.spotLightShadows.value=Y.state.spotShadow,Ae.rectAreaLights.value=Y.state.rectArea,Ae.ltc_1.value=Y.state.rectAreaLTC1,Ae.ltc_2.value=Y.state.rectAreaLTC2,Ae.pointLights.value=Y.state.point,Ae.pointLightShadows.value=Y.state.pointShadow,Ae.hemisphereLights.value=Y.state.hemi,Ae.directionalShadowMap.value=Y.state.directionalShadowMap,Ae.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ae.spotShadowMap.value=Y.state.spotShadowMap,Ae.spotLightMatrix.value=Y.state.spotLightMatrix,Ae.spotLightMap.value=Y.state.spotLightMap,Ae.pointShadowMap.value=Y.state.pointShadowMap,Ae.pointShadowMatrix.value=Y.state.pointShadowMatrix),G.currentProgram=we,G.uniformsList=null,we}function nt(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=al.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function Et(C,F){const V=Pe.get(C);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Vt(C,F,V,G,Y){F.isScene!==!0&&(F=De),H.resetTextureUnits();const ae=F.fog,de=G.isMeshStandardMaterial?F.environment:null,me=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zt,Ce=(G.isMeshStandardMaterial?L:et).get(G.envMap||de),Ve=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,we=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color;let Jt=pr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Jt=x.toneMapping);const ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=ln!==void 0?ln.length:0,ze=Pe.get(G),oi=m.state.lights;if(j===!0&&(ne===!0||C!==M)){const Vn=C===M&&G.id===R;re.setState(G,C,Vn)}let dt=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==oi.state.version||ze.outputColorSpace!==me||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Ce||G.fog===!0&&ze.fog!==ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==re.numPlanes||ze.numIntersection!==re.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==we||ze.morphTargets!==Ae||ze.morphNormals!==ut||ze.morphColors!==Nt||ze.toneMapping!==Jt||ze.morphTargetsCount!==Ke)&&(dt=!0):(dt=!0,ze.__version=G.version);let Sr=ze.currentProgram;dt===!0&&(Sr=wt(G,F,Y));let uh=!1,lo=!1,Bl=!1;const Qt=Sr.getUniforms(),Xi=ze.uniforms;if(_e.useProgram(Sr.program)&&(uh=!0,lo=!0,Bl=!0),G.id!==R&&(R=G.id,lo=!0),uh||M!==C){Qt.setValue(k,"projectionMatrix",C.projectionMatrix),Qt.setValue(k,"viewMatrix",C.matrixWorldInverse);const Vn=Qt.map.cameraPosition;Vn!==void 0&&Vn.setValue(k,ie.setFromMatrixPosition(C.matrixWorld)),Te.logarithmicDepthBuffer&&Qt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,lo=!0,Bl=!0)}if(Y.isSkinnedMesh){Qt.setOptional(k,Y,"bindMatrix"),Qt.setOptional(k,Y,"bindMatrixInverse");const Vn=Y.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Qt.setValue(k,"boneTexture",Vn.boneTexture,H))}Y.isBatchedMesh&&(Qt.setOptional(k,Y,"batchingTexture"),Qt.setValue(k,"batchingTexture",Y._matricesTexture,H));const kl=V.morphAttributes;if((kl.position!==void 0||kl.normal!==void 0||kl.color!==void 0)&&Se.update(Y,V,Sr),(lo||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,Qt.setValue(k,"receiveShadow",Y.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Xi.envMap.value=Ce,Xi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Xi.envMapIntensity.value=F.environmentIntensity),lo&&(Qt.setValue(k,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Tt(Xi,Bl),ae&&G.fog===!0&&te.refreshFogUniforms(Xi,ae),te.refreshMaterialUniforms(Xi,G,$,K,m.state.transmissionRenderTarget[C.id]),al.upload(k,nt(ze),Xi,H)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(al.upload(k,nt(ze),Xi,H),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qt.setValue(k,"center",Y.center),Qt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Qt.setValue(k,"normalMatrix",Y.normalMatrix),Qt.setValue(k,"modelMatrix",Y.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Vn=G.uniformsGroups;for(let zl=0,ag=Vn.length;zl<ag;zl++){const hh=Vn[zl];We.update(hh,Sr),We.bind(hh,Sr)}}return Sr}function Tt(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function xt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,F,V){Pe.get(C.texture).__webglTexture=F,Pe.get(C.depthTexture).__webglTexture=V;const G=Pe.get(C);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const V=Pe.get(C);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,V=0){E=C,w=F,b=V;let G=!0,Y=null,ae=!1,de=!1;if(C){const Ce=Pe.get(C);Ce.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),G=!1):Ce.__webglFramebuffer===void 0?H.setupRenderTarget(C):Ce.__hasExternalTextures&&H.rebindTextures(C,Pe.get(C.texture).__webglTexture,Pe.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(de=!0);const we=Pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(we[F])?Y=we[F][V]:Y=we[F],ae=!0):C.samples>0&&H.useMultisampledRTT(C)===!1?Y=Pe.get(C).__webglMultisampledFramebuffer:Array.isArray(we)?Y=we[V]:Y=we,S.copy(C.viewport),N.copy(C.scissor),O=C.scissorTest}else S.copy(P).multiplyScalar($).floor(),N.copy(ce).multiplyScalar($).floor(),O=Ie;if(_e.bindFramebuffer(k.FRAMEBUFFER,Y)&&G&&_e.drawBuffers(C,Y),_e.viewport(S),_e.scissor(N),_e.setScissorTest(O),ae){const Ce=Pe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,V)}else if(de){const Ce=Pe.get(C.texture),Ve=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,V||0,Ve)}R=-1},this.readRenderTargetPixels=function(C,F,V,G,Y,ae,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){_e.bindFramebuffer(k.FRAMEBUFFER,me);try{const Ce=C.texture,Ve=Ce.format,we=Ce.type;if(!Te.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-G&&V>=0&&V<=C.height-Y&&k.readPixels(F,V,G,Y,xe.convert(Ve),xe.convert(we),ae)}finally{const Ce=E!==null?Pe.get(E).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(C,F,V=0){const G=Math.pow(2,-V),Y=Math.floor(F.image.width*G),ae=Math.floor(F.image.height*G);H.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,C.x,C.y,Y,ae),_e.unbindTexture()},this.copyTextureToTexture=function(C,F,V,G=0){const Y=F.image.width,ae=F.image.height,de=xe.convert(V.format),me=xe.convert(V.type);H.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,C.x,C.y,Y,ae,de,me,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,C.x,C.y,F.mipmaps[0].width,F.mipmaps[0].height,de,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,G,C.x,C.y,de,me,F.image),G===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(C,F,V,G,Y=0){const ae=C.max.x-C.min.x,de=C.max.y-C.min.y,me=C.max.z-C.min.z,Ce=xe.convert(G.format),Ve=xe.convert(G.type);let we;if(G.isData3DTexture)H.setTexture3D(G,0),we=k.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)H.setTexture2DArray(G,0),we=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const Ae=k.getParameter(k.UNPACK_ROW_LENGTH),ut=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Nt=k.getParameter(k.UNPACK_SKIP_PIXELS),Jt=k.getParameter(k.UNPACK_SKIP_ROWS),ln=k.getParameter(k.UNPACK_SKIP_IMAGES),Ke=V.isCompressedTexture?V.mipmaps[Y]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,C.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,C.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(we,Y,F.x,F.y,F.z,ae,de,me,Ce,Ve,Ke.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(we,Y,F.x,F.y,F.z,ae,de,me,Ce,Ke.data):k.texSubImage3D(we,Y,F.x,F.y,F.z,ae,de,me,Ce,Ve,Ke),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ae),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ln),Y===0&&G.generateMipmaps&&k.generateMipmap(we),_e.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?H.setTextureCube(C,0):C.isData3DTexture?H.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?H.setTexture2DArray(C,0):H.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){w=0,b=0,E=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zu?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Nl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kT extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Um("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new U;class ih{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ih(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vf=new U,xf=new vt,yf=new vt,_E=new U,Sf=new $e,Ga=new U,Nc=new Mi,Mf=new $e,Oc=new io;class vE extends kn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(i),e.ray.intersectsSphere(Nc)!==!1&&(Mf.copy(i).invert(),Oc.copy(e.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===b0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xf.fromBufferAttribute(i.attributes.skinIndex,e),yf.fromBufferAttribute(i.attributes.skinWeight,e),vf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=yf.getComponent(r);if(o!==0){const a=xf.getComponent(r);Sf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_E.copy(vf).applyMatrix4(Sf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jm extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qm extends qt{constructor(e=null,t=1,n=1,i,r,o,a,c,u=yn,h=yn,d,f){super(null,o,a,c,u,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ef=new $e,xE=new $e;class rh{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:xE;Ef.multiplyMatrices(a,t[r]),Ef.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new rh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qm(t,e,e,ri,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Jm),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Su extends Sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new $e,Tf=new $e,Wa=[],bf=new Wi,yE=new $e,_o=new kn,vo=new Mi;class SE extends kn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Su(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),bf.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(bf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),vo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),Tf.multiplyMatrices(n,bs),_o.matrixWorld=Tf,_o.raycast(e,Wa);for(let o=0,a=Wa.length;o<a;o++){const c=Wa[o];c.instanceId=r,c.object=this,t.push(c)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Su(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qm(new Float32Array(i*this.count),i,this.count,wm,mi));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class eg extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Al=new U,wl=new U,Af=new $e,xo=new io,Xa=new Mi,Uc=new U,wf=new U;class sh extends At{constructor(e=new Ei,t=new eg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Al.fromBufferAttribute(t,i-1),wl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Al.distanceTo(wl);e.setAttribute("lineDistance",new zi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(i),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;Af.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=u){const l=h.getX(g),_=h.getX(g+1),x=Ya(this,e,xo,c,l,_);x&&t.push(x)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),l=Ya(this,e,xo,c,g,m);l&&t.push(l)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=u){const l=Ya(this,e,xo,c,g,g+1);l&&t.push(l)}if(this.isLineLoop){const g=Ya(this,e,xo,c,v-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ya(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Al.fromBufferAttribute(o,i),wl.fromBufferAttribute(o,r),t.distanceSqToSegment(Al,wl,Uc,wf)>n)return;Uc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Uc);if(!(c<e.near||c>e.far))return{distance:c,point:wf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Cf=new U,Rf=new U;class ME extends sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cf.fromBufferAttribute(t,i),Rf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cf.distanceTo(Rf);e.setAttribute("lineDistance",new zi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class EE extends sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tg extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pf=new $e,Mu=new io,qa=new Mi,ja=new U;class TE extends At{constructor(e=new Ei,t=new tg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;Pf.copy(i).invert(),Mu.copy(e.ray).applyMatrix4(Pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p;v<g;v++){const m=u.getX(v);ja.fromBufferAttribute(d,m),Lf(ja,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p;v<g;v++)ja.fromBufferAttribute(d,v),Lf(ja,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lf(s,e,t,n,i,r,o){const a=Mu.distanceSqToPoint(s);if(a<t){const c=new U;Mu.closestPointToPoint(s,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class oh extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Im,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends oh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ka(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function AE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function If(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ng(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class aa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wE extends aa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Td,endingEnd:Td}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bd:r=e,a=2*t-n;break;case Ad:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bd:o=e,c=2*n-t;break;case Ad:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,l=-f*m+2*f*g-f*v,_=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*v+1,x=(-1-p)*m+(1.5+p)*g+.5*v,y=p*m-p*g;for(let w=0;w!==a;++w)r[w]=l*o[h+w]+_*o[u+w]+x*o[c+w]+y*o[d+w];return r}}class CE extends aa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[c+f]*h;return r}}class RE extends aa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new RE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new CE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&bE(i))for(let a=0,c=i.length;a!==c;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(i)c=!0;else{const d=a*n,f=d-n,p=d+n;for(let v=0;v!==n;++v){const g=t[d+v];if(g!==t[f+v]||g!==t[p+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Js;class so extends bi{}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=na;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class ig extends bi{}ig.prototype.ValueTypeName="color";class to extends bi{}to.prototype.ValueTypeName="number";class PE extends aa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let u=e*a;for(let h=u+a;u!==h;u+=4)yi.slerpFlat(r,0,o,u-a,o,u,c);return r}}class es extends bi{InterpolantFactoryMethodLinear(e){return new PE(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Js;es.prototype.InterpolantFactoryMethodSmooth=void 0;class oo extends bi{}oo.prototype.ValueTypeName="string";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=na;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends bi{}no.prototype.ValueTypeName="vector";class LE{constructor(e="",t=-1,n=[],i=O0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(DE(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=AE(c);c=If(c,1,h),u=If(u,1,h),!i&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new to(".morphTargetInfluences["+t[a].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,v,g){if(p.length!==0){const m=[],l=[];ng(p,m,l,v),m.length!==0&&g.push(new d(f,m,l))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let g=0;g<f[v].morphTargets.length;g++)p[f[v].morphTargets[g]]=-1;for(const g in p){const m=[],l=[];for(let _=0;_!==f[v].morphTargets.length;++_){const x=f[v];m.push(x.time),l.push(x.morphTarget===g?1:0)}i.push(new to(".morphTargetInfluence["+g+"]",m,l))}c=p.length*o}else{const p=".bones["+t[d].name+"]";n(no,p+".position",f,"pos",i),n(es,p+".quaternion",f,"rot",i),n(no,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function IE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return ig;case"quaternion":return es;case"bool":case"boolean":return so;case"string":return oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function DE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=IE(s.type);if(s.times===void 0){const t=[],n=[];ng(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const cr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class NE{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],v=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const OE=new NE;class ao{constructor(e){this.manager=e!==void 0?e:OE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class UE extends Error{constructor(e,t){super(e),this.response=t}}class rg extends ao{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=cr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:i});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Li[e],d=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0;let g=0;const m=new ReadableStream({start(l){_();function _(){d.read().then(({done:x,value:y})=>{if(x)l.close();else{g+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let b=0,E=h.length;b<E;b++){const R=h[b];R.onProgress&&R.onProgress(w)}l.enqueue(y),_()}})}}});return new Response(m)}else throw new UE(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{cr.add(e,u);const h=Li[e];delete Li[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=Li[e];if(h===void 0)throw this.manager.itemError(e),u;delete Li[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class FE extends ao{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=cr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ia("img");function c(){h(),cr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class BE extends ao{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new FE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Fl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class zT extends Fl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fc=new $e,Df=new U,Nf=new U;class ah{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kE extends ah{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zE extends Fl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Of=new $e,yo=new U,Bc=new U;class HE extends ah{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),n.position.copy(yo),Bc.copy(n.position),Bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bc),n.updateMatrixWorld(),i.makeTranslation(-yo.x,-yo.y,-yo.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}}class VE extends Fl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new HE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GE extends ah{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WE extends Fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new GE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class XE extends ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=cr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return cr.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),cr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});cr.add(e,c),r.manager.itemStart(e)}}const lh="\\[\\]\\.:\\/",YE=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",qE="[^"+lh.replace("\\.","")+"]",jE=/((?:WC+[\/:])*)/.source.replace("WC",ch),KE=/(WCOD+)?/.source.replace("WCOD",qE),$E=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),ZE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),JE=new RegExp("^"+jE+KE+$E+ZE+"$"),QE=["material","materials","bones","map"];class eT{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(YE,"")}static parseTrackName(e){const t=JE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);QE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=eT;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uf=new $e;class HT{constructor(e,t,n=0,i=1/0){this.ray=new io(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(e,t=!0,n=[]){return Eu(e,this,n,t),n.sort(Ff),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Eu(e[i],this,n,t);return n.sort(Ff),n}}function Ff(s,e){return s.distance-e.distance}function Eu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Eu(i[r],e,t,!0)}}class Bf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$u);function kf(s,e){if(e===U0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===vu||e===Lm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===vu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class VT extends ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sT(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new pT(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new xT(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Xo.extractUrlBase(e);o=Xo.resolveURL(u,this.path)}else o=Xo.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},c=new rg(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sg){try{o[st.KHR_BINARY_GLTF]=new yT(e)}catch(d){i&&i(d);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new DT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case st.KHR_MATERIALS_UNLIT:o[d]=new iT;break;case st.KHR_DRACO_MESH_COMPRESSION:o[d]=new ST(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[d]=new MT;break;case st.KHR_MESH_QUANTIZATION:o[d]=new ET;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function tT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nT{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new Ye(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Zt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new WE(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new VE(h),u.distance=d;break;case"spot":u=new zE(h),u.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,tr(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class iT{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gn))}return Promise.all(i)}}class rT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class sT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}}class oT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class aT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class lT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class cT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class uT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class hT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class dT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gn)),Promise.all(r)}}class fT{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class pT{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class mT{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class gT{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _T{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vT{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,u=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(p),h,d,f,i.mode,i.filter),p})})}else return null}}class xT{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Xn.TRIANGLES&&u.mode!==Xn.TRIANGLE_STRIP&&u.mode!==Xn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,p=[];for(const v of d){const g=new $e,m=new U,l=new yi,_=new U(1,1,1),x=new SE(v.geometry,v.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&l.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,g.compose(m,l,_));for(const y in c)if(y==="_COLOR_0"){const w=c[y];x.instanceColor=new Su(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&v.geometry.setAttribute(y,c[y]);At.prototype.copy.call(x,v),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const sg="glTF",So=12,zf={JSON:1313821514,BIN:5130562};class yT{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-So,r=new DataView(e,So);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===zf.JSON){const u=new Uint8Array(e,So+o,a);this.content=n.decode(u)}else if(c===zf.BIN){const u=So+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ST{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const d=Tu[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Tu[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],p=Hs[f.componentType];u[d]=p.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(p){for(const v in p.attributes){const g=p.attributes[v],m=c[v];m!==void 0&&(g.normalized=m)}d(p)},a,u,Zt,f)})})}}class MT{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ET{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class og extends aa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=i-t,d=(n-t)/h,f=d*d,p=f*d,v=e*u,g=v-u,m=-2*p+3*f,l=p-f,_=1-m,x=l-f+d;for(let y=0;y!==a;y++){const w=o[g+y+a],b=o[g+y+c]*h,E=o[v+y+a],R=o[v+y]*h;r[y]=_*w+x*b+m*E+l*R}return r}}const TT=new yi;class bT extends og{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return TT.fromArray(r).normalize().toArray(r),r}}const Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:yn,9729:Fn,9984:Mm,9985:ol,9986:Ro,9987:Fi},Vf={33071:lr,33648:Sl,10497:$s},kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AT={CUBICSPLINE:void 0,LINEAR:Js,STEP:na},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new oh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),s.DefaultMaterial}function Pr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function tr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CT(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function RT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PT(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hc(t.attributes):e=s.indices+":"+Hc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Hc(s.targets[n]);return e}function Hc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function bu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function LT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const IT=new $e;class DT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new BE(this.options.manager):this.textureLoader=new XE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Pr(r,a,i),tr(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=kc[i.type],a=Hs[i.componentType],c=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Sn(u,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=kc[i.type],u=Hs[i.componentType],h=u.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(p&&p!==d){const l=Math.floor(f/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+l+":"+i.count;let x=t.cache.get(_);x||(g=new u(a,l*p,i.count*p/h),x=new gE(g,p/h),t.cache.add(_,x)),m=new ih(x,c,f%p/h,v)}else a===null?g=new u(i.count*c):g=new u(a,f,i.count*c),m=new Sn(g,c,v);if(i.sparse!==void 0){const l=kc.SCALAR,_=Hs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new _(o[1],x,i.sparse.count*l),b=new u(o[2],y,i.sparse.count*c);a!==null&&(m=new Sn(m.array.slice(),m.itemSize,m.normalized));for(let E=0,R=w.length;E<R;E++){const M=w[E];if(m.setX(M,b[E*c]),c>=2&&m.setY(M,b[E*c+1]),c>=3&&m.setZ(M,b[E*c+2]),c>=4&&m.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Hf[f.magFilter]||Fn,h.minFilter=Hf[f.minFilter]||Fi,h.wrapS=Vf[f.wrapS]||$s,h.wrapT=Vf[f.wrapT]||$s,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(g){const m=new qt(g);m.needsUpdate=!0,f(m)}),t.load(Xo.resolveURL(d,r.path),v,void 0,p)})}).then(function(d){return u===!0&&a.revokeObjectURL(c),d.userData.mimeType=o.mimeType||LT(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tg,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new eg,vi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return oh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},u=[];if(c[st.KHR_MATERIALS_UNLIT]){const d=i[st.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Zt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,gn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hi);const h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kr&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==kr&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kr){const d=r.emissiveFactor;a.emissive=new Ye().setRGB(d[0],d[1],d[2],Zt)}return r.emissiveTexture!==void 0&&o!==kr&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gn)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),tr(d,r),t.associations.set(d,{materials:e}),r.extensions&&Pr(i,d,r),d})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const u=e[a],h=PT(u),d=i[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=Gf(new Ei,u,t),i[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?wT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[p];let l;const _=u[p];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)l=r.isSkinnedMesh===!0?new vE(g,_):new kn(g,_),l.isSkinnedMesh===!0&&l.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?l.geometry=kf(l.geometry,Lm):m.mode===Xn.TRIANGLE_FAN&&(l.geometry=kf(l.geometry,vu));else if(m.mode===Xn.LINES)l=new ME(g,_);else if(m.mode===Xn.LINE_STRIP)l=new sh(g,_);else if(m.mode===Xn.LINE_LOOP)l=new EE(g,_);else if(m.mode===Xn.POINTS)l=new TE(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(l.geometry.morphAttributes).length>0&&RT(l,r),l.name=t.createUniqueName(r.name||"mesh_"+e),tr(l,r),m.extensions&&Pr(i,l,m),t.assignFinalMaterial(l),d.push(l)}for(let p=0,v=d.length;p<v;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Pr(i,d[0],r),d[0];const f=new zr;r.extensions&&Pr(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,v=d.length;p<v;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new En(Nm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new th(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),tr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new $e;r!==null&&f.fromArray(r.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new rh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],u=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const p=i.channels[d],v=i.samplers[p.sampler],g=p.target,m=g.node,l=i.parameters!==void 0?i.parameters[v.input]:v.input,_=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",l)),c.push(this.getDependency("accessor",_)),u.push(v),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],p=d[1],v=d[2],g=d[3],m=d[4],l=[];for(let _=0,x=f.length;_<x;_++){const y=f[_],w=p[_],b=v[_],E=g[_],R=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,w,b,E,R);if(M)for(let S=0;S<M.length;S++)l.push(M[S])}return new LE(r,void 0,l)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=i.weights.length;c<u;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,IT)});for(let p=0,v=d.length;p<v;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Jm:u.length>1?h=new zr:u.length===1?h=u[0]:h=new At,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),tr(h,r),r.extensions&&Pr(n,h,r),r.matrix!==void 0){const d=new $e;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new zr;n.name&&(r.name=i.createUniqueName(n.name)),tr(r,n),n.extensions&&Pr(t,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const u=h=>{const d=new Map;for(const[f,p]of i.associations)(f instanceof vi||f instanceof qt)&&d.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&d.set(f,p)}),d};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ji[r.path]===Ji.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let u;switch(Ji[r.path]){case Ji.weights:u=to;break;case Ji.rotation:u=es;break;case Ji.position:case Ji.scale:u=no;break;default:switch(n.itemSize){case 1:u=to;break;case 2:case 3:default:u=no;break}break}const h=i.interpolation!==void 0?AT[i.interpolation]:Js,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const v=new u(c[f]+"."+Ji[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=bu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof es?bT:og;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NT(s,e,t){const n=e.attributes,i=new Wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(u[0],u[1],u[2])),a.normalized){const h=bu(Hs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,c=new U;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){const g=bu(Hs[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Gf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Tu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ft.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),tr(s,e),NT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?CT(s,e.targets,t):s})}const Wf={type:"change"},Vc={type:"start"},Xf={type:"end"},$a=new io,Yf=new er,OT=Math.cos(70*Nm.DEG2RAD);class GT extends ns{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Le),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wf),n.update(),r=i.NONE},this.update=function(){const T=new U,D=new yi().setFromUnitVectors(e.up,new U(0,1,0)),W=D.clone().invert(),Q=new U,oe=new yi,Ne=new U,Ge=2*Math.PI;return function(gt=null){const tt=n.object.position;T.copy(tt).sub(n.target),T.applyQuaternion(D),a.setFromVector3(T),n.autoRotate&&r===i.NONE&&O(S(gt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Me=n.minAzimuthAngle,fe=n.maxAzimuthAngle;isFinite(Me)&&isFinite(fe)&&(Me<-Math.PI?Me+=Ge:Me>Math.PI&&(Me-=Ge),fe<-Math.PI?fe+=Ge:fe>Math.PI&&(fe-=Ge),Me<=fe?a.theta=Math.max(Me,Math.min(fe,a.theta)):a.theta=a.theta>(Me+fe)/2?Math.max(Me,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ze=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=P(a.radius);else{const le=a.radius;a.radius=P(a.radius*u),Ze=le!=a.radius}if(T.setFromSpherical(a),T.applyQuaternion(W),tt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&b){let le=null;if(n.object.isPerspectiveCamera){const Ue=T.length();le=P(Ue*u);const be=Ue-le;n.object.position.addScaledVector(y,be),n.object.updateMatrixWorld(),Ze=!!be}else if(n.object.isOrthographicCamera){const Ue=new U(w.x,w.y,0);Ue.unproject(n.object);const be=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ze=be!==n.object.zoom;const ke=new U(w.x,w.y,0);ke.unproject(n.object),n.object.position.sub(ke).add(Ue),n.object.updateMatrixWorld(),le=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;le!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(le).add(n.object.position):($a.origin.copy(n.object.position),$a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($a.direction))<OT?e.lookAt(n.target):(Yf.setFromNormalAndCoplanarPoint(n.object.up,n.target),$a.intersectPlane(Yf,n.target))))}else if(n.object.isOrthographicCamera){const le=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),le!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ze=!0)}return u=1,b=!1,Ze||Q.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>o?(n.dispatchEvent(Wf),Q.copy(n.object.position),oe.copy(n.object.quaternion),Ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qe),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",X),n.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Le),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Bf,c=new Bf;let u=1;const h=new U,d=new He,f=new He,p=new He,v=new He,g=new He,m=new He,l=new He,_=new He,x=new He,y=new U,w=new He;let b=!1;const E=[],R={};let M=!1;function S(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function N(T){const D=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*D)}function O(T){c.theta-=T}function I(T){c.phi-=T}const z=function(){const T=new U;return function(W,Q){T.setFromMatrixColumn(Q,0),T.multiplyScalar(-W),h.add(T)}}(),q=function(){const T=new U;return function(W,Q){n.screenSpacePanning===!0?T.setFromMatrixColumn(Q,1):(T.setFromMatrixColumn(Q,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(W),h.add(T)}}(),K=function(){const T=new U;return function(W,Q){const oe=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;T.copy(Ne).sub(n.target);let Ge=T.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),z(2*W*Ge/oe.clientHeight,n.object.matrix),q(2*Q*Ge/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(W*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),q(Q*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(T,D){if(!n.zoomToCursor)return;b=!0;const W=n.domElement.getBoundingClientRect(),Q=T-W.left,oe=D-W.top,Ne=W.width,Ge=W.height;w.x=Q/Ne*2-1,w.y=-(oe/Ge)*2+1,y.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function P(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function ce(T){d.set(T.clientX,T.clientY)}function Ie(T){J(T.clientX,T.clientX),l.set(T.clientX,T.clientY)}function je(T){v.set(T.clientX,T.clientY)}function j(T){f.set(T.clientX,T.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const D=n.domElement;O(2*Math.PI*p.x/D.clientHeight),I(2*Math.PI*p.y/D.clientHeight),d.copy(f),n.update()}function ne(T){_.set(T.clientX,T.clientY),x.subVectors(_,l),x.y>0?$(N(x.y)):x.y<0&&B(N(x.y)),l.copy(_),n.update()}function he(T){g.set(T.clientX,T.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),K(m.x,m.y),v.copy(g),n.update()}function ie(T){J(T.clientX,T.clientY),T.deltaY<0?B(N(T.deltaY)):T.deltaY>0&&$(N(T.deltaY)),n.update()}function De(T){let D=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),D=!0;break}D&&(T.preventDefault(),n.update())}function Re(T){if(E.length===1)d.set(T.pageX,T.pageY);else{const D=ot(T),W=.5*(T.pageX+D.x),Q=.5*(T.pageY+D.y);d.set(W,Q)}}function k(T){if(E.length===1)v.set(T.pageX,T.pageY);else{const D=ot(T),W=.5*(T.pageX+D.x),Q=.5*(T.pageY+D.y);v.set(W,Q)}}function Xe(T){const D=ot(T),W=T.pageX-D.x,Q=T.pageY-D.y,oe=Math.sqrt(W*W+Q*Q);l.set(0,oe)}function Ee(T){n.enableZoom&&Xe(T),n.enablePan&&k(T)}function Te(T){n.enableZoom&&Xe(T),n.enableRotate&&Re(T)}function _e(T){if(E.length==1)f.set(T.pageX,T.pageY);else{const W=ot(T),Q=.5*(T.pageX+W.x),oe=.5*(T.pageY+W.y);f.set(Q,oe)}p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const D=n.domElement;O(2*Math.PI*p.x/D.clientHeight),I(2*Math.PI*p.y/D.clientHeight),d.copy(f)}function Oe(T){if(E.length===1)g.set(T.pageX,T.pageY);else{const D=ot(T),W=.5*(T.pageX+D.x),Q=.5*(T.pageY+D.y);g.set(W,Q)}m.subVectors(g,v).multiplyScalar(n.panSpeed),K(m.x,m.y),v.copy(g)}function Pe(T){const D=ot(T),W=T.pageX-D.x,Q=T.pageY-D.y,oe=Math.sqrt(W*W+Q*Q);_.set(0,oe),x.set(0,Math.pow(_.y/l.y,n.zoomSpeed)),$(x.y),l.copy(_);const Ne=(T.pageX+D.x)*.5,Ge=(T.pageY+D.y)*.5;J(Ne,Ge)}function H(T){n.enableZoom&&Pe(T),n.enablePan&&Oe(T)}function et(T){n.enableZoom&&Pe(T),n.enableRotate&&_e(T)}function L(T){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",X)),!Fe(T)&&(ve(T),T.pointerType==="touch"?se(T):Z(T)))}function A(T){n.enabled!==!1&&(T.pointerType==="touch"?Se(T):ee(T))}function X(T){switch(xe(T),E.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",X),n.dispatchEvent(Xf),r=i.NONE;break;case 1:const D=E[0],W=R[D];se({pointerId:D,pageX:W.x,pageY:W.y});break}}function Z(T){let D;switch(T.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case os.DOLLY:if(n.enableZoom===!1)return;Ie(T),r=i.DOLLY;break;case os.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;je(T),r=i.PAN}else{if(n.enableRotate===!1)return;ce(T),r=i.ROTATE}break;case os.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;ce(T),r=i.ROTATE}else{if(n.enablePan===!1)return;je(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Vc)}function ee(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;j(T);break;case i.DOLLY:if(n.enableZoom===!1)return;ne(T);break;case i.PAN:if(n.enablePan===!1)return;he(T);break}}function te(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(Vc),ie(ge(T)),n.dispatchEvent(Xf))}function ge(T){const D=T.deltaMode,W={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(D){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return T.ctrlKey&&!M&&(W.deltaY*=10),W}function ue(T){T.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(T){T.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function Le(T){n.enabled===!1||n.enablePan===!1||De(T)}function se(T){switch(We(T),E.length){case 1:switch(n.touches.ONE){case as.ROTATE:if(n.enableRotate===!1)return;Re(T),r=i.TOUCH_ROTATE;break;case as.PAN:if(n.enablePan===!1)return;k(T),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case as.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(T),r=i.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(T),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Vc)}function Se(T){switch(We(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Oe(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(T),n.update();break;default:r=i.NONE}}function qe(T){n.enabled!==!1&&T.preventDefault()}function ve(T){E.push(T.pointerId)}function xe(T){delete R[T.pointerId];for(let D=0;D<E.length;D++)if(E[D]==T.pointerId){E.splice(D,1);return}}function Fe(T){for(let D=0;D<E.length;D++)if(E[D]==T.pointerId)return!0;return!1}function We(T){let D=R[T.pointerId];D===void 0&&(D=new He,R[T.pointerId]=D),D.set(T.pageX,T.pageY)}function ot(T){const D=T.pointerId===E[0]?E[1]:E[0];return R[D]}n.domElement.addEventListener("contextmenu",qe),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",te,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}export{Wi as B,WE as D,VT as G,zT as H,Ti as M,GT as O,En as P,HT as R,UT as S,BE as T,U as V,BT as W,ct as a,FT as b,kT as c,zr as d,Nm as e,M_ as g};
//# sourceMappingURL=vendor-0fd547fe.js.map
