(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Vl="180",yd=0,wc=1,Md=2,Kh=1,Jh=2,ii=3,Ri=0,rn=1,Ne=2,bi=0,Ts=1,Zi=2,bc=3,Tc=4,Sd=5,Vi=100,Ed=101,wd=102,bd=103,Td=104,Ad=200,Rd=201,Cd=202,Pd=203,Ha=204,ka=205,Ld=206,Id=207,Dd=208,Ud=209,Nd=210,Fd=211,Od=212,Bd=213,zd=214,Va=0,Ga=1,Wa=2,Cs=3,Xa=4,Ya=5,qa=6,$a=7,jh=0,Hd=1,kd=2,Ti=0,Vd=1,Gd=2,Wd=3,Qh=4,Xd=5,Yd=6,qd=7,tu=300,Ps=301,Ls=302,mo=303,Za=304,Wo=306,hi=1e3,Wi=1001,Ka=1002,On=1003,$d=1004,Cr=1005,Hn=1006,ta=1007,Xi=1008,Yn=1009,eu=1010,nu=1011,hr=1012,Gl=1013,Ki=1014,oi=1015,Os=1016,Wl=1017,Xl=1018,ur=1020,iu=35902,su=35899,ru=1021,ou=1022,Fn=1023,dr=1026,fr=1027,au=1028,Yl=1029,lu=1030,ql=1031,$l=1033,ao=33776,lo=33777,co=33778,ho=33779,Ja=35840,ja=35841,Qa=35842,tl=35843,el=36196,nl=37492,il=37496,sl=37808,rl=37809,ol=37810,al=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,_l=37821,vl=36492,xl=36494,yl=36495,Ml=36283,Sl=36284,El=36285,wl=36286,Zd=3200,Kd=3201,cu=0,Jd=1,Ei="",Ee="srgb",Is="srgb-linear",go="linear",Se="srgb",ss=7680,Ac=519,jd=512,Qd=513,tf=514,hu=515,ef=516,nf=517,sf=518,rf=519,bl=35044,Rc="300 es",kn=2e3,_o=2001;class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const rr=Math.PI/180,pr=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Zl(i,t){return(i%t+t)%t}function of(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function af(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function lf(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function cf(i,t=1){return t-Math.abs(Zl(i,t*2)-t)}function hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ff(i,t){return i+Math.random()*(t-i)}function pf(i){return i*(.5-Math.random())}function mf(i){i!==void 0&&(Cc=i);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(i){return i*rr}function _f(i){return i*pr}function vf(i){return(i&i-1)===0&&i!==0}function xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:rr,RAD2DEG:pr,generateUUID:Gn,clamp:se,euclideanModulo:Zl,mapLinear:of,inverseLerp:af,lerp:or,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:_f,isPowerOfTwo:vf,ceilPowerOfTwo:xf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Mf,normalize:ve,denormalize:Un};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),C=Math.atan2(R,p*b);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const v=a*b;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new S,Pc=new wr;class te{constructor(t,e,n,s,r,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],M=s[4],v=s[7],R=s[2],C=s[5],P=s[8];return r[0]=o*_+a*b+l*R,r[3]=o*m+a*M+l*C,r[6]=o*p+a*v+l*P,r[1]=c*_+h*b+u*R,r[4]=c*m+h*M+u*C,r[7]=c*p+h*v+u*P,r[2]=d*_+f*b+g*R,r[5]=d*m+f*M+g*C,r[8]=d*p+f*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new te;function uu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){const i=vo("canvas");return i.style.display="block",i}const Lc={};function mr(i){i in Lc||(Lc[i]=!0,console.warn(i))}function Ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ic=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:t,whitePoint:n,transfer:go,toXYZ:Ic,fromXYZ:Dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Ic,fromXYZ:Dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}const ce=wf();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class bf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=vo("canvas")),rs.width=t.width,rs.height=t.height;const s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tf=0;class Kl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Af=0;const sa=new S;class on extends Bs{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Wi,s=Wi,r=Hn,o=Xi,a=Fn,l=Yn,c=on.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Gn(),this.name="",this.source=new Kl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hi:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hi:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=tu;on.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,R=(p+1)/2,C=(h+d)/4,P=(u+_)/4,I=(g+m)/4;return M>v&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=P/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rf extends Bs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new on(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Kl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class du extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Lr.subVectors(this.max,Gs),os.subVectors(t.a,Gs),as.subVectors(t.b,Gs),ls.subVectors(t.c,Gs),di.subVectors(as,os),fi.subVectors(ls,as),Ui.subVectors(os,ls);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ui.z,Ui.y,di.z,0,-di.x,fi.z,0,-fi.x,Ui.z,0,-Ui.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ui.y,Ui.x,0];return!ra(e,os,as,ls,Lr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,os,as,ls,Lr))?!1:(Ir.crossVectors(di,fi),e=[Ir.x,Ir.y,Ir.z],ra(e,os,as,ls,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new S,new S,new S,new S,new S,new S,new S,new S],Cn=new S,Pr=new ui,os=new S,as=new S,ls=new S,di=new S,fi=new S,Ui=new S,Gs=new S,Lr=new S,Ir=new S,Ni=new S;function ra(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pf=new ui,Ws=new S,oa=new S;class Xo{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(oa)),this.expandByPoint(Ws.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Qn=new S,aa=new S,Dr=new S,pi=new S,la=new S,Ur=new S,ca=new S;class ts{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(aa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Dr),a=pi.dot(this.direction),l=-pi.dot(Dr),c=pi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(Dr,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){la.subVectors(e,t),Ur.subVectors(n,t),ca.crossVectors(la,Ur);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(Ur.crossVectors(pi,Ur));if(l<0)return null;const c=a*this.direction.dot(la.cross(pi));if(c<0||l+c>o)return null;const h=-a*pi.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,If)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),mi.crossVectors(n,mn),mi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),mi.crossVectors(n,mn)),mi.normalize(),Nr.crossVectors(mn,mi),s[0]=mi.x,s[4]=Nr.x,s[8]=mn.x,s[1]=mi.y,s[5]=Nr.y,s[9]=mn.y,s[2]=mi.z,s[6]=Nr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],M=n[7],v=n[11],R=n[15],C=s[0],P=s[4],I=s[8],E=s[12],x=s[1],A=s[5],D=s[9],O=s[13],V=s[2],H=s[6],k=s[10],Z=s[14],W=s[3],ht=s[7],yt=s[11],Rt=s[15];return r[0]=o*C+a*x+l*V+c*W,r[4]=o*P+a*A+l*H+c*ht,r[8]=o*I+a*D+l*k+c*yt,r[12]=o*E+a*O+l*Z+c*Rt,r[1]=h*C+u*x+d*V+f*W,r[5]=h*P+u*A+d*H+f*ht,r[9]=h*I+u*D+d*k+f*yt,r[13]=h*E+u*O+d*Z+f*Rt,r[2]=g*C+_*x+m*V+p*W,r[6]=g*P+_*A+m*H+p*ht,r[10]=g*I+_*D+m*k+p*yt,r[14]=g*E+_*O+m*Z+p*Rt,r[3]=b*C+M*x+v*V+R*W,r[7]=b*P+M*A+v*H+R*ht,r[11]=b*I+M*D+v*k+R*yt,r[15]=b*E+M*O+v*Z+R*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=e*b+n*M+s*v+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=b*P,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*P,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*P,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,t[4]=M*P,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=v*P,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=R*P,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,M=l*h,v=l*u,R=n.x,C=n.y,P=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+p))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(m-b)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===kn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_o)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===kn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===_o)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new S,Pn=new he,Lf=new S(0,0,0),If=new S(1,1,1),mi=new S,Nr=new S,mn=new S,Uc=new he,Nc=new wr;class qn{constructor(t=0,e=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Df=0;const Fc=new S,hs=new wr,ti=new he,Fr=new S,Xs=new S,Uf=new S,Nf=new wr,Oc=new S(1,0,0),Bc=new S(0,1,0),zc=new S(0,0,1),Hc={type:"added"},Ff={type:"removed"},us={type:"childadded",child:null},ha={type:"childremoved",child:null};class Ge extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new S,e=new qn,n=new wr,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new te}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Xs,Fr,this.up):ti.lookAt(Fr,Xs,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(ti),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ff),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new S(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new S,ei=new S,ua=new S,ni=new S,ds=new S,fs=new S,kc=new S,da=new S,fa=new S,pa=new S,ma=new ge,ga=new ge,_a=new ge;class En{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ei.subVectors(n,e),ua.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ei),l=Ln.dot(ua),c=ei.dot(ei),h=ei.dot(ua),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ei.subVectors(t,e),Ln.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ln.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,n),fs.subVectors(r,n),da.subVectors(t,n);const l=ds.dot(da),c=fs.dot(da);if(l<=0&&c<=0)return e.copy(n);fa.subVectors(t,s);const h=ds.dot(fa),u=fs.dot(fa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);pa.subVectors(t,r);const f=ds.dot(pa),g=fs.dot(pa);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return kc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(kc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Zl(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=va(o,r,t+1/3),this.g=va(o,r,t),this.b=va(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ce.workingToColorSpace(je.copy(this),t),Math.round(se(je.r*255,0,255))*65536+Math.round(se(je.g*255,0,255))*256+Math.round(se(je.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ee){ce.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Or);const n=or(gi.h,Or.h,e),s=or(gi.s,Or.s,e),r=or(gi.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new jt;jt.NAMES=fu;let Of=0;class es extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Ts,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=ka,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class re extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new S,Br=new ct;let Bf=0;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class pu extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mu extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zf=0;const yn=new he,xa=new Ge,ps=new S,gn=new ui,Ys=new ui,Ye=new S;class Be extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?mu:pu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(gn.min,Ys.min),gn.expandByPoint(Ye),Ye.addVectors(gn.max,Ys.max),gn.expandByPoint(Ye)):(gn.expandByPoint(Ys.min),gn.expandByPoint(Ys.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),Ye.add(ps)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new S,l[I]=new S;const c=new S,h=new S,u=new S,d=new ct,f=new ct,g=new ct,_=new S,m=new S;function p(I,E,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[I].add(_),a[E].add(_),a[x].add(_),l[I].add(m),l[E].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,E=b.length;I<E;++I){const x=b[I],A=x.start,D=x.count;for(let O=A,V=A+D;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new S,v=new S,R=new S,C=new S;function P(I){R.fromBufferAttribute(s,I),C.copy(R);const E=a[I];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(C,E);const A=v.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,A)}for(let I=0,E=b.length;I<E;++I){const x=b[I],A=x.start,D=x.count;for(let O=A,V=A+D;O<V;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new he,Fi=new ts,zr=new Xo,Gc=new S,Hr=new S,kr=new S,Vr=new S,ya=new S,Gr=new S,Wc=new S,Wr=new S;class j extends Ge{constructor(t=new Be,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ya.fromBufferAttribute(u,t),o?Gr.addScaledVector(ya,h):Gr.addScaledVector(ya.sub(e),h))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(zr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(zr,Gc)===null||Fi.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=M;v<R;v+=3){const C=a.getX(v),P=a.getX(v+1),I=a.getX(v+2);s=Xr(this,p,t,n,c,h,u,C,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Xr(this,o,t,n,c,h,u,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=M;v<R;v+=3){const C=v,P=v+1,I=v+2;s=Xr(this,p,t,n,c,h,u,C,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,v=m+2;s=Xr(this,o,t,n,c,h,u,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hf(i,t,e,n,s,r,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ri,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Hr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Vr);const h=Hf(i,t,e,n,Hr,kr,Vr,Wc);if(h){const u=new S;En.getBarycoord(Wc,Hr,kr,Vr,u),s&&(h.uv=En.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new S,materialIndex:0};En.getNormal(Hr,kr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class An extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(_,m,p,b,M,v,R,C,P,I,E){const x=v/P,A=R/I,D=v/2,O=R/2,V=C/2,H=P+1,k=I+1;let Z=0,W=0;const ht=new S;for(let yt=0;yt<k;yt++){const Rt=yt*A-O;for(let Gt=0;Gt<H;Gt++){const z=Gt*x-D;ht[_]=z*b,ht[m]=Rt*M,ht[p]=V,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Gt/P),u.push(1-yt/I),Z+=1}}for(let yt=0;yt<I;yt++)for(let Rt=0;Rt<P;Rt++){const Gt=d+Rt+H*yt,z=d+Rt+H*(yt+1),Q=d+(Rt+1)+H*(yt+1),wt=d+(Rt+1)+H*yt;l.push(Gt,z,wt),l.push(z,Q,wt),W+=6}a.addGroup(f,W,E),f+=W,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Ds(i[e]);for(const s in n)t[s]=n[s]}return t}function kf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const _u={clone:Ds,merge:en};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vu extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new S,Xc=new ct,Yc=new ct;class hn extends vu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,Yc),e.subVectors(Yc,Xc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,gs=1;class Wf extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ms,gs,t,e);s.layers=this.layers,this.add(s);const r=new hn(ms,gs,t,e);r.layers=this.layers,this.add(r);const o=new hn(ms,gs,t,e);o.layers=this.layers,this.add(o);const a=new hn(ms,gs,t,e);a.layers=this.layers,this.add(a);const l=new hn(ms,gs,t,e);l.layers=this.layers,this.add(l);const c=new hn(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xu extends on{constructor(t=[],e=Ps,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xf extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:bi});r.uniforms.tEquirect.value=e;const o=new j(s,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Hn),new Wf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Vt extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qf extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $f{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new S;class xo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ql extends es{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _s;const qs=new S,vs=new S,xs=new S,ys=new ct,$s=new ct,yu=new he,Yr=new S,Zs=new S,qr=new S,qc=new ct,Sa=new ct,$c=new ct;class yo extends Ge{constructor(t=new Ql){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $f(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new xo(n,3,0,!1)),_s.setAttribute("uv",new xo(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;$r(Yr.set(-.5,-.5,0),xs,o,vs,s,r),$r(Zs.set(.5,-.5,0),xs,o,vs,s,r),$r(qr.set(.5,.5,0),xs,o,vs,s,r),qc.set(0,0),Sa.set(1,0),$c.set(1,1);let a=t.ray.intersectTriangle(Yr,Zs,qr,!1,qs);if(a===null&&($r(Zs.set(-.5,.5,0),xs,o,vs,s,r),Sa.set(0,1),a=t.ray.intersectTriangle(Yr,qr,Zs,!1,qs),a===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:En.getInterpolation(qs,Yr,Zs,qr,qc,Sa,$c,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $r(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*ys.x-s*ys.y,$s.y=s*ys.x+r*ys.y):$s.copy(ys),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(yu)}const Ea=new S,Zf=new S,Kf=new te;class Si{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ea.subVectors(n,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kf.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Xo,Jf=new ct(.5,.5),Zr=new S;class tc{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],M=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-b).normalize(),s[1].setComponents(c+o,f+h,p+g,R+b).normalize(),s[2].setComponents(c+a,f+u,p+_,R+M).normalize(),s[3].setComponents(c-a,f-u,p-_,R-M).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,R-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-v).normalize(),e===kn)s[5].setComponents(c+l,f+d,p+m,R+v).normalize();else if(e===_o)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);const e=Jf.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ec extends es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mo=new S,So=new S,Zc=new he,Ks=new ts,Kr=new Xo,wa=new S,Kc=new S;class nc extends Ge{constructor(t=new Be,e=new ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mo.fromBufferAttribute(e,s-1),So.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(So);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Zc.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(Zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),M=Jr(this,t,Ks,l,p,b,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Jr(this,t,Ks,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Jr(this,t,Ks,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Jr(this,t,Ks,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Mo.fromBufferAttribute(a,s),So.fromBufferAttribute(a,r),e.distanceSqToSegment(Mo,So,wa,Kc)>n)return;wa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wa);if(!(c<t.near||c>t.far))return{distance:c,point:Kc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Jc=new S,jc=new S;class jf extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Jc.fromBufferAttribute(e,s),jc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jc.distanceTo(jc);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ke extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mu extends on{constructor(t,e,n=Ki,s,r,o,a=On,l=On,c,h=dr,u=1){if(h!==dr&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Su extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ic extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new S,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function b(){const v=new S,R=new S;let C=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const E=[],x=I/r,A=x*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,V=O*l+a,H=Math.sin(V),k=Math.cos(V);R.x=A*H,R.y=-x*n+m,R.z=A*k,u.push(R.x,R.y,R.z),v.set(H,P,k).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-x),E.push(g++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const x=_[E][I],A=_[E+1][I],D=_[E+1][I+1],O=_[E][I+1];(t>0||E!==0)&&(h.push(x,A,O),C+=3),(e>0||E!==r-1)&&(h.push(A,D,O),C+=3)}c.addGroup(p,C,0),p+=C}function M(v){const R=g,C=new ct,P=new S;let I=0;const E=v===!0?t:e,x=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let D=0;D<=s;D++){const V=D/s*l+a,H=Math.cos(V),k=Math.sin(V);P.x=E*k,P.y=m*x,P.z=E*H,u.push(P.x,P.y,P.z),d.push(0,x,0),C.x=H*.5+.5,C.y=k*.5*x+.5,f.push(C.x,C.y),g++}for(let D=0;D<s;D++){const O=R+D,V=A+D;v===!0?h.push(V,V+1,O):h.push(V+1,V,O),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yo extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Yo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new S,s=[],r=[],o=[],a=new S,l=new he;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sc extends $n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qf extends sc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const jr=new S,ba=new rc,Ta=new rc,Aa=new rc;class Eo extends $n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ba.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ta.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Aa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ta.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Aa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ba.calc(l),Ta.calc(l),Aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function tp(i,t){const e=1-i;return e*e*t}function ep(i,t){return 2*(1-i)*i*t}function np(i,t){return i*i*t}function ar(i,t,e,n){return tp(i,t)+ep(i,e)+np(i,n)}function ip(i,t){const e=1-i;return e*e*e*t}function sp(i,t){const e=1-i;return 3*e*e*i*t}function rp(i,t){return 3*(1-i)*i*i*t}function op(i,t){return i*i*i*t}function lr(i,t,e,n,s){return ip(i,t)+sp(i,e)+rp(i,n)+op(i,s)}class Eu extends $n{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ap extends $n{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y),lr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wu extends $n{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lp extends $n{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends $n{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends $n{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y),ar(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Qc(a,l.x,c.x,h.x,u.x),Qc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var wo=Object.freeze({__proto__:null,ArcCurve:Qf,CatmullRomCurve3:Eo,CubicBezierCurve:Eu,CubicBezierCurve3:ap,EllipseCurve:sc,LineCurve:wu,LineCurve3:lp,QuadraticBezierCurve:bu,QuadraticBezierCurve3:Tu,SplineCurve:Au});class cp extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wo[s.type]().fromJSON(s))}return this}}class bo extends cp{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wu(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new bu(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Eu(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new sc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zs extends bo{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bo().fromJSON(s))}return this}}function hp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ru(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=mp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return gr(r,o,e,a,l,c,0),o}function Ru(i,t,e,n,s){let r;if(s===Tp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=th(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=th(o/n|0,i[o],i[o+1],r);return r&&Us(r,r.next)&&(vr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Us(e,e.next)||De(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?dp(i,n,s,r):up(i)){t.push(l.i,i.i,c.i),vr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=fp(Ji(i),t),gr(i,t,e,n,s,r,2)):o===2&&pp(i,t,e,n,s,r):gr(Ji(i),t,e,n,s,r,1);break}}}function up(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&er(s,a,r,l,o,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=Tl(f,g,t,e,n),b=Tl(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=b;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&er(a,h,l,u,c,d,M.x,M.y)&&De(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&er(a,h,l,u,c,d,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&er(a,h,l,u,c,d,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&er(a,h,l,u,c,d,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Us(n,s)&&Pu(n,e,e.next,s)&&_r(n,s)&&_r(s,n)&&(t.push(n.i,e.i,s.i),vr(e),vr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function pp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ep(o,a)){let l=Lu(o,a);o=Ji(o,o.next),l=Ji(l,l.next),gr(o,t,e,n,s,r,0),gr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function mp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ru(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Sp(c))}s.sort(gp);for(let r=0;r<s.length;r++)e=_p(s[r],e);return e}function gp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function _p(i,t){const e=vp(i,t);if(!e)return t;const n=Lu(e,i);return Ji(n,n.next),Ji(e,e.next)}function vp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Us(i,e))return e;do{if(Us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);_r(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&xp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function xp(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function yp(i,t,e,n){let s=i;do s.z===0&&(s.z=Tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mp(s)}function Mp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function er(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Cu(i,t,e,n,s,r,o,a)}function Ep(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wp(i,t)&&(_r(i,t)&&_r(t,i)&&bp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Us(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Us(i,t){return i.x===t.x&&i.y===t.y}function Pu(i,t,e,n){const s=to(De(i,t,e)),r=to(De(i,t,n)),o=to(De(e,n,i)),a=to(De(e,n,t));return!!(s!==r&&o!==a||s===0&&Qr(i,e,t)||r===0&&Qr(i,n,t)||o===0&&Qr(e,i,n)||a===0&&Qr(e,t,n))}function Qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function to(i){return i>0?1:i<0?-1:0}function wp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function bp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lu(i,t){const e=Al(i.i,i.x,i.y),n=Al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function th(i,t,e,n){const s=Al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Al(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ap{static triangulate(t,e,n=2){return hp(t,e,n)}}class Es{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Es.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];eh(t),nh(n,t);let o=t.length;e.forEach(eh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nh(n,e[l]);const a=Ap.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function eh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ns extends Be{constructor(t=new zs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Rp;let M,v=!1,R,C,P,I;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,R=p.computeFrenetFrames(h,!1),C=new S,P=new S,I=new S),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(c);let x=E.shape;const A=E.holes;if(!Es.isClockWise(x)){x=x.reverse();for(let ot=0,it=A.length;ot<it;ot++){const nt=A[ot];Es.isClockWise(nt)&&(A[ot]=nt.reverse())}}function O(ot){const nt=10000000000000001e-36;let tt=ot[0];for(let vt=1;vt<=ot.length;vt++){const ut=vt%ot.length,xt=ot[ut],Kt=xt.x-tt.x,Zt=xt.y-tt.y,T=Kt*Kt+Zt*Zt,y=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(tt.x),Math.abs(tt.y)),B=nt*y*y;if(T<=B){ot.splice(ut,1),vt--;continue}tt=xt}}O(x),A.forEach(O);const V=A.length,H=x;for(let ot=0;ot<V;ot++){const it=A[ot];x=x.concat(it)}function k(ot,it,nt){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(it,nt)}const Z=x.length;function W(ot,it,nt){let tt,vt,ut;const xt=ot.x-it.x,Kt=ot.y-it.y,Zt=nt.x-ot.x,T=nt.y-ot.y,y=xt*xt+Kt*Kt,B=xt*T-Kt*Zt;if(Math.abs(B)>Number.EPSILON){const $=Math.sqrt(y),at=Math.sqrt(Zt*Zt+T*T),J=it.x-Kt/$,Ot=it.y+xt/$,_t=nt.x-T/at,Ut=nt.y+Zt/at,Nt=((_t-J)*T-(Ut-Ot)*Zt)/(xt*T-Kt*Zt);tt=J+xt*Nt-ot.x,vt=Ot+Kt*Nt-ot.y;const dt=tt*tt+vt*vt;if(dt<=2)return new ct(tt,vt);ut=Math.sqrt(dt/2)}else{let $=!1;xt>Number.EPSILON?Zt>Number.EPSILON&&($=!0):xt<-Number.EPSILON?Zt<-Number.EPSILON&&($=!0):Math.sign(Kt)===Math.sign(T)&&($=!0),$?(tt=-Kt,vt=xt,ut=Math.sqrt(y)):(tt=xt,vt=Kt,ut=Math.sqrt(y/2))}return new ct(tt/ut,vt/ut)}const ht=[];for(let ot=0,it=H.length,nt=it-1,tt=ot+1;ot<it;ot++,nt++,tt++)nt===it&&(nt=0),tt===it&&(tt=0),ht[ot]=W(H[ot],H[nt],H[tt]);const yt=[];let Rt,Gt=ht.concat();for(let ot=0,it=V;ot<it;ot++){const nt=A[ot];Rt=[];for(let tt=0,vt=nt.length,ut=vt-1,xt=tt+1;tt<vt;tt++,ut++,xt++)ut===vt&&(ut=0),xt===vt&&(xt=0),Rt[tt]=W(nt[tt],nt[ut],nt[xt]);yt.push(Rt),Gt=Gt.concat(Rt)}let z;if(m===0)z=Es.triangulateShape(H,A);else{const ot=[],it=[];for(let nt=0;nt<m;nt++){const tt=nt/m,vt=f*Math.cos(tt*Math.PI/2),ut=g*Math.sin(tt*Math.PI/2)+_;for(let xt=0,Kt=H.length;xt<Kt;xt++){const Zt=k(H[xt],ht[xt],ut);It(Zt.x,Zt.y,-vt),tt===0&&ot.push(Zt)}for(let xt=0,Kt=V;xt<Kt;xt++){const Zt=A[xt];Rt=yt[xt];const T=[];for(let y=0,B=Zt.length;y<B;y++){const $=k(Zt[y],Rt[y],ut);It($.x,$.y,-vt),tt===0&&T.push($)}tt===0&&it.push(T)}}z=Es.triangulateShape(ot,it)}const Q=z.length,wt=g+_;for(let ot=0;ot<Z;ot++){const it=d?k(x[ot],Gt[ot],wt):x[ot];v?(P.copy(R.normals[0]).multiplyScalar(it.x),C.copy(R.binormals[0]).multiplyScalar(it.y),I.copy(M[0]).add(P).add(C),It(I.x,I.y,I.z)):It(it.x,it.y,0)}for(let ot=1;ot<=h;ot++)for(let it=0;it<Z;it++){const nt=d?k(x[it],Gt[it],wt):x[it];v?(P.copy(R.normals[ot]).multiplyScalar(nt.x),C.copy(R.binormals[ot]).multiplyScalar(nt.y),I.copy(M[ot]).add(P).add(C),It(I.x,I.y,I.z)):It(nt.x,nt.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){const it=ot/m,nt=f*Math.cos(it*Math.PI/2),tt=g*Math.sin(it*Math.PI/2)+_;for(let vt=0,ut=H.length;vt<ut;vt++){const xt=k(H[vt],ht[vt],tt);It(xt.x,xt.y,u+nt)}for(let vt=0,ut=A.length;vt<ut;vt++){const xt=A[vt];Rt=yt[vt];for(let Kt=0,Zt=xt.length;Kt<Zt;Kt++){const T=k(xt[Kt],Rt[Kt],tt);v?It(T.x,T.y+M[h-1].y,M[h-1].x+nt):It(T.x,T.y,u+nt)}}}G(),et();function G(){const ot=s.length/3;if(d){let it=0,nt=Z*it;for(let tt=0;tt<Q;tt++){const vt=z[tt];At(vt[2]+nt,vt[1]+nt,vt[0]+nt)}it=h+m*2,nt=Z*it;for(let tt=0;tt<Q;tt++){const vt=z[tt];At(vt[0]+nt,vt[1]+nt,vt[2]+nt)}}else{for(let it=0;it<Q;it++){const nt=z[it];At(nt[2],nt[1],nt[0])}for(let it=0;it<Q;it++){const nt=z[it];At(nt[0]+Z*h,nt[1]+Z*h,nt[2]+Z*h)}}n.addGroup(ot,s.length/3-ot,0)}function et(){const ot=s.length/3;let it=0;mt(H,it),it+=H.length;for(let nt=0,tt=A.length;nt<tt;nt++){const vt=A[nt];mt(vt,it),it+=vt.length}n.addGroup(ot,s.length/3-ot,1)}function mt(ot,it){let nt=ot.length;for(;--nt>=0;){const tt=nt;let vt=nt-1;vt<0&&(vt=ot.length-1);for(let ut=0,xt=h+m*2;ut<xt;ut++){const Kt=Z*ut,Zt=Z*(ut+1),T=it+tt+Kt,y=it+vt+Kt,B=it+vt+Zt,$=it+tt+Zt;$t(T,y,B,$)}}}function It(ot,it,nt){l.push(ot),l.push(it),l.push(nt)}function At(ot,it,nt){de(ot),de(it),de(nt);const tt=s.length/3,vt=b.generateTopUV(n,s,tt-3,tt-2,tt-1);L(vt[0]),L(vt[1]),L(vt[2])}function $t(ot,it,nt,tt){de(ot),de(it),de(tt),de(it),de(nt),de(tt);const vt=s.length/3,ut=b.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);L(ut[0]),L(ut[1]),L(ut[3]),L(ut[1]),L(ut[2]),L(ut[3])}function de(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function L(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wo[s.type]().fromJSON(s)),new ns(n,t.options)}}const Rp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-g),new ct(_,1-p)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-g),new ct(m,1-p)]}};function Cp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class oc extends Be{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new S,d=new ct,f=new S,g=new S,_=new S;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const M=n+b*h*s,v=Math.sin(M),R=Math.cos(M);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*v,u.y=t[C].y,u.z=t[C].x*R,o.push(u.x,u.y,u.z),d.x=b/e,d.y=C/(t.length-1),a.push(d.x,d.y);const P=l[3*C+0]*v,I=l[3*C+1],E=l[3*C+0]*R;c.push(P,I,E)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){const v=M+b*t.length,R=v,C=v+t.length,P=v+t.length+1,I=v+1;r.push(R,C,I),r.push(P,I,C)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.points,t.segments,t.phiStart,t.phiLength)}}class Ce extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-o;for(let M=0;M<c;M++){const v=M*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,v=b+c*(p+1),R=b+1+c*(p+1),C=b+1+c*p;f.push(M,v,C),f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wn extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new S,d=new S,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const C=R/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-M),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const M=h[p][b+1],v=h[p][b],R=h[p+1][b],C=h[p+1][b+1];(p!==0||o>0)&&f.push(M,v,C),(p!==n-1||l<Math.PI)&&f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class an extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xr extends Be{constructor(t=new Tu(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new ct;let h=new S;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),b(),p()}function m(M){h=t.getPointAt(M/e,h);const v=o.normals[M],R=o.binormals[M];for(let C=0;C<=s;C++){const P=C/s*Math.PI*2,I=Math.sin(P),E=-Math.cos(P);l.x=E*v.x+I*R.x,l.y=E*v.y+I*R.y,l.z=E*v.z+I*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const R=(s+1)*(M-1)+(v-1),C=(s+1)*M+(v-1),P=(s+1)*M+v,I=(s+1)*(M-1)+v;g.push(R,C,I),g.push(C,P,I)}}function b(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xr(new wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ye extends es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Iu extends ye{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pp extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lp extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qo extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ip extends qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ra=new he,ih=new S,sh=new S;class Du{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rh=new he,Js=new S,Ca=new S;class Dp extends Du{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Ca.copy(n.position),Ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ca),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,n.coordinateSystem,n.reversedDepth)}}class Pi extends qo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uu extends vu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Up extends Du{constructor(){super(new Uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Up}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Np extends qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fp extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Op{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const ah=new he;class Bp{constructor(t,e,n=0,s=1/0){this.ray=new ts(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Jl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return Rl(t,this,n,e),n.sort(lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Rl(t[s],this,n,e);return n.sort(lh),n}}function lh(i,t){return i.distance-t.distance}function Rl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Rl(r[o],t,e,!0)}}function ch(i,t,e,n){const s=zp(n);switch(e){case ru:return i*t;case au:return i*t/s.components*s.byteLength;case Yl:return i*t/s.components*s.byteLength;case lu:return i*t*2/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case $l:return i*t*4/s.components*s.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case tl:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vl:case xl:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case El:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zp(i){switch(i){case Yn:case eu:return{byteLength:1,components:1};case hr:case nu:case Os:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case Ki:case Gl:case oi:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);function Nu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,z0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:kp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:Yp,aomap_fragment:qp,aomap_pars_fragment:$p,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:Jp,beginnormal_vertex:jp,bsdfs:Qp,iridescence_fragment:t0,bumpmap_pars_fragment:e0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:r0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:_0,colorspace_pars_fragment:v0,envmap_fragment:x0,envmap_common_pars_fragment:y0,envmap_pars_fragment:M0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:D0,envmap_vertex:E0,fog_vertex:w0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:L0,lights_pars_begin:I0,lights_toon_fragment:U0,lights_toon_pars_fragment:N0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:k0,lights_fragment_end:V0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:Y0,map_fragment:q0,map_pars_fragment:$0,map_particle_fragment:Z0,map_particle_pars_fragment:K0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:j0,morphinstance_vertex:Q0,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:xm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:bm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Dm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:Bm,worldpos_vertex:zm,background_vert:Hm,background_frag:km,backgroundCube_vert:Vm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:Xm,depth_vert:Ym,depth_frag:qm,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:jm,linedashed_frag:Qm,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:vg,sprite_frag:xg},St={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},zn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const eo={r:0,b:0,g:0},Bi=new qn,yg=new he;function Mg(i,t,e,n,s,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const R=g(M);R===null?p(a,l):R&&R.isColor&&(p(R,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Wo)?(h===void 0&&(h=new j(new An(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ds(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(Bi)),h.material.toneMapped=ce.getTransfer(R.colorSpace)!==Se,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new j(new Ce(2,2),new bn({name:"BackgroundMaterial",uniforms:Ds(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ce.getTransfer(R.colorSpace)!==Se,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(eo,gu(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:b}}function Sg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,A,D,O,V){let H=!1;const k=u(O,D,A);r!==k&&(r=k,c(r.object)),H=f(x,O,D,V),H&&g(x,O,D,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(x,A,D,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,A,D){const O=D.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let H=V[A.id];H===void 0&&(H={},V[A.id]=H);let k=H[O];return k===void 0&&(k=d(l()),H[O]=k),k}function d(x){const A=[],D=[],O=[];for(let V=0;V<e;V++)A[V]=0,D[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,A,D,O){const V=r.attributes,H=A.attributes;let k=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){const yt=V[W];let Rt=H[W];if(Rt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Rt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Rt=x.instanceColor)),yt===void 0||yt.attribute!==Rt||Rt&&yt.data!==Rt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(x,A,D,O){const V={},H=A.attributes;let k=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){let yt=H[W];yt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor));const Rt={};Rt.attribute=yt,yt&&yt.data&&(Rt.data=yt.data),V[W]=Rt,k++}r.attributes=V,r.attributesNum=k,r.index=O}function _(){const x=r.newAttributes;for(let A=0,D=x.length;A<D;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const D=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;D[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),V[x]!==A&&(i.vertexAttribDivisor(x,A),V[x]=A)}function b(){const x=r.newAttributes,A=r.enabledAttributes;for(let D=0,O=A.length;D<O;D++)A[D]!==x[D]&&(i.disableVertexAttribArray(D),A[D]=0)}function M(x,A,D,O,V,H,k){k===!0?i.vertexAttribIPointer(x,A,D,V,H):i.vertexAttribPointer(x,A,D,O,V,H)}function v(x,A,D,O){_();const V=O.attributes,H=D.getAttributes(),k=A.defaultAttributeValues;for(const Z in H){const W=H[Z];if(W.location>=0){let ht=V[Z];if(ht===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){const yt=ht.normalized,Rt=ht.itemSize,Gt=t.get(ht);if(Gt===void 0)continue;const z=Gt.buffer,Q=Gt.type,wt=Gt.bytesPerElement,G=Q===i.INT||Q===i.UNSIGNED_INT||ht.gpuType===Gl;if(ht.isInterleavedBufferAttribute){const et=ht.data,mt=et.stride,It=ht.offset;if(et.isInstancedInterleavedBuffer){for(let At=0;At<W.locationSize;At++)p(W.location+At,et.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);i.bindBuffer(i.ARRAY_BUFFER,z);for(let At=0;At<W.locationSize;At++)M(W.location+At,Rt/W.locationSize,Q,yt,mt*wt,(It+Rt/W.locationSize*At)*wt,G)}else{if(ht.isInstancedBufferAttribute){for(let et=0;et<W.locationSize;et++)p(W.location+et,ht.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let et=0;et<W.locationSize;et++)m(W.location+et);i.bindBuffer(i.ARRAY_BUFFER,z);for(let et=0;et<W.locationSize;et++)M(W.location+et,Rt/W.locationSize,Q,yt,Rt*wt,Rt/W.locationSize*et*wt,G)}}else if(k!==void 0){const yt=k[Z];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(W.location,yt);break;case 3:i.vertexAttrib3fv(W.location,yt);break;case 4:i.vertexAttrib4fv(W.location,yt);break;default:i.vertexAttrib1fv(W.location,yt)}}}}b()}function R(){I();for(const x in n){const A=n[x];for(const D in A){const O=A[D];for(const V in O)h(O[V].object),delete O[V];delete A[D]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const D in A){const O=A[D];for(const V in O)h(O[V].object),delete O[V];delete A[D]}delete n[x.id]}function P(x){for(const A in n){const D=n[A];if(D[x.id]===void 0)continue;const O=D[x.id];for(const V in O)h(O[V].object),delete O[V];delete D[x.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Eg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==oi&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function bg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Si,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,M=b*4;let v=p.clippingState||null;l.value=v,v=h(g,d,M,f);for(let R=0;R!==M;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Tg(i){let t=new WeakMap;function e(o,a){return a===mo?o.mapping=Ps:a===Za&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mo||a===Za)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ws=4,hh=[.125,.215,.35,.446,.526,.582],Gi=20,Pa=new Uu,uh=new jt;let La=null,Ia=0,Da=0,Ua=!1;const ki=(1+Math.sqrt(5))/2,Ms=1/ki,dh=[new S(-ki,Ms,0),new S(ki,Ms,0),new S(-Ms,0,ki),new S(Ms,0,ki),new S(0,ki,-Ms),new S(0,ki,Ms),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Ag=new S;class fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ag}=r;La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Ia,Da),this._renderer.xr.enabled=Ua,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Os,format:Fn,colorSpace:Is,depthBuffer:!1},s=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Cg(r,t,e)}return s}_compileMaterial(t){const e=new j(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,s,r){const l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(uh),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new re({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new j(new An,_);let p=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(uh),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const R=this._cubeSize;no(s,v*R,M>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ps||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new j(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;no(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dh[(s-r-1)%dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new j(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let b=0;for(let P=0;P<Gi;++P){const I=P/_,E=Math.exp(-I*I/2);p.push(E),P===0?b+=E:P<m&&(b+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[s],R=3*v*(s>M-ws?s-M+ws:0),C=4*(this._cubeSize-v);no(e,R,C,3*v,2*v),l.setRenderTarget(e),l.render(u,Pa)}}function Rg(i){const t=[],e=[],n=[];let s=i;const r=i-ws+1+hh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ws?l=hh[o-i+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,I=C>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(E,_*g*C),M.set(d,m*g*C);const x=[C,C,C,C,C,C];v.set(x,p*g*C)}const R=new Be;R.setAttribute("position",new dn(b,_)),R.setAttribute("uv",new dn(M,m)),R.setAttribute("faceIndex",new dn(v,p)),t.push(R),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(i,t,e){const n=new Ci(i,t,e);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cg(i,t,e){const n=new Float32Array(Gi),s=new S(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function mh(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Pg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mo||l===Za,h=l===Ps||l===Ls;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new fh(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new fh(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let M=0,v=b.length;M<v;M+=3){const R=b[M+0],C=b[M+1],P=b[M+2];d.push(R,C,C,P,P,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,v=b.length/3-1;M<v;M+=3){const R=M+0,C=M+1,P=M+2;d.push(R,C,C,P,P,R)}}else return;const m=new(uu(d)?mu:pu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ug(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*C*4*u),I=new du(P,R,C,u);I.type=oi,I.needsUpdate=!0;const E=v*4;for(let A=0;A<u;A++){const D=p[A],O=b[A],V=M[A],H=R*C*4*A;for(let k=0;k<D.count;k++){const Z=k*E;g===!0&&(s.fromBufferAttribute(D,k),P[H+Z+0]=s.x,P[H+Z+1]=s.y,P[H+Z+2]=s.z,P[H+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,k),P[H+Z+4]=s.x,P[H+Z+5]=s.y,P[H+Z+6]=s.z,P[H+Z+7]=0),m===!0&&(s.fromBufferAttribute(V,k),P[H+Z+8]=s.x,P[H+Z+9]=s.y,P[H+Z+10]=s.z,P[H+Z+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ct(R,C)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Fu=new on,_h=new Mu(1,1),Ou=new du,Bu=new Cf,zu=new xu,vh=[],xh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function Hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $o(i,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),Xe(e,n)}}function Vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Mh.set(n),i.uniformMatrix3fv(this.addr,!1,Mh),Xe(e,n)}}function Gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),Xe(e,n)}}function Wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=hu,r=_h):r=Fu,e.setTexture2D(t||r,s)}function Qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bu,s)}function t_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function e_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ou,s)}function n_(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return kg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return $g;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function i_(i,t){i.uniform1fv(this.addr,t)}function s_(i,t){const e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function r_(i,t){const e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function o_(i,t){const e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function a_(i,t){const e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l_(i,t){const e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c_(i,t){const e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h_(i,t){i.uniform1iv(this.addr,t)}function u_(i,t){i.uniform2iv(this.addr,t)}function d_(i,t){i.uniform3iv(this.addr,t)}function f_(i,t){i.uniform4iv(this.addr,t)}function p_(i,t){i.uniform1uiv(this.addr,t)}function m_(i,t){i.uniform2uiv(this.addr,t)}function g_(i,t){i.uniform3uiv(this.addr,t)}function __(i,t){i.uniform4uiv(this.addr,t)}function v_(i,t,e){const n=this.cache,s=t.length,r=$o(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fu,r[o])}function x_(i,t,e){const n=this.cache,s=t.length,r=$o(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bu,r[o])}function y_(i,t,e){const n=this.cache,s=t.length,r=$o(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zu,r[o])}function M_(i,t,e){const n=this.cache,s=t.length,r=$o(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ou,r[o])}function S_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}class E_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n_(e.type)}}class w_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S_(e.type)}}class b_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Eh(i,t){i.seq.push(t),i.map[t.id]=t}function T_(i,t,e){const n=i.name,s=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(e,c===void 0?new E_(a,i,t):new w_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new b_(a),Eh(e,u)),e=u}}}class uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);T_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function wh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const A_=37297;let R_=0;function C_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bh=new te;function P_(i){ce._getMatrix(bh,ce.workingColorSpace,i);const t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Th(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+C_(i.getShaderSource(t),a)}else return r}function L_(i,t){const e=P_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I_(i,t){let e;switch(t){case Vd:e="Linear";break;case Gd:e="Reinhard";break;case Wd:e="Cineon";break;case Qh:e="ACESFilmic";break;case Yd:e="AgX";break;case qd:e="Neutral";break;case Xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const io=new S;function D_(){ce.getLuminanceCoefficients(io);const i=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function N_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function nr(i){return i!==""}function Ah(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(O_,z_)}const B_=new Map;function z_(i,t){let e=ee[t];if(e===void 0){const n=B_.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(H_,k_)}function k_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function V_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function G_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:t="ENVMAP_TYPE_CUBE";break;case Wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ls&&(t="ENVMAP_MODE_REFRACTION"),t}function X_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Hd:t="ENVMAP_BLENDING_MIX";break;case kd:t="ENVMAP_BLENDING_ADD";break}return t}function Y_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function q_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=V_(e),c=G_(e),h=W_(e),u=X_(e),d=Y_(e),f=U_(e),g=N_(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ti?I_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,L_("linearToOutputTexel",e.outputColorSpace),D_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=Cl(o),o=Ah(o,e),o=Rh(o,e),a=Cl(a),a=Ah(a,e),a=Rh(a,e),o=Ch(o),a=Ch(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,v=b+p+a,R=wh(s,s.VERTEX_SHADER,M),C=wh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(A){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(R)||"",V=s.getShaderInfoLog(C)||"",H=D.trim(),k=O.trim(),Z=V.trim();let W=!0,ht=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,C);else{const yt=Th(s,R,"vertex"),Rt=Th(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+H+`
`+yt+`
`+Rt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||Z==="")&&(ht=!1);ht&&(A.diagnostics={runnable:W,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(R),s.deleteShader(C),I=new uo(s,_),E=F_(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,A_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let $_=0;class Z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new K_(t),e.set(t,n)),n}}class K_{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}}function J_(i,t,e,n,s,r,o){const a=new Jl,l=new Z_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,A,D,O){const V=D.fog,H=O.geometry,k=E.isMeshStandardMaterial?D.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),W=Z&&Z.mapping===Wo?Z.image.height:null,ht=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=yt!==void 0?yt.length:0;let Gt=0;H.morphAttributes.position!==void 0&&(Gt=1),H.morphAttributes.normal!==void 0&&(Gt=2),H.morphAttributes.color!==void 0&&(Gt=3);let z,Q,wt,G;if(ht){const fe=zn[ht];z=fe.vertexShader,Q=fe.fragmentShader}else z=E.vertexShader,Q=E.fragmentShader,l.update(E),wt=l.getVertexShaderID(E),G=l.getFragmentShaderID(E);const et=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),It=O.isInstancedMesh===!0,At=O.isBatchedMesh===!0,$t=!!E.map,de=!!E.matcap,L=!!Z,ot=!!E.aoMap,it=!!E.lightMap,nt=!!E.bumpMap,tt=!!E.normalMap,vt=!!E.displacementMap,ut=!!E.emissiveMap,xt=!!E.metalnessMap,Kt=!!E.roughnessMap,Zt=E.anisotropy>0,T=E.clearcoat>0,y=E.dispersion>0,B=E.iridescence>0,$=E.sheen>0,at=E.transmission>0,J=Zt&&!!E.anisotropyMap,Ot=T&&!!E.clearcoatMap,_t=T&&!!E.clearcoatNormalMap,Ut=T&&!!E.clearcoatRoughnessMap,Nt=B&&!!E.iridescenceMap,dt=B&&!!E.iridescenceThicknessMap,Tt=$&&!!E.sheenColorMap,Yt=$&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Et=!!E.specularColorMap,Qt=!!E.specularIntensityMap,U=at&&!!E.transmissionMap,gt=at&&!!E.thicknessMap,Mt=!!E.gradientMap,Pt=!!E.alphaMap,ft=E.alphaTest>0,st=!!E.alphaHash,Ft=!!E.extensions;let Jt=Ti;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const Te={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:Q,defines:E.defines,customVertexShaderID:wt,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:At,batchingColor:At&&O._colorsTexture!==null,instancing:It,instancingColor:It&&O.instanceColor!==null,instancingMorph:It&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Is,alphaToCoverage:!!E.alphaToCoverage,map:$t,matcap:de,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:W,aoMap:ot,lightMap:it,bumpMap:nt,normalMap:tt,displacementMap:d&&vt,emissiveMap:ut,normalMapObjectSpace:tt&&E.normalMapType===Jd,normalMapTangentSpace:tt&&E.normalMapType===cu,metalnessMap:xt,roughnessMap:Kt,anisotropy:Zt,anisotropyMap:J,clearcoat:T,clearcoatMap:Ot,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ut,dispersion:y,iridescence:B,iridescenceMap:Nt,iridescenceThicknessMap:dt,sheen:$,sheenColorMap:Tt,sheenRoughnessMap:Yt,specularMap:Bt,specularColorMap:Et,specularIntensityMap:Qt,transmission:at,transmissionMap:U,thicknessMap:gt,gradientMap:Mt,opaque:E.transparent===!1&&E.blending===Ts&&E.alphaToCoverage===!1,alphaMap:Pt,alphaTest:ft,alphaHash:st,combine:E.combine,mapUv:$t&&_(E.map.channel),aoMapUv:ot&&_(E.aoMap.channel),lightMapUv:it&&_(E.lightMap.channel),bumpMapUv:nt&&_(E.bumpMap.channel),normalMapUv:tt&&_(E.normalMap.channel),displacementMapUv:vt&&_(E.displacementMap.channel),emissiveMapUv:ut&&_(E.emissiveMap.channel),metalnessMapUv:xt&&_(E.metalnessMap.channel),roughnessMapUv:Kt&&_(E.roughnessMap.channel),anisotropyMapUv:J&&_(E.anisotropyMap.channel),clearcoatMapUv:Ot&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&_(E.sheenRoughnessMap.channel),specularMapUv:Bt&&_(E.specularMap.channel),specularColorMapUv:Et&&_(E.specularColorMap.channel),specularIntensityMapUv:Qt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:gt&&_(E.thicknessMap.channel),alphaMapUv:Pt&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(tt||Zt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&($t||Pt),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:$t&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:ut&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ne,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)x.push(A),x.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(b(x,E),M(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function M(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const x=g[E.type];let A;if(x){const D=zn[x];A=_u.clone(D.uniforms)}else A=E.uniforms;return A}function R(E,x){let A;for(let D=0,O=h.length;D<O;D++){const V=h[D];if(V.cacheKey===x){A=V,++A.usedTimes;break}}return A===void 0&&(A=new q_(i,x,E,r),h.push(A)),A}function C(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:I}}function j_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ih(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Q_),n.length>1&&n.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function tv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ih,i.set(n,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ev(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new jt};break;case"SpotLight":e={position:new S,direction:new S,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function nv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let iv=0;function sv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rv(i){const t=new ev,e=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const s=new S,r=new he,o=new he;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,M=0,v=0,R=0,C=0,P=0;c.sort(sv);for(let E=0,x=c.length;E<x;E++){const A=c[E],D=A.color,O=A.intensity,V=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],O);P++}else if(A.isDirectionalLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,W=e.get(A);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=k,f++}else if(A.isSpotLight){const k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(D).multiplyScalar(O),k.distance=V,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[_]=k;const Z=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,Z.updateMatrices(A),A.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,v++}_++}else if(A.isRectAreaLight){const k=t.get(A);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=k,m++}else if(A.isPointLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const Z=A.shadow,W=e.get(A);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=k,g++}else if(A.isHemisphereLight){const k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(O),k.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=P,n.version=iv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Dh(i){const t=new rv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ov(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Dh(i),t.set(s,[a])):r>=o.length?(a=new Dh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
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
}`;function cv(i,t,e){let n=new tc;const s=new ct,r=new ct,o=new ge,a=new Pp({depthPacking:Kd}),l=new Lp,c={},h=e.maxTextureSize,u={[Ri]:rn,[rn]:Ri,[Ne]:Ne},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:av,fragmentShader:lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(C,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(bi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==ii&&this.type===ii,V=p===ii&&this.type!==ii;for(let H=0,k=C.length;H<k;H++){const Z=C[H],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y)),W.map===null||O===!0||V===!0){const Rt=this.type!==ii?{minFilter:On,magFilter:On}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(s.x,s.y,Rt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const yt=W.getViewportCount();for(let Rt=0;Rt<yt;Rt++){const Gt=W.getViewport(Rt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),D.viewport(o),W.updateMatrices(Z,Rt),n=W.getFrustum(),v(P,I,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===ii&&b(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,A)};function b(C,P){const I=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ci(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,I,f,_,null)}function M(C,P,I,E){let x=null;const A=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)x=A;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=x.uuid,O=P.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let H=V[O];H===void 0&&(H=x.clone(),V[O]=H,P.addEventListener("dispose",R)),x=H}if(x.visible=P.visible,x.wireframe=P.wireframe,E===ii?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=I}return x}function v(C,P,I,E,x){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===ii)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const O=t.update(C),V=C.material;if(Array.isArray(V)){const H=O.groups;for(let k=0,Z=H.length;k<Z;k++){const W=H[k],ht=V[W.materialIndex];if(ht&&ht.visible){const yt=M(C,ht,E,x);C.onBeforeShadow(i,C,P,I,O,yt,W),i.renderBufferDirect(I,null,O,yt,C,W),C.onAfterShadow(i,C,P,I,O,yt,W)}}}else if(V.visible){const H=M(C,V,E,x);C.onBeforeShadow(i,C,P,I,O,H,null),i.renderBufferDirect(I,null,O,H,C,null),C.onAfterShadow(i,C,P,I,O,H,null)}}const D=C.children;for(let O=0,V=D.length;O<V;O++)v(D[O],P,I,E,x)}function R(C){C.target.removeEventListener("dispose",R);for(const I in c){const E=c[I],x=C.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const hv={[Va]:Ga,[Wa]:qa,[Xa]:$a,[Cs]:Ya,[Ga]:Va,[qa]:Wa,[$a]:Xa,[Ya]:Cs};function uv(i,t){function e(){let U=!1;const gt=new ge;let Mt=null;const Pt=new ge(0,0,0,0);return{setMask:function(ft){Mt!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),Mt=ft)},setLocked:function(ft){U=ft},setClear:function(ft,st,Ft,Jt,Te){Te===!0&&(ft*=Jt,st*=Jt,Ft*=Jt),gt.set(ft,st,Ft,Jt),Pt.equals(gt)===!1&&(i.clearColor(ft,st,Ft,Jt),Pt.copy(gt))},reset:function(){U=!1,Mt=null,Pt.set(-1,0,0,0)}}}function n(){let U=!1,gt=!1,Mt=null,Pt=null,ft=null;return{setReversed:function(st){if(gt!==st){const Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),gt=st;const Jt=ft;ft=null,this.setClear(Jt)}},getReversed:function(){return gt},setTest:function(st){st?et(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(st){Mt!==st&&!U&&(i.depthMask(st),Mt=st)},setFunc:function(st){if(gt&&(st=hv[st]),Pt!==st){switch(st){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=st}},setLocked:function(st){U=st},setClear:function(st){ft!==st&&(gt&&(st=1-st),i.clearDepth(st),ft=st)},reset:function(){U=!1,Mt=null,Pt=null,ft=null,gt=!1}}}function s(){let U=!1,gt=null,Mt=null,Pt=null,ft=null,st=null,Ft=null,Jt=null,Te=null;return{setTest:function(fe){U||(fe?et(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!U&&(i.stencilMask(fe),gt=fe)},setFunc:function(fe,Jn,Bn){(Mt!==fe||Pt!==Jn||ft!==Bn)&&(i.stencilFunc(fe,Jn,Bn),Mt=fe,Pt=Jn,ft=Bn)},setOp:function(fe,Jn,Bn){(st!==fe||Ft!==Jn||Jt!==Bn)&&(i.stencilOp(fe,Jn,Bn),st=fe,Ft=Jn,Jt=Bn)},setLocked:function(fe){U=fe},setClear:function(fe){Te!==fe&&(i.clearStencil(fe),Te=fe)},reset:function(){U=!1,gt=null,Mt=null,Pt=null,ft=null,st=null,Ft=null,Jt=null,Te=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,v=null,R=null,C=null,P=new jt(0,0,0),I=0,E=!1,x=null,A=null,D=null,O=null,V=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Z>=2);let ht=null,yt={};const Rt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),z=new ge().fromArray(Rt),Q=new ge().fromArray(Gt);function wt(U,gt,Mt,Pt){const ft=new Uint8Array(4),st=i.createTexture();i.bindTexture(U,st),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Mt;Ft++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return st}const G={};G[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Cs),nt(!1),tt(wc),et(i.CULL_FACE),ot(bi);function et(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function mt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function It(U,gt){return u[U]!==gt?(i.bindFramebuffer(U,gt),u[U]=gt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function At(U,gt){let Mt=f,Pt=!1;if(U){Mt=d.get(gt),Mt===void 0&&(Mt=[],d.set(gt,Mt));const ft=U.textures;if(Mt.length!==ft.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ft=ft.length;st<Ft;st++)Mt[st]=i.COLOR_ATTACHMENT0+st;Mt.length=ft.length,Pt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(Mt)}function $t(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const de={[Vi]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[wd]:i.FUNC_REVERSE_SUBTRACT};de[bd]=i.MIN,de[Td]=i.MAX;const L={[Ad]:i.ZERO,[Rd]:i.ONE,[Cd]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(U,gt,Mt,Pt,ft,st,Ft,Jt,Te,fe){if(U===bi){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),U!==Sd){if(U!==m||fe!==E){if((p!==Vi||v!==Vi)&&(i.blendEquation(i.FUNC_ADD),p=Vi,v=Vi),fe)switch(U){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,R=null,C=null,P.set(0,0,0),I=0,m=U,E=fe}return}ft=ft||gt,st=st||Mt,Ft=Ft||Pt,(gt!==p||ft!==v)&&(i.blendEquationSeparate(de[gt],de[ft]),p=gt,v=ft),(Mt!==b||Pt!==M||st!==R||Ft!==C)&&(i.blendFuncSeparate(L[Mt],L[Pt],L[st],L[Ft]),b=Mt,M=Pt,R=st,C=Ft),(Jt.equals(P)===!1||Te!==I)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Te),P.copy(Jt),I=Te),m=U,E=!1}function it(U,gt){U.side===Ne?mt(i.CULL_FACE):et(i.CULL_FACE);let Mt=U.side===rn;gt&&(Mt=!Mt),nt(Mt),U.blending===Ts&&U.transparent===!1?ot(bi):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Pt=U.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function tt(U){U!==yd?(et(i.CULL_FACE),U!==A&&(U===wc?i.cullFace(i.BACK):U===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),A=U}function vt(U){U!==D&&(k&&i.lineWidth(U),D=U)}function ut(U,gt,Mt){U?(et(i.POLYGON_OFFSET_FILL),(O!==gt||V!==Mt)&&(i.polygonOffset(gt,Mt),O=gt,V=Mt)):mt(i.POLYGON_OFFSET_FILL)}function xt(U){U?et(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Kt(U){U===void 0&&(U=i.TEXTURE0+H-1),ht!==U&&(i.activeTexture(U),ht=U)}function Zt(U,gt,Mt){Mt===void 0&&(ht===null?Mt=i.TEXTURE0+H-1:Mt=ht);let Pt=yt[Mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},yt[Mt]=Pt),(Pt.type!==U||Pt.texture!==gt)&&(ht!==Mt&&(i.activeTexture(Mt),ht=Mt),i.bindTexture(U,gt||G[U]),Pt.type=U,Pt.texture=gt)}function T(){const U=yt[ht];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(U){z.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),z.copy(U))}function Yt(U){Q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Bt(U,gt){let Mt=c.get(gt);Mt===void 0&&(Mt=new WeakMap,c.set(gt,Mt));let Pt=Mt.get(U);Pt===void 0&&(Pt=i.getUniformBlockIndex(gt,U.name),Mt.set(U,Pt))}function Et(U,gt){const Pt=c.get(gt).get(U);l.get(gt)!==Pt&&(i.uniformBlockBinding(gt,Pt,U.__bindingPointIndex),l.set(gt,Pt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,yt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,v=null,R=null,C=null,P=new jt(0,0,0),I=0,E=!1,x=null,A=null,D=null,O=null,V=null,z.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:mt,bindFramebuffer:It,drawBuffers:At,useProgram:$t,setBlending:ot,setMaterial:it,setFlipSided:nt,setCullFace:tt,setLineWidth:vt,setPolygonOffset:ut,setScissorTest:xt,activeTexture:Kt,bindTexture:Zt,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Nt,texImage3D:dt,updateUBOMapping:Bt,uniformBlockBinding:Et,texStorage2D:_t,texStorage3D:Ut,texSubImage2D:$,texSubImage3D:at,compressedTexSubImage2D:J,compressedTexSubImage3D:Ot,scissor:Tt,viewport:Yt,reset:Qt}}function dv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):vo("canvas")}function _(T,y,B){let $=1;const at=Zt(T);if((at.width>B||at.height>B)&&($=B/Math.max(at.width,at.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor($*at.width),Ot=Math.floor($*at.height);u===void 0&&(u=g(J,Ot));const _t=y?g(J,Ot):u;return _t.width=J,_t.height=Ot,_t.getContext("2d").drawImage(T,0,0,J,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+J+"x"+Ot+")."),_t}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,y,B,$,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=y;if(y===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),y===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){const Ot=at?go:ce.getTransfer($);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Ot===Se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(T,y){let B;return T?y===null||y===Ki||y===ur?B=i.DEPTH24_STENCIL8:y===oi?B=i.DEPTH32F_STENCIL8:y===hr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===ur?B=i.DEPTH_COMPONENT24:y===oi?B=i.DEPTH_COMPONENT32F:y===hr&&(B=i.DEPTH_COMPONENT16),B}function R(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==Hn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){const y=T.target;y.removeEventListener("dispose",C),I(y),y.isVideoTexture&&h.delete(y)}function P(T){const y=T.target;y.removeEventListener("dispose",P),x(y)}function I(T){const y=n.get(T);if(y.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const at=$[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function E(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const B=T.source,$=d.get(B);delete $[y.__cacheKey],o.memory.textures--}function x(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let at=0;at<y.__webglFramebuffer[$].length;at++)i.deleteFramebuffer(y.__webglFramebuffer[$][at]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,at=B.length;$<at;$++){const J=n.get(B[$]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(T)}let A=0;function D(){A=0}function O(){const T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function V(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function H(T,y){const B=n.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,T,y);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function k(T,y){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){G(B,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Z(T,y){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){G(B,T,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function W(T,y){const B=n.get(T);if(T.version>0&&B.__version!==T.version){et(B,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const ht={[hi]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},yt={[On]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Rt={[jd]:i.NEVER,[rf]:i.ALWAYS,[Qd]:i.LESS,[hu]:i.LEQUAL,[tf]:i.EQUAL,[sf]:i.GEQUAL,[ef]:i.GREATER,[nf]:i.NOTEQUAL};function Gt(T,y){if(y.type===oi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Hn||y.magFilter===ta||y.magFilter===Cr||y.magFilter===Xi||y.minFilter===Hn||y.minFilter===ta||y.minFilter===Cr||y.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ht[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ht[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ht[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,yt[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===On||y.minFilter!==Cr&&y.minFilter!==Xi||y.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function z(T,y){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let at=d.get($);at===void 0&&(at={},d.set($,at));const J=V(y);if(J!==T.__cacheKey){at[J]===void 0&&(at[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),at[J].usedTimes++;const Ot=at[T.__cacheKey];Ot!==void 0&&(at[T.__cacheKey].usedTimes--,Ot.usedTimes===0&&E(y)),T.__cacheKey=J,T.__webglTexture=at[J].texture}return B}function Q(T,y,B){return Math.floor(Math.floor(T/B)/y)}function wt(T,y,B,$){const J=T.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,$,y.data);else{J.sort((dt,Tt)=>dt.start-Tt.start);let Ot=0;for(let dt=1;dt<J.length;dt++){const Tt=J[Ot],Yt=J[dt],Bt=Tt.start+Tt.count,Et=Q(Yt.start,y.width,4),Qt=Q(Tt.start,y.width,4);Yt.start<=Bt+1&&Et===Qt&&Q(Yt.start+Yt.count-1,y.width,4)===Et?Tt.count=Math.max(Tt.count,Yt.start+Yt.count-Tt.start):(++Ot,J[Ot]=Yt)}J.length=Ot+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let dt=0,Tt=J.length;dt<Tt;dt++){const Yt=J[dt],Bt=Math.floor(Yt.start/4),Et=Math.ceil(Yt.count/4),Qt=Bt%y.width,U=Math.floor(Bt/y.width),gt=Et,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Qt,U,gt,Mt,B,$,y.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function G(T,y,B){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const at=z(T,y),J=y.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+B);const Ot=n.get(J);if(J.version!==Ot.__version||at===!0){e.activeTexture(i.TEXTURE0+B);const _t=ce.getPrimaries(ce.workingColorSpace),Ut=y.colorSpace===Ei?null:ce.getPrimaries(y.colorSpace),Nt=y.colorSpace===Ei||_t===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let dt=_(y.image,!1,s.maxTextureSize);dt=Kt(y,dt);const Tt=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type);let Bt=M(y.internalFormat,Tt,Yt,y.colorSpace,y.isVideoTexture);Gt($,y);let Et;const Qt=y.mipmaps,U=y.isVideoTexture!==!0,gt=Ot.__version===void 0||at===!0,Mt=J.dataReady,Pt=R(y,dt);if(y.isDepthTexture)Bt=v(y.format===fr,y.type),gt&&(U?e.texStorage2D(i.TEXTURE_2D,1,Bt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,Tt,Yt,null));else if(y.isDataTexture)if(Qt.length>0){U&&gt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,Qt[0].width,Qt[0].height);for(let ft=0,st=Qt.length;ft<st;ft++)Et=Qt[ft],U?Mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Et.width,Et.height,Tt,Yt,Et.data):e.texImage2D(i.TEXTURE_2D,ft,Bt,Et.width,Et.height,0,Tt,Yt,Et.data);y.generateMipmaps=!1}else U?(gt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,dt.width,dt.height),Mt&&wt(y,dt,Tt,Yt)):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,Tt,Yt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Bt,Qt[0].width,Qt[0].height,dt.depth);for(let ft=0,st=Qt.length;ft<st;ft++)if(Et=Qt[ft],y.format!==Fn)if(Tt!==null)if(U){if(Mt)if(y.layerUpdates.size>0){const Ft=ch(Et.width,Et.height,y.format,y.type);for(const Jt of y.layerUpdates){const Te=Et.data.subarray(Jt*Ft/Et.data.BYTES_PER_ELEMENT,(Jt+1)*Ft/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Jt,Et.width,Et.height,1,Tt,Te)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Et.width,Et.height,dt.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Bt,Et.width,Et.height,dt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Et.width,Et.height,dt.depth,Tt,Yt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Bt,Et.width,Et.height,dt.depth,0,Tt,Yt,Et.data)}else{U&&gt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,Qt[0].width,Qt[0].height);for(let ft=0,st=Qt.length;ft<st;ft++)Et=Qt[ft],y.format!==Fn?Tt!==null?U?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Et.width,Et.height,Tt,Yt,Et.data):e.texImage2D(i.TEXTURE_2D,ft,Bt,Et.width,Et.height,0,Tt,Yt,Et.data)}else if(y.isDataArrayTexture)if(U){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Bt,dt.width,dt.height,dt.depth),Mt)if(y.layerUpdates.size>0){const ft=ch(dt.width,dt.height,y.format,y.type);for(const st of y.layerUpdates){const Ft=dt.data.subarray(st*ft/dt.data.BYTES_PER_ELEMENT,(st+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,dt.width,dt.height,1,Tt,Yt,Ft)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Yt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,dt.width,dt.height,dt.depth,0,Tt,Yt,dt.data);else if(y.isData3DTexture)U?(gt&&e.texStorage3D(i.TEXTURE_3D,Pt,Bt,dt.width,dt.height,dt.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Yt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,dt.width,dt.height,dt.depth,0,Tt,Yt,dt.data);else if(y.isFramebufferTexture){if(gt)if(U)e.texStorage2D(i.TEXTURE_2D,Pt,Bt,dt.width,dt.height);else{let ft=dt.width,st=dt.height;for(let Ft=0;Ft<Pt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Bt,ft,st,0,Tt,Yt,null),ft>>=1,st>>=1}}else if(Qt.length>0){if(U&&gt){const ft=Zt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ft.width,ft.height)}for(let ft=0,st=Qt.length;ft<st;ft++)Et=Qt[ft],U?Mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt,Yt,Et):e.texImage2D(i.TEXTURE_2D,ft,Bt,Tt,Yt,Et);y.generateMipmaps=!1}else if(U){if(gt){const ft=Zt(dt);e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ft.width,ft.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Yt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Tt,Yt,dt);m(y)&&p($),Ot.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,B){if(y.image.length!==6)return;const $=z(T,y),at=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const J=n.get(at);if(at.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Ot=ce.getPrimaries(ce.workingColorSpace),_t=y.colorSpace===Ei?null:ce.getPrimaries(y.colorSpace),Ut=y.colorSpace===Ei||Ot===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,dt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let st=0;st<6;st++)!Nt&&!dt?Tt[st]=_(y.image[st],!0,s.maxCubemapSize):Tt[st]=dt?y.image[st].image:y.image[st],Tt[st]=Kt(y,Tt[st]);const Yt=Tt[0],Bt=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),Qt=M(y.internalFormat,Bt,Et,y.colorSpace),U=y.isVideoTexture!==!0,gt=J.__version===void 0||$===!0,Mt=at.dataReady;let Pt=R(y,Yt);Gt(i.TEXTURE_CUBE_MAP,y);let ft;if(Nt){U&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Qt,Yt.width,Yt.height);for(let st=0;st<6;st++){ft=Tt[st].mipmaps;for(let Ft=0;Ft<ft.length;Ft++){const Jt=ft[Ft];y.format!==Fn?Bt!==null?U?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Jt.width,Jt.height,Bt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Qt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Jt.width,Jt.height,Bt,Et,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Qt,Jt.width,Jt.height,0,Bt,Et,Jt.data)}}}else{if(ft=y.mipmaps,U&&gt){ft.length>0&&Pt++;const st=Zt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(dt){U?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt[st].width,Tt[st].height,Bt,Et,Tt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Tt[st].width,Tt[st].height,0,Bt,Et,Tt[st].data);for(let Ft=0;Ft<ft.length;Ft++){const Te=ft[Ft].image[st].image;U?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Te.width,Te.height,Bt,Et,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Qt,Te.width,Te.height,0,Bt,Et,Te.data)}}else{U?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Bt,Et,Tt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Bt,Et,Tt[st]);for(let Ft=0;Ft<ft.length;Ft++){const Jt=ft[Ft];U?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Bt,Et,Jt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Qt,Bt,Et,Jt.image[st])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=at.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function mt(T,y,B,$,at,J){const Ot=r.convert(B.format,B.colorSpace),_t=r.convert(B.type),Ut=M(B.internalFormat,Ot,_t,B.colorSpace),Nt=n.get(y),dt=n.get(B);if(dt.__renderTarget=y,!Nt.__hasExternalTextures){const Tt=Math.max(1,y.width>>J),Yt=Math.max(1,y.height>>J);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,J,Ut,Tt,Yt,y.depth,0,Ot,_t,null):e.texImage2D(at,J,Ut,Tt,Yt,0,Ot,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ut(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,at,dt.__webglTexture,0,vt(y)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,at,dt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(T,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const $=y.depthTexture,at=$&&$.isDepthTexture?$.type:null,J=v(y.stencilBuffer,at),Ot=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=vt(y);ut(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,J,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,T)}else{const $=y.textures;for(let at=0;at<$.length;at++){const J=$[at],Ot=r.convert(J.format,J.colorSpace),_t=r.convert(J.type),Ut=M(J.internalFormat,Ot,_t,J.colorSpace),Nt=vt(y);B&&ut(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ut,y.width,y.height):ut(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Ut,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const at=$.__webglTexture,J=vt(y);if(y.depthTexture.format===dr)ut(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(y.depthTexture.format===fr)ut(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function $t(T){const y=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",at)};$.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=T.texture.mipmaps;$&&$.length>0?At(y.__webglFramebuffer[0],T):At(y.__webglFramebuffer,T)}else if(B){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),It(y.__webglDepthbuffer[$],T,!1);else{const at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}else{const $=T.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),It(y.__webglDepthbuffer,T,!1);else{const at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,y,B){const $=n.get(T);y!==void 0&&mt($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(T)}function L(T){const y=T.texture,B=n.get(T),$=n.get(y);T.addEventListener("dispose",P);const at=T.textures,J=T.isWebGLCubeRenderTarget===!0,Ot=at.length>1;if(Ot||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[_t]=[];for(let Ut=0;Ut<y.mipmaps.length;Ut++)B.__webglFramebuffer[_t][Ut]=i.createFramebuffer()}else B.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)B.__webglFramebuffer[_t]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let _t=0,Ut=at.length;_t<Ut;_t++){const Nt=n.get(at[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ut(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<at.length;_t++){const Ut=at[_t];B.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);const Nt=r.convert(Ut.format,Ut.colorSpace),dt=r.convert(Ut.type),Tt=M(Ut.internalFormat,Nt,dt,Ut.colorSpace,T.isXRRenderTarget===!0),Yt=vt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),It(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ut=0;Ut<y.mipmaps.length;Ut++)mt(B.__webglFramebuffer[_t][Ut],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut);else mt(B.__webglFramebuffer[_t],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let _t=0,Ut=at.length;_t<Ut;_t++){const Nt=at[_t],dt=n.get(Nt);let Tt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Tt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,dt.__webglTexture),Gt(Tt,Nt),mt(B.__webglFramebuffer,T,Nt,i.COLOR_ATTACHMENT0+_t,Tt,0),m(Nt)&&p(Tt)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_t=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),Gt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let Ut=0;Ut<y.mipmaps.length;Ut++)mt(B.__webglFramebuffer[Ut],T,y,i.COLOR_ATTACHMENT0,_t,Ut);else mt(B.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,_t,0);m(y)&&p(_t),e.unbindTexture()}T.depthBuffer&&$t(T)}function ot(T){const y=T.textures;for(let B=0,$=y.length;B<$;B++){const at=y[B];if(m(at)){const J=b(T),Ot=n.get(at).__webglTexture;e.bindTexture(J,Ot),p(J),e.unbindTexture()}}}const it=[],nt=[];function tt(T){if(T.samples>0){if(ut(T)===!1){const y=T.textures,B=T.width,$=T.height;let at=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(T),_t=y.length>1;if(_t)for(let Nt=0;Nt<y.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ut=T.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Nt]);const dt=n.get(y[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,at,i.NEAREST),l===!0&&(it.length=0,nt.length=0,it.push(i.COLOR_ATTACHMENT0+Nt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(it.push(J),nt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Nt=0;Nt<y.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Nt]);const dt=n.get(y[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(T){return Math.min(s.maxSamples,T.samples)}function ut(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Kt(T,y){const B=T.colorSpace,$=T.format,at=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Is&&B!==Ei&&(ce.getTransfer(B)===Se?($!==Fn||at!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Zt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=ut}function fv(i,t){function e(n,s=Ei){let r;const o=ce.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return i.BYTE;if(n===nu)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===ou)return i.RGB;if(n===Fn)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===lu)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===nl)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===xl||n===yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Sl||n===El||n===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Su(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends Bs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new gv,p={},b=e.getContextAttributes();let M=null,v=null;const R=[],C=[],P=new ct;let I=null;const E=new hn;E.viewport=new ge;const x=new hn;x.viewport=new ge;const A=[E,x],D=new Fp;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=R[G];return et===void 0&&(et=new Ma,R[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=R[G];return et===void 0&&(et=new Ma,R[G]=et),et.getGripSpace()},this.getHand=function(G){let et=R[G];return et===void 0&&(et=new Ma,R[G]=et),et.getHandSpace()};function H(G){const et=C.indexOf(G.inputSource);if(et===-1)return;const mt=R[et];mt!==void 0&&(mt.update(G.inputSource,G.frame,c||o),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let G=0;G<R.length;G++){const et=C[G];et!==null&&(C[G]=null,R[G].disconnect(et))}O=null,V=null,m.reset();for(const G in p)delete p[G];t.setRenderTarget(M),f=null,d=null,u=null,s=null,v=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,It=null,At=null;b.depth&&(At=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=b.stencil?fr:dr,It=b.stencil?ur:Ki);const $t={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ci(d.textureWidth,d.textureHeight,{format:Fn,type:Yn,depthTexture:new Mu(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ci(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(G){for(let et=0;et<G.removed.length;et++){const mt=G.removed[et],It=C.indexOf(mt);It>=0&&(C[It]=null,R[It].disconnect(mt))}for(let et=0;et<G.added.length;et++){const mt=G.added[et];let It=C.indexOf(mt);if(It===-1){for(let $t=0;$t<R.length;$t++)if($t>=C.length){C.push(mt),It=$t;break}else if(C[$t]===null){C[$t]=mt,It=$t;break}if(It===-1)break}const At=R[It];At&&At.connect(mt)}}const W=new S,ht=new S;function yt(G,et,mt){W.setFromMatrixPosition(et.matrixWorld),ht.setFromMatrixPosition(mt.matrixWorld);const It=W.distanceTo(ht),At=et.projectionMatrix.elements,$t=mt.projectionMatrix.elements,de=At[14]/(At[10]-1),L=At[14]/(At[10]+1),ot=(At[9]+1)/At[5],it=(At[9]-1)/At[5],nt=(At[8]-1)/At[0],tt=($t[8]+1)/$t[0],vt=de*nt,ut=de*tt,xt=It/(-nt+tt),Kt=xt*-nt;if(et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Kt),G.translateZ(xt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),At[10]===-1)G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Zt=de+xt,T=L+xt,y=vt-Kt,B=ut+(It-Kt),$=ot*L/T*Zt,at=it*L/T*Zt;G.projectionMatrix.makePerspective(y,B,$,at,Zt,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Rt(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let et=G.near,mt=G.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),D.near=x.near=E.near=et,D.far=x.far=E.far=mt,(O!==D.near||V!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,V=D.far),D.layers.mask=G.layers.mask|6,E.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;const It=G.parent,At=D.cameras;Rt(D,It);for(let $t=0;$t<At.length;$t++)Rt(At[$t],It);At.length===2?yt(D,E,x):D.projectionMatrix.copy(E.projectionMatrix),Gt(G,D,It)};function Gt(G,et,mt){mt===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=pr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(G){return p[G]};let z=null;function Q(G,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let It=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,It=!0);for(let L=0;L<mt.length;L++){const ot=mt[L];let it=null;if(f!==null)it=f.getViewport(ot);else{const tt=u.getViewSubImage(d,ot);it=tt.viewport,L===0&&(t.setRenderTargetTextures(v,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(v))}let nt=A[L];nt===void 0&&(nt=new hn,nt.layers.enable(L),nt.viewport=new ge,A[L]=nt),nt.matrix.fromArray(ot.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ot.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(it.x,it.y,it.width,it.height),L===0&&(D.matrix.copy(nt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),It===!0&&D.cameras.push(nt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(mt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(At&&At.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<mt.length;L++){const ot=mt[L].camera;if(ot){let it=p[ot];it||(it=new Su,p[ot]=it);const nt=u.getCameraImage(ot);it.sourceTexture=nt}}}}for(let mt=0;mt<R.length;mt++){const It=C[mt],At=R[mt];It!==null&&At!==void 0&&At.update(It,et,c||o)}z&&z(G,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const wt=new Nu;wt.setAnimationLoop(Q),this.setAnimationLoop=function(G){z=G},this.dispose=function(){}}}const zi=new qn,vv=new he;function xv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,zi.copy(v),zi.x*=-1,zi.y*=-1,zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(zi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const v=M.program;n.uniformBlockBinding(b,v)}function c(b,M){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(b,R);const C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const M=u();b.__bindingPointIndex=M;const v=i.createBuffer(),R=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],v=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,P=v.length;C<P;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,x=I.length;E<x;E++){const A=I[E];if(f(A,C,E,R)===!0){const D=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let H=0;H<O.length;H++){const k=O[H],Z=_(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+V,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,v,R){const C=b.value,P=M+"_"+v;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{const I=R[P];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return R[P]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(b){const M=b.uniforms;let v=0;const R=16;for(let P=0,I=M.length;P<I;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,A=E.length;x<A;x++){const D=E[x],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,H=O.length;V<H;V++){const k=O[V],Z=_(k),W=v%R,ht=W%Z.boundary,yt=W+ht;v+=ht,yt!==0&&R-yt<Z.storage&&(v+=R-yt),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Z.storage}}}const C=v%R;return C>0&&(v+=R-C),b.__size=v,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Mv{constructor(t={}){const{canvas:e=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=Ee;let C=0,P=0,I=null,E=-1,x=null;const A=new ge,D=new ge;let O=null;const V=new jt(0);let H=0,k=e.width,Z=e.height,W=1,ht=null,yt=null;const Rt=new ge(0,0,k,Z),Gt=new ge(0,0,k,Z);let z=!1;const Q=new tc;let wt=!1,G=!1;const et=new he,mt=new S,It=new ge,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function de(){return I===null?W:1}let L=n;function ot(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){const N="webgl2";if(L=ot(N,w),L===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let it,nt,tt,vt,ut,xt,Kt,Zt,T,y,B,$,at,J,Ot,_t,Ut,Nt,dt,Tt,Yt,Bt,Et,Qt;function U(){it=new Lg(L),it.init(),Bt=new fv(L,it),nt=new wg(L,it,t,Bt),tt=new uv(L,it),nt.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),vt=new Ug(L),ut=new j_,xt=new dv(L,it,tt,ut,nt,Bt,vt),Kt=new Tg(v),Zt=new Pg(v),T=new Hp(L),Et=new Sg(L,T),y=new Ig(L,T,vt,Et),B=new Fg(L,y,T,vt),dt=new Ng(L,nt,xt),_t=new bg(ut),$=new J_(v,Kt,Zt,it,nt,Et,_t),at=new xv(v,ut),J=new tv,Ot=new ov(it),Nt=new Mg(v,Kt,Zt,tt,B,f,l),Ut=new cv(v,B,nt),Qt=new yv(L,vt,nt,tt),Tt=new Eg(L,it,vt),Yt=new Dg(L,it,vt),vt.programs=$.programs,v.capabilities=nt,v.extensions=it,v.properties=ut,v.renderLists=J,v.shadowMap=Ut,v.state=tt,v.info=vt}U();const gt=new _v(v,L);this.xr=gt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(k,Z,!1))},this.getSize=function(w){return w.set(k,Z)},this.setSize=function(w,N,Y=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,Z=N,e.width=Math.floor(w*W),e.height=Math.floor(N*W),Y===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(k*W,Z*W).floor()},this.setDrawingBufferSize=function(w,N,Y){k=w,Z=N,W=Y,e.width=Math.floor(w*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,N,Y,q){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,N,Y,q),tt.viewport(A.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Gt)},this.setScissor=function(w,N,Y,q){w.isVector4?Gt.set(w.x,w.y,w.z,w.w):Gt.set(w,N,Y,q),tt.scissor(D.copy(Gt).multiplyScalar(W).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){tt.setScissorTest(z=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,Y=!0){let q=0;if(w){let F=!1;if(I!==null){const pt=I.texture.format;F=pt===$l||pt===ql||pt===Yl}if(F){const pt=I.texture.type,bt=pt===Yn||pt===Ki||pt===hr||pt===ur||pt===Wl||pt===Xl,Dt=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Wt=Dt.r,qt=Dt.g,Ht=Dt.b;bt?(g[0]=Wt,g[1]=qt,g[2]=Ht,g[3]=Ct,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Wt,_[1]=qt,_[2]=Ht,_[3]=Ct,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}N&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Nt.dispose(),J.dispose(),Ot.dispose(),ut.dispose(),Kt.dispose(),Zt.dispose(),B.dispose(),Et.dispose(),Qt.dispose(),$.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Bn),gt.removeEventListener("sessionend",vc),Ii.stop()};function Mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=vt.autoReset,N=Ut.enabled,Y=Ut.autoUpdate,q=Ut.needsUpdate,F=Ut.type;U(),vt.autoReset=w,Ut.enabled=N,Ut.autoUpdate=Y,Ut.needsUpdate=q,Ut.type=F}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const N=w.target;N.removeEventListener("dispose",st),Ft(N)}function Ft(w){Jt(w),ut.remove(w)}function Jt(w){const N=ut.get(w).programs;N!==void 0&&(N.forEach(function(Y){$.releaseProgram(Y)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,Y,q,F,pt){N===null&&(N=At);const bt=F.isMesh&&F.matrixWorld.determinant()<0,Dt=pd(w,N,Y,q,F);tt.setMaterial(q,bt);let Ct=Y.index,Wt=1;if(q.wireframe===!0){if(Ct=y.getWireframeAttribute(Y),Ct===void 0)return;Wt=2}const qt=Y.drawRange,Ht=Y.attributes.position;let oe=qt.start*Wt,Me=(qt.start+qt.count)*Wt;pt!==null&&(oe=Math.max(oe,pt.start*Wt),Me=Math.min(Me,(pt.start+pt.count)*Wt)),Ct!==null?(oe=Math.max(oe,0),Me=Math.min(Me,Ct.count)):Ht!=null&&(oe=Math.max(oe,0),Me=Math.min(Me,Ht.count));const Ue=Me-oe;if(Ue<0||Ue===1/0)return;Et.setup(F,q,Dt,Y,Ct);let Pe,we=Tt;if(Ct!==null&&(Pe=T.get(Ct),we=Yt,we.setIndex(Pe)),F.isMesh)q.wireframe===!0?(tt.setLineWidth(q.wireframeLinewidth*de()),we.setMode(L.LINES)):we.setMode(L.TRIANGLES);else if(F.isLine){let kt=q.linewidth;kt===void 0&&(kt=1),tt.setLineWidth(kt*de()),F.isLineSegments?we.setMode(L.LINES):F.isLineLoop?we.setMode(L.LINE_LOOP):we.setMode(L.LINE_STRIP)}else F.isPoints?we.setMode(L.POINTS):F.isSprite&&we.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))we.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const kt=F._multiDrawStarts,Le=F._multiDrawCounts,le=F._multiDrawCount,fn=Ct?T.get(Ct).bytesPerElement:1,is=ut.get(q).currentProgram.getUniforms();for(let pn=0;pn<le;pn++)is.setValue(L,"_gl_DrawID",pn),we.render(kt[pn]/fn,Le[pn])}else if(F.isInstancedMesh)we.renderInstances(oe,Ue,F.count);else if(Y.isInstancedBufferGeometry){const kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Le=Math.min(Y.instanceCount,kt);we.renderInstances(oe,Ue,Le)}else we.render(oe,Ue)};function Te(w,N,Y){w.transparent===!0&&w.side===Ne&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Rr(w,N,Y),w.side=Ri,w.needsUpdate=!0,Rr(w,N,Y),w.side=Ne):Rr(w,N,Y)}this.compile=function(w,N,Y=null){Y===null&&(Y=w),p=Ot.get(Y),p.init(N),M.push(p),Y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==Y&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const q=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const pt=F.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Dt=pt[bt];Te(Dt,Y,F),q.add(Dt)}else Te(pt,Y,F),q.add(pt)}),p=M.pop(),q},this.compileAsync=function(w,N,Y=null){const q=this.compile(w,N,Y);return new Promise(F=>{function pt(){if(q.forEach(function(bt){ut.get(bt).currentProgram.isReady()&&q.delete(bt)}),q.size===0){F(w);return}setTimeout(pt,10)}it.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let fe=null;function Jn(w){fe&&fe(w)}function Bn(){Ii.stop()}function vc(){Ii.start()}const Ii=new Nu;Ii.setAnimationLoop(Jn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(w){fe=w,gt.setAnimationLoop(w),w===null?Ii.stop():Ii.start()},gt.addEventListener("sessionstart",Bn),gt.addEventListener("sessionend",vc),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(N),N=gt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,I),p=Ot.get(w,M.length),p.init(N),M.push(p),et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(et,kn,N.reversedDepth),G=this.localClippingEnabled,wt=_t.init(this.clippingPlanes,G),m=J.get(w,b.length),m.init(),b.push(m),gt.enabled===!0&&gt.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&jo(pt,N,-1/0,v.sortObjects)}jo(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ht,yt),$t=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,$t&&Nt.addToRenderList(m,w),this.info.render.frame++,wt===!0&&_t.beginShadows();const Y=p.state.shadowsArray;Ut.render(Y,w,N),wt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const pt=N.cameras;if(F.length>0)for(let bt=0,Dt=pt.length;bt<Dt;bt++){const Ct=pt[bt];yc(q,F,w,Ct)}$t&&Nt.render(w);for(let bt=0,Dt=pt.length;bt<Dt;bt++){const Ct=pt[bt];xc(m,w,Ct,Ct.viewport)}}else F.length>0&&yc(q,F,w,N),$t&&Nt.render(w),xc(m,w,N);I!==null&&P===0&&(xt.updateMultisampleRenderTarget(I),xt.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,N),Et.resetDefaultState(),E=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],wt===!0&&_t.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function jo(w,N,Y,q){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){q&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const bt=B.update(w),Dt=w.material;Dt.visible&&m.push(w,bt,Dt,Y,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const bt=B.update(w),Dt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),It.copy(bt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(Dt)){const Ct=bt.groups;for(let Wt=0,qt=Ct.length;Wt<qt;Wt++){const Ht=Ct[Wt],oe=Dt[Ht.materialIndex];oe&&oe.visible&&m.push(w,bt,oe,Y,It.z,Ht)}}else Dt.visible&&m.push(w,bt,Dt,Y,It.z,null)}}const pt=w.children;for(let bt=0,Dt=pt.length;bt<Dt;bt++)jo(pt[bt],N,Y,q)}function xc(w,N,Y,q){const F=w.opaque,pt=w.transmissive,bt=w.transparent;p.setupLightsView(Y),wt===!0&&_t.setGlobalState(v.clippingPlanes,Y),q&&tt.viewport(A.copy(q)),F.length>0&&Ar(F,N,Y),pt.length>0&&Ar(pt,N,Y),bt.length>0&&Ar(bt,N,Y),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function yc(w,N,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ci(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Os:Yn,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const pt=p.state.transmissionRenderTarget[q.id],bt=q.viewport||A;pt.setSize(bt.z*v.transmissionResolutionScale,bt.w*v.transmissionResolutionScale);const Dt=v.getRenderTarget(),Ct=v.getActiveCubeFace(),Wt=v.getActiveMipmapLevel();v.setRenderTarget(pt),v.getClearColor(V),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Nt.render(Y);const qt=v.toneMapping;v.toneMapping=Ti;const Ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),wt===!0&&_t.setGlobalState(v.clippingPlanes,q),Ar(w,Y,q),xt.updateMultisampleRenderTarget(pt),xt.updateRenderTargetMipmap(pt),it.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Me=0,Ue=N.length;Me<Ue;Me++){const Pe=N[Me],we=Pe.object,kt=Pe.geometry,Le=Pe.material,le=Pe.group;if(Le.side===Ne&&we.layers.test(q.layers)){const fn=Le.side;Le.side=rn,Le.needsUpdate=!0,Mc(we,Y,q,kt,Le,le),Le.side=fn,Le.needsUpdate=!0,oe=!0}}oe===!0&&(xt.updateMultisampleRenderTarget(pt),xt.updateRenderTargetMipmap(pt))}v.setRenderTarget(Dt,Ct,Wt),v.setClearColor(V,H),Ht!==void 0&&(q.viewport=Ht),v.toneMapping=qt}function Ar(w,N,Y){const q=N.isScene===!0?N.overrideMaterial:null;for(let F=0,pt=w.length;F<pt;F++){const bt=w[F],Dt=bt.object,Ct=bt.geometry,Wt=bt.group;let qt=bt.material;qt.allowOverride===!0&&q!==null&&(qt=q),Dt.layers.test(Y.layers)&&Mc(Dt,N,Y,Ct,qt,Wt)}}function Mc(w,N,Y,q,F,pt){w.onBeforeRender(v,N,Y,q,F,pt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,N,Y,q,w,pt),F.transparent===!0&&F.side===Ne&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,v.renderBufferDirect(Y,N,q,F,w,pt),F.side=Ri,F.needsUpdate=!0,v.renderBufferDirect(Y,N,q,F,w,pt),F.side=Ne):v.renderBufferDirect(Y,N,q,F,w,pt),w.onAfterRender(v,N,Y,q,F,pt)}function Rr(w,N,Y){N.isScene!==!0&&(N=At);const q=ut.get(w),F=p.state.lights,pt=p.state.shadowsArray,bt=F.state.version,Dt=$.getParameters(w,F.state,pt,N,Y),Ct=$.getProgramCacheKey(Dt);let Wt=q.programs;q.environment=w.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(w.isMeshStandardMaterial?Zt:Kt).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",st),Wt=new Map,q.programs=Wt);let qt=Wt.get(Ct);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===bt)return Ec(w,Dt),qt}else Dt.uniforms=$.getUniforms(w),w.onBeforeCompile(Dt,v),qt=$.acquireProgram(Dt,Ct),Wt.set(Ct,qt),q.uniforms=Dt.uniforms;const Ht=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=_t.uniform),Ec(w,Dt),q.needsLights=gd(w),q.lightsStateVersion=bt,q.needsLights&&(Ht.ambientLightColor.value=F.state.ambient,Ht.lightProbe.value=F.state.probe,Ht.directionalLights.value=F.state.directional,Ht.directionalLightShadows.value=F.state.directionalShadow,Ht.spotLights.value=F.state.spot,Ht.spotLightShadows.value=F.state.spotShadow,Ht.rectAreaLights.value=F.state.rectArea,Ht.ltc_1.value=F.state.rectAreaLTC1,Ht.ltc_2.value=F.state.rectAreaLTC2,Ht.pointLights.value=F.state.point,Ht.pointLightShadows.value=F.state.pointShadow,Ht.hemisphereLights.value=F.state.hemi,Ht.directionalShadowMap.value=F.state.directionalShadowMap,Ht.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ht.spotShadowMap.value=F.state.spotShadowMap,Ht.spotLightMatrix.value=F.state.spotLightMatrix,Ht.spotLightMap.value=F.state.spotLightMap,Ht.pointShadowMap.value=F.state.pointShadowMap,Ht.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function Sc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=uo.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Ec(w,N){const Y=ut.get(w);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function pd(w,N,Y,q,F){N.isScene!==!0&&(N=At),xt.resetTextureUnits();const pt=N.fog,bt=q.isMeshStandardMaterial?N.environment:null,Dt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Is,Ct=(q.isMeshStandardMaterial?Zt:Kt).get(q.envMap||bt),Wt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,Me=!!Y.morphAttributes.color;let Ue=Ti;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const Pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,we=Pe!==void 0?Pe.length:0,kt=ut.get(q),Le=p.state.lights;if(wt===!0&&(G===!0||w!==x)){const Qe=w===x&&q.id===E;_t.setState(q,w,Qe)}let le=!1;q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Le.state.version||kt.outputColorSpace!==Dt||F.isBatchedMesh&&kt.batching===!1||!F.isBatchedMesh&&kt.batching===!0||F.isBatchedMesh&&kt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&kt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&kt.instancing===!1||!F.isInstancedMesh&&kt.instancing===!0||F.isSkinnedMesh&&kt.skinning===!1||!F.isSkinnedMesh&&kt.skinning===!0||F.isInstancedMesh&&kt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&kt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&kt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&kt.instancingMorph===!1&&F.morphTexture!==null||kt.envMap!==Ct||q.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==_t.numPlanes||kt.numIntersection!==_t.numIntersection)||kt.vertexAlphas!==Wt||kt.vertexTangents!==qt||kt.morphTargets!==Ht||kt.morphNormals!==oe||kt.morphColors!==Me||kt.toneMapping!==Ue||kt.morphTargetsCount!==we)&&(le=!0):(le=!0,kt.__version=q.version);let fn=kt.currentProgram;le===!0&&(fn=Rr(q,N,F));let is=!1,pn=!1,Vs=!1;const Ie=fn.getUniforms(),vn=kt.uniforms;if(tt.useProgram(fn.program)&&(is=!0,pn=!0,Vs=!0),q.id!==E&&(E=q.id,pn=!0),is||x!==w){tt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(L,"projectionMatrix",w.projectionMatrix),Ie.setValue(L,"viewMatrix",w.matrixWorldInverse);const cn=Ie.map.cameraPosition;cn!==void 0&&cn.setValue(L,mt.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,pn=!0,Vs=!0)}if(F.isSkinnedMesh){Ie.setOptional(L,F,"bindMatrix"),Ie.setOptional(L,F,"bindMatrixInverse");const Qe=F.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ie.setValue(L,"boneTexture",Qe.boneTexture,xt))}F.isBatchedMesh&&(Ie.setOptional(L,F,"batchingTexture"),Ie.setValue(L,"batchingTexture",F._matricesTexture,xt),Ie.setOptional(L,F,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",F._indirectTexture,xt),Ie.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",F._colorsTexture,xt));const xn=Y.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&dt.update(F,Y,fn),(pn||kt.receiveShadow!==F.receiveShadow)&&(kt.receiveShadow=F.receiveShadow,Ie.setValue(L,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vn.envMap.value=Ct,vn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(vn.envMapIntensity.value=N.environmentIntensity),pn&&(Ie.setValue(L,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&md(vn,Vs),pt&&q.fog===!0&&at.refreshFogUniforms(vn,pt),at.refreshMaterialUniforms(vn,q,W,Z,p.state.transmissionRenderTarget[w.id]),uo.upload(L,Sc(kt),vn,xt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(uo.upload(L,Sc(kt),vn,xt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(L,"center",F.center),Ie.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ie.setValue(L,"normalMatrix",F.normalMatrix),Ie.setValue(L,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Qe=q.uniformsGroups;for(let cn=0,Qo=Qe.length;cn<Qo;cn++){const Di=Qe[cn];Qt.update(Di,fn),Qt.bind(Di,fn)}}return fn}function md(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function gd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,N,Y){const q=ut.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ut.get(w.texture).__webglTexture=N,ut.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const Y=ut.get(w);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0};const _d=L.createFramebuffer();this.setRenderTarget=function(w,N=0,Y=0){I=w,C=N,P=Y;let q=!0,F=null,pt=!1,bt=!1;if(w){const Ct=ut.get(w);if(Ct.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)xt.setupRenderTarget(w);else if(Ct.__hasExternalTextures)xt.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ht=w.depthTexture;if(Ct.__boundDepthTexture!==Ht){if(Ht!==null&&ut.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(bt=!0);const qt=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][Y]:F=qt[N],pt=!0):w.samples>0&&xt.useMultisampledRTT(w)===!1?F=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[Y]:F=qt,A.copy(w.viewport),D.copy(w.scissor),O=w.scissorTest}else A.copy(Rt).multiplyScalar(W).floor(),D.copy(Gt).multiplyScalar(W).floor(),O=z;if(Y!==0&&(F=_d),tt.bindFramebuffer(L.FRAMEBUFFER,F)&&q&&tt.drawBuffers(w,F),tt.viewport(A),tt.scissor(D),tt.setScissorTest(O),pt){const Ct=ut.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,Y)}else if(bt){const Ct=N;for(let Wt=0;Wt<w.textures.length;Wt++){const qt=ut.get(w.textures[Wt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,Y,Ct)}}else if(w!==null&&Y!==0){const Ct=ut.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(w,N,Y,q,F,pt,bt,Dt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){tt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Wt=w.textures[Dt],qt=Wt.format,Ht=Wt.type;if(!nt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-q&&Y>=0&&Y<=w.height-F&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Dt),L.readPixels(N,Y,q,F,Bt.convert(qt),Bt.convert(Ht),pt))}finally{const Wt=I!==null?ut.get(I).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,N,Y,q,F,pt,bt,Dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct)if(N>=0&&N<=w.width-q&&Y>=0&&Y<=w.height-F){tt.bindFramebuffer(L.FRAMEBUFFER,Ct);const Wt=w.textures[Dt],qt=Wt.format,Ht=Wt.type;if(!nt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Dt),L.readPixels(N,Y,q,F,Bt.convert(qt),Bt.convert(Ht),0);const Me=I!==null?ut.get(I).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,Me);const Ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ef(L,Ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(oe),L.deleteSync(Ue),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,Y=0){const q=Math.pow(2,-Y),F=Math.floor(w.image.width*q),pt=Math.floor(w.image.height*q),bt=N!==null?N.x:0,Dt=N!==null?N.y:0;xt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,bt,Dt,F,pt),tt.unbindTexture()};const vd=L.createFramebuffer(),xd=L.createFramebuffer();this.copyTextureToTexture=function(w,N,Y=null,q=null,F=0,pt=null){pt===null&&(F!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=F,F=0):pt=0);let bt,Dt,Ct,Wt,qt,Ht,oe,Me,Ue;const Pe=w.isCompressedTexture?w.mipmaps[pt]:w.image;if(Y!==null)bt=Y.max.x-Y.min.x,Dt=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Wt=Y.min.x,qt=Y.min.y,Ht=Y.isBox3?Y.min.z:0;else{const xn=Math.pow(2,-F);bt=Math.floor(Pe.width*xn),Dt=Math.floor(Pe.height*xn),w.isDataArrayTexture?Ct=Pe.depth:w.isData3DTexture?Ct=Math.floor(Pe.depth*xn):Ct=1,Wt=0,qt=0,Ht=0}q!==null?(oe=q.x,Me=q.y,Ue=q.z):(oe=0,Me=0,Ue=0);const we=Bt.convert(N.format),kt=Bt.convert(N.type);let Le;N.isData3DTexture?(xt.setTexture3D(N,0),Le=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(xt.setTexture2DArray(N,0),Le=L.TEXTURE_2D_ARRAY):(xt.setTexture2D(N,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const le=L.getParameter(L.UNPACK_ROW_LENGTH),fn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),is=L.getParameter(L.UNPACK_SKIP_PIXELS),pn=L.getParameter(L.UNPACK_SKIP_ROWS),Vs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Ie=w.isDataArrayTexture||w.isData3DTexture,vn=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const xn=ut.get(w),Qe=ut.get(N),cn=ut.get(xn.__renderTarget),Qo=ut.get(Qe.__renderTarget);tt.bindFramebuffer(L.READ_FRAMEBUFFER,cn.__webglFramebuffer),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qo.__webglFramebuffer);for(let Di=0;Di<Ct;Di++)Ie&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(w).__webglTexture,F,Ht+Di),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(N).__webglTexture,pt,Ue+Di)),L.blitFramebuffer(Wt,qt,bt,Dt,oe,Me,bt,Dt,L.DEPTH_BUFFER_BIT,L.NEAREST);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||ut.has(w)){const xn=ut.get(w),Qe=ut.get(N);tt.bindFramebuffer(L.READ_FRAMEBUFFER,vd),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,xd);for(let cn=0;cn<Ct;cn++)Ie?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,F,Ht+cn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,F),vn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qe.__webglTexture,pt,Ue+cn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qe.__webglTexture,pt),F!==0?L.blitFramebuffer(Wt,qt,bt,Dt,oe,Me,bt,Dt,L.COLOR_BUFFER_BIT,L.NEAREST):vn?L.copyTexSubImage3D(Le,pt,oe,Me,Ue+cn,Wt,qt,bt,Dt):L.copyTexSubImage2D(Le,pt,oe,Me,Wt,qt,bt,Dt);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Le,pt,oe,Me,Ue,bt,Dt,Ct,we,kt,Pe.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,pt,oe,Me,Ue,bt,Dt,Ct,we,Pe.data):L.texSubImage3D(Le,pt,oe,Me,Ue,bt,Dt,Ct,we,kt,Pe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,oe,Me,bt,Dt,we,kt,Pe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,oe,Me,Pe.width,Pe.height,we,Pe.data):L.texSubImage2D(L.TEXTURE_2D,pt,oe,Me,bt,Dt,we,kt,Pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,is),L.pixelStorei(L.UNPACK_SKIP_ROWS,pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vs),pt===0&&N.generateMipmaps&&L.generateMipmap(Le),tt.unbindTexture()},this.initRenderTarget=function(w){ut.get(w).__webglFramebuffer===void 0&&xt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?xt.setTextureCube(w,0):w.isData3DTexture?xt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?xt.setTexture2DArray(w,0):xt.setTexture2D(w,0),tt.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,tt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}function lc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Be;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Uh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Uh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Uh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new dn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}class Zo extends j{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new hn;const n=this,s=e.color!==void 0?new jt(e.color):new jt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||Zo.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Si,u=new S,d=new S,f=new S,g=new he,_=new S(0,0,-1),m=new ge,p=new S,b=new S,M=new ge,v=new he,R=this.camera,C=new Ci(r,o,{samples:c,type:Os}),P=new bn({name:l.name!==void 0?l.name:"unspecified",uniforms:_u.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});P.uniforms.tDiffuse.value=C.texture,P.uniforms.color.value=s,P.uniforms.textureMatrix.value=v,this.material=P,this.onBeforeRender=function(I,E,x){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(x.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(d,f),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(d),g.extractRotation(x.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),b.subVectors(d,_),b.reflect(u).negate(),b.add(d),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(u),R.lookAt(b),R.far=x.far,R.updateMatrixWorld(),R.projectionMatrix.copy(x.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(R.projectionMatrix),v.multiply(R.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const D=R.projectionMatrix;M.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],M.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],M.z=-1,M.w=(1+D.elements[10])/D.elements[14],m.multiplyScalar(2/m.dot(M)),D.elements[2]=m.x,D.elements[6]=m.y,D.elements[10]=m.z+1-a,D.elements[14]=m.w,n.visible=!1;const O=I.getRenderTarget(),V=I.xr.enabled,H=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(C),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(E,R),I.xr.enabled=V,I.shadowMap.autoUpdate=H,I.setRenderTarget(O);const k=x.viewport;k!==void 0&&I.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()}}}Zo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const Sv=[[-19.45,0,-5.12,.014,20],[-19.41,2.59,-5.15,-.006,20],[-19.49,5.18,-5.13,-.005,20],[-13.3,0,-5.12,3.121,20],[3.7,0,-5.12,3.125,20],[3.73,2.59,-5.13,-.013,20],[13.53,0,-5.12,-.009,20],[13.56,2.59,-5.13,0,20],[-19.45,0,2.08,0,20],[-13.35,0,2.08,.001,20],[.8,0,2.08,.019,40],[.76,2.59,2.09,-.009,40],[3.82,5.18,2.05,.012,20],[12.3,0,2.08,.003,20],[12.31,2.59,2.05,-.011,20],[-21.1,0,9.92,.002,20],[-13.6,0,9.92,-.004,20],[-13.59,2.59,9.92,-.003,20],[-13.61,5.18,9.93,-.004,20],[-21.6,0,12.42,-0,20],[-21.59,2.59,12.42,0,20],[-21.6,5.18,12.42,-.001,20],[-15.4,0,12.42,-.003,20],[4.43,0,12.42,0,20],[13.53,0,12.42,0,20],[-16.4,0,20.12,-.017,40],[-16.36,2.59,20.08,.008,40],[-2.25,0,20.12,.011,20],[3.85,0,20.12,-.017,20],[3.86,2.59,20.14,-.011,20],[13.53,0,20.12,.015,20],[13.5,2.59,20.09,.012,20],[13.49,5.18,20.13,.008,20],[-16.4,0,22.62,-.008,41],[-16.39,2.9,22.61,-.013,40],[-16.43,5.49,22.65,.013,40],[.8,0,22.62,-.012,40],[.8,2.59,22.64,.007,41],[13.53,0,22.62,-.021,20],[-22.6,0,-19.2,1.55,40],[-22.59,2.59,-19.18,1.567,40],[-30.2,0,-18.4,.35,20],[-31.2,0,24.7,-.004,40],[-31.16,2.59,24.68,.01,40],[23.2,0,-28.6,-.013,20],[23.23,2.59,-28.58,.01,20],[23,0,-25.95,-.018,20]],Ev=[["crate_wood",14.3,2.59,11.75,.1],["light_mast",-23.4,0,.5,0],["light_mast",-23.4,0,21.4,0],["light_mast",17,0,-8.7,0],["light_mast",17,0,18.6,0],["light_mast",-20.6,0,-11.6,0],["barrel",-19.6,0,3.85,0],["barrel",-18.9,0,3.95,.7],["pallet_stack",-17.4,0,4,.08],["crate_stack",-14.3,0,8.05,.04],["ibc_tote",-12.95,0,7.95,-.05],["forklift",-8.6,0,4.5,-.22],["pallet",-7.21,.54,4.81,-.22],["crate_wood",-7.21,.68,4.81,-.17],["jersey_barrier",-2.9,0,5.3,.12],["jersey_barrier",5.6,0,5,-.1],["ibc_tote",5.9,0,8.9,.1],["ibc_tote",5.95,0,10.05,-.05],["barrel",4.9,0,9.7,0],["crate_stack",-3.9,0,10.5,.1],["crate_wood",-3.8,0,9.35,-.2],["pallet_stack",-4.4,0,11.8,.02],["cable_reel",4.2,0,10.5,.3],["jersey_barrier",11.6,0,3.95,.03],["ibc_tote",15.2,0,10.2,.1],["traffic_cone",.2,0,6.3,0],["traffic_cone",2.9,0,6.4,0],["traffic_cone",2.9,0,8.8,0],["traffic_cone",.1,0,8.7,0],["sign_post",-4.8,0,3.72,1.571],["pallet_stack",-20.6,0,-.1,.2],["tire_stack",-9.6,0,.2,0],["barrel",4.5,0,.35,0],["barrel",5.2,0,.3,.4],["jersey_barrier",12.2,0,.4,.03],["crate_wood",11.2,0,-3.3,.3],["jersey_barrier",-.9,0,-7.5,.1],["pallet_stack",1.2,0,-9.9,.1],["barrel",2.2,0,-10.3,0],["cable_reel",-18.2,0,-8,.2],["traffic_cone",-6.5,0,-9.9,0],["traffic_cone",-.5,0,-9.9,0],["crate_stack",-10.95,0,18.25,.06],["barrel",-3,0,18.35,0],["tire_stack",10.95,0,18.3,0],["ibc_tote",12,0,18.25,0],["pallet_stack",-12.3,0,18.2,.1],["jersey_barrier",.6,0,15.5,.12],["tire_stack",-8,0,26.9,0],["pallet_stack",8.7,0,27,.3],["crate_wood",-2,0,27,.2],["barrel",11.2,0,27.1,0],["cable_reel",-34.6,0,-22.5,1],["tire_stack",-25.4,0,-26.9,0],["crate_stack",-34.8,0,-13.5,.2],["barrel",-33.6,0,-13,0],["generator",-34.2,0,14.2,.15],["floodlight_stand",-31.4,0,12.7,.55],["tire_stack",-36.6,0,17.2,0],["tire_stack",-36.5,0,18.3,.6],["pallet_stack",-27.8,0,16.6,.4],["crate_wood",-28.6,0,20.6,.1],["ibc_tote",-26.6,0,21.2,0],["jersey_barrier",-34.7,0,3.75,1.651],["jersey_barrier",-33.3,0,8.3,1.511],["jersey_barrier",-30.6,0,10.4,.03],["jersey_barrier",-27.3,0,1.45,.05],["jersey_barrier",-32.2,0,1.45,-.04],["sign_post",-33.2,0,9.6,1.571],["sign_post",-25.3,0,1.1,1.571],["sign_post",-36.6,0,-1.6,1.571],["traffic_cone",-34.6,0,5.6,0],["traffic_cone",-28.3,0,2,0],["traffic_cone",-33.2,0,6.5,0],["traffic_cone",-26.6,0,9.8,0],["traffic_cone",-31.8,0,9.9,0],["light_mast",-27.6,0,-.9,0],["light_mast",-36.3,0,12.4,0],["barrel",-33.9,0,2,0],["pallet_stack",-36.4,0,10.3,.2],["pallet_stack",0,.03,-26.9,.1],["crate_stack",2.9,.03,-15.9,.12],["crate_wood",4.15,.03,-16.3,-.25],["pallet_stack",2,.03,-17.3,1.45],["ibc_tote",6.9,.03,-19.6,.1],["barrel",7.9,.03,-18.5,0],["barrel",6,.03,-18.4,.6],["ibc_tote",-7.6,.03,-16.4,-.08],["barrel",-8.6,.03,-15.3,0],["barrel",-7.9,.03,-15,.9],["forklift",8.3,.03,-13.9,2.75],["tire_stack",-15,.03,-15.6,0],["tire_stack",-14.9,.03,-16.6,.4],["crate_wood",-12.4,.03,-26.9,-.1],["barrel",-10.9,.03,-27,0],["crate_wood",-14.7,.03,-24.6,.3],["pallet",10.6,.03,-13.6,.2],["traffic_cone",-6.6,.03,-12.2,0],["traffic_cone",-.4,.03,-12.3,0],["jersey_barrier",20.5,0,-4.7,1.691],["jersey_barrier",25.3,0,3.1,-.2],["barrel",26.5,0,-1.7,0],["barrel",26.9,0,-1.05,.5],["traffic_cone",22,0,-1.9,0],["traffic_cone",24.2,0,1.7,0],["generator",15,0,-26.6,.06],["floodlight_stand",16.4,0,-23.6,.3],["tire_stack",24.1,0,-9.5,0],["tire_stack",25.05,0,-9.6,.5],["cable_reel",14.3,0,-12.9,.4],["cable_reel",15.6,0,-14.3,1.9],["pallet_stack",20.3,0,-9.3,.1],["crate_wood",19.9,0,-22.6,.3],["barrel",12.75,0,-23.3,0],["barrel",12.9,0,-24.1,0],["light_mast",26.6,0,-28.7,0],["light_mast",26.6,0,26.7,0],["crate_stack",26.4,0,23.6,.2],["ibc_tote",22.6,0,26.3,.05],["pallet_stack",24,0,26.2,.2],["barrel",22.6,0,20.3,0],["barrel",23.4,0,20.4,0],["traffic_cone",28.2,0,18.2,0],["traffic_cone",28.3,0,21.8,0]];let Pl=42811;const lt=()=>(Pl=Pl*1664525+1013904223>>>0)/4294967296,cc=i=>i[Math.floor(lt()*i.length)],K=(i,t,e)=>new S(i,t,e),wv=new An(1,1,1),zt=(i,t=.78,e=.18,n={})=>new ye({color:i,roughness:t,metalness:e,...n});function bv(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);e.addColorStop(0,"#18262e"),e.addColorStop(.36,"#394047"),e.addColorStop(.47,"#928474"),e.addColorStop(.52,"#514c46"),e.addColorStop(.68,"#18252a"),e.addColorStop(1,"#101a20"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);let n=t.createRadialGradient(500,234,5,500,234,255);n.addColorStop(0,"rgba(255,226,183,.85)"),n.addColorStop(.2,"rgba(216,155,93,.48)"),n.addColorStop(1,"rgba(171,117,75,0)"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let r=0;r<280;r++){const o=lt()*1024,a=105+lt()*152,l=18+lt()*170,c=8+lt()*32,h=t.createRadialGradient(o,a,1,o,a,l);h.addColorStop(0,"rgba(20,27,33,.18)"),h.addColorStop(1,"rgba(20,27,33,0)"),t.save(),t.scale(1,c/l),t.fillStyle=h,t.fillRect(o-l,(a-l)*l/c,l*2,l*2),t.restore()}const s=new Ke(i);return s.mapping=mo,s.colorSpace=Ee,s}function Tv(i){if(i)return null;const t={name:"Rain-slick asphalt reflections",uniforms:{color:{value:new jt(5331550)},tDiffuse:{value:null},textureMatrix:{value:new he},time:{value:0}},vertexShader:`
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
 }`},e=new Zo(new Ce(78,13.8),{shader:t,textureWidth:480,textureHeight:360,multisample:0,clipBias:.003});return e.rotation.x=-Math.PI/2,e.position.set(-7,.018,6),e.material.transparent=!0,e.material.depthWrite=!1,e.renderOrder=1,e}const Vn=zt(2831419,.49,.72),qe=zt(1252129,.62,.65),Re=zt(6582906,.42,.72),Hu=zt(1053462,.9,.04),Av=zt(2240052,.32,.68),ku=zt(15049804,.56,.45),Vu=new re({color:16758635}),Gu=zt(7420715,.92,.12),Wu=zt(5656382,.88,.08),Rv=zt(5721406,.55,.52),Xu={time:{value:0}},Cv=new bn({uniforms:Xu,transparent:!0,depthWrite:!1,side:Ne,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;varying vec2 vUv;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
 void main(){vec2 p=vUv*2.-1.;float distort=(noise(vUv*9.)-.5)*.23;
 float edge=1.-smoothstep(.56,.95,length(p)+distort);
 float fine=noise(vUv*37.+vec2(time*.028,0.));
 vec3 base=vec3(.13,.15,.15);
 float shimmer=pow(max(0.,sin(vUv.y*30.+vUv.x*2.8+time*.3)),23.)*.025;
 vec3 water=base+vec3(.18,.12,.06)*shimmer+vec3(.025)*fine;
 gl_FragColor=vec4(water,edge*(.30+.08*fine));
 }`}),Pv=new re({color:11186859,transparent:!0,opacity:.14,depthWrite:!1});function rt(i,t,e,n,s){const r=new j(wv,n);return r.position.set(...e),r.scale.set(...t),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Lt(i,t,e,n,s,r=6){const o=t.clone().add(e).multiplyScalar(.5),a=e.clone().sub(t),l=new j(new ie(n,n,a.length(),r),s);return l.position.copy(o),l.quaternion.setFromUnitVectors(K(0,1,0),a.normalize()),l.castShadow=!0,i.add(l),l}function Nn(i,t,e=256){const n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(s.fillStyle=t,s.fillRect(0,0,e,e),i==="ground"){for(let o=0;o<31e3;o++){const a=Math.floor(35+lt()*80);s.fillStyle=`rgba(${a},${a+7},${a+9},${lt()*.22})`,s.fillRect(lt()*e,lt()*e,1+lt()*3,1+lt()*2)}for(let o=0;o<80;o++){s.strokeStyle=`rgba(10,15,18,${.06+lt()*.2})`,s.lineWidth=.25+lt()*1.7,s.beginPath();let a=lt()*e,l=lt()*e;s.moveTo(a,l),s.lineTo(a+lt()*24,l+lt()*14),s.stroke()}for(let o=0;o<95;o++){const a=lt()*e,l=lt()*e,c=(.008+lt()*.19)*e,u=lt()<.68?`rgba(5,11,14,${.04+lt()*.3})`:`rgba(121,130,122,${.015+lt()*.12})`,d=s.createRadialGradient(a,l,0,a,l,c);d.addColorStop(0,u),d.addColorStop(1,"rgba(10,12,13,0)"),s.fillStyle=d,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<560;o++){const a=lt()*e,l=lt()*e;s.fillStyle=lt()<.6?`rgba(8,12,14,${.12+lt()*.18})`:`rgba(167,179,176,${.03+lt()*.12})`,s.fillRect(a,l,1.2+lt()*4,1+lt()*3)}for(let o=0;o<24;o++){const a=lt()*e,l=lt()*e;s.beginPath(),s.strokeStyle=`rgba(11,15,18,${.1+lt()*.29})`,s.lineWidth=.4+lt()*1.4,s.moveTo(a,l);for(let c=1;c<12;c++)s.lineTo(a+Math.sin(c*.7+o)*c*.84,l+c*(1.5+lt()*1.4));s.stroke()}}else{for(let o=0;o<3100;o++){const a=i==="metal"?"118,71,43":i==="warning"?"22,22,20":"19,23,26";s.fillStyle=`rgba(${a},${lt()*.24})`;let l=lt()*e,c=lt()*e;s.fillRect(l,c,1+lt()*5,1+lt()*7)}for(let o=0;o<110;o++){const a=lt()*e,l=lt()*e;s.fillStyle=`rgba(8,13,16,${lt()*.18})`,s.fillRect(a,l,1+lt()*1,4+lt()*65)}for(let o=0;o<52;o++){s.strokeStyle=`rgba(197,202,183,${lt()*.12})`,s.lineWidth=.3+lt()*.7,s.beginPath();let a=lt()*e,l=lt()*e;s.moveTo(a,l),s.lineTo(a+1+lt()*12,l),s.stroke()}for(let o=0;o<140;o++){const a=lt()*e,l=lt()*e,c=3+lt()*34,h=s.createRadialGradient(a,l,0,a,l,c),u=lt()>.36?"120,68,44":"12,25,30";h.addColorStop(0,`rgba(${u},${.05+lt()*.22})`),h.addColorStop(1,`rgba(${u},0)`),s.fillStyle=h,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<70;o++){const a=lt()*e,l=lt()*e,c=10+lt()*110,h=s.createLinearGradient(0,l,0,l+c);h.addColorStop(0,`rgba(97,49,29,${.09+lt()*.3})`),h.addColorStop(1,"rgba(97,49,29,0)"),s.fillStyle=h,s.fillRect(a,l,.8+lt()*3,c)}for(let o=0;o<150;o++){const a=lt()*e,l=lt()*e;s.strokeStyle=`rgba(192,186,171,${.06+lt()*.26})`,s.lineWidth=.3+lt()*.75,s.beginPath(),s.moveTo(a,l),s.lineTo(a+3+lt()*42,l+(lt()-.5)*1.8),s.stroke()}}const r=new Ke(n);return r.colorSpace=Ee,r.wrapS=r.wrapT=hi,r.anisotropy=4,r}function Lv(){const i=document.createElement("canvas");i.width=256,i.height=512;const t=i.getContext("2d");t.clearRect(0,0,256,512);const e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"rgba(171,174,163,.15)"),e.addColorStop(.09,"rgba(185,189,176,.76)"),e.addColorStop(.82,"rgba(187,190,181,.73)"),e.addColorStop(1,"rgba(175,178,164,.09)"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let s=0;s<1700;s++){const r=lt()*256,o=lt()*512;t.clearRect(r,o,.3+lt()*6,.5+lt()*15)}for(let s=0;s<160;s++){const r=lt()*256,o=lt()*512;t.clearRect(r,o,2+lt()*30,.8+lt()*3)}for(let s=0;s<25;s++){const r=lt()*256,o=lt()*512,a=10+lt()*50;t.save(),t.globalCompositeOperation="destination-out";const l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(0,0,0,.8)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(r-a,o-a,a*2,a*2),t.restore()}const n=new Ke(i);return n.colorSpace=Ee,n.anisotropy=8,new re({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function ks(i,t,e="#deded5",n="#29353a"){const s=document.createElement("canvas");s.width=512,s.height=172;const r=s.getContext("2d");r.fillStyle=n,r.fillRect(0,0,512,172),r.strokeStyle="rgba(255,255,255,.45)",r.lineWidth=3,r.strokeRect(9,9,494,154),r.fillStyle=e,r.font="900 70px Impact,Arial Narrow,sans-serif",r.fillText(i,28,93),r.font="600 23px monospace",r.fillText(t,30,137);const o=new Ke(s);return o.colorSpace=Ee,o}function To(i,t,e,n=.34){const s=[],r=[],o=[],a=Math.max(6,Math.round(i/n));for(let c=0;c<=a*4;c++){const h=c/(a*4),u=c%4,f=e*(u===1||u===2?1:0);if(s.push(h*i-i/2,0,f,h*i-i/2,t,f),r.push(h*3,0,h*3,1),c<a*4){const g=c*2;o.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new Be;return l.setAttribute("position",new ue(s,3)),l.setAttribute("uv",new ue(r,2)),l.setIndex(o),l.computeVertexNormals(),l}const Yu=[["#435c61",4942446],["#a65d3e",11297344],["#515b5d",5793132],["#706a55",8288099],["#354957",3755613],["#5f5048",7758165]],qu=Yu.map(([i])=>{const t=Nn("metal",i,512);return zt(13752534,.62,.23,{map:t,bumpMap:t,bumpScale:.015})}),Nh=new Map,Fh=new Map;function Iv(i,t){const e=`${i}:${Math.abs(t)%8}`,n=Fh.get(e);if(n)return n;const s=ks(`C-${i+1}`,`LOAD ${Math.abs(t*17+i*11)%99}`),r=new re({map:s,transparent:!0,opacity:.56,depthWrite:!1,side:Ne});return Fh.set(e,r),r}function Dv(i,t){const e=`${i}:${t%4}`,n=Nh.get(e);if(n)return n;const s=document.createElement("canvas");s.width=768,s.height=256;const r=s.getContext("2d");r.clearRect(0,0,768,256);const o=["NORTHLINE","OCEANSTAR","BLACKWATER","BRIDGEPORT","CIRRUS","ATLANTIC"][i%6];let a=(i+1)*15289+t%4*9013;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296);r.fillStyle="rgba(220,228,220,.55)",r.lineWidth=5,r.beginPath(),r.moveTo(37,77),r.lineTo(109,31),r.lineTo(166,77),r.lineTo(109,124),r.closePath(),r.strokeStyle="rgba(216,224,221,.49)",r.stroke(),r.beginPath(),r.moveTo(61,83),r.lineTo(102,52),r.lineTo(146,83),r.stroke(),r.font="700 69px Impact,Arial Narrow,Arial",r.letterSpacing="4px",r.fillText(o,194,100,545),r.font="500 24px monospace",r.letterSpacing="1px",r.fillText(`ISO 22G1   ${String((i*57091+t*37)%9999999).padStart(7,"0")}`,195,146,510),r.font="700 27px monospace",r.fillText("MAX GROSS 30 480 KG   /   67 200 LB",196,185,500),r.globalCompositeOperation="destination-out";for(let u=0;u<2500;u++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.12+l()*.72})`,r.fillRect(d,f,1+l()*9,.3+l()*4)}for(let u=0;u<42;u++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.3+l()*.6})`,r.fillRect(d,f,7+l()*58,.4+l()*1.5)}const c=new Ke(s);c.colorSpace=Ee,c.anisotropy=8;const h=new re({map:c,transparent:!0,opacity:.78,depthWrite:!1,side:Ne,polygonOffset:!0,polygonOffsetFactor:-1});return Nh.set(e,h),h}const Uv=(()=>{const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d");let e=874233;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<480;r++){const o=n()*512,a=n()*256,l=10+n()*120,c=t.createLinearGradient(0,a,0,a+l);c.addColorStop(0,`rgba(72,37,21,${.1+n()*.29})`),c.addColorStop(1,"rgba(72,37,21,0)"),t.fillStyle=c,t.fillRect(o,a,1+n()*2.8,l)}const s=new Ke(i);return s.colorSpace=Ee,new re({map:s,transparent:!0,opacity:.85,depthWrite:!1,side:Ne,polygonOffset:!0,polygonOffsetFactor:-1})})();function so(i,t,e,n,s=0,r=0,o,a=20,l){const c=o??Math.floor(lt()*Yu.length),h=qu[c],u=new Vt;u.position.set(e,(l??r*2.72)+.12,n),u.rotation.y=s,i.add(u);const d=2.7,f=a===41?2.86:2.55,g=a===20?6.06:12.2;rt(u,[d,f,g],[0,f/2,0],h);for(let M of[-1,1]){const v=new j(To(g-.2,f-.21,M*.067,.3),h);v.rotation.y=M*Math.PI/2,v.position.set(M*(d/2+.015),.12,0),v.castShadow=!0,v.receiveShadow=!0,u.add(v);const R=new j(new Ce(g-.24,f-.15),Uv);if(R.rotation.y=M*Math.PI/2,R.position.set(M*(d/2+.115),f/2,0),u.add(R),lt()<.84){const P=new j(new Ce(2.25,.75),Dv(c,Math.abs(Math.floor(e*11+n*7+r*23))));P.rotation.y=M*Math.PI/2,P.position.set(M*(d/2+.124),1.63,-.25),u.add(P)}const C=new j(new Ce(.53,.3),Iv(c,Math.round(e*4+n*9+r*17)));C.rotation.y=M*Math.PI/2,C.position.set(M*(d/2+.132),.55,g/2-.65),u.add(C)}for(let M of[-1,1]){const v=new j(To(d-.12,f-.23,M*.05,.22),h);v.position.set(0,.12,M*(g/2+.022)),M===-1&&(v.rotation.y=Math.PI),u.add(v),rt(u,[d+.12,.09,.1],[0,f+.01,M*g/2],qe),rt(u,[d+.12,.13,.1],[0,.055,M*g/2],qe),rt(u,[.035,f,.035],[0,f/2,M*(g/2+.09)],Re);for(let R=-1;R<=1;R+=2)rt(u,[.065,f-.22,.07],[R*(d/2-.23),f/2,M*(g/2+.12)],Vn);for(let R=-1;R<=1;R+=2)for(let C=0;C<2;C++)rt(u,[.12,.17,.06],[R*(d/2-.23),.48+C*1.45,M*(g/2+.165)],Re)}for(let M of[-1,1]){for(let v of[-1,1]){rt(u,[.1,f+.14,.12],[M*(d/2-.04),f/2,v*(g/2-.055)],Vn);for(let R of[.08,f+.04])rt(u,[.24,.16,.24],[M*(d/2-.04),R,v*(g/2-.05)],Re)}rt(u,[.1,.08,g+.16],[M*(d/2-.04),f+.08,0],Vn),rt(u,[.11,.11,g+.16],[M*(d/2-.04),.035,0],Vn)}const _=new j(new Ce(1.45,.49),new re({map:ks(cc(["HARBOR","NORTH","MARLIN","SE-04","TIDAL"]),`CARGO  /  ${String(Math.floor(lt()*81e3)).padStart(5,"0")}`),transparent:!0,opacity:.85}));_.position.set(0,1.72,g/2+.082),u.add(_);for(let M=0;M<3;M++)rt(u,[.045,.017,.56],[d/2+.092,.62+M*.53,-1.6+M*.9],Gu);const m=Math.abs(Math.sin(s))>.7,p=(m?g:d)/2,b=(m?d:g)/2;t.push({minX:e-p-.2,maxX:e+p+.2,minZ:n-b-.2,maxZ:n+b+.2,height:(l??r*2.72)+f})}function Oh(i,t,e,n=1){const s=new Vt;s.position.set(t,0,e),s.scale.setScalar(n),i.add(s);const r=zt(6125430,.58,.62),o=zt(10976592,.67,.53);for(let a of[-1,1]){let l=K(a*8.6,0,0),c=K(a*6.2,21,0);Lt(s,l,c,.36,r,8),Lt(s,K(a*8.6,0,1.7),K(a*6.2,21,1.7),.36,r,8);for(let h=3;h<21;h+=3){const u=h/21;Lt(s,K(a*(8.6-2.4*u),h,0),K(a*(8.6-2.4*u),h,1.7),.15,r)}}for(let a of[13,19.8]){Lt(s,K(-6.7,a,.85),K(6.7,a,.85),.24,r,8);for(let l=-6;l<6;l+=2)Lt(s,K(l,a,.85),K(l+2,a+1,.85),.09,r),Lt(s,K(l,a+1,.85),K(l+2,a,.85),.09,r)}for(let a of[-1,1]){Lt(s,K(-19.5,20.9,a*.7),K(19.5,20.9,a*.7),.27,r),Lt(s,K(-19.5,22.25,a*.7),K(19.5,22.25,a*.7),.17,r);for(let l=-19;l<19;l+=2.5)Lt(s,K(l,20.9,a*.7),K(l+2.5,22.25,a*.7),.09,r),Lt(s,K(l,22.25,a*.7),K(l+2.5,20.9,a*.7),.09,r)}rt(s,[3.9,2.25,2.2],[6.3,22.5,.1],r),rt(s,[2.8,.85,2.5],[6.3,22.1,1.35],qe);for(let a=8;a<22;a+=2.8)Lt(s,K(-2.9,a,.4),K(-2.9,a+2.3,.4),.048,o);for(let a of[-1,1])Lt(s,K(-2.7+a*.65,20.6,0),K(-2.7+a*.65,3.5,0),.023,qe);rt(s,[4.7,.45,1.35],[-2.7,3.4,0],o)}function Nv(i,t,e,n=1){const s=new Vt;s.position.set(t,0,e),s.scale.setScalar(n),s.rotation.y=Math.PI/2,i.add(s);const r=zt(6648178,.72,.57),o=zt(9079168,.69,.62),a=zt(2700085,.81,.51),l=7,c=26.8;for(const u of[-1,1]){for(const d of[-1.65,1.65]){Lt(s,K(u*l/2,0,d),K(u*l/2,c,d),.26,r,10);for(let f=2;f<c-1;f+=4.2){const g=K(u*l/2,f,d),_=K(u*l/2,f+4.1,-d);Lt(s,g,_,.094,o)}}for(let d=2;d<=c;d+=4.1)Lt(s,K(u*l/2,d,-1.65),K(u*l/2,d,1.65),.12,r)}for(const u of[-1.65,1.65]){for(let d of[4,14,22,26.8])Lt(s,K(-l/2,d,u),K(l/2,d,u),.16,r);for(let d=-3.25;d<=3;d+=1.35)Lt(s,K(d,26.45,u),K(d+1.15,27.6,u),.11,r),Lt(s,K(d,27.55,u),K(d+1.15,26.45,u),.11,r)}for(const u of[-1.2,1.2]){Lt(s,K(-18.5,26.5,u),K(14,26.5,u),.2,r),Lt(s,K(-16.7,28.1,u),K(12,28.1,u),.15,r);for(let d=-18;d<13;d+=2)Lt(s,K(d,26.45,u),K(d+2,28.1,u),.09,o),Lt(s,K(d,28.1,u),K(d+2,26.45,u),.09,r)}for(let u=-17;u<=13;u+=3.8)Lt(s,K(u,26.5,-1.2),K(u,26.5,1.2),.1,r);for(const u of[-1,1]){Lt(s,K(u*4,1.1,1.45),K(u*4,26.5,1.45),.036,o),Lt(s,K(u*4.48,1.1,1.45),K(u*4.48,26.5,1.45),.036,o);for(let d=1.2;d<26.5;d+=.55)Lt(s,K(u*4,d,1.45),K(u*4.48,d,1.45),.023,o)}rt(s,[8.8,.17,4.7],[0,23.8,0],a);for(let u=-4;u<4;u+=.48)rt(s,[.07,.08,4.8],[u,23.97,0],o);rt(s,[3.2,2.4,2.25],[1.2,29,-.2],r);for(const u of[-1.35,1.05])rt(s,[2.8,.72,.09],[1.2,29.13,u],a);for(let u=-1;u<2;u++)rt(s,[.68,.42,.14],[1.2+u*.78,29.27,1.19],zt(9280660,.2,.45,{emissive:2636343,emissiveIntensity:.23}));rt(s,[3.1,1.4,2.3],[-1.2,26,0],a);for(const u of[-1.18,1.18])Lt(s,K(-1.2+u,25.2,-.8),K(-1.2+u,8.6,-.8),.024,a),Lt(s,K(-1.2+u,25.2,.8),K(-1.2+u,8.6,.8),.024,a);rt(s,[4.7,.68,2.2],[-1.2,8.5,0],o);for(const u of[-1,1])for(const d of[-1,1])Lt(s,K(-1.2+u*2.15,8.3,d*.8),K(-1.2+u*2.15,7,d*.8),.05,a);const h=new j(new Ce(4.9,.62),new re({map:ks("GANTRY 04","BERTH CONTROL  /  07"),transparent:!0}));h.position.set(0,13.4,1.75),s.add(h);for(const u of[1.2,23.2])for(const d of[-1,1])rt(s,[.65,.2,.25],[d*3.5,u,1.8],ku);rt(s,[.22,.22,.22],[0,30.36,0],Vu)}const Fv=zt(9670534,.97,0,{map:Nn("ground","#97938b")});function Ov(i,t,e,n=0){const s=new Vt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=new zs;r.moveTo(-.58,0),r.lineTo(.58,0),r.lineTo(.52,.28),r.lineTo(.35,.54),r.lineTo(.35,.88),r.lineTo(-.35,.88),r.lineTo(-.35,.54),r.lineTo(-.52,.28),r.closePath();const o=new ns(r,{depth:2.5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.022,bevelSegments:1,steps:1});o.rotateY(Math.PI/2);const a=new j(o,Fv);a.position.set(-1.25,0,0),a.castShadow=!0,s.add(a);for(const l of[-1,.4])rt(s,[.55,.06,.17],[0,.69,l],ku)}const Bv=zt(8023639,.94,.03,{map:Nn("paint","#8c8068")}),$u=zt(3749934,.97,.04);function Bh(i,t,e,n=0){const s=new Vt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=Bv,o=$u;for(const a of[-.42,.42])rt(s,[1.12,.11,.14],[0,.13,a],o);for(let a=0;a<6;a++)rt(s,[.19,.06,1.12],[-.47+a*.185,.22,0],r);for(const a of[-.45,0,.45])rt(s,[.16,.09,.95],[a,.035,0],o)}function zv(i,t,e){const n=new Vt;n.position.set(t,0,e),i.add(n);const s=zt(1778213,.94,.09);for(const o of[-1,1]){const a=new j(new ie(.57,.57,.082,20),Vn);a.rotation.z=Math.PI/2,a.position.set(o*.28,.58,0),n.add(a);const l=new j(new an(.44,.045,8,24),Re);l.rotation.y=Math.PI/2,l.position.set(o*.33,.58,0),n.add(l)}const r=new j(new ie(.31,.31,.6,16),s);r.rotation.z=Math.PI/2,r.position.y=.58,n.add(r);for(let o=0;o<10;o++){const a=o/10*Math.PI*2,l=new j(new an(.31+o*.014,.018,6,32),s);l.rotation.y=Math.PI/2,l.position.set(-.25+o*.052,.58,0),l.rotation.x=a*.035,n.add(l)}}const Hv=zt(2106662,.98,.05),Ll=zt(1054234,.92,.06),kv=new Iu({color:11780802,roughness:.65,metalness:0,transparent:!0,opacity:.8,clearcoat:.05,depthWrite:!0}),zh=zt(12223806,.63,.41),ai=zt(9084317,.55,.48);function Vv(i){const t=new an(.43,.13,10,28);for(let e=0;e<4;e++){const n=new j(t,Hv);n.rotation.x=Math.PI/2,n.position.y=.22+e*.25,n.castShadow=!0,i.add(n);const s=new j(new an(.285,.03,7,20),Ll);s.rotation.x=Math.PI/2,s.position.y=.25+e*.25,i.add(s);for(let r=0;r<12;r++){const o=r*Math.PI/6,a=rt(i,[.11,.025,.08],[Math.cos(o)*.56,.21+e*.25,Math.sin(o)*.56],Ll);a.rotation.y=o}}}function Gv(i){rt(i,[1.15+.1,.15,1.1+.08],[0,.075,0],$u),rt(i,[1.15,1.25-.18,1.1],[0,.2+(1.25-.18)/2,0],kv),rt(i,[.28,.13,.14],[.22,1.3,0],Re);for(const s of[-1.15/2,1.15/2])for(const r of[-1.1/2,1.1/2])Lt(i,K(s,.2,r),K(s,1.35,r),.026,ai);for(const s of[.3,.65,1.04,1.3]){for(const r of[-1.15/2,1.15/2])Lt(i,K(r,s,-1.1/2),K(r,s,1.1/2),.023,ai);for(const r of[-1.1/2,1.1/2])Lt(i,K(-1.15/2,s,r),K(1.15/2,s,r),.023,ai)}for(const s of[-.28,0,.28])for(const r of[-1.1/2,1.1/2])Lt(i,K(s,.2,r),K(s,1.3,r),.018,ai)}function Wv(i){const t=new Vt;i.add(t),rt(t,[1.55,.2,2.75],[0,.31,0],qe),rt(t,[1.57,.85,1.42],[0,.81,-.67],zh),rt(t,[1.35,.46,1.4],[0,1.22,-.63],Vn);for(const n of[-1,1]){const s=rt(t,[.24,.26,.9],[n*.69,.85,-.65],zh);s.rotation.y=n*.12;for(const r of[-1.02,.86]){const o=new j(new ie(.4,.4,.2,20),Ll);o.rotation.z=Math.PI/2,o.position.set(n*.84,.38,r),o.castShadow=!0,t.add(o);const a=new j(new ie(.2,.2,.21,16),Re);a.rotation.z=Math.PI/2,a.position.copy(o.position),t.add(a)}Lt(t,K(n*.68,.7,-.9),K(n*.68,2.4,-.9),.055,ai),Lt(t,K(n*.68,.7,.55),K(n*.68,2.4,.55),.055,ai)}rt(t,[1.57,.15,1.64],[0,2.42,-.16],qe),rt(t,[.7,.18,.62],[0,1.12,.25],Hu),Lt(t,K(0,1.24,.17),K(0,1.5,.36),.04,Re);const e=new j(new an(.19,.035,9,20),qe);e.rotation.x=Math.PI/3,e.position.set(0,1.5,.36),t.add(e);for(const n of[-.45,.45])rt(t,[.12,2.4,.1],[n,1.35,1.32],ai),Lt(t,K(n,1.1,1.27),K(n,2.1,1.27),.04,Re),rt(t,[.12,.08,2.6],[n,.34,2.17],ai),rt(t,[.28,.045,2.5],[n,.37,2.17],Re);for(let n=.3;n<2.4;n+=.24)rt(t,[.95,.035,.1],[0,n,1.33],qe);rt(t,[.28,.12,.18],[0,2.56,-.9],Vu)}function Xv(i){rt(i,[1.75,1.13,.96],[0,.64,0],Zu),rt(i,[1.88,.1,1.13],[0,.08,0],qe);for(const e of[-.51,.51]){rt(i,[1.65,.09,.06],[0,.2,e],Re),rt(i,[1.65,.09,.06],[0,1.17,e],Re);for(let n=0;n<7;n++)rt(i,[.03,.53,.014],[-.62+n*.205,.7,e*1.02],qe)}for(const e of[-.78,.78])for(const n of[-.45,.45])Lt(i,K(e,.12,n),K(e,1.3,n),.045,Re);const t=new j(new ie(.11,.12,.42,12),qe);t.position.set(.55,1.43,-.16),i.add(t)}function Yv(i,t,e,n=!1){const s=new Vt;s.position.set(t,0,e),i.add(s);const r=n?6.4:13;Lt(s,K(0,0,0),K(0,r,0),n?.065:.12,Vn,12);for(const l of[1.6,5,9.3].filter(c=>c<r))for(const c of[-1,1])Lt(s,K(0,l,0),K(c*.31,l-.45,0),.025,Re);Lt(s,K(-1.6,r,0),K(1.6,r,0),.085,ai);const o=new re({color:16241325});for(const l of[-1.1,1.1]){rt(s,[.98,.64,.13],[l,r-.07,-.03],qe,[.21,0,0]),rt(s,[.83,.51,.037],[l,r-.08,.065],o,[.21,0,0]);for(const c of[-.38,.38])rt(s,[.06,.53,.07],[l+c,r-.08,.085],Re)}const a=new Pi(16768956,n?5:8,n?12:20,1.7);return a.position.set(0,r-1,0),s.add(a),a}function qv(i,t,e,n,s=0){const r=new Vt;r.position.set(t,0,e),r.rotation.y=s,i.add(r),Lt(r,K(-.59,0,0),K(-.59,3.6,0),.065,Re),Lt(r,K(.59,0,0),K(.59,3.6,0),.065,Re),rt(r,[1.2,.97,.1],[0,2.92,0],qe);const o=new j(new Ce(1.09,.85),new re({map:ks(n,"NO UNAUTHORIZED ACCESS","#e5d6b5","#343d3e"),side:Ne}));o.position.set(0,2.92,.065),r.add(o);const a=o.clone();a.position.set(0,2.92,-.065),a.rotation.y=Math.PI,r.add(a);for(const l of[2.44,3.4])rt(r,[1.16,.03,.045],[0,l,.08],Gu)}const ir=zt(4745079,.73,.48),$v=zt(11563074,.65,.36),Zv=zt(16777215,.92,.02,{map:Nn("paint","#b4a78c")}),Hh=zt(6706753,.93,.02,{map:Nn("paint","#756952")}),Zu=zt(3300721,.57,.42);zt(9260861,.61,.37);const Kv=new re({map:ks("FRAGILE","KEEP DRY"),transparent:!0,opacity:.46,depthWrite:!1,side:Ne});function Ao(i,t,e,n,s,r,o){const a=new Vt;a.position.set(t,e,n),i.add(a),rt(a,[s,r,o],[0,r/2,0],Zv);for(const c of[-1,1])for(const h of[-1,1])rt(a,[.06,r,.06],[c*(s/2-.06),r/2,h*(o/2-.04)],Hh);for(const c of[r-.12,.12])rt(a,[s+.02,.045,o+.02],[0,c,0],Hh);const l=new j(new Ce(s*.6,r*.28),Kv);l.position.set(0,r*.6,o/2+.02),a.add(l)}function kh(i,t,e,n=3){const s=n*2.4,r=2.1,o=new Vt;o.position.set(t,0,e),i.add(o);const a=-r/2,l=r/2;for(let c=0;c<=n;c++)for(const h of[a,l]){const u=c*2.4-s/2;rt(o,[.11,5.75,.11],[u,2.875,h],ir);for(const d of[1,2.65,4.27,5.57])rt(o,[.19,.12,.2],[u,d,h],ir)}for(const c of[1,2.65,4.3]){rt(o,[s+.25,.14,r+.1],[0,c,0],$v);for(let h=0;h<n;h++){const u=(h+.5)*2.4-s/2;if((h+Math.round(t))%3===0&&c>2)for(const d of[-.65,.55]){const f=new j(new ie(.33,.33,1.1,12),Zu);f.position.set(u+d,c+.64,0),o.add(f);for(const g of[c+.21,c+1.1]){const _=new j(new an(.33,.023,6,14),Re);_.rotation.x=Math.PI/2,_.position.set(u+d,g,0),o.add(_)}}else{const d=.89+.17*lt(),f=1.5+.15*lt(),g=1.08;Ao(o,u-.58,c+.11,0,d,g,f),Ao(o,u+.56,c+.11,0,d,g,f)}}}for(const c of[-s/2,s/2])for(let h=0;h<4.7;h+=1.6)Lt(o,K(c,h,a),K(c,h+1.6,l),.04,ir),Lt(o,K(c,h,l),K(c,h+1.6,a),.04,ir);for(let c=0;c<n;c++){const h=(c+.5)*2.4-s/2,u=new j(new Ce(1.6,.14),new re({map:ks("BAY "+String(c+1),"MAX 1200 KG","#d4e1df","#34546b"),transparent:!0}));u.position.set(h,2.73,a-.08),o.add(u)}}function Jv(){const i=document.createElement("canvas");i.width=1024,i.height=640;const t=i.getContext("2d");let e=893371;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<170;r++){const o=n()*i.width,a=n()*i.height,l=12+n()*110,c=.35+n()*1.2,h=t.createRadialGradient(o,a,0,o,a,l);h.addColorStop(0,`rgba(9,16,19,${.04+n()*.19})`),h.addColorStop(1,"rgba(9,16,19,0)"),t.save(),t.translate(o,a),t.scale(1,c),t.fillStyle=h,t.fillRect(-l,-l,l*2,l*2),t.restore()}for(const r of[0,1,2]){const o=r*150-130;for(const a of[-1,1])t.beginPath(),t.moveTo(520+o+a*28,640),t.bezierCurveTo(480+o+a*34,490,640+o+a*26,220,530+o+a*22,-10),t.lineWidth=4.5+n()*3,t.strokeStyle="rgba(14,20,20,.17)",t.stroke();for(let a=0;a<50;a++){const l=a*13,c=515+o+24*Math.sin(a*.073+r);t.save(),t.translate(c,l),t.rotate(Math.sin(a*.13)*.18),t.fillStyle=`rgba(14,20,20,${.015+n()*.1})`,t.fillRect(-22,-3,44,3),t.restore()}}for(let r=0;r<440;r++){const o=n()*i.width,a=n()*i.height;t.fillStyle=n()>.55?`rgba(25,20,16,${n()*.11})`:`rgba(225,218,194,${n()*.05})`,t.fillRect(o,a,1+n()*18,.4+n()*3)}const s=new Ke(i);return s.colorSpace=Ee,s.anisotropy=8,new re({map:s,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function jv(i){const t=new Vt;t.position.set(-13.3,0,-25.5),t.rotation.y=.52,i.add(t);const e=zt(3885903,.64,.66),n=zt(12485181,.52,.48),s=zt(6383976,.72,.5),r=5.5,o=-1,a=17,l=4.75/a;for(let c=0;c<a;c++){const h=c/(a-1),u=r+(o-r)*h,d=(c+1)*l;rt(t,[1.65,.075,.35],[0,d-.05,u],s);for(const f of[-1,1])rt(t,[.04,.14,.35],[f*.81,d,u],e)}for(const c of[-1,1]){const h=c*.8;Lt(t,K(h,.15,r+.28),K(h,5,o-.22),.1,e),Lt(t,K(h,.15,r-.05),K(h,5,o-.5),.06,e),Lt(t,K(h,1.13,r+.45),K(h,5.95,o-.32),.045,n);for(let u=0;u<8;u++){const d=u/7,f=r+(o-r)*d,g=d*4.75;Lt(t,K(h,g+.1,f),K(h,g+1.13,f),.031,n)}}rt(t,[3.2,.18,4.6],[0,4.82,-2.3],s);for(const c of[-1,1])Lt(t,K(c*1.58,4.9,-4.4),K(c*1.58,6,-4.4),.055,n),Lt(t,K(c*1.58,5.96,-4.4),K(c*1.58,5.96,-.3),.04,n);for(let c=0;c<3;c++){const h=-4+c*1.65;Lt(t,K(-1.25,4.67,h),K(-1.25,0,h),.12,e)}}const Qv=zt(12874809,.75,.07),t1=zt(11909289,.88,.02);function e1(i,t,e){const n=new Vt;n.position.set(t,0,e),i.add(n),rt(n,[.54,.055,.54],[0,.025,0],Hu);const s=new j(new Yo(.19,.74,10),Qv);s.position.y=.43,s.castShadow=!0,n.add(s);for(const r of[.37,.55]){const o=new j(new ie(.126-(r-.35)*.18,.126-(r-.35)*.18,.07,12),t1);o.position.y=r,n.add(o)}}function n1(i,t,e){const n=new Vt;n.position.set(t,0,e),i.add(n);const s=cc([Av,Vn,Rv]),r=new j(new ie(.42,.42,1.18,14),s);r.position.y=.6,r.castShadow=!0,n.add(r);for(let a of[.17,.44,.83,1.06]){const l=new j(new an(.424,.023,5,16),Re);l.rotation.x=Math.PI/2,l.position.y=a,n.add(l)}const o=new j(new ie(.38,.38,.04,14),qe);o.position.y=1.2,n.add(o)}function Vh(i,t,e,n,s=.022){const r=new ic(n,28);r.rotateX(-Math.PI/2);const o=Cv,a=new j(r,o);a.position.set(t,s+lt()*.005,e),a.scale.z=.42+lt()*.5,a.rotation.y=lt()*Math.PI,i.add(a);for(let l=0;l<3;l++){const c=new j(new Ce(n*(.16+lt()*.3),.007),Pv);c.rotation.x=-Math.PI/2,c.position.set(t+(lt()-.5)*n,s+.008,e+(lt()-.5)*n*.2),i.add(c)}}function i1(i){const t={value:0},e=new j(new Ce(132,94,42,30),new bn({uniforms:{time:t},side:Ne,vertexShader:`uniform float time;varying vec3 vWorld;varying vec2 vUv;
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
   }`}));return e.rotation.x=-Math.PI/2,e.position.set(97,.025,6),e.receiveShadow=!1,e.frustumCulled=!1,i.add(e),n=>{t.value=n}}function s1(i){const t=zt(7171687,.94,.07),e=zt(1778726,.87,.22),n=zt(13212241,.78,.11);for(const[h,u]of[[-30,16],[23.7,30]]){const d=(h+u)/2,f=u-h;rt(i,[.9,.75,f],[30,.01,d],t),rt(i,[.15,.16,f],[29.56,.34,d],e);for(let g=h+2;g<u;g+=3.6)rt(i,[.25,.24,.46],[29.54,.32,g],n),rt(i,[.43,.34,.52],[30.15,-.3,g],e)}for(const h of[-22,-12,-2,9,16.4,25.6]){const u=new Vt;u.position.set(29.1,0,h),i.add(u);const d=new j(new ie(.18,.24,.43,12),e);d.position.y=.24,u.add(d);const f=new j(new ie(.35,.35,.12,12),t);f.position.y=.5,u.add(f);for(const g of[-1,1])rt(u,[.22,.08,.12],[g*.26,.47,0],e)}const s=zt(6519681,.51,.57,{map:Nn("metal","#52696b")});rt(i,[7.8,.4,4.9],[26,.18,14.1],s);for(let h=0;h<7;h++){const u=22.4+h*1.08;rt(i,[.13,.08,4.88],[u,.42,14.1],Re)}for(const h of[11.8,16.35])rt(i,[7.5,.12,.18],[26,.47,h],qe);for(let h=0;h<3;h++)for(let u=0;u<2;u++){const d=26.6+u*.9,f=26.5+h*1.2,g=rt(i,[1.18,.77,.86],[d,.38+h*0,f],Wu);g.rotation.y=.02*(h%2?1:-1),rt(i,[1.24,.075,.91],[d,.8,f],qe)}const r=document.createElement("canvas");r.width=r.height=256;const o=r.getContext("2d");o.clearRect(0,0,256,256),o.strokeStyle="rgba(183,198,191,.55)",o.lineWidth=2.1;for(let h=-256;h<512;h+=24)o.beginPath(),o.moveTo(h,0),o.lineTo(h+256,256),o.stroke(),o.beginPath(),o.moveTo(h,256),o.lineTo(h+256,0),o.stroke();const a=new Ke(r);a.colorSpace=Ee,a.wrapS=a.wrapT=hi,a.repeat.set(8,4);const l=new j(new Ce(10,2.5),new re({map:a,transparent:!0,opacity:.32,side:Ne,depthWrite:!1}));l.position.set(28,1.55,30.2),l.rotation.y=Math.PI/2,i.add(l);for(let h=23.5;h<=32.5;h+=2.25)Lt(i,K(h,.2,30.2),K(h,3.05,30.2),.043,Re);Lt(i,K(23.5,3.05,30.2),K(32.5,3.05,30.2),.047,Re);for(const h of[16.3,23.4])Lt(i,K(29,0,h),K(29,1.15,h),.038,Re),Lt(i,K(29,1.15,h),K(30.1,1.15,h),.038,Re),Lt(i,K(30.1,0,h),K(30.1,1.15,h),.038,Re);const c=zt(9673361,.4,.73);for(const h of[19.62,20.38])Lt(i,K(30.2,.5,h),K(30.2,-2.8,h),.025,c);for(let h=.3;h>-2.8;h-=.3)Lt(i,K(30.22,h,19.62),K(30.22,h,20.38),.023,c);for(let h=0;h<3;h++)rt(i,[.56,.018,.1],[27.5+h*.6,.032,20],n)}function r1(i,t){const e=new Float32Array(t*6),n=new Float32Array(t);for(let a=0;a<t;a++){const l=(lt()-.5)*66,c=lt()*20,h=(lt()-.5)*70,u=a*6;e[u]=l,e[u+1]=c,e[u+2]=h,e[u+3]=l+.055,e[u+4]=c-(.28+lt()*.27),e[u+5]=h+.045,n[a]=12+lt()*19}const s=new Be;s.setAttribute("position",new dn(e,3));const r=new ec({color:10927561,transparent:!0,opacity:.17,depthWrite:!1,blending:Zi}),o=new jf(s,r);return o.frustumCulled=!1,o.renderOrder=5,i.add(o),{rain:o,update(a,l,c){o.position.x=l,o.position.z=c;const h=s.attributes.position;for(let u=0;u<t;u++){const d=u*6;let f=h.array[d+1];f-=a*n[u],f<-.5&&(f+=20),h.array[d+1]=f,h.array[d+4]=f-.42}h.needsUpdate=!0}}}function o1(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{if(n instanceof j&&n.geometry instanceof Be&&n.renderOrder===0){const s=n.material;if(Array.isArray(s))return;const r=t.get(s)||[];r.push(n),t.set(s,r)}});let e=0;for(const[n,s]of t){if(s.length<2)continue;const r=new Map;for(const o of s){const a=o.geometry,l=Object.entries(a.attributes).map(([h,u])=>`${h}:${u.itemSize}:${u.normalized}`).sort().join("|")+":"+!!a.index,c=r.get(l)||[];c.push(o),r.set(l,c)}for(const o of r.values()){if(o.length<2)continue;const a=o.map(u=>{const d=u.geometry.clone();return d.applyMatrix4(u.matrixWorld),d}),l=lc(a,!1);if(a.forEach(u=>u.dispose()),!l)continue;l.computeBoundingBox();const c=l.boundingBox,h=new j(l,n);h.castShadow=n instanceof ye&&c.max.y-c.min.y>.28,h.receiveShadow=!0,h.name=`batched-${e++}`;for(const u of o)u.parent?.remove(u);i.add(h)}}return e}function a1(i,t=!1){Pl=42811,i.background=new jt(5594466),i.fog=new jl(6776163,.0125),i.environment=t?null:bv(),i.environmentIntensity=.8,i.add(new Ip(11847376,2896696,1.26)),i.add(new Np(11384245,.23));const e=new oh(16768707,2.36);e.position.set(65,38,30),e.castShadow=!t,t||(e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-75,e.shadow.camera.right=75,e.shadow.camera.top=75,e.shadow.camera.bottom=-75,e.shadow.camera.near=1,e.shadow.camera.far=170,e.shadow.bias=-22e-5,e.shadow.normalBias=.05),i.add(e);const n=new oh(11716044,.67);n.position.set(-16,26,30),i.add(n);const s=new j(new Wn(195,48,26),new bn({side:rn,depthWrite:!1,fog:!1,toneMapped:!1,vertexShader:"varying vec3 vDir; void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir;
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
 }`}));s.frustumCulled=!1,s.renderOrder=-10,i.add(s);const r=new j(new Wn(2.7,22,12),new re({color:16766628,transparent:!0,opacity:.18,fog:!1}));r.position.set(84,24,34),i.add(r);const o=zt(12896457,.62,.07,{map:Nn("ground","#242a2e",512)});o.map.repeat.set(23,26),o.bumpMap=o.map,o.bumpScale=.023;const a=new j(new Ce(250,250),o);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const l=Tv(t);l&&i.add(l);const c=[],h=[],u=i1(i);for(const z of[-4,16])for(const Q of[0,1]){const wt=-36+Q*6.5,G=(z===-4?1:4)+Q;so(i,c,wt,z,Math.PI/2,0,G%6),so(i,[],wt,z,Math.PI/2,1,(G+2)%6),Q===0&&so(i,[],wt,z,Math.PI/2,2,(G+4)%6)}for(const[z,Q,wt,G,et]of Sv){const mt=Math.abs(Math.round(z*1.7+wt*.77+Q*2))%6;so(i,Q<.1?c:[],z,wt,Math.PI/2+G,Math.round(Q/2.59),mt,et,Q)}Nv(i,10.6,1.6,1.03),Oh(i,46,-42,.85),Oh(i,54,37,.65);const d=new Vt;i.add(d);const f=zt(5792103,.86,.16,{map:Nn("ground","#636970")}),g=zt(11118755,.78,.08,{map:Nn("ground","#797771",512)});g.map.repeat.set(4,3),g.bumpMap=g.map,g.bumpScale=.018;const _=zt(3951955,.68,.38,{map:Nn("metal","#43535a")}),m=zt(9149082,.6,.64),p=zt(2372152,.81,.31);rt(d,[28,.22,17],[-2,.01,-19.5],g);const b=new j(new Ce(27.7,16.7),Jv());b.rotation.x=-Math.PI/2,b.position.set(-2,.144,-19.5),b.renderOrder=2,d.add(b);const M=7.1;for(const z of[-16,12])rt(d,[.3,M,17],[z,M/2,-19.5],f),c.push({minX:z-.15,maxX:z+.15,minZ:-28,maxZ:-11,height:M});rt(d,[28,M,.28],[-2,M/2,-28],f),c.push({minX:-16,maxX:12,minZ:-28.14,maxZ:-27.86,height:M});for(const[z,Q]of[[-16,-4.7],[1,12]]){const wt=(z+Q)/2;rt(d,[Q-z,M,.28],[wt,M/2,-11],f),c.push({minX:z,maxX:Q,minZ:-11.14,maxZ:-10.86,height:M})}rt(d,[5.7,1.4,.31],[-1.85,6.45,-11],p);for(const z of[-27.8,-22.6,-17.4,-12]){for(const Q of[-15,11])Lt(d,K(Q,0,z),K(Q,8.5,z),.13,m);for(const Q of[-1,1])Lt(d,K(-2,9.7,z),K(-2+Q*14,7.1,z),.16,m)}const v=new zs;v.moveTo(-14,0),v.lineTo(0,2.61),v.lineTo(14,0),v.closePath();const R=new ns(v,{depth:.24,bevelEnabled:!1,steps:1});for(const z of[-28.18,-10.94]){const Q=new j(R,f);Q.position.set(-2,7.1,z),Q.castShadow=!0,Q.receiveShadow=!0,d.add(Q);for(let wt=-15.8;wt<11.9;wt+=.29){const G=2.6*(1-Math.abs(wt+2)/14);G>.08&&rt(d,[.032,G,.034],[wt,7.1+G/2,z+.25],p)}}for(const z of[-1,1]){const Q=new j(new An(14.25,.2,17.5),_);Q.position.set(-2+z*7,8.42,-19.5),Q.rotation.z=-z*.184,Q.castShadow=!0,d.add(Q)}for(let z=-14;z<=10;z+=2.6)rt(d,[.08,.1,17],[z,7.5+2*(1-Math.abs(z+2)/14),-19.5],m);for(const[z,Q]of[[-12,-25],[7,-25],[-11,-16],[7,-17],[-11,-22],[7,-22]]){rt(d,[2.1,.24,1.1],[z,.12,Q],Wu),rt(d,[1.9,1.1,1],[z,.82,Q],Vn);for(const wt of[-1,1])rt(d,[.07,1.03,1.06],[z+wt*.83,.83,Q],Re);c.push({minX:z-1.05,maxX:z+1.05,minZ:Q-.56,maxZ:Q+.56,height:1.6})}const C=new Vt;C.position.set(-2,6.6,-20),d.add(C);const P=new j(new ie(1.2,1.2,.3,18),m);P.rotation.x=Math.PI/2,C.add(P);const I=new Vt;C.add(I);for(let z=0;z<4;z++)rt(I,[.35,.04,1],[Math.cos(z*Math.PI/2)*.46,0,Math.sin(z*Math.PI/2)*.46],p,[0,z*Math.PI/2,0]);const E=new re({color:13098456}),x=new re({color:16762763});for(const z of[-25,-19,-14])for(const Q of[-9,5]){const wt=z===-19?x:E,G=new j(new Yo(.68,.36,18,1,!0),m);G.rotation.x=Math.PI,G.position.set(Q,6.62,z),d.add(G);const et=new j(new Wn(.22,12,8),wt);et.position.set(Q,6.39,z),d.add(et),Lt(d,K(Q,6.78,z),K(Q,7.64,z),.027,p);for(const It of[-1,1])Lt(d,K(Q+It*1.4,6.98,z),K(Q+It*1.4,7.7,z),.015,p);const mt=new Pi(z===-19?16764059:12772075,t?11:24,16,1.5);mt.position.set(Q,6.1,z),d.add(mt)}const A=new Pi(16757866,20,12,1.5);A.position.set(-2,2.7,-19.1),d.add(A);for(const z of[-12,-7,3,8])rt(d,[2.7,.48,.045],[z,5.4,-10.81],new re({color:7769233,transparent:!0,opacity:.8})),rt(d,[2.7,.09,.1],[z,5.78,-10.73],m),rt(d,[.08,.7,.1],[z+1.1,5.42,-10.73],m);kh(d,-9,-25.3,3),kh(d,6.8,-25.3,3),jv(d);const D=zt(7306107,.81,.35,{map:Nn("metal","#8c9490",512)});for(const[z,Q,wt]of[[-2,-27.8,27.8],[-2,-10.81,11.25]]){const G=new j(To(wt,6.98,.06,.23),D);G.position.set(z,.12,Q),Q>-20&&(G.rotation.y=Math.PI),d.add(G)}for(const[z,Q]of[[-15.8,1],[11.8,-1]]){const wt=new j(To(16.2,6.95,.055,.23),D);wt.position.set(z,.12,-19.5),wt.rotation.y=Q*Math.PI/2,d.add(wt)}for(let z=-15;z<12;z+=.36){const Q=7.26+2.35*(1-Math.abs(z+2)/14);rt(d,[.038,.052,16.8],[z,Q,-19.5],ir)}for(let z=0;z<16;z++){const Q=-13+lt()*22,wt=-25.8+lt()*12;Vh(d,Q,wt,.3+lt()*1.15,.14)}for(const z of[-27.6,-18.9,-13.2])for(const Q of[-13,9]){const wt=rt(d,[.09,.9,2.1],[Q,4.2,z],p);wt.rotation.y=.2;for(let G=0;G<5;G++)rt(d,[.1,.045,1.9],[Q+.1,3.89+G*.14,z],m)}const O=new Vt;O.position.set(42,0,-33),i.add(O),rt(O,[7,21,7],[0,10.5,0],zt(2568761,.78,.35)),rt(O,[9,4,9],[0,21.3,0],zt(4085084,.53,.3));for(let z of[-1,1])rt(O,[9,.13,.18],[0,22.6,z*4.53],new re({color:12242130}));const V=new Vt;V.position.set(59,0,-30),i.add(V),rt(V,[30,10,25],[0,5,0],zt(2568760,.82,.22));for(let z=2;z<10;z+=2.6){rt(V,[30,.1,.13],[0,z,12.6],Vn);for(let Q=-12;Q<13;Q+=6)rt(V,[3.8,.85,.12],[Q,z+.7,12.65],new re({color:12372409,transparent:!0,opacity:.36}))}rt(V,[30,1.3,25],[0,10.5,0],qe);const H={barrel:[.48,.48,1.2],ibc_tote:[.67,.64,1.5],tire_stack:[.55,.55,1.13],crate_stack:[1.38,.9,2.2],forklift:[1.08,1.85,2.5],generator:[1.07,.65,1.43]},k=[];for(const[z,Q,wt,G,et]of Ev){if(z==="light_mast"||z==="floodlight_stand"){k.push(Yv(i,Q,G,z==="floodlight_stand"));continue}const mt=new Vt;mt.position.set(Q,wt,G),mt.rotation.y=et,i.add(mt);const It=H[z];if(It&&wt<.35){const[At,$t,de]=It,L=Math.abs(Math.cos(et))*At+Math.abs(Math.sin(et))*$t,ot=Math.abs(Math.sin(et))*At+Math.abs(Math.cos(et))*$t;c.push({minX:Q-L,maxX:Q+L,minZ:G-ot,maxZ:G+ot,height:de})}if(z==="jersey_barrier")Ov(mt,0,0);else if(z==="traffic_cone")e1(mt,0,0);else if(z==="barrel")n1(mt,0,0);else if(z==="pallet")Bh(mt,0,0);else if(z==="pallet_stack")for(let At=0;At<4;At++){const $t=new Vt;$t.position.y=At*.19,mt.add($t),Bh($t,0,0,At%2?.035:-.025)}else if(z==="cable_reel")zv(mt,0,0);else if(z==="ibc_tote")Gv(mt);else if(z==="tire_stack")Vv(mt);else if(z==="forklift")Wv(mt);else if(z==="generator")Xv(mt);else if(z==="sign_post")qv(mt,0,0,"LANE "+(Q<-20?"3":Q>10?"5":"4"));else if(z==="crate_wood")Ao(mt,0,0,0,1.1,1,1.2);else if(z==="crate_stack")for(const[At,$t,de]of[[-.6,0,-.4],[.55,0,-.32],[-.28,1.04,.08]])Ao(mt,At,$t,de,1.1,1,.86)}const Z=zt(9673105,.89,.04),W=zt(10521439,.87,.06);for(let z=-35;z<28;z+=7){const Q=rt(i,[1.8,.012,.065],[z,.035,6],Z);Q.renderOrder=2}for(const z of[-.85,12.8]){const Q=rt(i,[74,.011,.09],[-7,.036,z],W);Q.renderOrder=2}for(let z=-32;z<28;z+=10)for(const Q of[-.5,12.45]){rt(i,[1.5,.015,.48],[z,.024,Q],qe);for(let wt=0;wt<6;wt++)rt(i,[.06,.018,.42],[z-.6+wt*.23,.04,Q],Re)}const ht=Lv();for(let z=-2;z<11;z+=1.24){const Q=new j(new Ce(2.5,1.05),ht);Q.rotation.x=-Math.PI/2,Q.position.set(-31,.045,z),Q.renderOrder=2,i.add(Q)}for(let z=0;z<73;z++){const Q=-36+lt()*64,wt=-26+lt()*54;lt()<.8&&Vh(i,Q,wt,.42+lt()*2.3)}s1(i);const yt=new Vt;yt.position.set(75,-2.6,-13),i.add(yt),rt(yt,[32,7,85],[0,0,0],zt(1318440,.35,.48)),rt(yt,[25,7,15],[0,7,-21],zt(5399402,.67,.4));for(let z=-7;z<39;z+=8)for(const Q of[-8,0,8])rt(yt,[6,2.9,6.5],[Q,5,z],cc(qu));o1(i);const Rt=r1(i,t?950:2700),Gt=k.map((z,Q)=>({p:z,phase:Q*1.38}));return{scene:i,obstacles:c,hitSurfaces:h,rain:Rt.rain,lamps:k,tick:(z,Q,wt,G)=>{Rt.update(z,wt,G),Xu.time.value=Q,u(Q),l&&(l.material.uniforms.time.value=Q);for(const{p:et,phase:mt}of Gt)et.intensity=8.5+Math.sin(Q*1.9+mt)*.7}}}function ji(i,t,e,n=.42){return t<-43||t>30.5||e>32||e<-33?!0:i.some(s=>s.height>1&&t+n>s.minX&&t-n<s.maxX&&e+n>s.minZ&&e-n<s.maxZ)}const js=new S;function Mn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;js.copy(t),js[n]=0,js.normalize();const c=.5*o/(o+a),h=1-js.angleTo(i)/l;return Math.sign(js[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Ko extends An{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new S,c=new S,h=new S(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new S,m=.5/o;for(let p=0,b=0;p<u.length;p+=3,b+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[b+0]=Mn(_,c,"z","y",r,n),f[b+1]=1-Mn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[b+0]=1-Mn(_,c,"z","y",r,n),f[b+1]=1-Mn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[b+0]=1-Mn(_,c,"x","z",r,t),f[b+1]=Mn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[b+0]=1-Mn(_,c,"x","z",r,t),f[b+1]=1-Mn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[b+0]=1-Mn(_,c,"x","y",r,t),f[b+1]=1-Mn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[b+0]=Mn(_,c,"x","y",r,t),f[b+1]=1-Mn(_,c,"y","x",r,e);break}}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.segments,t.radius)}}const si=new ye({color:3620672,metalness:.77,roughness:.36}),Il=new ye({color:2699319,metalness:.72,roughness:.49}),$e=new ye({color:1778729,metalness:.65,roughness:.42}),xi=new ye({color:8159867,metalness:.87,roughness:.29}),Dn=new ye({color:5133140,metalness:.86,roughness:.38}),Dl=new ye({color:2107180,metalness:.14,roughness:.77}),Ss=new ye({color:2830905,metalness:.01,roughness:1}),Ul=new ye({color:2108212,metalness:.02,roughness:.98});new ye({color:10126434,metalness:.65,roughness:.38});new Iu({color:3501437,metalness:.25,roughness:.1,transparent:!0,opacity:.58,clearcoat:1});const l1=new re({color:15365459});function c1(i=42){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#e7e5df",e.fillRect(0,0,512,512);let n=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let r=0;r<16e3;r++){const o=n()*512,a=n()*512,l=n();e.fillStyle=l<.6?`rgba(10,13,16,${n()*.09})`:`rgba(255,252,235,${n()*.05})`,e.fillRect(o,a,.15+n()*1.3,.2+n()*6)}for(let r=0;r<220;r++){const o=n()*512,a=n()*512;e.strokeStyle=n()<.5?`rgba(12,18,24,${.025+n()*.12})`:`rgba(255,252,243,${.04+n()*.2})`,e.lineWidth=.25+n()*.7,e.beginPath(),e.moveTo(o,a),e.lineTo(o+1+n()*42,a+(n()-.5)*2),e.stroke()}for(let r=0;r<38;r++){const o=n()*512,a=n()*512,l=5+n()*40,c=e.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(20,22,20,${n()*.14})`),c.addColorStop(1,"rgba(20,22,20,0)"),e.fillStyle=c,e.fillRect(o-l,a-l,l*2,l*2)}const s=new Ke(t);return s.colorSpace=Ee,s.wrapS=s.wrapT=hi,s.repeat.set(2,2),s.anisotropy=8,s}function h1(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#a1a9ae",t.fillRect(0,0,256,256);let e=2805;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);for(let r=0;r<256;r+=3)for(let o=0;o<256;o+=3){const a=Math.floor(n()*28);t.fillStyle=`rgba(${30+a},${35+a},${40+a},.16)`,t.fillRect(o+(Math.floor(r/3)%2?1:0),r,2.2,1)}for(let r=0;r<900;r++){const o=n()*256,a=n()*256;t.fillStyle=`rgba(15,19,24,${n()*.12})`,t.fillRect(o,a,1,4+n()*7)}const s=new Ke(i);return s.colorSpace=Ee,s.wrapS=s.wrapT=hi,s.repeat.set(4,3),s.anisotropy=8,s}const Gh=h1();for(const i of[Ss,Ul])i.map=Gh,i.bumpMap=Gh,i.bumpScale=.012;const Wh=c1();for(const i of[si,Il,$e,xi,Dn])i.map=Wh,i.bumpMap=Wh,i.bumpScale=.006,i.needsUpdate=!0;const u1=new An(1,1,1),be=new Ko(1,1,1,2,.12);function ne(i,t,e,n,s=u1,r){const o=new j(s,n);return o.position.set(...t),o.scale.set(...e),r&&o.rotation.set(...r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function Qs(i,t,e,n,s,r=14){const o=new j(new ie(e,e,n,r),s);return o.rotation.x=Math.PI/2,o.position.set(...t),o.castShadow=!0,i.add(o),o}function d1(){const i=document.createElement("canvas");i.width=512,i.height=128;const t=i.getContext("2d");t.fillStyle="#30383a",t.fillRect(0,0,i.width,i.height),t.fillStyle="#d3d5c9",t.font="700 43px monospace",t.fillText("PAC-9",13,57),t.fillStyle="#a6a89d",t.font="24px monospace",t.fillText("LONGSHORE  //  B4  /  05:42",14,94);const e=new Ke(i);return e.colorSpace=Ee,new re({map:e,transparent:!0,opacity:.83,depthWrite:!1})}function Xh(i,t){const e=new zs;e.moveTo(.12,-.13),e.lineTo(1.46,-.13),e.lineTo(1.52,-.07),e.lineTo(1.52,.075),e.lineTo(1.43,.13),e.lineTo(.12,.13),e.closePath();for(let r=0;r<7;r++){const o=.3+r*.171;for(const a of[-.055,.056]){const l=new bo;l.absellipse(o,a,.049,.027,0,Math.PI*2,!0,0),e.holes.push(l)}}const n=new ns(e,{depth:.018,bevelEnabled:!0,bevelThickness:.009,bevelSize:.006,bevelSegments:1,steps:1,curveSegments:8});n.rotateY(Math.PI/2);const s=new j(n,si);s.position.set(t*.136,-.013,0),s.castShadow=!0,i.add(s);for(let r=0;r<3;r++)ne(i,[t*.16,-.115+r*.116,-.88],[.026,.017,1.36],Dn)}function f1(i){const t=new zs;t.moveTo(-.16,-.12),t.lineTo(.42,-.12),t.lineTo(.54,-.27),t.lineTo(.8,-.27),t.lineTo(.91,-.17),t.lineTo(.91,.03),t.lineTo(.77,.17),t.lineTo(-.16,.14),t.closePath();const e=new bo;e.absellipse(.55,-.015,.24,.083,0,Math.PI*2,!0),t.holes.push(e);const n=new j(new ns(t,{depth:.22,bevelEnabled:!0,bevelSegments:2,bevelSize:.016,bevelThickness:.016,curveSegments:12}),Dl);n.rotation.y=Math.PI/2,n.position.set(-.11,-.125,.15),i.add(n),ne(i,[0,-.12,.93],[.31,.38,.11],Dl,be),ne(i,[0,-.12,.99],[.33,.42,.058],$e,be);for(let s=0;s<6;s++)ne(i,[.171,-.1+s*.049,.95],[.012,.018,.11],Dn)}function p1(i){ne(i,[0,-.34,.36],[.15,.4,.2],Dl,be,[.24,0,0]);for(let l=0;l<4;l++)ne(i,[.1,-.26-l*.075,.42],[.026,.027,.19],$e);const t=new j(new an(.12,.017,6,18,Math.PI*1.6),Dn);t.rotation.y=Math.PI/2,t.position.set(.07,-.25,.22),i.add(t);const e=new Vt;e.position.set(-.29,-.17,-.84),i.add(e);const n=new j(new ie(.12,.17,.55,16),Ul);n.rotation.set(.59,0,-.28),n.position.set(-.18,-.27,.2),e.add(n);const s=ne(e,[-.125,-.195,.055],[.34,.19,.29],Ss,be,[0,0,-.23]);s.rotation.y=-.1,ne(e,[-.022,.006,-.04],[.27,.15,.28],Ss,be,[0,0,-.18]);for(let l=0;l<4;l++){const c=ne(e,[-.17+l*.078,.075,-.175],[.069,.082,.23],Ss,be,[-.27,0,0]);c.rotation.y=.06+l*.05,ne(e,[-.17+l*.078,.105,-.155],[.063,.017,.11],Dn)}const r=ne(e,[.134,-.058,-.018],[.105,.12,.18],Ss,be,[0,.2,-.42]);r.rotation.y=.42;const o=new Vt;o.position.set(.16,-.44,.73),i.add(o);const a=new j(new ie(.12,.18,.55,14),Ul);a.rotation.set(.47,.08,.11),a.position.set(.14,-.19,.12),o.add(a);for(let l=0;l<4;l++)ne(o,[.13,-.03-l*.13,.01+l*.065],[.28,.023,.27],Ss,be,[.47,.08,.1])}class m1{root=new Vt;muzzle=new Vt;flash=new j(new Ce(.19,.42),new re({color:16769181,transparent:!0,opacity:0,depthWrite:!1,side:Ne,blending:Zi}));light=new Pi(16757852,0,6,2);kick=0;reloadAnim=0;aim=0;time=0;constructor(t){t.add(this.root);const e=this.root;ne(e,[0,-.11,.19],[.34,.24,.75],Il,be),ne(e,[0,.025,.075],[.37,.2,.72],si,be),ne(e,[0,.112,.035],[.3,.07,.66],$e,be),ne(e,[0,-.015,-.17],[.33,.185,.48],Dn,be),ne(e,[0,.032,.49],[.39,.12,.15],si,be),Qs(e,[0,-.014,-1.04],.088,1.4,$e),Xh(e,-1),Xh(e,1),ne(e,[0,-.133,-.84],[.25,.029,1.33],$e),ne(e,[0,.139,-.83],[.27,.026,1.41],$e);for(let u=0;u<18;u++){const d=-1.46+u*.103;ne(e,[0,.169,d],[.23,.025,.041],u%4===0?xi:si,be)}for(let u=0;u<8;u++)ne(e,[0,-.145,-1.38+u*.16],[.22,.023,.04],Dn);for(const u of[-1,1])for(let d=0;d<5;d++)ne(e,[u*.147,.002,-.93+d*.2],[.018,.05,.086],Dn);Qs(e,[0,-.014,-1.87],.064,.73,xi),Qs(e,[0,-.014,-2.04],.084,.27,$e);for(let u=0;u<4;u++){const d=Qs(e,[0,-.014,-2.06+u*.065],.084,.015,Dn);d.material=xi}Qs(e,[0,-.014,-2.2],.08,.18,si);for(const u of[-1,1])for(let d=0;d<2;d++)ne(e,[u*.081,0,-2.24+d*.071],[.016,.036,.046],$e);for(const u of[-1,1]){for(const d of[-.13,.2,.46]){const f=new j(new ie(.022,.022,.012,12),xi);f.rotation.z=Math.PI/2,f.position.set(u*.185,-.085,d),e.add(f)}ne(e,[u*.19,-.007,.11],[.019,.09,.19],$e),ne(e,[u*.2,-.02,.3],[.01,.035,.085],xi)}const n=ne(e,[-.205,.045,-.08],[.02,.08,.24],$e,be);n.rotation.z=-.1;const s=new j(new Ce(.26,.066),d1());s.rotation.y=-Math.PI/2,s.position.set(-.201,-.055,.18),e.add(s),ne(e,[0,-.37,.16],[.22,.38,.25],Il,be,[.2,0,0]),ne(e,[0,-.57,.08],[.23,.09,.26],$e,be,[.2,0,0]);for(let u=0;u<9;u++)ne(e,[.113,-.26-u*.037,.13-u*.009],[.014,.019,.23],Dn);f1(e);const r=new Vt;r.position.set(0,.155,-.38),r.scale.setScalar(.83),e.add(r),ne(r,[0,.024,0],[.22,.075,.34],$e,be);for(const u of[-1,1]){ne(r,[u*.156,.242,-.045],[.057,.282,.205],Dn,be),ne(r,[u*.156,.243,.088],[.048,.23,.038],si,be);for(const f of[-.09,.08])ne(r,[u*.147,.14,f],[.044,.052,.047],xi,be);const d=ne(r,[u*.156,.385,-.043],[.056,.045,.19],$e,be);d.rotation.z=u*.035}ne(r,[0,.399,-.044],[.355,.063,.22],si,be),ne(r,[0,.11,-.045],[.35,.072,.22],$e,be),ne(r,[0,.445,-.045],[.303,.017,.16],$e,be);const o=new re({color:3232871,transparent:!0,opacity:.31,depthWrite:!1,side:Ne}),a=new j(new Ce(.245,.225),o);a.position.set(0,.26,.052),r.add(a);const l=new j(new Ce(.243,.223),new re({color:5801114,transparent:!0,opacity:.08,depthWrite:!1,side:Ne}));l.position.set(0,.26,-.112),r.add(l);const c=new re({color:16742230,transparent:!0,opacity:.68,depthWrite:!1,side:Ne,blending:Zi}),h=new j(new an(.042,.0038,6,32),c);h.position.set(0,.256,.059),r.add(h),ne(r,[0,.256,.065],[.008,.008,.004],l1);for(const u of[-1,1]){ne(r,[u*.205,.28,-.01],[.046,.05,.11],si,be);const d=new j(new ie(.045,.045,.024,14),$e);d.rotation.z=Math.PI/2,d.position.set(u*.228,.28,.003),r.add(d)}for(const u of[-.21,.11])ne(r,[0,.05,u],[.28,.038,.083],xi,be);p1(e),this.muzzle.position.set(0,-.013,-2.3),e.add(this.muzzle),this.flash.rotation.z=.3,this.muzzle.add(this.flash),this.muzzle.add(this.light),this.root.scale.setScalar(.89),this.root.position.set(.68,-.645,-.92),this.root.rotation.y=.16}shoot(){this.kick=1,this.flash.material.opacity=1,this.flash.rotation.z=Math.random()*6,this.light.intensity=17}reload(){this.reloadAnim=1}update(t,e,n,s,r){this.time+=t,this.kick=Math.max(0,this.kick-t*5.2),this.aim=pe.damp(this.aim,r?1:0,11,t),this.reloadAnim=Math.max(0,this.reloadAnim-t/1.45);const o=Math.sin(this.time*(s?14:9))*Math.min(.016,n*.012);this.root.position.set(.68-this.aim*.56+Math.sin(e*2)*.003,-.645+this.aim*.29+o-this.kick*.073,-.91-this.aim*.16+this.kick*.13),this.root.rotation.set(-this.kick*.16+Math.sin(e*1.3)*.004+Math.sin(this.reloadAnim*Math.PI)*.31,.16-this.aim*.16,Math.sin(e*6)*Math.min(n*.011,.018)+Math.sin(this.reloadAnim*Math.PI)*-.3),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*14),this.light.intensity=Math.max(0,this.light.intensity-t*210)}}const me={hp:140,runSpeed:4.5,patrolSpeed:1.5,stalkSpeed:2,accel:7,turnRate:2.5,rangeMin:8,rangeMax:18,fireRange:42,telegraph:.5,burst:4,burstGap:.11,shotDamage:5,cooldownMin:1.8,cooldownMax:3,lungeRange:3,lungeWind:.28,lungeSpeed:9.5,lungeDuration:.36,lungeDamage:15,lungeHitRange:1.35,lungeCooldown:3.5,recover:.55};class g1{phase="move";phaseTime=0;cooldown=.8;lungeCooldown=.3;shotsRemaining=0;shotGap=0;moveTime=0;didMelee=!1;bursts=0;random;constructor(t=Math.random){this.random=t,this.cooldown=.6+t()}enter(t,e=0){this.phase=t,this.phaseTime=e}reposition(t){this.enter("move"),this.moveTime=0,this.bursts=0,t.reposition=!0}update(t,e){const n={telegraph:!1,fire:!1,melee:!1,beganLunge:!1,reposition:!1};if(this.cooldown-=t,this.lungeCooldown-=t,!e.alerted)return this.enter("move"),this.moveTime=0,n;const s=e.distance,r=e.lineOfSight;switch((this.phase==="move"||this.phase==="aim"||this.phase==="cool")&&r&&s<me.lungeRange&&this.lungeCooldown<=0&&(this.enter("wind",me.lungeWind),n.telegraph=!0),this.phase){case"move":this.moveTime+=t,e.playerMovedFromPlan?(n.reposition=!0,this.moveTime=0):(e.reachedFiringPosition||this.moveTime>7||this.moveTime>1.4&&r&&s>me.rangeMin-1&&s<me.rangeMax+2&&this.random()<t*.7)&&this.enter("aim");break;case"aim":case"cool":if(this.phaseTime+=t,r){if(s<me.rangeMin-3&&this.phaseTime>.8){this.reposition(n);break}this.cooldown<=0&&e.aligned&&e.canClaimVolley&&(this.enter("tele",me.telegraph),n.telegraph=!0)}else((e.timeWithoutSight??0)>1.1||this.phaseTime>3)&&this.reposition(n);break;case"tele":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("burst"),this.shotsRemaining=me.burst,this.shotGap=0);break;case"burst":this.shotGap-=t,this.shotsRemaining>0&&this.shotGap<=0&&(this.shotsRemaining--,this.shotGap+=me.burstGap,n.fire=!0),this.shotsRemaining<=0&&(this.cooldown=me.cooldownMin+this.random()*(me.cooldownMax-me.cooldownMin),this.bursts++,this.bursts>=1+(this.random()<.4?1:0)?this.reposition(n):this.enter("cool"));break;case"wind":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("lunge",me.lungeDuration),this.didMelee=!1,n.beganLunge=!0);break;case"lunge":this.phaseTime-=t,!this.didMelee&&s<me.lungeHitRange&&(this.didMelee=!0,n.melee=!0),this.phaseTime<=0&&(this.enter("recover",me.recover),this.lungeCooldown=me.lungeCooldown);break;case"recover":this.phaseTime-=t,this.phaseTime<=0&&this.enter("move");break}return n}}class _1{yaw=0;yawRate=0;speed=0;reset(t,e=0){this.yaw=t,this.speed=e,this.yawRate=0}beginLunge(t){this.yaw=t,this.yawRate=0,this.speed=me.lungeSpeed}endLunge(){this.speed*=.3}step(t,e,n,s,r=!1){const o=Math.atan2(Math.sin(e-this.yaw),Math.cos(e-this.yaw)),a=me.turnRate,l=Math.max(-a,Math.min(a,o*6))*(r?2:1);this.yawRate+=(l-this.yawRate)*(1-Math.exp(-10*t)),this.yaw+=this.yawRate*t;const c=r?me.lungeSpeed:s<.45||Math.abs(o)>1.1?0:Math.max(0,Math.min(n*(1-Math.abs(o)*.5),.4+s*2.6));return r?this.speed=me.lungeSpeed:c>this.speed?this.speed=Math.min(c,this.speed+me.accel*t):this.speed=Math.max(c,this.speed-me.accel*1.4*t),{yaw:this.yaw,yawRate:this.yawRate,speed:this.speed,targetSpeed:c,error:o}}}const yi=new ye({color:3492173,roughness:.42,metalness:.78}),Fe=new ye({color:8160640,roughness:.45,metalness:.72}),Oe=new ye({color:3423035,roughness:.71,metalness:.38}),fo=new ye({color:11053728,roughness:.41,metalness:.69}),vi=new ye({color:1778210,roughness:.92,metalness:.14}),Fa=new re({color:16214853}),Yh=new re({color:15970401});new ye({color:10373431,roughness:.54,metalness:.48});const Mi=new ye({color:11908263,roughness:.54,metalness:.46}),_n=new ye({color:13683124,roughness:.62,metalness:.29}),Hi=new ye({color:12153150,roughness:.59,metalness:.37}),Ku=new Ko(1,1,1,2,.075);function v1(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");let e=12122026;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);t.fillStyle="#dedad2",t.fillRect(0,0,256,256);for(let r=0;r<7e3;r++){const o=n()*256,a=n()*256;t.fillStyle=n()>.5?"rgba(5,15,20,.13)":"rgba(255,255,255,.08)",t.fillRect(o,a,.1+n()*2,.1+n()*7)}for(let r=0;r<180;r++){const o=n()*256,a=n()*256;t.strokeStyle="rgba(37,40,41,.16)",t.lineWidth=.25+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+n()*30,a+n()),t.stroke()}const s=new Ke(i);return s.colorSpace=Ee,s.wrapS=s.wrapT=hi,s.repeat.set(2,2),s.anisotropy=4,s}function x1(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#f7f6ef",t.fillRect(0,0,512,512);let e=930522;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<18e3;r++){const o=n()*512,a=n()*512;t.fillStyle=n()<.6?`rgba(39,42,39,${n()*.065})`:`rgba(145,120,84,${n()*.035})`,t.fillRect(o,a,.4+n()*2.5,.3+n()*1.8)}for(let r=0;r<350;r++){const o=n()*512,a=n()*512;t.strokeStyle=n()<.85?`rgba(30,36,35,${.04+n()*.18})`:`rgba(122,62,30,${.06+n()*.12})`,t.lineWidth=.35+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+(n()-.5)*75,a+(n()-.5)*5),t.stroke()}for(let r=0;r<100;r++){const o=n()*512,a=n()*512,l=3+n()*37,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(37,46,44,${.04+n()*.16})`),c.addColorStop(1,"rgba(37,46,44,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,2*l,2*l)}const s=new Ke(i);return s.colorSpace=Ee,s.wrapS=s.wrapT=hi,s.repeat.set(1.4,1.4),s.anisotropy=8,s}const qh=x1();for(const i of[Mi,_n])i.map=qh,i.bumpMap=qh,i.bumpScale=.005,i.needsUpdate=!0;function y1(i){const t=document.createElement("canvas");t.width=256,t.height=96;const e=t.getContext("2d");e.fillStyle="rgba(25,31,32,.76)",e.font="700 60px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,45);let n=1119;for(let r=0;r<170;r++){n=Math.imul(n,1664525)+1013904223>>>0;const o=n/4294967296*256;n=Math.imul(n,1664525)+1013904223>>>0;const a=n/4294967296*96;e.clearRect(o,a,1.1+(n>>>14)%4,1.4)}const s=new Ke(t);return s.colorSpace=Ee,new re({map:s,transparent:!0,depthWrite:!1,side:Ne,polygonOffset:!0,polygonOffsetFactor:-1})}const $h=v1();for(const i of[yi,Fe,Oe,fo])i.map=$h,i.bumpMap=$h,i.bumpScale=.009,i.needsUpdate=!0;const Ro=document.createElement("canvas");Ro.width=Ro.height=128;const hc=Ro.getContext("2d"),br=hc.createRadialGradient(64,64,3,64,64,63);br.addColorStop(0,"rgba(255,235,178,1)");br.addColorStop(.14,"rgba(255,142,67,.85)");br.addColorStop(.4,"rgba(252,84,31,.3)");br.addColorStop(1,"rgba(252,84,31,0)");hc.fillStyle=br;hc.fillRect(0,0,128,128);const M1=new Ke(Ro),S1=new re({color:16771256});let E1=0;const Ju=new Wn(1,20,14);function Xt(i,t,e,n,s){const r=new j(Ku,n);return r.position.set(...t),r.scale.set(...e),s&&r.rotation.set(...s),r.castShadow=!0,i.add(r),r}function ro(i,t,e,n){const s=new j(Ju,n);return s.position.set(...t),s.scale.set(...e),s.castShadow=!0,i.add(s),s}function In(i,t,e,n,s,r=8){const o=e.clone().sub(t),a=new j(new ie(n,n,o.length(),r),s);return a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a.castShadow=!0,i.add(a),a}function ju(i,t){for(const n of[...i.children])n.type==="Group"&&ju(n,t);const e=new Map;for(const n of i.children){if(!(n instanceof j)||t.has(n)||Array.isArray(n.material))continue;const s=e.get(n.material)||[];s.push(n),e.set(n.material,s)}for(const[n,s]of e){if(s.length<2)continue;const r=s.map(l=>{l.updateMatrix();const c=l.geometry.clone();return c.applyMatrix4(l.matrix),c}),o=lc(r,!1);for(const l of r)l.dispose();if(!o)continue;const a=new j(o,n);a.castShadow=!0,a.receiveShadow=!0;for(const l of s)i.remove(l);i.add(a)}}class w1{kind;root=new Vt;body=new Vt;head=new Vt;turret=new Vt;gun=new Vt;legs=[];knees=[];feet=[];rotors=[];footWorld=[];stepStart=[];stepEnd=[];lastRoot=new S;stepPair=-1;stepT=0;lastPair=1;bodyBounce=.72;bodyBounceVelocity=0;headYaw=0;headPitch=.05;antenna;leanPitch=0;leanRoll=0;recoilPitch=0;recoilPitchVelocity=0;turretPitch=0;hitShift=0;hitShiftVelocity=0;hitRoll=0;hitRollVelocity=0;hound=new g1;houndDrive=new _1;houndPush=new S;tacticalGoal=new S;tacticalGoalUntil=0;houndTurretYaw=0;houndGunPitch=0;houndHeadYaw=0;houndHeadPitch=.05;houndWarning=0;warningLens;warningHalo;deathElapsed=0;deathVelocity=0;deathImpact=!1;deathPitch=0;deathRoll=0;deathSink=0;deathOrder=0;wreckFrozen=!1;wreckBatchCount=0;deathPitchVelocity=0;deathRollVelocity=0;deathFootSlides=[];deathSmokeClock=0;health;maxHealth;alive=!0;phase=Math.random()*Math.PI*2;targetable=[];shootTimer=1+Math.random()*2;speed=1.1+Math.random()*.4;lastHitAt=0;hitFlash=0;isTarget=!0;home=new S;route=[];routeTimer=0;lastPlayerPosition=new S;houndLastKnown=new S;houndSeeTime=0;houndNoSeeTime=0;houndSenseTimer=0;houndHasLos=!1;houndModeTime=0;houndSearchScan=0;heading=0;mode="patrol";alerted=!1;originalMaterials=new Map;constructor(t,e,n){this.kind=t,this.health=t==="gull"?72:me.hp,this.maxHealth=this.health,this.speed=t==="gull"?1.85:me.patrolSpeed,this.root.position.set(e,0,n),this.home.set(e,0,n),this.root.add(this.body),this.routeTimer=Math.random(),t==="hound"?(this.buildHound(),this.body.position.y=.72,this.houndDrive.reset(this.root.rotation.y)):this.buildGull(),t==="hound"&&ju(this.body,new Set(this.feet)),this.kind==="hound"&&this.head.traverse(s=>{s instanceof j&&(s.userData.enemyPart="head")}),this.body.traverse(s=>{s instanceof j&&(s.userData.enemy=this,this.targetable.push(s),this.originalMaterials.set(s,s.material))}),this.lastRoot.copy(this.root.position)}buildHound(){const t=this.body;Xt(t,[0,0,0],[.27,.2,.98],Oe),Xt(t,[0,.123,.31],[.35,.053,.3],Mi),Xt(t,[0,.123,-.015],[.35,.053,.36],Mi),Xt(t,[0,.127,-.012],[.1,.054,.36],yi);for(const c of[-.15,.15])for(const h of[.21,.45,-.17,.145]){const u=new j(new Wn(.009,7,5),Fe);u.position.set(c,.156,h),t.add(u)}Xt(t,[0,.113,-.335],[.31,.032,.25],Fe);for(let c=0;c<10;c++)Xt(t,[-.126+c*.028,.156,-.335],[.007,.063,.225],Oe);for(const c of[-1,1]){const h=c;Xt(t,[h*.152,.023,-.075],[.035,.15,.31],_n),Xt(t,[h*.152,-.038,.164],[.035,.045,.46],Mi),Xt(t,[h*.149,-.078,.005],[.034,.042,.45],Hi),Xt(t,[h*.151,.015,.305],[.03,.1,.12],_n);for(const u of[-.21,-.07,.06,.12,.21])for(const d of[-.04,.08]){const f=new j(new Wn(.008,7,5),fo);f.position.set(h*.173,d,u),t.add(f)}In(t,new S(h*.135,.145,-.18),new S(h*.135,.205,.45),.01,Fe,8),Xt(t,[h*.142,-.11,-.015],[.028,.065,.57],Mi)}Xt(t,[0,-.005,.505],[.3,.15,.075],Hi),Xt(t,[0,.012,.548],[.2,.07,.02],vi);for(let c=0;c<6;c++)Xt(t,[-.125+c*.05,-.098,.542],[.05,.034,.014],c%2?vi:_n);for(const c of[-.115,.115]){const h=new j(new ie(.021,.021,.014,12),Oe);h.rotation.x=Math.PI/2,h.position.set(c,.012,.55),t.add(h);const u=new j(new ie(.015,.015,.006,12),S1);u.rotation.x=Math.PI/2,u.position.set(c,.012,.562),t.add(u)}const e=y1("H-"+String(Math.abs(Math.round(this.root.position.x*11+this.root.position.z*13))%90+3).padStart(2,"0"));for(const c of[-1,1]){const h=new j(new Ce(.2,.085),e);h.rotation.y=c*Math.PI/2,h.position.set(c*.182,.025,-.085),t.add(h)}Xt(t,[0,-.02,-.51],[.3,.155,.07],_n),Xt(t,[0,.031,-.553],[.17,.048,.021],Oe),Xt(t,[0,.031,-.57],[.13,.013,.007],Fa),Xt(t,[0,-.145,0],[.24,.092,.56],Fe);for(const c of[-.12,.12])Xt(t,[0,-.14,c],[.246,.028,.09],vi);const n=new Vt;n.position.set(0,.06,.49),t.add(n),In(n,new S(0,-.02,-.02),new S(0,.11,.11),.041,Oe,12),Xt(n,[0,.027,-.018],[.14,.085,.17],Fe),n.add(this.head),this.head.position.set(0,.13,.12),Xt(this.head,[0,0,0],[.19,.118,.25],_n),Xt(this.head,[0,-.006,.126],[.17,.075,.035],yi);const s=new j(new An(.128,.025,.008),new re({color:16772043,transparent:!0,opacity:.92,depthWrite:!1}));s.position.set(0,.007,.149),this.head.add(s),this.warningLens=s;for(const c of[-.056,.056]){const h=new j(new ie(.015,.015,.015,12),Fe);h.rotation.x=Math.PI/2,h.position.set(c,-.023,.156),this.head.add(h)}Xt(this.head,[0,.06,0],[.065,.008,.2],Oe);const r=new j(new ie(.034,.034,.026,14),yi);r.position.set(0,.078,-.05),this.head.add(r),this.turret.position.set(0,.152,-.03),t.add(this.turret);const o=new j(new ie(.101,.106,.032,20),Fe);o.position.y=.013,this.turret.add(o),Xt(this.turret,[0,.033,0],[.18,.023,.16],yi),this.gun.position.set(0,.095,.02),this.turret.add(this.gun),Xt(this.gun,[0,0,-.01],[.11,.086,.21],_n),Xt(this.gun,[0,-.024,-.014],[.11,.021,.212],Oe),In(this.gun,new S(0,0,.14),new S(0,0,.395),.029,Fe,12);for(let c=.11;c<.23;c+=.026){const h=new j(new an(.041,.008,6,14),Oe);h.position.z=c,this.gun.add(h)}Xt(this.gun,[0,0,.395],[.074,.074,.058],Fe);const a=new yo(new Ql({map:M1,color:16753758,transparent:!0,blending:Zi,depthWrite:!1,opacity:0}));a.position.set(0,.045,.47),a.scale.set(.5,.5,1),a.visible=!1,this.gun.add(a),this.warningHalo=a;const l=new Vt;l.position.set(-.105,.15,-.46),t.add(l),this.antenna=l,In(l,new S(0,0,0),new S(0,.62,0),.004,Fe,6),ro(l,[0,.64,0],[.012,.016,.012],Yh),ro(t,[.105,.21,-.455],[.021,.026,.021],Fa);for(let c=0;c<4;c++){const h=c%2===0?1:-1,u=c<2?1:-1,d=new Vt;d.position.set(h*.165,-.01,u*.4),t.add(d),this.legs.push(d);const f=new j(new ie(.06,.06,.18,14),Fe);f.rotation.z=Math.PI/2,d.add(f),Xt(d,[0,.056,0],[.11,.052,.156],_n);const g=new j(new ie(.073,.073,.022,18),_n);g.rotation.z=Math.PI/2,g.position.x=h*.078,d.add(g);const _=new j(new ie(.041,.041,.026,16),vi);_.rotation.z=Math.PI/2,_.position.x=h*.094,d.add(_);const m=new Vt;m.position.set(h*.075,0,0),d.add(m);for(const[E,x,A,D]of[[.078,.07,_n,0],[.081,.016,Mi,h*.051],[.048,.083,Oe,0]]){const O=new j(new ie(E,E,x,18),A);O.rotation.z=Math.PI/2,O.position.x=D,m.add(O)}for(let E=0;E<5;E++){const x=E*Math.PI*2/5,A=new j(new Wn(.007,6,5),fo);A.position.set(h*.059,Math.cos(x)*.062,Math.sin(x)*.062),m.add(A)}Xt(m,[0,-.2,-.035],[.044,.36,.06],Oe),Xt(m,[0,-.205,.004],[.062,.33,.1],_n),Xt(m,[0,-.145,.004],[.065,.045,.103],Hi),Xt(m,[0,-.26,.004],[.064,.012,.102],vi),In(m,new S(0,-.06,-.082),new S(0,-.4*.62,-.078),.021,Fe,10),In(m,new S(0,-.4*.62,-.078),new S(0,-.4+.025,-.058),.009,fo,8),Xt(m,[h*.042,-.18,.06],[.008,.23,.013],Oe);const p=new Vt;p.position.set(0,-.4,0),m.add(p),this.knees.push(p);const b=new j(new ie(.05,.05,.086,14),Oe);b.rotation.z=Math.PI/2,p.add(b);const M=new j(new ie(.036,.036,.092,12),Mi);M.rotation.z=Math.PI/2,p.add(M);const v=new j(new ie(.03,.021,.34,10),Oe);v.position.set(0,-.18,0),p.add(v),Xt(p,[0,-.14,.02],[.052,.21,.04],_n),Xt(p,[0,-.215,.02],[.054,.02,.042],Hi),Xt(p,[0,-.02,-.03],[.03,.06,.05],Fe);const R=new j(new ie(.024,.03,.03,10),Fe);R.position.set(0,-.335,0),p.add(R);const C=ro(p,[0,-.385,.004],[.046,.041,.05],vi);C.name=`HoundFoot${c}`,this.feet.push(C);const P=h*.275,I=u*(u===1?.37:.42);this.footWorld.push(this.root.position.clone().add(new S(P,0,I)))}this.stepStart=this.footWorld.map(c=>c.clone()),this.stepEnd=this.footWorld.map(c=>c.clone())}buildGull(){const t=this.body;t.position.y=2.95,ro(t,[0,0,0],[.31,.2,.48],Mi),Xt(t,[0,.1,-.06],[.39,.14,.51],yi),Xt(t,[0,-.055,.34],[.3,.16,.24],Fe),Xt(t,[0,-.077,.51],[.26,.1,.11],vi),Xt(t,[0,.018,.55],[.28,.06,.055],Hi);for(const n of[-1,1]){const s=n;Xt(t,[s*.14,-.068,.558],[.08,.045,.027],Fa),Xt(t,[s*.24,.11,-.31],[.075,.12,.26],Oe,[s*.2,0,s*.14]);for(const[r,o]of[-.39,.36].entries()){const a=new Vt;a.position.set(s*.94,.035,o),t.add(a),In(t,new S(s*.19,.04,o*.2),new S(s*.94,.05,o),.059,Oe,12),Xt(t,[s*.52,.075,o*.58],[.57,.07,.19],yi,[0,s*.19,0]);const l=new Vt;a.add(l);const c=new j(new oc([new ct(.315,-.12),new ct(.366,-.12),new ct(.39,-.09),new ct(.39,.09),new ct(.367,.13),new ct(.315,.13),new ct(.31,.096),new ct(.31,-.09)],32),_n);c.castShadow=!0,c.receiveShadow=!0,l.add(c);const h=new j(new an(.365,.019,8,32),Hi);h.rotation.x=Math.PI/2,h.position.y=.124,l.add(h);const u=new j(new an(.308,.011,8,28),Oe);u.rotation.x=Math.PI/2,u.position.y=-.092,l.add(u);for(let _=0;_<4;_++){const m=_*Math.PI/2,p=In(l,new S(.08*Math.cos(m),-.055,.08*Math.sin(m)),new S(.313*Math.cos(m),-.055,.313*Math.sin(m)),.021,Fe,8);p.userData.structural=!0}const d=new Vt;d.position.y=.016,l.add(d),this.rotors.push(d);const f=new j(new ie(.08,.1,.12,16),Oe);d.add(f);for(let _=0;_<4;_++){const m=Xt(d,[.19,0,0],[.27,.016,.08],Fe,[0,_*Math.PI/2+.21,0]);m.position.set(.19*Math.cos(_*Math.PI/2),0,.19*Math.sin(_*Math.PI/2)),m.rotation.y=-_*Math.PI/2-.2}const g=new j(new ie(.13,.13,.09,14),vi);g.position.y=-.16,a.add(g);for(let _=0;_<8;_++){const m=_*Math.PI/4;Xt(a,[Math.cos(m)*.135,-.16,Math.sin(m)*.135],[.025,.06,.035],Oe,[0,m,0])}Xt(t,[s*.94,.065,o],[.1,.07,.13],Hi)}}for(const n of[-1,1])for(let s=0;s<5;s++)Xt(t,[n*.307,.16,-.36+s*.14],[.015,.05,.052],Fe);const e=new Vt;e.position.set(0,-.18,.19),t.add(e),Xt(e,[0,-.06,.12],[.2,.15,.3],Oe),In(e,new S(0,-.11,.12),new S(0,-.12,.72),.039,yi,12),Xt(e,[0,-.12,.71],[.1,.095,.13],Fe);for(const n of[-1,1])In(t,new S(n*.16,-.08,-.12),new S(n*.28,-.36,-.26),.024,Oe),In(t,new S(n*.28,-.36,-.26),new S(n*.25,-.43,-.17),.022,Fe)}solveHoundLegs(){const t=this.root,e=this.body,n=t.rotation.y,s=Math.cos(n),r=Math.sin(n);for(let o=0;o<4;o++){const a=o%2===0?1:-1,l=o<2?1:-1,c=this.legs[o],h=this.knees[o],u=this.footWorld[o],d=u.x-t.position.x,f=u.z-t.position.z,g=d*s-f*r,_=d*r+f*s,m=e.rotation.x,p=e.rotation.z,b=u.y+.046*.6-t.position.y-e.position.y,M=b*Math.cos(m)+_*Math.sin(m),v=-b*Math.sin(m)+_*Math.cos(m),R=g-this.hitShift,C=R*Math.cos(p)+M*Math.sin(p)-a*.165,P=-R*Math.sin(p)+M*Math.cos(p)+.01,I=v-l*.4,E=Math.sqrt(Math.max(1e-6,C*C+P*P-.075*.075));let x=Math.atan2(P,C)-Math.atan2(-E,a*.075);x>Math.PI&&(x-=2*Math.PI),x<-Math.PI&&(x+=2*Math.PI);const A=Math.max(Math.abs(.4-(.42-.046*.6))+.03,Math.min((.4+.42-.046*.6)*.995,Math.hypot(E,I))),D=Math.atan2(I,E),O=pe.clamp((.4*.4+A*A-(.42-.046*.6)**2)/(2*.4*A),-1,1),V=pe.clamp((.4*.4+(.42-.046*.6)**2-A*A)/(2*.4*(.42-.046*.6)),-1,1);c.rotation.z=x;const H=c.children.find(k=>k.type==="Group");H&&(H.rotation.x=Math.acos(O)-D),h.rotation.x=-(Math.PI-Math.acos(V))}}poseHound(t,e,n){const s=this.body,r=this.root,o=r.position.clone().sub(this.lastRoot);o.y=0;const a=o.length(),l=a>3,c=l?0:a/Math.max(n,.008),h=Math.min(c,5),u=pe.clamp(.27-h*.042,.075,.27),d=r.rotation.y,f=x=>x%2===0?1:-1,g=x=>x<2?1:-1,_=x=>new S(f(x)*.275,0,g(x)*(x<2?.37:.42)).applyAxisAngle(new S(0,1,0),d);if(l||this.footWorld.length!==4){for(let x=0;x<4;x++)this.footWorld[x].copy(r.position).add(_(x));this.stepPair=-1,this.stepT=0}if(this.stepPair<0){let x=-1,A=0;for(let D=0;D<2;D++){let O=0;for(const V of D===0?[0,3]:[1,2]){const H=r.position.clone().add(_(V));O=Math.max(O,Math.hypot(H.x-this.footWorld[V].x,H.z-this.footWorld[V].z))}D===this.lastPair&&(O*=.8),O>A&&(A=O,x=D)}if(x>=0&&A>(e?.09:.035)){this.stepPair=x,this.stepT=0;for(const D of x===0?[0,3]:[1,2]){this.stepStart[D].copy(this.footWorld[D]);const O=h>.15?o.normalize().multiplyScalar(h*u*1.4):new S;this.stepEnd[D].copy(r.position).add(_(D)).add(O)}}}if(this.stepPair>=0){this.stepT=Math.min(1,this.stepT+n/u);const x=this.stepT*this.stepT*(3-2*this.stepT);for(const A of this.stepPair===0?[0,3]:[1,2])this.footWorld[A].lerpVectors(this.stepStart[A],this.stepEnd[A],x),this.footWorld[A].y=Math.sin(Math.PI*this.stepT)*(.065+Math.min(.09,h*.02));this.stepT>=1&&(this.lastPair=this.stepPair,this.stepPair=-1)}this.lastRoot.copy(r.position);const m=.72-(this.stepPair>=0?.025:0),p=Math.min(.05,n);this.bodyBounceVelocity+=(m-this.bodyBounce)*80*p,this.bodyBounceVelocity*=Math.exp(-12*p),this.bodyBounce+=this.bodyBounceVelocity*p,s.position.y=pe.clamp(this.bodyBounce,.67,.76);let b=0,M=0,v=0,R=0;for(let x=0;x<4;x++){const A=this.footWorld[x];x<2?b+=A.y:M+=A.y,x%2===0?R+=A.y:v+=A.y}const C=Math.atan2(R-v,.55)*.33,P=Math.atan2(M-b,.8)*.33;this.leanPitch=pe.damp(this.leanPitch,P,8,n),this.recoilPitchVelocity+=(-130*this.recoilPitch-15*this.recoilPitchVelocity)*n,this.recoilPitchVelocity=pe.clamp(this.recoilPitchVelocity,-6,6),this.recoilPitch+=this.recoilPitchVelocity*n,s.rotation.x=this.leanPitch+this.recoilPitch,this.leanRoll=pe.damp(this.leanRoll,C,8,n),this.hitShiftVelocity+=(-110*this.hitShift-13*this.hitShiftVelocity)*n,this.hitShift+=this.hitShiftVelocity*n,this.hitRollVelocity+=(-130*this.hitRoll-15*this.hitRollVelocity)*n,this.hitRoll+=this.hitRollVelocity*n,s.position.x=this.hitShift,s.rotation.z=this.leanRoll+this.hitRoll,this.solveHoundLegs();let E=(this.alerted?this.houndTurretYaw:0)-this.turret.rotation.y;if(E=Math.atan2(Math.sin(E),Math.cos(E)),this.turret.rotation.y+=pe.clamp(E,-4.5*n,4.5*n),this.turretPitch=pe.damp(this.turretPitch,this.alerted?this.houndGunPitch:0,10,n),this.gun.rotation.x=this.turretPitch-s.rotation.x*.5,this.headYaw=pe.damp(this.headYaw,this.alerted?this.houndHeadYaw:Math.sin(t*.7+this.phase)*.5,7,n),this.headPitch=pe.damp(this.headPitch,this.alerted?this.houndHeadPitch:.05,7,n),this.head.rotation.set(this.headPitch,this.headYaw,0),this.warningHalo){const x=this.hound.phase==="tele"||this.hound.phase==="wind",A=this.hound.phase==="burst"||this.hound.phase==="lunge",D=.55+.45*Math.sin(t*(x?28:43))**2;this.warningHalo.visible=x||A,this.warningHalo.material.opacity=(x?.85:.55)*D,this.warningHalo.scale.setScalar(x?.6+.15*D:.42)}if(this.warningLens){const x=this.houndWarning>0,A=this.warningLens.material;A.color.setHex(x?16742466:16772043),A.opacity=x?.55+.45*Math.sin(t*39)**2:.9,this.warningLens.scale.x=x?1.22:1}this.antenna&&(this.antenna.rotation.x=pe.damp(this.antenna.rotation.x,Math.sin(t*2+this.phase)*.05,4,n))}onHoundShot(){this.kind==="hound"&&(this.recoilPitchVelocity+=1.1,this.bodyBounceVelocity-=.25)}houndPose(){return{headYaw:this.head.rotation.y,headPitch:this.head.rotation.x,turretYaw:this.turret.rotation.y,gunPitch:this.gun.rotation.x,bodyPitch:this.body.rotation.x,bodyRoll:this.body.rotation.z,bodyShift:this.body.position.x,recoilPitch:this.recoilPitch,turretTarget:this.houndTurretYaw,headTarget:this.houndHeadYaw}}freezeHoundWreck(){if(this.wreckFrozen||this.kind!=="hound")return;this.root.updateMatrixWorld(!0);const t=new he().copy(this.root.matrixWorld).invert(),e=new Map,n=[];this.body.traverse(o=>{if(!(o instanceof j)||(n.push(o),Array.isArray(o.material)))return;const a=e.get(o.material)||[];a.push(o),e.set(o.material,a)});let s=0;for(const[o,a]of e){const l=a.map(h=>{const u=h.geometry.clone();if(u.applyMatrix4(new he().multiplyMatrices(t,h.matrixWorld)),!u.index){const d=u.getAttribute("position").count;u.setIndex(Array.from({length:d},(f,g)=>g))}return u}),c=l.length>1?lc(l,!1):l[0];if(c){const h=new j(c,o);if(h.castShadow=a.some(u=>u.castShadow),h.receiveShadow=a.some(u=>u.receiveShadow),this.root.add(h),s++,c!==l[0])for(const u of l)u.dispose()}else for(let h=0;h<l.length;h++){const u=new j(l[h],o);u.castShadow=a[h].castShadow,u.receiveShadow=a[h].receiveShadow,this.root.add(u),s++}}this.body.clear();const r=new Set;for(const o of n)o.geometry!==Ku&&o.geometry!==Ju&&r.add(o.geometry);for(const o of r)o.dispose();this.targetable.length=0,this.originalMaterials.clear(),this.warningHalo=void 0,this.warningLens=void 0,this.wreckFrozen=!0,this.wreckBatchCount=s}disposeWreck(){if(this.wreckFrozen)for(const t of this.root.children)t instanceof j&&t.geometry.dispose()}animateDeath(t){if(this.kind!=="hound")return{impact:!1,smoke:!1,spark:!1,retire:!1};if(this.deathSink>0)return this.deathSink+=t,this.root.position.y-=.22*t,{impact:!1,smoke:!1,spark:!1,retire:this.deathSink>3.2};this.deathElapsed+=t,this.deathElapsed>=2.2&&!this.wreckFrozen&&this.freezeHoundWreck();const e=this.body.position.y;if(this.deathVelocity-=9.8*t*(this.deathElapsed<.12?.3:1),this.deathElapsed<2.2){this.body.position.y=Math.max(.215,e+this.deathVelocity*t),this.body.position.y<=.215&&this.deathVelocity<0&&(this.deathVelocity=-this.deathVelocity*.22);const r=1-Math.exp(-3.2*t);for(let o=0;o<4;o++)this.footWorld[o].addScaledVector(this.deathFootSlides[o],r),this.deathFootSlides[o].multiplyScalar(1-r);this.deathPitchVelocity+=(60*(this.deathPitch-this.body.rotation.x)-9*this.deathPitchVelocity)*t,this.deathRollVelocity+=(60*(this.deathRoll-this.body.rotation.z)-9*this.deathRollVelocity)*t,this.body.rotation.x+=this.deathPitchVelocity*t,this.body.rotation.z+=this.deathRollVelocity*t,this.body.position.x=pe.damp(this.body.position.x,0,8,t),this.hitShift=this.body.position.x,this.head.rotation.x=pe.damp(this.head.rotation.x,.55,5,t),this.head.rotation.y=pe.damp(this.head.rotation.y,this.deathRoll,3,t),this.gun.rotation.x=pe.damp(this.gun.rotation.x,.3-this.body.rotation.x*.5,4,t),this.solveHoundLegs()}const n=!this.deathImpact&&e>.22&&this.body.position.y<=.22;if(n&&(this.deathImpact=!0),this.warningLens){const r=this.deathElapsed<1.2?Math.sin(this.deathElapsed*60)>.2?1-this.deathElapsed/1.2:.05:.02,o=this.warningLens.material;o.color.setRGB(6*r+.05,.6*r+.01,.2*r),o.opacity=this.deathElapsed<1.2?1:.14}this.deathSmokeClock-=t;const s=this.deathElapsed<6.5&&this.deathSmokeClock<=0;return s&&(this.deathSmokeClock=this.deathElapsed<2?.09:.2),{impact:n,smoke:s,spark:n||s&&this.deathElapsed<4&&Math.random()<.55,retire:!1}}animate(t,e,n=.016){if(this.kind==="hound")this.poseHound(t,e,n);else{this.body.position.y=2.9+Math.sin(t*3.5+this.phase)*.18,this.body.rotation.set(Math.sin(t*1.7+this.phase)*.045,0,Math.sin(t*2.1+this.phase)*.075);for(let s=0;s<this.rotors.length;s++)this.rotors[s].rotation.y=t*(s%2===0?46:-46)}if(this.hitFlash>0&&(this.hitFlash=Math.max(0,this.hitFlash-n),this.hitFlash<=0))for(const[s,r]of this.originalMaterials)s.material=r}damage(t,e,n="body"){if(this.alive){if(this.health-=t,this.hitFlash=.16,this.kind==="hound"&&e){const s=this.root.rotation.y,r=Math.cos(s),o=Math.sin(s),a=Math.min(1.6,t/28),l=e.x*o+e.z*r,c=e.x*r-e.z*o;this.hitShiftVelocity+=c*1.4*a,this.hitRollVelocity-=c*3.2*a,this.recoilPitchVelocity+=l*2.4*a*(n==="weak"?1.6:1),this.bodyBounceVelocity-=.5*a}if(this.kind==="gull")for(const s of this.targetable)s.material=Yh;if(this.health<=0){this.alive=!1,this.hitFlash=0;for(const[s,r]of this.originalMaterials)s.material=r;this.root.userData.dying=0,this.warningHalo&&(this.warningHalo.visible=!1),this.deathElapsed=0,this.deathVelocity=0,this.deathImpact=!1,this.kind==="hound"&&(this.wreckFrozen=!1,this.wreckBatchCount=0,this.deathSink=0,this.deathOrder=++E1),this.deathPitch=(Math.random()-.5)*.25,this.deathRoll=(Math.random()<.5?-1:1)*(.25+Math.random()*.3),this.deathPitchVelocity=(Math.random()-.5)*2,this.deathRollVelocity=this.deathRoll*3,this.stepPair=-1,this.stepT=0,this.deathFootSlides=this.footWorld.map((s,r)=>{s.y=this.root.position.y;const o=r%2===0?1:-1,a=r<2?1:-1;return new S(o*(.16+Math.random()*.2),0,a*(.05+Math.random()*.22)+(Math.random()-.5)*.1).applyAxisAngle(new S(0,1,0),this.root.rotation.y)})}}}}new ye({color:1251869,roughness:.58,metalness:.3});function Qu(i,t,e){const l=A=>pe.clamp(Math.round((A- -43)/1),0,75),c=A=>pe.clamp(Math.round((A- -33)/1),0,65),h=(A,D)=>A+D*76,u=l(i.x),d=c(i.z),f=l(t.x),g=c(t.z),_=new Uint8Array(5016);for(let A=0;A<66;A++)for(let D=0;D<76;D++){const O=-43+D*1,V=-33+A*1,H=.46;_[h(D,A)]=e.some(k=>k.height>1&&O+H>k.minX&&O-H<k.maxX&&V+H>k.minZ&&V-H<k.maxZ)?0:1}const m=new Int32Array(_.length);m.fill(-1);const p=new Int32Array(_.length);let b=0,M=0;const v=h(u,d),R=h(f,g);p[M++]=v,m[v]=v;let C=v,P=Math.abs(u-f)+Math.abs(d-g);for(;b<M;){const A=p[b++],D=A%76,O=Math.floor(A/76),V=Math.abs(D-f)+Math.abs(O-g);if(V<P&&(C=A,P=V),A===R){C=A;break}for(const[H,k]of[[0,-1],[1,0],[-1,0],[0,1]]){const Z=D+H,W=O+k;if(Z<0||Z>=76||W<0||W>=66)continue;const ht=h(Z,W);m[ht]!==-1||!_[ht]||(m[ht]=A,p[M++]=ht)}}if(C===v)return[t.clone()];const I=[];let E=C;for(;E!==v&&I.length<250;){const A=E%76,D=Math.floor(E/76);if(I.push(new S(-43+A*1,0,-33+D*1)),E=m[E],E<0)return[t.clone()]}I.reverse();const x=[];for(let A=0;A<I.length;A++){if(A+1<I.length){const D=A===0?i:I[A-1],O=I[A],V=I[A+1],H=O.x-D.x,k=O.z-D.z,Z=V.x-O.x,W=V.z-O.z;if(Math.abs(H*W-k*Z)<.001&&H*Z+k*W>=0)continue}x.push(I[A])}return C===R&&x.push(t.clone()),x}const bs=new ye({color:2569274,metalness:.72,roughness:.41}),Co=new ye({color:9398338,metalness:.62,roughness:.51}),qi=new ye({color:988957,metalness:.49,roughness:.47}),Sn=new ye({color:8294807,metalness:.7,roughness:.42}),Yi=new ye({color:4017488,metalness:.78,roughness:.44}),$i=new re({color:16761468}),b1=new re({color:1582379}),td=new ye({color:2379106,metalness:.71,roughness:.16,transparent:!0,opacity:.81}),T1=new An(1,1,1);new ie(1,1,1,10);function _e(i,t,e,n,s=T1){const r=new j(s,n);return r.position.set(...t),r.scale.set(...e),r.castShadow=!0,i.add(r),r}function wi(i,t,e,n,s){const r=e.clone().sub(t),o=new j(new ie(n,n,r.length(),8),s);return o.position.copy(t).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new S(0,1,0),r.normalize()),i.add(o),o}function ed(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#131e22",n.fillRect(0,0,e.width,e.height),n.strokeStyle="#7d9292",n.lineWidth=3,n.strokeRect(6,6,500,116),n.fillStyle="#e6e6dd",n.font="700 59px Impact,Arial Narrow,sans-serif",n.fillText(i,22,70),n.font="22px monospace",n.fillStyle="#d8a36b",n.fillText(t,22,106);const s=new Ke(e);return s.colorSpace=Ee,new re({map:s})}function Oa(i,t,e,n,s){const r=new Vt;r.position.set(n,0,s),r.rotation.y=t==="B"?-.26:t==="C"?.23:-.15,i.add(r),_e(r,[0,.08,0],[1.28,.16,.92],bs),_e(r,[0,.28,0],[1.04,.36,.71],Yi),_e(r,[0,.78,0],[.8,1.02,.58],qi),_e(r,[0,1.3,0],[.95,.15,.72],Yi);for(const m of[-1,1]){_e(r,[m*.49,.73,0],[.12,1.27,.72],Yi);for(const p of[-.27,.27])_e(r,[m*.5,.2,p],[.16,.12,.12],Co);for(let p=0;p<4;p++)_e(r,[m*.435,.6+p*.17,-.325],[.018,.08,.12],Sn)}_e(r,[0,.83,.327],[.57,.69,.058],bs),_e(r,[0,.97,.368],[.42,.29,.026],td);for(let m=0;m<8;m++)_e(r,[-.19+m*.054,.96,.388],[.022,.17,.015],m%3?qi:Sn);for(let m=0;m<3;m++)_e(r,[0,.47+m*.07,.36],[.29,.017,.027],Co),_e(r,[.24,.46+m*.09,.37],[.048,.03,.018],Sn);const o=[];for(const m of[-1,1]){const p=_e(r,[m*.28,1.34,.24],[.12,.035,.12],$i);o.push(p);for(let b=0;b<4;b++)_e(r,[m*.17,.33+b*.1,.364],[.035,.025,.017],$i)}for(let m=0;m<3;m++){const p=new Eo([new S(-.33,.2,-.24-m*.06),new S(-.65,.1,-.35-m*.08),new S(-.8,.07,-.52-m*.09)]),b=new j(new xr(p,16,.025,6,!1),nd());r.add(b)}const a=new j(new Ce(.76,.19),ed(`UPLINK ${t}`,e.toUpperCase()));a.position.set(0,1.15,.384),r.add(a);const l=new Vt;l.position.set(0,1.35,-.12),r.add(l);const c=1.52,h=.24,u=.15;for(const m of[-1,1])for(const p of[-1,1]){wi(l,new S(m*h,0,p*h),new S(m*u,c,p*u),.027,Sn);for(let b=0;b<5;b++){const M=b*c/5,v=(b+1)*c/5,R=h+(u-h)*b/5,C=h+(u-h)*(b+1)/5;wi(l,new S(m*R,M,p*R),new S(-m*C,v,p*C),.014,Yi)}}for(let m=.38;m<c;m+=.4){const p=h+(u-h)*m/c;wi(l,new S(-p,m,-p),new S(p,m,-p),.019,Sn),wi(l,new S(-p,m,p),new S(p,m,p),.019,Sn)}const d=new j(new Wn(.36,24,16),new ye({color:7438730,roughness:.59,metalness:.68}));d.position.set(0,c+.4,0),d.castShadow=!0,l.add(d);const f=new j(new an(.365,.012,6,32),Sn);f.rotation.x=Math.PI/2,f.position.copy(d.position),l.add(f),_e(l,[0,c+.77,0],[.1,.07,.1],qi),wi(r,new S(-.43,1.34,-.16),new S(-.43,2.22,-.16),.028,Sn);const g=_e(r,[-.43,2.22,-.16],[.2,.1,.15],$i);o.push(g);const _=new Pi(16756830,8,6,2);return _.position.set(0,1.42,.55),r.add(_),{id:t,name:e,pos:new S(n,0,s),group:r,lamps:o,light:_,cut:!1,progress:0}}function nd(){return qi}function A1(i){const t=new Vt;t.position.set(32,0,26),t.rotation.y=-Math.PI/2,i.add(t),_e(t,[0,.14,1.2],[6.4,.28,4.6],Yi);for(let _ of[-1,1]){for(let m of[-.9,1,2.5])wi(t,new S(_*3.1,.3,m),new S(_*3.1,1.15,m),.045,Sn);wi(t,new S(_*3.1,1.14,-.9),new S(_*3.1,1.14,2.5),.04,Sn)}for(let _ of[-2.4,2.4])for(let m of[0,2.5])_e(t,[_,.42,m],[.24,.52,.24],Co);const e=new j(new Ce(1.8,.42),ed("BERTH 4","EXTRACTION  /  07"));e.position.set(-2.15,1.3,2.25),t.add(e);const n=new j(new ie(.035,.035,1.2,8),Sn);n.position.set(-2.15,.73,2.22),t.add(n);const s=new Vt;s.position.set(0,.28,-3.1),t.add(s);const r=new zs;r.moveTo(-2,-3.7),r.lineTo(2,-3.7),r.lineTo(2.05,2.55),r.quadraticCurveTo(1.65,3.65,0,4.15),r.quadraticCurveTo(-1.65,3.65,-2.05,2.55),r.closePath();const o=new ns(r,{depth:.55,bevelEnabled:!0,bevelSize:.13,bevelThickness:.12,bevelSegments:2,curveSegments:18});o.rotateX(-Math.PI/2);const a=new j(o,qi);a.position.y=-.26,a.castShadow=!0,s.add(a),_e(s,[0,.36,-.1],[3.25,.12,7.65],Yi);const l=[new S(-1.78,.51,-3.8),new S(-2.03,.48,-2),new S(-2.04,.48,1.8),new S(-1.44,.48,3.37),new S(0,.48,3.91),new S(1.44,.48,3.37),new S(2.04,.48,1.8),new S(2.03,.48,-2),new S(1.78,.51,-3.8)],c=new Eo(l,!1,"catmullrom",.26),h=new j(new xr(c,64,.31,12,!1),nd());h.castShadow=!0,s.add(h);for(let _=-2.7;_<=2.6;_+=.8)for(const m of[-1.78,1.78])_e(s,[m,.65,_],[.11,.04,.16],bs);_e(s,[0,.65,-1.5],[2.75,.23,1.4],Yi),_e(s,[0,1.16,-1.75],[2.38,.92,.16],td),_e(s,[0,1.5,-2.3],[2.38,.13,1.15],bs);for(const _ of[-1.4,1.4]){wi(s,new S(_,.6,-2.2),new S(_,1.9,-.6),.045,Sn);const m=_e(s,[_,.59,3.48],[.21,.13,.24],$i);m.material=$i}for(let _ of[-.2,1.5,2.8])_e(s,[0,.65,_],[2.5,.07,.12],Co);_e(s,[0,.71,2.94],[1.5,.24,.36],qi);for(const _ of[-1.35,1.35])_e(s,[_,.57,3.34],[.18,.12,.18],$i);for(let _=-3.2;_<3.2;_+=.55)_e(s,[0,.45,_],[1.05,.021,.04],bs);const u=new Eo([new S(-1.2,.45,-2.7),new S(-1.35,.6,-1),new S(-1.15,.65,.8)]),d=new j(new xr(u,22,.025,7,!1),qi);s.add(d);const f=_e(s,[0,.14,-4.22],[.76,.87,.76],bs);f.rotation.x=-.13;const g=new Pi(16761726,14,8,2);return g.position.set(0,1.7,2.3),t.add(g),{dock:t,target:new S(29,0,20)}}function R1(i){const t=[Oa(i,"A","YARD",1.5,7.5),Oa(i,"B","SHED",-2,-19.5),Oa(i,"C","QUAY",23,0)],e=A1(i),n={relays:t,allCut:!1,boat:e.dock,boatTarget:e.target,closest(s,r){const a=t.filter(l=>!l.cut).map(l=>({type:"relay",relay:l,distance:Math.hypot(s.x-l.pos.x,s.z-l.pos.z),progress:l.progress})).sort((l,c)=>l.distance-c.distance)[0];if(a&&a.distance<=2.2){const l=a.relay.pos.x-s.x,c=a.relay.pos.z-s.z;if((-Math.sin(r)*l+-Math.cos(r)*c)/Math.max(.001,a.distance)>=.45||a.distance<.9)return a}if(n.allCut){const l=Math.hypot(s.x-e.target.x,s.z-e.target.z);if(l<=2.5)return{type:"extract",distance:l,progress:0}}return null},interact(s,r,o,a){const l=n.closest(s,r);if(l?.type==="extract")return{extract:!0,progress:1};if(!l||!o){for(const h of t)h.progress=Math.max(0,h.progress-a*1.6);return{progress:0}}const c=l.relay;if(c.progress=Math.min(1,c.progress+a/2.4),c.progress>=1){c.cut=!0,c.progress=1;for(const h of c.lamps)h.material=b1;return c.light.intensity=0,n.allCut=t.every(h=>h.cut),{cut:c,progress:1}}return{progress:c.progress}},update(s){for(const r of t)r.cut||(r.light.intensity=4.2+Math.sin(s*4.5)*1.4)},reset(){n.allCut=!1;for(const s of t){s.cut=!1,s.progress=0;for(const r of s.lamps)r.material=$i}}};return n}class C1{ctx=null;bus=null;rain=null;low=null;staticBuffer=null;lastStep=0;_muted=!1;_volume=.8;get muted(){return this._muted}set muted(t){this._muted=t,this.bus&&this.bus.gain.setTargetAtTime(t?0:.65*this._volume,this.ctx.currentTime,.1)}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.bus&&this.bus.gain.setTargetAtTime(this._muted?0:.65*this._volume,this.ctx.currentTime,.08)}async start(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createGain();e.gain.value=this._muted?0:.65*this._volume,e.connect(t.destination),this.bus=e;const n=t.createBuffer(1,Math.floor(t.sampleRate*2),t.sampleRate),s=n.getChannelData(0);for(let d=0;d<s.length;d++)s[d]=(Math.random()*2-1)*(.7+.3*Math.random());this.staticBuffer=n;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=420;const a=t.createGain();a.gain.value=.13,r.connect(o).connect(a).connect(e),r.start(),this.rain=r;const l=t.createOscillator();l.type="sine",l.frequency.value=41.2;const c=t.createGain();c.gain.value=.075,l.connect(c).connect(e),l.start(),this.low=l;const h=t.createOscillator();h.type="triangle",h.frequency.value=82.42;const u=t.createGain();u.gain.value=.012,h.connect(u).connect(e),h.start()}tone(t,e,n,s,r="sine",o=0){const a=this.ctx,l=this.bus;if(!a||!l)return;const c=a.createOscillator(),h=a.createGain(),u=a.currentTime+o;c.type=r,c.frequency.setValueAtTime(Math.max(1,t),u),c.frequency.exponentialRampToValueAtTime(Math.max(1,e),u+n),h.gain.setValueAtTime(.001,u),h.gain.exponentialRampToValueAtTime(Math.max(.002,s),u+.009),h.gain.exponentialRampToValueAtTime(.001,u+n),c.connect(h).connect(l),c.start(u),c.stop(u+n+.02)}noise(t,e,n=120,s=1e4,r=0){const o=this.ctx,a=this.bus;if(!o||!a||!this.staticBuffer)return;const l=o.createBufferSource();l.buffer=this.staticBuffer;const c=o.createBiquadFilter();c.type="highpass",c.frequency.value=n;const h=o.createBiquadFilter();h.type="lowpass",h.frequency.value=s;const u=o.createGain(),d=o.currentTime+r;u.gain.setValueAtTime(.001,d),u.gain.linearRampToValueAtTime(e,d+.004),u.gain.exponentialRampToValueAtTime(.001,d+t),l.connect(c).connect(h).connect(u).connect(a),l.start(d,Math.random()*1.2,t+.03),l.stop(d+t+.04)}shot(){this.noise(.2,.38,120,5e3),this.noise(.08,.35,800,1e4),this.tone(130,38,.19,.48,"triangle"),this.tone(920,85,.12,.075,"sawtooth",.008)}enemyShot(){this.noise(.23,.12,240,3700),this.tone(180,38,.24,.13,"sawtooth")}houndDown(){this.noise(.4,.18,90,1600),this.tone(175,44,.56,.19,"sawtooth")}houndWarning(t=!1){this.tone(t?510:890,t?180:650,t?.28:.46,.12,"sawtooth"),this.tone(1180,730,.1,.055,"triangle",.09)}impact(){this.noise(.095,.16,230,4200),this.tone(190,85,.11,.11,"triangle")}hit(){this.tone(1150,450,.15,.08,"square"),this.tone(650,210,.22,.08,"sine",.04)}reload(){for(let t=0;t<3;t++)this.noise(.055,.13,600,4e3,t*.27),this.tone(880,180,.075,.06,"triangle",t*.27)}empty(){this.tone(900,530,.046,.09,"square")}playerHit(){this.noise(.36,.26,150,1400),this.tone(108,40,.37,.17,"sine")}step(t){const e=this.ctx;e&&(e.currentTime-this.lastStep<(t?.25:.35)||(this.lastStep=e.currentTime,this.noise(.085,.053,90,900),this.tone(68,41,.08,.06,"triangle")))}wave(){this.tone(210,320,.28,.08,"sine"),this.tone(280,430,.4,.05,"sine",.2)}victory(){for(let t=0;t<5;t++)this.tone([146,196,247,330,392][t],[170,220,280,370,440][t],.32,.055,"sine",t*.12)}}const P1=document.getElementById("app"),ln=document.getElementById("viewport"),L1=document.getElementById("overlay"),Rn=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),I1=matchMedia("(prefers-reduced-motion: reduce)").matches,uc=Rn||I1||new URLSearchParams(location.search).has("fast");let Zn;try{Zn=new Mv({canvas:ln,antialias:!Rn,alpha:!1,powerPreference:"high-performance"})}catch(i){throw P1.innerHTML='<p style="padding:2rem;color:white">WebGL is required to run this game.</p>',i}Zn.setPixelRatio(Math.min(window.devicePixelRatio,uc?1:1.65));Zn.setSize(innerWidth,innerHeight);Zn.toneMapping=Qh;Zn.toneMappingExposure=1.24;Zn.outputColorSpace=Ee;Zn.shadowMap.enabled=!uc;Zn.shadowMap.type=Jh;const Tn=new qf,Ae=new hn(Rn?77:74,innerWidth/innerHeight,.055,250);Tn.add(Ae);const un=a1(Tn,uc),wn=new m1(Ae),Ve=new C1,nn=R1(Tn),id=new Pi(16113105,6.5,8,1.4);id.position.set(.45,.45,.9);Ae.add(id);const sd=new Pi(12506580,3.3,6,1.4);sd.position.set(-1,.1,-.4);Ae.add(sd);let ae="menu",sr=0,Nl=3.5,Fl=!1,X={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1},Po=0,Lo=0,dc=0,Ol=0,Ns=!1,Io=-99,yr=!1,Bl=-999,Do=0,Uo=0,zl=-99;const cr=[];let Fs=1,Rs=.8,Qi=Rn?77:74;try{const i=JSON.parse(localStorage.getItem("saltline.settings.v1")||"{}");Fs=pe.clamp(Number(i.sensitivity)||1,.2,3),Rs=pe.clamp(typeof i.volume=="number"?i.volume:.8,0,1),Qi=pe.clamp(Number(i.fov)||Qi,60,95)}catch{}const D1=()=>localStorage.setItem("saltline.settings.v1",JSON.stringify({sensitivity:Fs,volume:Rs,fov:Qi}));let sn=-Math.PI/2,ci=-.025,xe=0,ri=0,No=0,Fo=0,Mr=0,Oo=0,Bo=0,zo=0;const He=new Set;let Li=!1,Kn=!1,tr=!1,Ho={x:0,y:0},ko=!1,Sr=null,po={x:0,y:0};const ke={x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1},oo=new Set;function U1(){const i=navigator.getGamepads?.()?.find(n=>n?.connected);if(!i){Object.assign(ke,{x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1}),oo.clear();return}const t=n=>{const s=i.axes[n]||0;return Math.abs(s)<.17?0:Math.sign(s)*(Math.abs(s)-.17)/.83};ke.x=t(0),ke.y=-t(1),ke.rx=t(2),ke.ry=t(3);const e=n=>i.buttons[n]?.pressed===!0;ke.fire=e(7),ke.aim=e(6),ke.use=e(3),ke.sprint=e(10),ke.crouch=e(1);for(const n of[0,2,9]){const s=e(n);s&&!oo.has(n)&&(n===0&&(ko=!0),n===2&&pc(),n===9&&(ae==="playing"?Tr():ae==="paused"&&ad())),s?oo.add(n):oo.delete(n)}}let Ze=[],Ai=[];const Hl=new Bp;Hl.far=130;function N1(){L1.innerHTML=`
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
 `,document.getElementById("primary").addEventListener("click",()=>{ae==="menu"||ae==="dead"||ae==="victory"?F1():ad()}),document.getElementById("pause-button").addEventListener("click",()=>Tr());const t=document.getElementById("settings-panel"),e=d=>{t.classList.remove("hidden"),document.getElementById("panel-heading").textContent=d?"CONTROLS":"SETTINGS",document.getElementById("settings-content").classList.toggle("hidden",d),document.getElementById("controls-content").classList.toggle("hidden",!d)};document.getElementById("settings-button").addEventListener("click",()=>e(!1)),document.getElementById("controls-button").addEventListener("click",()=>e(!0)),document.getElementById("panel-close").addEventListener("click",()=>t.classList.add("hidden"));const n=(d,f,g,_)=>{const m=document.getElementById(d),p=document.getElementById(f);m.value=String(d.includes("volume")?Rs:d.includes("fov")?Qi:Fs),p.textContent=g(+m.value),m.addEventListener("input",()=>{const b=+m.value;_(b),p.textContent=g(b),D1()})};n("setting-sensitivity","sensitivity-output",d=>d.toFixed(2)+"×",d=>{Fs=d}),n("setting-volume","volume-output",d=>Math.round(d*100)+"%",d=>{Rs=d,Ve.setVolume(Rs)}),n("setting-fov","fov-output",d=>d+"°",d=>{Qi=d});const s=document.getElementById("btn-use");s.addEventListener("pointerdown",d=>{d.preventDefault();try{s.setPointerCapture(d.pointerId)}catch{}Ns=!0,s.classList.add("active")});const r=()=>{Ns=!1,s.classList.remove("active")};for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,r);document.getElementById("btn-reload").addEventListener("pointerdown",d=>{d.preventDefault(),pc()}),document.getElementById("btn-jump").addEventListener("pointerdown",d=>{d.preventDefault(),ko=!0});for(const[d,f]of[["btn-fire",g=>{Li=g}],["btn-aim",g=>{Kn=g}]]){const g=document.getElementById(d);g.addEventListener("pointerdown",_=>{_.preventDefault();try{g.setPointerCapture(_.pointerId)}catch{}f(!0),d==="btn-fire"&&gc(),g.classList.add("active")});for(const _ of["pointerup","pointercancel","lostpointercapture"])g.addEventListener(_,()=>{f(!1),g.classList.remove("active")})}const o=document.getElementById("movezone"),a=document.getElementById("joystick");let l=null,c={x:0,y:0};o.addEventListener("pointerdown",d=>{if(d.preventDefault(),l!==null)return;l=d.pointerId;try{o.setPointerCapture(d.pointerId)}catch{}const f=o.getBoundingClientRect();c={x:f.left+f.width/2,y:f.top+f.height/2},h(d.clientX,d.clientY)}),o.addEventListener("pointermove",d=>{d.pointerId===l&&h(d.clientX,d.clientY)});function h(d,f){let g=(d-c.x)/57,_=(f-c.y)/57;const m=Math.max(1,Math.hypot(g,_));g/=m,_/=m,Ho={x:g,y:-_},a.style.transform=`translate(${g*40}px,${_*40}px)`}const u=d=>{l===d.pointerId&&(l=null,Ho={x:0,y:0},a.style.transform="")};o.addEventListener("pointerup",u),o.addEventListener("pointercancel",u),o.addEventListener("lostpointercapture",u),Rn&&document.body.classList.add("is-mobile")}N1();function rd(i){document.getElementById("intro-overlay").classList.add("hidden");const t=document.getElementById("menu");t.classList.remove("off"),document.getElementById("hud").classList.add("hidden"),wn.root.visible=!1;const e=t.querySelector(".eyebrow"),n=t.querySelector("p"),s=document.getElementById("primary"),r=document.getElementById("menu-secondary");i==="menu"?(e.innerHTML="<b>B4</b> PORT AUTHORITY BREACH UNIT",n.innerHTML="The port’s security net has gone feral. Cut its three uplinks. Reach the boat.",s.innerHTML="DEPLOY <span>↗</span>",r.textContent=Rn?"LEFT STICK MOVE · SWIPE LOOK · FIRE TO SHOOT":"WASD MOVE · MOUSE AIM & FIRE · R RELOAD"):i==="paused"?(e.innerHTML="<b>Ⅱ</b> OPERATION SUSPENDED",n.innerHTML="MAINTAIN YOUR POSITION.<br>RESUME WHEN READY.",s.innerHTML="RESUME <span>↗</span>",r.textContent=`RELAYS ${X.relays}/3  ·  ${X.kills} CONFIRMED  ·  ${X.hp} HP`):i==="dead"?(e.innerHTML="<b>×</b> OPERATIVE DOWN",n.innerHTML="SIGNAL LOST.<br>MISSION TERMINATED.",s.innerHTML="REDEPLOY <span>↗</span>",r.textContent=`${X.kills} HOSTILES NEUTRALIZED · RELAYS ${X.relays}/3`):(e.innerHTML="<b>◆</b> MISSION COMPLETE",n.innerHTML="The Harbormaster is dark.<br>Extraction complete.",s.innerHTML="REPLAY OPERATION <span>↗</span>",r.textContent=`TIME ${Math.floor(Po/60).toString().padStart(2,"0")}:${Math.floor(Po%60).toString().padStart(2,"0")} · ACCURACY ${Lo?Math.round(dc/Lo*100):0}% · MACHINES ${X.kills} · RETRIES ${Ol}`)}function od(){document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.remove("hidden"),wn.root.visible=!0}function F1(){ae==="dead"&&Ol++,Ze.forEach(e=>{e.disposeWreck(),Tn.remove(e.root)}),Ze=[],Ai.forEach(e=>Tn.remove(e.obj)),Ai=[],X={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1},nn.reset(),Po=0,Lo=0,dc=0,zl=-99,Ns=!1,Io=-99,yr=!1,Bl=-999,Do=0,Uo=0,cr.length=0,sn=-Math.PI/2,ci=-.04,Li=!1,Kn=!1,Oo=0,Mr=0,xe=0,ri=0,ae="intro",sr=0,Nl=Ol>0?1.3:3.5,Fl=!1,document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.add("hidden"),document.getElementById("intro-overlay").classList.remove("hidden"),document.getElementById("intro-curtain").style.opacity="1",wn.root.visible=!1,Ve.start().then(()=>Ve.setVolume(Rs)),B1(),fc()}function fc(){!Rn&&document.pointerLockElement!==ln&&ln.requestPointerLock?.().catch(()=>{}),ln.focus()}function Tr(){ae==="playing"&&(ae="paused",Li=!1,Kn=!1,Ns=!1,He.clear(),document.pointerLockElement===ln&&document.exitPointerLock(),rd("paused"))}function ad(){ae==="paused"&&(ae="playing",od(),Ve.start(),fc())}function ld(i){ae=i?"victory":"dead",Li=!1,He.clear(),Kn=!1,document.pointerLockElement===ln&&document.exitPointerLock(),i&&Ve.victory(),rd(i?"victory":"dead")}function Xn(i,t=4){zo=t,document.getElementById("h-radio").textContent=i}function O1(i){const t=document.getElementById("wave-warning");t.textContent=i,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}const cd=[[["gull",2,21.5],["hound",-19,-1.4],["gull",10,23.5]],[["gull",-6,15],["hound",9,7],["gull",14,17],["hound",-12,-7]],[["gull",-10,-8],["gull",7,-8],["gull",15,-19],["hound",-8,-12],["hound",6,-25]],[["gull",19,-22],["gull",22,15],["gull",25,-6],["gull",13,24],["hound",16,-17],["hound",24,8],["hound",19,27]]];function kl(i){const t=Ze.filter(e=>e.alive).length;for(const[e,n,s]of i.slice(0,Math.max(0,9-t))){const r=new w1(e,n,s);r.shootTimer=1.4+Math.random()*2,Tn.add(r.root),Ze.push(r)}}function B1(){kl(cd[0])}function z1(i){X.relays++,Ve.wave(),O1(`UPLINK ${i} — OFFLINE`),X.relays===1?Xn("ONE RELAY DARK. IT FELT THAT — MACHINES INBOUND.",5):X.relays===2?Xn("TWO DARK. IT IS THROWING EVERYTHING IT HAS LEFT AT YOU.",5):Xn("ALL THREE DARK. THE BOAT IS HOLDING AT THE EAST QUAY LADDER. RUN.",7),cd[Math.min(X.relays,3)].forEach(([e,n,s],r)=>cr.push({kind:e,x:n,z:s,at:xe+r*.85})),nn.allCut&&(Do=xe+12,Uo=5),X.reserve+=40,X.hp=Math.min(100,X.hp+12)}function H1(i){Po+=i,nn.update(xe);for(let s=cr.length-1;s>=0;s--){const r=cr[s];xe<r.at||Ze.filter(o=>o.alive).length>=9||(kl([[r.kind,r.x,r.z]]),cr.splice(s,1))}if(nn.allCut&&xe>=Do&&Uo>0&&Ze.filter(s=>s.alive).length<4){const s=Math.random()<.6?"gull":"hound";kl([[s,Math.min(26,X.x+12),X.z+(Math.random()>.5?7:-7)]]),Uo--,Do=xe+7}Math.hypot(X.x-nn.boatTarget.x,X.z-nn.boatTarget.z)<4&&!nn.allCut&&xe-Bl>8&&(Bl=xe,Xn("RELAYS STILL LIVE — THE BOAT WILL NOT WAIT UNDER FIRE.",3.5));const e=He.has("KeyE")||Ns||ke.use,n=nn.interact(new S(X.x,0,X.z),sn,e,i);n.cut&&z1(n.cut.id),n.extract&&(Xn("BREACHER IS ABOARD. SALTLINE IS DARK. GOOD WORK.",5),ld(!0))}function pc(){ae!=="playing"||X.reloading||X.ammo===30||X.reserve<=0||(X.reloading=!0,Oo=1.45,wn.reload(),Ve.reload(),Xn("CHANGING MAGAZINE.",1.3))}function Vo(i,t,e){const n=new Float32Array([...i.toArray(),...t.toArray()]),s=new Be;s.setAttribute("position",new dn(n,3));const r=new ec({color:e?16765344:16737862,transparent:!0,opacity:.95,depthWrite:!1,blending:Zi}),o=new nc(s,r);Tn.add(o),Ai.push({obj:o,vel:new S,life:.085,max:.085})}const Go=document.createElement("canvas");Go.width=Go.height=128;const mc=Go.getContext("2d"),Jo=mc.createRadialGradient(64,64,2,64,64,62);Jo.addColorStop(0,"rgba(190,194,187,.38)");Jo.addColorStop(.4,"rgba(109,118,117,.25)");Jo.addColorStop(1,"rgba(72,79,80,0)");mc.fillStyle=Jo;mc.fillRect(0,0,128,128);const k1=new Ke(Go);function V1(i){const t=new yo(new Ql({map:k1,transparent:!0,opacity:.75,depthWrite:!1,color:12697778}));t.position.copy(i);const e=.27+Math.random()*.2;t.scale.set(e,e,1),Tn.add(t),Ai.push({obj:t,vel:new S((Math.random()-.5)*.2,.45+Math.random()*.25,(Math.random()-.5)*.2),life:1.7,max:1.7,smoke:!0})}function Er(i,t=!1){for(let e=0;e<8;e++){const n=new j(new An(.02+.025*Math.random(),.02,.06),new re({color:t?16744535:16763016,transparent:!0,opacity:1}));n.position.copy(i),Tn.add(n),Ai.push({obj:n,vel:new S((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5),life:.3+Math.random()*.33,max:.65})}}function G1(i){const t=new S(X.x,X.y,X.z);let e=65;for(const n of un.obstacles){const s=new S(n.minX,0,n.minZ),r=new S(n.maxX,n.height,n.maxZ),a=new ts(t,i).intersectBox(new ui(s,r),new S);if(a){const l=a.distanceTo(t);l<e&&(e=l)}}return t.addScaledVector(i,e)}function gc(){if(ae!=="playing"||X.reloading||Mr>0)return;if(X.ammo<=0){Bo<=0&&(Ve.empty(),Bo=.22);return}X.ammo--,Lo++,Mr=.105,wn.shoot(),Ve.shot(),ri=Math.max(ri,.055),X1();const i=Kn?.0045:.013,t=new S((Math.random()-.5)*i,(Math.random()-.5)*i,-1).normalize().applyQuaternion(Ae.quaternion),e=Ae.getWorldPosition(new S);Hl.set(e,t);const n=Ze.filter(a=>a.alive).flatMap(a=>a.targetable),s=Hl.intersectObjects(n,!1),r=G1(t),o=r.distanceTo(e);if(s.length&&s[0].distance<o+.04){const a=s[0],l=a.object.userData.enemy,c=a.object.userData.enemyPart==="head";l.damage(c?92:36,t,c?"weak":"body"),ud(l),dc++,l.lastHitAt=xe,Fo=.2,Ve.hit(),Er(a.point,!0),l.alive||(X.kills++,X.score+=c?150:100,Xn(l.kind==="gull"?"GULL DOWN. AIRSPACE CLEARER.":"HOUND DOWN. KEEP MOVING.",1.5)),Vo(e.clone().addScaledVector(t,.6),a.point,!0)}else Er(r,!1),Ve.impact(),Vo(e.clone().addScaledVector(t,.6),r,!0)}function W1(){if(ae!=="playing")return;const i=Ze.filter(t=>t.alive).map(t=>({e:t,d:Math.hypot(t.root.position.x-X.x,t.root.position.z-X.z)})).sort((t,e)=>t.d-e.d)[0];if(wn.kick=Math.max(wn.kick,.35),i?.d<2.8){const t=new S(i.e.root.position.x-X.x,0,i.e.root.position.z-X.z).normalize();i.e.damage(65,t,"body"),ud(i.e),Ve.hit(),Er(i.e.root.position.clone().add(new S(0,1.1,0)),!0),i.e.alive||X.kills++}else Ve.empty()}function hd(i,t=18){for(const e of Ze)e===i||e.kind!=="hound"||!e.alive||e.mode==="pursue"||e.root.position.distanceToSquared(i.root.position)>t*t||(e.houndLastKnown.set(X.x,0,X.z),e.mode="investigate",e.alerted=!1,e.houndModeTime=9+Math.random()*4,e.routeTimer=0,e.houndSenseTimer=0,e.houndSearchScan=0)}function ud(i){i.kind!=="hound"||!i.alive||(i.mode!=="pursue"&&(i.mode="investigate",i.alerted=!1,i.houndModeTime=10,i.houndLastKnown.set(X.x,0,X.z),i.houndSeeTime=1,i.houndSenseTimer=0,i.routeTimer=0,i.houndSearchScan=0),hd(i,20))}function X1(){for(const i of Ze)i.kind!=="hound"||!i.alive||i.mode==="pursue"||Math.hypot(i.root.position.x-X.x,i.root.position.z-X.z)>45||(i.mode="investigate",i.alerted=!1,i.houndModeTime=10,i.houndLastKnown.set(X.x,0,X.z),i.houndSenseTimer=0,i.routeTimer=0,i.houndSearchScan=0)}function Y1(i,t,e,n,s){if(i.houndSenseTimer-=t,i.houndSenseTimer<=0){i.houndSenseTimer=.11+Math.random()*.08;const r=(e*Math.sin(i.root.rotation.y)+n*Math.cos(i.root.rotation.y))/Math.max(.001,s),o=i.mode==="pursue"||s<3.5||r>Math.cos(100*Math.PI/180);i.houndHasLos=s<45&&o&&dd(i.head.getWorldPosition(new S),new S(X.x,X.y,X.z))}return i.houndHasLos?(i.houndSeeTime+=t,i.houndNoSeeTime=0,i.houndLastKnown.set(X.x,0,X.z)):(i.houndNoSeeTime+=t,i.houndSeeTime=Math.max(0,i.houndSeeTime-t*.6)),i.mode==="pursue"?i.houndNoSeeTime>4&&(i.mode="search",i.houndModeTime=8+Math.random()*3,i.routeTimer=0,i.houndSearchScan=0):i.houndHasLos&&i.houndSeeTime>(i.mode==="patrol"?.55:.55*.45)?(i.mode="pursue",i.houndNoSeeTime=0,i.routeTimer=0,i.houndSearchScan=0,hd(i),yr||(yr=!0,Xn("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5))):i.mode!=="patrol"&&(i.houndModeTime-=t,i.houndModeTime<=0&&(i.mode="patrol",i.home.copy(i.root.position),i.routeTimer=0)),i.alerted=i.mode==="pursue",i.houndHasLos}function dd(i,t){const e=t.clone().sub(i),n=e.length();if(n<.001)return!0;const s=new ts(i,e.divideScalar(n));for(const r of un.obstacles){if(r.height<=.4)continue;const o=s.intersectBox(new ui(new S(r.minX,.01,r.minZ),new S(r.maxX,r.height,r.maxZ)),new S);if(o&&o.distanceTo(i)>.08&&o.distanceTo(i)<n-.18)return!1}return!0}function _c(i,t){return ae!=="playing"||xe-Io<t?!1:(X.hp=Math.max(0,X.hp-i),Io=xe,No=.62,ri=.08,Ve.playerHit(),X.hp===0&&ld(!1),!0)}function Ba(i,t=!1){const e=i.houndHasLos?new S(X.x,0,X.z):i.houndLastKnown.clone();if(!t&&i.tacticalGoalUntil>xe&&i.lastPlayerPosition.distanceToSquared(e)<49)return i.tacticalGoal.clone();const n=Math.atan2(i.root.position.x-e.x,i.root.position.z-e.z),s=[[0,12],[.55,12],[-.55,12],[1.1,14],[-1.1,14],[.35,9],[-.35,9],[1.6,16],[-1.6,16],[2.3,10],[-2.3,10]];let r=i.root.position.clone(),o=1/0;const a=e.clone().add(new S(0,1.2,0));for(const[l,c]of s){const h=n+l,u=new S(e.x+Math.sin(h)*c,0,e.z+Math.cos(h)*c);if(ji(un.obstacles,u.x,u.z,.6))continue;const d=dd(u.clone().add(new S(0,.95,0)),a),f=Ze.filter(m=>m!==i&&m.alive&&m.kind==="hound").reduce((m,p)=>m+Math.max(0,3.2-p.root.position.distanceTo(u))*4,0),g=t&&i.tacticalGoalUntil>0?Math.max(0,4-u.distanceTo(i.tacticalGoal))*5:0,_=u.distanceTo(i.root.position)*.9+Math.abs(l)*1.2+(d?0:22)+f+g;_<o&&(o=_,r.copy(u))}if(o===1/0){const l=i.root.position.clone().sub(e);l.y=0,l.lengthSq()<.01&&l.set(0,0,1),r.copy(e).addScaledVector(l.normalize(),12)}return i.tacticalGoal.copy(r),i.tacticalGoalUntil=xe+10,i.lastPlayerPosition.copy(e),i.routeTimer=0,i.route=[],r}function q1(i){i.root.updateMatrixWorld(!0);const t=i.gun.localToWorld(new S(0,0,.43)),n=new S(X.x,X.y-.65,X.z).clone().sub(t),s=n.length(),r=.045+Math.min(.075,s*.0017),o=n.normalize().add(new S((Math.random()-.5)*2*r,(Math.random()-.5)*2*r,(Math.random()-.5)*2*r)).normalize(),a=new ts(t,o);let l=me.fireRange;for(const u of un.obstacles){if(u.height<=.4)continue;const d=a.intersectBox(new ui(new S(u.minX,0,u.minZ),new S(u.maxX,u.height,u.maxZ)),new S);if(d){const f=d.distanceTo(t);f>.08&&f<l&&(l=f)}}const c=t.clone().addScaledVector(o,l);Ve.enemyShot(),Vo(t,c,!1),i.onHoundShot(),a.distanceSqToSegment(new S(X.x,.35,X.z),new S(X.x,X.y,X.z))<.36*.36&&l>s-.8&&_c(me.shotDamage,.075)}function $1(i,t,e,n,s){const r=Y1(i,t,e,n,s);new S(X.x,X.y-.5,X.z);const o=i.hound,a=Math.atan2(e,n),l=Math.atan2(Math.sin(a-i.root.rotation.y),Math.cos(a-i.root.rotation.y)),c=Math.atan2(Math.sin(l-i.turret.rotation.y),Math.cos(l-i.turret.rotation.y)),h=Ze.filter(Z=>Z!==i&&Z.alive&&Z.kind==="hound"&&["tele","burst"].includes(Z.hound.phase)).length;i.alerted&&i.tacticalGoalUntil<=0&&Ba(i,!0);const u=i.alerted&&r&&i.lastPlayerPosition.distanceToSquared(new S(X.x,0,X.z))>49,d=i.tacticalGoalUntil>0&&i.root.position.distanceToSquared(i.tacticalGoal)<.45*.45,f=o.phase,g=o.update(t,{alerted:i.alerted,distance:s,lineOfSight:r,aligned:Math.abs(c)<.14,canClaimVolley:h<2&&xe-zl>=1.25,reachedFiringPosition:d,timeWithoutSight:i.houndNoSeeTime,playerMovedFromPlan:u});g.reposition&&i.alerted&&Ba(i,!0),g.telegraph&&(o.phase==="tele"&&(zl=xe),Ve.houndWarning(o.phase==="wind")),g.fire&&q1(i),g.melee&&_c(me.lungeDamage,.075),i.houndWarning=["tele","burst","wind","lunge"].includes(o.phase)?1:0;const _=["aim","tele","burst","cool","wind","recover"].includes(o.phase);let m;if(o.phase==="lunge")m=new S(X.x,0,X.z);else if(i.mode==="patrol"){const Z=xe*.35+i.phase;m=i.home.clone().add(new S(Math.cos(Z)*2,0,Math.sin(Z)*2))}else i.mode==="search"||i.mode==="investigate"||!r?(m=i.houndLastKnown.clone(),m.distanceToSquared(i.root.position)<2.2*2.2&&(i.houndSearchScan+=t,m.copy(i.root.position))):_&&r&&s>=5&&s<30?m=i.root.position.clone():m=i.tacticalGoalUntil>0?i.tacticalGoal.clone():Ba(i,!0);let p=m.x-i.root.position.x,b=m.z-i.root.position.z;if(o.phase!=="lunge"){for((i.routeTimer<=0||i.route.length===0||f!==o.phase)&&(i.route=Qu(i.root.position,m,un.obstacles),i.routeTimer=i.alerted?.65:1.5),i.routeTimer-=t;i.route.length&&i.route[0].distanceToSquared(i.root.position)<.4*.4;)i.route.shift();const Z=i.route[0]||m;p=Z.x-i.root.position.x,b=Z.z-i.root.position.z}const M=Math.hypot(p,b),v=Math.hypot(m.x-i.root.position.x,m.z-i.root.position.z),R=o.phase==="lunge",C=R||!_&&v>.45,I=(i.mode==="search"||i.mode==="investigate")&&i.houndSearchScan>0&&v<.45?i.heading+Math.sin(i.houndSearchScan*.8)*.9:i.alerted&&r&&(_||R)?a:M>.025?Math.atan2(p,b):i.houndDrive.yaw,E=i.mode==="pursue"?me.runSpeed:i.mode==="patrol"?me.patrolSpeed:v<8?me.stalkSpeed:me.runSpeed;g.beganLunge&&i.houndDrive.beginLunge(a),f==="lunge"&&o.phase==="recover"&&i.houndDrive.endLunge();const x=i.houndDrive.step(t,I,C?E:0,C?v:0,R);i.root.rotation.y=x.yaw,i.heading=x.yaw;let A=!1;if(x.speed*t>1e-5){for(const ht of Ze){if(ht===i||ht.kind!=="hound"||!ht.alive)continue;const yt=i.root.position.x-ht.root.position.x,Rt=i.root.position.z-ht.root.position.z,Gt=Math.hypot(yt,Rt);if(Gt>=1.7||Gt<.001)continue;const z=(1.7-Gt)*2.2/Gt*t*6;i.houndPush.x+=yt*z,i.houndPush.z+=Rt*z}if(!R&&s<1.25&&s>.001){const ht=(1.25-s)*3/s*t*6;i.houndPush.x-=e*ht,i.houndPush.z-=n*ht}i.houndPush.multiplyScalar(Math.exp(-5*t));const Z=(Math.sin(x.yaw)*x.speed+i.houndPush.x)*t,W=(Math.cos(x.yaw)*x.speed+i.houndPush.z)*t;ji(un.obstacles,i.root.position.x+Z,i.root.position.z,.44)||(i.root.position.x+=Z,A=!0),ji(un.obstacles,i.root.position.x,i.root.position.z+W,.44)||(i.root.position.z+=W,A=!0),A||(i.houndDrive.speed*=.6,i.houndDrive.yawRate+=(i.phase>Math.PI?1:-1)*4*t,i.routeTimer=0)}else i.houndPush.multiplyScalar(Math.exp(-5*t));const O=Math.cos(i.root.rotation.y),V=Math.sin(i.root.rotation.y),H=Math.atan2(e*O-n*V,e*V+n*O),k=i.root.position.y+i.body.position.y;i.houndTurretYaw=H,i.houndGunPitch=pe.clamp(Math.atan2(-(X.y-.72-(k+.25)),s),-.9,.35),i.houndHeadYaw=pe.clamp(H,-1.2,1.2),i.houndHeadPitch=pe.clamp(Math.atan2(-(X.y-.52-(k+.2)),s),-.6,.5),i.animate(xe,A?1:0,t)}function Z1(i){const t=Ze.filter(e=>e.kind==="hound"&&!e.alive&&e.deathSink===0).sort((e,n)=>e.deathOrder-n.deathOrder);for(const e of t.slice(0,Math.max(0,t.length-5)))e.deathSink=.001;for(let e=Ze.length-1;e>=0;e--){const n=Ze[e];if(!n.alive){n.root.userData.dying=n.root.userData.dying+i;const b=n.root.userData.dying;let M=!1;if(n.kind==="hound"){const v=n.animateDeath(i);M=v.retire;const R=n.root.position.clone().add(new S((Math.random()-.5)*.35,n.body.position.y+.25,(Math.random()-.5)*.35));v.impact&&(Ve.houndDown(),Er(R,!0)),v.smoke&&V1(R),v.spark&&!v.impact&&Er(R,!0)}else n.body.rotation.z=Math.min(1,b*2)*1.25,n.root.position.y-=i*1.4;(M||n.kind==="gull"&&b>2.8)&&(n.disposeWreck(),Tn.remove(n.root),Ze.splice(e,1));continue}const s=X.x-n.root.position.x,r=X.z-n.root.position.z,o=Math.max(.001,Math.hypot(s,r));if(n.kind==="hound"){$1(n,i,s,r,o);continue}o<31&&!n.alerted&&(n.alerted=!0,n.mode="pursue",n.routeTimer=0,yr||(yr=!0,Xn("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5)));let l=0,c;if(n.alerted)if(n.kind==="gull"){const b=xe*.4+n.phase,M=9;c=new S(X.x+Math.cos(b)*M,0,X.z+Math.sin(b)*M)}else c=new S(X.x,0,X.z);else{const b=xe*.32+n.phase;c=n.home.clone().add(new S(Math.cos(b)*2,0,Math.sin(b)*2.5))}const h=c.x-n.root.position.x,u=c.z-n.root.position.z,d=Math.hypot(h,u);for((n.routeTimer<=0||n.route.length===0||n.lastPlayerPosition.distanceToSquared(c)>12)&&(n.route=Qu(n.root.position,c,un.obstacles),n.routeTimer=(n.alerted?.85:1.7)+Math.random()*.35,n.lastPlayerPosition.copy(c)),n.routeTimer-=i;n.route.length&&n.route[0].distanceToSquared(n.root.position)<.32*.32;)n.route.shift();const f=n.route[0]||c,g=f.x-n.root.position.x,_=f.z-n.root.position.z,m=Math.hypot(g,_),p=d>(n.alerted?n.kind==="gull"?2.1:2.3:.45);if(m>.03&&p){const b=n.speed*(n.alerted?1:.62),M=Math.min(m,i*b),v=g/m*M,R=_/m*M;let C=!1;ji(un.obstacles,n.root.position.x+v,n.root.position.z,.44)||(n.root.position.x+=v,C=!0),ji(un.obstacles,n.root.position.x,n.root.position.z+R,.44)||(n.root.position.z+=R,C=!0),C?(l=1,n.heading=Math.atan2(v,R)):n.routeTimer=0}if(n.root.rotation.y=pe.damp(n.root.rotation.y,n.alerted?Math.atan2(s,r):n.heading,5,i),n.animate(xe,l,i),n.shootTimer-=i,n.shootTimer<0&&n.alerted&&o<30&&ae==="playing"){n.shootTimer=(n.kind==="gull"?1.4:2.1)+Math.random()*1.1;const b=n.root.position.clone().add(new S(0,n.kind==="gull"?2.8:1.15,0)),M=new S(X.x,X.y-.2,X.z),v=M.clone().sub(b),R=v.length(),C=v.normalize();let P=!0;for(const I of un.obstacles){const E=new ts(b,C).intersectBox(new ui(new S(I.minX,.01,I.minZ),new S(I.maxX,I.height,I.maxZ)),new S);if(E&&E.distanceTo(b)<R-.7){P=!1;break}}P&&(Ve.enemyShot(),Vo(b,M.clone().add(new S((Math.random()-.5)*1.9,(Math.random()-.5)*1.6,(Math.random()-.5)*1.9)),!1),Math.random()<Math.max(.18,.46-o*.013)&&_c(5+Math.round(Math.random()*4),1.35))}}}function K1(i){let t=0,e=0;(He.has("KeyW")||He.has("ArrowUp"))&&t++,(He.has("KeyS")||He.has("ArrowDown"))&&t--,(He.has("KeyD")||He.has("ArrowRight"))&&e++,(He.has("KeyA")||He.has("ArrowLeft"))&&e--,t+=Ho.y+ke.y,e+=Ho.x+ke.x;const n=Math.hypot(t,e);tr=n>.05,n>1&&(t/=n,e/=n);const s=(He.has("ShiftLeft")||He.has("ShiftRight")||ke.sprint)&&t>.1&&X.stamina>.01,r=He.has("ControlLeft")||He.has("KeyC")||ke.crouch,o=(r?2.2:s?7.8:4.65)*(X.ads?.67:1);if(tr){const c=(e*Math.cos(sn)-t*Math.sin(sn))*o*i,h=(-e*Math.sin(sn)-t*Math.cos(sn))*o*i;ji(un.obstacles,X.x+c,X.z)||(X.x+=c),ji(un.obstacles,X.x,X.z+h)||(X.z+=h),Math.abs(X.y-(r?1.16:1.72))<.25&&Ve.step(s)}X.stamina=Math.min(1,Math.max(0,X.stamina+(s&&tr?-i*.16:i*.12))),xe-Io>5&&X.hp<100&&(X.hp=Math.min(100,X.hp+i*3.2)),(He.has("Space")||ko)&&X.y<=1.73&&X.vY<=0&&(X.vY=6.4),ko=!1,X.vY-=17*i,X.y=Math.max(r?1.18:1.72,X.y+X.vY*i),(X.y===1.72||X.y===1.18)&&(X.vY=0),X.ads=Kn||ke.aim,sn-=ke.rx*i*2.2,ci=Math.max(-1.35,Math.min(1.35,ci-ke.ry*i*1.7)),ri>0&&(ri=Math.max(0,ri-i*.45));const a=(Math.random()-.5)*ri,l=(Math.random()-.5)*ri;Ae.rotation.order="YXZ",Ae.rotation.set(ci+l,sn+a,0),Ae.position.set(X.x,X.y+(X.y<=1.73&&tr?Math.sin(xe*(s?13:8))*.025:0),X.z),Ae.fov=pe.damp(Ae.fov,X.ads?52:Qi,10,i),Ae.updateProjectionMatrix(),wn.update(i,xe,tr?1:0,s,X.ads)}function za(i){for(let t=Ai.length-1;t>=0;t--){const e=Ai[t];e.life-=i,e.obj.position.addScaledVector(e.vel,i),e.smoke||(e.vel.y-=i*14),e.smoke&&e.obj instanceof yo&&(e.obj.material.opacity=.6*Math.max(0,e.life/e.max),e.obj.scale.multiplyScalar(1+i*.45)),e.obj instanceof j&&e.obj.material instanceof re&&(e.obj.material.opacity=Math.max(0,e.life/e.max)),e.life<=0&&(Tn.remove(e.obj),e.obj instanceof nc&&e.obj.geometry.dispose(),e.obj instanceof yo&&e.obj.material.dispose(),Ai.splice(t,1))}}const Zh=new Map;function J1(){const i=document.getElementById("waypoint-layer"),t=(-sn*180/Math.PI%360+360)%360;document.getElementById("compass-heading").textContent=Math.round(t).toString().padStart(3,"0");const e=document.getElementById("compass-tape"),n=["N","NE","E","SE","S","SW","W","NW"];e.textContent=Array.from({length:9},(a,l)=>n[((Math.round(t/45)+l-4)%8+8)%8]).join("    ·    ");const s=nn.relays.map(a=>({id:a.id,name:a.name,position:a.pos,done:a.cut,active:!a.cut})).concat([{id:"E",name:"EXTRACT",position:nn.boatTarget,done:!1,active:nn.allCut}]),r=document.getElementById("compass-marks"),o=Math.min(430,innerWidth*.4);r.innerHTML=s.filter(a=>a.active&&!a.done).map(a=>{const l=a.position.x-X.x,c=a.position.z-X.z,h=-Math.atan2(l,-c),d=Math.atan2(Math.sin(h-sn),Math.cos(h-sn))*180/Math.PI;if(Math.abs(d)>62)return"";const f=Math.round(o*.5-d/62*o*.5),g=Math.round(Math.hypot(l,c));return`<div class="compass-objective" style="left:${f}px"><i></i><b>${a.id}</b><small>${g}m</small></div>`}).join("");for(const a of s){let l=Zh.get(a.id);if(l||(l=document.createElement("div"),l.className="waypoint",i.appendChild(l),Zh.set(a.id,l)),a.done||!a.active){l.classList.add("hidden");continue}l.classList.remove("hidden"),l.classList.toggle("dim",a.id!=="E"&&a.id!==nn.relays.find(_=>!_.cut)?.id);const c=Math.hypot(a.position.x-X.x,a.position.z-X.z),h=a.position.clone();h.y=a.id==="E"?2.6:2.5;const u=h.project(Ae),d=u.z<1&&u.z>-1&&Math.abs(u.x)<.93&&Math.abs(u.y)<.83,f=pe.clamp((u.x*.5+.5)*innerWidth,40,innerWidth-40),g=pe.clamp((-u.y*.5+.5)*innerHeight,75,innerHeight-100);l.classList.toggle("offscreen",!d),l.style.transform=`translate(${Math.round(f+(a.id==="B"?-35:a.id==="C"?35:0))}px,${Math.round(g+(a.id==="B"?29:a.id==="C"?50:0))}px)`,l.innerHTML=`<b>${a.id==="E"?"↗":a.id}</b><span>${a.id==="E"?"EX":a.id} ${Math.round(c)}m</span>`}}function j1(){if(ae!=="playing")return;document.getElementById("h-wave").textContent=`RELAYS ${X.relays} / 3`,document.getElementById("h-health").innerHTML=`${Math.ceil(X.hp)} <small>HP</small>`,document.getElementById("h-healthbar").style.width=X.hp+"%",document.getElementById("h-healthbar").classList.toggle("critical",X.hp<30),document.getElementById("h-stamina").textContent="STAMINA  "+"▰".repeat(Math.ceil(X.stamina*5))+"▱".repeat(5-Math.ceil(X.stamina*5)),document.getElementById("h-ammo").textContent=String(X.ammo).padStart(2,"0"),document.getElementById("h-reserve").textContent="/ "+X.reserve,document.getElementById("h-enemies").textContent=`RELAYS ${nn.relays.map(n=>n.cut?"■":"□").join(" ")}  ${X.relays}/3`,document.querySelector(".radio").style.opacity=zo>0?"1":"0",document.getElementById("h-objective").textContent=nn.allCut?"REACH THE BOAT":"CUT THE THREE UPLINK RELAYS";const i=nn.closest(new S(X.x,0,X.z),sn),t=document.getElementById("interaction"),e=document.getElementById("btn-use");t.classList.toggle("hidden",!i),e.classList.toggle("hidden",!i||i.type==="extract"),i&&(document.getElementById("interact-label").textContent=i.type==="extract"?"BOAT EXTRACTION READY":`HOLD E / USE — CUT UPLINK ${i.relay.id}`,document.getElementById("interact-detail").textContent=i.type==="extract"?"BOARDING AUTOMATICALLY":`DISABLE SECURITY UPLINK · ${Math.round(i.progress*100)}%`,document.getElementById("interact-fill").style.width=`${i.progress*100}%`),J1(),document.getElementById("hitmarker").style.opacity=Fo>0?"1":"0",document.getElementById("damage").style.opacity=String(Math.max(0,No)),document.getElementById("crosshair").classList.toggle("aiming",Kn),document.getElementById("h-ammo-bars").innerHTML=Array.from({length:Math.ceil(X.ammo/3)},(n,s)=>`<i style="opacity:${s===Math.ceil(X.ammo/3)-1&&X.ammo%3?.6:1}"></i>`).join("")}function Q1(){Zn.setSize(innerWidth,innerHeight),Ae.aspect=innerWidth/innerHeight,Ae.updateProjectionMatrix()}window.addEventListener("resize",Q1);window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),He.add(i.code),!i.repeat){if(i.code==="KeyR"&&pc(),i.code==="KeyF"&&W1(),i.code==="Escape"&&!document.getElementById("settings-panel").classList.contains("hidden")){document.getElementById("settings-panel").classList.add("hidden");return}(i.code==="Escape"||i.code==="KeyP")&&ae==="playing"&&Tr(),i.code==="Enter"&&(ae==="menu"||ae==="paused"||ae==="dead"||ae==="victory")&&document.getElementById("primary").click()}});window.addEventListener("keyup",i=>He.delete(i.code));window.addEventListener("blur",()=>{He.clear(),Li=!1,Kn=!1,Ns=!1,ae==="playing"&&!Rn&&Tr()});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!Rn&&document.pointerLockElement!==ln&&ae==="playing"&&Tr()});ln.addEventListener("mousemove",i=>{ae!=="playing"||document.pointerLockElement!==ln||(sn-=i.movementX*.0022*Fs,ci=Math.max(-1.35,Math.min(1.35,ci-i.movementY*.0022*Fs)))});ln.addEventListener("mousedown",i=>{ae==="playing"&&(!Rn&&document.pointerLockElement!==ln&&fc(),i.button===0&&(Li=!0,gc()),i.button===2&&(Kn=!0))});window.addEventListener("mouseup",i=>{i.button===0&&(Li=!1),i.button===2&&(Kn=!1)});ln.addEventListener("pointerdown",i=>{if(!(!Rn||ae!=="playing"||Sr!==null)){Sr=i.pointerId,po={x:i.clientX,y:i.clientY};try{ln.setPointerCapture(i.pointerId)}catch{}}});ln.addEventListener("pointermove",i=>{if(!Rn||i.pointerId!==Sr)return;const t=i.clientX-po.x,e=i.clientY-po.y;sn-=t*.0045,ci=Math.max(-1.28,Math.min(1.28,ci-e*.0045)),po={x:i.clientX,y:i.clientY}});for(let i of["pointerup","pointercancel","lostpointercapture"])ln.addEventListener(i,t=>{t.pointerId===Sr&&(Sr=null)});window.addEventListener("touchmove",i=>{ae==="playing"&&i.preventDefault()},{passive:!1});window.addEventListener("touchstart",i=>{ae==="playing"&&i.touches.length>1&&i.preventDefault()},{passive:!1});Ae.position.set(X.x,X.y,X.z);Ae.rotation.order="YXZ";Ae.rotation.set(ci,sn,0);const tx=new Op;function ex(i){if(xe+=i,un.tick(i,xe,X.x,X.z),ae==="intro"){sr+=i;const t=Math.min(1,sr/Nl),e=t*t*(3-2*t);Ae.position.set(-34+e*2,1.72+(1-e)*.85,6+(1-e)*1.1),Ae.rotation.order="YXZ",Ae.rotation.set(-.12+t*.08,-Math.PI/2,0),Ae.fov=pe.lerp(57,Qi,e),Ae.updateProjectionMatrix();const n=document.getElementById("intro-curtain");n.style.opacity=String(Math.max(0,1-sr/.55)),!Fl&&sr>Math.min(.8,Nl*.35)&&(Fl=!0,Xn("BREACHER, THIS IS CONTROL. THE HARBORMASTER HOLDS THE BERTH. CUT THREE UPLINKS — YARD, SHED, QUAY.",8)),t>.77&&(document.getElementById("hud").classList.remove("hidden"),wn.root.visible=!0),t>=1&&(ae="playing",document.getElementById("intro-overlay").classList.add("hidden"),od()),za(i)}else if(ae==="playing"){if((Li||ke.fire)&&gc(),X.reloading&&(Oo-=i,Oo<=0)){const t=Math.min(X.reserve,30-X.ammo);X.ammo+=t,X.reserve-=t,X.reloading=!1}Mr=Math.max(0,Mr-i),Bo=Math.max(0,Bo-i),Fo=Math.max(0,Fo-i),No=Math.max(0,No-i*1.5),zo>0&&(zo-=i),H1(i),K1(i),Z1(i),za(i)}else ae==="menu"&&(wn.root.visible=!1,Ae.position.set(-34+Math.sin(xe*.085)*.4,1.8,6+Math.sin(xe*.12)*.55),Ae.rotation.set(-.085,-Math.PI/2+Math.sin(xe*.14)*.035,0),wn.root.position.set(.68,-.645,-.91),wn.root.rotation.set(0,.16,0)),za(i)}function fd(){requestAnimationFrame(fd),U1();let t=Math.min(tx.getDelta(),.24);for(;t>1e-5;){const e=Math.min(.04,t);ex(e),t-=e}j1(),Zn.render(Tn,Ae)}fd();
