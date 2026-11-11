(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Mc="180",Fu=0,Jc=1,Ou=2,Mh=1,yh=2,Zn=3,_i=0,je=1,Ie=2,pi=0,pr=1,_r=2,jc=3,Qc=4,Bu=5,Ii=100,zu=101,Hu=102,ku=103,Gu=104,Vu=200,Wu=201,Xu=202,Yu=203,ga=204,_a=205,qu=206,$u=207,Zu=208,Ku=209,Ju=210,ju=211,Qu=212,tf=213,ef=214,va=0,xa=1,Ma=2,vr=3,ya=4,Sa=5,Ea=6,Ta=7,Sh=0,nf=1,rf=2,mi=0,sf=1,of=2,af=3,Eh=4,cf=5,lf=6,hf=7,Th=300,xr=301,Mr=302,Ks=303,wa=304,So=306,vi=1e3,Ui=1001,ba=1002,An=1003,uf=1004,gs=1005,Nn=1006,Lo=1007,Ni=1008,Bn=1009,wh=1010,bh=1011,Qr=1012,yc=1013,Hi=1014,jn=1015,br=1016,Sc=1017,Ec=1018,ts=1020,Ah=35902,Rh=35899,Ch=1021,Ph=1022,bn=1023,es=1026,ns=1027,Lh=1028,Tc=1029,Ih=1030,wc=1031,bc=1033,Ws=33776,Xs=33777,Ys=33778,qs=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,La=36196,Ia=37492,Da=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,Ha=37814,ka=37815,Ga=37816,Va=37817,Wa=37818,Xa=37819,Ya=37820,qa=37821,$a=36492,Za=36494,Ka=36495,Ja=36283,ja=36284,Qa=36285,tc=36286,ff=3200,df=3201,Dh=0,pf=1,ui="",Se="srgb",yr="srgb-linear",Js="linear",ge="srgb",qi=7680,tl=519,mf=512,gf=513,_f=514,Uh=515,vf=516,xf=517,Mf=518,yf=519,el=35044,nl="300 es",Fn=2e3,js=2001;class Ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const $r=Math.PI/180,is=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function Sf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ef(i,t,e){return i!==t?(e-i)/(t-i):0}function Zr(i,t,e){return(1-e)*i+e*t}function Tf(i,t,e,n){return Zr(i,t,1-Math.exp(-e*n))}function wf(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cf(i,t){return i+Math.random()*(t-i)}function Pf(i){return i*(.5-Math.random())}function Lf(i){i!==void 0&&(il=i);let t=il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function If(i){return i*$r}function Df(i){return i*is}function Uf(i){return(i&i-1)===0&&i!==0}function Nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Of(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:$r,RAD2DEG:is,generateUUID:Vi,clamp:ne,euclideanModulo:Ac,mapLinear:Sf,inverseLerp:Ef,lerp:Zr,damp:Tf,pingpong:wf,smoothstep:bf,smootherstep:Af,randInt:Rf,randFloat:Cf,randFloatSpread:Pf,seededRandom:Lf,degToRad:If,radToDeg:Df,isPowerOfTwo:Uf,ceilPowerOfTwo:Nf,floorPowerOfTwo:Ff,setQuaternionFromProperEuler:Of,normalize:$e,denormalize:lr};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,p*T);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*T;if(c=c*m+f*x,l=l*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new w,rl=new us;class jt{constructor(t,e,n,r,s,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],T=r[1],M=r[4],x=r[7],R=r[2],A=r[5],P=r[8];return s[0]=o*_+a*T+c*R,s[3]=o*m+a*M+c*A,s[6]=o*p+a*x+c*P,s[1]=l*_+u*T+h*R,s[4]=l*m+u*M+h*A,s[7]=l*p+u*x+h*P,s[2]=f*_+d*T+g*R,s[5]=f*m+d*M+g*A,s[8]=f*p+d*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new jt;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){const i=Qs("canvas");return i.style.display="block",i}const sl={};function rs(i){i in sl||(sl[i]=!0,console.warn(i))}function zf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ol=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hf(){const i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?Js:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:ol,fromXYZ:al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:ol,fromXYZ:al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),i}const ce=Hf();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class kf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=Qs("canvas")),$i.width=t.width,$i.height=t.height;const r=$i.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gf=0;class Rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uo(r[o].image)):s.push(Uo(r[o]))}else s=Uo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;const No=new w;class Qe extends Ar{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Ui,r=Ui,s=Nn,o=Ni,a=bn,c=Bn,l=Qe.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Vi(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vi:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vi:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Th;Qe.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(d+1)/2,R=(p+1)/2,A=(u+f)/4,P=(h+_)/4,I=(g+m)/4;return M>x&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=P/n):x>R?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=I/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=I/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wf extends Ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Qe(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Rc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fh extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xf extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),vs.subVectors(this.max,Dr),Zi.subVectors(t.a,Dr),Ki.subVectors(t.b,Dr),Ji.subVectors(t.c,Dr),ii.subVectors(Ki,Zi),ri.subVectors(Ji,Ki),Ti.subVectors(Zi,Ji);let e=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!Fo(e,Zi,Ki,Ji,vs)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,Zi,Ki,Ji,vs))?!1:(xs.crossVectors(ii,ri),e=[xs.x,xs.y,xs.z],Fo(e,Zi,Ki,Ji,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new w,new w,new w,new w,new w,new w,new w,new w],Mn=new w,_s=new Wi,Zi=new w,Ki=new w,Ji=new w,ii=new w,ri=new w,Ti=new w,Dr=new w,vs=new w,xs=new w,wi=new w;function Fo(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wi.fromArray(i,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Yf=new Wi,Ur=new w,Oo=new w;class Eo{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Oo)),this.expandByPoint(Ur.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new w,Bo=new w,Ms=new w,si=new w,zo=new w,ys=new w,Ho=new w;class fs{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Bo.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Bo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ms),a=si.dot(this.direction),c=-si.dot(Ms),l=si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bo).addScaledVector(Ms,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,r,s){zo.subVectors(e,t),ys.subVectors(n,t),Ho.crossVectors(zo,ys);let o=this.direction.dot(Ho),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(ys.crossVectors(si,ys));if(c<0)return null;const l=a*this.direction.dot(zo.cross(si));if(l<0||c+l>o)return null;const u=-a*si.dot(Ho);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,$f)}lookAt(t,e,n){const r=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),oi.crossVectors(n,cn),oi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),oi.crossVectors(n,cn)),oi.normalize(),Ss.crossVectors(cn,oi),r[0]=oi.x,r[4]=Ss.x,r[8]=cn.x,r[1]=oi.y,r[5]=Ss.y,r[9]=cn.y,r[2]=oi.z,r[6]=Ss.z,r[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],M=n[7],x=n[11],R=n[15],A=r[0],P=r[4],I=r[8],E=r[12],S=r[1],C=r[5],U=r[9],z=r[13],Y=r[2],H=r[6],V=r[10],J=r[14],W=r[3],gt=r[7],yt=r[11],Rt=r[15];return s[0]=o*A+a*S+c*Y+l*W,s[4]=o*P+a*C+c*H+l*gt,s[8]=o*I+a*U+c*V+l*yt,s[12]=o*E+a*z+c*J+l*Rt,s[1]=u*A+h*S+f*Y+d*W,s[5]=u*P+h*C+f*H+d*gt,s[9]=u*I+h*U+f*V+d*yt,s[13]=u*E+h*z+f*J+d*Rt,s[2]=g*A+_*S+m*Y+p*W,s[6]=g*P+_*C+m*H+p*gt,s[10]=g*I+_*U+m*V+p*yt,s[14]=g*E+_*z+m*J+p*Rt,s[3]=T*A+M*S+x*Y+R*W,s[7]=T*P+M*C+x*H+R*gt,s[11]=T*I+M*U+x*V+R*yt,s[15]=T*E+M*z+x*J+R*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+_*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+e*l*h-e*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,M=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,x=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,R=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,A=e*T+n*M+r*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=T*P,t[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*P,t[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*p+n*c*p)*P,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*P,t[4]=M*P,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*P,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*P,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*d+e*c*d)*P,t[8]=x*P,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*P,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*P,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*d-e*a*d)*P,t[12]=R*P,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*P,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*m-e*a*m)*P,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,T=c*l,M=c*u,x=c*h,R=n.x,A=n.y,P=n.z;return r[0]=(1-(_+p))*R,r[1]=(d+x)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(f+p))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(g+M)*P,r[9]=(m-T)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const o=ji.set(r[4],r[5],r[6]).length(),a=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);const l=1/s,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Fn,c=!1){const l=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Fn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===js)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Fn,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Fn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===js)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new w,yn=new _e,qf=new w(0,0,0),$f=new w(1,1,1),oi=new w,Ss=new w,cn=new w,cl=new _e,ll=new us;class zn{constructor(t=0,e=0,n=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zf=0;const hl=new w,Qi=new us,Yn=new _e,Es=new w,Nr=new w,Kf=new w,Jf=new us,ul=new w(1,0,0),fl=new w(0,1,0),dl=new w(0,0,1),pl={type:"added"},jf={type:"removed"},tr={type:"childadded",child:null},ko={type:"childremoved",child:null};class ke extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new w,e=new zn,n=new us,r=new w(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(ul,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return hl.copy(t).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ul,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Nr,Es,this.up):Yn.lookAt(Es,Nr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pl),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pl),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ke.DEFAULT_UP=new w(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new w,qn=new w,Go=new w,$n=new w,er=new w,nr=new w,ml=new w,Vo=new w,Wo=new w,Xo=new w,Yo=new fe,qo=new fe,$o=new fe;class Tn{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),qn.subVectors(n,e),Go.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(qn),c=Sn.dot(Go),l=qn.dot(qn),u=qn.dot(Go),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Yo.setScalar(0),qo.setScalar(0),$o.setScalar(0),Yo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Yo,s.x),o.addScaledVector(qo,s.y),o.addScaledVector($o,s.z),o}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),qn.subVectors(t,e),Sn.cross(qn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,n),nr.subVectors(s,n),Vo.subVectors(t,n);const c=er.dot(Vo),l=nr.dot(Vo);if(c<=0&&l<=0)return e.copy(n);Wo.subVectors(t,r);const u=er.dot(Wo),h=nr.dot(Wo);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(er,o);Xo.subVectors(t,s);const d=er.dot(Xo),g=nr.dot(Xo);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(nr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ml.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(ml,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=Ac(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zo(o,s,t+1/3),this.g=Zo(o,s,t),this.b=Zo(o,s,t-1/3)}return ce.colorSpaceToWorking(this,r),this}setStyle(t,e=Se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ce.workingToColorSpace(We.copy(this),t),Math.round(ne(We.r*255,0,255))*65536+Math.round(ne(We.g*255,0,255))*256+Math.round(ne(We.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(We.copy(this),e);const n=We.r,r=We.g,s=We.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Se){ce.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,r=We.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Ts);const n=Zr(ai.h,Ts.h,e),r=Zr(ai.s,Ts.s,e),s=Zr(ai.l,Ts.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Qt;Qt.NAMES=Oh;let Qf=0;class Rr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=pr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class re extends Rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new w,ws=new dt;let td=0;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:td++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),t}}class Bh extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ed=0;const pn=new _e,Ko=new ke,ir=new w,ln=new Wi,Fr=new Wi,ze=new w;class Ue extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?zh:Bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,Fr.min),ln.expandByPoint(ze),ze.addVectors(ln.max,Fr.max),ln.expandByPoint(ze)):(ln.expandByPoint(Fr.min),ln.expandByPoint(Fr.max))}ln.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(t,l),ze.add(ir)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new w,c[I]=new w;const l=new w,u=new w,h=new w,f=new dt,d=new dt,g=new dt,_=new w,m=new w;function p(I,E,S){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[I].add(_),a[E].add(_),a[S].add(_),c[I].add(m),c[E].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let I=0,E=T.length;I<E;++I){const S=T[I],C=S.start,U=S.count;for(let z=C,Y=C+U;z<Y;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new w,x=new w,R=new w,A=new w;function P(I){R.fromBufferAttribute(r,I),A.copy(R);const E=a[I];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const C=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,C)}for(let I=0,E=T.length;I<E;++I){const S=T[I],C=S.start,U=S.count;for(let z=C,Y=C+U;z<Y;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,u=new w,h=new w;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new _e,bi=new fs,bs=new Eo,_l=new w,As=new w,Rs=new w,Cs=new w,Jo=new w,Ps=new w,vl=new w,Ls=new w;class ct extends ke{constructor(t=new Ue,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Jo.fromBufferAttribute(h,t),o?Ps.addScaledVector(Jo,u):Ps.addScaledVector(Jo.sub(e),u))}e.add(Ps)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(bs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(bs,_l)===null||bi.origin.distanceToSquared(_l)>(t.far-t.near)**2))&&(gl.copy(s).invert(),bi.copy(t.ray).applyMatrix4(gl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,R=M;x<R;x+=3){const A=a.getX(x),P=a.getX(x+1),I=a.getX(x+2);r=Is(this,p,t,n,l,u,h,A,P,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);r=Is(this,o,t,n,l,u,h,T,M,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,R=M;x<R;x+=3){const A=x,P=x+1,I=x+2;r=Is(this,p,t,n,l,u,h,A,P,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,M=m+1,x=m+2;r=Is(this,o,t,n,l,u,h,T,M,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function nd(i,t,e,n,r,s,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===_i,a),c===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:i}}function Is(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,As),i.getVertexPosition(c,Rs),i.getVertexPosition(l,Cs);const u=nd(i,t,e,n,As,Rs,Cs,vl);if(u){const h=new w;Tn.getBarycoord(vl,As,Rs,Cs,h),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,c,l,h,new dt)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,c,l,h,new dt)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new w,materialIndex:0};Tn.getNormal(As,Rs,Cs,f.normal),u.face=f,u.barycoord=h}return u}class Ln extends Ue{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function g(_,m,p,T,M,x,R,A,P,I,E){const S=x/P,C=R/I,U=x/2,z=R/2,Y=A/2,H=P+1,V=I+1;let J=0,W=0;const gt=new w;for(let yt=0;yt<V;yt++){const Rt=yt*C-z;for(let $t=0;$t<H;$t++){const B=$t*S-U;gt[_]=B*T,gt[m]=Rt*M,gt[p]=Y,l.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=A>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push($t/P),h.push(1-yt/I),J+=1}}for(let yt=0;yt<I;yt++)for(let Rt=0;Rt<P;Rt++){const $t=f+Rt+H*yt,B=f+Rt+H*(yt+1),K=f+(Rt+1)+H*(yt+1),Tt=f+(Rt+1)+H*yt;c.push($t,B,Tt),c.push(B,K,Tt),W+=6}a.addGroup(d,W,E),d+=W,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Sr(i[e]);for(const r in n)t[r]=n[r]}return t}function id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const kh={clone:Sr,merge:Ze};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gh extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new w,xl=new dt,Ml=new dt;class sn extends Gh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,xl,Ml),e.subVectors(Ml,xl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,sr=1;class od extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(rr,sr,t,e);r.layers=this.layers,this.add(r);const s=new sn(rr,sr,t,e);s.layers=this.layers,this.add(s);const o=new sn(rr,sr,t,e);o.layers=this.layers,this.add(o);const a=new sn(rr,sr,t,e);a.layers=this.layers,this.add(a);const c=new sn(rr,sr,t,e);c.layers=this.layers,this.add(c);const l=new sn(rr,sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vh extends Qe{constructor(t=[],e=xr,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ad extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Vh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ln(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:pi});s.uniforms.tEquirect.value=e;const o=new ct(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Nn),new od(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Xt extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cd={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Pc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new Pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ld extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Qo=new w,hd=new w,ud=new jt;class hi{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Qo.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),r=this.coplanarPoint(Qo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Eo,fd=new dt(.5,.5),Ds=new w;class Lc{constructor(t=new hi,e=new hi,n=new hi,r=new hi,s=new hi,o=new hi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],M=s[13],x=s[14],R=s[15];if(r[0].setComponents(l-o,d-u,p-g,R-T).normalize(),r[1].setComponents(l+o,d+u,p+g,R+T).normalize(),r[2].setComponents(l+a,d+h,p+_,R+M).normalize(),r[3].setComponents(l-a,d-h,p-_,R-M).normalize(),n)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,d-f,p-m,R-x).normalize();else if(r[4].setComponents(l-c,d-f,p-m,R-x).normalize(),e===Fn)r[5].setComponents(l+c,d+f,p+m,R+x).normalize();else if(e===js)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);const e=fd.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ds.x=r.normal.x>0?t.max.x:t.min.x,Ds.y=r.normal.y>0?t.max.y:t.min.y,Ds.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ic extends Rr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const to=new w,eo=new w,yl=new _e,Or=new fs,Us=new Eo,ta=new w,Sl=new w;class Dc extends ke{constructor(t=new Ue,e=new Ic){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)to.fromBufferAttribute(e,r-1),eo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=to.distanceTo(eo);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Us.radius+=s,t.ray.intersectsSphere(Us)===!1)return;yl.copy(r).invert(),Or.copy(t.ray).applyMatrix4(yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),T=u.getX(_+1),M=Ns(this,t,Or,c,p,T,_);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ns(this,t,Or,c,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=Ns(this,t,Or,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Ns(this,t,Or,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ns(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(to.fromBufferAttribute(a,r),eo.fromBufferAttribute(a,s),e.distanceSqToSegment(to,eo,ta,Sl)>n)return;ta.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:Sl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const El=new w,Tl=new w;class dd extends Dc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)El.fromBufferAttribute(e,r),Tl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+El.distanceTo(Tl);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class un extends Qe{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wh extends Qe{constructor(t,e,n=Hi,r,s,o,a=An,c=An,l,u=es,h=1){if(u!==es&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xh extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Uc extends Ue{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new w,u=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ve extends Ue{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(d,2));function T(){const x=new w,R=new w;let A=0;const P=(e-t)/n;for(let I=0;I<=s;I++){const E=[],S=I/s,C=S*(e-t)+t;for(let U=0;U<=r;U++){const z=U/r,Y=z*c+a,H=Math.sin(Y),V=Math.cos(Y);R.x=C*H,R.y=-S*n+m,R.z=C*V,h.push(R.x,R.y,R.z),x.set(H,P,V).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-S),E.push(g++)}_.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const S=_[E][I],C=_[E+1][I],U=_[E+1][I+1],z=_[E][I+1];(t>0||E!==0)&&(u.push(S,C,z),A+=3),(e>0||E!==s-1)&&(u.push(C,U,z),A+=3)}l.addGroup(p,A,0),p+=A}function M(x){const R=g,A=new dt,P=new w;let I=0;const E=x===!0?t:e,S=x===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const Y=U/r*c+a,H=Math.cos(Y),V=Math.sin(Y);P.x=E*V,P.y=m*S,P.z=E*H,h.push(P.x,P.y,P.z),f.push(0,S,0),A.x=H*.5+.5,A.y=V*.5*S+.5,d.push(A.x,A.y),g++}for(let U=0;U<r;U++){const z=R+U,Y=C+U;x===!0?u.push(Y,Y+1,z):u.push(Y+1,Y,z),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends ve{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new To(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new dt:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new w,r=[],s=[],o=[],a=new w,c=new _e;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ne(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ne(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends Hn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pd extends Nc{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Fs=new w,ea=new Fc,na=new Fc,ia=new Fc;class no extends Hn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new w){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Fs.subVectors(r[0],r[1]).add(r[0]),l=Fs);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Fs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ea.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),na.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),ia.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),na.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),ia.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ea.calc(c),na.calc(c),ia.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new w().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wl(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function md(i,t){const e=1-i;return e*e*t}function gd(i,t){return 2*(1-i)*i*t}function _d(i,t){return i*i*t}function Kr(i,t,e,n){return md(i,t)+gd(i,e)+_d(i,n)}function vd(i,t){const e=1-i;return e*e*e*t}function xd(i,t){const e=1-i;return 3*e*e*i*t}function Md(i,t){return 3*(1-i)*i*i*t}function yd(i,t){return i*i*i*t}function Jr(i,t,e,n,r){return vd(i,t)+xd(i,e)+Md(i,n)+yd(i,r)}class Yh extends Hn{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,r.x,s.x,o.x,a.x),Jr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sd extends Hn{constructor(t=new w,e=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new w){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,r.x,s.x,o.x,a.x),Jr(t,r.y,s.y,o.y,a.y),Jr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Hn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ed extends Hn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Hn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Kr(t,r.x,s.x,o.x),Kr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Hn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Kr(t,r.x,s.x,o.x),Kr(t,r.y,s.y,o.y),Kr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(wl(a,c.x,l.x,u.x,h.x),wl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:pd,CatmullRomCurve3:no,CubicBezierCurve:Yh,CubicBezierCurve3:Sd,EllipseCurve:Nc,LineCurve:qh,LineCurve3:Ed,QuadraticBezierCurve:$h,QuadraticBezierCurve3:Zh,SplineCurve:Kh});class Td extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new io[r.type]().fromJSON(r))}return this}}class ro extends Td{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new $h(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Yh(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new Nc(t,e,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cr extends ro{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new ro().fromJSON(r))}return this}}function wd(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Jh(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Pd(i,t,s,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return ss(s,o,e,a,c,l,0),o}function Jh(i,t,e,n,r){let s;if(r===kd(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=bl(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=bl(o/n|0,i[o],i[o+1],s);return s&&Er(s,s.next)&&(as(s),s=s.next),s}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||Pe(e.prev,e,e.next)===0)){if(as(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ss(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Nd(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Ad(i,n,r,s):bd(i)){t.push(c.i,i.i,l.i),as(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rd(ki(i),t),ss(i,t,e,n,r,s,2)):o===2&&Cd(i,t,e,n,r,s):ss(ki(i),t,e,n,r,s,1);break}}}function bd(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(r,s,o),h=Math.min(a,c,l),f=Math.max(r,s,o),d=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Wr(r,a,s,c,o,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ad(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Pe(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),_=Math.max(a,c,l),m=Math.max(u,h,f),p=ec(d,g,t,e,n),T=ec(_,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=T;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Wr(a,u,c,h,l,f,M.x,M.y)&&Pe(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Wr(a,u,c,h,l,f,x.x,x.y)&&Pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Wr(a,u,c,h,l,f,M.x,M.y)&&Pe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=T;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Wr(a,u,c,h,l,f,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rd(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Er(n,r)&&Qh(n,e,e.next,r)&&os(n,r)&&os(r,n)&&(t.push(n.i,e.i,r.i),as(e),as(e.next),e=i=r),e=e.next}while(e!==i);return ki(e)}function Cd(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bd(o,a)){let c=tu(o,a);o=ki(o,o.next),c=ki(c,c.next),ss(o,t,e,n,r,s,0),ss(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Pd(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Jh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Od(l))}r.sort(Ld);for(let s=0;s<r.length;s++)e=Id(r[s],e);return e}function Ld(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Id(i,t){const e=Dd(i,t);if(!e)return t;const n=tu(e,i);return ki(n,n.next),ki(e,e.next)}function Dd(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&jh(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){const h=Math.abs(r-e.y)/(n-e.x);os(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Ud(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Ud(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Nd(i,t,e,n){let r=i;do r.z===0&&(r.z=ec(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Fd(r)}function Fd(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ec(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Od(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jh(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Wr(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&jh(i,t,e,n,r,s,o,a)}function Bd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zd(i,t)&&(os(i,t)&&os(t,i)&&Hd(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Er(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function Qh(i,t,e,n){const r=Bs(Pe(i,t,e)),s=Bs(Pe(i,t,n)),o=Bs(Pe(e,n,i)),a=Bs(Pe(e,n,t));return!!(r!==s&&o!==a||r===0&&Os(i,e,t)||s===0&&Os(i,n,t)||o===0&&Os(e,i,n)||a===0&&Os(e,t,n))}function Os(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bs(i){return i>0?1:i<0?-1:0}function zd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function os(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Hd(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tu(i,t){const e=nc(i.i,i.x,i.y),n=nc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function bl(i,t,e,n){const r=nc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function as(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kd(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Gd{static triangulate(t,e,n=2){return wd(t,e,n)}}class ur{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return ur.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Al(t),Rl(n,t);let o=t.length;e.forEach(Al);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Rl(n,e[c]);const a=Gd.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Al(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xi extends Ue{constructor(t=new Cr([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Vd;let M,x=!1,R,A,P,I;p&&(M=p.getSpacedPoints(u),x=!0,f=!1,R=p.computeFrenetFrames(u,!1),A=new w,P=new w,I=new w),f||(m=0,d=0,g=0,_=0);const E=a.extractPoints(l);let S=E.shape;const C=E.holes;if(!ur.isClockWise(S)){S=S.reverse();for(let st=0,et=C.length;st<et;st++){const tt=C[st];ur.isClockWise(tt)&&(C[st]=tt.reverse())}}function z(st){const tt=10000000000000001e-36;let j=st[0];for(let vt=1;vt<=st.length;vt++){const lt=vt%st.length,xt=st[lt],Zt=xt.x-j.x,qt=xt.y-j.y,b=Zt*Zt+qt*qt,v=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(j.x),Math.abs(j.y)),O=tt*v*v;if(b<=O){st.splice(lt,1),vt--;continue}j=xt}}z(S),C.forEach(z);const Y=C.length,H=S;for(let st=0;st<Y;st++){const et=C[st];S=S.concat(et)}function V(st,et,tt){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(et,tt)}const J=S.length;function W(st,et,tt){let j,vt,lt;const xt=st.x-et.x,Zt=st.y-et.y,qt=tt.x-st.x,b=tt.y-st.y,v=xt*xt+Zt*Zt,O=xt*b-Zt*qt;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(v),ot=Math.sqrt(qt*qt+b*b),Z=et.x-Zt/q,Ot=et.y+xt/q,_t=tt.x-b/ot,Ut=tt.y+qt/ot,Nt=((_t-Z)*b-(Ut-Ot)*qt)/(xt*b-Zt*qt);j=Z+xt*Nt-st.x,vt=Ot+Zt*Nt-st.y;const ht=j*j+vt*vt;if(ht<=2)return new dt(j,vt);lt=Math.sqrt(ht/2)}else{let q=!1;xt>Number.EPSILON?qt>Number.EPSILON&&(q=!0):xt<-Number.EPSILON?qt<-Number.EPSILON&&(q=!0):Math.sign(Zt)===Math.sign(b)&&(q=!0),q?(j=-Zt,vt=xt,lt=Math.sqrt(v)):(j=xt,vt=Zt,lt=Math.sqrt(v/2))}return new dt(j/lt,vt/lt)}const gt=[];for(let st=0,et=H.length,tt=et-1,j=st+1;st<et;st++,tt++,j++)tt===et&&(tt=0),j===et&&(j=0),gt[st]=W(H[st],H[tt],H[j]);const yt=[];let Rt,$t=gt.concat();for(let st=0,et=Y;st<et;st++){const tt=C[st];Rt=[];for(let j=0,vt=tt.length,lt=vt-1,xt=j+1;j<vt;j++,lt++,xt++)lt===vt&&(lt=0),xt===vt&&(xt=0),Rt[j]=W(tt[j],tt[lt],tt[xt]);yt.push(Rt),$t=$t.concat(Rt)}let B;if(m===0)B=ur.triangulateShape(H,C);else{const st=[],et=[];for(let tt=0;tt<m;tt++){const j=tt/m,vt=d*Math.cos(j*Math.PI/2),lt=g*Math.sin(j*Math.PI/2)+_;for(let xt=0,Zt=H.length;xt<Zt;xt++){const qt=V(H[xt],gt[xt],lt);It(qt.x,qt.y,-vt),j===0&&st.push(qt)}for(let xt=0,Zt=Y;xt<Zt;xt++){const qt=C[xt];Rt=yt[xt];const b=[];for(let v=0,O=qt.length;v<O;v++){const q=V(qt[v],Rt[v],lt);It(q.x,q.y,-vt),j===0&&b.push(q)}j===0&&et.push(b)}}B=ur.triangulateShape(st,et)}const K=B.length,Tt=g+_;for(let st=0;st<J;st++){const et=f?V(S[st],$t[st],Tt):S[st];x?(P.copy(R.normals[0]).multiplyScalar(et.x),A.copy(R.binormals[0]).multiplyScalar(et.y),I.copy(M[0]).add(P).add(A),It(I.x,I.y,I.z)):It(et.x,et.y,0)}for(let st=1;st<=u;st++)for(let et=0;et<J;et++){const tt=f?V(S[et],$t[et],Tt):S[et];x?(P.copy(R.normals[st]).multiplyScalar(tt.x),A.copy(R.binormals[st]).multiplyScalar(tt.y),I.copy(M[st]).add(P).add(A),It(I.x,I.y,I.z)):It(tt.x,tt.y,h/u*st)}for(let st=m-1;st>=0;st--){const et=st/m,tt=d*Math.cos(et*Math.PI/2),j=g*Math.sin(et*Math.PI/2)+_;for(let vt=0,lt=H.length;vt<lt;vt++){const xt=V(H[vt],gt[vt],j);It(xt.x,xt.y,h+tt)}for(let vt=0,lt=C.length;vt<lt;vt++){const xt=C[vt];Rt=yt[vt];for(let Zt=0,qt=xt.length;Zt<qt;Zt++){const b=V(xt[Zt],Rt[Zt],j);x?It(b.x,b.y+M[u-1].y,M[u-1].x+tt):It(b.x,b.y,h+tt)}}}k(),Q();function k(){const st=r.length/3;if(f){let et=0,tt=J*et;for(let j=0;j<K;j++){const vt=B[j];At(vt[2]+tt,vt[1]+tt,vt[0]+tt)}et=u+m*2,tt=J*et;for(let j=0;j<K;j++){const vt=B[j];At(vt[0]+tt,vt[1]+tt,vt[2]+tt)}}else{for(let et=0;et<K;et++){const tt=B[et];At(tt[2],tt[1],tt[0])}for(let et=0;et<K;et++){const tt=B[et];At(tt[0]+J*u,tt[1]+J*u,tt[2]+J*u)}}n.addGroup(st,r.length/3-st,0)}function Q(){const st=r.length/3;let et=0;pt(H,et),et+=H.length;for(let tt=0,j=C.length;tt<j;tt++){const vt=C[tt];pt(vt,et),et+=vt.length}n.addGroup(st,r.length/3-st,1)}function pt(st,et){let tt=st.length;for(;--tt>=0;){const j=tt;let vt=tt-1;vt<0&&(vt=st.length-1);for(let lt=0,xt=u+m*2;lt<xt;lt++){const Zt=J*lt,qt=J*(lt+1),b=et+j+Zt,v=et+vt+Zt,O=et+vt+qt,q=et+j+qt;Yt(b,v,O,q)}}}function It(st,et,tt){c.push(st),c.push(et),c.push(tt)}function At(st,et,tt){he(st),he(et),he(tt);const j=r.length/3,vt=T.generateTopUV(n,r,j-3,j-2,j-1);L(vt[0]),L(vt[1]),L(vt[2])}function Yt(st,et,tt,j){he(st),he(et),he(j),he(et),he(tt),he(j);const vt=r.length/3,lt=T.generateSideWallUV(n,r,vt-6,vt-3,vt-2,vt-1);L(lt[0]),L(lt[1]),L(lt[3]),L(lt[1]),L(lt[2]),L(lt[3])}function he(st){r.push(c[st*3+0]),r.push(c[st*3+1]),r.push(c[st*3+2])}function L(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wd(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new io[r.type]().fromJSON(r)),new Xi(n,t.options)}}const Vd={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new dt(s,o),new dt(a,c),new dt(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-h),new dt(f,1-g),new dt(_,1-p)]:[new dt(a,1-c),new dt(u,1-h),new dt(d,1-g),new dt(m,1-p)]}};function Wd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oc extends Ue{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ne(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/e,h=new w,f=new dt,d=new w,g=new w,_=new w;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let T=0;T<=e;T++){const M=n+T*u*r,x=Math.sin(M),R=Math.cos(M);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*x,h.y=t[A].y,h.z=t[A].x*R,o.push(h.x,h.y,h.z),f.x=T/e,f.y=A/(t.length-1),a.push(f.x,f.y);const P=c[3*A+0]*x,I=c[3*A+1],E=c[3*A+0]*R;l.push(P,I,E)}}for(let T=0;T<e;T++)for(let M=0;M<t.length-1;M++){const x=M+T*t.length,R=x,A=x+t.length,P=x+t.length+1,I=x+1;s.push(R,A,I),s.push(P,I,A)}this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.points,t.segments,t.phiStart,t.phiLength)}}class be extends Ue{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let M=0;M<l;M++){const x=M*h-s;g.push(x,-T,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const M=T+l*p,x=T+l*(p+1),R=T+1+l*(p+1),A=T+1+l*p;d.push(M,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}class gi extends Ue{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new w,f=new w,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;h.x=-t*Math.cos(r+A*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(r+A*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-M),T.push(l++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const M=u[p][T+1],x=u[p][T],R=u[p+1][T],A=u[p+1][T+1];(p!==0||o>0)&&d.push(M,x,A),(p!==n-1||c<Math.PI)&&d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tn extends Ue{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new w,h=new w,f=new w;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,T=(r+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cs extends Ue{constructor(t=new Zh(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new dt;let u=new w;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(d,2));function _(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),T(),p()}function m(M){u=t.getPointAt(M/e,u);const x=o.normals[M],R=o.binormals[M];for(let A=0;A<=r;A++){const P=A/r*Math.PI*2,I=Math.sin(P),E=-Math.cos(P);c.x=E*x.x+I*R.x,c.y=E*x.y+I*R.y,c.z=E*x.z+I*R.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=r;x++){const R=(r+1)*(M-1)+(x-1),A=(r+1)*M+(x-1),P=(r+1)*M+x,I=(r+1)*(M-1)+x;g.push(R,A,I),g.push(A,P,I)}}function T(){for(let M=0;M<=e;M++)for(let x=0;x<=r;x++)l.x=M/e,l.y=x/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cs(new io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pe extends Rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eu extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xd extends Rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yd extends Rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wo extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qd extends wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new _e,Cl=new w,Pl=new w;class nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ll=new _e,Br=new w,sa=new w;class $d extends nu{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Br.setFromMatrixPosition(t.matrixWorld),n.position.copy(Br),sa.copy(n.position),sa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sa),n.updateMatrixWorld(),r.makeTranslation(-Br.x,-Br.y,-Br.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,n.coordinateSystem,n.reversedDepth)}}class Mi extends wo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $d}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iu extends Gh{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zd extends nu{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Il extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Zd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kd extends wo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jd extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Dl=new _e;class Qd{constructor(t,e,n=0,r=1/0){this.ray=new fs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dl),this}intersectObject(t,e=!0,n=[]){return ic(t,this,n,e),n.sort(Ul),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ic(t[r],this,n,e);return n.sort(Ul),n}}function Ul(i,t){return i.distance-t.distance}function ic(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)ic(s[o],t,e,!0)}}function Nl(i,t,e,n){const r=tp(n);switch(e){case Ch:return i*t;case Lh:return i*t/r.components*r.byteLength;case Tc:return i*t/r.components*r.byteLength;case Ih:return i*t*2/r.components*r.byteLength;case wc:return i*t*2/r.components*r.byteLength;case Ph:return i*t*3/r.components*r.byteLength;case bn:return i*t*4/r.components*r.byteLength;case bc:return i*t*4/r.components*r.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case La:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $a:case Za:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ja:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(i){switch(i){case Bn:case wh:return{byteLength:1,components:1};case Qr:case bh:case br:return{byteLength:2,components:1};case Sc:case Ec:return{byteLength:2,components:4};case Hi:case yc:case jn:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function ru(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ep(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,t0=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,lm=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,xm=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,bm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Cm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Um=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:rp,alphamap_pars_fragment:sp,alphatest_fragment:op,alphatest_pars_fragment:ap,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:fp,beginnormal_vertex:dp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:Mp,color_fragment:yp,color_pars_fragment:Sp,color_pars_vertex:Ep,color_vertex:Tp,common:wp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:$p,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:Hp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:Yp,lights_pars_begin:qp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:a0,map_fragment:c0,map_pars_fragment:l0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:d0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:_0,morphtarget_vertex:v0,normal_fragment_begin:x0,normal_fragment_maps:M0,normal_pars_fragment:y0,normal_pars_vertex:S0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:P0,premultiplied_alpha_fragment:L0,project_vertex:I0,dithering_fragment:D0,dithering_pars_fragment:U0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:z0,shadowmask_pars_fragment:H0,skinbase_vertex:k0,skinning_pars_vertex:G0,skinning_vertex:V0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:Y0,tonemapping_fragment:q0,tonemapping_pars_fragment:$0,transmission_fragment:Z0,transmission_pars_fragment:K0,uv_pars_fragment:J0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:rm,cube_vert:sm,cube_frag:om,depth_vert:am,depth_frag:cm,distanceRGBA_vert:lm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:fm,linedashed_vert:dm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:xm,meshmatcap_frag:Mm,meshnormal_vert:ym,meshnormal_frag:Sm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:wm,meshphysical_frag:bm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Im,sprite_vert:Dm,sprite_frag:Um},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Un={basic:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ze([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ze([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ze([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ze([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ze([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ze([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ze([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ze([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ze([St.common,St.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ze([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Un.physical={uniforms:Ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const zs={r:0,b:0,g:0},Ri=new zn,Nm=new _e;function Fm(i,t,e,n,r,s,o){const a=new Qt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const R=g(M);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===So)?(u===void 0&&(u=new ct(new Ln(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Sr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(Ri)),u.material.toneMapped=ce.getTransfer(R.colorSpace)!==ge,(h!==R||f!==R.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new ct(new be(2,2),new vn({name:"BackgroundMaterial",uniforms:Sr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ce.getTransfer(R.colorSpace)!==ge,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,f=R.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(zs,Hh(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m,dispose:T}}function Om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(S,C,U,z,Y){let H=!1;const V=h(z,U,C);s!==V&&(s=V,l(s.object)),H=d(S,z,U,Y),H&&g(S,z,U,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,C,U,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,C,U){const z=U.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let H=Y[C.id];H===void 0&&(H={},Y[C.id]=H);let V=H[z];return V===void 0&&(V=f(c()),H[z]=V),V}function f(S){const C=[],U=[],z=[];for(let Y=0;Y<e;Y++)C[Y]=0,U[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,C,U,z){const Y=s.attributes,H=C.attributes;let V=0;const J=U.getAttributes();for(const W in J)if(J[W].location>=0){const yt=Y[W];let Rt=H[W];if(Rt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor)),yt===void 0||yt.attribute!==Rt||Rt&&yt.data!==Rt.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function g(S,C,U,z){const Y={},H=C.attributes;let V=0;const J=U.getAttributes();for(const W in J)if(J[W].location>=0){let yt=H[W];yt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor));const Rt={};Rt.attribute=yt,yt&&yt.data&&(Rt.data=yt.data),Y[W]=Rt,V++}s.attributes=Y,s.attributesNum=V,s.index=z}function _(){const S=s.newAttributes;for(let C=0,U=S.length;C<U;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const U=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;U[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),Y[S]!==C&&(i.vertexAttribDivisor(S,C),Y[S]=C)}function T(){const S=s.newAttributes,C=s.enabledAttributes;for(let U=0,z=C.length;U<z;U++)C[U]!==S[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function M(S,C,U,z,Y,H,V){V===!0?i.vertexAttribIPointer(S,C,U,Y,H):i.vertexAttribPointer(S,C,U,z,Y,H)}function x(S,C,U,z){_();const Y=z.attributes,H=U.getAttributes(),V=C.defaultAttributeValues;for(const J in H){const W=H[J];if(W.location>=0){let gt=Y[J];if(gt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const yt=gt.normalized,Rt=gt.itemSize,$t=t.get(gt);if($t===void 0)continue;const B=$t.buffer,K=$t.type,Tt=$t.bytesPerElement,k=K===i.INT||K===i.UNSIGNED_INT||gt.gpuType===yc;if(gt.isInterleavedBufferAttribute){const Q=gt.data,pt=Q.stride,It=gt.offset;if(Q.isInstancedInterleavedBuffer){for(let At=0;At<W.locationSize;At++)p(W.location+At,Q.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);i.bindBuffer(i.ARRAY_BUFFER,B);for(let At=0;At<W.locationSize;At++)M(W.location+At,Rt/W.locationSize,K,yt,pt*Tt,(It+Rt/W.locationSize*At)*Tt,k)}else{if(gt.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q,gt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,B);for(let Q=0;Q<W.locationSize;Q++)M(W.location+Q,Rt/W.locationSize,K,yt,Rt*Tt,Rt/W.locationSize*Q*Tt,k)}}else if(V!==void 0){const yt=V[J];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(W.location,yt);break;case 3:i.vertexAttrib3fv(W.location,yt);break;case 4:i.vertexAttrib4fv(W.location,yt);break;default:i.vertexAttrib1fv(W.location,yt)}}}}T()}function R(){I();for(const S in n){const C=n[S];for(const U in C){const z=C[U];for(const Y in z)u(z[Y].object),delete z[Y];delete C[U]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const U in C){const z=C[U];for(const Y in z)u(z[Y].object),delete z[Y];delete C[U]}delete n[S.id]}function P(S){for(const C in n){const U=n[C];if(U[S.id]===void 0)continue;const z=U[S.id];for(const Y in z)u(z[Y].object),delete z[Y];delete U[S.id]}}function I(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Bm(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==jn&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Hm(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new hi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,M=T*4;let x=p.clippingState||null;c.value=x,x=u(g,f,M,d);for(let R=0;R!==M;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function km(i){let t=new WeakMap;function e(o,a){return a===Ks?o.mapping=xr:a===wa&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ks||a===wa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ad(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const fr=4,Fl=[.125,.215,.35,.446,.526,.582],Di=20,oa=new iu,Ol=new Qt;let aa=null,ca=0,la=0,ha=!1;const Pi=(1+Math.sqrt(5))/2,or=1/Pi,Bl=[new w(-Pi,or,0),new w(Pi,or,0),new w(-or,0,Pi),new w(or,0,Pi),new w(0,Pi,-or),new w(0,Pi,or),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Gm=new w;class zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Gm}=s;aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,ca,la),this._renderer.xr.enabled=ha,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:br,format:bn,colorSpace:yr,depthBuffer:!1},r=Hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(s)),this._blurMaterial=Wm(s,t,e)}return r}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,r,s){const c=new sn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ol),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new re({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new ct(new Ln,_);let p=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,p=!0):(_.color.copy(Ol),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const R=this._cubeSize;Hs(r,x*R,M>2?R:0,R,R),h.setRenderTarget(r),p&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===xr||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bl[(r-s-1)%Bl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ct(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let T=0;for(let P=0;P<Di;++P){const I=P/_,E=Math.exp(-I*I/2);p.push(E),P===0?T+=E:P<m&&(T+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[r],R=3*x*(r>M-fr?r-M+fr:0),A=4*(this._cubeSize-x);Hs(e,R,A,3*x,2*x),c.setRenderTarget(e),c.render(h,oa)}}function Vm(i){const t=[],e=[],n=[];let r=i;const s=i-fr+1+Fl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-fr?c=Fl[o-i+fr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const P=A%3*2/3-1,I=A>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];T.set(E,_*g*A),M.set(f,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const R=new Ue;R.setAttribute("position",new hn(T,_)),R.setAttribute("uv",new hn(M,m)),R.setAttribute("faceIndex",new hn(x,p)),t.push(R),r>fr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hl(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Wm(i,t,e){const n=new Float32Array(Di),r=new w(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function kl(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Gl(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function Xm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ks||c===wa,u=c===xr||c===Mr;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zl(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new zl(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qm(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let M=0,x=T.length;M<x;M+=3){const R=T[M+0],A=T[M+1],P=T[M+2];f.push(R,A,A,P,P,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const R=M+0,A=M+1,P=M+2;f.push(R,A,A,P,P,R)}}else return;const m=new(Nh(f)?zh:Bh)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $m(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Zm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Km(i,t,e){const n=new WeakMap,r=new fe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*A*4*h),I=new Fh(P,R,A,h);I.type=jn,I.needsUpdate=!0;const E=x*4;for(let C=0;C<h;C++){const U=p[C],z=T[C],Y=M[C],H=R*A*4*C;for(let V=0;V<U.count;V++){const J=V*E;g===!0&&(r.fromBufferAttribute(U,V),P[H+J+0]=r.x,P[H+J+1]=r.y,P[H+J+2]=r.z,P[H+J+3]=0),_===!0&&(r.fromBufferAttribute(z,V),P[H+J+4]=r.x,P[H+J+5]=r.y,P[H+J+6]=r.z,P[H+J+7]=0),m===!0&&(r.fromBufferAttribute(Y,V),P[H+J+8]=r.x,P[H+J+9]=r.y,P[H+J+10]=r.z,P[H+J+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new dt(R,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Jm(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const su=new Qe,Vl=new Wh(1,1),ou=new Fh,au=new Xf,cu=new Vh,Wl=[],Xl=[],Yl=new Float32Array(16),ql=new Float32Array(9),$l=new Float32Array(4);function Pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bo(i,t){let e=Xl[t];e===void 0&&(e=new Int32Array(t),Xl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),Be(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),Be(e,n)}}function rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),Be(e,n)}}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function dg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Vl.compareFunction=Uh,s=Vl):s=su,e.setTexture2D(t||s,r)}function pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||au,r)}function mg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||cu,r)}function gg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ou,r)}function _g(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return rg;case 5124:case 35670:return sg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return cg;case 5125:return lg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(i,t){i.uniform1fv(this.addr,t)}function xg(i,t){const e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){const e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function yg(i,t){const e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){const e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){const e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tg(i,t){const e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function bg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){const n=this.cache,r=t.length,s=bo(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||su,s[o])}function Ug(i,t,e){const n=this.cache,r=t.length,s=bo(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||au,s[o])}function Ng(i,t,e){const n=this.cache,r=t.length,s=bo(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||cu,s[o])}function Fg(i,t,e){const n=this.cache,r=t.length,s=bo(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ou,s[o])}function Og(i){switch(i){case 5126:return vg;case 35664:return xg;case 35665:return Mg;case 35666:return yg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return bg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Zl(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){const n=i.name,r=n.length;for(ua.lastIndex=0;;){const s=ua.exec(n),o=ua.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Zl(e,l===void 0?new Bg(a,i,t):new zg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Hg(a),Zl(e,h)),e=h}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);kg(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gg=37297;let Vg=0;function Wg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Jl=new jt;function Xg(i){ce._getMatrix(Jl,ce.workingColorSpace,i);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Wg(i.getShaderSource(t),a)}else return s}function Yg(i,t){const e=Xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qg(i,t){let e;switch(t){case sf:e="Linear";break;case of:e="Reinhard";break;case af:e="Cineon";break;case Eh:e="ACESFilmic";break;case lf:e="AgX";break;case hf:e="Neutral";break;case cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new w;function $g(){ce.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xr(i){return i!==""}function Ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(jg,t_)}const Qg=new Map;function t_(i,t){let e=te[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(e_,n_)}function n_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function i_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function r_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case Mr:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mr&&(t="ENVMAP_MODE_REFRACTION"),t}function o_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case nf:t="ENVMAP_BLENDING_MIX";break;case rf:t="ENVMAP_BLENDING_ADD";break}return t}function a_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c_(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=i_(e),l=r_(e),u=s_(e),h=o_(e),f=a_(e),d=Zg(e),g=Kg(s),_=r.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?te.tonemapping_pars_fragment:"",e.toneMapping!==mi?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),o=rc(o),o=Ql(o,e),o=th(o,e),a=rc(a),a=Ql(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,x=T+p+a,R=Kl(r,r.VERTEX_SHADER,M),A=Kl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(C){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(R)||"",Y=r.getShaderInfoLog(A)||"",H=U.trim(),V=z.trim(),J=Y.trim();let W=!0,gt=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,A);else{const yt=jl(r,R,"vertex"),Rt=jl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+yt+`
`+Rt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||J==="")&&(gt=!1);gt&&(C.diagnostics={runnable:W,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(R),r.deleteShader(A),I=new $s(r,_),E=Jg(r,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Gg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let l_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u_(t),e.set(t,n)),n}}class u_{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}}function f_(i,t,e,n,r,s,o){const a=new Cc,c=new h_,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,C,U,z){const Y=U.fog,H=z.geometry,V=E.isMeshStandardMaterial?U.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),W=J&&J.mapping===So?J.image.height:null,gt=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rt=yt!==void 0?yt.length:0;let $t=0;H.morphAttributes.position!==void 0&&($t=1),H.morphAttributes.normal!==void 0&&($t=2),H.morphAttributes.color!==void 0&&($t=3);let B,K,Tt,k;if(gt){const ue=Un[gt];B=ue.vertexShader,K=ue.fragmentShader}else B=E.vertexShader,K=E.fragmentShader,c.update(E),Tt=c.getVertexShaderID(E),k=c.getFragmentShaderID(E);const Q=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),It=z.isInstancedMesh===!0,At=z.isBatchedMesh===!0,Yt=!!E.map,he=!!E.matcap,L=!!J,st=!!E.aoMap,et=!!E.lightMap,tt=!!E.bumpMap,j=!!E.normalMap,vt=!!E.displacementMap,lt=!!E.emissiveMap,xt=!!E.metalnessMap,Zt=!!E.roughnessMap,qt=E.anisotropy>0,b=E.clearcoat>0,v=E.dispersion>0,O=E.iridescence>0,q=E.sheen>0,ot=E.transmission>0,Z=qt&&!!E.anisotropyMap,Ot=b&&!!E.clearcoatMap,_t=b&&!!E.clearcoatNormalMap,Ut=b&&!!E.clearcoatRoughnessMap,Nt=O&&!!E.iridescenceMap,ht=O&&!!E.iridescenceThicknessMap,bt=q&&!!E.sheenColorMap,Vt=q&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Et=!!E.specularColorMap,Jt=!!E.specularIntensityMap,D=ot&&!!E.transmissionMap,mt=ot&&!!E.thicknessMap,Mt=!!E.gradientMap,Pt=!!E.alphaMap,ut=E.alphaTest>0,nt=!!E.alphaHash,Ft=!!E.extensions;let Kt=mi;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Kt=i.toneMapping);const ye={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:K,defines:E.defines,customVertexShaderID:Tt,customFragmentShaderID:k,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:At,batchingColor:At&&z._colorsTexture!==null,instancing:It,instancingColor:It&&z.instanceColor!==null,instancingMorph:It&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:Yt,matcap:he,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:et,bumpMap:tt,normalMap:j,displacementMap:f&&vt,emissiveMap:lt,normalMapObjectSpace:j&&E.normalMapType===pf,normalMapTangentSpace:j&&E.normalMapType===Dh,metalnessMap:xt,roughnessMap:Zt,anisotropy:qt,anisotropyMap:Z,clearcoat:b,clearcoatMap:Ot,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ut,dispersion:v,iridescence:O,iridescenceMap:Nt,iridescenceThicknessMap:ht,sheen:q,sheenColorMap:bt,sheenRoughnessMap:Vt,specularMap:Bt,specularColorMap:Et,specularIntensityMap:Jt,transmission:ot,transmissionMap:D,thicknessMap:mt,gradientMap:Mt,opaque:E.transparent===!1&&E.blending===pr&&E.alphaToCoverage===!1,alphaMap:Pt,alphaTest:ut,alphaHash:nt,combine:E.combine,mapUv:Yt&&_(E.map.channel),aoMapUv:st&&_(E.aoMap.channel),lightMapUv:et&&_(E.lightMap.channel),bumpMapUv:tt&&_(E.bumpMap.channel),normalMapUv:j&&_(E.normalMap.channel),displacementMapUv:vt&&_(E.displacementMap.channel),emissiveMapUv:lt&&_(E.emissiveMap.channel),metalnessMapUv:xt&&_(E.metalnessMap.channel),roughnessMapUv:Zt&&_(E.roughnessMap.channel),anisotropyMapUv:Z&&_(E.anisotropyMap.channel),clearcoatMapUv:Ot&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&_(E.sheenRoughnessMap.channel),specularMapUv:Bt&&_(E.specularMap.channel),specularColorMapUv:Et&&_(E.specularColorMap.channel),specularIntensityMapUv:Jt&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:mt&&_(E.thicknessMap.channel),alphaMapUv:Pt&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(j||qt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Yt||Pt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Yt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===ge,decodeVideoTextureEmissive:lt&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(T(S,E),M(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function T(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let C;if(S){const U=Un[S];C=kh.clone(U.uniforms)}else C=E.uniforms;return C}function R(E,S){let C;for(let U=0,z=u.length;U<z;U++){const Y=u[U];if(Y.cacheKey===S){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new c_(i,S,E,s),u.push(C)),C}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:I}}function d_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ih(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(f||ih),r.length>1&&r.sort(f||ih)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function m_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new rh,i.set(n,[o])):r>=s.length?(o=new rh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Qt};break;case"SpotLight":e={position:new w,direction:new w,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function __(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let v_=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){const t=new g_,e=__(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const r=new w,s=new _e,o=new _e;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,M=0,x=0,R=0,A=0,P=0;l.sort(x_);for(let E=0,S=l.length;E<S;E++){const C=l[E],U=C.color,z=C.intensity,Y=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*z,h+=U.g*z,f+=U.b*z;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],z);P++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,W=e.get(C);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=C.shadow.matrix,T++}n.directional[d]=V,d++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(z),V.distance=Y,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const J=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,x++}_++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(U).multiplyScalar(z),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const J=C.shadow,W=e.get(C);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(z),V.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=P,n.version=v_++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function sh(i){const t=new M_(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function y_(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new sh(i),t.set(r,[a])):s>=o.length?(a=new sh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function T_(i,t,e){let n=new Lc;const r=new dt,s=new dt,o=new fe,a=new Xd({depthPacking:df}),c=new Yd,l={},u=e.maxTextureSize,h={[_i]:je,[je]:_i,[Ie]:Ie},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:S_,fragmentShader:E_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(pi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Zn&&this.type===Zn,Y=p===Zn&&this.type!==Zn;for(let H=0,V=A.length;H<V;H++){const J=A[H],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const gt=W.getFrameExtents();if(r.multiply(gt),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/gt.x),r.x=s.x*gt.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/gt.y),r.y=s.y*gt.y,W.mapSize.y=s.y)),W.map===null||z===!0||Y===!0){const Rt=this.type!==Zn?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new xi(r.x,r.y,Rt),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const yt=W.getViewportCount();for(let Rt=0;Rt<yt;Rt++){const $t=W.getViewport(Rt);o.set(s.x*$t.x,s.y*$t.y,s.x*$t.z,s.y*$t.w),U.viewport(o),W.updateMatrices(J,Rt),n=W.getFrustum(),x(P,I,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&T(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,C)};function T(A,P){const I=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,d,_,null)}function M(A,P,I,E){let S=null;const C=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=I.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=S.uuid,z=P.uuid;let Y=l[U];Y===void 0&&(Y={},l[U]=Y);let H=Y[z];H===void 0&&(H=S.clone(),Y[z]=H,P.addEventListener("dispose",R)),S=H}if(S.visible=P.visible,S.wireframe=P.wireframe,E===Zn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=I}return S}function x(A,P,I,E,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const z=t.update(A),Y=A.material;if(Array.isArray(Y)){const H=z.groups;for(let V=0,J=H.length;V<J;V++){const W=H[V],gt=Y[W.materialIndex];if(gt&&gt.visible){const yt=M(A,gt,E,S);A.onBeforeShadow(i,A,P,I,z,yt,W),i.renderBufferDirect(I,null,z,yt,A,W),A.onAfterShadow(i,A,P,I,z,yt,W)}}}else if(Y.visible){const H=M(A,Y,E,S);A.onBeforeShadow(i,A,P,I,z,H,null),i.renderBufferDirect(I,null,z,H,A,null),A.onAfterShadow(i,A,P,I,z,H,null)}}const U=A.children;for(let z=0,Y=U.length;z<Y;z++)x(U[z],P,I,E,S)}function R(A){A.target.removeEventListener("dispose",R);for(const I in l){const E=l[I],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const w_={[va]:xa,[Ma]:Ea,[ya]:Ta,[vr]:Sa,[xa]:va,[Ea]:Ma,[Ta]:ya,[Sa]:vr};function b_(i,t){function e(){let D=!1;const mt=new fe;let Mt=null;const Pt=new fe(0,0,0,0);return{setMask:function(ut){Mt!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),Mt=ut)},setLocked:function(ut){D=ut},setClear:function(ut,nt,Ft,Kt,ye){ye===!0&&(ut*=Kt,nt*=Kt,Ft*=Kt),mt.set(ut,nt,Ft,Kt),Pt.equals(mt)===!1&&(i.clearColor(ut,nt,Ft,Kt),Pt.copy(mt))},reset:function(){D=!1,Mt=null,Pt.set(-1,0,0,0)}}}function n(){let D=!1,mt=!1,Mt=null,Pt=null,ut=null;return{setReversed:function(nt){if(mt!==nt){const Ft=t.get("EXT_clip_control");nt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=nt;const Kt=ut;ut=null,this.setClear(Kt)}},getReversed:function(){return mt},setTest:function(nt){nt?Q(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(nt){Mt!==nt&&!D&&(i.depthMask(nt),Mt=nt)},setFunc:function(nt){if(mt&&(nt=w_[nt]),Pt!==nt){switch(nt){case va:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=nt}},setLocked:function(nt){D=nt},setClear:function(nt){ut!==nt&&(mt&&(nt=1-nt),i.clearDepth(nt),ut=nt)},reset:function(){D=!1,Mt=null,Pt=null,ut=null,mt=!1}}}function r(){let D=!1,mt=null,Mt=null,Pt=null,ut=null,nt=null,Ft=null,Kt=null,ye=null;return{setTest:function(ue){D||(ue?Q(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!D&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,Vn,In){(Mt!==ue||Pt!==Vn||ut!==In)&&(i.stencilFunc(ue,Vn,In),Mt=ue,Pt=Vn,ut=In)},setOp:function(ue,Vn,In){(nt!==ue||Ft!==Vn||Kt!==In)&&(i.stencilOp(ue,Vn,In),nt=ue,Ft=Vn,Kt=In)},setLocked:function(ue){D=ue},setClear:function(ue){ye!==ue&&(i.clearStencil(ue),ye=ue)},reset:function(){D=!1,mt=null,Mt=null,Pt=null,ut=null,nt=null,Ft=null,Kt=null,ye=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,x=null,R=null,A=null,P=new Qt(0,0,0),I=0,E=!1,S=null,C=null,U=null,z=null,Y=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=J>=2);let gt=null,yt={};const Rt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),B=new fe().fromArray(Rt),K=new fe().fromArray($t);function Tt(D,mt,Mt,Pt){const ut=new Uint8Array(4),nt=i.createTexture();i.bindTexture(D,nt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Mt;Ft++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(mt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return nt}const k={};k[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(vr),tt(!1),j(Jc),Q(i.CULL_FACE),st(pi);function Q(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function pt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function It(D,mt){return h[D]!==mt?(i.bindFramebuffer(D,mt),h[D]=mt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function At(D,mt){let Mt=d,Pt=!1;if(D){Mt=f.get(mt),Mt===void 0&&(Mt=[],f.set(mt,Mt));const ut=D.textures;if(Mt.length!==ut.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Ft=ut.length;nt<Ft;nt++)Mt[nt]=i.COLOR_ATTACHMENT0+nt;Mt.length=ut.length,Pt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(Mt)}function Yt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const he={[Ii]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};he[ku]=i.MIN,he[Gu]=i.MAX;const L={[Vu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function st(D,mt,Mt,Pt,ut,nt,Ft,Kt,ye,ue){if(D===pi){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),D!==Bu){if(D!==m||ue!==E){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),ue)switch(D){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,M=null,R=null,A=null,P.set(0,0,0),I=0,m=D,E=ue}return}ut=ut||mt,nt=nt||Mt,Ft=Ft||Pt,(mt!==p||ut!==x)&&(i.blendEquationSeparate(he[mt],he[ut]),p=mt,x=ut),(Mt!==T||Pt!==M||nt!==R||Ft!==A)&&(i.blendFuncSeparate(L[Mt],L[Pt],L[nt],L[Ft]),T=Mt,M=Pt,R=nt,A=Ft),(Kt.equals(P)===!1||ye!==I)&&(i.blendColor(Kt.r,Kt.g,Kt.b,ye),P.copy(Kt),I=ye),m=D,E=!1}function et(D,mt){D.side===Ie?pt(i.CULL_FACE):Q(i.CULL_FACE);let Mt=D.side===je;mt&&(Mt=!Mt),tt(Mt),D.blending===pr&&D.transparent===!1?st(pi):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Pt=D.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function j(D){D!==Fu?(Q(i.CULL_FACE),D!==C&&(D===Jc?i.cullFace(i.BACK):D===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),C=D}function vt(D){D!==U&&(V&&i.lineWidth(D),U=D)}function lt(D,mt,Mt){D?(Q(i.POLYGON_OFFSET_FILL),(z!==mt||Y!==Mt)&&(i.polygonOffset(mt,Mt),z=mt,Y=Mt)):pt(i.POLYGON_OFFSET_FILL)}function xt(D){D?Q(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Zt(D){D===void 0&&(D=i.TEXTURE0+H-1),gt!==D&&(i.activeTexture(D),gt=D)}function qt(D,mt,Mt){Mt===void 0&&(gt===null?Mt=i.TEXTURE0+H-1:Mt=gt);let Pt=yt[Mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},yt[Mt]=Pt),(Pt.type!==D||Pt.texture!==mt)&&(gt!==Mt&&(i.activeTexture(Mt),gt=Mt),i.bindTexture(D,mt||k[D]),Pt.type=D,Pt.texture=mt)}function b(){const D=yt[gt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(D){B.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),B.copy(D))}function Vt(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Bt(D,mt){let Mt=l.get(mt);Mt===void 0&&(Mt=new WeakMap,l.set(mt,Mt));let Pt=Mt.get(D);Pt===void 0&&(Pt=i.getUniformBlockIndex(mt,D.name),Mt.set(D,Pt))}function Et(D,mt){const Pt=l.get(mt).get(D);c.get(mt)!==Pt&&(i.uniformBlockBinding(mt,Pt,D.__bindingPointIndex),c.set(mt,Pt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,yt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,M=null,x=null,R=null,A=null,P=new Qt(0,0,0),I=0,E=!1,S=null,C=null,U=null,z=null,Y=null,B.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:pt,bindFramebuffer:It,drawBuffers:At,useProgram:Yt,setBlending:st,setMaterial:et,setFlipSided:tt,setCullFace:j,setLineWidth:vt,setPolygonOffset:lt,setScissorTest:xt,activeTexture:Zt,bindTexture:qt,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Nt,texImage3D:ht,updateUBOMapping:Bt,uniformBlockBinding:Et,texStorage2D:_t,texStorage3D:Ut,texSubImage2D:q,texSubImage3D:ot,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ot,scissor:bt,viewport:Vt,reset:Jt}}function A_(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Qs("canvas")}function _(b,v,O){let q=1;const ot=qt(b);if((ot.width>O||ot.height>O)&&(q=O/Math.max(ot.width,ot.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(q*ot.width),Ot=Math.floor(q*ot.height);h===void 0&&(h=g(Z,Ot));const _t=v?g(Z,Ot):h;return _t.width=Z,_t.height=Ot,_t.getContext("2d").drawImage(b,0,0,Z,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Z+"x"+Ot+")."),_t}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,v,O,q,ot=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=v;if(v===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){const Ot=ot?Js:ce.getTransfer(q);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Ot===ge?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(b,v){let O;return b?v===null||v===Hi||v===ts?O=i.DEPTH24_STENCIL8:v===jn?O=i.DEPTH32F_STENCIL8:v===Qr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hi||v===ts?O=i.DEPTH_COMPONENT24:v===jn?O=i.DEPTH_COMPONENT32F:v===Qr&&(O=i.DEPTH_COMPONENT16),O}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==An&&b.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function A(b){const v=b.target;v.removeEventListener("dispose",A),I(v),v.isVideoTexture&&u.delete(v)}function P(b){const v=b.target;v.removeEventListener("dispose",P),S(v)}function I(b){const v=n.get(b);if(v.__webglInit===void 0)return;const O=b.source,q=f.get(O);if(q){const ot=q[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(b),Object.keys(q).length===0&&f.delete(O)}n.remove(b)}function E(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const O=b.source,q=f.get(O);delete q[v.__cacheKey],o.memory.textures--}function S(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let ot=0;ot<v.__webglFramebuffer[q].length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[q][ot]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,ot=O.length;q<ot;q++){const Z=n.get(O[q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(b)}let C=0;function U(){C=0}function z(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function Y(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function H(b,v){const O=n.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(b,v){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){k(O,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function J(b,v){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){k(O,b,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function W(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Q(O,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const gt={[vi]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},yt={[An]:i.NEAREST,[uf]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Rt={[mf]:i.NEVER,[yf]:i.ALWAYS,[gf]:i.LESS,[Uh]:i.LEQUAL,[_f]:i.EQUAL,[Mf]:i.GEQUAL,[vf]:i.GREATER,[xf]:i.NOTEQUAL};function $t(b,v){if(v.type===jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===Lo||v.magFilter===gs||v.magFilter===Ni||v.minFilter===Nn||v.minFilter===Lo||v.minFilter===gs||v.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,gt[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,gt[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,gt[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,yt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==gs&&v.minFilter!==Ni||v.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function B(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",A));const q=v.source;let ot=f.get(q);ot===void 0&&(ot={},f.set(q,ot));const Z=Y(v);if(Z!==b.__cacheKey){ot[Z]===void 0&&(ot[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ot[Z].usedTimes++;const Ot=ot[b.__cacheKey];Ot!==void 0&&(ot[b.__cacheKey].usedTimes--,Ot.usedTimes===0&&E(v)),b.__cacheKey=Z,b.__webglTexture=ot[Z].texture}return O}function K(b,v,O){return Math.floor(Math.floor(b/O)/v)}function Tt(b,v,O,q){const Z=b.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,q,v.data);else{Z.sort((ht,bt)=>ht.start-bt.start);let Ot=0;for(let ht=1;ht<Z.length;ht++){const bt=Z[Ot],Vt=Z[ht],Bt=bt.start+bt.count,Et=K(Vt.start,v.width,4),Jt=K(bt.start,v.width,4);Vt.start<=Bt+1&&Et===Jt&&K(Vt.start+Vt.count-1,v.width,4)===Et?bt.count=Math.max(bt.count,Vt.start+Vt.count-bt.start):(++Ot,Z[Ot]=Vt)}Z.length=Ot+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ht=0,bt=Z.length;ht<bt;ht++){const Vt=Z[ht],Bt=Math.floor(Vt.start/4),Et=Math.ceil(Vt.count/4),Jt=Bt%v.width,D=Math.floor(Bt/v.width),mt=Et,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Jt,D,mt,Mt,O,q,v.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function k(b,v,O){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const ot=B(b,v),Z=v.source;e.bindTexture(q,b.__webglTexture,i.TEXTURE0+O);const Ot=n.get(Z);if(Z.version!==Ot.__version||ot===!0){e.activeTexture(i.TEXTURE0+O);const _t=ce.getPrimaries(ce.workingColorSpace),Ut=v.colorSpace===ui?null:ce.getPrimaries(v.colorSpace),Nt=v.colorSpace===ui||_t===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ht=_(v.image,!1,r.maxTextureSize);ht=Zt(v,ht);const bt=s.convert(v.format,v.colorSpace),Vt=s.convert(v.type);let Bt=M(v.internalFormat,bt,Vt,v.colorSpace,v.isVideoTexture);$t(q,v);let Et;const Jt=v.mipmaps,D=v.isVideoTexture!==!0,mt=Ot.__version===void 0||ot===!0,Mt=Z.dataReady,Pt=R(v,ht);if(v.isDepthTexture)Bt=x(v.format===ns,v.type),mt&&(D?e.texStorage2D(i.TEXTURE_2D,1,Bt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ht.width,ht.height,0,bt,Vt,null));else if(v.isDataTexture)if(Jt.length>0){D&&mt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,Jt[0].width,Jt[0].height);for(let ut=0,nt=Jt.length;ut<nt;ut++)Et=Jt[ut],D?Mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,bt,Vt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,Bt,Et.width,Et.height,0,bt,Vt,Et.data);v.generateMipmaps=!1}else D?(mt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ht.width,ht.height),Mt&&Tt(v,ht,bt,Vt)):e.texImage2D(i.TEXTURE_2D,0,Bt,ht.width,ht.height,0,bt,Vt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Bt,Jt[0].width,Jt[0].height,ht.depth);for(let ut=0,nt=Jt.length;ut<nt;ut++)if(Et=Jt[ut],v.format!==bn)if(bt!==null)if(D){if(Mt)if(v.layerUpdates.size>0){const Ft=Nl(Et.width,Et.height,v.format,v.type);for(const Kt of v.layerUpdates){const ye=Et.data.subarray(Kt*Ft/Et.data.BYTES_PER_ELEMENT,(Kt+1)*Ft/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Kt,Et.width,Et.height,1,bt,ye)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ht.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Bt,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ht.depth,bt,Vt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Bt,Et.width,Et.height,ht.depth,0,bt,Vt,Et.data)}else{D&&mt&&e.texStorage2D(i.TEXTURE_2D,Pt,Bt,Jt[0].width,Jt[0].height);for(let ut=0,nt=Jt.length;ut<nt;ut++)Et=Jt[ut],v.format!==bn?bt!==null?D?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?Mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,bt,Vt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,Bt,Et.width,Et.height,0,bt,Vt,Et.data)}else if(v.isDataArrayTexture)if(D){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Bt,ht.width,ht.height,ht.depth),Mt)if(v.layerUpdates.size>0){const ut=Nl(ht.width,ht.height,v.format,v.type);for(const nt of v.layerUpdates){const Ft=ht.data.subarray(nt*ut/ht.data.BYTES_PER_ELEMENT,(nt+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ht.width,ht.height,1,bt,Vt,Ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,bt,Vt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ht.width,ht.height,ht.depth,0,bt,Vt,ht.data);else if(v.isData3DTexture)D?(mt&&e.texStorage3D(i.TEXTURE_3D,Pt,Bt,ht.width,ht.height,ht.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,bt,Vt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ht.width,ht.height,ht.depth,0,bt,Vt,ht.data);else if(v.isFramebufferTexture){if(mt)if(D)e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ht.width,ht.height);else{let ut=ht.width,nt=ht.height;for(let Ft=0;Ft<Pt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Bt,ut,nt,0,bt,Vt,null),ut>>=1,nt>>=1}}else if(Jt.length>0){if(D&&mt){const ut=qt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ut.width,ut.height)}for(let ut=0,nt=Jt.length;ut<nt;ut++)Et=Jt[ut],D?Mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt,Vt,Et):e.texImage2D(i.TEXTURE_2D,ut,Bt,bt,Vt,Et);v.generateMipmaps=!1}else if(D){if(mt){const ut=qt(ht);e.texStorage2D(i.TEXTURE_2D,Pt,Bt,ut.width,ut.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Vt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Bt,bt,Vt,ht);m(v)&&p(q),Ot.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Q(b,v,O){if(v.image.length!==6)return;const q=B(b,v),ot=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const Z=n.get(ot);if(ot.version!==Z.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const Ot=ce.getPrimaries(ce.workingColorSpace),_t=v.colorSpace===ui?null:ce.getPrimaries(v.colorSpace),Ut=v.colorSpace===ui||Ot===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Nt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let nt=0;nt<6;nt++)!Nt&&!ht?bt[nt]=_(v.image[nt],!0,r.maxCubemapSize):bt[nt]=ht?v.image[nt].image:v.image[nt],bt[nt]=Zt(v,bt[nt]);const Vt=bt[0],Bt=s.convert(v.format,v.colorSpace),Et=s.convert(v.type),Jt=M(v.internalFormat,Bt,Et,v.colorSpace),D=v.isVideoTexture!==!0,mt=Z.__version===void 0||q===!0,Mt=ot.dataReady;let Pt=R(v,Vt);$t(i.TEXTURE_CUBE_MAP,v);let ut;if(Nt){D&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Jt,Vt.width,Vt.height);for(let nt=0;nt<6;nt++){ut=bt[nt].mipmaps;for(let Ft=0;Ft<ut.length;Ft++){const Kt=ut[Ft];v.format!==bn?Bt!==null?D?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft,0,0,Kt.width,Kt.height,Bt,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft,Jt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft,0,0,Kt.width,Kt.height,Bt,Et,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft,Jt,Kt.width,Kt.height,0,Bt,Et,Kt.data)}}}else{if(ut=v.mipmaps,D&&mt){ut.length>0&&Pt++;const nt=qt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ht){D?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt[nt].width,bt[nt].height,Bt,Et,bt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,bt[nt].width,bt[nt].height,0,Bt,Et,bt[nt].data);for(let Ft=0;Ft<ut.length;Ft++){const ye=ut[Ft].image[nt].image;D?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft+1,0,0,ye.width,ye.height,Bt,Et,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft+1,Jt,ye.width,ye.height,0,Bt,Et,ye.data)}}else{D?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,Et,bt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Bt,Et,bt[nt]);for(let Ft=0;Ft<ut.length;Ft++){const Kt=ut[Ft];D?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft+1,0,0,Bt,Et,Kt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ft+1,Jt,Bt,Et,Kt.image[nt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Z.__version=ot.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function pt(b,v,O,q,ot,Z){const Ot=s.convert(O.format,O.colorSpace),_t=s.convert(O.type),Ut=M(O.internalFormat,Ot,_t,O.colorSpace),Nt=n.get(v),ht=n.get(O);if(ht.__renderTarget=v,!Nt.__hasExternalTextures){const bt=Math.max(1,v.width>>Z),Vt=Math.max(1,v.height>>Z);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Z,Ut,bt,Vt,v.depth,0,Ot,_t,null):e.texImage2D(ot,Z,Ut,bt,Vt,0,Ot,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),lt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ot,ht.__webglTexture,0,vt(v)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ot,ht.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(b,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const q=v.depthTexture,ot=q&&q.isDepthTexture?q.type:null,Z=x(v.stencilBuffer,ot),Ot=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=vt(v);lt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Z,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,b)}else{const q=v.textures;for(let ot=0;ot<q.length;ot++){const Z=q[ot],Ot=s.convert(Z.format,Z.colorSpace),_t=s.convert(Z.type),Ut=M(Z.internalFormat,Ot,_t,Z.colorSpace),Nt=vt(v);O&&lt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ut,v.width,v.height):lt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const ot=q.__webglTexture,Z=vt(v);if(v.depthTexture.format===es)lt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(v.depthTexture.format===ns)lt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Yt(b){const v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const ot=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",ot)};q.addEventListener("dispose",ot),v.__depthDisposeCallback=ot}v.__boundDepthTexture=q}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?At(v.__webglFramebuffer[0],b):At(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),It(v.__webglDepthbuffer[q],b,!1);else{const ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Z)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),It(v.__webglDepthbuffer,b,!1);else{const ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(b,v,O){const q=n.get(b);v!==void 0&&pt(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Yt(b)}function L(b){const v=b.texture,O=n.get(b),q=n.get(v);b.addEventListener("dispose",P);const ot=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Ot=ot.length>1;if(Ot||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[_t]=[];for(let Ut=0;Ut<v.mipmaps.length;Ut++)O.__webglFramebuffer[_t][Ut]=i.createFramebuffer()}else O.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let _t=0;_t<v.mipmaps.length;_t++)O.__webglFramebuffer[_t]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let _t=0,Ut=ot.length;_t<Ut;_t++){const Nt=n.get(ot[_t]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&lt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _t=0;_t<ot.length;_t++){const Ut=ot[_t];O.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[_t]);const Nt=s.convert(Ut.format,Ut.colorSpace),ht=s.convert(Ut.type),bt=M(Ut.internalFormat,Nt,ht,Ut.colorSpace,b.isXRRenderTarget===!0),Vt=vt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,bt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,O.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),It(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),$t(i.TEXTURE_CUBE_MAP,v);for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ut=0;Ut<v.mipmaps.length;Ut++)pt(O.__webglFramebuffer[_t][Ut],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut);else pt(O.__webglFramebuffer[_t],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let _t=0,Ut=ot.length;_t<Ut;_t++){const Nt=ot[_t],ht=n.get(Nt);let bt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(bt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ht.__webglTexture),$t(bt,Nt),pt(O.__webglFramebuffer,b,Nt,i.COLOR_ATTACHMENT0+_t,bt,0),m(Nt)&&p(bt)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_t=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,q.__webglTexture),$t(_t,v),v.mipmaps&&v.mipmaps.length>0)for(let Ut=0;Ut<v.mipmaps.length;Ut++)pt(O.__webglFramebuffer[Ut],b,v,i.COLOR_ATTACHMENT0,_t,Ut);else pt(O.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,_t,0);m(v)&&p(_t),e.unbindTexture()}b.depthBuffer&&Yt(b)}function st(b){const v=b.textures;for(let O=0,q=v.length;O<q;O++){const ot=v[O];if(m(ot)){const Z=T(b),Ot=n.get(ot).__webglTexture;e.bindTexture(Z,Ot),p(Z),e.unbindTexture()}}}const et=[],tt=[];function j(b){if(b.samples>0){if(lt(b)===!1){const v=b.textures,O=b.width,q=b.height;let ot=i.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(b),_t=v.length>1;if(_t)for(let Nt=0;Nt<v.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ut=b.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Nt=0;Nt<v.length;Nt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Nt]);const ht=n.get(v[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,ot,i.NEAREST),c===!0&&(et.length=0,tt.length=0,et.push(i.COLOR_ATTACHMENT0+Nt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(et.push(Z),tt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Nt=0;Nt<v.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Nt]);const ht=n.get(v[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function vt(b){return Math.min(r.maxSamples,b.samples)}function lt(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xt(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Zt(b,v){const O=b.colorSpace,q=b.format,ot=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==yr&&O!==ui&&(ce.getTransfer(O)===ge?(q!==bn||ot!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function qt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=he,this.setupRenderTarget=L,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=lt}function R_(i,t){function e(n,r=ui){let s;const o=ce.getTransfer(r);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===bn)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Lh)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===bc)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===Ys||n===qs)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ia||n===Da)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===La||n===Ia)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Da)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===ka||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===qa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ua)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Za||n===Ka)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===$a)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ja||n===ja||n===Qa||n===tc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends Ar{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new L_,p={},T=e.getContextAttributes();let M=null,x=null;const R=[],A=[],P=new dt;let I=null;const E=new sn;E.viewport=new fe;const S=new sn;S.viewport=new fe;const C=[E,S],U=new Jd;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=R[k];return Q===void 0&&(Q=new jo,R[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=R[k];return Q===void 0&&(Q=new jo,R[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=R[k];return Q===void 0&&(Q=new jo,R[k]=Q),Q.getHandSpace()};function H(k){const Q=A.indexOf(k.inputSource);if(Q===-1)return;const pt=R[Q];pt!==void 0&&(pt.update(k.inputSource,k.frame,l||o),pt.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",J);for(let k=0;k<R.length;k++){const Q=A[k];Q!==null&&(A[k]=null,R[k].disconnect(Q))}z=null,Y=null,m.reset();for(const k in p)delete p[k];t.setRenderTarget(M),d=null,f=null,h=null,r=null,x=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",V),r.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,It=null,At=null;T.depth&&(At=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=T.stencil?ns:es,It=T.stencil?ts:Hi);const Yt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Yt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new xi(f.textureWidth,f.textureHeight,{format:bn,type:Bn,depthTexture:new Wh(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,pt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new xi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(k){for(let Q=0;Q<k.removed.length;Q++){const pt=k.removed[Q],It=A.indexOf(pt);It>=0&&(A[It]=null,R[It].disconnect(pt))}for(let Q=0;Q<k.added.length;Q++){const pt=k.added[Q];let It=A.indexOf(pt);if(It===-1){for(let Yt=0;Yt<R.length;Yt++)if(Yt>=A.length){A.push(pt),It=Yt;break}else if(A[Yt]===null){A[Yt]=pt,It=Yt;break}if(It===-1)break}const At=R[It];At&&At.connect(pt)}}const W=new w,gt=new w;function yt(k,Q,pt){W.setFromMatrixPosition(Q.matrixWorld),gt.setFromMatrixPosition(pt.matrixWorld);const It=W.distanceTo(gt),At=Q.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,he=At[14]/(At[10]-1),L=At[14]/(At[10]+1),st=(At[9]+1)/At[5],et=(At[9]-1)/At[5],tt=(At[8]-1)/At[0],j=(Yt[8]+1)/Yt[0],vt=he*tt,lt=he*j,xt=It/(-tt+j),Zt=xt*-tt;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Zt),k.translateZ(xt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),At[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const qt=he+xt,b=L+xt,v=vt-Zt,O=lt+(It-Zt),q=st*L/b*qt,ot=et*L/b*qt;k.projectionMatrix.makePerspective(v,O,q,ot,qt,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Rt(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let Q=k.near,pt=k.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),U.near=S.near=E.near=Q,U.far=S.far=E.far=pt,(z!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,Y=U.far),U.layers.mask=k.layers.mask|6,E.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const It=k.parent,At=U.cameras;Rt(U,It);for(let Yt=0;Yt<At.length;Yt++)Rt(At[Yt],It);At.length===2?yt(U,E,S):U.projectionMatrix.copy(E.projectionMatrix),$t(k,U,It)};function $t(k,Q,pt){pt===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(pt.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=is*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(k){return p[k]};let B=null;function K(k,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let It=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,It=!0);for(let L=0;L<pt.length;L++){const st=pt[L];let et=null;if(d!==null)et=d.getViewport(st);else{const j=h.getViewSubImage(f,st);et=j.viewport,L===0&&(t.setRenderTargetTextures(x,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(x))}let tt=C[L];tt===void 0&&(tt=new sn,tt.layers.enable(L),tt.viewport=new fe,C[L]=tt),tt.matrix.fromArray(st.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(st.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(et.x,et.y,et.width,et.height),L===0&&(U.matrix.copy(tt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),It===!0&&U.cameras.push(tt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(pt[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(At&&At.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let L=0;L<pt.length;L++){const st=pt[L].camera;if(st){let et=p[st];et||(et=new Xh,p[st]=et);const tt=h.getCameraImage(st);et.sourceTexture=tt}}}}for(let pt=0;pt<R.length;pt++){const It=A[pt],At=R[pt];It!==null&&At!==void 0&&At.update(It,Q,l||o)}B&&B(k,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Tt=new ru;Tt.setAnimationLoop(K),this.setAnimationLoop=function(k){B=k},this.dispose=function(){}}}const Ci=new zn,D_=new _e;function U_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),M=T.envMap,x=T.envMapRotation;M&&(m.envMap.value=M,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N_(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const x=M.program;n.uniformBlockBinding(T,x)}function l(T,M){let x=r[T.id];x===void 0&&(g(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(T,R);const A=t.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function u(T){const M=h();T.__bindingPointIndex=M;const x=i.createBuffer(),R=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=r[T.id],x=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,P=x.length;A<P;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=I.length;E<S;E++){const C=I[E];if(d(C,A,E,R)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let H=0;H<z.length;H++){const V=z[H],J=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,M,x,R){const A=T.value,P=M+"_"+x;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const I=R[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(T){const M=T.uniforms;let x=0;const R=16;for(let P=0,I=M.length;P<I;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,C=E.length;S<C;S++){const U=E[S],z=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,H=z.length;Y<H;Y++){const V=z[Y],J=_(V),W=x%R,gt=W%J.boundary,yt=W+gt;x+=gt,yt!==0&&R-yt<J.storage&&(x+=R-yt),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=J.storage}}}const A=x%R;return A>0&&(x+=R-A),T.__size=x,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class F_{constructor(t={}){const{canvas:e=Bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Se;let A=0,P=0,I=null,E=-1,S=null;const C=new fe,U=new fe;let z=null;const Y=new Qt(0);let H=0,V=e.width,J=e.height,W=1,gt=null,yt=null;const Rt=new fe(0,0,V,J),$t=new fe(0,0,V,J);let B=!1;const K=new Lc;let Tt=!1,k=!1;const Q=new _e,pt=new w,It=new fe,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function he(){return I===null?W:1}let L=n;function st(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){const N="webgl2";if(L=st(N,y),L===null)throw st(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let et,tt,j,vt,lt,xt,Zt,qt,b,v,O,q,ot,Z,Ot,_t,Ut,Nt,ht,bt,Vt,Bt,Et,Jt;function D(){et=new Ym(L),et.init(),Bt=new R_(L,et),tt=new zm(L,et,t,Bt),j=new b_(L,et),tt.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),vt=new Zm(L),lt=new d_,xt=new A_(L,et,j,lt,tt,Bt,vt),Zt=new km(x),qt=new Xm(x),b=new ep(L),Et=new Om(L,b),v=new qm(L,b,vt,Et),O=new Jm(L,v,b,vt),ht=new Km(L,tt,xt),_t=new Hm(lt),q=new f_(x,Zt,qt,et,tt,Et,_t),ot=new U_(x,lt),Z=new m_,Ot=new y_(et),Nt=new Fm(x,Zt,qt,j,O,d,c),Ut=new T_(x,O,tt),Jt=new N_(L,vt,tt,j),bt=new Bm(L,et,vt),Vt=new $m(L,et,vt),vt.programs=q.programs,x.capabilities=tt,x.extensions=et,x.properties=lt,x.renderLists=Z,x.shadowMap=Ut,x.state=j,x.info=vt}D();const mt=new I_(x,L);this.xr=mt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(V,J,!1))},this.getSize=function(y){return y.set(V,J)},this.setSize=function(y,N,G=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,J=N,e.width=Math.floor(y*W),e.height=Math.floor(N*W),G===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(V*W,J*W).floor()},this.setDrawingBufferSize=function(y,N,G){V=y,J=N,W=G,e.width=Math.floor(y*G),e.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,N,G,X){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,N,G,X),j.viewport(C.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy($t)},this.setScissor=function(y,N,G,X){y.isVector4?$t.set(y.x,y.y,y.z,y.w):$t.set(y,N,G,X),j.scissor(U.copy($t).multiplyScalar(W).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(y){j.setScissorTest(B=y)},this.setOpaqueSort=function(y){gt=y},this.setTransparentSort=function(y){yt=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,G=!0){let X=0;if(y){let F=!1;if(I!==null){const ft=I.texture.format;F=ft===bc||ft===wc||ft===Tc}if(F){const ft=I.texture.type,wt=ft===Bn||ft===Hi||ft===Qr||ft===ts||ft===Sc||ft===Ec,Dt=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Gt=Dt.r,Wt=Dt.g,Ht=Dt.b;wt?(g[0]=Gt,g[1]=Wt,g[2]=Ht,g[3]=Ct,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Gt,_[1]=Wt,_[2]=Ht,_[3]=Ct,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),G&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Nt.dispose(),Z.dispose(),Ot.dispose(),lt.dispose(),Zt.dispose(),qt.dispose(),O.dispose(),Et.dispose(),Jt.dispose(),q.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",In),mt.removeEventListener("sessionend",Xc),Si.stop()};function Mt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=vt.autoReset,N=Ut.enabled,G=Ut.autoUpdate,X=Ut.needsUpdate,F=Ut.type;D(),vt.autoReset=y,Ut.enabled=N,Ut.autoUpdate=G,Ut.needsUpdate=X,Ut.type=F}function ut(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function nt(y){const N=y.target;N.removeEventListener("dispose",nt),Ft(N)}function Ft(y){Kt(y),lt.remove(y)}function Kt(y){const N=lt.get(y).programs;N!==void 0&&(N.forEach(function(G){q.releaseProgram(G)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,X,F,ft){N===null&&(N=At);const wt=F.isMesh&&F.matrixWorld.determinant()<0,Dt=Pu(y,N,G,X,F);j.setMaterial(X,wt);let Ct=G.index,Gt=1;if(X.wireframe===!0){if(Ct=v.getWireframeAttribute(G),Ct===void 0)return;Gt=2}const Wt=G.drawRange,Ht=G.attributes.position;let ie=Wt.start*Gt,me=(Wt.start+Wt.count)*Gt;ft!==null&&(ie=Math.max(ie,ft.start*Gt),me=Math.min(me,(ft.start+ft.count)*Gt)),Ct!==null?(ie=Math.max(ie,0),me=Math.min(me,Ct.count)):Ht!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ht.count));const Le=me-ie;if(Le<0||Le===1/0)return;Et.setup(F,X,Dt,G,Ct);let we,xe=bt;if(Ct!==null&&(we=b.get(Ct),xe=Vt,xe.setIndex(we)),F.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*he()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(F.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),j.setLineWidth(kt*he()),F.isLineSegments?xe.setMode(L.LINES):F.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else F.isPoints?xe.setMode(L.POINTS):F.isSprite&&xe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const kt=F._multiDrawStarts,Ae=F._multiDrawCounts,ae=F._multiDrawCount,on=Ct?b.get(Ct).bytesPerElement:1,Yi=lt.get(X).currentProgram.getUniforms();for(let an=0;an<ae;an++)Yi.setValue(L,"_gl_DrawID",an),xe.render(kt[an]/on,Ae[an])}else if(F.isInstancedMesh)xe.renderInstances(ie,Le,F.count);else if(G.isInstancedBufferGeometry){const kt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ae=Math.min(G.instanceCount,kt);xe.renderInstances(ie,Le,Ae)}else xe.render(ie,Le)};function ye(y,N,G){y.transparent===!0&&y.side===Ie&&y.forceSinglePass===!1?(y.side=je,y.needsUpdate=!0,ms(y,N,G),y.side=_i,y.needsUpdate=!0,ms(y,N,G),y.side=Ie):ms(y,N,G)}this.compile=function(y,N,G=null){G===null&&(G=y),p=Ot.get(G),p.init(N),M.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==G&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const X=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ft=F.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Dt=ft[wt];ye(Dt,G,F),X.add(Dt)}else ye(ft,G,F),X.add(ft)}),p=M.pop(),X},this.compileAsync=function(y,N,G=null){const X=this.compile(y,N,G);return new Promise(F=>{function ft(){if(X.forEach(function(wt){lt.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){F(y);return}setTimeout(ft,10)}et.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ue=null;function Vn(y){ue&&ue(y)}function In(){Si.stop()}function Xc(){Si.start()}const Si=new ru;Si.setAnimationLoop(Vn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(y){ue=y,mt.setAnimationLoop(y),y===null?Si.stop():Si.start()},mt.addEventListener("sessionstart",In),mt.addEventListener("sessionend",Xc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(N),N=mt.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,N,I),p=Ot.get(y,M.length),p.init(N),M.push(p),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Q,Fn,N.reversedDepth),k=this.localClippingEnabled,Tt=_t.init(this.clippingPlanes,k),m=Z.get(y,T.length),m.init(),T.push(m),mt.enabled===!0&&mt.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&Co(ft,N,-1/0,x.sortObjects)}Co(y,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(gt,yt),Yt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Yt&&Nt.addToRenderList(m,y),this.info.render.frame++,Tt===!0&&_t.beginShadows();const G=p.state.shadowsArray;Ut.render(G,y,N),Tt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ft=N.cameras;if(F.length>0)for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Ct=ft[wt];qc(X,F,y,Ct)}Yt&&Nt.render(y);for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Ct=ft[wt];Yc(m,y,Ct,Ct.viewport)}}else F.length>0&&qc(X,F,y,N),Yt&&Nt.render(y),Yc(m,y,N);I!==null&&P===0&&(xt.updateMultisampleRenderTarget(I),xt.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(x,y,N),Et.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Tt===!0&&_t.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Co(y,N,G,X){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){X&&It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const wt=O.update(y),Dt=y.material;Dt.visible&&m.push(y,wt,Dt,G,It.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const wt=O.update(y),Dt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),It.copy(y.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),It.copy(wt.boundingSphere.center)),It.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(Dt)){const Ct=wt.groups;for(let Gt=0,Wt=Ct.length;Gt<Wt;Gt++){const Ht=Ct[Gt],ie=Dt[Ht.materialIndex];ie&&ie.visible&&m.push(y,wt,ie,G,It.z,Ht)}}else Dt.visible&&m.push(y,wt,Dt,G,It.z,null)}}const ft=y.children;for(let wt=0,Dt=ft.length;wt<Dt;wt++)Co(ft[wt],N,G,X)}function Yc(y,N,G,X){const F=y.opaque,ft=y.transmissive,wt=y.transparent;p.setupLightsView(G),Tt===!0&&_t.setGlobalState(x.clippingPlanes,G),X&&j.viewport(C.copy(X)),F.length>0&&ps(F,N,G),ft.length>0&&ps(ft,N,G),wt.length>0&&ps(wt,N,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function qc(y,N,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new xi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?br:Bn,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const ft=p.state.transmissionRenderTarget[X.id],wt=X.viewport||C;ft.setSize(wt.z*x.transmissionResolutionScale,wt.w*x.transmissionResolutionScale);const Dt=x.getRenderTarget(),Ct=x.getActiveCubeFace(),Gt=x.getActiveMipmapLevel();x.setRenderTarget(ft),x.getClearColor(Y),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&Nt.render(G);const Wt=x.toneMapping;x.toneMapping=mi;const Ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Tt===!0&&_t.setGlobalState(x.clippingPlanes,X),ps(y,G,X),xt.updateMultisampleRenderTarget(ft),xt.updateRenderTargetMipmap(ft),et.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let me=0,Le=N.length;me<Le;me++){const we=N[me],xe=we.object,kt=we.geometry,Ae=we.material,ae=we.group;if(Ae.side===Ie&&xe.layers.test(X.layers)){const on=Ae.side;Ae.side=je,Ae.needsUpdate=!0,$c(xe,G,X,kt,Ae,ae),Ae.side=on,Ae.needsUpdate=!0,ie=!0}}ie===!0&&(xt.updateMultisampleRenderTarget(ft),xt.updateRenderTargetMipmap(ft))}x.setRenderTarget(Dt,Ct,Gt),x.setClearColor(Y,H),Ht!==void 0&&(X.viewport=Ht),x.toneMapping=Wt}function ps(y,N,G){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ft=y.length;F<ft;F++){const wt=y[F],Dt=wt.object,Ct=wt.geometry,Gt=wt.group;let Wt=wt.material;Wt.allowOverride===!0&&X!==null&&(Wt=X),Dt.layers.test(G.layers)&&$c(Dt,N,G,Ct,Wt,Gt)}}function $c(y,N,G,X,F,ft){y.onBeforeRender(x,N,G,X,F,ft),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(x,N,G,X,y,ft),F.transparent===!0&&F.side===Ie&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,x.renderBufferDirect(G,N,X,F,y,ft),F.side=_i,F.needsUpdate=!0,x.renderBufferDirect(G,N,X,F,y,ft),F.side=Ie):x.renderBufferDirect(G,N,X,F,y,ft),y.onAfterRender(x,N,G,X,F,ft)}function ms(y,N,G){N.isScene!==!0&&(N=At);const X=lt.get(y),F=p.state.lights,ft=p.state.shadowsArray,wt=F.state.version,Dt=q.getParameters(y,F.state,ft,N,G),Ct=q.getProgramCacheKey(Dt);let Gt=X.programs;X.environment=y.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(y.isMeshStandardMaterial?qt:Zt).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Gt===void 0&&(y.addEventListener("dispose",nt),Gt=new Map,X.programs=Gt);let Wt=Gt.get(Ct);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===wt)return Kc(y,Dt),Wt}else Dt.uniforms=q.getUniforms(y),y.onBeforeCompile(Dt,x),Wt=q.acquireProgram(Dt,Ct),Gt.set(Ct,Wt),X.uniforms=Dt.uniforms;const Ht=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ht.clippingPlanes=_t.uniform),Kc(y,Dt),X.needsLights=Iu(y),X.lightsStateVersion=wt,X.needsLights&&(Ht.ambientLightColor.value=F.state.ambient,Ht.lightProbe.value=F.state.probe,Ht.directionalLights.value=F.state.directional,Ht.directionalLightShadows.value=F.state.directionalShadow,Ht.spotLights.value=F.state.spot,Ht.spotLightShadows.value=F.state.spotShadow,Ht.rectAreaLights.value=F.state.rectArea,Ht.ltc_1.value=F.state.rectAreaLTC1,Ht.ltc_2.value=F.state.rectAreaLTC2,Ht.pointLights.value=F.state.point,Ht.pointLightShadows.value=F.state.pointShadow,Ht.hemisphereLights.value=F.state.hemi,Ht.directionalShadowMap.value=F.state.directionalShadowMap,Ht.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ht.spotShadowMap.value=F.state.spotShadowMap,Ht.spotLightMatrix.value=F.state.spotLightMatrix,Ht.spotLightMap.value=F.state.spotLightMap,Ht.pointShadowMap.value=F.state.pointShadowMap,Ht.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function Zc(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=$s.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Kc(y,N){const G=lt.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Pu(y,N,G,X,F){N.isScene!==!0&&(N=At),xt.resetTextureUnits();const ft=N.fog,wt=X.isMeshStandardMaterial?N.environment:null,Dt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:yr,Ct=(X.isMeshStandardMaterial?qt:Zt).get(X.envMap||wt),Gt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ht=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,me=!!G.morphAttributes.color;let Le=mi;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Le=x.toneMapping);const we=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=we!==void 0?we.length:0,kt=lt.get(X),Ae=p.state.lights;if(Tt===!0&&(k===!0||y!==S)){const qe=y===S&&X.id===E;_t.setState(X,y,qe)}let ae=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ae.state.version||kt.outputColorSpace!==Dt||F.isBatchedMesh&&kt.batching===!1||!F.isBatchedMesh&&kt.batching===!0||F.isBatchedMesh&&kt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&kt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&kt.instancing===!1||!F.isInstancedMesh&&kt.instancing===!0||F.isSkinnedMesh&&kt.skinning===!1||!F.isSkinnedMesh&&kt.skinning===!0||F.isInstancedMesh&&kt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&kt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&kt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&kt.instancingMorph===!1&&F.morphTexture!==null||kt.envMap!==Ct||X.fog===!0&&kt.fog!==ft||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==_t.numPlanes||kt.numIntersection!==_t.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Wt||kt.morphTargets!==Ht||kt.morphNormals!==ie||kt.morphColors!==me||kt.toneMapping!==Le||kt.morphTargetsCount!==xe)&&(ae=!0):(ae=!0,kt.__version=X.version);let on=kt.currentProgram;ae===!0&&(on=ms(X,N,F));let Yi=!1,an=!1,Ir=!1;const Re=on.getUniforms(),fn=kt.uniforms;if(j.useProgram(on.program)&&(Yi=!0,an=!0,Ir=!0),X.id!==E&&(E=X.id,an=!0),Yi||S!==y){j.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Re.setValue(L,"projectionMatrix",y.projectionMatrix),Re.setValue(L,"viewMatrix",y.matrixWorldInverse);const nn=Re.map.cameraPosition;nn!==void 0&&nn.setValue(L,pt.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&Re.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Re.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,an=!0,Ir=!0)}if(F.isSkinnedMesh){Re.setOptional(L,F,"bindMatrix"),Re.setOptional(L,F,"bindMatrixInverse");const qe=F.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Re.setValue(L,"boneTexture",qe.boneTexture,xt))}F.isBatchedMesh&&(Re.setOptional(L,F,"batchingTexture"),Re.setValue(L,"batchingTexture",F._matricesTexture,xt),Re.setOptional(L,F,"batchingIdTexture"),Re.setValue(L,"batchingIdTexture",F._indirectTexture,xt),Re.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Re.setValue(L,"batchingColorTexture",F._colorsTexture,xt));const dn=G.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ht.update(F,G,on),(an||kt.receiveShadow!==F.receiveShadow)&&(kt.receiveShadow=F.receiveShadow,Re.setValue(L,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(fn.envMap.value=Ct,fn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(fn.envMapIntensity.value=N.environmentIntensity),an&&(Re.setValue(L,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Lu(fn,Ir),ft&&X.fog===!0&&ot.refreshFogUniforms(fn,ft),ot.refreshMaterialUniforms(fn,X,W,J,p.state.transmissionRenderTarget[y.id]),$s.upload(L,Zc(kt),fn,xt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($s.upload(L,Zc(kt),fn,xt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Re.setValue(L,"center",F.center),Re.setValue(L,"modelViewMatrix",F.modelViewMatrix),Re.setValue(L,"normalMatrix",F.normalMatrix),Re.setValue(L,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qe=X.uniformsGroups;for(let nn=0,Po=qe.length;nn<Po;nn++){const Ei=qe[nn];Jt.update(Ei,on),Jt.bind(Ei,on)}}return on}function Lu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Iu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,N,G){const X=lt.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),lt.get(y.texture).__webglTexture=N,lt.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const G=lt.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Du=L.createFramebuffer();this.setRenderTarget=function(y,N=0,G=0){I=y,A=N,P=G;let X=!0,F=null,ft=!1,wt=!1;if(y){const Ct=lt.get(y);if(Ct.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)xt.setupRenderTarget(y);else if(Ct.__hasExternalTextures)xt.rebindTextures(y,lt.get(y.texture).__webglTexture,lt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ht=y.depthTexture;if(Ct.__boundDepthTexture!==Ht){if(Ht!==null&&lt.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(y)}}const Gt=y.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const Wt=lt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?F=Wt[N][G]:F=Wt[N],ft=!0):y.samples>0&&xt.useMultisampledRTT(y)===!1?F=lt.get(y).__webglMultisampledFramebuffer:Array.isArray(Wt)?F=Wt[G]:F=Wt,C.copy(y.viewport),U.copy(y.scissor),z=y.scissorTest}else C.copy(Rt).multiplyScalar(W).floor(),U.copy($t).multiplyScalar(W).floor(),z=B;if(G!==0&&(F=Du),j.bindFramebuffer(L.FRAMEBUFFER,F)&&X&&j.drawBuffers(y,F),j.viewport(C),j.scissor(U),j.setScissorTest(z),ft){const Ct=lt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,G)}else if(wt){const Ct=N;for(let Gt=0;Gt<y.textures.length;Gt++){const Wt=lt.get(y.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,G,Ct)}}else if(y!==null&&G!==0){const Ct=lt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(y,N,G,X,F,ft,wt,Dt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){j.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Gt=y.textures[Dt],Wt=Gt.format,Ht=Gt.type;if(!tt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-X&&G>=0&&G<=y.height-F&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Dt),L.readPixels(N,G,X,F,Bt.convert(Wt),Bt.convert(Ht),ft))}finally{const Gt=I!==null?lt.get(I).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,N,G,X,F,ft,wt,Dt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(N>=0&&N<=y.width-X&&G>=0&&G<=y.height-F){j.bindFramebuffer(L.FRAMEBUFFER,Ct);const Gt=y.textures[Dt],Wt=Gt.format,Ht=Gt.type;if(!tt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ie),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Dt),L.readPixels(N,G,X,F,Bt.convert(Wt),Bt.convert(Ht),0);const me=I!==null?lt.get(I).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,me);const Le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zf(L,Le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(ie),L.deleteSync(Le),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,G=0){const X=Math.pow(2,-G),F=Math.floor(y.image.width*X),ft=Math.floor(y.image.height*X),wt=N!==null?N.x:0,Dt=N!==null?N.y:0;xt.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,wt,Dt,F,ft),j.unbindTexture()};const Uu=L.createFramebuffer(),Nu=L.createFramebuffer();this.copyTextureToTexture=function(y,N,G=null,X=null,F=0,ft=null){ft===null&&(F!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=F,F=0):ft=0);let wt,Dt,Ct,Gt,Wt,Ht,ie,me,Le;const we=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(G!==null)wt=G.max.x-G.min.x,Dt=G.max.y-G.min.y,Ct=G.isBox3?G.max.z-G.min.z:1,Gt=G.min.x,Wt=G.min.y,Ht=G.isBox3?G.min.z:0;else{const dn=Math.pow(2,-F);wt=Math.floor(we.width*dn),Dt=Math.floor(we.height*dn),y.isDataArrayTexture?Ct=we.depth:y.isData3DTexture?Ct=Math.floor(we.depth*dn):Ct=1,Gt=0,Wt=0,Ht=0}X!==null?(ie=X.x,me=X.y,Le=X.z):(ie=0,me=0,Le=0);const xe=Bt.convert(N.format),kt=Bt.convert(N.type);let Ae;N.isData3DTexture?(xt.setTexture3D(N,0),Ae=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(xt.setTexture2DArray(N,0),Ae=L.TEXTURE_2D_ARRAY):(xt.setTexture2D(N,0),Ae=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ae=L.getParameter(L.UNPACK_ROW_LENGTH),on=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yi=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),Ir=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Re=y.isDataArrayTexture||y.isData3DTexture,fn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const dn=lt.get(y),qe=lt.get(N),nn=lt.get(dn.__renderTarget),Po=lt.get(qe.__renderTarget);j.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,Po.__webglFramebuffer);for(let Ei=0;Ei<Ct;Ei++)Re&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.get(y).__webglTexture,F,Ht+Ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.get(N).__webglTexture,ft,Le+Ei)),L.blitFramebuffer(Gt,Wt,wt,Dt,ie,me,wt,Dt,L.DEPTH_BUFFER_BIT,L.NEAREST);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||lt.has(y)){const dn=lt.get(y),qe=lt.get(N);j.bindFramebuffer(L.READ_FRAMEBUFFER,Uu),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nu);for(let nn=0;nn<Ct;nn++)Re?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,F,Ht+nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,F),fn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,ft,Le+nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,ft),F!==0?L.blitFramebuffer(Gt,Wt,wt,Dt,ie,me,wt,Dt,L.COLOR_BUFFER_BIT,L.NEAREST):fn?L.copyTexSubImage3D(Ae,ft,ie,me,Le+nn,Gt,Wt,wt,Dt):L.copyTexSubImage2D(Ae,ft,ie,me,Gt,Wt,wt,Dt);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Ae,ft,ie,me,Le,wt,Dt,Ct,xe,kt,we.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,ft,ie,me,Le,wt,Dt,Ct,xe,we.data):L.texSubImage3D(Ae,ft,ie,me,Le,wt,Dt,Ct,xe,kt,we):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,ie,me,wt,Dt,xe,kt,we.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,ie,me,we.width,we.height,xe,we.data):L.texSubImage2D(L.TEXTURE_2D,ft,ie,me,wt,Dt,xe,kt,we);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ir),ft===0&&N.generateMipmaps&&L.generateMipmap(Ae),j.unbindTexture()},this.initRenderTarget=function(y){lt.get(y).__webglFramebuffer===void 0&&xt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?xt.setTextureCube(y,0):y.isData3DTexture?xt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?xt.setTexture2DArray(y,0):xt.setTexture2D(y,0),j.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,j.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}function O_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Ue;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in s){const h=oh(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const g=oh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function oh(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new hn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}class Ao extends ct{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new sn;const n=this,r=e.color!==void 0?new Qt(e.color):new Qt(8355711),s=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||Ao.ReflectorShader,l=e.multisample!==void 0?e.multisample:4,u=new hi,h=new w,f=new w,d=new w,g=new _e,_=new w(0,0,-1),m=new fe,p=new w,T=new w,M=new fe,x=new _e,R=this.camera,A=new xi(s,o,{samples:l,type:br}),P=new vn({name:c.name!==void 0?c.name:"unspecified",uniforms:kh.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});P.uniforms.tDiffuse.value=A.texture,P.uniforms.color.value=r,P.uniforms.textureMatrix.value=x,this.material=P,this.onBeforeRender=function(I,E,S){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(S.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(f),g.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),T.subVectors(f,_),T.reflect(h).negate(),T.add(f),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(h),R.lookAt(T),R.far=S.far,R.updateMatrixWorld(),R.projectionMatrix.copy(S.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(R.projectionMatrix),x.multiply(R.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const U=R.projectionMatrix;M.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],M.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],M.z=-1,M.w=(1+U.elements[10])/U.elements[14],m.multiplyScalar(2/m.dot(M)),U.elements[2]=m.x,U.elements[6]=m.y,U.elements[10]=m.z+1-a,U.elements[14]=m.w,n.visible=!1;const z=I.getRenderTarget(),Y=I.xr.enabled,H=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(A),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(E,R),I.xr.enabled=Y,I.shadowMap.autoUpdate=H,I.setRenderTarget(z);const V=S.viewport;V!==void 0&&I.state.viewport(V),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}}Ao.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const B_=[[-19.45,0,-5.12,.014,20],[-19.41,2.59,-5.15,-.006,20],[-19.49,5.18,-5.13,-.005,20],[-13.3,0,-5.12,3.121,20],[3.7,0,-5.12,3.125,20],[3.73,2.59,-5.13,-.013,20],[13.53,0,-5.12,-.009,20],[13.56,2.59,-5.13,0,20],[-19.45,0,2.08,0,20],[-13.35,0,2.08,.001,20],[.8,0,2.08,.019,40],[.76,2.59,2.09,-.009,40],[3.82,5.18,2.05,.012,20],[12.3,0,2.08,.003,20],[12.31,2.59,2.05,-.011,20],[-21.1,0,9.92,.002,20],[-13.6,0,9.92,-.004,20],[-13.59,2.59,9.92,-.003,20],[-13.61,5.18,9.93,-.004,20],[-21.6,0,12.42,-0,20],[-21.59,2.59,12.42,0,20],[-21.6,5.18,12.42,-.001,20],[-15.4,0,12.42,-.003,20],[4.43,0,12.42,0,20],[13.53,0,12.42,0,20],[-16.4,0,20.12,-.017,40],[-16.36,2.59,20.08,.008,40],[-2.25,0,20.12,.011,20],[3.85,0,20.12,-.017,20],[3.86,2.59,20.14,-.011,20],[13.53,0,20.12,.015,20],[13.5,2.59,20.09,.012,20],[13.49,5.18,20.13,.008,20],[-16.4,0,22.62,-.008,41],[-16.39,2.9,22.61,-.013,40],[-16.43,5.49,22.65,.013,40],[.8,0,22.62,-.012,40],[.8,2.59,22.64,.007,41],[13.53,0,22.62,-.021,20],[-22.6,0,-19.2,1.55,40],[-22.59,2.59,-19.18,1.567,40],[-30.2,0,-18.4,.35,20],[-31.2,0,24.7,-.004,40],[-31.16,2.59,24.68,.01,40],[23.2,0,-28.6,-.013,20],[23.23,2.59,-28.58,.01,20],[23,0,-25.95,-.018,20]],z_=[["crate_wood",14.3,2.59,11.75,.1],["light_mast",-23.4,0,.5,0],["light_mast",-23.4,0,21.4,0],["light_mast",17,0,-8.7,0],["light_mast",17,0,18.6,0],["light_mast",-20.6,0,-11.6,0],["barrel",-19.6,0,3.85,0],["barrel",-18.9,0,3.95,.7],["pallet_stack",-17.4,0,4,.08],["crate_stack",-14.3,0,8.05,.04],["ibc_tote",-12.95,0,7.95,-.05],["forklift",-8.6,0,4.5,-.22],["pallet",-7.21,.54,4.81,-.22],["crate_wood",-7.21,.68,4.81,-.17],["jersey_barrier",-2.9,0,5.3,.12],["jersey_barrier",5.6,0,5,-.1],["ibc_tote",5.9,0,8.9,.1],["ibc_tote",5.95,0,10.05,-.05],["barrel",4.9,0,9.7,0],["crate_stack",-3.9,0,10.5,.1],["crate_wood",-3.8,0,9.35,-.2],["pallet_stack",-4.4,0,11.8,.02],["cable_reel",4.2,0,10.5,.3],["jersey_barrier",11.6,0,3.95,.03],["ibc_tote",15.2,0,10.2,.1],["traffic_cone",.2,0,6.3,0],["traffic_cone",2.9,0,6.4,0],["traffic_cone",2.9,0,8.8,0],["traffic_cone",.1,0,8.7,0],["sign_post",-4.8,0,3.72,1.571],["pallet_stack",-20.6,0,-.1,.2],["tire_stack",-9.6,0,.2,0],["barrel",4.5,0,.35,0],["barrel",5.2,0,.3,.4],["jersey_barrier",12.2,0,.4,.03],["crate_wood",11.2,0,-3.3,.3],["jersey_barrier",-.9,0,-7.5,.1],["pallet_stack",1.2,0,-9.9,.1],["barrel",2.2,0,-10.3,0],["cable_reel",-18.2,0,-8,.2],["traffic_cone",-6.5,0,-9.9,0],["traffic_cone",-.5,0,-9.9,0],["crate_stack",-10.95,0,18.25,.06],["barrel",-3,0,18.35,0],["tire_stack",10.95,0,18.3,0],["ibc_tote",12,0,18.25,0],["pallet_stack",-12.3,0,18.2,.1],["jersey_barrier",.6,0,15.5,.12],["tire_stack",-8,0,26.9,0],["pallet_stack",8.7,0,27,.3],["crate_wood",-2,0,27,.2],["barrel",11.2,0,27.1,0],["cable_reel",-34.6,0,-22.5,1],["tire_stack",-25.4,0,-26.9,0],["crate_stack",-34.8,0,-13.5,.2],["barrel",-33.6,0,-13,0],["generator",-34.2,0,14.2,.15],["floodlight_stand",-31.4,0,12.7,.55],["tire_stack",-36.6,0,17.2,0],["tire_stack",-36.5,0,18.3,.6],["pallet_stack",-27.8,0,16.6,.4],["crate_wood",-28.6,0,20.6,.1],["ibc_tote",-26.6,0,21.2,0],["jersey_barrier",-34.7,0,3.75,1.651],["jersey_barrier",-33.3,0,8.3,1.511],["jersey_barrier",-30.6,0,10.4,.03],["jersey_barrier",-27.3,0,1.45,.05],["jersey_barrier",-32.2,0,1.45,-.04],["sign_post",-33.2,0,9.6,1.571],["sign_post",-25.3,0,1.1,1.571],["sign_post",-36.6,0,-1.6,1.571],["traffic_cone",-34.6,0,5.6,0],["traffic_cone",-28.3,0,2,0],["traffic_cone",-33.2,0,6.5,0],["traffic_cone",-26.6,0,9.8,0],["traffic_cone",-31.8,0,9.9,0],["light_mast",-27.6,0,-.9,0],["light_mast",-36.3,0,12.4,0],["barrel",-33.9,0,2,0],["pallet_stack",-36.4,0,10.3,.2],["pallet_stack",0,.03,-26.9,.1],["crate_stack",2.9,.03,-15.9,.12],["crate_wood",4.15,.03,-16.3,-.25],["pallet_stack",2,.03,-17.3,1.45],["ibc_tote",6.9,.03,-19.6,.1],["barrel",7.9,.03,-18.5,0],["barrel",6,.03,-18.4,.6],["ibc_tote",-7.6,.03,-16.4,-.08],["barrel",-8.6,.03,-15.3,0],["barrel",-7.9,.03,-15,.9],["forklift",8.3,.03,-13.9,2.75],["tire_stack",-15,.03,-15.6,0],["tire_stack",-14.9,.03,-16.6,.4],["crate_wood",-12.4,.03,-26.9,-.1],["barrel",-10.9,.03,-27,0],["crate_wood",-14.7,.03,-24.6,.3],["pallet",10.6,.03,-13.6,.2],["traffic_cone",-6.6,.03,-12.2,0],["traffic_cone",-.4,.03,-12.3,0],["jersey_barrier",20.5,0,-4.7,1.691],["jersey_barrier",25.3,0,3.1,-.2],["barrel",26.5,0,-1.7,0],["barrel",26.9,0,-1.05,.5],["traffic_cone",22,0,-1.9,0],["traffic_cone",24.2,0,1.7,0],["generator",15,0,-26.6,.06],["floodlight_stand",16.4,0,-23.6,.3],["tire_stack",24.1,0,-9.5,0],["tire_stack",25.05,0,-9.6,.5],["cable_reel",14.3,0,-12.9,.4],["cable_reel",15.6,0,-14.3,1.9],["pallet_stack",20.3,0,-9.3,.1],["crate_wood",19.9,0,-22.6,.3],["barrel",12.75,0,-23.3,0],["barrel",12.9,0,-24.1,0],["light_mast",26.6,0,-28.7,0],["light_mast",26.6,0,26.7,0],["crate_stack",26.4,0,23.6,.2],["ibc_tote",22.6,0,26.3,.05],["pallet_stack",24,0,26.2,.2],["barrel",22.6,0,20.3,0],["barrel",23.4,0,20.4,0],["traffic_cone",28.2,0,18.2,0],["traffic_cone",28.3,0,21.8,0]];let sc=42811;const at=()=>(sc=sc*1664525+1013904223>>>0)/4294967296,zc=i=>i[Math.floor(at()*i.length)],$=(i,t,e)=>new w(i,t,e),H_=new Ln(1,1,1),zt=(i,t=.78,e=.18,n={})=>new pe({color:i,roughness:t,metalness:e,...n});function k_(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);e.addColorStop(0,"#18262e"),e.addColorStop(.36,"#394047"),e.addColorStop(.47,"#928474"),e.addColorStop(.52,"#514c46"),e.addColorStop(.68,"#18252a"),e.addColorStop(1,"#101a20"),t.fillStyle=e,t.fillRect(0,0,i.width,i.height);let n=t.createRadialGradient(500,234,5,500,234,255);n.addColorStop(0,"rgba(255,226,183,.85)"),n.addColorStop(.2,"rgba(216,155,93,.48)"),n.addColorStop(1,"rgba(171,117,75,0)"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let s=0;s<280;s++){const o=at()*1024,a=105+at()*152,c=18+at()*170,l=8+at()*32,u=t.createRadialGradient(o,a,1,o,a,c);u.addColorStop(0,"rgba(20,27,33,.18)"),u.addColorStop(1,"rgba(20,27,33,0)"),t.save(),t.scale(1,l/c),t.fillStyle=u,t.fillRect(o-c,(a-c)*c/l,c*2,c*2),t.restore()}const r=new un(i);return r.mapping=Ks,r.colorSpace=Se,r}function G_(i){if(i)return null;const t={name:"Rain-slick asphalt reflections",uniforms:{color:{value:new Qt(5331550)},tDiffuse:{value:null},textureMatrix:{value:new _e},time:{value:0}},vertexShader:`
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
 }`},e=new Ao(new be(78,13.8),{shader:t,textureWidth:480,textureHeight:360,multisample:0,clipBias:.003});return e.rotation.x=-Math.PI/2,e.position.set(-7,.018,6),e.material.transparent=!0,e.material.depthWrite=!1,e.renderOrder=1,e}const On=zt(2831419,.49,.72),He=zt(1252129,.62,.65),Te=zt(6582906,.42,.72),lu=zt(1053462,.9,.04),V_=zt(2240052,.32,.68),hu=zt(15049804,.56,.45),uu=new re({color:16758635}),fu=zt(7420715,.92,.12),du=zt(5656382,.88,.08),W_=zt(5721406,.55,.52),pu={time:{value:0}},X_=new vn({uniforms:pu,transparent:!0,depthWrite:!1,side:Ie,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float time;varying vec2 vUv;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
 void main(){vec2 p=vUv*2.-1.;float distort=(noise(vUv*9.)-.5)*.23;
 float edge=1.-smoothstep(.56,.95,length(p)+distort);
 float fine=noise(vUv*37.+vec2(time*.028,0.));
 vec3 base=vec3(.13,.15,.15);
 float shimmer=pow(max(0.,sin(vUv.y*30.+vUv.x*2.8+time*.3)),23.)*.025;
 vec3 water=base+vec3(.18,.12,.06)*shimmer+vec3(.025)*fine;
 gl_FragColor=vec4(water,edge*(.30+.08*fine));
 }`}),Y_=new re({color:11186859,transparent:!0,opacity:.14,depthWrite:!1});function rt(i,t,e,n,r){const s=new ct(H_,n);return s.position.set(...e),s.scale.set(...t),r&&s.rotation.set(...r),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Lt(i,t,e,n,r,s=6){const o=t.clone().add(e).multiplyScalar(.5),a=e.clone().sub(t),c=new ct(new ve(n,n,a.length(),s),r);return c.position.copy(o),c.quaternion.setFromUnitVectors($(0,1,0),a.normalize()),c.castShadow=!0,i.add(c),c}function wn(i,t,e=256){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,e,e),i==="ground"){for(let o=0;o<31e3;o++){const a=Math.floor(35+at()*80);r.fillStyle=`rgba(${a},${a+7},${a+9},${at()*.22})`,r.fillRect(at()*e,at()*e,1+at()*3,1+at()*2)}for(let o=0;o<80;o++){r.strokeStyle=`rgba(10,15,18,${.06+at()*.2})`,r.lineWidth=.25+at()*1.7,r.beginPath();let a=at()*e,c=at()*e;r.moveTo(a,c),r.lineTo(a+at()*24,c+at()*14),r.stroke()}for(let o=0;o<95;o++){const a=at()*e,c=at()*e,l=(.008+at()*.19)*e,h=at()<.68?`rgba(5,11,14,${.04+at()*.3})`:`rgba(121,130,122,${.015+at()*.12})`,f=r.createRadialGradient(a,c,0,a,c,l);f.addColorStop(0,h),f.addColorStop(1,"rgba(10,12,13,0)"),r.fillStyle=f,r.fillRect(a-l,c-l,l*2,l*2)}for(let o=0;o<560;o++){const a=at()*e,c=at()*e;r.fillStyle=at()<.6?`rgba(8,12,14,${.12+at()*.18})`:`rgba(167,179,176,${.03+at()*.12})`,r.fillRect(a,c,1.2+at()*4,1+at()*3)}for(let o=0;o<24;o++){const a=at()*e,c=at()*e;r.beginPath(),r.strokeStyle=`rgba(11,15,18,${.1+at()*.29})`,r.lineWidth=.4+at()*1.4,r.moveTo(a,c);for(let l=1;l<12;l++)r.lineTo(a+Math.sin(l*.7+o)*l*.84,c+l*(1.5+at()*1.4));r.stroke()}}else{for(let o=0;o<3100;o++){const a=i==="metal"?"118,71,43":i==="warning"?"22,22,20":"19,23,26";r.fillStyle=`rgba(${a},${at()*.24})`;let c=at()*e,l=at()*e;r.fillRect(c,l,1+at()*5,1+at()*7)}for(let o=0;o<110;o++){const a=at()*e,c=at()*e;r.fillStyle=`rgba(8,13,16,${at()*.18})`,r.fillRect(a,c,1+at()*1,4+at()*65)}for(let o=0;o<52;o++){r.strokeStyle=`rgba(197,202,183,${at()*.12})`,r.lineWidth=.3+at()*.7,r.beginPath();let a=at()*e,c=at()*e;r.moveTo(a,c),r.lineTo(a+1+at()*12,c),r.stroke()}for(let o=0;o<140;o++){const a=at()*e,c=at()*e,l=3+at()*34,u=r.createRadialGradient(a,c,0,a,c,l),h=at()>.36?"120,68,44":"12,25,30";u.addColorStop(0,`rgba(${h},${.05+at()*.22})`),u.addColorStop(1,`rgba(${h},0)`),r.fillStyle=u,r.fillRect(a-l,c-l,l*2,l*2)}for(let o=0;o<70;o++){const a=at()*e,c=at()*e,l=10+at()*110,u=r.createLinearGradient(0,c,0,c+l);u.addColorStop(0,`rgba(97,49,29,${.09+at()*.3})`),u.addColorStop(1,"rgba(97,49,29,0)"),r.fillStyle=u,r.fillRect(a,c,.8+at()*3,l)}for(let o=0;o<150;o++){const a=at()*e,c=at()*e;r.strokeStyle=`rgba(192,186,171,${.06+at()*.26})`,r.lineWidth=.3+at()*.75,r.beginPath(),r.moveTo(a,c),r.lineTo(a+3+at()*42,c+(at()-.5)*1.8),r.stroke()}}const s=new un(n);return s.colorSpace=Se,s.wrapS=s.wrapT=vi,s.anisotropy=4,s}function q_(){const i=document.createElement("canvas");i.width=256,i.height=512;const t=i.getContext("2d");t.clearRect(0,0,256,512);const e=t.createLinearGradient(0,0,256,0);e.addColorStop(0,"rgba(171,174,163,.15)"),e.addColorStop(.09,"rgba(185,189,176,.76)"),e.addColorStop(.82,"rgba(187,190,181,.73)"),e.addColorStop(1,"rgba(175,178,164,.09)"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let r=0;r<1700;r++){const s=at()*256,o=at()*512;t.clearRect(s,o,.3+at()*6,.5+at()*15)}for(let r=0;r<160;r++){const s=at()*256,o=at()*512;t.clearRect(s,o,2+at()*30,.8+at()*3)}for(let r=0;r<25;r++){const s=at()*256,o=at()*512,a=10+at()*50;t.save(),t.globalCompositeOperation="destination-out";const c=t.createRadialGradient(s,o,0,s,o,a);c.addColorStop(0,"rgba(0,0,0,.8)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(s-a,o-a,a*2,a*2),t.restore()}const n=new un(i);return n.colorSpace=Se,n.anisotropy=8,new re({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function Lr(i,t,e="#deded5",n="#29353a"){const r=document.createElement("canvas");r.width=512,r.height=172;const s=r.getContext("2d");s.fillStyle=n,s.fillRect(0,0,512,172),s.strokeStyle="rgba(255,255,255,.45)",s.lineWidth=3,s.strokeRect(9,9,494,154),s.fillStyle=e,s.font="900 70px Impact,Arial Narrow,sans-serif",s.fillText(i,28,93),s.font="600 23px monospace",s.fillText(t,30,137);const o=new un(r);return o.colorSpace=Se,o}function so(i,t,e,n=.34){const r=[],s=[],o=[],a=Math.max(6,Math.round(i/n));for(let l=0;l<=a*4;l++){const u=l/(a*4),h=l%4,d=e*(h===1||h===2?1:0);if(r.push(u*i-i/2,0,d,u*i-i/2,t,d),s.push(u*3,0,u*3,1),l<a*4){const g=l*2;o.push(g,g+2,g+1,g+1,g+2,g+3)}}const c=new Ue;return c.setAttribute("position",new le(r,3)),c.setAttribute("uv",new le(s,2)),c.setIndex(o),c.computeVertexNormals(),c}const mu=[["#435c61",4942446],["#a65d3e",11297344],["#515b5d",5793132],["#706a55",8288099],["#354957",3755613],["#5f5048",7758165]],gu=mu.map(([i])=>{const t=wn("metal",i,512);return zt(13752534,.62,.23,{map:t,bumpMap:t,bumpScale:.015})}),ah=new Map,ch=new Map;function $_(i,t){const e=`${i}:${Math.abs(t)%8}`,n=ch.get(e);if(n)return n;const r=Lr(`C-${i+1}`,`LOAD ${Math.abs(t*17+i*11)%99}`),s=new re({map:r,transparent:!0,opacity:.56,depthWrite:!1,side:Ie});return ch.set(e,s),s}function Z_(i,t){const e=`${i}:${t%4}`,n=ah.get(e);if(n)return n;const r=document.createElement("canvas");r.width=768,r.height=256;const s=r.getContext("2d");s.clearRect(0,0,768,256);const o=["NORTHLINE","OCEANSTAR","BLACKWATER","BRIDGEPORT","CIRRUS","ATLANTIC"][i%6];let a=(i+1)*15289+t%4*9013;const c=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296);s.fillStyle="rgba(220,228,220,.55)",s.lineWidth=5,s.beginPath(),s.moveTo(37,77),s.lineTo(109,31),s.lineTo(166,77),s.lineTo(109,124),s.closePath(),s.strokeStyle="rgba(216,224,221,.49)",s.stroke(),s.beginPath(),s.moveTo(61,83),s.lineTo(102,52),s.lineTo(146,83),s.stroke(),s.font="700 69px Impact,Arial Narrow,Arial",s.letterSpacing="4px",s.fillText(o,194,100,545),s.font="500 24px monospace",s.letterSpacing="1px",s.fillText(`ISO 22G1   ${String((i*57091+t*37)%9999999).padStart(7,"0")}`,195,146,510),s.font="700 27px monospace",s.fillText("MAX GROSS 30 480 KG   /   67 200 LB",196,185,500),s.globalCompositeOperation="destination-out";for(let h=0;h<2500;h++){const f=c()*r.width,d=c()*r.height;s.fillStyle=`rgba(0,0,0,${.12+c()*.72})`,s.fillRect(f,d,1+c()*9,.3+c()*4)}for(let h=0;h<42;h++){const f=c()*r.width,d=c()*r.height;s.fillStyle=`rgba(0,0,0,${.3+c()*.6})`,s.fillRect(f,d,7+c()*58,.4+c()*1.5)}const l=new un(r);l.colorSpace=Se,l.anisotropy=8;const u=new re({map:l,transparent:!0,opacity:.78,depthWrite:!1,side:Ie,polygonOffset:!0,polygonOffsetFactor:-1});return ah.set(e,u),u}const K_=(()=>{const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d");let e=874233;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let s=0;s<480;s++){const o=n()*512,a=n()*256,c=10+n()*120,l=t.createLinearGradient(0,a,0,a+c);l.addColorStop(0,`rgba(72,37,21,${.1+n()*.29})`),l.addColorStop(1,"rgba(72,37,21,0)"),t.fillStyle=l,t.fillRect(o,a,1+n()*2.8,c)}const r=new un(i);return r.colorSpace=Se,new re({map:r,transparent:!0,opacity:.85,depthWrite:!1,side:Ie,polygonOffset:!0,polygonOffsetFactor:-1})})();function Gs(i,t,e,n,r=0,s=0,o,a=20,c){const l=o??Math.floor(at()*mu.length),u=gu[l],h=new Xt;h.position.set(e,(c??s*2.72)+.12,n),h.rotation.y=r,i.add(h);const f=2.7,d=a===41?2.86:2.55,g=a===20?6.06:12.2;rt(h,[f,d,g],[0,d/2,0],u);for(let M of[-1,1]){const x=new ct(so(g-.2,d-.21,M*.067,.3),u);x.rotation.y=M*Math.PI/2,x.position.set(M*(f/2+.015),.12,0),x.castShadow=!0,x.receiveShadow=!0,h.add(x);const R=new ct(new be(g-.24,d-.15),K_);if(R.rotation.y=M*Math.PI/2,R.position.set(M*(f/2+.115),d/2,0),h.add(R),at()<.84){const P=new ct(new be(2.25,.75),Z_(l,Math.abs(Math.floor(e*11+n*7+s*23))));P.rotation.y=M*Math.PI/2,P.position.set(M*(f/2+.124),1.63,-.25),h.add(P)}const A=new ct(new be(.53,.3),$_(l,Math.round(e*4+n*9+s*17)));A.rotation.y=M*Math.PI/2,A.position.set(M*(f/2+.132),.55,g/2-.65),h.add(A)}for(let M of[-1,1]){const x=new ct(so(f-.12,d-.23,M*.05,.22),u);x.position.set(0,.12,M*(g/2+.022)),M===-1&&(x.rotation.y=Math.PI),h.add(x),rt(h,[f+.12,.09,.1],[0,d+.01,M*g/2],He),rt(h,[f+.12,.13,.1],[0,.055,M*g/2],He),rt(h,[.035,d,.035],[0,d/2,M*(g/2+.09)],Te);for(let R=-1;R<=1;R+=2)rt(h,[.065,d-.22,.07],[R*(f/2-.23),d/2,M*(g/2+.12)],On);for(let R=-1;R<=1;R+=2)for(let A=0;A<2;A++)rt(h,[.12,.17,.06],[R*(f/2-.23),.48+A*1.45,M*(g/2+.165)],Te)}for(let M of[-1,1]){for(let x of[-1,1]){rt(h,[.1,d+.14,.12],[M*(f/2-.04),d/2,x*(g/2-.055)],On);for(let R of[.08,d+.04])rt(h,[.24,.16,.24],[M*(f/2-.04),R,x*(g/2-.05)],Te)}rt(h,[.1,.08,g+.16],[M*(f/2-.04),d+.08,0],On),rt(h,[.11,.11,g+.16],[M*(f/2-.04),.035,0],On)}const _=new ct(new be(1.45,.49),new re({map:Lr(zc(["HARBOR","NORTH","MARLIN","SE-04","TIDAL"]),`CARGO  /  ${String(Math.floor(at()*81e3)).padStart(5,"0")}`),transparent:!0,opacity:.85}));_.position.set(0,1.72,g/2+.082),h.add(_);for(let M=0;M<3;M++)rt(h,[.045,.017,.56],[f/2+.092,.62+M*.53,-1.6+M*.9],fu);const m=Math.abs(Math.sin(r))>.7,p=(m?g:f)/2,T=(m?f:g)/2;t.push({minX:e-p-.2,maxX:e+p+.2,minZ:n-T-.2,maxZ:n+T+.2,height:(c??s*2.72)+d})}function lh(i,t,e,n=1){const r=new Xt;r.position.set(t,0,e),r.scale.setScalar(n),i.add(r);const s=zt(6125430,.58,.62),o=zt(10976592,.67,.53);for(let a of[-1,1]){let c=$(a*8.6,0,0),l=$(a*6.2,21,0);Lt(r,c,l,.36,s,8),Lt(r,$(a*8.6,0,1.7),$(a*6.2,21,1.7),.36,s,8);for(let u=3;u<21;u+=3){const h=u/21;Lt(r,$(a*(8.6-2.4*h),u,0),$(a*(8.6-2.4*h),u,1.7),.15,s)}}for(let a of[13,19.8]){Lt(r,$(-6.7,a,.85),$(6.7,a,.85),.24,s,8);for(let c=-6;c<6;c+=2)Lt(r,$(c,a,.85),$(c+2,a+1,.85),.09,s),Lt(r,$(c,a+1,.85),$(c+2,a,.85),.09,s)}for(let a of[-1,1]){Lt(r,$(-19.5,20.9,a*.7),$(19.5,20.9,a*.7),.27,s),Lt(r,$(-19.5,22.25,a*.7),$(19.5,22.25,a*.7),.17,s);for(let c=-19;c<19;c+=2.5)Lt(r,$(c,20.9,a*.7),$(c+2.5,22.25,a*.7),.09,s),Lt(r,$(c,22.25,a*.7),$(c+2.5,20.9,a*.7),.09,s)}rt(r,[3.9,2.25,2.2],[6.3,22.5,.1],s),rt(r,[2.8,.85,2.5],[6.3,22.1,1.35],He);for(let a=8;a<22;a+=2.8)Lt(r,$(-2.9,a,.4),$(-2.9,a+2.3,.4),.048,o);for(let a of[-1,1])Lt(r,$(-2.7+a*.65,20.6,0),$(-2.7+a*.65,3.5,0),.023,He);rt(r,[4.7,.45,1.35],[-2.7,3.4,0],o)}function J_(i,t,e,n=1){const r=new Xt;r.position.set(t,0,e),r.scale.setScalar(n),r.rotation.y=Math.PI/2,i.add(r);const s=zt(6648178,.72,.57),o=zt(9079168,.69,.62),a=zt(2700085,.81,.51),c=7,l=26.8;for(const h of[-1,1]){for(const f of[-1.65,1.65]){Lt(r,$(h*c/2,0,f),$(h*c/2,l,f),.26,s,10);for(let d=2;d<l-1;d+=4.2){const g=$(h*c/2,d,f),_=$(h*c/2,d+4.1,-f);Lt(r,g,_,.094,o)}}for(let f=2;f<=l;f+=4.1)Lt(r,$(h*c/2,f,-1.65),$(h*c/2,f,1.65),.12,s)}for(const h of[-1.65,1.65]){for(let f of[4,14,22,26.8])Lt(r,$(-c/2,f,h),$(c/2,f,h),.16,s);for(let f=-3.25;f<=3;f+=1.35)Lt(r,$(f,26.45,h),$(f+1.15,27.6,h),.11,s),Lt(r,$(f,27.55,h),$(f+1.15,26.45,h),.11,s)}for(const h of[-1.2,1.2]){Lt(r,$(-18.5,26.5,h),$(14,26.5,h),.2,s),Lt(r,$(-16.7,28.1,h),$(12,28.1,h),.15,s);for(let f=-18;f<13;f+=2)Lt(r,$(f,26.45,h),$(f+2,28.1,h),.09,o),Lt(r,$(f,28.1,h),$(f+2,26.45,h),.09,s)}for(let h=-17;h<=13;h+=3.8)Lt(r,$(h,26.5,-1.2),$(h,26.5,1.2),.1,s);for(const h of[-1,1]){Lt(r,$(h*4,1.1,1.45),$(h*4,26.5,1.45),.036,o),Lt(r,$(h*4.48,1.1,1.45),$(h*4.48,26.5,1.45),.036,o);for(let f=1.2;f<26.5;f+=.55)Lt(r,$(h*4,f,1.45),$(h*4.48,f,1.45),.023,o)}rt(r,[8.8,.17,4.7],[0,23.8,0],a);for(let h=-4;h<4;h+=.48)rt(r,[.07,.08,4.8],[h,23.97,0],o);rt(r,[3.2,2.4,2.25],[1.2,29,-.2],s);for(const h of[-1.35,1.05])rt(r,[2.8,.72,.09],[1.2,29.13,h],a);for(let h=-1;h<2;h++)rt(r,[.68,.42,.14],[1.2+h*.78,29.27,1.19],zt(9280660,.2,.45,{emissive:2636343,emissiveIntensity:.23}));rt(r,[3.1,1.4,2.3],[-1.2,26,0],a);for(const h of[-1.18,1.18])Lt(r,$(-1.2+h,25.2,-.8),$(-1.2+h,8.6,-.8),.024,a),Lt(r,$(-1.2+h,25.2,.8),$(-1.2+h,8.6,.8),.024,a);rt(r,[4.7,.68,2.2],[-1.2,8.5,0],o);for(const h of[-1,1])for(const f of[-1,1])Lt(r,$(-1.2+h*2.15,8.3,f*.8),$(-1.2+h*2.15,7,f*.8),.05,a);const u=new ct(new be(4.9,.62),new re({map:Lr("GANTRY 04","BERTH CONTROL  /  07"),transparent:!0}));u.position.set(0,13.4,1.75),r.add(u);for(const h of[1.2,23.2])for(const f of[-1,1])rt(r,[.65,.2,.25],[f*3.5,h,1.8],hu);rt(r,[.22,.22,.22],[0,30.36,0],uu)}const j_=zt(9670534,.97,0,{map:wn("ground","#97938b")});function Q_(i,t,e,n=0){const r=new Xt;r.position.set(t,0,e),r.rotation.y=n,i.add(r);const s=new Cr;s.moveTo(-.58,0),s.lineTo(.58,0),s.lineTo(.52,.28),s.lineTo(.35,.54),s.lineTo(.35,.88),s.lineTo(-.35,.88),s.lineTo(-.35,.54),s.lineTo(-.52,.28),s.closePath();const o=new Xi(s,{depth:2.5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.022,bevelSegments:1,steps:1});o.rotateY(Math.PI/2);const a=new ct(o,j_);a.position.set(-1.25,0,0),a.castShadow=!0,r.add(a);for(const c of[-1,.4])rt(r,[.55,.06,.17],[0,.69,c],hu)}const tv=zt(8023639,.94,.03,{map:wn("paint","#8c8068")}),_u=zt(3749934,.97,.04);function hh(i,t,e,n=0){const r=new Xt;r.position.set(t,0,e),r.rotation.y=n,i.add(r);const s=tv,o=_u;for(const a of[-.42,.42])rt(r,[1.12,.11,.14],[0,.13,a],o);for(let a=0;a<6;a++)rt(r,[.19,.06,1.12],[-.47+a*.185,.22,0],s);for(const a of[-.45,0,.45])rt(r,[.16,.09,.95],[a,.035,0],o)}function ev(i,t,e){const n=new Xt;n.position.set(t,0,e),i.add(n);const r=zt(1778213,.94,.09);for(const o of[-1,1]){const a=new ct(new ve(.57,.57,.082,20),On);a.rotation.z=Math.PI/2,a.position.set(o*.28,.58,0),n.add(a);const c=new ct(new tn(.44,.045,8,24),Te);c.rotation.y=Math.PI/2,c.position.set(o*.33,.58,0),n.add(c)}const s=new ct(new ve(.31,.31,.6,16),r);s.rotation.z=Math.PI/2,s.position.y=.58,n.add(s);for(let o=0;o<10;o++){const a=o/10*Math.PI*2,c=new ct(new tn(.31+o*.014,.018,6,32),r);c.rotation.y=Math.PI/2,c.position.set(-.25+o*.052,.58,0),c.rotation.x=a*.035,n.add(c)}}const nv=zt(2106662,.98,.05),oc=zt(1054234,.92,.06),iv=new eu({color:11780802,roughness:.65,metalness:0,transparent:!0,opacity:.8,clearcoat:.05,depthWrite:!0}),uh=zt(12223806,.63,.41),Qn=zt(9084317,.55,.48);function rv(i){const t=new tn(.43,.13,10,28);for(let e=0;e<4;e++){const n=new ct(t,nv);n.rotation.x=Math.PI/2,n.position.y=.22+e*.25,n.castShadow=!0,i.add(n);const r=new ct(new tn(.285,.03,7,20),oc);r.rotation.x=Math.PI/2,r.position.y=.25+e*.25,i.add(r);for(let s=0;s<12;s++){const o=s*Math.PI/6,a=rt(i,[.11,.025,.08],[Math.cos(o)*.56,.21+e*.25,Math.sin(o)*.56],oc);a.rotation.y=o}}}function sv(i){rt(i,[1.15+.1,.15,1.1+.08],[0,.075,0],_u),rt(i,[1.15,1.25-.18,1.1],[0,.2+(1.25-.18)/2,0],iv),rt(i,[.28,.13,.14],[.22,1.3,0],Te);for(const r of[-1.15/2,1.15/2])for(const s of[-1.1/2,1.1/2])Lt(i,$(r,.2,s),$(r,1.35,s),.026,Qn);for(const r of[.3,.65,1.04,1.3]){for(const s of[-1.15/2,1.15/2])Lt(i,$(s,r,-1.1/2),$(s,r,1.1/2),.023,Qn);for(const s of[-1.1/2,1.1/2])Lt(i,$(-1.15/2,r,s),$(1.15/2,r,s),.023,Qn)}for(const r of[-.28,0,.28])for(const s of[-1.1/2,1.1/2])Lt(i,$(r,.2,s),$(r,1.3,s),.018,Qn)}function ov(i){const t=new Xt;i.add(t),rt(t,[1.55,.2,2.75],[0,.31,0],He),rt(t,[1.57,.85,1.42],[0,.81,-.67],uh),rt(t,[1.35,.46,1.4],[0,1.22,-.63],On);for(const n of[-1,1]){const r=rt(t,[.24,.26,.9],[n*.69,.85,-.65],uh);r.rotation.y=n*.12;for(const s of[-1.02,.86]){const o=new ct(new ve(.4,.4,.2,20),oc);o.rotation.z=Math.PI/2,o.position.set(n*.84,.38,s),o.castShadow=!0,t.add(o);const a=new ct(new ve(.2,.2,.21,16),Te);a.rotation.z=Math.PI/2,a.position.copy(o.position),t.add(a)}Lt(t,$(n*.68,.7,-.9),$(n*.68,2.4,-.9),.055,Qn),Lt(t,$(n*.68,.7,.55),$(n*.68,2.4,.55),.055,Qn)}rt(t,[1.57,.15,1.64],[0,2.42,-.16],He),rt(t,[.7,.18,.62],[0,1.12,.25],lu),Lt(t,$(0,1.24,.17),$(0,1.5,.36),.04,Te);const e=new ct(new tn(.19,.035,9,20),He);e.rotation.x=Math.PI/3,e.position.set(0,1.5,.36),t.add(e);for(const n of[-.45,.45])rt(t,[.12,2.4,.1],[n,1.35,1.32],Qn),Lt(t,$(n,1.1,1.27),$(n,2.1,1.27),.04,Te),rt(t,[.12,.08,2.6],[n,.34,2.17],Qn),rt(t,[.28,.045,2.5],[n,.37,2.17],Te);for(let n=.3;n<2.4;n+=.24)rt(t,[.95,.035,.1],[0,n,1.33],He);rt(t,[.28,.12,.18],[0,2.56,-.9],uu)}function av(i){rt(i,[1.75,1.13,.96],[0,.64,0],vu),rt(i,[1.88,.1,1.13],[0,.08,0],He);for(const e of[-.51,.51]){rt(i,[1.65,.09,.06],[0,.2,e],Te),rt(i,[1.65,.09,.06],[0,1.17,e],Te);for(let n=0;n<7;n++)rt(i,[.03,.53,.014],[-.62+n*.205,.7,e*1.02],He)}for(const e of[-.78,.78])for(const n of[-.45,.45])Lt(i,$(e,.12,n),$(e,1.3,n),.045,Te);const t=new ct(new ve(.11,.12,.42,12),He);t.position.set(.55,1.43,-.16),i.add(t)}function cv(i,t,e,n=!1){const r=new Xt;r.position.set(t,0,e),i.add(r);const s=n?6.4:13;Lt(r,$(0,0,0),$(0,s,0),n?.065:.12,On,12);for(const c of[1.6,5,9.3].filter(l=>l<s))for(const l of[-1,1])Lt(r,$(0,c,0),$(l*.31,c-.45,0),.025,Te);Lt(r,$(-1.6,s,0),$(1.6,s,0),.085,Qn);const o=new re({color:16241325});for(const c of[-1.1,1.1]){rt(r,[.98,.64,.13],[c,s-.07,-.03],He,[.21,0,0]),rt(r,[.83,.51,.037],[c,s-.08,.065],o,[.21,0,0]);for(const l of[-.38,.38])rt(r,[.06,.53,.07],[c+l,s-.08,.085],Te)}const a=new Mi(16768956,n?5:8,n?12:20,1.7);return a.position.set(0,s-1,0),r.add(a),a}function lv(i,t,e,n,r=0){const s=new Xt;s.position.set(t,0,e),s.rotation.y=r,i.add(s),Lt(s,$(-.59,0,0),$(-.59,3.6,0),.065,Te),Lt(s,$(.59,0,0),$(.59,3.6,0),.065,Te),rt(s,[1.2,.97,.1],[0,2.92,0],He);const o=new ct(new be(1.09,.85),new re({map:Lr(n,"NO UNAUTHORIZED ACCESS","#e5d6b5","#343d3e"),side:Ie}));o.position.set(0,2.92,.065),s.add(o);const a=o.clone();a.position.set(0,2.92,-.065),a.rotation.y=Math.PI,s.add(a);for(const c of[2.44,3.4])rt(s,[1.16,.03,.045],[0,c,.08],fu)}const Yr=zt(4745079,.73,.48),hv=zt(11563074,.65,.36),uv=zt(16777215,.92,.02,{map:wn("paint","#b4a78c")}),fh=zt(6706753,.93,.02,{map:wn("paint","#756952")}),vu=zt(3300721,.57,.42);zt(9260861,.61,.37);const fv=new re({map:Lr("FRAGILE","KEEP DRY"),transparent:!0,opacity:.46,depthWrite:!1,side:Ie});function oo(i,t,e,n,r,s,o){const a=new Xt;a.position.set(t,e,n),i.add(a),rt(a,[r,s,o],[0,s/2,0],uv);for(const l of[-1,1])for(const u of[-1,1])rt(a,[.06,s,.06],[l*(r/2-.06),s/2,u*(o/2-.04)],fh);for(const l of[s-.12,.12])rt(a,[r+.02,.045,o+.02],[0,l,0],fh);const c=new ct(new be(r*.6,s*.28),fv);c.position.set(0,s*.6,o/2+.02),a.add(c)}function dh(i,t,e,n=3){const r=n*2.4,s=2.1,o=new Xt;o.position.set(t,0,e),i.add(o);const a=-s/2,c=s/2;for(let l=0;l<=n;l++)for(const u of[a,c]){const h=l*2.4-r/2;rt(o,[.11,5.75,.11],[h,2.875,u],Yr);for(const f of[1,2.65,4.27,5.57])rt(o,[.19,.12,.2],[h,f,u],Yr)}for(const l of[1,2.65,4.3]){rt(o,[r+.25,.14,s+.1],[0,l,0],hv);for(let u=0;u<n;u++){const h=(u+.5)*2.4-r/2;if((u+Math.round(t))%3===0&&l>2)for(const f of[-.65,.55]){const d=new ct(new ve(.33,.33,1.1,12),vu);d.position.set(h+f,l+.64,0),o.add(d);for(const g of[l+.21,l+1.1]){const _=new ct(new tn(.33,.023,6,14),Te);_.rotation.x=Math.PI/2,_.position.set(h+f,g,0),o.add(_)}}else{const f=.89+.17*at(),d=1.5+.15*at(),g=1.08;oo(o,h-.58,l+.11,0,f,g,d),oo(o,h+.56,l+.11,0,f,g,d)}}}for(const l of[-r/2,r/2])for(let u=0;u<4.7;u+=1.6)Lt(o,$(l,u,a),$(l,u+1.6,c),.04,Yr),Lt(o,$(l,u,c),$(l,u+1.6,a),.04,Yr);for(let l=0;l<n;l++){const u=(l+.5)*2.4-r/2,h=new ct(new be(1.6,.14),new re({map:Lr("BAY "+String(l+1),"MAX 1200 KG","#d4e1df","#34546b"),transparent:!0}));h.position.set(u,2.73,a-.08),o.add(h)}}function dv(){const i=document.createElement("canvas");i.width=1024,i.height=640;const t=i.getContext("2d");let e=893371;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let s=0;s<170;s++){const o=n()*i.width,a=n()*i.height,c=12+n()*110,l=.35+n()*1.2,u=t.createRadialGradient(o,a,0,o,a,c);u.addColorStop(0,`rgba(9,16,19,${.04+n()*.19})`),u.addColorStop(1,"rgba(9,16,19,0)"),t.save(),t.translate(o,a),t.scale(1,l),t.fillStyle=u,t.fillRect(-c,-c,c*2,c*2),t.restore()}for(const s of[0,1,2]){const o=s*150-130;for(const a of[-1,1])t.beginPath(),t.moveTo(520+o+a*28,640),t.bezierCurveTo(480+o+a*34,490,640+o+a*26,220,530+o+a*22,-10),t.lineWidth=4.5+n()*3,t.strokeStyle="rgba(14,20,20,.17)",t.stroke();for(let a=0;a<50;a++){const c=a*13,l=515+o+24*Math.sin(a*.073+s);t.save(),t.translate(l,c),t.rotate(Math.sin(a*.13)*.18),t.fillStyle=`rgba(14,20,20,${.015+n()*.1})`,t.fillRect(-22,-3,44,3),t.restore()}}for(let s=0;s<440;s++){const o=n()*i.width,a=n()*i.height;t.fillStyle=n()>.55?`rgba(25,20,16,${n()*.11})`:`rgba(225,218,194,${n()*.05})`,t.fillRect(o,a,1+n()*18,.4+n()*3)}const r=new un(i);return r.colorSpace=Se,r.anisotropy=8,new re({map:r,transparent:!0,opacity:.81,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function pv(i){const t=new Xt;t.position.set(-13.3,0,-25.5),t.rotation.y=.52,i.add(t);const e=zt(3885903,.64,.66),n=zt(12485181,.52,.48),r=zt(6383976,.72,.5),s=5.5,o=-1,a=17,c=4.75/a;for(let l=0;l<a;l++){const u=l/(a-1),h=s+(o-s)*u,f=(l+1)*c;rt(t,[1.65,.075,.35],[0,f-.05,h],r);for(const d of[-1,1])rt(t,[.04,.14,.35],[d*.81,f,h],e)}for(const l of[-1,1]){const u=l*.8;Lt(t,$(u,.15,s+.28),$(u,5,o-.22),.1,e),Lt(t,$(u,.15,s-.05),$(u,5,o-.5),.06,e),Lt(t,$(u,1.13,s+.45),$(u,5.95,o-.32),.045,n);for(let h=0;h<8;h++){const f=h/7,d=s+(o-s)*f,g=f*4.75;Lt(t,$(u,g+.1,d),$(u,g+1.13,d),.031,n)}}rt(t,[3.2,.18,4.6],[0,4.82,-2.3],r);for(const l of[-1,1])Lt(t,$(l*1.58,4.9,-4.4),$(l*1.58,6,-4.4),.055,n),Lt(t,$(l*1.58,5.96,-4.4),$(l*1.58,5.96,-.3),.04,n);for(let l=0;l<3;l++){const u=-4+l*1.65;Lt(t,$(-1.25,4.67,u),$(-1.25,0,u),.12,e)}}const mv=zt(12874809,.75,.07),gv=zt(11909289,.88,.02);function _v(i,t,e){const n=new Xt;n.position.set(t,0,e),i.add(n),rt(n,[.54,.055,.54],[0,.025,0],lu);const r=new ct(new To(.19,.74,10),mv);r.position.y=.43,r.castShadow=!0,n.add(r);for(const s of[.37,.55]){const o=new ct(new ve(.126-(s-.35)*.18,.126-(s-.35)*.18,.07,12),gv);o.position.y=s,n.add(o)}}function vv(i,t,e){const n=new Xt;n.position.set(t,0,e),i.add(n);const r=zc([V_,On,W_]),s=new ct(new ve(.42,.42,1.18,14),r);s.position.y=.6,s.castShadow=!0,n.add(s);for(let a of[.17,.44,.83,1.06]){const c=new ct(new tn(.424,.023,5,16),Te);c.rotation.x=Math.PI/2,c.position.y=a,n.add(c)}const o=new ct(new ve(.38,.38,.04,14),He);o.position.y=1.2,n.add(o)}function ph(i,t,e,n,r=.022){const s=new Uc(n,28);s.rotateX(-Math.PI/2);const o=X_,a=new ct(s,o);a.position.set(t,r+at()*.005,e),a.scale.z=.42+at()*.5,a.rotation.y=at()*Math.PI,i.add(a);for(let c=0;c<3;c++){const l=new ct(new be(n*(.16+at()*.3),.007),Y_);l.rotation.x=-Math.PI/2,l.position.set(t+(at()-.5)*n,r+.008,e+(at()-.5)*n*.2),i.add(l)}}function xv(i){const t={value:0},e=new ct(new be(132,94,42,30),new vn({uniforms:{time:t},side:Ie,vertexShader:`uniform float time;varying vec3 vWorld;varying vec2 vUv;
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
   }`}));return e.rotation.x=-Math.PI/2,e.position.set(97,.025,6),e.receiveShadow=!1,e.frustumCulled=!1,i.add(e),n=>{t.value=n}}function Mv(i){const t=zt(7171687,.94,.07),e=zt(1778726,.87,.22),n=zt(13212241,.78,.11);for(const[u,h]of[[-30,16],[23.7,30]]){const f=(u+h)/2,d=h-u;rt(i,[.9,.75,d],[30,.01,f],t),rt(i,[.15,.16,d],[29.56,.34,f],e);for(let g=u+2;g<h;g+=3.6)rt(i,[.25,.24,.46],[29.54,.32,g],n),rt(i,[.43,.34,.52],[30.15,-.3,g],e)}for(const u of[-22,-12,-2,9,16.4,25.6]){const h=new Xt;h.position.set(29.1,0,u),i.add(h);const f=new ct(new ve(.18,.24,.43,12),e);f.position.y=.24,h.add(f);const d=new ct(new ve(.35,.35,.12,12),t);d.position.y=.5,h.add(d);for(const g of[-1,1])rt(h,[.22,.08,.12],[g*.26,.47,0],e)}const r=zt(6519681,.51,.57,{map:wn("metal","#52696b")});rt(i,[7.8,.4,4.9],[26,.18,14.1],r);for(let u=0;u<7;u++){const h=22.4+u*1.08;rt(i,[.13,.08,4.88],[h,.42,14.1],Te)}for(const u of[11.8,16.35])rt(i,[7.5,.12,.18],[26,.47,u],He);for(let u=0;u<3;u++)for(let h=0;h<2;h++){const f=26.6+h*.9,d=26.5+u*1.2,g=rt(i,[1.18,.77,.86],[f,.38+u*0,d],du);g.rotation.y=.02*(u%2?1:-1),rt(i,[1.24,.075,.91],[f,.8,d],He)}const s=document.createElement("canvas");s.width=s.height=256;const o=s.getContext("2d");o.clearRect(0,0,256,256),o.strokeStyle="rgba(183,198,191,.55)",o.lineWidth=2.1;for(let u=-256;u<512;u+=24)o.beginPath(),o.moveTo(u,0),o.lineTo(u+256,256),o.stroke(),o.beginPath(),o.moveTo(u,256),o.lineTo(u+256,0),o.stroke();const a=new un(s);a.colorSpace=Se,a.wrapS=a.wrapT=vi,a.repeat.set(8,4);const c=new ct(new be(10,2.5),new re({map:a,transparent:!0,opacity:.32,side:Ie,depthWrite:!1}));c.position.set(28,1.55,30.2),c.rotation.y=Math.PI/2,i.add(c);for(let u=23.5;u<=32.5;u+=2.25)Lt(i,$(u,.2,30.2),$(u,3.05,30.2),.043,Te);Lt(i,$(23.5,3.05,30.2),$(32.5,3.05,30.2),.047,Te);for(const u of[16.3,23.4])Lt(i,$(29,0,u),$(29,1.15,u),.038,Te),Lt(i,$(29,1.15,u),$(30.1,1.15,u),.038,Te),Lt(i,$(30.1,0,u),$(30.1,1.15,u),.038,Te);const l=zt(9673361,.4,.73);for(const u of[19.62,20.38])Lt(i,$(30.2,.5,u),$(30.2,-2.8,u),.025,l);for(let u=.3;u>-2.8;u-=.3)Lt(i,$(30.22,u,19.62),$(30.22,u,20.38),.023,l);for(let u=0;u<3;u++)rt(i,[.56,.018,.1],[27.5+u*.6,.032,20],n)}function yv(i,t){const e=new Float32Array(t*6),n=new Float32Array(t);for(let a=0;a<t;a++){const c=(at()-.5)*66,l=at()*20,u=(at()-.5)*70,h=a*6;e[h]=c,e[h+1]=l,e[h+2]=u,e[h+3]=c+.055,e[h+4]=l-(.28+at()*.27),e[h+5]=u+.045,n[a]=12+at()*19}const r=new Ue;r.setAttribute("position",new hn(e,3));const s=new Ic({color:10927561,transparent:!0,opacity:.17,depthWrite:!1,blending:_r}),o=new dd(r,s);return o.frustumCulled=!1,o.renderOrder=5,i.add(o),{rain:o,update(a,c,l){o.position.x=c,o.position.z=l;const u=r.attributes.position;for(let h=0;h<t;h++){const f=h*6;let d=u.array[f+1];d-=a*n[h],d<-.5&&(d+=20),u.array[f+1]=d,u.array[f+4]=d-.42}u.needsUpdate=!0}}}function Sv(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{if(n instanceof ct&&n.geometry instanceof Ue&&n.renderOrder===0){const r=n.material;if(Array.isArray(r))return;const s=t.get(r)||[];s.push(n),t.set(r,s)}});let e=0;for(const[n,r]of t){if(r.length<2)continue;const s=new Map;for(const o of r){const a=o.geometry,c=Object.entries(a.attributes).map(([u,h])=>`${u}:${h.itemSize}:${h.normalized}`).sort().join("|")+":"+!!a.index,l=s.get(c)||[];l.push(o),s.set(c,l)}for(const o of s.values()){if(o.length<2)continue;const a=o.map(h=>{const f=h.geometry.clone();return f.applyMatrix4(h.matrixWorld),f}),c=O_(a,!1);if(a.forEach(h=>h.dispose()),!c)continue;c.computeBoundingBox();const l=c.boundingBox,u=new ct(c,n);u.castShadow=n instanceof pe&&l.max.y-l.min.y>.28,u.receiveShadow=!0,u.name=`batched-${e++}`;for(const h of o)h.parent?.remove(h);i.add(u)}}return e}function Ev(i,t=!1){sc=42811,i.background=new Qt(5594466),i.fog=new Pc(6776163,.0125),i.environment=t?null:k_(),i.environmentIntensity=.8,i.add(new qd(11847376,2896696,1.26)),i.add(new Kd(11384245,.23));const e=new Il(16768707,2.36);e.position.set(65,38,30),e.castShadow=!t,t||(e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-75,e.shadow.camera.right=75,e.shadow.camera.top=75,e.shadow.camera.bottom=-75,e.shadow.camera.near=1,e.shadow.camera.far=170,e.shadow.bias=-22e-5,e.shadow.normalBias=.05),i.add(e);const n=new Il(11716044,.67);n.position.set(-16,26,30),i.add(n);const r=new ct(new gi(195,48,26),new vn({side:je,depthWrite:!1,fog:!1,toneMapped:!1,vertexShader:"varying vec3 vDir; void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir;
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
 }`}));r.frustumCulled=!1,r.renderOrder=-10,i.add(r);const s=new ct(new gi(2.7,22,12),new re({color:16766628,transparent:!0,opacity:.18,fog:!1}));s.position.set(84,24,34),i.add(s);const o=zt(12896457,.62,.07,{map:wn("ground","#242a2e",512)});o.map.repeat.set(23,26),o.bumpMap=o.map,o.bumpScale=.023;const a=new ct(new be(250,250),o);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const c=G_(t);c&&i.add(c);const l=[],u=[],h=xv(i);for(const B of[-4,16])for(const K of[0,1]){const Tt=-36+K*6.5,k=(B===-4?1:4)+K;Gs(i,l,Tt,B,Math.PI/2,0,k%6),Gs(i,[],Tt,B,Math.PI/2,1,(k+2)%6),K===0&&Gs(i,[],Tt,B,Math.PI/2,2,(k+4)%6)}for(const[B,K,Tt,k,Q]of B_){const pt=Math.abs(Math.round(B*1.7+Tt*.77+K*2))%6;Gs(i,K<.1?l:[],B,Tt,Math.PI/2+k,Math.round(K/2.59),pt,Q,K)}J_(i,10.6,1.6,1.03),lh(i,46,-42,.85),lh(i,54,37,.65);const f=new Xt;i.add(f);const d=zt(5792103,.86,.16,{map:wn("ground","#636970")}),g=zt(11118755,.78,.08,{map:wn("ground","#797771",512)});g.map.repeat.set(4,3),g.bumpMap=g.map,g.bumpScale=.018;const _=zt(3951955,.68,.38,{map:wn("metal","#43535a")}),m=zt(9149082,.6,.64),p=zt(2372152,.81,.31);rt(f,[28,.22,17],[-2,.01,-19.5],g);const T=new ct(new be(27.7,16.7),dv());T.rotation.x=-Math.PI/2,T.position.set(-2,.144,-19.5),T.renderOrder=2,f.add(T);const M=7.1;for(const B of[-16,12])rt(f,[.3,M,17],[B,M/2,-19.5],d),l.push({minX:B-.15,maxX:B+.15,minZ:-28,maxZ:-11,height:M});rt(f,[28,M,.28],[-2,M/2,-28],d),l.push({minX:-16,maxX:12,minZ:-28.14,maxZ:-27.86,height:M});for(const[B,K]of[[-16,-4.7],[1,12]]){const Tt=(B+K)/2;rt(f,[K-B,M,.28],[Tt,M/2,-11],d),l.push({minX:B,maxX:K,minZ:-11.14,maxZ:-10.86,height:M})}rt(f,[5.7,1.4,.31],[-1.85,6.45,-11],p);for(const B of[-27.8,-22.6,-17.4,-12]){for(const K of[-15,11])Lt(f,$(K,0,B),$(K,8.5,B),.13,m);for(const K of[-1,1])Lt(f,$(-2,9.7,B),$(-2+K*14,7.1,B),.16,m)}const x=new Cr;x.moveTo(-14,0),x.lineTo(0,2.61),x.lineTo(14,0),x.closePath();const R=new Xi(x,{depth:.24,bevelEnabled:!1,steps:1});for(const B of[-28.18,-10.94]){const K=new ct(R,d);K.position.set(-2,7.1,B),K.castShadow=!0,K.receiveShadow=!0,f.add(K);for(let Tt=-15.8;Tt<11.9;Tt+=.29){const k=2.6*(1-Math.abs(Tt+2)/14);k>.08&&rt(f,[.032,k,.034],[Tt,7.1+k/2,B+.25],p)}}for(const B of[-1,1]){const K=new ct(new Ln(14.25,.2,17.5),_);K.position.set(-2+B*7,8.42,-19.5),K.rotation.z=-B*.184,K.castShadow=!0,f.add(K)}for(let B=-14;B<=10;B+=2.6)rt(f,[.08,.1,17],[B,7.5+2*(1-Math.abs(B+2)/14),-19.5],m);for(const[B,K]of[[-12,-25],[7,-25],[-11,-16],[7,-17],[-11,-22],[7,-22]]){rt(f,[2.1,.24,1.1],[B,.12,K],du),rt(f,[1.9,1.1,1],[B,.82,K],On);for(const Tt of[-1,1])rt(f,[.07,1.03,1.06],[B+Tt*.83,.83,K],Te);l.push({minX:B-1.05,maxX:B+1.05,minZ:K-.56,maxZ:K+.56,height:1.6})}const A=new Xt;A.position.set(-2,6.6,-20),f.add(A);const P=new ct(new ve(1.2,1.2,.3,18),m);P.rotation.x=Math.PI/2,A.add(P);const I=new Xt;A.add(I);for(let B=0;B<4;B++)rt(I,[.35,.04,1],[Math.cos(B*Math.PI/2)*.46,0,Math.sin(B*Math.PI/2)*.46],p,[0,B*Math.PI/2,0]);const E=new re({color:13098456}),S=new re({color:16762763});for(const B of[-25,-19,-14])for(const K of[-9,5]){const Tt=B===-19?S:E,k=new ct(new To(.68,.36,18,1,!0),m);k.rotation.x=Math.PI,k.position.set(K,6.62,B),f.add(k);const Q=new ct(new gi(.22,12,8),Tt);Q.position.set(K,6.39,B),f.add(Q),Lt(f,$(K,6.78,B),$(K,7.64,B),.027,p);for(const It of[-1,1])Lt(f,$(K+It*1.4,6.98,B),$(K+It*1.4,7.7,B),.015,p);const pt=new Mi(B===-19?16764059:12772075,t?11:24,16,1.5);pt.position.set(K,6.1,B),f.add(pt)}const C=new Mi(16757866,20,12,1.5);C.position.set(-2,2.7,-19.1),f.add(C);for(const B of[-12,-7,3,8])rt(f,[2.7,.48,.045],[B,5.4,-10.81],new re({color:7769233,transparent:!0,opacity:.8})),rt(f,[2.7,.09,.1],[B,5.78,-10.73],m),rt(f,[.08,.7,.1],[B+1.1,5.42,-10.73],m);dh(f,-9,-25.3,3),dh(f,6.8,-25.3,3),pv(f);const U=zt(7306107,.81,.35,{map:wn("metal","#8c9490",512)});for(const[B,K,Tt]of[[-2,-27.8,27.8],[-2,-10.81,11.25]]){const k=new ct(so(Tt,6.98,.06,.23),U);k.position.set(B,.12,K),K>-20&&(k.rotation.y=Math.PI),f.add(k)}for(const[B,K]of[[-15.8,1],[11.8,-1]]){const Tt=new ct(so(16.2,6.95,.055,.23),U);Tt.position.set(B,.12,-19.5),Tt.rotation.y=K*Math.PI/2,f.add(Tt)}for(let B=-15;B<12;B+=.36){const K=7.26+2.35*(1-Math.abs(B+2)/14);rt(f,[.038,.052,16.8],[B,K,-19.5],Yr)}for(let B=0;B<16;B++){const K=-13+at()*22,Tt=-25.8+at()*12;ph(f,K,Tt,.3+at()*1.15,.14)}for(const B of[-27.6,-18.9,-13.2])for(const K of[-13,9]){const Tt=rt(f,[.09,.9,2.1],[K,4.2,B],p);Tt.rotation.y=.2;for(let k=0;k<5;k++)rt(f,[.1,.045,1.9],[K+.1,3.89+k*.14,B],m)}const z=new Xt;z.position.set(42,0,-33),i.add(z),rt(z,[7,21,7],[0,10.5,0],zt(2568761,.78,.35)),rt(z,[9,4,9],[0,21.3,0],zt(4085084,.53,.3));for(let B of[-1,1])rt(z,[9,.13,.18],[0,22.6,B*4.53],new re({color:12242130}));const Y=new Xt;Y.position.set(59,0,-30),i.add(Y),rt(Y,[30,10,25],[0,5,0],zt(2568760,.82,.22));for(let B=2;B<10;B+=2.6){rt(Y,[30,.1,.13],[0,B,12.6],On);for(let K=-12;K<13;K+=6)rt(Y,[3.8,.85,.12],[K,B+.7,12.65],new re({color:12372409,transparent:!0,opacity:.36}))}rt(Y,[30,1.3,25],[0,10.5,0],He);const H={barrel:[.48,.48,1.2],ibc_tote:[.67,.64,1.5],tire_stack:[.55,.55,1.13],crate_stack:[1.38,.9,2.2],forklift:[1.08,1.85,2.5],generator:[1.07,.65,1.43]},V=[];for(const[B,K,Tt,k,Q]of z_){if(B==="light_mast"||B==="floodlight_stand"){V.push(cv(i,K,k,B==="floodlight_stand"));continue}const pt=new Xt;pt.position.set(K,Tt,k),pt.rotation.y=Q,i.add(pt);const It=H[B];if(It&&Tt<.35){const[At,Yt,he]=It,L=Math.abs(Math.cos(Q))*At+Math.abs(Math.sin(Q))*Yt,st=Math.abs(Math.sin(Q))*At+Math.abs(Math.cos(Q))*Yt;l.push({minX:K-L,maxX:K+L,minZ:k-st,maxZ:k+st,height:he})}if(B==="jersey_barrier")Q_(pt,0,0);else if(B==="traffic_cone")_v(pt,0,0);else if(B==="barrel")vv(pt,0,0);else if(B==="pallet")hh(pt,0,0);else if(B==="pallet_stack")for(let At=0;At<4;At++){const Yt=new Xt;Yt.position.y=At*.19,pt.add(Yt),hh(Yt,0,0,At%2?.035:-.025)}else if(B==="cable_reel")ev(pt,0,0);else if(B==="ibc_tote")sv(pt);else if(B==="tire_stack")rv(pt);else if(B==="forklift")ov(pt);else if(B==="generator")av(pt);else if(B==="sign_post")lv(pt,0,0,"LANE "+(K<-20?"3":K>10?"5":"4"));else if(B==="crate_wood")oo(pt,0,0,0,1.1,1,1.2);else if(B==="crate_stack")for(const[At,Yt,he]of[[-.6,0,-.4],[.55,0,-.32],[-.28,1.04,.08]])oo(pt,At,Yt,he,1.1,1,.86)}const J=zt(9673105,.89,.04),W=zt(10521439,.87,.06);for(let B=-35;B<28;B+=7){const K=rt(i,[1.8,.012,.065],[B,.035,6],J);K.renderOrder=2}for(const B of[-.85,12.8]){const K=rt(i,[74,.011,.09],[-7,.036,B],W);K.renderOrder=2}for(let B=-32;B<28;B+=10)for(const K of[-.5,12.45]){rt(i,[1.5,.015,.48],[B,.024,K],He);for(let Tt=0;Tt<6;Tt++)rt(i,[.06,.018,.42],[B-.6+Tt*.23,.04,K],Te)}const gt=q_();for(let B=-2;B<11;B+=1.24){const K=new ct(new be(2.5,1.05),gt);K.rotation.x=-Math.PI/2,K.position.set(-31,.045,B),K.renderOrder=2,i.add(K)}for(let B=0;B<73;B++){const K=-36+at()*64,Tt=-26+at()*54;at()<.8&&ph(i,K,Tt,.42+at()*2.3)}Mv(i);const yt=new Xt;yt.position.set(75,-2.6,-13),i.add(yt),rt(yt,[32,7,85],[0,0,0],zt(1318440,.35,.48)),rt(yt,[25,7,15],[0,7,-21],zt(5399402,.67,.4));for(let B=-7;B<39;B+=8)for(const K of[-8,0,8])rt(yt,[6,2.9,6.5],[K,5,B],zc(gu));Sv(i);const Rt=yv(i,t?950:2700),$t=V.map((B,K)=>({p:B,phase:K*1.38}));return{scene:i,obstacles:l,hitSurfaces:u,rain:Rt.rain,lamps:V,tick:(B,K,Tt,k)=>{Rt.update(B,Tt,k),pu.time.value=K,h(K),c&&(c.material.uniforms.time.value=K);for(const{p:Q,phase:pt}of $t)Q.intensity=8.5+Math.sin(K*1.9+pt)*.7}}}function ao(i,t,e,n=.42){return t<-43||t>30.5||e>32||e<-33?!0:i.some(r=>r.height>1&&t+n>r.minX&&t-n<r.maxX&&e+n>r.minZ&&e-n<r.maxZ)}const zr=new w;function mn(i,t,e,n,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();const l=.5*o/(o+a),u=1-zr.angleTo(i)/c;return Math.sign(zr[e])===1?u*l:a/(o+a)+l+l*(1-u)}class Ro extends Ln{constructor(t=1,e=1,n=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new w,l=new w,u=new w(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,_=new w,m=.5/o;for(let p=0,T=0;p<h.length;p+=3,T+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*s,h[p+1]=u.y*Math.sign(c.y)+l.y*s,h[p+2]=u.z*Math.sign(c.z)+l.z*s,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[T+0]=mn(_,l,"z","y",s,n),d[T+1]=1-mn(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),d[T+0]=1-mn(_,l,"z","y",s,n),d[T+1]=1-mn(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),d[T+0]=1-mn(_,l,"x","z",s,t),d[T+1]=mn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),d[T+0]=1-mn(_,l,"x","z",s,t),d[T+1]=1-mn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),d[T+0]=1-mn(_,l,"x","y",s,t),d[T+1]=1-mn(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),d[T+0]=mn(_,l,"x","y",s,t),d[T+1]=1-mn(_,l,"y","x",s,e);break}}static fromJSON(t){return new Ro(t.width,t.height,t.depth,t.segments,t.radius)}}const Kn=new pe({color:3620672,metalness:.77,roughness:.36}),ac=new pe({color:2699319,metalness:.72,roughness:.49}),Ge=new pe({color:1778729,metalness:.65,roughness:.42}),li=new pe({color:8159867,metalness:.87,roughness:.29}),En=new pe({color:5133140,metalness:.86,roughness:.38}),cc=new pe({color:2107180,metalness:.14,roughness:.77}),hr=new pe({color:2830905,metalness:.01,roughness:1}),lc=new pe({color:2108212,metalness:.02,roughness:.98});new pe({color:10126434,metalness:.65,roughness:.38});new eu({color:3501437,metalness:.25,roughness:.1,transparent:!0,opacity:.58,clearcoat:1});const Tv=new re({color:15365459});function wv(i=42){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#e7e5df",e.fillRect(0,0,512,512);let n=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let s=0;s<16e3;s++){const o=n()*512,a=n()*512,c=n();e.fillStyle=c<.6?`rgba(10,13,16,${n()*.09})`:`rgba(255,252,235,${n()*.05})`,e.fillRect(o,a,.15+n()*1.3,.2+n()*6)}for(let s=0;s<220;s++){const o=n()*512,a=n()*512;e.strokeStyle=n()<.5?`rgba(12,18,24,${.025+n()*.12})`:`rgba(255,252,243,${.04+n()*.2})`,e.lineWidth=.25+n()*.7,e.beginPath(),e.moveTo(o,a),e.lineTo(o+1+n()*42,a+(n()-.5)*2),e.stroke()}for(let s=0;s<38;s++){const o=n()*512,a=n()*512,c=5+n()*40,l=e.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,`rgba(20,22,20,${n()*.14})`),l.addColorStop(1,"rgba(20,22,20,0)"),e.fillStyle=l,e.fillRect(o-c,a-c,c*2,c*2)}const r=new un(t);return r.colorSpace=Se,r.wrapS=r.wrapT=vi,r.repeat.set(2,2),r.anisotropy=8,r}function bv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#a1a9ae",t.fillRect(0,0,256,256);let e=2805;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);for(let s=0;s<256;s+=3)for(let o=0;o<256;o+=3){const a=Math.floor(n()*28);t.fillStyle=`rgba(${30+a},${35+a},${40+a},.16)`,t.fillRect(o+(Math.floor(s/3)%2?1:0),s,2.2,1)}for(let s=0;s<900;s++){const o=n()*256,a=n()*256;t.fillStyle=`rgba(15,19,24,${n()*.12})`,t.fillRect(o,a,1,4+n()*7)}const r=new un(i);return r.colorSpace=Se,r.wrapS=r.wrapT=vi,r.repeat.set(4,3),r.anisotropy=8,r}const mh=bv();for(const i of[hr,lc])i.map=mh,i.bumpMap=mh,i.bumpScale=.012;const gh=wv();for(const i of[Kn,ac,Ge,li,En])i.map=gh,i.bumpMap=gh,i.bumpScale=.006,i.needsUpdate=!0;const Av=new Ln(1,1,1),Me=new Ro(1,1,1,2,.12);function ee(i,t,e,n,r=Av,s){const o=new ct(r,n);return o.position.set(...t),o.scale.set(...e),s&&o.rotation.set(...s),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function Hr(i,t,e,n,r,s=14){const o=new ct(new ve(e,e,n,s),r);return o.rotation.x=Math.PI/2,o.position.set(...t),o.castShadow=!0,i.add(o),o}function Rv(){const i=document.createElement("canvas");i.width=512,i.height=128;const t=i.getContext("2d");t.fillStyle="#30383a",t.fillRect(0,0,i.width,i.height),t.fillStyle="#d3d5c9",t.font="700 43px monospace",t.fillText("PAC-9",13,57),t.fillStyle="#a6a89d",t.font="24px monospace",t.fillText("LONGSHORE  //  B4  /  05:42",14,94);const e=new un(i);return e.colorSpace=Se,new re({map:e,transparent:!0,opacity:.83,depthWrite:!1})}function _h(i,t){const e=new Cr;e.moveTo(.12,-.13),e.lineTo(1.46,-.13),e.lineTo(1.52,-.07),e.lineTo(1.52,.075),e.lineTo(1.43,.13),e.lineTo(.12,.13),e.closePath();for(let s=0;s<7;s++){const o=.3+s*.171;for(const a of[-.055,.056]){const c=new ro;c.absellipse(o,a,.049,.027,0,Math.PI*2,!0,0),e.holes.push(c)}}const n=new Xi(e,{depth:.018,bevelEnabled:!0,bevelThickness:.009,bevelSize:.006,bevelSegments:1,steps:1,curveSegments:8});n.rotateY(Math.PI/2);const r=new ct(n,Kn);r.position.set(t*.136,-.013,0),r.castShadow=!0,i.add(r);for(let s=0;s<3;s++)ee(i,[t*.16,-.115+s*.116,-.88],[.026,.017,1.36],En)}function Cv(i){const t=new Cr;t.moveTo(-.16,-.12),t.lineTo(.42,-.12),t.lineTo(.54,-.27),t.lineTo(.8,-.27),t.lineTo(.91,-.17),t.lineTo(.91,.03),t.lineTo(.77,.17),t.lineTo(-.16,.14),t.closePath();const e=new ro;e.absellipse(.55,-.015,.24,.083,0,Math.PI*2,!0),t.holes.push(e);const n=new ct(new Xi(t,{depth:.22,bevelEnabled:!0,bevelSegments:2,bevelSize:.016,bevelThickness:.016,curveSegments:12}),cc);n.rotation.y=Math.PI/2,n.position.set(-.11,-.125,.15),i.add(n),ee(i,[0,-.12,.93],[.31,.38,.11],cc,Me),ee(i,[0,-.12,.99],[.33,.42,.058],Ge,Me);for(let r=0;r<6;r++)ee(i,[.171,-.1+r*.049,.95],[.012,.018,.11],En)}function Pv(i){ee(i,[0,-.34,.36],[.15,.4,.2],cc,Me,[.24,0,0]);for(let c=0;c<4;c++)ee(i,[.1,-.26-c*.075,.42],[.026,.027,.19],Ge);const t=new ct(new tn(.12,.017,6,18,Math.PI*1.6),En);t.rotation.y=Math.PI/2,t.position.set(.07,-.25,.22),i.add(t);const e=new Xt;e.position.set(-.29,-.17,-.84),i.add(e);const n=new ct(new ve(.12,.17,.55,16),lc);n.rotation.set(.59,0,-.28),n.position.set(-.18,-.27,.2),e.add(n);const r=ee(e,[-.125,-.195,.055],[.34,.19,.29],hr,Me,[0,0,-.23]);r.rotation.y=-.1,ee(e,[-.022,.006,-.04],[.27,.15,.28],hr,Me,[0,0,-.18]);for(let c=0;c<4;c++){const l=ee(e,[-.17+c*.078,.075,-.175],[.069,.082,.23],hr,Me,[-.27,0,0]);l.rotation.y=.06+c*.05,ee(e,[-.17+c*.078,.105,-.155],[.063,.017,.11],En)}const s=ee(e,[.134,-.058,-.018],[.105,.12,.18],hr,Me,[0,.2,-.42]);s.rotation.y=.42;const o=new Xt;o.position.set(.16,-.44,.73),i.add(o);const a=new ct(new ve(.12,.18,.55,14),lc);a.rotation.set(.47,.08,.11),a.position.set(.14,-.19,.12),o.add(a);for(let c=0;c<4;c++)ee(o,[.13,-.03-c*.13,.01+c*.065],[.28,.023,.27],hr,Me,[.47,.08,.1])}class Lv{root=new Xt;muzzle=new Xt;flash=new ct(new be(.19,.42),new re({color:16769181,transparent:!0,opacity:0,depthWrite:!1,side:Ie,blending:_r}));light=new Mi(16757852,0,6,2);kick=0;reloadAnim=0;aim=0;time=0;constructor(t){t.add(this.root);const e=this.root;ee(e,[0,-.11,.19],[.34,.24,.75],ac,Me),ee(e,[0,.025,.075],[.37,.2,.72],Kn,Me),ee(e,[0,.112,.035],[.3,.07,.66],Ge,Me),ee(e,[0,-.015,-.17],[.33,.185,.48],En,Me),ee(e,[0,.032,.49],[.39,.12,.15],Kn,Me),Hr(e,[0,-.014,-1.04],.088,1.4,Ge),_h(e,-1),_h(e,1),ee(e,[0,-.133,-.84],[.25,.029,1.33],Ge),ee(e,[0,.139,-.83],[.27,.026,1.41],Ge);for(let h=0;h<18;h++){const f=-1.46+h*.103;ee(e,[0,.169,f],[.23,.025,.041],h%4===0?li:Kn,Me)}for(let h=0;h<8;h++)ee(e,[0,-.145,-1.38+h*.16],[.22,.023,.04],En);for(const h of[-1,1])for(let f=0;f<5;f++)ee(e,[h*.147,.002,-.93+f*.2],[.018,.05,.086],En);Hr(e,[0,-.014,-1.87],.064,.73,li),Hr(e,[0,-.014,-2.04],.084,.27,Ge);for(let h=0;h<4;h++){const f=Hr(e,[0,-.014,-2.06+h*.065],.084,.015,En);f.material=li}Hr(e,[0,-.014,-2.2],.08,.18,Kn);for(const h of[-1,1])for(let f=0;f<2;f++)ee(e,[h*.081,0,-2.24+f*.071],[.016,.036,.046],Ge);for(const h of[-1,1]){for(const f of[-.13,.2,.46]){const d=new ct(new ve(.022,.022,.012,12),li);d.rotation.z=Math.PI/2,d.position.set(h*.185,-.085,f),e.add(d)}ee(e,[h*.19,-.007,.11],[.019,.09,.19],Ge),ee(e,[h*.2,-.02,.3],[.01,.035,.085],li)}const n=ee(e,[-.205,.045,-.08],[.02,.08,.24],Ge,Me);n.rotation.z=-.1;const r=new ct(new be(.26,.066),Rv());r.rotation.y=-Math.PI/2,r.position.set(-.201,-.055,.18),e.add(r),ee(e,[0,-.37,.16],[.22,.38,.25],ac,Me,[.2,0,0]),ee(e,[0,-.57,.08],[.23,.09,.26],Ge,Me,[.2,0,0]);for(let h=0;h<9;h++)ee(e,[.113,-.26-h*.037,.13-h*.009],[.014,.019,.23],En);Cv(e);const s=new Xt;s.position.set(0,.155,-.38),s.scale.setScalar(.83),e.add(s),ee(s,[0,.024,0],[.22,.075,.34],Ge,Me);for(const h of[-1,1]){ee(s,[h*.156,.242,-.045],[.057,.282,.205],En,Me),ee(s,[h*.156,.243,.088],[.048,.23,.038],Kn,Me);for(const d of[-.09,.08])ee(s,[h*.147,.14,d],[.044,.052,.047],li,Me);const f=ee(s,[h*.156,.385,-.043],[.056,.045,.19],Ge,Me);f.rotation.z=h*.035}ee(s,[0,.399,-.044],[.355,.063,.22],Kn,Me),ee(s,[0,.11,-.045],[.35,.072,.22],Ge,Me),ee(s,[0,.445,-.045],[.303,.017,.16],Ge,Me);const o=new re({color:3232871,transparent:!0,opacity:.31,depthWrite:!1,side:Ie}),a=new ct(new be(.245,.225),o);a.position.set(0,.26,.052),s.add(a);const c=new ct(new be(.243,.223),new re({color:5801114,transparent:!0,opacity:.08,depthWrite:!1,side:Ie}));c.position.set(0,.26,-.112),s.add(c);const l=new re({color:16742230,transparent:!0,opacity:.68,depthWrite:!1,side:Ie,blending:_r}),u=new ct(new tn(.042,.0038,6,32),l);u.position.set(0,.256,.059),s.add(u),ee(s,[0,.256,.065],[.008,.008,.004],Tv);for(const h of[-1,1]){ee(s,[h*.205,.28,-.01],[.046,.05,.11],Kn,Me);const f=new ct(new ve(.045,.045,.024,14),Ge);f.rotation.z=Math.PI/2,f.position.set(h*.228,.28,.003),s.add(f)}for(const h of[-.21,.11])ee(s,[0,.05,h],[.28,.038,.083],li,Me);Pv(e),this.muzzle.position.set(0,-.013,-2.3),e.add(this.muzzle),this.flash.rotation.z=.3,this.muzzle.add(this.flash),this.muzzle.add(this.light),this.root.scale.setScalar(.89),this.root.position.set(.68,-.645,-.92),this.root.rotation.y=.16}shoot(){this.kick=1,this.flash.material.opacity=1,this.flash.rotation.z=Math.random()*6,this.light.intensity=17}reload(){this.reloadAnim=1}update(t,e,n,r,s){this.time+=t,this.kick=Math.max(0,this.kick-t*5.2),this.aim=Rn.damp(this.aim,s?1:0,11,t),this.reloadAnim=Math.max(0,this.reloadAnim-t/1.45);const o=Math.sin(this.time*(r?14:9))*Math.min(.016,n*.012);this.root.position.set(.68-this.aim*.56+Math.sin(e*2)*.003,-.645+this.aim*.29+o-this.kick*.073,-.91-this.aim*.16+this.kick*.13),this.root.rotation.set(-this.kick*.16+Math.sin(e*1.3)*.004+Math.sin(this.reloadAnim*Math.PI)*.31,.16-this.aim*.16,Math.sin(e*6)*Math.min(n*.011,.018)+Math.sin(this.reloadAnim*Math.PI)*-.3),this.flash.material.opacity=Math.max(0,this.flash.material.opacity-t*14),this.light.intensity=Math.max(0,this.light.intensity-t*210)}}const Li=new pe({color:3492173,roughness:.42,metalness:.78}),rn=new pe({color:8160640,roughness:.45,metalness:.72}),Xe=new pe({color:3423035,roughness:.71,metalness:.38}),hc=new pe({color:11053728,roughness:.41,metalness:.69}),kr=new pe({color:1778210,roughness:.92,metalness:.14}),Iv=new re({color:16214853}),fa=new re({color:15970401});new pe({color:10373431,roughness:.54,metalness:.48});const ar=new pe({color:11908263,roughness:.54,metalness:.46}),da=new pe({color:13683124,roughness:.62,metalness:.29}),Gr=new pe({color:12153150,roughness:.59,metalness:.37}),Dv=new Ro(1,1,1,2,.075);function Uv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");let e=12122026;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);t.fillStyle="#dedad2",t.fillRect(0,0,256,256);for(let s=0;s<7e3;s++){const o=n()*256,a=n()*256;t.fillStyle=n()>.5?"rgba(5,15,20,.13)":"rgba(255,255,255,.08)",t.fillRect(o,a,.1+n()*2,.1+n()*7)}for(let s=0;s<180;s++){const o=n()*256,a=n()*256;t.strokeStyle="rgba(37,40,41,.16)",t.lineWidth=.25+n()*.55,t.beginPath(),t.moveTo(o,a),t.lineTo(o+n()*30,a+n()),t.stroke()}const r=new un(i);return r.colorSpace=Se,r.wrapS=r.wrapT=vi,r.repeat.set(2,2),r.anisotropy=4,r}const vh=Uv();for(const i of[Li,rn,Xe,hc])i.map=vh,i.bumpMap=vh,i.bumpScale=.009,i.needsUpdate=!0;const Nv=new gi(1,20,14);function se(i,t,e,n,r){const s=new ct(Dv,n);return s.position.set(...t),s.scale.set(...e),r&&s.rotation.set(...r),s.castShadow=!0,i.add(s),s}function cr(i,t,e,n){const r=new ct(Nv,n);return r.position.set(...t),r.scale.set(...e),r.castShadow=!0,i.add(r),r}function Dn(i,t,e,n,r,s=8){const o=e.clone().sub(t),a=new ct(new ve(n,n,o.length(),s),r);return a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new w(0,1,0),o.normalize()),a.castShadow=!0,i.add(a),a}class Fv{kind;root=new Xt;body=new Xt;head=new Xt;legs=[];knees=[];rotors=[];health;maxHealth;alive=!0;phase=Math.random()*Math.PI*2;targetable=[];shootTimer=1+Math.random()*2;speed=1.1+Math.random()*.4;lastHitAt=0;hitFlash=0;isTarget=!0;home=new w;route=[];routeTimer=0;lastPlayerPosition=new w;heading=0;mode="patrol";alerted=!1;originalMaterials=new Map;constructor(t,e,n){this.kind=t,this.health=t==="gull"?72:118,this.maxHealth=this.health,this.speed=t==="gull"?1.85:1.2,this.root.position.set(e,0,n),this.home.set(e,0,n),this.root.add(this.body),this.routeTimer=Math.random(),t==="hound"?this.buildHound():this.buildGull(),this.body.traverse(r=>{r instanceof ct&&(r.userData.enemy=this,this.targetable.push(r),this.originalMaterials.set(r,r.material))})}buildHound(){const t=this.body;cr(t,[0,.98,0],[.32,.2,.6],Xe),se(t,[0,1.07,-.07],[.63,.22,1.24],ar),se(t,[0,1.23,-.12],[.52,.17,.93],da),se(t,[0,1.32,-.2],[.44,.07,.78],Xe);for(const n of[-1,1]){se(t,[n*.345,1.05,-.14],[.12,.3,1.06],ar);for(const r of[-.5,.42]){const s=new Xt;s.position.set(n*.39,.97,r),t.add(s),this.legs.push(s),cr(s,[0,-.1,0],[.124,.16,.14],rn),Dn(s,new w(0,-.09,0),new w(n*.15,-.5,.085),.05,Xe,10),se(s,[n*.08,-.29,.06],[.105,.42,.15],ar,[n*.1,0,n*.04]),se(s,[n*.138,-.35,.17],[.028,.26,.032],Gr);const o=new Xt;o.position.set(n*.15,-.52,.085),s.add(o),this.knees.push(o),cr(o,[0,0,0],[.105,.095,.115],rn);const a=new ct(new tn(.103,.013,6,18),Xe);a.rotation.y=Math.PI/2,o.add(a),Dn(o,new w(0,-.045,0),new w(n*.075,-.49,.055),.043,kr,10),se(o,[n*.047,-.28,.055],[.064,.33,.096],Li,[n*.075,0,.04]),Dn(o,new w(n*.05,-.18,-.02),new w(n*.07,-.42,-.035),.019,rn,8),cr(o,[n*.075,-.505,.06],[.084,.095,.096],hc);const c=se(o,[n*.075,-.59,.14],[.16,.115,.265],kr);c.rotation.x=-.12,se(o,[n*.075,-.55,.25],[.13,.07,.13],rn)}for(const r of[-.42,-.13,.16,.43])se(t,[n*.406,1.18,r],[.022,.095,.064],Xe);for(const r of[-.47,.45]){se(t,[n*.38,1.28,r],[.105,.065,.17],Gr);const s=new ct(new gi(.024,8,6),rn);s.position.set(n*.409,1.3,r),t.add(s)}}se(t,[0,1.09,.63],[.54,.24,.22],ar),se(t,[0,1.13,.755],[.42,.14,.033],Xe),se(t,[0,1.145,.778],[.25,.024,.016],fa);for(const n of[-1,1]){const r=new ct(new ve(.036,.036,.016,12),rn);r.rotation.x=Math.PI/2,r.position.set(n*.155,1.04,.786),t.add(r)}se(t,[0,.91,.5],[.35,.16,.24],Li),se(t,[0,1.43,-.3],[.57,.2,.7],Xe),se(t,[0,1.54,-.31],[.42,.11,.43],ar);for(const n of[-1,1])se(t,[n*.215,1.55,-.6],[.23,.17,.19],da),se(t,[n*.215,1.57,-.715],[.15,.055,.018],kr);for(let n=-.47;n<=.23;n+=.11)se(t,[0,1.53,n],[.19,.025,.035],hc);const e=new Xt;e.position.set(.2,1.53,-.42),t.add(e),Dn(e,new w(0,0,0),new w(0,.71,.04),.01,Xe,8),cr(e,[0,.71,.04],[.023,.024,.023],fa);for(const n of[-1,1])Dn(t,new w(n*.26,1.43,-.44),new w(n*.38,1.57,-.37),.021,rn),se(t,[n*.26,1.5,.08],[.06,.09,.21],Li)}buildGull(){const t=this.body;t.position.y=2.95,cr(t,[0,0,0],[.31,.2,.48],ar),se(t,[0,.1,-.06],[.39,.14,.51],Li),se(t,[0,-.055,.34],[.3,.16,.24],rn),se(t,[0,-.077,.51],[.26,.1,.11],kr),se(t,[0,.018,.55],[.28,.06,.055],Gr);for(const n of[-1,1]){const r=n;se(t,[r*.14,-.068,.558],[.08,.045,.027],Iv),se(t,[r*.24,.11,-.31],[.075,.12,.26],Xe,[r*.2,0,r*.14]);for(const[s,o]of[-.39,.36].entries()){const a=new Xt;a.position.set(r*.94,.035,o),t.add(a),Dn(t,new w(r*.19,.04,o*.2),new w(r*.94,.05,o),.059,Xe,12),se(t,[r*.52,.075,o*.58],[.57,.07,.19],Li,[0,r*.19,0]);const c=new Xt;a.add(c);const l=new ct(new Oc([new dt(.315,-.12),new dt(.366,-.12),new dt(.39,-.09),new dt(.39,.09),new dt(.367,.13),new dt(.315,.13),new dt(.31,.096),new dt(.31,-.09)],32),da);l.castShadow=!0,l.receiveShadow=!0,c.add(l);const u=new ct(new tn(.365,.019,8,32),Gr);u.rotation.x=Math.PI/2,u.position.y=.124,c.add(u);const h=new ct(new tn(.308,.011,8,28),Xe);h.rotation.x=Math.PI/2,h.position.y=-.092,c.add(h);for(let _=0;_<4;_++){const m=_*Math.PI/2,p=Dn(c,new w(.08*Math.cos(m),-.055,.08*Math.sin(m)),new w(.313*Math.cos(m),-.055,.313*Math.sin(m)),.021,rn,8);p.userData.structural=!0}const f=new Xt;f.position.y=.016,c.add(f),this.rotors.push(f);const d=new ct(new ve(.08,.1,.12,16),Xe);f.add(d);for(let _=0;_<4;_++){const m=se(f,[.19,0,0],[.27,.016,.08],rn,[0,_*Math.PI/2+.21,0]);m.position.set(.19*Math.cos(_*Math.PI/2),0,.19*Math.sin(_*Math.PI/2)),m.rotation.y=-_*Math.PI/2-.2}const g=new ct(new ve(.13,.13,.09,14),kr);g.position.y=-.16,a.add(g);for(let _=0;_<8;_++){const m=_*Math.PI/4;se(a,[Math.cos(m)*.135,-.16,Math.sin(m)*.135],[.025,.06,.035],Xe,[0,m,0])}se(t,[r*.94,.065,o],[.1,.07,.13],Gr)}}for(const n of[-1,1])for(let r=0;r<5;r++)se(t,[n*.307,.16,-.36+r*.14],[.015,.05,.052],rn);const e=new Xt;e.position.set(0,-.18,.19),t.add(e),se(e,[0,-.06,.12],[.2,.15,.3],Xe),Dn(e,new w(0,-.11,.12),new w(0,-.12,.72),.039,Li,12),se(e,[0,-.12,.71],[.1,.095,.13],rn);for(const n of[-1,1])Dn(t,new w(n*.16,-.08,-.12),new w(n*.28,-.36,-.26),.024,Xe),Dn(t,new w(n*.28,-.36,-.26),new w(n*.25,-.43,-.17),.022,rn)}animate(t,e,n=.016){const r=Math.sin(t*7.6*this.speed+this.phase)*e;if(this.kind==="hound"){this.body.position.y=.24+Math.abs(r)*.035;for(let s=0;s<this.legs.length;s++){const o=t*6.2*this.speed+this.phase+(s%2===0?0:Math.PI)+(s<2?0:Math.PI);this.legs[s].rotation.x=Math.sin(o)*.32*e,this.knees[s].rotation.x=Math.max(0,Math.sin(o))*.39*e}this.body.rotation.z=this.hitFlash>0?Math.sin(t*32)*.06:Math.sin(t*2+this.phase)*.009}else{this.body.position.y=2.9+Math.sin(t*3.5+this.phase)*.18,this.body.rotation.set(Math.sin(t*1.7+this.phase)*.045,0,Math.sin(t*2.1+this.phase)*.075);for(let s=0;s<this.rotors.length;s++)this.rotors[s].rotation.y=t*(s%2===0?46:-46)}if(this.hitFlash>0&&(this.hitFlash=Math.max(0,this.hitFlash-n),this.hitFlash<=0))for(const[s,o]of this.originalMaterials)s.material=o}damage(t){if(this.alive){this.health-=t,this.hitFlash=.16;for(const e of this.targetable)e.material=fa;this.health<=0&&(this.alive=!1,this.root.userData.dying=0)}}}new pe({color:1251869,roughness:.58,metalness:.3});function Ov(i,t,e){const c=C=>Rn.clamp(Math.round((C- -43)/1),0,75),l=C=>Rn.clamp(Math.round((C- -33)/1),0,65),u=(C,U)=>C+U*76,h=c(i.x),f=l(i.z),d=c(t.x),g=l(t.z),_=new Uint8Array(5016);for(let C=0;C<66;C++)for(let U=0;U<76;U++){const z=-43+U*1,Y=-33+C*1,H=.46;_[u(U,C)]=e.some(V=>V.height>1&&z+H>V.minX&&z-H<V.maxX&&Y+H>V.minZ&&Y-H<V.maxZ)?0:1}const m=new Int32Array(_.length);m.fill(-1);const p=new Int32Array(_.length);let T=0,M=0;const x=u(h,f),R=u(d,g);p[M++]=x,m[x]=x;let A=x,P=Math.abs(h-d)+Math.abs(f-g);for(;T<M;){const C=p[T++],U=C%76,z=Math.floor(C/76),Y=Math.abs(U-d)+Math.abs(z-g);if(Y<P&&(A=C,P=Y),C===R){A=C;break}for(const[H,V]of[[0,-1],[1,0],[-1,0],[0,1]]){const J=U+H,W=z+V;if(J<0||J>=76||W<0||W>=66)continue;const gt=u(J,W);m[gt]!==-1||!_[gt]||(m[gt]=C,p[M++]=gt)}}if(A===x)return[t.clone()];const I=[];let E=A;for(;E!==x&&I.length<250;){const C=E%76,U=Math.floor(E/76);if(I.push(new w(-43+C*1,0,-33+U*1)),E=m[E],E<0)return[t.clone()]}I.reverse();const S=[];for(let C=0;C<I.length;C++){if(C+1<I.length){const U=C===0?i:I[C-1],z=I[C],Y=I[C+1],H=z.x-U.x,V=z.z-U.z,J=Y.x-z.x,W=Y.z-z.z;if(Math.abs(H*W-V*J)<.001&&H*J+V*W>=0)continue}S.push(I[C])}return A===R&&S.push(t.clone()),S}const dr=new pe({color:2569274,metalness:.72,roughness:.41}),co=new pe({color:9398338,metalness:.62,roughness:.51}),Oi=new pe({color:988957,metalness:.49,roughness:.47}),gn=new pe({color:8294807,metalness:.7,roughness:.42}),Fi=new pe({color:4017488,metalness:.78,roughness:.44}),Bi=new re({color:16761468}),Bv=new re({color:1582379}),xu=new pe({color:2379106,metalness:.71,roughness:.16,transparent:!0,opacity:.81}),zv=new Ln(1,1,1);new ve(1,1,1,10);function de(i,t,e,n,r=zv){const s=new ct(r,n);return s.position.set(...t),s.scale.set(...e),s.castShadow=!0,i.add(s),s}function fi(i,t,e,n,r){const s=e.clone().sub(t),o=new ct(new ve(n,n,s.length(),8),r);return o.position.copy(t).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new w(0,1,0),s.normalize()),i.add(o),o}function Mu(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#131e22",n.fillRect(0,0,e.width,e.height),n.strokeStyle="#7d9292",n.lineWidth=3,n.strokeRect(6,6,500,116),n.fillStyle="#e6e6dd",n.font="700 59px Impact,Arial Narrow,sans-serif",n.fillText(i,22,70),n.font="22px monospace",n.fillStyle="#d8a36b",n.fillText(t,22,106);const r=new un(e);return r.colorSpace=Se,new re({map:r})}function pa(i,t,e,n,r){const s=new Xt;s.position.set(n,0,r),s.rotation.y=t==="B"?-.26:t==="C"?.23:-.15,i.add(s),de(s,[0,.08,0],[1.28,.16,.92],dr),de(s,[0,.28,0],[1.04,.36,.71],Fi),de(s,[0,.78,0],[.8,1.02,.58],Oi),de(s,[0,1.3,0],[.95,.15,.72],Fi);for(const m of[-1,1]){de(s,[m*.49,.73,0],[.12,1.27,.72],Fi);for(const p of[-.27,.27])de(s,[m*.5,.2,p],[.16,.12,.12],co);for(let p=0;p<4;p++)de(s,[m*.435,.6+p*.17,-.325],[.018,.08,.12],gn)}de(s,[0,.83,.327],[.57,.69,.058],dr),de(s,[0,.97,.368],[.42,.29,.026],xu);for(let m=0;m<8;m++)de(s,[-.19+m*.054,.96,.388],[.022,.17,.015],m%3?Oi:gn);for(let m=0;m<3;m++)de(s,[0,.47+m*.07,.36],[.29,.017,.027],co),de(s,[.24,.46+m*.09,.37],[.048,.03,.018],gn);const o=[];for(const m of[-1,1]){const p=de(s,[m*.28,1.34,.24],[.12,.035,.12],Bi);o.push(p);for(let T=0;T<4;T++)de(s,[m*.17,.33+T*.1,.364],[.035,.025,.017],Bi)}for(let m=0;m<3;m++){const p=new no([new w(-.33,.2,-.24-m*.06),new w(-.65,.1,-.35-m*.08),new w(-.8,.07,-.52-m*.09)]),T=new ct(new cs(p,16,.025,6,!1),yu());s.add(T)}const a=new ct(new be(.76,.19),Mu(`UPLINK ${t}`,e.toUpperCase()));a.position.set(0,1.15,.384),s.add(a);const c=new Xt;c.position.set(0,1.35,-.12),s.add(c);const l=1.52,u=.24,h=.15;for(const m of[-1,1])for(const p of[-1,1]){fi(c,new w(m*u,0,p*u),new w(m*h,l,p*h),.027,gn);for(let T=0;T<5;T++){const M=T*l/5,x=(T+1)*l/5,R=u+(h-u)*T/5,A=u+(h-u)*(T+1)/5;fi(c,new w(m*R,M,p*R),new w(-m*A,x,p*A),.014,Fi)}}for(let m=.38;m<l;m+=.4){const p=u+(h-u)*m/l;fi(c,new w(-p,m,-p),new w(p,m,-p),.019,gn),fi(c,new w(-p,m,p),new w(p,m,p),.019,gn)}const f=new ct(new gi(.36,24,16),new pe({color:7438730,roughness:.59,metalness:.68}));f.position.set(0,l+.4,0),f.castShadow=!0,c.add(f);const d=new ct(new tn(.365,.012,6,32),gn);d.rotation.x=Math.PI/2,d.position.copy(f.position),c.add(d),de(c,[0,l+.77,0],[.1,.07,.1],Oi),fi(s,new w(-.43,1.34,-.16),new w(-.43,2.22,-.16),.028,gn);const g=de(s,[-.43,2.22,-.16],[.2,.1,.15],Bi);o.push(g);const _=new Mi(16756830,8,6,2);return _.position.set(0,1.42,.55),s.add(_),{id:t,name:e,pos:new w(n,0,r),group:s,lamps:o,light:_,cut:!1,progress:0}}function yu(){return Oi}function Hv(i){const t=new Xt;t.position.set(32,0,26),t.rotation.y=-Math.PI/2,i.add(t),de(t,[0,.14,1.2],[6.4,.28,4.6],Fi);for(let _ of[-1,1]){for(let m of[-.9,1,2.5])fi(t,new w(_*3.1,.3,m),new w(_*3.1,1.15,m),.045,gn);fi(t,new w(_*3.1,1.14,-.9),new w(_*3.1,1.14,2.5),.04,gn)}for(let _ of[-2.4,2.4])for(let m of[0,2.5])de(t,[_,.42,m],[.24,.52,.24],co);const e=new ct(new be(1.8,.42),Mu("BERTH 4","EXTRACTION  /  07"));e.position.set(-2.15,1.3,2.25),t.add(e);const n=new ct(new ve(.035,.035,1.2,8),gn);n.position.set(-2.15,.73,2.22),t.add(n);const r=new Xt;r.position.set(0,.28,-3.1),t.add(r);const s=new Cr;s.moveTo(-2,-3.7),s.lineTo(2,-3.7),s.lineTo(2.05,2.55),s.quadraticCurveTo(1.65,3.65,0,4.15),s.quadraticCurveTo(-1.65,3.65,-2.05,2.55),s.closePath();const o=new Xi(s,{depth:.55,bevelEnabled:!0,bevelSize:.13,bevelThickness:.12,bevelSegments:2,curveSegments:18});o.rotateX(-Math.PI/2);const a=new ct(o,Oi);a.position.y=-.26,a.castShadow=!0,r.add(a),de(r,[0,.36,-.1],[3.25,.12,7.65],Fi);const c=[new w(-1.78,.51,-3.8),new w(-2.03,.48,-2),new w(-2.04,.48,1.8),new w(-1.44,.48,3.37),new w(0,.48,3.91),new w(1.44,.48,3.37),new w(2.04,.48,1.8),new w(2.03,.48,-2),new w(1.78,.51,-3.8)],l=new no(c,!1,"catmullrom",.26),u=new ct(new cs(l,64,.31,12,!1),yu());u.castShadow=!0,r.add(u);for(let _=-2.7;_<=2.6;_+=.8)for(const m of[-1.78,1.78])de(r,[m,.65,_],[.11,.04,.16],dr);de(r,[0,.65,-1.5],[2.75,.23,1.4],Fi),de(r,[0,1.16,-1.75],[2.38,.92,.16],xu),de(r,[0,1.5,-2.3],[2.38,.13,1.15],dr);for(const _ of[-1.4,1.4]){fi(r,new w(_,.6,-2.2),new w(_,1.9,-.6),.045,gn);const m=de(r,[_,.59,3.48],[.21,.13,.24],Bi);m.material=Bi}for(let _ of[-.2,1.5,2.8])de(r,[0,.65,_],[2.5,.07,.12],co);de(r,[0,.71,2.94],[1.5,.24,.36],Oi);for(const _ of[-1.35,1.35])de(r,[_,.57,3.34],[.18,.12,.18],Bi);for(let _=-3.2;_<3.2;_+=.55)de(r,[0,.45,_],[1.05,.021,.04],dr);const h=new no([new w(-1.2,.45,-2.7),new w(-1.35,.6,-1),new w(-1.15,.65,.8)]),f=new ct(new cs(h,22,.025,7,!1),Oi);r.add(f);const d=de(r,[0,.14,-4.22],[.76,.87,.76],dr);d.rotation.x=-.13;const g=new Mi(16761726,14,8,2);return g.position.set(0,1.7,2.3),t.add(g),{dock:t,target:new w(29,0,20)}}function kv(i){const t=[pa(i,"A","YARD",1.5,7.5),pa(i,"B","SHED",-2,-19.5),pa(i,"C","QUAY",23,0)],e=Hv(i),n={relays:t,allCut:!1,boat:e.dock,boatTarget:e.target,closest(r,s){const a=t.filter(c=>!c.cut).map(c=>({type:"relay",relay:c,distance:Math.hypot(r.x-c.pos.x,r.z-c.pos.z),progress:c.progress})).sort((c,l)=>c.distance-l.distance)[0];if(a&&a.distance<=2.2){const c=a.relay.pos.x-r.x,l=a.relay.pos.z-r.z;if((-Math.sin(s)*c+-Math.cos(s)*l)/Math.max(.001,a.distance)>=.45||a.distance<.9)return a}if(n.allCut){const c=Math.hypot(r.x-e.target.x,r.z-e.target.z);if(c<=2.5)return{type:"extract",distance:c,progress:0}}return null},interact(r,s,o,a){const c=n.closest(r,s);if(c?.type==="extract")return{extract:!0,progress:1};if(!c||!o){for(const u of t)u.progress=Math.max(0,u.progress-a*1.6);return{progress:0}}const l=c.relay;if(l.progress=Math.min(1,l.progress+a/2.4),l.progress>=1){l.cut=!0,l.progress=1;for(const u of l.lamps)u.material=Bv;return l.light.intensity=0,n.allCut=t.every(u=>u.cut),{cut:l,progress:1}}return{progress:l.progress}},update(r){for(const s of t)s.cut||(s.light.intensity=4.2+Math.sin(r*4.5)*1.4)},reset(){n.allCut=!1;for(const r of t){r.cut=!1,r.progress=0;for(const s of r.lamps)s.material=Bi}}};return n}class Gv{ctx=null;bus=null;rain=null;low=null;staticBuffer=null;lastStep=0;_muted=!1;_volume=.8;get muted(){return this._muted}set muted(t){this._muted=t,this.bus&&this.bus.gain.setTargetAtTime(t?0:.65*this._volume,this.ctx.currentTime,.1)}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.bus&&this.bus.gain.setTargetAtTime(this._muted?0:.65*this._volume,this.ctx.currentTime,.08)}async start(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}const t=new AudioContext;this.ctx=t;const e=t.createGain();e.gain.value=this._muted?0:.65*this._volume,e.connect(t.destination),this.bus=e;const n=t.createBuffer(1,Math.floor(t.sampleRate*2),t.sampleRate),r=n.getChannelData(0);for(let f=0;f<r.length;f++)r[f]=(Math.random()*2-1)*(.7+.3*Math.random());this.staticBuffer=n;const s=t.createBufferSource();s.buffer=n,s.loop=!0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=420;const a=t.createGain();a.gain.value=.13,s.connect(o).connect(a).connect(e),s.start(),this.rain=s;const c=t.createOscillator();c.type="sine",c.frequency.value=41.2;const l=t.createGain();l.gain.value=.075,c.connect(l).connect(e),c.start(),this.low=c;const u=t.createOscillator();u.type="triangle",u.frequency.value=82.42;const h=t.createGain();h.gain.value=.012,u.connect(h).connect(e),u.start()}tone(t,e,n,r,s="sine",o=0){const a=this.ctx,c=this.bus;if(!a||!c)return;const l=a.createOscillator(),u=a.createGain(),h=a.currentTime+o;l.type=s,l.frequency.setValueAtTime(Math.max(1,t),h),l.frequency.exponentialRampToValueAtTime(Math.max(1,e),h+n),u.gain.setValueAtTime(.001,h),u.gain.exponentialRampToValueAtTime(Math.max(.002,r),h+.009),u.gain.exponentialRampToValueAtTime(.001,h+n),l.connect(u).connect(c),l.start(h),l.stop(h+n+.02)}noise(t,e,n=120,r=1e4,s=0){const o=this.ctx,a=this.bus;if(!o||!a||!this.staticBuffer)return;const c=o.createBufferSource();c.buffer=this.staticBuffer;const l=o.createBiquadFilter();l.type="highpass",l.frequency.value=n;const u=o.createBiquadFilter();u.type="lowpass",u.frequency.value=r;const h=o.createGain(),f=o.currentTime+s;h.gain.setValueAtTime(.001,f),h.gain.linearRampToValueAtTime(e,f+.004),h.gain.exponentialRampToValueAtTime(.001,f+t),c.connect(l).connect(u).connect(h).connect(a),c.start(f,Math.random()*1.2,t+.03),c.stop(f+t+.04)}shot(){this.noise(.2,.38,120,5e3),this.noise(.08,.35,800,1e4),this.tone(130,38,.19,.48,"triangle"),this.tone(920,85,.12,.075,"sawtooth",.008)}enemyShot(){this.noise(.23,.12,240,3700),this.tone(180,38,.24,.13,"sawtooth")}impact(){this.noise(.095,.16,230,4200),this.tone(190,85,.11,.11,"triangle")}hit(){this.tone(1150,450,.15,.08,"square"),this.tone(650,210,.22,.08,"sine",.04)}reload(){for(let t=0;t<3;t++)this.noise(.055,.13,600,4e3,t*.27),this.tone(880,180,.075,.06,"triangle",t*.27)}empty(){this.tone(900,530,.046,.09,"square")}playerHit(){this.noise(.36,.26,150,1400),this.tone(108,40,.37,.17,"sine")}step(t){const e=this.ctx;e&&(e.currentTime-this.lastStep<(t?.25:.35)||(this.lastStep=e.currentTime,this.noise(.085,.053,90,900),this.tone(68,41,.08,.06,"triangle")))}wave(){this.tone(210,320,.28,.08,"sine"),this.tone(280,430,.4,.05,"sine",.2)}victory(){for(let t=0;t<5;t++)this.tone([146,196,247,330,392][t],[170,220,280,370,440][t],.32,.055,"sine",t*.12)}}const Vv=document.getElementById("app"),en=document.getElementById("viewport"),Wv=document.getElementById("overlay"),xn=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),Xv=matchMedia("(prefers-reduced-motion: reduce)").matches,Hc=xn||Xv||new URLSearchParams(location.search).has("fast");let kn;try{kn=new F_({canvas:en,antialias:!xn,alpha:!1,powerPreference:"high-performance"})}catch(i){throw Vv.innerHTML='<p style="padding:2rem;color:white">WebGL is required to run this game.</p>',i}kn.setPixelRatio(Math.min(window.devicePixelRatio,Hc?1:1.65));kn.setSize(innerWidth,innerHeight);kn.toneMapping=Eh;kn.toneMappingExposure=1.24;kn.outputColorSpace=Se;kn.shadowMap.enabled=!Hc;kn.shadowMap.type=yh;const Pn=new ld,Ee=new sn(xn?77:74,innerWidth/innerHeight,.055,250);Pn.add(Ee);const di=Ev(Pn,Hc),_n=new Lv(Ee),Ye=new Gv,Ke=kv(Pn),Su=new Mi(16113105,6.5,8,1.4);Su.position.set(.45,.45,.9);Ee.add(Su);const Eu=new Mi(12506580,3.3,6,1.4);Eu.position.set(-1,.1,-.4);Ee.add(Eu);let oe="menu",qr=0,uc=3.5,fc=!1,it={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1},lo=0,ho=0,kc=0,dc=0,Tr=!1,uo=-99,pc=!1,mc=-999,fo=0,po=0;const jr=[];let wr=1,gr=.8,Gi=xn?77:74;try{const i=JSON.parse(localStorage.getItem("saltline.settings.v1")||"{}");wr=Rn.clamp(Number(i.sensitivity)||1,.2,3),gr=Rn.clamp(typeof i.volume=="number"?i.volume:.8,0,1),Gi=Rn.clamp(Number(i.fov)||Gi,60,95)}catch{}const Yv=()=>localStorage.setItem("saltline.settings.v1",JSON.stringify({sensitivity:wr,volume:gr,fov:Gi}));let Je=-Math.PI/2,ei=-.025,Ce=0,Jn=0,mo=0,go=0,ls=0,_o=0,vo=0,xo=0;const Ne=new Set;let yi=!1,Gn=!1,Vr=!1,Mo={x:0,y:0},yo=!1,hs=null,Zs={x:0,y:0};const Fe={x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1},Vs=new Set;function qv(){const i=navigator.getGamepads?.()?.find(n=>n?.connected);if(!i){Object.assign(Fe,{x:0,y:0,rx:0,ry:0,fire:!1,aim:!1,use:!1,sprint:!1,crouch:!1}),Vs.clear();return}const t=n=>{const r=i.axes[n]||0;return Math.abs(r)<.17?0:Math.sign(r)*(Math.abs(r)-.17)/.83};Fe.x=t(0),Fe.y=-t(1),Fe.rx=t(2),Fe.ry=t(3);const e=n=>i.buttons[n]?.pressed===!0;Fe.fire=e(7),Fe.aim=e(6),Fe.use=e(3),Fe.sprint=e(10),Fe.crouch=e(1);for(const n of[0,2,9]){const r=e(n);r&&!Vs.has(n)&&(n===0&&(yo=!0),n===2&&Vc(),n===9&&(oe==="playing"?ds():oe==="paused"&&bu())),r?Vs.add(n):Vs.delete(n)}}let Cn=[],zi=[];const gc=new Qd;gc.far=130;function $v(){Wv.innerHTML=`
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
 `,document.getElementById("primary").addEventListener("click",()=>{oe==="menu"||oe==="dead"||oe==="victory"?Zv():bu()}),document.getElementById("pause-button").addEventListener("click",()=>ds());const t=document.getElementById("settings-panel"),e=f=>{t.classList.remove("hidden"),document.getElementById("panel-heading").textContent=f?"CONTROLS":"SETTINGS",document.getElementById("settings-content").classList.toggle("hidden",f),document.getElementById("controls-content").classList.toggle("hidden",!f)};document.getElementById("settings-button").addEventListener("click",()=>e(!1)),document.getElementById("controls-button").addEventListener("click",()=>e(!0)),document.getElementById("panel-close").addEventListener("click",()=>t.classList.add("hidden"));const n=(f,d,g,_)=>{const m=document.getElementById(f),p=document.getElementById(d);m.value=String(f.includes("volume")?gr:f.includes("fov")?Gi:wr),p.textContent=g(+m.value),m.addEventListener("input",()=>{const T=+m.value;_(T),p.textContent=g(T),Yv()})};n("setting-sensitivity","sensitivity-output",f=>f.toFixed(2)+"×",f=>{wr=f}),n("setting-volume","volume-output",f=>Math.round(f*100)+"%",f=>{gr=f,Ye.setVolume(gr)}),n("setting-fov","fov-output",f=>f+"°",f=>{Gi=f});const r=document.getElementById("btn-use");r.addEventListener("pointerdown",f=>{f.preventDefault();try{r.setPointerCapture(f.pointerId)}catch{}Tr=!0,r.classList.add("active")});const s=()=>{Tr=!1,r.classList.remove("active")};for(const f of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(f,s);document.getElementById("btn-reload").addEventListener("pointerdown",f=>{f.preventDefault(),Vc()}),document.getElementById("btn-jump").addEventListener("pointerdown",f=>{f.preventDefault(),yo=!0});for(const[f,d]of[["btn-fire",g=>{yi=g}],["btn-aim",g=>{Gn=g}]]){const g=document.getElementById(f);g.addEventListener("pointerdown",_=>{_.preventDefault();try{g.setPointerCapture(_.pointerId)}catch{}d(!0),f==="btn-fire"&&Wc(),g.classList.add("active")});for(const _ of["pointerup","pointercancel","lostpointercapture"])g.addEventListener(_,()=>{d(!1),g.classList.remove("active")})}const o=document.getElementById("movezone"),a=document.getElementById("joystick");let c=null,l={x:0,y:0};o.addEventListener("pointerdown",f=>{if(f.preventDefault(),c!==null)return;c=f.pointerId;try{o.setPointerCapture(f.pointerId)}catch{}const d=o.getBoundingClientRect();l={x:d.left+d.width/2,y:d.top+d.height/2},u(f.clientX,f.clientY)}),o.addEventListener("pointermove",f=>{f.pointerId===c&&u(f.clientX,f.clientY)});function u(f,d){let g=(f-l.x)/57,_=(d-l.y)/57;const m=Math.max(1,Math.hypot(g,_));g/=m,_/=m,Mo={x:g,y:-_},a.style.transform=`translate(${g*40}px,${_*40}px)`}const h=f=>{c===f.pointerId&&(c=null,Mo={x:0,y:0},a.style.transform="")};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h),xn&&document.body.classList.add("is-mobile")}$v();function Tu(i){document.getElementById("intro-overlay").classList.add("hidden");const t=document.getElementById("menu");t.classList.remove("off"),document.getElementById("hud").classList.add("hidden"),_n.root.visible=!1;const e=t.querySelector(".eyebrow"),n=t.querySelector("p"),r=document.getElementById("primary"),s=document.getElementById("menu-secondary");i==="menu"?(e.innerHTML="<b>B4</b> PORT AUTHORITY BREACH UNIT",n.innerHTML="The port’s security net has gone feral. Cut its three uplinks. Reach the boat.",r.innerHTML="DEPLOY <span>↗</span>",s.textContent=xn?"LEFT STICK MOVE · SWIPE LOOK · FIRE TO SHOOT":"WASD MOVE · MOUSE AIM & FIRE · R RELOAD"):i==="paused"?(e.innerHTML="<b>Ⅱ</b> OPERATION SUSPENDED",n.innerHTML="MAINTAIN YOUR POSITION.<br>RESUME WHEN READY.",r.innerHTML="RESUME <span>↗</span>",s.textContent=`RELAYS ${it.relays}/3  ·  ${it.kills} CONFIRMED  ·  ${it.hp} HP`):i==="dead"?(e.innerHTML="<b>×</b> OPERATIVE DOWN",n.innerHTML="SIGNAL LOST.<br>MISSION TERMINATED.",r.innerHTML="REDEPLOY <span>↗</span>",s.textContent=`${it.kills} HOSTILES NEUTRALIZED · RELAYS ${it.relays}/3`):(e.innerHTML="<b>◆</b> MISSION COMPLETE",n.innerHTML="The Harbormaster is dark.<br>Extraction complete.",r.innerHTML="REPLAY OPERATION <span>↗</span>",s.textContent=`TIME ${Math.floor(lo/60).toString().padStart(2,"0")}:${Math.floor(lo%60).toString().padStart(2,"0")} · ACCURACY ${ho?Math.round(kc/ho*100):0}% · MACHINES ${it.kills} · RETRIES ${dc}`)}function wu(){document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.remove("hidden"),_n.root.visible=!0}function Zv(){oe==="dead"&&dc++,Cn.forEach(e=>Pn.remove(e.root)),Cn=[],zi.forEach(e=>Pn.remove(e.obj)),zi=[],it={x:-32,z:6,y:1.72,vY:0,hp:100,ammo:30,reserve:150,score:0,kills:0,relays:0,ads:!1,reloading:!1,stamina:1},Ke.reset(),lo=0,ho=0,kc=0,Tr=!1,uo=-99,pc=!1,mc=-999,fo=0,po=0,jr.length=0,Je=-Math.PI/2,ei=-.04,yi=!1,Gn=!1,_o=0,ls=0,Ce=0,Jn=0,oe="intro",qr=0,uc=dc>0?1.3:3.5,fc=!1,document.getElementById("menu").classList.add("off"),document.getElementById("hud").classList.add("hidden"),document.getElementById("intro-overlay").classList.remove("hidden"),document.getElementById("intro-curtain").style.opacity="1",_n.root.visible=!1,Ye.start().then(()=>Ye.setVolume(gr)),Jv(),Gc()}function Gc(){!xn&&document.pointerLockElement!==en&&en.requestPointerLock?.().catch(()=>{}),en.focus()}function ds(){oe==="playing"&&(oe="paused",yi=!1,Gn=!1,Tr=!1,Ne.clear(),document.pointerLockElement===en&&document.exitPointerLock(),Tu("paused"))}function bu(){oe==="paused"&&(oe="playing",wu(),Ye.start(),Gc())}function Au(i){oe=i?"victory":"dead",yi=!1,Ne.clear(),Gn=!1,document.pointerLockElement===en&&document.exitPointerLock(),i&&Ye.victory(),Tu(i?"victory":"dead")}function ni(i,t=4){xo=t,document.getElementById("h-radio").textContent=i}function Kv(i){const t=document.getElementById("wave-warning");t.textContent=i,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}const Ru=[[["gull",2,21.5],["hound",-19,-1.4],["gull",10,23.5]],[["gull",-6,15],["hound",9,7],["gull",14,17],["hound",-12,-7]],[["gull",-10,-8],["gull",7,-8],["gull",15,-19],["hound",-8,-12],["hound",6,-25]],[["gull",19,-22],["gull",22,15],["gull",25,-6],["gull",13,24],["hound",16,-17],["hound",24,8],["hound",19,27]]];function _c(i){const t=Cn.filter(e=>e.alive).length;for(const[e,n,r]of i.slice(0,Math.max(0,9-t))){const s=new Fv(e,n,r);s.shootTimer=1.4+Math.random()*2,Pn.add(s.root),Cn.push(s)}}function Jv(){_c(Ru[0])}function jv(i){it.relays++,Ye.wave(),Kv(`UPLINK ${i} — OFFLINE`),it.relays===1?ni("ONE RELAY DARK. IT FELT THAT — MACHINES INBOUND.",5):it.relays===2?ni("TWO DARK. IT IS THROWING EVERYTHING IT HAS LEFT AT YOU.",5):ni("ALL THREE DARK. THE BOAT IS HOLDING AT THE EAST QUAY LADDER. RUN.",7),Ru[Math.min(it.relays,3)].forEach(([e,n,r],s)=>jr.push({kind:e,x:n,z:r,at:Ce+s*.85})),Ke.allCut&&(fo=Ce+12,po=5),it.reserve+=40,it.hp=Math.min(100,it.hp+12)}function Qv(i){lo+=i,Ke.update(Ce);for(let r=jr.length-1;r>=0;r--){const s=jr[r];Ce<s.at||Cn.filter(o=>o.alive).length>=9||(_c([[s.kind,s.x,s.z]]),jr.splice(r,1))}if(Ke.allCut&&Ce>=fo&&po>0&&Cn.filter(r=>r.alive).length<4){const r=Math.random()<.6?"gull":"hound";_c([[r,Math.min(26,it.x+12),it.z+(Math.random()>.5?7:-7)]]),po--,fo=Ce+7}Math.hypot(it.x-Ke.boatTarget.x,it.z-Ke.boatTarget.z)<4&&!Ke.allCut&&Ce-mc>8&&(mc=Ce,ni("RELAYS STILL LIVE — THE BOAT WILL NOT WAIT UNDER FIRE.",3.5));const e=Ne.has("KeyE")||Tr||Fe.use,n=Ke.interact(new w(it.x,0,it.z),Je,e,i);n.cut&&jv(n.cut.id),n.extract&&(ni("BREACHER IS ABOARD. SALTLINE IS DARK. GOOD WORK.",5),Au(!0))}function Vc(){oe!=="playing"||it.reloading||it.ammo===30||it.reserve<=0||(it.reloading=!0,_o=1.45,_n.reload(),Ye.reload(),ni("CHANGING MAGAZINE.",1.3))}function vc(i,t,e){const n=new Float32Array([...i.toArray(),...t.toArray()]),r=new Ue;r.setAttribute("position",new hn(n,3));const s=new Ic({color:e?16765344:16737862,transparent:!0,opacity:.95,depthWrite:!1,blending:_r}),o=new Dc(r,s);Pn.add(o),zi.push({obj:o,vel:new w,life:.085,max:.085})}function xc(i,t=!1){for(let e=0;e<8;e++){const n=new ct(new Ln(.02+.025*Math.random(),.02,.06),new re({color:t?16744535:16763016,transparent:!0,opacity:1}));n.position.copy(i),Pn.add(n),zi.push({obj:n,vel:new w((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*5),life:.3+Math.random()*.33,max:.65})}}function tx(i){const t=new w(it.x,it.y,it.z);let e=65;for(const n of di.obstacles){const r=new w(n.minX,0,n.minZ),s=new w(n.maxX,n.height,n.maxZ),a=new fs(t,i).intersectBox(new Wi(r,s),new w);if(a){const c=a.distanceTo(t);c<e&&(e=c)}}return t.addScaledVector(i,e)}function Wc(){if(oe!=="playing"||it.reloading||ls>0)return;if(it.ammo<=0){vo<=0&&(Ye.empty(),vo=.22);return}it.ammo--,ho++,ls=.105,_n.shoot(),Ye.shot(),Jn=Math.max(Jn,.055);const i=Gn?.0045:.013,t=new w((Math.random()-.5)*i,(Math.random()-.5)*i,-1).normalize().applyQuaternion(Ee.quaternion),e=Ee.getWorldPosition(new w);gc.set(e,t);const n=Cn.filter(a=>a.alive).flatMap(a=>a.targetable),r=gc.intersectObjects(n,!1),s=tx(t),o=s.distanceTo(e);if(r.length&&r[0].distance<o+.04){const a=r[0],c=a.object.userData.enemy,l=a.object.userData.enemyPart==="head";c.damage(l?92:36),kc++,c.lastHitAt=Ce,go=.2,Ye.hit(),xc(a.point,!0),c.alive||(it.kills++,it.score+=l?150:100,ni(c.kind==="gull"?"GULL DOWN. AIRSPACE CLEARER.":"HOUND DOWN. KEEP MOVING.",1.5)),vc(e.clone().addScaledVector(t,.6),a.point,!0)}else xc(s,!1),Ye.impact(),vc(e.clone().addScaledVector(t,.6),s,!0)}function ex(){if(oe!=="playing")return;const i=Cn.filter(t=>t.alive).map(t=>({e:t,d:Math.hypot(t.root.position.x-it.x,t.root.position.z-it.z)})).sort((t,e)=>t.d-e.d)[0];_n.kick=Math.max(_n.kick,.35),i?.d<2.8?(i.e.damage(65),Ye.hit(),xc(i.e.root.position.clone().add(new w(0,1.1,0)),!0),i.e.alive||it.kills++):Ye.empty()}function nx(i){for(let t=Cn.length-1;t>=0;t--){const e=Cn[t];if(!e.alive){e.root.userData.dying=e.root.userData.dying+i;const p=e.root.userData.dying;e.body.rotation.z=Math.min(1,p*2)*1.25,e.root.position.y-=i*(e.kind==="gull"?1.4:.45),p>2.8&&(Pn.remove(e.root),Cn.splice(t,1));continue}const n=it.x-e.root.position.x,r=it.z-e.root.position.z,s=Math.max(.001,Math.hypot(n,r));s<(e.kind==="gull"?31:24)&&!e.alerted&&(e.alerted=!0,e.mode="pursue",e.routeTimer=0,pc||(pc=!0,ni("IT HAS SEEN YOU. GULLS FLY, HOUNDS WALK. PUT THEM DOWN.",5)));let a=0,c;if(e.alerted)if(e.kind==="gull"){const p=Ce*.4+e.phase,T=9;c=new w(it.x+Math.cos(p)*T,0,it.z+Math.sin(p)*T)}else c=new w(it.x,0,it.z);else{const p=Ce*.32+e.phase;c=e.home.clone().add(new w(Math.cos(p)*2,0,Math.sin(p)*2.5))}const l=c.x-e.root.position.x,u=c.z-e.root.position.z,h=Math.hypot(l,u);for((e.routeTimer<=0||e.route.length===0||e.lastPlayerPosition.distanceToSquared(c)>12)&&(e.route=Ov(e.root.position,c,di.obstacles),e.routeTimer=(e.alerted?.85:1.7)+Math.random()*.35,e.lastPlayerPosition.copy(c)),e.routeTimer-=i;e.route.length&&e.route[0].distanceToSquared(e.root.position)<.32*.32;)e.route.shift();const f=e.route[0]||c,d=f.x-e.root.position.x,g=f.z-e.root.position.z,_=Math.hypot(d,g),m=h>(e.alerted?e.kind==="gull"?2.1:2.3:.45);if(_>.03&&m){const p=e.speed*(e.alerted?1:.62),T=Math.min(_,i*p),M=d/_*T,x=g/_*T;let R=!1;ao(di.obstacles,e.root.position.x+M,e.root.position.z,.44)||(e.root.position.x+=M,R=!0),ao(di.obstacles,e.root.position.x,e.root.position.z+x,.44)||(e.root.position.z+=x,R=!0),R?(a=1,e.heading=Math.atan2(M,x)):e.routeTimer=0}if(e.root.rotation.y=Rn.damp(e.root.rotation.y,e.alerted?Math.atan2(n,r):e.heading,5,i),e.animate(Ce,a,i),e.shootTimer-=i,e.shootTimer<0&&e.alerted&&s<30&&oe==="playing"){e.shootTimer=(e.kind==="gull"?1.4:2.1)+Math.random()*1.1;const p=e.root.position.clone().add(new w(0,e.kind==="gull"?2.8:1.15,0)),T=new w(it.x,it.y-.2,it.z),M=T.clone().sub(p),x=M.length(),R=M.normalize();let A=!0;for(const P of di.obstacles){const I=new fs(p,R).intersectBox(new Wi(new w(P.minX,.01,P.minZ),new w(P.maxX,P.height,P.maxZ)),new w);if(I&&I.distanceTo(p)<x-.7){A=!1;break}}A&&(Ye.enemyShot(),vc(p,T.clone().add(new w((Math.random()-.5)*1.9,(Math.random()-.5)*1.6,(Math.random()-.5)*1.9)),!1),Ce-uo>1.35&&Math.random()<Math.max(.18,.46-s*.013)&&(it.hp=Math.max(0,it.hp-(e.kind==="gull"?5:9)-Math.round(Math.random()*4)),uo=Ce,mo=.62,Jn=.08,Ye.playerHit(),it.hp===0&&Au(!1)))}}}function ix(i){let t=0,e=0;(Ne.has("KeyW")||Ne.has("ArrowUp"))&&t++,(Ne.has("KeyS")||Ne.has("ArrowDown"))&&t--,(Ne.has("KeyD")||Ne.has("ArrowRight"))&&e++,(Ne.has("KeyA")||Ne.has("ArrowLeft"))&&e--,t+=Mo.y+Fe.y,e+=Mo.x+Fe.x;const n=Math.hypot(t,e);Vr=n>.05,n>1&&(t/=n,e/=n);const r=(Ne.has("ShiftLeft")||Ne.has("ShiftRight")||Fe.sprint)&&t>.1&&it.stamina>.01,s=Ne.has("ControlLeft")||Ne.has("KeyC")||Fe.crouch,o=(s?2.2:r?7.8:4.65)*(it.ads?.67:1);if(Vr){const l=(e*Math.cos(Je)-t*Math.sin(Je))*o*i,u=(-e*Math.sin(Je)-t*Math.cos(Je))*o*i;ao(di.obstacles,it.x+l,it.z)||(it.x+=l),ao(di.obstacles,it.x,it.z+u)||(it.z+=u),Math.abs(it.y-(s?1.16:1.72))<.25&&Ye.step(r)}it.stamina=Math.min(1,Math.max(0,it.stamina+(r&&Vr?-i*.16:i*.12))),Ce-uo>5&&it.hp<100&&(it.hp=Math.min(100,it.hp+i*3.2)),(Ne.has("Space")||yo)&&it.y<=1.73&&it.vY<=0&&(it.vY=6.4),yo=!1,it.vY-=17*i,it.y=Math.max(s?1.18:1.72,it.y+it.vY*i),(it.y===1.72||it.y===1.18)&&(it.vY=0),it.ads=Gn||Fe.aim,Je-=Fe.rx*i*2.2,ei=Math.max(-1.35,Math.min(1.35,ei-Fe.ry*i*1.7)),Jn>0&&(Jn=Math.max(0,Jn-i*.45));const a=(Math.random()-.5)*Jn,c=(Math.random()-.5)*Jn;Ee.rotation.order="YXZ",Ee.rotation.set(ei+c,Je+a,0),Ee.position.set(it.x,it.y+(it.y<=1.73&&Vr?Math.sin(Ce*(r?13:8))*.025:0),it.z),Ee.fov=Rn.damp(Ee.fov,it.ads?52:Gi,10,i),Ee.updateProjectionMatrix(),_n.update(i,Ce,Vr?1:0,r,it.ads)}function ma(i){for(let t=zi.length-1;t>=0;t--){const e=zi[t];e.life-=i,e.obj.position.addScaledVector(e.vel,i),e.vel.y-=i*14,e.obj instanceof ct&&e.obj.material instanceof re&&(e.obj.material.opacity=Math.max(0,e.life/e.max)),e.life<=0&&(Pn.remove(e.obj),e.obj instanceof Dc&&e.obj.geometry.dispose(),zi.splice(t,1))}}const xh=new Map;function rx(){const i=document.getElementById("waypoint-layer"),t=(-Je*180/Math.PI%360+360)%360;document.getElementById("compass-heading").textContent=Math.round(t).toString().padStart(3,"0");const e=document.getElementById("compass-tape"),n=["N","NE","E","SE","S","SW","W","NW"];e.textContent=Array.from({length:9},(a,c)=>n[((Math.round(t/45)+c-4)%8+8)%8]).join("    ·    ");const r=Ke.relays.map(a=>({id:a.id,name:a.name,position:a.pos,done:a.cut,active:!a.cut})).concat([{id:"E",name:"EXTRACT",position:Ke.boatTarget,done:!1,active:Ke.allCut}]),s=document.getElementById("compass-marks"),o=Math.min(430,innerWidth*.4);s.innerHTML=r.filter(a=>a.active&&!a.done).map(a=>{const c=a.position.x-it.x,l=a.position.z-it.z,u=-Math.atan2(c,-l),f=Math.atan2(Math.sin(u-Je),Math.cos(u-Je))*180/Math.PI;if(Math.abs(f)>62)return"";const d=Math.round(o*.5-f/62*o*.5),g=Math.round(Math.hypot(c,l));return`<div class="compass-objective" style="left:${d}px"><i></i><b>${a.id}</b><small>${g}m</small></div>`}).join("");for(const a of r){let c=xh.get(a.id);if(c||(c=document.createElement("div"),c.className="waypoint",i.appendChild(c),xh.set(a.id,c)),a.done||!a.active){c.classList.add("hidden");continue}c.classList.remove("hidden"),c.classList.toggle("dim",a.id!=="E"&&a.id!==Ke.relays.find(_=>!_.cut)?.id);const l=Math.hypot(a.position.x-it.x,a.position.z-it.z),u=a.position.clone();u.y=a.id==="E"?2.6:2.5;const h=u.project(Ee),f=h.z<1&&h.z>-1&&Math.abs(h.x)<.93&&Math.abs(h.y)<.83,d=Rn.clamp((h.x*.5+.5)*innerWidth,40,innerWidth-40),g=Rn.clamp((-h.y*.5+.5)*innerHeight,75,innerHeight-100);c.classList.toggle("offscreen",!f),c.style.transform=`translate(${Math.round(d+(a.id==="B"?-35:a.id==="C"?35:0))}px,${Math.round(g+(a.id==="B"?29:a.id==="C"?50:0))}px)`,c.innerHTML=`<b>${a.id==="E"?"↗":a.id}</b><span>${a.id==="E"?"EX":a.id} ${Math.round(l)}m</span>`}}function sx(){if(oe!=="playing")return;document.getElementById("h-wave").textContent=`RELAYS ${it.relays} / 3`,document.getElementById("h-health").innerHTML=`${Math.ceil(it.hp)} <small>HP</small>`,document.getElementById("h-healthbar").style.width=it.hp+"%",document.getElementById("h-healthbar").classList.toggle("critical",it.hp<30),document.getElementById("h-stamina").textContent="STAMINA  "+"▰".repeat(Math.ceil(it.stamina*5))+"▱".repeat(5-Math.ceil(it.stamina*5)),document.getElementById("h-ammo").textContent=String(it.ammo).padStart(2,"0"),document.getElementById("h-reserve").textContent="/ "+it.reserve,document.getElementById("h-enemies").textContent=`RELAYS ${Ke.relays.map(n=>n.cut?"■":"□").join(" ")}  ${it.relays}/3`,document.querySelector(".radio").style.opacity=xo>0?"1":"0",document.getElementById("h-objective").textContent=Ke.allCut?"REACH THE BOAT":"CUT THE THREE UPLINK RELAYS";const i=Ke.closest(new w(it.x,0,it.z),Je),t=document.getElementById("interaction"),e=document.getElementById("btn-use");t.classList.toggle("hidden",!i),e.classList.toggle("hidden",!i||i.type==="extract"),i&&(document.getElementById("interact-label").textContent=i.type==="extract"?"BOAT EXTRACTION READY":`HOLD E / USE — CUT UPLINK ${i.relay.id}`,document.getElementById("interact-detail").textContent=i.type==="extract"?"BOARDING AUTOMATICALLY":`DISABLE SECURITY UPLINK · ${Math.round(i.progress*100)}%`,document.getElementById("interact-fill").style.width=`${i.progress*100}%`),rx(),document.getElementById("hitmarker").style.opacity=go>0?"1":"0",document.getElementById("damage").style.opacity=String(Math.max(0,mo)),document.getElementById("crosshair").classList.toggle("aiming",Gn),document.getElementById("h-ammo-bars").innerHTML=Array.from({length:Math.ceil(it.ammo/3)},(n,r)=>`<i style="opacity:${r===Math.ceil(it.ammo/3)-1&&it.ammo%3?.6:1}"></i>`).join("")}function ox(){kn.setSize(innerWidth,innerHeight),Ee.aspect=innerWidth/innerHeight,Ee.updateProjectionMatrix()}window.addEventListener("resize",ox);window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),Ne.add(i.code),!i.repeat){if(i.code==="KeyR"&&Vc(),i.code==="KeyF"&&ex(),i.code==="Escape"&&!document.getElementById("settings-panel").classList.contains("hidden")){document.getElementById("settings-panel").classList.add("hidden");return}(i.code==="Escape"||i.code==="KeyP")&&oe==="playing"&&ds(),i.code==="Enter"&&(oe==="menu"||oe==="paused"||oe==="dead"||oe==="victory")&&document.getElementById("primary").click()}});window.addEventListener("keyup",i=>Ne.delete(i.code));window.addEventListener("blur",()=>{Ne.clear(),yi=!1,Gn=!1,Tr=!1,oe==="playing"&&!xn&&ds()});window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!xn&&document.pointerLockElement!==en&&oe==="playing"&&ds()});en.addEventListener("mousemove",i=>{oe!=="playing"||document.pointerLockElement!==en||(Je-=i.movementX*.0022*wr,ei=Math.max(-1.35,Math.min(1.35,ei-i.movementY*.0022*wr)))});en.addEventListener("mousedown",i=>{oe==="playing"&&(!xn&&document.pointerLockElement!==en&&Gc(),i.button===0&&(yi=!0,Wc()),i.button===2&&(Gn=!0))});window.addEventListener("mouseup",i=>{i.button===0&&(yi=!1),i.button===2&&(Gn=!1)});en.addEventListener("pointerdown",i=>{if(!(!xn||oe!=="playing"||hs!==null)){hs=i.pointerId,Zs={x:i.clientX,y:i.clientY};try{en.setPointerCapture(i.pointerId)}catch{}}});en.addEventListener("pointermove",i=>{if(!xn||i.pointerId!==hs)return;const t=i.clientX-Zs.x,e=i.clientY-Zs.y;Je-=t*.0045,ei=Math.max(-1.28,Math.min(1.28,ei-e*.0045)),Zs={x:i.clientX,y:i.clientY}});for(let i of["pointerup","pointercancel","lostpointercapture"])en.addEventListener(i,t=>{t.pointerId===hs&&(hs=null)});window.addEventListener("touchmove",i=>{oe==="playing"&&i.preventDefault()},{passive:!1});window.addEventListener("touchstart",i=>{oe==="playing"&&i.touches.length>1&&i.preventDefault()},{passive:!1});Ee.position.set(it.x,it.y,it.z);Ee.rotation.order="YXZ";Ee.rotation.set(ei,Je,0);const ax=new jd;function cx(i){if(Ce+=i,di.tick(i,Ce,it.x,it.z),oe==="intro"){qr+=i;const t=Math.min(1,qr/uc),e=t*t*(3-2*t);Ee.position.set(-34+e*2,1.72+(1-e)*.85,6+(1-e)*1.1),Ee.rotation.order="YXZ",Ee.rotation.set(-.12+t*.08,-Math.PI/2,0),Ee.fov=Rn.lerp(57,Gi,e),Ee.updateProjectionMatrix();const n=document.getElementById("intro-curtain");n.style.opacity=String(Math.max(0,1-qr/.55)),!fc&&qr>Math.min(.8,uc*.35)&&(fc=!0,ni("BREACHER, THIS IS CONTROL. THE HARBORMASTER HOLDS THE BERTH. CUT THREE UPLINKS — YARD, SHED, QUAY.",8)),t>.77&&(document.getElementById("hud").classList.remove("hidden"),_n.root.visible=!0),t>=1&&(oe="playing",document.getElementById("intro-overlay").classList.add("hidden"),wu()),ma(i)}else if(oe==="playing"){if((yi||Fe.fire)&&Wc(),it.reloading&&(_o-=i,_o<=0)){const t=Math.min(it.reserve,30-it.ammo);it.ammo+=t,it.reserve-=t,it.reloading=!1}ls=Math.max(0,ls-i),vo=Math.max(0,vo-i),go=Math.max(0,go-i),mo=Math.max(0,mo-i*1.5),xo>0&&(xo-=i),Qv(i),ix(i),nx(i),ma(i)}else oe==="menu"&&(_n.root.visible=!1,Ee.position.set(-34+Math.sin(Ce*.085)*.4,1.8,6+Math.sin(Ce*.12)*.55),Ee.rotation.set(-.085,-Math.PI/2+Math.sin(Ce*.14)*.035,0),_n.root.position.set(.68,-.645,-.91),_n.root.rotation.set(0,.16,0)),ma(i)}function Cu(){requestAnimationFrame(Cu),qv();let t=Math.min(ax.getDelta(),.24);for(;t>1e-5;){const e=Math.min(.04,t);cx(e),t-=e}sx(),kn.render(Pn,Ee)}Cu();
