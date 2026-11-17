(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ol="180",Sd=0,xc=1,bd=2,nu=1,iu=2,si=3,Ei=0,sn=1,Fe=2,Mi=0,Cs=1,Ki=2,yc=3,Mc=4,Ed=5,Hi=100,wd=101,Td=102,Ad=103,Rd=104,Cd=200,Pd=201,Ld=202,Id=203,Oa=204,Ba=205,Dd=206,Ud=207,Nd=208,Fd=209,Od=210,Bd=211,zd=212,kd=213,Hd=214,za=0,ka=1,Ha=2,Is=3,Va=4,Ga=5,Wa=6,Xa=7,su=0,Vd=1,Gd=2,Si=0,Wd=1,Xd=2,Yd=3,ru=4,qd=5,$d=6,Zd=7,ou=300,Ds=301,Us=302,bo=303,Ya=304,Go=306,$n=1e3,Gi=1001,qa=1002,_n=1003,Kd=1004,Or=1005,Gn=1006,jo=1007,Wi=1008,Zn=1009,au=1010,lu=1011,vr=1012,Bl=1013,ji=1014,Wn=1015,ks=1016,zl=1017,kl=1018,xr=1020,cu=35902,hu=35899,uu=1021,du=1022,On=1023,yr=1026,Mr=1027,Hl=1028,Vl=1029,fu=1030,Gl=1031,Wl=1033,go=33776,_o=33777,vo=33778,xo=33779,$a=35840,Za=35841,Ka=35842,ja=35843,Ja=36196,Qa=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,vl=36283,xl=36284,yl=36285,Ml=36286,jd=3200,Jd=3201,pu=0,Qd=1,xi="",xe="srgb",Ns="srgb-linear",Eo="linear",Me="srgb",rs=7680,Sc=519,tf=512,ef=513,nf=514,mu=515,sf=516,rf=517,of=518,af=519,Sl=35044,bc="300 es",Xn=2e3,wo=2001;class Hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const fr=Math.PI/180,Sr=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Xl(i,t){return(i%t+t)%t}function lf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cf(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function hf(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function uf(i,t=1){return t-Math.abs(Xl(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mf(i,t){return i+Math.random()*(t-i)}function gf(i){return i*(.5-Math.random())}function _f(i){i!==void 0&&(Ec=i);let t=Ec+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vf(i){return i*fr}function xf(i){return i*Sr}function yf(i){return(i&i-1)===0&&i!==0}function Mf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:fr,RAD2DEG:Sr,generateUUID:qn,clamp:se,euclideanModulo:Xl,mapLinear:lf,inverseLerp:cf,lerp:pr,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:vf,radToDeg:xf,isPowerOfTwo:yf,ceilPowerOfTwo:Mf,floorPowerOfTwo:Sf,setQuaternionFromProperEuler:bf,normalize:ve,denormalize:Nn};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ai{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),R=Math.atan2(C,p*w);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const v=a*w;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(t=0,e=0,n=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new S,wc=new Ai;class ee{constructor(t,e,n,s,r,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],x=s[4],v=s[7],C=s[2],R=s[5],I=s[8];return r[0]=o*_+a*w+l*C,r[3]=o*m+a*x+l*R,r[6]=o*p+a*v+l*I,r[1]=c*_+u*w+h*C,r[4]=c*m+u*x+h*R,r[7]=c*p+u*v+h*I,r[2]=d*_+f*w+g*C,r[5]=d*m+f*x+g*R,r[8]=d*p+f*v+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new ee;function gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){const i=To("canvas");return i.style.display="block",i}const Tc={};function br(i){i in Tc||(Tc[i]=!0,console.warn(i))}function wf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ac=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tf(){const i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:t,whitePoint:n,transfer:Eo,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),i}const de=Tf();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class Af{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=To("canvas")),os.width=t.width,os.height=t.height;const s=os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rf=0;class Yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ta(s[o].image)):r.push(ta(s[o]))}else r=ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;const ea=new S;class Je extends Hs{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Gi,s=Gi,r=Gn,o=Wi,a=On,l=Zn,c=Je.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=qn(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $n:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $n:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=ou;Je.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,C=(p+1)/2,R=(u+d)/4,I=(h+_)/4,D=(g+m)/4;return x>v&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=I/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=I/r,s=D/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pf extends Hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Je(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _u extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lf extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),zr.subVectors(this.max,qs),as.subVectors(t.a,qs),ls.subVectors(t.b,qs),cs.subVectors(t.c,qs),ci.subVectors(ls,as),hi.subVectors(cs,ls),Li.subVectors(as,cs);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Li.z,Li.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Li.z,0,-Li.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Li.y,Li.x,0];return!na(e,as,ls,cs,zr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,as,ls,cs,zr))?!1:(kr.crossVectors(ci,hi),e=[kr.x,kr.y,kr.z],na(e,as,ls,cs,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new S,new S,new S,new S,new S,new S,new S,new S],Rn=new S,Br=new Bn,as=new S,ls=new S,cs=new S,ci=new S,hi=new S,Li=new S,qs=new S,zr=new S,kr=new S,Ii=new S;function na(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const If=new Bn,$s=new S,ia=new S;class Vs{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(ia)),this.expandByPoint($s.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ti=new S,sa=new S,Hr=new S,ui=new S,ra=new S,Vr=new S,oa=new S;class Ji{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sa.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=ui.dot(this.direction),l=-ui.dot(Hr),c=ui.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(sa).addScaledVector(Hr,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){ra.subVectors(e,t),Vr.subVectors(n,t),oa.crossVectors(ra,Vr);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const l=a*this.direction.dot(Vr.crossVectors(ui,Vr));if(l<0)return null;const c=a*this.direction.dot(ra.cross(ui));if(c<0||l+c>o)return null;const u=-a*ui.dot(oa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,Uf)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),di.crossVectors(n,un),di.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),di.crossVectors(n,un)),di.normalize(),Gr.crossVectors(un,di),s[0]=di.x,s[4]=Gr.x,s[8]=un.x,s[1]=di.y,s[5]=Gr.y,s[9]=un.y,s[2]=di.z,s[6]=Gr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],x=n[7],v=n[11],C=n[15],R=s[0],I=s[4],D=s[8],b=s[12],M=s[1],A=s[5],U=s[9],V=s[13],Y=s[2],W=s[6],X=s[10],nt=s[14],$=s[3],yt=s[7],Et=s[11],Lt=s[15];return r[0]=o*R+a*M+l*Y+c*$,r[4]=o*I+a*A+l*W+c*yt,r[8]=o*D+a*U+l*X+c*Et,r[12]=o*b+a*V+l*nt+c*Lt,r[1]=u*R+h*M+d*Y+f*$,r[5]=u*I+h*A+d*W+f*yt,r[9]=u*D+h*U+d*X+f*Et,r[13]=u*b+h*V+d*nt+f*Lt,r[2]=g*R+_*M+m*Y+p*$,r[6]=g*I+_*A+m*W+p*yt,r[10]=g*D+_*U+m*X+p*Et,r[14]=g*b+_*V+m*nt+p*Lt,r[3]=w*R+x*M+v*Y+C*$,r[7]=w*I+x*A+v*W+C*yt,r[11]=w*D+x*U+v*X+C*Et,r[15]=w*b+x*V+v*nt+C*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,R=e*w+n*x+s*v+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=w*I,t[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*I,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*I,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*I,t[4]=x*I,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*I,t[8]=v*I,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*I,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*I,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*I,t[12]=C*I,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*I,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*I,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,w=l*c,x=l*u,v=l*h,C=n.x,R=n.y,I=n.z;return s[0]=(1-(_+p))*C,s[1]=(f+v)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+x)*I,s[9]=(m-w)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Xn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===wo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new S,Cn=new le,Df=new S(0,0,0),Uf=new S(1,1,1),di=new S,Gr=new S,un=new S,Cc=new le,Pc=new Ai;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nf=0;const Lc=new S,us=new Ai,ei=new le,Wr=new S,Zs=new S,Ff=new S,Of=new Ai,Ic=new S(1,0,0),Dc=new S(0,1,0),Uc=new S(0,0,1),Nc={type:"added"},Bf={type:"removed"},ds={type:"childadded",child:null},aa={type:"childremoved",child:null};class He extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new S,e=new zn,n=new Ai,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new ee}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Zs,Wr,this.up):ei.lookAt(Wr,Zs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ei),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new S(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new S,ni=new S,la=new S,ii=new S,fs=new S,ps=new S,Fc=new S,ca=new S,ha=new S,ua=new S,da=new ge,fa=new ge,pa=new ge;class En{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ni.subVectors(n,e),la.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(ni),l=Pn.dot(la),c=ni.dot(ni),u=ni.dot(la),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ni.subVectors(t,e),Pn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,n),ps.subVectors(r,n),ca.subVectors(t,n);const l=fs.dot(ca),c=ps.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,s);const u=fs.dot(ha),h=ps.dot(ha);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fs,o);ua.subVectors(t,r);const f=fs.dot(ua),g=ps.dot(ua);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Fc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Fc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Xl(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ma(o,r,t+1/3),this.g=ma(o,r,t),this.b=ma(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return de.workingToColorSpace(Ze.copy(this),t),Math.round(se(Ze.r*255,0,255))*65536+Math.round(se(Ze.g*255,0,255))*256+Math.round(se(Ze.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=xe){de.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Xr);const n=pr(fi.h,Xr.h,e),s=pr(fi.s,Xr.s,e),r=pr(fi.l,Xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new te;te.NAMES=vu;let zf=0;class es extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Cs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oe extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new S,Yr=new dt;let kf=0;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sl&&(t.usage=this.usage),t}}class xu extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yu extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const yn=new le,ga=new He,ms=new S,dn=new Bn,Ks=new Bn,We=new S;class Oe extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gu(t)?yu:xu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(dn.min,Ks.min),dn.expandByPoint(We),We.addVectors(dn.max,Ks.max),dn.expandByPoint(We)):(dn.expandByPoint(Ks.min),dn.expandByPoint(Ks.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)We.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),We.add(ms)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new S,l[D]=new S;const c=new S,u=new S,h=new S,d=new dt,f=new dt,g=new dt,_=new S,m=new S;function p(D,b,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[D].add(_),a[b].add(_),a[M].add(_),l[D].add(m),l[b].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,b=w.length;D<b;++D){const M=w[D],A=M.start,U=M.count;for(let V=A,Y=A+U;V<Y;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const x=new S,v=new S,C=new S,R=new S;function I(D){C.fromBufferAttribute(s,D),R.copy(C);const b=a[D];x.copy(b),x.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(R,b);const A=v.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,A)}for(let D=0,b=w.length;D<b;++D){const M=w[D],A=M.start,U=M.count;for(let V=A,Y=A+U;V<Y;V+=3)I(t.getX(V+0)),I(t.getX(V+1)),I(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new le,Di=new Ji,qr=new Vs,Bc=new S,$r=new S,Zr=new S,Kr=new S,_a=new S,jr=new S,zc=new S,Jr=new S;class lt extends He{constructor(t=new Oe,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(_a.fromBufferAttribute(h,t),o?jr.addScaledVector(_a,u):jr.addScaledVector(_a.sub(e),u))}e.add(jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(qr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(qr,Bc)===null||Di.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(Oc.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Oc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,C=x;v<C;v+=3){const R=a.getX(v),I=a.getX(v+1),D=a.getX(v+2);s=Qr(this,p,t,n,c,u,h,R,I,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Qr(this,o,t,n,c,u,h,w,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,C=x;v<C;v+=3){const R=v,I=v+1,D=v+2;s=Qr(this,p,t,n,c,u,h,R,I,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,x=m+1,v=m+2;s=Qr(this,o,t,n,c,u,h,w,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Vf(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ei,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:i}}function Qr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$r),i.getVertexPosition(l,Zr),i.getVertexPosition(c,Kr);const u=Vf(i,t,e,n,$r,Zr,Kr,zc);if(u){const h=new S;En.getBarycoord(zc,$r,Zr,Kr,h),s&&(u.uv=En.getInterpolatedAttribute(s,a,l,c,h,new dt)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,l,c,h,new dt)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,h,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new S,materialIndex:0};En.getNormal($r,Zr,Kr,d.normal),u.face=d,u.barycoord=h}return u}class kn extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function g(_,m,p,w,x,v,C,R,I,D,b){const M=v/I,A=C/D,U=v/2,V=C/2,Y=R/2,W=I+1,X=D+1;let nt=0,$=0;const yt=new S;for(let Et=0;Et<X;Et++){const Lt=Et*A-V;for(let P=0;P<W;P++){const N=P*M-U;yt[_]=N*w,yt[m]=Lt*x,yt[p]=Y,c.push(yt.x,yt.y,yt.z),yt[_]=0,yt[m]=0,yt[p]=R>0?1:-1,u.push(yt.x,yt.y,yt.z),h.push(P/I),h.push(1-Et/D),nt+=1}}for(let Et=0;Et<D;Et++)for(let Lt=0;Lt<I;Lt++){const P=d+Lt+W*Et,N=d+Lt+W*(Et+1),O=d+(Lt+1)+W*(Et+1),G=d+(Lt+1)+W*Et;l.push(P,N,G),l.push(N,O,G),$+=6}a.addGroup(f,$,b),f+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Gf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Su={clone:Fs,merge:nn};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new S,kc=new dt,Hc=new dt;class an extends bu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Hc),e.subVectors(Hc,kc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class Yf extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(gs,_s,t,e);s.layers=this.layers,this.add(s);const r=new an(gs,_s,t,e);r.layers=this.layers,this.add(r);const o=new an(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new an(gs,_s,t,e);a.layers=this.layers,this.add(a);const l=new an(gs,_s,t,e);l.layers=this.layers,this.add(l);const c=new an(gs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends Je{constructor(t=[],e=Ds,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Mi});r.uniforms.tEquirect.value=e;const o=new lt(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Gn),new Yf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class jt extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $l{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new $l(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zf extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new S;class Ao{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ao(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends es{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const js=new S,xs=new S,ys=new S,Ms=new dt,Js=new dt,wu=new le,to=new S,Qs=new S,eo=new S,Vc=new dt,xa=new dt,Gc=new dt;class lr extends He{constructor(t=new Zl){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kf(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Ao(n,3,0,!1)),vs.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;no(to.set(-.5,-.5,0),ys,o,xs,s,r),no(Qs.set(.5,-.5,0),ys,o,xs,s,r),no(eo.set(.5,.5,0),ys,o,xs,s,r),Vc.set(0,0),xa.set(1,0),Gc.set(1,1);let a=t.ray.intersectTriangle(to,Qs,eo,!1,js);if(a===null&&(no(Qs.set(-.5,.5,0),ys,o,xs,s,r),xa.set(0,1),a=t.ray.intersectTriangle(to,eo,Qs,!1,js),a===null))return;const l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:En.getInterpolation(js,to,Qs,eo,Vc,xa,Gc,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function no(i,t,e,n,s,r){Ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*Ms.x-s*Ms.y,Js.y=s*Ms.x+r*Ms.y):Js.copy(Ms),i.copy(t),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(wu)}class jf extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,u=_n,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wc extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new le,Xc=new le,io=[],Yc=new Bn,Jf=new le,tr=new lt,er=new Vs;class Qf extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Yc.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),er.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Xc.multiplyMatrices(n,Ss),tr.matrixWorld=Xc,tr.raycast(t,io);for(let o=0,a=io.length;o<a;o++){const l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jf(new Float32Array(s*this.count),s,this.count,Hl,Wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ya=new S,tp=new S,ep=new ee;class vi{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ya.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ep.getNormalMatrix(t),s=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Vs,np=new dt(.5,.5),so=new S;class Kl{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],w=r[12],x=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,f-u,p-g,C-w).normalize(),s[1].setComponents(c+o,f+u,p+g,C+w).normalize(),s[2].setComponents(c+a,f+h,p+_,C+x).normalize(),s[3].setComponents(c-a,f-h,p-_,C-x).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,C-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,C-v).normalize(),e===Xn)s[5].setComponents(c+l,f+d,p+m,C+v).normalize();else if(e===wo)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=np.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ro=new S,Co=new S,qc=new le,nr=new Ji,ro=new Vs,Ma=new S,$c=new S;class yo extends He{constructor(t=new Oe,e=new jl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ro.fromBufferAttribute(e,s-1),Co.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Co);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;qc.copy(s).invert(),nr.copy(t.ray).applyMatrix4(qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),w=u.getX(_+1),x=oo(this,t,nr,l,p,w,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=oo(this,t,nr,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=oo(this,t,nr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=oo(this,t,nr,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ro.fromBufferAttribute(a,s),Co.fromBufferAttribute(a,r),e.distanceSqToSegment(Ro,Co,Ma,$c)>n)return;Ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ma);if(!(c<t.near||c>t.far))return{distance:c,point:$c.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Zc=new S,Kc=new S;class ip extends yo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zc.fromBufferAttribute(e,s),Kc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zc.distanceTo(Kc);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ye extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tu extends Je{constructor(t,e,n=ji,s,r,o,a=_n,l=_n,c,u=yr,h=1){if(u!==yr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Au extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jl extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new S,u=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Se extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function w(){const v=new S,C=new S;let R=0;const I=(e-t)/n;for(let D=0;D<=r;D++){const b=[],M=D/r,A=M*(e-t)+t;for(let U=0;U<=s;U++){const V=U/s,Y=V*l+a,W=Math.sin(Y),X=Math.cos(Y);C.x=A*W,C.y=-M*n+m,C.z=A*X,h.push(C.x,C.y,C.z),v.set(W,I,X).normalize(),d.push(v.x,v.y,v.z),f.push(V,1-M),b.push(g++)}_.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){const M=_[b][D],A=_[b+1][D],U=_[b+1][D+1],V=_[b][D+1];(t>0||b!==0)&&(u.push(M,A,V),R+=3),(e>0||b!==r-1)&&(u.push(A,U,V),R+=3)}c.addGroup(p,R,0),p+=R}function x(v){const C=g,R=new dt,I=new S;let D=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const A=g;for(let U=0;U<=s;U++){const Y=U/s*l+a,W=Math.cos(Y),X=Math.sin(Y);I.x=b*X,I.y=m*M,I.z=b*W,h.push(I.x,I.y,I.z),d.push(0,M,0),R.x=W*.5+.5,R.y=X*.5*M+.5,f.push(R.x,R.y),g++}for(let U=0;U<s;U++){const V=C+U,Y=A+U;v===!0?u.push(Y,Y+1,V):u.push(Y+1,Y,V),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new S,s=[],r=[],o=[],a=new S,l=new le;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ql extends Kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sp extends Ql{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ao=new S,Sa=new tc,ba=new tc,Ea=new tc;class Er extends Kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),c=ao);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Sa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),ba.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Ea.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ba.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ea.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Sa.calc(l),ba.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function rp(i,t){const e=1-i;return e*e*t}function op(i,t){return 2*(1-i)*i*t}function ap(i,t){return i*i*t}function mr(i,t,e,n){return rp(i,t)+op(i,e)+ap(i,n)}function lp(i,t){const e=1-i;return e*e*e*t}function cp(i,t){const e=1-i;return 3*e*e*i*t}function hp(i,t){return 3*(1-i)*i*i*t}function up(i,t){return i*i*i*t}function gr(i,t,e,n,s){return lp(i,t)+cp(i,e)+hp(i,n)+up(i,s)}class Ru extends Kn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dp extends Kn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cu extends Kn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends Kn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Kn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends Kn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(jc(a,l.x,c.x,u.x,h.x),jc(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:sp,CatmullRomCurve3:Er,CubicBezierCurve:Ru,CubicBezierCurve3:dp,EllipseCurve:Ql,LineCurve:Cu,LineCurve3:fp,QuadraticBezierCurve:Pu,QuadraticBezierCurve3:Lu,SplineCurve:Iu});class pp extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Po[s.type]().fromJSON(s))}return this}}class Lo extends pp{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Cu(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Pu(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ru(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Iu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ql(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gs extends Lo{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Lo().fromJSON(s))}return this}}function mp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Du(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=yp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return wr(r,o,e,a,l,c,0),o}function Du(i,t,e,n,s){let r;if(s===Lp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Jc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Jc(o/n|0,i[o],i[o+1],r);return r&&Os(r,r.next)&&(Ar(r),r=r.next),r}function Qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||De(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&wp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?_p(i,n,s,r):gp(i)){t.push(l.i,i.i,c.i),Ar(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=vp(Qi(i),t),wr(i,t,e,n,s,r,2)):o===2&&xp(i,t,e,n,s,r):wr(Qi(i),t,e,n,s,r,1);break}}}function gp(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&cr(s,a,r,l,o,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _p(i,t,e,n){const s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),_=Math.max(a,l,c),m=Math.max(u,h,d),p=bl(f,g,t,e,n),w=bl(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&cr(a,u,l,h,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&cr(a,u,l,h,c,d,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&cr(a,u,l,h,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&cr(a,u,l,h,c,d,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Os(n,s)&&Nu(n,e,e.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i,e.i,s.i),Ar(e),Ar(e.next),e=i=s),e=e.next}while(e!==i);return Qi(e)}function xp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rp(o,a)){let l=Fu(o,a);o=Qi(o,o.next),l=Qi(l,l.next),wr(o,t,e,n,s,r,0),wr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Du(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ap(c))}s.sort(Mp);for(let r=0;r<s.length;r++)e=Sp(s[r],e);return e}function Mp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Sp(i,t){const e=bp(i,t);if(!e)return t;const n=Fu(e,i);return Qi(n,n.next),Qi(e,e.next)}function bp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Os(i,e))return e;do{if(Os(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Uu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);Tr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Ep(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Ep(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function wp(i,t,e,n){let s=i;do s.z===0&&(s.z=bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tp(s)}function Tp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ap(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function cr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Uu(i,t,e,n,s,r,o,a)}function Rp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cp(i,t)&&(Tr(i,t)&&Tr(t,i)&&Pp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Os(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Os(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){const s=co(De(i,t,e)),r=co(De(i,t,n)),o=co(De(e,n,i)),a=co(De(e,n,t));return!!(s!==r&&o!==a||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function Cp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Pp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fu(i,t){const e=El(i.i,i.x,i.y),n=El(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jc(i,t,e,n){const s=El(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function El(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ip{static triangulate(t,e,n=2){return mp(t,e,n)}}class Ts{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ts.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Qc(t),th(n,t);let o=t.length;e.forEach(Qc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,th(n,e[l]);const a=Ip.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Qc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function th(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ns extends Oe{constructor(t=new Gs([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Dp;let x,v=!1,C,R,I,D;p&&(x=p.getSpacedPoints(u),v=!0,d=!1,C=p.computeFrenetFrames(u,!1),R=new S,I=new S,D=new S),d||(m=0,f=0,g=0,_=0);const b=a.extractPoints(c);let M=b.shape;const A=b.holes;if(!Ts.isClockWise(M)){M=M.reverse();for(let rt=0,st=A.length;rt<st;rt++){const it=A[rt];Ts.isClockWise(it)&&(A[rt]=it.reverse())}}function V(rt){const it=10000000000000001e-36;let tt=rt[0];for(let pt=1;pt<=rt.length;pt++){const ot=pt%rt.length,Mt=rt[ot],Wt=Mt.x-tt.x,Xt=Mt.y-tt.y,T=Wt*Wt+Xt*Xt,y=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(tt.x),Math.abs(tt.y)),k=it*y*y;if(T<=k){rt.splice(ot,1),pt--;continue}tt=Mt}}V(M),A.forEach(V);const Y=A.length,W=M;for(let rt=0;rt<Y;rt++){const st=A[rt];M=M.concat(st)}function X(rt,st,it){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(st,it)}const nt=M.length;function $(rt,st,it){let tt,pt,ot;const Mt=rt.x-st.x,Wt=rt.y-st.y,Xt=it.x-rt.x,T=it.y-rt.y,y=Mt*Mt+Wt*Wt,k=Mt*T-Wt*Xt;if(Math.abs(k)>Number.EPSILON){const j=Math.sqrt(y),ht=Math.sqrt(Xt*Xt+T*T),J=st.x-Wt/j,It=st.y+Mt/j,xt=it.x-T/ht,Bt=it.y+Xt/ht,Ft=((xt-J)*T-(Bt-It)*Xt)/(Mt*T-Wt*Xt);tt=J+Mt*Ft-rt.x,pt=It+Wt*Ft-rt.y;const ft=tt*tt+pt*pt;if(ft<=2)return new dt(tt,pt);ot=Math.sqrt(ft/2)}else{let j=!1;Mt>Number.EPSILON?Xt>Number.EPSILON&&(j=!0):Mt<-Number.EPSILON?Xt<-Number.EPSILON&&(j=!0):Math.sign(Wt)===Math.sign(T)&&(j=!0),j?(tt=-Wt,pt=Mt,ot=Math.sqrt(y)):(tt=Mt,pt=Wt,ot=Math.sqrt(y/2))}return new dt(tt/ot,pt/ot)}const yt=[];for(let rt=0,st=W.length,it=st-1,tt=rt+1;rt<st;rt++,it++,tt++)it===st&&(it=0),tt===st&&(tt=0),yt[rt]=$(W[rt],W[it],W[tt]);const Et=[];let Lt,P=yt.concat();for(let rt=0,st=Y;rt<st;rt++){const it=A[rt];Lt=[];for(let tt=0,pt=it.length,ot=pt-1,Mt=tt+1;tt<pt;tt++,ot++,Mt++)ot===pt&&(ot=0),Mt===pt&&(Mt=0),Lt[tt]=$(it[tt],it[ot],it[Mt]);Et.push(Lt),P=P.concat(Lt)}let N;if(m===0)N=Ts.triangulateShape(W,A);else{const rt=[],st=[];for(let it=0;it<m;it++){const tt=it/m,pt=f*Math.cos(tt*Math.PI/2),ot=g*Math.sin(tt*Math.PI/2)+_;for(let Mt=0,Wt=W.length;Mt<Wt;Mt++){const Xt=X(W[Mt],yt[Mt],ot);Rt(Xt.x,Xt.y,-pt),tt===0&&rt.push(Xt)}for(let Mt=0,Wt=Y;Mt<Wt;Mt++){const Xt=A[Mt];Lt=Et[Mt];const T=[];for(let y=0,k=Xt.length;y<k;y++){const j=X(Xt[y],Lt[y],ot);Rt(j.x,j.y,-pt),tt===0&&T.push(j)}tt===0&&st.push(T)}}N=Ts.triangulateShape(rt,st)}const O=N.length,G=g+_;for(let rt=0;rt<nt;rt++){const st=d?X(M[rt],P[rt],G):M[rt];v?(I.copy(C.normals[0]).multiplyScalar(st.x),R.copy(C.binormals[0]).multiplyScalar(st.y),D.copy(x[0]).add(I).add(R),Rt(D.x,D.y,D.z)):Rt(st.x,st.y,0)}for(let rt=1;rt<=u;rt++)for(let st=0;st<nt;st++){const it=d?X(M[st],P[st],G):M[st];v?(I.copy(C.normals[rt]).multiplyScalar(it.x),R.copy(C.binormals[rt]).multiplyScalar(it.y),D.copy(x[rt]).add(I).add(R),Rt(D.x,D.y,D.z)):Rt(it.x,it.y,h/u*rt)}for(let rt=m-1;rt>=0;rt--){const st=rt/m,it=f*Math.cos(st*Math.PI/2),tt=g*Math.sin(st*Math.PI/2)+_;for(let pt=0,ot=W.length;pt<ot;pt++){const Mt=X(W[pt],yt[pt],tt);Rt(Mt.x,Mt.y,h+it)}for(let pt=0,ot=A.length;pt<ot;pt++){const Mt=A[pt];Lt=Et[pt];for(let Wt=0,Xt=Mt.length;Wt<Xt;Wt++){const T=X(Mt[Wt],Lt[Wt],tt);v?Rt(T.x,T.y+x[u-1].y,x[u-1].x+it):Rt(T.x,T.y,h+it)}}}z(),q();function z(){const rt=s.length/3;if(d){let st=0,it=nt*st;for(let tt=0;tt<O;tt++){const pt=N[tt];vt(pt[2]+it,pt[1]+it,pt[0]+it)}st=u+m*2,it=nt*st;for(let tt=0;tt<O;tt++){const pt=N[tt];vt(pt[0]+it,pt[1]+it,pt[2]+it)}}else{for(let st=0;st<O;st++){const it=N[st];vt(it[2],it[1],it[0])}for(let st=0;st<O;st++){const it=N[st];vt(it[0]+nt*u,it[1]+nt*u,it[2]+nt*u)}}n.addGroup(rt,s.length/3-rt,0)}function q(){const rt=s.length/3;let st=0;et(W,st),st+=W.length;for(let it=0,tt=A.length;it<tt;it++){const pt=A[it];et(pt,st),st+=pt.length}n.addGroup(rt,s.length/3-rt,1)}function et(rt,st){let it=rt.length;for(;--it>=0;){const tt=it;let pt=it-1;pt<0&&(pt=rt.length-1);for(let ot=0,Mt=u+m*2;ot<Mt;ot++){const Wt=nt*ot,Xt=nt*(ot+1),T=st+tt+Wt,y=st+pt+Wt,k=st+pt+Xt,j=st+tt+Xt;Ht(T,y,k,j)}}}function Rt(rt,st,it){l.push(rt),l.push(st),l.push(it)}function vt(rt,st,it){re(rt),re(st),re(it);const tt=s.length/3,pt=w.generateTopUV(n,s,tt-3,tt-2,tt-1);L(pt[0]),L(pt[1]),L(pt[2])}function Ht(rt,st,it,tt){re(rt),re(st),re(tt),re(st),re(it),re(tt);const pt=s.length/3,ot=w.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);L(ot[0]),L(ot[1]),L(ot[3]),L(ot[1]),L(ot[2]),L(ot[3])}function re(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function L(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Up(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Po[s.type]().fromJSON(s)),new ns(n,t.options)}}const Dp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-h),new dt(d,1-g),new dt(_,1-p)]:[new dt(a,1-l),new dt(u,1-h),new dt(f,1-g),new dt(m,1-p)]}};function Up(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ec extends Oe{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new S,d=new dt,f=new S,g=new S,_=new S;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=e;w++){const x=n+w*u*s,v=Math.sin(x),C=Math.cos(x);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*v,h.y=t[R].y,h.z=t[R].x*C,o.push(h.x,h.y,h.z),d.x=w/e,d.y=R/(t.length-1),a.push(d.x,d.y);const I=l[3*R+0]*v,D=l[3*R+1],b=l[3*R+0]*C;c.push(I,D,b)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){const v=x+w*t.length,C=v,R=v+t.length,I=v+t.length+1,D=v+1;r.push(C,R,D),r.push(I,D,R)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.points,t.segments,t.phiStart,t.phiLength)}}class Ce extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const x=w+c*p,v=w+c*(p+1),C=w+1+c*(p+1),R=w+1+c*p;f.push(x,v,R),f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.widthSegments,t.heightSegments)}}class bi extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new S,d=new S,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const R=C/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-x),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const x=u[p][w+1],v=u[p][w],C=u[p+1][w],R=u[p+1][w+1];(p!==0||o>0)&&f.push(x,v,R),(p!==n-1||l<Math.PI)&&f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rn extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bs extends Oe{constructor(t=new Lu(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new dt;let u=new S;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),w(),p()}function m(x){u=t.getPointAt(x/e,u);const v=o.normals[x],C=o.binormals[x];for(let R=0;R<=s;R++){const I=R/s*Math.PI*2,D=Math.sin(I),b=-Math.cos(I);l.x=b*v.x+D*C.x,l.y=b*v.y+D*C.y,l.z=b*v.z+D*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const C=(s+1)*(x-1)+(v-1),R=(s+1)*x+(v-1),I=(s+1)*x+v,D=(s+1)*(x-1)+v;g.push(C,R,D),g.push(R,I,D)}}function w(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Bs(new Po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class be extends es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Np extends be{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Fp extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xo extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bp extends Xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new le,eh=new S,nh=new S;class Ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ih=new le,ir=new S,Ta=new S;class zp extends Ou{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(ir),Ta.copy(n.position),Ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ta),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,n.coordinateSystem,n.reversedDepth)}}class Ti extends Xo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bu extends bu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kp extends Ou{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sh extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hp extends Xo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vp extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Gp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const rh=new le;class Wp{constructor(t,e,n=0,s=1/0){this.ray=new Ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rh),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,n,e);return n.sort(oh),n}}function oh(i,t){return i.distance-t.distance}function wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)wl(r[o],t,e,!0)}}function ah(i,t,e,n){const s=Xp(n);switch(e){case uu:return i*t;case Hl:return i*t/s.components*s.byteLength;case Vl:return i*t/s.components*s.byteLength;case fu:return i*t*2/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case du:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Wl:return i*t*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case ja:return Math.max(i,16)*Math.max(t,8)/4;case $a:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vl:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xp(i){switch(i){case Zn:case au:return{byteLength:1,components:1};case vr:case lu:case ks:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case ji:case Bl:case Wn:return{byteLength:4,components:1};case cu:case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function zu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yp(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`struct PhysicalMaterial {
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
}`,Y0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,xg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:qp,alphahash_pars_fragment:$p,alphamap_fragment:Zp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:t0,batching_pars_vertex:e0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:v0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:E0,envmap_fragment:w0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:z0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:I0,fog_pars_fragment:D0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:N0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:k0,lights_toon_pars_fragment:H0,lights_phong_fragment:V0,lights_phong_pars_fragment:G0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:Y0,lights_fragment_maps:q0,lights_fragment_end:$0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:vm,iridescence_pars_fragment:xm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:bm,dithering_fragment:Em,dithering_pars_fragment:wm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Im,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:Ym,background_frag:qm,backgroundCube_vert:$m,backgroundCube_frag:Zm,cube_vert:Km,cube_frag:jm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:tg,distanceRGBA_frag:eg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:og,meshbasic_frag:ag,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:vg,meshtoon_frag:xg,points_vert:yg,points_frag:Mg,shadow_vert:Sg,shadow_frag:bg,sprite_vert:Eg,sprite_frag:wg},Tt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Vn={basic:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:nn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:nn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:nn([Tt.points,Tt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:nn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:nn([Tt.common,Tt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:nn([Tt.sprite,Tt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:nn([Tt.common,Tt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:nn([Tt.lights,Tt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Vn.physical={uniforms:nn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ho={r:0,b:0,g:0},Ni=new zn,Tg=new le;function Ag(i,t,e,n,s,r,o){const a=new te(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const C=g(x);C===null?p(a,l):C&&C.isColor&&(p(C,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===Go)?(u===void 0&&(u=new lt(new kn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Fs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Ni)),u.material.toneMapped=de.getTransfer(C.colorSpace)!==Me,(h!==C||d!==C.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new lt(new Ce(2,2),new An({name:"BackgroundMaterial",uniforms:Fs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=de.getTransfer(C.colorSpace)!==Me,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(ho,Mu(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:w}}function Rg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,A,U,V,Y){let W=!1;const X=h(V,U,A);r!==X&&(r=X,c(r.object)),W=f(M,V,U,Y),W&&g(M,V,U,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(M,A,U,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,A,U){const V=U.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let W=Y[A.id];W===void 0&&(W={},Y[A.id]=W);let X=W[V];return X===void 0&&(X=d(l()),W[V]=X),X}function d(M){const A=[],U=[],V=[];for(let Y=0;Y<e;Y++)A[Y]=0,U[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,A,U,V){const Y=r.attributes,W=A.attributes;let X=0;const nt=U.getAttributes();for(const $ in nt)if(nt[$].location>=0){const Et=Y[$];let Lt=W[$];if(Lt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Lt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Lt=M.instanceColor)),Et===void 0||Et.attribute!==Lt||Lt&&Et.data!==Lt.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function g(M,A,U,V){const Y={},W=A.attributes;let X=0;const nt=U.getAttributes();for(const $ in nt)if(nt[$].location>=0){let Et=W[$];Et===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor));const Lt={};Lt.attribute=Et,Et&&Et.data&&(Lt.data=Et.data),Y[$]=Lt,X++}r.attributes=Y,r.attributesNum=X,r.index=V}function _(){const M=r.newAttributes;for(let A=0,U=M.length;A<U;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const U=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;U[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),Y[M]!==A&&(i.vertexAttribDivisor(M,A),Y[M]=A)}function w(){const M=r.newAttributes,A=r.enabledAttributes;for(let U=0,V=A.length;U<V;U++)A[U]!==M[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function x(M,A,U,V,Y,W,X){X===!0?i.vertexAttribIPointer(M,A,U,Y,W):i.vertexAttribPointer(M,A,U,V,Y,W)}function v(M,A,U,V){_();const Y=V.attributes,W=U.getAttributes(),X=A.defaultAttributeValues;for(const nt in W){const $=W[nt];if($.location>=0){let yt=Y[nt];if(yt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),yt!==void 0){const Et=yt.normalized,Lt=yt.itemSize,P=t.get(yt);if(P===void 0)continue;const N=P.buffer,O=P.type,G=P.bytesPerElement,z=O===i.INT||O===i.UNSIGNED_INT||yt.gpuType===Bl;if(yt.isInterleavedBufferAttribute){const q=yt.data,et=q.stride,Rt=yt.offset;if(q.isInstancedInterleavedBuffer){for(let vt=0;vt<$.locationSize;vt++)p($.location+vt,q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let vt=0;vt<$.locationSize;vt++)m($.location+vt);i.bindBuffer(i.ARRAY_BUFFER,N);for(let vt=0;vt<$.locationSize;vt++)x($.location+vt,Lt/$.locationSize,O,Et,et*G,(Rt+Lt/$.locationSize*vt)*G,z)}else{if(yt.isInstancedBufferAttribute){for(let q=0;q<$.locationSize;q++)p($.location+q,yt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let q=0;q<$.locationSize;q++)m($.location+q);i.bindBuffer(i.ARRAY_BUFFER,N);for(let q=0;q<$.locationSize;q++)x($.location+q,Lt/$.locationSize,O,Et,Lt*G,Lt/$.locationSize*q*G,z)}}else if(X!==void 0){const Et=X[nt];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv($.location,Et);break;case 3:i.vertexAttrib3fv($.location,Et);break;case 4:i.vertexAttrib4fv($.location,Et);break;default:i.vertexAttrib1fv($.location,Et)}}}}w()}function C(){D();for(const M in n){const A=n[M];for(const U in A){const V=A[U];for(const Y in V)u(V[Y].object),delete V[Y];delete A[U]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const U in A){const V=A[U];for(const Y in V)u(V[Y].object),delete V[Y];delete A[U]}delete n[M.id]}function I(M){for(const A in n){const U=n[A];if(U[M.id]===void 0)continue;const V=U[M.id];for(const Y in V)u(V[Y].object),delete V[Y];delete U[M.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Cg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==On&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Zn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function Lg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new vi,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,x=w*4;let v=p.clippingState||null;l.value=v,v=u(g,d,x,f);for(let C=0;C!==x;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ig(i){let t=new WeakMap;function e(o,a){return a===bo?o.mapping=Ds:a===Ya&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===Ya)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const As=4,lh=[.125,.215,.35,.446,.526,.582],Vi=20,Aa=new Bu,ch=new te;let Ra=null,Ca=0,Pa=0,La=!1;const zi=(1+Math.sqrt(5))/2,bs=1/zi,hh=[new S(-zi,bs,0),new S(zi,bs,0),new S(-bs,0,zi),new S(bs,0,zi),new S(0,zi,-bs),new S(0,zi,bs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Dg=new S;class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Dg}=r;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=La,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ks,format:On,colorSpace:Ns,depthBuffer:!1},s=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Ng(r,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,s,r){const l=new an(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ch),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new oe({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new lt(new kn,_);let p=!1;const w=t.background;w?w.isColor&&(_.color.copy(w),t.background=null,p=!0):(_.color.copy(ch),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const C=this._cubeSize;uo(s,v*C,x>2?C:0,C,C),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ds||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;uo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hh[(s-r-1)%hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let w=0;for(let I=0;I<Vi;++I){const D=I/_,b=Math.exp(-D*D/2);p.push(b),I===0?w+=b:I<m&&(w+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],C=3*v*(s>x-As?s-x+As:0),R=4*(this._cubeSize-v);uo(e,C,R,3*v,2*v),l.setRenderTarget(e),l.render(h,Aa)}}function Ug(i){const t=[],e=[],n=[];let s=i;const r=i-As+1+lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-As?l=lh[o-i+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const I=R%3*2/3-1,D=R>2?0:-1,b=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];w.set(b,_*g*R),x.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const C=new Oe;C.setAttribute("position",new Qe(w,_)),C.setAttribute("uv",new Qe(x,m)),C.setAttribute("faceIndex",new Qe(v,p)),t.push(C),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ng(i,t,e){const n=new Float32Array(Vi),s=new S(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function fh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ph(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function Fg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bo||l===Ya,u=l===Ds||l===Us;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new uh(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new uh(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let x=0,v=w.length;x<v;x+=3){const C=w[x+0],R=w[x+1],I=w[x+2];d.push(C,R,R,I,I,C)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,v=w.length/3-1;x<v;x+=3){const C=x+0,R=x+1,I=x+2;d.push(C,R,R,I,I,C)}}else return;const m=new(gu(d)?yu:xu)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>t.maxTextureSize&&(R=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const I=new Float32Array(C*R*4*h),D=new _u(I,C,R,h);D.type=Wn,D.needsUpdate=!0;const b=v*4;for(let A=0;A<h;A++){const U=p[A],V=w[A],Y=x[A],W=C*R*4*A;for(let X=0;X<U.count;X++){const nt=X*b;g===!0&&(s.fromBufferAttribute(U,X),I[W+nt+0]=s.x,I[W+nt+1]=s.y,I[W+nt+2]=s.z,I[W+nt+3]=0),_===!0&&(s.fromBufferAttribute(V,X),I[W+nt+4]=s.x,I[W+nt+5]=s.y,I[W+nt+6]=s.z,I[W+nt+7]=0),m===!0&&(s.fromBufferAttribute(Y,X),I[W+nt+8]=s.x,I[W+nt+9]=s.y,I[W+nt+10]=s.z,I[W+nt+11]=Y.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new dt(C,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ku=new Je,mh=new Tu(1,1),Hu=new _u,Vu=new Lf,Gu=new Eu,gh=[],_h=[],vh=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function Ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Ge(e,n)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),Ge(e,n)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Ge(e,n)}}function Kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function t1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function n1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function i1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function s1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=mu,r=mh):r=ku,e.setTexture2D(t||r,s)}function r1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function o1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function a1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function l1(i){switch(i){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return $g;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function c1(i,t){i.uniform1fv(this.addr,t)}function h1(i,t){const e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function u1(i,t){const e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function d1(i,t){const e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function f1(i,t){const e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p1(i,t){const e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m1(i,t){const e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g1(i,t){i.uniform1iv(this.addr,t)}function _1(i,t){i.uniform2iv(this.addr,t)}function v1(i,t){i.uniform3iv(this.addr,t)}function x1(i,t){i.uniform4iv(this.addr,t)}function y1(i,t){i.uniform1uiv(this.addr,t)}function M1(i,t){i.uniform2uiv(this.addr,t)}function S1(i,t){i.uniform3uiv(this.addr,t)}function b1(i,t){i.uniform4uiv(this.addr,t)}function E1(i,t,e){const n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function w1(i,t,e){const n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function T1(i,t,e){const n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,r[o])}function A1(i,t,e){const n=this.cache,s=t.length,r=Yo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hu,r[o])}function R1(i){switch(i){case 5126:return c1;case 35664:return h1;case 35665:return u1;case 35666:return d1;case 35674:return f1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return M1;case 36295:return S1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}class C1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l1(e.type)}}class P1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R1(e.type)}}class L1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Mh(i,t){i.seq.push(t),i.map[t.id]=t}function I1(i,t,e){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),o=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mh(e,c===void 0?new C1(a,i,t):new P1(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new L1(a),Mh(e,h)),e=h}}}class Mo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);I1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D1=37297;let U1=0;function N1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bh=new ee;function F1(i){de._getMatrix(bh,de.workingColorSpace,i);const t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Eo:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+N1(i.getShaderSource(t),a)}else return r}function O1(i,t){const e=F1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B1(i,t){let e;switch(t){case Wd:e="Linear";break;case Xd:e="Reinhard";break;case Yd:e="Cineon";break;case ru:e="ACESFilmic";break;case $d:e="AgX";break;case Zd:e="Neutral";break;case qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new S;function z1(){de.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function H1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hr(i){return i!==""}function wh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(G1,X1)}const W1=new Map;function X1(i,t){let e=ne[t];if(e===void 0){const n=W1.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tl(e)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(Y1,q1)}function q1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Z1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K1(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Us&&(t="ENVMAP_MODE_REFRACTION"),t}function j1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:t="ENVMAP_BLENDING_MULTIPLY";break;case Vd:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function J1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Q1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$1(e),c=Z1(e),u=K1(e),h=j1(e),d=J1(e),f=k1(e),g=H1(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?ne.tonemapping_pars_fragment:"",e.toneMapping!==Si?B1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,O1("linearToOutputTexel",e.outputColorSpace),z1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),o=Tl(o),o=wh(o,e),o=Th(o,e),a=Tl(a),a=wh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+o,v=w+p+a,C=Sh(s,s.VERTEX_SHADER,x),R=Sh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(C)||"",Y=s.getShaderInfoLog(R)||"",W=U.trim(),X=V.trim(),nt=Y.trim();let $=!0,yt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{const Et=Eh(s,C,"vertex"),Lt=Eh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+W+`
`+Et+`
`+Lt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||nt==="")&&(yt=!1);yt&&(A.diagnostics={runnable:$,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(C),s.deleteShader(R),D=new Mo(s,_),b=V1(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,D1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let t_=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n_(t),e.set(t,n)),n}}class n_{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}}function i_(i,t,e,n,s,r,o){const a=new ql,l=new e_,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,A,U,V){const Y=U.fog,W=V.geometry,X=b.isMeshStandardMaterial?U.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),$=nt&&nt.mapping===Go?nt.image.height:null,yt=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=Et!==void 0?Et.length:0;let P=0;W.morphAttributes.position!==void 0&&(P=1),W.morphAttributes.normal!==void 0&&(P=2),W.morphAttributes.color!==void 0&&(P=3);let N,O,G,z;if(yt){const pe=Vn[yt];N=pe.vertexShader,O=pe.fragmentShader}else N=b.vertexShader,O=b.fragmentShader,l.update(b),G=l.getVertexShaderID(b),z=l.getFragmentShaderID(b);const q=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),Rt=V.isInstancedMesh===!0,vt=V.isBatchedMesh===!0,Ht=!!b.map,re=!!b.matcap,L=!!nt,rt=!!b.aoMap,st=!!b.lightMap,it=!!b.bumpMap,tt=!!b.normalMap,pt=!!b.displacementMap,ot=!!b.emissiveMap,Mt=!!b.metalnessMap,Wt=!!b.roughnessMap,Xt=b.anisotropy>0,T=b.clearcoat>0,y=b.dispersion>0,k=b.iridescence>0,j=b.sheen>0,ht=b.transmission>0,J=Xt&&!!b.anisotropyMap,It=T&&!!b.clearcoatMap,xt=T&&!!b.clearcoatNormalMap,Bt=T&&!!b.clearcoatRoughnessMap,Ft=k&&!!b.iridescenceMap,ft=k&&!!b.iridescenceThicknessMap,At=j&&!!b.sheenColorMap,Yt=j&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,wt=!!b.specularColorMap,$t=!!b.specularIntensityMap,F=ht&&!!b.transmissionMap,mt=ht&&!!b.thicknessMap,St=!!b.gradientMap,Ut=!!b.alphaMap,gt=b.alphaTest>0,at=!!b.alphaHash,kt=!!b.extensions;let Qt=Si;b.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qt=i.toneMapping);const Te={shaderID:yt,shaderType:b.type,shaderName:b.name,vertexShader:N,fragmentShader:O,defines:b.defines,customVertexShaderID:G,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:vt,batchingColor:vt&&V._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&V.instanceColor!==null,instancingMorph:Rt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ns,alphaToCoverage:!!b.alphaToCoverage,map:Ht,matcap:re,envMap:L,envMapMode:L&&nt.mapping,envMapCubeUVHeight:$,aoMap:rt,lightMap:st,bumpMap:it,normalMap:tt,displacementMap:d&&pt,emissiveMap:ot,normalMapObjectSpace:tt&&b.normalMapType===Qd,normalMapTangentSpace:tt&&b.normalMapType===pu,metalnessMap:Mt,roughnessMap:Wt,anisotropy:Xt,anisotropyMap:J,clearcoat:T,clearcoatMap:It,clearcoatNormalMap:xt,clearcoatRoughnessMap:Bt,dispersion:y,iridescence:k,iridescenceMap:Ft,iridescenceThicknessMap:ft,sheen:j,sheenColorMap:At,sheenRoughnessMap:Yt,specularMap:Dt,specularColorMap:wt,specularIntensityMap:$t,transmission:ht,transmissionMap:F,thicknessMap:mt,gradientMap:St,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:Ut,alphaTest:gt,alphaHash:at,combine:b.combine,mapUv:Ht&&_(b.map.channel),aoMapUv:rt&&_(b.aoMap.channel),lightMapUv:st&&_(b.lightMap.channel),bumpMapUv:it&&_(b.bumpMap.channel),normalMapUv:tt&&_(b.normalMap.channel),displacementMapUv:pt&&_(b.displacementMap.channel),emissiveMapUv:ot&&_(b.emissiveMap.channel),metalnessMapUv:Mt&&_(b.metalnessMap.channel),roughnessMapUv:Wt&&_(b.roughnessMap.channel),anisotropyMapUv:J&&_(b.anisotropyMap.channel),clearcoatMapUv:It&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&_(b.sheenRoughnessMap.channel),specularMapUv:Dt&&_(b.specularMap.channel),specularColorMapUv:wt&&_(b.specularColorMap.channel),specularIntensityMapUv:$t&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:mt&&_(b.thicknessMap.channel),alphaMapUv:Ut&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(tt||Xt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Ht||Ut),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:et,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:P,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ht&&b.map.isVideoTexture===!0&&de.getTransfer(b.map.colorSpace)===Me,decodeVideoTextureEmissive:ot&&b.emissiveMap.isVideoTexture===!0&&de.getTransfer(b.emissiveMap.colorSpace)===Me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fe,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const A in b.defines)M.push(A),M.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(w(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let A;if(M){const U=Vn[M];A=Su.clone(U.uniforms)}else A=b.uniforms;return A}function C(b,M){let A;for(let U=0,V=u.length;U<V;U++){const Y=u[U];if(Y.cacheKey===M){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new Q1(i,M,b,r),u.push(A)),A}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function I(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:D}}function s_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ph(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||r_),n.length>1&&n.sort(d||Ch),s.length>1&&s.sort(d||Ch)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function o_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ph,i.set(n,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function a_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new te};break;case"SpotLight":e={position:new S,direction:new S,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function l_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c_=0;function h_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u_(i){const t=new a_,e=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const s=new S,r=new le,o=new le;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,x=0,v=0,C=0,R=0,I=0;c.sort(h_);for(let b=0,M=c.length;b<M;b++){const A=c[b],U=A.color,V=A.intensity,Y=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*V,h+=U.g*V,d+=U.b*V;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],V);I++}else if(A.isDirectionalLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const nt=A.shadow,$=e.get(A);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=A.shadow.matrix,w++}n.directional[f]=X,f++}else if(A.isSpotLight){const X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(U).multiplyScalar(V),X.distance=Y,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[_]=X;const nt=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,nt.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[_]=nt.matrix,A.castShadow){const $=e.get(A);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=W,v++}_++}else if(A.isRectAreaLight){const X=t.get(A);X.color.copy(U).multiplyScalar(V),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=X,m++}else if(A.isPointLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){const nt=A.shadow,$=e.get(A);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=X,g++}else if(A.isHemisphereLight){const X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(V),X.groundColor.copy(A.groundColor).multiplyScalar(V),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==x||D.numSpotShadows!==v||D.numSpotMaps!==C||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=x,D.numSpotShadows=v,D.numSpotMaps=C,D.numLightProbes=I,n.version=c_++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Lh(i){const t=new u_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function d_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Lh(i),t.set(s,[a])):r>=o.length?(a=new Lh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`;function m_(i,t,e){let n=new Kl;const s=new dt,r=new dt,o=new ge,a=new Fp({depthPacking:Jd}),l=new Op,c={},u=e.maxTextureSize,h={[Ei]:sn,[sn]:Ei,[Fe]:Fe},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let p=this.type;this.render=function(R,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==si&&this.type===si,Y=p===si&&this.type!==si;for(let W=0,X=R.length;W<X;W++){const nt=R[W],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const yt=$.getFrameExtents();if(s.multiply(yt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/yt.x),s.x=r.x*yt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/yt.y),s.y=r.y*yt.y,$.mapSize.y=r.y)),$.map===null||V===!0||Y===!0){const Lt=this.type!==si?{minFilter:_n,magFilter:_n}:{};$.map!==null&&$.map.dispose(),$.map=new wi(s.x,s.y,Lt),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Et=$.getViewportCount();for(let Lt=0;Lt<Et;Lt++){const P=$.getViewport(Lt);o.set(r.x*P.x,r.y*P.y,r.x*P.z,r.y*P.w),U.viewport(o),$.updateMatrices(nt,Lt),n=$.getFrustum(),v(I,D,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===si&&w($,D),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,A)};function w(R,I){const D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,D,f,_,null)}function x(R,I,D,b){let M=null;const A=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const U=M.uuid,V=I.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let W=Y[V];W===void 0&&(W=M.clone(),Y[V]=W,I.addEventListener("dispose",C)),M=W}if(M.visible=I.visible,M.wireframe=I.wireframe,b===si?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:h[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=D}return M}function v(R,I,D,b,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===si)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const V=t.update(R),Y=R.material;if(Array.isArray(Y)){const W=V.groups;for(let X=0,nt=W.length;X<nt;X++){const $=W[X],yt=Y[$.materialIndex];if(yt&&yt.visible){const Et=x(R,yt,b,M);R.onBeforeShadow(i,R,I,D,V,Et,$),i.renderBufferDirect(D,null,V,Et,R,$),R.onAfterShadow(i,R,I,D,V,Et,$)}}}else if(Y.visible){const W=x(R,Y,b,M);R.onBeforeShadow(i,R,I,D,V,W,null),i.renderBufferDirect(D,null,V,W,R,null),R.onAfterShadow(i,R,I,D,V,W,null)}}const U=R.children;for(let V=0,Y=U.length;V<Y;V++)v(U[V],I,D,b,M)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const b=c[D],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const g_={[za]:ka,[Ha]:Wa,[Va]:Xa,[Is]:Ga,[ka]:za,[Wa]:Ha,[Xa]:Va,[Ga]:Is};function __(i,t){function e(){let F=!1;const mt=new ge;let St=null;const Ut=new ge(0,0,0,0);return{setMask:function(gt){St!==gt&&!F&&(i.colorMask(gt,gt,gt,gt),St=gt)},setLocked:function(gt){F=gt},setClear:function(gt,at,kt,Qt,Te){Te===!0&&(gt*=Qt,at*=Qt,kt*=Qt),mt.set(gt,at,kt,Qt),Ut.equals(mt)===!1&&(i.clearColor(gt,at,kt,Qt),Ut.copy(mt))},reset:function(){F=!1,St=null,Ut.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,St=null,Ut=null,gt=null;return{setReversed:function(at){if(mt!==at){const kt=t.get("EXT_clip_control");at?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),mt=at;const Qt=gt;gt=null,this.setClear(Qt)}},getReversed:function(){return mt},setTest:function(at){at?q(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(at){St!==at&&!F&&(i.depthMask(at),St=at)},setFunc:function(at){if(mt&&(at=g_[at]),Ut!==at){switch(at){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=at}},setLocked:function(at){F=at},setClear:function(at){gt!==at&&(mt&&(at=1-at),i.clearDepth(at),gt=at)},reset:function(){F=!1,St=null,Ut=null,gt=null,mt=!1}}}function s(){let F=!1,mt=null,St=null,Ut=null,gt=null,at=null,kt=null,Qt=null,Te=null;return{setTest:function(pe){F||(pe?q(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!F&&(i.stencilMask(pe),mt=pe)},setFunc:function(pe,Jn,Hn){(St!==pe||Ut!==Jn||gt!==Hn)&&(i.stencilFunc(pe,Jn,Hn),St=pe,Ut=Jn,gt=Hn)},setOp:function(pe,Jn,Hn){(at!==pe||kt!==Jn||Qt!==Hn)&&(i.stencilOp(pe,Jn,Hn),at=pe,kt=Jn,Qt=Hn)},setLocked:function(pe){F=pe},setClear:function(pe){Te!==pe&&(i.clearStencil(pe),Te=pe)},reset:function(){F=!1,mt=null,St=null,Ut=null,gt=null,at=null,kt=null,Qt=null,Te=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,x=null,v=null,C=null,R=null,I=new te(0,0,0),D=0,b=!1,M=null,A=null,U=null,V=null,Y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,nt=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),X=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=nt>=2);let yt=null,Et={};const Lt=i.getParameter(i.SCISSOR_BOX),P=i.getParameter(i.VIEWPORT),N=new ge().fromArray(Lt),O=new ge().fromArray(P);function G(F,mt,St,Ut){const gt=new Uint8Array(4),at=i.createTexture();i.bindTexture(F,at),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<St;kt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(mt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return at}const z={};z[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(Is),it(!1),tt(xc),q(i.CULL_FACE),rt(Mi);function q(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function et(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Rt(F,mt){return h[F]!==mt?(i.bindFramebuffer(F,mt),h[F]=mt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function vt(F,mt){let St=f,Ut=!1;if(F){St=d.get(mt),St===void 0&&(St=[],d.set(mt,St));const gt=F.textures;if(St.length!==gt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let at=0,kt=gt.length;at<kt;at++)St[at]=i.COLOR_ATTACHMENT0+at;St.length=gt.length,Ut=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(St)}function Ht(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const re={[Hi]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};re[Ad]=i.MIN,re[Rd]=i.MAX;const L={[Cd]:i.ZERO,[Pd]:i.ONE,[Ld]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Dd]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[zd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[Hd]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(F,mt,St,Ut,gt,at,kt,Qt,Te,pe){if(F===Mi){_===!0&&(et(i.BLEND),_=!1);return}if(_===!1&&(q(i.BLEND),_=!0),F!==Ed){if(F!==m||pe!==b){if((p!==Hi||v!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,v=Hi),pe)switch(F){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ki:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,x=null,C=null,R=null,I.set(0,0,0),D=0,m=F,b=pe}return}gt=gt||mt,at=at||St,kt=kt||Ut,(mt!==p||gt!==v)&&(i.blendEquationSeparate(re[mt],re[gt]),p=mt,v=gt),(St!==w||Ut!==x||at!==C||kt!==R)&&(i.blendFuncSeparate(L[St],L[Ut],L[at],L[kt]),w=St,x=Ut,C=at,R=kt),(Qt.equals(I)===!1||Te!==D)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Te),I.copy(Qt),D=Te),m=F,b=!1}function st(F,mt){F.side===Fe?et(i.CULL_FACE):q(i.CULL_FACE);let St=F.side===sn;mt&&(St=!St),it(St),F.blending===Cs&&F.transparent===!1?rt(Mi):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ut=F.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function tt(F){F!==Sd?(q(i.CULL_FACE),F!==A&&(F===xc?i.cullFace(i.BACK):F===bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),A=F}function pt(F){F!==U&&(X&&i.lineWidth(F),U=F)}function ot(F,mt,St){F?(q(i.POLYGON_OFFSET_FILL),(V!==mt||Y!==St)&&(i.polygonOffset(mt,St),V=mt,Y=St)):et(i.POLYGON_OFFSET_FILL)}function Mt(F){F?q(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function Wt(F){F===void 0&&(F=i.TEXTURE0+W-1),yt!==F&&(i.activeTexture(F),yt=F)}function Xt(F,mt,St){St===void 0&&(yt===null?St=i.TEXTURE0+W-1:St=yt);let Ut=Et[St];Ut===void 0&&(Ut={type:void 0,texture:void 0},Et[St]=Ut),(Ut.type!==F||Ut.texture!==mt)&&(yt!==St&&(i.activeTexture(St),yt=St),i.bindTexture(F,mt||z[F]),Ut.type=F,Ut.texture=mt)}function T(){const F=Et[yt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(F){N.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),N.copy(F))}function Yt(F){O.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),O.copy(F))}function Dt(F,mt){let St=c.get(mt);St===void 0&&(St=new WeakMap,c.set(mt,St));let Ut=St.get(F);Ut===void 0&&(Ut=i.getUniformBlockIndex(mt,F.name),St.set(F,Ut))}function wt(F,mt){const Ut=c.get(mt).get(F);l.get(mt)!==Ut&&(i.uniformBlockBinding(mt,Ut,F.__bindingPointIndex),l.set(mt,Ut))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},yt=null,Et={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,x=null,v=null,C=null,R=null,I=new te(0,0,0),D=0,b=!1,M=null,A=null,U=null,V=null,Y=null,N.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:et,bindFramebuffer:Rt,drawBuffers:vt,useProgram:Ht,setBlending:rt,setMaterial:st,setFlipSided:it,setCullFace:tt,setLineWidth:pt,setPolygonOffset:ot,setScissorTest:Mt,activeTexture:Wt,bindTexture:Xt,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Ft,texImage3D:ft,updateUBOMapping:Dt,uniformBlockBinding:wt,texStorage2D:xt,texStorage3D:Bt,texSubImage2D:j,texSubImage3D:ht,compressedTexSubImage2D:J,compressedTexSubImage3D:It,scissor:At,viewport:Yt,reset:$t}}function v_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):To("canvas")}function _(T,y,k){let j=1;const ht=Xt(T);if((ht.width>k||ht.height>k)&&(j=k/Math.max(ht.width,ht.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(j*ht.width),It=Math.floor(j*ht.height);h===void 0&&(h=g(J,It));const xt=y?g(J,It):h;return xt.width=J,xt.height=It,xt.getContext("2d").drawImage(T,0,0,J,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+J+"x"+It+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,y,k,j,ht=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=y;if(y===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),y===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){const It=ht?Eo:de.getTransfer(j);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=It===Me?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(T,y){let k;return T?y===null||y===ji||y===xr?k=i.DEPTH24_STENCIL8:y===Wn?k=i.DEPTH32F_STENCIL8:y===vr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ji||y===xr?k=i.DEPTH_COMPONENT24:y===Wn?k=i.DEPTH_COMPONENT32F:y===vr&&(k=i.DEPTH_COMPONENT16),k}function C(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),D(y),y.isVideoTexture&&u.delete(y)}function I(T){const y=T.target;y.removeEventListener("dispose",I),M(y)}function D(T){const y=n.get(T);if(y.__webglInit===void 0)return;const k=T.source,j=d.get(k);if(j){const ht=j[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&b(T),Object.keys(j).length===0&&d.delete(k)}n.remove(T)}function b(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const k=T.source,j=d.get(k);delete j[y.__cacheKey],o.memory.textures--}function M(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ht=0;ht<y.__webglFramebuffer[j].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[j][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let j=0,ht=k.length;j<ht;j++){const J=n.get(k[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(T)}let A=0;function U(){A=0}function V(){const T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function Y(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const k=n.get(T);if(T.isVideoTexture&&Mt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(k,T,y);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function X(T,y){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){z(k,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function nt(T,y){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){z(k,T,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function $(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const yt={[$n]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},Et={[_n]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Lt={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[mu]:i.LEQUAL,[nf]:i.EQUAL,[of]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function P(T,y){if(y.type===Wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===jo||y.magFilter===Or||y.magFilter===Wi||y.minFilter===Gn||y.minFilter===jo||y.minFilter===Or||y.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,yt[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,yt[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,yt[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Et[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_n||y.minFilter!==Or&&y.minFilter!==Wi||y.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function N(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const j=y.source;let ht=d.get(j);ht===void 0&&(ht={},d.set(j,ht));const J=Y(y);if(J!==T.__cacheKey){ht[J]===void 0&&(ht[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ht[J].usedTimes++;const It=ht[T.__cacheKey];It!==void 0&&(ht[T.__cacheKey].usedTimes--,It.usedTimes===0&&b(y)),T.__cacheKey=J,T.__webglTexture=ht[J].texture}return k}function O(T,y,k){return Math.floor(Math.floor(T/k)/y)}function G(T,y,k,j){const J=T.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,j,y.data);else{J.sort((ft,At)=>ft.start-At.start);let It=0;for(let ft=1;ft<J.length;ft++){const At=J[It],Yt=J[ft],Dt=At.start+At.count,wt=O(Yt.start,y.width,4),$t=O(At.start,y.width,4);Yt.start<=Dt+1&&wt===$t&&O(Yt.start+Yt.count-1,y.width,4)===wt?At.count=Math.max(At.count,Yt.start+Yt.count-At.start):(++It,J[It]=Yt)}J.length=It+1;const xt=i.getParameter(i.UNPACK_ROW_LENGTH),Bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ft=0,At=J.length;ft<At;ft++){const Yt=J[ft],Dt=Math.floor(Yt.start/4),wt=Math.ceil(Yt.count/4),$t=Dt%y.width,F=Math.floor(Dt/y.width),mt=wt,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,$t,F,mt,St,k,j,y.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function z(T,y,k){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const ht=N(T,y),J=y.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+k);const It=n.get(J);if(J.version!==It.__version||ht===!0){e.activeTexture(i.TEXTURE0+k);const xt=de.getPrimaries(de.workingColorSpace),Bt=y.colorSpace===xi?null:de.getPrimaries(y.colorSpace),Ft=y.colorSpace===xi||xt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ft=_(y.image,!1,s.maxTextureSize);ft=Wt(y,ft);const At=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type);let Dt=x(y.internalFormat,At,Yt,y.colorSpace,y.isVideoTexture);P(j,y);let wt;const $t=y.mipmaps,F=y.isVideoTexture!==!0,mt=It.__version===void 0||ht===!0,St=J.dataReady,Ut=C(y,ft);if(y.isDepthTexture)Dt=v(y.format===Mr,y.type),mt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,At,Yt,null));else if(y.isDataTexture)if($t.length>0){F&&mt&&e.texStorage2D(i.TEXTURE_2D,Ut,Dt,$t[0].width,$t[0].height);for(let gt=0,at=$t.length;gt<at;gt++)wt=$t[gt],F?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,wt.width,wt.height,At,Yt,wt.data):e.texImage2D(i.TEXTURE_2D,gt,Dt,wt.width,wt.height,0,At,Yt,wt.data);y.generateMipmaps=!1}else F?(mt&&e.texStorage2D(i.TEXTURE_2D,Ut,Dt,ft.width,ft.height),St&&G(y,ft,At,Yt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,At,Yt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Dt,$t[0].width,$t[0].height,ft.depth);for(let gt=0,at=$t.length;gt<at;gt++)if(wt=$t[gt],y.format!==On)if(At!==null)if(F){if(St)if(y.layerUpdates.size>0){const kt=ah(wt.width,wt.height,y.format,y.type);for(const Qt of y.layerUpdates){const Te=wt.data.subarray(Qt*kt/wt.data.BYTES_PER_ELEMENT,(Qt+1)*kt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Qt,wt.width,wt.height,1,At,Te)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,wt.width,wt.height,ft.depth,At,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Dt,wt.width,wt.height,ft.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,wt.width,wt.height,ft.depth,At,Yt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Dt,wt.width,wt.height,ft.depth,0,At,Yt,wt.data)}else{F&&mt&&e.texStorage2D(i.TEXTURE_2D,Ut,Dt,$t[0].width,$t[0].height);for(let gt=0,at=$t.length;gt<at;gt++)wt=$t[gt],y.format!==On?At!==null?F?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Dt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,wt.width,wt.height,At,Yt,wt.data):e.texImage2D(i.TEXTURE_2D,gt,Dt,wt.width,wt.height,0,At,Yt,wt.data)}else if(y.isDataArrayTexture)if(F){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Dt,ft.width,ft.height,ft.depth),St)if(y.layerUpdates.size>0){const gt=ah(ft.width,ft.height,y.format,y.type);for(const at of y.layerUpdates){const kt=ft.data.subarray(at*gt/ft.data.BYTES_PER_ELEMENT,(at+1)*gt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ft.width,ft.height,1,At,Yt,kt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,Yt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,At,Yt,ft.data);else if(y.isData3DTexture)F?(mt&&e.texStorage3D(i.TEXTURE_3D,Ut,Dt,ft.width,ft.height,ft.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,Yt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,At,Yt,ft.data);else if(y.isFramebufferTexture){if(mt)if(F)e.texStorage2D(i.TEXTURE_2D,Ut,Dt,ft.width,ft.height);else{let gt=ft.width,at=ft.height;for(let kt=0;kt<Ut;kt++)e.texImage2D(i.TEXTURE_2D,kt,Dt,gt,at,0,At,Yt,null),gt>>=1,at>>=1}}else if($t.length>0){if(F&&mt){const gt=Xt($t[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Dt,gt.width,gt.height)}for(let gt=0,at=$t.length;gt<at;gt++)wt=$t[gt],F?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,At,Yt,wt):e.texImage2D(i.TEXTURE_2D,gt,Dt,At,Yt,wt);y.generateMipmaps=!1}else if(F){if(mt){const gt=Xt(ft);e.texStorage2D(i.TEXTURE_2D,Ut,Dt,gt.width,gt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Yt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Dt,At,Yt,ft);m(y)&&p(j),It.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function q(T,y,k){if(y.image.length!==6)return;const j=N(T,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const J=n.get(ht);if(ht.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const It=de.getPrimaries(de.workingColorSpace),xt=y.colorSpace===xi?null:de.getPrimaries(y.colorSpace),Bt=y.colorSpace===xi||It===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Ft=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,At=[];for(let at=0;at<6;at++)!Ft&&!ft?At[at]=_(y.image[at],!0,s.maxCubemapSize):At[at]=ft?y.image[at].image:y.image[at],At[at]=Wt(y,At[at]);const Yt=At[0],Dt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),$t=x(y.internalFormat,Dt,wt,y.colorSpace),F=y.isVideoTexture!==!0,mt=J.__version===void 0||j===!0,St=ht.dataReady;let Ut=C(y,Yt);P(i.TEXTURE_CUBE_MAP,y);let gt;if(Ft){F&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,$t,Yt.width,Yt.height);for(let at=0;at<6;at++){gt=At[at].mipmaps;for(let kt=0;kt<gt.length;kt++){const Qt=gt[kt];y.format!==On?Dt!==null?F?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,0,0,Qt.width,Qt.height,Dt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,$t,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,0,0,Qt.width,Qt.height,Dt,wt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt,$t,Qt.width,Qt.height,0,Dt,wt,Qt.data)}}}else{if(gt=y.mipmaps,F&&mt){gt.length>0&&Ut++;const at=Xt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,$t,at.width,at.height)}for(let at=0;at<6;at++)if(ft){F?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,At[at].width,At[at].height,Dt,wt,At[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,At[at].width,At[at].height,0,Dt,wt,At[at].data);for(let kt=0;kt<gt.length;kt++){const Te=gt[kt].image[at].image;F?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,0,0,Te.width,Te.height,Dt,wt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,$t,Te.width,Te.height,0,Dt,wt,Te.data)}}else{F?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Dt,wt,At[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,Dt,wt,At[at]);for(let kt=0;kt<gt.length;kt++){const Qt=gt[kt];F?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,0,0,Dt,wt,Qt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt+1,$t,Dt,wt,Qt.image[at])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=ht.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,k,j,ht,J){const It=r.convert(k.format,k.colorSpace),xt=r.convert(k.type),Bt=x(k.internalFormat,It,xt,k.colorSpace),Ft=n.get(y),ft=n.get(k);if(ft.__renderTarget=y,!Ft.__hasExternalTextures){const At=Math.max(1,y.width>>J),Yt=Math.max(1,y.height>>J);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,J,Bt,At,Yt,y.depth,0,It,xt,null):e.texImage2D(ht,J,Bt,At,Yt,0,It,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ht,ft.__webglTexture,0,pt(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ht,ft.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(T,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const j=y.depthTexture,ht=j&&j.isDepthTexture?j.type:null,J=v(y.stencilBuffer,ht),It=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=pt(y);ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,J,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,T)}else{const j=y.textures;for(let ht=0;ht<j.length;ht++){const J=j[ht],It=r.convert(J.format,J.colorSpace),xt=r.convert(J.type),Bt=x(J.internalFormat,It,xt,J.colorSpace),Ft=pt(y);k&&ot(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Bt,y.width,y.height):ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Bt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Bt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const ht=j.__webglTexture,J=pt(y);if(y.depthTexture.format===yr)ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(y.depthTexture.format===Mr)ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ht(T){const y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",ht)};j.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=j}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?vt(y.__webglFramebuffer[0],T):vt(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),Rt(y.__webglDepthbuffer[j],T,!1);else{const ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,J)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Rt(y.__webglDepthbuffer,T,!1);else{const ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,y,k){const j=n.get(T);y!==void 0&&et(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ht(T)}function L(T){const y=T.texture,k=n.get(T),j=n.get(y);T.addEventListener("dispose",I);const ht=T.textures,J=T.isWebGLCubeRenderTarget===!0,It=ht.length>1;if(It||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[xt]=[];for(let Bt=0;Bt<y.mipmaps.length;Bt++)k.__webglFramebuffer[xt][Bt]=i.createFramebuffer()}else k.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)k.__webglFramebuffer[xt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(It)for(let xt=0,Bt=ht.length;xt<Bt;xt++){const Ft=n.get(ht[xt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ot(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){const Bt=ht[xt];k.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[xt]);const Ft=r.convert(Bt.format,Bt.colorSpace),ft=r.convert(Bt.type),At=x(Bt.internalFormat,Ft,ft,Bt.colorSpace,T.isXRRenderTarget===!0),Yt=pt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,k.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),P(i.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Bt=0;Bt<y.mipmaps.length;Bt++)et(k.__webglFramebuffer[xt][Bt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt);else et(k.__webglFramebuffer[xt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let xt=0,Bt=ht.length;xt<Bt;xt++){const Ft=ht[xt],ft=n.get(Ft);let At=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(At=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,ft.__webglTexture),P(At,Ft),et(k.__webglFramebuffer,T,Ft,i.COLOR_ATTACHMENT0+xt,At,0),m(Ft)&&p(At)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,j.__webglTexture),P(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let Bt=0;Bt<y.mipmaps.length;Bt++)et(k.__webglFramebuffer[Bt],T,y,i.COLOR_ATTACHMENT0,xt,Bt);else et(k.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,xt,0);m(y)&&p(xt),e.unbindTexture()}T.depthBuffer&&Ht(T)}function rt(T){const y=T.textures;for(let k=0,j=y.length;k<j;k++){const ht=y[k];if(m(ht)){const J=w(T),It=n.get(ht).__webglTexture;e.bindTexture(J,It),p(J),e.unbindTexture()}}}const st=[],it=[];function tt(T){if(T.samples>0){if(ot(T)===!1){const y=T.textures,k=T.width,j=T.height;let ht=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(T),xt=y.length>1;if(xt)for(let Ft=0;Ft<y.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Bt=T.texture.mipmaps;Bt&&Bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ft=0;Ft<y.length;Ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);const ft=n.get(y[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,ht,i.NEAREST),l===!0&&(st.length=0,it.length=0,st.push(i.COLOR_ATTACHMENT0+Ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(J),it.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Ft=0;Ft<y.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ft]);const ft=n.get(y[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function pt(T){return Math.min(s.maxSamples,T.samples)}function ot(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Wt(T,y){const k=T.colorSpace,j=T.format,ht=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Ns&&k!==xi&&(de.getTransfer(k)===Me?(j!==On||ht!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=$,this.rebindTextures=re,this.setupRenderTarget=L,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ot}function x_(i,t){function e(n,s=xi){let r;const o=de.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===au)return i.BYTE;if(n===lu)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===du)return i.RGB;if(n===On)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Mr)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===fu)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===go||n===_o||n===vo||n===xo)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Za||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Qa)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===xl||n===yl||n===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`;class S_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Au(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:y_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends Hs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new S_,p={},w=e.getContextAttributes();let x=null,v=null;const C=[],R=[],I=new dt;let D=null;const b=new an;b.viewport=new ge;const M=new an;M.viewport=new ge;const A=[b,M],U=new Vp;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=C[z];return q===void 0&&(q=new va,C[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=C[z];return q===void 0&&(q=new va,C[z]=q),q.getGripSpace()},this.getHand=function(z){let q=C[z];return q===void 0&&(q=new va,C[z]=q),q.getHandSpace()};function W(z){const q=R.indexOf(z.inputSource);if(q===-1)return;const et=C[q];et!==void 0&&(et.update(z.inputSource,z.frame,c||o),et.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let z=0;z<C.length;z++){const q=R[z];q!==null&&(R[z]=null,C[z].disconnect(q))}V=null,Y=null,m.reset();for(const z in p)delete p[z];t.setRenderTarget(x),f=null,d=null,h=null,s=null,v=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),w.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Rt=null,vt=null;w.depth&&(vt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=w.stencil?Mr:yr,Rt=w.stencil?xr:ji);const Ht={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new wi(d.textureWidth,d.textureHeight,{format:On,type:Zn,depthTexture:new Tu(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new wi(f.framebufferWidth,f.framebufferHeight,{format:On,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(z){for(let q=0;q<z.removed.length;q++){const et=z.removed[q],Rt=R.indexOf(et);Rt>=0&&(R[Rt]=null,C[Rt].disconnect(et))}for(let q=0;q<z.added.length;q++){const et=z.added[q];let Rt=R.indexOf(et);if(Rt===-1){for(let Ht=0;Ht<C.length;Ht++)if(Ht>=R.length){R.push(et),Rt=Ht;break}else if(R[Ht]===null){R[Ht]=et,Rt=Ht;break}if(Rt===-1)break}const vt=C[Rt];vt&&vt.connect(et)}}const $=new S,yt=new S;function Et(z,q,et){$.setFromMatrixPosition(q.matrixWorld),yt.setFromMatrixPosition(et.matrixWorld);const Rt=$.distanceTo(yt),vt=q.projectionMatrix.elements,Ht=et.projectionMatrix.elements,re=vt[14]/(vt[10]-1),L=vt[14]/(vt[10]+1),rt=(vt[9]+1)/vt[5],st=(vt[9]-1)/vt[5],it=(vt[8]-1)/vt[0],tt=(Ht[8]+1)/Ht[0],pt=re*it,ot=re*tt,Mt=Rt/(-it+tt),Wt=Mt*-it;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Wt),z.translateZ(Mt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),vt[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Xt=re+Mt,T=L+Mt,y=pt-Wt,k=ot+(Rt-Wt),j=rt*L/T*Xt,ht=st*L/T*Xt;z.projectionMatrix.makePerspective(y,k,j,ht,Xt,T),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Lt(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let q=z.near,et=z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(et=m.depthFar)),U.near=M.near=b.near=q,U.far=M.far=b.far=et,(V!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,Y=U.far),U.layers.mask=z.layers.mask|6,b.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Rt=z.parent,vt=U.cameras;Lt(U,Rt);for(let Ht=0;Ht<vt.length;Ht++)Lt(vt[Ht],Rt);vt.length===2?Et(U,b,M):U.projectionMatrix.copy(b.projectionMatrix),P(z,U,Rt)};function P(z,q,et){et===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(et.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Sr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(z){return p[z]};let N=null;function O(z,q){if(u=q.getViewerPose(c||o),g=q,u!==null){const et=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Rt=!1;et.length!==U.cameras.length&&(U.cameras.length=0,Rt=!0);for(let L=0;L<et.length;L++){const rt=et[L];let st=null;if(f!==null)st=f.getViewport(rt);else{const tt=h.getViewSubImage(d,rt);st=tt.viewport,L===0&&(t.setRenderTargetTextures(v,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(v))}let it=A[L];it===void 0&&(it=new an,it.layers.enable(L),it.viewport=new ge,A[L]=it),it.matrix.fromArray(rt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(rt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(st.x,st.y,st.width,st.height),L===0&&(U.matrix.copy(it.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Rt===!0&&U.cameras.push(it)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(et[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let L=0;L<et.length;L++){const rt=et[L].camera;if(rt){let st=p[rt];st||(st=new Au,p[rt]=st);const it=h.getCameraImage(rt);st.sourceTexture=it}}}}for(let et=0;et<C.length;et++){const Rt=R[et],vt=C[et];Rt!==null&&vt!==void 0&&vt.update(Rt,q,c||o)}N&&N(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const G=new zu;G.setAnimationLoop(O),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}const Fi=new zn,E_=new le;function w_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),x=w.envMap,v=w.envMapRotation;x&&(m.envMap.value=x,Fi.copy(v),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(Fi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const v=x.program;n.uniformBlockBinding(w,v)}function c(w,x){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(w,C);const R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function u(w){const x=h();w.__bindingPointIndex=x;const v=i.createBuffer(),C=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],v=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,I=v.length;R<I;R++){const D=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,M=D.length;b<M;b++){const A=D[b];if(f(A,R,b,C)===!0){const U=A.__offset,V=Array.isArray(A.value)?A.value:[A.value];let Y=0;for(let W=0;W<V.length;W++){const X=V[W],nt=_(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,Y),Y+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,x,v,C){const R=w.value,I=x+"_"+v;if(C[I]===void 0)return typeof R=="number"||typeof R=="boolean"?C[I]=R:C[I]=R.clone(),!0;{const D=C[I];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[I]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(w){const x=w.uniforms;let v=0;const C=16;for(let I=0,D=x.length;I<D;I++){const b=Array.isArray(x[I])?x[I]:[x[I]];for(let M=0,A=b.length;M<A;M++){const U=b[M],V=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,W=V.length;Y<W;Y++){const X=V[Y],nt=_(X),$=v%C,yt=$%nt.boundary,Et=$+yt;v+=yt,Et!==0&&C-Et<nt.storage&&(v+=C-Et),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=nt.storage}}}const R=v%C;return R>0&&(v+=C-R),w.__size=v,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class A_{constructor(t={}){const{canvas:e=Ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=xe;let R=0,I=0,D=null,b=-1,M=null;const A=new ge,U=new ge;let V=null;const Y=new te(0);let W=0,X=e.width,nt=e.height,$=1,yt=null,Et=null;const Lt=new ge(0,0,X,nt),P=new ge(0,0,X,nt);let N=!1;const O=new Kl;let G=!1,z=!1;const q=new le,et=new S,Rt=new ge,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function re(){return D===null?$:1}let L=n;function rt(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){const B="webgl2";if(L=rt(B,E),L===null)throw rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,it,tt,pt,ot,Mt,Wt,Xt,T,y,k,j,ht,J,It,xt,Bt,Ft,ft,At,Yt,Dt,wt,$t;function F(){st=new Og(L),st.init(),Dt=new x_(L,st),it=new Pg(L,st,t,Dt),tt=new __(L,st),it.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),pt=new kg(L),ot=new s_,Mt=new v_(L,st,tt,ot,it,Dt,pt),Wt=new Ig(v),Xt=new Fg(v),T=new Yp(L),wt=new Rg(L,T),y=new Bg(L,T,pt,wt),k=new Vg(L,y,T,pt),ft=new Hg(L,it,Mt),xt=new Lg(ot),j=new i_(v,Wt,Xt,st,it,wt,xt),ht=new w_(v,ot),J=new o_,It=new d_(st),Ft=new Ag(v,Wt,Xt,tt,k,f,l),Bt=new m_(v,k,it),$t=new T_(L,pt,it,tt),At=new Cg(L,st,pt),Yt=new zg(L,st,pt),pt.programs=j.programs,v.capabilities=it,v.extensions=st,v.properties=ot,v.renderLists=J,v.shadowMap=Bt,v.state=tt,v.info=pt}F();const mt=new b_(v,L);this.xr=mt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(X,nt,!1))},this.getSize=function(E){return E.set(X,nt)},this.setSize=function(E,B,Z=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,nt=B,e.width=Math.floor(E*$),e.height=Math.floor(B*$),Z===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(X*$,nt*$).floor()},this.setDrawingBufferSize=function(E,B,Z){X=E,nt=B,$=Z,e.width=Math.floor(E*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Lt)},this.setViewport=function(E,B,Z,K){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,B,Z,K),tt.viewport(A.copy(Lt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(P)},this.setScissor=function(E,B,Z,K){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,B,Z,K),tt.scissor(U.copy(P).multiplyScalar($).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(E){tt.setScissorTest(N=E)},this.setOpaqueSort=function(E){yt=E},this.setTransparentSort=function(E){Et=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Z=!0){let K=0;if(E){let H=!1;if(D!==null){const _t=D.texture.format;H=_t===Wl||_t===Gl||_t===Vl}if(H){const _t=D.texture.type,Ct=_t===Zn||_t===ji||_t===vr||_t===xr||_t===zl||_t===kl,zt=Ft.getClearColor(),Nt=Ft.getClearAlpha(),Zt=zt.r,Kt=zt.g,Vt=zt.b;Ct?(g[0]=Zt,g[1]=Kt,g[2]=Vt,g[3]=Nt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Zt,_[1]=Kt,_[2]=Vt,_[3]=Nt,L.clearBufferiv(L.COLOR,0,_))}else K|=L.COLOR_BUFFER_BIT}B&&(K|=L.DEPTH_BUFFER_BIT),Z&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Ft.dispose(),J.dispose(),It.dispose(),ot.dispose(),Wt.dispose(),Xt.dispose(),k.dispose(),wt.dispose(),$t.dispose(),j.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Hn),mt.removeEventListener("sessionend",fc),Ci.stop()};function St(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=pt.autoReset,B=Bt.enabled,Z=Bt.autoUpdate,K=Bt.needsUpdate,H=Bt.type;F(),pt.autoReset=E,Bt.enabled=B,Bt.autoUpdate=Z,Bt.needsUpdate=K,Bt.type=H}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){const B=E.target;B.removeEventListener("dispose",at),kt(B)}function kt(E){Qt(E),ot.remove(E)}function Qt(E){const B=ot.get(E).programs;B!==void 0&&(B.forEach(function(Z){j.releaseProgram(Z)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,K,H,_t){B===null&&(B=vt);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,zt=gd(E,B,Z,K,H);tt.setMaterial(K,Ct);let Nt=Z.index,Zt=1;if(K.wireframe===!0){if(Nt=y.getWireframeAttribute(Z),Nt===void 0)return;Zt=2}const Kt=Z.drawRange,Vt=Z.attributes.position;let ce=Kt.start*Zt,ye=(Kt.start+Kt.count)*Zt;_t!==null&&(ce=Math.max(ce,_t.start*Zt),ye=Math.min(ye,(_t.start+_t.count)*Zt)),Nt!==null?(ce=Math.max(ce,0),ye=Math.min(ye,Nt.count)):Vt!=null&&(ce=Math.max(ce,0),ye=Math.min(ye,Vt.count));const Ue=ye-ce;if(Ue<0||Ue===1/0)return;wt.setup(H,K,zt,Z,Nt);let Pe,Ee=At;if(Nt!==null&&(Pe=T.get(Nt),Ee=Yt,Ee.setIndex(Pe)),H.isMesh)K.wireframe===!0?(tt.setLineWidth(K.wireframeLinewidth*re()),Ee.setMode(L.LINES)):Ee.setMode(L.TRIANGLES);else if(H.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),tt.setLineWidth(qt*re()),H.isLineSegments?Ee.setMode(L.LINES):H.isLineLoop?Ee.setMode(L.LINE_LOOP):Ee.setMode(L.LINE_STRIP)}else H.isPoints?Ee.setMode(L.POINTS):H.isSprite&&Ee.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ee.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qt=H._multiDrawStarts,Le=H._multiDrawCounts,ue=H._multiDrawCount,cn=Nt?T.get(Nt).bytesPerElement:1,ss=ot.get(K).currentProgram.getUniforms();for(let hn=0;hn<ue;hn++)ss.setValue(L,"_gl_DrawID",hn),Ee.render(qt[hn]/cn,Le[hn])}else if(H.isInstancedMesh)Ee.renderInstances(ce,Ue,H.count);else if(Z.isInstancedBufferGeometry){const qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Le=Math.min(Z.instanceCount,qt);Ee.renderInstances(ce,Ue,Le)}else Ee.render(ce,Ue)};function Te(E,B,Z){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Fr(E,B,Z),E.side=Ei,E.needsUpdate=!0,Fr(E,B,Z),E.side=Fe):Fr(E,B,Z)}this.compile=function(E,B,Z=null){Z===null&&(Z=E),p=It.get(Z),p.init(B),x.push(p),Z.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==Z&&E.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const zt=_t[Ct];Te(zt,Z,H),K.add(zt)}else Te(_t,Z,H),K.add(_t)}),p=x.pop(),K},this.compileAsync=function(E,B,Z=null){const K=this.compile(E,B,Z);return new Promise(H=>{function _t(){if(K.forEach(function(Ct){ot.get(Ct).currentProgram.isReady()&&K.delete(Ct)}),K.size===0){H(E);return}setTimeout(_t,10)}st.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let pe=null;function Jn(E){pe&&pe(E)}function Hn(){Ci.stop()}function fc(){Ci.start()}const Ci=new zu;Ci.setAnimationLoop(Jn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){pe=E,mt.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},mt.addEventListener("sessionstart",Hn),mt.addEventListener("sessionend",fc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(B),B=mt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,D),p=It.get(E,x.length),p.init(B),x.push(p),q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),O.setFromProjectionMatrix(q,Xn,B.reversedDepth),z=this.localClippingEnabled,G=xt.init(this.clippingPlanes,z),m=J.get(E,w.length),m.init(),w.push(m),mt.enabled===!0&&mt.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&Zo(_t,B,-1/0,v.sortObjects)}Zo(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(yt,Et),Ht=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Ht&&Ft.addToRenderList(m,E),this.info.render.frame++,G===!0&&xt.beginShadows();const Z=p.state.shadowsArray;Bt.render(Z,E,B),G===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(p.setupLights(),B.isArrayCamera){const _t=B.cameras;if(H.length>0)for(let Ct=0,zt=_t.length;Ct<zt;Ct++){const Nt=_t[Ct];mc(K,H,E,Nt)}Ht&&Ft.render(E);for(let Ct=0,zt=_t.length;Ct<zt;Ct++){const Nt=_t[Ct];pc(m,E,Nt,Nt.viewport)}}else H.length>0&&mc(K,H,E,B),Ht&&Ft.render(E),pc(m,E,B);D!==null&&I===0&&(Mt.updateMultisampleRenderTarget(D),Mt.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(v,E,B),wt.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],G===!0&&xt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Zo(E,B,Z,K){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||O.intersectsSprite(E)){K&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Ct=k.update(E),zt=E.material;zt.visible&&m.push(E,Ct,zt,Z,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||O.intersectsObject(E))){const Ct=k.update(E),zt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Rt.copy(Ct.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(q)),Array.isArray(zt)){const Nt=Ct.groups;for(let Zt=0,Kt=Nt.length;Zt<Kt;Zt++){const Vt=Nt[Zt],ce=zt[Vt.materialIndex];ce&&ce.visible&&m.push(E,Ct,ce,Z,Rt.z,Vt)}}else zt.visible&&m.push(E,Ct,zt,Z,Rt.z,null)}}const _t=E.children;for(let Ct=0,zt=_t.length;Ct<zt;Ct++)Zo(_t[Ct],B,Z,K)}function pc(E,B,Z,K){const H=E.opaque,_t=E.transmissive,Ct=E.transparent;p.setupLightsView(Z),G===!0&&xt.setGlobalState(v.clippingPlanes,Z),K&&tt.viewport(A.copy(K)),H.length>0&&Nr(H,B,Z),_t.length>0&&Nr(_t,B,Z),Ct.length>0&&Nr(Ct,B,Z),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function mc(E,B,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new wi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ks:Zn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const _t=p.state.transmissionRenderTarget[K.id],Ct=K.viewport||A;_t.setSize(Ct.z*v.transmissionResolutionScale,Ct.w*v.transmissionResolutionScale);const zt=v.getRenderTarget(),Nt=v.getActiveCubeFace(),Zt=v.getActiveMipmapLevel();v.setRenderTarget(_t),v.getClearColor(Y),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&Ft.render(Z);const Kt=v.toneMapping;v.toneMapping=Si;const Vt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),G===!0&&xt.setGlobalState(v.clippingPlanes,K),Nr(E,Z,K),Mt.updateMultisampleRenderTarget(_t),Mt.updateRenderTargetMipmap(_t),st.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let ye=0,Ue=B.length;ye<Ue;ye++){const Pe=B[ye],Ee=Pe.object,qt=Pe.geometry,Le=Pe.material,ue=Pe.group;if(Le.side===Fe&&Ee.layers.test(K.layers)){const cn=Le.side;Le.side=sn,Le.needsUpdate=!0,gc(Ee,Z,K,qt,Le,ue),Le.side=cn,Le.needsUpdate=!0,ce=!0}}ce===!0&&(Mt.updateMultisampleRenderTarget(_t),Mt.updateRenderTargetMipmap(_t))}v.setRenderTarget(zt,Nt,Zt),v.setClearColor(Y,W),Vt!==void 0&&(K.viewport=Vt),v.toneMapping=Kt}function Nr(E,B,Z){const K=B.isScene===!0?B.overrideMaterial:null;for(let H=0,_t=E.length;H<_t;H++){const Ct=E[H],zt=Ct.object,Nt=Ct.geometry,Zt=Ct.group;let Kt=Ct.material;Kt.allowOverride===!0&&K!==null&&(Kt=K),zt.layers.test(Z.layers)&&gc(zt,B,Z,Nt,Kt,Zt)}}function gc(E,B,Z,K,H,_t){E.onBeforeRender(v,B,Z,K,H,_t),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,B,Z,K,E,_t),H.transparent===!0&&H.side===Fe&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,v.renderBufferDirect(Z,B,K,H,E,_t),H.side=Ei,H.needsUpdate=!0,v.renderBufferDirect(Z,B,K,H,E,_t),H.side=Fe):v.renderBufferDirect(Z,B,K,H,E,_t),E.onAfterRender(v,B,Z,K,H,_t)}function Fr(E,B,Z){B.isScene!==!0&&(B=vt);const K=ot.get(E),H=p.state.lights,_t=p.state.shadowsArray,Ct=H.state.version,zt=j.getParameters(E,H.state,_t,B,Z),Nt=j.getProgramCacheKey(zt);let Zt=K.programs;K.environment=E.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(E.isMeshStandardMaterial?Xt:Wt).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Zt===void 0&&(E.addEventListener("dispose",at),Zt=new Map,K.programs=Zt);let Kt=Zt.get(Nt);if(Kt!==void 0){if(K.currentProgram===Kt&&K.lightsStateVersion===Ct)return vc(E,zt),Kt}else zt.uniforms=j.getUniforms(E),E.onBeforeCompile(zt,v),Kt=j.acquireProgram(zt,Nt),Zt.set(Nt,Kt),K.uniforms=zt.uniforms;const Vt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=xt.uniform),vc(E,zt),K.needsLights=vd(E),K.lightsStateVersion=Ct,K.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=Kt,K.uniformsList=null,Kt}function _c(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Mo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function vc(E,B){const Z=ot.get(E);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function gd(E,B,Z,K,H){B.isScene!==!0&&(B=vt),Mt.resetTextureUnits();const _t=B.fog,Ct=K.isMeshStandardMaterial?B.environment:null,zt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ns,Nt=(K.isMeshStandardMaterial?Xt:Wt).get(K.envMap||Ct),Zt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Kt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Vt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,ye=!!Z.morphAttributes.color;let Ue=Si;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const Pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=Pe!==void 0?Pe.length:0,qt=ot.get(K),Le=p.state.lights;if(G===!0&&(z===!0||E!==M)){const tn=E===M&&K.id===b;xt.setState(K,E,tn)}let ue=!1;K.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Le.state.version||qt.outputColorSpace!==zt||H.isBatchedMesh&&qt.batching===!1||!H.isBatchedMesh&&qt.batching===!0||H.isBatchedMesh&&qt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qt.instancing===!1||!H.isInstancedMesh&&qt.instancing===!0||H.isSkinnedMesh&&qt.skinning===!1||!H.isSkinnedMesh&&qt.skinning===!0||H.isInstancedMesh&&qt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qt.instancingMorph===!1&&H.morphTexture!==null||qt.envMap!==Nt||K.fog===!0&&qt.fog!==_t||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==xt.numPlanes||qt.numIntersection!==xt.numIntersection)||qt.vertexAlphas!==Zt||qt.vertexTangents!==Kt||qt.morphTargets!==Vt||qt.morphNormals!==ce||qt.morphColors!==ye||qt.toneMapping!==Ue||qt.morphTargetsCount!==Ee)&&(ue=!0):(ue=!0,qt.__version=K.version);let cn=qt.currentProgram;ue===!0&&(cn=Fr(K,B,H));let ss=!1,hn=!1,Ys=!1;const Ie=cn.getUniforms(),vn=qt.uniforms;if(tt.useProgram(cn.program)&&(ss=!0,hn=!0,Ys=!0),K.id!==b&&(b=K.id,hn=!0),ss||M!==E){tt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ie.setValue(L,"projectionMatrix",E.projectionMatrix),Ie.setValue(L,"viewMatrix",E.matrixWorldInverse);const on=Ie.map.cameraPosition;on!==void 0&&on.setValue(L,et.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,hn=!0,Ys=!0)}if(H.isSkinnedMesh){Ie.setOptional(L,H,"bindMatrix"),Ie.setOptional(L,H,"bindMatrixInverse");const tn=H.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ie.setValue(L,"boneTexture",tn.boneTexture,Mt))}H.isBatchedMesh&&(Ie.setOptional(L,H,"batchingTexture"),Ie.setValue(L,"batchingTexture",H._matricesTexture,Mt),Ie.setOptional(L,H,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",H._indirectTexture,Mt),Ie.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",H._colorsTexture,Mt));const xn=Z.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&ft.update(H,Z,cn),(hn||qt.receiveShadow!==H.receiveShadow)&&(qt.receiveShadow=H.receiveShadow,Ie.setValue(L,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(vn.envMap.value=Nt,vn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(vn.envMapIntensity.value=B.environmentIntensity),hn&&(Ie.setValue(L,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&_d(vn,Ys),_t&&K.fog===!0&&ht.refreshFogUniforms(vn,_t),ht.refreshMaterialUniforms(vn,K,$,nt,p.state.transmissionRenderTarget[E.id]),Mo.upload(L,_c(qt),vn,Mt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Mo.upload(L,_c(qt),vn,Mt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ie.setValue(L,"center",H.center),Ie.setValue(L,"modelViewMatrix",H.modelViewMatrix),Ie.setValue(L,"normalMatrix",H.normalMatrix),Ie.setValue(L,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const tn=K.uniformsGroups;for(let on=0,Ko=tn.length;on<Ko;on++){const Pi=tn[on];$t.update(Pi,cn),$t.bind(Pi,cn)}}return cn}function _d(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function vd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,B,Z){const K=ot.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ot.get(E.texture).__webglTexture=B,ot.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Z=ot.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0};const xd=L.createFramebuffer();this.setRenderTarget=function(E,B=0,Z=0){D=E,R=B,I=Z;let K=!0,H=null,_t=!1,Ct=!1;if(E){const Nt=ot.get(E);if(Nt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Nt.__webglFramebuffer===void 0)Mt.setupRenderTarget(E);else if(Nt.__hasExternalTextures)Mt.rebindTextures(E,ot.get(E.texture).__webglTexture,ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Vt=E.depthTexture;if(Nt.__boundDepthTexture!==Vt){if(Vt!==null&&ot.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(E)}}const Zt=E.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ct=!0);const Kt=ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Kt[B])?H=Kt[B][Z]:H=Kt[B],_t=!0):E.samples>0&&Mt.useMultisampledRTT(E)===!1?H=ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Kt)?H=Kt[Z]:H=Kt,A.copy(E.viewport),U.copy(E.scissor),V=E.scissorTest}else A.copy(Lt).multiplyScalar($).floor(),U.copy(P).multiplyScalar($).floor(),V=N;if(Z!==0&&(H=xd),tt.bindFramebuffer(L.FRAMEBUFFER,H)&&K&&tt.drawBuffers(E,H),tt.viewport(A),tt.scissor(U),tt.setScissorTest(V),_t){const Nt=ot.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Nt.__webglTexture,Z)}else if(Ct){const Nt=B;for(let Zt=0;Zt<E.textures.length;Zt++){const Kt=ot.get(E.textures[Zt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Zt,Kt.__webglTexture,Z,Nt)}}else if(E!==null&&Z!==0){const Nt=ot.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(E,B,Z,K,H,_t,Ct,zt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt){tt.bindFramebuffer(L.FRAMEBUFFER,Nt);try{const Zt=E.textures[zt],Kt=Zt.format,Vt=Zt.type;if(!it.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-K&&Z>=0&&Z<=E.height-H&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+zt),L.readPixels(B,Z,K,H,Dt.convert(Kt),Dt.convert(Vt),_t))}finally{const Zt=D!==null?ot.get(D).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(E,B,Z,K,H,_t,Ct,zt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt)if(B>=0&&B<=E.width-K&&Z>=0&&Z<=E.height-H){tt.bindFramebuffer(L.FRAMEBUFFER,Nt);const Zt=E.textures[zt],Kt=Zt.format,Vt=Zt.type;if(!it.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+zt),L.readPixels(B,Z,K,H,Dt.convert(Kt),Dt.convert(Vt),0);const ye=D!==null?ot.get(D).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,ye);const Ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wf(L,Ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(ce),L.deleteSync(Ue),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Z=0){const K=Math.pow(2,-Z),H=Math.floor(E.image.width*K),_t=Math.floor(E.image.height*K),Ct=B!==null?B.x:0,zt=B!==null?B.y:0;Mt.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Ct,zt,H,_t),tt.unbindTexture()};const yd=L.createFramebuffer(),Md=L.createFramebuffer();this.copyTextureToTexture=function(E,B,Z=null,K=null,H=0,_t=null){_t===null&&(H!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=H,H=0):_t=0);let Ct,zt,Nt,Zt,Kt,Vt,ce,ye,Ue;const Pe=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(Z!==null)Ct=Z.max.x-Z.min.x,zt=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,Zt=Z.min.x,Kt=Z.min.y,Vt=Z.isBox3?Z.min.z:0;else{const xn=Math.pow(2,-H);Ct=Math.floor(Pe.width*xn),zt=Math.floor(Pe.height*xn),E.isDataArrayTexture?Nt=Pe.depth:E.isData3DTexture?Nt=Math.floor(Pe.depth*xn):Nt=1,Zt=0,Kt=0,Vt=0}K!==null?(ce=K.x,ye=K.y,Ue=K.z):(ce=0,ye=0,Ue=0);const Ee=Dt.convert(B.format),qt=Dt.convert(B.type);let Le;B.isData3DTexture?(Mt.setTexture3D(B,0),Le=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Mt.setTexture2DArray(B,0),Le=L.TEXTURE_2D_ARRAY):(Mt.setTexture2D(B,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ue=L.getParameter(L.UNPACK_ROW_LENGTH),cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ss=L.getParameter(L.UNPACK_SKIP_PIXELS),hn=L.getParameter(L.UNPACK_SKIP_ROWS),Ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt);const Ie=E.isDataArrayTexture||E.isData3DTexture,vn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const xn=ot.get(E),tn=ot.get(B),on=ot.get(xn.__renderTarget),Ko=ot.get(tn.__renderTarget);tt.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let Pi=0;Pi<Nt;Pi++)Ie&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ot.get(E).__webglTexture,H,Vt+Pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,_t,Ue+Pi)),L.blitFramebuffer(Zt,Kt,Ct,zt,ce,ye,Ct,zt,L.DEPTH_BUFFER_BIT,L.NEAREST);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||ot.has(E)){const xn=ot.get(E),tn=ot.get(B);tt.bindFramebuffer(L.READ_FRAMEBUFFER,yd),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Md);for(let on=0;on<Nt;on++)Ie?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,H,Vt+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,H),vn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,_t,Ue+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,_t),H!==0?L.blitFramebuffer(Zt,Kt,Ct,zt,ce,ye,Ct,zt,L.COLOR_BUFFER_BIT,L.NEAREST):vn?L.copyTexSubImage3D(Le,_t,ce,ye,Ue+on,Zt,Kt,Ct,zt):L.copyTexSubImage2D(Le,_t,ce,ye,Zt,Kt,Ct,zt);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Le,_t,ce,ye,Ue,Ct,zt,Nt,Ee,qt,Pe.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,_t,ce,ye,Ue,Ct,zt,Nt,Ee,Pe.data):L.texSubImage3D(Le,_t,ce,ye,Ue,Ct,zt,Nt,Ee,qt,Pe):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,ce,ye,Ct,zt,Ee,qt,Pe.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,ce,ye,Pe.width,Pe.height,Ee,Pe.data):L.texSubImage2D(L.TEXTURE_2D,_t,ce,ye,Ct,zt,Ee,qt,Pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ss),L.pixelStorei(L.UNPACK_SKIP_ROWS,hn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ys),_t===0&&B.generateMipmaps&&L.generateMipmap(Le),tt.unbindTexture()},this.initRenderTarget=function(E){ot.get(E).__webglFramebuffer===void 0&&Mt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Mt.setTextureCube(E,0):E.isData3DTexture?Mt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Mt.setTexture2DArray(E,0):Mt.setTexture2D(E,0),tt.unbindTexture()},this.resetState=function(){R=0,I=0,D=null,tt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const R_=[[-19.45,0,-5.12,.014,20],[-19.41,2.59,-5.15,-.006,20],[-19.49,5.18,-5.13,-.005,20],[-13.3,0,-5.12,3.121,20],[3.7,0,-5.12,3.125,20],[3.73,2.59,-5.13,-.013,20],[13.53,0,-5.12,-.009,20],[13.56,2.59,-5.13,0,20],[-19.45,0,2.08,0,20],[-13.35,0,2.08,.001,20],[.8,0,2.08,.019,40],[.76,2.59,2.09,-.009,40],[3.82,5.18,2.05,.012,20],[12.3,0,2.08,.003,20],[12.31,2.59,2.05,-.011,20],[-21.1,0,9.92,.002,20],[-13.6,0,9.92,-.004,20],[-13.59,2.59,9.92,-.003,20],[-13.61,5.18,9.93,-.004,20],[-21.6,0,12.42,-0,20],[-21.59,2.59,12.42,0,20],[-21.6,5.18,12.42,-.001,20],[-15.4,0,12.42,-.003,20],[4.43,0,12.42,0,20],[13.53,0,12.42,0,20],[-16.4,0,20.12,-.017,40],[-16.36,2.59,20.08,.008,40],[-2.25,0,20.12,.011,20],[3.85,0,20.12,-.017,20],[3.86,2.59,20.14,-.011,20],[13.53,0,20.12,.015,20],[13.5,2.59,20.09,.012,20],[13.49,5.18,20.13,.008,20],[-16.4,0,22.62,-.008,41],[-16.39,2.9,22.61,-.013,40],[-16.43,5.49,22.65,.013,40],[.8,0,22.62,-.012,40],[.8,2.59,22.64,.007,41],[13.53,0,22.62,-.021,20],[-22.6,0,-19.2,1.55,40],[-22.59,2.59,-19.18,1.567,40],[-30.2,0,-18.4,.35,20],[-31.2,0,24.7,-.004,40],[-31.16,2.59,24.68,.01,40],[23.2,0,-28.6,-.013,20],[23.23,2.59,-28.58,.01,20],[23,0,-25.95,-.018,20]],C_=[["crate_wood",14.3,2.59,11.75,.1],["light_mast",-23.4,0,.5,0],["light_mast",-23.4,0,21.4,0],["light_mast",17,0,-8.7,0],["light_mast",17,0,18.6,0],["light_mast",-20.6,0,-11.6,0],["barrel",-19.6,0,3.85,0],["barrel",-18.9,0,3.95,.7],["pallet_stack",-17.4,0,4,.08],["crate_stack",-14.3,0,8.05,.04],["ibc_tote",-12.95,0,7.95,-.05],["forklift",-8.6,0,4.5,-.22],["pallet",-7.21,.54,4.81,-.22],["crate_wood",-7.21,.68,4.81,-.17],["jersey_barrier",-2.9,0,5.3,.12],["jersey_barrier",5.6,0,5,-.1],["ibc_tote",5.9,0,8.9,.1],["ibc_tote",5.95,0,10.05,-.05],["barrel",4.9,0,9.7,0],["crate_stack",-3.9,0,10.5,.1],["crate_wood",-3.8,0,9.35,-.2],["pallet_stack",-4.4,0,11.8,.02],["cable_reel",4.2,0,10.5,.3],["jersey_barrier",11.6,0,3.95,.03],["ibc_tote",15.2,0,10.2,.1],["traffic_cone",.2,0,6.3,0],["traffic_cone",2.9,0,6.4,0],["traffic_cone",2.9,0,8.8,0],["traffic_cone",.1,0,8.7,0],["sign_post",-4.8,0,3.72,1.571],["pallet_stack",-20.6,0,-.1,.2],["tire_stack",-9.6,0,.2,0],["barrel",4.5,0,.35,0],["barrel",5.2,0,.3,.4],["jersey_barrier",12.2,0,.4,.03],["crate_wood",11.2,0,-3.3,.3],["jersey_barrier",-.9,0,-7.5,.1],["pallet_stack",1.2,0,-9.9,.1],["barrel",2.2,0,-10.3,0],["cable_reel",-18.2,0,-8,.2],["traffic_cone",-6.5,0,-9.9,0],["traffic_cone",-.5,0,-9.9,0],["crate_stack",-10.95,0,18.25,.06],["barrel",-3,0,18.35,0],["tire_stack",10.95,0,18.3,0],["ibc_tote",12,0,18.25,0],["pallet_stack",-12.3,0,18.2,.1],["jersey_barrier",.6,0,15.5,.12],["tire_stack",-8,0,26.9,0],["pallet_stack",8.7,0,27,.3],["crate_wood",-2,0,27,.2],["barrel",11.2,0,27.1,0],["cable_reel",-34.6,0,-22.5,1],["tire_stack",-25.4,0,-26.9,0],["crate_stack",-34.8,0,-13.5,.2],["barrel",-33.6,0,-13,0],["generator",-34.2,0,14.2,.15],["floodlight_stand",-31.4,0,12.7,.55],["tire_stack",-36.6,0,17.2,0],["tire_stack",-36.5,0,18.3,.6],["pallet_stack",-27.8,0,16.6,.4],["crate_wood",-28.6,0,20.6,.1],["ibc_tote",-26.6,0,21.2,0],["jersey_barrier",-34.7,0,3.75,1.651],["jersey_barrier",-33.3,0,8.3,1.511],["jersey_barrier",-30.6,0,10.4,.03],["jersey_barrier",-27.3,0,1.45,.05],["jersey_barrier",-32.2,0,1.45,-.04],["sign_post",-33.2,0,9.6,1.571],["sign_post",-25.3,0,1.1,1.571],["sign_post",-36.6,0,-1.6,1.571],["traffic_cone",-34.6,0,5.6,0],["traffic_cone",-28.3,0,2,0],["traffic_cone",-33.2,0,6.5,0],["traffic_cone",-26.6,0,9.8,0],["traffic_cone",-31.8,0,9.9,0],["light_mast",-27.6,0,-.9,0],["light_mast",-36.3,0,12.4,0],["barrel",-33.9,0,2,0],["pallet_stack",-36.4,0,10.3,.2],["pallet_stack",0,.03,-26.9,.1],["crate_stack",2.9,.03,-15.9,.12],["crate_wood",4.15,.03,-16.3,-.25],["pallet_stack",2,.03,-17.3,1.45],["ibc_tote",6.9,.03,-19.6,.1],["barrel",7.9,.03,-18.5,0],["barrel",6,.03,-18.4,.6],["ibc_tote",-7.6,.03,-16.4,-.08],["barrel",-8.6,.03,-15.3,0],["barrel",-7.9,.03,-15,.9],["forklift",8.3,.03,-13.9,2.75],["tire_stack",-15,.03,-15.6,0],["tire_stack",-14.9,.03,-16.6,.4],["crate_wood",-12.4,.03,-26.9,-.1],["barrel",-10.9,.03,-27,0],["crate_wood",-14.7,.03,-24.6,.3],["pallet",10.6,.03,-13.6,.2],["traffic_cone",-6.6,.03,-12.2,0],["traffic_cone",-.4,.03,-12.3,0],["jersey_barrier",20.5,0,-4.7,1.691],["jersey_barrier",25.3,0,3.1,-.2],["barrel",26.5,0,-1.7,0],["barrel",26.9,0,-1.05,.5],["traffic_cone",22,0,-1.9,0],["traffic_cone",24.2,0,1.7,0],["generator",15,0,-26.6,.06],["floodlight_stand",16.4,0,-23.6,.3],["tire_stack",24.1,0,-9.5,0],["tire_stack",25.05,0,-9.6,.5],["cable_reel",14.3,0,-12.9,.4],["cable_reel",15.6,0,-14.3,1.9],["pallet_stack",20.3,0,-9.3,.1],["crate_wood",19.9,0,-22.6,.3],["barrel",12.75,0,-23.3,0],["barrel",12.9,0,-24.1,0],["light_mast",26.6,0,-28.7,0],["light_mast",26.6,0,26.7,0],["crate_stack",26.4,0,23.6,.2],["ibc_tote",22.6,0,26.3,.05],["pallet_stack",24,0,26.2,.2],["barrel",22.6,0,20.3,0],["barrel",23.4,0,20.4,0],["traffic_cone",28.2,0,18.2,0],["traffic_cone",28.3,0,21.8,0]];function ic(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Oe;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Ih(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const g=Ih(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ih(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Qe(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}class qo extends lt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new an;const n=this,s=e.color!==void 0?new te(e.color):new te(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||qo.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new vi,h=new S,d=new S,f=new S,g=new le,_=new S(0,0,-1),m=new ge,p=new S,w=new S,x=new ge,v=new le,C=this.camera,R=new wi(r,o,{samples:c,type:ks}),I=new An({name:l.name!==void 0?l.name:"unspecified",uniforms:Su.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});I.uniforms.tDiffuse.value=R.texture,I.uniforms.color.value=s,I.uniforms.textureMatrix.value=v,this.material=I,this.onBeforeRender=function(D,b,M){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(M.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),w.subVectors(d,_),w.reflect(h).negate(),w.add(d),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(h),C.lookAt(w),C.far=M.far,C.updateMatrixWorld(),C.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const U=C.projectionMatrix;x.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],x.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],x.z=-1,x.w=(1+U.elements[10])/U.elements[14],m.multiplyScalar(2/m.dot(x)),U.elements[2]=m.x,U.elements[6]=m.y,U.elements[10]=m.z+1-a,U.elements[14]=m.w,n.visible=!1;const V=D.getRenderTarget(),Y=D.xr.enabled,W=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(R),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(b,C),D.xr.enabled=Y,D.shadowMap.autoUpdate=W,D.setRenderTarget(V);const X=M.viewport;X!==void 0&&D.state.viewport(X),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}}qo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};let Al=42811;function P_(){Al=42811}const ut=()=>(Al=Al*1664525+1013904223>>>0)/4294967296,sc=i=>i[Math.floor(ut()*i.length)],Q=(i,t,e)=>new S(i,t,e),L_=new kn(1,1,1),Gt=(i,t=.78,e=.18,n={})=>new be({color:i,roughness:t,metalness:e,...n});function I_(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);e.addColorStop(0,"#18262e"),e.addColorStop(.36,"#394047"),e.addColorStop(.47,"#928474"),e.addColorStop(.52,"#514c46"),e.addColorStop(.68,"#18252a"),e.addColorStop(1,"#101a20"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);let n=t.createRadialGradient(500,234,5,500,234,255);n.addColorStop(0,"rgba(255,226,183,.85)"),n.addColorStop(.2,"rgba(216,155,93,.48)"),n.addColorStop(1,"rgba(171,117,75,0)"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let r=0;r<280;r++){const o=ut()*1024,a=105+ut()*152,l=18+ut()*170,c=8+ut()*32,u=t.createRadialGradient(o,a,1,o,a,l);u.addColorStop(0,"rgba(20,27,33,.18)"),u.addColorStop(1,"rgba(20,27,33,0)"),t.save(),t.scale(1,c/l),t.fillStyle=u,t.fillRect(o-l,(a-l)*l/c,l*2,l*2),t.restore()}const s=new Ye(i);return s.mapping=bo,s.colorSpace=xe,s}function D_(i){if(i)return null;const t={name:"Rain-slick asphalt reflections",uniforms:{color:{value:new te(5331550)},tDiffuse:{value:null},textureMatrix:{value:new le},time:{value:0}},vertexShader:`
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
 }`},e=new qo(new Ce(78,13.8),{shader:t,textureWidth:480,textureHeight:360,multisample:0,clipBias:.003});return e.rotation.x=-Math.PI/2,e.position.set(-7,.018,6),e.material.transparent=!0,e.material.depthWrite=!1,e.renderOrder=1,e}const Yn=Gt(2831419,.49,.72),Xe=Gt(1252129,.62,.65),Re=Gt(6582906,.42,.72),Wu=Gt(1053462,.9,.04),U_=Gt(2240052,.32,.68),Xu=Gt(15049804,.56,.45),Yu=new oe({color:16758635}),qu=Gt(7420715,.92,.12),$u=Gt(5656382,.88,.08),N_=Gt(5721406,.55,.52),Zu={time:{value:0}},F_=new An({uniforms:Zu,transparent:!0,depthWrite:!1,side:Fe,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;varying vec2 vUv;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
 void main(){vec2 p=vUv*2.-1.;float distort=(noise(vUv*9.)-.5)*.23;
 float edge=1.-smoothstep(.56,.95,length(p)+distort);
 float fine=noise(vUv*37.+vec2(time*.028,0.));
 vec3 base=vec3(.13,.15,.15);
 float shimmer=pow(max(0.,sin(vUv.y*30.+vUv.x*2.8+time*.3)),23.)*.025;
 vec3 water=base+vec3(.18,.12,.06)*shimmer+vec3(.025)*fine;
 gl_FragColor=vec4(water,edge*(.30+.08*fine));
 }`}),O_=new oe({color:11186859,transparent:!0,opacity:.14,depthWrite:!1});function ct(i,t,e,n,s){const r=new lt(L_,n);return r.position.set(...e),r.scale.set(...t),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Ot(i,t,e,n,s,r=6){const o=t.clone().add(e).multiplyScalar(.5),a=e.clone().sub(t),l=new lt(new Se(n,n,a.length(),r),s);return l.position.copy(o),l.quaternion.setFromUnitVectors(Q(0,1,0),a.normalize()),l.castShadow=!0,i.add(l),l}function Fn(i,t,e=256){const n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(s.fillStyle=t,s.fillRect(0,0,e,e),i==="ground"){for(let o=0;o<31e3;o++){const a=Math.floor(35+ut()*80);s.fillStyle=`rgba(${a},${a+7},${a+9},${ut()*.22})`,s.fillRect(ut()*e,ut()*e,1+ut()*3,1+ut()*2)}for(let o=0;o<80;o++){s.strokeStyle=`rgba(10,15,18,${.06+ut()*.2})`,s.lineWidth=.25+ut()*1.7,s.beginPath();let a=ut()*e,l=ut()*e;s.moveTo(a,l),s.lineTo(a+ut()*24,l+ut()*14),s.stroke()}for(let o=0;o<95;o++){const a=ut()*e,l=ut()*e,c=(.008+ut()*.19)*e,h=ut()<.68?`rgba(5,11,14,${.04+ut()*.3})`:`rgba(121,130,122,${.015+ut()*.12})`,d=s.createRadialGradient(a,l,0,a,l,c);d.addColorStop(0,h),d.addColorStop(1,"rgba(10,12,13,0)"),s.fillStyle=d,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<560;o++){const a=ut()*e,l=ut()*e;s.fillStyle=ut()<.6?`rgba(8,12,14,${.12+ut()*.18})`:`rgba(167,179,176,${.03+ut()*.12})`,s.fillRect(a,l,1.2+ut()*4,1+ut()*3)}for(let o=0;o<24;o++){const a=ut()*e,l=ut()*e;s.beginPath(),s.strokeStyle=`rgba(11,15,18,${.1+ut()*.29})`,s.lineWidth=.4+ut()*1.4,s.moveTo(a,l);for(let c=1;c<12;c++)s.lineTo(a+Math.sin(c*.7+o)*c*.84,l+c*(1.5+ut()*1.4));s.stroke()}}else{for(let o=0;o<3100;o++){const a=i==="metal"?"118,71,43":i==="warning"?"22,22,20":"19,23,26";s.fillStyle=`rgba(${a},${ut()*.24})`;let l=ut()*e,c=ut()*e;s.fillRect(l,c,1+ut()*5,1+ut()*7)}for(let o=0;o<110;o++){const a=ut()*e,l=ut()*e;s.fillStyle=`rgba(8,13,16,${ut()*.18})`,s.fillRect(a,l,1+ut()*1,4+ut()*65)}for(let o=0;o<52;o++){s.strokeStyle=`rgba(197,202,183,${ut()*.12})`,s.lineWidth=.3+ut()*.7,s.beginPath();let a=ut()*e,l=ut()*e;s.moveTo(a,l),s.lineTo(a+1+ut()*12,l),s.stroke()}for(let o=0;o<140;o++){const a=ut()*e,l=ut()*e,c=3+ut()*34,u=s.createRadialGradient(a,l,0,a,l,c),h=ut()>.36?"120,68,44":"12,25,30";u.addColorStop(0,`rgba(${h},${.05+ut()*.22})`),u.addColorStop(1,`rgba(${h},0)`),s.fillStyle=u,s.fillRect(a-c,l-c,c*2,c*2)}for(let o=0;o<70;o++){const a=ut()*e,l=ut()*e,c=10+ut()*110,u=s.createLinearGradient(0,l,0,l+c);u.addColorStop(0,`rgba(97,49,29,${.09+ut()*.3})`),u.addColorStop(1,"rgba(97,49,29,0)"),s.fillStyle=u,s.fillRect(a,l,.8+ut()*3,c)}for(let o=0;o<150;o++){const a=ut()*e,l=ut()*e;s.strokeStyle=`rgba(192,186,171,${.06+ut()*.26})`,s.lineWidth=.3+ut()*.75,s.beginPath(),s.moveTo(a,l),s.lineTo(a+3+ut()*42,l+(ut()-.5)*1.8),s.stroke()}}const r=new Ye(n);return r.colorSpace=xe,r.wrapS=r.wrapT=$n,r.anisotropy=4,r}function B_(){const i=document.createElement("canvas");i.width=256,i.height=512;const t=i.getContext("2d");t.clearRect(0,0,256,512);const e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"rgba(171,174,163,.15)"),e.addColorStop(.09,"rgba(185,189,176,.76)"),e.addColorStop(.82,"rgba(187,190,181,.73)"),e.addColorStop(1,"rgba(175,178,164,.09)"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let s=0;s<1700;s++){const r=ut()*256,o=ut()*512;t.clearRect(r,o,.3+ut()*6,.5+ut()*15)}for(let s=0;s<160;s++){const r=ut()*256,o=ut()*512;t.clearRect(r,o,2+ut()*30,.8+ut()*3)}for(let s=0;s<25;s++){const r=ut()*256,o=ut()*512,a=10+ut()*50;t.save(),t.globalCompositeOperation="destination-out";const l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(0,0,0,.8)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(r-a,o-a,a*2,a*2),t.restore()}const n=new Ye(i);return n.colorSpace=xe,n.anisotropy=8,new oe({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function Xs(i,t,e="#deded5",n="#29353a"){const s=document.createElement("canvas");s.width=512,s.height=172;const r=s.getContext("2d");r.fillStyle=n,r.fillRect(0,0,512,172),r.strokeStyle="rgba(255,255,255,.45)",r.lineWidth=3,r.strokeRect(9,9,494,154),r.fillStyle=e,r.font="900 70px Impact,Arial Narrow,sans-serif",r.fillText(i,28,93),r.font="600 23px monospace",r.fillText(t,30,137);const o=new Ye(s);return o.colorSpace=xe,o}function Io(i,t,e,n=.34){const s=[],r=[],o=[],a=Math.max(6,Math.round(i/n));for(let c=0;c<=a*4;c++){const u=c/(a*4),h=c%4,f=e*(h===1||h===2?1:0);if(s.push(u*i-i/2,0,f,u*i-i/2,t,f),r.push(u*3,0,u*3,1),c<a*4){const g=c*2;o.push(g,g+2,g+1,g+1,g+2,g+3)}}const l=new Oe;return l.setAttribute("position",new fe(s,3)),l.setAttribute("uv",new fe(r,2)),l.setIndex(o),l.computeVertexNormals(),l}const Ku=[["#435c61",4942446],["#a65d3e",11297344],["#515b5d",5793132],["#706a55",8288099],["#354957",3755613],["#5f5048",7758165]],ju=Ku.map(([i])=>{const t=Fn("metal",i,512);return Gt(13752534,.62,.23,{map:t,bumpMap:t,bumpScale:.015})}),Dh=new Map,Uh=new Map;function z_(i,t){const e=`${i}:${Math.abs(t)%8}`,n=Uh.get(e);if(n)return n;const s=Xs(`C-${i+1}`,`LOAD ${Math.abs(t*17+i*11)%99}`),r=new oe({map:s,transparent:!0,opacity:.56,depthWrite:!1,side:Fe});return Uh.set(e,r),r}function k_(i,t){const e=`${i}:${t%4}`,n=Dh.get(e);if(n)return n;const s=document.createElement("canvas");s.width=768,s.height=256;const r=s.getContext("2d");r.clearRect(0,0,768,256);const o=["NORTHLINE","OCEANSTAR","BLACKWATER","BRIDGEPORT","CIRRUS","ATLANTIC"][i%6];let a=(i+1)*15289+t%4*9013;const l=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296);r.fillStyle="rgba(220,228,220,.55)",r.lineWidth=5,r.beginPath(),r.moveTo(37,77),r.lineTo(109,31),r.lineTo(166,77),r.lineTo(109,124),r.closePath(),r.strokeStyle="rgba(216,224,221,.49)",r.stroke(),r.beginPath(),r.moveTo(61,83),r.lineTo(102,52),r.lineTo(146,83),r.stroke(),r.font="700 69px Impact,Arial Narrow,Arial",r.letterSpacing="4px",r.fillText(o,194,100,545),r.font="500 24px monospace",r.letterSpacing="1px",r.fillText(`ISO 22G1   ${String((i*57091+t*37)%9999999).padStart(7,"0")}`,195,146,510),r.font="700 27px monospace",r.fillText("MAX GROSS 30 480 KG   /   67 200 LB",196,185,500),r.globalCompositeOperation="destination-out";for(let h=0;h<2500;h++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.12+l()*.72})`,r.fillRect(d,f,1+l()*9,.3+l()*4)}for(let h=0;h<42;h++){const d=l()*s.width,f=l()*s.height;r.fillStyle=`rgba(0,0,0,${.3+l()*.6})`,r.fillRect(d,f,7+l()*58,.4+l()*1.5)}const c=new Ye(s);c.colorSpace=xe,c.anisotropy=8;const u=new oe({map:c,transparent:!0,opacity:.78,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1});return Dh.set(e,u),u}const H_=(()=>{const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d");let e=874233;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<480;r++){const o=n()*512,a=n()*256,l=10+n()*120,c=t.createLinearGradient(0,a,0,a+l);c.addColorStop(0,`rgba(72,37,21,${.1+n()*.29})`),c.addColorStop(1,"rgba(72,37,21,0)"),t.fillStyle=c,t.fillRect(o,a,1+n()*2.8,l)}const s=new Ye(i);return s.colorSpace=xe,new oe({map:s,transparent:!0,opacity:.85,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1})})();function po(i,t,e,n,s=0,r=0,o,a=20,l){const c=o??Math.floor(ut()*Ku.length),u=ju[c],h=new jt;h.position.set(e,(l??r*2.72)+.12,n),h.rotation.y=s,i.add(h);const d=2.7,f=a===41?2.86:2.55,g=a===20?6.06:12.2;ct(h,[d,f,g],[0,f/2,0],u);for(let x of[-1,1]){const v=new lt(Io(g-.2,f-.21,x*.067,.3),u);v.rotation.y=x*Math.PI/2,v.position.set(x*(d/2+.015),.12,0),v.castShadow=!0,v.receiveShadow=!0,h.add(v);const C=new lt(new Ce(g-.24,f-.15),H_);if(C.rotation.y=x*Math.PI/2,C.position.set(x*(d/2+.115),f/2,0),h.add(C),ut()<.84){const I=new lt(new Ce(2.25,.75),k_(c,Math.abs(Math.floor(e*11+n*7+r*23))));I.rotation.y=x*Math.PI/2,I.position.set(x*(d/2+.124),1.63,-.25),h.add(I)}const R=new lt(new Ce(.53,.3),z_(c,Math.round(e*4+n*9+r*17)));R.rotation.y=x*Math.PI/2,R.position.set(x*(d/2+.132),.55,g/2-.65),h.add(R)}for(let x of[-1,1]){const v=new lt(Io(d-.12,f-.23,x*.05,.22),u);v.position.set(0,.12,x*(g/2+.022)),x===-1&&(v.rotation.y=Math.PI),h.add(v),ct(h,[d+.12,.09,.1],[0,f+.01,x*g/2],Xe),ct(h,[d+.12,.13,.1],[0,.055,x*g/2],Xe),ct(h,[.035,f,.035],[0,f/2,x*(g/2+.09)],Re);for(let C=-1;C<=1;C+=2)ct(h,[.065,f-.22,.07],[C*(d/2-.23),f/2,x*(g/2+.12)],Yn);for(let C=-1;C<=1;C+=2)for(let R=0;R<2;R++)ct(h,[.12,.17,.06],[C*(d/2-.23),.48+R*1.45,x*(g/2+.165)],Re)}for(let x of[-1,1]){for(let v of[-1,1]){ct(h,[.1,f+.14,.12],[x*(d/2-.04),f/2,v*(g/2-.055)],Yn);for(let C of[.08,f+.04])ct(h,[.24,.16,.24],[x*(d/2-.04),C,v*(g/2-.05)],Re)}ct(h,[.1,.08,g+.16],[x*(d/2-.04),f+.08,0],Yn),ct(h,[.11,.11,g+.16],[x*(d/2-.04),.035,0],Yn)}const _=new lt(new Ce(1.45,.49),new oe({map:Xs(sc(["HARBOR","NORTH","MARLIN","SE-04","TIDAL"]),`CARGO  /  ${String(Math.floor(ut()*81e3)).padStart(5,"0")}`),transparent:!0,opacity:.85}));_.position.set(0,1.72,g/2+.082),h.add(_);for(let x=0;x<3;x++)ct(h,[.045,.017,.56],[d/2+.092,.62+x*.53,-1.6+x*.9],qu);const m=Math.abs(Math.sin(s))>.7,p=(m?g:d)/2,w=(m?d:g)/2;t.push({minX:e-p-.2,maxX:e+p+.2,minZ:n-w-.2,maxZ:n+w+.2,height:(l??r*2.72)+f})}function Nh(i,t,e,n=1){const s=new jt;s.position.set(t,0,e),s.scale.setScalar(n),i.add(s);const r=Gt(6125430,.58,.62),o=Gt(10976592,.67,.53);for(let a of[-1,1]){let l=Q(a*8.6,0,0),c=Q(a*6.2,21,0);Ot(s,l,c,.36,r,8),Ot(s,Q(a*8.6,0,1.7),Q(a*6.2,21,1.7),.36,r,8);for(let u=3;u<21;u+=3){const h=u/21;Ot(s,Q(a*(8.6-2.4*h),u,0),Q(a*(8.6-2.4*h),u,1.7),.15,r)}}for(let a of[13,19.8]){Ot(s,Q(-6.7,a,.85),Q(6.7,a,.85),.24,r,8);for(let l=-6;l<6;l+=2)Ot(s,Q(l,a,.85),Q(l+2,a+1,.85),.09,r),Ot(s,Q(l,a+1,.85),Q(l+2,a,.85),.09,r)}for(let a of[-1,1]){Ot(s,Q(-19.5,20.9,a*.7),Q(19.5,20.9,a*.7),.27,r),Ot(s,Q(-19.5,22.25,a*.7),Q(19.5,22.25,a*.7),.17,r);for(let l=-19;l<19;l+=2.5)Ot(s,Q(l,20.9,a*.7),Q(l+2.5,22.25,a*.7),.09,r),Ot(s,Q(l,22.25,a*.7),Q(l+2.5,20.9,a*.7),.09,r)}ct(s,[3.9,2.25,2.2],[6.3,22.5,.1],r),ct(s,[2.8,.85,2.5],[6.3,22.1,1.35],Xe);for(let a=8;a<22;a+=2.8)Ot(s,Q(-2.9,a,.4),Q(-2.9,a+2.3,.4),.048,o);for(let a of[-1,1])Ot(s,Q(-2.7+a*.65,20.6,0),Q(-2.7+a*.65,3.5,0),.023,Xe);ct(s,[4.7,.45,1.35],[-2.7,3.4,0],o)}function V_(i,t,e,n=1){const s=new jt;s.position.set(t,0,e),s.scale.setScalar(n),s.rotation.y=Math.PI/2,i.add(s);const r=Gt(6648178,.72,.57),o=Gt(9079168,.69,.62),a=Gt(2700085,.81,.51),l=7,c=26.8;for(const h of[-1,1]){for(const d of[-1.65,1.65]){Ot(s,Q(h*l/2,0,d),Q(h*l/2,c,d),.26,r,10);for(let f=2;f<c-1;f+=4.2){const g=Q(h*l/2,f,d),_=Q(h*l/2,f+4.1,-d);Ot(s,g,_,.094,o)}}for(let d=2;d<=c;d+=4.1)Ot(s,Q(h*l/2,d,-1.65),Q(h*l/2,d,1.65),.12,r)}for(const h of[-1.65,1.65]){for(let d of[4,14,22,26.8])Ot(s,Q(-l/2,d,h),Q(l/2,d,h),.16,r);for(let d=-3.25;d<=3;d+=1.35)Ot(s,Q(d,26.45,h),Q(d+1.15,27.6,h),.11,r),Ot(s,Q(d,27.55,h),Q(d+1.15,26.45,h),.11,r)}for(const h of[-1.2,1.2]){Ot(s,Q(-18.5,26.5,h),Q(14,26.5,h),.2,r),Ot(s,Q(-16.7,28.1,h),Q(12,28.1,h),.15,r);for(let d=-18;d<13;d+=2)Ot(s,Q(d,26.45,h),Q(d+2,28.1,h),.09,o),Ot(s,Q(d,28.1,h),Q(d+2,26.45,h),.09,r)}for(let h=-17;h<=13;h+=3.8)Ot(s,Q(h,26.5,-1.2),Q(h,26.5,1.2),.1,r);for(const h of[-1,1]){Ot(s,Q(h*4,1.1,1.45),Q(h*4,26.5,1.45),.036,o),Ot(s,Q(h*4.48,1.1,1.45),Q(h*4.48,26.5,1.45),.036,o);for(let d=1.2;d<26.5;d+=.55)Ot(s,Q(h*4,d,1.45),Q(h*4.48,d,1.45),.023,o)}ct(s,[8.8,.17,4.7],[0,23.8,0],a);for(let h=-4;h<4;h+=.48)ct(s,[.07,.08,4.8],[h,23.97,0],o);ct(s,[3.2,2.4,2.25],[1.2,29,-.2],r);for(const h of[-1.35,1.05])ct(s,[2.8,.72,.09],[1.2,29.13,h],a);for(let h=-1;h<2;h++)ct(s,[.68,.42,.14],[1.2+h*.78,29.27,1.19],Gt(9280660,.2,.45,{emissive:2636343,emissiveIntensity:.23}));ct(s,[3.1,1.4,2.3],[-1.2,26,0],a);for(const h of[-1.18,1.18])Ot(s,Q(-1.2+h,25.2,-.8),Q(-1.2+h,8.6,-.8),.024,a),Ot(s,Q(-1.2+h,25.2,.8),Q(-1.2+h,8.6,.8),.024,a);ct(s,[4.7,.68,2.2],[-1.2,8.5,0],o);for(const h of[-1,1])for(const d of[-1,1])Ot(s,Q(-1.2+h*2.15,8.3,d*.8),Q(-1.2+h*2.15,7,d*.8),.05,a);const u=new lt(new Ce(4.9,.62),new oe({map:Xs("GANTRY 04","BERTH CONTROL  /  07"),transparent:!0}));u.position.set(0,13.4,1.75),s.add(u);for(const h of[1.2,23.2])for(const d of[-1,1])ct(s,[.65,.2,.25],[d*3.5,h,1.8],Xu);ct(s,[.22,.22,.22],[0,30.36,0],Yu)}const G_=Gt(9670534,.97,0,{map:Fn("ground","#97938b")});function W_(i,t,e,n=0){const s=new jt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=new Gs;r.moveTo(-.58,0),r.lineTo(.58,0),r.lineTo(.52,.28),r.lineTo(.35,.54),r.lineTo(.35,.88),r.lineTo(-.35,.88),r.lineTo(-.35,.54),r.lineTo(-.52,.28),r.closePath();const o=new ns(r,{depth:2.5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.022,bevelSegments:1,steps:1});o.rotateY(Math.PI/2);const a=new lt(o,G_);a.position.set(-1.25,0,0),a.castShadow=!0,s.add(a);for(const l of[-1,.4])ct(s,[.55,.06,.17],[0,.69,l],Xu)}const X_=Gt(8023639,.94,.03,{map:Fn("paint","#8c8068")}),Ju=Gt(3749934,.97,.04);function Fh(i,t,e,n=0){const s=new jt;s.position.set(t,0,e),s.rotation.y=n,i.add(s);const r=X_,o=Ju;for(const a of[-.42,.42])ct(s,[1.12,.11,.14],[0,.13,a],o);for(let a=0;a<6;a++)ct(s,[.19,.06,1.12],[-.47+a*.185,.22,0],r);for(const a of[-.45,0,.45])ct(s,[.16,.09,.95],[a,.035,0],o)}function Y_(i,t,e){const n=new jt;n.position.set(t,0,e),i.add(n);const s=Gt(1778213,.94,.09);for(const o of[-1,1]){const a=new lt(new Se(.57,.57,.082,20),Yn);a.rotation.z=Math.PI/2,a.position.set(o*.28,.58,0),n.add(a);const l=new lt(new rn(.44,.045,8,24),Re);l.rotation.y=Math.PI/2,l.position.set(o*.33,.58,0),n.add(l)}const r=new lt(new Se(.31,.31,.6,16),s);r.rotation.z=Math.PI/2,r.position.y=.58,n.add(r);for(let o=0;o<10;o++){const a=o/10*Math.PI*2,l=new lt(new rn(.31+o*.014,.018,6,32),s);l.rotation.y=Math.PI/2,l.position.set(-.25+o*.052,.58,0),l.rotation.x=a*.035,n.add(l)}}const q_=Gt(2106662,.98,.05),Rl=Gt(1054234,.92,.06),$_=new Np({color:11780802,roughness:.65,metalness:0,transparent:!0,opacity:.8,clearcoat:.05,depthWrite:!0}),Oh=Gt(12223806,.63,.41),ai=Gt(9084317,.55,.48);function Z_(i){const t=new rn(.43,.13,10,28);for(let e=0;e<4;e++){const n=new lt(t,q_);n.rotation.x=Math.PI/2,n.position.y=.22+e*.25,n.castShadow=!0,i.add(n);const s=new lt(new rn(.285,.03,7,20),Rl);s.rotation.x=Math.PI/2,s.position.y=.25+e*.25,i.add(s);for(let r=0;r<12;r++){const o=r*Math.PI/6,a=ct(i,[.11,.025,.08],[Math.cos(o)*.56,.21+e*.25,Math.sin(o)*.56],Rl);a.rotation.y=o}}}function K_(i){ct(i,[1.15+.1,.15,1.1+.08],[0,.075,0],Ju),ct(i,[1.15,1.25-.18,1.1],[0,.2+(1.25-.18)/2,0],$_),ct(i,[.28,.13,.14],[.22,1.3,0],Re);for(const s of[-1.15/2,1.15/2])for(const r of[-1.1/2,1.1/2])Ot(i,Q(s,.2,r),Q(s,1.35,r),.026,ai);for(const s of[.3,.65,1.04,1.3]){for(const r of[-1.15/2,1.15/2])Ot(i,Q(r,s,-1.1/2),Q(r,s,1.1/2),.023,ai);for(const r of[-1.1/2,1.1/2])Ot(i,Q(-1.15/2,s,r),Q(1.15/2,s,r),.023,ai)}for(const s of[-.28,0,.28])for(const r of[-1.1/2,1.1/2])Ot(i,Q(s,.2,r),Q(s,1.3,r),.018,ai)}function j_(i){const t=new jt;i.add(t),ct(t,[1.55,.2,2.75],[0,.31,0],Xe),ct(t,[1.57,.85,1.42],[0,.81,-.67],Oh),ct(t,[1.35,.46,1.4],[0,1.22,-.63],Yn);for(const n of[-1,1]){const s=ct(t,[.24,.26,.9],[n*.69,.85,-.65],Oh);s.rotation.y=n*.12;for(const r of[-1.02,.86]){const o=new lt(new Se(.4,.4,.2,20),Rl);o.rotation.z=Math.PI/2,o.position.set(n*.84,.38,r),o.castShadow=!0,t.add(o);const a=new lt(new Se(.2,.2,.21,16),Re);a.rotation.z=Math.PI/2,a.position.copy(o.position),t.add(a)}Ot(t,Q(n*.68,.7,-.9),Q(n*.68,2.4,-.9),.055,ai),Ot(t,Q(n*.68,.7,.55),Q(n*.68,2.4,.55),.055,ai)}ct(t,[1.57,.15,1.64],[0,2.42,-.16],Xe),ct(t,[.7,.18,.62],[0,1.12,.25],Wu),Ot(t,Q(0,1.24,.17),Q(0,1.5,.36),.04,Re);const e=new lt(new rn(.19,.035,9,20),Xe);e.rotation.x=Math.PI/3,e.position.set(0,1.5,.36),t.add(e);for(const n of[-.45,.45])ct(t,[.12,2.4,.1],[n,1.35,1.32],ai),Ot(t,Q(n,1.1,1.27),Q(n,2.1,1.27),.04,Re),ct(t,[.12,.08,2.6],[n,.34,2.17],ai),ct(t,[.28,.045,2.5],[n,.37,2.17],Re);for(let n=.3;n<2.4;n+=.24)ct(t,[.95,.035,.1],[0,n,1.33],Xe);ct(t,[.28,.12,.18],[0,2.56,-.9],Yu)}function J_(i){ct(i,[1.75,1.13,.96],[0,.64,0],Qu),ct(i,[1.88,.1,1.13],[0,.08,0],Xe);for(const e of[-.51,.51]){ct(i,[1.65,.09,.06],[0,.2,e],Re),ct(i,[1.65,.09,.06],[0,1.17,e],Re);for(let n=0;n<7;n++)ct(i,[.03,.53,.014],[-.62+n*.205,.7,e*1.02],Xe)}for(const e of[-.78,.78])for(const n of[-.45,.45])Ot(i,Q(e,.12,n),Q(e,1.3,n),.045,Re);const t=new lt(new Se(.11,.12,.42,12),Xe);t.position.set(.55,1.43,-.16),i.add(t)}function Q_(i,t,e,n=!1){const s=new jt;s.position.set(t,0,e),i.add(s);const r=n?6.4:13;Ot(s,Q(0,0,0),Q(0,r,0),n?.065:.12,Yn,12);for(const l of[1.6,5,9.3].filter(c=>c<r))for(const c of[-1,1])Ot(s,Q(0,l,0),Q(c*.31,l-.45,0),.025,Re);Ot(s,Q(-1.6,r,0),Q(1.6,r,0),.085,ai);const o=new oe({color:16241325});for(const l of[-1.1,1.1]){ct(s,[.98,.64,.13],[l,r-.07,-.03],Xe,[.21,0,0]),ct(s,[.83,.51,.037],[l,r-.08,.065],o,[.21,0,0]);for(const c of[-.38,.38])ct(s,[.06,.53,.07],[l+c,r-.08,.085],Re)}const a=new Ti(16768956,n?5:8,n?12:20,1.7);return a.position.set(0,r-1,0),s.add(a),a}function tv(i,t,e,n,s=0){const r=new jt;r.position.set(t,0,e),r.rotation.y=s,i.add(r),Ot(r,Q(-.59,0,0),Q(-.59,3.6,0),.065,Re),Ot(r,Q(.59,0,0),Q(.59,3.6,0),.065,Re),ct(r,[1.2,.97,.1],[0,2.92,0],Xe);const o=new lt(new Ce(1.09,.85),new oe({map:Xs(n,"NO UNAUTHORIZED ACCESS","#e5d6b5","#343d3e"),side:Fe}));o.position.set(0,2.92,.065),r.add(o);const a=o.clone();a.position.set(0,2.92,-.065),a.rotation.y=Math.PI,r.add(a);for(const l of[2.44,3.4])ct(r,[1.16,.03,.045],[0,l,.08],qu)}const ur=Gt(4745079,.73,.48),ev=Gt(11563074,.65,.36),nv=Gt(16777215,.92,.02,{map:Fn("paint","#b4a78c")}),Bh=Gt(6706753,.93,.02,{map:Fn("paint","#756952")}),Qu=Gt(3300721,.57,.42),iv=new oe({map:Xs("FRAGILE","KEEP DRY"),transparent:!0,opacity:.46,depthWrite:!1,side:Fe});function Do(i,t,e,n,s,r,o){const a=new jt;a.position.set(t,e,n),i.add(a),ct(a,[s,r,o],[0,r/2,0],nv);for(const c of[-1,1])for(const u of[-1,1])ct(a,[.06,r,.06],[c*(s/2-.06),r/2,u*(o/2-.04)],Bh);for(const c of[r-.12,.12])ct(a,[s+.02,.045,o+.02],[0,c,0],Bh);const l=new lt(new Ce(s*.6,r*.28),iv);l.position.set(0,r*.6,o/2+.02),a.add(l)}function zh(i,t,e,n=3){const s=n*2.4,r=2.1,o=new jt;o.position.set(t,0,e),i.add(o);const a=-r/2,l=r/2;for(let c=0;c<=n;c++)for(const u of[a,l]){const h=c*2.4-s/2;ct(o,[.11,5.75,.11],[h,2.875,u],ur);for(const d of[1,2.65,4.27,5.57])ct(o,[.19,.12,.2],[h,d,u],ur)}for(const c of[1,2.65,4.3]){ct(o,[s+.25,.14,r+.1],[0,c,0],ev);for(let u=0;u<n;u++){const h=(u+.5)*2.4-s/2;if((u+Math.round(t))%3===0&&c>2)for(const d of[-.65,.55]){const f=new lt(new Se(.33,.33,1.1,12),Qu);f.position.set(h+d,c+.64,0),o.add(f);for(const g of[c+.21,c+1.1]){const _=new lt(new rn(.33,.023,6,14),Re);_.rotation.x=Math.PI/2,_.position.set(h+d,g,0),o.add(_)}}else{const d=.89+.17*ut(),f=1.5+.15*ut(),g=1.08;Do(o,h-.58,c+.11,0,d,g,f),Do(o,h+.56,c+.11,0,d,g,f)}}}for(const c of[-s/2,s/2])for(let u=0;u<4.7;u+=1.6)Ot(o,Q(c,u,a),Q(c,u+1.6,l),.04,ur),Ot(o,Q(c,u,l),Q(c,u+1.6,a),.04,ur);for(let c=0;c<n;c++){const u=(c+.5)*2.4-s/2,h=new lt(new Ce(1.6,.14),new oe({map:Xs("BAY "+String(c+1),"MAX 1200 KG","#d4e1df","#34546b"),transparent:!0}));h.position.set(u,2.73,a-.08),o.add(h)}}function sv(){const i=document.createElement("canvas");i.width=1024,i.height=640;const t=i.getContext("2d");let e=893371;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<170;r++){const o=n()*i.width,a=n()*i.height,l=12+n()*110,c=.35+n()*1.2,u=t.createRadialGradient(o,a,0,o,a,l);u.addColorStop(0,`rgba(9,16,19,${.04+n()*.19})`),u.addColorStop(1,"rgba(9,16,19,0)"),t.save(),t.translate(o,a),t.scale(1,c),t.fillStyle=u,t.fillRect(-l,-l,l*2,l*2),t.restore()}for(const r of[0,1,2]){const o=r*150-130;for(const a of[-1,1])t.beginPath(),t.moveTo(520+o+a*28,640),t.bezierCurveTo(480+o+a*34,490,640+o+a*26,220,530+o+a*22,-10),t.lineWidth=4.5+n()*3,t.strokeStyle="rgba(14,20,20,.17)",t.stroke();for(let a=0;a<50;a++){const l=a*13,c=515+o+24*Math.sin(a*.073+r);t.save(),t.translate(c,l),t.rotate(Math.sin(a*.13)*.18),t.fillStyle=`rgba(14,20,20,${.015+n()*.1})`,t.fillRect(-22,-3,44,3),t.restore()}}for(let r=0;r<440;r++){const o=n()*i.width,a=n()*i.height;t.fillStyle=n()>.55?`rgba(25,20,16,${n()*.11})`:`rgba(225,218,194,${n()*.05})`,t.fillRect(o,a,1+n()*18,.4+n()*3)}const s=new Ye(i);return s.colorSpace=xe,s.anisotropy=8,new oe({map:s,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function rv(i){const t=new jt;t.position.set(-13.3,0,-25.5),t.rotation.y=.52,i.add(t);const e=Gt(3885903,.64,.66),n=Gt(12485181,.52,.48),s=Gt(6383976,.72,.5),r=5.5,o=-1,a=17,l=4.75/a;for(let c=0;c<a;c++){const u=c/(a-1),h=r+(o-r)*u,d=(c+1)*l;ct(t,[1.65,.075,.35],[0,d-.05,h],s);for(const f of[-1,1])ct(t,[.04,.14,.35],[f*.81,d,h],e)}for(const c of[-1,1]){const u=c*.8;Ot(t,Q(u,.15,r+.28),Q(u,5,o-.22),.1,e),Ot(t,Q(u,.15,r-.05),Q(u,5,o-.5),.06,e),Ot(t,Q(u,1.13,r+.45),Q(u,5.95,o-.32),.045,n);for(let h=0;h<8;h++){const d=h/7,f=r+(o-r)*d,g=d*4.75;Ot(t,Q(u,g+.1,f),Q(u,g+1.13,f),.031,n)}}ct(t,[3.2,.18,4.6],[0,4.82,-2.3],s);for(const c of[-1,1])Ot(t,Q(c*1.58,4.9,-4.4),Q(c*1.58,6,-4.4),.055,n),Ot(t,Q(c*1.58,5.96,-4.4),Q(c*1.58,5.96,-.3),.04,n);for(let c=0;c<3;c++){const u=-4+c*1.65;Ot(t,Q(-1.25,4.67,u),Q(-1.25,0,u),.12,e)}}const ov=Gt(12874809,.75,.07),av=Gt(11909289,.88,.02);function lv(i,t,e){const n=new jt;n.position.set(t,0,e),i.add(n),ct(n,[.54,.055,.54],[0,.025,0],Wu);const s=new lt(new Wo(.19,.74,10),ov);s.position.y=.43,s.castShadow=!0,n.add(s);for(const r of[.37,.55]){const o=new lt(new Se(.126-(r-.35)*.18,.126-(r-.35)*.18,.07,12),av);o.position.y=r,n.add(o)}}function cv(i,t,e){const n=new jt;n.position.set(t,0,e),i.add(n);const s=sc([U_,Yn,N_]),r=new lt(new Se(.42,.42,1.18,14),s);r.position.y=.6,r.castShadow=!0,n.add(r);for(let a of[.17,.44,.83,1.06]){const l=new lt(new rn(.424,.023,5,16),Re);l.rotation.x=Math.PI/2,l.position.y=a,n.add(l)}const o=new lt(new Se(.38,.38,.04,14),Xe);o.position.y=1.2,n.add(o)}function kh(i,t,e,n,s=.022){const r=new Jl(n,28);r.rotateX(-Math.PI/2);const o=F_,a=new lt(r,o);a.position.set(t,s+ut()*.005,e),a.scale.z=.42+ut()*.5,a.rotation.y=ut()*Math.PI,i.add(a);for(let l=0;l<3;l++){const c=new lt(new Ce(n*(.16+ut()*.3),.007),O_);c.rotation.x=-Math.PI/2,c.position.set(t+(ut()-.5)*n,s+.008,e+(ut()-.5)*n*.2),i.add(c)}}function hv(i){const t={value:0},e=new lt(new Ce(132,94,42,30),new An({uniforms:{time:t},side:Fe,vertexShader:`uniform float time;varying vec3 vWorld;varying vec2 vUv;
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
   }`}));return e.rotation.x=-Math.PI/2,e.position.set(97,.025,6),e.receiveShadow=!1,e.frustumCulled=!1,i.add(e),n=>{t.value=n}}function uv(i){const t=Gt(7171687,.94,.07),e=Gt(1778726,.87,.22),n=Gt(13212241,.78,.11);for(const[u,h]of[[-30,16],[23.7,30]]){const d=(u+h)/2,f=h-u;ct(i,[.9,.75,f],[30,.01,d],t),ct(i,[.15,.16,f],[29.56,.34,d],e);for(let g=u+2;g<h;g+=3.6)ct(i,[.25,.24,.46],[29.54,.32,g],n),ct(i,[.43,.34,.52],[30.15,-.3,g],e)}for(const u of[-22,-12,-2,9,16.4,25.6]){const h=new jt;h.position.set(29.1,0,u),i.add(h);const d=new lt(new Se(.18,.24,.43,12),e);d.position.y=.24,h.add(d);const f=new lt(new Se(.35,.35,.12,12),t);f.position.y=.5,h.add(f);for(const g of[-1,1])ct(h,[.22,.08,.12],[g*.26,.47,0],e)}const s=Gt(6519681,.51,.57,{map:Fn("metal","#52696b")});ct(i,[7.8,.4,4.9],[26,.18,14.1],s);for(let u=0;u<7;u++){const h=22.4+u*1.08;ct(i,[.13,.08,4.88],[h,.42,14.1],Re)}for(const u of[11.8,16.35])ct(i,[7.5,.12,.18],[26,.47,u],Xe);for(let u=0;u<3;u++)for(let h=0;h<2;h++){const d=26.6+h*.9,f=26.5+u*1.2,g=ct(i,[1.18,.77,.86],[d,.38+u*0,f],$u);g.rotation.y=.02*(u%2?1:-1),ct(i,[1.24,.075,.91],[d,.8,f],Xe)}const r=document.createElement("canvas");r.width=r.height=256;const o=r.getContext("2d");o.clearRect(0,0,256,256),o.strokeStyle="rgba(183,198,191,.55)",o.lineWidth=2.1;for(let u=-256;u<512;u+=24)o.beginPath(),o.moveTo(u,0),o.lineTo(u+256,256),o.stroke(),o.beginPath(),o.moveTo(u,256),o.lineTo(u+256,0),o.stroke();const a=new Ye(r);a.colorSpace=xe,a.wrapS=a.wrapT=$n,a.repeat.set(8,4);const l=new lt(new Ce(10,2.5),new oe({map:a,transparent:!0,opacity:.32,side:Fe,depthWrite:!1}));l.position.set(28,1.55,30.2),l.rotation.y=Math.PI/2,i.add(l);for(let u=23.5;u<=32.5;u+=2.25)Ot(i,Q(u,.2,30.2),Q(u,3.05,30.2),.043,Re);Ot(i,Q(23.5,3.05,30.2),Q(32.5,3.05,30.2),.047,Re);for(const u of[16.3,23.4])Ot(i,Q(29,0,u),Q(29,1.15,u),.038,Re),Ot(i,Q(29,1.15,u),Q(30.1,1.15,u),.038,Re),Ot(i,Q(30.1,0,u),Q(30.1,1.15,u),.038,Re);const c=Gt(9673361,.4,.73);for(const u of[19.62,20.38])Ot(i,Q(30.2,.5,u),Q(30.2,-2.8,u),.025,c);for(let u=.3;u>-2.8;u-=.3)Ot(i,Q(30.22,u,19.62),Q(30.22,u,20.38),.023,c);for(let u=0;u<3;u++)ct(i,[.56,.018,.1],[27.5+u*.6,.032,20],n)}function dv(i,t){const e=new Float32Array(t*6),n=new Float32Array(t);for(let a=0;a<t;a++){const l=(ut()-.5)*66,c=ut()*20,u=(ut()-.5)*70,h=a*6;e[h]=l,e[h+1]=c,e[h+2]=u,e[h+3]=l+.055,e[h+4]=c-(.28+ut()*.27),e[h+5]=u+.045,n[a]=12+ut()*19}const s=new Oe;s.setAttribute("position",new Qe(e,3));const r=new jl({color:10927561,transparent:!0,opacity:.17,depthWrite:!1,blending:Ki}),o=new ip(s,r);return o.frustumCulled=!1,o.renderOrder=5,i.add(o),{rain:o,update(a,l,c){o.position.x=l,o.position.z=c;const u=s.attributes.position;for(let h=0;h<t;h++){const d=h*6;let f=u.array[d+1];f-=a*n[h],f<-.5&&(f+=20),u.array[d+1]=f,u.array[d+4]=f-.42}u.needsUpdate=!0}}}function fv(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{if(n instanceof lt&&n.geometry instanceof Oe&&n.renderOrder===0){const s=n.material;if(Array.isArray(s))return;const r=t.get(s)||[];r.push(n),t.set(s,r)}});let e=0;for(const[n,s]of t){if(s.length<2)continue;const r=new Map;for(const o of s){const a=o.geometry,l=Object.entries(a.attributes).map(([u,h])=>`${u}:${h.itemSize}:${h.normalized}`).sort().join("|")+":"+!!a.index,c=r.get(l)||[];c.push(o),r.set(l,c)}for(const o of r.values()){if(o.length<2)continue;const a=o.map(h=>{const d=h.geometry.clone();return d.applyMatrix4(h.matrixWorld),d}),l=ic(a,!1);if(a.forEach(h=>h.dispose()),!l)continue;l.computeBoundingBox();const c=l.boundingBox,u=new lt(l,n);u.castShadow=n instanceof be&&c.max.y-c.min.y>.28,u.receiveShadow=!0,u.name=`batched-${e++}`;for(const h of o)h.parent?.remove(h);i.add(u)}}return e}function pv(i,t=!1){P_(),i.background=new te(5594466),i.fog=new $l(6776163,.0125),i.environment=t?null:I_(),i.environmentIntensity=.8,i.add(new Bp(11847376,2896696,1.26)),i.add(new Hp(11384245,.23));const e=new sh(16768707,2.36);e.position.set(65,38,30),e.castShadow=!t,t||(e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-75,e.shadow.camera.right=75,e.shadow.camera.top=75,e.shadow.camera.bottom=-75,e.shadow.camera.near=1,e.shadow.camera.far=170,e.shadow.bias=-22e-5,e.shadow.normalBias=.05),i.add(e);const n=new sh(11716044,.67);n.position.set(-16,26,30),i.add(n);const s=new lt(new bi(195,48,26),new An({side:sn,depthWrite:!1,fog:!1,toneMapped:!1,vertexShader:"varying vec3 vDir; void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir;
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
 }`}));s.frustumCulled=!1,s.renderOrder=-10,i.add(s);const r=new lt(new bi(2.7,22,12),new oe({color:16766628,transparent:!0,opacity:.18,fog:!1}));r.position.set(84,24,34),i.add(r);const o=Gt(12896457,.62,.07,{map:Fn("ground","#242a2e",512)});o.map.repeat.set(23,26),o.bumpMap=o.map,o.bumpScale=.023;const a=new lt(new Ce(250,250),o);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const l=D_(t);l&&i.add(l);const c=[],u=[],h=hv(i);for(const N of[-4,16])for(const O of[0,1]){const G=-36+O*6.5,z=(N===-4?1:4)+O;po(i,c,G,N,Math.PI/2,0,z%6),po(i,[],G,N,Math.PI/2,1,(z+2)%6),O===0&&po(i,[],G,N,Math.PI/2,2,(z+4)%6)}for(const[N,O,G,z,q]of R_){const et=Math.abs(Math.round(N*1.7+G*.77+O*2))%6;po(i,O<.1?c:[],N,G,Math.PI/2+z,Math.round(O/2.59),et,q,O)}V_(i,10.6,1.6,1.03),Nh(i,46,-42,.85),Nh(i,54,37,.65);const d=new jt;i.add(d);const f=Gt(5792103,.86,.16,{map:Fn("ground","#636970")}),g=Gt(11118755,.78,.08,{map:Fn("ground","#797771",512)});g.map.repeat.set(4,3),g.bumpMap=g.map,g.bumpScale=.018;const _=Gt(3951955,.68,.38,{map:Fn("metal","#43535a")}),m=Gt(9149082,.6,.64),p=Gt(2372152,.81,.31);ct(d,[28,.22,17],[-2,.01,-19.5],g);const w=new lt(new Ce(27.7,16.7),sv());w.rotation.x=-Math.PI/2,w.position.set(-2,.144,-19.5),w.renderOrder=2,d.add(w);const x=7.1;for(const N of[-16,12])ct(d,[.3,x,17],[N,x/2,-19.5],f),c.push({minX:N-.15,maxX:N+.15,minZ:-28,maxZ:-11,height:x});ct(d,[28,x,.28],[-2,x/2,-28],f),c.push({minX:-16,maxX:12,minZ:-28.14,maxZ:-27.86,height:x});for(const[N,O]of[[-16,-4.7],[1,12]]){const G=(N+O)/2;ct(d,[O-N,x,.28],[G,x/2,-11],f),c.push({minX:N,maxX:O,minZ:-11.14,maxZ:-10.86,height:x})}ct(d,[5.7,1.4,.31],[-1.85,6.45,-11],p);for(const N of[-27.8,-22.6,-17.4,-12]){for(const O of[-15,11])Ot(d,Q(O,0,N),Q(O,8.5,N),.13,m);for(const O of[-1,1])Ot(d,Q(-2,9.7,N),Q(-2+O*14,7.1,N),.16,m)}const v=new Gs;v.moveTo(-14,0),v.lineTo(0,2.61),v.lineTo(14,0),v.closePath();const C=new ns(v,{depth:.24,bevelEnabled:!1,steps:1});for(const N of[-28.18,-10.94]){const O=new lt(C,f);O.position.set(-2,7.1,N),O.castShadow=!0,O.receiveShadow=!0,d.add(O);for(let G=-15.8;G<11.9;G+=.29){const z=2.6*(1-Math.abs(G+2)/14);z>.08&&ct(d,[.032,z,.034],[G,7.1+z/2,N+.25],p)}}for(const N of[-1,1]){const O=new lt(new kn(14.25,.2,17.5),_);O.position.set(-2+N*7,8.42,-19.5),O.rotation.z=-N*.184,O.castShadow=!0,d.add(O)}for(let N=-14;N<=10;N+=2.6)ct(d,[.08,.1,17],[N,7.5+2*(1-Math.abs(N+2)/14),-19.5],m);for(const[N,O]of[[-12,-25],[7,-25],[-11,-16],[7,-17],[-11,-22],[7,-22]]){ct(d,[2.1,.24,1.1],[N,.12,O],$u),ct(d,[1.9,1.1,1],[N,.82,O],Yn);for(const G of[-1,1])ct(d,[.07,1.03,1.06],[N+G*.83,.83,O],Re);c.push({minX:N-1.05,maxX:N+1.05,minZ:O-.56,maxZ:O+.56,height:1.6})}const R=new jt;R.position.set(-2,6.6,-20),d.add(R);const I=new lt(new Se(1.2,1.2,.3,18),m);I.rotation.x=Math.PI/2,R.add(I);const D=new jt;R.add(D);for(let N=0;N<4;N++)ct(D,[.35,.04,1],[Math.cos(N*Math.PI/2)*.46,0,Math.sin(N*Math.PI/2)*.46],p,[0,N*Math.PI/2,0]);const b=new oe({color:13098456}),M=new oe({color:16762763});for(const N of[-25,-19,-14])for(const O of[-9,5]){const G=N===-19?M:b,z=new lt(new Wo(.68,.36,18,1,!0),m);z.rotation.x=Math.PI,z.position.set(O,6.62,N),d.add(z);const q=new lt(new bi(.22,12,8),G);q.position.set(O,6.39,N),d.add(q),Ot(d,Q(O,6.78,N),Q(O,7.64,N),.027,p);for(const Rt of[-1,1])Ot(d,Q(O+Rt*1.4,6.98,N),Q(O+Rt*1.4,7.7,N),.015,p);const et=new Ti(N===-19?16764059:12772075,t?11:24,16,1.5);et.position.set(O,6.1,N),d.add(et)}const A=new Ti(16757866,20,12,1.5);A.position.set(-2,2.7,-19.1),d.add(A);for(const N of[-12,-7,3,8])ct(d,[2.7,.48,.045],[N,5.4,-10.81],new oe({color:7769233,transparent:!0,opacity:.8})),ct(d,[2.7,.09,.1],[N,5.78,-10.73],m),ct(d,[.08,.7,.1],[N+1.1,5.42,-10.73],m);zh(d,-9,-25.3,3),zh(d,6.8,-25.3,3),rv(d);const U=Gt(7306107,.81,.35,{map:Fn("metal","#8c9490",512)});for(const[N,O,G]of[[-2,-27.8,27.8],[-2,-10.81,11.25]]){const z=new lt(Io(G,6.98,.06,.23),U);z.position.set(N,.12,O),O>-20&&(z.rotation.y=Math.PI),d.add(z)}for(const[N,O]of[[-15.8,1],[11.8,-1]]){const G=new lt(Io(16.2,6.95,.055,.23),U);G.position.set(N,.12,-19.5),G.rotation.y=O*Math.PI/2,d.add(G)}for(let N=-15;N<12;N+=.36){const O=7.26+2.35*(1-Math.abs(N+2)/14);ct(d,[.038,.052,16.8],[N,O,-19.5],ur)}for(let N=0;N<16;N++){const O=-13+ut()*22,G=-25.8+ut()*12;kh(d,O,G,.3+ut()*1.15,.14)}for(const N of[-27.6,-18.9,-13.2])for(const O of[-13,9]){const G=ct(d,[.09,.9,2.1],[O,4.2,N],p);G.rotation.y=.2;for(let z=0;z<5;z++)ct(d,[.1,.045,1.9],[O+.1,3.89+z*.14,N],m)}const V=new jt;V.position.set(42,0,-33),i.add(V),ct(V,[7,21,7],[0,10.5,0],Gt(2568761,.78,.35)),ct(V,[9,4,9],[0,21.3,0],Gt(4085084,.53,.3));for(let N of[-1,1])ct(V,[9,.13,.18],[0,22.6,N*4.53],new oe({color:12242130}));const Y=new jt;Y.position.set(59,0,-30),i.add(Y),ct(Y,[30,10,25],[0,5,0],Gt(2568760,.82,.22));for(let N=2;N<10;N+=2.6){ct(Y,[30,.1,.13],[0,N,12.6],Yn);for(let O=-12;O<13;O+=6)ct(Y,[3.8,.85,.12],[O,N+.7,12.65],new oe({color:12372409,transparent:!0,opacity:.36}))}ct(Y,[30,1.3,25],[0,10.5,0],Xe);const W={barrel:[.48,.48,1.2],ibc_tote:[.67,.64,1.5],tire_stack:[.55,.55,1.13],crate_stack:[1.38,.9,2.2],forklift:[1.08,1.85,2.5],generator:[1.07,.65,1.43]},X=[];for(const[N,O,G,z,q]of C_){if(N==="light_mast"||N==="floodlight_stand"){X.push(Q_(i,O,z,N==="floodlight_stand"));continue}const et=new jt;et.position.set(O,G,z),et.rotation.y=q,i.add(et);const Rt=W[N];if(Rt&&G<.35){const[vt,Ht,re]=Rt,L=Math.abs(Math.cos(q))*vt+Math.abs(Math.sin(q))*Ht,rt=Math.abs(Math.sin(q))*vt+Math.abs(Math.cos(q))*Ht;c.push({minX:O-L,maxX:O+L,minZ:z-rt,maxZ:z+rt,height:re})}if(N==="jersey_barrier")W_(et,0,0);else if(N==="traffic_cone")lv(et,0,0);else if(N==="barrel")cv(et,0,0);else if(N==="pallet")Fh(et,0,0);else if(N==="pallet_stack")for(let vt=0;vt<4;vt++){const Ht=new jt;Ht.position.y=vt*.19,et.add(Ht),Fh(Ht,0,0,vt%2?.035:-.025)}else if(N==="cable_reel")Y_(et,0,0);else if(N==="ibc_tote")K_(et);else if(N==="tire_stack")Z_(et);else if(N==="forklift")j_(et);else if(N==="generator")J_(et);else if(N==="sign_post")tv(et,0,0,"LANE "+(O<-20?"3":O>10?"5":"4"));else if(N==="crate_wood")Do(et,0,0,0,1.1,1,1.2);else if(N==="crate_stack")for(const[vt,Ht,re]of[[-.6,0,-.4],[.55,0,-.32],[-.28,1.04,.08]])Do(et,vt,Ht,re,1.1,1,.86)}const nt=Gt(9673105,.89,.04),$=Gt(10521439,.87,.06);for(let N=-35;N<28;N+=7){const O=ct(i,[1.8,.012,.065],[N,.035,6],nt);O.renderOrder=2}for(const N of[-.85,12.8]){const O=ct(i,[74,.011,.09],[-7,.036,N],$);O.renderOrder=2}for(let N=-32;N<28;N+=10)for(const O of[-.5,12.45]){ct(i,[1.5,.015,.48],[N,.024,O],Xe);for(let G=0;G<6;G++)ct(i,[.06,.018,.42],[N-.6+G*.23,.04,O],Re)}const yt=B_();for(let N=-2;N<11;N+=1.24){const O=new lt(new Ce(2.5,1.05),yt);O.rotation.x=-Math.PI/2,O.position.set(-31,.045,N),O.renderOrder=2,i.add(O)}for(let N=0;N<73;N++){const O=-36+ut()*64,G=-26+ut()*54;ut()<.8&&kh(i,O,G,.42+ut()*2.3)}uv(i);const Et=new jt;Et.position.set(75,-2.6,-13),i.add(Et),ct(Et,[32,7,85],[0,0,0],Gt(1318440,.35,.48)),ct(Et,[25,7,15],[0,7,-21],Gt(5399402,.67,.4));for(let N=-7;N<39;N+=8)for(const O of[-8,0,8])ct(Et,[6,2.9,6.5],[O,5,N],sc(ju));fv(i);const Lt=dv(i,t?950:2700),P=X.map((N,O)=>({p:N,phase:O*1.38}));return{scene:i,obstacles:c,hitSurfaces:u,rain:Lt.rain,lamps:X,tick:(N,O,G,z)=>{Lt.update(N,G,z),Zu.time.value=O,h(O),l&&(l.material.uniforms.time.value=O);for(const{p:q,phase:et}of P)q.intensity=8.5+Math.sin(O*1.9+et)*.7}}}function _r(i,t,e,n=.42){return t<-43||t>30.5||e>32||e<-33?!0:i.some(s=>s.height>1&&t+n>s.minX&&t-n<s.maxX&&e+n>s.minZ&&e-n<s.maxZ)}const sr=new S;function Mn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;sr.copy(t),sr[n]=0,sr.normalize();const c=.5*o/(o+a),u=1-sr.angleTo(i)/l;return Math.sign(sr[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Ir extends kn{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new S,c=new S,u=new S(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new S,m=.5/o;for(let p=0,w=0;p<h.length;p+=3,w+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[w+0]=Mn(_,c,"z","y",r,n),f[w+1]=1-Mn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[w+0]=1-Mn(_,c,"z","y",r,n),f[w+1]=1-Mn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[w+0]=1-Mn(_,c,"x","z",r,t),f[w+1]=Mn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[w+0]=1-Mn(_,c,"x","z",r,t),f[w+1]=1-Mn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[w+0]=1-Mn(_,c,"x","y",r,t),f[w+1]=1-Mn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[w+0]=Mn(_,c,"x","y",r,t),f[w+1]=1-Mn(_,c,"y","x",r,e);break}}static fromJSON(t){return new Ir(t.width,t.height,t.depth,t.segments,t.radius)}}const ri=new be({color:3620672,metalness:.77,roughness:.36}),Cl=new be({color:2699319,metalness:.72,roughness:.49}),qe=new be({color:1778729,metalness:.65,roughness:.42}),gi=new be({color:8159867,metalness:.87,roughness:.29}),Dn=new be({color:5133140,metalness:.86,roughness:.38}),Pl=new be({color:2107180,metalness:.14,roughness:.77}),ws=new be({color:2830905,metalness:.01,roughness:1}),Ll=new be({color:2108212,metalness:.02,roughness:.98}),mv=new oe({color:15365459});function gv(i=42){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#e7e5df",e.fillRect(0,0,512,512);let n=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let r=0;r<16e3;r++){const o=n()*512,a=n()*512,l=n();e.fillStyle=l<.6?`rgba(10,13,16,${n()*.09})`:`rgba(255,252,235,${n()*.05})`,e.fillRect(o,a,.15+n()*1.3,.2+n()*6)}for(let r=0;r<220;r++){const o=n()*512,a=n()*512;e.strokeStyle=n()<.5?`rgba(12,18,24,${.025+n()*.12})`:`rgba(255,252,243,${.04+n()*.2})`,e.lineWidth=.25+n()*.7,e.beginPath(),e.moveTo(o,a),e.lineTo(o+1+n()*42,a+(n()-.5)*2),e.stroke()}for(let r=0;r<38;r++){const o=n()*512,a=n()*512,l=5+n()*40,c=e.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(20,22,20,${n()*.14})`),c.addColorStop(1,"rgba(20,22,20,0)"),e.fillStyle=c,e.fillRect(o-l,a-l,l*2,l*2)}const s=new Ye(t);return s.colorSpace=xe,s.wrapS=s.wrapT=$n,s.repeat.set(2,2),s.anisotropy=8,s}function _v(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#a1a9ae",t.fillRect(0,0,256,256);let e=2805;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);for(let r=0;r<256;r+=3)for(let o=0;o<256;o+=3){const a=Math.floor(n()*28);t.fillStyle=`rgba(${30+a},${35+a},${40+a},.16)`,t.fillRect(o+(Math.floor(r/3)%2?1:0),r,2.2,1)}for(let r=0;r<900;r++){const o=n()*256,a=n()*256;t.fillStyle=`rgba(15,19,24,${n()*.12})`,t.fillRect(o,a,1,4+n()*7)}const s=new Ye(i);return s.colorSpace=xe,s.wrapS=s.wrapT=$n,s.repeat.set(4,3),s.anisotropy=8,s}const Hh=_v();for(const i of[ws,Ll])i.map=Hh,i.bumpMap=Hh,i.bumpScale=.012;const Vh=gv();for(const i of[ri,Cl,qe,gi,Dn])i.map=Vh,i.bumpMap=Vh,i.bumpScale=.006,i.needsUpdate=!0;const vv=new kn(1,1,1),we=new Ir(1,1,1,2,.12);function ie(i,t,e,n,s=vv,r){const o=new lt(s,n);return o.position.set(...t),o.scale.set(...e),r&&o.rotation.set(...r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function rr(i,t,e,n,s,r=14){const o=new lt(new Se(e,e,n,r),s);return o.rotation.x=Math.PI/2,o.position.set(...t),o.castShadow=!0,i.add(o),o}function xv(){const i=document.createElement("canvas");i.width=512,i.height=128;const t=i.getContext("2d");t.fillStyle="#30383a",t.fillRect(0,0,i.width,i.height),t.fillStyle="#d3d5c9",t.font="700 43px monospace",t.fillText("PAC-9",13,57),t.fillStyle="#a6a89d",t.font="24px monospace",t.fillText("LONGSHORE  //  B4  /  05:42",14,94);const e=new Ye(i);return e.colorSpace=xe,new oe({map:e,transparent:!0,opacity:.83,depthWrite:!1})}function Gh(i,t){const e=new Gs;e.moveTo(.12,-.13),e.lineTo(1.46,-.13),e.lineTo(1.52,-.07),e.lineTo(1.52,.075),e.lineTo(1.43,.13),e.lineTo(.12,.13),e.closePath();for(let r=0;r<7;r++){const o=.3+r*.171;for(const a of[-.055,.056]){const l=new Lo;l.absellipse(o,a,.049,.027,0,Math.PI*2,!0,0),e.holes.push(l)}}const n=new ns(e,{depth:.018,bevelEnabled:!0,bevelThickness:.009,bevelSize:.006,bevelSegments:1,steps:1,curveSegments:8});n.rotateY(Math.PI/2);const s=new lt(n,ri);s.position.set(t*.136,-.013,0),s.castShadow=!0,i.add(s);for(let r=0;r<3;r++)ie(i,[t*.16,-.115+r*.116,-.88],[.026,.017,1.36],Dn)}function yv(i){const t=new Gs;t.moveTo(-.16,-.12),t.lineTo(.42,-.12),t.lineTo(.54,-.27),t.lineTo(.8,-.27),t.lineTo(.91,-.17),t.lineTo(.91,.03),t.lineTo(.77,.17),t.lineTo(-.16,.14),t.closePath();const e=new Lo;e.absellipse(.55,-.015,.24,.083,0,Math.PI*2,!0),t.holes.push(e);const n=new lt(new ns(t,{depth:.22,bevelEnabled:!0,bevelSegments:2,bevelSize:.016,bevelThickness:.016,curveSegments:12}),Pl);n.rotation.y=Math.PI/2,n.position.set(-.11,-.125,.15),i.add(n),ie(i,[0,-.12,.93],[.31,.38,.11],Pl,we),ie(i,[0,-.12,.99],[.33,.42,.058],qe,we);for(let s=0;s<6;s++)ie(i,[.171,-.1+s*.049,.95],[.012,.018,.11],Dn)}function Mv(i){ie(i,[0,-.34,.36],[.15,.4,.2],Pl,we,[.24,0,0]);for(let l=0;l<4;l++)ie(i,[.1,-.26-l*.075,.42],[.026,.027,.19],qe);const t=new lt(new rn(.12,.017,6,18,Math.PI*1.6),Dn);t.rotation.y=Math.PI/2,t.position.set(.07,-.25,.22),i.add(t);const e=new jt;e.position.set(-.29,-.17,-.84),i.add(e);const n=new lt(new Se(.12,.17,.55,16),Ll);n.rotation.set(.59,0,-.28),n.position.set(-.18,-.27,.2),e.add(n);const s=ie(e,[-.125,-.195,.055],[.34,.19,.29],ws,we,[0,0,-.23]);s.rotation.y=-.1,ie(e,[-.022,.006,-.04],[.27,.15,.28],ws,we,[0,0,-.18]);for(let l=0;l<4;l++){const c=ie(e,[-.17+l*.078,.075,-.175],[.069,.082,.23],ws,we,[-.27,0,0]);c.rotation.y=.06+l*.05,ie(e,[-.17+l*.078,.105,-.155],[.063,.017,.11],Dn)}const r=ie(e,[.134,-.058,-.018],[.105,.12,.18],ws,we,[0,.2,-.42]);r.rotation.y=.42;const o=new jt;o.position.set(.16,-.44,.73),i.add(o);const a=new lt(new Se(.12,.18,.55,14),Ll);a.rotation.set(.47,.08,.11),a.position.set(.14,-.19,.12),o.add(a);for(let l=0;l<4;l++)ie(o,[.13,-.03-l*.13,.01+l*.065],[.28,.023,.27],ws,we,[.47,.08,.1])}class Sv{root=new jt;muzzle=new jt;flash=new lt(new Ce(.19,.42),new oe({color:16769181,transparent:!0,opacity:0,depthWrite:!1,side:Fe,blending:Ki}));light=new Ti(16757852,0,6,2);kick=0;reloadAnim=0;aim=0;time=0;constructor(t){t.add(this.root);const e=this.root;ie(e,[0,-.11,.19],[.34,.24,.75],Cl,we),ie(e,[0,.025,.075],[.37,.2,.72],ri,we),ie(e,[0,.112,.035],[.3,.07,.66],qe,we),ie(e,[0,-.015,-.17],[.33,.185,.48],Dn,we),ie(e,[0,.032,.49],[.39,.12,.15],ri,we),rr(e,[0,-.014,-1.04],.088,1.4,qe),Gh(e,-1),Gh(e,1),ie(e,[0,-.133,-.84],[.25,.029,1.33],qe),ie(e,[0,.139,-.83],[.27,.026,1.41],qe);for(let h=0;h<18;h++){const d=-1.46+h*.103;ie(e,[0,.169,d],[.23,.025,.041],h%4===0?gi:ri,we)}for(let h=0;h<8;h++)ie(e,[0,-.145,-1.38+h*.16],[.22,.023,.04],Dn);for(const h of[-1,1])for(let d=0;d<5;d++)ie(e,[h*.147,.002,-.93+d*.2],[.018,.05,.086],Dn);rr(e,[0,-.014,-1.87],.064,.73,gi),rr(e,[0,-.014,-2.04],.084,.27,qe);for(let h=0;h<4;h++){const d=rr(e,[0,-.014,-2.06+h*.065],.084,.015,Dn);d.material=gi}rr(e,[0,-.014,-2.2],.08,.18,ri);for(const h of[-1,1])for(let d=0;d<2;d++)ie(e,[h*.081,0,-2.24+d*.071],[.016,.036,.046],qe);for(const h of[-1,1]){for(const d of[-.13,.2,.46]){const f=new lt(new Se(.022,.022,.012,12),gi);f.rotation.z=Math.PI/2,f.position.set(h*.185,-.085,d),e.add(f)}ie(e,[h*.19,-.007,.11],[.019,.09,.19],qe),ie(e,[h*.2,-.02,.3],[.01,.035,.085],gi)}const n=ie(e,[-.205,.045,-.08],[.02,.08,.24],qe,we);n.rotation.z=-.1;const s=new lt(new Ce(.26,.066),xv());s.rotation.y=-Math.PI/2,s.position.set(-.201,-.055,.18),e.add(s),ie(e,[0,-.37,.16],[.22,.38,.25],Cl,we,[.2,0,0]),ie(e,[0,-.57,.08],[.23,.09,.26],qe,we,[.2,0,0]);for(let h=0;h<9;h++)ie(e,[.113,-.26-h*.037,.13-h*.009],[.014,.019,.23],Dn);yv(e);const r=new jt;r.position.set(0,.155,-.38),r.scale.setScalar(.83),e.add(r),ie(r,[0,.024,0],[.22,.075,.34],qe,we);for(const h of[-1,1]){ie(r,[h*.156,.242,-.045],[.057,.282,.205],Dn,we),ie(r,[h*.156,.243,.088],[.048,.23,.038],ri,we);for(const f of[-.09,.08])ie(r,[h*.147,.14,f],[.044,.052,.047],gi,we);const d=ie(r,[h*.156,.385,-.043],[.056,.045,.19],qe,we);d.rotation.z=h*.035}ie(r,[0,.399,-.044],[.355,.063,.22],ri,we),ie(r,[0,.11,-.045],[.35,.072,.22],qe,we),ie(r,[0,.445,-.045],[.303,.017,.16],qe,we);const o=new oe({color:3232871,transparent:!0,opacity:.31,depthWrite:!1,side:Fe}),a=new lt(new Ce(.245,.225),o);a.position.set(0,.26,.052),r.add(a);const l=new lt(new Ce(.243,.223),new oe({color:5801114,transparent:!0,opacity:.08,depthWrite:!1,side:Fe}));l.position.set(0,.26,-.112),r.add(l);const c=new oe({color:16742230,transparent:!0,opacity:.68,depthWrite:!1,side:Fe,blending:Ki}),u=new lt(new rn(.042,.0038,6,32),c);u.position.set(0,.256,.059),r.add(u),ie(r,[0,.256,.065],[.008,.008,.004],mv);for(const h of[-1,1]){ie(r,[h*.205,.28,-.01],[.046,.05,.11],ri,we);const d=new lt(new Se(.045,.045,.024,14),qe);d.rotation.z=Math.PI/2,d.position.set(h*.228,.28,.003),r.add(d)}for(const h of[-.21,.11])ie(r,[0,.05,h],[.28,.038,.083],gi,we);Mv(e),this.muzzle.position.set(0,-.013,-2.3),e.add(this.muzzle),this.flash.rotation.z=.3,this.muzzle.add(this.flash),this.muzzle.add(this.light),this.root.scale.setScalar(.89),this.root.position.set(.68,-.645,-.92),this.root.rotation.y=.16}shoot(){this.kick=1,this.flash.material.opacity=1,this.flash.rotation.z=Math.random()*6,this.light.intensity=17}reload(){this.reloadAnim=1}update(t,e,n,s,r){this.time+=t,this.kick=Math.max(0,this.kick-t*5.2),this.aim=he.damp(this.aim,r?1:0,11,t),this.reloadAnim=Math.max(0,this.reloadAnim-t/1.45);const o=Math.sin(this.time*(s?14:9))*Math.min(.016,n*.012);this.root.position.set(.68-this.aim*.56+Math.sin(e*2)*.003,-.645+this.aim*.29+o-this.kick*.073,-.91-this.aim*.16+this.kick*.13),this.root.rotation.set(-this.kick*.16+Math.sin(e*1.3)*.004+Math.sin(this.reloadAnim*Math.PI)*.31,.16-this.aim*.16,Math.sin(e*6)*Math.min(n*.011,.018)+Math.sin(this.reloadAnim*Math.PI)*-.3),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*14),this.light.intensity=Math.max(0,this.light.intensity-t*210)}}const me={hp:140,runSpeed:4.5,patrolSpeed:1.5,stalkSpeed:2,accel:7,turnRate:2.5,rangeMin:8,rangeMax:18,fireRange:42,telegraph:.5,burst:4,burstGap:.11,shotDamage:5,cooldownMin:1.8,cooldownMax:3,lungeRange:3,lungeWind:.28,lungeSpeed:9.5,lungeDuration:.36,lungeDamage:15,lungeHitRange:1.35,lungeCooldown:3.5,recover:.55};class bv{phase="move";phaseTime=0;cooldown=.8;lungeCooldown=.3;shotsRemaining=0;shotGap=0;moveTime=0;didMelee=!1;bursts=0;random;constructor(t=Math.random){this.random=t,this.cooldown=.6+t()}enter(t,e=0){this.phase=t,this.phaseTime=e}reposition(t){this.enter("move"),this.moveTime=0,this.bursts=0,t.reposition=!0}update(t,e){const n={telegraph:!1,fire:!1,melee:!1,beganLunge:!1,reposition:!1};if(this.cooldown-=t,this.lungeCooldown-=t,!e.alerted)return this.enter("move"),this.moveTime=0,n;const s=e.distance,r=e.lineOfSight;switch((this.phase==="move"||this.phase==="aim"||this.phase==="cool")&&r&&s<me.lungeRange&&this.lungeCooldown<=0&&(this.enter("wind",me.lungeWind),n.telegraph=!0),this.phase){case"move":this.moveTime+=t,e.playerMovedFromPlan?(n.reposition=!0,this.moveTime=0):(e.reachedFiringPosition||this.moveTime>7||this.moveTime>1.4&&r&&s>me.rangeMin-1&&s<me.rangeMax+2&&this.random()<t*.7)&&this.enter("aim");break;case"aim":case"cool":if(this.phaseTime+=t,r){if(s<me.rangeMin-3&&this.phaseTime>.8){this.reposition(n);break}this.cooldown<=0&&e.aligned&&e.canClaimVolley&&(this.enter("tele",me.telegraph),n.telegraph=!0)}else((e.timeWithoutSight??0)>1.1||this.phaseTime>3)&&this.reposition(n);break;case"tele":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("burst"),this.shotsRemaining=me.burst,this.shotGap=0);break;case"burst":this.shotGap-=t,this.shotsRemaining>0&&this.shotGap<=0&&(this.shotsRemaining--,this.shotGap+=me.burstGap,n.fire=!0),this.shotsRemaining<=0&&(this.cooldown=me.cooldownMin+this.random()*(me.cooldownMax-me.cooldownMin),this.bursts++,this.bursts>=1+(this.random()<.4?1:0)?this.reposition(n):this.enter("cool"));break;case"wind":this.phaseTime-=t,this.phaseTime<=0&&(this.enter("lunge",me.lungeDuration),this.didMelee=!1,n.beganLunge=!0);break;case"lunge":this.phaseTime-=t,!this.didMelee&&s<me.lungeHitRange&&(this.didMelee=!0,n.melee=!0),this.phaseTime<=0&&(this.enter("recover",me.recover),this.lungeCooldown=me.lungeCooldown);break;case"recover":this.phaseTime-=t,this.phaseTime<=0&&this.enter("move");break}return n}}class Ev{yaw=0;yawRate=0;speed=0;reset(t,e=0){this.yaw=t,this.speed=e,this.yawRate=0}beginLunge(t){this.yaw=t,this.yawRate=0,this.speed=me.lungeSpeed}endLunge(){this.speed*=.3}step(t,e,n,s,r=!1){const o=Math.atan2(Math.sin(e-this.yaw),Math.cos(e-this.yaw)),a=me.turnRate,l=Math.max(-a,Math.min(a,o*6))*(r?2:1);this.yawRate+=(l-this.yawRate)*(1-Math.exp(-10*t)),this.yaw+=this.yawRate*t;const c=r?me.lungeSpeed:s<.45||Math.abs(o)>1.1?0:Math.max(0,Math.min(n*(1-Math.abs(o)*.5),.4+s*2.6));return r?this.speed=me.lungeSpeed:c>this.speed?this.speed=Math.min(c,this.speed+me.accel*t):this.speed=Math.max(c,this.speed-me.accel*1.4*t),{yaw:this.yaw,yawRate:this.yawRate,speed:this.speed,targetSpeed:c,error:o}}}const Sn=[1.15,1.15,1.15],Da=[.95,.96,.97],Ln=[1,.34,.08],Es=[.1,.11,.12],Oi=[.035,.035,.038],Wh=[1,.7,.07],mi=[1,1,1],Ke=[2.4,2.5,2.6],Ne=[.45,.46,.48],wv=[9,9,9.6],Tv=[5.5,4,1.6],Uo=Math.PI/2,Av={stand:.72,L1:.4,L2:.42,l0:.075,hipX:.165,hipY:-.01,hipZ:.4,legs:["FL","FR","RL","RR"],side:[1,-1,1,-1],fore:[1,1,-1,-1],footR:.046};function Jt(i,t,e,n=.008){return new Ir(i,t,e,3,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4))}function rc(i,{p:t=[0,0,0],r:e=[0,0,0],s:n=1}={}){const s=typeof n=="number"?[n,n,n]:n,r=new le().compose(new S(t[0],t[1],t[2]),new Ai().setFromEuler(new zn(e[0],e[1],e[2])),new S(s[0],s[1],s[2]));return i.applyMatrix4(r),i}function bt(i,t,e,n,s=0,r=0,o=0,a=1){return rc(i,{p:[t,e,n],r:[s,r,o],s:a})}function gn(i,t,e,n=12){return new Se(i,t,e,n)}function In(i,t,e,n=12){return rc(gn(i,t,e,n),{r:[0,0,-Uo]})}function pn(i,t,e,n=12){return rc(gn(i,t,e,n),{r:[Uo,0,0]})}function mo(i,t,e,n=e,s=8){const r=new S(i[0],i[1],i[2]),o=new S(t[0],t[1],t[2]),a=o.clone().sub(r),l=gn(n,e,a.length(),s);return l.applyMatrix4(new le().compose(r.clone().add(o).multiplyScalar(.5),new Ai().setFromUnitVectors(new S(0,1,0),a.normalize()),new S(1,1,1))),l}function Bi(i,t=.03,e=8,n=!1,s=0){const r=new Er(i.map(a=>new S(a[0],a[1],a[2])),n,"catmullrom",s),o=r.getLength();return new Bs(r,Math.min(400,Math.max(2,Math.ceil(o/Math.max(.08,t*3)))),t,e,n)}const Ua=(i,t=14,e=10,n=1,s=1,r=1)=>new bi(i,t,e).scale(n,s,r),Xh=(i,t,e)=>bt(In(.0075,.0075,.006,6),i,t,e),Yh=(i,t,e)=>bt(gn(.0075,.0075,.006,6),i,t,e),Rv=(i,t,e)=>bt(pn(.0075,.0075,.006,6),i,t,e),qh=rn;function td(i){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle=i==="armor"?"#ededed":"#dadada",e.fillRect(0,0,512,512);let n=i==="armor"?1129307:1934211;const s=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);for(let o=0;o<22e3;o++){const a=s()*512,l=s()*512,c=(i==="armor"?.035:.08)*s();e.fillStyle=s()>.5?`rgba(10,16,22,${c})`:`rgba(255,255,255,${c})`,e.fillRect(a,l,.5+s()*2,.5+s()*2)}for(let o=0;o<(i==="armor"?260:430);o++){const a=s()*512,l=s()*512;e.strokeStyle=`rgba(23,26,29,${.035+s()*.12})`,e.lineWidth=.3+s(),e.beginPath(),e.moveTo(a,l),e.lineTo(a+(s()-.5)*25,l+(s()-.5)*2),e.stroke()}const r=new Ye(t);return r.colorSpace=xe,r.wrapS=r.wrapT=$n,r.repeat.set(2,2),r.anisotropy=8,r}const $h=td("armor"),Zh=td("gunmetal"),Cv=new be({color:11449528,map:$h,bumpMap:$h,bumpScale:.005,roughness:.54,metalness:.36,vertexColors:!0}),Pv=new be({color:2764081,map:Zh,bumpMap:Zh,bumpScale:.006,roughness:.6,metalness:.77,vertexColors:!0}),Lv=new oe({color:16777215,vertexColors:!0}),Iv=new oe({color:16777215,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}),Dv={shell:Cv,metal:Pv,glow:Lv,lens:Iv};class Uv{bones={};lens;footByBone={};feet=[];bone(t,e,n=0,s=0,r=0){const o=new jt;o.name=t,o.position.set(n,s,r),this.bones[t]=o,e&&this.bones[e].add(o)}add(t,e,n,s=[1,1,1],r=!0){const o=n.index?n.toNonIndexed():n;o!==n&&n.dispose(),o.getAttribute("normal")||o.computeVertexNormals();const a=o.getAttribute("normal"),l=o.getAttribute("position"),c=new Float32Array(l.count*3);for(let h=0;h<l.count;h++){const d=r?.74+.26*(a.getY(h)*.5+.5):1;c[h*3]=s[0]*d,c[h*3+1]=s[1]*d,c[h*3+2]=s[2]*d}o.setAttribute("color",new Qe(c,3));const u=new lt(o,Dv[t]);u.castShadow=t!=="glow"&&t!=="lens",u.receiveShadow=!0,u.name=`source-${e}-${t}`,this.bones[e].add(u),t==="lens"&&(this.lens=u),e.startsWith("shin")&&t==="shell"&&(this.footByBone[e]=u)}build(t){return this.feet=["FL","FR","RL","RR"].map(e=>{const n=this.footByBone["shin"+e],s=n.geometry;s.computeBoundingBox();const r=s.boundingBox.getCenter(new S);return s.translate(-r.x,-r.y,-r.z),n.position.copy(r),n.name="HoundFoot"+e,n}),this}}const Nv=Uv;function Fv(){let i=Av,t=new Nv;t.bone("root",null,0,0,0),t.bone("body","root",0,i.stand,0),t.bone("neck","body",0,.06,.49),t.bone("head","neck",0,.13,.12),t.bone("turret","body",0,.152,-.03),t.bone("gun","turret",0,.095,.02),t.bone("antenna","body",-.105,.15,-.46),t.bone("beacon","body",.105,.2,-.455);for(let n=0;n<4;n++){let s=i.legs[n],r=i.side[n];t.bone("abd"+s,"body",r*i.hipX,i.hipY,i.fore[n]*i.hipZ),t.bone("thigh"+s,"abd"+s,r*i.l0,0,0),t.bone("shin"+s,"thigh"+s,0,-.4,0)}let e=(n,s,r,o,a=!0)=>t.add(n,s,r,o,a);e("metal","body",bt(Jt(.27,.2,.98,.02),0,-.01,0),Ne),e("shell","body",bt(Jt(.35,.05,.3,.014),0,.125,.33),Sn),e("shell","body",bt(Jt(.35,.05,.36,.014),0,.125,-.012),Sn),e("shell","body",bt(Jt(.1,.052,.36,.01),0,.126,-.012+0),Da);for(let n of[-.15,.15])for(let s of[.21,.45,-.17,.145])e("metal","body",Yh(n,.152,s),Ke);e("metal","body",bt(Jt(.31,.03,.25,.006),0,.112,-.335),mi);for(let n=0;n<10;n++)e("metal","body",bt(Jt(.007,.062,.225,.002),-.126+n*.028,.155,-.335),Ke);e("metal","body",bt(Jt(.3,.012,.02,.003),0,.186,-.24),Ne),e("metal","body",bt(Jt(.3,.012,.02,.003),0,.186,-.43),Ne);for(let n of[1,-1]){e("shell","body",bt(Jt(.032,.15,.31,.012),n*.15,.022,-.075),Sn),e("shell","body",bt(Jt(.032,.15,.135,.012),n*.15,.022,.1625),Da),e("metal","body",Bi([[n*.168,.06,.125],[n*.182,.06,.135],[n*.182,.06,.19],[n*.168,.06,.2]],.005,5),Ke),e("shell","body",bt(Jt(.034,.016,.135,.004),n*.151,-.035,.1625),Wh),e("shell","body",bt(Jt(.034,.042,.46,.008),n*.151,-.078,0),Ln),e("shell","body",bt(Jt(.028,.1,.11,.008),n*.146,.01,.305),Es);for(let s=0;s<4;s++)e("metal","body",bt(Jt(.004,.012,.085,.001),n*.161,-.02+s*.022,.305),Ne);for(let s of[-.035,.08])for(let r of[-.21,.06,.115,.21])e("metal","body",Xh(n*.167,s,r),Ke);e("metal","body",Bi([[n*.135,.148,-.19],[n*.135,.205,-.16],[n*.135,.212,0],[n*.135,.205,.43],[n*.135,.148,.465]],.0105,6),Ke);for(let s of[0,.26])e("metal","body",bt(gn(.008,.008,.06,6),n*.135,.178,s),Ke);e("shell","body",Bi([[n*.118,-.105,-.36],[n*.132,-.118,-.2],[n*.13,-.112,.1],[n*.118,-.1,.36]],.009,5),Oi),e("metal","body",bt(new qh(.02,.005,5,10),n*.17,.085,-.335,0,Uo,0),Ke)}e("shell","body",bt(Jt(.3,.15,.075,.018),0,-.005,.505),Ln),e("shell","body",bt(Jt(.2,.07,.02,.006),0,.012,.545),Es);for(let n=0;n<6;n++)e("shell","body",bt(Jt(.05,.034,.014,.003),-.125+n*.05,-.098,.538,0,0,0),n%2?Es:Wh);for(let n of[-.115,.115])e("metal","body",bt(pn(.021,.021,.014,10),n,.012,.547),Ne),e("glow","body",bt(pn(.015,.015,.004,10),n,.012,.556),[6.5,4.6,2.2],!1);e("metal","body",bt(Jt(.24,.095,.56,.02),0,-.145,0),mi),e("shell","body",bt(Jt(.246,.03,.09,.006),0,-.14,.12),Ln),e("shell","body",bt(Jt(.246,.03,.09,.006),0,-.14,-.12),Ln),e("shell","body",bt(Jt(.29,.15,.05,.014),0,0,-.495),Sn),e("shell","body",bt(Jt(.17,.05,.012,.004),0,.03,-.523),Es),e("glow","body",bt(Jt(.13,.012,.004,.001),0,.03,-.531),[5,.3,.1],!1),e("metal","body",bt(pn(.022,.022,.02,10),.085,-.035,-.525),Ke),e("metal","body",bt(new qh(.024,.006,5,10),-.07,-.05,-.528,Uo,0,0),Ke);for(let n of[-.125,.125])for(let s of[-.055,.055])e("metal","body",Rv(n,s,-.523),Ke);e("shell","body",Bi([[.09,.15,-.2],[.13,.2,-.16],[.12,.2,-.08],[.09,.165,-.05]],.009,5),Oi),e("metal","neck",mo([0,-.02,-.02],[0,.11,.1],.045,.036,10),Ne);for(let n=0;n<3;n++){let s=.2+n*.28;e("shell","neck",mo([0,-.02+.13*s-.008,-.02+.12*s-.0075],[0,-.02+.13*s+.008,-.02+.12*s+.0075],.052,.052,10),Oi)}e("shell","neck",bt(Jt(.13,.05,.1,.012),0,-.01,-.03),Sn),e("shell","neck",Bi([[.05,-.02,-.04],[.07,.05,.02],[.06,.11,.07],[.045,.12,.1]],.007,5),Oi),e("shell","head",bt(Jt(.19,.118,.25,.03),0,0,0),Sn),e("shell","head",bt(Jt(.168,.074,.03,.012),0,-.004,.118),Es),e("lens","head",bt(Jt(.128,.024,.006,.002),0,.006,.1345),[1,1,1],!1);for(let n of[-.056,.056])e("metal","head",bt(pn(.015,.015,.012,10),n,-.022,.132),Ne),e("metal","head",bt(pn(.009,.009,.004,8),n,-.022,.139),[.1,.12,.2]);e("shell","head",bt(Jt(.062,.008,.2,.003),0,.06,-.005),Ln),e("metal","head",bt(In(.032,.032,.214,12),0,0,-.055),Ne);for(let n of[1,-1])e("shell","head",bt(In(.022,.022,.006,10),n*.108,0,-.055),Ln);e("metal","head",bt(gn(.036,.036,.026,14),0,.072,-.05),Ne),e("metal","head",bt(gn(.037,.037,.006,14),0,.074,-.05),[.2,.3,.5]),e("metal","head",bt(Jt(.12,.03,.13,.008),0,-.068,.02),mi);for(let n of[-.08,.08])for(let s of[-.09,.07])e("metal","head",Yh(n,.061,s),Ke);e("metal","turret",bt(gn(.105,.118,.034,18),0,0,0),Ne),e("metal","turret",bt(Jt(.18,.02,.16,.005),0,.026,0),mi);for(let n of[1,-1])e("shell","turret",bt(Jt(.028,.115,.15,.012),n*.078,.085,.005),Sn),e("metal","turret",bt(In(.022,.022,.008,10),n*.094,.095,.02),Ke);e("shell","gun",bt(Jt(.108,.086,.21,.016),0,0,-.012),Sn),e("shell","gun",bt(Jt(.11,.02,.212,.006),0,-.022,-.012),Ln),e("metal","gun",bt(pn(.035,.035,.11,12),0,0,.145),Ne);for(let n=0;n<4;n++)e("metal","gun",bt(pn(.039,.039,.008,12),0,0,.105+n*.026),mi);e("metal","gun",bt(pn(.022,.024,.3,12),0,0,.25),mi),e("metal","gun",bt(pn(.036,.036,.06,10),0,0,.395),Ne),e("metal","gun",bt(Jt(.08,.012,.025,.003),0,0,.395),[.15,.15,.15]),e("metal","gun",bt(In(.056,.056,.06,14),.084,-.004,-.045),Ne),e("metal","gun",bt(In(.02,.02,.066,8),.084,-.004,-.045),Tv),e("metal","gun",bt(Jt(.036,.036,.095,.008),-.03,.06,0),Ne),e("glow","gun",bt(pn(.011,.011,.003,8),-.03,.06,.049),[1.6,.12,.05],!1),e("shell","gun",Bi([[.05,-.03,-.11],[.06,-.07,-.13],[.04,-.09,-.1]],.008,5),Oi),e("metal","body",bt(gn(.022,.026,.05,10),.105,.175,-.455),Ne),e("glow","beacon",bt(Ua(.02,10,6,1,1.25,1),0,.012,0),[14,5.5,.5],!1),e("metal","antenna",bt(gn(.011,.014,.05,8),0,.025,0),Ne),e("metal","antenna",bt(gn(.0028,.005,.62,5),0,.36,0),Ne),e("shell","antenna",bt(Ua(.009,6,4),0,.67,0),Ln);for(let n=0;n<4;n++){let s=i.legs[n],r=i.side[n],o="abd"+s,a="thigh"+s,l="shin"+s;e("metal",o,bt(pn(.06,.06,.17,14),-r*.02,0,0),Ne),e("shell",o,bt(Jt(.11,.05,.155,.014),r*0,.058,0),Sn),e("metal",o,bt(pn(.03,.03,.18,8),-r*.02,0,0),Ke),e("shell",a,bt(In(.078,.078,.07,18),0,0,0),Sn),e("shell",a,bt(In(.081,.081,.016,18),r*.012,0,0),Ln),e("metal",a,bt(In(.048,.048,.082,12),0,0,0),Ne);for(let c=0;c<5;c++){let u=c*1.2566;e("metal",a,Xh(r*.039,Math.cos(u)*.062,Math.sin(u)*.062),Ke)}e("shell",a,bt(Jt(.062,i.L1-.07,.1,.022),0,-.4*.5-.005,.004),Sn),e("metal",a,bt(Jt(.044,i.L1-.04,.06,.012),0,-.4*.5,-.035),Ne),e("shell",a,bt(Jt(.065,.045,.103,.01),0,-.145,.004),Ln),e("shell",a,bt(Jt(.064,.012,.102,.004),0,-.26,.004),Es),e("metal",a,mo([0,-.06,-.082],[0,-.4*.62,-.078],.021,.021,10),Ke),e("metal",a,mo([0,-.4*.62,-.078],[0,-.4+.025,-.058],.009,.009,6),wv),e("metal",a,bt(Jt(.05,.03,.035,.006),0,-.055,-.07),mi),e("shell",a,Bi([[r*.036,-.02,.05],[r*.044,-.13,.062],[r*.042,-.28,.058],[r*.034,-.4+.03,.035]],.0065,5),Oi),e("metal",a,bt(In(.05,.05,.086,14),0,-.4,0),Ne),e("shell",a,bt(In(.036,.036,.092,12),0,-.4,0),Da),e("metal",l,bt(gn(.03,.021,i.L2-.08,10),0,-.33999999999999997/2-.01,0),Ne),e("shell",l,bt(Jt(.052,.21,.04,.014),0,-.14,.02),Sn),e("shell",l,bt(Jt(.054,.02,.042,.006),0,-.215,.02),Ln),e("metal",l,bt(Jt(.03,.06,.05,.008),0,-.02,-.03),mi),e("metal",l,bt(gn(.024,.03,.03,10),0,-.42+.085,0),Ke),e("shell",l,bt(Ua(i.footR+.002,12,8,1,.86,1.08),0,-.42+i.footR*.86,.004),Oi)}return t.build(["shell","metal","glow","lens"])}function Ov(){return Fv()}const So=new be({color:3492173,roughness:.42,metalness:.78}),ki=new be({color:8160640,roughness:.45,metalness:.72}),_i=new be({color:3423035,roughness:.71,metalness:.38}),Bv=new be({color:11053728,roughness:.41,metalness:.69}),Kh=new be({color:1778210,roughness:.92,metalness:.14}),zv=new oe({color:16214853}),kv=new oe({color:15970401}),ed=new be({color:11908263,roughness:.54,metalness:.46}),nd=new be({color:13683124,roughness:.62,metalness:.29}),Na=new be({color:12153150,roughness:.59,metalness:.37}),Hv=new Ir(1,1,1,2,.075);function Vv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");let e=12122026;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);t.fillStyle="#dedad2",t.fillRect(0,0,256,256);for(let r=0;r<7e3;r++){const o=n()*256,a=n()*256;t.fillStyle=n()>.5?"rgba(5,15,20,.13)":"rgba(255,255,255,.08)",t.fillRect(o,a,.1+n()*2,.1+n()*7)}for(let r=0;r<180;r++){const o=n()*256,a=n()*256;t.strokeStyle="rgba(37,40,41,.16)",t.lineWidth=.25+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+n()*30,a+n()),t.stroke()}const s=new Ye(i);return s.colorSpace=xe,s.wrapS=s.wrapT=$n,s.repeat.set(2,2),s.anisotropy=4,s}function Gv(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle="#f7f6ef",t.fillRect(0,0,512,512);let e=930522;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let r=0;r<18e3;r++){const o=n()*512,a=n()*512;t.fillStyle=n()<.6?`rgba(39,42,39,${n()*.065})`:`rgba(145,120,84,${n()*.035})`,t.fillRect(o,a,.4+n()*2.5,.3+n()*1.8)}for(let r=0;r<350;r++){const o=n()*512,a=n()*512;t.strokeStyle=n()<.85?`rgba(30,36,35,${.04+n()*.18})`:`rgba(122,62,30,${.06+n()*.12})`,t.lineWidth=.35+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+(n()-.5)*75,a+(n()-.5)*5),t.stroke()}for(let r=0;r<100;r++){const o=n()*512,a=n()*512,l=3+n()*37,c=t.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,`rgba(37,46,44,${.04+n()*.16})`),c.addColorStop(1,"rgba(37,46,44,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,2*l,2*l)}const s=new Ye(i);return s.colorSpace=xe,s.wrapS=s.wrapT=$n,s.repeat.set(1.4,1.4),s.anisotropy=8,s}const jh=Gv();for(const i of[ed,nd])i.map=jh,i.bumpMap=jh,i.bumpScale=.005,i.needsUpdate=!0;const Jh=Vv();for(const i of[So,ki,_i,Bv])i.map=Jh,i.bumpMap=Jh,i.bumpScale=.009,i.needsUpdate=!0;const Wv=new bi(1,20,14);function fn(i,t,e,n,s){const r=new lt(Hv,n);return r.position.set(...t),r.scale.set(...e),s&&r.rotation.set(...s),r.castShadow=!0,i.add(r),r}function Xv(i,t,e,n){const s=new lt(Wv,n);return s.position.set(...t),s.scale.set(...e),s.castShadow=!0,i.add(s),s}function or(i,t,e,n,s,r=8){const o=e.clone().sub(t),a=new lt(new Se(n,n,o.length(),r),s);return a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a.castShadow=!0,i.add(a),a}const Yv=kv;function qv(i){const t=[],e=i;e.position.y=2.95,Xv(e,[0,0,0],[.31,.2,.48],ed),fn(e,[0,.1,-.06],[.39,.14,.51],So),fn(e,[0,-.055,.34],[.3,.16,.24],ki),fn(e,[0,-.077,.51],[.26,.1,.11],Kh),fn(e,[0,.018,.55],[.28,.06,.055],Na);for(const s of[-1,1]){const r=s;fn(e,[r*.14,-.068,.558],[.08,.045,.027],zv),fn(e,[r*.24,.11,-.31],[.075,.12,.26],_i,[r*.2,0,r*.14]);for(const o of[-.39,.36]){const a=new jt;a.position.set(r*.94,.035,o),e.add(a),or(e,new S(r*.19,.04,o*.2),new S(r*.94,.05,o),.059,_i,12),fn(e,[r*.52,.075,o*.58],[.57,.07,.19],So,[0,r*.19,0]);const l=new jt;a.add(l);const c=new lt(new ec([new dt(.315,-.12),new dt(.366,-.12),new dt(.39,-.09),new dt(.39,.09),new dt(.367,.13),new dt(.315,.13),new dt(.31,.096),new dt(.31,-.09)],32),nd);c.castShadow=!0,c.receiveShadow=!0,l.add(c);const u=new lt(new rn(.365,.019,8,32),Na);u.rotation.x=Math.PI/2,u.position.y=.124,l.add(u);const h=new lt(new rn(.308,.011,8,28),_i);h.rotation.x=Math.PI/2,h.position.y=-.092,l.add(h);for(let _=0;_<4;_++){const m=_*Math.PI/2,p=or(l,new S(.08*Math.cos(m),-.055,.08*Math.sin(m)),new S(.313*Math.cos(m),-.055,.313*Math.sin(m)),.021,ki,8);p.userData.structural=!0}const d=new jt;d.position.y=.016,l.add(d),t.push(d);const f=new lt(new Se(.08,.1,.12,16),_i);d.add(f);for(let _=0;_<4;_++){const m=fn(d,[.19,0,0],[.27,.016,.08],ki,[0,_*Math.PI/2+.21,0]);m.position.set(.19*Math.cos(_*Math.PI/2),0,.19*Math.sin(_*Math.PI/2)),m.rotation.y=-_*Math.PI/2-.2}const g=new lt(new Se(.13,.13,.09,14),Kh);g.position.y=-.16,a.add(g);for(let _=0;_<8;_++){const m=_*Math.PI/4;fn(a,[Math.cos(m)*.135,-.16,Math.sin(m)*.135],[.025,.06,.035],_i,[0,m,0])}fn(e,[r*.94,.065,o],[.1,.07,.13],Na)}}for(const s of[-1,1])for(let r=0;r<5;r++)fn(e,[s*.307,.16,-.36+r*.14],[.015,.05,.052],ki);const n=new jt;n.position.set(0,-.18,.19),e.add(n),fn(n,[0,-.06,.12],[.2,.15,.3],_i),or(n,new S(0,-.11,.12),new S(0,-.12,.72),.039,So,12),fn(n,[0,-.12,.71],[.1,.095,.13],ki);for(const s of[-1,1])or(e,new S(s*.16,-.08,-.12),new S(s*.28,-.36,-.26),.024,_i),or(e,new S(s*.28,-.36,-.26),new S(s*.25,-.43,-.17),.022,ki);return t}const ze={hp:45,boltSpeed:70,boltDamage:7,burst:3,burstGap:.12,telegraph:.55,cooldownMin:1.9,cooldownMax:3.3,fireRange:42,spreadNear:.018,spreadFar:.065,boltLife:1.3,maxBolts:32};class $v{phase="idle";phaseTime=0;cooldown=1;shotsRemaining=0;lead=.5;random;constructor(t=Math.random){this.random=t,this.cooldown=1+t()*1.5}reset(){this.phase="idle",this.phaseTime=0,this.shotsRemaining=0,this.cooldown=1+this.random()*1.5}update(t,e){const n={telegraph:!1,fire:!1,released:!1};return this.cooldown-=t,this.phase==="idle"?e.alerted&&e.visible&&e.aligned&&e.distance<ze.fireRange&&this.cooldown<=0&&e.canClaim&&(this.phase="tele",this.phaseTime=ze.telegraph,n.telegraph=!0):this.phase==="tele"?e.alerted?(this.phaseTime-=t)<=0&&(this.phase="burst",this.phaseTime=0,this.shotsRemaining=ze.burst,this.lead=.2+this.random()*.65):(this.phase="idle",n.released=!0):(this.phaseTime-=t,this.phaseTime<=0&&this.shotsRemaining>0&&(this.shotsRemaining--,this.phaseTime+=ze.burstGap,n.fire=!0,this.shotsRemaining===0&&(this.phase="idle",this.cooldown=ze.cooldownMin+this.random()*(ze.cooldownMax-ze.cooldownMin),n.released=!0))),n}}const Zv=new S(0,1,0),Qh=new le,tu=new Ai,eu=new S;class Kv{max=ze.maxBolts;slots=Array.from({length:ze.maxBolts},()=>({on:!1,life:0,pos:new S,dir:new S,len:0}));mesh;from=new S;near=new S;contact=new S;ray=new Ji;bounds=new Bn;chest=new S;foot=new S;shots=0;hits=0;blocks=0;constructor(t){const e=new Se(.016,.03,1,6,1),n=new oe({color:16741898,toneMapped:!1});this.mesh=new Qf(e,n,ze.maxBolts),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.count=0,t.add(this.mesh)}fire(t,e){const n=this.slots.find(s=>!s.on);return n?(n.on=!0,n.life=ze.boltLife,n.pos.copy(t),n.dir.copy(e).normalize(),n.len=0,this.shots++,!0):!1}update(t,e,n,{onHit:s,onImpact:r}){const o=ze.boltSpeed*t;let a=0;for(const l of this.slots){if(!l.on)continue;l.life-=t,this.from.copy(l.pos),this.ray.set(this.from,l.dir);let c=o;for(const d of n){if(d.height<=.4)continue;this.bounds.min.set(d.minX,0,d.minZ),this.bounds.max.set(d.maxX,d.height,d.maxZ);const f=this.ray.intersectBox(this.bounds,this.contact);if(!f)continue;const g=this.from.distanceTo(f);g>=0&&g<c&&(c=g)}this.foot.set(e.x,.35,e.z),this.chest.set(e.x,Math.max(.95,e.y-.18),e.z);const u=this.ray.distanceSqToSegment(this.foot,this.chest,this.near),h=this.near.clone().sub(this.from).dot(l.dir);if(u<.36*.36&&h>=0&&h<=c&&h<=o){l.on=!1,this.hits++,s();continue}if(c<o){l.on=!1,this.blocks++,r(this.from.clone().addScaledVector(l.dir,c));continue}if(l.life<=0){l.on=!1;continue}l.pos.addScaledVector(l.dir,o),l.len=Math.min(1.5,l.len+o),tu.setFromUnitVectors(Zv,l.dir),eu.set(1,Math.max(.2,l.len),1),Qh.compose(l.pos,tu,eu),this.mesh.setMatrixAt(a++,Qh)}(a!==this.mesh.count||a>0)&&(this.mesh.count=a,this.mesh.instanceMatrix.needsUpdate=!0)}reset(){for(const t of this.slots)t.on=!1;this.mesh.count=0,this.mesh.instanceMatrix.needsUpdate=!0,this.shots=0,this.hits=0,this.blocks=0}get active(){return this.slots.filter(t=>t.on).length}}const mn={maxSpeed:8,patrolSpeed:3,accel:11,altMin:4,altMax:8,rangeMin:12,rangeMax:25};class jv{velocity=new S;avoidance=new S;force=new S;target=new S;altitude;orbitRadius;orbitAngle;orbitDir;flipTime;yaw=0;pitch=0;roll=0;random;constructor(t=Math.random){this.random=t,this.altitude=mn.altMin+.8+t()*(mn.altMax-mn.altMin-1.6),this.orbitRadius=mn.rangeMin+2+t()*(mn.rangeMax-mn.rangeMin-5),this.orbitAngle=t()*2*Math.PI,this.orbitDir=t()<.5?-1:1,this.flipTime=3+t()*4}reset(t=0){this.velocity.set(0,0,0),this.avoidance.set(0,0,0),this.yaw=t,this.pitch=0,this.roll=0}step(t,e,n,s,r,o,a){const l=r?mn.maxSpeed:mn.patrolSpeed;r?(this.flipTime-=t,this.flipTime<=0&&(this.flipTime=3+this.random()*5,this.random()<.6&&(this.orbitDir=-this.orbitDir),this.orbitRadius=he.clamp(this.orbitRadius+(this.random()-.5)*6,mn.rangeMin+1,mn.rangeMax-2)),this.orbitAngle+=this.orbitDir*(o?.9:3.6)/this.orbitRadius*t,this.target.set(s.x+Math.cos(this.orbitAngle)*this.orbitRadius,this.altitude,s.z+Math.sin(this.orbitAngle)*this.orbitRadius)):(this.orbitAngle+=this.orbitDir*.28*t,this.target.set(n.x+Math.cos(this.orbitAngle)*5,this.altitude,n.z+Math.sin(this.orbitAngle)*5)),this.force.set((this.target.x-e.x)*2.2-this.velocity.x*2.4,(this.target.y-e.y)*5-this.velocity.y*3.6,(this.target.z-e.z)*2.2-this.velocity.z*2.4);const c=Math.hypot(this.velocity.x,this.velocity.z);if(c>.6){const _=this.velocity.x/c,m=this.velocity.z/c,p=2.2+c*.5;for(const w of a){if(e.y>w.height+.65)continue;const x=e.x+_*p,v=e.z+m*p;x<w.minX-.6||x>w.maxX+.6||v<w.minZ-.6||v>w.maxZ+.6||(this.avoidance.x-=_*17*t,this.avoidance.z-=m*17*t,this.avoidance.y+=8*t)}}this.force.add(this.avoidance),this.avoidance.multiplyScalar(Math.exp(-6*t)),this.force.length()>mn.accel&&this.force.setLength(mn.accel),this.velocity.addScaledVector(this.force,t),this.velocity.length()>l&&this.velocity.setLength(l);const u=e.clone().addScaledVector(this.velocity,t);for(const _ of a)if(!(u.y>_.height+.6)&&u.x>=_.minX-.6&&u.x<=_.maxX+.6&&u.z>=_.minZ-.6&&u.z<=_.maxZ+.6){u.x=e.x,u.z=e.z,this.velocity.x*=-.25,this.velocity.z*=-.25,this.velocity.y=Math.max(this.velocity.y,2);break}e.copy(u),e.y=Math.max(2.2,e.y);const h=r?Math.atan2(s.x-e.x,s.z-e.z):c>.4?Math.atan2(this.velocity.x,this.velocity.z):this.yaw,d=Math.atan2(Math.sin(h-this.yaw),Math.cos(h-this.yaw));this.yaw+=he.clamp(d,-3.2*t,3.2*t);const f=this.force.x*Math.sin(this.yaw)+this.force.z*Math.cos(this.yaw),g=this.force.x*Math.cos(this.yaw)-this.force.z*Math.sin(this.yaw);return this.pitch=he.damp(this.pitch,he.clamp(f*.04,-.42,.42),7,t),this.roll=he.damp(this.roll,he.clamp(-g*.04,-.42,.42),7,t),{speed:this.velocity.length(),yaw:this.yaw,pitch:this.pitch,roll:this.roll}}}function Jv(i){const t=document.createElement("canvas");t.width=256,t.height=96;const e=t.getContext("2d");e.fillStyle="rgba(25,31,32,.76)",e.font="700 60px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,45);let n=1119;for(let r=0;r<170;r++){n=Math.imul(n,1664525)+1013904223>>>0;const o=n/4294967296*256;n=Math.imul(n,1664525)+1013904223>>>0;const a=n/4294967296*96;e.clearRect(o,a,1.1+(n>>>14)%4,1.4)}const s=new Ye(t);return s.colorSpace=xe,new oe({map:s,transparent:!0,depthWrite:!1,side:Fe,polygonOffset:!0,polygonOffsetFactor:-1})}const No=document.createElement("canvas");No.width=No.height=128;const oc=No.getContext("2d"),Dr=oc.createRadialGradient(64,64,3,64,64,63);Dr.addColorStop(0,"rgba(255,235,178,1)");Dr.addColorStop(.14,"rgba(255,142,67,.85)");Dr.addColorStop(.4,"rgba(252,84,31,.3)");Dr.addColorStop(1,"rgba(252,84,31,0)");oc.fillStyle=Dr;oc.fillRect(0,0,128,128);const Qv=new Ye(No);let tx=0;function id(i,t){for(const n of[...i.children])n.type==="Group"&&id(n,t);const e=new Map;for(const n of i.children){if(!(n instanceof lt)||t.has(n)||Array.isArray(n.material))continue;const s=e.get(n.material)||[];s.push(n),e.set(n.material,s)}for(const[n,s]of e){if(s.length<2)continue;const r=s.map(l=>{l.updateMatrix();const c=l.geometry.clone();return c.applyMatrix4(l.matrix),c}),o=ic(r,!1);for(const l of r)l.dispose();if(!o)continue;const a=new lt(o,n);a.castShadow=!0,a.receiveShadow=!0;for(const l of s)i.remove(l),l.geometry.dispose();i.add(a)}}class ex{kind;root=new jt;body=new jt;head=new jt;turret=new jt;gun=new jt;legs=[];knees=[];feet=[];rotors=[];footWorld=[];stepStart=[];stepEnd=[];lastRoot=new S;stepPair=-1;stepT=0;lastPair=1;bodyBounce=.72;bodyBounceVelocity=0;headYaw=0;headPitch=.05;antenna;leanPitch=0;leanRoll=0;recoilPitch=0;recoilPitchVelocity=0;turretPitch=0;hitShift=0;hitShiftVelocity=0;hitRoll=0;hitRollVelocity=0;hound=new bv;gullCombat=new $v;gullFlight=new jv;houndDrive=new Ev;houndPush=new S;tacticalGoal=new S;tacticalGoalUntil=0;houndTurretYaw=0;houndGunPitch=0;houndHeadYaw=0;houndHeadPitch=.05;houndWarning=0;warningLens;warningHalo;deathElapsed=0;deathVelocity=0;deathImpact=!1;deathPitch=0;deathRoll=0;deathSink=0;deathOrder=0;wreckFrozen=!1;wreckBatchCount=0;deathPitchVelocity=0;deathRollVelocity=0;deathFootSlides=[];deathSmokeClock=0;health;maxHealth;alive=!0;phase=Math.random()*Math.PI*2;targetable=[];shootTimer=1+Math.random()*2;speed=1.1+Math.random()*.4;lastHitAt=0;hitFlash=0;isTarget=!0;home=new S;route=[];routeTimer=0;lastPlayerPosition=new S;houndLastKnown=new S;houndSeeTime=0;houndNoSeeTime=0;houndSenseTimer=0;houndHasLos=!1;houndModeTime=0;houndSearchScan=0;heading=0;mode="patrol";alerted=!1;originalMaterials=new Map;constructor(t,e,n){this.kind=t,this.health=t==="gull"?ze.hp:me.hp,this.maxHealth=this.health,this.speed=t==="gull"?mn.maxSpeed:me.patrolSpeed,this.root.position.set(e,t==="gull"?this.gullFlight.altitude-2.95:0,n),this.home.set(e,0,n),this.root.add(this.body),this.routeTimer=Math.random(),t==="hound"?(this.buildHound(),this.body.position.y=.72,this.houndDrive.reset(this.root.rotation.y)):this.rotors=qv(this.body),t==="hound"&&id(this.body,new Set(this.feet)),this.kind==="hound"&&this.head.traverse(s=>{s instanceof lt&&(s.userData.enemyPart="head")}),this.body.traverse(s=>{s instanceof lt&&(s.userData.enemy=this,this.targetable.push(s),this.originalMaterials.set(s,s.material))}),this.lastRoot.copy(this.root.position)}buildHound(){const t=Ov(),e=this.body;this.root.remove(e),this.root.add(t.bones.root),this.body=t.bones.body,this.head=t.bones.head,this.turret=t.bones.turret,this.gun=t.bones.gun,this.antenna=t.bones.antenna,this.legs=["FL","FR","RL","RR"].map(o=>t.bones["abd"+o]),this.knees=["FL","FR","RL","RR"].map(o=>t.bones["shin"+o]),this.feet=t.feet,t.lens&&(t.lens.material=t.lens.material.clone(),this.warningLens=t.lens);const n=new lr(new Zl({map:Qv,color:16753758,transparent:!0,blending:Ki,depthWrite:!1,opacity:0}));n.position.set(0,.045,.47),n.scale.set(.5,.5,1),n.visible=!1,this.gun.add(n),this.warningHalo=n;const s=Jv("H-"+String(Math.abs(Math.round(this.root.position.x*11+this.root.position.z*13))%90+3).padStart(2,"0"));for(const o of[-1,1]){const a=new lt(new Ce(.2,.085),s);a.rotation.y=o*Math.PI/2,a.position.set(o*.184,.025,-.085),this.body.add(a)}const r=[.37,.37,-.42,-.42];for(let o=0;o<4;o++){const a=o%2===0?1:-1;this.footWorld.push(this.root.position.clone().add(new S(a*.275,0,r[o])))}this.stepStart=this.footWorld.map(o=>o.clone()),this.stepEnd=this.footWorld.map(o=>o.clone())}solveHoundLegs(){const t=this.root,e=this.body,n=t.rotation.y,s=Math.cos(n),r=Math.sin(n);for(let o=0;o<4;o++){const a=o%2===0?1:-1,l=o<2?1:-1,c=this.legs[o],u=this.knees[o],h=this.footWorld[o],d=h.x-t.position.x,f=h.z-t.position.z,g=d*s-f*r,_=d*r+f*s,m=e.rotation.x,p=e.rotation.z,w=h.y+.046*.6-t.position.y-e.position.y,x=w*Math.cos(m)+_*Math.sin(m),v=-w*Math.sin(m)+_*Math.cos(m),C=g-this.hitShift,R=C*Math.cos(p)+x*Math.sin(p)-a*.165,I=-C*Math.sin(p)+x*Math.cos(p)+.01,D=v-l*.4,b=Math.sqrt(Math.max(1e-6,R*R+I*I-.075*.075));let M=Math.atan2(I,R)-Math.atan2(-b,a*.075);M>Math.PI&&(M-=2*Math.PI),M<-Math.PI&&(M+=2*Math.PI);const A=Math.max(Math.abs(.4-(.42-.046*.6))+.03,Math.min((.4+.42-.046*.6)*.995,Math.hypot(b,D))),U=Math.atan2(D,b),V=he.clamp((.4*.4+A*A-(.42-.046*.6)**2)/(2*.4*A),-1,1),Y=he.clamp((.4*.4+(.42-.046*.6)**2-A*A)/(2*.4*(.42-.046*.6)),-1,1);c.rotation.z=M;const W=c.children.find(X=>X.type==="Group");W&&(W.rotation.x=Math.acos(V)-U),u.rotation.x=-(Math.PI-Math.acos(Y))}}poseHound(t,e,n){const s=this.body,r=this.root,o=r.position.clone().sub(this.lastRoot);o.y=0;const a=o.length(),l=a>3,c=l?0:a/Math.max(n,.008),u=Math.min(c,5),h=he.clamp(.27-u*.042,.075,.27),d=r.rotation.y,f=M=>M%2===0?1:-1,g=M=>M<2?1:-1,_=M=>new S(f(M)*.275,0,g(M)*(M<2?.37:.42)).applyAxisAngle(new S(0,1,0),d);if(l||this.footWorld.length!==4){for(let M=0;M<4;M++)this.footWorld[M].copy(r.position).add(_(M));this.stepPair=-1,this.stepT=0}if(this.stepPair<0){let M=-1,A=0;for(let U=0;U<2;U++){let V=0;for(const Y of U===0?[0,3]:[1,2]){const W=r.position.clone().add(_(Y));V=Math.max(V,Math.hypot(W.x-this.footWorld[Y].x,W.z-this.footWorld[Y].z))}U===this.lastPair&&(V*=.8),V>A&&(A=V,M=U)}if(M>=0&&A>(e?.09:.035)){this.stepPair=M,this.stepT=0;for(const U of M===0?[0,3]:[1,2]){this.stepStart[U].copy(this.footWorld[U]);const V=u>.15?o.normalize().multiplyScalar(u*h*1.4):new S;this.stepEnd[U].copy(r.position).add(_(U)).add(V)}}}if(this.stepPair>=0){this.stepT=Math.min(1,this.stepT+n/h);const M=this.stepT*this.stepT*(3-2*this.stepT);for(const A of this.stepPair===0?[0,3]:[1,2])this.footWorld[A].lerpVectors(this.stepStart[A],this.stepEnd[A],M),this.footWorld[A].y=Math.sin(Math.PI*this.stepT)*(.065+Math.min(.09,u*.02));this.stepT>=1&&(this.lastPair=this.stepPair,this.stepPair=-1)}this.lastRoot.copy(r.position);const m=.72-(this.stepPair>=0?.025:0),p=Math.min(.05,n);this.bodyBounceVelocity+=(m-this.bodyBounce)*80*p,this.bodyBounceVelocity*=Math.exp(-12*p),this.bodyBounce+=this.bodyBounceVelocity*p,s.position.y=he.clamp(this.bodyBounce,.67,.76);let w=0,x=0,v=0,C=0;for(let M=0;M<4;M++){const A=this.footWorld[M];M<2?w+=A.y:x+=A.y,M%2===0?C+=A.y:v+=A.y}const R=Math.atan2(C-v,.55)*.33,I=Math.atan2(x-w,.8)*.33;this.leanPitch=he.damp(this.leanPitch,I,8,n),this.recoilPitchVelocity+=(-130*this.recoilPitch-15*this.recoilPitchVelocity)*n,this.recoilPitchVelocity=he.clamp(this.recoilPitchVelocity,-6,6),this.recoilPitch+=this.recoilPitchVelocity*n,s.rotation.x=this.leanPitch+this.recoilPitch,this.leanRoll=he.damp(this.leanRoll,R,8,n),this.hitShiftVelocity+=(-110*this.hitShift-13*this.hitShiftVelocity)*n,this.hitShift+=this.hitShiftVelocity*n,this.hitRollVelocity+=(-130*this.hitRoll-15*this.hitRollVelocity)*n,this.hitRoll+=this.hitRollVelocity*n,s.position.x=this.hitShift,s.rotation.z=this.leanRoll+this.hitRoll,this.solveHoundLegs();let b=(this.alerted?this.houndTurretYaw:0)-this.turret.rotation.y;if(b=Math.atan2(Math.sin(b),Math.cos(b)),this.turret.rotation.y+=he.clamp(b,-4.5*n,4.5*n),this.turretPitch=he.damp(this.turretPitch,this.alerted?this.houndGunPitch:0,10,n),this.gun.rotation.x=this.turretPitch-s.rotation.x*.5,this.headYaw=he.damp(this.headYaw,this.alerted?this.houndHeadYaw:Math.sin(t*.7+this.phase)*.5,7,n),this.headPitch=he.damp(this.headPitch,this.alerted?this.houndHeadPitch:.05,7,n),this.head.rotation.set(this.headPitch,this.headYaw,0),this.warningHalo){const M=this.hound.phase==="tele"||this.hound.phase==="wind",A=this.hound.phase==="burst"||this.hound.phase==="lunge",U=.55+.45*Math.sin(t*(M?28:43))**2;this.warningHalo.visible=M||A,this.warningHalo.material.opacity=(M?.85:.55)*U,this.warningHalo.scale.setScalar(M?.6+.15*U:.42)}if(this.warningLens){const M=this.houndWarning>0,A=this.warningLens.material;A.color.setHex(M?16742466:16772043),A.opacity=M?.55+.45*Math.sin(t*39)**2:.9,this.warningLens.scale.x=M?1.22:1}this.antenna&&(this.antenna.rotation.x=he.damp(this.antenna.rotation.x,Math.sin(t*2+this.phase)*.05,4,n))}onHoundShot(){this.kind==="hound"&&(this.recoilPitchVelocity+=1.1,this.bodyBounceVelocity-=.25)}houndPose(){return{headYaw:this.head.rotation.y,headPitch:this.head.rotation.x,turretYaw:this.turret.rotation.y,gunPitch:this.gun.rotation.x,bodyPitch:this.body.rotation.x,bodyRoll:this.body.rotation.z,bodyShift:this.body.position.x,recoilPitch:this.recoilPitch,turretTarget:this.houndTurretYaw,headTarget:this.houndHeadYaw}}freezeHoundWreck(){if(this.wreckFrozen||this.kind!=="hound")return;this.root.updateMatrixWorld(!0);const t=new le().copy(this.root.matrixWorld).invert(),e=new Map,n=[];this.body.traverse(o=>{if(!(o instanceof lt)||(n.push(o),Array.isArray(o.material)))return;const a=e.get(o.material)||[];a.push(o),e.set(o.material,a)});let s=0;for(const[o,a]of e){const l=a.map(u=>{const h=u.geometry.clone();if(h.applyMatrix4(new le().multiplyMatrices(t,u.matrixWorld)),!h.index){const d=h.getAttribute("position").count;h.setIndex(Array.from({length:d},(f,g)=>g))}return h}),c=l.length>1?ic(l,!1):l[0];if(c){const u=new lt(c,o);if(u.castShadow=a.some(h=>h.castShadow),u.receiveShadow=a.some(h=>h.receiveShadow),this.root.add(u),s++,c!==l[0])for(const h of l)h.dispose()}else for(let u=0;u<l.length;u++){const h=new lt(l[u],o);h.castShadow=a[u].castShadow,h.receiveShadow=a[u].receiveShadow,this.root.add(h),s++}}this.body.clear();const r=new Set;for(const o of n)r.add(o.geometry);for(const o of r)o.dispose();this.targetable.length=0,this.originalMaterials.clear(),this.warningHalo=void 0,this.warningLens=void 0,this.wreckFrozen=!0,this.wreckBatchCount=s}disposeWreck(){if(this.wreckFrozen)for(const t of this.root.children)t instanceof lt&&t.geometry.dispose()}animateDeath(t){if(this.kind!=="hound")return{impact:!1,smoke:!1,spark:!1,retire:!1};if(this.deathSink>0)return this.deathSink+=t,this.root.position.y-=.22*t,{impact:!1,smoke:!1,spark:!1,retire:this.deathSink>3.2};this.deathElapsed+=t,this.deathElapsed>=2.2&&!this.wreckFrozen&&this.freezeHoundWreck();const e=this.body.position.y;if(this.deathVelocity-=9.8*t*(this.deathElapsed<.12?.3:1),this.deathElapsed<2.2){this.body.position.y=Math.max(.215,e+this.deathVelocity*t),this.body.position.y<=.215&&this.deathVelocity<0&&(this.deathVelocity=-this.deathVelocity*.22);const r=1-Math.exp(-3.2*t);for(let o=0;o<4;o++)this.footWorld[o].addScaledVector(this.deathFootSlides[o],r),this.deathFootSlides[o].multiplyScalar(1-r);this.deathPitchVelocity+=(60*(this.deathPitch-this.body.rotation.x)-9*this.deathPitchVelocity)*t,this.deathRollVelocity+=(60*(this.deathRoll-this.body.rotation.z)-9*this.deathRollVelocity)*t,this.body.rotation.x+=this.deathPitchVelocity*t,this.body.rotation.z+=this.deathRollVelocity*t,this.body.position.x=he.damp(this.body.position.x,0,8,t),this.hitShift=this.body.position.x,this.head.rotation.x=he.damp(this.head.rotation.x,.55,5,t),this.head.rotation.y=he.damp(this.head.rotation.y,this.deathRoll,3,t),this.gun.rotation.x=he.damp(this.gun.rotation.x,.3-this.body.rotation.x*.5,4,t),this.solveHoundLegs()}const n=!this.deathImpact&&e>.22&&this.body.position.y<=.22;if(n&&(this.deathImpact=!0),this.warningLens){const r=this.deathElapsed<1.2?Math.sin(this.deathElapsed*60)>.2?1-this.deathElapsed/1.2:.05:.02,o=this.warningLens.material;o.color.setRGB(6*r+.05,.6*r+.01,.2*r),o.opacity=this.deathElapsed<1.2?1:.14}this.deathSmokeClock-=t;const s=this.deathElapsed<6.5&&this.deathSmokeClock<=0;return s&&(this.deathSmokeClock=this.deathElapsed<2?.09:.2),{impact:n,smoke:s,spark:n||s&&this.deathElapsed<4&&Math.random()<.55,retire:!1}}animate(t,e,n=.016){if(this.kind==="hound")this.poseHound(t,e,n);else{this.body.position.y=2.95+Math.sin(t*2.1+this.phase)*.045+Math.sin(t*3.7+this.phase*1.7)*.018,this.body.rotation.set(this.gullFlight.pitch,0,this.gullFlight.roll);for(let s=0;s<this.rotors.length;s++)this.rotors[s].rotation.y=t*(s%2===0?46:-46)}if(this.hitFlash>0&&(this.hitFlash=Math.max(0,this.hitFlash-n),this.hitFlash<=0))for(const[s,r]of this.originalMaterials)s.material=r}damage(t,e,n="body"){if(this.alive){if(this.health-=t,this.hitFlash=.16,this.kind==="hound"&&e){const s=this.root.rotation.y,r=Math.cos(s),o=Math.sin(s),a=Math.min(1.6,t/28),l=e.x*o+e.z*r,c=e.x*r-e.z*o;this.hitShiftVelocity+=c*1.4*a,this.hitRollVelocity-=c*3.2*a,this.recoilPitchVelocity+=l*2.4*a*(n==="weak"?1.6:1),this.bodyBounceVelocity-=.5*a}if(this.kind==="gull")for(const s of this.targetable)s.material=Yv;if(this.health<=0){this.alive=!1,this.hitFlash=0;for(const[s,r]of this.originalMaterials)s.material=r;this.root.userData.dying=0,this.warningHalo&&(this.warningHalo.visible=!1),this.deathElapsed=0,this.deathVelocity=0,this.deathImpact=!1,this.kind==="hound"&&(this.wreckFrozen=!1,this.wreckBatchCount=0,this.deathSink=0,this.deathOrder=++tx),this.deathPitch=(Math.random()-.5)*.25,this.deathRoll=(Math.random()<.5?-1:1)*(.25+Math.random()*.3),this.deathPitchVelocity=(Math.random()-.5)*2,this.deathRollVelocity=this.deathRoll*3,this.stepPair=-1,this.stepT=0,this.deathFootSlides=this.footWorld.map((s,r)=>{s.y=this.root.position.y;const o=r%2===0?1:-1,a=r<2?1:-1;return new S(o*(.16+Math.random()*.2),0,a*(.05+Math.random()*.22)+(Math.random()-.5)*.1).applyAxisAngle(new S(0,1,0),this.root.rotation.y)})}}}}function nx(i){const{scene:t,mission:e,player:n,enemies:s,sound:r,getTime:o,getYaw:a,isHeld:l,radio:c,waveText:u,onVictory:h}=i;let d=-999,f=0,g=0;const _=[],m=[[["gull",2,21.5],["hound",-19,-1.4],["gull",10,23.5]],[["gull",-6,15],["hound",9,7],["gull",14,17],["hound",-12,-7]],[["gull",-10,-8],["gull",7,-8],["gull",15,-19],["hound",-8,-12],["hound",6,-25]],[["gull",19,-22],["gull",22,15],["gull",25,-6],["gull",13,24],["hound",16,-17],["hound",24,8],["hound",19,27]]];function p(R){const I=s.filter(D=>D.alive).length;for(const[D,b,M]of R.slice(0,Math.max(0,9-I))){const A=new ex(D,b,M);A.shootTimer=1.4+Math.random()*2,t.add(A.root),s.push(A)}}function w(){p(m[0])}function x(R){n.relays++,r.wave(),u(`UPLINK ${R} — OFFLINE`),n.relays===1?c("ONE RELAY DARK. IT FELT THAT — MACHINES INBOUND.",5):n.relays===2?c("TWO DARK. IT IS THROWING EVERYTHING IT HAS LEFT AT YOU.",5):c("ALL THREE DARK. THE BOAT IS HOLDING AT THE EAST QUAY LADDER. RUN.",7),m[Math.min(n.relays,3)].forEach(([D,b,M],A)=>_.push({kind:D,x:b,z:M,at:o()+A*.85})),e.allCut&&(f=o()+12,g=5),n.reserve+=40,n.hp=Math.min(100,n.hp+12)}function v(R){e.update(o());for(let M=_.length-1;M>=0;M--){const A=_[M];o()<A.at||s.filter(U=>U.alive).length>=9||(p([[A.kind,A.x,A.z]]),_.splice(M,1))}if(e.allCut&&o()>=f&&g>0&&s.filter(M=>M.alive).length<4){const M=Math.random()<.6?"gull":"hound";p([[M,Math.min(26,n.x+12),n.z+(Math.random()>.5?7:-7)]]),g--,f=o()+7}Math.hypot(n.x-e.boatTarget.x,n.z-e.boatTarget.z)<4&&!e.allCut&&o()-d>8&&(d=o(),c("RELAYS STILL LIVE — THE BOAT WILL NOT WAIT UNDER FIRE.",3.5));const D=l(),b=e.interact(new S(n.x,0,n.z),a(),D,R);b.cut&&x(b.cut.id),b.extract&&(c("BREACHER IS ABOARD. SALTLINE IS DARK. GOOD WORK.",5),h())}function C(){d=-999,f=0,g=0,_.length=0}return{reset:C,spawnPatrol:w,onRelayCut:x,update:v}}function ix(i,t,e){const l=A=>he.clamp(Math.round((A- -43)/1),0,75),c=A=>he.clamp(Math.round((A- -33)/1),0,65),u=(A,U)=>A+U*76,h=l(i.x),d=c(i.z),f=l(t.x),g=c(t.z),_=new Uint8Array(5016);for(let A=0;A<66;A++)for(let U=0;U<76;U++){const V=-43+U*1,Y=-33+A*1,W=.46;_[u(U,A)]=e.some(X=>X.height>1&&V+W>X.minX&&V-W<X.maxX&&Y+W>X.minZ&&Y-W<X.maxZ)?0:1}const m=new Int32Array(_.length);m.fill(-1);const p=new Int32Array(_.length);let w=0,x=0;const v=u(h,d),C=u(f,g);p[x++]=v,m[v]=v;let R=v,I=Math.abs(h-f)+Math.abs(d-g);for(;w<x;){const A=p[w++],U=A%76,V=Math.floor(A/76),Y=Math.abs(U-f)+Math.abs(V-g);if(Y<I&&(R=A,I=Y),A===C){R=A;break}for(const[W,X]of[[0,-1],[1,0],[-1,0],[0,1]]){const nt=U+W,$=V+X;if(nt<0||nt>=76||$<0||$>=66)continue;const yt=u(nt,$);m[yt]!==-1||!_[yt]||(m[yt]=A,p[x++]=yt)}}if(R===v)return[t.clone()];const D=[];let b=R;for(;b!==v&&D.length<250;){const A=b%76,U=Math.floor(b/76);if(D.push(new S(-43+A*1,0,-33+U*1)),b=m[b],b<0)return[t.clone()]}D.reverse();const M=[];for(let A=0;A<D.length;A++){if(A+1<D.length){const U=A===0?i:D[A-1],V=D[A],Y=D[A+1],W=V.x-U.x,X=V.z-U.z,nt=Y.x-V.x,$=Y.z-V.z;if(Math.abs(W*$-X*nt)<.001&&W*nt+X*$>=0)continue}M.push(D[A])}return R===C&&M.push(t.clone()),M}function sx({scene:i,world:t,sound:e,player:n,enemies:s,getTime:r,isPlaying:o,radio:a,hurtPlayer:l,tracer:c,sparks:u,smoke:h}){let d=!1,f=-99,g=0,_=0;const m=new Kv(i),p=new Set;let w=-99,x=null;const v={hound:-99,gull:-99};let C=0,R=0;const I=new S(n.x,0,n.z),D=new S;function b(P){p.delete(P)}function M(P){if(p.has(P))return!0;const N=s.filter(z=>z.alive).length>5?3:2,O=r()-w,G=P.kind==="gull"?"hound":"gull";return p.size>=N||O<1.25||x===P.kind&&r()-v[G]<.5&&O<2.75?(v[P.kind]=r(),!1):!0}function A(P){return M(P)?(p.has(P)||(p.add(P),w=r(),x=P.kind),!0):(v[P.kind]=r(),!1)}function U(P,N=18){for(const O of s)O===P||O.kind!=="hound"||!O.alive||O.mode==="pursue"||O.root.position.distanceToSquared(P.root.position)>N*N||(O.houndLastKnown.set(n.x,0,n.z),O.mode="investigate",O.alerted=!1,O.houndModeTime=9+Math.random()*4,O.routeTimer=0,O.houndSenseTimer=0,O.houndSearchScan=0)}function V(P){P.kind!=="hound"||!P.alive||(P.mode!=="pursue"&&(P.mode="investigate",P.alerted=!1,P.houndModeTime=10,P.houndLastKnown.set(n.x,0,n.z),P.houndSeeTime=1,P.houndSenseTimer=0,P.routeTimer=0,P.houndSearchScan=0),U(P,20))}function Y(){for(const P of s)P.kind!=="hound"||!P.alive||P.mode==="pursue"||Math.hypot(P.root.position.x-n.x,P.root.position.z-n.z)>45||(P.mode="investigate",P.alerted=!1,P.houndModeTime=10,P.houndLastKnown.set(n.x,0,n.z),P.houndSenseTimer=0,P.routeTimer=0,P.houndSearchScan=0)}function W(P,N,O,G,z){if(P.houndSenseTimer-=N,P.houndSenseTimer<=0){P.houndSenseTimer=.11+Math.random()*.08;const q=(O*Math.sin(P.root.rotation.y)+G*Math.cos(P.root.rotation.y))/Math.max(.001,z),et=P.mode==="pursue"||z<3.5||q>Math.cos(100*Math.PI/180);P.houndHasLos=z<45&&et&&X(P.head.getWorldPosition(new S),new S(n.x,n.y,n.z))}return P.houndHasLos?(P.houndSeeTime+=N,P.houndNoSeeTime=0,P.houndLastKnown.set(n.x,0,n.z)):(P.houndNoSeeTime+=N,P.houndSeeTime=Math.max(0,P.houndSeeTime-N*.6)),P.mode==="pursue"?P.houndNoSeeTime>4&&(P.mode="search",P.houndModeTime=8+Math.random()*3,P.routeTimer=0,P.houndSearchScan=0):P.houndHasLos&&P.houndSeeTime>(P.mode==="patrol"?.55:.55*.45)?(P.mode="pursue",P.houndNoSeeTime=0,P.routeTimer=0,P.houndSearchScan=0,U(P),d||(d=!0,a("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5))):P.mode!=="patrol"&&(P.houndModeTime-=N,P.houndModeTime<=0&&(P.mode="patrol",P.home.copy(P.root.position),P.routeTimer=0)),P.alerted=P.mode==="pursue",P.houndHasLos}function X(P,N){const O=N.clone().sub(P),G=O.length();if(G<.001)return!0;const z=new Ji(P,O.divideScalar(G));for(const q of t.obstacles){if(q.height<=.4)continue;const et=z.intersectBox(new Bn(new S(q.minX,.01,q.minZ),new S(q.maxX,q.height,q.maxZ)),new S);if(et&&et.distanceTo(P)>.08&&et.distanceTo(P)<G-.18)return!1}return!0}function nt(P,N=!1){const O=P.houndHasLos?new S(n.x,0,n.z):P.houndLastKnown.clone();if(!N&&P.tacticalGoalUntil>r()&&P.lastPlayerPosition.distanceToSquared(O)<49)return P.tacticalGoal.clone();const G=Math.atan2(P.root.position.x-O.x,P.root.position.z-O.z),z=[[0,12],[.55,12],[-.55,12],[1.1,14],[-1.1,14],[.35,9],[-.35,9],[1.6,16],[-1.6,16],[2.3,10],[-2.3,10]];let q=P.root.position.clone(),et=1/0;const Rt=O.clone().add(new S(0,1.2,0));for(const[vt,Ht]of z){const re=G+vt,L=new S(O.x+Math.sin(re)*Ht,0,O.z+Math.cos(re)*Ht);if(_r(t.obstacles,L.x,L.z,.6))continue;const rt=X(L.clone().add(new S(0,.95,0)),Rt),st=s.filter(pt=>pt!==P&&pt.alive&&pt.kind==="hound").reduce((pt,ot)=>pt+Math.max(0,3.2-ot.root.position.distanceTo(L))*4,0),it=N&&P.tacticalGoalUntil>0?Math.max(0,4-L.distanceTo(P.tacticalGoal))*5:0,tt=L.distanceTo(P.root.position)*.9+Math.abs(vt)*1.2+(rt?0:22)+st+it;tt<et&&(et=tt,q.copy(L))}if(et===1/0){const vt=P.root.position.clone().sub(O);vt.y=0,vt.lengthSq()<.01&&vt.set(0,0,1),q.copy(O).addScaledVector(vt.normalize(),12)}return P.tacticalGoal.copy(q),P.tacticalGoalUntil=r()+10,P.lastPlayerPosition.copy(O),P.routeTimer=0,P.route=[],q}function $(P){P.root.updateMatrixWorld(!0);const N=P.gun.localToWorld(new S(0,0,.43)),G=new S(n.x,n.y-.65,n.z).clone().sub(N),z=G.length(),q=.045+Math.min(.075,z*.0017),et=G.normalize().add(new S((Math.random()-.5)*2*q,(Math.random()-.5)*2*q,(Math.random()-.5)*2*q)).normalize(),Rt=new Ji(N,et);let vt=me.fireRange;for(const L of t.obstacles){if(L.height<=.4)continue;const rt=Rt.intersectBox(new Bn(new S(L.minX,0,L.minZ),new S(L.maxX,L.height,L.maxZ)),new S);if(rt){const st=rt.distanceTo(N);st>.08&&st<vt&&(vt=st)}}const Ht=N.clone().addScaledVector(et,vt);e.enemyShot(),c(N,Ht,!1),g++,P.onHoundShot(),Rt.distanceSqToSegment(new S(n.x,.35,n.z),new S(n.x,n.y,n.z))<.36*.36&&vt>z-.8&&l(me.shotDamage,.075)}function yt(P,N,O,G,z){const q=W(P,N,O,G,z),et=P.hound,Rt=Math.atan2(O,G),vt=Math.atan2(Math.sin(Rt-P.root.rotation.y),Math.cos(Rt-P.root.rotation.y)),Ht=Math.atan2(Math.sin(vt-P.turret.rotation.y),Math.cos(vt-P.turret.rotation.y)),L=P.alerted&&q&&["aim","cool"].includes(et.phase)&&et.cooldown<=0&&Math.abs(Ht)<.14&&M(P);P.alerted&&P.tacticalGoalUntil<=0&&nt(P,!0);const rt=P.alerted&&q&&P.lastPlayerPosition.distanceToSquared(new S(n.x,0,n.z))>49,st=P.tacticalGoalUntil>0&&P.root.position.distanceToSquared(P.tacticalGoal)<.45*.45,it=et.phase,tt=et.update(N,{alerted:P.alerted,distance:z,lineOfSight:q,aligned:Math.abs(Ht)<.14,canClaimVolley:L,reachedFiringPosition:st,timeWithoutSight:P.houndNoSeeTime,playerMovedFromPlan:rt});tt.reposition&&P.alerted&&nt(P,!0),tt.telegraph&&(et.phase==="tele"?(A(P),f=r()):b(P),e.houndWarning(et.phase==="wind")),["tele","burst","wind","lunge"].includes(et.phase)||b(P),tt.fire&&$(P),tt.melee&&(_++,l(me.lungeDamage,.075)),P.houndWarning=["tele","burst","wind","lunge"].includes(et.phase)?1:0;const pt=["aim","tele","burst","cool","wind","recover"].includes(et.phase);let ot;if(et.phase==="lunge")ot=new S(n.x,0,n.z);else if(P.mode==="patrol"){const Dt=r()*.35+P.phase;ot=P.home.clone().add(new S(Math.cos(Dt)*2,0,Math.sin(Dt)*2))}else P.mode==="search"||P.mode==="investigate"||!q?(ot=P.houndLastKnown.clone(),ot.distanceToSquared(P.root.position)<2.2*2.2&&(P.houndSearchScan+=N,ot.copy(P.root.position))):pt&&q&&z>=5&&z<30?ot=P.root.position.clone():ot=P.tacticalGoalUntil>0?P.tacticalGoal.clone():nt(P,!0);let Mt=ot.x-P.root.position.x,Wt=ot.z-P.root.position.z;if(et.phase!=="lunge"){for((P.routeTimer<=0||P.route.length===0||it!==et.phase)&&(P.route=ix(P.root.position,ot,t.obstacles),P.routeTimer=P.alerted?.65:1.5),P.routeTimer-=N;P.route.length&&P.route[0].distanceToSquared(P.root.position)<.4*.4;)P.route.shift();const Dt=P.route[0]||ot;Mt=Dt.x-P.root.position.x,Wt=Dt.z-P.root.position.z}const Xt=Math.hypot(Mt,Wt),T=Math.hypot(ot.x-P.root.position.x,ot.z-P.root.position.z),y=et.phase==="lunge",k=y||!pt&&T>.45,ht=(P.mode==="search"||P.mode==="investigate")&&P.houndSearchScan>0&&T<.45?P.heading+Math.sin(P.houndSearchScan*.8)*.9:P.alerted&&q&&(pt||y)?Rt:Xt>.025?Math.atan2(Mt,Wt):P.houndDrive.yaw,J=P.mode==="pursue"?me.runSpeed:P.mode==="patrol"?me.patrolSpeed:T<8?me.stalkSpeed:me.runSpeed;tt.beganLunge&&P.houndDrive.beginLunge(Rt),it==="lunge"&&et.phase==="recover"&&P.houndDrive.endLunge();const It=P.houndDrive.step(N,ht,k?J:0,k?T:0,y);P.root.rotation.y=It.yaw,P.heading=It.yaw;let xt=!1;if(It.speed*N>1e-5){for(const $t of s){if($t===P||$t.kind!=="hound"||!$t.alive)continue;const F=P.root.position.x-$t.root.position.x,mt=P.root.position.z-$t.root.position.z,St=Math.hypot(F,mt);if(St>=1.7||St<.001)continue;const Ut=(1.7-St)*2.2/St*N*6;P.houndPush.x+=F*Ut,P.houndPush.z+=mt*Ut}if(!y&&z<1.25&&z>.001){const $t=(1.25-z)*3/z*N*6;P.houndPush.x-=O*$t,P.houndPush.z-=G*$t}P.houndPush.multiplyScalar(Math.exp(-5*N));const Dt=(Math.sin(It.yaw)*It.speed+P.houndPush.x)*N,wt=(Math.cos(It.yaw)*It.speed+P.houndPush.z)*N;_r(t.obstacles,P.root.position.x+Dt,P.root.position.z,.44)||(P.root.position.x+=Dt,xt=!0),_r(t.obstacles,P.root.position.x,P.root.position.z+wt,.44)||(P.root.position.z+=wt,xt=!0),xt||(P.houndDrive.speed*=.6,P.houndDrive.yawRate+=(P.phase>Math.PI?1:-1)*4*N,P.routeTimer=0)}else P.houndPush.multiplyScalar(Math.exp(-5*N));const Ft=Math.cos(P.root.rotation.y),ft=Math.sin(P.root.rotation.y),At=Math.atan2(O*Ft-G*ft,O*ft+G*Ft),Yt=P.root.position.y+P.body.position.y;P.houndTurretYaw=At,P.houndGunPitch=he.clamp(Math.atan2(-(n.y-.72-(Yt+.25)),z),-.9,.35),P.houndHeadYaw=he.clamp(At,-1.2,1.2),P.houndHeadPitch=he.clamp(Math.atan2(-(n.y-.52-(Yt+.2)),z),-.6,.5),P.animate(r(),xt?1:0,N)}function Et(P){if(!o())return;D.set((n.x-I.x)/Math.max(P,.001),0,(n.z-I.z)/Math.max(P,.001)),D.length()>10&&D.setLength(10),I.set(n.x,0,n.z),m.update(P,n,t.obstacles,{onHit:()=>{l(ze.boltDamage,.01)},onImpact:O=>u(O,!1)});for(const O of p)O.alive||b(O);const N=s.filter(O=>O.kind==="hound"&&!O.alive&&O.deathSink===0).sort((O,G)=>O.deathOrder-G.deathOrder);for(const O of N.slice(0,Math.max(0,N.length-5)))O.deathSink=.001;for(let O=s.length-1;O>=0;O--){const G=s[O];if(!G.alive){G.root.userData.dying=G.root.userData.dying+P;const Wt=G.root.userData.dying;let Xt=!1;if(G.kind==="hound"){const T=G.animateDeath(P);Xt=T.retire;const y=G.root.position.clone().add(new S((Math.random()-.5)*.35,G.body.position.y+.25,(Math.random()-.5)*.35));T.impact&&(e.houndDown(),u(y,!0)),T.smoke&&h(y),T.spark&&!T.impact&&u(y,!0)}else G.body.rotation.z=Math.min(1,Wt*2)*1.25,G.root.position.y-=P*1.4;(Xt||G.kind==="gull"&&Wt>2.8)&&(G.disposeWreck(),i.remove(G.root),s.splice(O,1));continue}const z=n.x-G.root.position.x,q=n.z-G.root.position.z,et=Math.max(.001,Math.hypot(z,q));if(G.kind==="hound"){yt(G,P,z,q,et);continue}const Rt=(z*Math.sin(G.root.rotation.y)+q*Math.cos(G.root.rotation.y))/et,vt=et<45&&(G.alerted||et<3.5||Rt>Math.cos(100*Math.PI/180))&&X(G.body.getWorldPosition(new S),new S(n.x,n.y,n.z));vt?(G.houndSeeTime+=P,G.houndNoSeeTime=0):(G.houndSeeTime=Math.max(0,G.houndSeeTime-P*.6),G.houndNoSeeTime+=P),G.alerted&&G.houndNoSeeTime>4&&(G.alerted=!1,G.mode="search",b(G)),vt&&!G.alerted&&G.houndSeeTime>.4&&(G.alerted=!0,G.mode="pursue",G.routeTimer=0,d||(d=!0,a("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5)));const Ht=G.body.getWorldPosition(new S),re=G.gullFlight.step(P,Ht,G.home,n,G.alerted,G.gullCombat.phase!=="idle",t.obstacles);G.root.position.set(Ht.x,Ht.y-G.body.position.y,Ht.z),G.root.rotation.y=re.yaw,G.heading=re.yaw,G.animate(r(),re.speed>.15?1:0,P),G.body.updateWorldMatrix(!0,!1);const L=G.body.localToWorld(new S(0,-.12,.17)),rt=new S(n.x,n.y-.67,n.z),st=X(L,rt),it=Math.atan2(z,q),tt=Math.atan2(Math.sin(it-G.root.rotation.y),Math.cos(it-G.root.rotation.y)),ot=G.gullCombat.phase==="idle"&&G.gullCombat.cooldown<=0&&G.alerted&&st&&Math.abs(tt)<.35&&et<ze.fireRange&&M(G),Mt=G.gullCombat.update(P,{alerted:G.alerted,visible:st,aligned:Math.abs(tt)<.35,distance:et,canClaim:ot});if(Mt.telegraph&&(A(G),R++,e.houndWarning(!1)),Mt.fire){const Wt=L.distanceTo(rt)/ze.boltSpeed,Xt=rt.clone().addScaledVector(D,Wt*G.gullCombat.lead),T=Math.min(1,G.houndSeeTime*.1),y=ze.spreadFar+(ze.spreadNear-ze.spreadFar)*T,k=Xt.sub(L).normalize().add(new S((Math.random()-.5)*2*y,(Math.random()-.5)*2*y,(Math.random()-.5)*2*y)).normalize();m.fire(L,k)&&(C++,e.enemyShot(),c(L,L.clone().addScaledVector(k,.45),!1))}Mt.released&&b(G)}}function Lt(){d=!1,f=-99,g=0,_=0,C=0,R=0,p.clear(),w=-99,x=null,v.hound=-99,v.gull=-99,m.reset(),I.set(n.x,0,n.z),D.set(0,0,0)}return{reset:Lt,provokeHound:V,hearGunshot:Y,unobstructed:X,update:Et,get shotCount(){return g},get meleeCount(){return _},get lastVolley(){return f},get gullStats(){return{shots:C,telegraphs:R,bolts:m.active,hits:m.hits,blocks:m.blocks,attackers:p.size}}}}const Rs=new be({color:2569274,metalness:.72,roughness:.41}),Fo=new be({color:9398338,metalness:.62,roughness:.51}),Yi=new be({color:988957,metalness:.49,roughness:.47}),bn=new be({color:8294807,metalness:.7,roughness:.42}),Xi=new be({color:4017488,metalness:.78,roughness:.44}),qi=new oe({color:16761468}),rx=new oe({color:1582379}),sd=new be({color:2379106,metalness:.71,roughness:.16,transparent:!0,opacity:.81}),ox=new kn(1,1,1);function _e(i,t,e,n,s=ox){const r=new lt(s,n);return r.position.set(...t),r.scale.set(...e),r.castShadow=!0,i.add(r),r}function yi(i,t,e,n,s){const r=e.clone().sub(t),o=new lt(new Se(n,n,r.length(),8),s);return o.position.copy(t).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new S(0,1,0),r.normalize()),i.add(o),o}function rd(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#131e22",n.fillRect(0,0,e.width,e.height),n.strokeStyle="#7d9292",n.lineWidth=3,n.strokeRect(6,6,500,116),n.fillStyle="#e6e6dd",n.font="700 59px Impact,Arial Narrow,sans-serif",n.fillText(i,22,70),n.font="22px monospace",n.fillStyle="#d8a36b",n.fillText(t,22,106);const s=new Ye(e);return s.colorSpace=xe,new oe({map:s})}function Fa(i,t,e,n,s){const r=new jt;r.position.set(n,0,s),r.rotation.y=t==="B"?-.26:t==="C"?.23:-.15,i.add(r),_e(r,[0,.08,0],[1.28,.16,.92],Rs),_e(r,[0,.28,0],[1.04,.36,.71],Xi),_e(r,[0,.78,0],[.8,1.02,.58],Yi),_e(r,[0,1.3,0],[.95,.15,.72],Xi);for(const m of[-1,1]){_e(r,[m*.49,.73,0],[.12,1.27,.72],Xi);for(const p of[-.27,.27])_e(r,[m*.5,.2,p],[.16,.12,.12],Fo);for(let p=0;p<4;p++)_e(r,[m*.435,.6+p*.17,-.325],[.018,.08,.12],bn)}_e(r,[0,.83,.327],[.57,.69,.058],Rs),_e(r,[0,.97,.368],[.42,.29,.026],sd);for(let m=0;m<8;m++)_e(r,[-.19+m*.054,.96,.388],[.022,.17,.015],m%3?Yi:bn);for(let m=0;m<3;m++)_e(r,[0,.47+m*.07,.36],[.29,.017,.027],Fo),_e(r,[.24,.46+m*.09,.37],[.048,.03,.018],bn);const o=[];for(const m of[-1,1]){const p=_e(r,[m*.28,1.34,.24],[.12,.035,.12],qi);o.push(p);for(let w=0;w<4;w++)_e(r,[m*.17,.33+w*.1,.364],[.035,.025,.017],qi)}for(let m=0;m<3;m++){const p=new Er([new S(-.33,.2,-.24-m*.06),new S(-.65,.1,-.35-m*.08),new S(-.8,.07,-.52-m*.09)]),w=new lt(new Bs(p,16,.025,6,!1),od());r.add(w)}const a=new lt(new Ce(.76,.19),rd(`UPLINK ${t}`,e.toUpperCase()));a.position.set(0,1.15,.384),r.add(a);const l=new jt;l.position.set(0,1.35,-.12),r.add(l);const c=1.52,u=.24,h=.15;for(const m of[-1,1])for(const p of[-1,1]){yi(l,new S(m*u,0,p*u),new S(m*h,c,p*h),.027,bn);for(let w=0;w<5;w++){const x=w*c/5,v=(w+1)*c/5,C=u+(h-u)*w/5,R=u+(h-u)*(w+1)/5;yi(l,new S(m*C,x,p*C),new S(-m*R,v,p*R),.014,Xi)}}for(let m=.38;m<c;m+=.4){const p=u+(h-u)*m/c;yi(l,new S(-p,m,-p),new S(p,m,-p),.019,bn),yi(l,new S(-p,m,p),new S(p,m,p),.019,bn)}const d=new lt(new bi(.36,24,16),new be({color:7438730,roughness:.59,metalness:.68}));d.position.set(0,c+.4,0),d.castShadow=!0,l.add(d);const f=new lt(new rn(.365,.012,6,32),bn);f.rotation.x=Math.PI/2,f.position.copy(d.position),l.add(f),_e(l,[0,c+.77,0],[.1,.07,.1],Yi),yi(r,new S(-.43,1.34,-.16),new S(-.43,2.22,-.16),.028,bn);const g=_e(r,[-.43,2.22,-.16],[.2,.1,.15],qi);o.push(g);const _=new Ti(16756830,8,6,2);return _.position.set(0,1.42,.55),r.add(_),{id:t,name:e,pos:new S(n,0,s),group:r,lamps:o,light:_,cut:!1,progress:0}}function od(){return Yi}function ax(i){const t=new jt;t.position.set(32,0,26),t.rotation.y=-Math.PI/2,i.add(t),_e(t,[0,.14,1.2],[6.4,.28,4.6],Xi);for(let _ of[-1,1]){for(let m of[-.9,1,2.5])yi(t,new S(_*3.1,.3,m),new S(_*3.1,1.15,m),.045,bn);yi(t,new S(_*3.1,1.14,-.9),new S(_*3.1,1.14,2.5),.04,bn)}for(let _ of[-2.4,2.4])for(let m of[0,2.5])_e(t,[_,.42,m],[.24,.52,.24],Fo);const e=new lt(new Ce(1.8,.42),rd("BERTH 4","EXTRACTION  /  07"));e.position.set(-2.15,1.3,2.25),t.add(e);const n=new lt(new Se(.035,.035,1.2,8),bn);n.position.set(-2.15,.73,2.22),t.add(n);const s=new jt;s.position.set(0,.28,-3.1),t.add(s);const r=new Gs;r.moveTo(-2,-3.7),r.lineTo(2,-3.7),r.lineTo(2.05,2.55),r.quadraticCurveTo(1.65,3.65,0,4.15),r.quadraticCurveTo(-1.65,3.65,-2.05,2.55),r.closePath();const o=new ns(r,{depth:.55,bevelEnabled:!0,bevelSize:.13,bevelThickness:.12,bevelSegments:2,curveSegments:18});o.rotateX(-Math.PI/2);const a=new lt(o,Yi);a.position.y=-.26,a.castShadow=!0,s.add(a),_e(s,[0,.36,-.1],[3.25,.12,7.65],Xi);const l=[new S(-1.78,.51,-3.8),new S(-2.03,.48,-2),new S(-2.04,.48,1.8),new S(-1.44,.48,3.37),new S(0,.48,3.91),new S(1.44,.48,3.37),new S(2.04,.48,1.8),new S(2.03,.48,-2),new S(1.78,.51,-3.8)],c=new Er(l,!1,"catmullrom",.26),u=new lt(new Bs(c,64,.31,12,!1),od());u.castShadow=!0,s.add(u);for(let _=-2.7;_<=2.6;_+=.8)for(const m of[-1.78,1.78])_e(s,[m,.65,_],[.11,.04,.16],Rs);_e(s,[0,.65,-1.5],[2.75,.23,1.4],Xi),_e(s,[0,1.16,-1.75],[2.38,.92,.16],sd),_e(s,[0,1.5,-2.3],[2.38,.13,1.15],Rs);for(const _ of[-1.4,1.4]){yi(s,new S(_,.6,-2.2),new S(_,1.9,-.6),.045,bn);const m=_e(s,[_,.59,3.48],[.21,.13,.24],qi);m.material=qi}for(let _ of[-.2,1.5,2.8])_e(s,[0,.65,_],[2.5,.07,.12],Fo);_e(s,[0,.71,2.94],[1.5,.24,.36],Yi);for(const _ of[-1.35,1.35])_e(s,[_,.57,3.34],[.18,.12,.18],qi);for(let _=-3.2;_<3.2;_+=.55)_e(s,[0,.45,_],[1.05,.021,.04],Rs);const h=new Er([new S(-1.2,.45,-2.7),new S(-1.35,.6,-1),new S(-1.15,.65,.8)]),d=new lt(new Bs(h,22,.025,7,!1),Yi);s.add(d);const f=_e(s,[0,.14,-4.22],[.76,.87,.76],Rs);f.rotation.x=-.13;const g=new Ti(16761726,14,8,2);return g.position.set(0,1.7,2.3),t.add(g),{dock:t,target:new S(29,0,20)}}function lx(i){const t=[Fa(i,"A","YARD",1.5,7.5),Fa(i,"B","SHED",-2,-19.5),Fa(i,"C","QUAY",23,0)],e=ax(i),n={relays:t,allCut:!1,boat:e.dock,boatTarget:e.target,closest(s,r){const a=t.filter(l=>!l.cut).map(l=>({type:"relay",relay:l,distance:Math.hypot(s.x-l.pos.x,s.z-l.pos.z),progress:l.progress})).sort((l,c)=>l.distance-c.distance)[0];if(a&&a.distance<=2.2){const l=a.relay.pos.x-s.x,c=a.relay.pos.z-s.z;if((-Math.sin(r)*l+-Math.cos(r)*c)/Math.max(.001,a.distance)>=.45||a.distance<.9)return a}if(n.allCut){const l=Math.hypot(s.x-e.target.x,s.z-e.target.z);if(l<=2.5)return{type:"extract",distance:l,progress:0}}return null},interact(s,r,o,a){const l=n.closest(s,r);if(l?.type==="extract")return{extract:!0,progress:1};if(!l||!o){for(const u of t)u.progress=Math.max(0,u.progress-a*1.6);return{progress:0}}const c=l.relay;if(c.progress=Math.min(1,c.progress+a/2.4),c.progress>=1){c.cut=!0,c.progress=1;for(const u of c.lamps)u.material=rx;return c.light.intensity=0,n.allCut=t.every(u=>u.cut),{cut:c,progress:1}}return{progress:c.progress}},update(s){for(const r of t)r.cut||(r.light.intensity=4.2+Math.sin(s*4.5)*1.4)},reset(){n.allCut=!1;for(const s of t){s.cut=!1,s.progress=0;for(const r of s.lamps)r.material=qi}}};return n}class cx{ctx=null;bus=null;staticBuffer=null;lastStep=0;_muted=!1;_volume=.8;get muted(){return this._muted}set muted(t){this._muted=t,this.bus&&this.bus.gain.setTargetAtTime(t?0:.65*this._volume,this.ctx.currentTime,.1)}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.bus&&this.bus.gain.setTargetAtTime(this._muted?0:.65*this._volume,this.ctx.currentTime,.08)}async start(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createGain();e.gain.value=this._muted?0:.65*this._volume,e.connect(t.destination),this.bus=e;const n=t.createBuffer(1,Math.floor(t.sampleRate*2),t.sampleRate),s=n.getChannelData(0);for(let d=0;d<s.length;d++)s[d]=(Math.random()*2-1)*(.7+.3*Math.random());this.staticBuffer=n;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=420;const a=t.createGain();a.gain.value=.13,r.connect(o).connect(a).connect(e),r.start();const l=t.createOscillator();l.type="sine",l.frequency.value=41.2;const c=t.createGain();c.gain.value=.075,l.connect(c).connect(e),l.start();const u=t.createOscillator();u.type="triangle",u.frequency.value=82.42;const h=t.createGain();h.gain.value=.012,u.connect(h).connect(e),u.start()}tone(t,e,n,s,r="sine",o=0){const a=this.ctx,l=this.bus;if(!a||!l)return;const c=a.createOscillator(),u=a.createGain(),h=a.currentTime+o;c.type=r,c.frequency.setValueAtTime(Math.max(1,t),h),c.frequency.exponentialRampToValueAtTime(Math.max(1,e),h+n),u.gain.setValueAtTime(.001,h),u.gain.exponentialRampToValueAtTime(Math.max(.002,s),h+.009),u.gain.exponentialRampToValueAtTime(.001,h+n),c.connect(u).connect(l),c.start(h),c.stop(h+n+.02)}noise(t,e,n=120,s=1e4,r=0){const o=this.ctx,a=this.bus;if(!o||!a||!this.staticBuffer)return;const l=o.createBufferSource();l.buffer=this.staticBuffer;const c=o.createBiquadFilter();c.type="highpass",c.frequency.value=n;const u=o.createBiquadFilter();u.type="lowpass",u.frequency.value=s;const h=o.createGain(),d=o.currentTime+r;h.gain.setValueAtTime(.001,d),h.gain.linearRampToValueAtTime(e,d+.004),h.gain.exponentialRampToValueAtTime(.001,d+t),l.connect(c).connect(u).connect(h).connect(a),l.start(d,Math.random()*1.2,t+.03),l.stop(d+t+.04)}shot(){this.noise(.2,.38,120,5e3),this.noise(.08,.35,800,1e4),this.tone(130,38,.19,.48,"triangle"),this.tone(920,85,.12,.075,"sawtooth",.008)}enemyShot(){this.noise(.23,.12,240,3700),this.tone(180,38,.24,.13,"sawtooth")}houndDown(){this.noise(.4,.18,90,1600),this.tone(175,44,.56,.19,"sawtooth")}houndWarning(t=!1){this.tone(t?510:890,t?180:650,t?.28:.46,.12,"sawtooth"),this.tone(1180,730,.1,.055,"triangle",.09)}impact(){this.noise(.095,.16,230,4200),this.tone(190,85,.11,.11,"triangle")}hit(){this.tone(1150,450,.15,.08,"square"),this.tone(650,210,.22,.08,"sine",.04)}reload(){for(let t=0;t<3;t++)this.noise(.055,.13,600,4e3,t*.27),this.tone(880,180,.075,.06,"triangle",t*.27)}empty(){this.tone(900,530,.046,.09,"square")}playerHit(){this.noise(.36,.26,150,1400),this.tone(108,40,.37,.17,"sine")}step(t){const e=this.ctx;e&&(e.currentTime-this.lastStep<(t?.25:.35)||(this.lastStep=e.currentTime,this.noise(.085,.053,90,900),this.tone(68,41,.08,.06,"triangle")))}wave(){this.tone(210,320,.28,.08,"sine"),this.tone(280,430,.4,.05,"sine",.2)}victory(){for(let t=0;t<5;t++)this.tone([146,196,247,330,392][t],[170,220,280,370,440][t],.32,.055,"sine",t*.12)}}function hx(i,t){const e=new Map;function n(r,o){const a=document.getElementById("waypoint-layer"),l=(-o*180/Math.PI%360+360)%360;document.getElementById("compass-heading").textContent=Math.round(l).toString().padStart(3,"0");const c=document.getElementById("compass-tape"),u=["N","NE","E","SE","S","SW","W","NW"];c.textContent=Array.from({length:9},(g,_)=>u[((Math.round(l/45)+_-4)%8+8)%8]).join("    ·    ");const h=i.relays.map(g=>({id:g.id,name:g.name,position:g.pos,done:g.cut,active:!g.cut})).concat([{id:"E",name:"EXTRACT",position:i.boatTarget,done:!1,active:i.allCut}]),d=document.getElementById("compass-marks"),f=Math.min(430,innerWidth*.4);d.innerHTML=h.filter(g=>g.active&&!g.done).map(g=>{const _=g.position.x-r.x,m=g.position.z-r.z,p=-Math.atan2(_,-m),x=Math.atan2(Math.sin(p-o),Math.cos(p-o))*180/Math.PI;if(Math.abs(x)>62)return"";const v=Math.round(f*.5-x/62*f*.5),C=Math.round(Math.hypot(_,m));return`<div class="compass-objective" style="left:${v}px"><i></i><b>${g.id}</b><small>${C}m</small></div>`}).join("");for(const g of h){let _=e.get(g.id);if(_||(_=document.createElement("div"),_.className="waypoint",a.appendChild(_),e.set(g.id,_)),g.done||!g.active){_.classList.add("hidden");continue}_.classList.remove("hidden"),_.classList.toggle("dim",g.id!=="E"&&g.id!==i.relays.find(R=>!R.cut)?.id);const m=Math.hypot(g.position.x-r.x,g.position.z-r.z),p=g.position.clone();p.y=g.id==="E"?2.6:2.5;const w=p.project(t),x=w.z<1&&w.z>-1&&Math.abs(w.x)<.93&&Math.abs(w.y)<.83,v=he.clamp((w.x*.5+.5)*innerWidth,40,innerWidth-40),C=he.clamp((-w.y*.5+.5)*innerHeight,75,innerHeight-100);_.classList.toggle("offscreen",!x),_.style.transform=`translate(${Math.round(v+(g.id==="B"?-35:g.id==="C"?35:0))}px,${Math.round(C+(g.id==="B"?29:g.id==="C"?50:0))}px)`,_.innerHTML=`<b>${g.id==="E"?"↗":g.id}</b><span>${g.id==="E"?"EX":g.id} ${Math.round(m)}m</span>`}}function s({state:r,player:o,yaw:a,radioTimer:l,hitMarker:c,damageFlash:u,aimHold:h}){if(r!=="playing")return;document.getElementById("h-wave").textContent=`RELAYS ${o.relays} / 3`,document.getElementById("h-health").innerHTML=`${Math.ceil(o.hp)} <small>HP</small>`,document.getElementById("h-healthbar").style.width=o.hp+"%",document.getElementById("h-healthbar").classList.toggle("critical",o.hp<30),document.getElementById("h-stamina").textContent="STAMINA  "+"▰".repeat(Math.ceil(o.stamina*5))+"▱".repeat(5-Math.ceil(o.stamina*5)),document.getElementById("h-ammo").textContent=String(o.ammo).padStart(2,"0"),document.getElementById("h-reserve").textContent="/ "+o.reserve,document.getElementById("h-enemies").textContent=`RELAYS ${i.relays.map(_=>_.cut?"■":"□").join(" ")}  ${o.relays}/3`,document.querySelector(".radio").style.opacity=l>0?"1":"0",document.getElementById("h-objective").textContent=i.allCut?"REACH THE BOAT":"CUT THE THREE UPLINK RELAYS";const d=i.closest(new S(o.x,0,o.z),a),f=document.getElementById("interaction"),g=document.getElementById("btn-use");f.classList.toggle("hidden",!d),g.classList.toggle("hidden",!d||d.type==="extract"),d&&(document.getElementById("interact-label").textContent=d.type==="extract"?"BOAT EXTRACTION READY":`HOLD E / USE — CUT UPLINK ${d.relay.id}`,document.getElementById("interact-detail").textContent=d.type==="extract"?"BOARDING AUTOMATICALLY":`DISABLE SECURITY UPLINK · ${Math.round(d.progress*100)}%`,document.getElementById("interact-fill").style.width=`${d.progress*100}%`),n(o,a),document.getElementById("hitmarker").style.opacity=c>0?"1":"0",document.getElementById("damage").style.opacity=String(Math.max(0,u)),document.getElementById("crosshair").classList.toggle("aiming",h),document.getElementById("h-ammo-bars").innerHTML=Array.from({length:Math.ceil(o.ammo/3)},(_,m)=>`<i style="opacity:${m===Math.ceil(o.ammo/3)-1&&o.ammo%3?.6:1}"></i>`).join("")}return{update:s}}function ux(i){const t=[];function e(h,d,f){const g=new Float32Array([...h.toArray(),...d.toArray()]),_=new Oe;_.setAttribute("position",new Qe(g,3));const m=new jl({color:f?16765344:16737862,transparent:!0,opacity:.95,depthWrite:!1,blending:Ki}),p=new yo(_,m);i.add(p),t.push({obj:p,vel:new S,life:.085,max:.085})}const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d"),r=s.createRadialGradient(64,64,2,64,64,62);r.addColorStop(0,"rgba(190,194,187,.38)"),r.addColorStop(.4,"rgba(109,118,117,.25)"),r.addColorStop(1,"rgba(72,79,80,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);const o=new Ye(n);function a(h){const d=new lr(new Zl({map:o,transparent:!0,opacity:.75,depthWrite:!1,color:12697778}));d.position.copy(h);const f=.27+Math.random()*.2;d.scale.set(f,f,1),i.add(d),t.push({obj:d,vel:new S((Math.random()-.5)*.2,.45+Math.random()*.25,(Math.random()-.5)*.2),life:1.7,max:1.7,smoke:!0})}function l(h,d=!1){for(let f=0;f<8;f++){const g=new lt(new kn(.02+.025*Math.random(),.02,.06),new oe({color:d?16744535:16763016,transparent:!0,opacity:1}));g.position.copy(h),i.add(g),t.push({obj:g,vel:new S((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5),life:.3+Math.random()*.33,max:.65})}}function c(h){for(let d=t.length-1;d>=0;d--){const f=t[d];f.life-=h,f.obj.position.addScaledVector(f.vel,h),f.smoke||(f.vel.y-=h*14),f.smoke&&f.obj instanceof lr&&(f.obj.material.opacity=.6*Math.max(0,f.life/f.max),f.obj.scale.multiplyScalar(1+h*.45)),f.obj instanceof lt&&f.obj.material instanceof oe&&(f.obj.material.opacity=Math.max(0,f.life/f.max)),f.life<=0&&(i.remove(f.obj),f.obj instanceof yo&&f.obj.geometry.dispose(),f.obj instanceof lr&&f.obj.material.dispose(),t.splice(d,1))}}function u(){for(const h of t)if(i.remove(h.obj),h.obj instanceof yo&&h.obj.geometry.dispose(),h.obj instanceof lr&&h.obj.material.dispose(),h.obj instanceof lt)if(h.obj.geometry.dispose(),Array.isArray(h.obj.material))for(const d of h.obj.material)d.dispose();else h.obj.material.dispose();t.length=0}return{tracer:e,smoke:a,sparks:l,update:c,clear:u,get smokeCount(){return t.filter(h=>h.smoke).length}}}function dx({ui:i,mobile:t,getState:e,onStart:n,onResume:s,onPause:r,bindTouchControls:o,settings:a,onSensitivity:l,onVolume:c,onFov:u,saveSettings:h}){function d(){i.innerHTML=`
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
 `,document.getElementById("primary").addEventListener("click",()=>{["menu","dead","victory"].includes(e())?n():s()}),document.getElementById("pause-button").addEventListener("click",()=>r());const m=document.getElementById("settings-panel"),p=x=>{m.classList.remove("hidden"),document.getElementById("panel-heading").textContent=x?"CONTROLS":"SETTINGS",document.getElementById("settings-content").classList.toggle("hidden",x),document.getElementById("controls-content").classList.toggle("hidden",!x)};document.getElementById("settings-button").addEventListener("click",()=>p(!1)),document.getElementById("controls-button").addEventListener("click",()=>p(!0)),document.getElementById("panel-close").addEventListener("click",()=>m.classList.add("hidden"));const w=(x,v,C,R)=>{const I=document.getElementById(x),D=document.getElementById(v);I.value=String(x.includes("volume")?a().volume:x.includes("fov")?a().fov:a().sensitivity),D.textContent=C(+I.value),I.addEventListener("input",()=>{const b=+I.value;R(b),D.textContent=C(b),h()})};w("setting-sensitivity","sensitivity-output",x=>x.toFixed(2)+"×",x=>{l(x)}),w("setting-volume","volume-output",x=>Math.round(x*100)+"%",x=>{c(x)}),w("setting-fov","fov-output",x=>x+"°",x=>{u(x)}),o()}d();function f(_,m){document.getElementById("intro-overlay").classList.add("hidden");const p=document.getElementById("menu");p.classList.remove("off"),document.getElementById("hud").classList.add("hidden");const w=p.querySelector(".eyebrow"),x=p.querySelector("p"),v=document.getElementById("primary"),C=document.getElementById("menu-secondary");_==="menu"?(w.innerHTML="<b>B4</b> PORT AUTHORITY BREACH UNIT",x.innerHTML="The port’s security net has gone feral. Cut its three uplinks. Reach the boat.",v.innerHTML="DEPLOY <span>↗</span>",C.textContent=t?"LEFT STICK MOVE · SWIPE LOOK · FIRE TO SHOOT":"WASD MOVE · MOUSE AIM & FIRE · R RELOAD"):_==="paused"?(w.innerHTML="<b>Ⅱ</b> OPERATION SUSPENDED",x.innerHTML="MAINTAIN YOUR POSITION.<br>RESUME WHEN READY.",v.innerHTML="RESUME <span>↗</span>",C.textContent=`RELAYS ${m.relays}/3  ·  ${m.kills} CONFIRMED  ·  ${m.hp} HP`):_==="dead"?(w.innerHTML="<b>×</b> OPERATIVE DOWN",x.innerHTML="SIGNAL LOST.<br>MISSION TERMINATED.",v.innerHTML="REDEPLOY <span>↗</span>",C.textContent=`${m.kills} HOSTILES NEUTRALIZED · RELAYS ${m.relays}/3`):(w.innerHTML="<b>◆</b> MISSION COMPLETE",x.innerHTML="The Harbormaster is dark.<br>Extraction complete.",v.innerHTML="REPLAY OPERATION <span>↗</span>",C.textContent=`TIME ${Math.floor(m.runTime/60).toString().padStart(2,"0")}:${Math.floor(m.runTime%60).toString().padStart(2,"0")} · ACCURACY ${m.shots?Math.round(m.hitsCount/m.shots*100):0}% · MACHINES ${m.kills} · RETRIES ${m.retries}`)}function g(){document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.remove("hidden")}return{showMenu:f,hideMenu:g,radio:_=>{document.getElementById("h-radio").textContent=_},waveText:_=>{const m=document.getElementById("wave-warning");m.textContent=_,m.classList.remove("show"),m.offsetWidth,m.classList.add("show")}}}class fx{constructor(t,e,n){this.canvas=t,this.mobile=e,this.actions=n}canvas;mobile;actions;keys=new Set;shooting=!1;aimHold=!1;interactHold=!1;touchMove={x:0,y:0};jumpRequest=!1;gamepad={x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1};gamepadPrev=new Set;lookPointer=null;lastTouch={x:0,y:0};releaseTouchControls=()=>{};clearHeld(){this.keys.clear(),this.shooting=!1,this.aimHold=!1,this.interactHold=!1,this.touchMove={x:0,y:0},this.jumpRequest=!1,this.lookPointer=null,this.releaseTouchControls()}pollGamepad(){const t=navigator.getGamepads?.()?.find(s=>s?.connected);if(!t){Object.assign(this.gamepad,{x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1}),this.gamepadPrev.clear();return}const e=s=>{const r=t.axes[s]||0;return Math.abs(r)<.17?0:Math.sign(r)*(Math.abs(r)-.17)/.83};this.gamepad.x=e(0),this.gamepad.y=-e(1),this.gamepad.rx=e(2),this.gamepad.ry=e(3);const n=s=>t.buttons[s]?.pressed===!0;this.gamepad.fire=n(7),this.gamepad.aim=n(6),this.gamepad.use=n(3),this.gamepad.sprint=n(10),this.gamepad.crouch=n(1);for(const s of[0,2,9]){const r=n(s);r&&!this.gamepadPrev.has(s)&&(s===0&&(this.jumpRequest=!0),s===2&&this.actions.reload(),s===9&&(this.actions.state()==="playing"?this.actions.pause():this.actions.state()==="paused"&&this.actions.resume())),r?this.gamepadPrev.add(s):this.gamepadPrev.delete(s)}}bindTouchControls(){const t=document.getElementById("btn-use");t.addEventListener("pointerdown",h=>{h.preventDefault();try{t.setPointerCapture(h.pointerId)}catch{}this.interactHold=!0,t.classList.add("active")});const e=()=>{this.interactHold=!1,t.classList.remove("active")};for(const h of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(h,e);document.getElementById("btn-reload").addEventListener("pointerdown",h=>{h.preventDefault(),this.actions.reload()}),document.getElementById("btn-jump").addEventListener("pointerdown",h=>{h.preventDefault(),this.jumpRequest=!0});const n=document.getElementById("btn-fire"),s=document.getElementById("btn-aim");for(const[h,d]of[[n,"shooting"],[s,"aimHold"]]){h.addEventListener("pointerdown",f=>{f.preventDefault();try{h.setPointerCapture(f.pointerId)}catch{}this[d]=!0,d==="shooting"&&this.actions.shoot(),h.classList.add("active")});for(const f of["pointerup","pointercancel","lostpointercapture"])h.addEventListener(f,()=>{this[d]=!1,h.classList.remove("active")})}const r=document.getElementById("movezone"),o=document.getElementById("joystick");let a=null,l={x:0,y:0};const c=(h,d)=>{let f=(h-l.x)/57,g=(d-l.y)/57;const _=Math.max(1,Math.hypot(f,g));f/=_,g/=_,this.touchMove={x:f,y:-g},o.style.transform=`translate(${f*40}px,${g*40}px)`};r.addEventListener("pointerdown",h=>{if(h.preventDefault(),a!==null)return;a=h.pointerId;try{r.setPointerCapture(h.pointerId)}catch{}const d=r.getBoundingClientRect();l={x:d.left+d.width/2,y:d.top+d.height/2},c(h.clientX,h.clientY)}),r.addEventListener("pointermove",h=>{h.pointerId===a&&c(h.clientX,h.clientY)});const u=h=>{a===h.pointerId&&(a=null,this.touchMove={x:0,y:0},o.style.transform="")};for(const h of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(h,u);this.releaseTouchControls=()=>{e(),this.shooting=!1,this.aimHold=!1,n.classList.remove("active"),s.classList.remove("active"),a=null,o.style.transform=""},this.mobile&&document.body.classList.add("is-mobile")}bindWindow(){window.addEventListener("keydown",t=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code),!t.repeat){if(t.code==="KeyR"&&this.actions.reload(),t.code==="KeyF"&&this.actions.melee(),t.code==="Escape"&&!document.getElementById("settings-panel").classList.contains("hidden")){document.getElementById("settings-panel").classList.add("hidden");return}(t.code==="Escape"||t.code==="KeyP")&&this.actions.state()==="playing"&&this.actions.pause(),t.code==="Enter"&&["menu","paused","dead","victory"].includes(this.actions.state())&&document.getElementById("primary").click()}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.clearHeld(),this.actions.state()==="playing"&&!this.mobile&&this.actions.pause()}),window.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{!this.mobile&&document.pointerLockElement!==this.canvas&&this.actions.state()==="playing"&&this.actions.pause()}),this.canvas.addEventListener("mousemove",t=>{this.actions.state()!=="playing"||document.pointerLockElement!==this.canvas||this.actions.look(t.movementX,t.movementY,.0022*this.actions.sensitivity(),1.35)}),this.canvas.addEventListener("mousedown",t=>{this.actions.state()==="playing"&&(!this.mobile&&document.pointerLockElement!==this.canvas&&this.actions.requestPointerLock(),t.button===0&&(this.shooting=!0,this.actions.shoot()),t.button===2&&(this.aimHold=!0))}),window.addEventListener("mouseup",t=>{t.button===0&&(this.shooting=!1),t.button===2&&(this.aimHold=!1)}),this.canvas.addEventListener("pointerdown",t=>{if(!(!this.mobile||this.actions.state()!=="playing"||this.lookPointer!==null)){this.lookPointer=t.pointerId,this.lastTouch={x:t.clientX,y:t.clientY};try{this.canvas.setPointerCapture(t.pointerId)}catch{}}}),this.canvas.addEventListener("pointermove",t=>{if(!this.mobile||t.pointerId!==this.lookPointer)return;const e=t.clientX-this.lastTouch.x,n=t.clientY-this.lastTouch.y;this.actions.look(e,n,.0045,1.28),this.lastTouch={x:t.clientX,y:t.clientY}});for(const t of["pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(t,e=>{e.pointerId===this.lookPointer&&(this.lookPointer=null)});window.addEventListener("touchmove",t=>{this.actions.state()==="playing"&&t.preventDefault()},{passive:!1}),window.addEventListener("touchstart",t=>{this.actions.state()==="playing"&&t.touches.length>1&&t.preventDefault()},{passive:!1})}}const px=document.getElementById("app"),$i=document.getElementById("viewport"),mx=document.getElementById("overlay"),is=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),gx=matchMedia("(prefers-reduced-motion: reduce)").matches,ac=is||gx||new URLSearchParams(location.search).has("fast");let jn;try{jn=new A_({canvas:$i,antialias:!is,alpha:!1,powerPreference:"high-performance"})}catch(i){throw px.innerHTML='<p style="padding:2rem;color:white">WebGL is required to run this game.</p>',i}jn.setPixelRatio(Math.min(window.devicePixelRatio,ac?1:1.65));jn.setSize(innerWidth,innerHeight);jn.toneMapping=ru;jn.toneMappingExposure=1.24;jn.outputColorSpace=xe;jn.shadowMap.enabled=!ac;jn.shadowMap.type=iu;const Ri=new Zf,Ae=new an(is?77:74,innerWidth/innerHeight,.055,250);Ri.add(Ae);const Rr=pv(Ri,ac),wn=new Sv(Ae),je=new cx,lc=lx(Ri),_x=hx(lc,Ae),Tn=ux(Ri),ad=new Ti(16113105,6.5,8,1.4);ad.position.set(.45,.45,.9);Ae.add(ad);const ld=new Ti(12506580,3.3,6,1.4);ld.position.set(-1,.1,-.4);Ae.add(ld);let ke="menu",dr=0,Il=3.5,Dl=!1;const Pt={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1};let cc=0,hc=0,uc=0,Ul=0,Oo=-99,Cr=1,Ls=.8,ts=is?77:74;try{const i=JSON.parse(localStorage.getItem("saltline.settings.v1")||"{}");Cr=he.clamp(Number(i.sensitivity)||1,.2,3),Ls=he.clamp(typeof i.volume=="number"?i.volume:.8,0,1),ts=he.clamp(Number(i.fov)||ts,60,95)}catch{}const vx=()=>localStorage.setItem("saltline.settings.v1",JSON.stringify({sensitivity:Cr,volume:Ls,fov:ts}));let Un=-Math.PI/2,Zi=-.025,ln=0,oi=0,Bo=0,zo=0,Pr=0,ko=0,Ho=0,Vo=0,ar=!1;const ae=new fx($i,is,{state:()=>ke,sensitivity:()=>Cr,look:(i,t,e,n)=>{Un-=i*e,Zi=Math.max(-n,Math.min(n,Zi-t*e))},shoot:()=>pd(),reload:()=>Mx(),melee:()=>bx(),pause:()=>ud(),resume:()=>dd(),requestPointerLock:()=>dc()}),zs=[],Nl=nx({scene:Ri,mission:lc,player:Pt,enemies:zs,sound:je,getTime:()=>ln,getYaw:()=>Un,isHeld:()=>ae.keys.has("KeyE")||ae.interactHold||ae.gamepad.use,radio:Ur,waveText:yx,onVictory:()=>fd(!0)}),Lr=sx({scene:Ri,world:Rr,sound:je,player:Pt,enemies:zs,getTime:()=>ln,isPlaying:()=>ke==="playing",radio:Ur,hurtPlayer:Ex,tracer:Tn.tracer,sparks:Tn.sparks,smoke:Tn.smoke}),Fl=new Wp;Fl.far=130;const $o=dx({ui:mx,mobile:is,getState:()=>ke,onStart:xx,onResume:dd,onPause:ud,bindTouchControls:()=>ae.bindTouchControls(),settings:()=>({sensitivity:Cr,volume:Ls,fov:ts}),onSensitivity:i=>{Cr=i},onVolume:i=>{Ls=i,je.setVolume(Ls)},onFov:i=>{ts=i},saveSettings:vx});function cd(i){$o.showMenu(i,{relays:Pt.relays,kills:Pt.kills,hp:Pt.hp,runTime:cc,shots:hc,hitsCount:uc,retries:Ul}),wn.root.visible=!1}function hd(){$o.hideMenu(),wn.root.visible=!0}function xx(){ke==="dead"&&Ul++,zs.forEach(e=>{e.disposeWreck(),Ri.remove(e.root)}),zs.length=0,Tn.clear(),Object.assign(Pt,{x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1}),lc.reset(),cc=0,hc=0,uc=0,Lr.reset(),ae.clearHeld(),Oo=-99,Nl.reset(),Un=-Math.PI/2,Zi=-.04,ko=0,Pr=0,ln=0,oi=0,ke="intro",dr=0,Il=Ul>0?1.3:3.5,Dl=!1,document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.add("hidden"),document.getElementById("intro-overlay").classList.remove("hidden"),document.getElementById("intro-curtain").style.opacity="1",wn.root.visible=!1,je.start().then(()=>je.setVolume(Ls)),Nl.spawnPatrol(),dc()}function dc(){!is&&document.pointerLockElement!==$i&&$i.requestPointerLock?.().catch(()=>{}),$i.focus()}function ud(){ke==="playing"&&(ke="paused",ae.clearHeld(),document.pointerLockElement===$i&&document.exitPointerLock(),cd("paused"))}function dd(){ke==="paused"&&(ke="playing",hd(),je.start(),dc())}function fd(i){ke=i?"victory":"dead",ae.clearHeld(),document.pointerLockElement===$i&&document.exitPointerLock(),i&&je.victory(),cd(i?"victory":"dead")}function Ur(i,t=4){Vo=t,$o.radio(i)}function yx(i){$o.waveText(i)}function Mx(){ke!=="playing"||Pt.reloading||Pt.ammo===30||Pt.reserve<=0||(Pt.reloading=!0,ko=1.45,wn.reload(),je.reload(),Ur("CHANGING MAGAZINE.",1.3))}function Sx(i){const t=new S(Pt.x,Pt.y,Pt.z);let e=65;for(const n of Rr.obstacles){const s=new S(n.minX,0,n.minZ),r=new S(n.maxX,n.height,n.maxZ),a=new Ji(t,i).intersectBox(new Bn(s,r),new S);if(a){const l=a.distanceTo(t);l<e&&(e=l)}}return t.addScaledVector(i,e)}function pd(){if(ke!=="playing"||Pt.reloading||Pr>0)return;if(Pt.ammo<=0){Ho<=0&&(je.empty(),Ho=.22);return}Pt.ammo--,hc++,Pr=.105,wn.shoot(),je.shot(),oi=Math.max(oi,.055),Lr.hearGunshot();const i=ae.aimHold?.0045:.013,t=new S((Math.random()-.5)*i,(Math.random()-.5)*i,-1).normalize().applyQuaternion(Ae.quaternion),e=Ae.getWorldPosition(new S);Fl.set(e,t);const n=zs.filter(a=>a.alive).flatMap(a=>a.targetable),s=Fl.intersectObjects(n,!1),r=Sx(t),o=r.distanceTo(e);if(s.length&&s[0].distance<o+.04){const a=s[0],l=a.object.userData.enemy,c=a.object.userData.enemyPart==="head";l.damage(c?92:36,t,c?"weak":"body"),Lr.provokeHound(l),uc++,l.lastHitAt=ln,zo=.2,je.hit(),Tn.sparks(a.point,!0),l.alive||(Pt.kills++,Pt.score+=c?150:100,Ur(l.kind==="gull"?"GULL DOWN. AIRSPACE CLEARER.":"HOUND DOWN. KEEP MOVING.",1.5)),Tn.tracer(e.clone().addScaledVector(t,.6),a.point,!0)}else Tn.sparks(r,!1),je.impact(),Tn.tracer(e.clone().addScaledVector(t,.6),r,!0)}function bx(){if(ke!=="playing")return;const i=zs.filter(t=>t.alive).map(t=>({e:t,d:Math.hypot(t.root.position.x-Pt.x,t.root.position.z-Pt.z)})).sort((t,e)=>t.d-e.d)[0];if(wn.kick=Math.max(wn.kick,.35),i?.d<2.8){const t=new S(i.e.root.position.x-Pt.x,0,i.e.root.position.z-Pt.z).normalize();i.e.damage(65,t,"body"),Lr.provokeHound(i.e),je.hit(),Tn.sparks(i.e.root.position.clone().add(new S(0,1.1,0)),!0),i.e.alive||Pt.kills++}else je.empty()}function Ex(i,t){return ke!=="playing"||ln-Oo<t?!1:(Pt.hp=Math.max(0,Pt.hp-i),Oo=ln,Bo=.62,oi=.08,je.playerHit(),Pt.hp===0&&fd(!1),!0)}function wx(i){let t=0,e=0;(ae.keys.has("KeyW")||ae.keys.has("ArrowUp"))&&t++,(ae.keys.has("KeyS")||ae.keys.has("ArrowDown"))&&t--,(ae.keys.has("KeyD")||ae.keys.has("ArrowRight"))&&e++,(ae.keys.has("KeyA")||ae.keys.has("ArrowLeft"))&&e--,t+=ae.touchMove.y+ae.gamepad.y,e+=ae.touchMove.x+ae.gamepad.x;const n=Math.hypot(t,e);ar=n>.05,n>1&&(t/=n,e/=n);const s=(ae.keys.has("ShiftLeft")||ae.keys.has("ShiftRight")||ae.gamepad.sprint)&&t>.1&&Pt.stamina>.01,r=ae.keys.has("ControlLeft")||ae.keys.has("KeyC")||ae.gamepad.crouch,o=(r?2.2:s?7.8:4.65)*(Pt.ads?.67:1);if(ar){const c=(e*Math.cos(Un)-t*Math.sin(Un))*o*i,u=(-e*Math.sin(Un)-t*Math.cos(Un))*o*i;_r(Rr.obstacles,Pt.x+c,Pt.z)||(Pt.x+=c),_r(Rr.obstacles,Pt.x,Pt.z+u)||(Pt.z+=u),Math.abs(Pt.y-(r?1.16:1.72))<.25&&je.step(s)}Pt.stamina=Math.min(1,Math.max(0,Pt.stamina+(s&&ar?-i*.16:i*.12))),ln-Oo>4&&Pt.hp<100&&(Pt.hp=Math.min(100,Pt.hp+i*25)),(ae.keys.has("Space")||ae.jumpRequest)&&Pt.y<=1.73&&Pt.vY<=0&&(Pt.vY=6.4),ae.jumpRequest=!1,Pt.vY-=17*i,Pt.y=Math.max(r?1.18:1.72,Pt.y+Pt.vY*i),(Pt.y===1.72||Pt.y===1.18)&&(Pt.vY=0),Pt.ads=ae.aimHold||ae.gamepad.aim,Un-=ae.gamepad.rx*i*2.2,Zi=Math.max(-1.35,Math.min(1.35,Zi-ae.gamepad.ry*i*1.7)),oi>0&&(oi=Math.max(0,oi-i*.45));const a=(Math.random()-.5)*oi,l=(Math.random()-.5)*oi;Ae.rotation.order="YXZ",Ae.rotation.set(Zi+l,Un+a,0),Ae.position.set(Pt.x,Pt.y+(Pt.y<=1.73&&ar?Math.sin(ln*(s?13:8))*.025:0),Pt.z),Ae.fov=he.damp(Ae.fov,Pt.ads?52:ts,10,i),Ae.updateProjectionMatrix(),wn.update(i,ln,ar?1:0,s,Pt.ads)}function Tx(){jn.setSize(innerWidth,innerHeight),Ae.aspect=innerWidth/innerHeight,Ae.updateProjectionMatrix()}window.addEventListener("resize",Tx);ae.bindWindow();Ae.position.set(Pt.x,Pt.y,Pt.z);Ae.rotation.order="YXZ";Ae.rotation.set(Zi,Un,0);const Ax=new Gp;function Rx(i){if(ln+=i,Rr.tick(i,ln,Pt.x,Pt.z),ke==="intro"){dr+=i;const t=Math.min(1,dr/Il),e=t*t*(3-2*t);Ae.position.set(-34+e*2,1.72+(1-e)*.85,6+(1-e)*1.1),Ae.rotation.order="YXZ",Ae.rotation.set(-.12+t*.08,-Math.PI/2,0),Ae.fov=he.lerp(57,ts,e),Ae.updateProjectionMatrix();const n=document.getElementById("intro-curtain");n.style.opacity=String(Math.max(0,1-dr/.55)),!Dl&&dr>Math.min(.8,Il*.35)&&(Dl=!0,Ur("BREACHER, THIS IS CONTROL. THE HARBORMASTER HOLDS THE BERTH. CUT THREE UPLINKS — YARD, SHED, QUAY.",8)),t>.77&&(document.getElementById("hud").classList.remove("hidden"),wn.root.visible=!0),t>=1&&(ke="playing",document.getElementById("intro-overlay").classList.add("hidden"),hd()),Tn.update(i)}else if(ke==="playing"){if((ae.shooting||ae.gamepad.fire)&&pd(),Pt.reloading&&(ko-=i,ko<=0)){const t=Math.min(Pt.reserve,30-Pt.ammo);Pt.ammo+=t,Pt.reserve-=t,Pt.reloading=!1}Pr=Math.max(0,Pr-i),Ho=Math.max(0,Ho-i),zo=Math.max(0,zo-i),Bo=Math.max(0,Bo-i*1.5),Vo>0&&(Vo-=i),cc+=i,Nl.update(i),wx(i),Lr.update(i),Tn.update(i)}else ke==="menu"&&(wn.root.visible=!1,Ae.position.set(-34+Math.sin(ln*.085)*.4,1.8,6+Math.sin(ln*.12)*.55),Ae.rotation.set(-.085,-Math.PI/2+Math.sin(ln*.14)*.035,0),wn.root.position.set(.68,-.645,-.91),wn.root.rotation.set(0,.16,0)),Tn.update(i)}function md(){requestAnimationFrame(md),ae.pollGamepad();let t=Math.min(Ax.getDelta(),.24);for(;t>1e-5;){const e=Math.min(.04,t);Rx(e),t-=e}_x.update({state:ke,player:Pt,yaw:Un,radioTimer:Vo,hitMarker:zo,damageFlash:Bo,aimHold:ae.aimHold}),jn.render(Ri,Ae)}md();
