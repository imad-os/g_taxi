(()=>{var El="170";var iu=0,tc=1,su=2;var fh=1,ru=2,Cn=3,ni=0,Ue=1,rn=2,ti=0,ei=1,Ei=2,ec=3,nc=4,au=5,yi=100,ou=101,lu=102,cu=103,hu=104,uu=200,fu=201,du=202,pu=203,no=204,io=205,mu=206,gu=207,xu=208,vu=209,_u=210,yu=211,Mu=212,bu=213,Su=214,so=0,ro=1,ao=2,ts=3,oo=4,lo=5,co=6,ho=7,dh=0,wu=1,Eu=2,_n=0,Tu=1,Au=2,Ru=3,Cu=4,Pu=5,Iu=6,Lu=7;var ph=300,es=301,ns=302,uo=303,fo=304,Yr=306,po=1e3,Si=1001,mo=1002,Xe=1003,Du=1004;var Gs=1005;var gn=1006,Ea=1007;var wi=1008;var Dn=1009,mh=1010,gh=1011,Is=1012,Tl=1013,Ti=1014,xn=1015,Fs=1016,Al=1017,Rl=1018,is=1020,xh=35902,vh=1021,_h=1022,an=1023,yh=1024,Mh=1025,Ji=1026,ss=1027,Cl=1028,Pl=1029,bh=1030,Il=1031;var Ll=1033,vr=33776,_r=33777,yr=33778,Mr=33779,go=35840,xo=35841,vo=35842,_o=35843,yo=36196,Mo=37492,bo=37496,So=37808,wo=37809,Eo=37810,To=37811,Ao=37812,Ro=37813,Co=37814,Po=37815,Io=37816,Lo=37817,Do=37818,Uo=37819,No=37820,zo=37821,br=36492,Fo=36494,Oo=36495,Sh=36283,Bo=36284,ko=36285,Ho=36286;var Sr=2300,Vo=2301,Ta=2302,ic=2400,sc=2401,rc=2402;var Uu=3200,Nu=3201;var zu=0,Fu=1,Qn="",Ke="srgb",ai="srgb-linear",Zr="linear",ae="srgb";var Ui=7680;var ac=519,Ou=512,Bu=513,ku=514,wh=515,Hu=516,Vu=517,Gu=518,Wu=519,oc=35044,oi=35048;var lc="300 es",In=2e3,wr=2001,ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Aa=Math.PI/180,Go=180/Math.PI;function Os(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ke(s,t,e){return Math.max(t,Math.min(e,s))}function Xu(s,t){return(s%t+t)%t}function Ra(s,t,e){return(1-e)*s+e*t}function ys(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Qt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],d=n[8],x=i[0],g=i[3],p=i[6],S=i[1],_=i[4],v=i[7],R=i[2],T=i[5],b=i[8];return r[0]=a*x+o*S+l*R,r[3]=a*g+o*_+l*T,r[6]=a*p+o*v+l*b,r[1]=c*x+h*S+u*R,r[4]=c*g+h*_+u*T,r[7]=c*p+h*v+u*b,r[2]=f*x+m*S+d*R,r[5]=f*g+m*_+d*T,r[8]=f*p+m*v+d*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,d=e*u+n*f+i*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/d;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Vt;function Eh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qu(){let s=Er("canvas");return s.style.display="block",s}var cc={};function Rs(s){s in cc||(cc[s]=!0,console.warn(s))}function Yu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zu(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ju(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Zr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var hc=[.64,.33,.3,.6,.15,.06],uc=[.2126,.7152,.0722],fc=[.3127,.329],dc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ai]:{primaries:hc,whitePoint:fc,transfer:Zr,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:uc,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:hc,whitePoint:fc,transfer:ae,toXYZ:dc,fromXYZ:pc,luminanceCoefficients:uc,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});var Ni,Wo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Er("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$u=0,Tr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pa(i[a].image)):r.push(Pa(i[a]))}else r=Pa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ju=0,qe=class s extends ii{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Si,i=Si,r=gn,a=wi,o=an,l=Dn,c=s.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Os(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=ph;qe.DEFAULT_ANISOTROPY=1;var xe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],d=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(d+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(m+1)/2,R=(p+1)/2,T=(h+f)/4,b=(u+x)/4,C=(d+g)/4;return _>v&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=b/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=C/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-d)*(g-d)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-d)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xo=class extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Tr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qo=class extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],m=r[a+1],d=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=d,t[e+3]=x;return}if(u!==x||l!==f||c!==m||h!==d){let g=1-o,p=l*f+c*m+h*d+u*x,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,p*S);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let v=o*S;if(l=l*g+f*v,c=c*g+m*v,h=h*g+d*v,u=u*g+x*v,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],m=r[a+2],d=r[a+3];return t[e]=o*d+h*u+l*m-c*f,t[e+1]=l*d+h*f+c*u-o*m,t[e+2]=c*d+h*m+o*f-l*u,t[e+3]=h*d-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),m=l(i/2),d=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*d,this._y=c*m*u-f*h*d,this._z=c*h*d+f*m*u,this._w=c*h*u-f*m*d;break;case"YXZ":this._x=f*h*u+c*m*d,this._y=c*m*u-f*h*d,this._z=c*h*d-f*m*u,this._w=c*h*u+f*m*d;break;case"ZXY":this._x=f*h*u-c*m*d,this._y=c*m*u+f*h*d,this._z=c*h*d+f*m*u,this._w=c*h*u-f*m*d;break;case"ZYX":this._x=f*h*u-c*m*d,this._y=c*m*u+f*h*d,this._z=c*h*d-f*m*u,this._w=c*h*u+f*m*d;break;case"YZX":this._x=f*h*u+c*m*d,this._y=c*m*u+f*h*d,this._z=c*h*d-f*m*u,this._w=c*h*u-f*m*d;break;case"XZY":this._x=f*h*u-c*m*d,this._y=c*m*u-f*h*d,this._z=c*h*d+f*m*u,this._w=c*h*u+f*m*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new k,mc=new yn,Nn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Xs.subVectors(this.max,Ms),zi.subVectors(t.a,Ms),Fi.subVectors(t.b,Ms),Oi.subVectors(t.c,Ms),Yn.subVectors(Fi,zi),Zn.subVectors(Oi,Fi),di.subVectors(zi,Oi);let e=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!La(e,zi,Fi,Oi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!La(e,zi,Fi,Oi,Xs))?!1:(qs.crossVectors(Yn,Zn),e=[qs.x,qs.y,qs.z],La(e,zi,Fi,Oi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new k,new k,new k,new k,new k,new k,new k,new k],en=new k,Ws=new Nn,zi=new k,Fi=new k,Oi=new k,Yn=new k,Zn=new k,di=new k,Ms=new k,Xs=new k,qs=new k,pi=new k;function La(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){pi.fromArray(s,r);let o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ku=new Nn,bs=new k,Da=new k,zn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ku.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Da)),this.expandByPoint(bs.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},En=new k,Ua=new k,Ys=new k,jn=new k,Na=new k,Zs=new k,za=new k,rs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ua.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Ua);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=jn.dot(this.direction),l=-jn.dot(Ys),c=jn.lengthSq(),h=Math.abs(1-a*a),u,f,m,d;if(h>0)if(u=a*l-o,f=a*o-l,d=r*h,u>=0)if(f>=-d)if(f<=d){let x=1/h;u*=x,f*=x,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-d?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=d?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ua).addScaledVector(Ys,f),m}intersectSphere(t,e){En.subVectors(t.center,this.origin);let n=En.dot(this.direction),i=En.dot(En)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,r){Na.subVectors(e,t),Zs.subVectors(n,t),za.crossVectors(Na,Zs);let a=this.direction.dot(za),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);let l=o*this.direction.dot(Zs.crossVectors(jn,Zs));if(l<0)return null;let c=o*this.direction.dot(Na.cross(jn));if(c<0||l+c>a)return null;let h=-o*jn.dot(za);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,m,d,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,m,d,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,m,d,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=d,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*u,d=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+d*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=d+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,d=c*h,x=c*u;e[0]=f+x*o,e[4]=d*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-d,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,d=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=d+m*o,e[1]=m+d*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*u,d=o*h,x=o*u;e[0]=l*h,e[4]=d*c-m,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=m*c-d,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,d=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=d*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+d,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,m=a*c,d=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=m*u-d,e[2]=d*u-m,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qu,t,tf)}lookAt(t,e,n){let i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),$n.crossVectors(n,Ge),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),$n.crossVectors(n,Ge)),$n.normalize(),js.crossVectors(Ge,$n),i[0]=$n.x,i[4]=js.x,i[8]=Ge.x,i[1]=$n.y,i[5]=js.y,i[9]=Ge.y,i[2]=$n.z,i[6]=js.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],d=n[2],x=n[6],g=n[10],p=n[14],S=n[3],_=n[7],v=n[11],R=n[15],T=i[0],b=i[4],C=i[8],M=i[12],y=i[1],A=i[5],L=i[9],I=i[13],D=i[2],X=i[6],B=i[10],Z=i[14],V=i[3],K=i[7],it=i[11],ht=i[15];return r[0]=a*T+o*y+l*D+c*V,r[4]=a*b+o*A+l*X+c*K,r[8]=a*C+o*L+l*B+c*it,r[12]=a*M+o*I+l*Z+c*ht,r[1]=h*T+u*y+f*D+m*V,r[5]=h*b+u*A+f*X+m*K,r[9]=h*C+u*L+f*B+m*it,r[13]=h*M+u*I+f*Z+m*ht,r[2]=d*T+x*y+g*D+p*V,r[6]=d*b+x*A+g*X+p*K,r[10]=d*C+x*L+g*B+p*it,r[14]=d*M+x*I+g*Z+p*ht,r[3]=S*T+_*y+v*D+R*V,r[7]=S*b+_*A+v*X+R*K,r[11]=S*C+_*L+v*B+R*it,r[15]=S*M+_*I+v*Z+R*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],d=t[3],x=t[7],g=t[11],p=t[15];return d*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*m-n*l*m)+x*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+g*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],d=t[12],x=t[13],g=t[14],p=t[15],S=u*g*c-x*f*c+x*l*m-o*g*m-u*l*p+o*f*p,_=d*f*c-h*g*c-d*l*m+a*g*m+h*l*p-a*f*p,v=h*x*c-d*u*c+d*o*m-a*x*m-h*o*p+a*u*p,R=d*u*l-h*x*l-d*o*f+a*x*f+h*o*g-a*u*g,T=e*S+n*_+i*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=S*b,t[1]=(x*f*r-u*g*r-x*i*m+n*g*m+u*i*p-n*f*p)*b,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*p+n*l*p)*b,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*m-n*l*m)*b,t[4]=_*b,t[5]=(h*g*r-d*f*r+d*i*m-e*g*m-h*i*p+e*f*p)*b,t[6]=(d*l*r-a*g*r-d*i*c+e*g*c+a*i*p-e*l*p)*b,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*m+e*l*m)*b,t[8]=v*b,t[9]=(d*u*r-h*x*r-d*n*m+e*x*m+h*n*p-e*u*p)*b,t[10]=(a*x*r-d*o*r+d*n*c-e*x*c-a*n*p+e*o*p)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*b,t[12]=R*b,t[13]=(h*x*i-d*u*i+d*n*f-e*x*f-h*n*g+e*u*g)*b,t[14]=(d*o*i-a*x*i-d*n*l+e*x*l+a*n*g-e*o*g)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,d=r*u,x=a*h,g=a*u,p=o*u,S=l*c,_=l*h,v=l*u,R=n.x,T=n.y,b=n.z;return i[0]=(1-(x+p))*R,i[1]=(m+v)*R,i[2]=(d-_)*R,i[3]=0,i[4]=(m-v)*T,i[5]=(1-(f+p))*T,i[6]=(g+S)*T,i[7]=0,i[8]=(d+_)*b,i[9]=(g-S)*b,i[10]=(1-(f+x))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Bi.set(i[0],i[1],i[2]).length(),a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);let c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,d;if(o===In)m=-(a+r)/(a-r),d=-2*a*r/(a-r);else if(o===wr)m=-a/(a-r),d=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=In){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,m=(n+i)*h,d,x;if(o===In)d=(a+r)*u,x=-2*u;else if(o===wr)d=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new k,nn=new re,Qu=new k(0,0,0),tf=new k(1,1,1),$n=new k,js=new k,Ge=new k,gc=new re,xc=new yn,on=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ef=0,vc=new k,ki=new yn,Tn=new re,$s=new k,Ss=new k,nf=new k,sf=new yn,_c=new k(1,0,0),yc=new k(0,1,0),Mc=new k(0,0,1),bc={type:"added"},rf={type:"removed"},Hi={type:"childadded",child:null},Fa={type:"childremoved",child:null},Ye=class s extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new on,n=new yn,i=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$s.copy(t):$s.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ss,$s,this.up):Tn.lookAt($s,Ss,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Tn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),d=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),d.length>0&&(n.nodes=d)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ye.DEFAULT_UP=new k(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new k,An=new k,Oa=new k,Rn=new k,Vi=new k,Gi=new k,Sc=new k,Ba=new k,ka=new k,Ha=new k,Va=new xe,Ga=new xe,Wa=new xe,Mi=class s{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),An.subVectors(n,e),Oa.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(An),l=sn.dot(Oa),c=An.dot(An),h=An.dot(Oa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,d=(a*h-o*l)*f;return r.set(1-m-d,d,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),An.subVectors(t,e),sn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Vi.subVectors(i,n),Gi.subVectors(r,n),Ba.subVectors(t,n);let l=Vi.dot(Ba),c=Gi.dot(Ba);if(l<=0&&c<=0)return e.copy(n);ka.subVectors(t,i);let h=Vi.dot(ka),u=Gi.dot(ka);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Ha.subVectors(t,r);let m=Vi.dot(Ha),d=Gi.dot(Ha);if(d>=0&&m<=d)return e.copy(r);let x=m*c-l*d;if(x<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Gi,o);let g=h*d-m*u;if(g<=0&&u-h>=0&&m-d>=0)return Sc.subVectors(r,i),o=(u-h)/(u-h+(m-d)),e.copy(i).addScaledVector(Sc,o);let p=1/(g+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Xu(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xa(a,r,t+1/3),this.g=Xa(a,r,t),this.b=Xa(a,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return jt.fromWorkingColorSpace(De.copy(this),t),Math.round(ke(De.r*255,0,255))*65536+Math.round(ke(De.g*255,0,255))*256+Math.round(ke(De.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(De.copy(this),e);let n=De.r,i=De.g,r=De.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ke){jt.fromWorkingColorSpace(De.copy(this),t);let e=De.r,n=De.g,i=De.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Js);let n=Ra(Jn.h,Js.h,e),i=Ra(Jn.s,Js.s,e),r=Ra(Jn.l,Js.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new zt;zt.NAMES=Th;var af=0,si=class extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Os(),this.name="",this.blending=ei,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fn=class extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new k,Ks=new Qt,Ht=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}};var Rr=class extends Ht{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Ht{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Ht{constructor(t,e,n){super(new Float32Array(t),e,n)}},of=0,Je=new re,qa=new Ye,Wi=new k,We=new Nn,ws=new Nn,Te=new k,ve=class s extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(We.min,ws.min),We.expandByPoint(Te),Te.addVectors(We.max,ws.max),We.expandByPoint(Te)):(We.expandByPoint(ws.min),We.expandByPoint(ws.max))}We.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Te.add(Wi)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new k,l[C]=new k;let c=new k,h=new k,u=new k,f=new Qt,m=new Qt,d=new Qt,x=new k,g=new k;function p(C,M,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),d.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),d.sub(f);let A=1/(m.x*d.y-d.x*m.y);isFinite(A)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(u,-m.y).multiplyScalar(A),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(A),o[C].add(x),o[M].add(x),o[y].add(x),l[C].add(g),l[M].add(g),l[y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,M=S.length;C<M;++C){let y=S[C],A=y.start,L=y.count;for(let I=A,D=A+L;I<D;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new k,v=new k,R=new k,T=new k;function b(C){R.fromBufferAttribute(i,C),T.copy(R);let M=o[C];_.copy(M),_.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(T,M);let A=v.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,A)}for(let C=0,M=S.length;C<M;++C){let y=S[C],A=y.start,L=y.count;for(let I=A,D=A+L;I<D;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let f=0,m=t.count;f<m;f+=3){let d=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,d=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let p=0;p<h;p++)f[d++]=c[m++]}return new Ht(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new re,mi=new rs,Qs=new zn,Ec=new k,tr=new k,er=new k,nr=new k,Ya=new k,ir=new k,Tc=new k,sr=new k,Kt=class extends Ye{constructor(t=new ve,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ya.fromBufferAttribute(u,t),a?ir.addScaledVector(Ya,h):ir.addScaledVector(Ya.sub(e),h))}e.add(ir)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Qs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Qs,Ec)===null||mi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(wc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){let g=f[d],p=a[g.materialIndex],S=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=S,R=_;v<R;v+=3){let T=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);i=rr(this,p,t,n,c,h,u,T,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let d=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=d,p=x;g<p;g+=3){let S=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=rr(this,a,t,n,c,h,u,S,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){let g=f[d],p=a[g.materialIndex],S=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=S,R=_;v<R;v+=3){let T=v,b=v+1,C=v+2;i=rr(this,p,t,n,c,h,u,T,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let d=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=d,p=x;g<p;g+=3){let S=g,_=g+1,v=g+2;i=rr(this,a,t,n,c,h,u,S,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function lf(s,t,e,n,i,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ni,o),l===null)return null;sr.copy(o),sr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:s}}function rr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,tr),s.getVertexPosition(l,er),s.getVertexPosition(c,nr);let h=lf(s,t,e,n,tr,er,nr,Tc);if(h){let u=new k;Mi.getBarycoord(Tc,tr,er,nr,u),i&&(h.uv=Mi.getInterpolatedAttribute(i,o,l,c,u,new Qt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,u,new Qt)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new k,materialIndex:0};Mi.getNormal(tr,er,nr,f.normal),h.face=f,h.barycoord=u}return h}var Ai=class s extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;d("z","y","x",-1,-1,n,e,t,a,r,0),d("z","y","x",1,-1,n,e,-t,a,r,1),d("x","z","y",1,1,t,n,e,i,a,2),d("x","z","y",1,-1,t,n,-e,i,a,3),d("x","y","z",1,-1,t,e,n,i,r,4),d("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function d(x,g,p,S,_,v,R,T,b,C,M){let y=v/b,A=R/C,L=v/2,I=R/2,D=T/2,X=b+1,B=C+1,Z=0,V=0,K=new k;for(let it=0;it<B;it++){let ht=it*A-I;for(let St=0;St<X;St++){let dt=St*y-L;K[x]=dt*S,K[g]=ht*_,K[p]=D,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(St/b),u.push(1-it/C),Z+=1}}for(let it=0;it<C;it++)for(let ht=0;ht<b;ht++){let St=f+ht+X*it,dt=f+ht+X*(it+1),W=f+(ht+1)+X*(it+1),Q=f+(ht+1)+X*it;l.push(St,dt,Q),l.push(dt,W,Q),V+=6}o.addGroup(m,V,M),m+=V,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function as(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){let t={};for(let e=0;e<s.length;e++){let n=as(s[e]);for(let i in n)t[i]=n[i]}return t}function cf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ah(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var hf={clone:as,merge:ze},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=new k,Ac=new Qt,Rc=new Qt,Fe=class extends Pr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Rc),e.subVectors(Rc,Ac)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xi=-90,qi=1,Yo=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(Xi,qi,t,e);i.layers=this.layers,this.add(i);let r=new Fe(Xi,qi,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Xi,qi,t,e);a.layers=this.layers,this.add(a);let o=new Fe(Xi,qi,t,e);o.layers=this.layers,this.add(o);let l=new Fe(Xi,qi,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Ir=class extends qe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zo=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ir(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ai(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:ti});r.uniforms.tEquirect.value=e;let a=new Kt(i,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=gn),new Yo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Za=new k,df=new k,pf=new Vt,Pn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Za.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pf.getNormalMatrix(t),i=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new zn,ar=new k,Lr=class{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],d=i[9],x=i[10],g=i[11],p=i[12],S=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-m,v-p).normalize(),n[1].setComponents(l+r,f+c,g+m,v+p).normalize(),n[2].setComponents(l+a,f+h,g+d,v+S).normalize(),n[3].setComponents(l-a,f-h,g-d,v-S).normalize(),n[4].setComponents(l-o,f-u,g-x,v-_).normalize(),e===In)n[5].setComponents(l+o,f+u,g+x,v+_).normalize();else if(e===wr)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ar.x=i.normal.x>0?t.max.x:t.min.x,ar.y=i.normal.y>0?t.max.y:t.min.y,ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,d)=>m.start-d.start);let f=0;for(let m=1;m<u.length;m++){let d=u[f],x=u[m];x.start<=d.start+d.count+1?d.count=Math.max(d.count,x.start+x.count-d.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,d=u.length;m<d;m++){let x=u[m];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var ri=class s extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,m=[],d=[],x=[],g=[];for(let p=0;p<h;p++){let S=p*f-a;for(let _=0;_<c;_++){let v=_*u-r;d.push(v,-S,0),x.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let _=S+c*p,v=S+c*(p+1),R=S+1+c*(p+1),T=S+1+c*p;m.push(_,v,T),m.push(v,R,T)}this.setIndex(m),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ed=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,bp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:gf,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:yf,alphatest_pars_fragment:Mf,aomap_fragment:bf,aomap_pars_fragment:Sf,batching_pars_vertex:wf,batching_vertex:Ef,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:Nf,color_pars_fragment:zf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:jf,envmap_pars_fragment:$f,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:ld,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:xd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Md,map_fragment:bd,map_pars_fragment:Sd,map_particle_fragment:wd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Id,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:zd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Kd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tp,skinbase_vertex:ep,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:sp,specularmap_fragment:rp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:hp,uv_pars_fragment:up,uv_pars_vertex:fp,uv_vertex:dp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:xp,backgroundCube_frag:vp,cube_vert:_p,cube_frag:yp,depth_vert:Mp,depth_frag:bp,distanceRGBA_vert:Sp,distanceRGBA_frag:wp,equirect_vert:Ep,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Ip,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:zp,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Yp,sprite_frag:Zp},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},mn={basic:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([ft.points,ft.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([ft.common,ft.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([ft.sprite,ft.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ze([ft.common,ft.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ze([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};mn.physical={uniforms:ze([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var or={r:0,b:0,g:0},xi=new on,jp=new re;function $p(s,t,e,n,i,r,a){let o=new zt(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function d(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function x(S){let _=!1,v=d(S);v===null?p(o,l):v&&v.isColor&&(p(v,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Yr)?(h===void 0&&(h=new Kt(new Ai(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:as(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(_.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(xi)),h.material.toneMapped=jt.getTransfer(v.colorSpace)!==ae,(u!==v||f!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Kt(new ri(2,2),new pe({name:"BackgroundMaterial",uniforms:as(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=jt.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,_){S.getRGB(or,Ah(s)),n.buffers.color.setClear(or.r,or.g,or.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:g}}function Jp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,A,L,I,D){let X=!1,B=u(I,L,A);r!==B&&(r=B,c(r.object)),X=m(y,I,L,D),X&&d(y,I,L,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(y,A,L,I),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,A,L){let I=L.wireframe===!0,D=n[y.id];D===void 0&&(D={},n[y.id]=D);let X=D[A.id];X===void 0&&(X={},D[A.id]=X);let B=X[I];return B===void 0&&(B=f(l()),X[I]=B),B}function f(y){let A=[],L=[],I=[];for(let D=0;D<e;D++)A[D]=0,L[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:I,object:y,attributes:{},index:null}}function m(y,A,L,I){let D=r.attributes,X=A.attributes,B=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let it=D[V],ht=X[V];if(ht===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),it===void 0||it.attribute!==ht||ht&&it.data!==ht.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function d(y,A,L,I){let D={},X=A.attributes,B=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let it=X[V];it===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));let ht={};ht.attribute=it,it&&it.data&&(ht.data=it.data),D[V]=ht,B++}r.attributes=D,r.attributesNum=B,r.index=I}function x(){let y=r.newAttributes;for(let A=0,L=y.length;A<L;A++)y[A]=0}function g(y){p(y,0)}function p(y,A){let L=r.newAttributes,I=r.enabledAttributes,D=r.attributeDivisors;L[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),D[y]!==A&&(s.vertexAttribDivisor(y,A),D[y]=A)}function S(){let y=r.newAttributes,A=r.enabledAttributes;for(let L=0,I=A.length;L<I;L++)A[L]!==y[L]&&(s.disableVertexAttribArray(L),A[L]=0)}function _(y,A,L,I,D,X,B){B===!0?s.vertexAttribIPointer(y,A,L,D,X):s.vertexAttribPointer(y,A,L,I,D,X)}function v(y,A,L,I){x();let D=I.attributes,X=L.getAttributes(),B=A.defaultAttributeValues;for(let Z in X){let V=X[Z];if(V.location>=0){let K=D[Z];if(K===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let it=K.normalized,ht=K.itemSize,St=t.get(K);if(St===void 0)continue;let dt=St.buffer,W=St.type,Q=St.bytesPerElement,ut=W===s.INT||W===s.UNSIGNED_INT||K.gpuType===Tl;if(K.isInterleavedBufferAttribute){let rt=K.data,Tt=rt.stride,Rt=K.offset;if(rt.isInstancedInterleavedBuffer){for(let xt=0;xt<V.locationSize;xt++)p(V.location+xt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let xt=0;xt<V.locationSize;xt++)g(V.location+xt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let xt=0;xt<V.locationSize;xt++)_(V.location+xt,ht/V.locationSize,W,it,Tt*Q,(Rt+ht/V.locationSize*xt)*Q,ut)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,K.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<V.locationSize;rt++)g(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let rt=0;rt<V.locationSize;rt++)_(V.location+rt,ht/V.locationSize,W,it,ht*Q,ht/V.locationSize*rt*Q,ut)}}else if(B!==void 0){let it=B[Z];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(V.location,it);break;case 3:s.vertexAttrib3fv(V.location,it);break;case 4:s.vertexAttrib4fv(V.location,it);break;default:s.vertexAttrib1fv(V.location,it)}}}}S()}function R(){C();for(let y in n){let A=n[y];for(let L in A){let I=A[L];for(let D in I)h(I[D].object),delete I[D];delete A[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let L in A){let I=A[L];for(let D in I)h(I[D].object),delete I[D];delete A[L]}delete n[y.id]}function b(y){for(let A in n){let L=n[A];if(L[y.id]===void 0)continue;let I=L[y.id];for(let D in I)h(I[D].object),delete I[D];delete L[y.id]}}function C(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function Kp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let d=0;d<u;d++)m+=h[d];e.update(m,n,1)}function l(c,h,u,f){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<c.length;d++)a(c[d],h[d],f[d]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x]*f[x];e.update(d,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==an&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let C=b===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Dn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==xn&&!C)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:d,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function tm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Pn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let d=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||d===null||d.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,_=S*4,v=p.clippingState||null;l.value=v,v=h(d,f,_,m);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,d){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,d!==!0||g===null){let p=m+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=m;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function em(s){let t=new WeakMap;function e(a,o){return o===uo?a.mapping=es:o===fo&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===uo||o===fo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Zo(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var jo=class extends Pr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ji=4,Cc=[.125,.215,.35,.446,.526,.582],bi=20,ja=new jo,Pc=new zt,$a=null,Ja=0,Ka=0,Qa=!1,_i=(1+Math.sqrt(5))/2,Yi=1/_i,Ic=[new k(-_i,Yi,0),new k(_i,Yi,0),new k(-Yi,0,_i),new k(Yi,0,_i),new k(0,_i,-Yi),new k(0,_i,Yi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Dr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ja,Ka),this._renderer.xr.enabled=Qa,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Fs,format:an,colorSpace:ai,depthBuffer:!1},i=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(r)),this._blurMaterial=im(r,t,e)}return i}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,i){let o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pc),h.toneMapping=_n,h.autoClear=!1;let m=new Fn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),d=new Kt(new Ai,m),x=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(Pc),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;lr(i,S*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(d,o),h.render(t,o)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===es||t.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ic[(i-r-1)%Ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bi-1),x=r/d,g=isFinite(r)?1+Math.floor(h*x):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);let p=[],S=0;for(let b=0;b<bi;++b){let C=b/x,M=Math.exp(-C*C/2);p.push(M),b===0?S+=M:b<g&&(S+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=d,f.mipInt.value=_-n;let v=this._sizeLods[i],R=3*v*(i>_-ji?i-_+ji:0),T=4*(this._cubeSize-v);lr(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,ja)}};function nm(s){let t=[],e=[],n=[],i=s,r=s-ji+1+Cc.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ji?l=Cc[a-s+ji-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,d=6,x=3,g=2,p=1,S=new Float32Array(x*d*m),_=new Float32Array(g*d*m),v=new Float32Array(p*d*m);for(let T=0;T<m;T++){let b=T%3*2/3-1,C=T>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];S.set(M,x*d*T),_.set(f,g*d*T);let y=[T,T,T,T,T,T];v.set(y,p*d*T)}let R=new ve;R.setAttribute("position",new Ht(S,x)),R.setAttribute("uv",new Ht(_,g)),R.setAttribute("faceIndex",new Ht(v,p)),t.push(R),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(s,t,e){let n=new Un(s,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function im(s,t,e){let n=new Float32Array(bi),i=new k(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Dc(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Uc(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function sm(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===uo||l===fo,h=l===es||l===ns;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Dr(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Dr(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function am(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let d in f.attributes)t.remove(f.attributes[d]);for(let d in f.morphAttributes){let x=f.morphAttributes[d];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER);let m=u.morphAttributes;for(let d in m){let x=m[d];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,d=u.attributes.position,x=0;if(m!==null){let S=m.array;x=m.version;for(let _=0,v=S.length;_<v;_+=3){let R=S[_+0],T=S[_+1],b=S[_+2];f.push(R,T,T,b,b,R)}}else if(d!==void 0){let S=d.array;x=d.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let R=_+0,T=_+1,b=_+2;f.push(R,T,T,b,b,R)}}else return;let g=new(Eh(f)?Cr:Rr)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function om(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){s.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,d){d!==0&&(s.drawElementsInstanced(n,m,r,f*a,d),e.update(m,n,d))}function h(f,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,d);let g=0;for(let p=0;p<d;p++)g+=m[p];e.update(g,n,1)}function u(f,m,d,x){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,d);let p=0;for(let S=0;S<d;S++)p+=m[S]*x[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cm(s,t,e){let n=new WeakMap,i=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],_=0;m===!0&&(_=1),d===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*u),b=new Ar(T,v,R,u);b.type=xn,b.needsUpdate=!0;let C=_*4;for(let y=0;y<u;y++){let A=g[y],L=p[y],I=S[y],D=v*R*4*y;for(let X=0;X<A.count;X++){let B=X*C;m===!0&&(i.fromBufferAttribute(A,X),T[D+B+0]=i.x,T[D+B+1]=i.y,T[D+B+2]=i.z,T[D+B+3]=0),d===!0&&(i.fromBufferAttribute(L,X),T[D+B+4]=i.x,T[D+B+5]=i.y,T[D+B+6]=i.z,T[D+B+7]=0),x===!0&&(i.fromBufferAttribute(I,X),T[D+B+8]=i.x,T[D+B+9]=i.y,T[D+B+10]=i.z,T[D+B+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new Qt(v,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let d=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",d),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function hm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ur=class extends qe{constructor(t,e,n,i,r,a,o,l,c,h=Ji){if(h!==Ji&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Ti),n===void 0&&h===ss&&(n=is),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ch=new qe,Nc=new Ur(1,1),Ph=new Ar,Ih=new qo,Lh=new Ir,zc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),kc=new Float32Array(4);function cs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=zc[i];if(r===void 0&&(r=new Float32Array(i),zc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function jr(s,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function um(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function fm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function dm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function pm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function mm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;kc.set(n),s.uniformMatrix2fv(this.addr,!1,kc),Ee(e,n)}}function gm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Bc.set(n),s.uniformMatrix3fv(this.addr,!1,Bc),Ee(e,n)}}function xm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Oc.set(n),s.uniformMatrix4fv(this.addr,!1,Oc),Ee(e,n)}}function vm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function ym(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function Mm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function bm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function wm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function Em(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function Tm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Nc.compareFunction=wh,r=Nc):r=Ch,e.setTexture2D(t||r,i)}function Am(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ih,i)}function Rm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lh,i)}function Cm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ph,i)}function Pm(s){switch(s){case 5126:return um;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return Sm;case 36295:return wm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Im(s,t){s.uniform1fv(this.addr,t)}function Lm(s,t){let e=cs(t,this.size,2);s.uniform2fv(this.addr,e)}function Dm(s,t){let e=cs(t,this.size,3);s.uniform3fv(this.addr,e)}function Um(s,t){let e=cs(t,this.size,4);s.uniform4fv(this.addr,e)}function Nm(s,t){let e=cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zm(s,t){let e=cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fm(s,t){let e=cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Om(s,t){s.uniform1iv(this.addr,t)}function Bm(s,t){s.uniform2iv(this.addr,t)}function km(s,t){s.uniform3iv(this.addr,t)}function Hm(s,t){s.uniform4iv(this.addr,t)}function Vm(s,t){s.uniform1uiv(this.addr,t)}function Gm(s,t){s.uniform2uiv(this.addr,t)}function Wm(s,t){s.uniform3uiv(this.addr,t)}function Xm(s,t){s.uniform4uiv(this.addr,t)}function qm(s,t,e){let n=this.cache,i=t.length,r=jr(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ch,r[a])}function Ym(s,t,e){let n=this.cache,i=t.length,r=jr(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ih,r[a])}function Zm(s,t,e){let n=this.cache,i=t.length,r=jr(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Lh,r[a])}function jm(s,t,e){let n=this.cache,i=t.length,r=jr(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ph,r[a])}function $m(s){switch(s){case 5126:return Im;case 35664:return Lm;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return zm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return jm}}var $o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pm(e.type)}},Jo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}},Ko=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},to=/(\w+)(\])?(\[|\.)?/g;function Hc(s,t){s.seq.push(t),s.map[t.id]=t}function Jm(s,t,e){let n=s.name,i=n.length;for(to.lastIndex=0;;){let r=to.exec(n),a=to.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Hc(e,c===void 0?new $o(o,s,t):new Jo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ko(o),Hc(e,u)),e=u}}}var Qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Jm(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Vc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Km=37297,Qm=0;function t0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Gc=new Vt;function e0(s){jt._getMatrix(Gc,jt.workingColorSpace,s);let t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Zr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+t0(s.getShaderSource(t),a)}else return i}function n0(s,t){let e=e0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(s,t){let e;switch(t){case Tu:e="Linear";break;case Au:e="Reinhard";break;case Ru:e="Cineon";break;case Cu:e="ACESFilmic";break;case Iu:e="AgX";break;case Lu:e="Neutral";break;case Pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cr=new k;function s0(){jt.getLuminanceCoefficients(cr);let s=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function a0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Cs(s){return s!==""}function Xc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(s){return s.replace(l0,h0)}var c0=new Map;function h0(s,t){let e=Gt[t];if(e===void 0){let n=c0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qo(e)}var u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(u0,f0)}function f0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function d0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function g0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Eu:t="ENVMAP_BLENDING_ADD";break}return t}function x0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v0(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=d0(e),c=p0(e),h=m0(e),u=g0(e),f=x0(e),m=r0(e),d=a0(r),x=i.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Cs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(g=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Gt.tonemapping_pars_fragment:"",e.toneMapping!==_n?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Qo(a),a=Xc(a,e),a=qc(a,e),o=Qo(o),o=Xc(o,e),o=qc(o,e),a=Yc(a),o=Yc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=S+g+a,v=S+p+o,R=Vc(i,i.VERTEX_SHADER,_),T=Vc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function b(A){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(T).trim(),X=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,T);else{let Z=Wc(i,R,"vertex"),V=Wc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+Z+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||D==="")&&(B=!1);B&&(A.diagnostics={runnable:X,programLog:L,vertexShader:{log:I,prefix:g},fragmentShader:{log:D,prefix:p}})}i.deleteShader(R),i.deleteShader(T),C=new Qi(i,x),M=o0(i,x)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Km)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var _0=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new el(t),e.set(t,n)),n}},el=class{constructor(t){this.id=_0++,this.code=t,this.usedTimes=0}};function y0(s,t,e,n,i,r,a){let o=new Ls,l=new tl,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,A,L,I){let D=L.fog,X=I.geometry,B=M.isMeshStandardMaterial?L.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),V=Z&&Z.mapping===Yr?Z.image.height:null,K=d[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=it!==void 0?it.length:0,St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let dt,W,Q,ut;if(K){let Jt=mn[K];dt=Jt.vertexShader,W=Jt.fragmentShader}else dt=M.vertexShader,W=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),ut=l.getFragmentShaderID(M);let rt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Rt=I.isInstancedMesh===!0,xt=I.isBatchedMesh===!0,Wt=!!M.map,Bt=!!M.matcap,ee=!!Z,N=!!M.aoMap,fe=!!M.lightMap,Ut=!!M.bumpMap,Ft=!!M.normalMap,Ct=!!M.displacementMap,ne=!!M.emissiveMap,Mt=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,G=M.clearcoat>0,$=M.dispersion>0,et=M.iridescence>0,J=M.sheen>0,st=M.transmission>0,H=w&&!!M.anisotropyMap,at=G&&!!M.clearcoatMap,Pt=G&&!!M.clearcoatNormalMap,nt=G&&!!M.clearcoatRoughnessMap,mt=et&&!!M.iridescenceMap,wt=et&&!!M.iridescenceThicknessMap,It=J&&!!M.sheenColorMap,vt=J&&!!M.sheenRoughnessMap,kt=!!M.specularMap,Lt=!!M.specularColorMap,qt=!!M.specularIntensityMap,U=st&&!!M.transmissionMap,ct=st&&!!M.thicknessMap,j=!!M.gradientMap,tt=!!M.alphaMap,gt=M.alphaTest>0,pt=!!M.alphaHash,Nt=!!M.extensions,oe=_n;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(oe=s.toneMapping);let be={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:dt,fragmentShader:W,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:xt,batchingColor:xt&&I._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&I.instanceColor!==null,instancingMorph:Rt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ai,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:Bt,envMap:ee,envMapMode:ee&&Z.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:fe,bumpMap:Ut,normalMap:Ft,displacementMap:f&&Ct,emissiveMap:ne,normalMapObjectSpace:Ft&&M.normalMapType===Fu,normalMapTangentSpace:Ft&&M.normalMapType===zu,metalnessMap:Mt,roughnessMap:P,anisotropy:w,anisotropyMap:H,clearcoat:G,clearcoatMap:at,clearcoatNormalMap:Pt,clearcoatRoughnessMap:nt,dispersion:$,iridescence:et,iridescenceMap:mt,iridescenceThicknessMap:wt,sheen:J,sheenColorMap:It,sheenRoughnessMap:vt,specularMap:kt,specularColorMap:Lt,specularIntensityMap:qt,transmission:st,transmissionMap:U,thicknessMap:ct,gradientMap:j,opaque:M.transparent===!1&&M.blending===ei&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:pt,combine:M.combine,mapUv:Wt&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:fe&&x(M.lightMap.channel),bumpMapUv:Ut&&x(M.bumpMap.channel),normalMapUv:Ft&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:ne&&x(M.emissiveMap.channel),metalnessMapUv:Mt&&x(M.metalnessMap.channel),roughnessMapUv:P&&x(M.roughnessMap.channel),anisotropyMapUv:H&&x(M.anisotropyMap.channel),clearcoatMapUv:at&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(M.sheenRoughnessMap.channel),specularMapUv:kt&&x(M.specularMap.channel),specularColorMapUv:Lt&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:tt&&x(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ft||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(Wt||tt),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:St,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)y.push(A),y.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(S(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=d[M.type],A;if(y){let L=mn[y];A=hf.clone(L.uniforms)}else A=M.uniforms;return A}function R(M,y){let A;for(let L=0,I=h.length;L<I;L++){let D=h[L];if(D.cacheKey===y){A=D,++A.usedTimes;break}}return A===void 0&&(A=new v0(s,y,M,r),h.push(A)),A}function T(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:C}}function M0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function b0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $c(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,m,d,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:d,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=d,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,f,m,d,x,g){let p=a(u,f,m,d,x,g);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(u,f,m,d,x,g){let p=a(u,f,m,d,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||b0),n.length>1&&n.sort(f||jc),i.length>1&&i.sort(f||jc)}function h(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function S0(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new $c,s.set(n,[a])):i>=r.length?(a=new $c,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function w0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new zt};break;case"SpotLight":e={position:new k,direction:new k,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function E0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var T0=0;function A0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function R0(s){let t=new w0,e=E0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new re,a=new re;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,d=0,x=0,g=0,p=0,S=0,_=0,v=0,R=0,T=0,b=0;c.sort(A0);for(let M=0,y=c.length;M<y;M++){let A=c[M],L=A.color,I=A.intensity,D=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=L.r*I,u+=L.g*I,f+=L.b*I;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],I);b++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=A.shadow.matrix,S++}n.directional[m]=B,m++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(L).multiplyScalar(I),B.distance=D,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[x]=B;let Z=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,Z.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,A.castShadow){let V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=X,v++}x++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(L).multiplyScalar(I),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=B,g++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[d]=V,n.pointShadowMap[d]=X,n.pointShadowMatrix[d]=A.shadow.matrix,_++}n.point[d]=B,d++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(I),B.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==m||C.pointLength!==d||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=d,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,C.directionalLength=m,C.pointLength=d,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,n.version=T0++)}function l(c,h){let u=0,f=0,m=0,d=0,x=0,g=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Jc(s){let t=new R0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function C0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Jc(s),t.set(i,[o])):r>=a.length?(o=new Jc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var nl=class extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},il=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function L0(s,t,e){let n=new Lr,i=new Qt,r=new Qt,a=new xe,o=new nl({depthPacking:Nu}),l=new il,c={},h=e.maxTextureSize,u={[ni]:Ue,[Ue]:ni,[rn]:rn},f=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:P0,fragmentShader:I0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let d=new ve;d.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let p=this.type;this.render=function(T,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ti),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==Cn&&this.type===Cn,D=p===Cn&&this.type!==Cn;for(let X=0,B=T.length;X<B;X++){let Z=T[X],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let K=V.getFrameExtents();if(i.multiply(K),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||I===!0||D===!0){let ht=this.type!==Cn?{minFilter:Xe,magFilter:Xe}:{};V.map!==null&&V.map.dispose(),V.map=new Un(i.x,i.y,ht),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let it=V.getViewportCount();for(let ht=0;ht<it;ht++){let St=V.getViewport(ht);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),L.viewport(a),V.updateMatrices(Z,ht),n=V.getFrustum(),v(b,C,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Cn&&S(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,A)};function S(T,b){let C=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,C,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,C,m,x,null)}function _(T,b,C,M){let y=null,A=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let L=y.uuid,I=b.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let X=D[I];X===void 0&&(X=y.clone(),D[I]=X,b.addEventListener("dispose",R)),y=X}if(y.visible=b.visible,y.wireframe=b.wireframe,M===Cn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=C}return y}function v(T,b,C,M,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Cn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let I=t.update(T),D=T.material;if(Array.isArray(D)){let X=I.groups;for(let B=0,Z=X.length;B<Z;B++){let V=X[B],K=D[V.materialIndex];if(K&&K.visible){let it=_(T,K,M,y);T.onBeforeShadow(s,T,b,C,I,it,V),s.renderBufferDirect(C,null,I,it,T,V),T.onAfterShadow(s,T,b,C,I,it,V)}}}else if(D.visible){let X=_(T,D,M,y);T.onBeforeShadow(s,T,b,C,I,X,null),s.renderBufferDirect(C,null,I,X,T,null),T.onAfterShadow(s,T,b,C,I,X,null)}}let L=T.children;for(let I=0,D=L.length;I<D;I++)v(L[I],b,C,M,y)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let M=c[C],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var D0={[so]:ro,[ao]:co,[oo]:ho,[ts]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:ts};function U0(s,t){function e(){let U=!1,ct=new xe,j=null,tt=new xe(0,0,0,0);return{setMask:function(gt){j!==gt&&!U&&(s.colorMask(gt,gt,gt,gt),j=gt)},setLocked:function(gt){U=gt},setClear:function(gt,pt,Nt,oe,be){be===!0&&(gt*=oe,pt*=oe,Nt*=oe),ct.set(gt,pt,Nt,oe),tt.equals(ct)===!1&&(s.clearColor(gt,pt,Nt,oe),tt.copy(ct))},reset:function(){U=!1,j=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,j=null,tt=null,gt=null;return{setReversed:function(pt){if(ct!==pt){let Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let oe=gt;gt=null,this.setClear(oe)}ct=pt},getReversed:function(){return ct},setTest:function(pt){pt?rt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(pt){j!==pt&&!U&&(s.depthMask(pt),j=pt)},setFunc:function(pt){if(ct&&(pt=D0[pt]),tt!==pt){switch(pt){case so:s.depthFunc(s.NEVER);break;case ro:s.depthFunc(s.ALWAYS);break;case ao:s.depthFunc(s.LESS);break;case ts:s.depthFunc(s.LEQUAL);break;case oo:s.depthFunc(s.EQUAL);break;case lo:s.depthFunc(s.GEQUAL);break;case co:s.depthFunc(s.GREATER);break;case ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=pt}},setLocked:function(pt){U=pt},setClear:function(pt){gt!==pt&&(ct&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){U=!1,j=null,tt=null,gt=null,ct=!1}}}function i(){let U=!1,ct=null,j=null,tt=null,gt=null,pt=null,Nt=null,oe=null,be=null;return{setTest:function(Jt){U||(Jt?rt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Jt){ct!==Jt&&!U&&(s.stencilMask(Jt),ct=Jt)},setFunc:function(Jt,Oe,Se){(j!==Jt||tt!==Oe||gt!==Se)&&(s.stencilFunc(Jt,Oe,Se),j=Jt,tt=Oe,gt=Se)},setOp:function(Jt,Oe,Se){(pt!==Jt||Nt!==Oe||oe!==Se)&&(s.stencilOp(Jt,Oe,Se),pt=Jt,Nt=Oe,oe=Se)},setLocked:function(Jt){U=Jt},setClear:function(Jt){be!==Jt&&(s.clearStencil(Jt),be=Jt)},reset:function(){U=!1,ct=null,j=null,tt=null,gt=null,pt=null,Nt=null,oe=null,be=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,m=[],d=null,x=!1,g=null,p=null,S=null,_=null,v=null,R=null,T=null,b=new zt(0,0,0),C=0,M=!1,y=null,A=null,L=null,I=null,D=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=Z>=2);let K=null,it={},ht=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),dt=new xe().fromArray(ht),W=new xe().fromArray(St);function Q(U,ct,j,tt){let gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(U,pt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<j;Nt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ct+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}let ut={};ut[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(ts),Ut(!1),Ft(tc),rt(s.CULL_FACE),N(ti);function rt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Tt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Rt(U,ct){return u[U]!==ct?(s.bindFramebuffer(U,ct),u[U]=ct,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(U,ct){let j=m,tt=!1;if(U){j=f.get(ct),j===void 0&&(j=[],f.set(ct,j));let gt=U.textures;if(j.length!==gt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Nt=gt.length;pt<Nt;pt++)j[pt]=s.COLOR_ATTACHMENT0+pt;j.length=gt.length,tt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,tt=!0);tt&&s.drawBuffers(j)}function Wt(U){return d!==U?(s.useProgram(U),d=U,!0):!1}let Bt={[yi]:s.FUNC_ADD,[ou]:s.FUNC_SUBTRACT,[lu]:s.FUNC_REVERSE_SUBTRACT};Bt[cu]=s.MIN,Bt[hu]=s.MAX;let ee={[uu]:s.ZERO,[fu]:s.ONE,[du]:s.SRC_COLOR,[no]:s.SRC_ALPHA,[_u]:s.SRC_ALPHA_SATURATE,[xu]:s.DST_COLOR,[mu]:s.DST_ALPHA,[pu]:s.ONE_MINUS_SRC_COLOR,[io]:s.ONE_MINUS_SRC_ALPHA,[vu]:s.ONE_MINUS_DST_COLOR,[gu]:s.ONE_MINUS_DST_ALPHA,[yu]:s.CONSTANT_COLOR,[Mu]:s.ONE_MINUS_CONSTANT_COLOR,[bu]:s.CONSTANT_ALPHA,[Su]:s.ONE_MINUS_CONSTANT_ALPHA};function N(U,ct,j,tt,gt,pt,Nt,oe,be,Jt){if(U===ti){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(rt(s.BLEND),x=!0),U!==au){if(U!==g||Jt!==M){if((p!==yi||v!==yi)&&(s.blendEquation(s.FUNC_ADD),p=yi,v=yi),Jt)switch(U){case ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.ONE,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,_=null,R=null,T=null,b.set(0,0,0),C=0,g=U,M=Jt}return}gt=gt||ct,pt=pt||j,Nt=Nt||tt,(ct!==p||gt!==v)&&(s.blendEquationSeparate(Bt[ct],Bt[gt]),p=ct,v=gt),(j!==S||tt!==_||pt!==R||Nt!==T)&&(s.blendFuncSeparate(ee[j],ee[tt],ee[pt],ee[Nt]),S=j,_=tt,R=pt,T=Nt),(oe.equals(b)===!1||be!==C)&&(s.blendColor(oe.r,oe.g,oe.b,be),b.copy(oe),C=be),g=U,M=!1}function fe(U,ct){U.side===rn?Tt(s.CULL_FACE):rt(s.CULL_FACE);let j=U.side===Ue;ct&&(j=!j),Ut(j),U.blending===ei&&U.transparent===!1?N(ti):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let tt=U.stencilWrite;o.setTest(tt),tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function Ft(U){U!==iu?(rt(s.CULL_FACE),U!==A&&(U===tc?s.cullFace(s.BACK):U===su?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),A=U}function Ct(U){U!==L&&(B&&s.lineWidth(U),L=U)}function ne(U,ct,j){U?(rt(s.POLYGON_OFFSET_FILL),(I!==ct||D!==j)&&(s.polygonOffset(ct,j),I=ct,D=j)):Tt(s.POLYGON_OFFSET_FILL)}function Mt(U){U?rt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function P(U){U===void 0&&(U=s.TEXTURE0+X-1),K!==U&&(s.activeTexture(U),K=U)}function w(U,ct,j){j===void 0&&(K===null?j=s.TEXTURE0+X-1:j=K);let tt=it[j];tt===void 0&&(tt={type:void 0,texture:void 0},it[j]=tt),(tt.type!==U||tt.texture!==ct)&&(K!==j&&(s.activeTexture(j),K=j),s.bindTexture(U,ct||ut[U]),tt.type=U,tt.texture=ct)}function G(){let U=it[K];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){dt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function vt(U){W.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function kt(U,ct){let j=c.get(ct);j===void 0&&(j=new WeakMap,c.set(ct,j));let tt=j.get(U);tt===void 0&&(tt=s.getUniformBlockIndex(ct,U.name),j.set(U,tt))}function Lt(U,ct){let tt=c.get(ct).get(U);l.get(ct)!==tt&&(s.uniformBlockBinding(ct,tt,U.__bindingPointIndex),l.set(ct,tt))}function qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,it={},u={},f=new WeakMap,m=[],d=null,x=!1,g=null,p=null,S=null,_=null,v=null,R=null,T=null,b=new zt(0,0,0),C=0,M=!1,y=null,A=null,L=null,I=null,D=null,dt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Rt,drawBuffers:xt,useProgram:Wt,setBlending:N,setMaterial:fe,setFlipSided:Ut,setCullFace:Ft,setLineWidth:Ct,setPolygonOffset:ne,setScissorTest:Mt,activeTexture:P,bindTexture:w,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:mt,texImage3D:wt,updateUBOMapping:kt,uniformBlockBinding:Lt,texStorage2D:Pt,texStorage3D:nt,texSubImage2D:J,texSubImage3D:st,compressedTexSubImage2D:H,compressedTexSubImage3D:at,scissor:It,viewport:vt,reset:qt}}function Kc(s,t,e,n){let i=N0(n);switch(e){case vh:return s*t;case yh:return s*t;case Mh:return s*t*2;case Cl:return s*t/i.components*i.byteLength;case Pl:return s*t/i.components*i.byteLength;case bh:return s*t*2/i.components*i.byteLength;case Il:return s*t*2/i.components*i.byteLength;case _h:return s*t*3/i.components*i.byteLength;case an:return s*t*4/i.components*i.byteLength;case Ll:return s*t*4/i.components*i.byteLength;case vr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yr:case Mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:case _o:return Math.max(s,16)*Math.max(t,8)/4;case go:case vo:return Math.max(s,8)*Math.max(t,8)/2;case yo:case Mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case br:case Fo:case Oo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sh:case Bo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ko:case Ho:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N0(s){switch(s){case Dn:case mh:return{byteLength:1,components:1};case Is:case gh:case Fs:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Ti:case Tl:case xn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function z0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,w){return m?new OffscreenCanvas(P,w):Er("canvas")}function x(P,w,G){let $=1,et=Mt(P);if((et.width>G||et.height>G)&&($=G/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor($*et.width),st=Math.floor($*et.height);u===void 0&&(u=d(J,st));let H=w?d(J,st):u;return H.width=J,H.height=st,H.getContext("2d").drawImage(P,0,0,J,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+st+")."),H}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(P,w,G,$,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),w===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),w===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){let st=et?Zr:jt.getTransfer($);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=st===ae?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(P,w){let G;return P?w===null||w===Ti||w===is?G=s.DEPTH24_STENCIL8:w===xn?G=s.DEPTH32F_STENCIL8:w===Is&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ti||w===is?G=s.DEPTH_COMPONENT24:w===xn?G=s.DEPTH_COMPONENT32F:w===Is&&(G=s.DEPTH_COMPONENT16),G}function R(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xe&&P.minFilter!==gn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){let w=P.target;w.removeEventListener("dispose",T),C(w),w.isVideoTexture&&h.delete(w)}function b(P){let w=P.target;w.removeEventListener("dispose",b),y(w)}function C(P){let w=n.get(P);if(w.__webglInit===void 0)return;let G=P.source,$=f.get(G);if($){let et=$[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(P),Object.keys($).length===0&&f.delete(G)}n.remove(P)}function M(P){let w=n.get(P);s.deleteTexture(w.__webglTexture);let G=P.source,$=f.get(G);delete $[w.__cacheKey],a.memory.textures--}function y(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let et=0;et<w.__webglFramebuffer[$].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[$][et]);else s.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)s.deleteFramebuffer(w.__webglFramebuffer[$]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=P.textures;for(let $=0,et=G.length;$<et;$++){let J=n.get(G[$]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(P)}let A=0;function L(){A=0}function I(){let P=A;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),A+=1,P}function D(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function X(P,w){let G=n.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(G,P,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function B(P,w){let G=n.get(P);if(P.version>0&&G.__version!==P.version){W(G,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function Z(P,w){let G=n.get(P);if(P.version>0&&G.__version!==P.version){W(G,P,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function V(P,w){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}let K={[po]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[mo]:s.MIRRORED_REPEAT},it={[Xe]:s.NEAREST,[Du]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Ea]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},ht={[Ou]:s.NEVER,[Wu]:s.ALWAYS,[Bu]:s.LESS,[wh]:s.LEQUAL,[ku]:s.EQUAL,[Gu]:s.GEQUAL,[Hu]:s.GREATER,[Vu]:s.NOTEQUAL};function St(P,w){if(w.type===xn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===gn||w.magFilter===Ea||w.magFilter===Gs||w.magFilter===wi||w.minFilter===gn||w.minFilter===Ea||w.minFilter===Gs||w.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,K[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,K[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,K[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,it[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,it[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xe||w.minFilter!==Gs&&w.minFilter!==wi||w.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function dt(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",T));let $=w.source,et=f.get($);et===void 0&&(et={},f.set($,et));let J=D(w);if(J!==P.__cacheKey){et[J]===void 0&&(et[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[J].usedTimes++;let st=et[P.__cacheKey];st!==void 0&&(et[P.__cacheKey].usedTimes--,st.usedTimes===0&&M(w)),P.__cacheKey=J,P.__webglTexture=et[J].texture}return G}function W(P,w,G){let $=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=s.TEXTURE_3D);let et=dt(P,w),J=w.source;e.bindTexture($,P.__webglTexture,s.TEXTURE0+G);let st=n.get(J);if(J.version!==st.__version||et===!0){e.activeTexture(s.TEXTURE0+G);let H=jt.getPrimaries(jt.workingColorSpace),at=w.colorSpace===Qn?null:jt.getPrimaries(w.colorSpace),Pt=w.colorSpace===Qn||H===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let nt=x(w.image,!1,i.maxTextureSize);nt=ne(w,nt);let mt=r.convert(w.format,w.colorSpace),wt=r.convert(w.type),It=_(w.internalFormat,mt,wt,w.colorSpace,w.isVideoTexture);St($,w);let vt,kt=w.mipmaps,Lt=w.isVideoTexture!==!0,qt=st.__version===void 0||et===!0,U=J.dataReady,ct=R(w,nt);if(w.isDepthTexture)It=v(w.format===ss,w.type),qt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,It,nt.width,nt.height,0,mt,wt,null));else if(w.isDataTexture)if(kt.length>0){Lt&&qt&&e.texStorage2D(s.TEXTURE_2D,ct,It,kt[0].width,kt[0].height);for(let j=0,tt=kt.length;j<tt;j++)vt=kt[j],Lt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,vt.width,vt.height,mt,wt,vt.data):e.texImage2D(s.TEXTURE_2D,j,It,vt.width,vt.height,0,mt,wt,vt.data);w.generateMipmaps=!1}else Lt?(qt&&e.texStorage2D(s.TEXTURE_2D,ct,It,nt.width,nt.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,wt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,It,nt.width,nt.height,0,mt,wt,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Lt&&qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,It,kt[0].width,kt[0].height,nt.depth);for(let j=0,tt=kt.length;j<tt;j++)if(vt=kt[j],w.format!==an)if(mt!==null)if(Lt){if(U)if(w.layerUpdates.size>0){let gt=Kc(vt.width,vt.height,w.format,w.type);for(let pt of w.layerUpdates){let Nt=vt.data.subarray(pt*gt/vt.data.BYTES_PER_ELEMENT,(pt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,pt,vt.width,vt.height,1,mt,Nt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,nt.depth,mt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,It,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,nt.depth,mt,wt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,It,vt.width,vt.height,nt.depth,0,mt,wt,vt.data)}else{Lt&&qt&&e.texStorage2D(s.TEXTURE_2D,ct,It,kt[0].width,kt[0].height);for(let j=0,tt=kt.length;j<tt;j++)vt=kt[j],w.format!==an?mt!==null?Lt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,vt.width,vt.height,mt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,It,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,vt.width,vt.height,mt,wt,vt.data):e.texImage2D(s.TEXTURE_2D,j,It,vt.width,vt.height,0,mt,wt,vt.data)}else if(w.isDataArrayTexture)if(Lt){if(qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,It,nt.width,nt.height,nt.depth),U)if(w.layerUpdates.size>0){let j=Kc(nt.width,nt.height,w.format,w.type);for(let tt of w.layerUpdates){let gt=nt.data.subarray(tt*j/nt.data.BYTES_PER_ELEMENT,(tt+1)*j/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,mt,wt,gt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,wt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,mt,wt,nt.data);else if(w.isData3DTexture)Lt?(qt&&e.texStorage3D(s.TEXTURE_3D,ct,It,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,wt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,mt,wt,nt.data);else if(w.isFramebufferTexture){if(qt)if(Lt)e.texStorage2D(s.TEXTURE_2D,ct,It,nt.width,nt.height);else{let j=nt.width,tt=nt.height;for(let gt=0;gt<ct;gt++)e.texImage2D(s.TEXTURE_2D,gt,It,j,tt,0,mt,wt,null),j>>=1,tt>>=1}}else if(kt.length>0){if(Lt&&qt){let j=Mt(kt[0]);e.texStorage2D(s.TEXTURE_2D,ct,It,j.width,j.height)}for(let j=0,tt=kt.length;j<tt;j++)vt=kt[j],Lt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,mt,wt,vt):e.texImage2D(s.TEXTURE_2D,j,It,mt,wt,vt);w.generateMipmaps=!1}else if(Lt){if(qt){let j=Mt(nt);e.texStorage2D(s.TEXTURE_2D,ct,It,j.width,j.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,wt,nt)}else e.texImage2D(s.TEXTURE_2D,0,It,mt,wt,nt);g(w)&&p($),st.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,G){if(w.image.length!==6)return;let $=dt(P,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let J=n.get(et);if(et.version!==J.__version||$===!0){e.activeTexture(s.TEXTURE0+G);let st=jt.getPrimaries(jt.workingColorSpace),H=w.colorSpace===Qn?null:jt.getPrimaries(w.colorSpace),at=w.colorSpace===Qn||st===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let tt=0;tt<6;tt++)!Pt&&!nt?mt[tt]=x(w.image[tt],!0,i.maxCubemapSize):mt[tt]=nt?w.image[tt].image:w.image[tt],mt[tt]=ne(w,mt[tt]);let wt=mt[0],It=r.convert(w.format,w.colorSpace),vt=r.convert(w.type),kt=_(w.internalFormat,It,vt,w.colorSpace),Lt=w.isVideoTexture!==!0,qt=J.__version===void 0||$===!0,U=et.dataReady,ct=R(w,wt);St(s.TEXTURE_CUBE_MAP,w);let j;if(Pt){Lt&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,kt,wt.width,wt.height);for(let tt=0;tt<6;tt++){j=mt[tt].mipmaps;for(let gt=0;gt<j.length;gt++){let pt=j[gt];w.format!==an?It!==null?Lt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,pt.width,pt.height,It,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,kt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,pt.width,pt.height,It,vt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,kt,pt.width,pt.height,0,It,vt,pt.data)}}}else{if(j=w.mipmaps,Lt&&qt){j.length>0&&ct++;let tt=Mt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){Lt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,mt[tt].width,mt[tt].height,It,vt,mt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,mt[tt].width,mt[tt].height,0,It,vt,mt[tt].data);for(let gt=0;gt<j.length;gt++){let Nt=j[gt].image[tt].image;Lt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Nt.width,Nt.height,It,vt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,kt,Nt.width,Nt.height,0,It,vt,Nt.data)}}else{Lt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,vt,mt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,It,vt,mt[tt]);for(let gt=0;gt<j.length;gt++){let pt=j[gt];Lt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,It,vt,pt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,kt,It,vt,pt.image[tt])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),J.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ut(P,w,G,$,et,J){let st=r.convert(G.format,G.colorSpace),H=r.convert(G.type),at=_(G.internalFormat,st,H,G.colorSpace),Pt=n.get(w),nt=n.get(G);if(nt.__renderTarget=w,!Pt.__hasExternalTextures){let mt=Math.max(1,w.width>>J),wt=Math.max(1,w.height>>J);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,J,at,mt,wt,w.depth,0,st,H,null):e.texImage2D(et,J,at,mt,wt,0,st,H,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Ft(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,et,nt.__webglTexture,0,Ut(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,et,nt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(P,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){let $=w.depthTexture,et=$&&$.isDepthTexture?$.type:null,J=v(w.stencilBuffer,et),st=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=Ut(w);Ft(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H,J,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,H,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,P)}else{let $=w.textures;for(let et=0;et<$.length;et++){let J=$[et],st=r.convert(J.format,J.colorSpace),H=r.convert(J.type),at=_(J.internalFormat,st,H,J.colorSpace),Pt=Ut(w);G&&Ft(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,at,w.width,w.height):Ft(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,at,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,at,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(w.depthTexture);$.__renderTarget=w,(!$.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let et=$.__webglTexture,J=Ut(w);if(w.depthTexture.format===Ji)Ft(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(w.depthTexture.format===ss)Ft(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Rt(P){let w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=$}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Tt(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=s.createRenderbuffer(),rt(w.__webglDepthbuffer[$],P,!1);else{let et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),rt(w.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(P,w,G){let $=n.get(P);w!==void 0&&ut($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Rt(P)}function Wt(P){let w=P.texture,G=n.get(P),$=n.get(w);P.addEventListener("dispose",b);let et=P.textures,J=P.isWebGLCubeRenderTarget===!0,st=et.length>1;if(st||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=w.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let H=0;H<6;H++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[H]=[];for(let at=0;at<w.mipmaps.length;at++)G.__webglFramebuffer[H][at]=s.createFramebuffer()}else G.__webglFramebuffer[H]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let H=0;H<w.mipmaps.length;H++)G.__webglFramebuffer[H]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(st)for(let H=0,at=et.length;H<at;H++){let Pt=n.get(et[H]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Ft(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let H=0;H<et.length;H++){let at=et[H];G.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[H]);let Pt=r.convert(at.format,at.colorSpace),nt=r.convert(at.type),mt=_(at.internalFormat,Pt,nt,at.colorSpace,P.isXRRenderTarget===!0),wt=Ut(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,mt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,G.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),St(s.TEXTURE_CUBE_MAP,w);for(let H=0;H<6;H++)if(w.mipmaps&&w.mipmaps.length>0)for(let at=0;at<w.mipmaps.length;at++)ut(G.__webglFramebuffer[H][at],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,at);else ut(G.__webglFramebuffer[H],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);g(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let H=0,at=et.length;H<at;H++){let Pt=et[H],nt=n.get(Pt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),St(s.TEXTURE_2D,Pt),ut(G.__webglFramebuffer,P,Pt,s.COLOR_ATTACHMENT0+H,s.TEXTURE_2D,0),g(Pt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let H=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(H=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(H,$.__webglTexture),St(H,w),w.mipmaps&&w.mipmaps.length>0)for(let at=0;at<w.mipmaps.length;at++)ut(G.__webglFramebuffer[at],P,w,s.COLOR_ATTACHMENT0,H,at);else ut(G.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,H,0);g(w)&&p(H),e.unbindTexture()}P.depthBuffer&&Rt(P)}function Bt(P){let w=P.textures;for(let G=0,$=w.length;G<$;G++){let et=w[G];if(g(et)){let J=S(P),st=n.get(et).__webglTexture;e.bindTexture(J,st),p(J),e.unbindTexture()}}}let ee=[],N=[];function fe(P){if(P.samples>0){if(Ft(P)===!1){let w=P.textures,G=P.width,$=P.height,et=s.COLOR_BUFFER_BIT,J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=n.get(P),H=w.length>1;if(H)for(let at=0;at<w.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<w.length;at++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),H){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let Pt=n.get(w[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,et,s.NEAREST),l===!0&&(ee.length=0,N.length=0,ee.push(s.COLOR_ATTACHMENT0+at),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(J),N.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let at=0;at<w.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let Pt=n.get(w[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ut(P){return Math.min(i.maxSamples,P.samples)}function Ft(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function ne(P,w){let G=P.colorSpace,$=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ai&&G!==Qn&&(jt.getTransfer(G)===ae?($!==an||et!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=xt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ft}function F0(s,t){function e(n,i=Qn){let r,a=jt.getTransfer(i);if(n===Dn)return s.UNSIGNED_BYTE;if(n===Al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return s.BYTE;if(n===gh)return s.SHORT;if(n===Is)return s.UNSIGNED_SHORT;if(n===Tl)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===Fs)return s.HALF_FLOAT;if(n===vh)return s.ALPHA;if(n===_h)return s.RGB;if(n===an)return s.RGBA;if(n===yh)return s.LUMINANCE;if(n===Mh)return s.LUMINANCE_ALPHA;if(n===Ji)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===Cl)return s.RED;if(n===Pl)return s.RED_INTEGER;if(n===bh)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Ll)return s.RGBA_INTEGER;if(n===vr||n===_r||n===yr||n===Mr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===xo||n===vo||n===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Fo||n===Oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===Bo||n===ko||n===Ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var sl=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},vn=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},O0={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,d=.005;c.inputState.pinching&&f>m+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new qe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pe({vertexShader:B0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends ii{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,d=null,x=new rl,g=e.getContextAttributes(),p=null,S=null,_=[],v=[],R=new Qt,T=null,b=new Fe;b.viewport=new xe;let C=new Fe;C.viewport=new xe;let M=[b,C],y=new sl,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=_[W];return Q===void 0&&(Q=new Ps,_[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=_[W];return Q===void 0&&(Q=new Ps,_[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=_[W];return Q===void 0&&(Q=new Ps,_[W]=Q),Q.getHandSpace()};function I(W){let Q=v.indexOf(W.inputSource);if(Q===-1)return;let ut=_[Q];ut!==void 0&&(ut.update(W.inputSource,W.frame,c||a),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function D(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",X);for(let W=0;W<_.length;W++){let Q=v[W];Q!==null&&(v[W]=null,_[W].disconnect(Q))}A=null,L=null,x.reset(),t.setRenderTarget(p),m=null,f=null,u=null,i=null,S=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",D),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Un(m.framebufferWidth,m.framebufferHeight,{format:an,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ut=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?ss:Ji,ut=g.stencil?is:Ti);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Un(f.textureWidth,f.textureHeight,{format:an,type:Dn,depthTexture:new Ur(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(W){for(let Q=0;Q<W.removed.length;Q++){let ut=W.removed[Q],rt=v.indexOf(ut);rt>=0&&(v[rt]=null,_[rt].disconnect(ut))}for(let Q=0;Q<W.added.length;Q++){let ut=W.added[Q],rt=v.indexOf(ut);if(rt===-1){for(let Rt=0;Rt<_.length;Rt++)if(Rt>=v.length){v.push(ut),rt=Rt;break}else if(v[Rt]===null){v[Rt]=ut,rt=Rt;break}if(rt===-1)break}let Tt=_[rt];Tt&&Tt.connect(ut)}}let B=new k,Z=new k;function V(W,Q,ut){B.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ut.matrixWorld);let rt=B.distanceTo(Z),Tt=Q.projectionMatrix.elements,Rt=ut.projectionMatrix.elements,xt=Tt[14]/(Tt[10]-1),Wt=Tt[14]/(Tt[10]+1),Bt=(Tt[9]+1)/Tt[5],ee=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],fe=(Rt[8]+1)/Rt[0],Ut=xt*N,Ft=xt*fe,Ct=rt/(-N+fe),ne=Ct*-N;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(Ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Mt=xt+Ct,P=Wt+Ct,w=Ut-ne,G=Ft+(rt-ne),$=Bt*Wt/P*Mt,et=ee*Wt/P*Mt;W.projectionMatrix.makePerspective(w,G,$,et,Mt,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function K(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let Q=W.near,ut=W.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),y.near=C.near=b.near=Q,y.far=C.far=b.far=ut,(A!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,L=y.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,y.layers.mask=b.layers.mask|C.layers.mask;let rt=W.parent,Tt=y.cameras;K(y,rt);for(let Rt=0;Rt<Tt.length;Rt++)K(Tt[Rt],rt);Tt.length===2?V(y,b,C):y.projectionMatrix.copy(b.projectionMatrix),it(W,y,rt)};function it(W,Q,ut){ut===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Go*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ht=null;function St(W,Q){if(h=Q.getViewerPose(c||a),d=Q,h!==null){let ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let rt=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Rt=0;Rt<ut.length;Rt++){let xt=ut[Rt],Wt=null;if(m!==null)Wt=m.getViewport(xt);else{let ee=u.getViewSubImage(f,xt);Wt=ee.viewport,Rt===0&&(t.setRenderTargetTextures(S,ee.colorTexture,f.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(S))}let Bt=M[Rt];Bt===void 0&&(Bt=new Fe,Bt.layers.enable(Rt),Bt.viewport=new xe,M[Rt]=Bt),Bt.matrix.fromArray(xt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(xt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Rt===0&&(y.matrix.copy(Bt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Bt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Rt=u.getDepthInformation(ut[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,i.renderState)}}for(let ut=0;ut<_.length;ut++){let rt=v[ut],Tt=_[ut];rt!==null&&Tt!==void 0&&Tt.update(rt,Q,c||a)}ht&&ht(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),d=null}let dt=new Rh;dt.setAnimationLoop(St),this.setAnimationLoop=function(W){ht=W},this.dispose=function(){}}},vi=new on,H0=new re;function V0(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ah(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),d(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),_=S.envMap,v=S.envMapRotation;_&&(g.envMap.value=_,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),g.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(vi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G0(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=i[S.id];v===void 0&&(d(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(S,R);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let _=u();S.__bindingPointIndex=_;let v=s.createBuffer(),R=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=i[S.id],v=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,b=v.length;T<b;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=C.length;M<y;M++){let A=C[M];if(m(A,T,M,R)===!0){let L=A.__offset,I=Array.isArray(A.value)?A.value:[A.value],D=0;for(let X=0;X<I.length;X++){let B=I[X],Z=x(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,L+D,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,_,v,R){let T=S.value,b=_+"_"+v;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{let C=R[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function d(S){let _=S.uniforms,v=0,R=16;for(let b=0,C=_.length;b<C;b++){let M=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,A=M.length;y<A;y++){let L=M[y],I=Array.isArray(L.value)?L.value:[L.value];for(let D=0,X=I.length;D<X;D++){let B=I[D],Z=x(B),V=v%R,K=V%Z.boundary,it=V+K;v+=K,it!==0&&R-it<Z.storage&&(v+=R-it),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}let T=v%R;return T>0&&(v+=R-T),S.__size=v,S.__cache={},this}function x(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function g(S){let _=S.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Nr=class{constructor(t={}){let{canvas:e=qu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let d=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=_n,this.toneMappingExposure=1;let v=this,R=!1,T=0,b=0,C=null,M=-1,y=null,A=new xe,L=new xe,I=null,D=new zt(0),X=0,B=e.width,Z=e.height,V=1,K=null,it=null,ht=new xe(0,0,B,Z),St=new xe(0,0,B,Z),dt=!1,W=new Lr,Q=!1,ut=!1,rt=new re,Tt=new re,Rt=new k,xt=new xe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function ee(){return C===null?V:1}let N=n;function fe(E,z){return e.getContext(E,z)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){let z="webgl2";if(N=fe(z,E),N===null)throw fe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ut,Ft,Ct,ne,Mt,P,w,G,$,et,J,st,H,at,Pt,nt,mt,wt,It,vt,kt,Lt,qt,U;function ct(){Ut=new rm(N),Ut.init(),Lt=new F0(N,Ut),Ft=new Qp(N,Ut,t,Lt),Ct=new U0(N,Ut),Ft.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),ne=new lm(N),Mt=new M0,P=new z0(N,Ut,Ct,Mt,Ft,Lt,ne),w=new em(v),G=new sm(v),$=new mf(N),qt=new Jp(N,$),et=new am(N,$,ne,qt),J=new hm(N,et,$,ne),It=new cm(N,Ft,P),nt=new tm(Mt),st=new y0(v,w,G,Ut,Ft,qt,nt),H=new V0(v,Mt),at=new S0,Pt=new C0(Ut),wt=new $p(v,w,G,Ct,J,m,l),mt=new L0(v,J,Ft),U=new G0(N,ne,Ft,Ct),vt=new Kp(N,Ut,ne),kt=new om(N,Ut,ne),ne.programs=st.programs,v.capabilities=Ft,v.extensions=Ut,v.properties=Mt,v.renderLists=at,v.shadowMap=mt,v.state=Ct,v.info=ne}ct();let j=new al(v,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=Ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,z,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=z,e.width=Math.floor(E*V),e.height=Math.floor(z*V),q===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(B*V,Z*V).floor()},this.setDrawingBufferSize=function(E,z,q){B=E,Z=z,V=q,e.width=Math.floor(E*q),e.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,z,q,Y){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,z,q,Y),Ct.viewport(A.copy(ht).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,z,q,Y){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,z,q,Y),Ct.scissor(L.copy(St).multiplyScalar(V).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Ct.setScissorTest(dt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,z=!0,q=!0){let Y=0;if(E){let F=!1;if(C!==null){let ot=C.texture.format;F=ot===Ll||ot===Il||ot===Pl}if(F){let ot=C.texture.type,lt=ot===Dn||ot===Ti||ot===Is||ot===is||ot===Al||ot===Rl,_t=wt.getClearColor(),yt=wt.getClearAlpha(),Dt=_t.r,Ot=_t.g,Et=_t.b;lt?(d[0]=Dt,d[1]=Ot,d[2]=Et,d[3]=yt,N.clearBufferuiv(N.COLOR,0,d)):(x[0]=Dt,x[1]=Ot,x[2]=Et,x[3]=yt,N.clearBufferiv(N.COLOR,0,x))}else Y|=N.COLOR_BUFFER_BIT}z&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),at.dispose(),Pt.dispose(),Mt.dispose(),w.dispose(),G.dispose(),J.dispose(),qt.dispose(),U.dispose(),st.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ze),j.removeEventListener("sessionend",je),He.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=ne.autoReset,z=mt.enabled,q=mt.autoUpdate,Y=mt.needsUpdate,F=mt.type;ct(),ne.autoReset=E,mt.enabled=z,mt.autoUpdate=q,mt.needsUpdate=Y,mt.type=F}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Nt(E){let z=E.target;z.removeEventListener("dispose",Nt),oe(z)}function oe(E){be(E),Mt.remove(E)}function be(E){let z=Mt.get(E).programs;z!==void 0&&(z.forEach(function(q){st.releaseProgram(q)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,Y,F,ot){z===null&&(z=Wt);let lt=F.isMesh&&F.matrixWorld.determinant()<0,_t=xs(E,z,q,Y,F);Ct.setMaterial(Y,lt);let yt=q.index,Dt=1;if(Y.wireframe===!0){if(yt=et.getWireframeAttribute(q),yt===void 0)return;Dt=2}let Ot=q.drawRange,Et=q.attributes.position,Xt=Ot.start*Dt,ie=(Ot.start+Ot.count)*Dt;ot!==null&&(Xt=Math.max(Xt,ot.start*Dt),ie=Math.min(ie,(ot.start+ot.count)*Dt)),yt!==null?(Xt=Math.max(Xt,0),ie=Math.min(ie,yt.count)):Et!=null&&(Xt=Math.max(Xt,0),ie=Math.min(ie,Et.count));let se=ie-Xt;if(se<0||se===1/0)return;qt.setup(F,Y,_t,q,yt);let Ce,Yt=vt;if(yt!==null&&(Ce=$.get(yt),Yt=kt,Yt.setIndex(Ce)),F.isMesh)Y.wireframe===!0?(Ct.setLineWidth(Y.wireframeLinewidth*ee()),Yt.setMode(N.LINES)):Yt.setMode(N.TRIANGLES);else if(F.isLine){let At=Y.linewidth;At===void 0&&(At=1),Ct.setLineWidth(At*ee()),F.isLineSegments?Yt.setMode(N.LINES):F.isLineLoop?Yt.setMode(N.LINE_LOOP):Yt.setMode(N.LINE_STRIP)}else F.isPoints?Yt.setMode(N.POINTS):F.isSprite&&Yt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Yt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let At=F._multiDrawStarts,Pe=F._multiDrawCounts,Zt=F._multiDrawCount,tn=yt?$.get(yt).bytesPerElement:1,Di=Mt.get(Y).currentProgram.getUniforms();for(let Ve=0;Ve<Zt;Ve++)Di.setValue(N,"_gl_DrawID",Ve),Yt.render(At[Ve]/tn,Pe[Ve])}else if(F.isInstancedMesh)Yt.renderInstances(Xt,se,F.count);else if(q.isInstancedBufferGeometry){let At=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,At);Yt.renderInstances(Xt,se,Pe)}else Yt.render(Xt,se)};function Jt(E,z,q){E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,fi(E,z,q),E.side=ni,E.needsUpdate=!0,fi(E,z,q),E.side=rn):fi(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),p=Pt.get(q),p.init(z),_.push(p),q.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==q&&E.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let Y=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ot=F.material;if(ot)if(Array.isArray(ot))for(let lt=0;lt<ot.length;lt++){let _t=ot[lt];Jt(_t,q,F),Y.add(_t)}else Jt(ot,q,F),Y.add(ot)}),_.pop(),p=null,Y},this.compileAsync=function(E,z,q=null){let Y=this.compile(E,z,q);return new Promise(F=>{function ot(){if(Y.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&Y.delete(lt)}),Y.size===0){F(E);return}setTimeout(ot,10)}Ut.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Oe=null;function Se(E){Oe&&Oe(E)}function Ze(){He.stop()}function je(){He.start()}let He=new Rh;He.setAnimationLoop(Se),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(E){Oe=E,j.setAnimationLoop(E),E===null?He.stop():He.start()},j.addEventListener("sessionstart",Ze),j.addEventListener("sessionend",je),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,z,C),p=Pt.get(E,_.length),p.init(z),_.push(p),Tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(Tt),ut=this.localClippingEnabled,Q=nt.init(this.clippingPlanes,ut),g=at.get(E,S.length),g.init(),S.push(g),j.enabled===!0&&j.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&Sn(ot,z,-1/0,v.sortObjects)}Sn(E,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(K,it),Bt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Bt&&wt.addToRenderList(g,E),this.info.render.frame++,Q===!0&&nt.beginShadows();let q=p.state.shadowsArray;mt.render(q,E,z),Q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,F=g.transmissive;if(p.setupLights(),z.isArrayCamera){let ot=z.cameras;if(F.length>0)for(let lt=0,_t=ot.length;lt<_t;lt++){let yt=ot[lt];Li(Y,F,E,yt)}Bt&&wt.render(E);for(let lt=0,_t=ot.length;lt<_t;lt++){let yt=ot[lt];Gn(g,E,yt,yt.viewport)}}else F.length>0&&Li(Y,F,E,z),Bt&&wt.render(E),Gn(g,E,z);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,z),qt.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],Q===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Sn(E,z,q,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){Y&&xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);let lt=J.update(E),_t=E.material;_t.visible&&g.push(E,lt,_t,q,xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let lt=J.update(E),_t=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),xt.copy(lt.boundingSphere.center)),xt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(_t)){let yt=lt.groups;for(let Dt=0,Ot=yt.length;Dt<Ot;Dt++){let Et=yt[Dt],Xt=_t[Et.materialIndex];Xt&&Xt.visible&&g.push(E,lt,Xt,q,xt.z,Et)}}else _t.visible&&g.push(E,lt,_t,q,xt.z,null)}}let ot=E.children;for(let lt=0,_t=ot.length;lt<_t;lt++)Sn(ot[lt],z,q,Y)}function Gn(E,z,q,Y){let F=E.opaque,ot=E.transmissive,lt=E.transparent;p.setupLightsView(q),Q===!0&&nt.setGlobalState(v.clippingPlanes,q),Y&&Ct.viewport(A.copy(Y)),F.length>0&&Wn(F,z,q),ot.length>0&&Wn(ot,z,q),lt.length>0&&Wn(lt,z,q),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Li(E,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Fs:Dn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[Y.id],lt=Y.viewport||A;ot.setSize(lt.z,lt.w);let _t=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(D),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&wt.render(q);let yt=v.toneMapping;v.toneMapping=_n;let Dt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Q===!0&&nt.setGlobalState(v.clippingPlanes,Y),Wn(E,q,Y),P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Et=0,Xt=z.length;Et<Xt;Et++){let ie=z[Et],se=ie.object,Ce=ie.geometry,Yt=ie.material,At=ie.group;if(Yt.side===rn&&se.layers.test(Y.layers)){let Pe=Yt.side;Yt.side=Ue,Yt.needsUpdate=!0,ms(se,q,Y,Ce,Yt,At),Yt.side=Pe,Yt.needsUpdate=!0,Ot=!0}}Ot===!0&&(P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot))}v.setRenderTarget(_t),v.setClearColor(D,X),Dt!==void 0&&(Y.viewport=Dt),v.toneMapping=yt}function Wn(E,z,q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let F=0,ot=E.length;F<ot;F++){let lt=E[F],_t=lt.object,yt=lt.geometry,Dt=Y===null?lt.material:Y,Ot=lt.group;_t.layers.test(q.layers)&&ms(_t,z,q,yt,Dt,Ot)}}function ms(E,z,q,Y,F,ot){E.onBeforeRender(v,z,q,Y,F,ot),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,z,q,Y,E,ot),F.transparent===!0&&F.side===rn&&F.forceSinglePass===!1?(F.side=Ue,F.needsUpdate=!0,v.renderBufferDirect(q,z,Y,F,E,ot),F.side=ni,F.needsUpdate=!0,v.renderBufferDirect(q,z,Y,F,E,ot),F.side=rn):v.renderBufferDirect(q,z,Y,F,E,ot),E.onAfterRender(v,z,q,Y,F,ot)}function fi(E,z,q){z.isScene!==!0&&(z=Wt);let Y=Mt.get(E),F=p.state.lights,ot=p.state.shadowsArray,lt=F.state.version,_t=st.getParameters(E,F.state,ot,z,q),yt=st.getProgramCacheKey(_t),Dt=Y.programs;Y.environment=E.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Nt),Dt=new Map,Y.programs=Dt);let Ot=Dt.get(yt);if(Ot!==void 0){if(Y.currentProgram===Ot&&Y.lightsStateVersion===lt)return dn(E,_t),Ot}else _t.uniforms=st.getUniforms(E),E.onBeforeCompile(_t,v),Ot=st.acquireProgram(_t,yt),Dt.set(yt,Ot),Y.uniforms=_t.uniforms;let Et=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=nt.uniform),dn(E,_t),Y.needsLights=Vs(E),Y.lightsStateVersion=lt,Y.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=Ot,Y.uniformsList=null,Ot}function gs(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Qi.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function dn(E,z){let q=Mt.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function xs(E,z,q,Y,F){z.isScene!==!0&&(z=Wt),P.resetTextureUnits();let ot=z.fog,lt=Y.isMeshStandardMaterial?z.environment:null,_t=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ai,yt=(Y.isMeshStandardMaterial?G:w).get(Y.envMap||lt),Dt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ot=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!q.morphAttributes.position,Xt=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color,se=_n;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=v.toneMapping);let Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Yt=Ce!==void 0?Ce.length:0,At=Mt.get(Y),Pe=p.state.lights;if(Q===!0&&(ut===!0||E!==y)){let $e=E===y&&Y.id===M;nt.setState(Y,E,$e)}let Zt=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Pe.state.version||At.outputColorSpace!==_t||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==yt||Y.fog===!0&&At.fog!==ot||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==Ot||At.morphTargets!==Et||At.morphNormals!==Xt||At.morphColors!==ie||At.toneMapping!==se||At.morphTargetsCount!==Yt)&&(Zt=!0):(Zt=!0,At.__version=Y.version);let tn=At.currentProgram;Zt===!0&&(tn=fi(Y,z,F));let Di=!1,Ve=!1,vs=!1,le=tn.getUniforms(),pn=At.uniforms;if(Ct.useProgram(tn.program)&&(Di=!0,Ve=!0,vs=!0),Y.id!==M&&(M=Y.id,Ve=!0),Di||y!==E){Ct.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Zu(rt),ju(rt),le.setValue(N,"projectionMatrix",rt)):le.setValue(N,"projectionMatrix",E.projectionMatrix),le.setValue(N,"viewMatrix",E.matrixWorldInverse);let Xn=le.map.cameraPosition;Xn!==void 0&&Xn.setValue(N,Rt.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&le.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ve=!0,vs=!0)}if(F.isSkinnedMesh){le.setOptional(N,F,"bindMatrix"),le.setOptional(N,F,"bindMatrixInverse");let $e=F.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),le.setValue(N,"boneTexture",$e.boneTexture,P))}F.isBatchedMesh&&(le.setOptional(N,F,"batchingTexture"),le.setValue(N,"batchingTexture",F._matricesTexture,P),le.setOptional(N,F,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",F._indirectTexture,P),le.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",F._colorsTexture,P));let _s=q.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&It.update(F,q,tn),(Ve||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,le.setValue(N,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(pn.envMap.value=yt,pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),Ve&&(le.setValue(N,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&wa(pn,vs),ot&&Y.fog===!0&&H.refreshFogUniforms(pn,ot),H.refreshMaterialUniforms(pn,Y,V,Z,p.state.transmissionRenderTarget[E.id]),Qi.upload(N,gs(At),pn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qi.upload(N,gs(At),pn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&le.setValue(N,"center",F.center),le.setValue(N,"modelViewMatrix",F.modelViewMatrix),le.setValue(N,"normalMatrix",F.normalMatrix),le.setValue(N,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let $e=Y.uniformsGroups;for(let Xn=0,qn=$e.length;Xn<qn;Xn++){let Ql=$e[Xn];U.update(Ql,tn),U.bind(Ql,tn)}}return tn}function wa(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Vs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,z,q){Mt.get(E.texture).__webglTexture=z,Mt.get(E.depthTexture).__webglTexture=q;let Y=Mt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let q=Mt.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,q=0){C=E,T=z,b=q;let Y=!0,F=null,ot=!1,lt=!1;if(E){let yt=Mt.get(E);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(yt.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(yt.__hasExternalTextures)P.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Et=E.depthTexture;if(yt.__boundDepthTexture!==Et){if(Et!==null&&Mt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);let Ot=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?F=Ot[z][q]:F=Ot[z],ot=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?F=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?F=Ot[q]:F=Ot,A.copy(E.viewport),L.copy(E.scissor),I=E.scissorTest}else A.copy(ht).multiplyScalar(V).floor(),L.copy(St).multiplyScalar(V).floor(),I=dt;if(Ct.bindFramebuffer(N.FRAMEBUFFER,F)&&Y&&Ct.drawBuffers(E,F),Ct.viewport(A),Ct.scissor(L),Ct.setScissorTest(I),ot){let yt=Mt.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,yt.__webglTexture,q)}else if(lt){let yt=Mt.get(E.texture),Dt=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,q||0,Dt)}M=-1},this.readRenderTargetPixels=function(E,z,q,Y,F,ot,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){Ct.bindFramebuffer(N.FRAMEBUFFER,_t);try{let yt=E.texture,Dt=yt.format,Ot=yt.type;if(!Ft.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&q>=0&&q<=E.height-F&&N.readPixels(z,q,Y,F,Lt.convert(Dt),Lt.convert(Ot),ot)}finally{let yt=C!==null?Mt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,Y,F,ot,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){let yt=E.texture,Dt=yt.format,Ot=yt.type;if(!Ft.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-Y&&q>=0&&q<=E.height-F){Ct.bindFramebuffer(N.FRAMEBUFFER,_t);let Et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),N.readPixels(z,q,Y,F,Lt.convert(Dt),Lt.convert(Ot),0);let Xt=C!==null?Mt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,Xt);let ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yu(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(Et),N.deleteSync(ie),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let Y=Math.pow(2,-q),F=Math.floor(E.image.width*Y),ot=Math.floor(E.image.height*Y),lt=z!==null?z.x:0,_t=z!==null?z.y:0;P.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,lt,_t,F,ot),Ct.unbindTexture()},this.copyTextureToTexture=function(E,z,q=null,Y=null,F=0){E.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],z=arguments[2],F=arguments[3]||0,q=null);let ot,lt,_t,yt,Dt,Ot,Et,Xt,ie,se=E.isCompressedTexture?E.mipmaps[F]:E.image;q!==null?(ot=q.max.x-q.min.x,lt=q.max.y-q.min.y,_t=q.isBox3?q.max.z-q.min.z:1,yt=q.min.x,Dt=q.min.y,Ot=q.isBox3?q.min.z:0):(ot=se.width,lt=se.height,_t=se.depth||1,yt=0,Dt=0,Ot=0),Y!==null?(Et=Y.x,Xt=Y.y,ie=Y.z):(Et=0,Xt=0,ie=0);let Ce=Lt.convert(z.format),Yt=Lt.convert(z.type),At;z.isData3DTexture?(P.setTexture3D(z,0),At=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),At=N.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),At=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let Pe=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Di=N.getParameter(N.UNPACK_SKIP_ROWS),Ve=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);let vs=E.isDataArrayTexture||E.isData3DTexture,le=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let pn=Mt.get(E),_s=Mt.get(z),$e=Mt.get(pn.__renderTarget),Xn=Mt.get(_s.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,$e.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let qn=0;qn<_t;qn++)vs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(E).__webglTexture,F,Ot+qn),E.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(z).__webglTexture,F,ie+qn),N.blitFramebuffer(yt,Dt,ot,lt,Et,Xt,ot,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(At,F,Et,Xt,ie+qn,yt,Dt,ot,lt):N.copyTexSubImage2D(At,F,Et,Xt,ie+qn,yt,Dt,ot,lt);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(At,F,Et,Xt,ie,ot,lt,_t,Ce,Yt,se.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(At,F,Et,Xt,ie,ot,lt,_t,Ce,se.data):N.texSubImage3D(At,F,Et,Xt,ie,ot,lt,_t,Ce,Yt,se):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Et,Xt,ot,lt,Ce,Yt,se.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Et,Xt,se.width,se.height,Ce,se.data):N.texSubImage2D(N.TEXTURE_2D,F,Et,Xt,ot,lt,Ce,Yt,se);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Di),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),F===0&&z.generateMipmaps&&N.generateMipmap(At),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,Y=null,F=0){return E.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],z=arguments[3],F=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,Y,F)},this.initRenderTarget=function(E){Mt.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){T=0,b=0,C=null,Ct.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var zr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ol=class extends qe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Xe,h=Xe,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends Ht{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zi=new re,Qc=new re,hr=[],th=new Nn,W0=new re,Es=new Kt,Ts=new zn,Or=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,W0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),th.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Ts.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zi),Qc.multiplyMatrices(n,Zi),Es.matrixWorld=Qc,Es.raycast(t,hr);for(let a=0,o=hr.length;a<o;a++){let l=hr[a];l.instanceId=r,l.object=this,e.push(l)}hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(i*this.count),i,this.count,Cl,xn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ll=class extends si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Br=new k,kr=new k,eh=new re,As=new rs,ur=new zn,eo=new k,nh=new k,cl=class extends Ye{constructor(t=new ve,e=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Br.fromBufferAttribute(e,i-1),kr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Br.distanceTo(kr);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=r,t.ray.intersectsSphere(ur)===!1)return;eh.copy(i).invert(),As.copy(t.ray).applyMatrix4(eh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=m,g=d-1;x<g;x+=c){let p=h.getX(x),S=h.getX(x+1),_=fr(this,t,As,l,p,S);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(d-1),g=h.getX(m),p=fr(this,t,As,l,x,g);p&&e.push(p)}}else{let m=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=m,g=d-1;x<g;x+=c){let p=fr(this,t,As,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=fr(this,t,As,l,d-1,m);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fr(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Br.fromBufferAttribute(a,i),kr.fromBufferAttribute(a,r),e.distanceSqToSegment(Br,kr,eo,nh)>n)return;eo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(eo);if(!(l<t.near||l>t.far))return{distance:l,point:nh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var ih=new k,sh=new k,Hr=class extends cl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ih.fromBufferAttribute(e,i),sh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ih.distanceTo(sh);t.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hl=class extends si{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rh=new re,ul=new rs,dr=new zn,pr=new k,Vr=class extends Ye{constructor(t=new ve,e=new hl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;rh.copy(i).invert(),ul.copy(t.ray).applyMatrix4(rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let d=f,x=m;d<x;d++){let g=c.getX(d);pr.fromBufferAttribute(u,g),ah(pr,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let d=f,x=m;d<x;d++)pr.fromBufferAttribute(u,d),ah(pr,d,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ah(s,t,e,n,i,r,a){let o=ul.distanceSqToPoint(s);if(o<e){let l=new k;ul.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ds=class s extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],m=[],d=0,x=[],g=n/2,p=0;S(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(m,2));function S(){let v=new k,R=new k,T=0,b=(e-t)/n;for(let C=0;C<=r;C++){let M=[],y=C/r,A=y*(e-t)+t;for(let L=0;L<=i;L++){let I=L/i,D=I*l+o,X=Math.sin(D),B=Math.cos(D);R.x=A*X,R.y=-y*n+g,R.z=A*B,u.push(R.x,R.y,R.z),v.set(X,b,B).normalize(),f.push(v.x,v.y,v.z),m.push(I,1-y),M.push(d++)}x.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let y=x[M][C],A=x[M+1][C],L=x[M+1][C+1],I=x[M][C+1];(t>0||M!==0)&&(h.push(y,A,I),T+=3),(e>0||M!==r-1)&&(h.push(A,L,I),T+=3)}c.addGroup(p,T,0),p+=T}function _(v){let R=d,T=new Qt,b=new k,C=0,M=v===!0?t:e,y=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*y,0),f.push(0,y,0),m.push(.5,.5),d++;let A=d;for(let L=0;L<=i;L++){let D=L/i*l+o,X=Math.cos(D),B=Math.sin(D);b.x=M*B,b.y=g*y,b.z=M*X,u.push(b.x,b.y,b.z),f.push(0,y,0),T.x=X*.5+.5,T.y=B*.5*y+.5,m.push(T.x,T.y),d++}for(let L=0;L<i;L++){let I=R+L,D=A+L;v===!0?h.push(D,D+1,I):h.push(D+1,D,I),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},os=class s extends Ds{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var X0={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Dh(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,m;if(n&&(r=$0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let d=e;d<i;d+=e)u=s[d],f=s[d+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Us(r,a,e,o,l,m,0),a}};function Dh(s,t,e,n,i){let r,a;if(i===og(s,t,e,n)>0)for(r=t;r<e;r+=n)a=oh(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=oh(r,s[r],s[r+1],a);return a&&$r(a,a.next)&&(zs(a),a=a.next),a}function Ri(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&($r(e,e.next)||de(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(s,t,e,n,i,r,a){if(!s)return;!a&&r&&eg(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Y0(s,n,i,r):q0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),zs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Z0(Ri(s),t,e),Us(s,t,e,n,i,r,2)):a===2&&j0(s,t,e,n,i,r):Us(Ri(s),t,e,n,i,r,1);break}}}function q0(s){let t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,d=n.next;for(;d!==t;){if(d.x>=h&&d.x<=f&&d.y>=u&&d.y<=m&&$i(i,o,r,l,a,c,d.x,d.y)&&de(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Y0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(de(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,d=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=fl(m,d,t,e,n),S=fl(x,g,t,e,n),_=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=S;){if(_.x>=m&&_.x<=x&&_.y>=d&&_.y<=g&&_!==i&&_!==a&&$i(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=m&&v.x<=x&&v.y>=d&&v.y<=g&&v!==i&&v!==a&&$i(o,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=x&&_.y>=d&&_.y<=g&&_!==i&&_!==a&&$i(o,h,l,u,c,f,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=x&&v.y>=d&&v.y<=g&&v!==i&&v!==a&&$i(o,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Z0(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!$r(i,r)&&Uh(i,n,n.next,r)&&Ns(i,r)&&Ns(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zs(n),zs(n.next),n=s=r),n=n.next}while(n!==s);return Ri(n)}function j0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sg(a,o)){let l=Nh(a,o);a=Ri(a,a.next),l=Ri(l,l.next),Us(a,t,e,n,i,r,0),Us(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function $0(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Dh(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ig(c));for(i.sort(J0),r=0;r<i.length;r++)e=K0(i[r],e);return e}function J0(s,t){return s.x-t.x}function K0(s,t){let e=Q0(s,t);if(!e)return t;let n=Nh(e,s);return Ri(n,n.next),Ri(e,e.next)}function Q0(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&$i(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ns(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&tg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function tg(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function eg(s,t,e,n){let i=s;do i.z===0&&(i.z=fl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ng(i)}function ng(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function fl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ig(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function $i(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function sg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!rg(s,t)&&(Ns(s,t)&&Ns(t,s)&&ag(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||$r(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function $r(s,t){return s.x===t.x&&s.y===t.y}function Uh(s,t,e,n){let i=gr(de(s,t,e)),r=gr(de(s,t,n)),a=gr(de(e,n,s)),o=gr(de(e,n,t));return!!(i!==r&&a!==o||i===0&&mr(s,e,t)||r===0&&mr(s,n,t)||a===0&&mr(e,s,n)||o===0&&mr(e,t,n))}function mr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function gr(s){return s>0?1:s<0?-1:0}function rg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ns(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function ag(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Nh(s,t){let e=new dl(s.i,s.x,s.y),n=new dl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function oh(s,t,e,n){let i=new dl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function og(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Gr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];lh(t),ch(n,t);let a=t.length;e.forEach(lh);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ch(n,e[l]);let o=X0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function lh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ch(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Wr=class s extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new k,f=new k,m=[],d=[],x=[],g=[];for(let p=0;p<=n;p++){let S=[],_=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+_*o),d.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-_),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let _=h[p][S+1],v=h[p][S],R=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&m.push(_,v,T),(p!==n-1||l<Math.PI)&&m.push(v,R,T)}this.setIndex(m),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function xr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ls=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends ls{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,l=2*n-e;break;case rc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,d=(n-e)/(i-e),x=d*d,g=x*d,p=-f*g+2*f*x-f*d,S=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*d+1,_=(-1-m)*g+(1.5+m)*x+.5*d,v=m*g-m*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+S*a[c+R]+_*a[l+R]+v*a[u+R];return r}},ml=class extends ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},gl=class extends ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&lg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,m=u+n;for(let d=0;d!==n;++d){let x=e[u+d];if(x!==e[f+d]||x!==e[m+d]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Vo;var Ci=class extends ln{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Sr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends ln{};xl.prototype.ValueTypeName="color";var vl=class extends ln{};vl.prototype.ValueTypeName="number";var _l=class extends ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends ln{InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends ln{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Sr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends ln{};yl.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],d=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return d}return null}}},cg=new Ml,bl=class{constructor(t){this.manager=t!==void 0?t:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ul="\\[\\]\\.:\\/",hg=new RegExp("["+Ul+"]","g"),Nl="[^"+Ul+"]",ug="[^"+Ul.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",Nl),dg=/(WCOD+)?/.source.replace("WCOD",ug),pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),gg=new RegExp("^"+fg+dg+pg+mg+"$"),xg=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(t){let e=gg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Sl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);var hh=new re,qr=class{constructor(t,e,n=0,i=1/0){this.ray=new rs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wl(t[i],this,n,e);return n.sort(uh),n}};function uh(s,t){return s.distance-t.distance}function wl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);var hn="0.3.0";var li={index:null,buf:null,geo:{}};async function zh(s){let[t,e]=await Promise.all([fetch("assets/models.json?v="+hn).then(n=>n.json()),vg("assets/models.bin?v="+hn,s)]);li.index=t,li.buf=e}async function vg(s,t){let e=await fetch(s);if(!e.ok)throw new Error(s+" "+e.status);if(!t||!e.body||!e.headers.get("content-length"))return e.arrayBuffer();let n=+e.headers.get("content-length"),i=e.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await i.read();if(c)break;r.push(h),a+=h.length,t(Math.min(.99,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return t(1),o.buffer}function zl(s,t){let e=li.index[s],n=e.parts.find(r=>r.name===t)||e.parts[0],i=li.buf;return{part:n,pos:new Float32Array(i,n.pos,n.n*3),nrm:new Int8Array(i,n.nrm,n.n*4),col:new Uint8Array(i,n.col,n.n*4),idx:new Uint16Array(i,n.idx,n.i)}}function Ii(s,t){let e=s+"/"+t;if(li.geo[e])return li.geo[e];let n=zl(s,t),i=new ve;return i.setAttribute("position",new Ht(n.pos,3)),i.setAttribute("normal",new Ht(n.nrm,4,!0)),i.setAttribute("col",new Ht(n.col,4,!0)),i.setIndex(new Ht(n.idx,1)),i.computeBoundingSphere(),li.geo[e]=i,i}function Fl(s){return li.index[s]}var _g=["impactMetal_heavy_000","impactMetal_heavy_001","impactMetal_heavy_002","impactMetal_light_000","impactGlass_heavy_000","impactPlate_heavy_000","select_001","confirmation_001","back_001","switch_001","explosionCrunch_000","forceField_000"],Jr=class{constructor(t){this.vol={music:t.music??.7,sfx:t.sfx??.8},this.mix={engine:1,sfx:1,music:1},this.ctx=null,this.buf={},this.engines=[],this.music=null,this.musicName=""}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol.sfx,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.worklet=null,e.audioWorklet&&(this.worklet=e.audioWorklet.addModule("assets/engine-worklet.js?v="+hn).then(()=>!0).catch(()=>!1));for(let r of _g)fetch("assets/sfx/"+r+".ogg?v="+hn).then(a=>a.arrayBuffer()).then(a=>e.decodeAudioData(a)).then(a=>{this.buf[r]=a}).catch(()=>{});this.playMusic("alpha-dance")}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}playMusic(t){if(this.musicName===t)return;this.musicName=t,this.music||(this.music=new Audio,this.music.loop=!0),this.music.src="assets/music/"+t+".ogg?v="+hn,this.music.volume=this.vol.music*.45*this.mix.music;let e=this.music.play();e&&e.catch&&e.catch(()=>{})}volume(t){this.vol={music:t.music??this.vol.music,sfx:t.sfx??this.vol.sfx},this.master&&(this.master.gain.value=this.vol.sfx),this.music&&(this.music.volume=this.vol.music*.45*this.mix.music)}setMix(t){this.mix={engine:t.engine??1,sfx:t.sfx??1,music:t.music??1},this.volume({})}play(t,e,n){let i=this.buf[t];if(!i||!this.ctx)return;let r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=n||1;let a=this.ctx.createGain();a.gain.value=(e===void 0?1:e)*this.mix.sfx,r.connect(a),a.connect(this.master),r.start()}ui(t){this.play(t==="ok"?"confirmation_001":t==="back"?"back_001":t==="switch"?"switch_001":"select_001",.5)}engineNode(t,e){let n=this.ctx;if(this.workletOk){let i=new AudioWorkletNode(n,"engine",{numberOfInputs:0,outputChannelCount:[1],processorOptions:{cyl:t.cyl||4,turbo:!!t.turbo,ev:!!t.ev,diesel:!!t.diesel,rpmMax:t.rpm,seed:e}}),r=i.parameters;return{node:i,rpm:r.get("rpm"),load:r.get("load"),speed:r.get("speed"),gain:r.get("gain"),nodes:[]}}return null}engineVoice(t,e){let n=this.ctx,i=t?this.engineNode(t,e||1):null,r=n.createOscillator();r.type="sawtooth";let a=n.createOscillator();a.type="square";let o=this.noiseSrc(),l=n.createGain();l.gain.value=.12;let c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;let h=n.createGain();h.gain.value=0;let u=n.createGain();u.gain.value=.5,r.connect(c),a.connect(u),u.connect(c),o.connect(l),l.connect(c),c.connect(h);let f=this.noiseSrc(),m=n.createBiquadFilter();m.type="bandpass",m.frequency.value=1700,m.Q.value=4;let d=n.createGain();d.gain.value=0,f.connect(m),m.connect(d);let x=this.noiseSrc(),g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let p=n.createGain();p.gain.value=0,x.connect(g),g.connect(p);let S=this.noiseSrc(),_=n.createBiquadFilter();_.type="bandpass",_.frequency.value=900,_.Q.value=.8;let v=n.createGain();v.gain.value=0,S.connect(_),_.connect(v);let R=n.createStereoPanner?n.createStereoPanner():null,T=R||n.createGain();return i?i.node.connect(T):h.connect(T),d.connect(T),p.connect(T),v.connect(T),T.connect(this.master),i||(r.start(),a.start(),o.start()),f.start(),x.start(),S.start(),{wk:i,spec:t,o1:r,o2:a,f:c,g:h,tg:d,wg:p,ngn:v,nf:_,pan:R,nodes:i?[f,x,S]:[r,a,o,f,x,S],out:T}}async begin(t){if(!this.ctx||(this.end(),this.cur=t,this.worklet&&(this.workletOk=await this.worklet),this.cur!==t||this.engines.length))return;let e=t.race.players.length;for(let n=0;n<e;n++){let i=this.engineVoice(t.race.players[n].spec,n+1);i.pan&&(i.pan.pan.value=e>1?n?.5:-.5:0),this.engines.push(i)}this.rivals=[];for(let n of t.race.racers)n.player>=0||this.rivals.length>=3||this.rivals.some(i=>i.spec===n.spec)||this.rivals.push(this.engineVoice(n.spec,7+this.rivals.length));this.playMusic("time-driving")}update(t,e){if(!this.ctx||!this.engines.length)return;let n=this.ctx.currentTime,i=t.race,r=i.players.length>1?.6:1;for(let o=0;o<this.engines.length;o++){let l=this.engines[o],c=i.players[o],h=c.veh;this.voice(l,h,c,n,r,1)}let a=i.players[0].veh;for(let o=0;o<this.rivals.length;o++){let l=this.rivals[o],c=null,h=1e9;for(let u=0;u<i.racers.length;u++){let f=i.racers[u];if(f.player>=0||f.spec!==l.spec)continue;let m=Math.hypot(f.veh.px-a.px,f.veh.pz-a.pz);m<h&&(h=m,c=f)}c&&this.voice(l,c.veh,c,n,r*Math.max(0,1-h/60)*.6,0)}}voice(t,e,n,i,r,a){let o=e.rpm,l=Math.max(e.input.throttle,e.nitroOn?1:0),c=n.wreck>0;if(t.wk){let f=c?0:e.shiftT>0?.04:l;t.wk.rpm.setValueAtTime(c?800:o,i),t.wk.load.setValueAtTime(f,i),t.wk.speed.setValueAtTime(a?e.speed:0,i),t.wk.gain.setTargetAtTime((c?.15*r:(e.spec.ev?.9:.55+.25*f)*r)*this.mix.engine,i,.05)}let h=28+o/60*1.6;t.o1.frequency.setTargetAtTime(h,i,.03),t.o2.frequency.setTargetAtTime(h*.5,i,.03),t.f.frequency.setTargetAtTime(300+o*.32*(.5+l*.5),i,.05),t.g.gain.setTargetAtTime((c?.02:(.1+l*.14)*r)*this.mix.engine,i,.05);let u=0;for(let f=0;f<4;f++){let m=e.wheels[f];m.contact&&(u=Math.max(u,m.slipLat,m.slipLong))}t.tg.gain.setTargetAtTime(u>.3&&e.speed>5?Math.min(.22,(u-.3)*.4)*r*this.mix.sfx:0,i,.04),t.wg.gain.setTargetAtTime(a?Math.min(.18,e.speed*e.speed*2e-5)*r*this.mix.sfx:0,i,.1),t.ngn.gain.setTargetAtTime(e.nitroOn?.16*r*Math.min(1.6,e.nitroOn)*this.mix.sfx:0,i,.06),t.nf.frequency.setTargetAtTime(e.nitroOn>1.5?600:1100,i,.1)}event(t,e,n,i){if(!this.ctx)return;let a=e.player>=0;if(!a)for(let o of i.race.players)Math.hypot(o.veh.px-e.veh.px,o.veh.pz-e.veh.pz)<50&&(a=!0);if(a)if(t==="hit"){let o=this.ctx.currentTime;if(o-(this.lastHit||0)<.12)return;this.lastHit=o;let l=Math.min(1,n/18);if(l<.1)return;this.play(l>.5?"impactMetal_heavy_00"+(Math.random()*3|0):"impactMetal_light_000",.4+l*.6,.9+Math.random()*.2)}else t==="wreck"&&(this.play("explosionCrunch_000",.9,.8),this.play("impactGlass_heavy_000",.7),this.play("impactPlate_heavy_000",.8,.85))}drop(t){for(let e of t.nodes)try{e.stop()}catch{}t.wk&&t.wk.node.disconnect(),t.out.disconnect()}end(){for(let t of this.engines.concat(this.rivals||[]))this.drop(t);this.engines=[],this.rivals=[],this.cur=null,this.ctx&&this.playMusic("alpha-dance")}pause(){this.ctx&&this.ctx.suspend(),this.music&&this.music.pause()}resume(){if(this.ctx&&this.ctx.resume(),this.music){let t=this.music.play();t&&t.catch&&t.catch(()=>{})}}close(){this.end(),this.music&&(this.music.pause(),this.music.src=""),this.ctx&&this.ctx.close(),this.ctx=null}};var ci=16,me=3.5,Ol=12,Bl=2.5,yg=3.25,Kr=class s{static async load(t){let e=(l,c)=>fetch("assets/city/"+l+"?v="+hn).then(h=>{if(!h.ok)throw new Error(l+" "+h.status);return c?h.arrayBuffer():h.json()}),[n,i,r,a,o]=await Promise.all([e("city.json"),e("net.bin",1),e("ground.bin",1),e("bld.bin",1),e("side.bin",1)]);return t&&t(1),new s(n,i,r,a,o)}constructor(t,e,n,i,r){this.meta=t,this.box=t.box;let a=new Float32Array(e),o=this.n=a.length/3;this.px=new Float32Array(o),this.py=new Float32Array(o),this.pz=new Float32Array(o);for(let d=0;d<o;d++)this.px[d]=a[d*3],this.py[d]=a[d*3+1],this.pz[d]=a[d*3+2];let l=new Uint8Array(r);this.pl=new Float32Array(o),this.pr=new Float32Array(o);for(let d=0;d<o;d++)this.pl[d]=l[d*2]/40,this.pr[d]=l[d*2+1]/40;let c=t.edges,h=this.ne=c.length;this.eOff=new Int32Array(h),this.eN=new Int32Array(h),this.eA=new Int32Array(h),this.eB=new Int32Array(h),this.eHw=new Float32Array(h),this.eCls=new Uint8Array(h),this.eOne=new Uint8Array(h),this.eRa=new Uint8Array(h),this.eLim=new Uint8Array(h),this.eName=new Int32Array(h),this.eLen=new Float32Array(h),this.sE=new Int32Array(o),this.sS=new Float32Array(o),this.tx=new Float32Array(o),this.tz=new Float32Array(o),this.sJ=new Int32Array(o).fill(-1);let u=t.junctions,f=this.nj=u.length;this.jx=new Float32Array(f),this.jz=new Float32Array(f),this.jr=new Float32Array(f),this.jy=new Float32Array(f),this.jEdges=[];for(let d=0;d<f;d++)this.jx[d]=u[d][0],this.jz[d]=u[d][1],this.jr[d]=u[d][2],this.jy[d]=u[d][3],this.jEdges.push([]);for(let d=0;d<h;d++){let x=c[d];this.eOff[d]=x[1],this.eN[d]=x[2],this.eA[d]=x[3],this.eB[d]=x[4],this.eHw[d]=x[5],this.eCls[d]=x[6],this.eOne[d]=x[7],this.eRa[d]=x[8],this.eLim[d]=x[9],this.eName[d]=x[10],this.jEdges[x[3]].push(d),this.jEdges[x[4]].push(d);let g=x[1],p=x[2],S=0;for(let R=0;R<p;R++){let T=g+R;this.sE[T]=d,R>0&&(S+=Math.hypot(this.px[T]-this.px[T-1],this.pz[T]-this.pz[T-1])),this.sS[T]=S;let b=R>0?T-1:T,C=R<p-1?T+1:T,M=this.px[C]-this.px[b],y=this.pz[C]-this.pz[b],A=Math.hypot(M,y)||1;this.tx[T]=M/A,this.tz[T]=y/A}this.eLen[d]=S;let _=this.jr[x[3]],v=this.jr[x[4]];for(let R=0;R<p;R++){let T=g+R,b=this.sS[T];b<_+2?this.sJ[T]=x[3]:S-b<v+2&&(this.sJ[T]=x[4])}}this.lights=t.lights,this.stations=t.stations,this.names=t.names,this.areas=t.areas||[],this.jLight=new Int32Array(f).fill(-1);for(let d=0;d<this.lights.length;d++)this.jLight[this.lights[d].j]=d;this.buildGrid(),this.fitJunctions();let m=new Float32Array(n,0,5);this.g={x0:m[0],z0:m[1],c:m[2],nx:m[3]|0,nz:m[4]|0,h:new Int16Array(n,20,(m[3]|0)*(m[4]|0))},this.bld=new Float32Array(i)}fitJunctions(){let t=this.nj;this.jgx=new Float32Array(t),this.jgz=new Float32Array(t),this.jPlane=new Uint8Array(t);let e=new Int32Array(t);for(let c=0;c<t;c++)e[c]=c;let n=c=>{for(;e[c]!==c;)e[c]=e[e[c]],c=e[c];return c},i=[];for(let c=0;c<t;c++)this.jEdges[c].length>=3&&i.push(c);let r=new Map,a=40,o=(c,h)=>Math.floor(c/a)*1e5+Math.floor(h/a);for(let c of i){let h=o(this.jx[c],this.jz[c]),u=r.get(h);u||r.set(h,u=[]),u.push(c)}for(let c of i){let h=Math.floor(this.jx[c]/a),u=Math.floor(this.jz[c]/a);for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)for(let d of r.get((h+f)*1e5+u+m)||[])d<=c||Math.hypot(this.jx[d]-this.jx[c],this.jz[d]-this.jz[c])<this.jr[c]+this.jr[d]+4&&(e[n(d)]=n(c))}let l=new Map;for(let c of i){let h=n(c),u=l.get(h);u||l.set(h,u=[]),u.push(c)}for(let c of l.values()){let h=this.jx[c[0]],u=this.jz[c[0]],f=0,m=0,d=0,x=0,g=0,p=0,S=0,_=0,v=0,R=new Set;for(let K of c){let it=this.jr[K]+Ol+2;for(let ht of this.jEdges[K]){let St=this.eOff[ht],dt=this.eN[ht];for(let W=0;W<dt;W++){let Q=St+W;if(R.has(Q))continue;let ut=this.px[Q]-this.jx[K],rt=this.pz[Q]-this.jz[K];if(ut*ut+rt*rt>it*it)continue;R.add(Q);let Tt=this.px[Q]-h,Rt=this.pz[Q]-u,xt=this.py[Q];f++,m+=Tt,d+=Rt,x+=xt,g+=Tt*Tt,p+=Rt*Rt,S+=Tt*Rt,_+=Tt*xt,v+=Rt*xt}}}if(f<3)continue;let T=m/f,b=d/f,C=x/f,M=g/f-T*T+.001,y=S/f-T*b,A=p/f-b*b+.001,L=_/f-T*C,I=v/f-b*C,D=M*A-y*y;if(Math.abs(D)<1e-9)continue;let X=(L*A-y*I)/D,B=(M*I-y*L)/D,Z=Math.hypot(X,B);Z>.35&&(X*=.35/Z,B*=.35/Z);let V=C-X*T-B*b;for(let K of c)this.jgx[K]=X,this.jgz[K]=B,this.jy[K]=V+X*(this.jx[K]-h)+B*(this.jz[K]-u),this.jPlane[K]=1}}onPlaza(t,e,n){let i=e-this.jx[t],r=n-this.jz[t],a=this.jr[t]+.5;return this.jPlane[t]===1&&i*i+r*r<a*a}planeY(t,e,n){return this.jy[t]+this.jgx[t]*(e-this.jx[t])+this.jgz[t]*(n-this.jz[t])}blend(t,e){let n=this.eA[t],i=this.eB[t],r=0,a=-1;if(this.jPlane[n]){let o=1-(e-this.jr[n])/Ol;o>r&&(r=o,a=n)}if(this.jPlane[i]){let o=1-(this.eLen[t]-e-this.jr[i])/Ol;o>r&&(r=o,a=i)}return this._bj=a,r>1?1:r}surfY(t,e,n,i,r){let a=this.blend(t,e);return a>0?r+(this.planeY(this._bj,n,i)-r)*a:r}buildGrid(){let t=this.box;this.gx0=t.x0-64,this.gz0=t.z0-64;let e=this.gnx=Math.ceil((t.x1-t.x0+128)/ci),n=this.gnz=Math.ceil((t.z1-t.z0+128)/ci),i=new Int32Array(e*n+1),r=l=>{for(let c=0;c<this.n-1;c++){let h=this.sE[c];if(this.sE[c+1]!==h)continue;let u=this.eHw[h]+me+9,f=Math.min(this.px[c],this.px[c+1])-u,m=Math.max(this.px[c],this.px[c+1])+u,d=Math.min(this.pz[c],this.pz[c+1])-u,x=Math.max(this.pz[c],this.pz[c+1])+u,g=Math.max(0,Math.floor((f-this.gx0)/ci)),p=Math.min(e-1,Math.floor((m-this.gx0)/ci)),S=Math.max(0,Math.floor((d-this.gz0)/ci)),_=Math.min(n-1,Math.floor((x-this.gz0)/ci));for(let v=S;v<=_;v++)for(let R=g;R<=p;R++)l(v*e+R,c)}};r(l=>i[l+1]++);for(let l=0;l<e*n;l++)i[l+1]+=i[l];let a=i.slice(0,e*n),o=new Int32Array(i[e*n]);r((l,c)=>{o[a[l]++]=c}),this.cellStart=i,this.cellList=o}groundAt(t,e){let n=this.g,i=(t-n.x0)/n.c,r=(e-n.z0)/n.c,a=Math.max(0,Math.min(n.nx-2,Math.floor(i))),o=Math.max(0,Math.min(n.nz-2,Math.floor(r))),l=Math.max(0,Math.min(1,i-a)),c=Math.max(0,Math.min(1,r-o)),h=n.h,u=n.nx;return((h[o*u+a]*(1-l)+h[o*u+a+1]*l)*(1-c)+(h[(o+1)*u+a]*(1-l)+h[(o+1)*u+a+1]*l)*c)/10}query(t,e,n,i){let r=Math.floor((t-this.gx0)/ci),a=Math.floor((e-this.gz0)/ci),o=-1,l=1e9,c=0,h=-1,u=1e9,f=0,m=n>=0&&n<this.n?this.sE[n]:-1;if(r>=0&&a>=0&&r<this.gnx&&a<this.gnz){let xt=a*this.gnx+r,Wt=this.cellList;for(let Bt=this.cellStart[xt],ee=this.cellStart[xt+1];Bt<ee;Bt++){let N=Wt[Bt],fe=this.px[N],Ut=this.pz[N],Ft=this.px[N+1]-fe,Ct=this.pz[N+1]-Ut,ne=Ft*Ft+Ct*Ct||1,Mt=((t-fe)*Ft+(e-Ut)*Ct)/ne;Mt<0?Mt=0:Mt>1&&(Mt=1);let P=fe+Ft*Mt-t,w=Ut+Ct*Mt-e,$=Math.sqrt(P*P+w*w)-this.eHw[this.sE[N]];this.sE[N]===m&&($-=.05),$<l?(o>=0&&this.sE[o]!==this.sE[N]&&(h=o,u=l,f=c),l=$,o=N,c=Mt):$<u&&this.sE[N]!==this.sE[o]&&(u=$,h=N,f=Mt)}}if(o<0)return i.i=0,i.t=0,i.s=0,i.d=1e3,i.y=this.groundAt(t,e),i.nx=0,i.ny=1,i.nz=0,i.hl=i.hr=0,i.wall=1e9,i.off=2,i.lx=1,i.lz=0,i.fx=0,i.fz=1,i.edge=-1,i.junc=-1,i.lim=50,i.ov=0,i;let d=o,x=this.sE[d],g=this.px[d],p=this.pz[d],S=this.px[d+1]-g,_=this.pz[d+1]-p,v=Math.hypot(S,_)||1,R=c,T=_/v,b=-S/v,C=(t-(g+S*R))*T+(e-(p+_*R))*b,M=this.eHw[x],y=this.py[d]+(this.py[d+1]-this.py[d])*R,A=(this.py[d+1]-this.py[d])/v,L=0,I=0,D=this.sJ[d];if(D>=0){let xt=t-this.jx[D],Wt=e-this.jz[D];xt*xt+Wt*Wt>(this.jr[D]+3)**2&&(D=-1)}if(D<0){let xt=this.eA[x],Wt=this.eB[x];this.onPlaza(xt,t,e)?D=xt:this.onPlaza(Wt,t,e)&&(D=Wt)}let X=this.sS[d]+R*v,B=this.blend(x,X),Z=0,V=0;if(B>0){let xt=this._bj;y+=(this.planeY(xt,t,e)-y)*B,Z=this.jgx[xt]*B,V=this.jgz[xt]*B}let K=0;if(l<0&&u<Bl&&h>=0&&D<0){K=1;let xt=h,Wt=this.sE[xt],Bt=Math.hypot(this.px[xt+1]-this.px[xt],this.pz[xt+1]-this.pz[xt])||1,ee=this.py[xt]+(this.py[xt+1]-this.py[xt])*f,N=this.blend(Wt,this.sS[xt]+f*Bt);N>0&&(ee+=(this.planeY(this._bj,t,e)-ee)*N);let fe=Bl-l,Ut=Bl-u;y+=(ee-y)*Ut/(fe+Ut)}let it=C>=0?C-M:-C-M,ht=C>=0?this.pl[d]+(this.pl[d+1]-this.pl[d])*R:this.pr[d]+(this.pr[d+1]-this.pr[d])*R;if(it>0&&D<0){if(I=1,ht>.6){let xt=it<.4?it/.4:1;y+=.15*xt,it<.4&&(L=(C>=0?1:-1)*.15/.4)}it>ht&&(I=2)}i.wall=ht>=me-.05?M+yg:1e9;let St=S/v,dt=_/v,W=A*(1-B)*St+L*T+Z,Q=A*(1-B)*dt+L*b+V,ut=-W,rt=1,Tt=-Q,Rt=Math.hypot(ut,rt,Tt)||1;return i.i=d,i.t=R,i.s=this.sS[d]+R*v,i.d=C,i.y=y,i.nx=ut/Rt,i.ny=rt/Rt,i.nz=Tt/Rt,i.hl=M,i.hr=M,i.off=I,i.lx=T,i.lz=b,i.fx=St,i.fz=dt,i.edge=x,i.junc=D,i.lim=this.eLim[x],i.ov=K,i}at(t,e,n,i){let r=this.eOff[t],a=this.eN[t];e<0&&(e=0),e>this.eLen[t]&&(e=this.eLen[t]);let o=0,l=a-1;for(;l-o>1;){let g=o+l>>1;this.sS[r+g]<=e?o=g:l=g}let c=r+o,h=Math.min(r+a-1,c+1),u=this.sS[h]-this.sS[c]||1,f=Math.max(0,Math.min(1,(e-this.sS[c])/u)),m=this.tx[c]+(this.tx[h]-this.tx[c])*f,d=this.tz[c]+(this.tz[h]-this.tz[c])*f,x=Math.hypot(m,d)||1;return i.fx=m/x,i.fz=d/x,i.lx=i.fz,i.lz=-i.fx,i.x=this.px[c]+(this.px[h]-this.px[c])*f+i.lx*n,i.z=this.pz[c]+(this.pz[h]-this.pz[c])*f+i.lz*n,i.y=this.surfY(t,e,i.x,i.z,this.py[c]+(this.py[h]-this.py[c])*f),i.i=c,i.hw=this.eHw[t],i}canLeave(t,e){return!this.eOne[t]||this.eA[t]===e}other(t,e){return this.eA[t]===e?this.eB[t]:this.eA[t]}route(t,e,n,i,r){let a=this.nj;this._dist||(this._dist=new Float64Array(a),this._prev=new Int32Array(a),this._pe=new Int32Array(a));let o=this._dist,l=this._prev,c=this._pe;o.fill(1/0),l.fill(-1),c.fill(-1);let h=[],u=(C,M)=>{h.push(C,M);let y=h.length/2-1;for(;y>0;){let A=y-1>>1;if(h[A*2]<=h[y*2])break;let L=h[A*2],I=h[A*2+1];h[A*2]=h[y*2],h[A*2+1]=h[y*2+1],h[y*2]=L,h[y*2+1]=I,y=A}},f=()=>{let C=h[0],M=h[1],y=h[h.length-2],A=h[h.length-1];if(h.length-=2,h.length){h[0]=y,h[1]=A;let L=0,I=h.length/2;for(;;){let D=2*L+1,X=D+1,B=L;if(D<I&&h[D*2]<h[B*2]&&(B=D),X<I&&h[X*2]<h[B*2]&&(B=X),B===L)break;let Z=h[B*2],V=h[B*2+1];h[B*2]=h[L*2],h[B*2+1]=h[L*2+1],h[L*2]=Z,h[L*2+1]=V,L=B}}return[C,M]},m=this.eLen[t],d=n>0?this.eB[t]:this.eA[t],x=n>0?this.eA[t]:this.eB[t],g=n>0?m-e:e;o[d]=g,u(g,d),c[d]=t,!this.eOne[t]&&o[x]>m-g+60&&(o[x]=m-g+60,u(o[x],x),c[x]=t);let p=1/0;if(i===t){let C=(r-e)*n;C>=0&&(p=C)}let S=this.eA[i],_=this.eB[i],v=this.eLen[i];for(;h.length;){let[C,M]=f();if(!(C>o[M])){if(C>p)break;for(let y of this.jEdges[M]){if(!this.canLeave(y,M))continue;let A=this.other(y,M),L=C+this.eLen[y]*(this.eCls[y]>=5?1.15:1);L<o[A]&&(o[A]=L,l[A]=M,c[A]=y,u(L,A))}}}let R=-1,T=p;if(o[S]+r<T&&this.canLeave(i,S)&&(T=o[S]+r,R=S),o[_]+(v-r)<T&&(!this.eOne[i]||this.eA[i]===_)&&(T=o[_]+(v-r),R=_),T===1/0)return null;let b=[];if(R>=0){b.push([i,R===S?1:-1]);let C=R;for(let M=0;M<5e3&&l[C]>=0;M++){let y=c[C],A=l[C];b.push([y,this.eA[y]===A&&this.eB[y]===C?1:-1]),C=A}b.push([t,C===this.eB[t]?1:-1]),b.reverse()}else b.push([t,n]);return{len:T,edges:b}}project(t,e,n,i){let r=this.eOff[t],a=this.eN[t],o=Math.max(0,Math.min(a-2,Math.round(e/4)));for(;o>0&&this.sS[r+o]>e;)o--;let l=e,c=1e18;for(let h=Math.max(0,o-3);h<=Math.min(a-2,o+3);h++){let u=r+h,f=this.px[u],m=this.pz[u],d=this.px[u+1]-f,x=this.pz[u+1]-m,g=d*d+x*x||1,p=((n-f)*d+(i-m)*x)/g;p=p<0?0:p>1?1:p;let S=f+d*p-n,_=m+x*p-i,v=S*S+_*_;v<c&&(c=v,l=this.sS[u]+p*Math.sqrt(g))}return l}slot(t,e){return this.jEdges[e].indexOf(t)}edgeName(t,e){return this.nameText(this.eName[t],e)}areaName(t,e,n){let i=-1,r=1e18;for(let a=0;a<this.areas.length;a++){let o=this.areas[a],l=Math.hypot(o[0]-t,o[1]-e)/o[3];l<r&&(r=l,i=a)}return i>=0&&r<1400?this.nameText(this.areas[i][2],n):""}nameText(t,e){let n=this.names[t];return n?e==="ar"?n[1]||n[0]:n[0].replace(/[\u0600-\u06FF\u0750-\u077F\u2D30-\u2D7F]+/g,"").replace(/\s+/g," ").trim()||n[0]:""}};var Qe={city:{model:"car_city",cls:"D",mass:1090,power:110,torque:250,rpm:6300,gears:[3.42,2,1.42,1.1,.9,.76],final:4.05,cda:.66,cl:.04,mu:1.06,steer:.64,nitro:4.2,drive:"f",turbo:1,cyl:3,shift:.28},hatch:{model:"car_hatch",cls:"D",mass:1235,power:96,torque:230,rpm:6200,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.64,cl:.03,mu:1,steer:.62,nitro:3.6,drive:"f",turbo:1,cyl:3,shift:.45},volt:{model:"car_volt",cls:"C",mass:1920,power:366,torque:510,rpm:16500,gears:[1],final:9,cda:.5,cl:.04,mu:1.04,steer:.58,nitro:7,drive:"a",ev:1},suvlux:{model:"car_suvlux",cls:"C",mass:2250,power:300,torque:620,rpm:6500,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.3,cda:1.05,cl:.03,mu:1,steer:.56,nitro:8,drive:"a",turbo:1,cyl:8},wedge:{model:"car_wedge",cls:"B",mass:3150,power:447,torque:960,rpm:12800,gears:[1],final:9,cda:1,cl:.02,mu:1,steer:.52,nitro:11,drive:"a",ev:1},police:{model:"car_police",cls:"A",mass:1900,power:330,torque:570,rpm:6600,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.2,cda:.74,cl:.06,mu:1.08,steer:.56,nitro:8.5,drive:"a",turbo:1,cyl:6},gt:{model:"car_gt",cls:"S",mass:1150,power:620,torque:760,rpm:9200,gears:[3,2.1,1.62,1.31,1.1,.94,.82],final:3.3,cda:.7,cl:.7,mu:1.32,steer:.52,nitro:11,drive:"r",cyl:10},t_small:{model:"tr_sedan",cls:"T",mass:1250,power:85,torque:170,rpm:6e3,gears:[3.5,2,1.3,1,.8],final:4,cda:.7,cl:0,mu:.95,steer:.6,nitro:0,drive:"f",cyl:4},t_heavy:{model:"tr_truck",cls:"T",mass:3500,power:120,torque:450,rpm:4e3,gears:[5,3,1.9,1.3,1,.8],final:4.1,cda:1.6,cl:0,mu:.9,steer:.55,nitro:0,drive:"r",cyl:6,diesel:1}};function Mg(s){return Math.sin(1.45*Math.atan(14*s))}var hs=class{constructor(t,e,n){this.spec=t;let i=Object.assign({engine:0,nitro:0,grip:0,gearbox:0,brakes:0},n);this.up=i,this.power=t.power*(1+.06*i.engine),this.torqueMax=t.torque*(1+.06*i.engine),this.nitroForce=t.nitro*1e3*(1+.08*i.nitro),this.mu=t.mu*(1+.025*i.grip),this.shiftTime=(t.shift||.15)*(1-.13*i.gearbox),this.gearPull=1+.025*i.gearbox,this.brakeGrip=1+.035*i.brakes,this.spinT=0,this.spinDur=.9,this.spinDir=1,this.spinA=0,this.spinDone=!1,this.mass=t.mass,this.invMass=1/t.mass;let r=e.w,a=e.h*.8,o=e.l,l=t.mass;this.Ix=l*(a*a+o*o)/12,this.Iy=l*(r*r+o*o)/12,this.Iz=l*(r*r+a*a)/12,this.half={x:r/2,y:e.h/2,z:o/2},this.cgY=e.cg,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.wx=0,this.wy=0,this.wz=0,this.R=new Float32Array(9),this.wheels=[];let c=(e.wheels[0].z+e.wheels[1].z)/2,h=(e.wheels[2].z+e.wheels[3].z)/2,u=t.drive==="r"?.45:t.drive==="f"?.6:.5;this.cgZ=h+u*(c-h);for(let m=0;m<4;m++){let d=e.wheels[m];this.wheels.push({mx:d.x,my:d.y-this.cgY+.18,mz:d.z-this.cgZ,r:d.r,front:m<2,rest:.36,comp:0,prevComp:0,contact:!1,load:0,spin:0,spinAngle:0,steer:0,slipLat:0,slipLong:0,cx:0,cy:0,cz:0,surf:0,hint:0,travel:0})}let f=.11;this.k=t.mass*9.81/4/f,this.c=2*.32*Math.sqrt(this.k*t.mass/4),this.input={throttle:0,brake:0,steer:0,handbrake:0,nitro:0},this.steerNow=0,this.gear=1,this.rpm=t.ev?0:900,this.shiftT=0,this.nitroOn=0,this.grounded=0,this.airTime=0,this.speed=0,this.fwdSpeed=0,this.latSpeed=0,this.hint=0,this.assist={esc:1,tc:1,air:1},this.reverse=!1,this.stopT=0,this.hold=!1,this.wrecked=0,this.topSpeedCap=1e9,this.gearbox=null,this.mgear=1,this.stalled=!1,this.fuelCut=!1,this.clutchE=1,this.input.clutch=0,this.updateR()}manualDrive(t,e,n){let i=this.spec,r=this.input,a=this.mgear;this.shiftT>0&&(this.shiftT-=t),this.reverse=a<0,this.gear=a>0?a:1;let o=a===0?0:(a<0?i.gears[0]*1.08:i.gears[a-1])*i.final,l=Math.max(Math.abs(e)/.34,n)*o*30/Math.PI,c=i.ev?0:850,h=this.stalled||this.fuelCut,u=h?0:r.throttle,f;if(a===0||this.shiftT>0?f=0:this.gearbox==="clutch"?f=1-Math.max(0,Math.min(1,r.clutch)):f=u<.05&&l<c*1.15?0:Math.max(.12,Math.min(1,(l-250)/1150)),this.clutchE=f,h)this.rpm+=(0-this.rpm)*Math.min(1,t*3);else{let x=c+u*(i.rpm*1.02-c),g=f*f,p=Math.max(g>.9?300:c,x*(1-g)+l*g);this.rpm+=(p-this.rpm)*Math.min(1,t*(f>.9?25:7)),this.rpm>i.rpm*1.05&&(this.rpm=i.rpm*1.05)}this.gearbox==="clutch"&&!h&&f>.6&&this.rpm<460&&!i.ev&&(this.stalled=!0),this.stalled&&r.clutch>.9&&!this.fuelCut&&(this.stalled=!1,this.rpm=c);let m=0;!h&&f>0&&(m=this.engineTorque(Math.max(this.rpm,c))*u,u<.05&&l>c*1.1&&(m-=this.torqueMax*.12*(.3+l/i.rpm)),this.rpm>=i.rpm&&m>0&&(m*=.15),m*=f);let d=m*o*.88/.34*this.gearPull;return a<0?-d:d}shift(t){let e=this.spec.gears.length,n=this.mgear+t;return n<-1||n>e?"end":this.gearbox==="clutch"&&this.input.clutch<.6?"clutch":n<0&&this.fwdSpeed>1.5?"moving":n>0&&this.gearbox==="manual"&&Math.abs(this.fwdSpeed)/.34*this.spec.gears[n-1]*this.spec.final*30/Math.PI>this.spec.rpm*1.02?"revs":(this.mgear=n,this.shiftT=this.gearbox==="clutch"?0:this.shiftTime||.2,"")}updateR(){let t=this.qx,e=this.qy,n=this.qz,i=this.qw,r=this.R;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}setPose(t,e,n,i){this.px=t,this.py=e,this.pz=n;let r=i/2;this.qx=0,this.qy=Math.sin(r),this.qz=0,this.qw=Math.cos(r),this.vx=this.vy=this.vz=0,this.wx=this.wy=this.wz=0;for(let a of this.wheels)a.comp=a.prevComp=.1,a.spin=0;this.updateR()}yaw(){return Math.atan2(this.R[6],this.R[8])}applyAngular(t,e,n,i){let r=this.R,a=r[0]*t+r[1]*e+r[2]*n,o=r[3]*t+r[4]*e+r[5]*n,l=r[6]*t+r[7]*e+r[8]*n,c=a/this.Ix,h=o/this.Iy,u=l/this.Iz;this.wx+=(r[0]*c+r[3]*h+r[6]*u)*i,this.wy+=(r[1]*c+r[4]*h+r[7]*u)*i,this.wz+=(r[2]*c+r[5]*h+r[8]*u)*i}impulse(t,e,n,i,r,a){this.vx+=t*this.invMass,this.vy+=e*this.invMass,this.vz+=n*this.invMass,this.applyAngular(r*n-a*e,a*t-i*n,i*e-r*t,1)}invMassAt(t,e,n,i,r,a){let o=e*a-n*r,l=n*i-t*a,c=t*r-e*i,h=this.R,u=h[0]*o+h[1]*l+h[2]*c,f=h[3]*o+h[4]*l+h[5]*c,m=h[6]*o+h[7]*l+h[8]*c;return this.invMass+u*u/this.Ix+f*f/this.Iy+m*m/this.Iz}engineTorque(t){let e=t/this.spec.rpm,n=this.spec,i=n.ev?0:n.turbo?.33:.55,r=e<i?.55+.45*(e/i):e<.9?1:1-(e-.9)*(n.ev?1.5:2.5);r<0&&(r=0);let a=this.torqueMax*r,o=this.power*1e3/Math.max(100,t*Math.PI/30);return Math.min(a,o)}startSpin(t){this.spinT=this.spinDur,this.spinDir=t,this.spinA=0,this.spinDone=!1}stopSpin(){this.spinT=0,this.spinA=0}lockAt(t,e=0,n=!1){let i=this.spec,r=Math.max(0,t),a=i.steer/(1+r*.035);if(n)return a;let o=Math.max(1.5,this.wheels[0].mz-this.wheels[2].mz);return Math.min(a,Math.atan(o*i.mu*9.81/Math.max(1,r*r))+.13+e)}step(t,e,n){let i=this.spec,r=this.R,a=this.input,o=r[0],l=r[1],c=r[2],h=r[3],u=r[4],f=r[5],m=r[6],d=r[7],x=r[8],g=Math.hypot(this.vx,this.vy,this.vz),p=this.vx*m+this.vy*d+this.vz*x;this.speed=g,this.fwdSpeed=p,this.latSpeed=this.vx*o+this.vy*l+this.vz*c;let S=this.lockAt(p,Math.abs(Math.atan2(this.latSpeed,Math.max(1,Math.abs(p)))),a.handbrake>0),_=a.steer*S,v=2.6*t;this.steerNow+=Math.max(-v,Math.min(v,_-this.steerNow));let R=this.wheels[2].r,T=0,b=0;for(let st=0;st<4;st++){let H=this.wheels[st];(i.drive==="a"||i.drive==="f"===H.front)&&(T+=Math.abs(H.spin),b++)}let C=T/Math.max(1,b)*R/.34,M=0;if(this.gearbox)M=this.manualDrive(t,p,C);else{let st=i.gears[this.gear-1]*i.final,H=Math.abs(p)/.34,at=Math.max(i.ev?0:900,Math.min(i.rpm*1.02,Math.max(H,C)*st*30/Math.PI));this.rpm+=(at-this.rpm)*Math.min(1,t*25),this.shiftT>0?this.shiftT-=t:!this.reverse&&this.grounded&&(H*st*30/Math.PI>i.rpm*.95&&this.gear<i.gears.length?(this.gear++,this.shiftT=this.shiftTime):this.gear>1&&H*i.gears[this.gear-2]*i.final*30/Math.PI<i.rpm*(a.throttle>.5?.72:.6)&&(this.gear--,this.shiftT=.1)),a.brake>.5&&p<.8&&a.throttle<.1&&!this.hold?this.stopT+=t:this.stopT=0,this.stopT>.35&&(this.reverse=!0),a.throttle>.1&&this.reverse&&(this.reverse=!1),this.reverse&&(this.gear=1);let Pt=this.reverse?a.brake:a.throttle;this.shiftT<=0&&Pt>0&&(M=this.engineTorque(this.rpm)*Pt*i.gears[this.gear-1]*i.final*.88/.34*this.gearPull,this.reverse&&(M=-Math.min(M,4e3)),this.rpm>=i.rpm*1&&!this.reverse&&(M*=.2))}this.fuelCut&&!this.gearbox&&(M=0,this.rpm=0,this.reverse=!1),p>this.topSpeedCap&&(M=Math.min(M,0));let y=this.nitroOn>0?this.nitroForce*this.nitroOn:0,A=this.reverse&&!this.gearbox?0:a.brake;!this.reverse&&a.throttle<.05&&a.brake<.05&&Math.abs(p)<.8&&(A=.5),this.hold&&(A=1);let L=A*this.mass*9.81*1.15*this.brakeGrip,I=this.spinT>0;I&&(M=0);let D=0,X=-this.mass*9.81,B=0,Z=0,V=0,K=0,it=0,ht=this.steerNow,St=Math.cos(ht),dt=Math.sin(ht),W=I?0:a.handbrake,Q=this.mass/4;for(let st=0;st<4;st++){let H=this.wheels[st],at=o*H.mx+h*H.my+m*H.mz,Pt=l*H.mx+u*H.my+d*H.mz,nt=c*H.mx+f*H.my+x*H.mz,mt=this.px+at,wt=this.py+Pt,It=this.pz+nt;e.query(mt,It,H.hint,n),H.hint=n.i,H.surf=n.off;let vt=u>.25?u:.25,kt=(wt-n.y)/vt,Lt=H.rest+H.r-kt;if(H.prevComp=H.comp,Lt<=0||u<.2){H.contact=!1,H.comp=0,H.load=0,H.slipLat=0,H.slipLong=0,H.travel=H.rest,H.spin*=.995;continue}let qt=Math.min(Lt,H.rest+.12);H.comp=qt,H.travel=H.rest-qt,H.contact=!0,it++;let U=(qt-H.prevComp)/t,ct=this.k*qt+this.c*U*(U<0?1.7:1);Lt>H.rest+.12&&(ct+=(Lt-H.rest-.12)*this.k*6+Math.max(0,U)*this.c*2),ct<0&&(ct=0),H.load=ct;let j=mt-h*kt,tt=wt-u*kt,gt=It-f*kt;H.cx=j,H.cy=tt,H.cz=gt;let pt=j-this.px,Nt=tt-this.py,oe=gt-this.pz,be=this.vx+(this.wy*oe-this.wz*Nt),Jt=this.vy+(this.wz*pt-this.wx*oe),Oe=this.vz+(this.wx*Nt-this.wy*pt),Se=m,Ze=d,je=x;H.front&&(Se=m*St+o*dt,Ze=d*St+l*dt,je=x*St+c*dt);let He=n.nx,Sn=n.ny,Gn=n.nz,Li=Se*He+Ze*Sn+je*Gn;Se-=He*Li,Ze-=Sn*Li,je-=Gn*Li;let Wn=Math.hypot(Se,Ze,je)||1;Se/=Wn,Ze/=Wn,je/=Wn;let ms=Sn*je-Gn*Ze,fi=Gn*Se-He*je,gs=He*Ze-Sn*Se,dn=be*Se+Jt*Ze+Oe*je,xs=be*ms+Jt*fi+Oe*gs,wa=this.mu*(n.off===0?1:.85),Vs=ct,z=wa*(1.08-.08*Math.min(2,Vs/(this.mass*9.81/4)))*Vs,q=Math.atan2(xs,Math.abs(dn)+1.5),Y=1;!H.front&&W>0&&(Y=.42),I&&(Y=.06);let F=-Mg(q)*z*Y,ot=Math.abs(xs)*Q/t;Math.abs(F)>ot&&(F=F>0?ot:-ot);let lt=0,_t=i.drive==="a"||i.drive==="f"===H.front;_t&&(lt+=M/b),y&&!H.front&&(lt+=y/2);let yt=L*(H.front?.32:.18);if(!H.front&&W>0&&(yt+=W*this.mass*9.81*.35),yt>0){let Pe=Math.abs(dn)*Q/t,Zt=Math.min(yt,Pe);lt-=dn>0?Zt:-Zt}if(lt-=.013*ct*Math.max(-1,Math.min(1,dn)),H.slipLong=0,Math.abs(lt)>z&&(H.slipLong=Math.min(1,(Math.abs(lt)-z)/z),this.assist.tc&&_t&&M>0&&(lt=Math.sign(lt)*z*.98)),this.assist.tc&&_t&&M>0&&W===0&&lt>0){let Pe=Math.sqrt(Math.max(0,z*z-F*F))*.98;lt>Pe&&(lt=Pe)}let Dt=yt>0&&M<=0?z*this.brakeGrip:z,Ot=Math.hypot(lt,F);if(Ot>Dt){let Pe=Dt/Ot;lt*=Pe,F*=Pe}H.slipLat=Math.abs(xs)>1.5?Math.min(1,(Math.abs(q)-.13)*4):0,H.slipLat<0&&(H.slipLat=0),!H.front&&W>0&&Math.abs(dn)>6&&(H.slipLat=Math.max(H.slipLat,.6));let Et=dn/H.r;H.spin=Et*(1+H.slipLong*.6)+(_t&&M>0&&H.slipLong>0?6*H.slipLong:0),!H.front&&W>0&&Math.abs(dn)>1&&(H.spin*=.2);let Xt=He*ct+Se*lt+ms*F,ie=Sn*ct+Ze*lt+fi*F,se=Gn*ct+je*lt+gs*F;D+=Xt,X+=ie,B+=se;let Ce=pt,Yt=Nt+.25*kt,At=oe;Z+=Yt*se-At*ie,V+=At*Xt-Ce*se,K+=Ce*ie-Yt*Xt}for(let st=0;st<4;st++){let H=this.wheels[st];H.spinAngle+=H.spin*t,H.spinAngle>1e4&&(H.spinAngle-=1e4)}let ut=.5*1.225*i.cda*g;D-=ut*this.vx,X-=ut*this.vy,B-=ut*this.vz;let rt=.5*1.225*i.cl*p*Math.abs(p)*(it>0?1:.2);D-=h*rt,X-=u*rt,B-=f*rt,this.grounded=it,it===0?this.airTime+=t:this.airTime=0;let Tt=this.wx*h+this.wy*u+this.wz*f;if(it>=3&&this.assist.esc&&W===0&&!I&&p>5){let st=this.wheels[0].mz-this.wheels[2].mz,H=i.mu*9.81*1.1/p,at=Math.max(-H,Math.min(H,p*Math.tan(ht)/st)),Pt=Tt-at;if(Pt*Tt>0){let nt=-Pt*this.Iy*6*this.assist.esc;Z+=h*nt,V+=u*nt,K+=f*nt}}if(it>=3&&W>0&&!I&&p>12){let st=a.steer*this.Iy*1.4;Z+=h*st,V+=u*st,K+=f*st}if(it===0&&g>8){let st=Math.atan2(this.latSpeed,Math.max(1,Math.abs(p))),H=this.wx*h+this.wy*u+this.wz*f,at=this.Iy*((.6+2.4*this.assist.air)*st-(.3+1.5*this.assist.air)*H);Z+=h*at,V+=u*at,K+=f*at}if(it===0&&this.assist.air&&!this.wrecked){let st=-f,H=h,at=7*this.assist.air,Pt=3.2*this.assist.air;Z+=(st*at-this.wx*Pt)*this.Ix,K+=(H*at-this.wz*Pt)*this.Iz}if(this.vx+=D*this.invMass*t,this.vy+=X*this.invMass*t,this.vz+=B*this.invMass*t,this.applyAngular(Z,V,K,t),I){let st=this.spinDur,H=st-this.spinT,at=this.spinDir*Math.PI*Math.PI/st*Math.sin(Math.PI*Math.min(1,H/st)),Pt=this.wx*h+this.wy*u+this.wz*f;if(this.wx+=h*(at-Pt),this.wy+=u*(at-Pt),this.wz+=f*(at-Pt),this.spinA+=Math.abs(at)*t,this.spinT-=t,this.spinT<=0){this.spinT=0;let nt=this.wx*h+this.wy*u+this.wz*f;this.wx-=h*nt,this.wy-=u*nt,this.wz-=f*nt,this.spinA>Math.PI*1.8&&(this.spinDone=!0)}}let Rt=it?.995:.999;this.wx*=Rt,this.wy*=Rt,this.wz*=Rt,this.px+=this.vx*t,this.py+=this.vy*t,this.pz+=this.vz*t;let xt=this.qx,Wt=this.qy,Bt=this.qz,ee=this.qw,N=this.wx,fe=this.wy,Ut=this.wz;this.qx+=.5*t*(N*ee+fe*Bt-Ut*Wt),this.qy+=.5*t*(fe*ee+Ut*xt-N*Bt),this.qz+=.5*t*(Ut*ee+N*Wt-fe*xt),this.qw+=.5*t*(-N*xt-fe*Wt-Ut*Bt);let Ft=Math.hypot(this.qx,this.qy,this.qz,this.qw);this.qx/=Ft,this.qy/=Ft,this.qz/=Ft,this.qw/=Ft,this.updateR(),e.query(this.px,this.pz,this.hint,n),this.hint=n.i,this.trackQ_s=n.s,this.trackQ_d=n.d;let Ct=n.y+.25,ne=this.half.x,Mt=this.half.y*.9,P=this.half.z,w=1e9,G=0,$=0,et=0;for(let st=0;st<8;st++){let H=st&1?ne:-ne,at=st&2?Mt:-Mt*.4,Pt=(st&4?P:-P)-this.cgZ,nt=o*H+h*at+m*Pt,mt=l*H+u*at+d*Pt,wt=c*H+f*at+x*Pt,It=this.py+mt;It<w&&(w=It,G=nt,$=mt,et=wt)}let J=n.y-w;if(this.bodyHit=0,J>0){this.py+=J*.8;let st=n.nx,H=n.ny,at=n.nz,Pt=this.vx+(this.wy*et-this.wz*$),nt=this.vy+(this.wz*G-this.wx*et),mt=this.vz+(this.wx*$-this.wy*G),wt=Pt*st+nt*H+mt*at;if(wt<0){let It=this.invMassAt(G,$,et,st,H,at),vt=-1.25*wt/It;this.impulse(st*vt,H*vt,at*vt,G,$,et);let kt=Pt-st*wt,Lt=nt-H*wt,qt=mt-at*wt,U=Math.hypot(kt,Lt,qt);if(U>.01){let ct=Math.min(vt*.6,U/It);this.impulse(-kt/U*ct,-Lt/U*ct,-qt/U*ct,G,$,et)}this.bodyHit=-wt}}Ct>this.py&&it===0&&J<=0}};var Ae={uSun:{value:new k(.45,.75,-.48).normalize()},uSunCol:{value:new zt(1,.94,.84)},uSky:{value:new zt(.55,.72,.95)},uGround:{value:new zt(.42,.38,.32)},uFog:{value:new zt(.74,.82,.92)},uFogNear:{value:220},uFogFar:{value:900},uTime:{value:0},uNight:{value:0}},hi=`
varying float vFog;
`,Qr=`
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`,On=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`,kl=`
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;function us(){return new pe({uniforms:Ae,vertexShader:On+hi+`
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
  `+Qr+`
}`,fragmentShader:On+kl+hi+`
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function Fh(){return new pe({uniforms:Ae,vertexShader:On+hi+`
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  `+Qr+`
}`,fragmentShader:On+kl+hi+`
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
}`})}function ta(s,t,e){return new pe({uniforms:Object.assign({uPaint:{value:new zt(s||13639712)},uRoof:{value:new zt(t>=0?t:s||13639712)},uRoofY:{value:e||99},uBrake:{value:0}},Ae),vertexShader:On+hi+`
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
  `+Qr+`
}`,fragmentShader:On+kl+hi+`
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
}`})}function Oh(){return new pe({uniforms:Ae,depthWrite:!1,side:Ue,vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:On+`
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
}`})}function Bh(){return new pe({uniforms:Ae,vertexShader:On+hi+`
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; `+Qr+" }",fragmentShader:On+hi+`
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
}`})}function ea(){return new pe({uniforms:{uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:Ei,vertexShader:"attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }"})}function kh(s){return new pe({uniforms:{uScale:{value:600},uNight:Ae.uNight},transparent:!0,depthWrite:!1,blending:s?Ei:ei,vertexShader:`attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,fragmentShader:"uniform float uNight; varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); float lum = max(vCol.r, max(vCol.g, vCol.b)); vec3 c = vCol.rgb * mix(1.0, 0.3, uNight * step(abs(vCol.r - vCol.b), 0.1)); gl_FragColor = vec4(c, a); }"})}function na(){return new pe({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }"})}var Xl=["wfl","wfr","wbl","wbr"];function Bs(s){let t=Fl(s),e=t.parts.find(o=>o.name==="body"),n=Xl.map(o=>{let l=t.parts.find(c=>c.name===o);return l?{x:l.pivot[0],y:l.pivot[1],z:l.pivot[2],r:l.radius}:null}),i=e.max[0]-e.min[0],r=e.max[2]-e.min[2],a=e.max[1];for(let o=0;o<4;o++)n[o]||(n[o]={x:(o&1?-1:1)*i*.4,y:.35,z:(o<2?1:-1)*r*.32,r:.35});return{w:i,l:r,h:a,cg:Math.min(.62,a*.38),wheels:n,front:e.max[2],back:e.min[2]}}var Hl=null,Vl=null;function bg(){if(Hl)return Hl;let s=new os(.16,1,8,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,-.5);let t=s.attributes.position.count,e=new Uint8Array(t*4);for(let n=0;n<t;n++){let r=-s.attributes.position.getZ(n);e[n*4]=120+135*(1-r),e[n*4+1]=160*(1-r)+60,e[n*4+2]=255,e[n*4+3]=255*(1-r*.9)}return s.setAttribute("col",new Ht(e,4,!0)),Hl=s,s}function Sg(){if(Vl)return Vl;let s=new ri(1,1);s.rotateX(-Math.PI/2);let t=new Uint8Array(4*4);for(let e=0;e<4;e++)t[e*4+3]=140;return s.setAttribute("col",new Ht(t,4,!0)),Vl=s,s}var Gl=null,Wl=null,fs=class{constructor(t,e,n,i){this.scene=t,this.root=new vn,this.root.matrixAutoUpdate=!1;let r=Fl(e);this.mat=ta(n,i,r.roofY),this.body=new Kt(Ii(e,"body"),this.mat),this.body.matrixAutoUpdate=!1,this.root.add(this.body);for(let o of r.parts)if(o.name!=="body"&&o.name[0]!=="w"){let l=new Kt(Ii(e,o.name),this.mat);l.matrixAutoUpdate=!1,this.root.add(l)}this.wheels=[];let a=Bs(e);this.dims=a;for(let o=0;o<4;o++){let l=r.parts.find(h=>h.name===Xl[o]),c=new Kt(l?Ii(e,Xl[o]):Ii("debris_tire","body"),this.mat);c.matrixAutoUpdate=!1,c.userData.base=new k(a.wheels[o].x,a.wheels[o].y,a.wheels[o].z),this.root.add(c),this.wheels.push(c)}Gl=Gl||na(),this.shadow=new Kt(Sg(),Gl),this.shadow.matrixAutoUpdate=!1,this.shadow.renderOrder=1,t.add(this.shadow),Wl=Wl||ea(),this.flames=[];for(let o of[.35,-.35]){let l=new Kt(bg(),Wl);l.position.set(o*a.w*.6,a.h*.28,a.back-.05),l.visible=!1,l.renderOrder=2,this.root.add(l),this.flames.push(l)}this.q=new yn,this.e=new on,this.tmp=new re,this.v3=new k,this.s3=new k(1,1,1),t.add(this.root),this.lod=0}setPaint(t,e){this.mat.uniforms.uPaint.value.setHex(t),this.mat.uniforms.uRoof.value.setHex(e>=0?e:t)}sync(t,e,n,i){let r=t.R,a=this.root.matrix.elements,o=this.dims.cg;a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=r[3],a[5]=r[4],a[6]=r[5],a[7]=0,a[8]=r[6],a[9]=r[7],a[10]=r[8],a[11]=0;let l=t.cgZ||0;a[12]=t.px-r[3]*o-r[6]*l,a[13]=t.py-r[4]*o-r[7]*l,a[14]=t.pz-r[5]*o-r[8]*l,a[15]=1,this.root.matrixWorldNeedsUpdate=!0;let c=e<140;this.lod=e>900?2:c?0:1,this.root.visible=this.lod<2;for(let v=0;v<4;v++){let R=this.wheels[v],T=t.wheels[v];if(R.visible=this.lod===0||e<260,!R.visible)continue;let b=R.userData.base,C=T.front?t.steerNow:0;this.e.set(T.spinAngle,C,0,"YXZ"),this.q.setFromEuler(this.e),this.v3.set(b.x,b.y+(.1-(T.contact?T.travel-.25:.12))*.6,b.z),R.matrix.compose(this.v3,this.q,this.s3)}let h=n>0&&this.lod===0;for(let v of this.flames)if(v.visible=h,h){let R=.7+n*(.8+Math.random()*.5);v.scale.set(1,1,R*1.6),v.updateMatrix()}this.mat.uniforms.uBrake.value=i;let u=this.shadow.matrix.elements,f=Math.atan2(r[6],r[8]),m=Math.cos(f),d=Math.sin(f),x=t.groundY!==void 0?t.groundY:t.py-.6,g=Math.max(0,t.py-x-.5),p=Math.max(.3,1-g*.12),S=this.dims.w*1.15*p,_=this.dims.l*1.05*p;u[0]=m*S,u[1]=0,u[2]=-d*S,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=d*_,u[9]=0,u[10]=m*_,u[11]=0,u[12]=t.px,u[13]=x+.06,u[14]=t.pz,u[15]=1,this.shadow.matrixWorldNeedsUpdate=!0,this.shadow.visible=this.lod===0&&g<8}dispose(){this.scene.remove(this.root),this.scene.remove(this.shadow),this.mat.dispose()}};var Re={nx:0,nz:0,depth:0,px:0,pz:0},Mn=new Float32Array(8);function Hh(s,t){let e=s.R,n=s.half.x,i=s.half.z,r=e[0],a=e[2],o=Math.hypot(r,a)||1;r/=o,a/=o;let l=e[6],c=e[8],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(let f=-1;f<=1;f+=2)for(let m=-1;m<=1;m+=2)t[u++]=s.px-e[6]*s.cgZ+r*n*f+l*i*m,t[u++]=s.pz-e[8]*s.cgZ+a*n*f+c*i*m;return t}function wg(s,t){let e=1e9;for(let c=0;c<2;c++){let h=c?t:s,u=h.R;for(let f=0;f<2;f++){let m=f?u[6]:u[0],d=f?u[8]:u[2],x=Math.hypot(m,d)||1;m/=x,d/=x;let g=Vh(s,m,d),p=Vh(t,m,d),S=(s.px-s.R[6]*s.cgZ)*m+(s.pz-s.R[8]*s.cgZ)*d,_=(t.px-t.R[6]*t.cgZ)*m+(t.pz-t.R[8]*t.cgZ)*d,v=g+p-Math.abs(_-S);if(v<=0)return!1;if(v<e){e=v;let R=_-S>=0?1:-1;Re.nx=m*R,Re.nz=d*R}}}Re.depth=e,Hh(t,Mn);let n=1e9,i=0,r=0;for(let c=0;c<4;c++){let h=Mn[c*2]*Re.nx+Mn[c*2+1]*Re.nz;h<n&&(n=h,i=Mn[c*2],r=Mn[c*2+1])}Hh(s,Mn);let a=-1e9,o=0,l=0;for(let c=0;c<4;c++){let h=Mn[c*2]*Re.nx+Mn[c*2+1]*Re.nz;h>a&&(a=h,o=Mn[c*2],l=Mn[c*2+1])}return Re.px=(i+o)/2,Re.pz=(r+l)/2,!0}function Vh(s,t,e){let n=s.R,i=n[0],r=n[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=n[6],l=n[8],c=Math.hypot(o,l)||1;return o/=c,l/=c,Math.abs(i*t+r*e)*s.half.x+Math.abs(o*t+l*e)*s.half.z}var ce={j:0,rel:0,nx:0,nz:0,px:0,py:0,pz:0};function Gh(s,t){if(Math.abs(s.py-t.py)>2.2)return 0;let e=s.px-t.px,n=s.pz-t.pz,i=s.half.z+t.half.z;if(e*e+n*n>i*i||!wg(s,t))return 0;let r=Re.nx,a=Re.nz,o=s.invMass/(s.invMass+t.invMass),l=1-o,c=Re.depth+.01;s.px-=r*c*o,s.pz-=a*c*o,t.px+=r*c*l,t.pz+=a*c*l;let h=(s.py+t.py)/2+.1,u=Re.px-s.px,f=h-s.py,m=Re.pz-s.pz,d=Re.px-t.px,x=h-t.py,g=Re.pz-t.pz,p=s.vx+(s.wy*m-s.wz*f),S=s.vy+(s.wz*u-s.wx*m),_=s.vz+(s.wx*f-s.wy*u),v=t.vx+(t.wy*g-t.wz*x),R=t.vy+(t.wz*d-t.wx*g),T=t.vz+(t.wx*x-t.wy*d),b=v-p,C=R-S,M=T-_,y=b*r+M*a;if(y>=0)return 0;let A=.25,L=s.invMassAt(u,f,m,r,0,a)+t.invMassAt(d,x,g,r,0,a),I=-(1+A)*y/L;s.impulse(-r*I,0,-a*I,u,f,m),t.impulse(r*I,0,a*I,d,x,g);let D=b-r*y,X=C,B=M-a*y,Z=Math.hypot(D,X,B);if(Z>.05){let V=Math.min(I*.35,Z/L),K=D/Z,it=X/Z,ht=B/Z;s.impulse(K*V,it*V,ht*V,u,f,m),t.impulse(-K*V,-it*V,-ht*V,d,x,g)}return ce.j=I,ce.rel=-y,ce.nx=r,ce.nz=a,ce.px=Re.px,ce.py=h,ce.pz=Re.pz,I}var ia=class{constructor(t,e){this.cam=new Fe(64,t,.3,e),this.mode=0,this.pos=new k,this.vel=new k,this.look=new k,this.dir=new k(0,0,1),this.shake=0,this.shakeOn=!0,this.init=!1,this.wreckA=0,this.back=!1,this.t=new k,this.l=new k}kick(t){this.shakeOn&&(this.shake=Math.min(1,this.shake+t))}update(t,e){let n=e.veh,i=n.R,r=this.cam,a=Math.max(0,n.fwdSpeed),o=i[6],l=i[8];n.speed>4&&e.wreck<=0&&(o=o*(1-.65)+n.vx/n.speed*.65,l=l*(1-.65)+n.vz/n.speed*.65);let c=Math.hypot(o,l)||1;o/=c,l/=c;let h=1-Math.exp(-t*7);this.dir.x+=(o-this.dir.x)*h,this.dir.z+=(l-this.dir.z)*h;let u=Math.hypot(this.dir.x,this.dir.z)||1,f=this.dir.x/u,m=this.dir.z/u,d,x,g;this.mode===1?(d=9+a*.03,x=3.4,g=6):this.mode===2?(d=-.6,x=1.05,g=30):(d=6.2+a*.022,x=2.25+a*.004,g=5);let p=this.back?-1:1;if(e.wreck>0?(this.wreckA+=t*.9,this.t.set(n.px+Math.sin(this.wreckA)*9,n.py+3.5,n.pz+Math.cos(this.wreckA)*9),this.l.set(n.px,n.py,n.pz)):(this.t.set(n.px-f*d*p,n.py+x,n.pz-m*d*p),this.l.set(n.px+f*g*p,n.py+(this.mode===2?.9:.8),n.pz+m*g*p)),!this.init||this.mode===2||this.back)this.pos.copy(this.t),this.init=!0;else{let _=1-Math.exp(-t*12);this.pos.lerp(this.t,_),this.pos.y<n.py+.8&&(this.pos.y=n.py+.8)}if(r.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let _=this.shake*this.shake*.35;r.position.x+=(Math.random()-.5)*_,r.position.y+=(Math.random()-.5)*_}r.lookAt(this.l);let S=62+Math.min(16,a*.13)+(e.veh.nitroOn?8*Math.min(1.5,e.veh.nitroOn):0);r.fov+=(S-r.fov)*(1-Math.exp(-t*4)),r.updateProjectionMatrix()}};var sa=class{constructor(t,e,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Uint8Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Uint8Array(e*4);let i=new ve;this.aPos=new Ht(this.pos,3),this.aPos.setUsage(oi),this.aCol=new Ht(this.col,4,!0),this.aCol.setUsage(oi),this.aSize=new Ht(this.size,1),this.aSize.setUsage(oi),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("size",this.aSize),i.setDrawRange(0,0),this.mat=kh(n),this.points=new Vr(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.gravity=n?-9.8:.6,t.add(this.points),this.next=0}emit(t,e,n,i,r,a,o,l,c,h,u,f,m){let d=this.next;this.next=(this.next+1)%this.max,this.n<this.max&&this.n++,this.pos[d*3]=t,this.pos[d*3+1]=e,this.pos[d*3+2]=n,this.vel[d*3]=i,this.vel[d*3+1]=r,this.vel[d*3+2]=a,this.base[d*4]=o,this.base[d*4+1]=l,this.base[d*4+2]=c,this.base[d*4+3]=h,this.size[d]=u,this.life[d]=f,this.age[d]=0,this.grow[d]=m||0}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.age[n]>=this.life[n]){this.col[n*4+3]=0;continue}this.age[n]+=t;let i=1-this.age[n]/this.life[n];this.vel[n*3+1]+=this.gravity*t,this.vel[n*3]*=.985,this.vel[n*3+2]*=.985,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*i}this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},ql=class{constructor(t,e){this.max=e,this.next=0,this.pos=new Float32Array(e*4*3),this.col=new Uint8Array(e*4*4),this.uv=new Float32Array(e*4*2);let n=new Uint16Array(e*6);for(let r=0;r<e;r++){let a=r*4;n.set([a,a+1,a+2,a,a+2,a+3],r*6)}for(let r=0;r<e*4;r++)this.uv[r*2]=.5,this.uv[r*2+1]=.5;let i=new ve;this.aPos=new Ht(this.pos,3),this.aPos.setUsage(oi),this.aCol=new Ht(this.col,4,!0),this.aCol.setUsage(oi),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("uv",new Ht(this.uv,2)),i.setIndex(new Ht(n,1)),this.mesh=new Kt(i,na()),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.last=new Float32Array(16*4).fill(NaN),this.dirty=!1}add(t,e,n,i,r,a,o){let l=this.last,c=t*4;if(o<=0||isNaN(l[c])){l[c]=e,l[c+1]=n,l[c+2]=i,l[c+3]=o>0?1:NaN,o<=0&&(l[c]=NaN);return}let h=e-l[c],u=i-l[c+2];if(h*h+u*u<.36)return;let f=this.next;this.next=(this.next+1)%this.max;let m=.13,d=this.pos,x=this.col,g=f*12;d[g]=l[c]+r*m,d[g+1]=l[c+1]+.03,d[g+2]=l[c+2]+a*m,d[g+3]=l[c]-r*m,d[g+4]=l[c+1]+.03,d[g+5]=l[c+2]-a*m,d[g+6]=e-r*m,d[g+7]=n+.03,d[g+8]=i-a*m,d[g+9]=e+r*m,d[g+10]=n+.03,d[g+11]=i+a*m;let p=Math.min(200,60+o*150);for(let S=0;S<4;S++)x[f*16+S*4]=12,x[f*16+S*4+1]=12,x[f*16+S*4+2]=12,x[f*16+S*4+3]=p;l[c]=e,l[c+1]=n,l[c+2]=i,this.dirty=!0}reset(t){this.last[t*4]=NaN}update(){this.dirty&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.dirty=!1)}},Yl=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*6),this.col=new Uint8Array(e*8),this.seed=new Float32Array(e*3);for(let i=0;i<e;i++)this.seed[i*3]=Math.random()*6.28,this.seed[i*3+1]=2+Math.random()*3,this.seed[i*3+2]=Math.random()*40;let n=new ve;this.aPos=new Ht(this.pos,3),this.aPos.setUsage(oi),this.aCol=new Ht(this.col,4,!0),this.aCol.setUsage(oi),n.setAttribute("position",this.aPos),n.setAttribute("col",this.aCol),this.lines=new Hr(n,ea()),this.lines.frustumCulled=!1,this.lines.renderOrder=4,t.add(this.lines)}update(t,e,n,i){let r=Math.max(0,Math.min(1,(n-45)/40))*.6+(i?.4:0);if(this.lines.visible=r>.02,!this.lines.visible)return;let a=e.matrixWorld.elements,o=a[0],l=a[1],c=a[2],h=a[4],u=a[5],f=a[6],m=-a[8],d=-a[9],x=-a[10],g=a[12],p=a[13],S=a[14];for(let _=0;_<this.n;_++){let v=this.seed[_*3+2]-t*n*1.4;v<2&&(v+=40),this.seed[_*3+2]=v;let R=this.seed[_*3],T=this.seed[_*3+1],b=Math.cos(R)*T,C=Math.sin(R)*T*.6,M=2+n*.06,y=g+o*b+h*C+m*v,A=p+l*b+u*C+d*v,L=S+c*b+f*C+x*v;this.pos[_*6]=y,this.pos[_*6+1]=A,this.pos[_*6+2]=L,this.pos[_*6+3]=y+m*M,this.pos[_*6+4]=A+d*M,this.pos[_*6+5]=L+x*M;let I=140*r,D=i?255:220;this.col[_*8]=i?120:220,this.col[_*8+1]=i?190:220,this.col[_*8+2]=D,this.col[_*8+3]=I,this.col[_*8+4]=0,this.col[_*8+5]=0,this.col[_*8+6]=0,this.col[_*8+7]=0}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}},Zl=class{constructor(t,e){this.items=[];let n=["debris_bumper","debris_door","debris_tire","debris_spoiler","debris_plate"];for(let i=0;i<10;i++){let r=new Kt(Ii(n[i%n.length],"body"),e);r.userData.s0=n[i%n.length]==="debris_tire"?.65:.85,r.visible=!1,r.userData.v=new k,r.userData.w=new k,r.userData.t=0,t.add(r),this.items.push(r)}this.next=0}burst(t,e,n,i,r,a,o){for(let l=0;l<o;l++){let c=this.items[this.next];this.next=(this.next+1)%this.items.length,c.visible=!0,c.position.set(t,e+.6,n),c.userData.v.set(i*.5+(Math.random()-.5)*6,2.5+Math.random()*3.5,a*.5+(Math.random()-.5)*6),c.userData.w.set(Math.random()*10,Math.random()*10,Math.random()*10),c.userData.t=2.2,c.userData.floor=e-.4,c.scale.setScalar(c.userData.s0||1)}}update(t){for(let e of this.items){if(!e.visible)continue;let n=e.userData;if(n.t-=t,n.t<=0){e.visible=!1;continue}n.t<.5&&e.scale.setScalar(n.s0*n.t/.5),n.v.y-=9.8*t,e.position.x+=n.v.x*t,e.position.y+=n.v.y*t,e.position.z+=n.v.z*t,e.position.y<n.floor&&(e.position.y=n.floor,n.v.y*=-.3,n.v.x*=.7,n.v.z*=.7,n.w.multiplyScalar(.7)),e.rotation.x+=n.w.x*t,e.rotation.y+=n.w.y*t,e.rotation.z+=n.w.z*t}}},ra=class{constructor(t,e,n){let i=e==="low";this.sparks=new sa(t,i?80:200,!0),this.smoke=new sa(t,i?60:160,!1),this.skids=new ql(t,i?300:700),this.streaks=new Yl(t,i?24:48),this.debris=new Zl(t,n),this.low=i}spark(t,e,n,i,r,a){for(let o=0;o<a;o++)this.sparks.emit(t,e,n,i*.5+(Math.random()-.5)*6,1+Math.random()*4,r*.5+(Math.random()-.5)*6,255,190+Math.random()*60,90,255,.12,.25+Math.random()*.3)}puff(t,e,n,i,r,a){this.smoke.emit(t,e+.2,n,i*.2+(Math.random()-.5),.6+Math.random()*.6,r*.2+(Math.random()-.5),225,225,228,110*a,.8,1.1,2.6)}update(t){this.sparks.update(t),this.smoke.update(t),this.skids.update(),this.debris.update(t)}};var Wh=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
varying float vFog;
`;function Xh(){return new pe({uniforms:Ae,vertexShader:Wh+`
attribute vec4 ds;   // x = d (m, left +), y = s (m along the street), z = half width, w = flags (1 junction, 2 one-way, 4 zebra side)
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
}`,fragmentShader:Wh+`
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
}`,extensions:{derivatives:!0}})}var Ne=200,qh=2.2,ds=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.extra=null}get count(){return this.p.length/3}vert(t,e,n,i,r,a,o,l,c,h){return this.p.push(t,e,n),this.n.push(i*127|0,r*127|0,a*127|0,0),this.c.push(o,l,c,h||0),this.count-1}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}model(t,e,n,i,r,a,o,l){let c=zl(t,e),h=Math.cos(a),u=Math.sin(a),f=o||1,m=this.count;for(let d=0;d<c.part.n;d++){let x=c.pos[d*3]*f,g=c.pos[d*3+1]*f,p=c.pos[d*3+2]*f,S=c.nrm[d*4]/127,_=c.nrm[d*4+1]/127,v=c.nrm[d*4+2]/127,R=c.col[d*4],T=c.col[d*4+1],b=c.col[d*4+2];l&&(R=R*l[0]|0,T=T*l[1]|0,b=b*l[2]|0),this.p.push(n+x*h+p*u,i+g,r-x*u+p*h),this.n.push(Math.round((S*h+v*u)*127),Math.round(_*127),Math.round((-S*u+v*h)*127),0),this.c.push(Math.min(255,R),Math.min(255,T),Math.min(255,b),c.col[d*4+3]===64?64:0)}for(let d=0;d<c.idx.length;d++)this.i.push(m+c.idx[d])}box(t,e,n,i,r,a,o,l,c,h,u,f){let m=-l,d=o,x=[];for(let p=0;p<8;p++){let S=p&1?i:-i,_=p&2?r:0,v=p&4?a:-a;x.push(t+o*S+m*v,e+_,n+l*S+d*v)}let g=[[0,4,6,2,-1,0,0],[1,3,7,5,1,0,0],[0,1,5,4,0,-1,0],[2,6,7,3,0,1,0],[0,2,3,1,0,0,-1],[4,5,7,6,0,0,1]];for(let p of g){let S=p[4]*o+p[6]*m,_=p[5],v=p[4]*l+p[6]*d,R=p.slice(0,4).map(B=>this.vert(x[B*3],x[B*3+1],x[B*3+2],S,_,v,c,h,u,f?64:0)),T=p[0]*3,b=p[1]*3,C=p[2]*3,M=x[b]-x[T],y=x[b+1]-x[T+1],A=x[b+2]-x[T+2],L=x[C]-x[T],I=x[C+1]-x[T+1],D=x[C+2]-x[T+2];(y*D-A*I)*S+(A*L-M*D)*_+(M*I-y*L)*v>=0?this.quad(R[0],R[1],R[2],R[3]):this.quad(R[0],R[3],R[2],R[1])}}build(t){let e=new ve;if(e.setAttribute("position",new Ht(new Float32Array(this.p),3)),t&&e.setAttribute("normal",new Ht(new Int8Array(this.n),4,!0)),e.setAttribute("col",new Ht(new Uint8Array(this.c),4,!0)),e.setIndex(new Ht(this.count>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),this.extra)for(let n in this.extra){let i=this.extra[n];e.setAttribute(n,new Ht(new Float32Array(i.a),i.n))}return e.computeBoundingSphere(),e}};function Eg(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Yh=[[240,238,230],[244,242,236],[236,226,204],[226,212,186],[222,200,172],[232,230,224],[214,222,228],[236,214,204],[246,246,244]],aa=class{constructor(t,e,n){this.scene=t,this.net=e,this.reach=n.tier==="low"?520:n.tier==="mid"?680:860,this.mats={world:us(),road:Xh(),bld:Fh()},this.chunks=new Map;let i=(f,m)=>Math.floor(f/Ne)*1e3+Math.floor(m/Ne)+500500;this.key=i;let r=f=>{let m=this.chunks.get(f);return m||this.chunks.set(f,m={k:f,segs:[],blds:[],heads:[],st:[],jn:[],built:null}),m};for(let f=0;f<e.n-1;f++)e.sE[f+1]===e.sE[f]&&r(i((e.px[f]+e.px[f+1])/2,(e.pz[f]+e.pz[f+1])/2)).segs.push(f);for(let f=0;f<e.nj;f++)e.jEdges[f].length>=3&&r(i(e.jx[f],e.jz[f])).jn.push(f);let a=e.bld;for(let f=0;f<a.length;){let m=a[f];r(i(a[f+3],a[f+4])).blds.push(f),f+=3+m*2}for(let f of e.stations){let m=e.eOff[f.e]+f.k;r(i(e.px[m],e.pz[m])).st.push(f)}this.getChunk=r,this.heads=[];let o={};for(let f=0;f<e.lights.length;f++){let m=e.lights[f],d=m.j,x=e.jEdges[d];for(let g=0;g<x.length;g++){let p=x[g],S=e.eB[p]===d;if(e.eOne[p]&&!S)continue;let _=S?-1:1,v=e.eHw[p],R=!1;for(let M=1.5;M<=13.5&&!R;M+=2){let y=S?e.eLen[p]-e.jr[d]-M:e.jr[d]+M;if(y<0||y>e.eLen[p])break;for(let A=.7;A<=2.9&&!R;A+=.55)e.at(p,y,_*(v+A),o),Math.hypot(o.x-e.jx[d],o.z-e.jz[d])>e.jr[d]+.4&&this.clear(o.x,o.z,.45,!0)&&(R=!0)}if(!R)continue;let T=S?o.fx:-o.fx,b=S?o.fz:-o.fz,C={L:f,ph:m.ph[g],x:o.x,y:o.y+.15,z:o.z,fx:T,fz:b};this.heads.push(C),r(i(o.x,o.z)).heads.push(C)}}let l=new Ai(.24,.24,.08);this.lamps=new Or(l,new Fn({color:16777215}),Math.max(1,this.heads.length*3));let c=new re,h=new zt(2236962);for(let f=0;f<this.heads.length;f++){let m=this.heads[f];for(let d=0;d<3;d++)c.makeRotationY(Math.atan2(m.fx,m.fz)),c.setPosition(m.x-m.fx*.2,m.y+3.75-d*.3,m.z-m.fz*.2),this.lamps.setMatrixAt(f*3+d,c),this.lamps.setColorAt(f*3+d,h)}this.lamps.frustumCulled=!1,t.add(this.lamps),this.lampState=new Int8Array(this.heads.length).fill(-1);let u=new ri(4e4,4e4,1,1);u.rotateX(-Math.PI/2),this.sea=new Kt(u,Bh()),this.sea.position.y=0,this.sea.frustumCulled=!1,this.sea.renderOrder=-1,t.add(this.sea),this.sky=new Kt(new Wr(5e3,16,8),Oh()),this.sky.frustumCulled=!1,this.sky.renderOrder=10,t.add(this.sky),this.live=[],this.buildMs=0,this.built=0}setLamps(t){let e=[new zt(16722458),new zt(16756736),new zt(2293606)],n=new zt(1907997),i=!1;for(let r=0;r<this.heads.length;r++){let a=this.heads[r],o=t(a.L,a.ph);o!==this.lampState[r]&&(this.lampState[r]=o,i=!0,this.lamps.setColorAt(r*3,o===2?e[0]:n),this.lamps.setColorAt(r*3+1,o===1?e[1]:n),this.lamps.setColorAt(r*3+2,o===0?e[2]:n))}i&&(this.lamps.instanceColor.needsUpdate=!0)}stream(t,e,n,i){let r=performance.now(),a=this.reach,o=Math.floor(t/Ne),l=Math.floor(e/Ne),c=Math.ceil(a/Ne)+1,h=[];for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){let m=(o+u+.5)*Ne,d=(l+f+.5)*Ne,x=Math.hypot(m-t,d-e)-Ne*.71;if(x>a)continue;let g=this.chunks.get((o+u)*1e3+(l+f)+500500)||this.emptyChunk(o+u,l+f);g.built||h.push([x,g])}h.sort((u,f)=>u[0]-f[0]);for(let[,u]of h){if(!i&&performance.now()-r>n)break;this.buildChunk(u)}for(let u=this.live.length-1;u>=0;u--){let f=this.live[u];Math.hypot(f.cx-t,f.cz-e)-Ne*.71>a+260&&(this.dropChunk(f),this.live.splice(u,1))}this.buildMs=performance.now()-r}addEnforce(t){for(let e of t.cams){let n=this.getChunk(this.key(e.x,e.z));(n.cams||(n.cams=[])).push(e)}for(let e of t.police){let n=this.getChunk(this.key(e.x,e.z));(n.cops||(n.cops=[])).push(e)}}emptyChunk(t,e){let n=t*1e3+e+500500,i={k:n,segs:[],blds:[],heads:[],st:[],jn:[],built:null};return this.chunks.set(n,i),i}buildChunk(t){let e=this.net,n=t.k-500500,i=Math.round(n/1e3),r=n-i*1e3,a=i*Ne,o=r*Ne,l=new ds,c=new ds,h=new ds,u=new ds;l.extra={ds:{a:[],n:4}};let f=l.extra.ds.a,m=Eg(t.k*7919+13),d=t.segs,x=0;for(let b=1;b<=d.length;b++)b<d.length&&d[b]===d[b-1]+1&&e.sE[d[b]]===e.sE[d[x]]||(this.street(l,f,h,c,d[x],d[b-1]+1,m),x=b);for(let b of t.jn){let C=e.jr[b]+.4,M=e.jy[b]+.012,y=18,A=e.jPlane[b],L=(D,X)=>A?e.planeY(b,D,X)+.012:M,I=l.count;l.vert(e.jx[b],L(e.jx[b],e.jz[b]),e.jz[b],0,1,0,0,0,0),f.push(0,0,99,1);for(let D=0;D<=y;D++){let X=D/y*Math.PI*2,B=e.jx[b]+Math.cos(X)*C,Z=e.jz[b]+Math.sin(X)*C;l.vert(B,L(B,Z),Z,0,1,0,0,0,0),f.push(0,0,99,1)}for(let D=0;D<y;D++)l.i.push(I,I+2+D,I+1+D)}let g=e.g,p=Math.max(0,Math.floor((a-g.x0)/g.c)),S=Math.min(g.nx-1,Math.ceil((a+Ne-g.x0)/g.c)),_=Math.max(0,Math.floor((o-g.z0)/g.c)),v=Math.min(g.nz-1,Math.ceil((o+Ne-g.z0)/g.c));if(S>p&&v>_){let b=S-p+1,C=c.count,M=g.h,y=g.nx,A=(L,I)=>M[Math.max(0,Math.min(g.nz-1,I))*y+Math.max(0,Math.min(y-1,L))]/10;for(let L=_;L<=v;L++)for(let I=p;I<=S;I++){let D=A(I,L),X=(A(I+1,L)-A(I-1,L))/(2*g.c),B=(A(I,L+1)-A(I,L-1))/(2*g.c),Z=Math.hypot(X,1,B),V=1/Z,K=(Math.sin(I*.9)+Math.sin(L*1.3))*.5,it,ht,St;D<.5?(it=196,ht=182,St=146):D<3?(it=222+K*8,ht=206+K*8,St=162):V<.82?(it=132+K*10,ht=118+K*8,St=96):(it=116+K*16,ht=132+K*14,St=76+K*6),c.vert(g.x0+I*g.c,D,g.z0+L*g.c,-X/Z,V,-B/Z,it,ht,St)}for(let L=0;L<v-_;L++)for(let I=0;I<b-1;I++){let D=C+L*b+I;A(p+I,_+L)<-2.4&&A(p+I+1,_+L+1)<-2.4&&A(p+I+1,_+L)<-2.4||c.quad(D,D+b,D+b+1,D+1)}}for(let b of t.blds)this.building(u,b);for(let b of t.heads){let C=b.fz,M=-b.fx;c.box(b.x,b.y,b.z,.07,3.4,.07,C,M,70,72,76),c.box(b.x-b.fx*.05,b.y+3.3,b.z-b.fz*.05,.2,.95,.12,C,M,30,30,32)}for(let b of t.cams||[]){let C=Math.sin(b.yaw),M=Math.cos(b.yaw),y=M,A=-C;c.box(b.x,b.y,b.z,.06,2.7,.06,y,A,120,124,128),c.box(b.x,b.y+2.55,b.z,.28,.6,.3,y,A,200,204,208),c.box(b.x,b.y+2.62,b.z,.29,.12,.31,y,A,240,196,24),c.box(b.x+C*.31,b.y+2.82,b.z+M*.31,.1,.18,.02,y,A,20,22,26)}for(let b of t.cops||[]){let C=Math.sin(b.yaw),M=Math.cos(b.yaw),y=M,A=-C,L=[22,34,70],I=[190,140,105];c.box(b.x+y*.1,b.y,b.z+A*.1,.08,.9,.1,y,A,...L),c.box(b.x-y*.1,b.y,b.z-A*.1,.08,.9,.1,y,A,...L),c.box(b.x,b.y+.9,b.z,.23,.62,.14,y,A,...L),c.box(b.x+y*.08,b.y+1.3,b.z+A*.08+0,.05,.12,.15,y,A,245,245,245),c.box(b.x,b.y+1.52,b.z,.11,.24,.11,y,A,...I),c.box(b.x,b.y+1.74,b.z,.14,.08,.15,y,A,245,245,245),c.box(b.x+y*.31,b.y+.95,b.z+A*.31,.06,.55,.06,y,A,...L),c.box(b.x-y*.31,b.y+.95,b.z-A*.31,.06,.55,.06,y,A,...L),c.box(b.x+y*.31,b.y+.85,b.z+A*.31,.06,.1,.06,y,A,250,250,250),c.box(b.x-y*.31,b.y+.85,b.z-A*.31,.06,.1,.06,y,A,250,250,250);let D=b.x-C*.4+y*5.5,X=b.z-M*.4+A*5.5,B=Math.atan2(y,A);for(let Z of["body","wfl","wfr","wbl","wbr"])h.model("car_police",Z,D,b.y,X,B,1)}for(let b of t.st)this.station(c,h,b);let R={k:t.k,meshes:[],cx:a+Ne/2,cz:o+Ne/2},T=(b,C,M)=>{if(!b.count)return;let y=new Kt(b.build(M!=="road"),C);y.matrixAutoUpdate=!1,y.updateMatrix(),y.userData.kind=M,this.scene.add(y),R.meshes.push(y)};T(l,this.mats.road,"road"),T(c,this.mats.world,"core"),T(h,this.mats.world,"detail"),T(u,this.mats.bld,"bld"),t.built=R,this.live.push(t),t.cx=R.cx,t.cz=R.cz,this.built++}dropChunk(t){for(let e of t.built.meshes)this.scene.remove(e),e.geometry.dispose();t.built=null}street(t,e,n,i,r,a,o){let l=this.net,c=l.sE[r],h=l.eHw[c],u=l.eCls[c],f=l.eOne[c],m=[0,0,0,h,h/2,0,-h/2,-h,0,0,0],d=11,x=t.count,g=l.eLen[c],p=l.eA[c],S=l.eB[c];for(let _=r;_<=a;_++){let v=l.px[_],R=l.py[_],T=l.pz[_],b=l.tz[_],C=-l.tx[_],M=l.sS[_],y=l.sJ[_]>=0,A=l.jEdges[p].length>=3&&M>l.jr[p]+2&&M<l.jr[p]+6,L=l.jEdges[S].length>=3&&g-M>l.jr[S]+2&&g-M<l.jr[S]+6,I=(y?1:0)+(f?2:0)+(A||L?4:0),D=l.pl[_],X=l.pr[_],B=D>=me-.05,Z=X>=me-.05;m[0]=h+D+(B?qh:0),m[1]=h+D,m[2]=h+Math.min(.35,D),m[8]=-h-Math.min(.35,X),m[9]=-h-X,m[10]=-h-X-(Z?qh:0);let V=!y&&D>.6?.15:0,K=!y&&X>.6?.15:0;for(let dt=0;dt<d;dt++){let W=m[dt],Q=dt===0?B?-.55:V:dt===10?Z?-.55:K:dt===1||dt===2?V:dt===8||dt===9?K:0,ut=l.surfY(c,M,v+b*W,T+C*W,R)+Q,rt=l.query(v+b*W,T+C*W,-1,this.vq||(this.vq={}));dt>=3&&dt<=7?rt.edge>=0&&rt.off===0&&rt.junc<0&&(ut=rt.y):rt.edge>=0&&rt.edge!==c&&rt.off===0&&(ut=Math.min(ut,rt.y-.04)),t.vert(v+b*W,ut,T+C*W,0,1,0,0,0,0),e.push(W,M,h,I)}if(_>r){let dt=x+(_-r-1)*d,W=x+(_-r)*d;for(let Q=0;Q<d-1;Q++)t.quad(dt+Q,dt+Q+1,W+Q+1,W+Q)}if(y||_===a)continue;let it=Math.atan2(l.tx[_],l.tz[_]),ht=l.pl[_],St=l.pr[_];if(u<=3&&_%10===0&&ht>1.4){let dt=h+.9;this.clear(v+b*dt,T+C*dt,.6)&&this.lamp(n,v+b*dt,l.surfY(c,M,v+b*dt,T+C*dt,R)+.15,T+C*dt,-b,-C)}if(u<=3&&_%10===5&&St>1.4){let dt=-(h+.9);this.clear(v+b*dt,T+C*dt,.6)&&this.lamp(n,v+b*dt,l.surfY(c,M,v+b*dt,T+C*dt,R)+.15,T+C*dt,b,C)}if(_%6===3&&o()<(u>=4?.45:.3)){let dt=o()<.5?1:-1,W=dt*(h+me-.7);if((dt>0?ht:St)<me-.05||!this.clear(v+b*W,T+C*W,1.6))continue;let ut=R<9&&u<=2?"palm_tall":o()<.5?"tree":"tree_oak",rt=ut[0]==="p"?.5+o()*.1:ut==="tree"?.32+o()*.08:.4+o()*.1;n.model(ut,"body",v+b*W,l.surfY(c,M,v+b*W,T+C*W,R)+.15,T+C*W,o()*6.28,rt)}}}lamp(t,e,n,i,r,a){this.poleLog&&this.poleLog.push(e,i);let o=2,l=Math.atan2(r,a),c=Math.cos(l),h=Math.sin(l),u=-1.575*o,f=-2.925*o;t.model("light_modern","body",e-(u*c+f*h),n,i-(-u*h+f*c),l,o)}clear(t,e,n,i){let r=this.net.query(t,e,-1,this.cq||(this.cq={}));if(r.edge<0)return!0;if(Math.abs(r.d)-r.hl<n)return!1;if(r.junc<0)return!0;let a=this.net,o=r.junc;return!!i&&Math.hypot(t-a.jx[o],e-a.jz[o])>a.jr[o]+n}station(t,e,n){let i=this.net,r=n.e,a=i.eOff[r]+n.k,o=i.px[a],l=i.py[a]+.15,c=i.pz[a],h=i.tx[a],u=i.tz[a],f=u,m=-h,d=i.eHw[r],x=-(d+me*.35),g=o+f*x,p=c+m*x;t.box(g,l+4.6,p,8,.6,(me+3.5)/2,h,u,236,236,232),t.box(g,l+4.55,p,8.05,.12,(me+3.5)/2+.05,h,u,20,150,90);for(let v of[-6,6]){let R=o+f*-(d+me-.4)+h*v,T=c+m*-(d+me-.4)+u*v;t.box(R,l,T,.2,4.6,.2,h,u,210,210,206);let b=o+f*-(d+1.6)+h*v*.6,C=c+m*-(d+1.6)+u*v*.6;t.box(b,l,C,.5,1.7,.3,h,u,30,160,95),t.box(b,l+1.2,C,.52,.35,.32,h,u,250,250,250,!0)}let S=o+f*-(d+me+1.5)+h*11,_=c+m*-(d+me+1.5)+u*11;t.box(S,l,_,.18,7,.18,h,u,180,180,180),t.box(S,l+5.2,_,.15,2.2,1.3,h,u,20,150,90),t.box(S,l+6,_,.17,.8,1,h,u,255,210,40,!0)}building(t,e){let n=this.net.bld,i=n[e],r=n[e+1],a=n[e+2],o=[],l=0,c=0;for(let _=0;_<i;_++){let v=n[e+3+_*2],R=n[e+4+_*2];o.push(new Qt(v,R)),l+=v,c+=R}l/=i,c/=i;let h=Yh[Math.abs(Math.round(o[0].x*3+o[0].y*7))%Yh.length],u=r>24?[200,206,212]:h,f=a-3,m=a+r;t.extra||(t.extra={wuv:{a:[],n:2}});let d=t.extra.wuv.a,x=0;for(let _=0;_<i;_++){let v=o[_],R=o[(_+1)%i],T=R.x-v.x,b=R.y-v.y,C=Math.hypot(T,b);if(C<.05)continue;let M=-b/C,y=T/C,A=M*((v.x+R.x)/2-l)+y*((v.y+R.y)/2-c)>0;A||(M=-M,y=-y);let L=t.vert(v.x,f,v.y,M,0,y,u[0],u[1],u[2]),I=t.vert(R.x,f,R.y,M,0,y,u[0],u[1],u[2]),D=t.vert(R.x,m,R.y,M,0,y,u[0],u[1],u[2]),X=t.vert(v.x,m,v.y,M,0,y,u[0],u[1],u[2]);d.push(x,-3,x+C,-3,x+C,r,x,r),A?t.quad(L,I,D,X):t.quad(L,X,D,I),x+=C}let g=Gr.triangulateShape(o,[]),p=t.count,S=[u[0]*.84|0,u[1]*.82|0,u[2]*.78|0];for(let _ of o)t.vert(_.x,m,_.y,0,1,0,S[0],S[1],S[2]),d.push(0,0);for(let _ of g){let v=o[_[0]],R=o[_[1]],T=o[_[2]];(R.y-v.y)*(T.x-v.x)-(R.x-v.x)*(T.y-v.y)>0?t.i.push(p+_[0],p+_[1],p+_[2]):t.i.push(p+_[0],p+_[2],p+_[1])}}cull(t,e,n,i){for(let r=0;r<this.live.length;r++){let a=this.live[r],o=Math.hypot(a.cx-t,a.cz-e)-Ne*.71,l=a.built.meshes;for(let c=0;c<l.length;c++)l[c].visible=o<(l[c].userData.kind==="detail"?i:l[c].userData.kind==="bld"?n*.85:n)}}dispose(){for(let t of this.live)this.dropChunk(t);this.live=[],this.scene.remove(this.lamps),this.lamps.geometry.dispose(),this.lamps.material.dispose(),this.scene.remove(this.sea),this.sea.geometry.dispose(),this.sea.material.dispose(),this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose();for(let t in this.mats)this.mats[t].dispose()}};var Tg=36;function ks(s,t,e,n){let i=(n+s.lights[t].off)%Tg;return e===0?i<14?0:i<17?1:2:i<18?2:i<32?0:i<35?1:2}var Zh=[["tr_sedan",15197144],["tr_suv",4212303],["tr_van",15921906],["tr_sedan",9182493],["tr_delivery",16053492],["tr_truck",2906784],["tr_taxi",14205498],["tr_sedan",13224393],["tr_suv",1780298],["tr_sedan",2830134],["tr_taxi",14205498],["tr_sedan",10134445]],Bn=99,ui=()=>(Bn^=Bn<<13,Bn>>>=0,Bn^=Bn>>17,Bn^=Bn<<5,Bn>>>=0,Bn/4294967296),jl=class{constructor(t,e){let[n,i]=Zh[e%Zh.length];this.spec=Object.assign({},n==="tr_truck"||n==="tr_delivery"?Qe.t_heavy:Qe.t_small,{model:n}),this.veh=new hs(this.spec,Bs(n)),this.veh.assist.air=0,this.view=new fs(t,n,i),this.traffic=!0,this.player=-1,this.wreck=0,this.active=!1,this.id=e,this.e=0,this.dir=1,this.s=0,this.ne=-1,this.nd=1,this.phase=-1,this.mood=.85+ui()*.15,this.stuck=0,this.claim=-1,this.hitT=0,this.at={},this.at2={}}},oa=class{constructor(t,e,n){this.net=e,this.cars=[];for(let i=0;i<n;i++)this.cars.push(new jl(t,i));this.t=0,this.busy=new Map,this.reach=340}lane(t,e){let n=this.net,i=n.eHw[t];return n.eOne[t]?i>3.9?-(i-1.9):0:-e*Math.min(i*.5,2.2)}pickNext(t){let e=this.net,n=t.dir>0?e.eB[t.e]:e.eA[t.e],i=[],r=0;for(let o of e.jEdges[n]){if(o===t.e&&e.jEdges[n].length>1||!e.canLeave(o,n)||e.eN[o]<4)continue;let l=e.eCls[o]<=2?3:e.eCls[o]<=3?2:1;i.push(o,l),r+=l}if(!i.length){t.ne=t.e,t.nd=-t.dir;return}let a=ui()*r;for(let o=0;o<i.length;o+=2)if(a-=i[o+1],a<=0||o===i.length-2){t.ne=i[o],t.nd=e.eA[i[o]]===n?1:-1;break}}place(t,e,n,i,r){let a=this.net,o=a.at(e,n,this.lane(e,i),t.at),l=o.fx*i,c=o.fz*i,h=t.veh;h.setPose(o.x,o.y+h.cgY+.42,o.z,Math.atan2(l,c)),h.hint=o.i;for(let u of h.wheels)u.hint=o.i;h.vx=l*r,h.vz=c*r,h.gear=1,h.reverse=!1,t.e=e,t.dir=i,t.s=n,t.active=!0,t.wreck=0,t.stuck=0,t.phase=-1,t.claim=-1,t.mood=.82+ui()*.18,this.pickNext(t)}spawn(t,e,n,i,r,a,o){let l=this.net;for(let c=0;c<24;c++){let h=ui()*Math.PI*2,u=150+ui()*(this.reach-170),f=e+Math.sin(h)*u,m=n+Math.cos(h)*u;if(c<16&&Math.sin(h)*i+Math.cos(h)*r>.55&&u<260||(l.query(f,m,-1,o),o.edge<0||o.junc>=0||l.eCls[o.edge]>=5&&ui()<.6))continue;let d=o.edge,x=l.eLen[d];if(x<30||o.s<12||o.s>x-12)continue;let g=l.eOne[d]||ui()<.5?1:-1,p=l.at(d,o.s,this.lane(d,g),t.at2),S=!0;for(let _ of a){if(_===t||_.traffic&&!_.active)continue;let v=_.veh.px-p.x,R=_.veh.pz-p.z;if(v*v+R*R<18*18){S=!1;break}}if(S)return this.place(t,d,o.s,g,6+ui()*4),!0}return!1}update(t,e,n,i){this.t+=t;let r=this.net,a=n.veh,o=Math.sin(a.yaw()),l=Math.cos(a.yaw());for(let[c,h]of this.busy)this.t-h.t>.3&&this.busy.delete(c);for(let c of this.cars){let h=c.veh;if(!c.active||c.wreck>0){if(c.wreck>0&&(c.wreck-=t,h.input.throttle=0,h.input.brake=1,h.input.steer=0,c.wreck>0))continue;this.spawn(c,a.px,a.pz,o,l,e,i);continue}let u=h.px-a.px,f=h.pz-a.pz;if(u*u+f*f>(this.reach+40)**2||c.stuck>7||h.R[4]<.3){c.active=!1,h.setPose(0,-500,0,0);continue}this.drive(c,t,e)}}drive(t,e,n){let i=this.net,r=t.veh,a=i.eLen[t.e];if(t.s=i.project(t.e,t.s,r.px,r.pz),t.dir>0&&t.s>a-.6||t.dir<0&&t.s<.6){let Z=t.dir>0?i.eB[t.e]:i.eA[t.e];t.claim,t.e=t.ne,t.dir=t.nd,a=i.eLen[t.e],t.s=t.dir>0?.6:a-.6,t.phase=-1,this.pickNext(t)}let o=t.dir>0?a-t.s:t.s,l=Math.max(0,r.fwdSpeed),c=5.5+l*.55,h=t.at;if(c<o)i.at(t.e,t.s+t.dir*c,this.lane(t.e,t.dir),h);else{let Z=Math.min(i.eLen[t.ne],c-o);i.at(t.ne,t.nd>0?Z:i.eLen[t.ne]-Z,this.lane(t.ne,t.nd),h)}let u=r.R,f=h.x-r.px,m=h.z-r.pz,d=f*u[0]+m*u[2],x=f*u[6]+m*u[8],g=2.6,p=Math.max(4,f*f+m*m),S=Math.atan2(2*g*d,p),_=r.lockAt(l);r.input.steer=Math.max(-1,Math.min(1,S/Math.max(.05,_))),x<0&&(r.input.steer=d>=0?1:-1);let v=i.eLim[t.e]/3.6*t.mood,R=i.at(t.e,t.s,0,t.at2),T=R.fx*t.dir,b=R.fz*t.dir,C=h.fx*(c<o?t.dir:t.nd),M=h.fz*(c<o?t.dir:t.nd),y=Math.acos(Math.max(-1,Math.min(1,T*C+b*M)));y>.05&&(v=Math.min(v,Math.sqrt(2.6*c/y)));let A=t.dir>0?i.eB[t.e]:i.eA[t.e],L=i.jr[A],I=o-L;if(I<60){let Z=I-2.5,V=!1,K=i.jLight[A];if(K>=0){if(t.phase<0){let Q=i.slot(t.e,A);t.phase=Q>=0?i.lights[K].ph[Q]:0}let W=ks(i,K,t.phase,this.t);(W===2||W===1&&Z>l*l/7)&&(V=Z>-1)}else if(i.jEdges[A].length>=3&&I<9){let W=this.busy.get(A);!W||W.car===t?this.busy.set(A,{car:t,t:this.t}):Z>-.5&&(V=!0)}V&&(v=Math.min(v,Math.sqrt(2*3.2*Math.max(0,Z-.8))));let it=i.at(t.ne,t.nd>0?3:i.eLen[t.ne]-3,0,t.at2),ht=it.fx*t.nd,St=it.fz*t.nd,dt=Math.acos(Math.max(-1,Math.min(1,T*ht+b*St)));if(dt>.45){let W=dt>2.5?3:4+5*(1-dt/Math.PI);v=Math.min(v,Math.sqrt(W*W+2*2.6*Math.max(0,I)))}}let D=u[6],X=u[8];for(let Z of n){if(Z===t||Z.traffic&&!Z.active)continue;let V=Z.veh.px-r.px,K=Z.veh.pz-r.pz,it=V*D+K*X;if(it<2||it>40||Math.abs(V*u[0]+K*u[2])>2.6)continue;let St=it-6.5,dt=Math.max(0,Z.veh.vx*D+Z.veh.vz*X);v=Math.min(v,Math.max(0,dt+St*.6)),St<.5&&(v=0)}let B=v-l;r.input.throttle=Math.max(0,Math.min(1,B*.45)),r.input.brake=B<-.3?Math.max(0,Math.min(1,-B*.35)):0,v<.3&&(r.input.throttle=0,r.input.brake=1),r.input.handbrake=0,l<.4&&v>2.5?t.stuck+=e:t.stuck=0}dispose(){for(let t of this.cars)t.view.dispose()}};var la={flag:7,km:4},bn={red:700,wrong:700,pave:500,fault:300};function jh(s){return s<20?300:s<30?500:s<40?700:1e3}var kn=7,un=()=>(kn^=kn<<13,kn>>>=0,kn^=kn>>17,kn^=kn<<5,kn>>>=0,kn/4294967296),ca=class{constructor(t,e){this.net=t;let n=e||{};this.money=n.money??300,this.fuel=n.fuel??9,this.tank=40,this.stats=Object.assign({rides:0,earned:0,fines:0,repairs:0,fuel:0,km:0,best:0},n.stats),this.peds=[],this.ride=null,this.log=[],this.events=[],this.toasts=[],this.prompt="",this.limiter=0,this.cool={speed:0,pave:0},this.overT=0,this.overMax=0,this.paveT=0,this.wrongT=0,this.wrongE=-1,this.lastE=-1,this.lastRem=1e9,this.lastJ=-1,this.crash=null,this.refuel=!1,this.helpT=0,this.redT=-10,this.wrongNow=0,this.time=0,this.dirty=!1}save(){return{money:Math.round(this.money),fuel:+this.fuel.toFixed(2),stats:this.stats}}pay(t,e){this.money+=t,this.dirty=!0,e&&(this.stats[e]+=Math.abs(t))}toast(t,e){this.toasts.push({text:t,kind:e||"info",t:0})}fine(t,e,n){this.pay(-e,"fines"),this.ride&&this.ride.fines++,this.events.push({kind:"fine",title:"fine_"+t,lines:[[n||"",-e]],total:-e})}update(t,e,n,i){this.time+=t;let r=this.net,a=Math.abs(e.fwdSpeed),o=a*3.6,l=a*t;if(this.stats.km+=l/1e3,this.ride&&this.ride.ped.state==="in"&&(this.ride.km+=l/1e3,this.ride.t+=t),this.fuelTick(t,e),e.topSpeedCap=this.limiter?this.limiter/3.6:1e9,n.edge>=0&&n.junc<0){let c=n.edge,h=n.fx,u=n.fz,m=e.vx*h+e.vz*u>=0?1:-1;c!==this.lastE&&(this.lastE=c,this.lastRem=1e9,this.wrongT=0);let d=m>0?r.eB[c]:r.eA[c],x=m>0?r.eLen[c]-n.s:n.s,g=this.enf?this.enf.officer(e.px,e.pz):null,p=r.jLight[d];if(p>=0&&a>2){let _=r.jr[d]+1;if(this.lastRem>_&&x<=_&&this.lastJ===d){let v=r.slot(c,d),R=v>=0?r.lights[p].ph[v]:0;i(p,R)===2&&(this.redT=this.time,g&&this.fine("red",bn.red,"seenPolice"))}}this.lastRem=x,this.lastJ=d,r.eOne[c]&&m<0&&a>2?(this.wrongT+=t,this.wrongNow=1):(this.wrongT=Math.max(0,this.wrongT-t),this.wrongNow=0),this.wrongT>2.5&&this.wrongE!==c&&(this.redT=this.time,g&&(this.wrongE=c,this.fine("wrong",bn.wrong,r.edgeName(c,this.lang)||"")));let S=n.lim;if(this.limit=S,this.enf){for(let _ of this.enf.cams){if(_.e!==c||m!==_.dir)continue;let v=this.camS,R=n.s;this.camE===c&&v!==void 0&&(v-_.s)*(R-_.s)<=0&&v!==R&&this.time>(_.cool||0)&&(_.cool=this.time+20,this.flash=.25,o>S+5&&this.fine("speed",jh(o-S),"camSpeed:"+Math.round(o)+" km/h / "+S))}this.camE=c,this.camS=n.s}o>S+5&&g?(this.overT+=t,this.overMax=Math.max(this.overMax,o-S)):(this.overT=Math.max(0,this.overT-t*2),this.overT===0&&(this.overMax=0)),this.overT>3&&this.time>this.cool.speed&&(this.fine("speed",jh(this.overMax),"policeSpeed:"+Math.round(S+this.overMax)+" km/h / "+S),this.cool.speed=this.time+40,this.overT=0,this.overMax=0),n.off>=1&&Math.abs(n.d)>n.hl+1.2&&a>3&&g?this.paveT+=t:this.paveT=Math.max(0,this.paveT-t),this.paveT>1.2&&this.time>this.cool.pave&&(this.fine("pave",bn.pave,"seenPolice"),this.cool.pave=this.time+30,this.paveT=0)}else this.wrongNow=0;this.speeding=this.overT>0,this.peopleTick(t,e,n),this.crashTick(t),this.prompt="",e.fuelCut&&this.fuel<=.01?this.prompt=this.helpT>0?"helpWait":"help":this.refuel?this.prompt="stop":this.nearStation(e)&&a<1.2&&this.fuel<this.tank-.5?this.prompt="refuel":this.ride&&this.ride.ped.state==="in"&&this.atDest(e)&&a<1.6?this.prompt="dropoff":!this.ride&&a<1.6&&this.nearPed(e)&&(this.prompt="pickup",this.quote(e,n,this.nearPed(e)))}fuelTick(t,e){if(this.helpT>0){if(this.helpT-=t,this.helpT<=0){let l=150+Math.round(120.60000000000001);this.fuel+=6,this.pay(-l,"fuel"),e.fuelCut=!1,e.stalled=!1,this.events.push({kind:"help",title:"helpDone",lines:[["helpService",-150],["helpFuel",-(l-150)]],total:-l})}return}if(this.refuel){let o=Math.min(this.tank-this.fuel,5*t);this.fuel+=o,this.pay(-o*13.4,"fuel"),this.refuelL+=o,(this.fuel>=this.tank-.01||this.money<0)&&this.stopRefuel();return}if(e.fuelCut||e.stalled)return;let n=e.input.throttle,i=Math.max(e.rpm,800),a=.7+.26*Math.max(0,e.engineTorque(i)*n*i*Math.PI/30/1e3);this.fuel-=a/3600*t*4,this.fuel<=0&&(this.fuel=0,e.fuelCut=!0,this.toast("outOfFuel","bad"),this.dirty=!0),this.fuel<4&&!this.lowSaid&&(this.lowSaid=!0,this.toast("lowFuel","warn")),this.fuel>6&&(this.lowSaid=!1)}stopRefuel(){this.refuel=!1,this.refuelL>.05&&this.events.push({kind:"fuel",title:"refuelDone",lines:[["litres:"+this.refuelL.toFixed(1),-Math.round(this.refuelL*13.4)]],total:-Math.round(this.refuelL*13.4)}),this.dirty=!0}nearStation(t){let e=this.net;for(let n of e.stations){let i=e.eOff[n.e]+n.k;if(Math.hypot(e.px[i]-t.px,e.pz[i]-t.pz)<16)return!0}return!1}action(t,e){let n=this.prompt;n==="help"?(this.helpT=9,this.toast("helpComing","info")):n==="refuel"?(this.refuel=!0,this.refuelL=0):n==="stop"?this.stopRefuel():n==="pickup"?this.pickup(t,e):n==="dropoff"&&this.dropoff(t)}spawnPed(t,e){let n=this.net,i=Math.atan2(t.R[6],t.R[8]);for(let r=0;r<20;r++){let a=un()<.7?i+(un()-.5)*2:un()*Math.PI*2,o=40+un()*280;n.query(t.px+Math.sin(a)*o,t.pz+Math.cos(a)*o,-1,e);let l=e.edge;if(l<0||e.junc>=0||n.eCls[l]===0||n.eLen[l]<30||e.s<10||e.s>n.eLen[l]-10)continue;let c=un()<.5?1:-1,h=e.i;if((c>0?n.pl[h]:n.pr[h])<1.5)continue;let u=n.at(l,e.s,c*(n.eHw[l]+1.2),{});if(this.peds.some(m=>Math.hypot(m.x-u.x,m.z-u.z)<45))continue;let f=this.pickDest(u.x,u.z,e);if(f){this.peds.push({x:u.x,y:u.y+.15,z:u.z,yaw:Math.atan2(-c*u.lx,-c*u.lz),e:l,s:e.s,side:c,state:"wait",t:un()*3,kind:un()*6|0,dest:f});return}}}pickDest(t,e,n){let i=this.net;for(let r=0;r<12;r++){let a=un()*Math.PI*2,o=800+un()*2700;i.query(t+Math.sin(a)*o,e+Math.cos(a)*o,-1,n);let l=n.edge;if(l<0||n.junc>=0||i.eLen[l]<30||i.eCls[l]===0)continue;let c=Math.max(10,Math.min(i.eLen[l]-10,n.s)),h=i.at(l,c,0,{}),u=Math.hypot(h.x-t,h.z-e)*1.3/1e3;return{e:l,s:c,name:i.edgeName(l,this.lang)||i.areaName(h.x,h.z,this.lang),km:u,fare:Math.round(la.flag+la.km*u)}}return null}peopleTick(t,e,n){let i=this.ride?2:6,r=0;for(let a of this.peds)a.state==="wait"&&r++;r<i&&this.time%.25<t&&this.spawnPed(e,this.q2||(this.q2={}));for(let a=this.peds.length-1;a>=0;a--){let o=this.peds[a];if(o.t+=t,o.state==="wait"&&Math.hypot(o.x-e.px,o.z-e.pz)>500){this.peds.splice(a,1);continue}if(o.state==="walk"){let l=e.R,c=e.px+l[0]*1.1*(o.side>0?1:-1)-o.x,h=e.pz+l[2]*1.1*(o.side>0?1:-1)-o.z,u=Math.hypot(c,h);if(u<.6||o.t>3)o.state="in",this.ride.t=0,this.toast("boarded","ok");else{let f=Math.min(u,2.2*t);o.x+=c/u*f,o.z+=h/u*f,o.yaw=Math.atan2(c,h)}}o.state==="out"&&(o.x+=Math.sin(o.yaw)*1.4*t,o.z+=Math.cos(o.yaw)*1.4*t,o.t>4&&this.peds.splice(a,1)),o.state==="gone"&&this.peds.splice(a,1)}}nearPed(t){let e=null,n=11;for(let i of this.peds){if(i.state!=="wait")continue;let r=Math.hypot(i.x-t.px,i.z-t.pz);r<n&&(n=r,e=i)}return e}quote(t,e,n){if(n.quote&&Math.hypot(n.quote.x-t.px,n.quote.z-t.pz)<3)return n.quote;let i=this.net,r=this.q2||(this.q2={}),a=e.edge>=0?t.R[6]*e.fx+t.R[8]*e.fz>=0?1:-1:1;n.quote=null;for(let o=0;o<6&&!n.quote;o++){let l=o===0?n.dest:this.pickDest(n.x,n.z,r);if(!l)continue;let c=i.route(e.edge>=0?e.edge:l.e,e.edge>=0?e.s:0,a,l.e,l.s);!c||c.len<500||c.len>7e3||(n.dest=l,n.quote={x:t.px,z:t.pz,route:c,km:c.len/1e3,fare:Math.round(la.flag+la.km*c.len/1e3),name:l.name})}return n.quote}pickup(t,e){let n=this.nearPed(t);if(!n)return;let i=this.net,r=this.quote(t,e,n);if(!r){this.toast("noDest","warn"),n.state="out",n.t=0;return}let a=n.dest,o=r.route,l=un()<.5?1:-1,c=i.at(a.e,a.s,l*(i.eHw[a.e]+1.7),{});n.state="walk",n.t=0,this.ride={ped:n,e:a.e,s:a.s,side:l,x:c.x,y:c.y,z:c.z,route:o,len:o.len,eta:o.len/8.2+45,t:0,km:0,hits:0,fines:0,scare:0,name:a.name,fare:r.fare,routeT:0},this.toast("pickup","ok")}atDest(t){let e=this.ride;return e&&Math.hypot(e.x-t.px,e.z-t.pz)<this.net.eHw[e.e]+14}meter(){let t=this.ride;return t?t.fare:0}dropoff(t){let e=this.ride;if(!e)return;let n=this.meter(),i=[["fareKm:"+(e.len/1e3).toFixed(1),Math.round(n)]],r=n,a=e.t-e.eta;if(a>0){let l=Math.min(.6,Math.ceil(a/15)*.1);i.push(["lateBy:"+Math.round(a),-Math.round(n*l)]),r-=n*l}if(e.hits>0){let l=Math.min(1,e.hits*.25);i.push(["bumps:"+e.hits,-Math.round(n*l)]),r-=n*l}if(a<=0&&e.hits===0&&e.fines===0){let l=Math.max(2,Math.round(n*(.1+un()*.1)));i.push(["tip",l]),r+=l}r=Math.max(0,Math.round(r)),this.pay(r,"earned"),this.stats.rides++,this.stats.best=Math.max(this.stats.best,r),this.events.push({kind:"ride",title:"rideDone",lines:i,total:r});let o=e.ped;o.state="out",o.t=0,o.x=t.px+t.R[0]*2.2*e.side,o.z=t.pz+t.R[2]*2.2*e.side,o.y=e.y+.15,o.yaw=Math.atan2(t.R[6],t.R[8]),this.peds.includes(o)||this.peds.push(o),this.ride=null}hitPed(t){let e=Math.round((800+t*60)/10)*10,n=[["impact:"+Math.round(t),0],["pedHurt",-e],["fineFault",-bn.fault]],i=-e-bn.fault;this.money+=i,this.stats.repairs+=e,this.stats.fines+=bn.fault,this.dirty=!0,this.ride&&this.ride.hits++,this.events.push({kind:"crash",title:"fine_ped",lines:n,total:i})}hit(t,e,n){if(t<1.3)return;this.crash||(this.crash={t:0,rel:0,car:!1,fault:!1,wall:!1});let i=this.crash;i.rel=Math.max(i.rel,t),i.t=0,e?(i.car=!0,i.fault=i.fault||n):i.wall=!0}crashTick(t){let e=this.crash;if(!e||(e.t+=t,e.t<1.2))return;this.crash=null;let n=Math.round(e.rel*3.6),i=e.wall||e.fault||this.time-this.redT<4,r=[["impact:"+n,0]],a=Math.min(14e3,Math.round(e.rel*e.rel*18/10)*10),o=0;if(i?(r.push(["repairOwn",-a]),o-=a):r.push(["repairInsured",0]),e.car&&i){let l=Math.min(14e3,Math.round(a*.9/10)*10);r.push(["repairOther",-l]),o-=l,r.push(["fineFault",-bn.fault]),o-=bn.fault,this.stats.fines+=bn.fault}if(this.money+=o,this.stats.repairs+=-o-(e.car&&i?bn.fault:0),this.dirty=!0,this.ride&&this.ride.ped.state==="in"){if(this.ride.hits++,i&&e.rel>6){let l=Math.round((200+e.rel*40)/10)*10;r.push(["passengerHurt",-l]),o-=l,this.money-=l,this.stats.repairs+=l}if(e.rel>8.5){let l=this.ride.ped;l.state="gone",this.ride=null,r.push(["passengerLeft",0])}}this.events.push({kind:"crash",title:i?e.car?"crashYou":"crashWall":"crashThem",lines:r,total:o})}};var $h=[[[200,60,50],[40,50,80]],[[230,220,200],[90,70,50]],[[60,120,180],[50,50,55]],[[150,60,140],[30,30,40]],[[245,245,240],[245,245,240]],[[80,140,80],[60,60,70]]],ha=[[200,150,110],[170,120,85],[215,170,130]];function Ag(s,t,e,n,i,r,a,o,l,c,h){let u=[[i,r,a],[o,r,a],[o,l,a],[i,l,a],[i,r,c],[o,r,c],[o,l,c],[i,l,c]],f=[[0,3,2,1,0,0,-1],[4,5,6,7,0,0,1],[0,4,7,3,-1,0,0],[1,2,6,5,1,0,0],[3,7,6,2,0,1,0],[0,1,5,4,0,-1,0]];for(let m of f){let d=s.length/3;for(let x=0;x<4;x++){let g=u[m[x]];s.push(g[0],g[1],g[2]),t.push(m[4]*127,m[5]*127,m[6]*127,0),e.push(h[0],h[1],h[2],0)}n.push(d,d+1,d+2,d,d+2,d+3)}}function Jh(s){let t=[],e=[],n=[],i=[];for(let a of s)Ag(t,e,n,i,...a);let r=new ve;return r.setAttribute("position",new Ht(new Float32Array(t),3)),r.setAttribute("normal",new Ht(new Int8Array(e),4,!0)),r.setAttribute("col",new Ht(new Uint8Array(n),4,!0)),r.setIndex(i),r.computeBoundingSphere(),r}var ua=class{constructor(t,e=8){this.scene=t,this.mat=us(),this.bodies=$h.map((n,i)=>{let r=ha[i%ha.length];return Jh([[-.17,0,-.1,-.02,.85,.1,n[1]],[.02,0,-.1,.17,.85,.1,n[1]],[-.22,.85,-.13,.22,1.45,.13,n[0]],[-.3,.88,-.07,-.22,1.42,.07,n[0]],[-.11,1.46,-.11,.11,1.72,.11,r],[-.12,1.68,-.12,.12,1.76,.12,[40,30,25]]])}),this.arms=$h.map((n,i)=>Jh([[-.04,-.55,-.07,.04,.02,.07,n[0]],[-.045,-.68,-.06,.045,-.55,.06,ha[i%ha.length]]])),this.arrowGeo=new os(.32,.75,4),this.arrowGeo.rotateX(Math.PI),this.arrowGeo.translate(0,.375,0),this.arrowMat=new Fn({color:2949007,fog:!1}),this.pool=[];for(let n=0;n<e;n++){let i=new vn,r=new Kt(this.bodies[n%this.bodies.length],this.mat),a=new Kt(this.arms[n%this.arms.length],this.mat);a.position.set(.26,1.42,0);let o=new Kt(this.arrowGeo,this.arrowMat);o.visible=!1,i.add(r),i.add(a),i.add(o),i.visible=!1,t.add(i),this.pool.push({g:i,body:r,arm:a,arrow:o})}}update(t,e,n,i){for(let r=0;r<this.pool.length;r++){let a=this.pool[r],o=r<e.length?e[r]:n[r-e.length],l=o?Math.hypot(o.x-i.x,o.z-i.z):1e9;if(!o||o.state==="in"||o.state==="gone"||o.live===!1||l>(o.state==="wait"?420:260)){a.g.visible=!1;continue}if(a.g.visible=!0,a.body.geometry!==this.bodies[o.kind]&&(a.body.geometry=this.bodies[o.kind],a.arm.geometry=this.arms[o.kind]),a.g.position.set(o.x,o.y,o.z),a.g.rotation.y=o.yaw,a.arrow.visible=o.state==="wait",a.arrow.visible){let c=Math.max(1,l/22);a.arrow.scale.setScalar(c),a.arrow.position.y=2.1+.25*c+Math.abs(Math.sin(o.t*3))*.35*c,a.arrow.rotation.y=o.t*1.5}o.state==="wait"?(a.arm.rotation.z=Math.PI*.85+Math.sin(o.t*7)*.25,a.arm.rotation.x=0):(a.arm.rotation.z=.1,a.arm.rotation.x=Math.sin(o.t*8)*.5),a.body.position.y=o.state==="wait"?0:Math.abs(Math.sin(o.t*8))*.04}}dispose(){for(let t of this.pool)this.scene.remove(t.g);for(let t of this.bodies.concat(this.arms))t.dispose();this.arrowGeo.dispose(),this.arrowMat.dispose(),this.mat.dispose()}};var Hn=1592594996,fn=()=>(Hn^=Hn<<13,Hn>>>=0,Hn^=Hn>>17,Hn^=Hn<<5,Hn>>>=0,Hn/4294967296),fa=class{constructor(t,e){this.net=t,this.q={},this.at={},this.list=[];for(let n=0;n<e;n++)this.list.push({x:0,y:-1e4,z:0,yaw:0,e:-1,s:0,side:1,dir:1,sp:1.3,d:0,t:fn()*3,kind:n%6,state:"stroll",live:!1})}place(t,e,n,i,r,a){let o=this.net,l=this.q;for(let c=0;c<12;c++){let h=fn()<.75?a+(fn()-.5)*2.2:fn()*Math.PI*2,u=i+fn()*(r-i);o.query(e+Math.sin(h)*u,n+Math.cos(h)*u,-1,l);let f=l.edge;if(f<0||l.junc>=0||o.eCls[f]===0||o.eLen[f]<40)continue;let m=fn()<.5?1:-1,d=l.i;if((m>0?o.pl[d]:o.pr[d])<me-.05)continue;let x=Math.max(o.jr[o.eA[f]]+6,Math.min(o.eLen[f]-o.jr[o.eB[f]]-6,l.s));if(t.e=f,t.s=x,t.side=m,t.dir=fn()<.5?1:-1,t.sp=1.1+fn()*.5,t.d=m*(o.eHw[f]+1.1+fn()*(me-2.2)),t.kind=fn()*6|0,t.live=!0,this.move(t,0))return!0}return t.live=!1,t.y=-1e4,!1}move(t,e){let n=this.net,i=t.e;t.s+=t.dir*t.sp*e;let r=n.jr[n.eA[i]]+5,a=n.eLen[i]-n.jr[n.eB[i]]-5;t.s<r?(t.s=r,t.dir=1):t.s>a&&(t.s=a,t.dir=-1);let o=n.at(i,t.s,t.d,this.at),l=n.query(o.x,o.z,-1,this.q),c=n.eOff[i]+Math.min(n.eN[i]-1,Math.max(0,Math.round(t.s/4)));if((t.side>0?n.pl[c]:n.pr[c])<me-.05||Math.abs(l.d)-l.hl<.6||l.junc>=0){if(e===0)return!1;t.s-=t.dir*t.sp*e,t.dir=-t.dir,o=n.at(i,t.s,t.d,this.at)}return t.x=o.x,t.y=o.y+.15,t.z=o.z,t.yaw=Math.atan2(o.fx*t.dir,o.fz*t.dir),t.t+=e,!0}update(t,e,n,i){for(let r of this.list){if(r.live&&(r.x-e)*(r.x-e)+(r.z-n)*(r.z-n)>240*240&&(r.live=!1),!r.live){(r.wait=(r.wait||0)-t)<=0&&(r.wait=.3+fn()*.3,this.place(r,e,n,r.e<0?15:60,180,i));continue}this.move(r,t)}}};var Vn=13254170,ps=()=>(Vn^=Vn<<13,Vn>>>=0,Vn^=Vn>>17,Vn^=Vn<<5,Vn>>>=0,Vn/4294967296),Kh=90;var da=class{constructor(t){this.net=t,this.cams=[],this.police=[];let e={},n={},i=(a,o,l)=>(t.at(a,o,l,n),t.query(n.x,n.z,-1,e),e.edge>=0&&(Math.abs(e.d)-e.hl<.8||e.junc>=0)?null:{x:n.x,y:n.y,z:n.z,fx:n.fx,fz:n.fz,lx:n.lx,lz:n.lz}),r=(a,o,l,c)=>a.every(h=>(h.x-o)*(h.x-o)+(h.z-l)*(h.z-l)>c*c);for(let a=0;a<t.ne;a++){let o=t.eCls[a],l=t.eLen[a];if(o<=3&&l>=160&&ps()<.16){let c=t.eOne[a]||ps()<.5?1:-1,h=l*(.35+ps()*.3),u=-c,f=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4));if((u>0?t.pl[f]:t.pr[f])>=me-.05){let m=i(a,h,u*(t.eHw[a]+.9));m&&r(this.cams,m.x,m.z,400)&&this.cams.push(Object.assign(m,{e:a,s:h,dir:c,side:u,yaw:Math.atan2(-c*m.fx,-c*m.fz)}))}}if(o<=4&&l>=90&&ps()<.05){let c=ps()<.5?1:-1,h=l*(.3+ps()*.4),u=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4)),f=h+5.5*c,m=t.eOff[a]+Math.min(t.eN[a]-1,Math.max(0,Math.round(f/4)));if((c>0?t.pl[u]:t.pr[u])>=me-.05&&(c>0?t.pl[m]:t.pr[m])>=me-.05&&f>8&&f<l-8&&i(a,f,c*(t.eHw[a]+1.75))){let d=i(a,h,c*(t.eHw[a]+1.4));d&&r(this.police,d.x,d.z,500)&&this.police.push(Object.assign(d,{e:a,s:h,side:c,yaw:Math.atan2(-c*d.lx,-c*d.lz)}))}}}}officer(t,e){let n=null,i=Kh*Kh;for(let r of this.police){let a=(r.x-t)*(r.x-t)+(r.z-e)*(r.z-e);a<i&&(i=a,n=r)}return n}};var Rg=.25,pa=240,$t=s=>Math.round(s*100)/100,ye=s=>Math.round(s*1e3)/1e3,ma=class{constructor(){this.ring=new Array(pa),this.n=0,this.t=0,this.events=[],this.busy=!1,this.ray=new qr,this.ray.far=12}reset(){this.n=0,this.t=0,this.events.length=0}event(t,e){this.events.push([$t(this.time||0),t,String(e).slice(0,80)]),this.events.length>60&&this.events.shift()}tick(t,e){if(this.time=e.time,(this.t-=t)>0)return;this.t=Rg;let n=e.me.veh,i=e.qp,r=n.wheels,a=0,o=0;for(let l of r)l.contact&&o++,l.comp>a&&(a=l.comp);this.ring[this.n++%pa]=[$t(e.time),$t(n.px),$t(n.py),$t(n.pz),ye(Math.atan2(n.R[6],n.R[8])),Math.round(n.fwdSpeed*36)/10,i.edge,$t(i.s||0),$t(i.d||0),$t(i.y),o,ye(a),n.gearbox?n.mgear:n.gear,$t(n.input.steer),$t(n.input.throttle),$t(n.input.brake)]}samples(){let t=[],e=Math.min(this.n,pa);for(let n=this.n-e;n<this.n;n++)t.push(this.ring[n%pa]);return t}drawn(t,e,n,i){let r=[];for(let a of t.live)if(a.built&&Math.abs(a.cx-e)<140&&Math.abs(a.cz-n)<140)for(let o of a.built.meshes)(o.userData.kind==="road"||o.userData.kind==="core")&&r.push(o);return this.ray.set(new k(e,i+6,n),new k(0,-1,0)),this.ray.intersectObjects(r,!1).slice(0,4).map(a=>{let o=a.object.geometry.attributes.ds,l=a.face;return o&&l?[a.object.userData.kind,ye(a.point.y),$t(o.getX(l.a)),$t(o.getY(l.a)),$t(o.getZ(l.a)),o.getW(l.a)]:[a.object.userData.kind,ye(a.point.y)]})}state(t,e){let n=t.me.veh,i=t.net,r={},a=t.city,o=n.wheels.map((S,_)=>{let v=S.contact?S.cx:n.px,R=S.contact?S.cz:n.pz;i.query(v,R,-1,r);let T=this.drawn(a,v,R,r.y);return{k:_,contact:S.contact,comp:ye(S.comp),x:$t(v),z:$t(R),roadY:ye(r.y),drawnY:T.length?T[0][1]:null,diff:T.length?ye(T[0][1]-r.y):null,hits:T,edge:r.edge,d:$t(r.d),off:r.off,junc:r.junc}}),l=[],c=n.R[6],h=n.R[8],u=n.R[0],f=n.R[2],m=0;for(let S=-4;S<=4;S++)for(let _=-4;_<=4;_++){let v=n.px+c*S*2.5+u*_*2.5,R=n.pz+h*S*2.5+f*_*2.5;i.query(v,R,-1,r);let T=this.drawn(a,v,R,r.y),b=T.length?ye(T[0][1]-r.y):null;b!==null&&Math.abs(b)>Math.abs(m)&&(m=b),l.push([S,_,$t(v),$t(R),ye(r.y),b,r.edge,r.junc,r.off,T.length?T[0][0]:""])}i.query(n.px,n.pz,-1,r);let d=r.edge,x=r.junc,g=t.cam.cam.position,p=S=>S>=0?{j:S,x:$t(i.jx[S]),z:$t(i.jz[S]),r:$t(i.jr[S]),y:ye(i.jy[S]),plane:i.jPlane?i.jPlane[S]:0,gx:i.jgx?ye(i.jgx[S]):0,gz:i.jgz?ye(i.jgz[S]):0,edges:i.jEdges[S].length}:null;return{game:"tangier-taxi",version:hn,at:new Date().toISOString(),time:$t(t.time),car:{x:$t(n.px),y:ye(n.py),z:ye(n.pz),yaw:ye(Math.atan2(n.R[6],n.R[8])),up:[ye(n.R[3]),ye(n.R[4]),ye(n.R[5])],kmh:Math.round(n.fwdSpeed*36)/10,cgY:ye(n.cgY),gearbox:n.gearbox||"auto",gear:n.gearbox?n.mgear:n.gear,rpm:Math.round(n.rpm),stalled:!!n.stalled,model:t.opts&&t.opts.car},road:d>=0?{edge:d,name:i.edgeName?i.edgeName(d):"",cls:i.eCls[d],len:$t(i.eLen[d]),hw:$t(i.eHw[d]),oneway:i.eOne[d],round:i.eRa[d],s:$t(r.s),d:$t(r.d),off:r.off,y:ye(r.y),wall:$t(r.wall),limit:r.lim,a:p(i.eA[d]),b:p(i.eB[d])}:null,junction:p(x),wheels:o,worstDrawnMinusRoad:m,grid:l,gridCols:"ahead(x2.5m), right(x2.5m), x, z, roadY, drawnY - roadY, edge, junction, off (0 asphalt 1 kerb 2 pavement), drawn kind",camera:{mode:t.cam.mode,x:$t(g.x),y:$t(g.y),z:$t(g.z)},taxi:{money:Math.round(t.taxi.money),fuel:$t(t.taxi.fuel),ride:!!t.taxi.ride,prompt:t.taxi.prompt},quality:t.quality&&t.quality.tier,scale:t.scale,chunks:a.live.length,log:this.samples(),logCols:"t, x, y, z, yaw, km/h, edge, s, d, roadY, wheels on the ground, max compression, gear, steer, throttle, brake",events:this.events.slice(),cards:(t.taxi.log||[]).slice(-8).map(S=>({kind:S.kind,title:S.title,total:S.total})),...e}}shot(t){try{let n=Math.round(960*t.height/Math.max(1,t.width)),i=document.createElement("canvas");i.width=960,i.height=n,i.getContext("2d").drawImage(t,0,0,960,n);let r=i.toDataURL("image/jpeg",.72);return r.length>59e4&&(r=i.toDataURL("image/jpeg",.45)),r.length>59e4?"":r}catch{return""}}};Qe.taxi={model:"tr_taxi",cls:"T",mass:1180,power:66,torque:200,rpm:4600,gears:[3.73,2.05,1.32,.97,.76],final:4.21,cda:.68,cl:0,mu:1,steer:.62,nitro:0,drive:"f",turbo:1,cyl:4,diesel:1,shift:.4};var Cg=1745860,Pg=15909912;Qe.taxi_city=Object.assign({},Qe.city,{cls:"T",nitro:0});Qe.taxi_hatch=Object.assign({},Qe.hatch,{cls:"T",nitro:0});var Ig=s=>s==="city"?Qe.taxi_city:s==="hatch"?Qe.taxi_hatch:Qe.taxi;function Lg(){Ae.uSun.value.set(.45,.75,-.48).normalize(),Ae.uSunCol.value.setRGB(1,.95,.86),Ae.uSky.value.setRGB(.55,.72,.95),Ae.uGround.value.setRGB(.42,.38,.32),Ae.uFog.value.setRGB(.76,.83,.92),Ae.uNight.value=0}var Qh=2,ga=new Float32Array(8),xa=class{constructor(t,e,n,i){this.renderer=t,this.net=e,this.quality=n,this.opts=i,this.scene=new zr,Lg();let r=n.tier==="low"?480:n.tier==="mid"?620:800;Ae.uFogFar.value=r,Ae.uFogNear.value=r*.3,this.far=r,this.detailFar=r*.5,this.city=new aa(this.scene,e,n),this.city.reach=r+60;let a=Ig(i.car);this.me={veh:new hs(a,Bs(a.model),i.upgrades),spec:a,player:0,wreck:0,traffic:!1,active:!0},this.me.view=new fs(this.scene,a.model,Cg,Pg);let o=this.me.veh;o.gearbox=i.gearbox==="auto"?null:i.gearbox,o.mgear=1,this.q={},this.qp={},this.taxi=new ca(e,i.saved),this.taxi.lang=i.lang,this.enforce=new da(e),this.taxi.enf=this.enforce,this.city.addEnforce(this.enforce),this.start(i.start),this.traffic=new oa(this.scene,e,n.tier==="low"?9:13),this.all=[this.me].concat(this.traffic.cars),this.walkers=new fa(e,n.tier==="low"?8:16),this.people=new ua(this.scene,10+this.walkers.list.length),this.cam=new ia(16/9,r+60),this.cam.shakeOn=n.tier!=="low",this.fx=new ra(this.scene,n.tier,ta(8947848));let l=new Ds(1.4,1.4,60,10,1,!0);l.translate(0,30,0);let c=new Uint8Array(l.attributes.position.count*4);for(let h=0;h<l.attributes.position.count;h++){let u=l.attributes.position.getY(h);c[h*4]=40,c[h*4+1]=255,c[h*4+2]=140,c[h*4+3]=u<1?200:0}l.setAttribute("col",new Ht(c,4,!0)),this.beacon=new Kt(l,new pe({transparent:!0,depthWrite:!1,side:rn,blending:Ei,vertexShader:"attribute vec4 col; varying vec4 vC; void main(){ vC = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 0.9, 1.0); }"})),this.beacon.visible=!1,this.beacon.renderOrder=4,this.beacon.frustumCulled=!1,this.scene.add(this.beacon),this.race={players:[this.me],racers:this.all},this.lightT=0,this.routeT=0,this.time=0,this.city.stream(o.px,o.pz,0,!0),this.city.setLamps((h,u)=>ks(e,h,u,this.traffic.t)),this.frameMs=16.7,this.scale=n.scale||1,this.lateFrames=0,this.goodFrames=0,this.size=new Qt,this.shiftMsg="",this.bug=new ma}start(t){let e=this.net,n=this.q,i=t?t.x:2350,r=t?t.z:-1780,a=-1,o=1e18;for(let u=0;u<e.ne;u++){if(e.eCls[u]>3||e.eLen[u]<60)continue;let f=e.eOff[u]+(e.eN[u]>>1),m=Math.hypot(e.px[f]-i,e.pz[f]-r);m<o&&(o=m,a=u)}let l=a,c=e.at(l,e.eLen[l]/2,e.eOne[l]?0:-e.eHw[l]*.5,{}),h=this.me.veh;h.setPose(c.x,c.y+h.cgY+.45,c.z,Math.atan2(c.fx,c.fz))}pedHits(t,e){let n=t.R,i=a=>{let o=a.x-t.px,l=a.z-t.pz;return o*o+l*l>16?!1:Math.abs(o*n[0]+l*n[2])<1.1&&Math.abs(o*n[6]+l*n[8])<2.5&&Math.abs(a.y-t.py)<2.5},r=Math.abs(t.fwdSpeed)*3.6;for(let a of this.walkers.list)a.live&&i(a)&&(a.live=!1,a.wait=6,e.hitPed(r),this.bug.event("walker",Math.round(r)),this.onSound&&this.onSound("hit",this.me,5));for(let a of e.peds)a.state==="wait"&&i(a)&&(a.state="gone",e.hitPed(r),this.onSound&&this.onSound("hit",this.me,5))}update(t,e){this.time+=t;let n=this.me,i=n.veh,r=e.ctl,a=this.taxi;i.input.steer=r.steer,i.input.throttle=r.throttle,i.input.brake=r.brake,i.input.handbrake=r.handbrake,i.input.clutch=r.clutch;let o=e.edge;o.camera&&(this.cam.mode=(this.cam.mode+1)%3),i.gearbox&&(o.gearUp||o.gearDown)&&i.shift(o.gearUp?1:-1)==="clutch"&&a.toast("needClutch","warn"),o.up&&(a.limiter=a.limiter?Math.min(130,a.limiter+10):Math.max(30,Math.ceil(Math.abs(i.fwdSpeed)*3.6/10)*10)),o.down&&a.limiter&&(a.limiter=a.limiter<=30?0:a.limiter-10),o.action&&a.action(i,this.qp),i.hold=!!(a.refuel||a.helpT>0),i.hold&&(i.input.throttle=0,i.input.brake=0),this.traffic.update(t,this.all,n,this.q);let l=t/Qh,c=this.all,h=this.net,u=this.q;for(let d=0;d<Qh;d++){for(let x=0;x<c.length;x++){let g=c[x];if(!g.active)continue;g.veh.step(l,h,u),g.veh.groundY=u.y,this.wall(g.veh)>0&&g===n&&this.onHit(null,ce.rel)}for(let x=0;x<c.length;x++){let g=c[x];if(g.active)for(let p=x+1;p<c.length;p++){let S=c[p];!S.active||Gh(g.veh,S.veh)<=0||(ce.rel>3&&this.fx.spark(ce.px,ce.py,ce.pz,g.veh.vx,g.veh.vz,Math.min(12,2+ce.rel*.5|0)),g===n||S===n?this.onHit(g===n?S:g,ce.rel,g===n):ce.rel>4&&(g.wreck=g.wreck||0,S.stuck=(S.stuck||0)+1))}}}if(h.query(i.px,i.pz,i.hint,this.qp),a.update(t,i,this.qp,(d,x)=>ks(h,d,x,this.traffic.t)),this.bug.tick(t,this),a.ride&&a.ride.ped.state==="in"&&(this.routeT-=t)<=0&&this.qp.edge>=0){this.routeT=4;let d=a.ride,x=i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1,g=h.route(this.qp.edge,this.qp.s,x,d.e,d.s);g&&(d.route=g,d.left=g.len)}(this.lightT-=t)<=0&&(this.lightT=.25,this.city.setLamps((d,x)=>ks(h,d,x,this.traffic.t))),Ae.uTime.value+=t;let f=this.fx;for(let d=0;d<4;d++){let x=i.wheels[d],g=Math.max(x.slipLat,x.slipLong);x.contact&&g>.35&&i.speed>4?(f.skids.add(d,x.cx,x.cy,x.cz,i.R[0],i.R[2],g),Math.random()<g*.4&&f.puff(x.cx,x.cy,x.cz,i.vx,i.vz,g)):f.skids.add(d,0,0,0,0,0,0)}f.update(t),this.walkers.update(t,i.px,i.pz,Math.atan2(i.R[6],i.R[8])),Math.abs(i.fwdSpeed)>1.5&&this.pedHits(i,a),this.people.update(t,a.peds,this.walkers.list,this.cam.cam.position),this.cam.update(t,n);let m=a.ride;this.beacon.visible=!!(m&&m.ped.state==="in"),this.beacon.visible&&this.beacon.position.set(m.x,m.y,m.z)}onHit(t,e,n){let i=this.me.veh;this.bug.event(t?"car":"wall",Math.round(e*36)/10+" km/h"),this.cam.kick(Math.min(.8,e*.04)),this.onSound&&this.onSound("hit",this.me,e);let r=!0;if(t){let a=ce.nx*(n?1:-1),o=ce.nz*(n?1:-1),l=i.vx*a+i.vz*o,c=-(t.veh.vx*a+t.veh.vz*o);r=l>c+.6||t.veh.speed<.8}this.taxi.hit(e,t,r)}wall(t){let e=t.R,n=this.q,i=e[0],r=e[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=e[6],l=e[8],c=Math.hypot(o,l)||1;o/=c,l/=c;let h=0;for(let I=-1;I<=1;I+=2)for(let D=-1;D<=1;D+=2)ga[h++]=t.px-e[6]*t.cgZ+i*t.half.x*I+o*t.half.z*D,ga[h++]=t.pz-e[8]*t.cgZ+r*t.half.x*I+l*t.half.z*D;let u=0,f=0,m=0,d=0,x=0;for(let I=0;I<4;I++){let D=ga[I*2],X=ga[I*2+1];if(this.net.query(D,X,t.hint,n),n.junc>=0||n.edge<0)continue;let B=Math.abs(n.d)-n.wall;if(B>u){u=B,f=D,m=X;let Z=n.d>=0?-1:1;d=n.lx*Z,x=n.lz*Z}}if(u<=0)return 0;t.px+=d*u,t.pz+=x*u;let g=t.py+.15,p=f-t.px,S=g-t.py,_=m-t.pz,v=t.vx+(t.wy*_-t.wz*S),R=t.vy+(t.wz*p-t.wx*_),T=t.vz+(t.wx*S-t.wy*p),b=v*d+T*x;if(b>=0)return 0;let C=t.invMassAt(p,S,_,d,0,x),M=-(1+.15)*b/C;t.impulse(d*M,0,x*M,p,S,_);let y=v-d*b,A=T-x*b,L=Math.hypot(y,A);if(L>.05){let I=Math.min(M*.3,L/C);t.impulse(-y/L*I,0,-A/L*I,p,S,_)}return ce.j=M,ce.rel=-b,ce.nx=d,ce.nz=x,ce.px=f,ce.py=g,ce.pz=m,M}render(t){let e=this.renderer,n=this.cam.cam;this.budget(t),e.getSize(this.size),n.aspect=this.size.x/this.size.y,n.updateProjectionMatrix();let i=this.me.veh;this.city.stream(i.px,i.pz,this.quality.tier==="low"?3:5,!1),this.city.cull(n.position.x,n.position.z,this.far,this.detailFar),this.city.sky.position.copy(n.position);for(let r of this.all){if(!r.active){r.view.root.visible=!1,r.view.shadow.visible=!1;continue}let a=r.veh.px-n.position.x,o=r.veh.pz-n.position.z;r.view.sync(r.veh,Math.sqrt(a*a+o*o),0,r.veh.input.brake>.2?1:0)}this.fx.streaks.update(1/60,n,0,!1),e.render(this.scene,n)}budget(t){if(!t)return;t>18.5?this.lateFrames++:this.lateFrames=Math.max(0,this.lateFrames-1),t<15.5?this.goodFrames++:this.goodFrames=0;let e=this.quality.minScale||.5,n=this.quality.scale||1;this.lateFrames>10&&this.scale>e?(this.scale=Math.max(e,this.scale-.1),this.lateFrames=0,this.onScale&&this.onScale(this.scale)):this.goodFrames>240&&this.scale<n&&(this.scale=Math.min(n,this.scale+.05),this.goodFrames=0,this.onScale&&this.onScale(this.scale))}dispose(){this.city.dispose(),this.traffic.dispose(),this.me.view.dispose(),this.people.dispose(),this.scene.remove(this.beacon),this.beacon.geometry.dispose(),this.beacon.material.dispose();let t=this.fx;for(let e of[t.sparks.points,t.smoke.points,t.skids.mesh,t.streaks.lines])e.geometry.dispose(),e.material.dispose()}};var ge={A:0,B:1,X:2,Y:3,L:4,R:5,ZL:6,ZR:7,MINUS:8,PLUS:9,UP:12,DOWN:13,LEFT:14,RIGHT:15,CAPTURE:17},va=class{constructor(){this.pads={},this.acts={},this.ctl={steer:0,throttle:0,brake:0,handbrake:0,clutch:0},this.edge={action:0,up:0,down:0,camera:0,map:0},this.prev={},this.hit=new Uint8Array(24),this.actHit={},this.menuCb=null,this.dead=.14,this.steerNow=0}pad(t){return this.pads[t]||(this.pads[t]={b:new Float32Array(24),a:new Float32Array(4)})}onAction(t,e,n,i){if(n){this.menuCb&&this.menuCb(t,i,!0);return}i&&i.indexOf("pad")===0||((this.acts[i]||(this.acts[i]={}))[t]=e,e&&(this.actHit[t]=1)),e&&this.menuCb&&this.menuCb(t,i,!1)}onButton(t,e,n,i){this.pad(i).b[t]=e?Math.max(.01,n||1):0,e&&t<24&&(this.hit[t]=1)}onAxes(t,e){let n=this.pad(e);for(let i=0;i<4&&i<t.length;i++)n.a[i]=t[i]}btn(t){let e=0;for(let n in this.pads){let i=this.pads[n].b[t];i>e&&(e=i)}return e}axis(t){let e=0;for(let n in this.pads){let i=this.pads[n].a[t];Math.abs(i)>Math.abs(e)&&(e=i)}return e}act(t){for(let e in this.acts)if(this.acts[e][t])return 1;return 0}rise(t,e){let n=e&&!this.prev[t]?1:0;return this.prev[t]=e,n}poll(t){let e=this.ctl,n=this.axis(0);n=Math.abs(n)>this.dead?(n-Math.sign(n)*this.dead)/(1-this.dead):0;let i=(this.btn(ge.LEFT)>0||this.act("left")?1:0)-(this.btn(ge.RIGHT)>0||this.act("right")?1:0);i?(this.steerNow+=(i-this.steerNow)*Math.min(1,t*5),e.steer=this.steerNow):(this.steerNow=0,e.steer=-Math.sign(n)*Math.pow(Math.abs(n),1.5)),e.throttle=Math.max(this.btn(ge.ZR),this.act("up")),e.brake=Math.max(this.btn(ge.ZL),this.act("down")),e.handbrake=this.btn(ge.B)>.3?1:0;let r=this.btn(ge.X);e.clutch=r>.02&&r<.98?r:r>=.98?1:Math.max(0,e.clutch-t/.9);let a=this.edge,o=this.hit,l=(c,h,u)=>{let f=h?!this.prev[c]||u?1:0:u?1:0;return this.prev[c]=h,f};a.action=l("action",this.btn(ge.A)>.3||!!this.act("jump"),o[ge.A]===1||this.actHit.jump===1),a.camera=l("camera",this.btn(ge.Y)>.3,o[ge.Y]===1),a.up=l("up",this.btn(ge.UP)>.3,o[ge.UP]===1),a.down=l("down",this.btn(ge.DOWN)>.3,o[ge.DOWN]===1),a.gearUp=l("gu",this.btn(ge.R)>.3,o[ge.R]===1),a.gearDown=l("gd",this.btn(ge.L)>.3,o[ge.L]===1),a.map=l("map",this.btn(ge.MINUS)>.3,o[ge.MINUS]===1),a.capture=l("cap",this.btn(ge.CAPTURE)>.3,o[ge.CAPTURE]===1),o.fill(0),this.actHit={}}clearHeld(){this.hit.fill(0),this.actHit={};for(let t in this.acts)this.acts[t]={};for(let t in this.pads)this.pads[t].b.fill(0),this.pads[t].a.fill(0);this.prev={}}hasPad(){for(let t in this.pads)return!0;return!1}};var _a={en:{tag:"Drive the real streets of Tangier",press:"Press OK to start",start:"Start the shift",settings:"Settings",help:"Controls",resume:"Resume",quit:"End the shift",back:"Back",gearbox:"Gearbox",auto:"Automatic",manual:"Manual",clutch:"Manual + clutch",limiter:"Speed limiter",off:"Off",money:"Cash",rides:"Rides",fuel:"Fuel",paused:"Paused",pickup:"Pick up the passenger",dropoff:"Drop off the passenger",refuel:"Refuel",stop:"Stop refuelling",help_:"Call roadside help",helpWait:"Help is on its way\u2026",to:"To",eta:"Time left",late:"Late",meter:"Meter",fine_speed:"Fine: speeding",fine_red:"Fine: red light",fine_wrong:"Fine: wrong way (one-way street)",fine_pave:"Fine: driving on the pavement",rideDone:"Ride paid",crashYou:"Accident: your fault",crashThem:"Accident: the other driver's fault",crashWall:"Accident: you hit the kerb wall",impact:"Impact at {0} km/h",repairOwn:"Repairs to your taxi",repairOther:"Damage to the other car",repairInsured:"Repairs paid by the other driver's insurance",fineFault:"Fine: loss of control",passengerLeft:"The passenger got out without paying",helpDone:"Roadside help",helpService:"Call-out",helpFuel:"6 L of diesel",refuelDone:"Refuelled",litres:"{0} L of diesel",tip:"Tip",bumps:"Bumps on the way ({0})",lateBy:"Late by {0} s",meterKm:"Meter, {0} km",outOfFuel:"Out of fuel! Press A to call roadside help.",lowFuel:"Fuel is low: find a fuel station (green on the map).",helpComing:"Help is coming",boarded:"Passenger on board: follow the green route",noDest:"The passenger changed their mind",needClutch:"Press the clutch (X) to change gear",stalled:"Stalled: press the clutch fully to restart",limit:"Limit",total:"Total",wrongWay:"WRONG WAY",slowDown:"SLOW DOWN",ctlTitle:"Controls",ctlDrive:"ZR accelerate \xB7 ZL brake / reverse \xB7 stick or D-pad steer \xB7 B handbrake",ctlAct:"A pick up / drop off / refuel \xB7 Y camera \xB7 \u25B2 \u25BC speed limiter \xB7 + pause \xB7 Capture (\u25FB) report a bug",ctlGear:"Manual gearbox: R gear up \xB7 L gear down \xB7 X clutch (hold)",ctlRemote:"TV remote: \u25C0 \u25B6 steer \xB7 \u25B2 accelerate \xB7 \u25BC brake \xB7 OK action \xB7 Back pause",rules:"Rules of the road",rulesText:"Respect the speed limit on the sign, stop at red lights, never drive up a one-way street the wrong way and stay off the pavement: the police fine you. Every accident is assessed: when it is your fault you pay the repairs, the other car and a fine.",stats:"Shift so far",earned:"Earned",fines:"Fines",repairs:"Repairs",fuelSpent:"Fuel",km:"km driven",best:"Best fare",fare:"Fare",camSpeed:"Speed camera: {0}",policeSpeed:"Police check: {0}",seenPolice:"Seen by the police",fine_ped:"Accident: you hit a pedestrian",pedHurt:"Injuries (compensation)",passengerHurt:"Your passenger was hurt (compensation)",pickupTo:"Pick up \xB7 to {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Fare, {0} km",car:"Car",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Start over",resetAsk:"Start over with 300 DH, a quarter tank and a clean record?",yes:"Yes, start over",no:"No",resetDone:"A fresh start: 300 DH",bugReport:"Report a bug (screenshot + log)",bugSending:"Sending the bug report\u2026",bugSent:"Bug report saved: {0}",bugFail:"Bug report not sent ({0})",bugOld:"Update My PC to send bug reports",camAhead:"Speed camera",police:"Police",credits:"Streets and buildings \xA9 OpenStreetMap contributors (ODbL). Heights: AWS Terrain Tiles. Models and sounds: Kenney (CC0)."},fr:{tag:"Conduisez dans les vraies rues de Tanger",press:"Appuyez sur OK pour commencer",start:"Commencer le service",settings:"R\xE9glages",help:"Commandes",resume:"Reprendre",quit:"Finir le service",back:"Retour",gearbox:"Bo\xEEte de vitesses",auto:"Automatique",manual:"Manuelle",clutch:"Manuelle + embrayage",limiter:"Limiteur de vitesse",off:"Arr\xEAt",money:"Caisse",rides:"Courses",fuel:"Carburant",paused:"Pause",pickup:"Prendre le client",dropoff:"D\xE9poser le client",refuel:"Faire le plein",stop:"Arr\xEAter le plein",help_:"Appeler le d\xE9pannage",helpWait:"Le d\xE9pannage arrive\u2026",to:"Vers",eta:"Temps restant",late:"En retard",meter:"Compteur",fine_speed:"Amende : exc\xE8s de vitesse",fine_red:"Amende : feu rouge grill\xE9",fine_wrong:"Amende : sens interdit",fine_pave:"Amende : circulation sur le trottoir",rideDone:"Course pay\xE9e",crashYou:"Accident : votre faute",crashThem:"Accident : faute de l'autre conducteur",crashWall:"Accident : choc contre le mur du trottoir",impact:"Choc \xE0 {0} km/h",repairOwn:"R\xE9paration de votre taxi",repairOther:"D\xE9g\xE2ts de l'autre voiture",repairInsured:"R\xE9paration pay\xE9e par l'assurance de l'autre conducteur",fineFault:"Amende : d\xE9faut de ma\xEEtrise",passengerLeft:"Le client est descendu sans payer",helpDone:"D\xE9pannage",helpService:"D\xE9placement",helpFuel:"6 L de gasoil",refuelDone:"Plein fait",litres:"{0} L de gasoil",tip:"Pourboire",bumps:"Chocs pendant la course ({0})",lateBy:"Retard de {0} s",meterKm:"Compteur, {0} km",outOfFuel:"Panne s\xE8che ! Appuyez sur A pour appeler le d\xE9pannage.",lowFuel:"R\xE9serve : trouvez une station (vert sur la carte).",helpComing:"Le d\xE9pannage arrive",boarded:"Client \xE0 bord : suivez l'itin\xE9raire vert",noDest:"Le client a chang\xE9 d'avis",needClutch:"Appuyez sur l'embrayage (X) pour changer de vitesse",stalled:"Cal\xE9 : appuyez \xE0 fond sur l'embrayage pour red\xE9marrer",limit:"Limite",total:"Total",wrongWay:"SENS INTERDIT",slowDown:"RALENTISSEZ",ctlTitle:"Commandes",ctlDrive:"ZR acc\xE9l\xE9rer \xB7 ZL freiner / reculer \xB7 stick ou croix diriger \xB7 B frein \xE0 main",ctlAct:"A prendre / d\xE9poser / plein \xB7 Y cam\xE9ra \xB7 \u25B2 \u25BC limiteur \xB7 + pause \xB7 Capture (\u25FB) signaler un bug",ctlGear:"Bo\xEEte manuelle : R monter \xB7 L descendre \xB7 X embrayage (maintenir)",ctlRemote:"T\xE9l\xE9commande : \u25C0 \u25B6 diriger \xB7 \u25B2 acc\xE9l\xE9rer \xB7 \u25BC freiner \xB7 OK action \xB7 Retour pause",rules:"Code de la route",rulesText:"Respectez la limite du panneau, arr\xEAtez-vous au feu rouge, ne prenez jamais un sens interdit et ne roulez pas sur le trottoir : la police verbalise. Chaque accident est expertis\xE9 : si c'est votre faute, vous payez les r\xE9parations, l'autre voiture et une amende.",stats:"Service en cours",earned:"Gagn\xE9",fines:"Amendes",repairs:"R\xE9parations",fuelSpent:"Carburant",km:"km parcourus",best:"Meilleure course",fare:"Course",camSpeed:"Radar : {0}",policeSpeed:"Contr\xF4le de police : {0}",seenPolice:"Vu par la police",fine_ped:"Accident : vous avez renvers\xE9 un pi\xE9ton",pedHurt:"Blessures (indemnisation)",passengerHurt:"Votre client a \xE9t\xE9 bless\xE9 (indemnisation)",pickupTo:"Prendre \xB7 vers {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Course, {0} km",car:"Voiture",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Recommencer",resetAsk:"Recommencer avec 300 DH, un quart de r\xE9servoir et un dossier vierge ?",yes:"Oui, recommencer",no:"Non",resetDone:"Nouveau d\xE9part : 300 DH",bugReport:"Signaler un bug (capture + journal)",bugSending:"Envoi du rapport de bug\u2026",bugSent:"Rapport de bug enregistr\xE9 : {0}",bugFail:"Rapport de bug non envoy\xE9 ({0})",bugOld:"Mettez My PC \xE0 jour pour envoyer des rapports de bug",camAhead:"Radar",police:"Police",credits:"Rues et b\xE2timents \xA9 contributeurs OpenStreetMap (ODbL). Relief : AWS Terrain Tiles. Mod\xE8les et sons : Kenney (CC0)."},es:{tag:"Conduce por las calles reales de T\xE1nger",press:"Pulsa OK para empezar",start:"Empezar el turno",settings:"Ajustes",help:"Controles",resume:"Seguir",quit:"Terminar el turno",back:"Volver",gearbox:"Caja de cambios",auto:"Autom\xE1tica",manual:"Manual",clutch:"Manual + embrague",limiter:"Limitador de velocidad",off:"No",money:"Caja",rides:"Carreras",fuel:"Combustible",paused:"Pausa",pickup:"Recoger al pasajero",dropoff:"Dejar al pasajero",refuel:"Repostar",stop:"Dejar de repostar",help_:"Llamar a la gr\xFAa",helpWait:"La ayuda est\xE1 en camino\u2026",to:"Hacia",eta:"Tiempo",late:"Tarde",meter:"Tax\xEDmetro",fine_speed:"Multa: exceso de velocidad",fine_red:"Multa: sem\xE1foro en rojo",fine_wrong:"Multa: sentido contrario",fine_pave:"Multa: circular por la acera",rideDone:"Carrera pagada",crashYou:"Accidente: culpa tuya",crashThem:"Accidente: culpa del otro conductor",crashWall:"Accidente: golpe contra el muro",impact:"Choque a {0} km/h",repairOwn:"Reparaci\xF3n de tu taxi",repairOther:"Da\xF1os del otro coche",repairInsured:"Reparaci\xF3n pagada por el seguro del otro conductor",fineFault:"Multa: p\xE9rdida de control",passengerLeft:"El pasajero se baj\xF3 sin pagar",helpDone:"Asistencia en carretera",helpService:"Desplazamiento",helpFuel:"6 L de gas\xF3leo",refuelDone:"Dep\xF3sito lleno",litres:"{0} L de gas\xF3leo",tip:"Propina",bumps:"Golpes en el viaje ({0})",lateBy:"{0} s de retraso",meterKm:"Tax\xEDmetro, {0} km",outOfFuel:"\xA1Sin combustible! Pulsa A para llamar a la asistencia.",lowFuel:"Reserva: busca una gasolinera (verde en el mapa).",helpComing:"La ayuda viene",boarded:"Pasajero a bordo: sigue la ruta verde",noDest:"El pasajero cambi\xF3 de idea",needClutch:"Pisa el embrague (X) para cambiar de marcha",stalled:"Calado: pisa el embrague a fondo para arrancar",limit:"L\xEDmite",total:"Total",wrongWay:"SENTIDO CONTRARIO",slowDown:"FRENA",ctlTitle:"Controles",ctlDrive:"ZR acelerar \xB7 ZL frenar / marcha atr\xE1s \xB7 stick o cruceta girar \xB7 B freno de mano",ctlAct:"A recoger / dejar / repostar \xB7 Y c\xE1mara \xB7 \u25B2 \u25BC limitador \xB7 + pausa \xB7 Captura (\u25FB) informar de un fallo",ctlGear:"Cambio manual: R subir \xB7 L bajar \xB7 X embrague (mantener)",ctlRemote:"Mando de la tele: \u25C0 \u25B6 girar \xB7 \u25B2 acelerar \xB7 \u25BC frenar \xB7 OK acci\xF3n \xB7 Atr\xE1s pausa",rules:"Normas de tr\xE1fico",rulesText:"Respeta el l\xEDmite de la se\xF1al, para en rojo, nunca entres en direcci\xF3n prohibida y no circules por la acera: la polic\xEDa multa. Cada accidente se peritan: si es culpa tuya pagas las reparaciones, el otro coche y una multa.",stats:"Turno actual",earned:"Ganado",fines:"Multas",repairs:"Reparaciones",fuelSpent:"Combustible",km:"km recorridos",best:"Mejor carrera",fare:"Tarifa",camSpeed:"Radar: {0}",policeSpeed:"Control policial: {0}",seenPolice:"Visto por la polic\xEDa",fine_ped:"Accidente: atropellaste a un peat\xF3n",pedHurt:"Heridas (indemnizaci\xF3n)",passengerHurt:"Tu pasajero result\xF3 herido (indemnizaci\xF3n)",pickupTo:"Recoger \xB7 a {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Carrera, {0} km",car:"Coche",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Empezar de nuevo",resetAsk:"\xBFEmpezar de nuevo con 300 DH, un cuarto de dep\xF3sito y el historial limpio?",yes:"S\xED, empezar de nuevo",no:"No",resetDone:"Nuevo comienzo: 300 DH",bugReport:"Informar de un fallo (captura + registro)",bugSending:"Enviando el informe\u2026",bugSent:"Informe de fallo guardado: {0}",bugFail:"Informe no enviado ({0})",bugOld:"Actualiza My PC para enviar informes de fallos",camAhead:"Radar",police:"Polic\xEDa",credits:"Calles y edificios \xA9 colaboradores de OpenStreetMap (ODbL). Relieve: AWS Terrain Tiles. Modelos y sonidos: Kenney (CC0)."},ar:{tag:"\u0642\u064F\u062F \u0641\u064A \u0634\u0648\u0627\u0631\u0639 \u0637\u0646\u062C\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",press:"\u0627\u0636\u063A\u0637 OK \u0644\u0644\u0628\u062F\u0621",start:"\u0627\u0628\u062F\u0623 \u0627\u0644\u0639\u0645\u0644",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",help:"\u0627\u0644\u062A\u062D\u0643\u0645",resume:"\u0645\u062A\u0627\u0628\u0639\u0629",quit:"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0645\u0644",back:"\u0631\u062C\u0648\u0639",gearbox:"\u0639\u0644\u0628\u0629 \u0627\u0644\u0633\u0631\u0639\u0627\u062A",auto:"\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643",manual:"\u064A\u062F\u0648\u064A",clutch:"\u064A\u062F\u0648\u064A + \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636",limiter:"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629",off:"\u0645\u062A\u0648\u0642\u0641",money:"\u0627\u0644\u0635\u0646\u062F\u0648\u0642",rides:"\u0627\u0644\u0631\u062D\u0644\u0627\u062A",fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",pickup:"\u0623\u0631\u0643\u0628 \u0627\u0644\u0632\u0628\u0648\u0646",dropoff:"\u0623\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646",refuel:"\u0627\u0645\u0644\u0623 \u0627\u0644\u062E\u0632\u0627\u0646",stop:"\u0623\u0648\u0642\u0641 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",help_:"\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",helpWait:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642\u2026",to:"\u0625\u0644\u0649",eta:"\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062A\u0628\u0642\u064A",late:"\u0645\u062A\u0623\u062E\u0631",meter:"\u0627\u0644\u0639\u062F\u0627\u062F",fine_speed:"\u0645\u062E\u0627\u0644\u0641\u0629: \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0633\u0631\u0639\u0629",fine_red:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631",fine_wrong:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0645\u0646\u0648\u0639",fine_pave:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0633\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641",rideDone:"\u062F\u064F\u0641\u0639\u062A \u0627\u0644\u0631\u062D\u0644\u0629",crashYou:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0624\u0643",crashThem:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0623 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",crashWall:"\u062D\u0627\u062F\u062B: \u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u062D\u0627\u0641\u0629 \u0627\u0644\u0631\u0635\u064A\u0641",impact:"\u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u0633\u0631\u0639\u0629 {0} \u0643\u0645/\u0633",repairOwn:"\u0625\u0635\u0644\u0627\u062D \u0633\u064A\u0627\u0631\u062A\u0643",repairOther:"\u0623\u0636\u0631\u0627\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649",repairInsured:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0639\u0644\u0649 \u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",fineFault:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0639\u062F\u0645 \u0627\u0644\u062A\u062D\u0643\u0645",passengerLeft:"\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646 \u062F\u0648\u0646 \u0623\u0646 \u064A\u062F\u0641\u0639",helpDone:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642",helpService:"\u0627\u0644\u062A\u0646\u0642\u0644",helpFuel:"6 \u0644\u062A\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",refuelDone:"\u062A\u0645\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",litres:"{0} \u0644\u062A\u0631 \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",tip:"\u0628\u0642\u0634\u064A\u0634",bumps:"\u0635\u062F\u0645\u0627\u062A \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629 ({0})",lateBy:"\u062A\u0623\u062E\u0631 {0} \u062B",meterKm:"\u0627\u0644\u0639\u062F\u0627\u062F\u060C {0} \u0643\u0645",outOfFuel:"\u0646\u0641\u062F \u0627\u0644\u0648\u0642\u0648\u062F! \u0627\u0636\u063A\u0637 A \u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",lowFuel:"\u0627\u0644\u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636: \u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062D\u0637\u0629 (\u0628\u0627\u0644\u0623\u062E\u0636\u0631 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629).",helpComing:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0642\u0627\u062F\u0645\u0629",boarded:"\u0627\u0644\u0632\u0628\u0648\u0646 \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0629: \u0627\u062A\u0628\u0639 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0623\u062E\u0636\u0631",noDest:"\u063A\u064A\u0651\u0631 \u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0623\u064A\u0647",needClutch:"\u0627\u0636\u063A\u0637 \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636 (X) \u0644\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0633\u0631\u0639\u0629",stalled:"\u062A\u0648\u0642\u0641 \u0627\u0644\u0645\u062D\u0631\u0643: \u0627\u0636\u063A\u0637 \u0627\u0644\u0642\u0627\u0628\u0636 \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",limit:"\u0627\u0644\u062D\u062F",total:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639",wrongWay:"\u0627\u062A\u062C\u0627\u0647 \u0645\u0645\u0646\u0648\u0639",slowDown:"\u062E\u0641\u0641 \u0627\u0644\u0633\u0631\u0639\u0629",ctlTitle:"\u0627\u0644\u062A\u062D\u0643\u0645",ctlDrive:"ZR \u062A\u0633\u0627\u0631\u0639 \xB7 ZL \u0641\u0631\u0627\u0645\u0644 / \u0631\u062C\u0648\u0639 \xB7 \u0627\u0644\u0639\u0635\u0627 \u0623\u0648 \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0648\u062C\u064A\u0647 \xB7 B \u0641\u0631\u0627\u0645\u0644 \u0627\u0644\u064A\u062F",ctlAct:"A \u0625\u0631\u0643\u0627\u0628 / \u0625\u0646\u0632\u0627\u0644 / \u062A\u0639\u0628\u0626\u0629 \xB7 Y \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \xB7 \u25B2 \u25BC \u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 + \u0625\u064A\u0642\u0627\u0641 \xB7 \u0632\u0631 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 (\u25FB) \u0644\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u062E\u0644\u0644",ctlGear:"\u0639\u0644\u0628\u0629 \u064A\u062F\u0648\u064A\u0629: R \u0631\u0641\u0639 \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 L \u062E\u0641\u0636\u0647\u0627 \xB7 X \u0627\u0644\u0642\u0627\u0628\u0636 (\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B)",ctlRemote:"\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u062D\u0643\u0645: \u25C0 \u25B6 \u062A\u0648\u062C\u064A\u0647 \xB7 \u25B2 \u062A\u0633\u0627\u0631\u0639 \xB7 \u25BC \u0641\u0631\u0627\u0645\u0644 \xB7 OK \u0625\u062C\u0631\u0627\u0621 \xB7 \u0631\u062C\u0648\u0639 \u0625\u064A\u0642\u0627\u0641",rules:"\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0633\u064A\u0631",rulesText:"\u0627\u062D\u062A\u0631\u0645 \u062D\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0644\u0648\u062D\u0629\u060C \u0648\u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631\u060C \u0648\u0644\u0627 \u062A\u062F\u062E\u0644 \u0634\u0627\u0631\u0639\u0627\u064B \u0645\u0645\u0646\u0648\u0639\u0627\u064B\u060C \u0648\u0644\u0627 \u062A\u0633\u0650\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641: \u0627\u0644\u0634\u0631\u0637\u0629 \u062A\u062D\u0631\u0631 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A. \u0643\u0644 \u062D\u0627\u062F\u062B \u064A\u064F\u0642\u064A\u064E\u0651\u0645: \u0625\u0630\u0627 \u0643\u0627\u0646 \u062E\u0637\u0623\u0643 \u062A\u062F\u0641\u0639 \u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 \u0648\u0645\u062E\u0627\u0644\u0641\u0629.",stats:"\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u0639\u0645\u0644",earned:"\u0627\u0644\u0645\u062F\u0627\u062E\u064A\u0644",fines:"\u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A",repairs:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D\u0627\u062A",fuelSpent:"\u0627\u0644\u0648\u0642\u0648\u062F",km:"\u0643\u0645 \u0645\u0642\u0637\u0648\u0639\u0629",best:"\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0629",fare:"\u0627\u0644\u0623\u062C\u0631\u0629",camSpeed:"\u0631\u0627\u062F\u0627\u0631: {0}",policeSpeed:"\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0634\u0631\u0637\u0629: {0}",seenPolice:"\u0631\u0635\u062F\u062A\u0643 \u0627\u0644\u0634\u0631\u0637\u0629",fine_ped:"\u062D\u0627\u062F\u062B\u0629: \u0635\u062F\u0645\u062A \u0631\u0627\u062C\u0644\u0627\u064B",pedHurt:"\u0625\u0635\u0627\u0628\u0627\u062A (\u062A\u0639\u0648\u064A\u0636)",passengerHurt:"\u0623\u0635\u064A\u0628 \u0632\u0628\u0648\u0646\u0643 (\u062A\u0639\u0648\u064A\u0636)",pickupTo:"\u0623\u0631\u0643\u0628 \xB7 \u0625\u0644\u0649 {0} \xB7 {1} \u0643\u0644\u0645 \xB7 {2} \u062F\u0631\u0647\u0645",fareKm:"\u0627\u0644\u0623\u062C\u0631\u0629\u060C {0} \u0643\u0644\u0645",car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",car_taxi:"\u0637\u0627\u0643\u0633\u064A \u0635\u063A\u064A\u0631",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"\u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",resetAsk:"\u0627\u0644\u0628\u062F\u0621 \u0645\u0646 \u062C\u062F\u064A\u062F \u0628\u0640 300 \u062F\u0631\u0647\u0645 \u0648\u0631\u0628\u0639 \u062E\u0632\u0627\u0646 \u0648\u0633\u062C\u0644 \u0646\u0638\u064A\u0641\u061F",yes:"\u0646\u0639\u0645\u060C \u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",no:"\u0644\u0627",resetDone:"\u0628\u062F\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629: 300 \u062F\u0631\u0647\u0645",bugReport:"\u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u062E\u0644\u0644 (\u0635\u0648\u0631\u0629 + \u0633\u062C\u0644)",bugSending:"\u062C\u0627\u0631\u064D \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0642\u0631\u064A\u0631\u2026",bugSent:"\u062D\u064F\u0641\u0638 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062E\u0644\u0644: {0}",bugFail:"\u0644\u0645 \u064A\u064F\u0631\u0633\u0644 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ({0})",bugOld:"\u062D\u062F\u0651\u062B My PC \u0644\u0625\u0631\u0633\u0627\u0644 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0623\u062E\u0637\u0627\u0621",camAhead:"\u0631\u0627\u062F\u0627\u0631",police:"\u0627\u0644\u0634\u0631\u0637\u0629",credits:"\u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064A \xA9 \u0645\u0633\u0627\u0647\u0645\u0648 OpenStreetMap (ODbL). \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633: AWS Terrain Tiles. \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A: Kenney (CC0)."}},bt={lang:"en",set(s){this.lang=_a[s]?s:"en",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"},t(s,...t){let e=_a[this.lang]&&_a[this.lang][s]||_a.en[s]||s;return t.forEach((n,i)=>{e=e.replace("{"+i+"}",n)}),e},line(s){let t=s.indexOf(":");return t<0?this.t(s):this.t(s.slice(0,t),s.slice(t+1))}};var $l=["auto","manual","clutch"],Jl=["taxi","city","hatch"],ya=class{constructor(t,e){this.app=t,this.root=e,this.items=[],this.f=0,this.back=null,this.screen=""}show(t,e,n,i){this.root.innerHTML=t,this.root.style.display="block",this.items=[...this.root.querySelectorAll("[data-f]")],this.acts=e,this.back=n,this.f=Math.min(i||0,this.items.length-1),this.paint()}hide(){this.root.style.display="none",this.root.innerHTML="",this.items=[],this.screen=""}get open(){return this.root.style.display==="block"}paint(){this.items.forEach((e,n)=>e.classList.toggle("focus",n===this.f));let t=this.items[this.f];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})}input(t,e,n){if(!this.open)return!1;if(t==="up"||t==="left")this.f=(this.f+this.items.length-1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="down"||t==="right")this.f=(this.f+1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="confirm"&&!n){let i=this.acts[this.f];this.app.sound.ui("ok"),i&&i()}else if((t==="cancel"||t==="menu")&&!n)if(this.back)this.app.sound.ui("back"),this.back();else return!1;return!0}gearLabel(){return bt.t(this.app.settings.gearbox==="auto"?"auto":this.app.settings.gearbox)}title(){this.screen="title";let t=this.app.saved&&this.app.saved.stats;this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${bt.t("tag")}</div>
<div class="menu"><div class="btn go" data-f>${bt.t("start")}</div><div class="btn" data-f>${bt.t("car")}: <b>${this.carLabel()}</b></div><div class="btn" data-f>${bt.t("gearbox")}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${bt.t("help")}</div>${t?`<div class="btn" data-f>${bt.t("reset")}</div>`:""}</div>
${t?`<div class="mini">${bt.t("money")} <b>${Math.round(this.app.saved.money)} DH</b> \xB7 ${bt.t("rides")} <b>${t.rides}</b> \xB7 ${t.km.toFixed(0)} ${bt.t("km")}</div>`:""}
<div class="foot">${bt.t("credits")}</div></div>`,[()=>this.app.startShift(),()=>this.cycleCar(()=>this.title(),1),()=>this.cycleGear(()=>this.title(),2),()=>this.controls(()=>this.title()),()=>this.confirmReset(()=>{this.app.resetCareer(),this.title()},()=>{this.title(),this.f=4,this.paint()})],null)}carLabel(){return bt.t("car_"+(this.app.settings.car||"taxi"))}cycleCar(t,e){let n=this.app.settings;n.car=Jl[(Jl.indexOf(n.car)+1)%Jl.length],this.app.saveSettings(),t(),this.f=e,this.paint()}confirmReset(t,e){this.show(`<div class="panel pause"><h2>${bt.t("reset")}</h2><p>${bt.t("resetAsk")}</p><div class="btn" data-f>${bt.t("no")}</div><div class="btn" data-f>${bt.t("yes")}</div></div>`,[e,t],e,0)}cycleGear(t,e){let n=this.app.settings;n.gearbox=$l[($l.indexOf(n.gearbox)+1)%$l.length],this.app.saveSettings(),this.app.shift&&this.app.applyGear(),t(),this.f=e,this.paint()}controls(t){this.show(`<div class="panel"><h2>${bt.t("ctlTitle")}</h2><p>${bt.t("ctlDrive")}</p><p>${bt.t("ctlAct")}</p><p>${bt.t("ctlGear")}</p><p>${bt.t("ctlRemote")}</p>
<h3>${bt.t("rules")}</h3><p class="small">${bt.t("rulesText")}</p><div class="btn" data-f>${bt.t("back")}</div></div>`,[t],t)}pause(t){this.screen="pause";let e=this.app.shift.taxi,n=e.stats,i=(r,a)=>`<div class="st"><span>${bt.t(r)}</span><b>${a}</b></div>`;this.show(`<div class="panel pause"><h2>${bt.t("paused")}</h2>${this.app.bugMsg?`<p class="bugmsg">${bt.line(this.app.bugMsg)}</p>`:""}
<div class="stats">${i("money",Math.round(e.money)+" DH")}${i("rides",n.rides)}${i("earned",Math.round(n.earned)+" DH")}${i("fines",Math.round(n.fines)+" DH")}${i("repairs",Math.round(n.repairs)+" DH")}${i("fuelSpent",Math.round(n.fuel)+" DH")}${i("km",n.km.toFixed(1))}</div>
<div class="btn go" data-f>${bt.t("resume")}</div><div class="btn" data-f>${bt.t("car")}: <b>${this.carLabel()}</b></div><div class="btn" data-f>${bt.t("gearbox")}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${bt.t("limiter")}: <b>${e.limiter?e.limiter+" km/h":bt.t("off")}</b></div><div class="btn" data-f>${bt.t("help")}</div><div class="btn" data-f>${bt.t("reset")}</div><div class="btn" data-f>${bt.t("bugReport")}</div><div class="btn" data-f>${bt.t("quit")}</div></div>`,[()=>this.app.resumeShift(),()=>{this.cycleCar(()=>{},1),this.app.startShift()},()=>this.cycleGear(()=>this.pause(),2),()=>{e.limiter=e.limiter?0:50,this.pause(),this.f=3,this.paint()},()=>this.controls(()=>this.pause()),()=>this.confirmReset(()=>this.app.resetCareer(),()=>{this.pause(),this.f=5,this.paint()}),()=>this.app.reportBug(),()=>this.app.endShift()],()=>this.app.resumeShift(),t)}};var Me=5,te=(s,t,e)=>{let n=document.createElement(e||"div");return n.className=s,t&&t.appendChild(n),n},Kl=s=>(s<0?"\u2212":"")+Math.abs(Math.round(s)).toLocaleString("en-US")+" DH",Ma=class{constructor(t){this.root=t,this.box=null}begin(t,e){this.shift=t,this.label=e;let n=this.root;n.innerHTML="",n.style.display="block",this.cash=te("h-cash",n),this.cashV=te("v",this.cash),this.rides=te("s",this.cash),this.sign=te("h-sign",n),this.signV=te("n",this.sign),this.street=te("h-street",n),this.warn=te("h-warn",n),this.area=te("h-area",n);let i=te("h-map",n);this.mapC=te("",i,"canvas"),this.mapC.width=this.mapC.height=260,this.mapX=this.mapC.getContext("2d"),this.dash=te("h-dash",n),this.spd=te("spd",this.dash),this.unit=te("unit",this.dash),this.unit.textContent="km/h",this.gear=te("gear",this.dash),this.rpm=te("rpm",this.dash),this.rpmB=te("b",this.rpm),this.fuelW=te("fuel",this.dash),this.fuelB=te("b",this.fuelW),this.fuelT=te("t",this.dash),this.lim=te("lim",this.dash),this.ride=te("h-ride",n),this.prompt=te("h-prompt",n),this.cards=te("h-cards",n),this.toastE=te("h-toast",n),this.cache={},this.t=0,this.toastT=0,this.drawBase(t.net)}set(t,e,n){this.cache[e]!==n&&(this.cache[e]=n,t.textContent=n)}drawBase(t){let e=t.box,n=Math.ceil((e.x1-e.x0)/Me),i=Math.ceil((e.z1-e.z0)/Me),r=document.createElement("canvas");r.width=n,r.height=i;let a=r.getContext("2d");a.fillStyle="#16202c",a.fillRect(0,0,n,i);let o=t.g;a.fillStyle="#0d2a44";for(let l=0;l<o.nz;l+=2)for(let c=0;c<o.nx;c+=2)o.h[l*o.nx+c]<-20&&a.fillRect((o.x0+c*o.c-e.x0)/Me-3,(o.z0+l*o.c-e.z0)/Me-3,6,6);a.lineCap="round",a.lineJoin="round";for(let l of[0,1])for(let c=0;c<t.ne;c++){let h=t.eCls[c];if(l===0!=h>=4)continue;a.strokeStyle=h<=1?"#e8c35a":h<=3?"#c9d2dc":"#6d7b8b",a.lineWidth=h<=1?3:h<=3?2.2:1.3,a.beginPath();let u=t.eOff[c],f=t.eN[c];for(let m=0;m<f;m++){let d=(t.px[u+m]-e.x0)/Me,x=(t.pz[u+m]-e.z0)/Me;m?a.lineTo(d,x):a.moveTo(d,x)}a.stroke()}this.base=r}update(t,e){let n=this.shift,i=n.me.veh,r=n.taxi;for(this.t+=t;r.events.length;){let g=r.events.shift();this.card(g),r.log.push(g),r.log.length>20&&r.log.shift()}for(;r.toasts.length;){let g=r.toasts.shift();this.toastE.textContent=bt.line(g.text),this.toastE.className="h-toast on "+g.kind,this.toastT=3.2}this.toastT>0&&(this.toastT-=t)<=0&&(this.toastE.className="h-toast");for(let g of this.cards.children)g._t-=t,g._t<=0&&!g._gone&&(g._gone=!0,g.classList.add("out"),setTimeout(()=>g.remove(),400));if(this.t<.08)return;let a=this.t;this.t=0;let o=Math.round(Math.abs(i.fwdSpeed)*3.6);this.set(this.cashV,"cash",Kl(r.money)),this.cashV.className="v"+(r.money<0?" neg":""),this.set(this.rides,"rides",bt.t("rides")+" "+r.stats.rides);let l=n.qp,c=l.edge>=0?l.lim:0;this.set(this.signV,"lim",c?String(c):""),this.sign.style.display=c?"":"none",this.set(this.street,"street",l.edge>=0?n.net.edgeName(l.edge,bt.lang):""),(this.areaT=(this.areaT||0)-a)<=0&&(this.areaT=.5,this.set(this.area,"area",n.net.areaName(i.px,i.pz,bt.lang)));let h=r.wrongNow?bt.t("wrongWay"):r.speeding?bt.t("slowDown"):i.stalled?bt.t("stalled"):"";this.set(this.warn,"warn",h),this.warn.className="h-warn"+(h?" on":""),this.set(this.spd,"spd",String(o)),this.spd.className="spd"+(c&&o>c+5?" over":"");let u=i.gearbox?i.mgear<0?"R":i.mgear===0?"N":String(i.mgear):i.reverse?"R":"D"+i.gear;this.set(this.gear,"gear",u),this.rpmB.style.transform="scaleX("+Math.min(1,i.rpm/i.spec.rpm).toFixed(3)+")",this.rpmB.className="b"+(i.rpm>i.spec.rpm*.92?" red":""),this.fuelB.style.transform="scaleX("+Math.max(0,r.fuel/r.tank).toFixed(3)+")",this.fuelB.className="b"+(r.fuel<4?" low":""),this.set(this.fuelT,"fuel","\u26FD "+r.fuel.toFixed(1)+" L"),this.set(this.lim,"limiter",r.limiter?"\u2298 "+r.limiter:"");let f=r.ride;if(f&&f.ped.state==="in"){let g=Math.max(0,f.eta-f.t),p=f.route?f.route.len:0,S=bt.t("to")+" "+(f.name||"\u2014")+`
`+(p/1e3).toFixed(1)+" km \xB7 "+(g>0?bt.t("eta")+" "+Math.floor(g/60)+":"+String(Math.floor(g%60)).padStart(2,"0"):bt.t("late"))+`
`+bt.t("fare")+" "+r.meter()+" DH";this.set(this.ride,"ride",S),this.ride.className="h-ride on"+(g<=0?" late":"")}else this.set(this.ride,"ride",""),this.ride.className="h-ride";let m=r.prompt,d=m==="help"?"help_":m,x="";if(m==="helpWait")x=bt.t("helpWait");else if(m==="pickup"){let g=r.nearPed(i),p=g&&g.quote;x=this.label()+"  "+(p?bt.t("pickupTo",p.name||"\u2014",p.km.toFixed(1),p.fare):bt.t("pickup"))}else m&&(x=this.label()+"  "+bt.t(d)+(m==="refuel"?"  ("+13.4+" DH/L)":""));this.set(this.prompt,"prompt",x),this.prompt.className="h-prompt"+(x?" on":""),this.map(n,i,r,a)}map(t,e,n){let i=this.mapX,r=260,a=t.net,o=a.box,l=Math.atan2(e.R[6],e.R[8]),c=1.25;i.save(),i.fillStyle="#16202c",i.fillRect(0,0,r,r),i.translate(r/2,r*.62),i.rotate(Math.PI+l),i.scale(c,c);let h=(e.px-o.x0)/Me,u=(e.pz-o.z0)/Me;i.drawImage(this.base,-h,-u);let f=n.ride;if(f&&f.route&&f.ped.state==="in"){i.strokeStyle="#2cff8f",i.lineWidth=3.2/c,i.beginPath();let d=f.route.edges,x=t.qp.edge===(d[0]&&d[0][0])?t.qp.s:-1;i.moveTo(0,0);let g=0;for(let _=0;_<d.length;_++){let v=d[_][0],R=d[_][1],T=a.eOff[v],b=a.eN[v];for(let C=0;C<b;C++){let M=T+(R>0?C:b-1-C),y=a.sS[M];if(!(_===0&&x>=0&&(R>0?y<x:y>x))&&(_===d.length-1&&v===f.e&&(R>0?y>f.s:y<f.s)||(i.lineTo((a.px[M]-e.px)/Me,(a.pz[M]-e.pz)/Me),++g>2e3)))break}}let p=(f.x-e.px)/Me,S=(f.z-e.pz)/Me;i.lineTo(p,S),i.stroke(),i.fillStyle="#2cff8f",i.beginPath(),i.arc(p,S,5/c,0,7),i.fill()}i.fillStyle="#ffd400";for(let d of n.peds)d.state==="wait"&&(i.beginPath(),i.arc((d.x-e.px)/Me,(d.z-e.pz)/Me,3.6/c,0,7),i.fill());let m=t.enforce;if(m){i.fillStyle="#ff4b3e";for(let d of m.cams){let x=(d.x-e.px)/Me,g=(d.z-e.pz)/Me;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.4/c,0,7),i.fill())}i.fillStyle="#3d7bff";for(let d of m.police){let x=(d.x-e.px)/Me,g=(d.z-e.pz)/Me;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.8/c,0,7),i.fill())}}i.fillStyle="#19d17a";for(let d of a.stations){let x=a.eOff[d.e]+d.k;i.fillRect((a.px[x]-e.px)/Me-4/c,(a.pz[x]-e.pz)/Me-4/c,8/c,8/c)}i.restore(),i.fillStyle="#21c8ef",i.strokeStyle="#fff",i.lineWidth=1.5,i.beginPath(),i.moveTo(r/2,r*.62-9),i.lineTo(r/2+6,r*.62+7),i.lineTo(r/2,r*.62+3),i.lineTo(r/2-6,r*.62+7),i.closePath(),i.fill(),i.stroke()}card(t){let e=te("h-card "+t.kind,null);te("t",e).textContent=bt.t(t.title);for(let[n,i]of t.lines){let r=te("r",e);te("l",r,"span").textContent=bt.line(n),te("a"+(i<0?" neg":i>0?" pos":""),r,"span").textContent=i?Kl(i):""}if(t.lines.length>1||t.total){let n=te("r tot",e);te("l",n,"span").textContent=bt.t("total"),te("a"+(t.total<0?" neg":" pos"),n,"span").textContent=Kl(t.total)}for(e._t=t.kind==="crash"?7:5.5,this.cards.appendChild(e);this.cards.children.length>3;)this.cards.firstChild.remove();this.onCard&&this.onCard(t)}end(){this.root.innerHTML="",this.root.style.display="none",this.base=null}};var he=window.MyPC,ba=1/60,O={renderer:null,canvas:null,info:null,quality:null,net:null,input:new va,shift:null,hud:null,ui:null,sound:null,raf:0,last:0,acc:0,state:"boot",paused:!1,saved:null,settings:{gearbox:"auto",car:"taxi"},fpsLog:[],workLog:[],saveT:0};window.TT=O;function Ug(s){let e=new URLSearchParams(location.search).get("q")||s.quality&&s.quality.tier||"mid";return{tier:e,scale:{low:.6,mid:.8,high:1}[e]||.8,minScale:e==="low"?.45:.55}}function Ng(){let s=document.getElementById("c"),t=new Nr({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:/proof/.test(location.search)});return t.setPixelRatio(1),t.outputColorSpace=ai,t.toneMapping=_n,O.canvas=s,t}function Hs(){let s=O.shift?O.shift.scale:O.quality.scale,t=Math.round(1920*s*Math.min(1,window.innerWidth/1920*1.5)),e=Math.round(t*window.innerHeight/window.innerWidth);O.renderer.setSize(t,e,!1),O.canvas.style.width="100vw",O.canvas.style.height="100vh"}function nu(s){O.raf=requestAnimationFrame(nu);let t=performance.now();O.last||(O.last=s);let e=s-O.last;O.last=s,O.acc+=Math.min(100,e);let n=0;for(;O.acc>=ba*1e3-.5&&n<4;)zg(ba),O.acc-=ba*1e3,n++;O.acc>ba*2e3&&(O.acc=0),O.shift&&O.state!=="boot"&&(O.shift.render(e),O.capture&&Fg(O.capture)),O.fpsLog.length<2e4&&(O.fpsLog.push(e),O.workLog.push(performance.now()-t))}function tu(){O.raf||(O.last=0,O.acc=0,O.raf=requestAnimationFrame(nu))}function eu(){O.raf&&cancelAnimationFrame(O.raf),O.raf=0}function zg(s){if(O.input.poll(s),O.input.edge.capture&&O.shift&&(O.state==="drive"||O.state==="pause")&&(O.capture="capture"),O.state==="drive"&&O.shift){O.shift.update(s,O.input),O.hud.update(s,O.input),O.sound.update(O.shift,s);let t=O.shift.taxi;t.dirty&&(O.saveT-=s)<=0&&(O.saveT=5,t.dirty=!1,Sa())}}function Sa(){if(!O.shift)return;let s=O.shift.taxi.save(),t=O.shift.me.veh;s.at={x:Math.round(t.px),z:Math.round(t.pz)},O.saved=s,he.save("taxi",s)}function Fg(s){O.capture=null;let t=O.shift;if(!t||O.bugBusy)return;let e=t.bug.shot(O.canvas),n=O.fpsLog.slice(-120),i=t.bug.state(t,{from:s,state:O.state,lang:bt.lang,screen:[O.canvas.width,O.canvas.height],fps:n.length?Math.round(1e3*n.length/n.reduce((a,o)=>a+o,0)):0});window.TT.lastBug={data:i,img:e.length};let r=(a,o)=>{O.bugMsg=a,O.state==="pause"&&O.ui.screen==="pause"?O.ui.pause(O.ui.f):t.taxi.toast(a,o)};if(!he.bug){r("bugOld","bad");return}O.bugBusy=!0,r("bugSending","info"),he.bug(s==="menu"?"Pause > Report a bug":"Capture button",i,e).then(a=>{O.bugBusy=!1,window.TT.lastBug.id=a,r("bugSent:"+String(a).slice(0,6),"ok")}).catch(a=>{O.bugBusy=!1,window.TT.lastBug.error=a&&a.code,console.warn("[taxi] bug report",a&&a.code,i),r("bugFail:"+(a&&a.code||"?"),"bad")})}O.reportBug=()=>{O.capture="menu"};O.saveSettings=()=>he.save("settings",O.settings);O.applyGear=()=>{if(!O.shift)return;let s=O.shift.me.veh,t=O.settings.gearbox;s.gearbox=t==="auto"?null:t,s.mgear=1,s.stalled=!1};O.startShift=function(s){O.ui.hide(),O.shift&&(s||Sa(),O.shift.dispose(),O.shift=null);let t=new xa(O.renderer,O.net,O.quality,{gearbox:O.settings.gearbox,car:O.settings.car,saved:O.saved,start:O.saved&&O.saved.at,lang:bt.lang});t.onScale=()=>Hs(),t.onSound=(e,n,i)=>O.sound.event(e,n,i,t),O.shift=t,O.hud.begin(t,()=>O.input.hasPad()&&he.gamepad&&he.gamepad.label?"("+he.gamepad.label(0)+")":"(OK)"),O.sound.resume(),O.sound.begin(t),O.input.clearHeld(),O.state="drive",Hs(),he.announce&&he.announce(bt.t("boarded").split(":")[0])};O.resetCareer=function(){let s=O.saved&&O.saved.at;if(O.saved=s?{at:s}:null,he.save("taxi",O.saved),O.shift){let t=O.shift.me.veh;O.saved={at:{x:Math.round(t.px),z:Math.round(t.pz)}},O.shift.taxi.dirty=!1,O.startShift(!0)}};O.pauseShift=function(){O.state==="drive"&&(O.state="pause",O.bugMsg=null,O.sound.pause(),O.ui.pause())};O.resumeShift=function(){O.ui.hide(),O.input.clearHeld(),O.input.prev.action=!0,O.state="drive",O.sound.resume()};O.endShift=function(){Sa(),O.sound.resume(),O.sound.end(),O.hud.end(),O.shift&&(O.shift.dispose(),O.shift=null),O.state="menu",O.saved&&O.saved.stats&&O.saved.stats.earned&&he.submitScore&&he.submitScore(Math.round(O.saved.stats.earned),{}),O.ui.title()};he.init({ownMenu:!0,onInit:async function(s){O.info=s;try{bt.set(s.lang),O.quality=Ug(s),O.renderer=Ng(),Hs(),window.addEventListener("resize",Hs),await zh(t=>he.progress(t*.6)),O.net=await Kr.load(t=>he.progress(.6+t*.35)),O.saved=he.load("taxi",null),O.settings=Object.assign({gearbox:"auto",car:"taxi"},he.load("settings",null)),O.hud=new Ma(document.getElementById("hud")),O.sound=new Jr(s.volume||{music:.7,sfx:.8}),O.ui=new ya(O,document.getElementById("ui")),O.input.menuCb=(t,e,n)=>{if(O.state==="drive"){t==="cancel"&&!n&&O.pauseShift();return}O.ui.input(t,e,n)},he.progress(1),he.ready()}catch(t){he.report&&he.report(t,{where:"init"}),he.fail(String(t&&t.message||t))}},onStart:function(){O.sound.start(),tu();let s=new URLSearchParams(location.search);s.has("dev")?(s.get("gear")&&(O.settings.gearbox=s.get("gear")),s.get("car")&&(O.settings.car=s.get("car")),s.has("fresh")&&(O.saved=null),s.has("x")&&(O.saved=Object.assign({},O.saved,{at:{x:+s.get("x"),z:+s.get("z")}})),O.startShift()):(O.state="menu",O.ui.title())},onPause:function(){eu(),O.sound.pause(),O.paused=!0,O.state==="drive"&&O.pauseShift()},onResume:function(){O.paused=!1,O.input.clearHeld(),O.state!=="pause"&&O.sound.resume(),tu()},onDestroy:function(){Sa(),eu(),window.removeEventListener("resize",Hs),O.shift&&O.shift.dispose(),O.sound&&O.sound.close(),O.renderer&&O.renderer.dispose()},onInput:function(s,t,e,n){if(s==="menu"&&t===!1){O.state==="drive"?O.pauseShift():O.state==="pause"&&O.resumeShift();return}if(s==="cancel"&&t&&O.state==="menu"&&O.ui.screen==="title")return!1;O.input.onAction(s,t,e,n)},onVolume:function(s){O.sound&&O.sound.volume(s)}});he.gamepad&&(he.gamepad.on("button",(s,t,e,n)=>O.input.onButton(s,t,e,n)),he.gamepad.on("axes",(s,t)=>O.input.onAxes(s,t)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
