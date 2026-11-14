(()=>{var Ql="170";var zu=0,Rc=1,Fu=2;var Vh=1,Ou=2,In=3,ii=0,Ne=1,Xe=2,ei=0,ni=1,Ai=2,Cc=3,Pc=4,Bu=5,Mi=100,ku=101,Hu=102,Vu=103,Gu=104,Wu=200,Xu=201,qu=202,Yu=203,Eo=204,To=205,Zu=206,ju=207,$u=208,Ju=209,Ku=210,Qu=211,tf=212,ef=213,nf=214,Ao=0,Ro=1,Co=2,ns=3,Po=4,Io=5,Lo=6,Do=7,Gh=0,sf=1,rf=2,bn=0,af=1,of=2,lf=3,cf=4,hf=5,uf=6,ff=7;var Wh=300,is=301,ss=302,Uo=303,No=304,oa=306,zo=1e3,wi=1001,Fo=1002,qe=1003,df=1004;var Ks=1005;var _n=1006,Wa=1007;var Ei=1008;var Nn=1009,Xh=1010,qh=1011,Bs=1012,tc=1013,Ri=1014,yn=1015,Ys=1016,ec=1017,nc=1018,rs=1020,Yh=35902,Zh=1021,jh=1022,cn=1023,$h=1024,Jh=1025,Qi=1026,as=1027,ic=1028,sc=1029,Kh=1030,rc=1031;var ac=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,Oo=35840,Bo=35841,ko=35842,Ho=35843,Vo=36196,Go=37492,Wo=37496,Xo=37808,qo=37809,Yo=37810,Zo=37811,jo=37812,$o=37813,Jo=37814,Ko=37815,Qo=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,Lr=36492,rl=36494,al=36495,Qh=36283,ol=36284,ll=36285,cl=36286;var Dr=2300,hl=2301,Xa=2302,Ic=2400,Lc=2401,Dc=2402;var pf=3200,mf=3201;var gf=0,xf=1,ti="",Qe="srgb",oi="srgb-linear",la="linear",re="srgb";var zi=7680;var Uc=519,vf=512,_f=513,yf=514,tu=515,Mf=516,bf=517,Sf=518,wf=519,Nc=35044,li=35048;var zc="300 es",Dn=2e3,Ur=2001,si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qa=Math.PI/180,ul=180/Math.PI;function fs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Ef(s,t){return(s%t+t)%t}function Ya(s,t,e){return(1-e)*s+e*t}function Ts(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Rt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],d=n[8],x=i[0],g=i[3],m=i[6],M=i[1],_=i[4],v=i[7],R=i[2],T=i[5],S=i[8];return r[0]=a*x+o*M+l*R,r[3]=a*g+o*_+l*T,r[6]=a*m+o*v+l*S,r[1]=c*x+h*M+u*R,r[4]=c*g+h*_+u*T,r[7]=c*m+h*v+u*S,r[2]=f*x+p*M+d*R,r[5]=f*g+p*_+d*T,r[8]=f*m+p*v+d*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,d=e*u+n*f+i*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/d;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Za=new Gt;function eu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tf(){let s=Nr("canvas");return s.style.display="block",s}var Fc={};function Us(s){s in Fc||(Fc[s]=!0,console.warn(s))}function Af(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?la:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Oc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],kc=[.3127,.329],Hc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[oi]:{primaries:Oc,whitePoint:kc,transfer:la,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Oc,whitePoint:kc,transfer:re,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});var Fi,fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=Nr("canvas")),Fi.width=t.width,Fi.height=t.height;let n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ja(i[a].image)):r.push(ja(i[a]))}else r=ja(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var If=0,Ye=class s extends si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=wi,i=wi,r=_n,a=Ei,o=cn,l=Nn,c=s.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=fs(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Wh;Ye.DEFAULT_ANISOTROPY=1;var xe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],d=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(d+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(p+1)/2,R=(m+1)/2,T=(h+f)/4,S=(u+x)/4,C=(d+g)/4;return _>v&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=S/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=S/r,i=C/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-d)*(g-d)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-d)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],d=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=d,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==d){let g=1-o,m=l*f+c*p+h*d+u*x,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,m*M);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let v=o*M;if(l=l*g+f*v,c=c*g+p*v,h=h*g+d*v,u=u*g+x*v,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],d=r[a+3];return t[e]=o*d+h*u+l*p-c*f,t[e+1]=l*d+h*f+c*u-o*p,t[e+2]=c*d+h*p+o*f-l*u,t[e+3]=h*d-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),d=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u-f*p*d;break;case"YXZ":this._x=f*h*u+c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u+f*p*d;break;case"ZXY":this._x=f*h*u-c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u-f*p*d;break;case"ZYX":this._x=f*h*u-c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u+f*p*d;break;case"YZX":this._x=f*h*u+c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u-f*p*d;break;case"XZY":this._x=f*h*u-c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u+f*p*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$a=new N,Gc=new tn,Fn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),tr.subVectors(this.max,As),Oi.subVectors(t.a,As),Bi.subVectors(t.b,As),ki.subVectors(t.c,As),Zn.subVectors(Bi,Oi),jn.subVectors(ki,Bi),pi.subVectors(Oi,ki);let e=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!Ja(e,Oi,Bi,ki,tr)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,Oi,Bi,ki,tr))?!1:(er.crossVectors(Zn,jn),e=[er.x,er.y,er.z],Ja(e,Oi,Bi,ki,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Tn=[new N,new N,new N,new N,new N,new N,new N,new N],an=new N,Qs=new Fn,Oi=new N,Bi=new N,ki=new N,Zn=new N,jn=new N,pi=new N,As=new N,tr=new N,er=new N,mi=new N;function Ja(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){mi.fromArray(s,r);let o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lf=new Fn,Rs=new N,Ka=new N,On=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Ka)),this.expandByPoint(Rs.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new N,Qa=new N,nr=new N,$n=new N,to=new N,ir=new N,eo=new N,os=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qa.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(nr),o=$n.dot(this.direction),l=-$n.dot(nr),c=$n.lengthSq(),h=Math.abs(1-a*a),u,f,p,d;if(h>0)if(u=a*l-o,f=a*o-l,d=r*h,u>=0)if(f>=-d)if(f<=d){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-d?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=d?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qa).addScaledVector(nr,f),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),i=An.dot(An)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,r){to.subVectors(e,t),ir.subVectors(n,t),eo.crossVectors(to,ir);let a=this.direction.dot(eo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);let l=o*this.direction.dot(ir.crossVectors($n,ir));if(l<0)return null;let c=o*this.direction.dot(to.cross($n));if(c<0||l+c>a)return null;let h=-o*$n.dot(eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,p,d,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,p,d,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,p,d,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=d,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,d=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+d*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=d+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,d=c*h,x=c*u;e[0]=f+x*o,e[4]=d*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-d,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,d=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=d+p*o,e[1]=p+d*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,d=o*h,x=o*u;e[0]=l*h,e[4]=d*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-d,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,d=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=d*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+d,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,p=a*c,d=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=p*u-d,e[2]=d*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,Uf)}lookAt(t,e,n){let i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Jn.crossVectors(n,Ge),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Jn.crossVectors(n,Ge)),Jn.normalize(),sr.crossVectors(Ge,Jn),i[0]=Jn.x,i[4]=sr.x,i[8]=Ge.x,i[1]=Jn.y,i[5]=sr.y,i[9]=Ge.y,i[2]=Jn.z,i[6]=sr.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],d=n[2],x=n[6],g=n[10],m=n[14],M=n[3],_=n[7],v=n[11],R=n[15],T=i[0],S=i[4],C=i[8],b=i[12],y=i[1],A=i[5],L=i[9],I=i[13],U=i[2],X=i[6],k=i[10],Z=i[14],V=i[3],K=i[7],it=i[11],ht=i[15];return r[0]=a*T+o*y+l*U+c*V,r[4]=a*S+o*A+l*X+c*K,r[8]=a*C+o*L+l*k+c*it,r[12]=a*b+o*I+l*Z+c*ht,r[1]=h*T+u*y+f*U+p*V,r[5]=h*S+u*A+f*X+p*K,r[9]=h*C+u*L+f*k+p*it,r[13]=h*b+u*I+f*Z+p*ht,r[2]=d*T+x*y+g*U+m*V,r[6]=d*S+x*A+g*X+m*K,r[10]=d*C+x*L+g*k+m*it,r[14]=d*b+x*I+g*Z+m*ht,r[3]=M*T+_*y+v*U+R*V,r[7]=M*S+_*A+v*X+R*K,r[11]=M*C+_*L+v*k+R*it,r[15]=M*b+_*I+v*Z+R*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],d=t[3],x=t[7],g=t[11],m=t[15];return d*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],d=t[12],x=t[13],g=t[14],m=t[15],M=u*g*c-x*f*c+x*l*p-o*g*p-u*l*m+o*f*m,_=d*f*c-h*g*c-d*l*p+a*g*p+h*l*m-a*f*m,v=h*x*c-d*u*c+d*o*p-a*x*p-h*o*m+a*u*m,R=d*u*l-h*x*l-d*o*f+a*x*f+h*o*g-a*u*g,T=e*M+n*_+i*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=M*S,t[1]=(x*f*r-u*g*r-x*i*p+n*g*p+u*i*m-n*f*m)*S,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*m+n*l*m)*S,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*S,t[4]=_*S,t[5]=(h*g*r-d*f*r+d*i*p-e*g*p-h*i*m+e*f*m)*S,t[6]=(d*l*r-a*g*r-d*i*c+e*g*c+a*i*m-e*l*m)*S,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*p+e*l*p)*S,t[8]=v*S,t[9]=(d*u*r-h*x*r-d*n*p+e*x*p+h*n*m-e*u*m)*S,t[10]=(a*x*r-d*o*r+d*n*c-e*x*c-a*n*m+e*o*m)*S,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*S,t[12]=R*S,t[13]=(h*x*i-d*u*i+d*n*f-e*x*f-h*n*g+e*u*g)*S,t[14]=(d*o*i-a*x*i-d*n*l+e*x*l+a*n*g-e*o*g)*S,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,d=r*u,x=a*h,g=a*u,m=o*u,M=l*c,_=l*h,v=l*u,R=n.x,T=n.y,S=n.z;return i[0]=(1-(x+m))*R,i[1]=(p+v)*R,i[2]=(d-_)*R,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(f+m))*T,i[6]=(g+M)*T,i[7]=0,i[8]=(d+_)*S,i[9]=(g-M)*S,i[10]=(1-(f+x))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Hi.set(i[0],i[1],i[2]).length(),a=Hi.set(i[4],i[5],i[6]).length(),o=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);let c=1/r,h=1/a,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Dn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,d;if(o===Dn)p=-(a+r)/(a-r),d=-2*a*r/(a-r);else if(o===Ur)p=-a/(a-r),d=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Dn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,p=(n+i)*h,d,x;if(o===Dn)d=(a+r)*u,x=-2*u;else if(o===Ur)d=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hi=new N,on=new te,Df=new N(0,0,0),Uf=new N(1,1,1),Jn=new N,sr=new N,Ge=new N,Wc=new te,Xc=new tn,hn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nf=0,qc=new N,Vi=new tn,Rn=new te,rr=new N,Cs=new N,zf=new N,Ff=new tn,Yc=new N(1,0,0),Zc=new N(0,1,0),jc=new N(0,0,1),$c={type:"added"},Of={type:"removed"},Gi={type:"childadded",child:null},no={type:"childremoved",child:null},Ze=class s extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new N,e=new hn,n=new tn,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Gt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Cs,rr,this.up):Rn.lookAt(rr,Cs,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),d=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ze.DEFAULT_UP=new N(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new N,Cn=new N,io=new N,Pn=new N,Wi=new N,Xi=new N,Jc=new N,so=new N,ro=new N,ao=new N,oo=new xe,lo=new xe,co=new xe,bi=class s{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Cn.subVectors(n,e),io.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(Cn),l=ln.dot(io),c=Cn.dot(Cn),h=Cn.dot(io),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,d=(a*h-o*l)*f;return r.set(1-p-d,d,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),co.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(oo,r.x),a.addScaledVector(lo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Cn.subVectors(t,e),ln.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Wi.subVectors(i,n),Xi.subVectors(r,n),so.subVectors(t,n);let l=Wi.dot(so),c=Xi.dot(so);if(l<=0&&c<=0)return e.copy(n);ro.subVectors(t,i);let h=Wi.dot(ro),u=Xi.dot(ro);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Wi,a);ao.subVectors(t,r);let p=Wi.dot(ao),d=Xi.dot(ao);if(d>=0&&p<=d)return e.copy(r);let x=p*c-l*d;if(x<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Xi,o);let g=h*d-p*u;if(g<=0&&u-h>=0&&p-d>=0)return Jc.subVectors(r,i),o=(u-h)/(u-h+(p-d)),e.copy(i).addScaledVector(Jc,o);let m=1/(g+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Ef(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+1/3),this.g=ho(a,r,t),this.b=ho(a,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=nu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return $t.fromWorkingColorSpace(De.copy(this),t),Math.round(Ue(De.r*255,0,255))*65536+Math.round(Ue(De.g*255,0,255))*256+Math.round(Ue(De.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(De.copy(this),e);let n=De.r,i=De.g,r=De.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Qe){$t.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,i=De.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(ar);let n=Ya(Kn.h,ar.h,e),i=Ya(Kn.s,ar.s,e),r=Ya(Kn.l,ar.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Ft;Ft.NAMES=nu;var Bf=0,ri=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=fs(),this.name="",this.blending=ni,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},un=class extends ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new N,or=new Rt,Vt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}};var Or=class extends Vt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Br=class extends Vt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Vt{constructor(t,e,n){super(new Float32Array(t),e,n)}},kf=0,Ke=new te,uo=new Ze,qi=new N,We=new Fn,Ps=new Fn,Ae=new N,me=class s extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?Br:Or)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(We.min,Ps.min),We.expandByPoint(Ae),Ae.addVectors(We.max,Ps.max),We.expandByPoint(Ae)):(We.expandByPoint(Ps.min),We.expandByPoint(Ps.max))}We.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Ae.add(qi)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new N,l[C]=new N;let c=new N,h=new N,u=new N,f=new Rt,p=new Rt,d=new Rt,x=new N,g=new N;function m(C,b,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),d.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),d.sub(f);let A=1/(p.x*d.y-d.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(u,-p.y).multiplyScalar(A),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(A),o[C].add(x),o[b].add(x),o[y].add(x),l[C].add(g),l[b].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,b=M.length;C<b;++C){let y=M[C],A=y.start,L=y.count;for(let I=A,U=A+L;I<U;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new N,v=new N,R=new N,T=new N;function S(C){R.fromBufferAttribute(i,C),T.copy(R);let b=o[C];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(T,b);let A=v.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,A)}for(let C=0,b=M.length;C<b;++C){let y=M[C],A=y.start,L=y.count;for(let I=A,U=A+L;I<U;I+=3)S(t.getX(I+0)),S(t.getX(I+1)),S(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let d=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,d=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let m=0;m<h;m++)f[d++]=c[p++]}return new Vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kc=new te,gi=new os,lr=new On,Qc=new N,cr=new N,hr=new N,ur=new N,fo=new N,fr=new N,th=new N,dr=new N,Qt=class extends Ze{constructor(t=new me,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fo.fromBufferAttribute(u,t),a?fr.addScaledVector(fo,h):fr.addScaledVector(fo.sub(e),h))}e.add(fr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(lr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(lr,Qc)===null||gi.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){let g=f[d],m=a[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,R=_;v<R;v+=3){let T=o.getX(v),S=o.getX(v+1),C=o.getX(v+2);i=pr(this,m,t,n,c,h,u,T,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let d=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=d,m=x;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=pr(this,a,t,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){let g=f[d],m=a[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,R=_;v<R;v+=3){let T=v,S=v+1,C=v+2;i=pr(this,m,t,n,c,h,u,T,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let d=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=d,m=x;g<m;g+=3){let M=g,_=g+1,v=g+2;i=pr(this,a,t,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Hf(s,t,e,n,i,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ii,o),l===null)return null;dr.copy(o),dr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:s}}function pr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,cr),s.getVertexPosition(l,hr),s.getVertexPosition(c,ur);let h=Hf(s,t,e,n,cr,hr,ur,th);if(h){let u=new N;bi.getBarycoord(th,cr,hr,ur,u),i&&(h.uv=bi.getInterpolatedAttribute(i,o,l,c,u,new Rt)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,u,new Rt)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new N,materialIndex:0};bi.getNormal(cr,hr,ur,f.normal),h.face=f,h.barycoord=u}return h}var Ci=class s extends me{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;d("z","y","x",-1,-1,n,e,t,a,r,0),d("z","y","x",1,-1,n,e,-t,a,r,1),d("x","z","y",1,1,t,n,e,i,a,2),d("x","z","y",1,-1,t,n,-e,i,a,3),d("x","y","z",1,-1,t,e,n,i,r,4),d("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function d(x,g,m,M,_,v,R,T,S,C,b){let y=v/S,A=R/C,L=v/2,I=R/2,U=T/2,X=S+1,k=C+1,Z=0,V=0,K=new N;for(let it=0;it<k;it++){let ht=it*A-I;for(let St=0;St<X;St++){let pt=St*y-L;K[x]=pt*M,K[g]=ht*_,K[m]=U,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[m]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(St/S),u.push(1-it/C),Z+=1}}for(let it=0;it<C;it++)for(let ht=0;ht<S;ht++){let St=f+ht+X*it,pt=f+ht+X*(it+1),W=f+(ht+1)+X*(it+1),Q=f+(ht+1)+X*it;l.push(St,pt,Q),l.push(pt,W,Q),V+=6}o.addGroup(p,V,b),p+=V,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ls(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){let t={};for(let e=0;e<s.length;e++){let n=ls(s[e]);for(let i in n)t[i]=n[i]}return t}function Vf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function iu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Gf={clone:ls,merge:Fe},Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},kr=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new N,eh=new Rt,nh=new Rt,Oe=class extends kr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,ml=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Oe(Yi,Zi,t,e);i.layers=this.layers,this.add(i);let r=new Oe(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let l=new Oe(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Oe(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Hr=class extends Ye{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Hr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ci(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:ei});r.uniforms.tEquirect.value=e;let a=new Qt(i,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=_n),new ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},po=new N,qf=new N,Yf=new Gt,Ln=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=po.subVectors(n,e).cross(qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new On,mr=new N,Vr=class{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],d=i[9],x=i[10],g=i[11],m=i[12],M=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-p,v-m).normalize(),n[1].setComponents(l+r,f+c,g+p,v+m).normalize(),n[2].setComponents(l+a,f+h,g+d,v+M).normalize(),n[3].setComponents(l-a,f-h,g-d,v-M).normalize(),n[4].setComponents(l-o,f-u,g-x,v-_).normalize(),e===Dn)n[5].setComponents(l+o,f+u,g+x,v+_).normalize();else if(e===Ur)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(mr.x=i.normal.x>0?t.max.x:t.min.x,mr.y=i.normal.y>0?t.max.y:t.min.y,mr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function su(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,d)=>p.start-d.start);let f=0;for(let p=1;p<u.length;p++){let d=u[f],x=u[p];x.start<=d.start+d.count+1?d.count=Math.max(d.count,x.start+x.count-d.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,d=u.length;p<d;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var ai=class s extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],d=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*f-a;for(let _=0;_<c;_++){let v=_*u-r;d.push(v,-M,0),x.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+c*m,v=M+c*(m+1),R=M+1+c*(m+1),T=M+1+c*m;p.push(_,v,T),p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vd=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Yd=`struct PhysicalMaterial {
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
}`,Zd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sp=`#if defined( USE_POINTS_UV )
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
#endif`,rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,nm=`#define DISTANCE
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
}`,im=`#define DISTANCE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#define LAMBERT
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
}`,um=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,pm=`#define NORMAL
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
}`,mm=`#define NORMAL
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
}`,gm=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,Mm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:jf,alphahash_pars_fragment:$f,alphamap_fragment:Jf,alphamap_pars_fragment:Kf,alphatest_fragment:Qf,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:fd,clipping_planes_vertex:dd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:xd,common:vd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:yd,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Sd,emissivemap_pars_fragment:wd,colorspace_fragment:Ed,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Id,fog_vertex:Ld,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Fd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Bd,lights_pars_begin:kd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:jd,lights_fragment_end:$d,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:tp,map_fragment:ep,map_pars_fragment:np,map_particle_fragment:ip,map_particle_pars_fragment:sp,metalnessmap_fragment:rp,metalnessmap_pars_fragment:ap,morphinstance_vertex:op,morphcolor_vertex:lp,morphnormal_vertex:cp,morphtarget_pars_vertex:hp,morphtarget_vertex:up,normal_fragment_begin:fp,normal_fragment_maps:dp,normal_pars_fragment:pp,normal_pars_vertex:mp,normal_vertex:gp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Mp,opaque_fragment:bp,packing:Sp,premultiplied_alpha_fragment:wp,project_vertex:Ep,dithering_fragment:Tp,dithering_pars_fragment:Ap,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Lp,shadowmask_pars_fragment:Dp,skinbase_vertex:Up,skinning_pars_vertex:Np,skinning_vertex:zp,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:kp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Gp,uv_pars_fragment:Wp,uv_pars_vertex:Xp,uv_vertex:qp,worldpos_vertex:Yp,background_vert:Zp,background_frag:jp,backgroundCube_vert:$p,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:Qp,depth_vert:tm,depth_frag:em,distanceRGBA_vert:nm,distanceRGBA_frag:im,equirect_vert:sm,equirect_frag:rm,linedashed_vert:am,linedashed_frag:om,meshbasic_vert:lm,meshbasic_frag:cm,meshlambert_vert:hm,meshlambert_frag:um,meshmatcap_vert:fm,meshmatcap_frag:dm,meshnormal_vert:pm,meshnormal_frag:mm,meshphong_vert:gm,meshphong_frag:xm,meshphysical_vert:vm,meshphysical_frag:_m,meshtoon_vert:ym,meshtoon_frag:Mm,points_vert:bm,points_frag:Sm,shadow_vert:wm,shadow_frag:Em,sprite_vert:Tm,sprite_frag:Am},dt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},vn={basic:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Fe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Fe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Fe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Fe([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Fe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Fe([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Fe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Fe([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Fe([dt.common,dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Fe([dt.lights,dt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};vn.physical={uniforms:Fe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var gr={r:0,b:0,g:0},vi=new hn,Rm=new te;function Cm(s,t,e,n,i,r,a){let o=new Ft(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function d(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1,v=d(M);v===null?m(o,l):v&&v.isColor&&(m(v,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===oa)?(h===void 0&&(h=new Qt(new Ci(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:ls(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vi.copy(_.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(vi)),h.material.toneMapped=$t.getTransfer(v.colorSpace)!==re,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Qt(new ai(2,2),new pe({name:"BackgroundMaterial",uniforms:ls(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,_){M.getRGB(gr,iu(s)),n.buffers.color.setClear(gr.r,gr.g,gr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:x,addToRenderList:g}}function Pm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,A,L,I,U){let X=!1,k=u(I,L,A);r!==k&&(r=k,c(r.object)),X=p(y,I,L,U),X&&d(y,I,L,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(y,A,L,I),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,A,L){let I=L.wireframe===!0,U=n[y.id];U===void 0&&(U={},n[y.id]=U);let X=U[A.id];X===void 0&&(X={},U[A.id]=X);let k=X[I];return k===void 0&&(k=f(l()),X[I]=k),k}function f(y){let A=[],L=[],I=[];for(let U=0;U<e;U++)A[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,A,L,I){let U=r.attributes,X=A.attributes,k=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let it=U[V],ht=X[V];if(ht===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),it===void 0||it.attribute!==ht||ht&&it.data!==ht.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function d(y,A,L,I){let U={},X=A.attributes,k=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let it=X[V];it===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));let ht={};ht.attribute=it,it&&it.data&&(ht.data=it.data),U[V]=ht,k++}r.attributes=U,r.attributesNum=k,r.index=I}function x(){let y=r.newAttributes;for(let A=0,L=y.length;A<L;A++)y[A]=0}function g(y){m(y,0)}function m(y,A){let L=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;L[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),U[y]!==A&&(s.vertexAttribDivisor(y,A),U[y]=A)}function M(){let y=r.newAttributes,A=r.enabledAttributes;for(let L=0,I=A.length;L<I;L++)A[L]!==y[L]&&(s.disableVertexAttribArray(L),A[L]=0)}function _(y,A,L,I,U,X,k){k===!0?s.vertexAttribIPointer(y,A,L,U,X):s.vertexAttribPointer(y,A,L,I,U,X)}function v(y,A,L,I){x();let U=I.attributes,X=L.getAttributes(),k=A.defaultAttributeValues;for(let Z in X){let V=X[Z];if(V.location>=0){let K=U[Z];if(K===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let it=K.normalized,ht=K.itemSize,St=t.get(K);if(St===void 0)continue;let pt=St.buffer,W=St.type,Q=St.bytesPerElement,ut=W===s.INT||W===s.UNSIGNED_INT||K.gpuType===tc;if(K.isInterleavedBufferAttribute){let rt=K.data,Tt=rt.stride,Ct=K.offset;if(rt.isInstancedInterleavedBuffer){for(let vt=0;vt<V.locationSize;vt++)m(V.location+vt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let vt=0;vt<V.locationSize;vt++)g(V.location+vt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let vt=0;vt<V.locationSize;vt++)_(V.location+vt,ht/V.locationSize,W,it,Tt*Q,(Ct+ht/V.locationSize*vt)*Q,ut)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt,K.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<V.locationSize;rt++)g(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let rt=0;rt<V.locationSize;rt++)_(V.location+rt,ht/V.locationSize,W,it,ht*Q,ht/V.locationSize*rt*Q,ut)}}else if(k!==void 0){let it=k[Z];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(V.location,it);break;case 3:s.vertexAttrib3fv(V.location,it);break;case 4:s.vertexAttrib4fv(V.location,it);break;default:s.vertexAttrib1fv(V.location,it)}}}}M()}function R(){C();for(let y in n){let A=n[y];for(let L in A){let I=A[L];for(let U in I)h(I[U].object),delete I[U];delete A[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let L in A){let I=A[L];for(let U in I)h(I[U].object),delete I[U];delete A[L]}delete n[y.id]}function S(y){for(let A in n){let L=n[A];if(L[y.id]===void 0)continue;let I=L[y.id];for(let U in I)h(I[U].object),delete I[U];delete L[y.id]}}function C(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Im(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let d=0;d<u;d++)p+=h[d];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<c.length;d++)a(c[d],h[d],f[d]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x]*f[x];e.update(d,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==cn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let C=S===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Nn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==yn&&!C)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:d,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Dm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Ln,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let d=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||d===null||d.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,v=m.clippingState||null;l.value=v,v=h(d,f,_,p);for(let R=0;R!==_;++R)v[R]=e[R];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,d){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,d!==!0||g===null){let m=p+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=p;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Um(s){let t=new WeakMap;function e(a,o){return o===Uo?a.mapping=is:o===No&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Uo||o===No)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xl=class extends kr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ji=4,ih=[.125,.215,.35,.446,.526,.582],Si=20,mo=new xl,sh=new Ft,go=null,xo=0,vo=0,_o=!1,yi=(1+Math.sqrt(5))/2,ji=1/yi,rh=[new N(-yi,ji,0),new N(yi,ji,0),new N(-ji,0,yi),new N(ji,0,yi),new N(0,yi,-ji),new N(0,yi,ji),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,xo,vo),this._renderer.xr.enabled=_o,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ys,format:cn,colorSpace:oi,depthBuffer:!1},i=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=zm(r,t,e)}return i}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){let o=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sh),h.toneMapping=bn,h.autoClear=!1;let p=new un({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),d=new Qt(new Ci,p),x=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(sh),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;xr(i,M*_,m>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(d,o),h.render(t,o)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===is||t.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rh[(i-r-1)%rh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Qt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),x=r/d,g=isFinite(r)?1+Math.floor(h*x):Si;g>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);let m=[],M=0;for(let S=0;S<Si;++S){let C=S/x,b=Math.exp(-C*C/2);m.push(b),S===0?M+=b:S<g&&(M+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=d,f.mipInt.value=_-n;let v=this._sizeLods[i],R=3*v*(i>_-Ji?i-_+Ji:0),T=4*(this._cubeSize-v);xr(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,mo)}};function Nm(s){let t=[],e=[],n=[],i=s,r=s-Ji+1+ih.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ji?l=ih[a-s+Ji-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,d=6,x=3,g=2,m=1,M=new Float32Array(x*d*p),_=new Float32Array(g*d*p),v=new Float32Array(m*d*p);for(let T=0;T<p;T++){let S=T%3*2/3-1,C=T>2?0:-1,b=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];M.set(b,x*d*T),_.set(f,g*d*T);let y=[T,T,T,T,T,T];v.set(y,m*d*T)}let R=new me;R.setAttribute("position",new Vt(M,x)),R.setAttribute("uv",new Vt(_,g)),R.setAttribute("faceIndex",new Vt(v,m)),t.push(R),i>Ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ah(s,t,e){let n=new zn(s,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function zm(s,t,e){let n=new Float32Array(Si),i=new N(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function oh(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lh(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function Fm(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Uo||l===No,h=l===is||l===ss;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Gr(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Gr(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Om(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bm(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let d in f.attributes)t.remove(f.attributes[d]);for(let d in f.morphAttributes){let x=f.morphAttributes[d];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let d in p){let x=p[d];for(let g=0,m=x.length;g<m;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,d=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let _=0,v=M.length;_<v;_+=3){let R=M[_+0],T=M[_+1],S=M[_+2];f.push(R,T,T,S,S,R)}}else if(d!==void 0){let M=d.array;x=d.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let R=_+0,T=_+1,S=_+2;f.push(R,T,T,S,S,R)}}else return;let g=new(eu(f)?Br:Or)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function km(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,d){d!==0&&(s.drawElementsInstanced(n,p,r,f*a,d),e.update(p,n,d))}function h(f,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,d);let g=0;for(let m=0;m<d;m++)g+=p[m];e.update(g,n,1)}function u(f,p,d,x){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,d);let m=0;for(let M=0;M<d;M++)m+=p[M]*x[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Vm(s,t,e){let n=new WeakMap,i=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;p===!0&&(_=1),d===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*u),S=new Fr(T,v,R,u);S.type=yn,S.needsUpdate=!0;let C=_*4;for(let y=0;y<u;y++){let A=g[y],L=m[y],I=M[y],U=v*R*4*y;for(let X=0;X<A.count;X++){let k=X*C;p===!0&&(i.fromBufferAttribute(A,X),T[U+k+0]=i.x,T[U+k+1]=i.y,T[U+k+2]=i.z,T[U+k+3]=0),d===!0&&(i.fromBufferAttribute(L,X),T[U+k+4]=i.x,T[U+k+5]=i.y,T[U+k+6]=i.z,T[U+k+7]=0),x===!0&&(i.fromBufferAttribute(I,X),T[U+k+8]=i.x,T[U+k+9]=i.y,T[U+k+10]=i.z,T[U+k+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new Rt(v,R)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let d=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",d),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Gm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Wr=class extends Ye{constructor(t,e,n,i,r,a,o,l,c,h=Qi){if(h!==Qi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=Ri),n===void 0&&h===as&&(n=rs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ru=new Ye,ch=new Wr(1,1),au=new Fr,ou=new pl,lu=new Hr,hh=[],uh=[],fh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=hh[i];if(r===void 0&&(r=new Float32Array(i),hh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ca(s,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function Ym(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function Zm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ph.set(n),s.uniformMatrix2fv(this.addr,!1,ph),Te(e,n)}}function jm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;dh.set(n),s.uniformMatrix3fv(this.addr,!1,dh),Te(e,n)}}function $m(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;fh.set(n),s.uniformMatrix4fv(this.addr,!1,fh),Te(e,n)}}function Jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function e0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function r0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ch.compareFunction=tu,r=ch):r=ru,e.setTexture2D(t||r,i)}function a0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ou,i)}function o0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lu,i)}function l0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||au,i)}function c0(s){switch(s){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return jm;case 35676:return $m;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return Qm;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(s,t){s.uniform1fv(this.addr,t)}function u0(s,t){let e=ds(t,this.size,2);s.uniform2fv(this.addr,e)}function f0(s,t){let e=ds(t,this.size,3);s.uniform3fv(this.addr,e)}function d0(s,t){let e=ds(t,this.size,4);s.uniform4fv(this.addr,e)}function p0(s,t){let e=ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function m0(s,t){let e=ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function g0(s,t){let e=ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function x0(s,t){s.uniform1iv(this.addr,t)}function v0(s,t){s.uniform2iv(this.addr,t)}function _0(s,t){s.uniform3iv(this.addr,t)}function y0(s,t){s.uniform4iv(this.addr,t)}function M0(s,t){s.uniform1uiv(this.addr,t)}function b0(s,t){s.uniform2uiv(this.addr,t)}function S0(s,t){s.uniform3uiv(this.addr,t)}function w0(s,t){s.uniform4uiv(this.addr,t)}function E0(s,t,e){let n=this.cache,i=t.length,r=ca(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ru,r[a])}function T0(s,t,e){let n=this.cache,i=t.length,r=ca(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ou,r[a])}function A0(s,t,e){let n=this.cache,i=t.length,r=ca(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||lu,r[a])}function R0(s,t,e){let n=this.cache,i=t.length,r=ca(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||au,r[a])}function C0(s){switch(s){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return _0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}var vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}},_l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}},yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},yo=/(\w+)(\])?(\[|\.)?/g;function mh(s,t){s.seq.push(t),s.map[t.id]=t}function P0(s,t,e){let n=s.name,i=n.length;for(yo.lastIndex=0;;){let r=yo.exec(n),a=yo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mh(e,c===void 0?new vl(o,s,t):new _l(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new yl(o),mh(e,u)),e=u}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);P0(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function gh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var I0=37297,L0=0;function D0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xh=new Gt;function U0(s){$t._getMatrix(xh,$t.workingColorSpace,s);let t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case la:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+D0(s.getShaderSource(t),a)}else return i}function N0(s,t){let e=U0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z0(s,t){let e;switch(t){case af:e="Linear";break;case of:e="Reinhard";break;case lf:e="Cineon";break;case cf:e="ACESFilmic";break;case uf:e="AgX";break;case ff:e="Neutral";break;case hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vr=new N;function F0(){$t.getLuminanceCoefficients(vr);let s=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function B0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ns(s){return s!==""}function _h(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(s){return s.replace(H0,G0)}var V0=new Map;function G0(s,t){let e=Wt[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}var W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(s){return s.replace(W0,X0)}function X0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function q0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Y0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function j0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case sf:t="ENVMAP_BLENDING_MIX";break;case rf:t="ENVMAP_BLENDING_ADD";break}return t}function $0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J0(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=q0(e),c=Y0(e),h=Z0(e),u=j0(e),f=$0(e),p=O0(e),d=B0(r),x=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ns).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ns).join(`
`),m.length>0&&(m+=`
`)):(g=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),m=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==bn?z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),F0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Ml(a),a=_h(a,e),a=yh(a,e),o=Ml(o),o=_h(o,e),o=yh(o,e),a=Mh(a),o=Mh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+g+a,v=M+m+o,R=gh(i,i.VERTEX_SHADER,_),T=gh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function S(A){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(R).trim(),U=i.getShaderInfoLog(T).trim(),X=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,T);else{let Z=vh(i,R,"vertex"),V=vh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+Z+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(k=!1);k&&(A.diagnostics={runnable:X,programLog:L,vertexShader:{log:I,prefix:g},fragmentShader:{log:U,prefix:m}})}i.deleteShader(R),i.deleteShader(T),C=new es(i,x),b=k0(i,x)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,I0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var K0=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function Q0(s,t,e,n,i,r,a){let o=new ks,l=new bl,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,A,L,I){let U=L.fog,X=I.geometry,k=b.isMeshStandardMaterial?L.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),V=Z&&Z.mapping===oa?Z.image.height:null,K=d[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=it!==void 0?it.length:0,St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let pt,W,Q,ut;if(K){let Kt=vn[K];pt=Kt.vertexShader,W=Kt.fragmentShader}else pt=b.vertexShader,W=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),ut=l.getFragmentShaderID(b);let rt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ct=I.isInstancedMesh===!0,vt=I.isBatchedMesh===!0,Xt=!!b.map,kt=!!b.matcap,ee=!!Z,F=!!b.aoMap,fe=!!b.lightMap,Nt=!!b.bumpMap,Ot=!!b.normalMap,Pt=!!b.displacementMap,ne=!!b.emissiveMap,bt=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,G=b.clearcoat>0,$=b.dispersion>0,et=b.iridescence>0,J=b.sheen>0,st=b.transmission>0,H=w&&!!b.anisotropyMap,at=G&&!!b.clearcoatMap,It=G&&!!b.clearcoatNormalMap,nt=G&&!!b.clearcoatRoughnessMap,gt=et&&!!b.iridescenceMap,wt=et&&!!b.iridescenceThicknessMap,Lt=J&&!!b.sheenColorMap,_t=J&&!!b.sheenRoughnessMap,Ht=!!b.specularMap,Dt=!!b.specularColorMap,Yt=!!b.specularIntensityMap,z=st&&!!b.transmissionMap,ct=st&&!!b.thicknessMap,j=!!b.gradientMap,tt=!!b.alphaMap,xt=b.alphaTest>0,mt=!!b.alphaHash,zt=!!b.extensions,oe=bn;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(oe=s.toneMapping);let Se={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:W,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:vt,batchingColor:vt&&I._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&I.instanceColor!==null,instancingMorph:Ct&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oi,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:kt,envMap:ee,envMapMode:ee&&Z.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:fe,bumpMap:Nt,normalMap:Ot,displacementMap:f&&Pt,emissiveMap:ne,normalMapObjectSpace:Ot&&b.normalMapType===xf,normalMapTangentSpace:Ot&&b.normalMapType===gf,metalnessMap:bt,roughnessMap:P,anisotropy:w,anisotropyMap:H,clearcoat:G,clearcoatMap:at,clearcoatNormalMap:It,clearcoatRoughnessMap:nt,dispersion:$,iridescence:et,iridescenceMap:gt,iridescenceThicknessMap:wt,sheen:J,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:Ht,specularColorMap:Dt,specularIntensityMap:Yt,transmission:st,transmissionMap:z,thicknessMap:ct,gradientMap:j,opaque:b.transparent===!1&&b.blending===ni&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:xt,alphaHash:mt,combine:b.combine,mapUv:Xt&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:fe&&x(b.lightMap.channel),bumpMapUv:Nt&&x(b.bumpMap.channel),normalMapUv:Ot&&x(b.normalMap.channel),displacementMapUv:Pt&&x(b.displacementMap.channel),emissiveMapUv:ne&&x(b.emissiveMap.channel),metalnessMapUv:bt&&x(b.metalnessMap.channel),roughnessMapUv:P&&x(b.roughnessMap.channel),anisotropyMapUv:H&&x(b.anisotropyMap.channel),clearcoatMapUv:at&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(b.sheenRoughnessMap.channel),specularMapUv:Ht&&x(b.specularMap.channel),specularColorMapUv:Dt&&x(b.specularColorMap.channel),specularIntensityMapUv:Yt&&x(b.specularIntensityMap.channel),transmissionMapUv:z&&x(b.transmissionMap.channel),thicknessMapUv:ct&&x(b.thicknessMap.channel),alphaMapUv:tt&&x(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ot||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(Xt||tt),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:St,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&$t.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&$t.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xe,flipSided:b.side===Ne,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)y.push(A),y.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(M(y,b),_(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let y=d[b.type],A;if(y){let L=vn[y];A=Gf.clone(L.uniforms)}else A=b.uniforms;return A}function R(b,y){let A;for(let L=0,I=h.length;L<I;L++){let U=h[L];if(U.cacheKey===y){A=U,++A.usedTimes;break}}return A===void 0&&(A=new J0(s,y,b,r),h.push(A)),A}function T(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:C}}function tg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function eg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,d,x,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:d,renderOrder:u.renderOrder,z:x,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=d,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,f,p,d,x,g){let m=a(u,f,p,d,x,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(u,f,p,d,x,g){let m=a(u,f,p,d,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||eg),n.length>1&&n.sort(f||Sh),i.length>1&&i.sort(f||Sh)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ng(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new wh,s.set(n,[a])):i>=r.length?(a=new wh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ig(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ft};break;case"SpotLight":e={position:new N,direction:new N,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function sg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var rg=0;function ag(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function og(s){let t=new ig,e=sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,r=new te,a=new te;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,d=0,x=0,g=0,m=0,M=0,_=0,v=0,R=0,T=0,S=0;c.sort(ag);for(let b=0,y=c.length;b<y;b++){let A=c[b],L=A.color,I=A.intensity,U=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=L.r*I,u+=L.g*I,f+=L.b*I;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],I);S++}else if(A.isDirectionalLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=k,p++}else if(A.isSpotLight){let k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(L).multiplyScalar(I),k.distance=U,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[x]=k;let Z=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,Z.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,A.castShadow){let V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=X,v++}x++}else if(A.isRectAreaLight){let k=t.get(A);k.color.copy(L).multiplyScalar(I),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=k,g++}else if(A.isPointLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){let Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[d]=V,n.pointShadowMap[d]=X,n.pointShadowMatrix[d]=A.shadow.matrix,_++}n.point[d]=k,d++}else if(A.isHemisphereLight){let k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(I),k.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[m]=k,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==d||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=d,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,C.directionalLength=p,C.pointLength=d,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=S,n.version=rg++)}function l(c,h){let u=0,f=0,p=0,d=0,x=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let _=c[m];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Eh(s){let t=new og(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Eh(s),t.set(i,[o])):r>=a.length?(o=new Eh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wl=class extends ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`;function ug(s,t,e){let n=new Vr,i=new Rt,r=new Rt,a=new xe,o=new wl({depthPacking:mf}),l=new El,c={},h=e.maxTextureSize,u={[ii]:Ne,[Ne]:ii,[Xe]:Xe},f=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:cg,fragmentShader:hg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let d=new me;d.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Qt(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let m=this.type;this.render=function(T,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ei),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=m!==In&&this.type===In,U=m===In&&this.type!==In;for(let X=0,k=T.length;X<k;X++){let Z=T[X],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let K=V.getFrameExtents();if(i.multiply(K),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||I===!0||U===!0){let ht=this.type!==In?{minFilter:qe,magFilter:qe}:{};V.map!==null&&V.map.dispose(),V.map=new zn(i.x,i.y,ht),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let it=V.getViewportCount();for(let ht=0;ht<it;ht++){let St=V.getViewport(ht);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),L.viewport(a),V.updateMatrices(Z,ht),n=V.getFrustum(),v(S,C,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===In&&M(V,C),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,y,A)};function M(T,S){let C=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,C,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,C,p,x,null)}function _(T,S,C,b){let y=null,A=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=y.uuid,I=S.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let X=U[I];X===void 0&&(X=y.clone(),U[I]=X,S.addEventListener("dispose",R)),y=X}if(y.visible=S.visible,y.wireframe=S.wireframe,b===In?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:u[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=C}return y}function v(T,S,C,b,y){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let I=t.update(T),U=T.material;if(Array.isArray(U)){let X=I.groups;for(let k=0,Z=X.length;k<Z;k++){let V=X[k],K=U[V.materialIndex];if(K&&K.visible){let it=_(T,K,b,y);T.onBeforeShadow(s,T,S,C,I,it,V),s.renderBufferDirect(C,null,I,it,T,V),T.onAfterShadow(s,T,S,C,I,it,V)}}}else if(U.visible){let X=_(T,U,b,y);T.onBeforeShadow(s,T,S,C,I,X,null),s.renderBufferDirect(C,null,I,X,T,null),T.onAfterShadow(s,T,S,C,I,X,null)}}let L=T.children;for(let I=0,U=L.length;I<U;I++)v(L[I],S,C,b,y)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let b=c[C],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var fg={[Ao]:Ro,[Co]:Lo,[Po]:Do,[ns]:Io,[Ro]:Ao,[Lo]:Co,[Do]:Po,[Io]:ns};function dg(s,t){function e(){let z=!1,ct=new xe,j=null,tt=new xe(0,0,0,0);return{setMask:function(xt){j!==xt&&!z&&(s.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){z=xt},setClear:function(xt,mt,zt,oe,Se){Se===!0&&(xt*=oe,mt*=oe,zt*=oe),ct.set(xt,mt,zt,oe),tt.equals(ct)===!1&&(s.clearColor(xt,mt,zt,oe),tt.copy(ct))},reset:function(){z=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let z=!1,ct=!1,j=null,tt=null,xt=null;return{setReversed:function(mt){if(ct!==mt){let zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let oe=xt;xt=null,this.setClear(oe)}ct=mt},getReversed:function(){return ct},setTest:function(mt){mt?rt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(mt){j!==mt&&!z&&(s.depthMask(mt),j=mt)},setFunc:function(mt){if(ct&&(mt=fg[mt]),tt!==mt){switch(mt){case Ao:s.depthFunc(s.NEVER);break;case Ro:s.depthFunc(s.ALWAYS);break;case Co:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case Po:s.depthFunc(s.EQUAL);break;case Io:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=mt}},setLocked:function(mt){z=mt},setClear:function(mt){xt!==mt&&(ct&&(mt=1-mt),s.clearDepth(mt),xt=mt)},reset:function(){z=!1,j=null,tt=null,xt=null,ct=!1}}}function i(){let z=!1,ct=null,j=null,tt=null,xt=null,mt=null,zt=null,oe=null,Se=null;return{setTest:function(Kt){z||(Kt?rt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Kt){ct!==Kt&&!z&&(s.stencilMask(Kt),ct=Kt)},setFunc:function(Kt,Be,we){(j!==Kt||tt!==Be||xt!==we)&&(s.stencilFunc(Kt,Be,we),j=Kt,tt=Be,xt=we)},setOp:function(Kt,Be,we){(mt!==Kt||zt!==Be||oe!==we)&&(s.stencilOp(Kt,Be,we),mt=Kt,zt=Be,oe=we)},setLocked:function(Kt){z=Kt},setClear:function(Kt){Se!==Kt&&(s.clearStencil(Kt),Se=Kt)},reset:function(){z=!1,ct=null,j=null,tt=null,xt=null,mt=null,zt=null,oe=null,Se=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],d=null,x=!1,g=null,m=null,M=null,_=null,v=null,R=null,T=null,S=new Ft(0,0,0),C=0,b=!1,y=null,A=null,L=null,I=null,U=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=Z>=2);let K=null,it={},ht=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),pt=new xe().fromArray(ht),W=new xe().fromArray(St);function Q(z,ct,j,tt){let xt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(z,mt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<j;zt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(ct+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return mt}let ut={};ut[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(ns),Nt(!1),Ot(Rc),rt(s.CULL_FACE),F(ei);function rt(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function Tt(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Ct(z,ct){return u[z]!==ct?(s.bindFramebuffer(z,ct),u[z]=ct,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function vt(z,ct){let j=p,tt=!1;if(z){j=f.get(ct),j===void 0&&(j=[],f.set(ct,j));let xt=z.textures;if(j.length!==xt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,zt=xt.length;mt<zt;mt++)j[mt]=s.COLOR_ATTACHMENT0+mt;j.length=xt.length,tt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,tt=!0);tt&&s.drawBuffers(j)}function Xt(z){return d!==z?(s.useProgram(z),d=z,!0):!1}let kt={[Mi]:s.FUNC_ADD,[ku]:s.FUNC_SUBTRACT,[Hu]:s.FUNC_REVERSE_SUBTRACT};kt[Vu]=s.MIN,kt[Gu]=s.MAX;let ee={[Wu]:s.ZERO,[Xu]:s.ONE,[qu]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[Ku]:s.SRC_ALPHA_SATURATE,[$u]:s.DST_COLOR,[Zu]:s.DST_ALPHA,[Yu]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[Ju]:s.ONE_MINUS_DST_COLOR,[ju]:s.ONE_MINUS_DST_ALPHA,[Qu]:s.CONSTANT_COLOR,[tf]:s.ONE_MINUS_CONSTANT_COLOR,[ef]:s.CONSTANT_ALPHA,[nf]:s.ONE_MINUS_CONSTANT_ALPHA};function F(z,ct,j,tt,xt,mt,zt,oe,Se,Kt){if(z===ei){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(rt(s.BLEND),x=!0),z!==Bu){if(z!==g||Kt!==b){if((m!==Mi||v!==Mi)&&(s.blendEquation(s.FUNC_ADD),m=Mi,v=Mi),Kt)switch(z){case ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.ONE,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,_=null,R=null,T=null,S.set(0,0,0),C=0,g=z,b=Kt}return}xt=xt||ct,mt=mt||j,zt=zt||tt,(ct!==m||xt!==v)&&(s.blendEquationSeparate(kt[ct],kt[xt]),m=ct,v=xt),(j!==M||tt!==_||mt!==R||zt!==T)&&(s.blendFuncSeparate(ee[j],ee[tt],ee[mt],ee[zt]),M=j,_=tt,R=mt,T=zt),(oe.equals(S)===!1||Se!==C)&&(s.blendColor(oe.r,oe.g,oe.b,Se),S.copy(oe),C=Se),g=z,b=!1}function fe(z,ct){z.side===Xe?Tt(s.CULL_FACE):rt(s.CULL_FACE);let j=z.side===Ne;ct&&(j=!j),Nt(j),z.blending===ni&&z.transparent===!1?F(ei):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let tt=z.stencilWrite;o.setTest(tt),tt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ne(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(z){y!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),y=z)}function Ot(z){z!==zu?(rt(s.CULL_FACE),z!==A&&(z===Rc?s.cullFace(s.BACK):z===Fu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),A=z}function Pt(z){z!==L&&(k&&s.lineWidth(z),L=z)}function ne(z,ct,j){z?(rt(s.POLYGON_OFFSET_FILL),(I!==ct||U!==j)&&(s.polygonOffset(ct,j),I=ct,U=j)):Tt(s.POLYGON_OFFSET_FILL)}function bt(z){z?rt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function P(z){z===void 0&&(z=s.TEXTURE0+X-1),K!==z&&(s.activeTexture(z),K=z)}function w(z,ct,j){j===void 0&&(K===null?j=s.TEXTURE0+X-1:j=K);let tt=it[j];tt===void 0&&(tt={type:void 0,texture:void 0},it[j]=tt),(tt.type!==z||tt.texture!==ct)&&(K!==j&&(s.activeTexture(j),K=j),s.bindTexture(z,ct||ut[z]),tt.type=z,tt.texture=ct)}function G(){let z=it[K];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(z){pt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),pt.copy(z))}function _t(z){W.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),W.copy(z))}function Ht(z,ct){let j=c.get(ct);j===void 0&&(j=new WeakMap,c.set(ct,j));let tt=j.get(z);tt===void 0&&(tt=s.getUniformBlockIndex(ct,z.name),j.set(z,tt))}function Dt(z,ct){let tt=c.get(ct).get(z);l.get(ct)!==tt&&(s.uniformBlockBinding(ct,tt,z.__bindingPointIndex),l.set(ct,tt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,it={},u={},f=new WeakMap,p=[],d=null,x=!1,g=null,m=null,M=null,_=null,v=null,R=null,T=null,S=new Ft(0,0,0),C=0,b=!1,y=null,A=null,L=null,I=null,U=null,pt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Ct,drawBuffers:vt,useProgram:Xt,setBlending:F,setMaterial:fe,setFlipSided:Nt,setCullFace:Ot,setLineWidth:Pt,setPolygonOffset:ne,setScissorTest:bt,activeTexture:P,bindTexture:w,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:gt,texImage3D:wt,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:It,texStorage3D:nt,texSubImage2D:J,texSubImage3D:st,compressedTexSubImage2D:H,compressedTexSubImage3D:at,scissor:Lt,viewport:_t,reset:Yt}}function Th(s,t,e,n){let i=pg(n);switch(e){case Zh:return s*t;case $h:return s*t;case Jh:return s*t*2;case ic:return s*t/i.components*i.byteLength;case sc:return s*t/i.components*i.byteLength;case Kh:return s*t*2/i.components*i.byteLength;case rc:return s*t*2/i.components*i.byteLength;case jh:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case ac:return s*t*4/i.components*i.byteLength;case Rr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:case Ho:return Math.max(s,16)*Math.max(t,8)/4;case Oo:case ko:return Math.max(s,8)*Math.max(t,8)/2;case Vo:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lr:case rl:case al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qh:case ol:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pg(s){switch(s){case Nn:case Xh:return{byteLength:1,components:1};case Bs:case qh:case Ys:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case Ri:case tc:case yn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function mg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,w){return p?new OffscreenCanvas(P,w):Nr("canvas")}function x(P,w,G){let $=1,et=bt(P);if((et.width>G||et.height>G)&&($=G/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor($*et.width),st=Math.floor($*et.height);u===void 0&&(u=d(J,st));let H=w?d(J,st):u;return H.width=J,H.height=st,H.getContext("2d").drawImage(P,0,0,J,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+st+")."),H}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(P,w,G,$,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),w===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),w===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){let st=et?la:$t.getTransfer($);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=st===re?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(P,w){let G;return P?w===null||w===Ri||w===rs?G=s.DEPTH24_STENCIL8:w===yn?G=s.DEPTH32F_STENCIL8:w===Bs&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ri||w===rs?G=s.DEPTH_COMPONENT24:w===yn?G=s.DEPTH_COMPONENT32F:w===Bs&&(G=s.DEPTH_COMPONENT16),G}function R(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){let w=P.target;w.removeEventListener("dispose",T),C(w),w.isVideoTexture&&h.delete(w)}function S(P){let w=P.target;w.removeEventListener("dispose",S),y(w)}function C(P){let w=n.get(P);if(w.__webglInit===void 0)return;let G=P.source,$=f.get(G);if($){let et=$[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(P),Object.keys($).length===0&&f.delete(G)}n.remove(P)}function b(P){let w=n.get(P);s.deleteTexture(w.__webglTexture);let G=P.source,$=f.get(G);delete $[w.__cacheKey],a.memory.textures--}function y(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let et=0;et<w.__webglFramebuffer[$].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[$][et]);else s.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)s.deleteFramebuffer(w.__webglFramebuffer[$]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=P.textures;for(let $=0,et=G.length;$<et;$++){let J=n.get(G[$]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(P)}let A=0;function L(){A=0}function I(){let P=A;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),A+=1,P}function U(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function X(P,w){let G=n.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(G,P,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function k(P,w){let G=n.get(P);if(P.version>0&&G.__version!==P.version){W(G,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function Z(P,w){let G=n.get(P);if(P.version>0&&G.__version!==P.version){W(G,P,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function V(P,w){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}let K={[zo]:s.REPEAT,[wi]:s.CLAMP_TO_EDGE,[Fo]:s.MIRRORED_REPEAT},it={[qe]:s.NEAREST,[df]:s.NEAREST_MIPMAP_NEAREST,[Ks]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Wa]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},ht={[vf]:s.NEVER,[wf]:s.ALWAYS,[_f]:s.LESS,[tu]:s.LEQUAL,[yf]:s.EQUAL,[Sf]:s.GEQUAL,[Mf]:s.GREATER,[bf]:s.NOTEQUAL};function St(P,w){if(w.type===yn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===Wa||w.magFilter===Ks||w.magFilter===Ei||w.minFilter===_n||w.minFilter===Wa||w.minFilter===Ks||w.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,K[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,K[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,K[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,it[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,it[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==Ks&&w.minFilter!==Ei||w.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function pt(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",T));let $=w.source,et=f.get($);et===void 0&&(et={},f.set($,et));let J=U(w);if(J!==P.__cacheKey){et[J]===void 0&&(et[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[J].usedTimes++;let st=et[P.__cacheKey];st!==void 0&&(et[P.__cacheKey].usedTimes--,st.usedTimes===0&&b(w)),P.__cacheKey=J,P.__webglTexture=et[J].texture}return G}function W(P,w,G){let $=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=s.TEXTURE_3D);let et=pt(P,w),J=w.source;e.bindTexture($,P.__webglTexture,s.TEXTURE0+G);let st=n.get(J);if(J.version!==st.__version||et===!0){e.activeTexture(s.TEXTURE0+G);let H=$t.getPrimaries($t.workingColorSpace),at=w.colorSpace===ti?null:$t.getPrimaries(w.colorSpace),It=w.colorSpace===ti||H===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let nt=x(w.image,!1,i.maxTextureSize);nt=ne(w,nt);let gt=r.convert(w.format,w.colorSpace),wt=r.convert(w.type),Lt=_(w.internalFormat,gt,wt,w.colorSpace,w.isVideoTexture);St($,w);let _t,Ht=w.mipmaps,Dt=w.isVideoTexture!==!0,Yt=st.__version===void 0||et===!0,z=J.dataReady,ct=R(w,nt);if(w.isDepthTexture)Lt=v(w.format===as,w.type),Yt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Lt,nt.width,nt.height,0,gt,wt,null));else if(w.isDataTexture)if(Ht.length>0){Dt&&Yt&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,Ht[0].width,Ht[0].height);for(let j=0,tt=Ht.length;j<tt;j++)_t=Ht[j],Dt?z&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,wt,_t.data):e.texImage2D(s.TEXTURE_2D,j,Lt,_t.width,_t.height,0,gt,wt,_t.data);w.generateMipmaps=!1}else Dt?(Yt&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,nt.width,nt.height),z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,wt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,nt.width,nt.height,0,gt,wt,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Dt&&Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,Ht[0].width,Ht[0].height,nt.depth);for(let j=0,tt=Ht.length;j<tt;j++)if(_t=Ht[j],w.format!==cn)if(gt!==null)if(Dt){if(z)if(w.layerUpdates.size>0){let xt=Th(_t.width,_t.height,w.format,w.type);for(let mt of w.layerUpdates){let zt=_t.data.subarray(mt*xt/_t.data.BYTES_PER_ELEMENT,(mt+1)*xt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,mt,_t.width,_t.height,1,gt,zt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Lt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,nt.depth,gt,wt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Lt,_t.width,_t.height,nt.depth,0,gt,wt,_t.data)}else{Dt&&Yt&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,Ht[0].width,Ht[0].height);for(let j=0,tt=Ht.length;j<tt;j++)_t=Ht[j],w.format!==cn?gt!==null?Dt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?z&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,_t.width,_t.height,gt,wt,_t.data):e.texImage2D(s.TEXTURE_2D,j,Lt,_t.width,_t.height,0,gt,wt,_t.data)}else if(w.isDataArrayTexture)if(Dt){if(Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,nt.width,nt.height,nt.depth),z)if(w.layerUpdates.size>0){let j=Th(nt.width,nt.height,w.format,w.type);for(let tt of w.layerUpdates){let xt=nt.data.subarray(tt*j/nt.data.BYTES_PER_ELEMENT,(tt+1)*j/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,gt,wt,xt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,wt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,gt,wt,nt.data);else if(w.isData3DTexture)Dt?(Yt&&e.texStorage3D(s.TEXTURE_3D,ct,Lt,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,wt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,gt,wt,nt.data);else if(w.isFramebufferTexture){if(Yt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ct,Lt,nt.width,nt.height);else{let j=nt.width,tt=nt.height;for(let xt=0;xt<ct;xt++)e.texImage2D(s.TEXTURE_2D,xt,Lt,j,tt,0,gt,wt,null),j>>=1,tt>>=1}}else if(Ht.length>0){if(Dt&&Yt){let j=bt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,ct,Lt,j.width,j.height)}for(let j=0,tt=Ht.length;j<tt;j++)_t=Ht[j],Dt?z&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,gt,wt,_t):e.texImage2D(s.TEXTURE_2D,j,Lt,gt,wt,_t);w.generateMipmaps=!1}else if(Dt){if(Yt){let j=bt(nt);e.texStorage2D(s.TEXTURE_2D,ct,Lt,j.width,j.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,wt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Lt,gt,wt,nt);g(w)&&m($),st.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,G){if(w.image.length!==6)return;let $=pt(P,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let J=n.get(et);if(et.version!==J.__version||$===!0){e.activeTexture(s.TEXTURE0+G);let st=$t.getPrimaries($t.workingColorSpace),H=w.colorSpace===ti?null:$t.getPrimaries(w.colorSpace),at=w.colorSpace===ti||st===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let It=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,gt=[];for(let tt=0;tt<6;tt++)!It&&!nt?gt[tt]=x(w.image[tt],!0,i.maxCubemapSize):gt[tt]=nt?w.image[tt].image:w.image[tt],gt[tt]=ne(w,gt[tt]);let wt=gt[0],Lt=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),Ht=_(w.internalFormat,Lt,_t,w.colorSpace),Dt=w.isVideoTexture!==!0,Yt=J.__version===void 0||$===!0,z=et.dataReady,ct=R(w,wt);St(s.TEXTURE_CUBE_MAP,w);let j;if(It){Dt&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ht,wt.width,wt.height);for(let tt=0;tt<6;tt++){j=gt[tt].mipmaps;for(let xt=0;xt<j.length;xt++){let mt=j[xt];w.format!==cn?Lt!==null?Dt?z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,mt.width,mt.height,Lt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,Ht,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,mt.width,mt.height,Lt,_t,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,Ht,mt.width,mt.height,0,Lt,_t,mt.data)}}}else{if(j=w.mipmaps,Dt&&Yt){j.length>0&&ct++;let tt=bt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){Dt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,gt[tt].width,gt[tt].height,Lt,_t,gt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,gt[tt].width,gt[tt].height,0,Lt,_t,gt[tt].data);for(let xt=0;xt<j.length;xt++){let zt=j[xt].image[tt].image;Dt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,zt.width,zt.height,Lt,_t,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,Ht,zt.width,zt.height,0,Lt,_t,zt.data)}}else{Dt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,_t,gt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,Lt,_t,gt[tt]);for(let xt=0;xt<j.length;xt++){let mt=j[xt];Dt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Lt,_t,mt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,Ht,Lt,_t,mt.image[tt])}}}g(w)&&m(s.TEXTURE_CUBE_MAP),J.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ut(P,w,G,$,et,J){let st=r.convert(G.format,G.colorSpace),H=r.convert(G.type),at=_(G.internalFormat,st,H,G.colorSpace),It=n.get(w),nt=n.get(G);if(nt.__renderTarget=w,!It.__hasExternalTextures){let gt=Math.max(1,w.width>>J),wt=Math.max(1,w.height>>J);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,J,at,gt,wt,w.depth,0,st,H,null):e.texImage2D(et,J,at,gt,wt,0,st,H,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Ot(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,et,nt.__webglTexture,0,Nt(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,et,nt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(P,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let $=w.depthTexture,et=$&&$.isDepthTexture?$.type:null,J=v(w.stencilBuffer,et),st=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=Nt(w);Ot(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H,J,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,H,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,P)}else{let $=w.textures;for(let et=0;et<$.length;et++){let J=$[et],st=r.convert(J.format,J.colorSpace),H=r.convert(J.type),at=_(J.internalFormat,st,H,J.colorSpace),It=Nt(w);G&&Ot(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,at,w.width,w.height):Ot(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,at,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,at,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(w.depthTexture);$.__renderTarget=w,(!$.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let et=$.__webglTexture,J=Nt(w);if(w.depthTexture.format===Qi)Ot(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(w.depthTexture.format===as)Ot(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ct(P){let w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=$}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Tt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=s.createRenderbuffer(),rt(w.__webglDepthbuffer[$],P,!1);else{let et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),rt(w.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(P,w,G){let $=n.get(P);w!==void 0&&ut($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ct(P)}function Xt(P){let w=P.texture,G=n.get(P),$=n.get(w);P.addEventListener("dispose",S);let et=P.textures,J=P.isWebGLCubeRenderTarget===!0,st=et.length>1;if(st||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=w.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let H=0;H<6;H++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[H]=[];for(let at=0;at<w.mipmaps.length;at++)G.__webglFramebuffer[H][at]=s.createFramebuffer()}else G.__webglFramebuffer[H]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let H=0;H<w.mipmaps.length;H++)G.__webglFramebuffer[H]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(st)for(let H=0,at=et.length;H<at;H++){let It=n.get(et[H]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Ot(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let H=0;H<et.length;H++){let at=et[H];G.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[H]);let It=r.convert(at.format,at.colorSpace),nt=r.convert(at.type),gt=_(at.internalFormat,It,nt,at.colorSpace,P.isXRRenderTarget===!0),wt=Nt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,gt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,G.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),St(s.TEXTURE_CUBE_MAP,w);for(let H=0;H<6;H++)if(w.mipmaps&&w.mipmaps.length>0)for(let at=0;at<w.mipmaps.length;at++)ut(G.__webglFramebuffer[H][at],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at);else ut(G.__webglFramebuffer[H],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);g(w)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let H=0,at=et.length;H<at;H++){let It=et[H],nt=n.get(It);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),St(s.TEXTURE_2D,It),ut(G.__webglFramebuffer,P,It,s.COLOR_ATTACHMENT0+H,s.TEXTURE_2D,0),g(It)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let H=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(H=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(H,$.__webglTexture),St(H,w),w.mipmaps&&w.mipmaps.length>0)for(let at=0;at<w.mipmaps.length;at++)ut(G.__webglFramebuffer[at],P,w,s.COLOR_ATTACHMENT0,H,at);else ut(G.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,H,0);g(w)&&m(H),e.unbindTexture()}P.depthBuffer&&Ct(P)}function kt(P){let w=P.textures;for(let G=0,$=w.length;G<$;G++){let et=w[G];if(g(et)){let J=M(P),st=n.get(et).__webglTexture;e.bindTexture(J,st),m(J),e.unbindTexture()}}}let ee=[],F=[];function fe(P){if(P.samples>0){if(Ot(P)===!1){let w=P.textures,G=P.width,$=P.height,et=s.COLOR_BUFFER_BIT,J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=n.get(P),H=w.length>1;if(H)for(let at=0;at<w.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<w.length;at++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let It=n.get(w[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,et,s.NEAREST),l===!0&&(ee.length=0,F.length=0,ee.push(s.COLOR_ATTACHMENT0+at),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(J),F.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let at=0;at<w.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let It=n.get(w[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Nt(P){return Math.min(i.maxSamples,P.samples)}function Ot(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function ne(P,w){let G=P.colorSpace,$=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==oi&&G!==ti&&($t.getTransfer(G)===re?($!==cn||et!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=vt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ot}function gg(s,t){function e(n,i=ti){let r,a=$t.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===ec)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return s.BYTE;if(n===qh)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===tc)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===Ys)return s.HALF_FLOAT;if(n===Zh)return s.ALPHA;if(n===jh)return s.RGB;if(n===cn)return s.RGBA;if(n===$h)return s.LUMINANCE;if(n===Jh)return s.LUMINANCE_ALPHA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===as)return s.DEPTH_STENCIL;if(n===ic)return s.RED;if(n===sc)return s.RED_INTEGER;if(n===Kh)return s.RG;if(n===rc)return s.RG_INTEGER;if(n===ac)return s.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Ir)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===ko||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Go)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===jo||n===$o||n===Jo||n===Ko||n===Qo||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===rl||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===ol||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Tl=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Mn=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},xg={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,d=.005;c.inputState.pinching&&f>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
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

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:vg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends si{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,d=null,x=new Al,g=e.getContextAttributes(),m=null,M=null,_=[],v=[],R=new Rt,T=null,S=new Oe;S.viewport=new xe;let C=new Oe;C.viewport=new xe;let b=[S,C],y=new Tl,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=_[W];return Q===void 0&&(Q=new zs,_[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=_[W];return Q===void 0&&(Q=new zs,_[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=_[W];return Q===void 0&&(Q=new zs,_[W]=Q),Q.getHandSpace()};function I(W){let Q=v.indexOf(W.inputSource);if(Q===-1)return;let ut=_[Q];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||a),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",X);for(let W=0;W<_.length;W++){let Q=v[W];Q!==null&&(v[W]=null,_[W].disconnect(Q))}A=null,L=null,x.reset(),t.setRenderTarget(m),p=null,f=null,u=null,i=null,M=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",U),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new zn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ut=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?as:Qi,ut=g.stencil?rs:Ri);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new zn(f.textureWidth,f.textureHeight,{format:cn,type:Nn,depthTexture:new Wr(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(W){for(let Q=0;Q<W.removed.length;Q++){let ut=W.removed[Q],rt=v.indexOf(ut);rt>=0&&(v[rt]=null,_[rt].disconnect(ut))}for(let Q=0;Q<W.added.length;Q++){let ut=W.added[Q],rt=v.indexOf(ut);if(rt===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=v.length){v.push(ut),rt=Ct;break}else if(v[Ct]===null){v[Ct]=ut,rt=Ct;break}if(rt===-1)break}let Tt=_[rt];Tt&&Tt.connect(ut)}}let k=new N,Z=new N;function V(W,Q,ut){k.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ut.matrixWorld);let rt=k.distanceTo(Z),Tt=Q.projectionMatrix.elements,Ct=ut.projectionMatrix.elements,vt=Tt[14]/(Tt[10]-1),Xt=Tt[14]/(Tt[10]+1),kt=(Tt[9]+1)/Tt[5],ee=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],fe=(Ct[8]+1)/Ct[0],Nt=vt*F,Ot=vt*fe,Pt=rt/(-F+fe),ne=Pt*-F;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(Pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let bt=vt+Pt,P=Xt+Pt,w=Nt-ne,G=Ot+(rt-ne),$=kt*Xt/P*bt,et=ee*Xt/P*bt;W.projectionMatrix.makePerspective(w,G,$,et,bt,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function K(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let Q=W.near,ut=W.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),y.near=C.near=S.near=Q,y.far=C.far=S.far=ut,(A!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,L=y.far),S.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,y.layers.mask=S.layers.mask|C.layers.mask;let rt=W.parent,Tt=y.cameras;K(y,rt);for(let Ct=0;Ct<Tt.length;Ct++)K(Tt[Ct],rt);Tt.length===2?V(y,S,C):y.projectionMatrix.copy(S.projectionMatrix),it(W,y,rt)};function it(W,Q,ut){ut===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ul*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ht=null;function St(W,Q){if(h=Q.getViewerPose(c||a),d=Q,h!==null){let ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let rt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Ct=0;Ct<ut.length;Ct++){let vt=ut[Ct],Xt=null;if(p!==null)Xt=p.getViewport(vt);else{let ee=u.getViewSubImage(f,vt);Xt=ee.viewport,Ct===0&&(t.setRenderTargetTextures(M,ee.colorTexture,f.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(M))}let kt=b[Ct];kt===void 0&&(kt=new Oe,kt.layers.enable(Ct),kt.viewport=new xe,b[Ct]=kt),kt.matrix.fromArray(vt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(vt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ct===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(kt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Ct=u.getDepthInformation(ut[0]);Ct&&Ct.isValid&&Ct.texture&&x.init(t,Ct,i.renderState)}}for(let ut=0;ut<_.length;ut++){let rt=v[ut],Tt=_[ut];rt!==null&&Tt!==void 0&&Tt.update(rt,Q,c||a)}ht&&ht(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),d=null}let pt=new su;pt.setAnimationLoop(St),this.setAnimationLoop=function(W){ht=W},this.dispose=function(){}}},_i=new hn,yg=new te;function Mg(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,iu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),d(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ne&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ne&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),g.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(_i)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ne&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=i[M.id];v===void 0&&(d(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(M,R);let T=t.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let v=s.createBuffer(),R=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=i[M.id],v=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,S=v.length;T<S;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,y=C.length;b<y;b++){let A=C[b];if(p(A,T,b,R)===!0){let L=A.__offset,I=Array.isArray(A.value)?A.value:[A.value],U=0;for(let X=0;X<I.length;X++){let k=I[X],Z=x(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,L+U,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,_,v,R){let T=M.value,S=_+"_"+v;if(R[S]===void 0)return typeof T=="number"||typeof T=="boolean"?R[S]=T:R[S]=T.clone(),!0;{let C=R[S];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[S]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(M){let _=M.uniforms,v=0,R=16;for(let S=0,C=_.length;S<C;S++){let b=Array.isArray(_[S])?_[S]:[_[S]];for(let y=0,A=b.length;y<A;y++){let L=b[y],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,X=I.length;U<X;U++){let k=I[U],Z=x(k),V=v%R,K=V%Z.boundary,it=V+K;v+=K,it!==0&&R-it<Z.storage&&(v+=R-it),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}let T=v%R;return T>0&&(v+=R-T),M.__size=v,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Xr=class{constructor(t={}){let{canvas:e=Tf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let d=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=bn,this.toneMappingExposure=1;let v=this,R=!1,T=0,S=0,C=null,b=-1,y=null,A=new xe,L=new xe,I=null,U=new Ft(0),X=0,k=e.width,Z=e.height,V=1,K=null,it=null,ht=new xe(0,0,k,Z),St=new xe(0,0,k,Z),pt=!1,W=new Vr,Q=!1,ut=!1,rt=new te,Tt=new te,Ct=new N,vt=new xe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ee(){return C===null?V:1}let F=n;function fe(E,O){return e.getContext(E,O)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),F===null){let O="webgl2";if(F=fe(O,E),F===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Nt,Ot,Pt,ne,bt,P,w,G,$,et,J,st,H,at,It,nt,gt,wt,Lt,_t,Ht,Dt,Yt,z;function ct(){Nt=new Om(F),Nt.init(),Dt=new gg(F,Nt),Ot=new Lm(F,Nt,t,Dt),Pt=new dg(F,Nt),Ot.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),ne=new Hm(F),bt=new tg,P=new mg(F,Nt,Pt,bt,Ot,Dt,ne),w=new Um(v),G=new Fm(v),$=new Zf(F),Yt=new Pm(F,$),et=new Bm(F,$,ne,Yt),J=new Gm(F,et,$,ne),Lt=new Vm(F,Ot,P),nt=new Dm(bt),st=new Q0(v,w,G,Nt,Ot,Yt,nt),H=new Mg(v,bt),at=new ng,It=new lg(Nt),wt=new Cm(v,w,G,Pt,J,p,l),gt=new ug(v,J,Ot),z=new bg(F,ne,Ot,Pt),_t=new Im(F,Nt,ne),Ht=new km(F,Nt,ne),ne.programs=st.programs,v.capabilities=Ot,v.extensions=Nt,v.properties=bt,v.renderLists=at,v.shadowMap=gt,v.state=Pt,v.info=ne}ct();let j=new Rl(v,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(k,Z,!1))},this.getSize=function(E){return E.set(k,Z)},this.setSize=function(E,O,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,Z=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(k*V,Z*V).floor()},this.setDrawingBufferSize=function(E,O,q){k=E,Z=O,V=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,O,q,Y){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,O,q,Y),Pt.viewport(A.copy(ht).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,O,q,Y){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,O,q,Y),Pt.scissor(L.copy(St).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(E){Pt.setScissorTest(pt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,O=!0,q=!0){let Y=0;if(E){let B=!1;if(C!==null){let ot=C.texture.format;B=ot===ac||ot===rc||ot===sc}if(B){let ot=C.texture.type,lt=ot===Nn||ot===Ri||ot===Bs||ot===rs||ot===ec||ot===nc,yt=wt.getClearColor(),Mt=wt.getClearAlpha(),Ut=yt.r,Bt=yt.g,Et=yt.b;lt?(d[0]=Ut,d[1]=Bt,d[2]=Et,d[3]=Mt,F.clearBufferuiv(F.COLOR,0,d)):(x[0]=Ut,x[1]=Bt,x[2]=Et,x[3]=Mt,F.clearBufferiv(F.COLOR,0,x))}else Y|=F.COLOR_BUFFER_BIT}O&&(Y|=F.DEPTH_BUFFER_BIT),q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),at.dispose(),It.dispose(),bt.dispose(),w.dispose(),G.dispose(),J.dispose(),Yt.dispose(),z.dispose(),st.dispose(),j.dispose(),j.removeEventListener("sessionstart",je),j.removeEventListener("sessionend",$e),He.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=ne.autoReset,O=gt.enabled,q=gt.autoUpdate,Y=gt.needsUpdate,B=gt.type;ct(),ne.autoReset=E,gt.enabled=O,gt.autoUpdate=q,gt.needsUpdate=Y,gt.type=B}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){let O=E.target;O.removeEventListener("dispose",zt),oe(O)}function oe(E){Se(E),bt.remove(E)}function Se(E){let O=bt.get(E).programs;O!==void 0&&(O.forEach(function(q){st.releaseProgram(q)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,Y,B,ot){O===null&&(O=Xt);let lt=B.isMesh&&B.matrixWorld.determinant()<0,yt=Ss(E,O,q,Y,B);Pt.setMaterial(Y,lt);let Mt=q.index,Ut=1;if(Y.wireframe===!0){if(Mt=et.getWireframeAttribute(q),Mt===void 0)return;Ut=2}let Bt=q.drawRange,Et=q.attributes.position,qt=Bt.start*Ut,ie=(Bt.start+Bt.count)*Ut;ot!==null&&(qt=Math.max(qt,ot.start*Ut),ie=Math.min(ie,(ot.start+ot.count)*Ut)),Mt!==null?(qt=Math.max(qt,0),ie=Math.min(ie,Mt.count)):Et!=null&&(qt=Math.max(qt,0),ie=Math.min(ie,Et.count));let se=ie-qt;if(se<0||se===1/0)return;Yt.setup(B,Y,yt,q,Mt);let Pe,Zt=_t;if(Mt!==null&&(Pe=$.get(Mt),Zt=Ht,Zt.setIndex(Pe)),B.isMesh)Y.wireframe===!0?(Pt.setLineWidth(Y.wireframeLinewidth*ee()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(B.isLine){let At=Y.linewidth;At===void 0&&(At=1),Pt.setLineWidth(At*ee()),B.isLineSegments?Zt.setMode(F.LINES):B.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else B.isPoints?Zt.setMode(F.POINTS):B.isSprite&&Zt.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let At=B._multiDrawStarts,Ie=B._multiDrawCounts,jt=B._multiDrawCount,rn=Mt?$.get(Mt).bytesPerElement:1,Ni=bt.get(Y).currentProgram.getUniforms();for(let Ve=0;Ve<jt;Ve++)Ni.setValue(F,"_gl_DrawID",Ve),Zt.render(At[Ve]/rn,Ie[Ve])}else if(B.isInstancedMesh)Zt.renderInstances(qt,se,B.count);else if(q.isInstancedBufferGeometry){let At=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,At);Zt.renderInstances(qt,se,Ie)}else Zt.render(qt,se)};function Kt(E,O,q){E.transparent===!0&&E.side===Xe&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,di(E,O,q),E.side=ii,E.needsUpdate=!0,di(E,O,q),E.side=Xe):di(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),m=It.get(q),m.init(O),_.push(m),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==q&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ot=B.material;if(ot)if(Array.isArray(ot))for(let lt=0;lt<ot.length;lt++){let yt=ot[lt];Kt(yt,q,B),Y.add(yt)}else Kt(ot,q,B),Y.add(ot)}),_.pop(),m=null,Y},this.compileAsync=function(E,O,q=null){let Y=this.compile(E,O,q);return new Promise(B=>{function ot(){if(Y.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&Y.delete(lt)}),Y.size===0){B(E);return}setTimeout(ot,10)}Nt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Be=null;function we(E){Be&&Be(E)}function je(){He.stop()}function $e(){He.start()}let He=new su;He.setAnimationLoop(we),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(E){Be=E,j.setAnimationLoop(E),E===null?He.stop():He.start()},j.addEventListener("sessionstart",je),j.addEventListener("sessionend",$e),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,C),m=It.get(E,_.length),m.init(O),_.push(m),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Tt),ut=this.localClippingEnabled,Q=nt.init(this.clippingPlanes,ut),g=at.get(E,M.length),g.init(),M.push(g),j.enabled===!0&&j.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&En(ot,O,-1/0,v.sortObjects)}En(E,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(K,it),kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,kt&&wt.addToRenderList(g,E),this.info.render.frame++,Q===!0&&nt.beginShadows();let q=m.state.shadowsArray;gt.render(q,E,O),Q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,B=g.transmissive;if(m.setupLights(),O.isArrayCamera){let ot=O.cameras;if(B.length>0)for(let lt=0,yt=ot.length;lt<yt;lt++){let Mt=ot[lt];Ui(Y,B,E,Mt)}kt&&wt.render(E);for(let lt=0,yt=ot.length;lt<yt;lt++){let Mt=ot[lt];Wn(g,E,Mt,Mt.viewport)}}else B.length>0&&Ui(Y,B,E,O),kt&&wt.render(E),Wn(g,E,O);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,O),Yt.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(m=_[_.length-1],Q===!0&&nt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function En(E,O,q,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){Y&&vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);let lt=J.update(E),yt=E.material;yt.visible&&g.push(E,lt,yt,q,vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let lt=J.update(E),yt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),vt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),vt.copy(lt.boundingSphere.center)),vt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(yt)){let Mt=lt.groups;for(let Ut=0,Bt=Mt.length;Ut<Bt;Ut++){let Et=Mt[Ut],qt=yt[Et.materialIndex];qt&&qt.visible&&g.push(E,lt,qt,q,vt.z,Et)}}else yt.visible&&g.push(E,lt,yt,q,vt.z,null)}}let ot=E.children;for(let lt=0,yt=ot.length;lt<yt;lt++)En(ot[lt],O,q,Y)}function Wn(E,O,q,Y){let B=E.opaque,ot=E.transmissive,lt=E.transparent;m.setupLightsView(q),Q===!0&&nt.setGlobalState(v.clippingPlanes,q),Y&&Pt.viewport(A.copy(Y)),B.length>0&&Xn(B,O,q),ot.length>0&&Xn(ot,O,q),lt.length>0&&Xn(lt,O,q),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ui(E,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Ys:Nn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let ot=m.state.transmissionRenderTarget[Y.id],lt=Y.viewport||A;ot.setSize(lt.z,lt.w);let yt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(U),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),kt&&wt.render(q);let Mt=v.toneMapping;v.toneMapping=bn;let Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Q===!0&&nt.setGlobalState(v.clippingPlanes,Y),Xn(E,q,Y),P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Et=0,qt=O.length;Et<qt;Et++){let ie=O[Et],se=ie.object,Pe=ie.geometry,Zt=ie.material,At=ie.group;if(Zt.side===Xe&&se.layers.test(Y.layers)){let Ie=Zt.side;Zt.side=Ne,Zt.needsUpdate=!0,Ms(se,q,Y,Pe,Zt,At),Zt.side=Ie,Zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot))}v.setRenderTarget(yt),v.setClearColor(U,X),Ut!==void 0&&(Y.viewport=Ut),v.toneMapping=Mt}function Xn(E,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ot=E.length;B<ot;B++){let lt=E[B],yt=lt.object,Mt=lt.geometry,Ut=Y===null?lt.material:Y,Bt=lt.group;yt.layers.test(q.layers)&&Ms(yt,O,q,Mt,Ut,Bt)}}function Ms(E,O,q,Y,B,ot){E.onBeforeRender(v,O,q,Y,B,ot),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,O,q,Y,E,ot),B.transparent===!0&&B.side===Xe&&B.forceSinglePass===!1?(B.side=Ne,B.needsUpdate=!0,v.renderBufferDirect(q,O,Y,B,E,ot),B.side=ii,B.needsUpdate=!0,v.renderBufferDirect(q,O,Y,B,E,ot),B.side=Xe):v.renderBufferDirect(q,O,Y,B,E,ot),E.onAfterRender(v,O,q,Y,B,ot)}function di(E,O,q){O.isScene!==!0&&(O=Xt);let Y=bt.get(E),B=m.state.lights,ot=m.state.shadowsArray,lt=B.state.version,yt=st.getParameters(E,B.state,ot,O,q),Mt=st.getProgramCacheKey(yt),Ut=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",zt),Ut=new Map,Y.programs=Ut);let Bt=Ut.get(Mt);if(Bt!==void 0){if(Y.currentProgram===Bt&&Y.lightsStateVersion===lt)return gn(E,yt),Bt}else yt.uniforms=st.getUniforms(E),E.onBeforeCompile(yt,v),Bt=st.acquireProgram(yt,Mt),Ut.set(Mt,Bt),Y.uniforms=yt.uniforms;let Et=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=nt.uniform),gn(E,yt),Y.needsLights=Js(E),Y.lightsStateVersion=lt,Y.needsLights&&(Et.ambientLightColor.value=B.state.ambient,Et.lightProbe.value=B.state.probe,Et.directionalLights.value=B.state.directional,Et.directionalLightShadows.value=B.state.directionalShadow,Et.spotLights.value=B.state.spot,Et.spotLightShadows.value=B.state.spotShadow,Et.rectAreaLights.value=B.state.rectArea,Et.ltc_1.value=B.state.rectAreaLTC1,Et.ltc_2.value=B.state.rectAreaLTC2,Et.pointLights.value=B.state.point,Et.pointLightShadows.value=B.state.pointShadow,Et.hemisphereLights.value=B.state.hemi,Et.directionalShadowMap.value=B.state.directionalShadowMap,Et.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Et.spotShadowMap.value=B.state.spotShadowMap,Et.spotLightMatrix.value=B.state.spotLightMatrix,Et.spotLightMap.value=B.state.spotLightMap,Et.pointShadowMap.value=B.state.pointShadowMap,Et.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Bt,Y.uniformsList=null,Bt}function bs(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=es.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function gn(E,O){let q=bt.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Ss(E,O,q,Y,B){O.isScene!==!0&&(O=Xt),P.resetTextureUnits();let ot=O.fog,lt=Y.isMeshStandardMaterial?O.environment:null,yt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:oi,Mt=(Y.isMeshStandardMaterial?G:w).get(Y.envMap||lt),Ut=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!q.morphAttributes.position,qt=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color,se=bn;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=v.toneMapping);let Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=Pe!==void 0?Pe.length:0,At=bt.get(Y),Ie=m.state.lights;if(Q===!0&&(ut===!0||E!==y)){let Je=E===y&&Y.id===b;nt.setState(Y,E,Je)}let jt=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ie.state.version||At.outputColorSpace!==yt||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==Mt||Y.fog===!0&&At.fog!==ot||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Ut||At.vertexTangents!==Bt||At.morphTargets!==Et||At.morphNormals!==qt||At.morphColors!==ie||At.toneMapping!==se||At.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,At.__version=Y.version);let rn=At.currentProgram;jt===!0&&(rn=di(Y,O,B));let Ni=!1,Ve=!1,ws=!1,ce=rn.getUniforms(),xn=At.uniforms;if(Pt.useProgram(rn.program)&&(Ni=!0,Ve=!0,ws=!0),Y.id!==b&&(b=Y.id,Ve=!0),Ni||y!==E){Pt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Rf(rt),Cf(rt),ce.setValue(F,"projectionMatrix",rt)):ce.setValue(F,"projectionMatrix",E.projectionMatrix),ce.setValue(F,"viewMatrix",E.matrixWorldInverse);let qn=ce.map.cameraPosition;qn!==void 0&&qn.setValue(F,Ct.setFromMatrixPosition(E.matrixWorld)),Ot.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ce.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ve=!0,ws=!0)}if(B.isSkinnedMesh){ce.setOptional(F,B,"bindMatrix"),ce.setOptional(F,B,"bindMatrixInverse");let Je=B.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ce.setValue(F,"boneTexture",Je.boneTexture,P))}B.isBatchedMesh&&(ce.setOptional(F,B,"batchingTexture"),ce.setValue(F,"batchingTexture",B._matricesTexture,P),ce.setOptional(F,B,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",B._indirectTexture,P),ce.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",B._colorsTexture,P));let Es=q.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&Lt.update(B,q,rn),(Ve||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,ce.setValue(F,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(xn.envMap.value=Mt,xn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(xn.envMapIntensity.value=O.environmentIntensity),Ve&&(ce.setValue(F,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&Ga(xn,ws),ot&&Y.fog===!0&&H.refreshFogUniforms(xn,ot),H.refreshMaterialUniforms(xn,Y,V,Z,m.state.transmissionRenderTarget[E.id]),es.upload(F,bs(At),xn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(es.upload(F,bs(At),xn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ce.setValue(F,"center",B.center),ce.setValue(F,"modelViewMatrix",B.modelViewMatrix),ce.setValue(F,"normalMatrix",B.normalMatrix),ce.setValue(F,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Je=Y.uniformsGroups;for(let qn=0,Yn=Je.length;qn<Yn;qn++){let Ac=Je[qn];z.update(Ac,rn),z.bind(Ac,rn)}}return rn}function Ga(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Js(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,q){bt.get(E.texture).__webglTexture=O,bt.get(E.depthTexture).__webglTexture=q;let Y=bt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){let q=bt.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){C=E,T=O,S=q;let Y=!0,B=null,ot=!1,lt=!1;if(E){let Mt=bt.get(E);if(Mt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(Mt.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(Mt.__hasExternalTextures)P.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Et=E.depthTexture;if(Mt.__boundDepthTexture!==Et){if(Et!==null&&bt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}let Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(lt=!0);let Bt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?B=Bt[O][q]:B=Bt[O],ot=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?B=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[q]:B=Bt,A.copy(E.viewport),L.copy(E.scissor),I=E.scissorTest}else A.copy(ht).multiplyScalar(V).floor(),L.copy(St).multiplyScalar(V).floor(),I=pt;if(Pt.bindFramebuffer(F.FRAMEBUFFER,B)&&Y&&Pt.drawBuffers(E,B),Pt.viewport(A),Pt.scissor(L),Pt.setScissorTest(I),ot){let Mt=bt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,q)}else if(lt){let Mt=bt.get(E.texture),Ut=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,q||0,Ut)}b=-1},this.readRenderTargetPixels=function(E,O,q,Y,B,ot,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(yt=yt[lt]),yt){Pt.bindFramebuffer(F.FRAMEBUFFER,yt);try{let Mt=E.texture,Ut=Mt.format,Bt=Mt.type;if(!Ot.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B&&F.readPixels(O,q,Y,B,Dt.convert(Ut),Dt.convert(Bt),ot)}finally{let Mt=C!==null?bt.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,Y,B,ot,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(yt=yt[lt]),yt){let Mt=E.texture,Ut=Mt.format,Bt=Mt.type;if(!Ot.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B){Pt.bindFramebuffer(F.FRAMEBUFFER,yt);let Et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Et),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(O,q,Y,B,Dt.convert(Ut),Dt.convert(Bt),0);let qt=C!==null?bt.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,qt);let ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Af(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Et),F.deleteSync(ie),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,q=0){E.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);let Y=Math.pow(2,-q),B=Math.floor(E.image.width*Y),ot=Math.floor(E.image.height*Y),lt=O!==null?O.x:0,yt=O!==null?O.y:0;P.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,lt,yt,B,ot),Pt.unbindTexture()},this.copyTextureToTexture=function(E,O,q=null,Y=null,B=0){E.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let ot,lt,yt,Mt,Ut,Bt,Et,qt,ie,se=E.isCompressedTexture?E.mipmaps[B]:E.image;q!==null?(ot=q.max.x-q.min.x,lt=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,Mt=q.min.x,Ut=q.min.y,Bt=q.isBox3?q.min.z:0):(ot=se.width,lt=se.height,yt=se.depth||1,Mt=0,Ut=0,Bt=0),Y!==null?(Et=Y.x,qt=Y.y,ie=Y.z):(Et=0,qt=0,ie=0);let Pe=Dt.convert(O.format),Zt=Dt.convert(O.type),At;O.isData3DTexture?(P.setTexture3D(O,0),At=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),At=F.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Ie=F.getParameter(F.UNPACK_ROW_LENGTH),jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ni=F.getParameter(F.UNPACK_SKIP_ROWS),Ve=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt);let ws=E.isDataArrayTexture||E.isData3DTexture,ce=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let xn=bt.get(E),Es=bt.get(O),Je=bt.get(xn.__renderTarget),qn=bt.get(Es.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Je.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<yt;Yn++)ws&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,B,Bt+Yn),E.isDepthTexture?(ce&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(O).__webglTexture,B,ie+Yn),F.blitFramebuffer(Mt,Ut,ot,lt,Et,qt,ot,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ce?F.copyTexSubImage3D(At,B,Et,qt,ie+Yn,Mt,Ut,ot,lt):F.copyTexSubImage2D(At,B,Et,qt,ie+Yn,Mt,Ut,ot,lt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ce?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(At,B,Et,qt,ie,ot,lt,yt,Pe,Zt,se.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(At,B,Et,qt,ie,ot,lt,yt,Pe,se.data):F.texSubImage3D(At,B,Et,qt,ie,ot,lt,yt,Pe,Zt,se):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Et,qt,ot,lt,Pe,Zt,se.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Et,qt,se.width,se.height,Pe,se.data):F.texSubImage2D(F.TEXTURE_2D,B,Et,qt,ot,lt,Pe,Zt,se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ni),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve),B===0&&O.generateMipmaps&&F.generateMipmap(At),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,q=null,Y=null,B=0){return E.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,q,Y,B)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){T=0,S=0,C=null,Pt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var qr=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cl=class extends Ye{constructor(t=null,e=1,n=1,i,r,a,o,l,c=qe,h=qe,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends Vt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$i=new te,Ah=new te,_r=[],Rh=new Fn,Sg=new te,Is=new Qt,Ls=new On,cs=class extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Rh.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Ls.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),t.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$i),Ah.multiplyMatrices(n,$i),Is.matrixWorld=Ah,Is.raycast(t,_r);for(let a=0,o=_r.length;a<o;a++){let l=_r[a];l.instanceId=r,l.object=this,e.push(l)}_r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cl(new Float32Array(i*this.count),i,this.count,ic,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Pl=class extends ri{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zr=new N,jr=new N,Ch=new te,Ds=new os,yr=new On,Mo=new N,Ph=new N,Il=class extends Ze{constructor(t=new me,e=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zr.fromBufferAttribute(e,i-1),jr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zr.distanceTo(jr);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;Ch.copy(i).invert(),Ds.copy(t.ray).applyMatrix4(Ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=p,g=d-1;x<g;x+=c){let m=h.getX(x),M=h.getX(x+1),_=Mr(this,t,Ds,l,m,M);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(d-1),g=h.getX(p),m=Mr(this,t,Ds,l,x,g);m&&e.push(m)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=p,g=d-1;x<g;x+=c){let m=Mr(this,t,Ds,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=Mr(this,t,Ds,l,d-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mr(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Zr.fromBufferAttribute(a,i),jr.fromBufferAttribute(a,r),e.distanceSqToSegment(Zr,jr,Mo,Ph)>n)return;Mo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Mo);if(!(l<t.near||l>t.far))return{distance:l,point:Ph.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Ih=new N,Lh=new N,$r=class extends Il{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ih.fromBufferAttribute(e,i),Lh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ih.distanceTo(Lh);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ll=class extends ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dh=new te,Dl=new os,br=new On,Sr=new N,Jr=class extends Ze{constructor(t=new me,e=new Ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;Dh.copy(i).invert(),Dl.copy(t.ray).applyMatrix4(Dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let d=f,x=p;d<x;d++){let g=c.getX(d);Sr.fromBufferAttribute(u,g),Uh(Sr,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let d=f,x=p;d<x;d++)Sr.fromBufferAttribute(u,d),Uh(Sr,d,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uh(s,t,e,n,i,r,a){let o=Dl.distanceSqToPoint(s);if(o<e){let l=new N;Dl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Rt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,i=[],r=[],a=[],o=new N,l=new te;for(let p=0;p<=t;p++){let d=p/t;i[p]=this.getTangentAt(d,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(Ue(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Ue(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let d=1;d<=t;d++)r[d].applyMatrix4(l.makeRotationAxis(i[d],p*d)),a[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hs=class extends en{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ul=class extends Hs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var wr=new N,bo=new lc,So=new lc,wo=new lc,Nl=class extends en{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(wr.subVectors(i[0],i[1]).add(i[0]),c=wr);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(wr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,d=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),d<1e-4&&(d=x),g<1e-4&&(g=x),bo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,d,x,g),So.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,d,x,g),wo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,d,x,g)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),So.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(bo.calc(l),So.calc(l),wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function wg(s,t){let e=1-s;return e*e*t}function Eg(s,t){return 2*(1-s)*s*t}function Tg(s,t){return s*s*t}function Fs(s,t,e,n){return wg(s,t)+Eg(s,e)+Tg(s,n)}function Ag(s,t){let e=1-s;return e*e*e*t}function Rg(s,t){let e=1-s;return 3*e*e*s*t}function Cg(s,t){return 3*(1-s)*s*s*t}function Pg(s,t){return s*s*s*t}function Os(s,t,e,n,i){return Ag(s,t)+Rg(s,e)+Cg(s,n)+Pg(s,i)}var Kr=class extends en{constructor(t=new Rt,e=new Rt,n=new Rt,i=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Rt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,i.x,r.x,a.x,o.x),Os(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends en{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,i.x,r.x,a.x,o.x),Os(t,i.y,r.y,a.y,o.y),Os(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qr=class extends en{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends en{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends en{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Fs(t,i.x,r.x,a.x),Fs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends en{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Fs(t,i.x,r.x,a.x),Fs(t,i.y,r.y,a.y),Fs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Nh(o,l.x,c.x,h.x,u.x),Nh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Rt().fromArray(i))}return this}},zh=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Nl,CubicBezierCurve:Kr,CubicBezierCurve3:zl,EllipseCurve:Hs,LineCurve:Qr,LineCurve3:Fl,QuadraticBezierCurve:ta,QuadraticBezierCurve3:Ol,SplineCurve:ea}),Bl=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new zh[i.type]().fromJSON(i))}return this}},na=class extends Bl{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qr(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ta(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Kr(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i),new Rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Hs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Vs=class s extends me{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],d=0,x=[],g=n/2,m=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(p,2));function M(){let v=new N,R=new N,T=0,S=(e-t)/n;for(let C=0;C<=r;C++){let b=[],y=C/r,A=y*(e-t)+t;for(let L=0;L<=i;L++){let I=L/i,U=I*l+o,X=Math.sin(U),k=Math.cos(U);R.x=A*X,R.y=-y*n+g,R.z=A*k,u.push(R.x,R.y,R.z),v.set(X,S,k).normalize(),f.push(v.x,v.y,v.z),p.push(I,1-y),b.push(d++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){let y=x[b][C],A=x[b+1][C],L=x[b+1][C+1],I=x[b][C+1];(t>0||b!==0)&&(h.push(y,A,I),T+=3),(e>0||b!==r-1)&&(h.push(A,L,I),T+=3)}c.addGroup(m,T,0),m+=T}function _(v){let R=d,T=new Rt,S=new N,C=0,b=v===!0?t:e,y=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),d++;let A=d;for(let L=0;L<=i;L++){let U=L/i*l+o,X=Math.cos(U),k=Math.sin(U);S.x=b*k,S.y=g*y,S.z=b*X,u.push(S.x,S.y,S.z),f.push(0,y,0),T.x=X*.5+.5,T.y=k*.5*y+.5,p.push(T.x,T.y),d++}for(let L=0;L<i;L++){let I=R+L,U=A+L;v===!0?h.push(U,U+1,I):h.push(U+1,U,I),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hs=class s extends Vs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gs=class extends na{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new na().fromJSON(i))}return this}},Ig={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=cu(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=zg(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let d=e;d<i;d+=e)u=s[d],f=s[d+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ws(r,a,e,o,l,p,0),a}};function cu(s,t,e,n,i){let r,a;if(i===Yg(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Fh(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Fh(r,s[r],s[r+1],a);return a&&ha(a,a.next)&&(qs(a),a=a.next),a}function Pi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ha(e,e.next)||de(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Hg(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Dg(s,n,i,r):Lg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),qs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Ug(Pi(s),t,e),Ws(s,t,e,n,i,r,2)):a===2&&Ng(s,t,e,n,i,r):Ws(Pi(s),t,e,n,i,r,1);break}}}function Lg(s){let t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,d=n.next;for(;d!==t;){if(d.x>=h&&d.x<=f&&d.y>=u&&d.y<=p&&Ki(i,o,r,l,a,c,d.x,d.y)&&de(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Dg(s,t,e,n){let i=s.prev,r=s,a=s.next;if(de(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,d=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=kl(p,d,t,e,n),M=kl(x,g,t,e,n),_=s.prevZ,v=s.nextZ;for(;_&&_.z>=m&&v&&v.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=d&&_.y<=g&&_!==i&&_!==a&&Ki(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=x&&v.y>=d&&v.y<=g&&v!==i&&v!==a&&Ki(o,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=x&&_.y>=d&&_.y<=g&&_!==i&&_!==a&&Ki(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=d&&v.y<=g&&v!==i&&v!==a&&Ki(o,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ug(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!ha(i,r)&&hu(i,n,n.next,r)&&Xs(i,r)&&Xs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qs(n),qs(n.next),n=s=r),n=n.next}while(n!==s);return Pi(n)}function Ng(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wg(a,o)){let l=uu(a,o);a=Pi(a,a.next),l=Pi(l,l.next),Ws(a,t,e,n,i,r,0),Ws(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function zg(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=cu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Gg(c));for(i.sort(Fg),r=0;r<i.length;r++)e=Og(i[r],e);return e}function Fg(s,t){return s.x-t.x}function Og(s,t){let e=Bg(s,t);if(!e)return t;let n=uu(e,s);return Pi(n,n.next),Pi(e,e.next)}function Bg(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ki(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Xs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&kg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function kg(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function Hg(s,t,e,n){let i=s;do i.z===0&&(i.z=kl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vg(i)}function Vg(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function kl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Gg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ki(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Wg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Xg(s,t)&&(Xs(s,t)&&Xs(t,s)&&qg(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||ha(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ha(s,t){return s.x===t.x&&s.y===t.y}function hu(s,t,e,n){let i=Tr(de(s,t,e)),r=Tr(de(s,t,n)),a=Tr(de(e,n,s)),o=Tr(de(e,n,t));return!!(i!==r&&a!==o||i===0&&Er(s,e,t)||r===0&&Er(s,n,t)||a===0&&Er(e,s,n)||o===0&&Er(e,t,n))}function Er(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Tr(s){return s>0?1:s<0?-1:0}function Xg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xs(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function qg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function uu(s,t){let e=new Hl(s.i,s.x,s.y),n=new Hl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fh(s,t,e,n){let i=new Hl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yg(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ti=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Oh(t),Bh(n,t);let a=t.length;e.forEach(Oh);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Bh(n,e[l]);let o=Ig.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ia=class s extends me{constructor(t=new Gs([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ye(i,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2));function c(h){let u=i.length/3,f=h.extractPoints(e),p=f.shape,d=f.holes;Ti.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=d.length;g<m;g++){let M=d[g];Ti.isClockWise(M)===!0&&(d[g]=M.reverse())}let x=Ti.triangulateShape(p,d);for(let g=0,m=d.length;g<m;g++){let M=d[g];p=p.concat(M)}for(let g=0,m=p.length;g<m;g++){let M=p[g];i.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],_=M[0]+u,v=M[1]+u,R=M[2]+u;n.push(_,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zg(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function Zg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var sa=class s extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,f=new N,p=[],d=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,v=0;m===0&&a===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+_*o),d.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-_),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let _=h[m][M+1],v=h[m][M],R=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&p.push(_,v,T),(m!==n-1||l<Math.PI)&&p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ar(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function jg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vl=class extends us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:r=t,o=2*e-n;break;case Dc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:a=t,l=2*n-e;break;case Dc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,d=(n-e)/(i-e),x=d*d,g=x*d,m=-f*g+2*f*x-f*d,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*d+1,_=(-1-p)*g+(1.5+p)*x+.5*d,v=p*g-p*x;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+M*a[c+R]+_*a[l+R]+v*a[u+R];return r}},Gl=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Wl=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&jg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let d=0;d!==n;++d){let x=e[u+d];if(x!==e[f+d]||x!==e[p+d]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=hl;var Ii=class extends fn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Dr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends fn{};Xl.prototype.ValueTypeName="color";var ql=class extends fn{};ql.prototype.ValueTypeName="number";var Yl=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ra=class extends fn{InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends fn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Dr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends fn{};Zl.prototype.ValueTypeName="vector";var jl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],d=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return d}return null}}},$g=new jl,$l=class{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var cc="\\[\\]\\.:\\/",Jg=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",Kg="[^"+cc.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",hc),tx=/(WCOD+)?/.source.replace("WCOD",Kg),ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),ix=new RegExp("^"+Qg+tx+ex+nx+"$"),sx=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(t){let e=ix.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Jl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ux=new Float32Array(1);var kh=new te,aa=class{constructor(t,e,n=0,i=1/0){this.ray=new os(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(t,e=!0,n=[]){return Kl(t,this,n,e),n.sort(Hh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Kl(t[i],this,n,e);return n.sort(Hh),n}};function Hh(s,t){return s.distance-t.distance}function Kl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Kl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);var dn="0.4.0";var ci={index:null,buf:null,geo:{}};async function fu(s){let[t,e]=await Promise.all([fetch("assets/models.json?v="+dn).then(n=>n.json()),rx("assets/models.bin?v="+dn,s)]);ci.index=t,ci.buf=e}async function rx(s,t){let e=await fetch(s);if(!e.ok)throw new Error(s+" "+e.status);if(!t||!e.body||!e.headers.get("content-length"))return e.arrayBuffer();let n=+e.headers.get("content-length"),i=e.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await i.read();if(c)break;r.push(h),a+=h.length,t(Math.min(.99,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return t(1),o.buffer}function uc(s,t){let e=ci.index[s],n=e.parts.find(r=>r.name===t)||e.parts[0],i=ci.buf;return{part:n,pos:new Float32Array(i,n.pos,n.n*3),nrm:new Int8Array(i,n.nrm,n.n*4),col:new Uint8Array(i,n.col,n.n*4),idx:new Uint16Array(i,n.idx,n.i)}}function Di(s,t){let e=s+"/"+t;if(ci.geo[e])return ci.geo[e];let n=uc(s,t),i=new me;return i.setAttribute("position",new Vt(n.pos,3)),i.setAttribute("normal",new Vt(n.nrm,4,!0)),i.setAttribute("col",new Vt(n.col,4,!0)),i.setIndex(new Vt(n.idx,1)),i.computeBoundingSphere(),ci.geo[e]=i,i}function fc(s){return ci.index[s]}var ax=["impactMetal_heavy_000","impactMetal_heavy_001","impactMetal_heavy_002","impactMetal_light_000","impactGlass_heavy_000","impactPlate_heavy_000","select_001","confirmation_001","back_001","switch_001","explosionCrunch_000","forceField_000"],ua=class{constructor(t){this.vol={music:t.music??.7,sfx:t.sfx??.8},this.mix={engine:1,sfx:1,music:1},this.ctx=null,this.buf={},this.engines=[],this.music=null,this.musicName=""}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol.sfx,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.worklet=null,e.audioWorklet&&(this.worklet=e.audioWorklet.addModule("assets/engine-worklet.js?v="+dn).then(()=>!0).catch(()=>!1));for(let r of ax)fetch("assets/sfx/"+r+".ogg?v="+dn).then(a=>a.arrayBuffer()).then(a=>e.decodeAudioData(a)).then(a=>{this.buf[r]=a}).catch(()=>{});this.playMusic("alpha-dance")}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}playMusic(t){if(this.musicName===t)return;this.musicName=t,this.music||(this.music=new Audio,this.music.loop=!0),this.music.src="assets/music/"+t+".ogg?v="+dn,this.music.volume=this.vol.music*.45*this.mix.music;let e=this.music.play();e&&e.catch&&e.catch(()=>{})}volume(t){this.vol={music:t.music??this.vol.music,sfx:t.sfx??this.vol.sfx},this.master&&(this.master.gain.value=this.vol.sfx),this.music&&(this.music.volume=this.vol.music*.45*this.mix.music)}setMix(t){this.mix={engine:t.engine??1,sfx:t.sfx??1,music:t.music??1},this.volume({})}play(t,e,n){let i=this.buf[t];if(!i||!this.ctx)return;let r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=n||1;let a=this.ctx.createGain();a.gain.value=(e===void 0?1:e)*this.mix.sfx,r.connect(a),a.connect(this.master),r.start()}ui(t){this.play(t==="ok"?"confirmation_001":t==="back"?"back_001":t==="switch"?"switch_001":"select_001",.5)}engineNode(t,e){let n=this.ctx;if(this.workletOk){let i=new AudioWorkletNode(n,"engine",{numberOfInputs:0,outputChannelCount:[1],processorOptions:{cyl:t.cyl||4,turbo:!!t.turbo,ev:!!t.ev,diesel:!!t.diesel,rpmMax:t.rpm,seed:e}}),r=i.parameters;return{node:i,rpm:r.get("rpm"),load:r.get("load"),speed:r.get("speed"),gain:r.get("gain"),nodes:[]}}return null}engineVoice(t,e){let n=this.ctx,i=t?this.engineNode(t,e||1):null,r=n.createOscillator();r.type="sawtooth";let a=n.createOscillator();a.type="square";let o=this.noiseSrc(),l=n.createGain();l.gain.value=.12;let c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;let h=n.createGain();h.gain.value=0;let u=n.createGain();u.gain.value=.5,r.connect(c),a.connect(u),u.connect(c),o.connect(l),l.connect(c),c.connect(h);let f=this.noiseSrc(),p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=1700,p.Q.value=4;let d=n.createGain();d.gain.value=0,f.connect(p),p.connect(d);let x=this.noiseSrc(),g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let m=n.createGain();m.gain.value=0,x.connect(g),g.connect(m);let M=this.noiseSrc(),_=n.createBiquadFilter();_.type="bandpass",_.frequency.value=900,_.Q.value=.8;let v=n.createGain();v.gain.value=0,M.connect(_),_.connect(v);let R=n.createStereoPanner?n.createStereoPanner():null,T=R||n.createGain();return i?i.node.connect(T):h.connect(T),d.connect(T),m.connect(T),v.connect(T),T.connect(this.master),i||(r.start(),a.start(),o.start()),f.start(),x.start(),M.start(),{wk:i,spec:t,o1:r,o2:a,f:c,g:h,tg:d,wg:m,ngn:v,nf:_,pan:R,nodes:i?[f,x,M]:[r,a,o,f,x,M],out:T}}async begin(t){if(!this.ctx||(this.end(),this.cur=t,this.worklet&&(this.workletOk=await this.worklet),this.cur!==t||this.engines.length))return;let e=t.race.players.length;for(let n=0;n<e;n++){let i=this.engineVoice(t.race.players[n].spec,n+1);i.pan&&(i.pan.pan.value=e>1?n?.5:-.5:0),this.engines.push(i)}this.rivals=[];for(let n of t.race.racers)n.player>=0||this.rivals.length>=3||this.rivals.some(i=>i.spec===n.spec)||this.rivals.push(this.engineVoice(n.spec,7+this.rivals.length));this.playMusic("time-driving")}update(t,e){if(!this.ctx||!this.engines.length)return;let n=this.ctx.currentTime,i=t.race,r=i.players.length>1?.6:1;for(let o=0;o<this.engines.length;o++){let l=this.engines[o],c=i.players[o],h=c.veh;this.voice(l,h,c,n,r,1)}let a=i.players[0].veh;for(let o=0;o<this.rivals.length;o++){let l=this.rivals[o],c=null,h=1e9;for(let u=0;u<i.racers.length;u++){let f=i.racers[u];if(f.player>=0||f.spec!==l.spec)continue;let p=Math.hypot(f.veh.px-a.px,f.veh.pz-a.pz);p<h&&(h=p,c=f)}c&&this.voice(l,c.veh,c,n,r*Math.max(0,1-h/60)*.6,0)}}voice(t,e,n,i,r,a){let o=e.rpm,l=Math.max(e.input.throttle,e.nitroOn?1:0),c=n.wreck>0;if(t.wk){let f=c?0:e.shiftT>0?.04:l;t.wk.rpm.setValueAtTime(c?800:o,i),t.wk.load.setValueAtTime(f,i),t.wk.speed.setValueAtTime(a?e.speed:0,i),t.wk.gain.setTargetAtTime((c?.15*r:(e.spec.ev?.9:.55+.25*f)*r)*this.mix.engine,i,.05)}let h=28+o/60*1.6;t.o1.frequency.setTargetAtTime(h,i,.03),t.o2.frequency.setTargetAtTime(h*.5,i,.03),t.f.frequency.setTargetAtTime(300+o*.32*(.5+l*.5),i,.05),t.g.gain.setTargetAtTime((c?.02:(.1+l*.14)*r)*this.mix.engine,i,.05);let u=0;for(let f=0;f<4;f++){let p=e.wheels[f];p.contact&&(u=Math.max(u,p.slipLat,p.slipLong))}t.tg.gain.setTargetAtTime(u>.3&&e.speed>5?Math.min(.22,(u-.3)*.4)*r*this.mix.sfx:0,i,.04),t.wg.gain.setTargetAtTime(a?Math.min(.18,e.speed*e.speed*2e-5)*r*this.mix.sfx:0,i,.1),t.ngn.gain.setTargetAtTime(e.nitroOn?.16*r*Math.min(1.6,e.nitroOn)*this.mix.sfx:0,i,.06),t.nf.frequency.setTargetAtTime(e.nitroOn>1.5?600:1100,i,.1)}event(t,e,n,i){if(!this.ctx)return;let a=e.player>=0;if(!a)for(let o of i.race.players)Math.hypot(o.veh.px-e.veh.px,o.veh.pz-e.veh.pz)<50&&(a=!0);if(a)if(t==="hit"){let o=this.ctx.currentTime;if(o-(this.lastHit||0)<.12)return;this.lastHit=o;let l=Math.min(1,n/18);if(l<.1)return;this.play(l>.5?"impactMetal_heavy_00"+(Math.random()*3|0):"impactMetal_light_000",.4+l*.6,.9+Math.random()*.2)}else t==="wreck"&&(this.play("explosionCrunch_000",.9,.8),this.play("impactGlass_heavy_000",.7),this.play("impactPlate_heavy_000",.8,.85))}drop(t){for(let e of t.nodes)try{e.stop()}catch{}t.wk&&t.wk.node.disconnect(),t.out.disconnect()}end(){for(let t of this.engines.concat(this.rivals||[]))this.drop(t);this.engines=[],this.rivals=[],this.cur=null,this.ctx&&this.playMusic("alpha-dance")}pause(){this.ctx&&this.ctx.suspend(),this.music&&this.music.pause()}resume(){if(this.ctx&&this.ctx.resume(),this.music){let t=this.music.play();t&&t.catch&&t.catch(()=>{})}}close(){this.end(),this.music&&(this.music.pause(),this.music.src=""),this.ctx&&this.ctx.close(),this.ctx=null}};var hi=16,ge=3.5,dc=12,pc=2.5,ox=3.25,fa=class s{static async load(t){let e=(l,c)=>fetch("assets/city/"+l+"?v="+dn).then(h=>{if(!h.ok)throw new Error(l+" "+h.status);return c?h.arrayBuffer():h.json()}),[n,i,r,a,o]=await Promise.all([e("city.json"),e("net.bin",1),e("ground.bin",1),e("bld.bin",1),e("side.bin",1)]);return t&&t(1),new s(n,i,r,a,o)}constructor(t,e,n,i,r){this.meta=t,this.box=t.box;let a=new Float32Array(e),o=this.n=a.length/3;this.px=new Float32Array(o),this.py=new Float32Array(o),this.pz=new Float32Array(o);for(let d=0;d<o;d++)this.px[d]=a[d*3],this.py[d]=a[d*3+1],this.pz[d]=a[d*3+2];let l=new Uint8Array(r);this.pl=new Float32Array(o),this.pr=new Float32Array(o);for(let d=0;d<o;d++)this.pl[d]=l[d*2]/40,this.pr[d]=l[d*2+1]/40;let c=t.edges,h=this.ne=c.length;this.eOff=new Int32Array(h),this.eN=new Int32Array(h),this.eA=new Int32Array(h),this.eB=new Int32Array(h),this.eHw=new Float32Array(h),this.eCls=new Uint8Array(h),this.eOne=new Uint8Array(h),this.eRa=new Uint8Array(h),this.eLim=new Uint8Array(h),this.eName=new Int32Array(h),this.eLen=new Float32Array(h),this.sE=new Int32Array(o),this.sS=new Float32Array(o),this.tx=new Float32Array(o),this.tz=new Float32Array(o),this.sJ=new Int32Array(o).fill(-1);let u=t.junctions,f=this.nj=u.length;this.jx=new Float32Array(f),this.jz=new Float32Array(f),this.jr=new Float32Array(f),this.jy=new Float32Array(f),this.jEdges=[];for(let d=0;d<f;d++)this.jx[d]=u[d][0],this.jz[d]=u[d][1],this.jr[d]=u[d][2],this.jy[d]=u[d][3],this.jEdges.push([]);for(let d=0;d<h;d++){let x=c[d];this.eOff[d]=x[1],this.eN[d]=x[2],this.eA[d]=x[3],this.eB[d]=x[4],this.eHw[d]=x[5],this.eCls[d]=x[6],this.eOne[d]=x[7],this.eRa[d]=x[8],this.eLim[d]=x[9],this.eName[d]=x[10],this.jEdges[x[3]].push(d),this.jEdges[x[4]].push(d);let g=x[1],m=x[2],M=0;for(let R=0;R<m;R++){let T=g+R;this.sE[T]=d,R>0&&(M+=Math.hypot(this.px[T]-this.px[T-1],this.pz[T]-this.pz[T-1])),this.sS[T]=M;let S=R>0?T-1:T,C=R<m-1?T+1:T,b=this.px[C]-this.px[S],y=this.pz[C]-this.pz[S],A=Math.hypot(b,y)||1;this.tx[T]=b/A,this.tz[T]=y/A}this.eLen[d]=M;let _=this.jr[x[3]],v=this.jr[x[4]];for(let R=0;R<m;R++){let T=g+R,S=this.sS[T];S<_+2?this.sJ[T]=x[3]:M-S<v+2&&(this.sJ[T]=x[4])}}this.lights=t.lights,this.stations=t.stations,this.names=t.names,this.areas=t.areas||[],this.jLight=new Int32Array(f).fill(-1);for(let d=0;d<this.lights.length;d++)this.jLight[this.lights[d].j]=d;this.buildGrid(),this.fitJunctions();let p=new Float32Array(n,0,5);this.g={x0:p[0],z0:p[1],c:p[2],nx:p[3]|0,nz:p[4]|0,h:new Int16Array(n,20,(p[3]|0)*(p[4]|0))},this.bld=new Float32Array(i)}fitJunctions(){let t=this.nj;this.jgx=new Float32Array(t),this.jgz=new Float32Array(t),this.jPlane=new Uint8Array(t);let e=new Int32Array(t);for(let c=0;c<t;c++)e[c]=c;let n=c=>{for(;e[c]!==c;)e[c]=e[e[c]],c=e[c];return c},i=[];for(let c=0;c<t;c++)this.jEdges[c].length>=3&&i.push(c);let r=new Map,a=40,o=(c,h)=>Math.floor(c/a)*1e5+Math.floor(h/a);for(let c of i){let h=o(this.jx[c],this.jz[c]),u=r.get(h);u||r.set(h,u=[]),u.push(c)}for(let c of i){let h=Math.floor(this.jx[c]/a),u=Math.floor(this.jz[c]/a);for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++)for(let d of r.get((h+f)*1e5+u+p)||[])d<=c||Math.hypot(this.jx[d]-this.jx[c],this.jz[d]-this.jz[c])<this.jr[c]+this.jr[d]+4&&(e[n(d)]=n(c))}let l=new Map;for(let c of i){let h=n(c),u=l.get(h);u||l.set(h,u=[]),u.push(c)}for(let c of l.values()){let h=this.jx[c[0]],u=this.jz[c[0]],f=0,p=0,d=0,x=0,g=0,m=0,M=0,_=0,v=0,R=new Set;for(let K of c){let it=this.jr[K]+dc+2;for(let ht of this.jEdges[K]){let St=this.eOff[ht],pt=this.eN[ht];for(let W=0;W<pt;W++){let Q=St+W;if(R.has(Q))continue;let ut=this.px[Q]-this.jx[K],rt=this.pz[Q]-this.jz[K];if(ut*ut+rt*rt>it*it)continue;R.add(Q);let Tt=this.px[Q]-h,Ct=this.pz[Q]-u,vt=this.py[Q];f++,p+=Tt,d+=Ct,x+=vt,g+=Tt*Tt,m+=Ct*Ct,M+=Tt*Ct,_+=Tt*vt,v+=Ct*vt}}}if(f<3)continue;let T=p/f,S=d/f,C=x/f,b=g/f-T*T+.001,y=M/f-T*S,A=m/f-S*S+.001,L=_/f-T*C,I=v/f-S*C,U=b*A-y*y;if(Math.abs(U)<1e-9)continue;let X=(L*A-y*I)/U,k=(b*I-y*L)/U,Z=Math.hypot(X,k);Z>.35&&(X*=.35/Z,k*=.35/Z);let V=C-X*T-k*S;for(let K of c)this.jgx[K]=X,this.jgz[K]=k,this.jy[K]=V+X*(this.jx[K]-h)+k*(this.jz[K]-u),this.jPlane[K]=1}}onPlaza(t,e,n){let i=e-this.jx[t],r=n-this.jz[t],a=this.jr[t]+.5;return this.jPlane[t]===1&&i*i+r*r<a*a}planeY(t,e,n){return this.jy[t]+this.jgx[t]*(e-this.jx[t])+this.jgz[t]*(n-this.jz[t])}blend(t,e){let n=this.eA[t],i=this.eB[t],r=0,a=-1;if(this.jPlane[n]){let o=1-(e-this.jr[n])/dc;o>r&&(r=o,a=n)}if(this.jPlane[i]){let o=1-(this.eLen[t]-e-this.jr[i])/dc;o>r&&(r=o,a=i)}return this._bj=a,r>1?1:r}surfY(t,e,n,i,r){let a=this.blend(t,e);return a>0?r+(this.planeY(this._bj,n,i)-r)*a:r}buildGrid(){let t=this.box;this.gx0=t.x0-64,this.gz0=t.z0-64;let e=this.gnx=Math.ceil((t.x1-t.x0+128)/hi),n=this.gnz=Math.ceil((t.z1-t.z0+128)/hi),i=new Int32Array(e*n+1),r=l=>{for(let c=0;c<this.n-1;c++){let h=this.sE[c];if(this.sE[c+1]!==h)continue;let u=this.eHw[h]+ge+9,f=Math.min(this.px[c],this.px[c+1])-u,p=Math.max(this.px[c],this.px[c+1])+u,d=Math.min(this.pz[c],this.pz[c+1])-u,x=Math.max(this.pz[c],this.pz[c+1])+u,g=Math.max(0,Math.floor((f-this.gx0)/hi)),m=Math.min(e-1,Math.floor((p-this.gx0)/hi)),M=Math.max(0,Math.floor((d-this.gz0)/hi)),_=Math.min(n-1,Math.floor((x-this.gz0)/hi));for(let v=M;v<=_;v++)for(let R=g;R<=m;R++)l(v*e+R,c)}};r(l=>i[l+1]++);for(let l=0;l<e*n;l++)i[l+1]+=i[l];let a=i.slice(0,e*n),o=new Int32Array(i[e*n]);r((l,c)=>{o[a[l]++]=c}),this.cellStart=i,this.cellList=o}groundAt(t,e){let n=this.g,i=(t-n.x0)/n.c,r=(e-n.z0)/n.c,a=Math.max(0,Math.min(n.nx-2,Math.floor(i))),o=Math.max(0,Math.min(n.nz-2,Math.floor(r))),l=Math.max(0,Math.min(1,i-a)),c=Math.max(0,Math.min(1,r-o)),h=n.h,u=n.nx;return((h[o*u+a]*(1-l)+h[o*u+a+1]*l)*(1-c)+(h[(o+1)*u+a]*(1-l)+h[(o+1)*u+a+1]*l)*c)/10}query(t,e,n,i){let r=Math.floor((t-this.gx0)/hi),a=Math.floor((e-this.gz0)/hi),o=-1,l=1e9,c=0,h=-1,u=1e9,f=0,p=n>=0&&n<this.n?this.sE[n]:-1;if(r>=0&&a>=0&&r<this.gnx&&a<this.gnz){let vt=a*this.gnx+r,Xt=this.cellList;for(let kt=this.cellStart[vt],ee=this.cellStart[vt+1];kt<ee;kt++){let F=Xt[kt],fe=this.px[F],Nt=this.pz[F],Ot=this.px[F+1]-fe,Pt=this.pz[F+1]-Nt,ne=Ot*Ot+Pt*Pt||1,bt=((t-fe)*Ot+(e-Nt)*Pt)/ne;bt<0?bt=0:bt>1&&(bt=1);let P=fe+Ot*bt-t,w=Nt+Pt*bt-e,$=Math.sqrt(P*P+w*w)-this.eHw[this.sE[F]];this.sE[F]===p&&($-=.05),$<l?(o>=0&&this.sE[o]!==this.sE[F]&&(h=o,u=l,f=c),l=$,o=F,c=bt):$<u&&this.sE[F]!==this.sE[o]&&(u=$,h=F,f=bt)}}if(o<0)return i.i=0,i.t=0,i.s=0,i.d=1e3,i.y=this.groundAt(t,e),i.nx=0,i.ny=1,i.nz=0,i.hl=i.hr=0,i.wall=1e9,i.off=2,i.lx=1,i.lz=0,i.fx=0,i.fz=1,i.edge=-1,i.junc=-1,i.lim=50,i.ov=0,i;let d=o,x=this.sE[d],g=this.px[d],m=this.pz[d],M=this.px[d+1]-g,_=this.pz[d+1]-m,v=Math.hypot(M,_)||1,R=c,T=_/v,S=-M/v,C=(t-(g+M*R))*T+(e-(m+_*R))*S,b=this.eHw[x],y=this.py[d]+(this.py[d+1]-this.py[d])*R,A=(this.py[d+1]-this.py[d])/v,L=0,I=0,U=this.sJ[d];if(U>=0){let vt=t-this.jx[U],Xt=e-this.jz[U];vt*vt+Xt*Xt>(this.jr[U]+3)**2&&(U=-1)}if(U<0){let vt=this.eA[x],Xt=this.eB[x];this.onPlaza(vt,t,e)?U=vt:this.onPlaza(Xt,t,e)&&(U=Xt)}let X=this.sS[d]+R*v,k=this.blend(x,X),Z=0,V=0;if(k>0){let vt=this._bj;y+=(this.planeY(vt,t,e)-y)*k,Z=this.jgx[vt]*k,V=this.jgz[vt]*k}let K=0;if(l<0&&u<pc&&h>=0&&U<0){K=1;let vt=h,Xt=this.sE[vt],kt=Math.hypot(this.px[vt+1]-this.px[vt],this.pz[vt+1]-this.pz[vt])||1,ee=this.py[vt]+(this.py[vt+1]-this.py[vt])*f,F=this.blend(Xt,this.sS[vt]+f*kt);F>0&&(ee+=(this.planeY(this._bj,t,e)-ee)*F);let fe=pc-l,Nt=pc-u;y+=(ee-y)*Nt/(fe+Nt)}let it=C>=0?C-b:-C-b,ht=C>=0?this.pl[d]+(this.pl[d+1]-this.pl[d])*R:this.pr[d]+(this.pr[d+1]-this.pr[d])*R;if(it>0&&U<0){if(I=1,ht>.6){let vt=it<.4?it/.4:1;y+=.15*vt,it<.4&&(L=(C>=0?1:-1)*.15/.4)}it>ht&&(I=2)}i.wall=ht>=ge-.05?b+ox:1e9;let St=M/v,pt=_/v,W=A*(1-k)*St+L*T+Z,Q=A*(1-k)*pt+L*S+V,ut=-W,rt=1,Tt=-Q,Ct=Math.hypot(ut,rt,Tt)||1;return i.i=d,i.t=R,i.s=this.sS[d]+R*v,i.d=C,i.y=y,i.nx=ut/Ct,i.ny=rt/Ct,i.nz=Tt/Ct,i.hl=b,i.hr=b,i.off=I,i.lx=T,i.lz=S,i.fx=St,i.fz=pt,i.edge=x,i.junc=U,i.lim=this.eLim[x],i.ov=K,i}at(t,e,n,i){let r=this.eOff[t],a=this.eN[t];e<0&&(e=0),e>this.eLen[t]&&(e=this.eLen[t]);let o=0,l=a-1;for(;l-o>1;){let g=o+l>>1;this.sS[r+g]<=e?o=g:l=g}let c=r+o,h=Math.min(r+a-1,c+1),u=this.sS[h]-this.sS[c]||1,f=Math.max(0,Math.min(1,(e-this.sS[c])/u)),p=this.tx[c]+(this.tx[h]-this.tx[c])*f,d=this.tz[c]+(this.tz[h]-this.tz[c])*f,x=Math.hypot(p,d)||1;return i.fx=p/x,i.fz=d/x,i.lx=i.fz,i.lz=-i.fx,i.x=this.px[c]+(this.px[h]-this.px[c])*f+i.lx*n,i.z=this.pz[c]+(this.pz[h]-this.pz[c])*f+i.lz*n,i.y=this.surfY(t,e,i.x,i.z,this.py[c]+(this.py[h]-this.py[c])*f),i.i=c,i.hw=this.eHw[t],i}canLeave(t,e){return!this.eOne[t]||this.eA[t]===e}other(t,e){return this.eA[t]===e?this.eB[t]:this.eA[t]}route(t,e,n,i,r){let a=this.nj;this._dist||(this._dist=new Float64Array(a),this._prev=new Int32Array(a),this._pe=new Int32Array(a));let o=this._dist,l=this._prev,c=this._pe;o.fill(1/0),l.fill(-1),c.fill(-1);let h=[],u=(C,b)=>{h.push(C,b);let y=h.length/2-1;for(;y>0;){let A=y-1>>1;if(h[A*2]<=h[y*2])break;let L=h[A*2],I=h[A*2+1];h[A*2]=h[y*2],h[A*2+1]=h[y*2+1],h[y*2]=L,h[y*2+1]=I,y=A}},f=()=>{let C=h[0],b=h[1],y=h[h.length-2],A=h[h.length-1];if(h.length-=2,h.length){h[0]=y,h[1]=A;let L=0,I=h.length/2;for(;;){let U=2*L+1,X=U+1,k=L;if(U<I&&h[U*2]<h[k*2]&&(k=U),X<I&&h[X*2]<h[k*2]&&(k=X),k===L)break;let Z=h[k*2],V=h[k*2+1];h[k*2]=h[L*2],h[k*2+1]=h[L*2+1],h[L*2]=Z,h[L*2+1]=V,L=k}}return[C,b]},p=this.eLen[t],d=n>0?this.eB[t]:this.eA[t],x=n>0?this.eA[t]:this.eB[t],g=n>0?p-e:e;o[d]=g,u(g,d),c[d]=t,!this.eOne[t]&&o[x]>p-g+60&&(o[x]=p-g+60,u(o[x],x),c[x]=t);let m=1/0;if(i===t){let C=(r-e)*n;C>=0&&(m=C)}let M=this.eA[i],_=this.eB[i],v=this.eLen[i];for(;h.length;){let[C,b]=f();if(!(C>o[b])){if(C>m)break;for(let y of this.jEdges[b]){if(!this.canLeave(y,b))continue;let A=this.other(y,b),L=C+this.eLen[y]*(this.eCls[y]>=5?1.15:1);L<o[A]&&(o[A]=L,l[A]=b,c[A]=y,u(L,A))}}}let R=-1,T=m;if(o[M]+r<T&&this.canLeave(i,M)&&(T=o[M]+r,R=M),o[_]+(v-r)<T&&(!this.eOne[i]||this.eA[i]===_)&&(T=o[_]+(v-r),R=_),T===1/0)return null;let S=[];if(R>=0){S.push([i,R===M?1:-1]);let C=R;for(let b=0;b<5e3&&l[C]>=0;b++){let y=c[C],A=l[C];S.push([y,this.eA[y]===A&&this.eB[y]===C?1:-1]),C=A}S.push([t,C===this.eB[t]?1:-1]),S.reverse()}else S.push([t,n]);return{len:T,edges:S}}project(t,e,n,i){let r=this.eOff[t],a=this.eN[t],o=Math.max(0,Math.min(a-2,Math.round(e/4)));for(;o>0&&this.sS[r+o]>e;)o--;let l=e,c=1e18;for(let h=Math.max(0,o-3);h<=Math.min(a-2,o+3);h++){let u=r+h,f=this.px[u],p=this.pz[u],d=this.px[u+1]-f,x=this.pz[u+1]-p,g=d*d+x*x||1,m=((n-f)*d+(i-p)*x)/g;m=m<0?0:m>1?1:m;let M=f+d*m-n,_=p+x*m-i,v=M*M+_*_;v<c&&(c=v,l=this.sS[u]+m*Math.sqrt(g))}return l}slot(t,e){return this.jEdges[e].indexOf(t)}edgeName(t,e){return this.nameText(this.eName[t],e)}areaName(t,e,n){let i=-1,r=1e18;for(let a=0;a<this.areas.length;a++){let o=this.areas[a],l=Math.hypot(o[0]-t,o[1]-e)/o[3];l<r&&(r=l,i=a)}return i>=0&&r<1400?this.nameText(this.areas[i][2],n):""}nameText(t,e){let n=this.names[t];return n?e==="ar"?n[1]||n[0]:n[0].replace(/[\u0600-\u06FF\u0750-\u077F\u2D30-\u2D7F]+/g,"").replace(/\s+/g," ").trim()||n[0]:""}};var sn={city:{model:"car_city",cls:"D",mass:1090,power:110,torque:250,rpm:6300,gears:[3.42,2,1.42,1.1,.9,.76],final:4.05,cda:.66,cl:.04,mu:1.06,steer:.64,nitro:4.2,drive:"f",turbo:1,cyl:3,shift:.28},hatch:{model:"car_hatch",cls:"D",mass:1235,power:96,torque:230,rpm:6200,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.64,cl:.03,mu:1,steer:.62,nitro:3.6,drive:"f",turbo:1,cyl:3,shift:.45},volt:{model:"car_volt",cls:"C",mass:1920,power:366,torque:510,rpm:16500,gears:[1],final:9,cda:.5,cl:.04,mu:1.04,steer:.58,nitro:7,drive:"a",ev:1},suvlux:{model:"car_suvlux",cls:"C",mass:2250,power:300,torque:620,rpm:6500,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.3,cda:1.05,cl:.03,mu:1,steer:.56,nitro:8,drive:"a",turbo:1,cyl:8},wedge:{model:"car_wedge",cls:"B",mass:3150,power:447,torque:960,rpm:12800,gears:[1],final:9,cda:1,cl:.02,mu:1,steer:.52,nitro:11,drive:"a",ev:1},police:{model:"car_police",cls:"A",mass:1900,power:330,torque:570,rpm:6600,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.2,cda:.74,cl:.06,mu:1.08,steer:.56,nitro:8.5,drive:"a",turbo:1,cyl:6},gt:{model:"car_gt",cls:"S",mass:1150,power:620,torque:760,rpm:9200,gears:[3,2.1,1.62,1.31,1.1,.94,.82],final:3.3,cda:.7,cl:.7,mu:1.32,steer:.52,nitro:11,drive:"r",cyl:10},t_small:{model:"tr_sedan",cls:"T",mass:1250,power:85,torque:170,rpm:6e3,gears:[3.5,2,1.3,1,.8],final:4,cda:.7,cl:0,mu:.95,steer:.6,nitro:0,drive:"f",cyl:4},t_heavy:{model:"tr_truck",cls:"T",mass:3500,power:120,torque:450,rpm:4e3,gears:[5,3,1.9,1.3,1,.8],final:4.1,cda:1.6,cl:0,mu:.9,steer:.55,nitro:0,drive:"r",cyl:6,diesel:1}};function lx(s){return Math.sin(1.45*Math.atan(14*s))}var ps=class{constructor(t,e,n){this.spec=t;let i=Object.assign({engine:0,nitro:0,grip:0,gearbox:0,brakes:0},n);this.up=i,this.power=t.power*(1+.06*i.engine),this.torqueMax=t.torque*(1+.06*i.engine),this.nitroForce=t.nitro*1e3*(1+.08*i.nitro),this.mu=t.mu*(1+.025*i.grip),this.shiftTime=(t.shift||.15)*(1-.13*i.gearbox),this.gearPull=1+.025*i.gearbox,this.brakeGrip=1+.035*i.brakes,this.spinT=0,this.spinDur=.9,this.spinDir=1,this.spinA=0,this.spinDone=!1,this.mass=t.mass,this.invMass=1/t.mass;let r=e.w,a=e.h*.8,o=e.l,l=t.mass;this.Ix=l*(a*a+o*o)/12,this.Iy=l*(r*r+o*o)/12,this.Iz=l*(r*r+a*a)/12,this.half={x:r/2,y:e.h/2,z:o/2},this.cgY=e.cg,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.wx=0,this.wy=0,this.wz=0,this.R=new Float32Array(9),this.wheels=[];let c=(e.wheels[0].z+e.wheels[1].z)/2,h=(e.wheels[2].z+e.wheels[3].z)/2,u=t.drive==="r"?.45:t.drive==="f"?.6:.5;this.cgZ=h+u*(c-h);for(let p=0;p<4;p++){let d=e.wheels[p];this.wheels.push({mx:d.x,my:d.y-this.cgY+.18,mz:d.z-this.cgZ,r:d.r,front:p<2,rest:.36,comp:0,prevComp:0,contact:!1,load:0,spin:0,spinAngle:0,steer:0,slipLat:0,slipLong:0,cx:0,cy:0,cz:0,surf:0,hint:0,travel:0})}let f=.11;this.k=t.mass*9.81/4/f,this.c=2*.32*Math.sqrt(this.k*t.mass/4),this.input={throttle:0,brake:0,steer:0,handbrake:0,nitro:0},this.steerNow=0,this.gear=1,this.rpm=t.ev?0:900,this.shiftT=0,this.nitroOn=0,this.grounded=0,this.airTime=0,this.speed=0,this.fwdSpeed=0,this.latSpeed=0,this.hint=0,this.assist={esc:1,tc:1,air:1},this.reverse=!1,this.stopT=0,this.hold=!1,this.wrecked=0,this.topSpeedCap=1e9,this.gearbox=null,this.mgear=1,this.stalled=!1,this.fuelCut=!1,this.clutchE=1,this.input.clutch=0,this.updateR()}manualDrive(t,e,n){let i=this.spec,r=this.input,a=this.mgear;this.shiftT>0&&(this.shiftT-=t),this.reverse=a<0,this.gear=a>0?a:1;let o=a===0?0:(a<0?i.gears[0]*1.08:i.gears[a-1])*i.final,l=Math.max(Math.abs(e)/.34,n)*o*30/Math.PI,c=i.ev?0:850,h=this.stalled||this.fuelCut,u=h?0:r.throttle,f;if(a===0||this.shiftT>0?f=0:this.gearbox==="clutch"?f=1-Math.max(0,Math.min(1,r.clutch)):f=u<.05&&l<c*1.15?0:Math.max(.12,Math.min(1,(l-250)/1150)),this.clutchE=f,h)this.rpm+=(0-this.rpm)*Math.min(1,t*3);else{let x=c+u*(i.rpm*1.02-c),g=f*f,m=Math.max(g>.9?300:c,x*(1-g)+l*g);this.rpm+=(m-this.rpm)*Math.min(1,t*(f>.9?25:7)),this.rpm>i.rpm*1.05&&(this.rpm=i.rpm*1.05)}this.gearbox==="clutch"&&!h&&f>.6&&this.rpm<460&&!i.ev&&(this.stalled=!0),this.stalled&&r.clutch>.9&&!this.fuelCut&&(this.stalled=!1,this.rpm=c);let p=0;!h&&f>0&&(p=this.engineTorque(Math.max(this.rpm,c))*u,u<.05&&l>c*1.1&&(p-=this.torqueMax*.12*(.3+l/i.rpm)),this.rpm>=i.rpm&&p>0&&(p*=.15),p*=f);let d=p*o*.88/.34*this.gearPull;return a<0?-d:d}shift(t){let e=this.spec.gears.length,n=this.mgear+t;return n<-1||n>e?"end":this.gearbox==="clutch"&&this.input.clutch<.6?"clutch":n<0&&this.fwdSpeed>1.5?"moving":n>0&&this.gearbox==="manual"&&Math.abs(this.fwdSpeed)/.34*this.spec.gears[n-1]*this.spec.final*30/Math.PI>this.spec.rpm*1.02?"revs":(this.mgear=n,this.shiftT=this.gearbox==="clutch"?0:this.shiftTime||.2,"")}updateR(){let t=this.qx,e=this.qy,n=this.qz,i=this.qw,r=this.R;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}setPose(t,e,n,i){this.px=t,this.py=e,this.pz=n;let r=i/2;this.qx=0,this.qy=Math.sin(r),this.qz=0,this.qw=Math.cos(r),this.vx=this.vy=this.vz=0,this.wx=this.wy=this.wz=0;for(let a of this.wheels)a.comp=a.prevComp=.1,a.spin=0;this.updateR()}yaw(){return Math.atan2(this.R[6],this.R[8])}applyAngular(t,e,n,i){let r=this.R,a=r[0]*t+r[1]*e+r[2]*n,o=r[3]*t+r[4]*e+r[5]*n,l=r[6]*t+r[7]*e+r[8]*n,c=a/this.Ix,h=o/this.Iy,u=l/this.Iz;this.wx+=(r[0]*c+r[3]*h+r[6]*u)*i,this.wy+=(r[1]*c+r[4]*h+r[7]*u)*i,this.wz+=(r[2]*c+r[5]*h+r[8]*u)*i}impulse(t,e,n,i,r,a){this.vx+=t*this.invMass,this.vy+=e*this.invMass,this.vz+=n*this.invMass,this.applyAngular(r*n-a*e,a*t-i*n,i*e-r*t,1)}invMassAt(t,e,n,i,r,a){let o=e*a-n*r,l=n*i-t*a,c=t*r-e*i,h=this.R,u=h[0]*o+h[1]*l+h[2]*c,f=h[3]*o+h[4]*l+h[5]*c,p=h[6]*o+h[7]*l+h[8]*c;return this.invMass+u*u/this.Ix+f*f/this.Iy+p*p/this.Iz}engineTorque(t){let e=t/this.spec.rpm,n=this.spec,i=n.ev?0:n.turbo?.33:.55,r=e<i?.55+.45*(e/i):e<.9?1:1-(e-.9)*(n.ev?1.5:2.5);r<0&&(r=0);let a=this.torqueMax*r,o=this.power*1e3/Math.max(100,t*Math.PI/30);return Math.min(a,o)}startSpin(t){this.spinT=this.spinDur,this.spinDir=t,this.spinA=0,this.spinDone=!1}stopSpin(){this.spinT=0,this.spinA=0}lockAt(t,e=0,n=!1){let i=this.spec,r=Math.max(0,t),a=i.steer/(1+r*.035);if(n)return a;let o=Math.max(1.5,this.wheels[0].mz-this.wheels[2].mz);return Math.min(a,Math.atan(o*i.mu*9.81/Math.max(1,r*r))+.13+e)}step(t,e,n){let i=this.spec,r=this.R,a=this.input,o=r[0],l=r[1],c=r[2],h=r[3],u=r[4],f=r[5],p=r[6],d=r[7],x=r[8],g=Math.hypot(this.vx,this.vy,this.vz),m=this.vx*p+this.vy*d+this.vz*x;this.speed=g,this.fwdSpeed=m,this.latSpeed=this.vx*o+this.vy*l+this.vz*c;let M=this.lockAt(m,Math.abs(Math.atan2(this.latSpeed,Math.max(1,Math.abs(m)))),a.handbrake>0),_=a.steer*M,v=2.6*t;this.steerNow+=Math.max(-v,Math.min(v,_-this.steerNow));let R=this.wheels[2].r,T=0,S=0;for(let st=0;st<4;st++){let H=this.wheels[st];(i.drive==="a"||i.drive==="f"===H.front)&&(T+=Math.abs(H.spin),S++)}let C=T/Math.max(1,S)*R/.34,b=0;if(this.gearbox)b=this.manualDrive(t,m,C);else{let st=i.gears[this.gear-1]*i.final,H=Math.abs(m)/.34,at=Math.max(i.ev?0:900,Math.min(i.rpm*1.02,Math.max(H,C)*st*30/Math.PI));this.rpm+=(at-this.rpm)*Math.min(1,t*25),this.shiftT>0?this.shiftT-=t:!this.reverse&&this.grounded&&(H*st*30/Math.PI>i.rpm*.95&&this.gear<i.gears.length?(this.gear++,this.shiftT=this.shiftTime):this.gear>1&&H*i.gears[this.gear-2]*i.final*30/Math.PI<i.rpm*(a.throttle>.5?.72:.6)&&(this.gear--,this.shiftT=.1)),a.brake>.5&&m<.8&&a.throttle<.1&&!this.hold?this.stopT+=t:this.stopT=0,this.stopT>.35&&(this.reverse=!0),a.throttle>.1&&this.reverse&&(this.reverse=!1),this.reverse&&(this.gear=1);let It=this.reverse?a.brake:a.throttle;this.shiftT<=0&&It>0&&(b=this.engineTorque(this.rpm)*It*i.gears[this.gear-1]*i.final*.88/.34*this.gearPull,this.reverse&&(b=-Math.min(b,4e3)),this.rpm>=i.rpm*1&&!this.reverse&&(b*=.2))}this.fuelCut&&!this.gearbox&&(b=0,this.rpm=0,this.reverse=!1),m>this.topSpeedCap&&(b=Math.min(b,0));let y=this.nitroOn>0?this.nitroForce*this.nitroOn:0,A=this.reverse&&!this.gearbox?0:a.brake;!this.reverse&&a.throttle<.05&&a.brake<.05&&Math.abs(m)<.8&&(A=.5),this.hold&&(A=1);let L=A*this.mass*9.81*1.15*this.brakeGrip,I=this.spinT>0;I&&(b=0);let U=0,X=-this.mass*9.81,k=0,Z=0,V=0,K=0,it=0,ht=this.steerNow,St=Math.cos(ht),pt=Math.sin(ht),W=I?0:a.handbrake,Q=this.mass/4;for(let st=0;st<4;st++){let H=this.wheels[st],at=o*H.mx+h*H.my+p*H.mz,It=l*H.mx+u*H.my+d*H.mz,nt=c*H.mx+f*H.my+x*H.mz,gt=this.px+at,wt=this.py+It,Lt=this.pz+nt;e.query(gt,Lt,H.hint,n),H.hint=n.i,H.surf=n.off;let _t=u>.25?u:.25,Ht=(wt-n.y)/_t,Dt=H.rest+H.r-Ht;if(H.prevComp=H.comp,Dt<=0||u<.2){H.contact=!1,H.comp=0,H.load=0,H.slipLat=0,H.slipLong=0,H.travel=H.rest,H.spin*=.995;continue}let Yt=Math.min(Dt,H.rest+.12);H.comp=Yt,H.travel=H.rest-Yt,H.contact=!0,it++;let z=(Yt-H.prevComp)/t,ct=this.k*Yt+this.c*z*(z<0?1.7:1);Dt>H.rest+.12&&(ct+=(Dt-H.rest-.12)*this.k*6+Math.max(0,z)*this.c*2),ct<0&&(ct=0),H.load=ct;let j=gt-h*Ht,tt=wt-u*Ht,xt=Lt-f*Ht;H.cx=j,H.cy=tt,H.cz=xt;let mt=j-this.px,zt=tt-this.py,oe=xt-this.pz,Se=this.vx+(this.wy*oe-this.wz*zt),Kt=this.vy+(this.wz*mt-this.wx*oe),Be=this.vz+(this.wx*zt-this.wy*mt),we=p,je=d,$e=x;H.front&&(we=p*St+o*pt,je=d*St+l*pt,$e=x*St+c*pt);let He=n.nx,En=n.ny,Wn=n.nz,Ui=we*He+je*En+$e*Wn;we-=He*Ui,je-=En*Ui,$e-=Wn*Ui;let Xn=Math.hypot(we,je,$e)||1;we/=Xn,je/=Xn,$e/=Xn;let Ms=En*$e-Wn*je,di=Wn*we-He*$e,bs=He*je-En*we,gn=Se*we+Kt*je+Be*$e,Ss=Se*Ms+Kt*di+Be*bs,Ga=this.mu*(n.off===0?1:.85),Js=ct,O=Ga*(1.08-.08*Math.min(2,Js/(this.mass*9.81/4)))*Js,q=Math.atan2(Ss,Math.abs(gn)+1.5),Y=1;!H.front&&W>0&&(Y=.42),I&&(Y=.06);let B=-lx(q)*O*Y,ot=Math.abs(Ss)*Q/t;Math.abs(B)>ot&&(B=B>0?ot:-ot);let lt=0,yt=i.drive==="a"||i.drive==="f"===H.front;yt&&(lt+=b/S),y&&!H.front&&(lt+=y/2);let Mt=L*(H.front?.32:.18);if(!H.front&&W>0&&(Mt+=W*this.mass*9.81*.35),Mt>0){let Ie=Math.abs(gn)*Q/t,jt=Math.min(Mt,Ie);lt-=gn>0?jt:-jt}if(lt-=.013*ct*Math.max(-1,Math.min(1,gn)),H.slipLong=0,Math.abs(lt)>O&&(H.slipLong=Math.min(1,(Math.abs(lt)-O)/O),this.assist.tc&&yt&&b>0&&(lt=Math.sign(lt)*O*.98)),this.assist.tc&&yt&&b>0&&W===0&&lt>0){let Ie=Math.sqrt(Math.max(0,O*O-B*B))*.98;lt>Ie&&(lt=Ie)}let Ut=Mt>0&&b<=0?O*this.brakeGrip:O,Bt=Math.hypot(lt,B);if(Bt>Ut){let Ie=Ut/Bt;lt*=Ie,B*=Ie}H.slipLat=Math.abs(Ss)>1.5?Math.min(1,(Math.abs(q)-.13)*4):0,H.slipLat<0&&(H.slipLat=0),!H.front&&W>0&&Math.abs(gn)>6&&(H.slipLat=Math.max(H.slipLat,.6));let Et=gn/H.r;H.spin=Et*(1+H.slipLong*.6)+(yt&&b>0&&H.slipLong>0?6*H.slipLong:0),!H.front&&W>0&&Math.abs(gn)>1&&(H.spin*=.2);let qt=He*ct+we*lt+Ms*B,ie=En*ct+je*lt+di*B,se=Wn*ct+$e*lt+bs*B;U+=qt,X+=ie,k+=se;let Pe=mt,Zt=zt+.25*Ht,At=oe;Z+=Zt*se-At*ie,V+=At*qt-Pe*se,K+=Pe*ie-Zt*qt}for(let st=0;st<4;st++){let H=this.wheels[st];H.spinAngle+=H.spin*t,H.spinAngle>1e4&&(H.spinAngle-=1e4)}let ut=.5*1.225*i.cda*g;U-=ut*this.vx,X-=ut*this.vy,k-=ut*this.vz;let rt=.5*1.225*i.cl*m*Math.abs(m)*(it>0?1:.2);U-=h*rt,X-=u*rt,k-=f*rt,this.grounded=it,it===0?this.airTime+=t:this.airTime=0;let Tt=this.wx*h+this.wy*u+this.wz*f;if(it>=3&&this.assist.esc&&W===0&&!I&&m>5){let st=this.wheels[0].mz-this.wheels[2].mz,H=i.mu*9.81*1.1/m,at=Math.max(-H,Math.min(H,m*Math.tan(ht)/st)),It=Tt-at;if(It*Tt>0){let nt=-It*this.Iy*6*this.assist.esc;Z+=h*nt,V+=u*nt,K+=f*nt}}if(it>=3&&W>0&&!I&&m>12){let st=a.steer*this.Iy*1.4;Z+=h*st,V+=u*st,K+=f*st}if(it===0&&g>8){let st=Math.atan2(this.latSpeed,Math.max(1,Math.abs(m))),H=this.wx*h+this.wy*u+this.wz*f,at=this.Iy*((.6+2.4*this.assist.air)*st-(.3+1.5*this.assist.air)*H);Z+=h*at,V+=u*at,K+=f*at}if(it===0&&this.assist.air&&!this.wrecked){let st=-f,H=h,at=7*this.assist.air,It=3.2*this.assist.air;Z+=(st*at-this.wx*It)*this.Ix,K+=(H*at-this.wz*It)*this.Iz}if(this.vx+=U*this.invMass*t,this.vy+=X*this.invMass*t,this.vz+=k*this.invMass*t,this.applyAngular(Z,V,K,t),I){let st=this.spinDur,H=st-this.spinT,at=this.spinDir*Math.PI*Math.PI/st*Math.sin(Math.PI*Math.min(1,H/st)),It=this.wx*h+this.wy*u+this.wz*f;if(this.wx+=h*(at-It),this.wy+=u*(at-It),this.wz+=f*(at-It),this.spinA+=Math.abs(at)*t,this.spinT-=t,this.spinT<=0){this.spinT=0;let nt=this.wx*h+this.wy*u+this.wz*f;this.wx-=h*nt,this.wy-=u*nt,this.wz-=f*nt,this.spinA>Math.PI*1.8&&(this.spinDone=!0)}}let Ct=it?.995:.999;this.wx*=Ct,this.wy*=Ct,this.wz*=Ct,this.px+=this.vx*t,this.py+=this.vy*t,this.pz+=this.vz*t;let vt=this.qx,Xt=this.qy,kt=this.qz,ee=this.qw,F=this.wx,fe=this.wy,Nt=this.wz;this.qx+=.5*t*(F*ee+fe*kt-Nt*Xt),this.qy+=.5*t*(fe*ee+Nt*vt-F*kt),this.qz+=.5*t*(Nt*ee+F*Xt-fe*vt),this.qw+=.5*t*(-F*vt-fe*Xt-Nt*kt);let Ot=Math.hypot(this.qx,this.qy,this.qz,this.qw);this.qx/=Ot,this.qy/=Ot,this.qz/=Ot,this.qw/=Ot,this.updateR(),e.query(this.px,this.pz,this.hint,n),this.hint=n.i,this.trackQ_s=n.s,this.trackQ_d=n.d;let Pt=n.y+.25,ne=this.half.x,bt=this.half.y*.9,P=this.half.z,w=1e9,G=0,$=0,et=0;for(let st=0;st<8;st++){let H=st&1?ne:-ne,at=st&2?bt:-bt*.4,It=(st&4?P:-P)-this.cgZ,nt=o*H+h*at+p*It,gt=l*H+u*at+d*It,wt=c*H+f*at+x*It,Lt=this.py+gt;Lt<w&&(w=Lt,G=nt,$=gt,et=wt)}let J=n.y-w;if(this.bodyHit=0,J>0){this.py+=J*.8;let st=n.nx,H=n.ny,at=n.nz,It=this.vx+(this.wy*et-this.wz*$),nt=this.vy+(this.wz*G-this.wx*et),gt=this.vz+(this.wx*$-this.wy*G),wt=It*st+nt*H+gt*at;if(wt<0){let Lt=this.invMassAt(G,$,et,st,H,at),_t=-1.25*wt/Lt;this.impulse(st*_t,H*_t,at*_t,G,$,et);let Ht=It-st*wt,Dt=nt-H*wt,Yt=gt-at*wt,z=Math.hypot(Ht,Dt,Yt);if(z>.01){let ct=Math.min(_t*.6,z/Lt);this.impulse(-Ht/z*ct,-Dt/z*ct,-Yt/z*ct,G,$,et)}this.bodyHit=-wt}}Pt>this.py&&it===0&&J<=0}};var Re={uSun:{value:new N(.45,.75,-.48).normalize()},uSunCol:{value:new Ft(1,.94,.84)},uSky:{value:new Ft(.55,.72,.95)},uGround:{value:new Ft(.42,.38,.32)},uFog:{value:new Ft(.74,.82,.92)},uFogNear:{value:220},uFogFar:{value:900},uTime:{value:0},uNight:{value:0}},ui=`
varying float vFog;
`,da=`
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`,Bn=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`,mc=`
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;function ms(){return new pe({uniforms:Re,vertexShader:Bn+ui+`
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
  `+da+`
}`,fragmentShader:Bn+mc+ui+`
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function du(){return new pe({uniforms:Re,vertexShader:Bn+ui+`
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  `+da+`
}`,fragmentShader:Bn+mc+ui+`
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
}`})}function pa(s,t,e){return new pe({uniforms:Object.assign({uPaint:{value:new Ft(s||13639712)},uRoof:{value:new Ft(t>=0?t:s||13639712)},uRoofY:{value:e||99},uBrake:{value:0}},Re),vertexShader:Bn+ui+`
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
  `+da+`
}`,fragmentShader:Bn+mc+ui+`
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
}`})}function pu(){return new pe({uniforms:Re,depthWrite:!1,side:Ne,vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:Bn+`
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
}`})}function mu(){return new pe({uniforms:Re,vertexShader:Bn+ui+`
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; `+da+" }",fragmentShader:Bn+ui+`
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
}`})}function ma(){return new pe({uniforms:{uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:Ai,vertexShader:"attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }"})}function gu(s){return new pe({uniforms:{uScale:{value:600},uNight:Re.uNight},transparent:!0,depthWrite:!1,blending:s?Ai:ni,vertexShader:`attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,fragmentShader:"uniform float uNight; varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); float lum = max(vCol.r, max(vCol.g, vCol.b)); vec3 c = vCol.rgb * mix(1.0, 0.3, uNight * step(abs(vCol.r - vCol.b), 0.1)); gl_FragColor = vec4(c, a); }"})}function ga(){return new pe({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }"})}var yc=["wfl","wfr","wbl","wbr"];function Zs(s){let t=fc(s),e=t.parts.find(o=>o.name==="body"),n=yc.map(o=>{let l=t.parts.find(c=>c.name===o);return l?{x:l.pivot[0],y:l.pivot[1],z:l.pivot[2],r:l.radius}:null}),i=e.max[0]-e.min[0],r=e.max[2]-e.min[2],a=e.max[1];for(let o=0;o<4;o++)n[o]||(n[o]={x:(o&1?-1:1)*i*.4,y:.35,z:(o<2?1:-1)*r*.32,r:.35});return{w:i,l:r,h:a,cg:Math.min(.62,a*.38),wheels:n,front:e.max[2],back:e.min[2]}}var gc=null,xc=null;function cx(){if(gc)return gc;let s=new hs(.16,1,8,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,-.5);let t=s.attributes.position.count,e=new Uint8Array(t*4);for(let n=0;n<t;n++){let r=-s.attributes.position.getZ(n);e[n*4]=120+135*(1-r),e[n*4+1]=160*(1-r)+60,e[n*4+2]=255,e[n*4+3]=255*(1-r*.9)}return s.setAttribute("col",new Vt(e,4,!0)),gc=s,s}function hx(){if(xc)return xc;let s=new ai(1,1);s.rotateX(-Math.PI/2);let t=new Uint8Array(4*4);for(let e=0;e<4;e++)t[e*4+3]=140;return s.setAttribute("col",new Vt(t,4,!0)),xc=s,s}var vc=null,_c=null,gs=class{constructor(t,e,n,i){this.scene=t,this.root=new Mn,this.root.matrixAutoUpdate=!1;let r=fc(e);this.mat=pa(n,i,r.roofY),this.body=new Qt(Di(e,"body"),this.mat),this.body.matrixAutoUpdate=!1,this.root.add(this.body);for(let o of r.parts)if(o.name!=="body"&&o.name[0]!=="w"){let l=new Qt(Di(e,o.name),this.mat);l.matrixAutoUpdate=!1,this.root.add(l)}this.wheels=[];let a=Zs(e);this.dims=a;for(let o=0;o<4;o++){let l=r.parts.find(h=>h.name===yc[o]),c=new Qt(l?Di(e,yc[o]):Di("debris_tire","body"),this.mat);c.matrixAutoUpdate=!1,c.userData.base=new N(a.wheels[o].x,a.wheels[o].y,a.wheels[o].z),this.root.add(c),this.wheels.push(c)}vc=vc||ga(),this.shadow=new Qt(hx(),vc),this.shadow.matrixAutoUpdate=!1,this.shadow.renderOrder=1,t.add(this.shadow),_c=_c||ma(),this.flames=[];for(let o of[.35,-.35]){let l=new Qt(cx(),_c);l.position.set(o*a.w*.6,a.h*.28,a.back-.05),l.visible=!1,l.renderOrder=2,this.root.add(l),this.flames.push(l)}this.q=new tn,this.e=new hn,this.tmp=new te,this.v3=new N,this.s3=new N(1,1,1),t.add(this.root),this.lod=0}setPaint(t,e){this.mat.uniforms.uPaint.value.setHex(t),this.mat.uniforms.uRoof.value.setHex(e>=0?e:t)}sync(t,e,n,i){let r=t.R,a=this.root.matrix.elements,o=this.dims.cg;a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=r[3],a[5]=r[4],a[6]=r[5],a[7]=0,a[8]=r[6],a[9]=r[7],a[10]=r[8],a[11]=0;let l=t.cgZ||0;a[12]=t.px-r[3]*o-r[6]*l,a[13]=t.py-r[4]*o-r[7]*l,a[14]=t.pz-r[5]*o-r[8]*l,a[15]=1,this.root.matrixWorldNeedsUpdate=!0;let c=e<140;this.lod=e>900?2:c?0:1,this.root.visible=this.lod<2;for(let v=0;v<4;v++){let R=this.wheels[v],T=t.wheels[v];if(R.visible=this.lod===0||e<260,!R.visible)continue;let S=R.userData.base,C=T.front?t.steerNow:0;this.e.set(T.spinAngle,C,0,"YXZ"),this.q.setFromEuler(this.e),this.v3.set(S.x,S.y+(.1-(T.contact?T.travel-.25:.12))*.6,S.z),R.matrix.compose(this.v3,this.q,this.s3)}let h=n>0&&this.lod===0;for(let v of this.flames)if(v.visible=h,h){let R=.7+n*(.8+Math.random()*.5);v.scale.set(1,1,R*1.6),v.updateMatrix()}this.mat.uniforms.uBrake.value=i;let u=this.shadow.matrix.elements,f=Math.atan2(r[6],r[8]),p=Math.cos(f),d=Math.sin(f),x=t.groundY!==void 0?t.groundY:t.py-.6,g=Math.max(0,t.py-x-.5),m=Math.max(.3,1-g*.12),M=this.dims.w*1.15*m,_=this.dims.l*1.05*m;u[0]=p*M,u[1]=0,u[2]=-d*M,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=d*_,u[9]=0,u[10]=p*_,u[11]=0,u[12]=t.px,u[13]=x+.06,u[14]=t.pz,u[15]=1,this.shadow.matrixWorldNeedsUpdate=!0,this.shadow.visible=this.lod===0&&g<8}dispose(){this.scene.remove(this.root),this.scene.remove(this.shadow),this.mat.dispose()}};var Ce={nx:0,nz:0,depth:0,px:0,pz:0},Sn=new Float32Array(8);function xu(s,t){let e=s.R,n=s.half.x,i=s.half.z,r=e[0],a=e[2],o=Math.hypot(r,a)||1;r/=o,a/=o;let l=e[6],c=e[8],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(let f=-1;f<=1;f+=2)for(let p=-1;p<=1;p+=2)t[u++]=s.px-e[6]*s.cgZ+r*n*f+l*i*p,t[u++]=s.pz-e[8]*s.cgZ+a*n*f+c*i*p;return t}function ux(s,t){let e=1e9;for(let c=0;c<2;c++){let h=c?t:s,u=h.R;for(let f=0;f<2;f++){let p=f?u[6]:u[0],d=f?u[8]:u[2],x=Math.hypot(p,d)||1;p/=x,d/=x;let g=vu(s,p,d),m=vu(t,p,d),M=(s.px-s.R[6]*s.cgZ)*p+(s.pz-s.R[8]*s.cgZ)*d,_=(t.px-t.R[6]*t.cgZ)*p+(t.pz-t.R[8]*t.cgZ)*d,v=g+m-Math.abs(_-M);if(v<=0)return!1;if(v<e){e=v;let R=_-M>=0?1:-1;Ce.nx=p*R,Ce.nz=d*R}}}Ce.depth=e,xu(t,Sn);let n=1e9,i=0,r=0;for(let c=0;c<4;c++){let h=Sn[c*2]*Ce.nx+Sn[c*2+1]*Ce.nz;h<n&&(n=h,i=Sn[c*2],r=Sn[c*2+1])}xu(s,Sn);let a=-1e9,o=0,l=0;for(let c=0;c<4;c++){let h=Sn[c*2]*Ce.nx+Sn[c*2+1]*Ce.nz;h>a&&(a=h,o=Sn[c*2],l=Sn[c*2+1])}return Ce.px=(i+o)/2,Ce.pz=(r+l)/2,!0}function vu(s,t,e){let n=s.R,i=n[0],r=n[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=n[6],l=n[8],c=Math.hypot(o,l)||1;return o/=c,l/=c,Math.abs(i*t+r*e)*s.half.x+Math.abs(o*t+l*e)*s.half.z}var he={j:0,rel:0,nx:0,nz:0,px:0,py:0,pz:0};function _u(s,t){if(Math.abs(s.py-t.py)>2.2)return 0;let e=s.px-t.px,n=s.pz-t.pz,i=s.half.z+t.half.z;if(e*e+n*n>i*i||!ux(s,t))return 0;let r=Ce.nx,a=Ce.nz,o=s.invMass/(s.invMass+t.invMass),l=1-o,c=Ce.depth+.01;s.px-=r*c*o,s.pz-=a*c*o,t.px+=r*c*l,t.pz+=a*c*l;let h=(s.py+t.py)/2+.1,u=Ce.px-s.px,f=h-s.py,p=Ce.pz-s.pz,d=Ce.px-t.px,x=h-t.py,g=Ce.pz-t.pz,m=s.vx+(s.wy*p-s.wz*f),M=s.vy+(s.wz*u-s.wx*p),_=s.vz+(s.wx*f-s.wy*u),v=t.vx+(t.wy*g-t.wz*x),R=t.vy+(t.wz*d-t.wx*g),T=t.vz+(t.wx*x-t.wy*d),S=v-m,C=R-M,b=T-_,y=S*r+b*a;if(y>=0)return 0;let A=.25,L=s.invMassAt(u,f,p,r,0,a)+t.invMassAt(d,x,g,r,0,a),I=-(1+A)*y/L;s.impulse(-r*I,0,-a*I,u,f,p),t.impulse(r*I,0,a*I,d,x,g);let U=S-r*y,X=C,k=b-a*y,Z=Math.hypot(U,X,k);if(Z>.05){let V=Math.min(I*.35,Z/L),K=U/Z,it=X/Z,ht=k/Z;s.impulse(K*V,it*V,ht*V,u,f,p),t.impulse(-K*V,-it*V,-ht*V,d,x,g)}return he.j=I,he.rel=-y,he.nx=r,he.nz=a,he.px=Ce.px,he.py=h,he.pz=Ce.pz,I}var xa=class{constructor(t,e){this.cam=new Oe(64,t,.3,e),this.mode=0,this.pos=new N,this.vel=new N,this.look=new N,this.dir=new N(0,0,1),this.shake=0,this.shakeOn=!0,this.init=!1,this.wreckA=0,this.back=!1,this.t=new N,this.l=new N}kick(t){this.shakeOn&&(this.shake=Math.min(1,this.shake+t))}update(t,e){let n=e.veh,i=n.R,r=this.cam,a=Math.max(0,n.fwdSpeed),o=i[6],l=i[8];n.speed>4&&e.wreck<=0&&(o=o*(1-.65)+n.vx/n.speed*.65,l=l*(1-.65)+n.vz/n.speed*.65);let c=Math.hypot(o,l)||1;o/=c,l/=c;let h=1-Math.exp(-t*7);this.dir.x+=(o-this.dir.x)*h,this.dir.z+=(l-this.dir.z)*h;let u=Math.hypot(this.dir.x,this.dir.z)||1,f=this.dir.x/u,p=this.dir.z/u,d,x,g;this.mode===1?(d=9+a*.03,x=3.4,g=6):this.mode===2?(d=-.6,x=1.05,g=30):(d=6.2+a*.022,x=2.25+a*.004,g=5);let m=this.back?-1:1;if(e.wreck>0?(this.wreckA+=t*.9,this.t.set(n.px+Math.sin(this.wreckA)*9,n.py+3.5,n.pz+Math.cos(this.wreckA)*9),this.l.set(n.px,n.py,n.pz)):(this.t.set(n.px-f*d*m,n.py+x,n.pz-p*d*m),this.l.set(n.px+f*g*m,n.py+(this.mode===2?.9:.8),n.pz+p*g*m)),!this.init||this.mode===2||this.back)this.pos.copy(this.t),this.init=!0;else{let _=1-Math.exp(-t*12);this.pos.lerp(this.t,_),this.pos.y<n.py+.8&&(this.pos.y=n.py+.8)}if(r.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let _=this.shake*this.shake*.35;r.position.x+=(Math.random()-.5)*_,r.position.y+=(Math.random()-.5)*_}r.lookAt(this.l);let M=62+Math.min(16,a*.13)+(e.veh.nitroOn?8*Math.min(1.5,e.veh.nitroOn):0);r.fov+=(M-r.fov)*(1-Math.exp(-t*4)),r.updateProjectionMatrix()}};var va=class{constructor(t,e,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Uint8Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Uint8Array(e*4);let i=new me;this.aPos=new Vt(this.pos,3),this.aPos.setUsage(li),this.aCol=new Vt(this.col,4,!0),this.aCol.setUsage(li),this.aSize=new Vt(this.size,1),this.aSize.setUsage(li),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("size",this.aSize),i.setDrawRange(0,0),this.mat=gu(n),this.points=new Jr(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.gravity=n?-9.8:.6,t.add(this.points),this.next=0}emit(t,e,n,i,r,a,o,l,c,h,u,f,p){let d=this.next;this.next=(this.next+1)%this.max,this.n<this.max&&this.n++,this.pos[d*3]=t,this.pos[d*3+1]=e,this.pos[d*3+2]=n,this.vel[d*3]=i,this.vel[d*3+1]=r,this.vel[d*3+2]=a,this.base[d*4]=o,this.base[d*4+1]=l,this.base[d*4+2]=c,this.base[d*4+3]=h,this.size[d]=u,this.life[d]=f,this.age[d]=0,this.grow[d]=p||0}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.age[n]>=this.life[n]){this.col[n*4+3]=0;continue}this.age[n]+=t;let i=1-this.age[n]/this.life[n];this.vel[n*3+1]+=this.gravity*t,this.vel[n*3]*=.985,this.vel[n*3+2]*=.985,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*i}this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},Mc=class{constructor(t,e){this.max=e,this.next=0,this.pos=new Float32Array(e*4*3),this.col=new Uint8Array(e*4*4),this.uv=new Float32Array(e*4*2);let n=new Uint16Array(e*6);for(let r=0;r<e;r++){let a=r*4;n.set([a,a+1,a+2,a,a+2,a+3],r*6)}for(let r=0;r<e*4;r++)this.uv[r*2]=.5,this.uv[r*2+1]=.5;let i=new me;this.aPos=new Vt(this.pos,3),this.aPos.setUsage(li),this.aCol=new Vt(this.col,4,!0),this.aCol.setUsage(li),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("uv",new Vt(this.uv,2)),i.setIndex(new Vt(n,1)),this.mesh=new Qt(i,ga()),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.last=new Float32Array(16*4).fill(NaN),this.dirty=!1}add(t,e,n,i,r,a,o){let l=this.last,c=t*4;if(o<=0||isNaN(l[c])){l[c]=e,l[c+1]=n,l[c+2]=i,l[c+3]=o>0?1:NaN,o<=0&&(l[c]=NaN);return}let h=e-l[c],u=i-l[c+2];if(h*h+u*u<.36)return;let f=this.next;this.next=(this.next+1)%this.max;let p=.13,d=this.pos,x=this.col,g=f*12;d[g]=l[c]+r*p,d[g+1]=l[c+1]+.03,d[g+2]=l[c+2]+a*p,d[g+3]=l[c]-r*p,d[g+4]=l[c+1]+.03,d[g+5]=l[c+2]-a*p,d[g+6]=e-r*p,d[g+7]=n+.03,d[g+8]=i-a*p,d[g+9]=e+r*p,d[g+10]=n+.03,d[g+11]=i+a*p;let m=Math.min(200,60+o*150);for(let M=0;M<4;M++)x[f*16+M*4]=12,x[f*16+M*4+1]=12,x[f*16+M*4+2]=12,x[f*16+M*4+3]=m;l[c]=e,l[c+1]=n,l[c+2]=i,this.dirty=!0}reset(t){this.last[t*4]=NaN}update(){this.dirty&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.dirty=!1)}},bc=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*6),this.col=new Uint8Array(e*8),this.seed=new Float32Array(e*3);for(let i=0;i<e;i++)this.seed[i*3]=Math.random()*6.28,this.seed[i*3+1]=2+Math.random()*3,this.seed[i*3+2]=Math.random()*40;let n=new me;this.aPos=new Vt(this.pos,3),this.aPos.setUsage(li),this.aCol=new Vt(this.col,4,!0),this.aCol.setUsage(li),n.setAttribute("position",this.aPos),n.setAttribute("col",this.aCol),this.lines=new $r(n,ma()),this.lines.frustumCulled=!1,this.lines.renderOrder=4,t.add(this.lines)}update(t,e,n,i){let r=Math.max(0,Math.min(1,(n-45)/40))*.6+(i?.4:0);if(this.lines.visible=r>.02,!this.lines.visible)return;let a=e.matrixWorld.elements,o=a[0],l=a[1],c=a[2],h=a[4],u=a[5],f=a[6],p=-a[8],d=-a[9],x=-a[10],g=a[12],m=a[13],M=a[14];for(let _=0;_<this.n;_++){let v=this.seed[_*3+2]-t*n*1.4;v<2&&(v+=40),this.seed[_*3+2]=v;let R=this.seed[_*3],T=this.seed[_*3+1],S=Math.cos(R)*T,C=Math.sin(R)*T*.6,b=2+n*.06,y=g+o*S+h*C+p*v,A=m+l*S+u*C+d*v,L=M+c*S+f*C+x*v;this.pos[_*6]=y,this.pos[_*6+1]=A,this.pos[_*6+2]=L,this.pos[_*6+3]=y+p*b,this.pos[_*6+4]=A+d*b,this.pos[_*6+5]=L+x*b;let I=140*r,U=i?255:220;this.col[_*8]=i?120:220,this.col[_*8+1]=i?190:220,this.col[_*8+2]=U,this.col[_*8+3]=I,this.col[_*8+4]=0,this.col[_*8+5]=0,this.col[_*8+6]=0,this.col[_*8+7]=0}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}},Sc=class{constructor(t,e){this.items=[];let n=["debris_bumper","debris_door","debris_tire","debris_spoiler","debris_plate"];for(let i=0;i<10;i++){let r=new Qt(Di(n[i%n.length],"body"),e);r.userData.s0=n[i%n.length]==="debris_tire"?.65:.85,r.visible=!1,r.userData.v=new N,r.userData.w=new N,r.userData.t=0,t.add(r),this.items.push(r)}this.next=0}burst(t,e,n,i,r,a,o){for(let l=0;l<o;l++){let c=this.items[this.next];this.next=(this.next+1)%this.items.length,c.visible=!0,c.position.set(t,e+.6,n),c.userData.v.set(i*.5+(Math.random()-.5)*6,2.5+Math.random()*3.5,a*.5+(Math.random()-.5)*6),c.userData.w.set(Math.random()*10,Math.random()*10,Math.random()*10),c.userData.t=2.2,c.userData.floor=e-.4,c.scale.setScalar(c.userData.s0||1)}}update(t){for(let e of this.items){if(!e.visible)continue;let n=e.userData;if(n.t-=t,n.t<=0){e.visible=!1;continue}n.t<.5&&e.scale.setScalar(n.s0*n.t/.5),n.v.y-=9.8*t,e.position.x+=n.v.x*t,e.position.y+=n.v.y*t,e.position.z+=n.v.z*t,e.position.y<n.floor&&(e.position.y=n.floor,n.v.y*=-.3,n.v.x*=.7,n.v.z*=.7,n.w.multiplyScalar(.7)),e.rotation.x+=n.w.x*t,e.rotation.y+=n.w.y*t,e.rotation.z+=n.w.z*t}}},_a=class{constructor(t,e,n){let i=e==="low";this.sparks=new va(t,i?80:200,!0),this.smoke=new va(t,i?60:160,!1),this.skids=new Mc(t,i?300:700),this.streaks=new bc(t,i?24:48),this.debris=new Sc(t,n),this.low=i}spark(t,e,n,i,r,a){for(let o=0;o<a;o++)this.sparks.emit(t,e,n,i*.5+(Math.random()-.5)*6,1+Math.random()*4,r*.5+(Math.random()-.5)*6,255,190+Math.random()*60,90,255,.12,.25+Math.random()*.3)}puff(t,e,n,i,r,a){this.smoke.emit(t,e+.2,n,i*.2+(Math.random()-.5),.6+Math.random()*.6,r*.2+(Math.random()-.5),225,225,228,110*a,.8,1.1,2.6)}update(t){this.sparks.update(t),this.smoke.update(t),this.skids.update(),this.debris.update(t)}};var yu=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
varying float vFog;
`;function Mu(){return new pe({uniforms:Re,vertexShader:yu+`
attribute vec4 ds;   // x = d (m, left +), y = s (m along the street), z = half width, w = flags (1 junction, 2 one-way, 4 zebra side)
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
}`,fragmentShader:yu+`
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
}`,extensions:{derivatives:!0}})}var ze=200,bu=2.2,xs=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.extra=null}get count(){return this.p.length/3}vert(t,e,n,i,r,a,o,l,c,h){return this.p.push(t,e,n),this.n.push(i*127|0,r*127|0,a*127|0,0),this.c.push(o,l,c,h||0),this.count-1}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}model(t,e,n,i,r,a,o,l){let c=uc(t,e),h=Math.cos(a),u=Math.sin(a),f=o||1,p=this.count;for(let d=0;d<c.part.n;d++){let x=c.pos[d*3]*f,g=c.pos[d*3+1]*f,m=c.pos[d*3+2]*f,M=c.nrm[d*4]/127,_=c.nrm[d*4+1]/127,v=c.nrm[d*4+2]/127,R=c.col[d*4],T=c.col[d*4+1],S=c.col[d*4+2];l&&(R=R*l[0]|0,T=T*l[1]|0,S=S*l[2]|0),this.p.push(n+x*h+m*u,i+g,r-x*u+m*h),this.n.push(Math.round((M*h+v*u)*127),Math.round(_*127),Math.round((-M*u+v*h)*127),0),this.c.push(Math.min(255,R),Math.min(255,T),Math.min(255,S),c.col[d*4+3]===64?64:0)}for(let d=0;d<c.idx.length;d++)this.i.push(p+c.idx[d])}box(t,e,n,i,r,a,o,l,c,h,u,f){let p=-l,d=o,x=[];for(let m=0;m<8;m++){let M=m&1?i:-i,_=m&2?r:0,v=m&4?a:-a;x.push(t+o*M+p*v,e+_,n+l*M+d*v)}let g=[[0,4,6,2,-1,0,0],[1,3,7,5,1,0,0],[0,1,5,4,0,-1,0],[2,6,7,3,0,1,0],[0,2,3,1,0,0,-1],[4,5,7,6,0,0,1]];for(let m of g){let M=m[4]*o+m[6]*p,_=m[5],v=m[4]*l+m[6]*d,R=m.slice(0,4).map(k=>this.vert(x[k*3],x[k*3+1],x[k*3+2],M,_,v,c,h,u,f?64:0)),T=m[0]*3,S=m[1]*3,C=m[2]*3,b=x[S]-x[T],y=x[S+1]-x[T+1],A=x[S+2]-x[T+2],L=x[C]-x[T],I=x[C+1]-x[T+1],U=x[C+2]-x[T+2];(y*U-A*I)*M+(A*L-b*U)*_+(b*I-y*L)*v>=0?this.quad(R[0],R[1],R[2],R[3]):this.quad(R[0],R[3],R[2],R[1])}}build(t){let e=new me;if(e.setAttribute("position",new Vt(new Float32Array(this.p),3)),t&&e.setAttribute("normal",new Vt(new Int8Array(this.n),4,!0)),e.setAttribute("col",new Vt(new Uint8Array(this.c),4,!0)),e.setIndex(new Vt(this.count>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),this.extra)for(let n in this.extra){let i=this.extra[n];e.setAttribute(n,new Vt(new Float32Array(i.a),i.n))}return e.computeBoundingSphere(),e}};function fx(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Su=[[240,238,230],[244,242,236],[236,226,204],[226,212,186],[222,200,172],[232,230,224],[214,222,228],[236,214,204],[246,246,244]],ya=class{constructor(t,e,n){this.scene=t,this.net=e,this.reach=n.tier==="low"?520:n.tier==="mid"?680:860,this.mats={world:ms(),road:Mu(),bld:du()},this.chunks=new Map;let i=(f,p)=>Math.floor(f/ze)*1e3+Math.floor(p/ze)+500500;this.key=i;let r=f=>{let p=this.chunks.get(f);return p||this.chunks.set(f,p={k:f,segs:[],blds:[],heads:[],st:[],jn:[],built:null}),p};for(let f=0;f<e.n-1;f++)e.sE[f+1]===e.sE[f]&&r(i((e.px[f]+e.px[f+1])/2,(e.pz[f]+e.pz[f+1])/2)).segs.push(f);for(let f=0;f<e.nj;f++)e.jEdges[f].length>=3&&r(i(e.jx[f],e.jz[f])).jn.push(f);let a=e.bld;for(let f=0;f<a.length;){let p=a[f];r(i(a[f+3],a[f+4])).blds.push(f),f+=3+p*2}for(let f of e.stations){let p=e.eOff[f.e]+f.k;r(i(e.px[p],e.pz[p])).st.push(f)}this.getChunk=r,this.heads=[];let o={};for(let f=0;f<e.lights.length;f++){let p=e.lights[f],d=p.j,x=e.jEdges[d];for(let g=0;g<x.length;g++){let m=x[g],M=e.eB[m]===d;if(e.eOne[m]&&!M)continue;let _=M?-1:1,v=e.eHw[m],R=!1;for(let b=1.5;b<=13.5&&!R;b+=2){let y=M?e.eLen[m]-e.jr[d]-b:e.jr[d]+b;if(y<0||y>e.eLen[m])break;for(let A=.7;A<=2.9&&!R;A+=.55)e.at(m,y,_*(v+A),o),Math.hypot(o.x-e.jx[d],o.z-e.jz[d])>e.jr[d]+.4&&this.clear(o.x,o.z,.45,!0)&&(R=!0)}if(!R)continue;let T=M?o.fx:-o.fx,S=M?o.fz:-o.fz,C={L:f,ph:p.ph[g],x:o.x,y:o.y+.15,z:o.z,fx:T,fz:S};this.heads.push(C),r(i(o.x,o.z)).heads.push(C)}}let l=new Ci(.24,.24,.08);this.lamps=new cs(l,new un({color:16777215}),Math.max(1,this.heads.length*3));let c=new te,h=new Ft(2236962);for(let f=0;f<this.heads.length;f++){let p=this.heads[f];for(let d=0;d<3;d++)c.makeRotationY(Math.atan2(p.fx,p.fz)),c.setPosition(p.x-p.fx*.2,p.y+3.75-d*.3,p.z-p.fz*.2),this.lamps.setMatrixAt(f*3+d,c),this.lamps.setColorAt(f*3+d,h)}this.lamps.frustumCulled=!1,t.add(this.lamps),this.lampState=new Int8Array(this.heads.length).fill(-1);let u=new ai(4e4,4e4,1,1);u.rotateX(-Math.PI/2),this.sea=new Qt(u,mu()),this.sea.position.y=0,this.sea.frustumCulled=!1,this.sea.renderOrder=-1,t.add(this.sea),this.sky=new Qt(new sa(5e3,16,8),pu()),this.sky.frustumCulled=!1,this.sky.renderOrder=10,t.add(this.sky),this.live=[],this.buildMs=0,this.built=0}setLamps(t){let e=[new Ft(16722458),new Ft(16756736),new Ft(2293606)],n=new Ft(1907997),i=!1;for(let r=0;r<this.heads.length;r++){let a=this.heads[r],o=t(a.L,a.ph);o!==this.lampState[r]&&(this.lampState[r]=o,i=!0,this.lamps.setColorAt(r*3,o===2?e[0]:n),this.lamps.setColorAt(r*3+1,o===1?e[1]:n),this.lamps.setColorAt(r*3+2,o===0?e[2]:n))}i&&(this.lamps.instanceColor.needsUpdate=!0)}stream(t,e,n,i){let r=performance.now(),a=this.reach,o=Math.floor(t/ze),l=Math.floor(e/ze),c=Math.ceil(a/ze)+1,h=[];for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){let p=(o+u+.5)*ze,d=(l+f+.5)*ze,x=Math.hypot(p-t,d-e)-ze*.71;if(x>a)continue;let g=this.chunks.get((o+u)*1e3+(l+f)+500500)||this.emptyChunk(o+u,l+f);g.built||h.push([x,g])}h.sort((u,f)=>u[0]-f[0]);for(let[,u]of h){if(!i&&performance.now()-r>n)break;this.buildChunk(u)}for(let u=this.live.length-1;u>=0;u--){let f=this.live[u];Math.hypot(f.cx-t,f.cz-e)-ze*.71>a+260&&(this.dropChunk(f),this.live.splice(u,1))}this.buildMs=performance.now()-r}addEnforce(t){for(let e of t.cams){let n=this.getChunk(this.key(e.x,e.z));(n.cams||(n.cams=[])).push(e)}for(let e of t.police){let n=this.getChunk(this.key(e.x,e.z));(n.cops||(n.cops=[])).push(e)}}emptyChunk(t,e){let n=t*1e3+e+500500,i={k:n,segs:[],blds:[],heads:[],st:[],jn:[],built:null};return this.chunks.set(n,i),i}buildChunk(t){let e=this.net,n=t.k-500500,i=Math.round(n/1e3),r=n-i*1e3,a=i*ze,o=r*ze,l=new xs,c=new xs,h=new xs,u=new xs;l.extra={ds:{a:[],n:4}};let f=l.extra.ds.a,p=fx(t.k*7919+13),d=t.segs,x=0;for(let S=1;S<=d.length;S++)S<d.length&&d[S]===d[S-1]+1&&e.sE[d[S]]===e.sE[d[x]]||(this.street(l,f,h,c,d[x],d[S-1]+1,p),x=S);for(let S of t.jn){let C=e.jr[S]+.4,b=e.jy[S]+.012,y=18,A=e.jPlane[S],L=(U,X)=>A?e.planeY(S,U,X)+.012:b,I=l.count;l.vert(e.jx[S],L(e.jx[S],e.jz[S]),e.jz[S],0,1,0,0,0,0),f.push(0,0,99,1);for(let U=0;U<=y;U++){let X=U/y*Math.PI*2,k=e.jx[S]+Math.cos(X)*C,Z=e.jz[S]+Math.sin(X)*C;l.vert(k,L(k,Z),Z,0,1,0,0,0,0),f.push(0,0,99,1)}for(let U=0;U<y;U++)l.i.push(I,I+2+U,I+1+U)}let g=e.g,m=Math.max(0,Math.floor((a-g.x0)/g.c)),M=Math.min(g.nx-1,Math.ceil((a+ze-g.x0)/g.c)),_=Math.max(0,Math.floor((o-g.z0)/g.c)),v=Math.min(g.nz-1,Math.ceil((o+ze-g.z0)/g.c));if(M>m&&v>_){let S=M-m+1,C=c.count,b=g.h,y=g.nx,A=(L,I)=>b[Math.max(0,Math.min(g.nz-1,I))*y+Math.max(0,Math.min(y-1,L))]/10;for(let L=_;L<=v;L++)for(let I=m;I<=M;I++){let U=A(I,L),X=(A(I+1,L)-A(I-1,L))/(2*g.c),k=(A(I,L+1)-A(I,L-1))/(2*g.c),Z=Math.hypot(X,1,k),V=1/Z,K=(Math.sin(I*.9)+Math.sin(L*1.3))*.5,it,ht,St;U<.5?(it=196,ht=182,St=146):U<3?(it=222+K*8,ht=206+K*8,St=162):V<.82?(it=132+K*10,ht=118+K*8,St=96):(it=116+K*16,ht=132+K*14,St=76+K*6),c.vert(g.x0+I*g.c,U,g.z0+L*g.c,-X/Z,V,-k/Z,it,ht,St)}for(let L=0;L<v-_;L++)for(let I=0;I<S-1;I++){let U=C+L*S+I;A(m+I,_+L)<-2.4&&A(m+I+1,_+L+1)<-2.4&&A(m+I+1,_+L)<-2.4||c.quad(U,U+S,U+S+1,U+1)}}for(let S of t.blds)this.building(u,S);for(let S of t.heads){let C=S.fz,b=-S.fx;c.box(S.x,S.y,S.z,.07,3.4,.07,C,b,70,72,76),c.box(S.x-S.fx*.05,S.y+3.3,S.z-S.fz*.05,.2,.95,.12,C,b,30,30,32)}for(let S of t.cams||[]){let C=Math.sin(S.yaw),b=Math.cos(S.yaw),y=b,A=-C;c.box(S.x,S.y,S.z,.06,2.7,.06,y,A,120,124,128),c.box(S.x,S.y+2.55,S.z,.28,.6,.3,y,A,200,204,208),c.box(S.x,S.y+2.62,S.z,.29,.12,.31,y,A,240,196,24),c.box(S.x+C*.31,S.y+2.82,S.z+b*.31,.1,.18,.02,y,A,20,22,26)}for(let S of t.cops||[]){let C=Math.sin(S.yaw),b=Math.cos(S.yaw),y=b,A=-C,L=[22,34,70],I=[190,140,105];c.box(S.x+y*.1,S.y,S.z+A*.1,.08,.9,.1,y,A,...L),c.box(S.x-y*.1,S.y,S.z-A*.1,.08,.9,.1,y,A,...L),c.box(S.x,S.y+.9,S.z,.23,.62,.14,y,A,...L),c.box(S.x+y*.08,S.y+1.3,S.z+A*.08+0,.05,.12,.15,y,A,245,245,245),c.box(S.x,S.y+1.52,S.z,.11,.24,.11,y,A,...I),c.box(S.x,S.y+1.74,S.z,.14,.08,.15,y,A,245,245,245),c.box(S.x+y*.31,S.y+.95,S.z+A*.31,.06,.55,.06,y,A,...L),c.box(S.x-y*.31,S.y+.95,S.z-A*.31,.06,.55,.06,y,A,...L),c.box(S.x+y*.31,S.y+.85,S.z+A*.31,.06,.1,.06,y,A,250,250,250),c.box(S.x-y*.31,S.y+.85,S.z-A*.31,.06,.1,.06,y,A,250,250,250);let U=S.x-C*.4+y*5.5,X=S.z-b*.4+A*5.5,k=Math.atan2(y,A);for(let Z of["body","wfl","wfr","wbl","wbr"])h.model("car_police",Z,U,S.y,X,k,1)}for(let S of t.st)this.station(c,h,S);let R={k:t.k,meshes:[],cx:a+ze/2,cz:o+ze/2},T=(S,C,b)=>{if(!S.count)return;let y=new Qt(S.build(b!=="road"),C);y.matrixAutoUpdate=!1,y.updateMatrix(),y.userData.kind=b,this.scene.add(y),R.meshes.push(y)};T(l,this.mats.road,"road"),T(c,this.mats.world,"core"),T(h,this.mats.world,"detail"),T(u,this.mats.bld,"bld"),t.built=R,this.live.push(t),t.cx=R.cx,t.cz=R.cz,this.built++}dropChunk(t){for(let e of t.built.meshes)this.scene.remove(e),e.geometry.dispose();t.built=null}street(t,e,n,i,r,a,o){let l=this.net,c=l.sE[r],h=l.eHw[c],u=l.eCls[c],f=l.eOne[c],p=[0,0,0,h,h/2,0,-h/2,-h,0,0,0],d=11,x=t.count,g=l.eLen[c],m=l.eA[c],M=l.eB[c];for(let _=r;_<=a;_++){let v=l.px[_],R=l.py[_],T=l.pz[_],S=l.tz[_],C=-l.tx[_],b=l.sS[_],y=l.sJ[_]>=0,A=l.jEdges[m].length>=3&&b>l.jr[m]+2&&b<l.jr[m]+6,L=l.jEdges[M].length>=3&&g-b>l.jr[M]+2&&g-b<l.jr[M]+6,I=(y?1:0)+(f?2:0)+(A||L?4:0),U=l.pl[_],X=l.pr[_],k=U>=ge-.05,Z=X>=ge-.05;p[0]=h+U+(k?bu:0),p[1]=h+U,p[2]=h+Math.min(.35,U),p[8]=-h-Math.min(.35,X),p[9]=-h-X,p[10]=-h-X-(Z?bu:0);let V=!y&&U>.6?.15:0,K=!y&&X>.6?.15:0;for(let pt=0;pt<d;pt++){let W=p[pt],Q=pt===0?k?-.55:V:pt===10?Z?-.55:K:pt===1||pt===2?V:pt===8||pt===9?K:0,ut=l.surfY(c,b,v+S*W,T+C*W,R)+Q,rt=l.query(v+S*W,T+C*W,-1,this.vq||(this.vq={}));pt>=3&&pt<=7?rt.edge>=0&&rt.off===0&&rt.junc<0&&(ut=rt.y):rt.edge>=0&&rt.edge!==c&&rt.off===0&&(ut=Math.min(ut,rt.y-.04)),t.vert(v+S*W,ut,T+C*W,0,1,0,0,0,0),e.push(W,b,h,I)}if(_>r){let pt=x+(_-r-1)*d,W=x+(_-r)*d;for(let Q=0;Q<d-1;Q++)t.quad(pt+Q,pt+Q+1,W+Q+1,W+Q)}if(y||_===a)continue;let it=Math.atan2(l.tx[_],l.tz[_]),ht=l.pl[_],St=l.pr[_];if(u<=3&&_%10===0&&ht>1.4){let pt=h+.9;this.clear(v+S*pt,T+C*pt,.6)&&this.lamp(n,v+S*pt,l.surfY(c,b,v+S*pt,T+C*pt,R)+.15,T+C*pt,-S,-C)}if(u<=3&&_%10===5&&St>1.4){let pt=-(h+.9);this.clear(v+S*pt,T+C*pt,.6)&&this.lamp(n,v+S*pt,l.surfY(c,b,v+S*pt,T+C*pt,R)+.15,T+C*pt,S,C)}if(_%6===3&&o()<(u>=4?.45:.3)){let pt=o()<.5?1:-1,W=pt*(h+ge-.7);if((pt>0?ht:St)<ge-.05||!this.clear(v+S*W,T+C*W,1.6))continue;let ut=R<9&&u<=2?"palm_tall":o()<.5?"tree":"tree_oak",rt=ut[0]==="p"?.5+o()*.1:ut==="tree"?.32+o()*.08:.4+o()*.1;n.model(ut,"body",v+S*W,l.surfY(c,b,v+S*W,T+C*W,R)+.15,T+C*W,o()*6.28,rt)}}}lamp(t,e,n,i,r,a){this.poleLog&&this.poleLog.push(e,i);let o=2,l=Math.atan2(r,a),c=Math.cos(l),h=Math.sin(l),u=-1.575*o,f=-2.925*o;t.model("light_modern","body",e-(u*c+f*h),n,i-(-u*h+f*c),l,o)}clear(t,e,n,i){let r=this.net.query(t,e,-1,this.cq||(this.cq={}));if(r.edge<0)return!0;if(Math.abs(r.d)-r.hl<n)return!1;if(r.junc<0)return!0;let a=this.net,o=r.junc;return!!i&&Math.hypot(t-a.jx[o],e-a.jz[o])>a.jr[o]+n}station(t,e,n){let i=this.net,r=n.e,a=i.eOff[r]+n.k,o=i.px[a],l=i.py[a]+.15,c=i.pz[a],h=i.tx[a],u=i.tz[a],f=u,p=-h,d=i.eHw[r],x=-(d+ge*.35),g=o+f*x,m=c+p*x;t.box(g,l+4.6,m,8,.6,(ge+3.5)/2,h,u,236,236,232),t.box(g,l+4.55,m,8.05,.12,(ge+3.5)/2+.05,h,u,20,150,90);for(let v of[-6,6]){let R=o+f*-(d+ge-.4)+h*v,T=c+p*-(d+ge-.4)+u*v;t.box(R,l,T,.2,4.6,.2,h,u,210,210,206);let S=o+f*-(d+1.6)+h*v*.6,C=c+p*-(d+1.6)+u*v*.6;t.box(S,l,C,.5,1.7,.3,h,u,30,160,95),t.box(S,l+1.2,C,.52,.35,.32,h,u,250,250,250,!0)}let M=o+f*-(d+ge+1.5)+h*11,_=c+p*-(d+ge+1.5)+u*11;t.box(M,l,_,.18,7,.18,h,u,180,180,180),t.box(M,l+5.2,_,.15,2.2,1.3,h,u,20,150,90),t.box(M,l+6,_,.17,.8,1,h,u,255,210,40,!0)}building(t,e){let n=this.net.bld,i=n[e],r=n[e+1],a=n[e+2],o=[],l=0,c=0;for(let _=0;_<i;_++){let v=n[e+3+_*2],R=n[e+4+_*2];o.push(new Rt(v,R)),l+=v,c+=R}l/=i,c/=i;let h=Su[Math.abs(Math.round(o[0].x*3+o[0].y*7))%Su.length],u=r>24?[200,206,212]:h,f=a-3,p=a+r;t.extra||(t.extra={wuv:{a:[],n:2}});let d=t.extra.wuv.a,x=0;for(let _=0;_<i;_++){let v=o[_],R=o[(_+1)%i],T=R.x-v.x,S=R.y-v.y,C=Math.hypot(T,S);if(C<.05)continue;let b=-S/C,y=T/C,A=b*((v.x+R.x)/2-l)+y*((v.y+R.y)/2-c)>0;A||(b=-b,y=-y);let L=t.vert(v.x,f,v.y,b,0,y,u[0],u[1],u[2]),I=t.vert(R.x,f,R.y,b,0,y,u[0],u[1],u[2]),U=t.vert(R.x,p,R.y,b,0,y,u[0],u[1],u[2]),X=t.vert(v.x,p,v.y,b,0,y,u[0],u[1],u[2]);d.push(x,-3,x+C,-3,x+C,r,x,r),A?t.quad(L,I,U,X):t.quad(L,X,U,I),x+=C}let g=Ti.triangulateShape(o,[]),m=t.count,M=[u[0]*.84|0,u[1]*.82|0,u[2]*.78|0];for(let _ of o)t.vert(_.x,p,_.y,0,1,0,M[0],M[1],M[2]),d.push(0,0);for(let _ of g){let v=o[_[0]],R=o[_[1]],T=o[_[2]];(R.y-v.y)*(T.x-v.x)-(R.x-v.x)*(T.y-v.y)>0?t.i.push(m+_[0],m+_[1],m+_[2]):t.i.push(m+_[0],m+_[2],m+_[1])}}cull(t,e,n,i){for(let r=0;r<this.live.length;r++){let a=this.live[r],o=Math.hypot(a.cx-t,a.cz-e)-ze*.71,l=a.built.meshes;for(let c=0;c<l.length;c++)l[c].visible=o<(l[c].userData.kind==="detail"?i:l[c].userData.kind==="bld"?n*.85:n)}}dispose(){for(let t of this.live)this.dropChunk(t);this.live=[],this.scene.remove(this.lamps),this.lamps.geometry.dispose(),this.lamps.material.dispose(),this.scene.remove(this.sea),this.sea.geometry.dispose(),this.sea.material.dispose(),this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose();for(let t in this.mats)this.mats[t].dispose()}};var dx=36;function js(s,t,e,n){let i=(n+s.lights[t].off)%dx;return e===0?i<14?0:i<17?1:2:i<18?2:i<32?0:i<35?1:2}var wu=[["tr_sedan",15197144],["tr_suv",4212303],["tr_van",15921906],["tr_sedan",9182493],["tr_delivery",16053492],["tr_truck",2906784],["tr_taxi",14205498],["tr_sedan",13224393],["tr_suv",1780298],["tr_sedan",2830134],["tr_taxi",14205498],["tr_sedan",10134445]],kn=99,fi=()=>(kn^=kn<<13,kn>>>=0,kn^=kn>>17,kn^=kn<<5,kn>>>=0,kn/4294967296),wc=class{constructor(t,e){let[n,i]=wu[e%wu.length];this.spec=Object.assign({},n==="tr_truck"||n==="tr_delivery"?sn.t_heavy:sn.t_small,{model:n}),this.veh=new ps(this.spec,Zs(n)),this.veh.assist.air=0,this.view=new gs(t,n,i),this.traffic=!0,this.player=-1,this.wreck=0,this.active=!1,this.id=e,this.e=0,this.dir=1,this.s=0,this.ne=-1,this.nd=1,this.phase=-1,this.mood=.85+fi()*.15,this.stuck=0,this.claim=-1,this.hitT=0,this.at={},this.at2={}}},Ma=class{constructor(t,e,n){this.net=e,this.cars=[];for(let i=0;i<n;i++)this.cars.push(new wc(t,i));this.t=0,this.busy=new Map,this.reach=340}lane(t,e){let n=this.net,i=n.eHw[t];return n.eOne[t]?i>3.9?-(i-1.9):0:-e*Math.min(i*.5,2.2)}pickNext(t){let e=this.net,n=t.dir>0?e.eB[t.e]:e.eA[t.e],i=[],r=0;for(let o of e.jEdges[n]){if(o===t.e&&e.jEdges[n].length>1||!e.canLeave(o,n)||e.eN[o]<4)continue;let l=e.eCls[o]<=2?3:e.eCls[o]<=3?2:1;i.push(o,l),r+=l}if(!i.length){t.ne=t.e,t.nd=-t.dir;return}let a=fi()*r;for(let o=0;o<i.length;o+=2)if(a-=i[o+1],a<=0||o===i.length-2){t.ne=i[o],t.nd=e.eA[i[o]]===n?1:-1;break}}place(t,e,n,i,r){let a=this.net,o=a.at(e,n,this.lane(e,i),t.at),l=o.fx*i,c=o.fz*i,h=t.veh;h.setPose(o.x,o.y+h.cgY+.42,o.z,Math.atan2(l,c)),h.hint=o.i;for(let u of h.wheels)u.hint=o.i;h.vx=l*r,h.vz=c*r,h.gear=1,h.reverse=!1,t.e=e,t.dir=i,t.s=n,t.active=!0,t.wreck=0,t.stuck=0,t.phase=-1,t.claim=-1,t.mood=.82+fi()*.18,this.pickNext(t)}spawn(t,e,n,i,r,a,o){let l=this.net;for(let c=0;c<24;c++){let h=fi()*Math.PI*2,u=150+fi()*(this.reach-170),f=e+Math.sin(h)*u,p=n+Math.cos(h)*u;if(c<16&&Math.sin(h)*i+Math.cos(h)*r>.55&&u<260||(l.query(f,p,-1,o),o.edge<0||o.junc>=0||l.eCls[o.edge]>=5&&fi()<.6))continue;let d=o.edge,x=l.eLen[d];if(x<30||o.s<12||o.s>x-12)continue;let g=l.eOne[d]||fi()<.5?1:-1,m=l.at(d,o.s,this.lane(d,g),t.at2),M=!0;for(let _ of a){if(_===t||_.traffic&&!_.active)continue;let v=_.veh.px-m.x,R=_.veh.pz-m.z;if(v*v+R*R<18*18){M=!1;break}}if(M)return this.place(t,d,o.s,g,6+fi()*4),!0}return!1}update(t,e,n,i){this.t+=t;let r=this.net,a=n.veh,o=Math.sin(a.yaw()),l=Math.cos(a.yaw());for(let[c,h]of this.busy)this.t-h.t>.3&&this.busy.delete(c);for(let c of this.cars){let h=c.veh;if(!c.active||c.wreck>0){if(c.wreck>0&&(c.wreck-=t,h.input.throttle=0,h.input.brake=1,h.input.steer=0,c.wreck>0))continue;this.spawn(c,a.px,a.pz,o,l,e,i);continue}let u=h.px-a.px,f=h.pz-a.pz;if(u*u+f*f>(this.reach+40)**2||c.stuck>7||h.R[4]<.3){c.active=!1,h.setPose(0,-500,0,0);continue}this.drive(c,t,e)}}drive(t,e,n){let i=this.net,r=t.veh,a=i.eLen[t.e];if(t.s=i.project(t.e,t.s,r.px,r.pz),t.dir>0&&t.s>a-.6||t.dir<0&&t.s<.6){let Z=t.dir>0?i.eB[t.e]:i.eA[t.e];t.claim,t.e=t.ne,t.dir=t.nd,a=i.eLen[t.e],t.s=t.dir>0?.6:a-.6,t.phase=-1,this.pickNext(t)}let o=t.dir>0?a-t.s:t.s,l=Math.max(0,r.fwdSpeed),c=5.5+l*.55,h=t.at;if(c<o)i.at(t.e,t.s+t.dir*c,this.lane(t.e,t.dir),h);else{let Z=Math.min(i.eLen[t.ne],c-o);i.at(t.ne,t.nd>0?Z:i.eLen[t.ne]-Z,this.lane(t.ne,t.nd),h)}let u=r.R,f=h.x-r.px,p=h.z-r.pz,d=f*u[0]+p*u[2],x=f*u[6]+p*u[8],g=2.6,m=Math.max(4,f*f+p*p),M=Math.atan2(2*g*d,m),_=r.lockAt(l);r.input.steer=Math.max(-1,Math.min(1,M/Math.max(.05,_))),x<0&&(r.input.steer=d>=0?1:-1);let v=i.eLim[t.e]/3.6*t.mood,R=i.at(t.e,t.s,0,t.at2),T=R.fx*t.dir,S=R.fz*t.dir,C=h.fx*(c<o?t.dir:t.nd),b=h.fz*(c<o?t.dir:t.nd),y=Math.acos(Math.max(-1,Math.min(1,T*C+S*b)));y>.05&&(v=Math.min(v,Math.sqrt(2.6*c/y)));let A=t.dir>0?i.eB[t.e]:i.eA[t.e],L=i.jr[A],I=o-L;if(I<60){let Z=I-2.5,V=!1,K=i.jLight[A];if(K>=0){if(t.phase<0){let Q=i.slot(t.e,A);t.phase=Q>=0?i.lights[K].ph[Q]:0}let W=js(i,K,t.phase,this.t);(W===2||W===1&&Z>l*l/7)&&(V=Z>-1)}else if(i.jEdges[A].length>=3&&I<9){let W=this.busy.get(A);!W||W.car===t?this.busy.set(A,{car:t,t:this.t}):Z>-.5&&(V=!0)}V&&(v=Math.min(v,Math.sqrt(2*3.2*Math.max(0,Z-.8))));let it=i.at(t.ne,t.nd>0?3:i.eLen[t.ne]-3,0,t.at2),ht=it.fx*t.nd,St=it.fz*t.nd,pt=Math.acos(Math.max(-1,Math.min(1,T*ht+S*St)));if(pt>.45){let W=pt>2.5?3:4+5*(1-pt/Math.PI);v=Math.min(v,Math.sqrt(W*W+2*2.6*Math.max(0,I)))}}let U=u[6],X=u[8];for(let Z of n){if(Z===t||Z.traffic&&!Z.active)continue;let V=Z.veh.px-r.px,K=Z.veh.pz-r.pz,it=V*U+K*X;if(it<2||it>40||Math.abs(V*u[0]+K*u[2])>2.6)continue;let St=it-6.5,pt=Math.max(0,Z.veh.vx*U+Z.veh.vz*X);v=Math.min(v,Math.max(0,pt+St*.6)),St<.5&&(v=0)}let k=v-l;r.input.throttle=Math.max(0,Math.min(1,k*.45)),r.input.brake=k<-.3?Math.max(0,Math.min(1,-k*.35)):0,v<.3&&(r.input.throttle=0,r.input.brake=1),r.input.handbrake=0,l<.4&&v>2.5?t.stuck+=e:t.stuck=0}dispose(){for(let t of this.cars)t.view.dispose()}};var ba={easy:{trip:[.4,1,.08,2.5],time:[6.5,70],see:45,tol:15,traffic:.55},normal:{trip:[.5,1.3,.12,3.5],time:[7.4,55],see:70,tol:10,traffic:.8},hard:{trip:[.8,1.8,.15,4.5],time:[8.2,45],see:90,tol:5,traffic:1}},Eu=["easy","normal","hard"],Tu=s=>ba[s]||ba.normal;function Au(s,t){let e=s.trip;return[e[0],Math.min(e[3],e[1]+e[2]*(t||0))]}var vs=13.4,px=40,mx=4,Sa={flag:7,km:4},wn={red:700,wrong:700,pave:500,fault:300};function Ru(s){return s<20?300:s<30?500:s<40?700:1e3}var Hn=7,pn=()=>(Hn^=Hn<<13,Hn>>>=0,Hn^=Hn>>17,Hn^=Hn<<5,Hn>>>=0,Hn/4294967296),wa=class{constructor(t,e){this.net=t,this.level=ba.normal;let n=e||{};this.money=n.money??300,this.fuel=n.fuel??9,this.tank=px,this.stats=Object.assign({rides:0,earned:0,fines:0,repairs:0,fuel:0,km:0,best:0},n.stats),this.peds=[],this.ride=null,this.log=[],this.events=[],this.toasts=[],this.prompt="",this.limiter=0,this.cool={speed:0,pave:0},this.overT=0,this.overMax=0,this.paveT=0,this.wrongT=0,this.wrongE=-1,this.lastE=-1,this.lastRem=1e9,this.lastJ=-1,this.crash=null,this.refuel=!1,this.helpT=0,this.redT=-10,this.wrongNow=0,this.time=0,this.dirty=!1}save(){return{money:Math.round(this.money),fuel:+this.fuel.toFixed(2),stats:this.stats}}pay(t,e){this.money+=t,this.dirty=!0,e&&(this.stats[e]+=Math.abs(t))}toast(t,e){this.toasts.push({text:t,kind:e||"info",t:0})}fine(t,e,n){this.pay(-e,"fines"),this.ride&&this.ride.fines++,this.events.push({kind:"fine",title:"fine_"+t,lines:[[n||"",-e]],total:-e})}update(t,e,n,i){this.time+=t;let r=this.net,a=Math.abs(e.fwdSpeed),o=a*3.6,l=a*t;if(this.stats.km+=l/1e3,this.ride&&this.ride.ped.state==="in"&&(this.ride.km+=l/1e3,this.ride.t+=t),this.fuelTick(t,e),e.topSpeedCap=this.limiter?this.limiter/3.6:1e9,n.edge>=0&&n.junc<0){let c=n.edge,h=n.fx,u=n.fz,p=e.vx*h+e.vz*u>=0?1:-1;c!==this.lastE&&(this.lastE=c,this.lastRem=1e9,this.wrongT=0);let d=p>0?r.eB[c]:r.eA[c],x=p>0?r.eLen[c]-n.s:n.s,g=this.enf?this.enf.officer(e.px,e.pz,this.level.see):null,m=r.jLight[d];if(m>=0&&a>2){let _=r.jr[d]+1;if(this.lastRem>_&&x<=_&&this.lastJ===d){let v=r.slot(c,d),R=v>=0?r.lights[m].ph[v]:0;i(m,R)===2&&(this.redT=this.time,g&&this.fine("red",wn.red,"seenPolice"))}}this.lastRem=x,this.lastJ=d,r.eOne[c]&&p<0&&a>2?(this.wrongT+=t,this.wrongNow=1):(this.wrongT=Math.max(0,this.wrongT-t),this.wrongNow=0),this.wrongT>2.5&&this.wrongE!==c&&(this.redT=this.time,g&&(this.wrongE=c,this.fine("wrong",wn.wrong,r.edgeName(c,this.lang)||"")));let M=n.lim;if(this.limit=M,this.enf){for(let _ of this.enf.cams){if(_.e!==c||p!==_.dir)continue;let v=this.camS,R=n.s;this.camE===c&&v!==void 0&&(v-_.s)*(R-_.s)<=0&&v!==R&&this.time>(_.cool||0)&&(_.cool=this.time+20,this.flash=.25,o>M+this.level.tol&&this.fine("speed",Ru(o-M),"camSpeed:"+Math.round(o)+" km/h / "+M))}this.camE=c,this.camS=n.s}o>M+this.level.tol&&g?(this.overT+=t,this.overMax=Math.max(this.overMax,o-M)):(this.overT=Math.max(0,this.overT-t*2),this.overT===0&&(this.overMax=0)),this.overT>3&&this.time>this.cool.speed&&(this.fine("speed",Ru(this.overMax),"policeSpeed:"+Math.round(M+this.overMax)+" km/h / "+M),this.cool.speed=this.time+40,this.overT=0,this.overMax=0),n.off>=1&&Math.abs(n.d)>n.hl+1.2&&a>3&&g?this.paveT+=t:this.paveT=Math.max(0,this.paveT-t),this.paveT>1.2&&this.time>this.cool.pave&&(this.fine("pave",wn.pave,"seenPolice"),this.cool.pave=this.time+30,this.paveT=0)}else this.wrongNow=0;this.speeding=this.overT>0,this.peopleTick(t,e,n),this.crashTick(t),this.prompt="",e.fuelCut&&this.fuel<=.01?this.prompt=this.helpT>0?"helpWait":"help":this.refuel?this.prompt="stop":this.nearStation(e)&&a<1.2&&this.fuel<this.tank-.5?this.prompt="refuel":this.ride&&this.ride.ped.state==="in"&&this.atDest(e)&&a<1.6?this.prompt="dropoff":!this.ride&&a<1.6&&this.nearPed(e)&&(this.prompt="pickup",this.quote(e,n,this.nearPed(e)))}fuelTick(t,e){if(this.helpT>0){if(this.helpT-=t,this.helpT<=0){let l=150+Math.round(6*vs*1.5);this.fuel+=6,this.pay(-l,"fuel"),e.fuelCut=!1,e.stalled=!1,this.events.push({kind:"help",title:"helpDone",lines:[["helpService",-150],["helpFuel",-(l-150)]],total:-l})}return}if(this.refuel){let o=Math.min(this.tank-this.fuel,5*t);this.fuel+=o,this.pay(-o*vs,"fuel"),this.refuelL+=o,(this.fuel>=this.tank-.01||this.money<0)&&this.stopRefuel();return}if(e.fuelCut||e.stalled)return;let n=e.input.throttle,i=Math.max(e.rpm,800),a=.7+.26*Math.max(0,e.engineTorque(i)*n*i*Math.PI/30/1e3);this.fuel-=a/3600*t*mx,this.fuel<=0&&(this.fuel=0,e.fuelCut=!0,this.toast("outOfFuel","bad"),this.dirty=!0),this.fuel<4&&!this.lowSaid&&(this.lowSaid=!0,this.toast("lowFuel","warn")),this.fuel>6&&(this.lowSaid=!1)}stopRefuel(){this.refuel=!1,this.refuelL>.05&&this.events.push({kind:"fuel",title:"refuelDone",lines:[["litres:"+this.refuelL.toFixed(1),-Math.round(this.refuelL*vs)]],total:-Math.round(this.refuelL*vs)}),this.dirty=!0}nearStation(t){let e=this.net;for(let n of e.stations){let i=e.eOff[n.e]+n.k;if(Math.hypot(e.px[i]-t.px,e.pz[i]-t.pz)<16)return!0}return!1}action(t,e){let n=this.prompt;n==="help"?(this.helpT=9,this.toast("helpComing","info")):n==="refuel"?(this.refuel=!0,this.refuelL=0):n==="stop"?this.stopRefuel():n==="pickup"?this.pickup(t,e):n==="dropoff"&&this.dropoff(t)}spawnPed(t,e){let n=this.net,i=Math.atan2(t.R[6],t.R[8]);for(let r=0;r<20;r++){let a=pn()<.7?i+(pn()-.5)*2:pn()*Math.PI*2,o=40+pn()*280;n.query(t.px+Math.sin(a)*o,t.pz+Math.cos(a)*o,-1,e);let l=e.edge;if(l<0||e.junc>=0||n.eCls[l]===0||n.eLen[l]<30||e.s<10||e.s>n.eLen[l]-10)continue;let c=pn()<.5?1:-1,h=e.i;if((c>0?n.pl[h]:n.pr[h])<1.5)continue;let u=n.at(l,e.s,c*(n.eHw[l]+1.2),{});if(this.peds.some(p=>Math.hypot(p.x-u.x,p.z-u.z)<45))continue;let f=this.pickDest(u.x,u.z,e);if(f){this.peds.push({x:u.x,y:u.y+.15,z:u.z,yaw:Math.atan2(-c*u.lx,-c*u.lz),e:l,s:e.s,side:c,state:"wait",t:pn()*3,kind:pn()*6|0,dest:f});return}}}pickDest(t,e,n){let i=this.net;for(let r=0;r<12;r++){let a=Au(this.level,this.stats.rides),o=pn()*Math.PI*2,l=(a[0]+pn()*(a[1]-a[0]))*1e3/1.3;i.query(t+Math.sin(o)*l,e+Math.cos(o)*l,-1,n);let c=n.edge;if(c<0||n.junc>=0||i.eLen[c]<30||i.eCls[c]===0)continue;let h=Math.max(10,Math.min(i.eLen[c]-10,n.s)),u=i.at(c,h,0,{}),f=Math.hypot(u.x-t,u.z-e)*1.3/1e3;return{e:c,s:h,name:i.edgeName(c,this.lang)||i.areaName(u.x,u.z,this.lang),km:f,fare:Math.round(Sa.flag+Sa.km*f)}}return null}peopleTick(t,e,n){let i=this.ride?2:6,r=0;for(let a of this.peds)a.state==="wait"&&r++;r<i&&this.time%.25<t&&this.spawnPed(e,this.q2||(this.q2={}));for(let a=this.peds.length-1;a>=0;a--){let o=this.peds[a];if(o.t+=t,o.state==="wait"&&Math.hypot(o.x-e.px,o.z-e.pz)>500){this.peds.splice(a,1);continue}if(o.state==="walk"){let l=e.R,c=e.px+l[0]*1.1*(o.side>0?1:-1)-o.x,h=e.pz+l[2]*1.1*(o.side>0?1:-1)-o.z,u=Math.hypot(c,h);if(u<.6||o.t>3)o.state="in",this.ride.t=0,this.toast("boarded","ok");else{let f=Math.min(u,2.2*t);o.x+=c/u*f,o.z+=h/u*f,o.yaw=Math.atan2(c,h)}}o.state==="out"&&(o.x+=Math.sin(o.yaw)*1.4*t,o.z+=Math.cos(o.yaw)*1.4*t,o.t>4&&this.peds.splice(a,1)),o.state==="gone"&&this.peds.splice(a,1)}}nearPed(t){let e=null,n=11;for(let i of this.peds){if(i.state!=="wait")continue;let r=Math.hypot(i.x-t.px,i.z-t.pz);r<n&&(n=r,e=i)}return e}quote(t,e,n){if(n.quote&&Math.hypot(n.quote.x-t.px,n.quote.z-t.pz)<3)return n.quote;let i=this.net,r=this.q2||(this.q2={}),a=e.edge>=0?t.R[6]*e.fx+t.R[8]*e.fz>=0?1:-1:1;n.quote=null;for(let o=0;o<6&&!n.quote;o++){let l=o===0?n.dest:this.pickDest(n.x,n.z,r);if(!l)continue;let c=i.route(e.edge>=0?e.edge:l.e,e.edge>=0?e.s:0,a,l.e,l.s);!c||c.len<500||c.len>7e3||(n.dest=l,n.quote={x:t.px,z:t.pz,route:c,km:c.len/1e3,fare:Math.round(Sa.flag+Sa.km*c.len/1e3),name:l.name})}return n.quote}pickup(t,e){let n=this.nearPed(t);if(!n)return;let i=this.net,r=this.quote(t,e,n);if(!r){this.toast("noDest","warn"),n.state="out",n.t=0;return}let a=n.dest,o=r.route,l=pn()<.5?1:-1,c=i.at(a.e,a.s,l*(i.eHw[a.e]+1.7),{});n.state="walk",n.t=0,this.ride={ped:n,e:a.e,s:a.s,side:l,x:c.x,y:c.y,z:c.z,route:o,len:o.len,eta:o.len/this.level.time[0]+this.level.time[1],t:0,km:0,hits:0,fines:0,scare:0,name:a.name,fare:r.fare,routeT:0},this.toast("pickup","ok")}atDest(t){let e=this.ride;return e&&Math.hypot(e.x-t.px,e.z-t.pz)<this.net.eHw[e.e]+14}meter(){let t=this.ride;return t?t.fare:0}dropoff(t){let e=this.ride;if(!e)return;let n=this.meter(),i=[["fareKm:"+(e.len/1e3).toFixed(1),Math.round(n)]],r=n,a=e.t-e.eta;if(a>0){let l=Math.min(.6,Math.ceil(a/15)*.1);i.push(["lateBy:"+Math.round(a),-Math.round(n*l)]),r-=n*l}if(e.hits>0){let l=Math.min(1,e.hits*.25);i.push(["bumps:"+e.hits,-Math.round(n*l)]),r-=n*l}if(a<=0&&e.hits===0&&e.fines===0){let l=Math.max(2,Math.round(n*(.1+pn()*.1)));i.push(["tip",l]),r+=l}r=Math.max(0,Math.round(r)),this.pay(r,"earned"),this.stats.rides++,this.stats.best=Math.max(this.stats.best,r),this.events.push({kind:"ride",title:"rideDone",lines:i,total:r});let o=e.ped;o.state="out",o.t=0,o.x=t.px+t.R[0]*2.2*e.side,o.z=t.pz+t.R[2]*2.2*e.side,o.y=e.y+.15,o.yaw=Math.atan2(t.R[6],t.R[8]),this.peds.includes(o)||this.peds.push(o),this.ride=null}hitPed(t){let e=Math.round((800+t*60)/10)*10,n=[["impact:"+Math.round(t),0],["pedHurt",-e],["fineFault",-wn.fault]],i=-e-wn.fault;this.money+=i,this.stats.repairs+=e,this.stats.fines+=wn.fault,this.dirty=!0,this.ride&&this.ride.hits++,this.events.push({kind:"crash",title:"fine_ped",lines:n,total:i})}hit(t,e,n){if(t<1.3)return;this.crash||(this.crash={t:0,rel:0,car:!1,fault:!1,wall:!1});let i=this.crash;i.rel=Math.max(i.rel,t),i.t=0,e?(i.car=!0,i.fault=i.fault||n):i.wall=!0}crashTick(t){let e=this.crash;if(!e||(e.t+=t,e.t<1.2))return;this.crash=null;let n=Math.round(e.rel*3.6),i=e.wall||e.fault||this.time-this.redT<4,r=[["impact:"+n,0]],a=Math.min(14e3,Math.round(e.rel*e.rel*18/10)*10),o=0;if(i?(r.push(["repairOwn",-a]),o-=a):r.push(["repairInsured",0]),e.car&&i){let l=Math.min(14e3,Math.round(a*.9/10)*10);r.push(["repairOther",-l]),o-=l,r.push(["fineFault",-wn.fault]),o-=wn.fault,this.stats.fines+=wn.fault}if(this.money+=o,this.stats.repairs+=-o-(e.car&&i?wn.fault:0),this.dirty=!0,this.ride&&this.ride.ped.state==="in"){if(this.ride.hits++,i&&e.rel>6){let l=Math.round((200+e.rel*40)/10)*10;r.push(["passengerHurt",-l]),o-=l,this.money-=l,this.stats.repairs+=l}if(e.rel>8.5){let l=this.ride.ped;l.state="gone",this.ride=null,r.push(["passengerLeft",0])}}this.events.push({kind:"crash",title:i?e.car?"crashYou":"crashWall":"crashThem",lines:r,total:o})}};var Cu=[[[200,60,50],[40,50,80]],[[230,220,200],[90,70,50]],[[60,120,180],[50,50,55]],[[150,60,140],[30,30,40]],[[245,245,240],[245,245,240]],[[80,140,80],[60,60,70]]],Ea=[[200,150,110],[170,120,85],[215,170,130]];function gx(s,t,e,n,i,r,a,o,l,c,h){let u=[[i,r,a],[o,r,a],[o,l,a],[i,l,a],[i,r,c],[o,r,c],[o,l,c],[i,l,c]],f=[[0,3,2,1,0,0,-1],[4,5,6,7,0,0,1],[0,4,7,3,-1,0,0],[1,2,6,5,1,0,0],[3,7,6,2,0,1,0],[0,1,5,4,0,-1,0]];for(let p of f){let d=s.length/3;for(let x=0;x<4;x++){let g=u[p[x]];s.push(g[0],g[1],g[2]),t.push(p[4]*127,p[5]*127,p[6]*127,0),e.push(h[0],h[1],h[2],0)}n.push(d,d+1,d+2,d,d+2,d+3)}}function Pu(s){let t=[],e=[],n=[],i=[];for(let a of s)gx(t,e,n,i,...a);let r=new me;return r.setAttribute("position",new Vt(new Float32Array(t),3)),r.setAttribute("normal",new Vt(new Int8Array(e),4,!0)),r.setAttribute("col",new Vt(new Uint8Array(n),4,!0)),r.setIndex(i),r.computeBoundingSphere(),r}var Ta=class{constructor(t,e=8){this.scene=t,this.mat=ms(),this.bodies=Cu.map((n,i)=>{let r=Ea[i%Ea.length];return Pu([[-.17,0,-.1,-.02,.85,.1,n[1]],[.02,0,-.1,.17,.85,.1,n[1]],[-.22,.85,-.13,.22,1.45,.13,n[0]],[-.3,.88,-.07,-.22,1.42,.07,n[0]],[-.11,1.46,-.11,.11,1.72,.11,r],[-.12,1.68,-.12,.12,1.76,.12,[40,30,25]]])}),this.arms=Cu.map((n,i)=>Pu([[-.04,-.55,-.07,.04,.02,.07,n[0]],[-.045,-.68,-.06,.045,-.55,.06,Ea[i%Ea.length]]])),this.arrowGeo=new hs(.32,.75,4),this.arrowGeo.rotateX(Math.PI),this.arrowGeo.translate(0,.375,0),this.arrowMat=new un({color:2949007,fog:!1}),this.pool=[];for(let n=0;n<e;n++){let i=new Mn,r=new Qt(this.bodies[n%this.bodies.length],this.mat),a=new Qt(this.arms[n%this.arms.length],this.mat);a.position.set(.26,1.42,0);let o=new Qt(this.arrowGeo,this.arrowMat);o.visible=!1,i.add(r),i.add(a),i.add(o),i.visible=!1,t.add(i),this.pool.push({g:i,body:r,arm:a,arrow:o})}}update(t,e,n,i){for(let r=0;r<this.pool.length;r++){let a=this.pool[r],o=r<e.length?e[r]:n[r-e.length],l=o?Math.hypot(o.x-i.x,o.z-i.z):1e9;if(!o||o.state==="in"||o.state==="gone"||o.live===!1||l>(o.state==="wait"?420:260)){a.g.visible=!1;continue}if(a.g.visible=!0,a.body.geometry!==this.bodies[o.kind]&&(a.body.geometry=this.bodies[o.kind],a.arm.geometry=this.arms[o.kind]),a.g.position.set(o.x,o.y,o.z),a.g.rotation.y=o.yaw,a.arrow.visible=o.state==="wait",a.arrow.visible){let c=Math.max(1,l/22);a.arrow.scale.setScalar(c),a.arrow.position.y=2.1+.25*c+Math.abs(Math.sin(o.t*3))*.35*c,a.arrow.rotation.y=o.t*1.5}o.state==="wait"?(a.arm.rotation.z=Math.PI*.85+Math.sin(o.t*7)*.25,a.arm.rotation.x=0):(a.arm.rotation.z=.1,a.arm.rotation.x=Math.sin(o.t*8)*.5),a.body.position.y=o.state==="wait"?0:Math.abs(Math.sin(o.t*8))*.04}}dispose(){for(let t of this.pool)this.scene.remove(t.g);for(let t of this.bodies.concat(this.arms))t.dispose();this.arrowGeo.dispose(),this.arrowMat.dispose(),this.mat.dispose()}};var Vn=1592594996,mn=()=>(Vn^=Vn<<13,Vn>>>=0,Vn^=Vn>>17,Vn^=Vn<<5,Vn>>>=0,Vn/4294967296),Aa=class{constructor(t,e){this.net=t,this.q={},this.at={},this.list=[];for(let n=0;n<e;n++)this.list.push({x:0,y:-1e4,z:0,yaw:0,e:-1,s:0,side:1,dir:1,sp:1.3,d:0,t:mn()*3,kind:n%6,state:"stroll",live:!1})}place(t,e,n,i,r,a){let o=this.net,l=this.q;for(let c=0;c<12;c++){let h=mn()<.75?a+(mn()-.5)*2.2:mn()*Math.PI*2,u=i+mn()*(r-i);o.query(e+Math.sin(h)*u,n+Math.cos(h)*u,-1,l);let f=l.edge;if(f<0||l.junc>=0||o.eCls[f]===0||o.eLen[f]<40)continue;let p=mn()<.5?1:-1,d=l.i;if((p>0?o.pl[d]:o.pr[d])<ge-.05)continue;let x=Math.max(o.jr[o.eA[f]]+6,Math.min(o.eLen[f]-o.jr[o.eB[f]]-6,l.s));if(t.e=f,t.s=x,t.side=p,t.dir=mn()<.5?1:-1,t.sp=1.1+mn()*.5,t.d=p*(o.eHw[f]+1.1+mn()*(ge-2.2)),t.kind=mn()*6|0,t.live=!0,this.move(t,0))return!0}return t.live=!1,t.y=-1e4,!1}move(t,e){let n=this.net,i=t.e;t.s+=t.dir*t.sp*e;let r=n.jr[n.eA[i]]+5,a=n.eLen[i]-n.jr[n.eB[i]]-5;t.s<r?(t.s=r,t.dir=1):t.s>a&&(t.s=a,t.dir=-1);let o=n.at(i,t.s,t.d,this.at),l=n.query(o.x,o.z,-1,this.q),c=n.eOff[i]+Math.min(n.eN[i]-1,Math.max(0,Math.round(t.s/4)));if((t.side>0?n.pl[c]:n.pr[c])<ge-.05||Math.abs(l.d)-l.hl<.6||l.junc>=0){if(e===0)return!1;t.s-=t.dir*t.sp*e,t.dir=-t.dir,o=n.at(i,t.s,t.d,this.at)}return t.x=o.x,t.y=o.y+.15,t.z=o.z,t.yaw=Math.atan2(o.fx*t.dir,o.fz*t.dir),t.t+=e,!0}update(t,e,n,i){for(let r of this.list){if(r.live&&(r.x-e)*(r.x-e)+(r.z-n)*(r.z-n)>240*240&&(r.live=!1),!r.live){(r.wait=(r.wait||0)-t)<=0&&(r.wait=.3+mn()*.3,this.place(r,e,n,r.e<0?15:60,180,i));continue}this.move(r,t)}}};var Gn=13254170,_s=()=>(Gn^=Gn<<13,Gn>>>=0,Gn^=Gn>>17,Gn^=Gn<<5,Gn>>>=0,Gn/4294967296),xx=90;var Ra=class{constructor(t){this.net=t,this.cams=[],this.police=[];let e={},n={},i=(a,o,l)=>(t.at(a,o,l,n),t.query(n.x,n.z,-1,e),e.edge>=0&&(Math.abs(e.d)-e.hl<.8||e.junc>=0)?null:{x:n.x,y:n.y,z:n.z,fx:n.fx,fz:n.fz,lx:n.lx,lz:n.lz}),r=(a,o,l,c)=>a.every(h=>(h.x-o)*(h.x-o)+(h.z-l)*(h.z-l)>c*c);for(let a=0;a<t.ne;a++){let o=t.eCls[a],l=t.eLen[a];if(o<=3&&l>=160&&_s()<.16){let c=t.eOne[a]||_s()<.5?1:-1,h=l*(.35+_s()*.3),u=-c,f=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4));if((u>0?t.pl[f]:t.pr[f])>=ge-.05){let p=i(a,h,u*(t.eHw[a]+.9));p&&r(this.cams,p.x,p.z,400)&&this.cams.push(Object.assign(p,{e:a,s:h,dir:c,side:u,yaw:Math.atan2(-c*p.fx,-c*p.fz)}))}}if(o<=4&&l>=90&&_s()<.05){let c=_s()<.5?1:-1,h=l*(.3+_s()*.4),u=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4)),f=h+5.5*c,p=t.eOff[a]+Math.min(t.eN[a]-1,Math.max(0,Math.round(f/4)));if((c>0?t.pl[u]:t.pr[u])>=ge-.05&&(c>0?t.pl[p]:t.pr[p])>=ge-.05&&f>8&&f<l-8&&i(a,f,c*(t.eHw[a]+1.75))){let d=i(a,h,c*(t.eHw[a]+1.4));d&&r(this.police,d.x,d.z,500)&&this.police.push(Object.assign(d,{e:a,s:h,side:c,yaw:Math.atan2(-c*d.lx,-c*d.lz)}))}}}}officer(t,e,n){let i=null,r=(n||xx)**2;for(let a of this.police){let o=(a.x-t)*(a.x-t)+(a.z-e)*(a.z-e);o<r&&(r=o,i=a)}return i}};var vx=.25,Ca=240,Jt=s=>Math.round(s*100)/100,Me=s=>Math.round(s*1e3)/1e3,Pa=class{constructor(){this.ring=new Array(Ca),this.n=0,this.t=0,this.events=[],this.busy=!1,this.ray=new aa,this.ray.far=12}reset(){this.n=0,this.t=0,this.events.length=0}event(t,e){this.events.push([Jt(this.time||0),t,String(e).slice(0,80)]),this.events.length>60&&this.events.shift()}tick(t,e){if(this.time=e.time,(this.t-=t)>0)return;this.t=vx;let n=e.me.veh,i=e.qp,r=n.wheels,a=0,o=0;for(let l of r)l.contact&&o++,l.comp>a&&(a=l.comp);this.ring[this.n++%Ca]=[Jt(e.time),Jt(n.px),Jt(n.py),Jt(n.pz),Me(Math.atan2(n.R[6],n.R[8])),Math.round(n.fwdSpeed*36)/10,i.edge,Jt(i.s||0),Jt(i.d||0),Jt(i.y),o,Me(a),n.gearbox?n.mgear:n.gear,Jt(n.input.steer),Jt(n.input.throttle),Jt(n.input.brake)]}samples(){let t=[],e=Math.min(this.n,Ca);for(let n=this.n-e;n<this.n;n++)t.push(this.ring[n%Ca]);return t}drawn(t,e,n,i){let r=[];for(let a of t.live)if(a.built&&Math.abs(a.cx-e)<140&&Math.abs(a.cz-n)<140)for(let o of a.built.meshes)(o.userData.kind==="road"||o.userData.kind==="core")&&r.push(o);return this.ray.set(new N(e,i+6,n),new N(0,-1,0)),this.ray.intersectObjects(r,!1).slice(0,4).map(a=>{let o=a.object.geometry.attributes.ds,l=a.face;return o&&l?[a.object.userData.kind,Me(a.point.y),Jt(o.getX(l.a)),Jt(o.getY(l.a)),Jt(o.getZ(l.a)),o.getW(l.a)]:[a.object.userData.kind,Me(a.point.y)]})}state(t,e){let n=t.me.veh,i=t.net,r={},a=t.city,o=n.wheels.map((M,_)=>{let v=M.contact?M.cx:n.px,R=M.contact?M.cz:n.pz;i.query(v,R,-1,r);let T=this.drawn(a,v,R,r.y);return{k:_,contact:M.contact,comp:Me(M.comp),x:Jt(v),z:Jt(R),roadY:Me(r.y),drawnY:T.length?T[0][1]:null,diff:T.length?Me(T[0][1]-r.y):null,hits:T,edge:r.edge,d:Jt(r.d),off:r.off,junc:r.junc}}),l=[],c=n.R[6],h=n.R[8],u=n.R[0],f=n.R[2],p=0;for(let M=-4;M<=4;M++)for(let _=-4;_<=4;_++){let v=n.px+c*M*2.5+u*_*2.5,R=n.pz+h*M*2.5+f*_*2.5;i.query(v,R,-1,r);let T=this.drawn(a,v,R,r.y),S=T.length?Me(T[0][1]-r.y):null;S!==null&&Math.abs(S)>Math.abs(p)&&(p=S),l.push([M,_,Jt(v),Jt(R),Me(r.y),S,r.edge,r.junc,r.off,T.length?T[0][0]:""])}i.query(n.px,n.pz,-1,r);let d=r.edge,x=r.junc,g=t.cam.cam.position,m=M=>M>=0?{j:M,x:Jt(i.jx[M]),z:Jt(i.jz[M]),r:Jt(i.jr[M]),y:Me(i.jy[M]),plane:i.jPlane?i.jPlane[M]:0,gx:i.jgx?Me(i.jgx[M]):0,gz:i.jgz?Me(i.jgz[M]):0,edges:i.jEdges[M].length}:null;return{game:"tangier-taxi",version:dn,at:new Date().toISOString(),time:Jt(t.time),car:{x:Jt(n.px),y:Me(n.py),z:Me(n.pz),yaw:Me(Math.atan2(n.R[6],n.R[8])),up:[Me(n.R[3]),Me(n.R[4]),Me(n.R[5])],kmh:Math.round(n.fwdSpeed*36)/10,cgY:Me(n.cgY),gearbox:n.gearbox||"auto",gear:n.gearbox?n.mgear:n.gear,rpm:Math.round(n.rpm),stalled:!!n.stalled,model:t.opts&&t.opts.car},road:d>=0?{edge:d,name:i.edgeName?i.edgeName(d):"",cls:i.eCls[d],len:Jt(i.eLen[d]),hw:Jt(i.eHw[d]),oneway:i.eOne[d],round:i.eRa[d],s:Jt(r.s),d:Jt(r.d),off:r.off,y:Me(r.y),wall:Jt(r.wall),limit:r.lim,a:m(i.eA[d]),b:m(i.eB[d])}:null,junction:m(x),wheels:o,worstDrawnMinusRoad:p,grid:l,gridCols:"ahead(x2.5m), right(x2.5m), x, z, roadY, drawnY - roadY, edge, junction, off (0 asphalt 1 kerb 2 pavement), drawn kind",camera:{mode:t.cam.mode,x:Jt(g.x),y:Jt(g.y),z:Jt(g.z)},taxi:{money:Math.round(t.taxi.money),fuel:Jt(t.taxi.fuel),ride:!!t.taxi.ride,prompt:t.taxi.prompt},quality:t.quality&&t.quality.tier,scale:t.scale,chunks:a.live.length,log:this.samples(),logCols:"t, x, y, z, yaw, km/h, edge, s, d, roadY, wheels on the ground, max compression, gear, steer, throttle, brake",events:this.events.slice(),cards:(t.taxi.log||[]).slice(-8).map(M=>({kind:M.kind,title:M.title,total:M.total})),...e}}shot(t){try{let n=Math.round(960*t.height/Math.max(1,t.width)),i=document.createElement("canvas");i.width=960,i.height=n,i.getContext("2d").drawImage(t,0,0,960,n);let r=i.toDataURL("image/jpeg",.72);return r.length>59e4&&(r=i.toDataURL("image/jpeg",.45)),r.length>59e4?"":r}catch{return""}}};var Ec=14,_x=12,yx=12,Ia=class{constructor(t,e){this.net=e,this.scene=t;let n=new Gs;n.moveTo(0,2.6),n.lineTo(1.2,.6),n.lineTo(.38,.6),n.lineTo(.38,-2.6),n.lineTo(-.38,-2.6),n.lineTo(-.38,.6),n.lineTo(-1.2,.6),n.closePath();let i=new ia(n);i.rotateX(Math.PI/2),this.mesh=new cs(i,new un({color:2949007,transparent:!0,opacity:.9,depthWrite:!1,side:Xe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ec),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,t.add(this.mesh),this.m=new te,this.qt=new tn,this.p=new N,this.sc=new N(1,1,1),this.up=new N(0,1,0),this.a={},this.q={},this.t=0,this.turn=null}update(t,e,n,i,r){if((this.t-=t)>0)return;if(this.t=.25,!e||!e.route||e.ped.state!=="in"||n.edge<0){this.mesh.count=0,this.turn=null;return}let a=this.net,o=e.route.edges,l=this.a,c=this.q,h=0,u=0,f=null,p=yx;o[0][0]===n.edge&&r&&o[0][1]!==r&&(f={dir:"uturn",dist:0,edge:n.edge});for(let d=0;d<o.length&&(h<Ec||!f)&&u<1500;d++){let x=o[d][0],g=o[d][1],m=a.eLen[x],M=g>0?0:m,_=g>0?m:0;d===0&&x===n.edge&&(M=n.s);let v=d===o.length-1;v&&x===e.e&&(_=e.s);let R=Math.abs(_-M),T=a.eOne[x]?0:-g*a.eHw[x]*.5;for(;i&&h<Ec&&p<=u+R&&p<160&&(!f||p<f.dist+30);){let S=M+g*(p-u);a.at(x,S,T,l),a.query(l.x,l.z,-1,c),this.p.set(l.x,c.y+.04,l.z),this.qt.setFromAxisAngle(this.up,Math.atan2(l.fx*g,l.fz*g)),this.m.compose(this.p,this.qt,this.sc),this.mesh.setMatrixAt(h++,this.m),p+=_x}if(u+=R,!f)if(v)f={dir:"arrive",dist:u,edge:-1};else{let S=o[d+1][0],C=o[d+1][1];a.at(x,g>0?Math.max(0,m-6):Math.min(m,6),0,l);let b=Math.atan2(l.fx*g,l.fz*g),y=a.eLen[S];a.at(S,C>0?Math.min(y,8):Math.max(0,y-8),0,l);let L=Math.atan2(l.fx*C,l.fz*C)-b;for(;L>Math.PI;)L-=2*Math.PI;for(;L<-Math.PI;)L+=2*Math.PI;Math.abs(L)>.45&&(f={dir:Math.abs(L)>2.4?"uturn":L>0?"left":"right",dist:u,edge:S})}}this.mesh.count=i?h:0,this.mesh.instanceMatrix.needsUpdate=!0,this.turn=f}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}};sn.taxi={model:"tr_taxi",cls:"T",mass:1180,power:66,torque:200,rpm:4600,gears:[3.73,2.05,1.32,.97,.76],final:4.21,cda:.68,cl:0,mu:1,steer:.62,nitro:0,drive:"f",turbo:1,cyl:4,diesel:1,shift:.4};var Mx=1745860,bx=15909912;sn.taxi_city=Object.assign({},sn.city,{cls:"T",nitro:0});sn.taxi_hatch=Object.assign({},sn.hatch,{cls:"T",nitro:0});var Sx=s=>s==="city"?sn.taxi_city:s==="hatch"?sn.taxi_hatch:sn.taxi;function wx(){Re.uSun.value.set(.45,.75,-.48).normalize(),Re.uSunCol.value.setRGB(1,.95,.86),Re.uSky.value.setRGB(.55,.72,.95),Re.uGround.value.setRGB(.42,.38,.32),Re.uFog.value.setRGB(.76,.83,.92),Re.uNight.value=0}var Iu=2,La=new Float32Array(8),Da=class{constructor(t,e,n,i){this.renderer=t,this.net=e,this.quality=n,this.opts=i,this.scene=new qr,wx();let r=n.tier==="low"?480:n.tier==="mid"?620:800;Re.uFogFar.value=r,Re.uFogNear.value=r*.3,this.far=r,this.detailFar=r*.5,this.city=new ya(this.scene,e,n),this.city.reach=r+60;let a=Sx(i.car);this.me={veh:new ps(a,Zs(a.model),i.upgrades),spec:a,player:0,wreck:0,traffic:!1,active:!0},this.me.view=new gs(this.scene,a.model,Mx,bx);let o=this.me.veh;o.gearbox=i.gearbox==="auto"?null:i.gearbox,o.mgear=1,this.q={},this.qp={},this.taxi=new wa(e,i.saved),this.taxi.lang=i.lang,this.level=Tu(i.level),this.taxi.level=this.level,this.enforce=new Ra(e),this.taxi.enf=this.enforce,this.city.addEnforce(this.enforce),this.start(i.start),this.traffic=new Ma(this.scene,e,Math.max(3,Math.round((n.tier==="low"?9:13)*this.level.traffic))),this.all=[this.me].concat(this.traffic.cars),this.walkers=new Aa(e,n.tier==="low"?8:16),this.people=new Ta(this.scene,10+this.walkers.list.length),this.cam=new xa(16/9,r+60),this.cam.shakeOn=n.tier!=="low",this.fx=new _a(this.scene,n.tier,pa(8947848));let l=new Vs(1.4,1.4,60,10,1,!0);l.translate(0,30,0);let c=new Uint8Array(l.attributes.position.count*4);for(let h=0;h<l.attributes.position.count;h++){let u=l.attributes.position.getY(h);c[h*4]=40,c[h*4+1]=255,c[h*4+2]=140,c[h*4+3]=u<1?200:0}l.setAttribute("col",new Vt(c,4,!0)),this.beacon=new Qt(l,new pe({transparent:!0,depthWrite:!1,side:Xe,blending:Ai,vertexShader:"attribute vec4 col; varying vec4 vC; void main(){ vC = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 0.9, 1.0); }"})),this.beacon.visible=!1,this.beacon.renderOrder=4,this.beacon.frustumCulled=!1,this.scene.add(this.beacon),this.race={players:[this.me],racers:this.all},this.lightT=0,this.routeT=0,this.time=0,this.city.stream(o.px,o.pz,0,!0),this.city.setLamps((h,u)=>js(e,h,u,this.traffic.t)),this.frameMs=16.7,this.scale=n.scale||1,this.lateFrames=0,this.goodFrames=0,this.size=new Rt,this.shiftMsg="",this.bug=new Pa,this.guide=new Ia(this.scene,e),this.arrows=i.arrows!==!1}start(t){let e=this.net,n=this.q,i=t?t.x:2350,r=t?t.z:-1780,a=-1,o=1e18;for(let u=0;u<e.ne;u++){if(e.eCls[u]>3||e.eLen[u]<60)continue;let f=e.eOff[u]+(e.eN[u]>>1),p=Math.hypot(e.px[f]-i,e.pz[f]-r);p<o&&(o=p,a=u)}let l=a,c=e.at(l,e.eLen[l]/2,e.eOne[l]?0:-e.eHw[l]*.5,{}),h=this.me.veh;h.setPose(c.x,c.y+h.cgY+.45,c.z,Math.atan2(c.fx,c.fz))}pedHits(t,e){let n=t.R,i=a=>{let o=a.x-t.px,l=a.z-t.pz;return o*o+l*l>16?!1:Math.abs(o*n[0]+l*n[2])<1.1&&Math.abs(o*n[6]+l*n[8])<2.5&&Math.abs(a.y-t.py)<2.5},r=Math.abs(t.fwdSpeed)*3.6;for(let a of this.walkers.list)a.live&&i(a)&&(a.live=!1,a.wait=6,e.hitPed(r),this.bug.event("walker",Math.round(r)),this.onSound&&this.onSound("hit",this.me,5));for(let a of e.peds)a.state==="wait"&&i(a)&&(a.state="gone",e.hitPed(r),this.onSound&&this.onSound("hit",this.me,5))}update(t,e){this.time+=t;let n=this.me,i=n.veh,r=e.ctl,a=this.taxi;i.input.steer=r.steer,i.input.throttle=r.throttle,i.input.brake=r.brake,i.input.handbrake=r.handbrake,i.input.clutch=r.clutch;let o=e.edge;o.camera&&(this.cam.mode=(this.cam.mode+1)%3),i.gearbox&&(o.gearUp||o.gearDown)&&i.shift(o.gearUp?1:-1)==="clutch"&&a.toast("needClutch","warn"),o.up&&(a.limiter=a.limiter?Math.min(130,a.limiter+10):Math.max(30,Math.ceil(Math.abs(i.fwdSpeed)*3.6/10)*10)),o.down&&a.limiter&&(a.limiter=a.limiter<=30?0:a.limiter-10),o.action&&a.action(i,this.qp),i.hold=!!(a.refuel||a.helpT>0),i.hold&&(i.input.throttle=0,i.input.brake=0),this.traffic.update(t,this.all,n,this.q);let l=t/Iu,c=this.all,h=this.net,u=this.q;for(let d=0;d<Iu;d++){for(let x=0;x<c.length;x++){let g=c[x];if(!g.active)continue;g.veh.step(l,h,u),g.veh.groundY=u.y,this.wall(g.veh)>0&&g===n&&this.onHit(null,he.rel)}for(let x=0;x<c.length;x++){let g=c[x];if(g.active)for(let m=x+1;m<c.length;m++){let M=c[m];!M.active||_u(g.veh,M.veh)<=0||(he.rel>3&&this.fx.spark(he.px,he.py,he.pz,g.veh.vx,g.veh.vz,Math.min(12,2+he.rel*.5|0)),g===n||M===n?this.onHit(g===n?M:g,he.rel,g===n):he.rel>4&&(g.wreck=g.wreck||0,M.stuck=(M.stuck||0)+1))}}}if(h.query(i.px,i.pz,i.hint,this.qp),a.update(t,i,this.qp,(d,x)=>js(h,d,x,this.traffic.t)),this.bug.tick(t,this),a.ride&&a.ride.ped.state==="in"&&(this.routeT-=t)<=0&&this.qp.edge>=0){this.routeT=4;let d=a.ride,x=i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1,g=h.route(this.qp.edge,this.qp.s,x,d.e,d.s);g&&(d.route=g,d.left=g.len,this.guide.t=0)}this.guide.update(t,a.ride,this.qp,this.arrows,i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1),(this.lightT-=t)<=0&&(this.lightT=.25,this.city.setLamps((d,x)=>js(h,d,x,this.traffic.t))),Re.uTime.value+=t;let f=this.fx;for(let d=0;d<4;d++){let x=i.wheels[d],g=Math.max(x.slipLat,x.slipLong);x.contact&&g>.35&&i.speed>4?(f.skids.add(d,x.cx,x.cy,x.cz,i.R[0],i.R[2],g),Math.random()<g*.4&&f.puff(x.cx,x.cy,x.cz,i.vx,i.vz,g)):f.skids.add(d,0,0,0,0,0,0)}f.update(t),this.walkers.update(t,i.px,i.pz,Math.atan2(i.R[6],i.R[8])),Math.abs(i.fwdSpeed)>1.5&&this.pedHits(i,a),this.people.update(t,a.peds,this.walkers.list,this.cam.cam.position),this.cam.update(t,n);let p=a.ride;this.beacon.visible=!!(p&&p.ped.state==="in"),this.beacon.visible&&this.beacon.position.set(p.x,p.y,p.z)}onHit(t,e,n){let i=this.me.veh;this.bug.event(t?"car":"wall",Math.round(e*36)/10+" km/h"),this.cam.kick(Math.min(.8,e*.04)),this.onSound&&this.onSound("hit",this.me,e);let r=!0;if(t){let a=he.nx*(n?1:-1),o=he.nz*(n?1:-1),l=i.vx*a+i.vz*o,c=-(t.veh.vx*a+t.veh.vz*o);r=l>c+.6||t.veh.speed<.8}this.taxi.hit(e,t,r)}wall(t){let e=t.R,n=this.q,i=e[0],r=e[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=e[6],l=e[8],c=Math.hypot(o,l)||1;o/=c,l/=c;let h=0;for(let I=-1;I<=1;I+=2)for(let U=-1;U<=1;U+=2)La[h++]=t.px-e[6]*t.cgZ+i*t.half.x*I+o*t.half.z*U,La[h++]=t.pz-e[8]*t.cgZ+r*t.half.x*I+l*t.half.z*U;let u=0,f=0,p=0,d=0,x=0;for(let I=0;I<4;I++){let U=La[I*2],X=La[I*2+1];if(this.net.query(U,X,t.hint,n),n.junc>=0||n.edge<0)continue;let k=Math.abs(n.d)-n.wall;if(k>u){u=k,f=U,p=X;let Z=n.d>=0?-1:1;d=n.lx*Z,x=n.lz*Z}}if(u<=0)return 0;t.px+=d*u,t.pz+=x*u;let g=t.py+.15,m=f-t.px,M=g-t.py,_=p-t.pz,v=t.vx+(t.wy*_-t.wz*M),R=t.vy+(t.wz*m-t.wx*_),T=t.vz+(t.wx*M-t.wy*m),S=v*d+T*x;if(S>=0)return 0;let C=t.invMassAt(m,M,_,d,0,x),b=-(1+.15)*S/C;t.impulse(d*b,0,x*b,m,M,_);let y=v-d*S,A=T-x*S,L=Math.hypot(y,A);if(L>.05){let I=Math.min(b*.3,L/C);t.impulse(-y/L*I,0,-A/L*I,m,M,_)}return he.j=b,he.rel=-S,he.nx=d,he.nz=x,he.px=f,he.py=g,he.pz=p,b}render(t){let e=this.renderer,n=this.cam.cam;this.budget(t),e.getSize(this.size),n.aspect=this.size.x/this.size.y,n.updateProjectionMatrix();let i=this.me.veh;this.city.stream(i.px,i.pz,this.quality.tier==="low"?3:5,!1),this.city.cull(n.position.x,n.position.z,this.far,this.detailFar),this.city.sky.position.copy(n.position);for(let r of this.all){if(!r.active){r.view.root.visible=!1,r.view.shadow.visible=!1;continue}let a=r.veh.px-n.position.x,o=r.veh.pz-n.position.z;r.view.sync(r.veh,Math.sqrt(a*a+o*o),0,r.veh.input.brake>.2?1:0)}this.fx.streaks.update(1/60,n,0,!1),e.render(this.scene,n)}budget(t){if(!t)return;t>18.5?this.lateFrames++:this.lateFrames=Math.max(0,this.lateFrames-1),t<15.5?this.goodFrames++:this.goodFrames=0;let e=this.quality.minScale||.5,n=this.quality.scale||1;this.lateFrames>10&&this.scale>e?(this.scale=Math.max(e,this.scale-.1),this.lateFrames=0,this.onScale&&this.onScale(this.scale)):this.goodFrames>240&&this.scale<n&&(this.scale=Math.min(n,this.scale+.05),this.goodFrames=0,this.onScale&&this.onScale(this.scale))}dispose(){this.city.dispose(),this.traffic.dispose(),this.guide.dispose(),this.me.view.dispose(),this.people.dispose(),this.scene.remove(this.beacon),this.beacon.geometry.dispose(),this.beacon.material.dispose();let t=this.fx;for(let e of[t.sparks.points,t.smoke.points,t.skids.mesh,t.streaks.lines])e.geometry.dispose(),e.material.dispose()}};var ve={A:0,B:1,X:2,Y:3,L:4,R:5,ZL:6,ZR:7,MINUS:8,PLUS:9,UP:12,DOWN:13,LEFT:14,RIGHT:15,CAPTURE:17},Ua=class{constructor(){this.pads={},this.acts={},this.ctl={steer:0,throttle:0,brake:0,handbrake:0,clutch:0},this.edge={action:0,up:0,down:0,camera:0,map:0},this.prev={},this.hit=new Uint8Array(24),this.actHit={},this.menuCb=null,this.dead=.14,this.steerNow=0}pad(t){return this.pads[t]||(this.pads[t]={b:new Float32Array(24),a:new Float32Array(4)})}onAction(t,e,n,i){if(n){this.menuCb&&this.menuCb(t,i,!0);return}i&&i.indexOf("pad")===0||((this.acts[i]||(this.acts[i]={}))[t]=e,e&&(this.actHit[t]=1)),e&&this.menuCb&&this.menuCb(t,i,!1)}onButton(t,e,n,i){this.pad(i).b[t]=e?Math.max(.01,n||1):0,e&&t<24&&(this.hit[t]=1),e&&(this.lastBtn=t,this.btnSeen=(this.btnSeen||0)+1)}onAxes(t,e){let n=this.pad(e);for(let i=0;i<4&&i<t.length;i++)n.a[i]=t[i]}btn(t){let e=0;for(let n in this.pads){let i=this.pads[n].b[t];i>e&&(e=i)}return e}axis(t){let e=0;for(let n in this.pads){let i=this.pads[n].a[t];Math.abs(i)>Math.abs(e)&&(e=i)}return e}act(t){for(let e in this.acts)if(this.acts[e][t])return 1;return 0}rise(t,e){let n=e&&!this.prev[t]?1:0;return this.prev[t]=e,n}poll(t){let e=this.ctl,n=this.axis(0);n=Math.abs(n)>this.dead?(n-Math.sign(n)*this.dead)/(1-this.dead):0;let i=(this.btn(ve.LEFT)>0||this.act("left")?1:0)-(this.btn(ve.RIGHT)>0||this.act("right")?1:0);i?(this.steerNow+=(i-this.steerNow)*Math.min(1,t*5),e.steer=this.steerNow):(this.steerNow=0,e.steer=-Math.sign(n)*Math.pow(Math.abs(n),1.5)),e.throttle=Math.max(this.btn(ve.ZR),this.act("up")),e.brake=Math.max(this.btn(ve.ZL),this.act("down")),e.handbrake=this.btn(ve.B)>.3?1:0;let r=this.btn(ve.X);e.clutch=r>.02&&r<.98?r:r>=.98?1:Math.max(0,e.clutch-t/.9);let a=this.edge,o=this.hit,l=(u,f,p)=>{let d=f?!this.prev[u]||p?1:0:p?1:0;return this.prev[u]=f,d};a.action=l("action",this.btn(ve.A)>.3||!!this.act("jump"),o[ve.A]===1||this.actHit.jump===1),a.camera=l("camera",this.btn(ve.Y)>.3,o[ve.Y]===1),a.up=l("up",this.btn(ve.UP)>.3,o[ve.UP]===1),a.down=l("down",this.btn(ve.DOWN)>.3,o[ve.DOWN]===1),a.gearUp=l("gu",this.btn(ve.R)>.3,o[ve.R]===1),a.gearDown=l("gd",this.btn(ve.L)>.3,o[ve.L]===1),a.map=l("map",this.btn(ve.MINUS)>.3,o[ve.MINUS]===1);let c=!1,h=!1;for(let u=ve.CAPTURE;u<24;u++)this.btn(u)>.3&&(c=!0),o[u]===1&&(h=!0);a.capture=l("cap",c,h),o.fill(0),this.actHit={}}clearHeld(){this.hit.fill(0),this.actHit={};for(let t in this.acts)this.acts[t]={};for(let t in this.pads)this.pads[t].b.fill(0),this.pads[t].a.fill(0);this.prev={}}hasPad(){for(let t in this.pads)return!0;return!1}};var Na={en:{tag:"Drive the real streets of Tangier",press:"Press OK to start",start:"Start the shift",settings:"Settings",help:"Controls",resume:"Resume",quit:"End the shift",back:"Back",gearbox:"Gearbox",auto:"Automatic",manual:"Manual",clutch:"Manual + clutch",limiter:"Speed limiter",off:"Off",money:"Cash",rides:"Rides",fuel:"Fuel",paused:"Paused",pickup:"Pick up the passenger",dropoff:"Drop off the passenger",refuel:"Refuel",stop:"Stop refuelling",help_:"Call roadside help",helpWait:"Help is on its way\u2026",to:"To",eta:"Time left",late:"Late",meter:"Meter",fine_speed:"Fine: speeding",fine_red:"Fine: red light",fine_wrong:"Fine: wrong way (one-way street)",fine_pave:"Fine: driving on the pavement",rideDone:"Ride paid",crashYou:"Accident: your fault",crashThem:"Accident: the other driver's fault",crashWall:"Accident: you hit the kerb wall",impact:"Impact at {0} km/h",repairOwn:"Repairs to your taxi",repairOther:"Damage to the other car",repairInsured:"Repairs paid by the other driver's insurance",fineFault:"Fine: loss of control",passengerLeft:"The passenger got out without paying",helpDone:"Roadside help",helpService:"Call-out",helpFuel:"6 L of diesel",refuelDone:"Refuelled",litres:"{0} L of diesel",tip:"Tip",bumps:"Bumps on the way ({0})",lateBy:"Late by {0} s",meterKm:"Meter, {0} km",outOfFuel:"Out of fuel! Press A to call roadside help.",lowFuel:"Fuel is low: find a fuel station (green on the map).",helpComing:"Help is coming",boarded:"Passenger on board: follow the green route",noDest:"The passenger changed their mind",needClutch:"Press the clutch (X) to change gear",stalled:"Stalled: press the clutch fully to restart",limit:"Limit",total:"Total",wrongWay:"WRONG WAY",slowDown:"SLOW DOWN",ctlTitle:"Controls",ctlDrive:"ZR accelerate \xB7 ZL brake / reverse \xB7 stick or D-pad steer \xB7 B handbrake",ctlAct:"A pick up / drop off / refuel \xB7 Y camera \xB7 \u25B2 \u25BC speed limiter \xB7 + pause \xB7 Capture (\u25FB) report a bug",ctlGear:"Manual gearbox: R gear up \xB7 L gear down \xB7 X clutch (hold)",ctlRemote:"TV remote: \u25C0 \u25B6 steer \xB7 \u25B2 accelerate \xB7 \u25BC brake \xB7 OK action \xB7 Back pause",rules:"Rules of the road",rulesText:"Respect the speed limit on the sign, stop at red lights, never drive up a one-way street the wrong way and stay off the pavement: the police fine you. Every accident is assessed: when it is your fault you pay the repairs, the other car and a fine.",stats:"Shift so far",earned:"Earned",fines:"Fines",repairs:"Repairs",fuelSpent:"Fuel",km:"km driven",best:"Best fare",fare:"Fare",camSpeed:"Speed camera: {0}",policeSpeed:"Police check: {0}",seenPolice:"Seen by the police",fine_ped:"Accident: you hit a pedestrian",pedHurt:"Injuries (compensation)",passengerHurt:"Your passenger was hurt (compensation)",pickupTo:"Pick up \xB7 to {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Fare, {0} km",car:"Car",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Start over",resetAsk:"Start over with 300 DH, a quarter tank and a clean record?",yes:"Yes, start over",no:"No",resetDone:"A fresh start: 300 DH",level:"Difficulty",lv_easy:"Easy",lv_normal:"Normal",lv_hard:"Hard",lv_easy_d:"Easy: short trips, more time, fewer cars. Police and cameras only catch big mistakes.",lv_normal_d:"Normal: trips get longer as you work. Police see you from 70 m, cameras from 10 km/h over.",lv_hard_d:"Hard: long trips, tight times, busy streets. Police see you from 90 m, cameras from 5 km/h over.",arrows:"Route arrows",on:"On",btnTest:"Button test: press any controller button",btnNone:"none yet",btnSeen:"button {0}",turnL:"Turn left",turnR:"Turn right",turnU:"Make a U-turn",arrive:"Destination",inM:"{0} m",rpmU:"x1000 rpm",hudSize:"HUD size",hs_small:"Small",hs_normal:"Normal",hs_large:"Large",hs_xl:"Extra large",bugReport:"Report a bug (screenshot + log)",bugSending:"Sending the bug report\u2026",bugSent:"Bug report saved: {0}",bugFail:"Bug report not sent ({0})",bugOld:"Update My PC to send bug reports",camAhead:"Speed camera",police:"Police",credits:"Streets and buildings \xA9 OpenStreetMap contributors (ODbL). Heights: AWS Terrain Tiles. Models and sounds: Kenney (CC0)."},fr:{tag:"Conduisez dans les vraies rues de Tanger",press:"Appuyez sur OK pour commencer",start:"Commencer le service",settings:"R\xE9glages",help:"Commandes",resume:"Reprendre",quit:"Finir le service",back:"Retour",gearbox:"Bo\xEEte de vitesses",auto:"Automatique",manual:"Manuelle",clutch:"Manuelle + embrayage",limiter:"Limiteur de vitesse",off:"Arr\xEAt",money:"Caisse",rides:"Courses",fuel:"Carburant",paused:"Pause",pickup:"Prendre le client",dropoff:"D\xE9poser le client",refuel:"Faire le plein",stop:"Arr\xEAter le plein",help_:"Appeler le d\xE9pannage",helpWait:"Le d\xE9pannage arrive\u2026",to:"Vers",eta:"Temps restant",late:"En retard",meter:"Compteur",fine_speed:"Amende : exc\xE8s de vitesse",fine_red:"Amende : feu rouge grill\xE9",fine_wrong:"Amende : sens interdit",fine_pave:"Amende : circulation sur le trottoir",rideDone:"Course pay\xE9e",crashYou:"Accident : votre faute",crashThem:"Accident : faute de l'autre conducteur",crashWall:"Accident : choc contre le mur du trottoir",impact:"Choc \xE0 {0} km/h",repairOwn:"R\xE9paration de votre taxi",repairOther:"D\xE9g\xE2ts de l'autre voiture",repairInsured:"R\xE9paration pay\xE9e par l'assurance de l'autre conducteur",fineFault:"Amende : d\xE9faut de ma\xEEtrise",passengerLeft:"Le client est descendu sans payer",helpDone:"D\xE9pannage",helpService:"D\xE9placement",helpFuel:"6 L de gasoil",refuelDone:"Plein fait",litres:"{0} L de gasoil",tip:"Pourboire",bumps:"Chocs pendant la course ({0})",lateBy:"Retard de {0} s",meterKm:"Compteur, {0} km",outOfFuel:"Panne s\xE8che ! Appuyez sur A pour appeler le d\xE9pannage.",lowFuel:"R\xE9serve : trouvez une station (vert sur la carte).",helpComing:"Le d\xE9pannage arrive",boarded:"Client \xE0 bord : suivez l'itin\xE9raire vert",noDest:"Le client a chang\xE9 d'avis",needClutch:"Appuyez sur l'embrayage (X) pour changer de vitesse",stalled:"Cal\xE9 : appuyez \xE0 fond sur l'embrayage pour red\xE9marrer",limit:"Limite",total:"Total",wrongWay:"SENS INTERDIT",slowDown:"RALENTISSEZ",ctlTitle:"Commandes",ctlDrive:"ZR acc\xE9l\xE9rer \xB7 ZL freiner / reculer \xB7 stick ou croix diriger \xB7 B frein \xE0 main",ctlAct:"A prendre / d\xE9poser / plein \xB7 Y cam\xE9ra \xB7 \u25B2 \u25BC limiteur \xB7 + pause \xB7 Capture (\u25FB) signaler un bug",ctlGear:"Bo\xEEte manuelle : R monter \xB7 L descendre \xB7 X embrayage (maintenir)",ctlRemote:"T\xE9l\xE9commande : \u25C0 \u25B6 diriger \xB7 \u25B2 acc\xE9l\xE9rer \xB7 \u25BC freiner \xB7 OK action \xB7 Retour pause",rules:"Code de la route",rulesText:"Respectez la limite du panneau, arr\xEAtez-vous au feu rouge, ne prenez jamais un sens interdit et ne roulez pas sur le trottoir : la police verbalise. Chaque accident est expertis\xE9 : si c'est votre faute, vous payez les r\xE9parations, l'autre voiture et une amende.",stats:"Service en cours",earned:"Gagn\xE9",fines:"Amendes",repairs:"R\xE9parations",fuelSpent:"Carburant",km:"km parcourus",best:"Meilleure course",fare:"Course",camSpeed:"Radar : {0}",policeSpeed:"Contr\xF4le de police : {0}",seenPolice:"Vu par la police",fine_ped:"Accident : vous avez renvers\xE9 un pi\xE9ton",pedHurt:"Blessures (indemnisation)",passengerHurt:"Votre client a \xE9t\xE9 bless\xE9 (indemnisation)",pickupTo:"Prendre \xB7 vers {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Course, {0} km",car:"Voiture",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Recommencer",resetAsk:"Recommencer avec 300 DH, un quart de r\xE9servoir et un dossier vierge ?",yes:"Oui, recommencer",no:"Non",resetDone:"Nouveau d\xE9part : 300 DH",level:"Difficult\xE9",lv_easy:"Facile",lv_normal:"Normal",lv_hard:"Difficile",lv_easy_d:"Facile : courses courtes, plus de temps, moins de voitures. Police et radars ne voient que les grosses fautes.",lv_normal_d:"Normal : les courses s'allongent au fil du travail. La police vous voit \xE0 70 m, les radars d\xE8s 10 km/h de trop.",lv_hard_d:"Difficile : longues courses, temps serr\xE9, rues charg\xE9es. La police vous voit \xE0 90 m, les radars d\xE8s 5 km/h de trop.",arrows:"Fl\xE8ches de l'itin\xE9raire",on:"Marche",btnTest:"Test des boutons : appuyez sur un bouton de la manette",btnNone:"aucun pour l'instant",btnSeen:"bouton {0}",turnL:"Tournez \xE0 gauche",turnR:"Tournez \xE0 droite",turnU:"Faites demi-tour",arrive:"Destination",inM:"{0} m",rpmU:"x1000 tr/min",hudSize:"Taille de l'affichage",hs_small:"Petite",hs_normal:"Normale",hs_large:"Grande",hs_xl:"Tr\xE8s grande",bugReport:"Signaler un bug (capture + journal)",bugSending:"Envoi du rapport de bug\u2026",bugSent:"Rapport de bug enregistr\xE9 : {0}",bugFail:"Rapport de bug non envoy\xE9 ({0})",bugOld:"Mettez My PC \xE0 jour pour envoyer des rapports de bug",camAhead:"Radar",police:"Police",credits:"Rues et b\xE2timents \xA9 contributeurs OpenStreetMap (ODbL). Relief : AWS Terrain Tiles. Mod\xE8les et sons : Kenney (CC0)."},es:{tag:"Conduce por las calles reales de T\xE1nger",press:"Pulsa OK para empezar",start:"Empezar el turno",settings:"Ajustes",help:"Controles",resume:"Seguir",quit:"Terminar el turno",back:"Volver",gearbox:"Caja de cambios",auto:"Autom\xE1tica",manual:"Manual",clutch:"Manual + embrague",limiter:"Limitador de velocidad",off:"No",money:"Caja",rides:"Carreras",fuel:"Combustible",paused:"Pausa",pickup:"Recoger al pasajero",dropoff:"Dejar al pasajero",refuel:"Repostar",stop:"Dejar de repostar",help_:"Llamar a la gr\xFAa",helpWait:"La ayuda est\xE1 en camino\u2026",to:"Hacia",eta:"Tiempo",late:"Tarde",meter:"Tax\xEDmetro",fine_speed:"Multa: exceso de velocidad",fine_red:"Multa: sem\xE1foro en rojo",fine_wrong:"Multa: sentido contrario",fine_pave:"Multa: circular por la acera",rideDone:"Carrera pagada",crashYou:"Accidente: culpa tuya",crashThem:"Accidente: culpa del otro conductor",crashWall:"Accidente: golpe contra el muro",impact:"Choque a {0} km/h",repairOwn:"Reparaci\xF3n de tu taxi",repairOther:"Da\xF1os del otro coche",repairInsured:"Reparaci\xF3n pagada por el seguro del otro conductor",fineFault:"Multa: p\xE9rdida de control",passengerLeft:"El pasajero se baj\xF3 sin pagar",helpDone:"Asistencia en carretera",helpService:"Desplazamiento",helpFuel:"6 L de gas\xF3leo",refuelDone:"Dep\xF3sito lleno",litres:"{0} L de gas\xF3leo",tip:"Propina",bumps:"Golpes en el viaje ({0})",lateBy:"{0} s de retraso",meterKm:"Tax\xEDmetro, {0} km",outOfFuel:"\xA1Sin combustible! Pulsa A para llamar a la asistencia.",lowFuel:"Reserva: busca una gasolinera (verde en el mapa).",helpComing:"La ayuda viene",boarded:"Pasajero a bordo: sigue la ruta verde",noDest:"El pasajero cambi\xF3 de idea",needClutch:"Pisa el embrague (X) para cambiar de marcha",stalled:"Calado: pisa el embrague a fondo para arrancar",limit:"L\xEDmite",total:"Total",wrongWay:"SENTIDO CONTRARIO",slowDown:"FRENA",ctlTitle:"Controles",ctlDrive:"ZR acelerar \xB7 ZL frenar / marcha atr\xE1s \xB7 stick o cruceta girar \xB7 B freno de mano",ctlAct:"A recoger / dejar / repostar \xB7 Y c\xE1mara \xB7 \u25B2 \u25BC limitador \xB7 + pausa \xB7 Captura (\u25FB) informar de un fallo",ctlGear:"Cambio manual: R subir \xB7 L bajar \xB7 X embrague (mantener)",ctlRemote:"Mando de la tele: \u25C0 \u25B6 girar \xB7 \u25B2 acelerar \xB7 \u25BC frenar \xB7 OK acci\xF3n \xB7 Atr\xE1s pausa",rules:"Normas de tr\xE1fico",rulesText:"Respeta el l\xEDmite de la se\xF1al, para en rojo, nunca entres en direcci\xF3n prohibida y no circules por la acera: la polic\xEDa multa. Cada accidente se peritan: si es culpa tuya pagas las reparaciones, el otro coche y una multa.",stats:"Turno actual",earned:"Ganado",fines:"Multas",repairs:"Reparaciones",fuelSpent:"Combustible",km:"km recorridos",best:"Mejor carrera",fare:"Tarifa",camSpeed:"Radar: {0}",policeSpeed:"Control policial: {0}",seenPolice:"Visto por la polic\xEDa",fine_ped:"Accidente: atropellaste a un peat\xF3n",pedHurt:"Heridas (indemnizaci\xF3n)",passengerHurt:"Tu pasajero result\xF3 herido (indemnizaci\xF3n)",pickupTo:"Recoger \xB7 a {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Carrera, {0} km",car:"Coche",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Empezar de nuevo",resetAsk:"\xBFEmpezar de nuevo con 300 DH, un cuarto de dep\xF3sito y el historial limpio?",yes:"S\xED, empezar de nuevo",no:"No",resetDone:"Nuevo comienzo: 300 DH",level:"Dificultad",lv_easy:"F\xE1cil",lv_normal:"Normal",lv_hard:"Dif\xEDcil",lv_easy_d:"F\xE1cil: viajes cortos, m\xE1s tiempo, menos coches. Polic\xEDa y radares solo ven los errores grandes.",lv_normal_d:"Normal: los viajes se alargan a medida que trabajas. La polic\xEDa te ve a 70 m, los radares desde 10 km/h de m\xE1s.",lv_hard_d:"Dif\xEDcil: viajes largos, tiempo justo, calles llenas. La polic\xEDa te ve a 90 m, los radares desde 5 km/h de m\xE1s.",arrows:"Flechas de la ruta",on:"S\xED",btnTest:"Prueba de botones: pulsa cualquier bot\xF3n del mando",btnNone:"ninguno a\xFAn",btnSeen:"bot\xF3n {0}",turnL:"Gira a la izquierda",turnR:"Gira a la derecha",turnU:"Da la vuelta",arrive:"Destino",inM:"{0} m",rpmU:"x1000 rpm",hudSize:"Tama\xF1o del indicador",hs_small:"Peque\xF1o",hs_normal:"Normal",hs_large:"Grande",hs_xl:"Muy grande",bugReport:"Informar de un fallo (captura + registro)",bugSending:"Enviando el informe\u2026",bugSent:"Informe de fallo guardado: {0}",bugFail:"Informe no enviado ({0})",bugOld:"Actualiza My PC para enviar informes de fallos",camAhead:"Radar",police:"Polic\xEDa",credits:"Calles y edificios \xA9 colaboradores de OpenStreetMap (ODbL). Relieve: AWS Terrain Tiles. Modelos y sonidos: Kenney (CC0)."},ar:{tag:"\u0642\u064F\u062F \u0641\u064A \u0634\u0648\u0627\u0631\u0639 \u0637\u0646\u062C\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",press:"\u0627\u0636\u063A\u0637 OK \u0644\u0644\u0628\u062F\u0621",start:"\u0627\u0628\u062F\u0623 \u0627\u0644\u0639\u0645\u0644",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",help:"\u0627\u0644\u062A\u062D\u0643\u0645",resume:"\u0645\u062A\u0627\u0628\u0639\u0629",quit:"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0645\u0644",back:"\u0631\u062C\u0648\u0639",gearbox:"\u0639\u0644\u0628\u0629 \u0627\u0644\u0633\u0631\u0639\u0627\u062A",auto:"\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643",manual:"\u064A\u062F\u0648\u064A",clutch:"\u064A\u062F\u0648\u064A + \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636",limiter:"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629",off:"\u0645\u062A\u0648\u0642\u0641",money:"\u0627\u0644\u0635\u0646\u062F\u0648\u0642",rides:"\u0627\u0644\u0631\u062D\u0644\u0627\u062A",fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",pickup:"\u0623\u0631\u0643\u0628 \u0627\u0644\u0632\u0628\u0648\u0646",dropoff:"\u0623\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646",refuel:"\u0627\u0645\u0644\u0623 \u0627\u0644\u062E\u0632\u0627\u0646",stop:"\u0623\u0648\u0642\u0641 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",help_:"\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",helpWait:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642\u2026",to:"\u0625\u0644\u0649",eta:"\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062A\u0628\u0642\u064A",late:"\u0645\u062A\u0623\u062E\u0631",meter:"\u0627\u0644\u0639\u062F\u0627\u062F",fine_speed:"\u0645\u062E\u0627\u0644\u0641\u0629: \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0633\u0631\u0639\u0629",fine_red:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631",fine_wrong:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0645\u0646\u0648\u0639",fine_pave:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0633\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641",rideDone:"\u062F\u064F\u0641\u0639\u062A \u0627\u0644\u0631\u062D\u0644\u0629",crashYou:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0624\u0643",crashThem:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0623 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",crashWall:"\u062D\u0627\u062F\u062B: \u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u062D\u0627\u0641\u0629 \u0627\u0644\u0631\u0635\u064A\u0641",impact:"\u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u0633\u0631\u0639\u0629 {0} \u0643\u0645/\u0633",repairOwn:"\u0625\u0635\u0644\u0627\u062D \u0633\u064A\u0627\u0631\u062A\u0643",repairOther:"\u0623\u0636\u0631\u0627\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649",repairInsured:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0639\u0644\u0649 \u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",fineFault:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0639\u062F\u0645 \u0627\u0644\u062A\u062D\u0643\u0645",passengerLeft:"\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646 \u062F\u0648\u0646 \u0623\u0646 \u064A\u062F\u0641\u0639",helpDone:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642",helpService:"\u0627\u0644\u062A\u0646\u0642\u0644",helpFuel:"6 \u0644\u062A\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",refuelDone:"\u062A\u0645\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",litres:"{0} \u0644\u062A\u0631 \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",tip:"\u0628\u0642\u0634\u064A\u0634",bumps:"\u0635\u062F\u0645\u0627\u062A \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629 ({0})",lateBy:"\u062A\u0623\u062E\u0631 {0} \u062B",meterKm:"\u0627\u0644\u0639\u062F\u0627\u062F\u060C {0} \u0643\u0645",outOfFuel:"\u0646\u0641\u062F \u0627\u0644\u0648\u0642\u0648\u062F! \u0627\u0636\u063A\u0637 A \u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",lowFuel:"\u0627\u0644\u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636: \u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062D\u0637\u0629 (\u0628\u0627\u0644\u0623\u062E\u0636\u0631 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629).",helpComing:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0642\u0627\u062F\u0645\u0629",boarded:"\u0627\u0644\u0632\u0628\u0648\u0646 \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0629: \u0627\u062A\u0628\u0639 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0623\u062E\u0636\u0631",noDest:"\u063A\u064A\u0651\u0631 \u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0623\u064A\u0647",needClutch:"\u0627\u0636\u063A\u0637 \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636 (X) \u0644\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0633\u0631\u0639\u0629",stalled:"\u062A\u0648\u0642\u0641 \u0627\u0644\u0645\u062D\u0631\u0643: \u0627\u0636\u063A\u0637 \u0627\u0644\u0642\u0627\u0628\u0636 \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",limit:"\u0627\u0644\u062D\u062F",total:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639",wrongWay:"\u0627\u062A\u062C\u0627\u0647 \u0645\u0645\u0646\u0648\u0639",slowDown:"\u062E\u0641\u0641 \u0627\u0644\u0633\u0631\u0639\u0629",ctlTitle:"\u0627\u0644\u062A\u062D\u0643\u0645",ctlDrive:"ZR \u062A\u0633\u0627\u0631\u0639 \xB7 ZL \u0641\u0631\u0627\u0645\u0644 / \u0631\u062C\u0648\u0639 \xB7 \u0627\u0644\u0639\u0635\u0627 \u0623\u0648 \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0648\u062C\u064A\u0647 \xB7 B \u0641\u0631\u0627\u0645\u0644 \u0627\u0644\u064A\u062F",ctlAct:"A \u0625\u0631\u0643\u0627\u0628 / \u0625\u0646\u0632\u0627\u0644 / \u062A\u0639\u0628\u0626\u0629 \xB7 Y \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \xB7 \u25B2 \u25BC \u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 + \u0625\u064A\u0642\u0627\u0641 \xB7 \u0632\u0631 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 (\u25FB) \u0644\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u062E\u0644\u0644",ctlGear:"\u0639\u0644\u0628\u0629 \u064A\u062F\u0648\u064A\u0629: R \u0631\u0641\u0639 \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 L \u062E\u0641\u0636\u0647\u0627 \xB7 X \u0627\u0644\u0642\u0627\u0628\u0636 (\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B)",ctlRemote:"\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u062D\u0643\u0645: \u25C0 \u25B6 \u062A\u0648\u062C\u064A\u0647 \xB7 \u25B2 \u062A\u0633\u0627\u0631\u0639 \xB7 \u25BC \u0641\u0631\u0627\u0645\u0644 \xB7 OK \u0625\u062C\u0631\u0627\u0621 \xB7 \u0631\u062C\u0648\u0639 \u0625\u064A\u0642\u0627\u0641",rules:"\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0633\u064A\u0631",rulesText:"\u0627\u062D\u062A\u0631\u0645 \u062D\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0644\u0648\u062D\u0629\u060C \u0648\u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631\u060C \u0648\u0644\u0627 \u062A\u062F\u062E\u0644 \u0634\u0627\u0631\u0639\u0627\u064B \u0645\u0645\u0646\u0648\u0639\u0627\u064B\u060C \u0648\u0644\u0627 \u062A\u0633\u0650\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641: \u0627\u0644\u0634\u0631\u0637\u0629 \u062A\u062D\u0631\u0631 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A. \u0643\u0644 \u062D\u0627\u062F\u062B \u064A\u064F\u0642\u064A\u064E\u0651\u0645: \u0625\u0630\u0627 \u0643\u0627\u0646 \u062E\u0637\u0623\u0643 \u062A\u062F\u0641\u0639 \u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 \u0648\u0645\u062E\u0627\u0644\u0641\u0629.",stats:"\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u0639\u0645\u0644",earned:"\u0627\u0644\u0645\u062F\u0627\u062E\u064A\u0644",fines:"\u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A",repairs:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D\u0627\u062A",fuelSpent:"\u0627\u0644\u0648\u0642\u0648\u062F",km:"\u0643\u0645 \u0645\u0642\u0637\u0648\u0639\u0629",best:"\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0629",fare:"\u0627\u0644\u0623\u062C\u0631\u0629",camSpeed:"\u0631\u0627\u062F\u0627\u0631: {0}",policeSpeed:"\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0634\u0631\u0637\u0629: {0}",seenPolice:"\u0631\u0635\u062F\u062A\u0643 \u0627\u0644\u0634\u0631\u0637\u0629",fine_ped:"\u062D\u0627\u062F\u062B\u0629: \u0635\u062F\u0645\u062A \u0631\u0627\u062C\u0644\u0627\u064B",pedHurt:"\u0625\u0635\u0627\u0628\u0627\u062A (\u062A\u0639\u0648\u064A\u0636)",passengerHurt:"\u0623\u0635\u064A\u0628 \u0632\u0628\u0648\u0646\u0643 (\u062A\u0639\u0648\u064A\u0636)",pickupTo:"\u0623\u0631\u0643\u0628 \xB7 \u0625\u0644\u0649 {0} \xB7 {1} \u0643\u0644\u0645 \xB7 {2} \u062F\u0631\u0647\u0645",fareKm:"\u0627\u0644\u0623\u062C\u0631\u0629\u060C {0} \u0643\u0644\u0645",car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",car_taxi:"\u0637\u0627\u0643\u0633\u064A \u0635\u063A\u064A\u0631",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"\u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",resetAsk:"\u0627\u0644\u0628\u062F\u0621 \u0645\u0646 \u062C\u062F\u064A\u062F \u0628\u0640 300 \u062F\u0631\u0647\u0645 \u0648\u0631\u0628\u0639 \u062E\u0632\u0627\u0646 \u0648\u0633\u062C\u0644 \u0646\u0638\u064A\u0641\u061F",yes:"\u0646\u0639\u0645\u060C \u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",no:"\u0644\u0627",resetDone:"\u0628\u062F\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629: 300 \u062F\u0631\u0647\u0645",level:"\u0627\u0644\u0635\u0639\u0648\u0628\u0629",lv_easy:"\u0633\u0647\u0644",lv_normal:"\u0639\u0627\u062F\u064A",lv_hard:"\u0635\u0639\u0628",lv_easy_d:"\u0633\u0647\u0644: \u0631\u062D\u0644\u0627\u062A \u0642\u0635\u064A\u0631\u0629\u060C \u0648\u0642\u062A \u0623\u0637\u0648\u0644\u060C \u0633\u064A\u0627\u0631\u0627\u062A \u0623\u0642\u0644. \u0627\u0644\u0634\u0631\u0637\u0629 \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0644\u0627 \u062A\u0631\u0635\u062F \u0625\u0644\u0627 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0643\u0628\u064A\u0631\u0629.",lv_normal_d:"\u0639\u0627\u062F\u064A: \u062A\u0637\u0648\u0644 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0643\u0644\u0645\u0627 \u0639\u0645\u0644\u062A \u0623\u0643\u062B\u0631. \u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0631\u0637\u0629 \u0645\u0646 70 \u0645\u060C \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0645\u0646 10 \u0643\u0644\u0645/\u0633 \u0632\u064A\u0627\u062F\u0629.",lv_hard_d:"\u0635\u0639\u0628: \u0631\u062D\u0644\u0627\u062A \u0637\u0648\u064A\u0644\u0629\u060C \u0648\u0642\u062A \u0636\u064A\u0642\u060C \u0634\u0648\u0627\u0631\u0639 \u0645\u0632\u062F\u062D\u0645\u0629. \u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0631\u0637\u0629 \u0645\u0646 90 \u0645\u060C \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0645\u0646 5 \u0643\u0644\u0645/\u0633 \u0632\u064A\u0627\u062F\u0629.",arrows:"\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u0633\u0627\u0631",on:"\u0645\u0641\u0639\u0651\u0644",btnTest:"\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0632\u0631\u0627\u0631: \u0627\u0636\u063A\u0637 \u0623\u064A \u0632\u0631 \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",btnNone:"\u0644\u0627 \u0634\u064A\u0621 \u0628\u0639\u062F",btnSeen:"\u0627\u0644\u0632\u0631 {0}",turnL:"\u0627\u0646\u0639\u0637\u0641 \u064A\u0633\u0627\u0631\u0627\u064B",turnR:"\u0627\u0646\u0639\u0637\u0641 \u064A\u0645\u064A\u0646\u0627\u064B",turnU:"\u0627\u0633\u062A\u062F\u0631 \u0644\u0644\u062E\u0644\u0641",arrive:"\u0627\u0644\u0648\u062C\u0647\u0629",inM:"{0} \u0645",rpmU:"x1000 \u062F/\u062F",hudSize:"\u062D\u062C\u0645 \u0627\u0644\u0648\u0627\u062C\u0647\u0629",hs_small:"\u0635\u063A\u064A\u0631",hs_normal:"\u0639\u0627\u062F\u064A",hs_large:"\u0643\u0628\u064A\u0631",hs_xl:"\u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B",bugReport:"\u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u062E\u0644\u0644 (\u0635\u0648\u0631\u0629 + \u0633\u062C\u0644)",bugSending:"\u062C\u0627\u0631\u064D \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0642\u0631\u064A\u0631\u2026",bugSent:"\u062D\u064F\u0641\u0638 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062E\u0644\u0644: {0}",bugFail:"\u0644\u0645 \u064A\u064F\u0631\u0633\u0644 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ({0})",bugOld:"\u062D\u062F\u0651\u062B My PC \u0644\u0625\u0631\u0633\u0627\u0644 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0623\u062E\u0637\u0627\u0621",camAhead:"\u0631\u0627\u062F\u0627\u0631",police:"\u0627\u0644\u0634\u0631\u0637\u0629",credits:"\u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064A \xA9 \u0645\u0633\u0627\u0647\u0645\u0648 OpenStreetMap (ODbL). \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633: AWS Terrain Tiles. \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A: Kenney (CC0)."}},ft={lang:"en",set(s){this.lang=Na[s]?s:"en",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"},t(s,...t){let e=Na[this.lang]&&Na[this.lang][s]||Na.en[s]||s;return t.forEach((n,i)=>{e=e.replace("{"+i+"}",n)}),e},line(s){let t=s.indexOf(":");return t<0?this.t(s):this.t(s.slice(0,t),s.slice(t+1))}};var za=(s,t)=>s[(s.indexOf(t)+1)%s.length],Ex=["auto","manual","clutch"],Tx=["taxi","city","hatch"],Fa=class{constructor(t,e){this.app=t,this.root=e,this.items=[],this.f=0,this.back=null,this.screen=""}show(t,e,n,i){this.root.innerHTML=t,this.root.style.display="block",this.items=[...this.root.querySelectorAll("[data-f]")],this.acts=e,this.back=n,this.f=Math.min(i||0,this.items.length-1),this.paint()}hide(){this.root.style.display="none",this.root.innerHTML="",this.items=[],this.screen=""}get open(){return this.root.style.display==="block"}paint(){this.items.forEach((e,n)=>e.classList.toggle("focus",n===this.f));let t=this.items[this.f];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})}input(t,e,n){if(!this.open)return!1;if(t==="up"||t==="left")this.f=(this.f+this.items.length-1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="down"||t==="right")this.f=(this.f+1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="confirm"&&!n){let i=this.acts[this.f];this.app.sound.ui("ok"),i&&i()}else if((t==="cancel"||t==="menu")&&!n)if(this.back)this.app.sound.ui("back"),this.back();else return!1;return!0}gearLabel(){return ft.t(this.app.settings.gearbox==="auto"?"auto":this.app.settings.gearbox)}title(t){this.screen="title";let e=this.app.saved&&this.app.saved.stats;this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${ft.t("tag")}</div>
<div class="menu"><div class="btn go" data-f>${ft.t("start")}</div><div class="btn" data-f>${ft.t("settings")}</div><div class="btn" data-f>${ft.t("help")}</div>${e?`<div class="btn" data-f>${ft.t("reset")}</div>`:""}</div>
<div class="mini">${ft.t("car")} <b>${this.carLabel()}</b> \xB7 ${ft.t("gearbox")} <b>${this.gearLabel()}</b> \xB7 ${ft.t("level")} <b>${ft.t("lv_"+this.app.settings.level)}</b></div>
${e?`<div class="mini">${ft.t("money")} <b>${Math.round(this.app.saved.money)} DH</b> \xB7 ${ft.t("rides")} <b>${e.rides}</b> \xB7 ${e.km.toFixed(0)} ${ft.t("km")}</div>`:""}
<div class="foot">${ft.t("credits")}</div></div>`,[()=>this.app.startShift(),()=>this.settings(()=>this.title(1)),()=>this.controls(()=>this.title(2)),()=>this.confirmReset(()=>{this.app.resetCareer(),this.title()},()=>this.title(3))],null,t)}carLabel(){return ft.t("car_"+(this.app.settings.car||"taxi"))}settings(t,e){this.screen="settings";let n=this.app.settings,i=this.app.shift,r=i&&i.taxi;e===void 0&&(this.was={car:n.car,level:n.level});let a=(c,h)=>`<div class="btn row" data-f><span>${ft.t(c)}</span><b>${h}</b></div>`,o=[["car",this.carLabel(),()=>{n.car=za(Tx,n.car)}],["gearbox",this.gearLabel(),()=>{n.gearbox=za(Ex,n.gearbox),i&&this.app.applyGear()}],["level",ft.t("lv_"+n.level),()=>{n.level=za(Eu,n.level)}],["arrows",ft.t(n.arrows===!1?"off":"on"),()=>{n.arrows=n.arrows===!1,i&&(i.arrows=n.arrows)}],["hudSize",ft.t("hs_"+(n.hud||"normal")),()=>{n.hud=za(["small","normal","large","xl"],n.hud||"normal"),this.app.applyHud()}]];r&&o.push(["limiter",r.limiter?r.limiter+" km/h":ft.t("off"),()=>{r.limiter=r.limiter?0:50}]);let l=()=>{let c=this.was&&(this.was.car!==n.car||this.was.level!==n.level);this.was=null,i&&c?this.app.startShift():t()};this.show(`<div class="panel pause"><h2>${ft.t("settings")}</h2><p class="small">${ft.t("lv_"+n.level+"_d")}</p>${o.map(c=>a(c[0],c[1])).join("")}
<div class="btn" data-f>${ft.t("back")}</div></div>`,o.map((c,h)=>()=>{c[2](),this.app.saveSettings(),this.settings(t,h)}).concat([l]),l,e)}confirmReset(t,e){this.show(`<div class="panel pause"><h2>${ft.t("reset")}</h2><p>${ft.t("resetAsk")}</p><div class="btn" data-f>${ft.t("no")}</div><div class="btn" data-f>${ft.t("yes")}</div></div>`,[e,t],e,0)}controls(t){this.screen="controls",this.show(`<div class="panel"><h2>${ft.t("ctlTitle")}</h2><p>${ft.t("ctlDrive")}</p><p>${ft.t("ctlAct")}</p><p>${ft.t("ctlGear")}</p><p>${ft.t("ctlRemote")}</p><p class="btest">${ft.t("btnTest")}: <b>${ft.t("btnNone")}</b></p>
<h3>${ft.t("rules")}</h3><p class="small">${ft.t("rulesText")}</p><div class="btn" data-f>${ft.t("back")}</div></div>`,[t],t)}pause(t){this.screen="pause";let e=this.app.shift.taxi,n=e.stats,i=(r,a)=>`<div class="st"><span>${ft.t(r)}</span><b>${a}</b></div>`;this.show(`<div class="panel pause"><h2>${ft.t("paused")}</h2>${this.app.bugMsg?`<p class="bugmsg">${ft.line(this.app.bugMsg)}</p>`:""}
<div class="stats">${i("money",Math.round(e.money)+" DH")}${i("rides",n.rides)}${i("earned",Math.round(n.earned)+" DH")}${i("fines",Math.round(n.fines)+" DH")}${i("repairs",Math.round(n.repairs)+" DH")}${i("fuelSpent",Math.round(n.fuel)+" DH")}${i("km",n.km.toFixed(1))}${i("level",ft.t("lv_"+this.app.settings.level))}</div>
<div class="btn go" data-f>${ft.t("resume")}</div><div class="btn" data-f>${ft.t("settings")}</div><div class="btn" data-f>${ft.t("help")}</div><div class="btn" data-f>${ft.t("bugReport")}</div><div class="btn" data-f>${ft.t("reset")}</div><div class="btn" data-f>${ft.t("quit")}</div></div>`,[()=>this.app.resumeShift(),()=>this.settings(()=>this.pause(1)),()=>this.controls(()=>this.pause(2)),()=>this.app.reportBug(),()=>this.confirmReset(()=>this.app.resetCareer(),()=>this.pause(4)),()=>this.app.endShift()],()=>this.app.resumeShift(),t)}};var Ax=.75*Math.PI,Rx=1.5*Math.PI,Oa=s=>Ax+Math.max(0,Math.min(1,s))*Rx,ys=(s,t)=>(t||700)+" "+s+"px CP, system-ui, sans-serif",Ba=class{constructor(t){this.c=document.createElement("canvas"),this.c.width=640,this.c.height=350,this.c.className="h-gauges",t.appendChild(this.c),this.x=this.c.getContext("2d"),this.face=null,this.faceKey="",this.T={x:165,y:150,r:128},this.S={x:470,y:150,r:140}}drawFace(t,e){let n=document.createElement("canvas");n.width=640,n.height=350;let i=n.getContext("2d"),r=(o,l,c,h,u)=>{let f=i.createRadialGradient(o.x,o.y-o.r*.3,o.r*.1,o.x,o.y,o.r);f.addColorStop(0,"#1d2a3c"),f.addColorStop(1,"#070b12"),i.fillStyle=f,i.beginPath(),i.arc(o.x,o.y,o.r,0,7),i.fill(),i.lineWidth=5,i.strokeStyle="#8a97a8",i.stroke(),u!==void 0&&(i.strokeStyle="#e8321f",i.lineWidth=9,i.beginPath(),i.arc(o.x,o.y,o.r-12,Oa(u/l),Oa(1)),i.stroke());for(let p=0;p<=l+1e-6;p+=c/2){let d=Math.abs(p/c-Math.round(p/c))<1e-6,x=Oa(p/l),g=o.r-8,m=g-(d?16:8);if(i.strokeStyle="#e8edf3",i.lineWidth=d?3.5:2,i.beginPath(),i.moveTo(o.x+Math.cos(x)*m,o.y+Math.sin(x)*m),i.lineTo(o.x+Math.cos(x)*g,o.y+Math.sin(x)*g),i.stroke(),d){i.fillStyle="#ffffff",i.font=ys(o.r>135?22:24),i.textAlign="center",i.textBaseline="middle";let M=m-20;i.fillText(String(Math.round(h?p/h:p)),o.x+Math.cos(x)*M,o.y+Math.sin(x)*M)}}};r(this.T,t*1e3,1e3,1e3,e),r(this.S,160,20);let a=this.T;i.lineWidth=9,i.strokeStyle="rgba(255,255,255,.18)",i.beginPath(),i.arc(a.x,a.y,a.r*.84,.66*Math.PI,.34*Math.PI,!0),i.stroke(),i.fillStyle="#c9d2dc",i.font=ys(18,700),i.textAlign="center",i.textBaseline="middle",i.fillText("E",a.x-a.r*.62,a.y+a.r*.62),i.fillText("F",a.x+a.r*.62,a.y+a.r*.62),i.font=ys(17,600),i.fillStyle="#9fb0c4",i.fillText("x1000 rpm",a.x,a.y-a.r*.36),i.fillText("km/h",this.S.x,this.S.y-this.S.r*.36),this.face=n}needle(t,e,n){let i=this.x,r=Oa(e);i.strokeStyle=n,i.lineWidth=5,i.lineCap="round",i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(t.x+Math.cos(r)*(t.r-22),t.y+Math.sin(r)*(t.r-22)),i.stroke(),i.fillStyle="#2b3646",i.beginPath(),i.arc(t.x,t.y,9,0,7),i.fill()}lamp(t,e,n,i,r){let a=this.x;a.font=ys(21),a.textAlign="center",a.textBaseline="middle";let o=a.measureText(n).width+18;a.fillStyle=i?r:"rgba(255,255,255,.1)",a.beginPath(),a.roundRect?a.roundRect(t-o/2,e-16,o,32,8):a.rect(t-o/2,e-16,o,32),a.fill(),a.fillStyle=i?"#0b0f16":"rgba(255,255,255,.42)",a.fillText(n,t,e+1)}draw(t){let e=Math.ceil(t.maxRpm/1e3+.6),n=e+":"+t.maxRpm;n!==this.faceKey&&(this.faceKey=n,this.drawFace(e,t.maxRpm*.92));let i=this.x,r=this.T,a=this.S;i.clearRect(0,0,640,350),i.drawImage(this.face,0,0);let o=Math.max(0,Math.min(1,t.fuel/t.tank)),l=.66*Math.PI,c=l-o*.32*Math.PI;i.strokeStyle=t.low?"#ff4b3e":"#3ad07a",i.lineWidth=9,i.beginPath(),i.arc(r.x,r.y,r.r*.84,l,c,!0),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f2c418",i.font=ys(56),i.fillText(t.gear,r.x,r.y+r.r*.42),i.fillStyle=t.over?"#ff4b3e":"#ffffff",i.font=ys(58),i.fillText(String(t.kmh),a.x,a.y+a.r*.42),this.needle(r,t.rpm/(e*1e3),"#ff6a3d"),this.needle(a,t.kmh/160,"#ff6a3d");let h=330;i.fillStyle="rgba(7,11,18,.78)",i.beginPath(),i.roundRect?i.roundRect(28,h-21,584,42,12):i.rect(28,h-21,584,42),i.fill(),this.lamp(70,h,"P",t.hand,"#ff4b3e"),this.lamp(140,h,"ENG",t.engine,"#f2a818"),this.lamp(222,h,"FUEL",t.low,"#f2a818"),t.clutchBox&&this.lamp(292,h,"C",t.clutch,"#8fdcf0"),this.lamp(392,h,t.limiter?"LIM "+t.limiter:"LIM",!!t.limiter,"#2cff8f"),this.lamp(505,h,"TAXI",!0,t.ride?"#ff4b3e":"#2cff8f")}};function Lu(s,t){let e=s.canvas.width;if(s.clearRect(0,0,e,e),s.save(),s.translate(e/2,e/2),s.scale(e/100,e/100),s.fillStyle="#2cff8f",s.strokeStyle="#2cff8f",s.lineWidth=12,s.lineCap="round",s.lineJoin="round",t==="arrive")s.beginPath(),s.arc(0,-10,18,0,7),s.fill(),s.beginPath(),s.moveTo(-14,0),s.lineTo(0,34),s.lineTo(14,0),s.fill(),s.fillStyle="#0b1420",s.beginPath(),s.arc(0,-10,7,0,7),s.fill();else if(t==="uturn")s.beginPath(),s.moveTo(14,38),s.lineTo(14,-6),s.arc(-4,-6,18,0,Math.PI,!0),s.lineTo(-22,14),s.stroke(),s.beginPath(),s.moveTo(-40,8),s.lineTo(-4,8),s.lineTo(-22,34),s.closePath(),s.fill();else{let n=t==="left"?-1:1;s.beginPath(),s.moveTo(-n*14,38),s.lineTo(-n*14,-2),s.quadraticCurveTo(-n*14,-16,0,-16),s.lineTo(n*12,-16),s.stroke(),s.beginPath(),s.moveTo(n*34,-16),s.lineTo(n*10,-36),s.lineTo(n*10,4),s.closePath(),s.fill()}s.restore()}var be=5,le=(s,t,e)=>{let n=document.createElement(e||"div");return n.className=s,t&&t.appendChild(n),n},Tc=s=>(s<0?"\u2212":"")+Math.abs(Math.round(s)).toLocaleString("en-US")+" DH",ka=class{constructor(t){this.root=t,this.box=null}begin(t,e){this.shift=t,this.label=e;let n=this.root;n.innerHTML="",n.style.display="block",this.cash=le("h-cash",n),this.cashV=le("v",this.cash),this.rides=le("s",this.cash),this.sign=le("h-sign",n),this.signV=le("n",this.sign),this.street=le("h-street",n),this.warn=le("h-warn",n),this.area=le("h-area",n);let i=le("h-map",n);this.mapC=le("",i,"canvas"),this.mapC.width=this.mapC.height=260,this.mapX=this.mapC.getContext("2d"),this.gauges=new Ba(n),this.gs={},this.turn=le("h-turn",n),this.turnC=le("",this.turn,"canvas"),this.turnC.width=this.turnC.height=96,this.turnX=this.turnC.getContext("2d"),this.turnD=le("d",this.turn),this.turnN=le("n",this.turn),this.ride=le("h-ride",n),this.prompt=le("h-prompt",n),this.cards=le("h-cards",n),this.toastE=le("h-toast",n),this.cache={},this.t=0,this.toastT=0,this.drawBase(t.net)}set(t,e,n){this.cache[e]!==n&&(this.cache[e]=n,t.textContent=n)}drawBase(t){let e=t.box,n=Math.ceil((e.x1-e.x0)/be),i=Math.ceil((e.z1-e.z0)/be),r=document.createElement("canvas");r.width=n,r.height=i;let a=r.getContext("2d");a.fillStyle="#16202c",a.fillRect(0,0,n,i);let o=t.g;a.fillStyle="#0d2a44";for(let l=0;l<o.nz;l+=2)for(let c=0;c<o.nx;c+=2)o.h[l*o.nx+c]<-20&&a.fillRect((o.x0+c*o.c-e.x0)/be-3,(o.z0+l*o.c-e.z0)/be-3,6,6);a.lineCap="round",a.lineJoin="round";for(let l of[0,1])for(let c=0;c<t.ne;c++){let h=t.eCls[c];if(l===0!=h>=4)continue;a.strokeStyle=h<=1?"#e8c35a":h<=3?"#c9d2dc":"#6d7b8b",a.lineWidth=h<=1?3:h<=3?2.2:1.3,a.beginPath();let u=t.eOff[c],f=t.eN[c];for(let p=0;p<f;p++){let d=(t.px[u+p]-e.x0)/be,x=(t.pz[u+p]-e.z0)/be;p?a.lineTo(d,x):a.moveTo(d,x)}a.stroke()}this.base=r}update(t,e){let n=this.shift,i=n.me.veh,r=n.taxi;for(this.t+=t;r.events.length;){let M=r.events.shift();this.card(M),r.log.push(M),r.log.length>20&&r.log.shift()}for(;r.toasts.length;){let M=r.toasts.shift();this.toastE.textContent=ft.line(M.text),this.toastE.className="h-toast on "+M.kind,this.toastT=3.2}this.toastT>0&&(this.toastT-=t)<=0&&(this.toastE.className="h-toast");for(let M of this.cards.children)M._t-=t,M._t<=0&&!M._gone&&(M._gone=!0,M.classList.add("out"),setTimeout(()=>M.remove(),400));if(this.t<.08)return;let a=this.t;this.t=0;let o=Math.round(Math.abs(i.fwdSpeed)*3.6);this.set(this.cashV,"cash",Tc(r.money)),this.cashV.className="v"+(r.money<0?" neg":""),this.set(this.rides,"rides",ft.t("rides")+" "+r.stats.rides);let l=n.qp,c=l.edge>=0?l.lim:0;this.set(this.signV,"lim",c?String(c):""),this.sign.style.display=c?"":"none",this.set(this.street,"street",l.edge>=0?n.net.edgeName(l.edge,ft.lang):""),(this.areaT=(this.areaT||0)-a)<=0&&(this.areaT=.5,this.set(this.area,"area",n.net.areaName(i.px,i.pz,ft.lang)));let h=r.wrongNow?ft.t("wrongWay"):r.speeding?ft.t("slowDown"):i.stalled?ft.t("stalled"):"";this.set(this.warn,"warn",h),this.warn.className="h-warn"+(h?" on":"");let u=i.gearbox?i.mgear<0?"R":i.mgear===0?"N":String(i.mgear):i.reverse?"R":"D"+i.gear,f=this.gs;f.kmh=o,f.rpm=i.rpm,f.maxRpm=i.spec.rpm,f.gear=u,f.fuel=r.fuel,f.tank=r.tank,f.low=r.fuel<4,f.hand=i.input.handbrake>0||i.hold,f.engine=!!(i.stalled||i.fuelCut),f.limiter=r.limiter,f.clutchBox=i.gearbox==="clutch",f.clutch=(i.input.clutch||0)>.5,f.ride=!!(r.ride&&r.ride.ped.state==="in"),f.over=!!(c&&o>c+5),this.gauges.draw(f);let p=n.arrows&&n.guide?n.guide.turn:null;if(p){let M=p.dir+(p.dist<30?"n":"");this.cache.turnK!==M&&(this.cache.turnK=M,Lu(this.turnX,p.dir)),this.set(this.turnD,"turnD",ft.t(p.dir==="arrive"?"arrive":p.dir==="uturn"?"turnU":p.dir==="left"?"turnL":"turnR")+" \xB7 "+ft.t("inM",Math.max(0,Math.round(p.dist/10)*10))),this.set(this.turnN,"turnN",p.edge>=0?n.net.edgeName(p.edge,ft.lang):r.ride&&r.ride.name||""),this.turn.className="h-turn on"+(p.dist<40?" near":"")}else this.turn.className!=="h-turn"&&(this.turn.className="h-turn");let d=r.ride;if(d&&d.ped.state==="in"){let M=Math.max(0,d.eta-d.t),_=d.route?d.route.len:0,v=ft.t("to")+" "+(d.name||"\u2014")+`
`+(_/1e3).toFixed(1)+" km \xB7 "+(M>0?ft.t("eta")+" "+Math.floor(M/60)+":"+String(Math.floor(M%60)).padStart(2,"0"):ft.t("late"))+`
`+ft.t("fare")+" "+r.meter()+" DH";this.set(this.ride,"ride",v),this.ride.className="h-ride on"+(M<=0?" late":"")}else this.set(this.ride,"ride",""),this.ride.className="h-ride";let x=r.prompt,g=x==="help"?"help_":x,m="";if(x==="helpWait")m=ft.t("helpWait");else if(x==="pickup"){let M=r.nearPed(i),_=M&&M.quote;m=this.label()+"  "+(_?ft.t("pickupTo",_.name||"\u2014",_.km.toFixed(1),_.fare):ft.t("pickup"))}else x&&(m=this.label()+"  "+ft.t(g)+(x==="refuel"?"  ("+vs+" DH/L)":""));this.set(this.prompt,"prompt",m),this.prompt.className="h-prompt"+(m?" on":""),this.map(n,i,r,a)}map(t,e,n){let i=this.mapX,r=260,a=t.net,o=a.box,l=Math.atan2(e.R[6],e.R[8]),c=1.25;i.save(),i.fillStyle="#16202c",i.fillRect(0,0,r,r),i.translate(r/2,r*.62),i.rotate(Math.PI+l),i.scale(c,c);let h=(e.px-o.x0)/be,u=(e.pz-o.z0)/be;i.drawImage(this.base,-h,-u);let f=n.ride;if(f&&f.route&&f.ped.state==="in"){i.strokeStyle="#2cff8f",i.lineWidth=3.2/c,i.beginPath();let d=f.route.edges,x=t.qp.edge===(d[0]&&d[0][0])?t.qp.s:-1;i.moveTo(0,0);let g=0;for(let _=0;_<d.length;_++){let v=d[_][0],R=d[_][1],T=a.eOff[v],S=a.eN[v];for(let C=0;C<S;C++){let b=T+(R>0?C:S-1-C),y=a.sS[b];if(!(_===0&&x>=0&&(R>0?y<x:y>x))&&(_===d.length-1&&v===f.e&&(R>0?y>f.s:y<f.s)||(i.lineTo((a.px[b]-e.px)/be,(a.pz[b]-e.pz)/be),++g>2e3)))break}}let m=(f.x-e.px)/be,M=(f.z-e.pz)/be;i.lineTo(m,M),i.stroke(),i.fillStyle="#2cff8f",i.beginPath(),i.arc(m,M,5/c,0,7),i.fill()}i.fillStyle="#ffd400";for(let d of n.peds)d.state==="wait"&&(i.beginPath(),i.arc((d.x-e.px)/be,(d.z-e.pz)/be,3.6/c,0,7),i.fill());let p=t.enforce;if(p){i.fillStyle="#ff4b3e";for(let d of p.cams){let x=(d.x-e.px)/be,g=(d.z-e.pz)/be;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.4/c,0,7),i.fill())}i.fillStyle="#3d7bff";for(let d of p.police){let x=(d.x-e.px)/be,g=(d.z-e.pz)/be;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.8/c,0,7),i.fill())}}i.fillStyle="#19d17a";for(let d of a.stations){let x=a.eOff[d.e]+d.k;i.fillRect((a.px[x]-e.px)/be-4/c,(a.pz[x]-e.pz)/be-4/c,8/c,8/c)}i.restore(),i.fillStyle="#21c8ef",i.strokeStyle="#fff",i.lineWidth=1.5,i.beginPath(),i.moveTo(r/2,r*.62-9),i.lineTo(r/2+6,r*.62+7),i.lineTo(r/2,r*.62+3),i.lineTo(r/2-6,r*.62+7),i.closePath(),i.fill(),i.stroke()}card(t){let e=le("h-card "+t.kind,null);le("t",e).textContent=ft.t(t.title);for(let[n,i]of t.lines){let r=le("r",e);le("l",r,"span").textContent=ft.line(n),le("a"+(i<0?" neg":i>0?" pos":""),r,"span").textContent=i?Tc(i):""}if(t.lines.length>1||t.total){let n=le("r tot",e);le("l",n,"span").textContent=ft.t("total"),le("a"+(t.total<0?" neg":" pos"),n,"span").textContent=Tc(t.total)}for(e._t=t.kind==="crash"?7:5.5,this.cards.appendChild(e);this.cards.children.length>3;)this.cards.firstChild.remove();this.onCard&&this.onCard(t)}end(){this.root.innerHTML="",this.root.style.display="none",this.base=null}};var ae=window.MyPC,Ha=1/60,D={renderer:null,canvas:null,info:null,quality:null,net:null,input:new Ua,shift:null,hud:null,ui:null,sound:null,raf:0,last:0,acc:0,state:"boot",paused:!1,saved:null,settings:{gearbox:"auto",car:"taxi",level:"normal",arrows:!0,hud:"normal"},fpsLog:[],workLog:[],saveT:0};window.TT=D;function Cx(s){let e=new URLSearchParams(location.search).get("q")||s.quality&&s.quality.tier||"mid";return{tier:e,scale:{low:.6,mid:.8,high:1}[e]||.8,minScale:e==="low"?.45:.55}}function Px(){let s=document.getElementById("c"),t=new Xr({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:/proof/.test(location.search)});return t.setPixelRatio(1),t.outputColorSpace=oi,t.toneMapping=bn,D.canvas=s,t}function $s(){let s=D.shift?D.shift.scale:D.quality.scale,t=Math.round(1920*s*Math.min(1,window.innerWidth/1920*1.5)),e=Math.round(t*window.innerHeight/window.innerWidth);D.renderer.setSize(t,e,!1),D.canvas.style.width="100vw",D.canvas.style.height="100vh"}function Nu(s){D.raf=requestAnimationFrame(Nu);let t=performance.now();D.last||(D.last=s);let e=s-D.last;D.last=s,D.acc+=Math.min(100,e);let n=0;for(;D.acc>=Ha*1e3-.5&&n<4;)Ix(Ha),D.acc-=Ha*1e3,n++;D.acc>Ha*2e3&&(D.acc=0),D.shift&&D.state!=="boot"&&(D.shift.render(e),D.capture&&Lx(D.capture)),D.fpsLog.length<2e4&&(D.fpsLog.push(e),D.workLog.push(performance.now()-t))}function Du(){D.raf||(D.last=0,D.acc=0,D.raf=requestAnimationFrame(Nu))}function Uu(){D.raf&&cancelAnimationFrame(D.raf),D.raf=0}function Ix(s){if(D.input.poll(s),D.input.edge.capture&&D.shift&&(D.state==="drive"||D.state==="pause")&&(D.capture="capture"),D.ui.screen==="controls"&&D.input.btnSeen!==D.btnShown){D.btnShown=D.input.btnSeen;let t=D.ui.root.querySelector(".btest b");t&&(t.textContent=ft.t("btnSeen",D.input.lastBtn)+(ae.gamepad&&ae.gamepad.label?" ("+ae.gamepad.label(D.input.lastBtn)+")":""))}if(D.state==="drive"&&D.shift){D.shift.update(s,D.input),D.hud.update(s,D.input),D.sound.update(D.shift,s);let t=D.shift.taxi;t.dirty&&(D.saveT-=s)<=0&&(D.saveT=5,t.dirty=!1,Va())}}function Va(){if(!D.shift)return;let s=D.shift.taxi.save(),t=D.shift.me.veh;s.at={x:Math.round(t.px),z:Math.round(t.pz)},D.saved=s,ae.save("taxi",s)}function Lx(s){D.capture=null;let t=D.shift;if(!t||D.bugBusy)return;let e=t.bug.shot(D.canvas),n=D.fpsLog.slice(-120),i=t.bug.state(t,{from:s,state:D.state,lang:ft.lang,screen:[D.canvas.width,D.canvas.height],fps:n.length?Math.round(1e3*n.length/n.reduce((a,o)=>a+o,0)):0});window.TT.lastBug={data:i,img:e.length};let r=(a,o)=>{D.bugMsg=a,D.state==="pause"&&D.ui.screen==="pause"?D.ui.pause(D.ui.f):t.taxi.toast(a,o)};if(!ae.bug){r("bugOld","bad");return}D.bugBusy=!0,r("bugSending","info"),ae.bug(s==="menu"?"Pause > Report a bug":"Capture button",i,e).then(a=>{D.bugBusy=!1,window.TT.lastBug.id=a,r("bugSent:"+String(a).slice(0,6),"ok")}).catch(a=>{D.bugBusy=!1,window.TT.lastBug.error=a&&a.code,console.warn("[taxi] bug report",a&&a.code,i),r("bugFail:"+(a&&a.code||"?"),"bad")})}D.reportBug=()=>{D.capture="menu"};var Dx={small:1,normal:1.2,large:1.4,xl:1.65};D.applyHud=()=>{D.hud&&D.hud.root.style.setProperty("--hs",Dx[D.settings.hud]||1.2)};D.saveSettings=()=>ae.save("settings",D.settings);D.applyGear=()=>{if(!D.shift)return;let s=D.shift.me.veh,t=D.settings.gearbox;s.gearbox=t==="auto"?null:t,s.mgear=1,s.stalled=!1};D.startShift=function(s){D.ui.hide(),D.shift&&(s||Va(),D.shift.dispose(),D.shift=null);let t=new Da(D.renderer,D.net,D.quality,{gearbox:D.settings.gearbox,car:D.settings.car,level:D.settings.level,arrows:D.settings.arrows,saved:D.saved,start:D.saved&&D.saved.at,lang:ft.lang});t.onScale=()=>$s(),t.onSound=(e,n,i)=>D.sound.event(e,n,i,t),D.shift=t,D.hud.begin(t,()=>D.input.hasPad()&&ae.gamepad&&ae.gamepad.label?"("+ae.gamepad.label(0)+")":"(OK)"),D.sound.resume(),D.sound.begin(t),D.input.clearHeld(),D.state="drive",$s(),ae.announce&&ae.announce(ft.t("boarded").split(":")[0])};D.resetCareer=function(){let s=D.saved&&D.saved.at;if(D.saved=s?{at:s}:null,ae.save("taxi",D.saved),D.shift){let t=D.shift.me.veh;D.saved={at:{x:Math.round(t.px),z:Math.round(t.pz)}},D.shift.taxi.dirty=!1,D.startShift(!0)}};D.pauseShift=function(){D.state==="drive"&&(D.state="pause",D.bugMsg=null,D.sound.pause(),D.ui.pause())};D.resumeShift=function(){D.ui.hide(),D.input.clearHeld(),D.input.prev.action=!0,D.state="drive",D.sound.resume()};D.endShift=function(){Va(),D.sound.resume(),D.sound.end(),D.hud.end(),D.shift&&(D.shift.dispose(),D.shift=null),D.state="menu",D.saved&&D.saved.stats&&D.saved.stats.earned&&ae.submitScore&&ae.submitScore(Math.round(D.saved.stats.earned),{}),D.ui.title()};ae.init({ownMenu:!0,onInit:async function(s){D.info=s;try{ft.set(s.lang),D.quality=Cx(s),D.renderer=Px(),$s(),window.addEventListener("resize",$s),await fu(t=>ae.progress(t*.6)),D.net=await fa.load(t=>ae.progress(.6+t*.35)),D.saved=ae.load("taxi",null),D.settings=Object.assign({gearbox:"auto",car:"taxi",level:"normal",arrows:!0,hud:"normal"},ae.load("settings",null)),D.hud=new ka(document.getElementById("hud")),D.applyHud(),D.sound=new ua(s.volume||{music:.7,sfx:.8}),D.ui=new Fa(D,document.getElementById("ui")),D.input.menuCb=(t,e,n)=>{if(D.state==="drive"){t==="cancel"&&!n&&D.pauseShift();return}D.ui.input(t,e,n)},ae.progress(1),ae.ready()}catch(t){ae.report&&ae.report(t,{where:"init"}),ae.fail(String(t&&t.message||t))}},onStart:function(){D.sound.start(),Du();let s=new URLSearchParams(location.search);s.has("dev")?(s.get("gear")&&(D.settings.gearbox=s.get("gear")),s.get("car")&&(D.settings.car=s.get("car")),s.get("level")&&(D.settings.level=s.get("level")),s.get("hud")&&(D.settings.hud=s.get("hud"),D.applyHud()),s.has("fresh")&&(D.saved=null),s.has("x")&&(D.saved=Object.assign({},D.saved,{at:{x:+s.get("x"),z:+s.get("z")}})),D.startShift()):(D.state="menu",D.ui.title())},onPause:function(){Uu(),D.sound.pause(),D.paused=!0,D.state==="drive"&&D.pauseShift()},onResume:function(){D.paused=!1,D.input.clearHeld(),D.state!=="pause"&&D.sound.resume(),Du()},onDestroy:function(){Va(),Uu(),window.removeEventListener("resize",$s),D.shift&&D.shift.dispose(),D.sound&&D.sound.close(),D.renderer&&D.renderer.dispose()},onInput:function(s,t,e,n){if(s==="menu"&&t===!1){D.state==="drive"?D.pauseShift():D.state==="pause"&&D.resumeShift();return}if(s==="cancel"&&t&&D.state==="menu"&&D.ui.screen==="title")return!1;D.input.onAction(s,t,e,n)},onVolume:function(s){D.sound&&D.sound.volume(s)}});ae.gamepad&&(ae.gamepad.on("button",(s,t,e,n)=>D.input.onButton(s,t,e,n)),ae.gamepad.on("axes",(s,t)=>D.input.onAxes(s,t)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
