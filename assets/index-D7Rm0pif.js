(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ql="180",kd=0,Fc=1,Vd=2,pu=1,mu=2,li=3,Ii=0,on=1,Oe=2,Ri=0,Us=1,es=2,Oc=3,Bc=4,Gd=5,$i=100,Wd=101,Xd=102,Yd=103,qd=104,$d=200,Zd=201,Kd=202,Jd=203,Ja=204,ja=205,jd=206,Qd=207,tf=208,ef=209,nf=210,sf=211,rf=212,of=213,af=214,Qa=0,tl=1,el=2,Os=3,nl=4,il=5,sl=6,rl=7,gu=0,lf=1,cf=2,Ci=0,hf=1,uf=2,df=3,_u=4,ff=5,pf=6,mf=7,vu=300,Bs=301,zs=302,bo=303,ol=304,ta=306,Jn=1e3,Ki=1001,al=1002,kn=1003,gf=1004,zr=1005,Yn=1006,ca=1007,Ji=1008,jn=1009,xu=1010,yu=1011,yr=1012,tc=1013,ns=1014,ui=1015,Ys=1016,ec=1017,nc=1018,Mr=1020,Mu=35902,Su=35899,Eu=1021,wu=1022,Hn=1023,Sr=1026,Er=1027,bu=1028,ic=1029,Tu=1030,sc=1031,rc=1033,vo=33776,xo=33777,yo=33778,Mo=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,yl=37813,Ml=37814,Sl=37815,El=37816,wl=37817,bl=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Ll=36495,Il=36283,Dl=36284,Ul=36285,Nl=36286,_f=3200,vf=3201,Au=0,xf=1,Ti="",ye="srgb",Hs="srgb-linear",To="linear",Ee="srgb",us=7680,zc=519,yf=512,Mf=513,Sf=514,Ru=515,Ef=516,wf=517,bf=518,Tf=519,Fl=35044,Hc="300 es",qn=2e3,Ao=2001;class qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const mr=Math.PI/180,wr=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function oc(i,t){return(i%t+t)%t}function Af(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rf(i,t,e){return i!==t?(e-i)/(t-i):0}function gr(i,t,e){return(1-e)*i+e*t}function Cf(i,t,e,n){return gr(i,t,1-Math.exp(-e*n))}function Pf(i,t=1){return t-Math.abs(oc(i,t*2)-t)}function Lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function If(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Uf(i,t){return i+Math.random()*(t-i)}function Nf(i){return i*(.5-Math.random())}function Ff(i){i!==void 0&&(kc=i);let t=kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Of(i){return i*mr}function Bf(i){return i*wr}function zf(i){return(i&i-1)===0&&i!==0}function Hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:mr,RAD2DEG:wr,generateUUID:Zn,clamp:se,euclideanModulo:oc,mapLinear:Af,inverseLerp:Rf,lerp:gr,damp:Cf,pingpong:Pf,smoothstep:Lf,smootherstep:If,randInt:Df,randFloat:Uf,randFloatSpread:Nf,seededRandom:Ff,degToRad:Of,radToDeg:Bf,isPowerOfTwo:zf,ceilPowerOfTwo:Hf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:Vf,normalize:xe,denormalize:Bn};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),C=Math.atan2(A,p*b);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const v=a*b;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new S,Vc=new os;class ee{constructor(t,e,n,s,r,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],M=s[4],v=s[7],A=s[2],C=s[5],P=s[8];return r[0]=o*_+a*b+l*A,r[3]=o*m+a*M+l*C,r[6]=o*p+a*v+l*P,r[1]=c*_+u*b+h*A,r[4]=c*m+u*M+h*C,r[7]=c*p+u*v+h*P,r[2]=d*_+f*b+g*A,r[5]=d*m+f*M+g*C,r[8]=d*p+f*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new ee;function Cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){const i=Ro("canvas");return i.style.display="block",i}const Gc={};function br(i){i in Gc||(Gc[i]=!0,console.warn(i))}function Wf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Wc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){const i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ee&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?To:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:t,whitePoint:n,transfer:To,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const he=Xf();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class Yf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Ro("canvas")),ds.width=t.width,ds.height=t.height;const s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qf=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;const fa=new S;class an extends qs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Ki,s=Ki,r=Yn,o=Ji,a=Hn,l=jn,c=an.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Zn(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=vu;an.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,A=(p+1)/2,C=(u+d)/4,P=(h+_)/4,I=(g+m)/4;return M>v&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=P/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zf extends qs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new an(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pu extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),kr.subVectors(this.max,js),fs.subVectors(t.a,js),ps.subVectors(t.b,js),ms.subVectors(t.c,js),gi.subVectors(ps,fs),_i.subVectors(ms,ps),Bi.subVectors(fs,ms);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!pa(e,fs,ps,ms,kr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,fs,ps,ms,kr))?!1:(Vr.crossVectors(gi,_i),e=[Vr.x,Vr.y,Vr.z],pa(e,fs,ps,ms,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ii=[new S,new S,new S,new S,new S,new S,new S,new S],In=new S,Hr=new mi,fs=new S,ps=new S,ms=new S,gi=new S,_i=new S,Bi=new S,js=new S,kr=new S,Vr=new S,zi=new S;function pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jf=new mi,Qs=new S,ma=new S;class ea{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(ma)),this.expandByPoint(Qs.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const si=new S,ga=new S,Gr=new S,vi=new S,_a=new S,Wr=new S,va=new S;class as{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=vi.dot(this.direction),l=-vi.dot(Gr),c=vi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ga).addScaledVector(Gr,d),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);const n=si.dot(this.direction),s=si.dot(si)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),Wr.subVectors(n,t),va.crossVectors(_a,Wr);let o=this.direction.dot(va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(Wr.crossVectors(vi,Wr));if(l<0)return null;const c=a*this.direction.dot(_a.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(va);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Qf)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),xi.crossVectors(n,gn),xi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),xi.crossVectors(n,gn)),xi.normalize(),Xr.crossVectors(gn,xi),s[0]=xi.x,s[4]=Xr.x,s[8]=gn.x,s[1]=xi.y,s[5]=Xr.y,s[9]=gn.y,s[2]=xi.z,s[6]=Xr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],M=n[7],v=n[11],A=n[15],C=s[0],P=s[4],I=s[8],w=s[12],y=s[1],R=s[5],D=s[9],O=s[13],V=s[2],H=s[6],k=s[10],Z=s[14],W=s[3],ht=s[7],Mt=s[11],Ct=s[15];return r[0]=o*C+a*y+l*V+c*W,r[4]=o*P+a*R+l*H+c*ht,r[8]=o*I+a*D+l*k+c*Mt,r[12]=o*w+a*O+l*Z+c*Ct,r[1]=u*C+h*y+d*V+f*W,r[5]=u*P+h*R+d*H+f*ht,r[9]=u*I+h*D+d*k+f*Mt,r[13]=u*w+h*O+d*Z+f*Ct,r[2]=g*C+_*y+m*V+p*W,r[6]=g*P+_*R+m*H+p*ht,r[10]=g*I+_*D+m*k+p*Mt,r[14]=g*w+_*O+m*Z+p*Ct,r[3]=b*C+M*y+v*V+A*W,r[7]=b*P+M*R+v*H+A*ht,r[11]=b*I+M*D+v*k+A*Mt,r[15]=b*w+M*O+v*Z+A*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,M=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,A=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,C=e*b+n*M+s*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=b*P,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*P,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*P,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*P,t[4]=M*P,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=v*P,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*P,t[12]=A*P,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*P,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,b=l*c,M=l*u,v=l*h,A=n.x,C=n.y,P=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+p))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(m-b)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const c=1/r,u=1/o,h=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===qn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ao)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new S,Dn=new le,jf=new S(0,0,0),Qf=new S(1,1,1),xi=new S,Xr=new S,gn=new S,Yc=new le,qc=new os;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let t0=0;const $c=new S,_s=new os,ri=new le,Yr=new S,tr=new S,e0=new S,n0=new os,Zc=new S(1,0,0),Kc=new S(0,1,0),Jc=new S(0,0,1),jc={type:"added"},i0={type:"removed"},vs={type:"childadded",child:null},xa={type:"childremoved",child:null};class Ge extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new S,e=new Vn,n=new os,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new ee}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(tr,Yr,this.up):ri.lookAt(Yr,tr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ri),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(i0),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,e0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,n0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new S(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new S,oi=new S,ya=new S,ai=new S,xs=new S,ys=new S,Qc=new S,Ma=new S,Sa=new S,Ea=new S,wa=new _e,ba=new _e,Ta=new _e;class An{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),oi.subVectors(n,e),ya.subVectors(t,e);const o=Un.dot(Un),a=Un.dot(oi),l=Un.dot(ya),c=oi.dot(oi),u=oi.dot(ya),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return wa.setScalar(0),ba.setScalar(0),Ta.setScalar(0),wa.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),oi.subVectors(t,e),Un.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Un.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,n),ys.subVectors(r,n),Ma.subVectors(t,n);const l=xs.dot(Ma),c=ys.dot(Ma);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,s);const u=xs.dot(Sa),h=ys.dot(Sa);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(xs,o);Ea.subVectors(t,r);const f=xs.dot(Ea),g=ys.dot(Ea);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ys,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Qc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Qc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(xs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=oc(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Aa(o,r,t+1/3),this.g=Aa(o,r,t),this.b=Aa(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return he.workingToColorSpace(je.copy(this),t),Math.round(se(je.r*255,0,255))*65536+Math.round(se(je.g*255,0,255))*256+Math.round(se(je.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=ye){he.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(qr);const n=gr(yi.h,qr.h,e),s=gr(yi.s,qr.s,e),r=gr(yi.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Qt;Qt.NAMES=Lu;let s0=0;class ls extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Us,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=ja,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class re extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new S,$r=new ct;let r0=0;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}}class Iu extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Du extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let o0=0;const En=new le,Ra=new Ge,Ms=new S,_n=new mi,er=new mi,Ye=new S;class Be extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?Du:Iu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(_n.min,er.min),_n.expandByPoint(Ye),Ye.addVectors(_n.max,er.max),_n.expandByPoint(Ye)):(_n.expandByPoint(er.min),_n.expandByPoint(er.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ye.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Ye.add(Ms)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new S,l[I]=new S;const c=new S,u=new S,h=new S,d=new ct,f=new ct,g=new ct,_=new S,m=new S;function p(I,w,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[I].add(_),a[w].add(_),a[y].add(_),l[I].add(m),l[w].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,w=b.length;I<w;++I){const y=b[I],R=y.start,D=y.count;for(let O=R,V=R+D;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new S,v=new S,A=new S,C=new S;function P(I){A.fromBufferAttribute(s,I),C.copy(A);const w=a[I];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),v.crossVectors(C,w);const R=v.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,R)}for(let I=0,w=b.length;I<w;++I){const y=b[I],R=y.start,D=y.count;for(let O=R,V=R+D;O<V;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new le,Hi=new as,Zr=new ea,eh=new S,Kr=new S,Jr=new S,jr=new S,Ca=new S,Qr=new S,nh=new S,to=new S;class st extends Ge{constructor(t=new Be,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ca.fromBufferAttribute(h,t),o?Qr.addScaledVector(Ca,u):Qr.addScaledVector(Ca.sub(e),u))}e.add(Qr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Zr.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Zr,eh)===null||Hi.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,A=M;v<A;v+=3){const C=a.getX(v),P=a.getX(v+1),I=a.getX(v+2);s=eo(this,p,t,n,c,u,h,C,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=eo(this,o,t,n,c,u,h,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,A=M;v<A;v+=3){const C=v,P=v+1,I=v+2;s=eo(this,p,t,n,c,u,h,C,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,v=m+2;s=eo(this,o,t,n,c,u,h,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function a0(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ii,a),l===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,Jr),i.getVertexPosition(c,jr);const u=a0(i,t,e,n,Kr,Jr,jr,nh);if(u){const h=new S;An.getBarycoord(nh,Kr,Jr,jr,h),s&&(u.uv=An.getInterpolatedAttribute(s,a,l,c,h,new ct)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,l,c,h,new ct)),o&&(u.normal=An.getInterpolatedAttribute(o,a,l,c,h,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new S,materialIndex:0};An.getNormal(Kr,Jr,jr,d.normal),u.face=d,u.barycoord=h}return u}class Gn extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function g(_,m,p,b,M,v,A,C,P,I,w){const y=v/P,R=A/I,D=v/2,O=A/2,V=C/2,H=P+1,k=I+1;let Z=0,W=0;const ht=new S;for(let Mt=0;Mt<k;Mt++){const Ct=Mt*R-O;for(let Gt=0;Gt<H;Gt++){const z=Gt*y-D;ht[_]=z*b,ht[m]=Ct*M,ht[p]=V,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(Gt/P),h.push(1-Mt/I),Z+=1}}for(let Mt=0;Mt<I;Mt++)for(let Ct=0;Ct<P;Ct++){const Gt=d+Ct+H*Mt,z=d+Ct+H*(Mt+1),j=d+(Ct+1)+H*(Mt+1),bt=d+(Ct+1)+H*Mt;l.push(Gt,z,bt),l.push(z,j,bt),W+=6}a.addGroup(f,W,w),f+=W,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function l0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Nu={clone:ks,merge:nn};var c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=l0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fu extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new S,ih=new ct,sh=new ct;class dn extends Fu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,ih,sh),e.subVectors(sh,ih)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,Es=1;class u0 extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ss,Es,t,e);s.layers=this.layers,this.add(s);const r=new dn(Ss,Es,t,e);r.layers=this.layers,this.add(r);const o=new dn(Ss,Es,t,e);o.layers=this.layers,this.add(o);const a=new dn(Ss,Es,t,e);a.layers=this.layers,this.add(a);const l=new dn(Ss,Es,t,e);l.layers=this.layers,this.add(l);const c=new dn(Ss,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ou extends an{constructor(t=[],e=Bs,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class d0 extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ou(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ri});r.uniforms.tEquirect.value=e;const o=new st(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Yn),new u0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class qt extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new cc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class p0 extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class m0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new S;class Co{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Co(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hc extends ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ws;const nr=new S,bs=new S,Ts=new S,As=new ct,ir=new ct,Bu=new le,no=new S,sr=new S,io=new S,rh=new ct,La=new ct,oh=new ct;class Po extends Ge{constructor(t=new hc){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new m0(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Co(n,3,0,!1)),ws.setAttribute("uv",new Co(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;so(no.set(-.5,-.5,0),Ts,o,bs,s,r),so(sr.set(.5,-.5,0),Ts,o,bs,s,r),so(io.set(.5,.5,0),Ts,o,bs,s,r),rh.set(0,0),La.set(1,0),oh.set(1,1);let a=t.ray.intersectTriangle(no,sr,io,!1,nr);if(a===null&&(so(sr.set(-.5,.5,0),Ts,o,bs,s,r),La.set(0,1),a=t.ray.intersectTriangle(no,io,sr,!1,nr),a===null))return;const l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:An.getInterpolation(nr,no,sr,io,rh,La,oh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function so(i,t,e,n,s,r){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*As.x-s*As.y,ir.y=s*As.x+r*As.y):ir.copy(As),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Bu)}const Ia=new S,g0=new S,_0=new ee;class bi{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(g0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_0.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ea,v0=new ct(.5,.5),ro=new S;class uc{constructor(t=new bi,e=new bi,n=new bi,s=new bi,r=new bi,o=new bi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],M=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,f-u,p-g,A-b).normalize(),s[1].setComponents(c+o,f+u,p+g,A+b).normalize(),s[2].setComponents(c+a,f+h,p+_,A+M).normalize(),s[3].setComponents(c-a,f-h,p-_,A-M).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,A-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,A-v).normalize(),e===qn)s[5].setComponents(c+l,f+d,p+m,A+v).normalize();else if(e===Ao)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);const e=v0.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ro.x=s.normal.x>0?t.max.x:t.min.x,ro.y=s.normal.y>0?t.max.y:t.min.y,ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dc extends ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new S,Io=new S,ah=new le,rr=new as,oo=new ea,Da=new S,lh=new S;class fc extends Ge{constructor(t=new Be,e=new dc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lo.fromBufferAttribute(e,s-1),Io.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lo.distanceTo(Io);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;ah.copy(s).invert(),rr.copy(t.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),M=ao(this,t,rr,l,p,b,_);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ao(this,t,rr,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=ao(this,t,rr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=ao(this,t,rr,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ao(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Lo.fromBufferAttribute(a,s),Io.fromBufferAttribute(a,r),e.distanceSqToSegment(Lo,Io,Da,lh)>n)return;Da.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:lh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ch=new S,hh=new S;class x0 extends fc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ch.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ch.distanceTo(hh);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $e extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zu extends an{constructor(t,e,n=ns,s,r,o,a=kn,l=kn,c,u=Sr,h=1){if(u!==Sr&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Hu extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pc extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new S,u=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class we extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function b(){const v=new S,A=new S;let C=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const w=[],y=I/r,R=y*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,V=O*l+a,H=Math.sin(V),k=Math.cos(V);A.x=R*H,A.y=-y*n+m,A.z=R*k,h.push(A.x,A.y,A.z),v.set(H,P,k).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-y),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const y=_[w][I],R=_[w+1][I],D=_[w+1][I+1],O=_[w][I+1];(t>0||w!==0)&&(u.push(y,R,O),C+=3),(e>0||w!==r-1)&&(u.push(R,D,O),C+=3)}c.addGroup(p,C,0),p+=C}function M(v){const A=g,C=new ct,P=new S;let I=0;const w=v===!0?t:e,y=v===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const V=D/s*l+a,H=Math.cos(V),k=Math.sin(V);P.x=w*k,P.y=m*y,P.z=w*H,h.push(P.x,P.y,P.z),d.push(0,y,0),C.x=H*.5+.5,C.y=k*.5*y+.5,f.push(C.x,C.y),g++}for(let D=0;D<s;D++){const O=A+D,V=R+D;v===!0?u.push(V,V+1,O):u.push(V+1,V,O),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends we{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new na(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new S,s=[],r=[],o=[],a=new S,l=new le;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mc extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class y0 extends mc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const lo=new S,Ua=new gc,Na=new gc,Fa=new gc;class Tr extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),c=lo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ua.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Na.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Fa.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Na.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Fa.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ua.calc(l),Na.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function M0(i,t){const e=1-i;return e*e*t}function S0(i,t){return 2*(1-i)*i*t}function E0(i,t){return i*i*t}function _r(i,t,e,n){return M0(i,t)+S0(i,e)+E0(i,n)}function w0(i,t){const e=1-i;return e*e*e*t}function b0(i,t){const e=1-i;return 3*e*e*i*t}function T0(i,t){return 3*(1-i)*i*i*t}function A0(i,t){return i*i*i*t}function vr(i,t,e,n,s){return w0(i,t)+b0(i,e)+T0(i,n)+A0(i,s)}class ku extends Qn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class R0 extends Qn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends Qn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends Qn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends Qn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Qn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(uh(a,l.x,c.x,u.x,h.x),uh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Do=Object.freeze({__proto__:null,ArcCurve:y0,CatmullRomCurve3:Tr,CubicBezierCurve:ku,CubicBezierCurve3:R0,EllipseCurve:mc,LineCurve:Vu,LineCurve3:C0,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:Wu,SplineCurve:Xu});class P0 extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Do[s.type]().fromJSON(s))}return this}}class Uo extends P0{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vu(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gu(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ku(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new mc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $s extends Uo{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Uo().fromJSON(s))}return this}}function L0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Yu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=F0(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ar(r,o,e,a,l,c,0),o}function Yu(i,t,e,n,s){let r;if(s===q0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=dh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=dh(o/n|0,i[o],i[o+1],r);return r&&Vs(r,r.next)&&(Cr(r),r=r.next),r}function is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ar(i,t,e,n,s,r,o){if(!i)return;!o&&r&&k0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?D0(i,n,s,r):I0(i)){t.push(l.i,i.i,c.i),Cr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=U0(is(i),t),Ar(i,t,e,n,s,r,2)):o===2&&N0(i,t,e,n,s,r):Ar(is(i),t,e,n,s,r,1);break}}}function I0(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ur(s,a,r,l,o,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function D0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),_=Math.max(a,l,c),m=Math.max(u,h,d),p=Ol(f,g,t,e,n),b=Ol(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=b;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ur(a,u,l,h,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ur(a,u,l,h,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ur(a,u,l,h,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ur(a,u,l,h,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function U0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Vs(n,s)&&$u(n,e,e.next,s)&&Rr(n,s)&&Rr(s,n)&&(t.push(n.i,e.i,s.i),Cr(e),Cr(e.next),e=i=s),e=e.next}while(e!==i);return is(e)}function N0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let l=Zu(o,a);o=is(o,o.next),l=is(l,l.next),Ar(o,t,e,n,s,r,0),Ar(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function F0(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Yu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(G0(c))}s.sort(O0);for(let r=0;r<s.length;r++)e=B0(s[r],e);return e}function O0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function B0(i,t){const e=z0(i,t);if(!e)return t;const n=Zu(e,i);return is(n,n.next),is(e,e.next)}function z0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);Rr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&H0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function H0(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function k0(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,V0(s)}function V0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function G0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ur(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&qu(i,t,e,n,s,r,o,a)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(Rr(i,t)&&Rr(t,i)&&Y0(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Vs(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){const s=ho(Ue(i,t,e)),r=ho(Ue(i,t,n)),o=ho(Ue(e,n,i)),a=ho(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&co(i,e,t)||r===0&&co(i,n,t)||o===0&&co(e,i,n)||a===0&&co(e,t,n))}function co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ho(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rr(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Y0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zu(i,t){const e=Bl(i.i,i.x,i.y),n=Bl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dh(i,t,e,n){const s=Bl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $0{static triangulate(t,e,n=2){return L0(t,e,n)}}class Ls{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ls.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];fh(t),ph(n,t);let o=t.length;e.forEach(fh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ph(n,e[l]);const a=$0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function fh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class cs extends Be{constructor(t=new $s([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Z0;let M,v=!1,A,C,P,I;p&&(M=p.getSpacedPoints(u),v=!0,d=!1,A=p.computeFrenetFrames(u,!1),C=new S,P=new S,I=new S),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(c);let y=w.shape;const R=w.holes;if(!Ls.isClockWise(y)){y=y.reverse();for(let ot=0,nt=R.length;ot<nt;ot++){const et=R[ot];Ls.isClockWise(et)&&(R[ot]=et.reverse())}}function O(ot){const et=10000000000000001e-36;let Q=ot[0];for(let xt=1;xt<=ot.length;xt++){const ut=xt%ot.length,yt=ot[ut],Jt=yt.x-Q.x,Zt=yt.y-Q.y,T=Jt*Jt+Zt*Zt,x=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(Q.x),Math.abs(Q.y)),B=et*x*x;if(T<=B){ot.splice(ut,1),xt--;continue}Q=yt}}O(y),R.forEach(O);const V=R.length,H=y;for(let ot=0;ot<V;ot++){const nt=R[ot];y=y.concat(nt)}function k(ot,nt,et){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(nt,et)}const Z=y.length;function W(ot,nt,et){let Q,xt,ut;const yt=ot.x-nt.x,Jt=ot.y-nt.y,Zt=et.x-ot.x,T=et.y-ot.y,x=yt*yt+Jt*Jt,B=yt*T-Jt*Zt;if(Math.abs(B)>Number.EPSILON){const $=Math.sqrt(x),at=Math.sqrt(Zt*Zt+T*T),J=nt.x-Jt/$,Bt=nt.y+yt/$,_t=et.x-T/at,Nt=et.y+Zt/at,Ft=((_t-J)*T-(Nt-Bt)*Zt)/(yt*T-Jt*Zt);Q=J+yt*Ft-ot.x,xt=Bt+Jt*Ft-ot.y;const dt=Q*Q+xt*xt;if(dt<=2)return new ct(Q,xt);ut=Math.sqrt(dt/2)}else{let $=!1;yt>Number.EPSILON?Zt>Number.EPSILON&&($=!0):yt<-Number.EPSILON?Zt<-Number.EPSILON&&($=!0):Math.sign(Jt)===Math.sign(T)&&($=!0),$?(Q=-Jt,xt=yt,ut=Math.sqrt(x)):(Q=yt,xt=Jt,ut=Math.sqrt(x/2))}return new ct(Q/ut,xt/ut)}const ht=[];for(let ot=0,nt=H.length,et=nt-1,Q=ot+1;ot<nt;ot++,et++,Q++)et===nt&&(et=0),Q===nt&&(Q=0),ht[ot]=W(H[ot],H[et],H[Q]);const Mt=[];let Ct,Gt=ht.concat();for(let ot=0,nt=V;ot<nt;ot++){const et=R[ot];Ct=[];for(let Q=0,xt=et.length,ut=xt-1,yt=Q+1;Q<xt;Q++,ut++,yt++)ut===xt&&(ut=0),yt===xt&&(yt=0),Ct[Q]=W(et[Q],et[ut],et[yt]);Mt.push(Ct),Gt=Gt.concat(Ct)}let z;if(m===0)z=Ls.triangulateShape(H,R);else{const ot=[],nt=[];for(let et=0;et<m;et++){const Q=et/m,xt=f*Math.cos(Q*Math.PI/2),ut=g*Math.sin(Q*Math.PI/2)+_;for(let yt=0,Jt=H.length;yt<Jt;yt++){const Zt=k(H[yt],ht[yt],ut);Dt(Zt.x,Zt.y,-xt),Q===0&&ot.push(Zt)}for(let yt=0,Jt=V;yt<Jt;yt++){const Zt=R[yt];Ct=Mt[yt];const T=[];for(let x=0,B=Zt.length;x<B;x++){const $=k(Zt[x],Ct[x],ut);Dt($.x,$.y,-xt),Q===0&&T.push($)}Q===0&&nt.push(T)}}z=Ls.triangulateShape(ot,nt)}const j=z.length,bt=g+_;for(let ot=0;ot<Z;ot++){const nt=d?k(y[ot],Gt[ot],bt):y[ot];v?(P.copy(A.normals[0]).multiplyScalar(nt.x),C.copy(A.binormals[0]).multiplyScalar(nt.y),I.copy(M[0]).add(P).add(C),Dt(I.x,I.y,I.z)):Dt(nt.x,nt.y,0)}for(let ot=1;ot<=u;ot++)for(let nt=0;nt<Z;nt++){const et=d?k(y[nt],Gt[nt],bt):y[nt];v?(P.copy(A.normals[ot]).multiplyScalar(et.x),C.copy(A.binormals[ot]).multiplyScalar(et.y),I.copy(M[ot]).add(P).add(C),Dt(I.x,I.y,I.z)):Dt(et.x,et.y,h/u*ot)}for(let ot=m-1;ot>=0;ot--){const nt=ot/m,et=f*Math.cos(nt*Math.PI/2),Q=g*Math.sin(nt*Math.PI/2)+_;for(let xt=0,ut=H.length;xt<ut;xt++){const yt=k(H[xt],ht[xt],Q);Dt(yt.x,yt.y,h+et)}for(let xt=0,ut=R.length;xt<ut;xt++){const yt=R[xt];Ct=Mt[xt];for(let Jt=0,Zt=yt.length;Jt<Zt;Jt++){const T=k(yt[Jt],Ct[Jt],Q);v?Dt(T.x,T.y+M[u-1].y,M[u-1].x+et):Dt(T.x,T.y,h+et)}}}G(),tt();function G(){const ot=s.length/3;if(d){let nt=0,et=Z*nt;for(let Q=0;Q<j;Q++){const xt=z[Q];Rt(xt[2]+et,xt[1]+et,xt[0]+et)}nt=u+m*2,et=Z*nt;for(let Q=0;Q<j;Q++){const xt=z[Q];Rt(xt[0]+et,xt[1]+et,xt[2]+et)}}else{for(let nt=0;nt<j;nt++){const et=z[nt];Rt(et[2],et[1],et[0])}for(let nt=0;nt<j;nt++){const et=z[nt];Rt(et[0]+Z*u,et[1]+Z*u,et[2]+Z*u)}}n.addGroup(ot,s.length/3-ot,0)}function tt(){const ot=s.length/3;let nt=0;mt(H,nt),nt+=H.length;for(let et=0,Q=R.length;et<Q;et++){const xt=R[et];mt(xt,nt),nt+=xt.length}n.addGroup(ot,s.length/3-ot,1)}function mt(ot,nt){let et=ot.length;for(;--et>=0;){const Q=et;let xt=et-1;xt<0&&(xt=ot.length-1);for(let ut=0,yt=u+m*2;ut<yt;ut++){const Jt=Z*ut,Zt=Z*(ut+1),T=nt+Q+Jt,x=nt+xt+Jt,B=nt+xt+Zt,$=nt+Q+Zt;$t(T,x,B,$)}}}function Dt(ot,nt,et){l.push(ot),l.push(nt),l.push(et)}function Rt(ot,nt,et){fe(ot),fe(nt),fe(et);const Q=s.length/3,xt=b.generateTopUV(n,s,Q-3,Q-2,Q-1);L(xt[0]),L(xt[1]),L(xt[2])}function $t(ot,nt,et,Q){fe(ot),fe(nt),fe(Q),fe(nt),fe(et),fe(Q);const xt=s.length/3,ut=b.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);L(ut[0]),L(ut[1]),L(ut[3]),L(ut[1]),L(ut[2]),L(ut[3])}function fe(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function L(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return K0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Do[s.type]().fromJSON(s)),new cs(n,t.options)}}const Z0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-h),new ct(d,1-g),new ct(_,1-p)]:[new ct(a,1-l),new ct(u,1-h),new ct(f,1-g),new ct(m,1-p)]}};function K0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _c extends Be{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new S,d=new ct,f=new S,g=new S,_=new S;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const M=n+b*u*s,v=Math.sin(M),A=Math.cos(M);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*v,h.y=t[C].y,h.z=t[C].x*A,o.push(h.x,h.y,h.z),d.x=b/e,d.y=C/(t.length-1),a.push(d.x,d.y);const P=l[3*C+0]*v,I=l[3*C+1],w=l[3*C+0]*A;c.push(P,I,w)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){const v=M+b*t.length,A=v,C=v+t.length,P=v+t.length+1,I=v+1;r.push(A,C,I),r.push(P,I,C)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.points,t.segments,t.phiStart,t.phiLength)}}class Pe extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let M=0;M<c;M++){const v=M*h-r;g.push(v,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,v=b+c*(p+1),A=b+1+c*(p+1),C=b+1+c*p;f.push(M,v,C),f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pi extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new S,d=new S,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const C=A/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-M),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const M=u[p][b+1],v=u[p][b],A=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&f.push(M,v,C),(p!==n-1||l<Math.PI)&&f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hn extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gs extends Be{constructor(t=new Wu(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new ct;let u=new S;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),b(),p()}function m(M){u=t.getPointAt(M/e,u);const v=o.normals[M],A=o.binormals[M];for(let C=0;C<=s;C++){const P=C/s*Math.PI*2,I=Math.sin(P),w=-Math.cos(P);l.x=w*v.x+I*A.x,l.y=w*v.y+I*A.y,l.z=w*v.z+I*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const A=(s+1)*(M-1)+(v-1),C=(s+1)*M+(v-1),P=(s+1)*M+v,I=(s+1)*(M-1)+v;g.push(A,C,I),g.push(C,P,I)}}function b(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gs(new Do[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class de extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ku extends de{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class J0 extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j0 extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ia extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Q0 extends ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oa=new le,mh=new S,gh=new S;class Ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _h=new le,or=new S,Ba=new S;class tp extends Ju{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h,n.coordinateSystem,n.reversedDepth)}}class Ui extends ia{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ju extends Fu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ep extends Ju{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new ep}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class np extends ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ip extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const xh=new le;class rp{constructor(t,e,n=0,s=1/0){this.ray=new as(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(yh),n}}function yh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],t,e,!0)}}function Mh(i,t,e,n){const s=op(n);switch(e){case Eu:return i*t;case bu:return i*t/s.components*s.byteLength;case ic:return i*t/s.components*s.byteLength;case Tu:return i*t*2/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case wu:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case rc:return i*t*4/s.components*s.byteLength;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Cl:case Pl:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ul:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function op(i){switch(i){case jn:case xu:return{byteLength:1,components:1};case yr:case yu:case Ys:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case ns:case tc:case ui:return{byteLength:4,components:1};case Mu:case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);function Qu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,om=`struct PhysicalMaterial {
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
}`,am=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_m=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,bg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ug=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Hg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:vp,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:Hp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:Yp,fog_fragment:qp,fog_pars_fragment:$p,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Kp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:vm,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:wm,normal_fragment_begin:bm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:Hm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:qm,skinning_pars_vertex:$m,skinning_vertex:Zm,skinnormal_vertex:Km,specularmap_fragment:Jm,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:og,background_vert:ag,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:dg,depth_vert:fg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:_g,equirect_frag:vg,linedashed_vert:xg,linedashed_frag:yg,meshbasic_vert:Mg,meshbasic_frag:Sg,meshlambert_vert:Eg,meshlambert_frag:wg,meshmatcap_vert:bg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Ug,points_vert:Ng,points_frag:Fg,shadow_vert:Og,shadow_frag:Bg,sprite_vert:zg,sprite_frag:Hg},Et={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:nn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:nn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:nn([Et.points,Et.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:nn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:nn([Et.common,Et.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:nn([Et.sprite,Et.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:nn([Et.common,Et.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:nn([Et.lights,Et.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const uo={r:0,b:0,g:0},Vi=new Vn,kg=new le;function Vg(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const A=g(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===ta)?(u===void 0&&(u=new st(new Gn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ks(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vi.copy(v.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Vi)),u.material.toneMapped=he.getTransfer(A.colorSpace)!==Ee,(h!==A||d!==A.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new st(new Pe(2,2),new Cn({name:"BackgroundMaterial",uniforms:ks(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==Ee,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(uo,Uu(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:b}}function Gg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,R,D,O,V){let H=!1;const k=h(O,D,R);r!==k&&(r=k,c(r.object)),H=f(y,O,D,V),H&&g(y,O,D,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(y,R,D,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,R,D){const O=D.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let H=V[R.id];H===void 0&&(H={},V[R.id]=H);let k=H[O];return k===void 0&&(k=d(l()),H[O]=k),k}function d(y){const R=[],D=[],O=[];for(let V=0;V<e;V++)R[V]=0,D[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:O,object:y,attributes:{},index:null}}function f(y,R,D,O){const V=r.attributes,H=R.attributes;let k=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){const Mt=V[W];let Ct=H[W];if(Ct===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ct=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ct=y.instanceColor)),Mt===void 0||Mt.attribute!==Ct||Ct&&Mt.data!==Ct.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(y,R,D,O){const V={},H=R.attributes;let k=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){let Mt=H[W];Mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor));const Ct={};Ct.attribute=Mt,Mt&&Mt.data&&(Ct.data=Mt.data),V[W]=Ct,k++}r.attributes=V,r.attributesNum=k,r.index=O}function _(){const y=r.newAttributes;for(let R=0,D=y.length;R<D;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const D=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;D[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),V[y]!==R&&(i.vertexAttribDivisor(y,R),V[y]=R)}function b(){const y=r.newAttributes,R=r.enabledAttributes;for(let D=0,O=R.length;D<O;D++)R[D]!==y[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function M(y,R,D,O,V,H,k){k===!0?i.vertexAttribIPointer(y,R,D,V,H):i.vertexAttribPointer(y,R,D,O,V,H)}function v(y,R,D,O){_();const V=O.attributes,H=D.getAttributes(),k=R.defaultAttributeValues;for(const Z in H){const W=H[Z];if(W.location>=0){let ht=V[Z];if(ht===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const Mt=ht.normalized,Ct=ht.itemSize,Gt=t.get(ht);if(Gt===void 0)continue;const z=Gt.buffer,j=Gt.type,bt=Gt.bytesPerElement,G=j===i.INT||j===i.UNSIGNED_INT||ht.gpuType===tc;if(ht.isInterleavedBufferAttribute){const tt=ht.data,mt=tt.stride,Dt=ht.offset;if(tt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<W.locationSize;Rt++)p(W.location+Rt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)m(W.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let Rt=0;Rt<W.locationSize;Rt++)M(W.location+Rt,Ct/W.locationSize,j,Mt,mt*bt,(Dt+Ct/W.locationSize*Rt)*bt,G)}else{if(ht.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)p(W.location+tt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let tt=0;tt<W.locationSize;tt++)m(W.location+tt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let tt=0;tt<W.locationSize;tt++)M(W.location+tt,Ct/W.locationSize,j,Mt,Ct*bt,Ct/W.locationSize*tt*bt,G)}}else if(k!==void 0){const Mt=k[Z];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(W.location,Mt);break;case 3:i.vertexAttrib3fv(W.location,Mt);break;case 4:i.vertexAttrib4fv(W.location,Mt);break;default:i.vertexAttrib1fv(W.location,Mt)}}}}b()}function A(){I();for(const y in n){const R=n[y];for(const D in R){const O=R[D];for(const V in O)u(O[V].object),delete O[V];delete R[D]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const D in R){const O=R[D];for(const V in O)u(O[V].object),delete O[V];delete R[D]}delete n[y.id]}function P(y){for(const R in n){const D=n[R];if(D[y.id]===void 0)continue;const O=D[y.id];for(const V in O)u(O[V].object),delete O[V];delete D[y.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Wg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Hn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ui&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function Yg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new bi,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,M=b*4;let v=p.clippingState||null;l.value=v,v=u(g,d,M,f);for(let A=0;A!==M;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function qg(i){let t=new WeakMap;function e(o,a){return a===bo?o.mapping=Bs:a===ol&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===ol)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new d0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Is=4,Sh=[.125,.215,.35,.446,.526,.582],Zi=20,za=new ju,Eh=new Qt;let Ha=null,ka=0,Va=0,Ga=!1;const Yi=(1+Math.sqrt(5))/2,Rs=1/Yi,wh=[new S(-Yi,Rs,0),new S(Yi,Rs,0),new S(-Rs,0,Yi),new S(Rs,0,Yi),new S(0,Yi,-Rs),new S(0,Yi,Rs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],$g=new S;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=$g}=r;Ha=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,ka,Va),this._renderer.xr.enabled=Ga,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ys,format:Hn,colorSpace:Hs,depthBuffer:!1},s=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Kg(r,t,e)}return s}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s,r){const l=new dn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Eh),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new re({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new st(new Gn,_);let p=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(Eh),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const A=this._cubeSize;fo(s,v*A,M>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bs||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wh[(s-r-1)%wh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new st(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let b=0;for(let P=0;P<Zi;++P){const I=P/_,w=Math.exp(-I*I/2);p.push(w),P===0?b+=w:P<m&&(b+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[s],A=3*v*(s>M-Is?s-M+Is:0),C=4*(this._cubeSize-v);fo(e,A,C,3*v,2*v),l.setRenderTarget(e),l.render(h,za)}}function Zg(i){const t=[],e=[],n=[];let s=i;const r=i-Is+1+Sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Is?l=Sh[o-i+Is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,I=C>2?0:-1,w=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(w,_*g*C),M.set(d,m*g*C);const y=[C,C,C,C,C,C];v.set(y,p*g*C)}const A=new Be;A.setAttribute("position",new ln(b,_)),A.setAttribute("uv",new ln(M,m)),A.setAttribute("faceIndex",new ln(v,p)),t.push(A),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Th(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kg(i,t,e){const n=new Float32Array(Zi),s=new S(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ah(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Rh(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function Jg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bo||l===ol,u=l===Bs||l===zs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new bh(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new bh(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let M=0,v=b.length;M<v;M+=3){const A=b[M+0],C=b[M+1],P=b[M+2];d.push(A,C,C,P,P,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,v=b.length/3-1;M<v;M+=3){const A=M+0,C=M+1,P=M+2;d.push(A,C,C,P,P,A)}}else return;const m=new(Cu(d)?Du:Iu)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function t1(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function e1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n1(i,t,e){const n=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*C*4*h),I=new Pu(P,A,C,h);I.type=ui,I.needsUpdate=!0;const w=v*4;for(let R=0;R<h;R++){const D=p[R],O=b[R],V=M[R],H=A*C*4*R;for(let k=0;k<D.count;k++){const Z=k*w;g===!0&&(s.fromBufferAttribute(D,k),P[H+Z+0]=s.x,P[H+Z+1]=s.y,P[H+Z+2]=s.z,P[H+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,k),P[H+Z+4]=s.x,P[H+Z+5]=s.y,P[H+Z+6]=s.z,P[H+Z+7]=0),m===!0&&(s.fromBufferAttribute(V,k),P[H+Z+8]=s.x,P[H+Z+9]=s.y,P[H+Z+10]=s.z,P[H+Z+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ct(A,C)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function i1(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const td=new an,Ch=new zu(1,1),ed=new Pu,nd=new Kf,id=new Ou,Ph=[],Lh=[],Ih=new Float32Array(16),Dh=new Float32Array(9),Uh=new Float32Array(4);function Zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function o1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function l1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),Xe(e,n)}}function c1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),Xe(e,n)}}function h1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Xe(e,n)}}function u1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function f1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function m1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function _1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function v1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function x1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ch.compareFunction=Ru,r=Ch):r=td,e.setTexture2D(t||r,s)}function y1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nd,s)}function M1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||id,s)}function S1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ed,s)}function E1(i){switch(i){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return d1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return S1}}function w1(i,t){i.uniform1fv(this.addr,t)}function b1(i,t){const e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function T1(i,t){const e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function A1(i,t){const e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function R1(i,t){const e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C1(i,t){const e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P1(i,t){const e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L1(i,t){i.uniform1iv(this.addr,t)}function I1(i,t){i.uniform2iv(this.addr,t)}function D1(i,t){i.uniform3iv(this.addr,t)}function U1(i,t){i.uniform4iv(this.addr,t)}function N1(i,t){i.uniform1uiv(this.addr,t)}function F1(i,t){i.uniform2uiv(this.addr,t)}function O1(i,t){i.uniform3uiv(this.addr,t)}function B1(i,t){i.uniform4uiv(this.addr,t)}function z1(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||td,r[o])}function H1(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nd,r[o])}function k1(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||id,r[o])}function V1(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ed,r[o])}function G1(i){switch(i){case 5126:return w1;case 35664:return b1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return I1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return V1}}class W1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E1(e.type)}}class X1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G1(e.type)}}class Y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function q1(i,t,e){const n=i.name,s=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),o=Wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nh(e,c===void 0?new W1(a,i,t):new X1(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Y1(a),Nh(e,h)),e=h}}}class So{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);q1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Fh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $1=37297;let Z1=0;function K1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Oh=new ee;function J1(i){he._getMatrix(Oh,he.workingColorSpace,i);const t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case To:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+K1(i.getShaderSource(t),a)}else return r}function j1(i,t){const e=J1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q1(i,t){let e;switch(t){case hf:e="Linear";break;case uf:e="Reinhard";break;case df:e="Cineon";break;case _u:e="ACESFilmic";break;case pf:e="AgX";break;case mf:e="Neutral";break;case ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const po=new S;function t_(){he.getLuminanceCoefficients(po);const i=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function n_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(s_,o_)}const r_=new Map;function o_(i,t){let e=ne[t];if(e===void 0){const n=r_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(a_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function h_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function d_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case lf:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function f_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=c_(e),c=h_(e),u=u_(e),h=d_(e),d=f_(e),f=e_(e),g=n_(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,j1("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=Hl(o),o=zh(o,e),o=Hh(o,e),a=Hl(a),a=zh(a,e),a=Hh(a,e),o=kh(o),a=kh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,v=b+p+a,A=Fh(s,s.VERTEX_SHADER,M),C=Fh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(C)||"",H=D.trim(),k=O.trim(),Z=V.trim();let W=!0,ht=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,C);else{const Mt=Bh(s,A,"vertex"),Ct=Bh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Mt+`
`+Ct)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||Z==="")&&(ht=!1);ht&&(R.diagnostics={runnable:W,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(A),s.deleteShader(C),I=new So(s,_),w=i_(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,$1)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new __(t),e.set(t,n)),n}}class __{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}}function v_(i,t,e,n,s,r,o){const a=new lc,l=new g_,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,R,D,O){const V=D.fog,H=O.geometry,k=w.isMeshStandardMaterial?D.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||k),W=Z&&Z.mapping===ta?Z.image.height:null,ht=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=Mt!==void 0?Mt.length:0;let Gt=0;H.morphAttributes.position!==void 0&&(Gt=1),H.morphAttributes.normal!==void 0&&(Gt=2),H.morphAttributes.color!==void 0&&(Gt=3);let z,j,bt,G;if(ht){const pe=Xn[ht];z=pe.vertexShader,j=pe.fragmentShader}else z=w.vertexShader,j=w.fragmentShader,l.update(w),bt=l.getVertexShaderID(w),G=l.getFragmentShaderID(w);const tt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,$t=!!w.map,fe=!!w.matcap,L=!!Z,ot=!!w.aoMap,nt=!!w.lightMap,et=!!w.bumpMap,Q=!!w.normalMap,xt=!!w.displacementMap,ut=!!w.emissiveMap,yt=!!w.metalnessMap,Jt=!!w.roughnessMap,Zt=w.anisotropy>0,T=w.clearcoat>0,x=w.dispersion>0,B=w.iridescence>0,$=w.sheen>0,at=w.transmission>0,J=Zt&&!!w.anisotropyMap,Bt=T&&!!w.clearcoatMap,_t=T&&!!w.clearcoatNormalMap,Nt=T&&!!w.clearcoatRoughnessMap,Ft=B&&!!w.iridescenceMap,dt=B&&!!w.iridescenceThicknessMap,At=$&&!!w.sheenColorMap,Xt=$&&!!w.sheenRoughnessMap,zt=!!w.specularMap,wt=!!w.specularColorMap,te=!!w.specularIntensityMap,U=at&&!!w.transmissionMap,gt=at&&!!w.thicknessMap,St=!!w.gradientMap,Lt=!!w.alphaMap,ft=w.alphaTest>0,it=!!w.alphaHash,Ot=!!w.extensions;let jt=Ci;w.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(jt=i.toneMapping);const Ae={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:z,fragmentShader:j,defines:w.defines,customVertexShaderID:bt,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Hs,alphaToCoverage:!!w.alphaToCoverage,map:$t,matcap:fe,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:W,aoMap:ot,lightMap:nt,bumpMap:et,normalMap:Q,displacementMap:d&&xt,emissiveMap:ut,normalMapObjectSpace:Q&&w.normalMapType===xf,normalMapTangentSpace:Q&&w.normalMapType===Au,metalnessMap:yt,roughnessMap:Jt,anisotropy:Zt,anisotropyMap:J,clearcoat:T,clearcoatMap:Bt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Nt,dispersion:x,iridescence:B,iridescenceMap:Ft,iridescenceThicknessMap:dt,sheen:$,sheenColorMap:At,sheenRoughnessMap:Xt,specularMap:zt,specularColorMap:wt,specularIntensityMap:te,transmission:at,transmissionMap:U,thicknessMap:gt,gradientMap:St,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:Lt,alphaTest:ft,alphaHash:it,combine:w.combine,mapUv:$t&&_(w.map.channel),aoMapUv:ot&&_(w.aoMap.channel),lightMapUv:nt&&_(w.lightMap.channel),bumpMapUv:et&&_(w.bumpMap.channel),normalMapUv:Q&&_(w.normalMap.channel),displacementMapUv:xt&&_(w.displacementMap.channel),emissiveMapUv:ut&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:Jt&&_(w.roughnessMap.channel),anisotropyMapUv:J&&_(w.anisotropyMap.channel),clearcoatMapUv:Bt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&_(w.sheenRoughnessMap.channel),specularMapUv:zt&&_(w.specularMap.channel),specularColorMapUv:wt&&_(w.specularColorMap.channel),specularIntensityMapUv:te&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:gt&&_(w.thicknessMap.channel),alphaMapUv:Lt&&_(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Q||Zt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&($t||Lt),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:mt,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:$t&&w.map.isVideoTexture===!0&&he.getTransfer(w.map.colorSpace)===Ee,decodeVideoTextureEmissive:ut&&w.emissiveMap.isVideoTexture===!0&&he.getTransfer(w.emissiveMap.colorSpace)===Ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oe,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)y.push(R),y.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(b(y,w),M(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function b(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function M(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const y=g[w.type];let R;if(y){const D=Xn[y];R=Nu.clone(D.uniforms)}else R=w.uniforms;return R}function A(w,y){let R;for(let D=0,O=u.length;D<O;D++){const V=u[D];if(V.cacheKey===y){R=V,++R.usedTimes;break}}return R===void 0&&(R=new p_(i,y,w,r),u.push(R)),R}function C(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:I}}function x_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||y_),n.length>1&&n.sort(d||Gh),s.length>1&&s.sort(d||Gh)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function M_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Wh,i.set(n,[o])):s>=r.length?(o=new Wh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new Qt};break;case"SpotLight":e={position:new S,direction:new S,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function E_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let w_=0;function b_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T_(i){const t=new S_,e=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const s=new S,r=new le,o=new le;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,M=0,v=0,A=0,C=0,P=0;c.sort(b_);for(let w=0,y=c.length;w<y;w++){const R=c[w],D=R.color,O=R.intensity,V=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*O,h+=D.g*O,d+=D.b*O;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],O);P++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(D).multiplyScalar(O),k.distance=V,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const Z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,v++}_++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(O),k.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=P,n.version=w_++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Xh(i){const t=new T_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Xh(i),t.set(s,[a])):r>=o.length?(a=new Xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(i,t,e){let n=new uc;const s=new ct,r=new ct,o=new _e,a=new J0({depthPacking:vf}),l=new j0,c={},u=e.maxTextureSize,h={[Ii]:on,[on]:Ii,[Oe]:Oe},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let p=this.type;this.render=function(C,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==li&&this.type===li,V=p===li&&this.type!==li;for(let H=0,k=C.length;H<k;H++){const Z=C[H],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y)),W.map===null||O===!0||V===!0){const Ct=this.type!==li?{minFilter:kn,magFilter:kn}:{};W.map!==null&&W.map.dispose(),W.map=new Di(s.x,s.y,Ct),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Mt=W.getViewportCount();for(let Ct=0;Ct<Mt;Ct++){const Gt=W.getViewport(Ct);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),D.viewport(o),W.updateMatrices(Z,Ct),n=W.getFrustum(),v(P,I,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===li&&b(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,R)};function b(C,P){const I=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,I,f,_,null)}function M(C,P,I,w){let y=null;const R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=y.uuid,O=P.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let H=V[O];H===void 0&&(H=y.clone(),V[O]=H,P.addEventListener("dispose",A)),y=H}if(y.visible=P.visible,y.wireframe=P.wireframe,w===li?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=i.properties.get(y);D.light=I}return y}function v(C,P,I,w,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===li)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const O=t.update(C),V=C.material;if(Array.isArray(V)){const H=O.groups;for(let k=0,Z=H.length;k<Z;k++){const W=H[k],ht=V[W.materialIndex];if(ht&&ht.visible){const Mt=M(C,ht,w,y);C.onBeforeShadow(i,C,P,I,O,Mt,W),i.renderBufferDirect(I,null,O,Mt,C,W),C.onAfterShadow(i,C,P,I,O,Mt,W)}}}else if(V.visible){const H=M(C,V,w,y);C.onBeforeShadow(i,C,P,I,O,H,null),i.renderBufferDirect(I,null,O,H,C,null),C.onAfterShadow(i,C,P,I,O,H,null)}}const D=C.children;for(let O=0,V=D.length;O<V;O++)v(D[O],P,I,w,y)}function A(C){C.target.removeEventListener("dispose",A);for(const I in c){const w=c[I],y=C.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const L_={[Qa]:tl,[el]:sl,[nl]:rl,[Os]:il,[tl]:Qa,[sl]:el,[rl]:nl,[il]:Os};function I_(i,t){function e(){let U=!1;const gt=new _e;let St=null;const Lt=new _e(0,0,0,0);return{setMask:function(ft){St!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),St=ft)},setLocked:function(ft){U=ft},setClear:function(ft,it,Ot,jt,Ae){Ae===!0&&(ft*=jt,it*=jt,Ot*=jt),gt.set(ft,it,Ot,jt),Lt.equals(gt)===!1&&(i.clearColor(ft,it,Ot,jt),Lt.copy(gt))},reset:function(){U=!1,St=null,Lt.set(-1,0,0,0)}}}function n(){let U=!1,gt=!1,St=null,Lt=null,ft=null;return{setReversed:function(it){if(gt!==it){const Ot=t.get("EXT_clip_control");it?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),gt=it;const jt=ft;ft=null,this.setClear(jt)}},getReversed:function(){return gt},setTest:function(it){it?tt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(it){St!==it&&!U&&(i.depthMask(it),St=it)},setFunc:function(it){if(gt&&(it=L_[it]),Lt!==it){switch(it){case Qa:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=it}},setLocked:function(it){U=it},setClear:function(it){ft!==it&&(gt&&(it=1-it),i.clearDepth(it),ft=it)},reset:function(){U=!1,St=null,Lt=null,ft=null,gt=!1}}}function s(){let U=!1,gt=null,St=null,Lt=null,ft=null,it=null,Ot=null,jt=null,Ae=null;return{setTest:function(pe){U||(pe?tt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(pe){gt!==pe&&!U&&(i.stencilMask(pe),gt=pe)},setFunc:function(pe,ni,Wn){(St!==pe||Lt!==ni||ft!==Wn)&&(i.stencilFunc(pe,ni,Wn),St=pe,Lt=ni,ft=Wn)},setOp:function(pe,ni,Wn){(it!==pe||Ot!==ni||jt!==Wn)&&(i.stencilOp(pe,ni,Wn),it=pe,Ot=ni,jt=Wn)},setLocked:function(pe){U=pe},setClear:function(pe){Ae!==pe&&(i.clearStencil(pe),Ae=pe)},reset:function(){U=!1,gt=null,St=null,Lt=null,ft=null,it=null,Ot=null,jt=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,v=null,A=null,C=null,P=new Qt(0,0,0),I=0,w=!1,y=null,R=null,D=null,O=null,V=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Z>=2);let ht=null,Mt={};const Ct=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),z=new _e().fromArray(Ct),j=new _e().fromArray(Gt);function bt(U,gt,St,Lt){const ft=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<St;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return it}const G={};G[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(Os),et(!1),Q(Fc),tt(i.CULL_FACE),ot(Ri);function tt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function mt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Dt(U,gt){return h[U]!==gt?(i.bindFramebuffer(U,gt),h[U]=gt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Rt(U,gt){let St=f,Lt=!1;if(U){St=d.get(gt),St===void 0&&(St=[],d.set(gt,St));const ft=U.textures;if(St.length!==ft.length||St[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ot=ft.length;it<Ot;it++)St[it]=i.COLOR_ATTACHMENT0+it;St.length=ft.length,Lt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(St)}function $t(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const fe={[$i]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};fe[Yd]=i.MIN,fe[qd]=i.MAX;const L={[$d]:i.ZERO,[Zd]:i.ONE,[Kd]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[af]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(U,gt,St,Lt,ft,it,Ot,jt,Ae,pe){if(U===Ri){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),U!==Gd){if(U!==m||pe!==w){if((p!==$i||v!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,v=$i),pe)switch(U){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,A=null,C=null,P.set(0,0,0),I=0,m=U,w=pe}return}ft=ft||gt,it=it||St,Ot=Ot||Lt,(gt!==p||ft!==v)&&(i.blendEquationSeparate(fe[gt],fe[ft]),p=gt,v=ft),(St!==b||Lt!==M||it!==A||Ot!==C)&&(i.blendFuncSeparate(L[St],L[Lt],L[it],L[Ot]),b=St,M=Lt,A=it,C=Ot),(jt.equals(P)===!1||Ae!==I)&&(i.blendColor(jt.r,jt.g,jt.b,Ae),P.copy(jt),I=Ae),m=U,w=!1}function nt(U,gt){U.side===Oe?mt(i.CULL_FACE):tt(i.CULL_FACE);let St=U.side===on;gt&&(St=!St),et(St),U.blending===Us&&U.transparent===!1?ot(Ri):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Lt=U.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Q(U){U!==kd?(tt(i.CULL_FACE),U!==R&&(U===Fc?i.cullFace(i.BACK):U===Vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),R=U}function xt(U){U!==D&&(k&&i.lineWidth(U),D=U)}function ut(U,gt,St){U?(tt(i.POLYGON_OFFSET_FILL),(O!==gt||V!==St)&&(i.polygonOffset(gt,St),O=gt,V=St)):mt(i.POLYGON_OFFSET_FILL)}function yt(U){U?tt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Jt(U){U===void 0&&(U=i.TEXTURE0+H-1),ht!==U&&(i.activeTexture(U),ht=U)}function Zt(U,gt,St){St===void 0&&(ht===null?St=i.TEXTURE0+H-1:St=ht);let Lt=Mt[St];Lt===void 0&&(Lt={type:void 0,texture:void 0},Mt[St]=Lt),(Lt.type!==U||Lt.texture!==gt)&&(ht!==St&&(i.activeTexture(St),ht=St),i.bindTexture(U,gt||G[U]),Lt.type=U,Lt.texture=gt)}function T(){const U=Mt[ht];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(U){z.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),z.copy(U))}function Xt(U){j.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function zt(U,gt){let St=c.get(gt);St===void 0&&(St=new WeakMap,c.set(gt,St));let Lt=St.get(U);Lt===void 0&&(Lt=i.getUniformBlockIndex(gt,U.name),St.set(U,Lt))}function wt(U,gt){const Lt=c.get(gt).get(U);l.get(gt)!==Lt&&(i.uniformBlockBinding(gt,Lt,U.__bindingPointIndex),l.set(gt,Lt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ht=null,Mt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,v=null,A=null,C=null,P=new Qt(0,0,0),I=0,w=!1,y=null,R=null,D=null,O=null,V=null,z.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:mt,bindFramebuffer:Dt,drawBuffers:Rt,useProgram:$t,setBlending:ot,setMaterial:nt,setFlipSided:et,setCullFace:Q,setLineWidth:xt,setPolygonOffset:ut,setScissorTest:yt,activeTexture:Jt,bindTexture:Zt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Ft,texImage3D:dt,updateUBOMapping:zt,uniformBlockBinding:wt,texStorage2D:_t,texStorage3D:Nt,texSubImage2D:$,texSubImage3D:at,compressedTexSubImage2D:J,compressedTexSubImage3D:Bt,scissor:At,viewport:Xt,reset:te}}function D_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Ro("canvas")}function _(T,x,B){let $=1;const at=Zt(T);if((at.width>B||at.height>B)&&($=B/Math.max(at.width,at.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor($*at.width),Bt=Math.floor($*at.height);h===void 0&&(h=g(J,Bt));const _t=x?g(J,Bt):h;return _t.width=J,_t.height=Bt,_t.getContext("2d").drawImage(T,0,0,J,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+J+"x"+Bt+")."),_t}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,x,B,$,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=x;if(x===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),x===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const Bt=at?To:he.getTransfer($);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Bt===Ee?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(T,x){let B;return T?x===null||x===ns||x===Mr?B=i.DEPTH24_STENCIL8:x===ui?B=i.DEPTH32F_STENCIL8:x===yr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ns||x===Mr?B=i.DEPTH_COMPONENT24:x===ui?B=i.DEPTH_COMPONENT32F:x===yr&&(B=i.DEPTH_COMPONENT16),B}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==kn&&T.minFilter!==Yn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),I(x),x.isVideoTexture&&u.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),y(x)}function I(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const at=$[x.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function w(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,$=d.get(B);delete $[x.__cacheKey],o.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let at=0;at<x.__webglFramebuffer[$].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[$][at]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,at=B.length;$<at;$++){const J=n.get(B[$]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(T)}let R=0;function D(){R=0}function O(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function V(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const B=n.get(T);if(T.isVideoTexture&&yt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function k(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){G(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Z(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){G(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function W(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){tt(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const ht={[Jn]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},Mt={[kn]:i.NEAREST,[gf]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Ct={[yf]:i.NEVER,[Tf]:i.ALWAYS,[Mf]:i.LESS,[Ru]:i.LEQUAL,[Sf]:i.EQUAL,[bf]:i.GEQUAL,[Ef]:i.GREATER,[wf]:i.NOTEQUAL};function Gt(T,x){if(x.type===ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Yn||x.magFilter===ca||x.magFilter===zr||x.magFilter===Ji||x.minFilter===Yn||x.minFilter===ca||x.minFilter===zr||x.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ht[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ht[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ht[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Mt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kn||x.minFilter!==zr&&x.minFilter!==Ji||x.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function z(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const $=x.source;let at=d.get($);at===void 0&&(at={},d.set($,at));const J=V(x);if(J!==T.__cacheKey){at[J]===void 0&&(at[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),at[J].usedTimes++;const Bt=at[T.__cacheKey];Bt!==void 0&&(at[T.__cacheKey].usedTimes--,Bt.usedTimes===0&&w(x)),T.__cacheKey=J,T.__webglTexture=at[J].texture}return B}function j(T,x,B){return Math.floor(Math.floor(T/B)/x)}function bt(T,x,B,$){const J=T.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,$,x.data);else{J.sort((dt,At)=>dt.start-At.start);let Bt=0;for(let dt=1;dt<J.length;dt++){const At=J[Bt],Xt=J[dt],zt=At.start+At.count,wt=j(Xt.start,x.width,4),te=j(At.start,x.width,4);Xt.start<=zt+1&&wt===te&&j(Xt.start+Xt.count-1,x.width,4)===wt?At.count=Math.max(At.count,Xt.start+Xt.count-At.start):(++Bt,J[Bt]=Xt)}J.length=Bt+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let dt=0,At=J.length;dt<At;dt++){const Xt=J[dt],zt=Math.floor(Xt.start/4),wt=Math.ceil(Xt.count/4),te=zt%x.width,U=Math.floor(zt/x.width),gt=wt,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,te,U,gt,St,B,$,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function G(T,x,B){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const at=z(T,x),J=x.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+B);const Bt=n.get(J);if(J.version!==Bt.__version||at===!0){e.activeTexture(i.TEXTURE0+B);const _t=he.getPrimaries(he.workingColorSpace),Nt=x.colorSpace===Ti?null:he.getPrimaries(x.colorSpace),Ft=x.colorSpace===Ti||_t===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let dt=_(x.image,!1,s.maxTextureSize);dt=Jt(x,dt);const At=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type);let zt=M(x.internalFormat,At,Xt,x.colorSpace,x.isVideoTexture);Gt($,x);let wt;const te=x.mipmaps,U=x.isVideoTexture!==!0,gt=Bt.__version===void 0||at===!0,St=J.dataReady,Lt=A(x,dt);if(x.isDepthTexture)zt=v(x.format===Er,x.type),gt&&(U?e.texStorage2D(i.TEXTURE_2D,1,zt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,zt,dt.width,dt.height,0,At,Xt,null));else if(x.isDataTexture)if(te.length>0){U&&gt&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,te[0].width,te[0].height);for(let ft=0,it=te.length;ft<it;ft++)wt=te[ft],U?St&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,At,Xt,wt.data):e.texImage2D(i.TEXTURE_2D,ft,zt,wt.width,wt.height,0,At,Xt,wt.data);x.generateMipmaps=!1}else U?(gt&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,dt.width,dt.height),St&&bt(x,dt,At,Xt)):e.texImage2D(i.TEXTURE_2D,0,zt,dt.width,dt.height,0,At,Xt,dt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,zt,te[0].width,te[0].height,dt.depth);for(let ft=0,it=te.length;ft<it;ft++)if(wt=te[ft],x.format!==Hn)if(At!==null)if(U){if(St)if(x.layerUpdates.size>0){const Ot=Mh(wt.width,wt.height,x.format,x.type);for(const jt of x.layerUpdates){const Ae=wt.data.subarray(jt*Ot/wt.data.BYTES_PER_ELEMENT,(jt+1)*Ot/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,jt,wt.width,wt.height,1,At,Ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,dt.depth,At,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,zt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,dt.depth,At,Xt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,zt,wt.width,wt.height,dt.depth,0,At,Xt,wt.data)}else{U&&gt&&e.texStorage2D(i.TEXTURE_2D,Lt,zt,te[0].width,te[0].height);for(let ft=0,it=te.length;ft<it;ft++)wt=te[ft],x.format!==Hn?At!==null?U?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,zt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?St&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,At,Xt,wt.data):e.texImage2D(i.TEXTURE_2D,ft,zt,wt.width,wt.height,0,At,Xt,wt.data)}else if(x.isDataArrayTexture)if(U){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,zt,dt.width,dt.height,dt.depth),St)if(x.layerUpdates.size>0){const ft=Mh(dt.width,dt.height,x.format,x.type);for(const it of x.layerUpdates){const Ot=dt.data.subarray(it*ft/dt.data.BYTES_PER_ELEMENT,(it+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,dt.width,dt.height,1,At,Xt,Ot)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Xt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,dt.width,dt.height,dt.depth,0,At,Xt,dt.data);else if(x.isData3DTexture)U?(gt&&e.texStorage3D(i.TEXTURE_3D,Lt,zt,dt.width,dt.height,dt.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Xt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,dt.width,dt.height,dt.depth,0,At,Xt,dt.data);else if(x.isFramebufferTexture){if(gt)if(U)e.texStorage2D(i.TEXTURE_2D,Lt,zt,dt.width,dt.height);else{let ft=dt.width,it=dt.height;for(let Ot=0;Ot<Lt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,zt,ft,it,0,At,Xt,null),ft>>=1,it>>=1}}else if(te.length>0){if(U&&gt){const ft=Zt(te[0]);e.texStorage2D(i.TEXTURE_2D,Lt,zt,ft.width,ft.height)}for(let ft=0,it=te.length;ft<it;ft++)wt=te[ft],U?St&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At,Xt,wt):e.texImage2D(i.TEXTURE_2D,ft,zt,At,Xt,wt);x.generateMipmaps=!1}else if(U){if(gt){const ft=Zt(dt);e.texStorage2D(i.TEXTURE_2D,Lt,zt,ft.width,ft.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Xt,dt)}else e.texImage2D(i.TEXTURE_2D,0,zt,At,Xt,dt);m(x)&&p($),Bt.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function tt(T,x,B){if(x.image.length!==6)return;const $=z(T,x),at=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const J=n.get(at);if(at.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Bt=he.getPrimaries(he.workingColorSpace),_t=x.colorSpace===Ti?null:he.getPrimaries(x.colorSpace),Nt=x.colorSpace===Ti||Bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Ft=x.isCompressedTexture||x.image[0].isCompressedTexture,dt=x.image[0]&&x.image[0].isDataTexture,At=[];for(let it=0;it<6;it++)!Ft&&!dt?At[it]=_(x.image[it],!0,s.maxCubemapSize):At[it]=dt?x.image[it].image:x.image[it],At[it]=Jt(x,At[it]);const Xt=At[0],zt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),te=M(x.internalFormat,zt,wt,x.colorSpace),U=x.isVideoTexture!==!0,gt=J.__version===void 0||$===!0,St=at.dataReady;let Lt=A(x,Xt);Gt(i.TEXTURE_CUBE_MAP,x);let ft;if(Ft){U&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,te,Xt.width,Xt.height);for(let it=0;it<6;it++){ft=At[it].mipmaps;for(let Ot=0;Ot<ft.length;Ot++){const jt=ft[Ot];x.format!==Hn?zt!==null?U?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,0,0,jt.width,jt.height,zt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,te,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,0,0,jt.width,jt.height,zt,wt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,te,jt.width,jt.height,0,zt,wt,jt.data)}}}else{if(ft=x.mipmaps,U&&gt){ft.length>0&&Lt++;const it=Zt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,te,it.width,it.height)}for(let it=0;it<6;it++)if(dt){U?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,At[it].width,At[it].height,zt,wt,At[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,At[it].width,At[it].height,0,zt,wt,At[it].data);for(let Ot=0;Ot<ft.length;Ot++){const Ae=ft[Ot].image[it].image;U?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,0,0,Ae.width,Ae.height,zt,wt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,te,Ae.width,Ae.height,0,zt,wt,Ae.data)}}else{U?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,zt,wt,At[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,zt,wt,At[it]);for(let Ot=0;Ot<ft.length;Ot++){const jt=ft[Ot];U?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,0,0,zt,wt,jt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,te,zt,wt,jt.image[it])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),J.__version=at.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,B,$,at,J){const Bt=r.convert(B.format,B.colorSpace),_t=r.convert(B.type),Nt=M(B.internalFormat,Bt,_t,B.colorSpace),Ft=n.get(x),dt=n.get(B);if(dt.__renderTarget=x,!Ft.__hasExternalTextures){const At=Math.max(1,x.width>>J),Xt=Math.max(1,x.height>>J);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,J,Nt,At,Xt,x.depth,0,Bt,_t,null):e.texImage2D(at,J,Nt,At,Xt,0,Bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,at,dt.__webglTexture,0,xt(x)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,at,dt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const $=x.depthTexture,at=$&&$.isDepthTexture?$.type:null,J=v(x.stencilBuffer,at),Bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=xt(x);ut(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,T)}else{const $=x.textures;for(let at=0;at<$.length;at++){const J=$[at],Bt=r.convert(J.format,J.colorSpace),_t=r.convert(J.type),Nt=M(J.internalFormat,Bt,_t,J.colorSpace),Ft=xt(x);B&&ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Nt,x.width,x.height):ut(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const at=$.__webglTexture,J=xt(x);if(x.depthTexture.format===Sr)ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(x.depthTexture.format===Er)ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function $t(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const at=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",at)};$.addEventListener("dispose",at),x.__depthDisposeCallback=at}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=T.texture.mipmaps;$&&$.length>0?Rt(x.__webglFramebuffer[0],T):Rt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Dt(x.__webglDepthbuffer[$],T,!1);else{const at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}else{const $=T.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Dt(x.__webglDepthbuffer,T,!1);else{const at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(T,x,B){const $=n.get(T);x!==void 0&&mt($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(T)}function L(T){const x=T.texture,B=n.get(T),$=n.get(x);T.addEventListener("dispose",P);const at=T.textures,J=T.isWebGLCubeRenderTarget===!0,Bt=at.length>1;if(Bt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[_t]=[];for(let Nt=0;Nt<x.mipmaps.length;Nt++)B.__webglFramebuffer[_t][Nt]=i.createFramebuffer()}else B.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let _t=0;_t<x.mipmaps.length;_t++)B.__webglFramebuffer[_t]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let _t=0,Nt=at.length;_t<Nt;_t++){const Ft=n.get(at[_t]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ut(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<at.length;_t++){const Nt=at[_t];B.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);const Ft=r.convert(Nt.format,Nt.colorSpace),dt=r.convert(Nt.type),At=M(Nt.internalFormat,Ft,dt,Nt.colorSpace,T.isXRRenderTarget===!0),Xt=xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,x);for(let _t=0;_t<6;_t++)if(x.mipmaps&&x.mipmaps.length>0)for(let Nt=0;Nt<x.mipmaps.length;Nt++)mt(B.__webglFramebuffer[_t][Nt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt);else mt(B.__webglFramebuffer[_t],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let _t=0,Nt=at.length;_t<Nt;_t++){const Ft=at[_t],dt=n.get(Ft);let At=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(At=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,dt.__webglTexture),Gt(At,Ft),mt(B.__webglFramebuffer,T,Ft,i.COLOR_ATTACHMENT0+_t,At,0),m(Ft)&&p(At)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_t=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),Gt(_t,x),x.mipmaps&&x.mipmaps.length>0)for(let Nt=0;Nt<x.mipmaps.length;Nt++)mt(B.__webglFramebuffer[Nt],T,x,i.COLOR_ATTACHMENT0,_t,Nt);else mt(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,_t,0);m(x)&&p(_t),e.unbindTexture()}T.depthBuffer&&$t(T)}function ot(T){const x=T.textures;for(let B=0,$=x.length;B<$;B++){const at=x[B];if(m(at)){const J=b(T),Bt=n.get(at).__webglTexture;e.bindTexture(J,Bt),p(J),e.unbindTexture()}}}const nt=[],et=[];function Q(T){if(T.samples>0){if(ut(T)===!1){const x=T.textures,B=T.width,$=T.height;let at=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(T),_t=x.length>1;if(_t)for(let Ft=0;Ft<x.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Nt=T.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ft=0;Ft<x.length;Ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);const dt=n.get(x[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,at,i.NEAREST),l===!0&&(nt.length=0,et.length=0,nt.push(i.COLOR_ATTACHMENT0+Ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(J),et.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Ft=0;Ft<x.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);const dt=n.get(x[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function xt(T){return Math.min(s.maxSamples,T.samples)}function ut(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Jt(T,x){const B=T.colorSpace,$=T.format,at=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Hs&&B!==Ti&&(he.getTransfer(B)===Ee?($!==Hn||at!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Zt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=fe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=ut}function U_(i,t){function e(n,s=Ti){let r;const o=he.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xu)return i.BYTE;if(n===yu)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===ns)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===Ys)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===wu)return i.RGB;if(n===Hn)return i.RGBA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===bu)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===vo||n===xo||n===yo||n===Mo)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===El||n===wl||n===bl||n===Tl||n===Al||n===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cl)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Dl||n===Ul||n===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Hu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends qs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new O_,p={},b=e.getContextAttributes();let M=null,v=null;const A=[],C=[],P=new ct;let I=null;const w=new dn;w.viewport=new _e;const y=new dn;y.viewport=new _e;const R=[w,y],D=new ip;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let tt=A[G];return tt===void 0&&(tt=new Pa,A[G]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(G){let tt=A[G];return tt===void 0&&(tt=new Pa,A[G]=tt),tt.getGripSpace()},this.getHand=function(G){let tt=A[G];return tt===void 0&&(tt=new Pa,A[G]=tt),tt.getHandSpace()};function H(G){const tt=C.indexOf(G.inputSource);if(tt===-1)return;const mt=A[tt];mt!==void 0&&(mt.update(G.inputSource,G.frame,c||o),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let G=0;G<A.length;G++){const tt=C[G];tt!==null&&(C[G]=null,A[G].disconnect(tt))}O=null,V=null,m.reset();for(const G in p)delete p[G];t.setRenderTarget(M),f=null,d=null,h=null,s=null,v=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Dt=null,Rt=null;b.depth&&(Rt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=b.stencil?Er:Sr,Dt=b.stencil?Mr:ns);const $t={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Di(d.textureWidth,d.textureHeight,{format:Hn,type:jn,depthTexture:new zu(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Di(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(G){for(let tt=0;tt<G.removed.length;tt++){const mt=G.removed[tt],Dt=C.indexOf(mt);Dt>=0&&(C[Dt]=null,A[Dt].disconnect(mt))}for(let tt=0;tt<G.added.length;tt++){const mt=G.added[tt];let Dt=C.indexOf(mt);if(Dt===-1){for(let $t=0;$t<A.length;$t++)if($t>=C.length){C.push(mt),Dt=$t;break}else if(C[$t]===null){C[$t]=mt,Dt=$t;break}if(Dt===-1)break}const Rt=A[Dt];Rt&&Rt.connect(mt)}}const W=new S,ht=new S;function Mt(G,tt,mt){W.setFromMatrixPosition(tt.matrixWorld),ht.setFromMatrixPosition(mt.matrixWorld);const Dt=W.distanceTo(ht),Rt=tt.projectionMatrix.elements,$t=mt.projectionMatrix.elements,fe=Rt[14]/(Rt[10]-1),L=Rt[14]/(Rt[10]+1),ot=(Rt[9]+1)/Rt[5],nt=(Rt[9]-1)/Rt[5],et=(Rt[8]-1)/Rt[0],Q=($t[8]+1)/$t[0],xt=fe*et,ut=fe*Q,yt=Dt/(-et+Q),Jt=yt*-et;if(tt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Jt),G.translateZ(yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Rt[10]===-1)G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Zt=fe+yt,T=L+yt,x=xt-Jt,B=ut+(Dt-Jt),$=ot*L/T*Zt,at=nt*L/T*Zt;G.projectionMatrix.makePerspective(x,B,$,at,Zt,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Ct(G,tt){tt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(tt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let tt=G.near,mt=G.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),D.near=y.near=w.near=tt,D.far=y.far=w.far=mt,(O!==D.near||V!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,V=D.far),D.layers.mask=G.layers.mask|6,w.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;const Dt=G.parent,Rt=D.cameras;Ct(D,Dt);for(let $t=0;$t<Rt.length;$t++)Ct(Rt[$t],Dt);Rt.length===2?Mt(D,w,y):D.projectionMatrix.copy(w.projectionMatrix),Gt(G,D,Dt)};function Gt(G,tt,mt){mt===null?G.matrix.copy(tt.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(tt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=wr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(G){return p[G]};let z=null;function j(G,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Dt=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,Dt=!0);for(let L=0;L<mt.length;L++){const ot=mt[L];let nt=null;if(f!==null)nt=f.getViewport(ot);else{const Q=h.getViewSubImage(d,ot);nt=Q.viewport,L===0&&(t.setRenderTargetTextures(v,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(v))}let et=R[L];et===void 0&&(et=new dn,et.layers.enable(L),et.viewport=new _e,R[L]=et),et.matrix.fromArray(ot.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ot.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(nt.x,nt.y,nt.width,nt.height),L===0&&(D.matrix.copy(et.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Dt===!0&&D.cameras.push(et)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(mt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let L=0;L<mt.length;L++){const ot=mt[L].camera;if(ot){let nt=p[ot];nt||(nt=new Hu,p[ot]=nt);const et=h.getCameraImage(ot);nt.sourceTexture=et}}}}for(let mt=0;mt<A.length;mt++){const Dt=C[mt],Rt=A[mt];Dt!==null&&Rt!==void 0&&Rt.update(Dt,tt,c||o)}z&&z(G,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const bt=new Qu;bt.setAnimationLoop(j),this.setAnimationLoop=function(G){z=G},this.dispose=function(){}}}const Gi=new Vn,z_=new le;function H_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Uu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,Gi.copy(v),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(Gi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const v=M.program;n.uniformBlockBinding(b,v)}function c(b,M){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(b,A);const C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function u(b){const M=h();b.__bindingPointIndex=M;const v=i.createBuffer(),A=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],v=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,P=v.length;C<P;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,y=I.length;w<y;w++){const R=I[w];if(f(R,C,w,A)===!0){const D=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let H=0;H<O.length;H++){const k=O[H],Z=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+V,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,v,A){const C=b.value,P=M+"_"+v;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const I=A[P];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return A[P]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(b){const M=b.uniforms;let v=0;const A=16;for(let P=0,I=M.length;P<I;P++){const w=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,R=w.length;y<R;y++){const D=w[y],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,H=O.length;V<H;V++){const k=O[V],Z=_(k),W=v%A,ht=W%Z.boundary,Mt=W+ht;v+=ht,Mt!==0&&A-Mt<Z.storage&&(v+=A-Mt),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Z.storage}}}const C=v%A;return C>0&&(v+=A-C),b.__size=v,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class V_{constructor(t={}){const{canvas:e=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=ye;let C=0,P=0,I=null,w=-1,y=null;const R=new _e,D=new _e;let O=null;const V=new Qt(0);let H=0,k=e.width,Z=e.height,W=1,ht=null,Mt=null;const Ct=new _e(0,0,k,Z),Gt=new _e(0,0,k,Z);let z=!1;const j=new uc;let bt=!1,G=!1;const tt=new le,mt=new S,Dt=new _e,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function fe(){return I===null?W:1}let L=n;function ot(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){const N="webgl2";if(L=ot(N,E),L===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,et,Q,xt,ut,yt,Jt,Zt,T,x,B,$,at,J,Bt,_t,Nt,Ft,dt,At,Xt,zt,wt,te;function U(){nt=new jg(L),nt.init(),zt=new U_(L,nt),et=new Xg(L,nt,t,zt),Q=new I_(L,nt),et.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),xt=new e1(L),ut=new x_,yt=new D_(L,nt,Q,ut,et,zt,xt),Jt=new qg(v),Zt=new Jg(v),T=new ap(L),wt=new Gg(L,T),x=new Qg(L,T,xt,wt),B=new i1(L,x,T,xt),dt=new n1(L,et,yt),_t=new Yg(ut),$=new v_(v,Jt,Zt,nt,et,wt,_t),at=new H_(v,ut),J=new M_,Bt=new A_(nt),Ft=new Vg(v,Jt,Zt,Q,B,f,l),Nt=new P_(v,B,et),te=new k_(L,xt,et,Q),At=new Wg(L,nt,xt),Xt=new t1(L,nt,xt),xt.programs=$.programs,v.capabilities=et,v.extensions=nt,v.properties=ut,v.renderLists=J,v.shadowMap=Nt,v.state=Q,v.info=xt}U();const gt=new B_(v,L);this.xr=gt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(k,Z,!1))},this.getSize=function(E){return E.set(k,Z)},this.setSize=function(E,N,Y=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,Z=N,e.width=Math.floor(E*W),e.height=Math.floor(N*W),Y===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(k*W,Z*W).floor()},this.setDrawingBufferSize=function(E,N,Y){k=E,Z=N,W=Y,e.width=Math.floor(E*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,N,Y,q){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,N,Y,q),Q.viewport(R.copy(Ct).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Gt)},this.setScissor=function(E,N,Y,q){E.isVector4?Gt.set(E.x,E.y,E.z,E.w):Gt.set(E,N,Y,q),Q.scissor(D.copy(Gt).multiplyScalar(W).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){Q.setScissorTest(z=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,Y=!0){let q=0;if(E){let F=!1;if(I!==null){const pt=I.texture.format;F=pt===rc||pt===sc||pt===ic}if(F){const pt=I.texture.type,Tt=pt===jn||pt===ns||pt===yr||pt===Mr||pt===ec||pt===nc,Ut=Ft.getClearColor(),Pt=Ft.getClearAlpha(),Wt=Ut.r,Yt=Ut.g,kt=Ut.b;Tt?(g[0]=Wt,g[1]=Yt,g[2]=kt,g[3]=Pt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Wt,_[1]=Yt,_[2]=kt,_[3]=Pt,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}N&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ft.dispose(),J.dispose(),Bt.dispose(),ut.dispose(),Jt.dispose(),Zt.dispose(),B.dispose(),wt.dispose(),te.dispose(),$.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Wn),gt.removeEventListener("sessionend",Pc),Fi.stop()};function St(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=xt.autoReset,N=Nt.enabled,Y=Nt.autoUpdate,q=Nt.needsUpdate,F=Nt.type;U(),xt.autoReset=E,Nt.enabled=N,Nt.autoUpdate=Y,Nt.needsUpdate=q,Nt.type=F}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const N=E.target;N.removeEventListener("dispose",it),Ot(N)}function Ot(E){jt(E),ut.remove(E)}function jt(E){const N=ut.get(E).programs;N!==void 0&&(N.forEach(function(Y){$.releaseProgram(Y)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,Y,q,F,pt){N===null&&(N=Rt);const Tt=F.isMesh&&F.matrixWorld.determinant()<0,Ut=Nd(E,N,Y,q,F);Q.setMaterial(q,Tt);let Pt=Y.index,Wt=1;if(q.wireframe===!0){if(Pt=x.getWireframeAttribute(Y),Pt===void 0)return;Wt=2}const Yt=Y.drawRange,kt=Y.attributes.position;let oe=Yt.start*Wt,Se=(Yt.start+Yt.count)*Wt;pt!==null&&(oe=Math.max(oe,pt.start*Wt),Se=Math.min(Se,(pt.start+pt.count)*Wt)),Pt!==null?(oe=Math.max(oe,0),Se=Math.min(Se,Pt.count)):kt!=null&&(oe=Math.max(oe,0),Se=Math.min(Se,kt.count));const Ne=Se-oe;if(Ne<0||Ne===1/0)return;wt.setup(F,q,Ut,Y,Pt);let Le,be=At;if(Pt!==null&&(Le=T.get(Pt),be=Xt,be.setIndex(Le)),F.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*fe()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(F.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),Q.setLineWidth(Vt*fe()),F.isLineSegments?be.setMode(L.LINES):F.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else F.isPoints?be.setMode(L.POINTS):F.isSprite&&be.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))be.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Vt=F._multiDrawStarts,Ie=F._multiDrawCounts,ce=F._multiDrawCount,pn=Pt?T.get(Pt).bytesPerElement:1,hs=ut.get(q).currentProgram.getUniforms();for(let mn=0;mn<ce;mn++)hs.setValue(L,"_gl_DrawID",mn),be.render(Vt[mn]/pn,Ie[mn])}else if(F.isInstancedMesh)be.renderInstances(oe,Ne,F.count);else if(Y.isInstancedBufferGeometry){const Vt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ie=Math.min(Y.instanceCount,Vt);be.renderInstances(oe,Ne,Ie)}else be.render(oe,Ne)};function Ae(E,N,Y){E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,Br(E,N,Y),E.side=Ii,E.needsUpdate=!0,Br(E,N,Y),E.side=Oe):Br(E,N,Y)}this.compile=function(E,N,Y=null){Y===null&&(Y=E),p=Bt.get(Y),p.init(N),M.push(p),Y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==Y&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const q=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const pt=F.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Ut=pt[Tt];Ae(Ut,Y,F),q.add(Ut)}else Ae(pt,Y,F),q.add(pt)}),p=M.pop(),q},this.compileAsync=function(E,N,Y=null){const q=this.compile(E,N,Y);return new Promise(F=>{function pt(){if(q.forEach(function(Tt){ut.get(Tt).currentProgram.isReady()&&q.delete(Tt)}),q.size===0){F(E);return}setTimeout(pt,10)}nt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let pe=null;function ni(E){pe&&pe(E)}function Wn(){Fi.stop()}function Pc(){Fi.start()}const Fi=new Qu;Fi.setAnimationLoop(ni),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(E){pe=E,gt.setAnimationLoop(E),E===null?Fi.stop():Fi.start()},gt.addEventListener("sessionstart",Wn),gt.addEventListener("sessionend",Pc),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(N),N=gt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,I),p=Bt.get(E,M.length),p.init(N),M.push(p),tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(tt,qn,N.reversedDepth),G=this.localClippingEnabled,bt=_t.init(this.clippingPlanes,G),m=J.get(E,b.length),m.init(),b.push(m),gt.enabled===!0&&gt.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&aa(pt,N,-1/0,v.sortObjects)}aa(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ht,Mt),$t=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,$t&&Ft.addToRenderList(m,E),this.info.render.frame++,bt===!0&&_t.beginShadows();const Y=p.state.shadowsArray;Nt.render(Y,E,N),bt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const pt=N.cameras;if(F.length>0)for(let Tt=0,Ut=pt.length;Tt<Ut;Tt++){const Pt=pt[Tt];Ic(q,F,E,Pt)}$t&&Ft.render(E);for(let Tt=0,Ut=pt.length;Tt<Ut;Tt++){const Pt=pt[Tt];Lc(m,E,Pt,Pt.viewport)}}else F.length>0&&Ic(q,F,E,N),$t&&Ft.render(E),Lc(m,E,N);I!==null&&P===0&&(yt.updateMultisampleRenderTarget(I),yt.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,N),wt.resetDefaultState(),w=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],bt===!0&&_t.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function aa(E,N,Y,q){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){q&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const Tt=B.update(E),Ut=E.material;Ut.visible&&m.push(E,Tt,Ut,Y,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const Tt=B.update(E),Ut=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Dt.copy(Tt.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(Ut)){const Pt=Tt.groups;for(let Wt=0,Yt=Pt.length;Wt<Yt;Wt++){const kt=Pt[Wt],oe=Ut[kt.materialIndex];oe&&oe.visible&&m.push(E,Tt,oe,Y,Dt.z,kt)}}else Ut.visible&&m.push(E,Tt,Ut,Y,Dt.z,null)}}const pt=E.children;for(let Tt=0,Ut=pt.length;Tt<Ut;Tt++)aa(pt[Tt],N,Y,q)}function Lc(E,N,Y,q){const F=E.opaque,pt=E.transmissive,Tt=E.transparent;p.setupLightsView(Y),bt===!0&&_t.setGlobalState(v.clippingPlanes,Y),q&&Q.viewport(R.copy(q)),F.length>0&&Or(F,N,Y),pt.length>0&&Or(pt,N,Y),Tt.length>0&&Or(Tt,N,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ic(E,N,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ys:jn,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const pt=p.state.transmissionRenderTarget[q.id],Tt=q.viewport||R;pt.setSize(Tt.z*v.transmissionResolutionScale,Tt.w*v.transmissionResolutionScale);const Ut=v.getRenderTarget(),Pt=v.getActiveCubeFace(),Wt=v.getActiveMipmapLevel();v.setRenderTarget(pt),v.getClearColor(V),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Ft.render(Y);const Yt=v.toneMapping;v.toneMapping=Ci;const kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),bt===!0&&_t.setGlobalState(v.clippingPlanes,q),Or(E,Y,q),yt.updateMultisampleRenderTarget(pt),yt.updateRenderTargetMipmap(pt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Se=0,Ne=N.length;Se<Ne;Se++){const Le=N[Se],be=Le.object,Vt=Le.geometry,Ie=Le.material,ce=Le.group;if(Ie.side===Oe&&be.layers.test(q.layers)){const pn=Ie.side;Ie.side=on,Ie.needsUpdate=!0,Dc(be,Y,q,Vt,Ie,ce),Ie.side=pn,Ie.needsUpdate=!0,oe=!0}}oe===!0&&(yt.updateMultisampleRenderTarget(pt),yt.updateRenderTargetMipmap(pt))}v.setRenderTarget(Ut,Pt,Wt),v.setClearColor(V,H),kt!==void 0&&(q.viewport=kt),v.toneMapping=Yt}function Or(E,N,Y){const q=N.isScene===!0?N.overrideMaterial:null;for(let F=0,pt=E.length;F<pt;F++){const Tt=E[F],Ut=Tt.object,Pt=Tt.geometry,Wt=Tt.group;let Yt=Tt.material;Yt.allowOverride===!0&&q!==null&&(Yt=q),Ut.layers.test(Y.layers)&&Dc(Ut,N,Y,Pt,Yt,Wt)}}function Dc(E,N,Y,q,F,pt){E.onBeforeRender(v,N,Y,q,F,pt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,N,Y,q,E,pt),F.transparent===!0&&F.side===Oe&&F.forceSinglePass===!1?(F.side=on,F.needsUpdate=!0,v.renderBufferDirect(Y,N,q,F,E,pt),F.side=Ii,F.needsUpdate=!0,v.renderBufferDirect(Y,N,q,F,E,pt),F.side=Oe):v.renderBufferDirect(Y,N,q,F,E,pt),E.onAfterRender(v,N,Y,q,F,pt)}function Br(E,N,Y){N.isScene!==!0&&(N=Rt);const q=ut.get(E),F=p.state.lights,pt=p.state.shadowsArray,Tt=F.state.version,Ut=$.getParameters(E,F.state,pt,N,Y),Pt=$.getProgramCacheKey(Ut);let Wt=q.programs;q.environment=E.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(E.isMeshStandardMaterial?Zt:Jt).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",it),Wt=new Map,q.programs=Wt);let Yt=Wt.get(Pt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===Tt)return Nc(E,Ut),Yt}else Ut.uniforms=$.getUniforms(E),E.onBeforeCompile(Ut,v),Yt=$.acquireProgram(Ut,Pt),Wt.set(Pt,Yt),q.uniforms=Ut.uniforms;const kt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=_t.uniform),Nc(E,Ut),q.needsLights=Od(E),q.lightsStateVersion=Tt,q.needsLights&&(kt.ambientLightColor.value=F.state.ambient,kt.lightProbe.value=F.state.probe,kt.directionalLights.value=F.state.directional,kt.directionalLightShadows.value=F.state.directionalShadow,kt.spotLights.value=F.state.spot,kt.spotLightShadows.value=F.state.spotShadow,kt.rectAreaLights.value=F.state.rectArea,kt.ltc_1.value=F.state.rectAreaLTC1,kt.ltc_2.value=F.state.rectAreaLTC2,kt.pointLights.value=F.state.point,kt.pointLightShadows.value=F.state.pointShadow,kt.hemisphereLights.value=F.state.hemi,kt.directionalShadowMap.value=F.state.directionalShadowMap,kt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,kt.spotShadowMap.value=F.state.spotShadowMap,kt.spotLightMatrix.value=F.state.spotLightMatrix,kt.spotLightMap.value=F.state.spotLightMap,kt.pointShadowMap.value=F.state.pointShadowMap,kt.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function Uc(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=So.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Nc(E,N){const Y=ut.get(E);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Nd(E,N,Y,q,F){N.isScene!==!0&&(N=Rt),yt.resetTextureUnits();const pt=N.fog,Tt=q.isMeshStandardMaterial?N.environment:null,Ut=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hs,Pt=(q.isMeshStandardMaterial?Zt:Jt).get(q.envMap||Tt),Wt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Yt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,Se=!!Y.morphAttributes.color;let Ne=Ci;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ne=v.toneMapping);const Le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=Le!==void 0?Le.length:0,Vt=ut.get(q),Ie=p.state.lights;if(bt===!0&&(G===!0||E!==y)){const tn=E===y&&q.id===w;_t.setState(q,E,tn)}let ce=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ie.state.version||Vt.outputColorSpace!==Ut||F.isBatchedMesh&&Vt.batching===!1||!F.isBatchedMesh&&Vt.batching===!0||F.isBatchedMesh&&Vt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Vt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Vt.instancing===!1||!F.isInstancedMesh&&Vt.instancing===!0||F.isSkinnedMesh&&Vt.skinning===!1||!F.isSkinnedMesh&&Vt.skinning===!0||F.isInstancedMesh&&Vt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Vt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Vt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Vt.instancingMorph===!1&&F.morphTexture!==null||Vt.envMap!==Pt||q.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==_t.numPlanes||Vt.numIntersection!==_t.numIntersection)||Vt.vertexAlphas!==Wt||Vt.vertexTangents!==Yt||Vt.morphTargets!==kt||Vt.morphNormals!==oe||Vt.morphColors!==Se||Vt.toneMapping!==Ne||Vt.morphTargetsCount!==be)&&(ce=!0):(ce=!0,Vt.__version=q.version);let pn=Vt.currentProgram;ce===!0&&(pn=Br(q,N,F));let hs=!1,mn=!1,Js=!1;const De=pn.getUniforms(),Mn=Vt.uniforms;if(Q.useProgram(pn.program)&&(hs=!0,mn=!0,Js=!0),q.id!==w&&(w=q.id,mn=!0),hs||y!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),De.setValue(L,"projectionMatrix",E.projectionMatrix),De.setValue(L,"viewMatrix",E.matrixWorldInverse);const un=De.map.cameraPosition;un!==void 0&&un.setValue(L,mt.setFromMatrixPosition(E.matrixWorld)),et.logarithmicDepthBuffer&&De.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&De.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,mn=!0,Js=!0)}if(F.isSkinnedMesh){De.setOptional(L,F,"bindMatrix"),De.setOptional(L,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),De.setValue(L,"boneTexture",tn.boneTexture,yt))}F.isBatchedMesh&&(De.setOptional(L,F,"batchingTexture"),De.setValue(L,"batchingTexture",F._matricesTexture,yt),De.setOptional(L,F,"batchingIdTexture"),De.setValue(L,"batchingIdTexture",F._indirectTexture,yt),De.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&De.setValue(L,"batchingColorTexture",F._colorsTexture,yt));const Sn=Y.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&dt.update(F,Y,pn),(mn||Vt.receiveShadow!==F.receiveShadow)&&(Vt.receiveShadow=F.receiveShadow,De.setValue(L,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Mn.envMap.value=Pt,Mn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Mn.envMapIntensity.value=N.environmentIntensity),mn&&(De.setValue(L,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Fd(Mn,Js),pt&&q.fog===!0&&at.refreshFogUniforms(Mn,pt),at.refreshMaterialUniforms(Mn,q,W,Z,p.state.transmissionRenderTarget[E.id]),So.upload(L,Uc(Vt),Mn,yt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(So.upload(L,Uc(Vt),Mn,yt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&De.setValue(L,"center",F.center),De.setValue(L,"modelViewMatrix",F.modelViewMatrix),De.setValue(L,"normalMatrix",F.normalMatrix),De.setValue(L,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let un=0,la=tn.length;un<la;un++){const Oi=tn[un];te.update(Oi,pn),te.bind(Oi,pn)}}return pn}function Fd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,N,Y){const q=ut.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ut.get(E.texture).__webglTexture=N,ut.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const Y=ut.get(E);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0};const Bd=L.createFramebuffer();this.setRenderTarget=function(E,N=0,Y=0){I=E,C=N,P=Y;let q=!0,F=null,pt=!1,Tt=!1;if(E){const Pt=ut.get(E);if(Pt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Pt.__webglFramebuffer===void 0)yt.setupRenderTarget(E);else if(Pt.__hasExternalTextures)yt.rebindTextures(E,ut.get(E.texture).__webglTexture,ut.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const kt=E.depthTexture;if(Pt.__boundDepthTexture!==kt){if(kt!==null&&ut.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(E)}}const Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Tt=!0);const Yt=ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Yt[N])?F=Yt[N][Y]:F=Yt[N],pt=!0):E.samples>0&&yt.useMultisampledRTT(E)===!1?F=ut.get(E).__webglMultisampledFramebuffer:Array.isArray(Yt)?F=Yt[Y]:F=Yt,R.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else R.copy(Ct).multiplyScalar(W).floor(),D.copy(Gt).multiplyScalar(W).floor(),O=z;if(Y!==0&&(F=Bd),Q.bindFramebuffer(L.FRAMEBUFFER,F)&&q&&Q.drawBuffers(E,F),Q.viewport(R),Q.scissor(D),Q.setScissorTest(O),pt){const Pt=ut.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,Y)}else if(Tt){const Pt=N;for(let Wt=0;Wt<E.textures.length;Wt++){const Yt=ut.get(E.textures[Wt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Wt,Yt.__webglTexture,Y,Pt)}}else if(E!==null&&Y!==0){const Pt=ut.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(E,N,Y,q,F,pt,Tt,Ut=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){Q.bindFramebuffer(L.FRAMEBUFFER,Pt);try{const Wt=E.textures[Ut],Yt=Wt.format,kt=Wt.type;if(!et.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-q&&Y>=0&&Y<=E.height-F&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ut),L.readPixels(N,Y,q,F,zt.convert(Yt),zt.convert(kt),pt))}finally{const Wt=I!==null?ut.get(I).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,N,Y,q,F,pt,Tt,Ut=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(N>=0&&N<=E.width-q&&Y>=0&&Y<=E.height-F){Q.bindFramebuffer(L.FRAMEBUFFER,Pt);const Wt=E.textures[Ut],Yt=Wt.format,kt=Wt.type;if(!et.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ut),L.readPixels(N,Y,q,F,zt.convert(Yt),zt.convert(kt),0);const Se=I!==null?ut.get(I).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Se);const Ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wf(L,Ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(oe),L.deleteSync(Ne),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,Y=0){const q=Math.pow(2,-Y),F=Math.floor(E.image.width*q),pt=Math.floor(E.image.height*q),Tt=N!==null?N.x:0,Ut=N!==null?N.y:0;yt.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Tt,Ut,F,pt),Q.unbindTexture()};const zd=L.createFramebuffer(),Hd=L.createFramebuffer();this.copyTextureToTexture=function(E,N,Y=null,q=null,F=0,pt=null){pt===null&&(F!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=F,F=0):pt=0);let Tt,Ut,Pt,Wt,Yt,kt,oe,Se,Ne;const Le=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(Y!==null)Tt=Y.max.x-Y.min.x,Ut=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Wt=Y.min.x,Yt=Y.min.y,kt=Y.isBox3?Y.min.z:0;else{const Sn=Math.pow(2,-F);Tt=Math.floor(Le.width*Sn),Ut=Math.floor(Le.height*Sn),E.isDataArrayTexture?Pt=Le.depth:E.isData3DTexture?Pt=Math.floor(Le.depth*Sn):Pt=1,Wt=0,Yt=0,kt=0}q!==null?(oe=q.x,Se=q.y,Ne=q.z):(oe=0,Se=0,Ne=0);const be=zt.convert(N.format),Vt=zt.convert(N.type);let Ie;N.isData3DTexture?(yt.setTexture3D(N,0),Ie=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(yt.setTexture2DArray(N,0),Ie=L.TEXTURE_2D_ARRAY):(yt.setTexture2D(N,0),Ie=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ce=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hs=L.getParameter(L.UNPACK_SKIP_PIXELS),mn=L.getParameter(L.UNPACK_SKIP_ROWS),Js=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kt);const De=E.isDataArrayTexture||E.isData3DTexture,Mn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Sn=ut.get(E),tn=ut.get(N),un=ut.get(Sn.__renderTarget),la=ut.get(tn.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let Oi=0;Oi<Pt;Oi++)De&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(E).__webglTexture,F,kt+Oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(N).__webglTexture,pt,Ne+Oi)),L.blitFramebuffer(Wt,Yt,Tt,Ut,oe,Se,Tt,Ut,L.DEPTH_BUFFER_BIT,L.NEAREST);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||ut.has(E)){const Sn=ut.get(E),tn=ut.get(N);Q.bindFramebuffer(L.READ_FRAMEBUFFER,zd),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hd);for(let un=0;un<Pt;un++)De?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Sn.__webglTexture,F,kt+un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Sn.__webglTexture,F),Mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,pt,Ne+un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,pt),F!==0?L.blitFramebuffer(Wt,Yt,Tt,Ut,oe,Se,Tt,Ut,L.COLOR_BUFFER_BIT,L.NEAREST):Mn?L.copyTexSubImage3D(Ie,pt,oe,Se,Ne+un,Wt,Yt,Tt,Ut):L.copyTexSubImage2D(Ie,pt,oe,Se,Wt,Yt,Tt,Ut);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ie,pt,oe,Se,Ne,Tt,Ut,Pt,be,Vt,Le.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,pt,oe,Se,Ne,Tt,Ut,Pt,be,Le.data):L.texSubImage3D(Ie,pt,oe,Se,Ne,Tt,Ut,Pt,be,Vt,Le):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,oe,Se,Tt,Ut,be,Vt,Le.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,oe,Se,Le.width,Le.height,be,Le.data):L.texSubImage2D(L.TEXTURE_2D,pt,oe,Se,Tt,Ut,be,Vt,Le);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hs),L.pixelStorei(L.UNPACK_SKIP_ROWS,mn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Js),pt===0&&N.generateMipmaps&&L.generateMipmap(Ie),Q.unbindTexture()},this.initRenderTarget=function(E){ut.get(E).__webglFramebuffer===void 0&&yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?yt.setTextureCube(E,0):E.isData3DTexture?yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?yt.setTexture2DArray(E,0):yt.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,Q.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function xc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Be;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Yh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=Yh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Yh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new ln(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}class ra extends st{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new dn;const n=this,s=e.color!==void 0?new Qt(e.color):new Qt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||ra.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new bi,h=new S,d=new S,f=new S,g=new le,_=new S(0,0,-1),m=new _e,p=new S,b=new S,M=new _e,v=new le,A=this.camera,C=new Di(r,o,{samples:c,type:Ys}),P=new Cn({name:l.name!==void 0?l.name:"unspecified",uniforms:Nu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});P.uniforms.tDiffuse.value=C.texture,P.uniforms.color.value=s,P.uniforms.textureMatrix.value=v,this.material=P,this.onBeforeRender=function(I,w,y){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(y.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),b.subVectors(d,_),b.reflect(h).negate(),b.add(d),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(g),A.up.reflect(h),A.lookAt(b),A.far=y.far,A.updateMatrixWorld(),A.projectionMatrix.copy(y.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(A.projectionMatrix),v.multiply(A.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(A.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const D=A.projectionMatrix;M.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],M.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],M.z=-1,M.w=(1+D.elements[10])/D.elements[14],m.multiplyScalar(2/m.dot(M)),D.elements[2]=m.x,D.elements[6]=m.y,D.elements[10]=m.z+1-a,D.elements[14]=m.w,n.visible=!1;const O=I.getRenderTarget(),V=I.xr.enabled,H=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(C),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(w,A),I.xr.enabled=V,I.shadowMap.autoUpdate=H,I.setRenderTarget(O);const k=y.viewport;k!==void 0&&I.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()}}}ra.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const G_=[[-19.45,0,-5.12,.014,20],[-19.41,2.59,-5.15,-.006,20],[-19.49,5.18,-5.13,-.005,20],[-13.3,0,-5.12,3.121,20],[3.7,0,-5.12,3.125,20],[3.73,2.59,-5.13,-.013,20],[13.53,0,-5.12,-.009,20],[13.56,2.59,-5.13,0,20],[-19.45,0,2.08,0,20],[-13.35,0,2.08,.001,20],[.8,0,2.08,.019,40],[.76,2.59,2.09,-.009,40],[3.82,5.18,2.05,.012,20],[12.3,0,2.08,.003,20],[12.31,2.59,2.05,-.011,20],[-21.1,0,9.92,.002,20],[-13.6,0,9.92,-.004,20],[-13.59,2.59,9.92,-.003,20],[-13.61,5.18,9.93,-.004,20],[-21.6,0,12.42,-0,20],[-21.59,2.59,12.42,0,20],[-21.6,5.18,12.42,-.001,20],[-15.4,0,12.42,-.003,20],[4.43,0,12.42,0,20],[13.53,0,12.42,0,20],[-16.4,0,20.12,-.017,40],[-16.36,2.59,20.08,.008,40],[-2.25,0,20.12,.011,20],[3.85,0,20.12,-.017,20],[3.86,2.59,20.14,-.011,20],[13.53,0,20.12,.015,20],[13.5,2.59,20.09,.012,20],[13.49,5.18,20.13,.008,20],[-16.4,0,22.62,-.008,41],[-16.39,2.9,22.61,-.013,40],[-16.43,5.49,22.65,.013,40],[.8,0,22.62,-.012,40],[.8,2.59,22.64,.007,41],[13.53,0,22.62,-.021,20],[-22.6,0,-19.2,1.55,40],[-22.59,2.59,-19.18,1.567,40],[-30.2,0,-18.4,.35,20],[-31.2,0,24.7,-.004,40],[-31.16,2.59,24.68,.01,40],[23.2,0,-28.6,-.013,20],[23.23,2.59,-28.58,.01,20],[23,0,-25.95,-.018,20]],W_=[["crate_wood",14.3,2.59,11.75,.1],["light_mast",-23.4,0,.5,0],["light_mast",-23.4,0,21.4,0],["light_mast",17,0,-8.7,0],["light_mast",17,0,18.6,0],["light_mast",-20.6,0,-11.6,0],["barrel",-19.6,0,3.85,0],["barrel",-18.9,0,3.95,.7],["pallet_stack",-17.4,0,4,.08],["crate_stack",-14.3,0,8.05,.04],["ibc_tote",-12.95,0,7.95,-.05],["forklift",-8.6,0,4.5,-.22],["pallet",-7.21,.54,4.81,-.22],["crate_wood",-7.21,.68,4.81,-.17],["jersey_barrier",-2.9,0,5.3,.12],["jersey_barrier",5.6,0,5,-.1],["ibc_tote",5.9,0,8.9,.1],["ibc_tote",5.95,0,10.05,-.05],["barrel",4.9,0,9.7,0],["crate_stack",-3.9,0,10.5,.1],["crate_wood",-3.8,0,9.35,-.2],["pallet_stack",-4.4,0,11.8,.02],["cable_reel",4.2,0,10.5,.3],["jersey_barrier",11.6,0,3.95,.03],["ibc_tote",15.2,0,10.2,.1],["traffic_cone",.2,0,6.3,0],["traffic_cone",2.9,0,6.4,0],["traffic_cone",2.9,0,8.8,0],["traffic_cone",.1,0,8.7,0],["sign_post",-4.8,0,3.72,1.571],["pallet_stack",-20.6,0,-.1,.2],["tire_stack",-9.6,0,.2,0],["barrel",4.5,0,.35,0],["barrel",5.2,0,.3,.4],["jersey_barrier",12.2,0,.4,.03],["crate_wood",11.2,0,-3.3,.3],["jersey_barrier",-.9,0,-7.5,.1],["pallet_stack",1.2,0,-9.9,.1],["barrel",2.2,0,-10.3,0],["cable_reel",-18.2,0,-8,.2],["traffic_cone",-6.5,0,-9.9,0],["traffic_cone",-.5,0,-9.9,0],["crate_stack",-10.95,0,18.25,.06],["barrel",-3,0,18.35,0],["tire_stack",10.95,0,18.3,0],["ibc_tote",12,0,18.25,0],["pallet_stack",-12.3,0,18.2,.1],["jersey_barrier",.6,0,15.5,.12],["tire_stack",-8,0,26.9,0],["pallet_stack",8.7,0,27,.3],["crate_wood",-2,0,27,.2],["barrel",11.2,0,27.1,0],["cable_reel",-34.6,0,-22.5,1],["tire_stack",-25.4,0,-26.9,0],["crate_stack",-34.8,0,-13.5,.2],["barrel",-33.6,0,-13,0],["generator",-34.2,0,14.2,.15],["floodlight_stand",-31.4,0,12.7,.55],["tire_stack",-36.6,0,17.2,0],["tire_stack",-36.5,0,18.3,.6],["pallet_stack",-27.8,0,16.6,.4],["crate_wood",-28.6,0,20.6,.1],["ibc_tote",-26.6,0,21.2,0],["jersey_barrier",-34.7,0,3.75,1.651],["jersey_barrier",-33.3,0,8.3,1.511],["jersey_barrier",-30.6,0,10.4,.03],["jersey_barrier",-27.3,0,1.45,.05],["jersey_barrier",-32.2,0,1.45,-.04],["sign_post",-33.2,0,9.6,1.571],["sign_post",-25.3,0,1.1,1.571],["sign_post",-36.6,0,-1.6,1.571],["traffic_cone",-34.6,0,5.6,0],["traffic_cone",-28.3,0,2,0],["traffic_cone",-33.2,0,6.5,0],["traffic_cone",-26.6,0,9.8,0],["traffic_cone",-31.8,0,9.9,0],["light_mast",-27.6,0,-.9,0],["light_mast",-36.3,0,12.4,0],["barrel",-33.9,0,2,0],["pallet_stack",-36.4,0,10.3,.2],["pallet_stack",0,.03,-26.9,.1],["crate_stack",2.9,.03,-15.9,.12],["crate_wood",4.15,.03,-16.3,-.25],["pallet_stack",2,.03,-17.3,1.45],["ibc_tote",6.9,.03,-19.6,.1],["barrel",7.9,.03,-18.5,0],["barrel",6,.03,-18.4,.6],["ibc_tote",-7.6,.03,-16.4,-.08],["barrel",-8.6,.03,-15.3,0],["barrel",-7.9,.03,-15,.9],["forklift",8.3,.03,-13.9,2.75],["tire_stack",-15,.03,-15.6,0],["tire_stack",-14.9,.03,-16.6,.4],["crate_wood",-12.4,.03,-26.9,-.1],["barrel",-10.9,.03,-27,0],["crate_wood",-14.7,.03,-24.6,.3],["pallet",10.6,.03,-13.6,.2],["traffic_cone",-6.6,.03,-12.2,0],["traffic_cone",-.4,.03,-12.3,0],["jersey_barrier",20.5,0,-4.7,1.691],["jersey_barrier",25.3,0,3.1,-.2],["barrel",26.5,0,-1.7,0],["barrel",26.9,0,-1.05,.5],["traffic_cone",22,0,-1.9,0],["traffic_cone",24.2,0,1.7,0],["generator",15,0,-26.6,.06],["floodlight_stand",16.4,0,-23.6,.3],["tire_stack",24.1,0,-9.5,0],["tire_stack",25.05,0,-9.6,.5],["cable_reel",14.3,0,-12.9,.4],["cable_reel",15.6,0,-14.3,1.9],["pallet_stack",20.3,0,-9.3,.1],["crate_wood",19.9,0,-22.6,.3],["barrel",12.75,0,-23.3,0],["barrel",12.9,0,-24.1,0],["light_mast",26.6,0,-28.7,0],["light_mast",26.6,0,26.7,0],["crate_stack",26.4,0,23.6,.2],["ibc_tote",22.6,0,26.3,.05],["pallet_stack",24,0,26.2,.2],["barrel",22.6,0,20.3,0],["barrel",23.4,0,20.4,0],["traffic_cone",28.2,0,18.2,0],["traffic_cone",28.3,0,21.8,0]];let kl=42811;const lt=()=>(kl=kl*1664525+1013904223>>>0)/4294967296,yc=i=>i[Math.floor(lt()*i.length)],K=(i,t,e)=>new S(i,t,e),X_=new Gn(1,1,1),Ht=(i,t=.78,e=.18,n={})=>new de({color:i,roughness:t,metalness:e,...n});function Y_(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);e.addColorStop(0,"#18262e"),e.addColorStop(.36,"#394047"),e.addColorStop(.47,"#928474"),e.addColorStop(.52,"#514c46"),e.addColorStop(.68,"#18252a"),e.addColorStop(1,"#101a20"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);let n=t.createRadialGradient(500,234,5,500,234,255);n.addColorStop(0,"rgba(255,226,183,.85)"),n.addColorStop(.2,"rgba(216,155,93,.48)"),n.addColorStop(1,"rgba(171,117,75,0)"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let r=0;r<280;r++){const o=lt()*1024,a=105+lt()*152,l=18+lt()*170,c=8+lt()*32,u=t.createRadialGradient(o,a,1,o,a,l);u.addColorStop(0,"rgba(20,27,33,.18)"),u.addColorStop(1,"rgba(20,27,33,0)"),t.save(),t.scale(1,c/l),t.fillStyle=u,t.fillRect(o-l,(a-l)*l/c,l*2,l*2),t.restore()}const s=new $e(i);return s.mapping=bo,s.colorSpace=ye,s}function q_(i){if(i)return null;const t={name:"Rain-slick asphalt reflections",uniforms:{color:{value:new Qt(5331550)},tDiffuse:{value:null},textureMatrix:{value:new le},time:{value:0}},vertexShader:`
 uniform mat4 textureMatrix;varying vec4 vMirror;varying vec3 vWorld;
 void main(){vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;vMirror=textureMatrix*vec4(position,1.);gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`
 uniform sampler2D tDiffuse;uniform float time;varying vec4 vMirror;varying vec3 vWorld;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 void main(){
  vec2 p=vWorld.xz;float broad=noise(p*.17)+noise(p*.51)*.36;float fine=noise(p*3.8);
  float wet=smoothstep(.50,.88,broad+.16*noise(p*.49))*(.62+.38*fine);
  float rip=.0010*sin(p.x*5.6+time*1.2)+.0006*sin(p.y*8.-time*1.9);
  vec4 tex=vMirror;tex.xy+=vec2(rip,rip*.45)*tex.w;
  vec3 refl=texture2DProj(tDiffuse,tex).rgb;
  vec4 tex2=tex;tex2.xy+=vec2(.0040,.0025)*tex.w;
  vec4 tex3=tex;tex3.xy-=vec2(.0040,.0025)*tex.w;
  refl=mix(refl,(refl+texture2DProj(tDiffuse,tex2).rgb+texture2DProj(tDiffuse,tex3).rgb)/3.,.55);
  refl=pow(max(refl,vec3(0.)),vec3(1.75));
  vec3 surface=vec3(.065,.071,.071)+vec3(.015)*fine;
  vec3 color=mix(surface,refl*.71,wet*.76);
  gl_FragColor=vec4(color,.26+wet*.68);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`},e=new ra(new Pe(78,13.8),{shader:t,textureWidth:480,textureHeight:360,multisample:0,clipBias:.003});return e.rotation.x=-Math.PI/2,e.position.set(-7,.018,6),e.material.transparent=!0,e.material.depthWrite=!1,e.renderOrder=1,e}const $n=Ht(2831419,.49,.72),qe=Ht(1252129,.62,.65),Ce=Ht(6582906,.42,.72),sd=Ht(1053462,.9,.04),$_=Ht(2240052,.32,.68),rd=Ht(15049804,.56,.45),od=new re({color:16758635}),ad=Ht(7420715,.92,.12),ld=Ht(5656382,.88,.08),Z_=Ht(5721406,.55,.52),cd={time:{value:0}},K_=new Cn({uniforms:cd,transparent:!0,depthWrite:!1,side:Oe,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;varying vec2 vUv;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
 void main(){vec2 p=vUv*2.-1.;float distort=(noise(vUv*9.)-.5)*.23;
 float edge=1.-smoothstep(.56,.95,length(p)+distort);
 float fine=noise(vUv*37.+vec2(time*.028,0.));
 vec3 base=vec3(.13,.15,.15);
 float shimmer=pow(max(0.,sin(vUv.y*30.+vUv.x*2.8+time*.3)),23.)*.025;
 vec3 water=base+vec3(.18,.12,.06)*shimmer+vec3(.025)*fine;
 gl_FragColor=vec4(water,edge*(.30+.08*fine));
 }`}),J_=new re({color:11186859,transparent:!0,opacity:.14,depthWrite:!1});function rt(i,t,e,n,s){const r=new st(X_,n);return r.position.set(...e),r.scale.set(...t),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function It(i,t,e,n,s,r=6){const o=t.clone().add(e).multiplyScalar(.5),a=e.clone().sub(t),l=new st(new we(n,n,a.length(),r),s);return l.position.copy(o),l.quaternion.setFromUnitVectors(K(0,1,0),a.normalize()),l.castShadow=!0,i.add(l),l}function zn(i,t,e=256){const n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(s.fillStyle=t,s.fillRect(0,0,e,e),i==="ground"){for(let o=0;o<31e3;o++){const a=Math.floor(35+lt()*80);s.fillStyle=`rgba(${a},${a+7},${a+9},${lt()*.22})`,s.fillRect(lt()*e,lt()*e,1+lt()*3,1+lt()*2)}for(let o=0;o<80;o++){s.strokeStyle=`rgba(10,15,18,${.06+lt()*.2})`,s.lineWidth=.25+lt()*1.7,s.beginPath();let a=lt()*e,l=lt()*e;s.moveTo(a,l),s.lineTo(a+lt()*24,l+lt()*14),s.stroke()}for(let o=0;o<95;o++){const a=lt()*e,l=lt()*e,c=(.008+lt()*.19)*e,h=lt()<.68?`rgba(5,11,14,${.04+lt()*.3})`:`rgba(121,130,122,${.015+lt()*.12})`,d=s.createRadialGradient(a,l,0,a,l,c);d.addColorStop(0,h),d.addColorStop(1,"rgba(10,12,13,0)"),s.fillStyle=d,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<560;o++){const a=lt()*e,l=lt()*e;s.fillStyle=lt()<.6?`rgba(8,12,14,${.12+lt()*.18})`:`rgba(167,179,176,${.03+lt()*.12})`,s.fillRect(a,l,1.2+lt()*4,1+lt()*3)}for(let o=0;o<24;o++){const a=lt()*e,l=lt()*e;s.beginPath(),s.strokeStyle=`rgba(11,15,18,${.1+lt()*.29})`,s.lineWidth=.4+lt()*1.4,s.moveTo(a,l);for(let c=1;c<12;c++)s.lineTo(a+Math.sin(c*.7+o)*c*.84,l+c*(1.5+lt()*1.4));s.stroke()}}else{for(let o=0;o<3100;o++){const a=i==="metal"?"118,71,43":i==="warning"?"22,22,20":"19,23,26";s.fillStyle=`rgba(${a},${lt()*.24})`;let l=lt()*e,c=lt()*e;s.fillRect(l,c,1+lt()*5,1+lt()*7)}for(let o=0;o<110;o++){const a=lt()*e,l=lt()*e;s.fillStyle=`rgba(8,13,16,${lt()*.18})`,s.fillRect(a,l,1+lt()*1,4+lt()*65)}for(let o=0;o<52;o++){s.strokeStyle=`rgba(197,202,183,${lt()*.12})`,s.lineWidth=.3+lt()*.7,s.beginPath();let a=lt()*e,l=lt()*e;s.moveTo(a,l),s.lineTo(a+1+lt()*12,l),s.stroke()}for(let o=0;o<140;o++){const a=lt()*e,l=lt()*e,c=3+lt()*34,u=s.createRadialGradient(a,l,0,a,l,c),h=lt()>.36?"120,68,44":"12,25,30";u.addColorStop(0,`rgba(${h},${.05+lt()*.22})`),u.addColorStop(1,`rgba(${h},0)`),s.fillStyle=u,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<70;o++){const a=lt()*e,l=lt()*e,c=10+lt()*110,u=s.createLinearGradient(0,l,0,l+c);u.addColorStop(0,`rgba(97,49,29,${.09+lt()*.3})`),u.addColorStop(1,"rgba(97,49,29,0)"),s.fillStyle=u,s.fillRect(a,l,.8+lt()*3,c)}for(let o=0;o<150;o++){const a=lt()*e,l=lt()*e;s.strokeStyle=`rgba(192,186,171,${.06+lt()*.26})`,s.lineWidth=.3+lt()*.75,s.beginPath(),s.moveTo(a,l),s.lineTo(a+3+lt()*42,l+(lt()-.5)*1.8),s.stroke()}}const r=new $e(n);return r.colorSpace=ye,r.wrapS=r.wrapT=Jn,r.anisotropy=4,r}function j_(){const i=document.createElement("canvas");i.width=256,i.height=512;const t=i.getContext("2d");t.clearRect(0,0,256,512);const e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"rgba(171,174,163,.15)"),e.addColorStop(.09,"rgba(185,189,176,.76)"),e.addColorStop(.82,"rgba(187,190,181,.73)"),e.addColorStop(1,"rgba(175,178,164,.09)"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let s=0;s<1700;s++){const r=lt()*256,o=lt()*512;t.clearRect(r,o,.3+lt()*6,.5+lt()*15)}for(let s=0;s<160;s++){const r=lt()*256,o=lt()*512;t.clearRect(r,o,2+lt()*30,.8+lt()*3)}for(let s=0;s<25;s++){const r=lt()*256,o=lt()*512,a=10+lt()*50;t.save(),t.globalCompositeOperation="destination-out";const l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(0,0,0,.8)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(r-a,o-a,a*2,a*2),t.restore()}const n=new $e(i);return n.colorSpace=ye,n.anisotropy=8,new re({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function Ks(i,t,e="#deded5",n="#29353a"){const s=document.createElement("canvas");s.width=512,s.height=172;const r=s.getContext("2d");r.fillStyle=n,r.fillRect(0,0,512,172),r.strokeStyle="rgba(255,255,255,.45)",r.lineWidth=3,r.strokeRect(9,9,494,154),r.fillStyle=e,r.font="900 70px Impact,Arial Narrow,sans-serif",r.fillText(i,28,93),r.font="600 23px monospace",r.fillText(t,30,137);const o=new $e(s);return o.colorSpace=ye,o}function No(i,t,e,n=.34){const s=[],r=[],o=[],a=Math.max(6,Math.round(i/n));for(let c=0;c<=a*4;c++){const u=c/(a*4),h=c%4,f=e*(h===1||h===2?1:0);if(s.push(u*i-i/2,0,f,u*i-i/2,t,f),r.push(u*3,0,u*3,1),c<a*4){const g=c*2;o.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new Be;return l.setAttribute("position",new ue(s,3)),l.setAttribute("uv",new ue(r,2)),l.setIndex(o),l.computeVertexNormals(),l}const hd=[["#435c61",4942446],["#a65d3e",11297344],["#515b5d",5793132],["#706a55",8288099],["#354957",3755613],["#5f5048",7758165]],ud=hd.map(([i])=>{const t=zn("metal",i,512);return Ht(13752534,.62,.23,{map:t,bumpMap:t,bumpScale:.015})}),qh=new Map,$h=new Map;function Q_(i,t){const e=`${i}:${Math.abs(t)%8}`,n=$h.get(e);if(n)return n;const s=Ks(`C-${i+1}`,`LOAD ${Math.abs(t*17+i*11)%99}`),r=new re({map:s,transparent:!0,opacity:.56,depthWrite:!1,side:Oe});return $h.set(e,r),r}function tv(i,t){const e=`${i}:${t%4}`,n=qh.get(e);if(n)return n;const s=document.createElement("canvas");s.width=768,s.height=256;const r=s.getContext("2d");r.clearRect(0,0,768,256);const o=["NORTHLINE","OCEANSTAR","BLACKWATER","BRIDGEPORT","CIRRUS","ATLANTIC"][i%6];let a=(i+1)*15289+t%4*9013;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296);r.fillStyle="rgba(220,228,220,.55)",r.lineWidth=5,r.beginPath(),r.moveTo(37,77),r.lineTo(109,31),r.lineTo(166,77),r.lineTo(109,124),r.closePath(),r.strokeStyle="rgba(216,224,221,.49)",r.stroke(),r.beginPath(),r.moveTo(61,83),r.lineTo(102,52),r.lineTo(146,83),r.stroke(),r.font="700 69px Impact,Arial Narrow,Arial",r.letterSpacing="4px",r.fillText(o,194,100,545),r.font="500 24px monospace",r.letterSpacing="1px",r.fillText(`ISO 22G1   ${String((i*57091+t*37)%9999999).padStart(7,"0")}`,195,146,510),r.font="700 27px monospace",r.fillText("MAX GROSS 30 480 KG   /   67 200 LB",196,185,500),r.globalCompositeOperation="destination-out";for(let h=0;h<2500;h++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.12+l()*.72})`,r.fillRect(d,f,1+l()*9,.3+l()*4)}for(let h=0;h<42;h++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.3+l()*.6})`,r.fillRect(d,f,7+l()*58,.4+l()*1.5)}const c=new $e(s);c.colorSpace=ye,c.anisotropy=8;const u=new re({map:c,transparent:!0,opacity:.78,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-1});return qh.set(e,u),u}const ev=(()=>{const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d");let e=874233;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<480;r++){const o=n()*512,a=n()*256,l=10+n()*120,c=t.createLinearGradient(0,a,0,a+l);c.addColorStop(0,`rgba(72,37,21,${.1+n()*.29})`),c.addColorStop(1,"rgba(72,37,21,0)"),t.fillStyle=c,t.fillRect(o,a,1+n()*2.8,l)}const s=new $e(i);return s.colorSpace=ye,new re({map:s,transparent:!0,opacity:.85,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-1})})();function mo(i,t,e,n,s=0,r=0,o,a=20,l){const c=o??Math.floor(lt()*hd.length),u=ud[c],h=new qt;h.position.set(e,(l??r*2.72)+.12,n),h.rotation.y=s,i.add(h);const d=2.7,f=a===41?2.86:2.55,g=a===20?6.06:12.2;rt(h,[d,f,g],[0,f/2,0],u);for(let M of[-1,1]){const v=new st(No(g-.2,f-.21,M*.067,.3),u);v.rotation.y=M*Math.PI/2,v.position.set(M*(d/2+.015),.12,0),v.castShadow=!0,v.receiveShadow=!0,h.add(v);const A=new st(new Pe(g-.24,f-.15),ev);if(A.rotation.y=M*Math.PI/2,A.position.set(M*(d/2+.115),f/2,0),h.add(A),lt()<.84){const P=new st(new Pe(2.25,.75),tv(c,Math.abs(Math.floor(e*11+n*7+r*23))));P.rotation.y=M*Math.PI/2,P.position.set(M*(d/2+.124),1.63,-.25),h.add(P)}const C=new st(new Pe(.53,.3),Q_(c,Math.round(e*4+n*9+r*17)));C.rotation.y=M*Math.PI/2,C.position.set(M*(d/2+.132),.55,g/2-.65),h.add(C)}for(let M of[-1,1]){const v=new st(No(d-.12,f-.23,M*.05,.22),u);v.position.set(0,.12,M*(g/2+.022)),M===-1&&(v.rotation.y=Math.PI),h.add(v),rt(h,[d+.12,.09,.1],[0,f+.01,M*g/2],qe),rt(h,[d+.12,.13,.1],[0,.055,M*g/2],qe),rt(h,[.035,f,.035],[0,f/2,M*(g/2+.09)],Ce);for(let A=-1;A<=1;A+=2)rt(h,[.065,f-.22,.07],[A*(d/2-.23),f/2,M*(g/2+.12)],$n);for(let A=-1;A<=1;A+=2)for(let C=0;C<2;C++)rt(h,[.12,.17,.06],[A*(d/2-.23),.48+C*1.45,M*(g/2+.165)],Ce)}for(let M of[-1,1]){for(let v of[-1,1]){rt(h,[.1,f+.14,.12],[M*(d/2-.04),f/2,v*(g/2-.055)],$n);for(let A of[.08,f+.04])rt(h,[.24,.16,.24],[M*(d/2-.04),A,v*(g/2-.05)],Ce)}rt(h,[.1,.08,g+.16],[M*(d/2-.04),f+.08,0],$n),rt(h,[.11,.11,g+.16],[M*(d/2-.04),.035,0],$n)}const _=new st(new Pe(1.45,.49),new re({map:Ks(yc(["HARBOR","NORTH","MARLIN","SE-04","TIDAL"]),`CARGO  /  ${String(Math.floor(lt()*81e3)).padStart(5,"0")}`),transparent:!0,opacity:.85}));_.position.set(0,1.72,g/2+.082),h.add(_);for(let M=0;M<3;M++)rt(h,[.045,.017,.56],[d/2+.092,.62+M*.53,-1.6+M*.9],ad);const m=Math.abs(Math.sin(s))>.7,p=(m?g:d)/2,b=(m?d:g)/2;t.push({minX:e-p-.2,maxX:e+p+.2,minZ:n-b-.2,maxZ:n+b+.2,height:(l??r*2.72)+f})}function Zh(i,t,e,n=1){const s=new qt;s.position.set(t,0,e),s.scale.setScalar(n),i.add(s);const r=Ht(6125430,.58,.62),o=Ht(10976592,.67,.53);for(let a of[-1,1]){let l=K(a*8.6,0,0),c=K(a*6.2,21,0);It(s,l,c,.36,r,8),It(s,K(a*8.6,0,1.7),K(a*6.2,21,1.7),.36,r,8);for(let u=3;u<21;u+=3){const h=u/21;It(s,K(a*(8.6-2.4*h),u,0),K(a*(8.6-2.4*h),u,1.7),.15,r)}}for(let a of[13,19.8]){It(s,K(-6.7,a,.85),K(6.7,a,.85),.24,r,8);for(let l=-6;l<6;l+=2)It(s,K(l,a,.85),K(l+2,a+1,.85),.09,r),It(s,K(l,a+1,.85),K(l+2,a,.85),.09,r)}for(let a of[-1,1]){It(s,K(-19.5,20.9,a*.7),K(19.5,20.9,a*.7),.27,r),It(s,K(-19.5,22.25,a*.7),K(19.5,22.25,a*.7),.17,r);for(let l=-19;l<19;l+=2.5)It(s,K(l,20.9,a*.7),K(l+2.5,22.25,a*.7),.09,r),It(s,K(l,22.25,a*.7),K(l+2.5,20.9,a*.7),.09,r)}rt(s,[3.9,2.25,2.2],[6.3,22.5,.1],r),rt(s,[2.8,.85,2.5],[6.3,22.1,1.35],qe);for(let a=8;a<22;a+=2.8)It(s,K(-2.9,a,.4),K(-2.9,a+2.3,.4),.048,o);for(let a of[-1,1])It(s,K(-2.7+a*.65,20.6,0),K(-2.7+a*.65,3.5,0),.023,qe);rt(s,[4.7,.45,1.35],[-2.7,3.4,0],o)}function nv(i,t,e,n=1){const s=new qt;s.position.set(t,0,e),s.scale.setScalar(n),s.rotation.y=Math.PI/2,i.add(s);const r=Ht(6648178,.72,.57),o=Ht(9079168,.69,.62),a=Ht(2700085,.81,.51),l=7,c=26.8;for(const h of[-1,1]){for(const d of[-1.65,1.65]){It(s,K(h*l/2,0,d),K(h*l/2,c,d),.26,r,10);for(let f=2;f<c-1;f+=4.2){const g=K(h*l/2,f,d),_=K(h*l/2,f+4.1,-d);It(s,g,_,.094,o)}}for(let d=2;d<=c;d+=4.1)It(s,K(h*l/2,d,-1.65),K(h*l/2,d,1.65),.12,r)}for(const h of[-1.65,1.65]){for(let d of[4,14,22,26.8])It(s,K(-l/2,d,h),K(l/2,d,h),.16,r);for(let d=-3.25;d<=3;d+=1.35)It(s,K(d,26.45,h),K(d+1.15,27.6,h),.11,r),It(s,K(d,27.55,h),K(d+1.15,26.45,h),.11,r)}for(const h of[-1.2,1.2]){It(s,K(-18.5,26.5,h),K(14,26.5,h),.2,r),It(s,K(-16.7,28.1,h),K(12,28.1,h),.15,r);for(let d=-18;d<13;d+=2)It(s,K(d,26.45,h),K(d+2,28.1,h),.09,o),It(s,K(d,28.1,h),K(d+2,26.45,h),.09,r)}for(let h=-17;h<=13;h+=3.8)It(s,K(h,26.5,-1.2),K(h,26.5,1.2),.1,r);for(const h of[-1,1]){It(s,K(h*4,1.1,1.45),K(h*4,26.5,1.45),.036,o),It(s,K(h*4.48,1.1,1.45),K(h*4.48,26.5,1.45),.036,o);for(let d=1.2;d<26.5;d+=.55)It(s,K(h*4,d,1.45),K(h*4.48,d,1.45),.023,o)}rt(s,[8.8,.17,4.7],[0,23.8,0],a);for(let h=-4;h<4;h+=.48)rt(s,[.07,.08,4.8],[h,23.97,0],o);rt(s,[3.2,2.4,2.25],[1.2,29,-.2],r);for(const h of[-1.35,1.05])rt(s,[2.8,.72,.09],[1.2,29.13,h],a);for(let h=-1;h<2;h++)rt(s,[.68,.42,.14],[1.2+h*.78,29.27,1.19],Ht(9280660,.2,.45,{emissive:2636343,emissiveIntensity:.23}));rt(s,[3.1,1.4,2.3],[-1.2,26,0],a);for(const h of[-1.18,1.18])It(s,K(-1.2+h,25.2,-.8),K(-1.2+h,8.6,-.8),.024,a),It(s,K(-1.2+h,25.2,.8),K(-1.2+h,8.6,.8),.024,a);rt(s,[4.7,.68,2.2],[-1.2,8.5,0],o);for(const h of[-1,1])for(const d of[-1,1])It(s,K(-1.2+h*2.15,8.3,d*.8),K(-1.2+h*2.15,7,d*.8),.05,a);const u=new st(new Pe(4.9,.62),new re({map:Ks("GANTRY 04","BERTH CONTROL  /  07"),transparent:!0}));u.position.set(0,13.4,1.75),s.add(u);for(const h of[1.2,23.2])for(const d of[-1,1])rt(s,[.65,.2,.25],[d*3.5,h,1.8],rd);rt(s,[.22,.22,.22],[0,30.36,0],od)}const iv=Ht(9670534,.97,0,{map:zn("ground","#97938b")});function sv(i,t,e,n=0){const s=new qt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=new $s;r.moveTo(-.58,0),r.lineTo(.58,0),r.lineTo(.52,.28),r.lineTo(.35,.54),r.lineTo(.35,.88),r.lineTo(-.35,.88),r.lineTo(-.35,.54),r.lineTo(-.52,.28),r.closePath();const o=new cs(r,{depth:2.5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.022,bevelSegments:1,steps:1});o.rotateY(Math.PI/2);const a=new st(o,iv);a.position.set(-1.25,0,0),a.castShadow=!0,s.add(a);for(const l of[-1,.4])rt(s,[.55,.06,.17],[0,.69,l],rd)}const rv=Ht(8023639,.94,.03,{map:zn("paint","#8c8068")}),dd=Ht(3749934,.97,.04);function Kh(i,t,e,n=0){const s=new qt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=rv,o=dd;for(const a of[-.42,.42])rt(s,[1.12,.11,.14],[0,.13,a],o);for(let a=0;a<6;a++)rt(s,[.19,.06,1.12],[-.47+a*.185,.22,0],r);for(const a of[-.45,0,.45])rt(s,[.16,.09,.95],[a,.035,0],o)}function ov(i,t,e){const n=new qt;n.position.set(t,0,e),i.add(n);const s=Ht(1778213,.94,.09);for(const o of[-1,1]){const a=new st(new we(.57,.57,.082,20),$n);a.rotation.z=Math.PI/2,a.position.set(o*.28,.58,0),n.add(a);const l=new st(new hn(.44,.045,8,24),Ce);l.rotation.y=Math.PI/2,l.position.set(o*.33,.58,0),n.add(l)}const r=new st(new we(.31,.31,.6,16),s);r.rotation.z=Math.PI/2,r.position.y=.58,n.add(r);for(let o=0;o<10;o++){const a=o/10*Math.PI*2,l=new st(new hn(.31+o*.014,.018,6,32),s);l.rotation.y=Math.PI/2,l.position.set(-.25+o*.052,.58,0),l.rotation.x=a*.035,n.add(l)}}const av=Ht(2106662,.98,.05),Vl=Ht(1054234,.92,.06),lv=new Ku({color:11780802,roughness:.65,metalness:0,transparent:!0,opacity:.8,clearcoat:.05,depthWrite:!0}),Jh=Ht(12223806,.63,.41),di=Ht(9084317,.55,.48);function cv(i){const t=new hn(.43,.13,10,28);for(let e=0;e<4;e++){const n=new st(t,av);n.rotation.x=Math.PI/2,n.position.y=.22+e*.25,n.castShadow=!0,i.add(n);const s=new st(new hn(.285,.03,7,20),Vl);s.rotation.x=Math.PI/2,s.position.y=.25+e*.25,i.add(s);for(let r=0;r<12;r++){const o=r*Math.PI/6,a=rt(i,[.11,.025,.08],[Math.cos(o)*.56,.21+e*.25,Math.sin(o)*.56],Vl);a.rotation.y=o}}}function hv(i){rt(i,[1.15+.1,.15,1.1+.08],[0,.075,0],dd),rt(i,[1.15,1.25-.18,1.1],[0,.2+(1.25-.18)/2,0],lv),rt(i,[.28,.13,.14],[.22,1.3,0],Ce);for(const s of[-1.15/2,1.15/2])for(const r of[-1.1/2,1.1/2])It(i,K(s,.2,r),K(s,1.35,r),.026,di);for(const s of[.3,.65,1.04,1.3]){for(const r of[-1.15/2,1.15/2])It(i,K(r,s,-1.1/2),K(r,s,1.1/2),.023,di);for(const r of[-1.1/2,1.1/2])It(i,K(-1.15/2,s,r),K(1.15/2,s,r),.023,di)}for(const s of[-.28,0,.28])for(const r of[-1.1/2,1.1/2])It(i,K(s,.2,r),K(s,1.3,r),.018,di)}function uv(i){const t=new qt;i.add(t),rt(t,[1.55,.2,2.75],[0,.31,0],qe),rt(t,[1.57,.85,1.42],[0,.81,-.67],Jh),rt(t,[1.35,.46,1.4],[0,1.22,-.63],$n);for(const n of[-1,1]){const s=rt(t,[.24,.26,.9],[n*.69,.85,-.65],Jh);s.rotation.y=n*.12;for(const r of[-1.02,.86]){const o=new st(new we(.4,.4,.2,20),Vl);o.rotation.z=Math.PI/2,o.position.set(n*.84,.38,r),o.castShadow=!0,t.add(o);const a=new st(new we(.2,.2,.21,16),Ce);a.rotation.z=Math.PI/2,a.position.copy(o.position),t.add(a)}It(t,K(n*.68,.7,-.9),K(n*.68,2.4,-.9),.055,di),It(t,K(n*.68,.7,.55),K(n*.68,2.4,.55),.055,di)}rt(t,[1.57,.15,1.64],[0,2.42,-.16],qe),rt(t,[.7,.18,.62],[0,1.12,.25],sd),It(t,K(0,1.24,.17),K(0,1.5,.36),.04,Ce);const e=new st(new hn(.19,.035,9,20),qe);e.rotation.x=Math.PI/3,e.position.set(0,1.5,.36),t.add(e);for(const n of[-.45,.45])rt(t,[.12,2.4,.1],[n,1.35,1.32],di),It(t,K(n,1.1,1.27),K(n,2.1,1.27),.04,Ce),rt(t,[.12,.08,2.6],[n,.34,2.17],di),rt(t,[.28,.045,2.5],[n,.37,2.17],Ce);for(let n=.3;n<2.4;n+=.24)rt(t,[.95,.035,.1],[0,n,1.33],qe);rt(t,[.28,.12,.18],[0,2.56,-.9],od)}function dv(i){rt(i,[1.75,1.13,.96],[0,.64,0],fd),rt(i,[1.88,.1,1.13],[0,.08,0],qe);for(const e of[-.51,.51]){rt(i,[1.65,.09,.06],[0,.2,e],Ce),rt(i,[1.65,.09,.06],[0,1.17,e],Ce);for(let n=0;n<7;n++)rt(i,[.03,.53,.014],[-.62+n*.205,.7,e*1.02],qe)}for(const e of[-.78,.78])for(const n of[-.45,.45])It(i,K(e,.12,n),K(e,1.3,n),.045,Ce);const t=new st(new we(.11,.12,.42,12),qe);t.position.set(.55,1.43,-.16),i.add(t)}function fv(i,t,e,n=!1){const s=new qt;s.position.set(t,0,e),i.add(s);const r=n?6.4:13;It(s,K(0,0,0),K(0,r,0),n?.065:.12,$n,12);for(const l of[1.6,5,9.3].filter(c=>c<r))for(const c of[-1,1])It(s,K(0,l,0),K(c*.31,l-.45,0),.025,Ce);It(s,K(-1.6,r,0),K(1.6,r,0),.085,di);const o=new re({color:16241325});for(const l of[-1.1,1.1]){rt(s,[.98,.64,.13],[l,r-.07,-.03],qe,[.21,0,0]),rt(s,[.83,.51,.037],[l,r-.08,.065],o,[.21,0,0]);for(const c of[-.38,.38])rt(s,[.06,.53,.07],[l+c,r-.08,.085],Ce)}const a=new Ui(16768956,n?5:8,n?12:20,1.7);return a.position.set(0,r-1,0),s.add(a),a}function pv(i,t,e,n,s=0){const r=new qt;r.position.set(t,0,e),r.rotation.y=s,i.add(r),It(r,K(-.59,0,0),K(-.59,3.6,0),.065,Ce),It(r,K(.59,0,0),K(.59,3.6,0),.065,Ce),rt(r,[1.2,.97,.1],[0,2.92,0],qe);const o=new st(new Pe(1.09,.85),new re({map:Ks(n,"NO UNAUTHORIZED ACCESS","#e5d6b5","#343d3e"),side:Oe}));o.position.set(0,2.92,.065),r.add(o);const a=o.clone();a.position.set(0,2.92,-.065),a.rotation.y=Math.PI,r.add(a);for(const l of[2.44,3.4])rt(r,[1.16,.03,.045],[0,l,.08],ad)}const fr=Ht(4745079,.73,.48),mv=Ht(11563074,.65,.36),gv=Ht(16777215,.92,.02,{map:zn("paint","#b4a78c")}),jh=Ht(6706753,.93,.02,{map:zn("paint","#756952")}),fd=Ht(3300721,.57,.42);Ht(9260861,.61,.37);const _v=new re({map:Ks("FRAGILE","KEEP DRY"),transparent:!0,opacity:.46,depthWrite:!1,side:Oe});function Fo(i,t,e,n,s,r,o){const a=new qt;a.position.set(t,e,n),i.add(a),rt(a,[s,r,o],[0,r/2,0],gv);for(const c of[-1,1])for(const u of[-1,1])rt(a,[.06,r,.06],[c*(s/2-.06),r/2,u*(o/2-.04)],jh);for(const c of[r-.12,.12])rt(a,[s+.02,.045,o+.02],[0,c,0],jh);const l=new st(new Pe(s*.6,r*.28),_v);l.position.set(0,r*.6,o/2+.02),a.add(l)}function Qh(i,t,e,n=3){const s=n*2.4,r=2.1,o=new qt;o.position.set(t,0,e),i.add(o);const a=-r/2,l=r/2;for(let c=0;c<=n;c++)for(const u of[a,l]){const h=c*2.4-s/2;rt(o,[.11,5.75,.11],[h,2.875,u],fr);for(const d of[1,2.65,4.27,5.57])rt(o,[.19,.12,.2],[h,d,u],fr)}for(const c of[1,2.65,4.3]){rt(o,[s+.25,.14,r+.1],[0,c,0],mv);for(let u=0;u<n;u++){const h=(u+.5)*2.4-s/2;if((u+Math.round(t))%3===0&&c>2)for(const d of[-.65,.55]){const f=new st(new we(.33,.33,1.1,12),fd);f.position.set(h+d,c+.64,0),o.add(f);for(const g of[c+.21,c+1.1]){const _=new st(new hn(.33,.023,6,14),Ce);_.rotation.x=Math.PI/2,_.position.set(h+d,g,0),o.add(_)}}else{const d=.89+.17*lt(),f=1.5+.15*lt(),g=1.08;Fo(o,h-.58,c+.11,0,d,g,f),Fo(o,h+.56,c+.11,0,d,g,f)}}}for(const c of[-s/2,s/2])for(let u=0;u<4.7;u+=1.6)It(o,K(c,u,a),K(c,u+1.6,l),.04,fr),It(o,K(c,u,l),K(c,u+1.6,a),.04,fr);for(let c=0;c<n;c++){const u=(c+.5)*2.4-s/2,h=new st(new Pe(1.6,.14),new re({map:Ks("BAY "+String(c+1),"MAX 1200 KG","#d4e1df","#34546b"),transparent:!0}));h.position.set(u,2.73,a-.08),o.add(h)}}function vv(){const i=document.createElement("canvas");i.width=1024,i.height=640;const t=i.getContext("2d");let e=893371;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<170;r++){const o=n()*i.width,a=n()*i.height,l=12+n()*110,c=.35+n()*1.2,u=t.createRadialGradient(o,a,0,o,a,l);u.addColorStop(0,`rgba(9,16,19,${.04+n()*.19})`),u.addColorStop(1,"rgba(9,16,19,0)"),t.save(),t.translate(o,a),t.scale(1,c),t.fillStyle=u,t.fillRect(-l,-l,l*2,l*2),t.restore()}for(const r of[0,1,2]){const o=r*150-130;for(const a of[-1,1])t.beginPath(),t.moveTo(520+o+a*28,640),t.bezierCurveTo(480+o+a*34,490,640+o+a*26,220,530+o+a*22,-10),t.lineWidth=4.5+n()*3,t.strokeStyle="rgba(14,20,20,.17)",t.stroke();for(let a=0;a<50;a++){const l=a*13,c=515+o+24*Math.sin(a*.073+r);t.save(),t.translate(c,l),t.rotate(Math.sin(a*.13)*.18),t.fillStyle=`rgba(14,20,20,${.015+n()*.1})`,t.fillRect(-22,-3,44,3),t.restore()}}for(let r=0;r<440;r++){const o=n()*i.width,a=n()*i.height;t.fillStyle=n()>.55?`rgba(25,20,16,${n()*.11})`:`rgba(225,218,194,${n()*.05})`,t.fillRect(o,a,1+n()*18,.4+n()*3)}const s=new $e(i);return s.colorSpace=ye,s.anisotropy=8,new re({map:s,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function xv(i){const t=new qt;t.position.set(-13.3,0,-25.5),t.rotation.y=.52,i.add(t);const e=Ht(3885903,.64,.66),n=Ht(12485181,.52,.48),s=Ht(6383976,.72,.5),r=5.5,o=-1,a=17,l=4.75/a;for(let c=0;c<a;c++){const u=c/(a-1),h=r+(o-r)*u,d=(c+1)*l;rt(t,[1.65,.075,.35],[0,d-.05,h],s);for(const f of[-1,1])rt(t,[.04,.14,.35],[f*.81,d,h],e)}for(const c of[-1,1]){const u=c*.8;It(t,K(u,.15,r+.28),K(u,5,o-.22),.1,e),It(t,K(u,.15,r-.05),K(u,5,o-.5),.06,e),It(t,K(u,1.13,r+.45),K(u,5.95,o-.32),.045,n);for(let h=0;h<8;h++){const d=h/7,f=r+(o-r)*d,g=d*4.75;It(t,K(u,g+.1,f),K(u,g+1.13,f),.031,n)}}rt(t,[3.2,.18,4.6],[0,4.82,-2.3],s);for(const c of[-1,1])It(t,K(c*1.58,4.9,-4.4),K(c*1.58,6,-4.4),.055,n),It(t,K(c*1.58,5.96,-4.4),K(c*1.58,5.96,-.3),.04,n);for(let c=0;c<3;c++){const u=-4+c*1.65;It(t,K(-1.25,4.67,u),K(-1.25,0,u),.12,e)}}const yv=Ht(12874809,.75,.07),Mv=Ht(11909289,.88,.02);function Sv(i,t,e){const n=new qt;n.position.set(t,0,e),i.add(n),rt(n,[.54,.055,.54],[0,.025,0],sd);const s=new st(new na(.19,.74,10),yv);s.position.y=.43,s.castShadow=!0,n.add(s);for(const r of[.37,.55]){const o=new st(new we(.126-(r-.35)*.18,.126-(r-.35)*.18,.07,12),Mv);o.position.y=r,n.add(o)}}function Ev(i,t,e){const n=new qt;n.position.set(t,0,e),i.add(n);const s=yc([$_,$n,Z_]),r=new st(new we(.42,.42,1.18,14),s);r.position.y=.6,r.castShadow=!0,n.add(r);for(let a of[.17,.44,.83,1.06]){const l=new st(new hn(.424,.023,5,16),Ce);l.rotation.x=Math.PI/2,l.position.y=a,n.add(l)}const o=new st(new we(.38,.38,.04,14),qe);o.position.y=1.2,n.add(o)}function tu(i,t,e,n,s=.022){const r=new pc(n,28);r.rotateX(-Math.PI/2);const o=K_,a=new st(r,o);a.position.set(t,s+lt()*.005,e),a.scale.z=.42+lt()*.5,a.rotation.y=lt()*Math.PI,i.add(a);for(let l=0;l<3;l++){const c=new st(new Pe(n*(.16+lt()*.3),.007),J_);c.rotation.x=-Math.PI/2,c.position.set(t+(lt()-.5)*n,s+.008,e+(lt()-.5)*n*.2),i.add(c)}}function wv(i){const t={value:0},e=new st(new Pe(132,94,42,30),new Cn({uniforms:{time:t},side:Oe,vertexShader:`uniform float time;varying vec3 vWorld;varying vec2 vUv;
   void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*.37+time*.68)*.045+sin(p.y*.63-time*.9)*.035;
   vec4 w=modelMatrix*vec4(p,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`uniform float time;varying vec3 vWorld;varying vec2 vUv;
   float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
   void main(){vec2 p=vWorld.xz;
    float r=noise(p*vec2(.30,.68)+vec2(time*.12,0.));
    float fine=noise(p*vec2(1.7,2.6)+vec2(time*.23,-time*.17));
    float micro=noise(p*vec2(3.6,1.5)+vec2(-time*.3,time*.22));
    float sparkle=smoothstep(.67,.89,fine)*.24+smoothstep(.72,.93,micro)*.22;
    float glow=pow(noise(p*vec2(.11,.21)),3.)*.11;
    vec3 deep=vec3(.041,.068,.084),silver=vec3(.13,.17,.19);
    vec3 col=mix(deep,silver,clamp(r*.62+fine*.16,0.,1.));
    float sunGlint=exp(-abs(p.y-23.)*.09)*(.24+.76*smoothstep(28.,85.,p.x));
    col+=vec3(.95,.78,.56)*(sparkle+glow)*sunGlint;
    gl_FragColor=vec4(col,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}));return e.rotation.x=-Math.PI/2,e.position.set(97,.025,6),e.receiveShadow=!1,e.frustumCulled=!1,i.add(e),n=>{t.value=n}}function bv(i){const t=Ht(7171687,.94,.07),e=Ht(1778726,.87,.22),n=Ht(13212241,.78,.11);for(const[u,h]of[[-30,16],[23.7,30]]){const d=(u+h)/2,f=h-u;rt(i,[.9,.75,f],[30,.01,d],t),rt(i,[.15,.16,f],[29.56,.34,d],e);for(let g=u+2;g<h;g+=3.6)rt(i,[.25,.24,.46],[29.54,.32,g],n),rt(i,[.43,.34,.52],[30.15,-.3,g],e)}for(const u of[-22,-12,-2,9,16.4,25.6]){const h=new qt;h.position.set(29.1,0,u),i.add(h);const d=new st(new we(.18,.24,.43,12),e);d.position.y=.24,h.add(d);const f=new st(new we(.35,.35,.12,12),t);f.position.y=.5,h.add(f);for(const g of[-1,1])rt(h,[.22,.08,.12],[g*.26,.47,0],e)}const s=Ht(6519681,.51,.57,{map:zn("metal","#52696b")});rt(i,[7.8,.4,4.9],[26,.18,14.1],s);for(let u=0;u<7;u++){const h=22.4+u*1.08;rt(i,[.13,.08,4.88],[h,.42,14.1],Ce)}for(const u of[11.8,16.35])rt(i,[7.5,.12,.18],[26,.47,u],qe);for(let u=0;u<3;u++)for(let h=0;h<2;h++){const d=26.6+h*.9,f=26.5+u*1.2,g=rt(i,[1.18,.77,.86],[d,.38+u*0,f],ld);g.rotation.y=.02*(u%2?1:-1),rt(i,[1.24,.075,.91],[d,.8,f],qe)}const r=document.createElement("canvas");r.width=r.height=256;const o=r.getContext("2d");o.clearRect(0,0,256,256),o.strokeStyle="rgba(183,198,191,.55)",o.lineWidth=2.1;for(let u=-256;u<512;u+=24)o.beginPath(),o.moveTo(u,0),o.lineTo(u+256,256),o.stroke(),o.beginPath(),o.moveTo(u,256),o.lineTo(u+256,0),o.stroke();const a=new $e(r);a.colorSpace=ye,a.wrapS=a.wrapT=Jn,a.repeat.set(8,4);const l=new st(new Pe(10,2.5),new re({map:a,transparent:!0,opacity:.32,side:Oe,depthWrite:!1}));l.position.set(28,1.55,30.2),l.rotation.y=Math.PI/2,i.add(l);for(let u=23.5;u<=32.5;u+=2.25)It(i,K(u,.2,30.2),K(u,3.05,30.2),.043,Ce);It(i,K(23.5,3.05,30.2),K(32.5,3.05,30.2),.047,Ce);for(const u of[16.3,23.4])It(i,K(29,0,u),K(29,1.15,u),.038,Ce),It(i,K(29,1.15,u),K(30.1,1.15,u),.038,Ce),It(i,K(30.1,0,u),K(30.1,1.15,u),.038,Ce);const c=Ht(9673361,.4,.73);for(const u of[19.62,20.38])It(i,K(30.2,.5,u),K(30.2,-2.8,u),.025,c);for(let u=.3;u>-2.8;u-=.3)It(i,K(30.22,u,19.62),K(30.22,u,20.38),.023,c);for(let u=0;u<3;u++)rt(i,[.56,.018,.1],[27.5+u*.6,.032,20],n)}function Tv(i,t){const e=new Float32Array(t*6),n=new Float32Array(t);for(let a=0;a<t;a++){const l=(lt()-.5)*66,c=lt()*20,u=(lt()-.5)*70,h=a*6;e[h]=l,e[h+1]=c,e[h+2]=u,e[h+3]=l+.055,e[h+4]=c-(.28+lt()*.27),e[h+5]=u+.045,n[a]=12+lt()*19}const s=new Be;s.setAttribute("position",new ln(e,3));const r=new dc({color:10927561,transparent:!0,opacity:.17,depthWrite:!1,blending:es}),o=new x0(s,r);return o.frustumCulled=!1,o.renderOrder=5,i.add(o),{rain:o,update(a,l,c){o.position.x=l,o.position.z=c;const u=s.attributes.position;for(let h=0;h<t;h++){const d=h*6;let f=u.array[d+1];f-=a*n[h],f<-.5&&(f+=20),u.array[d+1]=f,u.array[d+4]=f-.42}u.needsUpdate=!0}}}function Av(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{if(n instanceof st&&n.geometry instanceof Be&&n.renderOrder===0){const s=n.material;if(Array.isArray(s))return;const r=t.get(s)||[];r.push(n),t.set(s,r)}});let e=0;for(const[n,s]of t){if(s.length<2)continue;const r=new Map;for(const o of s){const a=o.geometry,l=Object.entries(a.attributes).map(([u,h])=>`${u}:${h.itemSize}:${h.normalized}`).sort().join("|")+":"+!!a.index,c=r.get(l)||[];c.push(o),r.set(l,c)}for(const o of r.values()){if(o.length<2)continue;const a=o.map(h=>{const d=h.geometry.clone();return d.applyMatrix4(h.matrixWorld),d}),l=xc(a,!1);if(a.forEach(h=>h.dispose()),!l)continue;l.computeBoundingBox();const c=l.boundingBox,u=new st(l,n);u.castShadow=n instanceof de&&c.max.y-c.min.y>.28,u.receiveShadow=!0,u.name=`batched-${e++}`;for(const h of o)h.parent?.remove(h);i.add(u)}}return e}function Rv(i,t=!1){kl=42811,i.background=new Qt(5594466),i.fog=new cc(6776163,.0125),i.environment=t?null:Y_(),i.environmentIntensity=.8,i.add(new Q0(11847376,2896696,1.26)),i.add(new np(11384245,.23));const e=new vh(16768707,2.36);e.position.set(65,38,30),e.castShadow=!t,t||(e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-75,e.shadow.camera.right=75,e.shadow.camera.top=75,e.shadow.camera.bottom=-75,e.shadow.camera.near=1,e.shadow.camera.far=170,e.shadow.bias=-22e-5,e.shadow.normalBias=.05),i.add(e);const n=new vh(11716044,.67);n.position.set(-16,26,30),i.add(n);const s=new st(new Pi(195,48,26),new Cn({side:on,depthWrite:!1,fog:!1,toneMapped:!1,vertexShader:"varying vec3 vDir; void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 void main(){vec3 d=normalize(vDir);float h=clamp(d.y,-.28,1.);
 vec3 low=vec3(.65,.58,.52), high=vec3(.31,.35,.39);
 vec3 c=mix(low,high,smoothstep(-.06,.78,h));
 float nc=noise(vec2(d.x*12.+d.z*3.1,d.y*13.)+vec2(1.2,0.));
 nc+=.38*noise(vec2(d.x*26.+d.z*8.5,d.y*29.));
 float clouds=smoothstep(.48,.82,nc)*smoothstep(-.1,.18,h);
 c=mix(c,c*.66,clouds*.72);
 float sun=pow(max(0.,dot(d,normalize(vec3(1.,.22,.33)))),34.);
 float halo=pow(max(0.,dot(d,normalize(vec3(1.,.19,.30)))),5.);
 c+=vec3(.43,.32,.25)*halo*.68+vec3(.82,.71,.59)*sun*.90;
 gl_FragColor=vec4(c,1.);
 }`}));s.frustumCulled=!1,s.renderOrder=-10,i.add(s);const r=new st(new Pi(2.7,22,12),new re({color:16766628,transparent:!0,opacity:.18,fog:!1}));r.position.set(84,24,34),i.add(r);const o=Ht(12896457,.62,.07,{map:zn("ground","#242a2e",512)});o.map.repeat.set(23,26),o.bumpMap=o.map,o.bumpScale=.023;const a=new st(new Pe(250,250),o);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const l=q_(t);l&&i.add(l);const c=[],u=[],h=wv(i);for(const z of[-4,16])for(const j of[0,1]){const bt=-36+j*6.5,G=(z===-4?1:4)+j;mo(i,c,bt,z,Math.PI/2,0,G%6),mo(i,[],bt,z,Math.PI/2,1,(G+2)%6),j===0&&mo(i,[],bt,z,Math.PI/2,2,(G+4)%6)}for(const[z,j,bt,G,tt]of G_){const mt=Math.abs(Math.round(z*1.7+bt*.77+j*2))%6;mo(i,j<.1?c:[],z,bt,Math.PI/2+G,Math.round(j/2.59),mt,tt,j)}nv(i,10.6,1.6,1.03),Zh(i,46,-42,.85),Zh(i,54,37,.65);const d=new qt;i.add(d);const f=Ht(5792103,.86,.16,{map:zn("ground","#636970")}),g=Ht(11118755,.78,.08,{map:zn("ground","#797771",512)});g.map.repeat.set(4,3),g.bumpMap=g.map,g.bumpScale=.018;const _=Ht(3951955,.68,.38,{map:zn("metal","#43535a")}),m=Ht(9149082,.6,.64),p=Ht(2372152,.81,.31);rt(d,[28,.22,17],[-2,.01,-19.5],g);const b=new st(new Pe(27.7,16.7),vv());b.rotation.x=-Math.PI/2,b.position.set(-2,.144,-19.5),b.renderOrder=2,d.add(b);const M=7.1;for(const z of[-16,12])rt(d,[.3,M,17],[z,M/2,-19.5],f),c.push({minX:z-.15,maxX:z+.15,minZ:-28,maxZ:-11,height:M});rt(d,[28,M,.28],[-2,M/2,-28],f),c.push({minX:-16,maxX:12,minZ:-28.14,maxZ:-27.86,height:M});for(const[z,j]of[[-16,-4.7],[1,12]]){const bt=(z+j)/2;rt(d,[j-z,M,.28],[bt,M/2,-11],f),c.push({minX:z,maxX:j,minZ:-11.14,maxZ:-10.86,height:M})}rt(d,[5.7,1.4,.31],[-1.85,6.45,-11],p);for(const z of[-27.8,-22.6,-17.4,-12]){for(const j of[-15,11])It(d,K(j,0,z),K(j,8.5,z),.13,m);for(const j of[-1,1])It(d,K(-2,9.7,z),K(-2+j*14,7.1,z),.16,m)}const v=new $s;v.moveTo(-14,0),v.lineTo(0,2.61),v.lineTo(14,0),v.closePath();const A=new cs(v,{depth:.24,bevelEnabled:!1,steps:1});for(const z of[-28.18,-10.94]){const j=new st(A,f);j.position.set(-2,7.1,z),j.castShadow=!0,j.receiveShadow=!0,d.add(j);for(let bt=-15.8;bt<11.9;bt+=.29){const G=2.6*(1-Math.abs(bt+2)/14);G>.08&&rt(d,[.032,G,.034],[bt,7.1+G/2,z+.25],p)}}for(const z of[-1,1]){const j=new st(new Gn(14.25,.2,17.5),_);j.position.set(-2+z*7,8.42,-19.5),j.rotation.z=-z*.184,j.castShadow=!0,d.add(j)}for(let z=-14;z<=10;z+=2.6)rt(d,[.08,.1,17],[z,7.5+2*(1-Math.abs(z+2)/14),-19.5],m);for(const[z,j]of[[-12,-25],[7,-25],[-11,-16],[7,-17],[-11,-22],[7,-22]]){rt(d,[2.1,.24,1.1],[z,.12,j],ld),rt(d,[1.9,1.1,1],[z,.82,j],$n);for(const bt of[-1,1])rt(d,[.07,1.03,1.06],[z+bt*.83,.83,j],Ce);c.push({minX:z-1.05,maxX:z+1.05,minZ:j-.56,maxZ:j+.56,height:1.6})}const C=new qt;C.position.set(-2,6.6,-20),d.add(C);const P=new st(new we(1.2,1.2,.3,18),m);P.rotation.x=Math.PI/2,C.add(P);const I=new qt;C.add(I);for(let z=0;z<4;z++)rt(I,[.35,.04,1],[Math.cos(z*Math.PI/2)*.46,0,Math.sin(z*Math.PI/2)*.46],p,[0,z*Math.PI/2,0]);const w=new re({color:13098456}),y=new re({color:16762763});for(const z of[-25,-19,-14])for(const j of[-9,5]){const bt=z===-19?y:w,G=new st(new na(.68,.36,18,1,!0),m);G.rotation.x=Math.PI,G.position.set(j,6.62,z),d.add(G);const tt=new st(new Pi(.22,12,8),bt);tt.position.set(j,6.39,z),d.add(tt),It(d,K(j,6.78,z),K(j,7.64,z),.027,p);for(const Dt of[-1,1])It(d,K(j+Dt*1.4,6.98,z),K(j+Dt*1.4,7.7,z),.015,p);const mt=new Ui(z===-19?16764059:12772075,t?11:24,16,1.5);mt.position.set(j,6.1,z),d.add(mt)}const R=new Ui(16757866,20,12,1.5);R.position.set(-2,2.7,-19.1),d.add(R);for(const z of[-12,-7,3,8])rt(d,[2.7,.48,.045],[z,5.4,-10.81],new re({color:7769233,transparent:!0,opacity:.8})),rt(d,[2.7,.09,.1],[z,5.78,-10.73],m),rt(d,[.08,.7,.1],[z+1.1,5.42,-10.73],m);Qh(d,-9,-25.3,3),Qh(d,6.8,-25.3,3),xv(d);const D=Ht(7306107,.81,.35,{map:zn("metal","#8c9490",512)});for(const[z,j,bt]of[[-2,-27.8,27.8],[-2,-10.81,11.25]]){const G=new st(No(bt,6.98,.06,.23),D);G.position.set(z,.12,j),j>-20&&(G.rotation.y=Math.PI),d.add(G)}for(const[z,j]of[[-15.8,1],[11.8,-1]]){const bt=new st(No(16.2,6.95,.055,.23),D);bt.position.set(z,.12,-19.5),bt.rotation.y=j*Math.PI/2,d.add(bt)}for(let z=-15;z<12;z+=.36){const j=7.26+2.35*(1-Math.abs(z+2)/14);rt(d,[.038,.052,16.8],[z,j,-19.5],fr)}for(let z=0;z<16;z++){const j=-13+lt()*22,bt=-25.8+lt()*12;tu(d,j,bt,.3+lt()*1.15,.14)}for(const z of[-27.6,-18.9,-13.2])for(const j of[-13,9]){const bt=rt(d,[.09,.9,2.1],[j,4.2,z],p);bt.rotation.y=.2;for(let G=0;G<5;G++)rt(d,[.1,.045,1.9],[j+.1,3.89+G*.14,z],m)}const O=new qt;O.position.set(42,0,-33),i.add(O),rt(O,[7,21,7],[0,10.5,0],Ht(2568761,.78,.35)),rt(O,[9,4,9],[0,21.3,0],Ht(4085084,.53,.3));for(let z of[-1,1])rt(O,[9,.13,.18],[0,22.6,z*4.53],new re({color:12242130}));const V=new qt;V.position.set(59,0,-30),i.add(V),rt(V,[30,10,25],[0,5,0],Ht(2568760,.82,.22));for(let z=2;z<10;z+=2.6){rt(V,[30,.1,.13],[0,z,12.6],$n);for(let j=-12;j<13;j+=6)rt(V,[3.8,.85,.12],[j,z+.7,12.65],new re({color:12372409,transparent:!0,opacity:.36}))}rt(V,[30,1.3,25],[0,10.5,0],qe);const H={barrel:[.48,.48,1.2],ibc_tote:[.67,.64,1.5],tire_stack:[.55,.55,1.13],crate_stack:[1.38,.9,2.2],forklift:[1.08,1.85,2.5],generator:[1.07,.65,1.43]},k=[];for(const[z,j,bt,G,tt]of W_){if(z==="light_mast"||z==="floodlight_stand"){k.push(fv(i,j,G,z==="floodlight_stand"));continue}const mt=new qt;mt.position.set(j,bt,G),mt.rotation.y=tt,i.add(mt);const Dt=H[z];if(Dt&&bt<.35){const[Rt,$t,fe]=Dt,L=Math.abs(Math.cos(tt))*Rt+Math.abs(Math.sin(tt))*$t,ot=Math.abs(Math.sin(tt))*Rt+Math.abs(Math.cos(tt))*$t;c.push({minX:j-L,maxX:j+L,minZ:G-ot,maxZ:G+ot,height:fe})}if(z==="jersey_barrier")sv(mt,0,0);else if(z==="traffic_cone")Sv(mt,0,0);else if(z==="barrel")Ev(mt,0,0);else if(z==="pallet")Kh(mt,0,0);else if(z==="pallet_stack")for(let Rt=0;Rt<4;Rt++){const $t=new qt;$t.position.y=Rt*.19,mt.add($t),Kh($t,0,0,Rt%2?.035:-.025)}else if(z==="cable_reel")ov(mt,0,0);else if(z==="ibc_tote")hv(mt);else if(z==="tire_stack")cv(mt);else if(z==="forklift")uv(mt);else if(z==="generator")dv(mt);else if(z==="sign_post")pv(mt,0,0,"LANE "+(j<-20?"3":j>10?"5":"4"));else if(z==="crate_wood")Fo(mt,0,0,0,1.1,1,1.2);else if(z==="crate_stack")for(const[Rt,$t,fe]of[[-.6,0,-.4],[.55,0,-.32],[-.28,1.04,.08]])Fo(mt,Rt,$t,fe,1.1,1,.86)}const Z=Ht(9673105,.89,.04),W=Ht(10521439,.87,.06);for(let z=-35;z<28;z+=7){const j=rt(i,[1.8,.012,.065],[z,.035,6],Z);j.renderOrder=2}for(const z of[-.85,12.8]){const j=rt(i,[74,.011,.09],[-7,.036,z],W);j.renderOrder=2}for(let z=-32;z<28;z+=10)for(const j of[-.5,12.45]){rt(i,[1.5,.015,.48],[z,.024,j],qe);for(let bt=0;bt<6;bt++)rt(i,[.06,.018,.42],[z-.6+bt*.23,.04,j],Ce)}const ht=j_();for(let z=-2;z<11;z+=1.24){const j=new st(new Pe(2.5,1.05),ht);j.rotation.x=-Math.PI/2,j.position.set(-31,.045,z),j.renderOrder=2,i.add(j)}for(let z=0;z<73;z++){const j=-36+lt()*64,bt=-26+lt()*54;lt()<.8&&tu(i,j,bt,.42+lt()*2.3)}bv(i);const Mt=new qt;Mt.position.set(75,-2.6,-13),i.add(Mt),rt(Mt,[32,7,85],[0,0,0],Ht(1318440,.35,.48)),rt(Mt,[25,7,15],[0,7,-21],Ht(5399402,.67,.4));for(let z=-7;z<39;z+=8)for(const j of[-8,0,8])rt(Mt,[6,2.9,6.5],[j,5,z],yc(ud));Av(i);const Ct=Tv(i,t?950:2700),Gt=k.map((z,j)=>({p:z,phase:j*1.38}));return{scene:i,obstacles:c,hitSurfaces:u,rain:Ct.rain,lamps:k,tick:(z,j,bt,G)=>{Ct.update(z,bt,G),cd.time.value=j,h(j),l&&(l.material.uniforms.time.value=j);for(const{p:tt,phase:mt}of Gt)tt.intensity=8.5+Math.sin(j*1.9+mt)*.7}}}function ss(i,t,e,n=.42){return t<-43||t>30.5||e>32||e<-33?!0:i.some(s=>s.height>1&&t+n>s.minX&&t-n<s.maxX&&e+n>s.minZ&&e-n<s.maxZ)}const ar=new S;function wn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ar.copy(t),ar[n]=0,ar.normalize();const c=.5*o/(o+a),u=1-ar.angleTo(i)/l;return Math.sign(ar[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Ur extends Gn{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new S,c=new S,u=new S(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new S,m=.5/o;for(let p=0,b=0;p<h.length;p+=3,b+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[b+0]=wn(_,c,"z","y",r,n),f[b+1]=1-wn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[b+0]=1-wn(_,c,"z","y",r,n),f[b+1]=1-wn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[b+0]=1-wn(_,c,"x","z",r,t),f[b+1]=wn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[b+0]=1-wn(_,c,"x","z",r,t),f[b+1]=1-wn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[b+0]=1-wn(_,c,"x","y",r,t),f[b+1]=1-wn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[b+0]=wn(_,c,"x","y",r,t),f[b+1]=1-wn(_,c,"y","x",r,e);break}}static fromJSON(t){return new Ur(t.width,t.height,t.depth,t.segments,t.radius)}}const ci=new de({color:3620672,metalness:.77,roughness:.36}),Gl=new de({color:2699319,metalness:.72,roughness:.49}),Ze=new de({color:1778729,metalness:.65,roughness:.42}),Ei=new de({color:8159867,metalness:.87,roughness:.29}),On=new de({color:5133140,metalness:.86,roughness:.38}),Wl=new de({color:2107180,metalness:.14,roughness:.77}),Ps=new de({color:2830905,metalness:.01,roughness:1}),Xl=new de({color:2108212,metalness:.02,roughness:.98});new de({color:10126434,metalness:.65,roughness:.38});new Ku({color:3501437,metalness:.25,roughness:.1,transparent:!0,opacity:.58,clearcoat:1});const Cv=new re({color:15365459});function Pv(i=42){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#e7e5df",e.fillRect(0,0,512,512);let n=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let r=0;r<16e3;r++){const o=n()*512,a=n()*512,l=n();e.fillStyle=l<.6?`rgba(10,13,16,${n()*.09})`:`rgba(255,252,235,${n()*.05})`,e.fillRect(o,a,.15+n()*1.3,.2+n()*6)}for(let r=0;r<220;r++){const o=n()*512,a=n()*512;e.strokeStyle=n()<.5?`rgba(12,18,24,${.025+n()*.12})`:`rgba(255,252,243,${.04+n()*.2})`,e.lineWidth=.25+n()*.7,e.beginPath(),e.moveTo(o,a),e.lineTo(o+1+n()*42,a+(n()-.5)*2),e.stroke()}for(let r=0;r<38;r++){const o=n()*512,a=n()*512,l=5+n()*40,c=e.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(20,22,20,${n()*.14})`),c.addColorStop(1,"rgba(20,22,20,0)"),e.fillStyle=c,e.fillRect(o-l,a-l,l*2,l*2)}const s=new $e(t);return s.colorSpace=ye,s.wrapS=s.wrapT=Jn,s.repeat.set(2,2),s.anisotropy=8,s}function Lv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#a1a9ae",t.fillRect(0,0,256,256);let e=2805;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);for(let r=0;r<256;r+=3)for(let o=0;o<256;o+=3){const a=Math.floor(n()*28);t.fillStyle=`rgba(${30+a},${35+a},${40+a},.16)`,t.fillRect(o+(Math.floor(r/3)%2?1:0),r,2.2,1)}for(let r=0;r<900;r++){const o=n()*256,a=n()*256;t.fillStyle=`rgba(15,19,24,${n()*.12})`,t.fillRect(o,a,1,4+n()*7)}const s=new $e(i);return s.colorSpace=ye,s.wrapS=s.wrapT=Jn,s.repeat.set(4,3),s.anisotropy=8,s}const eu=Lv();for(const i of[Ps,Xl])i.map=eu,i.bumpMap=eu,i.bumpScale=.012;const nu=Pv();for(const i of[ci,Gl,Ze,Ei,On])i.map=nu,i.bumpMap=nu,i.bumpScale=.006,i.needsUpdate=!0;const Iv=new Gn(1,1,1),Te=new Ur(1,1,1,2,.12);function ie(i,t,e,n,s=Iv,r){const o=new st(s,n);return o.position.set(...t),o.scale.set(...e),r&&o.rotation.set(...r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function lr(i,t,e,n,s,r=14){const o=new st(new we(e,e,n,r),s);return o.rotation.x=Math.PI/2,o.position.set(...t),o.castShadow=!0,i.add(o),o}function Dv(){const i=document.createElement("canvas");i.width=512,i.height=128;const t=i.getContext("2d");t.fillStyle="#30383a",t.fillRect(0,0,i.width,i.height),t.fillStyle="#d3d5c9",t.font="700 43px monospace",t.fillText("PAC-9",13,57),t.fillStyle="#a6a89d",t.font="24px monospace",t.fillText("LONGSHORE  //  B4  /  05:42",14,94);const e=new $e(i);return e.colorSpace=ye,new re({map:e,transparent:!0,opacity:.83,depthWrite:!1})}function iu(i,t){const e=new $s;e.moveTo(.12,-.13),e.lineTo(1.46,-.13),e.lineTo(1.52,-.07),e.lineTo(1.52,.075),e.lineTo(1.43,.13),e.lineTo(.12,.13),e.closePath();for(let r=0;r<7;r++){const o=.3+r*.171;for(const a of[-.055,.056]){const l=new Uo;l.absellipse(o,a,.049,.027,0,Math.PI*2,!0,0),e.holes.push(l)}}const n=new cs(e,{depth:.018,bevelEnabled:!0,bevelThickness:.009,bevelSize:.006,bevelSegments:1,steps:1,curveSegments:8});n.rotateY(Math.PI/2);const s=new st(n,ci);s.position.set(t*.136,-.013,0),s.castShadow=!0,i.add(s);for(let r=0;r<3;r++)ie(i,[t*.16,-.115+r*.116,-.88],[.026,.017,1.36],On)}function Uv(i){const t=new $s;t.moveTo(-.16,-.12),t.lineTo(.42,-.12),t.lineTo(.54,-.27),t.lineTo(.8,-.27),t.lineTo(.91,-.17),t.lineTo(.91,.03),t.lineTo(.77,.17),t.lineTo(-.16,.14),t.closePath();const e=new Uo;e.absellipse(.55,-.015,.24,.083,0,Math.PI*2,!0),t.holes.push(e);const n=new st(new cs(t,{depth:.22,bevelEnabled:!0,bevelSegments:2,bevelSize:.016,bevelThickness:.016,curveSegments:12}),Wl);n.rotation.y=Math.PI/2,n.position.set(-.11,-.125,.15),i.add(n),ie(i,[0,-.12,.93],[.31,.38,.11],Wl,Te),ie(i,[0,-.12,.99],[.33,.42,.058],Ze,Te);for(let s=0;s<6;s++)ie(i,[.171,-.1+s*.049,.95],[.012,.018,.11],On)}function Nv(i){ie(i,[0,-.34,.36],[.15,.4,.2],Wl,Te,[.24,0,0]);for(let l=0;l<4;l++)ie(i,[.1,-.26-l*.075,.42],[.026,.027,.19],Ze);const t=new st(new hn(.12,.017,6,18,Math.PI*1.6),On);t.rotation.y=Math.PI/2,t.position.set(.07,-.25,.22),i.add(t);const e=new qt;e.position.set(-.29,-.17,-.84),i.add(e);const n=new st(new we(.12,.17,.55,16),Xl);n.rotation.set(.59,0,-.28),n.position.set(-.18,-.27,.2),e.add(n);const s=ie(e,[-.125,-.195,.055],[.34,.19,.29],Ps,Te,[0,0,-.23]);s.rotation.y=-.1,ie(e,[-.022,.006,-.04],[.27,.15,.28],Ps,Te,[0,0,-.18]);for(let l=0;l<4;l++){const c=ie(e,[-.17+l*.078,.075,-.175],[.069,.082,.23],Ps,Te,[-.27,0,0]);c.rotation.y=.06+l*.05,ie(e,[-.17+l*.078,.105,-.155],[.063,.017,.11],On)}const r=ie(e,[.134,-.058,-.018],[.105,.12,.18],Ps,Te,[0,.2,-.42]);r.rotation.y=.42;const o=new qt;o.position.set(.16,-.44,.73),i.add(o);const a=new st(new we(.12,.18,.55,14),Xl);a.rotation.set(.47,.08,.11),a.position.set(.14,-.19,.12),o.add(a);for(let l=0;l<4;l++)ie(o,[.13,-.03-l*.13,.01+l*.065],[.28,.023,.27],Ps,Te,[.47,.08,.1])}class Fv{root=new qt;muzzle=new qt;flash=new st(new Pe(.19,.42),new re({color:16769181,transparent:!0,opacity:0,depthWrite:!1,side:Oe,blending:es}));light=new Ui(16757852,0,6,2);kick=0;reloadAnim=0;aim=0;time=0;constructor(t){t.add(this.root);const e=this.root;ie(e,[0,-.11,.19],[.34,.24,.75],Gl,Te),ie(e,[0,.025,.075],[.37,.2,.72],ci,Te),ie(e,[0,.112,.035],[.3,.07,.66],Ze,Te),ie(e,[0,-.015,-.17],[.33,.185,.48],On,Te),ie(e,[0,.032,.49],[.39,.12,.15],ci,Te),lr(e,[0,-.014,-1.04],.088,1.4,Ze),iu(e,-1),iu(e,1),ie(e,[0,-.133,-.84],[.25,.029,1.33],Ze),ie(e,[0,.139,-.83],[.27,.026,1.41],Ze);for(let h=0;h<18;h++){const d=-1.46+h*.103;ie(e,[0,.169,d],[.23,.025,.041],h%4===0?Ei:ci,Te)}for(let h=0;h<8;h++)ie(e,[0,-.145,-1.38+h*.16],[.22,.023,.04],On);for(const h of[-1,1])for(let d=0;d<5;d++)ie(e,[h*.147,.002,-.93+d*.2],[.018,.05,.086],On);lr(e,[0,-.014,-1.87],.064,.73,Ei),lr(e,[0,-.014,-2.04],.084,.27,Ze);for(let h=0;h<4;h++){const d=lr(e,[0,-.014,-2.06+h*.065],.084,.015,On);d.material=Ei}lr(e,[0,-.014,-2.2],.08,.18,ci);for(const h of[-1,1])for(let d=0;d<2;d++)ie(e,[h*.081,0,-2.24+d*.071],[.016,.036,.046],Ze);for(const h of[-1,1]){for(const d of[-.13,.2,.46]){const f=new st(new we(.022,.022,.012,12),Ei);f.rotation.z=Math.PI/2,f.position.set(h*.185,-.085,d),e.add(f)}ie(e,[h*.19,-.007,.11],[.019,.09,.19],Ze),ie(e,[h*.2,-.02,.3],[.01,.035,.085],Ei)}const n=ie(e,[-.205,.045,-.08],[.02,.08,.24],Ze,Te);n.rotation.z=-.1;const s=new st(new Pe(.26,.066),Dv());s.rotation.y=-Math.PI/2,s.position.set(-.201,-.055,.18),e.add(s),ie(e,[0,-.37,.16],[.22,.38,.25],Gl,Te,[.2,0,0]),ie(e,[0,-.57,.08],[.23,.09,.26],Ze,Te,[.2,0,0]);for(let h=0;h<9;h++)ie(e,[.113,-.26-h*.037,.13-h*.009],[.014,.019,.23],On);Uv(e);const r=new qt;r.position.set(0,.155,-.38),r.scale.setScalar(.83),e.add(r),ie(r,[0,.024,0],[.22,.075,.34],Ze,Te);for(const h of[-1,1]){ie(r,[h*.156,.242,-.045],[.057,.282,.205],On,Te),ie(r,[h*.156,.243,.088],[.048,.23,.038],ci,Te);for(const f of[-.09,.08])ie(r,[h*.147,.14,f],[.044,.052,.047],Ei,Te);const d=ie(r,[h*.156,.385,-.043],[.056,.045,.19],Ze,Te);d.rotation.z=h*.035}ie(r,[0,.399,-.044],[.355,.063,.22],ci,Te),ie(r,[0,.11,-.045],[.35,.072,.22],Ze,Te),ie(r,[0,.445,-.045],[.303,.017,.16],Ze,Te);const o=new re({color:3232871,transparent:!0,opacity:.31,depthWrite:!1,side:Oe}),a=new st(new Pe(.245,.225),o);a.position.set(0,.26,.052),r.add(a);const l=new st(new Pe(.243,.223),new re({color:5801114,transparent:!0,opacity:.08,depthWrite:!1,side:Oe}));l.position.set(0,.26,-.112),r.add(l);const c=new re({color:16742230,transparent:!0,opacity:.68,depthWrite:!1,side:Oe,blending:es}),u=new st(new hn(.042,.0038,6,32),c);u.position.set(0,.256,.059),r.add(u),ie(r,[0,.256,.065],[.008,.008,.004],Cv);for(const h of[-1,1]){ie(r,[h*.205,.28,-.01],[.046,.05,.11],ci,Te);const d=new st(new we(.045,.045,.024,14),Ze);d.rotation.z=Math.PI/2,d.position.set(h*.228,.28,.003),r.add(d)}for(const h of[-.21,.11])ie(r,[0,.05,h],[.28,.038,.083],Ei,Te);Nv(e),this.muzzle.position.set(0,-.013,-2.3),e.add(this.muzzle),this.flash.rotation.z=.3,this.muzzle.add(this.flash),this.muzzle.add(this.light),this.root.scale.setScalar(.89),this.root.position.set(.68,-.645,-.92),this.root.rotation.y=.16}shoot(){this.kick=1,this.flash.material.opacity=1,this.flash.rotation.z=Math.random()*6,this.light.intensity=17}reload(){this.reloadAnim=1}update(t,e,n,s,r){this.time+=t,this.kick=Math.max(0,this.kick-t*5.2),this.aim=me.damp(this.aim,r?1:0,11,t),this.reloadAnim=Math.max(0,this.reloadAnim-t/1.45);const o=Math.sin(this.time*(s?14:9))*Math.min(.016,n*.012);this.root.position.set(.68-this.aim*.56+Math.sin(e*2)*.003,-.645+this.aim*.29+o-this.kick*.073,-.91-this.aim*.16+this.kick*.13),this.root.rotation.set(-this.kick*.16+Math.sin(e*1.3)*.004+Math.sin(this.reloadAnim*Math.PI)*.31,.16-this.aim*.16,Math.sin(e*6)*Math.min(n*.011,.018)+Math.sin(this.reloadAnim*Math.PI)*-.3),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*14),this.light.intensity=Math.max(0,this.light.intensity-t*210)}}const ge={hp:140,runSpeed:4.5,patrolSpeed:1.5,stalkSpeed:2,accel:7,turnRate:2.5,rangeMin:8,rangeMax:18,fireRange:42,telegraph:.5,burst:4,burstGap:.11,shotDamage:5,cooldownMin:1.8,cooldownMax:3,lungeRange:3,lungeWind:.28,lungeSpeed:9.5,lungeDuration:.36,lungeDamage:15,lungeHitRange:1.35,lungeCooldown:3.5,recover:.55};class Ov{phase="move";phaseTime=0;cooldown=.8;lungeCooldown=.3;shotsRemaining=0;shotGap=0;moveTime=0;didMelee=!1;bursts=0;random;constructor(t=Math.random){this.random=t,this.cooldown=.6+t()}enter(t,e=0){this.phase=t,this.phaseTime=e}reposition(t){this.enter("move"),this.moveTime=0,this.bursts=0,t.reposition=!0}update(t,e){const n={telegraph:!1,fire:!1,melee:!1,beganLunge:!1,reposition:!1};if(this.cooldown-=t,this.lungeCooldown-=t,!e.alerted)return this.enter("move"),this.moveTime=0,n;const s=e.distance,r=e.lineOfSight;switch((this.phase==="move"||this.phase==="aim"||this.phase==="cool")&&r&&s<ge.lungeRange&&this.lungeCooldown<=0&&(this.enter("wind",ge.lungeWind),n.telegraph=!0),this.phase){case"move":this.moveTime+=t,e.playerMovedFromPlan?(n.reposition=!0,this.moveTime=0):(e.reachedFiringPosition||this.moveTime>7||this.moveTime>1.4&&r&&s>ge.rangeMin-1&&s<ge.rangeMax+2&&this.random()<t*.7)&&this.enter("aim");break;case"aim":case"cool":if(this.phaseTime+=t,r){if(s<ge.rangeMin-3&&this.phaseTime>.8){this.reposition(n);break}this.cooldown<=0&&e.aligned&&e.canClaimVolley&&(this.enter("tele",ge.telegraph),n.telegraph=!0)}else((e.timeWithoutSight??0)>1.1||this.phaseTime>3)&&this.reposition(n);break;case"tele":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("burst"),this.shotsRemaining=ge.burst,this.shotGap=0);break;case"burst":this.shotGap-=t,this.shotsRemaining>0&&this.shotGap<=0&&(this.shotsRemaining--,this.shotGap+=ge.burstGap,n.fire=!0),this.shotsRemaining<=0&&(this.cooldown=ge.cooldownMin+this.random()*(ge.cooldownMax-ge.cooldownMin),this.bursts++,this.bursts>=1+(this.random()<.4?1:0)?this.reposition(n):this.enter("cool"));break;case"wind":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("lunge",ge.lungeDuration),this.didMelee=!1,n.beganLunge=!0);break;case"lunge":this.phaseTime-=t,!this.didMelee&&s<ge.lungeHitRange&&(this.didMelee=!0,n.melee=!0),this.phaseTime<=0&&(this.enter("recover",ge.recover),this.lungeCooldown=ge.lungeCooldown);break;case"recover":this.phaseTime-=t,this.phaseTime<=0&&this.enter("move");break}return n}}class Bv{yaw=0;yawRate=0;speed=0;reset(t,e=0){this.yaw=t,this.speed=e,this.yawRate=0}beginLunge(t){this.yaw=t,this.yawRate=0,this.speed=ge.lungeSpeed}endLunge(){this.speed*=.3}step(t,e,n,s,r=!1){const o=Math.atan2(Math.sin(e-this.yaw),Math.cos(e-this.yaw)),a=ge.turnRate,l=Math.max(-a,Math.min(a,o*6))*(r?2:1);this.yawRate+=(l-this.yawRate)*(1-Math.exp(-10*t)),this.yaw+=this.yawRate*t;const c=r?ge.lungeSpeed:s<.45||Math.abs(o)>1.1?0:Math.max(0,Math.min(n*(1-Math.abs(o)*.5),.4+s*2.6));return r?this.speed=ge.lungeSpeed:c>this.speed?this.speed=Math.min(c,this.speed+ge.accel*t):this.speed=Math.max(c,this.speed-ge.accel*1.4*t),{yaw:this.yaw,yawRate:this.yawRate,speed:this.speed,targetSpeed:c,error:o}}}const bn=[1.15,1.15,1.15],Xa=[.95,.96,.97],Nn=[1,.34,.08],Cs=[.1,.11,.12],Wi=[.035,.035,.038],su=[1,.7,.07],Si=[1,1,1],Qe=[2.4,2.5,2.6],Fe=[.45,.46,.48],zv=[9,9,9.6],Hv=[5.5,4,1.6],Oo=Math.PI/2,kv={stand:.72,L1:.4,L2:.42,l0:.075,hipX:.165,hipY:-.01,hipZ:.4,legs:["FL","FR","RL","RR"],side:[1,-1,1,-1],fore:[1,1,-1,-1],footR:.046};function Kt(i,t,e,n=.008){return new Ur(i,t,e,3,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4))}function Mc(i,{p:t=[0,0,0],r:e=[0,0,0],s:n=1}={}){const s=typeof n=="number"?[n,n,n]:n,r=new le().compose(new S(t[0],t[1],t[2]),new os().setFromEuler(new Vn(e[0],e[1],e[2])),new S(s[0],s[1],s[2]));return i.applyMatrix4(r),i}function vt(i,t,e,n,s=0,r=0,o=0,a=1){return Mc(i,{p:[t,e,n],r:[s,r,o],s:a})}function yn(i,t,e,n=12){return new we(i,t,e,n)}function Fn(i,t,e,n=12){return Mc(yn(i,t,e,n),{r:[0,0,-Oo]})}function xn(i,t,e,n=12){return Mc(yn(i,t,e,n),{r:[Oo,0,0]})}function go(i,t,e,n=e,s=8){const r=new S(i[0],i[1],i[2]),o=new S(t[0],t[1],t[2]),a=o.clone().sub(r),l=yn(n,e,a.length(),s);return l.applyMatrix4(new le().compose(r.clone().add(o).multiplyScalar(.5),new os().setFromUnitVectors(new S(0,1,0),a.normalize()),new S(1,1,1))),l}function Xi(i,t=.03,e=8,n=!1,s=0){const r=new Tr(i.map(a=>new S(a[0],a[1],a[2])),n,"catmullrom",s),o=r.getLength();return new Gs(r,Math.min(400,Math.max(2,Math.ceil(o/Math.max(.08,t*3)))),t,e,n)}const Ya=(i,t=14,e=10,n=1,s=1,r=1)=>new Pi(i,t,e).scale(n,s,r),ru=(i,t,e)=>vt(Fn(.0075,.0075,.006,6),i,t,e),ou=(i,t,e)=>vt(yn(.0075,.0075,.006,6),i,t,e),Vv=(i,t,e)=>vt(xn(.0075,.0075,.006,6),i,t,e),au=hn;function pd(i){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle=i==="armor"?"#ededed":"#dadada",e.fillRect(0,0,512,512);let n=i==="armor"?1129307:1934211;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);for(let o=0;o<22e3;o++){const a=s()*512,l=s()*512,c=(i==="armor"?.035:.08)*s();e.fillStyle=s()>.5?`rgba(10,16,22,${c})`:`rgba(255,255,255,${c})`,e.fillRect(a,l,.5+s()*2,.5+s()*2)}for(let o=0;o<(i==="armor"?260:430);o++){const a=s()*512,l=s()*512;e.strokeStyle=`rgba(23,26,29,${.035+s()*.12})`,e.lineWidth=.3+s(),e.beginPath(),e.moveTo(a,l),e.lineTo(a+(s()-.5)*25,l+(s()-.5)*2),e.stroke()}const r=new $e(t);return r.colorSpace=ye,r.wrapS=r.wrapT=Jn,r.repeat.set(2,2),r.anisotropy=8,r}const lu=pd("armor"),cu=pd("gunmetal"),Gv=new de({color:11449528,map:lu,bumpMap:lu,bumpScale:.005,roughness:.54,metalness:.36,vertexColors:!0}),Wv=new de({color:2764081,map:cu,bumpMap:cu,bumpScale:.006,roughness:.6,metalness:.77,vertexColors:!0}),Xv=new re({color:16777215,vertexColors:!0}),Yv=new re({color:16777215,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}),qv={shell:Gv,metal:Wv,glow:Xv,lens:Yv};class $v{bones={};lens;footByBone={};feet=[];bone(t,e,n=0,s=0,r=0){const o=new qt;o.name=t,o.position.set(n,s,r),this.bones[t]=o,e&&this.bones[e].add(o)}add(t,e,n,s=[1,1,1],r=!0){const o=n.index?n.toNonIndexed():n;o!==n&&n.dispose(),o.getAttribute("normal")||o.computeVertexNormals();const a=o.getAttribute("normal"),l=o.getAttribute("position"),c=new Float32Array(l.count*3);for(let h=0;h<l.count;h++){const d=r?.74+.26*(a.getY(h)*.5+.5):1;c[h*3]=s[0]*d,c[h*3+1]=s[1]*d,c[h*3+2]=s[2]*d}o.setAttribute("color",new ln(c,3));const u=new st(o,qv[t]);u.castShadow=t!=="glow"&&t!=="lens",u.receiveShadow=!0,u.name=`source-${e}-${t}`,this.bones[e].add(u),t==="lens"&&(this.lens=u),e.startsWith("shin")&&t==="shell"&&(this.footByBone[e]=u)}build(t){return this.feet=["FL","FR","RL","RR"].map(e=>{const n=this.footByBone["shin"+e],s=n.geometry;s.computeBoundingBox();const r=s.boundingBox.getCenter(new S);return s.translate(-r.x,-r.y,-r.z),n.position.copy(r),n.name="HoundFoot"+e,n}),this}}const Zv=$v;function Kv(){let i=kv,t=new Zv;t.bone("root",null,0,0,0),t.bone("body","root",0,i.stand,0),t.bone("neck","body",0,.06,.49),t.bone("head","neck",0,.13,.12),t.bone("turret","body",0,.152,-.03),t.bone("gun","turret",0,.095,.02),t.bone("antenna","body",-.105,.15,-.46),t.bone("beacon","body",.105,.2,-.455);for(let n=0;n<4;n++){let s=i.legs[n],r=i.side[n];t.bone("abd"+s,"body",r*i.hipX,i.hipY,i.fore[n]*i.hipZ),t.bone("thigh"+s,"abd"+s,r*i.l0,0,0),t.bone("shin"+s,"thigh"+s,0,-.4,0)}let e=(n,s,r,o,a=!0)=>t.add(n,s,r,o,a);e("metal","body",vt(Kt(.27,.2,.98,.02),0,-.01,0),Fe),e("shell","body",vt(Kt(.35,.05,.3,.014),0,.125,.33),bn),e("shell","body",vt(Kt(.35,.05,.36,.014),0,.125,-.012),bn),e("shell","body",vt(Kt(.1,.052,.36,.01),0,.126,-.012+0),Xa);for(let n of[-.15,.15])for(let s of[.21,.45,-.17,.145])e("metal","body",ou(n,.152,s),Qe);e("metal","body",vt(Kt(.31,.03,.25,.006),0,.112,-.335),Si);for(let n=0;n<10;n++)e("metal","body",vt(Kt(.007,.062,.225,.002),-.126+n*.028,.155,-.335),Qe);e("metal","body",vt(Kt(.3,.012,.02,.003),0,.186,-.24),Fe),e("metal","body",vt(Kt(.3,.012,.02,.003),0,.186,-.43),Fe);for(let n of[1,-1]){e("shell","body",vt(Kt(.032,.15,.31,.012),n*.15,.022,-.075),bn),e("shell","body",vt(Kt(.032,.15,.135,.012),n*.15,.022,.1625),Xa),e("metal","body",Xi([[n*.168,.06,.125],[n*.182,.06,.135],[n*.182,.06,.19],[n*.168,.06,.2]],.005,5),Qe),e("shell","body",vt(Kt(.034,.016,.135,.004),n*.151,-.035,.1625),su),e("shell","body",vt(Kt(.034,.042,.46,.008),n*.151,-.078,0),Nn),e("shell","body",vt(Kt(.028,.1,.11,.008),n*.146,.01,.305),Cs);for(let s=0;s<4;s++)e("metal","body",vt(Kt(.004,.012,.085,.001),n*.161,-.02+s*.022,.305),Fe);for(let s of[-.035,.08])for(let r of[-.21,.06,.115,.21])e("metal","body",ru(n*.167,s,r),Qe);e("metal","body",Xi([[n*.135,.148,-.19],[n*.135,.205,-.16],[n*.135,.212,0],[n*.135,.205,.43],[n*.135,.148,.465]],.0105,6),Qe);for(let s of[0,.26])e("metal","body",vt(yn(.008,.008,.06,6),n*.135,.178,s),Qe);e("shell","body",Xi([[n*.118,-.105,-.36],[n*.132,-.118,-.2],[n*.13,-.112,.1],[n*.118,-.1,.36]],.009,5),Wi),e("metal","body",vt(new au(.02,.005,5,10),n*.17,.085,-.335,0,Oo,0),Qe)}e("shell","body",vt(Kt(.3,.15,.075,.018),0,-.005,.505),Nn),e("shell","body",vt(Kt(.2,.07,.02,.006),0,.012,.545),Cs);for(let n=0;n<6;n++)e("shell","body",vt(Kt(.05,.034,.014,.003),-.125+n*.05,-.098,.538,0,0,0),n%2?Cs:su);for(let n of[-.115,.115])e("metal","body",vt(xn(.021,.021,.014,10),n,.012,.547),Fe),e("glow","body",vt(xn(.015,.015,.004,10),n,.012,.556),[6.5,4.6,2.2],!1);e("metal","body",vt(Kt(.24,.095,.56,.02),0,-.145,0),Si),e("shell","body",vt(Kt(.246,.03,.09,.006),0,-.14,.12),Nn),e("shell","body",vt(Kt(.246,.03,.09,.006),0,-.14,-.12),Nn),e("shell","body",vt(Kt(.29,.15,.05,.014),0,0,-.495),bn),e("shell","body",vt(Kt(.17,.05,.012,.004),0,.03,-.523),Cs),e("glow","body",vt(Kt(.13,.012,.004,.001),0,.03,-.531),[5,.3,.1],!1),e("metal","body",vt(xn(.022,.022,.02,10),.085,-.035,-.525),Qe),e("metal","body",vt(new au(.024,.006,5,10),-.07,-.05,-.528,Oo,0,0),Qe);for(let n of[-.125,.125])for(let s of[-.055,.055])e("metal","body",Vv(n,s,-.523),Qe);e("shell","body",Xi([[.09,.15,-.2],[.13,.2,-.16],[.12,.2,-.08],[.09,.165,-.05]],.009,5),Wi),e("metal","neck",go([0,-.02,-.02],[0,.11,.1],.045,.036,10),Fe);for(let n=0;n<3;n++){let s=.2+n*.28;e("shell","neck",go([0,-.02+.13*s-.008,-.02+.12*s-.0075],[0,-.02+.13*s+.008,-.02+.12*s+.0075],.052,.052,10),Wi)}e("shell","neck",vt(Kt(.13,.05,.1,.012),0,-.01,-.03),bn),e("shell","neck",Xi([[.05,-.02,-.04],[.07,.05,.02],[.06,.11,.07],[.045,.12,.1]],.007,5),Wi),e("shell","head",vt(Kt(.19,.118,.25,.03),0,0,0),bn),e("shell","head",vt(Kt(.168,.074,.03,.012),0,-.004,.118),Cs),e("lens","head",vt(Kt(.128,.024,.006,.002),0,.006,.1345),[1,1,1],!1);for(let n of[-.056,.056])e("metal","head",vt(xn(.015,.015,.012,10),n,-.022,.132),Fe),e("metal","head",vt(xn(.009,.009,.004,8),n,-.022,.139),[.1,.12,.2]);e("shell","head",vt(Kt(.062,.008,.2,.003),0,.06,-.005),Nn),e("metal","head",vt(Fn(.032,.032,.214,12),0,0,-.055),Fe);for(let n of[1,-1])e("shell","head",vt(Fn(.022,.022,.006,10),n*.108,0,-.055),Nn);e("metal","head",vt(yn(.036,.036,.026,14),0,.072,-.05),Fe),e("metal","head",vt(yn(.037,.037,.006,14),0,.074,-.05),[.2,.3,.5]),e("metal","head",vt(Kt(.12,.03,.13,.008),0,-.068,.02),Si);for(let n of[-.08,.08])for(let s of[-.09,.07])e("metal","head",ou(n,.061,s),Qe);e("metal","turret",vt(yn(.105,.118,.034,18),0,0,0),Fe),e("metal","turret",vt(Kt(.18,.02,.16,.005),0,.026,0),Si);for(let n of[1,-1])e("shell","turret",vt(Kt(.028,.115,.15,.012),n*.078,.085,.005),bn),e("metal","turret",vt(Fn(.022,.022,.008,10),n*.094,.095,.02),Qe);e("shell","gun",vt(Kt(.108,.086,.21,.016),0,0,-.012),bn),e("shell","gun",vt(Kt(.11,.02,.212,.006),0,-.022,-.012),Nn),e("metal","gun",vt(xn(.035,.035,.11,12),0,0,.145),Fe);for(let n=0;n<4;n++)e("metal","gun",vt(xn(.039,.039,.008,12),0,0,.105+n*.026),Si);e("metal","gun",vt(xn(.022,.024,.3,12),0,0,.25),Si),e("metal","gun",vt(xn(.036,.036,.06,10),0,0,.395),Fe),e("metal","gun",vt(Kt(.08,.012,.025,.003),0,0,.395),[.15,.15,.15]),e("metal","gun",vt(Fn(.056,.056,.06,14),.084,-.004,-.045),Fe),e("metal","gun",vt(Fn(.02,.02,.066,8),.084,-.004,-.045),Hv),e("metal","gun",vt(Kt(.036,.036,.095,.008),-.03,.06,0),Fe),e("glow","gun",vt(xn(.011,.011,.003,8),-.03,.06,.049),[1.6,.12,.05],!1),e("shell","gun",Xi([[.05,-.03,-.11],[.06,-.07,-.13],[.04,-.09,-.1]],.008,5),Wi),e("metal","body",vt(yn(.022,.026,.05,10),.105,.175,-.455),Fe),e("glow","beacon",vt(Ya(.02,10,6,1,1.25,1),0,.012,0),[14,5.5,.5],!1),e("metal","antenna",vt(yn(.011,.014,.05,8),0,.025,0),Fe),e("metal","antenna",vt(yn(.0028,.005,.62,5),0,.36,0),Fe),e("shell","antenna",vt(Ya(.009,6,4),0,.67,0),Nn);for(let n=0;n<4;n++){let s=i.legs[n],r=i.side[n],o="abd"+s,a="thigh"+s,l="shin"+s;e("metal",o,vt(xn(.06,.06,.17,14),-r*.02,0,0),Fe),e("shell",o,vt(Kt(.11,.05,.155,.014),r*0,.058,0),bn),e("metal",o,vt(xn(.03,.03,.18,8),-r*.02,0,0),Qe),e("shell",a,vt(Fn(.078,.078,.07,18),0,0,0),bn),e("shell",a,vt(Fn(.081,.081,.016,18),r*.012,0,0),Nn),e("metal",a,vt(Fn(.048,.048,.082,12),0,0,0),Fe);for(let c=0;c<5;c++){let u=c*1.2566;e("metal",a,ru(r*.039,Math.cos(u)*.062,Math.sin(u)*.062),Qe)}e("shell",a,vt(Kt(.062,i.L1-.07,.1,.022),0,-.4*.5-.005,.004),bn),e("metal",a,vt(Kt(.044,i.L1-.04,.06,.012),0,-.4*.5,-.035),Fe),e("shell",a,vt(Kt(.065,.045,.103,.01),0,-.145,.004),Nn),e("shell",a,vt(Kt(.064,.012,.102,.004),0,-.26,.004),Cs),e("metal",a,go([0,-.06,-.082],[0,-.4*.62,-.078],.021,.021,10),Qe),e("metal",a,go([0,-.4*.62,-.078],[0,-.4+.025,-.058],.009,.009,6),zv),e("metal",a,vt(Kt(.05,.03,.035,.006),0,-.055,-.07),Si),e("shell",a,Xi([[r*.036,-.02,.05],[r*.044,-.13,.062],[r*.042,-.28,.058],[r*.034,-.4+.03,.035]],.0065,5),Wi),e("metal",a,vt(Fn(.05,.05,.086,14),0,-.4,0),Fe),e("shell",a,vt(Fn(.036,.036,.092,12),0,-.4,0),Xa),e("metal",l,vt(yn(.03,.021,i.L2-.08,10),0,-.33999999999999997/2-.01,0),Fe),e("shell",l,vt(Kt(.052,.21,.04,.014),0,-.14,.02),bn),e("shell",l,vt(Kt(.054,.02,.042,.006),0,-.215,.02),Nn),e("metal",l,vt(Kt(.03,.06,.05,.008),0,-.02,-.03),Si),e("metal",l,vt(yn(.024,.03,.03,10),0,-.42+.085,0),Qe),e("shell",l,vt(Ya(i.footR+.002,12,8,1,.86,1.08),0,-.42+i.footR*.86,.004),Wi)}return t.build(["shell","metal","glow","lens"])}function Jv(){return Kv()}const Eo=new de({color:3492173,roughness:.42,metalness:.78}),qi=new de({color:8160640,roughness:.45,metalness:.72}),wi=new de({color:3423035,roughness:.71,metalness:.38}),jv=new de({color:11053728,roughness:.41,metalness:.69}),hu=new de({color:1778210,roughness:.92,metalness:.14}),Qv=new re({color:16214853}),tx=new re({color:15970401});new de({color:10373431,roughness:.54,metalness:.48});const md=new de({color:11908263,roughness:.54,metalness:.46}),gd=new de({color:13683124,roughness:.62,metalness:.29}),qa=new de({color:12153150,roughness:.59,metalness:.37}),_d=new Ur(1,1,1,2,.075);function ex(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");let e=12122026;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);t.fillStyle="#dedad2",t.fillRect(0,0,256,256);for(let r=0;r<7e3;r++){const o=n()*256,a=n()*256;t.fillStyle=n()>.5?"rgba(5,15,20,.13)":"rgba(255,255,255,.08)",t.fillRect(o,a,.1+n()*2,.1+n()*7)}for(let r=0;r<180;r++){const o=n()*256,a=n()*256;t.strokeStyle="rgba(37,40,41,.16)",t.lineWidth=.25+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+n()*30,a+n()),t.stroke()}const s=new $e(i);return s.colorSpace=ye,s.wrapS=s.wrapT=Jn,s.repeat.set(2,2),s.anisotropy=4,s}function nx(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#f7f6ef",t.fillRect(0,0,512,512);let e=930522;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<18e3;r++){const o=n()*512,a=n()*512;t.fillStyle=n()<.6?`rgba(39,42,39,${n()*.065})`:`rgba(145,120,84,${n()*.035})`,t.fillRect(o,a,.4+n()*2.5,.3+n()*1.8)}for(let r=0;r<350;r++){const o=n()*512,a=n()*512;t.strokeStyle=n()<.85?`rgba(30,36,35,${.04+n()*.18})`:`rgba(122,62,30,${.06+n()*.12})`,t.lineWidth=.35+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+(n()-.5)*75,a+(n()-.5)*5),t.stroke()}for(let r=0;r<100;r++){const o=n()*512,a=n()*512,l=3+n()*37,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(37,46,44,${.04+n()*.16})`),c.addColorStop(1,"rgba(37,46,44,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,2*l,2*l)}const s=new $e(i);return s.colorSpace=ye,s.wrapS=s.wrapT=Jn,s.repeat.set(1.4,1.4),s.anisotropy=8,s}const uu=nx();for(const i of[md,gd])i.map=uu,i.bumpMap=uu,i.bumpScale=.005,i.needsUpdate=!0;function ix(i){const t=document.createElement("canvas");t.width=256,t.height=96;const e=t.getContext("2d");e.fillStyle="rgba(25,31,32,.76)",e.font="700 60px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,45);let n=1119;for(let r=0;r<170;r++){n=Math.imul(n,1664525)+1013904223>>>0;const o=n/4294967296*256;n=Math.imul(n,1664525)+1013904223>>>0;const a=n/4294967296*96;e.clearRect(o,a,1.1+(n>>>14)%4,1.4)}const s=new $e(t);return s.colorSpace=ye,new re({map:s,transparent:!0,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-1})}const du=ex();for(const i of[Eo,qi,wi,jv])i.map=du,i.bumpMap=du,i.bumpScale=.009,i.needsUpdate=!0;const Bo=document.createElement("canvas");Bo.width=Bo.height=128;const Sc=Bo.getContext("2d"),Nr=Sc.createRadialGradient(64,64,3,64,64,63);Nr.addColorStop(0,"rgba(255,235,178,1)");Nr.addColorStop(.14,"rgba(255,142,67,.85)");Nr.addColorStop(.4,"rgba(252,84,31,.3)");Nr.addColorStop(1,"rgba(252,84,31,0)");Sc.fillStyle=Nr;Sc.fillRect(0,0,128,128);const sx=new $e(Bo);new re({color:16771256});let rx=0;const vd=new Pi(1,20,14);function vn(i,t,e,n,s){const r=new st(_d,n);return r.position.set(...t),r.scale.set(...e),s&&r.rotation.set(...s),r.castShadow=!0,i.add(r),r}function ox(i,t,e,n){const s=new st(vd,n);return s.position.set(...t),s.scale.set(...e),s.castShadow=!0,i.add(s),s}function cr(i,t,e,n,s,r=8){const o=e.clone().sub(t),a=new st(new we(n,n,o.length(),r),s);return a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a.castShadow=!0,i.add(a),a}function xd(i,t){for(const n of[...i.children])n.type==="Group"&&xd(n,t);const e=new Map;for(const n of i.children){if(!(n instanceof st)||t.has(n)||Array.isArray(n.material))continue;const s=e.get(n.material)||[];s.push(n),e.set(n.material,s)}for(const[n,s]of e){if(s.length<2)continue;const r=s.map(l=>{l.updateMatrix();const c=l.geometry.clone();return c.applyMatrix4(l.matrix),c}),o=xc(r,!1);for(const l of r)l.dispose();if(!o)continue;const a=new st(o,n);a.castShadow=!0,a.receiveShadow=!0;for(const l of s)i.remove(l),l.geometry.dispose();i.add(a)}}class ax{kind;root=new qt;body=new qt;head=new qt;turret=new qt;gun=new qt;legs=[];knees=[];feet=[];rotors=[];footWorld=[];stepStart=[];stepEnd=[];lastRoot=new S;stepPair=-1;stepT=0;lastPair=1;bodyBounce=.72;bodyBounceVelocity=0;headYaw=0;headPitch=.05;antenna;leanPitch=0;leanRoll=0;recoilPitch=0;recoilPitchVelocity=0;turretPitch=0;hitShift=0;hitShiftVelocity=0;hitRoll=0;hitRollVelocity=0;hound=new Ov;houndDrive=new Bv;houndPush=new S;tacticalGoal=new S;tacticalGoalUntil=0;houndTurretYaw=0;houndGunPitch=0;houndHeadYaw=0;houndHeadPitch=.05;houndWarning=0;warningLens;warningHalo;deathElapsed=0;deathVelocity=0;deathImpact=!1;deathPitch=0;deathRoll=0;deathSink=0;deathOrder=0;wreckFrozen=!1;wreckBatchCount=0;deathPitchVelocity=0;deathRollVelocity=0;deathFootSlides=[];deathSmokeClock=0;health;maxHealth;alive=!0;phase=Math.random()*Math.PI*2;targetable=[];shootTimer=1+Math.random()*2;speed=1.1+Math.random()*.4;lastHitAt=0;hitFlash=0;isTarget=!0;home=new S;route=[];routeTimer=0;lastPlayerPosition=new S;houndLastKnown=new S;houndSeeTime=0;houndNoSeeTime=0;houndSenseTimer=0;houndHasLos=!1;houndModeTime=0;houndSearchScan=0;heading=0;mode="patrol";alerted=!1;originalMaterials=new Map;constructor(t,e,n){this.kind=t,this.health=t==="gull"?72:ge.hp,this.maxHealth=this.health,this.speed=t==="gull"?1.85:ge.patrolSpeed,this.root.position.set(e,0,n),this.home.set(e,0,n),this.root.add(this.body),this.routeTimer=Math.random(),t==="hound"?(this.buildHound(),this.body.position.y=.72,this.houndDrive.reset(this.root.rotation.y)):this.buildGull(),t==="hound"&&xd(this.body,new Set(this.feet)),this.kind==="hound"&&this.head.traverse(s=>{s instanceof st&&(s.userData.enemyPart="head")}),this.body.traverse(s=>{s instanceof st&&(s.userData.enemy=this,this.targetable.push(s),this.originalMaterials.set(s,s.material))}),this.lastRoot.copy(this.root.position)}buildHound(){const t=Jv(),e=this.body;this.root.remove(e),this.root.add(t.bones.root),this.body=t.bones.body,this.head=t.bones.head,this.turret=t.bones.turret,this.gun=t.bones.gun,this.antenna=t.bones.antenna,this.legs=["FL","FR","RL","RR"].map(o=>t.bones["abd"+o]),this.knees=["FL","FR","RL","RR"].map(o=>t.bones["shin"+o]),this.feet=t.feet,t.lens&&(t.lens.material=t.lens.material.clone(),this.warningLens=t.lens);const n=new Po(new hc({map:sx,color:16753758,transparent:!0,blending:es,depthWrite:!1,opacity:0}));n.position.set(0,.045,.47),n.scale.set(.5,.5,1),n.visible=!1,this.gun.add(n),this.warningHalo=n;const s=ix("H-"+String(Math.abs(Math.round(this.root.position.x*11+this.root.position.z*13))%90+3).padStart(2,"0"));for(const o of[-1,1]){const a=new st(new Pe(.2,.085),s);a.rotation.y=o*Math.PI/2,a.position.set(o*.184,.025,-.085),this.body.add(a)}const r=[.37,.37,-.42,-.42];for(let o=0;o<4;o++){const a=o%2===0?1:-1;this.footWorld.push(this.root.position.clone().add(new S(a*.275,0,r[o])))}this.stepStart=this.footWorld.map(o=>o.clone()),this.stepEnd=this.footWorld.map(o=>o.clone())}buildGull(){const t=this.body;t.position.y=2.95,ox(t,[0,0,0],[.31,.2,.48],md),vn(t,[0,.1,-.06],[.39,.14,.51],Eo),vn(t,[0,-.055,.34],[.3,.16,.24],qi),vn(t,[0,-.077,.51],[.26,.1,.11],hu),vn(t,[0,.018,.55],[.28,.06,.055],qa);for(const n of[-1,1]){const s=n;vn(t,[s*.14,-.068,.558],[.08,.045,.027],Qv),vn(t,[s*.24,.11,-.31],[.075,.12,.26],wi,[s*.2,0,s*.14]);for(const[r,o]of[-.39,.36].entries()){const a=new qt;a.position.set(s*.94,.035,o),t.add(a),cr(t,new S(s*.19,.04,o*.2),new S(s*.94,.05,o),.059,wi,12),vn(t,[s*.52,.075,o*.58],[.57,.07,.19],Eo,[0,s*.19,0]);const l=new qt;a.add(l);const c=new st(new _c([new ct(.315,-.12),new ct(.366,-.12),new ct(.39,-.09),new ct(.39,.09),new ct(.367,.13),new ct(.315,.13),new ct(.31,.096),new ct(.31,-.09)],32),gd);c.castShadow=!0,c.receiveShadow=!0,l.add(c);const u=new st(new hn(.365,.019,8,32),qa);u.rotation.x=Math.PI/2,u.position.y=.124,l.add(u);const h=new st(new hn(.308,.011,8,28),wi);h.rotation.x=Math.PI/2,h.position.y=-.092,l.add(h);for(let _=0;_<4;_++){const m=_*Math.PI/2,p=cr(l,new S(.08*Math.cos(m),-.055,.08*Math.sin(m)),new S(.313*Math.cos(m),-.055,.313*Math.sin(m)),.021,qi,8);p.userData.structural=!0}const d=new qt;d.position.y=.016,l.add(d),this.rotors.push(d);const f=new st(new we(.08,.1,.12,16),wi);d.add(f);for(let _=0;_<4;_++){const m=vn(d,[.19,0,0],[.27,.016,.08],qi,[0,_*Math.PI/2+.21,0]);m.position.set(.19*Math.cos(_*Math.PI/2),0,.19*Math.sin(_*Math.PI/2)),m.rotation.y=-_*Math.PI/2-.2}const g=new st(new we(.13,.13,.09,14),hu);g.position.y=-.16,a.add(g);for(let _=0;_<8;_++){const m=_*Math.PI/4;vn(a,[Math.cos(m)*.135,-.16,Math.sin(m)*.135],[.025,.06,.035],wi,[0,m,0])}vn(t,[s*.94,.065,o],[.1,.07,.13],qa)}}for(const n of[-1,1])for(let s=0;s<5;s++)vn(t,[n*.307,.16,-.36+s*.14],[.015,.05,.052],qi);const e=new qt;e.position.set(0,-.18,.19),t.add(e),vn(e,[0,-.06,.12],[.2,.15,.3],wi),cr(e,new S(0,-.11,.12),new S(0,-.12,.72),.039,Eo,12),vn(e,[0,-.12,.71],[.1,.095,.13],qi);for(const n of[-1,1])cr(t,new S(n*.16,-.08,-.12),new S(n*.28,-.36,-.26),.024,wi),cr(t,new S(n*.28,-.36,-.26),new S(n*.25,-.43,-.17),.022,qi)}solveHoundLegs(){const t=this.root,e=this.body,n=t.rotation.y,s=Math.cos(n),r=Math.sin(n);for(let o=0;o<4;o++){const a=o%2===0?1:-1,l=o<2?1:-1,c=this.legs[o],u=this.knees[o],h=this.footWorld[o],d=h.x-t.position.x,f=h.z-t.position.z,g=d*s-f*r,_=d*r+f*s,m=e.rotation.x,p=e.rotation.z,b=h.y+.046*.6-t.position.y-e.position.y,M=b*Math.cos(m)+_*Math.sin(m),v=-b*Math.sin(m)+_*Math.cos(m),A=g-this.hitShift,C=A*Math.cos(p)+M*Math.sin(p)-a*.165,P=-A*Math.sin(p)+M*Math.cos(p)+.01,I=v-l*.4,w=Math.sqrt(Math.max(1e-6,C*C+P*P-.075*.075));let y=Math.atan2(P,C)-Math.atan2(-w,a*.075);y>Math.PI&&(y-=2*Math.PI),y<-Math.PI&&(y+=2*Math.PI);const R=Math.max(Math.abs(.4-(.42-.046*.6))+.03,Math.min((.4+.42-.046*.6)*.995,Math.hypot(w,I))),D=Math.atan2(I,w),O=me.clamp((.4*.4+R*R-(.42-.046*.6)**2)/(2*.4*R),-1,1),V=me.clamp((.4*.4+(.42-.046*.6)**2-R*R)/(2*.4*(.42-.046*.6)),-1,1);c.rotation.z=y;const H=c.children.find(k=>k.type==="Group");H&&(H.rotation.x=Math.acos(O)-D),u.rotation.x=-(Math.PI-Math.acos(V))}}poseHound(t,e,n){const s=this.body,r=this.root,o=r.position.clone().sub(this.lastRoot);o.y=0;const a=o.length(),l=a>3,c=l?0:a/Math.max(n,.008),u=Math.min(c,5),h=me.clamp(.27-u*.042,.075,.27),d=r.rotation.y,f=y=>y%2===0?1:-1,g=y=>y<2?1:-1,_=y=>new S(f(y)*.275,0,g(y)*(y<2?.37:.42)).applyAxisAngle(new S(0,1,0),d);if(l||this.footWorld.length!==4){for(let y=0;y<4;y++)this.footWorld[y].copy(r.position).add(_(y));this.stepPair=-1,this.stepT=0}if(this.stepPair<0){let y=-1,R=0;for(let D=0;D<2;D++){let O=0;for(const V of D===0?[0,3]:[1,2]){const H=r.position.clone().add(_(V));O=Math.max(O,Math.hypot(H.x-this.footWorld[V].x,H.z-this.footWorld[V].z))}D===this.lastPair&&(O*=.8),O>R&&(R=O,y=D)}if(y>=0&&R>(e?.09:.035)){this.stepPair=y,this.stepT=0;for(const D of y===0?[0,3]:[1,2]){this.stepStart[D].copy(this.footWorld[D]);const O=u>.15?o.normalize().multiplyScalar(u*h*1.4):new S;this.stepEnd[D].copy(r.position).add(_(D)).add(O)}}}if(this.stepPair>=0){this.stepT=Math.min(1,this.stepT+n/h);const y=this.stepT*this.stepT*(3-2*this.stepT);for(const R of this.stepPair===0?[0,3]:[1,2])this.footWorld[R].lerpVectors(this.stepStart[R],this.stepEnd[R],y),this.footWorld[R].y=Math.sin(Math.PI*this.stepT)*(.065+Math.min(.09,u*.02));this.stepT>=1&&(this.lastPair=this.stepPair,this.stepPair=-1)}this.lastRoot.copy(r.position);const m=.72-(this.stepPair>=0?.025:0),p=Math.min(.05,n);this.bodyBounceVelocity+=(m-this.bodyBounce)*80*p,this.bodyBounceVelocity*=Math.exp(-12*p),this.bodyBounce+=this.bodyBounceVelocity*p,s.position.y=me.clamp(this.bodyBounce,.67,.76);let b=0,M=0,v=0,A=0;for(let y=0;y<4;y++){const R=this.footWorld[y];y<2?b+=R.y:M+=R.y,y%2===0?A+=R.y:v+=R.y}const C=Math.atan2(A-v,.55)*.33,P=Math.atan2(M-b,.8)*.33;this.leanPitch=me.damp(this.leanPitch,P,8,n),this.recoilPitchVelocity+=(-130*this.recoilPitch-15*this.recoilPitchVelocity)*n,this.recoilPitchVelocity=me.clamp(this.recoilPitchVelocity,-6,6),this.recoilPitch+=this.recoilPitchVelocity*n,s.rotation.x=this.leanPitch+this.recoilPitch,this.leanRoll=me.damp(this.leanRoll,C,8,n),this.hitShiftVelocity+=(-110*this.hitShift-13*this.hitShiftVelocity)*n,this.hitShift+=this.hitShiftVelocity*n,this.hitRollVelocity+=(-130*this.hitRoll-15*this.hitRollVelocity)*n,this.hitRoll+=this.hitRollVelocity*n,s.position.x=this.hitShift,s.rotation.z=this.leanRoll+this.hitRoll,this.solveHoundLegs();let w=(this.alerted?this.houndTurretYaw:0)-this.turret.rotation.y;if(w=Math.atan2(Math.sin(w),Math.cos(w)),this.turret.rotation.y+=me.clamp(w,-4.5*n,4.5*n),this.turretPitch=me.damp(this.turretPitch,this.alerted?this.houndGunPitch:0,10,n),this.gun.rotation.x=this.turretPitch-s.rotation.x*.5,this.headYaw=me.damp(this.headYaw,this.alerted?this.houndHeadYaw:Math.sin(t*.7+this.phase)*.5,7,n),this.headPitch=me.damp(this.headPitch,this.alerted?this.houndHeadPitch:.05,7,n),this.head.rotation.set(this.headPitch,this.headYaw,0),this.warningHalo){const y=this.hound.phase==="tele"||this.hound.phase==="wind",R=this.hound.phase==="burst"||this.hound.phase==="lunge",D=.55+.45*Math.sin(t*(y?28:43))**2;this.warningHalo.visible=y||R,this.warningHalo.material.opacity=(y?.85:.55)*D,this.warningHalo.scale.setScalar(y?.6+.15*D:.42)}if(this.warningLens){const y=this.houndWarning>0,R=this.warningLens.material;R.color.setHex(y?16742466:16772043),R.opacity=y?.55+.45*Math.sin(t*39)**2:.9,this.warningLens.scale.x=y?1.22:1}this.antenna&&(this.antenna.rotation.x=me.damp(this.antenna.rotation.x,Math.sin(t*2+this.phase)*.05,4,n))}onHoundShot(){this.kind==="hound"&&(this.recoilPitchVelocity+=1.1,this.bodyBounceVelocity-=.25)}houndPose(){return{headYaw:this.head.rotation.y,headPitch:this.head.rotation.x,turretYaw:this.turret.rotation.y,gunPitch:this.gun.rotation.x,bodyPitch:this.body.rotation.x,bodyRoll:this.body.rotation.z,bodyShift:this.body.position.x,recoilPitch:this.recoilPitch,turretTarget:this.houndTurretYaw,headTarget:this.houndHeadYaw}}freezeHoundWreck(){if(this.wreckFrozen||this.kind!=="hound")return;this.root.updateMatrixWorld(!0);const t=new le().copy(this.root.matrixWorld).invert(),e=new Map,n=[];this.body.traverse(o=>{if(!(o instanceof st)||(n.push(o),Array.isArray(o.material)))return;const a=e.get(o.material)||[];a.push(o),e.set(o.material,a)});let s=0;for(const[o,a]of e){const l=a.map(u=>{const h=u.geometry.clone();if(h.applyMatrix4(new le().multiplyMatrices(t,u.matrixWorld)),!h.index){const d=h.getAttribute("position").count;h.setIndex(Array.from({length:d},(f,g)=>g))}return h}),c=l.length>1?xc(l,!1):l[0];if(c){const u=new st(c,o);if(u.castShadow=a.some(h=>h.castShadow),u.receiveShadow=a.some(h=>h.receiveShadow),this.root.add(u),s++,c!==l[0])for(const h of l)h.dispose()}else for(let u=0;u<l.length;u++){const h=new st(l[u],o);h.castShadow=a[u].castShadow,h.receiveShadow=a[u].receiveShadow,this.root.add(h),s++}}this.body.clear();const r=new Set;for(const o of n)o.geometry!==_d&&o.geometry!==vd&&r.add(o.geometry);for(const o of r)o.dispose();this.targetable.length=0,this.originalMaterials.clear(),this.warningHalo=void 0,this.warningLens=void 0,this.wreckFrozen=!0,this.wreckBatchCount=s}disposeWreck(){if(this.wreckFrozen)for(const t of this.root.children)t instanceof st&&t.geometry.dispose()}animateDeath(t){if(this.kind!=="hound")return{impact:!1,smoke:!1,spark:!1,retire:!1};if(this.deathSink>0)return this.deathSink+=t,this.root.position.y-=.22*t,{impact:!1,smoke:!1,spark:!1,retire:this.deathSink>3.2};this.deathElapsed+=t,this.deathElapsed>=2.2&&!this.wreckFrozen&&this.freezeHoundWreck();const e=this.body.position.y;if(this.deathVelocity-=9.8*t*(this.deathElapsed<.12?.3:1),this.deathElapsed<2.2){this.body.position.y=Math.max(.215,e+this.deathVelocity*t),this.body.position.y<=.215&&this.deathVelocity<0&&(this.deathVelocity=-this.deathVelocity*.22);const r=1-Math.exp(-3.2*t);for(let o=0;o<4;o++)this.footWorld[o].addScaledVector(this.deathFootSlides[o],r),this.deathFootSlides[o].multiplyScalar(1-r);this.deathPitchVelocity+=(60*(this.deathPitch-this.body.rotation.x)-9*this.deathPitchVelocity)*t,this.deathRollVelocity+=(60*(this.deathRoll-this.body.rotation.z)-9*this.deathRollVelocity)*t,this.body.rotation.x+=this.deathPitchVelocity*t,this.body.rotation.z+=this.deathRollVelocity*t,this.body.position.x=me.damp(this.body.position.x,0,8,t),this.hitShift=this.body.position.x,this.head.rotation.x=me.damp(this.head.rotation.x,.55,5,t),this.head.rotation.y=me.damp(this.head.rotation.y,this.deathRoll,3,t),this.gun.rotation.x=me.damp(this.gun.rotation.x,.3-this.body.rotation.x*.5,4,t),this.solveHoundLegs()}const n=!this.deathImpact&&e>.22&&this.body.position.y<=.22;if(n&&(this.deathImpact=!0),this.warningLens){const r=this.deathElapsed<1.2?Math.sin(this.deathElapsed*60)>.2?1-this.deathElapsed/1.2:.05:.02,o=this.warningLens.material;o.color.setRGB(6*r+.05,.6*r+.01,.2*r),o.opacity=this.deathElapsed<1.2?1:.14}this.deathSmokeClock-=t;const s=this.deathElapsed<6.5&&this.deathSmokeClock<=0;return s&&(this.deathSmokeClock=this.deathElapsed<2?.09:.2),{impact:n,smoke:s,spark:n||s&&this.deathElapsed<4&&Math.random()<.55,retire:!1}}animate(t,e,n=.016){if(this.kind==="hound")this.poseHound(t,e,n);else{this.body.position.y=2.9+Math.sin(t*3.5+this.phase)*.18,this.body.rotation.set(Math.sin(t*1.7+this.phase)*.045,0,Math.sin(t*2.1+this.phase)*.075);for(let s=0;s<this.rotors.length;s++)this.rotors[s].rotation.y=t*(s%2===0?46:-46)}if(this.hitFlash>0&&(this.hitFlash=Math.max(0,this.hitFlash-n),this.hitFlash<=0))for(const[s,r]of this.originalMaterials)s.material=r}damage(t,e,n="body"){if(this.alive){if(this.health-=t,this.hitFlash=.16,this.kind==="hound"&&e){const s=this.root.rotation.y,r=Math.cos(s),o=Math.sin(s),a=Math.min(1.6,t/28),l=e.x*o+e.z*r,c=e.x*r-e.z*o;this.hitShiftVelocity+=c*1.4*a,this.hitRollVelocity-=c*3.2*a,this.recoilPitchVelocity+=l*2.4*a*(n==="weak"?1.6:1),this.bodyBounceVelocity-=.5*a}if(this.kind==="gull")for(const s of this.targetable)s.material=tx;if(this.health<=0){this.alive=!1,this.hitFlash=0;for(const[s,r]of this.originalMaterials)s.material=r;this.root.userData.dying=0,this.warningHalo&&(this.warningHalo.visible=!1),this.deathElapsed=0,this.deathVelocity=0,this.deathImpact=!1,this.kind==="hound"&&(this.wreckFrozen=!1,this.wreckBatchCount=0,this.deathSink=0,this.deathOrder=++rx),this.deathPitch=(Math.random()-.5)*.25,this.deathRoll=(Math.random()<.5?-1:1)*(.25+Math.random()*.3),this.deathPitchVelocity=(Math.random()-.5)*2,this.deathRollVelocity=this.deathRoll*3,this.stepPair=-1,this.stepT=0,this.deathFootSlides=this.footWorld.map((s,r)=>{s.y=this.root.position.y;const o=r%2===0?1:-1,a=r<2?1:-1;return new S(o*(.16+Math.random()*.2),0,a*(.05+Math.random()*.22)+(Math.random()-.5)*.1).applyAxisAngle(new S(0,1,0),this.root.rotation.y)})}}}}new de({color:1251869,roughness:.58,metalness:.3});function yd(i,t,e){const l=R=>me.clamp(Math.round((R- -43)/1),0,75),c=R=>me.clamp(Math.round((R- -33)/1),0,65),u=(R,D)=>R+D*76,h=l(i.x),d=c(i.z),f=l(t.x),g=c(t.z),_=new Uint8Array(5016);for(let R=0;R<66;R++)for(let D=0;D<76;D++){const O=-43+D*1,V=-33+R*1,H=.46;_[u(D,R)]=e.some(k=>k.height>1&&O+H>k.minX&&O-H<k.maxX&&V+H>k.minZ&&V-H<k.maxZ)?0:1}const m=new Int32Array(_.length);m.fill(-1);const p=new Int32Array(_.length);let b=0,M=0;const v=u(h,d),A=u(f,g);p[M++]=v,m[v]=v;let C=v,P=Math.abs(h-f)+Math.abs(d-g);for(;b<M;){const R=p[b++],D=R%76,O=Math.floor(R/76),V=Math.abs(D-f)+Math.abs(O-g);if(V<P&&(C=R,P=V),R===A){C=R;break}for(const[H,k]of[[0,-1],[1,0],[-1,0],[0,1]]){const Z=D+H,W=O+k;if(Z<0||Z>=76||W<0||W>=66)continue;const ht=u(Z,W);m[ht]!==-1||!_[ht]||(m[ht]=R,p[M++]=ht)}}if(C===v)return[t.clone()];const I=[];let w=C;for(;w!==v&&I.length<250;){const R=w%76,D=Math.floor(w/76);if(I.push(new S(-43+R*1,0,-33+D*1)),w=m[w],w<0)return[t.clone()]}I.reverse();const y=[];for(let R=0;R<I.length;R++){if(R+1<I.length){const D=R===0?i:I[R-1],O=I[R],V=I[R+1],H=O.x-D.x,k=O.z-D.z,Z=V.x-O.x,W=V.z-O.z;if(Math.abs(H*W-k*Z)<.001&&H*Z+k*W>=0)continue}y.push(I[R])}return C===A&&y.push(t.clone()),y}const Ds=new de({color:2569274,metalness:.72,roughness:.41}),zo=new de({color:9398338,metalness:.62,roughness:.51}),Qi=new de({color:988957,metalness:.49,roughness:.47}),Tn=new de({color:8294807,metalness:.7,roughness:.42}),ji=new de({color:4017488,metalness:.78,roughness:.44}),ts=new re({color:16761468}),lx=new re({color:1582379}),Md=new de({color:2379106,metalness:.71,roughness:.16,transparent:!0,opacity:.81}),cx=new Gn(1,1,1);new we(1,1,1,10);function ve(i,t,e,n,s=cx){const r=new st(s,n);return r.position.set(...t),r.scale.set(...e),r.castShadow=!0,i.add(r),r}function Ai(i,t,e,n,s){const r=e.clone().sub(t),o=new st(new we(n,n,r.length(),8),s);return o.position.copy(t).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new S(0,1,0),r.normalize()),i.add(o),o}function Sd(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#131e22",n.fillRect(0,0,e.width,e.height),n.strokeStyle="#7d9292",n.lineWidth=3,n.strokeRect(6,6,500,116),n.fillStyle="#e6e6dd",n.font="700 59px Impact,Arial Narrow,sans-serif",n.fillText(i,22,70),n.font="22px monospace",n.fillStyle="#d8a36b",n.fillText(t,22,106);const s=new $e(e);return s.colorSpace=ye,new re({map:s})}function $a(i,t,e,n,s){const r=new qt;r.position.set(n,0,s),r.rotation.y=t==="B"?-.26:t==="C"?.23:-.15,i.add(r),ve(r,[0,.08,0],[1.28,.16,.92],Ds),ve(r,[0,.28,0],[1.04,.36,.71],ji),ve(r,[0,.78,0],[.8,1.02,.58],Qi),ve(r,[0,1.3,0],[.95,.15,.72],ji);for(const m of[-1,1]){ve(r,[m*.49,.73,0],[.12,1.27,.72],ji);for(const p of[-.27,.27])ve(r,[m*.5,.2,p],[.16,.12,.12],zo);for(let p=0;p<4;p++)ve(r,[m*.435,.6+p*.17,-.325],[.018,.08,.12],Tn)}ve(r,[0,.83,.327],[.57,.69,.058],Ds),ve(r,[0,.97,.368],[.42,.29,.026],Md);for(let m=0;m<8;m++)ve(r,[-.19+m*.054,.96,.388],[.022,.17,.015],m%3?Qi:Tn);for(let m=0;m<3;m++)ve(r,[0,.47+m*.07,.36],[.29,.017,.027],zo),ve(r,[.24,.46+m*.09,.37],[.048,.03,.018],Tn);const o=[];for(const m of[-1,1]){const p=ve(r,[m*.28,1.34,.24],[.12,.035,.12],ts);o.push(p);for(let b=0;b<4;b++)ve(r,[m*.17,.33+b*.1,.364],[.035,.025,.017],ts)}for(let m=0;m<3;m++){const p=new Tr([new S(-.33,.2,-.24-m*.06),new S(-.65,.1,-.35-m*.08),new S(-.8,.07,-.52-m*.09)]),b=new st(new Gs(p,16,.025,6,!1),Ed());r.add(b)}const a=new st(new Pe(.76,.19),Sd(`UPLINK ${t}`,e.toUpperCase()));a.position.set(0,1.15,.384),r.add(a);const l=new qt;l.position.set(0,1.35,-.12),r.add(l);const c=1.52,u=.24,h=.15;for(const m of[-1,1])for(const p of[-1,1]){Ai(l,new S(m*u,0,p*u),new S(m*h,c,p*h),.027,Tn);for(let b=0;b<5;b++){const M=b*c/5,v=(b+1)*c/5,A=u+(h-u)*b/5,C=u+(h-u)*(b+1)/5;Ai(l,new S(m*A,M,p*A),new S(-m*C,v,p*C),.014,ji)}}for(let m=.38;m<c;m+=.4){const p=u+(h-u)*m/c;Ai(l,new S(-p,m,-p),new S(p,m,-p),.019,Tn),Ai(l,new S(-p,m,p),new S(p,m,p),.019,Tn)}const d=new st(new Pi(.36,24,16),new de({color:7438730,roughness:.59,metalness:.68}));d.position.set(0,c+.4,0),d.castShadow=!0,l.add(d);const f=new st(new hn(.365,.012,6,32),Tn);f.rotation.x=Math.PI/2,f.position.copy(d.position),l.add(f),ve(l,[0,c+.77,0],[.1,.07,.1],Qi),Ai(r,new S(-.43,1.34,-.16),new S(-.43,2.22,-.16),.028,Tn);const g=ve(r,[-.43,2.22,-.16],[.2,.1,.15],ts);o.push(g);const _=new Ui(16756830,8,6,2);return _.position.set(0,1.42,.55),r.add(_),{id:t,name:e,pos:new S(n,0,s),group:r,lamps:o,light:_,cut:!1,progress:0}}function Ed(){return Qi}function hx(i){const t=new qt;t.position.set(32,0,26),t.rotation.y=-Math.PI/2,i.add(t),ve(t,[0,.14,1.2],[6.4,.28,4.6],ji);for(let _ of[-1,1]){for(let m of[-.9,1,2.5])Ai(t,new S(_*3.1,.3,m),new S(_*3.1,1.15,m),.045,Tn);Ai(t,new S(_*3.1,1.14,-.9),new S(_*3.1,1.14,2.5),.04,Tn)}for(let _ of[-2.4,2.4])for(let m of[0,2.5])ve(t,[_,.42,m],[.24,.52,.24],zo);const e=new st(new Pe(1.8,.42),Sd("BERTH 4","EXTRACTION  /  07"));e.position.set(-2.15,1.3,2.25),t.add(e);const n=new st(new we(.035,.035,1.2,8),Tn);n.position.set(-2.15,.73,2.22),t.add(n);const s=new qt;s.position.set(0,.28,-3.1),t.add(s);const r=new $s;r.moveTo(-2,-3.7),r.lineTo(2,-3.7),r.lineTo(2.05,2.55),r.quadraticCurveTo(1.65,3.65,0,4.15),r.quadraticCurveTo(-1.65,3.65,-2.05,2.55),r.closePath();const o=new cs(r,{depth:.55,bevelEnabled:!0,bevelSize:.13,bevelThickness:.12,bevelSegments:2,curveSegments:18});o.rotateX(-Math.PI/2);const a=new st(o,Qi);a.position.y=-.26,a.castShadow=!0,s.add(a),ve(s,[0,.36,-.1],[3.25,.12,7.65],ji);const l=[new S(-1.78,.51,-3.8),new S(-2.03,.48,-2),new S(-2.04,.48,1.8),new S(-1.44,.48,3.37),new S(0,.48,3.91),new S(1.44,.48,3.37),new S(2.04,.48,1.8),new S(2.03,.48,-2),new S(1.78,.51,-3.8)],c=new Tr(l,!1,"catmullrom",.26),u=new st(new Gs(c,64,.31,12,!1),Ed());u.castShadow=!0,s.add(u);for(let _=-2.7;_<=2.6;_+=.8)for(const m of[-1.78,1.78])ve(s,[m,.65,_],[.11,.04,.16],Ds);ve(s,[0,.65,-1.5],[2.75,.23,1.4],ji),ve(s,[0,1.16,-1.75],[2.38,.92,.16],Md),ve(s,[0,1.5,-2.3],[2.38,.13,1.15],Ds);for(const _ of[-1.4,1.4]){Ai(s,new S(_,.6,-2.2),new S(_,1.9,-.6),.045,Tn);const m=ve(s,[_,.59,3.48],[.21,.13,.24],ts);m.material=ts}for(let _ of[-.2,1.5,2.8])ve(s,[0,.65,_],[2.5,.07,.12],zo);ve(s,[0,.71,2.94],[1.5,.24,.36],Qi);for(const _ of[-1.35,1.35])ve(s,[_,.57,3.34],[.18,.12,.18],ts);for(let _=-3.2;_<3.2;_+=.55)ve(s,[0,.45,_],[1.05,.021,.04],Ds);const h=new Tr([new S(-1.2,.45,-2.7),new S(-1.35,.6,-1),new S(-1.15,.65,.8)]),d=new st(new Gs(h,22,.025,7,!1),Qi);s.add(d);const f=ve(s,[0,.14,-4.22],[.76,.87,.76],Ds);f.rotation.x=-.13;const g=new Ui(16761726,14,8,2);return g.position.set(0,1.7,2.3),t.add(g),{dock:t,target:new S(29,0,20)}}function ux(i){const t=[$a(i,"A","YARD",1.5,7.5),$a(i,"B","SHED",-2,-19.5),$a(i,"C","QUAY",23,0)],e=hx(i),n={relays:t,allCut:!1,boat:e.dock,boatTarget:e.target,closest(s,r){const a=t.filter(l=>!l.cut).map(l=>({type:"relay",relay:l,distance:Math.hypot(s.x-l.pos.x,s.z-l.pos.z),progress:l.progress})).sort((l,c)=>l.distance-c.distance)[0];if(a&&a.distance<=2.2){const l=a.relay.pos.x-s.x,c=a.relay.pos.z-s.z;if((-Math.sin(r)*l+-Math.cos(r)*c)/Math.max(.001,a.distance)>=.45||a.distance<.9)return a}if(n.allCut){const l=Math.hypot(s.x-e.target.x,s.z-e.target.z);if(l<=2.5)return{type:"extract",distance:l,progress:0}}return null},interact(s,r,o,a){const l=n.closest(s,r);if(l?.type==="extract")return{extract:!0,progress:1};if(!l||!o){for(const u of t)u.progress=Math.max(0,u.progress-a*1.6);return{progress:0}}const c=l.relay;if(c.progress=Math.min(1,c.progress+a/2.4),c.progress>=1){c.cut=!0,c.progress=1;for(const u of c.lamps)u.material=lx;return c.light.intensity=0,n.allCut=t.every(u=>u.cut),{cut:c,progress:1}}return{progress:c.progress}},update(s){for(const r of t)r.cut||(r.light.intensity=4.2+Math.sin(s*4.5)*1.4)},reset(){n.allCut=!1;for(const s of t){s.cut=!1,s.progress=0;for(const r of s.lamps)r.material=ts}}};return n}class dx{ctx=null;bus=null;rain=null;low=null;staticBuffer=null;lastStep=0;_muted=!1;_volume=.8;get muted(){return this._muted}set muted(t){this._muted=t,this.bus&&this.bus.gain.setTargetAtTime(t?0:.65*this._volume,this.ctx.currentTime,.1)}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.bus&&this.bus.gain.setTargetAtTime(this._muted?0:.65*this._volume,this.ctx.currentTime,.08)}async start(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createGain();e.gain.value=this._muted?0:.65*this._volume,e.connect(t.destination),this.bus=e;const n=t.createBuffer(1,Math.floor(t.sampleRate*2),t.sampleRate),s=n.getChannelData(0);for(let d=0;d<s.length;d++)s[d]=(Math.random()*2-1)*(.7+.3*Math.random());this.staticBuffer=n;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=420;const a=t.createGain();a.gain.value=.13,r.connect(o).connect(a).connect(e),r.start(),this.rain=r;const l=t.createOscillator();l.type="sine",l.frequency.value=41.2;const c=t.createGain();c.gain.value=.075,l.connect(c).connect(e),l.start(),this.low=l;const u=t.createOscillator();u.type="triangle",u.frequency.value=82.42;const h=t.createGain();h.gain.value=.012,u.connect(h).connect(e),u.start()}tone(t,e,n,s,r="sine",o=0){const a=this.ctx,l=this.bus;if(!a||!l)return;const c=a.createOscillator(),u=a.createGain(),h=a.currentTime+o;c.type=r,c.frequency.setValueAtTime(Math.max(1,t),h),c.frequency.exponentialRampToValueAtTime(Math.max(1,e),h+n),u.gain.setValueAtTime(.001,h),u.gain.exponentialRampToValueAtTime(Math.max(.002,s),h+.009),u.gain.exponentialRampToValueAtTime(.001,h+n),c.connect(u).connect(l),c.start(h),c.stop(h+n+.02)}noise(t,e,n=120,s=1e4,r=0){const o=this.ctx,a=this.bus;if(!o||!a||!this.staticBuffer)return;const l=o.createBufferSource();l.buffer=this.staticBuffer;const c=o.createBiquadFilter();c.type="highpass",c.frequency.value=n;const u=o.createBiquadFilter();u.type="lowpass",u.frequency.value=s;const h=o.createGain(),d=o.currentTime+r;h.gain.setValueAtTime(.001,d),h.gain.linearRampToValueAtTime(e,d+.004),h.gain.exponentialRampToValueAtTime(.001,d+t),l.connect(c).connect(u).connect(h).connect(a),l.start(d,Math.random()*1.2,t+.03),l.stop(d+t+.04)}shot(){this.noise(.2,.38,120,5e3),this.noise(.08,.35,800,1e4),this.tone(130,38,.19,.48,"triangle"),this.tone(920,85,.12,.075,"sawtooth",.008)}enemyShot(){this.noise(.23,.12,240,3700),this.tone(180,38,.24,.13,"sawtooth")}houndDown(){this.noise(.4,.18,90,1600),this.tone(175,44,.56,.19,"sawtooth")}houndWarning(t=!1){this.tone(t?510:890,t?180:650,t?.28:.46,.12,"sawtooth"),this.tone(1180,730,.1,.055,"triangle",.09)}impact(){this.noise(.095,.16,230,4200),this.tone(190,85,.11,.11,"triangle")}hit(){this.tone(1150,450,.15,.08,"square"),this.tone(650,210,.22,.08,"sine",.04)}reload(){for(let t=0;t<3;t++)this.noise(.055,.13,600,4e3,t*.27),this.tone(880,180,.075,.06,"triangle",t*.27)}empty(){this.tone(900,530,.046,.09,"square")}playerHit(){this.noise(.36,.26,150,1400),this.tone(108,40,.37,.17,"sine")}step(t){const e=this.ctx;e&&(e.currentTime-this.lastStep<(t?.25:.35)||(this.lastStep=e.currentTime,this.noise(.085,.053,90,900),this.tone(68,41,.08,.06,"triangle")))}wave(){this.tone(210,320,.28,.08,"sine"),this.tone(280,430,.4,.05,"sine",.2)}victory(){for(let t=0;t<5;t++)this.tone([146,196,247,330,392][t],[170,220,280,370,440][t],.32,.055,"sine",t*.12)}}const fx=document.getElementById("app"),cn=document.getElementById("viewport"),px=document.getElementById("overlay"),Ln=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),mx=matchMedia("(prefers-reduced-motion: reduce)").matches,Ec=Ln||mx||new URLSearchParams(location.search).has("fast");let ti;try{ti=new V_({canvas:cn,antialias:!Ln,alpha:!1,powerPreference:"high-performance"})}catch(i){throw fx.innerHTML='<p style="padding:2rem;color:white">WebGL is required to run this game.</p>',i}ti.setPixelRatio(Math.min(window.devicePixelRatio,Ec?1:1.65));ti.setSize(innerWidth,innerHeight);ti.toneMapping=_u;ti.toneMappingExposure=1.24;ti.outputColorSpace=ye;ti.shadowMap.enabled=!Ec;ti.shadowMap.type=mu;const Pn=new p0,Re=new dn(Ln?77:74,innerWidth/innerHeight,.055,250);Pn.add(Re);const fn=Rv(Pn,Ec),Rn=new Fv(Re),Ve=new dx,sn=ux(Pn),wd=new Ui(16113105,6.5,8,1.4);wd.position.set(.45,.45,.9);Re.add(wd);const bd=new Ui(12506580,3.3,6,1.4);bd.position.set(-1,.1,-.4);Re.add(bd);let ae="menu",pr=0,Yl=3.5,ql=!1,X={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1},Ho=0,ko=0,wc=0,$l=0,Ws=!1,Vo=-99,Pr=!1,Zl=-999,Go=0,Wo=0,Kl=-99;const xr=[];let Xs=1,Fs=.8,rs=Ln?77:74;try{const i=JSON.parse(localStorage.getItem("saltline.settings.v1")||"{}");Xs=me.clamp(Number(i.sensitivity)||1,.2,3),Fs=me.clamp(typeof i.volume=="number"?i.volume:.8,0,1),rs=me.clamp(Number(i.fov)||rs,60,95)}catch{}const gx=()=>localStorage.setItem("saltline.settings.v1",JSON.stringify({sensitivity:Xs,volume:Fs,fov:rs}));let rn=-Math.PI/2,pi=-.025,Me=0,hi=0,Xo=0,Yo=0,Lr=0,qo=0,$o=0,Zo=0;const He=new Set;let Ni=!1,ei=!1,hr=!1,Ko={x:0,y:0},Jo=!1,Ir=null,wo={x:0,y:0};const ke={x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1},_o=new Set;function _x(){const i=navigator.getGamepads?.()?.find(n=>n?.connected);if(!i){Object.assign(ke,{x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1}),_o.clear();return}const t=n=>{const s=i.axes[n]||0;return Math.abs(s)<.17?0:Math.sign(s)*(Math.abs(s)-.17)/.83};ke.x=t(0),ke.y=-t(1),ke.rx=t(2),ke.ry=t(3);const e=n=>i.buttons[n]?.pressed===!0;ke.fire=e(7),ke.aim=e(6),ke.use=e(3),ke.sprint=e(10),ke.crouch=e(1);for(const n of[0,2,9]){const s=e(n);s&&!_o.has(n)&&(n===0&&(Jo=!0),n===2&&Tc(),n===9&&(ae==="playing"?Fr():ae==="paused"&&Rd())),s?_o.add(n):_o.delete(n)}}let Ke=[],Li=[];const Jl=new rp;Jl.far=130;function vx(){px.innerHTML=`
 <div id="hud" class="hidden" aria-live="off">
  <div class="edge edge-top"></div><div class="edge edge-bottom"></div>
  <div class="compass" id="compass"><span id="compass-heading">000</span><div id="compass-tape">NW · N · NE · E · SE · S · SW · W</div><div id="compass-marks"></div></div>
  <div class="waypoint-layer" id="waypoint-layer"></div>
  <div id="interaction" class="interaction hidden"><strong id="interact-label">HOLD E · CUT UPLINK</strong><div class="interaction-track"><i id="interact-fill"></i></div><small id="interact-detail">HOLD TO DISABLE</small></div>
  <header class="hud-head"><div class="hud-brand"><strong>SALTLINE</strong><span>PORT AUTHORITY / BERTH 4</span></div><div class="hud-right"><span class="status-dot"></span> COMMS ACTIVE &nbsp; <span id="h-wave">RELAYS 0 / 3</span></div></header>
  <div class="mission" id="h-mission"><span>● ACTIVE DIRECTIVE</span><strong id="h-objective">CUT THREE UPLINKS</strong><small id="h-enemies">A / B / C · YARD / SHED / QUAY</small></div>
  <div id="crosshair" class="crosshair"><i></i><i></i><i></i><i></i><span class="cross-core"></span></div>
  <div id="hitmarker" class="hitmarker">×</div><div id="damage" class="damage"></div>
  <div id="flash" class="muzzle-flash"></div>
  <div class="wave-warning" id="wave-warning"></div>
  <div class="radio"><span class="radio-label">◢ TAC / LIVE CHANNEL</span><span id="h-radio">CHECK YOUR CORNERS. HOSTILES ON THE GROUND.</span></div>
  <div class="hud-bottom"><div class="vitals"><span>OPERATIVE STATUS</span><strong id="h-health">100 <small>HP</small></strong><div class="health-track"><div id="h-healthbar"></div></div><small id="h-stamina">STAMINA ▰▰▰▰▰</small></div>
   <div class="ammo"><span>PAC-9 LONGSHORE <em> /  5.56 × 45</em></span><div class="ammo-numbers"><strong id="h-ammo">30</strong><small id="h-reserve">/ 210</small></div><div class="ammo-bars" id="h-ammo-bars"></div></div></div>
  <button class="game-pause" id="pause-button" type="button" aria-label="Pause">Ⅱ</button>
  <div class="touch-ui" id="touch-ui"><div class="movezone" id="movezone"><div class="joybase"><div class="joystick" id="joystick"></div></div></div><div class="touch-buttons"><button id="btn-aim" class="t-action t-aim">AIM</button><button id="btn-reload" class="t-action t-reload">RLD</button><button id="btn-jump" class="t-action t-jump">JUMP</button><button id="btn-fire" class="t-action t-fire">FIRE</button><button id="btn-use" class="t-action t-use hidden">USE</button></div></div>
 </div>
 <div id="intro-overlay" class="intro-overlay hidden" aria-live="polite">
  <div id="intro-curtain" class="intro-curtain"></div>
  <div class="intro-location"><small>PORT AUTHORITY BREACH UNIT</small><strong>BERTH 4</strong><span>SALTLINE TERMINAL · 05:42 · HARBOUR SECURITY OFFLINE</span></div>
 </div>
 <section id="menu" class="screen"><div class="menu-grain"></div><div class="menu-top"><span class="small-brand">PORT AUTHORITY BREACH UNIT</span><span class="build-id">SALTLINE TERMINAL · 05:42</span></div><div class="menu-center"><div class="eyebrow"><b>B4</b> PORT AUTHORITY BREACH UNIT &nbsp; SALTLINE TERMINAL · 05:42</div><h1>SALTLINE</h1><div class="menu-rule"></div><p>The port’s security net has gone feral. Cut its three uplinks. Reach the boat.</p><div class="menu-actions"><button id="primary" class="start-btn">DEPLOY <span>↗</span></button><button id="settings-button" class="utility-btn">SETTINGS</button><button id="controls-button" class="utility-btn">CONTROLS</button>
   <div id="menu-secondary">WASD MOVE · MOUSE AIM & FIRE · E CUT UPLINK</div></div></div><div class="menu-footer"><span>PORT AUTHORITY · BREACH UNIT 04 · MISSION THREE UPLINKS</span><span>WASD MOVE · LMB FIRE · RMB AIM · R RELOAD · E CUT RELAY · ESC PAUSE</span></div></section>
 <section id="settings-panel" class="settings-panel hidden" role="dialog" aria-label="Settings"><div class="panel-title"><strong id="panel-heading">SETTINGS</strong><button id="panel-close" aria-label="Close settings">×</button></div><div id="settings-content"><label>Mouse sensitivity <output id="sensitivity-output">1.0×</output><input id="setting-sensitivity" type="range" min="0.2" max="3" step="0.05" value="1"></label><label>Master volume <output id="volume-output">80%</output><input id="setting-volume" type="range" min="0" max="1" step="0.05" value="0.8"></label><label>Field of view <output id="fov-output">74°</output><input id="setting-fov" type="range" min="60" max="95" step="1" value="74"></label></div><div id="controls-content" class="hidden"><p>WASD — MOVE · MOUSE — LOOK<br>LMB — FIRE · RMB — AIM · R — RELOAD<br>HOLD E — CUT UPLINK · F — MELEE<br>SPACE — JUMP · SHIFT — SPRINT · C — CROUCH<br>ESC — PAUSE</p><p>TOUCH: LEFT THUMB MOVE / RIGHT THUMB LOOK · USE WHEN CLOSE TO A RELAY.</p></div></section>
 `,document.getElementById("primary").addEventListener("click",()=>{ae==="menu"||ae==="dead"||ae==="victory"?xx():Rd()}),document.getElementById("pause-button").addEventListener("click",()=>Fr());const t=document.getElementById("settings-panel"),e=d=>{t.classList.remove("hidden"),document.getElementById("panel-heading").textContent=d?"CONTROLS":"SETTINGS",document.getElementById("settings-content").classList.toggle("hidden",d),document.getElementById("controls-content").classList.toggle("hidden",!d)};document.getElementById("settings-button").addEventListener("click",()=>e(!1)),document.getElementById("controls-button").addEventListener("click",()=>e(!0)),document.getElementById("panel-close").addEventListener("click",()=>t.classList.add("hidden"));const n=(d,f,g,_)=>{const m=document.getElementById(d),p=document.getElementById(f);m.value=String(d.includes("volume")?Fs:d.includes("fov")?rs:Xs),p.textContent=g(+m.value),m.addEventListener("input",()=>{const b=+m.value;_(b),p.textContent=g(b),gx()})};n("setting-sensitivity","sensitivity-output",d=>d.toFixed(2)+"×",d=>{Xs=d}),n("setting-volume","volume-output",d=>Math.round(d*100)+"%",d=>{Fs=d,Ve.setVolume(Fs)}),n("setting-fov","fov-output",d=>d+"°",d=>{rs=d});const s=document.getElementById("btn-use");s.addEventListener("pointerdown",d=>{d.preventDefault();try{s.setPointerCapture(d.pointerId)}catch{}Ws=!0,s.classList.add("active")});const r=()=>{Ws=!1,s.classList.remove("active")};for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,r);document.getElementById("btn-reload").addEventListener("pointerdown",d=>{d.preventDefault(),Tc()}),document.getElementById("btn-jump").addEventListener("pointerdown",d=>{d.preventDefault(),Jo=!0});for(const[d,f]of[["btn-fire",g=>{Ni=g}],["btn-aim",g=>{ei=g}]]){const g=document.getElementById(d);g.addEventListener("pointerdown",_=>{_.preventDefault();try{g.setPointerCapture(_.pointerId)}catch{}f(!0),d==="btn-fire"&&Rc(),g.classList.add("active")});for(const _ of["pointerup","pointercancel","lostpointercapture"])g.addEventListener(_,()=>{f(!1),g.classList.remove("active")})}const o=document.getElementById("movezone"),a=document.getElementById("joystick");let l=null,c={x:0,y:0};o.addEventListener("pointerdown",d=>{if(d.preventDefault(),l!==null)return;l=d.pointerId;try{o.setPointerCapture(d.pointerId)}catch{}const f=o.getBoundingClientRect();c={x:f.left+f.width/2,y:f.top+f.height/2},u(d.clientX,d.clientY)}),o.addEventListener("pointermove",d=>{d.pointerId===l&&u(d.clientX,d.clientY)});function u(d,f){let g=(d-c.x)/57,_=(f-c.y)/57;const m=Math.max(1,Math.hypot(g,_));g/=m,_/=m,Ko={x:g,y:-_},a.style.transform=`translate(${g*40}px,${_*40}px)`}const h=d=>{l===d.pointerId&&(l=null,Ko={x:0,y:0},a.style.transform="")};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h),Ln&&document.body.classList.add("is-mobile")}vx();function Td(i){document.getElementById("intro-overlay").classList.add("hidden");const t=document.getElementById("menu");t.classList.remove("off"),document.getElementById("hud").classList.add("hidden"),Rn.root.visible=!1;const e=t.querySelector(".eyebrow"),n=t.querySelector("p"),s=document.getElementById("primary"),r=document.getElementById("menu-secondary");i==="menu"?(e.innerHTML="<b>B4</b> PORT AUTHORITY BREACH UNIT",n.innerHTML="The port’s security net has gone feral. Cut its three uplinks. Reach the boat.",s.innerHTML="DEPLOY <span>↗</span>",r.textContent=Ln?"LEFT STICK MOVE · SWIPE LOOK · FIRE TO SHOOT":"WASD MOVE · MOUSE AIM & FIRE · R RELOAD"):i==="paused"?(e.innerHTML="<b>Ⅱ</b> OPERATION SUSPENDED",n.innerHTML="MAINTAIN YOUR POSITION.<br>RESUME WHEN READY.",s.innerHTML="RESUME <span>↗</span>",r.textContent=`RELAYS ${X.relays}/3  ·  ${X.kills} CONFIRMED  ·  ${X.hp} HP`):i==="dead"?(e.innerHTML="<b>×</b> OPERATIVE DOWN",n.innerHTML="SIGNAL LOST.<br>MISSION TERMINATED.",s.innerHTML="REDEPLOY <span>↗</span>",r.textContent=`${X.kills} HOSTILES NEUTRALIZED · RELAYS ${X.relays}/3`):(e.innerHTML="<b>◆</b> MISSION COMPLETE",n.innerHTML="The Harbormaster is dark.<br>Extraction complete.",s.innerHTML="REPLAY OPERATION <span>↗</span>",r.textContent=`TIME ${Math.floor(Ho/60).toString().padStart(2,"0")}:${Math.floor(Ho%60).toString().padStart(2,"0")} · ACCURACY ${ko?Math.round(wc/ko*100):0}% · MACHINES ${X.kills} · RETRIES ${$l}`)}function Ad(){document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.remove("hidden"),Rn.root.visible=!0}function xx(){ae==="dead"&&$l++,Ke.forEach(e=>{e.disposeWreck(),Pn.remove(e.root)}),Ke=[],Li.forEach(e=>Pn.remove(e.obj)),Li=[],X={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1},sn.reset(),Ho=0,ko=0,wc=0,Kl=-99,Ws=!1,Vo=-99,Pr=!1,Zl=-999,Go=0,Wo=0,xr.length=0,rn=-Math.PI/2,pi=-.04,Ni=!1,ei=!1,qo=0,Lr=0,Me=0,hi=0,ae="intro",pr=0,Yl=$l>0?1.3:3.5,ql=!1,document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.add("hidden"),document.getElementById("intro-overlay").classList.remove("hidden"),document.getElementById("intro-curtain").style.opacity="1",Rn.root.visible=!1,Ve.start().then(()=>Ve.setVolume(Fs)),Mx(),bc()}function bc(){!Ln&&document.pointerLockElement!==cn&&cn.requestPointerLock?.().catch(()=>{}),cn.focus()}function Fr(){ae==="playing"&&(ae="paused",Ni=!1,ei=!1,Ws=!1,He.clear(),document.pointerLockElement===cn&&document.exitPointerLock(),Td("paused"))}function Rd(){ae==="paused"&&(ae="playing",Ad(),Ve.start(),bc())}function Cd(i){ae=i?"victory":"dead",Ni=!1,He.clear(),ei=!1,document.pointerLockElement===cn&&document.exitPointerLock(),i&&Ve.victory(),Td(i?"victory":"dead")}function Kn(i,t=4){Zo=t,document.getElementById("h-radio").textContent=i}function yx(i){const t=document.getElementById("wave-warning");t.textContent=i,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}const Pd=[[["gull",2,21.5],["hound",-19,-1.4],["gull",10,23.5]],[["gull",-6,15],["hound",9,7],["gull",14,17],["hound",-12,-7]],[["gull",-10,-8],["gull",7,-8],["gull",15,-19],["hound",-8,-12],["hound",6,-25]],[["gull",19,-22],["gull",22,15],["gull",25,-6],["gull",13,24],["hound",16,-17],["hound",24,8],["hound",19,27]]];function jl(i){const t=Ke.filter(e=>e.alive).length;for(const[e,n,s]of i.slice(0,Math.max(0,9-t))){const r=new ax(e,n,s);r.shootTimer=1.4+Math.random()*2,Pn.add(r.root),Ke.push(r)}}function Mx(){jl(Pd[0])}function Sx(i){X.relays++,Ve.wave(),yx(`UPLINK ${i} — OFFLINE`),X.relays===1?Kn("ONE RELAY DARK. IT FELT THAT — MACHINES INBOUND.",5):X.relays===2?Kn("TWO DARK. IT IS THROWING EVERYTHING IT HAS LEFT AT YOU.",5):Kn("ALL THREE DARK. THE BOAT IS HOLDING AT THE EAST QUAY LADDER. RUN.",7),Pd[Math.min(X.relays,3)].forEach(([e,n,s],r)=>xr.push({kind:e,x:n,z:s,at:Me+r*.85})),sn.allCut&&(Go=Me+12,Wo=5),X.reserve+=40,X.hp=Math.min(100,X.hp+12)}function Ex(i){Ho+=i,sn.update(Me);for(let s=xr.length-1;s>=0;s--){const r=xr[s];Me<r.at||Ke.filter(o=>o.alive).length>=9||(jl([[r.kind,r.x,r.z]]),xr.splice(s,1))}if(sn.allCut&&Me>=Go&&Wo>0&&Ke.filter(s=>s.alive).length<4){const s=Math.random()<.6?"gull":"hound";jl([[s,Math.min(26,X.x+12),X.z+(Math.random()>.5?7:-7)]]),Wo--,Go=Me+7}Math.hypot(X.x-sn.boatTarget.x,X.z-sn.boatTarget.z)<4&&!sn.allCut&&Me-Zl>8&&(Zl=Me,Kn("RELAYS STILL LIVE — THE BOAT WILL NOT WAIT UNDER FIRE.",3.5));const e=He.has("KeyE")||Ws||ke.use,n=sn.interact(new S(X.x,0,X.z),rn,e,i);n.cut&&Sx(n.cut.id),n.extract&&(Kn("BREACHER IS ABOARD. SALTLINE IS DARK. GOOD WORK.",5),Cd(!0))}function Tc(){ae!=="playing"||X.reloading||X.ammo===30||X.reserve<=0||(X.reloading=!0,qo=1.45,Rn.reload(),Ve.reload(),Kn("CHANGING MAGAZINE.",1.3))}function jo(i,t,e){const n=new Float32Array([...i.toArray(),...t.toArray()]),s=new Be;s.setAttribute("position",new ln(n,3));const r=new dc({color:e?16765344:16737862,transparent:!0,opacity:.95,depthWrite:!1,blending:es}),o=new fc(s,r);Pn.add(o),Li.push({obj:o,vel:new S,life:.085,max:.085})}const Qo=document.createElement("canvas");Qo.width=Qo.height=128;const Ac=Qo.getContext("2d"),oa=Ac.createRadialGradient(64,64,2,64,64,62);oa.addColorStop(0,"rgba(190,194,187,.38)");oa.addColorStop(.4,"rgba(109,118,117,.25)");oa.addColorStop(1,"rgba(72,79,80,0)");Ac.fillStyle=oa;Ac.fillRect(0,0,128,128);const wx=new $e(Qo);function bx(i){const t=new Po(new hc({map:wx,transparent:!0,opacity:.75,depthWrite:!1,color:12697778}));t.position.copy(i);const e=.27+Math.random()*.2;t.scale.set(e,e,1),Pn.add(t),Li.push({obj:t,vel:new S((Math.random()-.5)*.2,.45+Math.random()*.25,(Math.random()-.5)*.2),life:1.7,max:1.7,smoke:!0})}function Dr(i,t=!1){for(let e=0;e<8;e++){const n=new st(new Gn(.02+.025*Math.random(),.02,.06),new re({color:t?16744535:16763016,transparent:!0,opacity:1}));n.position.copy(i),Pn.add(n),Li.push({obj:n,vel:new S((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5),life:.3+Math.random()*.33,max:.65})}}function Tx(i){const t=new S(X.x,X.y,X.z);let e=65;for(const n of fn.obstacles){const s=new S(n.minX,0,n.minZ),r=new S(n.maxX,n.height,n.maxZ),a=new as(t,i).intersectBox(new mi(s,r),new S);if(a){const l=a.distanceTo(t);l<e&&(e=l)}}return t.addScaledVector(i,e)}function Rc(){if(ae!=="playing"||X.reloading||Lr>0)return;if(X.ammo<=0){$o<=0&&(Ve.empty(),$o=.22);return}X.ammo--,ko++,Lr=.105,Rn.shoot(),Ve.shot(),hi=Math.max(hi,.055),Rx();const i=ei?.0045:.013,t=new S((Math.random()-.5)*i,(Math.random()-.5)*i,-1).normalize().applyQuaternion(Re.quaternion),e=Re.getWorldPosition(new S);Jl.set(e,t);const n=Ke.filter(a=>a.alive).flatMap(a=>a.targetable),s=Jl.intersectObjects(n,!1),r=Tx(t),o=r.distanceTo(e);if(s.length&&s[0].distance<o+.04){const a=s[0],l=a.object.userData.enemy,c=a.object.userData.enemyPart==="head";l.damage(c?92:36,t,c?"weak":"body"),Id(l),wc++,l.lastHitAt=Me,Yo=.2,Ve.hit(),Dr(a.point,!0),l.alive||(X.kills++,X.score+=c?150:100,Kn(l.kind==="gull"?"GULL DOWN. AIRSPACE CLEARER.":"HOUND DOWN. KEEP MOVING.",1.5)),jo(e.clone().addScaledVector(t,.6),a.point,!0)}else Dr(r,!1),Ve.impact(),jo(e.clone().addScaledVector(t,.6),r,!0)}function Ax(){if(ae!=="playing")return;const i=Ke.filter(t=>t.alive).map(t=>({e:t,d:Math.hypot(t.root.position.x-X.x,t.root.position.z-X.z)})).sort((t,e)=>t.d-e.d)[0];if(Rn.kick=Math.max(Rn.kick,.35),i?.d<2.8){const t=new S(i.e.root.position.x-X.x,0,i.e.root.position.z-X.z).normalize();i.e.damage(65,t,"body"),Id(i.e),Ve.hit(),Dr(i.e.root.position.clone().add(new S(0,1.1,0)),!0),i.e.alive||X.kills++}else Ve.empty()}function Ld(i,t=18){for(const e of Ke)e===i||e.kind!=="hound"||!e.alive||e.mode==="pursue"||e.root.position.distanceToSquared(i.root.position)>t*t||(e.houndLastKnown.set(X.x,0,X.z),e.mode="investigate",e.alerted=!1,e.houndModeTime=9+Math.random()*4,e.routeTimer=0,e.houndSenseTimer=0,e.houndSearchScan=0)}function Id(i){i.kind!=="hound"||!i.alive||(i.mode!=="pursue"&&(i.mode="investigate",i.alerted=!1,i.houndModeTime=10,i.houndLastKnown.set(X.x,0,X.z),i.houndSeeTime=1,i.houndSenseTimer=0,i.routeTimer=0,i.houndSearchScan=0),Ld(i,20))}function Rx(){for(const i of Ke)i.kind!=="hound"||!i.alive||i.mode==="pursue"||Math.hypot(i.root.position.x-X.x,i.root.position.z-X.z)>45||(i.mode="investigate",i.alerted=!1,i.houndModeTime=10,i.houndLastKnown.set(X.x,0,X.z),i.houndSenseTimer=0,i.routeTimer=0,i.houndSearchScan=0)}function Cx(i,t,e,n,s){if(i.houndSenseTimer-=t,i.houndSenseTimer<=0){i.houndSenseTimer=.11+Math.random()*.08;const r=(e*Math.sin(i.root.rotation.y)+n*Math.cos(i.root.rotation.y))/Math.max(.001,s),o=i.mode==="pursue"||s<3.5||r>Math.cos(100*Math.PI/180);i.houndHasLos=s<45&&o&&Dd(i.head.getWorldPosition(new S),new S(X.x,X.y,X.z))}return i.houndHasLos?(i.houndSeeTime+=t,i.houndNoSeeTime=0,i.houndLastKnown.set(X.x,0,X.z)):(i.houndNoSeeTime+=t,i.houndSeeTime=Math.max(0,i.houndSeeTime-t*.6)),i.mode==="pursue"?i.houndNoSeeTime>4&&(i.mode="search",i.houndModeTime=8+Math.random()*3,i.routeTimer=0,i.houndSearchScan=0):i.houndHasLos&&i.houndSeeTime>(i.mode==="patrol"?.55:.55*.45)?(i.mode="pursue",i.houndNoSeeTime=0,i.routeTimer=0,i.houndSearchScan=0,Ld(i),Pr||(Pr=!0,Kn("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5))):i.mode!=="patrol"&&(i.houndModeTime-=t,i.houndModeTime<=0&&(i.mode="patrol",i.home.copy(i.root.position),i.routeTimer=0)),i.alerted=i.mode==="pursue",i.houndHasLos}function Dd(i,t){const e=t.clone().sub(i),n=e.length();if(n<.001)return!0;const s=new as(i,e.divideScalar(n));for(const r of fn.obstacles){if(r.height<=.4)continue;const o=s.intersectBox(new mi(new S(r.minX,.01,r.minZ),new S(r.maxX,r.height,r.maxZ)),new S);if(o&&o.distanceTo(i)>.08&&o.distanceTo(i)<n-.18)return!1}return!0}function Cc(i,t){return ae!=="playing"||Me-Vo<t?!1:(X.hp=Math.max(0,X.hp-i),Vo=Me,Xo=.62,hi=.08,Ve.playerHit(),X.hp===0&&Cd(!1),!0)}function Za(i,t=!1){const e=i.houndHasLos?new S(X.x,0,X.z):i.houndLastKnown.clone();if(!t&&i.tacticalGoalUntil>Me&&i.lastPlayerPosition.distanceToSquared(e)<49)return i.tacticalGoal.clone();const n=Math.atan2(i.root.position.x-e.x,i.root.position.z-e.z),s=[[0,12],[.55,12],[-.55,12],[1.1,14],[-1.1,14],[.35,9],[-.35,9],[1.6,16],[-1.6,16],[2.3,10],[-2.3,10]];let r=i.root.position.clone(),o=1/0;const a=e.clone().add(new S(0,1.2,0));for(const[l,c]of s){const u=n+l,h=new S(e.x+Math.sin(u)*c,0,e.z+Math.cos(u)*c);if(ss(fn.obstacles,h.x,h.z,.6))continue;const d=Dd(h.clone().add(new S(0,.95,0)),a),f=Ke.filter(m=>m!==i&&m.alive&&m.kind==="hound").reduce((m,p)=>m+Math.max(0,3.2-p.root.position.distanceTo(h))*4,0),g=t&&i.tacticalGoalUntil>0?Math.max(0,4-h.distanceTo(i.tacticalGoal))*5:0,_=h.distanceTo(i.root.position)*.9+Math.abs(l)*1.2+(d?0:22)+f+g;_<o&&(o=_,r.copy(h))}if(o===1/0){const l=i.root.position.clone().sub(e);l.y=0,l.lengthSq()<.01&&l.set(0,0,1),r.copy(e).addScaledVector(l.normalize(),12)}return i.tacticalGoal.copy(r),i.tacticalGoalUntil=Me+10,i.lastPlayerPosition.copy(e),i.routeTimer=0,i.route=[],r}function Px(i){i.root.updateMatrixWorld(!0);const t=i.gun.localToWorld(new S(0,0,.43)),n=new S(X.x,X.y-.65,X.z).clone().sub(t),s=n.length(),r=.045+Math.min(.075,s*.0017),o=n.normalize().add(new S((Math.random()-.5)*2*r,(Math.random()-.5)*2*r,(Math.random()-.5)*2*r)).normalize(),a=new as(t,o);let l=ge.fireRange;for(const h of fn.obstacles){if(h.height<=.4)continue;const d=a.intersectBox(new mi(new S(h.minX,0,h.minZ),new S(h.maxX,h.height,h.maxZ)),new S);if(d){const f=d.distanceTo(t);f>.08&&f<l&&(l=f)}}const c=t.clone().addScaledVector(o,l);Ve.enemyShot(),jo(t,c,!1),i.onHoundShot(),a.distanceSqToSegment(new S(X.x,.35,X.z),new S(X.x,X.y,X.z))<.36*.36&&l>s-.8&&Cc(ge.shotDamage,.075)}function Lx(i,t,e,n,s){const r=Cx(i,t,e,n,s);new S(X.x,X.y-.5,X.z);const o=i.hound,a=Math.atan2(e,n),l=Math.atan2(Math.sin(a-i.root.rotation.y),Math.cos(a-i.root.rotation.y)),c=Math.atan2(Math.sin(l-i.turret.rotation.y),Math.cos(l-i.turret.rotation.y)),u=Ke.filter(Z=>Z!==i&&Z.alive&&Z.kind==="hound"&&["tele","burst"].includes(Z.hound.phase)).length;i.alerted&&i.tacticalGoalUntil<=0&&Za(i,!0);const h=i.alerted&&r&&i.lastPlayerPosition.distanceToSquared(new S(X.x,0,X.z))>49,d=i.tacticalGoalUntil>0&&i.root.position.distanceToSquared(i.tacticalGoal)<.45*.45,f=o.phase,g=o.update(t,{alerted:i.alerted,distance:s,lineOfSight:r,aligned:Math.abs(c)<.14,canClaimVolley:u<2&&Me-Kl>=1.25,reachedFiringPosition:d,timeWithoutSight:i.houndNoSeeTime,playerMovedFromPlan:h});g.reposition&&i.alerted&&Za(i,!0),g.telegraph&&(o.phase==="tele"&&(Kl=Me),Ve.houndWarning(o.phase==="wind")),g.fire&&Px(i),g.melee&&Cc(ge.lungeDamage,.075),i.houndWarning=["tele","burst","wind","lunge"].includes(o.phase)?1:0;const _=["aim","tele","burst","cool","wind","recover"].includes(o.phase);let m;if(o.phase==="lunge")m=new S(X.x,0,X.z);else if(i.mode==="patrol"){const Z=Me*.35+i.phase;m=i.home.clone().add(new S(Math.cos(Z)*2,0,Math.sin(Z)*2))}else i.mode==="search"||i.mode==="investigate"||!r?(m=i.houndLastKnown.clone(),m.distanceToSquared(i.root.position)<2.2*2.2&&(i.houndSearchScan+=t,m.copy(i.root.position))):_&&r&&s>=5&&s<30?m=i.root.position.clone():m=i.tacticalGoalUntil>0?i.tacticalGoal.clone():Za(i,!0);let p=m.x-i.root.position.x,b=m.z-i.root.position.z;if(o.phase!=="lunge"){for((i.routeTimer<=0||i.route.length===0||f!==o.phase)&&(i.route=yd(i.root.position,m,fn.obstacles),i.routeTimer=i.alerted?.65:1.5),i.routeTimer-=t;i.route.length&&i.route[0].distanceToSquared(i.root.position)<.4*.4;)i.route.shift();const Z=i.route[0]||m;p=Z.x-i.root.position.x,b=Z.z-i.root.position.z}const M=Math.hypot(p,b),v=Math.hypot(m.x-i.root.position.x,m.z-i.root.position.z),A=o.phase==="lunge",C=A||!_&&v>.45,I=(i.mode==="search"||i.mode==="investigate")&&i.houndSearchScan>0&&v<.45?i.heading+Math.sin(i.houndSearchScan*.8)*.9:i.alerted&&r&&(_||A)?a:M>.025?Math.atan2(p,b):i.houndDrive.yaw,w=i.mode==="pursue"?ge.runSpeed:i.mode==="patrol"?ge.patrolSpeed:v<8?ge.stalkSpeed:ge.runSpeed;g.beganLunge&&i.houndDrive.beginLunge(a),f==="lunge"&&o.phase==="recover"&&i.houndDrive.endLunge();const y=i.houndDrive.step(t,I,C?w:0,C?v:0,A);i.root.rotation.y=y.yaw,i.heading=y.yaw;let R=!1;if(y.speed*t>1e-5){for(const ht of Ke){if(ht===i||ht.kind!=="hound"||!ht.alive)continue;const Mt=i.root.position.x-ht.root.position.x,Ct=i.root.position.z-ht.root.position.z,Gt=Math.hypot(Mt,Ct);if(Gt>=1.7||Gt<.001)continue;const z=(1.7-Gt)*2.2/Gt*t*6;i.houndPush.x+=Mt*z,i.houndPush.z+=Ct*z}if(!A&&s<1.25&&s>.001){const ht=(1.25-s)*3/s*t*6;i.houndPush.x-=e*ht,i.houndPush.z-=n*ht}i.houndPush.multiplyScalar(Math.exp(-5*t));const Z=(Math.sin(y.yaw)*y.speed+i.houndPush.x)*t,W=(Math.cos(y.yaw)*y.speed+i.houndPush.z)*t;ss(fn.obstacles,i.root.position.x+Z,i.root.position.z,.44)||(i.root.position.x+=Z,R=!0),ss(fn.obstacles,i.root.position.x,i.root.position.z+W,.44)||(i.root.position.z+=W,R=!0),R||(i.houndDrive.speed*=.6,i.houndDrive.yawRate+=(i.phase>Math.PI?1:-1)*4*t,i.routeTimer=0)}else i.houndPush.multiplyScalar(Math.exp(-5*t));const O=Math.cos(i.root.rotation.y),V=Math.sin(i.root.rotation.y),H=Math.atan2(e*O-n*V,e*V+n*O),k=i.root.position.y+i.body.position.y;i.houndTurretYaw=H,i.houndGunPitch=me.clamp(Math.atan2(-(X.y-.72-(k+.25)),s),-.9,.35),i.houndHeadYaw=me.clamp(H,-1.2,1.2),i.houndHeadPitch=me.clamp(Math.atan2(-(X.y-.52-(k+.2)),s),-.6,.5),i.animate(Me,R?1:0,t)}function Ix(i){const t=Ke.filter(e=>e.kind==="hound"&&!e.alive&&e.deathSink===0).sort((e,n)=>e.deathOrder-n.deathOrder);for(const e of t.slice(0,Math.max(0,t.length-5)))e.deathSink=.001;for(let e=Ke.length-1;e>=0;e--){const n=Ke[e];if(!n.alive){n.root.userData.dying=n.root.userData.dying+i;const b=n.root.userData.dying;let M=!1;if(n.kind==="hound"){const v=n.animateDeath(i);M=v.retire;const A=n.root.position.clone().add(new S((Math.random()-.5)*.35,n.body.position.y+.25,(Math.random()-.5)*.35));v.impact&&(Ve.houndDown(),Dr(A,!0)),v.smoke&&bx(A),v.spark&&!v.impact&&Dr(A,!0)}else n.body.rotation.z=Math.min(1,b*2)*1.25,n.root.position.y-=i*1.4;(M||n.kind==="gull"&&b>2.8)&&(n.disposeWreck(),Pn.remove(n.root),Ke.splice(e,1));continue}const s=X.x-n.root.position.x,r=X.z-n.root.position.z,o=Math.max(.001,Math.hypot(s,r));if(n.kind==="hound"){Lx(n,i,s,r,o);continue}o<31&&!n.alerted&&(n.alerted=!0,n.mode="pursue",n.routeTimer=0,Pr||(Pr=!0,Kn("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5)));let l=0,c;if(n.alerted)if(n.kind==="gull"){const b=Me*.4+n.phase,M=9;c=new S(X.x+Math.cos(b)*M,0,X.z+Math.sin(b)*M)}else c=new S(X.x,0,X.z);else{const b=Me*.32+n.phase;c=n.home.clone().add(new S(Math.cos(b)*2,0,Math.sin(b)*2.5))}const u=c.x-n.root.position.x,h=c.z-n.root.position.z,d=Math.hypot(u,h);for((n.routeTimer<=0||n.route.length===0||n.lastPlayerPosition.distanceToSquared(c)>12)&&(n.route=yd(n.root.position,c,fn.obstacles),n.routeTimer=(n.alerted?.85:1.7)+Math.random()*.35,n.lastPlayerPosition.copy(c)),n.routeTimer-=i;n.route.length&&n.route[0].distanceToSquared(n.root.position)<.32*.32;)n.route.shift();const f=n.route[0]||c,g=f.x-n.root.position.x,_=f.z-n.root.position.z,m=Math.hypot(g,_),p=d>(n.alerted?n.kind==="gull"?2.1:2.3:.45);if(m>.03&&p){const b=n.speed*(n.alerted?1:.62),M=Math.min(m,i*b),v=g/m*M,A=_/m*M;let C=!1;ss(fn.obstacles,n.root.position.x+v,n.root.position.z,.44)||(n.root.position.x+=v,C=!0),ss(fn.obstacles,n.root.position.x,n.root.position.z+A,.44)||(n.root.position.z+=A,C=!0),C?(l=1,n.heading=Math.atan2(v,A)):n.routeTimer=0}if(n.root.rotation.y=me.damp(n.root.rotation.y,n.alerted?Math.atan2(s,r):n.heading,5,i),n.animate(Me,l,i),n.shootTimer-=i,n.shootTimer<0&&n.alerted&&o<30&&ae==="playing"){n.shootTimer=(n.kind==="gull"?1.4:2.1)+Math.random()*1.1;const b=n.root.position.clone().add(new S(0,n.kind==="gull"?2.8:1.15,0)),M=new S(X.x,X.y-.2,X.z),v=M.clone().sub(b),A=v.length(),C=v.normalize();let P=!0;for(const I of fn.obstacles){const w=new as(b,C).intersectBox(new mi(new S(I.minX,.01,I.minZ),new S(I.maxX,I.height,I.maxZ)),new S);if(w&&w.distanceTo(b)<A-.7){P=!1;break}}P&&(Ve.enemyShot(),jo(b,M.clone().add(new S((Math.random()-.5)*1.9,(Math.random()-.5)*1.6,(Math.random()-.5)*1.9)),!1),Math.random()<Math.max(.18,.46-o*.013)&&Cc(5+Math.round(Math.random()*4),1.35))}}}function Dx(i){let t=0,e=0;(He.has("KeyW")||He.has("ArrowUp"))&&t++,(He.has("KeyS")||He.has("ArrowDown"))&&t--,(He.has("KeyD")||He.has("ArrowRight"))&&e++,(He.has("KeyA")||He.has("ArrowLeft"))&&e--,t+=Ko.y+ke.y,e+=Ko.x+ke.x;const n=Math.hypot(t,e);hr=n>.05,n>1&&(t/=n,e/=n);const s=(He.has("ShiftLeft")||He.has("ShiftRight")||ke.sprint)&&t>.1&&X.stamina>.01,r=He.has("ControlLeft")||He.has("KeyC")||ke.crouch,o=(r?2.2:s?7.8:4.65)*(X.ads?.67:1);if(hr){const c=(e*Math.cos(rn)-t*Math.sin(rn))*o*i,u=(-e*Math.sin(rn)-t*Math.cos(rn))*o*i;ss(fn.obstacles,X.x+c,X.z)||(X.x+=c),ss(fn.obstacles,X.x,X.z+u)||(X.z+=u),Math.abs(X.y-(r?1.16:1.72))<.25&&Ve.step(s)}X.stamina=Math.min(1,Math.max(0,X.stamina+(s&&hr?-i*.16:i*.12))),Me-Vo>5&&X.hp<100&&(X.hp=Math.min(100,X.hp+i*3.2)),(He.has("Space")||Jo)&&X.y<=1.73&&X.vY<=0&&(X.vY=6.4),Jo=!1,X.vY-=17*i,X.y=Math.max(r?1.18:1.72,X.y+X.vY*i),(X.y===1.72||X.y===1.18)&&(X.vY=0),X.ads=ei||ke.aim,rn-=ke.rx*i*2.2,pi=Math.max(-1.35,Math.min(1.35,pi-ke.ry*i*1.7)),hi>0&&(hi=Math.max(0,hi-i*.45));const a=(Math.random()-.5)*hi,l=(Math.random()-.5)*hi;Re.rotation.order="YXZ",Re.rotation.set(pi+l,rn+a,0),Re.position.set(X.x,X.y+(X.y<=1.73&&hr?Math.sin(Me*(s?13:8))*.025:0),X.z),Re.fov=me.damp(Re.fov,X.ads?52:rs,10,i),Re.updateProjectionMatrix(),Rn.update(i,Me,hr?1:0,s,X.ads)}function Ka(i){for(let t=Li.length-1;t>=0;t--){const e=Li[t];e.life-=i,e.obj.position.addScaledVector(e.vel,i),e.smoke||(e.vel.y-=i*14),e.smoke&&e.obj instanceof Po&&(e.obj.material.opacity=.6*Math.max(0,e.life/e.max),e.obj.scale.multiplyScalar(1+i*.45)),e.obj instanceof st&&e.obj.material instanceof re&&(e.obj.material.opacity=Math.max(0,e.life/e.max)),e.life<=0&&(Pn.remove(e.obj),e.obj instanceof fc&&e.obj.geometry.dispose(),e.obj instanceof Po&&e.obj.material.dispose(),Li.splice(t,1))}}const fu=new Map;function Ux(){const i=document.getElementById("waypoint-layer"),t=(-rn*180/Math.PI%360+360)%360;document.getElementById("compass-heading").textContent=Math.round(t).toString().padStart(3,"0");const e=document.getElementById("compass-tape"),n=["N","NE","E","SE","S","SW","W","NW"];e.textContent=Array.from({length:9},(a,l)=>n[((Math.round(t/45)+l-4)%8+8)%8]).join("    ·    ");const s=sn.relays.map(a=>({id:a.id,name:a.name,position:a.pos,done:a.cut,active:!a.cut})).concat([{id:"E",name:"EXTRACT",position:sn.boatTarget,done:!1,active:sn.allCut}]),r=document.getElementById("compass-marks"),o=Math.min(430,innerWidth*.4);r.innerHTML=s.filter(a=>a.active&&!a.done).map(a=>{const l=a.position.x-X.x,c=a.position.z-X.z,u=-Math.atan2(l,-c),d=Math.atan2(Math.sin(u-rn),Math.cos(u-rn))*180/Math.PI;if(Math.abs(d)>62)return"";const f=Math.round(o*.5-d/62*o*.5),g=Math.round(Math.hypot(l,c));return`<div class="compass-objective" style="left:${f}px"><i></i><b>${a.id}</b><small>${g}m</small></div>`}).join("");for(const a of s){let l=fu.get(a.id);if(l||(l=document.createElement("div"),l.className="waypoint",i.appendChild(l),fu.set(a.id,l)),a.done||!a.active){l.classList.add("hidden");continue}l.classList.remove("hidden"),l.classList.toggle("dim",a.id!=="E"&&a.id!==sn.relays.find(_=>!_.cut)?.id);const c=Math.hypot(a.position.x-X.x,a.position.z-X.z),u=a.position.clone();u.y=a.id==="E"?2.6:2.5;const h=u.project(Re),d=h.z<1&&h.z>-1&&Math.abs(h.x)<.93&&Math.abs(h.y)<.83,f=me.clamp((h.x*.5+.5)*innerWidth,40,innerWidth-40),g=me.clamp((-h.y*.5+.5)*innerHeight,75,innerHeight-100);l.classList.toggle("offscreen",!d),l.style.transform=`translate(${Math.round(f+(a.id==="B"?-35:a.id==="C"?35:0))}px,${Math.round(g+(a.id==="B"?29:a.id==="C"?50:0))}px)`,l.innerHTML=`<b>${a.id==="E"?"↗":a.id}</b><span>${a.id==="E"?"EX":a.id} ${Math.round(c)}m</span>`}}function Nx(){if(ae!=="playing")return;document.getElementById("h-wave").textContent=`RELAYS ${X.relays} / 3`,document.getElementById("h-health").innerHTML=`${Math.ceil(X.hp)} <small>HP</small>`,document.getElementById("h-healthbar").style.width=X.hp+"%",document.getElementById("h-healthbar").classList.toggle("critical",X.hp<30),document.getElementById("h-stamina").textContent="STAMINA  "+"▰".repeat(Math.ceil(X.stamina*5))+"▱".repeat(5-Math.ceil(X.stamina*5)),document.getElementById("h-ammo").textContent=String(X.ammo).padStart(2,"0"),document.getElementById("h-reserve").textContent="/ "+X.reserve,document.getElementById("h-enemies").textContent=`RELAYS ${sn.relays.map(n=>n.cut?"■":"□").join(" ")}  ${X.relays}/3`,document.querySelector(".radio").style.opacity=Zo>0?"1":"0",document.getElementById("h-objective").textContent=sn.allCut?"REACH THE BOAT":"CUT THE THREE UPLINK RELAYS";const i=sn.closest(new S(X.x,0,X.z),rn),t=document.getElementById("interaction"),e=document.getElementById("btn-use");t.classList.toggle("hidden",!i),e.classList.toggle("hidden",!i||i.type==="extract"),i&&(document.getElementById("interact-label").textContent=i.type==="extract"?"BOAT EXTRACTION READY":`HOLD E / USE — CUT UPLINK ${i.relay.id}`,document.getElementById("interact-detail").textContent=i.type==="extract"?"BOARDING AUTOMATICALLY":`DISABLE SECURITY UPLINK · ${Math.round(i.progress*100)}%`,document.getElementById("interact-fill").style.width=`${i.progress*100}%`),Ux(),document.getElementById("hitmarker").style.opacity=Yo>0?"1":"0",document.getElementById("damage").style.opacity=String(Math.max(0,Xo)),document.getElementById("crosshair").classList.toggle("aiming",ei),document.getElementById("h-ammo-bars").innerHTML=Array.from({length:Math.ceil(X.ammo/3)},(n,s)=>`<i style="opacity:${s===Math.ceil(X.ammo/3)-1&&X.ammo%3?.6:1}"></i>`).join("")}function Fx(){ti.setSize(innerWidth,innerHeight),Re.aspect=innerWidth/innerHeight,Re.updateProjectionMatrix()}window.addEventListener("resize",Fx);window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),He.add(i.code),!i.repeat){if(i.code==="KeyR"&&Tc(),i.code==="KeyF"&&Ax(),i.code==="Escape"&&!document.getElementById("settings-panel").classList.contains("hidden")){document.getElementById("settings-panel").classList.add("hidden");return}(i.code==="Escape"||i.code==="KeyP")&&ae==="playing"&&Fr(),i.code==="Enter"&&(ae==="menu"||ae==="paused"||ae==="dead"||ae==="victory")&&document.getElementById("primary").click()}});window.addEventListener("keyup",i=>He.delete(i.code));window.addEventListener("blur",()=>{He.clear(),Ni=!1,ei=!1,Ws=!1,ae==="playing"&&!Ln&&Fr()});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!Ln&&document.pointerLockElement!==cn&&ae==="playing"&&Fr()});cn.addEventListener("mousemove",i=>{ae!=="playing"||document.pointerLockElement!==cn||(rn-=i.movementX*.0022*Xs,pi=Math.max(-1.35,Math.min(1.35,pi-i.movementY*.0022*Xs)))});cn.addEventListener("mousedown",i=>{ae==="playing"&&(!Ln&&document.pointerLockElement!==cn&&bc(),i.button===0&&(Ni=!0,Rc()),i.button===2&&(ei=!0))});window.addEventListener("mouseup",i=>{i.button===0&&(Ni=!1),i.button===2&&(ei=!1)});cn.addEventListener("pointerdown",i=>{if(!(!Ln||ae!=="playing"||Ir!==null)){Ir=i.pointerId,wo={x:i.clientX,y:i.clientY};try{cn.setPointerCapture(i.pointerId)}catch{}}});cn.addEventListener("pointermove",i=>{if(!Ln||i.pointerId!==Ir)return;const t=i.clientX-wo.x,e=i.clientY-wo.y;rn-=t*.0045,pi=Math.max(-1.28,Math.min(1.28,pi-e*.0045)),wo={x:i.clientX,y:i.clientY}});for(let i of["pointerup","pointercancel","lostpointercapture"])cn.addEventListener(i,t=>{t.pointerId===Ir&&(Ir=null)});window.addEventListener("touchmove",i=>{ae==="playing"&&i.preventDefault()},{passive:!1});window.addEventListener("touchstart",i=>{ae==="playing"&&i.touches.length>1&&i.preventDefault()},{passive:!1});Re.position.set(X.x,X.y,X.z);Re.rotation.order="YXZ";Re.rotation.set(pi,rn,0);const Ox=new sp;function Bx(i){if(Me+=i,fn.tick(i,Me,X.x,X.z),ae==="intro"){pr+=i;const t=Math.min(1,pr/Yl),e=t*t*(3-2*t);Re.position.set(-34+e*2,1.72+(1-e)*.85,6+(1-e)*1.1),Re.rotation.order="YXZ",Re.rotation.set(-.12+t*.08,-Math.PI/2,0),Re.fov=me.lerp(57,rs,e),Re.updateProjectionMatrix();const n=document.getElementById("intro-curtain");n.style.opacity=String(Math.max(0,1-pr/.55)),!ql&&pr>Math.min(.8,Yl*.35)&&(ql=!0,Kn("BREACHER, THIS IS CONTROL. THE HARBORMASTER HOLDS THE BERTH. CUT THREE UPLINKS — YARD, SHED, QUAY.",8)),t>.77&&(document.getElementById("hud").classList.remove("hidden"),Rn.root.visible=!0),t>=1&&(ae="playing",document.getElementById("intro-overlay").classList.add("hidden"),Ad()),Ka(i)}else if(ae==="playing"){if((Ni||ke.fire)&&Rc(),X.reloading&&(qo-=i,qo<=0)){const t=Math.min(X.reserve,30-X.ammo);X.ammo+=t,X.reserve-=t,X.reloading=!1}Lr=Math.max(0,Lr-i),$o=Math.max(0,$o-i),Yo=Math.max(0,Yo-i),Xo=Math.max(0,Xo-i*1.5),Zo>0&&(Zo-=i),Ex(i),Dx(i),Ix(i),Ka(i)}else ae==="menu"&&(Rn.root.visible=!1,Re.position.set(-34+Math.sin(Me*.085)*.4,1.8,6+Math.sin(Me*.12)*.55),Re.rotation.set(-.085,-Math.PI/2+Math.sin(Me*.14)*.035,0),Rn.root.position.set(.68,-.645,-.91),Rn.root.rotation.set(0,.16,0)),Ka(i)}function Ud(){requestAnimationFrame(Ud),_x();let t=Math.min(Ox.getDelta(),.24);for(;t>1e-5;){const e=Math.min(.04,t);Bx(e),t-=e}Nx(),ti.render(Pn,Re)}Ud();
