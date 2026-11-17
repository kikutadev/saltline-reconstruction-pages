(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ll="180",ud=0,dc=1,dd=2,Wh=1,Xh=2,ti=3,Si=0,tn=1,Fe=2,xi=0,As=1,Zi=2,fc=3,pc=4,fd=5,Bi=100,pd=101,md=102,gd=103,_d=104,vd=200,xd=201,yd=202,Md=203,La=204,Ia=205,Sd=206,Ed=207,bd=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Pd=214,Da=0,Ua=1,Na=2,Ps=3,Fa=4,Oa=5,Ba=6,za=7,Yh=0,Ld=1,Id=2,yi=0,Dd=1,Ud=2,Nd=3,qh=4,Fd=5,Od=6,Bd=7,$h=300,Ls=301,Is=302,go=303,ka=304,Fo=306,Wn=1e3,Hi=1001,Ha=1002,Nn=1003,zd=1004,Lr=1005,kn=1006,Xo=1007,Vi=1008,Xn=1009,Zh=1010,Kh=1011,dr=1012,Il=1013,Ki=1014,ii=1015,Bs=1016,Dl=1017,Ul=1018,fr=1020,jh=35902,Jh=35899,Qh=1021,tu=1022,Un=1023,pr=1026,mr=1027,eu=1028,Nl=1029,nu=1030,Fl=1031,Ol=1033,lo=33776,co=33777,ho=33778,uo=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,Ya=36196,qa=37492,$a=37496,Za=37808,Ka=37809,ja=37810,Ja=37811,Qa=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,pl=36285,ml=36286,kd=3200,Hd=3201,iu=0,Vd=1,_i="",xe="srgb",Ds="srgb-linear",_o="linear",Me="srgb",ss=7680,mc=519,Gd=512,Wd=513,Xd=514,su=515,Yd=516,qd=517,$d=518,Zd=519,gl=35044,gc="300 es",Hn=2e3,vo=2001;class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const lr=Math.PI/180,gr=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Bl(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jd(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function Jd(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Qd(i,t=1){return t-Math.abs(Bl(i,t*2)-t)}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sf(i,t){return i+Math.random()*(t-i)}function rf(i){return i*(.5-Math.random())}function of(i){i!==void 0&&(_c=i);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(i){return i*lr}function lf(i){return i*gr}function cf(i){return(i&i-1)===0&&i!==0}function hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function df(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:lr,RAD2DEG:gr,generateUUID:Gn,clamp:se,euclideanModulo:Bl,mapLinear:Kd,inverseLerp:jd,lerp:cr,damp:Jd,pingpong:Qd,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:of,degToRad:af,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:ve,denormalize:In};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==d||c!==f||u!==_){let m=1-a;const p=l*d+c*f+u*_+h*v,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,p*T);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const x=a*T;if(l=l*m+d*x,c=c*m+f*x,u=u*m+_*x,h=h*m+v*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*f-c*d,t[e+1]=l*_+u*d+c*h-a*f,t[e+2]=c*_+u*f+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new S,vc=new Qi;class ee{constructor(t,e,n,s,r,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],v=s[0],m=s[3],p=s[6],T=s[1],y=s[4],x=s[7],R=s[2],C=s[5],I=s[8];return r[0]=o*v+a*T+l*R,r[3]=o*m+a*y+l*C,r[6]=o*p+a*x+l*I,r[1]=c*v+u*T+h*R,r[4]=c*m+u*y+h*C,r[7]=c*p+u*x+h*I,r[2]=d*v+f*T+_*R,r[5]=d*m+f*y+_*C,r[8]=d*p+f*x+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,_=e*h+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qo.makeScale(t,e)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new ee;function ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){const i=xo("canvas");return i.style.display="block",i}const xc={};function _r(i){i in xc||(xc[i]=!0,console.warn(i))}function pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const yc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){const i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?_o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:_o,toXYZ:yc,fromXYZ:Mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:yc,fromXYZ:Mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),i}const ue=mf();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class gf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=xo("canvas")),rs.width=t.width,rs.height=t.height;const s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _f=0;class zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;const Zo=new S;class en extends zs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Hi,s=Hi,r=kn,o=Vi,a=Un,l=Xn,c=en.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Gn(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=$h;en.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,R=(p+1)/2,C=(u+d)/4,I=(h+v)/4,U=(_+m)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=I/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=U/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends zs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new en(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new zl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Dr.subVectors(this.max,Ws),os.subVectors(t.a,Ws),as.subVectors(t.b,Ws),ls.subVectors(t.c,Ws),ai.subVectors(as,os),li.subVectors(ls,as),Ri.subVectors(os,ls);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ri.z,Ri.y,ai.z,0,-ai.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!Ko(e,os,as,ls,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,os,as,ls,Dr))?!1:(Ur.crossVectors(ai,li),e=[Ur.x,Ur.y,Ur.z],Ko(e,os,as,ls,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zn=[new S,new S,new S,new S,new S,new S,new S,new S],wn=new S,Ir=new oi,os=new S,as=new S,ls=new S,ai=new S,li=new S,Ri=new S,Ws=new S,Dr=new S,Ur=new S,Ci=new S;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mf=new oi,Xs=new S,jo=new S;class Oo{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(jo)),this.expandByPoint(Xs.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Kn=new S,Jo=new S,Nr=new S,ci=new S,Qo=new S,Fr=new S,ta=new S;class Wi{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=ci.dot(this.direction),l=-ci.dot(Nr),c=ci.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jo).addScaledVector(Nr,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Qo.subVectors(e,t),Fr.subVectors(n,t),ta.crossVectors(Qo,Fr);let o=this.direction.dot(ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const l=a*this.direction.dot(Fr.crossVectors(ci,Fr));if(l<0)return null;const c=a*this.direction.dot(Qo.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(ta);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,_,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,_,v,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,_=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,_=c*u,v=c*h;e[0]=d+v*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,_=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,_=a*u,v=a*h;e[0]=l*u,e[4]=_*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=_*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+_,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,Ef)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),hi.crossVectors(n,hn),hi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),hi.crossVectors(n,hn)),hi.normalize(),Or.crossVectors(hn,hi),s[0]=hi.x,s[4]=Or.x,s[8]=hn.x,s[1]=hi.y,s[5]=Or.y,s[9]=hn.y,s[2]=hi.z,s[6]=Or.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],v=n[6],m=n[10],p=n[14],T=n[3],y=n[7],x=n[11],R=n[15],C=s[0],I=s[4],U=s[8],E=s[12],g=s[1],w=s[5],L=s[9],P=s[13],G=s[2],F=s[6],z=s[10],K=s[14],W=s[3],lt=s[7],vt=s[11],_t=s[15];return r[0]=o*C+a*g+l*G+c*W,r[4]=o*I+a*w+l*F+c*lt,r[8]=o*U+a*L+l*z+c*vt,r[12]=o*E+a*P+l*K+c*_t,r[1]=u*C+h*g+d*G+f*W,r[5]=u*I+h*w+d*F+f*lt,r[9]=u*U+h*L+d*z+f*vt,r[13]=u*E+h*P+d*K+f*_t,r[2]=_*C+v*g+m*G+p*W,r[6]=_*I+v*w+m*F+p*lt,r[10]=_*U+v*L+m*z+p*vt,r[14]=_*E+v*P+m*K+p*_t,r[3]=T*C+y*g+x*G+R*W,r[7]=T*I+y*w+x*F+R*lt,r[11]=T*U+y*L+x*z+R*vt,r[15]=T*E+y*P+x*K+R*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],v=t[13],m=t[14],p=t[15],T=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,y=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,x=u*v*c-_*h*c+_*a*f-o*v*f-u*a*p+o*h*p,R=_*h*l-u*v*l-_*a*d+o*v*d+u*a*m-o*h*m,C=e*T+n*y+s*x+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return t[0]=T*I,t[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*I,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*I,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*I,t[4]=y*I,t[5]=(u*m*r-_*d*r+_*s*f-e*m*f-u*s*p+e*d*p)*I,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*I,t[8]=x*I,t[9]=(_*h*r-u*v*r-_*n*f+e*v*f+u*n*p-e*h*p)*I,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*p+e*a*p)*I,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*I,t[12]=R*I,t[13]=(u*v*s-_*h*s+_*n*d-e*v*d-u*n*m+e*h*m)*I,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*I,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,_=r*h,v=o*u,m=o*h,p=a*h,T=l*c,y=l*u,x=l*h,R=n.x,C=n.y,I=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+x)*R,s[2]=(_-y)*R,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(_+y)*I,s[9]=(m-T)*I,s[10]=(1-(d+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const c=1/r,u=1/o,h=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===Hn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===vo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===Hn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===vo)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new S,Tn=new ce,Sf=new S(0,0,0),Ef=new S(1,1,1),hi=new S,Or=new S,hn=new S,Sc=new ce,Ec=new Qi;class Fn{constructor(t=0,e=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bf=0;const bc=new S,hs=new Qi,jn=new ce,Br=new S,Ys=new S,wf=new S,Tf=new Qi,wc=new S(1,0,0),Tc=new S(0,1,0),Ac=new S(0,0,1),Rc={type:"added"},Af={type:"removed"},us={type:"childadded",child:null},ea={type:"childremoved",child:null};class ke extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new S,e=new Fn,n=new Qi,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new ee}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(wc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ys,Br,this.up):jn.lookAt(Br,Ys,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(jn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Af),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new S(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new S,Jn=new S,na=new S,Qn=new S,ds=new S,fs=new S,Cc=new S,ia=new S,sa=new S,ra=new S,oa=new ge,aa=new ge,la=new ge;class Mn{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Jn.subVectors(n,e),na.subVectors(t,e);const o=An.dot(An),a=An.dot(Jn),l=An.dot(na),c=Jn.dot(Jn),u=Jn.dot(na),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oa.setScalar(0),aa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),la.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Jn.subVectors(t,e),An.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),An.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,n),fs.subVectors(r,n),ia.subVectors(t,n);const l=ds.dot(ia),c=fs.dot(ia);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,s);const u=ds.dot(sa),h=fs.dot(sa);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ds,o);ra.subVectors(t,r);const f=ds.dot(ra),_=fs.dot(ra);if(_>=0&&f<=_)return e.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(fs,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return Cc.subVectors(r,s),a=(h-u)/(h-u+(f-_)),e.copy(s).addScaledVector(Cc,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Bl(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ca(o,r,t+1/3),this.g=ca(o,r,t),this.b=ca(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return ue.workingToColorSpace($e.copy(this),t),Math.round(se($e.r*255,0,255))*65536+Math.round(se($e.g*255,0,255))*256+Math.round(se($e.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=xe){ue.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(zr);const n=cr(ui.h,zr.h,e),s=cr(ui.s,zr.s,e),r=cr(ui.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Qt;Qt.NAMES=au;let Rf=0;class ts extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=As,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ae extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new S,kr=new ht;let Cf=0;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),t}}class lu extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cu extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pf=0;const _n=new ce,ha=new ke,ps=new S,un=new oi,qs=new oi,Ge=new S;class Oe extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?cu:lu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(un.min,qs.min),un.expandByPoint(Ge),Ge.addVectors(un.max,qs.max),un.expandByPoint(Ge)):(un.expandByPoint(qs.min),un.expandByPoint(qs.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),Ge.add(ps)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new S,l[U]=new S;const c=new S,u=new S,h=new S,d=new ht,f=new ht,_=new ht,v=new S,m=new S;function p(U,E,g){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,g),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,g),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const w=1/(f.x*_.y-_.x*f.y);isFinite(w)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(w),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(w),a[U].add(v),a[E].add(v),a[g].add(v),l[U].add(m),l[E].add(m),l[g].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,E=T.length;U<E;++U){const g=T[U],w=g.start,L=g.count;for(let P=w,G=w+L;P<G;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new S,x=new S,R=new S,C=new S;function I(U){R.fromBufferAttribute(s,U),C.copy(R);const E=a[U];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(C,E);const w=x.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,w)}for(let U=0,E=T.length;U<E;++U){const g=T[U],w=g.start,L=g.count;for(let P=w,G=w+L;P<G;P+=3)I(t.getX(P+0)),I(t.getX(P+1)),I(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new ce,Pi=new Wi,Hr=new Oo,Lc=new S,Vr=new S,Gr=new S,Wr=new S,ua=new S,Xr=new S,Ic=new S,Yr=new S;class rt extends ke{constructor(t=new Oe,e=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ua.fromBufferAttribute(h,t),o?Xr.addScaledVector(ua,u):Xr.addScaledVector(ua.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Hr,Lc)===null||Pi.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,R=y;x<R;x+=3){const C=a.getX(x),I=a.getX(x+1),U=a.getX(x+2);s=qr(this,p,t,n,c,u,h,C,I,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const T=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=qr(this,o,t,n,c,u,h,T,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,R=y;x<R;x+=3){const C=x,I=x+1,U=x+2;s=qr(this,p,t,n,c,u,h,C,I,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const T=m,y=m+1,x=m+2;s=qr(this,o,t,n,c,u,h,T,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Lf(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Si,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:i}}function qr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);const u=Lf(i,t,e,n,Vr,Gr,Wr,Ic);if(u){const h=new S;Mn.getBarycoord(Ic,Vr,Gr,Wr,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,l,c,h,new ht)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,l,c,h,new ht)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,l,c,h,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new S,materialIndex:0};Mn.getNormal(Vr,Gr,Wr,d.normal),u.face=d,u.barycoord=h}return u}class On extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function _(v,m,p,T,y,x,R,C,I,U,E){const g=x/I,w=R/U,L=x/2,P=R/2,G=C/2,F=I+1,z=U+1;let K=0,W=0;const lt=new S;for(let vt=0;vt<z;vt++){const _t=vt*w-P;for(let Ht=0;Ht<F;Ht++){const k=Ht*g-L;lt[v]=k*T,lt[m]=_t*y,lt[p]=G,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[m]=0,lt[p]=C>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(Ht/I),h.push(1-vt/U),K+=1}}for(let vt=0;vt<U;vt++)for(let _t=0;_t<I;_t++){const Ht=d+_t+F*vt,k=d+_t+F*(vt+1),Z=d+(_t+1)+F*(vt+1),St=d+(_t+1)+F*vt;l.push(Ht,k,St),l.push(k,Z,St),W+=6}a.addGroup(f,W,E),f+=W,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function If(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const uu={clone:Us,merge:Qe};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=If(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class du extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new S,Dc=new ht,Uc=new ht;class on extends du{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Uc),e.subVectors(Uc,Dc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,gs=1;class Nf extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ms,gs,t,e);s.layers=this.layers,this.add(s);const r=new on(ms,gs,t,e);r.layers=this.layers,this.add(r);const o=new on(ms,gs,t,e);o.layers=this.layers,this.add(o);const a=new on(ms,gs,t,e);a.layers=this.layers,this.add(a);const l=new on(ms,gs,t,e);l.layers=this.layers,this.add(l);const c=new on(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fu extends en{constructor(t=[],e=Ls,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ff extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:xi});r.uniforms.tEquirect.value=e;const o=new rt(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=kn),new Nf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Kt extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Of={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new Hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bf extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new S;class yo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vl extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _s;const $s=new S,vs=new S,xs=new S,ys=new ht,Zs=new ht,pu=new ce,$r=new S,Ks=new S,Zr=new S,Nc=new ht,fa=new ht,Fc=new ht;class ir extends ke{constructor(t=new Vl){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zf(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new yo(n,3,0,!1)),_s.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Kr($r.set(-.5,-.5,0),xs,o,vs,s,r),Kr(Ks.set(.5,-.5,0),xs,o,vs,s,r),Kr(Zr.set(.5,.5,0),xs,o,vs,s,r),Nc.set(0,0),fa.set(1,0),Fc.set(1,1);let a=t.ray.intersectTriangle($r,Ks,Zr,!1,$s);if(a===null&&(Kr(Ks.set(-.5,.5,0),xs,o,vs,s,r),fa.set(0,1),a=t.ray.intersectTriangle($r,Zr,Ks,!1,$s),a===null))return;const l=t.ray.origin.distanceTo($s);l<t.near||l>t.far||e.push({distance:l,point:$s.clone(),uv:Mn.getInterpolation($s,$r,Ks,Zr,Nc,fa,Fc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kr(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*ys.x-s*ys.y,Zs.y=s*ys.x+r*ys.y):Zs.copy(ys),i.copy(t),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(pu)}const pa=new S,kf=new S,Hf=new ee;class gi{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pa.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hf.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Oo,Vf=new ht(.5,.5),jr=new S;class Gl{constructor(t=new gi,e=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],v=r[9],m=r[10],p=r[11],T=r[12],y=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,f-u,p-_,R-T).normalize(),s[1].setComponents(c+o,f+u,p+_,R+T).normalize(),s[2].setComponents(c+a,f+h,p+v,R+y).normalize(),s[3].setComponents(c-a,f-h,p-v,R-y).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,R-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-x).normalize(),e===Hn)s[5].setComponents(c+l,f+d,p+m,R+x).normalize();else if(e===vo)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);const e=Vf.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wl extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mo=new S,So=new S,Oc=new ce,js=new Wi,Jr=new Oo,ma=new S,Bc=new S;class fo extends ke{constructor(t=new Oe,e=new Wl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mo.fromBufferAttribute(e,s-1),So.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(So);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;Oc.copy(s).invert(),js.copy(t.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,m=_-1;v<m;v+=c){const p=u.getX(v),T=u.getX(v+1),y=Qr(this,t,js,l,p,T,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(f),p=Qr(this,t,js,l,v,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=f,m=_-1;v<m;v+=c){const p=Qr(this,t,js,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Qr(this,t,js,l,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Mo.fromBufferAttribute(a,s),So.fromBufferAttribute(a,r),e.distanceSqToSegment(Mo,So,ma,Bc)>n)return;ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ma);if(!(c<t.near||c>t.far))return{distance:c,point:Bc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const zc=new S,kc=new S;class Gf extends fo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zc.fromBufferAttribute(e,s),kc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zc.distanceTo(kc);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xe extends en{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mu extends en{constructor(t,e,n=Ki,s,r,o,a=Nn,l=Nn,c,u=pr,h=1){if(u!==pr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gu extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xl extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new S,u=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class we extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let _=0;const v=[],m=n/2;let p=0;T(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function T(){const x=new S,R=new S;let C=0;const I=(e-t)/n;for(let U=0;U<=r;U++){const E=[],g=U/r,w=g*(e-t)+t;for(let L=0;L<=s;L++){const P=L/s,G=P*l+a,F=Math.sin(G),z=Math.cos(G);R.x=w*F,R.y=-g*n+m,R.z=w*z,h.push(R.x,R.y,R.z),x.set(F,I,z).normalize(),d.push(x.x,x.y,x.z),f.push(P,1-g),E.push(_++)}v.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){const g=v[E][U],w=v[E+1][U],L=v[E+1][U+1],P=v[E][U+1];(t>0||E!==0)&&(u.push(g,w,P),C+=3),(e>0||E!==r-1)&&(u.push(w,L,P),C+=3)}c.addGroup(p,C,0),p+=C}function y(x){const R=_,C=new ht,I=new S;let U=0;const E=x===!0?t:e,g=x===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*g,0),d.push(0,g,0),f.push(.5,.5),_++;const w=_;for(let L=0;L<=s;L++){const G=L/s*l+a,F=Math.cos(G),z=Math.sin(G);I.x=E*z,I.y=m*g,I.z=E*F,h.push(I.x,I.y,I.z),d.push(0,g,0),C.x=F*.5+.5,C.y=z*.5*g+.5,f.push(C.x,C.y),_++}for(let L=0;L<s;L++){const P=R+L,G=w+L;x===!0?u.push(G,G+1,P):u.push(G+1,G,P),U+=3}c.addGroup(p,U,x===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends we{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Bo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new S,s=[],r=[],o=[],a=new S,l=new ce;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yl extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wf extends Yl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const to=new S,ga=new ql,_a=new ql,va=new ql;class vr extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(to.subVectors(s[0],s[1]).add(s[0]),c=to);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(to.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=to),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),ga.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,v,m),_a.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,v,m),va.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),_a.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),va.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ga.calc(l),_a.calc(l),va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Xf(i,t){const e=1-i;return e*e*t}function Yf(i,t){return 2*(1-i)*i*t}function qf(i,t){return i*i*t}function hr(i,t,e,n){return Xf(i,t)+Yf(i,e)+qf(i,n)}function $f(i,t){const e=1-i;return e*e*e*t}function Zf(i,t){const e=1-i;return 3*e*e*i*t}function Kf(i,t){return 3*(1-i)*i*i*t}function jf(i,t){return i*i*i*t}function ur(i,t,e,n,s){return $f(i,t)+Zf(i,e)+Kf(i,n)+jf(i,s)}class _u extends Yn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jf extends Yn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vu extends Yn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qf extends Yn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends Yn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yu extends Yn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Hc(a,l.x,c.x,u.x,h.x),Hc(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var Eo=Object.freeze({__proto__:null,ArcCurve:Wf,CatmullRomCurve3:vr,CubicBezierCurve:_u,CubicBezierCurve3:Jf,EllipseCurve:Yl,LineCurve:vu,LineCurve3:Qf,QuadraticBezierCurve:xu,QuadraticBezierCurve3:yu,SplineCurve:Mu});class tp extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Eo[s.type]().fromJSON(s))}return this}}class bo extends tp{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vu(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new xu(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new _u(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Yl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ks extends bo{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bo().fromJSON(s))}return this}}function ep(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Su(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=op(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){const f=i[d],_=i[d+1];f<a&&(a=f),_<l&&(l=_),f>u&&(u=f),_>h&&(h=_)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return xr(r,o,e,a,l,c,0),o}function Su(i,t,e,n,s){let r;if(s===_p(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Vc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Vc(o/n|0,i[o],i[o+1],r);return r&&Ns(r,r.next)&&(Mr(r),r=r.next),r}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ns(e,e.next)||De(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&up(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ip(i,n,s,r):np(i)){t.push(l.i,i.i,c.i),Mr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sp(ji(i),t),xr(i,t,e,n,s,r,2)):o===2&&rp(i,t,e,n,s,r):xr(ji(i),t,e,n,s,r,1);break}}}function np(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&sr(s,a,r,l,o,c,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ip(i,t,e,n){const s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),_=Math.min(u,h,d),v=Math.max(a,l,c),m=Math.max(u,h,d),p=_l(f,_,t,e,n),T=_l(v,m,t,e,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=T;){if(y.x>=f&&y.x<=v&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&sr(a,u,l,h,c,d,y.x,y.y)&&De(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&sr(a,u,l,h,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&sr(a,u,l,h,c,d,y.x,y.y)&&De(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&sr(a,u,l,h,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ns(n,s)&&bu(n,e,e.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return ji(e)}function rp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pp(o,a)){let l=wu(o,a);o=ji(o,o.next),l=ji(l,l.next),xr(o,t,e,n,s,r,0),xr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function op(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Su(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(fp(c))}s.sort(ap);for(let r=0;r<s.length;r++)e=lp(s[r],e);return e}function ap(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lp(i,t){const e=cp(i,t);if(!e)return t;const n=wu(e,i);return ji(n,n.next),ji(e,e.next)}function cp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ns(i,e))return e;do{if(Ns(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Eu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);yr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&hp(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function hp(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function up(i,t,e,n){let s=i;do s.z===0&&(s.z=_l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dp(s)}function dp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function _l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Eu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function sr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Eu(i,t,e,n,s,r,o,a)}function pp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mp(i,t)&&(yr(i,t)&&yr(t,i)&&gp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Ns(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ns(i,t){return i.x===t.x&&i.y===t.y}function bu(i,t,e,n){const s=no(De(i,t,e)),r=no(De(i,t,n)),o=no(De(e,n,i)),a=no(De(e,n,t));return!!(s!==r&&o!==a||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||o===0&&eo(e,i,n)||a===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function mp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function gp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){const e=vl(i.i,i.x,i.y),n=vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vc(i,t,e,n){const s=vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class vp{static triangulate(t,e,n=2){return ep(t,e,n)}}class bs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return bs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gc(t),Wc(n,t);let o=t.length;e.forEach(Gc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wc(n,e[l]);const a=vp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Gc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class es extends Oe{constructor(t=new ks([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:xp;let y,x=!1,R,C,I,U;p&&(y=p.getSpacedPoints(u),x=!0,d=!1,R=p.computeFrenetFrames(u,!1),C=new S,I=new S,U=new S),d||(m=0,f=0,_=0,v=0);const E=a.extractPoints(c);let g=E.shape;const w=E.holes;if(!bs.isClockWise(g)){g=g.reverse();for(let nt=0,et=w.length;nt<et;nt++){const Q=w[nt];bs.isClockWise(Q)&&(w[nt]=Q.reverse())}}function P(nt){const Q=10000000000000001e-36;let tt=nt[0];for(let Et=1;Et<=nt.length;Et++){const ut=Et%nt.length,yt=nt[ut],Zt=yt.x-tt.x,Yt=yt.y-tt.y,A=Zt*Zt+Yt*Yt,M=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(tt.x),Math.abs(tt.y)),B=Q*M*M;if(A<=B){nt.splice(ut,1),Et--;continue}tt=yt}}P(g),w.forEach(P);const G=w.length,F=g;for(let nt=0;nt<G;nt++){const et=w[nt];g=g.concat(et)}function z(nt,et,Q){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(et,Q)}const K=g.length;function W(nt,et,Q){let tt,Et,ut;const yt=nt.x-et.x,Zt=nt.y-et.y,Yt=Q.x-nt.x,A=Q.y-nt.y,M=yt*yt+Zt*Zt,B=yt*A-Zt*Yt;if(Math.abs(B)>Number.EPSILON){const q=Math.sqrt(M),ot=Math.sqrt(Yt*Yt+A*A),$=et.x-Zt/q,Ut=et.y+yt/q,xt=Q.x-A/ot,Ot=Q.y+Yt/ot,Bt=((xt-$)*A-(Ot-Ut)*Yt)/(yt*A-Zt*Yt);tt=$+yt*Bt-nt.x,Et=Ut+Zt*Bt-nt.y;const dt=tt*tt+Et*Et;if(dt<=2)return new ht(tt,Et);ut=Math.sqrt(dt/2)}else{let q=!1;yt>Number.EPSILON?Yt>Number.EPSILON&&(q=!0):yt<-Number.EPSILON?Yt<-Number.EPSILON&&(q=!0):Math.sign(Zt)===Math.sign(A)&&(q=!0),q?(tt=-Zt,Et=yt,ut=Math.sqrt(M)):(tt=yt,Et=Zt,ut=Math.sqrt(M/2))}return new ht(tt/ut,Et/ut)}const lt=[];for(let nt=0,et=F.length,Q=et-1,tt=nt+1;nt<et;nt++,Q++,tt++)Q===et&&(Q=0),tt===et&&(tt=0),lt[nt]=W(F[nt],F[Q],F[tt]);const vt=[];let _t,Ht=lt.concat();for(let nt=0,et=G;nt<et;nt++){const Q=w[nt];_t=[];for(let tt=0,Et=Q.length,ut=Et-1,yt=tt+1;tt<Et;tt++,ut++,yt++)ut===Et&&(ut=0),yt===Et&&(yt=0),_t[tt]=W(Q[tt],Q[ut],Q[yt]);vt.push(_t),Ht=Ht.concat(_t)}let k;if(m===0)k=bs.triangulateShape(F,w);else{const nt=[],et=[];for(let Q=0;Q<m;Q++){const tt=Q/m,Et=f*Math.cos(tt*Math.PI/2),ut=_*Math.sin(tt*Math.PI/2)+v;for(let yt=0,Zt=F.length;yt<Zt;yt++){const Yt=z(F[yt],lt[yt],ut);wt(Yt.x,Yt.y,-Et),tt===0&&nt.push(Yt)}for(let yt=0,Zt=G;yt<Zt;yt++){const Yt=w[yt];_t=vt[yt];const A=[];for(let M=0,B=Yt.length;M<B;M++){const q=z(Yt[M],_t[M],ut);wt(q.x,q.y,-Et),tt===0&&A.push(q)}tt===0&&et.push(A)}}k=bs.triangulateShape(nt,et)}const Z=k.length,St=_+v;for(let nt=0;nt<K;nt++){const et=d?z(g[nt],Ht[nt],St):g[nt];x?(I.copy(R.normals[0]).multiplyScalar(et.x),C.copy(R.binormals[0]).multiplyScalar(et.y),U.copy(y[0]).add(I).add(C),wt(U.x,U.y,U.z)):wt(et.x,et.y,0)}for(let nt=1;nt<=u;nt++)for(let et=0;et<K;et++){const Q=d?z(g[et],Ht[et],St):g[et];x?(I.copy(R.normals[nt]).multiplyScalar(Q.x),C.copy(R.binormals[nt]).multiplyScalar(Q.y),U.copy(y[nt]).add(I).add(C),wt(U.x,U.y,U.z)):wt(Q.x,Q.y,h/u*nt)}for(let nt=m-1;nt>=0;nt--){const et=nt/m,Q=f*Math.cos(et*Math.PI/2),tt=_*Math.sin(et*Math.PI/2)+v;for(let Et=0,ut=F.length;Et<ut;Et++){const yt=z(F[Et],lt[Et],tt);wt(yt.x,yt.y,h+Q)}for(let Et=0,ut=w.length;Et<ut;Et++){const yt=w[Et];_t=vt[Et];for(let Zt=0,Yt=yt.length;Zt<Yt;Zt++){const A=z(yt[Zt],_t[Zt],tt);x?wt(A.x,A.y+y[u-1].y,y[u-1].x+Q):wt(A.x,A.y,h+Q)}}}V(),J();function V(){const nt=s.length/3;if(d){let et=0,Q=K*et;for(let tt=0;tt<Z;tt++){const Et=k[tt];mt(Et[2]+Q,Et[1]+Q,Et[0]+Q)}et=u+m*2,Q=K*et;for(let tt=0;tt<Z;tt++){const Et=k[tt];mt(Et[0]+Q,Et[1]+Q,Et[2]+Q)}}else{for(let et=0;et<Z;et++){const Q=k[et];mt(Q[2],Q[1],Q[0])}for(let et=0;et<Z;et++){const Q=k[et];mt(Q[0]+K*u,Q[1]+K*u,Q[2]+K*u)}}n.addGroup(nt,s.length/3-nt,0)}function J(){const nt=s.length/3;let et=0;it(F,et),et+=F.length;for(let Q=0,tt=w.length;Q<tt;Q++){const Et=w[Q];it(Et,et),et+=Et.length}n.addGroup(nt,s.length/3-nt,1)}function it(nt,et){let Q=nt.length;for(;--Q>=0;){const tt=Q;let Et=Q-1;Et<0&&(Et=nt.length-1);for(let ut=0,yt=u+m*2;ut<yt;ut++){const Zt=K*ut,Yt=K*(ut+1),A=et+tt+Zt,M=et+Et+Zt,B=et+Et+Yt,q=et+tt+Yt;Ft(A,M,B,q)}}}function wt(nt,et,Q){l.push(nt),l.push(et),l.push(Q)}function mt(nt,et,Q){re(nt),re(et),re(Q);const tt=s.length/3,Et=T.generateTopUV(n,s,tt-3,tt-2,tt-1);D(Et[0]),D(Et[1]),D(Et[2])}function Ft(nt,et,Q,tt){re(nt),re(et),re(tt),re(et),re(Q),re(tt);const Et=s.length/3,ut=T.generateSideWallUV(n,s,Et-6,Et-3,Et-2,Et-1);D(ut[0]),D(ut[1]),D(ut[3]),D(ut[1]),D(ut[2]),D(ut[3])}function re(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function D(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Eo[s.type]().fromJSON(s)),new es(n,t.options)}}const xp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-h),new ht(d,1-_),new ht(v,1-p)]:[new ht(a,1-l),new ht(u,1-h),new ht(f,1-_),new ht(m,1-p)]}};function yp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $l extends Oe{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new S,d=new ht,f=new S,_=new S,v=new S;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(_)}for(let T=0;T<=e;T++){const y=n+T*u*s,x=Math.sin(y),R=Math.cos(y);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*x,h.y=t[C].y,h.z=t[C].x*R,o.push(h.x,h.y,h.z),d.x=T/e,d.y=C/(t.length-1),a.push(d.x,d.y);const I=l[3*C+0]*x,U=l[3*C+1],E=l[3*C+0]*R;c.push(I,U,E)}}for(let T=0;T<e;T++)for(let y=0;y<t.length-1;y++){const x=y+T*t.length,R=x,C=x+t.length,I=x+t.length+1,U=x+1;r.push(R,C,U),r.push(I,U,C)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.points,t.segments,t.phiStart,t.phiLength)}}class Ce extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let y=0;y<c;y++){const x=y*h-r;_.push(x,-T,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const y=T+c*p,x=T+c*(p+1),R=T+1+c*(p+1),C=T+1+c*p;f.push(y,x,C),f.push(x,R,C)}this.setIndex(f),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mi extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new S,d=new S,f=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const C=R/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(C+x,1-y),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const y=u[p][T+1],x=u[p][T],R=u[p+1][T],C=u[p+1][T+1];(p!==0||o>0)&&f.push(y,x,C),(p!==n-1||l<Math.PI)&&f.push(x,R,C)}this.setIndex(f),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sn extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const v=_/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const v=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,T=(s+1)*f+_;o.push(v,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fs extends Oe{constructor(t=new yu(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new ht;let u=new S;const h=[],d=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),T(),p()}function m(y){u=t.getPointAt(y/e,u);const x=o.normals[y],R=o.binormals[y];for(let C=0;C<=s;C++){const I=C/s*Math.PI*2,U=Math.sin(I),E=-Math.cos(I);l.x=E*x.x+U*R.x,l.y=E*x.y+U*R.y,l.z=E*x.z+U*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const R=(s+1)*(y-1)+(x-1),C=(s+1)*y+(x-1),I=(s+1)*y+x,U=(s+1)*(y-1)+x;_.push(R,C,U),_.push(C,I,U)}}function T(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fs(new Eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Se extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mp extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Sp extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ep extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zo extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bp extends zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xa=new ce,Xc=new S,Yc=new S;class Tu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xc),Yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yc),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new ce,Js=new S,ya=new S;class wp extends Tu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),ya.copy(n.position),ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ya),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc,n.coordinateSystem,n.reversedDepth)}}class bi extends zo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Au extends du{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tp extends Tu{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Tp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ap extends zo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rp extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Cp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Zc=new ce;class Pp{constructor(t,e,n=0,s=1/0){this.ray=new Wi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(t,e=!0,n=[]){return xl(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xl(t[s],this,n,e);return n.sort(Kc),n}}function Kc(i,t){return i.distance-t.distance}function xl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)xl(r[o],t,e,!0)}}function jc(i,t,e,n){const s=Lp(n);switch(e){case Qh:return i*t;case eu:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case nu:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case tu:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Ol:return i*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cl:case hl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lp(i){switch(i){case Xn:case Zh:return{byteLength:1,components:1};case dr:case Kh:case Bs:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case Ki:case Il:case ii:return{byteLength:4,components:1};case jh:case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);function Ru(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],v=h[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
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
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`struct PhysicalMaterial {
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
}`,I0=`
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,eg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,sg=`#define TOON
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
}`,rg=`#define TOON
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
}`,og=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
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
}`,hg=`uniform float rotation;
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
}`,ug=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Dp,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:Yp,bumpmap_pars_fragment:qp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:jp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:t0,color_vertex:e0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:o0,emissivemap_fragment:a0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:h0,envmap_fragment:u0,envmap_common_pars_fragment:d0,envmap_pars_fragment:f0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:w0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:x0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:M0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:E0,lights_pars_begin:b0,lights_toon_fragment:T0,lights_toon_pars_fragment:A0,lights_phong_fragment:R0,lights_phong_pars_fragment:C0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:I0,lights_fragment_maps:D0,lights_fragment_end:U0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:O0,logdepthbuf_vertex:B0,map_fragment:z0,map_pars_fragment:k0,map_particle_fragment:H0,map_particle_pars_fragment:V0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:W0,morphinstance_vertex:X0,morphcolor_vertex:Y0,morphnormal_vertex:q0,morphtarget_pars_vertex:$0,morphtarget_vertex:Z0,normal_fragment_begin:K0,normal_fragment_maps:j0,normal_pars_fragment:J0,normal_pars_vertex:Q0,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:Em,tonemapping_fragment:bm,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Im,background_frag:Dm,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:km,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:Ym,meshbasic_frag:qm,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Km,meshmatcap_frag:jm,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:hg,sprite_frag:ug},Tt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},zn={basic:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Qe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Qe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Qe([Tt.points,Tt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Qe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Qe([Tt.common,Tt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Qe([Tt.sprite,Tt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Qe([Tt.common,Tt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Qe([Tt.lights,Tt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};zn.physical={uniforms:Qe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const io={r:0,b:0,g:0},Ii=new Fn,dg=new ce;function fg(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const R=_(y);R===null?p(a,l):R&&R.isColor&&(p(R,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const R=_(x);R&&(R.isCubeTexture||R.mapping===Fo)?(u===void 0&&(u=new rt(new On(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Us(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ii.copy(x.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Ii)),u.material.toneMapped=ue.getTransfer(R.colorSpace)!==Me,(h!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new rt(new Ce(2,2),new bn({name:"BackgroundMaterial",uniforms:Us(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ue.getTransfer(R.colorSpace)!==Me,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(io,hu(i)),n.buffers.color.setClear(io.r,io.g,io.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m,dispose:T}}function pg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(g,w,L,P,G){let F=!1;const z=h(P,L,w);r!==z&&(r=z,c(r.object)),F=f(g,P,L,G),F&&_(g,P,L,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(g,w,L,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function h(g,w,L){const P=L.wireframe===!0;let G=n[g.id];G===void 0&&(G={},n[g.id]=G);let F=G[w.id];F===void 0&&(F={},G[w.id]=F);let z=F[P];return z===void 0&&(z=d(l()),F[P]=z),z}function d(g){const w=[],L=[],P=[];for(let G=0;G<e;G++)w[G]=0,L[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:P,object:g,attributes:{},index:null}}function f(g,w,L,P){const G=r.attributes,F=w.attributes;let z=0;const K=L.getAttributes();for(const W in K)if(K[W].location>=0){const vt=G[W];let _t=F[W];if(_t===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(_t=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(_t=g.instanceColor)),vt===void 0||vt.attribute!==_t||_t&&vt.data!==_t.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function _(g,w,L,P){const G={},F=w.attributes;let z=0;const K=L.getAttributes();for(const W in K)if(K[W].location>=0){let vt=F[W];vt===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(vt=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(vt=g.instanceColor));const _t={};_t.attribute=vt,vt&&vt.data&&(_t.data=vt.data),G[W]=_t,z++}r.attributes=G,r.attributesNum=z,r.index=P}function v(){const g=r.newAttributes;for(let w=0,L=g.length;w<L;w++)g[w]=0}function m(g){p(g,0)}function p(g,w){const L=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;L[g]=1,P[g]===0&&(i.enableVertexAttribArray(g),P[g]=1),G[g]!==w&&(i.vertexAttribDivisor(g,w),G[g]=w)}function T(){const g=r.newAttributes,w=r.enabledAttributes;for(let L=0,P=w.length;L<P;L++)w[L]!==g[L]&&(i.disableVertexAttribArray(L),w[L]=0)}function y(g,w,L,P,G,F,z){z===!0?i.vertexAttribIPointer(g,w,L,G,F):i.vertexAttribPointer(g,w,L,P,G,F)}function x(g,w,L,P){v();const G=P.attributes,F=L.getAttributes(),z=w.defaultAttributeValues;for(const K in F){const W=F[K];if(W.location>=0){let lt=G[K];if(lt===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(lt=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(lt=g.instanceColor)),lt!==void 0){const vt=lt.normalized,_t=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const k=Ht.buffer,Z=Ht.type,St=Ht.bytesPerElement,V=Z===i.INT||Z===i.UNSIGNED_INT||lt.gpuType===Il;if(lt.isInterleavedBufferAttribute){const J=lt.data,it=J.stride,wt=lt.offset;if(J.isInstancedInterleavedBuffer){for(let mt=0;mt<W.locationSize;mt++)p(W.location+mt,J.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,k);for(let mt=0;mt<W.locationSize;mt++)y(W.location+mt,_t/W.locationSize,Z,vt,it*St,(wt+_t/W.locationSize*mt)*St,V)}else{if(lt.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,lt.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,k);for(let J=0;J<W.locationSize;J++)y(W.location+J,_t/W.locationSize,Z,vt,_t*St,_t/W.locationSize*J*St,V)}}else if(z!==void 0){const vt=z[K];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(W.location,vt);break;case 3:i.vertexAttrib3fv(W.location,vt);break;case 4:i.vertexAttrib4fv(W.location,vt);break;default:i.vertexAttrib1fv(W.location,vt)}}}}T()}function R(){U();for(const g in n){const w=n[g];for(const L in w){const P=w[L];for(const G in P)u(P[G].object),delete P[G];delete w[L]}delete n[g]}}function C(g){if(n[g.id]===void 0)return;const w=n[g.id];for(const L in w){const P=w[L];for(const G in P)u(P[G].object),delete P[G];delete w[L]}delete n[g.id]}function I(g){for(const w in n){const L=n[w];if(L[g.id]===void 0)continue;const P=L[g.id];for(const G in P)u(P[G].object),delete P[G];delete L[g.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function mg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*d[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const U=I===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Xn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ii&&!U)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function _g(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new gi,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,y=T*4;let x=p.clippingState||null;l.value=x,x=u(_,d,y,f);for(let R=0;R!==y;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function vg(i){let t=new WeakMap;function e(o,a){return a===go?o.mapping=Ls:a===ka&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===go||a===ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ff(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ws=4,Jc=[.125,.215,.35,.446,.526,.582],zi=20,Ma=new Au,Qc=new Qt;let Sa=null,Ea=0,ba=0,wa=!1;const Fi=(1+Math.sqrt(5))/2,Ms=1/Fi,th=[new S(-Fi,Ms,0),new S(Fi,Ms,0),new S(-Ms,0,Fi),new S(Ms,0,Fi),new S(0,Fi,-Ms),new S(0,Fi,Ms),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],xg=new S;class eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=xg}=r;Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,Ea,ba),this._renderer.xr.enabled=wa,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Bs,format:Un,colorSpace:Ds,depthBuffer:!1},s=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=Mg(r,t,e)}return s}_compileMaterial(t){const e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,s,r){const l=new on(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Qc),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new ae({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new rt(new On,v);let p=!1;const T=t.background;T?T.isColor&&(v.color.copy(T),t.background=null,p=!0):(v.color.copy(Qc),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const R=this._cubeSize;so(s,x*R,y>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=th[(s-r-1)%th.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let T=0;for(let I=0;I<zi;++I){const U=I/v,E=Math.exp(-U*U/2);p.push(E),I===0?T+=E:I<m&&(T+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const x=this._sizeLods[s],R=3*x*(s>y-ws?s-y+ws:0),C=4*(this._cubeSize-x);so(e,R,C,3*x,2*x),l.setRenderTarget(e),l.render(h,Ma)}}function yg(i){const t=[],e=[],n=[];let s=i;const r=i-ws+1+Jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ws?l=Jc[o-i+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,v=3,m=2,p=1,T=new Float32Array(v*_*f),y=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let C=0;C<f;C++){const I=C%3*2/3-1,U=C>2?0:-1,E=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];T.set(E,v*_*C),y.set(d,m*_*C);const g=[C,C,C,C,C,C];x.set(g,p*_*C)}const R=new Oe;R.setAttribute("position",new nn(T,v)),R.setAttribute("uv",new nn(y,m)),R.setAttribute("faceIndex",new nn(x,p)),t.push(R),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(i,t,e){const n=new Ei(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mg(i,t,e){const n=new Float32Array(zi),s=new S(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ih(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function sh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function Sg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===go||l===ka,u=l===Ls||l===Is;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new eh(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new eh(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Eg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let y=0,x=T.length;y<x;y+=3){const R=T[y+0],C=T[y+1],I=T[y+2];d.push(R,C,C,I,I,R)}}else if(_!==void 0){const T=_.array;v=_.version;for(let y=0,x=T.length/3-1;y<x;y+=3){const R=y+0,C=y+1,I=y+2;d.push(R,C,C,I,I,R)}}else return;const m=new(ru(d)?cu:lu)(d,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function h(d,f,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T]*v[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let g=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",g)};var f=g;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const I=new Float32Array(R*C*4*h),U=new ou(I,R,C,h);U.type=ii,U.needsUpdate=!0;const E=x*4;for(let w=0;w<h;w++){const L=p[w],P=T[w],G=y[w],F=R*C*4*w;for(let z=0;z<L.count;z++){const K=z*E;_===!0&&(s.fromBufferAttribute(L,z),I[F+K+0]=s.x,I[F+K+1]=s.y,I[F+K+2]=s.z,I[F+K+3]=0),v===!0&&(s.fromBufferAttribute(P,z),I[F+K+4]=s.x,I[F+K+5]=s.y,I[F+K+6]=s.z,I[F+K+7]=0),m===!0&&(s.fromBufferAttribute(G,z),I[F+K+8]=s.x,I[F+K+9]=s.y,I[F+K+10]=s.z,I[F+K+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new ht(R,C)},n.set(a,d),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Cu=new en,rh=new mu(1,1),Pu=new ou,Lu=new yf,Iu=new fu,oh=[],ah=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function Hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ko(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function Dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),Ve(e,n)}}function Ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;ch.set(n),i.uniformMatrix3fv(this.addr,!1,ch),Ve(e,n)}}function Ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),Ve(e,n)}}function Fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rh.compareFunction=su,r=rh):r=Cu,e.setTexture2D(t||r,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lu,s)}function Yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Iu,s)}function qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function $g(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Ig;case 35674:return Dg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}function Zg(i,t){i.uniform1fv(this.addr,t)}function Kg(i,t){const e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){const e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){const e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Qg(i,t){const e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){const e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){const e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n_(i,t){i.uniform1iv(this.addr,t)}function i_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function a_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function c_(i,t){i.uniform4uiv(this.addr,t)}function h_(i,t,e){const n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cu,r[o])}function u_(i,t,e){const n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lu,r[o])}function d_(i,t,e){const n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Iu,r[o])}function f_(i,t,e){const n=this.cache,s=t.length,r=ko(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function p_(i){switch(i){case 5126:return Zg;case 35664:return Kg;case 35665:return jg;case 35666:return Jg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}}class g_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}}class __{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function uh(i,t){i.seq.push(t),i.map[t.id]=t}function v_(i,t,e){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),o=Ta.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uh(e,c===void 0?new m_(a,i,t):new g_(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new __(a),uh(e,h)),e=h}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function dh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const x_=37297;let y_=0;function M_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const fh=new ee;function S_(i){ue._getMatrix(fh,ue.workingColorSpace,i);const t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case _o:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+M_(i.getShaderSource(t),a)}else return r}function E_(i,t){const e=S_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,t){let e;switch(t){case Dd:e="Linear";break;case Ud:e="Reinhard";break;case Nd:e="Cineon";break;case qh:e="ACESFilmic";break;case Od:e="AgX";break;case Bd:e="Neutral";break;case Fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ro=new S;function w_(){ue.getLuminanceCoefficients(ro);const i=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function A_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rr(i){return i!==""}function mh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(C_,L_)}const P_=new Map;function L_(i,t){let e=ne[t];if(e===void 0){const n=P_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(i){return i.replace(I_,D_)}function D_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function U_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function N_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function O_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ld:t="ENVMAP_BLENDING_MIX";break;case Id:t="ENVMAP_BLENDING_ADD";break}return t}function B_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=U_(e),c=N_(e),u=F_(e),h=O_(e),d=B_(e),f=T_(e),_=A_(r),v=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?ne.tonemapping_pars_fragment:"",e.toneMapping!==yi?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=yl(o),o=mh(o,e),o=gh(o,e),a=yl(a),a=mh(a,e),a=gh(a,e),o=_h(o),a=_h(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+o,x=T+p+a,R=dh(s,s.VERTEX_SHADER,y),C=dh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(w){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(C)||"",F=L.trim(),z=P.trim(),K=G.trim();let W=!0,lt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,C);else{const vt=ph(s,R,"vertex"),_t=ph(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+vt+`
`+_t)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||K==="")&&(lt=!1);lt&&(w.diagnostics={runnable:W,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(R),s.deleteShader(C),U=new po(s,v),E=R_(s,v)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,x_)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=C,this}let k_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V_(t),e.set(t,n)),n}}class V_{constructor(t){this.id=k_++,this.code=t,this.usedTimes=0}}function G_(i,t,e,n,s,r,o){const a=new kl,l=new H_,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,g,w,L,P){const G=L.fog,F=P.geometry,z=E.isMeshStandardMaterial?L.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||z),W=K&&K.mapping===Fo?K.image.height:null,lt=_[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const vt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_t=vt!==void 0?vt.length:0;let Ht=0;F.morphAttributes.position!==void 0&&(Ht=1),F.morphAttributes.normal!==void 0&&(Ht=2),F.morphAttributes.color!==void 0&&(Ht=3);let k,Z,St,V;if(lt){const fe=zn[lt];k=fe.vertexShader,Z=fe.fragmentShader}else k=E.vertexShader,Z=E.fragmentShader,l.update(E),St=l.getVertexShaderID(E),V=l.getFragmentShaderID(E);const J=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),wt=P.isInstancedMesh===!0,mt=P.isBatchedMesh===!0,Ft=!!E.map,re=!!E.matcap,D=!!K,nt=!!E.aoMap,et=!!E.lightMap,Q=!!E.bumpMap,tt=!!E.normalMap,Et=!!E.displacementMap,ut=!!E.emissiveMap,yt=!!E.metalnessMap,Zt=!!E.roughnessMap,Yt=E.anisotropy>0,A=E.clearcoat>0,M=E.dispersion>0,B=E.iridescence>0,q=E.sheen>0,ot=E.transmission>0,$=Yt&&!!E.anisotropyMap,Ut=A&&!!E.clearcoatMap,xt=A&&!!E.clearcoatNormalMap,Ot=A&&!!E.clearcoatRoughnessMap,Bt=B&&!!E.iridescenceMap,dt=B&&!!E.iridescenceThicknessMap,Ct=q&&!!E.sheenColorMap,qt=q&&!!E.sheenRoughnessMap,kt=!!E.specularMap,At=!!E.specularColorMap,te=!!E.specularIntensityMap,N=ot&&!!E.transmissionMap,gt=ot&&!!E.thicknessMap,bt=!!E.gradientMap,It=!!E.alphaMap,ft=E.alphaTest>0,st=!!E.alphaHash,zt=!!E.extensions;let Jt=yi;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const Te={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:Z,defines:E.defines,customVertexShaderID:St,customFragmentShaderID:V,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:mt,batchingColor:mt&&P._colorsTexture!==null,instancing:wt,instancingColor:wt&&P.instanceColor!==null,instancingMorph:wt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ds,alphaToCoverage:!!E.alphaToCoverage,map:Ft,matcap:re,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:W,aoMap:nt,lightMap:et,bumpMap:Q,normalMap:tt,displacementMap:d&&Et,emissiveMap:ut,normalMapObjectSpace:tt&&E.normalMapType===Vd,normalMapTangentSpace:tt&&E.normalMapType===iu,metalnessMap:yt,roughnessMap:Zt,anisotropy:Yt,anisotropyMap:$,clearcoat:A,clearcoatMap:Ut,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ot,dispersion:M,iridescence:B,iridescenceMap:Bt,iridescenceThicknessMap:dt,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:qt,specularMap:kt,specularColorMap:At,specularIntensityMap:te,transmission:ot,transmissionMap:N,thicknessMap:gt,gradientMap:bt,opaque:E.transparent===!1&&E.blending===As&&E.alphaToCoverage===!1,alphaMap:It,alphaTest:ft,alphaHash:st,combine:E.combine,mapUv:Ft&&v(E.map.channel),aoMapUv:nt&&v(E.aoMap.channel),lightMapUv:et&&v(E.lightMap.channel),bumpMapUv:Q&&v(E.bumpMap.channel),normalMapUv:tt&&v(E.normalMap.channel),displacementMapUv:Et&&v(E.displacementMap.channel),emissiveMapUv:ut&&v(E.emissiveMap.channel),metalnessMapUv:yt&&v(E.metalnessMap.channel),roughnessMapUv:Zt&&v(E.roughnessMap.channel),anisotropyMapUv:$&&v(E.anisotropyMap.channel),clearcoatMapUv:Ut&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:qt&&v(E.sheenRoughnessMap.channel),specularMapUv:kt&&v(E.specularMap.channel),specularColorMapUv:At&&v(E.specularColorMap.channel),specularIntensityMapUv:te&&v(E.specularIntensityMap.channel),transmissionMapUv:N&&v(E.transmissionMap.channel),thicknessMapUv:gt&&v(E.thicknessMap.channel),alphaMapUv:It&&v(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(tt||Yt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(Ft||It),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:it,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ht,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Ft&&E.map.isVideoTexture===!0&&ue.getTransfer(E.map.colorSpace)===Me,decodeVideoTextureEmissive:ut&&E.emissiveMap.isVideoTexture===!0&&ue.getTransfer(E.emissiveMap.colorSpace)===Me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fe,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(E){const g=[];if(E.shaderID?g.push(E.shaderID):(g.push(E.customVertexShaderID),g.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)g.push(w),g.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(T(g,E),y(g,E),g.push(i.outputColorSpace)),g.push(E.customProgramCacheKey),g.join()}function T(E,g){E.push(g.precision),E.push(g.outputColorSpace),E.push(g.envMapMode),E.push(g.envMapCubeUVHeight),E.push(g.mapUv),E.push(g.alphaMapUv),E.push(g.lightMapUv),E.push(g.aoMapUv),E.push(g.bumpMapUv),E.push(g.normalMapUv),E.push(g.displacementMapUv),E.push(g.emissiveMapUv),E.push(g.metalnessMapUv),E.push(g.roughnessMapUv),E.push(g.anisotropyMapUv),E.push(g.clearcoatMapUv),E.push(g.clearcoatNormalMapUv),E.push(g.clearcoatRoughnessMapUv),E.push(g.iridescenceMapUv),E.push(g.iridescenceThicknessMapUv),E.push(g.sheenColorMapUv),E.push(g.sheenRoughnessMapUv),E.push(g.specularMapUv),E.push(g.specularColorMapUv),E.push(g.specularIntensityMapUv),E.push(g.transmissionMapUv),E.push(g.thicknessMapUv),E.push(g.combine),E.push(g.fogExp2),E.push(g.sizeAttenuation),E.push(g.morphTargetsCount),E.push(g.morphAttributeCount),E.push(g.numDirLights),E.push(g.numPointLights),E.push(g.numSpotLights),E.push(g.numSpotLightMaps),E.push(g.numHemiLights),E.push(g.numRectAreaLights),E.push(g.numDirLightShadows),E.push(g.numPointLightShadows),E.push(g.numSpotLightShadows),E.push(g.numSpotLightShadowsWithMaps),E.push(g.numLightProbes),E.push(g.shadowMapType),E.push(g.toneMapping),E.push(g.numClippingPlanes),E.push(g.numClipIntersection),E.push(g.depthPacking)}function y(E,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),g.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const g=_[E.type];let w;if(g){const L=zn[g];w=uu.clone(L.uniforms)}else w=E.uniforms;return w}function R(E,g){let w;for(let L=0,P=u.length;L<P;L++){const G=u[L];if(G.cacheKey===g){w=G,++w.usedTimes;break}}return w===void 0&&(w=new z_(i,g,E,r),u.push(w)),w}function C(E){if(--E.usedTimes===0){const g=u.indexOf(E);u[g]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:U}}function W_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,_,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,d,f,_,v,m){const p=o(h,d,f,_,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,_,v,m){const p=o(h,d,f,_,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||X_),n.length>1&&n.sort(d||xh),s.length>1&&s.sort(d||xh)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Y_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yh,i.set(n,[o])):s>=r.length?(o=new yh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new Qt};break;case"SpotLight":e={position:new S,direction:new S,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function $_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Z_=0;function K_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j_(i){const t=new q_,e=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const s=new S,r=new ce,o=new ce;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,T=0,y=0,x=0,R=0,C=0,I=0;c.sort(K_);for(let E=0,g=c.length;E<g;E++){const w=c[E],L=w.color,P=w.intensity,G=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=L.r*P,h+=L.g*P,d+=L.b*P;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],P);I++}else if(w.isDirectionalLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,W=e.get(w);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=w.shadow.matrix,T++}n.directional[f]=z,f++}else if(w.isSpotLight){const z=t.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(P),z.distance=G,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[v]=z;const K=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,K.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,w.castShadow){const W=e.get(w);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=F,x++}v++}else if(w.isRectAreaLight){const z=t.get(w);z.color.copy(L).multiplyScalar(P),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=z,m++}else if(w.isPointLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const K=w.shadow,W=e.get(w);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=w.shadow.matrix,y++}n.point[_]=z,_++}else if(w.isHemisphereLight){const z=t.get(w);z.skyColor.copy(w.color).multiplyScalar(P),z.groundColor.copy(w.groundColor).multiplyScalar(P),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==T||U.numPointShadows!==y||U.numSpotShadows!==x||U.numSpotMaps!==R||U.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,U.directionalLength=f,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=T,U.numPointShadows=y,U.numSpotShadows=x,U.numSpotMaps=R,U.numLightProbes=I,n.version=Z_++)}function l(c,u){let h=0,d=0,f=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Mh(i){const t=new j_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mh(i),t.set(s,[a])):r>=o.length?(a=new Mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
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
}`;function e1(i,t,e){let n=new Gl;const s=new ht,r=new ht,o=new ge,a=new Sp({depthPacking:Hd}),l=new Ep,c={},u=e.maxTextureSize,h={[Si]:tn,[tn]:Si,[Fe]:Fe},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Q_,fragmentShader:t1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let p=this.type;this.render=function(C,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),g=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(xi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=p!==ti&&this.type===ti,G=p===ti&&this.type!==ti;for(let F=0,z=C.length;F<z;F++){const K=C[F],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const lt=W.getFrameExtents();if(s.multiply(lt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,W.mapSize.y=r.y)),W.map===null||P===!0||G===!0){const _t=this.type!==ti?{minFilter:Nn,magFilter:Nn}:{};W.map!==null&&W.map.dispose(),W.map=new Ei(s.x,s.y,_t),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const vt=W.getViewportCount();for(let _t=0;_t<vt;_t++){const Ht=W.getViewport(_t);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),L.viewport(o),W.updateMatrices(K,_t),n=W.getFrustum(),x(I,U,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===ti&&T(W,U),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,g,w)};function T(C,I){const U=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ei(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,U,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,U,f,v,null)}function y(C,I,U,E){let g=null;const w=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)g=w;else if(g=U.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const L=g.uuid,P=I.uuid;let G=c[L];G===void 0&&(G={},c[L]=G);let F=G[P];F===void 0&&(F=g.clone(),G[P]=F,I.addEventListener("dispose",R)),g=F}if(g.visible=I.visible,g.wireframe=I.wireframe,E===ti?g.side=I.shadowSide!==null?I.shadowSide:I.side:g.side=I.shadowSide!==null?I.shadowSide:h[I.side],g.alphaMap=I.alphaMap,g.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,g.map=I.map,g.clipShadows=I.clipShadows,g.clippingPlanes=I.clippingPlanes,g.clipIntersection=I.clipIntersection,g.displacementMap=I.displacementMap,g.displacementScale=I.displacementScale,g.displacementBias=I.displacementBias,g.wireframeLinewidth=I.wireframeLinewidth,g.linewidth=I.linewidth,U.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=i.properties.get(g);L.light=U}return g}function x(C,I,U,E,g){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===ti)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const P=t.update(C),G=C.material;if(Array.isArray(G)){const F=P.groups;for(let z=0,K=F.length;z<K;z++){const W=F[z],lt=G[W.materialIndex];if(lt&&lt.visible){const vt=y(C,lt,E,g);C.onBeforeShadow(i,C,I,U,P,vt,W),i.renderBufferDirect(U,null,P,vt,C,W),C.onAfterShadow(i,C,I,U,P,vt,W)}}}else if(G.visible){const F=y(C,G,E,g);C.onBeforeShadow(i,C,I,U,P,F,null),i.renderBufferDirect(U,null,P,F,C,null),C.onAfterShadow(i,C,I,U,P,F,null)}}const L=C.children;for(let P=0,G=L.length;P<G;P++)x(L[P],I,U,E,g)}function R(C){C.target.removeEventListener("dispose",R);for(const U in c){const E=c[U],g=C.target.uuid;g in E&&(E[g].dispose(),delete E[g])}}}const n1={[Da]:Ua,[Na]:Ba,[Fa]:za,[Ps]:Oa,[Ua]:Da,[Ba]:Na,[za]:Fa,[Oa]:Ps};function i1(i,t){function e(){let N=!1;const gt=new ge;let bt=null;const It=new ge(0,0,0,0);return{setMask:function(ft){bt!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),bt=ft)},setLocked:function(ft){N=ft},setClear:function(ft,st,zt,Jt,Te){Te===!0&&(ft*=Jt,st*=Jt,zt*=Jt),gt.set(ft,st,zt,Jt),It.equals(gt)===!1&&(i.clearColor(ft,st,zt,Jt),It.copy(gt))},reset:function(){N=!1,bt=null,It.set(-1,0,0,0)}}}function n(){let N=!1,gt=!1,bt=null,It=null,ft=null;return{setReversed:function(st){if(gt!==st){const zt=t.get("EXT_clip_control");st?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),gt=st;const Jt=ft;ft=null,this.setClear(Jt)}},getReversed:function(){return gt},setTest:function(st){st?J(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(st){bt!==st&&!N&&(i.depthMask(st),bt=st)},setFunc:function(st){if(gt&&(st=n1[st]),It!==st){switch(st){case Da:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=st}},setLocked:function(st){N=st},setClear:function(st){ft!==st&&(gt&&(st=1-st),i.clearDepth(st),ft=st)},reset:function(){N=!1,bt=null,It=null,ft=null,gt=!1}}}function s(){let N=!1,gt=null,bt=null,It=null,ft=null,st=null,zt=null,Jt=null,Te=null;return{setTest:function(fe){N||(fe?J(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!N&&(i.stencilMask(fe),gt=fe)},setFunc:function(fe,$n,Bn){(bt!==fe||It!==$n||ft!==Bn)&&(i.stencilFunc(fe,$n,Bn),bt=fe,It=$n,ft=Bn)},setOp:function(fe,$n,Bn){(st!==fe||zt!==$n||Jt!==Bn)&&(i.stencilOp(fe,$n,Bn),st=fe,zt=$n,Jt=Bn)},setLocked:function(fe){N=fe},setClear:function(fe){Te!==fe&&(i.clearStencil(fe),Te=fe)},reset:function(){N=!1,gt=null,bt=null,It=null,ft=null,st=null,zt=null,Jt=null,Te=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,v=!1,m=null,p=null,T=null,y=null,x=null,R=null,C=null,I=new Qt(0,0,0),U=0,E=!1,g=null,w=null,L=null,P=null,G=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=K>=2);let lt=null,vt={};const _t=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),k=new ge().fromArray(_t),Z=new ge().fromArray(Ht);function St(N,gt,bt,It){const ft=new Uint8Array(4),st=i.createTexture();i.bindTexture(N,st),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<bt;zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return st}const V={};V[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Ps),Q(!1),tt(dc),J(i.CULL_FACE),nt(xi);function J(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function it(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function wt(N,gt){return h[N]!==gt?(i.bindFramebuffer(N,gt),h[N]=gt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function mt(N,gt){let bt=f,It=!1;if(N){bt=d.get(gt),bt===void 0&&(bt=[],d.set(gt,bt));const ft=N.textures;if(bt.length!==ft.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,zt=ft.length;st<zt;st++)bt[st]=i.COLOR_ATTACHMENT0+st;bt.length=ft.length,It=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,It=!0);It&&i.drawBuffers(bt)}function Ft(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const re={[Bi]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};re[gd]=i.MIN,re[_d]=i.MAX;const D={[vd]:i.ZERO,[xd]:i.ONE,[yd]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[bd]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(N,gt,bt,It,ft,st,zt,Jt,Te,fe){if(N===xi){v===!0&&(it(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),N!==fd){if(N!==m||fe!==E){if((p!==Bi||x!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,x=Bi),fe)switch(N){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,y=null,R=null,C=null,I.set(0,0,0),U=0,m=N,E=fe}return}ft=ft||gt,st=st||bt,zt=zt||It,(gt!==p||ft!==x)&&(i.blendEquationSeparate(re[gt],re[ft]),p=gt,x=ft),(bt!==T||It!==y||st!==R||zt!==C)&&(i.blendFuncSeparate(D[bt],D[It],D[st],D[zt]),T=bt,y=It,R=st,C=zt),(Jt.equals(I)===!1||Te!==U)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Te),I.copy(Jt),U=Te),m=N,E=!1}function et(N,gt){N.side===Fe?it(i.CULL_FACE):J(i.CULL_FACE);let bt=N.side===tn;gt&&(bt=!bt),Q(bt),N.blending===As&&N.transparent===!1?nt(xi):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const It=N.stencilWrite;a.setTest(It),It&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){g!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),g=N)}function tt(N){N!==ud?(J(i.CULL_FACE),N!==w&&(N===dc?i.cullFace(i.BACK):N===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),w=N}function Et(N){N!==L&&(z&&i.lineWidth(N),L=N)}function ut(N,gt,bt){N?(J(i.POLYGON_OFFSET_FILL),(P!==gt||G!==bt)&&(i.polygonOffset(gt,bt),P=gt,G=bt)):it(i.POLYGON_OFFSET_FILL)}function yt(N){N?J(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Zt(N){N===void 0&&(N=i.TEXTURE0+F-1),lt!==N&&(i.activeTexture(N),lt=N)}function Yt(N,gt,bt){bt===void 0&&(lt===null?bt=i.TEXTURE0+F-1:bt=lt);let It=vt[bt];It===void 0&&(It={type:void 0,texture:void 0},vt[bt]=It),(It.type!==N||It.texture!==gt)&&(lt!==bt&&(i.activeTexture(bt),lt=bt),i.bindTexture(N,gt||V[N]),It.type=N,It.texture=gt)}function A(){const N=vt[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(N){k.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),k.copy(N))}function qt(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function kt(N,gt){let bt=c.get(gt);bt===void 0&&(bt=new WeakMap,c.set(gt,bt));let It=bt.get(N);It===void 0&&(It=i.getUniformBlockIndex(gt,N.name),bt.set(N,It))}function At(N,gt){const It=c.get(gt).get(N);l.get(gt)!==It&&(i.uniformBlockBinding(gt,It,N.__bindingPointIndex),l.set(gt,It))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,vt={},h={},d=new WeakMap,f=[],_=null,v=!1,m=null,p=null,T=null,y=null,x=null,R=null,C=null,I=new Qt(0,0,0),U=0,E=!1,g=null,w=null,L=null,P=null,G=null,k.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:it,bindFramebuffer:wt,drawBuffers:mt,useProgram:Ft,setBlending:nt,setMaterial:et,setFlipSided:Q,setCullFace:tt,setLineWidth:Et,setPolygonOffset:ut,setScissorTest:yt,activeTexture:Zt,bindTexture:Yt,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Bt,texImage3D:dt,updateUBOMapping:kt,uniformBlockBinding:At,texStorage2D:xt,texStorage3D:Ot,texSubImage2D:q,texSubImage3D:ot,compressedTexSubImage2D:$,compressedTexSubImage3D:Ut,scissor:Ct,viewport:qt,reset:te}}function s1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return f?new OffscreenCanvas(A,M):xo("canvas")}function v(A,M,B){let q=1;const ot=Yt(A);if((ot.width>B||ot.height>B)&&(q=B/Math.max(ot.width,ot.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(q*ot.width),Ut=Math.floor(q*ot.height);h===void 0&&(h=_($,Ut));const xt=M?_($,Ut):h;return xt.width=$,xt.height=Ut,xt.getContext("2d").drawImage(A,0,0,$,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+$+"x"+Ut+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,M,B,q,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),M===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),M===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){const Ut=ot?_o:ue.getTransfer(q);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Ut===Me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,M){let B;return A?M===null||M===Ki||M===fr?B=i.DEPTH24_STENCIL8:M===ii?B=i.DEPTH32F_STENCIL8:M===dr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===fr?B=i.DEPTH_COMPONENT24:M===ii?B=i.DEPTH_COMPONENT32F:M===dr&&(B=i.DEPTH_COMPONENT16),B}function R(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nn&&A.minFilter!==kn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),U(M),M.isVideoTexture&&u.delete(M)}function I(A){const M=A.target;M.removeEventListener("dispose",I),g(M)}function U(A){const M=n.get(A);if(M.__webglInit===void 0)return;const B=A.source,q=d.get(B);if(q){const ot=q[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(A),Object.keys(q).length===0&&d.delete(B)}n.remove(A)}function E(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const B=A.source,q=d.get(B);delete q[M.__cacheKey],o.memory.textures--}function g(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let ot=0;ot<M.__webglFramebuffer[q].length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[q][ot]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let q=0,ot=B.length;q<ot;q++){const $=n.get(B[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[q])}n.remove(A)}let w=0;function L(){w=0}function P(){const A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function G(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function F(A,M){const B=n.get(A);if(A.isVideoTexture&&yt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,A,M);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function z(A,M){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function K(A,M){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function W(A,M){const B=n.get(A);if(A.version>0&&B.__version!==A.version){J(B,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const lt={[Wn]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},vt={[Nn]:i.NEAREST,[zd]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},_t={[Gd]:i.NEVER,[Zd]:i.ALWAYS,[Wd]:i.LESS,[su]:i.LEQUAL,[Xd]:i.EQUAL,[$d]:i.GEQUAL,[Yd]:i.GREATER,[qd]:i.NOTEQUAL};function Ht(A,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===kn||M.magFilter===Xo||M.magFilter===Lr||M.magFilter===Vi||M.minFilter===kn||M.minFilter===Xo||M.minFilter===Lr||M.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,lt[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,lt[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,lt[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,vt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,vt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==Lr&&M.minFilter!==Vi||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function k(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const q=M.source;let ot=d.get(q);ot===void 0&&(ot={},d.set(q,ot));const $=G(M);if($!==A.__cacheKey){ot[$]===void 0&&(ot[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ot[$].usedTimes++;const Ut=ot[A.__cacheKey];Ut!==void 0&&(ot[A.__cacheKey].usedTimes--,Ut.usedTimes===0&&E(M)),A.__cacheKey=$,A.__webglTexture=ot[$].texture}return B}function Z(A,M,B){return Math.floor(Math.floor(A/B)/M)}function St(A,M,B,q){const $=A.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,B,q,M.data);else{$.sort((dt,Ct)=>dt.start-Ct.start);let Ut=0;for(let dt=1;dt<$.length;dt++){const Ct=$[Ut],qt=$[dt],kt=Ct.start+Ct.count,At=Z(qt.start,M.width,4),te=Z(Ct.start,M.width,4);qt.start<=kt+1&&At===te&&Z(qt.start+qt.count-1,M.width,4)===At?Ct.count=Math.max(Ct.count,qt.start+qt.count-Ct.start):(++Ut,$[Ut]=qt)}$.length=Ut+1;const xt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let dt=0,Ct=$.length;dt<Ct;dt++){const qt=$[dt],kt=Math.floor(qt.start/4),At=Math.ceil(qt.count/4),te=kt%M.width,N=Math.floor(kt/M.width),gt=At,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,te,N,gt,bt,B,q,M.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function V(A,M,B){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);const ot=k(A,M),$=M.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+B);const Ut=n.get($);if($.version!==Ut.__version||ot===!0){e.activeTexture(i.TEXTURE0+B);const xt=ue.getPrimaries(ue.workingColorSpace),Ot=M.colorSpace===_i?null:ue.getPrimaries(M.colorSpace),Bt=M.colorSpace===_i||xt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let dt=v(M.image,!1,s.maxTextureSize);dt=Zt(M,dt);const Ct=r.convert(M.format,M.colorSpace),qt=r.convert(M.type);let kt=y(M.internalFormat,Ct,qt,M.colorSpace,M.isVideoTexture);Ht(q,M);let At;const te=M.mipmaps,N=M.isVideoTexture!==!0,gt=Ut.__version===void 0||ot===!0,bt=$.dataReady,It=R(M,dt);if(M.isDepthTexture)kt=x(M.format===mr,M.type),gt&&(N?e.texStorage2D(i.TEXTURE_2D,1,kt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,kt,dt.width,dt.height,0,Ct,qt,null));else if(M.isDataTexture)if(te.length>0){N&&gt&&e.texStorage2D(i.TEXTURE_2D,It,kt,te[0].width,te[0].height);for(let ft=0,st=te.length;ft<st;ft++)At=te[ft],N?bt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,Ct,qt,At.data):e.texImage2D(i.TEXTURE_2D,ft,kt,At.width,At.height,0,Ct,qt,At.data);M.generateMipmaps=!1}else N?(gt&&e.texStorage2D(i.TEXTURE_2D,It,kt,dt.width,dt.height),bt&&St(M,dt,Ct,qt)):e.texImage2D(i.TEXTURE_2D,0,kt,dt.width,dt.height,0,Ct,qt,dt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,kt,te[0].width,te[0].height,dt.depth);for(let ft=0,st=te.length;ft<st;ft++)if(At=te[ft],M.format!==Un)if(Ct!==null)if(N){if(bt)if(M.layerUpdates.size>0){const zt=jc(At.width,At.height,M.format,M.type);for(const Jt of M.layerUpdates){const Te=At.data.subarray(Jt*zt/At.data.BYTES_PER_ELEMENT,(Jt+1)*zt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Jt,At.width,At.height,1,Ct,Te)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,dt.depth,Ct,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,kt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,At.width,At.height,dt.depth,Ct,qt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,kt,At.width,At.height,dt.depth,0,Ct,qt,At.data)}else{N&&gt&&e.texStorage2D(i.TEXTURE_2D,It,kt,te[0].width,te[0].height);for(let ft=0,st=te.length;ft<st;ft++)At=te[ft],M.format!==Un?Ct!==null?N?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?bt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,At.width,At.height,Ct,qt,At.data):e.texImage2D(i.TEXTURE_2D,ft,kt,At.width,At.height,0,Ct,qt,At.data)}else if(M.isDataArrayTexture)if(N){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,kt,dt.width,dt.height,dt.depth),bt)if(M.layerUpdates.size>0){const ft=jc(dt.width,dt.height,M.format,M.type);for(const st of M.layerUpdates){const zt=dt.data.subarray(st*ft/dt.data.BYTES_PER_ELEMENT,(st+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,dt.width,dt.height,1,Ct,qt,zt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,qt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,dt.width,dt.height,dt.depth,0,Ct,qt,dt.data);else if(M.isData3DTexture)N?(gt&&e.texStorage3D(i.TEXTURE_3D,It,kt,dt.width,dt.height,dt.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,qt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,dt.width,dt.height,dt.depth,0,Ct,qt,dt.data);else if(M.isFramebufferTexture){if(gt)if(N)e.texStorage2D(i.TEXTURE_2D,It,kt,dt.width,dt.height);else{let ft=dt.width,st=dt.height;for(let zt=0;zt<It;zt++)e.texImage2D(i.TEXTURE_2D,zt,kt,ft,st,0,Ct,qt,null),ft>>=1,st>>=1}}else if(te.length>0){if(N&&gt){const ft=Yt(te[0]);e.texStorage2D(i.TEXTURE_2D,It,kt,ft.width,ft.height)}for(let ft=0,st=te.length;ft<st;ft++)At=te[ft],N?bt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ct,qt,At):e.texImage2D(i.TEXTURE_2D,ft,kt,Ct,qt,At);M.generateMipmaps=!1}else if(N){if(gt){const ft=Yt(dt);e.texStorage2D(i.TEXTURE_2D,It,kt,ft.width,ft.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,qt,dt)}else e.texImage2D(i.TEXTURE_2D,0,kt,Ct,qt,dt);m(M)&&p(q),Ut.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,B){if(M.image.length!==6)return;const q=k(A,M),ot=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const $=n.get(ot);if(ot.version!==$.__version||q===!0){e.activeTexture(i.TEXTURE0+B);const Ut=ue.getPrimaries(ue.workingColorSpace),xt=M.colorSpace===_i?null:ue.getPrimaries(M.colorSpace),Ot=M.colorSpace===_i||Ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Bt=M.isCompressedTexture||M.image[0].isCompressedTexture,dt=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let st=0;st<6;st++)!Bt&&!dt?Ct[st]=v(M.image[st],!0,s.maxCubemapSize):Ct[st]=dt?M.image[st].image:M.image[st],Ct[st]=Zt(M,Ct[st]);const qt=Ct[0],kt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),te=y(M.internalFormat,kt,At,M.colorSpace),N=M.isVideoTexture!==!0,gt=$.__version===void 0||q===!0,bt=ot.dataReady;let It=R(M,qt);Ht(i.TEXTURE_CUBE_MAP,M);let ft;if(Bt){N&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,te,qt.width,qt.height);for(let st=0;st<6;st++){ft=Ct[st].mipmaps;for(let zt=0;zt<ft.length;zt++){const Jt=ft[zt];M.format!==Un?kt!==null?N?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,Jt.width,Jt.height,kt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,te,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,0,0,Jt.width,Jt.height,kt,At,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt,te,Jt.width,Jt.height,0,kt,At,Jt.data)}}}else{if(ft=M.mipmaps,N&&gt){ft.length>0&&It++;const st=Yt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,te,st.width,st.height)}for(let st=0;st<6;st++)if(dt){N?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct[st].width,Ct[st].height,kt,At,Ct[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,Ct[st].width,Ct[st].height,0,kt,At,Ct[st].data);for(let zt=0;zt<ft.length;zt++){const Te=ft[zt].image[st].image;N?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,Te.width,Te.height,kt,At,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,te,Te.width,Te.height,0,kt,At,Te.data)}}else{N?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,kt,At,Ct[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,kt,At,Ct[st]);for(let zt=0;zt<ft.length;zt++){const Jt=ft[zt];N?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,0,0,kt,At,Jt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,zt+1,te,kt,At,Jt.image[st])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=ot.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function it(A,M,B,q,ot,$){const Ut=r.convert(B.format,B.colorSpace),xt=r.convert(B.type),Ot=y(B.internalFormat,Ut,xt,B.colorSpace),Bt=n.get(M),dt=n.get(B);if(dt.__renderTarget=M,!Bt.__hasExternalTextures){const Ct=Math.max(1,M.width>>$),qt=Math.max(1,M.height>>$);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,$,Ot,Ct,qt,M.depth,0,Ut,xt,null):e.texImage2D(ot,$,Ot,Ct,qt,0,Ut,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ut(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ot,dt.__webglTexture,0,Et(M)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ot,dt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const q=M.depthTexture,ot=q&&q.isDepthTexture?q.type:null,$=x(M.stencilBuffer,ot),Ut=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=Et(M);ut(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,$,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,A)}else{const q=M.textures;for(let ot=0;ot<q.length;ot++){const $=q[ot],Ut=r.convert($.format,$.colorSpace),xt=r.convert($.type),Ot=y($.internalFormat,Ut,xt,$.colorSpace),Bt=Et(M);B&&ut(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Ot,M.width,M.height):ut(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,Ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const ot=q.__webglTexture,$=Et(M);if(M.depthTexture.format===pr)ut(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(M.depthTexture.format===mr)ut(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Ft(A){const M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",ot)};q.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?mt(M.__webglFramebuffer[0],A):mt(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),wt(M.__webglDepthbuffer[q],A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,$)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),wt(M.__webglDepthbuffer,A,!1);else{const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,M,B){const q=n.get(A);M!==void 0&&it(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ft(A)}function D(A){const M=A.texture,B=n.get(A),q=n.get(M);A.addEventListener("dispose",I);const ot=A.textures,$=A.isWebGLCubeRenderTarget===!0,Ut=ot.length>1;if(Ut||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[xt]=[];for(let Ot=0;Ot<M.mipmaps.length;Ot++)B.__webglFramebuffer[xt][Ot]=i.createFramebuffer()}else B.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let xt=0;xt<M.mipmaps.length;xt++)B.__webglFramebuffer[xt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let xt=0,Ot=ot.length;xt<Ot;xt++){const Bt=n.get(ot[xt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ut(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<ot.length;xt++){const Ot=ot[xt];B.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);const Bt=r.convert(Ot.format,Ot.colorSpace),dt=r.convert(Ot.type),Ct=y(Ot.internalFormat,Bt,dt,Ot.colorSpace,A.isXRRenderTarget===!0),qt=Et(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M);for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ot=0;Ot<M.mipmaps.length;Ot++)it(B.__webglFramebuffer[xt][Ot],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot);else it(B.__webglFramebuffer[xt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let xt=0,Ot=ot.length;xt<Ot;xt++){const Bt=ot[xt],dt=n.get(Bt);let Ct=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,dt.__webglTexture),Ht(Ct,Bt),it(B.__webglFramebuffer,A,Bt,i.COLOR_ATTACHMENT0+xt,Ct,0),m(Bt)&&p(Ct)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,q.__webglTexture),Ht(xt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ot=0;Ot<M.mipmaps.length;Ot++)it(B.__webglFramebuffer[Ot],A,M,i.COLOR_ATTACHMENT0,xt,Ot);else it(B.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,xt,0);m(M)&&p(xt),e.unbindTexture()}A.depthBuffer&&Ft(A)}function nt(A){const M=A.textures;for(let B=0,q=M.length;B<q;B++){const ot=M[B];if(m(ot)){const $=T(A),Ut=n.get(ot).__webglTexture;e.bindTexture($,Ut),p($),e.unbindTexture()}}}const et=[],Q=[];function tt(A){if(A.samples>0){if(ut(A)===!1){const M=A.textures,B=A.width,q=A.height;let ot=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(A),xt=M.length>1;if(xt)for(let Bt=0;Bt<M.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Ot=A.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Bt=0;Bt<M.length;Bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Bt]);const dt=n.get(M[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,ot,i.NEAREST),l===!0&&(et.length=0,Q.length=0,et.push(i.COLOR_ATTACHMENT0+Bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(et.push($),Q.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Bt=0;Bt<M.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Bt]);const dt=n.get(M[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Et(A){return Math.min(s.maxSamples,A.samples)}function ut(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Zt(A,M){const B=A.colorSpace,q=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ds&&B!==_i&&(ue.getTransfer(B)===Me?(q!==Un||ot!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=re,this.setupRenderTarget=D,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ut}function r1(i,t){function e(n,s=_i){let r;const o=ue.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zh)return i.BYTE;if(n===Kh)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===tu)return i.RGB;if(n===Un)return i.RGBA;if(n===pr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===eu)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===nu)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===qa||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===qa)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===Ka||n===ja||n===Ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===fl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a1=`
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

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:o1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends zs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const v=typeof XRWebGLBinding<"u",m=new l1,p={},T=e.getContextAttributes();let y=null,x=null;const R=[],C=[],I=new ht;let U=null;const E=new on;E.viewport=new ge;const g=new on;g.viewport=new ge;const w=[E,g],L=new Rp;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=R[V];return J===void 0&&(J=new da,R[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=R[V];return J===void 0&&(J=new da,R[V]=J),J.getGripSpace()},this.getHand=function(V){let J=R[V];return J===void 0&&(J=new da,R[V]=J),J.getHandSpace()};function F(V){const J=C.indexOf(V.inputSource);if(J===-1)return;const it=R[J];it!==void 0&&(it.update(V.inputSource,V.frame,c||o),it.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let V=0;V<R.length;V++){const J=C[V];J!==null&&(C[V]=null,R[V].disconnect(J))}P=null,G=null,m.reset();for(const V in p)delete p[V];t.setRenderTarget(y),f=null,d=null,h=null,s=null,x=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,wt=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=T.stencil?mr:pr,wt=T.stencil?fr:Ki);const Ft={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ei(d.textureWidth,d.textureHeight,{format:Un,type:Xn,depthTexture:new mu(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const it={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ei(f.framebufferWidth,f.framebufferHeight,{format:Un,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(V){for(let J=0;J<V.removed.length;J++){const it=V.removed[J],wt=C.indexOf(it);wt>=0&&(C[wt]=null,R[wt].disconnect(it))}for(let J=0;J<V.added.length;J++){const it=V.added[J];let wt=C.indexOf(it);if(wt===-1){for(let Ft=0;Ft<R.length;Ft++)if(Ft>=C.length){C.push(it),wt=Ft;break}else if(C[Ft]===null){C[Ft]=it,wt=Ft;break}if(wt===-1)break}const mt=R[wt];mt&&mt.connect(it)}}const W=new S,lt=new S;function vt(V,J,it){W.setFromMatrixPosition(J.matrixWorld),lt.setFromMatrixPosition(it.matrixWorld);const wt=W.distanceTo(lt),mt=J.projectionMatrix.elements,Ft=it.projectionMatrix.elements,re=mt[14]/(mt[10]-1),D=mt[14]/(mt[10]+1),nt=(mt[9]+1)/mt[5],et=(mt[9]-1)/mt[5],Q=(mt[8]-1)/mt[0],tt=(Ft[8]+1)/Ft[0],Et=re*Q,ut=re*tt,yt=wt/(-Q+tt),Zt=yt*-Q;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Zt),V.translateZ(yt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),mt[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Yt=re+yt,A=D+yt,M=Et-Zt,B=ut+(wt-Zt),q=nt*D/A*Yt,ot=et*D/A*Yt;V.projectionMatrix.makePerspective(M,B,q,ot,Yt,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function _t(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,it=V.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(it=m.depthFar)),L.near=g.near=E.near=J,L.far=g.far=E.far=it,(P!==L.near||G!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,G=L.far),L.layers.mask=V.layers.mask|6,E.layers.mask=L.layers.mask&3,g.layers.mask=L.layers.mask&5;const wt=V.parent,mt=L.cameras;_t(L,wt);for(let Ft=0;Ft<mt.length;Ft++)_t(mt[Ft],wt);mt.length===2?vt(L,E,g):L.projectionMatrix.copy(E.projectionMatrix),Ht(V,L,wt)};function Ht(V,J,it){it===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(it.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=gr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(V){return p[V]};let k=null;function Z(V,J){if(u=J.getViewerPose(c||o),_=J,u!==null){const it=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let wt=!1;it.length!==L.cameras.length&&(L.cameras.length=0,wt=!0);for(let D=0;D<it.length;D++){const nt=it[D];let et=null;if(f!==null)et=f.getViewport(nt);else{const tt=h.getViewSubImage(d,nt);et=tt.viewport,D===0&&(t.setRenderTargetTextures(x,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(x))}let Q=w[D];Q===void 0&&(Q=new on,Q.layers.enable(D),Q.viewport=new ge,w[D]=Q),Q.matrix.fromArray(nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(et.x,et.y,et.width,et.height),D===0&&(L.matrix.copy(Q.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),wt===!0&&L.cameras.push(Q)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const D=h.getDepthInformation(it[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let D=0;D<it.length;D++){const nt=it[D].camera;if(nt){let et=p[nt];et||(et=new gu,p[nt]=et);const Q=h.getCameraImage(nt);et.sourceTexture=Q}}}}for(let it=0;it<R.length;it++){const wt=C[it],mt=R[it];wt!==null&&mt!==void 0&&mt.update(wt,J,c||o)}k&&k(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const St=new Ru;St.setAnimationLoop(Z),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}const Di=new Fn,h1=new ce;function u1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),y=T.envMap,x=T.envMapRotation;y&&(m.envMap.value=y,Di.copy(x),Di.x*=-1,Di.y*=-1,Di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Di)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const x=y.program;n.uniformBlockBinding(T,x)}function c(T,y){let x=s[T.id];x===void 0&&(_(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(T,R);const C=t.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function u(T){const y=h();T.__bindingPointIndex=y;const x=i.createBuffer(),R=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],x=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,I=x.length;C<I;C++){const U=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,g=U.length;E<g;E++){const w=U[E];if(f(w,C,E,R)===!0){const L=w.__offset,P=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let F=0;F<P.length;F++){const z=P[F],K=v(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+G,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,y,x,R){const C=T.value,I=y+"_"+x;if(R[I]===void 0)return typeof C=="number"||typeof C=="boolean"?R[I]=C:R[I]=C.clone(),!0;{const U=R[I];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[I]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(T){const y=T.uniforms;let x=0;const R=16;for(let I=0,U=y.length;I<U;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let g=0,w=E.length;g<w;g++){const L=E[g],P=Array.isArray(L.value)?L.value:[L.value];for(let G=0,F=P.length;G<F;G++){const z=P[G],K=v(z),W=x%R,lt=W%K.boundary,vt=W+lt;x+=lt,vt!==0&&R-vt<K.storage&&(x+=R-vt),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=K.storage}}}const C=x%R;return C>0&&(x+=R-C),T.__size=x,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class f1{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=xe;let C=0,I=0,U=null,E=-1,g=null;const w=new ge,L=new ge;let P=null;const G=new Qt(0);let F=0,z=e.width,K=e.height,W=1,lt=null,vt=null;const _t=new ge(0,0,z,K),Ht=new ge(0,0,z,K);let k=!1;const Z=new Gl;let St=!1,V=!1;const J=new ce,it=new S,wt=new ge,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function re(){return U===null?W:1}let D=n;function nt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ll}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",ft,!1),D===null){const O="webgl2";if(D=nt(O,b),D===null)throw nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,Q,tt,Et,ut,yt,Zt,Yt,A,M,B,q,ot,$,Ut,xt,Ot,Bt,dt,Ct,qt,kt,At,te;function N(){et=new Eg(D),et.init(),kt=new r1(D,et),Q=new gg(D,et,t,kt),tt=new i1(D,et),Q.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),Et=new Tg(D),ut=new W_,yt=new s1(D,et,tt,ut,Q,kt,Et),Zt=new vg(x),Yt=new Sg(x),A=new Ip(D),At=new pg(D,A),M=new bg(D,A,Et,At),B=new Rg(D,M,A,Et),dt=new Ag(D,Q,yt),xt=new _g(ut),q=new G_(x,Zt,Yt,et,Q,At,xt),ot=new u1(x,ut),$=new Y_,Ut=new J_(et),Bt=new fg(x,Zt,Yt,tt,B,f,l),Ot=new e1(x,B,Q),te=new d1(D,Et,Q,tt),Ct=new mg(D,et,Et),qt=new wg(D,et,Et),Et.programs=q.programs,x.capabilities=Q,x.extensions=et,x.properties=ut,x.renderLists=$,x.shadowMap=Ot,x.state=tt,x.info=Et}N();const gt=new c1(x,D);this.xr=gt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(z,K,!1))},this.getSize=function(b){return b.set(z,K)},this.setSize=function(b,O,X=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,K=O,e.width=Math.floor(b*W),e.height=Math.floor(O*W),X===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(z*W,K*W).floor()},this.setDrawingBufferSize=function(b,O,X){z=b,K=O,W=X,e.width=Math.floor(b*X),e.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,O,X,Y){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,O,X,Y),tt.viewport(w.copy(_t).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,O,X,Y){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,O,X,Y),tt.scissor(L.copy(Ht).multiplyScalar(W).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(b){tt.setScissorTest(k=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let Y=0;if(b){let H=!1;if(U!==null){const pt=U.texture.format;H=pt===Ol||pt===Fl||pt===Nl}if(H){const pt=U.texture.type,Rt=pt===Xn||pt===Ki||pt===dr||pt===fr||pt===Dl||pt===Ul,Nt=Bt.getClearColor(),Lt=Bt.getClearAlpha(),Xt=Nt.r,$t=Nt.g,Vt=Nt.b;Rt?(_[0]=Xt,_[1]=$t,_[2]=Vt,_[3]=Lt,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=Xt,v[1]=$t,v[2]=Vt,v[3]=Lt,D.clearBufferiv(D.COLOR,0,v))}else Y|=D.COLOR_BUFFER_BIT}O&&(Y|=D.DEPTH_BUFFER_BIT),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Bt.dispose(),$.dispose(),Ut.dispose(),ut.dispose(),Zt.dispose(),Yt.dispose(),B.dispose(),At.dispose(),te.dispose(),q.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Bn),gt.removeEventListener("sessionend",oc),Ti.stop()};function bt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Et.autoReset,O=Ot.enabled,X=Ot.autoUpdate,Y=Ot.needsUpdate,H=Ot.type;N(),Et.autoReset=b,Ot.enabled=O,Ot.autoUpdate=X,Ot.needsUpdate=Y,Ot.type=H}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const O=b.target;O.removeEventListener("dispose",st),zt(O)}function zt(b){Jt(b),ut.remove(b)}function Jt(b){const O=ut.get(b).programs;O!==void 0&&(O.forEach(function(X){q.releaseProgram(X)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,Y,H,pt){O===null&&(O=mt);const Rt=H.isMesh&&H.matrixWorld.determinant()<0,Nt=rd(b,O,X,Y,H);tt.setMaterial(Y,Rt);let Lt=X.index,Xt=1;if(Y.wireframe===!0){if(Lt=M.getWireframeAttribute(X),Lt===void 0)return;Xt=2}const $t=X.drawRange,Vt=X.attributes.position;let le=$t.start*Xt,ye=($t.start+$t.count)*Xt;pt!==null&&(le=Math.max(le,pt.start*Xt),ye=Math.min(ye,(pt.start+pt.count)*Xt)),Lt!==null?(le=Math.max(le,0),ye=Math.min(ye,Lt.count)):Vt!=null&&(le=Math.max(le,0),ye=Math.min(ye,Vt.count));const Ue=ye-le;if(Ue<0||Ue===1/0)return;At.setup(H,Y,Nt,X,Lt);let Pe,Ee=Ct;if(Lt!==null&&(Pe=A.get(Lt),Ee=qt,Ee.setIndex(Pe)),H.isMesh)Y.wireframe===!0?(tt.setLineWidth(Y.wireframeLinewidth*re()),Ee.setMode(D.LINES)):Ee.setMode(D.TRIANGLES);else if(H.isLine){let Wt=Y.linewidth;Wt===void 0&&(Wt=1),tt.setLineWidth(Wt*re()),H.isLineSegments?Ee.setMode(D.LINES):H.isLineLoop?Ee.setMode(D.LINE_LOOP):Ee.setMode(D.LINE_STRIP)}else H.isPoints?Ee.setMode(D.POINTS):H.isSprite&&Ee.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Ee.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Wt=H._multiDrawStarts,Le=H._multiDrawCounts,he=H._multiDrawCount,ln=Lt?A.get(Lt).bytesPerElement:1,is=ut.get(Y).currentProgram.getUniforms();for(let cn=0;cn<he;cn++)is.setValue(D,"_gl_DrawID",cn),Ee.render(Wt[cn]/ln,Le[cn])}else if(H.isInstancedMesh)Ee.renderInstances(le,Ue,H.count);else if(X.isInstancedBufferGeometry){const Wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,Wt);Ee.renderInstances(le,Ue,Le)}else Ee.render(le,Ue)};function Te(b,O,X){b.transparent===!0&&b.side===Fe&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Pr(b,O,X),b.side=Si,b.needsUpdate=!0,Pr(b,O,X),b.side=Fe):Pr(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),p=Ut.get(X),p.init(O),y.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),b!==X&&b.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pt=H.material;if(pt)if(Array.isArray(pt))for(let Rt=0;Rt<pt.length;Rt++){const Nt=pt[Rt];Te(Nt,X,H),Y.add(Nt)}else Te(pt,X,H),Y.add(pt)}),p=y.pop(),Y},this.compileAsync=function(b,O,X=null){const Y=this.compile(b,O,X);return new Promise(H=>{function pt(){if(Y.forEach(function(Rt){ut.get(Rt).currentProgram.isReady()&&Y.delete(Rt)}),Y.size===0){H(b);return}setTimeout(pt,10)}et.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let fe=null;function $n(b){fe&&fe(b)}function Bn(){Ti.stop()}function oc(){Ti.start()}const Ti=new Ru;Ti.setAnimationLoop($n),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(b){fe=b,gt.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},gt.addEventListener("sessionstart",Bn),gt.addEventListener("sessionend",oc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(O),O=gt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,U),p=Ut.get(b,y.length),p.init(O),y.push(p),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(J,Hn,O.reversedDepth),V=this.localClippingEnabled,St=xt.init(this.clippingPlanes,V),m=$.get(b,T.length),m.init(),T.push(m),gt.enabled===!0&&gt.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&Go(pt,O,-1/0,x.sortObjects)}Go(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(lt,vt),Ft=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Ft&&Bt.addToRenderList(m,b),this.info.render.frame++,St===!0&&xt.beginShadows();const X=p.state.shadowsArray;Ot.render(X,b,O),St===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(p.setupLights(),O.isArrayCamera){const pt=O.cameras;if(H.length>0)for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){const Lt=pt[Rt];lc(Y,H,b,Lt)}Ft&&Bt.render(b);for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){const Lt=pt[Rt];ac(m,b,Lt,Lt.viewport)}}else H.length>0&&lc(Y,H,b,O),Ft&&Bt.render(b),ac(m,b,O);U!==null&&I===0&&(yt.updateMultisampleRenderTarget(U),yt.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(x,b,O),At.resetDefaultState(),E=-1,g=null,y.pop(),y.length>0?(p=y[y.length-1],St===!0&&xt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Go(b,O,X,Y){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){Y&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const Rt=B.update(b),Nt=b.material;Nt.visible&&m.push(b,Rt,Nt,X,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Rt=B.update(b),Nt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),wt.copy(Rt.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(Nt)){const Lt=Rt.groups;for(let Xt=0,$t=Lt.length;Xt<$t;Xt++){const Vt=Lt[Xt],le=Nt[Vt.materialIndex];le&&le.visible&&m.push(b,Rt,le,X,wt.z,Vt)}}else Nt.visible&&m.push(b,Rt,Nt,X,wt.z,null)}}const pt=b.children;for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++)Go(pt[Rt],O,X,Y)}function ac(b,O,X,Y){const H=b.opaque,pt=b.transmissive,Rt=b.transparent;p.setupLightsView(X),St===!0&&xt.setGlobalState(x.clippingPlanes,X),Y&&tt.viewport(w.copy(Y)),H.length>0&&Cr(H,O,X),pt.length>0&&Cr(pt,O,X),Rt.length>0&&Cr(Rt,O,X),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function lc(b,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ei(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Bs:Xn,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const pt=p.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||w;pt.setSize(Rt.z*x.transmissionResolutionScale,Rt.w*x.transmissionResolutionScale);const Nt=x.getRenderTarget(),Lt=x.getActiveCubeFace(),Xt=x.getActiveMipmapLevel();x.setRenderTarget(pt),x.getClearColor(G),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&Bt.render(X);const $t=x.toneMapping;x.toneMapping=yi;const Vt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),St===!0&&xt.setGlobalState(x.clippingPlanes,Y),Cr(b,X,Y),yt.updateMultisampleRenderTarget(pt),yt.updateRenderTargetMipmap(pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let ye=0,Ue=O.length;ye<Ue;ye++){const Pe=O[ye],Ee=Pe.object,Wt=Pe.geometry,Le=Pe.material,he=Pe.group;if(Le.side===Fe&&Ee.layers.test(Y.layers)){const ln=Le.side;Le.side=tn,Le.needsUpdate=!0,cc(Ee,X,Y,Wt,Le,he),Le.side=ln,Le.needsUpdate=!0,le=!0}}le===!0&&(yt.updateMultisampleRenderTarget(pt),yt.updateRenderTargetMipmap(pt))}x.setRenderTarget(Nt,Lt,Xt),x.setClearColor(G,F),Vt!==void 0&&(Y.viewport=Vt),x.toneMapping=$t}function Cr(b,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let H=0,pt=b.length;H<pt;H++){const Rt=b[H],Nt=Rt.object,Lt=Rt.geometry,Xt=Rt.group;let $t=Rt.material;$t.allowOverride===!0&&Y!==null&&($t=Y),Nt.layers.test(X.layers)&&cc(Nt,O,X,Lt,$t,Xt)}}function cc(b,O,X,Y,H,pt){b.onBeforeRender(x,O,X,Y,H,pt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(x,O,X,Y,b,pt),H.transparent===!0&&H.side===Fe&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,x.renderBufferDirect(X,O,Y,H,b,pt),H.side=Si,H.needsUpdate=!0,x.renderBufferDirect(X,O,Y,H,b,pt),H.side=Fe):x.renderBufferDirect(X,O,Y,H,b,pt),b.onAfterRender(x,O,X,Y,H,pt)}function Pr(b,O,X){O.isScene!==!0&&(O=mt);const Y=ut.get(b),H=p.state.lights,pt=p.state.shadowsArray,Rt=H.state.version,Nt=q.getParameters(b,H.state,pt,O,X),Lt=q.getProgramCacheKey(Nt);let Xt=Y.programs;Y.environment=b.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(b.isMeshStandardMaterial?Yt:Zt).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",st),Xt=new Map,Y.programs=Xt);let $t=Xt.get(Lt);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===Rt)return uc(b,Nt),$t}else Nt.uniforms=q.getUniforms(b),b.onBeforeCompile(Nt,x),$t=q.acquireProgram(Nt,Lt),Xt.set(Lt,$t),Y.uniforms=Nt.uniforms;const Vt=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=xt.uniform),uc(b,Nt),Y.needsLights=ad(b),Y.lightsStateVersion=Rt,Y.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function hc(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=po.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function uc(b,O){const X=ut.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function rd(b,O,X,Y,H){O.isScene!==!0&&(O=mt),yt.resetTextureUnits();const pt=O.fog,Rt=Y.isMeshStandardMaterial?O.environment:null,Nt=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ds,Lt=(Y.isMeshStandardMaterial?Yt:Zt).get(Y.envMap||Rt),Xt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,ye=!!X.morphAttributes.color;let Ue=yi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ue=x.toneMapping);const Pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=Pe!==void 0?Pe.length:0,Wt=ut.get(Y),Le=p.state.lights;if(St===!0&&(V===!0||b!==g)){const je=b===g&&Y.id===E;xt.setState(Y,b,je)}let he=!1;Y.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Le.state.version||Wt.outputColorSpace!==Nt||H.isBatchedMesh&&Wt.batching===!1||!H.isBatchedMesh&&Wt.batching===!0||H.isBatchedMesh&&Wt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Wt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Wt.instancing===!1||!H.isInstancedMesh&&Wt.instancing===!0||H.isSkinnedMesh&&Wt.skinning===!1||!H.isSkinnedMesh&&Wt.skinning===!0||H.isInstancedMesh&&Wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Wt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Wt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Wt.instancingMorph===!1&&H.morphTexture!==null||Wt.envMap!==Lt||Y.fog===!0&&Wt.fog!==pt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==xt.numPlanes||Wt.numIntersection!==xt.numIntersection)||Wt.vertexAlphas!==Xt||Wt.vertexTangents!==$t||Wt.morphTargets!==Vt||Wt.morphNormals!==le||Wt.morphColors!==ye||Wt.toneMapping!==Ue||Wt.morphTargetsCount!==Ee)&&(he=!0):(he=!0,Wt.__version=Y.version);let ln=Wt.currentProgram;he===!0&&(ln=Pr(Y,O,H));let is=!1,cn=!1,Gs=!1;const Ie=ln.getUniforms(),mn=Wt.uniforms;if(tt.useProgram(ln.program)&&(is=!0,cn=!0,Gs=!0),Y.id!==E&&(E=Y.id,cn=!0),is||g!==b){tt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ie.setValue(D,"projectionMatrix",b.projectionMatrix),Ie.setValue(D,"viewMatrix",b.matrixWorldInverse);const rn=Ie.map.cameraPosition;rn!==void 0&&rn.setValue(D,it.setFromMatrixPosition(b.matrixWorld)),Q.logarithmicDepthBuffer&&Ie.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ie.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),g!==b&&(g=b,cn=!0,Gs=!0)}if(H.isSkinnedMesh){Ie.setOptional(D,H,"bindMatrix"),Ie.setOptional(D,H,"bindMatrixInverse");const je=H.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Ie.setValue(D,"boneTexture",je.boneTexture,yt))}H.isBatchedMesh&&(Ie.setOptional(D,H,"batchingTexture"),Ie.setValue(D,"batchingTexture",H._matricesTexture,yt),Ie.setOptional(D,H,"batchingIdTexture"),Ie.setValue(D,"batchingIdTexture",H._indirectTexture,yt),Ie.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Ie.setValue(D,"batchingColorTexture",H._colorsTexture,yt));const gn=X.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&dt.update(H,X,ln),(cn||Wt.receiveShadow!==H.receiveShadow)&&(Wt.receiveShadow=H.receiveShadow,Ie.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mn.envMap.value=Lt,mn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),cn&&(Ie.setValue(D,"toneMappingExposure",x.toneMappingExposure),Wt.needsLights&&od(mn,Gs),pt&&Y.fog===!0&&ot.refreshFogUniforms(mn,pt),ot.refreshMaterialUniforms(mn,Y,W,K,p.state.transmissionRenderTarget[b.id]),po.upload(D,hc(Wt),mn,yt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(po.upload(D,hc(Wt),mn,yt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ie.setValue(D,"center",H.center),Ie.setValue(D,"modelViewMatrix",H.modelViewMatrix),Ie.setValue(D,"normalMatrix",H.normalMatrix),Ie.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const je=Y.uniformsGroups;for(let rn=0,Wo=je.length;rn<Wo;rn++){const Ai=je[rn];te.update(Ai,ln),te.bind(Ai,ln)}}return ln}function od(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function ad(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,X){const Y=ut.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ut.get(b.texture).__webglTexture=O,ut.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const X=ut.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const ld=D.createFramebuffer();this.setRenderTarget=function(b,O=0,X=0){U=b,C=O,I=X;let Y=!0,H=null,pt=!1,Rt=!1;if(b){const Lt=ut.get(b);if(Lt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Lt.__webglFramebuffer===void 0)yt.setupRenderTarget(b);else if(Lt.__hasExternalTextures)yt.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Vt=b.depthTexture;if(Lt.__boundDepthTexture!==Vt){if(Vt!==null&&ut.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(b)}}const Xt=b.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);const $t=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[O])?H=$t[O][X]:H=$t[O],pt=!0):b.samples>0&&yt.useMultisampledRTT(b)===!1?H=ut.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?H=$t[X]:H=$t,w.copy(b.viewport),L.copy(b.scissor),P=b.scissorTest}else w.copy(_t).multiplyScalar(W).floor(),L.copy(Ht).multiplyScalar(W).floor(),P=k;if(X!==0&&(H=ld),tt.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&tt.drawBuffers(b,H),tt.viewport(w),tt.scissor(L),tt.setScissorTest(P),pt){const Lt=ut.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Lt.__webglTexture,X)}else if(Rt){const Lt=O;for(let Xt=0;Xt<b.textures.length;Xt++){const $t=ut.get(b.textures[Xt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xt,$t.__webglTexture,X,Lt)}}else if(b!==null&&X!==0){const Lt=ut.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(b,O,X,Y,H,pt,Rt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){tt.bindFramebuffer(D.FRAMEBUFFER,Lt);try{const Xt=b.textures[Nt],$t=Xt.format,Vt=Xt.type;if(!Q.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Y&&X>=0&&X<=b.height-H&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Nt),D.readPixels(O,X,Y,H,kt.convert($t),kt.convert(Vt),pt))}finally{const Xt=U!==null?ut.get(U).__webglFramebuffer:null;tt.bindFramebuffer(D.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,Y,H,pt,Rt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt)if(O>=0&&O<=b.width-Y&&X>=0&&X<=b.height-H){tt.bindFramebuffer(D.FRAMEBUFFER,Lt);const Xt=b.textures[Nt],$t=Xt.format,Vt=Xt.type;if(!Q.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,le),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Nt),D.readPixels(O,X,Y,H,kt.convert($t),kt.convert(Vt),0);const ye=U!==null?ut.get(U).__webglFramebuffer:null;tt.bindFramebuffer(D.FRAMEBUFFER,ye);const Ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await pf(D,Ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(le),D.deleteSync(Ue),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){const Y=Math.pow(2,-X),H=Math.floor(b.image.width*Y),pt=Math.floor(b.image.height*Y),Rt=O!==null?O.x:0,Nt=O!==null?O.y:0;yt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Rt,Nt,H,pt),tt.unbindTexture()};const cd=D.createFramebuffer(),hd=D.createFramebuffer();this.copyTextureToTexture=function(b,O,X=null,Y=null,H=0,pt=null){pt===null&&(H!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=H,H=0):pt=0);let Rt,Nt,Lt,Xt,$t,Vt,le,ye,Ue;const Pe=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(X!==null)Rt=X.max.x-X.min.x,Nt=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Xt=X.min.x,$t=X.min.y,Vt=X.isBox3?X.min.z:0;else{const gn=Math.pow(2,-H);Rt=Math.floor(Pe.width*gn),Nt=Math.floor(Pe.height*gn),b.isDataArrayTexture?Lt=Pe.depth:b.isData3DTexture?Lt=Math.floor(Pe.depth*gn):Lt=1,Xt=0,$t=0,Vt=0}Y!==null?(le=Y.x,ye=Y.y,Ue=Y.z):(le=0,ye=0,Ue=0);const Ee=kt.convert(O.format),Wt=kt.convert(O.type);let Le;O.isData3DTexture?(yt.setTexture3D(O,0),Le=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(yt.setTexture2DArray(O,0),Le=D.TEXTURE_2D_ARRAY):(yt.setTexture2D(O,0),Le=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const he=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),is=D.getParameter(D.UNPACK_SKIP_PIXELS),cn=D.getParameter(D.UNPACK_SKIP_ROWS),Gs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt);const Ie=b.isDataArrayTexture||b.isData3DTexture,mn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const gn=ut.get(b),je=ut.get(O),rn=ut.get(gn.__renderTarget),Wo=ut.get(je.__renderTarget);tt.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let Ai=0;Ai<Lt;Ai++)Ie&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,H,Vt+Ai),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(O).__webglTexture,pt,Ue+Ai)),D.blitFramebuffer(Xt,$t,Rt,Nt,le,ye,Rt,Nt,D.DEPTH_BUFFER_BIT,D.NEAREST);tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||ut.has(b)){const gn=ut.get(b),je=ut.get(O);tt.bindFramebuffer(D.READ_FRAMEBUFFER,cd),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,hd);for(let rn=0;rn<Lt;rn++)Ie?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,H,Vt+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,H),mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,pt,Ue+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,pt),H!==0?D.blitFramebuffer(Xt,$t,Rt,Nt,le,ye,Rt,Nt,D.COLOR_BUFFER_BIT,D.NEAREST):mn?D.copyTexSubImage3D(Le,pt,le,ye,Ue+rn,Xt,$t,Rt,Nt):D.copyTexSubImage2D(Le,pt,le,ye,Xt,$t,Rt,Nt);tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Le,pt,le,ye,Ue,Rt,Nt,Lt,Ee,Wt,Pe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,pt,le,ye,Ue,Rt,Nt,Lt,Ee,Pe.data):D.texSubImage3D(Le,pt,le,ye,Ue,Rt,Nt,Lt,Ee,Wt,Pe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pt,le,ye,Rt,Nt,Ee,Wt,Pe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pt,le,ye,Pe.width,Pe.height,Ee,Pe.data):D.texSubImage2D(D.TEXTURE_2D,pt,le,ye,Rt,Nt,Ee,Wt,Pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,he),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,is),D.pixelStorei(D.UNPACK_SKIP_ROWS,cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gs),pt===0&&O.generateMipmaps&&D.generateMipmap(Le),tt.unbindTexture()},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&yt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?yt.setTextureCube(b,0):b.isData3DTexture?yt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?yt.setTexture2DArray(b,0):yt.setTexture2D(b,0),tt.unbindTexture()},this.resetState=function(){C=0,I=0,U=null,tt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const p1=[[-19.45,0,-5.12,.014,20],[-19.41,2.59,-5.15,-.006,20],[-19.49,5.18,-5.13,-.005,20],[-13.3,0,-5.12,3.121,20],[3.7,0,-5.12,3.125,20],[3.73,2.59,-5.13,-.013,20],[13.53,0,-5.12,-.009,20],[13.56,2.59,-5.13,0,20],[-19.45,0,2.08,0,20],[-13.35,0,2.08,.001,20],[.8,0,2.08,.019,40],[.76,2.59,2.09,-.009,40],[3.82,5.18,2.05,.012,20],[12.3,0,2.08,.003,20],[12.31,2.59,2.05,-.011,20],[-21.1,0,9.92,.002,20],[-13.6,0,9.92,-.004,20],[-13.59,2.59,9.92,-.003,20],[-13.61,5.18,9.93,-.004,20],[-21.6,0,12.42,-0,20],[-21.59,2.59,12.42,0,20],[-21.6,5.18,12.42,-.001,20],[-15.4,0,12.42,-.003,20],[4.43,0,12.42,0,20],[13.53,0,12.42,0,20],[-16.4,0,20.12,-.017,40],[-16.36,2.59,20.08,.008,40],[-2.25,0,20.12,.011,20],[3.85,0,20.12,-.017,20],[3.86,2.59,20.14,-.011,20],[13.53,0,20.12,.015,20],[13.5,2.59,20.09,.012,20],[13.49,5.18,20.13,.008,20],[-16.4,0,22.62,-.008,41],[-16.39,2.9,22.61,-.013,40],[-16.43,5.49,22.65,.013,40],[.8,0,22.62,-.012,40],[.8,2.59,22.64,.007,41],[13.53,0,22.62,-.021,20],[-22.6,0,-19.2,1.55,40],[-22.59,2.59,-19.18,1.567,40],[-30.2,0,-18.4,.35,20],[-31.2,0,24.7,-.004,40],[-31.16,2.59,24.68,.01,40],[23.2,0,-28.6,-.013,20],[23.23,2.59,-28.58,.01,20],[23,0,-25.95,-.018,20]],m1=[["crate_wood",14.3,2.59,11.75,.1],["light_mast",-23.4,0,.5,0],["light_mast",-23.4,0,21.4,0],["light_mast",17,0,-8.7,0],["light_mast",17,0,18.6,0],["light_mast",-20.6,0,-11.6,0],["barrel",-19.6,0,3.85,0],["barrel",-18.9,0,3.95,.7],["pallet_stack",-17.4,0,4,.08],["crate_stack",-14.3,0,8.05,.04],["ibc_tote",-12.95,0,7.95,-.05],["forklift",-8.6,0,4.5,-.22],["pallet",-7.21,.54,4.81,-.22],["crate_wood",-7.21,.68,4.81,-.17],["jersey_barrier",-2.9,0,5.3,.12],["jersey_barrier",5.6,0,5,-.1],["ibc_tote",5.9,0,8.9,.1],["ibc_tote",5.95,0,10.05,-.05],["barrel",4.9,0,9.7,0],["crate_stack",-3.9,0,10.5,.1],["crate_wood",-3.8,0,9.35,-.2],["pallet_stack",-4.4,0,11.8,.02],["cable_reel",4.2,0,10.5,.3],["jersey_barrier",11.6,0,3.95,.03],["ibc_tote",15.2,0,10.2,.1],["traffic_cone",.2,0,6.3,0],["traffic_cone",2.9,0,6.4,0],["traffic_cone",2.9,0,8.8,0],["traffic_cone",.1,0,8.7,0],["sign_post",-4.8,0,3.72,1.571],["pallet_stack",-20.6,0,-.1,.2],["tire_stack",-9.6,0,.2,0],["barrel",4.5,0,.35,0],["barrel",5.2,0,.3,.4],["jersey_barrier",12.2,0,.4,.03],["crate_wood",11.2,0,-3.3,.3],["jersey_barrier",-.9,0,-7.5,.1],["pallet_stack",1.2,0,-9.9,.1],["barrel",2.2,0,-10.3,0],["cable_reel",-18.2,0,-8,.2],["traffic_cone",-6.5,0,-9.9,0],["traffic_cone",-.5,0,-9.9,0],["crate_stack",-10.95,0,18.25,.06],["barrel",-3,0,18.35,0],["tire_stack",10.95,0,18.3,0],["ibc_tote",12,0,18.25,0],["pallet_stack",-12.3,0,18.2,.1],["jersey_barrier",.6,0,15.5,.12],["tire_stack",-8,0,26.9,0],["pallet_stack",8.7,0,27,.3],["crate_wood",-2,0,27,.2],["barrel",11.2,0,27.1,0],["cable_reel",-34.6,0,-22.5,1],["tire_stack",-25.4,0,-26.9,0],["crate_stack",-34.8,0,-13.5,.2],["barrel",-33.6,0,-13,0],["generator",-34.2,0,14.2,.15],["floodlight_stand",-31.4,0,12.7,.55],["tire_stack",-36.6,0,17.2,0],["tire_stack",-36.5,0,18.3,.6],["pallet_stack",-27.8,0,16.6,.4],["crate_wood",-28.6,0,20.6,.1],["ibc_tote",-26.6,0,21.2,0],["jersey_barrier",-34.7,0,3.75,1.651],["jersey_barrier",-33.3,0,8.3,1.511],["jersey_barrier",-30.6,0,10.4,.03],["jersey_barrier",-27.3,0,1.45,.05],["jersey_barrier",-32.2,0,1.45,-.04],["sign_post",-33.2,0,9.6,1.571],["sign_post",-25.3,0,1.1,1.571],["sign_post",-36.6,0,-1.6,1.571],["traffic_cone",-34.6,0,5.6,0],["traffic_cone",-28.3,0,2,0],["traffic_cone",-33.2,0,6.5,0],["traffic_cone",-26.6,0,9.8,0],["traffic_cone",-31.8,0,9.9,0],["light_mast",-27.6,0,-.9,0],["light_mast",-36.3,0,12.4,0],["barrel",-33.9,0,2,0],["pallet_stack",-36.4,0,10.3,.2],["pallet_stack",0,.03,-26.9,.1],["crate_stack",2.9,.03,-15.9,.12],["crate_wood",4.15,.03,-16.3,-.25],["pallet_stack",2,.03,-17.3,1.45],["ibc_tote",6.9,.03,-19.6,.1],["barrel",7.9,.03,-18.5,0],["barrel",6,.03,-18.4,.6],["ibc_tote",-7.6,.03,-16.4,-.08],["barrel",-8.6,.03,-15.3,0],["barrel",-7.9,.03,-15,.9],["forklift",8.3,.03,-13.9,2.75],["tire_stack",-15,.03,-15.6,0],["tire_stack",-14.9,.03,-16.6,.4],["crate_wood",-12.4,.03,-26.9,-.1],["barrel",-10.9,.03,-27,0],["crate_wood",-14.7,.03,-24.6,.3],["pallet",10.6,.03,-13.6,.2],["traffic_cone",-6.6,.03,-12.2,0],["traffic_cone",-.4,.03,-12.3,0],["jersey_barrier",20.5,0,-4.7,1.691],["jersey_barrier",25.3,0,3.1,-.2],["barrel",26.5,0,-1.7,0],["barrel",26.9,0,-1.05,.5],["traffic_cone",22,0,-1.9,0],["traffic_cone",24.2,0,1.7,0],["generator",15,0,-26.6,.06],["floodlight_stand",16.4,0,-23.6,.3],["tire_stack",24.1,0,-9.5,0],["tire_stack",25.05,0,-9.6,.5],["cable_reel",14.3,0,-12.9,.4],["cable_reel",15.6,0,-14.3,1.9],["pallet_stack",20.3,0,-9.3,.1],["crate_wood",19.9,0,-22.6,.3],["barrel",12.75,0,-23.3,0],["barrel",12.9,0,-24.1,0],["light_mast",26.6,0,-28.7,0],["light_mast",26.6,0,26.7,0],["crate_stack",26.4,0,23.6,.2],["ibc_tote",22.6,0,26.3,.05],["pallet_stack",24,0,26.2,.2],["barrel",22.6,0,20.3,0],["barrel",23.4,0,20.4,0],["traffic_cone",28.2,0,18.2,0],["traffic_cone",28.3,0,21.8,0]];function Kl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Oe;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let _=0;_<f.count;++_)h.push(f.getX(_)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Sh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);const _=Sh(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Sh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new nn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let _=0;_<e;_++){const v=u.getComponent(d,_);a.setComponent(d+h,_,v)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}class Ho extends rt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new on;const n=this,s=e.color!==void 0?new Qt(e.color):new Qt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||Ho.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new gi,h=new S,d=new S,f=new S,_=new ce,v=new S(0,0,-1),m=new ge,p=new S,T=new S,y=new ge,x=new ce,R=this.camera,C=new Ei(r,o,{samples:c,type:Bs}),I=new bn({name:l.name!==void 0?l.name:"unspecified",uniforms:uu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});I.uniforms.tDiffuse.value=C.texture,I.uniforms.color.value=s,I.uniforms.textureMatrix.value=x,this.material=I,this.onBeforeRender=function(U,E,g){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(g.matrixWorld),_.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(_),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),_.extractRotation(g.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(f),T.subVectors(d,v),T.reflect(h).negate(),T.add(d),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(_),R.up.reflect(h),R.lookAt(T),R.far=g.far,R.updateMatrixWorld(),R.projectionMatrix.copy(g.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(R.projectionMatrix),x.multiply(R.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const L=R.projectionMatrix;y.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],y.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],y.z=-1,y.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(y)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;const P=U.getRenderTarget(),G=U.xr.enabled,F=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(C),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(E,R),U.xr.enabled=G,U.shadowMap.autoUpdate=F,U.setRenderTarget(P);const z=g.viewport;z!==void 0&&U.state.viewport(z),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()}}}Ho.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};let Ml=42811;function g1(){Ml=42811}const ct=()=>(Ml=Ml*1664525+1013904223>>>0)/4294967296,jl=i=>i[Math.floor(ct()*i.length)],j=(i,t,e)=>new S(i,t,e),_1=new On(1,1,1),Gt=(i,t=.78,e=.18,n={})=>new Se({color:i,roughness:t,metalness:e,...n});function v1(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);e.addColorStop(0,"#18262e"),e.addColorStop(.36,"#394047"),e.addColorStop(.47,"#928474"),e.addColorStop(.52,"#514c46"),e.addColorStop(.68,"#18252a"),e.addColorStop(1,"#101a20"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);let n=t.createRadialGradient(500,234,5,500,234,255);n.addColorStop(0,"rgba(255,226,183,.85)"),n.addColorStop(.2,"rgba(216,155,93,.48)"),n.addColorStop(1,"rgba(171,117,75,0)"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let r=0;r<280;r++){const o=ct()*1024,a=105+ct()*152,l=18+ct()*170,c=8+ct()*32,u=t.createRadialGradient(o,a,1,o,a,l);u.addColorStop(0,"rgba(20,27,33,.18)"),u.addColorStop(1,"rgba(20,27,33,0)"),t.save(),t.scale(1,c/l),t.fillStyle=u,t.fillRect(o-l,(a-l)*l/c,l*2,l*2),t.restore()}const s=new Xe(i);return s.mapping=go,s.colorSpace=xe,s}function x1(i){if(i)return null;const t={name:"Rain-slick asphalt reflections",uniforms:{color:{value:new Qt(5331550)},tDiffuse:{value:null},textureMatrix:{value:new ce},time:{value:0}},vertexShader:`
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
 }`},e=new Ho(new Ce(78,13.8),{shader:t,textureWidth:480,textureHeight:360,multisample:0,clipBias:.003});return e.rotation.x=-Math.PI/2,e.position.set(-7,.018,6),e.material.transparent=!0,e.material.depthWrite=!1,e.renderOrder=1,e}const Vn=Gt(2831419,.49,.72),We=Gt(1252129,.62,.65),Re=Gt(6582906,.42,.72),Du=Gt(1053462,.9,.04),y1=Gt(2240052,.32,.68),Uu=Gt(15049804,.56,.45),Nu=new ae({color:16758635}),Fu=Gt(7420715,.92,.12),Ou=Gt(5656382,.88,.08),M1=Gt(5721406,.55,.52),Bu={time:{value:0}},S1=new bn({uniforms:Bu,transparent:!0,depthWrite:!1,side:Fe,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;varying vec2 vUv;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
 void main(){vec2 p=vUv*2.-1.;float distort=(noise(vUv*9.)-.5)*.23;
 float edge=1.-smoothstep(.56,.95,length(p)+distort);
 float fine=noise(vUv*37.+vec2(time*.028,0.));
 vec3 base=vec3(.13,.15,.15);
 float shimmer=pow(max(0.,sin(vUv.y*30.+vUv.x*2.8+time*.3)),23.)*.025;
 vec3 water=base+vec3(.18,.12,.06)*shimmer+vec3(.025)*fine;
 gl_FragColor=vec4(water,edge*(.30+.08*fine));
 }`}),E1=new ae({color:11186859,transparent:!0,opacity:.14,depthWrite:!1});function at(i,t,e,n,s){const r=new rt(_1,n);return r.position.set(...e),r.scale.set(...t),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Dt(i,t,e,n,s,r=6){const o=t.clone().add(e).multiplyScalar(.5),a=e.clone().sub(t),l=new rt(new we(n,n,a.length(),r),s);return l.position.copy(o),l.quaternion.setFromUnitVectors(j(0,1,0),a.normalize()),l.castShadow=!0,i.add(l),l}function Dn(i,t,e=256){const n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(s.fillStyle=t,s.fillRect(0,0,e,e),i==="ground"){for(let o=0;o<31e3;o++){const a=Math.floor(35+ct()*80);s.fillStyle=`rgba(${a},${a+7},${a+9},${ct()*.22})`,s.fillRect(ct()*e,ct()*e,1+ct()*3,1+ct()*2)}for(let o=0;o<80;o++){s.strokeStyle=`rgba(10,15,18,${.06+ct()*.2})`,s.lineWidth=.25+ct()*1.7,s.beginPath();let a=ct()*e,l=ct()*e;s.moveTo(a,l),s.lineTo(a+ct()*24,l+ct()*14),s.stroke()}for(let o=0;o<95;o++){const a=ct()*e,l=ct()*e,c=(.008+ct()*.19)*e,h=ct()<.68?`rgba(5,11,14,${.04+ct()*.3})`:`rgba(121,130,122,${.015+ct()*.12})`,d=s.createRadialGradient(a,l,0,a,l,c);d.addColorStop(0,h),d.addColorStop(1,"rgba(10,12,13,0)"),s.fillStyle=d,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<560;o++){const a=ct()*e,l=ct()*e;s.fillStyle=ct()<.6?`rgba(8,12,14,${.12+ct()*.18})`:`rgba(167,179,176,${.03+ct()*.12})`,s.fillRect(a,l,1.2+ct()*4,1+ct()*3)}for(let o=0;o<24;o++){const a=ct()*e,l=ct()*e;s.beginPath(),s.strokeStyle=`rgba(11,15,18,${.1+ct()*.29})`,s.lineWidth=.4+ct()*1.4,s.moveTo(a,l);for(let c=1;c<12;c++)s.lineTo(a+Math.sin(c*.7+o)*c*.84,l+c*(1.5+ct()*1.4));s.stroke()}}else{for(let o=0;o<3100;o++){const a=i==="metal"?"118,71,43":i==="warning"?"22,22,20":"19,23,26";s.fillStyle=`rgba(${a},${ct()*.24})`;let l=ct()*e,c=ct()*e;s.fillRect(l,c,1+ct()*5,1+ct()*7)}for(let o=0;o<110;o++){const a=ct()*e,l=ct()*e;s.fillStyle=`rgba(8,13,16,${ct()*.18})`,s.fillRect(a,l,1+ct()*1,4+ct()*65)}for(let o=0;o<52;o++){s.strokeStyle=`rgba(197,202,183,${ct()*.12})`,s.lineWidth=.3+ct()*.7,s.beginPath();let a=ct()*e,l=ct()*e;s.moveTo(a,l),s.lineTo(a+1+ct()*12,l),s.stroke()}for(let o=0;o<140;o++){const a=ct()*e,l=ct()*e,c=3+ct()*34,u=s.createRadialGradient(a,l,0,a,l,c),h=ct()>.36?"120,68,44":"12,25,30";u.addColorStop(0,`rgba(${h},${.05+ct()*.22})`),u.addColorStop(1,`rgba(${h},0)`),s.fillStyle=u,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<70;o++){const a=ct()*e,l=ct()*e,c=10+ct()*110,u=s.createLinearGradient(0,l,0,l+c);u.addColorStop(0,`rgba(97,49,29,${.09+ct()*.3})`),u.addColorStop(1,"rgba(97,49,29,0)"),s.fillStyle=u,s.fillRect(a,l,.8+ct()*3,c)}for(let o=0;o<150;o++){const a=ct()*e,l=ct()*e;s.strokeStyle=`rgba(192,186,171,${.06+ct()*.26})`,s.lineWidth=.3+ct()*.75,s.beginPath(),s.moveTo(a,l),s.lineTo(a+3+ct()*42,l+(ct()-.5)*1.8),s.stroke()}}const r=new Xe(n);return r.colorSpace=xe,r.wrapS=r.wrapT=Wn,r.anisotropy=4,r}function b1(){const i=document.createElement("canvas");i.width=256,i.height=512;const t=i.getContext("2d");t.clearRect(0,0,256,512);const e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"rgba(171,174,163,.15)"),e.addColorStop(.09,"rgba(185,189,176,.76)"),e.addColorStop(.82,"rgba(187,190,181,.73)"),e.addColorStop(1,"rgba(175,178,164,.09)"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let s=0;s<1700;s++){const r=ct()*256,o=ct()*512;t.clearRect(r,o,.3+ct()*6,.5+ct()*15)}for(let s=0;s<160;s++){const r=ct()*256,o=ct()*512;t.clearRect(r,o,2+ct()*30,.8+ct()*3)}for(let s=0;s<25;s++){const r=ct()*256,o=ct()*512,a=10+ct()*50;t.save(),t.globalCompositeOperation="destination-out";const l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(0,0,0,.8)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(r-a,o-a,a*2,a*2),t.restore()}const n=new Xe(i);return n.colorSpace=xe,n.anisotropy=8,new ae({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function Vs(i,t,e="#deded5",n="#29353a"){const s=document.createElement("canvas");s.width=512,s.height=172;const r=s.getContext("2d");r.fillStyle=n,r.fillRect(0,0,512,172),r.strokeStyle="rgba(255,255,255,.45)",r.lineWidth=3,r.strokeRect(9,9,494,154),r.fillStyle=e,r.font="900 70px Impact,Arial Narrow,sans-serif",r.fillText(i,28,93),r.font="600 23px monospace",r.fillText(t,30,137);const o=new Xe(s);return o.colorSpace=xe,o}function wo(i,t,e,n=.34){const s=[],r=[],o=[],a=Math.max(6,Math.round(i/n));for(let c=0;c<=a*4;c++){const u=c/(a*4),h=c%4,f=e*(h===1||h===2?1:0);if(s.push(u*i-i/2,0,f,u*i-i/2,t,f),r.push(u*3,0,u*3,1),c<a*4){const _=c*2;o.push(_,_+2,_+1,_+1,_+2,_+3)}}const l=new Oe;return l.setAttribute("position",new de(s,3)),l.setAttribute("uv",new de(r,2)),l.setIndex(o),l.computeVertexNormals(),l}const zu=[["#435c61",4942446],["#a65d3e",11297344],["#515b5d",5793132],["#706a55",8288099],["#354957",3755613],["#5f5048",7758165]],ku=zu.map(([i])=>{const t=Dn("metal",i,512);return Gt(13752534,.62,.23,{map:t,bumpMap:t,bumpScale:.015})}),Eh=new Map,bh=new Map;function w1(i,t){const e=`${i}:${Math.abs(t)%8}`,n=bh.get(e);if(n)return n;const s=Vs(`C-${i+1}`,`LOAD ${Math.abs(t*17+i*11)%99}`),r=new ae({map:s,transparent:!0,opacity:.56,depthWrite:!1,side:Fe});return bh.set(e,r),r}function T1(i,t){const e=`${i}:${t%4}`,n=Eh.get(e);if(n)return n;const s=document.createElement("canvas");s.width=768,s.height=256;const r=s.getContext("2d");r.clearRect(0,0,768,256);const o=["NORTHLINE","OCEANSTAR","BLACKWATER","BRIDGEPORT","CIRRUS","ATLANTIC"][i%6];let a=(i+1)*15289+t%4*9013;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296);r.fillStyle="rgba(220,228,220,.55)",r.lineWidth=5,r.beginPath(),r.moveTo(37,77),r.lineTo(109,31),r.lineTo(166,77),r.lineTo(109,124),r.closePath(),r.strokeStyle="rgba(216,224,221,.49)",r.stroke(),r.beginPath(),r.moveTo(61,83),r.lineTo(102,52),r.lineTo(146,83),r.stroke(),r.font="700 69px Impact,Arial Narrow,Arial",r.letterSpacing="4px",r.fillText(o,194,100,545),r.font="500 24px monospace",r.letterSpacing="1px",r.fillText(`ISO 22G1   ${String((i*57091+t*37)%9999999).padStart(7,"0")}`,195,146,510),r.font="700 27px monospace",r.fillText("MAX GROSS 30 480 KG   /   67 200 LB",196,185,500),r.globalCompositeOperation="destination-out";for(let h=0;h<2500;h++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.12+l()*.72})`,r.fillRect(d,f,1+l()*9,.3+l()*4)}for(let h=0;h<42;h++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.3+l()*.6})`,r.fillRect(d,f,7+l()*58,.4+l()*1.5)}const c=new Xe(s);c.colorSpace=xe,c.anisotropy=8;const u=new ae({map:c,transparent:!0,opacity:.78,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1});return Eh.set(e,u),u}const A1=(()=>{const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d");let e=874233;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<480;r++){const o=n()*512,a=n()*256,l=10+n()*120,c=t.createLinearGradient(0,a,0,a+l);c.addColorStop(0,`rgba(72,37,21,${.1+n()*.29})`),c.addColorStop(1,"rgba(72,37,21,0)"),t.fillStyle=c,t.fillRect(o,a,1+n()*2.8,l)}const s=new Xe(i);return s.colorSpace=xe,new ae({map:s,transparent:!0,opacity:.85,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1})})();function oo(i,t,e,n,s=0,r=0,o,a=20,l){const c=o??Math.floor(ct()*zu.length),u=ku[c],h=new Kt;h.position.set(e,(l??r*2.72)+.12,n),h.rotation.y=s,i.add(h);const d=2.7,f=a===41?2.86:2.55,_=a===20?6.06:12.2;at(h,[d,f,_],[0,f/2,0],u);for(let y of[-1,1]){const x=new rt(wo(_-.2,f-.21,y*.067,.3),u);x.rotation.y=y*Math.PI/2,x.position.set(y*(d/2+.015),.12,0),x.castShadow=!0,x.receiveShadow=!0,h.add(x);const R=new rt(new Ce(_-.24,f-.15),A1);if(R.rotation.y=y*Math.PI/2,R.position.set(y*(d/2+.115),f/2,0),h.add(R),ct()<.84){const I=new rt(new Ce(2.25,.75),T1(c,Math.abs(Math.floor(e*11+n*7+r*23))));I.rotation.y=y*Math.PI/2,I.position.set(y*(d/2+.124),1.63,-.25),h.add(I)}const C=new rt(new Ce(.53,.3),w1(c,Math.round(e*4+n*9+r*17)));C.rotation.y=y*Math.PI/2,C.position.set(y*(d/2+.132),.55,_/2-.65),h.add(C)}for(let y of[-1,1]){const x=new rt(wo(d-.12,f-.23,y*.05,.22),u);x.position.set(0,.12,y*(_/2+.022)),y===-1&&(x.rotation.y=Math.PI),h.add(x),at(h,[d+.12,.09,.1],[0,f+.01,y*_/2],We),at(h,[d+.12,.13,.1],[0,.055,y*_/2],We),at(h,[.035,f,.035],[0,f/2,y*(_/2+.09)],Re);for(let R=-1;R<=1;R+=2)at(h,[.065,f-.22,.07],[R*(d/2-.23),f/2,y*(_/2+.12)],Vn);for(let R=-1;R<=1;R+=2)for(let C=0;C<2;C++)at(h,[.12,.17,.06],[R*(d/2-.23),.48+C*1.45,y*(_/2+.165)],Re)}for(let y of[-1,1]){for(let x of[-1,1]){at(h,[.1,f+.14,.12],[y*(d/2-.04),f/2,x*(_/2-.055)],Vn);for(let R of[.08,f+.04])at(h,[.24,.16,.24],[y*(d/2-.04),R,x*(_/2-.05)],Re)}at(h,[.1,.08,_+.16],[y*(d/2-.04),f+.08,0],Vn),at(h,[.11,.11,_+.16],[y*(d/2-.04),.035,0],Vn)}const v=new rt(new Ce(1.45,.49),new ae({map:Vs(jl(["HARBOR","NORTH","MARLIN","SE-04","TIDAL"]),`CARGO  /  ${String(Math.floor(ct()*81e3)).padStart(5,"0")}`),transparent:!0,opacity:.85}));v.position.set(0,1.72,_/2+.082),h.add(v);for(let y=0;y<3;y++)at(h,[.045,.017,.56],[d/2+.092,.62+y*.53,-1.6+y*.9],Fu);const m=Math.abs(Math.sin(s))>.7,p=(m?_:d)/2,T=(m?d:_)/2;t.push({minX:e-p-.2,maxX:e+p+.2,minZ:n-T-.2,maxZ:n+T+.2,height:(l??r*2.72)+f})}function wh(i,t,e,n=1){const s=new Kt;s.position.set(t,0,e),s.scale.setScalar(n),i.add(s);const r=Gt(6125430,.58,.62),o=Gt(10976592,.67,.53);for(let a of[-1,1]){let l=j(a*8.6,0,0),c=j(a*6.2,21,0);Dt(s,l,c,.36,r,8),Dt(s,j(a*8.6,0,1.7),j(a*6.2,21,1.7),.36,r,8);for(let u=3;u<21;u+=3){const h=u/21;Dt(s,j(a*(8.6-2.4*h),u,0),j(a*(8.6-2.4*h),u,1.7),.15,r)}}for(let a of[13,19.8]){Dt(s,j(-6.7,a,.85),j(6.7,a,.85),.24,r,8);for(let l=-6;l<6;l+=2)Dt(s,j(l,a,.85),j(l+2,a+1,.85),.09,r),Dt(s,j(l,a+1,.85),j(l+2,a,.85),.09,r)}for(let a of[-1,1]){Dt(s,j(-19.5,20.9,a*.7),j(19.5,20.9,a*.7),.27,r),Dt(s,j(-19.5,22.25,a*.7),j(19.5,22.25,a*.7),.17,r);for(let l=-19;l<19;l+=2.5)Dt(s,j(l,20.9,a*.7),j(l+2.5,22.25,a*.7),.09,r),Dt(s,j(l,22.25,a*.7),j(l+2.5,20.9,a*.7),.09,r)}at(s,[3.9,2.25,2.2],[6.3,22.5,.1],r),at(s,[2.8,.85,2.5],[6.3,22.1,1.35],We);for(let a=8;a<22;a+=2.8)Dt(s,j(-2.9,a,.4),j(-2.9,a+2.3,.4),.048,o);for(let a of[-1,1])Dt(s,j(-2.7+a*.65,20.6,0),j(-2.7+a*.65,3.5,0),.023,We);at(s,[4.7,.45,1.35],[-2.7,3.4,0],o)}function R1(i,t,e,n=1){const s=new Kt;s.position.set(t,0,e),s.scale.setScalar(n),s.rotation.y=Math.PI/2,i.add(s);const r=Gt(6648178,.72,.57),o=Gt(9079168,.69,.62),a=Gt(2700085,.81,.51),l=7,c=26.8;for(const h of[-1,1]){for(const d of[-1.65,1.65]){Dt(s,j(h*l/2,0,d),j(h*l/2,c,d),.26,r,10);for(let f=2;f<c-1;f+=4.2){const _=j(h*l/2,f,d),v=j(h*l/2,f+4.1,-d);Dt(s,_,v,.094,o)}}for(let d=2;d<=c;d+=4.1)Dt(s,j(h*l/2,d,-1.65),j(h*l/2,d,1.65),.12,r)}for(const h of[-1.65,1.65]){for(let d of[4,14,22,26.8])Dt(s,j(-l/2,d,h),j(l/2,d,h),.16,r);for(let d=-3.25;d<=3;d+=1.35)Dt(s,j(d,26.45,h),j(d+1.15,27.6,h),.11,r),Dt(s,j(d,27.55,h),j(d+1.15,26.45,h),.11,r)}for(const h of[-1.2,1.2]){Dt(s,j(-18.5,26.5,h),j(14,26.5,h),.2,r),Dt(s,j(-16.7,28.1,h),j(12,28.1,h),.15,r);for(let d=-18;d<13;d+=2)Dt(s,j(d,26.45,h),j(d+2,28.1,h),.09,o),Dt(s,j(d,28.1,h),j(d+2,26.45,h),.09,r)}for(let h=-17;h<=13;h+=3.8)Dt(s,j(h,26.5,-1.2),j(h,26.5,1.2),.1,r);for(const h of[-1,1]){Dt(s,j(h*4,1.1,1.45),j(h*4,26.5,1.45),.036,o),Dt(s,j(h*4.48,1.1,1.45),j(h*4.48,26.5,1.45),.036,o);for(let d=1.2;d<26.5;d+=.55)Dt(s,j(h*4,d,1.45),j(h*4.48,d,1.45),.023,o)}at(s,[8.8,.17,4.7],[0,23.8,0],a);for(let h=-4;h<4;h+=.48)at(s,[.07,.08,4.8],[h,23.97,0],o);at(s,[3.2,2.4,2.25],[1.2,29,-.2],r);for(const h of[-1.35,1.05])at(s,[2.8,.72,.09],[1.2,29.13,h],a);for(let h=-1;h<2;h++)at(s,[.68,.42,.14],[1.2+h*.78,29.27,1.19],Gt(9280660,.2,.45,{emissive:2636343,emissiveIntensity:.23}));at(s,[3.1,1.4,2.3],[-1.2,26,0],a);for(const h of[-1.18,1.18])Dt(s,j(-1.2+h,25.2,-.8),j(-1.2+h,8.6,-.8),.024,a),Dt(s,j(-1.2+h,25.2,.8),j(-1.2+h,8.6,.8),.024,a);at(s,[4.7,.68,2.2],[-1.2,8.5,0],o);for(const h of[-1,1])for(const d of[-1,1])Dt(s,j(-1.2+h*2.15,8.3,d*.8),j(-1.2+h*2.15,7,d*.8),.05,a);const u=new rt(new Ce(4.9,.62),new ae({map:Vs("GANTRY 04","BERTH CONTROL  /  07"),transparent:!0}));u.position.set(0,13.4,1.75),s.add(u);for(const h of[1.2,23.2])for(const d of[-1,1])at(s,[.65,.2,.25],[d*3.5,h,1.8],Uu);at(s,[.22,.22,.22],[0,30.36,0],Nu)}const C1=Gt(9670534,.97,0,{map:Dn("ground","#97938b")});function P1(i,t,e,n=0){const s=new Kt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=new ks;r.moveTo(-.58,0),r.lineTo(.58,0),r.lineTo(.52,.28),r.lineTo(.35,.54),r.lineTo(.35,.88),r.lineTo(-.35,.88),r.lineTo(-.35,.54),r.lineTo(-.52,.28),r.closePath();const o=new es(r,{depth:2.5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.022,bevelSegments:1,steps:1});o.rotateY(Math.PI/2);const a=new rt(o,C1);a.position.set(-1.25,0,0),a.castShadow=!0,s.add(a);for(const l of[-1,.4])at(s,[.55,.06,.17],[0,.69,l],Uu)}const L1=Gt(8023639,.94,.03,{map:Dn("paint","#8c8068")}),Hu=Gt(3749934,.97,.04);function Th(i,t,e,n=0){const s=new Kt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=L1,o=Hu;for(const a of[-.42,.42])at(s,[1.12,.11,.14],[0,.13,a],o);for(let a=0;a<6;a++)at(s,[.19,.06,1.12],[-.47+a*.185,.22,0],r);for(const a of[-.45,0,.45])at(s,[.16,.09,.95],[a,.035,0],o)}function I1(i,t,e){const n=new Kt;n.position.set(t,0,e),i.add(n);const s=Gt(1778213,.94,.09);for(const o of[-1,1]){const a=new rt(new we(.57,.57,.082,20),Vn);a.rotation.z=Math.PI/2,a.position.set(o*.28,.58,0),n.add(a);const l=new rt(new sn(.44,.045,8,24),Re);l.rotation.y=Math.PI/2,l.position.set(o*.33,.58,0),n.add(l)}const r=new rt(new we(.31,.31,.6,16),s);r.rotation.z=Math.PI/2,r.position.y=.58,n.add(r);for(let o=0;o<10;o++){const a=o/10*Math.PI*2,l=new rt(new sn(.31+o*.014,.018,6,32),s);l.rotation.y=Math.PI/2,l.position.set(-.25+o*.052,.58,0),l.rotation.x=a*.035,n.add(l)}}const D1=Gt(2106662,.98,.05),Sl=Gt(1054234,.92,.06),U1=new Mp({color:11780802,roughness:.65,metalness:0,transparent:!0,opacity:.8,clearcoat:.05,depthWrite:!0}),Ah=Gt(12223806,.63,.41),si=Gt(9084317,.55,.48);function N1(i){const t=new sn(.43,.13,10,28);for(let e=0;e<4;e++){const n=new rt(t,D1);n.rotation.x=Math.PI/2,n.position.y=.22+e*.25,n.castShadow=!0,i.add(n);const s=new rt(new sn(.285,.03,7,20),Sl);s.rotation.x=Math.PI/2,s.position.y=.25+e*.25,i.add(s);for(let r=0;r<12;r++){const o=r*Math.PI/6,a=at(i,[.11,.025,.08],[Math.cos(o)*.56,.21+e*.25,Math.sin(o)*.56],Sl);a.rotation.y=o}}}function F1(i){at(i,[1.15+.1,.15,1.1+.08],[0,.075,0],Hu),at(i,[1.15,1.25-.18,1.1],[0,.2+(1.25-.18)/2,0],U1),at(i,[.28,.13,.14],[.22,1.3,0],Re);for(const s of[-1.15/2,1.15/2])for(const r of[-1.1/2,1.1/2])Dt(i,j(s,.2,r),j(s,1.35,r),.026,si);for(const s of[.3,.65,1.04,1.3]){for(const r of[-1.15/2,1.15/2])Dt(i,j(r,s,-1.1/2),j(r,s,1.1/2),.023,si);for(const r of[-1.1/2,1.1/2])Dt(i,j(-1.15/2,s,r),j(1.15/2,s,r),.023,si)}for(const s of[-.28,0,.28])for(const r of[-1.1/2,1.1/2])Dt(i,j(s,.2,r),j(s,1.3,r),.018,si)}function O1(i){const t=new Kt;i.add(t),at(t,[1.55,.2,2.75],[0,.31,0],We),at(t,[1.57,.85,1.42],[0,.81,-.67],Ah),at(t,[1.35,.46,1.4],[0,1.22,-.63],Vn);for(const n of[-1,1]){const s=at(t,[.24,.26,.9],[n*.69,.85,-.65],Ah);s.rotation.y=n*.12;for(const r of[-1.02,.86]){const o=new rt(new we(.4,.4,.2,20),Sl);o.rotation.z=Math.PI/2,o.position.set(n*.84,.38,r),o.castShadow=!0,t.add(o);const a=new rt(new we(.2,.2,.21,16),Re);a.rotation.z=Math.PI/2,a.position.copy(o.position),t.add(a)}Dt(t,j(n*.68,.7,-.9),j(n*.68,2.4,-.9),.055,si),Dt(t,j(n*.68,.7,.55),j(n*.68,2.4,.55),.055,si)}at(t,[1.57,.15,1.64],[0,2.42,-.16],We),at(t,[.7,.18,.62],[0,1.12,.25],Du),Dt(t,j(0,1.24,.17),j(0,1.5,.36),.04,Re);const e=new rt(new sn(.19,.035,9,20),We);e.rotation.x=Math.PI/3,e.position.set(0,1.5,.36),t.add(e);for(const n of[-.45,.45])at(t,[.12,2.4,.1],[n,1.35,1.32],si),Dt(t,j(n,1.1,1.27),j(n,2.1,1.27),.04,Re),at(t,[.12,.08,2.6],[n,.34,2.17],si),at(t,[.28,.045,2.5],[n,.37,2.17],Re);for(let n=.3;n<2.4;n+=.24)at(t,[.95,.035,.1],[0,n,1.33],We);at(t,[.28,.12,.18],[0,2.56,-.9],Nu)}function B1(i){at(i,[1.75,1.13,.96],[0,.64,0],Vu),at(i,[1.88,.1,1.13],[0,.08,0],We);for(const e of[-.51,.51]){at(i,[1.65,.09,.06],[0,.2,e],Re),at(i,[1.65,.09,.06],[0,1.17,e],Re);for(let n=0;n<7;n++)at(i,[.03,.53,.014],[-.62+n*.205,.7,e*1.02],We)}for(const e of[-.78,.78])for(const n of[-.45,.45])Dt(i,j(e,.12,n),j(e,1.3,n),.045,Re);const t=new rt(new we(.11,.12,.42,12),We);t.position.set(.55,1.43,-.16),i.add(t)}function z1(i,t,e,n=!1){const s=new Kt;s.position.set(t,0,e),i.add(s);const r=n?6.4:13;Dt(s,j(0,0,0),j(0,r,0),n?.065:.12,Vn,12);for(const l of[1.6,5,9.3].filter(c=>c<r))for(const c of[-1,1])Dt(s,j(0,l,0),j(c*.31,l-.45,0),.025,Re);Dt(s,j(-1.6,r,0),j(1.6,r,0),.085,si);const o=new ae({color:16241325});for(const l of[-1.1,1.1]){at(s,[.98,.64,.13],[l,r-.07,-.03],We,[.21,0,0]),at(s,[.83,.51,.037],[l,r-.08,.065],o,[.21,0,0]);for(const c of[-.38,.38])at(s,[.06,.53,.07],[l+c,r-.08,.085],Re)}const a=new bi(16768956,n?5:8,n?12:20,1.7);return a.position.set(0,r-1,0),s.add(a),a}function k1(i,t,e,n,s=0){const r=new Kt;r.position.set(t,0,e),r.rotation.y=s,i.add(r),Dt(r,j(-.59,0,0),j(-.59,3.6,0),.065,Re),Dt(r,j(.59,0,0),j(.59,3.6,0),.065,Re),at(r,[1.2,.97,.1],[0,2.92,0],We);const o=new rt(new Ce(1.09,.85),new ae({map:Vs(n,"NO UNAUTHORIZED ACCESS","#e5d6b5","#343d3e"),side:Fe}));o.position.set(0,2.92,.065),r.add(o);const a=o.clone();a.position.set(0,2.92,-.065),a.rotation.y=Math.PI,r.add(a);for(const l of[2.44,3.4])at(r,[1.16,.03,.045],[0,l,.08],Fu)}const or=Gt(4745079,.73,.48),H1=Gt(11563074,.65,.36),V1=Gt(16777215,.92,.02,{map:Dn("paint","#b4a78c")}),Rh=Gt(6706753,.93,.02,{map:Dn("paint","#756952")}),Vu=Gt(3300721,.57,.42),G1=new ae({map:Vs("FRAGILE","KEEP DRY"),transparent:!0,opacity:.46,depthWrite:!1,side:Fe});function To(i,t,e,n,s,r,o){const a=new Kt;a.position.set(t,e,n),i.add(a),at(a,[s,r,o],[0,r/2,0],V1);for(const c of[-1,1])for(const u of[-1,1])at(a,[.06,r,.06],[c*(s/2-.06),r/2,u*(o/2-.04)],Rh);for(const c of[r-.12,.12])at(a,[s+.02,.045,o+.02],[0,c,0],Rh);const l=new rt(new Ce(s*.6,r*.28),G1);l.position.set(0,r*.6,o/2+.02),a.add(l)}function Ch(i,t,e,n=3){const s=n*2.4,r=2.1,o=new Kt;o.position.set(t,0,e),i.add(o);const a=-r/2,l=r/2;for(let c=0;c<=n;c++)for(const u of[a,l]){const h=c*2.4-s/2;at(o,[.11,5.75,.11],[h,2.875,u],or);for(const d of[1,2.65,4.27,5.57])at(o,[.19,.12,.2],[h,d,u],or)}for(const c of[1,2.65,4.3]){at(o,[s+.25,.14,r+.1],[0,c,0],H1);for(let u=0;u<n;u++){const h=(u+.5)*2.4-s/2;if((u+Math.round(t))%3===0&&c>2)for(const d of[-.65,.55]){const f=new rt(new we(.33,.33,1.1,12),Vu);f.position.set(h+d,c+.64,0),o.add(f);for(const _ of[c+.21,c+1.1]){const v=new rt(new sn(.33,.023,6,14),Re);v.rotation.x=Math.PI/2,v.position.set(h+d,_,0),o.add(v)}}else{const d=.89+.17*ct(),f=1.5+.15*ct(),_=1.08;To(o,h-.58,c+.11,0,d,_,f),To(o,h+.56,c+.11,0,d,_,f)}}}for(const c of[-s/2,s/2])for(let u=0;u<4.7;u+=1.6)Dt(o,j(c,u,a),j(c,u+1.6,l),.04,or),Dt(o,j(c,u,l),j(c,u+1.6,a),.04,or);for(let c=0;c<n;c++){const u=(c+.5)*2.4-s/2,h=new rt(new Ce(1.6,.14),new ae({map:Vs("BAY "+String(c+1),"MAX 1200 KG","#d4e1df","#34546b"),transparent:!0}));h.position.set(u,2.73,a-.08),o.add(h)}}function W1(){const i=document.createElement("canvas");i.width=1024,i.height=640;const t=i.getContext("2d");let e=893371;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<170;r++){const o=n()*i.width,a=n()*i.height,l=12+n()*110,c=.35+n()*1.2,u=t.createRadialGradient(o,a,0,o,a,l);u.addColorStop(0,`rgba(9,16,19,${.04+n()*.19})`),u.addColorStop(1,"rgba(9,16,19,0)"),t.save(),t.translate(o,a),t.scale(1,c),t.fillStyle=u,t.fillRect(-l,-l,l*2,l*2),t.restore()}for(const r of[0,1,2]){const o=r*150-130;for(const a of[-1,1])t.beginPath(),t.moveTo(520+o+a*28,640),t.bezierCurveTo(480+o+a*34,490,640+o+a*26,220,530+o+a*22,-10),t.lineWidth=4.5+n()*3,t.strokeStyle="rgba(14,20,20,.17)",t.stroke();for(let a=0;a<50;a++){const l=a*13,c=515+o+24*Math.sin(a*.073+r);t.save(),t.translate(c,l),t.rotate(Math.sin(a*.13)*.18),t.fillStyle=`rgba(14,20,20,${.015+n()*.1})`,t.fillRect(-22,-3,44,3),t.restore()}}for(let r=0;r<440;r++){const o=n()*i.width,a=n()*i.height;t.fillStyle=n()>.55?`rgba(25,20,16,${n()*.11})`:`rgba(225,218,194,${n()*.05})`,t.fillRect(o,a,1+n()*18,.4+n()*3)}const s=new Xe(i);return s.colorSpace=xe,s.anisotropy=8,new ae({map:s,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function X1(i){const t=new Kt;t.position.set(-13.3,0,-25.5),t.rotation.y=.52,i.add(t);const e=Gt(3885903,.64,.66),n=Gt(12485181,.52,.48),s=Gt(6383976,.72,.5),r=5.5,o=-1,a=17,l=4.75/a;for(let c=0;c<a;c++){const u=c/(a-1),h=r+(o-r)*u,d=(c+1)*l;at(t,[1.65,.075,.35],[0,d-.05,h],s);for(const f of[-1,1])at(t,[.04,.14,.35],[f*.81,d,h],e)}for(const c of[-1,1]){const u=c*.8;Dt(t,j(u,.15,r+.28),j(u,5,o-.22),.1,e),Dt(t,j(u,.15,r-.05),j(u,5,o-.5),.06,e),Dt(t,j(u,1.13,r+.45),j(u,5.95,o-.32),.045,n);for(let h=0;h<8;h++){const d=h/7,f=r+(o-r)*d,_=d*4.75;Dt(t,j(u,_+.1,f),j(u,_+1.13,f),.031,n)}}at(t,[3.2,.18,4.6],[0,4.82,-2.3],s);for(const c of[-1,1])Dt(t,j(c*1.58,4.9,-4.4),j(c*1.58,6,-4.4),.055,n),Dt(t,j(c*1.58,5.96,-4.4),j(c*1.58,5.96,-.3),.04,n);for(let c=0;c<3;c++){const u=-4+c*1.65;Dt(t,j(-1.25,4.67,u),j(-1.25,0,u),.12,e)}}const Y1=Gt(12874809,.75,.07),q1=Gt(11909289,.88,.02);function $1(i,t,e){const n=new Kt;n.position.set(t,0,e),i.add(n),at(n,[.54,.055,.54],[0,.025,0],Du);const s=new rt(new Bo(.19,.74,10),Y1);s.position.y=.43,s.castShadow=!0,n.add(s);for(const r of[.37,.55]){const o=new rt(new we(.126-(r-.35)*.18,.126-(r-.35)*.18,.07,12),q1);o.position.y=r,n.add(o)}}function Z1(i,t,e){const n=new Kt;n.position.set(t,0,e),i.add(n);const s=jl([y1,Vn,M1]),r=new rt(new we(.42,.42,1.18,14),s);r.position.y=.6,r.castShadow=!0,n.add(r);for(let a of[.17,.44,.83,1.06]){const l=new rt(new sn(.424,.023,5,16),Re);l.rotation.x=Math.PI/2,l.position.y=a,n.add(l)}const o=new rt(new we(.38,.38,.04,14),We);o.position.y=1.2,n.add(o)}function Ph(i,t,e,n,s=.022){const r=new Xl(n,28);r.rotateX(-Math.PI/2);const o=S1,a=new rt(r,o);a.position.set(t,s+ct()*.005,e),a.scale.z=.42+ct()*.5,a.rotation.y=ct()*Math.PI,i.add(a);for(let l=0;l<3;l++){const c=new rt(new Ce(n*(.16+ct()*.3),.007),E1);c.rotation.x=-Math.PI/2,c.position.set(t+(ct()-.5)*n,s+.008,e+(ct()-.5)*n*.2),i.add(c)}}function K1(i){const t={value:0},e=new rt(new Ce(132,94,42,30),new bn({uniforms:{time:t},side:Fe,vertexShader:`uniform float time;varying vec3 vWorld;varying vec2 vUv;
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
   }`}));return e.rotation.x=-Math.PI/2,e.position.set(97,.025,6),e.receiveShadow=!1,e.frustumCulled=!1,i.add(e),n=>{t.value=n}}function j1(i){const t=Gt(7171687,.94,.07),e=Gt(1778726,.87,.22),n=Gt(13212241,.78,.11);for(const[u,h]of[[-30,16],[23.7,30]]){const d=(u+h)/2,f=h-u;at(i,[.9,.75,f],[30,.01,d],t),at(i,[.15,.16,f],[29.56,.34,d],e);for(let _=u+2;_<h;_+=3.6)at(i,[.25,.24,.46],[29.54,.32,_],n),at(i,[.43,.34,.52],[30.15,-.3,_],e)}for(const u of[-22,-12,-2,9,16.4,25.6]){const h=new Kt;h.position.set(29.1,0,u),i.add(h);const d=new rt(new we(.18,.24,.43,12),e);d.position.y=.24,h.add(d);const f=new rt(new we(.35,.35,.12,12),t);f.position.y=.5,h.add(f);for(const _ of[-1,1])at(h,[.22,.08,.12],[_*.26,.47,0],e)}const s=Gt(6519681,.51,.57,{map:Dn("metal","#52696b")});at(i,[7.8,.4,4.9],[26,.18,14.1],s);for(let u=0;u<7;u++){const h=22.4+u*1.08;at(i,[.13,.08,4.88],[h,.42,14.1],Re)}for(const u of[11.8,16.35])at(i,[7.5,.12,.18],[26,.47,u],We);for(let u=0;u<3;u++)for(let h=0;h<2;h++){const d=26.6+h*.9,f=26.5+u*1.2,_=at(i,[1.18,.77,.86],[d,.38+u*0,f],Ou);_.rotation.y=.02*(u%2?1:-1),at(i,[1.24,.075,.91],[d,.8,f],We)}const r=document.createElement("canvas");r.width=r.height=256;const o=r.getContext("2d");o.clearRect(0,0,256,256),o.strokeStyle="rgba(183,198,191,.55)",o.lineWidth=2.1;for(let u=-256;u<512;u+=24)o.beginPath(),o.moveTo(u,0),o.lineTo(u+256,256),o.stroke(),o.beginPath(),o.moveTo(u,256),o.lineTo(u+256,0),o.stroke();const a=new Xe(r);a.colorSpace=xe,a.wrapS=a.wrapT=Wn,a.repeat.set(8,4);const l=new rt(new Ce(10,2.5),new ae({map:a,transparent:!0,opacity:.32,side:Fe,depthWrite:!1}));l.position.set(28,1.55,30.2),l.rotation.y=Math.PI/2,i.add(l);for(let u=23.5;u<=32.5;u+=2.25)Dt(i,j(u,.2,30.2),j(u,3.05,30.2),.043,Re);Dt(i,j(23.5,3.05,30.2),j(32.5,3.05,30.2),.047,Re);for(const u of[16.3,23.4])Dt(i,j(29,0,u),j(29,1.15,u),.038,Re),Dt(i,j(29,1.15,u),j(30.1,1.15,u),.038,Re),Dt(i,j(30.1,0,u),j(30.1,1.15,u),.038,Re);const c=Gt(9673361,.4,.73);for(const u of[19.62,20.38])Dt(i,j(30.2,.5,u),j(30.2,-2.8,u),.025,c);for(let u=.3;u>-2.8;u-=.3)Dt(i,j(30.22,u,19.62),j(30.22,u,20.38),.023,c);for(let u=0;u<3;u++)at(i,[.56,.018,.1],[27.5+u*.6,.032,20],n)}function J1(i,t){const e=new Float32Array(t*6),n=new Float32Array(t);for(let a=0;a<t;a++){const l=(ct()-.5)*66,c=ct()*20,u=(ct()-.5)*70,h=a*6;e[h]=l,e[h+1]=c,e[h+2]=u,e[h+3]=l+.055,e[h+4]=c-(.28+ct()*.27),e[h+5]=u+.045,n[a]=12+ct()*19}const s=new Oe;s.setAttribute("position",new nn(e,3));const r=new Wl({color:10927561,transparent:!0,opacity:.17,depthWrite:!1,blending:Zi}),o=new Gf(s,r);return o.frustumCulled=!1,o.renderOrder=5,i.add(o),{rain:o,update(a,l,c){o.position.x=l,o.position.z=c;const u=s.attributes.position;for(let h=0;h<t;h++){const d=h*6;let f=u.array[d+1];f-=a*n[h],f<-.5&&(f+=20),u.array[d+1]=f,u.array[d+4]=f-.42}u.needsUpdate=!0}}}function Q1(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{if(n instanceof rt&&n.geometry instanceof Oe&&n.renderOrder===0){const s=n.material;if(Array.isArray(s))return;const r=t.get(s)||[];r.push(n),t.set(s,r)}});let e=0;for(const[n,s]of t){if(s.length<2)continue;const r=new Map;for(const o of s){const a=o.geometry,l=Object.entries(a.attributes).map(([u,h])=>`${u}:${h.itemSize}:${h.normalized}`).sort().join("|")+":"+!!a.index,c=r.get(l)||[];c.push(o),r.set(l,c)}for(const o of r.values()){if(o.length<2)continue;const a=o.map(h=>{const d=h.geometry.clone();return d.applyMatrix4(h.matrixWorld),d}),l=Kl(a,!1);if(a.forEach(h=>h.dispose()),!l)continue;l.computeBoundingBox();const c=l.boundingBox,u=new rt(l,n);u.castShadow=n instanceof Se&&c.max.y-c.min.y>.28,u.receiveShadow=!0,u.name=`batched-${e++}`;for(const h of o)h.parent?.remove(h);i.add(u)}}return e}function tv(i,t=!1){g1(),i.background=new Qt(5594466),i.fog=new Hl(6776163,.0125),i.environment=t?null:v1(),i.environmentIntensity=.8,i.add(new bp(11847376,2896696,1.26)),i.add(new Ap(11384245,.23));const e=new $c(16768707,2.36);e.position.set(65,38,30),e.castShadow=!t,t||(e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-75,e.shadow.camera.right=75,e.shadow.camera.top=75,e.shadow.camera.bottom=-75,e.shadow.camera.near=1,e.shadow.camera.far=170,e.shadow.bias=-22e-5,e.shadow.normalBias=.05),i.add(e);const n=new $c(11716044,.67);n.position.set(-16,26,30),i.add(n);const s=new rt(new Mi(195,48,26),new bn({side:tn,depthWrite:!1,fog:!1,toneMapped:!1,vertexShader:"varying vec3 vDir; void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir;
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
 }`}));s.frustumCulled=!1,s.renderOrder=-10,i.add(s);const r=new rt(new Mi(2.7,22,12),new ae({color:16766628,transparent:!0,opacity:.18,fog:!1}));r.position.set(84,24,34),i.add(r);const o=Gt(12896457,.62,.07,{map:Dn("ground","#242a2e",512)});o.map.repeat.set(23,26),o.bumpMap=o.map,o.bumpScale=.023;const a=new rt(new Ce(250,250),o);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const l=x1(t);l&&i.add(l);const c=[],u=[],h=K1(i);for(const k of[-4,16])for(const Z of[0,1]){const St=-36+Z*6.5,V=(k===-4?1:4)+Z;oo(i,c,St,k,Math.PI/2,0,V%6),oo(i,[],St,k,Math.PI/2,1,(V+2)%6),Z===0&&oo(i,[],St,k,Math.PI/2,2,(V+4)%6)}for(const[k,Z,St,V,J]of p1){const it=Math.abs(Math.round(k*1.7+St*.77+Z*2))%6;oo(i,Z<.1?c:[],k,St,Math.PI/2+V,Math.round(Z/2.59),it,J,Z)}R1(i,10.6,1.6,1.03),wh(i,46,-42,.85),wh(i,54,37,.65);const d=new Kt;i.add(d);const f=Gt(5792103,.86,.16,{map:Dn("ground","#636970")}),_=Gt(11118755,.78,.08,{map:Dn("ground","#797771",512)});_.map.repeat.set(4,3),_.bumpMap=_.map,_.bumpScale=.018;const v=Gt(3951955,.68,.38,{map:Dn("metal","#43535a")}),m=Gt(9149082,.6,.64),p=Gt(2372152,.81,.31);at(d,[28,.22,17],[-2,.01,-19.5],_);const T=new rt(new Ce(27.7,16.7),W1());T.rotation.x=-Math.PI/2,T.position.set(-2,.144,-19.5),T.renderOrder=2,d.add(T);const y=7.1;for(const k of[-16,12])at(d,[.3,y,17],[k,y/2,-19.5],f),c.push({minX:k-.15,maxX:k+.15,minZ:-28,maxZ:-11,height:y});at(d,[28,y,.28],[-2,y/2,-28],f),c.push({minX:-16,maxX:12,minZ:-28.14,maxZ:-27.86,height:y});for(const[k,Z]of[[-16,-4.7],[1,12]]){const St=(k+Z)/2;at(d,[Z-k,y,.28],[St,y/2,-11],f),c.push({minX:k,maxX:Z,minZ:-11.14,maxZ:-10.86,height:y})}at(d,[5.7,1.4,.31],[-1.85,6.45,-11],p);for(const k of[-27.8,-22.6,-17.4,-12]){for(const Z of[-15,11])Dt(d,j(Z,0,k),j(Z,8.5,k),.13,m);for(const Z of[-1,1])Dt(d,j(-2,9.7,k),j(-2+Z*14,7.1,k),.16,m)}const x=new ks;x.moveTo(-14,0),x.lineTo(0,2.61),x.lineTo(14,0),x.closePath();const R=new es(x,{depth:.24,bevelEnabled:!1,steps:1});for(const k of[-28.18,-10.94]){const Z=new rt(R,f);Z.position.set(-2,7.1,k),Z.castShadow=!0,Z.receiveShadow=!0,d.add(Z);for(let St=-15.8;St<11.9;St+=.29){const V=2.6*(1-Math.abs(St+2)/14);V>.08&&at(d,[.032,V,.034],[St,7.1+V/2,k+.25],p)}}for(const k of[-1,1]){const Z=new rt(new On(14.25,.2,17.5),v);Z.position.set(-2+k*7,8.42,-19.5),Z.rotation.z=-k*.184,Z.castShadow=!0,d.add(Z)}for(let k=-14;k<=10;k+=2.6)at(d,[.08,.1,17],[k,7.5+2*(1-Math.abs(k+2)/14),-19.5],m);for(const[k,Z]of[[-12,-25],[7,-25],[-11,-16],[7,-17],[-11,-22],[7,-22]]){at(d,[2.1,.24,1.1],[k,.12,Z],Ou),at(d,[1.9,1.1,1],[k,.82,Z],Vn);for(const St of[-1,1])at(d,[.07,1.03,1.06],[k+St*.83,.83,Z],Re);c.push({minX:k-1.05,maxX:k+1.05,minZ:Z-.56,maxZ:Z+.56,height:1.6})}const C=new Kt;C.position.set(-2,6.6,-20),d.add(C);const I=new rt(new we(1.2,1.2,.3,18),m);I.rotation.x=Math.PI/2,C.add(I);const U=new Kt;C.add(U);for(let k=0;k<4;k++)at(U,[.35,.04,1],[Math.cos(k*Math.PI/2)*.46,0,Math.sin(k*Math.PI/2)*.46],p,[0,k*Math.PI/2,0]);const E=new ae({color:13098456}),g=new ae({color:16762763});for(const k of[-25,-19,-14])for(const Z of[-9,5]){const St=k===-19?g:E,V=new rt(new Bo(.68,.36,18,1,!0),m);V.rotation.x=Math.PI,V.position.set(Z,6.62,k),d.add(V);const J=new rt(new Mi(.22,12,8),St);J.position.set(Z,6.39,k),d.add(J),Dt(d,j(Z,6.78,k),j(Z,7.64,k),.027,p);for(const wt of[-1,1])Dt(d,j(Z+wt*1.4,6.98,k),j(Z+wt*1.4,7.7,k),.015,p);const it=new bi(k===-19?16764059:12772075,t?11:24,16,1.5);it.position.set(Z,6.1,k),d.add(it)}const w=new bi(16757866,20,12,1.5);w.position.set(-2,2.7,-19.1),d.add(w);for(const k of[-12,-7,3,8])at(d,[2.7,.48,.045],[k,5.4,-10.81],new ae({color:7769233,transparent:!0,opacity:.8})),at(d,[2.7,.09,.1],[k,5.78,-10.73],m),at(d,[.08,.7,.1],[k+1.1,5.42,-10.73],m);Ch(d,-9,-25.3,3),Ch(d,6.8,-25.3,3),X1(d);const L=Gt(7306107,.81,.35,{map:Dn("metal","#8c9490",512)});for(const[k,Z,St]of[[-2,-27.8,27.8],[-2,-10.81,11.25]]){const V=new rt(wo(St,6.98,.06,.23),L);V.position.set(k,.12,Z),Z>-20&&(V.rotation.y=Math.PI),d.add(V)}for(const[k,Z]of[[-15.8,1],[11.8,-1]]){const St=new rt(wo(16.2,6.95,.055,.23),L);St.position.set(k,.12,-19.5),St.rotation.y=Z*Math.PI/2,d.add(St)}for(let k=-15;k<12;k+=.36){const Z=7.26+2.35*(1-Math.abs(k+2)/14);at(d,[.038,.052,16.8],[k,Z,-19.5],or)}for(let k=0;k<16;k++){const Z=-13+ct()*22,St=-25.8+ct()*12;Ph(d,Z,St,.3+ct()*1.15,.14)}for(const k of[-27.6,-18.9,-13.2])for(const Z of[-13,9]){const St=at(d,[.09,.9,2.1],[Z,4.2,k],p);St.rotation.y=.2;for(let V=0;V<5;V++)at(d,[.1,.045,1.9],[Z+.1,3.89+V*.14,k],m)}const P=new Kt;P.position.set(42,0,-33),i.add(P),at(P,[7,21,7],[0,10.5,0],Gt(2568761,.78,.35)),at(P,[9,4,9],[0,21.3,0],Gt(4085084,.53,.3));for(let k of[-1,1])at(P,[9,.13,.18],[0,22.6,k*4.53],new ae({color:12242130}));const G=new Kt;G.position.set(59,0,-30),i.add(G),at(G,[30,10,25],[0,5,0],Gt(2568760,.82,.22));for(let k=2;k<10;k+=2.6){at(G,[30,.1,.13],[0,k,12.6],Vn);for(let Z=-12;Z<13;Z+=6)at(G,[3.8,.85,.12],[Z,k+.7,12.65],new ae({color:12372409,transparent:!0,opacity:.36}))}at(G,[30,1.3,25],[0,10.5,0],We);const F={barrel:[.48,.48,1.2],ibc_tote:[.67,.64,1.5],tire_stack:[.55,.55,1.13],crate_stack:[1.38,.9,2.2],forklift:[1.08,1.85,2.5],generator:[1.07,.65,1.43]},z=[];for(const[k,Z,St,V,J]of m1){if(k==="light_mast"||k==="floodlight_stand"){z.push(z1(i,Z,V,k==="floodlight_stand"));continue}const it=new Kt;it.position.set(Z,St,V),it.rotation.y=J,i.add(it);const wt=F[k];if(wt&&St<.35){const[mt,Ft,re]=wt,D=Math.abs(Math.cos(J))*mt+Math.abs(Math.sin(J))*Ft,nt=Math.abs(Math.sin(J))*mt+Math.abs(Math.cos(J))*Ft;c.push({minX:Z-D,maxX:Z+D,minZ:V-nt,maxZ:V+nt,height:re})}if(k==="jersey_barrier")P1(it,0,0);else if(k==="traffic_cone")$1(it,0,0);else if(k==="barrel")Z1(it,0,0);else if(k==="pallet")Th(it,0,0);else if(k==="pallet_stack")for(let mt=0;mt<4;mt++){const Ft=new Kt;Ft.position.y=mt*.19,it.add(Ft),Th(Ft,0,0,mt%2?.035:-.025)}else if(k==="cable_reel")I1(it,0,0);else if(k==="ibc_tote")F1(it);else if(k==="tire_stack")N1(it);else if(k==="forklift")O1(it);else if(k==="generator")B1(it);else if(k==="sign_post")k1(it,0,0,"LANE "+(Z<-20?"3":Z>10?"5":"4"));else if(k==="crate_wood")To(it,0,0,0,1.1,1,1.2);else if(k==="crate_stack")for(const[mt,Ft,re]of[[-.6,0,-.4],[.55,0,-.32],[-.28,1.04,.08]])To(it,mt,Ft,re,1.1,1,.86)}const K=Gt(9673105,.89,.04),W=Gt(10521439,.87,.06);for(let k=-35;k<28;k+=7){const Z=at(i,[1.8,.012,.065],[k,.035,6],K);Z.renderOrder=2}for(const k of[-.85,12.8]){const Z=at(i,[74,.011,.09],[-7,.036,k],W);Z.renderOrder=2}for(let k=-32;k<28;k+=10)for(const Z of[-.5,12.45]){at(i,[1.5,.015,.48],[k,.024,Z],We);for(let St=0;St<6;St++)at(i,[.06,.018,.42],[k-.6+St*.23,.04,Z],Re)}const lt=b1();for(let k=-2;k<11;k+=1.24){const Z=new rt(new Ce(2.5,1.05),lt);Z.rotation.x=-Math.PI/2,Z.position.set(-31,.045,k),Z.renderOrder=2,i.add(Z)}for(let k=0;k<73;k++){const Z=-36+ct()*64,St=-26+ct()*54;ct()<.8&&Ph(i,Z,St,.42+ct()*2.3)}j1(i);const vt=new Kt;vt.position.set(75,-2.6,-13),i.add(vt),at(vt,[32,7,85],[0,0,0],Gt(1318440,.35,.48)),at(vt,[25,7,15],[0,7,-21],Gt(5399402,.67,.4));for(let k=-7;k<39;k+=8)for(const Z of[-8,0,8])at(vt,[6,2.9,6.5],[Z,5,k],jl(ku));Q1(i);const _t=J1(i,t?950:2700),Ht=z.map((k,Z)=>({p:k,phase:Z*1.38}));return{scene:i,obstacles:c,hitSurfaces:u,rain:_t.rain,lamps:z,tick:(k,Z,St,V)=>{_t.update(k,St,V),Bu.time.value=Z,h(Z),l&&(l.material.uniforms.time.value=Z);for(const{p:J,phase:it}of Ht)J.intensity=8.5+Math.sin(Z*1.9+it)*.7}}}function ki(i,t,e,n=.42){return t<-43||t>30.5||e>32||e<-33?!0:i.some(s=>s.height>1&&t+n>s.minX&&t-n<s.maxX&&e+n>s.minZ&&e-n<s.maxZ)}const Qs=new S;function vn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Qs.copy(t),Qs[n]=0,Qs.normalize();const c=.5*o/(o+a),u=1-Qs.angleTo(i)/l;return Math.sign(Qs[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Tr extends On{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new S,c=new S,u=new S(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,_=h.length/6,v=new S,m=.5/o;for(let p=0,T=0;p<h.length;p+=3,T+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/_)){case 0:v.set(1,0,0),f[T+0]=vn(v,c,"z","y",r,n),f[T+1]=1-vn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[T+0]=1-vn(v,c,"z","y",r,n),f[T+1]=1-vn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[T+0]=1-vn(v,c,"x","z",r,t),f[T+1]=vn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[T+0]=1-vn(v,c,"x","z",r,t),f[T+1]=1-vn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[T+0]=1-vn(v,c,"x","y",r,t),f[T+1]=1-vn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[T+0]=vn(v,c,"x","y",r,t),f[T+1]=1-vn(v,c,"y","x",r,e);break}}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.segments,t.radius)}}const ei=new Se({color:3620672,metalness:.77,roughness:.36}),El=new Se({color:2699319,metalness:.72,roughness:.49}),Ye=new Se({color:1778729,metalness:.65,roughness:.42}),pi=new Se({color:8159867,metalness:.87,roughness:.29}),Pn=new Se({color:5133140,metalness:.86,roughness:.38}),bl=new Se({color:2107180,metalness:.14,roughness:.77}),Es=new Se({color:2830905,metalness:.01,roughness:1}),wl=new Se({color:2108212,metalness:.02,roughness:.98}),ev=new ae({color:15365459});function nv(i=42){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#e7e5df",e.fillRect(0,0,512,512);let n=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let r=0;r<16e3;r++){const o=n()*512,a=n()*512,l=n();e.fillStyle=l<.6?`rgba(10,13,16,${n()*.09})`:`rgba(255,252,235,${n()*.05})`,e.fillRect(o,a,.15+n()*1.3,.2+n()*6)}for(let r=0;r<220;r++){const o=n()*512,a=n()*512;e.strokeStyle=n()<.5?`rgba(12,18,24,${.025+n()*.12})`:`rgba(255,252,243,${.04+n()*.2})`,e.lineWidth=.25+n()*.7,e.beginPath(),e.moveTo(o,a),e.lineTo(o+1+n()*42,a+(n()-.5)*2),e.stroke()}for(let r=0;r<38;r++){const o=n()*512,a=n()*512,l=5+n()*40,c=e.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(20,22,20,${n()*.14})`),c.addColorStop(1,"rgba(20,22,20,0)"),e.fillStyle=c,e.fillRect(o-l,a-l,l*2,l*2)}const s=new Xe(t);return s.colorSpace=xe,s.wrapS=s.wrapT=Wn,s.repeat.set(2,2),s.anisotropy=8,s}function iv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#a1a9ae",t.fillRect(0,0,256,256);let e=2805;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);for(let r=0;r<256;r+=3)for(let o=0;o<256;o+=3){const a=Math.floor(n()*28);t.fillStyle=`rgba(${30+a},${35+a},${40+a},.16)`,t.fillRect(o+(Math.floor(r/3)%2?1:0),r,2.2,1)}for(let r=0;r<900;r++){const o=n()*256,a=n()*256;t.fillStyle=`rgba(15,19,24,${n()*.12})`,t.fillRect(o,a,1,4+n()*7)}const s=new Xe(i);return s.colorSpace=xe,s.wrapS=s.wrapT=Wn,s.repeat.set(4,3),s.anisotropy=8,s}const Lh=iv();for(const i of[Es,wl])i.map=Lh,i.bumpMap=Lh,i.bumpScale=.012;const Ih=nv();for(const i of[ei,El,Ye,pi,Pn])i.map=Ih,i.bumpMap=Ih,i.bumpScale=.006,i.needsUpdate=!0;const sv=new On(1,1,1),be=new Tr(1,1,1,2,.12);function ie(i,t,e,n,s=sv,r){const o=new rt(s,n);return o.position.set(...t),o.scale.set(...e),r&&o.rotation.set(...r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function tr(i,t,e,n,s,r=14){const o=new rt(new we(e,e,n,r),s);return o.rotation.x=Math.PI/2,o.position.set(...t),o.castShadow=!0,i.add(o),o}function rv(){const i=document.createElement("canvas");i.width=512,i.height=128;const t=i.getContext("2d");t.fillStyle="#30383a",t.fillRect(0,0,i.width,i.height),t.fillStyle="#d3d5c9",t.font="700 43px monospace",t.fillText("PAC-9",13,57),t.fillStyle="#a6a89d",t.font="24px monospace",t.fillText("LONGSHORE  //  B4  /  05:42",14,94);const e=new Xe(i);return e.colorSpace=xe,new ae({map:e,transparent:!0,opacity:.83,depthWrite:!1})}function Dh(i,t){const e=new ks;e.moveTo(.12,-.13),e.lineTo(1.46,-.13),e.lineTo(1.52,-.07),e.lineTo(1.52,.075),e.lineTo(1.43,.13),e.lineTo(.12,.13),e.closePath();for(let r=0;r<7;r++){const o=.3+r*.171;for(const a of[-.055,.056]){const l=new bo;l.absellipse(o,a,.049,.027,0,Math.PI*2,!0,0),e.holes.push(l)}}const n=new es(e,{depth:.018,bevelEnabled:!0,bevelThickness:.009,bevelSize:.006,bevelSegments:1,steps:1,curveSegments:8});n.rotateY(Math.PI/2);const s=new rt(n,ei);s.position.set(t*.136,-.013,0),s.castShadow=!0,i.add(s);for(let r=0;r<3;r++)ie(i,[t*.16,-.115+r*.116,-.88],[.026,.017,1.36],Pn)}function ov(i){const t=new ks;t.moveTo(-.16,-.12),t.lineTo(.42,-.12),t.lineTo(.54,-.27),t.lineTo(.8,-.27),t.lineTo(.91,-.17),t.lineTo(.91,.03),t.lineTo(.77,.17),t.lineTo(-.16,.14),t.closePath();const e=new bo;e.absellipse(.55,-.015,.24,.083,0,Math.PI*2,!0),t.holes.push(e);const n=new rt(new es(t,{depth:.22,bevelEnabled:!0,bevelSegments:2,bevelSize:.016,bevelThickness:.016,curveSegments:12}),bl);n.rotation.y=Math.PI/2,n.position.set(-.11,-.125,.15),i.add(n),ie(i,[0,-.12,.93],[.31,.38,.11],bl,be),ie(i,[0,-.12,.99],[.33,.42,.058],Ye,be);for(let s=0;s<6;s++)ie(i,[.171,-.1+s*.049,.95],[.012,.018,.11],Pn)}function av(i){ie(i,[0,-.34,.36],[.15,.4,.2],bl,be,[.24,0,0]);for(let l=0;l<4;l++)ie(i,[.1,-.26-l*.075,.42],[.026,.027,.19],Ye);const t=new rt(new sn(.12,.017,6,18,Math.PI*1.6),Pn);t.rotation.y=Math.PI/2,t.position.set(.07,-.25,.22),i.add(t);const e=new Kt;e.position.set(-.29,-.17,-.84),i.add(e);const n=new rt(new we(.12,.17,.55,16),wl);n.rotation.set(.59,0,-.28),n.position.set(-.18,-.27,.2),e.add(n);const s=ie(e,[-.125,-.195,.055],[.34,.19,.29],Es,be,[0,0,-.23]);s.rotation.y=-.1,ie(e,[-.022,.006,-.04],[.27,.15,.28],Es,be,[0,0,-.18]);for(let l=0;l<4;l++){const c=ie(e,[-.17+l*.078,.075,-.175],[.069,.082,.23],Es,be,[-.27,0,0]);c.rotation.y=.06+l*.05,ie(e,[-.17+l*.078,.105,-.155],[.063,.017,.11],Pn)}const r=ie(e,[.134,-.058,-.018],[.105,.12,.18],Es,be,[0,.2,-.42]);r.rotation.y=.42;const o=new Kt;o.position.set(.16,-.44,.73),i.add(o);const a=new rt(new we(.12,.18,.55,14),wl);a.rotation.set(.47,.08,.11),a.position.set(.14,-.19,.12),o.add(a);for(let l=0;l<4;l++)ie(o,[.13,-.03-l*.13,.01+l*.065],[.28,.023,.27],Es,be,[.47,.08,.1])}class lv{root=new Kt;muzzle=new Kt;flash=new rt(new Ce(.19,.42),new ae({color:16769181,transparent:!0,opacity:0,depthWrite:!1,side:Fe,blending:Zi}));light=new bi(16757852,0,6,2);kick=0;reloadAnim=0;aim=0;time=0;constructor(t){t.add(this.root);const e=this.root;ie(e,[0,-.11,.19],[.34,.24,.75],El,be),ie(e,[0,.025,.075],[.37,.2,.72],ei,be),ie(e,[0,.112,.035],[.3,.07,.66],Ye,be),ie(e,[0,-.015,-.17],[.33,.185,.48],Pn,be),ie(e,[0,.032,.49],[.39,.12,.15],ei,be),tr(e,[0,-.014,-1.04],.088,1.4,Ye),Dh(e,-1),Dh(e,1),ie(e,[0,-.133,-.84],[.25,.029,1.33],Ye),ie(e,[0,.139,-.83],[.27,.026,1.41],Ye);for(let h=0;h<18;h++){const d=-1.46+h*.103;ie(e,[0,.169,d],[.23,.025,.041],h%4===0?pi:ei,be)}for(let h=0;h<8;h++)ie(e,[0,-.145,-1.38+h*.16],[.22,.023,.04],Pn);for(const h of[-1,1])for(let d=0;d<5;d++)ie(e,[h*.147,.002,-.93+d*.2],[.018,.05,.086],Pn);tr(e,[0,-.014,-1.87],.064,.73,pi),tr(e,[0,-.014,-2.04],.084,.27,Ye);for(let h=0;h<4;h++){const d=tr(e,[0,-.014,-2.06+h*.065],.084,.015,Pn);d.material=pi}tr(e,[0,-.014,-2.2],.08,.18,ei);for(const h of[-1,1])for(let d=0;d<2;d++)ie(e,[h*.081,0,-2.24+d*.071],[.016,.036,.046],Ye);for(const h of[-1,1]){for(const d of[-.13,.2,.46]){const f=new rt(new we(.022,.022,.012,12),pi);f.rotation.z=Math.PI/2,f.position.set(h*.185,-.085,d),e.add(f)}ie(e,[h*.19,-.007,.11],[.019,.09,.19],Ye),ie(e,[h*.2,-.02,.3],[.01,.035,.085],pi)}const n=ie(e,[-.205,.045,-.08],[.02,.08,.24],Ye,be);n.rotation.z=-.1;const s=new rt(new Ce(.26,.066),rv());s.rotation.y=-Math.PI/2,s.position.set(-.201,-.055,.18),e.add(s),ie(e,[0,-.37,.16],[.22,.38,.25],El,be,[.2,0,0]),ie(e,[0,-.57,.08],[.23,.09,.26],Ye,be,[.2,0,0]);for(let h=0;h<9;h++)ie(e,[.113,-.26-h*.037,.13-h*.009],[.014,.019,.23],Pn);ov(e);const r=new Kt;r.position.set(0,.155,-.38),r.scale.setScalar(.83),e.add(r),ie(r,[0,.024,0],[.22,.075,.34],Ye,be);for(const h of[-1,1]){ie(r,[h*.156,.242,-.045],[.057,.282,.205],Pn,be),ie(r,[h*.156,.243,.088],[.048,.23,.038],ei,be);for(const f of[-.09,.08])ie(r,[h*.147,.14,f],[.044,.052,.047],pi,be);const d=ie(r,[h*.156,.385,-.043],[.056,.045,.19],Ye,be);d.rotation.z=h*.035}ie(r,[0,.399,-.044],[.355,.063,.22],ei,be),ie(r,[0,.11,-.045],[.35,.072,.22],Ye,be),ie(r,[0,.445,-.045],[.303,.017,.16],Ye,be);const o=new ae({color:3232871,transparent:!0,opacity:.31,depthWrite:!1,side:Fe}),a=new rt(new Ce(.245,.225),o);a.position.set(0,.26,.052),r.add(a);const l=new rt(new Ce(.243,.223),new ae({color:5801114,transparent:!0,opacity:.08,depthWrite:!1,side:Fe}));l.position.set(0,.26,-.112),r.add(l);const c=new ae({color:16742230,transparent:!0,opacity:.68,depthWrite:!1,side:Fe,blending:Zi}),u=new rt(new sn(.042,.0038,6,32),c);u.position.set(0,.256,.059),r.add(u),ie(r,[0,.256,.065],[.008,.008,.004],ev);for(const h of[-1,1]){ie(r,[h*.205,.28,-.01],[.046,.05,.11],ei,be);const d=new rt(new we(.045,.045,.024,14),Ye);d.rotation.z=Math.PI/2,d.position.set(h*.228,.28,.003),r.add(d)}for(const h of[-.21,.11])ie(r,[0,.05,h],[.28,.038,.083],pi,be);av(e),this.muzzle.position.set(0,-.013,-2.3),e.add(this.muzzle),this.flash.rotation.z=.3,this.muzzle.add(this.flash),this.muzzle.add(this.light),this.root.scale.setScalar(.89),this.root.position.set(.68,-.645,-.92),this.root.rotation.y=.16}shoot(){this.kick=1,this.flash.material.opacity=1,this.flash.rotation.z=Math.random()*6,this.light.intensity=17}reload(){this.reloadAnim=1}update(t,e,n,s,r){this.time+=t,this.kick=Math.max(0,this.kick-t*5.2),this.aim=pe.damp(this.aim,r?1:0,11,t),this.reloadAnim=Math.max(0,this.reloadAnim-t/1.45);const o=Math.sin(this.time*(s?14:9))*Math.min(.016,n*.012);this.root.position.set(.68-this.aim*.56+Math.sin(e*2)*.003,-.645+this.aim*.29+o-this.kick*.073,-.91-this.aim*.16+this.kick*.13),this.root.rotation.set(-this.kick*.16+Math.sin(e*1.3)*.004+Math.sin(this.reloadAnim*Math.PI)*.31,.16-this.aim*.16,Math.sin(e*6)*Math.min(n*.011,.018)+Math.sin(this.reloadAnim*Math.PI)*-.3),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*14),this.light.intensity=Math.max(0,this.light.intensity-t*210)}}const me={hp:140,runSpeed:4.5,patrolSpeed:1.5,stalkSpeed:2,accel:7,turnRate:2.5,rangeMin:8,rangeMax:18,fireRange:42,telegraph:.5,burst:4,burstGap:.11,shotDamage:5,cooldownMin:1.8,cooldownMax:3,lungeRange:3,lungeWind:.28,lungeSpeed:9.5,lungeDuration:.36,lungeDamage:15,lungeHitRange:1.35,lungeCooldown:3.5,recover:.55};class cv{phase="move";phaseTime=0;cooldown=.8;lungeCooldown=.3;shotsRemaining=0;shotGap=0;moveTime=0;didMelee=!1;bursts=0;random;constructor(t=Math.random){this.random=t,this.cooldown=.6+t()}enter(t,e=0){this.phase=t,this.phaseTime=e}reposition(t){this.enter("move"),this.moveTime=0,this.bursts=0,t.reposition=!0}update(t,e){const n={telegraph:!1,fire:!1,melee:!1,beganLunge:!1,reposition:!1};if(this.cooldown-=t,this.lungeCooldown-=t,!e.alerted)return this.enter("move"),this.moveTime=0,n;const s=e.distance,r=e.lineOfSight;switch((this.phase==="move"||this.phase==="aim"||this.phase==="cool")&&r&&s<me.lungeRange&&this.lungeCooldown<=0&&(this.enter("wind",me.lungeWind),n.telegraph=!0),this.phase){case"move":this.moveTime+=t,e.playerMovedFromPlan?(n.reposition=!0,this.moveTime=0):(e.reachedFiringPosition||this.moveTime>7||this.moveTime>1.4&&r&&s>me.rangeMin-1&&s<me.rangeMax+2&&this.random()<t*.7)&&this.enter("aim");break;case"aim":case"cool":if(this.phaseTime+=t,r){if(s<me.rangeMin-3&&this.phaseTime>.8){this.reposition(n);break}this.cooldown<=0&&e.aligned&&e.canClaimVolley&&(this.enter("tele",me.telegraph),n.telegraph=!0)}else((e.timeWithoutSight??0)>1.1||this.phaseTime>3)&&this.reposition(n);break;case"tele":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("burst"),this.shotsRemaining=me.burst,this.shotGap=0);break;case"burst":this.shotGap-=t,this.shotsRemaining>0&&this.shotGap<=0&&(this.shotsRemaining--,this.shotGap+=me.burstGap,n.fire=!0),this.shotsRemaining<=0&&(this.cooldown=me.cooldownMin+this.random()*(me.cooldownMax-me.cooldownMin),this.bursts++,this.bursts>=1+(this.random()<.4?1:0)?this.reposition(n):this.enter("cool"));break;case"wind":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("lunge",me.lungeDuration),this.didMelee=!1,n.beganLunge=!0);break;case"lunge":this.phaseTime-=t,!this.didMelee&&s<me.lungeHitRange&&(this.didMelee=!0,n.melee=!0),this.phaseTime<=0&&(this.enter("recover",me.recover),this.lungeCooldown=me.lungeCooldown);break;case"recover":this.phaseTime-=t,this.phaseTime<=0&&this.enter("move");break}return n}}class hv{yaw=0;yawRate=0;speed=0;reset(t,e=0){this.yaw=t,this.speed=e,this.yawRate=0}beginLunge(t){this.yaw=t,this.yawRate=0,this.speed=me.lungeSpeed}endLunge(){this.speed*=.3}step(t,e,n,s,r=!1){const o=Math.atan2(Math.sin(e-this.yaw),Math.cos(e-this.yaw)),a=me.turnRate,l=Math.max(-a,Math.min(a,o*6))*(r?2:1);this.yawRate+=(l-this.yawRate)*(1-Math.exp(-10*t)),this.yaw+=this.yawRate*t;const c=r?me.lungeSpeed:s<.45||Math.abs(o)>1.1?0:Math.max(0,Math.min(n*(1-Math.abs(o)*.5),.4+s*2.6));return r?this.speed=me.lungeSpeed:c>this.speed?this.speed=Math.min(c,this.speed+me.accel*t):this.speed=Math.max(c,this.speed-me.accel*1.4*t),{yaw:this.yaw,yawRate:this.yawRate,speed:this.speed,targetSpeed:c,error:o}}}const xn=[1.15,1.15,1.15],Aa=[.95,.96,.97],Rn=[1,.34,.08],Ss=[.1,.11,.12],Ui=[.035,.035,.038],Uh=[1,.7,.07],fi=[1,1,1],Ze=[2.4,2.5,2.6],Ne=[.45,.46,.48],uv=[9,9,9.6],dv=[5.5,4,1.6],Ao=Math.PI/2,fv={stand:.72,L1:.4,L2:.42,l0:.075,hipX:.165,hipY:-.01,hipZ:.4,legs:["FL","FR","RL","RR"],side:[1,-1,1,-1],fore:[1,1,-1,-1],footR:.046};function jt(i,t,e,n=.008){return new Tr(i,t,e,3,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4))}function Jl(i,{p:t=[0,0,0],r:e=[0,0,0],s:n=1}={}){const s=typeof n=="number"?[n,n,n]:n,r=new ce().compose(new S(t[0],t[1],t[2]),new Qi().setFromEuler(new Fn(e[0],e[1],e[2])),new S(s[0],s[1],s[2]));return i.applyMatrix4(r),i}function Mt(i,t,e,n,s=0,r=0,o=0,a=1){return Jl(i,{p:[t,e,n],r:[s,r,o],s:a})}function pn(i,t,e,n=12){return new we(i,t,e,n)}function Cn(i,t,e,n=12){return Jl(pn(i,t,e,n),{r:[0,0,-Ao]})}function fn(i,t,e,n=12){return Jl(pn(i,t,e,n),{r:[Ao,0,0]})}function ao(i,t,e,n=e,s=8){const r=new S(i[0],i[1],i[2]),o=new S(t[0],t[1],t[2]),a=o.clone().sub(r),l=pn(n,e,a.length(),s);return l.applyMatrix4(new ce().compose(r.clone().add(o).multiplyScalar(.5),new Qi().setFromUnitVectors(new S(0,1,0),a.normalize()),new S(1,1,1))),l}function Ni(i,t=.03,e=8,n=!1,s=0){const r=new vr(i.map(a=>new S(a[0],a[1],a[2])),n,"catmullrom",s),o=r.getLength();return new Fs(r,Math.min(400,Math.max(2,Math.ceil(o/Math.max(.08,t*3)))),t,e,n)}const Ra=(i,t=14,e=10,n=1,s=1,r=1)=>new Mi(i,t,e).scale(n,s,r),Nh=(i,t,e)=>Mt(Cn(.0075,.0075,.006,6),i,t,e),Fh=(i,t,e)=>Mt(pn(.0075,.0075,.006,6),i,t,e),pv=(i,t,e)=>Mt(fn(.0075,.0075,.006,6),i,t,e),Oh=sn;function Gu(i){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle=i==="armor"?"#ededed":"#dadada",e.fillRect(0,0,512,512);let n=i==="armor"?1129307:1934211;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);for(let o=0;o<22e3;o++){const a=s()*512,l=s()*512,c=(i==="armor"?.035:.08)*s();e.fillStyle=s()>.5?`rgba(10,16,22,${c})`:`rgba(255,255,255,${c})`,e.fillRect(a,l,.5+s()*2,.5+s()*2)}for(let o=0;o<(i==="armor"?260:430);o++){const a=s()*512,l=s()*512;e.strokeStyle=`rgba(23,26,29,${.035+s()*.12})`,e.lineWidth=.3+s(),e.beginPath(),e.moveTo(a,l),e.lineTo(a+(s()-.5)*25,l+(s()-.5)*2),e.stroke()}const r=new Xe(t);return r.colorSpace=xe,r.wrapS=r.wrapT=Wn,r.repeat.set(2,2),r.anisotropy=8,r}const Bh=Gu("armor"),zh=Gu("gunmetal"),mv=new Se({color:11449528,map:Bh,bumpMap:Bh,bumpScale:.005,roughness:.54,metalness:.36,vertexColors:!0}),gv=new Se({color:2764081,map:zh,bumpMap:zh,bumpScale:.006,roughness:.6,metalness:.77,vertexColors:!0}),_v=new ae({color:16777215,vertexColors:!0}),vv=new ae({color:16777215,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}),xv={shell:mv,metal:gv,glow:_v,lens:vv};class yv{bones={};lens;footByBone={};feet=[];bone(t,e,n=0,s=0,r=0){const o=new Kt;o.name=t,o.position.set(n,s,r),this.bones[t]=o,e&&this.bones[e].add(o)}add(t,e,n,s=[1,1,1],r=!0){const o=n.index?n.toNonIndexed():n;o!==n&&n.dispose(),o.getAttribute("normal")||o.computeVertexNormals();const a=o.getAttribute("normal"),l=o.getAttribute("position"),c=new Float32Array(l.count*3);for(let h=0;h<l.count;h++){const d=r?.74+.26*(a.getY(h)*.5+.5):1;c[h*3]=s[0]*d,c[h*3+1]=s[1]*d,c[h*3+2]=s[2]*d}o.setAttribute("color",new nn(c,3));const u=new rt(o,xv[t]);u.castShadow=t!=="glow"&&t!=="lens",u.receiveShadow=!0,u.name=`source-${e}-${t}`,this.bones[e].add(u),t==="lens"&&(this.lens=u),e.startsWith("shin")&&t==="shell"&&(this.footByBone[e]=u)}build(t){return this.feet=["FL","FR","RL","RR"].map(e=>{const n=this.footByBone["shin"+e],s=n.geometry;s.computeBoundingBox();const r=s.boundingBox.getCenter(new S);return s.translate(-r.x,-r.y,-r.z),n.position.copy(r),n.name="HoundFoot"+e,n}),this}}const Mv=yv;function Sv(){let i=fv,t=new Mv;t.bone("root",null,0,0,0),t.bone("body","root",0,i.stand,0),t.bone("neck","body",0,.06,.49),t.bone("head","neck",0,.13,.12),t.bone("turret","body",0,.152,-.03),t.bone("gun","turret",0,.095,.02),t.bone("antenna","body",-.105,.15,-.46),t.bone("beacon","body",.105,.2,-.455);for(let n=0;n<4;n++){let s=i.legs[n],r=i.side[n];t.bone("abd"+s,"body",r*i.hipX,i.hipY,i.fore[n]*i.hipZ),t.bone("thigh"+s,"abd"+s,r*i.l0,0,0),t.bone("shin"+s,"thigh"+s,0,-.4,0)}let e=(n,s,r,o,a=!0)=>t.add(n,s,r,o,a);e("metal","body",Mt(jt(.27,.2,.98,.02),0,-.01,0),Ne),e("shell","body",Mt(jt(.35,.05,.3,.014),0,.125,.33),xn),e("shell","body",Mt(jt(.35,.05,.36,.014),0,.125,-.012),xn),e("shell","body",Mt(jt(.1,.052,.36,.01),0,.126,-.012+0),Aa);for(let n of[-.15,.15])for(let s of[.21,.45,-.17,.145])e("metal","body",Fh(n,.152,s),Ze);e("metal","body",Mt(jt(.31,.03,.25,.006),0,.112,-.335),fi);for(let n=0;n<10;n++)e("metal","body",Mt(jt(.007,.062,.225,.002),-.126+n*.028,.155,-.335),Ze);e("metal","body",Mt(jt(.3,.012,.02,.003),0,.186,-.24),Ne),e("metal","body",Mt(jt(.3,.012,.02,.003),0,.186,-.43),Ne);for(let n of[1,-1]){e("shell","body",Mt(jt(.032,.15,.31,.012),n*.15,.022,-.075),xn),e("shell","body",Mt(jt(.032,.15,.135,.012),n*.15,.022,.1625),Aa),e("metal","body",Ni([[n*.168,.06,.125],[n*.182,.06,.135],[n*.182,.06,.19],[n*.168,.06,.2]],.005,5),Ze),e("shell","body",Mt(jt(.034,.016,.135,.004),n*.151,-.035,.1625),Uh),e("shell","body",Mt(jt(.034,.042,.46,.008),n*.151,-.078,0),Rn),e("shell","body",Mt(jt(.028,.1,.11,.008),n*.146,.01,.305),Ss);for(let s=0;s<4;s++)e("metal","body",Mt(jt(.004,.012,.085,.001),n*.161,-.02+s*.022,.305),Ne);for(let s of[-.035,.08])for(let r of[-.21,.06,.115,.21])e("metal","body",Nh(n*.167,s,r),Ze);e("metal","body",Ni([[n*.135,.148,-.19],[n*.135,.205,-.16],[n*.135,.212,0],[n*.135,.205,.43],[n*.135,.148,.465]],.0105,6),Ze);for(let s of[0,.26])e("metal","body",Mt(pn(.008,.008,.06,6),n*.135,.178,s),Ze);e("shell","body",Ni([[n*.118,-.105,-.36],[n*.132,-.118,-.2],[n*.13,-.112,.1],[n*.118,-.1,.36]],.009,5),Ui),e("metal","body",Mt(new Oh(.02,.005,5,10),n*.17,.085,-.335,0,Ao,0),Ze)}e("shell","body",Mt(jt(.3,.15,.075,.018),0,-.005,.505),Rn),e("shell","body",Mt(jt(.2,.07,.02,.006),0,.012,.545),Ss);for(let n=0;n<6;n++)e("shell","body",Mt(jt(.05,.034,.014,.003),-.125+n*.05,-.098,.538,0,0,0),n%2?Ss:Uh);for(let n of[-.115,.115])e("metal","body",Mt(fn(.021,.021,.014,10),n,.012,.547),Ne),e("glow","body",Mt(fn(.015,.015,.004,10),n,.012,.556),[6.5,4.6,2.2],!1);e("metal","body",Mt(jt(.24,.095,.56,.02),0,-.145,0),fi),e("shell","body",Mt(jt(.246,.03,.09,.006),0,-.14,.12),Rn),e("shell","body",Mt(jt(.246,.03,.09,.006),0,-.14,-.12),Rn),e("shell","body",Mt(jt(.29,.15,.05,.014),0,0,-.495),xn),e("shell","body",Mt(jt(.17,.05,.012,.004),0,.03,-.523),Ss),e("glow","body",Mt(jt(.13,.012,.004,.001),0,.03,-.531),[5,.3,.1],!1),e("metal","body",Mt(fn(.022,.022,.02,10),.085,-.035,-.525),Ze),e("metal","body",Mt(new Oh(.024,.006,5,10),-.07,-.05,-.528,Ao,0,0),Ze);for(let n of[-.125,.125])for(let s of[-.055,.055])e("metal","body",pv(n,s,-.523),Ze);e("shell","body",Ni([[.09,.15,-.2],[.13,.2,-.16],[.12,.2,-.08],[.09,.165,-.05]],.009,5),Ui),e("metal","neck",ao([0,-.02,-.02],[0,.11,.1],.045,.036,10),Ne);for(let n=0;n<3;n++){let s=.2+n*.28;e("shell","neck",ao([0,-.02+.13*s-.008,-.02+.12*s-.0075],[0,-.02+.13*s+.008,-.02+.12*s+.0075],.052,.052,10),Ui)}e("shell","neck",Mt(jt(.13,.05,.1,.012),0,-.01,-.03),xn),e("shell","neck",Ni([[.05,-.02,-.04],[.07,.05,.02],[.06,.11,.07],[.045,.12,.1]],.007,5),Ui),e("shell","head",Mt(jt(.19,.118,.25,.03),0,0,0),xn),e("shell","head",Mt(jt(.168,.074,.03,.012),0,-.004,.118),Ss),e("lens","head",Mt(jt(.128,.024,.006,.002),0,.006,.1345),[1,1,1],!1);for(let n of[-.056,.056])e("metal","head",Mt(fn(.015,.015,.012,10),n,-.022,.132),Ne),e("metal","head",Mt(fn(.009,.009,.004,8),n,-.022,.139),[.1,.12,.2]);e("shell","head",Mt(jt(.062,.008,.2,.003),0,.06,-.005),Rn),e("metal","head",Mt(Cn(.032,.032,.214,12),0,0,-.055),Ne);for(let n of[1,-1])e("shell","head",Mt(Cn(.022,.022,.006,10),n*.108,0,-.055),Rn);e("metal","head",Mt(pn(.036,.036,.026,14),0,.072,-.05),Ne),e("metal","head",Mt(pn(.037,.037,.006,14),0,.074,-.05),[.2,.3,.5]),e("metal","head",Mt(jt(.12,.03,.13,.008),0,-.068,.02),fi);for(let n of[-.08,.08])for(let s of[-.09,.07])e("metal","head",Fh(n,.061,s),Ze);e("metal","turret",Mt(pn(.105,.118,.034,18),0,0,0),Ne),e("metal","turret",Mt(jt(.18,.02,.16,.005),0,.026,0),fi);for(let n of[1,-1])e("shell","turret",Mt(jt(.028,.115,.15,.012),n*.078,.085,.005),xn),e("metal","turret",Mt(Cn(.022,.022,.008,10),n*.094,.095,.02),Ze);e("shell","gun",Mt(jt(.108,.086,.21,.016),0,0,-.012),xn),e("shell","gun",Mt(jt(.11,.02,.212,.006),0,-.022,-.012),Rn),e("metal","gun",Mt(fn(.035,.035,.11,12),0,0,.145),Ne);for(let n=0;n<4;n++)e("metal","gun",Mt(fn(.039,.039,.008,12),0,0,.105+n*.026),fi);e("metal","gun",Mt(fn(.022,.024,.3,12),0,0,.25),fi),e("metal","gun",Mt(fn(.036,.036,.06,10),0,0,.395),Ne),e("metal","gun",Mt(jt(.08,.012,.025,.003),0,0,.395),[.15,.15,.15]),e("metal","gun",Mt(Cn(.056,.056,.06,14),.084,-.004,-.045),Ne),e("metal","gun",Mt(Cn(.02,.02,.066,8),.084,-.004,-.045),dv),e("metal","gun",Mt(jt(.036,.036,.095,.008),-.03,.06,0),Ne),e("glow","gun",Mt(fn(.011,.011,.003,8),-.03,.06,.049),[1.6,.12,.05],!1),e("shell","gun",Ni([[.05,-.03,-.11],[.06,-.07,-.13],[.04,-.09,-.1]],.008,5),Ui),e("metal","body",Mt(pn(.022,.026,.05,10),.105,.175,-.455),Ne),e("glow","beacon",Mt(Ra(.02,10,6,1,1.25,1),0,.012,0),[14,5.5,.5],!1),e("metal","antenna",Mt(pn(.011,.014,.05,8),0,.025,0),Ne),e("metal","antenna",Mt(pn(.0028,.005,.62,5),0,.36,0),Ne),e("shell","antenna",Mt(Ra(.009,6,4),0,.67,0),Rn);for(let n=0;n<4;n++){let s=i.legs[n],r=i.side[n],o="abd"+s,a="thigh"+s,l="shin"+s;e("metal",o,Mt(fn(.06,.06,.17,14),-r*.02,0,0),Ne),e("shell",o,Mt(jt(.11,.05,.155,.014),r*0,.058,0),xn),e("metal",o,Mt(fn(.03,.03,.18,8),-r*.02,0,0),Ze),e("shell",a,Mt(Cn(.078,.078,.07,18),0,0,0),xn),e("shell",a,Mt(Cn(.081,.081,.016,18),r*.012,0,0),Rn),e("metal",a,Mt(Cn(.048,.048,.082,12),0,0,0),Ne);for(let c=0;c<5;c++){let u=c*1.2566;e("metal",a,Nh(r*.039,Math.cos(u)*.062,Math.sin(u)*.062),Ze)}e("shell",a,Mt(jt(.062,i.L1-.07,.1,.022),0,-.4*.5-.005,.004),xn),e("metal",a,Mt(jt(.044,i.L1-.04,.06,.012),0,-.4*.5,-.035),Ne),e("shell",a,Mt(jt(.065,.045,.103,.01),0,-.145,.004),Rn),e("shell",a,Mt(jt(.064,.012,.102,.004),0,-.26,.004),Ss),e("metal",a,ao([0,-.06,-.082],[0,-.4*.62,-.078],.021,.021,10),Ze),e("metal",a,ao([0,-.4*.62,-.078],[0,-.4+.025,-.058],.009,.009,6),uv),e("metal",a,Mt(jt(.05,.03,.035,.006),0,-.055,-.07),fi),e("shell",a,Ni([[r*.036,-.02,.05],[r*.044,-.13,.062],[r*.042,-.28,.058],[r*.034,-.4+.03,.035]],.0065,5),Ui),e("metal",a,Mt(Cn(.05,.05,.086,14),0,-.4,0),Ne),e("shell",a,Mt(Cn(.036,.036,.092,12),0,-.4,0),Aa),e("metal",l,Mt(pn(.03,.021,i.L2-.08,10),0,-.33999999999999997/2-.01,0),Ne),e("shell",l,Mt(jt(.052,.21,.04,.014),0,-.14,.02),xn),e("shell",l,Mt(jt(.054,.02,.042,.006),0,-.215,.02),Rn),e("metal",l,Mt(jt(.03,.06,.05,.008),0,-.02,-.03),fi),e("metal",l,Mt(pn(.024,.03,.03,10),0,-.42+.085,0),Ze),e("shell",l,Mt(Ra(i.footR+.002,12,8,1,.86,1.08),0,-.42+i.footR*.86,.004),Ui)}return t.build(["shell","metal","glow","lens"])}function Ev(){return Sv()}const mo=new Se({color:3492173,roughness:.42,metalness:.78}),Oi=new Se({color:8160640,roughness:.45,metalness:.72}),mi=new Se({color:3423035,roughness:.71,metalness:.38}),bv=new Se({color:11053728,roughness:.41,metalness:.69}),kh=new Se({color:1778210,roughness:.92,metalness:.14}),wv=new ae({color:16214853}),Tv=new ae({color:15970401}),Wu=new Se({color:11908263,roughness:.54,metalness:.46}),Xu=new Se({color:13683124,roughness:.62,metalness:.29}),Ca=new Se({color:12153150,roughness:.59,metalness:.37}),Av=new Tr(1,1,1,2,.075);function Rv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");let e=12122026;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);t.fillStyle="#dedad2",t.fillRect(0,0,256,256);for(let r=0;r<7e3;r++){const o=n()*256,a=n()*256;t.fillStyle=n()>.5?"rgba(5,15,20,.13)":"rgba(255,255,255,.08)",t.fillRect(o,a,.1+n()*2,.1+n()*7)}for(let r=0;r<180;r++){const o=n()*256,a=n()*256;t.strokeStyle="rgba(37,40,41,.16)",t.lineWidth=.25+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+n()*30,a+n()),t.stroke()}const s=new Xe(i);return s.colorSpace=xe,s.wrapS=s.wrapT=Wn,s.repeat.set(2,2),s.anisotropy=4,s}function Cv(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#f7f6ef",t.fillRect(0,0,512,512);let e=930522;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<18e3;r++){const o=n()*512,a=n()*512;t.fillStyle=n()<.6?`rgba(39,42,39,${n()*.065})`:`rgba(145,120,84,${n()*.035})`,t.fillRect(o,a,.4+n()*2.5,.3+n()*1.8)}for(let r=0;r<350;r++){const o=n()*512,a=n()*512;t.strokeStyle=n()<.85?`rgba(30,36,35,${.04+n()*.18})`:`rgba(122,62,30,${.06+n()*.12})`,t.lineWidth=.35+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+(n()-.5)*75,a+(n()-.5)*5),t.stroke()}for(let r=0;r<100;r++){const o=n()*512,a=n()*512,l=3+n()*37,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(37,46,44,${.04+n()*.16})`),c.addColorStop(1,"rgba(37,46,44,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,2*l,2*l)}const s=new Xe(i);return s.colorSpace=xe,s.wrapS=s.wrapT=Wn,s.repeat.set(1.4,1.4),s.anisotropy=8,s}const Hh=Cv();for(const i of[Wu,Xu])i.map=Hh,i.bumpMap=Hh,i.bumpScale=.005,i.needsUpdate=!0;const Vh=Rv();for(const i of[mo,Oi,mi,bv])i.map=Vh,i.bumpMap=Vh,i.bumpScale=.009,i.needsUpdate=!0;const Pv=new Mi(1,20,14);function dn(i,t,e,n,s){const r=new rt(Av,n);return r.position.set(...t),r.scale.set(...e),s&&r.rotation.set(...s),r.castShadow=!0,i.add(r),r}function Lv(i,t,e,n){const s=new rt(Pv,n);return s.position.set(...t),s.scale.set(...e),s.castShadow=!0,i.add(s),s}function er(i,t,e,n,s,r=8){const o=e.clone().sub(t),a=new rt(new we(n,n,o.length(),r),s);return a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a.castShadow=!0,i.add(a),a}const Iv=Tv;function Dv(i){const t=[],e=i;e.position.y=2.95,Lv(e,[0,0,0],[.31,.2,.48],Wu),dn(e,[0,.1,-.06],[.39,.14,.51],mo),dn(e,[0,-.055,.34],[.3,.16,.24],Oi),dn(e,[0,-.077,.51],[.26,.1,.11],kh),dn(e,[0,.018,.55],[.28,.06,.055],Ca);for(const s of[-1,1]){const r=s;dn(e,[r*.14,-.068,.558],[.08,.045,.027],wv),dn(e,[r*.24,.11,-.31],[.075,.12,.26],mi,[r*.2,0,r*.14]);for(const o of[-.39,.36]){const a=new Kt;a.position.set(r*.94,.035,o),e.add(a),er(e,new S(r*.19,.04,o*.2),new S(r*.94,.05,o),.059,mi,12),dn(e,[r*.52,.075,o*.58],[.57,.07,.19],mo,[0,r*.19,0]);const l=new Kt;a.add(l);const c=new rt(new $l([new ht(.315,-.12),new ht(.366,-.12),new ht(.39,-.09),new ht(.39,.09),new ht(.367,.13),new ht(.315,.13),new ht(.31,.096),new ht(.31,-.09)],32),Xu);c.castShadow=!0,c.receiveShadow=!0,l.add(c);const u=new rt(new sn(.365,.019,8,32),Ca);u.rotation.x=Math.PI/2,u.position.y=.124,l.add(u);const h=new rt(new sn(.308,.011,8,28),mi);h.rotation.x=Math.PI/2,h.position.y=-.092,l.add(h);for(let v=0;v<4;v++){const m=v*Math.PI/2,p=er(l,new S(.08*Math.cos(m),-.055,.08*Math.sin(m)),new S(.313*Math.cos(m),-.055,.313*Math.sin(m)),.021,Oi,8);p.userData.structural=!0}const d=new Kt;d.position.y=.016,l.add(d),t.push(d);const f=new rt(new we(.08,.1,.12,16),mi);d.add(f);for(let v=0;v<4;v++){const m=dn(d,[.19,0,0],[.27,.016,.08],Oi,[0,v*Math.PI/2+.21,0]);m.position.set(.19*Math.cos(v*Math.PI/2),0,.19*Math.sin(v*Math.PI/2)),m.rotation.y=-v*Math.PI/2-.2}const _=new rt(new we(.13,.13,.09,14),kh);_.position.y=-.16,a.add(_);for(let v=0;v<8;v++){const m=v*Math.PI/4;dn(a,[Math.cos(m)*.135,-.16,Math.sin(m)*.135],[.025,.06,.035],mi,[0,m,0])}dn(e,[r*.94,.065,o],[.1,.07,.13],Ca)}}for(const s of[-1,1])for(let r=0;r<5;r++)dn(e,[s*.307,.16,-.36+r*.14],[.015,.05,.052],Oi);const n=new Kt;n.position.set(0,-.18,.19),e.add(n),dn(n,[0,-.06,.12],[.2,.15,.3],mi),er(n,new S(0,-.11,.12),new S(0,-.12,.72),.039,mo,12),dn(n,[0,-.12,.71],[.1,.095,.13],Oi);for(const s of[-1,1])er(e,new S(s*.16,-.08,-.12),new S(s*.28,-.36,-.26),.024,mi),er(e,new S(s*.28,-.36,-.26),new S(s*.25,-.43,-.17),.022,Oi);return t}function Uv(i){const t=document.createElement("canvas");t.width=256,t.height=96;const e=t.getContext("2d");e.fillStyle="rgba(25,31,32,.76)",e.font="700 60px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,45);let n=1119;for(let r=0;r<170;r++){n=Math.imul(n,1664525)+1013904223>>>0;const o=n/4294967296*256;n=Math.imul(n,1664525)+1013904223>>>0;const a=n/4294967296*96;e.clearRect(o,a,1.1+(n>>>14)%4,1.4)}const s=new Xe(t);return s.colorSpace=xe,new ae({map:s,transparent:!0,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1})}const Ro=document.createElement("canvas");Ro.width=Ro.height=128;const Ql=Ro.getContext("2d"),Ar=Ql.createRadialGradient(64,64,3,64,64,63);Ar.addColorStop(0,"rgba(255,235,178,1)");Ar.addColorStop(.14,"rgba(255,142,67,.85)");Ar.addColorStop(.4,"rgba(252,84,31,.3)");Ar.addColorStop(1,"rgba(252,84,31,0)");Ql.fillStyle=Ar;Ql.fillRect(0,0,128,128);const Nv=new Xe(Ro);let Fv=0;function Yu(i,t){for(const n of[...i.children])n.type==="Group"&&Yu(n,t);const e=new Map;for(const n of i.children){if(!(n instanceof rt)||t.has(n)||Array.isArray(n.material))continue;const s=e.get(n.material)||[];s.push(n),e.set(n.material,s)}for(const[n,s]of e){if(s.length<2)continue;const r=s.map(l=>{l.updateMatrix();const c=l.geometry.clone();return c.applyMatrix4(l.matrix),c}),o=Kl(r,!1);for(const l of r)l.dispose();if(!o)continue;const a=new rt(o,n);a.castShadow=!0,a.receiveShadow=!0;for(const l of s)i.remove(l),l.geometry.dispose();i.add(a)}}class Ov{kind;root=new Kt;body=new Kt;head=new Kt;turret=new Kt;gun=new Kt;legs=[];knees=[];feet=[];rotors=[];footWorld=[];stepStart=[];stepEnd=[];lastRoot=new S;stepPair=-1;stepT=0;lastPair=1;bodyBounce=.72;bodyBounceVelocity=0;headYaw=0;headPitch=.05;antenna;leanPitch=0;leanRoll=0;recoilPitch=0;recoilPitchVelocity=0;turretPitch=0;hitShift=0;hitShiftVelocity=0;hitRoll=0;hitRollVelocity=0;hound=new cv;houndDrive=new hv;houndPush=new S;tacticalGoal=new S;tacticalGoalUntil=0;houndTurretYaw=0;houndGunPitch=0;houndHeadYaw=0;houndHeadPitch=.05;houndWarning=0;warningLens;warningHalo;deathElapsed=0;deathVelocity=0;deathImpact=!1;deathPitch=0;deathRoll=0;deathSink=0;deathOrder=0;wreckFrozen=!1;wreckBatchCount=0;deathPitchVelocity=0;deathRollVelocity=0;deathFootSlides=[];deathSmokeClock=0;health;maxHealth;alive=!0;phase=Math.random()*Math.PI*2;targetable=[];shootTimer=1+Math.random()*2;speed=1.1+Math.random()*.4;lastHitAt=0;hitFlash=0;isTarget=!0;home=new S;route=[];routeTimer=0;lastPlayerPosition=new S;houndLastKnown=new S;houndSeeTime=0;houndNoSeeTime=0;houndSenseTimer=0;houndHasLos=!1;houndModeTime=0;houndSearchScan=0;heading=0;mode="patrol";alerted=!1;originalMaterials=new Map;constructor(t,e,n){this.kind=t,this.health=t==="gull"?72:me.hp,this.maxHealth=this.health,this.speed=t==="gull"?1.85:me.patrolSpeed,this.root.position.set(e,0,n),this.home.set(e,0,n),this.root.add(this.body),this.routeTimer=Math.random(),t==="hound"?(this.buildHound(),this.body.position.y=.72,this.houndDrive.reset(this.root.rotation.y)):this.rotors=Dv(this.body),t==="hound"&&Yu(this.body,new Set(this.feet)),this.kind==="hound"&&this.head.traverse(s=>{s instanceof rt&&(s.userData.enemyPart="head")}),this.body.traverse(s=>{s instanceof rt&&(s.userData.enemy=this,this.targetable.push(s),this.originalMaterials.set(s,s.material))}),this.lastRoot.copy(this.root.position)}buildHound(){const t=Ev(),e=this.body;this.root.remove(e),this.root.add(t.bones.root),this.body=t.bones.body,this.head=t.bones.head,this.turret=t.bones.turret,this.gun=t.bones.gun,this.antenna=t.bones.antenna,this.legs=["FL","FR","RL","RR"].map(o=>t.bones["abd"+o]),this.knees=["FL","FR","RL","RR"].map(o=>t.bones["shin"+o]),this.feet=t.feet,t.lens&&(t.lens.material=t.lens.material.clone(),this.warningLens=t.lens);const n=new ir(new Vl({map:Nv,color:16753758,transparent:!0,blending:Zi,depthWrite:!1,opacity:0}));n.position.set(0,.045,.47),n.scale.set(.5,.5,1),n.visible=!1,this.gun.add(n),this.warningHalo=n;const s=Uv("H-"+String(Math.abs(Math.round(this.root.position.x*11+this.root.position.z*13))%90+3).padStart(2,"0"));for(const o of[-1,1]){const a=new rt(new Ce(.2,.085),s);a.rotation.y=o*Math.PI/2,a.position.set(o*.184,.025,-.085),this.body.add(a)}const r=[.37,.37,-.42,-.42];for(let o=0;o<4;o++){const a=o%2===0?1:-1;this.footWorld.push(this.root.position.clone().add(new S(a*.275,0,r[o])))}this.stepStart=this.footWorld.map(o=>o.clone()),this.stepEnd=this.footWorld.map(o=>o.clone())}solveHoundLegs(){const t=this.root,e=this.body,n=t.rotation.y,s=Math.cos(n),r=Math.sin(n);for(let o=0;o<4;o++){const a=o%2===0?1:-1,l=o<2?1:-1,c=this.legs[o],u=this.knees[o],h=this.footWorld[o],d=h.x-t.position.x,f=h.z-t.position.z,_=d*s-f*r,v=d*r+f*s,m=e.rotation.x,p=e.rotation.z,T=h.y+.046*.6-t.position.y-e.position.y,y=T*Math.cos(m)+v*Math.sin(m),x=-T*Math.sin(m)+v*Math.cos(m),R=_-this.hitShift,C=R*Math.cos(p)+y*Math.sin(p)-a*.165,I=-R*Math.sin(p)+y*Math.cos(p)+.01,U=x-l*.4,E=Math.sqrt(Math.max(1e-6,C*C+I*I-.075*.075));let g=Math.atan2(I,C)-Math.atan2(-E,a*.075);g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI);const w=Math.max(Math.abs(.4-(.42-.046*.6))+.03,Math.min((.4+.42-.046*.6)*.995,Math.hypot(E,U))),L=Math.atan2(U,E),P=pe.clamp((.4*.4+w*w-(.42-.046*.6)**2)/(2*.4*w),-1,1),G=pe.clamp((.4*.4+(.42-.046*.6)**2-w*w)/(2*.4*(.42-.046*.6)),-1,1);c.rotation.z=g;const F=c.children.find(z=>z.type==="Group");F&&(F.rotation.x=Math.acos(P)-L),u.rotation.x=-(Math.PI-Math.acos(G))}}poseHound(t,e,n){const s=this.body,r=this.root,o=r.position.clone().sub(this.lastRoot);o.y=0;const a=o.length(),l=a>3,c=l?0:a/Math.max(n,.008),u=Math.min(c,5),h=pe.clamp(.27-u*.042,.075,.27),d=r.rotation.y,f=g=>g%2===0?1:-1,_=g=>g<2?1:-1,v=g=>new S(f(g)*.275,0,_(g)*(g<2?.37:.42)).applyAxisAngle(new S(0,1,0),d);if(l||this.footWorld.length!==4){for(let g=0;g<4;g++)this.footWorld[g].copy(r.position).add(v(g));this.stepPair=-1,this.stepT=0}if(this.stepPair<0){let g=-1,w=0;for(let L=0;L<2;L++){let P=0;for(const G of L===0?[0,3]:[1,2]){const F=r.position.clone().add(v(G));P=Math.max(P,Math.hypot(F.x-this.footWorld[G].x,F.z-this.footWorld[G].z))}L===this.lastPair&&(P*=.8),P>w&&(w=P,g=L)}if(g>=0&&w>(e?.09:.035)){this.stepPair=g,this.stepT=0;for(const L of g===0?[0,3]:[1,2]){this.stepStart[L].copy(this.footWorld[L]);const P=u>.15?o.normalize().multiplyScalar(u*h*1.4):new S;this.stepEnd[L].copy(r.position).add(v(L)).add(P)}}}if(this.stepPair>=0){this.stepT=Math.min(1,this.stepT+n/h);const g=this.stepT*this.stepT*(3-2*this.stepT);for(const w of this.stepPair===0?[0,3]:[1,2])this.footWorld[w].lerpVectors(this.stepStart[w],this.stepEnd[w],g),this.footWorld[w].y=Math.sin(Math.PI*this.stepT)*(.065+Math.min(.09,u*.02));this.stepT>=1&&(this.lastPair=this.stepPair,this.stepPair=-1)}this.lastRoot.copy(r.position);const m=.72-(this.stepPair>=0?.025:0),p=Math.min(.05,n);this.bodyBounceVelocity+=(m-this.bodyBounce)*80*p,this.bodyBounceVelocity*=Math.exp(-12*p),this.bodyBounce+=this.bodyBounceVelocity*p,s.position.y=pe.clamp(this.bodyBounce,.67,.76);let T=0,y=0,x=0,R=0;for(let g=0;g<4;g++){const w=this.footWorld[g];g<2?T+=w.y:y+=w.y,g%2===0?R+=w.y:x+=w.y}const C=Math.atan2(R-x,.55)*.33,I=Math.atan2(y-T,.8)*.33;this.leanPitch=pe.damp(this.leanPitch,I,8,n),this.recoilPitchVelocity+=(-130*this.recoilPitch-15*this.recoilPitchVelocity)*n,this.recoilPitchVelocity=pe.clamp(this.recoilPitchVelocity,-6,6),this.recoilPitch+=this.recoilPitchVelocity*n,s.rotation.x=this.leanPitch+this.recoilPitch,this.leanRoll=pe.damp(this.leanRoll,C,8,n),this.hitShiftVelocity+=(-110*this.hitShift-13*this.hitShiftVelocity)*n,this.hitShift+=this.hitShiftVelocity*n,this.hitRollVelocity+=(-130*this.hitRoll-15*this.hitRollVelocity)*n,this.hitRoll+=this.hitRollVelocity*n,s.position.x=this.hitShift,s.rotation.z=this.leanRoll+this.hitRoll,this.solveHoundLegs();let E=(this.alerted?this.houndTurretYaw:0)-this.turret.rotation.y;if(E=Math.atan2(Math.sin(E),Math.cos(E)),this.turret.rotation.y+=pe.clamp(E,-4.5*n,4.5*n),this.turretPitch=pe.damp(this.turretPitch,this.alerted?this.houndGunPitch:0,10,n),this.gun.rotation.x=this.turretPitch-s.rotation.x*.5,this.headYaw=pe.damp(this.headYaw,this.alerted?this.houndHeadYaw:Math.sin(t*.7+this.phase)*.5,7,n),this.headPitch=pe.damp(this.headPitch,this.alerted?this.houndHeadPitch:.05,7,n),this.head.rotation.set(this.headPitch,this.headYaw,0),this.warningHalo){const g=this.hound.phase==="tele"||this.hound.phase==="wind",w=this.hound.phase==="burst"||this.hound.phase==="lunge",L=.55+.45*Math.sin(t*(g?28:43))**2;this.warningHalo.visible=g||w,this.warningHalo.material.opacity=(g?.85:.55)*L,this.warningHalo.scale.setScalar(g?.6+.15*L:.42)}if(this.warningLens){const g=this.houndWarning>0,w=this.warningLens.material;w.color.setHex(g?16742466:16772043),w.opacity=g?.55+.45*Math.sin(t*39)**2:.9,this.warningLens.scale.x=g?1.22:1}this.antenna&&(this.antenna.rotation.x=pe.damp(this.antenna.rotation.x,Math.sin(t*2+this.phase)*.05,4,n))}onHoundShot(){this.kind==="hound"&&(this.recoilPitchVelocity+=1.1,this.bodyBounceVelocity-=.25)}houndPose(){return{headYaw:this.head.rotation.y,headPitch:this.head.rotation.x,turretYaw:this.turret.rotation.y,gunPitch:this.gun.rotation.x,bodyPitch:this.body.rotation.x,bodyRoll:this.body.rotation.z,bodyShift:this.body.position.x,recoilPitch:this.recoilPitch,turretTarget:this.houndTurretYaw,headTarget:this.houndHeadYaw}}freezeHoundWreck(){if(this.wreckFrozen||this.kind!=="hound")return;this.root.updateMatrixWorld(!0);const t=new ce().copy(this.root.matrixWorld).invert(),e=new Map,n=[];this.body.traverse(o=>{if(!(o instanceof rt)||(n.push(o),Array.isArray(o.material)))return;const a=e.get(o.material)||[];a.push(o),e.set(o.material,a)});let s=0;for(const[o,a]of e){const l=a.map(u=>{const h=u.geometry.clone();if(h.applyMatrix4(new ce().multiplyMatrices(t,u.matrixWorld)),!h.index){const d=h.getAttribute("position").count;h.setIndex(Array.from({length:d},(f,_)=>_))}return h}),c=l.length>1?Kl(l,!1):l[0];if(c){const u=new rt(c,o);if(u.castShadow=a.some(h=>h.castShadow),u.receiveShadow=a.some(h=>h.receiveShadow),this.root.add(u),s++,c!==l[0])for(const h of l)h.dispose()}else for(let u=0;u<l.length;u++){const h=new rt(l[u],o);h.castShadow=a[u].castShadow,h.receiveShadow=a[u].receiveShadow,this.root.add(h),s++}}this.body.clear();const r=new Set;for(const o of n)r.add(o.geometry);for(const o of r)o.dispose();this.targetable.length=0,this.originalMaterials.clear(),this.warningHalo=void 0,this.warningLens=void 0,this.wreckFrozen=!0,this.wreckBatchCount=s}disposeWreck(){if(this.wreckFrozen)for(const t of this.root.children)t instanceof rt&&t.geometry.dispose()}animateDeath(t){if(this.kind!=="hound")return{impact:!1,smoke:!1,spark:!1,retire:!1};if(this.deathSink>0)return this.deathSink+=t,this.root.position.y-=.22*t,{impact:!1,smoke:!1,spark:!1,retire:this.deathSink>3.2};this.deathElapsed+=t,this.deathElapsed>=2.2&&!this.wreckFrozen&&this.freezeHoundWreck();const e=this.body.position.y;if(this.deathVelocity-=9.8*t*(this.deathElapsed<.12?.3:1),this.deathElapsed<2.2){this.body.position.y=Math.max(.215,e+this.deathVelocity*t),this.body.position.y<=.215&&this.deathVelocity<0&&(this.deathVelocity=-this.deathVelocity*.22);const r=1-Math.exp(-3.2*t);for(let o=0;o<4;o++)this.footWorld[o].addScaledVector(this.deathFootSlides[o],r),this.deathFootSlides[o].multiplyScalar(1-r);this.deathPitchVelocity+=(60*(this.deathPitch-this.body.rotation.x)-9*this.deathPitchVelocity)*t,this.deathRollVelocity+=(60*(this.deathRoll-this.body.rotation.z)-9*this.deathRollVelocity)*t,this.body.rotation.x+=this.deathPitchVelocity*t,this.body.rotation.z+=this.deathRollVelocity*t,this.body.position.x=pe.damp(this.body.position.x,0,8,t),this.hitShift=this.body.position.x,this.head.rotation.x=pe.damp(this.head.rotation.x,.55,5,t),this.head.rotation.y=pe.damp(this.head.rotation.y,this.deathRoll,3,t),this.gun.rotation.x=pe.damp(this.gun.rotation.x,.3-this.body.rotation.x*.5,4,t),this.solveHoundLegs()}const n=!this.deathImpact&&e>.22&&this.body.position.y<=.22;if(n&&(this.deathImpact=!0),this.warningLens){const r=this.deathElapsed<1.2?Math.sin(this.deathElapsed*60)>.2?1-this.deathElapsed/1.2:.05:.02,o=this.warningLens.material;o.color.setRGB(6*r+.05,.6*r+.01,.2*r),o.opacity=this.deathElapsed<1.2?1:.14}this.deathSmokeClock-=t;const s=this.deathElapsed<6.5&&this.deathSmokeClock<=0;return s&&(this.deathSmokeClock=this.deathElapsed<2?.09:.2),{impact:n,smoke:s,spark:n||s&&this.deathElapsed<4&&Math.random()<.55,retire:!1}}animate(t,e,n=.016){if(this.kind==="hound")this.poseHound(t,e,n);else{this.body.position.y=2.9+Math.sin(t*3.5+this.phase)*.18,this.body.rotation.set(Math.sin(t*1.7+this.phase)*.045,0,Math.sin(t*2.1+this.phase)*.075);for(let s=0;s<this.rotors.length;s++)this.rotors[s].rotation.y=t*(s%2===0?46:-46)}if(this.hitFlash>0&&(this.hitFlash=Math.max(0,this.hitFlash-n),this.hitFlash<=0))for(const[s,r]of this.originalMaterials)s.material=r}damage(t,e,n="body"){if(this.alive){if(this.health-=t,this.hitFlash=.16,this.kind==="hound"&&e){const s=this.root.rotation.y,r=Math.cos(s),o=Math.sin(s),a=Math.min(1.6,t/28),l=e.x*o+e.z*r,c=e.x*r-e.z*o;this.hitShiftVelocity+=c*1.4*a,this.hitRollVelocity-=c*3.2*a,this.recoilPitchVelocity+=l*2.4*a*(n==="weak"?1.6:1),this.bodyBounceVelocity-=.5*a}if(this.kind==="gull")for(const s of this.targetable)s.material=Iv;if(this.health<=0){this.alive=!1,this.hitFlash=0;for(const[s,r]of this.originalMaterials)s.material=r;this.root.userData.dying=0,this.warningHalo&&(this.warningHalo.visible=!1),this.deathElapsed=0,this.deathVelocity=0,this.deathImpact=!1,this.kind==="hound"&&(this.wreckFrozen=!1,this.wreckBatchCount=0,this.deathSink=0,this.deathOrder=++Fv),this.deathPitch=(Math.random()-.5)*.25,this.deathRoll=(Math.random()<.5?-1:1)*(.25+Math.random()*.3),this.deathPitchVelocity=(Math.random()-.5)*2,this.deathRollVelocity=this.deathRoll*3,this.stepPair=-1,this.stepT=0,this.deathFootSlides=this.footWorld.map((s,r)=>{s.y=this.root.position.y;const o=r%2===0?1:-1,a=r<2?1:-1;return new S(o*(.16+Math.random()*.2),0,a*(.05+Math.random()*.22)+(Math.random()-.5)*.1).applyAxisAngle(new S(0,1,0),this.root.rotation.y)})}}}}function Bv(i){const{scene:t,mission:e,player:n,enemies:s,sound:r,getTime:o,getYaw:a,isHeld:l,radio:c,waveText:u,onVictory:h}=i;let d=-999,f=0,_=0;const v=[],m=[[["gull",2,21.5],["hound",-19,-1.4],["gull",10,23.5]],[["gull",-6,15],["hound",9,7],["gull",14,17],["hound",-12,-7]],[["gull",-10,-8],["gull",7,-8],["gull",15,-19],["hound",-8,-12],["hound",6,-25]],[["gull",19,-22],["gull",22,15],["gull",25,-6],["gull",13,24],["hound",16,-17],["hound",24,8],["hound",19,27]]];function p(C){const I=s.filter(U=>U.alive).length;for(const[U,E,g]of C.slice(0,Math.max(0,9-I))){const w=new Ov(U,E,g);w.shootTimer=1.4+Math.random()*2,t.add(w.root),s.push(w)}}function T(){p(m[0])}function y(C){n.relays++,r.wave(),u(`UPLINK ${C} — OFFLINE`),n.relays===1?c("ONE RELAY DARK. IT FELT THAT — MACHINES INBOUND.",5):n.relays===2?c("TWO DARK. IT IS THROWING EVERYTHING IT HAS LEFT AT YOU.",5):c("ALL THREE DARK. THE BOAT IS HOLDING AT THE EAST QUAY LADDER. RUN.",7),m[Math.min(n.relays,3)].forEach(([U,E,g],w)=>v.push({kind:U,x:E,z:g,at:o()+w*.85})),e.allCut&&(f=o()+12,_=5),n.reserve+=40,n.hp=Math.min(100,n.hp+12)}function x(C){e.update(o());for(let g=v.length-1;g>=0;g--){const w=v[g];o()<w.at||s.filter(L=>L.alive).length>=9||(p([[w.kind,w.x,w.z]]),v.splice(g,1))}if(e.allCut&&o()>=f&&_>0&&s.filter(g=>g.alive).length<4){const g=Math.random()<.6?"gull":"hound";p([[g,Math.min(26,n.x+12),n.z+(Math.random()>.5?7:-7)]]),_--,f=o()+7}Math.hypot(n.x-e.boatTarget.x,n.z-e.boatTarget.z)<4&&!e.allCut&&o()-d>8&&(d=o(),c("RELAYS STILL LIVE — THE BOAT WILL NOT WAIT UNDER FIRE.",3.5));const U=l(),E=e.interact(new S(n.x,0,n.z),a(),U,C);E.cut&&y(E.cut.id),E.extract&&(c("BREACHER IS ABOARD. SALTLINE IS DARK. GOOD WORK.",5),h())}function R(){d=-999,f=0,_=0,v.length=0}return{reset:R,spawnPatrol:T,onRelayCut:y,update:x}}function Gh(i,t,e){const l=w=>pe.clamp(Math.round((w- -43)/1),0,75),c=w=>pe.clamp(Math.round((w- -33)/1),0,65),u=(w,L)=>w+L*76,h=l(i.x),d=c(i.z),f=l(t.x),_=c(t.z),v=new Uint8Array(5016);for(let w=0;w<66;w++)for(let L=0;L<76;L++){const P=-43+L*1,G=-33+w*1,F=.46;v[u(L,w)]=e.some(z=>z.height>1&&P+F>z.minX&&P-F<z.maxX&&G+F>z.minZ&&G-F<z.maxZ)?0:1}const m=new Int32Array(v.length);m.fill(-1);const p=new Int32Array(v.length);let T=0,y=0;const x=u(h,d),R=u(f,_);p[y++]=x,m[x]=x;let C=x,I=Math.abs(h-f)+Math.abs(d-_);for(;T<y;){const w=p[T++],L=w%76,P=Math.floor(w/76),G=Math.abs(L-f)+Math.abs(P-_);if(G<I&&(C=w,I=G),w===R){C=w;break}for(const[F,z]of[[0,-1],[1,0],[-1,0],[0,1]]){const K=L+F,W=P+z;if(K<0||K>=76||W<0||W>=66)continue;const lt=u(K,W);m[lt]!==-1||!v[lt]||(m[lt]=w,p[y++]=lt)}}if(C===x)return[t.clone()];const U=[];let E=C;for(;E!==x&&U.length<250;){const w=E%76,L=Math.floor(E/76);if(U.push(new S(-43+w*1,0,-33+L*1)),E=m[E],E<0)return[t.clone()]}U.reverse();const g=[];for(let w=0;w<U.length;w++){if(w+1<U.length){const L=w===0?i:U[w-1],P=U[w],G=U[w+1],F=P.x-L.x,z=P.z-L.z,K=G.x-P.x,W=G.z-P.z;if(Math.abs(F*W-z*K)<.001&&F*K+z*W>=0)continue}g.push(U[w])}return C===R&&g.push(t.clone()),g}function zv({scene:i,world:t,sound:e,player:n,enemies:s,getTime:r,isPlaying:o,radio:a,hurtPlayer:l,tracer:c,sparks:u,smoke:h}){let d=!1,f=-99,_=0,v=0;function m(g,w=18){for(const L of s)L===g||L.kind!=="hound"||!L.alive||L.mode==="pursue"||L.root.position.distanceToSquared(g.root.position)>w*w||(L.houndLastKnown.set(n.x,0,n.z),L.mode="investigate",L.alerted=!1,L.houndModeTime=9+Math.random()*4,L.routeTimer=0,L.houndSenseTimer=0,L.houndSearchScan=0)}function p(g){g.kind!=="hound"||!g.alive||(g.mode!=="pursue"&&(g.mode="investigate",g.alerted=!1,g.houndModeTime=10,g.houndLastKnown.set(n.x,0,n.z),g.houndSeeTime=1,g.houndSenseTimer=0,g.routeTimer=0,g.houndSearchScan=0),m(g,20))}function T(){for(const g of s)g.kind!=="hound"||!g.alive||g.mode==="pursue"||Math.hypot(g.root.position.x-n.x,g.root.position.z-n.z)>45||(g.mode="investigate",g.alerted=!1,g.houndModeTime=10,g.houndLastKnown.set(n.x,0,n.z),g.houndSenseTimer=0,g.routeTimer=0,g.houndSearchScan=0)}function y(g,w,L,P,G){if(g.houndSenseTimer-=w,g.houndSenseTimer<=0){g.houndSenseTimer=.11+Math.random()*.08;const F=(L*Math.sin(g.root.rotation.y)+P*Math.cos(g.root.rotation.y))/Math.max(.001,G),z=g.mode==="pursue"||G<3.5||F>Math.cos(100*Math.PI/180);g.houndHasLos=G<45&&z&&x(g.head.getWorldPosition(new S),new S(n.x,n.y,n.z))}return g.houndHasLos?(g.houndSeeTime+=w,g.houndNoSeeTime=0,g.houndLastKnown.set(n.x,0,n.z)):(g.houndNoSeeTime+=w,g.houndSeeTime=Math.max(0,g.houndSeeTime-w*.6)),g.mode==="pursue"?g.houndNoSeeTime>4&&(g.mode="search",g.houndModeTime=8+Math.random()*3,g.routeTimer=0,g.houndSearchScan=0):g.houndHasLos&&g.houndSeeTime>(g.mode==="patrol"?.55:.55*.45)?(g.mode="pursue",g.houndNoSeeTime=0,g.routeTimer=0,g.houndSearchScan=0,m(g),d||(d=!0,a("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5))):g.mode!=="patrol"&&(g.houndModeTime-=w,g.houndModeTime<=0&&(g.mode="patrol",g.home.copy(g.root.position),g.routeTimer=0)),g.alerted=g.mode==="pursue",g.houndHasLos}function x(g,w){const L=w.clone().sub(g),P=L.length();if(P<.001)return!0;const G=new Wi(g,L.divideScalar(P));for(const F of t.obstacles){if(F.height<=.4)continue;const z=G.intersectBox(new oi(new S(F.minX,.01,F.minZ),new S(F.maxX,F.height,F.maxZ)),new S);if(z&&z.distanceTo(g)>.08&&z.distanceTo(g)<P-.18)return!1}return!0}function R(g,w=!1){const L=g.houndHasLos?new S(n.x,0,n.z):g.houndLastKnown.clone();if(!w&&g.tacticalGoalUntil>r()&&g.lastPlayerPosition.distanceToSquared(L)<49)return g.tacticalGoal.clone();const P=Math.atan2(g.root.position.x-L.x,g.root.position.z-L.z),G=[[0,12],[.55,12],[-.55,12],[1.1,14],[-1.1,14],[.35,9],[-.35,9],[1.6,16],[-1.6,16],[2.3,10],[-2.3,10]];let F=g.root.position.clone(),z=1/0;const K=L.clone().add(new S(0,1.2,0));for(const[W,lt]of G){const vt=P+W,_t=new S(L.x+Math.sin(vt)*lt,0,L.z+Math.cos(vt)*lt);if(ki(t.obstacles,_t.x,_t.z,.6))continue;const Ht=x(_t.clone().add(new S(0,.95,0)),K),k=s.filter(V=>V!==g&&V.alive&&V.kind==="hound").reduce((V,J)=>V+Math.max(0,3.2-J.root.position.distanceTo(_t))*4,0),Z=w&&g.tacticalGoalUntil>0?Math.max(0,4-_t.distanceTo(g.tacticalGoal))*5:0,St=_t.distanceTo(g.root.position)*.9+Math.abs(W)*1.2+(Ht?0:22)+k+Z;St<z&&(z=St,F.copy(_t))}if(z===1/0){const W=g.root.position.clone().sub(L);W.y=0,W.lengthSq()<.01&&W.set(0,0,1),F.copy(L).addScaledVector(W.normalize(),12)}return g.tacticalGoal.copy(F),g.tacticalGoalUntil=r()+10,g.lastPlayerPosition.copy(L),g.routeTimer=0,g.route=[],F}function C(g){g.root.updateMatrixWorld(!0);const w=g.gun.localToWorld(new S(0,0,.43)),P=new S(n.x,n.y-.65,n.z).clone().sub(w),G=P.length(),F=.045+Math.min(.075,G*.0017),z=P.normalize().add(new S((Math.random()-.5)*2*F,(Math.random()-.5)*2*F,(Math.random()-.5)*2*F)).normalize(),K=new Wi(w,z);let W=me.fireRange;for(const _t of t.obstacles){if(_t.height<=.4)continue;const Ht=K.intersectBox(new oi(new S(_t.minX,0,_t.minZ),new S(_t.maxX,_t.height,_t.maxZ)),new S);if(Ht){const k=Ht.distanceTo(w);k>.08&&k<W&&(W=k)}}const lt=w.clone().addScaledVector(z,W);e.enemyShot(),c(w,lt,!1),_++,g.onHoundShot(),K.distanceSqToSegment(new S(n.x,.35,n.z),new S(n.x,n.y,n.z))<.36*.36&&W>G-.8&&l(me.shotDamage,.075)}function I(g,w,L,P,G){const F=y(g,w,L,P,G),z=g.hound,K=Math.atan2(L,P),W=Math.atan2(Math.sin(K-g.root.rotation.y),Math.cos(K-g.root.rotation.y)),lt=Math.atan2(Math.sin(W-g.turret.rotation.y),Math.cos(W-g.turret.rotation.y)),vt=s.filter(A=>A!==g&&A.alive&&A.kind==="hound"&&["tele","burst"].includes(A.hound.phase)).length;g.alerted&&g.tacticalGoalUntil<=0&&R(g,!0);const _t=g.alerted&&F&&g.lastPlayerPosition.distanceToSquared(new S(n.x,0,n.z))>49,Ht=g.tacticalGoalUntil>0&&g.root.position.distanceToSquared(g.tacticalGoal)<.45*.45,k=z.phase,Z=z.update(w,{alerted:g.alerted,distance:G,lineOfSight:F,aligned:Math.abs(lt)<.14,canClaimVolley:vt<2&&r()-f>=1.25,reachedFiringPosition:Ht,timeWithoutSight:g.houndNoSeeTime,playerMovedFromPlan:_t});Z.reposition&&g.alerted&&R(g,!0),Z.telegraph&&(z.phase==="tele"&&(f=r()),e.houndWarning(z.phase==="wind")),Z.fire&&C(g),Z.melee&&(v++,l(me.lungeDamage,.075)),g.houndWarning=["tele","burst","wind","lunge"].includes(z.phase)?1:0;const St=["aim","tele","burst","cool","wind","recover"].includes(z.phase);let V;if(z.phase==="lunge")V=new S(n.x,0,n.z);else if(g.mode==="patrol"){const A=r()*.35+g.phase;V=g.home.clone().add(new S(Math.cos(A)*2,0,Math.sin(A)*2))}else g.mode==="search"||g.mode==="investigate"||!F?(V=g.houndLastKnown.clone(),V.distanceToSquared(g.root.position)<2.2*2.2&&(g.houndSearchScan+=w,V.copy(g.root.position))):St&&F&&G>=5&&G<30?V=g.root.position.clone():V=g.tacticalGoalUntil>0?g.tacticalGoal.clone():R(g,!0);let J=V.x-g.root.position.x,it=V.z-g.root.position.z;if(z.phase!=="lunge"){for((g.routeTimer<=0||g.route.length===0||k!==z.phase)&&(g.route=Gh(g.root.position,V,t.obstacles),g.routeTimer=g.alerted?.65:1.5),g.routeTimer-=w;g.route.length&&g.route[0].distanceToSquared(g.root.position)<.4*.4;)g.route.shift();const A=g.route[0]||V;J=A.x-g.root.position.x,it=A.z-g.root.position.z}const wt=Math.hypot(J,it),mt=Math.hypot(V.x-g.root.position.x,V.z-g.root.position.z),Ft=z.phase==="lunge",re=Ft||!St&&mt>.45,nt=(g.mode==="search"||g.mode==="investigate")&&g.houndSearchScan>0&&mt<.45?g.heading+Math.sin(g.houndSearchScan*.8)*.9:g.alerted&&F&&(St||Ft)?K:wt>.025?Math.atan2(J,it):g.houndDrive.yaw,et=g.mode==="pursue"?me.runSpeed:g.mode==="patrol"?me.patrolSpeed:mt<8?me.stalkSpeed:me.runSpeed;Z.beganLunge&&g.houndDrive.beginLunge(K),k==="lunge"&&z.phase==="recover"&&g.houndDrive.endLunge();const Q=g.houndDrive.step(w,nt,re?et:0,re?mt:0,Ft);g.root.rotation.y=Q.yaw,g.heading=Q.yaw;let tt=!1;if(Q.speed*w>1e-5){for(const B of s){if(B===g||B.kind!=="hound"||!B.alive)continue;const q=g.root.position.x-B.root.position.x,ot=g.root.position.z-B.root.position.z,$=Math.hypot(q,ot);if($>=1.7||$<.001)continue;const Ut=(1.7-$)*2.2/$*w*6;g.houndPush.x+=q*Ut,g.houndPush.z+=ot*Ut}if(!Ft&&G<1.25&&G>.001){const B=(1.25-G)*3/G*w*6;g.houndPush.x-=L*B,g.houndPush.z-=P*B}g.houndPush.multiplyScalar(Math.exp(-5*w));const A=(Math.sin(Q.yaw)*Q.speed+g.houndPush.x)*w,M=(Math.cos(Q.yaw)*Q.speed+g.houndPush.z)*w;ki(t.obstacles,g.root.position.x+A,g.root.position.z,.44)||(g.root.position.x+=A,tt=!0),ki(t.obstacles,g.root.position.x,g.root.position.z+M,.44)||(g.root.position.z+=M,tt=!0),tt||(g.houndDrive.speed*=.6,g.houndDrive.yawRate+=(g.phase>Math.PI?1:-1)*4*w,g.routeTimer=0)}else g.houndPush.multiplyScalar(Math.exp(-5*w));const ut=Math.cos(g.root.rotation.y),yt=Math.sin(g.root.rotation.y),Zt=Math.atan2(L*ut-P*yt,L*yt+P*ut),Yt=g.root.position.y+g.body.position.y;g.houndTurretYaw=Zt,g.houndGunPitch=pe.clamp(Math.atan2(-(n.y-.72-(Yt+.25)),G),-.9,.35),g.houndHeadYaw=pe.clamp(Zt,-1.2,1.2),g.houndHeadPitch=pe.clamp(Math.atan2(-(n.y-.52-(Yt+.2)),G),-.6,.5),g.animate(r(),tt?1:0,w)}function U(g){const w=s.filter(L=>L.kind==="hound"&&!L.alive&&L.deathSink===0).sort((L,P)=>L.deathOrder-P.deathOrder);for(const L of w.slice(0,Math.max(0,w.length-5)))L.deathSink=.001;for(let L=s.length-1;L>=0;L--){const P=s[L];if(!P.alive){P.root.userData.dying=P.root.userData.dying+g;const it=P.root.userData.dying;let wt=!1;if(P.kind==="hound"){const mt=P.animateDeath(g);wt=mt.retire;const Ft=P.root.position.clone().add(new S((Math.random()-.5)*.35,P.body.position.y+.25,(Math.random()-.5)*.35));mt.impact&&(e.houndDown(),u(Ft,!0)),mt.smoke&&h(Ft),mt.spark&&!mt.impact&&u(Ft,!0)}else P.body.rotation.z=Math.min(1,it*2)*1.25,P.root.position.y-=g*1.4;(wt||P.kind==="gull"&&it>2.8)&&(P.disposeWreck(),i.remove(P.root),s.splice(L,1));continue}const G=n.x-P.root.position.x,F=n.z-P.root.position.z,z=Math.max(.001,Math.hypot(G,F));if(P.kind==="hound"){I(P,g,G,F,z);continue}z<31&&!P.alerted&&(P.alerted=!0,P.mode="pursue",P.routeTimer=0,d||(d=!0,a("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5)));let W=0,lt;if(P.alerted)if(P.kind==="gull"){const it=r()*.4+P.phase,wt=9;lt=new S(n.x+Math.cos(it)*wt,0,n.z+Math.sin(it)*wt)}else lt=new S(n.x,0,n.z);else{const it=r()*.32+P.phase;lt=P.home.clone().add(new S(Math.cos(it)*2,0,Math.sin(it)*2.5))}const vt=lt.x-P.root.position.x,_t=lt.z-P.root.position.z,Ht=Math.hypot(vt,_t);for((P.routeTimer<=0||P.route.length===0||P.lastPlayerPosition.distanceToSquared(lt)>12)&&(P.route=Gh(P.root.position,lt,t.obstacles),P.routeTimer=(P.alerted?.85:1.7)+Math.random()*.35,P.lastPlayerPosition.copy(lt)),P.routeTimer-=g;P.route.length&&P.route[0].distanceToSquared(P.root.position)<.32*.32;)P.route.shift();const k=P.route[0]||lt,Z=k.x-P.root.position.x,St=k.z-P.root.position.z,V=Math.hypot(Z,St),J=Ht>(P.alerted?P.kind==="gull"?2.1:2.3:.45);if(V>.03&&J){const it=P.speed*(P.alerted?1:.62),wt=Math.min(V,g*it),mt=Z/V*wt,Ft=St/V*wt;let re=!1;ki(t.obstacles,P.root.position.x+mt,P.root.position.z,.44)||(P.root.position.x+=mt,re=!0),ki(t.obstacles,P.root.position.x,P.root.position.z+Ft,.44)||(P.root.position.z+=Ft,re=!0),re?(W=1,P.heading=Math.atan2(mt,Ft)):P.routeTimer=0}if(P.root.rotation.y=pe.damp(P.root.rotation.y,P.alerted?Math.atan2(G,F):P.heading,5,g),P.animate(r(),W,g),P.shootTimer-=g,P.shootTimer<0&&P.alerted&&z<30&&o()){P.shootTimer=(P.kind==="gull"?1.4:2.1)+Math.random()*1.1;const it=P.root.position.clone().add(new S(0,P.kind==="gull"?2.8:1.15,0)),wt=new S(n.x,n.y-.2,n.z),mt=wt.clone().sub(it),Ft=mt.length(),re=mt.normalize();let D=!0;for(const nt of t.obstacles){const et=new Wi(it,re).intersectBox(new oi(new S(nt.minX,.01,nt.minZ),new S(nt.maxX,nt.height,nt.maxZ)),new S);if(et&&et.distanceTo(it)<Ft-.7){D=!1;break}}D&&(e.enemyShot(),c(it,wt.clone().add(new S((Math.random()-.5)*1.9,(Math.random()-.5)*1.6,(Math.random()-.5)*1.9)),!1),Math.random()<Math.max(.18,.46-z*.013)&&l(5+Math.round(Math.random()*4),1.35))}}}function E(){d=!1,f=-99,_=0,v=0}return{reset:E,provokeHound:p,hearGunshot:T,unobstructed:x,update:U,get shotCount(){return _},get meleeCount(){return v},get lastVolley(){return f}}}const Ts=new Se({color:2569274,metalness:.72,roughness:.41}),Co=new Se({color:9398338,metalness:.62,roughness:.51}),Xi=new Se({color:988957,metalness:.49,roughness:.47}),yn=new Se({color:8294807,metalness:.7,roughness:.42}),Gi=new Se({color:4017488,metalness:.78,roughness:.44}),Yi=new ae({color:16761468}),kv=new ae({color:1582379}),qu=new Se({color:2379106,metalness:.71,roughness:.16,transparent:!0,opacity:.81}),Hv=new On(1,1,1);function _e(i,t,e,n,s=Hv){const r=new rt(s,n);return r.position.set(...t),r.scale.set(...e),r.castShadow=!0,i.add(r),r}function vi(i,t,e,n,s){const r=e.clone().sub(t),o=new rt(new we(n,n,r.length(),8),s);return o.position.copy(t).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new S(0,1,0),r.normalize()),i.add(o),o}function $u(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#131e22",n.fillRect(0,0,e.width,e.height),n.strokeStyle="#7d9292",n.lineWidth=3,n.strokeRect(6,6,500,116),n.fillStyle="#e6e6dd",n.font="700 59px Impact,Arial Narrow,sans-serif",n.fillText(i,22,70),n.font="22px monospace",n.fillStyle="#d8a36b",n.fillText(t,22,106);const s=new Xe(e);return s.colorSpace=xe,new ae({map:s})}function Pa(i,t,e,n,s){const r=new Kt;r.position.set(n,0,s),r.rotation.y=t==="B"?-.26:t==="C"?.23:-.15,i.add(r),_e(r,[0,.08,0],[1.28,.16,.92],Ts),_e(r,[0,.28,0],[1.04,.36,.71],Gi),_e(r,[0,.78,0],[.8,1.02,.58],Xi),_e(r,[0,1.3,0],[.95,.15,.72],Gi);for(const m of[-1,1]){_e(r,[m*.49,.73,0],[.12,1.27,.72],Gi);for(const p of[-.27,.27])_e(r,[m*.5,.2,p],[.16,.12,.12],Co);for(let p=0;p<4;p++)_e(r,[m*.435,.6+p*.17,-.325],[.018,.08,.12],yn)}_e(r,[0,.83,.327],[.57,.69,.058],Ts),_e(r,[0,.97,.368],[.42,.29,.026],qu);for(let m=0;m<8;m++)_e(r,[-.19+m*.054,.96,.388],[.022,.17,.015],m%3?Xi:yn);for(let m=0;m<3;m++)_e(r,[0,.47+m*.07,.36],[.29,.017,.027],Co),_e(r,[.24,.46+m*.09,.37],[.048,.03,.018],yn);const o=[];for(const m of[-1,1]){const p=_e(r,[m*.28,1.34,.24],[.12,.035,.12],Yi);o.push(p);for(let T=0;T<4;T++)_e(r,[m*.17,.33+T*.1,.364],[.035,.025,.017],Yi)}for(let m=0;m<3;m++){const p=new vr([new S(-.33,.2,-.24-m*.06),new S(-.65,.1,-.35-m*.08),new S(-.8,.07,-.52-m*.09)]),T=new rt(new Fs(p,16,.025,6,!1),Zu());r.add(T)}const a=new rt(new Ce(.76,.19),$u(`UPLINK ${t}`,e.toUpperCase()));a.position.set(0,1.15,.384),r.add(a);const l=new Kt;l.position.set(0,1.35,-.12),r.add(l);const c=1.52,u=.24,h=.15;for(const m of[-1,1])for(const p of[-1,1]){vi(l,new S(m*u,0,p*u),new S(m*h,c,p*h),.027,yn);for(let T=0;T<5;T++){const y=T*c/5,x=(T+1)*c/5,R=u+(h-u)*T/5,C=u+(h-u)*(T+1)/5;vi(l,new S(m*R,y,p*R),new S(-m*C,x,p*C),.014,Gi)}}for(let m=.38;m<c;m+=.4){const p=u+(h-u)*m/c;vi(l,new S(-p,m,-p),new S(p,m,-p),.019,yn),vi(l,new S(-p,m,p),new S(p,m,p),.019,yn)}const d=new rt(new Mi(.36,24,16),new Se({color:7438730,roughness:.59,metalness:.68}));d.position.set(0,c+.4,0),d.castShadow=!0,l.add(d);const f=new rt(new sn(.365,.012,6,32),yn);f.rotation.x=Math.PI/2,f.position.copy(d.position),l.add(f),_e(l,[0,c+.77,0],[.1,.07,.1],Xi),vi(r,new S(-.43,1.34,-.16),new S(-.43,2.22,-.16),.028,yn);const _=_e(r,[-.43,2.22,-.16],[.2,.1,.15],Yi);o.push(_);const v=new bi(16756830,8,6,2);return v.position.set(0,1.42,.55),r.add(v),{id:t,name:e,pos:new S(n,0,s),group:r,lamps:o,light:v,cut:!1,progress:0}}function Zu(){return Xi}function Vv(i){const t=new Kt;t.position.set(32,0,26),t.rotation.y=-Math.PI/2,i.add(t),_e(t,[0,.14,1.2],[6.4,.28,4.6],Gi);for(let v of[-1,1]){for(let m of[-.9,1,2.5])vi(t,new S(v*3.1,.3,m),new S(v*3.1,1.15,m),.045,yn);vi(t,new S(v*3.1,1.14,-.9),new S(v*3.1,1.14,2.5),.04,yn)}for(let v of[-2.4,2.4])for(let m of[0,2.5])_e(t,[v,.42,m],[.24,.52,.24],Co);const e=new rt(new Ce(1.8,.42),$u("BERTH 4","EXTRACTION  /  07"));e.position.set(-2.15,1.3,2.25),t.add(e);const n=new rt(new we(.035,.035,1.2,8),yn);n.position.set(-2.15,.73,2.22),t.add(n);const s=new Kt;s.position.set(0,.28,-3.1),t.add(s);const r=new ks;r.moveTo(-2,-3.7),r.lineTo(2,-3.7),r.lineTo(2.05,2.55),r.quadraticCurveTo(1.65,3.65,0,4.15),r.quadraticCurveTo(-1.65,3.65,-2.05,2.55),r.closePath();const o=new es(r,{depth:.55,bevelEnabled:!0,bevelSize:.13,bevelThickness:.12,bevelSegments:2,curveSegments:18});o.rotateX(-Math.PI/2);const a=new rt(o,Xi);a.position.y=-.26,a.castShadow=!0,s.add(a),_e(s,[0,.36,-.1],[3.25,.12,7.65],Gi);const l=[new S(-1.78,.51,-3.8),new S(-2.03,.48,-2),new S(-2.04,.48,1.8),new S(-1.44,.48,3.37),new S(0,.48,3.91),new S(1.44,.48,3.37),new S(2.04,.48,1.8),new S(2.03,.48,-2),new S(1.78,.51,-3.8)],c=new vr(l,!1,"catmullrom",.26),u=new rt(new Fs(c,64,.31,12,!1),Zu());u.castShadow=!0,s.add(u);for(let v=-2.7;v<=2.6;v+=.8)for(const m of[-1.78,1.78])_e(s,[m,.65,v],[.11,.04,.16],Ts);_e(s,[0,.65,-1.5],[2.75,.23,1.4],Gi),_e(s,[0,1.16,-1.75],[2.38,.92,.16],qu),_e(s,[0,1.5,-2.3],[2.38,.13,1.15],Ts);for(const v of[-1.4,1.4]){vi(s,new S(v,.6,-2.2),new S(v,1.9,-.6),.045,yn);const m=_e(s,[v,.59,3.48],[.21,.13,.24],Yi);m.material=Yi}for(let v of[-.2,1.5,2.8])_e(s,[0,.65,v],[2.5,.07,.12],Co);_e(s,[0,.71,2.94],[1.5,.24,.36],Xi);for(const v of[-1.35,1.35])_e(s,[v,.57,3.34],[.18,.12,.18],Yi);for(let v=-3.2;v<3.2;v+=.55)_e(s,[0,.45,v],[1.05,.021,.04],Ts);const h=new vr([new S(-1.2,.45,-2.7),new S(-1.35,.6,-1),new S(-1.15,.65,.8)]),d=new rt(new Fs(h,22,.025,7,!1),Xi);s.add(d);const f=_e(s,[0,.14,-4.22],[.76,.87,.76],Ts);f.rotation.x=-.13;const _=new bi(16761726,14,8,2);return _.position.set(0,1.7,2.3),t.add(_),{dock:t,target:new S(29,0,20)}}function Gv(i){const t=[Pa(i,"A","YARD",1.5,7.5),Pa(i,"B","SHED",-2,-19.5),Pa(i,"C","QUAY",23,0)],e=Vv(i),n={relays:t,allCut:!1,boat:e.dock,boatTarget:e.target,closest(s,r){const a=t.filter(l=>!l.cut).map(l=>({type:"relay",relay:l,distance:Math.hypot(s.x-l.pos.x,s.z-l.pos.z),progress:l.progress})).sort((l,c)=>l.distance-c.distance)[0];if(a&&a.distance<=2.2){const l=a.relay.pos.x-s.x,c=a.relay.pos.z-s.z;if((-Math.sin(r)*l+-Math.cos(r)*c)/Math.max(.001,a.distance)>=.45||a.distance<.9)return a}if(n.allCut){const l=Math.hypot(s.x-e.target.x,s.z-e.target.z);if(l<=2.5)return{type:"extract",distance:l,progress:0}}return null},interact(s,r,o,a){const l=n.closest(s,r);if(l?.type==="extract")return{extract:!0,progress:1};if(!l||!o){for(const u of t)u.progress=Math.max(0,u.progress-a*1.6);return{progress:0}}const c=l.relay;if(c.progress=Math.min(1,c.progress+a/2.4),c.progress>=1){c.cut=!0,c.progress=1;for(const u of c.lamps)u.material=kv;return c.light.intensity=0,n.allCut=t.every(u=>u.cut),{cut:c,progress:1}}return{progress:c.progress}},update(s){for(const r of t)r.cut||(r.light.intensity=4.2+Math.sin(s*4.5)*1.4)},reset(){n.allCut=!1;for(const s of t){s.cut=!1,s.progress=0;for(const r of s.lamps)r.material=Yi}}};return n}class Wv{ctx=null;bus=null;staticBuffer=null;lastStep=0;_muted=!1;_volume=.8;get muted(){return this._muted}set muted(t){this._muted=t,this.bus&&this.bus.gain.setTargetAtTime(t?0:.65*this._volume,this.ctx.currentTime,.1)}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.bus&&this.bus.gain.setTargetAtTime(this._muted?0:.65*this._volume,this.ctx.currentTime,.08)}async start(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createGain();e.gain.value=this._muted?0:.65*this._volume,e.connect(t.destination),this.bus=e;const n=t.createBuffer(1,Math.floor(t.sampleRate*2),t.sampleRate),s=n.getChannelData(0);for(let d=0;d<s.length;d++)s[d]=(Math.random()*2-1)*(.7+.3*Math.random());this.staticBuffer=n;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=420;const a=t.createGain();a.gain.value=.13,r.connect(o).connect(a).connect(e),r.start();const l=t.createOscillator();l.type="sine",l.frequency.value=41.2;const c=t.createGain();c.gain.value=.075,l.connect(c).connect(e),l.start();const u=t.createOscillator();u.type="triangle",u.frequency.value=82.42;const h=t.createGain();h.gain.value=.012,u.connect(h).connect(e),u.start()}tone(t,e,n,s,r="sine",o=0){const a=this.ctx,l=this.bus;if(!a||!l)return;const c=a.createOscillator(),u=a.createGain(),h=a.currentTime+o;c.type=r,c.frequency.setValueAtTime(Math.max(1,t),h),c.frequency.exponentialRampToValueAtTime(Math.max(1,e),h+n),u.gain.setValueAtTime(.001,h),u.gain.exponentialRampToValueAtTime(Math.max(.002,s),h+.009),u.gain.exponentialRampToValueAtTime(.001,h+n),c.connect(u).connect(l),c.start(h),c.stop(h+n+.02)}noise(t,e,n=120,s=1e4,r=0){const o=this.ctx,a=this.bus;if(!o||!a||!this.staticBuffer)return;const l=o.createBufferSource();l.buffer=this.staticBuffer;const c=o.createBiquadFilter();c.type="highpass",c.frequency.value=n;const u=o.createBiquadFilter();u.type="lowpass",u.frequency.value=s;const h=o.createGain(),d=o.currentTime+r;h.gain.setValueAtTime(.001,d),h.gain.linearRampToValueAtTime(e,d+.004),h.gain.exponentialRampToValueAtTime(.001,d+t),l.connect(c).connect(u).connect(h).connect(a),l.start(d,Math.random()*1.2,t+.03),l.stop(d+t+.04)}shot(){this.noise(.2,.38,120,5e3),this.noise(.08,.35,800,1e4),this.tone(130,38,.19,.48,"triangle"),this.tone(920,85,.12,.075,"sawtooth",.008)}enemyShot(){this.noise(.23,.12,240,3700),this.tone(180,38,.24,.13,"sawtooth")}houndDown(){this.noise(.4,.18,90,1600),this.tone(175,44,.56,.19,"sawtooth")}houndWarning(t=!1){this.tone(t?510:890,t?180:650,t?.28:.46,.12,"sawtooth"),this.tone(1180,730,.1,.055,"triangle",.09)}impact(){this.noise(.095,.16,230,4200),this.tone(190,85,.11,.11,"triangle")}hit(){this.tone(1150,450,.15,.08,"square"),this.tone(650,210,.22,.08,"sine",.04)}reload(){for(let t=0;t<3;t++)this.noise(.055,.13,600,4e3,t*.27),this.tone(880,180,.075,.06,"triangle",t*.27)}empty(){this.tone(900,530,.046,.09,"square")}playerHit(){this.noise(.36,.26,150,1400),this.tone(108,40,.37,.17,"sine")}step(t){const e=this.ctx;e&&(e.currentTime-this.lastStep<(t?.25:.35)||(this.lastStep=e.currentTime,this.noise(.085,.053,90,900),this.tone(68,41,.08,.06,"triangle")))}wave(){this.tone(210,320,.28,.08,"sine"),this.tone(280,430,.4,.05,"sine",.2)}victory(){for(let t=0;t<5;t++)this.tone([146,196,247,330,392][t],[170,220,280,370,440][t],.32,.055,"sine",t*.12)}}function Xv(i,t){const e=new Map;function n(r,o){const a=document.getElementById("waypoint-layer"),l=(-o*180/Math.PI%360+360)%360;document.getElementById("compass-heading").textContent=Math.round(l).toString().padStart(3,"0");const c=document.getElementById("compass-tape"),u=["N","NE","E","SE","S","SW","W","NW"];c.textContent=Array.from({length:9},(_,v)=>u[((Math.round(l/45)+v-4)%8+8)%8]).join("    ·    ");const h=i.relays.map(_=>({id:_.id,name:_.name,position:_.pos,done:_.cut,active:!_.cut})).concat([{id:"E",name:"EXTRACT",position:i.boatTarget,done:!1,active:i.allCut}]),d=document.getElementById("compass-marks"),f=Math.min(430,innerWidth*.4);d.innerHTML=h.filter(_=>_.active&&!_.done).map(_=>{const v=_.position.x-r.x,m=_.position.z-r.z,p=-Math.atan2(v,-m),y=Math.atan2(Math.sin(p-o),Math.cos(p-o))*180/Math.PI;if(Math.abs(y)>62)return"";const x=Math.round(f*.5-y/62*f*.5),R=Math.round(Math.hypot(v,m));return`<div class="compass-objective" style="left:${x}px"><i></i><b>${_.id}</b><small>${R}m</small></div>`}).join("");for(const _ of h){let v=e.get(_.id);if(v||(v=document.createElement("div"),v.className="waypoint",a.appendChild(v),e.set(_.id,v)),_.done||!_.active){v.classList.add("hidden");continue}v.classList.remove("hidden"),v.classList.toggle("dim",_.id!=="E"&&_.id!==i.relays.find(C=>!C.cut)?.id);const m=Math.hypot(_.position.x-r.x,_.position.z-r.z),p=_.position.clone();p.y=_.id==="E"?2.6:2.5;const T=p.project(t),y=T.z<1&&T.z>-1&&Math.abs(T.x)<.93&&Math.abs(T.y)<.83,x=pe.clamp((T.x*.5+.5)*innerWidth,40,innerWidth-40),R=pe.clamp((-T.y*.5+.5)*innerHeight,75,innerHeight-100);v.classList.toggle("offscreen",!y),v.style.transform=`translate(${Math.round(x+(_.id==="B"?-35:_.id==="C"?35:0))}px,${Math.round(R+(_.id==="B"?29:_.id==="C"?50:0))}px)`,v.innerHTML=`<b>${_.id==="E"?"↗":_.id}</b><span>${_.id==="E"?"EX":_.id} ${Math.round(m)}m</span>`}}function s({state:r,player:o,yaw:a,radioTimer:l,hitMarker:c,damageFlash:u,aimHold:h}){if(r!=="playing")return;document.getElementById("h-wave").textContent=`RELAYS ${o.relays} / 3`,document.getElementById("h-health").innerHTML=`${Math.ceil(o.hp)} <small>HP</small>`,document.getElementById("h-healthbar").style.width=o.hp+"%",document.getElementById("h-healthbar").classList.toggle("critical",o.hp<30),document.getElementById("h-stamina").textContent="STAMINA  "+"▰".repeat(Math.ceil(o.stamina*5))+"▱".repeat(5-Math.ceil(o.stamina*5)),document.getElementById("h-ammo").textContent=String(o.ammo).padStart(2,"0"),document.getElementById("h-reserve").textContent="/ "+o.reserve,document.getElementById("h-enemies").textContent=`RELAYS ${i.relays.map(v=>v.cut?"■":"□").join(" ")}  ${o.relays}/3`,document.querySelector(".radio").style.opacity=l>0?"1":"0",document.getElementById("h-objective").textContent=i.allCut?"REACH THE BOAT":"CUT THE THREE UPLINK RELAYS";const d=i.closest(new S(o.x,0,o.z),a),f=document.getElementById("interaction"),_=document.getElementById("btn-use");f.classList.toggle("hidden",!d),_.classList.toggle("hidden",!d||d.type==="extract"),d&&(document.getElementById("interact-label").textContent=d.type==="extract"?"BOAT EXTRACTION READY":`HOLD E / USE — CUT UPLINK ${d.relay.id}`,document.getElementById("interact-detail").textContent=d.type==="extract"?"BOARDING AUTOMATICALLY":`DISABLE SECURITY UPLINK · ${Math.round(d.progress*100)}%`,document.getElementById("interact-fill").style.width=`${d.progress*100}%`),n(o,a),document.getElementById("hitmarker").style.opacity=c>0?"1":"0",document.getElementById("damage").style.opacity=String(Math.max(0,u)),document.getElementById("crosshair").classList.toggle("aiming",h),document.getElementById("h-ammo-bars").innerHTML=Array.from({length:Math.ceil(o.ammo/3)},(v,m)=>`<i style="opacity:${m===Math.ceil(o.ammo/3)-1&&o.ammo%3?.6:1}"></i>`).join("")}return{update:s}}function Yv(i){const t=[];function e(h,d,f){const _=new Float32Array([...h.toArray(),...d.toArray()]),v=new Oe;v.setAttribute("position",new nn(_,3));const m=new Wl({color:f?16765344:16737862,transparent:!0,opacity:.95,depthWrite:!1,blending:Zi}),p=new fo(v,m);i.add(p),t.push({obj:p,vel:new S,life:.085,max:.085})}const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d"),r=s.createRadialGradient(64,64,2,64,64,62);r.addColorStop(0,"rgba(190,194,187,.38)"),r.addColorStop(.4,"rgba(109,118,117,.25)"),r.addColorStop(1,"rgba(72,79,80,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);const o=new Xe(n);function a(h){const d=new ir(new Vl({map:o,transparent:!0,opacity:.75,depthWrite:!1,color:12697778}));d.position.copy(h);const f=.27+Math.random()*.2;d.scale.set(f,f,1),i.add(d),t.push({obj:d,vel:new S((Math.random()-.5)*.2,.45+Math.random()*.25,(Math.random()-.5)*.2),life:1.7,max:1.7,smoke:!0})}function l(h,d=!1){for(let f=0;f<8;f++){const _=new rt(new On(.02+.025*Math.random(),.02,.06),new ae({color:d?16744535:16763016,transparent:!0,opacity:1}));_.position.copy(h),i.add(_),t.push({obj:_,vel:new S((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5),life:.3+Math.random()*.33,max:.65})}}function c(h){for(let d=t.length-1;d>=0;d--){const f=t[d];f.life-=h,f.obj.position.addScaledVector(f.vel,h),f.smoke||(f.vel.y-=h*14),f.smoke&&f.obj instanceof ir&&(f.obj.material.opacity=.6*Math.max(0,f.life/f.max),f.obj.scale.multiplyScalar(1+h*.45)),f.obj instanceof rt&&f.obj.material instanceof ae&&(f.obj.material.opacity=Math.max(0,f.life/f.max)),f.life<=0&&(i.remove(f.obj),f.obj instanceof fo&&f.obj.geometry.dispose(),f.obj instanceof ir&&f.obj.material.dispose(),t.splice(d,1))}}function u(){for(const h of t)if(i.remove(h.obj),h.obj instanceof fo&&h.obj.geometry.dispose(),h.obj instanceof ir&&h.obj.material.dispose(),h.obj instanceof rt)if(h.obj.geometry.dispose(),Array.isArray(h.obj.material))for(const d of h.obj.material)d.dispose();else h.obj.material.dispose();t.length=0}return{tracer:e,smoke:a,sparks:l,update:c,clear:u,get smokeCount(){return t.filter(h=>h.smoke).length}}}function qv({ui:i,mobile:t,getState:e,onStart:n,onResume:s,onPause:r,bindTouchControls:o,settings:a,onSensitivity:l,onVolume:c,onFov:u,saveSettings:h}){function d(){i.innerHTML=`
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
 `,document.getElementById("primary").addEventListener("click",()=>{["menu","dead","victory"].includes(e())?n():s()}),document.getElementById("pause-button").addEventListener("click",()=>r());const m=document.getElementById("settings-panel"),p=y=>{m.classList.remove("hidden"),document.getElementById("panel-heading").textContent=y?"CONTROLS":"SETTINGS",document.getElementById("settings-content").classList.toggle("hidden",y),document.getElementById("controls-content").classList.toggle("hidden",!y)};document.getElementById("settings-button").addEventListener("click",()=>p(!1)),document.getElementById("controls-button").addEventListener("click",()=>p(!0)),document.getElementById("panel-close").addEventListener("click",()=>m.classList.add("hidden"));const T=(y,x,R,C)=>{const I=document.getElementById(y),U=document.getElementById(x);I.value=String(y.includes("volume")?a().volume:y.includes("fov")?a().fov:a().sensitivity),U.textContent=R(+I.value),I.addEventListener("input",()=>{const E=+I.value;C(E),U.textContent=R(E),h()})};T("setting-sensitivity","sensitivity-output",y=>y.toFixed(2)+"×",y=>{l(y)}),T("setting-volume","volume-output",y=>Math.round(y*100)+"%",y=>{c(y)}),T("setting-fov","fov-output",y=>y+"°",y=>{u(y)}),o()}d();function f(v,m){document.getElementById("intro-overlay").classList.add("hidden");const p=document.getElementById("menu");p.classList.remove("off"),document.getElementById("hud").classList.add("hidden");const T=p.querySelector(".eyebrow"),y=p.querySelector("p"),x=document.getElementById("primary"),R=document.getElementById("menu-secondary");v==="menu"?(T.innerHTML="<b>B4</b> PORT AUTHORITY BREACH UNIT",y.innerHTML="The port’s security net has gone feral. Cut its three uplinks. Reach the boat.",x.innerHTML="DEPLOY <span>↗</span>",R.textContent=t?"LEFT STICK MOVE · SWIPE LOOK · FIRE TO SHOOT":"WASD MOVE · MOUSE AIM & FIRE · R RELOAD"):v==="paused"?(T.innerHTML="<b>Ⅱ</b> OPERATION SUSPENDED",y.innerHTML="MAINTAIN YOUR POSITION.<br>RESUME WHEN READY.",x.innerHTML="RESUME <span>↗</span>",R.textContent=`RELAYS ${m.relays}/3  ·  ${m.kills} CONFIRMED  ·  ${m.hp} HP`):v==="dead"?(T.innerHTML="<b>×</b> OPERATIVE DOWN",y.innerHTML="SIGNAL LOST.<br>MISSION TERMINATED.",x.innerHTML="REDEPLOY <span>↗</span>",R.textContent=`${m.kills} HOSTILES NEUTRALIZED · RELAYS ${m.relays}/3`):(T.innerHTML="<b>◆</b> MISSION COMPLETE",y.innerHTML="The Harbormaster is dark.<br>Extraction complete.",x.innerHTML="REPLAY OPERATION <span>↗</span>",R.textContent=`TIME ${Math.floor(m.runTime/60).toString().padStart(2,"0")}:${Math.floor(m.runTime%60).toString().padStart(2,"0")} · ACCURACY ${m.shots?Math.round(m.hitsCount/m.shots*100):0}% · MACHINES ${m.kills} · RETRIES ${m.retries}`)}function _(){document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.remove("hidden")}return{showMenu:f,hideMenu:_,radio:v=>{document.getElementById("h-radio").textContent=v},waveText:v=>{const m=document.getElementById("wave-warning");m.textContent=v,m.classList.remove("show"),m.offsetWidth,m.classList.add("show")}}}class $v{constructor(t,e,n){this.canvas=t,this.mobile=e,this.actions=n}canvas;mobile;actions;keys=new Set;shooting=!1;aimHold=!1;interactHold=!1;touchMove={x:0,y:0};jumpRequest=!1;gamepad={x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1};gamepadPrev=new Set;lookPointer=null;lastTouch={x:0,y:0};releaseTouchControls=()=>{};clearHeld(){this.keys.clear(),this.shooting=!1,this.aimHold=!1,this.interactHold=!1,this.touchMove={x:0,y:0},this.jumpRequest=!1,this.lookPointer=null,this.releaseTouchControls()}pollGamepad(){const t=navigator.getGamepads?.()?.find(s=>s?.connected);if(!t){Object.assign(this.gamepad,{x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1}),this.gamepadPrev.clear();return}const e=s=>{const r=t.axes[s]||0;return Math.abs(r)<.17?0:Math.sign(r)*(Math.abs(r)-.17)/.83};this.gamepad.x=e(0),this.gamepad.y=-e(1),this.gamepad.rx=e(2),this.gamepad.ry=e(3);const n=s=>t.buttons[s]?.pressed===!0;this.gamepad.fire=n(7),this.gamepad.aim=n(6),this.gamepad.use=n(3),this.gamepad.sprint=n(10),this.gamepad.crouch=n(1);for(const s of[0,2,9]){const r=n(s);r&&!this.gamepadPrev.has(s)&&(s===0&&(this.jumpRequest=!0),s===2&&this.actions.reload(),s===9&&(this.actions.state()==="playing"?this.actions.pause():this.actions.state()==="paused"&&this.actions.resume())),r?this.gamepadPrev.add(s):this.gamepadPrev.delete(s)}}bindTouchControls(){const t=document.getElementById("btn-use");t.addEventListener("pointerdown",h=>{h.preventDefault();try{t.setPointerCapture(h.pointerId)}catch{}this.interactHold=!0,t.classList.add("active")});const e=()=>{this.interactHold=!1,t.classList.remove("active")};for(const h of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(h,e);document.getElementById("btn-reload").addEventListener("pointerdown",h=>{h.preventDefault(),this.actions.reload()}),document.getElementById("btn-jump").addEventListener("pointerdown",h=>{h.preventDefault(),this.jumpRequest=!0});const n=document.getElementById("btn-fire"),s=document.getElementById("btn-aim");for(const[h,d]of[[n,"shooting"],[s,"aimHold"]]){h.addEventListener("pointerdown",f=>{f.preventDefault();try{h.setPointerCapture(f.pointerId)}catch{}this[d]=!0,d==="shooting"&&this.actions.shoot(),h.classList.add("active")});for(const f of["pointerup","pointercancel","lostpointercapture"])h.addEventListener(f,()=>{this[d]=!1,h.classList.remove("active")})}const r=document.getElementById("movezone"),o=document.getElementById("joystick");let a=null,l={x:0,y:0};const c=(h,d)=>{let f=(h-l.x)/57,_=(d-l.y)/57;const v=Math.max(1,Math.hypot(f,_));f/=v,_/=v,this.touchMove={x:f,y:-_},o.style.transform=`translate(${f*40}px,${_*40}px)`};r.addEventListener("pointerdown",h=>{if(h.preventDefault(),a!==null)return;a=h.pointerId;try{r.setPointerCapture(h.pointerId)}catch{}const d=r.getBoundingClientRect();l={x:d.left+d.width/2,y:d.top+d.height/2},c(h.clientX,h.clientY)}),r.addEventListener("pointermove",h=>{h.pointerId===a&&c(h.clientX,h.clientY)});const u=h=>{a===h.pointerId&&(a=null,this.touchMove={x:0,y:0},o.style.transform="")};for(const h of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(h,u);this.releaseTouchControls=()=>{e(),this.shooting=!1,this.aimHold=!1,n.classList.remove("active"),s.classList.remove("active"),a=null,o.style.transform=""},this.mobile&&document.body.classList.add("is-mobile")}bindWindow(){window.addEventListener("keydown",t=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code),!t.repeat){if(t.code==="KeyR"&&this.actions.reload(),t.code==="KeyF"&&this.actions.melee(),t.code==="Escape"&&!document.getElementById("settings-panel").classList.contains("hidden")){document.getElementById("settings-panel").classList.add("hidden");return}(t.code==="Escape"||t.code==="KeyP")&&this.actions.state()==="playing"&&this.actions.pause(),t.code==="Enter"&&["menu","paused","dead","victory"].includes(this.actions.state())&&document.getElementById("primary").click()}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.clearHeld(),this.actions.state()==="playing"&&!this.mobile&&this.actions.pause()}),window.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{!this.mobile&&document.pointerLockElement!==this.canvas&&this.actions.state()==="playing"&&this.actions.pause()}),this.canvas.addEventListener("mousemove",t=>{this.actions.state()!=="playing"||document.pointerLockElement!==this.canvas||this.actions.look(t.movementX,t.movementY,.0022*this.actions.sensitivity(),1.35)}),this.canvas.addEventListener("mousedown",t=>{this.actions.state()==="playing"&&(!this.mobile&&document.pointerLockElement!==this.canvas&&this.actions.requestPointerLock(),t.button===0&&(this.shooting=!0,this.actions.shoot()),t.button===2&&(this.aimHold=!0))}),window.addEventListener("mouseup",t=>{t.button===0&&(this.shooting=!1),t.button===2&&(this.aimHold=!1)}),this.canvas.addEventListener("pointerdown",t=>{if(!(!this.mobile||this.actions.state()!=="playing"||this.lookPointer!==null)){this.lookPointer=t.pointerId,this.lastTouch={x:t.clientX,y:t.clientY};try{this.canvas.setPointerCapture(t.pointerId)}catch{}}}),this.canvas.addEventListener("pointermove",t=>{if(!this.mobile||t.pointerId!==this.lookPointer)return;const e=t.clientX-this.lastTouch.x,n=t.clientY-this.lastTouch.y;this.actions.look(e,n,.0045,1.28),this.lastTouch={x:t.clientX,y:t.clientY}});for(const t of["pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(t,e=>{e.pointerId===this.lookPointer&&(this.lookPointer=null)});window.addEventListener("touchmove",t=>{this.actions.state()==="playing"&&t.preventDefault()},{passive:!1}),window.addEventListener("touchstart",t=>{this.actions.state()==="playing"&&t.touches.length>1&&t.preventDefault()},{passive:!1})}}const Zv=document.getElementById("app"),qi=document.getElementById("viewport"),Kv=document.getElementById("overlay"),ns=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),jv=matchMedia("(prefers-reduced-motion: reduce)").matches,tc=ns||jv||new URLSearchParams(location.search).has("fast");let qn;try{qn=new f1({canvas:qi,antialias:!ns,alpha:!1,powerPreference:"high-performance"})}catch(i){throw Zv.innerHTML='<p style="padding:2rem;color:white">WebGL is required to run this game.</p>',i}qn.setPixelRatio(Math.min(window.devicePixelRatio,tc?1:1.65));qn.setSize(innerWidth,innerHeight);qn.toneMapping=qh;qn.toneMappingExposure=1.24;qn.outputColorSpace=xe;qn.shadowMap.enabled=!tc;qn.shadowMap.type=Xh;const wi=new Bf,Ae=new on(ns?77:74,innerWidth/innerHeight,.055,250);wi.add(Ae);const Sr=tv(wi,tc),Sn=new lv(Ae),Ke=new Wv,ec=Gv(wi),Jv=Xv(ec,Ae),En=Yv(wi),Ku=new bi(16113105,6.5,8,1.4);Ku.position.set(.45,.45,.9);Ae.add(Ku);const ju=new bi(12506580,3.3,6,1.4);ju.position.set(-1,.1,-.4);Ae.add(ju);let ze="menu",ar=0,Tl=3.5,Al=!1;const Pt={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1};let nc=0,ic=0,sc=0,Rl=0,Po=-99,Er=1,Cs=.8,Ji=ns?77:74;try{const i=JSON.parse(localStorage.getItem("saltline.settings.v1")||"{}");Er=pe.clamp(Number(i.sensitivity)||1,.2,3),Cs=pe.clamp(typeof i.volume=="number"?i.volume:.8,0,1),Ji=pe.clamp(Number(i.fov)||Ji,60,95)}catch{}const Qv=()=>localStorage.setItem("saltline.settings.v1",JSON.stringify({sensitivity:Er,volume:Cs,fov:Ji}));let Ln=-Math.PI/2,$i=-.025,an=0,ni=0,Lo=0,Io=0,br=0,Do=0,Uo=0,No=0,nr=!1;const oe=new $v(qi,ns,{state:()=>ze,sensitivity:()=>Er,look:(i,t,e,n)=>{Ln-=i*e,$i=Math.max(-n,Math.min(n,$i-t*e))},shoot:()=>id(),reload:()=>nx(),melee:()=>sx(),pause:()=>td(),resume:()=>ed(),requestPointerLock:()=>rc()}),Os=[],Cl=Bv({scene:wi,mission:ec,player:Pt,enemies:Os,sound:Ke,getTime:()=>an,getYaw:()=>Ln,isHeld:()=>oe.keys.has("KeyE")||oe.interactHold||oe.gamepad.use,radio:Rr,waveText:ex,onVictory:()=>nd(!0)}),wr=zv({scene:wi,world:Sr,sound:Ke,player:Pt,enemies:Os,getTime:()=>an,isPlaying:()=>ze==="playing",radio:Rr,hurtPlayer:rx,tracer:En.tracer,sparks:En.sparks,smoke:En.smoke}),Pl=new Pp;Pl.far=130;const Vo=qv({ui:Kv,mobile:ns,getState:()=>ze,onStart:tx,onResume:ed,onPause:td,bindTouchControls:()=>oe.bindTouchControls(),settings:()=>({sensitivity:Er,volume:Cs,fov:Ji}),onSensitivity:i=>{Er=i},onVolume:i=>{Cs=i,Ke.setVolume(Cs)},onFov:i=>{Ji=i},saveSettings:Qv});function Ju(i){Vo.showMenu(i,{relays:Pt.relays,kills:Pt.kills,hp:Pt.hp,runTime:nc,shots:ic,hitsCount:sc,retries:Rl}),Sn.root.visible=!1}function Qu(){Vo.hideMenu(),Sn.root.visible=!0}function tx(){ze==="dead"&&Rl++,Os.forEach(e=>{e.disposeWreck(),wi.remove(e.root)}),Os.length=0,En.clear(),Object.assign(Pt,{x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1}),ec.reset(),nc=0,ic=0,sc=0,wr.reset(),oe.clearHeld(),Po=-99,Cl.reset(),Ln=-Math.PI/2,$i=-.04,Do=0,br=0,an=0,ni=0,ze="intro",ar=0,Tl=Rl>0?1.3:3.5,Al=!1,document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.add("hidden"),document.getElementById("intro-overlay").classList.remove("hidden"),document.getElementById("intro-curtain").style.opacity="1",Sn.root.visible=!1,Ke.start().then(()=>Ke.setVolume(Cs)),Cl.spawnPatrol(),rc()}function rc(){!ns&&document.pointerLockElement!==qi&&qi.requestPointerLock?.().catch(()=>{}),qi.focus()}function td(){ze==="playing"&&(ze="paused",oe.clearHeld(),document.pointerLockElement===qi&&document.exitPointerLock(),Ju("paused"))}function ed(){ze==="paused"&&(ze="playing",Qu(),Ke.start(),rc())}function nd(i){ze=i?"victory":"dead",oe.clearHeld(),document.pointerLockElement===qi&&document.exitPointerLock(),i&&Ke.victory(),Ju(i?"victory":"dead")}function Rr(i,t=4){No=t,Vo.radio(i)}function ex(i){Vo.waveText(i)}function nx(){ze!=="playing"||Pt.reloading||Pt.ammo===30||Pt.reserve<=0||(Pt.reloading=!0,Do=1.45,Sn.reload(),Ke.reload(),Rr("CHANGING MAGAZINE.",1.3))}function ix(i){const t=new S(Pt.x,Pt.y,Pt.z);let e=65;for(const n of Sr.obstacles){const s=new S(n.minX,0,n.minZ),r=new S(n.maxX,n.height,n.maxZ),a=new Wi(t,i).intersectBox(new oi(s,r),new S);if(a){const l=a.distanceTo(t);l<e&&(e=l)}}return t.addScaledVector(i,e)}function id(){if(ze!=="playing"||Pt.reloading||br>0)return;if(Pt.ammo<=0){Uo<=0&&(Ke.empty(),Uo=.22);return}Pt.ammo--,ic++,br=.105,Sn.shoot(),Ke.shot(),ni=Math.max(ni,.055),wr.hearGunshot();const i=oe.aimHold?.0045:.013,t=new S((Math.random()-.5)*i,(Math.random()-.5)*i,-1).normalize().applyQuaternion(Ae.quaternion),e=Ae.getWorldPosition(new S);Pl.set(e,t);const n=Os.filter(a=>a.alive).flatMap(a=>a.targetable),s=Pl.intersectObjects(n,!1),r=ix(t),o=r.distanceTo(e);if(s.length&&s[0].distance<o+.04){const a=s[0],l=a.object.userData.enemy,c=a.object.userData.enemyPart==="head";l.damage(c?92:36,t,c?"weak":"body"),wr.provokeHound(l),sc++,l.lastHitAt=an,Io=.2,Ke.hit(),En.sparks(a.point,!0),l.alive||(Pt.kills++,Pt.score+=c?150:100,Rr(l.kind==="gull"?"GULL DOWN. AIRSPACE CLEARER.":"HOUND DOWN. KEEP MOVING.",1.5)),En.tracer(e.clone().addScaledVector(t,.6),a.point,!0)}else En.sparks(r,!1),Ke.impact(),En.tracer(e.clone().addScaledVector(t,.6),r,!0)}function sx(){if(ze!=="playing")return;const i=Os.filter(t=>t.alive).map(t=>({e:t,d:Math.hypot(t.root.position.x-Pt.x,t.root.position.z-Pt.z)})).sort((t,e)=>t.d-e.d)[0];if(Sn.kick=Math.max(Sn.kick,.35),i?.d<2.8){const t=new S(i.e.root.position.x-Pt.x,0,i.e.root.position.z-Pt.z).normalize();i.e.damage(65,t,"body"),wr.provokeHound(i.e),Ke.hit(),En.sparks(i.e.root.position.clone().add(new S(0,1.1,0)),!0),i.e.alive||Pt.kills++}else Ke.empty()}function rx(i,t){return ze!=="playing"||an-Po<t?!1:(Pt.hp=Math.max(0,Pt.hp-i),Po=an,Lo=.62,ni=.08,Ke.playerHit(),Pt.hp===0&&nd(!1),!0)}function ox(i){let t=0,e=0;(oe.keys.has("KeyW")||oe.keys.has("ArrowUp"))&&t++,(oe.keys.has("KeyS")||oe.keys.has("ArrowDown"))&&t--,(oe.keys.has("KeyD")||oe.keys.has("ArrowRight"))&&e++,(oe.keys.has("KeyA")||oe.keys.has("ArrowLeft"))&&e--,t+=oe.touchMove.y+oe.gamepad.y,e+=oe.touchMove.x+oe.gamepad.x;const n=Math.hypot(t,e);nr=n>.05,n>1&&(t/=n,e/=n);const s=(oe.keys.has("ShiftLeft")||oe.keys.has("ShiftRight")||oe.gamepad.sprint)&&t>.1&&Pt.stamina>.01,r=oe.keys.has("ControlLeft")||oe.keys.has("KeyC")||oe.gamepad.crouch,o=(r?2.2:s?7.8:4.65)*(Pt.ads?.67:1);if(nr){const c=(e*Math.cos(Ln)-t*Math.sin(Ln))*o*i,u=(-e*Math.sin(Ln)-t*Math.cos(Ln))*o*i;ki(Sr.obstacles,Pt.x+c,Pt.z)||(Pt.x+=c),ki(Sr.obstacles,Pt.x,Pt.z+u)||(Pt.z+=u),Math.abs(Pt.y-(r?1.16:1.72))<.25&&Ke.step(s)}Pt.stamina=Math.min(1,Math.max(0,Pt.stamina+(s&&nr?-i*.16:i*.12))),an-Po>5&&Pt.hp<100&&(Pt.hp=Math.min(100,Pt.hp+i*3.2)),(oe.keys.has("Space")||oe.jumpRequest)&&Pt.y<=1.73&&Pt.vY<=0&&(Pt.vY=6.4),oe.jumpRequest=!1,Pt.vY-=17*i,Pt.y=Math.max(r?1.18:1.72,Pt.y+Pt.vY*i),(Pt.y===1.72||Pt.y===1.18)&&(Pt.vY=0),Pt.ads=oe.aimHold||oe.gamepad.aim,Ln-=oe.gamepad.rx*i*2.2,$i=Math.max(-1.35,Math.min(1.35,$i-oe.gamepad.ry*i*1.7)),ni>0&&(ni=Math.max(0,ni-i*.45));const a=(Math.random()-.5)*ni,l=(Math.random()-.5)*ni;Ae.rotation.order="YXZ",Ae.rotation.set($i+l,Ln+a,0),Ae.position.set(Pt.x,Pt.y+(Pt.y<=1.73&&nr?Math.sin(an*(s?13:8))*.025:0),Pt.z),Ae.fov=pe.damp(Ae.fov,Pt.ads?52:Ji,10,i),Ae.updateProjectionMatrix(),Sn.update(i,an,nr?1:0,s,Pt.ads)}function ax(){qn.setSize(innerWidth,innerHeight),Ae.aspect=innerWidth/innerHeight,Ae.updateProjectionMatrix()}window.addEventListener("resize",ax);oe.bindWindow();Ae.position.set(Pt.x,Pt.y,Pt.z);Ae.rotation.order="YXZ";Ae.rotation.set($i,Ln,0);const lx=new Cp;function cx(i){if(an+=i,Sr.tick(i,an,Pt.x,Pt.z),ze==="intro"){ar+=i;const t=Math.min(1,ar/Tl),e=t*t*(3-2*t);Ae.position.set(-34+e*2,1.72+(1-e)*.85,6+(1-e)*1.1),Ae.rotation.order="YXZ",Ae.rotation.set(-.12+t*.08,-Math.PI/2,0),Ae.fov=pe.lerp(57,Ji,e),Ae.updateProjectionMatrix();const n=document.getElementById("intro-curtain");n.style.opacity=String(Math.max(0,1-ar/.55)),!Al&&ar>Math.min(.8,Tl*.35)&&(Al=!0,Rr("BREACHER, THIS IS CONTROL. THE HARBORMASTER HOLDS THE BERTH. CUT THREE UPLINKS — YARD, SHED, QUAY.",8)),t>.77&&(document.getElementById("hud").classList.remove("hidden"),Sn.root.visible=!0),t>=1&&(ze="playing",document.getElementById("intro-overlay").classList.add("hidden"),Qu()),En.update(i)}else if(ze==="playing"){if((oe.shooting||oe.gamepad.fire)&&id(),Pt.reloading&&(Do-=i,Do<=0)){const t=Math.min(Pt.reserve,30-Pt.ammo);Pt.ammo+=t,Pt.reserve-=t,Pt.reloading=!1}br=Math.max(0,br-i),Uo=Math.max(0,Uo-i),Io=Math.max(0,Io-i),Lo=Math.max(0,Lo-i*1.5),No>0&&(No-=i),nc+=i,Cl.update(i),ox(i),wr.update(i),En.update(i)}else ze==="menu"&&(Sn.root.visible=!1,Ae.position.set(-34+Math.sin(an*.085)*.4,1.8,6+Math.sin(an*.12)*.55),Ae.rotation.set(-.085,-Math.PI/2+Math.sin(an*.14)*.035,0),Sn.root.position.set(.68,-.645,-.91),Sn.root.rotation.set(0,.16,0)),En.update(i)}function sd(){requestAnimationFrame(sd),oe.pollGamepad();let t=Math.min(lx.getDelta(),.24);for(;t>1e-5;){const e=Math.min(.04,t);cx(e),t-=e}Jv.update({state:ze,player:Pt,yaw:Ln,radioTimer:No,hitMarker:Io,damageFlash:Lo,aimHold:oe.aimHold}),qn.render(wi,Ae)}sd();
