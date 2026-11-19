(()=>{var rc="170";var ju=0,Uc=1,Yu=2;var Zh=1,$u=2,Ln=3,si=0,Ue=1,qe=2,ni=0,ii=1,Ci=2,Fc=3,Oc=4,Zu=5,wi=100,Ju=101,Ku=102,Qu=103,tf=104,ef=200,nf=201,sf=202,rf=203,Io=204,Lo=205,af=206,of=207,lf=208,cf=209,hf=210,uf=211,ff=212,df=213,pf=214,Do=0,zo=1,No=2,rs=3,Uo=4,Fo=5,Oo=6,ko=7,Jh=0,mf=1,gf=2,Sn=0,xf=1,vf=2,yf=3,_f=4,Mf=5,bf=6,wf=7;var Kh=300,as=301,os=302,Bo=303,Ho=304,fa=306,Vo=1e3,Ti=1001,Go=1002,je=1003,Sf=1004;var sr=1005;var Mn=1006,Za=1007;var Ai=1008;var Un=1009,Qh=1010,tu=1011,Vs=1012,ac=1013,Pi=1014,bn=1015,Zs=1016,oc=1017,lc=1018,ls=1020,eu=35902,nu=1021,iu=1022,hn=1023,su=1024,ru=1025,ns=1026,cs=1027,cc=1028,hc=1029,au=1030,uc=1031;var fc=1033,zr=33776,Nr=33777,Ur=33778,Fr=33779,Wo=35840,Xo=35841,qo=35842,jo=35843,Yo=36196,$o=37492,Zo=37496,Jo=37808,Ko=37809,Qo=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,Or=36492,ul=36494,fl=36495,ou=36283,dl=36284,pl=36285,ml=36286;var kr=2300,gl=2301,Ja=2302,kc=2400,Bc=2401,Hc=2402;var Ef=3200,Tf=3201;var Af=0,Rf=1,ei="",nn="srgb",li="srgb-linear",da="linear",oe="srgb";var ki=7680;var Vc=519,Cf=512,Pf=513,If=514,lu=515,Lf=516,Df=517,zf=518,Nf=519,Gc=35044,ci=35048;var Wc="300 es",zn=2e3,Br=2001,ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,xl=180/Math.PI;function gs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ne(s,t,e){return Math.max(t,Math.min(e,s))}function Uf(s,t){return(s%t+t)%t}function Qa(s,t,e){return(1-e)*s+e*t}function Cs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function He(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],y=i[4],v=i[7],T=i[2],w=i[5],A=i[8];return r[0]=a*x+o*M+l*T,r[3]=a*g+o*y+l*w,r[6]=a*m+o*v+l*A,r[1]=c*x+h*M+u*T,r[4]=c*g+h*y+u*w,r[7]=c*m+h*v+u*A,r[2]=f*x+d*M+p*T,r[5]=f*g+d*y+p*w,r[8]=f*m+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},to=new jt;function cu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ff(){let s=Hr("canvas");return s.style.display="block",s}var Xc={};function Fs(s){s in Xc||(Xc[s]=!0,console.warn(s))}function Of(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:li,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?da:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qc=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],Yc=[.3127,.329],$c=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[li]:{primaries:qc,whitePoint:Yc,transfer:da,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:qc,whitePoint:Yc,transfer:oe,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});var Bi,vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Hr("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hf=0,Vr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(eo(i[a].image)):r.push(eo(i[a]))}else r=eo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function eo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,Ye=class s extends ri{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ti,i=Ti,r=Mn,a=Ai,o=hn,l=Un,c=s.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=gs(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Kh;Ye.DEFAULT_ANISOTROPY=1;var ve=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,T=(m+1)/2,w=(h+f)/4,A=(u+x)/4,S=(p+g)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=A/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=S/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=S/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-o,m=l*f+c*d+h*p+u*x,M=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),w=Math.atan2(T,m*M);g=Math.sin(g*w)/T,o=Math.sin(o*w)/T}let v=o*M;if(l=l*g+f*v,c=c*g+d*v,h=h*g+p*v,u=u*g+x*v,g===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-o*d,t[e+2]=c*p+h*d+o*f-l*u,t[e+3]=h*p-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new B,Jc=new sn,On=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),ar.subVectors(this.max,Ps),Hi.subVectors(t.a,Ps),Vi.subVectors(t.b,Ps),Gi.subVectors(t.c,Ps),$n.subVectors(Vi,Hi),Zn.subVectors(Gi,Vi),gi.subVectors(Hi,Gi);let e=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!io(e,Hi,Vi,Gi,ar)||(e=[1,0,0,0,1,0,0,0,1],!io(e,Hi,Vi,Gi,ar))?!1:(or.crossVectors($n,Zn),e=[or.x,or.y,or.z],io(e,Hi,Vi,Gi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new B,new B,new B,new B,new B,new B,new B,new B],on=new B,rr=new On,Hi=new B,Vi=new B,Gi=new B,$n=new B,Zn=new B,gi=new B,Ps=new B,ar=new B,or=new B,xi=new B;function io(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){xi.fromArray(s,r);let o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gf=new On,Is=new B,so=new B,kn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);let e=Is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(so)),this.expandByPoint(Is.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new B,ro=new B,lr=new B,Jn=new B,ao=new B,cr=new B,oo=new B,hs=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ro.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(ro);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=Jn.dot(this.direction),l=-Jn.dot(lr),c=Jn.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ro).addScaledVector(lr,f),d}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,r){ao.subVectors(e,t),cr.subVectors(n,t),oo.crossVectors(ao,cr);let a=this.direction.dot(oo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);let l=o*this.direction.dot(cr.crossVectors(Jn,cr));if(l<0)return null;let c=o*this.direction.dot(ao.cross(Jn));if(c<0||l+c>a)return null;let h=-o*Jn.dot(oo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,p,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,p,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Kn.crossVectors(n,We),Kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Kn.crossVectors(n,We)),Kn.normalize(),hr.crossVectors(We,Kn),i[0]=Kn.x,i[4]=hr.x,i[8]=We.x,i[1]=Kn.y,i[5]=hr.y,i[9]=We.y,i[2]=Kn.z,i[6]=hr.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],y=n[7],v=n[11],T=n[15],w=i[0],A=i[4],S=i[8],b=i[12],_=i[1],C=i[5],z=i[9],D=i[13],k=i[2],P=i[6],L=i[10],O=i[14],U=i[3],Y=i[7],j=i[11],st=i[15];return r[0]=a*w+o*_+l*k+c*U,r[4]=a*A+o*C+l*P+c*Y,r[8]=a*S+o*z+l*L+c*j,r[12]=a*b+o*D+l*O+c*st,r[1]=h*w+u*_+f*k+d*U,r[5]=h*A+u*C+f*P+d*Y,r[9]=h*S+u*z+f*L+d*j,r[13]=h*b+u*D+f*O+d*st,r[2]=p*w+x*_+g*k+m*U,r[6]=p*A+x*C+g*P+m*Y,r[10]=p*S+x*z+g*L+m*j,r[14]=p*b+x*D+g*O+m*st,r[3]=M*w+y*_+v*k+T*U,r[7]=M*A+y*C+v*P+T*Y,r[11]=M*S+y*z+v*L+T*j,r[15]=M*b+y*D+v*O+T*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+x*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=u*g*c-x*f*c+x*l*d-o*g*d-u*l*m+o*f*m,y=p*f*c-h*g*c-p*l*d+a*g*d+h*l*m-a*f*m,v=h*x*c-p*u*c+p*o*d-a*x*d-h*o*m+a*u*m,T=p*u*l-h*x*l-p*o*f+a*x*f+h*o*g-a*u*g,w=e*M+n*y+i*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=M*A,t[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*m-n*f*m)*A,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*m+n*l*m)*A,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*A,t[4]=y*A,t[5]=(h*g*r-p*f*r+p*i*d-e*g*d-h*i*m+e*f*m)*A,t[6]=(p*l*r-a*g*r-p*i*c+e*g*c+a*i*m-e*l*m)*A,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*A,t[8]=v*A,t[9]=(p*u*r-h*x*r-p*n*d+e*x*d+h*n*m-e*u*m)*A,t[10]=(a*x*r-p*o*r+p*n*c-e*x*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*A,t[12]=T*A,t[13]=(h*x*i-p*u*i+p*n*f-e*x*f-h*n*g+e*u*g)*A,t[14]=(p*o*i-a*x*i-p*n*l+e*x*l+a*n*g-e*o*g)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,x=a*h,g=a*u,m=o*u,M=l*c,y=l*h,v=l*u,T=n.x,w=n.y,A=n.z;return i[0]=(1-(x+m))*T,i[1]=(d+v)*T,i[2]=(p-y)*T,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+m))*w,i[6]=(g+M)*w,i[7]=0,i[8]=(p+y)*A,i[9]=(g-M)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Wi.set(i[0],i[1],i[2]).length(),a=Wi.set(i[4],i[5],i[6]).length(),o=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);let c=1/r,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(o===zn)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Br)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=zn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,d=(n+i)*h,p,x;if(o===zn)p=(a+r)*u,x=-2*u;else if(o===Br)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new B,ln=new se,Wf=new B(0,0,0),Xf=new B(1,1,1),Kn=new B,hr=new B,We=new B,Kc=new se,Qc=new sn,un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qf=0,th=new B,Xi=new sn,Cn=new se,ur=new B,Ls=new B,jf=new B,Yf=new sn,eh=new B(1,0,0),nh=new B(0,1,0),ih=new B(0,0,1),sh={type:"added"},$f={type:"removed"},qi={type:"childadded",child:null},lo={type:"childremoved",child:null},$e=class s extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new un,n=new sn,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new jt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ls,ur,this.up):Cn.lookAt(ur,Ls,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($f),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};$e.DEFAULT_UP=new B(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new B,Pn=new B,co=new B,In=new B,ji=new B,Yi=new B,rh=new B,ho=new B,uo=new B,fo=new B,po=new ve,mo=new ve,go=new ve,Si=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){cn.subVectors(i,e),Pn.subVectors(n,e),co.subVectors(t,e);let a=cn.dot(cn),o=cn.dot(Pn),l=cn.dot(co),c=Pn.dot(Pn),h=Pn.dot(co),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(po,r.x),a.addScaledVector(mo,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),Pn.subVectors(t,e),cn.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ji.subVectors(i,n),Yi.subVectors(r,n),ho.subVectors(t,n);let l=ji.dot(ho),c=Yi.dot(ho);if(l<=0&&c<=0)return e.copy(n);uo.subVectors(t,i);let h=ji.dot(uo),u=Yi.dot(uo);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);fo.subVectors(t,r);let d=ji.dot(fo),p=Yi.dot(fo);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Yi,o);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return rh.subVectors(r,i),o=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(rh,o);let m=1/(g+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector(ji,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function xo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Uf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xo(a,r,t+1/3),this.g=xo(a,r,t),this.b=xo(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return te.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ne(ze.r*255,0,255))*65536+Math.round(Ne(ze.g*255,0,255))*256+Math.round(Ne(ze.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,i=ze.g,r=ze.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=nn){te.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,i=ze.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(fr);let n=Qa(Qn.h,fr.h,e),i=Qa(Qn.s,fr.s,e),r=Qa(Qn.l,fr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Ht;Ht.NAMES=hu;var Zf=0,ai=class extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=gs(),this.name="",this.blending=ii,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Lo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fn=class extends ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new B,dr=new Lt,qt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}};var Wr=class extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends qt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jf=0,en=new se,vo=new $e,$i=new B,Xe=new On,Ds=new On,Re=new B,xe=class s extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Xr:Wr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Xe.min,Ds.min),Xe.expandByPoint(Re),Re.addVectors(Xe.max,Ds.max),Xe.expandByPoint(Re)):(Xe.expandByPoint(Ds.min),Xe.expandByPoint(Ds.max))}Xe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),Re.add($i)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new B,l[S]=new B;let c=new B,h=new B,u=new B,f=new Lt,d=new Lt,p=new Lt,x=new B,g=new B;function m(S,b,_){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),o[S].add(x),o[b].add(x),o[_].add(x),l[S].add(g),l[b].add(g),l[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let S=0,b=M.length;S<b;++S){let _=M[S],C=_.start,z=_.count;for(let D=C,k=C+z;D<k;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new B,v=new B,T=new B,w=new B;function A(S){T.fromBufferAttribute(i,S),w.copy(T);let b=o[S];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);let C=v.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,C)}for(let S=0,b=M.length;S<b;++S){let _=M[S],C=_.start,z=_.count;for(let D=C,k=C+z;D<k;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new qt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new se,vi=new hs,pr=new kn,oh=new B,mr=new B,gr=new B,xr=new B,yo=new B,vr=new B,lh=new B,yr=new B,ie=class extends $e{constructor(t=new xe,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yo.fromBufferAttribute(u,t),a?vr.addScaledVector(yo,h):vr.addScaledVector(yo.sub(e),h))}e.add(vr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(pr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(pr,oh)===null||vi.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(ah.copy(r).invert(),vi.copy(t.ray).applyMatrix4(ah),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=y;v<T;v+=3){let w=o.getX(v),A=o.getX(v+1),S=o.getX(v+2);i=_r(this,m,t,n,c,h,u,w,A,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=_r(this,a,t,n,c,h,u,M,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=y;v<T;v+=3){let w=v,A=v+1,S=v+2;i=_r(this,m,t,n,c,h,u,w,A,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=g,y=g+1,v=g+2;i=_r(this,a,t,n,c,h,u,M,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Kf(s,t,e,n,i,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===si,o),l===null)return null;yr.copy(o),yr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:s}}function _r(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,mr),s.getVertexPosition(l,gr),s.getVertexPosition(c,xr);let h=Kf(s,t,e,n,mr,gr,xr,lh);if(h){let u=new B;Si.getBarycoord(lh,mr,gr,xr,u),i&&(h.uv=Si.getInterpolatedAttribute(i,o,l,c,u,new Lt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};Si.getNormal(mr,gr,xr,f.normal),h.face=f,h.barycoord=u}return h}var Ii=class s extends xe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function p(x,g,m,M,y,v,T,w,A,S,b){let _=v/A,C=T/S,z=v/2,D=T/2,k=w/2,P=A+1,L=S+1,O=0,U=0,Y=new B;for(let j=0;j<L;j++){let st=j*C-D;for(let it=0;it<P;it++){let xt=it*_-z;Y[x]=xt*M,Y[g]=st*y,Y[m]=k,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(it/A),u.push(1-j/S),O+=1}}for(let j=0;j<S;j++)for(let st=0;st<A;st++){let it=f+st+P*j,xt=f+st+P*(j+1),W=f+(st+1)+P*(j+1),K=f+(st+1)+P*j;l.push(it,xt,K),l.push(xt,W,K),U+=6}o.addGroup(d,U,b),d+=U,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){let t={};for(let e=0;e<s.length;e++){let n=us(s[e]);for(let i in n)t[i]=n[i]}return t}function Qf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var td={clone:us,merge:Oe},ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new B,ch=new Lt,hh=new Lt,ke=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,Ml=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(Zi,Ji,t,e);i.layers=this.layers,this.add(i);let r=new ke(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new ke(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new ke(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let l=new ke(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new ke(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},jr=class extends Ye{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bl=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ii(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:ni});r.uniforms.tEquirect.value=e;let a=new ie(i,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Mn),new Ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},_o=new B,id=new B,sd=new jt,Dn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_o.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sd.getNormalMatrix(t),i=this.coplanarPoint(_o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new kn,Mr=new B,Yr=class{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],M=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-d,v-m).normalize(),n[1].setComponents(l+r,f+c,g+d,v+m).normalize(),n[2].setComponents(l+a,f+h,g+p,v+M).normalize(),n[3].setComponents(l-a,f-h,g-p,v-M).normalize(),n[4].setComponents(l-o,f-u,g-x,v-y).normalize(),e===zn)n[5].setComponents(l+o,f+u,g+x,v+y).normalize();else if(e===Br)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Mr.x=i.normal.x>0?t.max.x:t.min.x,Mr.y=i.normal.y>0?t.max.y:t.min.y,Mr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rd(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var oi=class s extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*f-a;for(let y=0;y<c;y++){let v=y*u-r;p.push(v,-M,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let y=M+c*m,v=M+c*(m+1),T=M+1+c*(m+1),w=M+1+c*m;d.push(y,v,w),d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
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
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,sp=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:dd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:yd,bumpmap_pars_fragment:_d,clipping_planes_fragment:Md,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Sd,color_fragment:Ed,color_pars_fragment:Td,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Ld,displacementmap_vertex:Dd,emissivemap_fragment:zd,emissivemap_pars_fragment:Nd,colorspace_fragment:Ud,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:kd,envmap_pars_fragment:Bd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Kd,envmap_vertex:Vd,fog_vertex:Gd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Yd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Zd,lights_pars_begin:Jd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:fp,map_pars_fragment:dp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:xp,morphinstance_vertex:vp,morphcolor_vertex:yp,morphnormal_vertex:_p,morphtarget_pars_vertex:Mp,morphtarget_vertex:bp,normal_fragment_begin:wp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:Tp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:zp,premultiplied_alpha_fragment:Np,project_vertex:Up,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:jp,skinnormal_vertex:Yp,specularmap_fragment:$p,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Kp,transmission_fragment:Qp,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:vm,meshbasic_vert:ym,meshbasic_frag:_m,meshlambert_vert:Mm,meshlambert_frag:bm,meshmatcap_vert:wm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Im,meshtoon_frag:Lm,points_vert:Dm,points_frag:zm,shadow_vert:Nm,shadow_frag:Um,sprite_vert:Fm,sprite_frag:Om},_t={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},_n={basic:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Oe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Oe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Oe([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Oe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Oe([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Oe([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Oe([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Oe([_t.lights,_t.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};_n.physical={uniforms:Oe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var br={r:0,b:0,g:0},_i=new un,km=new se;function Bm(s,t,e,n,i,r,a){let o=new Ht(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function x(M){let y=!1,v=p(M);v===null?m(o,l):v&&v.isColor&&(m(v,1),y=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){let v=p(y);v&&(v.isCubeTexture||v.mapping===fa)?(h===void 0&&(h=new ie(new Ii(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:us(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(y.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(_i)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ie(new oi(2,2),new me({name:"BackgroundMaterial",uniforms:us(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(br,uu(s)),n.buffers.color.setClear(br.r,br.g,br.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:x,addToRenderList:g}}function Hm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(_,C,z,D,k){let P=!1,L=u(D,z,C);r!==L&&(r=L,c(r.object)),P=d(_,D,z,k),P&&p(_,D,z,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,v(_,C,z,D),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,C,z){let D=z.wireframe===!0,k=n[_.id];k===void 0&&(k={},n[_.id]=k);let P=k[C.id];P===void 0&&(P={},k[C.id]=P);let L=P[D];return L===void 0&&(L=f(l()),P[D]=L),L}function f(_){let C=[],z=[],D=[];for(let k=0;k<e;k++)C[k]=0,z[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:D,object:_,attributes:{},index:null}}function d(_,C,z,D){let k=r.attributes,P=C.attributes,L=0,O=z.getAttributes();for(let U in O)if(O[U].location>=0){let j=k[U],st=P[U];if(st===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),j===void 0||j.attribute!==st||st&&j.data!==st.data)return!0;L++}return r.attributesNum!==L||r.index!==D}function p(_,C,z,D){let k={},P=C.attributes,L=0,O=z.getAttributes();for(let U in O)if(O[U].location>=0){let j=P[U];j===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));let st={};st.attribute=j,j&&j.data&&(st.data=j.data),k[U]=st,L++}r.attributes=k,r.attributesNum=L,r.index=D}function x(){let _=r.newAttributes;for(let C=0,z=_.length;C<z;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){let z=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;z[_]=1,D[_]===0&&(s.enableVertexAttribArray(_),D[_]=1),k[_]!==C&&(s.vertexAttribDivisor(_,C),k[_]=C)}function M(){let _=r.newAttributes,C=r.enabledAttributes;for(let z=0,D=C.length;z<D;z++)C[z]!==_[z]&&(s.disableVertexAttribArray(z),C[z]=0)}function y(_,C,z,D,k,P,L){L===!0?s.vertexAttribIPointer(_,C,z,k,P):s.vertexAttribPointer(_,C,z,D,k,P)}function v(_,C,z,D){x();let k=D.attributes,P=z.getAttributes(),L=C.defaultAttributeValues;for(let O in P){let U=P[O];if(U.location>=0){let Y=k[O];if(Y===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){let j=Y.normalized,st=Y.itemSize,it=t.get(Y);if(it===void 0)continue;let xt=it.buffer,W=it.type,K=it.bytesPerElement,ut=W===s.INT||W===s.UNSIGNED_INT||Y.gpuType===ac;if(Y.isInterleavedBufferAttribute){let at=Y.data,tt=at.stride,vt=Y.offset;if(at.isInstancedInterleavedBuffer){for(let Et=0;Et<U.locationSize;Et++)m(U.location+Et,at.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Et=0;Et<U.locationSize;Et++)g(U.location+Et);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Et=0;Et<U.locationSize;Et++)y(U.location+Et,st/U.locationSize,W,j,tt*K,(vt+st/U.locationSize*Et)*K,ut)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<U.locationSize;at++)m(U.location+at,Y.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<U.locationSize;at++)g(U.location+at);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let at=0;at<U.locationSize;at++)y(U.location+at,st/U.locationSize,W,j,st*K,st/U.locationSize*at*K,ut)}}else if(L!==void 0){let j=L[O];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(U.location,j);break;case 3:s.vertexAttrib3fv(U.location,j);break;case 4:s.vertexAttrib4fv(U.location,j);break;default:s.vertexAttrib1fv(U.location,j)}}}}M()}function T(){S();for(let _ in n){let C=n[_];for(let z in C){let D=C[z];for(let k in D)h(D[k].object),delete D[k];delete C[z]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;let C=n[_.id];for(let z in C){let D=C[z];for(let k in D)h(D[k].object),delete D[k];delete C[z]}delete n[_.id]}function A(_){for(let C in n){let z=n[C];if(z[_.id]===void 0)continue;let D=z[_.id];for(let k in D)h(D[k].object),delete D[k];delete z[_.id]}}function S(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Vm(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==hn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let S=A===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Un&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bn&&!S)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function Wm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Dn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,y=M*4,v=m.clippingState||null;l.value=v,v=h(p,f,y,d);for(let T=0;T!==y;++T)v[T]=e[T];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=d;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Xm(s){let t=new WeakMap;function e(a,o){return o===Bo?a.mapping=as:o===Ho&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bo||o===Ho)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bl(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wl=class extends qr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,uh=[.125,.215,.35,.446,.526,.582],Ei=20,Mo=new wl,fh=new Ht,bo=null,wo=0,So=0,Eo=!1,bi=(1+Math.sqrt(5))/2,Ki=1/bi,dh=[new B(-bi,Ki,0),new B(bi,Ki,0),new B(-Ki,0,bi),new B(Ki,0,bi),new B(0,bi,-Ki),new B(0,bi,Ki),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],$r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,wo,So),this._renderer.xr.enabled=Eo,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Zs,format:hn,colorSpace:li,depthBuffer:!1},i=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=jm(r,t,e)}return i}_compileMaterial(t){let e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,n,i){let o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(fh),h.toneMapping=Sn,h.autoClear=!1;let d=new fn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),p=new ie(new Ii,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(fh),x=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;wr(i,M*y,m>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===as||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Mo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dh[(i-r-1)%dh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ie(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ei-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Ei;g>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);let m=[],M=0;for(let A=0;A<Ei;++A){let S=A/x,b=Math.exp(-S*S/2);m.push(b),A===0?M+=b:A<g&&(M+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;let v=this._sizeLods[i],T=3*v*(i>y-ts?i-y+ts:0),w=4*(this._cubeSize-v);wr(e,T,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Mo)}};function qm(s){let t=[],e=[],n=[],i=s,r=s-ts+1+uh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ts?l=uh[a-s+ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*d),y=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let w=0;w<d;w++){let A=w%3*2/3-1,S=w>2?0:-1,b=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];M.set(b,x*p*w),y.set(f,g*p*w);let _=[w,w,w,w,w,w];v.set(_,m*p*w)}let T=new xe;T.setAttribute("position",new qt(M,x)),T.setAttribute("uv",new qt(y,g)),T.setAttribute("faceIndex",new qt(v,m)),t.push(T),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(s,t,e){let n=new Fn(s,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jm(s,t,e){let n=new Float32Array(Ei),i=new B(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function mh(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function gh(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function Ym(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bo||l===Ho,h=l===as||l===os;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new $r(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new $r(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $m(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zm(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let y=0,v=M.length;y<v;y+=3){let T=M[y+0],w=M[y+1],A=M[y+2];f.push(T,w,w,A,A,T)}}else if(p!==void 0){let M=p.array;x=p.version;for(let y=0,v=M.length/3-1;y<v;y+=3){let T=y+0,w=y+1,A=y+2;f.push(T,w,w,A,A,T)}}else return;let g=new(cu(f)?Xr:Wr)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Jm(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let m=0;for(let M=0;M<p;M++)m+=d[M]*x[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Km(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qm(s,t,e){let n=new WeakMap,i=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*T*4*u),A=new Gr(w,v,T,u);A.type=bn,A.needsUpdate=!0;let S=y*4;for(let _=0;_<u;_++){let C=g[_],z=m[_],D=M[_],k=v*T*4*_;for(let P=0;P<C.count;P++){let L=P*S;d===!0&&(i.fromBufferAttribute(C,P),w[k+L+0]=i.x,w[k+L+1]=i.y,w[k+L+2]=i.z,w[k+L+3]=0),p===!0&&(i.fromBufferAttribute(z,P),w[k+L+4]=i.x,w[k+L+5]=i.y,w[k+L+6]=i.z,w[k+L+7]=0),x===!0&&(i.fromBufferAttribute(D,P),w[k+L+8]=i.x,w[k+L+9]=i.y,w[k+L+10]=i.z,w[k+L+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new Lt(v,T)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function t0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Zr=class extends Ye{constructor(t,e,n,i,r,a,o,l,c,h=ns){if(h!==ns&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Pi),n===void 0&&h===cs&&(n=ls),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},du=new Ye,xh=new Zr(1,1),pu=new Gr,mu=new _l,gu=new jr,vh=[],yh=[],_h=new Float32Array(16),Mh=new Float32Array(9),bh=new Float32Array(4);function xs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=vh[i];if(r===void 0&&(r=new Float32Array(i),vh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function pa(s,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function e0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function r0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;bh.set(n),s.uniformMatrix2fv(this.addr,!1,bh),Ae(e,n)}}function a0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Mh.set(n),s.uniformMatrix3fv(this.addr,!1,Mh),Ae(e,n)}}function o0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;_h.set(n),s.uniformMatrix4fv(this.addr,!1,_h),Ae(e,n)}}function l0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function f0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function g0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xh.compareFunction=lu,r=xh):r=du,e.setTexture2D(t||r,i)}function x0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mu,i)}function v0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gu,i)}function y0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pu,i)}function _0(s){switch(s){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return y0}}function M0(s,t){s.uniform1fv(this.addr,t)}function b0(s,t){let e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function w0(s,t){let e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function S0(s,t){let e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function E0(s,t){let e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function T0(s,t){let e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function A0(s,t){let e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function R0(s,t){s.uniform1iv(this.addr,t)}function C0(s,t){s.uniform2iv(this.addr,t)}function P0(s,t){s.uniform3iv(this.addr,t)}function I0(s,t){s.uniform4iv(this.addr,t)}function L0(s,t){s.uniform1uiv(this.addr,t)}function D0(s,t){s.uniform2uiv(this.addr,t)}function z0(s,t){s.uniform3uiv(this.addr,t)}function N0(s,t){s.uniform4uiv(this.addr,t)}function U0(s,t,e){let n=this.cache,i=t.length,r=pa(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||du,r[a])}function F0(s,t,e){let n=this.cache,i=t.length,r=pa(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mu,r[a])}function O0(s,t,e){let n=this.cache,i=t.length,r=pa(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gu,r[a])}function k0(s,t,e){let n=this.cache,i=t.length,r=pa(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pu,r[a])}function B0(s){switch(s){case 5126:return M0;case 35664:return b0;case 35665:return w0;case 35666:return S0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return L0;case 36294:return D0;case 36295:return z0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return k0}}var Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}},El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},To=/(\w+)(\])?(\[|\.)?/g;function wh(s,t){s.seq.push(t),s.map[t.id]=t}function H0(s,t,e){let n=s.name,i=n.length;for(To.lastIndex=0;;){let r=To.exec(n),a=To.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wh(e,c===void 0?new Sl(o,s,t):new El(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Tl(o),wh(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);H0(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Sh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var V0=37297,G0=0;function W0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Eh=new jt;function X0(s){te._getMatrix(Eh,te.workingColorSpace,s);let t=`mat3( ${Eh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case da:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Th(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+W0(s.getShaderSource(t),a)}else return i}function q0(s,t){let e=X0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(s,t){let e;switch(t){case xf:e="Linear";break;case vf:e="Reinhard";break;case yf:e="Cineon";break;case _f:e="ACESFilmic";break;case bf:e="AgX";break;case wf:e="Neutral";break;case Mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sr=new B;function Y0(){te.getLuminanceCoefficients(Sr);let s=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Z0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Os(s){return s!==""}function Ah(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(s){return s.replace(K0,tg)}var Q0=new Map;function tg(s,t){let e=Yt[t];if(e===void 0){let n=Q0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(s){return s.replace(eg,ng)}function ng(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ph(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ig(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function ag(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function og(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ig(e),c=sg(e),h=rg(e),u=ag(e),f=og(e),d=$0(e),p=Z0(r),x=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Os).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Os).join(`
`),m.length>0&&(m+=`
`)):(g=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,q0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=Al(a),a=Ah(a,e),a=Rh(a,e),o=Al(o),o=Ah(o,e),o=Rh(o,e),a=Ch(a),o=Ch(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=M+g+a,v=M+m+o,T=Sh(i,i.VERTEX_SHADER,y),w=Sh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(C){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(T).trim(),k=i.getShaderInfoLog(w).trim(),P=!0,L=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(P=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,w);else{let O=Th(i,T,"vertex"),U=Th(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+O+`
`+U)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||k==="")&&(L=!1);L&&(C.diagnostics={runnable:P,programLog:z,vertexShader:{log:D,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(T),i.deleteShader(w),S=new ss(i,x),b=J0(i,x)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,V0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var cg=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}};function hg(s,t,e,n,i,r,a){let o=new Gs,l=new Rl,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,_,C,z,D){let k=z.fog,P=D.geometry,L=b.isMeshStandardMaterial?z.environment:null,O=(b.isMeshStandardMaterial?e:t).get(b.envMap||L),U=O&&O.mapping===fa?O.image.height:null,Y=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,st=j!==void 0?j.length:0,it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let xt,W,K,ut;if(Y){let ne=_n[Y];xt=ne.vertexShader,W=ne.fragmentShader}else xt=b.vertexShader,W=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),ut=l.getFragmentShaderID(b);let at=s.getRenderTarget(),tt=s.state.buffers.depth.getReversed(),vt=D.isInstancedMesh===!0,Et=D.isBatchedMesh===!0,Vt=!!b.map,Pt=!!b.matcap,zt=!!O,F=!!b.aoMap,Zt=!!b.lightMap,Nt=!!b.bumpMap,Ft=!!b.normalMap,gt=!!b.displacementMap,Wt=!!b.emissiveMap,Rt=!!b.metalnessMap,I=!!b.roughnessMap,E=b.anisotropy>0,X=b.clearcoat>0,J=b.dispersion>0,nt=b.iridescence>0,et=b.sheen>0,lt=b.transmission>0,q=E&&!!b.anisotropyMap,ft=X&&!!b.clearcoatMap,Dt=X&&!!b.clearcoatNormalMap,ot=X&&!!b.clearcoatRoughnessMap,yt=nt&&!!b.iridescenceMap,St=nt&&!!b.iridescenceThicknessMap,Ut=et&&!!b.sheenColorMap,wt=et&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Ot=!!b.specularColorMap,Jt=!!b.specularIntensityMap,H=lt&&!!b.transmissionMap,mt=lt&&!!b.thicknessMap,Q=!!b.gradientMap,rt=!!b.alphaMap,bt=b.alphaTest>0,Mt=!!b.alphaHash,Bt=!!b.extensions,he=Sn;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=s.toneMapping);let Se={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:xt,fragmentShader:W,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Et,batchingColor:Et&&D._colorsTexture!==null,instancing:vt,instancingColor:vt&&D.instanceColor!==null,instancingMorph:vt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:li,alphaToCoverage:!!b.alphaToCoverage,map:Vt,matcap:Pt,envMap:zt,envMapMode:zt&&O.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:Zt,bumpMap:Nt,normalMap:Ft,displacementMap:f&&gt,emissiveMap:Wt,normalMapObjectSpace:Ft&&b.normalMapType===Rf,normalMapTangentSpace:Ft&&b.normalMapType===Af,metalnessMap:Rt,roughnessMap:I,anisotropy:E,anisotropyMap:q,clearcoat:X,clearcoatMap:ft,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ot,dispersion:J,iridescence:nt,iridescenceMap:yt,iridescenceThicknessMap:St,sheen:et,sheenColorMap:Ut,sheenRoughnessMap:wt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:Jt,transmission:lt,transmissionMap:H,thicknessMap:mt,gradientMap:Q,opaque:b.transparent===!1&&b.blending===ii&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:bt,alphaHash:Mt,combine:b.combine,mapUv:Vt&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:Zt&&x(b.lightMap.channel),bumpMapUv:Nt&&x(b.bumpMap.channel),normalMapUv:Ft&&x(b.normalMap.channel),displacementMapUv:gt&&x(b.displacementMap.channel),emissiveMapUv:Wt&&x(b.emissiveMap.channel),metalnessMapUv:Rt&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:q&&x(b.anisotropyMap.channel),clearcoatMapUv:ft&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(b.sheenRoughnessMap.channel),specularMapUv:Xt&&x(b.specularMap.channel),specularColorMapUv:Ot&&x(b.specularColorMap.channel),specularIntensityMapUv:Jt&&x(b.specularIntensityMap.channel),transmissionMapUv:H&&x(b.transmissionMap.channel),thicknessMapUv:mt&&x(b.thicknessMap.channel),alphaMapUv:rt&&x(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ft||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Vt||rt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:tt,skinning:D.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:it,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Vt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:Wt&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qe,flipSided:b.side===Ue,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)_.push(C),_.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(_,b),y(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function y(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let _=p[b.type],C;if(_){let z=_n[_];C=td.clone(z.uniforms)}else C=b.uniforms;return C}function T(b,_){let C;for(let z=0,D=h.length;z<D;z++){let k=h[z];if(k.cacheKey===_){C=k,++C.usedTimes;break}}return C===void 0&&(C=new lg(s,_,b,r),h.push(C)),C}function w(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:S}}function ug(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function fg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,p,x,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,f,d,p,x,g){let m=a(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,p,x,g){let m=a(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(f||Ih),i.length>1&&i.sort(f||Ih)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function dg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Lh,s.set(n,[a])):i>=r.length?(a=new Lh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function pg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ht};break;case"SpotLight":e={position:new B,direction:new B,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function mg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var gg=0;function xg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vg(s){let t=new pg,e=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new se,a=new se;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,M=0,y=0,v=0,T=0,w=0,A=0;c.sort(xg);for(let b=0,_=c.length;b<_;b++){let C=c[b],z=C.color,D=C.intensity,k=C.distance,P=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*D,u+=z.g*D,f+=z.b*D;else if(C.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(C.sh.coefficients[L],D);A++}else if(C.isDirectionalLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,U=e.get(C);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=P,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=L,d++}else if(C.isSpotLight){let L=t.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(z).multiplyScalar(D),L.distance=k,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,n.spot[x]=L;let O=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=O.matrix,C.castShadow){let U=e.get(C);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=P,v++}x++}else if(C.isRectAreaLight){let L=t.get(C);L.color.copy(z).multiplyScalar(D),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=L,g++}else if(C.isPointLight){let L=t.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){let O=C.shadow,U=e.get(C);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[p]=U,n.pointShadowMap[p]=P,n.pointShadowMatrix[p]=C.shadow.matrix,y++}n.point[p]=L,p++}else if(C.isHemisphereLight){let L=t.get(C);L.skyColor.copy(C.color).multiplyScalar(D),L.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[m]=L,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==d||S.pointLength!==p||S.spotLength!==x||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==M||S.numPointShadows!==y||S.numSpotShadows!==v||S.numSpotMaps!==T||S.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,S.directionalLength=d,S.pointLength=p,S.spotLength=x,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=M,S.numPointShadows=y,S.numSpotShadows=v,S.numSpotMaps=T,S.numLightProbes=A,n.version=gg++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let y=c[m];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Dh(s){let t=new vg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Dh(s),t.set(i,[o])):r>=a.length?(o=new Dh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pl=class extends ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`;function bg(s,t,e){let n=new Yr,i=new Lt,r=new Lt,a=new ve,o=new Pl({depthPacking:Tf}),l=new Il,c={},h=e.maxTextureSize,u={[si]:Ue,[Ue]:si,[qe]:qe},f=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:_g,fragmentShader:Mg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new xe;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ie(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let m=this.type;this.render=function(w,A,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),z=s.state;z.setBlending(ni),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let D=m!==Ln&&this.type===Ln,k=m===Ln&&this.type!==Ln;for(let P=0,L=w.length;P<L;P++){let O=w[P],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let Y=U.getFrameExtents();if(i.multiply(Y),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null||D===!0||k===!0){let st=this.type!==Ln?{minFilter:je,magFilter:je}:{};U.map!==null&&U.map.dispose(),U.map=new Fn(i.x,i.y,st),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();let j=U.getViewportCount();for(let st=0;st<j;st++){let it=U.getViewport(st);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),z.viewport(a),U.updateMatrices(O,st),n=U.getFrustum(),v(A,S,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Ln&&M(U,S),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,_,C)};function M(w,A){let S=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,S,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,S,d,x,null)}function y(w,A,S,b){let _=null,C=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)_=C;else if(_=S.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=_.uuid,D=A.uuid,k=c[z];k===void 0&&(k={},c[z]=k);let P=k[D];P===void 0&&(P=_.clone(),k[D]=P,A.addEventListener("dispose",T)),_=P}if(_.visible=A.visible,_.wireframe=A.wireframe,b===Ln?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=s.properties.get(_);z.light=S}return _}function v(w,A,S,b,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Ln)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let D=t.update(w),k=w.material;if(Array.isArray(k)){let P=D.groups;for(let L=0,O=P.length;L<O;L++){let U=P[L],Y=k[U.materialIndex];if(Y&&Y.visible){let j=y(w,Y,b,_);w.onBeforeShadow(s,w,A,S,D,j,U),s.renderBufferDirect(S,null,D,j,w,U),w.onAfterShadow(s,w,A,S,D,j,U)}}}else if(k.visible){let P=y(w,k,b,_);w.onBeforeShadow(s,w,A,S,D,P,null),s.renderBufferDirect(S,null,D,P,w,null),w.onAfterShadow(s,w,A,S,D,P,null)}}let z=w.children;for(let D=0,k=z.length;D<k;D++)v(z[D],A,S,b,_)}function T(w){w.target.removeEventListener("dispose",T);for(let S in c){let b=c[S],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var wg={[Do]:zo,[No]:Oo,[Uo]:ko,[rs]:Fo,[zo]:Do,[Oo]:No,[ko]:Uo,[Fo]:rs};function Sg(s,t){function e(){let H=!1,mt=new ve,Q=null,rt=new ve(0,0,0,0);return{setMask:function(bt){Q!==bt&&!H&&(s.colorMask(bt,bt,bt,bt),Q=bt)},setLocked:function(bt){H=bt},setClear:function(bt,Mt,Bt,he,Se){Se===!0&&(bt*=he,Mt*=he,Bt*=he),mt.set(bt,Mt,Bt,he),rt.equals(mt)===!1&&(s.clearColor(bt,Mt,Bt,he),rt.copy(mt))},reset:function(){H=!1,Q=null,rt.set(-1,0,0,0)}}}function n(){let H=!1,mt=!1,Q=null,rt=null,bt=null;return{setReversed:function(Mt){if(mt!==Mt){let Bt=t.get("EXT_clip_control");mt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let he=bt;bt=null,this.setClear(he)}mt=Mt},getReversed:function(){return mt},setTest:function(Mt){Mt?at(s.DEPTH_TEST):tt(s.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!H&&(s.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(mt&&(Mt=wg[Mt]),rt!==Mt){switch(Mt){case Do:s.depthFunc(s.NEVER);break;case zo:s.depthFunc(s.ALWAYS);break;case No:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case Uo:s.depthFunc(s.EQUAL);break;case Fo:s.depthFunc(s.GEQUAL);break;case Oo:s.depthFunc(s.GREATER);break;case ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=Mt}},setLocked:function(Mt){H=Mt},setClear:function(Mt){bt!==Mt&&(mt&&(Mt=1-Mt),s.clearDepth(Mt),bt=Mt)},reset:function(){H=!1,Q=null,rt=null,bt=null,mt=!1}}}function i(){let H=!1,mt=null,Q=null,rt=null,bt=null,Mt=null,Bt=null,he=null,Se=null;return{setTest:function(ne){H||(ne?at(s.STENCIL_TEST):tt(s.STENCIL_TEST))},setMask:function(ne){mt!==ne&&!H&&(s.stencilMask(ne),mt=ne)},setFunc:function(ne,Be,Ee){(Q!==ne||rt!==Be||bt!==Ee)&&(s.stencilFunc(ne,Be,Ee),Q=ne,rt=Be,bt=Ee)},setOp:function(ne,Be,Ee){(Mt!==ne||Bt!==Be||he!==Ee)&&(s.stencilOp(ne,Be,Ee),Mt=ne,Bt=Be,he=Ee)},setLocked:function(ne){H=ne},setClear:function(ne){Se!==ne&&(s.clearStencil(ne),Se=ne)},reset:function(){H=!1,mt=null,Q=null,rt=null,bt=null,Mt=null,Bt=null,he=null,Se=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,y=null,v=null,T=null,w=null,A=new Ht(0,0,0),S=0,b=!1,_=null,C=null,z=null,D=null,k=null,P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=O>=2);let Y=null,j={},st=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),xt=new ve().fromArray(st),W=new ve().fromArray(it);function K(H,mt,Q,rt){let bt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(H,Mt),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<Q;Bt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(mt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return Mt}let ut={};ut[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(rs),Nt(!1),Ft(Uc),at(s.CULL_FACE),F(ni);function at(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function tt(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function vt(H,mt){return u[H]!==mt?(s.bindFramebuffer(H,mt),u[H]=mt,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function Et(H,mt){let Q=d,rt=!1;if(H){Q=f.get(mt),Q===void 0&&(Q=[],f.set(mt,Q));let bt=H.textures;if(Q.length!==bt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Bt=bt.length;Mt<Bt;Mt++)Q[Mt]=s.COLOR_ATTACHMENT0+Mt;Q.length=bt.length,rt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,rt=!0);rt&&s.drawBuffers(Q)}function Vt(H){return p!==H?(s.useProgram(H),p=H,!0):!1}let Pt={[wi]:s.FUNC_ADD,[Ju]:s.FUNC_SUBTRACT,[Ku]:s.FUNC_REVERSE_SUBTRACT};Pt[Qu]=s.MIN,Pt[tf]=s.MAX;let zt={[ef]:s.ZERO,[nf]:s.ONE,[sf]:s.SRC_COLOR,[Io]:s.SRC_ALPHA,[hf]:s.SRC_ALPHA_SATURATE,[lf]:s.DST_COLOR,[af]:s.DST_ALPHA,[rf]:s.ONE_MINUS_SRC_COLOR,[Lo]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[of]:s.ONE_MINUS_DST_ALPHA,[uf]:s.CONSTANT_COLOR,[ff]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[pf]:s.ONE_MINUS_CONSTANT_ALPHA};function F(H,mt,Q,rt,bt,Mt,Bt,he,Se,ne){if(H===ni){x===!0&&(tt(s.BLEND),x=!1);return}if(x===!1&&(at(s.BLEND),x=!0),H!==Zu){if(H!==g||ne!==b){if((m!==wi||v!==wi)&&(s.blendEquation(s.FUNC_ADD),m=wi,v=wi),ne)switch(H){case ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ci:s.blendFunc(s.ONE,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ci:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,y=null,T=null,w=null,A.set(0,0,0),S=0,g=H,b=ne}return}bt=bt||mt,Mt=Mt||Q,Bt=Bt||rt,(mt!==m||bt!==v)&&(s.blendEquationSeparate(Pt[mt],Pt[bt]),m=mt,v=bt),(Q!==M||rt!==y||Mt!==T||Bt!==w)&&(s.blendFuncSeparate(zt[Q],zt[rt],zt[Mt],zt[Bt]),M=Q,y=rt,T=Mt,w=Bt),(he.equals(A)===!1||Se!==S)&&(s.blendColor(he.r,he.g,he.b,Se),A.copy(he),S=Se),g=H,b=!1}function Zt(H,mt){H.side===qe?tt(s.CULL_FACE):at(s.CULL_FACE);let Q=H.side===Ue;mt&&(Q=!Q),Nt(Q),H.blending===ii&&H.transparent===!1?F(ni):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let rt=H.stencilWrite;o.setTest(rt),rt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(H){_!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),_=H)}function Ft(H){H!==ju?(at(s.CULL_FACE),H!==C&&(H===Uc?s.cullFace(s.BACK):H===Yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):tt(s.CULL_FACE),C=H}function gt(H){H!==z&&(L&&s.lineWidth(H),z=H)}function Wt(H,mt,Q){H?(at(s.POLYGON_OFFSET_FILL),(D!==mt||k!==Q)&&(s.polygonOffset(mt,Q),D=mt,k=Q)):tt(s.POLYGON_OFFSET_FILL)}function Rt(H){H?at(s.SCISSOR_TEST):tt(s.SCISSOR_TEST)}function I(H){H===void 0&&(H=s.TEXTURE0+P-1),Y!==H&&(s.activeTexture(H),Y=H)}function E(H,mt,Q){Q===void 0&&(Y===null?Q=s.TEXTURE0+P-1:Q=Y);let rt=j[Q];rt===void 0&&(rt={type:void 0,texture:void 0},j[Q]=rt),(rt.type!==H||rt.texture!==mt)&&(Y!==Q&&(s.activeTexture(Q),Y=Q),s.bindTexture(H,mt||ut[H]),rt.type=H,rt.texture=mt)}function X(){let H=j[Y];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(H){xt.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),xt.copy(H))}function wt(H){W.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),W.copy(H))}function Xt(H,mt){let Q=c.get(mt);Q===void 0&&(Q=new WeakMap,c.set(mt,Q));let rt=Q.get(H);rt===void 0&&(rt=s.getUniformBlockIndex(mt,H.name),Q.set(H,rt))}function Ot(H,mt){let rt=c.get(mt).get(H);l.get(mt)!==rt&&(s.uniformBlockBinding(mt,rt,H.__bindingPointIndex),l.set(mt,rt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,j={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,M=null,y=null,v=null,T=null,w=null,A=new Ht(0,0,0),S=0,b=!1,_=null,C=null,z=null,D=null,k=null,xt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:tt,bindFramebuffer:vt,drawBuffers:Et,useProgram:Vt,setBlending:F,setMaterial:Zt,setFlipSided:Nt,setCullFace:Ft,setLineWidth:gt,setPolygonOffset:Wt,setScissorTest:Rt,activeTexture:I,bindTexture:E,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:yt,texImage3D:St,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Dt,texStorage3D:ot,texSubImage2D:et,texSubImage3D:lt,compressedTexSubImage2D:q,compressedTexSubImage3D:ft,scissor:Ut,viewport:wt,reset:Jt}}function zh(s,t,e,n){let i=Eg(n);switch(e){case nu:return s*t;case su:return s*t;case ru:return s*t*2;case cc:return s*t/i.components*i.byteLength;case hc:return s*t/i.components*i.byteLength;case au:return s*t*2/i.components*i.byteLength;case uc:return s*t*2/i.components*i.byteLength;case iu:return s*t*3/i.components*i.byteLength;case hn:return s*t*4/i.components*i.byteLength;case fc:return s*t*4/i.components*i.byteLength;case zr:case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:case jo:return Math.max(s,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(s,8)*Math.max(t,8)/2;case Yo:case $o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Or:case ul:case fl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ou:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eg(s){switch(s){case Un:case Qh:return{byteLength:1,components:1};case Vs:case tu:case Zs:return{byteLength:2,components:1};case oc:case lc:return{byteLength:2,components:4};case Pi:case ac:case bn:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Tg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return d?new OffscreenCanvas(I,E):Hr("canvas")}function x(I,E,X){let J=1,nt=Rt(I);if((nt.width>X||nt.height>X)&&(J=X/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let et=Math.floor(J*nt.width),lt=Math.floor(J*nt.height);u===void 0&&(u=p(et,lt));let q=E?p(et,lt):u;return q.width=et,q.height=lt,q.getContext("2d").drawImage(I,0,0,et,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+et+"x"+lt+")."),q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,E,X,J,nt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let et=E;if(E===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),E===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),E===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),E===s.RGBA){let lt=nt?da:te.getTransfer(J);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=lt===oe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(I,E){let X;return I?E===null||E===Pi||E===ls?X=s.DEPTH24_STENCIL8:E===bn?X=s.DEPTH32F_STENCIL8:E===Vs&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===ls?X=s.DEPTH_COMPONENT24:E===bn?X=s.DEPTH_COMPONENT32F:E===Vs&&(X=s.DEPTH_COMPONENT16),X}function T(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==je&&I.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),S(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),_(E)}function S(I){let E=n.get(I);if(E.__webglInit===void 0)return;let X=I.source,J=f.get(X);if(J){let nt=J[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(I),Object.keys(J).length===0&&f.delete(X)}n.remove(I)}function b(I){let E=n.get(I);s.deleteTexture(E.__webglTexture);let X=I.source,J=f.get(X);delete J[E.__cacheKey],a.memory.textures--}function _(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let nt=0;nt<E.__webglFramebuffer[J].length;nt++)s.deleteFramebuffer(E.__webglFramebuffer[J][nt]);else s.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)s.deleteFramebuffer(E.__webglFramebuffer[J]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=I.textures;for(let J=0,nt=X.length;J<nt;J++){let et=n.get(X[J]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(I)}let C=0;function z(){C=0}function D(){let I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function k(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function P(I,E){let X=n.get(I);if(I.isVideoTexture&&gt(I),I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){let J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,I,E);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function L(I,E){let X=n.get(I);if(I.version>0&&X.__version!==I.version){W(X,I,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function O(I,E){let X=n.get(I);if(I.version>0&&X.__version!==I.version){W(X,I,E);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function U(I,E){let X=n.get(I);if(I.version>0&&X.__version!==I.version){K(X,I,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}let Y={[Vo]:s.REPEAT,[Ti]:s.CLAMP_TO_EDGE,[Go]:s.MIRRORED_REPEAT},j={[je]:s.NEAREST,[Sf]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Za]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},st={[Cf]:s.NEVER,[Nf]:s.ALWAYS,[Pf]:s.LESS,[lu]:s.LEQUAL,[If]:s.EQUAL,[zf]:s.GEQUAL,[Lf]:s.GREATER,[Df]:s.NOTEQUAL};function it(I,E){if(E.type===bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===Za||E.magFilter===sr||E.magFilter===Ai||E.minFilter===Mn||E.minFilter===Za||E.minFilter===sr||E.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Y[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Y[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Y[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,j[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,st[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===je||E.minFilter!==sr&&E.minFilter!==Ai||E.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xt(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let J=E.source,nt=f.get(J);nt===void 0&&(nt={},f.set(J,nt));let et=k(E);if(et!==I.__cacheKey){nt[et]===void 0&&(nt[et]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),nt[et].usedTimes++;let lt=nt[I.__cacheKey];lt!==void 0&&(nt[I.__cacheKey].usedTimes--,lt.usedTimes===0&&b(E)),I.__cacheKey=et,I.__webglTexture=nt[et].texture}return X}function W(I,E,X){let J=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=s.TEXTURE_3D);let nt=xt(I,E),et=E.source;e.bindTexture(J,I.__webglTexture,s.TEXTURE0+X);let lt=n.get(et);if(et.version!==lt.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);let q=te.getPrimaries(te.workingColorSpace),ft=E.colorSpace===ei?null:te.getPrimaries(E.colorSpace),Dt=E.colorSpace===ei||q===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ot=x(E.image,!1,i.maxTextureSize);ot=Wt(E,ot);let yt=r.convert(E.format,E.colorSpace),St=r.convert(E.type),Ut=y(E.internalFormat,yt,St,E.colorSpace,E.isVideoTexture);it(J,E);let wt,Xt=E.mipmaps,Ot=E.isVideoTexture!==!0,Jt=lt.__version===void 0||nt===!0,H=et.dataReady,mt=T(E,ot);if(E.isDepthTexture)Ut=v(E.format===cs,E.type),Jt&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ut,ot.width,ot.height,0,yt,St,null));else if(E.isDataTexture)if(Xt.length>0){Ot&&Jt&&e.texStorage2D(s.TEXTURE_2D,mt,Ut,Xt[0].width,Xt[0].height);for(let Q=0,rt=Xt.length;Q<rt;Q++)wt=Xt[Q],Ot?H&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,wt.width,wt.height,yt,St,wt.data):e.texImage2D(s.TEXTURE_2D,Q,Ut,wt.width,wt.height,0,yt,St,wt.data);E.generateMipmaps=!1}else Ot?(Jt&&e.texStorage2D(s.TEXTURE_2D,mt,Ut,ot.width,ot.height),H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,yt,St,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,ot.width,ot.height,0,yt,St,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ut,Xt[0].width,Xt[0].height,ot.depth);for(let Q=0,rt=Xt.length;Q<rt;Q++)if(wt=Xt[Q],E.format!==hn)if(yt!==null)if(Ot){if(H)if(E.layerUpdates.size>0){let bt=zh(wt.width,wt.height,E.format,E.type);for(let Mt of E.layerUpdates){let Bt=wt.data.subarray(Mt*bt/wt.data.BYTES_PER_ELEMENT,(Mt+1)*bt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Mt,wt.width,wt.height,1,yt,Bt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,ot.depth,yt,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ut,wt.width,wt.height,ot.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?H&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,ot.depth,yt,St,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ut,wt.width,wt.height,ot.depth,0,yt,St,wt.data)}else{Ot&&Jt&&e.texStorage2D(s.TEXTURE_2D,mt,Ut,Xt[0].width,Xt[0].height);for(let Q=0,rt=Xt.length;Q<rt;Q++)wt=Xt[Q],E.format!==hn?yt!==null?Ot?H&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,wt.width,wt.height,yt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Ut,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?H&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,wt.width,wt.height,yt,St,wt.data):e.texImage2D(s.TEXTURE_2D,Q,Ut,wt.width,wt.height,0,yt,St,wt.data)}else if(E.isDataArrayTexture)if(Ot){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ut,ot.width,ot.height,ot.depth),H)if(E.layerUpdates.size>0){let Q=zh(ot.width,ot.height,E.format,E.type);for(let rt of E.layerUpdates){let bt=ot.data.subarray(rt*Q/ot.data.BYTES_PER_ELEMENT,(rt+1)*Q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,rt,ot.width,ot.height,1,yt,St,bt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,St,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,yt,St,ot.data);else if(E.isData3DTexture)Ot?(Jt&&e.texStorage3D(s.TEXTURE_3D,mt,Ut,ot.width,ot.height,ot.depth),H&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,St,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,yt,St,ot.data);else if(E.isFramebufferTexture){if(Jt)if(Ot)e.texStorage2D(s.TEXTURE_2D,mt,Ut,ot.width,ot.height);else{let Q=ot.width,rt=ot.height;for(let bt=0;bt<mt;bt++)e.texImage2D(s.TEXTURE_2D,bt,Ut,Q,rt,0,yt,St,null),Q>>=1,rt>>=1}}else if(Xt.length>0){if(Ot&&Jt){let Q=Rt(Xt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Ut,Q.width,Q.height)}for(let Q=0,rt=Xt.length;Q<rt;Q++)wt=Xt[Q],Ot?H&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,yt,St,wt):e.texImage2D(s.TEXTURE_2D,Q,Ut,yt,St,wt);E.generateMipmaps=!1}else if(Ot){if(Jt){let Q=Rt(ot);e.texStorage2D(s.TEXTURE_2D,mt,Ut,Q.width,Q.height)}H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,St,ot)}else e.texImage2D(s.TEXTURE_2D,0,Ut,yt,St,ot);g(E)&&m(J),lt.__version=et.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function K(I,E,X){if(E.image.length!==6)return;let J=xt(I,E),nt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);let et=n.get(nt);if(nt.version!==et.__version||J===!0){e.activeTexture(s.TEXTURE0+X);let lt=te.getPrimaries(te.workingColorSpace),q=E.colorSpace===ei?null:te.getPrimaries(E.colorSpace),ft=E.colorSpace===ei||lt===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!Dt&&!ot?yt[rt]=x(E.image[rt],!0,i.maxCubemapSize):yt[rt]=ot?E.image[rt].image:E.image[rt],yt[rt]=Wt(E,yt[rt]);let St=yt[0],Ut=r.convert(E.format,E.colorSpace),wt=r.convert(E.type),Xt=y(E.internalFormat,Ut,wt,E.colorSpace),Ot=E.isVideoTexture!==!0,Jt=et.__version===void 0||J===!0,H=nt.dataReady,mt=T(E,St);it(s.TEXTURE_CUBE_MAP,E);let Q;if(Dt){Ot&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Xt,St.width,St.height);for(let rt=0;rt<6;rt++){Q=yt[rt].mipmaps;for(let bt=0;bt<Q.length;bt++){let Mt=Q[bt];E.format!==hn?Ut!==null?Ot?H&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Mt.width,Mt.height,Ut,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Xt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Mt.width,Mt.height,Ut,wt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Xt,Mt.width,Mt.height,0,Ut,wt,Mt.data)}}}else{if(Q=E.mipmaps,Ot&&Jt){Q.length>0&&mt++;let rt=Rt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Xt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ot){Ot?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Ut,wt,yt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,yt[rt].width,yt[rt].height,0,Ut,wt,yt[rt].data);for(let bt=0;bt<Q.length;bt++){let Bt=Q[bt].image[rt].image;Ot?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Bt.width,Bt.height,Ut,wt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Xt,Bt.width,Bt.height,0,Ut,wt,Bt.data)}}else{Ot?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ut,wt,yt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,Ut,wt,yt[rt]);for(let bt=0;bt<Q.length;bt++){let Mt=Q[bt];Ot?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Ut,wt,Mt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Xt,Ut,wt,Mt.image[rt])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),et.__version=nt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ut(I,E,X,J,nt,et){let lt=r.convert(X.format,X.colorSpace),q=r.convert(X.type),ft=y(X.internalFormat,lt,q,X.colorSpace),Dt=n.get(E),ot=n.get(X);if(ot.__renderTarget=E,!Dt.__hasExternalTextures){let yt=Math.max(1,E.width>>et),St=Math.max(1,E.height>>et);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,et,ft,yt,St,E.depth,0,lt,q,null):e.texImage2D(nt,et,ft,yt,St,0,lt,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Ft(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,nt,ot.__webglTexture,0,Nt(E)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,nt,ot.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(I,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){let J=E.depthTexture,nt=J&&J.isDepthTexture?J.type:null,et=v(E.stencilBuffer,nt),lt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=Nt(E);Ft(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,et,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,I)}else{let J=E.textures;for(let nt=0;nt<J.length;nt++){let et=J[nt],lt=r.convert(et.format,et.colorSpace),q=r.convert(et.type),ft=y(et.internalFormat,lt,q,et.colorSpace),Dt=Nt(E);X&&Ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ft,E.width,E.height):Ft(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function tt(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),P(E.depthTexture,0);let nt=J.__webglTexture,et=Nt(E);if(E.depthTexture.format===ns)Ft(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(E.depthTexture.format===cs)Ft(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function vt(I){let E=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=J}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");tt(E.__webglFramebuffer,I)}else if(X){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=s.createRenderbuffer(),at(E.__webglDepthbuffer[J],I,!1);else{let nt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),at(E.__webglDepthbuffer,I,!1);else{let J=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(I,E,X){let J=n.get(I);E!==void 0&&ut(J.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&vt(I)}function Vt(I){let E=I.texture,X=n.get(I),J=n.get(E);I.addEventListener("dispose",A);let nt=I.textures,et=I.isWebGLCubeRenderTarget===!0,lt=nt.length>1;if(lt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=E.version,a.memory.textures++),et){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let ft=0;ft<E.mipmaps.length;ft++)X.__webglFramebuffer[q][ft]=s.createFramebuffer()}else X.__webglFramebuffer[q]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)X.__webglFramebuffer[q]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(lt)for(let q=0,ft=nt.length;q<ft;q++){let Dt=n.get(nt[q]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&Ft(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<nt.length;q++){let ft=nt[q];X.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[q]);let Dt=r.convert(ft.format,ft.colorSpace),ot=r.convert(ft.type),yt=y(ft.internalFormat,Dt,ot,ft.colorSpace,I.isXRRenderTarget===!0),St=Nt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,yt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,X.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),at(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),it(s.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)ut(X.__webglFramebuffer[q][ft],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ft);else ut(X.__webglFramebuffer[q],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);g(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let q=0,ft=nt.length;q<ft;q++){let Dt=nt[q],ot=n.get(Dt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),it(s.TEXTURE_2D,Dt),ut(X.__webglFramebuffer,I,Dt,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D,0),g(Dt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,J.__webglTexture),it(q,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)ut(X.__webglFramebuffer[ft],I,E,s.COLOR_ATTACHMENT0,q,ft);else ut(X.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,q,0);g(E)&&m(q),e.unbindTexture()}I.depthBuffer&&vt(I)}function Pt(I){let E=I.textures;for(let X=0,J=E.length;X<J;X++){let nt=E[X];if(g(nt)){let et=M(I),lt=n.get(nt).__webglTexture;e.bindTexture(et,lt),m(et),e.unbindTexture()}}}let zt=[],F=[];function Zt(I){if(I.samples>0){if(Ft(I)===!1){let E=I.textures,X=I.width,J=I.height,nt=s.COLOR_BUFFER_BIT,et=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(I),q=E.length>1;if(q)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);let Dt=n.get(E[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,X,J,0,0,X,J,nt,s.NEAREST),l===!0&&(zt.length=0,F.length=0,zt.push(s.COLOR_ATTACHMENT0+ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(zt.push(et),F.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);let Dt=n.get(E[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Nt(I){return Math.min(i.maxSamples,I.samples)}function Ft(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Wt(I,E){let X=I.colorSpace,J=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==li&&X!==ei&&(te.getTransfer(X)===oe?(J!==hn||nt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=P,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Et,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ft}function Ag(s,t){function e(n,i=ei){let r,a=te.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.BYTE;if(n===tu)return s.SHORT;if(n===Vs)return s.UNSIGNED_SHORT;if(n===ac)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===Zs)return s.HALF_FLOAT;if(n===nu)return s.ALPHA;if(n===iu)return s.RGB;if(n===hn)return s.RGBA;if(n===su)return s.LUMINANCE;if(n===ru)return s.LUMINANCE_ALPHA;if(n===ns)return s.DEPTH_COMPONENT;if(n===cs)return s.DEPTH_STENCIL;if(n===cc)return s.RED;if(n===hc)return s.RED_INTEGER;if(n===au)return s.RG;if(n===uc)return s.RG_INTEGER;if(n===fc)return s.RGBA_INTEGER;if(n===zr||n===Nr||n===Ur||n===Fr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===$o||n===Zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===$o)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===Ko||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Or||n===ul||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Or)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===dl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ll=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},wn=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new me({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zl=class extends ri{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=new Dl,g=e.getContextAttributes(),m=null,M=null,y=[],v=[],T=new Lt,w=null,A=new ke;A.viewport=new ve;let S=new ke;S.viewport=new ve;let b=[A,S],_=new Ll,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=y[W];return K===void 0&&(K=new ks,y[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=y[W];return K===void 0&&(K=new ks,y[W]=K),K.getGripSpace()},this.getHand=function(W){let K=y[W];return K===void 0&&(K=new ks,y[W]=K),K.getHandSpace()};function D(W){let K=v.indexOf(W.inputSource);if(K===-1)return;let ut=y[K];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||a),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let W=0;W<y.length;W++){let K=v[W];K!==null&&(v[W]=null,y[W].disconnect(K))}C=null,z=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,M=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Fn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ut=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?cs:ns,ut=g.stencil?ls:Pi);let tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Fn(f.textureWidth,f.textureHeight,{format:hn,type:Un,depthTexture:new Zr(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function P(W){for(let K=0;K<W.removed.length;K++){let ut=W.removed[K],at=v.indexOf(ut);at>=0&&(v[at]=null,y[at].disconnect(ut))}for(let K=0;K<W.added.length;K++){let ut=W.added[K],at=v.indexOf(ut);if(at===-1){for(let vt=0;vt<y.length;vt++)if(vt>=v.length){v.push(ut),at=vt;break}else if(v[vt]===null){v[vt]=ut,at=vt;break}if(at===-1)break}let tt=y[at];tt&&tt.connect(ut)}}let L=new B,O=new B;function U(W,K,ut){L.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(ut.matrixWorld);let at=L.distanceTo(O),tt=K.projectionMatrix.elements,vt=ut.projectionMatrix.elements,Et=tt[14]/(tt[10]-1),Vt=tt[14]/(tt[10]+1),Pt=(tt[9]+1)/tt[5],zt=(tt[9]-1)/tt[5],F=(tt[8]-1)/tt[0],Zt=(vt[8]+1)/vt[0],Nt=Et*F,Ft=Et*Zt,gt=at/(-F+Zt),Wt=gt*-F;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Wt),W.translateZ(gt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),tt[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Rt=Et+gt,I=Vt+gt,E=Nt-Wt,X=Ft+(at-Wt),J=Pt*Vt/I*Rt,nt=zt*Vt/I*Rt;W.projectionMatrix.makePerspective(E,X,J,nt,Rt,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let K=W.near,ut=W.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),_.near=S.near=A.near=K,_.far=S.far=A.far=ut,(C!==_.near||z!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,z=_.far),A.layers.mask=W.layers.mask|2,S.layers.mask=W.layers.mask|4,_.layers.mask=A.layers.mask|S.layers.mask;let at=W.parent,tt=_.cameras;Y(_,at);for(let vt=0;vt<tt.length;vt++)Y(tt[vt],at);tt.length===2?U(_,A,S):_.projectionMatrix.copy(A.projectionMatrix),j(W,_,at)};function j(W,K,ut){ut===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=xl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let st=null;function it(W,K){if(h=K.getViewerPose(c||a),p=K,h!==null){let ut=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let at=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,at=!0);for(let vt=0;vt<ut.length;vt++){let Et=ut[vt],Vt=null;if(d!==null)Vt=d.getViewport(Et);else{let zt=u.getViewSubImage(f,Et);Vt=zt.viewport,vt===0&&(t.setRenderTargetTextures(M,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(M))}let Pt=b[vt];Pt===void 0&&(Pt=new ke,Pt.layers.enable(vt),Pt.viewport=new ve,b[vt]=Pt),Pt.matrix.fromArray(Et.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Et.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),vt===0&&(_.matrix.copy(Pt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),at===!0&&_.cameras.push(Pt)}let tt=i.enabledFeatures;if(tt&&tt.includes("depth-sensing")){let vt=u.getDepthInformation(ut[0]);vt&&vt.isValid&&vt.texture&&x.init(t,vt,i.renderState)}}for(let ut=0;ut<y.length;ut++){let at=v[ut],tt=y[ut];at!==null&&tt!==void 0&&tt.update(at,K,c||a)}st&&st(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let xt=new fu;xt.setAnimationLoop(it),this.setAnimationLoop=function(W){st=W},this.dispose=function(){}}},Mi=new un,Ig=new se;function Lg(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,uu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ue&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ue&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),y=M.envMap,v=M.envMapRotation;y&&(g.envMap.value=y,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Mi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let v=y.program;n.uniformBlockBinding(M,v)}function c(M,y){let v=i[M.id];v===void 0&&(p(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",g));let T=y.program;n.updateUBOMapping(M,T);let w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function h(M){let y=u();M.__bindingPointIndex=y;let v=s.createBuffer(),T=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=i[M.id],v=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,_=S.length;b<_;b++){let C=S[b];if(d(C,w,b,T)===!0){let z=C.__offset,D=Array.isArray(C.value)?C.value:[C.value],k=0;for(let P=0;P<D.length;P++){let L=D[P],O=x(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,z+k,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,k),k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,y,v,T){let w=M.value,A=y+"_"+v;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let S=T[A];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return T[A]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function p(M){let y=M.uniforms,v=0,T=16;for(let A=0,S=y.length;A<S;A++){let b=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,C=b.length;_<C;_++){let z=b[_],D=Array.isArray(z.value)?z.value:[z.value];for(let k=0,P=D.length;k<P;k++){let L=D[k],O=x(L),U=v%T,Y=U%O.boundary,j=U+Y;v+=Y,j!==0&&T-j<O.storage&&(v+=T-j),z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=O.storage}}}let w=v%T;return w>0&&(v+=T-w),M.__size=v,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Jr=class{constructor(t={}){let{canvas:e=Ff(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Sn,this.toneMappingExposure=1;let v=this,T=!1,w=0,A=0,S=null,b=-1,_=null,C=new ve,z=new ve,D=null,k=new Ht(0),P=0,L=e.width,O=e.height,U=1,Y=null,j=null,st=new ve(0,0,L,O),it=new ve(0,0,L,O),xt=!1,W=new Yr,K=!1,ut=!1,at=new se,tt=new se,vt=new B,Et=new ve,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function zt(){return S===null?U:1}let F=n;function Zt(R,V){return e.getContext(R,V)}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),F===null){let V="webgl2";if(F=Zt(V,R),F===null)throw Zt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Nt,Ft,gt,Wt,Rt,I,E,X,J,nt,et,lt,q,ft,Dt,ot,yt,St,Ut,wt,Xt,Ot,Jt,H;function mt(){Nt=new $m(F),Nt.init(),Ot=new Ag(F,Nt),Ft=new Gm(F,Nt,t,Ot),gt=new Sg(F,Nt),Ft.reverseDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),Wt=new Km(F),Rt=new ug,I=new Tg(F,Nt,gt,Rt,Ft,Ot,Wt),E=new Xm(v),X=new Ym(v),J=new rd(F),Jt=new Hm(F,J),nt=new Zm(F,J,Wt,Jt),et=new t0(F,nt,J,Wt),Ut=new Qm(F,Ft,I),ot=new Wm(Rt),lt=new hg(v,E,X,Nt,Ft,Jt,ot),q=new Lg(v,Rt),ft=new dg,Dt=new yg(Nt),St=new Bm(v,E,X,gt,et,d,l),yt=new bg(v,et,Ft),H=new Dg(F,Wt,Ft,gt),wt=new Vm(F,Nt,Wt),Xt=new Jm(F,Nt,Wt),Wt.programs=lt.programs,v.capabilities=Ft,v.extensions=Nt,v.properties=Rt,v.renderLists=ft,v.shadowMap=yt,v.state=gt,v.info=Wt}mt();let Q=new zl(v,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=Nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(R){R!==void 0&&(U=R,this.setSize(L,O,!1))},this.getSize=function(R){return R.set(L,O)},this.setSize=function(R,V,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,O=V,e.width=Math.floor(R*U),e.height=Math.floor(V*U),$===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(L*U,O*U).floor()},this.setDrawingBufferSize=function(R,V,$){L=R,O=V,U=$,e.width=Math.floor(R*$),e.height=Math.floor(V*$),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,V,$,Z){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,V,$,Z),gt.viewport(C.copy(st).multiplyScalar(U).round())},this.getScissor=function(R){return R.copy(it)},this.setScissor=function(R,V,$,Z){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,V,$,Z),gt.scissor(z.copy(it).multiplyScalar(U).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){gt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(R=!0,V=!0,$=!0){let Z=0;if(R){let G=!1;if(S!==null){let dt=S.texture.format;G=dt===fc||dt===uc||dt===hc}if(G){let dt=S.texture.type,pt=dt===Un||dt===Pi||dt===Vs||dt===ls||dt===oc||dt===lc,Tt=St.getClearColor(),At=St.getClearAlpha(),kt=Tt.r,Gt=Tt.g,Ct=Tt.b;pt?(p[0]=kt,p[1]=Gt,p[2]=Ct,p[3]=At,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=kt,x[1]=Gt,x[2]=Ct,x[3]=At,F.clearBufferiv(F.COLOR,0,x))}else Z|=F.COLOR_BUFFER_BIT}V&&(Z|=F.DEPTH_BUFFER_BIT),$&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),ft.dispose(),Dt.dispose(),Rt.dispose(),E.dispose(),X.dispose(),et.dispose(),Jt.dispose(),H.dispose(),lt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ke),Q.removeEventListener("sessionend",Qe),Ve.stop()};function rt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=Wt.autoReset,V=yt.enabled,$=yt.autoUpdate,Z=yt.needsUpdate,G=yt.type;mt(),Wt.autoReset=R,yt.enabled=V,yt.autoUpdate=$,yt.needsUpdate=Z,yt.type=G}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bt(R){let V=R.target;V.removeEventListener("dispose",Bt),he(V)}function he(R){Se(R),Rt.remove(R)}function Se(R){let V=Rt.get(R).programs;V!==void 0&&(V.forEach(function($){lt.releaseProgram($)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,$,Z,G,dt){V===null&&(V=Vt);let pt=G.isMesh&&G.matrixWorld.determinant()<0,Tt=Ts(R,V,$,Z,G);gt.setMaterial(Z,pt);let At=$.index,kt=1;if(Z.wireframe===!0){if(At=nt.getWireframeAttribute($),At===void 0)return;kt=2}let Gt=$.drawRange,Ct=$.attributes.position,$t=Gt.start*kt,re=(Gt.start+Gt.count)*kt;dt!==null&&($t=Math.max($t,dt.start*kt),re=Math.min(re,(dt.start+dt.count)*kt)),At!==null?($t=Math.max($t,0),re=Math.min(re,At.count)):Ct!=null&&($t=Math.max($t,0),re=Math.min(re,Ct.count));let ae=re-$t;if(ae<0||ae===1/0)return;Jt.setup(G,Z,Tt,$,At);let Ie,Kt=wt;if(At!==null&&(Ie=J.get(At),Kt=Xt,Kt.setIndex(Ie)),G.isMesh)Z.wireframe===!0?(gt.setLineWidth(Z.wireframeLinewidth*zt()),Kt.setMode(F.LINES)):Kt.setMode(F.TRIANGLES);else if(G.isLine){let It=Z.linewidth;It===void 0&&(It=1),gt.setLineWidth(It*zt()),G.isLineSegments?Kt.setMode(F.LINES):G.isLineLoop?Kt.setMode(F.LINE_LOOP):Kt.setMode(F.LINE_STRIP)}else G.isPoints?Kt.setMode(F.POINTS):G.isSprite&&Kt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Kt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let It=G._multiDrawStarts,Le=G._multiDrawCounts,Qt=G._multiDrawCount,an=At?J.get(At).bytesPerElement:1,Oi=Rt.get(Z).currentProgram.getUniforms();for(let Ge=0;Ge<Qt;Ge++)Oi.setValue(F,"_gl_DrawID",Ge),Kt.render(It[Ge]/an,Le[Ge])}else if(G.isInstancedMesh)Kt.renderInstances($t,ae,G.count);else if($.isInstancedBufferGeometry){let It=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Le=Math.min($.instanceCount,It);Kt.renderInstances($t,ae,Le)}else Kt.render($t,ae)};function ne(R,V,$){R.transparent===!0&&R.side===qe&&R.forceSinglePass===!1?(R.side=Ue,R.needsUpdate=!0,mi(R,V,$),R.side=si,R.needsUpdate=!0,mi(R,V,$),R.side=qe):mi(R,V,$)}this.compile=function(R,V,$=null){$===null&&($=R),m=Dt.get($),m.init(V),y.push(m),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),R!==$&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let Z=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let pt=0;pt<dt.length;pt++){let Tt=dt[pt];ne(Tt,$,G),Z.add(Tt)}else ne(dt,$,G),Z.add(dt)}),y.pop(),m=null,Z},this.compileAsync=function(R,V,$=null){let Z=this.compile(R,V,$);return new Promise(G=>{function dt(){if(Z.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&Z.delete(pt)}),Z.size===0){G(R);return}setTimeout(dt,10)}Nt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Be=null;function Ee(R){Be&&Be(R)}function Ke(){Ve.stop()}function Qe(){Ve.start()}let Ve=new fu;Ve.setAnimationLoop(Ee),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(R){Be=R,Q.setAnimationLoop(R),R===null?Ve.stop():Ve.start()},Q.addEventListener("sessionstart",Ke),Q.addEventListener("sessionend",Qe),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,S),m=Dt.get(R,y.length),m.init(V),y.push(m),tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W.setFromProjectionMatrix(tt),ut=this.localClippingEnabled,K=ot.init(this.clippingPlanes,ut),g=ft.get(R,M.length),g.init(),M.push(g),Q.enabled===!0&&Q.isPresenting===!0){let dt=v.xr.getDepthSensingMesh();dt!==null&&Tn(dt,V,-1/0,v.sortObjects)}Tn(R,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,j),Pt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Pt&&St.addToRenderList(g,R),this.info.render.frame++,K===!0&&ot.beginShadows();let $=m.state.shadowsArray;yt.render($,R,V),K===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=g.opaque,G=g.transmissive;if(m.setupLights(),V.isArrayCamera){let dt=V.cameras;if(G.length>0)for(let pt=0,Tt=dt.length;pt<Tt;pt++){let At=dt[pt];Fi(Z,G,R,At)}Pt&&St.render(R);for(let pt=0,Tt=dt.length;pt<Tt;pt++){let At=dt[pt];Xn(g,R,At,At.viewport)}}else G.length>0&&Fi(Z,G,R,V),Pt&&St.render(R),Xn(g,R,V);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(v,R,V),Jt.resetDefaultState(),b=-1,_=null,y.pop(),y.length>0?(m=y[y.length-1],K===!0&&ot.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Tn(R,V,$,Z){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){Z&&Et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tt);let pt=et.update(R),Tt=R.material;Tt.visible&&g.push(R,pt,Tt,$,Et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){let pt=et.update(R),Tt=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Et.copy(R.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Et.copy(pt.boundingSphere.center)),Et.applyMatrix4(R.matrixWorld).applyMatrix4(tt)),Array.isArray(Tt)){let At=pt.groups;for(let kt=0,Gt=At.length;kt<Gt;kt++){let Ct=At[kt],$t=Tt[Ct.materialIndex];$t&&$t.visible&&g.push(R,pt,$t,$,Et.z,Ct)}}else Tt.visible&&g.push(R,pt,Tt,$,Et.z,null)}}let dt=R.children;for(let pt=0,Tt=dt.length;pt<Tt;pt++)Tn(dt[pt],V,$,Z)}function Xn(R,V,$,Z){let G=R.opaque,dt=R.transmissive,pt=R.transparent;m.setupLightsView($),K===!0&&ot.setGlobalState(v.clippingPlanes,$),Z&&gt.viewport(C.copy(Z)),G.length>0&&qn(G,V,$),dt.length>0&&qn(dt,V,$),pt.length>0&&qn(pt,V,$),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Fi(R,V,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Fn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Zs:Un,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let dt=m.state.transmissionRenderTarget[Z.id],pt=Z.viewport||C;dt.setSize(pt.z,pt.w);let Tt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(k),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear(),Pt&&St.render($);let At=v.toneMapping;v.toneMapping=Sn;let kt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),K===!0&&ot.setGlobalState(v.clippingPlanes,Z),qn(R,$,Z),I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ct=0,$t=V.length;Ct<$t;Ct++){let re=V[Ct],ae=re.object,Ie=re.geometry,Kt=re.material,It=re.group;if(Kt.side===qe&&ae.layers.test(Z.layers)){let Le=Kt.side;Kt.side=Ue,Kt.needsUpdate=!0,Ss(ae,$,Z,Ie,Kt,It),Kt.side=Le,Kt.needsUpdate=!0,Gt=!0}}Gt===!0&&(I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt))}v.setRenderTarget(Tt),v.setClearColor(k,P),kt!==void 0&&(Z.viewport=kt),v.toneMapping=At}function qn(R,V,$){let Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,dt=R.length;G<dt;G++){let pt=R[G],Tt=pt.object,At=pt.geometry,kt=Z===null?pt.material:Z,Gt=pt.group;Tt.layers.test($.layers)&&Ss(Tt,V,$,At,kt,Gt)}}function Ss(R,V,$,Z,G,dt){R.onBeforeRender(v,V,$,Z,G,dt),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(v,V,$,Z,R,dt),G.transparent===!0&&G.side===qe&&G.forceSinglePass===!1?(G.side=Ue,G.needsUpdate=!0,v.renderBufferDirect($,V,Z,G,R,dt),G.side=si,G.needsUpdate=!0,v.renderBufferDirect($,V,Z,G,R,dt),G.side=qe):v.renderBufferDirect($,V,Z,G,R,dt),R.onAfterRender(v,V,$,Z,G,dt)}function mi(R,V,$){V.isScene!==!0&&(V=Vt);let Z=Rt.get(R),G=m.state.lights,dt=m.state.shadowsArray,pt=G.state.version,Tt=lt.getParameters(R,G.state,dt,V,$),At=lt.getProgramCacheKey(Tt),kt=Z.programs;Z.environment=R.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(R.isMeshStandardMaterial?X:E).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Bt),kt=new Map,Z.programs=kt);let Gt=kt.get(At);if(Gt!==void 0){if(Z.currentProgram===Gt&&Z.lightsStateVersion===pt)return vn(R,Tt),Gt}else Tt.uniforms=lt.getUniforms(R),R.onBeforeCompile(Tt,v),Gt=lt.acquireProgram(Tt,At),kt.set(At,Gt),Z.uniforms=Tt.uniforms;let Ct=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),vn(R,Tt),Z.needsLights=ir(R),Z.lightsStateVersion=pt,Z.needsLights&&(Ct.ambientLightColor.value=G.state.ambient,Ct.lightProbe.value=G.state.probe,Ct.directionalLights.value=G.state.directional,Ct.directionalLightShadows.value=G.state.directionalShadow,Ct.spotLights.value=G.state.spot,Ct.spotLightShadows.value=G.state.spotShadow,Ct.rectAreaLights.value=G.state.rectArea,Ct.ltc_1.value=G.state.rectAreaLTC1,Ct.ltc_2.value=G.state.rectAreaLTC2,Ct.pointLights.value=G.state.point,Ct.pointLightShadows.value=G.state.pointShadow,Ct.hemisphereLights.value=G.state.hemi,Ct.directionalShadowMap.value=G.state.directionalShadowMap,Ct.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ct.spotShadowMap.value=G.state.spotShadowMap,Ct.spotLightMatrix.value=G.state.spotLightMatrix,Ct.spotLightMap.value=G.state.spotLightMap,Ct.pointShadowMap.value=G.state.pointShadowMap,Ct.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Gt,Z.uniformsList=null,Gt}function Es(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=ss.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function vn(R,V){let $=Rt.get(R);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ts(R,V,$,Z,G){V.isScene!==!0&&(V=Vt),I.resetTextureUnits();let dt=V.fog,pt=Z.isMeshStandardMaterial?V.environment:null,Tt=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:li,At=(Z.isMeshStandardMaterial?X:E).get(Z.envMap||pt),kt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Gt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ct=!!$.morphAttributes.position,$t=!!$.morphAttributes.normal,re=!!$.morphAttributes.color,ae=Sn;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ae=v.toneMapping);let Ie=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=Ie!==void 0?Ie.length:0,It=Rt.get(Z),Le=m.state.lights;if(K===!0&&(ut===!0||R!==_)){let tn=R===_&&Z.id===b;ot.setState(Z,R,tn)}let Qt=!1;Z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Le.state.version||It.outputColorSpace!==Tt||G.isBatchedMesh&&It.batching===!1||!G.isBatchedMesh&&It.batching===!0||G.isBatchedMesh&&It.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&It.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&It.instancing===!1||!G.isInstancedMesh&&It.instancing===!0||G.isSkinnedMesh&&It.skinning===!1||!G.isSkinnedMesh&&It.skinning===!0||G.isInstancedMesh&&It.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&It.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&It.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&It.instancingMorph===!1&&G.morphTexture!==null||It.envMap!==At||Z.fog===!0&&It.fog!==dt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==kt||It.vertexTangents!==Gt||It.morphTargets!==Ct||It.morphNormals!==$t||It.morphColors!==re||It.toneMapping!==ae||It.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,It.__version=Z.version);let an=It.currentProgram;Qt===!0&&(an=mi(Z,V,G));let Oi=!1,Ge=!1,As=!1,ue=an.getUniforms(),yn=It.uniforms;if(gt.useProgram(an.program)&&(Oi=!0,Ge=!0,As=!0),Z.id!==b&&(b=Z.id,Ge=!0),Oi||_!==R){gt.buffers.depth.getReversed()?(at.copy(R.projectionMatrix),kf(at),Bf(at),ue.setValue(F,"projectionMatrix",at)):ue.setValue(F,"projectionMatrix",R.projectionMatrix),ue.setValue(F,"viewMatrix",R.matrixWorldInverse);let jn=ue.map.cameraPosition;jn!==void 0&&jn.setValue(F,vt.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ue.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,Ge=!0,As=!0)}if(G.isSkinnedMesh){ue.setOptional(F,G,"bindMatrix"),ue.setOptional(F,G,"bindMatrixInverse");let tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ue.setValue(F,"boneTexture",tn.boneTexture,I))}G.isBatchedMesh&&(ue.setOptional(F,G,"batchingTexture"),ue.setValue(F,"batchingTexture",G._matricesTexture,I),ue.setOptional(F,G,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",G._indirectTexture,I),ue.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",G._colorsTexture,I));let Rs=$.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&Ut.update(G,$,an),(Ge||It.receiveShadow!==G.receiveShadow)&&(It.receiveShadow=G.receiveShadow,ue.setValue(F,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(yn.envMap.value=At,yn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(yn.envMapIntensity.value=V.environmentIntensity),Ge&&(ue.setValue(F,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&$a(yn,As),dt&&Z.fog===!0&&q.refreshFogUniforms(yn,dt),q.refreshMaterialUniforms(yn,Z,U,O,m.state.transmissionRenderTarget[R.id]),ss.upload(F,Es(It),yn,I)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ss.upload(F,Es(It),yn,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ue.setValue(F,"center",G.center),ue.setValue(F,"modelViewMatrix",G.modelViewMatrix),ue.setValue(F,"normalMatrix",G.normalMatrix),ue.setValue(F,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let tn=Z.uniformsGroups;for(let jn=0,Yn=tn.length;jn<Yn;jn++){let Nc=tn[jn];H.update(Nc,an),H.bind(Nc,an)}}return an}function $a(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function ir(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,V,$){Rt.get(R.texture).__webglTexture=V,Rt.get(R.depthTexture).__webglTexture=$;let Z=Rt.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){let $=Rt.get(R);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,$=0){S=R,w=V,A=$;let Z=!0,G=null,dt=!1,pt=!1;if(R){let At=Rt.get(R);if(At.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(At.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(At.__hasExternalTextures)I.rebindTextures(R,Rt.get(R.texture).__webglTexture,Rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ct=R.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&Rt.has(Ct)&&(R.width!==Ct.image.width||R.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(pt=!0);let Gt=Rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[V])?G=Gt[V][$]:G=Gt[V],dt=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?G=Rt.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?G=Gt[$]:G=Gt,C.copy(R.viewport),z.copy(R.scissor),D=R.scissorTest}else C.copy(st).multiplyScalar(U).floor(),z.copy(it).multiplyScalar(U).floor(),D=xt;if(gt.bindFramebuffer(F.FRAMEBUFFER,G)&&Z&&gt.drawBuffers(R,G),gt.viewport(C),gt.scissor(z),gt.setScissorTest(D),dt){let At=Rt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,$)}else if(pt){let At=Rt.get(R.texture),kt=V||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,$||0,kt)}b=-1},this.readRenderTargetPixels=function(R,V,$,Z,G,dt,pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){gt.bindFramebuffer(F.FRAMEBUFFER,Tt);try{let At=R.texture,kt=At.format,Gt=At.type;if(!Ft.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Z&&$>=0&&$<=R.height-G&&F.readPixels(V,$,Z,G,Ot.convert(kt),Ot.convert(Gt),dt)}finally{let At=S!==null?Rt.get(S).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(R,V,$,Z,G,dt,pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){let At=R.texture,kt=At.format,Gt=At.type;if(!Ft.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-Z&&$>=0&&$<=R.height-G){gt.bindFramebuffer(F.FRAMEBUFFER,Tt);let Ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ct),F.bufferData(F.PIXEL_PACK_BUFFER,dt.byteLength,F.STREAM_READ),F.readPixels(V,$,Z,G,Ot.convert(kt),Ot.convert(Gt),0);let $t=S!==null?Rt.get(S).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,$t);let re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Of(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,dt),F.deleteBuffer(Ct),F.deleteSync(re),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,$=0){R.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);let Z=Math.pow(2,-$),G=Math.floor(R.image.width*Z),dt=Math.floor(R.image.height*Z),pt=V!==null?V.x:0,Tt=V!==null?V.y:0;I.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,pt,Tt,G,dt),gt.unbindTexture()},this.copyTextureToTexture=function(R,V,$=null,Z=null,G=0){R.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let dt,pt,Tt,At,kt,Gt,Ct,$t,re,ae=R.isCompressedTexture?R.mipmaps[G]:R.image;$!==null?(dt=$.max.x-$.min.x,pt=$.max.y-$.min.y,Tt=$.isBox3?$.max.z-$.min.z:1,At=$.min.x,kt=$.min.y,Gt=$.isBox3?$.min.z:0):(dt=ae.width,pt=ae.height,Tt=ae.depth||1,At=0,kt=0,Gt=0),Z!==null?(Ct=Z.x,$t=Z.y,re=Z.z):(Ct=0,$t=0,re=0);let Ie=Ot.convert(V.format),Kt=Ot.convert(V.type),It;V.isData3DTexture?(I.setTexture3D(V,0),It=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),It=F.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),It=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);let Le=F.getParameter(F.UNPACK_ROW_LENGTH),Qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),Oi=F.getParameter(F.UNPACK_SKIP_ROWS),Ge=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,At),F.pixelStorei(F.UNPACK_SKIP_ROWS,kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt);let As=R.isDataArrayTexture||R.isData3DTexture,ue=V.isDataArrayTexture||V.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let yn=Rt.get(R),Rs=Rt.get(V),tn=Rt.get(yn.__renderTarget),jn=Rt.get(Rs.__renderTarget);gt.bindFramebuffer(F.READ_FRAMEBUFFER,tn.__webglFramebuffer),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Yn=0;Yn<Tt;Yn++)As&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(R).__webglTexture,G,Gt+Yn),R.isDepthTexture?(ue&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(V).__webglTexture,G,re+Yn),F.blitFramebuffer(At,kt,dt,pt,Ct,$t,dt,pt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ue?F.copyTexSubImage3D(It,G,Ct,$t,re+Yn,At,kt,dt,pt):F.copyTexSubImage2D(It,G,Ct,$t,re+Yn,At,kt,dt,pt);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ue?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(It,G,Ct,$t,re,dt,pt,Tt,Ie,Kt,ae.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(It,G,Ct,$t,re,dt,pt,Tt,Ie,ae.data):F.texSubImage3D(It,G,Ct,$t,re,dt,pt,Tt,Ie,Kt,ae):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,Ct,$t,dt,pt,Ie,Kt,ae.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,Ct,$t,ae.width,ae.height,Ie,ae.data):F.texSubImage2D(F.TEXTURE_2D,G,Ct,$t,dt,pt,Ie,Kt,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,Oi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge),G===0&&V.generateMipmaps&&F.generateMipmap(It),gt.unbindTexture()},this.copyTextureToTexture3D=function(R,V,$=null,Z=null,G=0){return R.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,$,Z,G)},this.initRenderTarget=function(R){Rt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),gt.unbindTexture()},this.resetState=function(){w=0,A=0,S=null,gt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Kr=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Nl=class extends Ye{constructor(t=null,e=1,n=1,i,r,a,o,l,c=je,h=je,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qi=new se,Nh=new se,Er=[],Uh=new On,zg=new se,zs=new ie,Ns=new kn,fs=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Uh.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Uh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Ns.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qi),Nh.multiplyMatrices(n,Qi),zs.matrixWorld=Nh,zs.raycast(t,Er);for(let a=0,o=Er.length;a<o;a++){let l=Er[a];l.instanceId=r,l.object=this,e.push(l)}Er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(i*this.count),i,this.count,cc,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ul=class extends ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ta=new B,ea=new B,Fh=new se,Us=new hs,Tr=new kn,Ao=new B,Oh=new B,Fl=class extends $e{constructor(t=new xe,e=new Ul){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ta.fromBufferAttribute(e,i-1),ea.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ta.distanceTo(ea);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;Fh.copy(i).invert(),Us.copy(t.ray).applyMatrix4(Fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),M=h.getX(x+1),y=Ar(this,t,Us,l,m,M);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=Ar(this,t,Us,l,x,g);m&&e.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=c){let m=Ar(this,t,Us,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=Ar(this,t,Us,l,p-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ar(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(ta.fromBufferAttribute(a,i),ea.fromBufferAttribute(a,r),e.distanceSqToSegment(ta,ea,Ao,Oh)>n)return;Ao.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ao);if(!(l<t.near||l>t.far))return{distance:l,point:Oh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var kh=new B,Bh=new B,na=class extends Fl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)kh.fromBufferAttribute(e,i),Bh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kh.distanceTo(Bh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ol=class extends ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new se,kl=new hs,Rr=new kn,Cr=new B,ia=class extends $e{constructor(t=new xe,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Hh.copy(i).invert(),kl.copy(t.ray).applyMatrix4(Hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Cr.fromBufferAttribute(u,g),Vh(Cr,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,x=d;p<x;p++)Cr.fromBufferAttribute(u,p),Vh(Cr,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(s,t,e,n,i,r,a){let o=kl.distanceSqToPoint(s);if(o<e){let l=new B;kl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new B,i=[],r=[],a=[],o=new B,l=new se;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ne(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ne(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ws=class extends rn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends Ws{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Pr=new B,Ro=new pc,Co=new pc,Po=new pc,Hl=class extends rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Pr.subVectors(i[0],i[1]).add(i[0]),c=Pr);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Pr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Ro.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),Co.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),Po.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Co.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Po.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ro.calc(l),Co.calc(l),Po.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Ng(s,t){let e=1-s;return e*e*t}function Ug(s,t){return 2*(1-s)*s*t}function Fg(s,t){return s*s*t}function Bs(s,t,e,n){return Ng(s,t)+Ug(s,e)+Fg(s,n)}function Og(s,t){let e=1-s;return e*e*e*t}function kg(s,t){let e=1-s;return 3*e*e*s*t}function Bg(s,t){return 3*(1-s)*s*s*t}function Hg(s,t){return s*s*s*t}function Hs(s,t,e,n,i){return Og(s,t)+kg(s,e)+Bg(s,n)+Hg(s,i)}var sa=class extends rn{constructor(t=new Lt,e=new Lt,n=new Lt,i=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Lt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,i.x,r.x,a.x,o.x),Hs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends rn{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,i.x,r.x,a.x,o.x),Hs(t,i.y,r.y,a.y,o.y),Hs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends rn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends rn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends rn{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,i.x,r.x,a.x),Bs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends rn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,i.x,r.x,a.x),Bs(t,i.y,r.y,a.y),Bs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Gh(o,l.x,c.x,h.x,u.x),Gh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Lt().fromArray(i))}return this}},Wh=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:Hl,CubicBezierCurve:sa,CubicBezierCurve3:Vl,EllipseCurve:Ws,LineCurve:ra,LineCurve3:Gl,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Wl,SplineCurve:oa}),Xl=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wh[i.type]().fromJSON(i))}return this}},la=class extends Xl{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ra(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new aa(this.currentPoint.clone(),new Lt(t,e),new Lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new sa(this.currentPoint.clone(),new Lt(t,e),new Lt(n,i),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Ws(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Xs=class s extends xe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function M(){let v=new B,T=new B,w=0,A=(e-t)/n;for(let S=0;S<=r;S++){let b=[],_=S/r,C=_*(e-t)+t;for(let z=0;z<=i;z++){let D=z/i,k=D*l+o,P=Math.sin(k),L=Math.cos(k);T.x=C*P,T.y=-_*n+g,T.z=C*L,u.push(T.x,T.y,T.z),v.set(P,A,L).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-_),b.push(p++)}x.push(b)}for(let S=0;S<i;S++)for(let b=0;b<r;b++){let _=x[b][S],C=x[b+1][S],z=x[b+1][S+1],D=x[b][S+1];(t>0||b!==0)&&(h.push(_,C,D),w+=3),(e>0||b!==r-1)&&(h.push(C,z,D),w+=3)}c.addGroup(m,w,0),m+=w}function y(v){let T=p,w=new Lt,A=new B,S=0,b=v===!0?t:e,_=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),p++;let C=p;for(let z=0;z<=i;z++){let k=z/i*l+o,P=Math.cos(k),L=Math.sin(k);A.x=b*L,A.y=g*_,A.z=b*P,u.push(A.x,A.y,A.z),f.push(0,_,0),w.x=P*.5+.5,w.y=L*.5*_+.5,d.push(w.x,w.y),p++}for(let z=0;z<i;z++){let D=T+z,k=C+z;v===!0?h.push(k,k+1,D):h.push(k+1,k,D),S+=3}c.addGroup(m,S,v===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ds=class s extends Xs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qs=class extends la{constructor(t){super(t),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new la().fromJSON(i))}return this}},Vg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=xu(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=jg(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let p=e;p<i;p+=e)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return js(r,a,e,o,l,d,0),a}};function xu(s,t,e,n,i){let r,a;if(i===sx(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Xh(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Xh(r,s[r],s[r+1],a);return a&&ma(a,a.next)&&($s(a),a=a.next),a}function Li(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ma(e,e.next)||pe(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Kg(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Wg(s,n,i,r):Gg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),$s(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Xg(Li(s),t,e),js(s,t,e,n,i,r,2)):a===2&&qg(s,t,e,n,i,r):js(Li(s),t,e,n,i,r,1);break}}}function Gg(s){let t=s.prev,e=s,n=s.next;if(pe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&es(i,o,r,l,a,c,p.x,p.y)&&pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wg(s,t,e,n){let i=s.prev,r=s,a=s.next;if(pe(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=ql(d,p,t,e,n),M=ql(x,g,t,e,n),y=s.prevZ,v=s.nextZ;for(;y&&y.z>=m&&v&&v.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&es(o,h,l,u,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&es(o,h,l,u,c,f,v.x,v.y)&&pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&es(o,h,l,u,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&es(o,h,l,u,c,f,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!ma(i,r)&&vu(i,n,n.next,r)&&Ys(i,r)&&Ys(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$s(n),$s(n.next),n=s=r),n=n.next}while(n!==s);return Li(n)}function qg(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ex(a,o)){let l=yu(a,o);a=Li(a,a.next),l=Li(l,l.next),js(a,t,e,n,i,r,0),js(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function jg(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=xu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(tx(c));for(i.sort(Yg),r=0;r<i.length;r++)e=$g(i[r],e);return e}function Yg(s,t){return s.x-t.x}function $g(s,t){let e=Zg(s,t);if(!e)return t;let n=yu(e,s);return Li(n,n.next),Li(e,e.next)}function Zg(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&es(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ys(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Jg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Jg(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function Kg(s,t,e,n){let i=s;do i.z===0&&(i.z=ql(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qg(i)}function Qg(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ql(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function tx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function es(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ex(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!nx(s,t)&&(Ys(s,t)&&Ys(t,s)&&ix(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||ma(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ma(s,t){return s.x===t.x&&s.y===t.y}function vu(s,t,e,n){let i=Lr(pe(s,t,e)),r=Lr(pe(s,t,n)),a=Lr(pe(e,n,s)),o=Lr(pe(e,n,t));return!!(i!==r&&a!==o||i===0&&Ir(s,e,t)||r===0&&Ir(s,n,t)||a===0&&Ir(e,s,n)||o===0&&Ir(e,t,n))}function Ir(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Lr(s){return s>0?1:s<0?-1:0}function nx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ys(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function ix(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function yu(s,t){let e=new jl(s.i,s.x,s.y),n=new jl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xh(s,t,e,n){let i=new jl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sx(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ri=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];qh(t),jh(n,t);let a=t.length;e.forEach(qh);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,jh(n,e[l]);let o=Vg.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function jh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ca=class s extends xe{constructor(t=new qs([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Me(i,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(a,2));function c(h){let u=i.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;Ri.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let M=p[g];Ri.isClockWise(M)===!0&&(p[g]=M.reverse())}let x=Ri.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let M=p[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){let M=d[g];i.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],y=M[0]+u,v=M[1]+u,T=M[2]+u;n.push(y,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return rx(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function rx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var ha=class s extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,f=new B,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],y=m/n,v=0;m===0&&a===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){let w=T/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+y*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(w+v,1-y),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let y=h[m][M+1],v=h[m][M],T=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&d.push(y,v,w),(m!==n-1||l<Math.PI)&&d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Dr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ax(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:r=t,o=2*e-n;break;case Hc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:a=t,l=2*n-e;break;case Hc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+M*a[c+T]+y*a[l+T]+v*a[u+T];return r}},$l=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Zl=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},dn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&ax(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ja,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=gl;var Di=class extends dn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=kr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends dn{};Jl.prototype.ValueTypeName="color";var Kl=class extends dn{};Kl.prototype.ValueTypeName="number";var Ql=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ua=class extends dn{InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends dn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=kr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends dn{};tc.prototype.ValueTypeName="vector";var ec=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},ox=new ec,nc=class{constructor(t){this.manager=t!==void 0?t:ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var mc="\\[\\]\\.:\\/",lx=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",cx="[^"+mc.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",gc),ux=/(WCOD+)?/.source.replace("WCOD",cx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),px=new RegExp("^"+hx+ux+fx+dx+"$"),mx=["material","materials","bones","map"],ic=class{constructor(t,e,n){let i=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(t){let e=px.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=ic;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var Yh=new se,ms=class{constructor(t,e,n=0,i=1/0){this.ray=new hs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(t,e=!0,n=[]){return sc(t,this,n,e),n.sort($h),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)sc(t[i],this,n,e);return n.sort($h),n}};function $h(s,t){return s.distance-t.distance}function sc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)sc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);var pn="0.7.0";var hi={index:null,buf:null,geo:{}},gx=s=>new Promise(t=>setTimeout(t,s));async function _u(s){for(let t=0;;t++){let e=await fetch(s);if(e.ok||e.status!==429&&e.status<500||t>=6)return e;let n=Number(e.headers.get("retry-after")),i=(Number.isFinite(n)&&n>0?n*1e3:350*2**t)+Math.random()*250;await gx(Math.min(i,8e3))}}async function Mu(s){let t=await _u("assets/models.json?v="+pn);if(!t.ok)throw new Error("models.json "+t.status);let e=await t.json(),n=await xx("assets/models.bin?v="+pn,s);hi.index=e,hi.buf=n}async function xx(s,t){let e=await _u(s);if(!e.ok)throw new Error(s+" "+e.status);if(!t||!e.body||!e.headers.get("content-length"))return e.arrayBuffer();let n=+e.headers.get("content-length"),i=e.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await i.read();if(c)break;r.push(h),a+=h.length,t(Math.min(.99,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return t(1),o.buffer}function xc(s,t){let e=hi.index[s],n=e.parts.find(r=>r.name===t)||e.parts[0],i=hi.buf;return{part:n,pos:new Float32Array(i,n.pos,n.n*3),nrm:new Int8Array(i,n.nrm,n.n*4),col:new Uint8Array(i,n.col,n.n*4),idx:new Uint16Array(i,n.idx,n.i)}}function Ni(s,t){let e=s+"/"+t;if(hi.geo[e])return hi.geo[e];let n=xc(s,t),i=new xe;return i.setAttribute("position",new qt(n.pos,3)),i.setAttribute("normal",new qt(n.nrm,4,!0)),i.setAttribute("col",new qt(n.col,4,!0)),i.setIndex(new qt(n.idx,1)),i.computeBoundingSphere(),hi.geo[e]=i,i}function vc(s){return hi.index[s]}var vx=["impactMetal_heavy_000","impactMetal_heavy_001","impactMetal_heavy_002","impactMetal_light_000","impactGlass_heavy_000","impactPlate_heavy_000","select_001","confirmation_001","back_001","switch_001","explosionCrunch_000","forceField_000"],ga=class{constructor(t){this.vol={music:t.music??.7,sfx:t.sfx??.8},this.mix={engine:1,sfx:1,music:1},this.ctx=null,this.buf={},this.engines=[],this.music=null,this.musicName=""}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol.sfx,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.worklet=null,e.audioWorklet&&(this.worklet=e.audioWorklet.addModule("assets/engine-worklet.js?v="+pn).then(()=>!0).catch(()=>!1)),(async()=>{for(let r of vx)try{let a=await fetch("assets/sfx/"+r+".ogg?v="+pn);if(!a.ok||!this.ctx)continue;let o=await a.arrayBuffer();if(!this.ctx)break;this.buf[r]=await e.decodeAudioData(o)}catch{}})(),this.playMusic("alpha-dance")}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}playMusic(t){if(this.musicName===t)return;this.musicName=t,this.music||(this.music=new Audio,this.music.loop=!0),this.music.src="assets/music/"+t+".ogg?v="+pn,this.music.volume=this.vol.music*.45*this.mix.music;let e=this.music.play();e&&e.catch&&e.catch(()=>{})}volume(t){this.vol={music:t.music??this.vol.music,sfx:t.sfx??this.vol.sfx},this.master&&(this.master.gain.value=this.vol.sfx),this.music&&(this.music.volume=this.vol.music*.45*this.mix.music)}setMix(t){this.mix={engine:t.engine??1,sfx:t.sfx??1,music:t.music??1},this.volume({})}play(t,e,n){let i=this.buf[t];if(!i||!this.ctx)return;let r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=n||1;let a=this.ctx.createGain();a.gain.value=(e===void 0?1:e)*this.mix.sfx,r.connect(a),a.connect(this.master),r.start()}ui(t){this.play(t==="ok"?"confirmation_001":t==="back"?"back_001":t==="switch"?"switch_001":"select_001",.5)}engineNode(t,e){let n=this.ctx;if(this.workletOk){let i=new AudioWorkletNode(n,"engine",{numberOfInputs:0,outputChannelCount:[1],processorOptions:{cyl:t.cyl||4,turbo:!!t.turbo,ev:!!t.ev,diesel:!!t.diesel,rpmMax:t.rpm,seed:e}}),r=i.parameters;return{node:i,rpm:r.get("rpm"),load:r.get("load"),speed:r.get("speed"),gain:r.get("gain"),nodes:[]}}return null}engineVoice(t,e){let n=this.ctx,i=t?this.engineNode(t,e||1):null,r=n.createOscillator();r.type="sawtooth";let a=n.createOscillator();a.type="square";let o=this.noiseSrc(),l=n.createGain();l.gain.value=.12;let c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;let h=n.createGain();h.gain.value=0;let u=n.createGain();u.gain.value=.5,r.connect(c),a.connect(u),u.connect(c),o.connect(l),l.connect(c),c.connect(h);let f=this.noiseSrc(),d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=1700,d.Q.value=4;let p=n.createGain();p.gain.value=0,f.connect(d),d.connect(p);let x=this.noiseSrc(),g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let m=n.createGain();m.gain.value=0,x.connect(g),g.connect(m);let M=this.noiseSrc(),y=n.createBiquadFilter();y.type="bandpass",y.frequency.value=900,y.Q.value=.8;let v=n.createGain();v.gain.value=0,M.connect(y),y.connect(v);let T=n.createStereoPanner?n.createStereoPanner():null,w=T||n.createGain();return i?i.node.connect(w):h.connect(w),p.connect(w),m.connect(w),v.connect(w),w.connect(this.master),i||(r.start(),a.start(),o.start()),f.start(),x.start(),M.start(),{wk:i,spec:t,o1:r,o2:a,f:c,g:h,tg:p,wg:m,ngn:v,nf:y,pan:T,nodes:i?[f,x,M]:[r,a,o,f,x,M],out:w}}async begin(t){if(!this.ctx||(this.end(),this.cur=t,this.worklet&&(this.workletOk=await this.worklet),this.cur!==t||this.engines.length))return;let e=t.race.players.length;for(let n=0;n<e;n++){let i=this.engineVoice(t.race.players[n].spec,n+1);i.pan&&(i.pan.pan.value=e>1?n?.5:-.5:0),this.engines.push(i)}this.rivals=[];for(let n of t.race.racers)n.player>=0||this.rivals.length>=3||this.rivals.some(i=>i.spec===n.spec)||this.rivals.push(this.engineVoice(n.spec,7+this.rivals.length));this.playMusic("time-driving")}update(t,e){if(!this.ctx||!this.engines.length)return;let n=this.ctx.currentTime,i=t.race,r=i.players.length>1?.6:1;for(let o=0;o<this.engines.length;o++){let l=this.engines[o],c=i.players[o],h=c.veh;this.voice(l,h,c,n,r,1)}let a=i.players[0].veh;for(let o=0;o<this.rivals.length;o++){let l=this.rivals[o],c=null,h=1e9;for(let u=0;u<i.racers.length;u++){let f=i.racers[u];if(f.player>=0||f.spec!==l.spec)continue;let d=Math.hypot(f.veh.px-a.px,f.veh.pz-a.pz);d<h&&(h=d,c=f)}c&&this.voice(l,c.veh,c,n,r*Math.max(0,1-h/60)*.6,0)}}voice(t,e,n,i,r,a){let o=e.rpm,l=Math.max(e.input.throttle,e.nitroOn?1:0),c=n.wreck>0;if(t.wk){let f=c?0:e.shiftT>0?.04:l;t.wk.rpm.setValueAtTime(c?800:o,i),t.wk.load.setValueAtTime(f,i),t.wk.speed.setValueAtTime(a?e.speed:0,i),t.wk.gain.setTargetAtTime((c?.15*r:(e.spec.ev?.9:.55+.25*f)*r)*this.mix.engine,i,.05)}let h=28+o/60*1.6;t.o1.frequency.setTargetAtTime(h,i,.03),t.o2.frequency.setTargetAtTime(h*.5,i,.03),t.f.frequency.setTargetAtTime(300+o*.32*(.5+l*.5),i,.05),t.g.gain.setTargetAtTime((c?.02:(.1+l*.14)*r)*this.mix.engine,i,.05);let u=0;for(let f=0;f<4;f++){let d=e.wheels[f];d.contact&&(u=Math.max(u,d.slipLat,d.slipLong))}t.tg.gain.setTargetAtTime(u>.3&&e.speed>5?Math.min(.22,(u-.3)*.4)*r*this.mix.sfx:0,i,.04),t.wg.gain.setTargetAtTime(a?Math.min(.18,e.speed*e.speed*2e-5)*r*this.mix.sfx:0,i,.1),t.ngn.gain.setTargetAtTime(e.nitroOn?.16*r*Math.min(1.6,e.nitroOn)*this.mix.sfx:0,i,.06),t.nf.frequency.setTargetAtTime(e.nitroOn>1.5?600:1100,i,.1)}event(t,e,n,i){if(!this.ctx)return;let a=e.player>=0;if(!a)for(let o of i.race.players)Math.hypot(o.veh.px-e.veh.px,o.veh.pz-e.veh.pz)<50&&(a=!0);if(a)if(t==="hit"){let o=this.ctx.currentTime;if(o-(this.lastHit||0)<.12)return;this.lastHit=o;let l=Math.min(1,n/18);if(l<.1)return;this.play(l>.5?"impactMetal_heavy_00"+(Math.random()*3|0):"impactMetal_light_000",.4+l*.6,.9+Math.random()*.2)}else t==="wreck"&&(this.play("explosionCrunch_000",.9,.8),this.play("impactGlass_heavy_000",.7),this.play("impactPlate_heavy_000",.8,.85))}drop(t){for(let e of t.nodes)try{e.stop()}catch{}t.wk&&t.wk.node.disconnect(),t.out.disconnect()}end(){for(let t of this.engines.concat(this.rivals||[]))this.drop(t);this.engines=[],this.rivals=[],this.cur=null,this.ctx&&this.playMusic("alpha-dance")}pause(){this.ctx&&this.ctx.suspend(),this.music&&this.music.pause()}resume(){if(this.ctx&&this.ctx.resume(),this.music){let t=this.music.play();t&&t.catch&&t.catch(()=>{})}}close(){this.end(),this.music&&(this.music.pause(),this.music.src=""),this.ctx&&this.ctx.close(),this.ctx=null}};var ui=16,ge=3.5,yc=12,_c=2.5,yx=3.25,xa=class s{static async load(t){let e=c=>new Promise(h=>setTimeout(h,c)),n=async(c,h)=>{let u="assets/city/"+c+"?v="+pn;for(let f=0;;f++){let d=await fetch(u);if(d.ok)return h?d.arrayBuffer():d.json();if((d.status===429||d.status>=500)&&f<6){let p=Number(d.headers.get("retry-after")),x=(Number.isFinite(p)&&p>0?p*1e3:350*2**f)+Math.random()*250;await e(Math.min(x,8e3));continue}throw new Error(c+" "+d.status)}},i=await n("city.json");t&&t(.2);let r=await n("net.bin",1);t&&t(.45);let a=await n("ground.bin",1);t&&t(.65);let o=await n("bld.bin",1);t&&t(.85);let l=await n("side.bin",1);return t&&t(1),new s(i,r,a,o,l)}constructor(t,e,n,i,r){this.meta=t,this.box=t.box;let a=new Float32Array(e),o=this.n=a.length/3;this.px=new Float32Array(o),this.py=new Float32Array(o),this.pz=new Float32Array(o);for(let p=0;p<o;p++)this.px[p]=a[p*3],this.py[p]=a[p*3+1],this.pz[p]=a[p*3+2];let l=new Uint8Array(r);this.pl=new Float32Array(o),this.pr=new Float32Array(o);for(let p=0;p<o;p++)this.pl[p]=l[p*2]/40,this.pr[p]=l[p*2+1]/40;let c=t.edges,h=this.ne=c.length;this.eOff=new Int32Array(h),this.eN=new Int32Array(h),this.eA=new Int32Array(h),this.eB=new Int32Array(h),this.eHw=new Float32Array(h),this.eCls=new Uint8Array(h),this.eOne=new Uint8Array(h),this.eRa=new Uint8Array(h),this.eLim=new Uint8Array(h),this.eName=new Int32Array(h),this.eLen=new Float32Array(h),this.sE=new Int32Array(o),this.sS=new Float32Array(o),this.tx=new Float32Array(o),this.tz=new Float32Array(o),this.sJ=new Int32Array(o).fill(-1);let u=t.junctions,f=this.nj=u.length;this.jx=new Float32Array(f),this.jz=new Float32Array(f),this.jr=new Float32Array(f),this.jy=new Float32Array(f),this.jEdges=[];for(let p=0;p<f;p++)this.jx[p]=u[p][0],this.jz[p]=u[p][1],this.jr[p]=u[p][2],this.jy[p]=u[p][3],this.jEdges.push([]);for(let p=0;p<h;p++){let x=c[p];this.eOff[p]=x[1],this.eN[p]=x[2],this.eA[p]=x[3],this.eB[p]=x[4],this.eHw[p]=x[5],this.eCls[p]=x[6],this.eOne[p]=x[7],this.eRa[p]=x[8],this.eLim[p]=x[9],this.eName[p]=x[10],this.jEdges[x[3]].push(p),this.jEdges[x[4]].push(p);let g=x[1],m=x[2],M=0;for(let T=0;T<m;T++){let w=g+T;this.sE[w]=p,T>0&&(M+=Math.hypot(this.px[w]-this.px[w-1],this.pz[w]-this.pz[w-1])),this.sS[w]=M;let A=T>0?w-1:w,S=T<m-1?w+1:w,b=this.px[S]-this.px[A],_=this.pz[S]-this.pz[A],C=Math.hypot(b,_)||1;this.tx[w]=b/C,this.tz[w]=_/C}this.eLen[p]=M;let y=this.jr[x[3]],v=this.jr[x[4]];for(let T=0;T<m;T++){let w=g+T,A=this.sS[w],S=A-y,b=M-A-v;S<2&&S<=b?this.sJ[w]=x[3]:b<2&&(this.sJ[w]=x[4])}}this.lights=t.lights,this.stations=t.stations,this.names=t.names,this.areas=t.areas||[],this.jLight=new Int32Array(f).fill(-1);for(let p=0;p<this.lights.length;p++)this.jLight[this.lights[p].j]=p;this.buildGrid(),this.fitJunctions();let d=new Float32Array(n,0,5);this.g={x0:d[0],z0:d[1],c:d[2],nx:d[3]|0,nz:d[4]|0,h:new Int16Array(n,20,(d[3]|0)*(d[4]|0))},this.bld=new Float32Array(i)}fitJunctions(){let t=this.nj;this.jgx=new Float32Array(t),this.jgz=new Float32Array(t),this.jPlane=new Uint8Array(t);let e=new Int32Array(t);for(let c=0;c<t;c++)e[c]=c;let n=c=>{for(;e[c]!==c;)e[c]=e[e[c]],c=e[c];return c},i=[];for(let c=0;c<t;c++)this.jEdges[c].length>=3&&i.push(c);let r=new Map,a=40,o=(c,h)=>Math.floor(c/a)*1e5+Math.floor(h/a);for(let c of i){let h=o(this.jx[c],this.jz[c]),u=r.get(h);u||r.set(h,u=[]),u.push(c)}for(let c of i){let h=Math.floor(this.jx[c]/a),u=Math.floor(this.jz[c]/a);for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++)for(let p of r.get((h+f)*1e5+u+d)||[])p<=c||Math.hypot(this.jx[p]-this.jx[c],this.jz[p]-this.jz[c])<this.jr[c]+this.jr[p]+4&&(e[n(p)]=n(c))}let l=new Map;for(let c of i){let h=n(c),u=l.get(h);u||l.set(h,u=[]),u.push(c)}for(let c of l.values()){let h=this.jx[c[0]],u=this.jz[c[0]],f=0,d=0,p=0,x=0,g=0,m=0,M=0,y=0,v=0,T=new Set;for(let Y of c){let j=this.jr[Y]+yc+2;for(let st of this.jEdges[Y]){let it=this.eOff[st],xt=this.eN[st];for(let W=0;W<xt;W++){let K=it+W;if(T.has(K))continue;let ut=this.px[K]-this.jx[Y],at=this.pz[K]-this.jz[Y];if(ut*ut+at*at>j*j)continue;T.add(K);let tt=this.px[K]-h,vt=this.pz[K]-u,Et=this.py[K];f++,d+=tt,p+=vt,x+=Et,g+=tt*tt,m+=vt*vt,M+=tt*vt,y+=tt*Et,v+=vt*Et}}}if(f<3)continue;let w=d/f,A=p/f,S=x/f,b=g/f-w*w+.001,_=M/f-w*A,C=m/f-A*A+.001,z=y/f-w*S,D=v/f-A*S,k=b*C-_*_;if(Math.abs(k)<1e-9)continue;let P=(z*C-_*D)/k,L=(b*D-_*z)/k,O=Math.hypot(P,L);O>.35&&(P*=.35/O,L*=.35/O);let U=S-P*w-L*A;for(let Y of c)this.jgx[Y]=P,this.jgz[Y]=L,this.jy[Y]=U+P*(this.jx[Y]-h)+L*(this.jz[Y]-u),this.jPlane[Y]=1}}onPlaza(t,e,n){let i=e-this.jx[t],r=n-this.jz[t],a=this.jr[t]+.5;return this.jPlane[t]===1&&i*i+r*r<a*a}planeY(t,e,n){return this.jy[t]+this.jgx[t]*(e-this.jx[t])+this.jgz[t]*(n-this.jz[t])}blend(t,e){let n=this.eA[t],i=this.eB[t],r=0,a=-1;if(this.jPlane[n]){let o=1-(e-this.jr[n])/yc;o>r&&(r=o,a=n)}if(this.jPlane[i]){let o=1-(this.eLen[t]-e-this.jr[i])/yc;o>r&&(r=o,a=i)}return this._bj=a,r>1?1:r}surfY(t,e,n,i,r){let a=this.blend(t,e);return a>0?r+(this.planeY(this._bj,n,i)-r)*a:r}buildGrid(){let t=this.box;this.gx0=t.x0-64,this.gz0=t.z0-64;let e=this.gnx=Math.ceil((t.x1-t.x0+128)/ui),n=this.gnz=Math.ceil((t.z1-t.z0+128)/ui),i=new Int32Array(e*n+1),r=l=>{for(let c=0;c<this.n-1;c++){let h=this.sE[c];if(this.sE[c+1]!==h)continue;let u=this.eHw[h]+ge+9,f=Math.min(this.px[c],this.px[c+1])-u,d=Math.max(this.px[c],this.px[c+1])+u,p=Math.min(this.pz[c],this.pz[c+1])-u,x=Math.max(this.pz[c],this.pz[c+1])+u,g=Math.max(0,Math.floor((f-this.gx0)/ui)),m=Math.min(e-1,Math.floor((d-this.gx0)/ui)),M=Math.max(0,Math.floor((p-this.gz0)/ui)),y=Math.min(n-1,Math.floor((x-this.gz0)/ui));for(let v=M;v<=y;v++)for(let T=g;T<=m;T++)l(v*e+T,c)}};r(l=>i[l+1]++);for(let l=0;l<e*n;l++)i[l+1]+=i[l];let a=i.slice(0,e*n),o=new Int32Array(i[e*n]);r((l,c)=>{o[a[l]++]=c}),this.cellStart=i,this.cellList=o}groundAt(t,e){let n=this.g,i=(t-n.x0)/n.c,r=(e-n.z0)/n.c,a=Math.max(0,Math.min(n.nx-2,Math.floor(i))),o=Math.max(0,Math.min(n.nz-2,Math.floor(r))),l=Math.max(0,Math.min(1,i-a)),c=Math.max(0,Math.min(1,r-o)),h=n.h,u=n.nx;return((h[o*u+a]*(1-l)+h[o*u+a+1]*l)*(1-c)+(h[(o+1)*u+a]*(1-l)+h[(o+1)*u+a+1]*l)*c)/10}query(t,e,n,i){let r=Math.floor((t-this.gx0)/ui),a=Math.floor((e-this.gz0)/ui),o=-1,l=1e9,c=0,h=-1,u=1e9,f=0,d=1e9,p=1e9,x=n>=0&&n<this.n?this.sE[n]:-1;if(r>=0&&a>=0&&r<this.gnx&&a<this.gnz){let gt=a*this.gnx+r,Wt=this.cellList;for(let Rt=this.cellStart[gt],I=this.cellStart[gt+1];Rt<I;Rt++){let E=Wt[Rt],X=this.px[E],J=this.pz[E],nt=this.px[E+1]-X,et=this.pz[E+1]-J,lt=nt*nt+et*et||1,q=((t-X)*nt+(e-J)*et)/lt;q<0?q=0:q>1&&(q=1);let ft=X+nt*q-t,Dt=J+et*q-e,yt=Math.sqrt(ft*ft+Dt*Dt)-this.eHw[this.sE[E]],St=yt;this.sE[E]===x&&(St-=.05),St<l?(o>=0&&this.sE[o]!==this.sE[E]&&(h=o,u=l,f=c,p=d),l=St,d=yt,o=E,c=q):St<u&&this.sE[E]!==this.sE[o]&&(u=St,p=yt,h=E,f=q)}}if(o<0)return i.i=0,i.t=0,i.s=0,i.d=1e3,i.y=this.groundAt(t,e),i.nx=0,i.ny=1,i.nz=0,i.hl=i.hr=0,i.wall=1e9,i.off=2,i.lx=1,i.lz=0,i.fx=0,i.fz=1,i.edge=-1,i.junc=-1,i.lim=50,i.ov=0,i;let g=o,m=this.sE[g],M=this.px[g],y=this.pz[g],v=this.px[g+1]-M,T=this.pz[g+1]-y,w=Math.hypot(v,T)||1,A=c,S=T/w,b=-v/w,_=(t-(M+v*A))*S+(e-(y+T*A))*b,C=this.eHw[m],z=this.py[g]+(this.py[g+1]-this.py[g])*A,D=(this.py[g+1]-this.py[g])/w,k=0,P=0,L=this.eA[m],O=this.eB[m],U=-1,Y=this.onPlaza(L,t,e),j=this.onPlaza(O,t,e);if(Y&&j){let gt=Math.hypot(t-this.jx[L],e-this.jz[L])-this.jr[L],Wt=Math.hypot(t-this.jx[O],e-this.jz[O])-this.jr[O];U=gt<=Wt?L:O}else if(Y)U=L;else if(j)U=O;else if(U=this.sJ[g],U>=0){let gt=t-this.jx[U],Wt=e-this.jz[U];gt*gt+Wt*Wt>(this.jr[U]+3)**2&&(U=-1)}let st=U>=0&&this.jEdges[U].length>=3&&Math.hypot(t-this.jx[U],e-this.jz[U])<=this.jr[U]+.35,it=this.sS[g]+A*w,xt=this.blend(m,it),W=this._bj;st&&this.jPlane[U]&&(xt=1,W=U);let K=0,ut=0;xt>0&&(z+=(this.planeY(W,t,e)-z)*xt,K=this.jgx[W]*xt,ut=this.jgz[W]*xt);let at=0;if(d<=.08&&p<_c&&h>=0&&(U<0||!this.jPlane[U])){at=1;let gt=h,Wt=this.sE[gt],Rt=Math.hypot(this.px[gt+1]-this.px[gt],this.pz[gt+1]-this.pz[gt])||1,I=this.py[gt]+(this.py[gt+1]-this.py[gt])*f,E=this.blend(Wt,this.sS[gt]+f*Rt);E>0&&(I+=(this.planeY(this._bj,t,e)-I)*E);let X=Math.max(.05,_c-d),J=_c-p;z+=(I-z)*J/(X+J)}let tt=d,vt=_>=0?this.pl[g]+(this.pl[g+1]-this.pl[g])*A:this.pr[g]+(this.pr[g+1]-this.pr[g])*A;if(tt>0&&!st){if(P=1,vt>.6){let gt=tt<.4?tt/.4:1;z+=.15*gt,tt<.4&&(k=(_>=0?1:-1)*.15/.4)}tt>vt&&(P=2)}i.wall=vt>=ge-.05?C+yx:1e9;let Et=v/w,Vt=T/w,Pt=D*(1-xt)*Et+k*S+K,zt=D*(1-xt)*Vt+k*b+ut,F=-Pt,Zt=1,Nt=-zt,Ft=Math.hypot(F,Zt,Nt)||1;return i.i=g,i.t=A,i.s=this.sS[g]+A*w,i.d=_,i.y=z,i.nx=F/Ft,i.ny=Zt/Ft,i.nz=Nt/Ft,i.hl=C,i.hr=C,i.off=P,i.lx=S,i.lz=b,i.fx=Et,i.fz=Vt,i.edge=m,i.junc=U,i.lim=this.eLim[m],i.ov=at,i}at(t,e,n,i){let r=this.eOff[t],a=this.eN[t];e<0&&(e=0),e>this.eLen[t]&&(e=this.eLen[t]);let o=0,l=a-1;for(;l-o>1;){let g=o+l>>1;this.sS[r+g]<=e?o=g:l=g}let c=r+o,h=Math.min(r+a-1,c+1),u=this.sS[h]-this.sS[c]||1,f=Math.max(0,Math.min(1,(e-this.sS[c])/u)),d=this.tx[c]+(this.tx[h]-this.tx[c])*f,p=this.tz[c]+(this.tz[h]-this.tz[c])*f,x=Math.hypot(d,p)||1;return i.fx=d/x,i.fz=p/x,i.lx=i.fz,i.lz=-i.fx,i.x=this.px[c]+(this.px[h]-this.px[c])*f+i.lx*n,i.z=this.pz[c]+(this.pz[h]-this.pz[c])*f+i.lz*n,i.y=this.surfY(t,e,i.x,i.z,this.py[c]+(this.py[h]-this.py[c])*f),i.i=c,i.hw=this.eHw[t],i}canLeave(t,e){return!this.eOne[t]||this.eA[t]===e}other(t,e){return this.eA[t]===e?this.eB[t]:this.eA[t]}route(t,e,n,i,r){let a=this.nj;this._dist||(this._dist=new Float64Array(a),this._prev=new Int32Array(a),this._pe=new Int32Array(a));let o=this._dist,l=this._prev,c=this._pe;o.fill(1/0),l.fill(-1),c.fill(-1);let h=[],u=(S,b)=>{h.push(S,b);let _=h.length/2-1;for(;_>0;){let C=_-1>>1;if(h[C*2]<=h[_*2])break;let z=h[C*2],D=h[C*2+1];h[C*2]=h[_*2],h[C*2+1]=h[_*2+1],h[_*2]=z,h[_*2+1]=D,_=C}},f=()=>{let S=h[0],b=h[1],_=h[h.length-2],C=h[h.length-1];if(h.length-=2,h.length){h[0]=_,h[1]=C;let z=0,D=h.length/2;for(;;){let k=2*z+1,P=k+1,L=z;if(k<D&&h[k*2]<h[L*2]&&(L=k),P<D&&h[P*2]<h[L*2]&&(L=P),L===z)break;let O=h[L*2],U=h[L*2+1];h[L*2]=h[z*2],h[L*2+1]=h[z*2+1],h[z*2]=O,h[z*2+1]=U,z=L}}return[S,b]},d=this.eLen[t],p=n>0?this.eB[t]:this.eA[t],x=n>0?this.eA[t]:this.eB[t],g=n>0?d-e:e;o[p]=g,u(g,p),c[p]=t,!this.eOne[t]&&o[x]>d-g+60&&(o[x]=d-g+60,u(o[x],x),c[x]=t);let m=1/0;if(i===t){let S=(r-e)*n;S>=0&&(m=S)}let M=this.eA[i],y=this.eB[i],v=this.eLen[i];for(;h.length;){let[S,b]=f();if(!(S>o[b])){if(S>m)break;for(let _ of this.jEdges[b]){if(!this.canLeave(_,b))continue;let C=this.other(_,b),z=S+this.eLen[_]*(this.eCls[_]>=5?1.15:1);z<o[C]&&(o[C]=z,l[C]=b,c[C]=_,u(z,C))}}}let T=-1,w=m;if(o[M]+r<w&&this.canLeave(i,M)&&(w=o[M]+r,T=M),o[y]+(v-r)<w&&(!this.eOne[i]||this.eA[i]===y)&&(w=o[y]+(v-r),T=y),w===1/0)return null;let A=[];if(T>=0){A.push([i,T===M?1:-1]);let S=T;for(let b=0;b<5e3&&l[S]>=0;b++){let _=c[S],C=l[S];A.push([_,this.eA[_]===C&&this.eB[_]===S?1:-1]),S=C}A.push([t,S===this.eB[t]?1:-1]),A.reverse()}else A.push([t,n]);return{len:w,edges:A}}project(t,e,n,i){let r=this.eOff[t],a=this.eN[t],o=Math.max(0,Math.min(a-2,Math.round(e/4)));for(;o>0&&this.sS[r+o]>e;)o--;let l=e,c=1e18;for(let h=Math.max(0,o-3);h<=Math.min(a-2,o+3);h++){let u=r+h,f=this.px[u],d=this.pz[u],p=this.px[u+1]-f,x=this.pz[u+1]-d,g=p*p+x*x||1,m=((n-f)*p+(i-d)*x)/g;m=m<0?0:m>1?1:m;let M=f+p*m-n,y=d+x*m-i,v=M*M+y*y;v<c&&(c=v,l=this.sS[u]+m*Math.sqrt(g))}return l}slot(t,e){return this.jEdges[e].indexOf(t)}edgeName(t,e){return this.nameText(this.eName[t],e)}areaName(t,e,n){let i=-1,r=1e18;for(let a=0;a<this.areas.length;a++){let o=this.areas[a],l=Math.hypot(o[0]-t,o[1]-e)/o[3];l<r&&(r=l,i=a)}return i>=0&&r<1400?this.nameText(this.areas[i][2],n):""}nameText(t,e){let n=this.names[t];return n?e==="ar"?n[1]||n[0]:n[0].replace(/[\u0600-\u06FF\u0750-\u077F\u2D30-\u2D7F]+/g,"").replace(/\s+/g," ").trim()||n[0]:""}};var Je={city:{model:"car_city",cls:"D",mass:1090,power:110,torque:250,rpm:6300,gears:[3.42,2,1.42,1.1,.9,.76],final:4.05,cda:.66,cl:.04,mu:1.06,steer:.64,nitro:4.2,drive:"f",turbo:1,cyl:3,shift:.28},hatch:{model:"car_hatch",cls:"D",mass:1235,power:96,torque:230,rpm:6200,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.64,cl:.03,mu:1,steer:.62,nitro:3.6,drive:"f",turbo:1,cyl:3,shift:.45},volt:{model:"car_volt",cls:"C",mass:1920,power:366,torque:510,rpm:16500,gears:[1],final:9,cda:.5,cl:.04,mu:1.04,steer:.58,nitro:7,drive:"a",ev:1},suvlux:{model:"car_suvlux",cls:"C",mass:2250,power:300,torque:620,rpm:6500,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.3,cda:1.05,cl:.03,mu:1,steer:.56,nitro:8,drive:"a",turbo:1,cyl:8},wedge:{model:"car_wedge",cls:"B",mass:3150,power:447,torque:960,rpm:12800,gears:[1],final:9,cda:1,cl:.02,mu:1,steer:.52,nitro:11,drive:"a",ev:1},police:{model:"car_police",cls:"A",mass:1900,power:330,torque:570,rpm:6600,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.2,cda:.74,cl:.06,mu:1.08,steer:.56,nitro:8.5,drive:"a",turbo:1,cyl:6},gt:{model:"car_gt",cls:"S",mass:1150,power:620,torque:760,rpm:9200,gears:[3,2.1,1.62,1.31,1.1,.94,.82],final:3.3,cda:.7,cl:.7,mu:1.32,steer:.52,nitro:11,drive:"r",cyl:10},t_small:{model:"tr_sedan",cls:"T",mass:1250,power:85,torque:170,rpm:6e3,gears:[3.5,2,1.3,1,.8],final:4,cda:.7,cl:0,mu:.95,steer:.6,nitro:0,drive:"f",cyl:4},t_heavy:{model:"tr_truck",cls:"T",mass:3500,power:120,torque:450,rpm:4e3,gears:[5,3,1.9,1.3,1,.8],final:4.1,cda:1.6,cl:0,mu:.9,steer:.55,nitro:0,drive:"r",cyl:6,diesel:1}};function _x(s){return Math.sin(1.45*Math.atan(14*s))}var vs=class{constructor(t,e,n){this.spec=t;let i=Object.assign({engine:0,nitro:0,grip:0,gearbox:0,brakes:0},n);this.up=i,this.power=t.power*(1+.06*i.engine),this.torqueMax=t.torque*(1+.06*i.engine),this.nitroForce=t.nitro*1e3*(1+.08*i.nitro),this.mu=t.mu*(1+.025*i.grip),this.shiftTime=(t.shift||.15)*(1-.13*i.gearbox),this.gearPull=1+.025*i.gearbox,this.brakeGrip=1+.035*i.brakes,this.spinT=0,this.spinDur=.9,this.spinDir=1,this.spinA=0,this.spinDone=!1,this.mass=t.mass,this.invMass=1/t.mass;let r=e.w,a=e.h*.8,o=e.l,l=t.mass;this.Ix=l*(a*a+o*o)/12,this.Iy=l*(r*r+o*o)/12,this.Iz=l*(r*r+a*a)/12,this.half={x:r/2,y:e.h/2,z:o/2},this.cgY=e.cg,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.wx=0,this.wy=0,this.wz=0,this.R=new Float32Array(9),this.wheels=[];let c=(e.wheels[0].z+e.wheels[1].z)/2,h=(e.wheels[2].z+e.wheels[3].z)/2,u=t.drive==="r"?.45:t.drive==="f"?.6:.5;this.cgZ=h+u*(c-h);for(let d=0;d<4;d++){let p=e.wheels[d];this.wheels.push({mx:p.x,my:p.y-this.cgY+.18,mz:p.z-this.cgZ,r:p.r,front:d<2,rest:.36,comp:0,prevComp:0,contact:!1,load:0,spin:0,spinAngle:0,steer:0,slipLat:0,slipLong:0,cx:0,cy:0,cz:0,surf:0,hint:0,travel:0})}let f=.11;this.k=t.mass*9.81/4/f,this.c=2*.32*Math.sqrt(this.k*t.mass/4),this.input={throttle:0,brake:0,steer:0,handbrake:0,nitro:0},this.steerNow=0,this.gear=1,this.rpm=t.ev?0:900,this.shiftT=0,this.nitroOn=0,this.grounded=0,this.airTime=0,this.speed=0,this.fwdSpeed=0,this.latSpeed=0,this.hint=0,this.assist={esc:1,tc:1,air:1},this.reverse=!1,this.stopT=0,this.hold=!1,this.wrecked=0,this.topSpeedCap=1e9,this.gearbox=null,this.mgear=1,this.stalled=!1,this.fuelCut=!1,this.clutchE=1,this.input.clutch=0,this.updateR()}manualDrive(t,e,n){let i=this.spec,r=this.input,a=this.mgear;this.shiftT>0&&(this.shiftT-=t),this.reverse=a<0,this.gear=a>0?a:1;let o=a===0?0:(a<0?i.gears[0]*1.08:i.gears[a-1])*i.final,l=Math.max(Math.abs(e)/.34,n)*o*30/Math.PI,c=i.ev?0:850,h=this.stalled||this.fuelCut,u=h?0:r.throttle,f;if(a===0||this.shiftT>0?f=0:this.gearbox==="clutch"?f=1-Math.max(0,Math.min(1,r.clutch)):f=u<.05&&l<c*1.15?0:Math.max(.12,Math.min(1,(l-250)/1150)),this.clutchE=f,h)this.rpm+=(0-this.rpm)*Math.min(1,t*3);else{let x=c+u*(i.rpm*1.02-c),g=f*f,m=Math.max(g>.9?300:c,x*(1-g)+l*g);this.rpm+=(m-this.rpm)*Math.min(1,t*(f>.9?25:7)),this.rpm>i.rpm*1.05&&(this.rpm=i.rpm*1.05)}this.gearbox==="clutch"&&!h&&f>.6&&this.rpm<460&&!i.ev&&(this.stalled=!0),this.stalled&&r.clutch>.9&&!this.fuelCut&&(this.stalled=!1,this.rpm=c);let d=0;!h&&f>0&&(d=this.engineTorque(Math.max(this.rpm,c))*u,u<.05&&l>c*1.1&&(d-=this.torqueMax*.12*(.3+l/i.rpm)),this.rpm>=i.rpm&&d>0&&(d*=.15),d*=f);let p=d*o*.88/.34*this.gearPull;return a<0?-p:p}shift(t){let e=this.spec.gears.length,n=this.mgear+t;return n<-1||n>e?"end":this.gearbox==="clutch"&&this.input.clutch<.6?"clutch":n<0&&this.fwdSpeed>1.5?"moving":n>0&&this.gearbox==="manual"&&Math.abs(this.fwdSpeed)/.34*this.spec.gears[n-1]*this.spec.final*30/Math.PI>this.spec.rpm*1.02?"revs":(this.mgear=n,this.shiftT=this.gearbox==="clutch"?0:this.shiftTime||.2,"")}updateR(){let t=this.qx,e=this.qy,n=this.qz,i=this.qw,r=this.R;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}setPose(t,e,n,i){this.px=t,this.py=e,this.pz=n;let r=i/2;this.qx=0,this.qy=Math.sin(r),this.qz=0,this.qw=Math.cos(r),this.vx=this.vy=this.vz=0,this.wx=this.wy=this.wz=0;for(let a of this.wheels)a.comp=a.prevComp=.1,a.spin=0;this.updateR()}yaw(){return Math.atan2(this.R[6],this.R[8])}applyAngular(t,e,n,i){let r=this.R,a=r[0]*t+r[1]*e+r[2]*n,o=r[3]*t+r[4]*e+r[5]*n,l=r[6]*t+r[7]*e+r[8]*n,c=a/this.Ix,h=o/this.Iy,u=l/this.Iz;this.wx+=(r[0]*c+r[3]*h+r[6]*u)*i,this.wy+=(r[1]*c+r[4]*h+r[7]*u)*i,this.wz+=(r[2]*c+r[5]*h+r[8]*u)*i}impulse(t,e,n,i,r,a){this.vx+=t*this.invMass,this.vy+=e*this.invMass,this.vz+=n*this.invMass,this.applyAngular(r*n-a*e,a*t-i*n,i*e-r*t,1)}invMassAt(t,e,n,i,r,a){let o=e*a-n*r,l=n*i-t*a,c=t*r-e*i,h=this.R,u=h[0]*o+h[1]*l+h[2]*c,f=h[3]*o+h[4]*l+h[5]*c,d=h[6]*o+h[7]*l+h[8]*c;return this.invMass+u*u/this.Ix+f*f/this.Iy+d*d/this.Iz}engineTorque(t){let e=t/this.spec.rpm,n=this.spec,i=n.ev?0:n.turbo?.33:.55,r=e<i?.55+.45*(e/i):e<.9?1:1-(e-.9)*(n.ev?1.5:2.5);r<0&&(r=0);let a=this.torqueMax*r,o=this.power*1e3/Math.max(100,t*Math.PI/30);return Math.min(a,o)}startSpin(t){this.spinT=this.spinDur,this.spinDir=t,this.spinA=0,this.spinDone=!1}stopSpin(){this.spinT=0,this.spinA=0}lockAt(t,e=0,n=!1){let i=this.spec,r=Math.max(0,t),a=i.steer/(1+r*(i.steerFade??.035));if(n)return a;let o=Math.max(1.5,this.wheels[0].mz-this.wheels[2].mz);return Math.min(a,Math.atan(o*i.mu*9.81/Math.max(1,r*r))+(i.steerSlack??.13)+e*(i.steerCatch??1))}step(t,e,n){let i=this.spec,r=this.R,a=this.input,o=r[0],l=r[1],c=r[2],h=r[3],u=r[4],f=r[5],d=r[6],p=r[7],x=r[8],g=Math.hypot(this.vx,this.vy,this.vz),m=this.vx*d+this.vy*p+this.vz*x;this.speed=g,this.fwdSpeed=m,this.latSpeed=this.vx*o+this.vy*l+this.vz*c;let M=this.lockAt(m,Math.abs(Math.atan2(this.latSpeed,Math.max(1,Math.abs(m)))),a.handbrake>0),y=a.steer*M,v=(i.steerRate??2.6)*t;this.steerNow+=Math.max(-v,Math.min(v,y-this.steerNow));let T=this.wheels[2].r,w=0,A=0;for(let lt=0;lt<4;lt++){let q=this.wheels[lt];(i.drive==="a"||i.drive==="f"===q.front)&&(w+=Math.abs(q.spin),A++)}let S=w/Math.max(1,A)*T/.34,b=0;if(this.gearbox)b=this.manualDrive(t,m,S);else{let lt=i.gears[this.gear-1]*i.final,q=Math.abs(m)/.34,ft=Math.max(i.ev?0:900,Math.min(i.rpm*1.02,Math.max(q,S)*lt*30/Math.PI));this.rpm+=(ft-this.rpm)*Math.min(1,t*25),this.shiftT>0?this.shiftT-=t:!this.reverse&&this.grounded&&(q*lt*30/Math.PI>i.rpm*.95&&this.gear<i.gears.length?(this.gear++,this.shiftT=this.shiftTime):this.gear>1&&q*i.gears[this.gear-2]*i.final*30/Math.PI<i.rpm*(a.throttle>.5?.72:.6)&&(this.gear--,this.shiftT=.1)),a.brake>.5&&m<.8&&a.throttle<.1&&!this.hold?this.stopT+=t:this.stopT=0,this.stopT>.35&&(this.reverse=!0),a.throttle>.1&&this.reverse&&(this.reverse=!1),this.reverse&&(this.gear=1);let Dt=this.reverse?a.brake:a.throttle;this.shiftT<=0&&Dt>0&&(b=this.engineTorque(this.rpm)*Dt*i.gears[this.gear-1]*i.final*.88/.34*this.gearPull,this.reverse&&(b=-Math.min(b,4e3)),this.rpm>=i.rpm*1&&!this.reverse&&(b*=.2))}this.fuelCut&&!this.gearbox&&(b=0,this.rpm=0,this.reverse=!1),m>this.topSpeedCap&&(b=Math.min(b,0));let _=this.nitroOn>0?this.nitroForce*this.nitroOn:0,C=this.reverse&&!this.gearbox?0:a.brake;!this.reverse&&a.throttle<.05&&a.brake<.05&&Math.abs(m)<.8&&(C=.5),this.hold&&(C=1);let z=C*this.mass*9.81*1.15*this.brakeGrip,D=this.spinT>0;D&&(b=0);let k=0,P=-this.mass*9.81,L=0,O=0,U=0,Y=0,j=0,st=this.steerNow,it=Math.cos(st),xt=Math.sin(st),W=D?0:a.handbrake,K=this.mass/4;for(let lt=0;lt<4;lt++){let q=this.wheels[lt],ft=o*q.mx+h*q.my+d*q.mz,Dt=l*q.mx+u*q.my+p*q.mz,ot=c*q.mx+f*q.my+x*q.mz,yt=this.px+ft,St=this.py+Dt,Ut=this.pz+ot;e.query(yt,Ut,q.hint,n),q.hint=n.i,q.surf=n.off;let wt=u>.25?u:.25,Xt=(St-n.y)/wt,Ot=q.rest+q.r-Xt;if(q.prevComp=q.comp,Ot<=0||u<.2){q.contact=!1,q.comp=0,q.load=0,q.slipLat=0,q.slipLong=0,q.travel=q.rest,q.spin*=.995;continue}let Jt=Math.min(Ot,q.rest+.12);q.comp=Jt,q.travel=q.rest-Jt,q.contact=!0,j++;let H=(Jt-q.prevComp)/t,mt=this.k*Jt+this.c*H*(H<0?1.7:1);Ot>q.rest+.12&&(mt+=(Ot-q.rest-.12)*this.k*6+Math.max(0,H)*this.c*2),mt<0&&(mt=0),q.load=mt;let Q=yt-h*Xt,rt=St-u*Xt,bt=Ut-f*Xt;q.cx=Q,q.cy=rt,q.cz=bt;let Mt=Q-this.px,Bt=rt-this.py,he=bt-this.pz,Se=this.vx+(this.wy*he-this.wz*Bt),ne=this.vy+(this.wz*Mt-this.wx*he),Be=this.vz+(this.wx*Bt-this.wy*Mt),Ee=d,Ke=p,Qe=x;q.front&&(Ee=d*it+o*xt,Ke=p*it+l*xt,Qe=x*it+c*xt);let Ve=n.nx,Tn=n.ny,Xn=n.nz,Fi=Ee*Ve+Ke*Tn+Qe*Xn;Ee-=Ve*Fi,Ke-=Tn*Fi,Qe-=Xn*Fi;let qn=Math.hypot(Ee,Ke,Qe)||1;Ee/=qn,Ke/=qn,Qe/=qn;let Ss=Tn*Qe-Xn*Ke,mi=Xn*Ee-Ve*Qe,Es=Ve*Ke-Tn*Ee,vn=Se*Ee+ne*Ke+Be*Qe,Ts=Se*Ss+ne*mi+Be*Es,$a=this.mu*(n.off===0?1:.85),ir=mt,V=$a*(1.08-.08*Math.min(2,ir/(this.mass*9.81/4)))*ir,$=Math.atan2(Ts,Math.abs(vn)+1.5),Z=1;!q.front&&W>0&&(Z=.42),D&&(Z=.06);let G=-_x($)*V*Z,dt=Math.abs(Ts)*K/t;Math.abs(G)>dt&&(G=G>0?dt:-dt);let pt=0,Tt=i.drive==="a"||i.drive==="f"===q.front;Tt&&(pt+=b/A),_&&!q.front&&(pt+=_/2);let At=z*(q.front?.32:.18);if(!q.front&&W>0&&(At+=W*this.mass*9.81*.35),At>0){let Le=Math.abs(vn)*K/t,Qt=Math.min(At,Le);pt-=vn>0?Qt:-Qt}if(pt-=.013*mt*Math.max(-1,Math.min(1,vn)),q.slipLong=0,Math.abs(pt)>V&&(q.slipLong=Math.min(1,(Math.abs(pt)-V)/V),this.assist.tc&&Tt&&b>0&&(pt=Math.sign(pt)*V*.98)),this.assist.tc&&Tt&&b>0&&W===0&&pt>0){let Le=Math.sqrt(Math.max(0,V*V-G*G))*.98;pt>Le&&(pt=Le)}let kt=At>0&&b<=0?V*this.brakeGrip:V,Gt=Math.hypot(pt,G);if(Gt>kt){let Le=kt/Gt;pt*=Le,G*=Le}q.slipLat=Math.abs(Ts)>1.5?Math.min(1,(Math.abs($)-.13)*4):0,q.slipLat<0&&(q.slipLat=0),!q.front&&W>0&&Math.abs(vn)>6&&(q.slipLat=Math.max(q.slipLat,.6));let Ct=vn/q.r;q.spin=Ct*(1+q.slipLong*.6)+(Tt&&b>0&&q.slipLong>0?6*q.slipLong:0),!q.front&&W>0&&Math.abs(vn)>1&&(q.spin*=.2);let $t=Ve*mt+Ee*pt+Ss*G,re=Tn*mt+Ke*pt+mi*G,ae=Xn*mt+Qe*pt+Es*G;k+=$t,P+=re,L+=ae;let Ie=Mt,Kt=Bt+.25*Xt,It=he;O+=Kt*ae-It*re,U+=It*$t-Ie*ae,Y+=Ie*re-Kt*$t}for(let lt=0;lt<4;lt++){let q=this.wheels[lt];q.spinAngle+=q.spin*t,q.spinAngle>1e4&&(q.spinAngle-=1e4)}let ut=.5*1.225*i.cda*g;k-=ut*this.vx,P-=ut*this.vy,L-=ut*this.vz;let at=.5*1.225*i.cl*m*Math.abs(m)*(j>0?1:.2);k-=h*at,P-=u*at,L-=f*at,this.grounded=j,j===0?this.airTime+=t:this.airTime=0;let tt=this.wx*h+this.wy*u+this.wz*f;if(j>=3&&this.assist.esc&&W===0&&!D&&m>5){let lt=this.wheels[0].mz-this.wheels[2].mz,q=i.mu*9.81*1.1/m,ft=Math.max(-q,Math.min(q,m*Math.tan(st)/lt)),Dt=tt-ft;if(Dt*tt>0){let ot=-Dt*this.Iy*6*this.assist.esc;O+=h*ot,U+=u*ot,Y+=f*ot}}if(j>=3&&W>0&&!D&&m>12){let lt=a.steer*this.Iy*1.4;O+=h*lt,U+=u*lt,Y+=f*lt}if(j===0&&g>8){let lt=Math.atan2(this.latSpeed,Math.max(1,Math.abs(m))),q=this.wx*h+this.wy*u+this.wz*f,ft=this.Iy*((.6+2.4*this.assist.air)*lt-(.3+1.5*this.assist.air)*q);O+=h*ft,U+=u*ft,Y+=f*ft}if(j===0&&this.assist.air&&!this.wrecked){let lt=-f,q=h,ft=7*this.assist.air,Dt=3.2*this.assist.air;O+=(lt*ft-this.wx*Dt)*this.Ix,Y+=(q*ft-this.wz*Dt)*this.Iz}if(this.vx+=k*this.invMass*t,this.vy+=P*this.invMass*t,this.vz+=L*this.invMass*t,this.applyAngular(O,U,Y,t),D){let lt=this.spinDur,q=lt-this.spinT,ft=this.spinDir*Math.PI*Math.PI/lt*Math.sin(Math.PI*Math.min(1,q/lt)),Dt=this.wx*h+this.wy*u+this.wz*f;if(this.wx+=h*(ft-Dt),this.wy+=u*(ft-Dt),this.wz+=f*(ft-Dt),this.spinA+=Math.abs(ft)*t,this.spinT-=t,this.spinT<=0){this.spinT=0;let ot=this.wx*h+this.wy*u+this.wz*f;this.wx-=h*ot,this.wy-=u*ot,this.wz-=f*ot,this.spinA>Math.PI*1.8&&(this.spinDone=!0)}}let vt=j?.995:.999;this.wx*=vt,this.wy*=vt,this.wz*=vt,this.px+=this.vx*t,this.py+=this.vy*t,this.pz+=this.vz*t;let Et=this.qx,Vt=this.qy,Pt=this.qz,zt=this.qw,F=this.wx,Zt=this.wy,Nt=this.wz;this.qx+=.5*t*(F*zt+Zt*Pt-Nt*Vt),this.qy+=.5*t*(Zt*zt+Nt*Et-F*Pt),this.qz+=.5*t*(Nt*zt+F*Vt-Zt*Et),this.qw+=.5*t*(-F*Et-Zt*Vt-Nt*Pt);let Ft=Math.hypot(this.qx,this.qy,this.qz,this.qw);this.qx/=Ft,this.qy/=Ft,this.qz/=Ft,this.qw/=Ft,this.updateR(),e.query(this.px,this.pz,this.hint,n),this.hint=n.i,this.trackQ_s=n.s,this.trackQ_d=n.d;let gt=n.y+.25,Wt=this.half.x,Rt=this.half.y*.9,I=this.half.z,E=1e9,X=0,J=0,nt=0;for(let lt=0;lt<8;lt++){let q=lt&1?Wt:-Wt,ft=lt&2?Rt:-Rt*.4,Dt=(lt&4?I:-I)-this.cgZ,ot=o*q+h*ft+d*Dt,yt=l*q+u*ft+p*Dt,St=c*q+f*ft+x*Dt,Ut=this.py+yt;Ut<E&&(E=Ut,X=ot,J=yt,nt=St)}let et=n.y-E;if(this.bodyHit=0,et>0){this.py+=et*.8;let lt=n.nx,q=n.ny,ft=n.nz,Dt=this.vx+(this.wy*nt-this.wz*J),ot=this.vy+(this.wz*X-this.wx*nt),yt=this.vz+(this.wx*J-this.wy*X),St=Dt*lt+ot*q+yt*ft;if(St<0){let Ut=this.invMassAt(X,J,nt,lt,q,ft),wt=-1.25*St/Ut;this.impulse(lt*wt,q*wt,ft*wt,X,J,nt);let Xt=Dt-lt*St,Ot=ot-q*St,Jt=yt-ft*St,H=Math.hypot(Xt,Ot,Jt);if(H>.01){let mt=Math.min(wt*.6,H/Ut);this.impulse(-Xt/H*mt,-Ot/H*mt,-Jt/H*mt,X,J,nt)}this.bodyHit=-St}}gt>this.py&&j===0&&et<=0}};var Ce={uSun:{value:new B(.45,.75,-.48).normalize()},uSunCol:{value:new Ht(1,.94,.84)},uSky:{value:new Ht(.55,.72,.95)},uGround:{value:new Ht(.42,.38,.32)},uFog:{value:new Ht(.74,.82,.92)},uFogNear:{value:220},uFogFar:{value:900},uTime:{value:0},uNight:{value:0}},fi=`
varying float vFog;
`,va=`
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`,Bn=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`,Mc=`
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;function ys(){return new me({uniforms:Ce,vertexShader:Bn+fi+`
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
  `+va+`
}`,fragmentShader:Bn+Mc+fi+`
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function bu(){return new me({uniforms:Ce,vertexShader:Bn+fi+`
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  `+va+`
}`,fragmentShader:Bn+Mc+fi+`
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
}`})}function ya(s,t,e){return new me({uniforms:Object.assign({uPaint:{value:new Ht(s||13639712)},uRoof:{value:new Ht(t>=0?t:s||13639712)},uRoofY:{value:e||99},uBrake:{value:0}},Ce),vertexShader:Bn+fi+`
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
  `+va+`
}`,fragmentShader:Bn+Mc+fi+`
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
}`})}function wu(){return new me({uniforms:Ce,depthWrite:!1,side:Ue,vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:Bn+`
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
}`})}function Su(){return new me({uniforms:Ce,vertexShader:Bn+fi+`
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; `+va+" }",fragmentShader:Bn+fi+`
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
}`})}function _a(){return new me({uniforms:{uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:Ci,vertexShader:"attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }"})}function Eu(s){return new me({uniforms:{uScale:{value:600},uNight:Ce.uNight},transparent:!0,depthWrite:!1,blending:s?Ci:ii,vertexShader:`attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,fragmentShader:"uniform float uNight; varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); float lum = max(vCol.r, max(vCol.g, vCol.b)); vec3 c = vCol.rgb * mix(1.0, 0.3, uNight * step(abs(vCol.r - vCol.b), 0.1)); gl_FragColor = vec4(c, a); }"})}function Ma(){return new me({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }"})}var Tc=["wfl","wfr","wbl","wbr"];function Js(s){let t=vc(s),e=t.parts.find(o=>o.name==="body"),n=Tc.map(o=>{let l=t.parts.find(c=>c.name===o);return l?{x:l.pivot[0],y:l.pivot[1],z:l.pivot[2],r:l.radius}:null}),i=e.max[0]-e.min[0],r=e.max[2]-e.min[2],a=e.max[1];for(let o=0;o<4;o++)n[o]||(n[o]={x:(o&1?-1:1)*i*.4,y:.35,z:(o<2?1:-1)*r*.32,r:.35});return{w:i,l:r,h:a,cg:Math.min(.62,a*.38),wheels:n,front:e.max[2],back:e.min[2]}}var bc=null,wc=null;function Mx(){if(bc)return bc;let s=new ds(.16,1,8,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,-.5);let t=s.attributes.position.count,e=new Uint8Array(t*4);for(let n=0;n<t;n++){let r=-s.attributes.position.getZ(n);e[n*4]=120+135*(1-r),e[n*4+1]=160*(1-r)+60,e[n*4+2]=255,e[n*4+3]=255*(1-r*.9)}return s.setAttribute("col",new qt(e,4,!0)),bc=s,s}function bx(){if(wc)return wc;let s=new oi(1,1);s.rotateX(-Math.PI/2);let t=new Uint8Array(4*4);for(let e=0;e<4;e++)t[e*4+3]=140;return s.setAttribute("col",new qt(t,4,!0)),wc=s,s}var Sc=null,Ec=null,_s=class{constructor(t,e,n,i){this.scene=t,this.root=new wn,this.root.matrixAutoUpdate=!1;let r=vc(e);this.mat=ya(n,i,r.roofY),this.body=new ie(Ni(e,"body"),this.mat),this.body.matrixAutoUpdate=!1,this.root.add(this.body);for(let o of r.parts)if(o.name!=="body"&&o.name[0]!=="w"){let l=new ie(Ni(e,o.name),this.mat);l.matrixAutoUpdate=!1,this.root.add(l)}this.wheels=[];let a=Js(e);this.dims=a;for(let o=0;o<4;o++){let l=r.parts.find(h=>h.name===Tc[o]),c=new ie(l?Ni(e,Tc[o]):Ni("debris_tire","body"),this.mat);c.matrixAutoUpdate=!1,c.userData.base=new B(a.wheels[o].x,a.wheels[o].y,a.wheels[o].z),this.root.add(c),this.wheels.push(c)}Sc=Sc||Ma(),this.shadow=new ie(bx(),Sc),this.shadow.matrixAutoUpdate=!1,this.shadow.renderOrder=1,t.add(this.shadow),Ec=Ec||_a(),this.flames=[];for(let o of[.35,-.35]){let l=new ie(Mx(),Ec);l.position.set(o*a.w*.6,a.h*.28,a.back-.05),l.visible=!1,l.renderOrder=2,this.root.add(l),this.flames.push(l)}this.q=new sn,this.e=new un,this.tmp=new se,this.v3=new B,this.s3=new B(1,1,1),t.add(this.root),this.lod=0}setPaint(t,e){this.mat.uniforms.uPaint.value.setHex(t),this.mat.uniforms.uRoof.value.setHex(e>=0?e:t)}sync(t,e,n,i){let r=t.R,a=this.root.matrix.elements,o=this.dims.cg;a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=r[3],a[5]=r[4],a[6]=r[5],a[7]=0,a[8]=r[6],a[9]=r[7],a[10]=r[8],a[11]=0;let l=t.cgZ||0;a[12]=t.px-r[3]*o-r[6]*l,a[13]=t.py-r[4]*o-r[7]*l,a[14]=t.pz-r[5]*o-r[8]*l,a[15]=1,this.root.matrixWorldNeedsUpdate=!0;let c=e<140;this.lod=e>900?2:c?0:1,this.root.visible=this.lod<2;for(let v=0;v<4;v++){let T=this.wheels[v],w=t.wheels[v];if(T.visible=this.lod===0||e<260,!T.visible)continue;let A=T.userData.base,S=w.front?t.steerNow:0;this.e.set(w.spinAngle,S,0,"YXZ"),this.q.setFromEuler(this.e),this.v3.set(A.x,A.y+(.1-(w.contact?w.travel-.25:.12))*.6,A.z),T.matrix.compose(this.v3,this.q,this.s3)}let h=n>0&&this.lod===0;for(let v of this.flames)if(v.visible=h,h){let T=.7+n*(.8+Math.random()*.5);v.scale.set(1,1,T*1.6),v.updateMatrix()}this.mat.uniforms.uBrake.value=i;let u=this.shadow.matrix.elements,f=Math.atan2(r[6],r[8]),d=Math.cos(f),p=Math.sin(f),x=t.groundY!==void 0?t.groundY:t.py-.6,g=Math.max(0,t.py-x-.5),m=Math.max(.3,1-g*.12),M=this.dims.w*1.15*m,y=this.dims.l*1.05*m;u[0]=d*M,u[1]=0,u[2]=-p*M,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=p*y,u[9]=0,u[10]=d*y,u[11]=0,u[12]=t.px,u[13]=x+.06,u[14]=t.pz,u[15]=1,this.shadow.matrixWorldNeedsUpdate=!0,this.shadow.visible=this.lod===0&&g<8}dispose(){this.scene.remove(this.root),this.scene.remove(this.shadow),this.mat.dispose()}};var Pe={nx:0,nz:0,depth:0,px:0,pz:0},En=new Float32Array(8);function Tu(s,t){let e=s.R,n=s.half.x,i=s.half.z,r=e[0],a=e[2],o=Math.hypot(r,a)||1;r/=o,a/=o;let l=e[6],c=e[8],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(let f=-1;f<=1;f+=2)for(let d=-1;d<=1;d+=2)t[u++]=s.px-e[6]*s.cgZ+r*n*f+l*i*d,t[u++]=s.pz-e[8]*s.cgZ+a*n*f+c*i*d;return t}function wx(s,t){let e=1e9;for(let c=0;c<2;c++){let h=c?t:s,u=h.R;for(let f=0;f<2;f++){let d=f?u[6]:u[0],p=f?u[8]:u[2],x=Math.hypot(d,p)||1;d/=x,p/=x;let g=Au(s,d,p),m=Au(t,d,p),M=(s.px-s.R[6]*s.cgZ)*d+(s.pz-s.R[8]*s.cgZ)*p,y=(t.px-t.R[6]*t.cgZ)*d+(t.pz-t.R[8]*t.cgZ)*p,v=g+m-Math.abs(y-M);if(v<=0)return!1;if(v<e){e=v;let T=y-M>=0?1:-1;Pe.nx=d*T,Pe.nz=p*T}}}Pe.depth=e,Tu(t,En);let n=1e9,i=0,r=0;for(let c=0;c<4;c++){let h=En[c*2]*Pe.nx+En[c*2+1]*Pe.nz;h<n&&(n=h,i=En[c*2],r=En[c*2+1])}Tu(s,En);let a=-1e9,o=0,l=0;for(let c=0;c<4;c++){let h=En[c*2]*Pe.nx+En[c*2+1]*Pe.nz;h>a&&(a=h,o=En[c*2],l=En[c*2+1])}return Pe.px=(i+o)/2,Pe.pz=(r+l)/2,!0}function Au(s,t,e){let n=s.R,i=n[0],r=n[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=n[6],l=n[8],c=Math.hypot(o,l)||1;return o/=c,l/=c,Math.abs(i*t+r*e)*s.half.x+Math.abs(o*t+l*e)*s.half.z}var fe={j:0,rel:0,nx:0,nz:0,px:0,py:0,pz:0};function Ru(s,t){if(Math.abs(s.py-t.py)>2.2)return 0;let e=s.px-t.px,n=s.pz-t.pz,i=s.half.z+t.half.z;if(e*e+n*n>i*i||!wx(s,t))return 0;let r=Pe.nx,a=Pe.nz,o=s.invMass/(s.invMass+t.invMass),l=1-o,c=Pe.depth+.01;s.px-=r*c*o,s.pz-=a*c*o,t.px+=r*c*l,t.pz+=a*c*l;let h=(s.py+t.py)/2+.1,u=Pe.px-s.px,f=h-s.py,d=Pe.pz-s.pz,p=Pe.px-t.px,x=h-t.py,g=Pe.pz-t.pz,m=s.vx+(s.wy*d-s.wz*f),M=s.vy+(s.wz*u-s.wx*d),y=s.vz+(s.wx*f-s.wy*u),v=t.vx+(t.wy*g-t.wz*x),T=t.vy+(t.wz*p-t.wx*g),w=t.vz+(t.wx*x-t.wy*p),A=v-m,S=T-M,b=w-y,_=A*r+b*a;if(_>=0)return 0;let C=.25,z=s.invMassAt(u,f,d,r,0,a)+t.invMassAt(p,x,g,r,0,a),D=-(1+C)*_/z;s.impulse(-r*D,0,-a*D,u,f,d),t.impulse(r*D,0,a*D,p,x,g);let k=A-r*_,P=S,L=b-a*_,O=Math.hypot(k,P,L);if(O>.05){let U=Math.min(D*.35,O/z),Y=k/O,j=P/O,st=L/O;s.impulse(Y*U,j*U,st*U,u,f,d),t.impulse(-Y*U,-j*U,-st*U,p,x,g)}return fe.j=D,fe.rel=-_,fe.nx=r,fe.nz=a,fe.px=Pe.px,fe.py=h,fe.pz=Pe.pz,D}var ba=class{constructor(t,e){this.cam=new ke(64,t,.3,e),this.mode=0,this.pos=new B,this.vel=new B,this.look=new B,this.dir=new B(0,0,1),this.shake=0,this.shakeOn=!0,this.init=!1,this.wreckA=0,this.back=!1,this.t=new B,this.l=new B}kick(t){this.shakeOn&&(this.shake=Math.min(1,this.shake+t))}update(t,e){let n=e.veh,i=n.R,r=this.cam,a=Math.max(0,n.fwdSpeed),o=i[6],l=i[8];n.speed>4&&e.wreck<=0&&(o=o*(1-.65)+n.vx/n.speed*.65,l=l*(1-.65)+n.vz/n.speed*.65);let c=Math.hypot(o,l)||1;o/=c,l/=c;let h=1-Math.exp(-t*7);this.dir.x+=(o-this.dir.x)*h,this.dir.z+=(l-this.dir.z)*h;let u=Math.hypot(this.dir.x,this.dir.z)||1,f=this.dir.x/u,d=this.dir.z/u,p,x,g;this.mode===1?(p=9+a*.03,x=3.4,g=6):this.mode===2?(p=-.6,x=1.05,g=30):(p=6.2+a*.022,x=2.25+a*.004,g=5);let m=this.back?-1:1;if(e.wreck>0?(this.wreckA+=t*.9,this.t.set(n.px+Math.sin(this.wreckA)*9,n.py+3.5,n.pz+Math.cos(this.wreckA)*9),this.l.set(n.px,n.py,n.pz)):(this.t.set(n.px-f*p*m,n.py+x,n.pz-d*p*m),this.l.set(n.px+f*g*m,n.py+(this.mode===2?.9:.8),n.pz+d*g*m)),!this.init||this.mode===2||this.back)this.pos.copy(this.t),this.init=!0;else{let y=1-Math.exp(-t*12);this.pos.lerp(this.t,y),this.pos.y<n.py+.8&&(this.pos.y=n.py+.8)}if(r.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let y=this.shake*this.shake*.35;r.position.x+=(Math.random()-.5)*y,r.position.y+=(Math.random()-.5)*y}r.lookAt(this.l);let M=62+Math.min(16,a*.13)+(e.veh.nitroOn?8*Math.min(1.5,e.veh.nitroOn):0);r.fov+=(M-r.fov)*(1-Math.exp(-t*4)),r.updateProjectionMatrix()}};var wa=class{constructor(t,e,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Uint8Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Uint8Array(e*4);let i=new xe;this.aPos=new qt(this.pos,3),this.aPos.setUsage(ci),this.aCol=new qt(this.col,4,!0),this.aCol.setUsage(ci),this.aSize=new qt(this.size,1),this.aSize.setUsage(ci),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("size",this.aSize),i.setDrawRange(0,0),this.mat=Eu(n),this.points=new ia(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.gravity=n?-9.8:.6,t.add(this.points),this.next=0}emit(t,e,n,i,r,a,o,l,c,h,u,f,d){let p=this.next;this.next=(this.next+1)%this.max,this.n<this.max&&this.n++,this.pos[p*3]=t,this.pos[p*3+1]=e,this.pos[p*3+2]=n,this.vel[p*3]=i,this.vel[p*3+1]=r,this.vel[p*3+2]=a,this.base[p*4]=o,this.base[p*4+1]=l,this.base[p*4+2]=c,this.base[p*4+3]=h,this.size[p]=u,this.life[p]=f,this.age[p]=0,this.grow[p]=d||0}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.age[n]>=this.life[n]){this.col[n*4+3]=0;continue}this.age[n]+=t;let i=1-this.age[n]/this.life[n];this.vel[n*3+1]+=this.gravity*t,this.vel[n*3]*=.985,this.vel[n*3+2]*=.985,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*i}this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},Ac=class{constructor(t,e){this.max=e,this.next=0,this.pos=new Float32Array(e*4*3),this.col=new Uint8Array(e*4*4),this.uv=new Float32Array(e*4*2);let n=new Uint16Array(e*6);for(let r=0;r<e;r++){let a=r*4;n.set([a,a+1,a+2,a,a+2,a+3],r*6)}for(let r=0;r<e*4;r++)this.uv[r*2]=.5,this.uv[r*2+1]=.5;let i=new xe;this.aPos=new qt(this.pos,3),this.aPos.setUsage(ci),this.aCol=new qt(this.col,4,!0),this.aCol.setUsage(ci),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("uv",new qt(this.uv,2)),i.setIndex(new qt(n,1)),this.mesh=new ie(i,Ma()),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.last=new Float32Array(16*4).fill(NaN),this.dirty=!1}add(t,e,n,i,r,a,o){let l=this.last,c=t*4;if(o<=0||isNaN(l[c])){l[c]=e,l[c+1]=n,l[c+2]=i,l[c+3]=o>0?1:NaN,o<=0&&(l[c]=NaN);return}let h=e-l[c],u=i-l[c+2];if(h*h+u*u<.36)return;let f=this.next;this.next=(this.next+1)%this.max;let d=.13,p=this.pos,x=this.col,g=f*12;p[g]=l[c]+r*d,p[g+1]=l[c+1]+.03,p[g+2]=l[c+2]+a*d,p[g+3]=l[c]-r*d,p[g+4]=l[c+1]+.03,p[g+5]=l[c+2]-a*d,p[g+6]=e-r*d,p[g+7]=n+.03,p[g+8]=i-a*d,p[g+9]=e+r*d,p[g+10]=n+.03,p[g+11]=i+a*d;let m=Math.min(200,60+o*150);for(let M=0;M<4;M++)x[f*16+M*4]=12,x[f*16+M*4+1]=12,x[f*16+M*4+2]=12,x[f*16+M*4+3]=m;l[c]=e,l[c+1]=n,l[c+2]=i,this.dirty=!0}reset(t){this.last[t*4]=NaN}update(){this.dirty&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.dirty=!1)}},Rc=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*6),this.col=new Uint8Array(e*8),this.seed=new Float32Array(e*3);for(let i=0;i<e;i++)this.seed[i*3]=Math.random()*6.28,this.seed[i*3+1]=2+Math.random()*3,this.seed[i*3+2]=Math.random()*40;let n=new xe;this.aPos=new qt(this.pos,3),this.aPos.setUsage(ci),this.aCol=new qt(this.col,4,!0),this.aCol.setUsage(ci),n.setAttribute("position",this.aPos),n.setAttribute("col",this.aCol),this.lines=new na(n,_a()),this.lines.frustumCulled=!1,this.lines.renderOrder=4,t.add(this.lines)}update(t,e,n,i){let r=Math.max(0,Math.min(1,(n-45)/40))*.6+(i?.4:0);if(this.lines.visible=r>.02,!this.lines.visible)return;let a=e.matrixWorld.elements,o=a[0],l=a[1],c=a[2],h=a[4],u=a[5],f=a[6],d=-a[8],p=-a[9],x=-a[10],g=a[12],m=a[13],M=a[14];for(let y=0;y<this.n;y++){let v=this.seed[y*3+2]-t*n*1.4;v<2&&(v+=40),this.seed[y*3+2]=v;let T=this.seed[y*3],w=this.seed[y*3+1],A=Math.cos(T)*w,S=Math.sin(T)*w*.6,b=2+n*.06,_=g+o*A+h*S+d*v,C=m+l*A+u*S+p*v,z=M+c*A+f*S+x*v;this.pos[y*6]=_,this.pos[y*6+1]=C,this.pos[y*6+2]=z,this.pos[y*6+3]=_+d*b,this.pos[y*6+4]=C+p*b,this.pos[y*6+5]=z+x*b;let D=140*r,k=i?255:220;this.col[y*8]=i?120:220,this.col[y*8+1]=i?190:220,this.col[y*8+2]=k,this.col[y*8+3]=D,this.col[y*8+4]=0,this.col[y*8+5]=0,this.col[y*8+6]=0,this.col[y*8+7]=0}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}},Cc=class{constructor(t,e){this.items=[];let n=["debris_bumper","debris_door","debris_tire","debris_spoiler","debris_plate"];for(let i=0;i<10;i++){let r=new ie(Ni(n[i%n.length],"body"),e);r.userData.s0=n[i%n.length]==="debris_tire"?.65:.85,r.visible=!1,r.userData.v=new B,r.userData.w=new B,r.userData.t=0,t.add(r),this.items.push(r)}this.next=0}burst(t,e,n,i,r,a,o){for(let l=0;l<o;l++){let c=this.items[this.next];this.next=(this.next+1)%this.items.length,c.visible=!0,c.position.set(t,e+.6,n),c.userData.v.set(i*.5+(Math.random()-.5)*6,2.5+Math.random()*3.5,a*.5+(Math.random()-.5)*6),c.userData.w.set(Math.random()*10,Math.random()*10,Math.random()*10),c.userData.t=2.2,c.userData.floor=e-.4,c.scale.setScalar(c.userData.s0||1)}}update(t){for(let e of this.items){if(!e.visible)continue;let n=e.userData;if(n.t-=t,n.t<=0){e.visible=!1;continue}n.t<.5&&e.scale.setScalar(n.s0*n.t/.5),n.v.y-=9.8*t,e.position.x+=n.v.x*t,e.position.y+=n.v.y*t,e.position.z+=n.v.z*t,e.position.y<n.floor&&(e.position.y=n.floor,n.v.y*=-.3,n.v.x*=.7,n.v.z*=.7,n.w.multiplyScalar(.7)),e.rotation.x+=n.w.x*t,e.rotation.y+=n.w.y*t,e.rotation.z+=n.w.z*t}}},Sa=class{constructor(t,e,n){let i=e==="low";this.sparks=new wa(t,i?80:200,!0),this.smoke=new wa(t,i?60:160,!1),this.skids=new Ac(t,i?300:700),this.streaks=new Rc(t,i?24:48),this.debris=new Cc(t,n),this.low=i}spark(t,e,n,i,r,a){for(let o=0;o<a;o++)this.sparks.emit(t,e,n,i*.5+(Math.random()-.5)*6,1+Math.random()*4,r*.5+(Math.random()-.5)*6,255,190+Math.random()*60,90,255,.12,.25+Math.random()*.3)}puff(t,e,n,i,r,a){this.smoke.emit(t,e+.2,n,i*.2+(Math.random()-.5),.6+Math.random()*.6,r*.2+(Math.random()-.5),225,225,228,110*a,.8,1.1,2.6)}update(t){this.sparks.update(t),this.smoke.update(t),this.skids.update(),this.debris.update(t)}};var Cu=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
varying float vFog;
`;function Pu(){return new me({uniforms:Ce,vertexShader:Cu+`
attribute vec4 ds;   // x = d (m, left +), y = s (m along the street), z = half width, w = flags (1 junction, 2 one-way, 4 zebra side)
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
}`,fragmentShader:Cu+`
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
}`,extensions:{derivatives:!0}})}var Fe=200,Iu=2.2,Ms=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.extra=null}get count(){return this.p.length/3}vert(t,e,n,i,r,a,o,l,c,h){return this.p.push(t,e,n),this.n.push(i*127|0,r*127|0,a*127|0,0),this.c.push(o,l,c,h||0),this.count-1}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}model(t,e,n,i,r,a,o,l){let c=xc(t,e),h=Math.cos(a),u=Math.sin(a),f=o||1,d=this.count;for(let p=0;p<c.part.n;p++){let x=c.pos[p*3]*f,g=c.pos[p*3+1]*f,m=c.pos[p*3+2]*f,M=c.nrm[p*4]/127,y=c.nrm[p*4+1]/127,v=c.nrm[p*4+2]/127,T=c.col[p*4],w=c.col[p*4+1],A=c.col[p*4+2];l&&(T=T*l[0]|0,w=w*l[1]|0,A=A*l[2]|0),this.p.push(n+x*h+m*u,i+g,r-x*u+m*h),this.n.push(Math.round((M*h+v*u)*127),Math.round(y*127),Math.round((-M*u+v*h)*127),0),this.c.push(Math.min(255,T),Math.min(255,w),Math.min(255,A),c.col[p*4+3]===64?64:0)}for(let p=0;p<c.idx.length;p++)this.i.push(d+c.idx[p])}box(t,e,n,i,r,a,o,l,c,h,u,f){let d=-l,p=o,x=[];for(let m=0;m<8;m++){let M=m&1?i:-i,y=m&2?r:0,v=m&4?a:-a;x.push(t+o*M+d*v,e+y,n+l*M+p*v)}let g=[[0,4,6,2,-1,0,0],[1,3,7,5,1,0,0],[0,1,5,4,0,-1,0],[2,6,7,3,0,1,0],[0,2,3,1,0,0,-1],[4,5,7,6,0,0,1]];for(let m of g){let M=m[4]*o+m[6]*d,y=m[5],v=m[4]*l+m[6]*p,T=m.slice(0,4).map(L=>this.vert(x[L*3],x[L*3+1],x[L*3+2],M,y,v,c,h,u,f?64:0)),w=m[0]*3,A=m[1]*3,S=m[2]*3,b=x[A]-x[w],_=x[A+1]-x[w+1],C=x[A+2]-x[w+2],z=x[S]-x[w],D=x[S+1]-x[w+1],k=x[S+2]-x[w+2];(_*k-C*D)*M+(C*z-b*k)*y+(b*D-_*z)*v>=0?this.quad(T[0],T[1],T[2],T[3]):this.quad(T[0],T[3],T[2],T[1])}}build(t){let e=new xe;if(e.setAttribute("position",new qt(new Float32Array(this.p),3)),t&&e.setAttribute("normal",new qt(new Int8Array(this.n),4,!0)),e.setAttribute("col",new qt(new Uint8Array(this.c),4,!0)),e.setIndex(new qt(this.count>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),this.extra)for(let n in this.extra){let i=this.extra[n];e.setAttribute(n,new qt(new Float32Array(i.a),i.n))}return e.computeBoundingSphere(),e}};function Sx(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Lu=[[240,238,230],[244,242,236],[236,226,204],[226,212,186],[222,200,172],[232,230,224],[214,222,228],[236,214,204],[246,246,244]],Ea=class{constructor(t,e,n){this.scene=t,this.net=e,this.reach=n.tier==="low"?520:n.tier==="mid"?680:860,this.mats={world:ys(),road:Pu(),bld:bu()},this.chunks=new Map;let i=(f,d)=>Math.floor(f/Fe)*1e3+Math.floor(d/Fe)+500500;this.key=i;let r=f=>{let d=this.chunks.get(f);return d||this.chunks.set(f,d={k:f,segs:[],blds:[],heads:[],st:[],jn:[],jn2:[],built:null}),d};for(let f=0;f<e.n-1;f++)e.sE[f+1]===e.sE[f]&&r(i((e.px[f]+e.px[f+1])/2,(e.pz[f]+e.pz[f+1])/2)).segs.push(f);for(let f=0;f<e.nj;f++){let d=e.jEdges[f];if(d.length>=3)r(i(e.jx[f],e.jz[f])).jn.push(f);else if(d.length===2){let p=y=>{let v=e.eOff[y],T=e.eN[y],w=e.eA[y]===f,A=w?v:v+Math.max(0,T-2);return w?[e.tx[A],e.tz[A]]:[-e.tx[A],-e.tz[A]]},[x,g]=p(d[0]),[m,M]=p(d[1]);x*m+g*M>-.97&&r(i(e.jx[f],e.jz[f])).jn2.push(f)}}let a=e.bld;for(let f=0;f<a.length;){let d=a[f];r(i(a[f+3],a[f+4])).blds.push(f),f+=3+d*2}for(let f of e.stations){let d=e.eOff[f.e]+f.k;r(i(e.px[d],e.pz[d])).st.push(f)}this.getChunk=r,this.heads=[];let o={};for(let f=0;f<e.lights.length;f++){let d=e.lights[f],p=d.j,x=e.jEdges[p];for(let g=0;g<x.length;g++){let m=x[g],M=e.eB[m]===p;if(e.eOne[m]&&!M)continue;let y=M?-1:1,v=e.eHw[m],T=!1;for(let b=1.5;b<=13.5&&!T;b+=2){let _=M?e.eLen[m]-e.jr[p]-b:e.jr[p]+b;if(_<0||_>e.eLen[m])break;for(let C=.7;C<=2.9&&!T;C+=.55)e.at(m,_,y*(v+C),o),Math.hypot(o.x-e.jx[p],o.z-e.jz[p])>e.jr[p]+.4&&this.clear(o.x,o.z,.45,!0)&&(T=!0)}if(!T)continue;let w=M?o.fx:-o.fx,A=M?o.fz:-o.fz,S={L:f,ph:d.ph[g],x:o.x,y:o.y+.15,z:o.z,fx:w,fz:A};this.heads.push(S),r(i(o.x,o.z)).heads.push(S)}}let l=new Ii(.24,.24,.08);this.lamps=new fs(l,new fn({color:16777215}),Math.max(1,this.heads.length*3));let c=new se,h=new Ht(2236962);for(let f=0;f<this.heads.length;f++){let d=this.heads[f];for(let p=0;p<3;p++)c.makeRotationY(Math.atan2(d.fx,d.fz)),c.setPosition(d.x-d.fx*.2,d.y+3.75-p*.3,d.z-d.fz*.2),this.lamps.setMatrixAt(f*3+p,c),this.lamps.setColorAt(f*3+p,h)}this.lamps.frustumCulled=!1,t.add(this.lamps),this.lampState=new Int8Array(this.heads.length).fill(-1);let u=new oi(4e4,4e4,1,1);u.rotateX(-Math.PI/2),this.sea=new ie(u,Su()),this.sea.position.y=0,this.sea.frustumCulled=!1,this.sea.renderOrder=-1,t.add(this.sea),this.sky=new ie(new ha(5e3,16,8),wu()),this.sky.frustumCulled=!1,this.sky.renderOrder=10,t.add(this.sky),this.live=[],this.buildMs=0,this.built=0}setLamps(t){let e=[new Ht(16722458),new Ht(16756736),new Ht(2293606)],n=new Ht(1907997),i=!1;for(let r=0;r<this.heads.length;r++){let a=this.heads[r],o=t(a.L,a.ph);o!==this.lampState[r]&&(this.lampState[r]=o,i=!0,this.lamps.setColorAt(r*3,o===2?e[0]:n),this.lamps.setColorAt(r*3+1,o===1?e[1]:n),this.lamps.setColorAt(r*3+2,o===0?e[2]:n))}i&&(this.lamps.instanceColor.needsUpdate=!0)}stream(t,e,n,i){let r=performance.now(),a=this.reach,o=Math.floor(t/Fe),l=Math.floor(e/Fe),c=Math.ceil(a/Fe)+1,h=[];for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){let d=(o+u+.5)*Fe,p=(l+f+.5)*Fe,x=Math.hypot(d-t,p-e)-Fe*.71;if(x>a)continue;let g=this.chunks.get((o+u)*1e3+(l+f)+500500)||this.emptyChunk(o+u,l+f);g.built||h.push([x,g])}h.sort((u,f)=>u[0]-f[0]);for(let[,u]of h){if(!i&&performance.now()-r>n)break;this.buildChunk(u)}for(let u=this.live.length-1;u>=0;u--){let f=this.live[u];Math.hypot(f.cx-t,f.cz-e)-Fe*.71>a+260&&(this.dropChunk(f),this.live.splice(u,1))}this.buildMs=performance.now()-r}addEnforce(t){for(let e of t.cams){let n=this.getChunk(this.key(e.x,e.z));(n.cams||(n.cams=[])).push(e)}for(let e of t.police){let n=this.getChunk(this.key(e.x,e.z));(n.cops||(n.cops=[])).push(e)}}emptyChunk(t,e){let n=t*1e3+e+500500,i={k:n,segs:[],blds:[],heads:[],st:[],jn:[],jn2:[],built:null};return this.chunks.set(n,i),i}buildChunk(t){let e=this.net,n=t.k-500500,i=Math.round(n/1e3),r=n-i*1e3,a=i*Fe,o=r*Fe,l=new Ms,c=new Ms,h=new Ms,u=new Ms;l.extra={ds:{a:[],n:4}};let f=l.extra.ds.a,d=Sx(t.k*7919+13),p=t.segs,x=0;for(let S=1;S<=p.length;S++)S<p.length&&p[S]===p[S-1]+1&&e.sE[p[S]]===e.sE[p[x]]||(this.street(l,f,h,c,p[x],p[S-1]+1,d),x=S);for(let S of t.jn){let _=(e.jr[S]+.4)/Math.cos(Math.PI/18),C=e.jy[S]+.012,z=e.jPlane[S],D=(O,U)=>z?e.planeY(S,O,U)+.012:C,k=this.pq||(this.pq={}),P=(O,U)=>{let Y=D(O,U);return e.query(O,U,-1,k),k.edge>=0&&k.off===0&&k.junc!==S&&k.y+.012<Y?k.y+.012:Y},L=l.count;l.vert(e.jx[S],D(e.jx[S],e.jz[S]),e.jz[S],0,1,0,0,0,0),f.push(0,0,99,1);for(let O=0;O<=18;O++){let U=O/18*Math.PI*2,Y=e.jx[S]+Math.cos(U)*_,j=e.jz[S]+Math.sin(U)*_;l.vert(Y,P(Y,j),j,0,1,0,0,0,0),f.push(0,0,99,1)}for(let O=0;O<18;O++)l.i.push(L,L+2+O,L+1+O)}let g=this.gq||(this.gq={});for(let S of t.jn2||[]){let b=3.5;for(let D of e.jEdges[S])e.eHw[D]>b&&(b=e.eHw[D]);b+=.25;let _=14,C=l.count,z=(D,k)=>(e.query(D,k,-1,g),(g.edge>=0?g.y:e.jy[S])+.006);l.vert(e.jx[S],z(e.jx[S],e.jz[S]),e.jz[S],0,1,0,0,0,0),f.push(0,0,99,1);for(let D=0;D<=_;D++){let k=D/_*Math.PI*2,P=e.jx[S]+Math.cos(k)*b,L=e.jz[S]+Math.sin(k)*b;l.vert(P,z(P,L),L,0,1,0,0,0,0),f.push(0,0,99,1)}for(let D=0;D<_;D++)l.i.push(C,C+2+D,C+1+D)}let m=e.g,M=Math.max(0,Math.floor((a-m.x0)/m.c)),y=Math.min(m.nx-1,Math.ceil((a+Fe-m.x0)/m.c)),v=Math.max(0,Math.floor((o-m.z0)/m.c)),T=Math.min(m.nz-1,Math.ceil((o+Fe-m.z0)/m.c));if(y>M&&T>v){let S=y-M+1,b=c.count,_=m.h,C=m.nx,z=(D,k)=>_[Math.max(0,Math.min(m.nz-1,k))*C+Math.max(0,Math.min(C-1,D))]/10;for(let D=v;D<=T;D++)for(let k=M;k<=y;k++){let P=m.x0+k*m.c,L=m.z0+D*m.c,O=z(k,D);e.query(P,L,-1,g),g.edge>=0&&(Math.abs(g.d)<g.hl+ge+4||g.junc>=0)&&(O=Math.min(O,g.y-.4));let U=(z(k+1,D)-z(k-1,D))/(2*m.c),Y=(z(k,D+1)-z(k,D-1))/(2*m.c),j=Math.hypot(U,1,Y),st=1/j,it=(Math.sin(k*.9)+Math.sin(D*1.3))*.5,xt,W,K;O<.5?(xt=196,W=182,K=146):O<3?(xt=222+it*8,W=206+it*8,K=162):st<.82?(xt=132+it*10,W=118+it*8,K=96):(xt=116+it*16,W=132+it*14,K=76+it*6),c.vert(P,O,L,-U/j,st,-Y/j,xt,W,K)}for(let D=0;D<T-v;D++)for(let k=0;k<S-1;k++){let P=b+D*S+k;z(M+k,v+D)<-2.4&&z(M+k+1,v+D+1)<-2.4&&z(M+k+1,v+D)<-2.4||c.quad(P,P+S,P+S+1,P+1)}}for(let S of t.blds)this.building(u,S);for(let S of t.heads){let b=S.fz,_=-S.fx;c.box(S.x,S.y,S.z,.07,3.4,.07,b,_,70,72,76),c.box(S.x-S.fx*.05,S.y+3.3,S.z-S.fz*.05,.2,.95,.12,b,_,30,30,32)}for(let S of t.cams||[]){let b=Math.sin(S.yaw),_=Math.cos(S.yaw),C=_,z=-b;c.box(S.x,S.y,S.z,.06,2.7,.06,C,z,120,124,128),c.box(S.x,S.y+2.55,S.z,.28,.6,.3,C,z,200,204,208),c.box(S.x,S.y+2.62,S.z,.29,.12,.31,C,z,240,196,24),c.box(S.x+b*.31,S.y+2.82,S.z+_*.31,.1,.18,.02,C,z,20,22,26)}for(let S of t.cops||[]){let b=Math.sin(S.yaw),_=Math.cos(S.yaw),C=_,z=-b,D=[22,34,70],k=[190,140,105];c.box(S.x+C*.1,S.y,S.z+z*.1,.08,.9,.1,C,z,...D),c.box(S.x-C*.1,S.y,S.z-z*.1,.08,.9,.1,C,z,...D),c.box(S.x,S.y+.9,S.z,.23,.62,.14,C,z,...D),c.box(S.x+C*.08,S.y+1.3,S.z+z*.08+0,.05,.12,.15,C,z,245,245,245),c.box(S.x,S.y+1.52,S.z,.11,.24,.11,C,z,...k),c.box(S.x,S.y+1.74,S.z,.14,.08,.15,C,z,245,245,245),c.box(S.x+C*.31,S.y+.95,S.z+z*.31,.06,.55,.06,C,z,...D),c.box(S.x-C*.31,S.y+.95,S.z-z*.31,.06,.55,.06,C,z,...D),c.box(S.x+C*.31,S.y+.85,S.z+z*.31,.06,.1,.06,C,z,250,250,250),c.box(S.x-C*.31,S.y+.85,S.z-z*.31,.06,.1,.06,C,z,250,250,250);let P=S.x-b*.4+C*5.5,L=S.z-_*.4+z*5.5,O=Math.atan2(C,z);for(let U of["body","wfl","wfr","wbl","wbr"])h.model("car_police",U,P,S.y,L,O,1)}for(let S of t.st)this.station(c,h,S);let w={k:t.k,meshes:[],cx:a+Fe/2,cz:o+Fe/2},A=(S,b,_)=>{if(!S.count)return;let C=new ie(S.build(_!=="road"),b);C.matrixAutoUpdate=!1,C.updateMatrix(),C.userData.kind=_,this.scene.add(C),w.meshes.push(C)};A(l,this.mats.road,"road"),A(c,this.mats.world,"core"),A(h,this.mats.world,"detail"),A(u,this.mats.bld,"bld"),t.built=w,this.live.push(t),t.cx=w.cx,t.cz=w.cz,this.built++}dropChunk(t){for(let e of t.built.meshes)this.scene.remove(e),e.geometry.dispose();t.built=null}street(t,e,n,i,r,a,o){let l=this.net,c=l.sE[r],h=l.eHw[c],u=l.eCls[c],f=l.eOne[c],d=[0,0,0,h,h/2,0,-h/2,-h,0,0,0],p=11,x=t.count,g=l.eLen[c],m=l.eA[c],M=l.eB[c];for(let y=r;y<=a;y++){let v=l.px[y],T=l.py[y],w=l.pz[y],A=l.tz[y],S=-l.tx[y],b=l.sS[y],_=l.sJ[y]>=0,C=l.jEdges[m].length>=3&&b>l.jr[m]+2&&b<l.jr[m]+6,z=l.jEdges[M].length>=3&&g-b>l.jr[M]+2&&g-b<l.jr[M]+6,D=(_?1:0)+(f?2:0)+(C||z?4:0),k=l.pl[y],P=l.pr[y],L=k>=ge-.05,O=P>=ge-.05;d[0]=h+k+(L?Iu:0),d[1]=h+k,d[2]=h+Math.min(.35,k),d[8]=-h-Math.min(.35,P),d[9]=-h-P,d[10]=-h-P-(O?Iu:0);let U=!_&&k>.6?.15:0,Y=!_&&P>.6?.15:0,j=new Float64Array(p),st=new Float64Array(p),it=new Float64Array(p),xt=1e9,W=1e9;for(let tt=0;tt<p;tt++){let vt=d[tt],Et=v+A*vt,Vt=w+S*vt;st[tt]=Et,it[tt]=Vt;let Pt=tt===0?L?-.55:U:tt===10?O?-.55:Y:tt===1||tt===2?U:tt===8||tt===9?Y:0,zt=l.surfY(c,b,Et,Vt,T)+Pt,F=l.query(Et,Vt,-1,this.vq||(this.vq={}));tt>=3&&tt<=7?F.edge>=0&&(F.off===0||Math.abs(F.d)<=F.hl+.08&&F.junc<0)&&(zt=F.y):F.edge>=0&&(F.edge!==c||F.junc>=0&&l.jEdges[F.junc].length>=3)&&(F.off===0||Math.abs(F.d)<F.hl+1.2||F.junc>=0&&l.jEdges[F.junc].length>=3)&&(zt=Math.min(zt,F.y-.12),tt<=2&&F.y-.12<xt&&(xt=F.y-.12),tt>=8&&F.y-.12<W&&(W=F.y-.12)),j[tt]=zt}if(xt<1e8)for(let tt=0;tt<=2;tt++)j[tt]=Math.min(j[tt],xt);if(W<1e8)for(let tt=8;tt<=10;tt++)j[tt]=Math.min(j[tt],W);for(let tt=0;tt<p;tt++)t.vert(st[tt],j[tt],it[tt],0,1,0,0,0,0),e.push(d[tt],b,h,D);if(y>r){let tt=x+(y-r-1)*p,vt=x+(y-r)*p;for(let Et=0;Et<p-1;Et++)t.quad(tt+Et,tt+Et+1,vt+Et+1,vt+Et)}if(_||y===a)continue;let K=Math.atan2(l.tx[y],l.tz[y]),ut=l.pl[y],at=l.pr[y];if(u<=3&&y%10===0&&ut>1.4){let tt=h+.9;this.clear(v+A*tt,w+S*tt,.6)&&this.lamp(n,v+A*tt,l.surfY(c,b,v+A*tt,w+S*tt,T)+.15,w+S*tt,-A,-S)}if(u<=3&&y%10===5&&at>1.4){let tt=-(h+.9);this.clear(v+A*tt,w+S*tt,.6)&&this.lamp(n,v+A*tt,l.surfY(c,b,v+A*tt,w+S*tt,T)+.15,w+S*tt,A,S)}if(y%6===3&&o()<(u>=4?.45:.3)){let tt=o()<.5?1:-1,vt=tt*(h+ge-.7);if((tt>0?ut:at)<ge-.05||!this.clear(v+A*vt,w+S*vt,1.6))continue;let Vt=T<9&&u<=2?"palm_tall":o()<.5?"tree":"tree_oak",Pt=Vt[0]==="p"?.5+o()*.1:Vt==="tree"?.32+o()*.08:.4+o()*.1;n.model(Vt,"body",v+A*vt,l.surfY(c,b,v+A*vt,w+S*vt,T)+.15,w+S*vt,o()*6.28,Pt)}}}lamp(t,e,n,i,r,a){this.poleLog&&this.poleLog.push(e,i);let o=2,l=Math.atan2(r,a),c=Math.cos(l),h=Math.sin(l),u=-1.575*o,f=-2.925*o;t.model("light_modern","body",e-(u*c+f*h),n,i-(-u*h+f*c),l,o)}clear(t,e,n,i){let r=this.net.query(t,e,-1,this.cq||(this.cq={}));if(r.edge<0)return!0;if(Math.abs(r.d)-r.hl<n)return!1;if(r.junc<0)return!0;let a=this.net,o=r.junc;return!!i&&Math.hypot(t-a.jx[o],e-a.jz[o])>a.jr[o]+n}station(t,e,n){let i=this.net,r=n.e,a=i.eOff[r]+n.k,o=i.px[a],l=i.py[a]+.15,c=i.pz[a],h=i.tx[a],u=i.tz[a],f=u,d=-h,p=i.eHw[r],x=n.side>0?1:-1,g=x*(p+ge*.35),m=o+f*g,M=c+d*g;t.box(m,l+4.6,M,8,.6,(ge+3.5)/2,h,u,236,236,232),t.box(m,l+4.55,M,8.05,.12,(ge+3.5)/2+.05,h,u,20,150,90);for(let T of[-6,6]){let w=o+f*x*(p+ge-.4)+h*T,A=c+d*x*(p+ge-.4)+u*T;t.box(w,l,A,.2,4.6,.2,h,u,210,210,206);let S=o+f*x*(p+1.6)+h*T*.6,b=c+d*x*(p+1.6)+u*T*.6;t.box(S,l,b,.5,1.7,.3,h,u,30,160,95),t.box(S,l+1.2,b,.52,.35,.32,h,u,250,250,250,!0)}let y=o+f*x*(p+ge+1.5)+h*11,v=c+d*x*(p+ge+1.5)+u*11;t.box(y,l,v,.18,7,.18,h,u,180,180,180),t.box(y,l+5.2,v,.15,2.2,1.3,h,u,20,150,90),t.box(y,l+6,v,.17,.8,1,h,u,255,210,40,!0)}building(t,e){let n=this.net.bld,i=n[e],r=n[e+1],a=n[e+2],o=[],l=0,c=0;for(let y=0;y<i;y++){let v=n[e+3+y*2],T=n[e+4+y*2];o.push(new Lt(v,T)),l+=v,c+=T}l/=i,c/=i;let h=Lu[Math.abs(Math.round(o[0].x*3+o[0].y*7))%Lu.length],u=r>24?[200,206,212]:h,f=a-3,d=a+r;t.extra||(t.extra={wuv:{a:[],n:2}});let p=t.extra.wuv.a,x=0;for(let y=0;y<i;y++){let v=o[y],T=o[(y+1)%i],w=T.x-v.x,A=T.y-v.y,S=Math.hypot(w,A);if(S<.05)continue;let b=-A/S,_=w/S,C=b*((v.x+T.x)/2-l)+_*((v.y+T.y)/2-c)>0;C||(b=-b,_=-_);let z=t.vert(v.x,f,v.y,b,0,_,u[0],u[1],u[2]),D=t.vert(T.x,f,T.y,b,0,_,u[0],u[1],u[2]),k=t.vert(T.x,d,T.y,b,0,_,u[0],u[1],u[2]),P=t.vert(v.x,d,v.y,b,0,_,u[0],u[1],u[2]);p.push(x,-3,x+S,-3,x+S,r,x,r),C?t.quad(z,D,k,P):t.quad(z,P,k,D),x+=S}let g=Ri.triangulateShape(o,[]),m=t.count,M=[u[0]*.84|0,u[1]*.82|0,u[2]*.78|0];for(let y of o)t.vert(y.x,d,y.y,0,1,0,M[0],M[1],M[2]),p.push(0,0);for(let y of g){let v=o[y[0]],T=o[y[1]],w=o[y[2]];(T.y-v.y)*(w.x-v.x)-(T.x-v.x)*(w.y-v.y)>0?t.i.push(m+y[0],m+y[1],m+y[2]):t.i.push(m+y[0],m+y[2],m+y[1])}}cull(t,e,n,i){for(let r=0;r<this.live.length;r++){let a=this.live[r],o=Math.hypot(a.cx-t,a.cz-e)-Fe*.71,l=a.built.meshes;for(let c=0;c<l.length;c++)l[c].visible=o<(l[c].userData.kind==="detail"?i:l[c].userData.kind==="bld"?n*.85:n)}}dispose(){for(let t of this.live)this.dropChunk(t);this.live=[],this.scene.remove(this.lamps),this.lamps.geometry.dispose(),this.lamps.material.dispose(),this.scene.remove(this.sea),this.sea.geometry.dispose(),this.sea.material.dispose(),this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose();for(let t in this.mats)this.mats[t].dispose()}};var Ex=36;function Ks(s,t,e,n){let i=(n+s.lights[t].off)%Ex;return e===0?i<14?0:i<17?1:2:i<18?2:i<32?0:i<35?1:2}var Du=[["tr_sedan",15197144],["tr_suv",4212303],["tr_van",15921906],["tr_sedan",9182493],["tr_delivery",16053492],["tr_truck",2906784],["tr_taxi",14205498],["tr_sedan",13224393],["tr_suv",1780298],["tr_sedan",2830134],["tr_taxi",14205498],["tr_sedan",10134445]],Hn=99,di=()=>(Hn^=Hn<<13,Hn>>>=0,Hn^=Hn>>17,Hn^=Hn<<5,Hn>>>=0,Hn/4294967296),Pc=class{constructor(t,e){let[n,i]=Du[e%Du.length];this.spec=Object.assign({},n==="tr_truck"||n==="tr_delivery"?Je.t_heavy:Je.t_small,{model:n}),this.veh=new vs(this.spec,Js(n)),this.veh.assist.air=0,this.view=new _s(t,n,i),this.traffic=!0,this.player=-1,this.wreck=0,this.active=!1,this.id=e,this.e=0,this.dir=1,this.s=0,this.ne=-1,this.nd=1,this.phase=-1,this.mood=.85+di()*.15,this.stuck=0,this.claim=-1,this.hitT=0,this.at={},this.at2={}}},Ta=class{constructor(t,e,n){this.net=e,this.cars=[];for(let i=0;i<n;i++)this.cars.push(new Pc(t,i));this.t=0,this.busy=new Map,this.reach=340}lane(t,e){let n=this.net,i=n.eHw[t];return n.eOne[t]?i>3.9?-(i-1.9):0:-e*Math.min(i*.5,2.2)}pickNext(t){let e=this.net,n=t.dir>0?e.eB[t.e]:e.eA[t.e],i=[],r=0;for(let o of e.jEdges[n]){if(o===t.e&&e.jEdges[n].length>1||!e.canLeave(o,n)||e.eN[o]<4)continue;let l=e.eCls[o]<=2?3:e.eCls[o]<=3?2:1;i.push(o,l),r+=l}if(!i.length){t.ne=t.e,t.nd=-t.dir;return}let a=di()*r;for(let o=0;o<i.length;o+=2)if(a-=i[o+1],a<=0||o===i.length-2){t.ne=i[o],t.nd=e.eA[i[o]]===n?1:-1;break}}place(t,e,n,i,r){let a=this.net,o=a.at(e,n,this.lane(e,i),t.at),l=o.fx*i,c=o.fz*i,h=t.veh;h.setPose(o.x,o.y+h.cgY+.42,o.z,Math.atan2(l,c)),h.hint=o.i;for(let u of h.wheels)u.hint=o.i;h.vx=l*r,h.vz=c*r,h.gear=1,h.reverse=!1,t.e=e,t.dir=i,t.s=n,t.active=!0,t.wreck=0,t.stuck=0,t.phase=-1,t.claim=-1,t.mood=.82+di()*.18,this.pickNext(t)}spawn(t,e,n,i,r,a,o){let l=this.net;for(let c=0;c<24;c++){let h=di()*Math.PI*2,u=150+di()*(this.reach-170),f=e+Math.sin(h)*u,d=n+Math.cos(h)*u;if(c<16&&Math.sin(h)*i+Math.cos(h)*r>.55&&u<260||(l.query(f,d,-1,o),o.edge<0||o.junc>=0||l.eCls[o.edge]>=5&&di()<.6))continue;let p=o.edge,x=l.eLen[p];if(x<30||o.s<12||o.s>x-12)continue;let g=l.eOne[p]||di()<.5?1:-1,m=l.at(p,o.s,this.lane(p,g),t.at2),M=!0;for(let y of a){if(y===t||y.traffic&&!y.active)continue;let v=y.veh.px-m.x,T=y.veh.pz-m.z;if(v*v+T*T<18*18){M=!1;break}}if(M)return this.place(t,p,o.s,g,6+di()*4),!0}return!1}update(t,e,n,i){this.t+=t;let r=this.net,a=n.veh,o=Math.sin(a.yaw()),l=Math.cos(a.yaw());for(let[c,h]of this.busy)this.t-h.t>.3&&this.busy.delete(c);for(let c of this.cars){let h=c.veh;if(!c.active||c.wreck>0){if(c.wreck>0&&(c.wreck-=t,h.input.throttle=0,h.input.brake=1,h.input.steer=0,c.wreck>0))continue;this.spawn(c,a.px,a.pz,o,l,e,i);continue}let u=h.px-a.px,f=h.pz-a.pz;if(u*u+f*f>(this.reach+40)**2||c.stuck>7||h.R[4]<.3){c.active=!1,h.setPose(0,-500,0,0);continue}this.drive(c,t,e)}}drive(t,e,n){let i=this.net,r=t.veh,a=i.eLen[t.e];if(t.s=i.project(t.e,t.s,r.px,r.pz),t.dir>0&&t.s>a-.6||t.dir<0&&t.s<.6){let O=t.dir>0?i.eB[t.e]:i.eA[t.e];t.claim,t.e=t.ne,t.dir=t.nd,a=i.eLen[t.e],t.s=t.dir>0?.6:a-.6,t.phase=-1,this.pickNext(t)}let o=t.dir>0?a-t.s:t.s,l=Math.max(0,r.fwdSpeed),c=5.5+l*.55,h=t.at;if(c<o)i.at(t.e,t.s+t.dir*c,this.lane(t.e,t.dir),h);else{let O=Math.min(i.eLen[t.ne],c-o);i.at(t.ne,t.nd>0?O:i.eLen[t.ne]-O,this.lane(t.ne,t.nd),h)}let u=r.R,f=h.x-r.px,d=h.z-r.pz,p=f*u[0]+d*u[2],x=f*u[6]+d*u[8],g=2.6,m=Math.max(4,f*f+d*d),M=Math.atan2(2*g*p,m),y=r.lockAt(l);r.input.steer=Math.max(-1,Math.min(1,M/Math.max(.05,y))),x<0&&(r.input.steer=p>=0?1:-1);let v=i.eLim[t.e]/3.6*t.mood,T=i.at(t.e,t.s,0,t.at2),w=T.fx*t.dir,A=T.fz*t.dir,S=h.fx*(c<o?t.dir:t.nd),b=h.fz*(c<o?t.dir:t.nd),_=Math.acos(Math.max(-1,Math.min(1,w*S+A*b)));_>.05&&(v=Math.min(v,Math.sqrt(2.6*c/_)));let C=t.dir>0?i.eB[t.e]:i.eA[t.e],z=i.jr[C],D=o-z;if(D<60){let O=D-2.5,U=!1,Y=i.jLight[C];if(Y>=0){if(t.phase<0){let K=i.slot(t.e,C);t.phase=K>=0?i.lights[Y].ph[K]:0}let W=Ks(i,Y,t.phase,this.t);(W===2||W===1&&O>l*l/7)&&(U=O>-1)}else if(i.jEdges[C].length>=3&&D<9){let W=this.busy.get(C);!W||W.car===t?this.busy.set(C,{car:t,t:this.t}):O>-.5&&(U=!0)}U&&(v=Math.min(v,Math.sqrt(2*3.2*Math.max(0,O-.8))));let j=i.at(t.ne,t.nd>0?3:i.eLen[t.ne]-3,0,t.at2),st=j.fx*t.nd,it=j.fz*t.nd,xt=Math.acos(Math.max(-1,Math.min(1,w*st+A*it)));if(xt>.45){let W=xt>2.5?3:4+5*(1-xt/Math.PI);v=Math.min(v,Math.sqrt(W*W+2*2.6*Math.max(0,D)))}}let k=u[6],P=u[8];for(let O of n){if(O===t||O.traffic&&!O.active)continue;let U=O.veh.px-r.px,Y=O.veh.pz-r.pz,j=U*k+Y*P;if(j<2||j>40||Math.abs(U*u[0]+Y*u[2])>2.6)continue;let it=j-6.5,xt=Math.max(0,O.veh.vx*k+O.veh.vz*P);v=Math.min(v,Math.max(0,xt+it*.6)),it<.5&&(v=0)}let L=v-l;r.input.throttle=Math.max(0,Math.min(1,L*.45)),r.input.brake=L<-.3?Math.max(0,Math.min(1,-L*.35)):0,v<.3&&(r.input.throttle=0,r.input.brake=1),r.input.handbrake=0,l<.4&&v>2.5?t.stuck+=e:t.stuck=0}dispose(){for(let t of this.cars)t.view.dispose()}};var Aa={easy:{trip:[.3,.8,.06,2],time:[6,90],see:30,tol:20,traffic:.4,pay:.0625,fine:.0625,gap:120,freeHit:4.2,pave:!1,crash:0},normal:{trip:[.4,1,.08,2.5],time:[6.5,70],see:45,tol:15,traffic:.55,pay:.1,fine:.1,gap:60,freeHit:3,pave:!1,crash:.5},hard:{trip:[.5,1.3,.12,3.5],time:[7.4,55],see:70,tol:10,traffic:.8,pay:.15,fine:.15,gap:20,pave:!1,crash:.5},real:{trip:[.8,1.8,.15,4.5],time:[8.2,45],see:90,tol:5,traffic:1,pay:1,fine:1}},zu=["easy","normal","hard","real"],Nu=s=>Aa[s]||Aa.normal;function Uu(s,t){let e=s.trip;return[e[0],Math.min(e[3],e[1]+e[2]*(t||0))]}var Ui=13.4,Tx=40,pi=10,Ax=1,Ra={flag:14,km:8},Qs={red:700,wrong:700,pave:500,fault:300};function Fu(s){return s<20?300:s<30?500:s<40?700:1e3}var Vn=7,mn=()=>(Vn^=Vn<<13,Vn>>>=0,Vn^=Vn>>17,Vn^=Vn<<5,Vn>>>=0,Vn/4294967296),Ca=class{constructor(t,e){this.net=t,this.level=Aa.normal;let n=e||{};this.money=n.money??300,this.fuel=n.fuel??9,this.tank=Tx,this.stats=Object.assign({rides:0,earned:0,fines:0,repairs:0,fuel:0,km:0,best:0,nFines:0,crashes:0,stars:0,rated:0,last:[]},n.stats),this.peds=[],this.ride=null,this.log=[],this.events=[],this.toasts=[],this.prompt="",this.limiter=0,this.cool={speed:0,pave:0},this.overT=0,this.overMax=0,this.paveT=0,this.wrongT=0,this.wrongE=-1,this.lastE=-1,this.lastRem=1e9,this.lastJ=-1,this.crash=null,this.refuel=!1,this.helpT=0,this.fuelGo=null,this.warnT=0,this.redT=-10,this.wrongNow=0,this.time=0,this.dirty=!1}save(){return{money:Math.round(this.money),fuel:+this.fuel.toFixed(2),stats:this.stats}}pay(t,e){this.money+=t,this.dirty=!0,e&&(this.stats[e]+=Math.abs(t))}toast(t,e){this.toasts.push({text:t,kind:e||"info",t:0})}cost(t){return Math.max(10,Math.round(t*(this.level.pay??1)/10)*10)}fineCost(t){return Math.max(10,Math.round(t*(this.level.fine??1)/10)*10)}fine(t,e,n){let i=this.level.gap||0;if(i&&this.time<(this.nextFine??i*.5)){this.toast("policeWarn","warn");return}this.nextFine=this.time+i,e=this.fineCost(e),this.stats.nFines++,this.pay(-e,"fines"),this.ride&&this.ride.fines++,this.events.push({kind:"fine",title:"fine_"+t,lines:[[n||"",-e]],total:-e})}update(t,e,n,i){this.time+=t;let r=this.net,a=Math.abs(e.fwdSpeed),o=a*3.6,l=a*t;if(this.stats.km+=l/1e3,this.ride&&this.ride.ped.state==="in"&&(this.ride.km+=l/1e3,this.ride.t+=t),this.fuelTick(t,e,n),e.topSpeedCap=this.limiter?this.limiter/3.6:1e9,n.edge>=0&&n.junc<0){let c=n.edge,h=n.fx,u=n.fz,d=e.vx*h+e.vz*u>=0?1:-1;c!==this.lastE&&(this.lastE=c,this.lastRem=1e9,this.wrongT=0);let p=d>0?r.eB[c]:r.eA[c],x=d>0?r.eLen[c]-n.s:n.s,g=this.enf?this.enf.officer(e.px,e.pz,this.level.see):null,m=r.jLight[p];if(m>=0&&a>2){let y=r.jr[p]+1;if(this.lastRem>y&&x<=y&&this.lastJ===p){let v=r.slot(c,p),T=v>=0?r.lights[m].ph[v]:0;i(m,T)===2&&(this.redT=this.time,g&&this.fine("red",Qs.red,"seenPolice"))}}this.lastRem=x,this.lastJ=p,r.eOne[c]&&d<0&&a>2?(this.wrongT+=t,this.wrongNow=1):(this.wrongT=Math.max(0,this.wrongT-t),this.wrongNow=0),this.wrongT>2.5&&this.wrongE!==c&&(this.redT=this.time,g&&(this.wrongE=c,this.fine("wrong",Qs.wrong,r.edgeName(c,this.lang)||"")));let M=n.lim;if(this.limit=M,this.enf){for(let y of this.enf.cams){if(y.e!==c||d!==y.dir)continue;let v=this.camS,T=n.s;this.camE===c&&v!==void 0&&(v-y.s)*(T-y.s)<=0&&v!==T&&this.time>(y.cool||0)&&(y.cool=this.time+20,this.flash=.25,o>M+this.level.tol&&this.fine("speed",Fu(o-M),"camSpeed:"+Math.round(o)+" km/h / "+M))}this.camE=c,this.camS=n.s}o>M+this.level.tol&&g?(this.overT+=t,this.overMax=Math.max(this.overMax,o-M)):(this.overT=Math.max(0,this.overT-t*2),this.overT===0&&(this.overMax=0)),this.overT>3&&this.time>this.cool.speed&&(this.fine("speed",Fu(this.overMax),"policeSpeed:"+Math.round(M+this.overMax)+" km/h / "+M),this.cool.speed=this.time+40,this.overT=0,this.overMax=0),n.off>=1&&Math.abs(n.d)>n.hl+1.2&&a>3&&g?this.paveT+=t:this.paveT=Math.max(0,this.paveT-t),this.paveT>1.2&&this.time>this.cool.pave&&this.level.pave!==!1&&(this.fine("pave",Qs.pave,"seenPolice"),this.cool.pave=this.time+30,this.paveT=0)}else this.wrongNow=0;this.speeding=this.overT>0,this.peopleTick(t,e,n),this.crashTick(t),this.fuelGoTick(e),this.prompt="",e.fuelCut&&this.fuel<=.01?this.prompt=this.helpT>0?"helpWait":"help":this.refuel?this.prompt="stop":this.nearStation(e)&&a<1.2&&this.fuel<this.tank-.5?this.prompt="refuel":this.ride&&this.ride.ped.state==="in"&&this.atDest(e)&&a<1.6?this.prompt="dropoff":!this.ride&&a<1.6&&this.nearPed(e)&&(this.prompt="pickup",this.quote(e,n,this.nearPed(e)))}fuelTick(t,e,n){if(this.helpT>0){if(this.helpT-=t,this.helpT<=0){let f=this.cost(150),d=f+Math.round(6*Ui*1.5);this.fuel+=6,this.pay(-d,"fuel"),e.fuelCut=!1,e.stalled=!1,this.events.push({kind:"help",title:"helpDone",lines:[["helpService",-f],["helpFuel",-(d-f)]],total:-d})}return}if(this.refuel){let u=Math.min(this.tank-this.fuel,5*t);this.fuel+=u,this.pay(-u*Ui,"fuel"),this.refuelL+=u,(this.fuel>=this.tank-.01||this.money<0)&&this.stopRefuel();return}if(e.fuelCut||e.stalled)return;let i=Math.abs(e.fwdSpeed),a=n&&n.edge>=0&&(this.net.eCls[n.edge]===0||n.lim>=70)?5:6,l=.88+.24*Math.max(0,Math.min(1,e.input.throttle||0)),c=i*t/1e3*(a/100)*l,h=.65/3600*t*Math.max(0,1-i/5.5);this.fuel-=(c+h)*Ax,this.fuel<=0&&(this.fuel=0,e.fuelCut=!0,this.toast("outOfFuel","bad"),this.dirty=!0),this.fuel<pi?this.orangeSaid?!this.fuelGo&&(this.warnT-=t)<=0&&(this.warnT=45,this.toast("fuelOrange","warn")):(this.orangeSaid=!0,this.warnT=45,this.toast("fuelOrange","warn")):this.fuel>pi+2&&(this.orangeSaid=!1),this.fuel<4&&!this.lowSaid&&(this.lowSaid=!0,this.toast("lowFuel","bad")),this.fuel>6&&(this.lowSaid=!1)}stopRefuel(){this.refuel=!1,this.refuelL>.05&&this.events.push({kind:"fuel",title:"refuelDone",lines:[["litres:"+this.refuelL.toFixed(1),-Math.round(this.refuelL*Ui)]],total:-Math.round(this.refuelL*Ui)}),this.dirty=!0}nearStation(t){let e=this.net;for(let n of e.stations){let i=e.eOff[n.e]+n.k;if(Math.hypot(e.px[i]-t.px,e.pz[i]-t.pz)<16)return!0}return!1}goFuel(t,e){if(this.fuelGo){this.fuelGo=null,this.toast("fuelGuideOff","info");return}let n=this.net;if(e.edge<0||!n.stations.length){this.toast("fuelNoWay","bad");return}let i=t.R[6]*e.fx+t.R[8]*e.fz>=0?1:-1,r=n.stations.map(l=>{let c=n.eOff[l.e]+l.k;return{s:l,i:c,d:Math.hypot(n.px[c]-t.px,n.pz[c]-t.pz)}}).sort((l,c)=>l.d-c.d).slice(0,5),a=null;for(let l of r){let c=n.sS[l.i],h=n.route(e.edge,e.s,i,l.s.e,c);h&&(!a||h.len<a.route.len)&&(a={c:l,sp:c,route:h})}if(!a){this.toast("fuelNoWay","bad");return}let o=a.c.i;this.fuelGo={e:a.c.s.e,s:a.sp,x:n.px[o],y:n.py[o],z:n.pz[o],route:a.route,left:a.route.len,name:a.c.s.name||"",ped:{state:"in"}},this.toast("fuelGuide","ok")}fuelGoTick(t){this.fuelGo&&(this.fuel>=this.tank-.5||this.refuel||this.nearStation(t)&&Math.abs(t.fwdSpeed)<8)&&(this.fuelGo=null,this.fuel<this.tank-.5&&this.toast("fuelArrived","ok"))}action(t,e){let n=this.prompt;n==="help"?(this.helpT=9,this.toast("helpComing","info")):n==="refuel"?(this.refuel=!0,this.refuelL=0):n==="stop"?this.stopRefuel():n==="pickup"?this.pickup(t,e):n==="dropoff"&&this.dropoff(t)}spawnPed(t,e){let n=this.net,i=Math.atan2(t.R[6],t.R[8]);for(let r=0;r<20;r++){let a=mn()<.7?i+(mn()-.5)*2:mn()*Math.PI*2,o=40+mn()*280;n.query(t.px+Math.sin(a)*o,t.pz+Math.cos(a)*o,-1,e);let l=e.edge;if(l<0||e.junc>=0||n.eCls[l]===0||n.eLen[l]<30||e.s<10||e.s>n.eLen[l]-10)continue;let c=mn()<.5?1:-1,h=e.i;if((c>0?n.pl[h]:n.pr[h])<1.5)continue;let u=n.at(l,e.s,c*(n.eHw[l]+1.2),{});if(this.peds.some(d=>Math.hypot(d.x-u.x,d.z-u.z)<45))continue;let f=this.pickDest(u.x,u.z,e);if(f){this.peds.push({x:u.x,y:u.y+.15,z:u.z,yaw:Math.atan2(-c*u.lx,-c*u.lz),e:l,s:e.s,side:c,state:"wait",t:mn()*3,kind:mn()*6|0,dest:f});return}}}pickDest(t,e,n){let i=this.net;for(let r=0;r<12;r++){let a=Uu(this.level,this.stats.rides),o=mn()*Math.PI*2,l=(a[0]+mn()*(a[1]-a[0]))*1e3/1.3;i.query(t+Math.sin(o)*l,e+Math.cos(o)*l,-1,n);let c=n.edge;if(c<0||n.junc>=0||i.eLen[c]<30||i.eCls[c]===0)continue;let h=Math.max(10,Math.min(i.eLen[c]-10,n.s)),u=i.at(c,h,0,{}),f=Math.hypot(u.x-t,u.z-e)*1.3/1e3;return{e:c,s:h,name:i.edgeName(c,this.lang)||i.areaName(u.x,u.z,this.lang),km:f,fare:Math.round(Ra.flag+Ra.km*f)}}return null}peopleTick(t,e,n){let i=this.ride?2:6,r=0;for(let a of this.peds)a.state==="wait"&&r++;r<i&&this.time%.25<t&&this.spawnPed(e,this.q2||(this.q2={}));for(let a=this.peds.length-1;a>=0;a--){let o=this.peds[a];if(o.t+=t,o.state==="wait"&&Math.hypot(o.x-e.px,o.z-e.pz)>500){this.peds.splice(a,1);continue}if(o.state==="walk"){let l=e.R,c=e.px+l[0]*1.1*(o.side>0?1:-1)-o.x,h=e.pz+l[2]*1.1*(o.side>0?1:-1)-o.z,u=Math.hypot(c,h);if(u<.6||o.t>3)o.state="in",this.ride.t=0,this.toast("boarded","ok");else{let f=Math.min(u,2.2*t);o.x+=c/u*f,o.z+=h/u*f,o.yaw=Math.atan2(c,h)}}o.state==="out"&&(o.x+=Math.sin(o.yaw)*1.4*t,o.z+=Math.cos(o.yaw)*1.4*t,o.t>4&&this.peds.splice(a,1)),o.state==="gone"&&this.peds.splice(a,1)}}nearPed(t){let e=null,n=11;for(let i of this.peds){if(i.state!=="wait")continue;let r=Math.hypot(i.x-t.px,i.z-t.pz);r<n&&(n=r,e=i)}return e}quote(t,e,n){if(n.quote&&Math.hypot(n.quote.x-t.px,n.quote.z-t.pz)<3)return n.quote;let i=this.net,r=this.q2||(this.q2={}),a=e.edge>=0?t.R[6]*e.fx+t.R[8]*e.fz>=0?1:-1:1;n.quote=null;for(let o=0;o<6&&!n.quote;o++){let l=o===0?n.dest:this.pickDest(n.x,n.z,r);if(!l)continue;let c=i.route(e.edge>=0?e.edge:l.e,e.edge>=0?e.s:0,a,l.e,l.s);!c||c.len<500||c.len>7e3||(n.dest=l,n.quote={x:t.px,z:t.pz,route:c,km:c.len/1e3,fare:Math.round(Ra.flag+Ra.km*c.len/1e3),name:l.name})}return n.quote}pickup(t,e){let n=this.nearPed(t);if(!n)return;let i=this.net,r=this.quote(t,e,n);if(!r){this.toast("noDest","warn"),n.state="out",n.t=0;return}let a=n.dest,o=r.route,l=mn()<.5?1:-1,c=i.at(a.e,a.s,l*(i.eHw[a.e]+1.7),{});n.state="walk",n.t=0,this.ride={ped:n,e:a.e,s:a.s,side:l,x:c.x,y:c.y,z:c.z,route:o,len:o.len,eta:o.len/this.level.time[0]+this.level.time[1],t:0,km:0,hits:0,fines:0,scare:0,name:a.name,fare:r.fare,routeT:0},this.toast("pickup","ok")}atDest(t){let e=this.ride;return e&&Math.hypot(e.x-t.px,e.z-t.pz)<this.net.eHw[e.e]+14}meter(){let t=this.ride;return t?t.fare:0}dropoff(t){let e=this.ride;if(!e)return;let n=this.meter(),i=[["fareKm:"+(e.len/1e3).toFixed(1),Math.round(n)]],r=n,a=e.t-e.eta;if(a>0){let h=Math.min(.6,Math.ceil(a/15)*.1)*(this.level.pay??1);i.push(["lateBy:"+Math.round(a),-Math.round(n*h)]),r-=n*h}if(e.hits>0){let h=Math.min(1,e.hits*.25)*(this.level.pay??1);i.push(["bumps:"+e.hits,-Math.round(n*h)]),r-=n*h}if(a<=0&&e.hits===0&&e.fines===0){let h=Math.max(2,Math.round(n*(.1+mn()*.1)));i.push(["tip",h]),r+=h}r=Math.max(0,Math.round(r));let o=Rx(a,e.hits,e.fines);i.push(["stars:"+"\u2605".repeat(o)+"\u2606".repeat(5-o),0]),this.pay(r,"earned");let l=this.stats;l.rides++,l.best=Math.max(l.best,r),l.stars+=o,l.rated++,l.last.unshift([String(e.name||"").slice(0,40),Math.round(e.len/100)/10,r,o]),l.last.length>20&&(l.last.length=20),this.events.push({kind:"ride",title:"rideDone",lines:i,total:r});let c=e.ped;c.state="out",c.t=0,c.x=t.px+t.R[0]*2.2*e.side,c.z=t.pz+t.R[2]*2.2*e.side,c.y=e.y+.15,c.yaw=Math.atan2(t.R[6],t.R[8]),this.peds.includes(c)||this.peds.push(c),this.ride=null}hitPed(t){this.stats.crashes++;let e=this.cost(800+t*60),n=this.fineCost(Qs.fault),i=[["impact:"+Math.round(t),0],["pedHurt",-e],["fineFault",-n]],r=-e-n;this.money+=r,this.stats.repairs+=e,this.stats.fines+=n,this.dirty=!0,this.ride&&this.ride.hits++,this.events.push({kind:"crash",title:"fine_ped",lines:i,total:r})}hit(t,e,n){if(t<1.3)return;this.crash||(this.crash={t:0,rel:0,car:!1,fault:!1,wall:!1});let i=this.crash;i.rel=Math.max(i.rel,t),i.t=0,e?(i.car=!0,i.fault=i.fault||n):i.wall=!0}crashTick(t){let e=this.crash;if(!e||(e.t+=t,e.t<1.2)||(this.crash=null,e.rel<(this.level.freeHit||0)))return;let n=Math.round(e.rel*3.6),i=this.level.crash??1;if(this.stats.crashes++,this.dirty=!0,i===0){this.ride&&this.ride.ped.state==="in"&&this.ride.hits++,this.toast("crashFree","warn");return}let r=e.wall||e.fault||this.time-this.redT<4,a=[["impact:"+n,0]],o=this.cost(Math.min(14e3,e.rel*e.rel*18)*i),l=this.fineCost(Qs.fault*i),c=0;if(r?(a.push(["repairOwn",-o]),c-=o):a.push(["repairInsured",0]),e.car&&r){let h=Math.min(14e3,Math.round(o*.9/10)*10);a.push(["repairOther",-h]),c-=h,a.push(["fineFault",-l]),c-=l,this.stats.fines+=l}if(this.money+=c,this.stats.repairs+=-c-(e.car&&r?l:0),this.dirty=!0,this.ride&&this.ride.ped.state==="in"){if(this.ride.hits++,r&&e.rel>6){let h=this.cost((200+e.rel*40)*i);a.push(["passengerHurt",-h]),c-=h,this.money-=h,this.stats.repairs+=h}if(e.rel>8.5){let h=this.ride.ped;h.state="gone",this.ride=null,a.push(["passengerLeft",0])}}this.events.push({kind:"crash",title:r?e.car?"crashYou":"crashWall":"crashThem",lines:a,total:c})}};function Rx(s,t,e){return Math.max(1,5-(s>30?2:s>0?1:0)-Math.min(2,t)-(e>0?1:0))}var Ou=[[[200,60,50],[40,50,80]],[[230,220,200],[90,70,50]],[[60,120,180],[50,50,55]],[[150,60,140],[30,30,40]],[[245,245,240],[245,245,240]],[[80,140,80],[60,60,70]]],Pa=[[200,150,110],[170,120,85],[215,170,130]];function Cx(s,t,e,n,i,r,a,o,l,c,h){let u=[[i,r,a],[o,r,a],[o,l,a],[i,l,a],[i,r,c],[o,r,c],[o,l,c],[i,l,c]],f=[[0,3,2,1,0,0,-1],[4,5,6,7,0,0,1],[0,4,7,3,-1,0,0],[1,2,6,5,1,0,0],[3,7,6,2,0,1,0],[0,1,5,4,0,-1,0]];for(let d of f){let p=s.length/3;for(let x=0;x<4;x++){let g=u[d[x]];s.push(g[0],g[1],g[2]),t.push(d[4]*127,d[5]*127,d[6]*127,0),e.push(h[0],h[1],h[2],0)}n.push(p,p+1,p+2,p,p+2,p+3)}}function ku(s){let t=[],e=[],n=[],i=[];for(let a of s)Cx(t,e,n,i,...a);let r=new xe;return r.setAttribute("position",new qt(new Float32Array(t),3)),r.setAttribute("normal",new qt(new Int8Array(e),4,!0)),r.setAttribute("col",new qt(new Uint8Array(n),4,!0)),r.setIndex(i),r.computeBoundingSphere(),r}var Ia=class{constructor(t,e=8){this.scene=t,this.mat=ys(),this.bodies=Ou.map((n,i)=>{let r=Pa[i%Pa.length];return ku([[-.17,0,-.1,-.02,.85,.1,n[1]],[.02,0,-.1,.17,.85,.1,n[1]],[-.22,.85,-.13,.22,1.45,.13,n[0]],[-.3,.88,-.07,-.22,1.42,.07,n[0]],[-.11,1.46,-.11,.11,1.72,.11,r],[-.12,1.68,-.12,.12,1.76,.12,[40,30,25]]])}),this.arms=Ou.map((n,i)=>ku([[-.04,-.55,-.07,.04,.02,.07,n[0]],[-.045,-.68,-.06,.045,-.55,.06,Pa[i%Pa.length]]])),this.arrowGeo=new ds(.32,.75,4),this.arrowGeo.rotateX(Math.PI),this.arrowGeo.translate(0,.375,0),this.arrowMat=new fn({color:2949007,fog:!1}),this.pool=[];for(let n=0;n<e;n++){let i=new wn,r=new ie(this.bodies[n%this.bodies.length],this.mat),a=new ie(this.arms[n%this.arms.length],this.mat);a.position.set(.26,1.42,0);let o=new ie(this.arrowGeo,this.arrowMat);o.visible=!1,i.add(r),i.add(a),i.add(o),i.visible=!1,t.add(i),this.pool.push({g:i,body:r,arm:a,arrow:o})}}update(t,e,n,i){for(let r=0;r<this.pool.length;r++){let a=this.pool[r],o=r<e.length?e[r]:n[r-e.length],l=o?Math.hypot(o.x-i.x,o.z-i.z):1e9;if(!o||o.state==="in"||o.state==="gone"||o.live===!1||l>(o.state==="wait"?420:260)){a.g.visible=!1;continue}if(a.g.visible=!0,a.body.geometry!==this.bodies[o.kind]&&(a.body.geometry=this.bodies[o.kind],a.arm.geometry=this.arms[o.kind]),a.g.position.set(o.x,o.y,o.z),a.g.rotation.y=o.yaw,a.arrow.visible=o.state==="wait",a.arrow.visible){let c=Math.max(1,l/22);a.arrow.scale.setScalar(c),a.arrow.position.y=2.1+.25*c+Math.abs(Math.sin(o.t*3))*.35*c,a.arrow.rotation.y=o.t*1.5}o.state==="wait"?(a.arm.rotation.z=Math.PI*.85+Math.sin(o.t*7)*.25,a.arm.rotation.x=0):(a.arm.rotation.z=.1,a.arm.rotation.x=Math.sin(o.t*8)*.5),a.body.position.y=o.state==="wait"?0:Math.abs(Math.sin(o.t*8))*.04}}dispose(){for(let t of this.pool)this.scene.remove(t.g);for(let t of this.bodies.concat(this.arms))t.dispose();this.arrowGeo.dispose(),this.arrowMat.dispose(),this.mat.dispose()}};var Gn=1592594996,gn=()=>(Gn^=Gn<<13,Gn>>>=0,Gn^=Gn>>17,Gn^=Gn<<5,Gn>>>=0,Gn/4294967296),La=class{constructor(t,e){this.net=t,this.q={},this.at={},this.list=[];for(let n=0;n<e;n++)this.list.push({x:0,y:-1e4,z:0,yaw:0,e:-1,s:0,side:1,dir:1,sp:1.3,d:0,t:gn()*3,kind:n%6,state:"stroll",live:!1})}place(t,e,n,i,r,a){let o=this.net,l=this.q;for(let c=0;c<12;c++){let h=gn()<.75?a+(gn()-.5)*2.2:gn()*Math.PI*2,u=i+gn()*(r-i);o.query(e+Math.sin(h)*u,n+Math.cos(h)*u,-1,l);let f=l.edge;if(f<0||l.junc>=0||o.eCls[f]===0||o.eLen[f]<40)continue;let d=gn()<.5?1:-1,p=l.i;if((d>0?o.pl[p]:o.pr[p])<ge-.05)continue;let x=Math.max(o.jr[o.eA[f]]+6,Math.min(o.eLen[f]-o.jr[o.eB[f]]-6,l.s));if(t.e=f,t.s=x,t.side=d,t.dir=gn()<.5?1:-1,t.sp=1.1+gn()*.5,t.d=d*(o.eHw[f]+1.1+gn()*(ge-2.2)),t.kind=gn()*6|0,t.live=!0,this.move(t,0))return!0}return t.live=!1,t.y=-1e4,!1}move(t,e){let n=this.net,i=t.e;t.s+=t.dir*t.sp*e;let r=n.jr[n.eA[i]]+5,a=n.eLen[i]-n.jr[n.eB[i]]-5;t.s<r?(t.s=r,t.dir=1):t.s>a&&(t.s=a,t.dir=-1);let o=n.at(i,t.s,t.d,this.at),l=n.query(o.x,o.z,-1,this.q),c=n.eOff[i]+Math.min(n.eN[i]-1,Math.max(0,Math.round(t.s/4)));if((t.side>0?n.pl[c]:n.pr[c])<ge-.05||Math.abs(l.d)-l.hl<.6||l.junc>=0){if(e===0)return!1;t.s-=t.dir*t.sp*e,t.dir=-t.dir,o=n.at(i,t.s,t.d,this.at)}return t.x=o.x,t.y=o.y+.15,t.z=o.z,t.yaw=Math.atan2(o.fx*t.dir,o.fz*t.dir),t.t+=e,!0}update(t,e,n,i){for(let r of this.list){if(r.live&&(r.x-e)*(r.x-e)+(r.z-n)*(r.z-n)>240*240&&(r.live=!1),!r.live){(r.wait=(r.wait||0)-t)<=0&&(r.wait=.3+gn()*.3,this.place(r,e,n,r.e<0?15:60,180,i));continue}this.move(r,t)}}};var Wn=13254170,bs=()=>(Wn^=Wn<<13,Wn>>>=0,Wn^=Wn>>17,Wn^=Wn<<5,Wn>>>=0,Wn/4294967296),Px=90;var Da=class{constructor(t){this.net=t,this.cams=[],this.police=[];let e={},n={},i=(a,o,l)=>(t.at(a,o,l,n),t.query(n.x,n.z,-1,e),e.edge>=0&&(Math.abs(e.d)-e.hl<.8||e.junc>=0)?null:{x:n.x,y:n.y,z:n.z,fx:n.fx,fz:n.fz,lx:n.lx,lz:n.lz}),r=(a,o,l,c)=>a.every(h=>(h.x-o)*(h.x-o)+(h.z-l)*(h.z-l)>c*c);for(let a=0;a<t.ne;a++){let o=t.eCls[a],l=t.eLen[a];if(o<=3&&l>=160&&bs()<.16){let c=t.eOne[a]||bs()<.5?1:-1,h=l*(.35+bs()*.3),u=-c,f=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4));if((u>0?t.pl[f]:t.pr[f])>=ge-.05){let d=i(a,h,u*(t.eHw[a]+.9));d&&r(this.cams,d.x,d.z,400)&&this.cams.push(Object.assign(d,{e:a,s:h,dir:c,side:u,yaw:Math.atan2(-c*d.fx,-c*d.fz)}))}}if(o<=4&&l>=90&&bs()<.05){let c=bs()<.5?1:-1,h=l*(.3+bs()*.4),u=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4)),f=h+5.5*c,d=t.eOff[a]+Math.min(t.eN[a]-1,Math.max(0,Math.round(f/4)));if((c>0?t.pl[u]:t.pr[u])>=ge-.05&&(c>0?t.pl[d]:t.pr[d])>=ge-.05&&f>8&&f<l-8&&i(a,f,c*(t.eHw[a]+1.75))){let p=i(a,h,c*(t.eHw[a]+1.4));p&&r(this.police,p.x,p.z,500)&&this.police.push(Object.assign(p,{e:a,s:h,side:c,yaw:Math.atan2(-c*p.lx,-c*p.lz)}))}}}}officer(t,e,n){let i=null,r=(n||Px)**2;for(let a of this.police){let o=(a.x-t)*(a.x-t)+(a.z-e)*(a.z-e);o<r&&(r=o,i=a)}return i}};var Ix=.25,za=240,ee=s=>Math.round(s*100)/100,be=s=>Math.round(s*1e3)/1e3,Na=class{constructor(){this.ring=new Array(za),this.n=0,this.t=0,this.events=[],this.busy=!1,this.ray=new ms,this.ray.far=12}reset(){this.n=0,this.t=0,this.events.length=0}event(t,e){this.events.push([ee(this.time||0),t,String(e).slice(0,80)]),this.events.length>60&&this.events.shift()}tick(t,e){if(this.time=e.time,(this.t-=t)>0)return;this.t=Ix;let n=e.me.veh,i=e.qp,r=n.wheels,a=0,o=0;for(let l of r)l.contact&&o++,l.comp>a&&(a=l.comp);this.ring[this.n++%za]=[ee(e.time),ee(n.px),ee(n.py),ee(n.pz),be(Math.atan2(n.R[6],n.R[8])),Math.round(n.fwdSpeed*36)/10,i.edge,ee(i.s||0),ee(i.d||0),ee(i.y),o,be(a),n.gearbox?n.mgear:n.gear,ee(n.input.steer),ee(n.input.throttle),ee(n.input.brake)]}samples(){let t=[],e=Math.min(this.n,za);for(let n=this.n-e;n<this.n;n++)t.push(this.ring[n%za]);return t}drawn(t,e,n,i){let r=[];for(let a of t.live)if(a.built&&Math.abs(a.cx-e)<140&&Math.abs(a.cz-n)<140)for(let o of a.built.meshes)(o.userData.kind==="road"||o.userData.kind==="core")&&r.push(o);return this.ray.set(new B(e,i+6,n),new B(0,-1,0)),this.ray.intersectObjects(r,!1).slice(0,4).map(a=>{let o=a.object.geometry.attributes.ds,l=a.face;return o&&l?[a.object.userData.kind,be(a.point.y),ee(o.getX(l.a)),ee(o.getY(l.a)),ee(o.getZ(l.a)),o.getW(l.a)]:[a.object.userData.kind,be(a.point.y)]})}state(t,e){let n=t.me.veh,i=t.net,r={},a=t.city,o=n.wheels.map((M,y)=>{let v=M.contact?M.cx:n.px,T=M.contact?M.cz:n.pz;i.query(v,T,-1,r);let w=this.drawn(a,v,T,r.y);return{k:y,contact:M.contact,comp:be(M.comp),x:ee(v),z:ee(T),roadY:be(r.y),drawnY:w.length?w[0][1]:null,diff:w.length?be(w[0][1]-r.y):null,hits:w,edge:r.edge,d:ee(r.d),off:r.off,junc:r.junc}}),l=[],c=n.R[6],h=n.R[8],u=n.R[0],f=n.R[2],d=0;for(let M=-4;M<=4;M++)for(let y=-4;y<=4;y++){let v=n.px+c*M*2.5+u*y*2.5,T=n.pz+h*M*2.5+f*y*2.5;i.query(v,T,-1,r);let w=this.drawn(a,v,T,r.y),A=w.length?be(w[0][1]-r.y):null;A!==null&&Math.abs(A)>Math.abs(d)&&(d=A),l.push([M,y,ee(v),ee(T),be(r.y),A,r.edge,r.junc,r.off,w.length?w[0][0]:""])}i.query(n.px,n.pz,-1,r);let p=r.edge,x=r.junc,g=t.cam.cam.position,m=M=>M>=0?{j:M,x:ee(i.jx[M]),z:ee(i.jz[M]),r:ee(i.jr[M]),y:be(i.jy[M]),plane:i.jPlane?i.jPlane[M]:0,gx:i.jgx?be(i.jgx[M]):0,gz:i.jgz?be(i.jgz[M]):0,edges:i.jEdges[M].length}:null;return{game:"tangier-taxi",version:pn,at:new Date().toISOString(),time:ee(t.time),car:{x:ee(n.px),y:be(n.py),z:be(n.pz),yaw:be(Math.atan2(n.R[6],n.R[8])),up:[be(n.R[3]),be(n.R[4]),be(n.R[5])],kmh:Math.round(n.fwdSpeed*36)/10,cgY:be(n.cgY),gearbox:n.gearbox||"auto",gear:n.gearbox?n.mgear:n.gear,rpm:Math.round(n.rpm),stalled:!!n.stalled,model:t.opts&&t.opts.car},road:p>=0?{edge:p,name:i.edgeName?i.edgeName(p):"",cls:i.eCls[p],len:ee(i.eLen[p]),hw:ee(i.eHw[p]),oneway:i.eOne[p],round:i.eRa[p],s:ee(r.s),d:ee(r.d),off:r.off,y:be(r.y),wall:ee(r.wall),limit:r.lim,a:m(i.eA[p]),b:m(i.eB[p])}:null,junction:m(x),wheels:o,worstDrawnMinusRoad:d,grid:l,gridCols:"ahead(x2.5m), right(x2.5m), x, z, roadY, drawnY - roadY, edge, junction, off (0 asphalt 1 kerb 2 pavement), drawn kind",camera:{mode:t.cam.mode,x:ee(g.x),y:ee(g.y),z:ee(g.z)},taxi:{money:Math.round(t.taxi.money),fuel:ee(t.taxi.fuel),ride:!!t.taxi.ride,prompt:t.taxi.prompt},quality:t.quality&&t.quality.tier,scale:t.scale,chunks:a.live.length,log:this.samples(),logCols:"t, x, y, z, yaw, km/h, edge, s, d, roadY, wheels on the ground, max compression, gear, steer, throttle, brake",events:this.events.slice(),cards:(t.taxi.log||[]).slice(-8).map(M=>({kind:M.kind,title:M.title,total:M.total})),...e}}shot(t){try{let n=Math.round(960*t.height/Math.max(1,t.width)),i=document.createElement("canvas");i.width=960,i.height=n,i.getContext("2d").drawImage(t,0,0,960,n);let r=i.toDataURL("image/jpeg",.72);return r.length>59e4&&(r=i.toDataURL("image/jpeg",.45)),r.length>59e4?"":r}catch{return""}}};var Ic=14,Lx=12,Dx=12,Ua=class{constructor(t,e){this.net=e,this.scene=t;let n=new qs;n.moveTo(0,2.6),n.lineTo(1.2,.6),n.lineTo(.38,.6),n.lineTo(.38,-2.6),n.lineTo(-.38,-2.6),n.lineTo(-.38,.6),n.lineTo(-1.2,.6),n.closePath();let i=new ca(n);i.rotateX(Math.PI/2),this.mesh=new fs(i,new fn({color:2949007,transparent:!0,opacity:.9,depthWrite:!1,side:qe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ic),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,t.add(this.mesh),this.m=new se,this.qt=new sn,this.p=new B,this.sc=new B(1,1,1),this.up=new B(0,1,0),this.a={},this.q={},this.t=0,this.turn=null}update(t,e,n,i,r){if((this.t-=t)>0)return;if(this.t=.25,!e||!e.route||e.ped.state!=="in"||n.edge<0){this.mesh.count=0,this.turn=null;return}let a=this.net,o=e.route.edges,l=this.a,c=this.q,h=0,u=0,f=null,d=Dx;o[0][0]===n.edge&&r&&o[0][1]!==r&&(f={dir:"uturn",dist:0,edge:n.edge});for(let p=0;p<o.length&&(h<Ic||!f)&&u<1500;p++){let x=o[p][0],g=o[p][1],m=a.eLen[x],M=g>0?0:m,y=g>0?m:0;p===0&&x===n.edge&&(M=n.s);let v=p===o.length-1;v&&x===e.e&&(y=e.s);let T=Math.abs(y-M),w=a.eOne[x]?0:-g*a.eHw[x]*.5;for(;i&&h<Ic&&d<=u+T&&d<160&&(!f||d<f.dist+30);){let A=M+g*(d-u);a.at(x,A,w,l),a.query(l.x,l.z,-1,c),this.p.set(l.x,c.y+.04,l.z),this.qt.setFromAxisAngle(this.up,Math.atan2(l.fx*g,l.fz*g)),this.m.compose(this.p,this.qt,this.sc),this.mesh.setMatrixAt(h++,this.m),d+=Lx}if(u+=T,!f)if(v)f={dir:"arrive",dist:u,edge:-1};else{let A=o[p+1][0],S=o[p+1][1];a.at(x,g>0?Math.max(0,m-6):Math.min(m,6),0,l);let b=Math.atan2(l.fx*g,l.fz*g),_=a.eLen[A];a.at(A,S>0?Math.min(_,8):Math.max(0,_-8),0,l);let z=Math.atan2(l.fx*S,l.fz*S)-b;for(;z>Math.PI;)z-=2*Math.PI;for(;z<-Math.PI;)z+=2*Math.PI;Math.abs(z)>.45&&(f={dir:Math.abs(z)>2.4?"uturn":z>0?"left":"right",dist:u,edge:A})}}this.mesh.count=i?h:0,this.mesh.instanceMatrix.needsUpdate=!0,this.turn=f}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}};var Bu=20,Fa=class{constructor(t,e){this.S=t,this.net=t.net,this.opts=e||{},this.rnd=Nx(this.opts.seed||1),this.path=null,this.k=0,this.found=[],this.seen=new Set,this.shots=[],this.pics={},this.n=0,this.trail=[],this.driven=[],this.tt=0,this.ct=0,this.stuckT=0,this.lostT=0,this.offT=0,this.trips=0,this.km=0,this.lx=null,this.lz=null,this.dxPrev=null,this.dzPrev=null,this.t=0,this.ray=new ms,this.ray.far=14,this.v3=new B,this.down=new B(0,-1,0),this.q={},this.a={},this.status="start"}laneOffset(t,e){let n=this.net,i=n.eHw[t];return n.eOne[t]?i>3.9?-(i-1.9):0:-e*Math.min(i*.5,2.5)}recordDriven(t,e){if(t===null){this.driven.length&&this.driven[this.driven.length-1]!==null&&this.driven.push(null),this.dxPrev=null,this.dzPrev=null;return}(this.dxPrev===null||(t-this.dxPrev)**2+(e-this.dzPrev)**2>=4)&&(this.driven.push([ct(t),ct(e)]),this.dxPrev=t,this.dzPrev=e)}plan(){let t=this.net,e=this.S,n=e.me.veh,i=e.qp;if(!(i.edge>=0))return!1;let r=n.R[6]*i.fx+n.R[8]*i.fz>=0?1:-1;for(let a=0;a<40;a++){let o=this.rnd()*Math.PI*2,l=300+this.rnd()*1200;t.query(n.px+Math.sin(o)*l,n.pz+Math.cos(o)*l,-1,this.q);let c=this.q.edge;if(c<0||t.eLen[c]<8||t.eCls[c]>=6)continue;let h=t.route(i.edge,i.s,r,c,t.eLen[c]/2);if(!h){t.at(c,t.eLen[c]/2,0,this.a),this.note("cut",n.px,n.py,n.pz,i.edge,"no route from #"+i.edge+" to #"+c+" ("+(t.edgeName(c,"en")||"#"+c)+")");continue}if(!(h.len<150||h.len>4e3))return this.build(h),this.dest={e:c,name:t.edgeName(c,"en")||"#"+c},this.status="trip "+(this.trips+1)+" to "+this.dest.name+" ("+Math.round(h.len)+" m)",!0}return!1}build(t){let e=this.net,n=this.a,i=[],r=[],a=[],o=[],l=null,c=null,h=-1,u=0;for(let f=0;f<t.edges.length;f++){let d=t.edges[f][0],p=t.edges[f][1],x=e.eLen[d],g=p>0?0:x,m=p>0?x:0;f===0&&(g=this.S.qp.edge===d?this.S.qp.s:g),f===t.edges.length-1&&(m=x/2);let M=this.laneOffset(d,p);if(e.at(d,g,0,n),l!==null){let v=Math.hypot(n.x-l,n.z-c),T=u>0?e.eB[h]:e.eA[h],w=p>0?e.eA[d]:e.eB[d];if(v>3||T!==w){let A="route jumps "+v.toFixed(1)+" m from #"+h+" (J"+T+") to #"+d+" (J"+w+")";this.note("cut",n.x,n.y,n.z,d,A,!0)}}let y=Math.max(1,Math.round(Math.abs(m-g)/2));for(let v=0;v<=y;v++){let T=g+(m-g)*v/y;e.at(d,T,M,n),i.push(n.x),r.push(n.z),a.push(d),o.push(p)}e.at(d,m,0,n),l=n.x,c=n.z,h=d,u=p,this.kinks(d)}this.path={x:i,z:r,e:a,d:o,n:i.length,edges:new Set(t.edges.map(f=>f[0]))},this.k=0}kinks(t,e=!0){let n=this.net,i=this.a,r=n.eLen[t];if(e&&this.kinked&&this.kinked.has(t)||((this.kinked||(this.kinked=new Set)).add(t),r<8))return;let a=Math.min(r*.25,Math.max(2,n.jr[n.eA[t]]*.6)),o=Math.max(a,r-Math.min(r*.25,Math.max(2,n.jr[n.eB[t]]*.6))),l=null;for(let c=a;c<=o;c+=2){n.at(t,c,0,i);let h=Math.atan2(i.fx,i.fz);if(l!==null){n.at(t,Math.min(r,c+8),0,this.q);let u=Math.atan2(this.q.fx,this.q.fz),f=Math.abs(u-l);if(f>Math.PI&&(f=2*Math.PI-f),f>1.22){this.note("kink",i.x,i.y,i.z,t,"street turns "+Math.round(f*57.3)+"\xB0 within 10 m at s="+Math.round(c),e);return}}l=h}}drive(t){let e=this.S,n=e.me.veh,i=this.net,r=e.taxi;if(!(e.qp.edge>=0))return;if(this.t+=t,this.recordDriven(n.px,n.pz),r.fuel=40,r.money=Math.max(r.money,1e3),(!this.path||this.k>=this.path.n-3)&&(this.path&&this.trips++,this.opts.spread&&this.trips&&this.trips%this.opts.spread===0&&!this.jumped?(this.jump(),this.jumped=!0):this.jumped=!1,this.path=null,!this.plan())){this.jump();return}let a=this.path,o=n.R[6],l=n.R[8],c=l,h=-o,u=this.k,f=1e9;for(let w=this.k;w<Math.min(a.n,this.k+40);w++){let A=(a.x[w]-n.px)**2+(a.z[w]-n.pz)**2;A<f&&(f=A,u=w)}this.k=u;let d=Math.abs(n.fwdSpeed),p=Math.min(a.n-1,this.k+Math.round((5+d*.55)/2)),x=a.x[p]-n.px,g=a.z[p]-n.pz,m=Math.atan2(x*c+g*h,x*o+g*l);if(Math.abs(m)>1.7?this.back=!0:Math.abs(m)<.9&&(this.back=!1),this.back){n.input.steer=-Math.sign(m),n.input.throttle=0,n.input.brake=.7,n.input.handbrake=0,n.input.clutch=0,n.gearbox&&(n.gearbox=null),this.watch(t,n,d);return}n.input.steer=Math.max(-1,Math.min(1,m*2.2));let M=0,y=Math.min(a.n-1,this.k+18);for(let w=this.k+2;w<y;w+=2){let A=Math.atan2(a.x[w]-a.x[w-2],a.z[w]-a.z[w-2]),S=Math.atan2(a.x[w+2<a.n?w+2:w]-a.x[w],a.z[w+2<a.n?w+2:w]-a.z[w]),b=Math.abs(S-A);b>Math.PI&&(b=2*Math.PI-b),M=Math.max(M,b)}let v=Math.min(e.qp.lim||50,this.opts.kmh||50),T=Math.max(12,v-M*70)/3.6;n.input.throttle=d<T?Math.min(1,(T-d)*.5+.2):0,n.input.brake=d>T+1.5?Math.min(1,(d-T)*.3):0,n.input.handbrake=0,n.input.clutch=0,n.gearbox&&(n.gearbox=null),this.watch(t,n,d)}jump(t){let e=this.net,n=this.S.me.veh,i=this.a;for(let r=0;r<50;r++){let a=t>=0?t:Math.floor(this.rnd()*e.ne);if(!(t===void 0&&(e.eLen[a]<40||e.eCls[a]>=6))){e.at(a,e.eLen[a]/2,this.laneOffset(a,1),i),this.recordDriven(null,null),n.setPose(i.x,i.y+n.cgY+.45,i.z,Math.atan2(i.fx,i.fz)),n.vx=n.vy=n.vz=0,this.settle=1.5,e.query(i.x,i.z,a,this.S.qp),this.recordDriven(i.x,i.z),this.path=null,this.stuckT=0,this.lostT=0,this.trail.length=0,this.lx=null,this.S.city.stream(i.x,i.z,0,!0);return}}}warpTo(t,e,n,i=0,r=!1){let a=this.net,o=this.S,l=o.me.veh,c=this.q;a.query(t,e,n>=0?n:-1,c);let h=c.fx||0,u=c.fz||1;if(i>0&&c.edge>=0)if(r){let d=t-h*i,p=e-u*i;a.query(d,p,-1,c),c.edge>=0&&(t=d,e=p)}else{let d=Math.max(0,c.s-i);a.at(c.edge,d,0,this.a);let p=t-this.a.x,x=e-this.a.z,g=Math.hypot(p,x);g>1&&(h=p/g,u=x/g,t=this.a.x,e=this.a.z,a.query(t,e,c.edge,c))}let f=Math.atan2(h,u);this.recordDriven(null,null),l.setPose(t,c.y+l.cgY+.45,e,f),l.vx=l.vy=l.vz=0,this.settle=1.5,a.query(t,e,n>=0?n:-1,o.qp),this.recordDriven(t,e),this.path=null,this.stuckT=0,this.lostT=0,this.trail.length=0,this.lx=null,o.city.stream(t,e,0,!0);for(let d=0;d<60;d++)o.cam.update(.05,o.me)}watch(t,e,n){let i=this.S,r=this.net,a=i.qp,o=this.path;if(this.lx!==null&&(this.km+=Math.hypot(e.px-this.lx,e.pz-this.lz)/1e3),this.lx=e.px,this.lz=e.pz,(this.tt-=t)<=0){this.tt=.25;let l=0;for(let h of e.wheels)h.comp>l&&(l=h.comp);this.trail.push([Math.round(this.t*100)/100,ct(e.px),ct(e.py),ct(e.pz),Math.round(n*36)/10,a.edge,ct(a.d||0),a.junc,ct(a.y),tr(l),ct(e.input.steer)]),this.trail.length>40&&this.trail.shift();let c=r.eHw[a.edge]||3;a.edge>=0&&Math.abs(a.d)>c+1.2&&a.junc<0?(this.offT+=.25)>=.75&&(this.note("offroad",e.px,e.py,e.pz,a.edge,(Math.abs(a.d)-c).toFixed(1)+" m off the asphalt"),this.offT=-3):this.offT>0?this.offT=0:this.offT=Math.min(0,this.offT+.25),this.settle>0?this.settle-=.25:(l>.3||Math.abs(e.vy)>3.2)&&this.note("bump",e.px,e.py,e.pz,a.edge,"suspension "+l.toFixed(2)+" m, vertical "+e.vy.toFixed(1)+" m/s"),n<1&&(e.input.throttle>.3||this.back)?(this.stuckT+=.25)>=4&&(this.note("stuck",e.px,e.py,e.pz,a.edge,"no progress for 4 s"),this.skip(15)):this.stuckT=0,o&&a.edge>=0&&a.junc<0&&!o.edges.has(a.edge)?(this.lostT+=.25)>=3&&(this.note("lost",e.px,e.py,e.pz,a.edge,"on #"+a.edge+", not on the route"),this.path=null,this.lostT=0):this.lostT=0}(this.ct-=t)<=0&&(this.ct=.4,this.surface(e))}skip(t){let e=this.path,n=this.S.me.veh;if(!e)return this.jump();let i=Math.min(e.n-2,this.k+Math.round(t/2)),r=Math.atan2(e.x[i+1]-e.x[i],e.z[i+1]-e.z[i]);zx(this.net,e.x[i],e.z[i],this.q),this.recordDriven(null,null),n.setPose(e.x[i],this.q.y+n.cgY+.45,e.z[i],r),n.vx=n.vy=n.vz=0,this.settle=1.5,this.recordDriven(e.x[i],e.z[i]),this.k=i,this.stuckT=0}surface(t){let e=this.net,n=this.S,i=this.q,r=t.R[6],a=t.R[8],o=a,l=-r,c=[];for(let h of n.city.live)if(h.built&&Math.abs(h.cx-t.px)<130&&Math.abs(h.cz-t.pz)<130)for(let u of h.built.meshes)(u.userData.kind==="road"||u.userData.kind==="core")&&c.push(u);if(c.length)for(let h of[0,4,8,12,16])for(let u=-2;u<=2;u++){let f=t.px+r*h+o*u*2.2,d=t.pz+a*h+l*u*2.2;if(e.query(f,d,-1,i),i.edge<0||i.off!==0||!(i.junc>=0&&e.jEdges[i.junc].length>=3&&Math.hypot(f-e.jx[i.junc],d-e.jz[i.junc])<=e.jr[i.junc]+.2||Math.abs(i.d)<e.eHw[i.edge]-.08))continue;this.v3.set(f,i.y+2.2,d),this.ray.set(this.v3,this.down);let x=this.ray.intersectObjects(c,!1)[0];if(!x){this.note("hole",f,i.y,d,i.edge,"nothing drawn under asphalt");continue}let g=x.point.y-i.y;if(x.object.userData.kind==="core"){let m=x.object.geometry.attributes.col,M=x.face,y=m.getX(M.a),v=m.getY(M.a),T=m.getZ(M.a),w=v>y+.02&&v>T+.1,A=y>.7&&T<.68&&Math.abs(y-v)<.1,S=y>v&&v>T+.05&&y<.65&&v<.58;(w||A||S)&&g>-.05?this.note("grass",f,x.point.y,d,i.edge,(w?"grass":"ground")+" drawn "+g.toFixed(2)+" m over the asphalt"+(i.junc>=0?" (junction "+i.junc+")":"")):g>.15&&this.note("height",f,x.point.y,d,i.edge,"pavement / object "+g.toFixed(2)+" m over the asphalt")}else Math.abs(g)>.15&&this.note("height",f,x.point.y,d,i.edge,"drawn road "+g.toFixed(2)+" m from the driven road")}}patrolAllNodes(t={}){let e=this.net,n=e.nj,i=e.ne,r=[],a=[],o={coord:{},path:{}},l=(P,L)=>{o.coord[P]=(o.coord[P]||0)+1,r.push(Object.assign({kind:P},L))},c=(P,L)=>{o.path[P]=(o.path[P]||0)+1,a.push(Object.assign({kind:P},L))},h={},u={},f=e.box;for(let P=0;P<n;P++){let L=e.jx[P],O=e.jy[P],U=e.jz[P],Y=e.jr[P];(!Number.isFinite(L)||!Number.isFinite(O)||!Number.isFinite(U)||!Number.isFinite(Y)||L<f.x0||L>f.x1||U<f.z0||U>f.z1)&&l("out_of_bounds_node",{junction:P,x:ct(L),y:ct(O),z:ct(U),r:ct(Y)});let j=e.jEdges[P].length;if(j===0&&c("isolated_node",{junction:P,x:ct(L),z:ct(U)}),j===1){let st=e.jEdges[P][0];c("dead_end_node",{junction:P,edge:st,x:ct(L),y:ct(O),z:ct(U),street:e.edgeName(st,"en"),oneway:!!e.eOne[st],len:ct(e.eLen[st])})}if(j>=2){let st=0,it=0;for(let xt of e.jEdges[P])e.eOne[xt]?e.eA[xt]===P?it++:st++:(st++,it++);st>0&&it===0?c("oneway_sink_node",{junction:P,x:ct(L),y:ct(O),z:ct(U),inDeg:st,outDeg:it,edges:e.jEdges[P].slice()}):it>0&&st===0&&c("oneway_source_node",{junction:P,x:ct(L),y:ct(O),z:ct(U),inDeg:st,outDeg:it,edges:e.jEdges[P].slice()})}if(j>=3){let st=0;for(let W=0;W<8;W++)for(let K of[0,.7]){let ut=L+Math.cos(W*Math.PI/4)*Y*K,at=U+Math.sin(W*Math.PI/4)*Y*K;if(e.query(ut,at,-1,h),h.edge>=0&&e.eA[h.edge]!==P&&e.eB[h.edge]!==P)continue;let tt=e.jPlane[P]?e.planeY(P,ut,at):O,vt=h.y-tt;Math.abs(vt)>Math.abs(st)&&(st=vt)}Math.abs(st)>.12&&l("junction_height_mismatch",{junction:P,x:ct(L),y:ct(O),z:ct(U),deltaY:tr(st),deg:j});let it=[];for(let W of e.jEdges[P]){let K=e.eA[W]===P,ut=e.eLen[W];e.at(W,K?Math.min(ut,6):Math.max(0,ut-6),0,u),it.push({e:W,ang:Math.atan2(K?u.fx:-u.fx,K?u.fz:-u.fz),ra:!!e.eRa[W]})}it.sort((W,K)=>W.ang-K.ang);let xt=180;for(let W=0;W<it.length;W++){let ut=(it[(W+1)%it.length].ang-it[W].ang)*180/Math.PI;ut<0&&(ut+=360),ut<xt&&(xt=ut)}xt<25&&j>=4&&l("acute_multi_junction",{junction:P,x:ct(L),y:ct(O),z:ct(U),deg:j,minAngleDeg:ct(xt),hasRoundabout:it.some(W=>W.ra)})}}let d=new Map,p=40,x=(P,L)=>P*1e5+L;for(let P=0;P<n;P++){if(e.jEdges[P].length<3)continue;let L=Math.floor(e.jx[P]/p),O=Math.floor(e.jz[P]/p),U=x(L,O),Y=d.get(U);Y||d.set(U,Y=[]),Y.push(P)}for(let P=0;P<n;P++){if(e.jEdges[P].length<3)continue;let L=Math.floor(e.jx[P]/p),O=Math.floor(e.jz[P]/p);for(let U=-1;U<=1;U++)for(let Y=-1;Y<=1;Y++)for(let j of d.get(x(L+U,O+Y))||[]){if(j<=P)continue;let st=Math.hypot(e.jx[j]-e.jx[P],e.jz[j]-e.jz[P]);st<e.jr[P]+e.jr[j]+2&&l("overlapping_junction_plazas",{junctionA:P,junctionB:j,x:ct((e.jx[P]+e.jx[j])/2),z:ct((e.jz[P]+e.jz[j])/2),dist:ct(st),sumRadii:ct(e.jr[P]+e.jr[j])})}}for(let P=0;P<i;P++){let L=e.eOff[P],O=e.eN[P],U=e.eLen[P],Y=e.eA[P],j=e.eB[P],st=e.eHw[P],it=e.edgeName(P,"en");if(O<2||U<1){l("degenerate_edge",{edge:P,junctionA:Y,junctionB:j,len:ct(U),samples:O,street:it});continue}let xt=Math.hypot(e.px[L]-e.jx[Y],e.pz[L]-e.jz[Y]),W=Math.hypot(e.px[L+O-1]-e.jx[j],e.pz[L+O-1]-e.jz[j]);xt>1&&l("junction_endpoint_mismatch",{edge:P,junction:Y,end:"A",gapM:ct(xt),x:ct(e.px[L]),z:ct(e.pz[L]),jx:ct(e.jx[Y]),jz:ct(e.jz[Y]),street:it}),W>1&&l("junction_endpoint_mismatch",{edge:P,junction:j,end:"B",gapM:ct(W),x:ct(e.px[L+O-1]),z:ct(e.pz[L+O-1]),jx:ct(e.jx[j]),jz:ct(e.jz[j]),street:it});let K=0,ut=-1,at=null,tt=0,vt=e.pl[L],Et=e.pr[L],Vt=0;for(let Pt=0;Pt<O;Pt++){let zt=L+Pt,F=e.px[zt],Zt=e.py[zt],Nt=e.pz[zt];if(!Number.isFinite(F)||!Number.isFinite(Zt)||!Number.isFinite(Nt)||F<f.x0||F>f.x1||Nt<f.z0||Nt>f.z1){l("out_of_bounds_sample",{edge:P,sample:zt,x:ct(F),y:ct(Zt),z:ct(Nt),street:it});break}if(Pt>0){let gt=Math.hypot(F-e.px[zt-1],Nt-e.pz[zt-1]);if(gt<.05)tt++;else{let Wt=Math.abs(Zt-e.py[zt-1])/gt;Wt>K&&(K=Wt,ut=zt)}(Math.abs(e.pl[zt]-vt)>2.2||Math.abs(e.pr[zt]-Et)>2.2)&&Vt++,vt=e.pl[zt],Et=e.pr[zt]}let Ft=e.groundAt(F,Nt);Ft>Zt-.05&&!at&&(at={edge:P,sample:zt,x:ct(F),y:ct(Zt),z:ct(Nt),groundY:ct(Ft),overBy:tr(Ft-Zt),street:it})}if(tt>0&&l("duplicate_samples",{edge:P,count:tt,x:ct(e.px[L]),z:ct(e.pz[L]),street:it}),K>.3&&ut>=0&&l("steep_grade",{edge:P,grade:tr(K),x:ct(e.px[ut]),y:ct(e.py[ut]),z:ct(e.pz[ut]),street:it}),at&&l("ground_over_road",at),Vt>=3&&U>20&&l("fragmented_pavement",{edge:P,transitions:Vt,x:ct(e.px[L+(O>>1)]),z:ct(e.pz[L+(O>>1)]),street:it}),U>=8){let Pt=Math.min(U*.25,Math.max(2,e.jr[Y]*.6)),zt=Math.max(Pt,U-Math.min(U*.25,Math.max(2,e.jr[j]*.6))),F=null;for(let Zt=Pt;Zt<=zt;Zt+=2){e.at(P,Zt,0,u);let Nt=Math.atan2(u.fx,u.fz);if(F!==null){e.at(P,Math.min(U,Zt+8),0,h);let Ft=Math.atan2(h.fx,h.fz),gt=Math.abs(Ft-F);if(gt>Math.PI&&(gt=2*Math.PI-gt),gt>1.22){l("kink",{edge:P,s:Math.round(Zt),angleDeg:Math.round(gt*57.3),x:ct(u.x),y:ct(u.y),z:ct(u.z),street:it,roundabout:!!e.eRa[P]});break}}F=Nt}}if(U>=16){let Pt=L+(O>>1),zt=e.px[Pt],F=e.pz[Pt],Zt=e.tx[Pt],Nt=e.tz[Pt],Ft=Math.floor((zt-e.gx0)/16),gt=Math.floor((F-e.gz0)/16);if(Ft>=0&&gt>=0&&Ft<e.gnx&&gt<e.gnz){let Wt=gt*e.gnx+Ft,Rt=new Set;for(let I=e.cellStart[Wt],E=e.cellStart[Wt+1];I<E;I++){let X=e.cellList[I],J=e.sE[X];if(J<=P||Rt.has(J)||e.eA[J]===Y||e.eA[J]===j||e.eB[J]===Y||e.eB[J]===j)continue;let nt=Math.hypot(e.px[X]-zt,e.pz[X]-F),et=st+e.eHw[J]-.5;if(nt<et){Rt.add(J);let lt=Math.abs(Zt*e.tx[X]+Nt*e.tz[X]);l("overlapping_carriageways",{edgeA:P,edgeB:J,x:ct(zt),z:ct(F),dist:ct(nt),combinedHalfWidths:ct(st+e.eHw[J]),parallelCos:tr(lt),onewayA:!!e.eOne[P],onewayB:!!e.eOne[J],streetA:it,streetB:e.edgeName(J,"en")})}}}}}let g=0,m=1e18;for(let P=0;P<n;P++){if(e.jEdges[P].length<2)continue;let L=Math.hypot(e.jx[P]-2350,e.jz[P]+1780);L<m&&(m=L,g=P)}let M=new Uint8Array(n),y=new Uint8Array(n);{let P=[g];M[g]=1;for(let O=0;O<P.length;O++){let U=P[O];for(let Y of e.jEdges[U]){if(!e.canLeave(Y,U))continue;let j=e.other(Y,U);M[j]||(M[j]=1,P.push(j))}}let L=[g];y[g]=1;for(let O=0;O<L.length;O++){let U=L[O];for(let Y of e.jEdges[U]){let j=e.other(Y,U);e.canLeave(Y,j)&&(y[j]||(y[j]=1,L.push(j)))}}}for(let P=0;P<n;P++)M[P]?y[P]||c("oneway_trap_no_return",{junction:P,x:ct(e.jx[P]),y:ct(e.jy[P]),z:ct(e.jz[P]),deg:e.jEdges[P].length}):c("unreachable_from_hub",{junction:P,x:ct(e.jx[P]),y:ct(e.jy[P]),z:ct(e.jz[P]),deg:e.jEdges[P].length});let v=new Uint8Array(n),T=[],w=g,A=new Map,S=150;for(let P=0;P<n;P++){let L=Math.floor(e.jx[P]/S)*1e5+Math.floor(e.jz[P]/S),O=A.get(L);O||A.set(L,O=[]),O.push(P)}for(let P=0;P<n&&(v[w]=1,T.push(w),P!==n-1);P++){let L=e.jx[w],O=e.jz[w],U=Math.floor(L/S),Y=Math.floor(O/S),j=-1,st=1e18;for(let it=0;it<=6&&j<0;it++)for(let xt=-it;xt<=it;xt++)for(let W=-it;W<=it;W++)if(!(Math.abs(xt)!==it&&Math.abs(W)!==it))for(let K of A.get((U+xt)*1e5+(Y+W))||[]){if(v[K])continue;let ut=(e.jx[K]-L)**2+(e.jz[K]-O)**2;ut<st&&(st=ut,j=K)}if(j<0)for(let it=0;it<n;it++){if(v[it])continue;let xt=(e.jx[it]-L)**2+(e.jz[it]-O)**2;xt<st&&(st=xt,j=it)}w=j}let b=(P,L)=>{for(let O of e.jEdges[P])if(L?e.canLeave(O,P):!e.eOne[O]||e.eB[O]===P)return O;return-1},_=0,C=0,z=0,D=t.maxRoutes||n,k=new Set;for(let P=0;P<Math.min(T.length-1,D);P++){let L=T[P],O=T[P+1],U=b(L,!0),Y=b(O,!1);if(U<0||Y<0){c("route_no_legal_exit_or_entry",{fromJunction:L,toJunction:O,fromEdge:U,toEdge:Y,x:ct(e.jx[L]),z:ct(e.jz[L]),toX:ct(e.jx[O]),toZ:ct(e.jz[O])});continue}_++;let j=this.junctionRoute(L,O);if(!j){c("route_failed",{fromJunction:L,toJunction:O,fromEdge:U,toEdge:Y,x:ct(e.jx[L]),z:ct(e.jz[L]),toX:ct(e.jx[O]),toZ:ct(e.jz[O])});continue}C++,z+=j.len;let st=Math.hypot(e.jx[O]-e.jx[L],e.jz[O]-e.jz[L]);st>15&&st<120&&j.len>st*10&&c("excessive_detour",{fromJunction:L,toJunction:O,x:ct(e.jx[L]),z:ct(e.jz[L]),euclidM:ct(st),routeM:ct(j.len),ratio:ct(j.len/st)});let it=-1,xt=0,W=0,K=0;for(let ut=0;ut<j.edges.length;ut++){let[at,tt]=j.edges[ut];e.eOne[at]&&tt<0&&c("wrong_way_in_route",{edge:at,fromJunction:L,toJunction:O,x:ct(e.px[e.eOff[at]]),z:ct(e.pz[e.eOff[at]]),street:e.edgeName(at,"en")});let vt=e.eLen[at],Et=tt>0?0:vt,Vt=tt>0?vt:0;if(e.at(at,Et,0,u),ut>0){let Pt=Math.hypot(u.x-W,u.z-K),zt=xt>0?e.eB[it]:e.eA[it],F=tt>0?e.eA[at]:e.eB[at];(Pt>3||zt!==F)&&!k.has(it+">"+at)&&(k.add(it+">"+at),c("route_discontinuity",{prevEdge:it,nextEdge:at,prevEndJ:zt,nextStartJ:F,gapM:ct(Pt),x:ct(u.x),y:ct(u.y),z:ct(u.z)}))}e.at(at,Vt,0,u),W=u.x,K=u.z,it=at,xt=tt}}return{summary:{patrolledAt:new Date().toISOString(),totalNodes:n,nodesPatrolled:T.length,totalEdges:i,totalSamples:e.n,hubJunction:g,routesTested:_,routesSucceeded:C,routesFailed:_-C,totalRouteKm:ct(z/1e3),totalPathfindingErrors:a.length,totalCoordinateAnomalies:r.length,pathfindingErrorCounts:o.path,coordinateAnomalyCounts:o.coord},pathfindingErrors:a,coordinateAnomalies:r}}checkJunctionHeight(t){let e=this.net,n=this.q,i=e.jx[t],r=e.jz[t],a=e.jr[t],o=e.jy[t],l=0;for(let c=0;c<8;c++)for(let h of[0,.7]){let u=i+Math.cos(c*Math.PI/4)*a*h,f=r+Math.sin(c*Math.PI/4)*a*h;if(e.query(u,f,-1,n),n.edge>=0&&e.eA[n.edge]!==t&&e.eB[n.edge]!==t)continue;let d=e.jPlane[t]?e.planeY(t,u,f):o,p=n.y-d;Math.abs(p)>Math.abs(l)&&(l=p)}return Math.abs(l)>.12?(this.note("height",i,o,r,e.jEdges[t][0]??-1,"junction J"+t+" plane height off by "+l.toFixed(2)+" m",!1),!1):!0}checkSteep(t){let e=this.net,n=e.eOff[t],i=e.eN[t],r=0,a=-1;for(let o=1;o<i;o++){let l=n+o,c=Math.hypot(e.px[l]-e.px[l-1],e.pz[l]-e.pz[l-1]);if(c>=.05){let h=Math.abs(e.py[l]-e.py[l-1])/c;h>r&&(r=h,a=l)}}return r>.3&&a>=0?(this.note("steep",e.px[a],e.py[a],e.pz[a],t,"steep grade "+(r*100).toFixed(1)+"% on #"+t,!1),!1):!0}checkOverlap(t,e){let n=this.net,i=n.eOff[t],r=n.eN[t];if(r<2)return!0;let a=n.eA[t],o=n.eB[t];if(n.eA[e]===a||n.eA[e]===o||n.eB[e]===a||n.eB[e]===o)return!0;let l=i+(r>>1),c=n.px[l],h=n.py[l],u=n.pz[l],f=n.eHw[t]+n.eHw[e]-.5,d=1e9,p=n.eOff[e],x=n.eN[e];for(let g=0;g<x;g++){let m=Math.hypot(n.px[p+g]-c,n.pz[p+g]-u);m<d&&(d=m)}return d<f?(this.note("overlap",c,h,u,t,"overlapping carriageways #"+t+" & #"+e+" ("+d.toFixed(2)+"m < "+(n.eHw[t]+n.eHw[e]).toFixed(2)+"m)",!1),!1):!0}checkPavement(t){let e=this.net,n=e.eOff[t],i=e.eN[t],r=e.eLen[t];if(i<2||r<=20)return!0;let a=0,o=n+(i>>1),l=e.pl[n],c=e.pr[n];for(let h=1;h<i;h++){let u=n+h;(Math.abs(e.pl[u]-l)>2.2||Math.abs(e.pr[u]-c)>2.2)&&(a===0&&(o=u),a++),l=e.pl[u],c=e.pr[u]}return a>=3?(this.note("pavement",e.px[o],e.py[o],e.pz[o],t,"fragmented pavement #"+t+": "+a+" jumps >2.2m",!1),!1):!0}junctionRoute(t,e){let n=this.net,i=null;for(let r of n.jEdges[t]){if(!n.canLeave(r,t))continue;let a=n.eA[r]===t?1:-1,o=a>0?Math.min(.5,n.eLen[r]/2):Math.max(n.eLen[r]-.5,n.eLen[r]/2);for(let l of n.jEdges[e]){if(n.eOne[l]&&n.eB[l]!==e)continue;let c=n.eB[l]===e?Math.max(n.eLen[l]-.5,n.eLen[l]/2):Math.min(.5,n.eLen[l]/2);if(l===r&&(a>0?c<o:c>o))continue;let h=n.route(r,o,a,l,c);h&&(!i||h.len<i.len)&&(i=h)}}return i}isLocalDetour(t,e){let n=this.net;for(let i of n.jEdges[t]){let r=n.other(i,t);if(r===e&&!n.eRa[i]&&n.eCls[i]>=2)return!0;for(let a of n.jEdges[r])if(n.other(a,r)===e&&!n.eRa[i]&&!n.eRa[a]&&(n.eCls[i]>=3||n.eCls[a]>=3))return!0}return!1}checkDetour(t,e){let n=this.net,i=(c,h)=>{for(let u of n.jEdges[c])if(h?n.canLeave(u,c):!n.eOne[u]||n.eB[u]===c)return u;return-1},r=i(t,!0),a=i(e,!1);if(r<0||a<0)return!0;let o=this.junctionRoute(t,e),l=Math.hypot(n.jx[e]-n.jx[t],n.jz[e]-n.jz[t]);if(!o||l>15&&l<120&&o.len>l*10){let c=o?"excessive detour J"+t+"->J"+e+": "+Math.round(o.len)+"m vs "+Math.round(l)+"m ("+(o.len/l).toFixed(1)+"x)":"no route J"+t+"->J"+e;return this.note("detour",n.jx[t],n.jy[t],n.jz[t],r,c,!1),!1}return!0}note(t,e,n,i,r,a,o){let l=t+":"+Math.round(e/Bu)+":"+Math.round(i/Bu);if(this.seen.has(l))return null;this.seen.add(l),this.net.query(e,i,-1,this.q);let c=this.S.me.veh,h=Math.hypot(e-c.px,i-c.pz),u={id:++this.n,kind:t,t:Math.round(this.t*10)/10,x:ct(e),y:ct(n),z:ct(i),edge:r,junc:this.q.junc,d:ct(this.q.d||0),street:r>=0&&this.net.edgeName(r,"en")||"",detail:a,car:[ct(c.px),ct(c.pz)],trail:this.trail.slice(-40)};return this.found.push(u),(!o||h<80)&&this.shots.push(u.id),u}take(){let t=this.found;return this.found=[],{found:t,status:this.status,trips:this.trips,km:Math.round(this.km*100)/100,t:Math.round(this.t),totalFound:this.n}}};function zx(s,t,e,n){return s.query(t,e,-1,n)}var ct=s=>Math.round(s*100)/100,tr=s=>Math.round(s*1e3)/1e3;function Nx(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}Je.taxi={model:"tr_taxi",cls:"T",mass:1180,power:66,torque:200,rpm:4600,gears:[3.73,2.05,1.32,.97,.76],final:4.21,cda:.68,cl:0,mu:1,steer:.62,nitro:0,drive:"f",turbo:1,cyl:4,diesel:1,shift:.4};var Ux=1745860,Fx=15909912;Je.taxi_city=Object.assign({},Je.city,{cls:"T",nitro:0});Je.taxi_hatch=Object.assign({},Je.hatch,{cls:"T",nitro:0});for(let s of["taxi","taxi_city","taxi_hatch"])Object.assign(Je[s],{steer:.7,steerFade:.02,steerSlack:.03,steerCatch:0,steerRate:3.6});var Ox=s=>s==="city"?Je.taxi_city:s==="hatch"?Je.taxi_hatch:Je.taxi;function kx(){Ce.uSun.value.set(.45,.75,-.48).normalize(),Ce.uSunCol.value.setRGB(1,.95,.86),Ce.uSky.value.setRGB(.55,.72,.95),Ce.uGround.value.setRGB(.42,.38,.32),Ce.uFog.value.setRGB(.76,.83,.92),Ce.uNight.value=0}var Hu=2,Oa=new Float32Array(8),ka=class{constructor(t,e,n,i){this.renderer=t,this.net=e,this.quality=n,this.opts=i,this.scene=new Kr,kx();let r=n.tier==="low"?480:n.tier==="mid"?620:800;Ce.uFogFar.value=r,Ce.uFogNear.value=r*.3,this.far=r,this.detailFar=r*.5,this.city=new Ea(this.scene,e,n),this.city.reach=r+60;let a=Ox(i.car);this.me={veh:new vs(a,Js(a.model),i.upgrades),spec:a,player:0,wreck:0,traffic:!1,active:!0},this.me.view=new _s(this.scene,a.model,Ux,Fx);let o=this.me.veh;o.gearbox=i.gearbox==="auto"?null:i.gearbox,o.mgear=1,this.q={},this.qp={},this.taxi=new Ca(e,i.saved),this.taxi.lang=i.lang,this.level=Nu(i.level),this.taxi.level=this.level,this.enforce=new Da(e),this.taxi.enf=this.enforce,this.city.addEnforce(this.enforce),this.start(i.start),this.traffic=new Ta(this.scene,e,i.bot?0:Math.max(3,Math.round((n.tier==="low"?9:13)*this.level.traffic))),this.bot=i.bot?new Fa(this,i.bot):null,this.all=[this.me].concat(this.traffic.cars),this.walkers=new La(e,n.tier==="low"?8:16),this.people=new Ia(this.scene,10+this.walkers.list.length),this.cam=new ba(16/9,r+60),this.cam.shakeOn=n.tier!=="low",this.fx=new Sa(this.scene,n.tier,ya(8947848));let l=new Xs(1.4,1.4,60,10,1,!0);l.translate(0,30,0);let c=new Uint8Array(l.attributes.position.count*4);for(let h=0;h<l.attributes.position.count;h++){let u=l.attributes.position.getY(h);c[h*4]=40,c[h*4+1]=255,c[h*4+2]=140,c[h*4+3]=u<1?200:0}l.setAttribute("col",new qt(c,4,!0)),this.beacon=new ie(l,new me({transparent:!0,depthWrite:!1,side:qe,blending:Ci,vertexShader:"attribute vec4 col; varying vec4 vC; void main(){ vC = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 0.9, 1.0); }"})),this.beacon.visible=!1,this.beacon.renderOrder=4,this.beacon.frustumCulled=!1,this.scene.add(this.beacon),this.race={players:[this.me],racers:this.all},this.lightT=0,this.routeT=0,this.time=0,this.smokeAt=.45,this.city.stream(o.px,o.pz,0,!0),this.city.setLamps((h,u)=>Ks(e,h,u,this.traffic.t)),this.frameMs=16.7,this.scale=n.scale||1,this.lateFrames=0,this.goodFrames=0,this.size=new Lt,this.shiftMsg="",this.bug=new Na,this.guide=new Ua(this.scene,e),this.arrows=i.arrows!==!1}start(t){let e=this.net,n=this.q,i=t?t.x:2350,r=t?t.z:-1780,a=-1,o=1e18;for(let u=0;u<e.ne;u++){if(e.eCls[u]>3||e.eLen[u]<60)continue;let f=e.eOff[u]+(e.eN[u]>>1),d=Math.hypot(e.px[f]-i,e.pz[f]-r);d<o&&(o=d,a=u)}let l=a,c=e.at(l,e.eLen[l]/2,e.eOne[l]?0:-e.eHw[l]*.5,{}),h=this.me.veh;h.setPose(c.x,c.y+h.cgY+.45,c.z,Math.atan2(c.fx,c.fz))}pedHits(t,e){let n=t.R,i=a=>{let o=a.x-t.px,l=a.z-t.pz;return o*o+l*l>16?!1:Math.abs(o*n[0]+l*n[2])<1.1&&Math.abs(o*n[6]+l*n[8])<2.5&&Math.abs(a.y-t.py)<2.5},r=Math.abs(t.fwdSpeed)*3.6;for(let a of this.walkers.list)a.live&&i(a)&&(a.live=!1,a.wait=6,e.hitPed(r),this.bug.event("walker",Math.round(r)),this.onSound&&this.onSound("hit",this.me,5));for(let a of e.peds)a.state==="wait"&&i(a)&&(a.state="gone",e.hitPed(r),this.onSound&&this.onSound("hit",this.me,5))}update(t,e){this.time+=t;let n=this.me,i=n.veh,r=e.ctl,a=this.taxi;i.input.steer=r.steer,i.input.throttle=r.throttle,i.input.brake=r.brake,i.input.handbrake=r.handbrake,i.input.clutch=r.clutch,this.bot&&this.bot.drive(t);let o=e.edge;o.camera&&(this.cam.mode=(this.cam.mode+1)%3),i.gearbox&&(o.gearUp||o.gearDown)&&i.shift(o.gearUp?1:-1)==="clutch"&&a.toast("needClutch","warn"),o.up&&(a.limiter=a.limiter?Math.min(130,a.limiter+10):Math.max(30,Math.ceil(Math.abs(i.fwdSpeed)*3.6/10)*10)),o.down&&a.limiter&&(a.limiter=a.limiter<=30?0:a.limiter-10),o.action&&a.action(i,this.qp),i.hold=!!(a.refuel||a.helpT>0),i.hold&&(i.input.throttle=0,i.input.brake=0),this.traffic.update(t,this.all,n,this.q);let l=t/Hu,c=this.all,h=this.net,u=this.q;for(let x=0;x<Hu;x++){for(let g=0;g<c.length;g++){let m=c[g];if(!m.active)continue;m.veh.step(l,h,u),m.veh.groundY=u.y,this.wall(m.veh)>0&&m===n&&this.onHit(null,fe.rel)}for(let g=0;g<c.length;g++){let m=c[g];if(m.active)for(let M=g+1;M<c.length;M++){let y=c[M];!y.active||Ru(m.veh,y.veh)<=0||(fe.rel>3&&this.fx.spark(fe.px,fe.py,fe.pz,m.veh.vx,m.veh.vz,Math.min(12,2+fe.rel*.5|0)),m===n||y===n?this.onHit(m===n?y:m,fe.rel,m===n):fe.rel>4&&(m.wreck=m.wreck||0,y.stuck=(y.stuck||0)+1))}}}if(h.query(i.px,i.pz,i.hint,this.qp),a.update(t,i,this.qp,(x,g)=>Ks(h,x,g,this.traffic.t)),this.bug.tick(t,this),a.ride&&a.ride.ped.state==="in"&&(this.routeT-=t)<=0&&this.qp.edge>=0){this.routeT=4;let x=a.ride,g=i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1,m=h.route(this.qp.edge,this.qp.s,g,x.e,x.s);m&&(x.route=m,x.left=m.len,this.guide.t=0)}let f=a.fuelGo;if(f&&(this.fuelT=(this.fuelT||0)-t)<=0&&this.qp.edge>=0){this.fuelT=4;let x=h.route(this.qp.edge,this.qp.s,i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1,f.e,f.s);x&&(f.route=x,f.left=x.len,this.guide.t=0)}this.guide.update(t,f||a.ride,this.qp,this.arrows||!!f,i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1),(this.lightT-=t)<=0&&(this.lightT=.25,this.city.setLamps((x,g)=>Ks(h,x,g,this.traffic.t))),Ce.uTime.value+=t;let d=this.fx;for(let x=0;x<4;x++){let g=i.wheels[x],m=Math.max(g.front?g.slipLat-.4:g.slipLat,g.slipLong);g.contact&&m>this.smokeAt&&i.speed>4?(d.skids.add(x,g.cx,g.cy,g.cz,i.R[0],i.R[2],m),Math.random()<m*.25&&d.puff(g.cx,g.cy,g.cz,i.vx,i.vz,m)):d.skids.add(x,0,0,0,0,0,0)}d.update(t),this.walkers.update(t,i.px,i.pz,Math.atan2(i.R[6],i.R[8])),Math.abs(i.fwdSpeed)>1.5&&this.pedHits(i,a),this.people.update(t,a.peds,this.walkers.list,this.cam.cam.position),this.cam.update(t,n);let p=a.fuelGo||a.ride;this.beacon.visible=!!(p&&p.ped.state==="in"),this.beacon.visible&&this.beacon.position.set(p.x,p.y,p.z)}onHit(t,e,n){let i=this.me.veh;this.bug.event(t?"car":"wall",Math.round(e*36)/10+" km/h"),this.cam.kick(Math.min(.8,e*.04)),this.onSound&&this.onSound("hit",this.me,e);let r=!0;if(t){let a=fe.nx*(n?1:-1),o=fe.nz*(n?1:-1),l=i.vx*a+i.vz*o,c=-(t.veh.vx*a+t.veh.vz*o);r=l>c+.6||t.veh.speed<.8}this.taxi.hit(e,t,r)}wall(t){let e=t.R,n=this.q,i=e[0],r=e[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=e[6],l=e[8],c=Math.hypot(o,l)||1;o/=c,l/=c;let h=0;for(let D=-1;D<=1;D+=2)for(let k=-1;k<=1;k+=2)Oa[h++]=t.px-e[6]*t.cgZ+i*t.half.x*D+o*t.half.z*k,Oa[h++]=t.pz-e[8]*t.cgZ+r*t.half.x*D+l*t.half.z*k;let u=0,f=0,d=0,p=0,x=0;for(let D=0;D<4;D++){let k=Oa[D*2],P=Oa[D*2+1];if(this.net.query(k,P,t.hint,n),n.junc>=0||n.edge<0)continue;let L=Math.abs(n.d)-n.wall;if(L>u){u=L,f=k,d=P;let O=n.d>=0?-1:1;p=n.lx*O,x=n.lz*O}}if(u<=0)return 0;t.px+=p*u,t.pz+=x*u;let g=t.py+.15,m=f-t.px,M=g-t.py,y=d-t.pz,v=t.vx+(t.wy*y-t.wz*M),T=t.vy+(t.wz*m-t.wx*y),w=t.vz+(t.wx*M-t.wy*m),A=v*p+w*x;if(A>=0)return 0;let S=t.invMassAt(m,M,y,p,0,x),b=-(1+.15)*A/S;t.impulse(p*b,0,x*b,m,M,y);let _=v-p*A,C=w-x*A,z=Math.hypot(_,C);if(z>.05){let D=Math.min(b*.3,z/S);t.impulse(-_/z*D,0,-C/z*D,m,M,y)}return fe.j=b,fe.rel=-A,fe.nx=p,fe.nz=x,fe.px=f,fe.py=g,fe.pz=d,b}render(t){let e=this.renderer,n=this.cam.cam;this.budget(t),e.getSize(this.size),n.aspect=this.size.x/this.size.y,n.updateProjectionMatrix();let i=this.me.veh;this.city.stream(i.px,i.pz,this.quality.tier==="low"?3:5,!1),this.city.cull(n.position.x,n.position.z,this.far,this.detailFar),this.city.sky.position.copy(n.position);for(let r of this.all){if(!r.active){r.view.root.visible=!1,r.view.shadow.visible=!1;continue}let a=r.veh.px-n.position.x,o=r.veh.pz-n.position.z;r.view.sync(r.veh,Math.sqrt(a*a+o*o),0,r.veh.input.brake>.2?1:0)}this.fx.streaks.update(1/60,n,0,!1),e.render(this.scene,n)}budget(t){if(!t)return;t>18.5?this.lateFrames++:this.lateFrames=Math.max(0,this.lateFrames-1),t<15.5?this.goodFrames++:this.goodFrames=0;let e=this.quality.minScale||.5,n=this.quality.scale||1;this.lateFrames>10&&this.scale>e?(this.scale=Math.max(e,this.scale-.1),this.lateFrames=0,this.onScale&&this.onScale(this.scale)):this.goodFrames>240&&this.scale<n&&(this.scale=Math.min(n,this.scale+.05),this.goodFrames=0,this.onScale&&this.onScale(this.scale))}dispose(){this.city.dispose(),this.traffic.dispose(),this.guide.dispose(),this.me.view.dispose(),this.people.dispose(),this.scene.remove(this.beacon),this.beacon.geometry.dispose(),this.beacon.material.dispose();let t=this.fx;for(let e of[t.sparks.points,t.smoke.points,t.skids.mesh,t.streaks.lines])e.geometry.dispose(),e.material.dispose()}};var ye={A:0,B:1,X:2,Y:3,L:4,R:5,ZL:6,ZR:7,MINUS:8,PLUS:9,UP:12,DOWN:13,LEFT:14,RIGHT:15,CAPTURE:17},Ba=class{constructor(){this.pads={},this.acts={},this.ctl={steer:0,throttle:0,brake:0,handbrake:0,clutch:0},this.edge={action:0,up:0,down:0,camera:0,map:0},this.prev={},this.hit=new Uint8Array(24),this.actHit={},this.menuCb=null,this.dead=.14,this.steerNow=0}pad(t){return this.pads[t]||(this.pads[t]={b:new Float32Array(24),a:new Float32Array(4)})}onAction(t,e,n,i){if(n){this.menuCb&&this.menuCb(t,i,!0);return}i&&i.indexOf("pad")===0||((this.acts[i]||(this.acts[i]={}))[t]=e,e&&(this.actHit[t]=1)),e&&this.menuCb&&this.menuCb(t,i,!1)}onButton(t,e,n,i){this.pad(i).b[t]=e?Math.max(.01,n||1):0,e&&t<24&&(this.hit[t]=1),e&&(this.lastBtn=t,this.btnSeen=(this.btnSeen||0)+1)}onAxes(t,e){let n=this.pad(e);for(let i=0;i<4&&i<t.length;i++)n.a[i]=t[i]}btn(t){let e=0;for(let n in this.pads){let i=this.pads[n].b[t];i>e&&(e=i)}return e}axis(t){let e=0;for(let n in this.pads){let i=this.pads[n].a[t];Math.abs(i)>Math.abs(e)&&(e=i)}return e}act(t){for(let e in this.acts)if(this.acts[e][t])return 1;return 0}rise(t,e){let n=e&&!this.prev[t]?1:0;return this.prev[t]=e,n}poll(t){let e=this.ctl,n=this.axis(0);n=Math.abs(n)>this.dead?(n-Math.sign(n)*this.dead)/(1-this.dead):0;let i=(this.btn(ye.LEFT)>0||this.act("left")?1:0)-(this.btn(ye.RIGHT)>0||this.act("right")?1:0);i?(this.steerNow+=(i-this.steerNow)*Math.min(1,t*9),e.steer=this.steerNow):(this.steerNow=0,e.steer=-Math.sign(n)*Math.pow(Math.abs(n),1.2)),e.throttle=Math.max(this.btn(ye.ZR),this.act("up")),e.brake=Math.max(this.btn(ye.ZL),this.act("down")),e.handbrake=this.btn(ye.B)>.3?1:0;let r=this.btn(ye.X);e.clutch=r>.02&&r<.98?r:r>=.98?1:Math.max(0,e.clutch-t/.9);let a=this.edge,o=this.hit,l=(u,f,d)=>{let p=f?!this.prev[u]||d?1:0:d?1:0;return this.prev[u]=f,p};a.action=l("action",this.btn(ye.A)>.3||!!this.act("jump"),o[ye.A]===1||this.actHit.jump===1),a.camera=l("camera",this.btn(ye.Y)>.3,o[ye.Y]===1),a.up=l("up",this.btn(ye.UP)>.3,o[ye.UP]===1),a.down=l("down",this.btn(ye.DOWN)>.3,o[ye.DOWN]===1),a.gearUp=l("gu",this.btn(ye.R)>.3,o[ye.R]===1),a.gearDown=l("gd",this.btn(ye.L)>.3,o[ye.L]===1),a.map=l("map",this.btn(ye.MINUS)>.3,o[ye.MINUS]===1);let c=!1,h=!1;for(let u=ye.CAPTURE;u<24;u++)this.btn(u)>.3&&(c=!0),o[u]===1&&(h=!0);a.capture=l("cap",c,h),o.fill(0),this.actHit={}}clearHeld(){this.hit.fill(0),this.actHit={};for(let t in this.acts)this.acts[t]={};for(let t in this.pads)this.pads[t].b.fill(0),this.pads[t].a.fill(0);this.prev={}}hasPad(){for(let t in this.pads)return!0;return!1}};var Ha={en:{tag:"Drive the real streets of Tangier",press:"Press OK to start",start:"Start the shift",settings:"Settings",help:"Controls",resume:"Resume",quit:"End the shift",back:"Back",gearbox:"Gearbox",auto:"Automatic",manual:"Manual",clutch:"Manual + clutch",limiter:"Speed limiter",off:"Off",money:"Cash",rides:"Rides",fuel:"Fuel",paused:"Paused",pickup:"Pick up the passenger",dropoff:"Drop off the passenger",refuel:"Refuel",stop:"Stop refuelling",help_:"Call roadside help",helpWait:"Help is on its way\u2026",to:"To",eta:"Time left",late:"Late",meter:"Meter",fine_speed:"Fine: speeding",fine_red:"Fine: red light",fine_wrong:"Fine: wrong way (one-way street)",fine_pave:"Fine: driving on the pavement",rideDone:"Ride paid",crashYou:"Accident: your fault",crashThem:"Accident: the other driver's fault",crashWall:"Accident: you hit the kerb wall",impact:"Impact at {0} km/h",repairOwn:"Repairs to your taxi",repairOther:"Damage to the other car",repairInsured:"Repairs paid by the other driver's insurance",fineFault:"Fine: loss of control",passengerLeft:"The passenger got out without paying",helpDone:"Roadside help",helpService:"Call-out",helpFuel:"6 L of diesel",refuelDone:"Refuelled",litres:"{0} L of diesel",tip:"Tip",bumps:"Bumps on the way ({0})",lateBy:"Late by {0} s",meterKm:"Meter, {0} km",outOfFuel:"Out of fuel! Press A to call roadside help.",lowFuel:"Fuel is almost empty! Pause > Go fuel up",statsT:"Stats",ratedN:"{0} ratings",bestRide:"Best ride",finesN:"Fines",crashesN:"Accidents",lastRides:"Last rides",noRides:"No rides yet.",stars:"Passenger rating: {0}",crashFree:"Accident! On Easy it costs nothing",goFuel:"Go fuel up",goFuelOff:"Stop the way to the fuel station",fuelGuide:"Follow the green arrows to the nearest fuel station",fuelGuideOff:"Fuel station guidance off",fuelNoWay:"No way to a fuel station from here",fuelArrived:"Fuel station: stop by the pump, then press A",toFuel:"To {0}",fuelStation:"Fuel station",fuelOrange:"Fuel is getting low (under 10 L): Pause > Go fuel up",fuelWarn:"Fuel low \xB7 Pause (+) > Go fuel up",fuelWarnRed:"Almost empty! Pause (+) > Go fuel up",helpComing:"Help is coming",policeWarn:"Police warning: no fine this time",boarded:"Passenger on board: follow the green route",noDest:"The passenger changed their mind",needClutch:"Press the clutch (X) to change gear",stalled:"Stalled: press the clutch fully to restart",limit:"Limit",total:"Total",wrongWay:"WRONG WAY",slowDown:"SLOW DOWN",ctlTitle:"Controls",ctlDrive:"ZR accelerate \xB7 ZL brake / reverse \xB7 stick or D-pad steer \xB7 B handbrake",mapT:"City map",mapHelp:"\u25C0 \u25B2 \u25BC \u25B6 move \xB7 OK zoom \xB7 Back close   (controller: stick move \xB7 R / L zoom \xB7 Y your taxi \xB7 \u2212 close)",lgTaxi:"Your taxi",lgPed:"Waiting for a taxi",lgDest:"Destination",lgFuel:"Fuel station",lgRoute:"GPS route",mapRide:"To {0}: {1} km by road",mapFuel:"To the fuel station {0}: {1} km by road",mapPed:"Nearest person waiting: {0} km by road",mapNone:"Nobody waiting near you yet: drive on",mapStations:"{0} fuel stations",ctlAct:"A pick up / drop off / refuel \xB7 Y camera \xB7 \u25B2 \u25BC speed limiter \xB7 \u2212 city map \xB7 + pause \xB7 Capture (\u25FB) report a bug",ctlGear:"Manual gearbox: R gear up \xB7 L gear down \xB7 X clutch (hold)",ctlRemote:"TV remote: \u25C0 \u25B6 steer \xB7 \u25B2 accelerate \xB7 \u25BC brake \xB7 OK action \xB7 Back pause",rules:"Rules of the road",rulesText:"Respect the speed limit on the sign, stop at red lights, never drive up a one-way street the wrong way and stay off the pavement: the police fine you. Every accident is assessed: when it is your fault you pay the repairs, the other car and a fine.",stats:"Shift so far",earned:"Earned",fines:"Fines",repairs:"Repairs",fuelSpent:"Fuel",km:"km driven",best:"Best fare",fare:"Fare",camSpeed:"Speed camera: {0}",policeSpeed:"Police check: {0}",seenPolice:"Seen by the police",fine_ped:"Accident: you hit a pedestrian",pedHurt:"Injuries (compensation)",passengerHurt:"Your passenger was hurt (compensation)",pickupTo:"Pick up \xB7 to {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Fare, {0} km",car:"Car",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Start over",resetAsk:"Start over with 300 DH, a quarter tank and a clean record?",yes:"Yes, start over",no:"No",resetDone:"A fresh start: 300 DH",level:"Difficulty",lv_easy:"Easy",lv_normal:"Normal",lv_hard:"Hard",lv_real:"Real life",lv_easy_d:"Easy: very short trips, lots of time, quiet streets. Police see you from 30 m, cameras from 20 km/h over. Small fines, at most one every 2 minutes (a warning otherwise). No pavement fines, accidents cost nothing, other costs at 6 %.",lv_normal_d:"Normal: short trips, more time, fewer cars. Police see you from 45 m, cameras from 15 km/h over. Small fines, at most one a minute. No pavement fines, light knocks are free, costs at 10 % (accidents half of that).",lv_hard_d:"Hard: trips get longer as you work. Police see you from 70 m, cameras from 10 km/h over. Fines at 15 %, at most one every 20 s. No pavement fines. Costs at 15 % (accidents half of that).",lv_real_d:"Real life: long trips, tight times, busy streets. Police see you from 90 m, cameras from 5 km/h over. Full Moroccan fines and costs.",arrows:"Route arrows",on:"On",btnTest:"Button test: press any controller button",btnNone:"none yet",btnSeen:"button {0}",turnL:"Turn left",turnR:"Turn right",turnU:"Make a U-turn",arrive:"Destination",inM:"{0} m",rpmU:"x1000 rpm",hudSize:"HUD size",hs_small:"Small",hs_normal:"Normal",hs_large:"Large",hs_xl:"Extra large",bugReport:"Report a bug (screenshot + log)",bugSending:"Sending the bug report\u2026",bugSent:"Bug report saved: {0}",bugFail:"Bug report not sent ({0})",bugOld:"Update My PC to send bug reports",camAhead:"Speed camera",police:"Police",credits:"Streets and buildings \xA9 OpenStreetMap contributors (ODbL). Heights: AWS Terrain Tiles. Models and sounds: Kenney (CC0)."},fr:{tag:"Conduisez dans les vraies rues de Tanger",press:"Appuyez sur OK pour commencer",start:"Commencer le service",settings:"R\xE9glages",help:"Commandes",resume:"Reprendre",quit:"Finir le service",back:"Retour",gearbox:"Bo\xEEte de vitesses",auto:"Automatique",manual:"Manuelle",clutch:"Manuelle + embrayage",limiter:"Limiteur de vitesse",off:"Arr\xEAt",money:"Caisse",rides:"Courses",fuel:"Carburant",paused:"Pause",pickup:"Prendre le client",dropoff:"D\xE9poser le client",refuel:"Faire le plein",stop:"Arr\xEAter le plein",help_:"Appeler le d\xE9pannage",helpWait:"Le d\xE9pannage arrive\u2026",to:"Vers",eta:"Temps restant",late:"En retard",meter:"Compteur",fine_speed:"Amende : exc\xE8s de vitesse",fine_red:"Amende : feu rouge grill\xE9",fine_wrong:"Amende : sens interdit",fine_pave:"Amende : circulation sur le trottoir",rideDone:"Course pay\xE9e",crashYou:"Accident : votre faute",crashThem:"Accident : faute de l'autre conducteur",crashWall:"Accident : choc contre le mur du trottoir",impact:"Choc \xE0 {0} km/h",repairOwn:"R\xE9paration de votre taxi",repairOther:"D\xE9g\xE2ts de l'autre voiture",repairInsured:"R\xE9paration pay\xE9e par l'assurance de l'autre conducteur",fineFault:"Amende : d\xE9faut de ma\xEEtrise",passengerLeft:"Le client est descendu sans payer",helpDone:"D\xE9pannage",helpService:"D\xE9placement",helpFuel:"6 L de gasoil",refuelDone:"Plein fait",litres:"{0} L de gasoil",tip:"Pourboire",bumps:"Chocs pendant la course ({0})",lateBy:"Retard de {0} s",meterKm:"Compteur, {0} km",outOfFuel:"Panne s\xE8che ! Appuyez sur A pour appeler le d\xE9pannage.",lowFuel:"Presque \xE0 sec ! Pause > Aller faire le plein",statsT:"Statistiques",ratedN:"{0} notes",bestRide:"Meilleure course",finesN:"Amendes",crashesN:"Accidents",lastRides:"Derni\xE8res courses",noRides:"Pas encore de course.",stars:"Note du client : {0}",crashFree:"Accident ! En Facile, il ne co\xFBte rien",goFuel:"Aller faire le plein",goFuelOff:"Arr\xEAter le chemin vers la station",fuelGuide:"Suivez les fl\xE8ches vertes jusqu'\xE0 la station la plus proche",fuelGuideOff:"Guidage vers la station d\xE9sactiv\xE9",fuelNoWay:"Aucun chemin vers une station d'ici",fuelArrived:"Station : arr\xEAtez-vous \xE0 la pompe, puis appuyez sur A",toFuel:"Vers {0}",fuelStation:"Station-service",fuelOrange:"R\xE9serve basse (moins de 10 L) : Pause > Aller faire le plein",fuelWarn:"R\xE9serve basse \xB7 Pause (+) > Aller faire le plein",fuelWarnRed:"Presque vide ! Pause (+) > Aller faire le plein",helpComing:"Le d\xE9pannage arrive",policeWarn:"Avertissement de la police : pas d'amende cette fois",boarded:"Client \xE0 bord : suivez l'itin\xE9raire vert",noDest:"Le client a chang\xE9 d'avis",needClutch:"Appuyez sur l'embrayage (X) pour changer de vitesse",stalled:"Cal\xE9 : appuyez \xE0 fond sur l'embrayage pour red\xE9marrer",limit:"Limite",total:"Total",wrongWay:"SENS INTERDIT",slowDown:"RALENTISSEZ",ctlTitle:"Commandes",ctlDrive:"ZR acc\xE9l\xE9rer \xB7 ZL freiner / reculer \xB7 stick ou croix diriger \xB7 B frein \xE0 main",mapT:"Plan de la ville",mapHelp:"\u25C0 \u25B2 \u25BC \u25B6 d\xE9placer \xB7 OK zoom \xB7 Retour fermer   (manette : stick d\xE9placer \xB7 R / L zoom \xB7 Y votre taxi \xB7 \u2212 fermer)",lgTaxi:"Votre taxi",lgPed:"Attend un taxi",lgDest:"Destination",lgFuel:"Station-service",lgRoute:"Itin\xE9raire GPS",mapRide:"Vers {0} : {1} km par la route",mapFuel:"Vers la station {0} : {1} km par la route",mapPed:"Client le plus proche : {0} km par la route",mapNone:"Personne n'attend pr\xE8s de vous : continuez",mapStations:"{0} stations-service",ctlAct:"A prendre / d\xE9poser / plein \xB7 Y cam\xE9ra \xB7 \u25B2 \u25BC limiteur \xB7 \u2212 plan de la ville \xB7 + pause \xB7 Capture (\u25FB) signaler un bug",ctlGear:"Bo\xEEte manuelle : R monter \xB7 L descendre \xB7 X embrayage (maintenir)",ctlRemote:"T\xE9l\xE9commande : \u25C0 \u25B6 diriger \xB7 \u25B2 acc\xE9l\xE9rer \xB7 \u25BC freiner \xB7 OK action \xB7 Retour pause",rules:"Code de la route",rulesText:"Respectez la limite du panneau, arr\xEAtez-vous au feu rouge, ne prenez jamais un sens interdit et ne roulez pas sur le trottoir : la police verbalise. Chaque accident est expertis\xE9 : si c'est votre faute, vous payez les r\xE9parations, l'autre voiture et une amende.",stats:"Service en cours",earned:"Gagn\xE9",fines:"Amendes",repairs:"R\xE9parations",fuelSpent:"Carburant",km:"km parcourus",best:"Meilleure course",fare:"Course",camSpeed:"Radar : {0}",policeSpeed:"Contr\xF4le de police : {0}",seenPolice:"Vu par la police",fine_ped:"Accident : vous avez renvers\xE9 un pi\xE9ton",pedHurt:"Blessures (indemnisation)",passengerHurt:"Votre client a \xE9t\xE9 bless\xE9 (indemnisation)",pickupTo:"Prendre \xB7 vers {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Course, {0} km",car:"Voiture",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Recommencer",resetAsk:"Recommencer avec 300 DH, un quart de r\xE9servoir et un dossier vierge ?",yes:"Oui, recommencer",no:"Non",resetDone:"Nouveau d\xE9part : 300 DH",level:"Difficult\xE9",lv_easy:"Facile",lv_normal:"Normal",lv_hard:"Difficile",lv_real:"Vie r\xE9elle",lv_easy_d:"Facile : courses tr\xE8s courtes, beaucoup de temps, rues calmes. La police vous voit \xE0 30 m, les radars d\xE8s 20 km/h de trop. Petites amendes, au plus une toutes les 2 minutes (sinon un avertissement). Pas d'amende sur le trottoir, les accidents ne co\xFBtent rien, autres frais \xE0 6 %.",lv_normal_d:"Normal : courses courtes, plus de temps, moins de voitures. La police vous voit \xE0 45 m, les radars d\xE8s 15 km/h de trop. Petites amendes, au plus une par minute. Pas d'amende sur le trottoir, petits chocs gratuits, frais \xE0 10 % (accidents moiti\xE9 moins).",lv_hard_d:"Difficile : les courses s'allongent au fil du travail. La police vous voit \xE0 70 m, les radars d\xE8s 10 km/h de trop. Amendes \xE0 15 %, au plus une toutes les 20 s. Pas d'amende sur le trottoir. Frais \xE0 15 % (accidents moiti\xE9 moins).",lv_real_d:"Vie r\xE9elle : longues courses, temps serr\xE9, rues charg\xE9es. La police vous voit \xE0 90 m, les radars d\xE8s 5 km/h de trop. Amendes et frais marocains complets.",arrows:"Fl\xE8ches de l'itin\xE9raire",on:"Marche",btnTest:"Test des boutons : appuyez sur un bouton de la manette",btnNone:"aucun pour l'instant",btnSeen:"bouton {0}",turnL:"Tournez \xE0 gauche",turnR:"Tournez \xE0 droite",turnU:"Faites demi-tour",arrive:"Destination",inM:"{0} m",rpmU:"x1000 tr/min",hudSize:"Taille de l'affichage",hs_small:"Petite",hs_normal:"Normale",hs_large:"Grande",hs_xl:"Tr\xE8s grande",bugReport:"Signaler un bug (capture + journal)",bugSending:"Envoi du rapport de bug\u2026",bugSent:"Rapport de bug enregistr\xE9 : {0}",bugFail:"Rapport de bug non envoy\xE9 ({0})",bugOld:"Mettez My PC \xE0 jour pour envoyer des rapports de bug",camAhead:"Radar",police:"Police",credits:"Rues et b\xE2timents \xA9 contributeurs OpenStreetMap (ODbL). Relief : AWS Terrain Tiles. Mod\xE8les et sons : Kenney (CC0)."},es:{tag:"Conduce por las calles reales de T\xE1nger",press:"Pulsa OK para empezar",start:"Empezar el turno",settings:"Ajustes",help:"Controles",resume:"Seguir",quit:"Terminar el turno",back:"Volver",gearbox:"Caja de cambios",auto:"Autom\xE1tica",manual:"Manual",clutch:"Manual + embrague",limiter:"Limitador de velocidad",off:"No",money:"Caja",rides:"Carreras",fuel:"Combustible",paused:"Pausa",pickup:"Recoger al pasajero",dropoff:"Dejar al pasajero",refuel:"Repostar",stop:"Dejar de repostar",help_:"Llamar a la gr\xFAa",helpWait:"La ayuda est\xE1 en camino\u2026",to:"Hacia",eta:"Tiempo",late:"Tarde",meter:"Tax\xEDmetro",fine_speed:"Multa: exceso de velocidad",fine_red:"Multa: sem\xE1foro en rojo",fine_wrong:"Multa: sentido contrario",fine_pave:"Multa: circular por la acera",rideDone:"Carrera pagada",crashYou:"Accidente: culpa tuya",crashThem:"Accidente: culpa del otro conductor",crashWall:"Accidente: golpe contra el muro",impact:"Choque a {0} km/h",repairOwn:"Reparaci\xF3n de tu taxi",repairOther:"Da\xF1os del otro coche",repairInsured:"Reparaci\xF3n pagada por el seguro del otro conductor",fineFault:"Multa: p\xE9rdida de control",passengerLeft:"El pasajero se baj\xF3 sin pagar",helpDone:"Asistencia en carretera",helpService:"Desplazamiento",helpFuel:"6 L de gas\xF3leo",refuelDone:"Dep\xF3sito lleno",litres:"{0} L de gas\xF3leo",tip:"Propina",bumps:"Golpes en el viaje ({0})",lateBy:"{0} s de retraso",meterKm:"Tax\xEDmetro, {0} km",outOfFuel:"\xA1Sin combustible! Pulsa A para llamar a la asistencia.",lowFuel:"\xA1Casi sin combustible! Pausa > Ir a repostar",statsT:"Estad\xEDsticas",ratedN:"{0} valoraciones",bestRide:"Mejor viaje",finesN:"Multas",crashesN:"Accidentes",lastRides:"\xDAltimos viajes",noRides:"A\xFAn no hay viajes.",stars:"Valoraci\xF3n del pasajero: {0}",crashFree:"\xA1Accidente! En F\xE1cil no cuesta nada",goFuel:"Ir a repostar",goFuelOff:"Parar el camino a la gasolinera",fuelGuide:"Sigue las flechas verdes hasta la gasolinera m\xE1s cercana",fuelGuideOff:"Gu\xEDa a la gasolinera desactivada",fuelNoWay:"No hay camino a una gasolinera desde aqu\xED",fuelArrived:"Gasolinera: para junto al surtidor y pulsa A",toFuel:"Hacia {0}",fuelStation:"Gasolinera",fuelOrange:"Combustible bajo (menos de 10 L): Pausa > Ir a repostar",fuelWarn:"Combustible bajo \xB7 Pausa (+) > Ir a repostar",fuelWarnRed:"\xA1Casi vac\xEDo! Pausa (+) > Ir a repostar",helpComing:"La ayuda viene",policeWarn:"Aviso de la polic\xEDa: esta vez sin multa",boarded:"Pasajero a bordo: sigue la ruta verde",noDest:"El pasajero cambi\xF3 de idea",needClutch:"Pisa el embrague (X) para cambiar de marcha",stalled:"Calado: pisa el embrague a fondo para arrancar",limit:"L\xEDmite",total:"Total",wrongWay:"SENTIDO CONTRARIO",slowDown:"FRENA",ctlTitle:"Controles",ctlDrive:"ZR acelerar \xB7 ZL frenar / marcha atr\xE1s \xB7 stick o cruceta girar \xB7 B freno de mano",mapT:"Plano de la ciudad",mapHelp:"\u25C0 \u25B2 \u25BC \u25B6 mover \xB7 OK zoom \xB7 Atr\xE1s cerrar   (mando: stick mover \xB7 R / L zoom \xB7 Y tu taxi \xB7 \u2212 cerrar)",lgTaxi:"Tu taxi",lgPed:"Espera un taxi",lgDest:"Destino",lgFuel:"Gasolinera",lgRoute:"Ruta GPS",mapRide:"Hacia {0}: {1} km por carretera",mapFuel:"Hacia la gasolinera {0}: {1} km por carretera",mapPed:"Pasajero m\xE1s cercano: {0} km por carretera",mapNone:"Nadie espera cerca: sigue conduciendo",mapStations:"{0} gasolineras",ctlAct:"A recoger / dejar / repostar \xB7 Y c\xE1mara \xB7 \u25B2 \u25BC limitador \xB7 \u2212 plano de la ciudad \xB7 + pausa \xB7 Captura (\u25FB) informar de un fallo",ctlGear:"Cambio manual: R subir \xB7 L bajar \xB7 X embrague (mantener)",ctlRemote:"Mando de la tele: \u25C0 \u25B6 girar \xB7 \u25B2 acelerar \xB7 \u25BC frenar \xB7 OK acci\xF3n \xB7 Atr\xE1s pausa",rules:"Normas de tr\xE1fico",rulesText:"Respeta el l\xEDmite de la se\xF1al, para en rojo, nunca entres en direcci\xF3n prohibida y no circules por la acera: la polic\xEDa multa. Cada accidente se peritan: si es culpa tuya pagas las reparaciones, el otro coche y una multa.",stats:"Turno actual",earned:"Ganado",fines:"Multas",repairs:"Reparaciones",fuelSpent:"Combustible",km:"km recorridos",best:"Mejor carrera",fare:"Tarifa",camSpeed:"Radar: {0}",policeSpeed:"Control policial: {0}",seenPolice:"Visto por la polic\xEDa",fine_ped:"Accidente: atropellaste a un peat\xF3n",pedHurt:"Heridas (indemnizaci\xF3n)",passengerHurt:"Tu pasajero result\xF3 herido (indemnizaci\xF3n)",pickupTo:"Recoger \xB7 a {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Carrera, {0} km",car:"Coche",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Empezar de nuevo",resetAsk:"\xBFEmpezar de nuevo con 300 DH, un cuarto de dep\xF3sito y el historial limpio?",yes:"S\xED, empezar de nuevo",no:"No",resetDone:"Nuevo comienzo: 300 DH",level:"Dificultad",lv_easy:"F\xE1cil",lv_normal:"Normal",lv_hard:"Dif\xEDcil",lv_real:"Vida real",lv_easy_d:"F\xE1cil: viajes muy cortos, mucho tiempo, calles tranquilas. La polic\xEDa te ve a 30 m, los radares desde 20 km/h de m\xE1s. Multas peque\xF1as, como mucho una cada 2 minutos (si no, un aviso). Sin multas por la acera, los accidentes no cuestan nada, otros gastos al 6 %.",lv_normal_d:"Normal: viajes cortos, m\xE1s tiempo, menos coches. La polic\xEDa te ve a 45 m, los radares desde 15 km/h de m\xE1s. Multas peque\xF1as, como mucho una por minuto. Sin multas por la acera, golpes leves gratis, gastos al 10 % (accidentes la mitad).",lv_hard_d:"Dif\xEDcil: los viajes se alargan a medida que trabajas. La polic\xEDa te ve a 70 m, los radares desde 10 km/h de m\xE1s. Multas al 15 %, como mucho una cada 20 s. Sin multas por la acera. Gastos al 15 % (accidentes la mitad).",lv_real_d:"Vida real: viajes largos, tiempo justo, calles llenas. La polic\xEDa te ve a 90 m, los radares desde 5 km/h de m\xE1s. Multas y gastos marroqu\xEDes completos.",arrows:"Flechas de la ruta",on:"S\xED",btnTest:"Prueba de botones: pulsa cualquier bot\xF3n del mando",btnNone:"ninguno a\xFAn",btnSeen:"bot\xF3n {0}",turnL:"Gira a la izquierda",turnR:"Gira a la derecha",turnU:"Da la vuelta",arrive:"Destino",inM:"{0} m",rpmU:"x1000 rpm",hudSize:"Tama\xF1o del indicador",hs_small:"Peque\xF1o",hs_normal:"Normal",hs_large:"Grande",hs_xl:"Muy grande",bugReport:"Informar de un fallo (captura + registro)",bugSending:"Enviando el informe\u2026",bugSent:"Informe de fallo guardado: {0}",bugFail:"Informe no enviado ({0})",bugOld:"Actualiza My PC para enviar informes de fallos",camAhead:"Radar",police:"Polic\xEDa",credits:"Calles y edificios \xA9 colaboradores de OpenStreetMap (ODbL). Relieve: AWS Terrain Tiles. Modelos y sonidos: Kenney (CC0)."},ar:{tag:"\u0642\u064F\u062F \u0641\u064A \u0634\u0648\u0627\u0631\u0639 \u0637\u0646\u062C\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",press:"\u0627\u0636\u063A\u0637 OK \u0644\u0644\u0628\u062F\u0621",start:"\u0627\u0628\u062F\u0623 \u0627\u0644\u0639\u0645\u0644",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",help:"\u0627\u0644\u062A\u062D\u0643\u0645",resume:"\u0645\u062A\u0627\u0628\u0639\u0629",quit:"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0645\u0644",back:"\u0631\u062C\u0648\u0639",gearbox:"\u0639\u0644\u0628\u0629 \u0627\u0644\u0633\u0631\u0639\u0627\u062A",auto:"\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643",manual:"\u064A\u062F\u0648\u064A",clutch:"\u064A\u062F\u0648\u064A + \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636",limiter:"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629",off:"\u0645\u062A\u0648\u0642\u0641",money:"\u0627\u0644\u0635\u0646\u062F\u0648\u0642",rides:"\u0627\u0644\u0631\u062D\u0644\u0627\u062A",fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",pickup:"\u0623\u0631\u0643\u0628 \u0627\u0644\u0632\u0628\u0648\u0646",dropoff:"\u0623\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646",refuel:"\u0627\u0645\u0644\u0623 \u0627\u0644\u062E\u0632\u0627\u0646",stop:"\u0623\u0648\u0642\u0641 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",help_:"\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",helpWait:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642\u2026",to:"\u0625\u0644\u0649",eta:"\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062A\u0628\u0642\u064A",late:"\u0645\u062A\u0623\u062E\u0631",meter:"\u0627\u0644\u0639\u062F\u0627\u062F",fine_speed:"\u0645\u062E\u0627\u0644\u0641\u0629: \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0633\u0631\u0639\u0629",fine_red:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631",fine_wrong:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0645\u0646\u0648\u0639",fine_pave:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0633\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641",rideDone:"\u062F\u064F\u0641\u0639\u062A \u0627\u0644\u0631\u062D\u0644\u0629",crashYou:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0624\u0643",crashThem:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0623 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",crashWall:"\u062D\u0627\u062F\u062B: \u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u062D\u0627\u0641\u0629 \u0627\u0644\u0631\u0635\u064A\u0641",impact:"\u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u0633\u0631\u0639\u0629 {0} \u0643\u0645/\u0633",repairOwn:"\u0625\u0635\u0644\u0627\u062D \u0633\u064A\u0627\u0631\u062A\u0643",repairOther:"\u0623\u0636\u0631\u0627\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649",repairInsured:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0639\u0644\u0649 \u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",fineFault:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0639\u062F\u0645 \u0627\u0644\u062A\u062D\u0643\u0645",passengerLeft:"\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646 \u062F\u0648\u0646 \u0623\u0646 \u064A\u062F\u0641\u0639",helpDone:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642",helpService:"\u0627\u0644\u062A\u0646\u0642\u0644",helpFuel:"6 \u0644\u062A\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",refuelDone:"\u062A\u0645\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",litres:"{0} \u0644\u062A\u0631 \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",tip:"\u0628\u0642\u0634\u064A\u0634",bumps:"\u0635\u062F\u0645\u0627\u062A \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629 ({0})",lateBy:"\u062A\u0623\u062E\u0631 {0} \u062B",meterKm:"\u0627\u0644\u0639\u062F\u0627\u062F\u060C {0} \u0643\u0645",outOfFuel:"\u0646\u0641\u062F \u0627\u0644\u0648\u0642\u0648\u062F! \u0627\u0636\u063A\u0637 A \u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",lowFuel:"\u064A\u0643\u0627\u062F \u0627\u0644\u0648\u0642\u0648\u062F \u064A\u0646\u0641\u062F! \u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A > \u0627\u0630\u0647\u0628 \u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0648\u0642\u0648\u062F",statsT:"\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A",ratedN:"{0} \u062A\u0642\u064A\u064A\u0645",bestRide:"\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0629",finesN:"\u0627\u0644\u063A\u0631\u0627\u0645\u0627\u062A",crashesN:"\u0627\u0644\u062D\u0648\u0627\u062F\u062B",lastRides:"\u0622\u062E\u0631 \u0627\u0644\u0631\u062D\u0644\u0627\u062A",noRides:"\u0644\u0627 \u0631\u062D\u0644\u0627\u062A \u0628\u0639\u062F.",stars:"\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0631\u0627\u0643\u0628: {0}",crashFree:"\u062D\u0627\u062F\u062B! \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0633\u0647\u0644 \u0644\u0627 \u064A\u0643\u0644\u0641 \u0634\u064A\u0626\u0627\u064B",goFuel:"\u0627\u0630\u0647\u0628 \u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0648\u0642\u0648\u062F",goFuelOff:"\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u0637\u0629",fuelGuide:"\u0627\u062A\u0628\u0639 \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u062E\u0636\u0631\u0627\u0621 \u0625\u0644\u0649 \u0623\u0642\u0631\u0628 \u0645\u062D\u0637\u0629 \u0648\u0642\u0648\u062F",fuelGuideOff:"\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u0637\u0629",fuelNoWay:"\u0644\u0627 \u064A\u0648\u062C\u062F \u0637\u0631\u064A\u0642 \u0625\u0644\u0649 \u0645\u062D\u0637\u0629 \u0645\u0646 \u0647\u0646\u0627",fuelArrived:"\u0627\u0644\u0645\u062D\u0637\u0629: \u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0645\u0636\u062E\u0629 \u062B\u0645 \u0627\u0636\u063A\u0637 A",toFuel:"\u0625\u0644\u0649 {0}",fuelStation:"\u0645\u062D\u0637\u0629 \u0648\u0642\u0648\u062F",fuelOrange:"\u0627\u0644\u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636 (\u0623\u0642\u0644 \u0645\u0646 10 \u0644\u062A\u0631): \u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A > \u0627\u0630\u0647\u0628 \u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0648\u0642\u0648\u062F",fuelWarn:"\u0627\u0644\u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636 \xB7 \u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A (+) > \u0627\u0630\u0647\u0628 \u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0648\u0642\u0648\u062F",fuelWarnRed:"\u064A\u0643\u0627\u062F \u064A\u0646\u0641\u062F! \u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A (+) > \u0627\u0630\u0647\u0628 \u0644\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0648\u0642\u0648\u062F",helpComing:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0642\u0627\u062F\u0645\u0629",policeWarn:"\u062A\u062D\u0630\u064A\u0631 \u0645\u0646 \u0627\u0644\u0634\u0631\u0637\u0629: \u0628\u062F\u0648\u0646 \u063A\u0631\u0627\u0645\u0629 \u0647\u0630\u0647 \u0627\u0644\u0645\u0631\u0629",boarded:"\u0627\u0644\u0632\u0628\u0648\u0646 \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0629: \u0627\u062A\u0628\u0639 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0623\u062E\u0636\u0631",noDest:"\u063A\u064A\u0651\u0631 \u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0623\u064A\u0647",needClutch:"\u0627\u0636\u063A\u0637 \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636 (X) \u0644\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0633\u0631\u0639\u0629",stalled:"\u062A\u0648\u0642\u0641 \u0627\u0644\u0645\u062D\u0631\u0643: \u0627\u0636\u063A\u0637 \u0627\u0644\u0642\u0627\u0628\u0636 \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",limit:"\u0627\u0644\u062D\u062F",total:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639",wrongWay:"\u0627\u062A\u062C\u0627\u0647 \u0645\u0645\u0646\u0648\u0639",slowDown:"\u062E\u0641\u0641 \u0627\u0644\u0633\u0631\u0639\u0629",ctlTitle:"\u0627\u0644\u062A\u062D\u0643\u0645",ctlDrive:"ZR \u062A\u0633\u0627\u0631\u0639 \xB7 ZL \u0641\u0631\u0627\u0645\u0644 / \u0631\u062C\u0648\u0639 \xB7 \u0627\u0644\u0639\u0635\u0627 \u0623\u0648 \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0648\u062C\u064A\u0647 \xB7 B \u0641\u0631\u0627\u0645\u0644 \u0627\u0644\u064A\u062F",mapT:"\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0645\u062F\u064A\u0646\u0629",mapHelp:"\u25C0 \u25B2 \u25BC \u25B6 \u062A\u062D\u0631\u064A\u0643 \xB7 OK \u062A\u0643\u0628\u064A\u0631 \xB7 \u0631\u062C\u0648\u0639 \u0625\u063A\u0644\u0627\u0642   (\u0627\u0644\u064A\u062F: \u0627\u0644\u0639\u0635\u0627 \u062A\u062D\u0631\u064A\u0643 \xB7 R / L \u062A\u0643\u0628\u064A\u0631 \u0648\u062A\u0635\u063A\u064A\u0631 \xB7 Y \u0633\u064A\u0627\u0631\u062A\u0643 \xB7 \u2212 \u0625\u063A\u0644\u0627\u0642)",lgTaxi:"\u0633\u064A\u0627\u0631\u062A\u0643",lgPed:"\u064A\u0646\u062A\u0638\u0631 \u0633\u064A\u0627\u0631\u0629 \u0623\u062C\u0631\u0629",lgDest:"\u0627\u0644\u0648\u062C\u0647\u0629",lgFuel:"\u0645\u062D\u0637\u0629 \u0648\u0642\u0648\u062F",lgRoute:"\u0645\u0633\u0627\u0631 GPS",mapRide:"\u0625\u0644\u0649 {0}: {1} \u0643\u0645 \u0639\u0628\u0631 \u0627\u0644\u0637\u0631\u064A\u0642",mapFuel:"\u0625\u0644\u0649 \u0645\u062D\u0637\u0629 {0}: {1} \u0643\u0645 \u0639\u0628\u0631 \u0627\u0644\u0637\u0631\u064A\u0642",mapPed:"\u0623\u0642\u0631\u0628 \u0631\u0627\u0643\u0628 \u064A\u0646\u062A\u0638\u0631: {0} \u0643\u0645 \u0639\u0628\u0631 \u0627\u0644\u0637\u0631\u064A\u0642",mapNone:"\u0644\u0627 \u0623\u062D\u062F \u064A\u0646\u062A\u0638\u0631 \u0642\u0631\u0628\u0643 \u0628\u0639\u062F: \u062A\u0627\u0628\u0639 \u0627\u0644\u0633\u064A\u0631",mapStations:"{0} \u0645\u062D\u0637\u0629 \u0648\u0642\u0648\u062F",ctlAct:"A \u0625\u0631\u0643\u0627\u0628 / \u0625\u0646\u0632\u0627\u0644 / \u062A\u0639\u0628\u0626\u0629 \xB7 Y \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \xB7 \u25B2 \u25BC \u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 \u2212 \u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \xB7 + \u0625\u064A\u0642\u0627\u0641 \xB7 \u0632\u0631 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 (\u25FB) \u0644\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u062E\u0644\u0644",ctlGear:"\u0639\u0644\u0628\u0629 \u064A\u062F\u0648\u064A\u0629: R \u0631\u0641\u0639 \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 L \u062E\u0641\u0636\u0647\u0627 \xB7 X \u0627\u0644\u0642\u0627\u0628\u0636 (\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B)",ctlRemote:"\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u062D\u0643\u0645: \u25C0 \u25B6 \u062A\u0648\u062C\u064A\u0647 \xB7 \u25B2 \u062A\u0633\u0627\u0631\u0639 \xB7 \u25BC \u0641\u0631\u0627\u0645\u0644 \xB7 OK \u0625\u062C\u0631\u0627\u0621 \xB7 \u0631\u062C\u0648\u0639 \u0625\u064A\u0642\u0627\u0641",rules:"\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0633\u064A\u0631",rulesText:"\u0627\u062D\u062A\u0631\u0645 \u062D\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0644\u0648\u062D\u0629\u060C \u0648\u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631\u060C \u0648\u0644\u0627 \u062A\u062F\u062E\u0644 \u0634\u0627\u0631\u0639\u0627\u064B \u0645\u0645\u0646\u0648\u0639\u0627\u064B\u060C \u0648\u0644\u0627 \u062A\u0633\u0650\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641: \u0627\u0644\u0634\u0631\u0637\u0629 \u062A\u062D\u0631\u0631 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A. \u0643\u0644 \u062D\u0627\u062F\u062B \u064A\u064F\u0642\u064A\u064E\u0651\u0645: \u0625\u0630\u0627 \u0643\u0627\u0646 \u062E\u0637\u0623\u0643 \u062A\u062F\u0641\u0639 \u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 \u0648\u0645\u062E\u0627\u0644\u0641\u0629.",stats:"\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u0639\u0645\u0644",earned:"\u0627\u0644\u0645\u062F\u0627\u062E\u064A\u0644",fines:"\u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A",repairs:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D\u0627\u062A",fuelSpent:"\u0627\u0644\u0648\u0642\u0648\u062F",km:"\u0643\u0645 \u0645\u0642\u0637\u0648\u0639\u0629",best:"\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0629",fare:"\u0627\u0644\u0623\u062C\u0631\u0629",camSpeed:"\u0631\u0627\u062F\u0627\u0631: {0}",policeSpeed:"\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0634\u0631\u0637\u0629: {0}",seenPolice:"\u0631\u0635\u062F\u062A\u0643 \u0627\u0644\u0634\u0631\u0637\u0629",fine_ped:"\u062D\u0627\u062F\u062B\u0629: \u0635\u062F\u0645\u062A \u0631\u0627\u062C\u0644\u0627\u064B",pedHurt:"\u0625\u0635\u0627\u0628\u0627\u062A (\u062A\u0639\u0648\u064A\u0636)",passengerHurt:"\u0623\u0635\u064A\u0628 \u0632\u0628\u0648\u0646\u0643 (\u062A\u0639\u0648\u064A\u0636)",pickupTo:"\u0623\u0631\u0643\u0628 \xB7 \u0625\u0644\u0649 {0} \xB7 {1} \u0643\u0644\u0645 \xB7 {2} \u062F\u0631\u0647\u0645",fareKm:"\u0627\u0644\u0623\u062C\u0631\u0629\u060C {0} \u0643\u0644\u0645",car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",car_taxi:"\u0637\u0627\u0643\u0633\u064A \u0635\u063A\u064A\u0631",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"\u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",resetAsk:"\u0627\u0644\u0628\u062F\u0621 \u0645\u0646 \u062C\u062F\u064A\u062F \u0628\u0640 300 \u062F\u0631\u0647\u0645 \u0648\u0631\u0628\u0639 \u062E\u0632\u0627\u0646 \u0648\u0633\u062C\u0644 \u0646\u0638\u064A\u0641\u061F",yes:"\u0646\u0639\u0645\u060C \u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",no:"\u0644\u0627",resetDone:"\u0628\u062F\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629: 300 \u062F\u0631\u0647\u0645",level:"\u0627\u0644\u0635\u0639\u0648\u0628\u0629",lv_easy:"\u0633\u0647\u0644",lv_normal:"\u0639\u0627\u062F\u064A",lv_hard:"\u0635\u0639\u0628",lv_real:"\u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",lv_easy_d:"\u0633\u0647\u0644: \u0631\u062D\u0644\u0627\u062A \u0642\u0635\u064A\u0631\u0629 \u062C\u062F\u0627\u064B\u060C \u0648\u0642\u062A \u0643\u062B\u064A\u0631\u060C \u0634\u0648\u0627\u0631\u0639 \u0647\u0627\u062F\u0626\u0629. \u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0631\u0637\u0629 \u0645\u0646 30 \u0645\u060C \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0645\u0646 20 \u0643\u0644\u0645/\u0633 \u0632\u064A\u0627\u062F\u0629. \u063A\u0631\u0627\u0645\u0627\u062A \u0635\u063A\u064A\u0631\u0629\u060C \u0648\u0627\u062D\u062F\u0629 \u0643\u0644 \u062F\u0642\u064A\u0642\u062A\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0643\u062B\u0631 (\u0648\u0625\u0644\u0627 \u062A\u062D\u0630\u064A\u0631). \u0644\u0627 \u063A\u0631\u0627\u0645\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641\u060C \u0648\u0627\u0644\u062D\u0648\u0627\u062F\u062B \u0645\u062C\u0627\u0646\u064A\u0629\u060C \u0648\u0628\u0627\u0642\u064A \u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0628\u0646\u0633\u0628\u0629 6 %.",lv_normal_d:"\u0639\u0627\u062F\u064A: \u0631\u062D\u0644\u0627\u062A \u0642\u0635\u064A\u0631\u0629\u060C \u0648\u0642\u062A \u0623\u0637\u0648\u0644\u060C \u0633\u064A\u0627\u0631\u0627\u062A \u0623\u0642\u0644. \u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0631\u0637\u0629 \u0645\u0646 45 \u0645\u060C \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0645\u0646 15 \u0643\u0644\u0645/\u0633 \u0632\u064A\u0627\u062F\u0629. \u063A\u0631\u0627\u0645\u0627\u062A \u0635\u063A\u064A\u0631\u0629\u060C \u0648\u0627\u062D\u062F\u0629 \u0641\u064A \u0627\u0644\u062F\u0642\u064A\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0643\u062B\u0631. \u0644\u0627 \u063A\u0631\u0627\u0645\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641\u060C \u0648\u0627\u0644\u0627\u0635\u0637\u062F\u0627\u0645\u0627\u062A \u0627\u0644\u062E\u0641\u064A\u0641\u0629 \u0645\u062C\u0627\u0646\u064A\u0629\u060C \u0648\u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0628\u0646\u0633\u0628\u0629 10 % (\u0627\u0644\u062D\u0648\u0627\u062F\u062B \u0646\u0635\u0641 \u0630\u0644\u0643).",lv_hard_d:"\u0635\u0639\u0628: \u062A\u0637\u0648\u0644 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0643\u0644\u0645\u0627 \u0639\u0645\u0644\u062A \u0623\u0643\u062B\u0631. \u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0631\u0637\u0629 \u0645\u0646 70 \u0645\u060C \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0645\u0646 10 \u0643\u0644\u0645/\u0633 \u0632\u064A\u0627\u062F\u0629. \u063A\u0631\u0627\u0645\u0627\u062A \u0628\u0646\u0633\u0628\u0629 15 %\u060C \u0648\u0627\u062D\u062F\u0629 \u0643\u0644 20 \u062B \u0639\u0644\u0649 \u0627\u0644\u0623\u0643\u062B\u0631. \u0644\u0627 \u063A\u0631\u0627\u0645\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641. \u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0628\u0646\u0633\u0628\u0629 15 % (\u0627\u0644\u062D\u0648\u0627\u062F\u062B \u0646\u0635\u0641 \u0630\u0644\u0643).",lv_real_d:"\u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629: \u0631\u062D\u0644\u0627\u062A \u0637\u0648\u064A\u0644\u0629\u060C \u0648\u0642\u062A \u0636\u064A\u0642\u060C \u0634\u0648\u0627\u0631\u0639 \u0645\u0632\u062F\u062D\u0645\u0629. \u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0631\u0637\u0629 \u0645\u0646 90 \u0645\u060C \u0648\u0627\u0644\u0631\u0627\u062F\u0627\u0631\u0627\u062A \u0645\u0646 5 \u0643\u0644\u0645/\u0633 \u0632\u064A\u0627\u062F\u0629. \u0627\u0644\u063A\u0631\u0627\u0645\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0627\u0644\u0645\u063A\u0631\u0628\u064A\u0629 \u0643\u0627\u0645\u0644\u0629.",arrows:"\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u0633\u0627\u0631",on:"\u0645\u0641\u0639\u0651\u0644",btnTest:"\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0623\u0632\u0631\u0627\u0631: \u0627\u0636\u063A\u0637 \u0623\u064A \u0632\u0631 \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",btnNone:"\u0644\u0627 \u0634\u064A\u0621 \u0628\u0639\u062F",btnSeen:"\u0627\u0644\u0632\u0631 {0}",turnL:"\u0627\u0646\u0639\u0637\u0641 \u064A\u0633\u0627\u0631\u0627\u064B",turnR:"\u0627\u0646\u0639\u0637\u0641 \u064A\u0645\u064A\u0646\u0627\u064B",turnU:"\u0627\u0633\u062A\u062F\u0631 \u0644\u0644\u062E\u0644\u0641",arrive:"\u0627\u0644\u0648\u062C\u0647\u0629",inM:"{0} \u0645",rpmU:"x1000 \u062F/\u062F",hudSize:"\u062D\u062C\u0645 \u0627\u0644\u0648\u0627\u062C\u0647\u0629",hs_small:"\u0635\u063A\u064A\u0631",hs_normal:"\u0639\u0627\u062F\u064A",hs_large:"\u0643\u0628\u064A\u0631",hs_xl:"\u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B",bugReport:"\u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u062E\u0644\u0644 (\u0635\u0648\u0631\u0629 + \u0633\u062C\u0644)",bugSending:"\u062C\u0627\u0631\u064D \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0642\u0631\u064A\u0631\u2026",bugSent:"\u062D\u064F\u0641\u0638 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062E\u0644\u0644: {0}",bugFail:"\u0644\u0645 \u064A\u064F\u0631\u0633\u0644 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ({0})",bugOld:"\u062D\u062F\u0651\u062B My PC \u0644\u0625\u0631\u0633\u0627\u0644 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0623\u062E\u0637\u0627\u0621",camAhead:"\u0631\u0627\u062F\u0627\u0631",police:"\u0627\u0644\u0634\u0631\u0637\u0629",credits:"\u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064A \xA9 \u0645\u0633\u0627\u0647\u0645\u0648 OpenStreetMap (ODbL). \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633: AWS Terrain Tiles. \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A: Kenney (CC0)."}},ht={lang:"en",set(s){this.lang=Ha[s]?s:"en",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"},t(s,...t){let e=Ha[this.lang]&&Ha[this.lang][s]||Ha.en[s]||s;return t.forEach((n,i)=>{e=e.replace("{"+i+"}",n)}),e},line(s){let t=s.indexOf(":");return t<0?this.t(s):this.t(s.slice(0,t),s.slice(t+1))}};var Lc=[1,2,4,8],xn={bg:"#121b26",sea:"#0c2740",big:"#e8c35a",mid:"#c9d2dc",small:"#5d6b7b",route:"#2cff8f",fuel:"#ff3b30",ped:"#22e568",dest:"#ffd23f",taxi:"#21c8ef"};function Dc(s,t,e){let n=s.net,i=t.route.edges,r=s.qp.edge===(i[0]&&i[0][0])?s.qp.s:-1,a=0;for(let o=0;o<i.length;o++){let l=i[o][0],c=i[o][1],h=n.eOff[l],u=n.eN[l];for(let f=0;f<u;f++){let d=h+(c>0?f:u-1-f),p=n.sS[d];if(!(o===0&&r>=0&&(c>0?p<r:p>r))){if(o===i.length-1&&l===t.e&&(c>0?p>t.s:p<t.s))break;if(e(n.px[d],n.pz[d]),++a>6e3)return}}}e(t.x,t.z)}var Va=class{constructor(t,e){this.S=t,this.c=e,this.x=e.getContext("2d");let n=t.net,i=n.box,r=t.me.veh;if(this.W=e.width,this.H=e.height,this.fit=Math.max((i.x1-i.x0)/this.W,(i.z1-i.z0)/this.H)*1.02,this.z=0,this.cx=(i.x0+i.x1)/2,this.cz=(i.z0+i.z1)/2,this.pan={x:0,z:0},!n._ebox){let o=n._ebox=new Float32Array(n.ne*4);for(let l=0;l<n.ne;l++){let c=1e9,h=-1e9,u=1e9,f=-1e9;for(let d=0,p=n.eOff[l];d<n.eN[l];d++){let x=n.px[p+d],g=n.pz[p+d];x<c&&(c=x),x>h&&(h=x),g<u&&(u=g),g>f&&(f=g)}o[l*4]=c,o[l*4+1]=h,o[l*4+2]=u,o[l*4+3]=f}}let a=t.taxi;if(this.R=a.fuelGo&&a.fuelGo.route?a.fuelGo:a.ride&&a.ride.ped.state==="in"&&a.ride.route?a.ride:null,this.kind=this.R?this.R===a.fuelGo?"fuel":"ride":"",!this.R&&t.qp.edge>=0){let o=null,l=1e9;for(let c of a.peds){if(c.state!=="wait")continue;let h=Math.hypot(c.x-r.px,c.z-r.pz);h<l&&(l=h,o=c)}if(o){let c=n.route(t.qp.edge,t.qp.s,r.R[6]*t.qp.fx+r.R[8]*t.qp.fz>=0?1:-1,o.e,o.s);c&&(this.R={e:o.e,s:o.s,x:o.x,z:o.z,route:c,name:""},this.kind="ped")}}this.dirty=!0}get mpp(){return this.fit/Lc[this.z]}zoom(t){let e=this.S.me.veh;if(t>0&&this.z===Lc.length-1){this.z=0;let n=this.S.net.box;this.cx=(n.x0+n.x1)/2,this.cz=(n.z0+n.z1)/2}else{let n=this.z;this.z=Math.max(0,Math.min(Lc.length-1,this.z+t)),n===0&&this.z>0&&(this.cx=e.px,this.cz=e.pz)}this.clamp(),this.dirty=!0}centre(){let t=this.S.me.veh;this.z||(this.z=2),this.cx=t.px,this.cz=t.pz,this.clamp(),this.dirty=!0}move(t,e){this.cx+=t*this.W*this.mpp*.18,this.cz+=e*this.H*this.mpp*.18,this.clamp(),this.dirty=!0}clamp(){let t=this.S.net.box,e=this.W*this.mpp/2,n=this.H*this.mpp/2;this.cx=e*2>=t.x1-t.x0?(t.x0+t.x1)/2:Math.max(t.x0+e,Math.min(t.x1-e,this.cx)),this.cz=n*2>=t.z1-t.z0?(t.z0+t.z1)/2:Math.max(t.z0+n,Math.min(t.z1-n,this.cz))}tick(t,e,n){Math.abs(e)<.2&&Math.abs(n)<.2||(this.cx+=e*t*this.W*this.mpp*.8,this.cz+=n*t*this.H*this.mpp*.8,this.clamp(),this.dirty=!0)}draw(t){if(!this.dirty)return!1;this.dirty=!1;let e=this.S,n=e.net,i=n.box,r=this.x,a=this.W,o=this.H,l=this.mpp,c=e.taxi,h=e.me.veh,u=this.cx-a*l/2,f=this.cz-o*l/2,d=y=>(y-u)/l,p=y=>(y-f)/l;if(r.fillStyle=xn.bg,r.fillRect(0,0,a,o),l>=3.5&&t){let y=5/l;r.imageSmoothingEnabled=!0,r.drawImage(t,d(i.x0),p(i.z0),t.width*y,t.height*y)}else{let y=n.g;r.fillStyle=xn.sea;let v=1,T=y.c;for(let b=0;b<y.nz;b+=v){let _=p(y.z0+b*T);if(!(_<-T/l||_>o+T/l))for(let C=0;C<y.nx;C+=v){if(y.h[b*y.nx+C]>=-20)continue;let z=d(y.x0+C*T);z<-T/l||z>a+T/l||r.fillRect(z-T/l/2,_-T/l/2,T/l+1,T/l+1)}}let w=n._ebox,A=u+a*l,S=f+o*l;r.lineCap="round",r.lineJoin="round";for(let b of[0,1])for(let _=0;_<n.ne;_++){let C=n.eCls[_];if(b===0==C>=4&&!(w[_*4+1]<u||w[_*4]>A||w[_*4+3]<f||w[_*4+2]>S)){r.strokeStyle=C<=1?xn.big:C<=3?xn.mid:xn.small,r.lineWidth=Math.max(1.3,n.eHw[_]*1.6/l),r.beginPath();for(let z=0,D=n.eOff[_];z<n.eN[_];z++){let k=d(n.px[D+z]),P=p(n.pz[D+z]);z?r.lineTo(k,P):r.moveTo(k,P)}r.stroke()}}}let x=Math.max(1,Math.min(1.6,3/l));if(this.R){r.save(),r.strokeStyle="#0b3d22",r.lineWidth=9*x,r.lineCap="round",r.lineJoin="round";let y=()=>{r.beginPath(),r.moveTo(d(h.px),p(h.pz)),Dc(e,this.R,(v,T)=>r.lineTo(d(v),p(T)))};y(),r.stroke(),r.strokeStyle=xn.route,r.lineWidth=5*x,this.kind==="ped"&&r.setLineDash([12,9]),y(),r.stroke(),r.restore()}for(let y of n.stations){let v=n.eOff[y.e]+y.k,T=d(n.px[v]),w=p(n.pz[v]);if(T<-20||T>a+20||w<-20||w>o+20)continue;let A=9*x;r.fillStyle="#fff",r.beginPath(),r.arc(T,w,A+2,0,7),r.fill(),r.fillStyle=xn.fuel,r.beginPath(),r.arc(T,w,A,0,7),r.fill(),r.fillStyle="#fff",r.fillRect(T-A*.42,w-A*.5,A*.55,A*1),r.fillRect(T+A*.18,w-A*.3,A*.28,A*.14),r.fillRect(T+A*.34,w-A*.3,A*.14,A*.6),r.fillStyle=xn.fuel,r.fillRect(T-A*.3,w-A*.38,A*.31,A*.28)}for(let y of c.peds){if(y.state!=="wait")continue;let v=d(y.x),T=p(y.z),w=7*x;r.fillStyle="#06331b",r.beginPath(),r.arc(v,T,w+2,0,7),r.fill(),r.fillStyle=xn.ped,r.beginPath(),r.arc(v,T-w*.35,w*.38,0,7),r.fill(),r.beginPath(),r.moveTo(v-w*.6,T+w*.7),r.quadraticCurveTo(v,T-w*.2,v+w*.6,T+w*.7),r.closePath(),r.fill()}if(this.R&&this.kind!=="ped"){let y=d(this.R.x),v=p(this.R.z),T=10*x;r.strokeStyle="#111",r.lineWidth=3,r.beginPath(),r.moveTo(y,v),r.lineTo(y,v-T*2.2),r.stroke(),r.fillStyle=xn.dest,r.strokeStyle="#111",r.lineWidth=1.5,r.beginPath(),r.moveTo(y,v-T*2.2),r.lineTo(y+T*1.5,v-T*1.75),r.lineTo(y,v-T*1.3),r.closePath(),r.fill(),r.stroke(),r.beginPath(),r.arc(y,v,4,0,7),r.fill(),r.stroke()}let g=Math.atan2(h.R[6],h.R[8]),m=11*x;r.save(),r.translate(d(h.px),p(h.pz)),r.rotate(Math.PI-g),r.fillStyle=xn.taxi,r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-m),r.lineTo(m*.7,m*.8),r.lineTo(0,m*.35),r.lineTo(-m*.7,m*.8),r.closePath(),r.fill(),r.stroke(),r.restore();let M=[50,100,200,500,1e3,2e3].find(y=>y/l>90)||2e3;return r.fillStyle="rgba(0,0,0,.55)",r.fillRect(a-M/l-34,o-36,M/l+24,26),r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(a-M/l-22,o-18),r.lineTo(a-22,o-18),r.stroke(),r.fillStyle="#fff",r.font="15px sans-serif",r.textAlign="center",r.fillText(M>=1e3?M/1e3+" km":M+" m",a-M/l/2-22,o-22),!0}};var Ga=(s,t)=>s[(s.indexOf(t)+1)%s.length],Bx=["auto","manual","clutch"],Hx=["taxi","city","hatch"],Wa=class{constructor(t,e){this.app=t,this.root=e,this.items=[],this.f=0,this.back=null,this.screen=""}show(t,e,n,i){this.root.innerHTML=t,this.root.style.display="block",this.items=[...this.root.querySelectorAll("[data-f]")],this.acts=e,this.back=n,this.f=Math.min(i||0,this.items.length-1),this.paint()}hide(){this.root.style.display="none",this.root.innerHTML="",this.items=[],this.screen=""}get open(){return this.root.style.display==="block"}paint(){this.items.forEach((e,n)=>e.classList.toggle("focus",n===this.f));let t=this.items[this.f];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})}input(t,e,n){if(!this.open)return!1;if(this.screen==="map")return this.mapInput(t,e,n);if(t==="up"||t==="left")this.f=(this.f+this.items.length-1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="down"||t==="right")this.f=(this.f+1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="confirm"&&!n){let i=this.acts[this.f];this.app.sound.ui("ok"),i&&i()}else if((t==="cancel"||t==="menu")&&!n)if(this.back)this.app.sound.ui("back"),this.back();else return!1;return!0}gearLabel(){return ht.t(this.app.settings.gearbox==="auto"?"auto":this.app.settings.gearbox)}title(t){this.screen="title";let e=this.app.saved&&this.app.saved.stats;this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${ht.t("tag")}</div>
<div class="menu"><div class="btn go" data-f>${ht.t("start")}</div><div class="btn" data-f>${ht.t("settings")}</div><div class="btn" data-f>${ht.t("help")}</div>${e?`<div class="btn" data-f>${ht.t("statsT")}</div><div class="btn" data-f>${ht.t("reset")}</div>`:""}</div>
<div class="mini">${ht.t("car")} <b>${this.carLabel()}</b> \xB7 ${ht.t("gearbox")} <b>${this.gearLabel()}</b> \xB7 ${ht.t("level")} <b>${ht.t("lv_"+this.app.settings.level)}</b></div>
${e?`<div class="mini">${ht.t("money")} <b>${Math.round(this.app.saved.money)} DH</b> \xB7 ${ht.t("rides")} <b>${e.rides}</b> \xB7 ${e.km.toFixed(0)} ${ht.t("km")}</div>`:""}
<div class="foot">${ht.t("credits")}</div></div>`,[()=>this.app.startShift(),()=>this.settings(()=>this.title(1)),()=>this.controls(()=>this.title(2)),()=>this.statsView(this.app.saved.stats,this.app.saved.money,()=>this.title(3)),()=>this.confirmReset(()=>{this.app.resetCareer(),this.title()},()=>this.title(4))],null,t)}carLabel(){return ht.t("car_"+(this.app.settings.car||"taxi"))}settings(t,e){this.screen="settings";let n=this.app.settings,i=this.app.shift,r=i&&i.taxi;e===void 0&&(this.was={car:n.car,level:n.level});let a=(c,h)=>`<div class="btn row" data-f><span>${ht.t(c)}</span><b>${h}</b></div>`,o=[["car",this.carLabel(),()=>{n.car=Ga(Hx,n.car)}],["gearbox",this.gearLabel(),()=>{n.gearbox=Ga(Bx,n.gearbox),i&&this.app.applyGear()}],["level",ht.t("lv_"+n.level),()=>{n.level=Ga(zu,n.level)}],["arrows",ht.t(n.arrows===!1?"off":"on"),()=>{n.arrows=n.arrows===!1,i&&(i.arrows=n.arrows)}],["hudSize",ht.t("hs_"+(n.hud||"normal")),()=>{n.hud=Ga(["small","normal","large","xl"],n.hud||"normal"),this.app.applyHud()}]];r&&o.push(["limiter",r.limiter?r.limiter+" km/h":ht.t("off"),()=>{r.limiter=r.limiter?0:50}]);let l=()=>{let c=this.was&&(this.was.car!==n.car||this.was.level!==n.level);this.was=null,i&&c?this.app.startShift():t()};this.show(`<div class="panel pause"><h2>${ht.t("settings")}</h2><p class="small">${ht.t("lv_"+n.level+"_d")}</p>${o.map(c=>a(c[0],c[1])).join("")}
<div class="btn" data-f>${ht.t("back")}</div></div>`,o.map((c,h)=>()=>{c[2](),this.app.saveSettings(),this.settings(t,h)}).concat([l]),l,e)}confirmReset(t,e){this.show(`<div class="panel pause"><h2>${ht.t("reset")}</h2><p>${ht.t("resetAsk")}</p><div class="btn" data-f>${ht.t("no")}</div><div class="btn" data-f>${ht.t("yes")}</div></div>`,[e,t],e,0)}controls(t){this.screen="controls",this.show(`<div class="panel"><h2>${ht.t("ctlTitle")}</h2><p>${ht.t("ctlDrive")}</p><p>${ht.t("ctlAct")}</p><p>${ht.t("ctlGear")}</p><p>${ht.t("ctlRemote")}</p><p class="btest">${ht.t("btnTest")}: <b>${ht.t("btnNone")}</b></p>
<h3>${ht.t("rules")}</h3><p class="small">${ht.t("rulesText")}</p><div class="btn" data-f>${ht.t("back")}</div></div>`,[t],t)}pause(t){this.screen="pause";let e=this.app.shift.taxi,n=e.stats,i=(r,a)=>`<div class="st"><span>${ht.t(r)}</span><b>${a}</b></div>`;this.show(`<div class="panel pause"><h2>${ht.t("paused")}</h2>${this.app.bugMsg?`<p class="bugmsg">${ht.line(this.app.bugMsg)}</p>`:""}
<div class="stats">${i("money",Math.round(e.money)+" DH")}${i("rides",n.rides)}${i("earned",Math.round(n.earned)+" DH")}${i("fines",Math.round(n.fines)+" DH")}${i("repairs",Math.round(n.repairs)+" DH")}${i("fuelSpent",Math.round(n.fuel)+" DH")}${i("km",n.km.toFixed(1))}${i("level",ht.t("lv_"+this.app.settings.level))}</div>
<div class="btn go" data-f>${ht.t("resume")}</div><div class="btn${e.fuel<pi?" warnbtn":""}" data-f>${ht.t(e.fuelGo?"goFuelOff":"goFuel")}${e.fuelGo?"":" <b>"+Math.round(e.fuel)+" / "+e.tank+" L</b>"}</div><div class="btn" data-f>${ht.t("mapT")}</div><div class="btn" data-f>${ht.t("settings")}</div><div class="btn" data-f>${ht.t("help")}</div><div class="btn" data-f>${ht.t("statsT")}</div><div class="btn" data-f>${ht.t("bugReport")}</div><div class="btn" data-f>${ht.t("reset")}</div><div class="btn" data-f>${ht.t("quit")}</div></div>`,[()=>this.app.resumeShift(),()=>{let r=this.app.shift;e.goFuel(r.me.veh,r.qp),this.app.resumeShift()},()=>this.mapView(()=>this.pause(2)),()=>this.settings(()=>this.pause(3)),()=>this.controls(()=>this.pause(4)),()=>this.statsView(e.stats,e.money,()=>this.pause(5)),()=>this.app.reportBug(),()=>this.confirmReset(()=>this.app.resetCareer(),()=>this.pause(7)),()=>this.app.endShift()],()=>this.app.resumeShift(),t)}mapView(t){this.screen="map";let e=this.app.shift,n=e.taxi,i=e.net,r=(c,h)=>`<span class="lg"><i class="${c}"></i>${ht.t(h)}</span>`;this.show(`<div class="panel bigmap"><h2>${ht.t("mapT")}<span class="small">${ht.t("mapStations",i.stations.length)}</span></h2>
<canvas width="1280" height="640"></canvas><p class="minfo"></p>
<div class="legend">${r("taxi","lgTaxi")}${r("ped","lgPed")}${r("dest","lgDest")}${r("fuel","lgFuel")}${r("route","lgRoute")}</div>
<p class="small">${ht.t("mapHelp")}</p></div>`,[],t,0);let a=this.map=new Va(e,this.root.querySelector("canvas")),o=a.R,l=o?(o.route.len/1e3).toFixed(1):"";this.root.querySelector(".minfo").textContent=a.kind==="ride"?ht.t("mapRide",o.name||"\u2014",l):a.kind==="fuel"?ht.t("mapFuel",o.name||ht.t("fuelStation"),l):a.kind==="ped"?ht.t("mapPed",l):ht.t("mapNone"),n.fuel<pi&&this.root.querySelector(".minfo").classList.add("warn"),a.draw(this.app.hud.base)}mapInput(t,e,n){let i=this.map;return t==="left"?i.move(-1,0):t==="right"?i.move(1,0):t==="up"?i.move(0,-1):t==="down"?i.move(0,1):t==="confirm"&&!n?(i.zoom(1),this.app.sound.ui("move")):(t==="cancel"||t==="menu")&&!n&&(this.app.sound.ui("back"),this.closeMap()),i.draw(this.app.hud.base),!0}closeMap(){this.map=null;let t=this.back;this.screen="",t&&t()}mapTick(t,e){let n=this.map;if(!n)return;let i=e.edge;if(i.map){this.closeMap();return}i.gearUp&&n.zoom(1),i.gearDown&&n.zoom(-1),i.camera&&n.centre(),n.tick(t,e.axis(0),e.axis(1)),n.draw(this.app.hud.base)}statsView(t,e,n){this.screen="stats",t=Object.assign({rides:0,earned:0,fines:0,repairs:0,fuel:0,km:0,best:0,nFines:0,crashes:0,stars:0,rated:0,last:[]},t||{});let i=(l,c)=>`<div class="st"><span>${ht.t(l)}</span><b>${c}</b></div>`,r=t.rated?t.stars/t.rated:0,a=Math.round(r),o=(t.last||[]).slice(0,8).map(l=>`<div class="st ride"><span>${Vx(l[0])||"-"} \xB7 ${l[1]} km</span><b>${l[2]} DH <i class="stars">${"\u2605".repeat(l[3])}${"\u2606".repeat(5-l[3])}</i></b></div>`).join("");this.show(`<div class="panel pause"><h2>${ht.t("statsT")}</h2>
<div class="rating"><span class="stars big">${"\u2605".repeat(a)}${"\u2606".repeat(5-a)}</span> <b>${t.rated?r.toFixed(1):"-"}</b> <span class="small">${ht.t("ratedN",t.rated)}</span></div>
<div class="stats">${i("rides",t.rides)}${i("money",Math.round(e||0)+" DH")}${i("earned",Math.round(t.earned)+" DH")}${i("bestRide",Math.round(t.best)+" DH")}${i("finesN",t.nFines+" \xB7 "+Math.round(t.fines)+" DH")}${i("crashesN",t.crashes)}${i("repairs",Math.round(t.repairs)+" DH")}${i("fuelSpent",Math.round(t.fuel)+" DH")}${i("km",t.km.toFixed(1))}</div>
<h3>${ht.t("lastRides")}</h3><div class="rides">${o||`<p class="small">${ht.t("noRides")}</p>`}</div>
<div class="btn" data-f>${ht.t("back")}</div></div>`,[n],n)}},Vx=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Gx=.75*Math.PI,Wx=1.5*Math.PI,Xa=s=>Gx+Math.max(0,Math.min(1,s))*Wx,ws=(s,t)=>(t||700)+" "+s+"px CP, system-ui, sans-serif",qa=class{constructor(t){this.c=document.createElement("canvas"),this.c.width=640,this.c.height=350,this.c.className="h-gauges",t.appendChild(this.c),this.x=this.c.getContext("2d"),this.face=null,this.faceKey="",this.T={x:165,y:150,r:128},this.S={x:470,y:150,r:140}}drawFace(t,e){let n=document.createElement("canvas");n.width=640,n.height=350;let i=n.getContext("2d"),r=(o,l,c,h,u)=>{let f=i.createRadialGradient(o.x,o.y-o.r*.3,o.r*.1,o.x,o.y,o.r);f.addColorStop(0,"#1d2a3c"),f.addColorStop(1,"#070b12"),i.fillStyle=f,i.beginPath(),i.arc(o.x,o.y,o.r,0,7),i.fill(),i.lineWidth=5,i.strokeStyle="#8a97a8",i.stroke(),u!==void 0&&(i.strokeStyle="#e8321f",i.lineWidth=9,i.beginPath(),i.arc(o.x,o.y,o.r-12,Xa(u/l),Xa(1)),i.stroke());for(let d=0;d<=l+1e-6;d+=c/2){let p=Math.abs(d/c-Math.round(d/c))<1e-6,x=Xa(d/l),g=o.r-8,m=g-(p?16:8);if(i.strokeStyle="#e8edf3",i.lineWidth=p?3.5:2,i.beginPath(),i.moveTo(o.x+Math.cos(x)*m,o.y+Math.sin(x)*m),i.lineTo(o.x+Math.cos(x)*g,o.y+Math.sin(x)*g),i.stroke(),p){i.fillStyle="#ffffff",i.font=ws(o.r>135?22:24),i.textAlign="center",i.textBaseline="middle";let M=m-20;i.fillText(String(Math.round(h?d/h:d)),o.x+Math.cos(x)*M,o.y+Math.sin(x)*M)}}};r(this.T,t*1e3,1e3,1e3,e),r(this.S,160,20);let a=this.T;i.lineWidth=9,i.strokeStyle="rgba(255,255,255,.18)",i.beginPath(),i.arc(a.x,a.y,a.r*.84,.66*Math.PI,.34*Math.PI,!0),i.stroke(),i.fillStyle="#c9d2dc",i.font=ws(18,700),i.textAlign="center",i.textBaseline="middle",i.fillText("E",a.x-a.r*.62,a.y+a.r*.62),i.fillText("F",a.x+a.r*.62,a.y+a.r*.62),i.font=ws(17,600),i.fillStyle="#9fb0c4",i.fillText("x1000 rpm",a.x,a.y-a.r*.36),i.fillText("km/h",this.S.x,this.S.y-this.S.r*.36),this.face=n}needle(t,e,n){let i=this.x,r=Xa(e);i.strokeStyle=n,i.lineWidth=5,i.lineCap="round",i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(t.x+Math.cos(r)*(t.r-22),t.y+Math.sin(r)*(t.r-22)),i.stroke(),i.fillStyle="#2b3646",i.beginPath(),i.arc(t.x,t.y,9,0,7),i.fill()}lamp(t,e,n,i,r){let a=this.x;a.font=ws(21),a.textAlign="center",a.textBaseline="middle";let o=a.measureText(n).width+18;a.fillStyle=i?r:"rgba(255,255,255,.1)",a.beginPath(),a.roundRect?a.roundRect(t-o/2,e-16,o,32,8):a.rect(t-o/2,e-16,o,32),a.fill(),a.fillStyle=i?"#0b0f16":"rgba(255,255,255,.42)",a.fillText(n,t,e+1)}draw(t){let e=Math.ceil(t.maxRpm/1e3+.6),n=e+":"+t.maxRpm;n!==this.faceKey&&(this.faceKey=n,this.drawFace(e,t.maxRpm*.92));let i=this.x,r=this.T,a=this.S;i.clearRect(0,0,640,350),i.drawImage(this.face,0,0);let o=Math.max(0,Math.min(1,t.fuel/t.tank)),l=.66*Math.PI,c=l-o*.32*Math.PI;i.strokeStyle=t.low?"#ff4b3e":t.warn?"#ffa31a":"#3ad07a",i.lineWidth=9,i.beginPath(),i.arc(r.x,r.y,r.r*.84,l,c,!0),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#f2c418",i.font=ws(56),i.fillText(t.gear,r.x,r.y+r.r*.42),i.fillStyle=t.over?"#ff4b3e":"#ffffff",i.font=ws(58),i.fillText(String(t.kmh),a.x,a.y+a.r*.42),this.needle(r,t.rpm/(e*1e3),"#ff6a3d"),this.needle(a,t.kmh/160,"#ff6a3d");let h=330;i.fillStyle="rgba(7,11,18,.78)",i.beginPath(),i.roundRect?i.roundRect(28,h-21,584,42,12):i.rect(28,h-21,584,42),i.fill(),this.lamp(70,h,"P",t.hand,"#ff4b3e"),this.lamp(140,h,"ENG",t.engine,"#f2a818"),this.lamp(222,h,"FUEL",t.low||t.warn,t.low?"#ff4b3e":"#ffa31a"),t.clutchBox&&this.lamp(292,h,"C",t.clutch,"#8fdcf0"),this.lamp(392,h,t.limiter?"LIM "+t.limiter:"LIM",!!t.limiter,"#2cff8f"),this.lamp(505,h,"TAXI",!0,t.ride?"#ff4b3e":"#2cff8f")}};function Vu(s,t){let e=s.canvas.width;if(s.clearRect(0,0,e,e),s.save(),s.translate(e/2,e/2),s.scale(e/100,e/100),s.fillStyle="#2cff8f",s.strokeStyle="#2cff8f",s.lineWidth=12,s.lineCap="round",s.lineJoin="round",t==="arrive")s.beginPath(),s.arc(0,-10,18,0,7),s.fill(),s.beginPath(),s.moveTo(-14,0),s.lineTo(0,34),s.lineTo(14,0),s.fill(),s.fillStyle="#0b1420",s.beginPath(),s.arc(0,-10,7,0,7),s.fill();else if(t==="uturn")s.beginPath(),s.moveTo(14,38),s.lineTo(14,-6),s.arc(-4,-6,18,0,Math.PI,!0),s.lineTo(-22,14),s.stroke(),s.beginPath(),s.moveTo(-40,8),s.lineTo(-4,8),s.lineTo(-22,34),s.closePath(),s.fill();else{let n=t==="left"?-1:1;s.beginPath(),s.moveTo(-n*14,38),s.lineTo(-n*14,-2),s.quadraticCurveTo(-n*14,-16,0,-16),s.lineTo(n*12,-16),s.stroke(),s.beginPath(),s.moveTo(n*34,-16),s.lineTo(n*10,-36),s.lineTo(n*10,4),s.closePath(),s.fill()}s.restore()}var we=5,ce=(s,t,e)=>{let n=document.createElement(e||"div");return n.className=s,t&&t.appendChild(n),n},zc=s=>(s<0?"\u2212":"")+Math.abs(Math.round(s)).toLocaleString("en-US")+" DH",ja=class{constructor(t){this.root=t,this.box=null}begin(t,e){this.shift=t,this.label=e;let n=this.root;n.innerHTML="",n.style.display="block",this.cash=ce("h-cash",n),this.cashV=ce("v",this.cash),this.rides=ce("s",this.cash),this.sign=ce("h-sign",n),this.signV=ce("n",this.sign),this.street=ce("h-street",n),this.warn=ce("h-warn",n),this.area=ce("h-area",n);let i=ce("h-map",n);this.mapC=ce("",i,"canvas"),this.mapC.width=this.mapC.height=260,this.mapX=this.mapC.getContext("2d"),this.gauges=new qa(n),this.gs={},this.turn=ce("h-turn",n),this.turnC=ce("",this.turn,"canvas"),this.turnC.width=this.turnC.height=96,this.turnX=this.turnC.getContext("2d"),this.turnD=ce("d",this.turn),this.turnN=ce("n",this.turn),this.ride=ce("h-ride",n),this.fuelW=ce("h-fuelw",n),this.prompt=ce("h-prompt",n),this.cards=ce("h-cards",n),this.toastE=ce("h-toast",n),this.cache={},this.t=0,this.toastT=0,this.drawBase(t.net)}set(t,e,n){this.cache[e]!==n&&(this.cache[e]=n,t.textContent=n)}drawBase(t){let e=t.box,n=Math.ceil((e.x1-e.x0)/we),i=Math.ceil((e.z1-e.z0)/we),r=document.createElement("canvas");r.width=n,r.height=i;let a=r.getContext("2d");a.fillStyle="#16202c",a.fillRect(0,0,n,i);let o=t.g;a.fillStyle="#0d2a44";for(let l=0;l<o.nz;l+=2)for(let c=0;c<o.nx;c+=2)o.h[l*o.nx+c]<-20&&a.fillRect((o.x0+c*o.c-e.x0)/we-3,(o.z0+l*o.c-e.z0)/we-3,6,6);a.lineCap="round",a.lineJoin="round";for(let l of[0,1])for(let c=0;c<t.ne;c++){let h=t.eCls[c];if(l===0!=h>=4)continue;a.strokeStyle=h<=1?"#e8c35a":h<=3?"#c9d2dc":"#6d7b8b",a.lineWidth=h<=1?3:h<=3?2.2:1.3,a.beginPath();let u=t.eOff[c],f=t.eN[c];for(let d=0;d<f;d++){let p=(t.px[u+d]-e.x0)/we,x=(t.pz[u+d]-e.z0)/we;d?a.lineTo(p,x):a.moveTo(p,x)}a.stroke()}this.base=r}update(t,e){let n=this.shift,i=n.me.veh,r=n.taxi;for(this.t+=t;r.events.length;){let v=r.events.shift();this.card(v),r.log.push(v),r.log.length>20&&r.log.shift()}for(;r.toasts.length;){let v=r.toasts.shift();this.toastE.textContent=ht.line(v.text),this.toastE.className="h-toast on "+v.kind,this.toastT=3.2}this.toastT>0&&(this.toastT-=t)<=0&&(this.toastE.className="h-toast");for(let v of this.cards.children)v._t-=t,v._t<=0&&!v._gone&&(v._gone=!0,v.classList.add("out"),setTimeout(()=>v.remove(),400));if(this.t<.08)return;let a=this.t;this.t=0;let o=Math.round(Math.abs(i.fwdSpeed)*3.6);this.set(this.cashV,"cash",zc(r.money)),this.cashV.className="v"+(r.money<0?" neg":""),this.set(this.rides,"rides",ht.t("rides")+" "+r.stats.rides);let l=n.qp,c=l.edge>=0?l.lim:0;this.set(this.signV,"lim",c?String(c):""),this.sign.style.display=c?"":"none",this.set(this.street,"street",l.edge>=0?n.net.edgeName(l.edge,ht.lang):""),(this.areaT=(this.areaT||0)-a)<=0&&(this.areaT=.5,this.set(this.area,"area",n.net.areaName(i.px,i.pz,ht.lang)));let h=r.wrongNow?ht.t("wrongWay"):r.speeding?ht.t("slowDown"):i.stalled?ht.t("stalled"):"";this.set(this.warn,"warn",h),this.warn.className="h-warn"+(h?" on":"");let u=i.gearbox?i.mgear<0?"R":i.mgear===0?"N":String(i.mgear):i.reverse?"R":"D"+i.gear,f=this.gs;f.kmh=o,f.rpm=i.rpm,f.maxRpm=i.spec.rpm,f.gear=u,f.fuel=r.fuel,f.tank=r.tank,f.low=r.fuel<4,f.warn=r.fuel<pi,f.hand=i.input.handbrake>0||i.hold,f.engine=!!(i.stalled||i.fuelCut),f.limiter=r.limiter,f.clutchBox=i.gearbox==="clutch",f.clutch=(i.input.clutch||0)>.5,f.ride=!!(r.ride&&r.ride.ped.state==="in"),f.over=!!(c&&o>c+5),this.gauges.draw(f);let d=n.arrows&&n.guide?n.guide.turn:null;if(d){let v=d.dir+(d.dist<30?"n":"");this.cache.turnK!==v&&(this.cache.turnK=v,Vu(this.turnX,d.dir)),this.set(this.turnD,"turnD",ht.t(d.dir==="arrive"?"arrive":d.dir==="uturn"?"turnU":d.dir==="left"?"turnL":"turnR")+" \xB7 "+ht.t("inM",Math.max(0,Math.round(d.dist/10)*10))),this.set(this.turnN,"turnN",d.edge>=0?n.net.edgeName(d.edge,ht.lang):(r.fuelGo||r.ride)&&(r.fuelGo?r.fuelGo.name||ht.t("fuelStation"):r.ride.name)||""),this.turn.className="h-turn on"+(d.dist<40?" near":"")}else this.turn.className!=="h-turn"&&(this.turn.className="h-turn");let p=r.ride,x=r.fuelGo,g=r.fuel<pi&&!x&&!r.refuel?ht.t(r.fuel<4?"fuelWarnRed":"fuelWarn"):"";if(this.set(this.fuelW,"fuelW",g),this.fuelW.className="h-fuelw"+(g?" on"+(r.fuel<4?" red":""):""),x){let v=ht.t("toFuel",x.name||ht.t("fuelStation"))+`
`+((x.route?x.route.len:0)/1e3).toFixed(1)+" km \xB7 "+Ui+" DH/L";this.set(this.ride,"ride",v),this.ride.className="h-ride on fuel"}else if(p&&p.ped.state==="in"){let v=Math.max(0,p.eta-p.t),T=p.route?p.route.len:0,w=ht.t("to")+" "+(p.name||"\u2014")+`
`+(T/1e3).toFixed(1)+" km \xB7 "+(v>0?ht.t("eta")+" "+Math.floor(v/60)+":"+String(Math.floor(v%60)).padStart(2,"0"):ht.t("late"))+`
`+ht.t("fare")+" "+r.meter()+" DH";this.set(this.ride,"ride",w),this.ride.className="h-ride on"+(v<=0?" late":"")}else this.set(this.ride,"ride",""),this.ride.className="h-ride";let m=r.prompt,M=m==="help"?"help_":m,y="";if(m==="helpWait")y=ht.t("helpWait");else if(m==="pickup"){let v=r.nearPed(i),T=v&&v.quote;y=this.label()+"  "+(T?ht.t("pickupTo",T.name||"\u2014",T.km.toFixed(1),T.fare):ht.t("pickup"))}else m&&(y=this.label()+"  "+ht.t(M)+(m==="refuel"?"  ("+Ui+" DH/L)":""));this.set(this.prompt,"prompt",y),this.prompt.className="h-prompt"+(y?" on":""),this.map(n,i,r,a)}map(t,e,n){let i=this.mapX,r=260,a=t.net,o=a.box,l=Math.atan2(e.R[6],e.R[8]),c=1.25;i.save(),i.fillStyle="#16202c",i.fillRect(0,0,r,r),i.translate(r/2,r*.62),i.rotate(Math.PI+l),i.scale(c,c);let h=(e.px-o.x0)/we,u=(e.pz-o.z0)/we;i.drawImage(this.base,-h,-u);let f=n.fuelGo||n.ride;if(f&&f.route&&f.ped.state==="in"){i.strokeStyle="#2cff8f",i.lineWidth=3.2/c,i.beginPath(),i.moveTo(0,0),Dc(t,f,(g,m)=>i.lineTo((g-e.px)/we,(m-e.pz)/we));let p=(f.x-e.px)/we,x=(f.z-e.pz)/we;i.stroke(),i.fillStyle="#2cff8f",i.beginPath(),i.arc(p,x,5/c,0,7),i.fill()}i.fillStyle="#22e568";for(let p of n.peds)p.state==="wait"&&(i.beginPath(),i.arc((p.x-e.px)/we,(p.z-e.pz)/we,3.8/c,0,7),i.fill());let d=t.enforce;if(d){i.fillStyle="#ff9f1a";for(let p of d.cams){let x=(p.x-e.px)/we,g=(p.z-e.pz)/we;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.4/c,0,7),i.fill())}i.fillStyle="#3d7bff";for(let p of d.police){let x=(p.x-e.px)/we,g=(p.z-e.pz)/we;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.8/c,0,7),i.fill())}}i.fillStyle="#ff3b30";for(let p of a.stations){let x=a.eOff[p.e]+p.k;i.beginPath(),i.arc((a.px[x]-e.px)/we,(a.pz[x]-e.pz)/we,4.5/c,0,7),i.fill()}i.restore(),i.fillStyle="#21c8ef",i.strokeStyle="#fff",i.lineWidth=1.5,i.beginPath(),i.moveTo(r/2,r*.62-9),i.lineTo(r/2+6,r*.62+7),i.lineTo(r/2,r*.62+3),i.lineTo(r/2-6,r*.62+7),i.closePath(),i.fill(),i.stroke()}card(t){let e=ce("h-card "+t.kind,null);ce("t",e).textContent=ht.t(t.title);for(let[n,i]of t.lines){let r=ce("r",e);ce("l",r,"span").textContent=ht.line(n),ce("a"+(i<0?" neg":i>0?" pos":""),r,"span").textContent=i?zc(i):""}if(t.lines.length>1||t.total){let n=ce("r tot",e);ce("l",n,"span").textContent=ht.t("total"),ce("a"+(t.total<0?" neg":" pos"),n,"span").textContent=zc(t.total)}for(e._t=t.kind==="crash"?7:5.5,this.cards.appendChild(e);this.cards.children.length>3;)this.cards.firstChild.remove();this.onCard&&this.onCard(t)}end(){this.root.innerHTML="",this.root.style.display="none",this.base=null}};var le=window.MyPC,er=1/60,N={renderer:null,canvas:null,info:null,quality:null,net:null,input:new Ba,shift:null,hud:null,ui:null,sound:null,raf:0,last:0,acc:0,state:"boot",paused:!1,saved:null,settings:{gearbox:"auto",car:"taxi",level:"normal",arrows:!0,hud:"normal"},fpsLog:[],workLog:[],saveT:0};window.TT=N;function Xx(s){let e=new URLSearchParams(location.search).get("q")||s.quality&&s.quality.tier||"mid";return{tier:e,scale:{low:.6,mid:.8,high:1}[e]||.8,minScale:e==="low"?.45:.55}}function qx(){let s=document.getElementById("c"),t=new Jr({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:/proof/.test(location.search)});return t.setPixelRatio(1),t.outputColorSpace=li,t.toneMapping=Sn,N.canvas=s,t}function nr(){let s=N.shift?N.shift.scale:N.quality.scale,t=Math.round(1920*s*Math.min(1,window.innerWidth/1920*1.5)),e=Math.round(t*window.innerHeight/window.innerWidth);N.renderer.setSize(t,e,!1),N.canvas.style.width="100vw",N.canvas.style.height="100vh"}function qu(s){N.raf=requestAnimationFrame(qu);let t=performance.now();N.last||(N.last=s);let e=s-N.last;N.last=s,N.acc+=Math.min(100,e);let n=0;if(N.botSteps&&N.state==="drive"){for(;n<N.botSteps;n++)Xu(er);N.acc=0}for(;N.acc>=er*1e3-.5&&n<4;)Xu(er),N.acc-=er*1e3,n++;if(N.acc>er*2e3&&(N.acc=0),N.shift&&N.state!=="boot"){N.shift.render(e),N.capture&&jx(N.capture);let i=N.shift.bot;if(i&&i.shots.length){let r=N.shift.bug.shot(N.canvas);for(let a of i.shots)i.pics[a]=r;i.shots.length=0}}N.fpsLog.length<2e4&&(N.fpsLog.push(e),N.workLog.push(performance.now()-t))}function Gu(){N.raf||(N.last=0,N.acc=0,N.raf=requestAnimationFrame(qu))}function Wu(){N.raf&&cancelAnimationFrame(N.raf),N.raf=0}function Xu(s){if(N.input.poll(s),N.input.edge.capture&&N.shift&&(N.state==="drive"||N.state==="pause")&&(N.capture="capture"),N.ui.screen==="controls"&&N.input.btnSeen!==N.btnShown){N.btnShown=N.input.btnSeen;let t=N.ui.root.querySelector(".btest b");t&&(t.textContent=ht.t("btnSeen",N.input.lastBtn)+(le.gamepad&&le.gamepad.label?" ("+le.gamepad.label(N.input.lastBtn)+")":""))}if(N.ui.screen==="map")N.ui.mapTick(s,N.input);else if(N.state==="drive"&&N.input.edge.map&&N.shift){N.openMap();return}if(N.state==="drive"&&N.shift){N.shift.update(s,N.input),N.hud.update(s,N.input),N.sound.update(N.shift,s);let t=N.shift.taxi;t.dirty&&(N.saveT-=s)<=0&&(N.saveT=5,t.dirty=!1,Ya())}}function Ya(){if(!N.shift)return;let s=N.shift.taxi.save(),t=N.shift.me.veh;s.at={x:Math.round(t.px),z:Math.round(t.pz)},N.saved=s,le.save("taxi",s)}function jx(s){N.capture=null;let t=N.shift;if(!t||N.bugBusy)return;let e=t.bug.shot(N.canvas),n=N.fpsLog.slice(-120),i=t.bug.state(t,{from:s,state:N.state,lang:ht.lang,screen:[N.canvas.width,N.canvas.height],fps:n.length?Math.round(1e3*n.length/n.reduce((a,o)=>a+o,0)):0});window.TT.lastBug={data:i,img:e.length};let r=(a,o)=>{N.bugMsg=a,N.state==="pause"&&N.ui.screen==="pause"?N.ui.pause(N.ui.f):t.taxi.toast(a,o)};if(!le.bug){r("bugOld","bad");return}N.bugBusy=!0,r("bugSending","info"),le.bug(s==="menu"?"Pause > Report a bug":"Capture button",i,e).then(a=>{N.bugBusy=!1,window.TT.lastBug.id=a,r("bugSent:"+String(a).slice(0,6),"ok")}).catch(a=>{N.bugBusy=!1,window.TT.lastBug.error=a&&a.code,console.warn("[taxi] bug report",a&&a.code,i),r("bugFail:"+(a&&a.code||"?"),"bad")})}N.reportBug=()=>{N.capture="menu"};var Yx={small:1,normal:1.2,large:1.4,xl:1.65};N.applyHud=()=>{N.hud&&N.hud.root.style.setProperty("--hs",Yx[N.settings.hud]||1.2)};N.saveSettings=()=>le.save("settings",N.settings);N.applyGear=()=>{if(!N.shift)return;let s=N.shift.me.veh,t=N.settings.gearbox;s.gearbox=t==="auto"?null:t,s.mgear=1,s.stalled=!1};N.startShift=function(s){N.ui.hide(),N.shift&&(s||Ya(),N.shift.dispose(),N.shift=null);let t=new ka(N.renderer,N.net,N.quality,{bot:N.botOpts,gearbox:N.settings.gearbox,car:N.settings.car,level:N.settings.level,arrows:N.settings.arrows,saved:N.saved,start:N.saved&&N.saved.at,lang:ht.lang});t.onScale=()=>nr(),t.onSound=(e,n,i)=>N.sound.event(e,n,i,t),N.shift=t,N.hud.begin(t,()=>N.input.hasPad()&&le.gamepad&&le.gamepad.label?"("+le.gamepad.label(0)+")":"(OK)"),N.sound.resume(),N.sound.begin(t),N.input.clearHeld(),N.state="drive",nr(),le.announce&&le.announce(ht.t("boarded").split(":")[0])};N.resetCareer=function(){let s=N.saved&&N.saved.at;if(N.saved=s?{at:s}:null,le.save("taxi",N.saved),N.shift){let t=N.shift.me.veh;N.saved={at:{x:Math.round(t.px),z:Math.round(t.pz)}},N.shift.taxi.dirty=!1,N.startShift(!0)}};N.pauseShift=function(){N.state==="drive"&&(N.state="pause",N.bugMsg=null,N.sound.pause(),N.ui.pause())};N.openMap=function(){N.state==="drive"&&(N.state="pause",N.bugMsg=null,N.sound.pause(),N.ui.mapView(()=>N.resumeShift()))};N.resumeShift=function(){N.ui.hide(),N.input.clearHeld(),N.input.prev.action=!0,N.state="drive",N.sound.resume()};N.endShift=function(){Ya(),N.sound.resume(),N.sound.end(),N.hud.end(),N.shift&&(N.shift.dispose(),N.shift=null),N.state="menu",N.saved&&N.saved.stats&&N.saved.stats.earned&&le.submitScore&&le.submitScore(Math.round(N.saved.stats.earned),{}),N.ui.title()};le.init({ownMenu:!0,onInit:async function(s){N.info=s;try{ht.set(s.lang),N.quality=Xx(s),N.renderer=qx(),nr(),window.addEventListener("resize",nr),await Mu(t=>le.progress(t*.6)),N.net=await xa.load(t=>le.progress(.6+t*.35)),N.saved=le.load("taxi",null),N.settings=Object.assign({gearbox:"auto",car:"taxi",level:"normal",arrows:!0,hud:"normal"},le.load("settings",null)),N.settings.lv!==2&&(N.settings.level==="hard"&&(N.settings.level="real"),N.settings.lv=2),N.hud=new ja(document.getElementById("hud")),N.applyHud(),N.sound=new ga(s.volume||{music:.7,sfx:.8}),N.ui=new Wa(N,document.getElementById("ui")),N.input.menuCb=(t,e,n)=>{if(N.state==="drive"){t==="cancel"&&!n&&N.pauseShift();return}N.ui.input(t,e,n)},le.progress(1),le.ready()}catch(t){le.report&&le.report(t,{where:"init"}),le.fail(String(t&&t.message||t))}},onStart:function(){N.sound.start(),Gu();let s=new URLSearchParams(location.search);s.has("dev")?(s.get("gear")&&(N.settings.gearbox=s.get("gear")),s.get("car")&&(N.settings.car=s.get("car")),s.get("level")&&(N.settings.level=s.get("level")),s.get("hud")&&(N.settings.hud=s.get("hud"),N.applyHud()),s.has("fresh")&&(N.saved=null),s.has("bot")&&(N.botOpts={seed:+s.get("seed")||1,spread:+s.get("spread")||0,kmh:+s.get("kmh")||50},N.botSteps=+s.get("steps")||6,N.settings.arrows=!1),s.has("x")&&(N.saved=Object.assign({},N.saved,{at:{x:+s.get("x"),z:+s.get("z")}})),N.startShift()):(N.state="menu",N.ui.title())},onPause:function(){Wu(),N.sound.pause(),N.paused=!0,N.state==="drive"&&N.pauseShift()},onResume:function(){N.paused=!1,N.input.clearHeld(),N.state!=="pause"&&N.sound.resume(),Gu()},onDestroy:function(){Ya(),Wu(),window.removeEventListener("resize",nr),N.shift&&N.shift.dispose(),N.sound&&N.sound.close(),N.renderer&&N.renderer.dispose()},onInput:function(s,t,e,n){if(s==="menu"&&t===!1){N.state==="drive"?N.pauseShift():N.state==="pause"&&N.resumeShift();return}if(s==="cancel"&&t&&N.state==="menu"&&N.ui.screen==="title")return!1;N.input.onAction(s,t,e,n)},onVolume:function(s){N.sound&&N.sound.volume(s)}});le.gamepad&&(le.gamepad.on("button",(s,t,e,n)=>N.input.onButton(s,t,e,n)),le.gamepad.on("axes",(s,t)=>N.input.onAxes(s,t)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
