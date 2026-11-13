(()=>{var ul="170";var Oh=0,Ol=1,Bh=2;var Zc=1,kh=2,bn=3,Zn=0,Ce=1,en=2,qn=0,Yn=1,xi=2,Bl=3,kl=4,Hh=5,fi=100,Vh=101,Gh=102,Wh=103,Xh=104,qh=200,Yh=201,Zh=202,$h=203,Ga=204,Wa=205,Jh=206,Kh=207,jh=208,Qh=209,tu=210,eu=211,nu=212,iu=213,su=214,Xa=0,qa=1,Ya=2,Zi=3,Za=4,$a=5,Ja=6,Ka=7,$c=0,ru=1,au=2,fn=0,ou=1,lu=2,cu=3,hu=4,uu=5,fu=6,du=7;var Jc=300,$i=301,Ji=302,ja=303,Qa=304,kr=306,to=1e3,mi=1001,eo=1002,He=1003,pu=1004;var Ns=1005;var cn=1006,fa=1007;var gi=1008;var Tn=1009,Kc=1010,jc=1011,Ss=1012,fl=1013,vi=1014,hn=1015,Cs=1016,dl=1017,pl=1018,Ki=1020,Qc=35902,th=1021,eh=1022,nn=1023,nh=1024,ih=1025,Xi=1026,ji=1027,ml=1028,gl=1029,sh=1030,xl=1031;var vl=1033,hr=33776,ur=33777,fr=33778,dr=33779,no=35840,io=35841,so=35842,ro=35843,ao=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,xo=37815,vo=37816,_o=37817,yo=37818,Mo=37819,bo=37820,So=37821,pr=36492,wo=36494,Eo=36495,rh=36283,To=36284,Ao=36285,Ro=36286;var mr=2300,Co=2301,da=2302,Hl=2400,Vl=2401,Gl=2402;var mu=3200,gu=3201;var xu=0,vu=1,Xn="",Je="srgb",jn="srgb-linear",Hr="linear",ie="srgb";var Ri=7680;var Wl=519,_u=512,yu=513,Mu=514,ah=515,bu=516,Su=517,wu=518,Eu=519,Xl=35044,Qn=35048;var ql="300 es",wn=2e3,gr=2001,$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pa=Math.PI/180,Io=180/Math.PI;function Is(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function Tu(s,t){return(s%t+t)%t}function ma(s,t,e){return(1-e)*s+e*t}function fs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Jt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],x=i[0],g=i[3],d=i[6],S=i[1],_=i[4],v=i[7],C=i[2],T=i[5],E=i[8];return r[0]=a*x+o*S+l*C,r[3]=a*g+o*_+l*T,r[6]=a*d+o*v+l*E,r[1]=c*x+h*S+u*C,r[4]=c*g+h*_+u*T,r[7]=c*d+h*v+u*E,r[2]=f*x+p*S+m*C,r[5]=f*g+p*_+m*T,r[8]=f*d+p*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ga=new Bt;function oh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Au(){let s=xr("canvas");return s.style.display="block",s}var Yl={};function ys(s){s in Yl||(Yl[s]=!0,console.warn(s))}function Ru(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cu(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Iu(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Hr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zl=[.64,.33,.3,.6,.15,.06],$l=[.2126,.7152,.0722],Jl=[.3127,.329],Kl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[jn]:{primaries:Zl,whitePoint:Jl,transfer:Hr,toXYZ:Kl,fromXYZ:jl,luminanceCoefficients:$l,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Zl,whitePoint:Jl,transfer:ie,toXYZ:Kl,fromXYZ:jl,luminanceCoefficients:$l,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Ci,Po=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=xr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pu=0,vr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xa(i[a].image)):r.push(xa(i[a]))}else r=xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Po.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,Ve=class s extends $n{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=mi,i=mi,r=cn,a=gi,o=nn,l=Tn,c=s.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Is(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Jc;Ve.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(p+1)/2,C=(d+1)/2,T=(h+f)/4,E=(u+x)/4,I=(m+g)/4;return _>v&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=E/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=E/r,i=I/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lo=class extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_r=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==m){let g=1-o,d=l*f+c*p+h*m+u*x,S=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,d*S);g=Math.sin(g*T)/C,o=Math.sin(o*T)/C}let v=o*S;if(l=l*g+f*v,c=c*g+p*v,h=h*g+m*v,u=u*g+x*v,g===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*f,t[e+1]=l*m+h*f+c*u-o*p,t[e+2]=c*m+h*p+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new O,Ql=new dn,Rn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),zs.subVectors(this.max,ds),Ii.subVectors(t.a,ds),Pi.subVectors(t.b,ds),Li.subVectors(t.c,ds),Bn.subVectors(Pi,Ii),kn.subVectors(Li,Pi),ri.subVectors(Ii,Li);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ri.z,ri.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ri.z,0,-ri.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ri.y,ri.x,0];return!_a(e,Ii,Pi,Li,zs)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,Ii,Pi,Li,zs))?!1:(Os.crossVectors(Bn,kn),e=[Os.x,Os.y,Os.z],_a(e,Ii,Pi,Li,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xn=[new O,new O,new O,new O,new O,new O,new O,new O],je=new O,Fs=new Rn,Ii=new O,Pi=new O,Li=new O,Bn=new O,kn=new O,ri=new O,ds=new O,zs=new O,Os=new O,ai=new O;function _a(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ai.fromArray(s,r);let o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Du=new Rn,ps=new O,ya=new O,Cn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Du.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ya)),this.expandByPoint(ps.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new O,Ma=new O,Bs=new O,Hn=new O,ba=new O,ks=new O,Sa=new O,ws=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ma.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Ma);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=Hn.dot(this.direction),l=-Hn.dot(Bs),c=Hn.lengthSq(),h=Math.abs(1-a*a),u,f,p,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ma).addScaledVector(Bs,f),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){ba.subVectors(e,t),ks.subVectors(n,t),Sa.crossVectors(ba,ks);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);let l=o*this.direction.dot(ks.crossVectors(Hn,ks));if(l<0)return null;let c=o*this.direction.dot(ba.cross(Hn));if(c<0||l+c>a)return null;let h=-o*Hn.dot(Sa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,p,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,p,m,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,m=c*h,x=c*u;e[0]=f+x*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,m=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Nu)}lookAt(t,e,n){let i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Vn.crossVectors(n,Be),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Vn.crossVectors(n,Be)),Vn.normalize(),Hs.crossVectors(Be,Vn),i[0]=Vn.x,i[4]=Hs.x,i[8]=Be.x,i[1]=Vn.y,i[5]=Hs.y,i[9]=Be.y,i[2]=Vn.z,i[6]=Hs.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],S=n[3],_=n[7],v=n[11],C=n[15],T=i[0],E=i[4],I=i[8],M=i[12],y=i[1],R=i[5],L=i[9],P=i[13],z=i[2],Y=i[6],B=i[10],Z=i[14],H=i[3],tt=i[7],nt=i[11],st=i[15];return r[0]=a*T+o*y+l*z+c*H,r[4]=a*E+o*R+l*Y+c*tt,r[8]=a*I+o*L+l*B+c*nt,r[12]=a*M+o*P+l*Z+c*st,r[1]=h*T+u*y+f*z+p*H,r[5]=h*E+u*R+f*Y+p*tt,r[9]=h*I+u*L+f*B+p*nt,r[13]=h*M+u*P+f*Z+p*st,r[2]=m*T+x*y+g*z+d*H,r[6]=m*E+x*R+g*Y+d*tt,r[10]=m*I+x*L+g*B+d*nt,r[14]=m*M+x*P+g*Z+d*st,r[3]=S*T+_*y+v*z+C*H,r[7]=S*E+_*R+v*Y+C*tt,r[11]=S*I+_*L+v*B+C*nt,r[15]=S*M+_*P+v*Z+C*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15];return m*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],S=u*g*c-x*f*c+x*l*p-o*g*p-u*l*d+o*f*d,_=m*f*c-h*g*c-m*l*p+a*g*p+h*l*d-a*f*d,v=h*x*c-m*u*c+m*o*p-a*x*p-h*o*d+a*u*d,C=m*u*l-h*x*l-m*o*f+a*x*f+h*o*g-a*u*g,T=e*S+n*_+i*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=S*E,t[1]=(x*f*r-u*g*r-x*i*p+n*g*p+u*i*d-n*f*d)*E,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*E,t[4]=_*E,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*E,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*E,t[8]=v*E,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*d-e*u*d)*E,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=C*E,t[13]=(h*x*i-m*u*i+m*n*f-e*x*f-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*x*i-m*n*l+e*x*l+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,m=r*u,x=a*h,g=a*u,d=o*u,S=l*c,_=l*h,v=l*u,C=n.x,T=n.y,E=n.z;return i[0]=(1-(x+d))*C,i[1]=(p+v)*C,i[2]=(m-_)*C,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(f+d))*T,i[6]=(g+S)*T,i[7]=0,i[8]=(m+_)*E,i[9]=(g-S)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Di.set(i[0],i[1],i[2]).length(),a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);let c=1/r,h=1/a,u=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(o===wn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===gr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=wn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,p=(n+i)*h,m,x;if(o===wn)m=(a+r)*u,x=-2*u;else if(o===gr)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new O,Qe=new se,Uu=new O(0,0,0),Nu=new O(1,1,1),Vn=new O,Hs=new O,Be=new O,tc=new se,ec=new dn,sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fu=0,nc=new O,Ui=new dn,_n=new se,Vs=new O,ms=new O,zu=new O,Ou=new dn,ic=new O(1,0,0),sc=new O(0,1,0),rc=new O(0,0,1),ac={type:"added"},Bu={type:"removed"},Ni={type:"childadded",child:null},wa={type:"childremoved",child:null},Ge=class s extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new O,e=new sn,n=new dn,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Bt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vs.copy(t):Vs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ms,Vs,this.up):_n.lookAt(Vs,ms,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(_n),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ac),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ac),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ge.DEFAULT_UP=new O(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new O,yn=new O,Ea=new O,Mn=new O,Fi=new O,zi=new O,oc=new O,Ta=new O,Aa=new O,Ra=new O,Ca=new de,Ia=new de,Pa=new de,di=class s{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),yn.subVectors(n,e),Ea.subVectors(t,e);let a=tn.dot(tn),o=tn.dot(yn),l=tn.dot(Ea),c=yn.dot(yn),h=yn.dot(Ea),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ca.setScalar(0),Ia.setScalar(0),Pa.setScalar(0),Ca.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ca,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Pa,r.z),a}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),yn.subVectors(t,e),tn.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Fi.subVectors(i,n),zi.subVectors(r,n),Ta.subVectors(t,n);let l=Fi.dot(Ta),c=zi.dot(Ta);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,i);let h=Fi.dot(Aa),u=zi.dot(Aa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Fi,a);Ra.subVectors(t,r);let p=Fi.dot(Ra),m=zi.dot(Ra);if(m>=0&&p<=m)return e.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(zi,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return oc.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(oc,o);let d=1/(g+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Fi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function La(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Tu(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=La(a,r,t+1/3),this.g=La(a,r,t),this.b=La(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Zt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Fe(Re.r*255,0,255))*65536+Math.round(Fe(Re.g*255,0,255))*256+Math.round(Fe(Re.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Re.copy(this),e);let n=Re.r,i=Re.g,r=Re.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Je){Zt.fromWorkingColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,i=Re.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Gs);let n=ma(Gn.h,Gs.h,e),i=ma(Gn.s,Gs.s,e),r=ma(Gn.l,Gs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new Nt;Nt.NAMES=lh;var ku=0,Jn=class extends $n{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Is(),this.name="",this.blending=Yn,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_i=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new O,Ws=new Jt,Ot=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}};var Mr=class extends Ot{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var br=class extends Ot{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Ot{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hu=0,$e=new se,Da=new Ge,Oi=new O,ke=new Rn,gs=new Rn,ye=new O,pe=class s extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?br:Mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ke.min,gs.min),ke.expandByPoint(ye),ye.addVectors(ke.max,gs.max),ke.expandByPoint(ye)):(ke.expandByPoint(gs.min),ke.expandByPoint(gs.max))}ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),ye.add(Oi)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new O,l[I]=new O;let c=new O,h=new O,u=new O,f=new Jt,p=new Jt,m=new Jt,x=new O,g=new O;function d(I,M,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),m.sub(f);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),o[I].add(x),o[M].add(x),o[y].add(x),l[I].add(g),l[M].add(g),l[y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,M=S.length;I<M;++I){let y=S[I],R=y.start,L=y.count;for(let P=R,z=R+L;P<z;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new O,v=new O,C=new O,T=new O;function E(I){C.fromBufferAttribute(i,I),T.copy(C);let M=o[I];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(T,M);let R=v.dot(l[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,R)}for(let I=0,M=S.length;I<M;++I){let y=S[I],R=y.start,L=y.count;for(let P=R,z=R+L;P<z;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lc=new se,oi=new ws,Xs=new Cn,cc=new O,qs=new O,Ys=new O,Zs=new O,Ua=new O,$s=new O,hc=new O,Js=new O,Kt=class extends Ge{constructor(t=new pe,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ua.fromBufferAttribute(u,t),a?$s.addScaledVector(Ua,h):$s.addScaledVector(Ua.sub(e),h))}e.add($s)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(Xs.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Xs,cc)===null||oi.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=a[g.materialIndex],S=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=S,C=_;v<C;v+=3){let T=o.getX(v),E=o.getX(v+1),I=o.getX(v+2);i=Ks(this,d,t,n,c,h,u,T,E,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let S=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=Ks(this,a,t,n,c,h,u,S,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=a[g.materialIndex],S=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=S,C=_;v<C;v+=3){let T=v,E=v+1,I=v+2;i=Ks(this,d,t,n,c,h,u,T,E,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let S=g,_=g+1,v=g+2;i=Ks(this,a,t,n,c,h,u,S,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Vu(s,t,e,n,i,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Zn,o),l===null)return null;Js.copy(o),Js.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:s}}function Ks(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,qs),s.getVertexPosition(l,Ys),s.getVertexPosition(c,Zs);let h=Vu(s,t,e,n,qs,Ys,Zs,hc);if(h){let u=new O;di.getBarycoord(hc,qs,Ys,Zs,u),i&&(h.uv=di.getInterpolatedAttribute(i,o,l,c,u,new Jt)),r&&(h.uv1=di.getInterpolatedAttribute(r,o,l,c,u,new Jt)),a&&(h.normal=di.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};di.getNormal(qs,Ys,Zs,f.normal),h.face=f,h.barycoord=u}return h}var yi=class s extends pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function m(x,g,d,S,_,v,C,T,E,I,M){let y=v/E,R=C/I,L=v/2,P=C/2,z=T/2,Y=E+1,B=I+1,Z=0,H=0,tt=new O;for(let nt=0;nt<B;nt++){let st=nt*R-P;for(let gt=0;gt<Y;gt++){let Rt=gt*y-L;tt[x]=Rt*S,tt[g]=st*_,tt[d]=z,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[g]=0,tt[d]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(gt/E),u.push(1-nt/I),Z+=1}}for(let nt=0;nt<I;nt++)for(let st=0;st<E;st++){let gt=f+st+Y*nt,Rt=f+st+Y*(nt+1),q=f+(st+1)+Y*(nt+1),rt=f+(st+1)+Y*nt;l.push(gt,Rt,rt),l.push(Rt,q,rt),H+=6}o.addGroup(p,H,M),p+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(s){let t={};for(let e=0;e<s.length;e++){let n=Qi(s[e]);for(let i in n)t[i]=n[i]}return t}function Gu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ch(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Wu={clone:Qi,merge:Le},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ue=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=new O,uc=new Jt,fc=new Jt,De=class extends Sr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,fc),e.subVectors(fc,uc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bi=-90,ki=1,Uo=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new De(Bi,ki,t,e);i.layers=this.layers,this.add(i);let r=new De(Bi,ki,t,e);r.layers=this.layers,this.add(r);let a=new De(Bi,ki,t,e);a.layers=this.layers,this.add(a);let o=new De(Bi,ki,t,e);o.layers=this.layers,this.add(o);let l=new De(Bi,ki,t,e);l.layers=this.layers,this.add(l);let c=new De(Bi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wr=class extends Ve{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},No=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yi(5,5,5),r=new ue({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:qn});r.uniforms.tEquirect.value=e;let a=new Kt(i,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=cn),new Uo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Na=new O,Yu=new O,Zu=new Bt,Sn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Na.subVectors(n,e).cross(Yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zu.getNormalMatrix(t),i=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new Cn,js=new O,Er=class{constructor(t=new Sn,e=new Sn,n=new Sn,i=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],m=i[9],x=i[10],g=i[11],d=i[12],S=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-p,v-d).normalize(),n[1].setComponents(l+r,f+c,g+p,v+d).normalize(),n[2].setComponents(l+a,f+h,g+m,v+S).normalize(),n[3].setComponents(l-a,f-h,g-m,v-S).normalize(),n[4].setComponents(l-o,f-u,g-x,v-_).normalize(),e===wn)n[5].setComponents(l+o,f+u,g+x,v+_).normalize();else if(e===gr)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $u(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Kn=class s extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){let S=d*f-a;for(let _=0;_<c;_++){let v=_*u-r;m.push(v,-S,0),x.push(0,0,1),g.push(_/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let _=S+c*d,v=S+c*(d+1),C=S+1+c*(d+1),T=S+1+c*d;p.push(_,v,T),p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
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
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yf=`#define PI 3.141592653589793
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
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
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
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,Jf=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nd=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
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
}`,ip=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
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
}`,rp=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,fp=`#define LAMBERT
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
}`,dp=`#define LAMBERT
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
}`,pp=`#define MATCAP
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
}`,mp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,_p=`#define PHONG
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
}`,yp=`#define STANDARD
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
}`,Mp=`#define STANDARD
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
}`,bp=`#define TOON
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
}`,Sp=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ap=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Ju,alphahash_pars_fragment:Ku,alphamap_fragment:ju,alphamap_pars_fragment:Qu,alphatest_fragment:tf,alphatest_pars_fragment:ef,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:rf,batching_vertex:af,begin_vertex:of,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:hf,bumpmap_pars_fragment:uf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:xf,color_pars_vertex:vf,color_vertex:_f,common:yf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Sf,displacementmap_vertex:wf,emissivemap_fragment:Ef,emissivemap_pars_fragment:Tf,colorspace_fragment:Af,colorspace_pars_fragment:Rf,envmap_fragment:Cf,envmap_common_pars_fragment:If,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Gf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Ff,fog_pars_fragment:zf,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Vf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:qf,lights_phong_pars_fragment:Yf,lights_physical_fragment:Zf,lights_physical_pars_fragment:$f,lights_fragment_begin:Jf,lights_fragment_maps:Kf,lights_fragment_end:jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:sd,map_particle_fragment:rd,map_particle_pars_fragment:ad,metalnessmap_fragment:od,metalnessmap_pars_fragment:ld,morphinstance_vertex:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:fd,morphtarget_vertex:dd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:xd,normal_vertex:vd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Sd,opaque_fragment:wd,packing:Ed,premultiplied_alpha_fragment:Td,project_vertex:Ad,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Dd,shadowmap_vertex:Ud,shadowmask_pars_fragment:Nd,skinbase_vertex:Fd,skinning_pars_vertex:zd,skinning_vertex:Od,skinnormal_vertex:Bd,specularmap_fragment:kd,specularmap_pars_fragment:Hd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Gd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:Yd,uv_vertex:Zd,worldpos_vertex:$d,background_vert:Jd,background_frag:Kd,backgroundCube_vert:jd,backgroundCube_frag:Qd,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distanceRGBA_vert:sp,distanceRGBA_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:fp,meshlambert_frag:dp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:xp,meshphong_vert:vp,meshphong_frag:_p,meshphysical_vert:yp,meshphysical_frag:Mp,meshtoon_vert:bp,meshtoon_frag:Sp,points_vert:wp,points_frag:Ep,shadow_vert:Tp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},ut={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ln={basic:{uniforms:Le([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Le([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Le([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Le([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Le([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Le([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Le([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Le([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Le([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Le([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Le([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Le([ut.common,ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Le([ut.lights,ut.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ln.physical={uniforms:Le([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Qs={r:0,b:0,g:0},ci=new sn,Ip=new se;function Pp(s,t,e,n,i,r,a){let o=new Nt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function m(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function x(S){let _=!1,v=m(S);v===null?d(o,l):v&&v.isColor&&(d(v,1),_=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===kr)?(h===void 0&&(h=new Kt(new yi(1,1,1),new ue({name:"BackgroundCubeMaterial",uniforms:Qi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ci.copy(_.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(ci)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ie,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Kt(new Kn(2,2),new ue({name:"BackgroundMaterial",uniforms:Qi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,_){S.getRGB(Qs,ch(s)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:x,addToRenderList:g}}function Lp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,R,L,P,z){let Y=!1,B=u(P,L,R);r!==B&&(r=B,c(r.object)),Y=p(y,P,L,z),Y&&m(y,P,L,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,R,L,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,R,L){let P=L.wireframe===!0,z=n[y.id];z===void 0&&(z={},n[y.id]=z);let Y=z[R.id];Y===void 0&&(Y={},z[R.id]=Y);let B=Y[P];return B===void 0&&(B=f(l()),Y[P]=B),B}function f(y){let R=[],L=[],P=[];for(let z=0;z<e;z++)R[z]=0,L[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:P,object:y,attributes:{},index:null}}function p(y,R,L,P){let z=r.attributes,Y=R.attributes,B=0,Z=L.getAttributes();for(let H in Z)if(Z[H].location>=0){let nt=z[H],st=Y[H];if(st===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),nt===void 0||nt.attribute!==st||st&&nt.data!==st.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function m(y,R,L,P){let z={},Y=R.attributes,B=0,Z=L.getAttributes();for(let H in Z)if(Z[H].location>=0){let nt=Y[H];nt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));let st={};st.attribute=nt,nt&&nt.data&&(st.data=nt.data),z[H]=st,B++}r.attributes=z,r.attributesNum=B,r.index=P}function x(){let y=r.newAttributes;for(let R=0,L=y.length;R<L;R++)y[R]=0}function g(y){d(y,0)}function d(y,R){let L=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;L[y]=1,P[y]===0&&(s.enableVertexAttribArray(y),P[y]=1),z[y]!==R&&(s.vertexAttribDivisor(y,R),z[y]=R)}function S(){let y=r.newAttributes,R=r.enabledAttributes;for(let L=0,P=R.length;L<P;L++)R[L]!==y[L]&&(s.disableVertexAttribArray(L),R[L]=0)}function _(y,R,L,P,z,Y,B){B===!0?s.vertexAttribIPointer(y,R,L,z,Y):s.vertexAttribPointer(y,R,L,P,z,Y)}function v(y,R,L,P){x();let z=P.attributes,Y=L.getAttributes(),B=R.defaultAttributeValues;for(let Z in Y){let H=Y[Z];if(H.location>=0){let tt=z[Z];if(tt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let nt=tt.normalized,st=tt.itemSize,gt=t.get(tt);if(gt===void 0)continue;let Rt=gt.buffer,q=gt.type,rt=gt.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||tt.gpuType===fl;if(tt.isInterleavedBufferAttribute){let ht=tt.data,St=ht.stride,It=tt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)d(H.location+Ct,ht.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Ct=0;Ct<H.locationSize;Ct++)_(H.location+Ct,st/H.locationSize,q,nt,St*rt,(It+st/H.locationSize*Ct)*rt,xt)}else{if(tt.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)d(H.location+ht,tt.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ht=0;ht<H.locationSize;ht++)g(H.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let ht=0;ht<H.locationSize;ht++)_(H.location+ht,st/H.locationSize,q,nt,st*rt,st/H.locationSize*ht*rt,xt)}}else if(B!==void 0){let nt=B[Z];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(H.location,nt);break;case 3:s.vertexAttrib3fv(H.location,nt);break;case 4:s.vertexAttrib4fv(H.location,nt);break;default:s.vertexAttrib1fv(H.location,nt)}}}}S()}function C(){I();for(let y in n){let R=n[y];for(let L in R){let P=R[L];for(let z in P)h(P[z].object),delete P[z];delete R[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let L in R){let P=R[L];for(let z in P)h(P[z].object),delete P[z];delete R[L]}delete n[y.id]}function E(y){for(let R in n){let L=n[R];if(L[y.id]===void 0)continue;let P=L[y.id];for(let z in P)h(P[z].object),delete P[z];delete L[y.id]}}function I(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function Dp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Up(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==nn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let I=E===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hn&&!I)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function Np(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Sn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,_=S*4,v=d.clippingState||null;l.value=v,v=h(m,f,_,p);for(let C=0;C!==_;++C)v[C]=e[C];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let d=p+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,v=p;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Fp(s){let t=new WeakMap;function e(a,o){return o===ja?a.mapping=$i:o===Qa&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ja||o===Qa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new No(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fo=class extends Sr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gi=4,dc=[.125,.215,.35,.446,.526,.582],pi=20,Fa=new Fo,pc=new Nt,za=null,Oa=0,Ba=0,ka=!1,ui=(1+Math.sqrt(5))/2,Hi=1/ui,mc=[new O(-ui,Hi,0),new O(ui,Hi,0),new O(-Hi,0,ui),new O(Hi,0,ui),new O(0,ui,-Hi),new O(0,ui,Hi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){za=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Oa,Ba),this._renderer.xr.enabled=ka,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Cs,format:nn,colorSpace:jn,depthBuffer:!1},i=gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(r)),this._blurMaterial=Op(r,t,e)}return i}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,i){let o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(pc),h.toneMapping=fn,h.autoClear=!1;let p=new _i({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),m=new Kt(new yi,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(pc),x=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let _=this._cubeSize;tr(i,S*_,d>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$i||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mc[(i-r-1)%mc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*pi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);let d=[],S=0;for(let E=0;E<pi;++E){let I=E/x,M=Math.exp(-I*I/2);d.push(M),E===0?S+=M:E<g&&(S+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;let v=this._sizeLods[i],C=3*v*(i>_-Gi?i-_+Gi:0),T=4*(this._cubeSize-v);tr(e,C,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Fa)}};function zp(s){let t=[],e=[],n=[],i=s,r=s-Gi+1+dc.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Gi?l=dc[a-s+Gi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,d=1,S=new Float32Array(x*m*p),_=new Float32Array(g*m*p),v=new Float32Array(d*m*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,I=T>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];S.set(M,x*m*T),_.set(f,g*m*T);let y=[T,T,T,T,T,T];v.set(y,d*m*T)}let C=new pe;C.setAttribute("position",new Ot(S,x)),C.setAttribute("uv",new Ot(_,g)),C.setAttribute("faceIndex",new Ot(v,d)),t.push(C),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gc(s,t,e){let n=new An(s,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Op(s,t,e){let n=new Float32Array(pi),i=new O(0,1,0);return new ue({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_l(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function xc(){return new ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function vc(){return new ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Bp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ja||l===Qa,h=l===$i||l===Ji;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Tr(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Tr(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function kp(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hp(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,d=x.length;g<d;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let x=p[m];for(let g=0,d=x.length;g<d;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let _=0,v=S.length;_<v;_+=3){let C=S[_+0],T=S[_+1],E=S[_+2];f.push(C,T,T,E,E,C)}}else if(m!==void 0){let S=m.array;x=m.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let C=_+0,T=_+1,E=_+2;f.push(C,T,T,E,E,C)}}else return;let g=new(oh(f)?br:Mr)(f,1);g.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*a,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,m);let d=0;for(let S=0;S<m;S++)d+=p[S]*x[S];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wp(s,t,e){let n=new WeakMap,i=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*C*4*u),E=new _r(T,v,C,u);E.type=hn,E.needsUpdate=!0;let I=_*4;for(let y=0;y<u;y++){let R=g[y],L=d[y],P=S[y],z=v*C*4*y;for(let Y=0;Y<R.count;Y++){let B=Y*I;p===!0&&(i.fromBufferAttribute(R,Y),T[z+B+0]=i.x,T[z+B+1]=i.y,T[z+B+2]=i.z,T[z+B+3]=0),m===!0&&(i.fromBufferAttribute(L,Y),T[z+B+4]=i.x,T[z+B+5]=i.y,T[z+B+6]=i.z,T[z+B+7]=0),x===!0&&(i.fromBufferAttribute(P,Y),T[z+B+8]=i.x,T[z+B+9]=i.y,T[z+B+10]=i.z,T[z+B+11]=P.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new Jt(v,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Xp(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ar=class extends Ve{constructor(t,e,n,i,r,a,o,l,c,h=Xi){if(h!==Xi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=vi),n===void 0&&h===ji&&(n=Ki),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uh=new Ve,_c=new Ar(1,1),fh=new _r,dh=new Do,ph=new wr,yc=[],Mc=[],bc=new Float32Array(16),Sc=new Float32Array(9),wc=new Float32Array(4);function es(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=yc[i];if(r===void 0&&(r=new Float32Array(i),yc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vr(s,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function qp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function Zp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function $p(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function Jp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;wc.set(n),s.uniformMatrix2fv(this.addr,!1,wc),_e(e,n)}}function Kp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Sc.set(n),s.uniformMatrix3fv(this.addr,!1,Sc),_e(e,n)}}function jp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;bc.set(n),s.uniformMatrix4fv(this.addr,!1,bc),_e(e,n)}}function Qp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function tm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function em(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function im(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function rm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function am(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function om(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_c.compareFunction=ah,r=_c):r=uh,e.setTexture2D(t||r,i)}function lm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dh,i)}function cm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ph,i)}function hm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fh,i)}function um(s){switch(s){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return $p;case 35674:return Jp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function fm(s,t){s.uniform1fv(this.addr,t)}function dm(s,t){let e=es(t,this.size,2);s.uniform2fv(this.addr,e)}function pm(s,t){let e=es(t,this.size,3);s.uniform3fv(this.addr,e)}function mm(s,t){let e=es(t,this.size,4);s.uniform4fv(this.addr,e)}function gm(s,t){let e=es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xm(s,t){let e=es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vm(s,t){let e=es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _m(s,t){s.uniform1iv(this.addr,t)}function ym(s,t){s.uniform2iv(this.addr,t)}function Mm(s,t){s.uniform3iv(this.addr,t)}function bm(s,t){s.uniform4iv(this.addr,t)}function Sm(s,t){s.uniform1uiv(this.addr,t)}function wm(s,t){s.uniform2uiv(this.addr,t)}function Em(s,t){s.uniform3uiv(this.addr,t)}function Tm(s,t){s.uniform4uiv(this.addr,t)}function Am(s,t,e){let n=this.cache,i=t.length,r=Vr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||uh,r[a])}function Rm(s,t,e){let n=this.cache,i=t.length,r=Vr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dh,r[a])}function Cm(s,t,e){let n=this.cache,i=t.length,r=Vr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ph,r[a])}function Im(s,t,e){let n=this.cache,i=t.length,r=Vr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||fh,r[a])}function Pm(s){switch(s){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return _m;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return wm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Im}}var zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=um(e.type)}},Oo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pm(e.type)}},Bo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function Ec(s,t){s.seq.push(t),s.map[t.id]=t}function Lm(s,t,e){let n=s.name,i=n.length;for(Ha.lastIndex=0;;){let r=Ha.exec(n),a=Ha.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ec(e,c===void 0?new zo(o,s,t):new Oo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Bo(o),Ec(e,u)),e=u}}}var Yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Lm(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Tc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Dm=37297,Um=0;function Nm(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ac=new Bt;function Fm(s){Zt._getMatrix(Ac,Zt.workingColorSpace,s);let t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Hr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Nm(s.getShaderSource(t),a)}else return i}function zm(s,t){let e=Fm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Om(s,t){let e;switch(t){case ou:e="Linear";break;case lu:e="Reinhard";break;case cu:e="Cineon";break;case hu:e="ACESFilmic";break;case fu:e="AgX";break;case du:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var er=new O;function Bm(){Zt.getLuminanceCoefficients(er);let s=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Hm(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vm(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ms(s){return s!==""}function Cc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ic(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(s){return s.replace(Gm,Xm)}var Wm=new Map;function Xm(s,t){let e=Ht[t];if(e===void 0){let n=Wm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}var qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(s){return s.replace(qm,Ym)}function Ym(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lc(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function $m(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Ji:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Km(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case au:t="ENVMAP_BLENDING_ADD";break}return t}function jm(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qm(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Zm(e),c=$m(e),h=Jm(e),u=Km(e),f=jm(e),p=km(e),m=Hm(r),x=i.createProgram(),g,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ms).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ms).join(`
`),d.length>0&&(d+=`
`)):(g=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),d=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==fn?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,zm("linearToOutputTexel",e.outputColorSpace),Bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=ko(a),a=Cc(a,e),a=Ic(a,e),o=ko(o),o=Cc(o,e),o=Ic(o,e),a=Pc(a),o=Pc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=S+g+a,v=S+d+o,C=Tc(i,i.VERTEX_SHADER,_),T=Tc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,C),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(R){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),P=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(T).trim(),Y=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,T);else{let Z=Rc(i,C,"vertex"),H=Rc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Z+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||z==="")&&(B=!1);B&&(R.diagnostics={runnable:Y,programLog:L,vertexShader:{log:P,prefix:g},fragmentShader:{log:z,prefix:d}})}i.deleteShader(C),i.deleteShader(T),I=new Yi(i,x),M=Vm(i,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Dm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Um++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var t0=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vo(t),e.set(t,n)),n}},Vo=class{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}};function e0(s,t,e,n,i,r,a){let o=new yr,l=new Ho,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,R,L,P){let z=L.fog,Y=P.geometry,B=M.isMeshStandardMaterial?L.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),H=Z&&Z.mapping===kr?Z.image.height:null,tt=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,st=nt!==void 0?nt.length:0,gt=0;Y.morphAttributes.position!==void 0&&(gt=1),Y.morphAttributes.normal!==void 0&&(gt=2),Y.morphAttributes.color!==void 0&&(gt=3);let Rt,q,rt,xt;if(tt){let $t=ln[tt];Rt=$t.vertexShader,q=$t.fragmentShader}else Rt=M.vertexShader,q=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);let ht=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),It=P.isInstancedMesh===!0,Ct=P.isBatchedMesh===!0,Qt=!!M.map,kt=!!M.matcap,re=!!Z,F=!!M.aoMap,Se=!!M.lightMap,Vt=!!M.bumpMap,Gt=!!M.normalMap,At=!!M.displacementMap,ne=!!M.emissiveMap,Tt=!!M.metalnessMap,A=!!M.roughnessMap,b=M.anisotropy>0,V=M.clearcoat>0,K=M.dispersion>0,Q=M.iridescence>0,J=M.sheen>0,it=M.transmission>0,k=b&&!!M.anisotropyMap,at=V&&!!M.clearcoatMap,wt=V&&!!M.clearcoatNormalMap,et=V&&!!M.clearcoatRoughnessMap,dt=Q&&!!M.iridescenceMap,yt=Q&&!!M.iridescenceThicknessMap,Et=J&&!!M.sheenColorMap,mt=J&&!!M.sheenRoughnessMap,zt=!!M.specularMap,Pt=!!M.specularColorMap,Xt=!!M.specularIntensityMap,D=it&&!!M.transmissionMap,ct=it&&!!M.thicknessMap,$=!!M.gradientMap,j=!!M.alphaMap,pt=M.alphaTest>0,ft=!!M.alphaHash,Ut=!!M.extensions,ae=fn;M.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ae=s.toneMapping);let ge={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Rt,fragmentShader:q,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&P._colorsTexture!==null,instancing:It,instancingColor:It&&P.instanceColor!==null,instancingMorph:It&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:jn,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:kt,envMap:re,envMapMode:re&&Z.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Se,bumpMap:Vt,normalMap:Gt,displacementMap:f&&At,emissiveMap:ne,normalMapObjectSpace:Gt&&M.normalMapType===vu,normalMapTangentSpace:Gt&&M.normalMapType===xu,metalnessMap:Tt,roughnessMap:A,anisotropy:b,anisotropyMap:k,clearcoat:V,clearcoatMap:at,clearcoatNormalMap:wt,clearcoatRoughnessMap:et,dispersion:K,iridescence:Q,iridescenceMap:dt,iridescenceThicknessMap:yt,sheen:J,sheenColorMap:Et,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Pt,specularIntensityMap:Xt,transmission:it,transmissionMap:D,thicknessMap:ct,gradientMap:$,opaque:M.transparent===!1&&M.blending===Yn&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:ft,combine:M.combine,mapUv:Qt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:Se&&x(M.lightMap.channel),bumpMapUv:Vt&&x(M.bumpMap.channel),normalMapUv:Gt&&x(M.normalMap.channel),displacementMapUv:At&&x(M.displacementMap.channel),emissiveMapUv:ne&&x(M.emissiveMap.channel),metalnessMapUv:Tt&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:k&&x(M.anisotropyMap.channel),clearcoatMapUv:at&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(M.sheenRoughnessMap.channel),specularMapUv:zt&&x(M.specularMap.channel),specularColorMapUv:Pt&&x(M.specularColorMap.channel),specularIntensityMapUv:Xt&&x(M.specularIntensityMap.channel),transmissionMapUv:D&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:j&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!Y.attributes.uv&&(Qt||j),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:P.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===Ce,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=m[M.type],R;if(y){let L=ln[y];R=Wu.clone(L.uniforms)}else R=M.uniforms;return R}function C(M,y){let R;for(let L=0,P=h.length;L<P;L++){let z=h[L];if(z.cacheKey===y){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Qm(s,y,M,r),h.push(R)),R}function T(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:I}}function n0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function i0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Dc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Uc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,m,x,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=x,d.group=g),t++,d}function o(u,f,p,m,x,g){let d=a(u,f,p,m,x,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,m,x,g){let d=a(u,f,p,m,x,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||i0),n.length>1&&n.sort(f||Dc),i.length>1&&i.sort(f||Dc)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function s0(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Uc,s.set(n,[a])):i>=r.length?(a=new Uc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function r0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Nt};break;case"SpotLight":e={position:new O,direction:new O,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function a0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var o0=0;function l0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function c0(s){let t=new r0,e=a0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new se,a=new se;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,S=0,_=0,v=0,C=0,T=0,E=0;c.sort(l0);for(let M=0,y=c.length;M<y;M++){let R=c[M],L=R.color,P=R.intensity,z=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*P,u+=L.g*P,f+=L.b*P;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],P);E++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,H=e.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=B,p++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(P),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[x]=B;let Z=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,Z.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,R.castShadow){let H=e.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=Y,v++}x++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(L).multiplyScalar(P),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=B,g++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Z=R.shadow,H=e.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=B,m++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(P),B.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[d]=B,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==d||I.numDirectionalShadows!==S||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==C||I.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=d,I.numDirectionalShadows=S,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=C,I.numLightProbes=E,n.version=o0++)}function l(c,h){let u=0,f=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){let _=c[d];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Nc(s){let t=new c0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function h0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Nc(s),t.set(i,[o])):r>=a.length?(o=new Nc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Go=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wo=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`;function d0(s,t,e){let n=new Er,i=new Jt,r=new Jt,a=new de,o=new Go({depthPacking:gu}),l=new Wo,c={},h=e.maxTextureSize,u={[Zn]:Ce,[Ce]:Zn,[en]:en},f=new ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:u0,fragmentShader:f0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new pe;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let d=this.type;this.render=function(T,E,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(qn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=d!==bn&&this.type===bn,z=d===bn&&this.type!==bn;for(let Y=0,B=T.length;Y<B;Y++){let Z=T[Y],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let tt=H.getFrameExtents();if(i.multiply(tt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||P===!0||z===!0){let st=this.type!==bn?{minFilter:He,magFilter:He}:{};H.map!==null&&H.map.dispose(),H.map=new An(i.x,i.y,st),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let nt=H.getViewportCount();for(let st=0;st<nt;st++){let gt=H.getViewport(st);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),L.viewport(a),H.updateMatrices(Z,st),n=H.getFrustum(),v(E,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&S(H,I),H.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,R)};function S(T,E){let I=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new An(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,I,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,I,p,x,null)}function _(T,E,I,M){let y=null,R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=I.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let L=y.uuid,P=E.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let Y=z[P];Y===void 0&&(Y=y.clone(),z[P]=Y,E.addEventListener("dispose",C)),y=Y}if(y.visible=E.visible,y.wireframe=E.wireframe,M===bn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=I}return y}function v(T,E,I,M,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let P=t.update(T),z=T.material;if(Array.isArray(z)){let Y=P.groups;for(let B=0,Z=Y.length;B<Z;B++){let H=Y[B],tt=z[H.materialIndex];if(tt&&tt.visible){let nt=_(T,tt,M,y);T.onBeforeShadow(s,T,E,I,P,nt,H),s.renderBufferDirect(I,null,P,nt,T,H),T.onAfterShadow(s,T,E,I,P,nt,H)}}}else if(z.visible){let Y=_(T,z,M,y);T.onBeforeShadow(s,T,E,I,P,Y,null),s.renderBufferDirect(I,null,P,Y,T,null),T.onAfterShadow(s,T,E,I,P,Y,null)}}let L=T.children;for(let P=0,z=L.length;P<z;P++)v(L[P],E,I,M,y)}function C(T){T.target.removeEventListener("dispose",C);for(let I in c){let M=c[I],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var p0={[Xa]:qa,[Ya]:Ja,[Za]:Ka,[Zi]:$a,[qa]:Xa,[Ja]:Ya,[Ka]:Za,[$a]:Zi};function m0(s,t){function e(){let D=!1,ct=new de,$=null,j=new de(0,0,0,0);return{setMask:function(pt){$!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){D=pt},setClear:function(pt,ft,Ut,ae,ge){ge===!0&&(pt*=ae,ft*=ae,Ut*=ae),ct.set(pt,ft,Ut,ae),j.equals(ct)===!1&&(s.clearColor(pt,ft,Ut,ae),j.copy(ct))},reset:function(){D=!1,$=null,j.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,$=null,j=null,pt=null;return{setReversed:function(ft){if(ct!==ft){let Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let ae=pt;pt=null,this.setClear(ae)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?ht(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(ft){$!==ft&&!D&&(s.depthMask(ft),$=ft)},setFunc:function(ft){if(ct&&(ft=p0[ft]),j!==ft){switch(ft){case Xa:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case Ya:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case $a:s.depthFunc(s.GEQUAL);break;case Ja:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ft}},setLocked:function(ft){D=ft},setClear:function(ft){pt!==ft&&(ct&&(ft=1-ft),s.clearDepth(ft),pt=ft)},reset:function(){D=!1,$=null,j=null,pt=null,ct=!1}}}function i(){let D=!1,ct=null,$=null,j=null,pt=null,ft=null,Ut=null,ae=null,ge=null;return{setTest:function($t){D||($t?ht(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function($t){ct!==$t&&!D&&(s.stencilMask($t),ct=$t)},setFunc:function($t,Ue,xe){($!==$t||j!==Ue||pt!==xe)&&(s.stencilFunc($t,Ue,xe),$=$t,j=Ue,pt=xe)},setOp:function($t,Ue,xe){(ft!==$t||Ut!==Ue||ae!==xe)&&(s.stencilOp($t,Ue,xe),ft=$t,Ut=Ue,ae=xe)},setLocked:function($t){D=$t},setClear:function($t){ge!==$t&&(s.clearStencil($t),ge=$t)},reset:function(){D=!1,ct=null,$=null,j=null,pt=null,ft=null,Ut=null,ae=null,ge=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,S=null,_=null,v=null,C=null,T=null,E=new Nt(0,0,0),I=0,M=!1,y=null,R=null,L=null,P=null,z=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Z>=2);let tt=null,nt={},st=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),Rt=new de().fromArray(st),q=new de().fromArray(gt);function rt(D,ct,$,j){let pt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(D,ft),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<$;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ct+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ft}let xt={};xt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),a.setFunc(Zi),Vt(!1),Gt(Ol),ht(s.CULL_FACE),F(qn);function ht(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function It(D,ct){return u[D]!==ct?(s.bindFramebuffer(D,ct),u[D]=ct,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ct(D,ct){let $=p,j=!1;if(D){$=f.get(ct),$===void 0&&($=[],f.set(ct,$));let pt=D.textures;if($.length!==pt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ut=pt.length;ft<Ut;ft++)$[ft]=s.COLOR_ATTACHMENT0+ft;$.length=pt.length,j=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,j=!0);j&&s.drawBuffers($)}function Qt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let kt={[fi]:s.FUNC_ADD,[Vh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};kt[Wh]=s.MIN,kt[Xh]=s.MAX;let re={[qh]:s.ZERO,[Yh]:s.ONE,[Zh]:s.SRC_COLOR,[Ga]:s.SRC_ALPHA,[tu]:s.SRC_ALPHA_SATURATE,[jh]:s.DST_COLOR,[Jh]:s.DST_ALPHA,[$h]:s.ONE_MINUS_SRC_COLOR,[Wa]:s.ONE_MINUS_SRC_ALPHA,[Qh]:s.ONE_MINUS_DST_COLOR,[Kh]:s.ONE_MINUS_DST_ALPHA,[eu]:s.CONSTANT_COLOR,[nu]:s.ONE_MINUS_CONSTANT_COLOR,[iu]:s.CONSTANT_ALPHA,[su]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,ct,$,j,pt,ft,Ut,ae,ge,$t){if(D===qn){x===!0&&(St(s.BLEND),x=!1);return}if(x===!1&&(ht(s.BLEND),x=!0),D!==Hh){if(D!==g||$t!==M){if((d!==fi||v!==fi)&&(s.blendEquation(s.FUNC_ADD),d=fi,v=fi),$t)switch(D){case Yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFunc(s.ONE,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,_=null,C=null,T=null,E.set(0,0,0),I=0,g=D,M=$t}return}pt=pt||ct,ft=ft||$,Ut=Ut||j,(ct!==d||pt!==v)&&(s.blendEquationSeparate(kt[ct],kt[pt]),d=ct,v=pt),($!==S||j!==_||ft!==C||Ut!==T)&&(s.blendFuncSeparate(re[$],re[j],re[ft],re[Ut]),S=$,_=j,C=ft,T=Ut),(ae.equals(E)===!1||ge!==I)&&(s.blendColor(ae.r,ae.g,ae.b,ge),E.copy(ae),I=ge),g=D,M=!1}function Se(D,ct){D.side===en?St(s.CULL_FACE):ht(s.CULL_FACE);let $=D.side===Ce;ct&&($=!$),Vt($),D.blending===Yn&&D.transparent===!1?F(qn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function Gt(D){D!==Oh?(ht(s.CULL_FACE),D!==R&&(D===Ol?s.cullFace(s.BACK):D===Bh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),R=D}function At(D){D!==L&&(B&&s.lineWidth(D),L=D)}function ne(D,ct,$){D?(ht(s.POLYGON_OFFSET_FILL),(P!==ct||z!==$)&&(s.polygonOffset(ct,$),P=ct,z=$)):St(s.POLYGON_OFFSET_FILL)}function Tt(D){D?ht(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+Y-1),tt!==D&&(s.activeTexture(D),tt=D)}function b(D,ct,$){$===void 0&&(tt===null?$=s.TEXTURE0+Y-1:$=tt);let j=nt[$];j===void 0&&(j={type:void 0,texture:void 0},nt[$]=j),(j.type!==D||j.texture!==ct)&&(tt!==$&&(s.activeTexture($),tt=$),s.bindTexture(D,ct||xt[D]),j.type=D,j.texture=ct)}function V(){let D=nt[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(D){Rt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Rt.copy(D))}function mt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function zt(D,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let j=$.get(D);j===void 0&&(j=s.getUniformBlockIndex(ct,D.name),$.set(D,j))}function Pt(D,ct){let j=c.get(ct).get(D);l.get(ct)!==j&&(s.uniformBlockBinding(ct,j,D.__bindingPointIndex),l.set(ct,j))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,nt={},u={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,S=null,_=null,v=null,C=null,T=null,E=new Nt(0,0,0),I=0,M=!1,y=null,R=null,L=null,P=null,z=null,Rt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:St,bindFramebuffer:It,drawBuffers:Ct,useProgram:Qt,setBlending:F,setMaterial:Se,setFlipSided:Vt,setCullFace:Gt,setLineWidth:At,setPolygonOffset:ne,setScissorTest:Tt,activeTexture:A,bindTexture:b,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:dt,texImage3D:yt,updateUBOMapping:zt,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:et,texSubImage2D:J,texSubImage3D:it,compressedTexSubImage2D:k,compressedTexSubImage3D:at,scissor:Et,viewport:mt,reset:Xt}}function Fc(s,t,e,n){let i=g0(n);switch(e){case th:return s*t;case nh:return s*t;case ih:return s*t*2;case ml:return s*t/i.components*i.byteLength;case gl:return s*t/i.components*i.byteLength;case sh:return s*t*2/i.components*i.byteLength;case xl:return s*t*2/i.components*i.byteLength;case eh:return s*t*3/i.components*i.byteLength;case nn:return s*t*4/i.components*i.byteLength;case vl:return s*t*4/i.components*i.byteLength;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fr:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case io:case ro:return Math.max(s,16)*Math.max(t,8)/4;case no:case so:return Math.max(s,8)*Math.max(t,8)/2;case ao:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pr:case wo:case Eo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case rh:case To:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ao:case Ro:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(s){switch(s){case Tn:case Kc:return{byteLength:1,components:1};case Ss:case jc:case Cs:return{byteLength:2,components:1};case dl:case pl:return{byteLength:2,components:4};case vi:case fl:case hn:return{byteLength:4,components:1};case Qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function x0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return p?new OffscreenCanvas(A,b):xr("canvas")}function x(A,b,V){let K=1,Q=Tt(A);if((Q.width>V||Q.height>V)&&(K=V/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(K*Q.width),it=Math.floor(K*Q.height);u===void 0&&(u=m(J,it));let k=b?m(J,it):u;return k.width=J,k.height=it,k.getContext("2d").drawImage(A,0,0,J,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+it+")."),k}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,b,V,K,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=b;if(b===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),b===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),b===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),b===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),b===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),b===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),b===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),b===s.RGBA){let it=Q?Hr:Zt.getTransfer(K);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=it===ie?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,b){let V;return A?b===null||b===vi||b===Ki?V=s.DEPTH24_STENCIL8:b===hn?V=s.DEPTH32F_STENCIL8:b===Ss&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vi||b===Ki?V=s.DEPTH_COMPONENT24:b===hn?V=s.DEPTH_COMPONENT32F:b===Ss&&(V=s.DEPTH_COMPONENT16),V}function C(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){let b=A.target;b.removeEventListener("dispose",T),I(b),b.isVideoTexture&&h.delete(b)}function E(A){let b=A.target;b.removeEventListener("dispose",E),y(b)}function I(A){let b=n.get(A);if(b.__webglInit===void 0)return;let V=A.source,K=f.get(V);if(K){let Q=K[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(A),Object.keys(K).length===0&&f.delete(V)}n.remove(A)}function M(A){let b=n.get(A);s.deleteTexture(b.__webglTexture);let V=A.source,K=f.get(V);delete K[b.__cacheKey],a.memory.textures--}function y(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Q=0;Q<b.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)s.deleteFramebuffer(b.__webglFramebuffer[K]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let V=A.textures;for(let K=0,Q=V.length;K<Q;K++){let J=n.get(V[K]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(A)}let R=0;function L(){R=0}function P(){let A=R;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function z(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Y(A,b){let V=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,A,b);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+b)}function B(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+b)}function Z(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,b);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+b)}function H(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){rt(V,A,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+b)}let tt={[to]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[eo]:s.MIRRORED_REPEAT},nt={[He]:s.NEAREST,[pu]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[fa]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},st={[_u]:s.NEVER,[Eu]:s.ALWAYS,[yu]:s.LESS,[ah]:s.LEQUAL,[Mu]:s.EQUAL,[wu]:s.GEQUAL,[bu]:s.GREATER,[Su]:s.NOTEQUAL};function gt(A,b){if(b.type===hn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===fa||b.magFilter===Ns||b.magFilter===gi||b.minFilter===cn||b.minFilter===fa||b.minFilter===Ns||b.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,tt[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,tt[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,tt[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,nt[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===He||b.minFilter!==Ns&&b.minFilter!==gi||b.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));let K=b.source,Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));let J=z(b);if(J!==A.__cacheKey){Q[J]===void 0&&(Q[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[J].usedTimes++;let it=Q[A.__cacheKey];it!==void 0&&(Q[A.__cacheKey].usedTimes--,it.usedTimes===0&&M(b)),A.__cacheKey=J,A.__webglTexture=Q[J].texture}return V}function q(A,b,V){let K=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=s.TEXTURE_3D);let Q=Rt(A,b),J=b.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+V);let it=n.get(J);if(J.version!==it.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);let k=Zt.getPrimaries(Zt.workingColorSpace),at=b.colorSpace===Xn?null:Zt.getPrimaries(b.colorSpace),wt=b.colorSpace===Xn||k===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let et=x(b.image,!1,i.maxTextureSize);et=ne(b,et);let dt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),Et=_(b.internalFormat,dt,yt,b.colorSpace,b.isVideoTexture);gt(K,b);let mt,zt=b.mipmaps,Pt=b.isVideoTexture!==!0,Xt=it.__version===void 0||Q===!0,D=J.dataReady,ct=C(b,et);if(b.isDepthTexture)Et=v(b.format===ji,b.type),Xt&&(Pt?e.texStorage2D(s.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,dt,yt,null));else if(b.isDataTexture)if(zt.length>0){Pt&&Xt&&e.texStorage2D(s.TEXTURE_2D,ct,Et,zt[0].width,zt[0].height);for(let $=0,j=zt.length;$<j;$++)mt=zt[$],Pt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,mt.width,mt.height,dt,yt,mt.data):e.texImage2D(s.TEXTURE_2D,$,Et,mt.width,mt.height,0,dt,yt,mt.data);b.generateMipmaps=!1}else Pt?(Xt&&e.texStorage2D(s.TEXTURE_2D,ct,Et,et.width,et.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,dt,yt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,dt,yt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pt&&Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Et,zt[0].width,zt[0].height,et.depth);for(let $=0,j=zt.length;$<j;$++)if(mt=zt[$],b.format!==nn)if(dt!==null)if(Pt){if(D)if(b.layerUpdates.size>0){let pt=Fc(mt.width,mt.height,b.format,b.type);for(let ft of b.layerUpdates){let Ut=mt.data.subarray(ft*pt/mt.data.BYTES_PER_ELEMENT,(ft+1)*pt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,ft,mt.width,mt.height,1,dt,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,et.depth,dt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Et,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,et.depth,dt,yt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,Et,mt.width,mt.height,et.depth,0,dt,yt,mt.data)}else{Pt&&Xt&&e.texStorage2D(s.TEXTURE_2D,ct,Et,zt[0].width,zt[0].height);for(let $=0,j=zt.length;$<j;$++)mt=zt[$],b.format!==nn?dt!==null?Pt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,$,Et,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,mt.width,mt.height,dt,yt,mt.data):e.texImage2D(s.TEXTURE_2D,$,Et,mt.width,mt.height,0,dt,yt,mt.data)}else if(b.isDataArrayTexture)if(Pt){if(Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Et,et.width,et.height,et.depth),D)if(b.layerUpdates.size>0){let $=Fc(et.width,et.height,b.format,b.type);for(let j of b.layerUpdates){let pt=et.data.subarray(j*$/et.data.BYTES_PER_ELEMENT,(j+1)*$/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,dt,yt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,yt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,dt,yt,et.data);else if(b.isData3DTexture)Pt?(Xt&&e.texStorage3D(s.TEXTURE_3D,ct,Et,et.width,et.height,et.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,yt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,dt,yt,et.data);else if(b.isFramebufferTexture){if(Xt)if(Pt)e.texStorage2D(s.TEXTURE_2D,ct,Et,et.width,et.height);else{let $=et.width,j=et.height;for(let pt=0;pt<ct;pt++)e.texImage2D(s.TEXTURE_2D,pt,Et,$,j,0,dt,yt,null),$>>=1,j>>=1}}else if(zt.length>0){if(Pt&&Xt){let $=Tt(zt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Et,$.width,$.height)}for(let $=0,j=zt.length;$<j;$++)mt=zt[$],Pt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,dt,yt,mt):e.texImage2D(s.TEXTURE_2D,$,Et,dt,yt,mt);b.generateMipmaps=!1}else if(Pt){if(Xt){let $=Tt(et);e.texStorage2D(s.TEXTURE_2D,ct,Et,$.width,$.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,yt,et)}else e.texImage2D(s.TEXTURE_2D,0,Et,dt,yt,et);g(b)&&d(K),it.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function rt(A,b,V){if(b.image.length!==6)return;let K=Rt(A,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);let J=n.get(Q);if(Q.version!==J.__version||K===!0){e.activeTexture(s.TEXTURE0+V);let it=Zt.getPrimaries(Zt.workingColorSpace),k=b.colorSpace===Xn?null:Zt.getPrimaries(b.colorSpace),at=b.colorSpace===Xn||it===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let wt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!wt&&!et?dt[j]=x(b.image[j],!0,i.maxCubemapSize):dt[j]=et?b.image[j].image:b.image[j],dt[j]=ne(b,dt[j]);let yt=dt[0],Et=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),zt=_(b.internalFormat,Et,mt,b.colorSpace),Pt=b.isVideoTexture!==!0,Xt=J.__version===void 0||K===!0,D=Q.dataReady,ct=C(b,yt);gt(s.TEXTURE_CUBE_MAP,b);let $;if(wt){Pt&&Xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,zt,yt.width,yt.height);for(let j=0;j<6;j++){$=dt[j].mipmaps;for(let pt=0;pt<$.length;pt++){let ft=$[pt];b.format!==nn?Et!==null?Pt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,ft.width,ft.height,Et,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,zt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,ft.width,ft.height,Et,mt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,zt,ft.width,ft.height,0,Et,mt,ft.data)}}}else{if($=b.mipmaps,Pt&&Xt){$.length>0&&ct++;let j=Tt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,zt,j.width,j.height)}for(let j=0;j<6;j++)if(et){Pt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,Et,mt,dt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,dt[j].width,dt[j].height,0,Et,mt,dt[j].data);for(let pt=0;pt<$.length;pt++){let Ut=$[pt].image[j].image;Pt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Ut.width,Ut.height,Et,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,zt,Ut.width,Ut.height,0,Et,mt,Ut.data)}}else{Pt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et,mt,dt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,Et,mt,dt[j]);for(let pt=0;pt<$.length;pt++){let ft=$[pt];Pt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Et,mt,ft.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,zt,Et,mt,ft.image[j])}}}g(b)&&d(s.TEXTURE_CUBE_MAP),J.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xt(A,b,V,K,Q,J){let it=r.convert(V.format,V.colorSpace),k=r.convert(V.type),at=_(V.internalFormat,it,k,V.colorSpace),wt=n.get(b),et=n.get(V);if(et.__renderTarget=b,!wt.__hasExternalTextures){let dt=Math.max(1,b.width>>J),yt=Math.max(1,b.height>>J);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,at,dt,yt,b.depth,0,it,k,null):e.texImage2D(Q,J,at,dt,yt,0,it,k,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Gt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,et.__webglTexture,0,Vt(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,et.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(A,b,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer){let K=b.depthTexture,Q=K&&K.isDepthTexture?K.type:null,J=v(b.stencilBuffer,Q),it=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=Vt(b);Gt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k,J,b.width,b.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,k,J,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,J,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,A)}else{let K=b.textures;for(let Q=0;Q<K.length;Q++){let J=K[Q],it=r.convert(J.format,J.colorSpace),k=r.convert(J.type),at=_(J.internalFormat,it,k,J.colorSpace),wt=Vt(b);V&&Gt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,at,b.width,b.height):Gt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,at,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,at,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let Q=K.__webglTexture,J=Vt(b);if(b.depthTexture.format===Xi)Gt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===ji)Gt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(A){let b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=K}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,A)}else if(V){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=s.createRenderbuffer(),ht(b.__webglDepthbuffer[K],A,!1);else{let Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ht(b.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(A,b,V){let K=n.get(A);b!==void 0&&xt(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&It(A)}function Qt(A){let b=A.texture,V=n.get(A),K=n.get(b);A.addEventListener("dispose",E);let Q=A.textures,J=A.isWebGLCubeRenderTarget===!0,it=Q.length>1;if(it||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=b.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let k=0;k<6;k++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[k]=[];for(let at=0;at<b.mipmaps.length;at++)V.__webglFramebuffer[k][at]=s.createFramebuffer()}else V.__webglFramebuffer[k]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let k=0;k<b.mipmaps.length;k++)V.__webglFramebuffer[k]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(it)for(let k=0,at=Q.length;k<at;k++){let wt=n.get(Q[k]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let k=0;k<Q.length;k++){let at=Q[k];V.__webglColorRenderbuffer[k]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[k]);let wt=r.convert(at.format,at.colorSpace),et=r.convert(at.type),dt=_(at.internalFormat,wt,et,at.colorSpace,A.isXRRenderTarget===!0),yt=Vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,dt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,V.__webglColorRenderbuffer[k])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),gt(s.TEXTURE_CUBE_MAP,b);for(let k=0;k<6;k++)if(b.mipmaps&&b.mipmaps.length>0)for(let at=0;at<b.mipmaps.length;at++)xt(V.__webglFramebuffer[k][at],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,at);else xt(V.__webglFramebuffer[k],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);g(b)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let k=0,at=Q.length;k<at;k++){let wt=Q[k],et=n.get(wt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),gt(s.TEXTURE_2D,wt),xt(V.__webglFramebuffer,A,wt,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D,0),g(wt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let k=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(k=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(k,K.__webglTexture),gt(k,b),b.mipmaps&&b.mipmaps.length>0)for(let at=0;at<b.mipmaps.length;at++)xt(V.__webglFramebuffer[at],A,b,s.COLOR_ATTACHMENT0,k,at);else xt(V.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,k,0);g(b)&&d(k),e.unbindTexture()}A.depthBuffer&&It(A)}function kt(A){let b=A.textures;for(let V=0,K=b.length;V<K;V++){let Q=b[V];if(g(Q)){let J=S(A),it=n.get(Q).__webglTexture;e.bindTexture(J,it),d(J),e.unbindTexture()}}}let re=[],F=[];function Se(A){if(A.samples>0){if(Gt(A)===!1){let b=A.textures,V=A.width,K=A.height,Q=s.COLOR_BUFFER_BIT,J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=n.get(A),k=b.length>1;if(k)for(let at=0;at<b.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,it.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let at=0;at<b.length;at++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),k){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,it.__webglColorRenderbuffer[at]);let wt=n.get(b[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,Q,s.NEAREST),l===!0&&(re.length=0,F.length=0,re.push(s.COLOR_ATTACHMENT0+at),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(J),F.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),k)for(let at=0;at<b.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,it.__webglColorRenderbuffer[at]);let wt=n.get(b[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,it.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function Gt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ne(A,b){let V=A.colorSpace,K=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==jn&&V!==Xn&&(Zt.getTransfer(V)===ie?(K!==nn||Q!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ct,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Gt}function v0(s,t){function e(n,i=Xn){let r,a=Zt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===dl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return s.BYTE;if(n===jc)return s.SHORT;if(n===Ss)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Cs)return s.HALF_FLOAT;if(n===th)return s.ALPHA;if(n===eh)return s.RGB;if(n===nn)return s.RGBA;if(n===nh)return s.LUMINANCE;if(n===ih)return s.LUMINANCE_ALPHA;if(n===Xi)return s.DEPTH_COMPONENT;if(n===ji)return s.DEPTH_STENCIL;if(n===ml)return s.RED;if(n===gl)return s.RED_INTEGER;if(n===sh)return s.RG;if(n===xl)return s.RG_INTEGER;if(n===vl)return s.RGBA_INTEGER;if(n===hr||n===ur||n===fr||n===dr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ao||n===oo)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===vo||n===_o||n===yo||n===Mo||n===bo||n===So)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===wo||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===To||n===Ao||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Xo=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},un=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`,qo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ve,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ue({vertexShader:y0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yo=class extends $n{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null,x=new qo,g=e.getContextAttributes(),d=null,S=null,_=[],v=[],C=new Jt,T=null,E=new De;E.viewport=new de;let I=new De;I.viewport=new de;let M=[E,I],y=new Xo,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=_[q];return rt===void 0&&(rt=new bs,_[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=_[q];return rt===void 0&&(rt=new bs,_[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=_[q];return rt===void 0&&(rt=new bs,_[q]=rt),rt.getHandSpace()};function P(q){let rt=v.indexOf(q.inputSource);if(rt===-1)return;let xt=_[rt];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<_.length;q++){let rt=v[q];rt!==null&&(v[q]=null,_[q].disconnect(rt))}R=null,L=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,S=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new An(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,xt=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?ji:Xi,xt=g.stencil?Ki:vi);let St={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(St),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new An(f.textureWidth,f.textureHeight,{format:nn,type:Tn,depthTexture:new Ar(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let rt=0;rt<q.removed.length;rt++){let xt=q.removed[rt],ht=v.indexOf(xt);ht>=0&&(v[ht]=null,_[ht].disconnect(xt))}for(let rt=0;rt<q.added.length;rt++){let xt=q.added[rt],ht=v.indexOf(xt);if(ht===-1){for(let It=0;It<_.length;It++)if(It>=v.length){v.push(xt),ht=It;break}else if(v[It]===null){v[It]=xt,ht=It;break}if(ht===-1)break}let St=_[ht];St&&St.connect(xt)}}let B=new O,Z=new O;function H(q,rt,xt){B.setFromMatrixPosition(rt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);let ht=B.distanceTo(Z),St=rt.projectionMatrix.elements,It=xt.projectionMatrix.elements,Ct=St[14]/(St[10]-1),Qt=St[14]/(St[10]+1),kt=(St[9]+1)/St[5],re=(St[9]-1)/St[5],F=(St[8]-1)/St[0],Se=(It[8]+1)/It[0],Vt=Ct*F,Gt=Ct*Se,At=ht/(-F+Se),ne=At*-F;if(rt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Tt=Ct+At,A=Qt+At,b=Vt-ne,V=Gt+(ht-ne),K=kt*Qt/A*Tt,Q=re*Qt/A*Tt;q.projectionMatrix.makePerspective(b,V,K,Q,Tt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let rt=q.near,xt=q.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),y.near=I.near=E.near=rt,y.far=I.far=E.far=xt,(R!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,L=y.far),E.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|I.layers.mask;let ht=q.parent,St=y.cameras;tt(y,ht);for(let It=0;It<St.length;It++)tt(St[It],ht);St.length===2?H(y,E,I):y.projectionMatrix.copy(E.projectionMatrix),nt(q,y,ht)};function nt(q,rt,xt){xt===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Io*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let st=null;function gt(q,rt){if(h=rt.getViewerPose(c||a),m=rt,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ht=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let It=0;It<xt.length;It++){let Ct=xt[It],Qt=null;if(p!==null)Qt=p.getViewport(Ct);else{let re=u.getViewSubImage(f,Ct);Qt=re.viewport,It===0&&(t.setRenderTargetTextures(S,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(S))}let kt=M[It];kt===void 0&&(kt=new De,kt.layers.enable(It),kt.viewport=new de,M[It]=kt),kt.matrix.fromArray(Ct.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ct.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),It===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(kt)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){let It=u.getDepthInformation(xt[0]);It&&It.isValid&&It.texture&&x.init(t,It,i.renderState)}}for(let xt=0;xt<_.length;xt++){let ht=v[xt],St=_[xt];ht!==null&&St!==void 0&&St.update(ht,rt,c||a)}st&&st(q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Rt=new hh;Rt.setAnimationLoop(gt),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}},hi=new sn,b0=new se;function S0(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ch(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,S,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,S,_):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ce&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ce&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let S=t.get(d),_=S.envMap,v=S.envMapRotation;_&&(g.envMap.value=_,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),g.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(hi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,S,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=_*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let S=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function w0(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=i[S.id];v===void 0&&(m(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",g));let C=_.program;n.updateUBOMapping(S,C);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let _=u();S.__bindingPointIndex=_;let v=s.createBuffer(),C=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=i[S.id],v=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,E=v.length;T<E;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=I.length;M<y;M++){let R=I[M];if(p(R,T,M,C)===!0){let L=R.__offset,P=Array.isArray(R.value)?R.value:[R.value],z=0;for(let Y=0;Y<P.length;Y++){let B=P[Y],Z=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,L+z,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,_,v,C){let T=S.value,E=_+"_"+v;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{let I=C[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(S){let _=S.uniforms,v=0,C=16;for(let E=0,I=_.length;E<I;E++){let M=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,R=M.length;y<R;y++){let L=M[y],P=Array.isArray(L.value)?L.value:[L.value];for(let z=0,Y=P.length;z<Y;z++){let B=P[z],Z=x(B),H=v%C,tt=H%Z.boundary,nt=H+tt;v+=tt,nt!==0&&C-nt<Z.storage&&(v+=C-nt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}let T=v%C;return T>0&&(v+=C-T),S.__size=v,S.__cache={},this}function x(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function g(S){let _=S.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}var Rr=class{constructor(t={}){let{canvas:e=Au(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=fn,this.toneMappingExposure=1;let v=this,C=!1,T=0,E=0,I=null,M=-1,y=null,R=new de,L=new de,P=null,z=new Nt(0),Y=0,B=e.width,Z=e.height,H=1,tt=null,nt=null,st=new de(0,0,B,Z),gt=new de(0,0,B,Z),Rt=!1,q=new Er,rt=!1,xt=!1,ht=new se,St=new se,It=new O,Ct=new de,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function re(){return I===null?H:1}let F=n;function Se(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let U="webgl2";if(F=Se(U,w),F===null)throw Se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Gt,At,ne,Tt,A,b,V,K,Q,J,it,k,at,wt,et,dt,yt,Et,mt,zt,Pt,Xt,D;function ct(){Vt=new kp(F),Vt.init(),Pt=new v0(F,Vt),Gt=new Up(F,Vt,t,Pt),At=new m0(F,Vt),Gt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ne=new Gp(F),Tt=new n0,A=new x0(F,Vt,At,Tt,Gt,Pt,ne),b=new Fp(v),V=new Bp(v),K=new $u(F),Xt=new Lp(F,K),Q=new Hp(F,K,ne,Xt),J=new Xp(F,Q,K,ne),Et=new Wp(F,Gt,A),et=new Np(Tt),it=new e0(v,b,V,Vt,Gt,Xt,et),k=new S0(v,Tt),at=new s0,wt=new h0(Vt),yt=new Pp(v,b,V,At,J,p,l),dt=new d0(v,J,Gt),D=new w0(F,ne,Gt,At),mt=new Dp(F,Vt,ne),zt=new Vp(F,Vt,ne),ne.programs=it.programs,v.capabilities=Gt,v.extensions=Vt,v.properties=Tt,v.renderLists=at,v.shadowMap=dt,v.state=At,v.info=ne}ct();let $=new Yo(v,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(B,Z,!1))},this.getSize=function(w){return w.set(B,Z)},this.setSize=function(w,U,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Z=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),G===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(B*H,Z*H).floor()},this.setDrawingBufferSize=function(w,U,G){B=w,Z=U,H=G,e.width=Math.floor(w*G),e.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,U,G,W){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,U,G,W),At.viewport(R.copy(st).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,U,G,W){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,U,G,W),At.scissor(L.copy(gt).multiplyScalar(H).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){At.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){tt=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(w=!0,U=!0,G=!0){let W=0;if(w){let N=!1;if(I!==null){let ot=I.texture.format;N=ot===vl||ot===xl||ot===gl}if(N){let ot=I.texture.type,lt=ot===Tn||ot===vi||ot===Ss||ot===Ki||ot===dl||ot===pl,vt=yt.getClearColor(),_t=yt.getClearAlpha(),Lt=vt.r,Ft=vt.g,Mt=vt.b;lt?(m[0]=Lt,m[1]=Ft,m[2]=Mt,m[3]=_t,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Lt,x[1]=Ft,x[2]=Mt,x[3]=_t,F.clearBufferiv(F.COLOR,0,x))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),at.dispose(),wt.dispose(),Tt.dispose(),b.dispose(),V.dispose(),J.dispose(),Xt.dispose(),D.dispose(),it.dispose(),$.dispose(),$.removeEventListener("sessionstart",qe),$.removeEventListener("sessionend",Ye),ze.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ne.autoReset,U=dt.enabled,G=dt.autoUpdate,W=dt.needsUpdate,N=dt.type;ct(),ne.autoReset=w,dt.enabled=U,dt.autoUpdate=G,dt.needsUpdate=W,dt.type=N}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){let U=w.target;U.removeEventListener("dispose",Ut),ae(U)}function ae(w){ge(w),Tt.remove(w)}function ge(w){let U=Tt.get(w).programs;U!==void 0&&(U.forEach(function(G){it.releaseProgram(G)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,W,N,ot){U===null&&(U=Qt);let lt=N.isMesh&&N.matrixWorld.determinant()<0,vt=cs(w,U,G,W,N);At.setMaterial(W,lt);let _t=G.index,Lt=1;if(W.wireframe===!0){if(_t=Q.getWireframeAttribute(G),_t===void 0)return;Lt=2}let Ft=G.drawRange,Mt=G.attributes.position,Wt=Ft.start*Lt,te=(Ft.start+Ft.count)*Lt;ot!==null&&(Wt=Math.max(Wt,ot.start*Lt),te=Math.min(te,(ot.start+ot.count)*Lt)),_t!==null?(Wt=Math.max(Wt,0),te=Math.min(te,_t.count)):Mt!=null&&(Wt=Math.max(Wt,0),te=Math.min(te,Mt.count));let ee=te-Wt;if(ee<0||ee===1/0)return;Xt.setup(N,W,vt,G,_t);let we,qt=mt;if(_t!==null&&(we=K.get(_t),qt=zt,qt.setIndex(we)),N.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*re()),qt.setMode(F.LINES)):qt.setMode(F.TRIANGLES);else if(N.isLine){let bt=W.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*re()),N.isLineSegments?qt.setMode(F.LINES):N.isLineLoop?qt.setMode(F.LINE_LOOP):qt.setMode(F.LINE_STRIP)}else N.isPoints?qt.setMode(F.POINTS):N.isSprite&&qt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let bt=N._multiDrawStarts,Ee=N._multiDrawCounts,Yt=N._multiDrawCount,Ke=_t?K.get(_t).bytesPerElement:1,Ai=Tt.get(W).currentProgram.getUniforms();for(let Oe=0;Oe<Yt;Oe++)Ai.setValue(F,"_gl_DrawID",Oe),qt.render(bt[Oe]/Ke,Ee[Oe])}else if(N.isInstancedMesh)qt.renderInstances(Wt,ee,N.count);else if(G.isInstancedBufferGeometry){let bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,bt);qt.renderInstances(Wt,ee,Ee)}else qt.render(Wt,ee)};function $t(w,U,G){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Ce,w.needsUpdate=!0,si(w,U,G),w.side=Zn,w.needsUpdate=!0,si(w,U,G),w.side=en):si(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),d=wt.get(G),d.init(U),_.push(d),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),w!==G&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let lt=0;lt<ot.length;lt++){let vt=ot[lt];$t(vt,G,N),W.add(vt)}else $t(ot,G,N),W.add(ot)}),_.pop(),d=null,W},this.compileAsync=function(w,U,G=null){let W=this.compile(w,U,G);return new Promise(N=>{function ot(){if(W.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&W.delete(lt)}),W.size===0){N(w);return}setTimeout(ot,10)}Vt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ue=null;function xe(w){Ue&&Ue(w)}function qe(){ze.stop()}function Ye(){ze.start()}let ze=new hh;ze.setAnimationLoop(xe),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(w){Ue=w,$.setAnimationLoop(w),w===null?ze.stop():ze.start()},$.addEventListener("sessionstart",qe),$.addEventListener("sessionend",Ye),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,I),d=wt.get(w,_.length),d.init(U),_.push(d),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(St),xt=this.localClippingEnabled,rt=et.init(this.clippingPlanes,xt),g=at.get(w,S.length),g.init(),S.push(g),$.enabled===!0&&$.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&gn(ot,U,-1/0,v.sortObjects)}gn(w,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,nt),kt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,kt&&yt.addToRenderList(g,w),this.info.render.frame++,rt===!0&&et.beginShadows();let G=d.state.shadowsArray;dt.render(G,w,U),rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,N=g.transmissive;if(d.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let lt=0,vt=ot.length;lt<vt;lt++){let _t=ot[lt];Ti(W,N,w,_t)}kt&&yt.render(w);for(let lt=0,vt=ot.length;lt<vt;lt++){let _t=ot[lt];Nn(g,w,_t,_t.viewport)}}else N.length>0&&Ti(W,N,w,U),kt&&yt.render(w),Nn(g,w,U);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,U),Xt.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(d=_[_.length-1],rt===!0&&et.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function gn(w,U,G,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){W&&Ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);let lt=J.update(w),vt=w.material;vt.visible&&g.push(w,lt,vt,G,Ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let lt=J.update(w),vt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ct.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ct.copy(lt.boundingSphere.center)),Ct.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(vt)){let _t=lt.groups;for(let Lt=0,Ft=_t.length;Lt<Ft;Lt++){let Mt=_t[Lt],Wt=vt[Mt.materialIndex];Wt&&Wt.visible&&g.push(w,lt,Wt,G,Ct.z,Mt)}}else vt.visible&&g.push(w,lt,vt,G,Ct.z,null)}}let ot=w.children;for(let lt=0,vt=ot.length;lt<vt;lt++)gn(ot[lt],U,G,W)}function Nn(w,U,G,W){let N=w.opaque,ot=w.transmissive,lt=w.transparent;d.setupLightsView(G),rt===!0&&et.setGlobalState(v.clippingPlanes,G),W&&At.viewport(R.copy(W)),N.length>0&&Fn(N,U,G),ot.length>0&&Fn(ot,U,G),lt.length>0&&Fn(lt,U,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ti(w,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new An(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Cs:Tn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let ot=d.state.transmissionRenderTarget[W.id],lt=W.viewport||R;ot.setSize(lt.z,lt.w);let vt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(z),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),kt&&yt.render(G);let _t=v.toneMapping;v.toneMapping=fn;let Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),rt===!0&&et.setGlobalState(v.clippingPlanes,W),Fn(w,G,W),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Mt=0,Wt=U.length;Mt<Wt;Mt++){let te=U[Mt],ee=te.object,we=te.geometry,qt=te.material,bt=te.group;if(qt.side===en&&ee.layers.test(W.layers)){let Ee=qt.side;qt.side=Ce,qt.needsUpdate=!0,os(ee,G,W,we,qt,bt),qt.side=Ee,qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}v.setRenderTarget(vt),v.setClearColor(z,Y),Lt!==void 0&&(W.viewport=Lt),v.toneMapping=_t}function Fn(w,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=w.length;N<ot;N++){let lt=w[N],vt=lt.object,_t=lt.geometry,Lt=W===null?lt.material:W,Ft=lt.group;vt.layers.test(G.layers)&&os(vt,U,G,_t,Lt,Ft)}}function os(w,U,G,W,N,ot){w.onBeforeRender(v,U,G,W,N,ot),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,G,W,w,ot),N.transparent===!0&&N.side===en&&N.forceSinglePass===!1?(N.side=Ce,N.needsUpdate=!0,v.renderBufferDirect(G,U,W,N,w,ot),N.side=Zn,N.needsUpdate=!0,v.renderBufferDirect(G,U,W,N,w,ot),N.side=en):v.renderBufferDirect(G,U,W,N,w,ot),w.onAfterRender(v,U,G,W,N,ot)}function si(w,U,G){U.isScene!==!0&&(U=Qt);let W=Tt.get(w),N=d.state.lights,ot=d.state.shadowsArray,lt=N.state.version,vt=it.getParameters(w,N.state,ot,U,G),_t=it.getProgramCacheKey(vt),Lt=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ut),Lt=new Map,W.programs=Lt);let Ft=Lt.get(_t);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===lt)return an(w,vt),Ft}else vt.uniforms=it.getUniforms(w),w.onBeforeCompile(vt,v),Ft=it.acquireProgram(vt,_t),Lt.set(_t,Ft),W.uniforms=vt.uniforms;let Mt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=et.uniform),an(w,vt),W.needsLights=Us(w),W.lightsStateVersion=lt,W.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function ls(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Yi.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function an(w,U){let G=Tt.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function cs(w,U,G,W,N){U.isScene!==!0&&(U=Qt),A.resetTextureUnits();let ot=U.fog,lt=W.isMeshStandardMaterial?U.environment:null,vt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:jn,_t=(W.isMeshStandardMaterial?V:b).get(W.envMap||lt),Lt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Mt=!!G.morphAttributes.position,Wt=!!G.morphAttributes.normal,te=!!G.morphAttributes.color,ee=fn;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ee=v.toneMapping);let we=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=we!==void 0?we.length:0,bt=Tt.get(W),Ee=d.state.lights;if(rt===!0&&(xt===!0||w!==y)){let Ze=w===y&&W.id===M;et.setState(W,w,Ze)}let Yt=!1;W.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==vt||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==_t||W.fog===!0&&bt.fog!==ot||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Ft||bt.morphTargets!==Mt||bt.morphNormals!==Wt||bt.morphColors!==te||bt.toneMapping!==ee||bt.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,bt.__version=W.version);let Ke=bt.currentProgram;Yt===!0&&(Ke=si(W,U,N));let Ai=!1,Oe=!1,hs=!1,oe=Ke.getUniforms(),on=bt.uniforms;if(At.useProgram(Ke.program)&&(Ai=!0,Oe=!0,hs=!0),W.id!==M&&(M=W.id,Oe=!0),Ai||y!==w){At.buffers.depth.getReversed()?(ht.copy(w.projectionMatrix),Cu(ht),Iu(ht),oe.setValue(F,"projectionMatrix",ht)):oe.setValue(F,"projectionMatrix",w.projectionMatrix),oe.setValue(F,"viewMatrix",w.matrixWorldInverse);let zn=oe.map.cameraPosition;zn!==void 0&&zn.setValue(F,It.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&oe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Oe=!0,hs=!0)}if(N.isSkinnedMesh){oe.setOptional(F,N,"bindMatrix"),oe.setOptional(F,N,"bindMatrixInverse");let Ze=N.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),oe.setValue(F,"boneTexture",Ze.boneTexture,A))}N.isBatchedMesh&&(oe.setOptional(F,N,"batchingTexture"),oe.setValue(F,"batchingTexture",N._matricesTexture,A),oe.setOptional(F,N,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",N._indirectTexture,A),oe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",N._colorsTexture,A));let us=G.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&Et.update(N,G,Ke),(Oe||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,oe.setValue(F,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(on.envMap.value=_t,on.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),Oe&&(oe.setValue(F,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&ua(on,hs),ot&&W.fog===!0&&k.refreshFogUniforms(on,ot),k.refreshMaterialUniforms(on,W,H,Z,d.state.transmissionRenderTarget[w.id]),Yi.upload(F,ls(bt),on,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Yi.upload(F,ls(bt),on,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&oe.setValue(F,"center",N.center),oe.setValue(F,"modelViewMatrix",N.modelViewMatrix),oe.setValue(F,"normalMatrix",N.normalMatrix),oe.setValue(F,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ze=W.uniformsGroups;for(let zn=0,On=Ze.length;zn<On;zn++){let zl=Ze[zn];D.update(zl,Ke),D.bind(zl,Ke)}}return Ke}function ua(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Us(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,U,G){Tt.get(w.texture).__webglTexture=U,Tt.get(w.depthTexture).__webglTexture=G;let W=Tt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let G=Tt.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){I=w,T=U,E=G;let W=!0,N=null,ot=!1,lt=!1;if(w){let _t=Tt.get(w);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(_t.__hasExternalTextures)A.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Mt=w.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Tt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(lt=!0);let Ft=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][G]:N=Ft[U],ot=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[G]:N=Ft,R.copy(w.viewport),L.copy(w.scissor),P=w.scissorTest}else R.copy(st).multiplyScalar(H).floor(),L.copy(gt).multiplyScalar(H).floor(),P=Rt;if(At.bindFramebuffer(F.FRAMEBUFFER,N)&&W&&At.drawBuffers(w,N),At.viewport(R),At.scissor(L),At.setScissorTest(P),ot){let _t=Tt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,G)}else if(lt){let _t=Tt.get(w.texture),Lt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Lt)}M=-1},this.readRenderTargetPixels=function(w,U,G,W,N,ot,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){At.bindFramebuffer(F.FRAMEBUFFER,vt);try{let _t=w.texture,Lt=_t.format,Ft=_t.type;if(!Gt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&G>=0&&G<=w.height-N&&F.readPixels(U,G,W,N,Pt.convert(Lt),Pt.convert(Ft),ot)}finally{let _t=I!==null?Tt.get(I).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,W,N,ot,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){let _t=w.texture,Lt=_t.format,Ft=_t.type;if(!Gt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-W&&G>=0&&G<=w.height-N){At.bindFramebuffer(F.FRAMEBUFFER,vt);let Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(U,G,W,N,Pt.convert(Lt),Pt.convert(Ft),0);let Wt=I!==null?Tt.get(I).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,Wt);let te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ru(F,te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Mt),F.deleteSync(te),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),N=Math.floor(w.image.width*W),ot=Math.floor(w.image.height*W),lt=U!==null?U.x:0,vt=U!==null?U.y:0;A.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,lt,vt,N,ot),At.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,W=null,N=0){w.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let ot,lt,vt,_t,Lt,Ft,Mt,Wt,te,ee=w.isCompressedTexture?w.mipmaps[N]:w.image;G!==null?(ot=G.max.x-G.min.x,lt=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Lt=G.min.y,Ft=G.isBox3?G.min.z:0):(ot=ee.width,lt=ee.height,vt=ee.depth||1,_t=0,Lt=0,Ft=0),W!==null?(Mt=W.x,Wt=W.y,te=W.z):(Mt=0,Wt=0,te=0);let we=Pt.convert(U.format),qt=Pt.convert(U.type),bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),Ai=F.getParameter(F.UNPACK_SKIP_ROWS),Oe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);let hs=w.isDataArrayTexture||w.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let on=Tt.get(w),us=Tt.get(U),Ze=Tt.get(on.__renderTarget),zn=Tt.get(us.__renderTarget);At.bindFramebuffer(F.READ_FRAMEBUFFER,Ze.__webglFramebuffer),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let On=0;On<vt;On++)hs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,N,Ft+On),w.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,N,te+On),F.blitFramebuffer(_t,Lt,ot,lt,Mt,Wt,ot,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(bt,N,Mt,Wt,te+On,_t,Lt,ot,lt):F.copyTexSubImage2D(bt,N,Mt,Wt,te+On,_t,Lt,ot,lt);At.bindFramebuffer(F.READ_FRAMEBUFFER,null),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,N,Mt,Wt,te,ot,lt,vt,we,qt,ee.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,Mt,Wt,te,ot,lt,vt,we,ee.data):F.texSubImage3D(bt,N,Mt,Wt,te,ot,lt,vt,we,qt,ee):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,Mt,Wt,ot,lt,we,qt,ee.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,Mt,Wt,ee.width,ee.height,we,ee.data):F.texSubImage2D(F.TEXTURE_2D,N,Mt,Wt,ot,lt,we,qt,ee);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ai),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe),N===0&&U.generateMipmaps&&F.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,W=null,N=0){return w.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,G,W,N)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){T=0,E=0,I=null,At.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Cr=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Zo=class extends Ve{constructor(t=null,e=1,n=1,i,r,a,o,l,c=He,h=He,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=class extends Ot{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new se,zc=new se,nr=[],Oc=new Rn,E0=new se,xs=new Kt,vs=new Cn,Pr=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,E0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Oc.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Oc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),vs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),t.ray.intersectsSphere(vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vi),zc.multiplyMatrices(n,Vi),xs.matrixWorld=zc,xs.raycast(t,nr);for(let a=0,o=nr.length;a<o;a++){let l=nr[a];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(i*this.count),i,this.count,ml,hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var $o=class extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lr=new O,Dr=new O,Bc=new se,_s=new ws,ir=new Cn,Va=new O,kc=new O,Jo=class extends Ge{constructor(t=new pe,e=new $o){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Lr.fromBufferAttribute(e,i-1),Dr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lr.distanceTo(Dr);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;Bc.copy(i).invert(),_s.copy(t.ray).applyMatrix4(Bc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let d=h.getX(x),S=h.getX(x+1),_=sr(this,t,_s,l,d,S);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(p),d=sr(this,t,_s,l,x,g);d&&e.push(d)}}else{let p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let d=sr(this,t,_s,l,x,x+1);d&&e.push(d)}if(this.isLineLoop){let x=sr(this,t,_s,l,m-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sr(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Lr.fromBufferAttribute(a,i),Dr.fromBufferAttribute(a,r),e.distanceSqToSegment(Lr,Dr,Va,kc)>n)return;Va.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Va);if(!(l<t.near||l>t.far))return{distance:l,point:kc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Hc=new O,Vc=new O,Ur=class extends Jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Hc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hc.distanceTo(Vc);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ko=class extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gc=new se,jo=new ws,rr=new Cn,ar=new O,Nr=class extends Ge{constructor(t=new pe,e=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Gc.copy(i).invert(),jo.copy(t.ray).applyMatrix4(Gc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,x=p;m<x;m++){let g=c.getX(m);ar.fromBufferAttribute(u,g),Wc(ar,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,x=p;m<x;m++)ar.fromBufferAttribute(u,m),Wc(ar,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wc(s,t,e,n,i,r,a){let o=jo.distanceSqToPoint(s);if(o<e){let l=new O;jo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Es=class s extends pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,x=[],g=n/2,d=0;S(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(p,2));function S(){let v=new O,C=new O,T=0,E=(e-t)/n;for(let I=0;I<=r;I++){let M=[],y=I/r,R=y*(e-t)+t;for(let L=0;L<=i;L++){let P=L/i,z=P*l+o,Y=Math.sin(z),B=Math.cos(z);C.x=R*Y,C.y=-y*n+g,C.z=R*B,u.push(C.x,C.y,C.z),v.set(Y,E,B).normalize(),f.push(v.x,v.y,v.z),p.push(P,1-y),M.push(m++)}x.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){let y=x[M][I],R=x[M+1][I],L=x[M+1][I+1],P=x[M][I+1];(t>0||M!==0)&&(h.push(y,R,P),T+=3),(e>0||M!==r-1)&&(h.push(R,L,P),T+=3)}c.addGroup(d,T,0),d+=T}function _(v){let C=m,T=new Jt,E=new O,I=0,M=v===!0?t:e,y=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),m++;let R=m;for(let L=0;L<=i;L++){let z=L/i*l+o,Y=Math.cos(z),B=Math.sin(z);E.x=M*B,E.y=g*y,E.z=M*Y,u.push(E.x,E.y,E.z),f.push(0,y,0),T.x=Y*.5+.5,T.y=B*.5*y+.5,p.push(T.x,T.y),m++}for(let L=0;L<i;L++){let P=C+L,z=R+L;v===!0?h.push(z,z+1,P):h.push(z+1,z,P),I+=3}c.addGroup(d,I,v===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class s extends Es{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var T0={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=mh(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=P0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ts(r,a,e,o,l,p,0),a}};function mh(s,t,e,n,i){let r,a;if(i===V0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Xc(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Xc(r,s[r],s[r+1],a);return a&&Gr(a,a.next)&&(Rs(a),a=a.next),a}function Mi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||he(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(s,t,e,n,i,r,a){if(!s)return;!a&&r&&F0(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?R0(s,n,i,r):A0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Rs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=C0(Mi(s),t,e),Ts(s,t,e,n,i,r,2)):a===2&&I0(s,t,e,n,i,r):Ts(Mi(s),t,e,n,i,r,1);break}}}function A0(s){let t=s.prev,e=s,n=s.next;if(he(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=p&&Wi(i,o,r,l,a,c,m.x,m.y)&&he(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function R0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(he(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,d=Qo(p,m,t,e,n),S=Qo(x,g,t,e,n),_=s.prevZ,v=s.nextZ;for(;_&&_.z>=d&&v&&v.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Wi(o,h,l,u,c,f,_.x,_.y)&&he(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Wi(o,h,l,u,c,f,v.x,v.y)&&he(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Wi(o,h,l,u,c,f,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Wi(o,h,l,u,c,f,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function C0(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Gr(i,r)&&gh(i,n,n.next,r)&&As(i,r)&&As(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rs(n),Rs(n.next),n=s=r),n=n.next}while(n!==s);return Mi(n)}function I0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&B0(a,o)){let l=xh(a,o);a=Mi(a,a.next),l=Mi(l,l.next),Ts(a,t,e,n,i,r,0),Ts(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function P0(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=mh(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(O0(c));for(i.sort(L0),r=0;r<i.length;r++)e=D0(i[r],e);return e}function L0(s,t){return s.x-t.x}function D0(s,t){let e=U0(s,t);if(!e)return t;let n=xh(e,s);return Mi(n,n.next),Mi(e,e.next)}function U0(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Wi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),As(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&N0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function N0(s,t){return he(s.prev,s,t.prev)<0&&he(t.next,s,s.next)<0}function F0(s,t,e,n){let i=s;do i.z===0&&(i.z=Qo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,z0(i)}function z0(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Qo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function O0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Wi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function B0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!k0(s,t)&&(As(s,t)&&As(t,s)&&H0(s,t)&&(he(s.prev,s,t.prev)||he(s,t.prev,t))||Gr(s,t)&&he(s.prev,s,s.next)>0&&he(t.prev,t,t.next)>0)}function he(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gr(s,t){return s.x===t.x&&s.y===t.y}function gh(s,t,e,n){let i=lr(he(s,t,e)),r=lr(he(s,t,n)),a=lr(he(e,n,s)),o=lr(he(e,n,t));return!!(i!==r&&a!==o||i===0&&or(s,e,t)||r===0&&or(s,n,t)||a===0&&or(e,s,n)||o===0&&or(e,t,n))}function or(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function lr(s){return s>0?1:s<0?-1:0}function k0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&gh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function As(s,t){return he(s.prev,s,s.next)<0?he(s,t,s.next)>=0&&he(s,s.prev,t)>=0:he(s,t,s.prev)<0||he(s,s.next,t)<0}function H0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xh(s,t){let e=new tl(s.i,s.x,s.y),n=new tl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xc(s,t,e,n){let i=new tl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function tl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var zr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];qc(t),Yc(n,t);let a=t.length;e.forEach(qc);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Yc(n,e[l]);let o=T0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qc(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Or=class s extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,f=new O,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let S=[],_=d/n,v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-_),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){let _=h[d][S+1],v=h[d][S],C=h[d+1][S],T=h[d+1][S+1];(d!==0||a>0)&&p.push(_,v,T),(d!==n-1||l<Math.PI)&&p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function cr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function G0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,o=2*e-n;break;case Gl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:a=t,l=2*n-e;break;case Gl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,d=-f*g+2*f*x-f*m,S=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-p)*g+(1.5+p)*x+.5*m,v=p*g-p*x;for(let C=0;C!==o;++C)r[C]=d*a[h+C]+S*a[c+C]+_*a[l+C]+v*a[u+C];return r}},nl=class extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},il=class extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cr(e,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cr(t.times,Array),values:cr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case Co:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&G0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Co;var bi=class extends rn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=mr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends rn{};sl.prototype.ValueTypeName="color";var rl=class extends rn{};rl.prototype.ValueTypeName="number";var al=class extends ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends rn{InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends rn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=mr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends rn{};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},W0=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yl="\\[\\]\\.:\\/",X0=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",q0="[^"+yl.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",Ml),Z0=/(WCOD+)?/.source.replace("WCOD",q0),$0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),K0=new RegExp("^"+Y0+Z0+$0+J0+"$"),j0=["material","materials","bones","map"],hl=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(t){let e=K0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);j0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=hl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);var In="0.1.0";var ti={index:null,buf:null,geo:{}};async function vh(s){let[t,e]=await Promise.all([fetch("assets/models.json?v="+In).then(n=>n.json()),Q0("assets/models.bin?v="+In,s)]);ti.index=t,ti.buf=e}async function Q0(s,t){let e=await fetch(s);if(!e.ok)throw new Error(s+" "+e.status);if(!t||!e.body||!e.headers.get("content-length"))return e.arrayBuffer();let n=+e.headers.get("content-length"),i=e.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await i.read();if(c)break;r.push(h),a+=h.length,t(Math.min(.99,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return t(1),o.buffer}function bl(s,t){let e=ti.index[s],n=e.parts.find(r=>r.name===t)||e.parts[0],i=ti.buf;return{part:n,pos:new Float32Array(i,n.pos,n.n*3),nrm:new Int8Array(i,n.nrm,n.n*4),col:new Uint8Array(i,n.col,n.n*4),idx:new Uint16Array(i,n.idx,n.i)}}function wi(s,t){let e=s+"/"+t;if(ti.geo[e])return ti.geo[e];let n=bl(s,t),i=new pe;return i.setAttribute("position",new Ot(n.pos,3)),i.setAttribute("normal",new Ot(n.nrm,4,!0)),i.setAttribute("col",new Ot(n.col,4,!0)),i.setIndex(new Ot(n.idx,1)),i.computeBoundingSphere(),ti.geo[e]=i,i}function Sl(s){return ti.index[s]}var tg=["impactMetal_heavy_000","impactMetal_heavy_001","impactMetal_heavy_002","impactMetal_light_000","impactGlass_heavy_000","impactPlate_heavy_000","select_001","confirmation_001","back_001","switch_001","explosionCrunch_000","forceField_000"],Wr=class{constructor(t){this.vol={music:t.music??.7,sfx:t.sfx??.8},this.mix={engine:1,sfx:1,music:1},this.ctx=null,this.buf={},this.engines=[],this.music=null,this.musicName=""}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol.sfx,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.worklet=null,e.audioWorklet&&(this.worklet=e.audioWorklet.addModule("assets/engine-worklet.js?v="+In).then(()=>!0).catch(()=>!1));for(let r of tg)fetch("assets/sfx/"+r+".ogg?v="+In).then(a=>a.arrayBuffer()).then(a=>e.decodeAudioData(a)).then(a=>{this.buf[r]=a}).catch(()=>{});this.playMusic("alpha-dance")}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}playMusic(t){if(this.musicName===t)return;this.musicName=t,this.music||(this.music=new Audio,this.music.loop=!0),this.music.src="assets/music/"+t+".ogg?v="+In,this.music.volume=this.vol.music*.45*this.mix.music;let e=this.music.play();e&&e.catch&&e.catch(()=>{})}volume(t){this.vol={music:t.music??this.vol.music,sfx:t.sfx??this.vol.sfx},this.master&&(this.master.gain.value=this.vol.sfx),this.music&&(this.music.volume=this.vol.music*.45*this.mix.music)}setMix(t){this.mix={engine:t.engine??1,sfx:t.sfx??1,music:t.music??1},this.volume({})}play(t,e,n){let i=this.buf[t];if(!i||!this.ctx)return;let r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=n||1;let a=this.ctx.createGain();a.gain.value=(e===void 0?1:e)*this.mix.sfx,r.connect(a),a.connect(this.master),r.start()}ui(t){this.play(t==="ok"?"confirmation_001":t==="back"?"back_001":t==="switch"?"switch_001":"select_001",.5)}engineNode(t,e){let n=this.ctx;if(this.workletOk){let i=new AudioWorkletNode(n,"engine",{numberOfInputs:0,outputChannelCount:[1],processorOptions:{cyl:t.cyl||4,turbo:!!t.turbo,ev:!!t.ev,diesel:!!t.diesel,rpmMax:t.rpm,seed:e}}),r=i.parameters;return{node:i,rpm:r.get("rpm"),load:r.get("load"),speed:r.get("speed"),gain:r.get("gain"),nodes:[]}}return null}engineVoice(t,e){let n=this.ctx,i=t?this.engineNode(t,e||1):null,r=n.createOscillator();r.type="sawtooth";let a=n.createOscillator();a.type="square";let o=this.noiseSrc(),l=n.createGain();l.gain.value=.12;let c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;let h=n.createGain();h.gain.value=0;let u=n.createGain();u.gain.value=.5,r.connect(c),a.connect(u),u.connect(c),o.connect(l),l.connect(c),c.connect(h);let f=this.noiseSrc(),p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=1700,p.Q.value=4;let m=n.createGain();m.gain.value=0,f.connect(p),p.connect(m);let x=this.noiseSrc(),g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let d=n.createGain();d.gain.value=0,x.connect(g),g.connect(d);let S=this.noiseSrc(),_=n.createBiquadFilter();_.type="bandpass",_.frequency.value=900,_.Q.value=.8;let v=n.createGain();v.gain.value=0,S.connect(_),_.connect(v);let C=n.createStereoPanner?n.createStereoPanner():null,T=C||n.createGain();return i?i.node.connect(T):h.connect(T),m.connect(T),d.connect(T),v.connect(T),T.connect(this.master),i||(r.start(),a.start(),o.start()),f.start(),x.start(),S.start(),{wk:i,spec:t,o1:r,o2:a,f:c,g:h,tg:m,wg:d,ngn:v,nf:_,pan:C,nodes:i?[f,x,S]:[r,a,o,f,x,S],out:T}}async begin(t){if(!this.ctx||(this.end(),this.cur=t,this.worklet&&(this.workletOk=await this.worklet),this.cur!==t||this.engines.length))return;let e=t.race.players.length;for(let n=0;n<e;n++){let i=this.engineVoice(t.race.players[n].spec,n+1);i.pan&&(i.pan.pan.value=e>1?n?.5:-.5:0),this.engines.push(i)}this.rivals=[];for(let n of t.race.racers)n.player>=0||this.rivals.length>=3||this.rivals.some(i=>i.spec===n.spec)||this.rivals.push(this.engineVoice(n.spec,7+this.rivals.length));this.playMusic("time-driving")}update(t,e){if(!this.ctx||!this.engines.length)return;let n=this.ctx.currentTime,i=t.race,r=i.players.length>1?.6:1;for(let o=0;o<this.engines.length;o++){let l=this.engines[o],c=i.players[o],h=c.veh;this.voice(l,h,c,n,r,1)}let a=i.players[0].veh;for(let o=0;o<this.rivals.length;o++){let l=this.rivals[o],c=null,h=1e9;for(let u=0;u<i.racers.length;u++){let f=i.racers[u];if(f.player>=0||f.spec!==l.spec)continue;let p=Math.hypot(f.veh.px-a.px,f.veh.pz-a.pz);p<h&&(h=p,c=f)}c&&this.voice(l,c.veh,c,n,r*Math.max(0,1-h/60)*.6,0)}}voice(t,e,n,i,r,a){let o=e.rpm,l=Math.max(e.input.throttle,e.nitroOn?1:0),c=n.wreck>0;if(t.wk){let f=c?0:e.shiftT>0?.04:l;t.wk.rpm.setValueAtTime(c?800:o,i),t.wk.load.setValueAtTime(f,i),t.wk.speed.setValueAtTime(a?e.speed:0,i),t.wk.gain.setTargetAtTime((c?.15*r:(e.spec.ev?.9:.55+.25*f)*r)*this.mix.engine,i,.05)}let h=28+o/60*1.6;t.o1.frequency.setTargetAtTime(h,i,.03),t.o2.frequency.setTargetAtTime(h*.5,i,.03),t.f.frequency.setTargetAtTime(300+o*.32*(.5+l*.5),i,.05),t.g.gain.setTargetAtTime((c?.02:(.1+l*.14)*r)*this.mix.engine,i,.05);let u=0;for(let f=0;f<4;f++){let p=e.wheels[f];p.contact&&(u=Math.max(u,p.slipLat,p.slipLong))}t.tg.gain.setTargetAtTime(u>.3&&e.speed>5?Math.min(.22,(u-.3)*.4)*r*this.mix.sfx:0,i,.04),t.wg.gain.setTargetAtTime(a?Math.min(.18,e.speed*e.speed*2e-5)*r*this.mix.sfx:0,i,.1),t.ngn.gain.setTargetAtTime(e.nitroOn?.16*r*Math.min(1.6,e.nitroOn)*this.mix.sfx:0,i,.06),t.nf.frequency.setTargetAtTime(e.nitroOn>1.5?600:1100,i,.1)}event(t,e,n,i){if(!this.ctx)return;let a=e.player>=0;if(!a)for(let o of i.race.players)Math.hypot(o.veh.px-e.veh.px,o.veh.pz-e.veh.pz)<50&&(a=!0);if(a)if(t==="hit"){let o=this.ctx.currentTime;if(o-(this.lastHit||0)<.12)return;this.lastHit=o;let l=Math.min(1,n/18);if(l<.1)return;this.play(l>.5?"impactMetal_heavy_00"+(Math.random()*3|0):"impactMetal_light_000",.4+l*.6,.9+Math.random()*.2)}else t==="wreck"&&(this.play("explosionCrunch_000",.9,.8),this.play("impactGlass_heavy_000",.7),this.play("impactPlate_heavy_000",.8,.85))}drop(t){for(let e of t.nodes)try{e.stop()}catch{}t.wk&&t.wk.node.disconnect(),t.out.disconnect()}end(){for(let t of this.engines.concat(this.rivals||[]))this.drop(t);this.engines=[],this.rivals=[],this.cur=null,this.ctx&&this.playMusic("alpha-dance")}pause(){this.ctx&&this.ctx.suspend(),this.music&&this.music.pause()}resume(){if(this.ctx&&this.ctx.resume(),this.music){let t=this.music.play();t&&t.catch&&t.catch(()=>{})}}close(){this.end(),this.music&&(this.music.pause(),this.music.src=""),this.ctx&&this.ctx.close(),this.ctx=null}};var ei=16,We=3.5,eg=3.25,Xr=class s{static async load(t){let e=(l,c)=>fetch("assets/city/"+l+"?v="+In).then(h=>{if(!h.ok)throw new Error(l+" "+h.status);return c?h.arrayBuffer():h.json()}),[n,i,r,a,o]=await Promise.all([e("city.json"),e("net.bin",1),e("ground.bin",1),e("bld.bin",1),e("side.bin",1)]);return t&&t(1),new s(n,i,r,a,o)}constructor(t,e,n,i,r){this.meta=t,this.box=t.box;let a=new Float32Array(e),o=this.n=a.length/3;this.px=new Float32Array(o),this.py=new Float32Array(o),this.pz=new Float32Array(o);for(let m=0;m<o;m++)this.px[m]=a[m*3],this.py[m]=a[m*3+1],this.pz[m]=a[m*3+2];let l=new Uint8Array(r);this.pl=new Float32Array(o),this.pr=new Float32Array(o);for(let m=0;m<o;m++)this.pl[m]=l[m*2]/40,this.pr[m]=l[m*2+1]/40;let c=t.edges,h=this.ne=c.length;this.eOff=new Int32Array(h),this.eN=new Int32Array(h),this.eA=new Int32Array(h),this.eB=new Int32Array(h),this.eHw=new Float32Array(h),this.eCls=new Uint8Array(h),this.eOne=new Uint8Array(h),this.eRa=new Uint8Array(h),this.eLim=new Uint8Array(h),this.eName=new Int32Array(h),this.eLen=new Float32Array(h),this.sE=new Int32Array(o),this.sS=new Float32Array(o),this.tx=new Float32Array(o),this.tz=new Float32Array(o),this.sJ=new Int32Array(o).fill(-1);let u=t.junctions,f=this.nj=u.length;this.jx=new Float32Array(f),this.jz=new Float32Array(f),this.jr=new Float32Array(f),this.jy=new Float32Array(f),this.jEdges=[];for(let m=0;m<f;m++)this.jx[m]=u[m][0],this.jz[m]=u[m][1],this.jr[m]=u[m][2],this.jy[m]=u[m][3],this.jEdges.push([]);for(let m=0;m<h;m++){let x=c[m];this.eOff[m]=x[1],this.eN[m]=x[2],this.eA[m]=x[3],this.eB[m]=x[4],this.eHw[m]=x[5],this.eCls[m]=x[6],this.eOne[m]=x[7],this.eRa[m]=x[8],this.eLim[m]=x[9],this.eName[m]=x[10],this.jEdges[x[3]].push(m),this.jEdges[x[4]].push(m);let g=x[1],d=x[2],S=0;for(let C=0;C<d;C++){let T=g+C;this.sE[T]=m,C>0&&(S+=Math.hypot(this.px[T]-this.px[T-1],this.pz[T]-this.pz[T-1])),this.sS[T]=S;let E=C>0?T-1:T,I=C<d-1?T+1:T,M=this.px[I]-this.px[E],y=this.pz[I]-this.pz[E],R=Math.hypot(M,y)||1;this.tx[T]=M/R,this.tz[T]=y/R}this.eLen[m]=S;let _=this.jr[x[3]],v=this.jr[x[4]];for(let C=0;C<d;C++){let T=g+C,E=this.sS[T];E<_+2?this.sJ[T]=x[3]:S-E<v+2&&(this.sJ[T]=x[4])}}this.lights=t.lights,this.stations=t.stations,this.names=t.names,this.jLight=new Int32Array(f).fill(-1);for(let m=0;m<this.lights.length;m++)this.jLight[this.lights[m].j]=m;this.buildGrid();let p=new Float32Array(n,0,5);this.g={x0:p[0],z0:p[1],c:p[2],nx:p[3]|0,nz:p[4]|0,h:new Int16Array(n,20,(p[3]|0)*(p[4]|0))},this.bld=new Float32Array(i)}buildGrid(){let t=this.box;this.gx0=t.x0-64,this.gz0=t.z0-64;let e=this.gnx=Math.ceil((t.x1-t.x0+128)/ei),n=this.gnz=Math.ceil((t.z1-t.z0+128)/ei),i=new Int32Array(e*n+1),r=l=>{for(let c=0;c<this.n-1;c++){let h=this.sE[c];if(this.sE[c+1]!==h)continue;let u=this.eHw[h]+We+9,f=Math.min(this.px[c],this.px[c+1])-u,p=Math.max(this.px[c],this.px[c+1])+u,m=Math.min(this.pz[c],this.pz[c+1])-u,x=Math.max(this.pz[c],this.pz[c+1])+u,g=Math.max(0,Math.floor((f-this.gx0)/ei)),d=Math.min(e-1,Math.floor((p-this.gx0)/ei)),S=Math.max(0,Math.floor((m-this.gz0)/ei)),_=Math.min(n-1,Math.floor((x-this.gz0)/ei));for(let v=S;v<=_;v++)for(let C=g;C<=d;C++)l(v*e+C,c)}};r(l=>i[l+1]++);for(let l=0;l<e*n;l++)i[l+1]+=i[l];let a=i.slice(0,e*n),o=new Int32Array(i[e*n]);r((l,c)=>{o[a[l]++]=c}),this.cellStart=i,this.cellList=o}groundAt(t,e){let n=this.g,i=(t-n.x0)/n.c,r=(e-n.z0)/n.c,a=Math.max(0,Math.min(n.nx-2,Math.floor(i))),o=Math.max(0,Math.min(n.nz-2,Math.floor(r))),l=Math.max(0,Math.min(1,i-a)),c=Math.max(0,Math.min(1,r-o)),h=n.h,u=n.nx;return((h[o*u+a]*(1-l)+h[o*u+a+1]*l)*(1-c)+(h[(o+1)*u+a]*(1-l)+h[(o+1)*u+a+1]*l)*c)/10}query(t,e,n,i){let r=Math.floor((t-this.gx0)/ei),a=Math.floor((e-this.gz0)/ei),o=-1,l=1e9,c=0,h=n>=0&&n<this.n?this.sE[n]:-1;if(r>=0&&a>=0&&r<this.gnx&&a<this.gnz){let nt=a*this.gnx+r,st=this.cellList;for(let gt=this.cellStart[nt],Rt=this.cellStart[nt+1];gt<Rt;gt++){let q=st[gt],rt=this.px[q],xt=this.pz[q],ht=this.px[q+1]-rt,St=this.pz[q+1]-xt,It=ht*ht+St*St||1,Ct=((t-rt)*ht+(e-xt)*St)/It;Ct<0?Ct=0:Ct>1&&(Ct=1);let Qt=rt+ht*Ct-t,kt=xt+St*Ct-e,F=Math.sqrt(Qt*Qt+kt*kt)-this.eHw[this.sE[q]];this.sE[q]===h&&(F-=.05),F<l&&(l=F,o=q,c=Ct)}}if(o<0)return i.i=0,i.t=0,i.s=0,i.d=1e3,i.y=this.groundAt(t,e),i.nx=0,i.ny=1,i.nz=0,i.hl=i.hr=0,i.wall=1e9,i.off=2,i.lx=1,i.lz=0,i.fx=0,i.fz=1,i.edge=-1,i.junc=-1,i.lim=50,i;let u=o,f=this.sE[u],p=this.px[u],m=this.pz[u],x=this.px[u+1]-p,g=this.pz[u+1]-m,d=Math.hypot(x,g)||1,S=c,_=g/d,v=-x/d,C=(t-(p+x*S))*_+(e-(m+g*S))*v,T=this.eHw[f],E=this.py[u]+(this.py[u+1]-this.py[u])*S,I=(this.py[u+1]-this.py[u])/d,M=0,y=0,R=this.sJ[u];if(R>=0){let nt=t-this.jx[R],st=e-this.jz[R];nt*nt+st*st>(this.jr[R]+3)**2&&(R=-1)}let L=C>=0?C-T:-C-T,P=C>=0?this.pl[u]+(this.pl[u+1]-this.pl[u])*S:this.pr[u]+(this.pr[u+1]-this.pr[u])*S;if(L>0&&R<0){if(y=1,P>.6){let nt=L<.4?L/.4:1;E+=.15*nt,L<.4&&(M=(C>=0?1:-1)*.15/.4)}L>P&&(y=2)}i.wall=P>=We-.05?T+eg:1e9;let z=x/d,Y=g/d,B=M*Y-v*I,Z=v*z-_*Y,H=_*I-M*z;Z<0&&(B=-B,Z=-Z,H=-H);let tt=Math.hypot(B,Z,H)||1;return i.i=u,i.t=S,i.s=this.sS[u]+S*d,i.d=C,i.y=E,i.nx=B/tt,i.ny=Z/tt,i.nz=H/tt,i.hl=T,i.hr=T,i.off=y,i.lx=_,i.lz=v,i.fx=z,i.fz=Y,i.edge=f,i.junc=R,i.lim=this.eLim[f],i}at(t,e,n,i){let r=this.eOff[t],a=this.eN[t];e<0&&(e=0),e>this.eLen[t]&&(e=this.eLen[t]);let o=0,l=a-1;for(;l-o>1;){let g=o+l>>1;this.sS[r+g]<=e?o=g:l=g}let c=r+o,h=Math.min(r+a-1,c+1),u=this.sS[h]-this.sS[c]||1,f=Math.max(0,Math.min(1,(e-this.sS[c])/u)),p=this.tx[c]+(this.tx[h]-this.tx[c])*f,m=this.tz[c]+(this.tz[h]-this.tz[c])*f,x=Math.hypot(p,m)||1;return i.fx=p/x,i.fz=m/x,i.lx=i.fz,i.lz=-i.fx,i.x=this.px[c]+(this.px[h]-this.px[c])*f+i.lx*n,i.z=this.pz[c]+(this.pz[h]-this.pz[c])*f+i.lz*n,i.y=this.py[c]+(this.py[h]-this.py[c])*f,i.i=c,i.hw=this.eHw[t],i}canLeave(t,e){return!this.eOne[t]||this.eA[t]===e}other(t,e){return this.eA[t]===e?this.eB[t]:this.eA[t]}route(t,e,n,i,r){let a=this.nj;this._dist||(this._dist=new Float64Array(a),this._prev=new Int32Array(a),this._pe=new Int32Array(a));let o=this._dist,l=this._prev,c=this._pe;o.fill(1/0),l.fill(-1),c.fill(-1);let h=[],u=(I,M)=>{h.push(I,M);let y=h.length/2-1;for(;y>0;){let R=y-1>>1;if(h[R*2]<=h[y*2])break;let L=h[R*2],P=h[R*2+1];h[R*2]=h[y*2],h[R*2+1]=h[y*2+1],h[y*2]=L,h[y*2+1]=P,y=R}},f=()=>{let I=h[0],M=h[1],y=h[h.length-2],R=h[h.length-1];if(h.length-=2,h.length){h[0]=y,h[1]=R;let L=0,P=h.length/2;for(;;){let z=2*L+1,Y=z+1,B=L;if(z<P&&h[z*2]<h[B*2]&&(B=z),Y<P&&h[Y*2]<h[B*2]&&(B=Y),B===L)break;let Z=h[B*2],H=h[B*2+1];h[B*2]=h[L*2],h[B*2+1]=h[L*2+1],h[L*2]=Z,h[L*2+1]=H,L=B}}return[I,M]},p=this.eLen[t],m=n>0?this.eB[t]:this.eA[t],x=n>0?this.eA[t]:this.eB[t],g=n>0?p-e:e;o[m]=g,u(g,m),c[m]=t,!this.eOne[t]&&o[x]>p-g+60&&(o[x]=p-g+60,u(o[x],x),c[x]=t);let d=1/0;if(i===t){let I=(r-e)*n;I>=0&&(d=I)}let S=this.eA[i],_=this.eB[i],v=this.eLen[i];for(;h.length;){let[I,M]=f();if(!(I>o[M])){if(I>d)break;for(let y of this.jEdges[M]){if(!this.canLeave(y,M))continue;let R=this.other(y,M),L=I+this.eLen[y]*(this.eCls[y]>=5?1.15:1);L<o[R]&&(o[R]=L,l[R]=M,c[R]=y,u(L,R))}}}let C=-1,T=d;if(o[S]+r<T&&this.canLeave(i,S)&&(T=o[S]+r,C=S),o[_]+(v-r)<T&&(!this.eOne[i]||this.eA[i]===_)&&(T=o[_]+(v-r),C=_),T===1/0)return null;let E=[];if(C>=0){E.push([i,C===S?1:-1]);let I=C;for(let M=0;M<5e3&&l[I]>=0;M++){let y=c[I],R=l[I];E.push([y,this.eA[y]===R&&this.eB[y]===I?1:-1]),I=R}E.push([t,I===this.eB[t]?1:-1]),E.reverse()}else E.push([t,n]);return{len:T,edges:E}}project(t,e,n,i){let r=this.eOff[t],a=this.eN[t],o=Math.max(0,Math.min(a-2,Math.round(e/4)));for(;o>0&&this.sS[r+o]>e;)o--;let l=e,c=1e18;for(let h=Math.max(0,o-3);h<=Math.min(a-2,o+3);h++){let u=r+h,f=this.px[u],p=this.pz[u],m=this.px[u+1]-f,x=this.pz[u+1]-p,g=m*m+x*x||1,d=((n-f)*m+(i-p)*x)/g;d=d<0?0:d>1?1:d;let S=f+m*d-n,_=p+x*d-i,v=S*S+_*_;v<c&&(c=v,l=this.sS[u]+d*Math.sqrt(g))}return l}slot(t,e){return this.jEdges[e].indexOf(t)}edgeName(t,e){let n=this.names[this.eName[t]];return n?e==="ar"?n[1]||n[0]:n[0].replace(/[\u0600-\u06FF\u0750-\u077F\u2D30-\u2D7F]+/g,"").replace(/\s+/g," ").trim()||n[0]:""}};var is={city:{model:"car_city",cls:"D",mass:1090,power:110,torque:250,rpm:6300,gears:[3.42,2,1.42,1.1,.9,.76],final:4.05,cda:.66,cl:.04,mu:1.06,steer:.64,nitro:4.2,drive:"f",turbo:1,cyl:3,shift:.28},hatch:{model:"car_hatch",cls:"D",mass:1235,power:96,torque:230,rpm:6200,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.64,cl:.03,mu:1,steer:.62,nitro:3.6,drive:"f",turbo:1,cyl:3,shift:.45},volt:{model:"car_volt",cls:"C",mass:1920,power:366,torque:510,rpm:16500,gears:[1],final:9,cda:.5,cl:.04,mu:1.04,steer:.58,nitro:7,drive:"a",ev:1},suvlux:{model:"car_suvlux",cls:"C",mass:2250,power:300,torque:620,rpm:6500,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.3,cda:1.05,cl:.03,mu:1,steer:.56,nitro:8,drive:"a",turbo:1,cyl:8},wedge:{model:"car_wedge",cls:"B",mass:3150,power:447,torque:960,rpm:12800,gears:[1],final:9,cda:1,cl:.02,mu:1,steer:.52,nitro:11,drive:"a",ev:1},police:{model:"car_police",cls:"A",mass:1900,power:330,torque:570,rpm:6600,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.2,cda:.74,cl:.06,mu:1.08,steer:.56,nitro:8.5,drive:"a",turbo:1,cyl:6},gt:{model:"car_gt",cls:"S",mass:1150,power:620,torque:760,rpm:9200,gears:[3,2.1,1.62,1.31,1.1,.94,.82],final:3.3,cda:.7,cl:.7,mu:1.32,steer:.52,nitro:11,drive:"r",cyl:10},t_small:{model:"tr_sedan",cls:"T",mass:1250,power:85,torque:170,rpm:6e3,gears:[3.5,2,1.3,1,.8],final:4,cda:.7,cl:0,mu:.95,steer:.6,nitro:0,drive:"f",cyl:4},t_heavy:{model:"tr_truck",cls:"T",mass:3500,power:120,torque:450,rpm:4e3,gears:[5,3,1.9,1.3,1,.8],final:4.1,cda:1.6,cl:0,mu:.9,steer:.55,nitro:0,drive:"r",cyl:6,diesel:1}};function ng(s){return Math.sin(1.45*Math.atan(14*s))}var ns=class{constructor(t,e,n){this.spec=t;let i=Object.assign({engine:0,nitro:0,grip:0,gearbox:0,brakes:0},n);this.up=i,this.power=t.power*(1+.06*i.engine),this.torqueMax=t.torque*(1+.06*i.engine),this.nitroForce=t.nitro*1e3*(1+.08*i.nitro),this.mu=t.mu*(1+.025*i.grip),this.shiftTime=(t.shift||.15)*(1-.13*i.gearbox),this.gearPull=1+.025*i.gearbox,this.brakeGrip=1+.035*i.brakes,this.spinT=0,this.spinDur=.9,this.spinDir=1,this.spinA=0,this.spinDone=!1,this.mass=t.mass,this.invMass=1/t.mass;let r=e.w,a=e.h*.8,o=e.l,l=t.mass;this.Ix=l*(a*a+o*o)/12,this.Iy=l*(r*r+o*o)/12,this.Iz=l*(r*r+a*a)/12,this.half={x:r/2,y:e.h/2,z:o/2},this.cgY=e.cg,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.wx=0,this.wy=0,this.wz=0,this.R=new Float32Array(9),this.wheels=[];let c=(e.wheels[0].z+e.wheels[1].z)/2,h=(e.wheels[2].z+e.wheels[3].z)/2,u=t.drive==="r"?.45:t.drive==="f"?.6:.5;this.cgZ=h+u*(c-h);for(let p=0;p<4;p++){let m=e.wheels[p];this.wheels.push({mx:m.x,my:m.y-this.cgY+.18,mz:m.z-this.cgZ,r:m.r,front:p<2,rest:.36,comp:0,prevComp:0,contact:!1,load:0,spin:0,spinAngle:0,steer:0,slipLat:0,slipLong:0,cx:0,cy:0,cz:0,surf:0,hint:0,travel:0})}let f=.11;this.k=t.mass*9.81/4/f,this.c=2*.32*Math.sqrt(this.k*t.mass/4),this.input={throttle:0,brake:0,steer:0,handbrake:0,nitro:0},this.steerNow=0,this.gear=1,this.rpm=t.ev?0:900,this.shiftT=0,this.nitroOn=0,this.grounded=0,this.airTime=0,this.speed=0,this.fwdSpeed=0,this.latSpeed=0,this.hint=0,this.assist={esc:1,tc:1,air:1},this.reverse=!1,this.stopT=0,this.hold=!1,this.wrecked=0,this.topSpeedCap=1e9,this.gearbox=null,this.mgear=1,this.stalled=!1,this.fuelCut=!1,this.clutchE=1,this.input.clutch=0,this.updateR()}manualDrive(t,e,n){let i=this.spec,r=this.input,a=this.mgear;this.shiftT>0&&(this.shiftT-=t),this.reverse=a<0,this.gear=a>0?a:1;let o=a===0?0:(a<0?i.gears[0]*1.08:i.gears[a-1])*i.final,l=Math.max(Math.abs(e)/.34,n)*o*30/Math.PI,c=i.ev?0:850,h=this.stalled||this.fuelCut,u=h?0:r.throttle,f;if(a===0||this.shiftT>0?f=0:this.gearbox==="clutch"?f=1-Math.max(0,Math.min(1,r.clutch)):f=u<.05&&l<c*1.15?0:Math.max(.12,Math.min(1,(l-250)/1150)),this.clutchE=f,h)this.rpm+=(0-this.rpm)*Math.min(1,t*3);else{let x=c+u*(i.rpm*1.02-c),g=f*f,d=Math.max(g>.9?300:c,x*(1-g)+l*g);this.rpm+=(d-this.rpm)*Math.min(1,t*(f>.9?25:7)),this.rpm>i.rpm*1.05&&(this.rpm=i.rpm*1.05)}this.gearbox==="clutch"&&!h&&f>.6&&this.rpm<460&&!i.ev&&(this.stalled=!0),this.stalled&&r.clutch>.9&&!this.fuelCut&&(this.stalled=!1,this.rpm=c);let p=0;!h&&f>0&&(p=this.engineTorque(Math.max(this.rpm,c))*u,u<.05&&l>c*1.1&&(p-=this.torqueMax*.12*(.3+l/i.rpm)),this.rpm>=i.rpm&&p>0&&(p*=.15),p*=f);let m=p*o*.88/.34*this.gearPull;return a<0?-m:m}shift(t){let e=this.spec.gears.length,n=this.mgear+t;return n<-1||n>e?"end":this.gearbox==="clutch"&&this.input.clutch<.6?"clutch":n<0&&this.fwdSpeed>1.5?"moving":n>0&&this.gearbox==="manual"&&Math.abs(this.fwdSpeed)/.34*this.spec.gears[n-1]*this.spec.final*30/Math.PI>this.spec.rpm*1.02?"revs":(this.mgear=n,this.shiftT=this.gearbox==="clutch"?0:this.shiftTime||.2,"")}updateR(){let t=this.qx,e=this.qy,n=this.qz,i=this.qw,r=this.R;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}setPose(t,e,n,i){this.px=t,this.py=e,this.pz=n;let r=i/2;this.qx=0,this.qy=Math.sin(r),this.qz=0,this.qw=Math.cos(r),this.vx=this.vy=this.vz=0,this.wx=this.wy=this.wz=0;for(let a of this.wheels)a.comp=a.prevComp=.1,a.spin=0;this.updateR()}yaw(){return Math.atan2(this.R[6],this.R[8])}applyAngular(t,e,n,i){let r=this.R,a=r[0]*t+r[1]*e+r[2]*n,o=r[3]*t+r[4]*e+r[5]*n,l=r[6]*t+r[7]*e+r[8]*n,c=a/this.Ix,h=o/this.Iy,u=l/this.Iz;this.wx+=(r[0]*c+r[3]*h+r[6]*u)*i,this.wy+=(r[1]*c+r[4]*h+r[7]*u)*i,this.wz+=(r[2]*c+r[5]*h+r[8]*u)*i}impulse(t,e,n,i,r,a){this.vx+=t*this.invMass,this.vy+=e*this.invMass,this.vz+=n*this.invMass,this.applyAngular(r*n-a*e,a*t-i*n,i*e-r*t,1)}invMassAt(t,e,n,i,r,a){let o=e*a-n*r,l=n*i-t*a,c=t*r-e*i,h=this.R,u=h[0]*o+h[1]*l+h[2]*c,f=h[3]*o+h[4]*l+h[5]*c,p=h[6]*o+h[7]*l+h[8]*c;return this.invMass+u*u/this.Ix+f*f/this.Iy+p*p/this.Iz}engineTorque(t){let e=t/this.spec.rpm,n=this.spec,i=n.ev?0:n.turbo?.33:.55,r=e<i?.55+.45*(e/i):e<.9?1:1-(e-.9)*(n.ev?1.5:2.5);r<0&&(r=0);let a=this.torqueMax*r,o=this.power*1e3/Math.max(100,t*Math.PI/30);return Math.min(a,o)}startSpin(t){this.spinT=this.spinDur,this.spinDir=t,this.spinA=0,this.spinDone=!1}stopSpin(){this.spinT=0,this.spinA=0}lockAt(t,e=0,n=!1){let i=this.spec,r=Math.max(0,t),a=i.steer/(1+r*.035);if(n)return a;let o=Math.max(1.5,this.wheels[0].mz-this.wheels[2].mz);return Math.min(a,Math.atan(o*i.mu*9.81/Math.max(1,r*r))+.13+e)}step(t,e,n){let i=this.spec,r=this.R,a=this.input,o=r[0],l=r[1],c=r[2],h=r[3],u=r[4],f=r[5],p=r[6],m=r[7],x=r[8],g=Math.hypot(this.vx,this.vy,this.vz),d=this.vx*p+this.vy*m+this.vz*x;this.speed=g,this.fwdSpeed=d,this.latSpeed=this.vx*o+this.vy*l+this.vz*c;let S=this.lockAt(d,Math.abs(Math.atan2(this.latSpeed,Math.max(1,Math.abs(d)))),a.handbrake>0),_=a.steer*S,v=2.6*t;this.steerNow+=Math.max(-v,Math.min(v,_-this.steerNow));let C=this.wheels[2].r,T=0,E=0;for(let it=0;it<4;it++){let k=this.wheels[it];(i.drive==="a"||i.drive==="f"===k.front)&&(T+=Math.abs(k.spin),E++)}let I=T/Math.max(1,E)*C/.34,M=0;if(this.gearbox)M=this.manualDrive(t,d,I);else{let it=i.gears[this.gear-1]*i.final,k=Math.abs(d)/.34,at=Math.max(i.ev?0:900,Math.min(i.rpm*1.02,Math.max(k,I)*it*30/Math.PI));this.rpm+=(at-this.rpm)*Math.min(1,t*25),this.shiftT>0?this.shiftT-=t:!this.reverse&&this.grounded&&(k*it*30/Math.PI>i.rpm*.95&&this.gear<i.gears.length?(this.gear++,this.shiftT=this.shiftTime):this.gear>1&&k*i.gears[this.gear-2]*i.final*30/Math.PI<i.rpm*(a.throttle>.5?.72:.6)&&(this.gear--,this.shiftT=.1)),a.brake>.5&&d<.8&&a.throttle<.1&&!this.hold?this.stopT+=t:this.stopT=0,this.stopT>.35&&(this.reverse=!0),a.throttle>.1&&this.reverse&&(this.reverse=!1),this.reverse&&(this.gear=1);let wt=this.reverse?a.brake:a.throttle;this.shiftT<=0&&wt>0&&(M=this.engineTorque(this.rpm)*wt*i.gears[this.gear-1]*i.final*.88/.34*this.gearPull,this.reverse&&(M=-Math.min(M,4e3)),this.rpm>=i.rpm*1&&!this.reverse&&(M*=.2))}this.fuelCut&&!this.gearbox&&(M=0,this.rpm=0,this.reverse=!1),d>this.topSpeedCap&&(M=Math.min(M,0));let y=this.nitroOn>0?this.nitroForce*this.nitroOn:0,R=this.reverse&&!this.gearbox?0:a.brake;!this.reverse&&a.throttle<.05&&a.brake<.05&&Math.abs(d)<.8&&(R=.5),this.hold&&(R=1);let L=R*this.mass*9.81*1.15*this.brakeGrip,P=this.spinT>0;P&&(M=0);let z=0,Y=-this.mass*9.81,B=0,Z=0,H=0,tt=0,nt=0,st=this.steerNow,gt=Math.cos(st),Rt=Math.sin(st),q=P?0:a.handbrake,rt=this.mass/4;for(let it=0;it<4;it++){let k=this.wheels[it],at=o*k.mx+h*k.my+p*k.mz,wt=l*k.mx+u*k.my+m*k.mz,et=c*k.mx+f*k.my+x*k.mz,dt=this.px+at,yt=this.py+wt,Et=this.pz+et;e.query(dt,Et,k.hint,n),k.hint=n.i,k.surf=n.off;let mt=u>.25?u:.25,zt=(yt-n.y)/mt,Pt=k.rest+k.r-zt;if(k.prevComp=k.comp,Pt<=0||u<.2){k.contact=!1,k.comp=0,k.load=0,k.slipLat=0,k.slipLong=0,k.travel=k.rest,k.spin*=.995;continue}let Xt=Math.min(Pt,k.rest+.12);k.comp=Xt,k.travel=k.rest-Xt,k.contact=!0,nt++;let D=(Xt-k.prevComp)/t,ct=this.k*Xt+this.c*D*(D<0?1.7:1);Pt>k.rest+.12&&(ct+=(Pt-k.rest-.12)*this.k*6+Math.max(0,D)*this.c*2),ct<0&&(ct=0),k.load=ct;let $=dt-h*zt,j=yt-u*zt,pt=Et-f*zt;k.cx=$,k.cy=j,k.cz=pt;let ft=$-this.px,Ut=j-this.py,ae=pt-this.pz,ge=this.vx+(this.wy*ae-this.wz*Ut),$t=this.vy+(this.wz*ft-this.wx*ae),Ue=this.vz+(this.wx*Ut-this.wy*ft),xe=p,qe=m,Ye=x;k.front&&(xe=p*gt+o*Rt,qe=m*gt+l*Rt,Ye=x*gt+c*Rt);let ze=n.nx,gn=n.ny,Nn=n.nz,Ti=xe*ze+qe*gn+Ye*Nn;xe-=ze*Ti,qe-=gn*Ti,Ye-=Nn*Ti;let Fn=Math.hypot(xe,qe,Ye)||1;xe/=Fn,qe/=Fn,Ye/=Fn;let os=gn*Ye-Nn*qe,si=Nn*xe-ze*Ye,ls=ze*qe-gn*xe,an=ge*xe+$t*qe+Ue*Ye,cs=ge*os+$t*si+Ue*ls,ua=this.mu*(n.off===0?1:.85),Us=ct,U=ua*(1.08-.08*Math.min(2,Us/(this.mass*9.81/4)))*Us,G=Math.atan2(cs,Math.abs(an)+1.5),W=1;!k.front&&q>0&&(W=.42),P&&(W=.06);let N=-ng(G)*U*W,ot=Math.abs(cs)*rt/t;Math.abs(N)>ot&&(N=N>0?ot:-ot);let lt=0,vt=i.drive==="a"||i.drive==="f"===k.front;vt&&(lt+=M/E),y&&!k.front&&(lt+=y/2);let _t=L*(k.front?.32:.18);if(!k.front&&q>0&&(_t+=q*this.mass*9.81*.35),_t>0){let Ee=Math.abs(an)*rt/t,Yt=Math.min(_t,Ee);lt-=an>0?Yt:-Yt}if(lt-=.013*ct*Math.max(-1,Math.min(1,an)),k.slipLong=0,Math.abs(lt)>U&&(k.slipLong=Math.min(1,(Math.abs(lt)-U)/U),this.assist.tc&&vt&&M>0&&(lt=Math.sign(lt)*U*.98)),this.assist.tc&&vt&&M>0&&q===0&&lt>0){let Ee=Math.sqrt(Math.max(0,U*U-N*N))*.98;lt>Ee&&(lt=Ee)}let Lt=_t>0&&M<=0?U*this.brakeGrip:U,Ft=Math.hypot(lt,N);if(Ft>Lt){let Ee=Lt/Ft;lt*=Ee,N*=Ee}k.slipLat=Math.abs(cs)>1.5?Math.min(1,(Math.abs(G)-.13)*4):0,k.slipLat<0&&(k.slipLat=0),!k.front&&q>0&&Math.abs(an)>6&&(k.slipLat=Math.max(k.slipLat,.6));let Mt=an/k.r;k.spin=Mt*(1+k.slipLong*.6)+(vt&&M>0&&k.slipLong>0?6*k.slipLong:0),!k.front&&q>0&&Math.abs(an)>1&&(k.spin*=.2);let Wt=ze*ct+xe*lt+os*N,te=gn*ct+qe*lt+si*N,ee=Nn*ct+Ye*lt+ls*N;z+=Wt,Y+=te,B+=ee;let we=ft,qt=Ut+.25*zt,bt=ae;Z+=qt*ee-bt*te,H+=bt*Wt-we*ee,tt+=we*te-qt*Wt}for(let it=0;it<4;it++){let k=this.wheels[it];k.spinAngle+=k.spin*t,k.spinAngle>1e4&&(k.spinAngle-=1e4)}let xt=.5*1.225*i.cda*g;z-=xt*this.vx,Y-=xt*this.vy,B-=xt*this.vz;let ht=.5*1.225*i.cl*d*Math.abs(d)*(nt>0?1:.2);z-=h*ht,Y-=u*ht,B-=f*ht,this.grounded=nt,nt===0?this.airTime+=t:this.airTime=0;let St=this.wx*h+this.wy*u+this.wz*f;if(nt>=3&&this.assist.esc&&q===0&&!P&&d>5){let it=this.wheels[0].mz-this.wheels[2].mz,k=i.mu*9.81*1.1/d,at=Math.max(-k,Math.min(k,d*Math.tan(st)/it)),wt=St-at;if(wt*St>0){let et=-wt*this.Iy*6*this.assist.esc;Z+=h*et,H+=u*et,tt+=f*et}}if(nt>=3&&q>0&&!P&&d>12){let it=a.steer*this.Iy*1.4;Z+=h*it,H+=u*it,tt+=f*it}if(nt===0&&g>8){let it=Math.atan2(this.latSpeed,Math.max(1,Math.abs(d))),k=this.wx*h+this.wy*u+this.wz*f,at=this.Iy*((.6+2.4*this.assist.air)*it-(.3+1.5*this.assist.air)*k);Z+=h*at,H+=u*at,tt+=f*at}if(nt===0&&this.assist.air&&!this.wrecked){let it=-f,k=h,at=7*this.assist.air,wt=3.2*this.assist.air;Z+=(it*at-this.wx*wt)*this.Ix,tt+=(k*at-this.wz*wt)*this.Iz}if(this.vx+=z*this.invMass*t,this.vy+=Y*this.invMass*t,this.vz+=B*this.invMass*t,this.applyAngular(Z,H,tt,t),P){let it=this.spinDur,k=it-this.spinT,at=this.spinDir*Math.PI*Math.PI/it*Math.sin(Math.PI*Math.min(1,k/it)),wt=this.wx*h+this.wy*u+this.wz*f;if(this.wx+=h*(at-wt),this.wy+=u*(at-wt),this.wz+=f*(at-wt),this.spinA+=Math.abs(at)*t,this.spinT-=t,this.spinT<=0){this.spinT=0;let et=this.wx*h+this.wy*u+this.wz*f;this.wx-=h*et,this.wy-=u*et,this.wz-=f*et,this.spinA>Math.PI*1.8&&(this.spinDone=!0)}}let It=nt?.995:.999;this.wx*=It,this.wy*=It,this.wz*=It,this.px+=this.vx*t,this.py+=this.vy*t,this.pz+=this.vz*t;let Ct=this.qx,Qt=this.qy,kt=this.qz,re=this.qw,F=this.wx,Se=this.wy,Vt=this.wz;this.qx+=.5*t*(F*re+Se*kt-Vt*Qt),this.qy+=.5*t*(Se*re+Vt*Ct-F*kt),this.qz+=.5*t*(Vt*re+F*Qt-Se*Ct),this.qw+=.5*t*(-F*Ct-Se*Qt-Vt*kt);let Gt=Math.hypot(this.qx,this.qy,this.qz,this.qw);this.qx/=Gt,this.qy/=Gt,this.qz/=Gt,this.qw/=Gt,this.updateR(),e.query(this.px,this.pz,this.hint,n),this.hint=n.i,this.trackQ_s=n.s,this.trackQ_d=n.d;let At=n.y+.25,ne=this.half.x,Tt=this.half.y*.9,A=this.half.z,b=1e9,V=0,K=0,Q=0;for(let it=0;it<8;it++){let k=it&1?ne:-ne,at=it&2?Tt:-Tt*.4,wt=(it&4?A:-A)-this.cgZ,et=o*k+h*at+p*wt,dt=l*k+u*at+m*wt,yt=c*k+f*at+x*wt,Et=this.py+dt;Et<b&&(b=Et,V=et,K=dt,Q=yt)}let J=n.y-b;if(this.bodyHit=0,J>0){this.py+=J*.8;let it=n.nx,k=n.ny,at=n.nz,wt=this.vx+(this.wy*Q-this.wz*K),et=this.vy+(this.wz*V-this.wx*Q),dt=this.vz+(this.wx*K-this.wy*V),yt=wt*it+et*k+dt*at;if(yt<0){let Et=this.invMassAt(V,K,Q,it,k,at),mt=-1.25*yt/Et;this.impulse(it*mt,k*mt,at*mt,V,K,Q);let zt=wt-it*yt,Pt=et-k*yt,Xt=dt-at*yt,D=Math.hypot(zt,Pt,Xt);if(D>.01){let ct=Math.min(mt*.6,D/Et);this.impulse(-zt/D*ct,-Pt/D*ct,-Xt/D*ct,V,K,Q)}this.bodyHit=-yt}}At>this.py&&nt===0&&J<=0}};var Me={uSun:{value:new O(.45,.75,-.48).normalize()},uSunCol:{value:new Nt(1,.94,.84)},uSky:{value:new Nt(.55,.72,.95)},uGround:{value:new Nt(.42,.38,.32)},uFog:{value:new Nt(.74,.82,.92)},uFogNear:{value:220},uFogFar:{value:900},uTime:{value:0},uNight:{value:0}},ni=`
varying float vFog;
`,qr=`
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`,Pn=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`,wl=`
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;function ss(){return new ue({uniforms:Me,vertexShader:Pn+ni+`
attribute vec4 col;
varying vec3 vCol; varying vec3 vN;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb;
  float lightFlag = step(0.2, col.a) * (1.0 - step(0.3, col.a));
  vCol += lightFlag * vec3(1.0, 0.9, 0.6) * uNight * 2.0;
  `+qr+`
}`,fragmentShader:Pn+wl+ni+`
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function _h(){return new ue({uniforms:Me,vertexShader:Pn+ni+`
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  `+qr+`
}`,fragmentShader:Pn+wl+ni+`
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 n = normalize(vN);
  vec3 c = vCol;
  float wall = 1.0 - step(0.5, n.y);
  vec2 cell = vec2(vUv.x / 3.4, (vUv.y - 1.2) / 3.2);
  vec2 f = fract(cell);
  float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.25, f.y) * step(f.y, 0.8) * step(0.0, cell.y) * step(0.6, vUv.y);
  float h = hash(floor(cell) + floor(vCol.rg * 50.0));
  vec3 glass = mix(vec3(0.16, 0.22, 0.3), vec3(0.3, 0.42, 0.55), h);
  c = mix(c, glass, win * wall);
  vec3 lit = c * light(n);
  // lit windows at night
  lit += win * wall * step(0.45, h) * uNight * vec3(1.0, 0.82, 0.5) * 0.9;
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`})}function Yr(s,t,e){return new ue({uniforms:Object.assign({uPaint:{value:new Nt(s||13639712)},uRoof:{value:new Nt(t>=0?t:s||13639712)},uRoofY:{value:e||99},uBrake:{value:0}},Me),vertexShader:Pn+ni+`
attribute vec4 col;
uniform vec3 uPaint; uniform vec3 uRoof; uniform float uBrake;
varying vec3 vCol; varying vec3 vN; varying vec3 vWp; varying float vKind; varying float vY; varying float vSh;
void main() {
  vY = position.y; vSh = col.r * 1.25;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vWp = wp.xyz;
  float a = col.a;
  vKind = a > 0.9 ? 3.0 : a > 0.7 ? 4.0 : a > 0.45 ? 2.0 : a > 0.2 ? 1.0 : 0.0;   // 4: accent parts in the roof colour
  vCol = a > 0.9 ? uPaint * col.r * 1.25 : a > 0.7 ? uRoof * col.r * 1.25 : col.rgb;
  if (vKind > 0.5 && vKind < 1.5) {     // lights: red at the back glow when braking
    bool rear = position.z < 0.0;
    vCol = rear ? vec3(0.8, 0.05, 0.03) * (1.0 + uBrake * 2.5) : vec3(1.0, 0.97, 0.85) * (1.0 + uNight * 1.5);
  }
  `+qr+`
}`,fragmentShader:Pn+wl+ni+`
uniform vec3 uRoof; uniform float uRoofY;
varying vec3 vCol; varying vec3 vN; varying vec3 vWp; varying float vKind; varying float vY; varying float vSh;
void main() {
  vec3 n = normalize(vN);
  vec3 base = vKind > 2.5 && vKind < 3.5 && vY > uRoofY ? uRoof * vSh : vCol;   // two-tone: the roof panel
  vec3 v = normalize(cameraPosition - vWp);
  vec3 c = base * light(n);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  vec3 r = reflect(-v, n);
  vec3 env = mix(uGround * 0.6, uSky * 1.1, smoothstep(-0.15, 0.25, r.y));
  float spec = pow(max(dot(r, uSun), 0.0), 60.0);
  if (vKind > 2.5) {         // paint (varyings are not exact: compare with ranges): clear coat
    c = c + env * (0.12 + fres * 0.45) + uSunCol * spec * 1.2;
  } else if (vKind > 1.5) {  // glass
    c = vec3(0.05, 0.06, 0.08) + env * (0.35 + fres * 0.5) + uSunCol * spec * 1.5;
  } else if (vKind > 0.5) {
    c = vCol;
  } else {
    c += uSunCol * spec * 0.2;
  }
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function yh(){return new ue({uniforms:Me,depthWrite:!1,side:Ce,vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:Pn+`
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = max(d.y, 0.0);
  vec3 top = mix(vec3(0.22, 0.45, 0.85), vec3(0.02, 0.03, 0.08), uNight);
  vec3 c = mix(uFog, top, pow(h, 0.55));
  float s = max(dot(d, uSun), 0.0);
  c += uSunCol * (pow(s, 600.0) * 3.0 + pow(s, 12.0) * 0.25) * (1.0 - uNight);
  // a few far hills on the horizon (the other shore across the strait, to the north)
  gl_FragColor = vec4(c, 1.0);
}`})}function Mh(){return new ue({uniforms:Me,vertexShader:Pn+ni+`
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; `+qr+" }",fragmentShader:Pn+ni+`
varying vec3 vWp;
void main() {
  vec2 p = vWp.xz;
  float w = sin(p.x * 0.11 + uTime * 0.9) * 0.5 + sin(p.y * 0.07 - uTime * 0.7) * 0.5 + sin((p.x + p.y) * 0.23 + uTime * 1.6) * 0.25;
  vec3 n = normalize(vec3(w * 0.08, 1.0, cos(p.x * 0.09 + uTime) * 0.06));
  vec3 v = normalize(cameraPosition - vWp);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 4.0);
  vec3 deep = mix(vec3(0.02, 0.22, 0.36), vec3(0.0, 0.03, 0.06), uNight);
  vec3 c = mix(deep, uSky * 0.75, fres * 0.35);
  float spec = pow(max(dot(reflect(-v, n), uSun), 0.0), 120.0);
  c += uSunCol * spec * 2.0 * (1.0 - uNight);
  // lighter fog on the water than on land, so the sea keeps its colour and the horizon line shows
  gl_FragColor = vec4(mix(c, uFog, vFog * 0.55), 1.0);
}`})}function Zr(){return new ue({uniforms:{uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:xi,vertexShader:"attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }"})}function bh(s){return new ue({uniforms:{uScale:{value:600},uNight:Me.uNight},transparent:!0,depthWrite:!1,blending:s?xi:Yn,vertexShader:`attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,fragmentShader:"uniform float uNight; varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); float lum = max(vCol.r, max(vCol.g, vCol.b)); vec3 c = vCol.rgb * mix(1.0, 0.3, uNight * step(abs(vCol.r - vCol.b), 0.1)); gl_FragColor = vec4(c, a); }"})}function $r(){return new ue({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }"})}var Cl=["wfl","wfr","wbl","wbr"];function Ps(s){let t=Sl(s),e=t.parts.find(o=>o.name==="body"),n=Cl.map(o=>{let l=t.parts.find(c=>c.name===o);return l?{x:l.pivot[0],y:l.pivot[1],z:l.pivot[2],r:l.radius}:null}),i=e.max[0]-e.min[0],r=e.max[2]-e.min[2],a=e.max[1];for(let o=0;o<4;o++)n[o]||(n[o]={x:(o&1?-1:1)*i*.4,y:.35,z:(o<2?1:-1)*r*.32,r:.35});return{w:i,l:r,h:a,cg:Math.min(.62,a*.38),wheels:n,front:e.max[2],back:e.min[2]}}var El=null,Tl=null;function ig(){if(El)return El;let s=new Fr(.16,1,8,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,-.5);let t=s.attributes.position.count,e=new Uint8Array(t*4);for(let n=0;n<t;n++){let r=-s.attributes.position.getZ(n);e[n*4]=120+135*(1-r),e[n*4+1]=160*(1-r)+60,e[n*4+2]=255,e[n*4+3]=255*(1-r*.9)}return s.setAttribute("col",new Ot(e,4,!0)),El=s,s}function sg(){if(Tl)return Tl;let s=new Kn(1,1);s.rotateX(-Math.PI/2);let t=new Uint8Array(4*4);for(let e=0;e<4;e++)t[e*4+3]=140;return s.setAttribute("col",new Ot(t,4,!0)),Tl=s,s}var Al=null,Rl=null,rs=class{constructor(t,e,n,i){this.scene=t,this.root=new un,this.root.matrixAutoUpdate=!1;let r=Sl(e);this.mat=Yr(n,i,r.roofY),this.body=new Kt(wi(e,"body"),this.mat),this.body.matrixAutoUpdate=!1,this.root.add(this.body);for(let o of r.parts)if(o.name!=="body"&&o.name[0]!=="w"){let l=new Kt(wi(e,o.name),this.mat);l.matrixAutoUpdate=!1,this.root.add(l)}this.wheels=[];let a=Ps(e);this.dims=a;for(let o=0;o<4;o++){let l=r.parts.find(h=>h.name===Cl[o]),c=new Kt(l?wi(e,Cl[o]):wi("debris_tire","body"),this.mat);c.matrixAutoUpdate=!1,c.userData.base=new O(a.wheels[o].x,a.wheels[o].y,a.wheels[o].z),this.root.add(c),this.wheels.push(c)}Al=Al||$r(),this.shadow=new Kt(sg(),Al),this.shadow.matrixAutoUpdate=!1,this.shadow.renderOrder=1,t.add(this.shadow),Rl=Rl||Zr(),this.flames=[];for(let o of[.35,-.35]){let l=new Kt(ig(),Rl);l.position.set(o*a.w*.6,a.h*.28,a.back-.05),l.visible=!1,l.renderOrder=2,this.root.add(l),this.flames.push(l)}this.q=new dn,this.e=new sn,this.tmp=new se,this.v3=new O,this.s3=new O(1,1,1),t.add(this.root),this.lod=0}setPaint(t,e){this.mat.uniforms.uPaint.value.setHex(t),this.mat.uniforms.uRoof.value.setHex(e>=0?e:t)}sync(t,e,n,i){let r=t.R,a=this.root.matrix.elements,o=this.dims.cg;a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=r[3],a[5]=r[4],a[6]=r[5],a[7]=0,a[8]=r[6],a[9]=r[7],a[10]=r[8],a[11]=0;let l=t.cgZ||0;a[12]=t.px-r[3]*o-r[6]*l,a[13]=t.py-r[4]*o-r[7]*l,a[14]=t.pz-r[5]*o-r[8]*l,a[15]=1,this.root.matrixWorldNeedsUpdate=!0;let c=e<140;this.lod=e>900?2:c?0:1,this.root.visible=this.lod<2;for(let v=0;v<4;v++){let C=this.wheels[v],T=t.wheels[v];if(C.visible=this.lod===0||e<260,!C.visible)continue;let E=C.userData.base,I=T.front?t.steerNow:0;this.e.set(T.spinAngle,I,0,"YXZ"),this.q.setFromEuler(this.e),this.v3.set(E.x,E.y+(.1-(T.contact?T.travel-.25:.12))*.6,E.z),C.matrix.compose(this.v3,this.q,this.s3)}let h=n>0&&this.lod===0;for(let v of this.flames)if(v.visible=h,h){let C=.7+n*(.8+Math.random()*.5);v.scale.set(1,1,C*1.6),v.updateMatrix()}this.mat.uniforms.uBrake.value=i;let u=this.shadow.matrix.elements,f=Math.atan2(r[6],r[8]),p=Math.cos(f),m=Math.sin(f),x=t.groundY!==void 0?t.groundY:t.py-.6,g=Math.max(0,t.py-x-.5),d=Math.max(.3,1-g*.12),S=this.dims.w*1.15*d,_=this.dims.l*1.05*d;u[0]=p*S,u[1]=0,u[2]=-m*S,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=m*_,u[9]=0,u[10]=p*_,u[11]=0,u[12]=t.px,u[13]=x+.06,u[14]=t.pz,u[15]=1,this.shadow.matrixWorldNeedsUpdate=!0,this.shadow.visible=this.lod===0&&g<8}dispose(){this.scene.remove(this.root),this.scene.remove(this.shadow),this.mat.dispose()}};var be={nx:0,nz:0,depth:0,px:0,pz:0},mn=new Float32Array(8);function Sh(s,t){let e=s.R,n=s.half.x,i=s.half.z,r=e[0],a=e[2],o=Math.hypot(r,a)||1;r/=o,a/=o;let l=e[6],c=e[8],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(let f=-1;f<=1;f+=2)for(let p=-1;p<=1;p+=2)t[u++]=s.px-e[6]*s.cgZ+r*n*f+l*i*p,t[u++]=s.pz-e[8]*s.cgZ+a*n*f+c*i*p;return t}function rg(s,t){let e=1e9;for(let c=0;c<2;c++){let h=c?t:s,u=h.R;for(let f=0;f<2;f++){let p=f?u[6]:u[0],m=f?u[8]:u[2],x=Math.hypot(p,m)||1;p/=x,m/=x;let g=wh(s,p,m),d=wh(t,p,m),S=(s.px-s.R[6]*s.cgZ)*p+(s.pz-s.R[8]*s.cgZ)*m,_=(t.px-t.R[6]*t.cgZ)*p+(t.pz-t.R[8]*t.cgZ)*m,v=g+d-Math.abs(_-S);if(v<=0)return!1;if(v<e){e=v;let C=_-S>=0?1:-1;be.nx=p*C,be.nz=m*C}}}be.depth=e,Sh(t,mn);let n=1e9,i=0,r=0;for(let c=0;c<4;c++){let h=mn[c*2]*be.nx+mn[c*2+1]*be.nz;h<n&&(n=h,i=mn[c*2],r=mn[c*2+1])}Sh(s,mn);let a=-1e9,o=0,l=0;for(let c=0;c<4;c++){let h=mn[c*2]*be.nx+mn[c*2+1]*be.nz;h>a&&(a=h,o=mn[c*2],l=mn[c*2+1])}return be.px=(i+o)/2,be.pz=(r+l)/2,!0}function wh(s,t,e){let n=s.R,i=n[0],r=n[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=n[6],l=n[8],c=Math.hypot(o,l)||1;return o/=c,l/=c,Math.abs(i*t+r*e)*s.half.x+Math.abs(o*t+l*e)*s.half.z}var le={j:0,rel:0,nx:0,nz:0,px:0,py:0,pz:0};function Eh(s,t){if(Math.abs(s.py-t.py)>2.2)return 0;let e=s.px-t.px,n=s.pz-t.pz,i=s.half.z+t.half.z;if(e*e+n*n>i*i||!rg(s,t))return 0;let r=be.nx,a=be.nz,o=s.invMass/(s.invMass+t.invMass),l=1-o,c=be.depth+.01;s.px-=r*c*o,s.pz-=a*c*o,t.px+=r*c*l,t.pz+=a*c*l;let h=(s.py+t.py)/2+.1,u=be.px-s.px,f=h-s.py,p=be.pz-s.pz,m=be.px-t.px,x=h-t.py,g=be.pz-t.pz,d=s.vx+(s.wy*p-s.wz*f),S=s.vy+(s.wz*u-s.wx*p),_=s.vz+(s.wx*f-s.wy*u),v=t.vx+(t.wy*g-t.wz*x),C=t.vy+(t.wz*m-t.wx*g),T=t.vz+(t.wx*x-t.wy*m),E=v-d,I=C-S,M=T-_,y=E*r+M*a;if(y>=0)return 0;let R=.25,L=s.invMassAt(u,f,p,r,0,a)+t.invMassAt(m,x,g,r,0,a),P=-(1+R)*y/L;s.impulse(-r*P,0,-a*P,u,f,p),t.impulse(r*P,0,a*P,m,x,g);let z=E-r*y,Y=I,B=M-a*y,Z=Math.hypot(z,Y,B);if(Z>.05){let H=Math.min(P*.35,Z/L),tt=z/Z,nt=Y/Z,st=B/Z;s.impulse(tt*H,nt*H,st*H,u,f,p),t.impulse(-tt*H,-nt*H,-st*H,m,x,g)}return le.j=P,le.rel=-y,le.nx=r,le.nz=a,le.px=be.px,le.py=h,le.pz=be.pz,P}var Jr=class{constructor(t,e){this.cam=new De(64,t,.3,e),this.mode=0,this.pos=new O,this.vel=new O,this.look=new O,this.dir=new O(0,0,1),this.shake=0,this.shakeOn=!0,this.init=!1,this.wreckA=0,this.back=!1,this.t=new O,this.l=new O}kick(t){this.shakeOn&&(this.shake=Math.min(1,this.shake+t))}update(t,e){let n=e.veh,i=n.R,r=this.cam,a=Math.max(0,n.fwdSpeed),o=i[6],l=i[8];n.speed>4&&e.wreck<=0&&(o=o*(1-.65)+n.vx/n.speed*.65,l=l*(1-.65)+n.vz/n.speed*.65);let c=Math.hypot(o,l)||1;o/=c,l/=c;let h=1-Math.exp(-t*7);this.dir.x+=(o-this.dir.x)*h,this.dir.z+=(l-this.dir.z)*h;let u=Math.hypot(this.dir.x,this.dir.z)||1,f=this.dir.x/u,p=this.dir.z/u,m,x,g;this.mode===1?(m=9+a*.03,x=3.4,g=6):this.mode===2?(m=-.6,x=1.05,g=30):(m=6.2+a*.022,x=2.25+a*.004,g=5);let d=this.back?-1:1;if(e.wreck>0?(this.wreckA+=t*.9,this.t.set(n.px+Math.sin(this.wreckA)*9,n.py+3.5,n.pz+Math.cos(this.wreckA)*9),this.l.set(n.px,n.py,n.pz)):(this.t.set(n.px-f*m*d,n.py+x,n.pz-p*m*d),this.l.set(n.px+f*g*d,n.py+(this.mode===2?.9:.8),n.pz+p*g*d)),!this.init||this.mode===2||this.back)this.pos.copy(this.t),this.init=!0;else{let _=1-Math.exp(-t*12);this.pos.lerp(this.t,_),this.pos.y<n.py+.8&&(this.pos.y=n.py+.8)}if(r.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let _=this.shake*this.shake*.35;r.position.x+=(Math.random()-.5)*_,r.position.y+=(Math.random()-.5)*_}r.lookAt(this.l);let S=62+Math.min(16,a*.13)+(e.veh.nitroOn?8*Math.min(1.5,e.veh.nitroOn):0);r.fov+=(S-r.fov)*(1-Math.exp(-t*4)),r.updateProjectionMatrix()}};var Kr=class{constructor(t,e,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Uint8Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Uint8Array(e*4);let i=new pe;this.aPos=new Ot(this.pos,3),this.aPos.setUsage(Qn),this.aCol=new Ot(this.col,4,!0),this.aCol.setUsage(Qn),this.aSize=new Ot(this.size,1),this.aSize.setUsage(Qn),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("size",this.aSize),i.setDrawRange(0,0),this.mat=bh(n),this.points=new Nr(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.gravity=n?-9.8:.6,t.add(this.points),this.next=0}emit(t,e,n,i,r,a,o,l,c,h,u,f,p){let m=this.next;this.next=(this.next+1)%this.max,this.n<this.max&&this.n++,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=r,this.vel[m*3+2]=a,this.base[m*4]=o,this.base[m*4+1]=l,this.base[m*4+2]=c,this.base[m*4+3]=h,this.size[m]=u,this.life[m]=f,this.age[m]=0,this.grow[m]=p||0}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.age[n]>=this.life[n]){this.col[n*4+3]=0;continue}this.age[n]+=t;let i=1-this.age[n]/this.life[n];this.vel[n*3+1]+=this.gravity*t,this.vel[n*3]*=.985,this.vel[n*3+2]*=.985,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*i}this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},Il=class{constructor(t,e){this.max=e,this.next=0,this.pos=new Float32Array(e*4*3),this.col=new Uint8Array(e*4*4),this.uv=new Float32Array(e*4*2);let n=new Uint16Array(e*6);for(let r=0;r<e;r++){let a=r*4;n.set([a,a+1,a+2,a,a+2,a+3],r*6)}for(let r=0;r<e*4;r++)this.uv[r*2]=.5,this.uv[r*2+1]=.5;let i=new pe;this.aPos=new Ot(this.pos,3),this.aPos.setUsage(Qn),this.aCol=new Ot(this.col,4,!0),this.aCol.setUsage(Qn),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("uv",new Ot(this.uv,2)),i.setIndex(new Ot(n,1)),this.mesh=new Kt(i,$r()),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.last=new Float32Array(16*4).fill(NaN),this.dirty=!1}add(t,e,n,i,r,a,o){let l=this.last,c=t*4;if(o<=0||isNaN(l[c])){l[c]=e,l[c+1]=n,l[c+2]=i,l[c+3]=o>0?1:NaN,o<=0&&(l[c]=NaN);return}let h=e-l[c],u=i-l[c+2];if(h*h+u*u<.36)return;let f=this.next;this.next=(this.next+1)%this.max;let p=.13,m=this.pos,x=this.col,g=f*12;m[g]=l[c]+r*p,m[g+1]=l[c+1]+.03,m[g+2]=l[c+2]+a*p,m[g+3]=l[c]-r*p,m[g+4]=l[c+1]+.03,m[g+5]=l[c+2]-a*p,m[g+6]=e-r*p,m[g+7]=n+.03,m[g+8]=i-a*p,m[g+9]=e+r*p,m[g+10]=n+.03,m[g+11]=i+a*p;let d=Math.min(200,60+o*150);for(let S=0;S<4;S++)x[f*16+S*4]=12,x[f*16+S*4+1]=12,x[f*16+S*4+2]=12,x[f*16+S*4+3]=d;l[c]=e,l[c+1]=n,l[c+2]=i,this.dirty=!0}reset(t){this.last[t*4]=NaN}update(){this.dirty&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.dirty=!1)}},Pl=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*6),this.col=new Uint8Array(e*8),this.seed=new Float32Array(e*3);for(let i=0;i<e;i++)this.seed[i*3]=Math.random()*6.28,this.seed[i*3+1]=2+Math.random()*3,this.seed[i*3+2]=Math.random()*40;let n=new pe;this.aPos=new Ot(this.pos,3),this.aPos.setUsage(Qn),this.aCol=new Ot(this.col,4,!0),this.aCol.setUsage(Qn),n.setAttribute("position",this.aPos),n.setAttribute("col",this.aCol),this.lines=new Ur(n,Zr()),this.lines.frustumCulled=!1,this.lines.renderOrder=4,t.add(this.lines)}update(t,e,n,i){let r=Math.max(0,Math.min(1,(n-45)/40))*.6+(i?.4:0);if(this.lines.visible=r>.02,!this.lines.visible)return;let a=e.matrixWorld.elements,o=a[0],l=a[1],c=a[2],h=a[4],u=a[5],f=a[6],p=-a[8],m=-a[9],x=-a[10],g=a[12],d=a[13],S=a[14];for(let _=0;_<this.n;_++){let v=this.seed[_*3+2]-t*n*1.4;v<2&&(v+=40),this.seed[_*3+2]=v;let C=this.seed[_*3],T=this.seed[_*3+1],E=Math.cos(C)*T,I=Math.sin(C)*T*.6,M=2+n*.06,y=g+o*E+h*I+p*v,R=d+l*E+u*I+m*v,L=S+c*E+f*I+x*v;this.pos[_*6]=y,this.pos[_*6+1]=R,this.pos[_*6+2]=L,this.pos[_*6+3]=y+p*M,this.pos[_*6+4]=R+m*M,this.pos[_*6+5]=L+x*M;let P=140*r,z=i?255:220;this.col[_*8]=i?120:220,this.col[_*8+1]=i?190:220,this.col[_*8+2]=z,this.col[_*8+3]=P,this.col[_*8+4]=0,this.col[_*8+5]=0,this.col[_*8+6]=0,this.col[_*8+7]=0}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}},Ll=class{constructor(t,e){this.items=[];let n=["debris_bumper","debris_door","debris_tire","debris_spoiler","debris_plate"];for(let i=0;i<10;i++){let r=new Kt(wi(n[i%n.length],"body"),e);r.userData.s0=n[i%n.length]==="debris_tire"?.65:.85,r.visible=!1,r.userData.v=new O,r.userData.w=new O,r.userData.t=0,t.add(r),this.items.push(r)}this.next=0}burst(t,e,n,i,r,a,o){for(let l=0;l<o;l++){let c=this.items[this.next];this.next=(this.next+1)%this.items.length,c.visible=!0,c.position.set(t,e+.6,n),c.userData.v.set(i*.5+(Math.random()-.5)*6,2.5+Math.random()*3.5,a*.5+(Math.random()-.5)*6),c.userData.w.set(Math.random()*10,Math.random()*10,Math.random()*10),c.userData.t=2.2,c.userData.floor=e-.4,c.scale.setScalar(c.userData.s0||1)}}update(t){for(let e of this.items){if(!e.visible)continue;let n=e.userData;if(n.t-=t,n.t<=0){e.visible=!1;continue}n.t<.5&&e.scale.setScalar(n.s0*n.t/.5),n.v.y-=9.8*t,e.position.x+=n.v.x*t,e.position.y+=n.v.y*t,e.position.z+=n.v.z*t,e.position.y<n.floor&&(e.position.y=n.floor,n.v.y*=-.3,n.v.x*=.7,n.v.z*=.7,n.w.multiplyScalar(.7)),e.rotation.x+=n.w.x*t,e.rotation.y+=n.w.y*t,e.rotation.z+=n.w.z*t}}},jr=class{constructor(t,e,n){let i=e==="low";this.sparks=new Kr(t,i?80:200,!0),this.smoke=new Kr(t,i?60:160,!1),this.skids=new Il(t,i?300:700),this.streaks=new Pl(t,i?24:48),this.debris=new Ll(t,n),this.low=i}spark(t,e,n,i,r,a){for(let o=0;o<a;o++)this.sparks.emit(t,e,n,i*.5+(Math.random()-.5)*6,1+Math.random()*4,r*.5+(Math.random()-.5)*6,255,190+Math.random()*60,90,255,.12,.25+Math.random()*.3)}puff(t,e,n,i,r,a){this.smoke.emit(t,e+.2,n,i*.2+(Math.random()-.5),.6+Math.random()*.6,r*.2+(Math.random()-.5),225,225,228,110*a,.8,1.1,2.6)}update(t){this.sparks.update(t),this.smoke.update(t),this.skids.update(),this.debris.update(t)}};var Th=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
varying float vFog;
`;function Ah(){return new ue({uniforms:Me,vertexShader:Th+`
attribute vec4 ds;   // x = d (m, left +), y = s (m along the street), z = half width, w = flags (1 junction, 2 one-way, 4 zebra side)
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
}`,fragmentShader:Th+`
varying vec4 vDs; varying vec3 vWp;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  float d = vDs.x, s = vDs.y, hw = vDs.z, fl = vDs.w;
  float junc = step(0.5, mod(fl, 2.0));
  float one = step(0.5, mod(floor(fl / 2.0), 2.0));
  float zebra = step(0.5, mod(floor(fl / 4.0), 2.0));
  float n = hash(floor(vWp.xz * 12.0)) * 0.035 + (sin(vWp.x * 0.21 + sin(vWp.z * 0.13) * 2.0) * 0.5 + 0.5) * 0.03;
  vec3 asph = vec3(0.25, 0.255, 0.265) + n;
  vec3 c = asph;
  float ad = abs(d);
  float fw = fwidth(d) * 1.2 + 0.02;
  if (junc < 0.5) {
    // lanes: one-way streets spread their lanes over the whole width, two-way streets per half
    float span = one > 0.5 ? hw * 2.0 : hw;
    float lanes = max(1.0, floor(span / 3.3 + 0.3));
    float lw = span / lanes;
    float x = one > 0.5 ? d + hw : ad;
    float lane = abs(fract(x / lw + 0.5) - 0.5) * lw;
    float dash = step(0.5, fract(s / 8.0));
    float inner = step(lw * 0.5, x) * (1.0 - step(span - lw * 0.5, x));
    c = mix(c, vec3(0.9), (1.0 - smoothstep(0.06, 0.06 + fw, lane)) * dash * inner * step(ad, hw));
    // centre line: solid white (two-way)
    c = mix(c, vec3(0.92), (1.0 - smoothstep(0.07, 0.07 + fw, ad)) * (1.0 - one));
    // edge lines
    c = mix(c, vec3(0.86), (1.0 - smoothstep(0.06, 0.06 + fw, abs(ad - (hw - 0.35)))) * step(1.0, ad));
    // zebra crossing just before a junction
    float zb = zebra * step(ad, hw) * step(0.5, fract(d / 1.0));
    c = mix(c, vec3(0.93), zb);
    // kerb + pavement
    float kerb = step(hw, ad) * (1.0 - step(hw + 0.35, ad));
    c = mix(c, vec3(0.62, 0.62, 0.6), kerb);
    float pav = step(hw + 0.35, ad);
    vec2 sl = fract(vec2(s, ad) / 0.9);
    float joint = step(0.92, max(sl.x, sl.y));
    vec3 pc = vec3(0.7, 0.66, 0.6) * (0.94 + hash(floor(vec2(s, ad) / 0.9)) * 0.1) * (1.0 - joint * 0.22);
    c = mix(c, pc, pav);
    c = mix(c, vec3(0.42, 0.38, 0.3), step(hw + 3.5, ad));   // the verge beyond the pavement
  }
  float sunk = max(uSun.y, 0.0);
  vec3 lit = c * (mix(uGround, uSky, 0.8) * 0.55 + uSunCol * sunk * (1.0 - uNight * 0.85));
  if (uNight > 0.5) {
    float sL = mod(s, 40.0);
    float pl = exp(-pow(min(sL, 40.0 - sL) / 8.0, 2.0)) * exp(-pow((ad - hw) / 7.0, 2.0));
    lit += c * vec3(1.0, 0.78, 0.45) * (pl * 1.6 + junc * 0.6) * uNight;
  }
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`,extensions:{derivatives:!0}})}var Ie=200,Rh=2.2,as=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.extra=null}get count(){return this.p.length/3}vert(t,e,n,i,r,a,o,l,c,h){return this.p.push(t,e,n),this.n.push(i*127|0,r*127|0,a*127|0,0),this.c.push(o,l,c,h||0),this.count-1}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}model(t,e,n,i,r,a,o,l){let c=bl(t,e),h=Math.cos(a),u=Math.sin(a),f=o||1,p=this.count;for(let m=0;m<c.part.n;m++){let x=c.pos[m*3]*f,g=c.pos[m*3+1]*f,d=c.pos[m*3+2]*f,S=c.nrm[m*4]/127,_=c.nrm[m*4+1]/127,v=c.nrm[m*4+2]/127,C=c.col[m*4],T=c.col[m*4+1],E=c.col[m*4+2];l&&(C=C*l[0]|0,T=T*l[1]|0,E=E*l[2]|0),this.p.push(n+x*h+d*u,i+g,r-x*u+d*h),this.n.push(Math.round((S*h+v*u)*127),Math.round(_*127),Math.round((-S*u+v*h)*127),0),this.c.push(Math.min(255,C),Math.min(255,T),Math.min(255,E),c.col[m*4+3]===64?64:0)}for(let m=0;m<c.idx.length;m++)this.i.push(p+c.idx[m])}box(t,e,n,i,r,a,o,l,c,h,u,f){let p=-l,m=o,x=[];for(let d=0;d<8;d++){let S=d&1?i:-i,_=d&2?r:0,v=d&4?a:-a;x.push(t+o*S+p*v,e+_,n+l*S+m*v)}let g=[[0,4,6,2,-1,0,0],[1,3,7,5,1,0,0],[0,1,5,4,0,-1,0],[2,6,7,3,0,1,0],[0,2,3,1,0,0,-1],[4,5,7,6,0,0,1]];for(let d of g){let S=d[4]*o+d[6]*p,_=d[5],v=d[4]*l+d[6]*m,C=d.slice(0,4).map(B=>this.vert(x[B*3],x[B*3+1],x[B*3+2],S,_,v,c,h,u,f?64:0)),T=d[0]*3,E=d[1]*3,I=d[2]*3,M=x[E]-x[T],y=x[E+1]-x[T+1],R=x[E+2]-x[T+2],L=x[I]-x[T],P=x[I+1]-x[T+1],z=x[I+2]-x[T+2];(y*z-R*P)*S+(R*L-M*z)*_+(M*P-y*L)*v>=0?this.quad(C[0],C[1],C[2],C[3]):this.quad(C[0],C[3],C[2],C[1])}}build(t){let e=new pe;if(e.setAttribute("position",new Ot(new Float32Array(this.p),3)),t&&e.setAttribute("normal",new Ot(new Int8Array(this.n),4,!0)),e.setAttribute("col",new Ot(new Uint8Array(this.c),4,!0)),e.setIndex(new Ot(this.count>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),this.extra)for(let n in this.extra){let i=this.extra[n];e.setAttribute(n,new Ot(new Float32Array(i.a),i.n))}return e.computeBoundingSphere(),e}};function ag(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Ch=[[240,238,230],[244,242,236],[236,226,204],[226,212,186],[222,200,172],[232,230,224],[214,222,228],[236,214,204],[246,246,244]],Qr=class{constructor(t,e,n){this.scene=t,this.net=e,this.reach=n.tier==="low"?520:n.tier==="mid"?680:860,this.mats={world:ss(),road:Ah(),bld:_h()},this.chunks=new Map;let i=(f,p)=>Math.floor(f/Ie)*1e3+Math.floor(p/Ie)+500500;this.key=i;let r=f=>{let p=this.chunks.get(f);return p||this.chunks.set(f,p={k:f,segs:[],blds:[],heads:[],st:[],jn:[],built:null}),p};for(let f=0;f<e.n-1;f++)e.sE[f+1]===e.sE[f]&&r(i((e.px[f]+e.px[f+1])/2,(e.pz[f]+e.pz[f+1])/2)).segs.push(f);for(let f=0;f<e.nj;f++)e.jEdges[f].length>=3&&r(i(e.jx[f],e.jz[f])).jn.push(f);let a=e.bld;for(let f=0;f<a.length;){let p=a[f];r(i(a[f+3],a[f+4])).blds.push(f),f+=3+p*2}for(let f of e.stations){let p=e.eOff[f.e]+f.k;r(i(e.px[p],e.pz[p])).st.push(f)}this.heads=[];let o={};for(let f=0;f<e.lights.length;f++){let p=e.lights[f],m=p.j,x=e.jEdges[m];for(let g=0;g<x.length;g++){let d=x[g],S=e.eB[d]===m;if(e.eOne[d]&&!S)continue;let _=S?e.eLen[d]-e.jr[m]-1.5:e.jr[m]+1.5,v=S?-1:1,C=e.eHw[d];e.at(d,_,v*(C+.7),o);let T=S?o.fx:-o.fx,E=S?o.fz:-o.fz,I={L:f,ph:p.ph[g],x:o.x,y:o.y+.15,z:o.z,fx:T,fz:E};this.heads.push(I),r(i(o.x,o.z)).heads.push(I)}}let l=new yi(.24,.24,.08);this.lamps=new Pr(l,new _i({color:16777215}),Math.max(1,this.heads.length*3));let c=new se,h=new Nt(2236962);for(let f=0;f<this.heads.length;f++){let p=this.heads[f];for(let m=0;m<3;m++)c.makeRotationY(Math.atan2(p.fx,p.fz)),c.setPosition(p.x-p.fx*.2,p.y+3.75-m*.3,p.z-p.fz*.2),this.lamps.setMatrixAt(f*3+m,c),this.lamps.setColorAt(f*3+m,h)}this.lamps.frustumCulled=!1,t.add(this.lamps),this.lampState=new Int8Array(this.heads.length).fill(-1);let u=new Kn(4e4,4e4,1,1);u.rotateX(-Math.PI/2),this.sea=new Kt(u,Mh()),this.sea.position.y=0,this.sea.frustumCulled=!1,this.sea.renderOrder=-1,t.add(this.sea),this.sky=new Kt(new Or(5e3,16,8),yh()),this.sky.frustumCulled=!1,this.sky.renderOrder=10,t.add(this.sky),this.live=[],this.buildMs=0,this.built=0}setLamps(t){let e=[new Nt(16722458),new Nt(16756736),new Nt(2293606)],n=new Nt(1907997),i=!1;for(let r=0;r<this.heads.length;r++){let a=this.heads[r],o=t(a.L,a.ph);o!==this.lampState[r]&&(this.lampState[r]=o,i=!0,this.lamps.setColorAt(r*3,o===2?e[0]:n),this.lamps.setColorAt(r*3+1,o===1?e[1]:n),this.lamps.setColorAt(r*3+2,o===0?e[2]:n))}i&&(this.lamps.instanceColor.needsUpdate=!0)}stream(t,e,n,i){let r=performance.now(),a=this.reach,o=Math.floor(t/Ie),l=Math.floor(e/Ie),c=Math.ceil(a/Ie)+1,h=[];for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){let p=(o+u+.5)*Ie,m=(l+f+.5)*Ie,x=Math.hypot(p-t,m-e)-Ie*.71;if(x>a)continue;let g=this.chunks.get((o+u)*1e3+(l+f)+500500)||this.emptyChunk(o+u,l+f);g.built||h.push([x,g])}h.sort((u,f)=>u[0]-f[0]);for(let[,u]of h){if(!i&&performance.now()-r>n)break;this.buildChunk(u)}for(let u=this.live.length-1;u>=0;u--){let f=this.live[u];Math.hypot(f.cx-t,f.cz-e)-Ie*.71>a+260&&(this.dropChunk(f),this.live.splice(u,1))}this.buildMs=performance.now()-r}emptyChunk(t,e){let n=t*1e3+e+500500,i={k:n,segs:[],blds:[],heads:[],st:[],jn:[],built:null};return this.chunks.set(n,i),i}buildChunk(t){let e=this.net,n=t.k-500500,i=Math.round(n/1e3),r=n-i*1e3,a=i*Ie,o=r*Ie,l=new as,c=new as,h=new as,u=new as;l.extra={ds:{a:[],n:4}};let f=l.extra.ds.a,p=ag(t.k*7919+13),m=t.segs,x=0;for(let E=1;E<=m.length;E++)E<m.length&&m[E]===m[E-1]+1&&e.sE[m[E]]===e.sE[m[x]]||(this.street(l,f,h,c,m[x],m[E-1]+1,p),x=E);for(let E of t.jn){let I=e.jr[E]+.4,M=e.jy[E]+.012,y=18,R=l.count;l.vert(e.jx[E],M,e.jz[E],0,1,0,0,0,0),f.push(0,0,99,1);for(let L=0;L<=y;L++){let P=L/y*Math.PI*2;l.vert(e.jx[E]+Math.cos(P)*I,M,e.jz[E]+Math.sin(P)*I,0,1,0,0,0,0),f.push(0,0,99,1)}for(let L=0;L<y;L++)l.i.push(R,R+2+L,R+1+L)}let g=e.g,d=Math.max(0,Math.floor((a-g.x0)/g.c)),S=Math.min(g.nx-1,Math.ceil((a+Ie-g.x0)/g.c)),_=Math.max(0,Math.floor((o-g.z0)/g.c)),v=Math.min(g.nz-1,Math.ceil((o+Ie-g.z0)/g.c));if(S>d&&v>_){let E=S-d+1,I=c.count,M=g.h,y=g.nx,R=(L,P)=>M[Math.max(0,Math.min(g.nz-1,P))*y+Math.max(0,Math.min(y-1,L))]/10;for(let L=_;L<=v;L++)for(let P=d;P<=S;P++){let z=R(P,L),Y=(R(P+1,L)-R(P-1,L))/(2*g.c),B=(R(P,L+1)-R(P,L-1))/(2*g.c),Z=Math.hypot(Y,1,B),H=1/Z,tt=(Math.sin(P*.9)+Math.sin(L*1.3))*.5,nt,st,gt;z<.5?(nt=196,st=182,gt=146):z<3?(nt=222+tt*8,st=206+tt*8,gt=162):H<.82?(nt=132+tt*10,st=118+tt*8,gt=96):(nt=116+tt*16,st=132+tt*14,gt=76+tt*6),c.vert(g.x0+P*g.c,z,g.z0+L*g.c,-Y/Z,H,-B/Z,nt,st,gt)}for(let L=0;L<v-_;L++)for(let P=0;P<E-1;P++){let z=I+L*E+P;R(d+P,_+L)<-2.4&&R(d+P+1,_+L+1)<-2.4&&R(d+P+1,_+L)<-2.4||c.quad(z,z+E,z+E+1,z+1)}}for(let E of t.blds)this.building(u,E);for(let E of t.heads){let I=E.fz,M=-E.fx;c.box(E.x,E.y,E.z,.07,3.4,.07,I,M,70,72,76),c.box(E.x-E.fx*.05,E.y+3.3,E.z-E.fz*.05,.2,.95,.12,I,M,30,30,32)}for(let E of t.st)this.station(c,h,E);let C={k:t.k,meshes:[],cx:a+Ie/2,cz:o+Ie/2},T=(E,I,M)=>{if(!E.count)return;let y=new Kt(E.build(M!=="road"),I);y.matrixAutoUpdate=!1,y.updateMatrix(),y.userData.kind=M,this.scene.add(y),C.meshes.push(y)};T(l,this.mats.road,"road"),T(c,this.mats.world,"core"),T(h,this.mats.world,"detail"),T(u,this.mats.bld,"bld"),t.built=C,this.live.push(t),t.cx=C.cx,t.cz=C.cz,this.built++}dropChunk(t){for(let e of t.built.meshes)this.scene.remove(e),e.geometry.dispose();t.built=null}street(t,e,n,i,r,a,o){let l=this.net,c=l.sE[r],h=l.eHw[c],u=l.eCls[c],f=l.eOne[c],p=[0,0,0,h,0,-h,0,0,0],m=9,x=t.count,g=l.eLen[c],d=l.eA[c],S=l.eB[c];for(let _=r;_<=a;_++){let v=l.px[_],C=l.py[_],T=l.pz[_],E=l.tz[_],I=-l.tx[_],M=l.sS[_],y=l.sJ[_]>=0,R=l.jEdges[d].length>=3&&M>l.jr[d]+2&&M<l.jr[d]+6,L=l.jEdges[S].length>=3&&g-M>l.jr[S]+2&&g-M<l.jr[S]+6,P=(y?1:0)+(f?2:0)+(R||L?4:0),z=l.pl[_],Y=l.pr[_],B=z>=We-.05,Z=Y>=We-.05;p[0]=h+z+(B?Rh:0),p[1]=h+z,p[2]=h+Math.min(.35,z),p[6]=-h-Math.min(.35,Y),p[7]=-h-Y,p[8]=-h-Y-(Z?Rh:0);let H=!y&&z>.6?.15:0,tt=!y&&Y>.6?.15:0;for(let st=0;st<m;st++){let gt=p[st],Rt=st===0?B?-.55:H:st===8?Z?-.55:tt:st===1||st===2?H:st===6||st===7?tt:0;t.vert(v+E*gt,C+Rt,T+I*gt,0,1,0,0,0,0),e.push(gt,M,h,P)}if(_>r){let st=x+(_-r-1)*m,gt=x+(_-r)*m;for(let Rt=0;Rt<m-1;Rt++)t.quad(st+Rt,st+Rt+1,gt+Rt+1,gt+Rt)}if(y||_===a)continue;let nt=Math.atan2(l.tx[_],l.tz[_]);if(u<=3&&_%10===0){let st=h+.9;n.model("light_modern","body",v+E*st,C+.15,T+I*st,nt+Math.PI/2,1)}if(u<=3&&_%10===5){let st=-(h+.9);n.model("light_modern","body",v+E*st,C+.15,T+I*st,nt-Math.PI/2,1)}if(_%6===3&&o()<(u>=4?.45:.3)){let st=o()<.5?1:-1,gt=st*(h+We-.7),q=C<9&&u<=2?"palm_tall":o()<.5?"tree":"tree_oak",rt=q[0]==="p"?.5+o()*.1:q==="tree"?.32+o()*.08:.4+o()*.1;n.model(q,"body",v+E*gt,C+.15,T+I*gt,o()*6.28,rt)}}}station(t,e,n){let i=this.net,r=n.e,a=i.eOff[r]+n.k,o=i.px[a],l=i.py[a]+.15,c=i.pz[a],h=i.tx[a],u=i.tz[a],f=u,p=-h,m=i.eHw[r],x=-(m+We*.35),g=o+f*x,d=c+p*x;t.box(g,l+4.6,d,8,.6,(We+3.5)/2,h,u,236,236,232),t.box(g,l+4.55,d,8.05,.12,(We+3.5)/2+.05,h,u,20,150,90);for(let v of[-6,6]){let C=o+f*-(m+We-.4)+h*v,T=c+p*-(m+We-.4)+u*v;t.box(C,l,T,.2,4.6,.2,h,u,210,210,206);let E=o+f*-(m+1.6)+h*v*.6,I=c+p*-(m+1.6)+u*v*.6;t.box(E,l,I,.5,1.7,.3,h,u,30,160,95),t.box(E,l+1.2,I,.52,.35,.32,h,u,250,250,250,!0)}let S=o+f*-(m+We+1.5)+h*11,_=c+p*-(m+We+1.5)+u*11;t.box(S,l,_,.18,7,.18,h,u,180,180,180),t.box(S,l+5.2,_,.15,2.2,1.3,h,u,20,150,90),t.box(S,l+6,_,.17,.8,1,h,u,255,210,40,!0)}building(t,e){let n=this.net.bld,i=n[e],r=n[e+1],a=n[e+2],o=[],l=0,c=0;for(let _=0;_<i;_++){let v=n[e+3+_*2],C=n[e+4+_*2];o.push(new Jt(v,C)),l+=v,c+=C}l/=i,c/=i;let h=Ch[Math.abs(Math.round(o[0].x*3+o[0].y*7))%Ch.length],u=r>24?[200,206,212]:h,f=a-3,p=a+r;t.extra||(t.extra={wuv:{a:[],n:2}});let m=t.extra.wuv.a,x=0;for(let _=0;_<i;_++){let v=o[_],C=o[(_+1)%i],T=C.x-v.x,E=C.y-v.y,I=Math.hypot(T,E);if(I<.05)continue;let M=-E/I,y=T/I,R=M*((v.x+C.x)/2-l)+y*((v.y+C.y)/2-c)>0;R||(M=-M,y=-y);let L=t.vert(v.x,f,v.y,M,0,y,u[0],u[1],u[2]),P=t.vert(C.x,f,C.y,M,0,y,u[0],u[1],u[2]),z=t.vert(C.x,p,C.y,M,0,y,u[0],u[1],u[2]),Y=t.vert(v.x,p,v.y,M,0,y,u[0],u[1],u[2]);m.push(x,-3,x+I,-3,x+I,r,x,r),R?t.quad(L,P,z,Y):t.quad(L,Y,z,P),x+=I}let g=zr.triangulateShape(o,[]),d=t.count,S=[u[0]*.84|0,u[1]*.82|0,u[2]*.78|0];for(let _ of o)t.vert(_.x,p,_.y,0,1,0,S[0],S[1],S[2]),m.push(0,0);for(let _ of g){let v=o[_[0]],C=o[_[1]],T=o[_[2]];(C.y-v.y)*(T.x-v.x)-(C.x-v.x)*(T.y-v.y)>0?t.i.push(d+_[0],d+_[1],d+_[2]):t.i.push(d+_[0],d+_[2],d+_[1])}}cull(t,e,n,i){for(let r=0;r<this.live.length;r++){let a=this.live[r],o=Math.hypot(a.cx-t,a.cz-e)-Ie*.71,l=a.built.meshes;for(let c=0;c<l.length;c++)l[c].visible=o<(l[c].userData.kind==="detail"?i:l[c].userData.kind==="bld"?n*.85:n)}}dispose(){for(let t of this.live)this.dropChunk(t);this.live=[],this.scene.remove(this.lamps),this.lamps.geometry.dispose(),this.lamps.material.dispose(),this.scene.remove(this.sea),this.sea.geometry.dispose(),this.sea.material.dispose(),this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose();for(let t in this.mats)this.mats[t].dispose()}};var og=36;function Ls(s,t,e,n){let i=(n+s.lights[t].off)%og;return e===0?i<14?0:i<17?1:2:i<18?2:i<32?0:i<35?1:2}var Ih=[["tr_sedan",15197144],["tr_suv",4212303],["tr_van",15921906],["tr_sedan",9182493],["tr_delivery",16053492],["tr_truck",2906784],["tr_taxi",14205498],["tr_sedan",13224393],["tr_suv",1780298],["tr_sedan",2830134],["tr_taxi",14205498],["tr_sedan",10134445]],Ln=99,ii=()=>(Ln^=Ln<<13,Ln>>>=0,Ln^=Ln>>17,Ln^=Ln<<5,Ln>>>=0,Ln/4294967296),Dl=class{constructor(t,e){let[n,i]=Ih[e%Ih.length];this.spec=Object.assign({},n==="tr_truck"||n==="tr_delivery"?is.t_heavy:is.t_small,{model:n}),this.veh=new ns(this.spec,Ps(n)),this.veh.assist.air=0,this.view=new rs(t,n,i),this.traffic=!0,this.player=-1,this.wreck=0,this.active=!1,this.id=e,this.e=0,this.dir=1,this.s=0,this.ne=-1,this.nd=1,this.phase=-1,this.mood=.85+ii()*.15,this.stuck=0,this.claim=-1,this.hitT=0,this.at={},this.at2={}}},ta=class{constructor(t,e,n){this.net=e,this.cars=[];for(let i=0;i<n;i++)this.cars.push(new Dl(t,i));this.t=0,this.busy=new Map,this.reach=340}lane(t,e){let n=this.net,i=n.eHw[t];return n.eOne[t]?i>3.9?-(i-1.9):0:-e*Math.min(i*.5,2.2)}pickNext(t){let e=this.net,n=t.dir>0?e.eB[t.e]:e.eA[t.e],i=[],r=0;for(let o of e.jEdges[n]){if(o===t.e&&e.jEdges[n].length>1||!e.canLeave(o,n)||e.eN[o]<4)continue;let l=e.eCls[o]<=2?3:e.eCls[o]<=3?2:1;i.push(o,l),r+=l}if(!i.length){t.ne=t.e,t.nd=-t.dir;return}let a=ii()*r;for(let o=0;o<i.length;o+=2)if(a-=i[o+1],a<=0||o===i.length-2){t.ne=i[o],t.nd=e.eA[i[o]]===n?1:-1;break}}place(t,e,n,i,r){let a=this.net,o=a.at(e,n,this.lane(e,i),t.at),l=o.fx*i,c=o.fz*i,h=t.veh;h.setPose(o.x,o.y+h.cgY+.42,o.z,Math.atan2(l,c)),h.hint=o.i;for(let u of h.wheels)u.hint=o.i;h.vx=l*r,h.vz=c*r,h.gear=1,h.reverse=!1,t.e=e,t.dir=i,t.s=n,t.active=!0,t.wreck=0,t.stuck=0,t.phase=-1,t.claim=-1,t.mood=.82+ii()*.18,this.pickNext(t)}spawn(t,e,n,i,r,a,o){let l=this.net;for(let c=0;c<24;c++){let h=ii()*Math.PI*2,u=150+ii()*(this.reach-170),f=e+Math.sin(h)*u,p=n+Math.cos(h)*u;if(c<16&&Math.sin(h)*i+Math.cos(h)*r>.55&&u<260||(l.query(f,p,-1,o),o.edge<0||o.junc>=0||l.eCls[o.edge]>=5&&ii()<.6))continue;let m=o.edge,x=l.eLen[m];if(x<30||o.s<12||o.s>x-12)continue;let g=l.eOne[m]||ii()<.5?1:-1,d=l.at(m,o.s,this.lane(m,g),t.at2),S=!0;for(let _ of a){if(_===t||_.traffic&&!_.active)continue;let v=_.veh.px-d.x,C=_.veh.pz-d.z;if(v*v+C*C<18*18){S=!1;break}}if(S)return this.place(t,m,o.s,g,6+ii()*4),!0}return!1}update(t,e,n,i){this.t+=t;let r=this.net,a=n.veh,o=Math.sin(a.yaw()),l=Math.cos(a.yaw());for(let[c,h]of this.busy)this.t-h.t>.3&&this.busy.delete(c);for(let c of this.cars){let h=c.veh;if(!c.active||c.wreck>0){if(c.wreck>0&&(c.wreck-=t,h.input.throttle=0,h.input.brake=1,h.input.steer=0,c.wreck>0))continue;this.spawn(c,a.px,a.pz,o,l,e,i);continue}let u=h.px-a.px,f=h.pz-a.pz;if(u*u+f*f>(this.reach+40)**2||c.stuck>7||h.R[4]<.3){c.active=!1,h.setPose(0,-500,0,0);continue}this.drive(c,t,e)}}drive(t,e,n){let i=this.net,r=t.veh,a=i.eLen[t.e];if(t.s=i.project(t.e,t.s,r.px,r.pz),t.dir>0&&t.s>a-.6||t.dir<0&&t.s<.6){let Z=t.dir>0?i.eB[t.e]:i.eA[t.e];t.claim,t.e=t.ne,t.dir=t.nd,a=i.eLen[t.e],t.s=t.dir>0?.6:a-.6,t.phase=-1,this.pickNext(t)}let o=t.dir>0?a-t.s:t.s,l=Math.max(0,r.fwdSpeed),c=5.5+l*.55,h=t.at;if(c<o)i.at(t.e,t.s+t.dir*c,this.lane(t.e,t.dir),h);else{let Z=Math.min(i.eLen[t.ne],c-o);i.at(t.ne,t.nd>0?Z:i.eLen[t.ne]-Z,this.lane(t.ne,t.nd),h)}let u=r.R,f=h.x-r.px,p=h.z-r.pz,m=f*u[0]+p*u[2],x=f*u[6]+p*u[8],g=2.6,d=Math.max(4,f*f+p*p),S=Math.atan2(2*g*m,d),_=r.lockAt(l);r.input.steer=Math.max(-1,Math.min(1,S/Math.max(.05,_))),x<0&&(r.input.steer=m>=0?1:-1);let v=i.eLim[t.e]/3.6*t.mood,C=i.at(t.e,t.s,0,t.at2),T=C.fx*t.dir,E=C.fz*t.dir,I=h.fx*(c<o?t.dir:t.nd),M=h.fz*(c<o?t.dir:t.nd),y=Math.acos(Math.max(-1,Math.min(1,T*I+E*M)));y>.05&&(v=Math.min(v,Math.sqrt(2.6*c/y)));let R=t.dir>0?i.eB[t.e]:i.eA[t.e],L=i.jr[R],P=o-L;if(P<60){let Z=P-2.5,H=!1,tt=i.jLight[R];if(tt>=0){if(t.phase<0){let rt=i.slot(t.e,R);t.phase=rt>=0?i.lights[tt].ph[rt]:0}let q=Ls(i,tt,t.phase,this.t);(q===2||q===1&&Z>l*l/7)&&(H=Z>-1)}else if(i.jEdges[R].length>=3&&P<9){let q=this.busy.get(R);!q||q.car===t?this.busy.set(R,{car:t,t:this.t}):Z>-.5&&(H=!0)}H&&(v=Math.min(v,Math.sqrt(2*3.2*Math.max(0,Z-.8))));let nt=i.at(t.ne,t.nd>0?3:i.eLen[t.ne]-3,0,t.at2),st=nt.fx*t.nd,gt=nt.fz*t.nd,Rt=Math.acos(Math.max(-1,Math.min(1,T*st+E*gt)));if(Rt>.45){let q=Rt>2.5?3:4+5*(1-Rt/Math.PI);v=Math.min(v,Math.sqrt(q*q+2*2.6*Math.max(0,P)))}}let z=u[6],Y=u[8];for(let Z of n){if(Z===t||Z.traffic&&!Z.active)continue;let H=Z.veh.px-r.px,tt=Z.veh.pz-r.pz,nt=H*z+tt*Y;if(nt<2||nt>40||Math.abs(H*u[0]+tt*u[2])>2.6)continue;let gt=nt-6.5,Rt=Math.max(0,Z.veh.vx*z+Z.veh.vz*Y);v=Math.min(v,Math.max(0,Rt+gt*.6)),gt<.5&&(v=0)}let B=v-l;r.input.throttle=Math.max(0,Math.min(1,B*.45)),r.input.brake=B<-.3?Math.max(0,Math.min(1,-B*.35)):0,v<.3&&(r.input.throttle=0,r.input.brake=1),r.input.handbrake=0,l<.4&&v>2.5?t.stuck+=e:t.stuck=0}dispose(){for(let t of this.cars)t.view.dispose()}};var Ph={flag:7,km:4},Ei={red:700,wrong:700,pave:500,fault:300};function lg(s){return s<20?300:s<30?500:s<40?700:1e3}var Dn=7,Un=()=>(Dn^=Dn<<13,Dn>>>=0,Dn^=Dn>>17,Dn^=Dn<<5,Dn>>>=0,Dn/4294967296),ea=class{constructor(t,e){this.net=t;let n=e||{};this.money=n.money??300,this.fuel=n.fuel??9,this.tank=40,this.stats=Object.assign({rides:0,earned:0,fines:0,repairs:0,fuel:0,km:0,best:0},n.stats),this.peds=[],this.ride=null,this.log=[],this.events=[],this.toasts=[],this.prompt="",this.limiter=0,this.cool={speed:0,pave:0},this.overT=0,this.overMax=0,this.paveT=0,this.wrongT=0,this.wrongE=-1,this.lastE=-1,this.lastRem=1e9,this.lastJ=-1,this.crash=null,this.refuel=!1,this.helpT=0,this.redT=-10,this.wrongNow=0,this.time=0,this.dirty=!1}save(){return{money:Math.round(this.money),fuel:+this.fuel.toFixed(2),stats:this.stats}}pay(t,e){this.money+=t,this.dirty=!0,e&&(this.stats[e]+=Math.abs(t))}toast(t,e){this.toasts.push({text:t,kind:e||"info",t:0})}fine(t,e,n){this.pay(-e,"fines"),this.ride&&this.ride.fines++,this.events.push({kind:"fine",title:"fine_"+t,lines:[[n||"",-e]],total:-e})}update(t,e,n,i){this.time+=t;let r=this.net,a=Math.abs(e.fwdSpeed),o=a*3.6,l=a*t;if(this.stats.km+=l/1e3,this.ride&&this.ride.ped.state==="in"&&(this.ride.km+=l/1e3,this.ride.t+=t),this.fuelTick(t,e),e.topSpeedCap=this.limiter?this.limiter/3.6:1e9,n.edge>=0&&n.junc<0){let c=n.edge,h=n.fx,u=n.fz,p=e.vx*h+e.vz*u>=0?1:-1;c!==this.lastE&&(this.lastE=c,this.lastRem=1e9,this.wrongT=0);let m=p>0?r.eB[c]:r.eA[c],x=p>0?r.eLen[c]-n.s:n.s,g=r.jLight[m];if(g>=0&&a>2){let S=r.jr[m]+1;if(this.lastRem>S&&x<=S&&this.lastJ===m){let _=r.slot(c,m),v=_>=0?r.lights[g].ph[_]:0;i(g,v)===2&&(this.fine("red",Ei.red,""),this.redT=this.time)}}this.lastRem=x,this.lastJ=m,r.eOne[c]&&p<0&&a>2?(this.wrongT+=t,this.wrongNow=1):(this.wrongT=Math.max(0,this.wrongT-t),this.wrongNow=0),this.wrongT>2.5&&this.wrongE!==c&&(this.wrongE=c,this.fine("wrong",Ei.wrong,r.edgeName(c,this.lang)||""),this.redT=this.time);let d=n.lim;this.limit=d,o>d+5?(this.overT+=t,this.overMax=Math.max(this.overMax,o-d)):(this.overT=Math.max(0,this.overT-t*2),this.overT===0&&(this.overMax=0)),this.overT>3&&this.time>this.cool.speed&&(this.fine("speed",lg(this.overMax),Math.round(d+this.overMax)+" km/h / "+d),this.cool.speed=this.time+40,this.overT=0,this.overMax=0),n.off>=1&&Math.abs(n.d)>n.hl+1.2&&a>3?this.paveT+=t:this.paveT=Math.max(0,this.paveT-t),this.paveT>1.2&&this.time>this.cool.pave&&(this.fine("pave",Ei.pave,""),this.cool.pave=this.time+30,this.paveT=0)}else this.wrongNow=0;this.speeding=this.overT>0,this.peopleTick(t,e,n),this.crashTick(t),this.prompt="",e.fuelCut&&this.fuel<=.01?this.prompt=this.helpT>0?"helpWait":"help":this.refuel?this.prompt="stop":this.nearStation(e)&&a<1.2&&this.fuel<this.tank-.5?this.prompt="refuel":this.ride&&this.ride.ped.state==="in"&&this.atDest(e)&&a<1.6?this.prompt="dropoff":!this.ride&&a<1.6&&this.nearPed(e)&&(this.prompt="pickup")}fuelTick(t,e){if(this.helpT>0){if(this.helpT-=t,this.helpT<=0){let l=150+Math.round(120.60000000000001);this.fuel+=6,this.pay(-l,"fuel"),e.fuelCut=!1,e.stalled=!1,this.events.push({kind:"help",title:"helpDone",lines:[["helpService",-150],["helpFuel",-(l-150)]],total:-l})}return}if(this.refuel){let o=Math.min(this.tank-this.fuel,5*t);this.fuel+=o,this.pay(-o*13.4,"fuel"),this.refuelL+=o,(this.fuel>=this.tank-.01||this.money<0)&&this.stopRefuel();return}if(e.fuelCut||e.stalled)return;let n=e.input.throttle,i=Math.max(e.rpm,800),a=.7+.26*Math.max(0,e.engineTorque(i)*n*i*Math.PI/30/1e3);this.fuel-=a/3600*t*4,this.fuel<=0&&(this.fuel=0,e.fuelCut=!0,this.toast("outOfFuel","bad"),this.dirty=!0),this.fuel<4&&!this.lowSaid&&(this.lowSaid=!0,this.toast("lowFuel","warn")),this.fuel>6&&(this.lowSaid=!1)}stopRefuel(){this.refuel=!1,this.refuelL>.05&&this.events.push({kind:"fuel",title:"refuelDone",lines:[["litres:"+this.refuelL.toFixed(1),-Math.round(this.refuelL*13.4)]],total:-Math.round(this.refuelL*13.4)}),this.dirty=!0}nearStation(t){let e=this.net;for(let n of e.stations){let i=e.eOff[n.e]+n.k;if(Math.hypot(e.px[i]-t.px,e.pz[i]-t.pz)<16)return!0}return!1}action(t,e){let n=this.prompt;n==="help"?(this.helpT=9,this.toast("helpComing","info")):n==="refuel"?(this.refuel=!0,this.refuelL=0):n==="stop"?this.stopRefuel():n==="pickup"?this.pickup(t,e):n==="dropoff"&&this.dropoff(t)}spawnPed(t,e){let n=this.net;for(let i=0;i<20;i++){let r=Un()*Math.PI*2,a=110+Un()*330;n.query(t.px+Math.sin(r)*a,t.pz+Math.cos(r)*a,-1,e);let o=e.edge;if(o<0||e.junc>=0||n.eCls[o]===0||n.eLen[o]<30||e.s<10||e.s>n.eLen[o]-10)continue;let l=Un()<.5?1:-1,c=n.at(o,e.s,l*(n.eHw[o]+1.7),{});if(!this.peds.some(h=>Math.hypot(h.x-c.x,h.z-c.z)<60)){this.peds.push({x:c.x,y:c.y+.15,z:c.z,yaw:Math.atan2(-l*c.lx,-l*c.lz),e:o,s:e.s,side:l,state:"wait",t:Un()*3,kind:Un()*6|0});return}}}peopleTick(t,e,n){let i=this.ride?1:4;this.peds.filter(r=>r.state==="wait").length<i&&this.time%.5<t&&this.spawnPed(e,this.q2||(this.q2={}));for(let r=this.peds.length-1;r>=0;r--){let a=this.peds[r];if(a.t+=t,a.state==="wait"&&Math.hypot(a.x-e.px,a.z-e.pz)>650){this.peds.splice(r,1);continue}if(a.state==="walk"){let o=e.R,l=e.px+o[0]*1.1*(a.side>0?1:-1)-a.x,c=e.pz+o[2]*1.1*(a.side>0?1:-1)-a.z,h=Math.hypot(l,c);if(h<.6||a.t>3)a.state="in",this.ride.t=0,this.toast("boarded","ok");else{let u=Math.min(h,2.2*t);a.x+=l/h*u,a.z+=c/h*u,a.yaw=Math.atan2(l,c)}}a.state==="out"&&(a.x+=Math.sin(a.yaw)*1.4*t,a.z+=Math.cos(a.yaw)*1.4*t,a.t>4&&this.peds.splice(r,1)),a.state==="gone"&&this.peds.splice(r,1)}}nearPed(t){let e=null,n=11;for(let i of this.peds){if(i.state!=="wait")continue;let r=Math.hypot(i.x-t.px,i.z-t.pz);r<n&&(n=r,e=i)}return e}pickup(t,e){let n=this.nearPed(t);if(!n)return;let i=this.net,r=this.q2||(this.q2={}),a=e.edge>=0?t.vx*e.fx+t.vz*e.fz>=0?1:-1:1;if(Math.abs(t.fwdSpeed)<.5&&e.edge>=0){let l=t.R;l[6]*e.fx+l[8]*e.fz<0}let o=e.edge>=0?t.R[6]*e.fx+t.R[8]*e.fz>=0?1:-1:a;for(let l=0;l<30;l++){let c=Un()*Math.PI*2,h=800+Un()*2700;i.query(t.px+Math.sin(c)*h,t.pz+Math.cos(c)*h,-1,r);let u=r.edge;if(u<0||r.junc>=0||i.eLen[u]<30||i.eCls[u]===0)continue;let f=Math.max(10,Math.min(i.eLen[u]-10,r.s)),p=i.route(e.edge>=0?e.edge:u,e.edge>=0?e.s:0,o,u,f);if(!p||p.len<600||p.len>6e3)continue;let m=Un()<.5?1:-1,x=i.at(u,f,m*(i.eHw[u]+1.7),{});n.state="walk",n.t=0,this.ride={ped:n,e:u,s:f,side:m,x:x.x,y:x.y,z:x.z,route:p,len:p.len,eta:p.len/8.2+45,t:0,km:0,hits:0,fines:0,scare:0,name:i.edgeName(u,this.lang),routeT:0},this.toast("pickup","ok");return}this.toast("noDest","warn")}atDest(t){let e=this.ride;return e&&Math.hypot(e.x-t.px,e.z-t.pz)<this.net.eHw[e.e]+14}meter(){let t=this.ride;return t?Ph.flag+Ph.km*t.km:0}dropoff(t){let e=this.ride;if(!e)return;let n=this.meter(),i=[["meterKm:"+e.km.toFixed(1),Math.round(n)]],r=n,a=e.t-e.eta;if(a>0){let l=Math.min(.6,Math.ceil(a/15)*.1);i.push(["lateBy:"+Math.round(a),-Math.round(n*l)]),r-=n*l}if(e.hits>0){let l=Math.min(1,e.hits*.25);i.push(["bumps:"+e.hits,-Math.round(n*l)]),r-=n*l}if(a<=0&&e.hits===0&&e.fines===0){let l=Math.max(2,Math.round(n*(.1+Un()*.1)));i.push(["tip",l]),r+=l}r=Math.max(0,Math.round(r)),this.pay(r,"earned"),this.stats.rides++,this.stats.best=Math.max(this.stats.best,r),this.events.push({kind:"ride",title:"rideDone",lines:i,total:r});let o=e.ped;o.state="out",o.t=0,o.x=t.px+t.R[0]*2.2*e.side,o.z=t.pz+t.R[2]*2.2*e.side,o.y=e.y+.15,o.yaw=Math.atan2(t.R[6],t.R[8]),this.peds.includes(o)||this.peds.push(o),this.ride=null}hit(t,e,n){if(t<1.3)return;this.crash||(this.crash={t:0,rel:0,car:!1,fault:!1,wall:!1});let i=this.crash;i.rel=Math.max(i.rel,t),i.t=0,e?(i.car=!0,i.fault=i.fault||n):i.wall=!0}crashTick(t){let e=this.crash;if(!e||(e.t+=t,e.t<1.2))return;this.crash=null;let n=Math.round(e.rel*3.6),i=e.wall||e.fault||this.time-this.redT<4,r=[["impact:"+n,0]],a=Math.min(14e3,Math.round(e.rel*e.rel*18/10)*10),o=0;if(i?(r.push(["repairOwn",-a]),o-=a):r.push(["repairInsured",0]),e.car&&i){let l=Math.min(14e3,Math.round(a*.9/10)*10);r.push(["repairOther",-l]),o-=l,r.push(["fineFault",-Ei.fault]),o-=Ei.fault,this.stats.fines+=Ei.fault}if(this.money+=o,this.stats.repairs+=-o-(e.car&&i?Ei.fault:0),this.dirty=!0,this.ride&&this.ride.ped.state==="in"&&(this.ride.hits++,e.rel>8.5)){let l=this.ride.ped;l.state="gone",this.ride=null,r.push(["passengerLeft",0])}this.events.push({kind:"crash",title:i?e.car?"crashYou":"crashWall":"crashThem",lines:r,total:o})}};var Lh=[[[200,60,50],[40,50,80]],[[230,220,200],[90,70,50]],[[60,120,180],[50,50,55]],[[150,60,140],[30,30,40]],[[245,245,240],[245,245,240]],[[80,140,80],[60,60,70]]],na=[[200,150,110],[170,120,85],[215,170,130]];function cg(s,t,e,n,i,r,a,o,l,c,h){let u=[[i,r,a],[o,r,a],[o,l,a],[i,l,a],[i,r,c],[o,r,c],[o,l,c],[i,l,c]],f=[[0,3,2,1,0,0,-1],[4,5,6,7,0,0,1],[0,4,7,3,-1,0,0],[1,2,6,5,1,0,0],[3,7,6,2,0,1,0],[0,1,5,4,0,-1,0]];for(let p of f){let m=s.length/3;for(let x=0;x<4;x++){let g=u[p[x]];s.push(g[0],g[1],g[2]),t.push(p[4]*127,p[5]*127,p[6]*127,0),e.push(h[0],h[1],h[2],0)}n.push(m,m+1,m+2,m,m+2,m+3)}}function Dh(s){let t=[],e=[],n=[],i=[];for(let a of s)cg(t,e,n,i,...a);let r=new pe;return r.setAttribute("position",new Ot(new Float32Array(t),3)),r.setAttribute("normal",new Ot(new Int8Array(e),4,!0)),r.setAttribute("col",new Ot(new Uint8Array(n),4,!0)),r.setIndex(i),r.computeBoundingSphere(),r}var ia=class{constructor(t,e=8){this.scene=t,this.mat=ss(),this.bodies=Lh.map((n,i)=>{let r=na[i%na.length];return Dh([[-.17,0,-.1,-.02,.85,.1,n[1]],[.02,0,-.1,.17,.85,.1,n[1]],[-.22,.85,-.13,.22,1.45,.13,n[0]],[-.3,.88,-.07,-.22,1.42,.07,n[0]],[-.11,1.46,-.11,.11,1.72,.11,r],[-.12,1.68,-.12,.12,1.76,.12,[40,30,25]]])}),this.arms=Lh.map((n,i)=>Dh([[-.04,-.55,-.07,.04,.02,.07,n[0]],[-.045,-.68,-.06,.045,-.55,.06,na[i%na.length]]])),this.pool=[];for(let n=0;n<e;n++){let i=new un,r=new Kt(this.bodies[n%this.bodies.length],this.mat),a=new Kt(this.arms[n%this.arms.length],this.mat);a.position.set(.26,1.42,0),i.add(r),i.add(a),i.visible=!1,t.add(i),this.pool.push({g:i,body:r,arm:a})}}update(t,e,n){for(let i=0;i<this.pool.length;i++){let r=this.pool[i],a=e[i];if(!a||a.state==="in"||a.state==="gone"||Math.hypot(a.x-n.x,a.z-n.z)>260){r.g.visible=!1;continue}r.g.visible=!0,r.body.geometry!==this.bodies[a.kind]&&(r.body.geometry=this.bodies[a.kind],r.arm.geometry=this.arms[a.kind]),r.g.position.set(a.x,a.y,a.z),r.g.rotation.y=a.yaw,a.state==="wait"?(r.arm.rotation.z=Math.PI*.85+Math.sin(a.t*7)*.25,r.arm.rotation.x=0):(r.arm.rotation.z=.1,r.arm.rotation.x=Math.sin(a.t*8)*.5),r.body.position.y=a.state==="wait"?0:Math.abs(Math.sin(a.t*8))*.04}}dispose(){for(let t of this.pool)this.scene.remove(t.g);for(let t of this.bodies.concat(this.arms))t.dispose();this.mat.dispose()}};is.taxi={model:"tr_taxi",cls:"T",mass:1180,power:66,torque:200,rpm:4600,gears:[3.73,2.05,1.32,.97,.76],final:4.21,cda:.68,cl:0,mu:1,steer:.62,nitro:0,drive:"f",turbo:1,cyl:4,diesel:1,shift:.4};var hg=1745860,ug=15909912;function fg(){Me.uSun.value.set(.45,.75,-.48).normalize(),Me.uSunCol.value.setRGB(1,.95,.86),Me.uSky.value.setRGB(.55,.72,.95),Me.uGround.value.setRGB(.42,.38,.32),Me.uFog.value.setRGB(.76,.83,.92),Me.uNight.value=0}var Uh=2,sa=new Float32Array(8),ra=class{constructor(t,e,n,i){this.renderer=t,this.net=e,this.quality=n,this.opts=i,this.scene=new Cr,fg();let r=n.tier==="low"?480:n.tier==="mid"?620:800;Me.uFogFar.value=r,Me.uFogNear.value=r*.3,this.far=r,this.detailFar=r*.5,this.city=new Qr(this.scene,e,n),this.city.reach=r+60;let a=is.taxi;this.me={veh:new ns(a,Ps(a.model),i.upgrades),spec:a,player:0,wreck:0,traffic:!1,active:!0},this.me.view=new rs(this.scene,a.model,hg,ug);let o=this.me.veh;o.gearbox=i.gearbox==="auto"?null:i.gearbox,o.mgear=1,this.q={},this.qp={},this.taxi=new ea(e,i.saved),this.taxi.lang=i.lang,this.start(i.start),this.traffic=new ta(this.scene,e,n.tier==="low"?9:13),this.all=[this.me].concat(this.traffic.cars),this.people=new ia(this.scene),this.cam=new Jr(16/9,r+60),this.cam.shakeOn=n.tier!=="low",this.fx=new jr(this.scene,n.tier,Yr(8947848));let l=new Es(1.4,1.4,60,10,1,!0);l.translate(0,30,0);let c=new Uint8Array(l.attributes.position.count*4);for(let h=0;h<l.attributes.position.count;h++){let u=l.attributes.position.getY(h);c[h*4]=40,c[h*4+1]=255,c[h*4+2]=140,c[h*4+3]=u<1?200:0}l.setAttribute("col",new Ot(c,4,!0)),this.beacon=new Kt(l,new ue({transparent:!0,depthWrite:!1,side:en,blending:xi,vertexShader:"attribute vec4 col; varying vec4 vC; void main(){ vC = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 0.9, 1.0); }"})),this.beacon.visible=!1,this.beacon.renderOrder=4,this.beacon.frustumCulled=!1,this.scene.add(this.beacon),this.race={players:[this.me],racers:this.all},this.lightT=0,this.routeT=0,this.time=0,this.city.stream(o.px,o.pz,0,!0),this.city.setLamps((h,u)=>Ls(e,h,u,this.traffic.t)),this.frameMs=16.7,this.scale=n.scale||1,this.lateFrames=0,this.goodFrames=0,this.size=new Jt,this.shiftMsg=""}start(t){let e=this.net,n=this.q,i=t?t.x:2350,r=t?t.z:-1780,a=-1,o=1e18;for(let u=0;u<e.ne;u++){if(e.eCls[u]>3||e.eLen[u]<60)continue;let f=e.eOff[u]+(e.eN[u]>>1),p=Math.hypot(e.px[f]-i,e.pz[f]-r);p<o&&(o=p,a=u)}let l=a,c=e.at(l,e.eLen[l]/2,e.eOne[l]?0:-e.eHw[l]*.5,{}),h=this.me.veh;h.setPose(c.x,c.y+h.cgY+.45,c.z,Math.atan2(c.fx,c.fz))}update(t,e){this.time+=t;let n=this.me,i=n.veh,r=e.ctl,a=this.taxi;i.input.steer=r.steer,i.input.throttle=r.throttle,i.input.brake=r.brake,i.input.handbrake=r.handbrake,i.input.clutch=r.clutch;let o=e.edge;o.camera&&(this.cam.mode=(this.cam.mode+1)%3),i.gearbox&&(o.gearUp||o.gearDown)&&i.shift(o.gearUp?1:-1)==="clutch"&&a.toast("needClutch","warn"),o.up&&(a.limiter=a.limiter?Math.min(130,a.limiter+10):Math.max(30,Math.ceil(Math.abs(i.fwdSpeed)*3.6/10)*10)),o.down&&a.limiter&&(a.limiter=a.limiter<=30?0:a.limiter-10),o.action&&a.action(i,this.qp),i.hold=!!(a.refuel||a.helpT>0),i.hold&&(i.input.throttle=0,i.input.brake=0),this.traffic.update(t,this.all,n,this.q);let l=t/Uh,c=this.all,h=this.net,u=this.q;for(let m=0;m<Uh;m++){for(let x=0;x<c.length;x++){let g=c[x];if(!g.active)continue;g.veh.step(l,h,u),g.veh.groundY=u.y,this.wall(g.veh)>0&&g===n&&this.onHit(null,le.rel)}for(let x=0;x<c.length;x++){let g=c[x];if(g.active)for(let d=x+1;d<c.length;d++){let S=c[d];!S.active||Eh(g.veh,S.veh)<=0||(le.rel>3&&this.fx.spark(le.px,le.py,le.pz,g.veh.vx,g.veh.vz,Math.min(12,2+le.rel*.5|0)),g===n||S===n?this.onHit(g===n?S:g,le.rel,g===n):le.rel>4&&(g.wreck=g.wreck||0,S.stuck=(S.stuck||0)+1))}}}if(h.query(i.px,i.pz,i.hint,this.qp),a.update(t,i,this.qp,(m,x)=>Ls(h,m,x,this.traffic.t)),a.ride&&a.ride.ped.state==="in"&&(this.routeT-=t)<=0&&this.qp.edge>=0){this.routeT=4;let m=a.ride,x=i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1,g=h.route(this.qp.edge,this.qp.s,x,m.e,m.s);g&&(m.route=g,m.left=g.len)}(this.lightT-=t)<=0&&(this.lightT=.25,this.city.setLamps((m,x)=>Ls(h,m,x,this.traffic.t))),Me.uTime.value+=t;let f=this.fx;for(let m=0;m<4;m++){let x=i.wheels[m],g=Math.max(x.slipLat,x.slipLong);x.contact&&g>.35&&i.speed>4?(f.skids.add(m,x.cx,x.cy,x.cz,i.R[0],i.R[2],g),Math.random()<g*.4&&f.puff(x.cx,x.cy,x.cz,i.vx,i.vz,g)):f.skids.add(m,0,0,0,0,0,0)}f.update(t),this.people.update(t,a.peds,this.cam.cam.position),this.cam.update(t,n);let p=a.ride;this.beacon.visible=!!(p&&p.ped.state==="in"),this.beacon.visible&&this.beacon.position.set(p.x,p.y,p.z)}onHit(t,e,n){let i=this.me.veh;this.cam.kick(Math.min(.8,e*.04)),this.onSound&&this.onSound("hit",this.me,e);let r=!0;if(t){let a=le.nx*(n?1:-1),o=le.nz*(n?1:-1),l=i.vx*a+i.vz*o,c=-(t.veh.vx*a+t.veh.vz*o);r=l>c+.6||t.veh.speed<.8}this.taxi.hit(e,t,r)}wall(t){let e=t.R,n=this.q,i=e[0],r=e[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=e[6],l=e[8],c=Math.hypot(o,l)||1;o/=c,l/=c;let h=0;for(let P=-1;P<=1;P+=2)for(let z=-1;z<=1;z+=2)sa[h++]=t.px-e[6]*t.cgZ+i*t.half.x*P+o*t.half.z*z,sa[h++]=t.pz-e[8]*t.cgZ+r*t.half.x*P+l*t.half.z*z;let u=0,f=0,p=0,m=0,x=0;for(let P=0;P<4;P++){let z=sa[P*2],Y=sa[P*2+1];if(this.net.query(z,Y,t.hint,n),n.junc>=0||n.edge<0)continue;let B=Math.abs(n.d)-n.wall;if(B>u){u=B,f=z,p=Y;let Z=n.d>=0?-1:1;m=n.lx*Z,x=n.lz*Z}}if(u<=0)return 0;t.px+=m*u,t.pz+=x*u;let g=t.py+.15,d=f-t.px,S=g-t.py,_=p-t.pz,v=t.vx+(t.wy*_-t.wz*S),C=t.vy+(t.wz*d-t.wx*_),T=t.vz+(t.wx*S-t.wy*d),E=v*m+T*x;if(E>=0)return 0;let I=t.invMassAt(d,S,_,m,0,x),M=-(1+.15)*E/I;t.impulse(m*M,0,x*M,d,S,_);let y=v-m*E,R=T-x*E,L=Math.hypot(y,R);if(L>.05){let P=Math.min(M*.3,L/I);t.impulse(-y/L*P,0,-R/L*P,d,S,_)}return le.j=M,le.rel=-E,le.nx=m,le.nz=x,le.px=f,le.py=g,le.pz=p,M}render(t){let e=this.renderer,n=this.cam.cam;this.budget(t),e.getSize(this.size),n.aspect=this.size.x/this.size.y,n.updateProjectionMatrix();let i=this.me.veh;this.city.stream(i.px,i.pz,this.quality.tier==="low"?3:5,!1),this.city.cull(n.position.x,n.position.z,this.far,this.detailFar),this.city.sky.position.copy(n.position);for(let r of this.all){if(!r.active){r.view.root.visible=!1,r.view.shadow.visible=!1;continue}let a=r.veh.px-n.position.x,o=r.veh.pz-n.position.z;r.view.sync(r.veh,Math.sqrt(a*a+o*o),0,r.veh.input.brake>.2?1:0)}this.fx.streaks.update(1/60,n,0,!1),e.render(this.scene,n)}budget(t){if(!t)return;t>18.5?this.lateFrames++:this.lateFrames=Math.max(0,this.lateFrames-1),t<15.5?this.goodFrames++:this.goodFrames=0;let e=this.quality.minScale||.5,n=this.quality.scale||1;this.lateFrames>10&&this.scale>e?(this.scale=Math.max(e,this.scale-.1),this.lateFrames=0,this.onScale&&this.onScale(this.scale)):this.goodFrames>240&&this.scale<n&&(this.scale=Math.min(n,this.scale+.05),this.goodFrames=0,this.onScale&&this.onScale(this.scale))}dispose(){this.city.dispose(),this.traffic.dispose(),this.me.view.dispose(),this.people.dispose(),this.scene.remove(this.beacon),this.beacon.geometry.dispose(),this.beacon.material.dispose();let t=this.fx;for(let e of[t.sparks.points,t.smoke.points,t.skids.mesh,t.streaks.lines])e.geometry.dispose(),e.material.dispose()}};var Xe={A:0,B:1,X:2,Y:3,L:4,R:5,ZL:6,ZR:7,MINUS:8,PLUS:9,UP:12,DOWN:13,LEFT:14,RIGHT:15},aa=class{constructor(){this.pads={},this.acts={},this.ctl={steer:0,throttle:0,brake:0,handbrake:0,clutch:0},this.edge={action:0,up:0,down:0,camera:0,map:0},this.prev={},this.menuCb=null,this.dead=.14,this.steerNow=0}pad(t){return this.pads[t]||(this.pads[t]={b:new Float32Array(24),a:new Float32Array(4)})}onAction(t,e,n,i){if(n){this.menuCb&&this.menuCb(t,i,!0);return}i&&i.indexOf("pad")===0||((this.acts[i]||(this.acts[i]={}))[t]=e),e&&this.menuCb&&this.menuCb(t,i,!1)}onButton(t,e,n,i){this.pad(i).b[t]=e?Math.max(.01,n||1):0}onAxes(t,e){let n=this.pad(e);for(let i=0;i<4&&i<t.length;i++)n.a[i]=t[i]}btn(t){let e=0;for(let n in this.pads){let i=this.pads[n].b[t];i>e&&(e=i)}return e}axis(t){let e=0;for(let n in this.pads){let i=this.pads[n].a[t];Math.abs(i)>Math.abs(e)&&(e=i)}return e}act(t){for(let e in this.acts)if(this.acts[e][t])return 1;return 0}rise(t,e){let n=e&&!this.prev[t]?1:0;return this.prev[t]=e,n}poll(t){let e=this.ctl,n=this.axis(0);n=Math.abs(n)>this.dead?(n-Math.sign(n)*this.dead)/(1-this.dead):0;let i=(this.btn(Xe.LEFT)>0||this.act("left")?1:0)-(this.btn(Xe.RIGHT)>0||this.act("right")?1:0);i?(this.steerNow+=(i-this.steerNow)*Math.min(1,t*5),e.steer=this.steerNow):(this.steerNow=0,e.steer=-Math.sign(n)*Math.pow(Math.abs(n),1.5)),e.throttle=Math.max(this.btn(Xe.ZR),this.act("up")),e.brake=Math.max(this.btn(Xe.ZL),this.act("down")),e.handbrake=this.btn(Xe.B)>.3?1:0;let r=this.btn(Xe.X);e.clutch=r>.02&&r<.98?r:r>=.98?1:Math.max(0,e.clutch-t/.9);let a=this.edge;a.action=this.rise("action",this.btn(Xe.A)>.3||this.act("jump")),a.camera=this.rise("camera",this.btn(Xe.Y)>.3),a.up=this.rise("up",this.btn(Xe.UP)>.3),a.down=this.rise("down",this.btn(Xe.DOWN)>.3),a.gearUp=this.rise("gu",this.btn(Xe.R)>.3),a.gearDown=this.rise("gd",this.btn(Xe.L)>.3),a.map=this.rise("map",this.btn(Xe.MINUS)>.3)}clearHeld(){for(let t in this.acts)this.acts[t]={};for(let t in this.pads)this.pads[t].b.fill(0),this.pads[t].a.fill(0);this.prev={}}hasPad(){for(let t in this.pads)return!0;return!1}};var oa={en:{tag:"Drive the real streets of Tangier",press:"Press OK to start",start:"Start the shift",settings:"Settings",help:"Controls",resume:"Resume",quit:"End the shift",back:"Back",gearbox:"Gearbox",auto:"Automatic",manual:"Manual",clutch:"Manual + clutch",limiter:"Speed limiter",off:"Off",money:"Cash",rides:"Rides",fuel:"Fuel",paused:"Paused",pickup:"Pick up the passenger",dropoff:"Drop off the passenger",refuel:"Refuel",stop:"Stop refuelling",help_:"Call roadside help",helpWait:"Help is on its way\u2026",to:"To",eta:"Time left",late:"Late",meter:"Meter",fine_speed:"Fine: speeding",fine_red:"Fine: red light",fine_wrong:"Fine: wrong way (one-way street)",fine_pave:"Fine: driving on the pavement",rideDone:"Ride paid",crashYou:"Accident: your fault",crashThem:"Accident: the other driver's fault",crashWall:"Accident: you hit the kerb wall",impact:"Impact at {0} km/h",repairOwn:"Repairs to your taxi",repairOther:"Damage to the other car",repairInsured:"Repairs paid by the other driver's insurance",fineFault:"Fine: loss of control",passengerLeft:"The passenger got out without paying",helpDone:"Roadside help",helpService:"Call-out",helpFuel:"6 L of diesel",refuelDone:"Refuelled",litres:"{0} L of diesel",tip:"Tip",bumps:"Bumps on the way ({0})",lateBy:"Late by {0} s",meterKm:"Meter, {0} km",outOfFuel:"Out of fuel! Press A to call roadside help.",lowFuel:"Fuel is low: find a fuel station (green on the map).",helpComing:"Help is coming",boarded:"Passenger on board: follow the green route",noDest:"The passenger changed their mind",needClutch:"Press the clutch (X) to change gear",stalled:"Stalled: press the clutch fully to restart",limit:"Limit",total:"Total",wrongWay:"WRONG WAY",slowDown:"SLOW DOWN",ctlTitle:"Controls",ctlDrive:"ZR accelerate \xB7 ZL brake / reverse \xB7 stick or D-pad steer \xB7 B handbrake",ctlAct:"A pick up / drop off / refuel \xB7 Y camera \xB7 \u25B2 \u25BC speed limiter \xB7 + pause",ctlGear:"Manual gearbox: R gear up \xB7 L gear down \xB7 X clutch (hold)",ctlRemote:"TV remote: \u25C0 \u25B6 steer \xB7 \u25B2 accelerate \xB7 \u25BC brake \xB7 OK action \xB7 Back pause",rules:"Rules of the road",rulesText:"Respect the speed limit on the sign, stop at red lights, never drive up a one-way street the wrong way and stay off the pavement: the police fine you. Every accident is assessed: when it is your fault you pay the repairs, the other car and a fine.",stats:"Shift so far",earned:"Earned",fines:"Fines",repairs:"Repairs",fuelSpent:"Fuel",km:"km driven",best:"Best fare",credits:"Streets and buildings \xA9 OpenStreetMap contributors (ODbL). Heights: AWS Terrain Tiles. Models and sounds: Kenney (CC0)."},fr:{tag:"Conduisez dans les vraies rues de Tanger",press:"Appuyez sur OK pour commencer",start:"Commencer le service",settings:"R\xE9glages",help:"Commandes",resume:"Reprendre",quit:"Finir le service",back:"Retour",gearbox:"Bo\xEEte de vitesses",auto:"Automatique",manual:"Manuelle",clutch:"Manuelle + embrayage",limiter:"Limiteur de vitesse",off:"Arr\xEAt",money:"Caisse",rides:"Courses",fuel:"Carburant",paused:"Pause",pickup:"Prendre le client",dropoff:"D\xE9poser le client",refuel:"Faire le plein",stop:"Arr\xEAter le plein",help_:"Appeler le d\xE9pannage",helpWait:"Le d\xE9pannage arrive\u2026",to:"Vers",eta:"Temps restant",late:"En retard",meter:"Compteur",fine_speed:"Amende : exc\xE8s de vitesse",fine_red:"Amende : feu rouge grill\xE9",fine_wrong:"Amende : sens interdit",fine_pave:"Amende : circulation sur le trottoir",rideDone:"Course pay\xE9e",crashYou:"Accident : votre faute",crashThem:"Accident : faute de l'autre conducteur",crashWall:"Accident : choc contre le mur du trottoir",impact:"Choc \xE0 {0} km/h",repairOwn:"R\xE9paration de votre taxi",repairOther:"D\xE9g\xE2ts de l'autre voiture",repairInsured:"R\xE9paration pay\xE9e par l'assurance de l'autre conducteur",fineFault:"Amende : d\xE9faut de ma\xEEtrise",passengerLeft:"Le client est descendu sans payer",helpDone:"D\xE9pannage",helpService:"D\xE9placement",helpFuel:"6 L de gasoil",refuelDone:"Plein fait",litres:"{0} L de gasoil",tip:"Pourboire",bumps:"Chocs pendant la course ({0})",lateBy:"Retard de {0} s",meterKm:"Compteur, {0} km",outOfFuel:"Panne s\xE8che ! Appuyez sur A pour appeler le d\xE9pannage.",lowFuel:"R\xE9serve : trouvez une station (vert sur la carte).",helpComing:"Le d\xE9pannage arrive",boarded:"Client \xE0 bord : suivez l'itin\xE9raire vert",noDest:"Le client a chang\xE9 d'avis",needClutch:"Appuyez sur l'embrayage (X) pour changer de vitesse",stalled:"Cal\xE9 : appuyez \xE0 fond sur l'embrayage pour red\xE9marrer",limit:"Limite",total:"Total",wrongWay:"SENS INTERDIT",slowDown:"RALENTISSEZ",ctlTitle:"Commandes",ctlDrive:"ZR acc\xE9l\xE9rer \xB7 ZL freiner / reculer \xB7 stick ou croix diriger \xB7 B frein \xE0 main",ctlAct:"A prendre / d\xE9poser / plein \xB7 Y cam\xE9ra \xB7 \u25B2 \u25BC limiteur \xB7 + pause",ctlGear:"Bo\xEEte manuelle : R monter \xB7 L descendre \xB7 X embrayage (maintenir)",ctlRemote:"T\xE9l\xE9commande : \u25C0 \u25B6 diriger \xB7 \u25B2 acc\xE9l\xE9rer \xB7 \u25BC freiner \xB7 OK action \xB7 Retour pause",rules:"Code de la route",rulesText:"Respectez la limite du panneau, arr\xEAtez-vous au feu rouge, ne prenez jamais un sens interdit et ne roulez pas sur le trottoir : la police verbalise. Chaque accident est expertis\xE9 : si c'est votre faute, vous payez les r\xE9parations, l'autre voiture et une amende.",stats:"Service en cours",earned:"Gagn\xE9",fines:"Amendes",repairs:"R\xE9parations",fuelSpent:"Carburant",km:"km parcourus",best:"Meilleure course",credits:"Rues et b\xE2timents \xA9 contributeurs OpenStreetMap (ODbL). Relief : AWS Terrain Tiles. Mod\xE8les et sons : Kenney (CC0)."},es:{tag:"Conduce por las calles reales de T\xE1nger",press:"Pulsa OK para empezar",start:"Empezar el turno",settings:"Ajustes",help:"Controles",resume:"Seguir",quit:"Terminar el turno",back:"Volver",gearbox:"Caja de cambios",auto:"Autom\xE1tica",manual:"Manual",clutch:"Manual + embrague",limiter:"Limitador de velocidad",off:"No",money:"Caja",rides:"Carreras",fuel:"Combustible",paused:"Pausa",pickup:"Recoger al pasajero",dropoff:"Dejar al pasajero",refuel:"Repostar",stop:"Dejar de repostar",help_:"Llamar a la gr\xFAa",helpWait:"La ayuda est\xE1 en camino\u2026",to:"Hacia",eta:"Tiempo",late:"Tarde",meter:"Tax\xEDmetro",fine_speed:"Multa: exceso de velocidad",fine_red:"Multa: sem\xE1foro en rojo",fine_wrong:"Multa: sentido contrario",fine_pave:"Multa: circular por la acera",rideDone:"Carrera pagada",crashYou:"Accidente: culpa tuya",crashThem:"Accidente: culpa del otro conductor",crashWall:"Accidente: golpe contra el muro",impact:"Choque a {0} km/h",repairOwn:"Reparaci\xF3n de tu taxi",repairOther:"Da\xF1os del otro coche",repairInsured:"Reparaci\xF3n pagada por el seguro del otro conductor",fineFault:"Multa: p\xE9rdida de control",passengerLeft:"El pasajero se baj\xF3 sin pagar",helpDone:"Asistencia en carretera",helpService:"Desplazamiento",helpFuel:"6 L de gas\xF3leo",refuelDone:"Dep\xF3sito lleno",litres:"{0} L de gas\xF3leo",tip:"Propina",bumps:"Golpes en el viaje ({0})",lateBy:"{0} s de retraso",meterKm:"Tax\xEDmetro, {0} km",outOfFuel:"\xA1Sin combustible! Pulsa A para llamar a la asistencia.",lowFuel:"Reserva: busca una gasolinera (verde en el mapa).",helpComing:"La ayuda viene",boarded:"Pasajero a bordo: sigue la ruta verde",noDest:"El pasajero cambi\xF3 de idea",needClutch:"Pisa el embrague (X) para cambiar de marcha",stalled:"Calado: pisa el embrague a fondo para arrancar",limit:"L\xEDmite",total:"Total",wrongWay:"SENTIDO CONTRARIO",slowDown:"FRENA",ctlTitle:"Controles",ctlDrive:"ZR acelerar \xB7 ZL frenar / marcha atr\xE1s \xB7 stick o cruceta girar \xB7 B freno de mano",ctlAct:"A recoger / dejar / repostar \xB7 Y c\xE1mara \xB7 \u25B2 \u25BC limitador \xB7 + pausa",ctlGear:"Cambio manual: R subir \xB7 L bajar \xB7 X embrague (mantener)",ctlRemote:"Mando de la tele: \u25C0 \u25B6 girar \xB7 \u25B2 acelerar \xB7 \u25BC frenar \xB7 OK acci\xF3n \xB7 Atr\xE1s pausa",rules:"Normas de tr\xE1fico",rulesText:"Respeta el l\xEDmite de la se\xF1al, para en rojo, nunca entres en direcci\xF3n prohibida y no circules por la acera: la polic\xEDa multa. Cada accidente se peritan: si es culpa tuya pagas las reparaciones, el otro coche y una multa.",stats:"Turno actual",earned:"Ganado",fines:"Multas",repairs:"Reparaciones",fuelSpent:"Combustible",km:"km recorridos",best:"Mejor carrera",credits:"Calles y edificios \xA9 colaboradores de OpenStreetMap (ODbL). Relieve: AWS Terrain Tiles. Modelos y sonidos: Kenney (CC0)."},ar:{tag:"\u0642\u064F\u062F \u0641\u064A \u0634\u0648\u0627\u0631\u0639 \u0637\u0646\u062C\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",press:"\u0627\u0636\u063A\u0637 OK \u0644\u0644\u0628\u062F\u0621",start:"\u0627\u0628\u062F\u0623 \u0627\u0644\u0639\u0645\u0644",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",help:"\u0627\u0644\u062A\u062D\u0643\u0645",resume:"\u0645\u062A\u0627\u0628\u0639\u0629",quit:"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0645\u0644",back:"\u0631\u062C\u0648\u0639",gearbox:"\u0639\u0644\u0628\u0629 \u0627\u0644\u0633\u0631\u0639\u0627\u062A",auto:"\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643",manual:"\u064A\u062F\u0648\u064A",clutch:"\u064A\u062F\u0648\u064A + \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636",limiter:"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629",off:"\u0645\u062A\u0648\u0642\u0641",money:"\u0627\u0644\u0635\u0646\u062F\u0648\u0642",rides:"\u0627\u0644\u0631\u062D\u0644\u0627\u062A",fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",pickup:"\u0623\u0631\u0643\u0628 \u0627\u0644\u0632\u0628\u0648\u0646",dropoff:"\u0623\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646",refuel:"\u0627\u0645\u0644\u0623 \u0627\u0644\u062E\u0632\u0627\u0646",stop:"\u0623\u0648\u0642\u0641 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",help_:"\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",helpWait:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642\u2026",to:"\u0625\u0644\u0649",eta:"\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062A\u0628\u0642\u064A",late:"\u0645\u062A\u0623\u062E\u0631",meter:"\u0627\u0644\u0639\u062F\u0627\u062F",fine_speed:"\u0645\u062E\u0627\u0644\u0641\u0629: \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0633\u0631\u0639\u0629",fine_red:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631",fine_wrong:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0645\u0646\u0648\u0639",fine_pave:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0633\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641",rideDone:"\u062F\u064F\u0641\u0639\u062A \u0627\u0644\u0631\u062D\u0644\u0629",crashYou:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0624\u0643",crashThem:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0623 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",crashWall:"\u062D\u0627\u062F\u062B: \u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u062D\u0627\u0641\u0629 \u0627\u0644\u0631\u0635\u064A\u0641",impact:"\u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u0633\u0631\u0639\u0629 {0} \u0643\u0645/\u0633",repairOwn:"\u0625\u0635\u0644\u0627\u062D \u0633\u064A\u0627\u0631\u062A\u0643",repairOther:"\u0623\u0636\u0631\u0627\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649",repairInsured:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0639\u0644\u0649 \u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",fineFault:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0639\u062F\u0645 \u0627\u0644\u062A\u062D\u0643\u0645",passengerLeft:"\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646 \u062F\u0648\u0646 \u0623\u0646 \u064A\u062F\u0641\u0639",helpDone:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642",helpService:"\u0627\u0644\u062A\u0646\u0642\u0644",helpFuel:"6 \u0644\u062A\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",refuelDone:"\u062A\u0645\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",litres:"{0} \u0644\u062A\u0631 \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",tip:"\u0628\u0642\u0634\u064A\u0634",bumps:"\u0635\u062F\u0645\u0627\u062A \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629 ({0})",lateBy:"\u062A\u0623\u062E\u0631 {0} \u062B",meterKm:"\u0627\u0644\u0639\u062F\u0627\u062F\u060C {0} \u0643\u0645",outOfFuel:"\u0646\u0641\u062F \u0627\u0644\u0648\u0642\u0648\u062F! \u0627\u0636\u063A\u0637 A \u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",lowFuel:"\u0627\u0644\u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636: \u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062D\u0637\u0629 (\u0628\u0627\u0644\u0623\u062E\u0636\u0631 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629).",helpComing:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0642\u0627\u062F\u0645\u0629",boarded:"\u0627\u0644\u0632\u0628\u0648\u0646 \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0629: \u0627\u062A\u0628\u0639 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0623\u062E\u0636\u0631",noDest:"\u063A\u064A\u0651\u0631 \u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0623\u064A\u0647",needClutch:"\u0627\u0636\u063A\u0637 \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636 (X) \u0644\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0633\u0631\u0639\u0629",stalled:"\u062A\u0648\u0642\u0641 \u0627\u0644\u0645\u062D\u0631\u0643: \u0627\u0636\u063A\u0637 \u0627\u0644\u0642\u0627\u0628\u0636 \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",limit:"\u0627\u0644\u062D\u062F",total:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639",wrongWay:"\u0627\u062A\u062C\u0627\u0647 \u0645\u0645\u0646\u0648\u0639",slowDown:"\u062E\u0641\u0641 \u0627\u0644\u0633\u0631\u0639\u0629",ctlTitle:"\u0627\u0644\u062A\u062D\u0643\u0645",ctlDrive:"ZR \u062A\u0633\u0627\u0631\u0639 \xB7 ZL \u0641\u0631\u0627\u0645\u0644 / \u0631\u062C\u0648\u0639 \xB7 \u0627\u0644\u0639\u0635\u0627 \u0623\u0648 \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0648\u062C\u064A\u0647 \xB7 B \u0641\u0631\u0627\u0645\u0644 \u0627\u0644\u064A\u062F",ctlAct:"A \u0625\u0631\u0643\u0627\u0628 / \u0625\u0646\u0632\u0627\u0644 / \u062A\u0639\u0628\u0626\u0629 \xB7 Y \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \xB7 \u25B2 \u25BC \u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 + \u0625\u064A\u0642\u0627\u0641",ctlGear:"\u0639\u0644\u0628\u0629 \u064A\u062F\u0648\u064A\u0629: R \u0631\u0641\u0639 \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 L \u062E\u0641\u0636\u0647\u0627 \xB7 X \u0627\u0644\u0642\u0627\u0628\u0636 (\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B)",ctlRemote:"\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u062D\u0643\u0645: \u25C0 \u25B6 \u062A\u0648\u062C\u064A\u0647 \xB7 \u25B2 \u062A\u0633\u0627\u0631\u0639 \xB7 \u25BC \u0641\u0631\u0627\u0645\u0644 \xB7 OK \u0625\u062C\u0631\u0627\u0621 \xB7 \u0631\u062C\u0648\u0639 \u0625\u064A\u0642\u0627\u0641",rules:"\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0633\u064A\u0631",rulesText:"\u0627\u062D\u062A\u0631\u0645 \u062D\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0644\u0648\u062D\u0629\u060C \u0648\u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631\u060C \u0648\u0644\u0627 \u062A\u062F\u062E\u0644 \u0634\u0627\u0631\u0639\u0627\u064B \u0645\u0645\u0646\u0648\u0639\u0627\u064B\u060C \u0648\u0644\u0627 \u062A\u0633\u0650\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641: \u0627\u0644\u0634\u0631\u0637\u0629 \u062A\u062D\u0631\u0631 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A. \u0643\u0644 \u062D\u0627\u062F\u062B \u064A\u064F\u0642\u064A\u064E\u0651\u0645: \u0625\u0630\u0627 \u0643\u0627\u0646 \u062E\u0637\u0623\u0643 \u062A\u062F\u0641\u0639 \u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 \u0648\u0645\u062E\u0627\u0644\u0641\u0629.",stats:"\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u0639\u0645\u0644",earned:"\u0627\u0644\u0645\u062F\u0627\u062E\u064A\u0644",fines:"\u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A",repairs:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D\u0627\u062A",fuelSpent:"\u0627\u0644\u0648\u0642\u0648\u062F",km:"\u0643\u0645 \u0645\u0642\u0637\u0648\u0639\u0629",best:"\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0629",credits:"\u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064A \xA9 \u0645\u0633\u0627\u0647\u0645\u0648 OpenStreetMap (ODbL). \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633: AWS Terrain Tiles. \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A: Kenney (CC0)."}},Dt={lang:"en",set(s){this.lang=oa[s]?s:"en",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"},t(s,...t){let e=oa[this.lang]&&oa[this.lang][s]||oa.en[s]||s;return t.forEach((n,i)=>{e=e.replace("{"+i+"}",n)}),e},line(s){let t=s.indexOf(":");return t<0?this.t(s):this.t(s.slice(0,t),s.slice(t+1))}};var Ul=["auto","manual","clutch"],la=class{constructor(t,e){this.app=t,this.root=e,this.items=[],this.f=0,this.back=null,this.screen=""}show(t,e,n,i){this.root.innerHTML=t,this.root.style.display="block",this.items=[...this.root.querySelectorAll("[data-f]")],this.acts=e,this.back=n,this.f=Math.min(i||0,this.items.length-1),this.paint()}hide(){this.root.style.display="none",this.root.innerHTML="",this.items=[],this.screen=""}get open(){return this.root.style.display==="block"}paint(){this.items.forEach((t,e)=>t.classList.toggle("focus",e===this.f))}input(t,e,n){if(!this.open)return!1;if(t==="up"||t==="left")this.f=(this.f+this.items.length-1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="down"||t==="right")this.f=(this.f+1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="confirm"&&!n){let i=this.acts[this.f];this.app.sound.ui("ok"),i&&i()}else if((t==="cancel"||t==="menu")&&!n)if(this.back)this.app.sound.ui("back"),this.back();else return!1;return!0}gearLabel(){return Dt.t(this.app.settings.gearbox==="auto"?"auto":this.app.settings.gearbox)}title(){this.screen="title";let t=this.app.saved&&this.app.saved.stats;this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${Dt.t("tag")}</div>
<div class="menu"><div class="btn go" data-f>${Dt.t("start")}</div><div class="btn" data-f>${Dt.t("gearbox")}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${Dt.t("help")}</div></div>
${t?`<div class="mini">${Dt.t("money")} <b>${Math.round(this.app.saved.money)} DH</b> \xB7 ${Dt.t("rides")} <b>${t.rides}</b> \xB7 ${t.km.toFixed(0)} ${Dt.t("km")}</div>`:""}
<div class="foot">${Dt.t("credits")}</div></div>`,[()=>this.app.startShift(),()=>this.cycleGear(()=>this.title(),1),()=>this.controls(()=>this.title())],null)}cycleGear(t,e){let n=this.app.settings;n.gearbox=Ul[(Ul.indexOf(n.gearbox)+1)%Ul.length],this.app.saveSettings(),this.app.shift&&this.app.applyGear(),t(),this.f=e,this.paint()}controls(t){this.show(`<div class="panel"><h2>${Dt.t("ctlTitle")}</h2><p>${Dt.t("ctlDrive")}</p><p>${Dt.t("ctlAct")}</p><p>${Dt.t("ctlGear")}</p><p>${Dt.t("ctlRemote")}</p>
<h3>${Dt.t("rules")}</h3><p class="small">${Dt.t("rulesText")}</p><div class="btn" data-f>${Dt.t("back")}</div></div>`,[t],t)}pause(){this.screen="pause";let t=this.app.shift.taxi,e=t.stats,n=(i,r)=>`<div class="st"><span>${Dt.t(i)}</span><b>${r}</b></div>`;this.show(`<div class="panel pause"><h2>${Dt.t("paused")}</h2>
<div class="stats">${n("money",Math.round(t.money)+" DH")}${n("rides",e.rides)}${n("earned",Math.round(e.earned)+" DH")}${n("fines",Math.round(e.fines)+" DH")}${n("repairs",Math.round(e.repairs)+" DH")}${n("fuelSpent",Math.round(e.fuel)+" DH")}${n("km",e.km.toFixed(1))}</div>
<div class="btn go" data-f>${Dt.t("resume")}</div><div class="btn" data-f>${Dt.t("gearbox")}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${Dt.t("limiter")}: <b>${t.limiter?t.limiter+" km/h":Dt.t("off")}</b></div><div class="btn" data-f>${Dt.t("help")}</div><div class="btn" data-f>${Dt.t("quit")}</div></div>`,[()=>this.app.resumeShift(),()=>this.cycleGear(()=>this.pause(),1),()=>{t.limiter=t.limiter?0:50,this.pause(),this.f=2,this.paint()},()=>this.controls(()=>this.pause()),()=>this.app.endShift()],()=>this.app.resumeShift())}};var Pe=5,jt=(s,t,e)=>{let n=document.createElement(e||"div");return n.className=s,t&&t.appendChild(n),n},Nl=s=>(s<0?"\u2212":"")+Math.abs(Math.round(s)).toLocaleString("en-US")+" DH",ca=class{constructor(t){this.root=t,this.box=null}begin(t,e){this.shift=t,this.label=e;let n=this.root;n.innerHTML="",n.style.display="block",this.cash=jt("h-cash",n),this.cashV=jt("v",this.cash),this.rides=jt("s",this.cash),this.sign=jt("h-sign",n),this.signV=jt("n",this.sign),this.street=jt("h-street",n),this.warn=jt("h-warn",n);let i=jt("h-map",n);this.mapC=jt("",i,"canvas"),this.mapC.width=this.mapC.height=260,this.mapX=this.mapC.getContext("2d"),this.dash=jt("h-dash",n),this.spd=jt("spd",this.dash),this.unit=jt("unit",this.dash),this.unit.textContent="km/h",this.gear=jt("gear",this.dash),this.rpm=jt("rpm",this.dash),this.rpmB=jt("b",this.rpm),this.fuelW=jt("fuel",this.dash),this.fuelB=jt("b",this.fuelW),this.fuelT=jt("t",this.dash),this.lim=jt("lim",this.dash),this.ride=jt("h-ride",n),this.prompt=jt("h-prompt",n),this.cards=jt("h-cards",n),this.toastE=jt("h-toast",n),this.cache={},this.t=0,this.toastT=0,this.drawBase(t.net)}set(t,e,n){this.cache[e]!==n&&(this.cache[e]=n,t.textContent=n)}drawBase(t){let e=t.box,n=Math.ceil((e.x1-e.x0)/Pe),i=Math.ceil((e.z1-e.z0)/Pe),r=document.createElement("canvas");r.width=n,r.height=i;let a=r.getContext("2d");a.fillStyle="#16202c",a.fillRect(0,0,n,i);let o=t.g;a.fillStyle="#0d2a44";for(let l=0;l<o.nz;l+=2)for(let c=0;c<o.nx;c+=2)o.h[l*o.nx+c]<-20&&a.fillRect((o.x0+c*o.c-e.x0)/Pe-3,(o.z0+l*o.c-e.z0)/Pe-3,6,6);a.lineCap="round",a.lineJoin="round";for(let l of[0,1])for(let c=0;c<t.ne;c++){let h=t.eCls[c];if(l===0!=h>=4)continue;a.strokeStyle=h<=1?"#e8c35a":h<=3?"#c9d2dc":"#6d7b8b",a.lineWidth=h<=1?3:h<=3?2.2:1.3,a.beginPath();let u=t.eOff[c],f=t.eN[c];for(let p=0;p<f;p++){let m=(t.px[u+p]-e.x0)/Pe,x=(t.pz[u+p]-e.z0)/Pe;p?a.lineTo(m,x):a.moveTo(m,x)}a.stroke()}this.base=r}update(t,e){let n=this.shift,i=n.me.veh,r=n.taxi;for(this.t+=t;r.events.length;){let g=r.events.shift();this.card(g),r.log.push(g),r.log.length>20&&r.log.shift()}for(;r.toasts.length;){let g=r.toasts.shift();this.toastE.textContent=Dt.t(g.text),this.toastE.className="h-toast on "+g.kind,this.toastT=3.2}this.toastT>0&&(this.toastT-=t)<=0&&(this.toastE.className="h-toast");for(let g of this.cards.children)g._t-=t,g._t<=0&&!g._gone&&(g._gone=!0,g.classList.add("out"),setTimeout(()=>g.remove(),400));if(this.t<.08)return;let a=this.t;this.t=0;let o=Math.round(Math.abs(i.fwdSpeed)*3.6);this.set(this.cashV,"cash",Nl(r.money)),this.cashV.className="v"+(r.money<0?" neg":""),this.set(this.rides,"rides",Dt.t("rides")+" "+r.stats.rides);let l=n.qp,c=l.edge>=0?l.lim:0;this.set(this.signV,"lim",c?String(c):""),this.sign.style.display=c?"":"none",this.set(this.street,"street",l.edge>=0?n.net.edgeName(l.edge,Dt.lang):"");let h=r.wrongNow?Dt.t("wrongWay"):r.speeding?Dt.t("slowDown"):i.stalled?Dt.t("stalled"):"";this.set(this.warn,"warn",h),this.warn.className="h-warn"+(h?" on":""),this.set(this.spd,"spd",String(o)),this.spd.className="spd"+(c&&o>c+5?" over":"");let u=i.gearbox?i.mgear<0?"R":i.mgear===0?"N":String(i.mgear):i.reverse?"R":"D"+i.gear;this.set(this.gear,"gear",u),this.rpmB.style.transform="scaleX("+Math.min(1,i.rpm/i.spec.rpm).toFixed(3)+")",this.rpmB.className="b"+(i.rpm>i.spec.rpm*.92?" red":""),this.fuelB.style.transform="scaleX("+Math.max(0,r.fuel/r.tank).toFixed(3)+")",this.fuelB.className="b"+(r.fuel<4?" low":""),this.set(this.fuelT,"fuel","\u26FD "+r.fuel.toFixed(1)+" L"),this.set(this.lim,"limiter",r.limiter?"\u2298 "+r.limiter:"");let f=r.ride;if(f&&f.ped.state==="in"){let g=Math.max(0,f.eta-f.t),d=f.route?f.route.len:0,S=Dt.t("to")+" "+(f.name||"\u2014")+`
`+(d/1e3).toFixed(1)+" km \xB7 "+(g>0?Dt.t("eta")+" "+Math.floor(g/60)+":"+String(Math.floor(g%60)).padStart(2,"0"):Dt.t("late"))+`
`+Dt.t("meter")+" "+r.meter().toFixed(1)+" DH";this.set(this.ride,"ride",S),this.ride.className="h-ride on"+(g<=0?" late":"")}else this.set(this.ride,"ride",""),this.ride.className="h-ride";let p=r.prompt,m=p==="help"?"help_":p,x="";p==="helpWait"?x=Dt.t("helpWait"):p&&(x=this.label()+"  "+Dt.t(m)+(p==="refuel"?"  ("+13.4+" DH/L)":"")),this.set(this.prompt,"prompt",x),this.prompt.className="h-prompt"+(x?" on":""),this.map(n,i,r,a)}map(t,e,n){let i=this.mapX,r=260,a=t.net,o=a.box,l=Math.atan2(e.R[6],e.R[8]),c=1.25;i.save(),i.fillStyle="#16202c",i.fillRect(0,0,r,r),i.translate(r/2,r*.62),i.rotate(Math.PI+l),i.scale(c,c);let h=(e.px-o.x0)/Pe,u=(e.pz-o.z0)/Pe;i.drawImage(this.base,-h,-u);let f=n.ride;if(f&&f.route&&f.ped.state==="in"){i.strokeStyle="#2cff8f",i.lineWidth=3.2/c,i.beginPath();let p=!0,m=0;for(let[d,S]of f.route.edges){let _=a.eOff[d],v=a.eN[d];for(let C=0;C<v;C++){let T=_+(S>0?C:v-1-C),E=(a.px[T]-e.px)/Pe,I=(a.pz[T]-e.pz)/Pe;if(p?(i.moveTo(E,I),p=!1):i.lineTo(E,I),++m>2e3)break}}i.stroke();let x=(f.x-e.px)/Pe,g=(f.z-e.pz)/Pe;i.fillStyle="#2cff8f",i.beginPath(),i.arc(x,g,5/c,0,7),i.fill()}i.fillStyle="#ffd400";for(let p of n.peds)p.state==="wait"&&(i.beginPath(),i.arc((p.x-e.px)/Pe,(p.z-e.pz)/Pe,3.6/c,0,7),i.fill());i.fillStyle="#19d17a";for(let p of a.stations){let m=a.eOff[p.e]+p.k;i.fillRect((a.px[m]-e.px)/Pe-4/c,(a.pz[m]-e.pz)/Pe-4/c,8/c,8/c)}i.restore(),i.fillStyle="#21c8ef",i.strokeStyle="#fff",i.lineWidth=1.5,i.beginPath(),i.moveTo(r/2,r*.62-9),i.lineTo(r/2+6,r*.62+7),i.lineTo(r/2,r*.62+3),i.lineTo(r/2-6,r*.62+7),i.closePath(),i.fill(),i.stroke()}card(t){let e=jt("h-card "+t.kind,null);jt("t",e).textContent=Dt.t(t.title);for(let[n,i]of t.lines){let r=jt("r",e);jt("l",r,"span").textContent=Dt.line(n),jt("a"+(i<0?" neg":i>0?" pos":""),r,"span").textContent=i?Nl(i):""}if(t.lines.length>1||t.total){let n=jt("r tot",e);jt("l",n,"span").textContent=Dt.t("total"),jt("a"+(t.total<0?" neg":" pos"),n,"span").textContent=Nl(t.total)}for(e._t=t.kind==="crash"?7:5.5,this.cards.appendChild(e);this.cards.children.length>3;)this.cards.firstChild.remove();this.onCard&&this.onCard(t)}end(){this.root.innerHTML="",this.root.style.display="none",this.base=null}};var fe=window.MyPC,ha=1/60,X={renderer:null,canvas:null,info:null,quality:null,net:null,input:new aa,shift:null,hud:null,ui:null,sound:null,raf:0,last:0,acc:0,state:"boot",paused:!1,saved:null,settings:{gearbox:"auto"},fpsLog:[],workLog:[],saveT:0};window.TT=X;function pg(s){let e=new URLSearchParams(location.search).get("q")||s.quality&&s.quality.tier||"mid";return{tier:e,scale:{low:.6,mid:.8,high:1}[e]||.8,minScale:e==="low"?.45:.55}}function mg(){let s=document.getElementById("c"),t=new Rr({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:/proof/.test(location.search)});return t.setPixelRatio(1),t.outputColorSpace=jn,t.toneMapping=fn,X.canvas=s,t}function Ds(){let s=X.shift?X.shift.scale:X.quality.scale,t=Math.round(1920*s*Math.min(1,window.innerWidth/1920*1.5)),e=Math.round(t*window.innerHeight/window.innerWidth);X.renderer.setSize(t,e,!1),X.canvas.style.width="100vw",X.canvas.style.height="100vh"}function zh(s){X.raf=requestAnimationFrame(zh);let t=performance.now();X.last||(X.last=s);let e=s-X.last;X.last=s,X.acc+=Math.min(100,e);let n=0;for(;X.acc>=ha*1e3-.5&&n<4;)gg(ha),X.acc-=ha*1e3,n++;X.acc>ha*2e3&&(X.acc=0),X.shift&&X.state!=="boot"&&X.shift.render(e),X.fpsLog.length<2e4&&(X.fpsLog.push(e),X.workLog.push(performance.now()-t))}function Nh(){X.raf||(X.last=0,X.acc=0,X.raf=requestAnimationFrame(zh))}function Fh(){X.raf&&cancelAnimationFrame(X.raf),X.raf=0}function gg(s){if(X.input.poll(s),X.state==="drive"&&X.shift){X.shift.update(s,X.input),X.hud.update(s,X.input),X.sound.update(X.shift,s);let t=X.shift.taxi;t.dirty&&(X.saveT-=s)<=0&&(X.saveT=5,t.dirty=!1,Fl())}}function Fl(){if(!X.shift)return;let s=X.shift.taxi.save(),t=X.shift.me.veh;s.at={x:Math.round(t.px),z:Math.round(t.pz)},X.saved=s,fe.save("taxi",s)}X.saveSettings=()=>fe.save("settings",X.settings);X.applyGear=()=>{if(!X.shift)return;let s=X.shift.me.veh,t=X.settings.gearbox;s.gearbox=t==="auto"?null:t,s.mgear=1,s.stalled=!1};X.startShift=function(){X.ui.hide(),X.shift&&(X.shift.dispose(),X.shift=null);let s=new ra(X.renderer,X.net,X.quality,{gearbox:X.settings.gearbox,saved:X.saved,start:X.saved&&X.saved.at,lang:Dt.lang});s.onScale=()=>Ds(),s.onSound=(t,e,n)=>X.sound.event(t,e,n,s),X.shift=s,X.hud.begin(s,()=>X.input.hasPad()&&fe.gamepad&&fe.gamepad.label?"("+fe.gamepad.label(0)+")":"(OK)"),X.sound.begin(s),X.input.clearHeld(),X.state="drive",Ds(),fe.announce&&fe.announce(Dt.t("boarded").split(":")[0])};X.pauseShift=function(){X.state==="drive"&&(X.state="pause",X.sound.pause(),X.ui.pause())};X.resumeShift=function(){X.ui.hide(),X.input.clearHeld(),X.input.prev.action=!0,X.state="drive",X.sound.resume()};X.endShift=function(){Fl(),X.sound.resume(),X.sound.end(),X.hud.end(),X.shift&&(X.shift.dispose(),X.shift=null),X.state="menu",X.saved&&X.saved.stats&&X.saved.stats.earned&&fe.submitScore&&fe.submitScore(Math.round(X.saved.stats.earned),{}),X.ui.title()};fe.init({ownMenu:!0,onInit:async function(s){X.info=s;try{Dt.set(s.lang),X.quality=pg(s),X.renderer=mg(),Ds(),window.addEventListener("resize",Ds),await vh(t=>fe.progress(t*.6)),X.net=await Xr.load(t=>fe.progress(.6+t*.35)),X.saved=fe.load("taxi",null),X.settings=Object.assign({gearbox:"auto"},fe.load("settings",null)),X.hud=new ca(document.getElementById("hud")),X.sound=new Wr(s.volume||{music:.7,sfx:.8}),X.ui=new la(X,document.getElementById("ui")),X.input.menuCb=(t,e,n)=>{if(X.state==="drive"){t==="cancel"&&!n&&X.pauseShift();return}X.ui.input(t,e,n)},fe.progress(1),fe.ready()}catch(t){fe.report&&fe.report(t,{where:"init"}),fe.fail(String(t&&t.message||t))}},onStart:function(){X.sound.start(),Nh();let s=new URLSearchParams(location.search);s.has("dev")?(s.get("gear")&&(X.settings.gearbox=s.get("gear")),s.has("fresh")&&(X.saved=null),s.has("x")&&(X.saved=Object.assign({},X.saved,{at:{x:+s.get("x"),z:+s.get("z")}})),X.startShift()):(X.state="menu",X.ui.title())},onPause:function(){Fh(),X.sound.pause(),X.paused=!0,X.state==="drive"&&X.pauseShift()},onResume:function(){X.paused=!1,X.input.clearHeld(),X.state!=="pause"&&X.sound.resume(),Nh()},onDestroy:function(){Fl(),Fh(),window.removeEventListener("resize",Ds),X.shift&&X.shift.dispose(),X.sound&&X.sound.close(),X.renderer&&X.renderer.dispose()},onInput:function(s,t,e,n){if(s==="menu"&&t===!1){X.state==="drive"?X.pauseShift():X.state==="pause"&&X.resumeShift();return}if(s==="cancel"&&t&&X.state==="menu"&&X.ui.screen==="title")return!1;X.input.onAction(s,t,e,n)},onVolume:function(s){X.sound&&X.sound.volume(s)}});fe.gamepad&&(fe.gamepad.on("button",(s,t,e,n)=>X.input.onButton(s,t,e,n)),fe.gamepad.on("axes",(s,t)=>X.input.onAxes(s,t)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
